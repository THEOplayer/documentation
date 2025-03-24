# Migrating to THEOplayer Android SDK 9.x

This article will guide your through updating from THEOplayer Android SDK version 9 (from version 8),
and the changes needed in your code.

## Update THEOplayer

Update THEOplayer Android SDK to version 9 in your **module-level** `build.gradle` file:

```groovy
dependencies {
    implementation 'com.theoplayer.theoplayer-sdk-android:core:9.+'
}
```

If you're using the [Open Video UI for Android](/open-video-ui/android/) or one of [our connectors](/theoplayer/connectors/android/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 9.

## Update compile SDK to API 35 or higher

The Android SDK and its integrations are now compiled against API 35. Ensure `compileSdk` is set to 35 or higher in your app's `build.gradle` file.

```groovy
android {
    compileSdk 35
}
```

## Media3 as default playback pipeline

The Media3 playback pipeline is now enabled by default.
This new pipeline is built on top of [Jetpack Media3](https://developer.android.com/media/media3),
which aims to provide more stable playback on a wider range of devices.
See [our Media3 guide](../../../how-to-guides/android/media3/getting-started.mdx) for more information.

We highly recommend using the Media3 playback pipeline. However, if you need some more time to make the switch,
you can still revert to the legacy playback pipeline from version 8.x by setting `TypedSource.playbackPipeline` to `PlaybackPipeline.LEGACY`.

:::warning

The legacy playback pipeline is scheduled to be removed in THEOplayer version 10.

If you run into an issue that prevents you from switching to Media3, please contact our Service Desk.

:::

## Media3 as default backend for caching

Newly created caching tasks now use the Media3 backend by default.
Sources cached with this backend can only be played using the Media3 playback pipeline.

If you need some more time to make the switch, you can still revert to the legacy cache storage from version 8.x
by setting `CachingParameters.storageType` to `CacheStorageType.LEGACY`.

:::warning

The legacy cache storage is scheduled to be removed in THEOplayer version 10.

If you run into an issue that prevents you from switching to Media3, please contact our Service Desk.

:::

## Removed Media3 integration package

The Media3 playback pipeline now ships with the THEOplayer Android SDK, and is no longer published as a separate package.

If you were using the Media3 integration in your app, make sure to remove it from your app's `build.gradle` file:

```diff
  dependencies {
      implementation "com.theoplayer.theoplayer-sdk-android:core:9.+"
-     implementation "com.theoplayer.theoplayer-sdk-android:integration-media3:8.+"
  }
```

## Automatically registered integrations

Feature integrations that are added as dependencies of your Android app are now
automatically added to every `THEOplayerView` instance.
You no longer need to create and attach each integration individually.
See [our guide on feature integrations](../../../getting-started/01-sdks/02-android/01-features.md#adding-integrations-automatically) for more information.

If you want to opt-out of this behavior, you can set `THEOplayerConfig.Builder#autoIntegrations(boolean)` to `false`
and then [add your integrations manually](../../../getting-started/01-sdks/02-android/01-features.md#adding-integrations-manually).

## Kotlin-first approach

Starting with THEOplayer 9.0, we're adopting a Kotlin-first approach for the Android SDK and its integrations,
similar to [Google's own approach for Android](https://developer.android.com/kotlin/first).

- New APIs will be designed with Kotlin users in mind first. We will make use of Kotlin's more expressive
  language features where appropriate, such as [named parameters](https://kotlinlang.org/docs/functions.html#named-arguments)
  and [coroutines](https://kotlinlang.org/docs/coroutines-overview.html).
  - For example: [`TypedSource`] now has a constructor with named arguments, which is intended to replace [`TypedSource.Builder`].
- Official documentation and examples will be written in Kotlin. Java examples may be available on a case-by-case basis.
- While you can still use THEOplayer from Java code, it may result in less idiomatic code,
  or it may require adding Kotlin libraries to your app's dependencies.

We highly recommend using Kotlin for new Android apps. To add Kotlin to an existing app,
see [the Android documentation](https://developer.android.com/kotlin/add-kotlin).

## Replace usages of deprecated APIs

Some properties and methods that were previously deprecated have been removed from the API.
Update your code to use the new APIs instead.

- Removed deprecated `MillicastSource(Credential, Option)` constructor. Use the primary constructor instead.
- Removed deprecated `MillicastSource.credential` API. Use `src`, `streamAccountId`, `apiUrl` and `subscriberToken` instead.
- Removed deprecated `MillicastSource.option` API. Use `connectOptions` instead.
- Removed deprecated `TypedSource.isHlsDateRange` API. Use `TypedSource.hlsDateRange` instead.
- Removed deprecated `TypedSource.isLowLatency` API. Use `TypedSource.lowLatency` instead.
- Removed deprecated `THEOLiveConfig.sessionId` API. Use `THEOLiveConfig.externalSessionId` instead.
- Removed deprecated `THEOLiveConfig.userId` API.
- Removed deprecated `THEOplayerConfig.getLiveOffset()` API. Use `TypedSource.liveOffset` instead.
- Removed deprecated `THEOplayerConfig.isHlsDateRange()` API. Use `TypedSource.hlsDateRange` instead.
- Removed deprecated `GoogleImaIntegrationFactory.createGoogleImaIntegration(THEOplayerView, ImaSdkSettings)` API. Use `GoogleImaIntegrationFactory.createGoogleImaIntegration(THEOplayerView, GoogleImaConfiguration(ImaSdkSettings))` instead.
- Removed deprecated `GoogleDaiIntegrationFactory.createGoogleDaiIntegration(THEOplayerView, ImaSdkSettings)` API. Use `GoogleDaiIntegrationFactory.createGoogleDaiIntegration(THEOplayerView, GoogleImaConfiguration(ImaSdkSettings))` instead.
- Removed deprecated `ConaxDRMConfiguration.Builder.fairPlay(FairPlayKeySystemConfiguration)` API. Use `ConaxDRMConfiguration.Builder.fairplay(FairPlayKeySystemConfiguration)` instead.
- Moved the `GoogleImaAd` API from the package `com.theoplayer.android.api.ads.GoogleImaAd` to `com.theoplayer.android.api.ads.ima`.

[`TypedSource`]: pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/TypedSource.html
[`TypedSource.Builder`]: pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/TypedSource.Builder.html
