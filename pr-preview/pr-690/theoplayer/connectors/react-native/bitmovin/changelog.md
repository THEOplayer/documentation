# @theoplayer/react-native-analytics-bitmovin

## 1.4.1[​](#141 "Direct link to 1.4.1")

### 🐛 Issues[​](#-issues "Direct link to 🐛 Issues")

* Fixed an issue on Android where R8 would obfuscate `setCustomData` methods of the Bitmovin collector API.

## 1.4.0[​](#140 "Direct link to 1.4.0")

### ✨ Features[​](#-features "Direct link to ✨ Features")

* Added support for THEOplayer v11 and React Native THEOplayer v11.

## 1.3.0[​](#130 "Direct link to 1.3.0")

### ✨ Features[​](#-features-1 "Direct link to ✨ Features")

* Relax iOS Bitmovin collector dependency lock to major versions

## 1.2.0[​](#120 "Direct link to 1.2.0")

### ✨ Features[​](#-features-2 "Direct link to ✨ Features")

* Updated `updateCustomData` to merge incoming `customData` with the existing data on iOS and Android.

## 1.1.0[​](#110 "Direct link to 1.1.0")

### ✨ Features[​](#-features-3 "Direct link to ✨ Features")

* Added `sendCustomDataEvent` for Web.
* Upgraded Bitmovin Web SDK to GA release v2.51.

## 1.0.1[​](#101 "Direct link to 1.0.1")

### 🐛 Issues[​](#-issues-1 "Direct link to 🐛 Issues")

* Fixed an issue on iOS where the updateCustomData method was not correctly bridged.

## 1.0.0[​](#100 "Direct link to 1.0.0")

### ✨ Features[​](#-features-4 "Direct link to ✨ Features")

* Updated Android Bitmovin player SDK dependency to version range `[3.24.0, 4.0.0)`.
* Changed `customData` to allow up to 100 custom fields.

## 1.0.0-alpha.12[​](#100-alpha12 "Direct link to 1.0.0-alpha.12")

### 🐛 Issues[​](#-issues-2 "Direct link to 🐛 Issues")

* Fixed an issue where a wrong value for `customUserId` would be set on Android.

### 📦 Dependency Updates[​](#-dependency-updates "Direct link to 📦 Dependency Updates")

* Upgraded iOS Bitmovin collector to GA release to prevent app store validation rejections.
* Upgraded Android Bitmovin collector to GA release v3.23.0.

## 1.0.0-alpha.11[​](#100-alpha11 "Direct link to 1.0.0-alpha.11")

### ✨ Features[​](#-features-5 "Direct link to ✨ Features")

* Added `programChange` method to allow passing new source metadata during a live stream.
* Added support for Web and iOS platforms.

## 1.0.0-alpha.10[​](#100-alpha10 "Direct link to 1.0.0-alpha.10")

### ✨ Features[​](#-features-6 "Direct link to ✨ Features")

* Initial release.
