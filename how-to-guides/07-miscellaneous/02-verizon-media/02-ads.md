# Ads

This article explains how to use the Verizon Media's Ads API exposed by THEOplayer. This API allows developers to manipulate the ad-related UX and UI.

## SDKs 

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes (2.63.0)  |     Yes (2.66.0)     |   Yes (2.65.0)   | No  |      Yes (2.66.0)      |      No      |

## Global Configuration

The examples below demonstrate how to pass along global configuration for the Verizon Media ads. These settings can be overwritten.

##### Web SDK
```js
var player = new THEOplayer.Player(element, {
    verizonMedia: {
        defaultSkipOffset: 2, // Ad breaks added by SSAI are by default skippable after two seconds. Optional and defaults to unskippable.
        onSeekOverAd: 'play-last' // When seeking over ad breaks, this configuration decides how to snapback and play any missed ad breaks.
                                  // Possible values are currently 'play-none', 'play-last' and 'play-all' where 'play-none' is the default.
    }
    // ... Other configuration goes here
});
```

##### Android SDK
```java
VerizonMediaConfiguration verizonMediaConfig = new VerizonMediaConfiguration.Builder()
                .defaultSkipOffset(5)
                .skippedAdStrategy(SkippedAdStrategy.PLAY_ALL) // When seeking over ad breaks, this configuration decides how to snapback and play any missed ad breaks.
                                                               // Possible values are currently 'play-none', 'play-last' and 'play-all' where 'play-none' is the default.
                .build();
 
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
                .verizonMediaConfiguration(verizonMediaConfig)
                .build();
 
this.tpv = new THEOplayerView(Activity, playerConfig);
```

##### iOS SDK
```swift
let verizonMediaPlayerConf = VerizonMediaConfiguration(
            defaultSkipOffset: 5,
            onSeekOverAd: SkippedAdStrategy.PLAY_ALL) // When seeking over ad breaks, this configuration decides how to snapback and play any missed ad breaks.
                                                      // Possible values are currently 'play-none', 'play-last' and 'play-all' where 'play-none' is the default.
         
let playerConf = THEOplayerConfiguration(verizonMedia: verizonMediaPlayerConf)
         
let player = THEOplayer(configuration: playerConf)
```

## Verizon Media Ads API
Specifying a source which contains server-side ads configured through the Verizon Media pre-integration will have the player expose an Ads API specific to Verizon Media.

##### Web SDK

Specifying a source which performs SSAI will have the player expose information about this SSAI on the player.verizonMedia.ads API:

- `player.verizonMedia.ads.adBreaks`: Specifies all ad breaks that are currently in the stream by using SSAI through Preplay.
- `player.verizonMedia.ads.currentAdBreak`: If applicable, returns the ad break that is currently being played.
- `player.verizonMedia.ads.currentAds`: If applicable, returns a list of the current ads being played.
- `player.verizonMedia.ads.skip()`: If there is an ad break playing, and it is skippable, skip the ad break to the next content (or next seek point in case of snapback)

Calling the `vdms.ads.skip()` function on a live stream will not have any effect.

In addition, event listeners are available to listen to new ad breaks:

For adbreaks there are the following events defined :

- *adbreakbegin*
- *adbreakend*
- *adbreakskip*
- *addadbreak*
- *removeadbreak*

For ads there are the following events defined :

- *adbegin*
- *adchange*
- *adend*
- *adfirstquartile*
- *admidpoint*
- *adthirdquartile*
- *adcomplete*

```js
// Sample source snippet
  
player.verizonMedia.ads.adBreaks.addEventListener('addadbreak', (event) => {
    // do something with event.adBreak as it is an ad break added through SSAI, an example:
    const adBreak = event.adBreak;
    if (adBreak.duration <= 15) {
        adBreak.skipOffset = -1; // Do not allow skipping of short ad breaks
    } else if (adBreak.duration > 60) {
        adBreak.skipOffset = 10; // Allow skipping of long ad breaks after ten seconds
    } else {
        adBreak.skipOffset = 0; // For all other ad breaks, allow immediate skipping
    }
    // subscribe to additional events
    event.adBreak.addEventListener('adbreakbegin', console.log);
    event.adBreak.addEventListener('adbreakend', console.log);
    for (var i = 0; i < event.adBreak.ads.length; i++) {
        event.adBreak.ads[i].addEventListener('adbegin', console.log);
        event.adBreak.ads[i].addEventListener('adend', console.log);
    }
});
```

##### Android (TV) SDK

Specifying a source which performs SSAI will have the player expose information about this SSAI on the player.verizonMedia.ads API:

