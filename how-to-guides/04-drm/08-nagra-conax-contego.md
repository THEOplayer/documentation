# Nagra Conax Contego

This article describes how to configure [Conax](https://dtv.nagra.com/content-value-protection) DRM with THEOplayer.

Head to our page on [DRM](../../how-to-guides/04-drm/00-introduction.md) for more general information.

### Table of Contents
- [SDKs](#sdks)
- [Code examples](#code-examples)
- [Resources](#resources)
- [Related articles](#related-articles)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Unverified   | Unverified  |      Yes      |      Yes       |

## Code examples

##### Web SDK

```js
if (HLS) {
    if (CLASSIC_MODEL) {
        let drmConfiguration = {
            "integration": "conax",
            "token": "<CONAX_TOKEN>",
            "deviceId": "<DEVICE_ID>",
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
        };
    } else if (UPFRONT_MODEL) {
        let drmConfiguration = {
            "integration": "conax",
            "fairplay": {
                "licenseAcquisitionURL": "<LICENSE_KEY_URL_FAIRPLAY>",
                "certificateURL": "CERTIFICATE_URL>"
            },
            "headers": {
                "PreAuthorization": "<CONAX_PREAUTHORIZATION_TOKEN>"
            }
        };
        player.source = {
            "sources": {
                "src": "<HLS_STREAM_URL>",
                "type": "application/x-mpegurl",
                "contentProtection": drmConfiguration
            }
        };
    } else {
        // player throws an Invalid Conax configuration error
    }
} else if (DASH) {
    let drmConfiguration = {
        "integration": "conax",
        "token": "<CONAX_TOKEN>",
        "deviceId": "<DEVICE_ID>",
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
    };
}
```

##### Android SDK
```java
DRMConfiguration drmConfiguration = ConaxDRMConfiguration.Builder.conaxDrm("<DEVICE_ID>", "<CONAX_TOKEN>")
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

## Resources

- [https://html5players.demo.conax.com/](https://html5players.demo.conax.com/)

## Related articles

- [Axinom](02-axinom.md)
- [castLabs DRMToday](02-castlabs-drmtoday/00-introduction.md)
- [EZDRM](04-ezdrm.md)
- [Intertrust ExpressPlay](05-intertrust-expressplay.md)
- [Irdeto](06-irdeto.md)
- [Microsoft Azure](07-microsoft-azure.md)
- [Verimatrix MultiRights](12-verizon-uplynk.md)
- [Vimond](10-vimond.md)
- [Vualto VuDRM](11-vualto-vudrm.md)
- [Verizon Uplynk](12-verizon-uplynk.md)