# Migrating to THEOplayer Android SDK 8.x

This article will guide you through updating from THEOplayer Android SDK version 8 (from version 7),
and the changes needed in your code.

## Add the THEOplayer Maven repository

Until version 7, the THEOplayer Android SDK was published both to our [THEOplayer Maven repository](https://maven.theoplayer.com/)
and [JitPack](https://jitpack.io/#THEOplayer/theoplayer-sdk-android).
As of version 8, we publish new versions only to the THEOplayer Maven repository.

In your **top-level** (project) `build.gradle` file, remove the JitPack repository
and add the THEOplayer Maven repository:

```diff
  allprojects {
      repositories {
          google()
          mavenCentral()
-         maven { url 'https://jitpack.io' }
+         maven { url 'https://maven.theoplayer.com/releases' }
      }
  }
```

:::note

If you're using other (non-THEOplayer) dependencies that are published to JitPack,
you should not remove the JitPack repository from your `build.gradle` file.
However, we recommend placing the THEOplayer Maven repository _before_ JitPack,
so the THEOplayer Android SDK is always downloaded from our official repository.

:::

## Update THEOplayer

Update THEOplayer Android SDK to version 8 in your **module-level** `build.gradle` file:

```groovy
dependencies {
    implementation 'com.theoplayer.theoplayer-sdk-android:core:8.+'
}
```

If you're using the [Open Video UI for Android](/open-video-ui/android/) or one of [our connectors](/theoplayer/connectors/android/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 8.
