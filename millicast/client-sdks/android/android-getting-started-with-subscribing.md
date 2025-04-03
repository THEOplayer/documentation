---
title: 'Getting Started with Subscribing'
slug: /android-getting-started-with-subscribing
---

Follow these steps to add the subscribing capability to your application.

## 1. Add SDK to Gradle

You can get the SDK library from [MavenCentral](https://central.sonatype.com/artifact/com.millicast/millicast-sdk-android). If you haven't already, add the following to your gradle dependencies.

```kotlin
implementation("com.millicast:millicast-sdk-android:2.0.0")
```

## 2. Initialize the SDK

Call the [initialize](https://millicast.github.io/doc/latest/android/android/com.millicast/-core/initialize.html) method to initialize the SDK. This needs to be done only once at the start of the App.

```kotlin Kotlin
import android.app.Application
import com.millicast.Core

class MainApplication : Application() {
  override fun onCreate() {
    super.onCreate()
    Core.initialize()
  }
}
```

## 3. Create a subscriber object

Use the [createSubscriber](https://millicast.github.io/doc/latest/android/android/com.millicast/-core/create-subscriber.html) method to create a subscriber object.

```kotlin
launchDefaultScope {
    // Creating the subscriber
    val subscriber = Core.createSubscriber()
}
```

## 4. Setup your credentials

Get your **stream name** and **stream ID** from the dashboard and set them up in the SDK using the [setCredentials](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/set-credentials.html) method.

```kotlin
launchDefaultScope {
  val credentials = Credential(
    streamName = "STREAM_NAME",
    accountId = "ACCOUNT_ID",
    apiUrl = "https://director.millicast.com/api/director/subscribe"
  )
  subscriber.setCredentials(credentials)
}
```

## 5. Subscribe to a stream

Subscribing a stream includes two steps.

### 5.1 Connect to the Millicast service

Define your connection options and connect to the Millicast platform.

```kotlin
launchDefaultScope {
    // autoReconnect - Set to `true` if you would like the SDK to reconnect to stream on a connection error; for example - when
    // the network is lost and later restored.
    val connectionOptions = ConnectionOptions(autoReconnect: true)
    subscriber.connect(connectionOptions)
}
```

### 5.2 Subscribe with the preferences

Once the connection is successful, call the subscribe method with your preferred subscribe options. To monitor the connection state, please refer to the section 7 - Listen to Websocket and Peer connection state changes.

```kotlin
launchDefaultScope {
  subscriber.state.map { it.connectionState }.distinctUntilChanged().collect {
    if (it == SubscriberConnectionState.Connected) {
        val option = Option(
        // The main source that will be received by the default media stream
        pinnedSourceId = "mainSource",
        // Enables audio multiplexing and denotes the number of audio tracks to receive as Voice Activity Detection (VAD)
        // multiplexed audio
        multiplexedAudioTrack = 3U,
        // Audio streams that should not be included in the multiplex, for example your own audio stream
        excludedSourceId = arrayOf("excluded")
        )
      subscriber.subscribe(option)
    }
  }
}
```

Refer to [Option](https://millicast.github.io/doc/latest/android/android/com.millicast.subscribers/-option/index.html) for more subscriber options.

## 6. Manage broadcast events

When broadcast events occur, the SDK publishes the update to one of the flows maintained by the client object. The following Subscriber event listeners are available:

### 6.1 Receive Audio and Video tracks

RemoteTrack is a fundamental entity that enables us to view a stream. It can either be a video track (RemoteVideoTrack) or an audio track (RemoteAudioTrack). You can just call enableAsync() or disableAsync() to enable or disable the track.
You should store the tracks and renderers for later use.
Important: Audio and Video tracks of the same source will have the same [sourceId](https://millicast.github.io/doc/latest/android/android/com.millicast.publishers/-option/source-id.html)

```kotlin
launch {
  subscriber.onRemoteTrack.collect { trackHolder ->
      when (trackHolder) {
          is RemoteAudioTrack -> {
          // Store audio tracks for later usage
            audioTracks.add(trackHolder)
          }

          is RemoteVideoTrack -> {
            // Store video tracks for later usage
            videoTracks.add(trackHolder)
          }
      }
  }
}
```

### 6.2 Listen to Active/Inactive state of tracks

For each RemoteTrack, listen to its active and inactive state by moniting its `onState` stateFlow. This will receive a RemoteVideoTrackState object with an `isActive` field, which signals if that track is available for playback or not.
Note: A video track receives video frames only when its enabled.

```kotlin
launch{
  remoteTrack.onState.collect { trackState ->
    Log.d(TAG, "onVideoTrack state ${trackState.mid}, ${trackState.isActive}")
    if (!trackState.isActive) {
        // Optional.
        // The SDK automatically restores the state of the track when it transitions to `active` from an `inactive` state.
        // You can optionally disable the video track when it becomes inactive. This step is optional. This gives you control on when to enable the track when it comes back active.
        videoTrack.disableAsync()
    } else {
        // Optional.
        // If you choose to disable a track when it became inactive, you have to enable the video track back after it is active again.
        // At any point in time when you wish to start receive video from the track call the following.
        videoTrack.enableAsync(videoSink = videoSink)
    }
  }
}
```

Same can be done for AudioTrack.

### 6.3 Receive layer information

If your video track has multiple layers(spatial or temporal), use the layers stateFlow to receive the list of active layers.
To receive layers, collect Layers data emitted from RemoteVideoTrackState.
To select a particular layer, re-enable the track by passing the layer that you would like to select.

```kotlin
videoTrack.onState.collect { trackState ->
  trackState.layers?.let { layers ->
    video.enableAsync(videoSink = videoSink, layer = layers.activeLayers[0])
}
```

## 7. Listen to Websocket and Peer connection state changes

When broadcast events occur, the SDK publishes the update to one of the flows maintained by the client object. The following Subscriber event listeners are available:

```kotlin
subscriber.state.map { it.connectionState }.distinctUntilChanged()
  .collect { state ->
      when (state) {
          SubscriberConnectionState.Connected -> {}
          SubscriberConnectionState.Connecting -> {}
          SubscriberConnectionState.Disconnected -> {}
          is SubscriberConnectionState.DisconnectedError -> {}
          SubscriberConnectionState.Disconnecting -> {}
          is SubscriberConnectionState.Error -> {}
          SubscriberConnectionState.Stopped -> {}
          SubscriberConnectionState.Subscribed -> {}
      }
  }

subscriber.state.map { it.websocketConnectionState }.distinctUntilChanged().collect {}
subscriber.state.map { it.peerConnectionState }.distinctUntilChanged().collect {}
```

## 8. Render video on the UI

The SDK provides a custom View (TextureViewRenderer) for rendering a video track. Use TextureViewRenderer as in the example below:

```kotlin
Box(modifier = Modifier.fillMaxSize()) {
  AndroidView(
      modifier = Modifier
          .aspectRatio(16F / 9)
          .align(Alignment.Center),
      factory = {
          TextureViewRenderer(context).apply {
              init(Media.eglBaseContext, null)
          }
      },
      update = { view ->
          view.setScalingType(RendererCommon.ScalingType.SCALE_ASPECT_FIT)
            videoTrack.enableAsync(videoSink = view)
      }
  )
}
```

## 9. Collecting RTC statistics

You can periodically collect the WebRTC peer connection statistics if you enable them through the enableStats() method of the subscriber. After enabling the statistics, you will get a report every second through the rtcStatsReport stateFlow.
The identifiers and way to browse the stats are following the [RTC specification](https://www.w3.org/TR/webrtc-stats/). The report contains the RtsReport object, which is a collection of several RtpStream objects. They all have a specific type, whether it is inbound, outbound, codec, or media. Inbound is the statistics of incoming transport for the viewer and outbound is a type of outgoing statistics for the publisher.

```kotlin
subscriber.rtcStatsReport.collect { report ->
  // Parse the stats report for logging or display on to the user interface
}
```

## 10. Error handling

To listen to the errors emitted by the subscriber, listen to the connectionState of the subscriber.state as described in section 7. In addition to that there are additional two state events that can be monitored for errors. Subscriber also provides notification for any signaling error in subscriber.signalingError.

```kotlin
subscriber.state.map { it.peerConnectionState }.distinctUntilChanged().collect {}
subscriber.state.map { it.websocketConnectionState }.distinctUntilChanged().collect {}

subscriber.signalingError.collect {}
```

## 11. Unsubscribe and disconnect the session

And finally, when you have finished viewing the stream, stop the subscription by calling [unsubscribe()](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/unsubscribe.html) which tells the streaming server that the subscriber is no longer interested in receiving audio and video content. Then disconnect the websocket connection with the server by calling the [disconnect()](https://millicast.github.io/doc/latest/android/android/com.millicast/-client/disconnect.html) method.

```kotlin
subscriber.unsubscribe()
subscriber.disconnect()
```

And in some use cases such as subscribing to a new stream, within the same fragment or composable screen, the best practice would be to call [subscriber.release()](https://millicast.github.io/doc/latest/android/android/com.millicast/-client/release.html).This will internally release all listeners and resources so there is no need to call unsubscribe or disconnect. Then for a new stream, create a new subscriber instance and follow the same connection and subscription process described above. Also consider releasing the VideoSink and TextureViewRenderer to inform the SDK to stop rendering frames on that surface.

Note that in this case if you want to release everything and create a new subscriber, consider also releasing the VideoSink listener and the [TextureViewRenderer](https://millicast.github.io/doc/latest/android/android/com.millicast.android.compose/-texture-view-renderer.html). This way you are telling the SDK to stop rendering video frames on the surface.

```kotlin
subscriber.release() // Always make sure that in this case the subscriber instance is released 100%, so it is recommended to call it directly before creating //a new subscriber

// And in between it is recommended to release your rendererView and remove the Video Sink listener from the videoTrack
videoTrack.removeVideoSink(textureRendererView)
textureRendererView.release()
 // Now everything is cleaned well so that you can create a new subscriber.
subscriber = Core.createSubscriber()
```
