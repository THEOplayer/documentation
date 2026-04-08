# Migrating to THEOplayer Android SDK 11.x

This article will guide you through updating from THEOplayer Android SDK version 11 (from version 10),
and the changes needed in your code.

## Update THEOplayer

Update THEOplayer Android SDK to version 11 in your **module-level** `build.gradle` file:

```groovy
dependencies {
    implementation 'com.theoplayer.theoplayer-sdk-android:core:11.+'
}
```

If you're using the [Open Video UI for Android](/open-video-ui/android/) or one of [our connectors](/theoplayer/connectors/android/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 11.

## Player methods must be called from the main thread

All methods on `Player` and `THEOplayerView` must only be called from the main thread.
Calling these methods from a different thread will now throw an `IllegalStateException`.

These methods are now annotated with [`@MainThread`](https://developer.android.com/reference/androidx/annotation/MainThread),
which should help the Android build tools to catch potential threading issues at compile time.

## Google IMA SDK integration requires core library desugaring

The Google IMA SDK integration now requires [core library desugaring](https://developer.android.com/studio/write/java8-support#library-desugaring) to be enabled.

```groovy build.gradle
android {
    compileOptions {
        // highlight-next-line
        coreLibraryDesugaringEnabled = true
    }
}

dependencies {
    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'
    implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'

    // highlight-next-line
    coreLibraryDesugaring 'com.android.tools:desugar_jdk_libs:2.1.5'
}
```

See [our updated guide for Google IMA](../../../how-to-guides/01-ads/10-google-ima.md#android-sdk) for more information.

## Replace or remove usages of deprecated APIs

Some properties and methods that were previously deprecated have been removed from the API.
Update your code to use the new APIs instead.

- Removed `preloadChannels` in THEOlive API.
- Changed `MediaTailorAdAvail.id` to return a `String` instead of an `Int`, to align with `AdBreak.id`.
  If you need the original `Int` value, use `AdBreak.id.toInt()` instead.
- Removed `TheoAdsErrorEvent`, use `AdErrorEvent` instead.
- Removed `TheoAdsEventTypes.THEOADS_ERROR`, use `AdsEventTypes.AD_ERROR` instead.
