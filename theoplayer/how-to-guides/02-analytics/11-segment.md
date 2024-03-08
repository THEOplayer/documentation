# Segment

Segment is a [Customer Data Platform](https://segment.com/docs/guides/), and offers [integrations](https://segment.com/docs/connections/destinations/catalog/index-all/) with
[Google Analytics](https://segment.com/docs/connections/destinations/catalog/google-analytics/),
[Adobe Analytics](https://segment.com/docs/connections/destinations/catalog/adobe-analytics/),
[Youbora](https://segment.com/docs/connections/destinations/catalog/youbora/),
and others.

Segment sets up "[Connections](https://segment.com/docs/connections/)" between "[Sources](https://segment.com/docs/connections/sources/)" and "[Destinations](https://segment.com/docs/connections/destinations/)".

- Sources send messages into Segment (and other tools). They have JavaScript source, an Android source, and so on.
- Destinations (like Google Analytics, Adobe Analytics, Youbora) receive messages from Segment.

Segment can be implemented on top of THEOplayer.
Refer to the article on [building a custom analytics integrations](06-custom-analytics-integration.md) for more information on how to build an integration on top of THEOplayer.

## SDKs

As a developer you'll have to [build a custom analytics integration](06-custom-analytics-integration.md) to support Segment through a THEOplayer SDK.

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | :------: |
| Custom  |   Custom    | Custom  |  Custom  |     Custom     |     Custom     |  Custom  |

## Connecting Segment to THEOplayer

Segment can be integrated on top of THEOplayer.

### Web SDK

You'll (most likely) use the "[Analytics.js](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/)" source to get access to the Segment API.

Then, for each of your destinations, you want to figure out whether you can use the "Video Spec",
or whether need to do something specific for some destinations (e.g. [Youbora](https://segment.com/docs/connections/destinations/catalog/youbora/)).

Segment describes a "Video Spec" at https://segment.com/docs/connections/spec/video/, but this article
also mentions that "not all destinations support video tracking and you should always check with the individual destination documentation to confirm".

### Android SDK

You'll (most likely) use the "[Analytics for Android SDK](https://segment.com/docs/connections/sources/catalog/libraries/mobile/android/)" source to get access to the Segment API.

Then, for each of your destinations, you want to figure out whether you can use the "Video Spec",
or whether need to do something specific for some destinations (e.g. [Youbora](https://segment.com/docs/connections/destinations/catalog/youbora/)).

Segment describes a "Video Spec" at https://segment.com/docs/connections/spec/video/, but this article
also mentions that "not all destinations support video tracking and you should always check with the individual destination documentation to confirm".

### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

You'll (most likely) use the "[Analytics for iOS SDK](https://segment.com/docs/connections/sources/catalog/libraries/mobile/ios/)" source to get access to the Segment API.

Then, for each of your destinations, you want to figure out whether you can use the "Video Spec",
or whether need to do something specific for some destinations (e.g. [Youbora](https://segment.com/docs/connections/destinations/catalog/youbora/)).

Segment describes a "Video Spec" at https://segment.com/docs/connections/spec/video/, but this article
also mentions that "not all destinations support video tracking and you should always check with the individual destination documentation to confirm".

### Other platforms

Refer to the documentation at https://segment.com/docs/.
