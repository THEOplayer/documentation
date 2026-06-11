# @theoplayer/react-native-analytics-adobe

## 1.16.0[​](#1160 "Direct link to 1.16.0")

### ✨ Features[​](#-features "Direct link to ✨ Features")

* Added support for THEOplayer v11 and React Native THEOplayer v11.

## 1.15.1[​](#1151 "Direct link to 1.15.1")

### 🐛 Issues[​](#-issues "Direct link to 🐛 Issues")

* Fixed an issue where heart-beat requests could continue after destroying a session on Web.

## 1.15.0[​](#1150 "Direct link to 1.15.0")

### ✨ Features[​](#-features-1 "Direct link to ✨ Features")

* Changed license to BSD 3-Cause Clear. See [LICENSE](https://github.com/THEOplayer/react-native-connectors/blob/-/adobe/LICENSE) file for more information.

## 1.14.3[​](#1143 "Direct link to 1.14.3")

### 🐛 Issues[​](#-issues-1 "Direct link to 🐛 Issues")

* Fixed an issue on Android where the playhead for Live events would exceed the maximum value.

## 1.14.2[​](#1142 "Direct link to 1.14.2")

### 🐛 Issues[​](#-issues-2 "Direct link to 🐛 Issues")

* Fixed an issue on Android where the properties from the passed metadata was not included with the `sessions` request.
* Fixed an issue where the required `visitor.marketingCloudUserId` property was not included with the `sessions` request.

## 1.14.1[​](#1141 "Direct link to 1.14.1")

### 🐛 Issues[​](#-issues-3 "Direct link to 🐛 Issues")

* Fixed an issue on Android where the connector could crash when adding new events because of a `ConcurrentModificationException`.

## 1.14.0[​](#1140 "Direct link to 1.14.0")

### ✨ Features[​](#-features-2 "Direct link to ✨ Features")

* Fixed an issue on Android where the event payload would be partially obfuscated when enabling minification with R8.
* Fixed an issue on Android where the `playhead` and `contentLength` payload properties should be integers.

## 1.13.0[​](#1130 "Direct link to 1.13.0")

### ✨ Features[​](#-features-3 "Direct link to ✨ Features")

* Fixed an issue on Android where chapter events would not be properly reported.
* Updated Android's target SDK version to 36.

## 1.12.2[​](#1122 "Direct link to 1.12.2")

### 🐛 Issues[​](#-issues-4 "Direct link to 🐛 Issues")

* Fixed an issue where player API was used on the wrong thread, resulting in a crash due to concurrent access of player internals.

## 1.12.1[​](#1121 "Direct link to 1.12.1")

### 🐛 Issues[​](#-issues-5 "Direct link to 🐛 Issues")

* Fixed an issue where the native connector would not be properly destroyed in case the player's native handle would become unavailable.

## 1.12.0[​](#1120 "Direct link to 1.12.0")

### ✨ Features[​](#-features-4 "Direct link to ✨ Features")

* Added support for THEOplayer v10 and React Native THEOplayer v10.

## 1.11.0[​](#1110 "Direct link to 1.11.0")

### ✨ Features[​](#-features-5 "Direct link to ✨ Features")

* Added optional native connector implementations for iOS and Android.

## 1.10.0[​](#1100 "Direct link to 1.10.0")

### ✨ Features[​](#-features-6 "Direct link to ✨ Features")

* Bumped dependency on react-native-device-info

## 1.9.0[​](#190 "Direct link to 1.9.0")

### ✨ Features[​](#-features-7 "Direct link to ✨ Features")

* Added support for THEOplayer 9.0.

## 1.8.0[​](#180 "Direct link to 1.8.0")

### ✨ Features[​](#-features-8 "Direct link to ✨ Features")

* Added sdkVersions API to Nielsen, Mux, Conviva, Comscore, Adobe and Engage connectors

## 1.7.1[​](#171 "Direct link to 1.7.1")

### 🐛 Issues[​](#-issues-6 "Direct link to 🐛 Issues")

* Fixed a build issue where the `Settings` object would not be found when using the connector with react-native-web.

## 1.7.0[​](#170 "Direct link to 1.7.0")

### ✨ Features[​](#-features-9 "Direct link to ✨ Features")

* Dropped usage of the NativeModules import to make the connector ready for the new architecture

### 📦 Dependency Updates[​](#-dependency-updates "Direct link to 📦 Dependency Updates")

* Updated dependency `react-native-device-info` to version `>=10.0.0 <14.0.0`.

## 1.6.0[​](#160 "Direct link to 1.6.0")

### ✨ Features[​](#-features-10 "Direct link to ✨ Features")

* Added support for THEOplayer 8.0

## 1.5.0[​](#150 "Direct link to 1.5.0")

### 🐛 Issues[​](#-issues-7 "Direct link to 🐛 Issues")

* Fixed an issue on Web where an asset with a pre-roll ad would report an invalid media duration.

### ✨ Features[​](#-features-11 "Direct link to ✨ Features")

* Added `debug` flag for extra logging.

## 1.4.0[​](#140 "Direct link to 1.4.0")

### 📦 Dependency Updates[​](#-dependency-updates-1 "Direct link to 📦 Dependency Updates")

* Added support for `react-native-theoplayer` v7.0.0 and native player SDK v7.0.0.

## 1.3.1[​](#131 "Direct link to 1.3.1")

### 🐛 Issues[​](#-issues-8 "Direct link to 🐛 Issues")

* Fixed an issue where the `media.length` would be not be correctly converted to seconds for VOD and Live streams.

## 1.3.0[​](#130 "Direct link to 1.3.0")

### 🐛 Issues[​](#-issues-9 "Direct link to 🐛 Issues")

* Fixed an issue where the `media.length` would be wrong when starting a session for a stream with a pre-roll ad.

## 1.2.1[​](#121 "Direct link to 1.2.1")

### 📦 Dependency Updates[​](#-dependency-updates-2 "Direct link to 📦 Dependency Updates")

* Relax restriction on `react-native-theoplayer` peer dependency versions.

## 1.2.0[​](#120 "Direct link to 1.2.0")

### 📦 Dependency Updates[​](#-dependency-updates-3 "Direct link to 📦 Dependency Updates")

* Added support for `react-native-theoplayer` v3.0 and THEOplayer 6.0.

## 1.1.0[​](#110 "Direct link to 1.1.0")

### ✨ Features[​](#-features-12 "Direct link to ✨ Features")

* Added a `userAgent` property to the connector's constructor to allow setting a custom `User-Agent` header value when doing requests.
* Changed the default `User-Agent` header value on Android to custom value that contains `Mozilla/5.0 (Linux; U; ${operatingSystem}; ${localeString}; ${deviceName} Build/${deviceBuildId})`.
* Changed the default `User-Agent` header value on iOS to custom value that contains `Mozilla/5.0 (${model}; CPU OS ${osVersion} like Mac OS X; ${localeIdentifier})`.

## 1.0.0[​](#100 "Direct link to 1.0.0")

### ✨ Features[​](#-features-13 "Direct link to ✨ Features")

* Added `useAdobe` hook to create and initialize an Adobe connector. See README.md for usage.

## 0.7.0[​](#070 "Direct link to 0.7.0")

### 🐛 Issues[​](#-issues-10 "Direct link to 🐛 Issues")

* Fixed sending play/pause on program boundaries.
* Fixed sending ad ping events if a program boundary occurs mid ad.

## 0.6.0[​](#060 "Direct link to 0.6.0")

### ✨ Features[​](#-features-14 "Direct link to ✨ Features")

* Add `media.name` to `sessionStart` request if `player.source.metadata.title` is set.
* Add functionality to stop the current session and start a new one.

## 0.5.0[​](#050 "Direct link to 0.5.0")

### ✨ Features[​](#-features-15 "Direct link to ✨ Features")

* Removed numeric separators for constants.

## 0.4.0[​](#040 "Direct link to 0.4.0")

### ✨ Features[​](#-features-16 "Direct link to ✨ Features")

* Optional metadata field to the constructor.

## 0.3.0[​](#030 "Direct link to 0.3.0")

### 🐛 Issues[​](#-issues-11 "Direct link to 🐛 Issues")

* Fixed correctly passing the `playHead` property.
* Fixed correctly passing custom metadata to the session request.
* Fixed an issue where the `chapterStart` parameters would be missing.
* Fixed some http issues during `sendEventRequest`.

### ✨ Features[​](#-features-17 "Direct link to ✨ Features")

* Improved sending error event.
* Improved property typing.

## 0.2.0[​](#020 "Direct link to 0.2.0")

### 🐛 Issues[​](#-issues-12 "Direct link to 🐛 Issues")

* Removed a `postinstall` script from package.json.
* Fixed an issue where the session would not be ended when destroying the connector.

## 0.1.0[​](#010 "Direct link to 0.1.0")

### ✨ Features[​](#-features-18 "Direct link to ✨ Features")

* Initial release
