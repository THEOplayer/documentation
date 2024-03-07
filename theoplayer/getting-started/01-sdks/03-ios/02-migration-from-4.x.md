# Migration from THEOplayer iOS and tvOS SDK 4.x to THEOplayer iOS/tvOS SDK 5.0+

Disclaimer: As this document is published at the date of releasing THEOplayer 5.0, it is not always accurate since the player regularly is updated with new supported features. Please refer to our [changelog](https://docs.theoplayer.com/changelog.md) for more up to date information.

## What are the differences between 4.x and 5.0?

The THEOplayer iOS/tvOS SDK 5.0+ is more performant than the legacy iOS and tvOS SDK (4.12.x), as it removes the dependency on the WebView to handle video-playback and supported features.

Removing the WebView dependency will also allow us to move many of the APIs from being asynchronous to being synchronous, such as querying the current time.

The THEOplayer iOS/tvOS SDK 5.0+ moves towards more modularized features, which means there is a base SDK that can handle basic playback and additional feature integrations are provided as separate modules that can be added as desired.
This approach gives more flexibility and results in a reduced application size, since non-required parts are not included in the build of the application.
You can read more about this [here](../02-what-is-new-in-theoplayer-5.md).

Lastly, the THEOplayer iOS/tvOS SDK 5.0+ is released only on package managers (Cocoapods, and Swift packages later) which allow developers to easily fetch and implement the latest player into their app.

## When to migrate?

THEOplayer iOS/tvOS SDK 5.0+ is a more performant version of our SDK, so we advise you to migrate as soon as possible.

However, the 5.0 SDK is built from the ground up so from day 1 it will be not in feature parity with the legacy SDKs.

What features are covered already in THEOplayer iOS/tvOS SDK 5.0?

- Basic playback (HLS, MP4) with playback events
- Fairplay DRM playback
- [Custom content protection integrations](https://github.com/THEOplayer/samples-drm-integration)
- Google IMA integration
- Google Cast (Chromecast) integration
- [Native picture-in-picture support](../../../how-to-guides/07-miscellaneous/07-picture-in-picture.md#ios--tvos-sdk)
- Fullscreen playback
- Airplay support
- Background audio playback

If the implemented features are covering your use-cases, feel free to upgrade.
The changes due to deprecations in your code will be minimal, THEOplayer iOS/tvOS SDK 5.0+ tries to be backward compatible with the legacy 4.x APIs as much as possible.

## When not to migrate?

If your use-cases rely on missing features and you can not implement them on top of the player.

Some features, like:

- DRM pre-integrations
- Analytics pre-integrations: Agama, Moat, Conviva, Youbora
- Advertisement pre-integrations: THEOAds, Spotx
- Server-side ad insertion: Google DAI (coming soon), Yospace, MediaTailor, Verizon Media
- VR

Or features which brought to life via the WebView's middle layer:

- Related Content API
- Javascript execution
- CSS injection

Or you rely on the default THEOplayer UI.

The current THEOplayer iOS/tvOS SDK is chromeless, it means you need to implement your own native UI on top of the player.

Soon we will also release a fully native, customizable UI module (connector). Stay tuned!

## Migration

There are 2 main things you need to consider during migration:

#### 1. The deprecated (and removed) APIs.

For these ones please consult with our [changelog](https://docs.theoplayer.com/changelog.md)

#### 2. The new integration-based architecture.

You can read more about the new architecture [here](../02-what-is-new-in-theoplayer-5.md)

Use the latest THEOplayer iOS/tvOS SDK Cocoapod in your Podfile.

```ruby
pod 'THEOplayerSDK-core', '~> 5.0'
```

If you rely on Google IMA advertisement or Google Cast (Chromecast) features, you need to intialized the relevant integrations accordingly before you try to use them.

**For Google IMA:**

Pull the integration from Cocoapods:

```ruby
pod 'THEOplayerSDK-Integration-GoogleIMA', '~> 5.0'
```

Initialize the integration:

```swift
import THEOplayerGoogleIMAIntegration
...

let imaIntegration = GoogleIMAIntegrationFactory.createIntegration(on: self.theoplayer)

self.theoplayer.addIntegration(imaIntegration)
```

**For Google Cast:**

Pull the integration from Cocoapods:

```ruby
pod 'THEOplayerSDK-Integration-GoogleIMA', '~> 5.0'
```

Initialize the integration:

```swift
import THEOplayerGoogleCastIntegration
...

let castConfig = CastConfiguration(strategy: .manual)
let castIntegration = GoogleCastIntegrationFactory.createIntegration(on: self.theoplayer, with: castConfig)

self.theoplayer.addIntegration(castIntegration)
```

After these steps you should be able to compile your project and benefit from THEOplayer iOS/tvOS SDK 5.0.

The Google Cast and Google IMA integration APIs are mapped to `theoplayer.ads` and `theoplayer.cast.chromecast` APIs, but you can also access the same APIs (and new ones) on the integrations itself.
