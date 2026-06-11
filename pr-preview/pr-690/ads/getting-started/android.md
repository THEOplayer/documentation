# Getting started with OptiView Ads on Android

This guide will get you started to integrate OptiView Ads in your OptiView Player Android SDK: configure the license, update dependencies and set the source description.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

<!-- -->

1. You need to have an OptiView Player license which is compatible with OptiView Ads. This can be done through the [player portal](https://portal.theoplayer.com).

2. You need a correctly deployed [OptiView Ads signaling service](/documentation/pr-preview/pr-690/ads/getting-started/signaling-service.md).

3. Add the OptiView Player Android SDK to your project by following our [Getting started](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/android/getting-started.md) guide. Make sure to [set up an OptiView Ads-compatible license](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/android/getting-started.md#setting-up-the-license) in your app.

4. Add the OptiView Ads integration as a dependency in your module-level `build.gradle` file:

   <!-- -->

   * Groovy
   * Kotlin

   ```groovy
   dependencies {
       implementation "com.theoplayer.theoplayer-sdk-android:core:9.+"
       implementation "com.theoplayer.theoplayer-sdk-android:integration-ads-theoads:9.+"
   }

   ```

   ```kotlin
   dependencies {
       implementation("com.theoplayer.theoplayer-sdk-android:core:9.+")
       implementation("com.theoplayer.theoplayer-sdk-android:integration-theoads:9.+")
   }

   ```

## Integration[​](#integration "Direct link to Integration")

To make use of the OptiView Ads integration, create and add the `TheoAdsIntegration` to your `THEOplayerView`:

```kotlin
import com.theoplayer.android.api.THEOplayerView
import com.theoplayer.android.api.ads.theoads.TheoAdsIntegration
import com.theoplayer.android.api.ads.theoads.TheoAdsIntegrationFactory.createTheoAdsIntegration

class MyActivity : Activity() {
    private lateinit var theoPlayerView: THEOplayerView
    private lateinit var theoAdsIntegration: TheoAdsIntegration

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        theoPlayerView = findViewById<THEOplayerView>(R.id.theoplayer)

        theoAdsIntegration = createTheoAdsIntegration(theoPlayerView)
        theoPlayerView.player.addIntegration(theoAdsIntegration)
    }
}

```

Then, configure a source containing a `TheoAdDescription`:

```kotlin
import com.theoplayer.android.api.ads.theoads.TheoAdDescription
import com.theoplayer.android.api.source.SourceDescription
import com.theoplayer.android.api.source.SourceType
import com.theoplayer.android.api.source.TypedSource

theoPlayerView.player.source = SourceDescription.Builder(
    TypedSource.Builder("PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI")
        .type(SourceType.HLS)
        .hlsDateRange(true)
        .build()
).ads(
    TheoAdDescription(
        networkCode = "NETWORK-CODE",
        customAssetKey = "CUSTOM-ASSET-KEY"
    )
).build()

```

* Notice that the `src` is different as usual. For OptiView Ads, a signaling server needs to be set up which acts as a proxy to parse the given manifest and insert the ad interstitials. More information can be found [here](/documentation/pr-preview/pr-690/ads/getting-started/signaling-service.md).
* The `hlsDateRange` flag needs to be set to `true` as the ad markers are done using `EXT-X-DATERANGE` tags.
* The `ads` object needs to be a `TheoAdDescription`. Furthermore, the `networkCode` and `customAssetKey` needs to be set according to your configured Google account.

## Integrating with Open Video UI[​](#integrating-with-open-video-ui "Direct link to Integrating with Open Video UI")

When using the [Open Video UI for Android](/documentation/pr-preview/pr-690/open-video-ui/android.md), you need to create and add the `TheoAdsIntegration` before creating your `DefaultUI` or `UIController`. You can then create an OptiView Ads-enabled source and set it as `player.source`:

```kotlin
import androidx.activity.compose.setContent
import com.theoplayer.android.ui.rememberPlayer

setContent {
    val player = rememberPlayer()
    LaunchedEffect(player) {
        player.theoplayerView?.let { theoPlayerView ->
            val theoAdsIntegration = createTheoAdsIntegration(theoPlayerView)
            theoPlayerView.player.addIntegration(theoAdsIntegration)
        }

        player.source = SourceDescription.Builder(
            TypedSource.Builder("PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI")
                .type(SourceType.HLS)
                .hlsDateRange(true)
                .build()
        ).ads(
            TheoAdDescription(
                networkCode = "NETWORK-CODE",
                customAssetKey = "CUSTOM-ASSET-KEY"
            )
        ).build()
    }

    DefaultUI(
        player = player
    )
}

```

## More information[​](#more-information "Direct link to More information")

* [API references](/documentation/pr-preview/pr-690/theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/theoads/package-summary.html)
* [What is OptiView Ads?](https://optiview.dolby.com/products/server-guided-ad-insertion/)
* [The Advantages of Server-Guided Ad Insertion](https://optiview.dolby.com/solutions/personalized-advertising/)
* [Is Server-Guided Ad Insertion (SGAI) revolutionizing streaming monetization? (blog)](https://optiview.dolby.com/resources/blog/advertising/what-is-sgai-server-guided-ad-insertion-in-streaming/)
