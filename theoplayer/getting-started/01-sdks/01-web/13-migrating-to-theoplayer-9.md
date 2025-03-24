# Migrating to THEOplayer Web SDK 9.x

This article will guide your through updating from THEOplayer Web SDK version 9 (from version 8),
and the changes needed in your code.

## Update THEOplayer

Run the following command to install THEOplayer Web SDK version 9:

```bash
npm install theoplayer@9
```

If you're using the [Open Video UI for Web](/open-video-ui/web/) or one
of [our connectors](/theoplayer/connectors/web/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 9.

```bash
npm update @theoplayer/web-ui
npm update @theoplayer/conviva-connector-web
```

## VR now uses WebXR API

Virtual reality playback now always uses the [WebXR API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API),
instead of the (deprecated) [WebVR API](https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API).
The `PlayerConfiguration.vr.useWebXR` configuration flag is now deprecated and ignored.

For platforms that do not natively support WebXR, you may want to add
the [WebXR polyfill](https://github.com/immersive-web/webxr-polyfill) to your web page.
See [our VR guide](../../../how-to-guides/07-miscellaneous/04-vr.md#configuration) for instructions.

## Replace usages of deprecated APIs

Some properties and methods that were previously deprecated have been removed from the API.
Update your code to use the new APIs instead.

- Removed `THEOplayer.playerSuiteVersion`. Use `THEOplayer.version` instead.
- Removed the Verizon Media integration (`player.verizonMedia`). Use the Uplynk integration (`player.uplynk`) instead.
- Removed `MillicastSource.streamName`. Use `MillicastSource.src` instead.
- Removed `player.ads.theoads.replaceAdTagParameters`. Use `player.theoads.replaceAdTagParameters` instead.
