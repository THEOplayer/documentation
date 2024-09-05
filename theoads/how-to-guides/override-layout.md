---
sidebar_position: 3
---

# Override ad experience layout

THEOads is able to insert ad breaks into your content via the signaling server. The layout that is used while playing is
usually determined by the signaling server. Currently, you can have the following layout modes :

- `SINGLE` : Replaces the content with an advertisement.
- `DOUBLE` : Allows content to continue playing side-by-side with an advertisement and its companion background.
- `LSHAPE_AD` : Displays advertisements in a scaled window alongside a companion background.

When your signaling service is created, the default layout should be defined. Look at our [API references](/theoads/api/signaling/create-monetized-stream/) for more information.

The rest of this page will go over how to override this initial chosen layout in the [signaling service](#override-layout-through-the-signaling-service) itself,
or override it on the [player side](#override-the-layout-through-the-player).

## Override layout through the signaling service

There are two ways to update the layout in the signaling service.

### Setting a new default layout

It is possible to update the default layout value on the signaling service. This can be done by making an [UpdateMonetizedStreamLayout](/theoads/api/signaling/update-monetized-stream-layout/)
API request to the signaling service with the new layout.
The updated layout value will be the new default for all ad breaks.

### Signaling an ad break through the API

When scheduling ad breaks through the signaling service API it is possible to choose the layout of the ad break.
The passed layout will be used, unless it is left `undefined`. In this case the default layout is still used.

For more information on the scheduling API refer to the following section: [Signaling breaks through the signaling service](/theoads/how-to-guides/signaling-breaks/#through-the-signaling-service).

## Override the layout through the player

You might not always want to show the default layout mode as provided by the signaling server. For example, if you are watching
content on a mobile device, the `DOUBLE` layout mode might not be the ideal user experience.

Via the player, you can pass the following values to `TheoAdDescription.overrideLayout` to override the layout :

- `'single'`: This will override the default layout and plays all the ad breaks using the "single" layout mode.
- `'l-shape'`: This will override the default layout mode and plays all the ad breaks using the "l-shape" layout mode.
- `'double'`: This will override the default layout mode and plays all the ad breaks using the "double" layout mode.
- `'single-if-mobile'`: This will override the default layout mode to play all ad breaks using the "single" layout mode only when on mobile.

### Web SDK

For the Web SDK, you can override the default layout by setting `overrideLayout` in the `TheoAdDescription` object as followed :

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
      overrideLayout: 'YOUR-DESIRED-LAYOUT',
    },
  ],
};
```

:::note
There is a limitation that double box (`DOUBLE`) is not supported on older smartTV's. If you want to play THEOads on these devices, please override to another layout.
:::

### React Native SDK

For the React Native SDK, you can override the default layout by setting `overrideLayout` in the `TheoAdDescription` object as followed :

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
      overrideLayout: 'YOUR-DESIRED-LAYOUT',
    },
  ],
};
```

### Android SDK

For the Android SDK, you can override the default layout by setting `overrideLayout` in the `TheoAdDescription` object as follows:

```kotlin
import com.theoplayer.android.api.ads.theoads.TheoAdsDescription
import com.theoplayer.android.api.source.SourceDescription
import com.theoplayer.android.api.source.SourceType
import com.theoplayer.android.api.source.TypedSource

theoPlayerView.player.source = SourceDescription.Builder(
    TypedSource.Builder("PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI")
        .type(SourceType.HLS)
        .hlsDateRange(true)
        .build()
).ads(
    TheoAdsDescription(
        networkCode = "NETWORK-CODE",
        customAssetKey = "CUSTOM-ASSET-KEY",
        overrideLayout = "YOUR-DESIRED-LAYOUT"
    )
).build()
```

### iOS SDK

This API is currently under development and will become available soon.

## More information

- [Enable Novel Ad Experiences](https://www.theoplayer.com/product/theoads/)
