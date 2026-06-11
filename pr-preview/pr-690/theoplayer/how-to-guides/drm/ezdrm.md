# EZDRM

This article describes how to configure [EZDRM](https://www.ezdrm.com/) with THEOplayer. Head to our page on [DRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/introduction.md) for more general information.

## SDKs[​](#sdks "Direct link to SDKs")

| Web SDK | Android SDK | iOS SDK | tvOS SDK   | Android TV SDK | Chromecast SDK |
| ------- | ----------- | ------- | ---------- | -------------- | -------------- |
| Yes     | Yes         | Yes     | Unverified | Yes            | Yes            |

## Code examples[​](#code-examples "Direct link to Code examples")

##### Web SDK[​](#web-sdk "Direct link to Web SDK")

```js
if (HLS) {
  let drmConfiguration = {
    integration: 'ezdrm',
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
    integration: 'ezdrm',
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

##### Android SDK[​](#android-sdk "Direct link to Android SDK")

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

##### Legacy iOS/tvOS SDK (4.12.x)[​](#legacy-iostvos-sdk-412x "Direct link to Legacy iOS/tvOS SDK (4.12.x)")

```swift
let drmConfiguration = EzdrmDRMConfiguration(
    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
    certificateURL: "<CERTIFICATE_URL>",
)
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription

```

### Connectors[​](#connectors "Direct link to Connectors")

We are developing open-source DRM connectors that can more easily be maintained and to allow for a modular approach. You can find them in [this Github repo](https://github.com/THEOplayer/samples-drm-integration), alongside with guides on how to integrate and use them. When integrating DRM for the first time or updating your integration, the connectors are to be preferred over the pre-integrations.

**Web** The EZDRM connector can be found in [this folder](https://github.com/THEOplayer/samples-drm-integration/tree/master/web/src/integration/ezdrm).

**Android SDK** Connectors are also the way forward for the current mobile SDKs. There currently is no ready-made connector for this DRM provider: you can choose to develop one based on the examples in the repository, or get in contact with us about making one.

**iOS SDK** The EZDRM connector can be found in [here](https://github.com/THEOplayer/samples-drm-integration/blob/master/ios/ContentProtectionIntegration/integration/EzdrmDRMIntegration.swift)

## Resources[​](#resources "Direct link to Resources")

* <https://www.ezdrm.com/html/documentation.asp>
* [THEOplayer Github Samples DRM Integration repository](https://github.com/THEOplayer/samples-drm-integration)

## Related articles[​](#related-articles "Direct link to Related articles")

* [Uplynk](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/uplynk.md)
* [Xstream](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/xstream.md)
* [Vualto VuDRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/vualto-vudrm.md)
* [Vimond](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/vimond.md)
* [Verimatrix MultiRights](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/verimatrix-multirights.md)
* [DoveRunner](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/doverunner.md)
* [Nagra Conax Contego](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/nagra-conax-contego.md)
