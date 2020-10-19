# Introduction

THEOplayer supports Fairplay, PlayReady and Widevine by default. To connect to such a DRM system, developers can use a [ContentProtectionDescription](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.sourcedescription.md) (or DRMConfiguration, depending on the SDK).
However, more often than not, developers are working with a multi-DRM vendor. These vendors take care of their DRM needs. The last challenge for developers is to integrate the provided DRM solution in a video player.
THEOplayer is partnered with many multi-DRM vendors to lighten this burden. In our partnerships, we validate the compatibly and often provide integrations.

### Table of Contents
- [Pre-integrations](#pre-integrations)
- [Custom configuration](#custom-configuration)
- [Custom integration](#custom-integration)


## Pre-integrations

THEOplayer is pre-integrated with a number of commercial multi-DRM vendors.

- [Arris Titanium](../../how-to-guides/04-drm/01-arris-titanium.md)
- [Axinom](../../how-to-guides/04-drm/02-axinom.md)
- [BuyDRM KeyOS](../../how-to-guides/04-drm/01-buydrm-keyos/00-introduction.md)
- [castLabs DRMToday](../../how-to-guides/04-drm/02-castlabs-drmtoday/00-introduction.md)
- [Comcast](../../how-to-guides/04-drm/03-comcast.md)
- [EZDRM](../../how-to-guides/04-drm/04-ezdrm.md)
- [Intertrust ExpressPlay](../../how-to-guides/04-drm/05-intertrust-expressplay.md)
- [Irdeto](../../how-to-guides/04-drm/06-irdeto.md)
- [Microsoft Azure](../../how-to-guides/04-drm/07-microsoft-azure.md)
- [Nagra Conax Contego](../../how-to-guides/04-drm/08-nagra-conax-contego.md)
- [Verimatrix MultiRights](../../how-to-guides/04-drm/09-verimatrix-multirights.md)
- [Vimond](../../how-to-guides/04-drm/10-vimond.md)
- [Vualto VuDRM](../../how-to-guides/04-drm/11-vualto-vudrm.md)
- [Verizon Uplynk](../../how-to-guides/04-drm/12-verizon-uplynk.md)
- [Xstream](../../how-to-guides/04-drm/13-xstream.md)
- [How to play a Clear Key protected stream in THEOplayer?](../../how-to-guides/04-drm/14-how-to-play-clear-key-protected-stream.md)
- [How to do offline DRM](../../how-to-guides/04-drm/03-how-to-do-offline-drm/00-introduction.md)

## Custom configuration

Developers can use the generic DRM-functionalities in case in-house DRM-solutions are used, or services from DRM-vendors are used which haven't been pre-integrated by THEOplayer.

##### Web SDK

To configure DRM on the Web SDK, developers can put a [ContentProtectionDescription](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.sourcedescription.sources.md) inside of a [SourceDescription](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.sourcedescription.md).

```js
if (HLS) {
    let drmConfiguration = {
        "fairplay": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_FAIRPLAY>",
            "certificateURL": "CERTIFICATE_URL>"
            // "certificate": "<CERTIFICATE_AS_STRING_OR_UInt8Array>",
            // "headers": {"<KEY>": "<VALUE>"},
            // "useCredentials": <true||false>
        }
    };
    player.source = {
        "sources": {
            "src": "<HLS_STREAM_URL>",
            "type": "application/x-mpegurl",
            "contentProtection": drmConfiguration
        }
    }
} else if (MPEG-DASH) {
    let drmConfiguration = {
        "playready": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_PLAYREADY>"
            // "headers": {"<KEY>": "<VALUE>"},
            // "useCredentials": <true||false>
        },
        "widevine": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_WIDEVINE>"
            // "headers": {"<KEY>": "<VALUE>"},
            // "useCredentials": <true||false>
        }
    };
    player.source = {
        "sources": {
            "src": "<DASH_STREAM_URL>",
            "type": "application/dash+xml",
            "contentProtection": drmConfiguration
        }
    }
}
```

##### Android SDK

To configure DRM on the Android SDK, developers can put a DRMConfiguration inside of a SourceDescription.

```java
// Map<String, String> headers =  new HashMap<String, String>();
// headers.put("<KEY>", "<VALUE>");
DRMConfiguration drmConfiguration = new DRMConfiguration.Builder()
    .widevine(
        new KeySystemConfiguration(
            "<LICENSE_KEY_URL_WIDEVINE>"
            // , headers, <USE_CREDENTIALS>, <QUERY_PARAMETERS>
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

##### iOS SDK

To configure DRM on the iOS SDK, developers can put a FairPlayDRMConfiguration inside of a SourceDescription.

```swift
// let headers = [["<KEY>": "<VALUE>"]]
let drmConfiguration = FairPlayDRMConfiguration(
    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
    certificateURL: "<CERTIFICATE_URL>"
        // , headers: headers, licenseType: <LICENSE_TYPE>
)
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription
```

## Custom Integration

Developers can make their own custom DRM integration instead of using the pre-integrations offered by THEOplayer. 
This can be done by making use of the [DRM integration API repository](https://github.com/THEOplayer/samples-drm-integration).

A complete guide on how to create a new integration, and some example integrations can be found in the provided repository.