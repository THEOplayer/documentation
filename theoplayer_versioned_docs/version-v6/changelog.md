---
title: Changelog
description: Find out what's new in THEOplayer.
sidebar_custom_props: { 'icon': '📰' }
toc_max_heading_level: 2
---

<head>
  <meta name="robots" content="index, follow" />
</head>

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

- Fixed an issue where VMAPs would not be scheduled in the Google IMA integration if `player.currentTime` was set before initial playback.
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
- Filtered out ac-3 audio on Tizen and WebOS by default as most devices fail playout and the codec support check is not usable.
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

- **WebXR support**: We’ve added WebXR support for browser to enhance the AR and VR experiences on Web. [Get started now!](https://docs.theoplayer.com/getting-started/01-sdks/01-web/10-how-to-use-vr-using-webxr.md)

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
