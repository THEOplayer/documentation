---
title: Roku API Reference
description: API references for the THEOplayer Roku SDK
sidebar_label: Roku
sidebar_custom_props: { icon: '📺' }
---

# Player API

The attributes, methods and events.

## Attributes

| Name        | Type                        | Default | Access Permission | Description                                                                                                                                                                                                                                                                                |
| ----------- | --------------------------- | ------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| audioTracks | array of associative arrays | []      | read              | Provides information about audio tracks detected automatically in video. Each Associative array has the following fields: id - track identifier, label - track name, language - track language, enabled - true if track is current track                                                   |
| controls    | boolean                     | true    | read,write        | Allows to enable or disable player controls ( `true` to show controls, `false` to hide controls).                                                                                                                                                                                          |
| currentTime | integer                     |         | read,write        | Current timestamp of video.                                                                                                                                                                                                                                                                |
| duration    | integer                     |         | read              | Duration of video.                                                                                                                                                                                                                                                                         |
| ended       | boolean                     | false   | read              | Whether playback of the media is ended.                                                                                                                                                                                                                                                    |
| loop        | boolean                     | false   | read,write        | Whether playback of the media is looped.                                                                                                                                                                                                                                                   |
| paused      | boolean                     |         | read              | Whether the player is paused.                                                                                                                                                                                                                                                              |
| poster      | string                      |         | read,write        | The poster of the current source.                                                                                                                                                                                                                                                          |
| seeking     | boolean                     |         | read              | `true` when player is seeking, `false` when player is not seeking now.                                                                                                                                                                                                                     |
| source      | Source Description          |         | read,write        | Describes source of current video.                                                                                                                                                                                                                                                         |
| src         | string                      |         | read              | The current URL of the media resource.                                                                                                                                                                                                                                                     |
| textTracks  | array of associative arrays | []      | read              | Provides information about Closed Captions tracks detected automatically in video. Each Associative array has the following fields: id - track identifier, label - track description, language - track language,mode - determines track state, available values: disabled, showing, hidden |

### Source Description

The following key/value pairs are supported on the `source` attribute of the `THEOsdk:THEOplayer` :

| Name                | Type               | Description                                                                                                                                                                                                                                               |
| ------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sources             | roArray            | An array of Typed Sources. When specifying multiple source descriptions, the sources attribute will be interpreted as a playlist where the first typed source will play first and subsequent sources will play when its preceding typed source has ended. |
| drmHttpAgentHeaders | roAssociativeArray | A key-value dictionary that contains additional HTTP headers that will be sent for DRM key/license requests. The keys represent the HTTP header names and the values represent their corresponding values.                                                |

### Typed Source

The following key/value pairs are supported on the `sources` attribute of a Source Description:

| **Name**          | **Type**           | **Description**                                                                                                            |
| :---------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| src               | String             | The URL of the media resource.                                                                                             |
| type              | String             | The content type (MIME type) of the media resource. Possible values are `application/dash+xml` and `application/x-mpegURL` |
| contentProtection | Content Protection | Parameters for DRM playback                                                                                                |
| SDBifUrl          | String             | "Base Index Frames" URL for SD trick mode.                                                                                 |
| HDBifUrl          | String             | "Base Index Frames" URL for HD trick mode.                                                                                 |
| FHDBifUrl         | String             | "Base Index Frames" URL for FHD trick mode.                                                                                |

"Base Index Frames" or BIF, is an archive file format that contains a set of still images, also known as "trick play thumbnails", supporting enhanced fast-forward and rewind modes during video playback.

### Content Protection

The following key/value pairs are supported on the `contentProtection` attribute of a Typed Source:

| Name        | Type           | Description                                                                                                                                                     |
| ----------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| integration | String         | _Optional attribute._ The key system the player should use. Possible values are `playready` , `widevine`.                                                       |
| licenseUrl  | String         | The licence acquisition URL                                                                                                                                     |
| certificate | String         | The actual certificate string for Widevine purposes, which must be obtained out-of-band (OOB) by the channel. Leave this unset unless Widevine is used for DRM. |
| drmParams   | DRM Parameters | An alternative way to set parameters for DRM playback. _This attribute is only used when the `integration` attribute is not set._                               |

