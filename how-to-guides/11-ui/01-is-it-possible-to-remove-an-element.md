# Is it possible to remove an element from the UI?

This question may be asked if you want to limit the options/controls that are showed in the UI.

There are three possible approaches to this:

1. Use the Chromeless version and build your own UI on top of it. This may be useful if you do not need to remove just one element, but want a radically different UI.
2. Hide the element through CSS
3. Remove it through Javascript

In the following we will briefly explore the last two possibilities.

### Table of Contents
- [SDKs](#sdks)
- [Code examples](#code-examples)
  
## SDKs

| Web SDK |           Android SDK            |             iOS SDK              | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :------------------------------: | :------------------------------: | :--: | :------------: | :------------: |
|   Yes   | Through CSS/Javascript injection | Through CSS/Javascript injection | N/A  |      N/A       |      N/A       |

## Code examples

For this example we will consider the Speed menu option (control bar > Settings > Speed) as the element to remove from the page. The following methods may of course be used for other elements.

##### Web SDK

**Hide the element with CSS**

We identify the element and hide it. Since In this specific case there is no id or class to identify this element specifically, we make use of its aria attribute. Of course, should it change, this line of code should be adapted accordingly.

```css
.theoplayer-skin li[aria-label="Open the video speed settings menu"] {
  display: none !important;
}
```
**Remove the element through Javascript**

In alternative to CSS, it is also possible to achieve the same result with Javascript, in the following way.

```js
function firstplay(event) {
  player.removeEventListener("playing", firstplay);
  var speed = document.querySelector(
    '.theoplayer-skin li[aria-label="Open the video speed settings menu"]'
  );
  speed.parentNode.removeChild(speed);
}
player.addEventListener("sourcechange", function() {
  player.removeEventListener("playing", firstplay);
  player.addEventListener("playing", firstplay);
});
```

##### Android SDK

To achieve the same result on Android SDK, the same CSS need to be passed to your app.

**Step 1**

To learn how to inject CSS into your Android project, follow the guide  [Android SDK Customization - Custom CSS and JavaScript files](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

**Step 2**

In the CSS or Javascript file you created, add the code reported above in the Web SDK section.

##### iOS SDK

To achieve the same result on iOS SDK, the same CSS need to be passed to your app.

**Step 1**

To learn how to inject CSS into your iOS project, follow the guide [iOS SDK Customization - Custom CSS and JavaScript files](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

**Step 2**

In the CSS or Javascript file you created, add the code reported above in the Web SDK section.
