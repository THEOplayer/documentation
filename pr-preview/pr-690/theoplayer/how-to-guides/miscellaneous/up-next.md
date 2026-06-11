# Up Next

This article describes how to implement common use cases related to the Up Next feature - for example how to use the API.

The Up Next feature adds a component to the UI which enables the viewers to navigate to the upcoming asset, but also automatically loads this asset. This can be useful if you want to increase the engagement and consumption of your users.

The Up Next feature exposes the Up Next API. This API allows developers to configure the upcoming asset and its loading settings.

![Up Next](/documentation/pr-preview/pr-690/assets/images/up-next-b95f9436365130312d8f0070857eceaa.png "Up Next")

## SDKs[​](#sdks "Direct link to SDKs")

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| ------- | ----------- | ------- | -------- | -------------- | -------------- |
| Yes     | No          | No      | No       | No             | N/A            |

## How to use the Up Next API[​](#how-to-use-the-up-next-api "Direct link to How to use the Up Next API")

The Up Next API is a UI feature and automatically loads upcoming content. Since it loads new web pages (and not just changes the video source), it is not relevant for other environments than web.

## Code Examples[​](#code-examples "Direct link to Code Examples")

This example explains how you do a basic implementation of the Up Next API.

#### Web SDK[​](#web-sdk "Direct link to Web SDK")

The Up Next API is currently only available on the Web SDK.

* Reference API: [Up Next API](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/classes/Player.html#upnext)
* Online demo: [Up Next Demo](https://www.theoplayer.com/theoplayer-demo-up-next)

The snippet below demonstrates how you could configure the Up Next API.

```js
player.upnext.source = {
  image: '//cdn.theoplayer.com/video/vr/poster.jpg',
  title: '360/VR in THEOplayer',
  duration: '2:14',
  link: '//demo.theoplayer.com/vr-and-360',
};
player.upnext.bar.offset = 106;

```

#### Android SDK[​](#android-sdk "Direct link to Android SDK")

This API is currently not available on the Android (TV) SDK.

#### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)[​](#iostvos-sdk-and-legacy-iostvos-sdk-412x "Direct link to iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)")

This API is currently not available on the iOS (/tvOS) SDK.

## Sample Application[​](#sample-application "Direct link to Sample Application")

The demo below illustrates the Up Next API in production.

* Demo: <https://www.theoplayer.com/theoplayer-demo-up-next>

## Remarks[​](#remarks "Direct link to Remarks")

The Up Next API is currently unavailable on all SDKs except the Web SDK, because the underlying THEOplayer CSS and JavaScript modules aren't activated. This means that you also can't enable it using the guide located at [How to add CSS or JavaScript files to an Android/iOS project](/documentation/pr-preview/pr-690/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios/).

## Resources[​](#resources "Direct link to Resources")

The following resources provide more information:

* [Up Next API](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/classes/Player.html#upnext)
