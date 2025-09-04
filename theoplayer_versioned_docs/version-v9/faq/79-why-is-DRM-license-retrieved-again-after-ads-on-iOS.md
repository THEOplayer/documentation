# Why are the FairPlay license and certificate being requested again on iOS after ads?

The DRM license and certificate are retrieved when a DRM-protected stream starts to be played. This is usually enough for a full playback session since in most cases the DRM context can be maintained.  
However, certain combinations of features may prevent this.

The most common case is when we indicate that on iOS browsers the native fullscreen should be used (`allowNativeFullscreen: true`). In this case, on these browsers ads and content will be played through the same `<video>` element, regardless of whether the user is actually playing in fullscreen.

This means that when a midroll is played, the previous DRM context is lost, so upon resuming content playback it must be re-established and the DRM license and certificate need to be requested again.
