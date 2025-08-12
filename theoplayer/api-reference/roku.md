---
title: Roku API Reference
description: Discover all properties and functions of THEOplayer.
sidebar_label: API references
sidebar_custom_props: { icon: '*️⃣' }
---

# Player API

The attributes, methods and events.

## Enums

| Name          | Type              | Description                                                       |
| ------------- | ----------------- | ----------------------------------------------------------------- |
| ErrorCategory | associative array | Provides a dictionary of Error category names and integer values. |
| ErrorCode     | associative array | Provides a dictionary of Error code names and integer values.     |
| Event         | associative array | Provides a dictionary of Event type names and string values.      |

## Attributes

| Name                         | Type                        | Default | Access Permission | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------- | --------------------------- | ------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ads                          | Ads                         | Ads     | read              | Provides events, properties and methods relating to ad playback in the player. See below for more info.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| audioTracks                  | array of associative arrays | []      | read              | Provides information about audio tracks detected automatically in video. Each Associative array has the following fields: id - track identifier, label - track name, language - track language, enabled - true if track is current track                                                                                                                                                                                                                                                                                                                   |
| autoplay                     | boolean                     | false   | read,write        | Whether the player should play the video as soon as it is able after the source has been set.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| controls                     | boolean                     | true    | read,write        | Allows to enable or disable player controls ( `true` to show controls, `false` to hide controls).                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| currentTime                  | integer                     |         | read,write        | Current timestamp of video.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| duration                     | integer                     |         | read              | Duration of video.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| enableTrickPlay              | boolean                     | true    | read,write        | Whether trick playback of the media is enabled, and whether the remote buttons will allow trickplay. NOTE: `controls` must be set to `true` for this to have any effect.                                                                                                                                                                                                                                                                                                                                                                                   |
| subtitleSelectionPreferences | associative array           |         | write             | The significance and priority order of the attributes and values for the subtitle tracks available in the video stream. The selected subtitle track is reflected in the `textTracks` with `mode` as "showing" when visible in full screen or "hidden" when not in full screen. Refer to `subtitleSelectionPreferences` section of Roku's [video node](https://developer.roku.com/en-au/docs/references/scenegraph/media-playback-nodes/video.md) documentation. To select a subtitle track, based on user input, use the `mode` field of the `textTracks`. |
| ended                        | boolean                     | false   | read              | Whether playback of the media is ended.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| errorObject                  | associative array           |         | read              | The last error that occurred for the current source, if any.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| loop                         | boolean                     | false   | read,write        | Whether playback of the media is looped.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| muted                        | boolean                     | false   | read,write        | Set `true` to mute and `false` to un-mute the currently playing video                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| network                      | NetworkApi                  |         | read              | API node for network operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| paused                       | boolean                     | true    | read              | Whether the player is paused.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| poster                       | string                      |         | read,write        | The poster of the current source.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| seeking                      | boolean                     |         | read              | `true` when player is seeking, `false` when player is not seeking now.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| source                       | Source Description          |         | read,write        | Describes source of current video.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| src                          | string                      |         | read              | The current URL of the media resource.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| theolive                     | THEOlive API                |         | read              | API node for THEOlive operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| textTracks                   | array of associative arrays | []      | read,write        | Provides information about text and metadata tracks detected automatically in video. Each Associative array has the following fields: id - track identifier, label - track description, language - track language, mode - determines track state, available values: disabled, showing, hidden, activeCues: the current cue for this track                                                                                                                                                                                                                  |

### Source Description

The following key/value pairs are supported on the `source` attribute of the `THEOsdk:THEOplayer` :

