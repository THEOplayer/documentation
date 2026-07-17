# Changelog

These are the release notes for THEOplayer 11.0.0 and higher. For older versions, see:

- [Version 10.x](https://optiview.dolby.com/docs/theoplayer/v10/changelog/)
- [Version 9.x](https://optiview.dolby.com/docs/theoplayer/v9/changelog/)
- [Version 8.x](https://optiview.dolby.com/docs/theoplayer/v8/changelog/)
- [Version 7.x](https://optiview.dolby.com/docs/theoplayer/v7/changelog/)
- [Version 5.x and 6.x](https://optiview.dolby.com/docs/theoplayer/v6/changelog/)
- [Version 2.x, 3.x and 4.x](https://optiview.dolby.com/docs/theoplayer/v4/changelog/)

## 🚀 11.7.0 (2026/07/15)

### Web

#### ✨ Features

- Added support for the HLS `SUPPLEMENTAL-CODECS` attribute.

#### 🐛 Issues

- Fixed an issue where an HESP stream playing in iOS web views could appear frozen while the current time kept progressing. The player now detects this and recovers.
- Fixed an issue where seeking immediately to the middle of an MPEG-DASH stream and then later seeking back to the start of the stream could stall the player indefinitely.
- Fixed an issue where the distributed `.js` files were referencing internal `.js.map` files through a `//# sourceMappingURL` comment, which could raise warnings when bundling with e.g. webpack. These comments have been removed.
- Fixed an issue where the `id` property of a `csai` ad contained the VAST creative ID instead. `Ad.id` now returns the ad's ID, while `Ad.creativeId` returns the creative's ID.
- Fixed an issue where a PTS break would sometimes not be played when using the OptiView Ads manifest.
- Fixed a regression that could break playback on legacy engines (such as Tizen 2.4) when using certain polyfills that define a `Symbol.iterator` getter on non-iterable objects.
- Fixed an issue where the video track would report no active quality when playing an HLS stream that duplicates its variant streams across multiple audio codec groups, such as OptiView Live streams with both a Dolby and an AAC ladder. Qualities that only reference variant streams with unsupported codecs are now marked as unavailable.
- Fixed an issue where ABR would switch to a variant stream with incompatible codecs when the network bandwidth was insufficient for all variant streams, causing an unnecessary playback interruption, e.g. leaving the Dolby Vision ladder of an HLS stream instead of selecting its lowest Dolby Vision variant stream.

### Android

#### 🐛 Issues

- Fixed an issue where the OptiView Ads manifest could fail to load.
- Fixed an issue where the `InterstitialEndEvent` was not dispatched in OptiView Ads.

### iOS

#### ✨ Features

- Added support for the `contentprotectionerror` event, which is dispatched when the DRM flow fails.

#### 🐛 Issues

- Fixed an issue where the clickthrough info could not be updated through an `SSAIIntegration`.
- Fixed an issue where the `readyState` would revert from `HAVE_ENOUGH_DATA` to `HAVE_CURRENT_DATA` when playing an MP4 stream with sideloaded VTT text tracks.

### Roku

#### 🐛 Issues

- Fixed an issue where internal observers were not removed properly when the player was destroyed, which could cause a crash when rapidly creating and destroying the player.

## 🚀 11.6.1 (2026/07/07)

### Android

#### 🐛 Issues

- Fixed an issue where a caching task would download all qualities instead of only the selected ones when the source had sideloaded text tracks.

### iOS

#### 🐛 Issues

- Fix a bug on iOS 18 where playback could stall indefinitely after returning from an IMA ad.

## 🚀 11.6.0 (2026/07/03)

### General

#### ✨ Features

- Added `externalId` to OptiView Live distribution metadata exposed by the `distributionloaded` event.

### Web

#### 🐛 Issues

- Fixed an issue where an OptiView Live stream was incorrectly flagged as offline during slow startup.
- Fixed an issue where ID3 text tracks did not initially have a `TextTrack.type` set when playing inside a `WKWebView` on iOS.
- Fixed an issue where the player would error on some specific HLS streams with TTML subtitles.
- Fixed an issue where the player would create gaps in the buffer around discontinuities in certain HLS streams, which could result in undesirable gap jumps or short freezes during playback.
- Fixed an issue where the player sometimes would play only audio after a stall when playing an HESP stream.
- Fixed an issue where the device motion controls were not working in VR on mobile Chrome browsers.
- Fixed an issue where the device motion orientation in VR was inverted on mobile Chrome browsers.
- Fixed an issue where VR videos were being rendered upside down on iPad Safari.

### Android

#### ✨ Features

- CMCD ad event reporting is now supported for all ad integrations (and no longer limited to just OptiView Ads).

#### ⚡ Improvements

- Added optional provider information to OptiView Live endpoints.

#### 🐛 Issues

- Fixed an issue where an OptiView Ads overlay stays onscreen indefinitely after it has expired.
- Fixed an issue where Double Box and L-shape layouts were incorrectly shown in Picture-in-Picture mode with OptiView Ads.
- Fixed an issue where the player would crash if OptiView Ads playback was started while in Picture-in-Picture mode.
- Fixed an issue where the ads UI could get stuck after playing two consecutive ad breaks with OptiView Ads.

### iOS

#### ✨ Features

- Added support for customData on the  Ad and AdBreak protocols.

#### 🐛 Issues

- Fixed an issue where the duration of OptiView Break Manifest Ads were not respected.
- Fixed an issue where changing or clearing `player.source` while playing an HESP stream could cause the app to crash due to an internal race condition.
- Fixed an issue where transitioning between IMA prerolls would cause the PiP window to close.
- Fixed an issue where sources with multiple IMA prerolls would load trailing prerolls after the main content.
- Fixed an issue where setting a source with an IMA ad while another source with an ad is playing would cause a crash.
- Fixed an issue where scheduling IMA ads causes a momentary black screen in main content.
- Fixed an issue where ads from different systems would overlap with OptiView Ads.
- Fixed an issue in OptiView Ads where the layout would switch to single momentarily in between companion ads.
- Fixed an issue where during ad playback in PiP, the original player view continues to playback main content.
- Fixed an issue where double box and L-shape ads don't show in PiP.
- Fixed an issue where Ads would remain in double box layout after finishing.

### Roku

#### ✨ Features

- Added client-side ad beaconing for MediaKind SSAI streams.
- Added session beacons for the MediaKind connector.

#### ⚡ Improvements

- Removed automatic use of `START=Live` for live MediaKind streams. The client now can specify the live stream URL params.

#### 🐛 Issues

- Fixed an issue where during fallback on an OptiView Live stream the wrong endpoint was selected.

## 🚀 11.5.1 (2026/07/03)

### iOS

#### 🐛 Issues

- Fixed an issue when playing cached sources where the player could switch to audio/video renditions that were not cached.

## 🚀 11.5.0 (2026/06/16)

### General

#### ⚡ Improvements

- Changed the CMCD event report MIME type to `application/cmcd` per the CTA-5004-B specification.

### Web

#### ✨ Features

- Added support for OptiView Discovery V3 distributions.
- Added support for `ignoreEmbeddedTextTrackTypes` for HESP streams.

#### ⚡ Improvements

- Improved ABR performance on HESP streams, which should result in fewer stalling and increased stable playback at higher quality.

#### 🐛 Issues

- Fixed an issue where calling `player.destroy()` while playing an ad would throw an uncaught `TypeError`.
- Fixed an issue where [ID3 metadata carried inside CMAF](https://aomediacodec.github.io/id3-emsg/) would end up in separate ID3 text tracks if the `scheme_id_uri` or `value` of the encapsulating `emsg` boxes were different. All ID3 cues will now always end up in a single ID3 text track, and the `value` of the `emsg` is ignored. This matches the existing behavior on Android and iOS.
- Fixed an issue where an HESP stream failed to load on an iOS WebView.
- Fixed an issue where `emsg` cues were never removed while playing an HESP stream.
- Fixed a regression where the "exit fullscreen" button was no longer visible when the player encounters a fatal error while playing in fullscreen mode using the legacy UI.
- Fixed an issue where the `encrypted` event was not properly dispatched when playing a DRM-protected stream.
- Fixed an issue where the player stalls for a while when switching back from ad to content with an OptiView Ads stream.

#### 👎 Deprecations

- `player.theoLive.badNetworkMode` is no longer supported. The player's ABR has been improved to quickly switch to a lower quality when the network conditions worsen, even when playing at very low latency. This API is now a no-op, and will be removed in the next major version.

### Android

#### ✨ Features

- Added `Abr.preferredMaximumResolution` to cap the maximum video resolution selected at runtime. Also `player.abr.abrStrategy` is now used for  Millicast playback when `MillicastSource.connectOptions` is not set. 
- Added `hlsDateRange` property to `THEOplayerConfig` to enable HLS date range parsing at the player level.

#### ⚡ Improvements

- Updated the Millicast SDK to version 2.6.0 which adds `maxWidth` and `maxHeight` constraints to viewer layer selection, allowing resolution-based filtering without selecting a specific simulcast layer.
- `THEOplayerConfig` now fully supports using Kotlin property syntax.

#### 🐛 Issues

- Fixed an issue where an ad with Double Box layout shifted the content and ad players outside the video frame.
- Fixed an issue when `CastStrategy.AUTO` had no effect on startup and a Cast device was not re-connected due to regression in Cast SDK. Cast Framework has been downgraded to the latest stable version `21.5.0`.
- Fixed an issue where a `NullPointerException` could be thrown if the player enters  picture-in-picture mode when its `THEOplayerView` is not properly attached to a parent `Activity`.
- Fixed a crash when `setSource` was called on a destroyed player.

### iOS

#### 💥 Breaking Changes

- For non OptiView Live sources, a `CMCDConfiguration` or `CMCDSourceConfiguration` is now expected to enable CMCD reporting.

#### ✨ Features

- Added support for OptiView Discovery V3 distributions.
- Introduce configuring ABR strategy and maximum resolution for Millicast sources.

#### 🐛 Issues

- Fixed an issue where the startTimes of DateRangeCues are incorrect if the player applies a seek while the cues are being processed.
- Fixed an issue in OptiView Ads where no `AD_BREAK_END` error was dispatched after an interstitial error.
- Fixed an EXC_BREAKPOINT crash in CMCDState.Builder.build() caused by NaN or infinite values in CMCD measurements during DVR seek operations.
- Fixed an issue where CMCD would be active even when not configured.
- Fixed an issue where daterange cues with identical startTimes were not processed correctly.
- Fixed an issue where OptiView Live specific CMCD status would not be reported.

### Roku

#### ✨ Features

- Added basic support for CMCD event mode reporting of DRM and ad events.
- Added in support for custom SSAI integrations and SSAI ad descriptions that use ad tag parameters.
- Added support for OptiView Live discovery v3 distributions.
- Added MediaKind connector with support for playback of DRM streams.
- Added the Capabilities API to the SDK for help getting device capabilities.

#### 🐛 Issues

- Fixed an issue with tag remover's handling of URIs that started with "data:".

## 🚀 11.4.0 (2026/06/03)

### Web

#### ✨ Features

- Added basic support for CMCD event mode reporting of DRM and ad events.
- Added `Quality.enabled` to enable or disable a quality. When a quality is disabled, it will be ignored during ABR selection or when setting `MediaTrack.targetQuality`.
- Added support for `breakManifestUrl` for OptiView Ads streams.

#### 🐛 Issues

- Fixed an issue with OptiView Ads where setting overlay positions (top/bottom/left/right) to 0 was not supported.
- Fixed an issue where the player could crash on Sky Glass/Puck when `autoplay` is set to `true`.
- Fixed an issue where using WebXR on iOS Safari was preventing VR video from being rendered inline.
- Fixed an issue where clicking the "LIVE" button on an HLS live stream would sometimes seek to the start of the DVR window instead of the live edge when using native HLS playback on macOS/iOS Safari.
- Fixed an issue on the FireTV AFTM model where playback stalls were made worse by trying to recover too fast.
- Fixed an issue where HESP streams with PlayReady DRM would repeatedly stall while playing in Edge on Windows.
- Fixed an issue where VAST ads containing both an ad pod and an ad buffet failed to play through the Google IMA integration.

#### ⚠ Known Limitations

- When starting a Chromecast session while playing a Google IMA ad break with multiple ads, the Chromecast receiver may start playing from the first ad in the ad break even if it was already played before.

### Android

#### ✨ Features

- Added basic support for CMCD event mode reporting of DRM and ad events.
- Added support for OptiView Discovery V3 distributions.
- Added support for Break Manifest in OptiView Ads.
- Added `CustomAdDescription`, allowing custom ad integrations to create custom ad descriptions that can be passed through `SourceDescription.ads`.

#### 🐛 Issues

- Fixed an issue when the player suddenly switched to the highest possible quality right after a stall while playing an HESP stream.
- Fixed an issue when player crashed if there was a cache download background task and the system required to stop it.

### iOS

#### ✨ Features

- Enabled OptiView Ads overlays to be signaled through SSE.
- Added basic support for CMCD event mode reporting of DRM and ad events.

#### ⚡ Improvements

- Improved OptiView Streaming (THEOlive) endpoint fallback selection logic.
- Improved fallback recovery speed for OptiView Streaming (THEOlive) on iOS 26.

#### 🐛 Issues

- Fixed an issue where IMA ad errors caused content playback to fail completely.
- Fixed an issue in the IMA integration where pausing ad playback did not work when scheduled via `requestAds`.
- Fixed an issue where no `error` event was sent during playback on iOS 26 with a bad network connection.
- Fixed an issue in OptiView Ads where dismissing the player would cause a crash.

### Chromecast CAF

#### 🐛 Issues

- Fixed an issue with OptiView Ads where setting overlay positions (top/bottom/left/right) to 0 was not supported.

### Roku

#### ✨ Features

- Added `currentsourcechange` event when the currently playing stream changes.
- Added ability to call `setContentId`, `setContentLength`, and `setContentGenre` on RAF via methods of the same names on `player.ads.rafProxy`. Also added the `setRafMetadata` method to `player.ads.dai` for setting the same data during DAI playback.

#### 🐛 Issues

- Fixed the order of events on startup so they emit at the correct times.

## 🚀 11.3.0 (2026/05/18)

### Web

#### ✨ Features

- Added support for OptiView Live Streams with JWT token security on iOS Safari. Note that this requires a long-lived token that remains valid for the entire playback session. For short-lived tokens, we recommend [using a service worker](/theoplayer/how-to-guides/web/theolive/token-based-security/#short-lived-tokens-using-service-worker).
- Added support for DRM-protected OptiView Live Streams with JWT token security on macOS Safari. Note that this requires a long-lived token that remains valid for the entire playback session.

#### 🐛 Issues

- Fixed an issue where date range cues were not correctly created when playing an HLS media playlist (without multi-variant playlist) on iOS Safari.
- Fixed an issue where the player would still switch to an ad layout when seeking into the ad while the ad is not available for an OptiView Ads Stream.

### Android

#### ⚡ Improvements

- Modify the Millicast SDK dependency in the Millicast Integration to start accepting patch version updates (2.5.x)

#### 🐛 Issues

- Fixed an issue where `TextTrackStyle.setFont()` did not override the font family defined in the subtitle within the stream.

### iOS

#### ⚡ Improvements

- Modify the Millicast SDK dependency in THEOplayerMillicastIntegration to allow patch version updates (2.5.x).

### Roku

#### 🐛 Issues

- Added `adexitrequested` event to Ads API to allow applications to handle back button presses during clientside ad playback.

## 🚀 11.2.0 (2026/05/07)

### Web

#### ✨ Features

- Exposed `traffickingParametersString` for ads in `google-dai` sources.
- Added support for `#EXT-X-KEY` tags for PlayReady with CENC encryption for HLS streams.
- Added support for `replaceContent` for OptiView Ads streams.

#### 🐛 Issues

- Fixed an issue where the player would not have the correct `seekable`, `buffered` and `duration` during ad playback in a VOD OptiView Ads stream.
- Fixed an issue where the player would stutter when playing a muxed HLS stream on MacOS Safari unmuted.
- Fixed an issue where switching to an OptiView Live stream with JWT token security enabled while casting to Chromecast did not correctly pass along the JWT token to the receiver.
- Fixed an issue where the playhead would snap back during scrubbing on mobile browsers.

### Android

#### 💥 Breaking Changes

- Ads insertion metadata request will now be postponed from `setSource` call till the `play` call happens as the default `PreloadType` is `NONE`. Changing `PreloadType` to `AUTO` or `METADATA` brings the old behaviour back: `setSource` will fetch ads insertion metadata.

#### ✨ Features

- Added support for loading Google DAI metadata in a lazy manner. Use `PreloadType.NONE` to delay loading metadata until `Player.play()` is called. If `PreloadType` is `AUTO` or `METADATA` the behaviour stays unchanged: the load request will be executed as soon as `setSource` is called.

#### 🐛 Issues

- Fixed an issue where the `PLAYING` event was fired again after the end of an ad break when using OptiView Ads.

### iOS

#### ⚡ Improvements

- Updated the minimum required Google IMA SDK version to 3.31 to include the latest improvements.

#### 🐛 Issues

- Fixed an issue where subtitles were not correctly positioned when changing the player `aspectRatio` property.
- Fixed an issue where no duration change event was dispatched before an HLS live source ended.
- Fixed an issue where the player does not retain picture-in-picture mode when main content is resumed after an ad playback.
- Fixed an issue where non-fatal coreMediaError surfaced as fatal errors.

### tvOS

#### ⚡ Improvements

- Updated the minimum required Google IMA SDK version to 4.16 to include the latest improvements.

### Chromecast CAF

#### ✨ Features

- Added support for playing Axinom DRM streams on Chromecast.

#### ⚡ Improvements

- Updated all CAF Chromecast applications to use Shaka 4.15.36 by default to enable HLS-CMAF streams and improve OptiView Live playback. Also introduced an MPL-only CAF Chromecast application that does not use Shaka.

#### 🐛 Issues

- Fixed an issue with OptiView Live streams reloading after being cast.
- Fixed an issue with keyOS DRM streams where the `customdata` property was lost when casting to the Chromecast CAF app.

### Roku

#### ✨ Features

- Added in support for DRM on THEOlive streams. Also added new configuration options for content protection.

#### 🐛 Issues

- Fixed an issue with no playback when switching between two SSAI streams.
- Fixed an issue where the Adobe analytics task node was not being properly cleaned up when the connector is destroyed. Added a param to the connector's `destroy` method to force the Adobe analytics task node to be destroyed when the connector is destroyed.

## 🚀 11.1.0 (2026/04/28)

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

For more info on navigating our breaking changes, take a look at our migration guides for [Web](/theoplayer/getting-started/sdks/web/migrating-to-theoplayer-11/), [Android](/theoplayer/getting-started/sdks/android/migrating-to-theoplayer-11/), [iOS](/theoplayer/getting-started/sdks/ios/migrating-to-theoplayer-11/) and [React Native](/theoplayer/getting-started/frameworks/react-native/migrating-to-react-native-theoplayer-11/).

### Web

#### 💥 Breaking Changes

- Removed `preloadPublications` in THEOlive API.

### Android

#### 💥 Breaking Changes

- All methods on `Player` and `THEOplayerView` must only be called from the main thread and are annotated with `@MainThread`. Calling these methods from a different thread will throw an `IllegalStateException`.
- The Google IMA SDK integration now requires [core library desugaring](https://developer.android.com/studio/write/java8-support#library-desugaring) to be enabled. See [our updated guide for Google IMA](/theoplayer/how-to-guides/ads/google-ima/#android-sdk) for instructions.
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
