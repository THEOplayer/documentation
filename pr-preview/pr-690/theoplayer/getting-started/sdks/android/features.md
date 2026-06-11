# Android Feature Integrations

## Modularization[​](#modularization "Direct link to Modularization")

The Android THEOplayer SDK uses modularized features, which means there is a base SDK that can handle basic playback and additional feature integrations are provided as separate modules that can be added as desired. This approach gives more flexibility and results in a reduced application size, since non-required parts are not included in the build of the application.

For example, the base SDK is provided by:

```groovy
implementation 'com.theoplayer.theoplayer-sdk-android:core:8.0.0'

```

Meanwhile, additional features such as Google IMA and Google Cast are provided by:

```groovy
implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:8.0.0'
implementation 'com.theoplayer.theoplayer-sdk-android:integration-cast:8.0.0'

```

## Importing additional integration modules[​](#importing-additional-integration-modules "Direct link to Importing additional integration modules")

As shown in the previous section, importing additional integration modules can be done by simply adding the dependency in the `build.gradle` file of the module using THEOplayer.

Important

It is required to keep the Android base SDK and all the required integration modules on the **same** version number. For example one should **not** import `core:8.1.0` and `integration-cast:8.2.0` in the same project.

Consider using [version catalogs](https://developer.android.com/build/migrate-to-catalogs) in your app to manage the version of the base SDK and the integration modules.

## Adding integrations[​](#adding-integrations "Direct link to Adding integrations")

After importing the dependencies, it's time to create the integrations and connect them to THEOplayer.

### Adding integrations automatically[​](#adding-integrations-automatically "Direct link to Adding integrations automatically")

Starting with version 8.13.0, the Android SDK supports automatically connecting all available integrations to your player. When constructing your `THEOplayerView`, set [`THEOplayerConfig.autoIntegrations`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/THEOplayerConfig.Builder.html#autoIntegrations\(boolean\)) to `true`:

```kotlin
val theoplayerConfig = THEOplayerConfig.Builder()
    .autoIntegrations(true)
    .build()
val theoplayerView = THEOplayerView(context, theoplayerConfig)

```

The player will automatically create and attach any integrations that were added to your app's dependencies.

info

Starting with version 9.0.0, this automatic behavior will become the default. You can always opt out by manually setting [`THEOplayerConfig.autoIntegrations`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/THEOplayerConfig.Builder.html#autoIntegrations\(boolean\)) to `false`.

### Adding integrations manually[​](#adding-integrations-manually "Direct link to Adding integrations manually")

You can also create and attach each integration manually.

Each module provides a **Factory** class that allows the creation of that specific integration. For example, the Google IMA module provides [`GoogleImaIntegrationFactory`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegrationFactory.html) and the Google Cast module provides [`CastIntegrationFactory`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/cast/CastIntegrationFactory.html). You can then attach the created integration to your player using the [`addIntegration(Integration integration)`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/player/Player.html#addIntegration\(com.theoplayer.android.api.Integration\)) method of the `Player` API.

For example, to set up the Google IMA integration, you create an integration using the [`GoogleImaIntegrationFactory`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegrationFactory.html) and then attach it to the player using [`addIntegration(Integration integration)`](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/player/Player.html#addIntegration\(com.theoplayer.android.api.Integration\)):

```kotlin
import com.theoplayer.android.api.ads.ima.GoogleImaIntegrationFactory

val theoplayerView = THEOplayerView(context)
val googleImaIntegration = GoogleImaIntegrationFactory.createGoogleImaIntegration(theoplayerView)
theoplayerView.player.addIntegration(googleImaIntegration)

```

[The documentation of each individual integration](#available-feature-integrations) provides more detail on how to set up and configure that integration.

warning

You must call `addIntegration()` before using the integration. Attempting to call a method on the integration without attaching it to a player will throw an error.

## Available feature integrations[​](#available-feature-integrations "Direct link to Available feature integrations")

With Android THEOplayer SDK we currently support the following feature integrations:

| Feature         | Dependency                      | Release | Documentation                                                                                                                     |
| --------------- | ------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Google IMA      | `integration-ads-ima:+`         | 3.1.0+  | [Google IMA Documentation](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/google-ima.md#android-sdk)               |
| Chromecast      | `integration-cast:+`            | 3.4.0+  | [Chromecast Documentation](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/cast/chromecast/introduction.md#android-sdk) |
| AWS MediaTailor | `integration-ads-mediatailor:+` | 4.0.0+  | [AWS MediaTailor Documentation](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/mediatailor.md#android-sdk)         |
| Google DAI      | `integration-ads-dai:+`         | 4.3.0+  | [Google DAI Documentation](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/google-dai.md#android-sdk)               |
| Optiview Ads    | `integration-ads-theoads:+`     | 8.2.0+  | [Optiview Ads Documentation](/documentation/pr-preview/pr-690/ads/getting-started/android.md)                                     |
| Millicast       | `integration-millicast:+`       | 8.2.0+  | [Millicast Documentation](/documentation/pr-preview/pr-690/millicast/android-player/)                                             |
| Jetpack Media3  | `integration-media3:+`          | 8.10.0+ | [Media3 Documentation](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/android/media3/getting-started.md)               |
