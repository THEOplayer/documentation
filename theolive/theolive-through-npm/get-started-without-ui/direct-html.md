---
sidebar_position: 1
---

# Direct HTML

In case you don't want the THEOlive UI, you have the option to create the player in chromeless mode.  
The way to achieve this, is to include the THEOlive.chromeless.js file.

```html
<script type="text/javascript" src="node_modules/@theolive/player/THEOLive.chromeless.js"></script>
```

Now you can build your own UI on top of it, and control the player through the API.

Some important remarks when using the chromeless player:

- Ensure that a parent element of the player has the position attribute set to either _relative_ or _absolute_.
- Fullscreen / inline functionality should be achieved by using the browser's requestFullscreen API instead of the player API.

## Full example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>THEOLive Chromeless</title>
    <script type="text/javascript" src="node_modules/@theolive/player/THEOLive.chromeless.js"></script>
    <style>
      body {
        font-family: sans-serif;
        margin: 1rem;
      }

      #player {
        position: relative;
        background: orange;
        margin: auto;
        width: 100rem;
        max-width: 100%;
      }

      .title {
        position: absolute;
        top: 0;
        right: 1rem;
        color: white;
      }

      .controls {
        position: absolute;
        left: 1rem;
        right: 1rem;
        bottom: 1rem;
        z-index: 2;
      }
    </style>
  </head>
  <body>
    <div id="player">
      <h1 class="title">THEOLive Chromeless</h1>
      <div class="controls">
        <button id="play">play</button>
        <button id="pause">pause</button>
      </div>
    </div>

    <script type="text/javascript">
      if (THEOLive.requiresServiceWorker()) {
        navigator.serviceWorker.register('THEOLive.sw.js');
      }
      const player = new THEOLive.Player(document.getElementById('player'));
      player.loadChannel('<your-channel-id>').catch(console.error);

      document.getElementById('play').onclick = function () {
        player.play();
      };

      document.getElementById('pause').onclick = function () {
        player.pause();
      };
    </script>
  </body>
</html>
```
