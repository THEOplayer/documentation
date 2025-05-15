---
sidebar_position: 1
sidebar_label: Getting Started with Native Android
---

# Getting started with THEOlive streaming for Native Android

To begin with the Dolby OptiView platform please review our guide for getting started with [OptiView Streaming](../../getting-started.mdx).

### Installing the THEOplayer for Android

1. Support for THEOlive comes out of the box with the THEOplayer for Android. Please follow [this guide for installing the Player SDK](/theoplayer/getting-started/sdks/android/getting-started/) for Android development.

2. Once the Player is installed, continue following the guide for setting up the player. Please note that THEOplayer licenses can be found for streaming customers [here](theolive/getting-started.mdx#obtaining-a-player-license-for-theolive) in the THEOlive dashboard.

3. With the player installed and set up with a valid license, you can now import the `THEOliveSource` object from the SDK:

```Kotlin
import com.theoplayer.android.api.theolive.TheoLiveSource
```

Rather than set your Player `source` as a manifest as you would for a HLS stream, you can now instead set it as a `TheoLiveSource` including your [channel alias](../../platform/multi-channel.md):

```Kotlin
theoPlayer.source = SourceDescription
            .Builder(
                TheoLiveSource(
                    src = "YOUR_THEOLIVE_CHANNEL_ALIAS"
                )
            )
            .build()
```

For testing, you can use this HESP demo source: `ar5c53uzm3si4h4zgkzrju44h` which the OptiView team [keeps live 24/7](https://demo.theo.live/?channel=ar5c53uzm3si4h4zgkzrju44h).

From here, your THEOlive source should be ready to playback in THEOplayer.

### Adding Player Controls

At this stage in implementation, you should have a THEOlive stream playing within your Android app. The Player SDK provides functionality for controlling stream playback which can be extended to users in the form of controls or buttons. The platform also supports an [Open Video UI for the Android SDK](pathname:///open-video-ui/android/getting-started), which provides a component library for advanced styling and control of UI components.

#### 1. Adding Play/Pause Controls

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

#### 2. Adding a Volume Slider

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

#### 3. Adding Fullscreen Support

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

:::tip
Looking for a UI component library to style the player experience? We recommend using our [Open Video UI for Android](pathname:///open-video-ui/android/getting-started) for faster development and control over UI components in the player.
:::

### Adding Logging

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

This will log important events like play, pause, and errors to the Android logcat, making it easier to identify issues during development. An exhaustive list of events can be found at our [API reference](pathname:///theoplayer/v9/api-reference/android/api/event/player/PlayerEventTypes.html).

## Troubleshooting

1. When building with the Android SDK please use `Android SDK Build-Tools 35 (build-tools;35.0.0)` or greater.
2. `Event: ERROR, error=com.theoplayer.android.api.error.THEOplayerException: The publication could not be found`. This error indicates the channel alias is invalid. An alias could be invalid because it doesn't exist, the channel is not started, or the channel is started but content isn't available for delivery.

## More information

- [Android Player SDK Reference](pathname:///theoplayer/v9/api-reference/android/).
