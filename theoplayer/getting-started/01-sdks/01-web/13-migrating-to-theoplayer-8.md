# Migrating to THEOplayer Web SDK 8.x

This article will guide your through updating from THEOplayer Web SDK version 8 (from version 7),
and the changes needed in your code.

## Update THEOplayer

Run the following command to install THEOplayer Web SDK version 8:

```bash
npm install theoplayer@8
```

If you're using the [Open Video UI for Web](/open-video-ui/web/) or one of [our connectors](/theoplayer/connectors/web/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 8.

```bash
npm update @theoplayer/web-ui
npm update @theoplayer/conviva-connector-web
```

## Use `csai` for client-side ads with default integration

Until version 7, the default integration for client-side VAST and VMAP advertisements was named `'theo'`.
In version 8, this integration is now called `'csai'`. Although the old name will continue working for a while,
we still recommend updating your code:

```diff
  player.source = {
    sources: {
      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
    },
    ads: [
      {
-       integration: 'theo',
+       integration: 'csai',
        sources: 'https://cdn.theoplayer.com/demos/ads/vast/dfp-preroll-no-skip.xml',
      },
    ],
  };
```

If you're using a different ad integration such as Google IMA, no action is needed.
