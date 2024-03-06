# Irdeto

This article describes how to configure Irdeto DRM with THEOplayer.

Head to our page on [DRM](../../how-to-guides/04-drm/00-introduction.md) for more general information.

### Table of Contents

- [SDKs](#sdks)
- [Code examples](#code-examples)
- [Resources](#resources)
- [Related articles](#related-articles)

## SDKs

| Web SDK | Android SDK | iOS SDK |  tvOS SDK  | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Unverified |      Yes       |      Yes       |

## Code examples

##### Web SDK

```js
if (HLS) {
    let drmConfiguration = {
        "integration": "irdeto",
        "crmId": "<CRM_ID>",
        "accountId": "<ACCOUNT_ID>",
        "contentId": "<CONTENT_ID>",
        "keyId": "<KEY_ID>",
        "applicationId": "<APPLICATION_ID>"
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
        "integration": "irdeto",
        "crmId": "<CRM_ID>",
        "accountId": "<ACCOUNT_ID>",
        "contentId": "<CONTENT_ID>",
        "keyId": "<KEY_ID>",
        "applicationId": "<APPLICATION_ID>",
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
DRMConfiguration drmConfiguration = new IrdetoConfiguration("<CRM_ID>", "<ACCOUNT_ID>", "<CONTENT_ID>",
                "<SESSION_ID>", "<TICKET>", new KeySystemConfiguration("<LICENSE_KEY_URL_WIDEVINE"));
TypedSource typedSource = new TypedSource.Builder()
    .src("<DASH_STREAM_URL>")
    .drm(drmConfiguration)
    .build();
SourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()
    .sources(typedSource)
    .build();
theoplayer.getPlayer().setSource(sourceDescription);
```

##### Legacy iOS/tvOS SDK (4.12.x)

```swift
let drmConfiguration = IrdetoDRMConfiguration(
    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
    certificateURL: "<CERTIFICATE_URL>",
    crmId: "<CRM_ID>",
    accountId: "<ACCOUNT_ID>",
    contentId: "<CONTENT_ID>",
    keyId: "<KEY_ID>",
    applicationId: "<APPLICATION_ID>"
)
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription
```

## Resources

- [https://irdeto.com/video-entertainment/multi-drm-and-rights-management/](https://irdeto.com/video-entertainment/multi-drm-and-rights-management/)

## Related articles

- [Axinom](02-axinom.md)
- [castLabs DRMToday](02-castlabs-drmtoday/00-introduction.md)
- [EZDRM](04-ezdrm.md)
- [Intertrust ExpressPlay](05-intertrust-expressplay.md)
- [Irdeto](06-irdeto.md)
- [Microsoft Azure](07-microsoft-azure.md)
- [Nagra Conax Contego](08-nagra-conax-contego.md)
