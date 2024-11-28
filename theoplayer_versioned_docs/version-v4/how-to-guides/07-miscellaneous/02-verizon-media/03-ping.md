# Ping

This article explains how to use the Verizon Media's Ping API.

## SDKs

|   Web SDK    | Android SDK  |   iOS SDK    | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :----------: | :----------: | :----------: | :------: | :------------: | :------------: | :------: |
| Yes (2.64.0) | Yes (2.67.0) | Yes (2.67.0) |    No    |  Yes (2.67.0)  |       No       |   Yes    |

The Ping API of the Verizon Media Platform allows users of their CMS to receive updates about SSAI on running live-streams or provide better playback position beaconing for Video on demand. The Ping API is used together with the Preplay API because the latter provides a session to be used with the Ping API.

This pre-integration allows the integrator to specify a source for Preplay as integrated in other tickets (RDMP-287), and enable or disable certain features of the Ping API. The player will then perform these Ping calls internally, without the integrator having to write their own Ping client. The response of Ping calls will be exposed for external handling if necessary. The updates about SSAI received through the Ping API will be reflected in the player API, where information about SSAI through the Verizon Media Platform is already present.

**Version 3 of the Ping API will be implemented.**

**Playhead Position**
When Ping mentions time (and time mentioned below) relative compared to 0, the 0-point will be the start of playback. This might be a mismatch with the normal `player.currentTime`. Instead, this will be comparable with the time passed since `player.played.start(0)`.

**Feature Assumptions**
We assume the SSAI information returned through the Ping API to be of a certain format, which we compile from examples and our own testing. The documentation does not define the structure of this payload very well and only states that it is "like the object returned in Preplay requests", though the formats are not a one-on-one match.

This feature currently excludes client-side ad tracking and VPAID support.

**Assumptions**

- THEOplayer assumes the availability of the Ping API and Verizon content servers to be 100%, since these identify and provide the necessary streams for playback with this feature.
- THEOplayer assumes application developers have a notion of the Ping API, namely any extra parameters to be appended to the requests to Verizon (e.g. for correct ad insertion). As documented in https://docs.vdms.com/video/Content/Develop/Preplayv2.htm
- THEOplayer assumes application developers provide proper ID's of the Assets they want to play back, as well as the proper content protection level.

## Configuring Ping

