# Adobe Analytics

[Adobe Analytics for Streaming Media](https://docs.adobe.com/content/help/en/media-analytics/using/media-overview.html) is a video analytics service,
and is part of [Adobe Experience Cloud](https://business.adobe.com/products/analytics/adobe-analytics.html).
This product is formerly known as "Adobe Heartbeat", as this product uses "[heartbeats](https://experienceleague.adobe.com/docs/media-analytics/using/media-overview.html#heartbeat)" to collect video metrics.

Adobe Analytics for Streaming Media, or older iterations of this product, can be implemented on top of THEOplayer.
Refer to the article on [building a custom analytics integrations](06-custom-analytics-integration.md) for more information on how to build an integration on top of THEOplayer.

**Table of Contents**

- [SDKs](#sdks)
- [Connecting Adobe Analytics to THEOplayer](#connecting-adobe-analytics-to-theoplayer)

## SDKs
As a developer you'll have to [build a custom analytics integration](06-custom-analytics-integration.md) to support Adobe Analytics through a THEOplayer SDK.

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | :------: |
| Custom  |   Custom    | Custom  |  Custom  |     Custom     |     Custom     |  Custom  |

## Connecting Adobe Analytics to THEOplayer
Adobe Analytics for Streaming Media can be integrated on top of THEOplayer.

### Web SDK
To this end, you can use the [documentation of the Media Analytics SDK](https://experienceleague.adobe.com/docs/media-analytics/using/sdk-implement/setup/setup-javascript/set-up-js-3.html), and you can [download the Media SDKs](https://experienceleague.adobe.com/docs/media-analytics/using/sdk-implement/download-sdks.html).

Alternatively, you can use the [RESTful Media Collection API](https://experienceleague.adobe.com/docs/media-analytics/using/media-collection-api/mc-api-overview.html).

### Android SDK
You can use the [Adobe Experience Platform (AEP) Mobile SDKs](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/analytics-only/media-sdk/mobile-implementation.html?lang=en) for iOS and Android to integrate Adobe Analytics, as the Media Analytics SDK for Android has been [deprecated since 31 August 2021](https://experienceleague.adobe.com/docs/media-analytics/using/getting-started/end-of-support/end-of-support-faqs.html?lang=en)..
The Media API reference is available [here](https://developer.adobe.com/client-sdks/solution/adobe-media-analytics/api-reference/).

Alternatively, you can consider using the [RESTful Media Collection API](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/analytics-only/streaming-media-apis/mc-api-overview.html).

### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)
You can use the [Adobe Experience Platform (AEP) Mobile SDKs](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/analytics-only/media-sdk/mobile-implementation.html?lang=en) for iOS and Android to integrate Adobe Analytics, as the Media Analytics SDK for iOS has been [deprecated since 31 August 2021](https://experienceleague.adobe.com/docs/media-analytics/using/getting-started/end-of-support/end-of-support-faqs.html?lang=en).
The Media API reference is available [here](https://developer.adobe.com/client-sdks/solution/adobe-media-analytics/api-reference/).

Alternatively, you can consider using the RESTful Media Collection API described [here](https://experienceleague.adobe.com/docs/media-analytics/using/implementation/analytics-only/streaming-media-apis/mc-api-overview.html).

### Other platforms
For more information about how to use Adobe Analytics on other platforms, please refer to [Adobe Analytics for Streaming Media overview](https://experienceleague.adobe.com/docs/media-analytics/using/media-overview.html). 
