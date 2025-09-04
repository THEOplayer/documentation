# Clipping

THEOplayer supports playing only a selected part of a video-on-demand stream, rather than playing it from start to finish. This can be used for example to watch a single game-changing event from a sports match, highlight an important part of a long video presentation, or skip straight to the best part of a song's video clip.

## SDKs

| Web SDK |         Android SDK          |           iOS SDK            |           tvOS SDK           |        Android TV SDK        | Chromecast SDK |
| :-----: | :--------------------------: | :--------------------------: | :--------------------------: | :--------------------------: | :------------: |
|   Yes   | Through JavaScript injection | Through JavaScript injection | Through JavaScript injection | Through JavaScript injection |      No\*      |

## How to use the Clip API

The Clip API helps you configure a clip within your content. This allows you to only show a certain part of a video.

The start and end of the clipping window can be controlled through the Clip API:

- `startTime` and `endTime`, expressed in seconds

These properties are optional, and you don't need to specify both `startTime` and `endTime`. For example, you can set just `startTime = 30` to have the video start at 30 seconds and play the rest of the video normally.

## Code Examples

##### Web SDK

The following example shows a video clipped to start at 30 seconds and end at 60 seconds.

```js
player.source = {
    sources : [{
        src : '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8', // sets source
        type : 'application/x-mpegurl' // sets correct type for current source (HLS)
    }],
    ...
    };

// In this example, the clipping is applied in an event listener to make sure it doesn't get called before the source is set
player.addEventListener("durationchange", function() {
        player.clip.startTime = 30;
        player.clip.endTime = 60;
});
```

##### Legacy Android SDK (4.12.X)

This is currently possible through JavaScript injection in your Android project. Find out more about this in the article [How to add CSS or JavaScript files to an Android/iOS project](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

##### Legacy iOS/tvOS SDK (4.12.x)

This is currently possible through JavaScript injection in your iOS project. Find out more about this in the article [How to add CSS or JavaScript files to an Android/iOS project](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

<!--
## Sample application

The demo below illustrates the Up Next API in production.

- Demo: [https://support.theoplayer.com/hc/en-us/articles/206773139-Video-Clipping-in-2-X](https://support.theoplayer.com/hc/en-us/articles/206773139-Video-Clipping-in-2-X)
-->

## Remarks

- The event listener in the provided code sample is not strictly necessary, but it ensures that the clipping is applied after the source is set. If your source has not been set or is being set but the process is not complete, clipping will not have any effect.

## Resources

- [Clip API Reference](pathname:///theoplayer/v10/api-reference/web/interfaces/Clip.html)
- [Blog article](https://www.theoplayer.com/blog/frame-accurate-clipping-in-hls)
- [How to add CSS or JavaScript files to an Android/iOS project](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)
