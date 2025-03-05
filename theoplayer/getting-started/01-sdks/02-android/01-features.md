# Android Feature Integrations

## Modularization

The Android THEOplayer SDK uses modularized features, which means there is a base SDK that can handle basic playback and additional feature integrations are provided as separate modules that can be added as desired.
This approach gives more flexibility and results in a reduced application size, since non-required parts are not included in the build of the application.

For example, the base SDK is provided by:

```groovy
implementation 'com.theoplayer.theoplayer-sdk-android:core:8.0.0'
```

Meanwhile, additional features such as Google IMA and Google Cast are provided by:

```groovy
implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:8.0.0'
implementation 'com.theoplayer.theoplayer-sdk-android:integration-cast:8.0.0'
```

## Importing additional integration modules

As shown in the previous section, importing additional integration modules can be done by simply adding the dependency in the `build.gradle` file of the module using THEOplayer.

:::info Important

It is required to keep the Android base SDK and all the required integration modules on the **same** version number.
For example one should **not** import `core:8.1.0` and `integration-cast:8.2.0` in the same project.

Consider using [version catalogs](https://developer.android.com/build/migrate-to-catalogs) in your app
to manage the version of the base SDK and the integration modules.

:::

## Adding integrations

After importing the dependencies, it's time to create the integrations and connect them to THEOplayer.

Each module provides a **Factory** class that allows the creation of that specific integration.
For example, the Google IMA module provides [`GoogleImaIntegrationFactory`] and the Google Cast module provides [`CastIntegrationFactory`].

Additionally, the `Player` class provides the [`addIntegration(Integration integration)`][Player.addIntegration] API
which allows adding the integration to the player.

Connecting the feature integration with the `Player` will make them available to be used.
Otherwise, calling an API from an integration without adding it to the `Player` will cause an error to be thrown.

## Available feature integrations

With Android THEOplayer SDK we currently support the following feature integrations:

| Feature         | Dependency                      | Release | Documentation                                                                                           |
| :-------------- | :------------------------------ | :-----: | :------------------------------------------------------------------------------------------------------ |
| Google IMA      | `integration-ads-ima:+`         | 3.1.0+  | [Google IMA Documentation](../../../how-to-guides/01-ads/10-google-ima.md#android-sdk)                  |
| Chromecast      | `integration-cast:+`            | 3.4.0+  | [Chromecast Documentation](../../../how-to-guides/03-cast/01-chromecast/00-introduction.md#android-sdk) |
| AWS MediaTailor | `integration-ads-mediatailor:+` | 4.0.0+  | [AWS MediaTailor Documentation](../../../how-to-guides/01-ads/12-mediatailor.md#android-sdk)            |
| Google DAI      | `integration-ads-dai:+`         | 4.3.0+  | [Google DAI Documentation](../../../how-to-guides/01-ads/08-google-dai.md#android-sdk)                  |
| THEOads         | `integration-ads-theoads:+`     | 8.2.0+  | [THEOads Documentation](/theoads/getting-started/getting-started-android/)                              |
| Millicast       | `integration-millicast:+`       | 8.2.0+  | [Millicast Documentation](../../../how-to-guides/android/millicast/getting-started.mdx)                 |
| Jetpack Media3  | `integration-media3:+`          | 8.10.0+ | [Media3 Documentation](../../../how-to-guides/android/media3/getting-started.mdx)                       |

[`GoogleImaIntegrationFactory`]: pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegrationFactory.html
[`CastIntegrationFactory`]: pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/cast/CastIntegrationFactory.html
[Player.addIntegration]: pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/Player.html#addIntegration(com.theoplayer.android.api.Integration)
