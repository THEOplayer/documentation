# @theoplayer/react-native-analytics-conviva

## 1.14.0[​](#1140 "Direct link to 1.14.0")

### ✨ Features[​](#-features "Direct link to ✨ Features")

* Added support for THEOplayer v11 and React Native THEOplayer v11.

## 1.13.1[​](#1131 "Direct link to 1.13.1")

### 🐛 Issues[​](#-issues "Direct link to 🐛 Issues")

* Fixed an issue on iOS where the native ios connector version was locked to 10.8 patch updates.

## 1.13.0[​](#1130 "Direct link to 1.13.0")

### ✨ Features[​](#-features-1 "Direct link to ✨ Features")

* Changed license to BSD 3-Cause Clear. See [LICENSE](https://github.com/THEOplayer/react-native-connectors/blob/-/conviva/LICENSE) file for more information.

## 1.12.0[​](#1120 "Direct link to 1.12.0")

### ✨ Features[​](#-features-2 "Direct link to ✨ Features")

* Passing initial metadata as persistent conviva metadata on iOS

## 1.11.1[​](#1111 "Direct link to 1.11.1")

### 🐛 Issues[​](#-issues-1 "Direct link to 🐛 Issues")

* Fixed an issue where a platform-based import could cause compilation issues on Android and iOS platforms.

## 1.11.0[​](#1110 "Direct link to 1.11.0")

### ✨ Features[​](#-features-3 "Direct link to ✨ Features")

* Added support for Amazon Vega OS.
* Updated Android's target SDK version to 36.

### 🐛 Issues[​](#-issues-2 "Direct link to 🐛 Issues")

* Fixed an issue where on iOS the stopAndStartNewSession was blocked when the player was in a paused state.

## 1.10.1[​](#1101 "Direct link to 1.10.1")

### 🐛 Issues[​](#-issues-3 "Direct link to 🐛 Issues")

* Fixed an issue where the native connector would not be properly destroyed in case the player's native handle would become unavailable.

## 1.10.0[​](#1100 "Direct link to 1.10.0")

### ✨ Features[​](#-features-4 "Direct link to ✨ Features")

* Added support for THEOplayer v10 and React Native THEOplayer v10.

## 1.9.1[​](#191 "Direct link to 1.9.1")

### 🐛 Issues[​](#-issues-4 "Direct link to 🐛 Issues")

* Fixed an issue where the connector would output a `HashMap` conversion build error for Android platforms.

## 1.9.0[​](#190 "Direct link to 1.9.0")

### ✨ Features[​](#-features-5 "Direct link to ✨ Features")

* Added support for THEOplayer 9.0.

### 🐛 Issues[​](#-issues-5 "Direct link to 🐛 Issues")

* Fixed an issue on Android where an app would crash when accessing the connector's `stopAndStartNewSession` method.

## 1.8.3[​](#183 "Direct link to 1.8.3")

### 🐛 Issues[​](#-issues-6 "Direct link to 🐛 Issues")

* Fixed an issue on Android where the optional `debug` property in `ConvivaConfiguration` was treated as being required.

### ✨ Features[​](#-features-6 "Direct link to ✨ Features")

* Added the option on Android to allow setting a different connector version using `THEOplayerName_connectorVersion`.

## 1.8.2[​](#182 "Direct link to 1.8.2")

### 🐛 Issues[​](#-issues-7 "Direct link to 🐛 Issues")

* Fixed an issue on iOS where the podspec files did not contain all references when not using the New Architecture.

## 1.8.1[​](#181 "Direct link to 1.8.1")

### 🐛 Issues[​](#-issues-8 "Direct link to 🐛 Issues")

* Fixed an issue on iOS where the project would not build when used in a project that has New Architecture enabled.

## 1.8.0[​](#180 "Direct link to 1.8.0")

### ✨ Features[​](#-features-7 "Direct link to ✨ Features")

* Added sdkVersions API to Nielsen, Mux, Conviva, Comscore, Adobe and Engage connectors

## 1.7.1[​](#171 "Direct link to 1.7.1")

### 🐛 Issues[​](#-issues-9 "Direct link to 🐛 Issues")

* Deleted dependency on the removed ad module for Android.

## 1.7.0[​](#170 "Direct link to 1.7.0")

### ✨ Features[​](#-features-8 "Direct link to ✨ Features")

* Added support for THEOplayer 8.0

## 1.6.0[​](#160 "Direct link to 1.6.0")

### ✨ Features[​](#-features-9 "Direct link to ✨ Features")

* Added support for broadcasted ad events.

### 📦 Dependency Updates[​](#-dependency-updates "Direct link to 📦 Dependency Updates")

* Added support for `react-native-theoplayer` v7.0.0 and native player SDK v7.0.0.

### 🐛 Issues[​](#-issues-10 "Direct link to 🐛 Issues")

* Fixed an issue where on iOS (^17.2) bitrate reporting was broken due to a deprecated iOS notification name.

## 1.5.1[​](#151 "Direct link to 1.5.1")

### 📦 Dependency Updates[​](#-dependency-updates-1 "Direct link to 📦 Dependency Updates")

* Relax restriction on `react-native-theoplayer` peer dependency versions.

## 1.5.0[​](#150 "Direct link to 1.5.0")

### 📦 Dependency Updates[​](#-dependency-updates-2 "Direct link to 📦 Dependency Updates")

* Added support for `react-native-theoplayer` v3.0 and THEOplayer 6.0.

## 1.4.0[​](#140 "Direct link to 1.4.0")

### 📦 Dependency Updates[​](#-dependency-updates-3 "Direct link to 📦 Dependency Updates")

* Upgraded connector for Web to 1.2.0.

## 1.3.0[​](#130 "Direct link to 1.3.0")

### 📦 Dependency Updates[​](#-dependency-updates-4 "Direct link to 📦 Dependency Updates")

* Upgraded connector for Android to 5.10.0-1 with dependency on Conviva sdk 4.0.33.
* Upgraded Android compileSdk and targetSdk versions to 33.

### ✨ Features[​](#-features-10 "Direct link to ✨ Features")

* Updated example app to use @theoplayer/react-native-ui.

## 1.2.1[​](#121 "Direct link to 1.2.1")

### 📦 Dependency Updates[​](#-dependency-updates-5 "Direct link to 📦 Dependency Updates")

* Updated connector for Web to v1.1.7.

## 1.2.0[​](#120 "Direct link to 1.2.0")

### 📦 Dependency Updates[​](#-dependency-updates-6 "Direct link to 📦 Dependency Updates")

* Updated connector for Web to v1.1.6.
* Updated connector for Android to v5.6.0-1.

## 1.1.0[​](#110 "Direct link to 1.1.0")

### 🐛 Issues[​](#-issues-11 "Direct link to 🐛 Issues")

* Fixed an issue on iOS where the bitrate was not reported after a stop and start new session action.

## 1.0.0[​](#100 "Direct link to 1.0.0")

### ✨ Features[​](#-features-11 "Direct link to ✨ Features")

* Initial release
