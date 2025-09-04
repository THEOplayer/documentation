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

## Replace usages of deprecated APIs

Some properties and methods that were previously deprecated have been removed from the API.
Update your code to use the new APIs instead.
