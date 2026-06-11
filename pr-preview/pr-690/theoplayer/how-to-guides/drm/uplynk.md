# Uplynk

**Important:** Uplynk customers should configure DRM through the [THEOplayer Uplynk integration](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/web/uplynk/preplay.md). More specifically, to configure DRM, developers should use the [`contentProtected`](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/web/uplynk/preplay.md) flag. (The Uplynk integration provides a pre-integration with Uplynk's Preplay, Ping and Asset Info services, exposes additional APIs, and enhances your UI and UX.)

This article describes how to configure Uplynk DRM with THEOplayer **if** you are not interested in using the aforementioned Uplynk integration.

Head to our page on [DRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/introduction.md) for more general information.

## SDKs[​](#sdks "Direct link to SDKs")

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| ------- | ----------- | ------- | -------- | -------------- | -------------- |
| Yes     | Yes         | Yes     | Yes      | Yes            | Yes            |

## Code examples[​](#code-examples "Direct link to Code examples")

##### Web SDK[​](#web-sdk "Direct link to Web SDK")

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

## Resources[​](#resources "Direct link to Resources")

* [Content Protection (Uplynk)](https://docs.uplynk.com/docs/content-protection)

## Related articles[​](#related-articles "Direct link to Related articles")

* [Axinom](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/axinom.md)
* [castLabs DRMToday](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/castlabs-drmtoday/introduction.md)
* [EZDRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/ezdrm.md)
* [Intertrust ExpressPlay](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/intertrust-expressplay.md)
* [Irdeto](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/irdeto.md)
* [Microsoft Azure](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/microsoft-azure.md)
* [Nagra Conax Contego](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/nagra-conax-contego.md)
