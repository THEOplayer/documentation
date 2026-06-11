# THEOplayer Uplynk Connector for Android

The Uplynk connector provides a Uplynk integration for THEOplayer.

## Installation[​](#installation "Direct link to Installation")

1. Add the THEOplayer Maven repository to your project-level `settings.gradle` file:
   <!-- -->
   ```groovy
   dependencyResolutionManagement {
       repositories {
           google()
           mavenCentral()
           maven { url = uri("https://maven.theoplayer.com/releases/") }
       }
   }

   ```
2. Add THEOplayer and the Uplynk Connector as dependencies in your module-level `build.gradle` file:
   <!-- -->
   ```groovy
   dependencies {
       implementation "com.theoplayer.theoplayer-sdk-android:core:11.+"
       implementation "com.theoplayer.android-connector:uplynk:11.+"
   }

   ```

## Usage[​](#usage "Direct link to Usage")

First, follow [the getting started guide for the THEOplayer Android SDK](https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/android/getting-started/) to set up a `THEOplayerView` in your app.

Then, create the `UplynkConnector`:

```kotlin
import com.theoplayer.android.api.THEOplayerView
import com.theoplayer.android.connector.uplynk.UplynkConnector
...
val theoPlayerView = findViewById(R.id.theoplayer)
val uplynkConnector = UplynkConnector(theoPlayerView)

```

Finally, set the THEOplayer source to a `SourceDescription` with a `UplynkSsaiDescription` as its `ssai` description:

```kotlin
theoplayerView.player.source = SourceDescription
    .Builder(
        TypedSource.Builder("no source")
            .ssai(
                UplynkSsaiDescription
                    .Builder()
                    .prefix("https://content.uplynk.com")
                    .assetIds(listOf(
                        "41afc04d34ad4cbd855db52402ef210e",
                        "c6b61470c27d44c4842346980ec2c7bd",
                        "588f9d967643409580aa5dbe136697a1",
                        "b1927a5d5bd9404c85fde75c307c63ad",
                        "7e9932d922e2459bac1599938f12b272",
                        "a4c40e2a8d5b46338b09d7f863049675",
                        "bcf7d78c4ff94c969b2668a6edc64278",
                    ))
                    .preplayParameters(linkedMapOf(
                        "ad" to "adtest",
                        "ad.lib" to "15_sec_spots"
                    ))
                    .build())
            .build()
    )
    .build()

```

### Getting Ad Information[​](#getting-ad-information "Direct link to Getting Ad Information")

To retrieve information about the currently playing ad or ad break, you can use the following properties of THEOplayer:

* `player.ads.currentAds`: Provides a list of currently playing ads.
* `player.ads.currentAdBreak`: Provides information about the currently active ad break.

These fields contain generic data for any ad or ad break in THEOplayer. However, for Uplynk-specific ad data, you can access the `customData` property. Below are examples demonstrating how to do that:

```kotlin
fun logCurrentAd() {
    val uplynkAd =
        theoplayerView.player.ads.currentAds.firstOrNull()?.customData as? UplynkAd ?: return
    Log.d(
        TAG, "UplynkAd: " +
                "apiFramework = ${uplynkAd.apiFramework}, " +
                "events = ${uplynkAd.events}, " +
                "duration = ${uplynkAd.duration}, " +
                "height = ${uplynkAd.height}, " +
                "width = ${uplynkAd.width}, " +
                "fwParameters = ${uplynkAd.fwParameters}, " +
                "mimeType = ${uplynkAd.mimeType}"
    )
}

fun logCurrentAdBreak() {
    val uplynkAdBreak =
        theoplayerView.player.ads.currentAdBreak?.customData as? UplynkAdBreak ?: return
    Log.d(
        TAG, "UplynkAdBreak: " +
                "type = ${uplynkAdBreak.type}, " +
                "ads = ${uplynkAdBreak.ads.size}, " +
                "duration = ${uplynkAdBreak.duration}, " +
                "timeOffset = ${uplynkAdBreak.timeOffset}, " +
                "position = ${uplynkAdBreak.position}"
    )
}

```
