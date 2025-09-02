# Verimatrix MultiRights

This article describes how to configure Verimatrix MultiRights with THEOplayer. [MultiRights](https://www.verimatrix.com/solutions/multirights-ott) is a multi-DRM solution by [Verimatrix](https://www.verimatrix.com/).
Head to our page on [DRM](../../how-to-guides/04-drm/00-introduction.md) for more general information.

## SDKs

| Web SDK | Android SDK | iOS SDK |  tvOS SDK  | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Unverified |      Yes       |      Yes       |

## Code examples

##### Web SDK

```js
if (HLS) {
  let drmConfiguration = {
    integration: 'verimatrix',
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
    integration: 'verimatrix',
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
let drmConfiguration = VerimatrixDRMConfiguration(
        licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
        certificateURL: "<CERTIFICATE_URL>"
    )
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription
```

## Connectors

We are developing open-source DRM connectors that can more easily be maintained and to allow for a modular approach. You can find them in [this Github repo](https://github.com/THEOplayer/samples-drm-integration), alongside with guides on how to integrate and use them.
When integrating DRM for the first time or updating your integration, the connectors are to be preferred over the pre-integrations.

**Web**
The Verimatrix DRM connector can be found in [this folder](https://github.com/THEOplayer/samples-drm-integration/tree/master/web/src/integration/verimatrixcoredrm).

**Android**
The Verimatrix DRM connector can be found in [this folder](https://github.com/THEOplayer/samples-drm-integration/tree/master/android/app/src/main/java/com/theoplayer/contentprotectionintegration/integration/verimatrixcoredrm).

**iOS**
The Verimatrix DRM connector can be found [here](https://github.com/THEOplayer/samples-drm-integration/blob/master/ios/ContentProtectionIntegration/integration/VerimatrixCoreDRMIntegration.swift).

## Resources

- [THEOplayer Github Samples DRM Integration repository](https://github.com/THEOplayer/samples-drm-integration)

## Related articles

- [Comcast](03-comcast.md)
- [DoveRunner](15-doverunner.md)
- [BuyDRM KeyOS](01-buydrm-keyos/00-introduction.md)
- [Arris Titanium](01-arris-titanium.md)
- [Uplynk](12-uplynk.md)
- [Xstream](13-xstream.md)
- [Vualto VuDRM](11-vualto-vudrm.md)
