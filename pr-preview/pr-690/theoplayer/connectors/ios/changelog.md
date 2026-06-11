# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased[​](#unreleased "Direct link to Unreleased")

## \[11.0.4] - 2026-05-29[​](#1104---2026-05-29 "Direct link to \[11.0.4] - 2026-05-29")

### Changed[​](#changed "Direct link to Changed")

* Conviva
  <!-- -->
  * Bumped the Conviva SDK dependency to 4.3.1.

## \[11.0.3] - 2026-05-19[​](#1103---2026-05-19 "Direct link to \[11.0.3] - 2026-05-19")

### Fixed[​](#fixed "Direct link to Fixed")

* SideloadedSubtitle
  <!-- -->
  * Fixed an issue where internal network requests would cause a user agent mismatch.

## \[11.0.1] - 2026-04-21[​](#1101---2026-04-21 "Direct link to \[11.0.1] - 2026-04-21")

### Fixed[​](#fixed-1 "Direct link to Fixed")

* SideloadedSubtitle
  <!-- -->
  * Fixed an issue where switching between sideloaded subtitle tracks would get stuck after the first switch due to cached subtitle responses.

## \[11.0.0] - 2026-04-16[​](#1100---2026-04-16 "Direct link to \[11.0.0] - 2026-04-16")

### Added[​](#added "Direct link to Added")

