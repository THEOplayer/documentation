# @theoplayer/yospace-connector-web

## 3.0.0[​](#300 "Direct link to 3.0.0")

### 💥 Breaking Changes[​](#-breaking-changes "Direct link to 💥 Breaking Changes")

* Removed `isPlaceholder()` and `isEncoded()` type definitions since they were removed in Yospace Ad Management SDK 3.11.0.
* Replaced `PlaybackMode` with `SessionMode` for compatibility with Yospace Ad Management SDK 3.10.0+. This change brings the minimum supported Yospace Ad Management SDK version to 3.10.0.

### 🐛 Issues[​](#-issues "Direct link to 🐛 Issues")

* Fixed an exception when an ad break starts without data during live playback.

## 2.8.0[​](#280 "Direct link to 2.8.0")

### ✨ Features[​](#-features "Direct link to ✨ Features")

* Added support for THEOplayer v11.

## 2.7.0[​](#270 "Direct link to 2.7.0")

### ✨ Features[​](#-features-1 "Direct link to ✨ Features")

* Added support for THEOplayer version 10.

## 2.6.0[​](#260 "Direct link to 2.6.0")

### ✨ Features[​](#-features-2 "Direct link to ✨ Features")

* Added support for THEOplayer `9.0`.

## 2.5.0[​](#250 "Direct link to 2.5.0")

### ✨ Features[​](#-features-3 "Direct link to ✨ Features")

* Create ad break from advert start, if missing

### 🐛 Issues[​](#-issues-1 "Direct link to 🐛 Issues")

* Require THEOplayer 8.1.0 or higher for correct TypeScript type definitions.

## 2.4.0[​](#240 "Direct link to 2.4.0")

### ✨ Features[​](#-features-4 "Direct link to ✨ Features")

* Added support for THEOplayer `8.0`.

## 2.3.0[​](#230 "Direct link to 2.3.0")

### ✨ Features[​](#-features-5 "Direct link to ✨ Features")

* Added `YospaceServerSideAdInsertionConfiguration` type definition to the connector, superseding the type defined by the THEOplayer Web SDK.

## 2.2.0[​](#220 "Direct link to 2.2.0")

### ✨ Features[​](#-features-6 "Direct link to ✨ Features")

* The connector now integrates with the [custom server-side ad integration API](https://www.theoplayer.com/docs/theoplayer/v7/api-reference/web/interfaces/Ads.html#registerServerSideIntegration.registerServerSideIntegration-1) introduced in THEOplayer 7.4.0. This allows Yospace adverts to show up through the `player.ads` API of THEOplayer.

## 2.1.3[​](#213 "Direct link to 2.1.3")

### 🐛 Issues[​](#-issues-2 "Direct link to 🐛 Issues")

* Fixed playback position reporting for live DVR streams (with `streamType` set to `"livepause"`).

## 2.1.2[​](#212 "Direct link to 2.1.2")

### 🐛 Issues[​](#-issues-3 "Direct link to 🐛 Issues")

* Fix missing API types in TypeScript type definitions.

## 2.1.1[​](#211 "Direct link to 2.1.1")

### 🐛 Issues[​](#-issues-4 "Direct link to 🐛 Issues")

* Added support for THEOplayer 7.0.

## 2.1.0[​](#210 "Direct link to 2.1.0")

### ✨ Features[​](#-features-7 "Direct link to ✨ Features")

* Exposed SessionErrorCode.

## 2.0.0[​](#200 "Direct link to 2.0.0")

### ✨ Features[​](#-features-8 "Direct link to ✨ Features")

* Upgrade to latest Yospace Ad Management SDK

## 1.4.0[​](#140 "Direct link to 1.4.0")

### ✨ Features[​](#-features-9 "Direct link to ✨ Features")

* Allow THEOplayer 6.0.0 as peer dependency

## 1.3.0[​](#130 "Direct link to 1.3.0")

### ✨ Features[​](#-features-10 "Direct link to ✨ Features")

* Update THEOplayer peer dependency

## 1.2.0[​](#120 "Direct link to 1.2.0")

### ✨ Features[​](#-features-11 "Direct link to ✨ Features")

* Expose typings

### 🐛 Issues[​](#-issues-5 "Direct link to 🐛 Issues")

* Handle empty `activeCues` list

## 1.1.0[​](#110 "Direct link to 1.1.0")

### ✨ Features[​](#-features-12 "Direct link to ✨ Features")

* Add support for custom Analytics Event Observers

## 1.0.0[​](#100 "Direct link to 1.0.0")

### ✨ Features[​](#-features-13 "Direct link to ✨ Features")

* Initial release
