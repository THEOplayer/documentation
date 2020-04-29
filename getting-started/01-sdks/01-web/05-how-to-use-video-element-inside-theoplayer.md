# How can I use `<video>` inside THEOplayer?

You may be asking this question **if you come from THEOplayer 1.X** and were availing yourself of the properties of `<video>` for your implementation. Similar questions are:

- Why did you lose the HTML5 video tag in version 2.X?
- Does THEOplayer 2.X work without `<video>`?

THEOplayer still uses the `<video>` element, but in v. 2.X it is not necessary to include it on the page, as the necessary player elements get generated inside the player container, which you find on the page.

However, if you were using `<video>` or its attributes for something in particular in your implementation, this is still possible. Here follows an example: HTML page and script.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>THEOplayer 2.X: Getting Started</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href='/path/to/ui.css'> <!-- adds THEOplayer CSS -->
    </head>
    <body>
        <div class="theoplayer-container video-js theoplayer-skin">
            <!-- this is your custom <video> element to be modified as wished. It is important that it is inside the div.theoplayer-container -->
            <video width="400" controls src="//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8">
            </video>
        </div>
        <script type='text/javascript' src='/path/to/THEOplayer.js'></script> <!-- adds THEOplayer library -->
        
        <!-- COMMENT: this script is what makes it possible. Find its content below in the article. -->
        <script src="/path/to/THEO-HTMLvideotag.js"  data-librarylocation="/path/to/"></script>
        
        <script>
            var element = document.querySelector('.theoplayer-container');
            var player = new THEOplayer.Player(element, {
                libraryLocation : '/path/to/your-theoplayer-folder/'
            });
            // COMMENT: this part of the configuration can now be deleted or hidden, as the same data is extracted from the video element
            // player.source = {
            //     sources : [{
            //         src : '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8',
            //         type : 'application/x-mpegurl'
            //     }]
            // };
        </script>
        </body>
</html>
```
Here follows the javascript code that makes it possible to use a custom `<video>` element inside the THEOplayer container.

```js
var videos = document.querySelectorAll('video');
var scripts = document.querySelectorAll('script');
var libraryLocation = "";
for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src.match(/THEO-HTMLvideotag.js/)) {
        libraryLocation = scripts[i].dataset.librarylocation;
    }
}
var players = [];
for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
 
    var config = {
        controls: video.controls,
        autoplay: video.autoplay,
        width:video.width,
        height:video.height,
        loop:video.loop,
        muted:video.muted,
        poster:video.poster,
        preload:video.preload
    };
 
    if(video.src) {config.src = video.src;}
    else {
        var sources = video.querySelectorAll('source');
       config.src = sources[0].src;
    }
 
    //console.log(config);
    var element = video.parentNode;
    element.removeChild(video);
 
    var player = createTHEOplayerInstance(element, config);
    players[i] = player;
 
}
 
function createTHEOplayerInstance(element, config) {
 
    var ui = {};
    if (config.width || config.height) {
        ui.width = config.width || "";
        ui.height = config.height || "";
    } else {
        ui.fluid = true;
    }
 
 
    var playerConfig = {
        "libraryLocation": libraryLocation,
        ui: ui
    };
 
    var player = new THEOplayer.Player(element, playerConfig);
    player.autoplay = config.autoplay;
    player.src = config.src;
    player.loop = config.loop;
    player.muted = config.muted;
    player.poster = config.poster;
    player.preload = config.preload;
 
    return player;
}
```

Please note that:

- the script must be called in the page after the call to the THEOplayer library
- both calls are preferably located at the end of the body content
- the value of the attribute "data-librarylocation" is the path to the folder where both scripts are located
- the script makes it possible to use also the tag `<source>` inside `<video>`, but this functionality is for the time being very limited, namely: only the source.src of the first `<source>` tag is being read. 