* The connectors will now be additionally published to a [THEOplayer hosted Cocoapods spec repo](https://github.com/THEOplayer/cocoapods-specs). We will continue publishing to the main trunk until EOL. For more info, please check [the SDK changelog](https://optiview.dolby.com/docs/theoplayer/changelog/#-1100-20260416).

### Removed[​](#removed "Direct link to Removed")

* Dropped support for iOS/tvOS 13 & 14.

## \[10.14.0] - 2026-04-09[​](#10140---2026-04-09 "Direct link to \[10.14.0] - 2026-04-09")

### Added[​](#added-1 "Direct link to Added")

* Uplynk
  <!-- -->
  * Added `orderedPreplayParameters` to `UplynkSSAIConfiguration`, which can be used to maintain the order of preplay parameters when making a request.

### Fixed[​](#fixed-2 "Direct link to Fixed")

* Uplynk
  <!-- -->
  * Improved URL encoding for characters such as `%`, `&`, `=`, `+` and `,` to preserve pre-encoded values and prevent server-side double decoding issues.

### Changed[​](#changed-1 "Direct link to Changed")

* Uplynk

  <!-- -->

  * When ping feature is not configured, the player will now send an empty string instead of `"&ad.pingc=0"` to prevent unsigned parameters that could break signature validation.
  * Deprecated the old `preplayParameters` in favor of the new `orderedPreplayParameters`

## \[10.8.0.1] - 2026-01-20[​](#10801---2026-01-20 "Direct link to \[10.8.0.1] - 2026-01-20")

### Fixed[​](#fixed-3 "Direct link to Fixed")

* SideloadedSubtitle
  <!-- -->
  * Fixed an issue where a bad http response code for subtitle sources would cause playback issues.

## \[10.8.0] - 2026-01-15[​](#1080---2026-01-15 "Direct link to \[10.8.0] - 2026-01-15")

### Added[​](#added-2 "Direct link to Added")

* SideloadedSubtitle

  <!-- -->

  * Added support for simultaneous multi-source caching with sideloaded subtitles. Previously there was a limitation of caching only a single task at a time.
  * Added support to make a sideloaded subtitle selected for caching by default. Use the `isDefault` property in `SSTextTrackDescription` or `TextTrackDescription`. Only one default track can be added.

### Fixed[​](#fixed-4 "Direct link to Fixed")

* Conviva

  <!-- -->

  * Fixed an issue where the initial metadata passed to the convivaConnector was not persistent across Conviva sessions.
  * Fixed an issue where the session's assetName was not configurable by setContentInfo, which has higher precedence than source.metadata.title.
  * Fixed an issue with the encodingType, where sometimes the encodingType of the previous session was reported

## \[10.7.0] - 2025-12-18[​](#1070---2025-12-18 "Direct link to \[10.7.0] - 2025-12-18")

### Changed[​](#changed-2 "Direct link to Changed")

* Conviva
  <!-- -->
  * Bumped the Conviva SDK dependency to 4.2.4.

### Fixed[​](#fixed-5 "Direct link to Fixed")

* SideloadedSubtitle
  <!-- -->
  * Fixed an issue where the stream would not play if an invalid subtitle source is passed and activated.

## \[10.4.0] - 2025-11-05[​](#1040---2025-11-05 "Direct link to \[10.4.0] - 2025-11-05")

### Fixed[​](#fixed-6 "Direct link to Fixed")

* Conviva
  <!-- -->
  * Fixed an issue where the session was automatically started with a stopAndStartNewSession request, even when the player was in a paused state.

### Changed[​](#changed-3 "Direct link to Changed")

* Conviva
  <!-- -->
  * Report droppedFrames and renderedFramerates from player metrics, making the AVPlayer accesslog usage obsolete.
* Nielsen
  <!-- -->
  * Bumped minimum Nielsen SDK Dependency to 10.0.0

### Added[​](#added-3 "Direct link to Added")

* Conviva

  <!-- -->

  * Report average bitrate from activeQualityChange event.
  * Report streamActivityMonitorId from theoads AdDescription and GoogleDAIConfiguration.

## \[10.2.0] - 2025-10-09[​](#1020---2025-10-09 "Direct link to \[10.2.0] - 2025-10-09")

### Added[​](#added-4 "Direct link to Added")

* Conviva

  <!-- -->

  * Pass podTechnology as custom field in reportAdBreakStarted.
  * Report DRM events.
  * Report intentToFallback event to Conviva as custom event.
  * Report encoding\_type (HLS or HESP) to conviva
  * Report cdn for THEOlive sources to conviva

### Fixed[​](#fixed-7 "Direct link to Fixed")

* SideloadedSubtitle
  <!-- -->
  * Fixed an issue where enabling a `TextTrack` on the `ADD_TRACK` event would cause an error.

## \[10.0.0] - 2025-09-12[​](#1000---2025-09-12 "Direct link to \[10.0.0] - 2025-09-12")

### Removed[​](#removed-1 "Direct link to Removed")

* Conviva
  <!-- -->
  * Removed the `setErrorCallback`. The same behaviour can be achieved in THEOplayer 10 by calling `addEventListener` on THEOplayer with a type of `PlayerEventTypes.ERROR`

## \[9.6.1] - 2025-06-23[​](#961---2025-06-23 "Direct link to \[9.6.1] - 2025-06-23")

### Fixed[​](#fixed-8 "Direct link to Fixed")

* Conviva
  <!-- -->
  * Fixed an issue where the ad duration of a THEOad was not reported.

## \[9.3.2] - 2025-05-13[​](#932---2025-05-13 "Direct link to \[9.3.2] - 2025-05-13")

### Fixed[​](#fixed-9 "Direct link to Fixed")

* Conviva
  <!-- -->
  * Fixed a crash on tvOS, caused by a change to the player reference count.

## \[9.1.1] - 2025-04-15[​](#911---2025-04-15 "Direct link to \[9.1.1] - 2025-04-15")

### Fixed[​](#fixed-10 "Direct link to Fixed")

* Conviva
  <!-- -->
  * Fixed a memory leak on iOS, caused by a dangling bitrate change observer on the AppEventForwarder.

## \[9.0.0] - 2025-04-03[​](#900---2025-04-03 "Direct link to \[9.0.0] - 2025-04-03")

### Added[​](#added-5 "Direct link to Added")

* Conviva
  <!-- -->
  * Added average bitrate reporting

### Fixed[​](#fixed-11 "Direct link to Fixed")

* Conviva
  <!-- -->
  * Improved the VPF detection for iOS and tvOS.

### Removed[​](#removed-2 "Direct link to Removed")

* Conviva

  * Removed Objective-C API support.

* Yospace

  * Removed Objective-C API support.

## \[8.13.0] - 2025-03-13[​](#8130---2025-03-13 "Direct link to \[8.13.0] - 2025-03-13")

### Fixed[​](#fixed-12 "Direct link to Fixed")

* Conviva
  <!-- -->
  * Fixed an issue where the bitrate change events were reported to the incorrect Conviva endpoint.

## \[8.12.0] - 2025-02-26[​](#8120---2025-02-26 "Direct link to \[8.12.0] - 2025-02-26")

### Changed[​](#changed-4 "Direct link to Changed")

* Nielsen
  <!-- -->
  * Allow bumping minor and patch versions of the Nielsen SDK dependency.

## \[8.11.1] - 2025-02-21[​](#8111---2025-02-21 "Direct link to \[8.11.1] - 2025-02-21")

### Added[​](#added-6 "Direct link to Added")

* Uplynk
  <!-- -->
  * Added Uplynk integration with THEOplayer to allow integrating Uplynk CMS into THEOplayer.

## \[8.8.0] - 2025-01-02[​](#880---2025-01-02 "Direct link to \[8.8.0] - 2025-01-02")

### Added[​](#added-7 "Direct link to Added")

* Comscore

  <!-- -->

  * Added `usagePropertiesAutoUpdateMode` and `usagePropertiesAutoUpdateInterval` to `ComScoreConfiguration`.
  * Exposed `notifyUxActive`, `notifyUxInactive`, `notifyEnterForeground` and `notifyExitForeground` methods.

## \[8.7.0] - 2024-12-18[​](#870---2024-12-18 "Direct link to \[8.7.0] - 2024-12-18")

### Added[​](#added-8 "Direct link to Added")

* Conviva
  <!-- -->
  * Added compatibility for reporting playback bitrate metrics with THEOlive sources.

### Fixed[​](#fixed-13 "Direct link to Fixed")

* Conviva
  <!-- -->
  * Fixed an issue where the playback bitrate metrics were not reported.

## \[8.0.1.1] - 2024-09-18[​](#8011---2024-09-18 "Direct link to \[8.0.1.1] - 2024-09-18")

### Fixed[​](#fixed-14 "Direct link to Fixed")

* Conviva
  <!-- -->
  * Fixed an issue where the vpfDetector was not firing a VPF due to a missing player reference.

## \[7.10.0] - 2024-08-13[​](#7100---2024-08-13 "Direct link to \[7.10.0] - 2024-08-13")

### Fixed[​](#fixed-15 "Direct link to Fixed")

* Conviva

  <!-- -->

  * Fixed an issue where multiple fatal errors were reported to the Conviva backend, resulting in multiple sessions being created.
  * Fixed an issue where VPF was not detected for VOD when the player has enough buffered data to get passed the detection interval.

## \[7.9.0] - 2024-08-01[​](#790---2024-08-01 "Direct link to \[7.9.0] - 2024-08-01")

### Fixed[​](#fixed-16 "Direct link to Fixed")

* Comscore
  <!-- -->
  * Fixed an issue where converting `Double.infinity` values would crash on some analytics events.

## \[7.8.0] - 2024-07-18[​](#780---2024-07-18 "Direct link to \[7.8.0] - 2024-07-18")

### Added[​](#added-9 "Direct link to Added")

* Yospace
  <!-- -->
  * Added Yospace integration with THEOplayer to allow playback of server-side ad inserted streams.

## \[7.5.0] - 2024-06-06[​](#750---2024-06-06 "Direct link to \[7.5.0] - 2024-06-06")

### Fixed[​](#fixed-17 "Direct link to Fixed")

* SideloadedSubtitle
  <!-- -->
  * Fixed an issue that prevented `automaticTimestampSyncEnabled` to sync cues properly.

## \[7.4.0] - 2024-05-23[​](#740---2024-05-23 "Direct link to \[7.4.0] - 2024-05-23")

### Fixed[​](#fixed-18 "Direct link to Fixed")

* SideloadedSubtitle
  <!-- -->
  * Prevent using HTTP redirects on media requests.

## \[7.3.0] - 2024-05-08[​](#730---2024-05-08 "Direct link to \[7.3.0] - 2024-05-08")

### Added[​](#added-10 "Direct link to Added")

* SideloadedSubtitle
  <!-- -->
  * Added `automaticTimestampSyncEnabled` API on `SSTextTrackDescription`.

### Fixed[​](#fixed-19 "Direct link to Fixed")

* Conviva

  <!-- -->

  * Fixed an issue where reported contentInfo was not cleaned up correctly when starting a new viewing session.
  * Fixed an issue where c3.ad.technology was reported as an integer value instead of a string.

## \[7.2.0] - 2024-04-24[​](#720---2024-04-24 "Direct link to \[7.2.0] - 2024-04-24")

### Fixed[​](#fixed-20 "Direct link to Fixed")

* SideloadedSubtitle

  <!-- -->

  * Fixed an issue where playlists that contain urls with percentEncoding got an extra percentEncoding pass resulting in erronneous urls.
  * Fixed an issue where variant playlists with additional tags between EXTINF and the segment url, where not properly processed.

## \[7.0.0] - 2024-04-03[​](#700---2024-04-03 "Direct link to \[7.0.0] - 2024-04-03")

### Changed[​](#changed-5 "Direct link to Changed")

* Conviva

  <!-- -->

  * Aligned the API to THEOplayer's Android and Web Conviva connectors.
  * Shield Conviva analytics endpoints. All data reporting now happens via the API.
  * Removed the 'report' methods for AssetName and ViewerID. These are replaced by using the setcontentInfo method (for viewerId) and by passing metadata to the sources (for AssetName).

### Added[​](#added-11 "Direct link to Added")

* Conviva
  <!-- -->
  * VPF (Video Playback Failure) detection

## \[6.8.1] - 2024-01-18[​](#681---2024-01-18 "Direct link to \[6.8.1] - 2024-01-18")

### Fixed[​](#fixed-21 "Direct link to Fixed")

* Conviva
  <!-- -->
  * Updated deprecated name for access log notification to fix broken bitrate reporting.
* Comscore
  <!-- -->
  * Prevent Comscore connector crash when reporting ad info for a DAI stream

### Changed[​](#changed-6 "Direct link to Changed")

* Conviva
  <!-- -->
  * Dropped the protocol dependency for the external event dispatcher.

## \[6.1.1] - 2023-10-06[​](#611---2023-10-06 "Direct link to \[6.1.1] - 2023-10-06")

### Fixed[​](#fixed-22 "Direct link to Fixed")

* SideloadedSubtitle
  <!-- -->
  * Add iOS 17 compatibility

## \[6.0.1] - 2023-09-27[​](#601---2023-09-27 "Direct link to \[6.0.1] - 2023-09-27")

### Fixed[​](#fixed-23 "Direct link to Fixed")

* SideloadedSubtitle
  <!-- -->
  * adjust content string encoder in transformer

## \[6.0.0] - 2023-09-26[​](#600---2023-09-26 "Direct link to \[6.0.0] - 2023-09-26")

### Fixed[​](#fixed-24 "Direct link to Fixed")

* SideloadedSubtitle

  <!-- -->

  * urlDecode the contentUrl string before downloading the track
  * resolve relative uri params in quality playlists

## \[5.11.0] - 2023-09-14[​](#5110---2023-09-14 "Direct link to \[5.11.0] - 2023-09-14")

### Fixed[​](#fixed-25 "Direct link to Fixed")

* SideloadedSubtitle
  <!-- -->
  * Take into account playlist redirects

## \[5.9.1] - 2023-08-24[​](#591---2023-08-24 "Direct link to \[5.9.1] - 2023-08-24")

### Added[​](#added-12 "Direct link to Added")

* SideloadedSubtitle
  <!-- -->
  * Sideloaded subtitle connector now supports: SRT text tracks, specifying a time offset and caching for offline playback.

## \[5.7.0] - 2023-07-28[​](#570---2023-07-28 "Direct link to \[5.7.0] - 2023-07-28")

### Added[​](#added-13 "Direct link to Added")

* Conviva
  <!-- -->
  * Added additional Ad metadata properties

## \[5.5.1] - 2023-06-29[​](#551---2023-06-29 "Direct link to \[5.5.1] - 2023-06-29")

### Fixed[​](#fixed-26 "Direct link to Fixed")

* Conviva
  <!-- -->
  * Reset stored bitrate value on source changes

### Added[​](#added-14 "Direct link to Added")

* Conviva
  <!-- -->
  * Send c3.csid and contentAssetName as adMetadata on AdBegin event

## [5.4.2](https://github.com/THEOplayer/iOS-Connector/compare/5.2.0...5.4.2) - 2023-06-21[​](#542---2023-06-21 "Direct link to 542---2023-06-21")

### Fixed[​](#fixed-27 "Direct link to Fixed")

* Conviva
  <!-- -->
  * Reporting bitrates after start and stop new session.

## [5.2.0](https://github.com/THEOplayer/iOS-Connector/compare/5.1.0...5.2.0) - 2023-05-31[​](#520---2023-05-31 "Direct link to 520---2023-05-31")

### Added[​](#added-15 "Direct link to Added")

* SideloadedSubtitle
  <!-- -->
  * Added new connector to sideload subtitles on tvOS and iOS

## [5.1.0](https://github.com/THEOplayer/iOS-Connector/compare/5.0.5...5.1.0) - 2023-05-15[​](#510---2023-05-15 "Direct link to 510---2023-05-15")

### Fixed[​](#fixed-28 "Direct link to Fixed")

* Conviva

  <!-- -->

  * Do not use ads API when there is no ad integration on the THEOplayer
  * Fix example with custom built framework

## [5.0.5](https://github.com/THEOplayer/iOS-Connector/compare/5.0.4...5.0.5) - 2023-04-27[​](#505---2023-04-27 "Direct link to 505---2023-04-27")

### Added[​](#added-16 "Direct link to Added")

* Conviva
  <!-- -->
  * Reporting bitrates for ads (0af67a3c)

### Fixed[​](#fixed-29 "Direct link to Fixed")

* Comscore
  <!-- -->
  * Prevent crash that sometimes happened during playback (75e9eacb)
* Conviva
  <!-- -->
  * Fixed a bug that would cause the connector to not report bitrates when using manifest interception on the THEOplayer via the developer settings. (6ee5e519)

### Changed[​](#changed-7 "Direct link to Changed")

* Conviva

  <!-- -->

  * Report bitrates from iOS in kbps to conviva (a231831a)
  * Do not report empty sessions (4257d803)

## [5.0.4](https://github.com/THEOplayer/iOS-Connector/compare/5.0.3...5.0.4) - 2023-04-21[​](#504---2023-04-21 "Direct link to 504---2023-04-21")

### Changed[​](#changed-8 "Direct link to Changed")

* Conviva
  <!-- -->
  * Report false as default for `CIS_SSDK_METADATA_IS_LIVE` (6bb45c17)

## [5.0.3](https://github.com/THEOplayer/iOS-Connector/compare/5.0.2...5.0.3) - 2023-04-17[​](#503---2023-04-17 "Direct link to 503---2023-04-17")

### Added[​](#added-17 "Direct link to Added")

* Conviva
  <!-- -->
  * Report ad resourceURI’s (a6b158d9)

## [5.0.2](https://github.com/THEOplayer/iOS-Connector/compare/5.0.1...5.0.2) - 2023-04-14[​](#502---2023-04-14 "Direct link to 502---2023-04-14")

### Added[​](#added-18 "Direct link to Added")

* Conviva

  <!-- -->

  * Report rendered framerate (c5e272d1)
  * Report ended when deinitialised (f49d2bb0)
  * Report network errors (02930576)

## [5.0.1](https://github.com/THEOplayer/iOS-Connector/compare/5.0.0...5.0.1) - 2023-04-13[​](#501---2023-04-13 "Direct link to 501---2023-04-13")

### Changed[​](#changed-9 "Direct link to Changed")

* Conviva
  <!-- -->
  * Do not report duration if no source is set (64db6846)

## [5.0.0](https://github.com/THEOplayer/iOS-Connector/compare/4.6.0...5.0.0) - 2023-04-07[​](#500---2023-04-07 "Direct link to 500---2023-04-07")

### Fixed[​](#fixed-30 "Direct link to Fixed")

* Comscore

  <!-- -->

  * Call notifyPlay when playback resumes after seek (9420ec5f)
  * Don't pause the player on background move (df92e0ff)

### Changed[​](#changed-10 "Direct link to Changed")

* Comscore

  <!-- -->

  * Changed THEOplayer cocoapod dependency from `THEOplayerSDK-basic` to `THEOplayerSDK-core`
  * Changed minimum version requirement of ComScore from `6.7.1` to `6.10.0`

* Nielsen
  <!-- -->
  * Changed THEOplayer cocoapod dependency from `THEOplayerSDK-basic` to `THEOplayerSDK-core`

* Conviva
  <!-- -->
  * Changed THEOplayer cocoapod dependency from `THEOplayerSDK-basic` to `THEOplayerSDK-core`

## [4.6.0](https://github.com/THEOplayer/iOS-Connector/compare/4.5.1...4.6.0) - 2023-04-05[​](#460---2023-04-05 "Direct link to 460---2023-04-05")

### Added[​](#added-19 "Direct link to Added")

* Conviva

  <!-- -->

  * Report player framework info for ads (ececcab0)
  * Read duration of ads from THEOplayer instance (54a51109)

### Changed[​](#changed-11 "Direct link to Changed")

* Conviva
  <!-- -->
  * Report a default value of `"NA"` for `CIS_SSDK_METADATA_ASSET_NAME` (6c4ba003)

* Nielsen

  <!-- -->

  * Only report ended if played to Nielsen (639c08c1)
  * Remove length metadata reporting (c53642b9)

### Removed[​](#removed-3 "Direct link to Removed")

* Conviva
  <!-- -->
  * Removed backgrounding logs from stdout (ccb64d05)

## [4.5.1](https://github.com/THEOplayer/iOS-Connector/compare/4.5.0...4.5.1) - 2023-03-30[​](#451---2023-03-30 "Direct link to 451---2023-03-30")

### Fixed[​](#fixed-31 "Direct link to Fixed")

* Comscore
  <!-- -->
  * Fixed a crash that happened when removing the connector (36c30950)

### Removed[​](#removed-4 "Direct link to Removed")

* Nielsen

  <!-- -->

  * removed the following DCR reports (cc14c08c):

    <!-- -->

    * playheadPosition
    * play
    * loadMetadata

## [4.5.0](https://github.com/THEOplayer/iOS-Connector/compare/4.4.0...4.5.0) - 2023-03-24[​](#450---2023-03-24 "Direct link to 450---2023-03-24")

### Added[​](#added-20 "Direct link to Added")

* Comscore
  <!-- -->
  * Added Comscore connector

## [4.4.0](https://github.com/THEOplayer/iOS-Connector/compare/4.3.1...4.4.0) - 2023-03-21[​](#440---2023-03-21 "Direct link to 440---2023-03-21")

### Added[​](#added-21 "Direct link to Added")

* Nielsen
  <!-- -->
  * Readme (62afa92c)

### Changed[​](#changed-12 "Direct link to Changed")

* Nielsen
  <!-- -->
  * Use `NielsenAppSDK` and `NielsenTVOSAppSDK` dependencies for cocoapod instead of `NielsenAppSDK-XC` (ded687d0)

## [4.3.1](https://github.com/THEOplayer/iOS-Connector/compare/4.3.0...4.3.1) - 2023-03-17[​](#431---2023-03-17 "Direct link to 431---2023-03-17")

### Added[​](#added-22 "Direct link to Added")

* Nielsen

  <!-- -->

  * Report play, stop and end events (b737b336)
  * Report ID3 tags, metadata and duration changes (f4118e19)
  * Report Ad events (47ab93e6)

* Utilities
  <!-- -->
  * Shared package with utilities that can be reused for multiple connectors

## [4.3.0](https://github.com/THEOplayer/iOS-Connector/compare/4.2.0...4.3.0) - 2023-03-02[​](#430---2023-03-02 "Direct link to 430---2023-03-02")

### Added[​](#added-23 "Direct link to Added")

* Nielsen
  <!-- -->
  * Setup target for SPM (33b5ff6c)
* Conviva
  <!-- -->
  * Added tvOS platform to cocoapod (d4ea17dc)

### Changed[​](#changed-13 "Direct link to Changed")

* Conviva

  <!-- -->

  * Round `CIS_SSDK_METADATA_DURATION` to closest integer (105ddf96)

  * Report metrics in milliseconds instead of seconds (105ddf96):

    <!-- -->

    * `CIS_SSDK_PLAYBACK_METRIC_PLAY_HEAD_TIME`
    * `CIS_SSDK_PLAYBACK_METRIC_SEEK_STARTED`
    * `CIS_SSDK_PLAYBACK_METRIC_SEEK_ENDED`

  * Only report non-linear ad types. (39edc330)

  * Report “NA” for `CIS_SSDK_METADATA_ASSET_NAME` when no title is provided. (90c86a4c)

  * Close session after fatal error (ce6bcd27)

  * Report `THEOplayer.version` instead of `.playerSuiteVersion` for Conviva's `CIS_SSDK_PLAYER_FRAMEWORK_VERSION` metric (9e1eb3c8)

### Removed[​](#removed-5 "Direct link to Removed")

* Conviva
  <!-- -->
  * Removed unneeded playing report during ads (51670e42)

## [4.2.0](https://github.com/THEOplayer/iOS-Connector/compare/4.1.1...4.2.0) - 2023-02-21[​](#420---2023-02-21 "Direct link to 420---2023-02-21")

### Added[​](#added-24 "Direct link to Added")

* Conviva
  <!-- -->
  * Automatic reporting of `CIS_SSDK_METADATA_ASSET_NAME` from THEOplayer's `metadata.title` inside the current source's `SourceDescription` (f4c59570)

## [4.1.1](https://github.com/THEOplayer/iOS-Connector/releases/tag/4.1.1) - 2022-10-19[​](#411---2022-10-19 "Direct link to 411---2022-10-19")

### Added[​](#added-25 "Direct link to Added")

* Conviva connector
* Conviva-VerizonMedia connector
