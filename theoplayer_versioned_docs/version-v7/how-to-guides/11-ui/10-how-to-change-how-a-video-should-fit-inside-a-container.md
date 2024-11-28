# How to change how a video should be fit inside a container

This question is asked by developers who want to alter how a video should be sized inside the video's frame.
By default, a video player respects the aspect ratio the video.

- For example, due to size of the container/frame, black pillars appear on the sides of the container.
  Instead, you want your video to cover these black pillars, even though this
- Cuts out content outside the box.
- Or deforms the content, and causing misalignment with the aspect-ratio.

## SDKs

| Web SDK | Android SDK |                   iOS SDK                   | tvOS SDK | Android TV SDK |
| :-----: | :---------: | :-----------------------------------------: | :------: | :------------: |
|   Yes   |     Yes     | Unverified through CSS/JavaScript injection |    No    |      Yes       |

## Code example

The snippets below help you understand how you could attempt to implement this use case.

### Web SDK

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

Alternatively, if you cannot use CSS for some reason, you could try to achieve the same through JavaScript.

```javascript
const videos = document.querySelectorAll('.theoplayer-skin video');
for (let i = 0; i < videos.length; i++) {
  videos[i].style.objectFit = 'cover';
}
```

##### Legacy Android SDK (4.12.x)

For SDK version **3.6.1** and above, you can use the API described at [Player#setAspectRatio(AspectRatio)](<pathname:///theoplayer/v7/api-reference/android/com/theoplayer/android/api/player/Player.html#setAspectRatio(AspectRatio)>) to set the [AspectRatio](pathname:///theoplayer/v7/api-reference/android/com/theoplayer/android/api/player/AspectRatio.html) values.

The snippet below demonstrates how you could use this API:

```java
theoPlayerView.getPlayer().setAspectRatio(AspectRatio.FIT);
```

If you are using one of `minApi21`, `androidTV` or `fireTV` SDK with version below 3.6.1, the Web SDK code above should be included in your Android (TV) project .

The article at [How to add CSS or JavaScript files to an Android/iOS project](../../../version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project.
The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this.

### iOS (tvOS) SDK

You can use the API described at [THEOplayerFullscreen](<pathname:///theoplayer/v7/api-reference/ios/Protocols/Fullscreen_Objc.html#/c:@M@THEOplayerSDK@objc(pl)THEOplayerFullscreen(im)setAspectRatioWithAspectRatio:>) to set the [video gravity](https://developer.apple.com/documentation/avfoundation/avplayerlayer/1388915-videogravity) values.

The snippet below demonstrates how you could use this API:

```swift
theoplayer.fullscreen.setAspectRatio(aspectRatio: AspectRatio.fill)
```
