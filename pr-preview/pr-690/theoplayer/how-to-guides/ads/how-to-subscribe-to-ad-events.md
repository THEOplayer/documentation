# How to subscribe to ad events

When building a custom UI, or when logging events to an analytics service, app developers often need to be able to listen (and react) to ad events. For example, if an ad break starts, they want to draw a countdown on top of their UI. Alternatively, when an ad error occurs, they want to log this to an analytics server.

This article explains how you can programmatically subscribe to ad-related events across different SDKs.

## SDKs[​](#sdks "Direct link to SDKs")

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| ------- | ----------- | ------- | -------- | -------------- | -------------- |
| Yes     | Yes         | Yes     | Yes      | Yes            | No             |

## Subscribing to an event[​](#subscribing-to-an-event "Direct link to Subscribing to an event")

This subsection explains how you detect ad-related events. The other subsections zoom in on particular use-cases, such as detecting the beginning and end of an ad.

### Client-side ads[​](#client-side-ads "Direct link to Client-side ads")

If you are scheduling [client-side advertisements](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/how-to-set-up-vast-and-vmap.md), then you use the `Ads` interface to detect ad events throughout the Web, Android and iOS SDK.

#### Web SDK[​](#web-sdk "Direct link to Web SDK")

The `Player` API exposes an [`ads`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/classes/ChromelessPlayer.html#ads) property which belongs to the [`Ads`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/Ads.html) interface. Because this [`Ads`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/Ads.html) interface inherits from [`EventDispatcher<AdsEventMap>`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/AdsEventMap.html), you can leverage event listeners in this interface.

The ad-related events are documented in [`AdsEventMap`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/AdsEventMap.html).

To subscribe to an event, you select an event from this page, use the `Ads` interface, call the `addEventListener` method, and set the event as the first parameter, and the callback as the second parameter.

For example, if you want to track the start of an ad break, you could use the following snippet:

```javascript
player.ads.addEventListener('adbreakbegin', function (event) {
  console.log(event);
});

```

The following snippet should log most events to the console.

```javascript
player.ads.addEventListener(
  [
    'adbegin',
    'adbreakbegin',
    'adbreakchange',
    'adbreakend',
    'adbuffering',
    'addad',
    'addadbreak',
    'adend',
    'aderror',
    'adfirstquartile',
    'adimpression',
    'adloaded',
    'admetadata',
    'admidpoint',
    'adskip',
    'adthirdquartile',
    'removeadbreak',
    'updatead',
    'updateadbreak',
  ],
  console.log
);

```

Note that when dealing with client-side advertisements, you have different types of integrations, as explained at [How to setup VAST and VMAP](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/how-to-set-up-vast-and-vmap.md). The impact of this is that some events are not available throughout all integrations.

For example, if you schedule `https://cdn.theoplayer.com/demos/preroll.xml`, which is a single linear VAST ad, through the "Google IMA integration" [on our advertisement tester](https://www.theoplayer.com/theoplayer-demo-advertisement-tester-vpaid-vast-vmap), the above snippet will trigger the following events:

> `addad`, `updateadbreak`, `updatead`, `adloaded`, `adbreakbegin`, `adbegin`, `adimpression`, `adfirstquartile`, `admidpoint`, `adthirdquartile`, `adend`, `adbreakend`, `removeadbreak`

When you do the same for the `csai` ad integration, you get the following events:

> `adloaded`,`adbreakchange`,`adbreakbegin`,`adbegin`,`adend`,`adbreakend`

#### Android SDK[​](#android-sdk "Direct link to Android SDK")

The `Player` API exposes an [`getAds()`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/player/Player.html#getAds--) method which belongs to the [`Ads`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/ads/Ads.html) interface. Because this `Ads` interface inherits from [`EventDispatcher<AdEvent>`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/event/ads/AdEvent.html),you can leverage event listeners in this interface.

The Android SDK currently only allows ad playback through [Google IMA](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/google-ima.md#android-sdk). The available events are documented in [`GoogleImaAdEventType`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaAdEventType.html).

To subscribe to an event, you select an appropriate `GoogleImaAdEventType` or `AdsEventType`, use the `Ads` interface, call the `addEventListener` method, and set the event as the first parameter, and the callback as the second parameter.

For example, if you want to track the start of an ad break with the Android SDK, you could use the following snippet:

```kotlin
theoPlayer.ads.addEventListener(GoogleImaAdEventType.AD_BREAK_STARTED) {
    Log.d("ADS", "AD_BREAK_STARTED")
}

```

#### iOS/tvOS SDK[​](#iostvos-sdk "Direct link to iOS/tvOS SDK")

The `Player` API exposes an [`ads`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/ios/Classes/THEOplayer.html#/s:13THEOplayerSDK0A0C3adsAA3Ads_pvp) property which belongs to the [`Ads`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/ios/Protocols/Ads.html) interface. Because this `Ads` interface inherits from [`EventDispatcher`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/ios/Ads%20Events.html), you can leverage event listeners in this interface.

The ad-related events are documented in [AdsEventTypes](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/ios/Structs/AdsEventTypes.html).

To subscribe to an event, you select an event from this page, use the `Ads` interface, call the `addEventListener` method, and set the event as the first parameter, and the callback as the second parameter.

For example, if you want to track the start of an ad break, you could use the following snippet:

```swift
player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_BEGIN) { (event) in
    print(event)
}

```

## Ad begin and end[​](#ad-begin-and-end "Direct link to Ad begin and end")

Detecting the start and stop of ad breaks and individual ad pods is a common requirement.

The THEOplayer API exposes event listeners which allow applications to hook into these events.

#### Web SDK[​](#web-sdk-1 "Direct link to Web SDK")

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), and relates to the following events:

* `adbegin`
* `adbreakbegin`
* `adbreakend`
* `adend`

For example, the following snippet would trigger the callback when an ad break begins:

```javascript
player.ads.addEventListener('adbreakbegin', function (event) {
  console.log(event);
});

```

You can swap `adbreakbegin` for the other events, or supply an array instead:

```javascript
player.ads.addEventListener(['adbegin', 'adbreakbegin', 'adbreakend', 'adend'], function (event) {
  console.log(event);
});

```

#### Android SDK[​](#android-sdk-1 "Direct link to Android SDK")

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), and relates to the following events:

* `STARTED`
* `AD_BREAK_STARTED`
* `AD_PERIOD_STARTED`
* `AD_BREAK_ENDED`
* `AD_PERIOD_ENDED`
* `COMPLETED`
* `ALL_ADS_COMPLETED`

```kotlin
theoPlayer.ads.addEventListener(GoogleImaAdEventType.AD_BREAK_STARTED) {
    Log.d("ADS", "AD_BREAK_STARTED")
}

```

#### iOS/tvOS SDK[​](#iostvos-sdk-1 "Direct link to iOS/tvOS SDK")

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), and relates to the following events:

* `AD_BEGIN`
* `AD_BREAK_BEGIN`
* `AD_END`
* `AD_BREAK_END`

```swift
player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_BEGIN) { (event) in
    print(event)
}

```

## Ad error[​](#ad-error "Direct link to Ad error")

Ad error events might be triggered when an ad blocker is active, or when an "empty" ad is returned. As an app developer, you might want to detect and possibly react to this.

If you are scheduling [client-side advertisements](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/how-to-set-up-vast-and-vmap.md) then you use the `Ads` interface to detect the ad errors.

#### Web SDK[​](#web-sdk-2 "Direct link to Web SDK")

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), specifically the `aderror` event.

The following snippet would trigger the callback when an ad error occurs:

```javascript
player.ads.addEventListener('aderror', function (event) {
  console.log(event);
});

```

#### Android SDK[​](#android-sdk-2 "Direct link to Android SDK")

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), specifically the `AD_ERROR` event.

