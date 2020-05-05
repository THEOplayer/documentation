# Vualto VuDRM

This article describes how to configure Vualto VuDRM with THEOplayer.

Head to our page on [DRM](../../how-to-guides/04-drm/00-introduction.md) for more general information.

### Table of Contents
- [SDKs](#sdks)
- [Code examples](#code-examples)
- [Resources](#resources)
- [Related articles](#related-articles)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Unverified  |      Yes      |      Yes       |

## Code examples

##### Web SDK
```js
if (HLS) {
    let drmConfiguration = {
        "integration": "vudrm",
        "token": "<TOKEN>"
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
        "integration": "vudrm",
        "token": "<TOKEN>"
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
DRMConfiguration drmConfiguration = new VudrmDRMConfiguration("<TOKEN>", null,
                new KeySystemConfiguration("<LICENSE_KEY_URL>"));
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
// let headers = [["<KEY>": "<VALUE>"]]
let drmConfiguration = VudrmDRMConfiguration(
    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
    certificateURL: "<CERTIFICATE_URL>",
    token: "<TOKEN>"
    //, headers: headers
)
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription
```

## Resources

- [https://www.vualto.com/products/vudrm-drm/](https://www.vualto.com/products/vudrm-drm/)
- [https://github.com/Vualto/vuplay-theoplayer](https://github.com/Vualto/vuplay-theoplayer)

## Related articles

- [Comcast](03-comcast.md)
- [PallyCon](15-pallycon.md)
- [BuyDRM KeyOS](01-buydrm-keyos/00-introduction.md)
- [Arris Titanium](01-arris-titanium.md)
- [Xstream](13-xstream.md)
- [Verizon Uplynk](12-verizon-uplynk.md)
- [Vualto VuDRM](11-vualto-vudrm.md)