The player allows specification of the desired features of the Ping API as listed [in the official Ping API documentation](https://docs.vdms.com/video/#Develop/Pingv3.htm#Features).

By default, the ping API is disabled for all sessions. To enable it, the `ad.cping=1` parameter must be added to your preplay request. If you attempt to call the API without passing in the `ad.cpingparameter`, you can throw off the server's ability to make ad event calls correctly.

In addition to enabling the API, you must also notify the server of the features you want to support for this viewing session. To specify which features you'd like to enable, you add the`ad.pingf={some value} `parameter to the playback token. The value of the parameter is detailed in the official Ping Documentation.

Sample playback URL with `cping`:

`https://content.uplynk.com/preplay/cc829785506f46dda4c605abdf65392b.json?ad=adserver&ad.cping=1&ad.pingf=3`

In the THEOplayer API, these features can be activated through a newly devices "ping" object in the source configuration:

##### Web SDK

```js
player.source = {
    sources: [{
        integration: 'vdms',
        ...
        ping: {
            linearAdData: true,
            adImpressions: false,
            freeWheelVideoViews: false
        }
        ...
    }]
}
```

##### Legacy Android SDK (4.12.x)

```java
VerizonMediaPingConfiguration pingConfiguration = new VerizonMediaPingConfiguration.Builder()
                .linearAdData(true) // Defaults to true if VerizonMediaAssetType is "CHANNEL" or "EVENT", otherwise false.
                .adImpressions(true) // Defaults to false
                .freeWheelVideoViews(true) // Defaults to false
                .build();

VerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder("assetID")
                .ping(pingConfiguration)
                .build();
```

##### iOS (/tvOS) SDK

```swift
let pingConfiguration = VerizonMediaPingConfiguration(
            linearAdData: true, // Defaults to true when VerizonMediaAssetType is "event" or "channel", otherwise false
            adImpressions: true, // Defaults to false
            freeWheelVideoViews: true) // Defaults to false

let verizonMediaSource = VerizonMediaSource(assetId: "assetID", ping: pingConfiguration)
```

##### Roku SDK

```brightscript
m.player.source = {
  "sources": [
    {
      ...
      ping: {
        linearAdData: true,
        adImpressions: false,
        freeWheelVideoViews: false
      }
      ...
    }
  ]
}
```

The `ping` object, as well as each separate property, are optional and any not specified will follow the defaults listed

|                       | Live content | VOD content |
| :-------------------: | :----------: | :---------: |
|    `linearAdData`     |   Enabled    |  Disabled   |
|    `adImpression`     |   Enabled    |  Disabled   |
| `freeWheelVideoViews` |   Enabled    |  Disabled   |

Another important note is that the official documentation does not permit certain options for certain content types (e.g.`adImpressions`must not be used with Live content). The player will respect this documentation and will not enable a feature that is not allowed for the current content type, even if explicitly enabled in the`ping`configuration.

If this configuration is not present, or none of the configuration options is activated, no use will be made of the Ping API.

## Ping requests

When the Ping API is enabled, THEOplayer will call the Ping URL located at:

```
{prefix}/session/ping/{sessionID}.json?v=3&pt={currentTime}&ev={event}&ft={freeWheelTime}
```

Where:

- `{prefix}`: Is the prefix URL from the Preplay response.
- `{sessionID}`: Is the session ID from the Preplay response.
- `{currentTime}`: Mandatory parameter. This is the current player time in seconds.

- `{event}`: Is the current Ping event. An event should only be passed when playback starts or when a viewer seeks to a new position.
  Valid values are:

  - **start**: Pass this event, along `withpt=0`, when the player starts playback. This lets the server know where playback starts and allows the server to fire start events as needed.
  - **seek**: Pass this event when a viewer seeks. This resets the timeline to prevent inadvertently firing events for skipped ads.

- `{freeWheelTime}`: Indicates the playback position, in seconds, right before a viewer seeks to a different position in the timeline. This property is mandatory when the freeWheelVideoViews is used.

## Ping Response

When performed correctly, a Ping request will return a JSON response. THEOplayer will interpret this response according to the following principles:

- next_time: A new beacon will be scheduled when the player's currentTime passes this value. In case the value is -1, no further beacons will be scheduled.
- currentBreakEnd: Will be used to update the end time of an ongoing ad-break in case the breakEnd was previously unknown. (Note Verizon Media by default requests 240s of ads in case the break length is unknown and will return all ads in the Ping response.)
- ads: Will be interpreted in order to display markers in the timeline as well as expose ad information through the player.verizonMedia.ads property.

  - ads.breaks.timeOffset will be used in order to determine the start time of the ad break (in seconds).
  - ads.breaks.ads will be looped in order to extract the ad information to be exposed in VerizonMediaAd in the THEO API:
    - ad.duration will serve as duration in VerizonMediaAd (in seconds)
    - ad.mimeType will serve as mimeType in VerizonMediaAd
    - ad.apiFramework will serve as apiFramework in VerizonMediaAd
    - ad.companions will serve as companions inVerizonMediaAd
    - ad.creative will serve as creative in VerizonMediaAd
    - ad.width will serve as width in VerizonMediaAd
    - ad.height will serve as height in VerizonMediaAd
    - ad.events will serve as events in VerizonMediaAd
    - ad.fw_parameters will serve as freeWheelParameters in VerizonMediaAd
  - ads.breaks.breakEnd will be used in order to determine the end of the ad break. Note that this property is optional, and the duration of an ad break can be unknown and updated at a later point.
  - ads.breaks.duration will be ignored by the player.

  For all ads and breaks added, adbreakbegin, adbreakend, adbegin, adend events will be dispatched. Additionally, when breakEnd gets updated, an updateadbreakevent will be dispatched.

- extensions: Will be ignored by THEOplayer.
- error: Errors will be reported back through the THEOplayer API.

The raw ping response can be retrieved by adding an event listener for the "pingresponse" event on the player.verizonMedia property.

|    Event     |               Description               |                              Event object                               |
| :----------: | :-------------------------------------: | :---------------------------------------------------------------------: |
| pingresponse | Fired when a Ping response is received. | event.response will contain the raw JSON response from the Ping server. |

##### Web SDK

```js
player.verizonMedia.addEventListener('pingresponse', function (event) {
  console.log(event.response); // Will print the raw Ping response.
});
```

##### Android (TV) SDK

```java
VerizonMediaPingConfiguration pingConfiguration = new VerizonMediaPingConfiguration.Builder()
                .linearAdData(true) // Defaults to true if VerizonMediaAssetType is "CHANNEL" or "EVENT", otherwise false.
                .adImpressions(true) // Defaults to false
                .freeWheelVideoViews(true) // Defaults to false
                .build();

VerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder("assetID")
                .ping(pingConfiguration)
                .build();
```

##### iOS (/tvOS) SDK

```swift
let pingConfiguration = VerizonMediaPingConfiguration(
            linearAdData: true, // Defaults to true when VerizonMediaAssetType is "event" or "channel", otherwise false
            adImpressions: true, // Defaults to false
            freeWheelVideoViews: true) // Defaults to false

let verizonMediaSource = VerizonMediaSource(assetId: "assetID", ping: pingConfiguration)
```

##### Roku SDK

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="TestScene" extends="Scene">
    <interface>
        <function name="pingresponse"/>
    </interface>

    <script type = "text/brightscript" >

        <![CDATA[

        function Init()
            m.player = m.top.findNode("TestPlayer")
            m.player.configuration = {
              "license": "" ' put the THEOplayer license between apostrophes
            }
            m.player.callFunc("addEventListener", m.player.Event.addadbreak, "pingresponse")

            setSource()
        end function

        function setSource()
	        ...
        end function

        function pingresponse(eventData)
			? "raw Ping response : "; eventData["response"]
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
- [Verizon Media - Ads](../../../how-to-guides/07-miscellaneous/02-verizon-media/02-ads.md)
