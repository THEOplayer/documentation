---
title: Changelog
description: Find out what's new in THEOplayer.
sidebar_custom_props: { 'icon': '📰' }
toc_max_heading_level: 2
---

## 🚀 9.12.1 (2025/09/19)

### Web

#### 🐛 Issues

- Fixed an issue where the player would sometimes stall about 10 seconds after stream start on devices with slow appends on certain HLS streams.

## 🚀 9.12.0 (2025/09/09)

### Web

#### ✨ Features

- Added support for handling backdrop GAM properties for OptiView Ads streams.
- Added Google IMA VAST support to OptiView Ads.
- Added support for ABR strategies and bitrates for OptiView Real-time streams.

#### 🐛 Issues

- Fixed the styling of the L-shape layout when playing an OptiView Ads stream.
- Fixed an issue where the `currentTime` was `NaN` when using the MultiViewPlayer and an undefined `offset`.
- Fixed an issue on Firefox where sometimes the audio and video are desynced at the start of a live stream.
- Fixed an issue for OptiView Ads where an L-shape content ad break would not stop showing when playing a VOD source.
- Fixed an issue where the player would fail to play an HLS stream containing MPEG-TS segments with a non-trivial scaling list in their H.264 SPS.
- Fixed an issue where the player would play a single layout ad in L-shape layout when it previously played in an L-shape content layout for an OptiView ads stream.

### Android

#### ✨ Features

- Added support for loading background images from GAM properties for OptiView Ads.

#### ⚡ Improvements

- Updated the Millicast integration's dependency on the Millicast SDK to version 2.5.0.

#### 🐛 Issues

- Fixed an issue where cancelling one caching task when multiple are downloading and then stopping the app would leave caching progress notifications that could not be dismissed.
- Fixed an issue where quartile events were missing for alternative ad sources in OptiView Ads.
- Fixed an issue where `setTargetQuality` did not work as intended for OptiView Live Streams.
- Fixed an issue where `readyState` was not updated while playing a Google IMA ad.

### iOS

#### ✨ Features

