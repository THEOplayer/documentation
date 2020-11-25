# Preloading

This article contains a description of the possible preloading settings and will show you how to use them on your player. This is possible on Web, Android and iOS SDKs. The aim of preloading is to improve user experience by loading parts of the video before the Play button is hit when the user is likely to play the video.

At the bottom, you will be able to find interesting Resources on this topic.

 

### Table of Contents

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Yes  |      Yes      |      N/A       |


## How to use preloading
Choosing to preload your video content will reduce the start-up time of your videos. It will also make some data regarding the current source (video duration, timeline thumbnails, etc.) available before the user initiates playback. On the other hand, when the video is less likely to be played, you can configure the player to not preload it and save bandwidth. Here is how.


### Preloading settings

| Value | Description |
| :---: | :---------: |
| none  | Do not preload anything. After setting the source, the player will not load the manifest nor any media files until the play method is invoked on the player. |
| metadata | Preload the metadata of the video. After setting the source, the player will automatically load the manifest file and will wait for loading media files until the play method is invoked on the player. For static videos (e.g. MP4 files), this translates to preloading data from the start of the video in order to acquire e.g. the video's width and height and the initial video frames. |
| auto | Preload enough data to allow for smooth initial playback. After setting the source, the player will load both the manifest files and enough media files until a sufficient playback buffer has been obtained. |


## Code examples

##### Web SDK
In this example, we are preloading metadata only.

```js
player.preload = "metadata";
```

##### Android SDK
To activate preload, you need to import the player preloadType:

```java
import com.theoplayer.android.api.player.PreloadType;
```

You can then choose the option you prefer:

```java
   tpv = new THEOplayerView(this);
   ...
   tpv.getPlayer().setPreload(PreloadType.METADATA, callbackHandler);
```
Here, `callbackHandler` is a method to establish which actions are to be taken when preloading has been successfully completed. 

##### iOS SDK

To use preloading

```swift
self.theoplayer?.setPreload(.metadata)
```



## Sample Applications
The demo below illustrates the Up Next API in production.

- Demo: https://demo.theoplayer.com/preloading-vod


## Remarks
Note that THEOplayer will always prefer downloading data for the currently playing video over downloading data for a preloading video. Only when the currently playing video has enough data to play to the end of the video, will the player start preloading other videos.

In previous versions of the player (1.X), this feature included the possibility to preload videos in a playlist. This is no longer possible with preload but the Cache API (see Resources) can be used to achieve a similar effect.


## Resources
- [What are the benefits of preloading?](../../faq/38-what-are-the-benefits-of-preloading.md)
- [API reference](https://docs.theoplayer.com/api-reference/web/theoplayer.preloadtype.md)
- https://www.w3.org/TR/html5/embedded-content-0.html#attr-media-preload: HTML5 specification
- [API reference: Cache API](https://docs.theoplayer.com/api-reference/web/theoplayer.cache.md)