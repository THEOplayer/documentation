# Integrating Conviva Connector for the Roku SDK

## Prerequisites

In order to set up the Conviva Connector for Roku, you'll need to have these things:

- Your Conviva customer key (available your Conviva Pulse dashboard)
- Your Conviva Touchstone gateway URL, which should be in the format of `"https://MY_TOUCHSTONE_DOMAIN.ts-testonly.conviva.com/"`
- A Roku to develop on
- An app with the THEOPlayer SDK for Roku already integrated

## Integration

1. First you must download the THEO Conviva Connector as a component library. Add a ComponentLibrary node to your MainScene.brs file, giving it an id of `THEOConvivaConnector` and providing the URI for the THEOConvivaConnector.pkg:

```xml
<ComponentLibrary id="THEOConvivaConnector" uri="https://cdn.myth.theoplayer.com/roku/1.5.0/THEOConvivaConnector.pkg" />
```

1. Then in the Brightscript file for your MainScene, listen for the loading of the ComponentLibrary to complete by observing the `loadStatus` field.

```brightscript
sub Init()
    libraryNode = m.top.findNode("THEOConvivaConnector")
    libraryNode.observeField("loadStatus", "onLibraryLoadStatusChanged")
end sub

sub onLibraryLoadStatusChanged(event as object)
    libraryNode = event.getROSGNode()

    if libraryNode = invalid
        return
    end if

    if libraryNode.loadStatus = "ready"
		' Success! Enable the app to continue
    else if libraryNode.loadStatus = "failed"
		? "Failed to load component library, please check URL. "; libraryNode.uri
	end if
end sub
```

1. With the SDK and connector loaded, you can now proceed to initialize the player and Conviva connector along with it. To use the THEOConvivaConnector, first add a node to your SceneGraph file where you have integrated the THEOPlayer SDK:

```xml
<THEOsdk:THEOplayer id="VideoPlayerNativeControls" controls="true" />
<THEOConvivaConnector:THEOConvivaConnector id="THEOConvivaConnector" />
```

1. Then to configure the Conviva connector, in the Brightscript file for that SceneGraph, grab a reference to the connector node

```brightscript
m.player = m.top.findNode("VideoPlayerNativeControls")
m.convivaConnector = m.top.findNode("THEOConvivaConnector")
```

1. Then configure the connector by calling the configure method, passing the player instance and your Conviva customer key.

```brightscript
m.player = m.top.findNode("VideoPlayerNativeControls")
m.convivaConnector = m.top.findNode("THEOConvivaConnector")
m.convivaConnector.callFunc("configure", m.player, "MY_CUSTOMER_KEY")
```

NOTE: that if you want to debug first and use Conviva's Touchstone service to validate your integration, you can include the gateway URL and a debug parameter in the configure call:
`m.convivaConnector.callFunc("configure", m.player, "MY_CUSTOMER_KEY", "MY_TOUCHSTONE_GATEWAY_URL", true)`

1. Next, when you start playing the asset, call the `startSession` method and pass it the content metadata for the asset you're playing:

```brightscript
m.player.source = sourceDescription
contentMetadata = {
    defaultReportingResource: "MyCDN",
    playerName: "My Player",
    assetName: "My Asset Name",
    encodedFramerate: 24
}
m.convivaConnector.callFunc("startSession", contentMetadata)
```

See the API documentation for more on how to structure the content metadata for Conviva.

1. If you desire to monitor for CDN changes, you can optionally add a configuration for that after starting the session.
   `m.convivaConnector.callFunc("monitorCdnChanges", { mycdn: ["my-cdn.net"], theo: ["cdn.theoplayer.com"] })`
1. If the content metadata needs to change, you can update it by calling `setContentInfo`. This method accepts partial content metadata:
   `m.convivaConnector.callFunc( "setContentInfo", {assetName: "New Program"})`
1. When the video has stopped playing because it ended or the user exited, end the Conviva session
   `m.convivaConnector.callFunc("endSession")`
1. If you are exiting the player screen altogether, and destroying the player, make sure to destroy the connector at the same time, but before calling destroy on the SDK:

```brightscript
m.convivaConnector.callFunc("destroy")
m.convivaConnector = invalid

m.player.callFunc("destroy")
m.player = invalid
```
