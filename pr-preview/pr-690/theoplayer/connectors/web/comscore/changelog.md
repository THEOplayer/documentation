# @theoplayer/comscore-connector-web

## 1.5.0[​](#150 "Direct link to 1.5.0")

### ✨ Features[​](#-features "Direct link to ✨ Features")

* Added support for THEOplayer v11.

## 1.4.0[​](#140 "Direct link to 1.4.0")

### ✨ Features[​](#-features-1 "Direct link to ✨ Features")

* Added support for THEOplayer version 10.

## 1.3.0[​](#130 "Direct link to 1.3.0")

### ✨ Features[​](#-features-2 "Direct link to ✨ Features")

* Added support for THEOplayer `9.0`.

## 1.2.0[​](#120 "Direct link to 1.2.0")

### ✨ Features[​](#-features-3 "Direct link to ✨ Features")

* Add the option to inform the ComScore library of the environment it is running in through the `setPlatformAPI`.

### 🐛 Issues[​](#-issues "Direct link to 🐛 Issues")

* Fixed an issue where DVR window length and offsets were incorrectly reported.
* Fixed an issue where playhead positions or content/ad durations were not reported in (rounded) milliseconds.
* Fixed an issue where only one ad in an adbreak would be reported.
* Fixed an issue where playback of the main content wouldn't get reported if Google IMA returned an empty pre-roll ad break.
* Fixed an issue where no content metadata was reported during a pre-roll ad.

## 1.1.0[​](#110 "Direct link to 1.1.0")

### ✨ Features[​](#-features-4 "Direct link to ✨ Features")

* Added support for THEOplayer `8.0`.

## 1.0.21[​](#1021 "Direct link to 1.0.21")

### ✨ Features[​](#-features-5 "Direct link to ✨ Features")

* Initial release as a connector on npm.

### 🐛 Issues[​](#-issues-1 "Direct link to 🐛 Issues")

* Fixed multiple issues where the timing of reporting the DVR window length and the playhead's offset wrt the DVR window end was wrong if a LIVE stream with a CSAI pre-roll was set as the player source.
