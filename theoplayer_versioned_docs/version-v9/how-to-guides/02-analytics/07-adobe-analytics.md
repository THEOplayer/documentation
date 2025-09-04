# Adobe Analytics

[Adobe Streaming Media Collection Add-on](https://experienceleague.adobe.com/en/docs/media-analytics/using/media-overview) is a video analytics service, and is part of [Adobe Experience Cloud](https://business.adobe.com/products/analytics/adobe-analytics.html).

This product was formerly known as "Adobe Heartbeat".

Adobe Streaming Media Collection Add-on or older iterations of this product can be implemented on top of THEOplayer.

Refer to the article on [building a custom analytics integrations](06-custom-analytics-integration.md) for more information on how to build an integration on top of THEOplayer.

## SDKs

As a developer you'll have to [build a custom analytics integration](06-custom-analytics-integration.md) to support Adobe Analytics through a THEOplayer SDK.

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | :------: |
| Custom  |   Custom    | Custom  |  Custom  |     Custom     |     Custom     |  Custom  |

## Connecting Adobe Analytics to THEOplayer

Adobe Streaming Media Collection Add-on can be integrated on top of THEOplayer.

### Web SDK

You can use the [documentation of the Media Analytics SDK](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/media-sdk/web-implementation), and you can [download the Media SDKs](https://experienceleague.adobe.com/en/docs/media-analytics/using/getting-started/download-sdks).

Alternatively, you can use the [RESTful Media Collection API](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/streaming-media-apis/mc-api-overview).

### Android SDK

You can use the [Adobe Experience Platform (AEP) Mobile SDKs](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/media-sdk/mobile-implementation) for iOS and Android to integrate Adobe Analytics, as the Media Analytics SDK for Android has been [deprecated since 31 August 2021](https://experienceleague.adobe.com/en/docs/media-analytics/using/getting-started/end-of-support/end-of-support-faqs).

The Media API reference is available [here](https://developer.adobe.com/client-sdks/solution/adobe-media-analytics/api-reference/).

Alternatively, you can consider using the [RESTful Media Collection API](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/streaming-media-apis/mc-api-overview).

### iOS/tvOS SDK

You can use the [Adobe Experience Platform (AEP) Mobile SDKs](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/media-sdk/mobile-implementation) for iOS and Android to integrate Adobe Analytics, as the Media Analytics SDK for iOS has been [deprecated since 31 August 2021](https://experienceleague.adobe.com/en/docs/media-analytics/using/getting-started/end-of-support/end-of-support-faqs).

The Media API reference is available [here](https://developer.adobe.com/client-sdks/solution/adobe-media-analytics/api-reference/).

Alternatively, you can consider using the [RESTful Media Collection API](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/streaming-media-apis/mc-api-overview).

### Other platforms

For more information about how to use Adobe Analytics on other platforms, please refer to [Adobe Streaming Media Collection Add-on overview](https://experienceleague.adobe.com/en/docs/media-analytics/using/media-overview).
