# Intertrust ExpressPlay

This article describes how to configure Intertrust ExpressPlay DRM with THEOplayer.

Head to our page on [DRM](../../how-to-guides/04-drm/00-introduction.md) for more general information.

## SDKs

| Web SDK | Android SDK |  iOS SDK   |  tvOS SDK  | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :--------: | :--------: | :------------: | :------------: |
|   Yes   | Unverified  | Unverified | Unverified |   Unverified   |      Yes       |

## Code examples

##### Web SDK

```js
if (HLS) {
  let drmConfiguration = {
    integration: "expressplay",
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
    integration: "expressplay",
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

**Not verified.**

```java
DRMConfiguration drmConfiguration = new DRMConfiguration.Builder()
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

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

**Not verified.**

```swift
// let headers = [["<KEY>": "<VALUE>"]]
let drmConfiguration = FairPlayDRMConfiguration(
    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
    certificateURL: "<CERTIFICATE_URL>"
        // , headers: headers, licenseType: <LICENSE_TYPE>
)
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription
```

## Resources

- [https://www.verimatrix.com/partners/profile/theoplayer](https://www.verimatrix.com/partners/profile/theoplayer)

## Related articles

- [Axinom](02-axinom.md)
- [castLabs DRMToday](02-castlabs-drmtoday/00-introduction.md)
- [EZDRM](04-ezdrm.md)
- [Intertrust ExpressPlay](05-intertrust-expressplay.md)
- [Irdeto](06-irdeto.md)
- [Microsoft Azure](07-microsoft-azure.md)
- [Nagra Conax Contego](08-nagra-conax-contego.md)
