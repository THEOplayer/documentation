# Customize UI during ad playback

This how-to guide describes how to customize the look and feel of the player when an advertisement is playing. We will be leveraging mainly some event listeners and CSS. In the section *Resources*, at the bottom of the page, you will also find links to the reference API and to a related how-to guide that explains when and how the texts displayed during ad playback (if any) may be changed.

## SDKs

| Web SDK |           Android SDK            |             iOS SDK              | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :------------------------------: | :------------------------------: | :--: | :------------: | :------------: |
|   Yes   | Through CSS/Javascript injection | Through CSS/Javascript injection | No  |      Through CSS/Javascript injection       |      N/A       |

## How to customize the ad playback UI

You may want to alter the UI during ad playback, for example in order to hide some elements, to show some new elements or to change the aspect of existing ones. In the following, we will see some example related to this.

### Detecting ad playback

There are two general approaches to detect advertisement playback:

1. A responsive approach using a **CSS rule**.
2. A programmatic approach using **events**.


##### Web SDK

Whenever you create a THEOplayer instance, you need to provide a DOM-element which will be the container of the player (for more information regarding this, see Resources). This container gains the .`theo-ad-playing` class whenever an advertisement is playing. Through CSS you could use this class to enforce certain behavior. For example, you could hide the fullscreen button if an ad is playing.

```css
.theo-ad-playing .vjs-fullscreen-control {
    display: none !important;
}
```

##### Android SDK

The Web SDK code should be included in your Android (TV) project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this. 

##### iOS SDK

The Web SDK code should be included in your Android (TV) project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project. The sample project at [How to insert a button](../../how-to-guides/11-ui/07-how-to-insert-a-button.md) demonstrates this.

### Events

The [Ads API](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.ads.md) exposes, among others, the following events:

- `adbegin`: dispatched when an ad starts
- `adend`: dispatched when an ad ends
- `adbreakbegin`: dispatched when an ad break (or ad slot) starts
- `adbreakend`: dispatched when an ad break ends

##### Web SDK

The snippet below demonstrates how you could detect the start of an adbreak through a JavaScript event listener.

```js
player.ads.addEventListener('adbreakbegin', console.log);
```

These events can be used to trigger a certain behavior programmatically.

##### Android SDK

// work in progress

##### iOS SDK

// work in progress

### Displaying an advertisement label

##### Web SDK

The snippet below demonstrates how to add a label to the control bar during ad playback using CSS and Javascript.

CSS

```css
.theo-ad-playing .theo-advert-label {
        display: block !important;
}

.theo-ad-playing .vjs-fullscreen-control {
    display: none !important;
}
```

Javascript
```js
var button = THEOplayer.videojs.getComponent("Button");
var myButton = THEOplayer.videojs.extend(button, {
    constructor: function() {
        button.apply(this, arguments);
        this.el().innerHTML = "Ad";
    },
    handleClick: function() {
        elementContainer.classList.toggle("hidden");
    },
    buildCSSClass: function() {
        return "theo-advert-label";
    }
});
THEOplayer.videojs.registerComponent("AdvertLabelButton", myButton);
player.ui.getChild("controlBar").addChild("AdvertLabelButton", {});
```

##### Android SDK

// work in progress

##### iOS SDK

// work in progress

### Adding a custom countdown

##### Web SDK

The snippet below demonstrates how to add a countdown timer using primarily JavaScript.

CSS

```css
.theo-ad-countdown {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 5em;
}
```

Javascript
```js
function updateTime() {
    var countdown = document.querySelector('.theo-ad-countdown');
    if (countdown) {
        countdown.innerHTML = Math.round(player.duration - player.currentTime);
    }
}

player.ads.addEventListener('adbegin', function(e) {
    var countdown = document.createElement('div');
    countdown.className = "theo-ad-countdown";
    countdown.innerHTML = player.duration;
    element.appendChild(countdown);

    player.addEventListener('timeupdate', updateTime);
});

player.ads.addEventListener('adend', function(e) {
    var countdown = document.querySelector('.theo-ad-countdown');
    if (countdown) {
        player.removeEventListener('timeupdate', updateTime);
        element.removeChild(countdown);
    }
});
```

##### Android SDK

// work in progress

##### iOS SDK

// work in progress

