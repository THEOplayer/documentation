# Nagra Conax Contego

This article describes how to configure [Conax](https://dtv.nagra.com/scalable-service-protection) DRM with THEOplayer.

Head to our page on [DRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/introduction.md) for more general information.

## SDKs[​](#sdks "Direct link to SDKs")

| Web SDK | Android SDK | iOS SDK    | tvOS SDK   | Android TV SDK | Chromecast SDK |
| ------- | ----------- | ---------- | ---------- | -------------- | -------------- |
| Yes     | Yes         | Unverified | Unverified | Yes            | Yes            |

## Code examples[​](#code-examples "Direct link to Code examples")

##### Web SDK[​](#web-sdk "Direct link to Web SDK")

```js
if (HLS) {
  if (CLASSIC_MODEL) {
    let drmConfiguration = {
      integration: 'conax',
      token: '<CONAX_TOKEN>',
      deviceId: '<DEVICE_ID>',
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
  } else if (UPFRONT_MODEL) {
    let drmConfiguration = {
      integration: 'conax',
      fairplay: {
        licenseAcquisitionURL: '<LICENSE_KEY_URL_FAIRPLAY>',
        certificateURL: 'CERTIFICATE_URL>',
      },
      headers: {
        PreAuthorization: '<CONAX_PREAUTHORIZATION_TOKEN>',
      },
    };
    player.source = {
      sources: {
        src: '<HLS_STREAM_URL>',
        type: 'application/x-mpegurl',
        contentProtection: drmConfiguration,
      },
    };
  } else {
    // player throws an Invalid Conax configuration error
  }
} else if (DASH) {
  let drmConfiguration = {
    integration: 'conax',
    token: '<CONAX_TOKEN>',
    deviceId: '<DEVICE_ID>',
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

## Related articles[​](#related-articles "Direct link to Related articles")

* [Axinom](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/axinom.md)
* [castLabs DRMToday](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/castlabs-drmtoday/introduction.md)
* [EZDRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/ezdrm.md)
* [Intertrust ExpressPlay](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/intertrust-expressplay.md)
* [Irdeto](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/irdeto.md)
* [Microsoft Azure](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/microsoft-azure.md)
* [Uplynk](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/uplynk.md)
* [Verimatrix MultiRights](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/verimatrix-multirights.md)
* [Vimond](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/vimond.md)
* [Vualto VuDRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/vualto-vudrm.md)
