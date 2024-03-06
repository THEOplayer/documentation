# Migration from THEOplayer Android/AndroidTV/FireTV SDK 4.x to THEOplayer Android SDK 5.0

## What are the differences between Android SDK and Legacy Android SDKs (4.12.x)?

The Android SDK is significantly more performant than the Legacy Android SDKs (4.12.x), as it removes the dependency on the WebView to handle video-playback and supported features.
Removing the WebView dependency also allowed to move many of the APIs from being asynchronous to being synchronous, such as querying the current time.

Another difference between the SDKs is that with Android SDK users will no longer need to maintain multiple flavors for different platforms or Android OS version.
This because the Android SDK works on Android mobile, Android TV and Fire TV devices with Android OS version 5.0+ (API level 21 and above).

The Android SDK moves towards more modularized features, which means there is a base SDK that can handle basic playback and additional feature integrations are provided as separate modules that can be added as desired.
This approach gives more flexibility and results in a reduced application size, since non-required parts are not included in the build of the application. You can read more about this [here](https://docs.theoplayer.com/getting-started/01-sdks/02-what-is-new-in-theoplayer-5.md).

The Android SDK leverages Java 8 and Kotlin languages to provide safer and more concise code.

Lastly, the Android SDK is released on JitPack which allow developers to easily fetch and implement the player into their app.

## When to migrate?

THEOplayer Android SDK 5+ is a more performant version of our SDK, so we advise you to migrate as soon as possible.

However, the 5.0 SDK is built from the ground up so from day 1 it will be not in feature parity with the legacy SDKs.

What features are covered already in THEOplayer Android SDK 5.0?

### Android SDK 5.0 features:

- Basic playback (HLS, DASH, MP4) with playback events
- Widevine DRM playback
- [Custom content protection integrations](https://github.com/THEOplayer/samples-drm-integration)
- Google IMA integration
- Google DAI integration
- Google Cast (Chromecast) integration
- MediaTailor integration
- [Native picture-in-picture support](https://docs.theoplayer.com/how-to-guides/07-miscellaneous/07-picture-in-picture.md#android--fire-tv-sdk)
- Fullscreen playback
- Background audio playback

### Android SDK 6.0 features:

Additionally, to the features of Android SDK 5.0 there are following features implemented in Android SDK 6.0:

- Support for caching streams offline.
- DRM HESP streams playback.
- TextTrack styling support
- Support for play-out of progressive media assets embedded as raw app resource.
- Metrics API
- Background playback
- API to retrieve the decoder name for a specified media.
- Added the ability to intercept network requests.

If the implemented features are covering your use-cases, feel free to upgrade.
The changes due to deprecations in your code will be minimal, THEOplayer Android SDK 5.0 tries to be backward compatible with the legacy 4.x APIs as much as possible.

## When not to migrate?

If your use-cases rely on missing features and you can not implement them on top of the player.

Some features, like:

- Analytics pre-integrations: Agama, Moat, Conviva, Youbora
- Advertisement pre-integrations: THEOAds, Spotx
- Server-side ad insertion: Yospace, Verizon Media
- VR

Or features which brought to life via the WebView's middle layer:

- Related Content API
- Javascript execution
- CSS injection

Or you rely on the default THEOplayer UI.

The current THEOplayer Android SDK 5.0+ is chromeless, it means you need to implement your own native UI on top of the player.

Soon we will also release a fully native, customizable UI module (connector). Stay tuned!

## Migration

There are 2 main things you need to consider during migration:

#### 1. The deprecated (and removed) APIs.

For these please consult with our [changelog](https://docs.theoplayer.com/changelog.md)

#### 2. The new integration-based architecture.

You can read more about the new architecture [here](https://docs.theoplayer.com/getting-started/01-sdks/02-what-is-new-in-theoplayer-5.md).

The module names are also updated.
Therefore, to migrate each modularized feature refer to the following table to make the necessary changes:

| Feature         | Module Name before 5.0.0    | Module Name after 5.0.0         |
| :-------------- | :-------------------------- | :------------------------------ |
| Basic Playback  | `unified:+`                 | `core:+`                        |
| Google IMA      | `unified-ads-ima:+`         | `integration-ads-ima:+`         |
| Chromecast      | `unified-cast:+`            | `integration-cast:+`            |
| AWS MediaTailor | `unified-ads-mediatailor:+` | `integration-ads-mediatailor:+` |
| Google DAI      | `unified-ads-dai:+`         | `integration-ads-dai:+`         |

After these steps you should be able to compile your project and benefit from THEOplayer Android SDK 5.0+.

The Google Cast and Google IMA/DAI integration APIs are mapped to `theoplayer.ads` and `theoplayer.cast.chromecast` APIs, but you can also access the same APIs (and new ones) on the integrations itself.
