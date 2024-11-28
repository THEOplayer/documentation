# Verizon Media Ads

Verizon Media offers support for [server-side ad-insertion](https://www.verizondigitalmedia.com/media-platform/streaming/smartplay/#Server-side-Ad-Insertion) (SSAI).

This article explains how to use the Verizon Media's Ads API exposed by THEOplayer to hook into these SSAI advertisements.
Additionally, this API allows developers to manipulate the ad-related UX and UI.

## SDKs

|   Web SDK    | Android SDK  |   iOS SDK    | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :----------: | :----------: | :----------: | :------: | :------------: | :------------: | :------: |
| Yes (2.63.0) | Yes (2.66.0) | Yes (2.65.0) |    No    |  Yes (2.66.0)  |       No       |   Yes    |

## Global Configuration

The examples below demonstrate how to pass along global configuration for the Verizon Media ads. These settings can be overwritten.

##### Web SDK

```js
var player = new THEOplayer.Player(element, {
  verizonMedia: {
    defaultSkipOffset: 2, // Ad breaks added by SSAI are by default skippable after two seconds. Optional and defaults to unskippable.
    onSeekOverAd: 'play-last', // When seeking over ad breaks, this configuration decides how to snapback and play any missed ad breaks.
    // Possible values are currently 'play-none', 'play-last' and 'play-all' where 'play-none' is the default.
  },
  // ... Other configuration goes here
});
```

##### Legacy Android SDK (4.12.x)

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

##### Legacy iOS/tvOS SDK (4.12.x)

```swift
let verizonMediaPlayerConf = VerizonMediaConfiguration(
            defaultSkipOffset: 5,
            onSeekOverAd: SkippedAdStrategy.PLAY_ALL) // When seeking over ad breaks, this configuration decides how to snapback and play any missed ad breaks.
                                                      // Possible values are currently 'play-none', 'play-last' and 'play-all' where 'play-none' is the default.

let playerConf = THEOplayerConfiguration(verizonMedia: verizonMediaPlayerConf)

let player = THEOplayer(configuration: playerConf)
```

##### Roku SDK

```brightscript
function Init()
  ...
    m.player = m.top.findNode("THEOPlayer")
    m.player.configuration = {
      "license": "" ' put the THEOplayer license between apostrophes,
      "verizonMedia" : {
		    "defaultSkipOffset": 5,
		    "onSeekOverAd": "play-last"
      }
    }
  ...
end function
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

- _adbreakbegin_
- _adbreakend_
- _adbreakskip_
- _addadbreak_
- _removeadbreak_

For ads there are the following events defined :

- _adbegin_
- _adchange_
- _adend_
- _adfirstquartile_
- _admidpoint_
- _adthirdquartile_
- _adcomplete_

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

- _addadbreak_
- _removeadbreak_

On an ad break the following listeners can be added:

- _adbreakbegin_
- _adbreakend_
- _adbreakskip_
- _adbreakupdate_

On the ad list inside an ad break the following listeners can be added:

- _removead_

On an individual ad the following listeners can be added:

- _adbegin_
- _adend_
- _adfirstquartile_
- _admidpoint_
- _adthirdquartile_
- _adcomplete_

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

- _addadbreak_
- _removeadbreak_

On an ad break the following listeners can be added:

- _adbreakbegin_
- _adbreakend_
- _adbreakskip_
- _adbreakupdate_

On the ad list inside an ad break the following listeners can be added:

- _removead_

On an individual ad the following listeners can be added:

- _adbegin_
- _adend_
- _adfirstquartile_
- _admidpoint_
- _adthirdquartile_
- _adcomplete_

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

##### Roku SDK

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="TestScene" extends="Scene">
    <interface>
        <function name="callbackOnEventAddAdBreak"/>
    </interface>

    <script type = "text/brightscript" >

        <![CDATA[

        function Init()
            m.player = m.top.findNode("TestPlayer")
            m.player.configuration = {
              "license": "" ' put the THEOplayer license between apostrophes
            }
            m.player.callFunc("addEventListener", m.player.Event.addadbreak, "callbackOnEventAddAdBreak")

            setSource()
        end function

        function setSource()
	        ...
        end function

        function callbackOnEventAddAdBreak(eventData)
		    verizonMedia = m.player.verizonMedia

			' search in loop for currently added ad break
		    for each adBreak in verizonMedia.ads.adBreaks
		        if adBreak.startTime = eventData.adBreak.startTime
			        ' set proper skip offset time depending on ad break duration
		            if adBreak.duration <= 15
		                adBreak.skipOffset = -1
		            else if adBreak.duration > 60
		                adBreak.skipOffset = 10
		            else
		                adBreak.skipOffset = 0
		            end if
		        end if
		    end for

			' assigning whole object instead of changing value of field is required due to roku specific architecture
		    m.player.verizonMedia = verizonMedia

			' log data about all ads inside currently added ad break
		    for each ad in eventData.adBreak.ads
		        ? "adBegin : "; ad.startTime
		        ? "adEnd : "; ad.endTime
		    end for
        end function
        ]]>

    </script>

    <children>
        <THEOplayer id="TestPlayer"/>
    </children>
</component>
```

## Related articles

- [Verizon Media - Preplay](../../../how-to-guides/07-miscellaneous/02-verizon-media/01-preplay.md)
- [Verizon Media - Ping](../../../how-to-guides/07-miscellaneous/02-verizon-media/03-ping.md)
