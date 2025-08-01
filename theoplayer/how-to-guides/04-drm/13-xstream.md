# Xstream

This article describes how to configure Xstream DRM with THEOplayer.

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
    integration: 'xstream',
    streamId: '<STREAM_ID>',
    ticketAcquisitionURL: '<TICKET_ACQUISITION_URL>',
    /*"fairplay": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_FAIRPLAY>",
            "certificateURL": "CERTIFICATE_URL>"
        }*/
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
    integration: 'xstream',
    streamId: '<STREAM_ID>',
    ticketAcquisitionURL: '<TICKET_ACQUISITION_URL>',
    /*"playready": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_PLAYREADY>"
        },
        "widevine": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_WIDEVINE>"
        }*/
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
DRMConfiguration drmConfiguration = new XstreamConfiguration.Builder("<STREAM_ID>", "<TICKET_ACQUISITION_URL>")
    .widevine(
        KeySystemConfiguration.Builder.keySystemConfiguration("LA_URL").build()
    )
    .build()
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
let drmConfiguration = XstreamDRMConfiguration(
    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
    certificateURL: "<CERTIFICATE_URL>",
    streamId: "<STREAM_ID>",
    ticketAcquisitionURL: "<TICKET_ACQUISITION_URL>"
)
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription
```

## Related articles

- [Comcast](03-comcast.md)
- [DoveRunner](15-doverunner.md)
- [BuyDRM KeyOS](01-buydrm-keyos/00-introduction.md)
- [Arris Titanium](01-arris-titanium.md)
- [Uplynk](12-uplynk.md)
- [Xstream](13-xstream.md)
- [Vualto VuDRM](11-vualto-vudrm.md)
