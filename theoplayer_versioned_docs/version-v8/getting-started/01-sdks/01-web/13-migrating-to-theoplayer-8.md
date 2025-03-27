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

## Replace Conviva pre-integration with Conviva connector

Until version 7, the Web SDK shipped with [Conviva](https://www.conviva.com/) support built into the SDK itself.
As of version 8, this has moved to a separate [Conviva connector](/theoplayer/connectors/web/conviva/).

1. Follow the [getting started guide for the Conviva connector](../../../external/web-connectors/conviva/README.md).
2. Remove any usages of the old [`source.analytics` API](pathname:///theoplayer/v7/api-reference/web/interfaces/SourceDescription.html#analytics)
   with an equivalent [`ConvivaConfiguration`](https://theoplayer.github.io/web-connectors/api/interfaces/Conviva_Connector.ConvivaConfiguration.html).
3. Replace any usages of the old [`player.analytics.conviva` API](pathname:///theoplayer/v7/api-reference/web/interfaces/Analytics.html#conviva)
   with an equivalent on the [`ConvivaConnector` API](https://theoplayer.github.io/web-connectors/api/classes/Conviva_Connector.ConvivaConnector.html).

## Replace Yospace pre-integration with Yospace connector

Until version 7, the Web SDK shipped with [Yospace SSAI](https://www.yospace.com/ssai) support built into the SDK itself.
As of version 8, this has moved to a separate [Yospace connector](/theoplayer/connectors/web/yospace/).

1. Follow the [getting started guide for the Yospace connector](../../../external/web-connectors/yospace/README.md).
2. Remove any usages of the old [`source.ssai` API](pathname:///theoplayer/v7/api-reference/web/interfaces/YospaceTypedSource.html#ssai)
   with an equivalent [`YospaceServerSideAdInsertionConfiguration`](https://theoplayer.github.io/web-connectors/api/interfaces/Yospace_Connector.YospaceServerSideAdInsertionConfiguration.html).
3. Replace any usages of the old [`player.yospace` API](pathname:///theoplayer/v7/api-reference/web/classes/Player.html#yospace)
   with an equivalent on the [`YospaceConnector` API](https://theoplayer.github.io/web-connectors/api/classes/Yospace_Connector.YospaceConnector.html).

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
