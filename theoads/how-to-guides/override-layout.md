---
sidebar_position: 3
---

# Override layout

THEOads is able to insert ad breaks into your content via the signaling server. The layout that is used while playing is 
also determined by the signaling server. Currently, you can have the following layout modes :

* `SINGLE` : Replaces the content with an advertisement.
* `DOUBLE` : Allows content to continue playing side-by-side with an advertisement and its companion background.
* `LSHAPE_AD` : Displays advertisements in a scaled window alongside a companion background.

You might not always want to show the default layout mode as provided by the signaling server. For example, if your watching 
content on a mobile device, the `DOUBLE` layout mode might be too small. 

Therefore, the player offers you the possibility to override the default layout via the `TheoAdDescription`.

## Possible layouts overrides

Via the player, you can pass the following values to override the layout :

 - `'single'`: This will override the default layout and plays all the ad breaks using the "single" layout mode.
 - `'l-shape'`: This will override the default layout mode and plays all the ad breaks using the "l-shape" layout mode.
 - `'double'`: This will override the default layout mode and plays all the ad breaks using the "double" layout mode.
 - `'single-if-mobile'`: This will override the default layout mode to play all ad breaks using the "single" layout mode only when on mobile.

## Web SDK

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
      overrideLayout: 'YOUR-DESIRED-LAYOUT'
    },
  ],
};
```

:::note
 There is a limitation that double box (`DOUBLE`) is not supported on older smartTV's. If you want to play THEOads on these devices, please override to another layout.
:::

## Android

For the Android SDK, you can override the default layout by setting `overrideLayout` in the `TheoAdDescription` object as followed :

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

## iOS

This API is currently not available on the iOS SDK.
