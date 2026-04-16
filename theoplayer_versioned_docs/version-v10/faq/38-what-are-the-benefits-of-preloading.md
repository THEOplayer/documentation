# What are the benefits of preloading

Choosing whether to preload parts of the video before it starts playing will help you considerably improve the user experience.

Preloading involves loading parts of a video source before the video starts playing. When the video later starts playing, it can do this much faster because it has already downloaded some data. This can improve the user experience dramatically when you expect the user will want to play the video. On the other hand, when the video is less likely to be played, you can configure the player to not preload it and save bandwidth.

Interactive video experiences are one example use case for this functionality. In an interactive video, the user must choose between multiple options at the end of a video, with each option leading to a different video. Using preloading will help you ensure a smooth transition between videos (to this purpose you may also want to use other THEOplayer features, such as Cache API and Canvas API - see Resources).

Choosing to preload your video content will also make some data regarding the current source available before the user initiates playback. Such data include, for example, the video duration and the timeline thumbnails.

## Resources

The following resources provide more information:

- https://www.w3.org/TR/html5/embedded-content-0.html#attr-media-preload: HTML5 specification
- [Preloading - How-to](../how-to-guides/07-miscellaneous/09-preloading.md)
- [API reference: preloading](pathname:///theoplayer/v10/api-reference/web/types/PreloadType.html)
- [API reference: Cache API](pathname:///theoplayer/v10/api-reference/web/interfaces/Cache.html)
- [API reference: Canvas API](pathname:///theoplayer/v10/api-reference/web/interfaces/Canvas.html)