**Example DRM source with VuDRM specific headers**

To play videos protected using VUDRM, you need to supply a token. Replace the token `vualto-demo|2018-06-19T09:18:24Z|YSnJPmEceo` in the code below with your own token as well as the associated values of the keys `src` and `licenseUrl`.

```brightscript
vuDrmSource = {
  sources: [
    {
      src: "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/big-buck-bunny/big-buck-bunny.ism/manifest.mpd"
      type: "application/dash+xml"
      contentProtection: {
        integration: "widevine"
        licenseUrl: "https://widevine-proxy.drm.technology/proxy"
      }
    }
  ]
  drmHttpAgentHeaders: {
    "x-vudrm-token": "vualto-demo|2018-06-19T09:18:24Z|YSnJPmEceo"
    "Content-Type": "application/json"
  }
}
```

### DRM Parameters

The following key/value pairs are supported on the `drmParams` attribute of a Content Protection:

| Name             | Type   | Description                                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| KeySystem        | String | "playready" or "widevine". This value is case-insensitive. The default is an empty string.                                                                                                                                                                                                                                                                         |
| licenseRenewURL  | String | A URL location for sending license renewal requests. If not specified, the Roku OS will send renewal requests to the URL specified in the licenseServerURL. This only works with Widevine.                                                                                                                                                                         |
| licenseServerURL | String | A URL location of a license server. This URL may include CGI parameters.                                                                                                                                                                                                                                                                                           |
| serializationURL | String | A server address used for device provisioning                                                                                                                                                                                                                                                                                                                      |
| serviceCert      | String | The actual certificate string for Widevine purposes, which must be obtained out-of-band (OOB) by the channel. Leave this unset unless Widevine is used for DRM.                                                                                                                                                                                                    |
| lic_acq_window   | String | The maximum amount of time (in milliseconds) that a channel waits before rotating its Widevine DRM keys. The channel can generate a random wait time between 0 and the value specified in the **lic_acq_window** field, and use the random wait time to instruct when the Video node should make its next Widevine license request. _Available since Roku OS 10.5_ |

## Verizon Media specific Attributes

| name   | type                       | description                                                   |
| ------ | -------------------------- | ------------------------------------------------------------- |
| ads    | verizonMediaAds            | Verizon media ads API, contains ads and ad breaks information |
| assets | array of verizonMediaAsset | Verizon media assets API, contains assets information         |

## Methods

| Method                                                                          | Description                                                                                                                                            |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| addEventListener                                                                |                                                                                                                                                        |
| destroy                                                                         | Destroy the player.                                                                                                                                    |
| pause                                                                           | Pause playback.                                                                                                                                        |
| play                                                                            | Start playback.                                                                                                                                        |
| removeEventListener                                                             |                                                                                                                                                        |
| setCopyGuardManagementSystem(cgms as Integer)                                   | Sets Copy Guard Management System. Acceptable Values: `0` - No Copy Restriction,`1` - Copy No More,`2` - Copy Once Allowed,`3` - No Copying Permitted. |
| setDestinationRectangle(rect \{w,h,x,y} as roAssociativeArray)                  | Sets width, height, x, y of player.                                                                                                                    |
| setDestinationRectangle(w as Integer, h as Integer, x as Integer, y as Integer) | Sets width, height, x, y of player.                                                                                                                    |
| setMaxVideoResolution(width as Integer, height as Integer)                      | Sets maximum video resolution.                                                                                                                         |

## Verizon Media specific Methods

| Method | Description                                                                                                     |
| ------ | --------------------------------------------------------------------------------------------------------------- |
| skipAd | Skips Ad break if it is possible. This method is assigned directly to Player, due to roku specific architecture |

## Events

The event consists of:

- date (timestamp) of occurrence
- type (string) of the event
- extra data

There are several player events being emitted.

