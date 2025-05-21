---
title: Changelog
description: Find out what's new in THEOplayer.
sidebar_custom_props: { 'icon': '📰' }
toc_max_heading_level: 2
---

## 🚀 9.4.0 (2025/05/20)

### General

#### ⚡ Improvements

- Improved the ABR algorithm for OptiView live streams.

### Web

#### ✨ Features

- Added support for subtitles in native fullscreen on iOS Safari for OptiView live streams.
- Exposed VAST `<Extensions>` tag contents on `LinearAd`s.
- Added `skipAdBreak()` method to the Ads API, to allow seeking out of an ad break when using the `csai` integration.

#### ⚡ Improvements

- Added CMCD v2 headers for all types of OptiView live HLS streams.
- Improved the recovery speed of OptiView live streams when the network is interrupted for a very short time.

#### 🐛 Issues

- Fixed an issue where the `manifestupdate` event was not dispatched for iOS Safari.
- Fixed an issue where dispatching of ads using the `csai` integration was erroneous when preload is enabled.
- Fixed an issue where a DASH stream with adaptation set switching enabled and with different codecs between the adaptation sets doesn't play on Chrome, Edge and Safari.

### Android

#### ✨ Features

- Added DASH thumbnail track support for Media3.

#### ⚡ Improvements

- Added Kotlin constructor for `SourceDescription`, as an alternative for `SourceDescription.Builder`.
- Added Kotlin constructors for `DRMConfiguration` and `KeySystemConfiguration`, as an alternative for `DRMConfiguration.Builder` and `KeySystemConfiguration.Builder`.
- Media and text tracks are now available on `loadedmetadata` when using the Media3 playback pipeline.

#### 🐛 Issues

- Fixed playback of DRM protected HESP streams.
- Fixed an issue where a source with a `CustomSsaiDescription` (e.g. using the Uplynk or Yospace connector) could not be played with the Media3 pipeline.
- Fixed an issue where the player would sometimes crash on play-out of an HLS source with `#EXT-X-DATERANGE` metadata.
- Fixed an issue where date range cues were not properly removed in the Media3 pipeline once they are entirely before the start of the latest HLS playlist.
- Fixed an issue where cues of text tracks that contain bitmap content would not be rendered.
- Fixed an issue where the player would not free all resources after ad play-out.

### iOS

#### 🐛 Issues

- Fix issue on iOS with Chromecast where when the app goes to background and a Chromecast session is currently active, audio playback starts on the phone.
- Fix issue on iOS with Chromecast where playback rate cannot be set back to `1.0`.
- Fixed an issue where caching tasks would store multiple files on disk.

### Roku

#### ✨ Features

- Added THEOlive support using backup HLS stream.
- Added in ability to mix VMAP and VAST ads, and to schedule ads.
- Added the ability to set headers on the media requests, and solved the issue of application headers bleeding over into media requests.

#### ⚡ Improvements

- Handled more unusual cases for scheduling ads during playback.
- Handled more cases for scheduling ads, including scheduling ads when no ads have previously been configured.

#### 🐛 Issues

- Solved an issue with multi-ad VMAP postrolls by disabling Inter Pod Stitching for them.

## 🚀 9.3.2 (2025/05/13)

### Android

#### 🐛 Issues

- Fixed an issue where communication with Google IMA backend was interrupted after an ad break on THEOAds.

## 🚀 9.3.1 (2025/05/12)

### iOS

#### ⚡ Improvements

- Improved the algorithm behind our HESP pipeline to reach the targetLatency.

## 🚀 9.3.0 (2025/05/05)

### Web

#### ✨ Features

- Added support for DRM protected OptiView Streaming HLS.

#### ⚡ Improvements

- The VR integration now initializes itself lazily when the first VR-enabled source is set, rather than when the player is created.
- Improved the transition from content to ad for THEOads streams on smart TVs.
- Improved playback stability of HESP streams on Xbox.

#### 🐛 Issues

- Fixed an issue where the player would show a blank screen on Tizen 2.4 when playing a non THEOads stream and the `theoads` feature is enabled in the `PlayerConfiguration`.
- Fixed an issue for THEOads where scheduling an ad break through SSE could cause it to be played twice in a row.
- Fixed an issue for THEOads where the player did not resume the content at the correct time after an ad break.
- Fixed an issue where switching between audio tracks with an incompatible codec in an HLS stream causes the player to crash, even though the codecs are supported by the browser.
- Fixed an issue where the Chromeless player would freeze when switching to an adbreak when playing a THEOads stream unmuted on iOS Safari.

### Android

#### ✨ Features

- Added support for the `Metrics` API in the Media3 playback pipeline.

#### 🐛 Issues

- Fixed an issue where a previously removed caching task would sometimes re-appear after restarting the app.
- Fixed an issue where calling `CachingTask.start()` on a task for a DASH stream with persistent DRM would immediately pause the task after the DRM license has been cached.
- Fixed an issue where `CachingTask.percentageCached` was not properly updated to `1.0` (i.e. 100%) after the caching task becomes done.
- Fixed an issue where calling `play()` when the player is ended did not correctly seek back to the start using the Media3 pipeline.
- Fixed an issue where the THEOads session was not cleaned up properly when setting a new source.
- Fixed an issue where `player.abr.strategy` did not work on HLS streams with the Media3 pipeline.

### iOS

#### ⚡ Improvements

- Improved the IMA pod stream request for THEOads which is now sent on source change instead of when a THEOad starts preloading.
- Updated Millicast integration dependency on Millicast SDK to v2.4.1.

#### 🐛 Issues

- Fixed an issue where the `ended` event would be dispatched twice while playing MPEG format sources.
- Fixed an issue where a new source would autoplay when preload is set to auto.
- Fixed an issue where the metadata of a THEOad was not passed to Google IMA.
- Fixed an issue where some events were not being dispatched for THEOads with Google IMA.
- Fixed an issue where the ID3 based ad events were dispatched too early for THEOads.
- Fixed an issue where PiPConfiguration was not respected after setting a source.

### tvOS

#### ✨ Features

- Added support for THEOads.

### Roku

#### ✨ Features

- Added `suppressCaptions` functionality based on `textTracks` `mode` field.  Captions are automatically suppressed when `textTracks` `mode` is `"disabled"`.
- Added the `muted` API to control the video node's mute state.
- Added support for Client Side Ad Insertion using the player `Ads` API. Check out the [getting started with ads on Roku](https://docs.optiview.dolby.com/theoplayer/getting-started/sdks/roku/displaying-ads/) docs for more information.

#### 🐛 Issues

- Fixed an issue where bitrate changes were not being correctly reported to the Adobe Edge connector.

## 🚀 9.2.0 (2025/04/22)

### Web

#### 💥 Breaking Changes

- Updated the LCEVC integration compatibility to LCEVCdecJS SDK version 1.2.1. This breaks compatibility with prior versions. For more info check our [LCEVC doc page](https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/web/how-to-play-an-lcevc-source-with-theoplayer/).

#### ✨ Features

- Added a flag `enableNonce` to `GoogleDAIConfiguration`.
- Added a flag `allowSeekingForGoogleDai` to enable seeking during an ad break in a Google DAI stream.
- Added support for automatically setting the "ott_placement" GAM ad tag parameter for THEOads.

#### 🐛 Issues

- Fixed an issue where going to fullscreen when playing an LCEVC stream would result in misaligned player positioning.
- Fixed an issue where the `startTime` property of a `DateRangeCue` would be wrong when dispatching an `EnterCueEvent` on a quality switch. 
- Fixed an issue on Tizen 2.4 where playback of a DASH stream stalled due to a usable PlayReady DRM key being ignored.
- Fixed an issue where the player could get stuck in a loop when encountering a gap in the buffer of an HLS stream when playing on Tizen devices.
- Fixed an issue where disabling a `MediaTrack` for a HLS CMAF stream would result in an error.

### Android

#### ✨ Features

- Added support for text tracks of type `TextTrackKind.TimeCode` for THEOlive / HESP streams.
- Added support for Multi-Audio THEOlive streams.
- Added support for automatically setting the "ott_placement" GAM ad tag parameter for THEOads.

#### ⚡ Improvements

- Adhere to the values of `NetworkConfiguration` for retrying network requests for THEOlive / HESP streams.

### iOS

#### ✨ Features

- Added support for multiple audio tracks for THEOlive sources.
- Added support for automatically setting the "ott_placement" GAM ad tag parameter for THEOads.

#### 🐛 Issues

- Fixed an issue where the ad tag parameters were not passed to Google when playing a THEOad.
- Fixed an issue where calling `player.destroy()` did not fully destroy the player.
- Fixed an issue where a THEOad would already start playing, only audio, before its start date.

### Roku

#### ✨ Features

- Added the THEO Adobe Edge Platform Connector, or THEO AEP connector, for providing media analytics through the AEP SDK.

#### 🐛 Issues

- Corrected the bitrate change detection so it reports video bitrate rather than audio bitrate.
- Added missing ability to set `isLive` for Conviva content metadata from the `updateContentMetadata` method.

## 🚀 9.1.0 (2025/04/10)

### Web

#### ✨ Features

- Added support for language and label for captions for THEOlive streams.

#### ⚡ Improvements

- Removed `CC` prefix from `TextTrack.label` for CEA-608/708 captions tracks that have a known label or language.

#### 🐛 Issues

- Fixed an issue where the player would dispatch wrong THEOads events when playing a THEOads stream in native picture-in-picture.
- Fixed an issue where chapter indicators on the seek bar were positioned incorrectly when the video is clipped using `player.clip`.
- Fixed an issue where the player would not play multiple ads when playing a THEOads streams on smartTVs.

### Android

#### ✨ Features

- Added support for `THEOplayerConfig.networkConfiguration` in the Media3 playback pipeline.

#### ⚡ Improvements

- Prefer language over channel number as track label for CEA-608/708 captions.

#### 🐛 Issues

- Fixed an issue for THEOAds where the LShape layout crashed.
- Fixed an issue where the player would need to occasionally recover on THEOlive / HESP streams resulting in a short spinner.
- Fixed an issue where the Media3 backend failed to cache HLS streams.
- Fixed an issue where the Media3 backend would error immediately instead of retrying when encountering a network error for an HTTP request.
- Fixed an issue where using a Fire TV license would be rejected.
- Fixed an issue where subtitles from a DASH period after the first period were not presented at the correct time with the Media3 pipeline.
- Fixed an issue where a selected subtitle track would incorrectly be disabled on a period switch, even though the next period contains a matching subtitle track.

### iOS

#### 🐛 Issues

- Fixed an issue where using THEOads would introduce a memory leak.
- Fixed an issue where transitioning into an ad break with THEOads would not preserve the volume and muted state.
- Fixed a memory leak for THEOads where an `Ad` would hold a strong reference to its `adBreak`.
- Fixed an issue for THEOads where moving the player view to another UIViewController would cause an application crash.
- Fixed an issue where the Millicast integration framework also included the THEOplayer framework causing applications to be rejected from the App Store.

### Roku

#### ✨ Features

- Added a `stopAndStartNewSession` method to handle cases where a new session should be started on the currently playing media.

## 🚀 9.0.0 (2025/04/03)
### Officially announcing THEOplayer 9.0
Introducing a major version bump to THEOplayer 9.0. This version officially releases all the improvements and developments THEOplayer has achieved since version 8.0.

THEOplayer 9.0 is **backwards compatible for most features but includes some breaking changes per SDK**. Please review them carefully in the respective changelog for your SDK.

- Starting from THEOplayer 9.0, the new Media3 Playback pipeline is now the default for all Android SDK playback, bringing bug fixes, performance improvements and increased stability across a wider range of devices for the Android SDK! Check out our [Getting started with Media3 guide](https://www.theoplayer.com/docs/theoplayer/how-to-guides/android/media3/getting-started/) for more information.

- THEOplayer 9.0 supports playback of Dolby's real time streaming solution Millicast across all of our major SDKs, including React Native! Check out our Getting started with Millicast guides for [Web](https://www.theoplayer.com/docs/theoplayer/how-to-guides/web/millicast/getting-started/), [Android](https://www.theoplayer.com/docs/theoplayer/how-to-guides/android/millicast/getting-started/), [iOS](https://www.theoplayer.com/docs/theoplayer/how-to-guides/ios/millicast/getting-started/) and [React Native](https://www.theoplayer.com/docs/theoplayer/getting-started/frameworks/react-native/millicast/) for more information. 

- With THEOplayer 9.0 we are also bumping and upgrading our THEOplayer Roku SDK to 9.0, bringing API and stability improvements along with new connectors for Conviva and Comscore, with more new feature development and connectors to follow! Check out our [Roku docs](https://www.theoplayer.com/docs/theoplayer/roku/) for more information.

- THEOplayer 9.0 now comes with cross platform support for CMCD! We've added CMCD support for our Media3 pipeline as well as for iOS 18+, and made it available cross-platform through React Native too! Check out our CMCD docs for [Web](https://www.theoplayer.com/docs/theoplayer/connectors/web/cmcd/getting-started), [Android](https://www.theoplayer.com/docs/theoplayer/how-to-guides/android/cmcd/getting-started/), [iOS](https://www.theoplayer.com/docs/theoplayer/how-to-guides/android/cmcd/getting-started/) and [React Native](https://www.theoplayer.com/docs/theoplayer/getting-started/frameworks/react-native/cmcd/) for more information.

For more info on navigating our breaking changes, take a look at our migration guides for [Web](https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/web/migrating-to-theoplayer-9/), [Android](https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/android/migrating-to-theoplayer-9/), [iOS](https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/ios/migrating-to-theoplayer-9/) and [React Native](https://www.theoplayer.com/docs/theoplayer/getting-started/frameworks/react-native/migrating-to-react-native-theoplayer-9.md).

### Web

#### 💥 Breaking Changes

- Virtual reality playback now always uses the WebXR API. The `PlayerConfiguration.vr.useWebXR` configuration flag is now deprecated and ignored.
- Removed `THEOplayer.playerSuiteVersion`. Use `THEOplayer.version` instead.
- Removed the Verizon Media integration (`player.verizonMedia`). Use the Uplynk integration (`player.uplynk`) instead.
- Removed `MillicastSource.streamName`. Use `MillicastSource.src` instead.
- Removed `SourceDescription.manifestMetadataTrack`.
- Removed `player.ads.theoads.replaceAdTagParameters`. Use `player.theoads.replaceAdTagParameters` instead.
- Removed discontinued proof-of-concept integration for Imagine SSAI.
- Removed the option to use THEOads with a sideloaded manifest.

#### 🐛 Issues

- Fixed an issue for THEOads where the player could error on smart TVs after an adbreak.
- Fixed an issue where sideloaded text tracks would not appear on iOS Safari when using native fullscreen.

### Android

#### 💥 Breaking Changes

- The Media3 playback pipeline is now enabled by default. This new pipeline is built on top of [Jetpack Media3](https://developer.android.com/media/media3), which aims to provide more stable playback on a wider range of devices.
    - The legacy playback pipeline from version 8.x is still available, and can be activated by setting `TypedSource.playbackPipeline` to `PlaybackPipeline.LEGACY`.
    - The legacy playback pipeline is scheduled to be removed in version 10.
- Newly created caching tasks now use the Media3 storage backend by default.
    - Sources cached with this backend can only be played using the Media3 playback pipeline. 
    - Sources previously cached with the legacy storage backend are still playable using the Media3 playback pipeline.
    - The legacy storage backend from version 8.x is still available, and can be activated by setting `CachingParameters.storageType` to `CacheStorageType.LEGACY`
      when calling `Cache.createTask()`.
    - The legacy storage backend is scheduled to be removed in version 10.
- Removed the Media3 integration package. The Media3 playback pipeline now ships with the THEOplayer Android SDK (`com.theoplayer.theoplayer-sdk-android:core`).
- The Android SDK and its integrations are now compiled against API 35. Ensure `compileSdk` is set to 35 or higher in your app's `build.gradle` file.
- Removed deprecated `MillicastSource(Credential, Option)` constructor. Use the primary constructor instead.
- Removed deprecated `MillicastSource.credential` API. Use `src`, `streamAccountId`, `apiUrl` and `subscriberToken` instead.
- Removed deprecated `MillicastSource.option` API. Use `connectOptions` instead.
- Removed deprecated `TypedSource.isHlsDateRange` API. Use `TypedSource.hlsDateRange` instead.
- Removed deprecated `TypedSource.isLowLatency` API. Use `TypedSource.lowLatency` instead.
- Removed deprecated `THEOLiveConfig.userId` API.
- Removed deprecated `THEOLiveConfig.sessionId` API. Use `THEOLiveConfig.externalSessionId` instead.
- Removed deprecated `ConaxDRMConfiguration.Builder.fairPlay(FairPlayKeySystemConfiguration)` API. Use `ConaxDRMConfiguration.Builder.fairplay(FairPlayKeySystemConfiguration)` instead.
- Removed deprecated `THEOplayerConfig.getLiveOffset()` API. Use `TypedSource.liveOffset` instead.
- Removed deprecated `THEOplayerConfig.isHlsDateRange()` API. Use `TypedSource.hlsDateRange` instead.
- Changed the default value of `THEOplayerConfig.Builder#autoIntegrations(boolean)` to `true`. From now on, all available integrations will be automatically added.
- Removed deprecated `GoogleImaIntegrationFactory.createGoogleImaIntegration(THEOplayerView, ImaSdkSettings)` API. Use `GoogleImaIntegrationFactory.createGoogleImaIntegration(THEOplayerView, GoogleImaConfiguration(ImaSdkSettings))` instead.
- Removed deprecated `GoogleDaiIntegrationFactory.createGoogleDaiIntegration(THEOplayerView, ImaSdkSettings)` API. Use `GoogleDaiIntegrationFactory.createGoogleDaiIntegration(THEOplayerView, GoogleImaConfiguration(ImaSdkSettings))` instead.
- Moved the `GoogleImaAd` API from the package `com.theoplayer.android.api.ads.GoogleImaAd` to `com.theoplayer.android.api.ads.ima`.

#### ⚠ Known Limitations

- ~~Availability of media and text tracks has moved from the `loadedmetadata` event to the `loadeddata` event when using the Media3 playback pipeline.~~ (Fixed in version 9.4.0.)
- Text track styling embedded in the source take precedence over user text track style configuration.

#### ✨ Features

- Added the `sseEndpoint` property to `TheoAdDescription` to retrieve server-sent events from the configured endpoint.

#### ⚡ Improvements

- Updated the Google Chromecast dependency from 21.4.0 to 22.0.0.
- Updated the Gson dependency from 2.10.1 to 2.12.1.

### iOS

#### 💥 Breaking Changes

- Removed Objective-C support for all THEOplayer APIs.
- Removed deprecated `Integration.IntegrationType` API. Use `Integration.IntegrationKind` instead.
- Removed deprecated `MillicastSource(streamName:accountID:token:connectOptions:)` API. Use `MillicastSource(src:streamAccountId:subscriberToken:connectOptions:)` instead.
- Removed deprecated `MillicastSource(streamName:accountID:token:connectOptions:)` API. Use `MillicastSource(src:streamAccountId:subscriberToken:connectOptions:)` instead.
- The `TypedSource` initializer now takes a `String` parameter as a source instead of a `URL` object.
- The `Ads.dai` property is now only available when the `GoogleIMAIntegration` package is included in the project.

#### 🐛 Issues

- Fixed an issue where when connected to Airplay and playing live content, it does not automatically seek to the live point, and instead starts playing from the earliest DVR window.
- Fixed an issue where the timeupdate event frequency was too high when playing a Millicast source.
- Fixed an issue where playing multiple Millicast sources after each other would cause the app the become unresponsive.

### Chromecast CAF

#### 💥 Breaking Changes

- Removed `THEOplayer.playerSuiteVersion`. Use `THEOplayer.version` instead.

### Roku

#### 💥 Breaking Changes

- Removed the `configuration` property. Player configuration such as the player license should be passed using the new `configure` method now instead.
- Removed support for verizon's SSAI, ads, and other features. This removes the `skipAds` method, ad events and the relevant verizon specific API. A new Uplynk connector will be added in the future to reintroduce this functionality, in the meantime customers relying on this are advised to remain on 1.X and get in contact to notify us of the dependency of Uplynk functionality and desire to upgrade.
- The `setDestinationRectangle` method now only accept separate parameters instead of also an object containing the rectangle properties.
- Removed the deprecated `listener` property and changed the signature of the `removeEventListener` and `addEventListener` methods.
- Removed the `cues` property from the metadata text track and enforced only tracking one active cue in the `activeCues` property.
- Removed the `content` property from metadata text track cues. Added `rawContent` in its place which exposes the raw metadata object the player received from Roku's video node.
- The `activeCues` property on the metadata text track now only tracks the single latest timed metadata encountered in the stream. For the time being, tracking more cues should be tackled outside the player by observing the metadata text track and storing the cues oneself.
- A metadata text track cue will now have its PTS that the player received from the video node on its `startTime`, rather than its `endTime`.
- Fine-tuned playback control options for live streams. By default seeking into the DVR window will be enabled for live streams and pausing the stream will cause the player to resume from the point where the player was paused. Setting the `enableTrickPlay` API to false will change this behaviour to disallow seeking back into the DVR window and cause the player to resume from the live point after being paused.

#### ✨ Features

- Added the `autoplay` property to control automatic start of playback after setting the source. It defaults to `false`, and when disabled the poster image will now display before playback begins. 

#### ⚡ Improvements

- Updated the Conviva client used in the Conviva connector to 3.5.4 and improved Conviva tracking.

#### 🐛 Issues

- Fixed an issue where license checks would not properly display error messages for different issues with licenses.
- Fixed an issue where app crashes could occur due to lingering listeners after destroying the player instance.

<details name="major-version">
<summary>Version 8</summary>

## 🚀 8.14.0 (2025/03/26)

### Web

#### ✨ Features

- Added the IMA DAI `streamActivityMonitorId` property as a configuration on the `TheoAdDescription`.
- Added the `retrievePodIdURI` property to `TheoAdDescription` to retrieve the PodID as returned from the EABN service from Google.
- Added the `sseEndpoint` property to `TheoAdDescription` to retrieve server-sent events for the configured endpoint.

#### ⚡ Improvements

- Improved event dispatching when playing a stream with THEOads.

#### 🐛 Issues

- Fixed an issue where the player would stop after an ad in a THEOads stream on smart TVs.
- Fixed an issue where setting the `skipOffset` in the CSAI configuration to 0 made an ad unskippable instead of immediately skippable.
- Fixed an issue where the player would keep preloading the same segments when the HLS stream starts with a small gap.
- Fixed an issue where the player would dispatch a seeking event when preloading an HLS stream that starts with a small gap.
- Fixed an issue where DRM protected streams fail to play on Tizen or webOS devices due to an error while applying the license.
- Fixed an issue where an `error` event would not be dispatched for Millicast streams when the initial connection failed.

### Android

#### ✨ Features

- Added `TheoAdsIntegration.currentInterstitials` and `TheoAdsIntegration.scheduledInterstitials` in `TheoAdsIntegration` for managing currently playing and scheduled interstitials and events of interstitials lifecycle. 
- Added support for multimedia tunneling through `THEOplayerConfig.isTunnelingEnabled` in the Media3 integration.
- Added support for CEA608 subtitles for HESP / THEOlive streams using the Media3 integration.
- Added the IMA DAI `streamActivityMonitorId` property as a configuration on the SGAI TheoAdDescription.

#### ⚡ Improvements

- Added support for DRM pre-integrations in Media3.
- Improved support for forced subtitles in the Media3 integration.

#### 🐛 Issues

- Fixed an issue where `SEEKING` events were emitted while switching from Ad to content while playing THEOAds.
- Fixed an issue where the `activeQuality` on a video track would not update when playing THEOlive / HESP streams using the Media3 backend.
- Fixed an issue when using ABR strategy `bandwidth` with the Media3 integration, where the initial bitrate value passed with the ABR configuration would be ignored.
- Fixed an issue where the player incorrectly attempted to play DRM-protected qualities in MPEG-DASH for which it did not receive a usable key from the DRM license server.
- Fixed an issue where the measured bandwidth estimate was not preserved across playback sessions in the Media3 integration.
- Fixed an issue where trying to play a DRM source could error when configuring `null` headers.
- Fixed an issue where the Media3 integration would throw an error when playback falls behind the live window. Instead, the player now recovers by seeking to live.
- Fixed an issue where the current time would not progress properly on HESP and THEOlive streams when using the Media3 integration.
- Fixed an issue where disabling all subtitle tracks would re-enable the default subtitle track in the Media3 integration.
- Fixed an issue where CEA-608 paint-on captions would flicker with the Media3 integration.

### iOS

#### ✨ Features

- Added the IMA DAI `streamActivityMonitorId` property as a configuration on the `THEOAdDescription`.
- Added the `retrievePodIdURI` property on the `THEOAdDescription` to retrieve the PodID as returned from the EABN service from Google.
- Adding `allowsExternalPlayback` option to allow disabling external playback on the player. This is useful for controlling which player instance is allowed to externally playback through Airplay.
- When the `THEOplayerGoogleIMAIntegration` package is added, it will now be automatically integrated to THEOplayer. This makes explicitly creating and adding the integration unnecessary.
- `THEOplayerConfigurationBuilder` is extended with the method `setGoogleIMAConfiguration` to help configure the integration when auto-integrating.
- Added `GoogleIMAConfiguration` and `GoogleIMAConfiguration.Builder` APIs to build and pass arguments to the `setGoogleIMAConfiguration` method.
- Extended `Ads` API with `ima` property of type `GoogleImaIntegration?`; this helps to get a reference to the auto-integrated instance.
- When the `THEOplayerGoogleCastIntegration` package is added, it will now be automatically integrated to THEOplayer. This makes explicitly creating and adding the integration unnecessary.
- `THEOplayerConfigurationBuilder` is extended with the method `setGoogleCastConfiguration` to help configure the integration when auto-integrating.
- Added `GoogleCastConfiguration` and `GoogleCastConfiguration.Builder` APIs to build and pass arguments to the `setGoogleCastConfiguration` method.
- Extended `Cast` API with `googlecast` property of type `CastIntegration?`; this helps to get a reference to the auto-integrated instance.
- When the `THEOplayerTHEOadsIntegration` package is added, it will now be automatically integrated to THEOplayer by default. This makes explicitly creating and adding the integration unnecessary.
- Extended `Ads` API with `theoAds` property of type `THEOadsIntegration?`; this helps to get a reference to the auto-integrated instance.
- When the `THEOplayerMillicastIntegration` package is added, it will now be automatically integrated to THEOplayer. This makes explicitly creating and adding the integration unnecessary.
- Extended `THEOplayer` API with `millicast` property of type `MillicastIntegration?`; this helps to get a reference to the auto-integrated instance.
- `THEOplayerConfigurationBuilder` is extended with the method `setTHEOliveConfiguration` to help configure the integration when auto-integrating.

#### ⚡ Improvements

- THEOads is now available from iOS 13.0+.

#### 🐛 Issues

- Fixed an issue where THEOads would not play advertisement when playing in Picture-in-Picture.
- Fixed an issue where adding and removing the THEOads integration twice would result in no events being dispatched.

## 🚀 8.13.2 (2025/03/17)

### Android

#### 🐛 Issues

- Fixed an issue where player crashed on a call of setSource and reset while rendering video on a custom surface.
- Fixed an issue where the player would incorrectly resize on manual quality switches when using the Media3 integration.

## 🚀 8.13.1 (2025/03/14)

### Android

#### 🐛 Issues

- Fixed an issue where playing back THEOlive streams would not work.

## 🚀 8.13.0 (2025/03/08)

### General

#### ⚡ Improvements

- Improved speed of ABR decisions on THEOlive and HESP streams.

### Web

#### ✨ Features

- Added support for THEOads streams while playing in native fullscreen.
- Added `mediaUrl` property on client-side VAST ads when using the default `csai` integration, representing the content URL of the `MediaFile` that was selected for ad playback.
- Added `closedCaptionFiles` property on client-side VAST ads when using the default `csai` integration, representing the list of `ClosedCaptionFile`s that may accompany the `MediaFile`s that are available for ad playback.
- Added the IMA DAI `streamActivityMonitorId` property as a configuration on the `TheoAdDescription`.

#### ⚡ Improvements

- When the `Duration` in a client-side VAST ad has an invalid value or is equal to zero seconds, the player now throws an error and skips the ad.
- Added support for VAST error 1009 when the ad server returns an empty VAST response without wrappers.

#### 🐛 Issues

- Fixed an issue where exiting native PiP or native fullscreen did not dispatch a paused event when using THEOads despite being paused due to the native behavior.
- Fixed an issue with Google IMA where only the first ad in a VMAP with multiple ads could be paused.

### Android

#### ✨ Features

- Added support for caching sources using the Media3 integration by setting `CachingParameters.storageType` to `CacheStorageType.MEDIA3`. Sources cached with this method will only be playable using the Media3 integration.
- Added `TextTrackCue.getTrack()` getter.
- Added support for CMCD in THEOplayer. This is only supported with the Media3 integration. Read more about it [on our Android CMCD docs](https://www.theoplayer.com/docs/theoplayer/how-to-guides/android/cmcd/getting-started/).
- Added support for automatically adding all available integrations to a new `THEOplayerView` instance. This can be enabled with `THEOplayerConfig.Builder.autoIntegrations()`, and will be enabled by default starting with THEOplayer version 9.0.
- Added support for the Latency Manager API (`player.latency`) in the Media3 integration.
- Added support for THEOlive and HESP streams with the Media3 integration.
- Added support for ABR strategies when using the Media3 integration.

#### ⚡ Improvements

- Improved support for TTML subtitles and CEA-608 captions in the Media3 integration.
- Added Kotlin constructor for `TypedSource`, as an alternative for `TypedSource.Builder`.
- Added support for `ContentProtectionSuccessEvent`, `ContentProtectionErrorEvent` and `MediaEncryptedEvent` in the Media3 integration.
- Added `Player.ads.ima` as an alternative method to retrieve the `GoogleImaIntegration` (if it was previously added to the player).
- Added `Player.ads.dai` as an alternative method to retrieve the `GoogleDaiIntegration` (if it was previously added to the player).
- Added `Player.theoAds` as an alternative method to retrieve the `TheoAdsIntegration` (if it was previously added to the player).
- Added `THEOplayerConfig.googleImaConfiguration` as an alternative method to configure the `GoogleImaIntegration`.
- Added `THEOplayerConfig.castConfiguration` as an alternative method to configure the `CastIntegration`.

#### 👎 Deprecations

- Deprecated `THEOplayerConfig.liveOffset` and `.isHlsDateRange`. Use their counterparts on `TypedSource` instead.
- Renamed `Media3PlayerIntegration.createMedia3PlayerIntegration()` to `Media3Integration.createMedia3Integration()`. The old name still works, but is now deprecated.
- Deprecated `Media3Integration.SourceSelectCallback`. Use `TypedSource.playbackPipeline` instead to enable or disable the Media3 integration for a specific source.

### iOS

#### 💥 Breaking Changes

- Changing `THEOplayer.backgroundPlaybackDelegate` property type to be optional. This is a minor change for internal purposes, but should not affect common usage of this API.

#### ✨ Features

- Added support for CMCD in THEOplayer. This is only supported on iOS 18.0+. Read more about it [on our iOS CMCD docs](https://www.theoplayer.com/docs/theoplayer/how-to-guides/ios/cmcd/getting-started/).
- Added `player.theoLive` API for THEOlive-specific features

#### 🐛 Issues

- Fixed an issue where performing consecutive source changes in quick succession would result in an indefinite freeze on THEOlive sources.
- Fixed an issue where the Chromecast sender app would be disconnected from the session and out of sync with the receiver app when returning from background to foreground.
- Fixed an issue that caused the text track API to stop working correctly after pausing and playing a THEOlive stream.

## 🚀 8.12.1 (2025/02/28)

### Web

#### 🐛 Issues

- Fixed an issue where exiting native PiP or native fullscreen did not dispatch a paused event when using THEOads despite being paused due to the native behavior.
- Fixed an issue for THEOads on Safari where activating native PiP during an ad break was broken.
- Fixed an issue for THEOads on iOS Safari where native fullscreen did not work for an L-SHAPE adbreak.

## 🚀 8.12.0 (2025/02/24)

### General

#### 🐛 Issues

- Fixed an issue where text track cues would not be removed for THEOlive / HESP streams.

### Web

#### ✨ Features

- Added the THEOads api via `player.theoads`. This is API specific to the [THEOads](https://www.theoplayer.com/product/theoads) feature that exposes information about playing and scheduled interstitials and allows configuration of THEOads specific properties.
- Added support for [Millicast frame metadata](https://docs.dolby.io/streaming-apis/docs/frame-metadata). When setting `metadata` to `true` in `MillicastSource.connectOptions`, all received frame metadata is added to a metadata text track with type `millicast`.
- Rebranded the existing `verizon-media` integration and the Verizon Media player configuration to the `uplynk` integration and the Uplynk player configuration for consistency across the SDKs.
- Uplynk ad information is now also exposed on the general `player.ads` API.
- Added support for THEOads streams while playing in native fullscreen.

#### ⚡ Improvements

- Added `MillicastSource.apiUrl` to allow configuration of a custom Millicast API endpoint. 

#### 🐛 Issues

- Fixed an issue where incorrect `durationchange` events were dispatched when playing a THEOads ad break in native PiP.
- Fixed an issue where the `currentTime` would not be consistent for THEOads ad breaks played in native PiP.
- Fixed an issue where the duration of ads when using THEOads was always undefined.
- Fixed an issue where the player would sometimes crash with an internal error when seeking into the last period of an Uplynk MPEG-DASH stream when there's an unplayed midroll that still needed to be played.
- Fixed an issue where ads from a custom SSAI integration would not be available through the Ads API when THEOads is also enabled.

#### 👎 Deprecations

- Deprecated `player.ads.theoads.replaceAdTagParameters` in favor of `player.theoads.replaceAdTagParameters`.
- Deprecated the `verizon-media` integration and the Verizon Media player configuration in favor of the `uplynk` integration and the Uplynk player configuration.

### Android

#### ✨ Features

- Added support for image overlays in THEOads.
- Added support for playing sources cached through the Cache API using the Media3 integration.
- Handle `ICON_TAPPED` and `ICON_FALLBACK_IMAGE_CLOSED` Google IMA events on Connected TVs by focusing the ad UI when an icon is tapped and resuming ad play-out in case the user has closed the icon fallback image dialog. 
- Added support for `TypedSource.liveOffset` in the Media3 integration.

#### ⚡ Improvements

- Updated the Google IMA dependency from 3.33.0 to 3.36.0.

#### 🐛 Issues

- Fixed `seekable.end(0)` being too close to the live edge in the Media3 integration.
- Fixed the default live offset for MPEG-DASH streams in the Media3 integration to be aligned with the legacy player.
- Fixed an issue where `SeekingEvent.currentTime` returned the current time *before* seeking instead of *after* seeking in the Media3 integration.
- Fixed an issue where calling `Player.setAspectRatio()` before setting the first source would have no effect.

### iOS

#### 🐛 Issues

- Disabled picture-in-picture when paused on a THEOlive stream to prevent encountering an AVFoundation issue where playback would not be able to resume from PiP.
- Fixed an issue where playing a THEOads stream would not dispatch timeupdate events during ad playback.
- Fixed an issue where doing consecutive source changes in quick succession would result in an indefinite freeze on THEOlive sources.

### tvOS

#### 🐛 Issues

- Fixed an issue that prevented playing IMA ads on tvOS.

## 🚀 8.11.0 (2025/02/08)

### Web

#### 💥 Breaking Changes

- Updated the LCEVC integration compatibility for the new LCEVCdecJS SDK version 1.2.0. This breaks compatibility with prior versions. For more info check our [LCEVC doc page](https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/web/how-to-play-an-lcevc-source-with-theoplayer/).

#### ✨ Features

- Added native support for HbbTV devices without MSE support and added a flag useOipfDrmAgent to configure the player to use the native HbbTV DRM flow instead of using EME.
- Added `GoogleDAIConfiguration.networkCode`.

#### 🐛 Issues

- Fixed an issue where the browser's decoder could crash on some streams when the player performs a gap jump at the start of the video. The player will now wait a little bit to give the browser a chance to jump this gap on its own, without having to reset its decoder.
- Fixed an issue where a THEOads ad break could end early if the Google IMA SDK sends an incorrect period ended event.
- Fixed THEOads overlays not using the default properties on phone and TV devices.
- Fixed `GoogleDAIConfiguration.authToken` and `.streamActivityMonitorID` not working properly.
- Fixed an issue where author-defined TTML styles such as `tts:color` were not respected.
- Fixed an issue where playing a THEOads stream in native PiP would not dispatch any play/pause events.
- Fixed an issue where playing a THEOads ad in native PiP would dispatch an incorrect ended event at the end of the ad break.

### Android

#### ✨ Features

- Added RetrievePodId parameter for THEOAds source description as an experimental API.
- Improved the Ad events for THEOads streams.

#### ⚡ Improvements

- Improved support for `player.preload = PreloadType.METADATA` in the Media3 integration. The player now fires a `loadedmetadata` event when preloading is complete, and populates `player.duration` and `player.seekable`.
- Improved startup times and initial latency for THEOlive streams.

#### 🐛 Issues

- Fixed an issue where creating or accessing a CachingTask would cause a crash.
- Fixed an issue where Millicast sources would be stretched instead of keeping the aspect ratio.

### iOS

#### ✨ Features

- Added `connectOptions` property to `MillicastSource` initializer to help configure client options for a specific source.
- Added `preventsDisplaySleepDuringVideoPlayback` API to help configure enabling screen locking.
- Introduced `MillicastEventTypes.ERROR` to `THEOplayerMillicastIntegration` for error dispatching. Use the `addEventListener` method on `MillicastIntegration` to listen to Millicast related events. For more info check the API reference at https://www.theoplayer.com/docs/theoplayer/v8/api-reference/ios/Millicast/

#### ⚡ Improvements

- Improved playback event dispatching system while Airplaying a THEOlive source.

#### 🐛 Issues

- Fixed an issue that caused a fatal error when accessing an expired caching task.
- Fixed an issue where the picture-in-picture presentation mode was not retained after setting a new source.
- Fixed an issue where a THEOlive source would not resume after being paused for too long.

#### 👎 Deprecations

- Deprecated the `src` property's type. With the next major version the type will be `String` instead of `URL`.

## 🚀 8.10.0 (2025/01/27)

### Web

#### ✨ Features

- Added native support for HbbTV 1.5.

#### ⚡ Improvements

- Ensure ads in SSAI play back at normal speed, but allow content to resume at the selected playback rate.

#### 🐛 Issues

- Fixed an issue where the player could switch to the main audio track when seeking backwards on Tizen 2.4.
- Fixed an issue where sometimes the player failed to dispatch an `error` event when encountering a media decode error while playing an HLS stream.
- Fixed an issue where a THEOads ad break could be removed from the API before it has been fully played.
- Fixed an issue where going into native PiP during a THEOads adbreak would not play the ad in PiP mode.
- Fixed an issue where starting the stream in the middle of a THEOads ad break could falsely keep the player in a paused state.
- Fixed an issue where THEOads could get stuck at the end of the ad break on MacOS Safari and Firefox.
- Fixed an issue on Safari where a THEOads ad break could be interrupted by setting another ad break.
- Fixed an issue where the same THEOads ad break could be duplicated on the API.
- Fixed an issue where autoplay did not work when using THEOads on smart TV's.
- Fixed an issue with incorrect positioning and sizing of THEOads overlays.
- Fixed an issue where the player would trigger an unhandled promise rejection in Safari version 16 and lower.
- Fixed an issue where THEOads clickthrough didn't work properly.
- Fixed an issue on Firefox where a THEOads ad would be only half the width of what it should be.
- Fixed an issue where the player could show a black screen when going into a THEOads adbreak on MacOS Safari versions 16 and 17.

### Android

#### 💥 Breaking Changes

- Removed `badnetworkMode` on THEOlive API.

#### ✨ Features

- Added the Media3 integration. This integration installs a new player backend built on top of [Jetpack Media3](https://developer.android.com/media/media3), which aims to provide more stable playback on a wider range of devices.
    - Note that this integration is currently under active development, and some advanced player features may not yet be compatible with this new integration.
    - For more information, see [our getting started guide](https://www.theoplayer.com/docs/theoplayer/v8/how-to-guides/android/media3/getting-started/).

#### 🐛 Issues

- Fixed an issue where the player would not automatically retry loading THEOlive streams on recoverable errors.
- Fixed an issue where cues are not added all at once while sideloading thumbnails during MP4 playback.
- Fixed an issue where a source using THEOads would not start play-out.

### iOS

#### ✨ Features

- Added [Millicast](https://www.theoplayer.com/docs/theoplayer/how-to-guides/ios/millicast/getting-started/) integration for real-time streaming. The integration is available on Cocoapods and SPM.

#### 🐛 Issues

- Fixed an issue where background audio would not continue when in PiP mode and locking the screen.
- Fixed an issue where Play/Pause events were not dispatched correctly during playback of a THEOlive source while Airplaying.
- Fixed an issue where THEOlive sources would occasionally pause unexpectedly.

### tvOS

#### ✨ Features

- Added [Millicast](https://www.theoplayer.com/docs/theoplayer/how-to-guides/ios/millicast/getting-started/) integration for real-time streaming. The integration is available on Cocoapods and SPM.

## 🚀 8.9.0 (2025/01/15)

### General

### Web

#### ✨ Features

- Added 'native-picture-in-picture' to 'Presentation' API as an experimental feature.
- Added a flag `segmentRelativeVttTiming` to `DashPlaybackConfiguration` to indicate whether segmented WebVTT files' timestamps should be considered relative to the segment start time.

#### ⚡ Improvements

- Improved the behavior of THEOads tune-in when using an alternative ad source.
- Improved the performance of HESP and THEOlive streams.

#### 🐛 Issues

- Fixed an issue where the THEOads overlays were not always attached to the content when the video aspect ratio and the player aspect ratio do not match.
- Fixed an issue for THEOads where the content could be incorrectly paused after transitioning from ad to content.
- Fixed the returned `buffered` for THEOads near adbreaks.

### Android

#### ✨ Features

- Added `ID3Cue` interface with a `getFrame()` method, which provides a type-safe API to read the ID3 frame of an ID3 metadata cue.
- Google DAI [Ad](https://developers.google.com/ad-manager/dynamic-ad-insertion/sdk/android/apis#ima.dai.api.Ad) data is now exposed under `THEOAd` and `THEOAdBreak`.

#### 👎 Deprecations

- Deprecated `sessionId` and `userId` options in `THEOLiveConfig` in favor of `externalSessionId`. This is now in line with the web player.

### iOS

#### 🐛 Issues

- Fixed an issue where paused caching tasks were evicted and entered error state after an application restarted.

## 🚀 8.8.3 (2025/01/07)

### General

#### 🐛 Issues

- Fixed an issue where `seekable` would incorrectly be empty for DASH live streams.

## 🚀 8.8.2 (2025/01/06)

### Android

#### 🐛 Issues

- Fixed an issue where accessing `THEOplayerGlobal.getSharedInstance` before creating a THEOplayer View would cause an application crash.

## 🚀 8.8.1 (2025/01/03)

### Android

#### 🐛 Issues

- Fixed an issue where accessing `THEOplayerGlobal.getSharedInstance` for the first time from a thread other than the main thread would cause an application crash.

## 🚀 8.8.0 (2024/12/30)

### General

#### 🐛 Issues

- Fixed an issue where the beginning of the seekable range in a DASH live stream was jumping back and forth by a few seconds.
- Fixed an issue where a seek to the start of the seekable range would result in a seek to live for DASH live streams.
- Fixed an issue on Web and Android on content protected DASH streams where the player was still appending segments from adaptation sets that the DRM server did not return a key for.

### Web

#### 🐛 Issues

- Fixed an issue where the player would dispatch incorrect play/pause events when playing a THEOads stream.
- Fixed an issue where the player would run out of buffer occasionally when playing DASH live streams with slight inconsistencies in segment start times between manifest updates.

### iOS

#### ⚡ Improvements

- Google IMA and DAI ads now dispatch `ADD_AD_BREAK`, `UPDATE_AD_BREAK` and `REMOVE_AD_BREAK` events.

#### 🐛 Issues

- Fixed an issue where an `AdBreak`'s `maxRemainingDuration` property was not updated in IMA and DAI ads.

## 🚀 8.7.0 (2024/12/16)

### Web

#### ✨ Features

- Added support for Dolby Vision (`dvav`, `dva1`, `dvhe` `dvh1`) and Dolby Digital Plus (`ec-3`) codecs in HLS when the platform supports it.

#### ⚡ Improvements

- Improved the behavior of THEOads on smart TVs.

#### 🐛 Issues

- Fixed an issue where the player would sometimes stall when trying to switch between an alternative THEOad source and the content.
- Added in the missing `activequalitychanged` event for Millicast media.
- Fixed an issue where the player would sometimes repeatedly request the same segment in a DASH live stream when the segment overlaps with a previous segment.
- Fixed an issue where playback using the Microsoft WebView2 control with Edge Chromium v130 would fail due to incorrect functionality of `SourceBuffer.changeType`. 

### Android

#### 💥 Breaking Changes

- Fixed an issue where THEOplayer ProGuard rules would affect the importing application builds.
    - Depending on your project, you may need to add one or more of the following `dontwarn` rules to your application's ProGuard rules:
        ```
        -dontwarn androidx.mediarouter.**
        -dontwarn com.google.ads.interactivemedia.v3.api.**
        -dontwarn com.google.android.gms.cast.framework.**
        -dontwarn com.google.android.gms.common.GoogleApiAvailability
        -dontwarn com.google.android.gms.security.**
        -dontwarn com.google.gson.**
        -dontwarn kotlin.jvm.internal.SourceDebugExtension
        ```

#### 🐛 Issues

- Fixed a `NullPointerException` crash when seeking in a Google DAI stream with snap back when there are no scheduled ad breaks.
- Fixed an issue where in some edge cases the player would throw a `NullPointerException` while playing a Google IMA ad.

#### 👎 Deprecations

- The `GoogleImaAd` interface will be moved from the `core` Maven package to the `integration-ads-ima` package in the next major version, and will be moved from `com.theoplayer.android.api.ads.GoogleImaAd` to `com.theoplayer.android.api.ads.ima.GoogleImaAd`. You can already switch to the new class name today for your Kotlin code, to facilitate the migration.

### iOS

#### ✨ Features

- Added support for picture in picture presentation mode on THEOlive sources.

#### 🐛 Issues

- Fixed an issue where `THEOplayer.autoplay` was not being set correctly.
- Fixed an issue where when returning to the sender from chromecast would cause audio and text tracks to be selected incorrectly.
- Fixed an issue where fatal errors were emitted when retrieving videoHeight, videoWidth, videoRect or setting the currentTime or programDateTime while playing a THEOlive source.
- Fixed an issue where the duration of THEOlive sources was not set correctly.
- Fixed an issue where the pause event is not dispatched when entering background mode while an IMA ad is active.

### tvOS

#### 🐛 Issues

- Fixed an issue where fatal errors were emitted when retrieving videoHeight, videoWidth, videoRect or setting the currentTime or programDateTime while playing a THEOlive source.
- Fixed an issue where the duration of THEOlive sources was not set correctly.

## 🚀 8.6.3 (2024/12/12)

### Web

#### ⚡ Improvements

- Improved the UI for HESP streams when returning back to a muted tab on Chromium-based browsers.
- Improved playback of THEOlive streams on Vizio devices.

### tvOS

#### ✨ Features

- Added a THEOlive integration with a `TheoLiveSource` to play [THEOlive](https://theo.live) channels using a THEOplayer on tvOS.

## 🚀 8.6.2 (2024/12/10)

### General

#### 🐛 Issues

- Fixed an issue on Web and Android on content protected DASH streams where the player tries to access adaptation sets that the DRM server did not return a key for.

### Web

#### 🐛 Issues

- Fixed an issue where using an empty string as the token with DRM integration `vudrm` would cause an error.

### iOS

#### 🐛 Issues

- Fixed an issue where `THEOplayer.autoplay` was not being set correctly.

## 🚀 8.6.1 (2024/12/05)

### iOS

#### 🐛 Issues

- Fixed an issue where legacy player licenses without the features property were rejected.

## 🚀 8.6.0 (2024/12/04)

### General

#### 🐛 Issues

- Fixed an issue where the minimum and maximum playback rate in the latency configuration for an HESP stream were incorrectly reset after a buffer stall.
- Fixed an issue where no DRM license requests were sent for a DASH stream for which adaptation set switching is enabled and the PSSH does not appear inside the initialization segment. This relates to both web and Android.

### Web

#### 💥 Breaking Changes

- Removed currentServerLiveTime and currentLatency from experimental HESP API in favor of the latency API.

#### ✨ Features

- Added ad events for alternative THEOads ad sources.
- Exposed `description` on `GoogleImaAd`.
- Added the `player.addTextTrack()` API to be able to create an external text track. This track is mutable and can be filled with cues, allowing 3rd parties to add subtitles to the player in real-time.
- Added support for passing a `latencyConfiguration` in HESP and THEOlive sources.

#### 🐛 Issues

- Fixed an issue where the `adend` and `adbreakend` events were not dispatched correctly when a THEOads adbreak ended.
- Fixed an issue where the player did not fire seeking and seeked events when seeking using the seek bar in the native fullscreen UI on iOS Safari (when allowNativeFullscreen is set to true).
- Added the `useAdUiElementForSsai` flag to the `GoogleImaConfiguration` player config to enable use of an ad UI element for Google DAI to allow ads with extra UI to be displayed, which is required in the EU. Note that enabling this flag disables THEO's default clickthrough element which had improved keyboard accessibility over the DAI ad ui element.

#### 👎 Deprecations

- Deprecated streamName for Millicast sources in favor of the src property.
- Deprecated integration `theolive` in favor of type `theolive` for THEOlive sources.

### Android

#### ✨ Features

- Added support for CEAX08 subtitles for HESP and THEOlive streams.

#### 🐛 Issues

- Fixed an issue where the UI overlay was not registered as a "friendly" obstruction with Google IMA and Google DAI.
- Fixed an issue where creating a CachingTask would cause a crash.

#### 👎 Deprecations

- Deprecated `MillicastSource.Credential` in favor of `src` and inlined properties `streamAccountId`, `apiUrl` and `subscriberToken` directly on `MillicastSource`.

### iOS

#### ✨ Features

- Added a THEOlive integration with a `TheoLiveSource` to play [THEOlive](https://theo.live) channels using a THEOplayer on iOS.

#### 🐛 Issues

- Fixed an issue where the player license provided in the plist was not read properly.
- Fixed an issue where DAI `AdBreak`s returned by the `AdsEventTypes.AD_BREAK_BEGIN` event would have an inaccurate `timeOffset`.
- Fixed an issue where on iOS cues were skipped during the cue activation process.

## 🚀 8.5.1 (2024/11/29)

### Android

#### ⚡ Improvements

- Added `RenderingTarget.SURFACE_CONTROL` to help managing the `Surface` lifecycle during entering/exiting fullscreen.
  - Note: `RenderingTarget.SURFACE_CONTROL` is only available for API level 29 and above.

## 🚀 8.5.0 (2024/11/19)

### Web

#### ✨ Features

- Added support for Millicast audio-only streams.
- Added audio track events for Millicast audio tracks.
- Added support for chromecasting and airplaying THEOlive streams (with higher latency).

#### ⚡ Improvements

- Improved error reporting when an asset cannot be played because of lack of DRM support in the platform.
- Updated documentation to clearly state the incompatibility of VMAP ads with `timeOffset` and added in warnings for when it happens anyway.

#### 🐛 Issues

- Fixed an issue where the `ended` event would no longer fire when seeking to the end of a stream while the player is paused in Chrome.
- Fixed a memory leak for HESP streams.
- Fixed an issue where snapback on Google DAI streams would behave incorrectly when seeking forward or into an adbreak.
- Fixed an issue where Airplay failed to start playing.

### Android

#### ✨ Features

- Added `MillicastSource.option` to set additional subscriber options for a [Millicast](https://www.theoplayer.com/docs/theoplayer/how-to-guides/android/millicast/getting-started/) stream.
- Added support for CMCD in TheoLive.

#### 🐛 Issues

- Fixed an issue where attempting to load an MP4 or MP3 source that is not allowed by the player's license would crash the app instead of dispatching an `ErrorEvent`.
- Fixed an issue where switching video tracks in a Millicast stream would show frames from both the old and new video track.
- Fixed an issue where VMAP mid-roll ads were not being played.

### iOS

#### ⚡ Improvements

- Removed extra play/pause events after preroll ads.

#### 🐛 Issues

- Fixed an issue on the cue activation algorithm for iOS, that was preventing cues from being activated (i.e 'entered').

## 🚀 8.4.2 (2024/11/14)

### Android

#### 🐛 Issues

- Fixed an issue where the player was stuck on a black screen indefinitely after transitioning to or from full screen.

## 🚀 8.4.1 (2024/11/12)

### Android

#### 🐛 Issues

- Fixed an issue on Android where the player would crash when destroying an instance with a cast integration.

## 🚀 8.4.0 (2024/11/05)

### General

#### 🐛 Issues

- Fixed an issue where a multi-period DASH stream containing the same segment in two consecutive periods could cause the player to keep requesting the same segment.

### Web

#### ✨ Features

- Added `MillicastSource.connectOptions` to set additional subscriber options for a [Millicast](https://www.theoplayer.com/docs/theoplayer/how-to-guides/web/millicast/getting-started/) stream.

#### ⚡ Improvements

- Improve the native fullscreen UI on older Safari versions when playing live streams.

#### 🐛 Issues

- Fixed an issue where attempting to play VR content with WebXR on Meta Quest devices would cause a browser crash.

### Android

#### ✨ Features

- Added the [THEOlive](https://theo.live) integration for enabling THEOlive playback as part of the standard THEOplayer SDK.

#### ⚡ Improvements

- `THEOplayerView.getCast()` is now non-null. When the Chromecast integration is not (yet) registered, this API returns default values but already allows attaching event listeners.

#### 🐛 Issues

- Fixed a crash that could occur during mp3/mp4 playback due to a `java.lang.IllegalStateException`.
- Fixed an issue where an `IOException` during mp3 playback could cause an application crash.

## 🚀 8.3.0 (2024/10/22)

### General

#### 🐛 Issues

- Fixed an issue where the player did not consistently request blocking playlist updates when playing a low-latency HLS stream.
- Fixed an issue where the player would switch to requesting full segments instead of partial segments after a quality switch when playing a low-latency HLS stream.

### Web

#### ✨ Features

- Added [Millicast](https://www.theoplayer.com/docs/theoplayer/how-to-guides/web/millicast/getting-started/) support for real-time streaming.

#### ⚡ Improvements

- Optimized logic for updating `TextTrack.activeCues` to not always need to run on every animation frame.

#### 🐛 Issues

- Fixed an issue where THEOads was not enabled by default in the `@theoplayer/theoads` package.
- Fixed an issue on Safari where ID3 cues were not correctly removed once they are no longer inside the player's live seekable range.
- Fixed an issue in Safari on iOS 18 where native metadata cues with type `com.apple.quicktime.HLS` were not being cleaned up properly and could leak memory.

### Android

#### ⚡ Improvements

- Added `AdClickedEvent` to detect interactions with the "Learn More" button on Google IMA.

#### 🐛 Issues

- Fixed an issue where the ReadyState and the relevant events were not correctly dispatched while playing an MP3 source.
- Fixed an issue where tracks were not loaded by the time the `LOADEDMETADATA` event was triggered.
- Fixed missing API documentation for the Millicast integration. It is now available on [our documentation website](https://www.theoplayer.com/docs/theoplayer/v8/api-reference/android/com/theoplayer/android/api/millicast/package-summary.html).
- Fixed an issue in the Millicast integration where the player would incorrectly try to re-subscribe to an already subscribed stream after returning the app from the background.

### iOS

#### ✨ Features

- ID3 cue endTimes are now updated when receiving a new entry.

#### ⚡ Improvements

- Introduced a new Swift Package repository (SPM) to avoid slow startup times in Xcode when depending on THEOplayer using SPM. For more information please visit “https://github.com/theoplayer/theoplayer-sdk-apple”.
- Outdated text track cues that fall out of seekable time ranges are now removed.
- Added `AdClickedEvent` to detect interactions with the "Learn More" button on Google IMA.

#### 🐛 Issues

- Fixed an issue where on iOS15+ devices playback would pause when returning from backgroundAudio playout when the player went through a view hierarchy change.

### Chromecast

#### 🐛 Issues

- Fixed an issue where HLS streams were showing no video when casting to a Chromecast v2 receiver and only audio would be played.

## 🚀 8.2.2 (2024/10/16)

### Android

#### 🐛 Issues

- Fixed an audio glitch that occured when transitioning to background audio playback.
- Fixed an issue on Android where the player would sometimes crash when setting a new source after play-out of the old source had already started.

## 🚀 8.2.1 (2024/10/14)

### Web

#### 🐛 Issues

- Fixed an issue where THEOads was not enabled by default in the `@theoplayer/theoads` package.

### iOS

#### 🐛 Issues

- Fixed an issue where playback on iOS 15+ devices would pause when returning from a `backgroundAudio` playout after the player went through a view hierarchy change.

## 🚀 8.2.0 (2024/10/10)

### General

#### ✨ Features

- Added THEOads API to allow to changing the ad tag parameters via `player.ads.theoads.replaceAdTagParameters`.

#### ⚡ Improvements

- Prevent unnecessary first seek when starting playback at the beginning of a VoD source for DASH, to improve startup times on lower-end smart TVs.

#### 🐛 Issues

- Fixed an issue where the latency manager would not be automatically enabled when overriding the source with another source containing a `SourceLatencyConfiguration`.
- Fixed an issue where the player would sometimes skip some segments when playing certain MPEG-DASH live streams with slightly misaligned segments, which could result in excessive gap jumping and stalling.
- Fixed an issue where the player could stall indefinitely when playing an HLS stream with misaligned discontinuities on macOS Safari and other WebKit-based browsers.

### Web

#### 💥 Breaking Changes

- In order to use THEOads, you now need to set [`PlayerConfiguration.ads.theoads`](https://www.theoplayer.com/docs/theoplayer/v8/api-reference/web/interfaces/AdsConfiguration.html#theoads) to `true`. Users of the [@theoplayer/theoads](https://www.npmjs.com/package/@theoplayer/theoads) package can temporarily keep using THEOads without updating their player configuration.

#### ✨ Features

- Added support for CEA-608 and CEA-708 subtitles for HESP streams.
- Added support for THEOlive sources.
- Fixed an issue where the player could remain stuck retrying offline HLS media playlists even after a new source is set.

#### 🐛 Issues

- Fixed an issue where some HESP streams would not play on iOS \<17.1 devices.

### Android

#### ✨ Features

- Added [Millicast](https://www.theoplayer.com/docs/theoplayer/how-to-guides/android/millicast/getting-started/) integration for real-time streaming. The integration is available on [our Maven repository](https://maven.theoplayer.com/) as `com.theoplayer.theoplayer-sdk-android:integration-millicast`.
- Added `TheoAdsIntegration.replaceAdTagParameters()` to allow changing ad tag parameters for THEOads dynamically.

#### 🐛 Issues

- Fixed an issue where an HTTP 3xx redirect from `http://` to `https://` was not followed.
- Fixed an issue where multiple CANPLAYTHROUGH events were triggered
- Fixed an issue where THEOplayer licenses containing `ip-range()` source domains were not handled correctly.

### iOS

#### 🐛 Issues

- Fixed an issue where the player automatically resumed playing after coming back from tapping the Learn more button during a Google IMA ad.

## 🚀 8.1.2 (2024/10/02)

### Android

#### 🐛 Issues

- Fixed an issue where playing locally stored mp3 files caused a crash.

## 🚀 8.1.1 (2024/09/27)

### General

#### 🐛 Issues

- Fixed an issue where the player would error when a media key changes from `usable` to `output-restricted` while other qualities are still playable.

### Web

#### ✨ Features

- Added subtitle styling support for TTML.

### Android

#### 🐛 Issues

- Fixed an issue where playing long MP3 files could cause audio stuttering.

## 🚀 8.1.0 (2024/09/24)

### Web

#### 🐛 Issues

- Fixed an issue with the TypeScript type definitions where `ServerSideAdInsertionConfiguration.integration` did not allow for custom server-side ad integrations.
- Fixed an issue where the THEOads player would show the subtitles from the content stream while playing ads.
- Fixed an issue where the player could skip a playable FairPlay DRM source if the same source description also contained a source which did not use FairPlay DRM.
- Fixed an issue where audio tracks would be ordered differently when playing natively on iOS Safari.

### Android

#### 🐛 Issues

- Fixed an issue where `SourceChangeEvent` would be triggered late when `autoplay` is set to true.
- Fixed an issue where going in and out of fullscreen would cause the playback to seek back.
- Fixed an issue where audio and video were not in sync for a few frames.

### iOS

#### 🐛 Issues

- Fixed an issue where in DAI live streams the ad countdown was missing.
- Fixed an issue where passing multiple `GoogleImaAdDescription`s as pre-roll ads would only playout one.

## 🚀 8.0.1 (2024/09/11)

### Web

#### ✨ Features

- Exposed the `adsmanagerloaded` event on the `player.ads` API to access the Google IMA AdManager.

## 🚀 8.0.0 (2024/09/09)
### Officially announcing THEOplayer 8.0
Introducing a major version bump to THEOplayer 8.0. This version officially releases all the improvements and developments THEOplayer has achieved since version 7.0.

THEOplayer 8.0 is **backwards compatible for most features but includes some breaking changes per SDK**. Please review them carefully in the respective changelog for your SDK.

- THEOplayer 8.0 is the first official release with support for [THEOads](https://www.theoplayer.com/product/theoads), our new product for delivering seamless and novel ad experiences through Server Guided Ad Insertion.  

- The Custom Server Side Ad Insertion API allows custom SSAI integrations to control the player Ad API, and forms the basis for our new Yospace connectors for [Web](https://www.theoplayer.com/docs/theoplayer/connectors/web/yospace/), [Android](https://www.theoplayer.com/docs/theoplayer/connectors/android/yospace/) and [iOS](https://www.theoplayer.com/docs/theoplayer/connectors/ios/yospace/) as well as our upcoming Edgio Uplynk connectors.

- The Latency Manager API allows fine-tuned control over live and low-latency playback for DASH, HLS and HESP, available on Web and Android.

For more info on navigating our breaking changes, take a look at our migration guides for [Web](https://www.theoplayer.com/docs/theoplayer/v8/getting-started/sdks/web/migrating-to-theoplayer-8/), [Android](https://www.theoplayer.com/docs/theoplayer/v8/getting-started/sdks/android/migrating-to-theoplayer-8/) and [iOS](https://www.theoplayer.com/docs/theoplayer/v8/getting-started/sdks/ios/migrating-to-theoplayer-8/).

### General

#### ✨ Features

- Custom server-side advertisement integrations are now stable. See the API documentation for [web](https://www.theoplayer.com/docs/theoplayer/v8/api-reference/web/interfaces/Ads.html#registerServerSideIntegration.registerServerSideIntegration-1), [Android](https://www.theoplayer.com/docs/theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/Ads.html#registerServerSideIntegration(java.lang.String,com.theoplayer.android.api.ads.ServerSideAdIntegrationFactory)) and [iOS](https://www.theoplayer.com/docs/theoplayer/v8/api-reference/ios/Protocols/Ads.html).

### Web

#### 💥 Breaking Changes

- Removed the Yospace pre-integration in favor of the new [Yospace web connector](https://www.theoplayer.com/docs/theoplayer/connectors/web/yospace/).
- Removed the Conviva pre-integration in favor of the new [Conviva web connector](https://www.theoplayer.com/docs/theoplayer/connectors/web/conviva/).
- Removed the empty `player.analytics` API.
- Renamed the default integration for client-side VAST and VMAP ads from `'theo'` to `'csai'`. Ad descriptions that don't specify an [integration](https://www.theoplayer.com/docs/theoplayer/v8/api-reference/web/interfaces/AdDescription.html#integration) or use the old name will continue to work, but will have their integration replaced with `'csai'` in the API. The new name was chosen to avoid confusion with our new THEOads solution for server-guided ad insertion.

### Android

#### 💥 Breaking Changes

- Removed deprecated UIConfiguration.
- Removed deprecated `AdIntegrationKind.DEFAULT`.
- Removed deprecated `HlsPlaybackConfiguration.isUseLegacy` flag.

#### ⚡ Improvements

- Make `CachingTaskList#getTaskById(String)` return `null` if no match is found.

### iOS

#### 💥 Breaking Changes

- Due to low number of usage of iOS 12, we decided to raise the minimum supported version of our iOS SDK to 13.0. This decision was based on metrics provided by Apple's iOS usage measures by devices that transacted on the App Store. For more info check `https://developer.apple.com/support/app-store/`.
- Removed deprecated `GoogleIMAAdsConfiguration` and `GoogleIMAConfigurationBuilder` APIs. Use `IMASettings` instead and pass it to `GoogleIMAIntegrationFactory.createIntegration`. For more info check https://www.theoplayer.com/docs/theoplayer/v8/getting-started/sdks/ios/migrating-to-theoplayer-8/
- Removed deprecated `GoogleDAIAdsConfiguration` and `GoogleDAIAdsConfigurationBuilder` APIs. Use `IMASettings` instead and pass it to `GoogleIMAIntegrationFactory.createIntegration`. For more info check https://www.theoplayer.com/docs/theoplayer/v8/getting-started/sdks/ios/migrating-to-theoplayer-8/
- Removed deprecated `AdsConfiguration` and `AdPreloadType` APIs.
- Removed deprecated `ScheduledAd` API. Change `Ads.scheduledAds` type from `ScheduledAd` to `Ad`.
- Removed deprecated `PiPConfiguration.init` API. Use `PiPConfigurationBuilder` instead.
- Removed deprecated `UIConfiguration` API.
- Removed deprecated `setPreload` and `setPlaybackRate` APIs. Use `preload` and `playbackRate` setters respectively.
- Removed deprecated `THEOplayerCastHelper` API. Use `THEOplayerGoogleCastIntegration.CastIntegrationHelper` instead.
- Changed `CompanionAd.width` and `CompanionAd.height` types from `Int?` to `Int`.
- Changed `Ad.adBreak` type from `AdBreak` to `AdBreak?`. Changed `Ad.companions` type from `[CompanionAd?]` to `[CompanionAd]`.
- Removed deprecated `THEOplayerConfiguration.init` API. Use `THEOplayerConfigurationBuilder` instead.
- Removed deprecated `ads`, `cast` and `ui` properties from `THEOplayerConfiguration` API.
- Removed obsoleted and deprecated `defaultKind`, `theo` and `freewheel` cases from `AdIntegrationKind` API.
- Bumped minimum supported GoogleCast xcframework version from 4.7.1 to 4.8.0.
- Removed unused `AdIntegration.theo` enum case in preparation for the new THEOads API.

#### 👎 Deprecations

- Deprecating all THEOplayer Objective-C API support. Existing APIs will still continue to work until next major release, but additional support for new APIs will discontinue. When it was introduced, the goal of the Objective-C APIs was to provide bindings to bridge our native SDK to React Native. Over time that became unneeded as Swift became capable of accomplishing the goal. Please contact us for support in case your codebase relies on the Objective-C APIs.

### tvOS

#### 💥 Breaking Changes

- Raising the tvOS mimimum supported version of our tvOS SDK to 13.0 for consistency with iOS version.

#### 👎 Deprecations

- Deprecating all THEOplayer Objective-C API support. Existing APIs will still continue to work until next major release, but additional support for new APIs will discontinue. When it was introduced, the goal of the Objective-C APIs was to provide bindings to bridge our native SDK to React Native. Over time that became unneeded as Swift became capable of accomplishing the goal. Please contact us for support in case your codebase relies on the Objective-C APIs.

</details>
<details name="major-version">
<summary>Version 7</summary>

## 🚀 7.12.0 (2024/09/05)

### General

#### 🐛 Issues

- Fixed an issue where the player could stall indefinitely when playing or seeking in an HLS stream with misaligned discontinuities.

### Web

#### ✨ Features

- Added `Ad.customData` and `AdBreak.customData`, which can be populated with integration-specific data by a [custom SSAI integration](https://www.theoplayer.com/docs/theoplayer/v7/api-reference/web/interfaces/Ads.html#registerServerSideIntegration).

#### ⚡ Improvements

- Do not report the HESP latency when paused or when recovery seeking as these values don't have semantic meaning.

### Android

#### ✨ Features

- Added `headers` property to `TypedSource`. The player will add the headers to the HTTP requests for the given `TypedSource`, only for mp3 and mp4 sources.
- Added `Ad.customData` and `AdBreak.customData`, which can be populated with integration-specific data by a [custom SSAI integration](https://www.theoplayer.com/docs/theoplayer/v7/api-reference/android/com/theoplayer/android/api/ads/Ads.html#registerServerSideIntegration(java.lang.String,com.theoplayer.android.api.ads.ServerSideAdIntegrationFactory)).

#### 🐛 Issues

- Fixed an issue where `player.getDuration()` was negative while playing a live stream on Chromecast.

#### 👎 Deprecations

- Deprecated unused `AdIntegrationKind.DEFAULT`.

### iOS

#### ✨ Features

- Added `headers` property to `TypedSource`. The player will add the headers to the HTTP requests for the given `TypedSource`.

#### 👎 Deprecations

- Deprecated obsoleted `defaultKind`, `theo` and `freewheel` cases from `AdIntegrationKind`.

## 🚀 7.11.0 (2024/08/26)

### General

#### ⚡ Improvements

- Added support for the `urn:mpeg:dash:adaptation-set-switching:2016` property inside DASH SupplementalProperty.

### Web

#### ✨ Features

- Added support for FLAC audio in CMAF HLS streams.

#### ⚡ Improvements

- Set an empty WAI-ARIA `role` attribute on the Web Worker iframe to make sure it is ignored by assistive technologies, such as screen readers.

#### 🐛 Issues

- Fixed an issue where the player would unmute after source changes and seeks on Tizen 2.4.

### Android

#### 🐛 Issues

- Fixed an issue where no `sourcechange` event would be dispatched when resetting the player's source after play-out of a non-streamable asset.
- Fixed an issue where the Metrics API reported incorrect values.

#### 👎 Deprecations

- Deprecated unused `UIConfiguration`.
- Deprecated unused `THEOplayerConfig#getUi()`.
- Deprecated unused `THEOplayerConfig.Builder#ui(UIConfiguration)`.

### iOS

#### 🐛 Issues

- Fixed an issue where the picture-in-picture window would disappear after an ad preroll ends.

## 🚀 7.10.0 (2024/08/12)

### General

#### 🐛 Issues

- Fixed an issue where the player would not do ABR for audio only HLS streams.
- Fixed an issue where the player would stall indefinitely on certain HLS streams with discontinuities.

### Web

#### 🐛 Issues

- Fixed an issue with the positions top-left and top-right of picture-in-picture.

#### 👎 Deprecations

- Deprecated the `'theo'` AdIntegrationKind and `THEOplayerAdDescription`. The functionality of the default client-side ad integration remains identical but is now renamed to AdIntegrationKind `'csai'` and the associated `CsaiAdDescription`. Ad descriptions that don't explicitly configure `integration` will for now still default to `'theo'` until THEOplayer 8.0, starting from which it will default to the new `'csai'`.

### Android

#### ⚡ Improvements

- Added support for generic ad event types (defined in [`AdsEventTypes`](https://www.theoplayer.com/docs/theoplayer/v7/api-reference/android/com/theoplayer/android/api/event/ads/AdsEventTypes.html)) to the Google IMA, Google DAI and MediaTailor integrations.
- All events will now be dispatched on the main thread.

#### 🐛 Issues

- Fixed an issue where the player could sometimes crash when starting a Chromecast session.
- Fixed an issue where hiding the player view until the `loadeddata` event breaks the playback.

### iOS

#### ✨ Features

- Added support for sideloaded WebVTT thumbnails as metadata text tracks. The player will expose the thumbnails as a `TextTrack` via the `theoplayer.textTracks` API.

## 🚀 7.9.0 (2024/07/31)

### General

#### ✨ Features

- Added support for media track enabling / disabling for HESP streams (Safari on iOS \<17.1 devices not included).

#### 🐛 Issues

- Fixed an issue where the player could crash when processing an MPEG-TS segment containing a PES header split across multiple MPEG-TS packets.

### Web

#### ⚡ Improvements

- Extended the functionality of source abr configuration properties `preferredAudioCodecs` and `preferredVideoCodecs` to apply throughout playback rather than only at the beginning.

#### 🐛 Issues

- Fixed several issues that would cause the player to get stuck resetting after a source change on older Tizen versions.
- Fixed an issue where source abr property `preferredAudioCodecs` would not be properly applied in case of multiple audio tracks of the same language with different codecs.

#### 👎 Deprecations

- Deprecated the Conviva pre-integration in favor of the new [Conviva web connector](https://www.theoplayer.com/docs/theoplayer/connectors/web/conviva/).
- Deprecated the Yospace pre-integration in favor of the new [Yospace web connector](https://www.theoplayer.com/docs/theoplayer/connectors/web/yospace/).

### Android

#### ✨ Features

- Added support for streaming advertisements (DASH/HLS) with Google IMA.
    - It can be set by combining
      [AdsRenderingSettings.setMimeTypes(List\<String\> mimeTypes)](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/api/reference/com/google/ads/interactivemedia/v3/api/AdsRenderingSettings.html#public-abstract-void-setmimetypes-liststring-mimetypes)
      along with `GoogleImaIntegration.setAdsRenderingSettings(adsRenderingSettings: AdsRenderingSettings?)`
      or `GoogleImaIntegration.requestAds(adsRequest: AdsRequest, adsRenderingSettings: AdsRenderingSettings?)`
    - Note that this will limit the playback of the ads to the ones with the specified mimeTypes, which means some ads might be skipped.
- Added support for using the experimental custom `Surface` to play advertisements.
- Added support for managing low-latency live playback via `Player.getLatencyManager()` API.

#### ⚡ Improvements

- Added ability to create `THEOplayerView` from non-Activity `Context`.

#### 🐛 Issues

- Fixed an issue where Chromecast did not start playing if the source URL did not have a file extension.
- Fixed an issue where cast crashed if one of the values in the metadata was null.
- Fixed an issue where the player could sometimes crash after stopping a Chromecast session.

### iOS

#### 🐛 Issues

- Fixed an issue where the seeking and seeked events would fire twice while casting to AirPlay.
- Fixed an issue where the main content would load before ad pre-rolls.
- Fixed an issue where sideloading subtitles would fail.

## 🚀 7.8.0 (2024/07/15)

### Web

#### ✨ Features

- Added `MultiViewPlayer.ui` to access the UI of a multiview player.

#### 🐛 Issues

- Fixed `MultiViewPlayer.destroy()` to not remove the original container element from the DOM.
- Updated `MultiViewPlayerLayout` in the TypeScript type definitions to be a string union instead of an enum.
- Fixed an issue on older browsers (such as Samsung Tizen 2.4) where the player failed to load when `Symbol.iterator` is not defined.
- Fixed an issue on Tizen where seeking backwards after the stream ended could cause the player to be stuck in a playback loop and not ending again.
- Fixed an issue where Google IMA midroll and postroll ads were not preloaded.

### Android

#### 🐛 Issues

- Fixed an issue where audio played on the phone instead of the connected headset after stopping Chromecast.
- Fixed an issue where the play/pause button was not working in a PiP window when targeting  API 34 (or Android 14).
- Fixed an issue where caching sources would cause a runtime crash.

#### 👎 Deprecations

- [Jitpack.io](https://jitpack.io/#com.theoplayer/theoplayer-sdk-android) is now deprecated in favor of the [THEOplayer Maven repository](https://maven.theoplayer.com/#/releases/com/theoplayer/theoplayer-sdk-android).
  Starting from 8.0 we will no longer publish new versions of the THEOplayer Android SDK or connectors to Jitpack.

### iOS

#### ✨ Features

- Added `player.ads.registerServerSideIntegration()` API for registering custom server-side advertisement integrations. This API is currently experimental.

## 🚀 7.7.1 (2024/07/09)

### Web

#### 🐛 Issues

- Fixed a regression where DASH playback could stall indefinitely after an HTTP request timed out on older browsers without `fetch()`.

### Android

#### 🐛 Issues

- Fixed an issue where playback was not restoring after a poor network connection.

## 🚀 7.7.0 (2024/07/01)

### General

#### ✨ Features

- Added the ability in HLS to disable the video track (or audio track) on any stream, in order to play audio-only (or video-only).

#### 🐛 Issues

- Fixed an issue where for LL-HLS a race condition could potentially throw the error 'Internal error: attempted to download an incomplete segment'.
- Fixed an issue where the player could sometimes stall while playing an HLS stream with rounded `#EXTINF` durations.

### Web

#### 🐛 Issues

- Fixed a regression where the player would throw an "Invalid UTF-8 detected" error when loading an HLS stream on an older browser without `fetch()` support and when using a network response interceptor.

### Android

#### ✨ Features

- Added support for caching MP4 videos.

#### 🐛 Issues

- Fixed an issue where audio and text tracks restored to default when starting or stopping casting.
- Fixed an issue where media tracks were not updated after changing source while casting to Chromecast
- Fixed an issue where player paused when going to a fullscreen view during an IMA ad.

### iOS

#### ✨ Features

- Added ActiveQualityChangedEvent which is fired by a MediaTrack when its activeQualityBandwidth property value changes.

## 🚀 7.6.1 (2024/06/26)

### General

#### 🐛 Issues

- Fixed an issue where the player could sometimes stall while playing an HLS stream with rounded `#EXTINF` durations.

## 🚀 7.6.0 (2024/06/18)

### Web

#### 🐛 Issues

- Fixed a memory leak where an `<iframe>` created by the Google DAI integration was not properly removed after calling `player.destroy()`.
- Fixed a performance issue with segment downloads on WebOS 5.x and below and Tizen.
- Fixed an issue where the player would sometimes stall after switching to a very short period in a multi-period DASH stream.

### Android

#### ✨ Features

- Added [`player.ads.registerServerSideIntegration()`](https://www.theoplayer.com/docs/theoplayer/v7/api-reference/android/com/theoplayer/android/api/ads/Ads.html#registerServerSideIntegration(java.lang.String,com.theoplayer.android.api.ads.ServerSideAdIntegrationFactory))  API for registering custom server-side advertisement integrations. This API is currently experimental.

#### 🐛 Issues

- Fixed an issue where the player would sometimes crash on ad play-out completion.
- Fixed an issue where Google IMA ads were not preloaded when using `AdsRenderingSettings.enablePreloading`.
- Fixed an issue where setting preload to `PreloadType.AUTO` would cause the player to always autoplay if the source contained Google-IMA pre-roll ads.
- Fixed an issue where the player would show the first frame of the content before playing a Google-IMA pre-roll ad if preload type `PreloadType.AUTO` was selected.
- Fixed an issue where the player would appear stuck if you changed the source during Google-IMA ad playback.
- Fixed an issue where a source change could trigger a crash on some Android devices.
- Fixed an issue where a media track could not be enabled in its `ADDTRACK` event listener.

## 🚀 7.5.0 (2024/06/04)

### General

#### ✨ Features

- Added `HlsPlaybackConfiguration` flag `delaySubtitlePreload` to delay preloading of subtitles until after video/audio for HLS streams, to work around an issue on MediaTailor streams where no ads are provided when loading subtitles concurrently.

### Web

#### 🐛 Issues

- Fixed an issue where the player's seekable range would be incorrect when casting an HLS stream to Chromecast V2.
- Fixed an issue where the player's currentTime was not updated after changing the source to an HLS stream while casting to a CAF receiver.
- Fixed an issue where the player would stall indefinitely when seeking into a discontinuity misalignment.

### Android

#### 🐛 Issues

- Fixed an issue where adding more than one integration on Android 7 (API level 24) caused a crash.

### iOS

#### 🐛 Issues

- Fixed an issue where the airplay state would be incorrect after killing and re-instantiating a player instance whilst connected to an AirPlay device.
- Fixed an issue where a downloaded mp4 on iOS would be evicted right after the download finishes.

## 🚀 7.4.1 (2024/05/27)

### General

#### 🐛 Issues

- Fixed an issue where incomplete `ServiceDescription` tags in a DASH stream would prevent the player from being able to load the manifest.

### Android

#### 🐛 Issues

- Fixed an issue where streams with Google DAI SSAI would not start playing.

## 🚀 7.4.0 (2024/05/21)

### General

#### 🐛 Issues

- Fixed an issue with the ABR algorithm for HLS on devices that do not report the total segment byte size during the download.

### Web

#### ✨ Features

- Added support for managing low-latency live playback for HLS and DASH streams via `player.latency`.
- Added support for LL-DASH `ServiceDescription` elements, used as the default `player.latency` configuration for LL-DASH live playback. 
- Added [`player.ads.registerServerSideIntegration()`](https://www.theoplayer.com/docs/theoplayer/v7/api-reference/web/interfaces/Ads.html#registerServerSideIntegration.registerServerSideIntegration-1)  API for registering custom server-side advertisement integrations. This API is currently experimental.

#### 🐛 Issues

- Fixed an issue where IMA post-roll ads would be preloaded too early. The post-rolls for VMAPs can now only be preloaded if `player.preload` is set to at least `"metadata"`.

### Android

#### ✨ Features

- Exposed the [focus()](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/api/reference/com/google/ads/interactivemedia/v3/api/BaseManager.html#focus()) method on GoogleImaIntegration and GoogleDaiIntegration to allow moving the focus on interactive elements.

### iOS

#### ✨ Features

- Added `resizeTransitionEnabled` API on THEOplayer to control whether to enable or disable the transition animation when resizing the player.
- Introduced `activeQualityBandwidth` property for `MediaTrack`. This API can be used to get the current video track quality's bandwidth value.
- Introduced `TrackUpdateEvent` event alongside `TrackEventTypes`. This event can be listened to through a `MediaTrack`'s `addEventListener` method.

#### 🐛 Issues

- Fixed an issue where returning from picture-in-picture to the application when in the background would cause the player to pause.
- Fixed an issue where `PLAYING` and `PAUSE` events would not fire during IMA ads when using the native picture-in-picture buttons.
- Fixed an issue where seeking beyond the duration of an asset would not trigger an `ended` event, would keep incrementing the currentTime and block the viewer from restarting playout from scratch.

## 🚀 7.3.0 (2024/05/07)

### Web

#### 🐛 Issues

- Fixed an issue where the player will stutter on playback when starting to Chromecast.
- Fixed an issue where the player would sometimes only enable audio when casting a DASH stream to Chromecast v2.

### Android

#### ✨ Features

- The Android SDK is now also published to `maven.theoplayer.com/releases`.
- Added experimental support for setting a custom `Surface` to render the content into.

#### 🐛 Issues

- Fixed an issue where content started playing behind the advertisement if IMA and DAI integrations were used simultaneously.
- Fixed an issue where no `ended` event is fired when reaching the end of a stream on a Chromecast receiver.

### iOS

#### ✨ Features

- Added support for sideloaded text tracks on Chromecast.

## 🚀 7.2.0 (2024/04/23)

### General

#### ✨ Features

- Added support for setting a liveOffset for HLS live streams.

### Web

#### ⚡ Improvements

- Added some improvements for handling of the license requests on Tizen 2.4.

#### 🐛 Issues

- Fixed an issue in the HLS pipeline where the currentProgramDateTime would briefly return an incorrect value after switching qualities.
- Fixed an issue where sometimes the player would do an incorrect seek on WebOS 5.X.

### Android

#### ✨ Features

- Added support for sideloaded WebVTT TextTracks on Chromecast.

#### ⚡ Improvements

- Updated the Google IMA dependency from 3.32.0 to 3.33.0.

### iOS

#### ✨ Features

- Added `TextTrack.forced` API to indicate whether the track contains Forced Narrative cues.

## 🚀 7.1.1 (2024/04/15)

### General

#### 🐛 Issues

- Fixed an issue where setting preload to auto and autoplay would result in an endless spinner for HLS live streams.

### Android

#### 🐛 Issues

- Fixed an issue where the player would crash when removing the Google IMA integration in response to the `ended` event.

### iOS

#### 💥 Breaking Changes

- Increasing minimum IMA SDK supported version to 3.18.5.

## 🚀 7.1.0 (2024/04/10)

### General

#### ✨ Features

- Added the option to enable tracks immediately after the track is added for HLS streams.

### Web

#### ✨ Features

- Added support for adaptation set switching.

#### 🐛 Issues

- Fixed an issue where active tracks were not consistent between Chromecast sender and receiver.
- Fixed an issue where ABR would not work for some streams on Safari.
- Fixed an issue where the click-through button for Google DAI was not clickable on mobile devices.

### Android

#### ✨ Features

- Added support for adaptation set switching.

#### 🐛 Issues

- Fixed an issue where stream is paused when starting casting.
- Fixed a rare issue where the player would periodically stall due to failing requests on certain networks.
- Fixed a memory leak where the player would unintentionally keep some segments in memory for long periods of time.

### iOS

#### 🐛 Issues

- Fixed an issue where calling `Ads.scheduledAdBreaks` with IMA/DAI integrations would return an empty list.

## 🚀 7.0.0 (2024/04/03)
### Officially announcing THEOplayer 7.0
Introducing a major version bump to THEOplayer 7.0. This version officially releases all the improvements and developments THEOplayer has achieved since version 6.0.

THEOplayer 7.0 is **backwards compatible for most features but includes some breaking changes per SDK**. Please review them carefully in the respective changelog for your SDK.

- Further improvements to accelerate monetization of your FAST/AVOD service by enabling seamless **THEO Ads integration on Chromecast CAF (v3) receivers**. (Currently available on Web)

- A **smaller and more efficient Android and iOS player** thanks to refactorings and further modularization.

- Added experimental support for using [`ManagedMediaSource` in iOS Safari](https://webkit.org/blog/14735/webkit-features-in-safari-17-1/). This brings **MPEG-DASH and HESP support to iOS**, along with manual quality selection for HLS streams. (Requires iOS 17.1 or higher.)

- Added conformance to **Apple's new privacy policy for API usage**.

- **Performance optimizations** to help our **React Native** and **Flutter SDK**s run smoothly on all devices.


### General

#### 💥 Breaking Changes

- Changed the Chromecast default app ID on all platforms to our THEOplayer Chromecast CAF receiver with app ID `8E80B9CE`. If you prefer the previous default web behavior which uses our Chromecast V2 receiver, you can set the `ChromecastConfiguration.appID` to `1ADD53F3`. For our Android and iOS SDKs, we officially only support Chromecast CAF receivers. If you prefer to use the default Google Chromecast CAF receiver instead, you can set the app ID to `CC1AD845`.
- In an effort to align with the changes made by Apple regarding the [App Store publishing policy](https://developer.apple.com/news/upcoming-requirements/?id=04292024a), starting from THEOplayer 7.0 we will distribute our SDK builds using Xcode 15. Effectively, this means that developing a client application using THEOplayer iOS/tvOS SDK will require a minimum version of Xcode 15.

#### 🐛 Issues

- Fixed an issue where setting `liveOffset` on a DASH source would be ignored if `suggestedPresentationDelay` was specified in the manifest.

### Web

#### ✨ Features

- Added THEOlive support as a feature to THEOplayer.

### Android

#### 💥 Breaking Changes

- Removed unused `RequestCallback` interface.
- Removed deprecated asynchronous `Player` APIs in favor of the respective synchronous ones.
- Removed deprecated `GoogleImaIntegrationFactory#createGoogleImaIntegration` APIs.
- Removed deprecated `GoogleDaiIntegrationFactory#createGoogleDaiIntegration` APIs.
- Removed deprecated `CastIntegrationFactory#createCastIntegration` API.
- Removed deprecated `THEOplayerSettings#isFullScreenOrientationCoupled()` in favor of `FullScreenManager#isFullScreenOrientationCoupled()`.
- Removed deprecated `THEOplayerSettings#setFullscreenOrientation(@ScreenOrientation int)` in favor of `FullScreenManager#setFullscreenOrientation(@ScreenOrientation int)`.
- Removed deprecated `THEOplayerSettings#getFullscreenOrientation()` in favor of `FullScreenManager#getFullscreenOrientation()`.
- Removed deprecated `AdsConfiguration`.
- Removed `THEOplayerGlobal#getSDKType()` API.
- Align `LoadedDataEvent#getCurrentTime()` and `WaitingEvent#getCurrentTime()` APIs with the rest of Events to return `double` instead of `String`.
- Applications using the Cache feature are now required to add `android.permission.FOREGROUND_SERVICE_DATA_SYNC` permission in their AndroidManifest.xml file.
- Removed deprecated `THEOplayerView.getPlayerSuiteVersion()` and `THEOplayerGlobal.getPlayerSuiteVersion()` APIs.
- Removed deprecated `MediaTailorSource.Builder` constructors.
- Removed deprecated `SourceDescription.Builder#ads()` API.
- Removed deprecated `KeySystemConfiguration.Builder#licenseType()` API.

#### ⚡ Improvements

- Updated the Gson dependency from 2.8.2 to 2.10.1.
- Updated the Google Chromecast dependency from 21.3.0 to 21.4.0.
- Updated the Google Mediarouter dependency from 1.2.6 to 1.7.0.
- Updated the Google IMA dependency from 3.31.0 to 3.32.0.

### iOS

#### 💥 Breaking Changes

- Removed deprecated bitcode compilation support.
- Removed deprecated `THEOplayer.playerSuiteVersion` API.
- Removed deprecated `THEOplayer.requestCurrentTime` API.
- Removed deprecated `THEOplayer.requestVideoHeight` API.
- Removed deprecated `THEOplayer.requestVideoWidth` API.
- Removed deprecated `THEOplayer.requestCurrentProgramDateTime` API.
- Removed deprecated `THEOplayer.requestBuffered` API.
- Removed deprecated `THEOplayer.requestPlayed` API.
- Removed deprecated `THEOplayer.requestMetrics` API.
- Removed deprecated `THEOplayer.requestSeekable` API.
- Removed deprecated `Ads.requestPlaying` API.
- Removed deprecated `Ads.requestCurrentAds` API.
- Removed deprecated `Ads.requestCurrentAdBreak` API.
- Removed deprecated `Ads.requestScheduledAdBreaks` API.
- Removed deprecated `Ads.requestScheduledAds` API.
- Removed deprecated `GoogleDAI.requestSnapBack` API.
- Removed deprecated `GoogleDAI.setSnapBack` API.
- Removed deprecated Yospace related APIs.
- Removed deprecated `FullscreenEventTypes.ASPECT_RATIO_CHANGE` API.
- Removed deprecated `Fullscreen.aspectRatio` & `Fullscreen.setAspectRatio` APIs.
- Removed deprecated Moat related APIs.
- Removed deprecated Agama related APIs.
- Removed deprecated Verizon Media related types.
- Removed deprecated `EventDispatcher` class.
- Removed deprecated Conviva related types.
- Removed deprecated `AudioQuality` type.
- Removed deprecated `chromeless`, `cssPaths`, `jsPaths`, `jsPathsPre`, `defaultCSS`, `pictureInPicture` and `analytics` properties from `THEOplayerConfiguration`.
- Removed deprecated SpotX related types.
- Removed deprecated `analytics` property from `SourceDescription` and `SourceDescription.init`.
- Removed deprecated `AnalyticsDescription` and `AnalyticsIntegration` types.
- Removed deprecated `YouboraOptions` type.
- Removed deprecated `THEOAdDescription` type.
- Remove deprecated `addJavascriptMessageListener`, `removeJavascriptMessageListener` and `evaluateJavaScript` methods from `THEOplayer`.
- Removed deprecated `THEOplayer.related` property, `RelatedContent` type, and all related RelatedContent types.
- Removed deprecated VR related APIs.

### tvOS

#### 💥 Breaking Changes

- Removed deprecated tvOS specific `THEOplayer` initializers.
- Removed deprecated `MenuItem` and `MenuLayoutConfigurator` types.

</details>
<details name="major-version">
<summary>Version 6</summary>

## 🚀 6.13.0 (2024/03/28)

### Web

#### ✨ Features

- For Google IMA, added the option to pass `uiElements` to the Google IMA SDK using `PlayerConfiguration.ads.googleIma.uiElements`.

#### 🐛 Issues

- Fixed an issue on smart TVs where switching to or from an opus audio track could cause playback issues.
- Fixed an issue on Android devices where sometimes the gyroscope would not work immediately after playing a VR source inside an iframe.

#### 👎 Deprecations

- Deprecated `PlayerConfiguration.ads.showCountdown` in favor of `PlayerConfiguration.ads.googleIma.uiElements`.

### Android

#### 🐛 Issues

- Fixed an issue where mediaTracks were not consistent between cast sender and receiver.
- Fixed an issue where `MediaTailorSource.Builder#src(String)` did not have all setters as `TypedSource.Builder` has.
- Fixed an issue where video playback was failing if network connection was too slow.
- Fixed an issue where the player would not cancel request if they took too long, for example after a big network drop.

#### 👎 Deprecations

- Deprecated setter in `MediaTailorSource.Builder#src(String)` for source URL in favor of Builder with a parameter `MediaTailorSource.Builder#Builder(String)`
- Deprecated `MediatailorSource.Builder()` default constructor in favor of constructor with a parameter `MediaTailorSource.Builder#Builder(String)`
- Deprecated unused `RequestCallback` interface.
- Deprecated asynchronous `Player` APIs in favor of the respective synchronous ones.
- Deprecated `CastIntegrationFactory.createCastIntegration(THEOplayerView)` API in favor of `CastIntegrationFactory.createCastIntegration(THEOplayerView, CastConfiguration)`.
- Deprecated `THEOplayerSettings#setFullScreenOrientationCoupled(boolean)` in favor of `FullScreenManager#setFullScreenOrientationCoupled(boolean)`.
- Deprecated `THEOplayerSettings#isFullScreenOrientationCoupled()` in favor of `FullScreenManager#isFullScreenOrientationCoupled()`.
- Deprecated `THEOplayerSettings#setFullscreenOrientation(@ScreenOrientation int)` in favor of `FullScreenManager#setFullscreenOrientation(@ScreenOrientation int)`.
- Deprecated `THEOplayerSettings#getFullscreenOrientation()` in favor of `FullScreenManager#getFullscreenOrientation()`.
- Deprecated `AdsConfiguration` in favor of integration specific configuration.

### iOS

#### ✨ Features

- Added conformance to Apple's new privacy policy for API usage.

#### 👎 Deprecations

- Deprecated `AnalyticsDescription` and `AnalyticsIntegration` types.
- Deprecated `setPreload` method in favor of `preload` property setter.
- Deprecated `setPlaybackRate` method in favor of `playbackRate` property setter.
- Deprecated Verizon Media related types.
- Deprecated `GoogleIMAAdsConfiguration` & `GoogleIMAConfigurationBuilder`. Configuration for Google IMA is moved to `THEOplayerGoogleIMAIntegration`.
- Deprecated `PiPConfiguration.init` methods in favor of `PiPConfigurationBuilder`. The `nativePictureInPicture` property in `PiPConfigurationBuilder` defaults to `true`.
- Deprecated obsolete `EventDispatcher` class.
- Deprecated Conviva related types. Conviva feature has moved to `THEOplayer-Connector-Conviva`.
- Deprecated `AudioQuality` type.
- Deprecated `UIConfiguration` type.
- Deprecated `AdsConfiguration` type.
- Deprecated `THEOplayerConfiguration.init` methods in favor of `THEOplayerConfigurationBuilder`.
- Deprecated `chromeless`, `ads`, `ui`, `cssPaths`, `jsPaths`, `jsPathsPre`, `defaultCSS`, `pictureInPicture`, `analytics` and `cast` properties from `THEOplayerConfiguration`.
- Deprecated SpotX related types.
- Deprecated `THEOplayerCastHelper` in favor of `THEOplayerGoogleCastIntegration.CastIntegrationHelper`.
- Deprecated `GoogleDAIAdsConfiguration` & `GoogleDAIAdsConfigurationBuilder`. Configuration for Google DAI is moved to `THEOplayerGoogleIMAIntegration`.
- Deprecated `analytics` property from `SourceDescription` and `SourceDescription.init`.
- Deprecated `vr` property from `SourceDescription` and `SourceDescription.init`, and `VRConfiguration` type.
- Deprecated `THEOplayer.related` property, `RelatedContent` type, and all related RelatedContent types.
- Deprecated `addJavascriptMessageListener`, `removeJavascriptMessageListener` and `evaluateJavaScript` methods from `THEOplayer`.
- Deprecated `THEOAdDescription` type.
- Deprecated `YouboraOptions` type.
- Deprecated `AdPreloadType` type.

### tvOS

#### 👎 Deprecations

- Deprecated tvOS specific `THEOplayer` initializers. Moving forward, iOS and tvOS `THEOplayer` initializers are unified.
- Deprecated `MenuItem` and `MenuLayoutConfigurator` types.

## 🚀 6.12.1 (2024/03/18)

### Android

#### 🐛 Issues

- Fixed an issue where AdError object was not dispatched in case of AdErrorEvent in DAI.

### iOS

#### 🐛 Issues

- Fixed an issue where THEOplayerGoogleIMAIntegration reported compatibility issues during build time.

## 🚀 6.12.0 (2024/03/12)

### General

#### ⚡ Improvements

- Improved the behaviour of the player when segments in a DASH stream are unavailable by marking the missing data as a gap.

#### 🐛 Issues

- Fixed an issue where the player sometimes would download the wrong segment after a hard discontinuity switch.

### Web

#### ✨ Features

- Added the option to localize the Google-IMA integration when using a `ChromelessPlayer` using `PlayerConfiguration.ads.googleIma.language`. Previously this was only possible using `PlayerConfiguration.ui.language`.

#### 🐛 Issues

- Fixed non-linear ads not showing.
- Fixed an issue where the player could error with an out-of-bounds exception during the parsing of TextTrack cues.
- Fixed an issue where the player would download HLS renditions and segments twice on certain streams containing combined audio/video segments.
- Fixed an issue where Fairplay protected streams would not play on iOS 17.1+ devices when useManagedMediaSource was enabled.

### Android

#### 🐛 Issues

- Fixed an issue where on audio-only HLS streams, the play() function needed to be called twice to initiate playback.
- Fixed an issue where a crash occurred sometimes while accessing `player.metrics.getCurrentBandwidthEstimate()`.
- Fixed an issue where MP3 streaming playback was broken.
- Fixed a bug where sometimes last video frame was not cleared after calling `stop()` or source set to `null`.
- Fixed an issue where the content of an EMSG metadata cue was not correctly formatted.

### iOS

#### ✨ Features

- Make `THEOplayer.videoRect` property observable.
- Introduce `AVPictureInPictureControllerDelegateExtended` protocol to help monitor changes to `isPictureInPicturePossible`.
- Introduced `GoogleImaAdErrorEvent` in `THEOplayerGoogleIMAIntegration`. It can be cast from `AdErrorEvent` returned by the event listener of type `AdsEventTypes.AD_ERROR`.

#### 🐛 Issues

- Fixed an issue caused by IMASettings, where IMA ads would be incorrectly unmuted.
- Added support for MP3 playback.

## 🚀 6.11.0 (2024/02/27)

### Web

#### 🐛 Issues

- Fixed an issue where VMAPs would not be scheduled in the Google IMA intergration if `player.currentTime` was set before initial playback.
- Fixed an issue where the browser tab could hang when removing the player from the DOM without calling `player.destroy()`, while the player is rendering WebVTT subtitles.
- Fixed a CSS issue where the control bar could sometimes have a very small vertical overflow, which could lead to unwanted scrollbars when the player is embedded in an `<iframe>`.
- Fixed an issue where very old browsers could not play using MSE.

### Android

#### ✨ Features

- Added side-loaded WEBVTT text track support for progressive MP4 assets.

### iOS

#### ✨ Features

- Added side-loaded WEBVTT text track support for progressive MP4 assets.
- Added `NetworkConfiguration` to `THEOplayerConfiguration`. This allows to configure the user agent header for network requests executed by THEOplayer.
- Added `NetworkConfiguration` to `CachingParameters`. This allows to configure the user agent header for network requests executed by the caching task.

#### 🐛 Issues

- Fixed an issue where streaming through a chromecast receiver would not dispatch a durationChange event after loading a source.
- Fixed an issue where setting a new source on iOS during a chromecast session, would start playout for that source on the startTime of the previously casted source. 

## 🚀 6.10.1 (2024/02/20)

### Web

#### ⚡ Improvements

- Improved the downloading behavior for DASH segments on bad network.

## 🚀 6.10.0 (2024/02/13)

### Web

#### ✨ Features

- Added `BaseSource.seamlessSwitchStrategy` to configure the player's decision to switch seamlessly on a discontinuity for HLS or a period on DASH. This replaces the `DashPlaybackConfiguration.useSeamlessPeriodSwitch` for DASH.

#### 🐛 Issues

- Fixed an issue for HLS streams where the fallback logic didn't start if there was a backup rendition with the same bandwidth.
- Fixed an issue where the player with the combination of preloading metadata and autoplay would create the audio tracks twice.
- Fixed an issue where WebVTT cues with the same `line` attribute but different start times would be rendered in the wrong order.
- Fixed an issue where WebVTT cues would sometimes be rendered with an extra empty line in between.
- Fixed an issue where some webOS devices could run out of memory when rapidly resetting an HLS source containing MPEG-TS.
- Fixed an issue where our TypeScript types were using a newer DOM type (`VideoFrameCallbackMetadata`) that is missing in older versions of TypeScript, causing compatibility issues.

#### 👎 Deprecations

- Deprecated `DashPlaybackConfiguration.useSeamlessPeriodSwitch` in favor of `BaseSource.seamlessSwitchStrategy`.

### Android

#### ✨ Features

- Exposed ImaSdkSettings in GoogleImaIntegration

#### 🐛 Issues

- Fixed an issue where sometimes Google IMA VMAP midrolls wouldn't play.

#### 👎 Deprecations

- Deprecated the usage of UIConfiguration for setting IMA and DAI language settings. Use the ImaSdkSettings object for language configuration instead.

### iOS

#### ✨ Features

- Dispatch `AdTappedEvent` from `THEOplayerGoogleIMAIntegration`.
- Add `IMASettings` as a parameter to the `GoogleIMAIntegrationFactory.createIntegration` API. This allows IMA SDK wide settings to be configured.
- Introduced a `videoRect` property to `THEOplayer` API which returns the size and position of the video image as displayed within the player's bounds.
- Introduced an `aspectRatio` property to `THEOplayer` API which gets and sets the player's `AspectRatio`.
- Introduced a new player event type `PlayerEventTypes.ASPECT_RATIO_CHANGE` which dispatches an `AspectRatioChangeEvent` when the player's aspect ratio changes.

#### 🐛 Issues

- Fixed issues where redundant durationchange events were fired when IMA and DAI ads began/ended.

#### 👎 Deprecations

- Deprecated the getter property `Fullscreen.aspectRatio` in favor of the getter property `THEOplayer.aspectRatio`.
- Deprecated the setter method `Fullscreen.setAspectRatio` in favor of the setter property `THEOplayer.aspectRatio`.
- Deprecated the event type `FullscreenEventTypes.ASPECT_RATIO_CHANGE` in favor of the event type `PlayerEventTypes.ASPECT_RATIO_CHANGE`.

## 🚀 6.9.0 (2024/01/30)

### General

#### 🐛 Issues

- Fixed an issue where an alternative rendition in an HLS manifest with the same URI but a different groupID as another rendition is omitted.

### Web

#### ✨ Features

- Added `SourceDescription.streamType` to hint the player in advance whether the source is a VOD, live or DVR stream. This is **required** for live and DVR streams when casting to Chromecast, in order for the receiver to show the correct UI.
- Added support for casting Google IMA ads to Chromecast.
- Added support for `player.ads.currentAds`, `.currentAdBreak`, `.scheduledAds` and `.scheduledAdBreaks` when using the Google IMA integration.

#### 🐛 Issues

- Fixed an issue where pausing and then playing within a Google IMA ad would sometimes prematurely end the entire ad break.
- Fixed an issue for VR where requesting device motion permissions on iOS devices would not immediately allow the gyroscope to work.
- Fixed an issue with Google IMA where changing a source containing a VMAP with at least a postroll ad could incorrectly schedule the ads of the new source.

### Android

#### ✨ Features

- Added support for clickthrough ad functionality in the MediaTailorTrackingEvent, allowing to fetch clickthrough and clicktracking URLs from MediaTailor ads

#### 🐛 Issues

- Fixed an issue where changing the device orientation from landscape to reverse landscape before the player loads would result in a black screen 
- Fixed an issue where the player would return an empty seekable for an mp4 source while seeking.

### iOS

#### ✨ Features

- Add subspecs to IMA and GoogleCast THEOplayer integrations distributed on Cocoapods. `Base` subspec (e.g. `pod THEOplayer-Integration-GoogleIMA/Base`) fetches the integration without the SDK dependency, meanwhile the `Dependencies` (e.g. `pod THEOplayer-Integration-GoogleIMA/Dependencies`) subspec defines the SDK dependencies. No changes are required for Podfiles where the dependency needs to be fetched.

#### 🐛 Issues

- Fixed an issue where enabling an audio track would result in no audible output.
- Fixed an issue where setting the abr configurations before setting the player source would fail

## 🚀 6.8.1 (2024/01/25)

### General

#### 🐛 Issues

- Fixed an issue where the player could stall indefinitely at an HLS discontinuity when the discontinuity was improperly aligned across audio and video renditions.

## 🚀 6.8.0 (2024/01/15)

### General

#### 🐛 Issues

- Fixed an issue where the paused state would be incorrect for a brief amount of time when calling play in quick succession after setSource on autoplaying HESP streams resulting in a non-dissapearing big play button on the UI.

### Web

#### ✨ Features

- Added support for client-side advertisements when casting to Chromecast.
    - This first release supports linear VAST ads using the THEO Ads integration.
      (Server-side ads, non-linear ads, VMAP ads, or ads using the Google IMA integration are not yet supported.)
    - Scheduling additional ads while casting using `player.ads.schedule()` is not supported.
    - The Chromecast receiver must be based on the Chromecast CAF v3 SDK,
      such as [Styled Media Receiver](https://developers.google.com/cast/docs/web_receiver#styled_media_web_receiver)s,
      the [Default Media Receiver](https://developers.google.com/cast/docs/web_receiver#default_media_web_receiver),
      or any [Custom Receiver](https://developers.google.com/cast/docs/web_receiver#custom_web_receiver)
      built with the THEOplayer Chromecast CAF SDK.
      (Receivers based on the [Cast Receiver v2 SDK](https://developers.google.com/cast/docs/migrate_v2/receiver) are not supported.)
- Exposed the HLS SCORE attribute through the Quality API.
- Added the option for HLS streams to clear existing buffer when setting `MediaTrack.targetQuality`. This can be turned on with `player.abr.clearBufferWhenSettingTargetQuality`.

#### ⚡ Improvements

- Improved the behavior of `player.videoWidth` and `player.videoHeight` at startup. When the player has not yet buffered the first segment of the stream, it will now fall back to the resolution information from the HLS multivariant playlist or the DASH MPD, rather than always returning `0`.

#### 🐛 Issues

- Added a workaround for a Safari issue where using the previous/next page buttons could cause the player to error.
- Fixed an issue where `videoWidth` and `videoHeight` were always `0` while playing a linear ad.
- Fixed an issue with HLS streams where the Quality API would always report a value for `averageBandwidth`, even when it was not provided by the HLS variant stream.
- Fixed an issue where sometimes the player would continuously redownload the same segments after switching to a different quality.
- Fixed an issue where the player failed to parse WebM media.
- Fixed an issue where the poster image briefly flashes on the sender when switching sources while casting to Chromecast.
- Fixed an issue for DASH live streams where seeking to live could ignore the presentation delay.

### Android

#### ✨ Features

- Added `DecoderSelectionHelper#isRepresentationSupported` API to enable filtering qualities from tracks.
- Added support for setting `startTime` and/or `endTime` on a `TextTrackCue`.

#### 🐛 Issues

- Fixed an issue where targeting Android 14 devices would cause a crash when using the cache API.
- Fixed an issue where the audio/video was stuttering on low end devices.

## 🚀 6.7.0 (2023/12/21)

### Web

#### ⚡ Improvements

- Improved the `player.ads` API when using the THEO Ads system. Previously, properties such as `player.ads.currentAdBreak` or `player.ads.scheduledAds` would return new objects for each `Ad` and `AdBreak` on every access. Now, they always return the same object.

#### 🐛 Issues

- Fixed an issue where the remaining time of the Google DAI ads would not be updated sequentially.
- Fixed an issue where the player would play some ad content twice when seeking into a Google DAI ad.
- Fixed an issue where extra properties in `SourceDescription.metadata` were not correctly sent to the Chromecast receiver when casting.
- Fixed an issue where the player keeps downloading the initial rendition besides the active rendition after a quality switch.
- Fixed an issue where the player sometimes would download the same segments after a quality switch.
- Fixed an issue where setting `preload` to `metadata` when the player already has loaded metadata would result in creating the same media tracks twice.
- Fixed an issue where sometimes a `playing` event would not be dispatched when play-out resumes after a `waiting` event.
- Fixed an issue on EOS boxes where the player would loop the first few seconds of a stream multiple times.

### Android

#### ⚡ Improvements

- Updated the Google IMA dependency from 3.25.1 to 3.31.0.

#### 👎 Deprecations

- Deprecated wrongly named `KeySystemConfiguration.Builder#licenseType(byte[] certificate)` method in favor of `KeySystemConfiguration.Builder#certificate(byte[] certificate)`.

## 🚀 6.6.1 (2023/12/15)

### Web

#### 🐛 Issues

- Fixed a regression where Google IMA ads were not showing correctly when playing on iOS with `allowNativeFullscreen = true`.

## 🚀 6.6.0 (2023/12/05)

### General

#### ⚡ Improvements

- Improved the latency estimation for HESP streams.

### Web

#### ⚡ Improvements

- Simplified the experimental `player.hesp.latencies` api.
- Added conversion of standard base64 encoded Clearkey license responses to base64url encoded Clearkey license responses.

#### 🐛 Issues

- Fixed an issue where the DASH track with a main role would not be selected as initial active track.
- Fixed a player crash when the WebAssembly-based transmux worker is blocked by the page's Content Security Policy. In that case, the player will now attempt to fall back to a (slower) asm.js-based worker.
- Fixed chapter markers not working for HLS streams.
- Fixed an issue where device motion controls would be disabled when setting stereo to false for VR content.
- Fixed `player.seekable` not being set while casting to a default (non-THEOplayer) Chromecast CAF receiver.

### Android

#### ⚡ Improvements

- Updated the Google Chromecast dependency from 21.0.1 to 21.3.0.

#### 🐛 Issues

- Fixed an issue where ABR settings were lost after setting a source.
- Fixed an issue where targeting Android 14 devices would cause a crash because of attempting to load writable dex.
- Fixed an issue where the player would trigger "The license for this player is invalid" error on some devices.

### iOS

#### ✨ Features

- Extended the VolumeChangeEvent to include the device volume.

#### 🐛 Issues

- Fixed an issue where providing the offset value for an AdDescription as a Timecode string (HH:mm:ss.SSS) was not supported.
- Fixed an issue where the volume value in a VolumeChangeEvent would be incorrect.

### Chromecast

#### ✨ Features

- Added support for `MediaStatus.liveSeekableRange` when playing a live stream.

## 🚀 6.5.0 (2023/11/27)

### General

#### 🐛 Issues

- Fixed an issue where the player crashed when parsing a non-compliant MPEG-TS segment that has an ID3 tag at the start of the file.
- Fixed a playback issue in HLS if the last segment of a combined audio/video playlist would suddenly contain only audio or video.

### Web

#### ✨ Features

- Added support for cross-codec ABR in HLS.
- Add support for setting `startTime` and/or `endTime` on a `TextTrackCue`.
- Added `requestVideoFrameCallback` and `cancelVideoFrameCallback` to `player.canvas`.
- Added MultiView to the [@theoplayer/extended](https://www.npmjs.com/package/@theoplayer/extended) npm package.
- Added the option to override the detected `DATA_CONNECTION_TYPE` for the Agama integration.

#### ⚡ Improvements

- Improved the localization of some aria-labels and menu items for the player UI.

#### 🐛 Issues

- Fixed an issue where no `volumechange` event was fired when the player needed to be muted to allow autoplay.
- Fixed a regression where the `dimensionchange` event was no longer dispatched on the player.
- Fixed an issue where the player might schedule only one ad when multiple Google IMA ads with the same timeOffset were scheduled after each other via `player.ads.schedule`.
- Fixed an issue in the HLS pipeline where the player could stall indefinitely after a quality switch if the given codecs were incorrect.
- Fixed an issue where the current time of the MultiViewPlayer could remain zero.
- Fixed an issue where the player would not recover from a temporary network disconnection on Tizen.
- Fixed an issue where HLS date range cues would not have an updated endDate if `endOnNext` is `true`.

### Android

#### ✨ Features

- Added support for HLS date range metadata text track cues.
- Added `getTrack` methods to `TextTrackEventTypes.ENTERCUE` and `TextTrackEventTypes.EXITCUE`.

#### 🐛 Issues

- Fixed an issue where the player would sometimes crash when being destroyed during play-out.
- Fixed an issue where the player would sometimes crash when stopping casting a progressive mp4 asset.
- Fixed an issue where switching audiotracks from canplay events broke playback.

### iOS

#### 🐛 Issues

- Fixed an issue where license check would fail when multiple sources are present.
- Fixed an issue where DateRangCues were never activated.

## 🚀 6.4.0 (2023/11/08)

### General

#### 🐛 Issues

- Align the custom data across SDKs while sending a loading request to Chromecast.

### Web

#### ✨ Features

- Added the option to override the detected `DEVICE_TYPE` for the Agama integration.

#### ⚡ Improvements

- Added MultiViewPlayer constructor to the docs.

#### 🐛 Issues

- Fixed an issue where the player's play/pause state would be incorrect after pausing playback when between two ads.
- Fixed an issue where the activeView measurements for Google DAI were wrong.

### Android

#### 🐛 Issues

- Fixed an issue where the player would sometimes crash when stopping to cast an mp4 asset.

## 🚀 6.3.0 (2023/10/26)

### General

#### 🐛 Issues

- Fixed an issue where a HLS stream with a combined audio & video rendition would stop buffering after switching to an alternative audio rendition and back.
- Fixed an issue where the player would stall indefinitely when encountering an MPEG-TS segment containing an AAC audio frame that overlaps with the previous frame.

### Web

#### ⚡ Improvements

- Allow `source.abr.restrictToPlayerSize` to override whether the ABR algorithm on smart TVs should only select qualities whose resolution fits within the device's display resolution.

#### 🐛 Issues

- Fixed an uncaught `AbortError` promise rejection when switching from an HESP source to a non-HESP source.
- Fixed an issue were companion ads in the THEO ad integration were no longer available.
- Added a workaround for an issue in Edge Chromium where `SourceBuffer.changeType` is not working correctly for PlayReady streams.

### Android

#### 🐛 Issues

- Fixed an issue where the player would not dispatch a `playing` event when initiating IMA ad play-out.

## 🚀 6.2.1 (2023/10/17)

### General

#### 🐛 Issues

- Fixed an issue where a HLS stream with a combined audio & video rendition would stop buffering after switching to an alternative audio rendition and back.

## 🚀 6.2.0 (2023/10/16)

### Web

#### ✨ Features

- Added experimental support for using `ManagedMediaSource` in Safari. This requires `BaseSource.useManagedMediaSource` to be set to `true`, and requires iOS 17.1 beta 2 or higher with the "Managed Media Source API" feature flag turned on in the Advanced settings of Safari.

#### 🐛 Issues

- Fixed an issue where the player would endlessly download the first segment of an HLS subtitle rendition if that rendition's playlist starts *after* the audio or video playlist during a live stream.
- HLS with Clear Key DRM will now work on desktop Safari when the `SourceConfiguration.contentProtection` contains an empty `ClearkeyKeySystemConfiguration`.
- Fixed an issue in MPEG-DASH streams where a big unexpected drop in network bandwidth would not be detected when the browser does not support streaming fetch.
- Fixed an issue with HLS where the reported Program Date Time would be incorrect if the playlist contains a discontinuity where the Program Date Time jumps in time.

### Android

#### 🐛 Issues

- Fixed an issue where accessing `MediaTrack.getQualities().getItem()` would always throw a `NullPointerException` while playing a static MP4 video.
- Fixed `CachingTaskList.getItem()` incorrectly throwing `NoSuchElementException` (instead of `IndexOutOfBoundsException`) when the index is out of bounds.
- Fixed an issue where HLS streams with AES-128 encryption would not play.

### iOS

#### 🐛 Issues

- Fixed an issue where CPU performance would decline when using Picture-in-Picture or AirPlay.

## 🚀 6.1.1 (2023/10/11)

### iOS

#### 🐛 Issues

- Fixed an issue where the player would crash when calling the destroy method after an ad break.

## 🚀 6.1.0 (2023/10/02)

### Web

#### ⚡ Improvements

- Optimized the Canvas API when called on every frame.

#### 🐛 Issues

- Fixed an issue for HLS where webvtt files starting with a byte order mark would cause a parsing error.
- Fixed an issue where a DASH stream could error with an unspecified error when playback falls outside the seekable range.
- Fixed an issue in MPEG-DASH streams where downloading a segment would not timeout if it takes much longer than the segment duration to download.
- Fixed an issue in MPEG-DASH streams where a big unexpected drop in network bandwidth would not be detected.
- Fixed a compatibility issue with Webpack where THEOplayer fails to load when building in production mode.
- Fixed an issue where no `adbreakbegin` and no `adbegin` event would fire for an `AdBreak` following a non-linear `AdBreak`.

### Android

#### 🐛 Issues

- Fixed an issue where line breaks on a cue were not handled correctly on sideloaded SRTs

### iOS

#### ⚡ Improvements

- Improved text track active cues processing when endTime is infinite.

#### 🐛 Issues

- Fixed an issue where the Chromecast integration would not play when connecting through the default Cast button.

## 🚀 6.0.0 (2023/09/13)
### Officially announcing THEOplayer 6.0
Introducing a major version bump to THEOplayer 6.0. This version officially releases all the improvements and developments THEOplayer has achieved since version 5.0.

THEOplayer 6.0 is **backwards compatible for most features but includes some breaking changes per SDK**. Please review them carefully in the respective changelog for your SDK.

- Further improvements to accelerate monetization of your FAST/AVOD service, including **new ad connectors and advertisement capabilities in our Open Video UI**.

- A **smaller and more efficient web player** thanks to ESM modules.

- **Updated analytics connectors** to ensure you are seeing what’s happening.

- **Increased performance** through new features, optimizations of our analytics connectors and further reductions in startup time.

**The Legacy (WebView-based) Android and iOS SDKs are officially reaching end of life.** No further fixes will be provided for those SDKs (previously included in THEOplayer 4.12.x hotfixes). Please contact our support if you have further questions or follow our migrations guides on the [THEOportal pages](https://docs.theoplayer.com/).

### Web

#### 💥 Breaking Changes

- `import { Player } from 'theoplayer'` now results in a JavaScript module using ES2017 syntax, which won't work when loaded inside older browsers (such as old smart TVs). If you still need to support such older browsers, you can import the old JavaScript file directly with `import { Player } from 'theoplayer/THEOplayer.js'`.
- The player will now start playback at a medium bitrate quality (up to 2.5 Mbps) instead of the lowest bitrate quality, if it doesn't yet have a network speed estimate from a prior playback session. This can be overridden by setting `player.abr.strategy` [(documentation)](https://docs.theoplayer.com/api-reference/web/theoplayer.abrconfiguration.md#strategy).
- Removed `source.hls.useLegacy`. The legacy HLS pipeline has been removed, all HLS streams will now use the new HLS pipeline.

#### ✨ Features

- Added support for importing THEOplayer as a [JavaScript module ("ESM")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
    - Added `THEOplayer.esm.js` and `THEOplayer.chromeless.esm.js`.
        - These provide the THEOplayer API using `export` statements instead of using a global `THEOplayer` variable.
            This makes them appropriate to use with modern bundlers that consume ESM, such as [webpack](https://webpack.js.org/),
            [Rollup](https://rollupjs.org/) or [esbuild](https://esbuild.github.io/). They can also be used directly in
            modern browsers using `<script type="module">`.
        - These versions use ES2017 syntax (rather than ES5 syntax), targeting more modern browsers. This results in smaller
            and faster code, by using more of the native JavaScript features provided by the browser itself.
    - Added an `exports` field to `package.json` on npm. These define [subpath exports](https://nodejs.org/docs/latest-v20.x/api/packages.html#subpath-exports)
        for the chromeless player and the UI player, supporting both CommonJS and ESM.
        - `import { Player } from 'theoplayer'`: imports the UI player.
        - `import { ChromelessPlayer } from 'theoplayer/chromeless'`: imports the chromeless player only.
            This is intended to replace explicit imports for `theoplayer/THEOplayer.chromeless`.
    - If you use TypeScript in your project, we recommend setting [`moduleResolution`](https://www.typescriptlang.org/tsconfig#moduleResolution)
        to `bundler`, `node16` or `nodenext` in your `tsconfig.json` to correctly resolve these subpath exports.

#### 🐛 Issues

- Fixed an issue where characters from CEA-608 closed captions could be shown too early.
- Fixes an issue with CEA-608 closed captions where seeking could cause overlapping cues.

#### 👎 Deprecations

- Deprecated `THEOplayer.playerSuiteVersion`. Use `THEOplayer.version` instead.

### Android

#### 💥 Breaking Changes

- Removed deprecated `THEOplayerConfig#isChromeless()`.
- Removed deprecated `THEOplayerConfig#defaultCss()`.
- Removed deprecated `THEOplayerConfig#getCssPaths()`.
- Removed deprecated `THEOplayerConfig#getJsPaths()`.
- Removed deprecated `THEOplayerConfig#getJsPathsPre()`.
- Removed deprecated `THEOplayerConfig.Builder#defaultCss(boolean)`.
- Removed deprecated `THEOplayerConfig.Builder#cssPaths(String...)`.
- Removed deprecated `THEOplayerConfig.Builder#jsPaths(String...)`.
- Removed deprecated `THEOplayerConfig.Builder#jsPathsPre(String...)`.
- Removed deprecated `THEOplayerConfig.Builder#chromeless(boolean)`.
- Removed deprecated `THEOplayerConfig#isGoogleIma()`.
- Removed deprecated `GoogleImaConfiguration` class.
- Removed deprecated `AdsConfiguration#googleIma()` in favor of `GoogleImaIntegration`.
- Removed deprecated `AdsConfiguration.Builder#googleIma(GoogleImaConfiguration)`.
- Removed deprecated `TypedSource.Builder#setNativeRenderingEnabled(boolean)`.
- Removed deprecated `TypedSource.Builder#setNativeUiRenderingEnabled(boolean)`.
- Removed deprecated `TypedSource.Builder#isNativeRenderingEnabled()`.
- Removed deprecated `TypedSource.Builder#isNativeUiRenderingEnabled()`.
- Removed deprecated `VerizonMediaSource#getParameters()` in favor of `VerizonMediaSource#getPreplayParameters()`.
- Removed deprecated `VerizonMediaSource.Builder#parameters(Map<String, String>)` in favor of `VerizonMediaSource.Builder#preplayParameters(Map<String, String>)`.
- Removed deprecated `THEOplayerGlobal#getWebViewSettings()`.
- Removed deprecated `THEOplayerView#addJavaScriptMessageListener(String, MessageListener)`.
- Removed deprecated `THEOplayerView#evaluateJavaScript(String, ValueCallback)`.
- Removed deprecated `THEOplayerView#removeJavaScriptMessageListener(String, MessageListener)`.
- Removed deprecated `MessageListener` interface.
- Removed deprecated `MediaTrack#setTargetQualities(QualityList)` in favor of `MediaTrack#setTargetQualities(List)`.
- Removed deprecated `Player#getVR()` API.
- Removed deprecated `Player#getYospace()` API.
- Removed deprecated `Player#getVerizonMedia()` API.
- Removed unsupported Verizon Media classes.
- Removed unsupported Agama classes.
- Removed unsupported SpotX classes.
- Removed unsupported Conviva classes.
- Removed unsupported Moat classes.
- Removed unsupported Youbora classes.
- Removed unsupported Yospace classes.
- Removed unsupported THEO ads classes.
- Removed unsupported VR classes.

#### 👎 Deprecations

- Deprecated `THEOplayerGlobal.getPlayerSuiteVersion()` and `THEOplayerView.getPlayerSuiteVersion()`. Use `getVersion()` instead.
- Deprecated `THEOplayerConfig.Builder()#ads(AdsConfiguration)` in favor of using advertisement integrations to configure advertisements.
- Deprecated `THEOplayerConfig.Builder()#castStrategy(CastStrategy)` in favor of using integrations to configure casting.
- Deprecated `SourceDescription.Builder#ads(String...)` in favor of `SourceDescription.Builder#ads(AdDescription...)`.

### iOS

#### 💥 Breaking Changes

- Removed deprecated `ContentProtectionIntegration.extractFairplayContentId` in favor of `ContentProtectionIntegration.onExtractFairplayContentId`.
- Removed deprecated `GoogleIMAConfigurationBuilder.useNativeIMA` and `GoogleIMAAdsConfiguration.useNativeIma` properties.

#### ✨ Features

- Added synchronous player APIs: `currentTime`, `currentProgramDateTime`, `buffered`, `played`, `seekable`, `metrics`, `videoHeight` and `videoWidth`.
- Added synchronous ads APIs: `playing`, `currentAds`, `currentAdBreak`, `scheduledAdBreaks` and `scheduledAds`.
- Added synchronous DAI API: `snapback`.

#### 👎 Deprecations

- Deprecated `THEOplayer.playerSuiteVersion`. Use `THEOplayer.version` instead.
- Deprecated `Ads.requestPlaying` in favor of `Ads.playing`.
- Deprecated `Ads.requestCurrentAds` in favor of `Ads.currentAds`.
- Deprecated `Ads.requestCurrentAdBreak` in favor of `Ads.currentAdBreak`.
- Deprecated `Ads.requestScheduledAdBreaks` in favor of `Ads.scheduledAdBreaks`.
- Deprecated `Ads.requestScheduledAds` in favor of `Ads.scheduledAds`.
- Deprecated `GoogleDAI.requestSnapBack` in favor of `GoogleDAI.snapback`.
- Deprecated `GoogleDAI.setSnapBack` in favor of `GoogleDAI.snapback`.
- Deprecated `THEOplayer.requestCurrentTime` in favor of `THEOplayer.currentTime`.
- Deprecated `THEOplayer.requestVideoHeight` in favor of `THEOplayer.videoHeight`.
- Deprecated `THEOplayer.requestVideoWidth` in favor of `THEOplayer.videoWidth`.
- Deprecated `THEOplayer.requestCurrentProgramDateTime` in favor of `THEOplayer.currentProgramDateTime`.
- Deprecated `THEOplayer.requestBuffered` in favor of `THEOplayer.buffered`.
- Deprecated `THEOplayer.requestPlayed` in favor of `THEOplayer.played`.
- Deprecated `THEOplayer.requestMetrics` in favor of `THEOplayer.metrics`.
- Deprecated `THEOplayer.requestSeekable` in favor of `THEOplayer.seekable`.

</details>
<details name="major-version">
<summary>Version 5</summary>

## 🚀 5.11.0 (2023/09/11)

### General

#### 🐛 Issues

- Fixed an issue where the player wouldn't recover from a reset of the HLS stream that contains program date time.
- Fixed an issue where older players were no longer compatible with our Chromcast SDK.
- Fixed a crash when encountering an MPEG-TS segment containing an incomplete PES packet during HLS playback.

### Web

#### ✨ Features

- Added the possibility of selecting audio from a different view than the main view when using the Multiview player.
- Added support for Apollo set-top boxes.

#### 🐛 Issues

- Fixed an issue in the Multiview player where offsets weren't properly taken into account when the main view already had an offset.
- Fixed an issue where the Google IMA integration was not dispatching `ReadyStateChangeEvent`s.

### Android

#### ✨ Features

- Added the ability to intercept network requests.

#### 🐛 Issues

- Fixed an issue where OMID API was not available for IMA integrations
- Fixed an issue where EC-3 and AC-3 audio tracks for DRM video were parsed using wrong decoder

## 🚀 5.10.0 (2023/09/01)

### General

#### 🐛 Issues

- Fixed an issue where older players were no longer compatible with our Chromecast SDK.

### Web

#### 🐛 Issues

- Fixed an issue that could cause the player to redownload the same segment multiple times during HLS playback.

### Android

#### ✨ Features

- Added `totalVideoFrames` property to the metrics API.
- Added `PlaybackSettings#getDecoderName()` API to retrieve the decoder name for a specified media.

#### 🐛 Issues

- Fixed an issue where creating a `CachingTask` instance through the Media Cache API would crash the player.

### iOS

#### 🐛 Issues

- Fixed an issue where failing IMA ads would stall the player.
- Fixed an issue where MP4 source playback was failing.
- Fixed an issue where scheduled IMA ad breaks timeoffset would be 0.
- Fixed an issue where playback duration and currentTime values would be incorrect post ad.
- Fixed an issue where content protected streams with keys specified outside of master playlist would fail.
- Fixed an issue where playback was broken when restoring a `CachingTask`.
- Fixed a memory issue caused by the IMA integration.

## 🚀 5.9.1 (2023/08/24)

### Web

#### 🐛 Issues

- Fixed an issue for HLS streams where the codec strings could cause buffering issues when switching renditions.

### Android

#### 🐛 Issues

- Fixed an issue where closing the Picture-in-Picture window did not pause playback when an application was in the background and background playback was not allowed.

## 🚀 5.9.0 (2023/08/22)

### General

#### ⚡ Improvements

- Improved support for HLS with clear key SAMPLE-AES.
- Improved the initial load time of HLS streams.

#### 🐛 Issues

- Fixed an issue where ID3 tags containing padding bytes were not correctly handled.

### Web

#### ✨ Features

- Added `BaseSource.ignoreEmbeddedTextTrackTypes` to ignore embedded text tracks that would otherwise always be parsed by the player.
- Added `AgamaPlayerConfiguration.deviceOs` and `AgamaPlayerConfiguration.deviceOsVersion`.

#### ⚡ Improvements

- Improved the recovery mechanism for HLS streams when the currentTime falls outside the seekable range (e.g. due to a bad network).
- The player will no longer dispatch a `waiting` event during the initial load (until the first `canplay` or `playing` event). This should make it easier to distinguish between an "expected" buffering time at the start, and an "unexpected" re-buffering event during playback. To detect when the player starts its initial load, we recommend using either the first `play` or `loadstart` event.
- The player will no longer dispatch unnecessary `play`, `pause`, `seeking` and/or `ratechange` events when switching between content and advertisements.

#### 🐛 Issues

- Fixed an issue with THEO ads where changing the `muted` and `volume` properties during an Ad would not persist across other Ads in the same AdBreak.
- Fixed an issue in THEO ads where a VAST ad with an error could cause the player to be stuck.
- Fixed an issue where the Google DAI click through link doesn't open when pressing enter using the Chromeless player.
- Fixed an issue where AirPlay didn't work on iOS devices.

### Android

#### ✨ Features

- Customizable notifications for downloading media. Check the [documentation](https://docs.theoplayer.com/how-to-guides/04-drm/03-how-to-do-offline-drm/03-offline-drm-notifications-android.md) on how to customise notifications

#### 🐛 Issues

- Fixed an issue on Android where querying the `timeOffset` property of a Google IMA adbreak would return an incorrect value.
- Fixed a typing issue of `CachingTaskErrorEvent` that would prevent the ability to listen for CachingTask errors.
- Fixed an issue where a `CachingTaskStateChangeEvent` event with status `evicted` would be dispatched after removing a CachingTask.
- Fixed an issue with package obfuscation that resulted in build failures when both THEOPlayer and a library with the same package retention problem were present in the project.
- Fixed an issue where video segments were not downloading in parallel during caching.
- Fixed an issue where the player would sometimes crash while creating and destroying multiple player instances.

### iOS

#### ✨ Features

- Added support for SRT formatted text tracks through sideloaded subtitles connector.

#### 🐛 Issues

- Fixed an issue where player would stall indefinitely on startup when autoplay is set.
- Fixed an issue where native picture-in-picture mode would not be retained after a source change.
- Fixed an issue where failing IMA ads would stall the player.

## 🚀 5.8.0 (2023/08/02)

### General

#### ⚡ Improvements

- Improved the handling of small gaps in the player's buffer. The player will now jump over such gaps without firing `seeking` or `waiting` events, which avoids showing a loading spinner for a short time during playback.
- Improved the handling of short seeks. The player will no longer fire a `waiting` event if the seek finishes quickly.

#### 🐛 Issues

- Fixed an issue where `<SegmentList>` elements defined at the `<Period>` level where incorrectly ignored in a DASH MPD.
- Fixed an issue where the player sometimes failed to jump a known gap between two buffered segments.

### Web

#### 🐛 Issues

- Fixed an issue where some CEA-608 cues weren't properly extracted.
- Fixed an issue where CEA-608 cues could be falsely removed after appending a segment.
- Fixed an issue where CEA-608 cues could be in the wrong order at segment boundaries.
- Fixed an issue where in rare circumstances a very short HLS VOD stream would fail to start playback.

### Android

#### 🐛 Issues

- Fixed an issue on Android where an HLS stream would not replay after playback had ended.
- Fixed an issue where an error was thrown on some devices while trying to play Dolby AC-3 stream.
- Fixed an issue where LOADING tasks were not set to IDLE when cache is initialized.

## 🚀 5.7.0 (2023/07/26)

### General

#### ⚡ Improvements

- Optimized the DASH buffering loop for the common case where the player's buffer is still sufficiently filled.

#### 🐛 Issues

- Fixed an issue where an MPEG-DASH `<SegmentList>` element inside a `<Representation>` did not correctly inherit `<SegmentURL>` elements defined at the `<Period>` or `<AdaptationSet>` level.

### Web

#### ✨ Features

- Added `source.abr.restrictToPlayerSize`, to control whether the ABR algorithm should only select qualities whose resolution fits within the player's size.
- Added support for the `PRECISE` attribute in an HLS `#EXT-X-START` tag. This removes the limitation from THEOplayer 4.7.0, so a missing `PRECISE` attribute is now treated as `PRECISE=NO` to conform with the HLS specification.
- Filtered out ac-3 audio on Tizen and WebOS by default as most devices fail playout and the codec support check is not useable.
- Added support for setting a live offset on streams for multiview.

#### ⚡ Improvements

- The player will now only create Google DAI UI elements when the Google DAI library is loaded.
- Improved startup of livestreams. This should be especially noticeable for HLS livestreams with short playlists, where previously the player would sometimes wait for a second playlist update before initiating playback.

#### 🐛 Issues

- Fixed an issue where the player could stall indefinitely when the segment durations mentioned in the HLS playlist were not accurate enough.
- Fixed an issue where TTML styles applied to the `<body>` element were not always respected.
- Fixed an issue where `volume` and `muted` were not correctly retained when transitioning between content and ad (or vice versa) on iOS using Google IMA.
- Fixed an issue where fetching the first HLS playlist would time out prematurely.
- Fixed an issue where the player would sometimes throw an error if a HLS CMAF stream has a gap at the start of a segment that comes after an `#EXT-X-DISCONTINUITY` tag.
- Fixed an issue with Google DAI where the latest version of their SDK could sometimes trigger an internal error with THEOplayer.

### Android

#### ✨ Features

- Added a `allowBackgroundPlayback` property to the `THEOplayerSettings` API.

#### 🐛 Issues

- Fixed an issue where SourceChangeEvent did not contain the new SourceDescription.

### iOS

#### 🐛 Issues

- Fixed an issue where paused state would be inaccurate while integrating with IMA.

### tvOS

#### 🐛 Issues

- Fixed an issue where IMA playlist ads would block the main content.

## 🚀 5.6.0 (2023/07/10)

### General

#### ✨ Features

- Added support for `VideoQuality.frameRate` and `VideoQuality.firstFrame` in the new HLS pipeline.

#### ⚡ Improvements

- Add support for the ABR strategy API for HESP streams.
- Improved the retry behaviour for DASH streams when using a retry configuration.

### Web

#### ✨ Features

- Added support for DASH streams with WebM segment indexes described by a `Cues` Matroska element.
- Exposed the accessibility descriptors for DASH tracks and the characteristics for HLS tracks.

#### 🐛 Issues

- Fixed an issue where the ABR would not switch qualities when the codecs of the variant streams are not known beforehand.
- Fixed an issue where the player stalled indefinitely after playing a mid-roll ad on VIZIO SmartCast TVs.
- Fixed an issue where the player could stall indefinitely after changing qualities when the HLS multivariant playlist incorrectly lists both audio and video codecs for a video-only variant stream.
- Fixed an issue on EOS2 stbs where seeking in a DASH stream would sometimes cause the player to crash.

### Android

#### ✨ Features

- Added support of using a service so the caching can be done in the background.
- Added `VideoQuality.getFirstFrame()`.
- Added `QualityUpdateEvent` to `Quality`.
- Added metrics API.
- Added a `allowBackgroundPlayback` property to the `THEOplayerSettings` API.

#### 🐛 Issues

- Fixed an issue when the network connection is lost the CachingTasks can not be paused and restarted.
- Fixed an issue that caused playback failure in some cases on TCL 32S5201 Smart TV.

### iOS

#### ✨ Features

- Added server side ad support with Google DAI through the IMA integration.

#### 🐛 Issues

- Fixed an issue where seeking and seeked events were not fired when casting to AirPlay and when in picture in picture mode.
- Fixed an issue where waiting event would trigger multiple times while seeking.
- Fixed an issue that could cause a crash when destroying the player while the DRM flow was in progress.

### tvOS

#### ✨ Features

- Added server side ad support with Google DAI through the IMA integration.

## 🚀 5.5.1 (2023/06/27)

### iOS

#### 🐛 Issues

- Fixed an issue where no ratechange event was dispatched when the value was reset to the default during a source change.
- Fixed an issue where playback with IMA integration would not start.

## 🚀 5.5.0 (2023/06/22)

### Web

#### ✨ Features

- Added support for native fullscreen playback of Google IMA ads for HESP streams on iOS Safari.

#### ⚡ Improvements

- Improved ABR algorithm for HESP streams on iOS Safari to take the correct screen size into account.

#### 🐛 Issues

- Fixed an issue where the player could not switch back to content after playing a Google IMA ad on iOS Safari.
- Fixed an issue on iOS Safari where switching to native fullscreen could disable active text tracks.
- Fixed an issue where embedded webVTT cues could remain visible.
- Fixed an issue where a DASH stream with representations containing slightly misaligned segments could stall indefinitely on a quality switch.

#### 👎 Deprecations

- Deprecated `source.hls.useLegacy`. The legacy HLS pipeline is no longer supported and will be removed in a future semver-major release. Please migrate to the new HLS pipeline.
- Added `hideDeprecationWarnings` flag to player configuration, to hide all deprecation warnings in the browser's developer console.

### Android

#### ✨ Features

- Added support for play-out of progressive media assets embedded as raw app resource.

#### 🐛 Issues

- Fixed an issue where setting multiple Google DAI sources after each other would cause a crash.
- Fixed presence of DRM exception in debug logs
- Fixed an issue where querying the `integration` property of a Google DAI ad or adbreak instance would always give `google-ima` instead of `google-dai`.
- Fixed an issue where playing a source with in-stream DRM would not play from cache.

### iOS

#### ⚡ Improvements

- Enabled AirPlay support for cached content while connected to a network.

#### 🐛 Issues

- Fixed an issue where after playing a preroll ad playlist on tvOS the main content would not resume playing.
- Fixed an issue where incorrect `TimeUpdateEvent`s were dispatched after skipping an IMA ad.

## 🚀 5.4.2 (2023/06/20)

### iOS

#### ⚡ Improvements

- Improved handling of network connection change during caching.

## 🚀 5.4.1 (2023/06/15)

### iOS

#### ⚡ Improvements

- Added support for asynchronous contentID extraction via `ContentProtectionIntegration.onExtractFairplayContentId(skdUrl:callback:)`

## 🚀 5.4.0 (2023/06/08)

### Web

#### 🐛 Issues

- Fixed an issue where sometimes the player would not autoplay.
- Fixed an issue with HESP streams on iOS Safari where the player would not switch to a higher quality in landscape mode.
- Fixed an issue where the player sometimes stalled indefinitely when the sliding window of a DASH livestream moves past its current time. Instead, it will now seek to live when this happens.

### iOS

#### ⚡ Improvements

- Improved handling of network connection change during caching.

## 🚀 5.3.0 (2023/06/01)

### General

#### 🐛 Issues

- Fixed an issue where CEA-608 captions with a valid but unrecognized language code would have an empty `TextTrack.language` property.
- Fixed a regression issue where dash.needsTimescaleShifting would be false by default.

### Web

#### ✨ Features

- Added `MediaTailorSource.adParams` to improve client-side ad reporting.
- Exposed the companion ads for Google IMA.

#### ⚡ Improvements

- Improved the Agama integration by upgrading support to EMP Client version 3.9.0.3.

#### 🐛 Issues

- Fixed an issue where the Agama integration reported the BUFFER_LENGTH in seconds instead of milliseconds.
- Fixed an issue where the Agama integration reported ABR switches when an audio segment was downloaded with different bandwidth requirements than the active video quality's bandwidth requirements.
- Fixed an issue where Google IMA ads would be skipped on iOS Safari when changing to a source containing IMA ads while unmuted autoplay is supported.
- Fixed an issue where the next ads in an adbreak would not be played when the current ad errored using the THEO Ads integration.
- Fixed an issue where the companion ads for the THEO ads integration were not exposed.

### Android

#### ✨ Features

- Implemented DRM HESP streams playback.
- Added TextTrack styling support via 'THEOplayer.getPlayer().getTextTrackStyle()' API
- Added `MediaTailorSource.adParams` to improve client-side ad reporting.

#### 🐛 Issues

- Fixed playback stalling after seeking past a midroll adbreak on AndroidTV.
- Fixed an issue where a text track cue that contains a string was sometimes converted to an object.
- Fixed an issue where using a MediaTailor source would cause a crash.

### iOS

#### 💥 Breaking Changes

- Bumped Xcode minimum support version to 13.2.1 and Swift version to 5.5.

#### 🐛 Issues

- Fixed an issue where eventListeners would not be removed when there is no ads integration added.
- Fixed an issue where `CachingTask.status` was not updated to `.evicted` after the expiration date

### tvOS

#### 💥 Breaking Changes

- Bumped Xcode minimum support version to 13.2.1 and Swift version to 5.5.

## 🚀 5.2.0 (2023/05/15)

### General

#### ✨ Features

- Added the option to ignore the availability window of individual segments in an MPEG-DASH livestream with `DashPlaybackConfiguration.ignoreAvailabilityWindow`.

#### ⚡ Improvements

- The HLS pipeline will now abandon segment requests that are taking too long (e.g. because of a sudden drop in the network bandwidth) and will more quickly switch to a lower bitrate variant stream.

### Web

#### ✨ Features

- Added support for FairPlay HESP streams on iOS Safari.

#### 🐛 Issues

- Fixed an issue where the player would not switch to a higher quality for HLS streams that contain preload hints when playing too close to live.
- Fixed an issue on iOS Safari where subtitles were not rendered in native fullscreen when using the default THEOplayer UI.
- Fixed an issue on iOS Safari where the animation of the `<video>` element going into native fullscreen was not smooth when using the default THEOplayer UI.
- Fixed an issue where retrying for too long could cause the player to freeze and stop retrying on HLS.
- Fixed an issue where an MPEG-TS HLS stream could have playback issues if its first segment contains multiple PMTs.
- Fixed an issue where new Google IMA ads scheduled through `player.ads.schedule()` would never play if all previously scheduled ads have already finished playing.
- Fixed an issue where the player would incorrectly estimate the network conditions when using a response interceptor.

### Android

#### 🐛 Issues

- Fixed an issue where streams transcoded with frame-accurate option would stutter on certain devices.
- Fixed an issue on Android where the `currentProgramDateTime` property would always be `null` when dispatching a `TimeUpdateEvent`.
- Fixed an issue that caused stretched videos during MP4 playback.
- Fixed and issue where DRM playback on Xiaomi Projector had visual glitches.
- Fixed playback stalling after seeking past a midroll adbreak on AndroidTV.

### iOS

#### 💥 Breaking Changes

- Bumped Xcode minimum support version to 13.2.1 and Swift version to 5.5.

### tvOS

#### 💥 Breaking Changes

- Bumped Xcode minimum support version to 13.2.1 and Swift version to 5.5.

## 🚀 5.1.0 (2023/05/04)

### General

#### ✨ Features

- Added support for VP9 and AV1 in CMAF containers for (LL-)HLS.

#### ⚡ Improvements

- Avoid range requests for the next HESP continuation segments once the first HESP continuation segment has been downloaded.
- When an MPEG-DASH stream transitions from dynamic to static MPD, the player will now detect and handle any time shifts applied to the static MPD. For example, this handles the case where the server uses Unix timestamps for livestreams but zero-based timestamps for VODs.

### Web

#### ✨ Features

- Added a retry configuration to the player configuration to customize a part of the player's retry mechanism.
- Added support to pass SourceDescription.metadata properties other than those in ChromecastMetadataDescription to chromecast MediaInfo.metadata.
- The player now dispatches `manifestupdate` events during HLS playback whenever it fetches a new playlist.

#### ⚡ Improvements

- Added TypeScript type definitions for `THEOplayer.chromeless.js`.
- `player.seekable` now returns an empty `TimeRanges` while playing a linear ad through Google IMA, to indicate that seeking is not allowed during such an ad.
- Improved ABR in the LL-HLS pipeline.

#### 🐛 Issues

- Fixed an issue with the Google IMA integration where no ads could be scheduled after an ad errors during playback.
- Fixed an issue where for HLS streams the frame rate was always reported as zero.
- Fixed an issue where the HLS pipeline would error after calling `player.stop()` and then `player.play()` without a new source.
- Fixed an issue where HLS CMAF playout would fail in certain cases when the default sample duration of segments was set in the `trex` box.
- Fixed an issue where switching qualities on an HLS stream that allows delta playlist updates could result in playback artifacts.

### Android

#### ✨ Features

- Added support for caching streams offline.
- Handling HTTP 307 response redirection request.

#### 🐛 Issues

- Fixed playback stalling after seeking past a midroll adbreak on AndroidTV.

### iOS

#### 💥 Breaking Changes

- Removed deprecated `GoogleIMAConfiguration` class in favor of `GoogleIMAAdsConfiguration`. See `GoogleIMAConfigurationBuilder` for more details on how to init a `GoogleIMAAdsConfiguration` object.

#### 🐛 Issues

- Fixed an issue where setting a `nil` source would cause invalid license error
- Fixed an issue where `CachingTask.percentageCached` was returning values on a different scale.
- Fixed an issue where using special characters in `SourceDescription.metadata` could cause crash during caching.

#### 👎 Deprecations

- Deprecated `useNativeIMA` property in `GoogleIMAConfigurationBuilder` & `GoogleIMAAdsConfiguration`.

### tvOS

#### 💥 Breaking Changes

- Removed deprecated `GoogleIMAConfiguration` class in favor of `GoogleIMAAdsConfiguration`. See `GoogleIMAConfigurationBuilder` for more details on how to init a `GoogleIMAAdsConfiguration` object.

#### 🐛 Issues

- Fixed an issue with Google IMA where the main content wasn't resumed after a preroll ended.

#### 👎 Deprecations

- Deprecated `useNativeIMA` property in `GoogleIMAConfigurationBuilder` & `GoogleIMAAdsConfiguration`.

## 🚀 5.0.3 (2023/04/25)

### iOS

#### 🐛 Issues

- Fixed an issue where the player on iOS would throw an exception when destroying the player during the setup of the DRM keySystem

## 🚀 5.0.2 (2023/04/13)

### Android

#### 🐛 Issues

- Fixed an issue on Android where play-out of HLS streams would fail.

## 🚀 5.0.1 (2023/04/12)

### Web

#### ✨ Features

- Added a retry configuration to the player configuration to customize a part of the player's retry mechanism.

#### 🐛 Issues

- Fixed an issue where for HLS streams the frame rate was always reported as zero.

### Android

#### ✨ Features

- Added retry logic for failing playlist and manifest fetches.

### iOS

#### ✨ Features

- Bump support for GoogleCast framework to 4.7.1. This adds compatibility for building on simulators with the arm64 architecture.
- Added `configure` method to PictureInPicture API for dynamic configuration.
- Added `requiresLinearPlayback` parameter to PiPConfiguration API. This helps control seekability during Picture in Picture.

### tvOS

#### ✨ Features

- Added `requiresLinearPlayback` parameter to PiPConfiguration API. This helps control seekability during Picture in Picture.
- Added `configure` method to PictureInPicture API for dynamic configuration.

## 🚀 5.0.0 (2023/04/05)

### Officially announcing THEOplayer 5.0
Introducing a major version bump to THEOplayer 5.0. This version officially releases all the improvements and developments THEOplayer has achieved since version 4.0.

The **new modularized native mobile SDKs are rearchitected and built from the ground up** keeping performance, usability, and future compatibility in mind. [Read more](https://docs.theoplayer.com/getting-started/01-sdks/02-what-is-new-in-theoplayer-5.md)

THEOplayer 5.0 is **backwards compatible for most features but includes some breaking changes per SDK**. Please review them carefully in the respective changelog for your SDK.

- **Android SDK 5.0**: The new modularized Android SDK is much faster than the legacy 4.x SDK, uses low-level, platform-native APIs. [Get started now!](https://docs.theoplayer.com/getting-started/01-sdks/02-android/00-getting-started.md)

- **iOS/tvOS SDK 5.0**: The new iOS/tvOS SDK is built on our new module-based principles and brings fully native performance for both platforms with great extensibility. [Get started now!](https://docs.theoplayer.com/getting-started/01-sdks/03-ios/00-getting-started.md)

- **Customizable UI modules**: No need to build a UI yourself - save time and money by starting from the open source THEOplayer UI for [Web](https://github.com/THEOplayer/web-ui), [Android](https://github.com/THEOplayer/android-ui) and [React Native](https://github.com/THEOplayer/react-native-theoplayer), and tailor it for your use case. Keep an eye open for the new iOS UI next quarter!

- **WebXR support**: We’ve added WebXR support for browser to enchance the AR and VR experiences on Web. [Get started now!](https://docs.theoplayer.com/getting-started/01-sdks/01-web/10-how-to-use-vr-using-webxr.md)

- **React Native SDK 2.0**: We’ve further expanded our React Native support for Web, Android and iOS-based platforms, through bridging items such as casting, Picture-in-Picture, background audio, DRM connectors and analytics connectors. Check our [GitHub](https://github.com/THEOplayer/react-native-theoplayer) and the [react-native-theoplayer v2 migration guide](https://github.com/THEOplayer/react-native-theoplayer/blob/master/doc/migrating_v2.md) for more information.

### Web

#### 💥 Breaking Changes

- Device motion controls outside stereo mode on VR now have to be enabled by setting `THEOplayer.vr.useDeviceMotionControls` to `true`.

#### 🐛 Issues

- Fixed an issue where VR/XR content would be displayed sideways in portrait mode on Safari & aligned device motion control behavior on major platforms for WebXR.
- Fixed an issue where certain HLS streams containing MP3 audio could throw an error `Failed to set the 'timestampOffset' property on 'SourceBuffer'`.
- Fixed an issue where the IMA DAI SDK was not able to correctly calculate the player's position relative to the viewport

### Android

#### 💥 Breaking Changes

- Starting from Android SDK v5.0.0 the minimum Java version required is 8.
- Removed deprecated `PipManager#enterPip()` in favor of `PipManager#enterPiP(PiPType)`
- Removed deprecated `AdsConfiguration#googleImaConfiguration()` in favor of `AdsConfiguration#googleIma()`
- Removed deprecated `AdsConfiguration#googleImaConfiguration(GoogleImaConfiguration)` in favor of `AdsConfiguration#googleIma(GoogleImaConfiguration)`
- Removed deprecated `AbrStrategyConfiguration#abrStrategyConfiguration()` in favor of `AbrStrategyConfiguration.Builder()`
- Removed deprecated `AbrStrategyMetadata#abrStrategyMetadata()` in favor of `AbrStrategyMetadata.Builder()`
- Removed deprecated `DRMConfiguration()` constructor in favor of `DRMConfiguration.Builder()`
- Removed deprecated `DRMConfiguration#fairplayDrm(FairPlayKeySystemConfiguration)` in favor of `DRMConfiguration.Builder()`
- Removed deprecated `DRMConfiguration#playreadyDrm(KeySystemConfiguration)` in favor of `DRMConfiguration.Builder()`
- Removed deprecated `DRMConfiguration#widevineDrm(KeySystemConfiguration)` in favor of `DRMConfiguration.Builder()`
- Removed deprecated `DRMConfiguration#clearkeyDrm(KeySystemConfiguration)` in favor of `DRMConfiguration.Builder()`
- Removed deprecated `KeyOSKeySystemConfiguration#keyOsKeySystemConfiguration(String)` in favor of `KeyOSKeySystemConfiguration.Builder(String)`
- Removed deprecated `KeySystemConfiguration` constructors in favor of `KeySystemConfiguration.Builder(String)`
- Removed deprecated `FairPlayKeySystemConfiguration` constructors in favor of `FairPlayKeySystemConfiguration#Builder`
- Removed deprecated `FairPlayKeySystemConfiguration#fairPlayKeySystemConfiguration(String, String)` in favor of `FairPlayKeySystemConfiguration#Builder(String, String)`
- Removed deprecated `TextTrackDescription#textTrackDescription(String)` in favor of `TextTrackDescription#Builder(String)`
- Removed deprecated `TextTrackDescription.src(String)` in favor of `TextTrackDescription#Builder(String)`
- Removed deprecated `KeySystemConfiguration.keySystemConfiguration(String)` in favor of `KeySystemConfiguration#Builder(String)`
- Removed deprecated `YoSpaceDescription.yoSpaceDescription()` in favor of `YoSpaceDescription#Builder()`
- Removed deprecated `KeyOSDRMConfiguration.keyOsDrm()` in favor of `KeyOSDRMConfiguration#Builder()`
- Removed deprecated `VudrmDRMConfiguration.vudrmDrm(String)` in favor of `VudrmDRMConfiguration#Builder(String)`
- Removed deprecated `YoSpaceLogLevelConfiguration.yoSpaceLogLevelConfiguration()` in favor of `YoSpaceLogLevelConfiguration#Builder()`
- Removed deprecated `THEOplayerAdDescription` constructors in favor of `THEOplayerAdDescription#Builder`
- Removed deprecated `THEOplayerAdDescription.adDescription()` in favor of `THEOplayerAdDescription#Builder(String)`
- Removed deprecated `THEOplayerAdDescription.source(String)` in favor of `THEOplayerAdDescription#Builder(String)`
- Removed deprecated `ClearkeyKeySystemConfiguration.clearkeyKeySystemConfiguration(String)` in favor of `ClearkeyKeySystemConfiguration#Builder(String)`
- Removed deprecated `DRMTodayConfiguration.drmToday(KeySystemConfiguration)` in favor of `DRMTodayConfiguration#Builder(KeySystemConfiguration)`
- Removed deprecated `DRMTodayConfiguration.drmToday(String)` in favor of `DRMTodayConfiguration#Builder(String)`
- Removed deprecated `TitaniumDRMConfiguration.titaniumDrm(String, String, String)` in favor of `TitaniumDRMConfiguration#Builder(String, String, String)`
- Removed deprecated `IrdetoConfiguration.irdeto(String)` in favor of `IrdetoConfiguration#Builder(String)`
- Removed deprecated `IrdetoConfiguration.irdeto(KeySystemConfiguration)` in favor of `IrdetoConfiguration#Builder(KeySystemConfiguration)`
- Removed deprecated `TypedSource#Builder()` in favor of `TypedSource#Builder(String)`
- Removed deprecated `TypedSource.typedSource(String)` in favor of `TypedSource#Builder(String)`
- Removed deprecated `TypedSource.src(String)` in favor of `TypedSource#Builder(String)`
- Removed deprecated `SourceDescription#Builder()` in favor of `SourceDescription#Builder(String)` or `SourceDescription#Builder(TypedSource...)`
- Removed deprecated `SourceDescription.sourceDescription()` in favor of `SourceDescription#Builder(String...)` or `SourceDescription#Builder(TypedSource...)`
- Removed deprecated `SourceDescription.sourceDescription(String...)` in favor of `SourceDescription#Builder(String...)`
- Removed deprecated `SourceDescription.sourceDescription(TypedSource...)` in favor of `SourceDescription#Builder(TypedSource...)`
- Removed deprecated `SourceDescription.sourceDescription(VerizonMediaSource...)` in favor of `SourceDescription#Builder(VerizonMediaSource...)`
- Removed deprecated `SourceDescription.sources(String...)` in favor of `SourceDescription#Builder(String...)`
- Removed deprecated `SourceDescription.sources(TypedSource...)` in favor of `SourceDescription#Builder(TypedSource...)`
- Removed deprecated `SpotXData.spotxData()` in favor of `SpotXData#Builder()`
- Removed deprecated `SpotXData.spotxData(SpotXData)` in favor of `SpotXData#Builder(SpotXData)`
- Removed deprecated `SpotXDataQueryParameter.spotxDataQueryParameters()` in favor of `SpotXDataQueryParameter#Builder()`
- Removed deprecated `AgamaPlayerConfiguration.agamaPlayerConfiguration(String)` in favor of `AgamaPlayerConfiguration#Builder(String)`
- Removed deprecated `GoogleDaiTypedSource#Builder()` in favor of `GoogleDaiTypedSource#Builder(GoogleDaiConfiguration)`
- Removed deprecated `GoogleDaiTypedSource.daiTypedSource(GoogleDaiConfiguration)` in favor of `GoogleDaiTypedSource#Builder(GoogleDaiConfiguration)`
- Removed deprecated `AgamaSourceConfiguration.agamaSourceConfiguration(String, StreamType)` in favor of `AgamaSourceConfiguration#Builder(String, StreamType)`
- Removed deprecated `IntegrationType#ADS` in favor of `IntegrationType#GOOGLE_IMA` or `IntegrationType#GOOGLE_DAI`
- Removed deprecated `GoogleImaAdDescription` constructors in favor of `GoogleImaAdDescription#Builder()`
- Removed deprecated `GoogleImaAdDescription#googleImaAdDescription()` constructor in favor of `GoogleImaAdDescription#Builder()`
- Removed deprecated `GoogleImaAdDescription#googleImaAdDescription(String)` in favor of `GoogleImaAdDescription#Builder(String)`
- Removed deprecated `GoogleImaAdDescription#Builder()#source(String)` in favor of `GoogleImaAdDescription#Builder(String)`
- Removed deprecated `ChromecastMetadataDescription.chromecastMetadata(String)` in favor of `GoogleImaAdDescription#Builder(String)`
- Removed deprecated `YouboraOptions` constructor in favor of `YouboraOptions#Builder(String)`
- Removed deprecated `YouboraOptions#youboraOptions()` constructor in favor of `YouboraOptions#Builder(String)`
- Removed deprecated `YouboraOptions#youboraOptions(String)` in favor of `YouboraOptions#Builder(String)`
- Removed deprecated `SpotXDataQueryParameter.spotxDataQueryParameters(SpotXDataQueryParameter)` in favor of `SpotXDataQueryParameter#Builder(SpotXDataQueryParameter)`
- Removed deprecated `Geo.spotxAdDescription()` in favor of `SpotXDataQueryParameter#Builder(String)`
- Removed deprecated `SpotXAdDescription.spotxAdDescription(String)` in favor of `SpotXAdDescription#Builder(String)`
- Removed deprecated `SpotXAdDescription.spotxAdDescription(SpotXAdDescription)` in favor of `SpotXAdDescription#Builder(SpotXAdDescription)`
- Removed deprecated `SpotXAdDescription.Builder()` in favor of `SpotXAdDescription#Builder(SpotXAdDescription)`
- Removed deprecated `SpotXAdDescription.id(String)` in favor of `SpotXAdDescription#Builder(SpotXAdDescription)`
- Removed deprecated `YouboraOptions.Builder()` in favor of `YouboraOptions#Builder(String)`
- Removed deprecated `Ads#requestPlaying()` in favor of `Ads#isPlaying()`
- Removed deprecated `Ads#requestCurrentAds()` in favor of `Ads#getCurrentAds()`
- Removed deprecated `Ads#requestCurrentAdBreak()` in favor of `Ads#getCurrentAdBreak()`
- Removed deprecated `Ads#requestScheduledAds()` in favor of `Ads#getScheduledAds()`
- Removed deprecated `Player#requestBuffered()` in favor of `Player#getBuffered()`
- Removed deprecated `Player#requestCurrentTime()` in favor of `Player#getCurrentTime()`
- Removed deprecated `Player#requestPlayed()` in favor of `Player#getPlayed()`
- Removed deprecated `Player#requestSeekable()` in favor of `Player#getSeekable()`
- Removed deprecated `Player#requestCurrentProgramDateTime()` in favor of `Player#getCurrentProgramDateTime()`
- Removed deprecated `Player#requestVideoHeight()` in favor of `Player#getVideoHeight()`
- Removed deprecated `Player#requestVideoWidth()` in favor of `Player#getVideoWidth()`
- Changed the behavior that using the `THEOplayerSettings#setFullScreenOrientationCoupled(boolean)` will also have an influence on the orientation when entering fullscreen. Please make use of the `THEOplayerSettings#setFullscreenOrientation(ActivityInfo.SCREEN_ORIENTATION_*)` instead to specify this behavior.

### iOS

#### ✨ Features

- Added background audio playback support via `THEOplayer.backgroundPlaybackDelegate` API
- Added integration support via `THEOplayer.addIntegration()` API
- Added TextTrack styling support via `THEOplayer.textTrackStyle` API
- Added support for track selection when caching via `CachingParameters.preferredTrackSelection` API
- Added `THEOplayer.developerSettings` API to host developer-friendly settings and experimental features

### tvOS

#### ✨ Features

- Added background audio playback support via `THEOplayer.backgroundPlaybackDelegate` API
- Added integration support via `THEOplayer.addIntegration()` API
- Added TextTrack styling support via `THEOplayer.textTrackStyle` API
- Added `THEOplayer.developerSettings` API to host developer-friendly settings and experimental features

</details>
<details name="major-version">
<summary>Version 4</summary>

## 🚀 4.12.9 (2024/05/13)

### iOS

#### 🐛 Issues

- Fixed an issue with building the iOS SDK from THEOportal.

## 🚀 4.12.8 (2024/04/18)

### iOS

#### ✨ Features

- Added conformance to Apple's new privacy policy for API usage.
- Added support for arm64 simulator architecture with GoogleCast.

## 🚀 4.12.7 (2023/12/19)

### iOS

#### 🐛 Issues

- Fixed an issue where TextTracks are not displayed when entering native picture-in-picture mode.

## 🚀 4.12.6 (2023/08/22)

### iOS

#### 🐛 Issues

- Fixed an issue where native picture-in-picture mode would not be retained after a source change.

## 🚀 4.12.5 (2023/06/14)

### Android

#### 🐛 Issues

- Fixed an issue where the paused state was not always reset.
- Fixed an issue where missing DRM key was not handled correctly.

## 🚀 4.12.4 (2023/05/24)

### Android

#### ✨ Features

- Added support for `playbackUrlParameters` for `VerizonMediaSource`.

#### 🐛 Issues

- Fixed an issue where the scheduling multiple Google IMA ads would crash the SDK.
- Fixed an issue where recovering from failed source caching was not possible.

#### 👎 Deprecations

- Deprecate `VerizonMediaSource#getParameters()` in favor of `VerizonMediaSource#getPreplayParameters()`.

### iOS

#### ✨ Features

- Added support for `playbackUrlParameters` on `VerizonMediaSource`.

#### 💥 Breaking Changes

- Bumped Xcode minimum support version to 13.2.1 and Swift version to 5.5.

### tvOS

#### 💥 Breaking Changes

- Bumped Xcode minimum support version to 13.2.1 and Swift version to 5.5.

## 🚀 4.12.3 (2023/05/03)

### Android

#### 🐛 Issues

- Fixed an issue where the cached `SourceDescription` would lose DRM parameters.
- Fixed an issue where the existing caching tasks would return incorrect state after app restart.

## 🚀 4.12.2 (2023/04/25)

### Android

#### 🐛 Issues

- Fixed an issue where the cached `SourceDescription` would lose some metadata.
- Fixed an issue where the existing caching tasks would return incorrect state.
- Fixed an issue where caching would fail when the app is obfuscated.

## 🚀 4.12.1 (2023/04/20)

### iOS

#### 🐛 Issues

- Fixed an issue where the initial cast state was wrong while using `CastStrategy.auto`.

## 🚀 4.12.0 (2023/04/03)

### General

#### ⚡ Improvements

- Cancel all previous downloads on a source change for HESP streams.

#### 🐛 Issues

- Fixed an issue where setting preload to `metadata` would not start preloading the metadata for HLS streams.
- Fixed an issue where the `loadstart` event would not be dispatched for HLS streams.
- Fixed an issue where the player could stall on slightly malformed HLS streams that have a different `NAME` attribute for default renditions across different rendition groups.
- Fixed an issue with HLS streams where incorrect/incomplete codec information in the master playlist could cause the player to stall.
- Fixed an issue where the player would sometimes stall indefinitely on HESP streams during startup.

### Web

#### ✨ Features

- Store bandwidth estimations to improve quality selection on startup for HESP streams.

#### 🐛 Issues

- Fixed an issue where the player would hang some time on bandwidth drop for HESP streams on iOS Safari.
- Eliminated flickering on mobile Chrome when using VR through WebXR.
- Fixed an issue when changing text tracks in native fullscreen, the changes weren't applied when going back to the inline player.

### Android

#### ✨ Features

- Added an overload to `MediaTrack.setTargetQualities()` that accepts a `List<Quality>` instead of a `QualityList`.

#### ⚡ Improvements

- Improved `TARGETQUALITYCHANGEDEVENT` event type in `AudioTrackEventTypes` and `VideoTrackEventTypes`.

### Unified Android

#### 🐛 Issues

- Fixed an issue where binary data contained in a cue of a metadata track would not be part of the `TextTrackCue` content property.

### iOS

#### ✨ Features

- Exposed `ownerIdentifier` and `data` fields from ID3 private frames on the TextTrackCue's `content` property.

#### ⚡ Improvements

- Added `CachingParameters().init()` constructor

#### 🐛 Issues

- Fixed an issue where caching flow was not started if a rendition has Content Protection parameter specified.
- Fixed an issue where initializing THEOplayerConfiguration without parameters would cause a crash.

### tvOS

#### 🐛 Issues

- Fixed an issue where initializing THEOplayerConfiguration without parameters would cause a crash.

## 🚀 4.11.0 (2023/03/17)

### General

#### 🐛 Issues

- Fixed an issue where the player would not store the bandwidth estimations in cache when playing HLS streams.

### Web

#### 💥 Breaking Changes

- Updated the default VR direction so that looking forward corresponds to a `yaw` value of `0` instead of `-180`.

#### ✨ Features

- Add the possibility to configure the desired timescale to which it might need to shift to for DASH streams.

#### ⚡ Improvements

- Improve battery and network consumption of playback of HESP streams by pausing the player when it is hidden.
- Improved VR rendering performance on Firefox.

#### 🐛 Issues

- Fixed an issue where sometimes the audio would freeze after switching qualities when playing HESP on iOS Safari.
- Fixed an issue where audio and video would sometimes lose synchronization when playing an HESP stream on iOS Safari.

### Unified Android

#### 🐛 Issues

- Fixed an issue where repetitive source setting would cause memory buildup.
- Fixed an issue where the playback of the content would not start in case of an empty VAST.

## 🚀 4.10.0 (2023/03/06)

### General

#### 🐛 Issues

- Fixed an issue where the player would often overestimate the available download bandwidth when playing an HLS stream.
- Fixed an issue where the `useCredentials` and `crossOrigin` configuration flags were not respected for HLS streams.

### Web

#### 🐛 Issues

- Fixed an issue where the latency on HESP streams increases when switching between qualities on iOS Safari.
- Fixed an issue where default text tracks were not automatically enabled on iOS Safari.
- Fixed an issue where a player with muted autoplay would unintentionally pause any background music in iOS Safari.
- Fixed an issue where the player could become unresponsive after a source change when the license is invalid.
- Fixed an issue where the player would rarely error when loading an MP4 segment of a HLS stream.

### Android

#### 🐛 Issues

- Fixed an issue where the player did not reflect the correct chromecast state.

### Unified Android

#### ✨ Features

- Introduced `THEOplayerGlobal.getPlaybackSettings()` to control and optimize playback behaviour (experimental)

#### 🐛 Issues

- Fixed an issue where mid-roll ads were not visible on low-end devices.
- Fixed an issue where the startup time would be too long when switching sources.

### iOS

#### 🐛 Issues

- Fixed an issue where closing the native picture-in-picture window would instead restore the previous presentation mode.
- Fixed compatibility issues of fullscreen orientation coupling on iOS 16.
- Fixed an issue where showing a subtitle/caption textTrack would disable an active metadata track.
- Fixed an issue where the player was stuck in a muted state after muting during an IMA ad playout.

### tvOS

#### 💥 Breaking Changes

- Stop support for tvOS 11. The minimum supported version is now 12.0.

#### ✨ Features

- Bump GoogleInteractiveMediaAds tvOS framework version to 4.8.2.

## 🚀 4.9.1 (2023/02/21)

### iOS

#### 🐛 Issues

- Fixed an issue where THEOplayer did not load on iOS 16.4

## 🚀 4.9.0 (2023/02/17)

### General

#### 🐛 Issues

- Fixed an issue where playback would sometimes stall after a non-seamless period transition on Tizen 2.

### Web

#### 💥 Breaking Changes

- Removed HESP feature flag from all published npm builds except `@theoplayer/basic-hesp`.
- Playback of HESP streams now requires a player license with the `hesp` feature enabled. Contact THEOplayer support if you require the `hesp` feature on your license.

#### 🐛 Issues

- Fixed a potential memory leak due to repeated DRM license creation on WebOS 2016/2017 models.
- Fixed an issue where setting `player.currentTime` on iOS before playback has started wouldn't execute the seek.
- Fixed an issue where a `<Tracking event="progress">` inside a VAST advertisement could be triggered too soon.
- Fixed an issue where the `playing` event would be dispatched twice during native playback.
- Fixed an issue where a quality switch would cause a desync between audio and video for HESP streams on iOS Safari.
- Fixed an issue where CEA608 cues would be kept in memory indefinite, causing issues when playing very long VODs on memory constrained devices.

### Android

#### 🐛 Issues

- Fixed an issue where an unhandled NullPointerException could cause application crash while loading ads.

### Unified Android

#### ✨ Features

- Added support for background audio playback of progressive media (mp4, mp3. avi...)

#### 🐛 Issues

- Fixed an issue where audio on some DRM protected streams would not play correctly.
- Fixed an issue where process termination during Fullscreen was crashing the app.
- Fixed an issue where some HEVC streams were failing to play.

### iOS

#### 💥 Breaking Changes

- Stop support for iOS 11. The minimum supported version is now 12.0.
- The 3.18.4 version of the IMA SDK framework does not support bitcode. As a result, the THEOplayer iOS SDK also drops support for bitcode when compiled with the IMA or DAI feature flags. Additionally, bitcode support is now deprecated for THEOplayer and will be fully dropped with the next released version. To understand more about this decision, please check the [Xcode 14 release notes about bitcode deprecation.](https://developer.apple.com/documentation/xcode-release-notes/xcode-14-release-notes)

#### ✨ Features

- Added support for wifi-only caching via `CachingParameters.allowsCellularAccess`
- Bump GoogleInteractiveMediaAds iOS framework version to 3.18.4.
- Added `enableBackgroundPlayback` property to `GoogleIMAAdsConfiguration` API.

#### 🐛 Issues

- Added compatibility support of custom in-app picture-in-picture for iOS 16

### tvOS

#### ✨ Features

- Added `enableBackgroundPlayback` property to `GoogleIMAAdsConfiguration` API.

## 🚀 4.8.0 (2023/02/03)

### General

#### 🐛 Issues

- Fixed an issue where badly provisioned SSAI streams potentially cause stalls on old webOS devices.
- Fixed an issue where the player would error when switching between two different codecs.
- Fixed an issue where the player would not consider the screen resolution of the smartTV when selecting the optimal quality for HLS streams.

### Web

#### ⚡ Improvements

- Improved timing of the MediaTailor tracking events.

#### 🐛 Issues

- Fixed an issue where we didn't dispatch ad events for MediaTailor ads.
- Fixed an issue so that playing a stream with only 1 video quality will only show 'Automatic' in the quality selection menu.
- Fixed the position of the linear ad clickthrough and countdown when using the chromeless player.

### Unified Android

#### ✨ Features

- Added support for MPEG audio.

#### 🐛 Issues

- Avoid dispatching `SourceChangeEvent` when casting starts.
- Fixed an issue where some HLS streams did not start playback.
- Fixed an issue where when going in or out of FullScreen would not dispatch events.
- Fixed an issue where when a Track change event is received, the track wouldn't contain the changes.
- Fixed an issue where PlayerEvents were not triggered during Google IMA ad playback.
- Fixed stalling on start of HESP streams
- Fixed an issue where playback of DRM protected streams would reveal visual artefacts on some Samsung phones.

### iOS

#### ✨ Features

- Added viewController & viewControllerClass APIs to the Fullscreen API. The FullscreenViewController is now public and open to subclass.
- Added a builder type to create GoogleIMAAdsConfiguration instances.

#### 🐛 Issues

- Fixed an issue where the puased state of the player would sometimes be incorrect when calling play() immediately after setting a source.

#### 👎 Deprecations

- Deprecated GoogleIMAAdsConfiguration.init in favor of GoogleIMAConfigurationBuilder
- Deprecated setters on GoogleIMAConfiguration

### tvOS

#### ✨ Features

- Added Fullscreen API.
- Added a builder type to create GoogleIMAAdsConfiguration instances.

#### 🐛 Issues

- Fixed an issue that would prevent DRM playback on a player after another player was destroyed.

#### 👎 Deprecations

- Deprecated GoogleIMAAdsConfiguration.init in favor of GoogleIMAConfigurationBuilder
- Deprecated setters on GoogleIMAConfiguration

## 🚀 4.7.0 (2023/01/20)

### General

#### 🐛 Issues

- Fixed an issue where the ABR would not take the player's size into account to decide the optimal quality for HLS streams.

### Web

#### ✨ Features

- Added support for the HLS `#EXT-X-START` tag. Note that the `PRECISE` attribute is currently ignored: the player always treats the tag as if `PRECISE=YES` was set.

#### 🐛 Issues

- Fixed an issue where the screen becomes black when destroying the player when in full window mode on iOS Safari.
- Fixed an issue where the player would sometimes hang when setting the target latency for HESP streams on iOS Safari.

### Unified Android

#### ✨ Features

- Added support for background playback of DASH/HLS audio/video streams.

#### 🐛 Issues

- Fixed an issue where on play-out of DASH streams the player would sometimes continue to download media data after the player was destroyed.
- Fixed an issue where text track cues containing bitmaps would appear stretched or squashed in fullscreen mode.
- Fixed an issue where the positioning of TTML text track cues would sometimes be wrong.

### iOS

#### 🐛 Issues

- Fixed an issue where the player's initial paused state was toggled to unpaused, when adding the GoogleIMAIntegration during player setup 

## 🚀 4.6.0 (2023/01/09)

### General

#### 🐛 Issues

- Fixed an issue where only audio or video HESP streams would not play.

### Web

#### ✨ Features

- Added the possibility to set the label for HLS qualities.

#### ⚡ Improvements

- Added improvements for latency on iOS Safari.
- Improved HLS ABR to not switch to the lowest bandwidth if playback hasn't started yet.
- Reduced amount of memory consumed by the player for HESP streams on iOS Safari.

#### 🐛 Issues

- Fixed an issue with the Google IMA integration where `player.ads.currentAdBreak.ads.length` would sometimes not be updated fast enough during playback of the first ad.
- Fixed an issue where FairPlay could use an incorrect assetId.
- Fixed an issue where some HLS variant streams were falsely filtered out on their codecs.
- Fixed an issue where seeking backwards on Tizen 2.4 devices could result in an indefinite stall.
- Fixed an issue where DASH playback would stall on Tizen 2 at period transitions due to overlapping segments.
- Fixed an issue where the `totalBytesLoaded` and `currentBandwidthEstimate` metrics did not update for HLS streams.
- Fixed an issue where a Google DAI DASH live streams did not dispatch ad events.
- Fixed an issue where multi-period DASH streams could wrongfully filter out eventstream cues of the next period.
- Fixed an issue where sometimes the player would do an incorrect seek on Tizen or WebOS 4.X or lower.
- Fixed an issue where a view that is re-enabled would always be paused.

### Unified Android

#### 🐛 Issues

- Fixed an issue where the source description of an asset was not correctly passed to a Chromecast receiver.
- Fixed an issue where video artifacts would appear on initial playback of a CMAF stream.
- Fixed an issue where `isPaused` would disregard the state of different Integrations.
- Fixed an issue where a TTML text track with cues that contain images would not be rendered correctly.

### iOS

#### 🐛 Issues

- Fixed an issue where DRM protected streams, using a custom DRM connector, would not play after switching sources

## 🚀 4.5.1 (2022/12/16)

### iOS

#### ✨ Features

- Provide DAI configuration APIs to enable background mode.

### tvOS

#### 🐛 Issues

- Fixed an issue where IMA ads would not play on tvOS.

## 🚀 4.5.0 (2022/12/09)

### General

#### ✨ Features

- Added a new use-case 'same-drm-only' for 'useSeamlessPeriodSwitch' configuration on DASH to allow seamless period switches only between 2 drm or 2 non-drm periods.

#### ⚡ Improvements

- Made the ability to set the maximum bitrate for Google IMA ads visible in the documentation.

#### 🐛 Issues

- Fixed an issue where the player could sometimes crash with an "attempted to download an incomplete segment" error while playing an LL-HLS livestream.
- Fixed an issue on Tizen 2 for use-cases where stalls or video looping could occur.
- Fixed an issue where HESP streams with mediaTimeOffset would not work.
- Fixed an issue with unwanted seeks due to the stall checker starting too soon.

### Web

#### ✨ Features

- Added the ability to configure omidAccessModeRules for Google DAI.

#### 🐛 Issues

- Fixed an issue where WebVTT subtitle renditions were not always correctly synchronized when playing an HLS livestream.
- Fixed an issue with the Google IMA integration where no ads could be scheduled after displaying a non-linear ad.
- Fixed a regression on Internet Explorer 11 where the control bar appeared at the top (instead of at the bottom) of the player.
- Fixed a regression on Internet Explorer 11 where HLS streams could not be loaded.
- Fixed an issue where IMA preroll ads were skipped on iOS web when unmuted autoplay was used.
- Fixed an issue that caused the following warning in the developer console in Chrome on Android: "Ignored attempt to cancel a touchend event with cancelable=false".
- Fixed an issue that caused a deprecation warning about `Event.path` in the developer console in Chrome.
- Fixed an issue where setting the currentTime before the player has loaded didn't result in a seek once playback started for an HLS source.
- Fixed an issue where some LL-HLS variant streams were falsely filtered out on their codecs.

### Android

#### 👎 Deprecations

- Deprecated `AdsConfiguration#googleImaConfiguration()` in favor of `AdsConfiguration#googleIma()`.
- Deprecated `Builder#googleImaConfiguration()` in favor of `Builder#googleIma()`.

### Unified Android

#### 🐛 Issues

- Fixed an issue where the optional callback method would not be executed on `play`, `pause` and `setCurrentTime` methods.

### iOS

#### 🐛 Issues

- Fixed an issue where playing any source after a DRM source could fail

#### 👎 Deprecations

- Deprecated `AdsConfiguration.googleImaConfiguration` in favor of `AdsConfiguration.googleIma`.

## 🚀 4.4.0 (2022/11/25)

### General

#### 💥 Breaking Changes

- Removed analytics, nogolive and bufferedchange event from the HESP api.

### Web

#### ✨ Features

- Added ability to configure the maximum bitrate for Google IMA ads.
- Added the ability to replace the ad tag parameters for ad requests for Google DAI.

#### ⚡ Improvements

- Improved the LCEVC integration so enhancements are applied frame accurate.

#### 🐛 Issues

- Fixed an issue where the player inadvertently used non-seamless period switches between two clear periods inside a DRM protected MPEG-DASH stream on Tizen 2.4.
- Added a new use-case 'clear-only' for 'useSeamlessPeriodSwitch' configuration on DASH to allow seamless period switches only between non-drm periods.
- Fixed a memory leak in the MPEG-TS transmux worker.
- Fixed an issue on Tizen 5.0 devices where the player was not able to play MPEG-TS HLS streams.

### Unified Android

#### 🐛 Issues

- Fixed an issue where the player sometimes took a long time to start playback on certain HLS live streams with low-precision `#EXTINF` durations.
- Fixed an issue with Google DAI sources where the snapback position was not cleared between source changes.

### iOS

#### 🐛 Issues

- Fixed an issue where the content player paused state after a source change would be incorrect.

### tvOS

#### 🐛 Issues

- Fixed an issue where the content player paused state after a source change would be incorrect.

## 🚀 4.3.1 (2022/11/18)

### Web

#### 🐛 Issues

- Fixed an issue that causes a fatal crash during long playback sessions on certain Tizen and WebOS models.

## 🚀 4.3.0 (2022/11/15)

### General

#### ⚡ Improvements

- Improved HESP ABR resulting in less undesired downswitches.
- Improve the latency calculation for HESP streams.
- Improve ABR downswitching for HESP streams on Mac OS.
- Improve ABR quality selection for HESP streams on iOS Safari.
- Improved cache-friendliness of HESP playback by avoiding `now` initialization requests during startup if possible.

#### 🐛 Issues

- Fixed compatibility with HLS streams from AWS IVS.

### Web

#### ✨ Features

- Added an experimental implementation for `THEOplayer.MultiViewPlayer` which supports in sync playback with multiple streams. It can be accessed through the `multiview` feature flag and using the multiview license.
- Added automatic recovery when the player's buffer becomes too full to the new HLS pipeline. See `player.abr.maxBufferLength` for more information.

#### ⚡ Improvements

- Playing an HLS stream with AES-128 full-segment encryption no longer requires the web page to be served over HTTPS. (This removes the limitation that was introduced in version 4.0.0.)
- Removed the 60 seconds limitation on `player.abr.targetBuffer`.

#### 🐛 Issues

- Fixed an issue where the player could stall indefinitely before a discontinuity when playing certain HLS streams on older smart TVs.
- Fixed an issue where the player didn't fall back to an alternative source when the first HLS source contains DRM that is not supported by the platform.
- Fixed an issue where the `useNativePlayback` option was not respected by the new HLS pipeline.
- Fixed an issue where the player could freeze when changing sources after playing a FairPlay-protected HLS stream.
- Fixed an issue where the player would refuse to play an fMP4 segment that contains a `uuid` box with a `NULL` character in its extended type.
- Fixed an issue with the Google IMA integration where certain ads with percentage based timeOffset would not be scheduled if paired with a pre-roll.
- Fixed an issue with the Google IMA integration where the player would be stuck on a black screen after the viewer skips an ad.

### Android

#### ✨ Features

- Added `fullscreenOrientation` flag to THEOplayerSettings to specify which orientation the player will take when in fullscreen.

#### 👎 Deprecations

- Deprecated `PiPManager#enterPiP()` in favor of `PiPManager#enterPiP(PiPType)`.
- Deprecated the behavior that using the `fullscreenOrientationCoupling` will also have an influence on the orientation, when entering fullscreen. Please make use of the `fullscreenOrientation` instead to specify this behavior.

### Unified Android

#### ✨ Features

- Add support for Google DAI integration.
- Add support for Picture in Picture mode.
- Introduced the handling of the violations (gaps) of media streams continuity for Android native media buffers

#### 🐛 Issues

- Fixed an issue where ad-related events would not be dispatched for MediaTailor sources.
- Fixed an issue where play-back of a DASH stream would sometimes fail on parsing MP4 boxes.
- Fixed an issue where removing tracks after switching sources would crash the player.
- Fixed an issue where play-out of DRM protected streams would fail on Huawei devices.
- Fixed an issue where the player would sometimes crash when casting a source using join strategy `auto`.
- Fixed MEDIA-LOAD-ERROR on some HLS streams.
- Fixed an issue where subtitle cues would not be updated during play-out.
- Fixed no playing event for only audio streams.
- Fixed an issue where a player configured without a THEOplayer license would not be able to play sources from the white-listed `theoplayer.com` domain.

#### 👎 Deprecations

- Deprecated `IntegrationType#ADS` in favor of specific integration types.

### iOS

#### ✨ Features

- The Ads API now exposes a method that returns the scheduled Adbreaks when playing a Google DAI stream
- Added methods to the public player.ads.dai API to control whether the snapBack feature is enabled on Google DAI streams
- Added a public disableUI property to the GoogleIMAConfiguration to toggle the ad UI on non TrueView DAI ads

#### ⚡ Improvements

- Added documentation on how to use a MediaTailorSource

#### 🐛 Issues

- Fixed an issue where casting was not started when using the default Google Cast button
- Fixed an issue where the player got into an infinite loading loop after disconnecting from Chromecast

### tvOS

#### ⚡ Improvements

- Added documentation on how to use a MediaTailorSource

## 🚀 4.2.0 (2022/10/21)

### General

#### 🐛 Issues

- Fixed various issues where the new HLS pipeline could lose synchronization when switching between variant streams, which would lead to wrong segments being downloaded or the player stalling indefinitely.
- Fixed an issue where the "Playing on Chromecast" overlay did not always show the Chromecast receiver's name.
- Fixed an issue where the HLS player could crash on certain MPEG-TS segments containing MP3 audio.
- Fixed an issue where the player could sometimes crash when seeking to live on an HLS live stream with a very short sliding window.

### Web

#### ✨ Features

- Added a new optional experimental property needsTimescaleShifting to the SourceDescription API to allow an override for the timescale shifting feature that is by default only enabled for Tizen 2.x.
- Added the ability to set subtitle rendering margins using the `player.textTrackStyle` API. This is useful when using a custom UI so there is no overlap between the UI and the rendered subtitles.
- Added support for `license-renewal` messages from the CDM when playing a DRM protected stream.

#### ⚡ Improvements

- Updated documentation to indicate that ABRConfiguration is readonly.
- Removed top and bottom margins so that subtitles can be rendered anywhere on top of the player.
- The default player UI will now push subtitles out of the way when it is visible, instead of having a fixed 10% top and bottom margin.
- Made several improvements to MPEG-DASH playback on platforms with limited performance (such as Smart TVs).

#### 🐛 Issues

- Fixed an issue where sometimes the ad is shown below the player after switching tabs on iOS and iPad devices.
- Fixed an issue where playback for HESP streams on iOS Safari 16 would not start.
- Fixed an issue where during play-out of a DASH stream on an EOS stb the first frames would sometimes loop a few times.
- Fixed an issue during Google DAI playback that could result in mismatched click-through URLs when given multiple Google DAI sources.
- Fixed an issue where sometimes the webworker would not load when using the LL-HLS pipeline.

### Android

#### 💥 Breaking Changes

- Align Google IMA SDK version used on all Android SDK platforms to 3.25.1.

#### 🐛 Issues

- Fix an issue where the audio of an IMA advertisement could be heard after the player was destroyed.
- Fixed an issue where the state of the player would not be retained when switching to background/foreground whilst playing an Google IMA ad.

### Unified Android

#### ✨ Features

- Added `Player#setRenderingTarget(RenderingTarget)` API to switch between SurfaceView and TextureView.

#### 🐛 Issues

- Fixed an issue where playback of a DASH stream would sometimes fail on parsing MP4 boxes.

### iOS

#### 🐛 Issues

- Fixed an issue where setting the nativePictureInPicture configuration would introduce unwanted behavior.
- Fixed an issue where the timeOffset and maxDuration values were -1 in the ad data returned by an adEvent.
- Fixed an issues where Ad properties on AdEvents were not properly populated while playing a Google DAI stream.

## 🚀 4.1.1 (2022/10/14)

### Web

#### 🐛 Issues

- Fixed an issue where sometimes the webworker would not load when using the LL-HLS pipeline.

### iOS

#### ⚡ Improvements

- Added an identifier to distinguish VerizonMediaAdBreaks.

## 🚀 4.1.0 (2022/09/26)

### General

#### ✨ Features

- Added support for Playlist Delta Updates in low-latency HLS.

#### 🐛 Issues

- Fixed an issue where CEA-608 closed captions were not correctly detected after loading a second HLS stream into the player.
- Fixed an issue where the player would fail to play audio when setting the player's source directly to an HLS media playlist (without an HLS master playlist).
- Fixed an issue where the player could fail to start playback when the variant streams in the HLS master playlist do not have a `CODECS` attribute.

### Web

#### ✨ Features

- Added the ability to modify the source URL returned by the Google DAI library before starting playback.
- Added an optional 'deviceID' property to AgamaPlayerConfiguration which if present will be used instead of the internally generated one.

#### 🐛 Issues

- Fixed an issue where the player would error when parsing an MPEG-TS file that contained no data in the new HLS pipeline.
- Fixed an issue where the THEO ad integration would play all previously skipped ads in the post-roll ad break.
- Fixed an issue where attempting to play an HLS stream with MPEG-TS segments on WebOS 4.0 would crash the web page.
- Fixed an issue where WebVTT cues with a line position as a percentage could appear cut off.
- Fixed an issue on webOS 4.0 where sometimes a subtitle cue would remain on screen indefinitely.

### Android

#### 💥 Breaking Changes

- Removed deprecated `Player#requestMetrics(RequestCallback)`.

#### ✨ Features

- Added a flag in `THEOplayerGlobal#getSDKType()` API that returns the SDKType in use.

#### 🐛 Issues

- Fixed an issue where play-out of a DRM protected stream would sometimes crash the player after switching sources multiple times.

### Unified Android

#### 💥 Breaking Changes

- `HespApi.EventListener#onAnalytic()` now passes a jsonValue parameter of type `String` instead of type `JSONObject`. The parameter contains a stringified json object.
- Removed deprecated `Player#requestMetrics(RequestCallback)`.

#### ✨ Features

- Decreased the memory footprint for MPEG TS content playback.
- Added a flag in `THEOplayerGlobal#getSDKType()` API that returns the SDKType in use.

#### 🐛 Issues

- Fixed an issue where enabling an audio or video track when playing a non-streamable media asset would sometimes crash the player.
- Fixed an issue where the player reset the non-streaming sources while switching in/out of fullscreen.
- Fixed an issue where `play` and `playing` events were not consistently dispatched during play-out of non-streaming media files.
- Fixed an issue where playback would sometimes not start for HLS streams containing MPEG-TS segments that do not have an I-frame at start.
- Fixed an issue that would crash the player when attaching a listener to the Hesp API.
- Fixed an issue where ad details would not be passed when dispatching IMA ad events.
- Fixed an issue where a source with multiple IMA ads, which are scheduled on the same timeOffset, would only retain the last ad.

### iOS

#### ✨ Features

- Expose Google DAI functions on THEOplayer/ads/dai to convert points in time between timelines including and excluding ads: `func contentTime(from streamTime: Double) -> Double` and `func streamTime(from contentTime: Double) -> Double`.

#### 🐛 Issues

- Fixed a bug that causes high CPU usages when playing videos with subtitles for more than 30 minutes.

## 🚀 4.0.0 (2022/08/31)

### Officially announcing THEOplayer 4.0
Introducing a major version bump to THEOplayer 4.0. This version officially releases all the improvements and developments THEOplayer has achieved since version 3.0. THEOplayer 4.0 is **backwards compatible for most features but includes some breaking changes per SDK**. Please review them carefully in the respective changelog for your SDK.

- **Android SDK 4.0**: We’ve added support for MPEG-TS, progressive MP4, casting and CSAI to our new high-performing [Android pipeline](https://docs.theoplayer.com/getting-started/01-sdks/02-android/00-getting-started.md).

- **LCEVC support**: You can now play back [LCEVC-enabled](https://docs.theoplayer.com/getting-started/01-sdks/01-web/09-how-to-play-an-lcevc-source-with-theoplayer.md) streams to deliver a richer viewer experience or to achieve bandwidth savings.

- **AWS MediaTailor**: Leverage the AWS MediaTailor [integration](https://docs.theoplayer.com/how-to-guides/05-integrations/05-mediatailor.md) and easily track your client-side events cross-platform to discover how viewers interact with your ads.

- **New HLS pipeline**: We’ve combined both HLS and LL-HLS features in our new HLS pipeline and additionally increased performance and stability on smart TVs and older devices.

- **React Native SDK**: MP4 playback is available, thumbnail support has been added to the React Native [sample app](https://www.theoplayer.com/e3t/Ctc/I2+113/cfLZc04/VWfQ7T1Yjx1NVnM_5f4sB9s-W5wYw0_4PbdFyN2L_pB73q3phV1-WJV7CgRMJW6vyfHx1XwgLSW5cM8Gt5_Qh-VW7RRD1G6Y3tbhW7ZxtwG7P-lFnW5sl_wD8f-CVJN2sVHXVcydThW2Y_z7x27m_YRW5tlbHs365lTZW5_fK3g76zfgkW797kxh3Vj8_2W6tmkvp84dyDVW2dQQ258-620zW488Cgx89K4g7W4KG8jp2X7SNKW676j8x6JH3YHW3l_rc93BxgnrW2MtWPt8_JC_5W2sjsC11FDwsyW8TM85H4vvghVW8W45D83wYTDKVNTD6V5vp2M6W6sS28J7zg68ZW7lcnGT3v9rw0N94PjjHPbdlgW9gXdbM359kD3VdP9lK40_4LFN5xGHpnMnwwFW28xwTq2yn4Ny39xJ1) on Github and we’ve updated our [documentation](https://www.theoplayer.com/e3t/Ctc/I2+113/cfLZc04/VWfQ7T1Yjx1NVnM_5f4sB9s-W5wYw0_4PbdFyN2L_pBr3q3pBV1-WJV7CgJhNW91-gCn4PGC-_Vbpghm96wBJlVsvD-s3gtxfwN73qDdW6xxl9N5xvKQJcwKRpW62zXCH4v60bFW6MnKWq1TZjg4W91rSZ-1K309DW8BD-8R7w_htSW3zP1_Q4LJvCVW8vN1Hr5HNLqKW3Gm4JJ97Py8-W2D80_w3zZMM0W5KRxzJ6-ZGrPW4qVp1W3Mjv2mV7NPq12ypdF3W1P5mzb8-0lP8W2kq8nN6JhNgRVQwKbG48GpBPW8nfyq66bRsKWW4BncWC8WM5DlW9c89sz6X9V14N8657CbnNN63N5B8ZfsYMNnvV2NJsj5gGYQQVZKZ09762mbMW6kYg9N1Wn4qWW12p8zf3zZXlrW4KDs0J7w4ytQW5lRmXt4MbRj13hzf1) to make sure you can easily get started!

### General

#### 💥 Breaking Changes

- The new HLS pipeline is now enabled by default. Formerly known as "the LL-HLS pipeline", this pipeline adds support for low-latency HLS streaming, with full support for Widevine, PlayReady and FairPlay DRM. (If you prefer to stay on the old pipeline for now and migrate later, you can enable the `hls-legacy` feature flag on your SDK and set `source.hls.useLegacy` to `true` when configuring [your source](https://docs.theoplayer.com/api-reference/web/theoplayer.basesource.md).)
- ID3 cues now have their `startTime` set to the dispatch time, and their `endTime` set to the dispatch time of the next ID3 tag. Previously, their `endTime` was equal to the dispatch time and their `startTime` was always 0, which rendered `TextTrack.activeCues` useless. Users who want to observe ID3 cue activations should now use the `enter` event (instead of the `exit` event), or alternatively use the `cuechange` event on the containing text track.

#### 🐛 Issues

- Fixed an issue where the player would stall during live DASH playback that contained DRM when the entire availability window suddenly contained no DRM.
- Fixed an issue with AES-128 decryption using the new LL-HLS pipeline where the player would incorrectly parse the initialization vector.

### Web

#### 💥 Breaking Changes and known limitations

- Removed the deprecated DRM processor APIs, i.e.: `KeySystemConfiguration.certificateRequestProcessor`, `.certificateResponseProcessor`, `.licenseRequestProcessor` and `.licenseResponseProcessor`. Use the Content Protection Integration API instead: https://docs.theoplayer.com/api-reference/web/theoplayer.registercontentprotectionintegration.md
- The new HLS pipeline requires the HLS master playlist to correctly list all used audio and video codecs in the CODECS attribute of the #EXT-X-STREAM-INF tags. Otherwise, the player may fail to start playback or fail to play the audio or video track. Notably, when setting the source directly to an HLS media playlist (without a master playlist), the player may fail to play the audio track.
- Playing an HLS stream with AES-128 full-segment encryption requires the web page to be served over HTTPS.
- The new HLS pipeline performs soft quality switches, meaning that it plays the current buffer out before showing the quality switch (as opposed to rebuilding the buffer in the new quality).

#### ✨ Features

- Added automatic recovery when the player's buffer becomes too full. When the player fails to buffer the next segment because there's no more room in its buffer, it will now wait until the playhead has advanced further before retrying this segment. See `player.abr.maxBufferLength` for more information. This is currently only supported for MPEG-DASH streams.
- Added support for loading cached streams in the LL-HLS pipeline using the Cache API.
- Allow changing the UI language dynamically with `player.ui.language(languageCode)`.
- Added support for clickthroughs in Verizon Media Ads.
- Added support for default classes in WebVTT. Tags such as `<c.yellow>` now receive a default color according to https://www.w3.org/TR/webvtt1/#default-classes.
- Added basic support for MP3 audio in the new HLS pipeline.

#### 🐛 Issues

- Fixed an issue where certain nested `<div>` elements inside a TTML subtitle were not rendered.
- Fixed an issue which caused the player to be stuck in an infinite loop on the end of a discontinuity with our legacy HLS pipeline.
- Fixed an issue where `<p>` tags in TTML subtitles did not correctly inherit the `tts:textAlign` property from their parent region's style.
- Fixed an issue where FairPlay streams would still use the new HLS pipeline instead of native playback on Safari.
- Fixed an issue where the browser could run out of memory over time while playing an HLS stream with high-resolution MPEG-TS segments in the new HLS pipeline.

### Android

#### 💥 Breaking Changes

- Removed deprecated THEOplayerConfig constructor in favor of `THEOplayerConfig.Builder`.
- Removed deprecated `THEOplayerConfig#allowMixedContent(boolean)`.
- Removed deprecated `THEOplayerConfig.Builder#googleIma(boolean)` in favor of `AdsConfiguration#googleImaConfiguration()`.
- Removed deprecated `MediaTrack#setTargetQualities(List<Q> qualities)` in favor of `MediaTrack#setTargetQualities(QualityList)`.
- Removed deprecated TextTrackDescription constructor in favor of `TextTrackDescription#Builder()`.
- Removed deprecated SourceDescription constructors in favor of `SourceDescription#Builder()`.
- Removed deprecated TypedSource constructors in favor of `TypedSource#Builder()`.
- Removed deprecated TypedSource.Builder#setExperimentalRenderingEnabled(boolean) in favor of `TypedSource.Builder#setNativeRenderingEnabled(boolean)`.
- Removed deprecated TypedSource#isExperimentalRenderingEnabled(boolean) in favor of `TypedSource#isNativeRenderingEnabled(boolean)`.
- Removed deprecated `GoogleDaiConfiguration.Builder#sourceType(SourceType)` and `GoogleDaiConfiguration#getSourceType()` in favor of `TypedSource.Builder#type(SourceType)` and `TypedSource#getType()` respectively.
- Removed deprecated DRM Configuration constructors in favor of respective Builder.
- Removed deprecated `ErrorEvent#getError()` in favor of `ErrorEvent#getErrorObject()`.
- Removed deprecated `ContentProtectionErrorEvent` methods.
- Removed deprecated CachingParameters constructor in favor of `CachingParameters.Builder`.
- Removed deprecated `Chromecast#setSource(SourceDescription)` in favor of `Chromecast#setConnectionCallback(ChromecastConnectionCallback)`.
- Removed deprecated `FullScreenManager#setAspectRatio(AspectRatio)` in favor of `Player#setAspectRatio(AspectRatio)`.
- Removed deprecated `com.theoplayer.android.api.fullscreen.AspectRatio` enum in favor of `com.theoplayer.android.api.player.AspectRatio`.
- Removed deprecated SpotXAdDescription fields in favor of SpotXDataQueryParameter.
- Stopped providing THEOplayer Android MinApi16 SDK.
- Bumped minimum supported version to Android 5.0 (API level 21).

#### ✨ Features

- Exposed `traffickingParameters` in GoogleImaAd.
- Expose `streamTimeForContentTime` and `contentTimeForStreamTime` for Google DAI.

#### 👎 Deprecations

- Deprecated static `AgamaPlayerConfiguration.Builder#agamaPlayerConfiguration(String)` constructors in favor of `AgamaPlayerConfiguration.Builder(String)`.
- Deprecated static `AgamaSourceConfiguration.Builder#agamaSourceConfiguration(String, StreamType)` constructors in favor of `AgamaSourceConfiguration.Builder(String, StreamType)`.
- Deprecated public YouboraOptions(String) constructor in favor of `YouboraOptions.Builder(String)`.
- Deprecated static `YouboraOptions.Builder#youboraOptions()` constructors in favor of `YouboraOptions.Builder(String)`.
- Deprecated public `YouboraOptions.Builder()` constructor in favor of `YouboraOptions.Builder(String)`.
- Deprecated static `YouboraOptions.Builder#youboraOptions(String)` constructors in favor of `YouboraOptions.Builder(String)`.
- Deprecated static `ChromecastMetadataDescription.Builder#chromecastMetadata()` constructor in favor of `ChromecastMetadataDescription.Builder()`.
- Deprecated static `GoogleDaiTypedSource.Builder#daiTypedSource(GoogleDaiConfiguration)` constructor in favor of `GoogleDaiTypedSource.Builder(GoogleDaiConfiguration)`.
- Deprecated static `AbrStrategyConfiguration.Builder#abrStrategyConfiguration()` constructor in favor of `AbrStrategyConfiguration.Builder()`.
- Deprecated static `AbrStrategyMetadata.Builder#abrStrategyMetadata()` constructor in favor of `AbrStrategyMetadata.Builder()`.
- Deprecated static `DRMTodayConfiguration.Builder#drmToday(String)` constructor in favor of `DRMTodayConfiguration.Builder(String)`.
- Deprecated static `DRMTodayConfiguration.Builder#drmToday(KeySystemConfiguration)` constructor in favor of `DRMTodayConfiguration.Builder(KeySystemConfiguration)`.
- Deprecated static `IrdetoConfiguration.Builder#irdeto(String)` constructor in favor of `IrdetoConfiguration.irdeto(String)`.
- Deprecated static `IrdetoConfiguration.Builder#irdeto(KeySystemConfiguration)` constructor in favor of `IrdetoConfiguration.Builder(KeySystemConfiguration)`.
- Deprecated static `KeyOSDRMConfiguration.Builder#keyOsDrm()` constructor in favor of `KeyOSDRMConfiguration.Builder()`.
- Deprecated static `KeyOSKeySystemConfiguration.Builder#keyOsKeySystemConfiguration(String)` constructor in favor of `KeyOSKeySystemConfiguration.Builder(String)`.
- Deprecated static `TitaniumDRMConfiguration.Builder#titaniumDrm(String, String, String)` constructor in favor of `TitaniumDRMConfiguration.Builder(String, String, String)`.
- Deprecated static `VudrmDRMConfiguration.Builder#vudrmDrm(String)` constructor in favor of `VudrmDRMConfiguration.Builder(String)`.
- Deprecated static `ClearkeyKeySystemConfiguration.Builder#clearkeyKeySystemConfiguration(String)` constructor in favor of `ClearkeyKeySystemConfiguration.Builder(String)`.
- Deprecated static `DRMConfiguration.Builder#fairplayDrm(FairPlayKeySystemConfiguration)` constructor in favor of `new DRMConfiguration.Builder().fairplay(FairPlayKeySystemConfiguration)`.
- Deprecated static `DRMConfiguration.Builder#playreadyDrm(KeySystemConfiguration)` constructor in favor of `new DRMConfiguration.Builder().playready(KeySystemConfiguration)`.
- Deprecated static `DRMConfiguration.Builder#widevineDrm(KeySystemConfiguration)` constructor in favor of `new DRMConfiguration.Builder().widevine(KeySystemConfiguration)`.
- Deprecated static `DRMConfiguration.Builder#clearkeyDrm(ClearkeyKeySystemConfiguration)` constructor in favor of `new DRMConfiguration.Builder().clearkey(ClearkeyKeySystemConfiguration)`.
- Deprecated static `FairPlayKeySystemConfiguration.Builder#fairPlayKeySystemConfiguration(String, String)` constructor in favor of `FairPlayKeySystemConfiguration.Builder(String, String)`.
- Deprecated static `KeySystemConfiguration.Builder#keySystemConfiguration(String)` constructor in favor of `KeySystemConfiguration.Builder(String)`.
- Deprecated public KeySystemConfiguration constructors in favor of `KeySystemConfiguration.Builder(String)`.
- Deprecated static `YoSpaceDescription.Builder#yoSpaceDescription()` constructor in favor of `YoSpaceDescription.Builder()`.
- Deprecated static `YoSpaceLogLevelConfiguration.Builder#yoSpaceLogLevelConfiguration()` constructor in favor of `YoSpaceLogLevelConfiguration.Builder()`.
- Deprecated static `TextTrackDescription.Builder#textTrackDescription()` constructor in favor of `TextTrackDescription.Builder(String)`.
- Deprecated static `TextTrackDescription.Builder#textTrackDescription(String)` constructor in favor of `TextTrackDescription.Builder(String)`.
- Deprecated static `TextTrackDescription.Builder#src(String)` constructor in favor of `TextTrackDescription.Builder(String)`.
- Deprecated static `TypedSource.Builder#typedSource()` constructor in favor of `TypedSource.Builder(String)`.
- Deprecated static `TypedSource.Builder#typedSource(String)` constructor in favor of `TypedSource.Builder(String)`.
- Deprecated `TypedSource.Builder#src(String)` method in favor of `TypedSource.Builder(String)`.
- Deprecated static `SourceDescription.Builder#sourceDescription()` constructor in favor of `SourceDescription.Builder(String...)` or `SourceDescription.Builder(TypedSource...)`.
- Deprecated static `SourceDescription.Builder#sourceDescription(String...)` constructor in favor of `SourceDescription.Builder(String...)`.
- Deprecated static `SourceDescription.Builder#sourceDescription(TypedSource...)` constructor in favor of `SourceDescription.Builder(TypedSource...)`.
- Deprecated static `SourceDescription.Builder#sourceDescription(VerizonMediaSource...)` constructor in favor of `SourceDescription.Builder(VerizonMediaSource...)`.
- Deprecated `SourceDescription.Builder#sources(String...)` method in favor of `SourceDescription.Builder(String...)`.
- Deprecated `SourceDescription.Builder#sources(TypedSource...)` method in favor of `SourceDescription.Builder(TypedSource...)`.
- Deprecated public THEOplayerAdDescription constructors in favor of `THEOplayerAdDescription.Builder(String)`.
- Deprecated static `THEOplayerAdDescription.Builder#adDescription()` constructor in favor of `THEOplayerAdDescription.Builder(String)`.
- Deprecated static `THEOplayerAdDescription.Builder#adDescription(String)` constructor in favor of `THEOplayerAdDescription.Builder(String)`.
- Deprecated `THEOplayerAdDescription.Builder#source(String)` method in favor of `THEOplayerAdDescription.Builder(String)`.
- Deprecated public GoogleImaAdDescription constructors in favor of `GoogleImaAdDescription.Builder(String)`.
- Deprecated static `GoogleImaAdDescription.Builder#googleImaAdDescription()` constructor in favor of `GoogleImaAdDescription.Builder(String)`.
- Deprecated static `GoogleImaAdDescription.Builder#googleImaAdDescription(String)` constructor in favor of `GoogleImaAdDescription.Builder(String)`.
- Deprecated `GoogleImaAdDescription.Builder#source(String)` method in favor of `GoogleImaAdDescription.Builder(String)`.
- Deprecated static `SpotXAdDescription.Builder#spotxAdDescription()` constructor in favor of `SpotXAdDescription.Builder(String)`.
- Deprecated static `SpotXAdDescription.Builder#spotxAdDescription(String)` constructor in favor of `SpotXAdDescription.Builder(String)`.
- Deprecated static `SpotXAdDescription.Builder#spotxAdDescription(SpotXAdDescription)` constructor in favor of `SpotXAdDescription.Builder(SpotXAdDescription)`.
- Deprecated `SpotXAdDescription.Builder#id(String)` method in favor of `SpotXAdDescription.Builder(String)`.
- Deprecated public `SpotXAdDescription.Builder()` constructor in favor of `SpotXAdDescription.Builder(String)`.
- Deprecated static `SpotXAdDescription.SpotXDataQueryParameter#spotxDataQueryParameters()` constructor in favor of `SpotXAdDescription.SpotXDataQueryParameter.Builder()`.
- Deprecated static `SpotXAdDescription.SpotXDataQueryParameter#spotxDataQueryParameters(SpotXDataQueryParameter)` constructor in favor of `SpotXAdDescription.SpotXDataQueryParameter.Builder(SpotXDataQueryParameter)`.
- Deprecated static `SpotXAdDescription.SpotXData#spotxData()` constructor in favor of `SpotXAdDescription.SpotXData.Builder()`.
- Deprecated static `SpotXAdDescription.SpotXData#spotxData(SpotXData)` constructor in favor of `SpotXAdDescription.SpotXData.Builder(SpotXData)`.

### Unified Android

#### 💥 Breaking Changes

- Bumped minimum supported version to Android 5.0 (API level 21).

#### ✨ Features

- Added support for MediaTailor sources.
- Added MediaTailor integration with progression tracking functionality.

#### 🐛 Issues

- Fixed the HTTP callback crash on slow phones
- Fixed an issue where the ABR controller would not take into account the player size for HESP streams.

### iOS

#### 💥 Breaking Changes

- Removed deprecated `THEOplayerConfiguration` constructors
- Removed `Chromecast.source` API in favor of `Chromecast.setChromecastConnectionDelegate`
- Removed `THEOplayer.unload()` method in favor of `THEOplayer.destroy()`
- Removed deprecated `VRConfiguration` constructors

#### 👎 Deprecations

- Swift 5.3 (XCode 12.4) is deprecated.
- Please start migrating your projects to be compatible with the Swift 5.5 compiler (Xcode 13) or later. Starting from THEOplayerSDK 5.0.0 we will only support Swift 5.5 or higher.

### tvOS

#### 🐛 Issues

- Various UI and presentation mode fixes including: better focus when in fullscreen, fixed issues when exiting fullscreen, improved PictureInPicture button animation, and player controls now auto fade out when inactive.

#### 👎 Deprecations

- Swift 5.3 (XCode 12.4) is deprecated.
- Please start migrating your projects to be compatible with the Swift 5.5 compiler (Xcode 13) or later. Starting from THEOplayerSDK 5.0.0 we will only support Swift 5.5 or higher.

</details>
<details name="major-version">
<summary>Version 3</summary>

## 🚀 3.7.0 (2022/08/01)

### General

#### ✨ Features

- Improved LL-HLS playlist synchronization on live streams when discontinuities are present.
- Support seeking to a program date time in LL-HLS using `player.currentProgramDateTime`.

#### 🐛 Issues

- Fixed an issue where seeking back would result downloading the same segments for a while using the LL-HLS pipeline.
- Fixed a crash in the LL-HLS pipeline when a partial segment does not contain an SPS or PPS NAL.
- Fixed an issue where `#EXT-X-PRELOAD-HINT` tags with `BYTERANGE-START` and without `BYTERANGE-LENGTH` were parsed incorrectly in the LL-HLS pipeline.
- Increased timeout on LL-HLS playlist blocking requests to 3*targetDuration.
- Fixed an issue where LL-HLS playlists would not be synced correctly.

### Web

#### ✨ Features

- Enabled LCEVC enhancements when playing LCEVC content using the LL-HLS and DASH pipelines. This can be activated by adding `lcevc: true` to the source description and including the LCEVC SDK on your web page.
- Exposed `streamTimeForContentTime` and `contentTimeForStreamTime` for Google DAI.
- Added a flag in the Google DAI API to enable and disable snapback behaviour.

#### ⚡ Improvements

- Improved handling of the tracking events for the MediaTailor integration.

#### 🐛 Issues

- Fixed an issue where the player would stall indefinitely for a live stream using the LL-HLS pipeline once it got outside of the DVR window. 
- Fixed an issue where embedded vtt subtitles were not rendered during native playback.
- Fixed an issue where changing between two text tracks would result in not removing the cue of the disabled text track.
- Fixed an issue where the player using the LL-HLS pipeline could fetch more data from a stream than needed which caused an error.
- Fixed an issue where FairPlay streams would inadvertently use the LL-HLS pipeline instead of native playback on Safari.
- Fixed an issue where pre-rolls would be skipped when setting a new source and using the default THEO ads integration.

### Android

#### 🐛 Issues

- Fixed an issue where audio of a Google IMA ad would still play in a secondary activity after it was destroyed.

### Unified Android

#### 🐛 Issues

- Fixed an issue where DASH streams would sometimes stall when starting playback.

### iOS

#### ✨ Features

- Added the possibility for DRM configurations to hold both a Widevine and a FairPlay KeySystemConfiguration using the new MultiplatformDRMConfiguration and KeySystemConfigurationCollection.
- Added support for changing VerizonMedia skipOffsets while playing a video.
- Exposed `traffickingParameters` for Google IMA.
- Added MediaTailor integration support by introducing a new `TypedSource`: `MediaTailorSource`.

#### 👎 Deprecations

- The classes `FairPlayDRMConfiguration`, `WidevineDRMConfiguration` and their corresponding ObjC equivalents are deprecated in favor of the new `MultiplatformDRMConfiguration`.
- Deprecated the initializers for pre-integartion DRM configurations with the FairPlay specific `licenseAcquisitionURL:` in favor of the new initializer with the `keySystemConfigurations:` parameter.

### tvOS

#### ✨ Features

- Added MediaTailor integration support by introducing a new `TypedSource`: `MediaTailorSource`.

## 🚀 3.6.1 (2022/07/12)

### Web

#### 🐛 Issues

- Fixed an issue where the player would stall indefinitely for a live stream using the LL-HLS pipeline once it got outside of the DVR window. 
- Fixed an issue where embedded vtt subtitles were not rendered during native playback.
- Fixed an issue where changing between two text tracks would result in not removing the cue of the disabled text track.

### Android

#### 👎 Deprecations

- Deprecated `fullscreen.AspectRatio` in favor of `player.AspectRatio`.

### Unified Android

#### ✨ Features

- Introduced the MPEG TS content playback for native Android pipeline
- Added support for `setAspectRatio(AspectRatio)`.
- Added support for progressive MP4/MP3 playback.

#### 🐛 Issues

- Adjust subtitles size when going in/out of fullscreen.

## 🚀 3.6.0 (2022/07/05)

### General

#### ✨ Features

- Added support for `player.preload` in the LL-HLS pipeline.
- Added support for `player.abr.targetBuffer` and `.bufferLookbackWindow` in the LL-HLS pipeline.
- Added support for `player.abr.strategy` in the LL-HLS pipeline.
- Added support for setting preferredKeySystems for DRM HESP streams.

#### ⚡ Improvements

- Improved ABR algorithm to take screen size into account for HESP streams.
- `AudioTrack.label` now uses the `NAME` attribute of the associated `#EXT-X-MEDIA` tag for alternative audio renditions in the LL-HLS pipeline.
- Improved parsing of the license downloaded from `licenseUrl`.

#### 🐛 Issues

- Fixed an issue where HESP playback doesn't start when a response interceptor is added to the Network API.
- Fixed an issue where the player could sometimes stall indefinitely when seeking backwards over a discontinuity in the LL-HLS pipeline.
- Fixed an issue where the player would crash with an "Invalid media buffer" error when switching qualities on certain streams in the LL-HLS pipeline.
- Fixed an issue where MPEG-TS segments containing H.264 NALs with certain NAL types where not accepted by the LL-HLS pipeline.
- Fixed an issue where seekable doesn't update when the stream has combined audio and video.
- Fixed an issue where sometimes switching a WEBVTT text track without cues would cause an error.
- Fixed an issue where the player could stall on a discontinuity switch when using the LL-HLS pipeline.

### Web

#### ✨ Features

- Added ability to configure Google IMA OmidAccessModeRules.

#### 🐛 Issues

- Fixed an issue where abr selection didn't happen on smart TV's when using the LL-HLS pipeline.
- Fixed an issue where VerizonMedia contentNotification set to true was broken.
- Fixed an issue where player.currentProgramDateTime sometimes didn't update correctly if the stream has combined audio and video.
- Fixed an issue with Google-IMA where the player would become unresponsive when pausing during a mid-roll ad.
- Fixed an issue where setting playAdsAfterTime on the player source would cause VMAP ads using the Google IMA integration to be completely ignored.
- Fixed an issue where MOAT pixels were only sent for the first ad in an adbreak.

### Android

#### ✨ Features

- Added support for MediaTailor sources.
- Added `setSkipOffset(offset)` for Verizon Media adbreaks, to set the time after which an adbreak can be skipped.

### Unified Android

#### ✨ Features

- Added support to register custom DRM integrations.

#### 🐛 Issues

- Fixed an issue where a play() would have no effect if called in quick succession of setSource().
- Fixed an issue where the player would not pause when the app goes to the background.

### iOS

#### ✨ Features

- Added `VerizonMediaSource.prefix` to change the prefix for Verizon Media (Edgecast) Preplay and Asset Info API requests.

#### 🐛 Issues

- Fixed an issue where `CastStrategy.auto` was not taken into account while using Chromecast.
- Fixed an issue where text track AddCueEvents were sometimes missing.

## 🚀 3.5.0 (2022/06/02)

### General

#### ✨ Features

- Added support for ID3 metadata in the LL-HLS pipeline.
- Added support for ID3 carriage in CMAF for DASH streams. (https://aomediacodec.github.io/id3-emsg/)
- Added support for CEA-608 closed captions in the LL-HLS pipeline.
- Added support for Fairplay DRM HESP streams.

#### ⚡ Improvements

- Improve ABR algorithm for HESP streams.
- Changed goLive to take the latency configuration into account to determine the time to seek to.
- Improve the types of the text track API events.

#### 🐛 Issues

- Fixed an issue where WebVTT cue settings were not respected for HLS subtitle renditions.
- Fixed an issue where the X-TIMESTAMP-MAP metadata header was not respected when parsing WebVTT subtitles in the LL-HLS pipeline.
- Fixed an issue where `#EXT-X-BYTERANGE` tags without an offset were not recognized in the LL-HLS pipeline.
- Fixed an issue where a DASH manifest containing a subsegmentStartsWithSAP attribute set to a non-numeric would crash the player.

### Web

#### ✨ Features

- Added `player.latency` API for managing low-latency live playback.

#### 🐛 Issues

- Fixed an issue where the player would get stuck fetching the same segment of DASH live streams.
- Fixed an issue where the player could sometimes get into an infinite loop when trying to jump a gap on certain HLS streams in the LL-HLS pipeline.
- Fixed an issue where for an MPEG-TS stream using the LL-HLS pipeline it could stall on a discontinuity.
- Fixed an issue where sometimes the AirPlay button was shown when AirPlay is not supported.
- Fixed an issue where an incorrect timescale rescaling would break playback on Tizen 2 devices.

### Android

#### ✨ Features

- Added `FullScreenManager.setAspectRatio(AspectRatio aspectRatio)`, to configure what the aspect ratio of the content is.
- Added `VerizonMediaSource.Builder#prefix(String)` to change the prefix for Verizon Media (Edgecast) Preplay and Asset Info API requests.
- Added support for static access to player version APIs via `THEOplayerGlobal.getVersion()` and `THEOplayerGlobal.getPlayerSuiteVersion()`

#### 🐛 Issues

- Fixed an issue where play-out of a DRM protected stream would fail after switching sources multiple times.

### Unified Android

#### ✨ Features

- Allow querying the source of a side-loaded text track and whether it is a forced text track or not.

#### 🐛 Issues

- Fixed an issue where the player sometimes crashes if multiple players are configured in parallel.
- Fixed an issue where the player would sometimes crash on play-out of an HLS stream with text tracks.
- Fixed an issue where the Cast module crashed when GooglePlayServices was missing from the device.
- Fixed an issue where DRM playback would fail when using multiple players on Huawei devices.

### iOS

#### ✨ Features

- Added support for `canStartPictureInPictureAutomaticallyFromInline` in Native Picture-in-Picture.
- Exposed the src property on the iOS TextTrack API

#### 🐛 Issues

- Fixed an issue where start-up time was too long for certain LL-HLS streams
- Fixed a bug that would crash the containing app when playing a video with a sideloaded text track in combination with an ad.
- Fixed an API documentation error for the AspectRatio property where the descriptions for fill and aspectFill were mixed up.

## 🚀 3.4.0 (2022/05/05)

### General

#### ✨ Features

- Added support for missing keyframes at the start of a segment for LL-HLS.
- Added support for sideloaded text tracks in the LL-HLS pipeline.

#### 🐛 Issues

- Fixed an issue where the LL-HLS pipeline would show a duplicate audio track for variant streams without a `CODECS` attribute.
- Fixed an issue where a forced TextTrack would not be correctly enabled/disabled after a track switch.

### Web

#### ✨ Features

- Added MediaTailor integration with progression tracking functionality.
- Added support for packed audio segments (.aac files) in the LL-HLS pipeline.
- Added `VerizonMediaSource.prefix` to change the prefix for Verizon Media (Edgecast) Preplay and Asset Info API requests.
- Added support for `<font color>` tags in SubRip (SRT) subtitles.
- Added the ability to skip scheduled ads by setting `SourceDescription.playAdsAfterTime`.
- Added support for `line` setting in WebVTT subtitles.
- Added support for the following MediaTailor tracking events: 'pause', 'resume', 'mute', 'unmute', 'fullscreen', 'exitFullscreen' and 'engagedView'.
- Enabled MPEG-TS support by default for the LL-HLS pipeline.

#### 🐛 Issues

- Fixed an issue that caused the player to ignore the sub second part of IMA ad time offsets.
- Fixed an issue where the player would not give a clear error when setting an invalid Yospace source.
- Fixed an issue on Tizen 2.4 where the player would occassionally throw an `InvalidStateError` for certain HTTP requests.
- Fixed an issue on Tizen 2.4 where the LL-HLS pipeline would crash on certain MPEG-TS segments containing large media timestamps.
- Fixed a bug where Google IMA ads would stop being scheduled after receiving an empty ad break.
- Fixed a bug where player.ads.scheduledAdBreaks would contain ads that have already played.
- Fixed an issue where Google IMA ads would sometimes not be scheduled correctly when using a percentage string as the timestampOffset.
- Fixed an issue where the LL-HLS pipeline failed to parse certain MPEG-TS segments containing ID3 tags spanning multiple MPEG-TS packets.
- Fixed an issue where the player would falsely think it has ended after playing an IMA mid-roll ad.
- Fixed an issue where the DAI adTagParameters configuration would not be passed to the DAI StreamRequest.
- Fixed an issue where the player sometimes crashes on the first segment of a livestream if audio starts slightly before video when using the LL-HLS pipeline on Samsung Tizen 2.4.

### Unified Android

#### ✨ Features

- Added support for Google Cast integration.
- Added synchronous APIs on the Player class.

#### 🐛 Issues

- Fixed an issue where on some AndroidTV devices play-out of Widevine protected streams would fail.

#### 👎 Deprecations

- The `Player#requestBuffered(RequestCallback<TimeRanges> callback)` is deprecated in favor of `Player#getBuffered()`.
- The `Player#requestCurrentTime(RequestCallback<Double> callback)` is deprecated in favor of `Player#getCurrentTime()`.
- The `Player#requestPlayed(RequestCallback<TimeRanges> callback)` is deprecated in favor of `Player#getPlayed()`.
- The `Player#requestSeekable(RequestCallback<TimeRanges> callback)` is deprecated in favor of `Player#getSeekable()`.
- The `Player#requestCurrentProgramDateTime(RequestCallback<Date> callback)` is deprecated in favor of `Player#getCurrentProgramDateTime()`.
- The `Player#requestVideoHeight(RequestCallback<Integer> callback)` is deprecated in favor of `Player#getVideoHeight()`.
- The `Player#requestVideoWidth(RequestCallback<Integer> callback)` is deprecated in favor of `Player#getVideoWidth()`.
- The `Ads#requestPlaying(RequestCallback<Boolean> callback)` is deprecated in favor of `Ads#isPlaying()`.
- The `Ads#requestCurrentAds(RequestCallback<List<Ad>> callback)` is deprecated in favor of `Ads#getCurrentAds()`.
- The `Ads#requestCurrentAdBreak(RequestCallback<AdBreak> callback)` is deprecated in favor of `Ads#getCurrentAdBreak()`.
- The `Ads#requestScheduledAds(RequestCallback<List<Ad>> callback)` is deprecated in favor of `Ads#getScheduledAds()`.

### iOS

#### ✨ Features

- Added new formats to specify time offsets for ads. You can now also specify them in a number of seconds and using a timecode.

#### 🐛 Issues

- Fixed an issue that caused time offsets in IMA ads to be calculated not accurately.
- Fixed an issue where ContentProtection headers were not handled correctly.

## 🚀 3.3.0 (2022/04/12)

### General

#### ✨ Features

- Add support for `forced-subtitle` DASH role scheme value.

#### 🐛 Issues

- Fixed a bug where switching tracks using the player API when chromecasting would not disable the previously active track.
- Fixed an issue where we would keep fetching the playlists of a previous LL-HLS live stream after we switched to a new source.

### Web

#### 💥 Breaking Changes

- Changed the `averageBandwidth` property on qualities to the average bandwidth instead of the bandwidth for HLS and HESP streams.

#### ✨ Features

- Added basic support for MPEG-TS segments in the LL-HLS pipeline.
- Added support for converting a v1 PSSH box into a v0 PSSH box on EOS stbs.

#### ⚡ Improvements

- Improved overall performance by internally using native JavaScript `Promise`s when supported.

#### 🐛 Issues

- Fixed an issue where no ads would be returned by THEOAds if a single ad in an adpod returns a VAST error.
- Fixed an issue where ABR could not reach qualities higher than 1080p on a Tizen device.
- Fixed an issue where sometimes seeking back while the player is paused will cause an indefinite stall for HLS streams.
- Fixed an issue where thumbnails would not be displayed correctly for a stream that contains a track with tiled thumbnails.

### Android

#### 🐛 Issues

- Fixed an issue where the player would crash in apps targeting Android 12 (API level 31) when entering PiP mode using the PipManager.
- Fixed and issue where play-out in PiP mode would not work.

## 🚀 3.2.3 (2022/04/05)

### Android

#### 🐛 Issues

- Fixed an issue where some events related to advertisements would not be triggered for Verizon Media sources.

## 🚀 3.2.2 (2022/04/05)

### iOS

#### 🐛 Issues

- Fixed an issue where removeEventListener would not work as intended.

## 🚀 3.2.1 (2022/03/25)

### iOS

#### 🐛 Issues

- Fixed an issue when setting a source while Airplaying caused an infinite play/pause loop.

## 🚀 3.2.0 (2022/03/11)

### General

#### ✨ Features

- Support switching between variant streams containing both audio and video and alternative audio renditions when using LL-HLS.
- Added support for switching between DASH representations with incompatible codecs.

#### ⚡ Improvements

- Improve latency calculation for HESP streams.
- Added several stability improvements for LL-HLS.

#### 🐛 Issues

- Fixed an issue where the player would incorrectly choose an AC-3 variant stream when using LL-HLS, even when the platform does not support this codec.
- Fixed an issue where the `currentLatency` value would be wrong during start of playback of an HESP stream.
- Fixed an issue where audio and video were out of sync for some LL-HLS streams.
- Fixed an issue where the player sometimes tried to download a parent segment which does not yet have all of its partial segments in LL-HLS.
- Fixed an issue where the player would throw an error when trying to parse an incorrect language in the `mdhd` box.

### Web

#### ⚡ Improvements

- Improve startup time when autoplay is enabled.

#### 🐛 Issues

- Fixed an issue where play-out of an HLS stream would sometimes stall indefinitely before starting a short discontinuity.

### Android

#### 🐛 Issues

- Fix an issue where theoplayer sources could not be used for testing purposes without providing a license key.
- Fixed an issue where the IMA advertisements would still play after `stop()` was called on the player.
- Fixed an issue where the player would crash on starting play-out of an HLS stream.

### Unified Android

#### ✨ Features

- Added documentation for GoogleImaAdEventType.

#### 🐛 Issues

- Fixed an issue where the player would crash when creating multiple instances.

### iOS

#### 🐛 Issues

- Fix an issue where the player would not fill the available space when using native VR.
- Fixed an issue that caused unwanted volume changes after playing an ad using the Google IMA iOS SDK.

### tvOS

#### 🐛 Issues

- Fixed an issue where the license check would throw an error after instantiating a new THEOplayer from a tvOS application

## 🚀 3.1.1 (2022/02/21)

### Android

#### 🐛 Issues

- Fix an issue where `CastStrategy.MANUAL` was ignored and the player automatically connected to Cast.

## 🚀 3.1.0 (2022/02/14)

### General

#### 🐛 Issues

- Fixed an issue where old avc1 codecs would error for the LL-HLS pipeline.
- Fixed an issue where both captions and subtitles could be enabled at the same time.
- Fixed selected values not being translated in the subtitle options menu.

### Web

#### ✨ Features

- Added logic to set a prioritised list of preferred audio/video codecs for initial quality selection. Works for DASH and LL-HLS streams.
- Added the ability to override ec-3 audio codec filtering for Tizen and WebOS by setting ec-3 as a preferred codec in SourceDescription.abr or PlayerConfiguration.abr.
- Added support for forced narrative subtitles on DASH.

#### 🐛 Issues

- Fixed an issue with decoding HESP streams on Edge 92 on some Windows 10 devices.

### Android

#### 🐛 Issues

- Fix an issue where adding Chromecast dependencies was required even if it was not in use.

### Unified Android

#### 💥 Breaking Changes

- Starting from Unified Android SDK v3.0.0 the minimum Java version required is 8.

#### ✨ Features

- Add support for Google IMA integration.

#### 🐛 Issues

- Fixed an issue where the player would show a black screen when changing orientation in paused state.
- Fixed an issue where the player would sometimes stall when switching periods in a multi-period DASH stream.
- Fix an issue where adding Chromecast dependencies was required even if it was not in use.

### iOS

#### ✨ Features

- Add support for M1/arm64 simulator architecture where compatible. For more information, please visit: https://docs.theoplayer.com/faq/74-how-to-use-theoplayer-ios-sdk-on-m1.md

#### 🐛 Issues

- Fixed an issue that caused the player to resume playing after pausing while casting to an AirPlay Device.
- Fixed an issue that made the chromecast state to be always `unavailable`.
- Fixed a bug where loaded data and loaded metadata events would not dispatch.
- Improved memory management.
- Fixed an issue where in some cases requestPlayed would return inaccurate data.

### tvOS

#### ✨ Features

- Add support for M1/arm64 simulator architecture where compatible. For more information, please visit: https://docs.theoplayer.com/faq/74-how-to-use-theoplayer-ios-sdk-on-m1.md

#### 🐛 Issues

- Fixed a bug where loaded data and loaded metadata events would not dispatch.
- Improved memory management.
- Fixed an issue where in some cases requestPlayed would return inaccurate data.

## 🚀 3.0.0 (2022/01/17)

### Officially announcing THEOplayer 3.0
Introducing a major version bump to THEOplayer 3.0. This version officially releases all the improvements and developments THEOplayer has achieved in the last months. This latest version is now stable, backward compatible, and recommended for general use.

#### Unified Android
- A single SDK for all Android devices, including mobile, Smart TVs, and STBs.
- Supports clear and encrypted playback through (LL-)DASH, (LL-)HLS, and HESP.
- Support Widevine level 1 DRM encryption.
- Modular connectors allow the integration of preferred functionalities.
- Features:
    - Closed captions/subtitle: TTML, WebVTT, CEA-608 and CEA-608 over CEA-708.
    - Metadata formats: Out-of-band DASH eventstream, in-band EMSG metadata & ID3.
##### ⚠ Note
Some features are not yet supported, therefore, only the above-mentioned features are available.

#### Package Managers
- Allow engineering teams to save time-to-live.
- Automated version management allows THEOplayer customers to bump to the latest version without reaching the portal.
- Much lower build/ download time across all platforms, especially on iOS and Android.
- Modular development approach.

#### Smart TVs & STBs
- Support for a wide range of Tizen and WebOS versions, including legacy versions (Tizen 2.4+ and WebOS 3.0+).
- Performant seamless multi-period DASH playback with and without DRM on Tizen and WebOS supporting advanced SSAI use-cases.
- Optimized performance on RDK and Android TV STBs.
- Supports stable playback with DRM and subtitles on STBs.

#### Low Latency
- Support superior playback through LL-DASH and LL-HLS on all THEOplayer SDKs.
- Tested low latency capabilities end-to-end.

#### High Efficiency Streaming through HESP
- Sub-second latency at scale.
- Fast channel change, immediately at the live latency cross-platform.
- Improved ABR.

### Web

#### 🐛 Issues

- Fixed an issue where we would sometimes not error when an HESP stream goes offline.
- Fixed a compatibility issue when using the player UI with react-native-web.
- Fixed an issue where playback on EOS stb devices would not be smooth.
- Fix an issue where VR streams were not rendered properly on mobile Safari 15.2

#### 👎 Deprecations

- Support for Internet Explorer will be removed. Please, note that IE11 is the latest version and it will no longer be supported. For additional information, it is recommended to follow the guidance from Microsoft to use Edge as the default browser (Please refer to: https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge#what-is-the-lifecycle-policy-for-internet-explorer-)

### Android

#### 🐛 Issues

- Fixed an issue where calling requestFullScreen before the player is done initializing caused the player to ignore it.
- Fixed an issue where Audiotrack switching on Chromecast was broken on the UI.
- Fixed an issue where updating app to targetSdkVersion 31 (Android 12) and using cast framework v20.1.0 triggered a crash whenever a casting session is started.

#### 👎 Deprecations

- Deprecate THEOplayer Android MinApi16 SDK.
- Last major version of the THEOplayer Android SDK to support Android 4.x (API level 16). The next minimum version is Android 5.0 (API level 21)

### Unified Android

#### 🐛 Issues

- Fixed an issue where the player would potentially crash when the hosting application would go to the background.
- Fixed an issue where play-out of DRM-protected streams would sometimes fail on mobile Samsung devices.

### iOS

#### 🐛 Issues

- Fix an issue where fullscreen device orientation was broken when using fullscreenOrientationCoupling.

</details>
<details name="major-version">
<summary>Version 2</summary>

## 🚀 2.92.0 (2021/12/17)

### General

#### 🐛 Issues

- Fixed an issue where the player would freeze after a quality switch when using the LL-HLS pipeline.

### Web

#### ✨ Features

- Exposed `creativeId`, `adSystem`, `title` and `wrapper` properties in the API for Google DAI ads.

#### 🐛 Issues

- Fixed an issue where HESP ABR would drop to lowest quality due to an underestimated bandwidth estimate on certain streams.
- Fixed an issue where the player would not automatically prune based on the `bufferLookbackWindow` in the `ABRConfiguration`.
- Fixed an issue with the Verizon ad integration sometimes not dispatching `adend` and `adbreakend` events on post-roll ads.
- Fixed an issue with filtering of unsupported DASH representations.
- Fixed an issue where MPEG-DASH live streams with very large media timestamps failed to play on Tizen 3.

### Android

#### 🐛 Issues

- Fixed an issue where setting the target quality of an audio/video track would not work when playing HLS.

### Android TV

#### 🐛 Issues

- Fixed an issue where Verizon ad events would not be dispatched.

### Unified Android

#### ✨ Features

- Added support for rendering CEA608 subtitles.

#### 🐛 Issues

- Fixed an issue where play-out of some DRM protected streams would fail.

### tvOS

#### 🐛 Issues

- Fixed an issue where requestCurrentProgramDateTime would return nil in tvOS

## 🚀 2.91.1 (2021/11/29)

### Web

#### 🐛 Issues

- Fixed an issue where the player would not automatically prune based on the `bufferLookbackWindow` in the `ABRConfiguration`.

### Android

#### 🐛 Issues

- Fixed an issue where setting the target quality of an audio/video track would not work when playing HLS.

## 🚀 2.91.0 (2021/11/18)

### General

#### ✨ Features

- Added fallback logic for failing rendition playlist fetches in the LL-HLS pipeline.
- Added fallback logic for failing segment/part/map/preload hint fetches in the LL-HLS pipeline.

#### 🐛 Issues

- Fixed a UI issue when receiving empty ad breaks from the Verizon ad integration.
- Fixed an issue causing indefinite buffering on Firefox when playing HLS streams.

### Web

#### ✨ Features

- Added support for the Label tag in AdaptationSets for DASH streams.

#### 🐛 Issues

- Fixed an issue where replaying or seeking after a DASH stream has ended could result in glitches or stuttering on Tizen 4 or lower and webOS 4 or lower.
- Fixed an issue where ads could not be scheduled after the last ad had finished playing.
- Fixed an issue where the notification about an upcoming ad was not removed after the ad finished playing.
- Fixed an issue where the live UI would not show when playing a LL-HLS live stream.
- Fixed an issue where a black screen showed up on a quality change for HESP streams on iOS Safari.
- Fixed an issue where a stream with ISOBMFF segments that contain multiple tracks would only retain the first track.
- Fixed an issue where Verizon Ad events were being dispatched before playback started.

### Unified Android

#### 🐛 Issues

- Fixed an issue where enabling or disabling audio and video tracks in the callback of an `addtrack` event would not work.
- Fixed an issue where a multi-period DASH stream would stall during start of playback and when transitioning between periods.
- Fixed an issue where an expired DRM license would not be renewed during play-out.
- Fixed an issue where WebVTT subtitles containing markup tags would not be properly displayed.

### iOS

#### 🐛 Issues

- Fix an issue where the player would be in a paused state after seeking or during audio interruptions.
- Fix an issue where the muted state would not be reflected correctly in the API.
- Fix an issue where player would crash after trying to re-cache a previously cached source.
- Fix an issue where a caching task that hadn't started downloading yet would be removed when going to background.

## 🚀 2.90.1 (2021/10/29)

### iOS

#### 🐛 Issues

- Fixed an issue where initializing a non-chromeless player failed

## 🚀 2.90.0 (2021/10/21)

### General

#### ⚡ Improvements

- Added `mediaType` and `subType` to segment requests from the Network API when playing a DASH or HLS stream.

#### 🐛 Issues

- Fixed an issue where HESP playback would not start in recent Safari versions.

### Web

#### ✨ Features

- Added `ChromecastConnectionCallback` to dynamically update the source while connecting/disconnecting from Chromecast.
- Fixed a DASH multi-period playback issue on Tizen 2.4 where the periods have different timescales.

#### ⚡ Improvements

- Added support for switching between audio or video tracks with supported (but not cross-compatible) codecs in MPEG-DASH, e.g. from AAC-LC to Opus, or from AAC-LC to Dolby Digital (if supported).
- The player now tries to hide any native on-screen navigation UI buttons when in fullscreen on mobile devices. This can be overridden with `PlayerConfiguration.ui.fullscreenOptions`.
- Improved HESP playback on Safari macOS and Safari iPadOS.

#### 🐛 Issues

- Fixed an issue where chapter markers would not be shown in the UI.
- Fixed an issue where the font size of subtitles would be too large when entering fullscreen portrait mode.
- Fixed an issue where subtitles were not displayed when enabled programmatically. The subtitles only started to show after several minutes.

#### 👎 Deprecations

- The `Chromecast.source` is deprecated in favor of `Chromecast.chromecastConnectionCallback`.

### Android

#### ✨ Features

- Added `ChromecastConnectionCallback` to dynamically update the source while connecting/disconnecting from Chromecast.

#### 🐛 Issues

- Fixed an issues where using Native IMA with preloading could cause stalls.
- Fixed an issue where setting the target quality of an audio/video track would not work.

#### 👎 Deprecations

- The `Chromecast#setSource(SourceDescription source)` is deprecated in favor of `Chromecast#setChromecastConnectionCallback(ChromecastConnectionCallback callback)`.

### Unified Android

#### 🐛 Issues

- Fixed an issue where DRM protected segments of a DASH stream could sometimes not be decrypted.

### iOS

#### ✨ Features

- Add support for native VR360.
- Added `ChromecastConnectionDelegate` to dynamically update the source while connecting/disconnecting from Chromecast.

#### 🐛 Issues

- Fixed an issue where going native fullscreen on iOS during an adbreak would show the content instead of the ad.

#### 👎 Deprecations

- The `Chromecast.source` is deprecated in favor of `Chromecast.setChromecastConnectionDelegate`.

### tvOS

#### 🐛 Issues

- Fixed an issue where switching content protected assets would not work.

## 🚀 2.89.1 (2021/09/28)

### Web

#### 🐛 Issues

- Fixed playback of Fairplay HLS on MacOS when using Safari 15.
- Fixed an issue where sometimes not all text tracks are removed after a source change when using native playback.

## 🚀 2.89.1 (2021/09/23)

### General

#### ✨ Features

- Added support for both webvtt and ttml renditions in the same subtitle rendition group for the LL-HLS pipeline.
- Added support for DEFAULT and AUTOSELECT rendition tags for LLHLS.
- Add discontinuity support for LLHLS.
- Added support for mediaTimeOffset property in manifest for HESP streams.

#### ⚡ Improvements

- Added retry logic for failing master playlist fetches in the LL-HLS pipeline.

#### 🐛 Issues

- Fixed an issue where the HESP ABR mechanism sometimes would switch to a lower quality immediately after switching to a higher quality.
- Fixed an issue where `player.network.estimator.bandwidth` would be null for a short period after loading a HLS source.
- Fixed an issue where DASH streams containing WebM representations with an `@indexRange` attribute could crash the player.

### Web

#### ✨ Features

- Added support for Vast Errors 303, 403, and 900 in case of wrapper ads.
- Exposed adSystem and creativeId for THEO ads.

#### ⚡ Improvements

- Added support for triggering all error URIs of wrapper VAST ads.

#### 🐛 Issues

- Fixed an issue where the player would stall after replaying certain multi-period DASH streams with non-seamless period transitions.
- Fixed an issue where the player would incorrectly try to seamlessly switch between different audio codecs when not supported by the browser.
- Fixed an issue where captions were not available in the API or UI with a HLS stream using native playback on Safari.
- Fixed an issue where no captions were available when changing from native playback to non native and back to native playback.

### iOS

#### 💥 Breaking Changes

- To add Objective-C support some minor compromises were made, for more details head over to https://docs.theoplayer.com/how-to-guides/13-objective-C/00-introduction.md#changes-to-theoplayer-swift-api

#### ✨ Features

- Added Objective-C compatibility to the iOS SDK APIs. For more details, head over to https://docs.theoplayer.com/how-to-guides/13-objective-C/00-introduction.md

#### 🐛 Issues

- Fixed an issue where the phone disconnected from Chromecast when the app went to background.

### tvOS

#### 💥 Breaking Changes

- To add Objective-C support some minor compromises were made, for more details head over to https://docs.theoplayer.com/how-to-guides/13-objective-C/00-introduction.md#changes-to-theoplayer-swift-api

#### ✨ Features

- Added Objective-C compatibility to the tvOS SDK APIs. For more details, head over to https://docs.theoplayer.com/how-to-guides/13-objective-C/00-introduction.md

### Chromecast

#### 🐛 Issues

- Fixed an issue where the player would periodically stall on older chromecast devices.

## 🚀 2.88.0 (2021/08/31)

### General

#### ✨ Features

- Expose a unique identifier for texttrack related cues.
- Added a CEA608 subtitle fallback to DASH streams containing the CEA708 accessibility tag.
- Added support for multiple CEA608 channels/tracks in DASH streams.
- Added preservation of text track selection across periods.

#### 🐛 Issues

- Fixed an issue where the start and end times of CEA608 cues would sometimes be wrong for multi-period DASH streams.

### Web

#### 💥 Breaking Changes

- Experimental method HespApi.goLive() no longer returns a Promise. Successful completion of the live seek is still signalled by the `golive` event.

#### ✨ Features

- Added seamless period switching support for MPEG-DASH streams containing clear periods, as well as DRM protected periods in the past.

#### ⚡ Improvements

- Support seamless period switching for MPEG-DASH streams containing periods with different DRM systems on desktop browsers.
- Improved HESP ABR algorithm and network estimation.

#### 🐛 Issues

- Fixed an issue where calculated HESP latency could become smaller than the remaining buffer.
- Fixed a fatal buffering error on WebOS 5.1.
- Fixed an issue where multiple audio tracks could be enabled at the same time.
- Fix an issue where quality menu in the UI shows the lowest quality from the array of qualities set by targetQuality
- Fixed an issue where Tizen and webOS devices versions 4.x and below would repeat frames during start of playback.
- Fixed an issue where on Tizen 2.4 and Tizen 3 the player would sometimes stall at the end of a period in a multi-period DASH stream.
- Fixed an issue where the ABR mechanism would never go to a higher bitrate on HESP streams.
- Fix an issue where cue with start time 0 was displayed before playback began.

#### ⚠ Known Limitations

- Filtered out ec-3 audio on Tizen and WebOS by default as most devices failed playout and the codec support check was not useable.

### Android

#### 🐛 Issues

- Fixed an issue where the player tried to initialize Chromecast even if the device does not support it.

#### ⚠ Known Limitations

- Native Google-IMA Ads preloading does not work as expected in some cases. Please explicitly specify `AdPreloadType.NONE` on the `AdsConfiguration.Builder` when configuring THEOplayer.

### iOS

#### 🐛 Issues

- Fixed an issue where setting a DRM protected VerizonMedia source on `player.cast.chromecast.source` did not play while casting.

## 🚀 2.87.0 (2021/07/30)

### General

#### 💥 Breaking Changes

- Changed type of Quality.id, MediaTrack.id and TextTrack.id from number to string. It now is the id found in the DASH manifest instead of an auto-generated id.

#### ✨ Features

- Enabled Thumbnail text tracks by default.
- Thumbnail text tracks now contain cues for multiple periods.
- Exposed EXT-X-DATERANGE metadata through the API for LL-HLS.
- Added support for WebVTT subtitle renditions to the LL-HLS pipeline.
- Added support for all emsg text tracks being accessible during each period.

#### ⚡ Improvements

- Made the parsing of MPEG TS segments more robust by ignoring unusable data instead of terminating playback.

#### 🐛 Issues

- Fixed an issue where setting sources with autoplay enabled on some Tizen devices could cause the player to freeze.
- Fixed an issue where the seekable for a VOD would not include the last few segments for the LL-HLS pipeline.
- Fix LLHLS pipeline making HTTP range request to infinity.
- Fixed an issue where duplicate text track cues would be displayed twice.
- Fix an issue where sideloaded SRT subtitles did not have cues.
- Resolved an issue for DASH where the essential property to indicate tiled thumbnails was not picked up correctly.
- Fixed an issue where the player would not end when seeking to the duration or beyond for some DASH streams.
- Fixed an issue where enabling date ranges in the player configuration did not work.

### Web

#### ⚡ Improvements

- Disable Airplay button for HESP streams.

#### 🐛 Issues

- Fix an issue where the player was unable to change the styling of the texttracks.
- Fixed autoplay detection for WebOS.
- Fix an issue where ttml texttracks would be rendered incorrectly when using the tts:origin attribute.
- Fixed an issue where response headers were missing in the Network API and Content Protection Integration API on Tizen 3.0.
- Fixed an issue where HESP playback doesn't recover after a network drop on iOS Safari.
- Fix an issue where the VAST tracking URL for completion would be triggered when skipping a THEO-advertisement.
- Fixed an issue for HESP live playback where latency control would break after some time.
- Fixed an issue where HESP ABR used to over-estimate available bandwidth by a very high margin on native android.
- Fixed an issue where CEA-608 text tracks would not be rendered for HLS streams.
- Fixed an issue where some VOD DASH streams would fail to start.
- Fix an issue where Yospace reporting would be delayed for DASH sources.

### Android

#### ✨ Features

- Add possibility to set language on Native IMA via the UIConfiguration object

#### 🐛 Issues

- Seek problems with boxes and TVs due to handling decoder flush in other way + DRM starting issue
- Fix an issue where setting a new source while casting the video will play on the sender.
- Fixed an issue where DRM license requests were sometimes failing.
- Fix an issue where caching could not be resumed after being paused.
- Fixing uid brdging and Android 10 DRM playback
- Fixed an issue where the player would sometimes stall when switching periods in a multi-period DASH stream.

### iOS

#### ✨ Features

- Add possibility to set language on Native IMA via the UIConfiguration object

#### ⚠ Known Limitations

- In the lifetime of an application session you can set `UIConfiguration.language` only once for Native IMA. Setting this property after the first player is initialized will be ignored.

### tvOS

#### ✨ Features

- Add possibility to set language on Native IMA via the UIConfiguration object

## 🚀 2.86.1 (2021/07/12)

### Web

#### 🐛 Issues

- Fixed playback of Titanium DRM streams on WebOS.
- Fixed an issue where the VAST tracking URL for completion would be triggered when skipping a THEO-advertisement.

### iOS

#### 🐛 Issues

- Fixed an issue that caused THEOplayer to fail playing a cached stream that has redirection in its source on iOS 12.
- Fixed an issue where DRM protected streams did not play on Airplay in certain scenarios.

## 🚀 2.86.0 (2021/07/05)

### General

#### ✨ Features

- Add support for CBCS encryption in MPEG-DASH streams in supporting browsers.
- Construct HESP content request URLs by applying relative resolution.
- Add support for EMSG v1 boxes.

#### 🐛 Issues

- Fix an issue where in rare cases a sideloaded text track stops updating after a DASH period switch.
- Improved LLHLS bandwidth estimation. Support parsing ENVC and ENCA sample entry MP4 boxes.
- Fixed incorrect LLHLS timeline when switching between renditions.
- Fixed an issue where CBCS encrypted streams would fail to play on Firefox.
- Improved the LLHLS download pipeline to download segments from the live edge if all the parts for that segment are already available.
- Fixed some issues when parsing LLHLS playlist.
- Improved LLHLS ABR behaviour.
- Fix seeking to time 0 in an HLS live stream before the playlist is loaded.
- Fixed an issue where seeking to live would not get into the buffer causing an indefinite stall.
- Fixed an issue where WebVTT subtitle renditions were not loaded correctly when the HLS stream contains discontinuities.

### Web

#### 🐛 Issues

- Fix an issue where HESP latency was too high for certain iOS and Android devices.
- Fix an issue where the big play button is still visible when autoplaying an HESP stream on iOS Safari.
- Fix an issue where a play event is dispatched after a playing event for HESP streams on iOS Safari.
- Fix an issue where sometimes the player is pulsing on iOS Safari when playing HESP streams.
- Fix an edge case where the player could fail to start playing after preloading an HLS stream while the tab was in the background.
- Fixed an issue where for some HLS streams audio would become out of sync with video.
- Fix unintentional warnings logged in the browser console when loading an HLS stream.

#### ⚠ Known Limitations

- No HESP playback supported on iOS Chrome/Firefox for iOS versions lower than 14.

### Android

#### 🐛 Issues

- Fix an issue where the current time would not be shown on the progress bar.
- Fixed an issue where a loadstart event was not dispatched for HESP streams.
- Fix an issue where the play/pause icon is not in sync with the playback state when in Picture in Picture.
- Fix an issue where Picture in Picture window could not be resized on Android 11.
- Fix an issue where destroying THEOplayerView while in fullscreen throw an Exception.

### iOS

#### 💥 Breaking Changes

- Removed support for iOS 9 & 10. The minimum supported iOS version is now 11.0.

#### ✨ Features

- Optimize FairPlay system to improve offline playback.

#### 🐛 Issues

- Fix an issue where the player was not able to select an initial audio track when no `DEFAULT=YES` or `AUTOSELECT=YES` option was specified.
- Fix an issue where the current time would not be shown on the progress bar.
- Fix issue where texttracks were not rendered correctly for picture in picture.
- Fix an issue where pip button was not disabled for native pip while Google IMA and THEO ads were playing.
- Fix a bug that prevents the advertisement from auto-starting when using NativeIma = false

#### ⚠ Known Limitations
- In iOS 12 an offline asset only plays once: after closing the asset, you cannot play it again. To achieve that it needs to be re-cached.

### tvOS

#### 💥 Breaking Changes

- Removed support for tvOS 10. The minimum supported tvOS version is now 11.0.

#### ✨ Features

- Optimize FairPlay system to improve offline playback.

## 🚀 2.85.3 (2021/06/18)

### iOS

#### 🐛 Issues
- Fix an issue where THEOplayer would crash if native Picture in Picture is enabled.

## 🚀 2.85.1 (2021/06/10)

### General

#### 🐛 Issues

- Improved LLHLS bandwidth estimation. Support parsing ENVC and ENCA sample entry MP4 boxes.
- Fix an issue where the player could stall and enter an infinite buffering loop due to rounding errors.

## 🚀 2.85.1 (2021/06/07)

### General

#### 💥 Breaking Changes

- The `estimator` property of the `NetworkEstimator` API is no longer writable, it is superseded by `setEstimator`.

#### ✨ Features

- Implement LLHLS global timeline.

#### ⚡ Improvements

- When playing a multi-period DASH stream containing `EventStream` metadata, the player will now create a single text track (rather than a text track per period) to contain the event metadata cues.
- Improved ABR behaviour for the HESP pipeline.
- Prune more aggressively on DASH streams with long segments.
- Added timeout to segment requests to deal with segment network requests that never complete.

#### 🐛 Issues

- Fixed an issue where some TTML tracks did not render.
- Fix a rare crash when the player performs a seamless period switch at the same time that the currently playing period is removed from the MPD.

### Web

#### 💥 Breaking Changes

- Remove Blob and Document request/response types from Network API.
- Remove HespAbrConfiguration and former HESP ABR mechanism.

#### ✨ Features

- Add initial version of the new HESP ABR mechanism.
- Implement `currentProgramDateTime` for HESP streams.
- Add support UniversalAdId in the THEO ad system.
- Added support for Widevine DRM for HESP streams.
- Add `currentServerLiveTime` and `currentLatency` to the HESP API.

#### ⚡ Improvements

- Support seamless period switching for MPEG-DASH streams containing both clear periods and DRM protected periods.
- Support seamless period switching for MPEG-DASH streams on Tizen version 2.4 and above, and webOS version 3 and above.

#### 🐛 Issues

- Filter on supported codecs before initial variant stream selection.
- Fix an issue where the player would stall indefinitely instead of ending playback at the end of some DASH streams containing `sidx` sub-segments.
- Fixed an issue where playing HESP content on iOS Safari was not possible if the player was starting muted.
- Fix an issue where the currentAds and currentAdbreak API would be empty for non-linear ads.
- Fix an issue where MPEG-DASH live streams with very large media timestamps failed to play on Tizen 2.4.
- Fix an issue where measurers from an externally configured estimator on the (experimental) Network Estimator API could not measure certain requests.
- Fixed an issue where playing an HESP stream on iOS Safari fails with a 'disable casting' error on screen.
- Fix an issue where ended event comes before the adbreakend event on a post roll ad in THEO ad system
- Fix an issue where the post-roll ad was not preloaded on the THEO ad system

### Android

#### ✨ Features

- Add support for Picture in Picture mode.

#### 🐛 Issues

- Fix issue where player would resize after orientation changes when using Google IMA.
- Fix an issue where the player was unable to persist the license for offline playback.

### iOS

#### 💥 Breaking Changes

- Starting from this version the iOS/tvOS SDKs are built with Xcode 12 (Swift 5.3 compatibility).

#### ✨ Features

- Add support for native Picture in Picture.
- Upgrades Google Cast SDK to 4.6.0 which contains iOS 14 specific changes from Google.

#### 🐛 Issues

- Fixed an issue where the chromless player could not start casting on Airplay.

## 🚀 2.84.0 (2021/05/14)

### General

#### 🐛 Issues

- Fixed a regression where some MPEG-DASH livestreams failed to play when the last segment's `S@d` attribute changes between two MPD updates.

## 🚀 2.84.0 (2021/05/07)

### General

#### ✨ Features

- Add support for hexadecimal and octal format suffixes in DASH `SegmentTemplate` URLs.

#### ⚡ Improvements

- Improved the ABR logic to also consider qualities with higher dimensions than the player's dimesions, if there is no exact match.
- Optimized handling of DASH MPDs with long `SegmentTimeline`s.
- Improved the performance of the player on DASH streams.

#### 🐛 Issues

- Fixed an issue where the player would sometimes stall indefinitely when calling play immediately after setting a DASH source.
- Fixed an issue where the player would sometimes error on some HLS streams with Fairplay protected audio and video.
- Fixed a rare edge case where the player would throw an "Invalid duration" error when changing between DASH sources.
- Fixed an issue where the player would sometimes stall indefinitely on some DASH streams when changing the source.
- Fixed an issue where an HLS stream on chrome on a slower network would only play audio while video freezes.
- Fixed an issue where the player tried to parse a WebM segment as an MP4.
- Fixed an issue where the order of the Verizon Media preplay parameters is not maintained.

### Web

#### ✨ Features

- Change experimental `ChromelessPlayer.hesp` API to be available before setting a HESP source.
- Add API and UI support for track and quality selection for HESP streams.
- Expose universalAdIds for Google IMA.
- Make the HESP `latency` property configurable before setting a source and preserved across source changes.
- Change HESP source type to 'application/vnd.theo.hesp+json'.
- Add support for latest HESP manifest version v1.0.0 and drop support for v0 HESP streams.
- Add support for streaming advertisements and ads preloading in the THEO ad system.

#### 🐛 Issues

- Fixed an issue where the player would stall indefinitely on some HLS streams with nonaligned discontinuities on Firefox.
- Fixed an issue where a faulty postroll would restart the content for THEO ads.
- Resolve sequence of incorrect currentProgramDateTime values observed while seeking on iPhone
- Fixed an issue where the player would error on HLS streams with CMAF segments that don't contain a MOOF box.
- Fixed an issue where the player would retry to fetch a segment with a constant delay instead of using exponential backoff.
- Fixed an issue where fullscreen mode was not working for HESP playback on iOS Safari.
- Fixed an issue where the service worker used for HESP playback on iOS Safari could require additional page refreshes to become functional.

#### ⚠ Known Limitations

- Streaming advertisements downloads the highest quality instead of using the ABR-logic on Tizen.
- Seeking during an ad results in content becoming visible on Tizen.

### Android

#### ✨ Features

- Expose universalAdIds for Google IMA.

#### 🐛 Issues

- Fixed an issue where `Chromecast.isCasting()` and `Chromecast.getState()` did not reflect the same state.
- Fixed an issue where using native IMA pausing an advertising is not possible.
- Fixed an issue where for some HLS streams the ABR mechanism did not switch to a higher profile on Android.

### Android TV

#### 🐛 Issues

- Fixed an issue where on FireTV the player would sometimes fail to configure the video codec when switching to a new period.

### iOS

#### ✨ Features

- Expose universalAdIds for Google IMA.
- Added Support for GoogleInteractiveMediaAds framework to 3.14.1.

#### 🐛 Issues

- Fixed an issue where WebVTT subtitles are not rendering with together with thumbnails.
- Fixed an issue where AudioSession interruption did not trigger a `PauseEvent`
- Fixed an issue where WebVTT subtitles would duplicate.

#### ⚠ Known Limitations

- Text track captions are temporarily unavailable.

### tvOS

#### ✨ Features

- Added Support for GoogleInteractiveMediaAds framework to 4.4.1

#### 🐛 Issues

- Fixed an issue where bitmap ID3 subtitles would unintentionally scale up.

#### ⚠ Known Limitations

- The tvOS SDK API presents some issues, which will be fixed on 2.84.1.
- Text track captions are temporarily unavailable.

## 🚀 2.83.0 (2021/04/19)

### General

#### 🐛 Issues

- Resolved a problem where disabling/enabling text tracks could make them go unrendered.

## 🚀 2.83.0 (2021/04/13)

### General

#### 🐛 Issues

- Fix an issue where sometimes the player would get stuck when setting a new source
- Fix an issue where the duration of the player is set to Infinity when the source of a VOD DASH stream is set.
- Fixed an issue where the player would sometimes throw on DRM protected LL-HLS streams.
- Fixed an issue where the player src property would be equal to the Chromecast source while not casting.
- Fix an issue where playing Google DAI stream the source parameter was not passed completely
- Fix an issue where the player fails to jump over an unplayable segment at the start of a DASH VOD stream.

### Web

#### ✨ Features

- Added TypeScript type definitions.
- Add initial support for playback of HESP streams. For more information visit https://www.theoplayer.com/high-efficiency-streaming-protocol.
- Add experimental `ChromelessPlayer.hesp` API for functionality specific to the playback of HESP streams.
- Add `HespTypedSource` for configuration of HESP streams.

#### ⚡ Improvements

- The SIDX boxes are now also cached when caching an MPEG-DASH stream using the caching API.

#### 🐛 Issues

- Fix an issue where the player would discard the streamType property when passing a source configured with Yospace SSAI.
- Fix an issue where the player will be unmuted after a reload or source change when the google ima integration is used.
- Fixes a bug that prevented AirPlay sessions from being re-established.
- Fixed seekable end for LLHLS live streams without parts.
- Fixed seeking the LLHLS player when there is no seekable yet.
- Fix a bug that caused THEOPlayer to show the same sideloaded texttrack twice in the texttracks menu.
- Fixed DRM for Tizen 2.x
- Fixed an issue where the `contentprotectionsuccess` event would not always fire for PlayReady streams on Edge.
- Fixed an issue where the initial bandwidth of an ABR strategy was not retained until a properly measured bandwidth was available.
- Fix an issue where sometimes the player state is not ended when it reaches the end of the stream on Tizen 5.
- Prevent handling of empty webkitkeymessage events
- Fixed an issue where requesting firstFrame and frameRate could return NaN for HLS streams.

### Android

#### 🐛 Issues

- Fix an issue where disconnecting from Chromecast using native Google Cast button didn't stop the receiver.
- Fix an issue where `MediaRouteDialog` does not show if THEOplayerView is not initialized on Activity's `onCreate` method.

### iOS

#### 🐛 Issues

- Fix an issue where a faulty error message would be printed when passing a license through the configuration.
- Fix an issue where playing a cached source multiple times in a row would not work.
- Fix an issue where resetting the source with text tracks would sometimes crash the player.

## 🚀 2.82.0 (2021/03/16)

### General

#### ✨ Features

- Added support for AES-128 encrypted segments for LLHLS streams.

#### ⚡ Improvements

- Improve period switching between periods with different key systems.

#### 🐛 Issues

- Fix an issue where the player would report paused as false when ended.
- Fix a crash when playing a VOD DASH stream that does not contain the expected number of SegmentURL elements.
- Resolved issue where large chunks cause problems with LL-HLS byteranges in preload hints
- Fix an issue where some ad-related events were still dispatched after the player is destroyed.
- Added support for nested regions in ttml cues.
- Fix an issue that caused THEOplayer to stall after doing a short seek between two periods if the buffer started getting segments of the next period.
- Fixed an issue where Preplay parameters in the configuration would be overwritten by generated values.
- Fix seeking in a HLS VOD or event stream with discontinuities sometimes not being frame-accurate.
- Reduced the memory usage for long running viewing sessions where some memory would be kept until the stream ends.
- Fixed an issue where seeking near period edges in a DASH stream would sometimes result in an error.

### Web

#### ✨ Features

- Add media data gap detection and jumping in the LL HLS pipeline.
- Improve the ABR behaviour of the LL HLS pipeline.
- Support the EXT-X-STREAM-INF SCORE attribute in LL HLS pipeline.

#### 🐛 Issues

- Fix a Google IMA issue that caused THEOplayer to only play the last ad if multiple midrolls are scheduled with a timeOffset.
- Disable the Airplay button during an ad.
- Fixed an issue where some FairPlay protected streams failed to start on Safari.
- Fix an issue where thumbnail previews were shown incorrectly on mobile

### Android

#### 🐛 Issues

- Fix an issue where an empty ad XML would result in an endless spinner for Google IMA.
- Fix an issue where connecting to Chromecast using native Google Cast button after player creation was not handled.

### iOS

#### ✨ Features

- Starting from this release, THEOplayer will be available on Cocoapods! For more information on how to get started, go to: https://github.com/THEOplayer/theoplayer-sdk-ios
- The THEOplayer iOS SDK will now be also shipped in the `xcframework` format alongside the `framework` format. For more info on XCframework, refer to the Apple documentation on: https://help.apple.com/xcode/mac/11.4/#/dev6f6ac218b

#### 🐛 Issues

- Fix an issue where setting a metadata title including apostrophe would fail.
- Fix an issue where changing audio tracks freezes THEOplayer.

### tvOS

#### ✨ Features

- Starting from this release, THEOplayer will be available on Cocoapods! For more information on how to get started, go to: https://github.com/THEOplayer/theoplayer-sdk-ios
- The THEOplayer tvOS SDK will now be also shipped in the `xcframework` format alongside the `framework` format. For more info on XCframework, refer to the Apple documentation on: https://help.apple.com/xcode/mac/11.4/#/dev6f6ac218b

#### 🐛 Issues

- Fixes a bug that caused THEOplayerSDK on tvOS to have wrong entries for `UIDeviceFamily`.

## 🚀 2.81.0 (2021/02/24)

### General

#### 🐛 Issues

- Reduced the memory usage for long running viewing sessions where some memory would be kept until the stream ends.

## 🚀 2.81.0 (2021/02/12)

### General

#### ✨ Features

- Implement basic ABR for new LL HLS pipeline.

#### ⚡ Improvements

- Added support for `EventStream@presentationTimeOffset` in MPEG-DASH streams.
- Improved the interval for fetching manifest updates for DASH streams to be closer to the minimumUpdatePeriod.

#### 🐛 Issues

- Fix an issue where the player would sometimes seek to the start of the DVR window when play was called.
- Fix an infinite stall when seeking to the end of a DASH VOD stream on Safari.
- Fix an issue where `creativeAdId` was exposed through `imaAd.creativeId` (instead of `creativeId`)
- Fix an issue where our Google IMA-integration would incorrectly dispatch a playing event when ad is immediately paused
- Fix an issue where the player would hang when loading certain DASH livestreams that only contain segments that are already available.
- Fix an issue where after a seek beyond the end of the seekable range will result in seeking too close to livepoint and starting to stall.

### Web

#### ✨ Features

- Upgrade Youbora adapter version to 6.7.7.

#### 🐛 Issues

- Fix audio only LL-HLS playback.
- Fix an issue where subsequently skipping forward or backward in a DASH stream sometimes incorrectly marks a gap in the buffer.
- Fix an issue where the player would freeze when clicking replay after playing a clipped HLS stream on iOS Safari.
- Fix an issue where repeatedly starting an HLS stream on Safari sometimes results in playback with frame skips.
- Improved gap jumping for less powerful devices such as smart tv's.
- Fix an issue where the player would get stuck near the end of a DASH stream that uses indexed addressing.
- Fixed playing across periods for WebOS 3.x and lower.
- Fix LL HLS pipeline reset logic not working after the player has already played.
- Fix an issue where the player would sometimes stall near a DASH period boundary on Samsung Tizen smart TVs.
- Fixed Moat integration for multiple adblocks use-case

### Android

#### ✨ Features

- Upgrade Youbora plugin version to 6.7.7.

### Android TV

#### 🐛 Issues

- Fixed seeking across periods for Android TV.
- Fix an issue where Google IMA ads were not playing on Android TV.
- Fix an issue where custom DRM integrations would not work on Android TV.

### iOS

#### ⚡ Improvements

- Update Youbora integration to version 6.7.7.

#### 🐛 Issues

- Fix the API of `CertificateRequestCallback` and `LicenseRequestCallback`.
- Fix an issue where fullscreen would not render in the bounds of the application in splitview
- Fixed an issue where the content protection error code was missing.
- Fix an issue where extra WAITING event was thrown.

### tvOS

#### 🐛 Issues

- Fix the API of `CertificateRequestCallback` and `LicenseRequestCallback`.
- Fixed an issue where the content protection error code was missing.

## 🚀 2.80.0 (2021/01/13)

### General

#### 🐛 Issues

- Fix an issue where the `tts:origin` attribute was not correctly processed when positioning subtitles.

### Web

#### 🐛 Issues

- Fix an issue where MOAT events are only send for the first ad in an adbreak
- Fix seeking to live for DASH streams

### iOS

#### 🐛 Issues

- Fixed an issue where paused caching tasks could not resume.
- Fixed an issue where the PiP window's position is incorrect when rotating the device.

## 🚀 2.79.1 (2021/01/06)

### Web

#### 🐛 Issues

- Fix an issue where a DASH stream on chrome on a slower network would only play audio while video freezes.

## 🚀 2.79.0 (2020/12/18)

### General

#### 🐛 Issues

- Fix an issue where parsing certain malformed WebVTT files could crash the player.
- Fix an issue where sometimes a fetched license is not stored in the cache.

### Web

#### ⚡ Improvements

- Use seamless period transitions in DASH where possible. This requires the browser to support codec switching through `SourceBuffer.changeType()`, or the stream to use similar codecs across periods.

#### 🐛 Issues

- Fix several issues related to play/pause during IMA linear ad playback.
- Fix an issue where the player would play data from a previous track after a switch to another track had occurred on WebOs.
- Fix an issue where MOAT events are only send for the first ad in an adbreak
- Fix an issue where the player would sometimes crash when seeking right after the start of a DASH stream.

### Android

#### ✨ Features

- Add basic support for multi-period DASH streams in the experimental rendering pipeline. (Note that the default pipeline already has multi-period support.)

#### 🐛 Issues

- Fix an issue where using ChromecastMetadataImage made casting impossible.
- Fix an issue where the muted value would not be correctly updated on Android

### iOS

#### ✨ Features

- Added ContentProtectionError error type.

#### 🐛 Issues

- Fixed an issue where content protection errors were not sent.

### tvOS

#### ✨ Features

- Added ContentProtectionError error type.

#### 🐛 Issues

- Fixed an issue where content protection errors were not sent.

## 🚀 2.78.1 (2020/12/09)

### Web

#### 🐛 Issues

- Fix an issue where non-WebVTT sideloaded subtitles were not rendered correctly on iOS in Safari

## 🚀 2.78.0 (2020/11/24)

### General

#### ✨ Features

- Addition of a new bufferLookbackWindow configuration property to control how much data should be maintained in the decode buffer.
- Synchronize MPEG-DASH MPD updates with availability window changes in order to avoid stale MPDs.
- Add support for configuring the license via the playerconfiguration

#### ⚡ Improvements

- Added support for retrieving PlayReady PSSH from `<mspr:pro>` element.

#### 🐛 Issues

- Fixed an issue where some HLS streams would not end properly.
- Resolve issue where in stream subtitles are all loaded at once
- Fix an issue where a replay would sometimes fail on short HLS streams.
- Fixed a bug where streams did not send exit events for Id3 cues, when useNativePlayback or contentProtected was set to true in the player source setup

### Web

#### ✨ Features

- Add Network Estimator API for experimental LL-HLS pipeline.

#### 🐛 Issues

- Fix an issue where Widevine protected streams would not play on Hisense VIDAA U3 platforms.
- Improve the ABR algorithm to switch to a higher quality faster on startup of HLS streams.
- Fix an issue where the player would error on HLS streams with empty segments.
- Fix an issue where configuring the JoinStrategy to `disabled` would crash the chromecast UI.

### Android

#### 🐛 Issues

- Fix an issue where setting a null source would crash the application.
- Fix an issue where the app would sometimes crash on calling `requestCurrentAdBreak`.
- Add `cause` for `ErrorEvent`s when applicable.

### iOS

#### ✨ Features

- Add support for external license either by license or licenseUrl in the PlayerConfiguration or in the info.plist.

#### 🐛 Issues

- Fixed an issue where requesting the currentAdBreak would crash

### tvOS

#### ✨ Features

- Add support for external license either by license or licenseUrl in the PlayerConfiguration or in the info.plist.
- Add Support for verizonMedia on tvOS.

## 🚀 2.77.1 (2020/11/17)

### Android

#### 🐛 Issues

- Fix an issue where Chromecast did not auto-connect when CastStrategy is `AUTO`.

### iOS

#### 🐛 Issues

- Fixed a bug where switching audio tracks would fail after updating the label.
- Fixes a bug that prevented a nativeIMA ad from playing when reinstantiating a THEOplayer instance.

### tvOS

#### 🐛 Issues

- Fixed a bug where switching audio tracks would fail after updating the label.

## 🚀 2.77.0 (2020/10/26)

### General

#### ✨ Features

- Support parallel download while caching.

#### 🐛 Issues

- Add jumping over segments which return a 4XX HTTP response code for DASH streams.
- Fix an issue where the player autoplays IMA ads when preload is set
- Fix an issue where for some HLS streams audio drifts away from video, resulting in visible lip sync issues.
- Fix an issue where the player would sometimes stall indefinitely when seeking into a discontinuity on HLS streams.
- Fix an issue where seeking to segment edges sometimes stalls the video for HLS streams.
- Fix an issue where the timing of WebVTT subtitles on live DASH streams was incorrect.
- Fixed an issue where the player could sometimes stall indefinitely in Chrome at the end of a DASH VOD stream.
- Ignore DRM initialisation data other than 'cenc'
- Fixed having only one audio frame in a segment can sometimes break duration calculation.

### Web

#### 🐛 Issues

- Fixed an issue where the `fairplaySkdUrl` was always undefined in `LicenseRequest` for FairPlay protected streams.
- Fix an issue where for some HLS streams the ABR mechanism did not switch to a higher profile.
- Fix an issue where for some HLS streams the ABR mechanism does not switch to higher profiles in case the variant streams in the master playlist do not have a value for the CODECS attribute.
- Fix an issue where THEOplayer.players[0].source returns undefined for every stream in chromeless player.

### Android

#### ✨ Features

- Add `THEOplayerException` to `ErrorEvent`
- Introduce ContentProtectionException and update ContentProtectionErrorEvent.
- Added ContentProtectionIntegration API.

#### 🐛 Issues

- Fix an issue where VerizonMediaResponseDrm returned null for license URLs

#### 👎 Deprecations

- The constructor of THEOplayerConfig is deprecated in favor of `THEOplayerConfig.Builder`.

### iOS

#### ✨ Features

- Add ContentProtectionIntegration API.

#### ⚡ Improvements

- Align TheoError with other SDKs

#### 🐛 Issues

- Fixes an issue where a caching task is not properly removed when its file is deleted.
- Fixes a bug that caused player.source to return nil immediately after setting the source.

#### 👎 Deprecations

- Some of the constructors of the `THEOplayerConfiguration` has been deprecated.

### tvOS

#### ✨ Features

- Add ContentProtectionIntegration API.

#### ⚡ Improvements

- Align TheoError with other SDKs

#### 🐛 Issues

- Fixes a bug that caused player.source to return nil immediately after setting the source.

### Chromecast

#### 🐛 Issues

- Fix an issue where sometimes playback pauses after setting a new source.
- Fix issue where receiver would stop playing upon destroying the player.

## 🚀 2.76.1 (2020/10/01)

### General

#### 🐛 Issues

- Fix an issue where for some HLS streams audio drifts away from video, resulting in visible lip sync issues.

### Web

#### 🐛 Issues

- Fix an issue where for some HLS streams the ABR mechanism did not switch to a higher profile.
- Fix an issue where for some HLS streams the ABR mechanism does not switch to higher profiles in case the variant streams in the master playlist do not have a value for the CODECS attribute.
- Fix an issue where switching from a single quality to automatic quality selection did not work for HLS streams.

## 🚀 2.76.0 (2020/09/28)

### General

#### ⚡ Improvements

- Improve gap marking and jumping for DASH streams

#### 🐛 Issues

- Fix an issue where an `aderror` event was not dispatched correctly if an ad failed to load and `blockContentIfAdError = false`.
- Resolved issue where currentProgramDateTime was being offset by suggestedPresentationDelay.
- Fixed an issue where the player would not use a custom `ContentProtectionIntegrationFactory` if registered with the same `integrationId` as an existing content protection pre-integration.

### Web

#### ✨ Features

- Added the ability to configure customData when using PlayReady DRM.
- Add reporting of total bytes loaded, current bandwidth estimate and number of currently buffered segments for DASH streams to the player metrics API .
- Update Conax Classic configuration properties to be optional.
- Added bitrate property to GoogleImaAd.
- Add error codes to all fatal player errors through `ErrorEvent.errorObject.code`.

#### 🐛 Issues

- Fix an issue where license request and response handlers were called instead of certificate request and response handlers for Widevine Certificate requests for DASH streams.

#### ⚠ Known Limitations

- PlayReady streams are currently not supported on WebOS.
- 4k/8k stream playback is currently unavailable for Tizen.
- Multi-period streams are not supported on WebOS and Tizen

### Android

#### ✨ Features

- Add reporting of total bytes loaded, current bandwidth estimate and number of currently buffered segments for DASH streams to the player metrics API.
- Added bitrate property to GoogleImaAd.

#### 🐛 Issues

- Fix an issue where the ENDED event would not be triggered when seeking using the Native Pipeline.
- Fix an issue where the percentage cached was not reported correctly.
- Fix an issue where segments were not cleaned on player destroy
- Fix an issue where deallocating native rendering player were not handled correctly.

### iOS

#### 💥 Breaking Changes

- Renamed and changed type of `THEOErrorCode` enum cases.
- Removed unused `THEOError.parameters` property.

#### ✨ Features

- Added bitrate property to GoogleImaAd.

#### 🐛 Issues

- Fixed a bug that cause MainThread to freeze for while when dispatching a durationChange event.
- Fix an issue where dragging out PictureInPicture window would fail to enter fullscreen mode.

### tvOS

#### 💥 Breaking Changes

- Renamed and changed type of `THEOErrorCode` enum cases.
- Removed unused `THEOError.parameters` property.

#### 🐛 Issues

- Fixes a bug where Siri remote loses focus when playing ads.

## 🚀 2.75.1 (2020/09/18)

### General

#### ⚡ Improvements

- Do not clear the buffer on a manual quality switch.

## 🚀 2.75.1 (2020/09/03)

### Web

#### 🐛 Issues

- Fix an issue where adbreakend event was not dispatched when the last linear ad was an empty vast ad.
- Fix `THEOplayer.registerContentProtectionIntegration()` not working.

## 🚀 2.75.0 (2020/08/31)

### General

#### 🐛 Issues

- Fix an issue where some HLS streams with CMAF segments containing implicit HE-AAC audio failed to play.
- Fix an issue where switching from a single quality to automatic quality selection would cause an unnecessary rebuffer for DASH streams.

### Web

#### ✨ Features

- Add ContentProtectionIntegration API.

#### 🐛 Issues

- Fix an issue where sometimes the current time was not displayed correctly at the end of a stream.
- Fix an issue where the player would report being paused, while it was playing a HLS FairPlay stream using AirPlay.
- Fix an issue where the player would snap to the beginning of the current segment instead of the current playback position when stopping an AirPlay session for HLS FairPlay streams.
- Fix an issue where the active quality is not yet set when a `playing` event is triggered.

### Android

#### ✨ Features

- Switch to a different representation when a DRM key restriction occurs for native rendering.
- Add `certificate` to `KeySystemConfiguration`

#### 🐛 Issues

- Fix an issue regarding the order of events when using Native Rendering.
- Expose CachingTask `id` property

### iOS

#### ✨ Features

- Fix a bug that caused THEOplayer to show a black screen after playing a SpotX ad.

#### 🐛 Issues

- Fix an issue where Picture-in-Picture window is misplaced after rotating the screen.
- Expose CachingTask `id` property

### tvOS

#### ✨ Features

- Add Support for Native IMA.
- Add support for SpotX ads.

## 🚀 2.74.0 (2020/08/04)

### General

#### ✨ Features

- Add currentProgramDateTime to TimeUpdateEvent.
- Add support for DASH streams with a SegmentTemplate tag with an endnumber and a fixed segment duration.

#### ⚡ Improvements

- Use estimated segment availability for DASH streams where the actual segment availability is unrealistic.
- Add retry functionality for initialization segments of DASH streams.

#### 🐛 Issues

- Fix an issue where seeking backwards in a HLS DVR stream would sometimes jump forwards again.
- Fix an issue where `suggestedPresentationDelay` was not taken into account for the calculation of `currentProgramDateTime` for DASH streams.
- Fix an issue where the ratio passed to the VisibilityObserverCallback did not match the ratio on the visibility API.
- Fix an issue where some TTML subtitles with `tts:extent` on the Root Container Region were not rendered properly.
- Fixed an issue where the player would get stuck buffering for HLS streams with key frames more than 30 seconds apart.
- Fix an issue where the value of the totalAds property of the Google IMA API would sometimes be too low.

### Web

#### 🐛 Issues

- Fix an issue where the learn more button is appearing at the bottom of the player when playing a google dai ad.

### Android

#### ✨ Features

- Add ContentProtectionIntegration API.
- Add Axinom content protection pre-integration for android with nativeRendering enabled.
- Extend TimeUpdateEvent to include programDateTime.
- Embed Exoplayer into THEOplayer SDK

#### ⚡ Improvements

- Ignore in-stream PSSHs if all the key IDs are contained in the active DRM session.

#### 🐛 Issues

- Fix an issue where `PLAYING` event was not dispatched after a `SEEKED` event
- Fix an issue where incorrect buffer size triggered a WAITING event.
- Fix an issue where offline caching would not work for DASH content.

### iOS

#### ✨ Features

- Add the possibility to prevent THEOplayer from managing the AVAudioSession.
- Extend timeUpdate event to include programDateTime.
- Add margin parameter to PictureInPicture configure API.

#### 🐛 Issues

- Fix issue where setting targetBuffer did not work.
- Fix an issue where seeking immediately after setting source would not work.

### tvOS

#### ✨ Features

- Add the possibility to prevent THEOplayer from managing the AVAudioSession.

#### 🐛 Issues

- THEOplayer no longer handles PLAY/PAUSE events from the SiriRemote when chromeless is true
- Fix an issue where seeking immediately after setting source would not work.

## 🚀 2.73.0 (2020/07/07)

### General

#### ⚡ Improvements

- Remove THEOplayer support in error messages in favor of "your service provider".

#### 🐛 Issues

- Fix an issue where the player would sometimes throw an error event, even though it had already automatically recovered from it.
- Fix an issue on HLS where an error would occur on a discontinuity when the stream has either no video or no audio.
- Fix an issue where the player would fetch the wrong segment url for some DASH streams with SegmentTemplate tags.

### Web

#### 🐛 Issues

- Fix an issue where an ad that is adblocked does not result in the content being blocked although the blockContentIfAdError is set.
- Fix an issue where the skip button for verizon media ads had no lateral padding.
- Fix an issue where some Google DAI DASH streams wouldn't resume after a midroll ad.

### Android

#### ✨ Features

- Add Support for Native IMA

#### 🐛 Issues

- Fix an issue where `THEOplayer` crashed between `Activity` lifecycle transitions
- Fixed an issue where using native rendering the quality change caused the player to lag
- Fix an issue where the player sometimes stutters on ABR quality switches when playing H265 streams using native rendering.
- Fix an issue where fullscreen would go into landscape even when `FullScreenOrientationCouple` is set to `false`

### iOS

#### ✨ Features

- Add Support for Native IMA

#### 🐛 Issues

- Fix an issue on iOS where returning from fullscreen mode would break the UI

## 🚀 2.72.0 (2020/06/10)

### General

#### 🐛 Issues

- Resolved issue where text track cues could remain active after a silent fast seek by the media pipeline
- Fix an issue where playback would sometimes fail to start for DASH streams with subsegments whose timestamps are not aligned with their parent segment.
- Fixed issue where MPEG-DASH streams with dynamic manifests where the last period's duration increases every update does not correctly update its duration.
- Fix an issue where sometimes the player would seek to the wrong time for DASH streams.

### Web

#### ✨ Features

- Add playerSuiteVersion API.

#### ⚡ Improvements

- Fix an issue where the player reported buffer length in seconds instead of milliseconds for Conviva analytics.

#### 🐛 Issues

- Fix an edge case for some HLS streams where the player would sometimes download segments multiple times for specific target buffer values.

### Android

#### ✨ Features

- Add a `THEOplayerView.getPlayerSuiteVersion()` api.
- Add timeServer flag for SourceDescription and TypedSource
- Add lowLatency flag to SourceDescription

#### ⚡ Improvements

- Add support for playback of HEVC representations of a DASH stream when `nativeRendering` is enabled.

#### 🐛 Issues

- Fix an issue where Google DAI DASH streams would not play
- Fix an issue where using Native Rendering the ended event was missing

### iOS

#### ✨ Features

- Add a `THEOplayer.playerSuiteVersion` api.
- Add support for Comcast MPX Fairplay DRM
- THEOplayer does not require anymore to be attached to a `ViewController` to switch to Picture-in-Picture mode

#### 🐛 Issues

- Fix bug where accessing audioTracks/videoTracks on track change event would return false states

### Chromecast

#### ✨ Features

- Add playerSuiteVersion API.

### Chromecast CAF

#### ✨ Features

- Add version and playerSuiteVersion API.

## 🚀 2.71.0 (2020/05/26)

### General

#### ✨ Features

- Added support for setting Server Certificates passed in through a SourceDescription.

#### ⚡ Improvements

- Added support for CMAF streams where `trun` atoms don't contain durations.

#### 🐛 Issues

- Fix an issue where subtitles could sometimes flicker, or appear a bit too late.
- Fix an issue where Google IMA ads and content are playing at the same time.
- Fix an issue where playback would sometimes stall on HLS discontinuities.
- Fixed an issue where DASH adaptation sets with codecs `"vtt"` were not recognized as WebVTT.
- Fixed various edge cases where the player would sometimes fail to switch to the next period in a multi-period DASH stream.

### Web

#### ✨ Features

- Add support for Conax FPS `ContentId` flow
- Add `allowedMimeTypes` to `AdsConfiguration`.

#### 🐛 Issues

- Fix an issue where no contentprotection error is thrown when HDCP input is too low
- Fix an issue where a FreeWheel overlay ad would be obscured by another element.
- Fix an issue where the player would sometimes stall indefinitely when seeking over a mid-roll ad in a Google DAI DASH stream.
- Fix an issue where the player would crash if an IMA ad errors using `allowNativeFullscreen` on iOS devices.
- Normalization of THEOplayerAdDescription with improved  handling of the ad source type

### Android

#### ✨ Features

- Add 'Omid' and 'OmidFriendlyObstruction' to the ads API for registering video controls overlaying obstructions as friendly. 
- Migrate from Android Support Libraries to Jetpack (AndroidX) Libraries.

#### ⚡ Improvements

- Make FullScreenActivity extend AppCompatActivity.

#### 🐛 Issues

- Fix an issue where Google DAI DASH streams would not play

#### ⚠ Known Limitations

- Using THEOplayer now requires the AndroidX package.

### iOS

#### 🐛 Issues

- Fix an issue where `THEOAdDescription` on a source was not handled properly

## 🚀 2.70.3 (2020/05/26)

### General

#### 🐛 Issues

- Fix an issue where DASH VOD stream will not play when the publish time is larger than the server time

## 🚀 2.70.2 (2020/05/19)

### iOS

#### ⚡ Improvements

- Update Youbora Analytics integration to version 6.5.5

## 🚀 2.70.1 (2020/05/11)

### iOS

#### 🐛 Issues

- Add parsing for unknown adtype GoogleIMA

## 🚀 2.70.0 (2020/04/23)

### General

#### ✨ Features

- Implemented http-direct schemes: `urn:mpeg:dash:utc:direct:2012` and `urn:mpeg:dash:utc:direct:2014` for the UTCTiming element in MPEG-DASH.
- Added a flag `retainPlaybackRateOnSourceChange` to `PlayerConfiguration` that allows `playbackRate` to be preserved when changing the source.

#### 🐛 Issues

- Fix an issue where the player throws an exception when the lang = `und` on a CEA608 texttrack in DASH.
- Fix an issue where a countdown of one second was shown for Verizon Media ads when the `defaultSkipOffset` was set to `0`.
- Fix an issue where Google IMA ads with a percentage timeOffset would not play.
- Fix an issue where the player could crash when passing empty VOD properties in a live Google DAI source.
- Fix an issue where the content would not resume after a playback error occurred during a THEO advertisement.
- Fix an issue where the player could crash on HLS streams with two consecutive MPEG-TS segments with overlapping decoding timestamps on Safari.
- Fix an issue where `playbackRate` was not properly reset to 1 after a source change.

### Web

#### ⚡ Improvements

- The player will now report a Video Playback Failure to Conviva on a `segmentnotfound` event.
- The player will now report the buffer length to Conviva.

#### 🐛 Issues

- Fix an issue where the player would keep dispatching offline/online events for HLS while being offline.
- Fix an issue in the FreeWheel integration where an uncaught exception was logged in the browser console.
- Fix an issue where THEO ads would have an incorrect skipOffset.
- Fix an issue where THEO companion ads were exposed incorrectly.
- Fix an issue where THEO ads would not always expose its AdBreak.

### Android

#### 🐛 Issues

- Fix an issue where DRM license was not renewed correctly.

### iOS

#### ✨ Features

- Add support for Google DAI `adTagParameters` property.
- Add `assetInfoResponse` event in Verizon Media pre-integration.
- Add OMID API on `player.ads.omid` to help configure the ad viewability measurements.

#### 🐛 Issues

- Fix an issue where seeking to Infinity would not work correctly.
- Fix an issue where Verizon Media preplay event response was missing.

### Chromecast

#### 🐛 Issues

- Fix an issue where the `volume` and `muted` properties on the Chromecast receiver would report incorrect values.
- Fix an issue where setting the `src` property on the Chromecast receiver would not work properly.
- Fix an issue where calling `destroy` on the Chromecast receiver would not work properly.

## 🚀 2.69.2 (2020/04/17)

### iOS

#### 🐛 Issues

- Fix an issue where building with Xcode 11.4 throws an error.

## 🚀 2.69.1 (2020/04/02)

### iOS

#### ⚡ Improvements

- Add a `PiPConfiguration` property to the THEOplayerConfiguration. The Boolean `pictureInPicture` property is deprecated in favor of this property in the THEOplayerConfiguration. The `PiPConfiguration` needs to be initialized with the Boolean `retainPresentationModeOnSourceChange` property.

## 🚀 2.69.0 (2020/03/30)

### General

#### ⚡ Improvements

- Updated support for Conviva SDK 2.151.0.37016 .

#### 🐛 Issues

- Fix an issue where the `muted`, `volume` and `playbackRate` properties were not preserved after setting a new DASH source.
- Fix an issue where the resume tracking event is dispatched when an ad starts playing for the first time.
- Fix an issue where the playback rate of Verizon Media advertisements would not always be set to 1.
- Fix an issue where the Yospace session was still active after destroying the player.
- Fix an issue where the player could stall indefinitely when a DASH live stream contains a period that is no longer available.
- Fix an issue where the player could crash when playing a DASH live stream with many very short periods.
- Fix an issue where an HLS stream that starts with a negative video decoding timestamp could stall after seeking.
- Fix an issue where Titanium DRM license acquisition error message was inconsistent in Widevine and Playready.
- Fix an issue where the displayed live offset (in mobile UI) would sometimes be a positive number.
- Fix an issue where Verizon Media ads were not skipped when the skip button was clicked.

### Web

#### ✨ Features

- ErrorEvent will now contain an optional errorObject, which is a THEOError containing more information about the error.

#### 🐛 Issues

- Fix an issue where text tracks with no cues were exposed on Safari when using native playback.

### Android

#### ✨ Features

- Add a `nativeRenderingEnabled` flag to the TypedSource API to configure native video rendering. The experimentalRenderingEnabled property is deprecated in favor of this property.
- Add a `nativeUiRenderingEnabled` flag to the TypedSource API to configure native UI rendering.

### iOS

#### ✨ Features

- Add property `retainPresentationModeOnSourceChange` to the Picture-in-Picture API.
- Add support for BuyDRM KeyOS Fairplay.
- `ErrorEvent` will now contain an optional `errorObject`, containing more information about the error.
- Add `player.network` API for fatal and non-fatal network related errors. Events that occur will be of type `NetworkErrorEvent` and contain a NetworkError as `error`.

#### ⚡ Improvements

- Adding a listener for 'error' on the player will now also show fatal network-related errors.

#### 🐛 Issues

- Fix an issue where passing GoogleDAI api key was not working.
- Fix an issue where the verizon media notification bar would overlap the player seekbar.
- Fix an issue where caching was not working for DRM protected streams.
- Fix an issue where Picture-in-picture would have a gray overlay on top of the player view.
- Fix an issue where Picture-in-picture would have a wrong visibility.
- Fix an issue where Picture-in-picture would mask views and prevent tapping.
- Fix an issue where Application would crash if THEOplayer is destroyed while Picture-in-picture is enabled.
- Fix an issue where PROGRESS event comes before DURATION_CHANGE event.
- Fix an issue where memory was not released when destroying THEOplayer.

### tvOS

#### ✨ Features

- Add support for BuyDRM KeyOS Fairplay.
- `ErrorEvent` will now contain an optional `errorObject`, containing more information about the error.
- Add `player.network` API for fatal and non-fatal network related errors. Events that occur will be of type `NetworkErrorEvent` and contain a NetworkError as `error`.

#### ⚡ Improvements

- Adding a listener for 'error' on the player will now also show fatal network-related errors.

#### 🐛 Issues

- Fix an issue where PROGRESS event comes before DURATION_CHANGE event.

## 🚀 2.68.1 (2020/03/20)

### General

#### 🐛 Issues

- Fix an issue where an MPEG-DASH stream containing audio segments with a certain timescale failed to start playing.

## 🚀 2.68.0 (2020/02/21)

### General

#### ✨ Features

- Implemented `player.network.online` along with `online` and `offline` events for DASH live streams with updating manifests.
- Add a flag for using native playback for HLS streams.

#### ⚡ Improvements

- When a DASH live stream becomes unavailable, the player will now always keep attempting to reconnect rather than halting after a certain amount of tries.
- The player now lazily loads the segment indexes (signaled by an `indexRange` attribute) in an MPEG-DASH stream.
- When the player fails to fetch an HLS manifest, it will no longer retry the request with "cache-busting" HTTP headers.

#### 🐛 Issues

- Fix an issue where the video playback error would not be reported to Conviva.
- Fix an issue where the quality submenu would sometimes not expand completely.
- Fix an issue where the position of settings menu is not changed when exiting the fullscreen mode.
- Fix an issue where `player.source` would report an incorrect value when setting the source to `undefined`.
- Fix an issue where `PersistVolume` configuration would not work.
- Fix an issue where playback would no longer succeed after a source change when using Google IMA ads.
- Fix an issue where the player would not respect a seek before the first play.
- Fix an issue where a `loadeddata` event is dispatched for each period in a multi-period DASH stream.
- Fix an issue where a Google IMA mid-roll ad would sometimes be played as a pre-roll ad after a source change.
- Fix an issue where the player would sometimes try to fetch an segment before it is available in a low-latency MPEG-DASH stream.
- Fix an issue where auto-playing an HLS event stream would sometimes not start at the live point.
- Fix an issue where DRM streams would not resume after playing IMA ads in native fullscreen.
- Fix an issue where returning from an IMA ad in `allowNativeFullscreen` would sometimes result in a seek to the start of a DVR-stream.
- Fix an issue where HLS CMAF streams without a default sample duration for their AAC audio failed to play.
- Fix an issue where a DASH live stream containing multiple audio tracks with different `SegmentTimeline`s would sometimes fail to play.
- Fix an issue where HLS date range cues would sometimes have their start time set to `NaN`.
- Fix an issue where the click-through link propagates to all FreeWheel ads.
- Fix an issue where the playback speed different from the default value would not be restored after playing an IMA ad with nativeFullScreen.
- Fix an issue where FreeWheel ads would start replaying in the background.
- Fix an issue where seeking to the end of an MPEG-DASH period would result in a seek to the start of the period.

### Web

#### ✨ Features

- Add support for exposing `admetadata` and `adbuffering` events in Google IMA integration.
- Add `pingerror` event in Verizon Media pre-integration.
- Add support to report `adStart` and `adEnd` to Conviva analytics.

#### ⚡ Improvements

- Use `SessionStorage` over `LocalStorage` for session data for improved GDPR compliance.
- Remove fallback for cookies on platforms that do not support `LocalStorage` or `SessionStorage`

#### 🐛 Issues

- Fix an issue where seeking during AirPlay causes a brief seeking glitch.
- Fix an issue where the player failed to load when `window.__esModule` was set by another script.
- Fix an issue where the `adbreakbegin` event precedes the `play` event for pre-rolls in the THEO ad system.
- Fix an issue where a `readystatechange` would not update the player state for Conviva analytics.
- Fix an issue where DASH and HLS streams failed to play on older LG webOS smart TVs.
- Fix an issue where the player would sometimes seek to the wrong frame after ending an AirPlay session.

### Android

#### ✨ Features

- Add `pingerror` event in Verizon Media pre-integration.

#### ⚡ Improvements

- Set video Quality with the (getter) video Quality is now possible as they are of the same type.

#### 🐛 Issues

- Fix an issue where switching to automatic quality selection on a video track was not possible upon passing null.
- Fix an issue where RemoveCue event did not have a Cue property.

### iOS

#### ✨ Features

- Add AirPlay API.
- Add `pingerror` event in Verizon Media pre-integration.

#### 🐛 Issues

- Fix an issue where THEOplayer was not aware of AirPlay state changes.
- Fix an issue where playback on device resets/gives error after stopping AirPlay from TV.
- Fix an issue where video playback was failing when passing an ad with timeOffset as integer.
- Fix an issue where `WAITING` event was not dispatched correctly.
- Fix an issue where `CANPLAY` and `CANPLAYTHROUGH` events were not dispatched correctly.
- Fix an issue where playback rate goes back to normal after seeking or pausing.
- Fix an issue where video playback stops after an IMA ad-roll.

### Chromecast

#### 🐛 Issues

- Fix an issue where incorrect `currentTime` values caused UI and seeking issues while casting a live stream to Chromecast.

#### ⚠ Known Limitations

- THEOplayer pauses after playing a Google IMA advertisement.

## 🚀 2.67.0 (2020/01/17)

### General

#### 🐛 Issues

- Fix an issue where the player was not sized correctly for some customers.
- Fix an issue where the player was not able to select audio track with `AUTOSELECT=YES` option.
- Fix an issue where the player did not fall back to the default license acquisition URLs for VuDRM when playing PlayReady or Widevine protected content.
- Fix an issue where the player would sometimes stay in paused state while clicking a paused IMA advertisement
- Fix an issue where the player was not able to select an initial audio track when no `DEFAULT=YES` or `AUTOSELECT=YES` option was specified.
- Fix an issue where setting a `targetQuality` would cause a duplicate item in the quality selector when switching to another period.
- Fix an issue where text tracks would be duplicated for HLS streams with Google IMA ads and `allowNativeFullscreen` enabled.

### Web

#### ✨ Features

- Add integration for Comcast Fairplay DRM
- Add support for iOS native fullscreen for Google IMA advertisements when `allowNativeFullscreen` is configured.

#### 🐛 Issues

- Fix an issue where FreeWheel's video state is not always correctly reported.
- Fix an issue in the THEO ad system where the clickthrough url did not change between successive VAST linear ads.

#### ⚠ Known Limitations

- Due to platform restrictions iPhone devices only show the limited native fullscreen UI, which excludes the IMA clickthrough button.

### Android

#### ✨ Features

- Add support for Verizon Media Server-Side Ad Insertion.

#### ⚡ Improvements

- Improve accessibility of player for keyboard and screenreader users.

### iOS

#### ✨ Features

- Add support for Verizon Media Server-Side Ad Insertion.

## 🚀 2.66.0 (2019/12/09)

### General

#### ⚡ Improvements

- Disabled native video element controls during playback of FreeWheel ads.
- When playing a HLS stream with multiple tracks in the MPEG-TS segments, the player now selects the first track to align with the Apple reference implementation.
- Improve DRM capability checking.
- Minor improvements to AirPlayer.
- Fix an issue where time-related properties were reported incorrectly for live streams while casting.
- Fix an issue where the player would dispatch a `durationchange` event with value `NaN` when switching to Chromecast.
- Improve dispatch of events while switching to Chromecast.

#### 🐛 Issues

- Fix an issue where the player unnecessarily switched to alternative quality renditions after manual quality switch.
- Fix an issue where the player always started the next period in the lowest quality when playing a DASH stream on Android.
- Fix an issue where start and end times for MP4-embedded WebVTT subtitles in multi-period DASH streams were miscalculated.
- Fix an issue where the player selects the wrong quality to calculate the program date time.
- Fix an issue where the player would briefly display a spinner while switching periods in a DASH stream.
- Fix an issue where the player would sometimes stall indefinitely when switching periods in a DASH stream.

### Web

#### ✨ Features

- Add `content-protection` type and sub-types in Network API's request object.
- Add support for Google DAI DASH.
- Add Google DAI stream request configuration options `adTagParameters`, `authToken` and `streamActivityMonitorID`.

#### ⚡ Improvements

- Dispatch an `updateadbreak` event in Google IMA integration to signal that the AdBreak's timeOffset has been updated. This is the case when an ad has been scheduled using percentages.

#### 🐛 Issues

- Fix an issue where using percentages for scheduling ads in Google IMA would not work.

### Android

#### ✨ Features

- Add support for Google IMA Dynamic Ad Insertion (DAI).

#### 🐛 Issues

- Fix an issue where `NoClassDefFoundError` is thrown on devices with an API lower than 19.
- Fix an issue where `ConcurrentModificationException` is thrown while casting to Chromecast.
- Fix an issue where `requestCurrentProgramDateTime` crashes the application.

#### ⚠ Known Limitations

- When playing a Google DAI advertisement the THEOplayer UI is disabled.
- When playing a Google DAI advertisement and the application goes to background and then to foreground, the advertisement automatically continues playing.

### iOS

#### ✨ Features

- Add `CastStrategy.auto` to automatically connect to a Chromecast session when the device is connected.
- Add support for Google IMA Dynamic Ad Insertion (DAI).

#### 🐛 Issues

- Fix a memory leak issue while casting to Chromecast.
- Fix an issue where using the Reachability Module causes some interference with THEOplayer.
- Fix an issue where `AdError` event was not triggered.

#### ⚠ Known Limitations

- THEOplayer has API limitations on iOS 10. For more information please contact our support team.
- When playing a Google DAI advertisement the THEOplayer UI is disabled.
- When playing a Google DAI advertisement and the application goes to background and then to foreground, the advertisement automatically continues playing.

### Chromecast

#### 🐛 Issues

- Fix an issue where switching audio tracks while casting took a long time to take effect.

## 🚀 2.65.1 (2019/11/17)

### iOS

#### ⚡ Improvements

- Introduced module stability from Swift 5.1

### tvOS

#### ⚡ Improvements

- Introduced module stability from Swift 5.1

## 🚀 2.65.0 (2019/11/08)

### General

#### ✨ Features

- Add support for CEA-608 captions in DASH streams.

#### ⚡ Improvements

- Ensure all analytics updates are sent before the page unloads.

#### 🐛 Issues

- Fix an issue where the Chromecast `statechange` event was dispatched too early when disconnecting from a receiver.

### Web

#### 🐛 Issues

- Fix an issue where the `mediaUrl` of Google IMA ads is sometimes not exposed.
- Fix an issue where DASH streams would sometimes not replay in Edge/IE.

### Chromecast

#### 🐛 Issues

- Fix an issue where subtitle metadata that is too long would cover too much of the screen while casting.

## 🚀 2.64.1 (2019/11/08)

### General

#### 🐛 Issues

- Fix an issue where DASH streams would not play on Firefox.

## 🚀 2.64.0 (2019/10/04)

### General

#### ✨ Features

- Add support for alternative audio renditions without `URI` attribute in HLS.

#### ⚡ Improvements

- Do not create audio and video tracks for variant streams with unsupported codecs in HLS.

#### 🐛 Issues

- Fix an issue where track switches would not always work for multi-period DASH streams.
- Fix an issue where ad-related UI elements would reappear in later ads.
- Fix an issue where multi-audio HLS streams would sometimes fail to play.
- Fix an issue where the UI would sometimes not show the buffered ranges correctly in the progress bar.
- Fix an issue in the IMA integration where sequential ads can not always be paused.

### Web

#### ✨ Features

- Add `content-protection` type and sub-types in Network API's request object.

#### ⚠ Known Limitations

- Setting IMA mid-roll using percentage does not work.

### Android

#### ✨ Features

- Add a new strategy `CastStrategy.AUTO` which enable automatically casting a new source when the device is connected to Chromecast.

#### 🐛 Issues

- Fix an issue where a new player instance couldn't connect to an existing Chromecast session.

#### ⚠ Known Limitations

- Setting IMA mid-roll using percentage does not work.

### iOS

#### ✨ Features

- Add support for versioning in the `THEOplayer.version` API.

#### ⚡ Improvements

- Removed default user-agent from SpotX integration to be compatible with iOS 13. If your implementation relies on this default behaviour, please follow our [workaround guide](https://docs.portal.theoplayer.com/docs/docs/getting-started/ios/ios-sdk-ads#spotx-pre-integration)

#### 🐛 Issues

- Fix an issue where seek did not work after the video has ended.
- Fix an issue where IMA ad didn't play on iOS.

#### ⚠ Known Limitations

- Setting IMA mid-roll does not work.

## 🚀 2.63.0 (2019/09/11)

### General

#### 🐛 Issues

- Fix an issue where the player wouldn't throw an error when the status of a media session key would be `output-restricted` or `internal-error`.
- Fix an issue in the THEO ad system where Tracking Events in the wrapper wouldn't fire for linear VAST ads.
- Fix an issue where live DASH streams with unsupported representations would crash after a manifest update.
- Fix an issue where playback would not be resumed at the correct position after seeking over an ad.
- Fix consistency issues with UI tooltips.

### Web

#### ✨ Features

- Add distinction between main and descriptions kind for HLS audio tracks.
- Upgrade Yospace integration from 1.2.x to 1.7.9.
- Add support for DASH with EMSG for the Yospace integration.
- Add an ABR strategy which optimizes playback of low latency chunked streams. This can be enabled by adding `lowLatency` in [TypedSource](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-typedsource/).

#### ⚡ Improvements

- Improved behaviour when placing focus on the volume bar to improve keyboard accessibility.

#### 🐛 Issues

- Fix an issue where content would not play fullscreen after playing a pre-roll ad in fullscreen on iOS Safari.

#### 👎 Deprecations

- Removed pre-integration for MediaMelon QBR.

### Android

#### ✨ Features

- Add support for `#EXT-X-DATERANGE` tags in HLS through the `player.textTracks` API.

#### 🐛 Issues

- Fix an issue where replay did not work while connected to Chromecast.
- Fix an issue where seek paused the video while connected to Chromecast.
- Fix an issue where the duration of the stream was not correct while connected to Chromecast.
- Fix an issue where the application would crash when changing the Chromecast session.
- Fix an issue on Edge and Internet Explorer where seeking to the end of a DASH stream or replaying it would not work correctly.

#### ⚠ Known Limitations

- Replay while connected to Chromecast does not work. [See workaround](https://support.theoplayer.com/hc/en-us/articles/360007668719#replay-while-connected-to-chromecast)

### iOS

#### ✨ Features

- Add distinction between main and descriptions kind for HLS audio tracks.
- Add support for native `UIGestureRecognizer` through `THEOplayer` API.
- Add support for aspect ratio in the `THEOplayer.fullscreen` API.

#### 🐛 Issues

- Fix an issue where replay did not work while connected to Chromecast.
- Fix an issue where seek paused the video while connected to Chromecast.
- Fix an issue when selecting one audio track would disable all audio tracks.
- Fix an issue where THEOplayer would deactivate `AVAudioSession` when the application goes to background.

#### ⚠ Known Limitations

- Replay while connected to Chromecast does not work. [See workaround](https://support.theoplayer.com/hc/en-us/articles/360007668719#replay-while-connected-to-chromecast)
- Leaving a Chromecast session while playing a DASH stream causes an unrecoverable error. [See workaround](https://support.theoplayer.com/hc/en-us/articles/360007668719#leaving-chromecast-session-playing-DASH-stream)

## 🚀 2.61.0 (2019/07/17)

### Web

#### ✨ Features

- Add support for WebVTT subtitles embedded in ISOBMFF segments.
- Add support for `#EXT-X-DATERANGE` tags in HLS through the `player.textTracks` API.

#### ⚡ Improvements

- Improve Agama integration by upgrading support to EMP Client version 3.7.
- Improve Agama integration by suspending reporting on the sender side while the content is being cast.

#### 🐛 Issues

- Fix an issue where the ABR of the player would not always correctly switch when using response interceptors.
- Fix an issue where the ABR of the player would not always correctly switch on streams with small segments.

### Android

#### ✨ Features

- Add support for Agama analytics.
- Add support for WebVTT subtitles embedded in ISOBMFF segments.

#### 🐛 Issues

- Fix an issue where requesting video width/height sometimes caused an exception.

### iOS

#### ✨ Features

- Add support for Agama Analytics.

#### 🐛 Issues

- Fix an issue where device volume was not reported properly.
- Fix an issue where advertisement volume was not reported properly.
- Fix an issue where the ProgressEvent was not reported.

### Chromecast

#### ✨ Features

- Add support for Agama analytics on Chromecast.

## 🚀 2.60.0 (2019/07/01)

### General

#### ✨ Features

- Add distinction between captions and subtitles kind of text tracks for DASH manifests.
- Add distinction between captions and subtitles kind of text tracks for HLS manifests with `#EXT-X-MEDIA` tags.

#### ⚡ Improvements

- Improve buffer segment selection and fetching for DASH streams.

#### 🐛 Issues

- There are known major issues with the Chromecast feature in this release. These are planned to be fixed in 2.61.1.
- Fix an issue where the player would sometimes hang on a discontinuity edge on Safari.
- Fix an issue where the player would not dispatch an `adend` event when ending a non-linear ad.
- Fix an issue where Conviva analytics would not work correctly if ads were configured in the source description.
- Fix an issue where sometimes a TTML text track was created even when the stream does not contain TTML data.
- Fix an issue where it was not possible to pause or play by clicking on the video area while casting to Chromecast.
- Fix an issue where the direction indicator did not update when looking around in a VR video.
- Fix an issue where the player sometimes leaked DRM key sessions after playing multiple DRM-protected streams.

### Web

#### ✨ Features

- Add support for inspecting ads and ad breaks from Google IMA through the ads API. This also adds the following events to the ads API: `addad`, `updatead`, `addadbreak`, `removeadbreak`.
- Add `systemCode` to `player.error` and `contentprotectionerror` event for key system specific error codes.

#### ⚡ Improvements

- Improve the startup time of the player when playing an IMA pre-roll advertisement.

#### 🐛 Issues

- Fix an issue where the fullscreen button tooltip did not change to 'Exit fullscreen' when in fullscreen mode.

### Android

#### ✨ Features

- Add flag to `THEOplayerGlobal` to force use `customWebView` for minapi16
- Add the ability to join a Chromecast session
- Add support for offline Uplynk DRM
- Add support for multi key session streams
- Add support for manifest-only PSSH streams
- Add support for offline multi key session streams

#### 🐛 Issues

- Fix an issue where Google IMA Ad events were not dispatched correctly.

### iOS

#### ✨ Features

- Update iOS SDK to Swift 5.0
- Add the ability to join a Chromecast session
- Recognise TextTrack accessibility kind values

#### 🐛 Issues

- Fix an issue where leaving a Chromecast session, the channel was not cleared properly.
- Fix an issue where Google IMA Ad events were not dispatched correctly.

#### 👎 Deprecations

- Objective-C is no longer supported. Please update to the Swift API. If you have questions, please contact our support team.

### tvOS

#### ✨ Features

- Update tvOS SDK to Swift 5.0

### Chromecast

#### 🐛 Issues

- Fix an issue where it was not possible to set the target quality while casting.

## 🚀 2.59.0 (2019/05/07)

### General

#### ✨ Features

- Add support for rendering of sideloaded WebVTT text tracks in native fullscreen on iOS Safari.

#### ⚡ Improvements

- Improve scrubbing while casting to Chromecast.

#### 🐛 Issues

- Fix an issue where AES-128 encrypted HLS streams failed to play.
- Fix an issue where certain HLS streams failed to play in some browsers when using `player.src`.
- Fix an issue where certain HLS streams stalled near the end of the video.
- Fix an issue where seeking after a stream ends restarts the media at the beginning.
- Fix an issue where Chromecast sender had incorrect property values after media ended.
- Fix an issue where Chromecast sender could not replay or seek after media ended.
- Fix an issue where Chromecast sender could not manually switch audio or video.
- Fix an issue where Chromecast receiver volume was set to sender volume.
- Fix an issue with UI controls after starting a Chromecast session.
- Fix a issue with HLS playback where incomplete audio frames are not always correctly silenced.
- Fix an issue where `adbreakbegin` event would sometimes dispatch too often in the THEO ad system.
- Fix an issue where the player would sometimes give double `ended` events after a Google IMA post-roll.
- Fix an issue where the `played` property would sometimes return incorrect values for HLS streams.
- Fix an issue where a clipped video would briefly show its unclipped duration in the controls.

### Web

#### 🐛 Issues

- Fix an issue where images with parentheses in the URL did not render correctly.
- Fix an issue where the AirPlay target selection menu would not show again after closing it previously.
- Fix an issue where calling destroy on the player would not remove the global beforeunload event handler
- Fix an issue where errors appeared in the browser console while playing an audio-only HLS stream.

### Android

#### 🐛 Issues

- Fix an issue that caused crash when MOAT analytics was enabled but the ad did not support MOAT tracking
- Fix an issue where inBandMetadataTrackDispatchType was missing when ADDTRACK event occurs

### iOS

#### 👎 Deprecations

- Objective-C support is deprecated, and is scheduled to be removed in the next version (2.60.0). Please update to the Swift API. If you have questions, please contact our support team.

#### 🐛 Issues

- Fix an issue with playing VR/360 source.
- Fix an issue where isDestroyed property was not correctly set.
- Fix a Google IMA issue where "Learn More" (top right corner) and content countdown (bottom left corner) are partially hidden on iPhoneX(+).
- Fix an issue where the UI sometimes showed an incorrect selected audio track.
- Fix an issue that shows indefinite spinner when seeking while using Airplay.
- Fix an issue when subtitle font size increased during scrubbing/seeking.
- Fix an issue when player state was not properly synced with AirPlay state.

### Chromecast

#### 🐛 Issues

- Fix an issue that prevented volumeChanged event from being triggered
- Fix missing pause icon

## 🚀 2.58.0 (2019/03/26)

### General

#### ⚡ Improvements

- Improve internal asynchronous handling of synchronous API methods (setting source / reset / destroy)

### Web

#### ✨ Features

- Add integration for Uplynk Fairplay DRM

#### 🐛 Issues

- Fix an issue where the player would show an incorrect buffering spinner when using Conviva analytics

### iOS

#### ✨ Features

- Add integration for Uplynk Fairplay DRM

### tvOS

#### ✨ Features

- Add integration for Uplynk Fairplay DRM

## 🚀 2.57.0 (2019/03/11)

### Web

#### ✨ Features

- Add integration for Azure Widevine DRM
- Add integration for Verimatrix Fairplay DRM

#### 🐛 Issues

- Fix an issue where the UI sometimes did not display the available video qualities of a multi-audio HLS stream.
- Fix an issue where HLS streams on Internet Explorer on Windows 7 would not play.
- Fix an issue where up-next would keep redirecting on single-page web apps.
- Fix an issue where up-next would appear during linear advertisements.

### iOS

#### ✨ Features

- Added support for Verimatrix MultiRights FairPlay DRM.

#### 🐛 Issues

- Fixed an issue where ad related events were not reported correctly.
- Fixed an issue where setting the current time for Chromecast did not work.

## 🚀 2.56.0 (2019/02/25)

### Web

#### 🐛 Issues

- Fix an issue where the wrong content type was sent to the chromecast

### Android

#### ✨ Features

- Added support for Axinom Widevine DRM.
- Implement track switching for experimental rendering pipeline.

#### ⚡ Improvements

- Improve minapi16 variant to use the packaged WebView replacement in case an older WebView Chrome version is detected on the device.
- Various improvements to experimental rendering pipeline.

#### 🐛 Issues

- Various fixes to experimental rendering pipeline.

### Android TV

#### ✨ Features

- Added support for Axinom Widevine DRM.
- Implement track switching for experimental rendering pipeline.

#### ⚡ Improvements

- Various improvements to experimental rendering pipeline.

#### 🐛 Issues

- Various fixes to experimental rendering pipeline.

### iOS

#### ✨ Features

- Improved native playback logic.
- Added support for Axinom FairPlay DRM.
- Added support for offline Xstream FairPlay DRM.
- Extend the ABR API with two new properties: preferredPeakBitRate and preferredMaximumResolution

#### 🐛 Issues

- Fixed an issue where Chromecast device selection was not visible.
- Fixed an issue where device and statusbar orientation were not correct when caching was enabled.
- Fixed an issue where a caching task did not transition to the error state
- Fixed an issue where caching a DRMToday protected stream did not work
- Removed SpotX Advertising Identifier for non-SpotX customers.

### Chromecast

#### 🐛 Issues

- Fix an issue where the chromecast ended up in the pause state for mp4

## 🚀 2.55.0 (2019/02/11)

### Web

#### 🐛 Issues

- Fix an issue where sometimes HLS subtitle renditions with `DEFAULT=YES` were not automatically selected.
- Fix an issue where TTML subtitles would sometimes get stuck.
- Fix an issue where scheduling an ad would resume playback on a paused player.
- Fix an issue where SpotX ads would not always be able to play.
- Fix an issue where Picture-in-picture would not behave correctly in Safari.
- Fix an issue where thumbnails would not behave correctly.

## 🚀 2.54.0 (2019/01/28)

### Web

#### ✨ Features

- Added integration with Axinom DRM

#### 🐛 Issues

- Fix an issue where Google IMA would not always correctly switch between two ads.
- Fix an issue with seeking before the player is fully initialized.

### iOS

#### ✨ Features

- Added license renewal for offline DRM streams.

#### 🐛 Issues

- Fixed an issue with Fairplay DRM protected streams.
- Fixed issue when playing multiple DRM protected streams simultaneously.
- Fixed an issue where Chromecast couldn't register a channel.
- Fix an issue with scrubbing when DRM protected stream was played.

## 🚀 2.53.0 (2019/01/15)

### Web

#### ✨ Features

- Added support for Vimond FairPlay DRM.
- Added support for CMAF segments in HLS.

#### 🐛 Issues

- Fix an issue where DASH livestreams would report seekable.start as zero incorrectly.
- Fix an issue where streams using SIDX would not play.

### iOS

#### ✨ Features

- Added support for Vimond FairPlay DRM.

## 🚀 2.52.0 (2019/01/02)

### Web

#### ✨ Features

- Added the possibility to configure title attribute in the Now Playing section of the Control Center
- Allow vmap/adrule to be scheduled dynamically (via `player.ads.schedule`) by addition of the `adSource` API.
- Add PlayReady playback support for Tizen 3.0.

#### 🐛 Issues

- Fix an issue where a clip would sometimes play beyond its end time.
- Fix an issue where some IMA ads using a custom timeOffset wouldn't play
- Fix an issue where the player would sometimes accidentally seek back to the start of the stream

### Android

#### ✨ Features

- Added license renewal for offline DRM streams.

#### ⚡ Improvements

- Improved concurrent offline license caching behaviour.

### Android TV

#### ✨ Features

- Added license renewal for offline DRM streams.

#### ⚡ Improvements

- Improved concurrent offline license caching behaviour.

### iOS

#### ✨ Features

- Added the possibility to configure title attribute in the Now Playing section of the Control Center
- Extended caching API with the ability to pause and resume a caching task.
- Extended caching API with the ability to select desired quality.
- Extended caching API with the ability to see the total bytes cached.

#### 🐛 Issues

- Fixed an issue with caching DRM protected streams

## 🚀 2.51.0 (2018/12/17)

### Web

#### 🐛 Issues

- Fix an issue where some HLS streams using `#EXT-X-BYTERANGE` stall indefinitely.
- Fix an issue where Conviva would not be notified that the manifest is unavailable if it was detected before session creation.
- Fix an issue where subtitles UI cannot toggle when the `manifestMetadataTrack` property is set to true on iOS devices.
- Fix an issue where Firefox on Android sometimes crashes when loading a HLS stream containing MP3 audio.

### Android

#### ✨ Features

- Added playback of Xstream Widevine DRM streams.

### Android TV

#### ✨ Features

- Added playback of Xstream Widevine DRM streams.

### iOS

#### 🐛 Issues

- Fixed an issue with Airplay DRM protected streams
- Fixed an issue when leaving fullscreen mode the orienation behaviour was incorrect

## 🚀 2.50.0 (2018/12/04)

### Web

#### ⚡ Improvements

- Improve the interoperability of a player with a poster and a source with a poster.
- Improved start-up time for MPEG-DASH streams using `SegmentBase@indexRange`.

#### 🐛 Issues

- Fix an issue with live HLS streams with manifest metadata tracks
- Fix an issue where playback would sometimes not start at the live point in a HLS livestream with DVR.
- Fix an issue where adend/adbreakend were not dispatched when the source changed while IMA was playing an ad.
- Fix an issue where resuming a paused task would result in an incorrect size estimation.
- Fix an issue where not all impression beacons would be tracked in the THEO ad system.
- Fix an issue where audio track selection was unavailable when no audio stream was marked as default.

### iOS

#### ⚡ Improvements

- Extended Yospace API with access to the Yospace session

## 🚀 2.49.0 (2018/11/20)

### Web

#### ✨ Features

- Fix an issue where the seekable range of HLS streams with tag `#EXT-X-PLAYLIST-TYPE:EVENT` would not start at zero.

#### 🐛 Issues

- Fix an issue where CEA608 Captions would not always render.
- Fix an issue where Google IMA would not always switch back to content on very slow internet connections.
- Fix an issue in THEO ad system where ads would not start playing after an empty VAST had been scheduled.
- Fix a regression where HLS streams sometimes fail to start on IE11 and Android.

### Android

#### ✨ Features

- Extended the caching API with pause and resume functionality.
- Extended the caching API with quality selection functionality.
- Extended the caching API with task size estimation and actual task size.

### iOS

#### 🐛 Issues

- Fixed an issue with DRM protected streams

### tvOS

#### ✨ Features

- TvOS UI Integrated for TVML applications.

## 🚀 2.48.0 (2018/11/06)

### Web

#### ⚡ Improvements

- Fix an issue where the player would sometimes stall indefinitely on period switches in DASH streams.

#### 🐛 Issues

- Fix an issue with certain content security policy (CSP) directives.

### Android

#### ✨ Features

- Extended the player with the metrics API

### Android TV

#### ✨ Features

- Extended the player with the metrics API

### iOS

#### ✨ Features

- Extended the player with the metrics API

## 🚀 2.47.0 (2018/10/23)

### Web

#### ✨ Features

- Added support for `UTCTiming` elements in `MediaPresentationDescription`s as defined in [DASH IF IOP v4.2, section 4.7.3](https://dashif.org/docs/DASH-IF-IOP-v4.2-clean.htm#_Ref263688476).
- Added Xstream DRM pre-integration for Widevine and Playready.
- Added support for AirPlay with FairPlay protected streams.

#### ⚡ Improvements

- Improved handling of DRM-protected content.
- Added log level to Agama configuration

#### 🐛 Issues

- Fix an issue where Google DAI's and Google IMA's clickthrough were not clickable.
- Fix an issue where text tracks were visible on the local player when casting.
- Fix an issue where the player would sometimes stall indefinitely when some tracks had differing start times.
- Fix an issue where the clickthrough for an ad was not clickable.

### iOS

#### 🐛 Issues

- Fixed an issue where the layout was incorrect when embedding a player in a UIScrollView with content inset adjustment turned off.

## 🚀 2.46.0 (2018/10/08)

### Web

#### ✨ Features

- Added QoS `droppedVideoFrames` metrics
- Added support for `availabilityTimeOffset` in `SegmentTemplate`-based DASH streams.
- Added QoS `corruptedVideoFrames` metrics
- Added `agama` integration

#### ⚡ Improvements

- Improved setting autoplay parameters for Google IMA Ad requests.
- Improved error handling when worker files are unavailable due to CORS configuration.

#### 🐛 Issues

- Fix an issue where the player was not able to play a source which consisted solely of advertisements.
- Fix an issue where the player fails to buffer when DASH segments are slightly misaligned.
- Fix an issue where the StreamOne integration attempted to track an end of stream event, even if the integration was not enabled.
- Fix an issue where SegmentList initialization segment urls were not always correctly resolved.
- Fix an issue in the THEOplayer ad integration where specific ads would only play in the lowest quality on Safari.
- Fix an issue where destroying a player instance caused the Chromecast session of another instance to end.

### iOS

#### 🐛 Issues

- Fixed an issue where multiple player instances contend for full-screen mode, causing glitchy behavior.

## 🚀 2.45.0 (2018/09/10)

### Web

#### ✨ Features

- Added `retainPresentationModeOnSourceChange` flag on the picture-in-picture configuration.
- Added basic support for chunked CMAF in MPEG-DASH streams.

#### 🐛 Issues

- Fix an issue where playback would sometimes stop near a discontinuity for some HLS streams.
- Fix an issue with DASH streams using SegmentBase.
- Fix an issue where the `Referer` header was no longer set on HTTP requests.
- Fix an issue where subtitles were automatically turned off after switching away from the main content - e.g. for advertisement or casting.
- Fix an issue where the player sometimes stutters after appending a segment in DASH streams with a large timescale.
- Fix an issue where segments were sometimes shifted by a frame, causing the player to stall.

### Android

#### ✨ Features

- Integrated YoSpace Ad Management Android SDK

### iOS

#### ✨ Features

- Integrated YoSpace Ad Management Android SDK

## 🚀 2.44.0 (2018/08/27)

### Web

#### ✨ Features

- Added support for legacy EME implementations.
- Added support for in-stream DASH thumbnail tracks as defined in [DASH IF IOP v4.2, section 6.2.6](https://dashif.org/wp-content/uploads/2018/04/DASH-IF-IOP-v4.2-clean.htm#_Toc511040840).

#### ⚡ Improvements

- Improved dynamic sizing for thumbnails, e.g. in fullscreen mode.

#### 🐛 Issues

- Fix an issue where native fullscreen was not possible when using muted autoplay on iOS Safari.
- Fix an issue where the player would seek indefinitely.
- Fix an issue where the `bitrate` option in `player.abr.strategy.metadata` was incorrectly interpreted as bytes per second (instead of bits per second).

### iOS

#### 🐛 Issues

- Fixed an issue when playback was not started.
- Fixed an issue when FairPlay stream was not started.
- Fixed an issue where the player did not go to fullscreen.
- Fixed an issue where some events were sending Infinity as currentTime

### tvOS

#### 🐛 Issues

- Fixed an issue when playback was not started.
- Fixed an issue when FairPlay stream was not started.
- Fixed an issue where the player did not go to fullscreen.
- Fixed an issue where some events were sending Infinity as currentTime

## 🚀 2.43.0 (2018/08/10)

### Web

#### ✨ Features

- Added active quality label to UI.
- Added FreeWheel integration.
- Added upcoming ad notification feature

#### 🐛 Issues

- Fix an issue where the player would stall indefinitely on some DASH live streams from Microsoft Azure.
- Fixed an issue where ABR bandwith calculation was affected by network interceptors
- Fix an issue where the player would not start playback on some DASH live streams.
- Fix an issue where the Xstream ticket acquisition URL could not be specified through the API
- Fix an issue where ended state could not always be reached for MPEG-DASH playback

### Chromecast

#### 🐛 Issues

- Fix stuttering issue on Chromecast

## 🚀 2.42.0 (2018/07/25)

### Web

#### ✨ Features

- Add Xstream DRM pre-integration for FairPlay

#### 🐛 Issues

- Fix an issue where the duration of a DASH stream was not correctly calculated for SegmentBase-based timelines.
- Fix an issue where playback rate does not update for DASH streams.

### iOS

#### ✨ Features

- Add Xstream DRM pre-integration

#### 🐛 Issues

- Fixed an issue where subtitle track is being played/displayed several times

### tvOS

#### ✨ Features

- Add Xstream DRM pre-integration

## 🚀 2.41.0 (2018/07/17)

### Web

#### ⚡ Improvements

- Improved detection of invalid libraryLocation configuration.
- Improved handling of missing segments: when a segment is missing in one quality, the player will now also attempt downloading in other qualities.

#### 🐛 Issues

- Fix an issue where certain segments would not be downloaded in Firefox.
- Improved robustness of player concerning dealing with failing to update a live DASH manifest
- Fixed an issue with setting the targetQuality of a track to automatic.
- Fixed an issue where manual quality switches in FireFox caused a glitch.

### iOS

#### ✨ Features

- Added adaptive bitrate API.

### tvOS

#### ✨ Features

- Added adaptive bitrate API.

## 🚀 2.40.0 (2018/07/02)

### Web

#### ⚡ Improvements

- Improved performance for DASH streams with a large number of Periods.
- Added support for Titanium PlayReady version 3.
- Added qualities property to targetqualitychanged event.

#### 🐛 Issues

- Fix an issue where preload of a live-stream would result in playback at the start of live window
- Fix an issue where the error message is not properly cleared after changing the source.
- Fix an issue where IMA ads unset picture-in-picture mode.
- Fix an issue where DASH manifests without initialisation segment specifications were not handled correctly.
- Fix an issue where some domains can't be whitelisted.
- Fix an issue where the poster image was overlaying when setting it, now poster-images are reset when you set the source afterwards.

### Android

#### ✨ Features

- Extended adaptive bitrate API with strategies

#### 🐛 Issues

- Fix a minor issue for certain DASH streams

### Android TV

#### ✨ Features

- Extended adaptive bitrate API with strategies

### iOS

#### ⚡ Improvements

- Improve performance when multiple FairPlay keys are requested in parallel.

### tvOS

#### ⚡ Improvements

- Improve performance when multiple FairPlay keys are requested in parallel.

## 🚀 2.39.1 (2018/06/20)

### Chromecast

#### ✨ Features

- Pre-integration with Adobe Heartbeat Analytics for Chromecast.

## 🚀 2.39.0 (2018/06/18)

### Web

#### ⚡ Improvements

- Improved DASH buffering logic to handle manifest inaccuracies better.

#### 🐛 Issues

- Fix an issue where DASH streams would not play back on IE11.
- Fix bad performance when playing DASH streams with multiple Widevine DRM keys on Firefox.
- Fix program date time when segments vary in duration.
- Fix an issue in Edge where live streams using large timestamps would freeze.
- Fix a small FairPlay bug on iOS 9.

### Android

#### 🐛 Issues

- Fix an issue for issue for Android 4.1 devices

#### ✨ Features

- Added caching
- Added offline license DRMtoday playback

### iOS

#### 🐛 Issues

- Fix an issue with iOS 9

### tvOS

#### 🐛 Issues

- Fix an issue when destroying a player.

## 🚀 2.38.0 (2018/06/04)

### Web

#### ✨ Features

- Add clipping support
- Add looping support
- Support extra query parameters in SpotX Ads

#### 🐛 Issues

- Fix an issue where the player would sometimes get stuck at the start of a live stream
- Fix an issue where we do not dispatch a playing event after an Google IMA ad has already started
- Fix an issue where the player would crash on a native Edge bug
- Fixed an issue with rendering SMPTE-TT text tracks.

### Android

#### 🐛 Issues

- Fix an issue for devices with Android 4.4 or older

#### ✨ Features

- Support extra query parameters for SpotX Ads

### iOS

#### ✨ Features

- Allow automatically entering picture-in-picture mode when the player goes out of view.
- Support for downloading and offline playback of FairPlay-protected content.
- Support extra query parameters in SpotX Ads

#### 🐛 Issues

- Fixed an error where the timeupdate event was always sending Infinity when playing FairPlay streams
- Support for SMPTE-TT subtitles.
- Fixed some issues with FairPlay playback in chromeless mode.
- Fix an issue with Irdeto FairPlay DRM integration.
- Fixed a small full-screen orientation coupling bug.

### tvOS

#### 🐛 Issues

- Fixed an error where the timeupdate event was always sending Infinity when playing FairPlay streams
- Fixed some issues with FairPlay playback in chromeless mode.

## 🚀 2.37.0 (2018/05/22)

### Web

#### ✨ Features

- Added support for the Titanium DRM token-based authentication flow for Widevine and Fairplay.

#### 🐛 Issues

- Fix an issue where the viewport would jump down when a poster image larger than the viewport was set.
- Fix an issue where IE11/W7 playback stalls after a discontinuity.
- Fix an issue where WebVTT font size was too big in portrait fullscreen mode
- Fix an issue where sometimes the wrong active quality is reported for HLS streams.
- Fix an issue where player couldn't handle a non-linear ad set as a pre-roll
- Fix an issue where the last scheduled advertisement was not being requested by IMA
- Improved handling of different formats for timeOffset/skipOffset for all ad systems

### Android

#### ✨ Features

- Expose the target buffer API.

### iOS

#### ✨ Features

- Caching API: Offline playback of non-DRM protected streams.

#### ⚡ Improvements

- Various performance improvements.

#### 🐛 Issues

- Fixed a bug where certain VR streams could not load because of CORS issues.

### tvOS

#### ✨ Features

- Support for SMPTE-TT subtitles.
- Playback of FairPlay protected streams with DRMtoday and VUDRM.

## 🚀 2.36.0 (2018/05/07)

### Web

#### ✨ Features

- Added firstFrame property to quality
- Added `update` event to `Quality` objects, dispatched when any property changes
- Added support for SMPTE-TT subtitles embedded in ID3 metadata.
- Provide ability to set target buffer duration.

#### 🐛 Issues

- Fix an issue where a failed segment download during caching logged a warning in the browser console.
- Fix an issue where the player was not able to seek to the start of a stream due to a bug in Edge.
- Fix an issue where the player would hang when playing CEA608 subtitles.
- Fix an issue with multiple concurrent caching tasks.
- Fix an issue where rounding errors in DASH segments would sometimes confuse the player's download logic.
- Fix an issue in Chrome where content hangs after changing qualities.

### Android

#### ✨ Features

- Added CastLabs DRMToday pre-integration.

### iOS

#### ⚡ Improvements

- Marked the THEOplayer class as open, so that it can be extended by integrators.

#### 🐛 Issues

- Fixed a bug where FairPlay videos would not render.

### tvOS

#### ⚡ Improvements

- Marked the THEOplayer class as open, so that it can be extended by integrators.

#### 🐛 Issues

- Fixed a bug where FairPlay videos would not render.

## 🚀 2.35.0 (2018/04/23)

### Web

#### ✨ Features

- Added possibility to configure the time between the live point and the end of the manifest.
- Added exposing Conviva client and session ID
- Added Azure Media Services pre-integration for FairPlay DRM.

#### 🐛 Issues

- Fix an issue where seeking in an MPEG-DASH stream sometimes seeks to the wrong time.
- Fix an issue with setting `preload` and then changing source to an MPEG-DASH stream.
- Fix an issue where FairPlay-protected streams would fail to start.
- Fix an issue where HLS streams would fail to start with an empty `contentProtection` configuration.
- Fix an issue where side-loaded WebVTT text tracks with a UTF-8 BOM were not correctly recognized.
- Fix an issue where seeking to the end of a DASH stream did not always load the last segment.
- Fix an issue where caching tasks are incorrectly removed when offline
- Fix an issue with the currentTime of DASH livestreams when chromecasting.

### Android

#### ✨ Features

- Smaller library file size.

### iOS

#### ✨ Features

- Added DRMToday and Vudrm pre-integrations for FairPlay DRM.

#### ⚡ Improvements

- Improved UI and UX for VR stereo mode.

## 🚀 2.34.0 (2018/04/09)

### Web

#### ✨ Features

- Added CastLabs DRMToday pre-integration.
- Added MediaMelon SmartSight analytics pre-integration.

#### ⚡ Improvements

- [Related Content API](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-relatedcontent/): added `show` and `hide` events.
- Google IMA integration: pause advertisement while visiting click through website.
- Dispatch `destroy` event when `player.destroy()` is called.
- Fall back to alternative sources in `SourceDescription` when DRM of initial source is not supported.

#### 🐛 Issues

- Fix an issue where an internal polyfill for `Array.prototype.includes` accidentally leaked to the global scope.
- Fix an issue where sometimes Chrome would freeze on certain MPEG-DASH streams.
- Fix an issue where an extraneous `seeking` event occurs before an HLS stream starts playing.
- Fix an issue where player-level and source-level analytics configurations were not correctly combined.
- Fix an issue where an empty captions text track is added on iOS for streams that don't contain captions.
- Fix an issue with the ExpressPlay integration for Fairplay-protected streams.
- Fix an issue where a mute toggle is displayed on environments that don't support programmatic muting.
- Fix an issue with `preload` for HLS streams.
- Fix an issue with seeking to live when the manifest reports starts of fragments that are slightly off.
- Fix an issue where the player would detect too many audio tracks in some HLS streams on iOS.

## 🚀 2.33.0 (2018/03/26)

### Web

#### ✨ Features

- Added Chromecast global session sharing.

#### ⚡ Improvements

- [Network API](https://docs.portal.theoplayer.com/docs/docs/miscellaneous/miscellaneous-3-use-network-api): added `subtype` property to identify initialization segment requests.
- [ABR API](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-abrconfiguration): added `bandwidth` strategy.

#### 🐛 Issues

- Fix an issue where the VR display is sized incorrectly on iPhone X.
- Fix an issue with switching audio tracks in DRM-protected MPEG-DASH streams on Firefox.
- Fix an issue where sometimes the wrong subtitles stay on the screen after seeking.
- Fix an issue with StreamOne analytics.
- Fix an issue with unsupported adaptation sets in MPEG-DASH streams.
- Fix an issue with setting `vr.direction` before starting playback.
- Fix an issue with HLS segments with missing audio frames.
- Fix an issue with VR on Chrome 65 and higher.

## 🚀 2.32.0 (2018/03/12)

### Web

#### ✨ Features

- Added StreamOne analytics pre-integration.
- Added ExpressPlay FairPlay DRM pre-integration.

#### 🐛 Issues

- Fix an issue where some ad error events were not reported for Google IMA.
- Fix an issue where malformed MPEG-TS packets may crash the player.
- Fix an issue where some streams repeatedly stall after every segment in IE11.
- Fix an issue where segments starting with a B-frame sometimes cause stalls in Safari and Edge.
- Fix an issue where FairPlay-protected streams would fail to start.

## 🚀 2.31.0 (2018/02/26)

### Web

#### ⚡ Improvements

- Improve recovery when a segment in a HLS variant stream cannot be fetched.

#### 🐛 Issues

- Fix an issue where player sometimes crashes when rapidly switching between DRM-protected streams.
- Fix an issue when seeking in a multi-period DASH live stream.
- Fix an issue when combining VR content with Google IMA ads.
- Fix an issue where credentials were not sent when requesting certain DASH segments.
- Fix an issue where a pinch gesture activates native fullscreen on iOS.
- Fix various issues with casting to Chromecast.

## 🚀 2.30.1 (2018/02/14)

### Web

#### ✨ Features

- Added Chromecast Receiver SDK.
- Added [adaptive bitrate (ABR) API](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-abrconfiguration).
- Added Castlabs DRMToday pre-integration.
- Added optimal media file selection for linear advertisements.

#### ⚡ Improvements

- Improve advertisement error messages.
- Improve automatic picture-in-picture to only activate when playback was previously started.

#### 🐛 Issues

- Fix an issue with 360 degrees videos sometimes glitching on iOS around quality switches.
- Fix an issue with muted autoplay and Google IMA pre-rolls ads on mobile.
- Fix an issue with Widevine DRM on Firefox 52 ESR.
- Fix an issue with Irdeto FairPlay DRM.
- Fix an issue with replaying an ended video on Internet Explorer 11.
- Fix an issue with some video-only streams not starting.
- Fix an issue with HLS streams containing MP3 audio not starting.
- Fix an issue where scrubber sometimes goes outside of seekbar on some live streams.
- Fix an issue where subtitles are sometimes displayed twice on iOS.
- Fix an issue where subtitles are displayed too small.
- Fix an issue with WebVTT subtitles embedded in MPEG-DASH stream.
- Fix an issue where CEA-608 captions sometimes stop showing after switching to a different stream.
- Fix various issues with advertisements.

## 🚀 2.29.0 (2018/01/15)

### Web

#### ✨ Features

- Allow moving the seek bar inside the control bar using the `theo-seekbar-inside-controls` CSS class.

#### 🐛 Issues

- Fix an issue preventing some HLS livestreams from starting playback.
- Fix an issue with pre-roll advertisements on iOS 9.
- Fix an issue with ID3 metadata on iOS.
- Fix an issue causing the Chromecast button to sometimes disappear when using multiple players.

## 🚀 2.28.0 (2018/01/03)

### Web

#### ✨ Features

- Added support for loading THEOplayer from a cached Google page
- Added THEOplayer.features property
- Added CEA-608 text track styling

#### ⚡ Improvements

- Improve DASH gap handling

#### 🐛 Issues

- Fix an issue where ads did not play correctly when using muted autoplay and Google IMA
- Make sure the ended event is dispatched with empty VAST postroll in Google IMA pre-integration

## 🚀 2.27.0 (2017/12/15)

### Web

#### ✨ Features

- [Moat analytics pre-integration](http://demo.theoplayer.com/moat-analytics-pre-integration)
- Support [async loading](https://demo.theoplayer.com/async-library-loading) of THEOplayer library

#### ⚡ Improvements

- Improve CEA608 handling across quality switches
- Internet explorer: use responseUrl from http response
- Improve ABR for HLS streams on mobile
- Improve handling of missing keyframes
- MPEG-DASH stream dispatch only one error event on a load error

#### 🐛 Issues

- Fix an issue with ID3 on iOS not correctly activating
- Fix issue with HLS packager
- Solved an issue where last segment was not always packaged in HLS stream

## 🚀 2.26.0 (2017/12/04)

### Web

#### ✨ Features

- Set custom labels on qualities
- Allow quality grouping with custom labels
- [Destroy method](https://docs.portal.theoplayer.com/docs/docs/faq/using-player-api/using-player-api-0-introduction) on player
- [Network API](https://docs.portal.theoplayer.com/docs/docs/miscellaneous/miscellaneous-3-use-network-api)

#### ⚡ Improvements

- Youbora Analytics also track advertisements
- Improve error messages

#### 🐛 Issues

- Solved an issue with chromeless player and poster image

## 🚀 2.25.0 (2017/11/20)

### Web

#### ✨ Features

- [Easy UI skinning](https://demo.theoplayer.com/ui-skinning).

#### ⚡ Improvements

- Irdeto integration: minor update.
- Prefill for SpotX device data.
- Support for HLS current program date time on iOS.
- Android SDK:
- Google IMA: pass in custom IMA settings when scheduling an ad.
- General UI improvements.

#### 🐛 Issues

- Solved an issue related to rendering of subtitles.
- Solved an issue where iOS SDK would sometimes crash.
- Solved an issue where video content started playing in the background when a video ad is playing on Safari.
- Solved an issue where mute and unmute with video ad didn't work.

## 🚀 2.24.0 (2017/11/15)

### Web

#### ✨ Features

- Configure Google IMA ads UI language using [UIConfiguration.language](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-uiconfiguration)
- Enable [configuration of ad preload type](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-adsconfiguration)

#### ⚡ Improvements

- Remove border around player on focus
- Improve Google IMA ad playback on Safari 11

## 🚀 2.23.0 (2017/11/07)

### Web

#### ✨ Features

- Google IMA:

#### ⚡ Improvements

- Improved handling of text tracks

## 🚀 2.22.0 (2017/10/23)

### Web

#### ✨ Features

- Added MediaMelon [pre-integration](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-mediamelonconfiguration/)
- Added [allowMixedContent](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-playerconfiguration) player configuration parameter
- Added Youbora analytics pre-integration

#### ⚡ Improvements

- Improved [muted autoplay](https://docs.portal.theoplayer.com/docs/docs/faq/using-player-api/using-player-api-0-introduction)
- Styling improvements for web and mobile

#### 🐛 Issues

- Google IMA: Improvements for non-linear ads and VPAID ads

## 🚀 2.21.0 (2017/09/28)

### Web

#### ✨ Features

- Added the [Network API](https://docs.portal.theoplayer.com/docs/docs/miscellaneous/miscellaneous-3-use-network-api)
- Added [allowNativeFullscreen](https://docs.portal.theoplayer.com/docs/docs/faq/using-player-api/using-player-api-0-introduction) to the player configuration. This allows using fullscreen on the video element directly instead of on the whole player.
- Added support for Conax FairPlay
- Added a generic metadata property to [SourceDescription](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-sourcedescription/) to allow for more descriptive sources.
- Added the [adskip](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-event) event to the Advertisement API to indicate ads that are being skipped
- Added support for more timeOffset formats for [GoogleIMAAdDescriptions](https://docs.portal.theoplayer.com/docs/api-reference/theoplayer-googleimaad/) (scheduling ads without VMAP): timestamps, "start", "end" and percentages (for VOD)

#### ⚡ Improvements

- Improved the UI for the Up Next feature
- Improved the handling of ID3 metadata on iOS
- Improved the adskip button to feature the poster image

#### 🐛 Issues

- Solved an issue where muted autoplay on iOS could not be unmuted
- Solved an issue where the ended event was not always dispatched when IMA ads were used
- Solved an issue where tooltip for currentTime was not updating correctly on mobile web when switching to picture-in-picture

## 🚀 2.20.0 (2017/09/12)

### Web

#### ✨ Features

- Allow THEOplayer to be used as an Audio Node within the Web Audio API

#### ⚡ Improvements

- Improved the player's big play button
- Improved the UI of Picture-in-Picture on the web
- Improved the UI of the up-next panel
- Various improvements to the player's internals
- Improved the UI of the top control bar
- Improved the player to play content as smoothly as possible

#### 🐛 Issues

- Solved an issue where a wrong play/pause icon would show on mobile platforms after returning from tab inactivity
- Solved an issue where the player sometimes stalls when the PTS/DTS offset changes on a discontinuity edge
- Solved a memory leak issue
- Solved a freezing issue on Chrome/Opera
- Solved an issue where sideloaded text tracks appear twice in the subtitle menu
- Solved an issue where the player would not be correctly resized for 4:3 videos
- Solved an issue with mouse behaviour when using 360/VR

## 🚀 2.19.0 (2017/08/28)

### Web

#### ✨ Features

- Added support for KeyOS Fairplay

#### ⚡ Improvements

- Improved the player's download prioritization
- Improved handling of offline DASH manifests
- Improved playback of multiple sequential advertisements
- Various updates and improvements to the player's codebase

#### 🐛 Issues

- Solved an issue where playing certain DASH manifests could trigger a memory leak
- Solved an issue where the player would stall playback on certain HLS live streams
- Solved an issue where including the Google IMA script would cause the player to pause after a single tap on mobile devices
- Solved an issue where the language selection menu was not always correctly updated
- Solved an issue where the player's manifest downloads would not be correctly cleared after setting a new source
- Solved an issue where the 'Up Next' UI did not always show at the end of a video

## 🚀 2.18.0 (2017/08/18)

### Web

#### ✨ Features

- Added support for DASH SegmentTemplate parameter prefix padding
- Added support for setting a list of qualities as target qualities ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-mediatrack/))
- Added a right-click menu to the player's UI
- Added support for Irdeto Registered User Flows ([documentation](https://docs.portal.theoplayer.com/docs/docs/advanced-topics/content-protection/content-protection-2-multi-drm-partners/))

#### ⚡ Improvements

- Improved handling of unsupported DASH tracks
- Various improvements to the player's internals
- Improved handling of streams with empty or missing segments

#### 🐛 Issues

- Solved an issue where the player did not correctly recover from an unavailable Google IMA ad
- Solved various minor issues with advertisement playback
- Solved an issue where the useCredentials flag was not taken into account correctly
- Solved an issue where ID3 cuechange events where not correctly fired on iOS
- Solved an issue where multiple players on the same page would not share a Chromecast session correctly
- Solved an issue where the player's bandwidth algorithm estimation gave bad results
- Solved an issue where DASH emsg events were not correctly exposed

#### API Updates

- Removed all support for the previously deprecated drmController API

## 🚀 2.17.0 (2017/07/28)

### Web

#### ✨ Features

- Added support for Irdeto DRM ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-irdetodrmconfiguration/))
- Added support for a countdown timer to the Up Next feature ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-upnext/))
- Added player visibility detection API ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-visibility/))
- Added localization support ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-uiconfiguration), [code example](https://demo.theoplayer.com/language-localization))

#### ⚡ Improvements

- Improved Conviva integration
- Added support for a close button to skippable non-linear ads
- Support passing Widevine certificate in SourceDescription ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-widevinekeysystemconfiguration/))
- Postponed call to ad servers happen until a video play indication

#### 🐛 Issues

- Solved an issue where closing social sharing and recommended menus don't restore the previous playback state

## 🚀 2.16.0 (2017/07/17)

### Web

#### ✨ Features

- Added support for muted autoplay on specific mobile devices

#### ⚡ Improvements

- Improved the player's ABR on mobile devices
- Improved the player's mobile UI
- Various improvements to the player's internal buffering architecture
- Improved support for advertisement scheduling in live streams

#### 🐛 Issues

- Solved an issue where the last segment of certain VOD HLS streams was never fetched
- Solved an issue where cues for embedded text tracks where not updated correctly
- Solved an issue where calling player.stop() caused an error in Edge

## 🚀 2.15.0 (2017/07/05)

### Web

#### ✨ Features

- Added up-next API ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-upnext/))
- Added support for Titanium FairPlay
- Added Yospace API ([documentation](https://docs.portal.theoplayer.com/docs/api-reference/theoplayer-yospace/))
- Added related content API ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-relatedcontent/))
- Added social sharing API ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-socialsharing/))
- Added Conviva analytics pre-integration ([documentation](https://docs.portal.theoplayer.com/docs/api-reference/theoplayer-convivaconfiguration))

#### ⚡ Improvements

- Various improvements to the player's internal playback architecture

## 🚀 2.14.0 (2017/06/09)

### Web

#### 🐛 Issues

- Solved an issue where track lists did not dispatch `change` events
- Solved an issue where an error was thrown when calling `stop()`
- Solved various minor issues with advertisements

## 🚀 2.13.0 (2017/05/26)

### Web

#### ✨ Features

- Added pre-integration for SpotX advertisements ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-spotxaddescription/))

#### ⚡ Improvements

- Various improvements to the player's internal playback architecture

#### 🐛 Issues

- Solved an issue where hovering the player in VR mode would sometimes trigger an error
- Solved an issue where the player blocked playback on older versions of Chrome (< 52)
- Solved an issue where an edge case would stall HLS playback
- Solved an issue where sideloaded text tracks where not displayed in fullscreen mode on iPad

## 🚀 2.12.1 (2017/05/22)

### Web

#### ✨ Features

- Added the trackType, track and quality properties to the segmentnotfound event ([documentation](https://docs.portal.theoplayer.com/docs/docs/faq/using-player-api/using-player-api-0-introduction))

## 🚀 2.12.0 (2017/05/11)

### Web

#### ✨ Features

- Added support for 360° and VR videos ([documentation](https://docs.portal.theoplayer.com/docs/next/add-ons/playback/vr/vr-1-how-to-use/))
- Added canvas API ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-canvas/))
- Added pre-integration support for server-side ad insertion with Yospace ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-yospaceserversideadinsertionconfiguration/))

#### ⚡ Improvements

- Side-loaded text tracks are now lazy-loaded
- Chromecast: various minor improvements

#### 🐛 Issues

- Solved an issue with autoplay and Fairplay content in Safari on macOS
- Solved various minor issues

## 🚀 2.11.0 (2017/04/27)

### Web

#### ✨ Features

- Added support for chapters on the seek bar
- Added support for preview thumbnails on the seek bar
- Added pre-integration support for KeyOS DRM ([documentation](https://docs.portal.theoplayer.com/docs/next/api-reference/theoplayer-drmconfiguration/))

#### ⚡ Improvements

- UI: the mouse cursor is now hidden while the mouse is resting still above the player
- UI: the control bar is now hidden immediately when the mouse moves outside of the player

#### 🐛 Issues

- Solved an issue where picture-in-picture mode would not re-activate automatically in some scenarios
- Solved an issue where subtitles would not appear in some edge cases
- Solved an issue with Internet Explorer 10 support
- Solved various minor issues with DRM protected playback on Internet Explorer and Edge
- Solved various minor issues with advertisements

## 🚀 2.10.0 (2017/04/12)

### Web

#### 🐛 Issues

- Solved an issue where changing the audio track on a DASH source would sometimes freeze the player on Edge
- Solved an issue where Airplay was sometimes marked as available when it really wasn't
- Solved an issue with preloading while in fullscreen mode on iOS
- Solved an issue where querying the played property lead to an error when no source was set
- Solved various minor issues with advertisements

## 🚀 2.9.11 (2017/04/07)

### Web

#### ⚡ Improvements

- Improved player behavior for redirected manifests
- Improved the player's playback behavior on Windows 7

#### 🐛 Issues

- Solved an issue where the Airplay overlay was not hidden correctly

## 🚀 2.9.10 (2017/04/05)

### Web

#### ⚡ Improvements

- Added support for SKD protocol for Fairplay license URLs
- Improved the player to detect broken AAC frames and replace them with silent audio

#### 🐛 Issues

- Solved an issue where a DASH live stream with inconsistent segments timelines for audio and video would not start playing

#### ✨ Features

- Added support for Airplay playback on Mac OS and iOS

## 🚀 2.9.9 (2017/04/03)

### Web

#### ⚡ Improvements

- Improved advertisement viewing experience
- Improved Segment packaging for HLS streams

#### 🐛 Issues

- Solved some issues with the Player UI's menus
- Solved an issue with setting the player's currentTime before ads were completely loaded
- Solved an issue with cues not being updated correctly for sideloaded text tracks
- Solved an issue with handling different Fairplay formats

## 🚀 2.9.8 (2017/03/28)

### Web

#### ⚡ Improvements

- Improved the player's behavior when there is a 404 error on segments.

## 🚀 2.9.7 (2017/03/27)

### Web

#### 🐛 Issues

- Solved some issues with the Player UI's menus

## 🚀 2.9.6 (2017/03/27)

### Web

#### 🐛 Issues

- Solved an issue that made the player pause when seeking.
- Solved an issue with multiple identical content protection systems.

## 🚀 2.9.5 (2017/03/23)

### Web

#### ✨ Features

- Fallback to track.label as title for audio tracks with no specific language.
- Improved scrubbing behaviour.

#### 🐛 Issues

- Solved an issue with subtitle selection on Chromecast
- Solved an issue with quality selection on Chromecast

## 🚀 2.9.4 (2017/03/17)

### Web

#### ✨ Features

- Added compatibility with Chromecast Default Media Receiver.
- Added support for setting the default selected sideloaded text track.

#### 🐛 Issues

- Solved an issue where text track labels were not shown.

## 🚀 2.9.3 (2017/03/13)

### Web

#### 🐛 Issues

- Solved an issue where an empty DRM description prevented DASH streams from being played correctly.
- Solved an issue with text track cues that were not being dispatched correctly.

## 🚀 2.9.2 (2017/03/10)

### Web

#### ⚡ Improvements

- Improved outline behavior in the THEOplayer UI quality selection menu.

## 🚀 2.9.1 (2017/03/09)

### Web

#### ✨ Features

- Added support for the poster property on Chromeless as well as UI players.
- Added an optional poster property to SourceDescriptions.

#### 🐛 Issues

- Solved an issue where setting the preload property was not always correctly handled.
- Solved an issue with the currentTime and duration displays in the THEOplayer UI.
- Solved an issue where the fullscreen button was permanently hidden after casting to Chromecast.

## 🚀 2.9.0 (2017/03/07)

### Web

#### ✨ Features

- Added a crossOrigin property to the player
- Added support for Picture-in-Picture (PIP)
- Added support for ad-block detection

#### ⚡ Improvements

- Improved detection and handling of gaps in MPEG-DASH streams

#### 🐛 Issues

- Solved an issue where the loadedmetadata event was not always correctly dispatched
- Solved multiple issues with the ready- and playback state of the player
- Solved an issue where it was no longer possible to specify global DRM configurations in a SourceDescription

## 🚀 2.8.6 (2017/03/02)

### Web

#### 🐛 Issues

- Solved an issue where the player would often have to resync when it had to rebuffer
- Solved an issue with Chromecast text tracks

#### ⚡ Improvements

- Improved track synchronization behavior

## 🚀 2.8.5 (2017/02/24)

### Web

#### 🐛 Issues

- Solved an issue where content with persistent Playready licenses did not start playback correctly

## 🚀 2.8.4 (2017/02/24)

### Web

#### 🐛 Issues

- Solved an issue where the first cue of an SRT file was not parsed correctly

## 🚀 2.8.3 (2017/02/24)

### Web

#### 🐛 Issues

- Solved an issue where activequalitychanged event wasn't dispatched for HLS tracks
- Solved an issue which prevented the progress bar UI from resetting
- Solved an issue related to post-rolls
- Solved an issue with the spinner icon on source change
- Solved an issue with playback of periods that are no longer part of a stream

#### ⚡ Improvements

- Improved id3 support
- Improved THEOplayer events
- Improved buffering approach

## 🚀 2.8.2 (2017/02/14)

### Web

#### 🐛 Issues

- Solved an issue where the player would sometimes miscalculate the end time of stream
- Solved an issue on IE/Edge where DRM protected content did not always start playback
- Solved an issue where the player kept waiting for a seeking event that would never occur

#### ✨ Features

- Improved mobile UI
- Improved menu UI

## 🚀 2.8.1 (2017/02/08)

### Web

#### 🐛 Issues

- Solved an issue with the seekbar when using Google IMA
- Solved an issue which didn't correctly dispatch events when using ads
- Solved an issue with VuDRM

#### ✨ Features

- Updated menu UI

#### ⚡ Improvements

- Improved error message for missing ContentProtection tag

## 🚀 2.8.0 (2017/01/31)

### Web

#### 🐛 Issues

- Solved an issue where the readystate was not always updated correctly when using ads

#### ✨ Features

- Updated advertisement UI

## 🚀 2.7.2 (2017/01/25)

### Web

#### 🐛 Issues

- Solved an issue where DRM protected content did not start playback on Edge
- Solved an issue where errors from native playback were not dispatched correctly
- Solved an issue where embedded text track segments were not being downloaded in a live stream

#### ✨ Features

- Added support for decryption of Clearkey-encrypted content through EME

## 🚀 2.7.1 (2017/01/16)

### Web

#### ✨ Features

- Added support for playback of advertisements via Google-IMA

## 🚀 2.7.0 (2017/01/16)

### Web

#### 🐛 Issues

- Solved an issue where the UI was not reset correctly when changing a source
- Solved an issue where the player stayed in an indefinite seeking state
- Solved an issue where casting to a Chromecast device occasionally failed on startup

#### ✨ Features

- Added support for playback of non-DASH media sources (e.g. regular MP4-files)
- Updated the API to allow for per-source DRM configuration
- Added support for playback of advertisements without requiring a main source
- Added a ‘targetqualitychanged’ event to Audio and VideoTrack objects that is triggered when the target Quality of that track is set
- Added an ‘activequalitychanged’ event to Audio and VideoTrack objects that is triggered when the active quality of that track changes

## 🚀 2.6.1 (2016/01/16)

### Web

#### 🐛 Issues

- Solved an issue where text tracks where not switched correctly when changing the playback context e.g. to ChromeCast
- Solved an issue where license errors were not handled correctly and lead to a nonsense trace in console

## 🚀 2.6.0 (2016/12/26)

### Web

#### 🐛 Issues

- Solved an issue where ‘segmentnotfound’ events and errors were thrown multiple times for the same segment
- Solved an issue where framerate was not exposed correctly

#### ✨ Features

- Added support for EventStream events
- Added support for DVB Subs text tracks
- Added support for casting via ChromeCast
- Added support for scheduling and playback of VAST and VMAP advertisement files
- Added support for scheduling and playback of custom advertisements

## 🚀 2.5.10 (2016/12/22)

### Web

#### 🐛 Issues

- Solved an issue where the player stopped playback at the end of the shortest track instead of playing all available content
- Solved an issue where a timeline gap at the end of a stream caused the player to not finish playback of a Period
- Solved an issue where ‘addtrack’ and ‘removetrack’ events were dispatched twice

#### ⚡ Improvements

- Improved the player to be able to handle broken segments more robustly
- Various improvements to player’s internal architecture

## 🚀 2.5.9 (2016/12/20)

### Web

#### 🐛 Issues

- Solved an issue where dispatching a seeking event too soon caused the player to remain in an eternal seeking state

## 🚀 2.5.8 (2016/12/19)

### Web

#### 🐛 Issues

- Solved an issue where default PSSH information was not parsed from manifests correctly
- Solved an issue where the player did not start playback when detecting a gap in a stream
- Solved an issue where resetting the player would not always clean up the player’s playing state completely
- Solved an issue where the player would detect a gap in a stream that wasn’t actually there
- Solved an issue where seeking the player ahead one frame at a time was not working

#### ⚡ Improvements

- Various improvements to the internal seeking behavior of the player

## 🚀 2.5.7 (2016/12/09)

### Web

#### ✨ Features

- Added support for Advanced DRM Integration

#### 🐛 Issues

- Solved an issue where the last segment in a stream kept being downloaded endlessly
- Solved an issue where ‘seeked’ events where being dispatched too early
- Solved an issue where the duration, start and end times were being miscalculated for segments of SegmentTemplates with no explicit SegmentTimeline
- Solved an issue where a SourceBuffer was not initialized with the right codecs

#### ⚡ Improvements

- Various minor improvements to the player codebase
- Various improvements to the player’s UI stylesheets
- Various improvements to the player’s API via SourceDescriptions (Section 4)

## 🚀 2.5.6 (2016/12/01)

### Web

#### ✨ Features

- Added support for the new Latens Titanium v2.5 error response format
- Added a ‘source’ property to the player API which allows users to get and set the current SourceDescription. This deprecates the older player.setSource() method.

#### 🐛 Issues

- Solved an issue where segment timestamps in a multi-period manifest were not always calculated correctly

#### ⚡ Improvements

- Improved the player to handle some errors caused by invalid manifests more gracefully
- Improved the estimate strategy in timeline searching algorithms
- Various improvements to the internal DRM structure

## 🚀 2.5.5 (2016/11/21)

### Web

#### 🐛 Issues

- Solved an issue where a bug in the transition from dynamic to static behavior caused an endless loop. This is turn caused webpages that contained a malfunctioning player to freeze

## 🚀 2.5.4 (2016/11/18)

### Web

#### 🐛 Issues

- Solved an issue where the complexity of algorithms that handle manifest updates put a drain on resources in Chrome, which caused the browser to drop video frames. This in turn caused stuttering playback

#### ⚡ Improvements

- Various improvements to the computational complexity of algorithms in the player
- Improved player behavior for disabling and re-enabling audio and video tracks

## 🚀 2.5.3 (2016/11/07)

### Web

#### 🐛 Issues

- Solved an issue where a segment timeline for dynamic manifests without explicit timeline information was not constructed correctly

## 🚀 2.5.2 (2016/11/04)

### Web

#### 🐛 Issues

- Solved an issue where the player would not reach the playing state after entering a waiting state twice, but leaving it only once
- Solved an issue where the player would crash when setting its currentTime before the manifest finished loading
- Solved an issue where manually switching an audio or video quality would sometimes leak an error to the console
- Solved an issue where the activeQuality property of an audio or video track would always be undefined
- Solved an issue where a gap at the start of a stream would sometimes prevent the player from reaching the ‘playing’ state

#### ⚡ Improvements

- Improved the player’s track switching algorithm
- Improved the player’s manual quality switching algorithm

## 🚀 2.5.1 (2016/10/26)

### Web

#### ⚡ Improvements

- Improved the player to optimally handle 64-bit precision timestamps in manifests

## 🚀 2.5.0 (2016/10/24)

### Web

#### ✨ Features

- Added support for inband (‘emsg’) events

## 🚀 2.4.5 (2016/10/21)

### Web

#### 🐛 Issues

- Solved an issue where the player would stall indefinitely when a large gap would occur in audio or video data

#### ⚡ Improvements

- Improved the player’s ability to detect and handle data gaps in audio or video tracks
- Improved the player’s synchronization algorithm

## 🚀 2.4.4 (2016/10/06)

### Web

#### 🐛 Issues

- Solved an issue where resetting the player would cause IE11 on Windows 8.1 to crash
- Solved an issue where an MPD error would cause an unhandled error to leak to the console

## 🚀 2.4.3 (2016/09/28)

### Web

#### 🐛 Issues

- Solved an issue where a video Quality’s framerate was not exposed correctly

#### ⚡ Improvements

- Improved the player to detect and handle overlapping segments in a dynamic stream

## 🚀 2.4.2 (2016/09/22)

### Web

#### 🐛 Issues

- Solved an issue with indexes for SegmentList-based VOD content that prevented the content from being played
- Solved an issue where the enabled state of an audio track was not correctly visualized initially
- Solved an issue where text tracks that ended before audio or video tracks would prevent seeking beyond the end of that text track
- Solved an issue where protected content would keep the player from reaching the ‘loadedmetadata’ state on Edge
- Solved an issue where the player would leak an error to the console when a DRM problem occurred and ongoing license requests were not cancelled
- Solved an issue where the player’s duration was not reset to NaN after resetting the source

#### ⚡ Improvements

- Improved the player to detect and handle missing frames in audio and video data

## 🚀 2.4.1 (2016/09/16)

### Web

#### 🐛 Issues

- Solved an issue where the initialization of persistent DRM failed because two initialization requests were ran in parallel
- Solved an issue where the active video track would be unnecessarily synced when switching the active audio track

## 🚀 2.4.0 (2016/09/08)

### Web

#### ✨ Features

- Added support for playback of multi-period manifests
- Added support for the WebVTT text track format
- Added support for side-loaded text tracks
- Added support for video tracks
- Added support for manual quality or rendition switching and inspection of audio and video tracks

#### 🐛 Issues

- Solved an issue with buffering of embedded text tracks that prevented subtitles from being rendered
- Fixed some typing errors throughout the API documentation
- Solved an issue where a BaseURL pointing to ‘./’ was not being resolved correctly
- Solved an issue where multiple occurrences of the same parameter in an URL template were not being resolved

## 🚀 2.3.4 (2016/09/02)

### Web

#### 🐛 Issues

- Resolved an issue where a call to stop, followed by a call to play, would cause an unrecoverable DRM error

#### ⚡ Improvements

- Various improvements to the player’s UI
- Various improvements to the player’s internal structure

## 🚀 2.3.3 (2016/08/31)

### Web

#### 🐛 Issues

- Resolved an issue where the player was not able to switch content-protected audio tracks
- Resolved an issue with the player’s volume
- Resolved an issue where the player did not use the updated time at which a MPDs was last fetched
- Resolved an issue where the player stuttered due to decoding delay of DRM streams
- Resolved an issue where event listeners for external events were not always attached correctly

#### ⚡ Improvements

- Improved the player to ignore unplayable tracks instead of throwing an error
- Improved various aspects of the player’s internal code
- Improved the player’s synchronization algorithm
- Improved the player to handle transit between internal and external events

## 🚀 2.3.2 (2016/08/17)

### Web

#### 🐛 Issues

- Resolved an issue where track lists did not dispatch ‘removetrack’ events when resetting the player
- Resolved an issue where new segments’ numbers were wrongfully assigned when updating the manifest
- Resolved an issue where the player’s error property was not set when dispatching an error event
- Resolved an issue where the player allowed a user to seek outside of its seekable range
- Resolved an issue where a period’s duration was not correctly detected

#### ⚡ Improvements

- Improved the player to detect between which codecs can be switched during Adaptive Bitrate Streaming
- Improved the player to signal representation changes when they occur visually instead of when they start downloading
- Improved the player to detect unsupported platforms to prevent bad User Experience on those platforms
- Improved the player to retry downloading failed manifests on multiple locations- when possible
- Improved the player’s error handling and made license errors more descriptive

## 🚀 2.3.1 (2016/08/02)

### Web

#### ⚡ Improvements

- Added support to detect and filter representations that can’t be played by the MediaSource environment
- Improved the player’s behavior when switching between two tracks
- Improved the player’s setCurrentTime functionality
- Improved the player’s use of the presentationTimeOffset attribute

## 🚀 2.3.0 (2016/07/20)

### Web

#### ✨ Features

- Added support for the publishTime attribute in media presentation descriptions
- Added support for playback on Chrome 52 on Android
- Added support for saving and restoring state of volume and muted properties over multiple sessions
- Added support for location elements in manifests
- Added the currentProgramDateTime property to the player to indicate the player’s date time relative to a manifest’s publish time

#### 🐛 Issues

- Resolved an issue where the player stalled indefinitely upon switching representations
- Resolved an issue causing the player to go in a waiting state when its ready state is higher than `HAVE_CURRENT_DATA`
- Resolved an issue with asynchronous creation of audio tracks
- Resolved an issue where the player stalled indefinitely after playing 3 segments
- Resolved an issue for SegmentTimeline segments with a repeat count equal to -1
- Resolved an issue where the player did not dispatch a waiting event when starting playback of a stream
- Resolved an issue with BaseURL elements that point to root

#### ⚡ Improvements

- Improved the internal architecture for track-based playback
- Improved support for default attributes in multiple levels of a manifest’s segment info hierarchy
- Various small improvements in the player’s seeking behaviour

## 🚀 2.2.1 (2016/06/16)

### Web

#### ✨ Features

- Added support for the MPEG-DASH BaseURL element to the player
- Reworked the players play() and pause() flow

#### 🐛 Issues

- Resolved an issue with UI display order on Firefox
- Resolved an issue with UI handling durationchange events and displaying an incorrect duration
- Resolved an issue with UI not displaying all buffered ranges correctly
- Resolved an issue where the internal duration was not correctly reset after stopping the player
- Resolved an issue in correctly resetting of media elements when a new data source is loaded
- Resolved an issue with playbackRate of the player being reset to 1 when loading a new source
- Resolved an issue with the player occasionally dispatching a timeupdate event despite being in a waiting state
- Resolved an issue with the player dispatching a playing event before having a data source loaded
- Resolved an issue with the player attempting to seek before having a data source loaded
- Resolved an issue with the player getting in an eternal waiting state while buffering data

#### ⚡ Improvements

- Changed the readyState of the player and all internal components waiting for readyState to being dependent on DRM being complete
- Further optimized the build pipeline of the player
- Improved event flow related to subtitle tracks
- Improved the players support for the MPEG-DASH SegmentTemplate element
- Various small improvements in the flow and stability of the player

## 🚀 2.2.0 (2016/05/30)

### Web

#### ✨ Features

- The player now supports loading, parsing and rendering of TTML (Timed Text Markup Language) subtitles. More specifically it supports the Core Presentation Profile of the TTML specification
- The player now has integration with a UI component

#### 🐛 Issues

- Resolved an issue that caused the player to repeatedly redownload a manifest file
- Resolved an issue in correctly calculating the segment numbers in some manifest files

#### ⚡ Improvements

- Optimized the build pipeline of the player
- Added a build target with build in user interface
- Further optimized the calculation of time related ranges
- Various small improvements in the flow and stability of the player

## 🚀 2.1.5 (2016/05/17)

### Web

#### 🐛 Issues

- Resolved an issue in correctly determining the end of stream and end of buffer
- Resolved an issue in sometimes determining the duration of Period elements

#### ⚡ Improvements

- Optimized the build pipeline of the player
- Added the videoWidth, videoHeight and error properties to the player
- Improved the calculation of buffered, played, seekable properties
- Various small improvements in the flow and stability of the player

## 🚀 2.1.4 (2016/05/02)

### Web

#### 🐛 Issues

- Resolved an issue in correctly determining that the end time of a media element had changed
- Resolved an edge case that caused the player to repeatedly download the same segment
- Resolved detecting that the player no longer was in sync with the available data in the manifest

#### ⚡ Improvements

- Improved buffer handling of the player
- Various small improvements in the flow and stability of the player

## 🚀 2.1.3 (2016/04/16)

### Web

#### 🐛 Issues

- Resolved an issue that caused the player to not play when changing the source of the player while autoplay is enabled
- Resolved an issue in correctly detecting the end of stream of the player
- Resolved an issue in calculating the correct duration of some streams
- Optimized the parsing of MPEG-DASH documents and removed blocking code

#### ⚡ Improvements

- Improved the memory usage of the MPEG-DASH document parser
- Added missing documentation about the date attribute of some events that the player dispatches
- Various small improvements in the flow and stability of the player

## 🚀 2.1.2 (2016/03/29)

### Web

#### ✨ Features

- A new buffering algorithm has been added to the player
- Added the ‘played’ TimeRanges attribute to the player to indicate the played range

#### 🐛 Issues

- Resolved an issue where individual tracks started playback before all tracks are DRM decrypted
- Resolved an issue in determining the content type of a representation for some manifests
- Resolved an issue in correctly calculating the duration of time ranges
- Resolved an issue where the player could go in a stalling state

#### ⚡ Improvements

- Improved the synchronization of the individual tracks
- Ensured that the player never goes in a playing state before the ‘canplay’ event has been thrown by the player
- Improved the memory handling of the player
- Added more detailed documentation about the various events that the player dispatches
- Various small improvements in the flow and stability of the player

## 🚀 2.1.1 (2016/03/14)

### Web

#### 🐛 Issues

- Resolved a reference error in relation to MSMediaKeys.isTypeSupported on Microsoft Edge
- Resolved a reference error that occurred when reporting Titanium Widevine error messages

#### ⚡ Improvements

- Removed unnecessary debug messages being outputted to console in release versions
- Various small improvements in the flow and stability of the player

## 🚀 2.1.0 (2016/03/04)

### Web

#### 🐛 Issues

- Resolved DRM errors not being thrown while the player is in some specific states
- Resolved an error in ABR calculations while the player is in a waiting state

#### ⚡ Improvements

- Optimized the error handling of specific errors that previously leaked their error message to console
- Improved the error event being thrown twice for the some errors
- Improved the MPEG-DASH manifest parser to detect more defects in the manifests
- Improved the segmentnotfound event to provide information on the number of retries
- Various small improvements in the flow and stability of the player

## 🚀 2.0.2 (2016/02/26)

### Web

#### ✨ Features

- Content Protection error and success reporting and messages have been improved
    - `contentprotectionerror` – event thrown when an error occurs during content protection
    - `contentprotectionsuccess` – event thrown after content protection steps have been finalized and playback should start
    - `mediaencryptionlicenseobtained` – event has been removed from the player

#### 🐛 Issues

- Resolved an issue in calculating the edges of the seekable range in closed, static content
- Throw a durationchange event when the duration of a media asset changes during playback

#### ⚡ Improvements

- Various small improvements in the flow and stability of the player

## 🚀 2.0.1 (2016/02/12)

### Web

#### 🐛 Issues

- Resolved an inaccuracy in the seekable ranges of the player
- The end time of the seekable range during playback of an open (type = ‘dynamic’) asset is now three target durations away from the loadable range/end of the data in the stream
- Ensure that when the currentTime of the player is modified, the new value falls inside of the seekable range
- Resolved an issue in open (type = ‘dynamic’) assets that caused the manifest to no longer to be reloaded

#### ⚡ Improvements

- Various small improvements in the flow and stability of the player
- Updated the DRM error messages to more clearly represent the cause of the error

## 🚀 2.0.0 (2016/02/05)

### Web

#### ✨ Features

- Support for the Latens Titanium DRM system has been added for the IE11 and Edge browsers for the Windows 8, 8.1 and 10 platforms

#### 🐛 Issues

- Resolved a TypeError related to the code obfuscation occurring specifically on Edge causing the player not to start playback
- Resolved an issue in cleaning up assets while unloading the player or changing source

#### ⚡ Improvements

- Various small improvements in the flow and stability of the player

## 🚀 2.0.0-BETA.0 (2015/12/03)

### Web

#### ✨ Features

- Added versioning support in THEOplayer.version
- Support for the Latens Titanium DRM system has been added for the Chrome web browser
- Updating the src attribute of the player now unloads the old and loads the new value of the attribute
- Calling the stop method on the player now stops playback and destroys the player
- Support for dynamic streams with a continually growing DVR window
- Support for dynamic streams that transition to a static stream has been added to the player

#### 🐛 Issues

- When a 404 error occurs during the download of a media segment, the player will now try again after a short delay
- Resolved a time and rounding issue that caused the player not to start playback of the specified asset
- The player now recovers from situations where its playback buffer is not overlapping with the timeline of a dynamic stream
- Resolved an issue on IE11 where media keys got attached to the media element while the media element was in an invalid readyState 0, `HAVE_NOTHING`
- Clean up old media keys when stopping the player or when setting a new source on the player

#### ⚡ Improvements

- When present, PSSH headers now get read from the manifest in order to kick start the DRM flow
- Support for the presentationTimeOffset MPEG-DASH MPD attribute has been added to the player
- Various small improvements in the flow and stability of the player

</details>
