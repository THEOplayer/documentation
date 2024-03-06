# How to subscribe to ad events

When building a custom UI, or when logging events to an analytics service,
app developers often need to be able to listen (and react) to ad events.
For example, if an ad break starts, they want to draw a countdown on top of their UI.
Alternatively, when an ad error occurs, they want to log this to an analytics server.

This article explains how you can programmatically subscribe to ad-related events across different SDKs.

### Table of Contents

- [SDKs](#sdks)
- [Subscribing to an event](#subscribing-to-an-event)
- [Ad begin and end](#ad-begin-and-and)
- [Ad error](#ad-error)
- [Ad block detection](#ad-block-detection)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |       No       |

## Subscribing to an event

This subsection explains how you detect ad-related events.
The other subsections zoom in on particular use-cases, such as detecting the beginning and end of an ad.

### Client-side ads

If you are scheduling [client-side advertisements](03-how-to-set-up-vast-and-vmap.md),
then you use the `Ads` interface to detect ad events throughout the Web, Android and iOS SDK.

#### Web SDK

The `Player` API exposes an [`ads`](https://docs.theoplayer.com/api-reference/web/theoplayer.chromelessplayer.md#ads) property which belongs to the [`Ads`](https://docs.theoplayer.com/api-reference/web/theoplayer.ads.md) interface.
Because this [`Ads`](https://docs.theoplayer.com/api-reference/web/theoplayer.ads.md) interface inherits from [`EventDispatcher<AdsEventMap>`](https://docs.theoplayer.com/api-reference/web/theoplayer.adseventmap.md),
you can leverage event listeners in this interface.

The ad-related events are documented at [https://docs.theoplayer.com/api-reference/web/theoplayer.adseventmap.md](https://docs.theoplayer.com/api-reference/web/theoplayer.adseventmap.md).
To subscribe to an event, you select an event from this page, use the `Ads` interface,
call the `addEventListener` method, and set the event as the first parameter, and the callback as the second parameter.

For example, if you want to track the start of an ad break, you could use the following snippet:

```javascript
player.ads.addEventListener("adbreakbegin", function (event) {
  console.log(event);
});
```

The following snippet should log most events to the console.

```javascript
player.ads.addEventListener(
  [
    "adbegin",
    "adbreakbegin",
    "adbreakchange",
    "adbreakend",
    "adbuffering",
    "addad",
    "addadbreak",
    "adend",
    "aderror",
    "adfirstquartile",
    "adimpression",
    "adloaded",
    "admetadata",
    "admidpoint",
    "adskip",
    "adthirdquartile",
    "removeadbreak",
    "updatead",
    "updateadbreak"
  ],
  console.log
);
```

Note that when dealing with client-side advertisements, you have different types of integrations, as explained at [How to setup VAST and VMAP](03-how-to-set-up-vast-and-vmap.md).
The impact of this is that some events are not available throughout all integrations.

For example, if you schedule `https://cdn.theoplayer.com/demos/preroll.xml`, which is a single linear VAST ad, through the "Google IMA integration" at [https://demo.theoplayer.com/advertisement-tester](https://demo.theoplayer.com/advertisement-tester), the above snippet will trigger the following events:

> `addad`, `updateadbreak`, `updatead`, `adloaded`, `adbreakbegin`, `adbegin`, `adimpression`, `adfirstquartile`, `admidpoint`, `adthirdquartile`, `adend`, `adbreakend`, `removeadbreak`

When you do the same for the "default THEOplayer integration", you get the following events:

> `adloaded`,`adbreakchange`,`adbreakbegin`,`adbegin`,`adend`,`adbreakend`

#### Android SDK

The `Player` API exposes an [`getAds()`](https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/player/Player.html#getAds--) method which belongs to the [`Ads`](https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/ads/Ads.html) interface.
Because this `Ads` interface inherits from [`EventDispatcher<AdEvent>`](https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/event/ads/AdEvent.html),
you can leverage event listeners in this interface.

The available ad events are different between the Android SDK and the Legacy Android SDK (4.12.x):

1. The Android SDK (currently) only allows ad playback through [Google IMA](10-google-ima.md#android-sdk).
   The available events are documented at [https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaAdEventType.html](https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaAdEventType.html).
2. The Legacy Android SDK (4.12.x) events are documented at [https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/event/ads/AdEvent.html](https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/event/ads/AdEvent.html) and [https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/event/ads/AdsEventTypes.html](https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/event/ads/AdsEventTypes.html).

To subscribe to an event, you select an appropriate `GoogleImaAdEventType` or `AdsEventType`, use the `Ads` interface,
call the `addEventListener` method, and set the event as the first parameter, and the callback as the second parameter.

For example, if you want to track the start of an ad break with the Android SDK, you could use the following snippet:

```java
theoPlayer.getAds().addEventListener(GoogleImaAdEventType.AD_BREAK_STARTED, googleImaAdEvent -> Log.d("ADS", "AD_BREAK_STARTED"));
```

On the other hand, if you want to track the start of an ad break with the Legacy Android SDK (4.12.x), you could use the following snippet:

```java
player.getAds().addEventListener(AdsEventTypes.AD_BREAK_BEGIN, event -> Log.i(TAG, "Event: AD_BEGIN, ad=" + event.getAdBreak()));
```

Note: code samples are available on our [samples-android-sdk](https://github.com/THEOplayer/samples-android-sdk/blob/master/Basic-Ads/app/src/main/java/com/theoplayer/sample/ads/basic/PlayerActivity.java) Github repository.

#### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

The `Player` API exposes an [`ads`](https://docs.theoplayer.com/api-reference/ios/Classes/THEOplayer.html#/s:13THEOplayerSDK0A0C3adsAA3Ads_pvp) property which belongs to the [`Ads`](https://docs.theoplayer.com/api-reference/ios/Protocols/Ads.html) interface.
Because this `Ads` interface inherits from [`EventDispatcher`](https://docs.theoplayer.com/api-reference/ios/Ads%20Events.html),
you can leverage event listeners in this interface.

The ad-related events are documented at [https://docs.theoplayer.com/api-reference/ios/Ads%20Events.html](https://docs.theoplayer.com/api-reference/ios/Ads%20Events.html).
To subscribe to an event, you select an event from this page, use the `Ads` interface,
call the `addEventListener` method, and set the event as the first parameter, and the callback as the second parameter.

For example, if you want to track the start of an ad break, you could use the following snippet:

```swift
player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_BEGIN) { (event) in
    print(event)
}
```

Note: code samples are available on our [samples-ios-sdk](https://github.com/THEOplayer/samples-ios-sdk/blob/master/Basic-Ads/Basic_Ads/PlayerViewController.swift) Github repository.

### Server-side ads

If you're scheduling server-side ads, you might need to use a different interface than the `Ads` interface which you use when scheduling client-side ads.

- [Google DAI](10-google-ima.md): if you're using Google DAI, you can use the same API as the one for client-side ads, as described in the sections above.
- [Yospace](04-yospace.md): if you're using Yospace, you must use the Yospace interface.
  You can read more about detecting ad-related events with Yospace at our [Yospace documentation](04-yospace.md#integrating-yospace).
- [Verizon Media](../../how-to-guides/07-miscellaneous/02-verizon-media/02-ads.md): if you're using Verizon Media, you must use the Verizon interface.
  You can read more about detecting ad-related events with Verizon Media at our [Verizon Media documentation](../../how-to-guides/07-miscellaneous/02-verizon-media/02-ads.md#verizon-media-ads-api).

If you're building a custom server-side ad insertion solution, you might be interested in using our `TextTrack` API to detect id3/emsg/EventStream/EXT-X-DATERANGE cues,
and the `timeupdate` event in the `Player` interface to determine the current playhead position.

## Ad begin and end

Detecting the start and stop of ad breaks and individual ad pods is a common requirement.
The THEOplayer API expose event listeners which allow applications to hook into these events.

### Client-side ads

If you are scheduling [client-side advertisements](03-how-to-set-up-vast-and-vmap.md),
then you use the `Ads` interface to detect the start and stop of ads.

#### Web SDK

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), and relates to the following events:

- `adbegin`
- `adbreakbegin`
- `adbreakend`
- `adend`

For example, the following snippet would trigger the callback when an ad break begins:

```javascript
player.ads.addEventListener("adbreakbegin", function (event) {
  console.log(event);
});
```

You can swap `adbreakbegin` for the other events, or supply an array instead:

```javascript
player.ads.addEventListener(
  ["adbegin", "adbreakbegin", "adbreakend", "adend"],
  function (event) {
    console.log(event);
  }
);
```

#### Android SDK

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), and relates to the following events:

- `adbegin`
- `adbreakbegin`
- `adbreakend`
- `adend`

```java
player.getAds().addEventListener(AdsEventTypes.AD_BREAK_BEGIN, event -> Log.i(TAG, "Event: AD_BREAK_BEGIN, ad=" + event.getAdBreak()));
```

#### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), and relates to the following events:

- `adbegin`
- `adbreakbegin`
- `adbreakend`
- `adend`

```swift
player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_BEGIN) { (event) in
    print(event)
}
```

### Server-side ads

If you're scheduling server-side ads, you might need to use a different interface than the `Ads` interface which you use when scheduling client-side ads.

- [Google DAI](10-google-ima.md): if you're using Google DAI, you can use the same API as the one for client-side ads, as described in the sections above.
- [Yospace](04-yospace.md): if you're using Yospace, you must use the Yospace interface.
  You can read more about detecting ad-related events with Yospace at our [Yospace documentation](04-yospace.md#integrating-yospace).
- [Verizon Media](../../how-to-guides/07-miscellaneous/02-verizon-media/02-ads.md): if you're using Verizon Media, you must use the Verizon interface.
  You can read more about detecting ad-related events with Verizon Media at our [Verizon Media documentation](../../how-to-guides/07-miscellaneous/02-verizon-media/02-ads.md#verizon-media-ads-api).

If you're building a custom server-side ad insertion solution, you might be interested in using our `TextTrack` API to detect id3/emsg/EventStream/EXT-X-DATERANGE cues,
and the `timeupdate` event in the `Player` interface to determine the current playhead position.

## Ad error

Ad error events might be triggered when an ad blocker is active, or when an "empty" ad is returned.
As an app developer, you might want to detect this, and possibly react to it.

### Client-side ads

If you are scheduling [client-side advertisements](03-how-to-set-up-vast-and-vmap.md),
then you use the `Ads` interface to detect the ad errors.

#### Web SDK

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), specifically the `aderror` event.

The following snippet would trigger the callback when an ad error occurs:

```javascript
player.ads.addEventListener("aderror", function (event) {
  console.log(event);
});
```

#### Android SDK

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), specifically the `aderror` event.

The following snippet would trigger the callback when an ad error occurs:

```java
player.getAds().addEventListener(AdsEventTypes.AD_ERROR, event -> Log.i(TAG, "Event: AD_ERROR, ad=" + event.getError()));
```

#### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

This use-case is an application of [Subscribing to an event](#subscribing-to-an-event), specifically the `aderror` event.

The following snippet would trigger the callback when an ad error occurs:

```swift
player.ads.addEventListener(type: AdsEventTypes.AD_ERROR) { (event) in
    print(event)
}
```

### Server-side ads

If you're scheduling server-side ads, you might need to use a different interface than the `Ads` interface which you use when scheduling client-side ads.

- [Google DAI](10-google-ima.md): if you're using Google DAI, you can use the same API as the one for client-side ads, as described in the sections above.
- [Yospace](04-yospace.md): if you're using Yospace, you must use the Yospace interface.
  You can read more about detecting ad-related events with Yospace at our [Yospace documentation](04-yospace.md#integrating-yospace).
- [Verizon Media](../../how-to-guides/07-miscellaneous/02-verizon-media/02-ads.md): if you're using Verizon Media, you must use the Verizon interface.
  You can read more about detecting ad-related events with Verizon Media at our [Verizon Media documentation](../../how-to-guides/07-miscellaneous/02-verizon-media/02-ads.md#verizon-media-ads-api).

If you're building a custom server-side ad insertion solution, you might be interested in using our `TextTrack` API to detect id3/emsg/EventStream/EXT-X-DATERANGE cues,
and the `timeupdate` event in the `Player` interface to determine the current playhead position.

## Ad block detection

Refer to the article on [ad block detection](01-block-detection.md) for more information on detecting (and responding) to ad blockers.
