# IRIS.TV

[Iris.TV](http://www.iris.tv/) is a recommendation engine. When hooking THEOplayer to the IrisTV SDK, a UI will be overlayed over the default player UI which can be used to navigate through recommendations.

This guide describes how to do a [custom IrisTV integration](https://iristv.atlassian.net/wiki/spaces/API/pages/38567965/Custom+Adaptive+Plug-in+Integrations) in THEOplayer.

### Table of Contents
- [SDKs](#sdks)
- [How to integrate the player with Iris.TV](#how-to-integrate-the-player-with-iristv)
  - [Prerequisites](#prerequisites)
  - [Set-up a working THEOplayer](#set-up-a-working-theoplayer)
  - [Include the IrisTV SDK](#include-the-iristv-sdk)
  - [Include the custom integration](#include-the-custom-integration)
  - [Initialize THEOplayerIrisTv](#initialize-theoplayeriristv)
- [Conclusion](#conclusion)
- [Sample application](#sample-application)
- [Resources](#resources)


## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Unverified through CSS/Javascript injection     |   Unverified through CSS/Javascript injection   | No  |      Unverified through CSS/Javascript injection       |      N/A       |


## How to integrate the player with Iris.TV

### Prerequisites

There are two prerequisites in order to continue with this guide:

1. You have a THEOplayer 2.X license and library. If you don't have THEOplayer 2.X yet, you can start your free trial [here](https://portal.theoplayer.com/) or contact your THEOplayer account manager.

2. You have some basic knowledge on how to use THEOplayer 2.X. You can read on this subject at the following pages: 

##### Web SDK

[Getting Started with the THEOplayer Web SDK](../../getting-started/01-sdks/01-web/00-getting-started.md)

##### Android SDK

[Getting started with the THEOplayer Android SDK](../../getting-started/01-sdks/02-android/00-getting-started.md)

##### iOS SDK

[Getting started with the THEOplayer iOS SDK](../../getting-started/01-sdks/03-ios/00-getting-started.md)


### Set-up a working THEOplayer

This will not be covered in this guide. You can read on this subject at the getting started pages linked, per SDK, in the prerequisites section.

### Include the IrisTV SDK

##### Web SDK

You need to include the Javascript (JS) script tag referencing the IrisTV SDK. You could do this right before where you include the THEOplayer.js library.

```html
<script type='text/javascript'
    src='https://ovp.iris.tv/libs/adaptive/iris.adaptive.js'>
</script> 
```

##### Android SDK

You need to include the IrisTV Javascript library. To do so in your Android project:

- download the JS library available at [https://ovp.iris.tv/libs/adaptive/iris.adaptive.js](https://ovp.iris.tv/libs/adaptive/iris.adaptive.js)

- follow these instructions and add it as a custom JS file in your project: [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

##### iOS SDK

You need to include the IrisTV JS library. To do so in your iOS project:

- download the JS library available at [https://ovp.iris.tv/libs/adaptive/iris.adaptive.js](https://ovp.iris.tv/libs/adaptive/iris.adaptive.js)

- follow these instructions and add it as a custom JS file in your project: [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

### Include the custom integration

##### Web SDK

You need to include the JS script tag referencing the file containing the custom integration code. You could do this right after where you include the THEOplayer.js library.

```html
<script type='text/javascript'
    src='https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js'>
</script> 
```

You can also add extra styling on top of the IrisTV UI:

```html
<link rel='stylesheet' type='text/css'
    href='https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css'>
</link> 
```

##### Android SDK

You need to include the custom integration code. To do so in your Android project:

- download the JS library available at [https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js](https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js)

- follow these instructions to add custom JS files in your project: [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

- you can also add extra styling on top of the IrisTV UI downloading the following file (and integrating it too as explained in the guide): [https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css](https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css)

##### iOS SDK

You need to include the custom integration code. To do so in your iOS project:

- download the JS library available at [https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js](https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js)

- follow these instructions to add custom JS files in your project: [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

- you can also add extra styling on top of the IrisTV UI downloading the following file (and integrating it too as explained in the guide): [https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css](https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css)

### Initialize THEOplayerIrisTv

##### Web SDK

To start displaying the IrisTV UI, you have to call THEOplayerIrisTv() (from THEOplayer.iristv.js), and pass along the THEOplayer instance and your IrisTV configuration. For example:

```js
<script>
    ...
    var irisOptions = {
        client_token: "51afa098ah",
        platform_id: "5798d994ef995e0d18000176"
    };
    THEOplayerIrisTv(player, irisOptions); 
</script>
```

##### Android SDK

The Web SDK code should be included in your Android (TV) project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JS files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this. 

##### iOS SDK

The Web SDK code should be included in your iOS project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JS files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this. 

## Conclusion

In summary, to integrate IrisTV in THEOplayer, you have to include their SDK and some custom code. 

## Sample application

A live demo can be viewed at [https://cdn.theoplayer.com/demos/iristv/iristv.html](https://cdn.theoplayer.com/demos/iristv/iristv.html).

## Resources

- 
[Getting Started with the THEOplayer Web SDK](../../getting-started/01-sdks/01-web/00-getting-started.md)

- 
[Getting started with the THEOplayer Android SDK](../../getting-started/01-sdks/02-android/00-getting-started.md)

- 
[Getting started with the THEOplayer iOS SDK](../../getting-started/01-sdks/03-ios/00-getting-started.md)

- [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

- [https://iristv.atlassian.net/wiki/spaces/API/pages/263258113/THEO+Adaptive+Plugin](https://iristv.atlassian.net/wiki/spaces/API/pages/263258113/THEO+Adaptive+Plugin):   [Iris.tv](http://Iris.tv) documentation - THEO adaptive plugin

- [https://iristv.atlassian.net/wiki/spaces/API/pages/38567965/Custom+Adaptive+Plugin](https://iristv.atlassian.net/wiki/spaces/API/pages/38567965/Custom+Adaptive+Plugin) : Iris.tv documentation - Custom adaptive plugin

- [http://www.iris.tv/](http://www.iris.tv/): Iris.tv