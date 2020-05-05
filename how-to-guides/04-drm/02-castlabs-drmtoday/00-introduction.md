# Introduction

This article describes how to configure castLabs DRMToday with THEOplayer.

Head to our page on [DRM](../../../how-to-guides/04-drm/00-introduction.md) for more general information.

### Table of Contents
- [SDKs](#sdks)
- [Code examples](#code-examples)
- [Resources](#resources)


## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Yes  |      Yes      |      Yes       |

## Code examples

##### Web SDK

```js
if (HLS) {
    let drmConfiguration = {
        "integration": "drmtoday",
        "merchant": "<MERCHANT>",
        "sessionId": "<SESSION_ID>",
        "token": "<TOKEN>",
        "userId": "<USER_ID>"
        "fairplay": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_FAIRPLAY>",
            "certificateURL": "CERTIFICATE_URL>"
        }
    };
    player.source = {
        "sources": {
            "src": "<HLS_STREAM_URL>",
            "type": "application/x-mpegurl",
            "contentProtection": drmConfiguration
        }
    }
} else if (DASH) {
    let drmConfiguration = {
        "integration": "drmtoday",
        "merchant": "<MERCHANT>",
        "sessionId": "<SESSION_ID>",
        "token": "<TOKEN>",
        "userId": "<USER_ID>"
        "playready": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_PLAYREADY>"
        },
        "widevine": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_WIDEVINE>"
        }
    };
    player.source = {
        "sources": {
            "src": "<DASH_STREAM_URL>",
            "type": "application/dash+xml",
            "contentProtection": drmConfiguration
        }
    }
}
```

##### Android SDK
```java
DRMConfiguration drmConfiguration = DRMTodayConfiguration.Builder
    .drmToday(
        new KeySystemConfiguration("<LICENSE_KEY_URL_WIDEVINE>")
    )
    .merchant("<MERCHANT>")
    .sessionId("<SESSION_ID>")
    .token("<TOKEN>")
    .userId("<USER_ID>")
    .build();
TypedSource typedSource = new TypedSource.Builder()
    .src("<DASH_STREAM_URL>")
    .drm(drmConfiguration)
    .build();
SourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()
    .sources(typedSource)
    .build();
theoplayer.getPlayer().setSource(sourceDescription);
```

##### iOS SDK

```swift
let drmConfiguration = DRMTodayDRMConfiguration(
    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
    certificateURL: "<CERTIFICATE_URL>",
    merchant: "<MERCHANT>",
    sessionId: "<SESSION_ID>",
    token: "<TOKEN>",
    userId: "<USER_ID>"
)
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription
```

## Resources

- [https://castlabs.com/drmtoday/](https://castlabs.com/drmtoday/)
