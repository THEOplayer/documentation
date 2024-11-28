# How to disable click to pause

When you use the default UI of THEOplayer you can pause (and resume) the video by clicking anywhere on the video (except in the control bar).
You can confirm this behavior at [https://demo.theoplayer.com/test-your-stream-with-statistics](https://demo.theoplayer.com/test-your-stream-with-statistics).

You might be interested in disabling this behavior because your functional requirements don't allow you to pause the video.

You can disable this default UX behavior through CSS on both the Web SDK, iOS SDK and Android SDK.
The next section will focus on the Web SDK specifically. We'll also discuss some related APIs.
To achieve the same on the iOS SDK you can implement the Web SDK approach through [iOS SDK customization](../../../version-v4/getting-started/01-sdks/03-ios/01-ios-sdk-customization.md).
To achieve the same on the Android Legacy (4.12.x) SDK you can implement the Web SDK approach through [Android Legacy (4.12.x) SDK customization](../../../version-v4/getting-started/01-sdks/02-android/01-android-sdk-customization.md).

## SDKs

| Web SDK |                       iOS SDK                        |                     Android SDK                      | tvOS SDK | Android TV SDK | Roku SDK | Chromecast SDK |
| :-----: | :--------------------------------------------------: | :--------------------------------------------------: | :------: | :------------: | :------: | :------------: |
|   Yes   | Yes, but unverified through CSS/JavaScript injection | Yes, but unverified through CSS/JavaScript injection |   N/A    |      N/A       |   N/A    |      N/A       |

### Web SDK

The following CSS snippet disables pause to click by no longer catching the pointer event.

```css
.video-js .vjs-tech {
  pointer-events: none;
}
```

The following JavaScript snippet automatically resumes a video when someone tries to pause it by leveraging the [`pause`](pathname:///theoplayer/v7/api-reference/web/interfaces/PlayerEventMap.html#pause) event and the [`play()`](pathname:///theoplayer/v7/api-reference/web/classes/ChromelessPlayer.html#play) method.

```javascript
player.addEventListener('pause', () => {
  player.play();
});
```

The following CSS snippet hides the play and pause button.

```css
.video-js .vjs-play-control {
  display: none;
}
```

Interested in autoplay behavior? You might find ["How to combat autoplay policies"](../../faq/02-how-to-combat-autoplay-policies.md) an interesting read.