| Name                | Type               | Description                                                                                                                                                                                                                                               |
| ------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sources             | roArray            | An array of Typed Sources. When specifying multiple source descriptions, the sources attribute will be interpreted as a playlist where the first typed source will play first and subsequent sources will play when its preceding typed source has ended. |
| poster              | string             | The URL of an image to optionally use as the poster for the media source. This is used for SDPosterUrl, HDPosterUrl, and FHDPosterUrl.                                                                                                                    |
| live                | boolean            | Whether the asset is live or not.                                                                                                                                                                                                                         |
| drmHttpAgentHeaders | roAssociativeArray | An optional key-value dictionary that contains additional HTTP headers that will be sent for DRM key/license requests. The keys represent the HTTP header names and the values represent their corresponding values.                                      |
| ads                 | roArray            | An optional array of AdDescriptions.                                                                                                                                                                                                                      |
| headers             | roArray            | An optional array of strings representing headers to include on the content requests. The strings follow the format of `"headerName:headerValue". Defaults to an empty array to clear any headers that were set on HttpAgent.                             |

### Typed Source

The following key/value pairs are supported on the `sources` attribute of a Source Description:

| Name              | Type                      | Description                                                                                                                            |
| ----------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| src               | String                    | The URL of the media resource.                                                                                                         |
| type              | String                    | The content type (MIME type) of the media resource. Possible values are `application/dash+xml`, `application/x-mpegURL` and `theolive` |
| title             | String                    | The title of the media resource.                                                                                                       |
| description       | String                    | The description of the media resource.                                                                                                 |
| playStart         | Number                    | The position in the stream the user starts playback at. Use negative numbers to offset from the live edge.                             |
| contentProtection | Content Protection        | Parameters for DRM playback                                                                                                            |
| SDBifUrl          | String                    | "Base Index Frames" URL for SD trick mode.                                                                                             |
| HDBifUrl          | String                    | "Base Index Frames" URL for HD trick mode.                                                                                             |
| FHDBifUrl         | String                    | "Base Index Frames" URL for FHD trick mode.                                                                                            |
| ads               | roArray of AdDescriptions | Array of the ad description for the ads to play during the content.                                                                    |
| embeddedTextTrack | string                    | Name of the embedded text track in the asset. Not necessary if the track is explicitly defined in the manifest.                        |

"Base Index Frames" or BIF, is an archive file format that contains a set of still images, also known as "trick play thumbnails", supporting enhanced fast-forward and rewind modes during video playback.

### Ad Descriptions

| Name           | Type               | Description                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sources        | AdSource or string | Either an AdSource or the URL of the ad XML to load.                                                                                                                                                                                                                                                                                                                                                                       |
| integration    | string             | The kind of ad integration this uses. Currently the only supported value is `csai`.                                                                                                                                                                                                                                                                                                                                        |
| timeOffset     | string or number   | An optional value determining when to show the ad. It can either be the number of seconds representing the timecode in the video when the ad should play, or it can be `start` or `end` to play the ad either before or after the video. Additionally it could be a percent of the content's duration, like `25%`, or a timecode in the format `HH:MM:SS`. NOTE: This is for VAST ads only. Do not use this with VMAP ads. |
| replaceContent | boolean            | An optional value for whether this ad tag should replace content when the ad plays. Valid only for midrolls. Defaults to false.                                                                                                                                                                                                                                                                                            |

NOTE: when scheduling ads, VAST ads cannot be scheduled in the middle of the time covered by a VMAP ad tag. For instance, if you have a VMAP preroll and postroll in a single ad tag, you could not schedule midrolls in between them. However, if you had separate VMAP preroll and postroll tags, you could place a VAST midroll tag in between the two.

#### Ad Sources

| Name | Type   | Description                                                                                                                                                        |
| ---- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| src  | string | The URL of the XML file to load for the ad break.                                                                                                                  |
| type | string | The optional type of the ad. Supported values are either `vast` or `vmap`. Otherwise the default value is inferred from the AdDescription's `timeOffset` property. |

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

```
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
| licenseRenewURL  | String | A URL location for sending license renewal requests. If not specified, the Roku OS will send renewal requests to the URL specified in the licenseServerURL. This only works with widevine.                                                                                                                                                                         |
| licenseServerURL | String | A URL location of a license server. This URL may include CGI parameters.                                                                                                                                                                                                                                                                                           |
| serializationURL | String | A server address used for device provisioning                                                                                                                                                                                                                                                                                                                      |
| serviceCert      | String | The actual certificate string for Widevine purposes, which must be obtained out-of-band (OOB) by the channel. Leave this unset unless Widevine is used for DRM.                                                                                                                                                                                                    |
| lic_acq_window   | String | The maximum amount of time (in milliseconds) that a channel waits before rotating its Widevine DRM keys. The channel can generate a random wait time between 0 and the value specified in the **lic_acq_window** field, and use the random wait time to instruct when the Video node should make its next Widevine license request. _Available since Roku OS 10.5_ |