- Added the `DOUBLE` layout for OptiView Ads.
- Added the OptiView Ads API via `player.theoads`. This is API specific to the [OptiView Ads](https://optiview.dolby.com/products/server-guided-ad-insertion) feature that exposes information about playing and scheduled interstitials and allows configuration of THEOads specific properties.
- Added support for handling backdrop GAM properties for OptiView Ads streams.

#### ⚡ Improvements

- Exposed more details on an `ErrorEvent` when the underlying `errorObject` is an `AVPlayerError`.
- Updated the Millicast SDK to v2.5.1 (for iOS & tvOS).

#### 🐛 Issues

- Fixed an issue where sideloaded text tracks would not cache correctly.
- Fixed an issue where fatal errors were not properly dispatched.
- Fixed playback rate not being reflected properly when using the GoogleCastIntegration.
- Fixed an issue where an overlay would not show due to incorrect encoding of query parameters for OptiView Ads.
- Fixed an issue where a fatal error would be dispatched when the app does not support background playback and the player is backgrounded while playing an OptiView Live stream.

## 🚀 9.11.0 (2025/08/26)

### Web

#### ✨ Features

- Added support for the L-shape content layout for OptiView Ads.

#### 🐛 Issues

- Fixed an issue where the player would not be able to play DRM enabled OptiView Live streaming channels that use the V1 API.
- Fixed a regression where `player.duration` incorrectly returned `+Infinity` instead of `NaN` for an HLS stream that has not yet started loading.

### Android

#### ✨ Features

- Added the possibility to schedule OptiView Ads Overlays through SSE.
- Added L-shape content support for OptiView Ads.
- Added `TextTrackDescription.format` to specify the content type of a sideloaded subtitle track in advance. When set, this allows the player to load the subtitle track only when enabled, instead of needing to load all subtitles at startup to detect their content type.

#### ⚡ Improvements

- Updated Media3 to [version 1.8.0](https://github.com/androidx/media/releases/tag/1.8.0).

#### 🐛 Issues

- Fixed an issue where the `play` and `pause` events were missing for an OptiView Ads ad break.
- Fixed an issue where the player would not wait for subtitles to be loaded before initiating playback, which could result in the first few subtitles not being displayed.
- Fixed an out-of-memory crash when playing a large MP4 file on certain low-end devices.
- Fixed an issue where the player would error when a sideloaded subtitle track fails to load. The player will now disable the track instead and continue playing without it.
- Fixed an issue where the player was unnecessarily trying to download images from a thumbnails track.

### iOS

#### ✨ Features

- Added support for the L-shape content layout for OptiView Ads.

#### 🐛 Issues

- Fixed an issue where the player configuration was not passed to the chromecast receiver causing image overlays to not work.
- Fixed an issue where an HLS live stream would not recover after a network offline recovery.

### tvOS

#### ⚡ Improvements

- Allow the player on Apple TV to choose the higher quality video track with the same resolution when playing OptiView Live streams.

### Roku

#### ✨ Features

- Added sideloading of the HLS master manifest to enable reporting of bitrate, average bitrate, and encoded framerate to Conviva.
- Added support for DPI analytics through the THEOConvivaConnector.

#### 🐛 Issues

- Fixed an issue where an invalid license message would flicker on start up.
- Fixed an issue where postroll ads were not being reported to Conviva.

## 🚀 9.10.2 (2025/08/20)

### iOS

#### 🐛 Issues

- Fixed an issue where the player would not switch up to a higher video quality as long as it didn't reach the target latency for OptiView Live streams.

## 🚀 9.10.1 (2025/08/13)

### iOS

#### 🐛 Issues

- Fixed an issue where the player did not throw an ErrorEvent when it could not fetch the playlist.

## 🚀 9.10.0 (2025/08/08)

### Web

#### ✨ Features

- Added support for multiple video instances on Sony PlayStation® 5.

#### ⚡ Improvements

- Improved order of events on stream startup for OptiView Live streams.
- Improved the OptiView Ad to content transition to be more consistent while also requiring less bandwidth.

#### 🐛 Issues

- Fixed an issue where WebVTT cue timestamps were not correctly adjusted for 33-bit PES timestamp wraparound when playing an HLS stream with fMP4 audio/video segments.
- Fixed an issue where a short HLS stream containing exactly one segment would stall near the end of the video instead.
- Fixed an issue where a WideVine L1 protected DASH stream would fail to play on Android Fire TV (model AFTMM).
- Fixed an issue where closed captions tracks in an HLS stream were sometimes missing information from their associated `#EXT-X-MEDIA:TYPE=CLOSED-CAPTIONS` tag.
- Fixed playback when using OptiView Live Streaming on Tizen 3.0.
- Fixed an issue where the player fatally errors when going offline during a DASH live stream, instead of playing out the remaining buffer and trying to recover first.
- Fixed an issue where starting or ending AirPlay might trigger an unhandled promise rejection in Safari.
- Fixed an issue where the player did not resume buffering after a temporary network disconnection when playing an MPEG-DASH stream.
- Fixed an issue where a stream using OptiView Ads could get stuck after playing an ad break in PiP.
- Fixed an issue where sometimes multiple ad events were dispatched while playing OptiView Ads in PiP.
- Fixed an issue where ad events could be desynced when using OptiView Ads in Picture-in-Picture.

### Android

#### ✨ Features

- Added `KeySystemConfiguration.forceSoftwareDecrypt` in order to force the player to always use Widevine L3. Note that this may prevent the player from switching to a high-definition quality, and should only be used to work around issues on specific devices.
- Added `KeySystemConfiguration.integrationParameters` to allow passing integration-specific parameters to a custom `ContentProtectionIntegration` which are also specific to the selected key system.
- Added `NetworkConfiguration.useHttpEngine` to allow the player to use `android.net.http.HttpEngine` or [Cronet](https://developer.android.com/develop/connectivity/cronet) for its network requests. These more modern network stacks allow the player to use HTTP/3 instead of HTTP/1.1, which can be more efficient.

#### ⚡ Improvements

- Improved error messages from the audio/video decoder.
- Improved order of events on stream startup for OptiView Live streams.

#### 🐛 Issues

- Fixed an edge case where a `TypedSource` without a `type` whose `src` ends with `.m3u8` but also contains the substring `mpd` would incorrectly be detected as MPEG-DASH instead of HLS. We highly recommend always setting an explicit `type` to avoid similar issues with confusing URLs.
- Fixed a crash due to a `ConcurrentModificationException` when playing a DASH livestream containing a thumbnails track.
- Fixed an issue where `CachingTask.bytesCached` would return `0` for caching tasks that were already fully downloaded before the app was started.

### iOS

#### ⚡ Improvements

- Improved the ABR algorithm of our OptiView Live streams for HESP playback. 
- Improved playback stability of OptiView Live streams on iOS 17 and below by using the HLS fallback stream.

#### 🐛 Issues

- Fixed an issue where when setting a new OptiView Live source the previous one would continue playing until `play()` was called.
- Fixed an issue where the `seeking` property would return `false` while the player was seeking in OptiView Live streams.

### tvOS

#### 🐛 Issues

- Fixed an issue where the `maxMobileBitrate` from a distribution was incorrectly being applied on tvOS for OptiView Live streams.

### Roku

#### ✨ Features

- Added support for protected OptiView Live content using the `player.theoLive.authToken` API.
- Added Conviva reporting of OptiView Live endpoint loading and fallback, along with reporting of the OptiView Live CDN.
- Added the `getHeader` method on the Network API.

#### 🐛 Issues

- Made autofocus behavior reflect the client selected focus so the player doesn't grab focus after the client has removed focus.
- Added session ID to bye call so THEOlive sessions complete properly.

## 🚀 9.9.0 (2025/07/31)

### Web

#### ✨ Features

- Added the possibility to schedule OptiView Ads Overlays through SSE.
- Added the `authToken` property to the `theoLive` API for JWT auth token configuration.

#### ⚡ Improvements

- Delayed loading of OptiView Live streams until `play` is called.
- Improved stability of OptiView Live streams on Tizen platforms.
- Improved stability of OptiView Live streams on WebOS devices.

#### 🐛 Issues

- Fixed an issue with OptiView Ads where a playback error during an ad break would fully stop playback.
- Fixed an issue where WebVTT default text background colors (e.g. `<c.bg_yellow>`) were not working correctly.
- Fixed an issue where WebVTT default text colors and default text background colors were not working when using Open Video UI.
- Fixed an issue where the player would not show the OptiView Ads Overlays anymore when it stopped casting to Chromecast.

### Android

#### ✨ Features

- Added support for `ClearkeyKeySystemConfiguration.keys` in the Media3 pipeline.
- Added `TextTrackStyle.getFont()` and `.setFont(Typeface)`.
- Added the `authToken` property to the `theoLive` API for JWT auth token configuration.
- Implemented clickthrough URL on OptiView Ads Overlays.

#### ⚡ Improvements

- Cues from sideloaded subtitles are no longer eagerly added to their `TextTrack` in the Media3 pipeline, to avoid stalling the player while loading a large subtitle file. Instead, these subtitle cues are now added in a just-in-time fashion.
- Added `SourceType.THEOLIVE` to more easily distinguish between THEOlive sources and plain HESP sources.
- Fixed an issue where sideloaded chapter and metadata tracks were included when `MediaInfo` gets loaded into the player on a Cast Receiver.
- Delayed loading of OptiView Live streams until `play` is called.

#### 🐛 Issues

- Fixed `TextTrackStyle.setFont(fontFile, fontStyle)` not correctly loading the font file.
- Fixed an issue where caching an invalid source crashes the player.

### iOS

#### ✨ Features

- Added the `authToken` property to the `theoLive` API for JWT auth token configuration.
- Added support for image Overlays in OptiView Ads.
- Added `MediaPlaylistInterceptor` protocol for HLS playlist interception and
  manipulation.

#### ⚡ Improvements

- Added the `reason` property to `IntentToFallbackEvent` which indicates why the player chose to fall back.

#### 🐛 Issues

- Fixed an issue where the `destroy` event would be dispatched twice.
- Fixed an issue where incorrect query params were sent with the discovery call of OptiView Live stream.

### Roku

#### ⚡ Improvements

- Delayed loading of OptiView Live streams until `play` is called.

#### 🐛 Issues

- Fixed an issue where source descriptions without the `live` property would fail to play.
- Fixed an issue where the Conviva connector could cause a crash when the `isLive` property was missing from source metadata.

## 🚀 9.8.2 (2025/07/17)

### Web

#### ⚡ Improvements

- Improved support for frame metadata extraction with OptiView RealTime streams on older browsers, all the way back to Chrome v87.

#### 🐛 Issues

- Fixed an issue where the player would not do the IMA streamRequest on startup when using SSE for an OptiView Ads stream.
- Fixed an issue where the player would always update the ad tag parameters on the StreamManager on every ad break when playing an OptiView Ads stream.

### Android

#### 🐛 Issues

- Fixed an issue where a stream request happened on every AdBreak for OptiView Ads.

### iOS

#### 🐛 Issues

- Fixed an issue where loading a THEOad could fail, causing a black screen.
- Fixed an issue where the THEOadDescription would not be used when playing an OptiView live stream with ads enabled.

## 🚀 9.8.1 (2025/07/15)

### Android

#### 🐛 Issues

- Fixed an issue where OptiView Ads were crashing when the `initializationDelay` parameter was `NaN`.

### iOS

#### 🐛 Issues

- Fixed an issue where ABR would not switch up to higher qualities for THEOlive sources.
- Fixed an issue where the `ActiveQualityChangedEvent` was not dispatched for THEOlive sources.

### Roku

#### 🐛 Issues

- Fixed an issue where the Conviva connector could cause a crash when the `isLive` property was missing from source metadata.

## 🚀 9.8.0 (2025/07/12)

### Web

#### ✨ Features

- Added an `initializationDelay` property to `TheoAdDescription` to delay the initialization of OptiView Ads.

#### ⚡ Improvements

- Improved stability of OptiView live streams on VIZIO devices.
- Improved the transition from ads to content when playing an HESP stream in combination with OptiView ads.

#### 🐛 Issues

- Fixed an issue where the player would become paused when switching tabs while in native picture-in-picture on Chromium based browsers on OptiView live streams.
- Fixed an issue where Millicast streams with `connectOptions.disableVideo` set to `true` would fail to play.

### Android

#### ✨ Features

- Added an `initializationDelay` property to `TheoAdDescription` to delay the initialization of OptiView Ads.

#### ⚡ Improvements

- Fixed an issue where chapter tracks were not marked as `TextTrackKind.CHAPTERS` in the Media3 pipeline.

#### 🐛 Issues

- Fixed an issue where an `ActiveQualityChangedEvent` would either be sent with a wrong value or not sent at all in a multi-period DASH stream. 
- Fixed an issue where waiting events would not be dispatched on OptiView live streams.
- Fixed an issue where using a View-based UI with THEOplayer and playing Millicast stream will cause a crash.
- Expose actual bandwidth of audio qualities for HESP / OptiView live streams.

### iOS

#### ✨ Features

- Added an `initializationDelay` property to `THEOAdDescription` to delay the initialization of OptiView Ads.

#### 🐛 Issues

- Fix issue where network connectivity errors were not forwarded to the NetworkEventTypes.ERROR event listener
- Fixed an issue where id3 metadata tracks would be notified in advance, causing issues i.e. for Google DAI. 

### Chromecast CAF

#### ✨ Features

- Added support for VOD assets with THEOads overlay images.

### Roku

#### ⚡ Improvements

- Added discoveryUrl property to THEOlive config and removed need for a trailing slash on discovery URLs.

#### 🐛 Issues

- Fixed an issue where source descriptions without the `live` property would fail.

## 🚀 9.7.0 (2025/07/02)

### General

#### ✨ Features

- Added support for OptiView Ads in combination with OptiView Live streaming.

### Web

#### ✨ Features

- Added the ability to play two adbreaks seamlessly after each other for THEOads.
- Added new `DistributionLoadStartEvent`, `EndpointLoadedEvent` and `DistributionOfflineEvent` events to the `theoLive` API as part of OptiView Live API V2 support.
- Added support for MPEG-TS segments with multiple SPS/PPS NALs in the MPEG-TS transmux worker.

#### ⚡ Improvements

- Changed the default amount of retries for OptiView live streams to 3 so that all the recovery mechanisms work without the need to explicitly set a finite value.

#### 🐛 Issues

- Fixed an issue where the player's content is zoomed in when going in fullscreen when playing a THEOads stream.
- Fixed an issue where not all representations are shown for a DASH stream with adaptation set switching.
- Fixed an issue where the player would dispatch events with incorrect `currentTime` when playing a THEOads stream on smartTVs.
- Fixed an issue where the `currentTime` and `currentProgramDateTime` values would be incorrect for a short time after a transition from adbreak to content using THEOads.
- Fixed an issue where switching OptiView live streams with DRM enabled would sometimes fail on Safari.
- Fixed content protection events not being dispatched for OptiView live streams.
- Fixed an issue where an HLS live stream would not start at the live point on iOS Safari.
- Fixed an issue where an empty VAST/VMAP response would block content if `blockContentIfAdError` was enabled in the player source description.
- Fixed an issue where quality or track switches with non-identical codecs would cause a fatal error on Edge browsers.
- Fixed an issue where the defined ad parameters for a MediaTailor source are not being passed correctly to MediaTailor.

#### 👎 Deprecations

- Renamed `adParams` to `adsParams` in the MediaTailor source definition in the Web SDK. The old name still works, but is now deprecated.

### Android

#### ✨ Features

- Added support for adbreak to adbreak transition with THEOAds.
- Added `THEOplayerGlobal.logger` API to enable logs for specific tags and ability to add listeners to receive log messages.
- Added a new `EndpointLoadedEvent` that fires when an OptiView Live endpoint is successfully loaded. 
- Improved debug logging for the Media3 playback pipeline.
- Added support for MPEG-TS segments with multiple SPS/PPS NALs in the MPEG-TS transmux worker for the legacy playback pipeline.
- Added support for GAM properties in THEOads overlays.
- Added ClearKey DRM support to the media3 pipeline.

#### ⚡ Improvements

- Fixed video artifacting on older FireTV devices when playing OptiView live streams.
- Added support for `"maxBitrate"` when setting up a `SourceDescription`. This can be set by defining an `abr` property for the source.
- Improved the latency measurement available in the latency API.
- Manifest and segment requests now have the proper `Request.type`, `.subType` and `.mediaType` in the Media3 pipeline.
- Added `LinearAd.durationAsDouble` to retrieve an linear ad’s duration with sub-second precision.

#### 🐛 Issues

- Fixed an issue where subtitle styles set through the `TextTrackStyle` API were not being applied to subtitles with embedded styles.
- Fixed an issue where subtitles with a background color set by an embedded style were always rendered with the default background color instead.
- Fixed an issue wherein OptiView Live streams were not honouring the set `AbrStrategyConfiguation` on the player.  
- Fixed an issue where the player would crash on ad playback in MediaTailor streams.
- Fixed an issue where `PlayEvent` and `PauseEvent` weren't fired immediately on `play()` and `pause()` API calls. Also ensured `PlayEvent` fires when a source is invalid.
- Fixed an issue where the `PauseEvent` did not fire when the player becomes ended.
- Fixed an issue where the defined ad parameters for a MediaTailor source are not being passed correctly to MediaTailor.

#### 👎 Deprecations

- Renamed `adParams` to `adsParams` in the MediaTailor source definition in the Android SDK. The old name still works, but is now deprecated.

### iOS

#### ✨ Features

- Added a target latency override to THEOlive source description.
- Added `THEOliveConfiguration.discoveryUrl` and `THEOliveConfiguration.discoveryUrls` to support custom discovery URLs for OptiView live streams.

#### ⚡ Improvements

- Update Millicast SDK to v2.4.3
- Added a new improved OptiView live streaming (formerly known as THEOlive) playback pipeline.
  - The new pipeline is enabled by default as it brings significant improvements.
  - The legacy playback pipeline is still available, and can be activated by setting `THEOliveConfiguration.useLegacyPlaybackEngine` to `true`.
  - The legacy playback pipeline is scheduled to be removed in version 10.

#### 🐛 Issues

- Fixed an issue where closed caption text tracks were automatically selected and bypassing accessibility settings.

### Chromecast CAF

#### ✨ Features

- Added support for GAM hosted interstitial image overlays.
- Added in the ability to display THEOads interstitial overlays included in HLS manifests.
- Added support for VOD assets with THEOads overlay images.

### Roku

#### ✨ Features

- Added support for OptiView live v2 streams.
- When an OptiView live stream has an error, the player will now attempt to fallback to other sources for the stream.

#### 🐛 Issues

- Fixed crash on start up when using an array for `source.sources`.
- Fixed an issue where a THEOlive source would not work when passed as an element in a sources array in the source description.

## 🚀 9.6.1 (2025/06/23)

### Android

#### 🐛 Issues

- Fixed an issue where an MPEG-DASH thumbnail adaptation set with a large amount of thumbnails could cause the player to temporarily lock up the main thread on lower end devices. The player now parses these thumbnails in a background thread instead.
- Fixed an issue where MPEG-DASH streams with duplicate service descriptors in their CEA-608 `<Accessibility>` descriptor would result in scrambled closed captions.

## 🚀 9.6.0 (2025/06/18)

### Web

#### ✨ Features

- Added support for using the `"keyids"` initialization data format in EME, as defined by [W3C](https://www.w3.org/TR/eme-initdata-keyids/).
- Added support for ClearKey content protection signaled by the DASH-IF system ID (`e2719d58-a985-b3c9-781a-b030af78d30e`) in the context of a DASH stream. (ClearKey signaled by the W3C system ID was already supported.)
- Added support for ABR strategies for OptiView live streams.

#### ⚡ Improvements

- Improved latency control, especially on CPU-restricted devices.

#### 🐛 Issues

- Fixed an issue where the player did not recognize a PlayReady PRO object as valid initialization data in an HLS `#EXT-X-KEY` tag.
- Fixed an issue where seeking to an area of buffer right before a gap on WebOS devices would cause the player to get stuck indefinitely.
- Fixed an issue where video qualities in a Millicast stream did not report their correct width and height.
- Fixed an issue where an incorrect intent to autoplay was sent to Google IMA.

### Android

#### ✨ Features

- Added support for [16 KB page sizes](https://developer.android.com/guide/practices/page-sizes) in the Core SDK. This prepares for the [upcoming Google Play compatibility requirement](https://android-developers.googleblog.com/2025/05/prepare-play-apps-for-devices-with-16kb-page-size.html) where new apps or app updates submitted after November 1st 2025 and targeting Android 15 or higher must support 16 KB page sizes.

#### 🐛 Issues

- Fixed a regression where MediaTailor sources failed to play.
- Fixed an issue where video qualities in a Millicast stream did not report their correct width and height.
- Fixed an issue where some caching notifications would be stuck if multiple tasks run in parallel.
- Fixed a crash when casting a source with a `ChromecastMetadataDescription` without a `releaseDate` or `subtitle`.
- Fixed an issue where a crash could occur due to an invalid playback rate when stopping Chromecast and then stopping the player.
- Fixed an issue where THEOads showed a black screen instead of an advertisement.
- Fixed an issue where setting `AbrStrategyType.BANDWIDTH` would ignore the historic data of the network conditions.
- Fixed an issue where no `TimeUpdateEvent` would be dispatched after seeking using the Media3 playback pipeline.
- Fixed an issue where a large amount of `AddCueEvent`s from a thumbnail track would delay other player events.

#### ⚠ Known Limitations

- The Millicast integration does not yet support [16 KB page sizes](https://developer.android.com/guide/practices/page-sizes). This has been fixed in THEOplayer version 9.12.0.

### iOS

#### ✨ Features

- Added `unlocalizedLabel` property to tracks. Where applicable, this refers to the label before it gets automatically localized by Apple's AVFramework. 

#### ⚡ Improvements

- `THEOplayer.source` now returns the exact same `SourceDescription` (without modifications) that was last set on the property.

#### 🐛 Issues

- Fixed an issue where accessing the player after the `destroy` method was called would crash the application.
- Fixed an issue where entering the background during a THEOad would not let you resume the content.

#### 👎 Deprecations

- Deprecated the `destroy` method. Instead destroy the player by removing its reference `self.player = nil`.
- Deprecated the `set` from the subscript of the `TextTrackList` API. The `TextTrackList` is a readonly list.

### Chromecast CAF

#### ⚡ Improvements

- Fixed playout of streams where the manifest extension was not the protocol default (.m3u8 or .mpd), but the type was correctly given in the source description.

### Roku

#### ✨ Features

- Added tracking of CMCD states for THEOlens.
- Added Common Media Client Data (CMCD) Status header on media requests to track rebuffering.
- Added Network API for adding custom headers to media requests during playback.

#### 🐛 Issues

- Stopped ads from playing after a stream has fatally errored.
- Fixed an issue with an event firing after calling `destroy` that caused a crash when switching streams. 

## 🚀 9.5.1 (2025/06/11)

### Android

#### 🐛 Issues

- Fixed a crash when casting a source with a `ChromecastMetadataDescription` without a `releaseDate` or `subtitle`.
- Fixed an issue where a crash could occur due to an invalid playback rate when stopping Chromecast and stopping the player.
- Fixed an issue where setting `AbrStrategyType.BANDWIDTH` would ignore the historic data of the network conditions.

## 🚀 9.5.0 (2025/06/03)

### General

#### ✨ Features

- Added support for HLS-only THEOlive channels.

### Web

#### ✨ Features

- Added `player.millicast` API to access Millicast specific diagnostics and stats. See the [diagnostics doc page](https://optiview.dolby.com/docs/millicast/playback/players-sdks/web/player/frame-metadata/) for more information.
- Added support for Dolby Digital (`ac-3`) codecs in HLS when the platform supports it.
- Added a default value for the `ott_placement` GAM ad tag parameter for THEOads.

#### ⚡ Improvements

- Improved the latency of THEOlive streams on iOS Chrome.

#### 🐛 Issues

- Fixed an issue where the player would sometimes not end properly when playing an HLS stream that starts with a gap.
- Fixed an issue where the player would crash when playing an HLS stream when all variant streams are offline. Instead, the player will now continue trying to request variant streams until one comes online.
- Fixed an issue where a segment in an HLS stream marked with `EXT-X-GAP` was still being downloaded and buffered.

### Android

#### ✨ Features

- Added `TextTrackStyle.marginRight` and `.marginBottom`.
- Added the `CHANGE` event to `AudioTrackEventTypes` and `VideoTrackEventTypes`.
- Added a default value for the `ott_placement` GAM ad tag parameter for THEOads.

#### ⚡ Improvements

- Improved the subtitle renderer to better handle margins. The relative position of each subtitle is now preserved, and subtitles are shifted only when they would otherwise cross a margin.
- The Google IMA, Google DAI and THEOads integrations now automatically call `ImaSdkFactory.initialize()` to begin loading necessary IMA SDK resources before the first ad request, which improves load times. To improve load times even further, we recommend calling `ImaSdkFactory.initialize()` with your `ImaSdkSettings` manually when your app starts, even before creating your `THEOplayerView`. See [the Google Ads developer blog](https://ads-developers.googleblog.com/2025/05/optimize-ima-android-monetization-with.html) and [this Google IMA guide](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/load-time#call_imasdkfactoryinitialize) for more information.
- Added an optional `googleImaConfiguration` parameter to `TheoAdsIntegrationFactory.createTheoAdsIntegration()`.

#### 🐛 Issues

- Fixed an issue where the `TRACKLISTCHANGE` event was not firing in the Media3 pipeline.
- Fixed an issue where text tracks would not be selectable in the sender app when casting to a Chromecast receiver.
- Fixed an issue where setting `MediaTrack.targetQuality` on a disabled track (e.g. inside an `ADDTRACK` event listener) would be silently ignored in the Media3 pipeline.
- Fixed an issue where trick play variants (such as `#EXT-X-I-FRAME-STREAM-INF` in HLS) were incorrectly added as qualities of a video `MediaTrack` in the Media3 pipeline.
- Fixed a regression where `GoogleDaiConfiguration.adTagParameters` incorrectly required a `MutableMap` parameter instead of a regular `Map`.
- Fixed an issue where caching a DRM protected stream would pause after starting when using the Media3 pipeline.

### iOS

#### ✨ Features

- Added support for adbreak to adbreak transition with THEOAds.
- Added a default value for the `ott_placement` GAM ad tag parameter for THEOads.

#### ⚡ Improvements

- Improved smoothness of startup when playing THEOlive streams.

### Roku

#### ✨ Features

- Added separate text tracks for HLS daterange and ID3 metadata. These will also still appear in the `metadata` text track.
- Added the ability to add and remove integrations to the player.
- Added support for EMSG and EMSG metadata tracks, available on the text tracks API.
- Added ID3 tag parsing for EMSG ID3 tags received in DASH.
- Added the ability to signal an embedded text track that is not in the manifest.
- Added the ability to configure midroll ads to replace content when they play.

#### 🐛 Issues

- Changed caption suppression logic so it would not get triggered by switching languages.
- Fixed closed captions for HLS so captions don't end up suppressed when a captions track starts as "disabled".
- Fixed an issue where sometimes THEOlive assets would not autoplay.

## 🚀 9.4.1 (2025/05/23)

### Web

#### ⚡ Improvements

- When playing a multiperiod DASH stream that has identical adaptation sets and representations across subsequent periods, a previously configured `targetQuality` will now remain active when transitioning to a new period rather than resetting to `undefined`.

#### 🐛 Issues

- Fixed an issue where DASH streams with very small variations in `presentationTimeOffset`s across periods with aligned media would encounter stalls on period transitions. 
- Fixed an issue where `targetQuality` would get overridden with an incorrect configuration for DRM-enabled DASH streams where no `default_KID`s are present in the manifest.

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

#### 💥 Breaking Changes

- The type of `GoogleDaiVodConfiguration.adTagParameters` changed from `Map` to `MutableMap` as part of the Kotlin update. This was an unintended breaking change that will be reverted in 9.5.

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

## 🚀 9.3.4 (2025/09/22)

### iOS

#### 🐛 Issues

- Fixed an issue where deinitializing the player during the loading of a THEOlive (OptiView Streaming) stream would cause a crash. 

## 🚀 9.3.3 (2025/09/17)

### iOS

#### 🐛 Issues

- Fixed an issue where THEOlive streams would not restart after app backgrounding.

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
- Added support for Client Side Ad Insertion using the player `Ads` API. Check out the [getting started with ads on Roku](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/roku/displaying-ads/) docs for more information.

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

#### 👎 Deprecations

- Deprecated the `set` from the subscript of the `MediaTrackList` API. The `MediaTrackList` is a readonly list.

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
- ~~Text track styling embedded in the source take precedence over user text track style configuration.~~ (Fixed in version 9.7.0.)

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
