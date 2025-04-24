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

For VMAP ads, the timing is container within the VMAP file itself, so the configuration is simpler:

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

### Listen for ad events

TBD
