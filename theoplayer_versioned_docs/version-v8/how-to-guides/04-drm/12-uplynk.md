# Uplynk

**Important:** Uplynk customers should configure DRM through the [THEOplayer Uplynk integration](../web/uplynk/01-preplay.md).
More specifically, to configure DRM, developers should use the [`contentProtected`](../web/uplynk/01-preplay.md) flag.
(The Uplynk integration provides a pre-integration with Uplynk's Preplay, Ping and Asset Info services,
exposes additional APIs, and enhances your UI and UX.)

This article describes how to configure Uplynk DRM with THEOplayer **if** you are not interested in using the aforementioned Uplynk integration.

Head to our page on [DRM](../../how-to-guides/04-drm/00-introduction.md) for more general information.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      Yes       |

## Code examples

##### Web SDK

```js
if (HLS) {
  let drmConfiguration = {
    integration: 'uplynk',
    fairplay: {
      licenseAcquisitionURL: '<LICENSE_KEY_URL_FAIRPLAY>',
      certificateURL: 'CERTIFICATE_URL>',
    },
  };
  player.source = {
    sources: {
      src: '<HLS_STREAM_URL>',
      type: 'application/x-mpegurl',
      contentProtection: drmConfiguration,
    },
  };
} else if (DASH) {
  let drmConfiguration = {
    integration: 'uplynk',
    playready: {
      licenseAcquisitionURL: '<LICENSE_KEY_URL_PLAYREADY>',
    },
    widevine: {
      licenseAcquisitionURL: '<LICENSE_KEY_URL_WIDEVINE>',
    },
  };
  player.source = {
    sources: {
      src: '<DASH_STREAM_URL>',
      type: 'application/dash+xml',
      contentProtection: drmConfiguration,
    },
  };
}
```

##### Android SDK

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

##### Legacy iOS/tvOS SDK (4.12.x)

```swift
// let headers = [["<KEY>": "<VALUE>"]]
let drmConfiguration = UplynkDRMConfiguration(
    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
    certificateURL: "<CERTIFICATE_URL>",
    // , headers
)
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription
```

## Resources

- [Content Protection (Uplynk)](https://docs.uplynk.com/docs/content-protection)

## Related articles

- [Axinom](02-axinom.md)
- [castLabs DRMToday](02-castlabs-drmtoday/00-introduction.md)
- [EZDRM](04-ezdrm.md)
- [Intertrust ExpressPlay](05-intertrust-expressplay.md)
- [Irdeto](06-irdeto.md)
- [Microsoft Azure](07-microsoft-azure.md)
- [Nagra Conax Contego](08-nagra-conax-contego.md)
