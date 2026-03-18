# Changelog for version 7.x

<head>
  <meta name="robots" content="index, follow" />
</head>

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
