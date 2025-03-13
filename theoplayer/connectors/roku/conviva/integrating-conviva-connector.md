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

1. With the SDK and connector loaded, you can now proceed to initialize the player and Conviva connector along with it. To use the THEOConvivaConnector`m.convivaConnector.callFunc("configure", m.player, "MY_CUSTOMER_KEY", "MY_TOUCHSTONE_GATEWAY_URL", true)`