- `addedaudiotrack`: Fired when audio track has been added
- `addedtexttrack`: Fired when text track has been added
- `bitratechange`: Fired when the bitrate changes, the extra data emitted is the bitrate
- `canplay`: Fired when the player can resume playback of the media data, the extra data emitted is the currentTime
- `canplaythrough`: Fired when the player can resume playback of the media data and buffering is unlikely, the extra data emitted is the currentTime
- `destroy`: Fired when the player is destroyed, there is no extra data emitted along
- `durationchange`: Fired when the duration changes, the extra data emitted is the duration
- `emptied`: Fired when the player's source is cleared, there is no extra data emitted along
- `ended`: Fired when playback has stopped because the end of the media resource was reached, the extra data emitted is the currentTime
- `error`: Fired when an error occurs, the extra data emitted is an associative array e.g.:

```brightscript
{
    "error": "<string:error>",
    "errorObject": {
        "code": <integer:code>,
        "message": <string:message>
    }
}
```

- `loadeddata`: Fired when the player can render the media data at the current playback position for the first time, the extra data emitted is the currentTime
- `loadedmetadata`: Fired when the player determines the duration and dimensions of the media resource, the extra data emitted is the currentTime
- `pause`: Fired when the "paused" changes to true, the extra data emitted is the currentTime
- `play`: Fired when the "paused" changes to false, the extra data emitted is the currentTime
- `playing`: Fired when playback is ready to start after having been paused or delayed due to lack of media data, the extra data emitted is the currentTime
- `seeked`: Fired when the "seeking" changes to false after the current playback position was changed, the extra data emitted is the currentTime
- `seeking`: Fired when "seeking" changes to true, and the player has started seeking to a new position, the extra data emitted is the currentTime
- `sourcechange`: Fired when the player's source changes, the extra data emitted is an associative array e.g.:

```brightscript
{
    "source": {
        "sources": [
            {
                "liveOffset": 4,
                "nativeUiRendering": false,
                "contentProtection": {
                    "drmParams": {
                        KeySystem: "widevine"
                        licenseServerURL: "https://example.com/license"
                    }
                },
                "src": https://example.com/stream.mpd,
                "type": "dash"
            }
        ]
    }
}
```

- `timeupdate`: Fired when the current playback position changed as part of normal playback or in an especially interesting way, for example discontinuously, the extra data emitted is the currentTime

## Verizon Media specific Events

all events contain following data:

- `date` (timestamp) of occurrence
- `type` (string) of the event

### ads events:

all ads events contain additional field `ad` of type VerizonMediaAd e.g.:

```brightscript
{
    apiFramework: invalid
    companions: [...]
    creative: "b1dcbf39be7941338d91e0a68664875a"
    duration: 15.0694
    endTime: 431.729
    events: {...}
    extensions: [...]
    freeWheelParameters: {...}
    height: 0
    mimeType: "uplynk/m3u8"
    startTime: 416.66
    width: 0
}
```

- `adbegin `: fired when an ad begins
- `adcomplete`: fired when ad is completed
- `adend`: fired when ad ends
- `removead`: fired when ad is removed
- `adfirstquartile`: fired when the ad reaches the first quartile
- `admidpoint`: fired when the ad reaches the midpoint
- `adthirdquartile`: fired when the ad reaches the third quartile

### ad breaks events:

all ads events contain additional field `adBreak` of type VerizonMediaAdBreak e.g.:

```brightscript
{
    ads: [
	    {
		    apiFramework: invalid
		    companions: [...]
		    creative: "b813270206374fd0bc6ebafc6d60c551"
		    duration: 15.0462
		    endTime: 431.706
		    events: {...}
		    extensions: [...]
		    freeWheelParameters: {...}
		    height: 0
		    mimeType: "uplynk/m3u8"
		    startTime: 416.66
		    width: 0
		}
	]
    duration: 30.0692
    endTime: 446.729
    skipOffset: -1
    startTime: 416.66
}
```

- `adbreakbegin`: fired when ad break begins
- `adbreakend`: fired when ad break ends
- `updateadbreak`: fired when the ad break is updated
- `adbreakskip`: fired when ad break is skipped
- `addadbreak`: fired when ad break is added
- `removeadbreak`: fired when ad break is removed

