# How to implement a seamless transition between videos?

You may need an answer to this question if you want to play one video after the other without letting the user know the source has changed (to the user they will seem as if playing just one video). Similar questions may be:

- Is it possible to make 2 video files play one after the other without pause?
- How can I play a second video file after the first without the user notice what happened?
- How to make a forking video, one where the user can choose his/her own path?

**This result is achieved taking advantage of a HTML5 canvas element to cover the source change.** An example can be seen on [this page](http://cdn.theoplayer.com/demos/confluence/seamless-video-transition.html).

You can find the code of the page here below, opportunely commented to clarify how it works (hint: all interesting comments start with "COMMENT:" to aid the search).

Seamless video transitionExpand source

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />

    <title>Seamless video transition</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css"
      integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" type="text/css" href="//cdn.theoplayer.com/dash/theoplayer/ui.css" />

    <script type="text/javascript" src="//cdn.theoplayer.com/dash/theoplayer/THEOplayer.js"></script>

    <style>
      canvas {
        width: 100%;
        height: 100%;
        position: absolute;
        display: none;
      }
      button {
        margin: 1em 0;
      }
    </style>
  </head>
  <body>
    <h1>Seamless video transition</h1>
    <div class="container">
      <div id="theoplayer-wrapper">
        <div class="video-js theoplayer-skin">
          <!-- COMMENT: a canvas element is set inside the THEOplayer wrapper. Initial sizes are set but will be reset when the canvas is called -->
          <canvas width="503px" height="283px"> </canvas>
        </div>
        <button id="sourcechange-btn">Change video</button>
      </div>
    </div>

    <script type="text/javascript">
      var element = document.querySelector('.video-js');

      // COMMENT: some player configuration here - interesting but nothing related to this example
      var player = new THEOplayer.Player(element, {
        ui: {
          //fluid: true
          width: '800',
          height: '450',
        },
        libraryLocation: '//cdn.theoplayer.com/dash/theoplayer/',
      });
      player.autoplay = true;
      player.source = {
        sources: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
      };

      //COMMENT: objective: hide the transition between 2 videos.
      // To do this, we:
      // - detect when the source must be changed
      // - save the last frame in the canvas poster that is placed on top of the player
      // - we load the new source
      // - when playback starts, the canvas is hidden

      // COMMENT: this detects the first play event and calls the function firstplay()
      player.addEventListener('sourcechange', function () {
        //console.log("A new SourceDescription has been set.");
        player.removeEventListener('playing', firstplay);
        player.addEventListener('playing', firstplay);
      });

      // COMMENT: on click we call writeToCanvas() and change the player source after a small delay (time is needed for the canvas content to be loaded)
      var button = document.querySelector('#sourcechange-btn');
      button.addEventListener('click', () => {
        writeToCanvas();
        setTimeout(function () {
          player.src =
            'https://amssamples.streaming.mediaservices.windows.net/bb34a723-f69a-4231-afba-dc850f9e3da8/ChildOfThe90s.ism/manifest(format=m3u8-aapl)';
        }, 50);
      });

      // COMMENT: canvas is hidden when the first play event is fired
      function firstplay(event) {
        var canvas = document.querySelector('canvas');
        player.removeEventListener('playing', firstplay);
        //console.log("first play event!", event);
        canvas.style.display = 'none';
      }

      // COMMENT:
      // (1) Canvas is detected, its sizes adapted to those of the player and it gets the last frame as content.
      // (2) It is displayed as block (as opposed to the initial "none")
      function writeToCanvas() {
        var canvas = document.querySelector('canvas');
        canvas.setAttribute('width', player.videoWidth + 'px');
        canvas.setAttribute('height', player.videoHeight + 'px');
        var ctx = canvas.getContext('2d');
        canvas.style.display = 'block';
        player.canvas.drawImage(ctx, 0, 0);
      }
    </script>
  </body>
</html>
```

The result on your page can also be improved implementing [cache](pathname:///theoplayer/v4/api-reference/web/interfaces/Cache.html) for your videos.
