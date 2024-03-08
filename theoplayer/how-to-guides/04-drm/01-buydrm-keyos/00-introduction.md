# Introduction

This article describes how to configure BuyDRM KeyOS DRM with THEOplayer.

Head to our page on [DRM](../../../how-to-guides/04-drm/00-introduction.md) for more general information.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      Yes       |

## Code Examples

##### Web SDK

```js
if (HLS) {
  let drmConfiguration = {
    integration: "keyos",
    customdata: "<CUSTOMDATA>",
    fairplay: {
      licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
      certificateURL: "CERTIFICATE_URL>"
    }
  };
  player.source = {
    sources: {
      src: "<HLS_STREAM_URL>",
      type: "application/x-mpegurl",
      contentProtection: drmConfiguration
    }
  };
} else if (DASH) {
  let drmConfiguration = {
    integration: "keyos",
    customdata: "<CUSTOMDATA>",
    playready: {
      licenseAcquisitionURL: "<LICENSE_KEY_URL_PLAYREADY>"
    },
    widevine: {
      licenseAcquisitionURL: "<LICENSE_KEY_URL_WIDEVINE>"
    }
  };
  player.source = {
    sources: {
      src: "<DASH_STREAM_URL>",
      type: "application/dash+xml",
      contentProtection: drmConfiguration
    }
  };
}
```

##### Android SDK

```java
DRMConfiguration drmConfiguration = KeyOSDRMConfiguration.Builder
    .keyOsDrm()
    .widevine(
        new KeyOSKeySystemConfiguration("<CUSTOM_DATA>", "<LICENSE_KEY_URL_WIDEVINE>")
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

##### Legacy iOS/tvOS SDK (4.12.x)

```swift
public static var buyDRMkeyOS: SourceDescription {
    let licenseAcquisitionURL: String = "<LICENSE_KEY_URL_FAIRPLAY>"
    let certificateURL: String = "<CERTIFICATE_URL_FAIRPLAY>"
    let token: String = "<TOKEN_FAIRPLAY>"
    let type: String = "application/x-mpegURL"
    let src = "<HLS_STREAM_URL>"
    let drm: KeyOSDRMConfiguration = KeyOSDRMConfiguration(licenseAcquisitionURL: licenseAcquisitionURL, certificateURL: certificateURL, customdata: token)
    let typedSource: TypedSource = TypedSource(src: src, type: type, drm: drm)
    let source: SourceDescription = SourceDescription(source: typedSource)
    return source
}
```

## Resources

<!-- - [https://www.buydrm.com/webinar/buydrm_theoplayer](https://www.buydrm.com/webinar/buydrm_theoplayer)-->

- [https://test.buydrm.com/sites/default/files/pdf/webinar/050217_DeployingKeyOSMulti-DRM_withTHEOPLayer_Webinar.pdf](https://test.buydrm.com/sites/default/files/pdf/webinar/050217_DeployingKeyOSMulti-DRM_withTHEOPLayer_Webinar.pdf)
- [How to use THEOplayer with KeyOS BuyDRM](../../../how-to-guides/04-drm/01-buydrm-keyos/01-how-to-use-with-theoplayer.md)
