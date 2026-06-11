# Getting started

To begin with the Dolby OptiView platform please review our guide for getting started with [OptiView Streaming](/documentation/pr-preview/pr-690/theolive/getting-started.md).

### Installing the THEOplayer for Android[​](#installing-the-theoplayer-for-android "Direct link to Installing the THEOplayer for Android")

1. Support for OptiView Live comes out of the box with the THEOplayer for Android. Please follow [this guide for installing the Player SDK](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/android/getting-started.md) for Android development.

2. Once the Player is installed, continue following the guide for setting up the player. Please note that THEOplayer licenses can be found for streaming customers [here](/documentation/pr-preview/pr-690/theolive/getting-started.md) in the OptiView Live dashboard.

3. With the player installed and set up with a valid license, you can now import the `THEOliveSource` object from the SDK:

```kotlin
import com.theoplayer.android.api.theolive.TheoLiveSource

```

Rather than set your Player `source` as a manifest as you would for a HLS stream, you can now instead set it as a `TheoLiveSource` including your channel alias:

```kotlin
theoPlayer.source = SourceDescription
    .Builder(
        TheoLiveSource(
            src = "YOUR_THEOLIVE_CHANNEL_ALIAS"
        )
    )
    .build()

```

For testing, you can use this HESP demo source: `ar5c53uzm3si4h4zgkzrju44h` which the OptiView team [keeps live 24/7](https://demo.theo.live/?channel=ar5c53uzm3si4h4zgkzrju44h).

From here, your OptiView Live source should be ready to playback in THEOplayer.

### Adding Player Controls[​](#adding-player-controls "Direct link to Adding Player Controls")

At this stage in implementation, you should have an OptiView Live stream playing within your Android app. The Player SDK provides functionality for controlling stream playback which can be extended to users in the form of controls or buttons. The platform also supports an [Open Video UI for the Android SDK](/documentation/pr-preview/pr-690/open-video-ui/android/getting-started.md), which provides a component library for advanced styling and control of UI components.

#### 1. Adding Play/Pause Controls[​](#1-adding-playpause-controls "Direct link to 1. Adding Play/Pause Controls")

To add a play/pause button to your app, you’ll first need to create a button. This could be done via an XML layout file, for example:

```xml
<Button
    android:id="@+id/playPauseButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Play/Pause" />

```

Your app could then listen to interaction with the button and call either the `.play()` or `.pause()` functions from the Player SDK:

```kotlin
findViewById<Button>(R.id.playPauseButton).setOnClickListener {
    if (theoPlayer.isPaused) {
        theoPlayer.play()
        Log.i(TAG, "Playback started")
    } else {
        theoPlayer.pause()
        Log.i(TAG, "Playback paused")
    }
}

```

#### 2. Adding a Volume Slider[​](#2-adding-a-volume-slider "Direct link to 2. Adding a Volume Slider")

Like play/pause, a slider could also be added to control volume:

```xml
<SeekBar
    android:id="@+id/volumeSlider"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:max="100" />

```

The Player SDK tracks volume and allows you to adjust it as a percentage of the max volume:

```kotlin
findViewById<SeekBar>(R.id.volumeSlider).apply {
    max = 100
    progress = (theoPlayer.volume * 100).toInt()

    setOnSeekBarChangeListener(object : SeekBar.OnSeekBarChangeListener {
        override fun onProgressChanged(seekBar: SeekBar?, progress: Int, fromUser: Boolean) {
            val volumeLevel = progress / 100.0
            theoPlayer.volume = volumeLevel
            Log.i(TAG, "Volume set to ${Math.round(volumeLevel * 100)}%")
        }

        override fun onStartTrackingTouch(seekBar: SeekBar?) {}
        override fun onStopTrackingTouch(seekBar: SeekBar?) {}
    })
}

```

This will allow users to adjust the volume between 0% and 100%.

#### 3. Adding Fullscreen Support[​](#3-adding-fullscreen-support "Direct link to 3. Adding Fullscreen Support")

To add a fullscreen button, add the following to your layout file:

```xml
<Button
    android:id="@+id/fullscreenButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Fullscreen" />

```

Then, set up the button in your `MainActivity`:

```kotlin
// Fullscreen Button
findViewById<Button>(R.id.fullscreenButton).setOnClickListener {
    theoPlayerView.fullScreenManager.requestFullScreen()
    Log.i(TAG, "Fullscreen enabled")
}

```

tip

Looking for a UI component library to style the player experience? We recommend using our [Open Video UI for Android](/documentation/pr-preview/pr-690/open-video-ui/android/getting-started.md) for faster development and control over UI components in the player.

### Adding Logging[​](#adding-logging "Direct link to Adding Logging")

To assist with debugging and understanding how your player is behaving, you can add event listeners for key player events. For example:

```kotlin
// Add basic playback event listeners
private fun configureTHEOplayer(theoPlayer: Player) {
    theoPlayer.addEventListener(PlayerEventTypes.PLAY) { Log.i(TAG, "Event: PLAY") }
    theoPlayer.addEventListener(PlayerEventTypes.PLAYING) { Log.i(TAG, "Event: PLAYING") }
    theoPlayer.addEventListener(PlayerEventTypes.PAUSE) { Log.i(TAG, "Event: PAUSE") }
    theoPlayer.addEventListener(PlayerEventTypes.ERROR) { event ->
        Log.e(TAG, "Event: ERROR, error=${event.errorObject}")
        Toast.makeText(this, "Stream Error: ${event.errorObject}", Toast.LENGTH_LONG).show()
    }
}

```

This will log important events like play, pause, and errors to the Android logcat, making it easier to identify issues during development. An exhaustive list of events can be found at our [API reference](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/api/event/player/PlayerEventTypes.html).

## Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

1. When building with the Android SDK please use `Android SDK Build-Tools 35 (build-tools;35.0.0)` or greater.
2. `Event: ERROR, error=com.theoplayer.android.api.error.THEOplayerException: The publication could not be found`. This error indicates the channel alias is invalid. An alias could be invalid because it doesn't exist, the channel is not started, or the channel is started but content isn't available for delivery.

## More information[​](#more-information "Direct link to More information")

* [Android Player SDK Reference](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/).
