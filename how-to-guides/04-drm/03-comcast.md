# Comcast

This article describes how to configure Comcast DRM with THEOplayer. Head to our page on [DRM](../../how-to-guides/04-drm/00-introduction.md) for more general information.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Unverified through CSS/Javascript injection     |   Unverified through CSS/Javascript injection   | Unverified through CSS/Javascript injection  |      Unverified through CSS/Javascript injection      |      Unverified       |

## Code examples

##### Web SDK

```js
if (HLS) {
    let drmConfiguration = {
        "integration": "comcast",
        "fairplay": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_FAIRPLAY>",
            "certificateURL": "CERTIFICATE_URL>",
            "token": "<TOKEN>",
            "releasePid": "<RELEASEPID>",
            "accountId": "<ACCOUNT_ID>"
        }
    };
    player.source = {
        "sources": {
            "src": "<HLS_STREAM_URL>",
            "type": "application/x-mpegurl",
            "contentProtection": drmConfiguration
        }
    }
} else if (DASH) {
    let drmConfiguration = {
        "playready": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_PLAYREADY>"
        },
        "widevine": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_WIDEVINE>"
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

There currently is no integration available in the Android SDK for this DRM system.

The Web SDK code should be included in your Android (TV) project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this. 

##### iOS SDK

There currently is no integration available in the iOS SDK for this DRM system.

The Web SDK code should be included in your iOS (TV) project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this. 

## Remarks

- Mobile SDKs: having this work through Javascript injection has several limitations (e.g.: this will not work with Exoplayer on Android). For this reason, we invite you to consider whether to use other DRM systems with your mobile SDKs, despite the fact that, as indicated in this guide, it should work.

## Resources

- [https://docs.theplatform.com/help/ent-license-web-services-api-reference](https://docs.theplatform.com/help/ent-license-web-services-api-reference)
