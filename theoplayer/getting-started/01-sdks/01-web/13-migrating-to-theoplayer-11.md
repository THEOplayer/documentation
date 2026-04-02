# Migrating to THEOplayer Web SDK 10.x

This article will guide you through updating from THEOplayer Web SDK version 10 (from version 9),
and the changes needed in your code.

## Update THEOplayer

Run the following command to install THEOplayer Web SDK version 10:

```bash
npm install theoplayer@10
```

If you're using the [Open Video UI for Web](/open-video-ui/web/) or one
of [our connectors](/theoplayer/connectors/web/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 10.

```bash
npm update @theoplayer/web-ui
npm update @theoplayer/conviva-connector-web
```

# Google DAI ad UI enabled by default

`GoogleImaConfiguration.useAdUiElementForSsai` is now enabled by default.
This allows Google DAI ads to show additional UI elements on top of the player if needed (such as a skip button for skippable ads).
See the [Google DAI documentation on `adUiElement`](https://developers.google.com/ad-manager/dynamic-ad-insertion/sdk/html5/reference/js/StreamManager#StreamManager)
for more information.

If you want to disallow ads with custom UI elements, you can manually set this option to `false` in your `GoogleImaConfiguration`.
This will instruct THEOplayer to use the (deprecated) [`StreamManager.setClickElement`](https://developers.google.com/ad-manager/dynamic-ad-insertion/sdk/html5/reference/js/StreamManager#setClickElement)
method instead. Note that the use of this deprecated API is discouraged, and may stop being supported in the future.

## Replace usages of deprecated APIs

Some properties and methods that were previously deprecated have been removed from the API.
Update your code to use the new APIs instead.

- Removed support for THEOlive sources using `source.integration = 'theolive'`.
  THEOlive sources must now have their `type` set to `'theolive'` instead.
- Removed `'verizon-media'` as a valid source integration ID for Uplynk sources (previously Verizon Media).
  Uplynk sources must now have their `integration` set to `'uplynk'` instead.
- Removed THEOlive publication events (`publicationloadstart`, `publicationloaded` and `publicationoffline`),
  use the equivalent distribution events instead (`distributionloadstart`, `endpointloaded` and `distributionoffline` respectively).
- Removed `PlayerConfiguration.verizonMedia`, use `PlayerConfiguration.uplynk` instead.
- Removed `PlayerConfiguration.vr`, since it was no longer used by the player.
- Removed `AdBreakEvent.ad`, use `AdBreakEvent.adBreak` instead.
- Removed `THEOplayerAdDescription` type, use `CsaiAdDescription` instead.
- Removed `MediaTailorSource.adParams`, use `MediaTailorSource.adsParams` instead.
- Removed `WebVTTRegion.identifier`, use `WebVTTRegion.id` instead.
