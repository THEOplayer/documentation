# Playing ads with THEOplayer Roku SDK

This article will provide the steps needed to play video ads with your content using the THEOplayer Roku SDK.

## First Steps

- Make sure you are using a version of the SDK that supports ads. CSAI is available for VOD content in v9.3 and higher of the SDK.
- Include the RAF advertising library in your application's manifest file by adding this line:
  `bs_libs_required=roku_ads_lib`

## Clientside Ad Insertion

The THEOplayer Roku SDK currently only supports Clientside Ad Insertion (CSAI) for VOD assets. It does not yet support Clientside Ad Stitching (CSAS), Serverside Ad Insertion (SSAI), Server Guided Ad Insertion (SGAI) or live ads. It supports CSAI by using the Roku Advertising Framework (RAF), which is provided by Roku. It supports VMAP and VAST ad tags. For more information about specific features of VAST or VMAP supported by RAF, please visit their [support page](https://developer.roku.com/docs/developer-program/advertising/roku-advertising-framework.md).

### Create your ad descriptions

Ads are added to your content by adding ad sources to your source descriptions that are set on the `source` property of the THEOplayer. Here is an example for VAST ad tags:

```brightscript
m.player.source = {
    "title": "My VOD Asset",
    "live": false,
    "sources": {
        "src": "https://example.com/my_vod_asset.m3u8",
        "type": "application/x-mpegurl"
    },
    "ads": [
        {
            integration: "csai",
            sources: "https://exampleadserver.com/preroll.xml",
            timeOffset: "start"
        },
        {
            integration: "csai",
            sources: "https://exampleadserver.com/midroll.xml",
            timeOffset: 30
        },
        {
            integration: "csai",
            sources: "https://exampleadserver.com/midroll2.xml",
            timeOffset: 190
        },
        {
            integration: "csai",
            sources: "https://exampleadserver.com/postroll.xml",
            timeOffset: "end"
        }
    ]
}
```

For VMAP ads, the timing is contained within the VMAP file itself, so the configuration is simpler:

```brightscript
m.player.source = {
    "title": "My VOD Asset",
    "live": false,
    "sources": {
        "src": "https://example.com/my_vod_asset.m3u8",
        "type": "application/x-mpegurl"
    },
    "ads": [
        {
            integration: "csai",
            sources: "https://exampleadserver.com/vmap.xml",
        }
    ]
}
```

Note that the `timeOffset` property must be omitted for VMAP ads.

You may also specify the timings for VAST ads either by using a timecode or by specifying the percent of the asset that should play before displaying the ad. Timecodes should be in the format `HH:MM:SS`.

```brightscript
m.player.source = {
    "title": "My VOD Asset",
    "live": false,
    "sources": {
        "src": "https://example.com/my_vod_asset.m3u8",
        "type": "application/x-mpegurl"
    },
    "ads": [
        {
            integration: "csai",
            sources: "https://exampleadserver.com/midroll.xml",
            timeOffset: "00:05:30"
        },
        {
            integration: "csai",
            sources: "https://exampleadserver.com/midroll2.xml",
            timeOffset: "25%"
        }
    ]
}
```

#### Mixing VAST and VMAP Ads

Currently, this is not supported. Support may be added for this in the future.

### Listen for ad events

To detect events emitted for the ads, you can call the `addEventListener` method on the Ads API. You can see the list of ad events on [the API reference page](../../../api-reference/roku.md#ads-api). Note that the method used for the listener needs to be exposed through the interface of the node that owns the listener function.

```brightscript
adEvents = m.player.ads.events
m.player.ads.callFunc("addEventListener", adEvents.adbreakbegin, m.top, "onAdBreakBegin")
m.player.ads.callFunc("addEventListener", adEvents.adbreakend, m.top, "onAdBreakEnd")
```

To clean up, you can simply call `removeEventListener` the same way.

```brightscript
m.player.ads.callFunc("removeEventListener", adEvents.adbreakbegin, m.top, "onAdBreakBegin")
m.player.ads.callFunc("removeEventListener", adEvents.adbreakend, m.top, "onAdBreakEnd")
```

Also, if you just want to see whether ads are playing or not, observe the `playing` field on the Ads API. You can see the other fields available on [the API reference page](../../../api-reference/roku.md#ads-api).

```brightscript
m.player.ads.observeField("playing", "onAdsPlayingChange")

sub onAdsPlayingChange( event as object )
    adsPlaying = event.getData()
end sub
```

### Monitoring RAF

The THEOplayer Roku SDK does not expose RAF directly. However, you can still get the data from RAF's callbacks for tracking, buffering, and library version. On the Ads API, there is the `rafProxy` node. This field exposes data from RAF on fields of its own. To substitute for the output from RAF's `setTrackingCallback` method, you could do the following:

```brightscript
m.player.ads.rafProxy.observeField("trackingUpdate", "onRafTrackingUpdate")

sub onRafTrackingUpdate(event as object)
    update = event.getData()
    m.myRafObserver.rafTrackingCallback(m.myRafObserver, update.eventType, update.ctx)
end sub
```

Similarly, you can listen for RAF's `setAdBufferRenderCallback` output by observing the `bufferRenderUpdate` field on the Ads API.

```brightscript
m.player.ads.rafProxy.observeField("bufferRenderUpdate", "onRafBufferUpdate")

sub onRafBufferUpdate(event as object)
    update = event.getData()
    m.myRafObserver.rafBufferingCallback(m.myRafObserver, update.eventType, update.ctx)
end sub
```

The `rafProxy` field also exposes the library version of RAF via its own `libVersion` field.

### Limitations

Currently the Ads API does not support:

- Mixing and matching VAST and VMAP tags.
- Adding ads during playback of the asset.
- Reporting the exact media file that is being played for a creative.
