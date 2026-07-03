---
title: Roku API Reference
description: Discover all properties and functions of THEOplayer.
sidebar_label: API references
sidebar_custom_props: { icon: '*️⃣' }
---

# Player API

The attributes, methods and events.

## Enums

| Name          | Type               | Description                                                       |
| ------------- | ------------------ | ----------------------------------------------------------------- |
| ErrorCategory | roAssociativeArray | Provides a dictionary of Error category names and integer values. |
| ErrorCode     | roAssociativeArray | Provides a dictionary of Error code names and integer values.     |
| Event         | roAssociativeArray | Provides a dictionary of Event type names and string values.      |

## Attributes

| Name                         | Type                           | Default | Access Permission | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------- | ------------------------------ | ------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ads                          | Ads                            | Ads     | read              | Provides events, properties and methods relating to ad playback in the player. See below for more info.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| audioTracks                  | roArray of roAssociativeArrays | []      | read              | Provides information about audio tracks detected automatically in video. Each Associative array has the following fields: id - track identifier, label - track name, language - track language, enabled - true if track is current track                                                                                                                                                                                                                                                                                                                   |
| autoplay                     | boolean                        | false   | read,write        | Whether the player should play the video as soon as it is able after the source has been set.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| controls                     | boolean                        | true    | read,write        | Allows to enable or disable player controls (`true` to show controls, `false` to hide controls).                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| currentTime                  | integer                        |         | read,write        | Current timestamp of video.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| duration                     | integer                        |         | read              | Duration of video.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| enableTrickPlay              | boolean                        | true    | read,write        | Whether trick playback of the media is enabled, and whether the remote buttons will allow trickplay. NOTE: `controls` must be set to `true` for this to have any effect.                                                                                                                                                                                                                                                                                                                                                                                   |
| subtitleSelectionPreferences | roAssociativeArray             |         | write             | The significance and priority order of the attributes and values for the subtitle tracks available in the video stream. The selected subtitle track is reflected in the `textTracks` with `mode` as "showing" when visible in full screen or "hidden" when not in full screen. Refer to `subtitleSelectionPreferences` section of Roku's [video node](https://developer.roku.com/en-au/docs/references/scenegraph/media-playback-nodes/video.md) documentation. To select a subtitle track, based on user input, use the `mode` field of the `textTracks`. |
| ended                        | boolean                        | false   | read              | Whether playback of the media is ended.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| errorObject                  | roAssociativeArray             |         | read              | The last error that occurred for the current source, if any.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| loop                         | boolean                        | false   | read,write        | Whether playback of the media is looped.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| muted                        | boolean                        | false   | read,write        | Set `true` to mute and `false` to un-mute the currently playing video                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| network                      | NetworkApi                     |         | read              | API node for network operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| paused                       | boolean                        | true    | read              | Whether the player is paused.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| poster                       | string                         |         | read,write        | The poster of the current source.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| seeking                      | boolean                        |         | read              | `true` when player is seeking, `false` when player is not seeking now.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| source                       | Source Description             |         | read,write        | Describes source of current video.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| src                          | string                         |         | read              | The current URL of the media resource.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| theolive                     | THEOlive API                   |         | read              | API node for THEOlive operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| textTracks                   | roArray of roAssociativeArrays | []      | read,write        | Provides information about text and metadata tracks detected automatically in video. Each Associative array has the following fields: id - track identifier, label - track description, language - track language, mode - determines track state, available values: disabled, showing, hidden, activeCues: the current cue for this track                                                                                                                                                                                                                  |
| version                      | string                         |         | read              | The version of the THEOplayer Roku SDK.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Source Description

The following key/value pairs are supported on the `source` attribute of the `THEOsdk:THEOplayer` :

