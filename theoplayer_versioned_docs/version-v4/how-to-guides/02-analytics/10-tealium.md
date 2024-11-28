# Tealium

Tealium is a [tag management system](https://tealium.com/resource/fundamentals/what-is-tag-management/),
and offers [integrations](https://tealium.com/integrations/) with [Google Analytics](https://tealium.com/integrations/google_analytics.php),
[Adobe Analytics](https://tealium.com/integrations/adobe_analytics.php), and others.

Tealium can be implemented on top of THEOplayer.
Refer to the article on [building a custom analytics integrations](06-custom-analytics-integration.md) for more information on how to build an integration on top of THEOplayer.

## SDKs

As a developer you'll have to [build a custom analytics integration](06-custom-analytics-integration.md) to support Tealium through a THEOplayer SDK.

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | :------: |
| Custom  |   Custom    | Custom  |  Custom  |     Custom     |     Custom     |  Custom  |

## Connecting Tealium to THEOplayer

Tealium can be integrated on top of THEOplayer.

### Web SDK

The Tealium documentation includes articles that describe:

- [How to install Tealium for JavaScript](https://docs.tealium.com/platforms/javascript/install/) (Web).
- [How to implement tracking](https://docs.tealium.com/platforms/javascript/track/), but also mentions that "video tracking often requires a custom solution coding to the specifications of the video platform API".
- [Basic video tracking](https://docs.tealium.com/platforms/getting-started-web/data-layer/definitions/basic-video-tracking/) on the data layer
- [An introduction to the Data Layer](https://docs.tealium.com/platforms/getting-started-web/data-layer/an-introduction-to-the-data-layer/).

### Android SDK

The Tealium documentation includes articles that describe:

- [How to install Tealium for Java](https://docs.tealium.com/platforms/android-java/install/) (Android).
- [How to implement tracking](https://docs.tealium.com/platforms/android-java/track/).

The guides linked above for the Data Layer and basic video tracking on it, are also relevant here.

### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

The Tealium documentation includes articles that describe:

- [How to install Tealium for Swift](https://docs.tealium.com/platforms/ios-swift/install/) (iOS).
- [How to implement tracking](https://docs.tealium.com/platforms/ios-swift/track/).

The guides linked above for the Data Layer and basic video tracking on it, are also relevant here.

### Other platforms

Refer to the documentation at https://docs.tealium.com/platforms/.
