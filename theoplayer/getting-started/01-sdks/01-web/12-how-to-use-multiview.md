# How to use MultiView

This article will go over how to work with THEOplayer's MultiViewPlayer. As the setup is very similar to using
normal THEOplayer, we strongly recommend reading the [getting started documentation for web](00-getting-started.md) first.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     No      |   No    |    No    |       No       |       No       |

## Prerequisites

#### 1. Your THEOplayer SDK needs to have the 'multiview' feature enabled.

You can quickly check using `THEOplayer.features`. The feature is only available from THEOplayer 4.3 and onwards.
This feature is included by default in the [@theoplayer/extended](https://www.npmjs.com/package/@theoplayer/extended) npm package.

#### 2. You need to have a THEOplayer license which is compatible with MultiView

This can be done through [https://portal.theoplayer.com](https://portal.theoplayer.com).

## Basic setup

To make a MultiViewPlayer, one has to add the following code to their page:

```html
<div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>
<script src="/path/to/THEOplayer.js"></script>
<script>
  var element = document.querySelector(".theoplayer-container"); // fetch THEOplayer container div

  var player = new THEOplayer.MultiViewPlayer(element, {
    // instantiates the MultiView player
    libraryLocation: "/path/to/your-theoplayer-folder/", // references folder containing your THEOplayer library files (THEOplayer.js, ...)
    license: "your_license_string" // references your THEOplayer SDK license
  });
</script>
```

Now that the MultiViewPlayer is instantiated, you'll need to load each view separately:

```js
player.load("Label", {
  sources: [
    {
      src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8", // sets HLS source
      type: "application/x-mpegurl" // sets type to HLS
    }
  ]
});
```

The MultiViewPlayer has a slightly different API from the general THEOplayer, so for more information we refer to the [documentation](https://docs.theoplayer.com/api-reference/web/theoplayer.multiviewplayer.md).
