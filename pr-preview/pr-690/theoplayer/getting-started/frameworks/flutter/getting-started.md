![](https://raw.githubusercontent.com/THEOplayer/flutter-theoplayer-sdk/main/doc/theoplayer_flutter_sdk_logo.png)

# THEOplayer Flutter SDK

## Table of Contents[​](#table-of-contents "Direct link to Table of Contents")

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [How to use these guides](#how-to-use-these-guides)
4. [Features](#features)
5. [Getting Started](#getting-started)
6. [Contributing](#contributing)

## Overview[​](#overview "Direct link to Overview")

The `theoplayer` package provides a `THEOplayer` component supporting video playback on the following platforms:

* Android, Android TV & FireTV
* iOS
* HTML5 (web, mobile web)
* **OUT OF SCOPE**: Tizen and WebOS (smart TVs, set-top boxes and gaming consoles).

This document covers the creation of a minimal app including a `THEOplayer` component, and an overview of the accompanying example app.

It also gives a description of the properties of the `THEOplayer` component, and a list of features and known limitations.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

For each platform, a dependency to the corresponding THEOplayer SDK is included through a dependency manager:

* Gradle & Maven for Android
* Cocoapods for iOS
* npm for Web \*

\**the initial version of the SDK relies on a local copy of `THEOplayer.chromeless.js` (and additional modules), so adding it manually is required!*

In order to use one of these THEOplayer SDKs, it is necessary to obtain a valid THEOplayer license for that specific platform, i.e. HTML5, Android, and/or iOS. You can sign up for a THEOplayer SDK license through [our portal](https://portal.theoplayer.com/).

If you have no previous experience in Flutter, we encourage you to first explore the [Flutter Documentation](https://docs.flutter.dev/), as it gives you a good start on one of the most popular app development frameworks.

## How to use these guides[​](#how-to-use-these-guides "Direct link to How to use these guides")

These are guides on how to use the THEOplayer Flutter SDK in your Flutter project(s) and can be used linearly or by searching the specific section. It is recommended that you have a basic understanding of how Flutter works to speed up the way of working with THEOplayer Flutter SDK.

## Features[​](#features "Direct link to Features")

Depending on the platform on which the application is deployed, a different set of features can be available.

If a feature is missing, additional help is needed, or you need to extend the package, please reach out to us for support.

| Feature                                                                                                            | Android, Android TV, Fire TV                                                                                                                                                                                          | Web                                             | iOS, tvOS                                                     |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------- |
| **Streaming**                                                                                                      | MPEG-DASH (fmp4, CMAF), HLS (TS, CMAF), Progressive MP4, MP3                                                                                                                                                          |                                                 | HLS (TS, CMAF), Progressive MP4, MP3                          |
| **Content Protection**                                                                                             | Widevine                                                                                                                                                                                                              | Widevine, Fairplay                              | Fairplay                                                      |
| **DRM Connectors**                                                                                                 | Through hooking into native implementation… check guides!                                                                                                                                                             |                                                 |                                                               |
| **Subtitles & Closed Captions**                                                                                    | In-stream subtitles supported by the platform.<br />Note: If you use Texture-based rendering (SURFACE\_TEXTURE and SURFACE\_PRODUCER) on Android, you need to implement the subtitle rendering based on track events. |                                                 |                                                               |
| **Metadata**                                                                                                       | Event stream, emsg, ID3, EXT-X-DATERANGE                                                                                                                                                                              |                                                 |                                                               |
| **Fullscreen**                                                                                                     | Supported through `player.presentationMode` API                                                                                                                                                                       |                                                 |                                                               |
| **[Picture-in-Picture](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/picture-in-picture.md)** | Supported through `player.allowAutomaticPictureInPicture` API                                                                                                                                                         | Supported through `player.presentationMode` API | Supported through `player.allowAutomaticPictureInPicture` API |
| **Advertising Integration**                                                                                        | Coming soon… (Can not wait? [Check our in-app integration branches](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/custom-branches.md))                                                           |                                                 |                                                               |
| **Analytics Connectors**                                                                                           | Coming soon…                                                                                                                                                                                                          |                                                 |                                                               |
| **Cast Integration**                                                                                               | Coming soon… (Can not wait? [Check our in-app integration branches](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/custom-branches.md))                                                           |                                                 |                                                               |
| **[THEOlive](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/theolive.md)**                     | Supported through `THEOliveSource` and `player.theolive` API                                                                                                                                                          |                                                 |                                                               |
| **[Adaptive Bitrate (ABR)](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/abr.md)**            | Supported through `player.abr` API                                                                                                                                                                                    |                                                 |                                                               |

## Getting Started[​](#getting-started "Direct link to Getting Started")

This section starts with creating a minimal demo app that integrates the `theoplayer` package, followed by an overview of the available properties and functionality of the THEOplayer component. A minimal example application including a basic user interface and demo sources is included in [this repository](https://github.com/THEOplayer/flutter-theoplayer-sdk/tree/main/flutter_theoplayer_sdk/flutter_theoplayer_sdk/example), and discussed in the next section. Finally, an overview of features, limitations and known issues is listed.

* [Creating a minimal demo app](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/creating-minimal-app.md)

  * [Getting started on Android](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/creating-minimal-app.md#getting-started-on-android)
  * [Getting started on iOS](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/creating-minimal-app.md#getting-started-on-ios)
  * [Getting started on Web](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/creating-minimal-app.md#getting-started-on-web)

* [The THEOplayer component](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/theoplayer-component.md)

* Knowledge Base

  <!-- -->

  * [Using custom DRM connectors](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/custom_drm.md)
  * [Limitations and known issues](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/limitations.md)
  * [Picture-in-picture](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/picture-in-picture.md)
  * [Adaptive Bitrate (ABR)](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/abr.md)
  * [Debug Flags](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/debug-flags.md)
  * [Custom branches](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/custom-branches.md): custom forks to expose native functionality

## Contributing[​](#contributing "Direct link to Contributing")

All contributions are welcomed!

Please read our [Contribution guide](https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/CONTRIBUTING.md) on how to get started!
