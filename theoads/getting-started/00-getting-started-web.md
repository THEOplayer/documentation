---
sidebar_position: 0.2
sidebar_label: Web
---

# Web

Setting up THEOads requires some small changes to your THEOplayer build, as well as setting up a signaling server.

:::note
Currently only HLS streams are supported. In the future DASH and HESP streams will also be supported.
:::

## Prerequisites

### 1. Your THEOplayer SDK needs to have the 'theoads' feature enabled.

The THEOads feature is only included in the `@theoplayer/theoads` package which can be installed by executing the following command:

``` bash
npm install @theoplayer/theoads
```

### 2. You need to have a THEOplayer license which is compatible with THEOads

This can be done through [https://portal.theoplayer.com](https://portal.theoplayer.com).


## Integration

This guide assumes you know how to set up THEOplayer. For more information regarding this check out the [THEOplayer getting started](/theoplayer/getting-started/sdks/web/getting-started/).

### Google DAI library

Since THEOads integrates with Google DAI Pod Serving, it is required to load the Google DAI script on your page:

```html
<script type="text/javascript" src="https://imasdk.googleapis.com/js/sdkloader/ima3_dai.js"></script>
```

### Player configuration

To make use of the THEOads integration, only a specific source needs to be set:

```javascript
player.source = {
  sources: {
      src: 'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI',
      type: 'application/x-mpegurl',
      hlsDateRange: true
  },
  ads: [
      {
          integration: 'theoads',
          networkCode: 'NETWORK-CODE',
          customAssetKey: 'CUSTOM-ASSET-KEY',
          backdropDoubleBox: 'PATH-TO-DOUBLE-BOX-BACKDROP-IMAGE', // Optional
          backdropLShape: 'PATH-TO-L-SHAPE-BACKDROP-IMAGE' // Optional
      }
  ]
};
```

- Notice that the `src` is different as usual. For THEOads, a signaling server needs to be set up which acts as a proxy to parse the given manifest and insert the ad interstitials.
More information can be found [here](#signaling-server).
- The `hlsDateRange` flag needs to be set to `true` as the ad markers are done using `EXT-X-DATERANGE` tags.
- The `ads` object needs to have its integration set to `theoads`. Furthermore, the `networkCode` and `customAssetKey` needs to be set according to your configured Google account.


## More information

TODO LINK TO THE API REFERENCE ONCE IT IS PUBLIC