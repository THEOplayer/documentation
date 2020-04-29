# Arris Titanium

This article describes how to configure Arris Titanium DRM with THEOplayer.

Head to our page on [DRM](../../how-to-guides/04-drm/00-introduction.md) for more general information.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Unverified   | Unverified  |      Yes      |      Yes       |


## Code examples

##### Web SDK

```js
if (HLS) {
    let drmConfiguration = {
        "integration": "titanium",
        "accountName": "<ACCOUNT_NAME>",
        "customerName": "<CUSTOMER_NAME>",
        "friendlyName": "<FRIENDLY_NAME>",
        "portalId": "<PORTAL_ID>",
        "authToken": "<AXINOM_TOKEN>",
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
        "integration": "titanium",
        "accountName": "<ACCOUNT_NAME>",
        "customerName": "<CUSTOMER_NAME>",
        "friendlyName": "<FRIENDLY_NAME>",
        "portalId": "<PORTAL_ID>",
        "authToken": "<AXINOM_TOKEN>",
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
DRMConfiguration drmConfiguration = TitaniumDRMConfiguration.Builder
    .titaniumDrm("<ACCOUNT_NAME>", ">CUSTOMER_NAME>", "<PORTAL_ID>")
    // .friendlyName("<FRIENDLY_NAME>")
    // .authToken("<AUTH_TOKEN>")
    .widevine(
        new KeySystemConfiguration(
            "<LICENSE_KEY_URL_WIDEVINE>"
        )
    )
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

Please refer to [DRM](../../how-to-guides/04-drm/00-introduction.md) (custom configuration).

## Resources

- [https://www.arris.com/products/titanium-cas/](https://www.arris.com/products/titanium-cas/)