The following snippet would trigger the callback when an ad error occurs:

```kotlin
theoPlayer.ads.addEventListener(GoogleImaAdEventType.AD_ERROR) {
    Log.d("ADS", "AD_ERROR")
}

```

#### iOS/tvOS SDK[​](#iostvos-sdk-2 "Direct link to iOS/tvOS SDK")

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), specifically the `AD_ERROR` event.

The following snippet would trigger the callback when an ad error occurs:

```swift
player.ads.addEventListener(type: AdsEventTypes.AD_ERROR) { (event) in
    print(event)
}

```

### Server-side ads[​](#server-side-ads "Direct link to Server-side ads")

If you're scheduling server-side ads, you might need to use a different interface than the `Ads` interface which you use when scheduling client-side ads.

* [Google DAI](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/google-ima.md): if you're using Google DAI, you can use the same API as the one for client-side ads, as described in the sections above.
* [Yospace](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/yospace.md): if you're using Yospace, you must use the Yospace interface. You can read more about detecting ad-related events with Yospace at our [Yospace documentation](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/yospace.md).
* [Uplynk](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/web/uplynk/ads.md): if you're using Uplynk, you can use the same API as the one for client-side ads, as described in the sections above. For now, you can also use the Uplynk Ads API. You can read more about detecting ad-related events with Uplynk at our [Uplynk documentation](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/web/uplynk/ads.md#uplynk-ads-api).

If you're building a custom server-side ad insertion solution, you might be interested in using our `TextTrack` API to detect `id3/emsg/EventStream/EXT-X-DATERANGE` cues, and the `timeupdate` event in the `Player` interface to determine the current playhead position.

## Ad block detection[​](#ad-block-detection "Direct link to Ad block detection")

Refer to the article on [ad block detection](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/block-detection.md) for more information on detecting (and responding) to ad blockers.

## Resources[​](#resources "Direct link to Resources")

* More samples are available on our GitHub repository for [Web](https://github.com/THEOplayer/samples-html5-sdk), [Android](https://github.com/THEOplayer/samples-android-sdk) and [iOS](https://github.com/THEOplayer/samples-ios-sdk) SDKs.
* [THEOplayer advertisement tester](https://www.theoplayer.com/theoplayer-demo-advertisement-tester-vpaid-vast-vmap)
