# Prebid.js

This article explains how you can connect THEOplayer with Prebid.js. Prebid.js is an open-source header bidding solution. On the client-side, you can request bids from multiple ad networks, take a winning bid and select its associated advertisement. You want to configure and play this selected advertisement in THEOplayer.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | :------: |
|   N/A   |     N/A     |   N/A   |   N/A    |      N/A       |      N/A       |   N/A    |

N/A was selected because Prebid.js is a separate library.

You can connect Prebid.js with THEOplayer on any platform that supports both Prebid.js and THEOplayer.

## Connecting Prebid.js and THEOplayer

Prebid.js allows you to request bids. This request will respond with bids through a callback function. In this callback function, you have to select a winning bid, extract the ad tag URL. You can configure this URL as THEOplayer's ad source.

### Code Examples

The code example below is based on the documentation offered by Prebid.org [here](https://docs.prebid.org/dev-docs/examples/instream-banner-mix.html).

##### Web SDK

The sample application at https://cdn.theoplayer.com/demos/prebidjs.html is an example of implementing Prebid.js on top of the THEOplayer Web SDK.

The example above schedules advertisements as pre-rolls (or mid-rolls or post-rolls). You can also dynamically schedule advertisements with the Ads API, as explained in [How to set up VAST and VMAP ads](03-how-to-set-up-vast-and-vmap.md).

##### Android (TV) SDK

Refer to https://docs.prebid.org/prebid-mobile/pbm-api/android/code-integration-android.html to integrate on Android SDK. The same THEOplayer API to configure advertisements is available on the Android SDK.

##### iOS/tvOS SDK

Refer to https://docs.prebid.org/prebid-mobile/pbm-api/ios/code-integration-ios.html to integrate on iOS/tvOS SDK. The same THEOplayer API to configure advertisements is available on the iOS SDK.

## Resources

The following resources provide more information:

- [What is Prebid?](https://prebid.org/product-suite/prebidjs/)
- [Prebid.js documentation](https://docs.prebid.org/)
- [Prebid.js on GitHub](https://github.com/prebid/Prebid.js)
