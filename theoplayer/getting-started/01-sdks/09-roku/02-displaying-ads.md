# Playing ads with THEOplayer Roku SDK

This article will provide the steps needed to play video ads with your content using the THEOplayer Roku SDK. The THEOplayer Roku SDK currently only supports Clientside Ad Insertion (CSAI) for VOD assets and some Serverside Ad Insertion (SSAI) using Google Ad Manager or THEOads. It does not yet support Clientside Ad Stitching (CSAS), Server Guided Ad Insertion (SGAI) or live CSAI ads.

## First Steps

- Make sure you are using a version of the SDK that supports ads. CSAI is available for VOD content in v9.3 and higher of the SDK. SSAI with Google IMA is available starting in v10.3.
- Include the RAF advertising library in your application's manifest file by adding this line:
  `bs_libs_required=roku_ads_lib`
- To support Google DAI, include the Google IMA library as well by adding `googleima3` after the RAF ads library:
  `bs_libs_required=roku_ads_lib,googleima3`

## Clientside Ad Insertion

The THEOplayer Roku SDK supports CSAI by using the Roku Advertising Framework (RAF), which is provided by Roku. It supports VMAP and VAST ad tags. For more information about specific features of VAST or VMAP supported by RAF, please visit their [support page](https://developer.roku.com/docs/developer-program/advertising/roku-advertising-framework.md).

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

Mixing VAST and VMAP ads is supported to an extent. A VMAP tag may contain multiple ad breaks. VAST tags may not be scheduled in between any of the breaks in a single VMAP tag. So, for instance, if you have a VMAP tag that contains a preroll and a postroll, you could not schedule any VAST midrolls between those breaks. However, if the preroll and postroll were in separate VMAP tags, you could schedule a midroll in between them.

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

### Scheduling Ads at Runtime

If you need to add an ad break to your asset when the asset has already begun playing, you can use the `schedule` method on the Ads API. It takes an ad description as the parameter. It will return a true or false value, based on whether adding the ad appears to have succeeded. In some cases when adding VMAP, it may not be able to report accurately whether the ad break was added or not. In that case you can observe the `scheduledAdBreaks` property to see if the ad break was correctly added.

```brightscript
adDesc = {
    integration: "csai",
    sources: "https://exampleadserver.com/midroll.xml",
    timeOffset: "00:05:30"
}
success = m.player.ads.callFunc("schedule", adDesc)
```

There are some restrictions on what you can schedule:

1. You cannot schedule preroll ads via the `schedule` method.
2. You cannot schedule an ad at the same time as an already scheduled ad.
3. You cannot schedule a VMAP before any previously scheduled breaks, unless that previously scheduled break is a VAST postroll.
4. If you schedule a VMAP midroll after it would have already played, it will play immediately.
5. You cannot schedule a midroll in between ad breaks that are in the same VMAP tag.
6. You cannot schedule a midroll before a previously scheduled VMAP tag.

### Limitations

Currently the Ads API does not support:

- Playing VAST tags in the middle of breaks from a VMAP tag.
- Reporting the exact media file that is being played for a creative.

## Serverside Ad Insertion

The THEOplayer Roku SDK supports SSAI by using the Google IMA library, which is provided by Roku and can be added in your application's manifest file. It supports SSAI through two methods: Google-registered streams and THEOlive streams with THEOads.

### Google IMA Streams

To play a DAI stream that is registered with Google IMA, add an `ssai` config on the source description you pass to the THEOplayer. Set the `src` property of the `sources` object to an arbitrary, non-empty string and set the `type` to the MIME type for the manifest. Then fill in your Google DAI information in the `ssai` config, making sure to set the `integration` property of the `ssai` config to `"google-dai"`.

```brightscript
m.player.source = {
    "title": "Google DAI Stream",
    "sources": {
        "src": "ssai",
        "type": "application/x-mpegurl",
        "ssai": {
            integration: "google-dai",
            availabilityType: "live",
            assetKey: "<MY_ASSET_KEY>",
            networkCode: "<MY_NETWORK_CODE>",
            apiKey: "<MY_API_KEY>",
        },
    }
},
```

### THEOlive and THEOads

To play a THEOlive SSAI stream that is configured in THEOlive to use THEOads with Google IMA, add an `ssai` config on the source description you pass to the THEOplayer. Set the `src` property of the `sources` object to your THEOlive distribution ID and set the `type` to `"theolive"`. Then on the `ssai` config, set the `integration` property to `"theoads"`. You may additionally add ad tag parameters for Google IMA by setting the `adTagParameters` property of the `ssai` config to an associative array with the URL params as properties and values.

```brightscript
m.player.source = {
    "title": "THEOlive DAI Stream",
    "sources": {
        "src": "<MY_THEOLIVE_DISTRIBUTION_ID>",
        "type": "theolive",
        "ssai": {
            integration: "theoads",
            adTagParameters: {
                "iu": "<MY_IU_VALUE>"
            }
        }
    }
},
```

### Listening for Ad Events

With SSAI, the AdsAPI still will emit ad beacon events. You can add listeners for these ad events on the AdsAPI just like CSAI by following the instructions in the CSAI section. Unfortunately, monitoring RAF via the RAF proxy is not available for SSAI.
