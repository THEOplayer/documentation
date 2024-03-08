# How to play an LCEVC source with THEOplayer

This article will show you how to play an LCEVC encoded source in THEOplayer. If you are not familiar with THEOplayer,
we strongly recommend reading the [getting started documentation for web](00-getting-started.mdx)
first.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     No      |   No    |    No    |       No       |       No       |

## Pre-requirements

#### 1. Your THEOplayer SDK needs to have the 'lcevc' feature enabled.

You can quickly check using `THEOplayer.features`. The feature is only available from THEOplayer 4.0 onwards.

#### 2. You need to include V-Nova's [Decoder Integration Layer (DIL)](https://docs.v-nova.com/v-nova/lcevc/sdk/dil) on the page.

This example below uses the latest version of the DIL that is maintained by V-Nova:

```js
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/lcevc_dil.js@latest/dist/lcevc_dil.min.js"
></script>
```

## Setting the source

After your player is correctly configured you can set your LCEVC source, but you need to also include `lcevc: true` on
the SourceDescription so that the player knows how to configure the correct playback pipeline:

##### DASH example

```js
player.source = {
  sources: {
    type: "application/dash+xml",
    src: "path/to/your/source/master.mpd",
    lcevc: true
  }
};
```

##### HLS example

```js
player.source = {
  sources: {
    type: "application/x-mpegurl",
    src: "path/to/your/source/master.m3u8",
    lcevc: true
  }
};
```

## Remarks

LCEVC enhanced playback only works on modern browsers that support Media Source Extensions (MSE). If the platform does
not support MSE (for example: Safari on iOS), the player will fall back to native playback without LCEVC enhancements.
