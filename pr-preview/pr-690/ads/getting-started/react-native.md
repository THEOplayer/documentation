# Getting started with OptiView Ads on React Native

This guide will get you started with OptiView Ads in your OptiView Player React Native SDK: configure the license, update dependencies and set the source description.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

<!-- -->

1. You need to have an OptiView Player license which is compatible with OptiView Ads. This can be done through the [player portal](https://portal.theoplayer.com).

2. You need a correctly deployed [OptiView Ads signaling service](/documentation/pr-preview/pr-690/ads/getting-started/signaling-service.md).

3. Enable the OptiView Ads integration based on the target platform:

   * Android & Android TV
   * iOS & tvOS
   * Web

   The Android SDK is modular-based, so to enable OptiView Ads, simply include the extension by setting this flag in your gradle.properties:

   ```groovy
   # Enable THEOplayer Extensions (default: disabled)
   THEOplayer_extensionTHEOads = true

   ```

   To enable OptiView Ads you can add the "THEOADS" feature flag to react-native-theoplayer.json (or theoplayer-config.json)

   Add a dependency to an OptiView Ads-enabled THEOplayer package:

   ```bash
   $ npm i theoplayer@npm:@theoplayer/theoads

   ```

   In addition, since OptiView Ads integrates with Google DAI Pod Serving, it is required to load the Google DAI script on your page:

   ```html
   <script src="https://imasdk.googleapis.com/js/sdkloader/ima3_dai.js"></script>

   ```

## Integration[​](#integration "Direct link to Integration")

This guide assumes you know how to set up React Native with OptiView Player. For more information regarding this check out the [OptiView Player getting started](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/getting-started.md).

### Player configuration[​](#player-configuration "Direct link to Player configuration")

To make use of the OptiView Ads integration, only a specific source needs to be set:

```javascript
player.source = {
  sources: {
    src: 'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI',
    type: 'application/x-mpegurl',
    hlsDateRange: true,
  },
  ads: [
    {
      integration: 'theoads',
      networkCode: 'NETWORK-CODE',
      customAssetKey: 'CUSTOM-ASSET-KEY',
    },
  ],
};

```

* Notice that the `src` is different as usual. For OptiView Ads, a signaling server needs to be set up which acts as a proxy to parse the given manifest and insert the ad interstitials. More information can be found [here](/documentation/pr-preview/pr-690/ads/getting-started/signaling-service.md).
* The `hlsDateRange` flag needs to be set to `true` as the ad markers are done using `EXT-X-DATERANGE` tags.
* The `ads` object needs to have its integration set to `theoads`. Furthermore, the `networkCode` and `customAssetKey` needs to be set according to your configured Google account.

## More information[​](#more-information "Direct link to More information")

* [What is OptiView Ads?](https://optiview.dolby.com/products/server-guided-ad-insertion/)
* [The Advantages of Server-Guided Ad Insertion](https://optiview.dolby.com/solutions/personalized-advertising/)
* [Is Server-Guided Ad Insertion (SGAI) revolutionizing streaming monetization? (blog)](https://optiview.dolby.com/resources/blog/advertising/what-is-sgai-server-guided-ad-insertion-in-streaming/)
