# @theoplayer/react-native-analytics-comscore

## 1.14.0[​](#1140 "Direct link to 1.14.0")

### ✨ Features[​](#-features "Direct link to ✨ Features")

* Added support for THEOplayer v11 and React Native THEOplayer v11.

## 1.13.0[​](#1130 "Direct link to 1.13.0")

### ✨ Features[​](#-features-1 "Direct link to ✨ Features")

* Changed license to BSD 3-Cause Clear. See [LICENSE](https://github.com/THEOplayer/react-native-connectors/blob/-/comscore/LICENSE) file for more information.

## 1.12.0[​](#1120 "Direct link to 1.12.0")

### ✨ Features[​](#-features-2 "Direct link to ✨ Features")

* Updated Android's target SDK version to 36.

## 1.11.1[​](#1111 "Direct link to 1.11.1")

### 🐛 Issues[​](#-issues "Direct link to 🐛 Issues")

* Fixed an issue where the native connector would not be properly destroyed in case the player's native handle would become unavailable.

## 1.11.0[​](#1110 "Direct link to 1.11.0")

### ✨ Features[​](#-features-3 "Direct link to ✨ Features")

* Added support for THEOplayer v10 and React Native THEOplayer v10.

## 1.10.0[​](#1100 "Direct link to 1.10.0")

### ✨ Features[​](#-features-4 "Direct link to ✨ Features")

* Added support for THEOplayer 9.0.

## 1.9.0[​](#190 "Direct link to 1.9.0")

### ✨ Features[​](#-features-5 "Direct link to ✨ Features")

* Passing the usagePropertiesAutoUpdateMode configuration property to the native iOS connector.

## 1.8.2[​](#182 "Direct link to 1.8.2")

### 🐛 Issues[​](#-issues-1 "Direct link to 🐛 Issues")

* Fixed an issue on iOS where the podspec files did not contain all references when not using the New Architecture.

## 1.8.1[​](#181 "Direct link to 1.8.1")

### 🐛 Issues[​](#-issues-2 "Direct link to 🐛 Issues")

* Fixed an issue on iOS where the project would not build when used in a project that has New Architecture enabled.

## 1.8.0[​](#180 "Direct link to 1.8.0")

### ✨ Features[​](#-features-6 "Direct link to ✨ Features")

* Added sdkVersions API to Nielsen, Mux, Conviva, Comscore, Adobe and Engage connectors

## 1.7.1[​](#171 "Direct link to 1.7.1")

### 🐛 Issues[​](#-issues-3 "Direct link to 🐛 Issues")

* Deleted dependency on the removed ad module for Android.

## 1.7.0[​](#170 "Direct link to 1.7.0")

### ✨ Features[​](#-features-7 "Direct link to ✨ Features")

* Added support for THEOplayer 8.0

## 1.6.0[​](#160 "Direct link to 1.6.0")

### 📦 Dependency Updates[​](#-dependency-updates "Direct link to 📦 Dependency Updates")

* Removed setup for Mux connector on tvOS. The Mux pod is only available for iOS.
* Added support for `react-native-theoplayer` v7.0.0 and native player SDK v7.0.0.

## 1.5.0[​](#150 "Direct link to 1.5.0")

### 🐛 Issues[​](#-issues-4 "Direct link to 🐛 Issues")

* Fixed an issue on Android where `notifyPlay()` was not called when the player would resume play-out.
* Fixed an issue on Android where the user consent variables were not properly passed.
* Fixed an issue on Web where the player position is reported as a decimal value instead of an integer.

### ✨ Features[​](#-features-8 "Direct link to ✨ Features")

* Added the `usagePropertiesAutoUpdateMode` option to `ComscoreConfiguration` to indicate whether background playback is supported.

## 1.4.1[​](#141 "Direct link to 1.4.1")

### ✨ Features[​](#-features-9 "Direct link to ✨ Features")

* Relax restriction on `react-native-theoplayer` peer dependency versions.

## 1.4.0[​](#140 "Direct link to 1.4.0")

### 📦 Dependency Updates[​](#-dependency-updates-1 "Direct link to 📦 Dependency Updates")

* Added support for `react-native-theoplayer` v3.0 and THEOplayer 6.0.

## 1.3.0[​](#130 "Direct link to 1.3.0")

### 🐛 Issues[​](#-issues-5 "Direct link to 🐛 Issues")

* Fixed an issue on Web where some `duration` and `currentTime` values were reported wrong.

## 1.2.0[​](#120 "Direct link to 1.2.0")

### 🐛 Issues[​](#-issues-6 "Direct link to 🐛 Issues")

* Fixed an issue on Android where the usage properties would not update when the app transitions to the background.

## 1.1.0[​](#110 "Direct link to 1.1.0")

### 📦 Dependency Updates[​](#-dependency-updates-2 "Direct link to 📦 Dependency Updates")

* Updated Web dependency to Comscore SDK v7.7.0

## 1.0.0[​](#100 "Direct link to 1.0.0")

### ✨ Features[​](#-features-10 "Direct link to ✨ Features")

* Initial release
