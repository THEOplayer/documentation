---
title: Changelog
sidebar_label: Web, Android & iOS
toc_max_heading_level: 2
---

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
