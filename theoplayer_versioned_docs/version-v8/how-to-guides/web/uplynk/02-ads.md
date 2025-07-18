# Uplynk Ads

Uplynk offers support for [server-side ad-insertion](https://docs.uplynk.com/docs/ads) (SSAI).

This article explains how to use the Uplynk Ads API exposed by THEOplayer to hook into these SSAI advertisements.
Additionally, this API allows developers to manipulate the ad-related UX and UI.

## Global Configuration

The examples below demonstrate how to pass along global configuration for the Uplynk ads. These settings can be overwritten.

##### Web SDK

```js
var player = new THEOplayer.Player(element, {
  uplynk: {
    defaultSkipOffset: 2, // Ad breaks added by SSAI are by default skippable after two seconds. Optional and defaults to unskippable.
    onSeekOverAd: 'play-last', // When seeking over ad breaks, this configuration decides how to snapback and play any missed ad breaks.
    // Possible values are currently 'play-none', 'play-last' and 'play-all' where 'play-none' is the default.
  },
  // ... Other configuration goes here
});
```

## Uplynk Ads API

:::info Deprecation

Starting THEOplayer v8.12.0, it is possible to use the regular `player.ads` API for subscribing to Uplynk ad breaks, as described on [How to subscribe to ad events](../../01-ads/11-how-to-subscribe-to-ad-events.md).
The implementation below can be expected to be removed in the future.

:::

Specifying a source which contains server-side ads configured through the Uplynk pre-integration will have the player
expose an Ads API specific to Uplynk, i.e. on the `player.uplynk.ads` API:

- `player.uplynk.ads.adBreaks`: Specifies all ad breaks that are currently in the stream by using SSAI through Preplay.
- `player.uplynk.ads.currentAdBreak`: If applicable, returns the ad break that is currently being played.
- `player.uplynk.ads.currentAds`: If applicable, returns a list of the current ads being played.
- `player.uplynk.ads.skip()`: If there is an ad break playing, and it is skippable, skip the ad break to the next content (or next seek point in case of snapback).

Calling the `player.uplynk.ads.skip()` function on a live stream will not have any effect.

In addition, event listeners are available to listen to new ad breaks:

- For adbreaks, the following events are defined:

  - _adbreakbegin_
  - _adbreakend_
  - _adbreakskip_
  - _addadbreak_
  - _removeadbreak_

- For ads, the following events are defined:
  - _adbegin_
  - _adchange_
  - _adend_
  - _adfirstquartile_
  - _admidpoint_
  - _adthirdquartile_
  - _adcomplete_

```js
// Sample source snippet

player.uplynk.ads.adBreaks.addEventListener('addadbreak', (event) => {
  // do something with event.adBreak as it is an ad break added through SSAI, an example:
  const adBreak = event.adBreak;
  if (adBreak.duration <= 15) {
    adBreak.skipOffset = -1; // Do not allow skipping of short ad breaks
  } else if (adBreak.duration > 60) {
    adBreak.skipOffset = 10; // Allow skipping of long ad breaks after ten seconds
  } else {
    adBreak.skipOffset = 0; // For all other ad breaks, allow immediate skipping
  }
  // subscribe to additional events
  event.adBreak.addEventListener('adbreakbegin', console.log);
  event.adBreak.addEventListener('adbreakend', console.log);
  for (var i = 0; i < event.adBreak.ads.length; i++) {
    event.adBreak.ads[i].addEventListener('adbegin', console.log);
    event.adBreak.ads[i].addEventListener('adend', console.log);
  }
});
```

## Related articles

- [Uplynk - Preplay](01-preplay.md)
- [Uplynk - Ping](03-ping.md)
