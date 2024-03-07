# How to enable experimental native rendering on Android

This how-to guide describes how to implement experimental native rendering using the THEOplayer Legacy Android SDK (4.12.x).

## Code example

The snippet below configures a source description with THEOplayer which will be rendered natively:

```java
private void playSourceWithNativeRendering(String src) {
    tpv.getPlayer().setSource(sourceDescription(
        typedSource(src)
            .setNativeRenderingEnabled(true)
            .build()
    ).build())
}
```

This is an experimental feature and it can only be used with DASH streams. You can find more information about the feature on our API docs [here](<https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/source/TypedSource.Builder.html#setNativeRenderingEnabled(boolean)>).

This API does not exist on the native Android SDK.
