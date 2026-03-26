# Changelog

These are the release notes for THEOplayer 10.0.0 and higher. For older versions, see:
* [Version 9.x](https://optiview.dolby.com/docs/theoplayer/v9/changelog/)
* [Version 8.x](https://optiview.dolby.com/docs/theoplayer/v8/changelog/)
* [Version 7.x](https://optiview.dolby.com/docs/theoplayer/v7/changelog/)
* [Version 5.x and 6.x](https://optiview.dolby.com/docs/theoplayer/v6/changelog/)
* [Version 2.x, 3.x and 4.x](https://optiview.dolby.com/docs/theoplayer/v4/changelog/)

## 🚀 10.13.0 (2026/03/25)

### Web

#### ✨ Features

- Added support for `clearBufferWhenSettingTargetQuality` for DASH streams. This allows manual quality switches on DASH to occur immediately.

#### ⚡ Improvements

- Improved handling of unreachable `csai` ad break URLs by adding a timeout of 3s. If the download times out, the player will now throw an ad error and not play the ad break.

#### 🐛 Issues

- Fixed issue where very small periods in DASH manifests would cause the player to crash.
- Fixed an issue where no content steering was done for text track `AdaptationSet`s in a DASH stream.
- Fixed an issue in low performant Android WebViews where playback stalls were made worse by trying to recover too fast.
- Fixed an issue where the player would not use the cached segments of the streaming `csai` ad.
- Fixed an issue where the player would not preload the next `csai` ad breaks when it already preloaded another `csai` ad break.
- Fixed an issue where the player would not play the scheduled `csai` ad breaks when one of the ad breaks starting at the same time could not be fetched.
- Fixed an issue where OptiView Lens CMCD headers were being duplicated when playing a DVR-enabled OptiView Live source.
- Fixed an issue where the player would have an incorrect `currentProgramDateTime` during the second ad break when playing multiple consecutive ad breaks on an OptiView Ads stream.
- Fixed an issue where playback would end when transitioning between ad breaks in an OptiView Ads stream on iOS Safari.

### Android

#### ✨ Features

- Added `TextTrack.captionChannel` property to retrieve the CEA-608 channel and/or CEA-708 service numbers of closed caption text tracks.

#### 🐛 Issues

- Fixed an issue where all but the first CEA-608/CEA-708 channel was ignored.
- Fixed an issue where `AdBreak.getTimeOffset` would always return 0 for IMA ads.
- Fixed Nielsen ID3 tags not being reported during HESP playback.
- Fixed an issue where the `CHANGE` event was missing when an audio or video track was automatically enabled by the player (e.g. for a default track).
- Fixed an issue when selecting specific video qualities may lead player to choose a completely different, sometimes invalid, quality.

### iOS

#### ✨ Features

- Added `move` method to `CachingTask` to help move the cached stream assets to a specified directory URL.

#### 🐛 Issues

- Fixed an issue where the downloaded assets were not properly cleared from storage after calling `remove()` on an active `CachingTask`.
- Fixed an issue where `Ads.Omid` APIs would not apply correctly.

### Roku

#### ⚡ Improvements

- Updated Mux SDK to version 2.6.2 in the Roku Mux connector.

#### 🐛 Issues

- Fixed an issue where the `emptied` event was no longer being dispatched.

## 🚀 10.12.1 (2026/03/17)

### iOS

#### ⚡ Improvements

- Improved startup time for HESP-enabled OptiView Live streams on slower networks.

#### 🐛 Issues

- Fixed an issue where the first video frame would appear stuck for a while when starting playback of an HESP OptiView Live stream.

## 🚀 10.12.0 (2026/03/12)

### Web

#### ✨ Features

- Added default values for the `mpt` and `mpv` ad tag parameters for Google DAI.
- Added the `AdBreak.id` API.
- Added the experimental `View.player` property to the MultiView API to access the player underlying that view.

#### 🐛 Issues

- Fixed an issue where the player would not parse Nielsen cues when playing an OptiView Live stream.
- Fixed an issue where the player would not dispatch ad events when playing a Google DAI DASH live stream.
- Fixed an issue in HLS streams with TS segments where setting a `targetQuality` could sometimes cause an infinite loop.
- Fixed an issue where the player would still receive id3 events from the previous Google DAI source after resetting the source to a non Google DAI source.
- Fixed an issue where, when playing an OptiView Ads enabled stream, subsequent switches from ad to content would take longer and longer each time.
- Fixed an issue where the backdrop doesn't respect the aspect ratio when an ad is played with another aspect ratio in an OptiView Ads stream.
- Fixed an issue where the player would not pause the content in double box layout when clicking on an ad clickthrough for an OptiView Ads stream.
- Fixed an issue where OptiView Live streaming fallback functionality was not behaving as expected when playing HESP streams.
- Fixed an issue where the player would sometimes play a Google IMA preroll ad again when switching from ad to content while playing an OptiView Ads stream in native fullscreen or native PiP.
- Fixed an issue where the content would be paused when playing an OptiView Ads double-box advertisement.
- Fixed an issue where the double box layout would not dismiss when the VAST ad creative was unavailable for OptiView Ads.
- Fixed an issue where the player would sometimes not play the VAST ad unmuted on iOS Safari for an OptiView Ads stream.

#### ⚠ Known Limitations

- Using OptiView Ads with Picture-in-Picture (PiP) on Firefox is not supported. The default PiP button will be hidden in this scenario to discourage usage.

### Android

#### 💥 Breaking Changes

- `LatencyManager.currentLatency` now returns `null` when the player is not actively playing.

#### ✨ Features

- Added default values for the `mpt` and `mpv` ad tag parameters for Google DAI.
- Added the `AdBreak.idAsString` API.
- Added `Logger.HESP` logging tag for debugging HESP playback issues.

#### 👎 Deprecations

- Deprecated `MediaTailorAdAvail.id` in favor of `AdBreak.idAsString`.

### iOS

#### ✨ Features

- Added the `bytes` property to the `CachingTask` API which estimates the total amount of bytes that the task will download.
- Added the `AdBreak.id` API.
- Added default values for the `mpt` and `mpv` ad tag parameters for Google DAI.
- Added better error handling for HESP loading during startup with bad network conditions.

#### ⚡ Improvements

- Improved performance when accessing the `bytesCached` property of `CachingTask`.
- Improved error handling during ABR switches when playing OptiView Live sources.
- Improve error details (error code and message) when storage is low during a caching task. In a future major version, we will send better error metadata where possible: ie. send `THEOErrorCode.CACHE_SOURCE_ERROR` instead of `THEOErrorCode.NETWORK_ERROR`.

#### 🐛 Issues

- Fixed an issue where text tracks were not synced properly with Chromecast.
- Fixed an issue where HESP playout would occasionally fail to start or stall shortly after startup.
- Fixed an issue where a `CastError` was thrown during Chromecast connection establishment.
- Fixed an issue where retrying segment downloads for OptiView Live sources in bad network conditions would cause a fallback instead of continuing with the retried segment download.
- Fixed an issue where autoplay would not work when setting Millicast sources.
- Fixed an issue where setting `muted` on the player before setting a `MillicastSource` would be ignored.
- Fixed an issue where a quality switch on an OptiView Live HESP source caused unintended fallbacks.
- Fixed an issue where the ABR controller would switch up too fast after startup or after a previous quality switch.
- Fixed an issue during HESP playback where sometimes a `playing` event would be missing after resuming playback.

### Roku

#### ✨ Features

- Added the `AdBreak.id` API.
- Added default values for the `mpt` and `mpv` ad tag parameters for Google DAI.

#### ⚡ Improvements

- Updated the Mux SDK in the THEOMuxConnector to 2.6.0.

#### 🐛 Issues

- Fixed an issue in the THEOMuxConnector where the poster URL was not being recorded.

## 🚀 10.11.1 (2026/03/05)

### Web

#### 🐛 Issues

- Fixed an issue where versions 10.10.0 to 10.11.0 of the [`@theoplayer/basic-hls`](https://www.npmjs.com/package/@theoplayer/basic-hls) variant were published with an incorrect feature set.
- Fixed an issue where setting a second OptiView Live source in a row would sometimes cause the stream to fail to start.

## 🚀 10.11.0 (2026/02/25)

### Web

#### ⚡ Improvements

- Updated the OptiView Real-time streaming retry logic. Minimum backoff time for a OptiView Real-time source is now 1 second.
- OptiView Live streams played on mobile Safari will fallback faster when segments would be unavailable.
- Improved the resiliency for MPEG-DASH Content Steering when the steering server is unstable.

#### 🐛 Issues

- Fixed an issue where a PS4 WebMAF app could freeze when autoplay is enabled.
- Fixed an issue where autoplay on an ended stream could fire a play event before the sourcechange event, causing duplicate analytics sessions.
- Fixed an issues in MPEG-DASH Content Steering where successful manifest location downloads were reported in the `_DASH_pathway` search param.
- Fixed an issue where layer configuration passed in `MillicastSource.connectOptions` was not kept into account when switching layers after the source had been set.

#### ⚠ Known Limitations

- [`@theoplayer/basic-hls` version 10.11.0](https://www.npmjs.com/package/@theoplayer/basic-hls/v/10.11.0) was incorrectly published with the `basic-dash` feature set. If you're using this variant, please update to version 10.11.1 or higher for the correct feature set.

### Android

#### ⚡ Improvements

- Updated Media3 to [version 1.9.2](https://github.com/androidx/media/releases/tag/1.9.2).

#### 🐛 Issues

- Fixed an issue where ABR was not switching to a lower quality on very low bandwidth.
- Fixed an issue where `TextTrackStyle.fontSize` was not correctly applied to TTML subtitles with a `tts:fontSize` attribute.
- Fixed an issue where changing the `player.textTrackStyle` of one player could accidentally also change the text track style of other players.
- Fixed an issue where using Picture-in-Picture with `PiPType.ACTIVITY` on apps without `Theme.AppCompat` theme could crash the application.
- Fixed an issue where autoplay on an ended stream could fire a play event before the sourcechange event, causing duplicate analytics sessions.
- Updated the Millicast SDK to version 2.5.3, which adds a necessary consumer ProGuard rule to prevent a missing symbol crash from occurring when enabling minification.
- Fixed an issue where the backdrop would not be visible for OptiView Ads.
- Fixed an issue where the player would restart a VOD source when a scheduled interstitial would not have a resume time for OptiView Ads.
- Fixed an issue where the target latency was not applied for OptiView Live v1 channels.

### iOS

#### ✨ Features

- Added mobile layout support for OptiView Ads to override the ad layout when playing on iOS.

#### ⚡ Improvements

- Bumped the Millicast SDK version to 2.5.3

#### 🐛 Issues

- Fixed an issue where playing OptiView Live streams would cause an initial audio stutter.
- Fixed an issue in OptiView Ads where subsequent adbreak requests on monetized streams would fail after receiving an ad error.
- Fixed an issue where playing a VAST ad pod would only play the first ad for OptiView Ads.
- Fixed an issue in OptiView ads where the player would pause instead of playing the main content when an ad fails to load.
- Fixed an issue where the target latency was not applied for OptiView Live v1 channels.

### Roku

#### 👎 Deprecations

- Deprecated the `bitratechange` event in favor of the `activequalitychanged` event.

## 🚀 10.10.1 (2026/02/25)

### Web

#### 🐛 Issues

- Fixed an issue in HLS streams with TS segments where setting a `targetQuality` could sometimes cause an infinite loop.

#### ⚠ Known Limitations

- [`@theoplayer/basic-hls` version 10.10.1](https://www.npmjs.com/package/@theoplayer/basic-hls/v/10.10.1) was incorrectly published with the `basic-dash` feature set. If you're using this variant, please update to version 10.11.1 or higher for the correct feature set.

## 🚀 10.10.0 (2026/02/11)

### General

#### ✨ Features

- Added the `distributionloaded` event to the `player.theolive` API.

### Web

#### 🐛 Issues

- Fixed an issue where DRM-enabled HLS streams could error on rendition switches due to missing keys.
- Fixed an issue where quality changes during HLS playback could cause an error on low-end devices.
- Fixed an issue where an HESP source with a relative manifest URL could not be played.
- Fixed an issue on Safari where sometimes the `ended` event would not be fired when the player reaches the end of a stream.
- Fixed an issue where multiple subtitle cues within a segment would not display correctly.
- Fixed an issue where an HLS live stream would not start playback after a pre-roll ad on iOS Safari.
- Fixed an issue where the player would dispatch the `pause` and `ended` event in an incorrect order when seeking to the end of a stream.
- Fixed an issue where a track's `activeQuality` could be `undefined` on a playing event with OptiView Live streams.
- Fixed an issue where an OptiView Ads stream with disabled VPAID ads could cause the player to stop serving ads.
- Fixed an issue where playing ads using Google IMA and OptiView Ads together could cause the Google IMA ad to not play.
- Fixed an issue where an incorrect waiting event could be dispatched during an ad break to ad break transition on an OptiView Ads stream.

#### ⚠ Known Limitations

- [`@theoplayer/basic-hls` version 10.10.0](https://www.npmjs.com/package/@theoplayer/basic-hls/v/10.10.0) was incorrectly published with the `basic-dash` feature set. If you're using this variant, please update to version 10.11.1 or higher for the correct feature set.

### Android

#### ✨ Features

- Added `NetworkConfiguration` support for retries for OptiView Real-time streams.

#### 🐛 Issues

- Fixed an issue where the bandwidth caching parameter was ignored when caching DRM-protected streams.
- Fixed an issue during offline playback where playing a not fully downloaded content-protected (DRM) stream could cause a crash.  
- Fixed an issue where a stall during playback on Chromecast for OptiView Live streams was not handled correctly.

### iOS

#### ✨ Features

- Made the `contentProtection` property public on the `EndpointAPI` protocol.

#### ⚡ Improvements

- Fixed an issue where recovery from network errors while playing and OptiView Live stream could take longer than expected due to platform limitations.

#### 🐛 Issues

- Fixed an issue where using `player.ads.schedule(adDescription:)` API did not trigger an ad playback.
- Fixed an issue where the recovery logic during playback of OptiView Live streams could check incorrect endpoints.
- Fixed an issue where playback was stuck when receiving an empty VAST for OptiView Ads.
- Fixed a bug that reset the `autoplay` flag whenever an integration was added to the player.
- Fixed an issue where OptiView Ads with VAST would not play in picture-in-picture mode.
- Fixed an issue where track selection was not respected during Chromecast.

## 🚀 10.9.0 (2026/01/29)

### Web

#### ✨ Features

- Added `DashPlaybackConfiguration.contentSteering` to control whether content steering is enabled in MPEG-DASH streams.

#### ⚡ Improvements

- Added the ability to set a `RetryConfiguration` on a per-source basis.

#### 🐛 Issues

- Fixed an issue for OptiView Ads where the layout could be incorrect when playing a VAST ad in double box or L-shape layout.
- Fixed an issue where the player could not switch sources after a DAI stream errored.
- Fixed an issue where a WideVine L1 protected DASH stream would occasionally fail to play on certain Android FireTV models (AFTSS & AFTSSS).
- Fixed an issue where an `#EXT-X-KEY` with a base64 `data:` URI was sometimes parsed incorrectly from the HLS playlist.
- Fixed an issue where playback of subsequent OptiView Live sources would cause incorrect endpoints to be selected.
- Fixed an issue where MPEG-DASH content steering was sometimes not switching to a different `serviceLocation` when segment downloads failed.
- Fixed an issue where a PS4 WebMAF app could freeze upon requesting a media segment.
- Fixed an issue where the timecode text track would not be present on HESP streams that contain SEI timecodes.
- Fixed an issue in MPEG-DASH Content Steering where the `Retry-After` header was not respected when the server returned status code `429`.
- Fixed an issue where a crash would occur when playing an unsupported VPAID ad during native fullscreen on iOS Safari for an OptiView Ads stream.
- Fixed an issue in MPEG-DASH Content Steering where the `_DASH_throughput` and `_DASH_pathway` query parameters only supported a single pathway.
- Fixed an issue in MPEG-DASH Content Steering where sometimes a `serviceLocation` was chosen that was outside the provided `PATHWAY-PRIORITY` list.
- Fixed an issue in MPEG-DASH Content Steering where `_DASH_throughput` would report a pathway that was not actually downloaded.
- Fixed an issue in MPEG-DASH Content Steering where the default serviceLocation was not respected with `queryBeforeStart="false"`.
- Fixed an issue where the player would dispatch play/pause events incorrectly when playing ad break to ad break on an OptiView Ads stream.
- Fixed an issue for OptiView Ads where an IMA ad break could error when playing in iOS Safari native fullscreen.
- Fixed an issue for OptiView Ads where the audio could play multiple times for a VAST ad in Picture-in-Picture.
- Fixed an issue for OptiView Ads where the same ad could sometimes be scheduled multiple times.
- Fixed an issue where the `playing` event was sometimes not dispatched when resuming playback after fallback of an OptiView Live stream.

### Android

#### ⚡ Improvements

- The player will now automatically switch to a different quality when the current quality needs a DRM key that is missing in the DRM license. (Previously, the player would crash with a `MediaCodec.CryptoException` instead.)

#### 🐛 Issues

- Fixed an issue where `Ads.getCurrentAds()` could contain `null` ads.
- Fixed an issue where `player.duration` was incorrectly reported as `Infinity` for MP3 files when using the `HttpEngine` network stack.
- Fixed an issue where `TrackListChangeEvent` was not triggered when the subtitles were turned off.
- Fixed an issue where the subtitle state was not maintained between the sender and receiver apps.

#### ⚠ Known Limitations

- When the player's ABR strategy is set to `QUALITY`, but the highest quality is missing a required DRM key, the player will fall back to *any* other quality (not necessarily the highest quality with an available DRM key).

### iOS

#### ✨ Features

- Added a `LatencyManager` to control offset from live in HLS livestreams.

### Roku

#### ✨ Features

- Created the THEOMuxConnector to enable Mux analytics in the THEO Roku SDK.

#### 🐛 Issues

- Fixed an issue where Comscore and Adobe connectors could spawn multiple lingering task threads after multiple instantiations.
- Fixed an issue where VOD Google SSAI assets would not play.
- Fixed an issue where the stall detection would wrongly say a stream with no audio was stalled.

## 🚀 10.8.0 (2026/01/15)

### Web

#### ✨ Features

- Added support for MPEG-DASH content steering.
- Added support for `player.metrics.bufferedSegments` when playing an HLS stream.

#### ⚡ Improvements

- OptiView Streaming sources now support more `TypedSource` properties, such as `TypedSource.abr` and `TypedSource.crossOrigin`.

#### 🐛 Issues

- Fixed an issue where some HLS live streams could stall indefinitely when playing over an `#EXT-X-DISCONTINUITY` on Samsung Tizen devices.
- Fixed an issue where the `player.currentTime` could be incorrect after playing a CSAI ad with OptiView Ads.
- Fixed an issue where `player.metrics.currentBandwidthEstimate` was not set when playing an HESP stream.
- Fixed an issue where the player would sometimes jump back to the first ad of an OptiView Ads break instead of continuing with the second ad of that break.
- Fixed an issue for OptiView Ads where a VAST ad break in Safari native fullscreen could stutter.

### iOS

#### ✨ Features

- Added the `Network` API to `CachingTask` to help enable media playlist interception.

#### 🐛 Issues

- Fixed an issue where seeking to the live point could cause unnecessary buffering on OptiView Streaming (THEOlive) sources.

#### 👎 Deprecations

- Deprecated `DeveloperSettings` & `ManifestInterceptor` in favor of `NetworkAPI`. You can access the network API from `player.network` or `cachingTask.network`. For a comprehensive guide, please refer to [our documentation](https://optiview.dolby.com/docs/theoplayer/how-to-guides/network/ios-hls-media-playlist-interceptor/).

### Roku

#### 🐛 Issues

- Fixed an issue where OptiView Live streams would not properly fall back to a backup feed in case of a streaming error.
- Fixed an issue where OptiView Live streams could experience endless buffering without recovering.

## 🚀 10.7.2 (2026/01/27)

### Web

#### 🐛 Issues

- Fixed an issue where HLS playback on lower spec devices could error on a quality change between qualities with identical initializers.

## 🚀 10.7.1 (2026/01/26)

### Web

#### 🐛 Issues

- Fixed an issue where HLS playback on lower spec devices could error on a quality change briefly after starting playback.

## 🚀 10.7.0 (2025/12/16)

### Web

#### ✨ Features

- Added the ability to override connect options for OptiView Real-time streams.
- Added support for casting token-protected OptiView Live DVR streams to Chromecast.
- Added Millicast connect options to the OptiView Live discovery response.

#### ⚡ Improvements

- Added `RetryConfiguration` support for OptiView Real-time streams.
- Improved OptiView Real-time stream stability by automatically attempting to reconnect when errors occur mid-stream.

#### 🐛 Issues

- Fixed an issue where the player would not play from the live point when exiting an errored casting session.
- Fixed an issue for OptiView Ads where using a CSAI adbreak would not be handled properly when going into PiP or native fullscreen.
- Fixed a regression where `currentProgramDateTime` was no longer returning `null` for non-DVR streams without program date time information.
- Fixed an issue with consecutive ad breaks on an OptiView Ads Stream where the second ad break would not play if its duration was smaller than the preceding ad break.
- Fixed an issue where the player would play a CSAI ad break muted in a double box layout for an Optiview Ads stream.
- Fixed an issue where pausing OptiView Real-time streams would show a frozen frame on browsers on Android devices.
- Fixed an issue where CEA-608 captions from the content continued showing during an SSAI ad break.

### Android

#### ✨ Features

- Added `DRMConfiguration.multiSession` to enable multi-session support for streams that require different key requests for different qualities, or for streams that use key rotation.
- Added support for casting token-protected OptiView Live DVR streams to Chromecast.
- Added the ability to override connect options for OptiView Real-time streams.

#### 🐛 Issues

- Fixed an issue where subtitles could not be turned off while using Chromecast.
- Fixed an issue where failover of OptiView Live sources during HLS playback would return the player to non-HLS playback.

#### 👎 Deprecations

- Deprecated `THEOplayerConfig.isMultiSession`, use `DRMConfiguration.multiSession` instead.

### iOS

#### ✨ Features

- Added Chromecast support for DVR-enabled OptiView Live streams.
- Added the ability to override connect options for OptiView Real-time streams.

#### 🐛 Issues

- Fixed a regression where PiP was not retained when the `retainPresentationModeOnSourceChange` setting was enabled in the `PipConfiguration`. 
- Fixed an issue where the auth token was not being passed correctly with DVR enabled OptiView Live streams.

### Roku

#### 🐛 Issues

- Fixed an issue where closed captions would be disabled when destroying the player while buffering.

## 🚀 10.6.1 (2025/12/02)

### Android

#### 🐛 Issues

- Fixed an issue where ID3 metadata from an HLS alternative audio rendition was not being parsed.

## 🚀 10.6.0 (2025/12/02)

### Web

#### ✨ Features

- Added a fallback to the Google DAI server-side beaconing stream when an OptiView Ads stream or OptiView Live stream with ads enabled is played via Airplay and a `daiAssetKey` is defined.
- Added support for personalized discovery call responses by configuring the `profile` property on an OptiView Live source.

#### ⚡ Improvements

- Added `ActiveQualityChanged` event for OptiView RealTime streams.
- Improved HLS segment selection on ABR changes to not download segments that had already been buffered in a different quality.
- The query parameters on the endpoint license acquisition URL of a DRM protected OptiView Live stream now take precedence over the query parameters that are defined in `contentProtection.queryParameters` or in the corresponding key system configuration.
- The `player.ads.dai` API is now undefined when there the DAI library is not loaded.

#### 🐛 Issues

- Fixed an issue where the player would always preload the Google DAI manifest when setting a Google DAI source.
- Fixed an issue where audio labels would not default to the language for HESP streams.
- Fixed an issue where the player could stall shortly on a discontinuity switch if the stream contained a small gap.
- Fixed issue where failover of OptiView Live sources during HLS playback would return the player to non-HLS playback.

#### 👎 Deprecations

- Deprecated `preloadPublications` on the THEOliveAPI. This will be removed in a future version.

### Android

#### ✨ Features

- Added Chromecast support for DVR-enabled OptiView Live streams.
- Added support for personalized discovery call responses by configuring the `profile` property on an OptiView Live source.

#### ⚡ Improvements

- The query parameters on the endpoint license acquisition URL of a DRM protected OptiView Live stream now take precedence over the query parameters that are defined in `contentProtection.queryParameters` or in the corresponding key system configuration.

#### 👎 Deprecations

- Deprecated `preloadPublications` on the THEOliveAPI. This will be removed in a future version.

### iOS

#### 💥 Breaking Changes

- THEOplayer SDK and all its integrations frameworks will now be built with Xcode 16 instead of 15. We expect no impact on applications since Apple enforced the policy of building with Xcode 16 to publish to the app store since April 24, 2025. Categorizing this as "Breaking change" since the compiler is bumped from Swift 5.10 to 6.0 with the Xcode version bump.

#### ✨ Features

- Added `targetQualities` property to `MediaTrack` API. Only supported for THEOlive.
- Added support for personalized discovery call responses by configuring the `profile` property on an OptiView Live source.
- Added a new experimental pipeline for chromecast, which enables new features, i.e. OptiView Live DVR. To use the new pipeline enable the `enableExperimentalPipeline` on the `CastConfiguration` object when creating the CastIntegration.

#### 🐛 Issues

- Fixed an issue where sometimes playback would pause after ending an OptiView Ads ad break on iPadOS.
- Fixed an issue where `player.buffered` would return the same as `player.seekable`.
- Fixed an issue where adding multiple drm query parameters would not work as expected.

#### 👎 Deprecations

- Deprecated `preloadPublications` on the THEOliveAPI. This will be removed in a future version.

### Roku

#### ✨ Features

- Added support for personalized discovery call responses by configuring the `profile` property on an OptiView Live source.

## 🚀 10.5.1 (2025/11/26)

### Web

#### 🐛 Issues

- Fixed an issue where seeking back in an OptiView Live stream with a DVR window on iOS Safari would make the player jump to the live edge instead of the desired time.
- Fixed an issue where the current time was incorrect when returning from casting a DVR asset.

### Android

#### 🐛 Issues

- Removed dependency on `kotlinx-datetime` library from OptiView Ads integration.

## 🚀 10.5.0 (2025/11/19)

### Web

#### ✨ Features

- Added support for targeted bitrate limiting on OptiView Live streams with OptiView Ads enabled.
- Added the `fallback` event to the `theoads` API to indicate when the player falls back to Google DAI when OptiView Ads is not supported or blocked.
- Added support for configuring query parameters that are common to multiple key system configurations. The parameters defined in `contentProtection.queryParameters` will be merged with any query parameters that are explicitly defined on a key system configuration, whereby the latter takes precedence.

#### ⚡ Improvements

- Updated OptiView Ads overlays to be available during the whole DVR range instead of being removed after it was shown.
- Improved the transition from content to ad on Safari for OptiView Ads.

#### 🐛 Issues

- Fixed an issue for OptiView Ads where the player could get stuck when scheduling multiple ad breaks close together. 
- Fixed an issue where the player would not dispatch an `AdErrorEvent` when failing to play an ad during an OptiView Ads stream.
- Fixed a regression since 10.2.0 for OptiView Ads where a scheduled overlay could be rendered multiple times.
- Fixed an issue where incorrect events were dispatched when transitioning between content and ads for OptiView Ads.
- Fixed an issue where the cues of text tracks would never be pruned on HLS live streams.
- Fixed an issue where the player would sometimes throw a media decode error on PS5 when playing multi period DASH streams.
- Fixed an issue where the Uplynk UI was creating unnecessary DOM nodes on every `timeupdate` event, even when the Uplynk integration was not in use.
- Fixed an issue for OptiView Ads where L-Shape ad breaks on iOS would show the content instead of the backdrop.
- Fixed an issue where multiple quartile events could be dispatched when playing a Google DAI source.

### Android

#### ✨ Features

- Added `TheoAdsFallbackEvent` to indicate when the player falls back to Google DAI when OptiView Ads is not supported or blocked.
- Added support for targeted bitrate limiting on OptiView Live streams with OptiView Ads enabled.
- Added support for configuring query parameters that are common to multiple key system configurations. The parameters defined in `contentProtection.queryParameters` will be merged with any query parameters that are explicitly defined on a key system configuration, whereby the latter takes precedence.

#### 🐛 Issues

- Fixed an issue where an `InterstitialError` event was incorrectly emitted for single ads in OptiView Ads.
- Fixed an issue where the `AddAdBreakEvent` would fire multiple times while playing a Google DAI ad.
- Fixed an issue on OptiView Ads where an additional `AdBegin` event was fired in case of an ad error or very short slate.
- Fixed an issue where the player did not always fall back to a configured Google DAI stream when it encounters a problem with the main OptiView Ads stream.
- Fixed an issue where `AdBreakBeginEvent` was fired at the start of each ad in a Google IMA/DAI ad break, instead of just once at the start of the ad break.
- Fixed an issue where a crash could occur due to locally stored bandwidth properties being null unexpectedly.
- Fixed an issue where `AdBreak.timeOffset` was always 0 for midrolls in a Google DAI livestream.
- Fixed an issue where different midroll ad breaks in a Google DAI livestream were incorrectly represented by the same `AdBreak` object.
- Fixed an issue where ad breaks in a Google DAI livestream were never removed from the Ads API after being played.
- Fixed an issue where OptiView Live was incorrectly skipping endpoints with higher priority.

### iOS

#### ✨ Features

- Added `THEOadsFallbackEvent` to indicate when the player falls back to Google DAI when OptiView Ads is not supported or blocked.
- Added support for targeted bitrate limiting on OptiView Live streams with OptiView Ads enabled.
- Added support for configuring query parameters that are common to multiple key system configurations. The parameters defined in `DRMConfiguration.queryParameters` will be merged with any query parameters that are explicitly defined on a key system configuration, whereby the latter takes precedence.

#### 🐛 Issues

- Fixed an issue where both SGAI and SSAI were enabled for a SSAI only OptiView Live stream.
- Fixed an issue where accessing the ad break of a Google DAI ad would crash the application.
- Fixed an issue where playback would not automatically start when setting a new source and calling play after connecting to AirPlay. 
- Fixed an issue where the picture-in-picture presentation mode was not preserved when an adbreak ended for OptiView Ads.
- Fixed an issue where player controls and API's were broken when returning from a Chromecast session. 

#### 👎 Deprecations

- Deprecated the `adBreak` property of the `Ad` protocol, this property can still be used but will become optional with the next major version.

### Chromecast

#### 🐛 Issues

- Fixed an issue where a mismatch could occur between enabled tracks on the sender versus the receiver, causing unexpected behaviour in audio track selection.

### Chromecast CAF

#### ✨ Features

- Added support for configuring query parameters that are common to multiple key system configurations.

### Roku

#### ✨ Features

- Added support for targeted bitrate limiting on OptiView Live streams with OptiView Ads enabled.

#### 🐛 Issues

- Fixed an issue where a crash could occur due to event listener cleanup during player destruction.

## 🚀 10.4.1 (2025/11/14)

### Web

#### ⚡ Improvements

- Improved the performance of CEA-608 parsing and rendering.

#### 🐛 Issues

- Fixed an issue where the cues of text tracks would never be pruned on HLS live streams.

### iOS

#### 🐛 Issues

- Fixed an issue where accessing the ad break of a Google DAI ad would crash the application.
- Fixed an issue where unmuting the player on iOS failed after muting a stream that contains an IMA ad.
- Fixed an issue where after loading a VMAP ad, additional VMAP ads would fail to load and playout would be broken.

#### 👎 Deprecations

- Deprecated the `adBreak` property of the `Ad` protocol, this property can continue to be used but will become optional with the next major version.

## 🚀 10.4.0 (2025/11/05)

### General

#### ⚡ Improvements

- Aligned the position of the video during an OptiView Ads L-Shape interstitial to be consistent across SDKs.

### Web

#### ✨ Features

- Added DVR switching for OptiView Live streams so users can seek between live sources (HESP/Millicast) and DVR sources (HLS) on DVR-enabled channels.
- Added support for DAI SSAI as the primary stream for OptiView Live streaming.

#### 🐛 Issues

- Fixed an issue for OptiView Ads where Overlay interstitials did not update during an ad break interstitial where the content continues playing.
- Fixed an issue for OptiView Ads where the backdrop set in the source description wasn't used correctly.

### Android

#### 🐛 Issues

- Fixed a regression where `TheoLiveSource.headers` were no longer being passed to the discovery call for OptiView Live streams.
- Fixed an issue where sideloaded WebVTT chapters and thumbnails tracks could not both be enabled at the same time.
- Fixed an issue where ad configuration parameters were not being applied to DAI OptiView Live streams.
- Fixed an issue where the player could crash while loading an OptiView Live channel that is unavailable.

#### 👎 Deprecations

- Deprecated `TheoAdsErrorEvent`. Use the `AdErrorEvent` on the Ads API instead.

### iOS

#### ✨ Features

- Added a convenience initializer to `GoogleDAITypedSource` to enable DRM with Google DAI. 
- Added support for DAI SSAI as the primary stream for OptiView Live streaming.

#### 🐛 Issues

- Fixed an issue for OptiView Ads where the backdrop set in the source description wasn't used correctly.

### Roku

#### 🐛 Issues

- Added protection against unexpected values being set for `encoding_type` on Conviva metadata.

## 🚀 10.3.0 (2025/10/23)

### Web

#### 🐛 Issues

- Fixed an issue where embedded subtitles could sometimes disappear after repeatedly seeking back and forth in an MPEG-DASH stream.
- Fixed an issue where disconnecting a headset while playing an MPEG-DASH live stream causes the player to stall.

### Android

#### ✨ Features

- Added SSAI fallback through DAI for OptiView Ads if an ad blocker prevents ads from playing when using OptiView Streaming.
- Added support for `adTagParameters` on `gamProperties` for overlays and `backdropURIGamProperties` for backdrops on OptiView Ads.
- Added support for DAI SSAI as a primary stream source via OptiView Streaming.

#### 🐛 Issues

- Fixed an issue where EZDRM ClearKey license responses were not correctly handled and could result in playback failures.
- Fixed an issue where HLS streams with gzip compressed playlists failed to play on older Android devices when the HTTP response contains a `Content-Encoding` header with a lowercased header name (i.e. `content-encoding`).
- Fixed an issue where OptiView Ads playback was broken after the application comes back from background.

#### 👎 Deprecations

- Deprecated `THEOplayerConfig.getPipConfiguration()`, use `THEOplayerConfig.getPip()` instead.
- Deprecated `THEOplayerConfig.getNetworkConfiguration()`, use `THEOplayerConfig.getNetwork()` instead.
- Deprecated `THEOplayerConfig.getTHEOLiveConfiguration()`, use `THEOplayerConfig.getTheoLive()` instead.
- Deprecated `THEOplayerConfig.castConfiguration`, use `THEOplayerConfig.cast` instead.
- Deprecated `THEOplayerConfig.googleImaConfiguration`, use `THEOplayerConfig.googleIma` instead.

### iOS

#### ✨ Features

- Added support for `adTagParameters` on `gamProperties` for overlays and `backdropURIGamProperties` for backdrops on OptiView Ads.
- Added `averageBandwidth` property to the `Quality` API.
- Added `activeQuality` property to the `MediaTrack` API.
- Deprecated `activeQualityBandwidth` property from the `MediaTrack` API, use `activeQuality` instead. To access the bandwidth value, use the `bandwidth` property of `activeQuality`.
- Added `Ad.isSlate` API to indicate whether the ad is slate or not. 
- Added `playerMetrics` API with `droppedVideoFrames` property.
- Added `renderedFramerate` property to `Metrics` API.

#### ⚡ Improvements

- Improved ad break reporting for Google DAI by already creating an ad break when not all information is known from Google DAI. We will dispatch `UpdateAdBreakEvent` when more information is known from Google DAI.

#### 🐛 Issues

- Fixed an issue where the `player.muted` and `player.volume` properties were not preserved when setting a source when OptiView Ads is included.
- Fixed an issue where `player.ads.playing` would return `false` when joining a Google DAI stream in the middle of an advertisement.
- Fixed an issue where the `TextTrackListEventTypes.REMOVE_TRACK` event listener would not trigger.
- Fixed an issue where the `aspectRatio` and `videoRect` APIs were not working correctly.

#### 👎 Deprecations

- Deprecated return type of `metrics` API. The type will change from `Any?` to `Metrics` with the next major version.

### Roku

#### ✨ Features

- Added Google DAI support for OptiView Live streams.

## 🚀 10.2.2 (2025/10/14)

### Web

#### 🐛 Issues

- Fixed an issue where the `TheoAdDescription.adTagParameters` were not used for interstitial with the `LSHAPE_CONTENT` layout on OptiView Ads.

### Android

#### 🐛 Issues

- Fixed an issue where the second and following Ad breaks were not playing for Optiview Ads.

### iOS

#### 🐛 Issues

- Fixed an issue where playing OptiView Streaming (THEOlive) streams could crash due to a race condition.

## 🚀 10.2.1 (2025/10/13)

### Web

#### 🐛 Issues

- Fixed an issue where the `TheoAdDescription.adTagParameters` were not used for backdrops on OptiView Ads.
- Fixed a regression in Chromium-based browsers on macOS where HESP streams would sometimes fail to start.
- Fixed an issue where the player would not play any ads after the player has errored on playing a l-shape content interstitial during native fullscreen for an OptiView Ads stream.
- Fixed an issue where the player would show a black screen during native fullscreen when the player already errored on playing a l-shape content interstitial during native fullscreen and then switched back to inline playback for an OptiView Ads stream.

### iOS

#### 🐛 Issues

- Fixed an issue where the `THEOAdDescription.adTagParameters` were not used for backdrops on OptiView Ads.

## 🚀 10.2.0 (2025/10/09)

### Web

#### ✨ Features

- Added VAST ad support for Smart TVs with OptiView Ads.
- Added support for adding an authToken to OptiView live streams when casting (given that a cast receiver is used with the [useShakaForHls](https://developers.google.com/cast/docs/web_receiver/shaka_migration/) flag set).
- The [`@theoplayer/extended` package on npm](https://www.npmjs.com/package/@theoplayer/extended) now also supports OptiView Live streams.
- Added support for adTagParameters on gamProperties for Overlays and backdropURIGamProperties for backdrops on OptiView Ads.

#### ⚡ Improvements

- Improved the startup times on certain smart TVs.
- Improved the ABR to select higher resolutions on smart TVs whose `devicePixelRatio` is greater than `1.0`.
- `InterceptableRequest.redirect()` and `.respondWith()` now accept iterables and native `Headers` objects when replacing the request/response headers.

#### 🐛 Issues

- Fixed an issue where a VAST ad could be invisible in combination with OptiView Ads.
- Fixed an issue where the player shows a black screen when it tries to load an l-shape content interstitial during native fullscreen or native picture-in-picture for an OptiView Ads stream.
- Fixed an issue where the player would sometimes show a black screen instead of video while falling back on OptiView live streams.
- Fixed an issue where the seekable was not correct on certain HLS streams.
- Fixed an issue where the player would sometimes stall for a very short time on Safari right after starting playback on some HLS streams.
- Fixed an issue where old devices without WebAssembly support could not transmux MPEG-TS segments.
- Fixed an issue where an HLS live stream with a very short DVR window would stall immediately on iOS Safari when initiating playback.
- Fixed an issue where the player would not switch back to the content after playing back to back l-shape content interstitials on an OptiView Ads stream.
- Fixed an issue where OptiView live streams didn't start playing after a channel transitioned from offline to playing.

### Android

#### ✨ Features

- Added `Player.poster` API for displaying the poster image in the player.
- Added `CurrentSourceChangeEvent`, which is dispatched when the player receives a new source from `SourceDescripion.sources`.
- Allow overriding `adTagParameters` for an individual overlay interstitial.

#### ⚡ Improvements

- Increased the maximum number of HTTP 3xx redirects to follow to 20, to align with standard browser behavior.

#### 🐛 Issues

- Setting `SourceDescription.poster` will now display the poster both in the  player UI and when casting to Chromecast.
- Fixed an issue where live streams on Chromecast would start at the beginning of their DVR window if the current time was unknown.
- Fixed an issue for OptiView Ads where the current time was incorrect during  an ad break with `DOUBLE` layout.
- Fixed an issue where the `Content-Length` header was not available in `HTTPResponse.headers` when using the new default network stack. Note that when the response body is compressed, this header will still be unavailable.
- Fixed an occasional `InterruptedException` being logged to Logcat while playing an LL-HLS stream when the `Logger.Media3` logs are enabled.
- Fixed an issue where SVG overlay images might not be visible in an OptiView Ads stream.
- Fixed a regression where `Player.readyState` was not updated while playing a Google IMA ad.
- Fixed an issue where the selected text track would get disabled on multi-period DASH streams if the codec of the text tracks between the periods were different.

### iOS

#### ✨ Features

- Added `Quality` and `VideoQuality` protocols. `ActiveQualityChangedEvent` now has a `quality` property.
- Added the option to override `adTagParameters` for an individual overlay interstitial.
- Added the CurrentSourceChangeEvent, which is dispatched when the player starts playing a new source.
- Added `qualities` property to `MediaTrack`.
- The player now dispatches `EncryptedEvent` and `ContentProtectionSuccessEvent` during a DRM flow. `EncryptedEvent` indicates the start of a DRM flow, while `ContentProtectionSuccessEvent` indicates the success. Use `PlayerEventTypes.ENCRYPTED` and `PlayerEventTypes.CONTENT_PROTECTION_SUCCESS` to listen to these events.

#### ⚡ Improvements

- Reporting errors for THEOlive (OptiView Streaming) streams via CMCD headers

#### 🐛 Issues

- Fixed an issue where THEOlive (OptiView Streaming) would not start playing after coming back from the background.
- Fixed an issue where deinitializing the player during the loading of a THEOlive (OptiView Streaming) stream would cause a crash.

### Chromecast CAF

#### ✨ Features

- Added support for adTagParameters on gamProperties for Overlays on OptiView Ads.

### Roku

#### ⚡ Improvements

- Improved URL rewriting in `THEOM3u8TagRemover` so relative URLs that begin with a slash are handled correctly.

## 🚀 10.1.1 (2025/09/30)

### Web

#### 🐛 Issues

- Fixed an issue where the player would run into a fatal decode error on HESP streams on Chromium based browsers without hardware acceleration.

## 🚀 10.1.0 (2025/09/24)

### General

#### ✨ Features

- Added the `adTagParameters` property to OptiView `Interstitial`.

### Web

#### ⚡ Improvements

- Added `segmenterror` and `manifesterror` events to be used for detecting offline status. 

#### 🐛 Issues

- Fixed an issue where live streams on Chromecast would start at the beginning of their DVR window if the current time was unknown.
- Fixed an issue where the player would sometimes stall about 10 seconds after stream start on devices with slow appends on certain HLS streams.

#### 👎 Deprecations

- Deprecated the `segmentnotfound`, `manifestnotfound`, `offline`, and `online` events. Use the new `manifesterror` and `segmenterror` events to detect offline status. Use the `manifestupdate` event to detect online status.

### Android

#### ✨ Features

- Added Google IMA VAST support to OptiView Ads.

#### 🐛 Issues

- Fixed an issue where the player would crash with an `IllegalArgumentException` when playing certain low-latency HLS streams.
- Fixed an issue where the player could stall indefinitely when enabling an embedded subtitle track containing no actual subtitles.
- Fixed an issue where some HLS streams with gzip compressed playlists failed to play when using the new default network stack on Android 14 or higher (or when using Cronet).

### iOS

#### 🐛 Issues

- Fixed an issue where the quartile events would not be dispatched for OptiView Ads.
- Fixed an issue where the player would not switch to the next adbreak when playing adbreak to adbreak with OptiView Ads.
- Fixed an issue that causes a crash after listening to `TextTrackListEventTypes.ADD_TRACK` and loading webVTT subtitles in an app that is compiled using Swift 6 and is using `@preconcurrency import THEOplayerSDK`.
- Fixed an issue where Dolby OptiView Streams would crash in a rare race condition during playback.

### Roku

#### ✨ Features

- Made the Conviva connector able take a new player instance after the previous instance was destroyed.
- Added `encoding_type` to custom metadata sent to Conviva.

## 🚀 10.0.1 (2025/09/16)

### Android

#### 🐛 Issues

- Fixed an issue where HTTP POST requests made by the player (such as DRM license requests) failed to be sent using the new default network stack on Android 14 or higher (or when using Cronet).
- Fixed `MillicastSource` referencing types from the native Millicast SDK that were not correctly included in the published API of the Millicast integration.

## 🚀 10.0.0 (2025/09/12)

### Announcing THEOplayer 10.0

We are happy to announce the tenth major version of THEOplayer, releasing all the improvements and developments our team has achieved since version 9.0.

THEOplayer 10.0 includes **some breaking changes per SDK**. Please review them carefully in the respective changelog for your SDK.

- On Android, THEOplayer now always uses the Media3 pipeline for all playback, bringing bug fixes, performance improvements and increased stability across a wider range of devices! Check out our [Media3 guide](https://optiview.dolby.com/docs/theoplayer/how-to-guides/android/media3/getting-started/) for more information.

- The Android SDK will now automatically use modern network stacks with HTTP/2 and HTTP/3 support when available, optimizing media delivery to your viewers.

- [OptiView Ads](https://optiview.dolby.com/docs/theoads/) is now fully supported on iOS. This brings our personalized advertising solution to all major platforms.

For more info on navigating our breaking changes, take a look at our migration guides for [Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/migrating-to-theoplayer-10/), [Android](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/android/migrating-to-theoplayer-10/), [iOS](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/ios/migrating-to-theoplayer-10/) and [React Native](https://optiview.dolby.com/docs/theoplayer/getting-started/frameworks/react-native/migrating-to-react-native-theoplayer-10/).

### Web

#### 💥 Breaking Changes

- Removed `AdBreakEvent.ad`, use `AdBreakEvent.adBreak` instead.
- Removed `THEOplayerAdDescription` type, use `CsaiAdDescription` instead.
- Removed `WebVTTRegion.identifier`, use `WebVTTRegion.id` instead.
- Removed `PlayerConfiguration.vr`. This configuration was already ignored since version 9.0.0, because the player always uses WebXR.
    - Note that `SourceDescription.vr` is not affected, and is still required to play a virtual reality source.
- Removed `MediaTailorSource.adParams`, use `MediaTailorSource.adsParams` instead.
- Removed `PlayerConfiguration.verizonMedia`, use `PlayerConfiguration.uplynk` instead.
- Removed `'verizon-media'` as a valid source integration ID for Uplynk sources (previously Verizon Media). Uplynk sources must now have their `integration` set to `'uplynk'` instead.
- Removed THEOlive publication events (`publicationloadstart`, `publicationloaded` and `publicationoffline`), use the equivalent distribution events instead (`distributionloadstart`, `endpointloaded` and `distributionoffline` respectively).
- Enabled `GoogleImaConfiguration.useAdUiElementForSsai` by default, allowing Google DAI to show additional ad UI elements on top of the player if needed (such as a skip button for skippable ads).
- Removed support for THEOlive sources using `source.integration = 'theolive'`. THEOlive sources must now have their `type` set to `'theolive'` instead.

### Android

#### 💥 Breaking Changes

- Updated `minSdk` to API 23 ("Marshmallow"). This aligns with [other Android Jetpack libraries requiring API 23 as of June 2025](https://developer.android.com/jetpack/androidx/versions#version-table).
- Updated to target Kotlin 2.0 language level, to [align with AndroidX Core 1.17.0](https://developer.android.com/jetpack/androidx/releases/core#core_and_core-ktx_version_117_2). This requires Kotlin Gradle Plugin 2.0.0 or newer.
- Removed support for the legacy playback pipeline (using `TypedSource.playbackPipeline = PlaybackPipeline.LEGACY`). The player will now always use the Media3 playback pipeline.
    - This brings down the `.aar` size of the Core SDK from ~33 MB to ~2 MB (excluding dependencies).
- Removed support for the legacy cache backend (using `CachingParameters.storageType = CacheStorageType.LEGACY`). All caching tasks will now use the Media3 cache backend, and any previously cached streams that used the legacy backend will need to be re-downloaded.
- Changed `NetworkConfiguration.useHttpEngine` to be enabled by default, allowing the player to switch to a modern network stack with HTTP/2 and HTTP/3 support if available.
- Removed unused `GoogleDaiConfiguration.format`.
- Removed `MediaTailorSource.adParams`, use `MediaTailorSource.adsParams` instead.
- Removed the `DashPlaybackConfiguration.ignoreAvailabilityWindow()` method, use the `.ignoreAvailabilityWindow` property instead.
- Removed `KeySystemConfiguration.isUseCredentials`, use `KeySystemConfiguration.useCredentials` instead.
- Removed `ConaxDRMConfiguration.Builder.fairPlay()`, use `ConaxDRMConfiguration.Builder.fairplay()` instead.
- Removed THEOlive publication events (`PublicationLoadStartEvent`, `PublicationLoadedEvent` and `PublicationOfflineEvent`), use the equivalent distribution events instead (`DistributionLoadStartEvent`, `EndpointLoadedEvent` and `DistributionOfflineEvent` respectively).
- Removed `THEOplayerGlobal.playbackSettings`. This API is not supported in the Media3 playback pipeline.
- Removed `SourceChangeEvent.playbackPipeline`.

#### 🐛 Issues

- Fixed an issue where a THEOlive stream would not start playing on `play()` after first playing a different stream.

### iOS

#### 💥 Breaking Changes

- In an effort to align with the changes made by Apple regarding the [App Store publishing policy](https://developer.apple.com/news/upcoming-requirements/?id=02212025a), starting from THEOplayer 10.0 we will distribute our SDK builds using Xcode 16. Effectively, this means that developing a client application using THEOplayer iOS/tvOS SDK will require a minimum version of Xcode 16.
- Removed the flag `useLegacyPlaybackEngine` in the initializer of `THEOliveConfiguration`.
- Removed THEOlive publication events (`PublicationLoadStartEvent`, `PublicationLoadedEvent` and `PublicationOfflineEvent`), use the equivalent distribution events instead (`DistributionLoadStartEvent`, `EndpointLoadedEvent` and `DistributionOfflineEvent` respectively).
- Removed the `destroy` method. Instead, destroy the player by removing its reference `self.player = nil`.
- Removed the `set` from the subscript of the `TextTrackList` API. The `TextTrackList` is a read-only list.

#### ✨ Features

- Added Google IMA VAST support to OptiView Ads.

### Roku

#### 💥 Breaking Changes

- Removed the `getHeader` method from the Network API in favor of the new `getHeaders` method.

#### ⚡ Improvements

- Added the `getHeaders` method to Network API.
- Added protection against race conditions during destruction of the player.
