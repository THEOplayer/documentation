# Migrating to THEOplayer Roku SDK 9.x

This article will guide you through updating from THEOplayer Roku SDK version 9 (from version 1.5.0),
and the changes needed in your code.

## Verizon Media is not included

NOTE: If you're using the Verizon Media version of the SDK (including Uplynk SSAI), that functionality has been removed in the 9.0 version of the SDK. The functionality is planned to be re-added in a future release, but is unsupported for 9.0.

## Update THEOplayer

Download the new pkg file from [https://cdn.myth.theoplayer.com/roku/9.0.0/THEOplayerSDK.pkg](https://cdn.myth.theoplayer.com/roku/9.0.0/THEOplayerSDK.pkg). If you're including the pkg file when packaging your application, replace the previous pkg file with the 9.0 pkg file. Note that the file name is no longer `THEOplayerSDK-default.pkg`. It is now `THEOplayerSDK.pkg`. If you're loading the pkg from the remote URL at runtime, change the URL in your ComponentLibrary node to point to the new SDK.

```xml
<ComponentLibrary id="THEOsdk" uri="https://cdn.myth.theoplayer.com/roku/9.0.0/THEOplayerSDK.pkg" />
```

## Replace or remove usages of deprecated APIs

- Removed `THEOplayer.configuration`. Use `THEOplayer.configure(configuration as object)` instead.
- Removed `THEOplayer.listener`. Use `THEOplayer.addEventListener` instead. Note that the method signature of `THEOplayer.addEventlistener` and `THEOplayer.removeEventListener` have now changed to be:
  `addEventListener(eventType as string, listenerOwner as roSGNode, listener as string)`
  `removeEventListener(eventType as string, listenerOwner as roSGNode, listener as string)`
- Removed the option to pass an associative array to `setDestinationRectangle`. Instead pass each property individually:
  `setDestinationRectangle(w = 0 as integer, h = 0 as integer, x = 0 as integer, y = 0 as integer)`
- Removed the Verizon Media integration (`player.verizonMedia`). This functionality is planned to be re-added in a future release.
- Removed `THEOplayer.skipAds`. This functionality is planned to be re-added in a future release.
- Removed `THEOplayer.playerSuiteVersion`.
