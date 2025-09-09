# Migrating to THEOplayer Android SDK 10.x

This article will guide you through updating from THEOplayer Android SDK version 10 (from version 9),
and the changes needed in your code.

## Update THEOplayer

Update THEOplayer Android SDK to version 10 in your **module-level** `build.gradle` file:

```groovy
dependencies {
    implementation 'com.theoplayer.theoplayer-sdk-android:core:10.+'
}
```

If you're using the [Open Video UI for Android](/open-video-ui/android/) or one of [our connectors](/theoplayer/connectors/android/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 10.

## Update `minSdkVersion` to API 23 or higher

The [minimum supported Android version](https://developer.android.com/build#android_sdk_settings) of the THEOplayer Android SDK has been raised from API 21 (Android 5.0 "Lollipop") to API 23 (Android 6.0 "Marshmallow"). This aligns with [other Android Jetpack libraries requiring API 23 as of June 2025](https://developer.android.com/jetpack/androidx/versions#version-table).

Update the `minSdkVersion` to be 23 (or higher) in your **module-level** `build.gradle` file:

```groovy
android {
    defaultConfig {
        minSdkVersion 23
    }
}
```

## Media3 as single playback pipeline

THEOplayer now always uses [Jetpack Media3](https://developer.android.com/media/media3) as its playback pipeline,
providing more stable playback on a wider range of devices.
The legacy playback pipeline (from version 8.x) has been fully retired,
and the `TypedSource.playbackPipeline` property has been removed.

Caching is now also handled by Media3.
Any previously created caching tasks that used the legacy backend (using `CachingParameters.storageType = CacheStorageType.LEGACY`)
will automatically be switched over to the Media3 backend, although their cached content will not be preserved.
They can be re-downloaded by calling `CachingTask.start()` again.

See [our Media3 guide](../../../how-to-guides/android/media3/getting-started.mdx) for more information.

## Use modern network stack by default

THEOplayer will now use a modern network stack when available,
to take advantage of their HTTP/2 and HTTP/3 support for more optimal media streaming.

The player supports both [`HttpEngine`] (available in Android 14 or higher) and [Cronet] (when added as a library to your app).
When neither of these APIs are available, the player falls back to HTTP/1.1 using [`HttpURLConnection`].

If you're not yet ready for this switch, you can opt out of this behavior and revert back to `HttpURLConnection`
by setting [`NetworkConfiguration.useHttpEngine`] to `false`.

## Replace usages of deprecated APIs

Some properties and methods that were previously deprecated have been removed from the API.
Update your code to use the new APIs instead.

- Removed `TypedSource.playbackPipeline` and `SourceChangeEvent.playbackPipeline`. The player will now always use the Media3 playback pipeline.
- Removed unused `GoogleDaiConfiguration.format`.
- Removed `MediaTailorSource.adParams`. Use `MediaTailorSource.adsParams` instead.
- Removed the `DashPlaybackConfiguration.ignoreAvailabilityWindow()` method. Use the `.ignoreAvailabilityWindow` property instead.
- Removed `KeySystemConfiguration.isUseCredentials`. Use `KeySystemConfiguration.useCredentials` instead.
- Removed `ConaxDRMConfiguration.Builder.fairPlay()`. Use `ConaxDRMConfiguration.Builder.fairplay()` instead.
- Removed THEOlive publication events (`PublicationLoadStartEvent`, `PublicationLoadedEvent` and `PublicationOfflineEvent`). Use the equivalent distribution events instead (`DistributionLoadStartEvent`, `EndpointLoadedEvent` and `DistributionOfflineEvent` respectively).
- Removed `THEOplayerGlobal.playbackSettings`.

[`HttpEngine`]: https://developer.android.com/reference/android/net/http/HttpEngine
[`HttpURLConnection`]: https://developer.android.com/reference/java/net/HttpURLConnection
[Cronet]: https://developer.android.com/develop/connectivity/cronet
[`NetworkConfiguration.useHttpEngine`]: pathname:///theoplayer/v10/api-reference/android/com/theoplayer/android/api/player/NetworkConfiguration.html#useHttpEngine
