# Microsoft Azure

This article describes how to configure Microsoft Azure DRM with THEOplayer.

Head to our page on [DRM](../../how-to-guides/04-drm/00-introduction.md) for more general information or head to [Azure Media Services 3rd Party Player Samples - THEOplayer](https://github.com/Azure-Samples/media-services-3rdparty-player-samples/tree/master/docs/THEOplayer) for an implementation reference sample.

## SDKs

| Web SDK | Android SDK | iOS SDK |  tvOS SDK  | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Unverified |      Yes       |      Yes       |

## Code examples

##### Web SDK

```js
if (HLS) {
  let drmConfiguration = {
    integration: 'azure',
    token: 'AZURE_TOKEN>',
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
    integration: 'azure',
    token: '<AZURE_TOKEN>',
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
DRMConfiguration drmConfiguration = new AzureDRMConfiguration.Builder("<CERTIFICATE_URL", "<TOKEN>")
    .widevine(
        new KeySystemConfiguration("<LICENSE_KEY_URL_WIDEVINE>")
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
let drmConfiguration = AzureDRMConfiguration(
    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
    certificateURL: "<CERTIFICATE_URL>",
    token: "<AZURE_TOKEN>"
    // , headers: headers
)
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription
```

## Resources

- [https://azure.microsoft.com/nl-nl/services/media-services/content-protection/](https://azure.microsoft.com/nl-nl/services/media-services/content-protection/)
- [https://azure.microsoft.com/en-us/blog/azure-media-services-announces-new-collaboration-with-theoplayer/](https://azure.microsoft.com/en-us/blog/azure-media-services-announces-new-collaboration-with-theoplayer/)

## Related articles

- [Comcast](03-comcast.md)
- [PallyCon](15-pallycon.md)
- [BuyDRM KeyOS](01-buydrm-keyos/00-introduction.md)
- [Arris Titanium](01-arris-titanium.md)
- [Uplynk](12-uplynk.md)
- [Xstream](13-xstream.md)
- [Vualto VuDRM](11-vualto-vudrm.md)
- [Azure Media Services - THEOplayer Implementation Sample](https://github.com/Azure-Samples/media-services-3rdparty-player-samples/tree/master/docs/THEOplayer)
