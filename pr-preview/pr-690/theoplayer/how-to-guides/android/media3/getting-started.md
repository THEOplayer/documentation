# Media3 pipeline for Android

The THEOplayer Android Media3 pipeline is a new and rebuilt base layer for playback of video and audio files for the THEOplayer Android SDK. It is based on [Jetpack Media3](https://developer.android.com/media/media3) components, and it provides more stable playback covering a broader range of use cases, all while being lighter in size and more performant.

## Usage[​](#usage "Direct link to Usage")

The Media3 pipeline is part of the THEOplayer Android SDK. Follow [our Getting Started guide](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/android/getting-started.md) to set up THEOplayer in your Android app.

info

In THEOplayer version 9.x, the Media3 and legacy pipelines were available side-by-side. Starting with version 10.0, the THEOplayer Android SDK has fully switched over to the Media3 pipeline, and the legacy pipeline has been retired.

See [our migration guide](/documentation/pr-preview/pr-690/theoplayer/v10/getting-started/sdks/android/migrating-to-theoplayer-10/) for more information.

## FAQ[​](#faq "Direct link to FAQ")

### How does Media3 affect the THEOplayer Android SDK?[​](#how-does-media3-affect-the-theoplayer-android-sdk "Direct link to How does Media3 affect the THEOplayer Android SDK?")

Media3 replaces the media playback layer of the THEOplayer Android SDK, offering improvements in performance and stability for playback over our current implementation. As only core media playback is affected, all player APIs remain identical and other features and integrations (such as ads, analytics or Chromecast) are not affected and will function the same.

### Does this use ExoPlayer?[​](#does-this-use-exoplayer "Direct link to Does this use ExoPlayer?")

While we make use of ExoPlayer components, this is not a plain ExoPlayer implementation. In addition to the integrations, features and support already offered by the THEOplayer Android SDK, we've reused what makes sense to implement our own playback pipeline that offers improvements, bugfixes and additional functionality over ExoPlayer.
