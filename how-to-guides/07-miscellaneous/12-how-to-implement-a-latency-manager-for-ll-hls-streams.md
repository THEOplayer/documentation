# How to implement a basic latency manager for low-latency HLS (LL-HLS) Streams

This how-to-guide explains how to implement a latency manager for the THEOplayer Web SDK. This plugin is only applicable for Low Latency HLS streams.

**Please Note:** The latency measured is not an end-to-end measure - it only takes into account the latency built-up between your packager and playback, and not your encoder.

## SDKs

| Web | iOS | Android | Android TV | iPadOS | webOS | Tizen | FireTV | tvOS | AirPlay | Roku | Chromecast |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: 
|   Yes   |      TBC     |    TBC   |  TBC  |        TBC      |        TBC      |        TBC      |        TBC      |        TBC      |        TBC      |        No      |        No      |

## Prerequisites

##### Web

1. Setup a basic HTML file and include the THEOplayer library and Low latency HLS stream. You can also follow this guide: [How to configure your THEOplayer web SDK for low-latency HLS](../../how-to-guides/07-miscellaneous/11-configure-ll-hls.md).

2. You would need a Web SDK of THEOplayer with basic configuration to setup your environment. You can create an SDK by logging into your [THEO Portal](https://portal.theoplayer.com/login) account.

## Latency manager setup

##### Web SDK

1. Download the [ll-hls-latency-manager-module js file (zipped)](https://cdn.theoplayer.com/ll-hls-latency-manager-module.js.zip). Extract the zipped file and save it in the same location as your ```index.html``` (or equivalent) file.

2. The ```ll-hls-latency-manager-module.js``` file makes an AJAX call, so you will need to reference the JQuery library in your ```<head>``` tag, as shown below: 

```html
<!-- JQuery library -->
<script src="https://www.theoplayer.com/hs/hsstatic/jquery-libs/static-1.4/jquery/jquery-1.11.2.js"></script>
```

3. Add an optional counter to measure the latency of your stream, ideally just below your player container, as shown below:

```html
<div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>

<!-- add counter here -->
<p><span>Current Latency: <strong id="stats_latency">-</strong></span></p>
```

If you do not want to display the latency counter, change the ```<p>``` tag to **style="display:none”**, as shown below, or remove it altogether:
```html
<div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>

<!-- add counter here -->
<p style="display:none"><span>Current Latency: <strong id="stats_latency">-</strong></span></p>
```

4. Call and initialise the `latency-manager-module` and set the ```latencyTarget``` configuration. Full-page example as shown below:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Low-Latency HLS Web</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Chromecast SDK -->
    <script type="text/javascript" src="//www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script>

    <!-- JQuery library -->
    <script src="https://www.theoplayer.com/hs/hsstatic/jquery-libs/static-1.4/jquery/jquery-1.11.2.js"></script>

    <!-- THEOplayer JS library and CSS -->
    <script type="text/javascript" src="https://cdn.myth.theoplayer.com/<your key from the THEO portal>/THEOplayer.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.myth.theoplayer.com/<your key from the THEO portal>/ui.css" />

    <!-- bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body style="margin:50px">
    <div id="player-container" class="row">
        <div class="col-sm-12 col-md-6 my-auto mx-auto">
            <div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>
            <!-- display optional counter -->
            <p><span>Current Latency: <strong id="stats_latency">-</strong></span></p>
        </div>
    </div>

    <script>
        var element = document.querySelector('.theoplayer-container'); 
        var player = new THEOplayer.Player(element, { 
            libraryLocation: 'https://cdn.myth.theoplayer.com/<your key from the THEO portal>/'
        });

        player.source = {
            sources: [{
              src: '<your LL-HLS stream>',
              type: 'application/x-mpegurl',
              lowLatency: true
            }]
        };

        var config = [{
            "latencyTarget": 3000, //change as required
        }];

    </script>
    <!-- THEOplayer ll-hls latency manager module -->
    <script type="text/javascript" src="ll-hls-latency-manager-module.js"></script>

</body>

</html>
```

## Resources
- [Getting started with the Web SDK](https://docs.theoplayer.com/getting-started/01-sdks/01-web/00-getting-started.md)
- [How to configure your THEOplayer web SDK for low-latency HLS](../../how-to-guides/07-miscellaneous/11-configure-ll-hls.md)
- [How to add CSS or JavaScript files to an Android/iOS project](https://docs.theoplayer.com/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)