# OptiView Player

The Dolby OptiView Streaming platform uses the [OptiView Player](/documentation/pr-preview/pr-690/theoplayer.md) for playback. The player is available on a wide range of platforms and supports HESP and HLS streaming, along with features like UI controls, ad insertion, and advanced APIs.

## Supported platforms[​](#supported-platforms "Direct link to Supported platforms")

For platform-specific guides on integrating OptiView live streaming, refer to:

* [Web](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/web/theolive/getting-started.md)
* [Android](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/android/theolive/getting-started.md)
* [iOS](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ios/theolive/getting-started.md)
* [React Native](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/react-native/theolive/getting-started.md)
* [Flutter](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/flutter/theolive/getting-started.md)
* [Roku](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/roku/theolive/getting-started.md)

## HESP limitations[​](#hesp-limitations "Direct link to HESP limitations")

* **Device compatibility** — HESP requires support for streaming HTTP requests, which is not available on very old devices such as 2015 smart TVs. On those devices, the player automatically falls back to HLS, which plays on almost any device but with higher latency — typically around 10 seconds.
* **Feature compatibility** — Not all streaming protocol features (like liveoffset, ...), available in the OptiView Player, have been tested or verified with HESP streams. For guidance on compatibility, please reach out to the OptiView support team.
