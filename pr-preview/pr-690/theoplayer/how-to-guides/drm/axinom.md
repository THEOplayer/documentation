# Axinom

This article describes how to configure Axinom DRM with THEOplayer.

Head to our page on [DRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/introduction.md) for more general information.

## SDKs[​](#sdks "Direct link to SDKs")

| Web SDK | Android SDK | iOS SDK | tvOS SDK   | Android TV SDK | Chromecast SDK |
| ------- | ----------- | ------- | ---------- | -------------- | -------------- |
| Yes     | Yes         | Yes     | Unverified | Yes            | Yes            |

## Code examples[​](#code-examples "Direct link to Code examples")

##### Web SDK[​](#web-sdk "Direct link to Web SDK")

```js
if (HLS) {
  let drmConfiguration = {
    integration: 'axinom',
    token: '<AXINOM_TOKEN>',
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
    integration: 'axinom',
    token: '<AXINOM_TOKEN>',
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
DRMConfiguration drmConfiguration = new AxinomDRMConfiguration.Builder("<AXINOM_TOKEN>")
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
let drmConfiguration = AxinomDRMConfiguration(
    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
    certificateURL: "<CERTIFICATE_URL>",
    token: "<AXINOM_TOKEN>"
)
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription

```

## Resources[​](#resources "Direct link to Resources")

* <https://www.axinom.com/products/drm>

## Related articles[​](#related-articles "Direct link to Related articles")

* [Comcast](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/comcast.md)
* [DoveRunner](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/doverunner.md)
* [BuyDRM KeyOS](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/buydrm-keyos/introduction.md)
* [Arris Titanium](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/arris-titanium.md)
* [Uplynk](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/uplynk.md)
* [Xstream](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/xstream.md)
* [Vualto VuDRM](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/drm/vualto-vudrm.md)