### Ads API

The Ads API exposes the following properties, methods, and events.

| Property          | Type                 | Access Permission | Description                                                                                                   |
| ----------------- | -------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| currentAdBreak    | AdBreak              | read              | The current AdBreak if ads are playing, or invalid if they are not playing.                                   |
| currentAds        | array of Ads         | read              | Array of the current Ads in the current AdBreak, or invalid if ads are not playing.                           |
| events            | assocarray           | read              | Map of the event types the Ads API will emit.                                                                 |
| playing           | boolean              | read              | Whether an ad is currently playing.                                                                           |
| rafProxy          | RafProxyNode         | read              | roSGNode that exposes data from the internal RAF library.                                                     |
| scheduledAdBreaks | array of assocarrays | read              | Array of the scheduled breaks that haven't played. These may either be a source object or a resolved AdBreak. |
| scheduledAds      | array of Ads         | read              | Array of the ads that are scheduled and have not played. Only shows one break's ads with VAST.                |

| Method                                                                                       | Description                                       |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| addEventListener(eventType as string, listenerOwner as roSGNode, eventListener as string)    | Add a listener for the specified player event.    |
| removeEventListener(eventType as string, listenerOwner as roSGNode, eventListener as string) | Remove a listener for the specified player event. |
| schedule(adDescription as AdDescription)                                                     | Schedule an ad break.                             |

| Event            | Class        | Description                                                  |
| ---------------- | ------------ | ------------------------------------------------------------ |
| adbegin          | AdEvent      | The current creative has begun playing.                      |
| adbreakbegin     | AdBreakEvent | The player is entering an ad break.                          |
| adbreakend       | AdBreakEvent | The player is exiting an ad break.                           |
| adbuffering      | AdEvent      | The current ad is buffering during playback.                 |
| addadbreak       | AdBreakEvent | An ad break has been manually added.                         |
| adend            | AdEvent      | The current ad has completed playing.                        |
| aderror          | Event        | There was an error loading or playing an ad.                 |
| adfirstquartile  | AdEvent      | The viewer has watched the first quartile of the current ad. |
| adimpression     | AdEvent      | The ad has begun playing.                                    |
| adloaded         | Event        | The XML for an ad has been loaded.                           |
| admidpoint       | AdEvent      | The viewer has watched the half of the current ad.           |
| adsmanagerloaded | Event        | When the RAF ad manager has been initialized.                |
| adthirdquartile  | AdEvent      | The viewer has watched the third quartile of the current ad. |

#### AdEvent and AdBreakEvent

The AdEvent is an event object with the follow properties:

| Property | Type    | Description                                                                 |
| -------- | ------- | --------------------------------------------------------------------------- |
| type     | string  | The current AdBreak if ads are playing, or invalid if they are not playing. |
| date     | integer | The current epoch time in milliseconds.                                     |
| ad       | Ad      | The ad associated with the event.                                           |

The AdBreakEvent exposes the same properties as the AdEvent, but adds in a property with the current ad break:

| Event   | Class   | Description                        |
| ------- | ------- | ---------------------------------- |
| adBreak | AdBreak | The ad break the event relates to. |

#### AdBreak

The AdBreak object is an associative array that can have the following properties:

| Property    | Type       | Description                                                                                                          |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| ads         | roArray    | An array containing the Ads in the AdBreak.                                                                          |
| customData  | assocarray | An associative array with any additional information for this ad break.                                              |
| integration | string     | The integration that generated the AdBreak. Currently the only supported value is `csai`.                            |
| maxDuration | integer    | The length of the break in seconds.                                                                                  |
| timeOffset  | integer    | The time in the video at which the ad break should play, in seconds. 0 indicates preroll, and -1 indicates postroll. |

The Ad object is an associative array that can have the following properties:

