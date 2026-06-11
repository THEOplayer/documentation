# Basic player

<!-- -->

Code

```html
<div id="player" class="video-js theoplayer-skin vjs-16-9"></div>
<script>
  var player = new THEOplayer.Player(document.querySelector('#player'), {
    libraryLocation: '/path/to/theoplayer',
    license: 'your_theoplayer_license',
  });
  player.source = {
    sources: [
      {
        src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
        type: 'application/x-mpegurl',
      },
    ],
  };
</script>

```
