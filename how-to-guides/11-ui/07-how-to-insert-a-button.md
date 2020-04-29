# How to insert a button

This articles provides information on how developers can add custom buttons to THEOplayer's **default UI**. This code snippets on this page have been verified for THEOplayer 2.58.0.

THEOplayer's default UI is based on VideoJS. A WebView is used on the iOS and Android (TV) SDK. HTML, CSS and JavaScript is used to insert a button.
When using the Android (TV) or iOS SDK, THEOplayer exposes a system to include JavaScript and CSS files (as described at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md). This system allows developers to re-use their code-logic.

## Code example

This code example adds 2 time-jump buttons to the control bar. A button to go back 10 seconds in time should be positioned to the left of the play-button, and a button to go forward 10 seconds in time should be positioned to the right of the play-button.

##### Web SDK

The buttons use the [Font Awesome](http://fontawesome.io/) icon set. This means that we first need to include the Font Awesome CSS stylesheet.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="http://cdn.theoplayer.com/demos/font-awesome/css/font-awesome.min.css"
/>
```

The code below inserts two buttons in the control bar, lets viewers jump in time when it is clicked, and adds a tooltip to the button.

```js
// setting up the rewind button by setting up a video-js component
var Button = THEOplayer.videojs.getComponent("Button");
var RewindButton = THEOplayer.videojs.extend(Button, {
  constructor: function() {
    Button.apply(this, arguments);
    /* initialize your button */
    // this.el() = created DOM-element

    // add tooltip
    var tooltipSpan = document.createElement("span");
    tooltipSpan.className = "theo-button-tooltip vjs-hidden";
    tooltipSpan.innerText = "Go back 10 seconds";
    function toggleTooltip() {
      tooltipSpan.classList.toggle("vjs-hidden");
    }
    this.el().addEventListener("mouseover", toggleTooltip);
    this.el().addEventListener("mouseout", toggleTooltip);
    this.el().appendChild(tooltipSpan);
  },
  handleClick: () => {
    player.currentTime -= 10;
  },
  buildCSSClass: function() {
    return "fa fa-step-backward vjs-button"; // insert all class names here
  }
});
THEOplayer.videojs.registerComponent("RewindButton", RewindButton);
player.ui.getChild("controlBar").addChild("RewindButton", {});

// setting up the forward button by setting up a video-js component
var Button = THEOplayer.videojs.getComponent("Button");
var ForwardButton = THEOplayer.videojs.extend(Button, {
  constructor: function() {
    Button.apply(this, arguments);
    /* initialize your button */
    // this.el() = created DOM-element

    // add tooltip
    var tooltipSpan = document.createElement("span");
    tooltipSpan.className = "theo-button-tooltip vjs-hidden";
    tooltipSpan.innerText = "Go forward 10 seconds";
    function toggleTooltip() {
      tooltipSpan.classList.toggle("vjs-hidden");
    }
    this.el().addEventListener("mouseover", toggleTooltip);
    this.el().addEventListener("mouseout", toggleTooltip);
    this.el().appendChild(tooltipSpan);
  },
  handleClick: () => {
    player.currentTime += 10;
  },
  buildCSSClass: function() {
    return "fa fa-step-forward vjs-button"; // insert all class names here
  }
});
THEOplayer.videojs.registerComponent("ForwardButton", ForwardButton);
player.ui.getChild("controlBar").addChild("ForwardButton", {});
```

You could add `vjs-control` to the return-string of `buildCSSClass` to make the button more similar to the default buttons.

Finally, you can adjust the position of the custom buttons with the order attribute, and force the cursor to use a pointer.

```css
.fa-step-backward {
  order: -101; /* to the left of the play/pause-button */
  cursor: pointer;
}
.fa-step-forward {
  order: -100; /* to the right of the play/pause-button */
  cursor: pointer;
}
```

##### Android SDK

The Web SDK code should be included in your Android (TV) project. [This article](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project below demonstrates a reference implementation.

##### iOS SDK

The Web SDK code above should be included in your iOS project. [This article](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project below demonstrates a reference implementation.

## Sample resources

The page or projects below demonstrate implementations of similar use-cases.

- Web SDK: [https://demo.theoplayer.com/adding-buttons-text-overlay-to-theoplayer](https://demo.theoplayer.com/adding-buttons-text-overlay-to-theoplayer)
  Font-Awesome is referenced through a `<script>`-tag.
- Android SDK: [https://cdn.theoplayer.com/demos/android/sample-app/SampleAppCustomButtons.zip](https://cdn.theoplayer.com/demos/android/sample-app/SampleAppCustomButtons.zip)
  Font-Awesome is added to Android's asset directory.
- iOS SDK: [https://cdn.theoplayer.com/demos/ios/sample-app/SampleAppCustomButtons.zip](https://cdn.theoplayer.com/demos/ios/sample-app/SampleAppCustomButtons.zip)
  Font-Awesome is added as a base-64 font. The THEOplayer iOS SDK has been excluded from this project.
