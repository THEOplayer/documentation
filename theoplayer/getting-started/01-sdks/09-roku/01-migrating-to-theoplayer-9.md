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

## Update Connectors to the 9.0 version

If you are using any of the connectors for Roku, update them to the 9.0 version as well.

```xml
<ComponentLibrary id="THEOConvivaConnector" uri="https://cdn.myth.theoplayer.com/roku/9.0.0/THEOConvivaConnector.pkg" />
<ComponentLibrary id="THEOComscoreConnector" uri="https://cdn.myth.theoplayer.com/roku/9.0.0/THEOComscoreConnector.pkg" />
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
- Removed the `content` property on cues in the metadata track in `THEOplayer.textTracks`. Use `rawContent` instead.
- Removed the `cues` property on tracks in `THEOplayer.textTracks`. Use `activeCues` instead.

## Update metadata cue parsing and retention

The 9.0 release changes how metadata cues are being emitted from the THEOplayer. The `content` property has been renamed `rawContent` and now returns the raw metadata object that is emitted by the Roku video node. This allows for handling a wider variety of metadata schemas, but it does also move some of the parsing responsibility onto the client layer. Also the `cues` property on metadata tracks has been removed in favor of only exposing the current `activeCues`. The logic on how long to retain cues should currently be done in the client application. In future releases we plan to do more fine tuned parsing of different metadata structures, such as emsg, and also improve the logic on how long cues remain active.

## Stream resume behavior changes for live content

When resuming a paused live stream, the behavior now depends on the `setEnableTrickPlay` setting:

- With TrickPlay disabled (`setEnableTrickPlay = false`)
  stream automatically seeks to the live position upon resume.
- With TrickPlay enabled (`setEnableTrickPlay = true`)
  stream resumes from the pause position by default.
  Exception: If the pause duration is long enough to cause Roku's buffer overflow (`pauseBufferOverflow = true`), the stream will seek to the live position.

Note: These changes only affect live streams. Video-on-Demand (VoD) stream behavior remains unchanged.
