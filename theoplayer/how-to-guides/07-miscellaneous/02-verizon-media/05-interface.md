# Verizon Media Interface

This article explains how developers can hook into the Verizon Media Interface. This interface allows developers to query the available assets and ads in a Verizon Media stream, its properties, and subscribe to its events.

## SDKs

|   Web SDK    | Android SDK  |   iOS SDK    | tvOS SDK | Android TV SDK | Chromecast SDK |
| :----------: | :----------: | :----------: | :------: | :------------: | :------------: |
| Yes (2.63.0) | Yes (2.66.0) | Yes (2.65.0) |    No    |  Yes (2.66.0)  |       No       |

## Using the Verizon Media Interface

The `VerizonMedia` Interface is exposed through your THEOplayer instance (e.g.: `player.verizonMedia` for the Web SDK). Through this interface,

- You can retrieve information (e.g. start and stop time) on the available assets (because THEOplayer extracts this information from its integration with the Asset Info and Preplay service offered by Verizon Media).
  - You can also subscribe `addasset` and `removeasset` events, which can be useful when you need to be informed when the assets become available.
- You can retrieve information on the available advertisements (because THEOplayer extracts this information from its integration with the Preplay and Ping service offered by Verizon Media).
  - You can also subscribe to `addadbreak`, `addad`, `removeadbreak`, ... events, which can be useful if you want to know when which state is applicable (e.g. to overlay a custom advertisement countdown-timer).
  - You can also adjust the ad skip offset of an ad break.
- You can intercept Preplay, Asset Info and Ping responses (because THEOplayer integrates with these services offered by Verizon Media).

If you're looking for more information on how to query the available advertisements and how to subscribe to ad events, then refer to [Verizon Media Ads](02-ads.md).

The examples below provide a basic demonstration of how to use the `VerizonMedia` interface. The Github projects linked at [Verizon Media - Introduction](../../../how-to-guides/07-miscellaneous/02-verizon-media/00-introduction.md) provide more code samples.

##### Web SDK

```js
const player = new THEOplayer.Player(element, {...});
// verizonMedia events
[
    'preplayresponse',
    'pingresponse',
    'assetinforesponse'
].forEach(function(e) {
    player.verizonMedia.addEventListener(e, console.log);
});
// verizonMedia.assets events
[
    'addasset',
    'removeasset'
].forEach(function(e) {
    player.verizonMedia.assets.addEventListener(e, console.log);
});
// verizonMedia.ads events
[
    'addadbreak',
    'removeadbreak'
].forEach(function(e) {
    player.verizonMedia.ads.adBreaks.addEventListener(e, function (e1) {
        if (e1.type == "addadbreak") {
            // verizonMedia.ads.adBreak[i] events
            [
                'adbreakbegin',
                'adbreakend',
                'adbreakskip',
                'updateadbreak'
            ].forEach(function(e) {
                e1.adBreak.addEventListener(e, console.log);
            // verizonMedia.as.adBreak.ads[i] events
            for (let i = 0; i < e1.adBreak.ads.length; i++) {
                [
                    'adbegin',
                    'adend',
                    'adfirstquartile',
                    'admidpoint',
                    'adthirdquartile',
                    'adcomplete'
                ].forEach(function(e) {
                    e1.adBreak.ads[i].addEventListener(e, console.log);
                });
            }
        }
    });
});
```