| Property     | Type       | Description                                                                          |
| ------------ | ---------- | ------------------------------------------------------------------------------------ |
| adBreak      | AdBreak    | The AdBreak this Ad belongs to.                                                      |
| adSystem     | string     | The ad system used to load this ad.                                                  |
| clickThrough | string     | The clickthrough URL for this ad.                                                    |
| companions   | roArray    | An array of any CompanionAds associated with this ad.                                |
| creativeId   | string     | The creative ID for this ad.                                                         |
| customData   | assocarray | An associative array with any additional information for this ad.                    |
| duration     | integer    | The duration of this ad.                                                             |
| height       | integer    | The height of the creative for this ad.                                              |
| id           | string     | The ad ID for this ad.                                                               |
| integration  | string     | The integration that generated the ad. Currently the only supported value is `csai`. |
| resourceUri  | string     | The URI for the creative played in this Ad.                                          |
| type         | string     | The type of ad. Currently only `linear` is supported.                                |
| width        | integer    | The width of the creative for this ad.                                               |

The CompanionAd object is an associative array that can have the following properties:

| Property     | Type    | Description                                         |
| ------------ | ------- | --------------------------------------------------- |
| adSlotId     | string  | The ad slot id for this companion ad, if any.       |
| clickthrough | string  | The clickthrough URL for this companion ad, if any. |
| height       | integer | The height of the creative.                         |
| resourceUri  | string  | The URI of the creative.                            |
| provider     | string  | The provider of the companion ad, if any.           |
| width        | integer | The width of the creative.                          |

#### RafProxyNode

The RAF proxy node has several fields that can be observed to consume data generated by the internal RAF library. This way, an application can access information traditionally available via the `getLibVersion`, `setRafTrackingCallback` and `setAdBufferRenderCallback` methods on RAF.

| Property           | Type       | Access Permission | Description                                                     |
| ------------------ | ---------- | ----------------- | --------------------------------------------------------------- |
| bufferRenderUpdate | assocarray | read              | An associative array with the properties `eventType` and `ctx`. |
| libVersion         | string     | read              | The string indicating the version of the RAF library.           |
| trackingUpdate     | assocarray | read              | An associative array with the properties `eventType` and `ctx`. |

## Methods

| Method                                                                                       | Description                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| addEventListener(eventType as string, listenerOwner as roSGNode, eventListener as string)    | Add a listener for the specified player event.                                                                                                                                     |
| addIntegration                                                                               | Adds an Integration.                                                                                                                                                               |
| configure(configuration as THEOPlayerConfiguration)                                          | Configure the SDK, passing in the license ({license: "MY_THEO_LICENSE"}).                                                                                                          |
| destroy                                                                                      | Destroy the player.                                                                                                                                                                |
| getVideoNode                                                                                 | Returns the interior Roku video node.                                                                                                                                              |
| pause                                                                                        | Pause playback.                                                                                                                                                                    |
| play                                                                                         | Start playback.                                                                                                                                                                    |
| removeEventListener(eventType as string, listenerOwner as roSGNode, eventListener as string) | Remove the specified listener for the specified player event.                                                                                                                      |
| removeIntegration                                                                            | Removes an Integration.                                                                                                                                                            |
| setCopyGuardManagementSystem(cgms as Integer)                                                | Sets Copy Guard Management System. Acceptable Values: `0` - No Copy Restriction,`1` - Copy No More,`2` - Copy Once Allowed,`3` - No Copying Permitted.                             |
| setDestinationRectangle(w as Integer, h as Integer, x as Integer, y as Integer)              | Sets width, height, x, y of player.                                                                                                                                                |
| setMaxVideoResolution(width as Integer, height as Integer)                                   | Sets maximum video resolution.                                                                                                                                                     |
| setPlayerFocus(focused as Boolean, focusReceiver (optional) as roSGNode)                     | Gives or removes the focus from the internal player. If passing `false`, you may pass an optional roSGNode to receive the focus. If not passed, the THEOplayer SDK receives focus. |

### Player Configuration

The PlayerConfiguration object is passed to the configure method. It is an associative array with the following properties:

