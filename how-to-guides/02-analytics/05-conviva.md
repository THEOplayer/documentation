# Conviva

Conviva is an analytics service. THEOplayer offers a pre-integration for this solution. A demo can be found at [http://demo.theoplayer.com/conviva-analytics-test-page-20171024](http://demo.theoplayer.com/conviva-analytics-test-page-20171024).

### Table of Contents
- [SDKs](#sdks)
- [Code example](#code-example)
  - [Pre-requirements](#pre-requirements)
  - [Configuration](#configuration)
- [Related links:](#related-links)
  
## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | No  |      Yes       |      Unverified       |

## Code example

### Pre-requirements

##### Web SDK

1. Have a THEOplayer SDK with the Conviva module enabled.
2. Include Conviva's SDK. For example,
```html
//Recommended Conviva Library
<script type="text/javascript"src="https://cdn.theoplayer.com/demos/conviva/2.151.0.37023.js"></script>
```

##### Android (TV) SDK

1. Have a THEOplayer SDK with the Conviva module enabled.

##### iOS (/tvOS) SDK

1. Have a THEOplayer SDK with the Conviva module enabled.

### Configuration

The snippets below explain how you can pass on Conviva settings to a THEOplayer configuration object.

##### Web SDK

A code example can be found at [http://demo.theoplayer.com/conviva-analytics-test-page-20171024](http://demo.theoplayer.com/conviva-analytics-test-page-20171024).

```js
var convivaConfiguration = {
    "integration": "conviva",
    "customerKey": "<CUSTOMER_KEY>",
    "gatewayUrl": "<GATEWAY_URL>",
    "contentMetadata": {
        "assetName": "<ASSET_NAME>",
        "live": isLive,
        // "viewerId": "<VIEWER_ID>",
        // "defaultBitRateKbps": "<DEFAULT_BITRATE_KBPS>",
        // "defaultResource": "<DEFAULT_RESOURCE>",
        // "duration": 1000,
        // "encodedFrameRate": 30,
        // "applicationName": "<APPLICATION_NAME>"
        // "custom": {
        // 	"<KEY>": "<VALUE>",
        // }
    }
};
player.source = {
    "analytics": [convivaConfiguration],
    "sources": [typedSource]
}
```

##### Android (TV) SDK

The snippet below is an example configuration for Conviva.

```java
HashMap<String, String> customConvivaMetadata = new HashMap<>();
int defaultBitRateKbps = 1000,
    duration = 1000,
    encodedFrameRate = 30,
    heartbeatInterval = 5;
boolean isLive = false,
        isManualSessionControl = false;
customConvivaMetadata.put("<KEY>", "<VALUE>");
ConvivaConfiguration convivaConfiguration = new ConvivaConfiguration.Builder("customerKey",
    new ConvivaContentMetadata.Builder("<ASSET_NAME>")
        .applicationName("<APPLICATION_NAME>")
        .defaultBitrateKbps(defaultBitRateKbps)
        .defaultResource("<DEFAULT_RESOURCE>")
        .duration(duration)
        .encodedFrameRate(encodedFrameRate)
        .live(isLive)
        .viewerId("<VIEWER_ID>")
        .custom(customConvivaMetadata)
        .build())
    .gatewayUrl("<GATEWAY_URL>")
    .heartbeatInterval(heartbeatInterval)
    .manualSessionControl(isManualSessionControl)
    .build();
        
SourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()
    .sources(typedSource)
    .analytics(convivaConfiguration)
    .build();
```

##### iOS (/tvOS) SDK

The snippet below is an example configuration for Conviva.
```swift
let isLive = false
let contentMetadata = ConvivaContentMetadata(
    assetName: "<ASSET_NAME>",
    live: isLive,
    // defaultBitrateKbps: defaultBitrateKbps,
    // defaultResource: "<DEFAULT_RESOURCE>",
    // duration: duration,
    // encodedFrameRate: encodedFrameRate,
    // applicationName: "<APPLICATION_NAME>",
    viewerId: "<VIEWER_ID>"
    // , custom: [:]
)

let convivaConfiguration = ConvivaConfiguration(
    customerKey: "876a2328cc34e791190d855daf389567c96d1e86",
    // heartbeatInterval: heartbeatInterval,
    gatewayURL: "https://theoplayer-test.testonly.conviva.com",
    contentMetadata: contentMetadata
    // , manualSessionControl: isManualSessionControl
)

let sourceDescription = SourceDescription(
        source: TypedSource(
        src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",
        type: "application/x-mpegurl"
    ),
    analytics: [convivaConfiguration]
)
```

## Related links:

- Demo page: [http://demo.theoplayer.com/conviva-analytics-test-page-20171024](http://demo.theoplayer.com/conviva-analytics-test-page-20171024)
- [Analytics API Web SDK](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.analytics.md)