# Introduction

THEOplayer supports FairPlay, PlayReady and Widevine by default. To connect to such a DRM system, developers can use a [ContentProtectionDescription](https://docs.theoplayer.com/api-reference/web/theoplayer.sourcedescription.md) (or DRMConfiguration, depending on the SDK).
However, more often than not, developers are working with a multi-DRM vendor. These vendors take care of their DRM needs. The last challenge for developers is to integrate the provided DRM solution in a video player.
THEOplayer is partnered with many multi-DRM vendors to lighten this burden. In our partnerships, we validate the compatibly and often provide integrations.

### Table of Contents

- [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Pre-integrations](#pre-integrations)
  - [Custom configuration](#custom-configuration) - [Web SDK](#web-sdk) - [Android SDK](#android-sdk) - [iOS SDK](#iostvos-sdk-and-legacy-iostvos-sdk--412x-) - [Roku SDK](#roku-sdk)
  - [Custom Integration](#custom-integration)

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

To configure DRM on the Web SDK, developers can put a [ContentProtectionDescription](https://docs.theoplayer.com/api-reference/web/theoplayer.sourcedescription.md#sources) inside of a [SourceDescription](https://docs.theoplayer.com/api-reference/web/theoplayer.sourcedescription.md).

```js
if (HLS) {
  let drmConfiguration = {
    fairplay: {
      licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
      certificateURL: "CERTIFICATE_URL>"
      // "certificate": "<CERTIFICATE_AS_STRING_OR_UInt8Array>",
      // "headers": {"<KEY>": "<VALUE>"},
      // "useCredentials": <true||false>
    }
  };
  player.source = {
    sources: {
      src: "<HLS_STREAM_URL>",
      type: "application/x-mpegurl",
      contentProtection: drmConfiguration
    }
  };
} else if (MPEG - DASH) {
  let drmConfiguration = {
    playready: {
      licenseAcquisitionURL: "<LICENSE_KEY_URL_PLAYREADY>"
      // "headers": {"<KEY>": "<VALUE>"},
      // "useCredentials": <true||false>
    },
    widevine: {
      licenseAcquisitionURL: "<LICENSE_KEY_URL_WIDEVINE>"
      // "headers": {"<KEY>": "<VALUE>"},
      // "useCredentials": <true||false>
    }
  };
  player.source = {
    sources: {
      src: "<DASH_STREAM_URL>",
      type: "application/dash+xml",
      contentProtection: drmConfiguration
    }
  };
}
```

##### Android SDK

To configure DRM on the Android SDK, developers can put a DRMConfiguration inside a SourceDescription.

```java
// Map<String, String> headers =  new HashMap<String, String>();
// headers.put("<KEY>", "<VALUE>");
DRMConfiguration drmConfiguration = new DRMConfiguration.Builder()
    .widevine(
        new KeySystemConfiguration.Builder(
            "<LICENSE_KEY_URL_WIDEVINE>"
            )// , headers, <USE_CREDENTIALS>, <QUERY_PARAMETERS>
            .build()
        )
        .build();
TypedSource typedSource = new TypedSource.Builder("<DASH_STREAM_URL>")
    .drm(drmConfiguration)
    .build();
SourceDescription sourceDescription = new SourceDescription.Builder(typedSource)
    .build();
theoplayer.getPlayer().setSource(sourceDescription);
```

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

To configure DRM on the iOS SDK, developers can put a FairPlayDRMConfiguration inside a SourceDescription.

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

##### Roku SDK

In order to play DRM protected resources, you will need to pass extra DRM parameters. To see what kind of DRM protection is supported by Roku devices, please visit [this page](https://developer.roku.com/en-gb/docs/specs/media/content-protection.md).

In the following example, there is a function called "setSource", which sets the source of a THEOplayer instance ("m.player.source").

It is worth mentioning that "m" works like the "this" keyword from other languages. An "m" keyword points to the current component local namespace. Therefore, in case you want to access a variable across different functions inside the same component, use "m" to do so.

```brightscript
function setSource(streamFormat)
  if streamFormat = "hls" then
    drmParams = {
      "integration": "Widevine",
      "licenseUrl": "<LICENSE_KEY_URL_WIDEVINE>"
    }
    m.player.source = {
      "poster": "pooster.png",
      "sources": [
        {
          "contentProtection": drmParams,
          "src": "<HLS_STREAM_URL>",
          "type": "application/x-mpegURL"
        }
      ]
	}
  end if
  if streamFormat = "dash" then
    drmParams = {
      "integration": "Widevine",
      "licenseUrl": "<LICENSE_KEY_URL_WIDEVINE>"
    }
    m.player.source = {
        "poster": "pooster.png",
        "sources": [
          {
            "contentProtection": drmParams,
            "src": "<DASH_STREAM_URL>",
            "type": "application/dash+xml"
          }
        ]
    }
  end if
end function
```

## Custom Integration

Developers can make their own custom DRM integration instead of using the pre-integrations offered by THEOplayer.
This can be done by making use of the [DRM integration API repository](https://github.com/THEOplayer/samples-drm-integration).

A complete guide on how to create a new integration, and some example integrations can be found in the provided repository.
