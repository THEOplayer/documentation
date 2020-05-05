# Streamroot

This guide explains how to set up THEOplayer in combination with Streamroot, the provider of peer-assisted and multi-CDN video delivery solutions. 

Boosting your video workflow with Streamroot DNA technology is easy as pie. In fact, it is so easy that you could, in most cases, be up and running in under 20 minutes.

### Table of Contents
- [SDKs](#sdks)
- [How to set up THEOplayer with Streamroot](#how-to-set-up-theoplayer-with-streamroot)
  - [Prerequisites](#prerequisites)
  - [Integrating Streamroot - Code examples](#integrating-streamroot---code-examples)
- [Conclusion](#conclusion)
- [Resources](#resources)


## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Unverified through CSS/Javascript injection     |   Unverified through CSS/Javascript injection   | No  |      Unverified through CSS/Javascript injection       |      N/A       |

## How to set up THEOplayer with Streamroot

### Prerequisites

There are three prerequisites in order to continue with this guide:

1. This guide expects that you have a THEOplayer license. If you are not using THEOplayer yet, you can start your free trial [here](https://portal.theoplayer.com/). Be sure to have THEOplayer version 2.17 or higher.

2. This guide expects that you are a Streamroot client and that you are integrated with their streaming infrastructure. Information on Streamroot can be found at [https://streamroot.io/](https://streamroot.io/) and [https://support.streamroot.io/hc/en-us/articles/360001758273-THEOplayer](https://support.streamroot.io/hc/en-us/articles/360001758273-THEOplayer).

3. This guide expects that you have access to the Streamroot client SDK.

### Integrating Streamroot - Code examples

#### Starting template

This will not be covered in this guide. You can read on this subject at the following pages: 

##### Web SDK

[Getting Started with the THEOplayer Web SDK](../../getting-started/01-sdks/01-web/00-getting-started.md)

##### Android SDK

[Getting started with the THEOplayer Android SDK](../../getting-started/01-sdks/02-android/00-getting-started.md)

##### iOS SDK

[Getting started with the THEOplayer iOS SDK](../../getting-started/01-sdks/03-ios/00-getting-started.md)

#### Add Streamroot

##### Web SDK

Starting from the basic template above, you need to add the Streamroot client SDK to the page.

```js
<script 
    src="//cdn.streamroot.io/theoplayer-dna-wrapper/1/stable/theoplayer-dna-wrapper.js">
</script>
```

##### Android SDK

You need to include the Streamroot client SDK. To do so in your Android project:

- download the JS library available at [https://cdn.streamroot.io/theoplayer-dna-wrapper/1/stable/theoplayer-dna-wrapper.js](https://cdn.streamroot.io/theoplayer-dna-wrapper/1/stable/theoplayer-dna-wrapper.js)

- follow these instructions and add it as a custom JS file in your project: [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

##### iOS SDK

You need to include the Streamroot client SDK. To do so in your iOS project:

- download the JS library available at [https://cdn.streamroot.io/theoplayer-dna-wrapper/1/stable/theoplayer-dna-wrapper.js](https://cdn.streamroot.io/theoplayer-dna-wrapper/1/stable/theoplayer-dna-wrapper.js)

- follow these instructions and add it as a custom JS file in your project: [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

#### Activate Streamroot on THEOplayer

##### Web SDK

In order for Streamroot DNA to be activated once a video is played, we will need to add the following lines to the THEOplayer code in a `<script>` tag inside the HTML `<body>` tag:

```js
var dnaConfig = {};
var wrapper = new TheoPlayerDnaWrapper(player, 'YOUR_STREAMROOT_KEY', dnaConfig);
```

*YOUR_STREAMROOT_KEY* is the unique Streamroot key that we have assigned to you; make sure it is identical to the one provided in the Account section of your dashboard (if you do not already have one, you can ask for a trial account here).

*dnaConfig* is an optional object that allows content-owners to set options to apply their specific integration policy and optimize Streamroot DNA performance to different use-cases. Head to the [dnaConfig documentation](https://support.streamroot.io/hc/en-us/articles/360007550234-dnaConfig-overview) to learn more.

##### Android SDK

The Web SDK code should be included in your Android (TV) project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this. 

##### iOS SDK

The Web SDK code should be included in your iOS project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this. 

#### Debugging

In order to verify that Streamroot was correctly configured, we suggest you install Streamroot's debugging tool, DNA Graphs, by following [these instructions](https://support.streamroot.io/hc/en-us/articles/115003166794-Debug-tools-for-web).

## Conclusion

THEOplayer partnered with Streamroot to fully pre-integrate their solution. 

In summary, to integrate Streamroot in THEOplayer, you have to include their SDK and some custom code. 

## Resources

- [Getting Started with the THEOplayer Web SDK](../../getting-started/01-sdks/01-web/00-getting-started.md): how-to guide 

- [Getting started with the THEOplayer Android SDK](../../getting-started/01-sdks/02-android/00-getting-started.md)

- [Getting started with the THEOplayer iOS SDK](../../getting-started/01-sdks/03-ios/00-getting-started.md)

- [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md): how-to guide 

- [https://streamroot.io/](https://streamroot.io/): Streamroot

- [https://support.streamroot.io/hc/en-us/articles/360001758273-THEOplayer](https://support.streamroot.io/hc/en-us/articles/360001758273-THEOplayer): Streamroot THEOplayer documentation

- [https://support.streamroot.io/hc/en-us/articles/360007550234-dnaConfig-overview](https://support.streamroot.io/hc/en-us/articles/360007550234-dnaConfig-overview): Streamroot documentation - dnaconfig

- [https://support.streamroot.io/hc/en-us/articles/115003166794-Debug-tools-for-web](https://support.streamroot.io/hc/en-us/articles/115003166794-Debug-tools-for-web): Streamroot documentation - DNA Graphs