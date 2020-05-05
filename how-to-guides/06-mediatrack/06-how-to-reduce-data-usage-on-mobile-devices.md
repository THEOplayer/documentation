# How to reduce data usage on mobile devices on mobile web

Customers that use THEOplayer in mobile web which leverage THEOplayer's preloading capabilities (`preload = "auto"`), or provide very high qualities, sometimes receive complaints about data usage.

You can combat this by leveraging the [ABR API](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.abrconfiguration.md) and the [MediaTrack API](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.mediatrack.md). 

1. ABR API: you can set a `player.abr.targetBuffer` property, which allows you to configure the amount of seconds to buffer ahead of the current playback position. The standard buffer time is 20 seconds. These 20 seconds are also employed when preloading content.
2. MediaTrack API: you can use the targetQuality property to configure the set of qualities THEOplayer exercises its ABR algorithm on. For example, you could configure that THEOplayer should only do ABR on the lowest two qualities.

### Table of Contents
- [Step-by-step guide](#step-by-step-guide)
  - [1. To leverage the **ABR API**](#1to-leverage-the-abr-api)
  - [2. Set the ABR targetDuration property to lower number of seconds. (e.g. 6 seconds)](#2-set-the-abr-targetduration-property-to-lower-number-of-seconds-eg-6-seconds)
  - [3. If necessary add a mobile check like this:](#3-if-necessary-add-a-mobile-check-like-this)
  - [4. Enable preloading](#4-enable-preloading)
- [Related articles](#related-articles)


## Step-by-step guide

### 1. To leverage the **ABR API**
and limit the buffer that will be preloaded through `preload = "auto":`

### 2. Set the ABR targetDuration property to lower number of seconds. (e.g. 6 seconds)

##### Web SDK

The snippet below sets the targetBuffer to 6 seconds.

```js
player.abr.targetBuffer = 6;
```

##### Android SDK

The snippet below sets the targetBuffer to 6 seconds.

```java
theoplayer.getPlayer().getAbr().setTargetBuffer(6);
```

##### iOS SDK

The iOS SDK does not allow you to change the targetBuffer. The iOS SDK's ABR API only allows you to change the ABRStrategyType.

### 3. If necessary add a mobile check like this: 

##### Web SDK

The snippet below leverages THEOplayer's Video.js component. THEOplayer uses Video.js for its default UI.

```js
if (THEOplayer.videojs.browser.IS_ANDROID || THEOplayer.videojs.browser.IS_IOS || ... ) {
    player.abr.targetBuffer = 6;
}
```

### 4. Enable preloading
The snippet below enables preloading

##### Web SDK

Enable preloading: `player.preload = "auto"; // "metadata" is also a valid value`

##### Android SDK

Enable preloading: `theoplayer.getPlayer().setPreload(PreloadType.AUTO);`

##### iOS SDK

1. enable preloading: `theoplayer.setPreload(.auto)`

2. To leverage the **MediaTrack API**, and limit the amount of bitrates which THEOplayer can select from, please refer to the article at [How to start with a specific quality?](../../how-to-guides/06-mediatrack/05-how-to-start-with-specific-quality).

These two strategies can reduce the data usage on (mobile) devices drastically.

## Related articles

- [How to start with a specific quality?](05-how-to-start-with-specific-quality.md)
- [Customize UI during ad playback](../11-ui/09-customize-ui-during-playback.md)
- [React](../../getting-started/02-frameworks/02-react/00-getting-started.md)
- [How to reduce data usage on mobile devices on mobile web](06-how-to-reduce-data-usage-on-mobile-devices.md)
- [How to implement Keyboard Hotkeys](../../getting-started/01-sdks/01-web/02-how-to-implement-hotkeys.md)