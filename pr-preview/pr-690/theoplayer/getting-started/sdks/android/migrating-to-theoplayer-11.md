# Migrating to THEOplayer Android SDK 11.x

This article will guide you through updating to THEOplayer Android SDK version 11 (from version 10), and the changes needed in your code.

## Update THEOplayer[​](#update-theoplayer "Direct link to Update THEOplayer")

Update THEOplayer Android SDK to version 11 in your **module-level** `build.gradle` file:

```groovy
dependencies {
    implementation 'com.theoplayer.theoplayer-sdk-android:core:11.+'
}

```

If you're using the [Open Video UI for Android](/documentation/pr-preview/pr-690/open-video-ui/android.md) or one of [our connectors](/documentation/pr-preview/pr-690/theoplayer/connectors/android.md), make sure to update them to the latest version too to ensure proper support for THEOplayer version 11.

## Player methods must be called from the main thread[​](#player-methods-must-be-called-from-the-main-thread "Direct link to Player methods must be called from the main thread")

All methods on `Player` and `THEOplayerView` must only be called from the main thread. Calling these methods from a different thread will now throw an `IllegalStateException`.

These methods are now annotated with [`@MainThread`](https://developer.android.com/reference/androidx/annotation/MainThread), which should help the Android build tools to catch potential threading issues at compile time.

## Google IMA SDK integration requires core library desugaring[​](#google-ima-sdk-integration-requires-core-library-desugaring "Direct link to Google IMA SDK integration requires core library desugaring")

The Google IMA SDK integration now requires [core library desugaring](https://developer.android.com/studio/write/java8-support#library-desugaring) to be enabled.

```groovy
android {
    compileOptions {
        coreLibraryDesugaringEnabled = true
    }
}

dependencies {
    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'
    implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'

    coreLibraryDesugaring 'com.android.tools:desugar_jdk_libs:2.1.5'
}

```

See [our updated guide for Google IMA](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ads/google-ima.md#android-sdk) for more information.

## Replace or remove usages of deprecated APIs[​](#replace-or-remove-usages-of-deprecated-apis "Direct link to Replace or remove usages of deprecated APIs")

Some properties and methods that were previously deprecated have been removed from the API. Update your code to use the new APIs instead.

* Removed `preloadChannels` in THEOlive API.
* Changed `MediaTailorAdAvail.id` to return a `String` instead of an `Int`, to align with `AdBreak.id`. If you need the original `Int` value, use `AdBreak.id.toInt()` instead.
* Removed `TheoAdsErrorEvent`, use `AdErrorEvent` instead.
* Removed `TheoAdsEventTypes.THEOADS_ERROR`, use `AdsEventTypes.AD_ERROR` instead.
