# Uplynk configuration

This article explains what is possible with an Uplynk configuration when setting up a THEOplayer instance.

## Features

Developers can set an Uplynk configuration when creating their video player instance. Through this configuration, developers can set some UX and UI preferences related to the Uplynk integration.

- `defaultSkipOffset`: specifies when an ad break can be skipped. The default value is `-1`, which means that the ad break cannot be skipped.
- `onSeekOverAd`: specifies what should happen when viewers try to seek over an ad. By default, no ad are played when seeking over ads. As an alternative, you can
  1. only play the last ad break (before the requested playhead position), or
  2. play all ad breaks (before the requested playhead position).
- `ui`
  - `adBreakMarkers`: specifies that a (red) ad break marker should be rendered in the scrub bar. (Enabled by default.)
  - `assetMarkers`: specifies that a (black) asset marker should be rendered in the scrub bar. (Enabled by default.)
  - `adNotification`: specifies that a count-down timer must be rendered when an ad is playing. (Enabled by default.)
  - `contentNotification`: specifies that a count-down timer to the next asset must be rendered when the viewer is close to the transition of another asset of a multi-asset stream. (Enabled by default.)

You can toggle this features on [our demo page](https://cdn.theoplayer.com/demos/verizon-media/index.html). _(Note: technically, this demo doesn't use `defaultSkipOffset` to configure the skip offset. Instead, this demo uses `player.uplynk.ads.adBreaks[<element>].skipOffset` to adjust this dynamically at run-time.)_

![UplynkDemo](../../../../../theoplayer/assets/img/VerizonMediaConfiguration.png 'Uplynk Configuration')

The examples below demonstrate how to use an Uplynk configuration per platform.

```js
const player = new THEOplayer.Player(element, {
    libraryLocation: '...',
    uplynk: { // optional
        onSeekOverAd: 'play-all', // default to 'play-none'. Other values: 'play-all' and 'play-last'
        ui: {
            contentNotification: true, // optional; defaults to true
            adNotification: true, // optional; defaults to true
            assetMarkers: true, // optional; defaults to true
            adBreakMarkers: true, // optional; defaults to true
        },
        defaultSkipOffset: 5 // ad break can be skipped after 5 seconds. (defaults to -1)
    },
    ...
});
```

Refer to the [UplynkConfiguration API reference](pathname:///theoplayer/v8/api-reference/web/interfaces/UplynkConfiguration.html) for more information.

# Related articles

- [Uplynk - Ads](02-ads.md): this article zooms in on `defaultSkipOffset` and ``onSeekOverAd`.
- [Uplynk - Introduction](00-introduction.mdx): this article links to sample Git projects which implement an `UplynkConfiguration`.
