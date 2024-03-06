# How to use WebXR with THEOplayer

This article will show you how to play a VR source in THEOplayer using WebXR. If you are not familiar with
THEOplayer, we strongly recommend reading
the [getting started documentation for web](https://docs.theoplayer.com/getting-started/01-sdks/01-web/00-getting-started.md)
first.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     No      |   No    |    No    |       No       |       No       |

## Pre-requirements

#### 1. You need THEOplayer version 5.0 or greater.

Older versions of THEOplayer will work with regular VR, but not with WebXR.

#### 2. Your THEOplayer SDK needs to have the `vr-webxr` feature enabled.

You can quickly check using `THEOplayer.features`.

#### 3. You will need the [WebXR polyfill](https://github.com/immersive-web/webxr-polyfill) for platforms that do not have native support.

Notice: The official polyfill has a bug in its rendering. THEOplayer has proposed a fix, but it has not yet merged into
the main project. In the meanwhile you can use a patched build from our CDN. We highly recommend you to download this
patch, since it will no longer be available when the main polyfill is fixed.

Add the polyfill to your page:

```html
<script src="//cdn.theoplayer.com/webxr/webxr-polyfill-patched.js"></script>
```

And enable it:

```js
const POLYFILL_CONFIG = {
  allowCardboardOnDesktop: true
};
new WebXRPolyfill(POLYFILL_CONFIG);
```

## Add useWebXR to your PlayerConfiguration

The default behavior for THEOplayer is to use regular VR, so make sure to add the following VR configuration to
your `PlayerConfiguration`:

```ts
const playerConfig: PlayerConfiguration = {
  // ...
  vr: {
    useWebXR: true
  }
};
```

## Setting a VR source

You can set the following source to test:

```js
player.source = {
  sources: {
    src: "//demo.theoplayer.com/hubfs/videos/natgeo/playlist.m3u8",
    crossOrigin: "anonymous"
  },
  vr: {
    panoramaMode: "360",
    stereoMode: "none"
  },
  poster: "//demo.theoplayer.com/hubfs/videos/natgeo/poster.jpg"
};
```

If everything went well, you should now be using WebXR!
