# How to change how a video should be fit inside of a container

This question is asked by developers who want to alter how a video should be resized inside of the video's frame. By default, a video player respects the aspect ratio the video.

- For example, due to size of the container/frame, black pillars are appearing on the sides of the container. Instead, you want your video to cover these black pillars, even though this
- Cuts out content outside of the box.
- Or deforms the content, and causing misalignment with the aspect-ratio.

## SDKs

| Web SDK |                 Android SDK                 |                   iOS SDK                   | tvOS SDK|               Android TV SDK                | Chromecast SDK |
| :-----: | :-----------------------------------------: | :-----------------------------------------: | :--: | :-----------------------------------------: | :------------: |
|   Yes   | Unverified through CSS/Javascript injection | Unverified through CSS/Javascript injection |  No  | Unverified through CSS/Javascript injection |      Yes       |

## Code example

You can currently only use CSS to alter the behavior, and only if you use THEOplayer's default UI.

##### Web SDK

The CSS [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) property serves this use-case.

```css
.theoplayer-skin video {
  object-fit: contain; /* default */
  /* object-fit: cover; // content outside of the container, hence some content might be missing from the container */
  /* object-fit: fill; // all content inside of the container, but the content might be deformed to be fitted inside of it */
}

/*
// if you are doing object-fit: cover, and you don't want to show the content outside of the container, then do:
.theoplayer-skin {
    overflow-y: hidden;
}
// additionally, the object-position CSS property can help position the content, e.g.
.theoplayer-skin video {
    object-position: top;
}
*/
```

##### Android (TV) SDK

The Web SDK code should be included in your Android (TV) project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)explains how you can add CSS and JavaScript files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this.

##### iOS SDK

The Web SDK code should be included in your iOS project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this.

If you're used to AVPlayer's API, then [VideoGravity](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1386708-videogravity) serves a similar use-case, but a similar native (Swift) API is currently not available in THEOplayer's iOS or tvOS SDK.
