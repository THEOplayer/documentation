---
sidebar_position: 1
---

# Direct HTML

First you should load the THEOlive player in your HTML page:

```html Include the THEOlive player
<script type="text/javascript" src="node_modules/@theolive/player/THEOLive.js"></script>
```

:::note
If the file is hosted on a different location, make sure to update the src to the correct path.
:::

Next, we should add a script to check if the player requires a service worker to play:

```html Service worker check
<script type="text/javascript">
  if (THEOLive.requiresServiceWorker()) {
    navigator.serviceWorker.register('THEOLive.sw.js');
  }
</script>
```

Add an html element to pass to the player.

```html
<div id="player"></div>
```

Finally, create the player and load the desired channel.

```html Create the player
<script type="text/javascript">
  const player = new THEOLive.Player(document.getElementById('player'));
  player
    .loadChannel('<your-channel-id>')
    .then(() => {
      player.play(); // not required if your channel is configured to autoplay
    })
    .catch(console.error);
</script>
```

## Full example

This is a minimal page that creates a THEOlive player:

```html Full HTML example
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
  </head>
  <body>
    <h1>Testing</h1>
    <div id="player"></div>

    <script type="text/javascript">
      if (THEOLive.requiresServiceWorker()) {
        navigator.serviceWorker.register('THEOLive.sw.js');
      }
      const player = new THEOLive.Player(document.getElementById('player'));
      player
        .loadChannel('<your-channel-id>')
        .then(() => {
          player.play(); // not required if your channel is configured as autoplay
        })
        .catch(console.error);
    </script>
  </body>
</html>
```

Make sure to replace _\<your-channel-id\>_ with your actual channel-id and that you have completed the steps in the getting started tutorial and your channel is up and running.
