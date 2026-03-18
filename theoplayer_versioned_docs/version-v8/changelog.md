---
title: Changelog
description: Find out what's new in THEOplayer.
sidebar_custom_props: { 'icon': '📰' }
toc_max_heading_level: 2
---

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

- Fixed an audio glitch that occurred when transitioning to background audio playback.
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

- Raising the tvOS minimum supported version of our tvOS SDK to 13.0 for consistency with iOS version.

#### 👎 Deprecations

- Deprecating all THEOplayer Objective-C API support. Existing APIs will still continue to work until next major release, but additional support for new APIs will discontinue. When it was introduced, the goal of the Objective-C APIs was to provide bindings to bridge our native SDK to React Native. Over time that became unneeded as Swift became capable of accomplishing the goal. Please contact us for support in case your codebase relies on the Objective-C APIs.