| Name                | Type                                    | Description                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sources             | roArray or roAssociativeArray or string | A Typed Source or an array of Typed Sources or URLs or a URL. When specifying multiple source descriptions, the `sources` attribute will be interpreted as a playlist where the first typed source will play first and subsequent sources will play when its preceding typed source has ended.                                                 |
| title               | string                                  | The title of the media resource.                                                                                                                                                                                                                                                                                                               |
| description         | string                                  | The description of the media resource.                                                                                                                                                                                                                                                                                                         |
| poster              | string                                  | The URL of an image to optionally use as the poster for the media source. This is used for SDPosterUrl, HDPosterUrl, and FHDPosterUrl.                                                                                                                                                                                                         |
| live                | boolean                                 | Whether the asset is live or not.                                                                                                                                                                                                                                                                                                              |
| drmHttpAgentHeaders | roAssociativeArray                      | _Deprecated_ Optional. A key-value dictionary that contains additional HTTP headers that will be sent for DRM key/license requests. The keys represent the HTTP header names and the values represent their corresponding values. Use either `contentProtection.drmHeaders` or the `headers` property of the Key System Configuration instead. |
| ads                 | roArray                                 | An optional array of AdDescriptions.                                                                                                                                                                                                                                                                                                           |
| headers             | roArray                                 | An optional array of strings representing headers to include on the content requests. The strings follow the format of `"headerName:headerValue"`. Defaults to an empty array to clear any headers that were set on HttpAgent.                                                                                                                 |
| streamType          | string                                  | Optional. Whether the stream is `"vod"`, `"live"`, or `"dvr"`. Will override `live` if set.                                                                                                                                                                                                                                                    |
| textTracks          | roArray of TextTrackDescriptions        | Optional. An array of descriptions representing external text track files. If specified at this level, it will be applied to all sources in the `sources` array                                                                                                                                                                                |
| cmcd                | CmcdSourceConfiguration                 | Optional. CMCD configuration for this source. Overrides player-level CMCD configuration. See [CMCD Configuration](#cmcd-configuration).                                                                                                                                                                                                        |

### Typed Source

The following key/value pairs are supported on the `sources` attribute of a Source Description:

| Name              | Type                             | Description                                                                                                                            |
| ----------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| src               | string                           | The URL of the media resource.                                                                                                         |
| type              | string                           | The content type (MIME type) of the media resource. Possible values are `application/dash+xml`, `application/x-mpegURL` and `theolive` |
| playStart         | number                           | The position in the stream the user starts playback at. Use negative numbers to offset from the live edge.                             |
| contentProtection | Content Protection               | Parameters for DRM playback                                                                                                            |
| SDBifUrl          | string                           | "Base Index Frames" URL for SD trick mode.                                                                                             |
| HDBifUrl          | string                           | "Base Index Frames" URL for HD trick mode.                                                                                             |
| FHDBifUrl         | string                           | "Base Index Frames" URL for FHD trick mode.                                                                                            |
| ads               | roArray of AdDescriptions        | Array of the ad description for the ads to play during the content.                                                                    |
| profile           | string                           | Optional. The profile to use when making the discovery call for THEOlive streams.                                                      |
| ssai              | GoogleDaiConfiguration           | Optional. The configuration for playing this as a dynamic ad insertion asset.                                                          |
| embeddedTextTrack | string                           | Name of the embedded text track in the asset. Not necessary if the track is explicitly defined in the manifest.                        |
| textTracks        | roArray of TextTrackDescriptions | Optional. An array of descriptions representing external text track files.                                                             |

"Base Index Frames" or BIF, is an archive file format that contains a set of still images, also known as "trick play thumbnails", supporting enhanced fast-forward and rewind modes during video playback.

### Text Track Descriptions

| Name    | Type    | Description                                                                                                                           |
| ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| default | boolean | Optional. Is this the default text track. If true and no track is currently selected, this will be used over the Roku system default. |
| format  | string  | Optional. The format of the text track. Valid values are "ttml" and "webvtt". Use "ttml" for SMPTE-TT files.                          |
| kind    | string  | Optional. The kind of text track. Supported values are "captions" and "subtitles".                                                    |
| label   | string  | Optional. The label to show in menus for the text track.                                                                              |
| src     | string  | The URL for the text track file.                                                                                                      |
| srclang | string  | Optional. The language used in the text track. Can be the language name or an ISO 2 or 3 letter abbreviation.                         |

See [Roku's caption support guide](https://developer.roku.com/docs/developer-program/media-playback/closed-caption.md#closed-caption-support-summary) for what is supported for different stream and text track combinations.

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

### SSAI/DAI Configuration

The player supports Dynamic Ad Insertion (DAI) using Google DAI. This integration currently supports doing Server Side Ad Insertion (SSAI) on live streams. To enable this, add the `ssai` property to your source with your Google DAI information. You can listen for ad events emitted by Google DAI on the Ads API.

The following key/value pairs are supported on the `ssai` attribute of a Typed Source:

| Name             | Type               | Description                                                                      |
| ---------------- | ------------------ | -------------------------------------------------------------------------------- |
| integration      | string             | The type of DAI integration. The supported values are "google-dai" or "theoads". |
| apiKey           | string             | The API key for your DAI account.                                                |
| availabilityType | string             | The type of asset you are playing ("live" or "vod").                             |
| networkCode      | string             | The network code for your DAI account.                                           |
| assetKey         | string             | Optional. The asset key for your live asset. Not required for VOD assets.        |
| adTagParameters  | roAssociativeArray | Optional. Map of ad tag parameters configurable for ad targeting.                |

NOTE: It is not supported to use SSAI through this API at the same time as Client-side Ad Insertion (CSAI) through the Ad Sources configuration.

### Content Protection

The following key/value pairs are supported on the `contentProtection` attribute of a Typed Source:

| Name                | Type               | Description                                                                                                                                                                                                                                                              |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| integration         | string             | Optional. The type of DRM integration this is. Previously, this was the key system the player should use ("widevine" or "playready"). That is a deprecated usage, but currently supported. Ignored if the `drmParams` property is used.                                  |
| licenseUrl          | string             | _Deprecated_ The license acquisition URL. Use either `contentProtection.widevine.licenseAcquisitionURL` or `contentProtection.playready.licenseAcquisitionURL` instead.                                                                                                  |
| certificate         | string             | _Deprecated_ The actual certificate string for Widevine purposes, which must be obtained out-of-band (OOB) by the channel. Use `contentProtection.widevine.certificate` instead.                                                                                         |
| drmParams           | DRM Parameters     | Optional. An alternative way to set parameters for DRM playback that maps to the Roku Content Node's `drmParams` property. _If specified, this is used over the `integration` route._                                                                                    |
| drmHeaders          | roAssociativeArray | Optional. A key-value dictionary that contains additional HTTP headers that will be sent for DRM key/license requests. The keys represent the HTTP header names and the values represent their corresponding values. This should only be used together with `drmParams`. |
| widevine            | Key System Config  | Optional. The configuration for Widevine DRM for this source. If both `widevine` and `playready` are specified, the order specified in `preferredKeySystems` will be used.                                                                                               |
| playready           | Key System Config  | Optional. The configuration for Playready DRM for this source. If both `widevine` and `playready` are specified, the order specified in `preferredKeySystems` will be used.                                                                                              |
| preferredKeySystems | Array of strings   | Optional. The preferred key systems to use. The key systems will be tried in the order specified. If not specified, `widevine` will be preferred over `playready`.                                                                                                       |

NOTE: Playready is not supported with HLS streams on Roku, so even if set to be preferred, it will be ignored for HLS streams.

### Key System Config

The following key/value pairs are supported on the `widevine` and `playready` attributes of the `contentProtection` configuration:

| Name                  | Type               | Description                                                                                                                                                                                                          |
| --------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| licenseAcquisitionURL | string             | The license acquisition URL.                                                                                                                                                                                         |
| certificate           | string             | Optional. The actual certificate string for Widevine purposes, which must be obtained out-of-band (OOB) by the channel.                                                                                              |
| headers               | roAssociativeArray | Optional. A key-value dictionary that contains additional HTTP headers that will be sent for DRM key/license requests. The keys represent the HTTP header names and the values represent their corresponding values. |

**Example DRM source with VuDRM specific headers**

To play videos protected using VUDRM, you need to supply a token. Replace the token `vualto-demo|2018-06-19T09:18:24Z|YSnJPmEceo` in the code below with your own token as well as the associated values of the keys `src` and `licenseUrl`.

```brightscript
vuDrmSource = {
  sources: [
    {
      src: "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/big-buck-bunny/big-buck-bunny.ism/manifest.mpd",
      type: "application/dash+xml",
      contentProtection: {
        integration: "vudrm",
        widevine: {
          licenseAcquisitionURL: "https://widevine-proxy.drm.technology/proxy"
        }
      }
    }
  ]
  drmHttpAgentHeaders: {
    "x-vudrm-token": "vualto-demo|2018-06-19T09:18:24Z|YSnJPmEceo",
    "Content-Type": "application/json"
  }
}
```

### DRM Parameters

The `drmParams` attribute of the `contentProtection` is an associative array that represents the `drmParams` property of the Roku Content Node metadata. For a full list of the available properties and which versions of Roku they are available for, please visit [the Roku documentation for `drmParams`](https://developer.roku.com/docs/developer-program/getting-started/architecture/content-metadata.md#digital-rights-management-drm-control-attributes). The following key/value pairs have been available for a while on the `drmParams` attribute. Note that, unlike most properties in Brightscript, _these property names are case sensitive_:

| Name             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keySystem        | string | Can be set to either "playready" or "widevine".                                                                                                                                                                                                                                                                                                                              |
| licenseRenewURL  | string | Optional. A URL location for sending license renewal requests. If not specified, the Roku OS will send renewal requests to the URL specified in the licenseServerURL. This only works with Widevine.                                                                                                                                                                         |
| licenseServerURL | string | A URL location of a license server. This URL may include CGI parameters.                                                                                                                                                                                                                                                                                                     |
| serializationURL | string | Optional. A server address used for device provisioning.                                                                                                                                                                                                                                                                                                                     |
| serviceCert      | string | Optional. The actual certificate string for Widevine purposes, which must be obtained out-of-band (OOB) by the channel. Leave this unset unless Widevine is used for DRM.                                                                                                                                                                                                    |
| lic_acq_window   | string | Optional. The maximum amount of time (in milliseconds) that a channel waits before rotating its Widevine DRM keys. The channel can generate a random wait time between 0 and the value specified in the **lic_acq_window** field, and use the random wait time to instruct when the Video node should make its next Widevine license request. _Available since Roku OS 10.5_ |

### Ads API

The Ads API exposes the following properties, methods, and events.

| Property          | Type                           | Access Permission | Description                                                                                                   |
| ----------------- | ------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| currentAdBreak    | AdBreak                        | read              | The current AdBreak if ads are playing, or invalid if they are not playing.                                   |
| currentAds        | roArray of Ads                 | read              | Array of the current Ads in the current AdBreak, or invalid if ads are not playing.                           |
| dai               | DAI API                        | read              | API exposing some methods for SSAI playback.                                                                  |
| events            | roAssociativeArray             | read              | Map of the event types the Ads API will emit.                                                                 |
| playing           | boolean                        | read              | Whether an ad is currently playing.                                                                           |
| rafProxy          | RafProxyNode                   | read              | roSGNode that exposes data from the internal RAF library.                                                     |
| scheduledAdBreaks | roArray of roAssociativeArrays | read              | Array of the scheduled breaks that haven't played. These may either be a source object or a resolved AdBreak. |
| scheduledAds      | roArray of Ads                 | read              | Array of the ads that are scheduled and have not played. Only shows one break's ads with VAST.                |

| Method                                                                                       | Description                                                                                                |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| addEventListener(eventType as string, listenerOwner as roSGNode, eventListener as string)    | Add a listener for the specified player event.                                                             |
| removeEventListener(eventType as string, listenerOwner as roSGNode, eventListener as string) | Remove a listener for the specified player event.                                                          |
| schedule(adDescription as AdDescription, sourceDescription as roAssociativeArray)            | Schedule an ad break. Optionally, pass a source description for use in custom server-side ad integrations. |

| Event            | Class        | Description                                                   |
| ---------------- | ------------ | ------------------------------------------------------------- |
| adbegin          | AdEvent      | The current creative has begun playing.                       |
| adbreakbegin     | AdBreakEvent | The player is entering an ad break.                           |
| adbreakend       | AdBreakEvent | The player is exiting an ad break.                            |
| adbuffering      | AdEvent      | The current ad is buffering during playback.                  |
| addadbreak       | AdBreakEvent | An ad break has been manually added.                          |
| adend            | AdEvent      | The current ad has completed playing.                         |
| aderror          | Event        | There was an error loading or playing an ad.                  |
| adexitrequested  | Event        | The user pressed the back button while a CSAI ad was playing. |
| adfirstquartile  | AdEvent      | The viewer has watched the first quartile of the current ad.  |
| adimpression     | AdEvent      | The ad has begun playing.                                     |
| adloaded         | Event        | The XML for an ad has been loaded.                            |
| admidpoint       | AdEvent      | The viewer has watched the half of the current ad.            |
| adsmanagerloaded | Event        | When the RAF ad manager has been initialized.                 |
| adthirdquartile  | AdEvent      | The viewer has watched the third quartile of the current ad.  |

NOTE: when playing CSAI ads, if the user presses the back button on the remote, the back button press will not be
captured by `onKeyEvent` listeners. To allow your application to handle this back button press, the application
should listen for the `adexitrequested` event on the Ads API and handle the exit logic there. Otherwise, it takes
a second back button press to exit the player.

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

| Property    | Type               | Description                                                                                                          |
| ----------- | ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| ads         | roArray            | An array containing the Ads in the AdBreak.                                                                          |
| customData  | roAssociativeArray | An associative array with any additional information for this ad break.                                              |
| id          | string             | The identifier of the ad break. For Google DAI, this is the pod index of the ad break.                               |
| integration | string             | The integration that generated the AdBreak. Currently the only supported value is `csai`.                            |
| maxDuration | integer            | The length of the break in seconds.                                                                                  |
| timeOffset  | integer            | The time in the video at which the ad break should play, in seconds. 0 indicates preroll, and -1 indicates postroll. |

The Ad object is an associative array that can have the following properties:

| Property     | Type               | Description                                                                          |
| ------------ | ------------------ | ------------------------------------------------------------------------------------ |
| adBreak      | AdBreak            | The AdBreak this Ad belongs to.                                                      |
| adSystem     | string             | The ad system used to load this ad.                                                  |
| clickThrough | string             | The clickthrough URL for this ad.                                                    |
| companions   | roArray            | An array of any CompanionAds associated with this ad.                                |
| creativeId   | string             | The creative ID for this ad.                                                         |
| customData   | roAssociativeArray | An associative array with any additional information for this ad.                    |
| duration     | integer            | The duration of this ad.                                                             |
| height       | integer            | The height of the creative for this ad.                                              |
| id           | string             | The ad ID for this ad.                                                               |
| integration  | string             | The integration that generated the ad. Currently the only supported value is `csai`. |
| resourceUri  | string             | The URI for the creative played in this Ad.                                          |
| type         | string             | The type of ad. Currently only `linear` is supported.                                |
| width        | integer            | The width of the creative for this ad.                                               |

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

The RAF proxy node has several fields that can be observed to consume data generated by the internal RAF library. This way, an application can access information traditionally available via the `getLibVersion`, `setRafTrackingCallback` and `setAdBufferRenderCallback` methods on RAF. You can also set some content metadata on RAF by calling the methods on the proxy node.

| Property           | Type               | Access Permission | Description                                                               |
| ------------------ | ------------------ | ----------------- | ------------------------------------------------------------------------- |
| bufferRenderUpdate | roAssociativeArray | read              | An associative array with the properties `adUrl`, `eventType`, and `ctx`. |
| libVersion         | string             | read              | The string indicating the version of the RAF library.                     |
| trackingUpdate     | roAssociativeArray | read              | An associative array with the properties `adUrl`, `eventType`, and `ctx`. |

| Method                                                    | Description                                                                                                                                                                                 |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| setContentGenre(genres as string, kidsContent as boolean) | Set the content genre and whether the content is for kids on RAF. Equivalent to calling `Roku_Ads().setContentGenre(genres, kidsContent)`.                                                  |
| setContentId(id as string)                                | Set the content ID on RAF. Equivalent to calling `Roku_Ads().setContentId(id)`.                                                                                                             |
| setContentLength(length as integer)                       | Set the content length on RAF. Equivalent to calling `Roku_Ads().setContentLength(length)`. The content length for RAF is set automatically to the content duration if not called manually. |

#### DAI API

The DAI API is accessed via `player.ads.dai` and exposes the following methods for Google DAI streams.

| Method                                                                                       | Description                                             |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| addEventListener(eventType as string, listenerOwner as roSGNode, eventListener as string)    | Add a listener for the specified DAI ad event.          |
| removeEventListener(eventType as string, listenerOwner as roSGNode, eventListener as string) | Remove a listener for the specified DAI ad event.       |
| setRafMetadata(contentId, contentGenre, kidsContent, contentLength)                          | Set metadata about the content on RAF for ad targeting. |

##### setRafMetadata

Sets metadata about the playing content on RAF (Roku Advertising Framework) for ad targeting. This should be called before playback begins.

| Parameter     | Type    | Default | Description                            |
| ------------- | ------- | ------- | -------------------------------------- |
| contentId     | string  | —       | The ID of the content that is playing. |
| contentGenre  | string  | ""      | A CSV list of genres for this content. |
| kidsContent   | boolean | false   | Whether this content is aimed at kids. |
| contentLength | integer | 0       | The length of the content in seconds.  |

**Example:**

```brightscript
player.ads.dai@.setRafMetadata("movie-123", "action,adventure", false, 7200)
```

##### Events

The DAI API emits the following ad events, which can be listened to via `addEventListener`. These events are also dispatched through the main Ads API for DAI streams.

| Event            | Class        | Description                                                  |
| ---------------- | ------------ | ------------------------------------------------------------ |
| adbegin          | AdEvent      | The current ad has begun playing.                            |
| adbreakbegin     | AdBreakEvent | The player is entering an ad break.                          |
| adbreakend       | AdBreakEvent | The player is exiting an ad break.                           |
| adend            | AdEvent      | The current ad has completed playing.                        |
| aderror          | Event        | There was an error loading or playing an ad.                 |
| adfirstquartile  | AdEvent      | The viewer has watched the first quartile of the current ad. |
| admidpoint       | AdEvent      | The viewer has watched half of the current ad.               |
| adsmanagerloaded | Event        | The DAI stream manager has been initialized.                 |
| adthirdquartile  | AdEvent      | The viewer has watched the third quartile of the current ad. |

## Methods

| Method                                                                                       | Description                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| addEventListener(eventType as string, listenerOwner as roSGNode, eventListener as string)    | Add a listener for the specified player event.                                                                                                                                     |
| addIntegration(integration as object)                                                        | Adds an Integration.                                                                                                                                                               |
| configure(configuration as THEOPlayerConfiguration)                                          | Configure the SDK, passing in the license (`{license: "MY_THEO_LICENSE"}`).                                                                                                        |
| destroy                                                                                      | Destroy the player.                                                                                                                                                                |
| getVideoNode                                                                                 | Returns the interior Roku video node.                                                                                                                                              |
| pause                                                                                        | Pause playback.                                                                                                                                                                    |
| play                                                                                         | Start playback.                                                                                                                                                                    |
| removeEventListener(eventType as string, listenerOwner as roSGNode, eventListener as string) | Remove the specified listener for the specified player event.                                                                                                                      |
| removeIntegration(integration as object)                                                     | Removes an Integration.                                                                                                                                                            |
| setCopyGuardManagementSystem(cgms as Integer)                                                | Sets Copy Guard Management System. Acceptable Values: `0` - No Copy Restriction,`1` - Copy No More,`2` - Copy Once Allowed,`3` - No Copying Permitted.                             |
| setDestinationRectangle(w as Integer, h as Integer, x as Integer, y as Integer)              | Sets width, height, x, y of player.                                                                                                                                                |
| setMaxVideoResolution(width as Integer, height as Integer)                                   | Sets maximum video resolution.                                                                                                                                                     |
| setPlayerFocus(focused as Boolean, focusReceiver (optional) as roSGNode)                     | Gives or removes the focus from the internal player. If passing `false`, you may pass an optional roSGNode to receive the focus. If not passed, the THEOplayer SDK receives focus. |

### Player Configuration

The PlayerConfiguration object is passed to the configure method. It is an associative array with the following properties:

| Property   | Type               | Description                                                                          |
| ---------- | ------------------ | ------------------------------------------------------------------------------------ |
| license    | string             | Your THEO license. Optional if `licenseUrl` is specified.                            |
| licenseUrl | string             | The URL from which to load your THEO license. Optional if `license` is specified.    |
| theolive   | roAssociativeArray | The configuration for THEOlive. Optional.                                            |
| cmcd       | CmcdConfiguration  | The configuration for CMCD. Optional. See [CMCD Configuration](#cmcd-configuration). |

#### THEOlive Configuration

| Property          | Type               | Description                                                                                                                                               |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| discoveryUrl      | string             | Optional. The discovery URL for your THEOlive deployment. If present, it will be tried before `discoveryUrls`.                                            |
| discoveryUrls     | roArray of strings | Array of discovery URLs for your THEOlive deployment. If `theoLive` config is omitted, the default URL is 'https://discovery.theo.live/v2/publications/'. |
| externalSessionId | string             | A session ID to use for your THEOlive session. This can tie an application session to a THEOlens session.                                                 |

#### CMCD Configuration

The CMCD configuration enables Common Media Client Data reporting. It can be set at the player level (in `PlayerConfiguration.cmcd`) or at the source level (in `SourceDescription.cmcd`). CMCDv1 will be used for all streams. CMCDv2 events will also be used if `eventEndpoints` is set.

**CmcdConfiguration** (player-level):

| Property          | Type                                 | Description                                          |
| ----------------- | ------------------------------------ | ---------------------------------------------------- |
| externalSessionId | string                               | Optional. External session identifier for CMCD.      |
| userId            | string                               | Optional. User identifier for CMCD reporting.        |
| eventEndpoints    | roArray of CmcdEndpointConfiguration | Optional. Array of endpoints to send CMCD events to. |

**CmcdSourceConfiguration** (source-level, extends CmcdConfiguration):

| Property          | Type                                 | Description                                                                                                                         |
| ----------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| externalSessionId | string                               | Optional. External session identifier for CMCD. This is recommended to use to join CMCDv1 and CMCDv2 sessions together.             |
| userId            | string                               | Optional. User identifier for CMCD reporting.                                                                                       |
| eventEndpoints    | roArray of CmcdEndpointConfiguration | Optional. Array of endpoints to send CMCD events to.                                                                                |
| sessionId         | string                               | Optional. Session identifier for this source. Only used for CMCDv2 event mode. A Roku-generated ID is used for CMCDv1 request mode. |

**CmcdEndpointConfiguration**:

| Property | Type   | Description                                     |
| -------- | ------ | ----------------------------------------------- |
| url      | string | The URL of the endpoint to send CMCD events to. |

**Merge Behavior**: When CMCD is configured at both the player and source level, the source configuration takes precedence for scalar properties (`externalSessionId`, `userId`, `sessionId`). The `eventEndpoints` arrays from both configurations are combined, with duplicates removed based on URL (source endpoints take priority).

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
| getHeaders() as roAssociativeArray                     | Returns a map of all headers currently configured through the network API.                       |

## Events

The event consists of:

- `date`: (string) ISO timestamp for when the event was emitted.
- `type`: (string) of the event.
- Extra properties depending on the event type.

There are several player events being emitted.

- `activequalitychanged`: Fired when the playing rendition changes. The event data includes the rendition's quality.
- `addedaudiotrack`: Fired when audio track has been added. The event data includes the added track.
- `addedtexttrack`: Fired when text track has been added. The event data includes the added track.
- `canplay`: Fired when the player can start playback of the media data. The event data includes the current time.
- `canplaythrough`: DEPRECATED: Fired when the player can finish playback of the media data and buffering is unlikely. The event data includes the current time.
- `currentsourcechange`: Fired when the current source playing on the video node changes. The event data includes the new source.
- `destroy`: Fired when the the player is destroyed. There is no extra data on the event.
- `durationchange`: Fired when the duration changes. The event data includes the duration.
- `emptied`: Fired when the player's source is cleared. There is no extra data on the event.
- `ended`: Fired when playback has stopped because the end of the media resource was reached. The event data includes the current time.
- `error`: Fired when an error occurs. The event data contains an associative array e.g.:
  ```brightscript
  {
      "error": "<string:error>",
      "errorObject": {
          "code": <integer:code>,
          "message": <string:message>
      }
  }
  ```
- `intenttofallback`: Fired when the player has encountered an error playing a THEOlive stream and is going to try to playback a different stream. It also includes data about the error that is triggering fallback.
- `loadeddata`: Fired when the player can render the media data at the current playback position for the first time. The event data includes the current time.
- `loadedmetadata`: Fired when the player determines the duration and dimensions of the media resource. The event data includes the current time.
- `pause`: Fired when the `paused` property changes to `true`. The event data includes the current time.
- `play`: Fired when the `play` method is called. The event data includes the current time.
- `playing`: Fired when playback is ready to start after having been paused or delayed due to lack of media data. The event data includes the current time.
- `endpointloaded`: Fired when the player has loaded the data for a THEOlive source and is ready to begin loading the stream. The event data includes information about the endpoint.
- `distributionloadstart`: Fired when the player begins to load the data for a THEOlive source. The event data includes the distribution ID.
- `distributionloaded`: Fired when a THEOlive distribution has been successfully loaded. The event data includes information about the distribution.
- `distributionoffline`: Fired when a THEOlive stream is not available for playback. The event data includes the distribution ID.
- `seeked`: Fired when the `seeking` property changes to `false` after the current playback position was changed. The event data includes the current time.
- `seeking`: Fired when `seeking` changes to `true`, and the player has started seeking to a new position. The event data includes the current time.
- `sourcechange`: Fired when the player's source changes. The event data is the source as an associative array e.g.:
  ```brightscript
  {
      "source": {
          "sources": [
              {
                  "contentProtection": {
                      "drmParams": {
                          "keySystem": "widevine"
                          "licenseServerURL": "https://example.com/license"
                      }
                  },
                  "src": "https://example.com/stream.mpd",
              }
          ]
      }
  }
  ```
- `timeupdate`: Fired when the current playback position changed as part of normal playback or in an especially interesting way, for example discontinuously. The event data is the currentTime.

### THEOlive Data

The THEOlive events provide additional information about the THEOlive distribution and endpoint. The `distributionloadstart` event has the distribution ID as the `src` property. The `distributionoffline` event has the distribution ID as the `distributionId` property. The `intenttofallback` event contains the reason for the fallback as the `reason` property. However, the other THEOlive events contain more detailed information about the distribution and endpoint.

For the `distributionloaded` event, the following properties are available on the Distribution object:

| Property       | Type                 | Description                                          |
| -------------- | -------------------- | ---------------------------------------------------- |
| deleted        | boolean              | Optional. Whether the distribution has been deleted. |
| endpoints      | roArray of Endpoints | An array of endpoints.                               |
| externalId     | string               | Optional. The distribution's external ID.            |
| id             | string               | The distribution's ID.                               |
| maxBitrate     | integer              | Optional. The maximum bitrate of the distribution.   |
| name           | string               | The distribution's name.                             |
| organizationId | string               | Optional. The organization's THEOlive ID.            |

The `endpointloaded` event comes with the following properties:

| Property       | Type               | Description                                       |
| -------------- | ------------------ | ------------------------------------------------- |
| channelName    | string             | The channel/distribution's name.                  |
| distributionId | string             | The ID used as the `src` for the THEOlive source. |
| endpoint       | roAssociativeArray | The Endpoint that loaded.                         |

The `endpoint` property contains an Endpoint object with the following information:

| Property     | Type   | Description                                                                          |
| ------------ | ------ | ------------------------------------------------------------------------------------ |
| cdn          | string | Optional. The CDN used for this endpoint.                                            |
| provider     | string | Optional. The provider of this endpoint.                                             |
| src          | string | The URL of the stream for this endpoint.                                             |
| srcType      | string | The type of the stream for this endpoint.                                            |
| adSrc        | string | _Deprecated_ Optional. The URL for the ad stream. Only for v1/v2 endpoints.          |
| daiAssetKey  | string | _Deprecated_ Optional. The DAI identifier for this stream. Only for v1/v2 endpoints. |
| hlsMpegTsSrc | string | _Deprecated_ Optional. The HLS MPEG-TS stream URL. Only for v1/v2 endpoints.         |
| hlsSrc       | string | _Deprecated_ Optional. The HLS stream URL. Only for v1/v2 endpoints.                 |

# Capabilities API

The THEO SDK now also exposes a couple of helper methods for getting the capabilities of the Roku device. These methods are available on the `Capabilities` object, which can be accessed via `THEOsdk:Capabilities`, separate from the THEOplayer.

The Capabilities object has the following methods

| Method             | Description                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| getWidevineLevel() | Returns an object with information about the Widevine level supported by the device. |
| getHevcSupport()   | Returns an object with information about the HEVC support on the device.             |

The `getWidevineLevel` method returns an object with the following properties:

| Property | Type    | Description                                                                           |
| -------- | ------- | ------------------------------------------------------------------------------------- |
| level    | string  | A string of a number representing the Widevine level supported by the device.         |
| multikey | boolean | A boolean indicating whether the device supports multiple keys.                       |
| tee      | boolean | A boolean indicating whether the device supports Trusted Execution Environment (TEE). |
| version  | string  | A string representing the Widevine version supported by the device.                   |

The `getHevcSupport` method returns an object with the following properties:

| Property              | Type    | Description                                                           |
| --------------------- | ------- | --------------------------------------------------------------------- |
| isSupported           | boolean | A boolean indicating whether the device supports HEVC.                |
| supportsMain10Profile | boolean | A boolean indicating whether the device supports the Main 10 profile. |
| videoMode             | string  | A string representing the video mode supported by the device.         |

Example usage:

```brightscript
m.capabilities = createObject("roSgNode", "THEOsdk:Capabilities")
widevineLevel = m.capabilities.callFunc("getWidevineLevel")
hevcSupport = m.capabilities.callFunc("getHevcSupport")
```
