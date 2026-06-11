# Getting started with React Native THEOplayer

The `react-native-theoplayer` package provides a `THEOplayerView` component supporting video playback on the following platforms:

* Android, Android TV & FireTV
* iOS & tvOS (Apple TV)
* HTML5, Tizen & webOS (web, mobile web, smart TVs, set-top boxes and gaming consoles).

This document covers the creation of a minimal app including a `THEOplayerView` component, and an overview of the accompanying example app with a user interface provided by the `@theoplayer/react-native-ui` package.

It also gives a description of the properties of the `THEOplayerView` component, and a list of features and known limitations.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

For each platform, a dependency to the corresponding THEOplayer SDK is included through a dependency manager:

* Gradle & Maven for Android
* Cocoapods for iOS
* npm for Web

In order to use one of these THEOplayer SDKs, it is necessary to obtain a valid THEOplayer license for that specific platform, i.e. HTML5, Android, and/or iOS. You can sign up for a THEOplayer SDK license through [our portal](https://portal.theoplayer.com/).

If you have no previous experience in React Native, we encourage you to first explore the [React Native Documentation](https://reactnative.dev/docs/getting-started), as it gives you a good start on one of the most popular app development frameworks.

## How to use these guides[​](#how-to-use-these-guides "Direct link to How to use these guides")

These are guides on how to use the THEOplayer React Native SDK in your React Native project(s) and can be used linearly or by searching the specific section. It is recommended that you have a basic understanding of how React Native works to speed up the way of working with THEOplayer React Native SDK.

## Features[​](#features "Direct link to Features")

Depending on the platform on which the application is deployed, a different set of features is available.

If a feature missing, additional help is needed, or you need to extend the package, please reach out to us for support.

| Feature                                               | Android, Android TV, Fire TV                                                                                          | Web                                    | iOS, tvOS                                                         |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------- |
| **Streaming**                                         | MPEG-DASH (fmp4, CMAF), HLS (TS, CMAF), Progressive MP4, MP3, M4A                                                     |                                        | HLS (TS, CMAF), Progressive MP4, MP3, M4A                         |
| **Content Protection**                                | Widevine                                                                                                              | Widevine, PlayReady, Fairplay          | Fairplay                                                          |
| **DRM Connectors**                                    | BuyDRM, EZDRM, Anvato, Titanium, Axinom, Irdeto, VuDRM, Comcast, Verimatrix, Azure, …                                 |                                        |                                                                   |
| **Analytics Connectors**                              | Adobe, Agama, Comscore, Conviva, Mux, Nielsen, Youbora                                                                |                                        |                                                                   |
| **Other Connectors**                                  | Yospace SSAI                                                                                                          |                                        |                                                                   |
| **Subtitles & Closed Captions**                       | CEA-608/708, SRT, TTML, WebVTT                                                                                        |                                        |                                                                   |
| **Metadata**                                          | Event stream, emsg, ID3, EXT-X-DATERANGE, EXT-X-PROGRAM-DATE-TIME                                                     |                                        |                                                                   |
| **Advertising Integration**                           | Google IMA, Google DAI, THEOads                                                                                       |                                        |                                                                   |
| **Cast Integration**                                  | Chromecast                                                                                                            | Chromecast, Airplay                    |                                                                   |
| **Presentation Mode**                                 | Inline, Picture-in-Picture, Fullscreen                                                                                |                                        |                                                                   |
| **Audio Control Management**                          | Audio focus & Audio-Becoming-Noisy mgmt                                                                               | (Audio control management by platform) |                                                                   |
| **Advanced APIs**                                     | Background playback,<br />Media Session,<br />Media Cache (offline playback)                                          |                                        | Background playback,<br />NowPlaying,<br />Media Cache (iOS only) |
| **User Interface**<br />`@theoplayer/react-native-ui` | Basic playback, media & text track selection, progress bar, live & vod, preview thumbnails, customisable & extensible |                                        |                                                                   |

## Available connectors[​](#available-connectors "Direct link to Available connectors")

The `react-native-theoplayer` package can be combined with any number of connectors to provide extra functionality. Currently, the following connectors are available:

| Connector                                                 | npm package                                                                                                                                                                                                                                                            | Source                                                                                           |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Adobe Heartbeat analytics using the Media Collections API | [![%40theoplayer/react-native-analytics-adobe](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-analytics-adobe?label=%40theoplayer/react-native-analytics-adobe)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-analytics-adobe)                | [`Adobe`](https://github.com/THEOplayer/react-native-connectors/tree/main/adobe)                 |
| Adobe Media Edge analytics                                | [![%40theoplayer/react-native-analytics-adobe-edge](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-analytics-adobe-edge?label=%40theoplayer/react-native-analytics-adobe-edge)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-analytics-adobe) | [`Adobe Edge`](https://github.com/THEOplayer/react-native-connectors/tree/main/adobe-edge)       |
| Agama analytics                                           | [![%40theoplayer/react-native-analytics-agama](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-analytics-agama?label=%40theoplayer/react-native-analytics-agama)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-analytics-agama)                | [`Agama`](https://github.com/THEOplayer/react-native-connectors/tree/main/agama)                 |
| Comscore analytics                                        | [![%40theoplayer/react-native-analytics-comscore](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-analytics-comscore?label=%40theoplayer/react-native-analytics-comscore)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-analytics-comscore)    | [`Comscore`](https://github.com/THEOplayer/react-native-connectors/tree/main/comscore)           |
| Conviva analytics                                         | [![%40theoplayer/react-native-analytics-conviva](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-analytics-conviva?label=%40theoplayer/react-native-analytics-conviva)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-analytics-conviva)        | [`Conviva`](https://github.com/THEOplayer/react-native-connectors/tree/main/conviva)             |
| Mux analytics                                             | [![%40theoplayer/react-native-analytics-mux](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-analytics-mux?label=%40theoplayer/react-native-analytics-mux)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-analytics-mux)                        | [`Mux`](https://github.com/THEOplayer/react-native-connectors/tree/main/mux)                     |
| Nielsen analytics                                         | [![%40theoplayer/react-native-analytics-nielsen](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-analytics-nielsen?label=%40theoplayer/react-native-analytics-nielsen)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-analytics-nielsen)        | [`Nielsen`](https://github.com/THEOplayer/react-native-connectors/tree/main/nielsen)             |
| Youbora analytics                                         | [![%40theoplayer/react-native-analytics-youbora](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-analytics-youbora?label=%40theoplayer/react-native-analytics-youbora)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-analytics-youbora)        | [`Youbora`](https://github.com/THEOplayer/react-native-connectors/tree/main/youbora)             |
| Yospace SSAI                                              | [![%40theoplayer/react-native-yospace](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-yospace?label=%40theoplayer/react-native-yospace)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-yospace)                                                | [`Yospace`](https://github.com/THEOplayer/react-native-connectors/tree/main/yospace)             |
| Content protection (DRM)                                  | [![%40theoplayer/react-native-drm](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-drm?label=%40theoplayer/react-native-drm)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-drm)                                                                | [`DRM`](https://github.com/THEOplayer/react-native-theoplayer-drm)                               |
| React Native Open UI                                      | [![%40theoplayer/react-native-ui](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-ui?label=%40theoplayer/react-native-ui)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-ui)                                                                    | [`Open UI`](https://github.com/THEOplayer/react-native-theoplayer-ui)                            |
| A template for<br />`react-native-theoplayer` connectors. | [![%40theoplayer/react-native-connector-template](https://img.shields.io/npm/v/%40theoplayer%2Freact-native-connector-template?label=%40theoplayer/react-native-connector-template)](https://www.npmjs.com/package/%40theoplayer%2Freact-native-connector-template)    | [`Connector template`](https://github.com/THEOplayer/react-native-theoplayer-connector-template) |

## Creating your first app[​](#creating-your-first-app "Direct link to Creating your first app")

This section starts with creating a minimal demo app that integrates the `react-native-theoplayer` package, followed by an overview of the available properties and functionality of the THEOplayerView component. An example application including a basic user interface and demo sources is included in the [git repository](https://github.com/THEOplayer/react-native-theoplayer/tree/develop/example), and discussed in the next section.

* [Creating a minimal demo app](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/creating-minimal-app.md)

  * [Getting started on Android](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/creating-minimal-app.md#getting-started-on-android)
  * [Getting started on iOS](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/creating-minimal-app.md#getting-started-on-ios-and-tvos)
  * [Getting started on Web](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/creating-minimal-app.md#getting-started-on-web)

* [The THEOplayerView component](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/theoplayerview-component.md)

* [The example application](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/example-app.md)

## Knowledge Base[​](#knowledge-base "Direct link to Knowledge Base")

This section gives an overview of features, limitations and known issues:

* [Adaptive Bitrate (ABR)](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/abr.md)
* [Advertisements](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/ads.md)
* [Android Media3 Pipeline](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/media3.md)
* [Audio Control Management](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/audio-control.md)
* [Background playback and notifications](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/background.md)
* [Casting with Chromecast and Airplay](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/cast.md)
* [Common Media Client Data (CMCD)](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/cmcd.md)
* [Digital Rights Management (DRM)](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/drm.md)
* [Expo](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/expo.md)
* [Fullscreen presentation](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/fullscreen.md)
* [Media Caching](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/media-caching.md)
* [Migrating to THEOplayer 9.x](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/migrating-to-react-native-theoplayer-9.md)
* [Migrating to THEOplayer 10.x🔥](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/migrating-to-react-native-theoplayer-10.md)
* [Millicast](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/millicast.md)
* [Picture-in-Picture (PiP)](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/pip.md)
* [Subtitles, Closed Captions and Metadata tracks](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/texttracks.md)
* [Limitations and known issues](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/limitations.md)

## API Reference[​](#api-reference "Direct link to API Reference")

See the [API Reference](https://theoplayer.github.io/react-native-theoplayer/api/) for detailed documentation about all available components and functions.