Refer to the [VerizonMedia API reference](pathname:///theoplayer/v8/api-reference/web/interfaces/VerizonMedia.html) for more information. Additionally, reviewing https://github.com/THEOplayer/samples-html5-sdk/blob/master/reference-apps/verizon-media-app/src/player.js helps to understand the `VerizonMedia` interface.

##### Legacy Android SDK (4.12.x)

```java
THEOplayerView player = new THEOplayerView(this);

player.getVerizonMedia().addEventListener(VerizonMediaEventTypes.PREPLAYRESPONSE, event -> Log.i(TAG, "Event: PREPLAYRESPONSE"));
player.getVerizonMedia().addEventListener(VerizonMediaEventTypes.PINGRESPONSE, event -> Log.i(TAG, "Event: PINGRESPONSE"));
player.getVerizonMedia().addEventListener(VerizonMediaEventTypes.PINGERROR, event -> Log.i(TAG, "Event: PINGERROR"));
EventListener<? super VerizonMediaAdBreakListEvent> attachAdBreakEventListeners = new EventListener<VerizonMediaAdBreakListEvent>() {
    @Override
    public void handleEvent(VerizonMediaAdBreakListEvent event) {
        Log.i(TAG, "Event: ADDADBREAK");
        VerizonMediaAdBreak adBreak = event.getAdBreak();
        VerizonMediaAdList ads = event.getAdBreak().getAds();
        for (int i = 0; i < ads.length(); i++) {
            VerizonMediaAd ad = ads.getItem(i);
            ad.addEventListener(VerizonMediaAdEventTypes.AD_BEGIN, event2 -> Log.i(TAG, "Event: ADBEGIN"));
            ad.addEventListener(VerizonMediaAdEventTypes.AD_END, event2 -> Log.i(TAG, "Event: ADBEGIN"));
        }
        adBreak.addEventListener(VerizonMediaAdBreakEventTypes.ADBREAK_BEGIN, event2 -> Log.i(TAG, "Event: ADBREAKBEGIN"));
        adBreak.addEventListener(VerizonMediaAdBreakEventTypes.ADBREAK_END, event2 -> Log.i(TAG, "Event: ADBREAKEND"));
        adBreak.addEventListener(VerizonMediaAdBreakEventTypes.ADBREAK_SKIP, event2 -> Log.i(TAG, "Event: ADBREAKSKIP"));
        adBreak.addEventListener(VerizonMediaAdBreakEventTypes.UPDATE_ADBREAK, event2 -> Log.i(TAG, "Event: UPDATEADBREAK"));
    }
};

player.getVerizonMedia().getAds().getAdBreaks().addEventListener(VerizonMediaAdBreakListEventTypes.ADD_ADBREAK, attachAdBreakEventListeners);

player.getVerizonMedia().getAds().getAdBreaks().addEventListener(VerizonMediaAdBreakListEventTypes.REMOVE_ADBREAK, event -> Log.i(TAG, "Event: REMOVEADBREAK"))
```

Refer to the documentation at [VerizonMedia](https://theoplayer-cdn.s3.eu-west-1.amazonaws.com/doc/android/latest/com/theoplayer/android/api/verizonmedia/VerizonMedia.html) for more information. Additionally, reviewing https://github.com/THEOplayer/samples-android-sdk/blob/master/Verizon-Media/app/src/main/java/com/theoplayer/sample/playback/verizonmedia/PlayerActivity.java helps to understand the `VerizonMedia` interface.

##### Legacy iOS/tvOS SDK (4.12.x)

```swift
let player = THEOplayer()
player.verizonMedia.addEventListener(type: VerizonMediaResponseEventTypes.PREPLAY_RESPONSE, listener: onPreplayResponse)
player.verizonMedia.addEventListener(type: VerizonMediaResponseEventTypes.PING_RESPONSE, listener: onPingResponse)
player.verizonMedia.ads.adBreaks.addEventListener(type: VerizonMediaAdBreakArrayEventTypes.ADD_AD_BREAK, listener: onAddAdbreak)
player.verizonMedia.ads.adBreaks.addEventListener(type: VerizonMediaAdBreakArrayEventTypes.REMOVE_AD_BREAK, listener: onRemoveAdbreak)
...
private func onAddAdbreak(event: VerizonMediaAddAdBreakEvent) {
    event.adBreak?.ads.forEach({ (ad) in
    	ad.addEventListener(type: VerizonMediaAdEventTypes.AD_BEGIN, listener: onAdBegin)
        ad.addEventListener(type: VerizonMediaAdEventTypes.AD_END, listener: onAdEnd)
    })
    event.adBreak?.addEventListener(type: VerizonMediaAdBreakEventTypes.AD_BREAK_BEGIN, listener:
                                    onAdBreakBegin(event:))
    event.adBreak?.addEventListener(type: VerizonMediaAdBreakEventTypes.AD_BREAK_END, listener:
                                    onAdBreakEnd)
    event.adBreak?.addEventListener(type: VerizonMediaAdBreakEventTypes.AD_BREAK_SKIP, listener:
                                    onAdBreakSkip)
    event.adBreak?.addEventListener(type: VerizonMediaAdBreakEventTypes.AD_BREAK_UPDATE, listener:
                                    onAdBreakUpdate)
}
...
```

Refer to the documentation at [VerizonMedia](pathname:///theoplayer/v8/api-reference/ios/Protocols/VerizonMedia.html) for more information. Additionally, reviewing https://github.com/THEOplayer/samples-ios-sdk/blob/master/Verizon-Media/Verizon_Media/PlayerViewController.swift helps to understand the `VerizonMedia` interface.

## Related articles

- [Verizon Media - Ads](../../../how-to-guides/07-miscellaneous/02-verizon-media/02-ads.md): this article offers more information on the `ads` parts of the Verizon Media interface.
- [Verizon Media - Ping](../../../how-to-guides/07-miscellaneous/02-verizon-media/03-ping.md): this article explains how you can use the Verizon Media Interface to intercept Ping responses.
- [Verizon Media - Ping](../../../how-to-guides/07-miscellaneous/02-verizon-media/01-preplay.md): this article explains how you can use the Verizon Media Interface to intercept Preplay responses.
- [Verizon Media - Introduction](../../../how-to-guides/07-miscellaneous/02-verizon-media/00-introduction.md): this article links to sample Git projects which query (and subscribe to) the various properties and events offered by the `VerizonMedia` interface.
