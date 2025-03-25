---
title: "Getting Started with Publishing"
slug: /android-getting-started-with-publishing
---
Follow these steps to add the publishing capability to your application.

## 1. Add SDK as Gradle Dependency

You can get the SDK library from [MavenCentral](https://central.sonatype.com/artifact/com.millicast/millicast-sdk-android). If you haven't already, add the following to your gradle dependencies.

```kotlin
implementation("com.millicast:millicast-sdk-android:2.0.0")
```

## 2. Initialize the SDK

Call the [initialize](https://millicast.github.io/doc/latest/android/android/com.millicast/-core/initialize.html) method to initialize the SDK. This needs to be done only once at the start of the App.

```kotlin
import android.app.Application
import com.millicast.Core

class MainApplication : Application() {
  override fun onCreate() {
    super.onCreate()
    Core.initialize()
  }
}
```

## 3. Capture audio and video

To capture media, get an array of available [audio and video sources](https://millicast.github.io/doc/latest/android/android/com.millicast/-media/index.html) and choose the preferred sources from the list. After you start capturing audio and video, the SDK will return an audio and video track that you can add to the publisher later.

```kotlin
// Get the first available microphone
val audioSource = Media.audioSources<MicrophoneAudioSource>().first()

val audioTrack = try {
    audioSource.startCapture()
} catch (e: Throwable) {
    // In the case of a problem when starting the audio capture try checking your permissions
}

// Get the first camera source
val videoSource = Media.videoSources<CameraVideoSource>().first()

// Get capabilities of the available video sources, such as width, height, and frame rate
val capabilities = videoSource.capabilities

// Set the preferred capability; not setting any capability object results in setting the first one from the list
videoSource.setCapability(capabilities.first())

// Start capturing video
val videoTrack = try {
    videoSource.startCapture()
} catch (e: RuntimeException) {
    // In the case of a problem when starting the video capture
    // check the camera permissions or exclusive access from another application
}

// Handle switching between cameras
videoSource.switchCamera(object: SwitchCameraHandler {
  override fun onCameraSwitchDone(p0: Boolean) {
    TODO("Not yet implemented")
  }

  override fun onCameraSwitchError(reason: String?) {
    TODO("Not yet implemented")
  }
})

// Replace width, height, and fps with your own values
videoSource.changeCaptureFormat(width, height, fps)
```

## 4. Publish a stream

### 4.1 Instantiate a publisher

Create a [publisher object](https://millicast.github.io/doc/latest/android/android/com.millicast/-core/create-publisher.html)

```kotlin
val publisher = Core.createPublisher()
```

### 4.2 Set publisher credentials

Make sure to use the publisher's methods in a coroutine context. Then, create a stream in your Dolby.io developer dashboard or using the Dolby.io Streaming REST API and [set your credentials](https://millicast.github.io/doc/latest/android/android/com.millicast/-publisher/set-credentials.html). Collecting the [state](https://millicast.github.io/doc/latest/android/android/com.millicast/-publisher/current-state.html) of the publisher object from its StateFlow is important for handling errors and knowing if the SDK is ready for the [publish](https://millicast.github.io/doc/latest/android/android/com.millicast/-publisher/publish.html) call to happen.

```kotlin
// Helper for later usage
fun <T> CoroutineScope.safeLaunch(
	onError: (suspend CoroutineScope.(err: Throwable) -> T)? = null,
    block: suspend CoroutineScope.() -> T
  ) = launch {
    try {
      block()
    } catch (err: Throwable) {
      onError?.invoke(this, err)
    }
  }

  // Most of the publisher's methods needs to be in a coroutine context,
  // such as viewModelScope or ServiceJob
  val coroutineScope = CoroutineScope(Dispatchers.IO)

  // In this sample, we deroute the scope to collect every new publisher's state
  // For instance, in a jetpack compose implementation it could be:
  //
  // @Composable
  // fun MyLoadingScreen(publisher: Publisher) {
  //   val state by publisher.state.collectAsState(null)
  //
  //   state?.let {
  //     when(it.connectionState) {
  //       ConnectionState.Connected -> ...
  //       else -> ...
  //     }
  //   }
  // }
  coroutineScope.async {
    publisher.state.collect { newPublisherState ->
      Log.d("SAMPLE", "having new State ${newPublisherState}")
    }
  }

  // Get the credentials structure from your publisher instance, fill it in, and set the modified credentials
  coroutineScope.safeLaunch {
    val credential = Credential(
      // Set the streamName, token, and API URL
      streamName = "myStreamName",
      token = "aefea56153765316754fe",
      apiUrl = "https://director.millicast.com/api/director/publish"
    )

    publisher.setCredentials(credential)
  }
```

### 4.3 Add video and audio tracks to the publisher

[Add](https://millicast.github.io/doc/latest/android/android/com.millicast/-publisher/add-track.html) the audio and video track that you created earlier when you started capturing media.

```kotlin
// Use the previous publisher and coroutine scope
coroutineScope.safeLaunch {
  // Previously created tracks:

  publisher.addTrack(videoTrack);
  publisher.addTrack(audioTrack);
}
```

### 4.4 Configure publishing options

Configure publishing options in the publisher, such as selecting the audio and video codecs or enabling multi-source on the publisher.

Get a list of the [available codecs](https://millicast.github.io/doc/latest/android/android/com.millicast/-media/index.html) and [set](https://millicast.github.io/doc/latest/android/android/com.millicast.publishers/-option/index.html) the codecs that you want to use. By default, the SDK uses VP8 as the video codec and Opus as the audio codec.

Additionally, to publish several sources from the same application, create a publisher instance for each source. We recommend enabling discontinuous transmission that detects audio input and sends audio only when it is detected.

```kotlin
// Use the previous publisher and coroutine scope

coroutineScope.safeLaunch {
  val videoCodecs = Media.supportedVideoCodecs
  val audioCodecs = Media.supportedAudioCodecs

  publisher.connect()
}

// Call publish after reaching the PublisherConnectionState.Connected state
coroutineScope.safeLaunch {
  publisher.publish(
    Option(
      // Choose the preferred codecs
      videoCodec = videoCodecs.first(),
      audioCodec = audioCodecs.first(),
      // If you want to support multi-source, set a source ID of the publisher
      // To publish several sources from the same application, create a publisher instance for each source
      sourceId = "sourceId",
      // Set dtx to true for discontinuous audio transmission, i.e. only send audio when a user's voice is detected
      dtx = true,
      // Enable stereo
      stereo = true
    )
  )
}
```

### 4.5 Publish your stream

Connect to the Millicast service and publish your streams.

Use the [connect](https://millicast.github.io/doc/latest/android/android/com.millicast/-client/connect.html) method to authenticate and access Dolby.io Real-time Streaming through the Director API. Successful authentication results in opening a WebSocket connection that allows using the Dolby.io Real-time Streaming server and receiving a StateFlow update to [state](https://millicast.github.io/doc/latest/android/android/com.millicast/-publisher/current-state.html) as PublisherConnectionState.Connected.

Only after a successful connection, use the [publish](https://millicast.github.io/doc/latest/android/android/com.millicast/-publisher/publish.html?query=suspend%20fun%20publish():%20Boolean) method to start publishing the stream. Once the publisher starts sending media, the SDK will update [state](https://millicast.github.io/doc/latest/android/android/com.millicast/-publisher/current-state.html) to PublisherConnectionState.Started.

```kotlin
// Call publish after reaching the PublisherConnectionState.Connected state
coroutineScope.safeLaunch {
  publisher.state.map { it.connectionState }.distinctUntilChanged().collect {
    if (it == PublisherConnectionState.Connected) {
      // Set options as defined earlier
      publisher.publish(options)
    }
  }
}
```

## 5. Observe state changes

There are different publishers that emit events informing you of the state of your stream. Please note, the listeners should be setup before you start publishing so you receive all the events from a publisher.

### 5.1 Connection state to the Millicast service

To monitor the state of the connection to the publisher and the state of the publishing, use the following code

```kotlin
launch {
  publisher.state.map { it.connectionState }.distinctUntilChanged().collect { state ->
    when(state) {
      PublisherConnectionState.Connected -> {}
      PublisherConnectionState.Connecting -> {}
      PublisherConnectionState.Disconnected -> {}
      PublisherConnectionState.DisconnectedError -> {}
      PublisherConnectionState.Disconnecting -> {}
      is PublisherConnectionState.Error -> {}
      PublisherConnectionState.Started -> {}
      PublisherConnectionState.Stopped -> {}
    }
  }
}
```

### 5.2 Viewers of your stream

Listen to the viewer activity events of your stream using

```kotlin
launch {
  publisher.state.map {it.active}.distinctUntilChanged().collect { viewersActive ->
    if(viewersActive) {
      Log.d("Event:", "Viewers active")
    } else {
      Log.d("Event:", "No Viewers active")
    }
  }
}
```

Number of viewers viewing your stream in a given time is yet another vital aspect for you as a publisher. To listen to viewer count updates, use

```kotlin
launch {
  publisher.state.map {it.viewers}.distinctUntilChanged().collect { viewerCount ->
    Log.d("Event:", "Viewer count is $viewerCount")
  }
}
```

## 6. Collect WebRTC statistics

Set the [enableStats](https://millicast.github.io/doc/latest/android/android/com.millicast/-client/enable-stats.html) method to true to collect statistics.
You can periodically collect the WebRTC peer connection statistics if you enable them through the enableStats method of the publisher. After enabling the statistics, you will get a report every second through the [onStatsReport](https://millicast.github.io/doc/latest/android/android/com.millicast.clients/-listener/on-stats-report.html?query=abstract%20fun%20onStatsReport(report:%20RtsReport)) callback in the listener object. The identifiers and way to browse the stats are following the RTC specification. The report contains the RTSReport object, which is a collection of several Stats objects. They all have a specific type, whether it is inbound, outbound, codec, or media. Inbound is the statistics of incoming transport for the viewer and outbound is a type of outgoing statistics for the publisher.

```kotlin
publisher.rtcStatsReport.collect { report ->
  // Parse the stats report for logging or display on to the user interface
}
```

## 7. Disable automatic reconnection

By default, the publisher and subscriber attempt to reconnect automatically in case of network errors. To disable auto reconnection in [ConnectionOptions](https://millicast.github.io/doc/latest/android/android/com.millicast.clients/-connection-options/index.html), use the following code:

```kotlin
val connectionOption = ConnectionOptions(autoReconnect = false)
publisher.connect(connectionOption)
```

## 8. Error handling

To listen to the errors emitted by the publisher, listen to the connectionState of the publisher.state as described in section 5.1. In addition to that there are additional two state events that can be monitored for errors. Publisher also provides notification for any signalling error in publisher.signalingError.

```kotlin
publisher.state.map { it.peerConnectionState }.distinctUntilChanged().collect {}
publisher.state.map { it.websocketConnectionState }.distinctUntilChanged().collect {}

publisher.signalingError.distinctUntilChanged().collect {}
```

# 9. Close the stream

To close the publishing stream and handle proper cleanup of resources, first [unpublish](https://millicast.github.io/doc/latest/android/android/com.millicast/-publisher/unpublish.html) and [disconnect](https://millicast.github.io/doc/latest/android/android/com.millicast/-client/disconnect.html) the publisher, then close and release the publishing sources. Note that unlike publish and connect, these steps don't have to wait for an updated state before being called.

```kotlin Kotlin
// With the same coroutine scope
coroutineScope.safeLaunch {
  // disconnect the publisher
  publisher.unpublish()
  publisher.disconnect()
  // stop the source captures
  audioSource.stopCapture()
  videoSource.stopCapture()
  // release the sources
  audioSource.release()
  videoSource.release()
}
```
