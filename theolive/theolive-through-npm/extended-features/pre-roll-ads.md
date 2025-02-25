---
sidebar_position: 2
---

# Pre-roll ads

:::note
Available on npm v3.1.0 and up
:::

It is now possible to play pre-roll ads with the THEOlive player using the Google IMA integration. First make sure the Google IMA SDK is loaded in your page:

```html
<script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
```

Then you can load any channel and provide a `AdsConfiguration` with a list of ads to play:

```javascript
player.loadChannel('<your-channel-id>', {
  adsConfiguration: {
    ads: [
      {
        source:
          'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',
      },
    ],
  },
});
```

The THEOlive player should now play the list of pre-roll ads you provided just before the channel starts playing!

## Full example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Test page</title>
    <script type="text/javascript" src="node_modules/@theolive/player/THEOLive.js"></script>
    <style>
      #player {
        width: 80vw;
        margin: auto;
      }
    </style>
    <script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
  </head>
  <body>
    <h1>Testing</h1>
    <button id="channel">Channel With pre-roll ad</button>
    <div id="player"></div>

    <script type="text/javascript">
      if (THEOLive.requiresServiceWorker()) {
        navigator.serviceWorker.register('THEOLive.sw.js');
      }
      const player = new THEOLive.Player(document.getElementById('player'));

      document.getElementById('channel').onclick = async function () {
        await player.loadChannel('<your-channel-id>', {
          adsConfiguration: {
            ads: [
              {
                source:
                  'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',
              },
            ],
          },
        });
        player.play(); // not needed if your channel was configured for autoplay
      };
    </script>
  </body>
</html>
```
