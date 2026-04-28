# Changelog

These are the release notes for THEOplayer 11.0.0 and higher. For older versions, see:

- [Version 10.x](https://optiview.dolby.com/docs/theoplayer/v10/changelog/)
- [Version 9.x](https://optiview.dolby.com/docs/theoplayer/v9/changelog/)
- [Version 8.x](https://optiview.dolby.com/docs/theoplayer/v8/changelog/)
- [Version 7.x](https://optiview.dolby.com/docs/theoplayer/v7/changelog/)
- [Version 5.x and 6.x](https://optiview.dolby.com/docs/theoplayer/v6/changelog/)
- [Version 2.x, 3.x and 4.x](https://optiview.dolby.com/docs/theoplayer/v4/changelog/)

## 🚀 11.1.0 (2026/04/23)

### Web

#### ✨ Features

- Added `Player.version` as an alias for the global `THEOplayer.version`.

#### 🐛 Issues

- Fixed an issue where `player.hesp.latencies` would return `undefined` for some OptiView Live streams.
- Fixed an issue where `preferredKeySystems` was ignored when using the `keyos` pre-integration.
- Fixed an issue where the player would error or stall when playing an HLS MPEG-TS stream with a small audio-only segment before a discontinuity.
- Fixed an issue where an incorrect segment URL was being requested in a DASH live stream when the player receives an MPD update that re-adds a previously removed segment in a `<SegmentTimeline>`.

### Android

#### 🐛 Issues

- Fixed an issue where the `durationchange` event was not fired before the `ended` event when an HLS live stream ends with `#EXT-X-ENDLIST`.
- Fixed an issue where switching between two DRM-enabled HESP OptiView Live streams with identical DRM configurations could crash the player.
- Fixed an issue where Cast state events are not fired if `CastStrategy.MANUAL` is used. The issue resulted in Cast button not being shown.

### iOS

#### 💥 Breaking Changes

- As announced in the [11.0.0 release changelog](#-1100-20260416), THEOplayer iOS SDK and its integrations will now be built with Xcode 26 instead of Xcode 16.

#### 🐛 Issues

- Fixed an issue where the aspect ratio was not properly updated while playing an OptiView Real-time stream.
- Fixed an issue where `THEOliveAPI.latencies` would return `nil` for some OptiView Live streams.
- Fixed an issue where OptiView Ads triggered through ID3 would fail to load correctly.
- Fixed an issue where MP3 sources with the `audio/mpeg` mimetype were not recognized correctly.

### Chromecast CAF

#### ✨ Features

- Added `Player.version` as an alias for the global `THEOplayer.version`.

### Roku

#### 🐛 Issues

- Fixed an issue where using an array of URLs as `source.sources` would cause an error.
- Fixed an issue where the license expired text would show momentarily while renewing a license.
- Fixed issue where VMAP ads would not play.
- Made stall detection logic less prone to false positives.

## 🚀 11.0.0 (2026/04/16)

We are happy to announce the eleventh major version of THEOplayer, releasing all the improvements and developments our team has achieved since version 10.0.

THEOplayer 11.0 includes **some breaking changes per SDK**. Please review them carefully in the respective changelog for your SDK.

- The iOS SDK now supports iOS 15 and tvOS 15 and higher, dropping support for iOS/tvOS 13 and 14.
- On Android, the Google IMA integration has been updated to support version 3.39.0 of the Google IMA SDK.
  This requires core library desugaring to be enabled in your app.

For more info on navigating our breaking changes, take a look at our migration guides for [Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/migrating-to-theoplayer-11/), [Android](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/android/migrating-to-theoplayer-11/), [iOS](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/ios/migrating-to-theoplayer-11/) and [React Native](https://optiview.dolby.com/docs/theoplayer/getting-started/frameworks/react-native/migrating-to-react-native-theoplayer-11/).

### Web

#### 💥 Breaking Changes

- Removed `preloadPublications` in THEOlive API.

### Android

#### 💥 Breaking Changes

- All methods on `Player` and `THEOplayerView` must only be called from the main thread and are annotated with `@MainThread`. Calling these methods from a different thread will throw an `IllegalStateException`.
- The Google IMA SDK integration now requires [core library desugaring](https://developer.android.com/studio/write/java8-support#library-desugaring) to be enabled. See [our updated guide for Google IMA](https://optiview.dolby.com/docs/theoplayer/how-to-guides/ads/google-ima/#android-sdk) for instructions.
- Removed `preloadChannels` in THEOlive API.
- Changed `MediaTailorAdAvail.id` to return a `String` instead of an `Int`, to align with `AdBreak.id`.
- Removed `TheoAdsErrorEvent`, use `AdErrorEvent` instead.
- Removed `TheoAdsEventTypes.THEOADS_ERROR`, use `AdsEventTypes.AD_ERROR` instead.

#### ✨ Features

- Added `AdBreak.id`, to replace the (now deprecated) `AdBreak.idAsString` property.

#### ⚡ Improvements

- Updated Google IMA SDK to version 3.39.0.

#### 🐛 Issues

- Fixed `Event`, `EventListener` and `EventDispatcher` to not use raw types in their generic type parameters.
- Fixed a `NullPointerException` fired by the IMA SDK on ad request.

#### 👎 Deprecations

- Deprecated `AdBreak.idAsString`, use `AdBreak.id` instead.

### iOS

#### 💥 Breaking Changes

- The minimum supported iOS/tvOS version is now 15.0, dropping support for iOS/tvOS 13 and 14.
    - This update aligns with current Xcode tooling requirements and enables us to maintain a high standard of performance, security, and long-term support for the SDK. All devices that support iOS/tvOS 13 and 14 are capable of upgrading to iOS/tvOS 15 or later, meaning no active hardware is excluded by this change. Additionally, based on our internal analytics, fewer than 1% of end users remain on versions below iOS/tvOS 15, and those users are predominantly on older SDK versions. This change allows us to focus development efforts on modern platform capabilities while minimizing impact to production environments.
- THEOplayer iOS SDK and its integrations will be built with Xcode 26 instead of Xcode 16 in an upcoming minor 11.x version.
    - This aligns with [Apple's announcement](https://developer.apple.com/news/?id=ueeok6yw) that apps must be built with the iOS 26 & tvOS 26 SDKs starting April 28, 2026.
    - Please note that this is only an announcement, but not an immediate change for THEOplayer SDK. Please check upcoming release changelogs for more information.
- Removed deprecated `ManifestInterceptor` and `DeveloperSettings` APIs in favor of `NetworkAPI`.
- Renamed `playerMetrics` API to `metrics`.
- Changed `Ad.adBreak` type to be optional.
- Removed deprecated `MediaTrack.activeQualityBandwidth` property in favor of `MediaTrack.activeQuality.bandwidth`.
- Removed deprecated `SourceDescription.enableStreamingDVR` property.
- Errors in `CachingTaskErrorStateChangeEvent` now dispatch cache related error codes instead of `NETWORK_ERROR` code. For more details, check the `cause` property of the error.
- Removed `preloadPublications` in THEOlive API.

#### ✨ Features

- Starting with 11.0.0, the THEOplayer iOS SDK will be released in a public self-hosted spec repo.
    - To get the SDK from our hosted repo, simply add `source 'https://github.com/THEOplayer/cocoapods-specs'` to your `Podfile`.
    - This decision comes as a solution to [the planned read-only change to the CocoaPods public spec repo at the end of 2026](https://blog.cocoapods.org/CocoaPods-Specs-Repo/).
    - For now, we will keep publishing to both sources, but we highly recommended switching to THEOplayer's spec repo.
      Starting with 12.0.0 later this year, we plan to stop publishing to the CocoaPods public spec repo.

#### 👎 Deprecations

- Deprecated the old Chromecast pipeline in favor of the new experimental pipeline.
    - The new Chromecast pipeline introduced in version 10.6.0 offers new features and improved performance. Over time and with more positive feedback, we are heading towards switching to the new pipeline by default.
    - The old pipeline is still enabled by default. However, we highly recommend customers switch to the new pipeline by setting `enableExperimentalPipeline` to `true` in `CastConfiguration`.
    - Starting with 12.0.0 later this year, we plan to retire the `enableExperimentalPipeline` property together with the old pipeline, making the new pipeline the default for all customers.
- Changed the return types of `player.cast` and `player.cast.airplay` to be non-optional.

### Roku

#### 💥 Breaking Changes

- Removed deprecated `bitratechange` event.
