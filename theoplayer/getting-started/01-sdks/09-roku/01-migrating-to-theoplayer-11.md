# Migrating to THEOplayer Roku SDK 11.x

This article will guide you through updating to THEOplayer Roku SDK version 11 (from version 10.x),
and the changes needed in your code. If you are upgrading from a version before 10.x, please follow
the [migration guide for 10.x](../../../../theoplayer_versioned_docs/version-v10/getting-started/01-sdks/09-roku/01-migrating-to-theoplayer-10.md) first.

## Update THEOplayer

Download the new pkg file from [the THEOplayer portal](https://portal.theoplayer.com). If you're including the pkg file when packaging your application, replace the previous pkg file with the new pkg file. If you're loading the pkg from the remote URL at runtime, change the URL in your ComponentLibrary node to point to the new SDK's URL.

```xml
<ComponentLibrary id="THEOsdk" uri="pkg:/components/THEOplayerSDK.pkg" />
```

## Update Connectors to the 11.x version

If you are using any of the connectors for Roku, update them to the 11.x version as well. Either download them from [the THEOplayer portal](https://portal.theoplayer.com) and add them to your application, or load them directly from a URL.

```xml
<ComponentLibrary id="THEOConvivaConnector" uri="pkg:/components/THEOConvivaConnector.pkg" />
<ComponentLibrary id="THEOComscoreConnector" uri="pkg:/components/THEOComscoreConnector.pkg" />
<ComponentLibrary id="THEOAEPConnector" uri="pkg:/components/THEOAEPConnector.pkg" />
<ComponentLibrary id="THEOMuxConnector" uri="pkg:/components/THEOMuxConnector.pkg" />
```

## Replace or remove usages of deprecated APIs

Some properties and methods that were previously deprecated have been removed from the API.
Update your code to use the new APIs instead.

- Removed the `THEOplayer.events.bitratechange` event type. Use the `THEOplayer.events.activequalitychanged` event type instead.
