# Arris Titanium

This article describes how to configure Arris Titanium DRM with THEOplayer. Head to our page on [DRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/introduction.md) for more general information.

## SDKs[​](#sdks "Direct link to SDKs")

| Web SDK | Android SDK | iOS SDK    | tvOS SDK   | Android TV SDK | Chromecast SDK |
| ------- | ----------- | ---------- | ---------- | -------------- | -------------- |
| Yes     | Yes         | Unverified | Unverified | Yes            | Yes            |

## Code examples[​](#code-examples "Direct link to Code examples")

##### Web SDK[​](#web-sdk "Direct link to Web SDK")

```js
if (HLS) {
  let drmConfiguration = {
    integration: 'titanium',
    accountName: '<ACCOUNT_NAME>',
    customerName: '<CUSTOMER_NAME>',
    friendlyName: '<FRIENDLY_NAME>',
    portalId: '<PORTAL_ID>',
    authToken: '<AXINOM_TOKEN>',
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
    integration: 'titanium',
    accountName: '<ACCOUNT_NAME>',
    customerName: '<CUSTOMER_NAME>',
    friendlyName: '<FRIENDLY_NAME>',
    portalId: '<PORTAL_ID>',
    authToken: '<AXINOM_TOKEN>',
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

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)[​](#iostvos-sdk-and-legacy-iostvos-sdk-412x "Direct link to iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)")

Please refer to [DRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/introduction.md) (custom configuration).

## Connectors[​](#connectors "Direct link to Connectors")

We are developing open-source DRM connectors that can more easily be maintained and to allow for a modular approach. You can find them in [this Github repo](https://github.com/THEOplayer/samples-drm-integration), alongside with guides on how to integrate and use them. When integrating DRM for the first time or updating your integration, the connectors are to be preferred over the pre-integrations.

**Web and Android SDKs** There currently is no ready-made connector for this DRM provider: you can choose to develop one based on the examples in the repository, or get in contact with us about making one.

**iOS SDKs** The Arris Titanium DRM connector can be found [here](https://github.com/THEOplayer/samples-drm-integration/blob/master/ios/ContentProtectionIntegration/integration/ArrisTitaniumDrmIntegration.swift).

## Resources[​](#resources "Direct link to Resources")

* <https://www.arris.com/products/titanium-cas/>
* [THEOplayer Github Samples DRM Integration repository](https://github.com/THEOplayer/samples-drm-integration)

## Related articles[​](#related-articles "Direct link to Related articles")

* [Axinom](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/axinom.md)
* [castLabs DRMToday](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/castlabs-drmtoday/introduction.md)
* [EZDRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/ezdrm.md)
* [Intertrust ExpressPlay](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/intertrust-expressplay.md)
* [Irdeto](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/irdeto.md)
* [Microsoft Azure](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/microsoft-azure.md)
* [Nagra Conax Contego](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/nagra-conax-contego.md)