### assets events:

all assets events contain additional field `asset` of type VerizonMediaAsset e.g.:

```brightscript
{
    assetId: "41afc04d34ad4cbd855db52402ef210e"
    audioOnly: 0
    boundaryDetails: invalid
    defaultPosterUrl: "https://x-default-stgec.uplynk.com/ausw/slices/41a/fb3a4cb9965b46678fa101477ffad8fb/41afc04d34ad4cbd855db52402ef210e/00000014.jpg"
    description: "Yahoo News - Unfiltered: GWAR Halloween - 3/1/19"
    duration: 415.659
    endTime: 415.659
    error: false
    externalId: ""
    hasAdultLanguage: false
    hasDrugSituations: false
    hasSexualSituations: false
    hasViolence: false
    isAd: false
    maxSlice: 101
    metadata: invalid
    movieRating: -1
    ownerId: "fb3a4cb9965b46678fa101477ffad8fb"
    posterUrl: "https://x-default-stgec.uplynk.com/ausw/slices/41a/fb3a4cb9965b46678fa101477ffad8fb/41afc04d34ad4cbd855db52402ef210e/00000014.jpg"
    rates: [
	    209
	    399
	    729
	    1620
	    2535
	]
    sliceDuration: 4.096
    startTime: 0
    thumbnailResolutions: [
	    {
		    bh: 128
		    bw: 128
		    height: 72
		    prefix: ""
		    width: 128
		}
	]
    thumbPrefix: "https://x-default-stgec.uplynk.com/ausw/slices/41a/fb3a4cb9965b46678fa101477ffad8fb/41afc04d34ad4cbd855db52402ef210e/"
    tvRating: -1
}
```

- `addasset`: fired when asset has been added
- `assetinforesponse`: fired when an asset info response is received. This event does not contain `asset` field but `response` VerizonMediaAssetInfoResponse.
- `removeasset`: fired when asset has been removed

### ping events:

- `pingerror`: fired when a Ping error has been received. Contains additional `error` (string) field.
- `pingresponse`: fired when a Ping response is received. Contains additional `response` of type VerizonMediaPingResponse field e.g.:

```brightscript
{
    ad_data: <Component: roAssociativeArray>
    aspect_ratio: 1.77778
    asset: "bcf7d78c4ff94c969b2668a6edc64278"
    audio_only: 0
    boundary_details: invalid
    default_poster_url: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/00000014.jpg"
    desc: "Build Series NYC - Allen Leech - 10/31/18"
    duration: 1178.03
    error: 0
    external_id: ""
    is_ad: 0
    max_slice: 287
    meta: <Component: roAssociativeArray>
    movie_rating: -1
    owner: "fb3a4cb9965b46678fa101477ffad8fb"
    poster_url: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/00000014.jpg"
    rates: <Component: roArray>
    rating_flags: 0
    slice_dur: 4.096
    storage_partitions: <Component: roArray>
    thumb_prefix: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/"
    thumbs: <Component: roArray>
    tv_rating: -1
}

```

### preplay events:

- `preplayresponse`: fired when a Ping response is received. Contains additional `response` of type VerizonMediaPreplayResponse field e.g.:

```brightscript
{
    ad_data: {...}
    aspect_ratio: 1.77778
    asset: "bcf7d78c4ff94c969b2668a6edc64278"
    audio_only: 0
    boundary_details: invalid
    default_poster_url: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/00000014.jpg"
    desc: "Build Series NYC - Allen Leech - 10/31/18"
    duration: 1178.03
    error: 0
    external_id: ""
    is_ad: 0
    max_slice: 287
    meta: {...}
    movie_rating: -1
    owner: "fb3a4cb9965b46678fa101477ffad8fb"
    poster_url: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/00000014.jpg"
    rates: [...]
    rating_flags: 0
    slice_dur: 4.096
    storage_partitions: [...]
    thumb_prefix: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/"
    thumbs: [...]
    tv_rating: -1
}

```