`player.verizonMedia.ads.adBreaks`: Specifies all ad breaks that are currently in the stream by using SSAI through Preplay.
`player.verizonMedia.ads.currentAdBreak`: If applicable, returns the ad break that is currently being played.
`player.verizonMedia.ads.currentAds`: If applicable, returns a list of the current ads being played.
`player.verizonMedia.ads.skip()`: If there is an ad break playing, and it is skippable, skip the ad break to the next content (or next seek point in case of snapback)
skip()

Calling the `vdms.ads.skip()` function on a live stream will not have any effect.

In addition, event listeners are available to listen for specific events:

On the ad break list the following listeners can be added:

- *addadbreak*
- *removeadbreak*

On an ad break the following listeners can be added:

- *adbreakbegin*
- *adbreakend*
- *adbreakskip*
- *adbreakupdate*

On the ad list inside an ad break the following listeners can be added:

- *removead*

On an individual ad the following listeners can be added:

- *adbegin*
- *adend*
- *adfirstquartile*
- *admidpoint*
- *adthirdquartile*
- *adcomplete*

```java
EventListener<VerizonMediaAdEvent> adListener = (VerizonMediaAdEvent event) -> {
            // Do something with the ad
            event.getAd();
};
 
EventListener<VerizonMediaAdBreakEvent> adBreakListener = (VerizonMediaAdBreakEvent event) -> {
            // Do something with the adbreak
            event.getAdBreak();
};
 
EventListener<VerizonMediaAdBreakListEvent> adBreakListListener = (VerizonMediaAdBreakListEvent event) -> {
            // Do something with the adbreak
            event.getAdBreak().addEventListener(VerizonMediaAdBreakEventTypes.ADBREAK_BEGIN, adBreakListener);
            event.getAdBreak().addEventListener(VerizonMediaAdBreakEventTypes.ADBREAK_END, adBreakListener);
 
            Iterator<VerizonMediaAd> ads =  event.getAdBreak().getAds().iterator();
            while (ads.hasNext()) {
                ads.next().addEventListener(VerizonMediaAdEventTypes.AD_BEGIN, adListener);
            }
};
 
this.tpv.getPlayer().getVerizonMedia().getAds().getAdBreaks().addEventListener(VerizonMediaAdBreakListEventTypes.ADD_ADBREAK, adBreakListListener);
```

##### iOS (tvOS) SDK

Specifying a source which performs SSAI will have the player expose information about this SSAI on the player.verizonMedia.ads API:

`player.verizonMedia.ads.adBreaks`: Specifies all ad breaks that are currently in the stream by using SSAI through Preplay.
`player.verizonMedia.ads.currentAdBreak`: If applicable, returns the ad break that is currently being played.
`player.verizonMedia.ads.currentAds`: If applicable, returns a list of the current ads being played.
`player.verizonMedia.ads.skip()`: If there is an ad break playing, and it is skippable, skip the ad break to the next content (or next seek point in case of snapback)
skip()

Calling the `vdms.ads.skip()` function on a live stream will not have any effect.

In addition, event listeners are available to listen for specific events:

On the ad break list the following listeners can be added:

- *addadbreak*
- *removeadbreak*

On an ad break the following listeners can be added:

- *adbreakbegin*
- *adbreakend*
- *adbreakskip*
- *adbreakupdate*

On the ad list inside an ad break the following listeners can be added:

- *removead*

On an individual ad the following listeners can be added:

- *adbegin*
- *adend*
- *adfirstquartile*
- *admidpoint*
- *adthirdquartile*
- *adcomplete*

```swift
let adListener = { (event: VerizonMediaAdBeginEvent) in
            if let ad = event.ad {
                // do something with the ad.
            }
}
         
let adBreakBeginListener = { (event: VerizonMediaAdBreakBeginEvent) in
            if let adbreak = event.adBreak {
                // do something with the ad break.
            }
}
         
let adBreakArrayListener = { (event: VerizonMediaAddAdBreakEvent) in
            if let adbreak = event.adBreak {
                _ = adbreak.addEventListener(type: VerizonMediaAdBreakEventTypes.AD_BREAK_BEGIN, listener: adBreakBeginListener)
                _ = adbreak.ads.first?.addEventListener(type: VerizonMediaAdEventTypes.AD_BEGIN, listener: adListener)
            }
}
         
let adBreakArrayListenerRef = player.verizonMedia.ads.adBreaks.addEventListener(type: VerizonMediaAdBreakArrayEventTypes.ADD_AD_BREAK, listener: adBreakArrayListener)
```
