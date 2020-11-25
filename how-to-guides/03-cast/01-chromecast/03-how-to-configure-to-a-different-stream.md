# How to configure a different stream to Chromecast

Some streaming set-up require you to cast a different stream to a Chromecast Receiver device than the one playing on a Chromecast Receiver device.

Example

On an iOS application, a FairPlay-protected HLS stream is playing on a sender device, but a matching Widevine-protected MPEG-DASH stream is required to play on the receiver device, because a Chromecast receiver has no support for Fairplay.

THEOplayer's Cast API allows you to configure a different SourceDescription for your Chromecast session.

### Table of Contents
- [SDKs](#sdks)
- [Code examples](#code-examples)
  
## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |  N/A |      N/A       |      N/A       |

## Code examples

The below code examples demonstrate how you can configure a different SourceDescription for a Chromecast Session.

##### Web SDK

The [Chromecast API](https://docs.theoplayer.com/api-reference/web/theoplayer.chromecast.md) allows you to configure a different SourceDescription to be Chromecasted.

```js
player.cast.chromecast.source = sourceDescription;
```

##### Android SDK

The [Chromecast API](https://cdn.theoplayer.com/doc/android/2.55.1/com/theoplayer/android/api/cast/chromecast/Chromecast.html#setSource-com.theoplayer.android.api.source.SourceDescription-) allows you to configure a different SourceDescription to be Chromecasted.

```java
tpv.getCast().getChromecast().setSource(sourceDescription);
```

##### iOS SDK

The [Chromecast API](https://cdn.theoplayer.com/doc/ios/2.55.1/Protocols/Chromecast.html#/s:13THEOplayerSDK10ChromecastP6sourceAA17SourceDescriptionCSgvp) allows you to configure a different SourceDescription to be Chromecasted.

```swift
self.theoplayer.cast?.chromecast!.source = SourceDescription(
    source: TypedSource(
        src: stream,
        type: "application/dash+xml",
        drm: WidevineDRMConfiguration(licenseAcquisitionURL: laurl)
    )
)
```