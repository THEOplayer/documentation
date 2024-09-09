# Comcast

This article describes how to configure Comcast DRM with THEOplayer. Head to our page on [DRM](../../how-to-guides/04-drm/00-introduction.md) for more general information.

## SDKs

| Web SDK |                 Android SDK                 |                   iOS SDK                   |                  tvOS SDK                   |               Android TV SDK                | Chromecast SDK |
| :-----: | :-----------------------------------------: | :-----------------------------------------: | :-----------------------------------------: | :-----------------------------------------: | :------------: |
|   Yes   | Unverified through CSS/JavaScript injection* | Unverified through CSS/JavaScript injection* | Unverified through CSS/JavaScript injection* | Unverified through CSS/JavaScript injection* |   Unverified   |

*CSS/JavaScript injection in the project is only possible with the legacy mobile SDKs (up to 4.12.X).

## Code examples

##### Web SDK

```js
if (HLS) {
  let drmConfiguration = {
    integration: "comcast",
    fairplay: {
      licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
      certificateURL: "CERTIFICATE_URL>",
      token: "<TOKEN>",
      releasePid: "<RELEASEPID>",
      accountId: "<ACCOUNT_ID>"
    }
  };
  player.source = {
    sources: {
      src: "<HLS_STREAM_URL>",
      type: "application/x-mpegurl",
      contentProtection: drmConfiguration
    }
  };
} else if (DASH) {
  let drmConfiguration = {
    playready: {
      licenseAcquisitionURL: "<LICENSE_KEY_URL_PLAYREADY>"
    },
    widevine: {
      licenseAcquisitionURL: "<LICENSE_KEY_URL_WIDEVINE>"
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

There currently is no integration available in the Android SDK for this DRM system.

Legacy SDK (4.12.X): The Web SDK code should be included in your Android (TV) project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../../version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this.

##### iOS/tvOS SDK

There currently is no integration available in the iOS SDK for this DRM system.

Legacy SDK (4.12.X): The Web SDK code should be included in your iOS (TV) project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../../version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this.

## Connectors
We are developing open-source DRM connectors that can more easily be maintained and to allow for a modular approach. You can find them in [this Github repo](https://github.com/THEOplayer/samples-drm-integration), alongside with guides on how to integrate and use them.
When integrating DRM for the first time or updating your integration, the connectors are to be preferred over the pre-integrations.

**Web** 
The Comcast DRM connector can be found in [this folder](https://github.com/THEOplayer/samples-drm-integration/tree/master/web/src/integration/comcastdrm). 
  
**Mobile SDKs**
Connectors are also the way forward for the current mobile SDKs. There currently is no ready-made connector for this DRM provider: you can choose to develop one based on the examples in the repository, or get in contact with us about making one.  

## Remarks

- Legacy Mobile SDKs (4.12.X): having this work through JavaScript injection has several limitations (e.g.: this will not work with Exoplayer on Android).

## Resources
- [https://docs.theplatform.com/help/ent-license-web-services-api-reference](https://docs.theplatform.com/help/ent-license-web-services-api-reference)
- [THEOplayer Github Samples DRM Integration repository](https://github.com/THEOplayer/samples-drm-integration)

## Related articles

- [Axinom](./02-axinom.md)
- [castLabs DRMToday](./02-castlabs-drmtoday/00-introduction.md)
- [EZDRM](./04-ezdrm.md)
- [Intertrust ExpressPlay](./05-intertrust-expressplay.md)
- [Irdeto](./06-irdeto.md)
- [Microsoft Azure](./07-microsoft-azure.md)
- [Nagra Conax Contego](./08-nagra-conax-contego.md)
