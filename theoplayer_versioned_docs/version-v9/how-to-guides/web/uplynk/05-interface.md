# Uplynk interface

This article explains how developers can hook into the Uplynk interface. This interface allows developers to query the available assets and ads in an Uplynk stream, its properties, and subscribe to its events.

## Using the Uplynk interface

The `Uplynk` interface is exposed through your THEOplayer instance (e.g.: `player.uplynk` for the Web SDK). Through this interface,

- You can retrieve information (e.g. start and stop time) on the available assets (because THEOplayer extracts this information from its integration with the Asset Info and Preplay service offered by Uplynk).
  - You can also subscribe `addasset` and `removeasset` events, which can be useful when you need to be informed when the assets become available.
- You can intercept Preplay, Asset Info and Ping responses (because THEOplayer integrates with these services offered by Uplynk).
- You can retrieve information on the available advertisements (because THEOplayer extracts this information from its integration with the Preplay and Ping service offered by Uplynk).
  - You can also subscribe to `addadbreak`, `addad`, `removeadbreak`, ... events, which can be useful if you want to know when which state is applicable (e.g. to overlay a custom advertisement countdown-timer).
  - You can also adjust the ad skip offset of an ad break.

If you're looking for more information on how to query the available advertisements and how to subscribe to ad events, then refer to [Uplynk Ads](02-ads.md).

The examples below provide a basic demonstration of how to use the `Uplynk` interface. The GitHub projects linked at [Uplynk - Introduction](00-introduction.mdx) provide more code samples.

```js
const player = new THEOplayer.Player(element, {...});
// uplynk events
[
    'preplayresponse',
    'pingresponse',
    'assetinforesponse'
].forEach(function(e) {
    player.uplynk.addEventListener(e, console.log);
});
// uplynk.assets events
[
    'addasset',
    'removeasset'
].forEach(function(e) {
    player.uplynk.assets.addEventListener(e, console.log);
});
// uplynk.ads events
[
    'addadbreak',
    'removeadbreak'
].forEach(function(e) {
    player.uplynk.ads.adBreaks.addEventListener(e, function (e1) {
        if (e1.type === "addadbreak") {
            // uplynk.ads.adBreak[i] events
            [
                'adbreakbegin',
                'adbreakend',
                'adbreakskip',
                'updateadbreak'
            ].forEach(function(e) {
                e1.adBreak.addEventListener(e, console.log);
                // uplynk.as.adBreak.ads[i] events
                for (let i = 0; i < e1.adBreak.ads.length; i++) {
                    [
                        'adbegin',
                        'adend',
                        'adfirstquartile',
                        'admidpoint',
                        'adthirdquartile',
                        'adcomplete'
                    ].forEach(function(e) {
                        e1.adBreak.ads[i].addEventListener(e, console.log);
                    });
                }
            });
        }
    });
});
```

Refer to the [Uplynk API reference](pathname:///theoplayer/v9/api-reference/web/interfaces/Uplynk.html) for more information. Additionally, reviewing [the player configuration in the demo app](https://github.com/THEOplayer/samples-html5-sdk/blob/master/reference-apps/verizon-media-app/src/player.js) helps to understand the `Uplynk` interface.

## Related articles

- [Uplynk - Introduction](00-introduction.mdx): this article links to sample Git projects which query (and subscribe to) the various properties and events offered by the `Uplynk` interface.
- [Uplynk - Preplay](01-preplay.md): this article explains how you can use the Uplynk interface to intercept Preplay responses.
- [Uplynk - Ads](02-ads.md): this article offers more information on the `ads` parts of the Uplynk interface.
- [Uplynk - Ping](03-ping.md): this article explains how you can use the Uplynk interface to intercept Ping responses.
