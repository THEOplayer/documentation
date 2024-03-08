# Prebid.js

This article explains how you can connect THEOplayer with Prebid.js.
Prebid.js is an open-source header bidding solution.
On the client-side, you can request bids from multiple ad networks, take a winning bid and select its associated advertisement.
You want to configure and play this selected advertisement in THEOplayer.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | :------: |
|   N/A   |     N/A     |   N/A   |   N/A    |      N/A       |      N/A       |   N/A    |

N/A was selected because Prebid.js is a separate library.
You can connect Prebid.js with THEOplayer on any platform that supports both Prebid.js and THEOplayer.

## Connecting Prebid.js and THEOplayer

Prebid.js allows you to request bids.
This request will respond with bids through a callback function.
In this callback function, you have to select a winning bid, extract the ad tag URL.
You can configure this URL as THEOplayer's ad source.

### Code Examples

The code example below is based on the documentation offered by Prebid.org at http://prebid.org/dev-docs/examples/instream-banner-mix.html.

##### Web SDK

The sample application at https://jsfiddle.net/thijsl/hjcegyuw/ is an example of implementing Prebid.js on top of the THEOplayer Web SDK.

The example above schedules advertisements as pre-rolls (or mid-rolls or post-rolls).
You can also dynamically schedule advertisements with the Ads API, as explained in "[How to set up VAST and VMAP](03-how-to-set-up-vast-and-vmap.md)".

##### Android SDK

Refer to http://prebid.org/prebid-mobile/pbm-api/android/code-integration-android.html.
The same THEOplayer API to configure advertisements is available on the Android SDK.

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

Refer to http://prebid.org/prebid-mobile/pbm-api/ios/code-integration-ios.html.
The same THEOplayer API to configure advertisements is available on the iOS SDK.

## Resources

The following resources provide more information:

- https://prebid.org/overview/intro.html: What is Prebid?
- https://prebid.org/prebid-video/video-overview.html: Prebid.js for Video Overview
- https://prebid.org/prebid-video/video-getting-started.html: Getting started with Prebid.js for Video
- https://github.com/prebid/Prebid.js/tree/57c666626c269cdabb9aac6944a889f2b944f0c0/modules: Adapters on Github.
- https://github.com/prebid/Prebid.js/tree/master/modules: Information on how to connect with different bidders.
- Some adapters might provide test data. (e.g. https://github.com/prebid/Prebid.js/blob/57c666626c269cdabb9aac6944a889f2b944f0c0/modules/spotxBidAdapter.md)
