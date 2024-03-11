# IRIS.TV

[Iris.TV](https://www.iris.tv/) is a recommendation engine. When hooking THEOplayer to the IrisTV SDK, a UI will be overlaid over the default player UI which can be used to navigate through recommendations.

This guide describes how to do a [custom IrisTV integration](https://iristv.atlassian.net/wiki/spaces/API/pages/38567965/Custom+Adaptive+Plug-in+Integrations) in THEOplayer.

## SDKs

| Web SDK |                 Android SDK                 |                   iOS SDK                   | tvOS SDK |               Android TV SDK                | Chromecast SDK |
| :-----: | :-----------------------------------------: | :-----------------------------------------: | :------: | :-----------------------------------------: | :------------: |
|   Yes   | Unverified through CSS/JavaScript injection* | Unverified through CSS/JavaScript* injection |    No    | Unverified through CSS/JavaScript injection* |      N/A       |

*CSS/JavaScript injection in the project is only possible with the legacy mobile SDKs (up to 4.12.X).

## How to integrate the player with Iris.TV

### Prerequisites

There are two prerequisites in order to continue with this guide:

1. You have a THEOplayer license and library. If you don't have THEOplayer yet, you can start your free trial [here](https://portal.theoplayer.com/) or contact your THEOplayer account manager.

2. You have some basic knowledge on how to use THEOplayer and have set up a working implementation with THEOplayer in it. You can read on this subject at the following pages:

##### Web SDK

[Getting Started on Web](../../getting-started/01-sdks/01-web/00-getting-started.mdx)

##### Android Legacy (4.12.x) SDK

[Getting started on Android Legacy (4.12.x)](../../../theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/00-getting-started.md)

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

[Getting started on iOS](../../../theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/00-getting-started.md)

### Include the IrisTV SDK

You need to include the IrisTV JavaScript library in your project:

##### Web SDK

Include the script tag right before where you include the THEOplayer.js library:

```html
<script
  type="text/javascript"
  src="https://ovp.iris.tv/libs/adaptive/iris.adaptive.js"
></script>
```

##### Legacy Android SDK (4.12.X)

1. Download the JavaScript library available at [https://ovp.iris.tv/libs/adaptive/iris.adaptive.js](https://ovp.iris.tv/libs/adaptive/iris.adaptive.js)

2. Follow these instructions and add it as a custom JS file in your project: [How to add CSS or JavaScript files to an Android/iOS project](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

##### Legacy iOS/tvOS SDK (4.12.x)

1. Download the JavaScript library available at [https://ovp.iris.tv/libs/adaptive/iris.adaptive.js](https://ovp.iris.tv/libs/adaptive/iris.adaptive.js)

2. Follow these instructions and add it as a custom JavaScript file in your project: [How to add CSS or JavaScript files to an Android/iOS project](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

### Include the custom integration

You need to include the JavaScript script tag referencing the file containing the custom integration code.

##### Web SDK

Include the script tag this right after where you include the THEOplayer.js library.

```html
<script
  type="text/javascript"
  src="https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js"
></script>
```

You can also add extra styling on top of the IrisTV UI:

```html
<link rel='stylesheet' type='text/css'
    href='https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css' />
```

##### Legacy Android SDK (4.12.X)

1. Download the JavaScript library available at [https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js](https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js)

2. Follow these instructions to add custom JavaScript files in your project: [How to add CSS or JavaScript files to an Android/iOS project](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

3. You can also add extra styling on top of the IrisTV UI downloading the following file (and integrating it too as explained in the guide linked at step 2): [https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css](https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css)

##### Legacy iOS/tvOS SDK (4.12.x)

1. Download the JavaScript library available at [https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js](https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.js)

2. Follow these instructions to add custom JavaScript files in your project: [How to add CSS or JavaScript files to an Android/iOS project](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

3. You can also add extra styling on top of the IrisTV UI downloading the following file (and integrating it too as explained in the guide linked at step 2): [https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css](https://cdn.theoplayer.com/demos/iristv/THEOplayer.iristv.css)

### Initialize THEOplayerIrisTv

##### Web SDK

To start displaying the IrisTV UI, you have to call THEOplayerIrisTv() (from THEOplayer.iristv.js), and pass along the THEOplayer instance and your IrisTV configuration. For example:

```html
<script>
  ...
  var irisOptions = {
      client_token: "51afa098ah",
      platform_id: "5798d994ef995e0d18000176"
  };
  THEOplayerIrisTv(player, irisOptions);
</script>
```

##### Legacy Android SDK (4.12.X)

The Web SDK code should be included in your Android (TV) project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JS files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this.

##### Legacy iOS/tvOS SDK (4.12.x)

The Web SDK code should be included in your iOS project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this.

## Conclusion

In summary, to integrate IrisTV in THEOplayer, is as simple as including their SDK and some custom code in your project.

## Sample application

A live demo can be viewed at [https://cdn.theoplayer.com/demos/iristv/iristv.html](https://cdn.theoplayer.com/demos/iristv/iristv.html).

## Resources

- [Getting Started on Web](../../getting-started/01-sdks/01-web/00-getting-started.mdx)

- [Getting started on Android Legacy (4.12.x)](../../../theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/00-getting-started.md)

- [Getting started on iOS](../../../theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/00-getting-started.md)

- [How to add CSS or JavaScript files to an Android/iOS project](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

- [https://iristv.atlassian.net/wiki/spaces/API/pages/263258113/THEO+Adaptive+Plugin](https://iristv.atlassian.net/wiki/spaces/API/pages/263258113/THEO+Adaptive+Plugin): [Iris.tv](http://Iris.tv) documentation - THEO adaptive plugin

- [https://iristv.atlassian.net/wiki/spaces/API/pages/38567965/Custom+Adaptive+Plugin](https://iristv.atlassian.net/wiki/spaces/API/pages/38567965/Custom+Adaptive+Plugin) : Iris.tv documentation - Custom adaptive plugin

- [http://www.iris.tv/](http://www.iris.tv/): Iris.tv
