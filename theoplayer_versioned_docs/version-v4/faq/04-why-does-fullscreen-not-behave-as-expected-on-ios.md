# Why does fullscreen not behave as expected on iOS

One of the most frequently encountered issues on iOS devices is unexpected behavior concerning fullscreen playback.

This is in fact an iOS limitation, since iOS + Safari does not allow showing non-video elements in fullscreen, as mentioned on this [support matrix](https://caniuse.com/#feat=fullscreen).

THEOplayer's workaround involves playback in full-window, which sets THEOplayer's container to a `width` and `height` of 100%. Other elements can be placed on top of this view by giving it the CSS property `position: absolute;` (Combined with a top/bottom/right/left value) If this is not desired, reduce the `z-index` of these other elements.

Note that this solution keeps the THEOplayer UI intact, but doesn't get rid of the address bar as desired in some cases.

Alternatively, developers can use the [allowNativeFullscreen](pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerConfiguration.html#allowNativeFullscreen) property mentioned here, which pushes the video element to fullscreen as seen below.

```js
<script>
    var element = document.querySelector('.theoplayer-container');
    var player = new THEOplayer.Player(element, {
        libraryLocation : '/your_library_location/',
        license: "your_license",
        allowNativeFullscreen: true,
        ui : {
            width : '500px',
            heigth : '100px'
        }
    });

    player.source = {
        sources : [{
            src : '//cdn.example.com/index.m3u8',
            type : 'application/x-mpegurl'
        }]
    };
</script>
```

The downside of this approach is that the iOS native look & feel will replace the custom UI, although the address bar will be gone.

When you go full-window in an iframe, you won't see the container of the video grow because the iframe can't get any larger.