| Property   | Type       | Description                                                                       |
| ---------- | ---------- | --------------------------------------------------------------------------------- |
| license    | string     | Your THEO license. Optional if `licenseUrl` is specified.                         |
| licenseUrl | string     | The URL from which to load your THEO license. Optional if `license` is specified. |
| theolive   | assocarray | The configuration for THEOlive. Optional.                                         |

#### THEOlive Configuration

| Property          | Type             | Description                                                                                                                                               |
| ----------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| discoveryUrl      | string           | Optional. The discovery URL for your THEOlive deployment. If present, it will be tried before `discoveryUrls`.                                            |
| discoveryUrls     | Array of strings | Array of discovery URLs for your THEOlive deployment. If `theoLive` config is omitted, the default URL is 'https://discovery.theo.live/v2/publications/'. |
| externalSessionId | string           | A session ID to use for your THEOlive session. This can tie an application session to a THEOlens session.                                                 |

## THEOlive API

The THEOlive API exposes the following property.

| Property  | Type   | Description                                                                                                |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| authToken | string | Optional. The JWT to be included on THEOlive media requests in the Authorization header as a bearer token. |

## Network API

The Network API exposes the following methods.

| Method                                                 | Description                                                                                      |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| setHeader(headerName as string, headerValue as string) | Adds or overwrites a header for all media requests. Returns true if successful, false if not.    |
| removeHeader(headerName as string)                     | Sets the value of the named header to an empty string. Returns true if successful, false if not. |
| getHeader() as string                                  | Returns the current value of the given header if configured, and invalid otherwise.              |

## Events

The event consists of:

-   date (timestamp) of occurrence
-   type (string) of the event
-   extra data

There are several player events being emitted.

-   `addedaudiotrack`: Fired when audio track has been added
-   `addedtexttrack`: Fired when text track has been added
-   `bitratechange`: Fired when the bitrate changes, the extra data emitted is the bitrate
-   `canplay`: Fired when the player can resume playback of the media data, the extra data emitted is the currentTime
-   `canplaythrough`: Fired when the player can resume playback of the media data and buffering is unlikely, the extra data emitted is the currentTime
-   `destroy`: Fired when the the player is destroyed, there is no extra data emitted along
-   `durationchange`: Fired when the duration changes, the extra data emitted is the duration
-   `emptied`: Fired when the player's source is cleared, there is no extra data emitted along
-   `ended`: Fired when playback has stopped because the end of the media resource was reached, the extra data emitted is the currentTime
-   `error`: Fired when an error occurs, the extra data emitted is an associative array e.g.:

```brightscript
{
    "error": "<string:error>",
    "errorObject": {
        "code": <integer:code>,
        "message": <string:message>
    }
}
```

-   `intenttofallback`: Fired when the player has encountered an error playing a THEOlive stream and is going to try to playback a different stream. It also includes data about the error that is triggering fallback.
-   `loadeddata`: Fired when the player can render the media data at the current playback position for the first time, the extra data emitted is the currentTime
-   `loadedmetadata`: Fired when the player determines the duration and dimensions of the media resource, the extra data emitted is the currentTime
-   `pause`: Fired when the "paused" changes to true, the extra data emitted is the currentTime
-   `play`: Fired when the "paused" changes to false, the extra data emitted is the currentTime
-   `playing`: Fired when playback is ready to start after having been paused or delayed due to lack of media data, the extra data emitted is the currentTime
-   `endpointloaded`: Fired when the player has loaded the data for a THEOlive source and is ready to begin loading the stream
-   `distributionloadstart`: Fired when the player begins to load the data for a THEOlive source
-   `distributionoffline`: Fired when a THEOlive stream is not available for playback
-   `seeked`: Fired when the "seeking" changes to false after the current playback position was changed, the extra data emitted is the currentTime
-   `seeking`: Fired when "seeking" changes to true, and the player has started seeking to a new position, the extra data emitted is the currentTime
-   `sourcechange`: Fired when the player's source changes, the extra data emitted is an associative array e.g.:

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

-   `timeupdate`: Fired when the current playback position changed as part of normal playback or in an especially interesting way, for example discontinuously, the extra data emitted is the currentTime
