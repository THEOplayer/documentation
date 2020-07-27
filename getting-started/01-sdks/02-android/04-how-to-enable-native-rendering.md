# How to enable -experimental- native rendering on Android

This how-to guide describes how to implement experimental native rendering using the THEOplayer Android SDK.

## Prerequirements

In order to enable native rendering on Android, make sure you are at least using version 2.42.2 or higher.

Before you start, if you are using an sdk from version 2.42.2 up to 2.73.x, please add the following transitive theoplayer dependency to the build.gradle file:

```java
dependencies {
    // other dependencies..
    implementation 'com.google.android.exoplayer:exoplayer:2.6.1'
}
```

If you are using an SDK from 2.74.0 or later, you don't need to add the dependency mentioned above.

## Code example

The snippet below configures the THEOplayer a source description that will render the media natively

```java
private void playSourceWithNativeRendering(String src) {
    tpv.getPlayer().setSource(sourceDescription(
        typedSource(src)
            .setNativeRenderingEnabled(true)
            .build()
    ).build())
}
```

**Note:** Important reminder that this is an experimental feature.

**Note:** Experimental rendering can only be used for playback of DASH streams