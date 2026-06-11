# Ping

This article explains how to use the Uplynk Ping API.

The Ping API for Uplynk allows users of their CMS to receive updates about SSAI on running live-streams or provide better playback position beaconing for Video on demand. The Ping API is used together with the Preplay API because the latter provides a session to be used with the Ping API.

This connector allows the user to specify a source for Preplay, and enable or disable certain features of the Ping API. The player will then perform these Ping calls internally, without the user having to write their own Ping client. The response of Ping calls will be exposed for external handling if necessary.

**Feature Assumptions** We assume the SSAI information returned through the Ping API to be of a certain format, which we compile from examples and our own testing. The documentation does not define the structure of this payload very well and only states that it is "like the object returned in Preplay requests", though the formats are not a one-on-one match.

**Assumptions**

* THEOplayer assumes the availability of the Ping API and Uplynk content servers to be 100%, since these identify and provide the necessary streams for playback with this feature.
* THEOplayer assumes application developers have a notion of the Ping API, namely any extra parameters to be appended to the requests to Uplynk (e.g. for correct ad insertion). As documented in <https://api-docs.uplynk.com/#Develop/Preplayv2.htm>
* THEOplayer assumes application developers provide proper ID's of the Assets they want to play back, as well as the proper content protection level.

## Configuring Ping[​](#configuring-ping "Direct link to Configuring Ping")

The connector allows specification of the desired features of the Ping API as listed [in the official Ping API documentation](https://api-docs.uplynk.com/#Develop/Preplayv2.htm#Features).

In the THEOplayer-Connector-Uplynk, these features can be activated through the `pingConfiguration` property in the SSAI description:

```kotlin
  val ssaiDescription = UplynkSsaiDescription
    .Builder()
    .prefix("https://content.uplynk.com")
    .assetType(UplynkAssetType.ASSET)
    .assetIds( your list of asset IDs )
    .preplayParameters( your linkedMapOf preplay parameters)
    .contentProtected(false)
    .pingConfiguration(
      UplynkPingConfiguration.Builder()
        .adImpressions(true)
        .freeWheelVideoViews(false)
        .linearAdData(false)
        .build()
    )
    .build()

```

By default, the ping API is disabled for all sessions. To enable it, the `ad.cping=1` parameter must be added to your preplay request. In addition to enabling the API, you must also notify the server of the features you want to support for this viewing session. To specify which features you'd like to enable, you add the`ad.pingf={some value}` parameter to the playback token. The value of the parameter is detailed in the official Ping Documentation.

Ping is enabled and `ad.pingf` is set to a proper value when the `UplynkPingConfiguration` has one or more of the `adImpressions`, `freeWheelVideoViews` or `linearAdData` configuration set to `true`.

If you attempt to call the API without passing in the `ad.cping` parameter, you can throw off the server's ability to make ad event calls correctly.

Sample Preplay URL with `ad.cping`:

`https://content.uplynk.com/preplay/cc829785506f46dda4c605abdf65392b.json?ad=adserver&ad.cping=1&ad.pingf=3`

The default value for `UplynkPingConfiguration` has `adImpressions`, `freeWheelVideoViews` and `linearAdData` all set to false, ie, Ping API will not be used.

## Ping requests[​](#ping-requests "Direct link to Ping requests")

When the Ping API is enabled, THEOplayer will call the Ping URL located at:

```text
{prefix}/session/ping/{sessionID}.json?v=3&pt={currentTime}&ev={event}&ft={freeWheelTime}

```

Where:

* `{prefix}`: Is the prefix URL from the Preplay response.

* `{sessionID}`: Is the session ID from the Preplay response.

* `{currentTime}`: Mandatory parameter. This is the current player time in seconds.

* `{event}`: Is the current Ping event. An event should only be passed when playback starts or when a viewer seeks to a new position. Valid values are:

  * **start**: Pass this event, along with `pt=0`, when the player starts playback. This lets the server know where playback starts and allows the server to fire start events as needed.
  * **seek**: Pass this event when a viewer seeks. This resets the timeline to prevent inadvertently firing events for skipped ads.

* `{freeWheelTime}`: Indicates the playback position, in seconds, right before a viewer seeks to a different position in the timeline. This property is mandatory when the freeWheelVideoViews is used.

## Ping Response[​](#ping-response "Direct link to Ping Response")

When performed correctly, a Ping request will return a JSON response which is decoded into a `PingResponse`.

The ping response includes:

* nextTime: A new beacon will be scheduled when the player's currentTime passes this value. In case the value is -1, no further beacons will be scheduled.

* ads: Will be interpreted in order to create AdBreak's and Ad's as well as expose Ad information through the THEOplayer instance's `ads.scheduledAds` property.

  <!-- -->

  * ads.breaks.timeOffset will be used in order to determine the start time of the ad break (in seconds).

  * ads.breaks.ads will be looped in order to extract the list of ad's in an UplynkAdBreak:

    <!-- -->

    * apiFramework - Indicates the API Framework for the ad (e.g., VPAID).
    * companions - List of companion ads that go with the ad.
    * mimeType - Indicates the ad's Internet media type (aka mime-type)
    * creative - If applicable, indicates the creative to display.
    * events - Object containing all of the events for this ad. Each event type contains an array of URLs.
    * width - If applicable, indicates the width of the creative.
    * height - If applicable, indicates the height of the creative.
    * duration - Indicates the duration, in seconds, of an ad's encoded video.
    * extensions - Contains the custom set of VAST extensions returned by the ad server.
    * fwParameters - If the ad response provided by FreeWheel contains creative parameters, they will be reported as name-value pairs within this object.

  * ads.breaks.duration - Indicates the duration of the ad break.

  * ads.breaks.position - Indicates the position of the ad break. Valid values are: preroll | midroll | postroll | pause | overlay.

  * ads.breaks.type - Indicates the ad break type. Valid values are: "linear", "nonlinear".

The ping response can be retrieved from the `onPingResponse(:)` callback method by setting an `addListener` to the `UplynkConnector` instance.

| Callback method | Description                             | Arguments                                           |
| --------------- | --------------------------------------- | --------------------------------------------------- |
| onPingResponse  | Fired when a Ping response is received. | `pingResponse` argument contains the `PingResponse` |

## Related articles[​](#related-articles "Direct link to Related articles")

* [Uplynk - Preplay](/documentation/pr-preview/pr-690/theoplayer/connectors/android/uplynk/preplay.md)
* [Uplynk - Ads](/documentation/pr-preview/pr-690/theoplayer/connectors/android/uplynk/ads.md)
