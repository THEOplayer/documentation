# Migrating to THEOplayer Roku SDK 10.x

This article will guide you through updating from THEOplayer Roku SDK version 10 (from version 9),
and the changes needed in your code.

## Update THEOplayer

Download the new pkg file from [the THEOplayer portal](https://portal.theoplayer.com). If you're including the pkg file when packaging your application, replace the previous pkg file with the new pkg file. If you're loading the pkg from the remote URL at runtime, change the URL in your ComponentLibrary node to point to the new SDK's URL.

```xml
<ComponentLibrary id="THEOsdk" uri="pkg:/components/THEOplayerSDK.pkg" />
```

## Update Connectors to the 10.x version

If you are using any of the connectors for Roku, update them to the 10.x version as well. Either download them from the [the THEOplayer portal](https://portal.theoplayer.com) and add them to your application, or load them directly from a URL.

```xml
<ComponentLibrary id="THEOConvivaConnector" uri="pkg:/components/THEOConvivaConnector.pkg" />
<ComponentLibrary id="THEOComscoreConnector" uri="pkg:/components/THEOComscoreConnector.pkg" />
```

## Replace or remove usages of deprecated APIs
