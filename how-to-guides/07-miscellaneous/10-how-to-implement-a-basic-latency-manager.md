# How to implement a basic latency manager

This how-to-guide explains how to implement a basic latency manager for the web sdk.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |      No     |    No   |  No  |        No      |        No      |

## Prerequisites

**Step 1**

Setup a basic HTML file and include the THEOplayer library and video stream. You can do this by either following this link on the THEO portal: https://docs.portal.theoplayer.com/getting-started/01-sdks/01-web/00-getting-started.md OR by copying and pasting the below HTML syntax into your index.html file:

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
    <div class="theoplayer-container video-js theoplayer-skin"></div>
    <script type='text/javascript' src='/path/to/THEOplayer.js'></script> <!-- adds THEOplayer library -->
    <script>
      var element = document.querySelector('.theoplayer-container'); 
      var player = new THEOplayer.Player(element, { 
        libraryLocation : '/path/to/your-theoplayer-folder/'
      });
      
      player.source = {
        sources : [{
          src : '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8',
          type : 'application/x-mpegurl'
        }]
      };
    </script>
  </body>
</html>
```

**Step 2**

Test your stream to make sure it works, by uploading your stream to the THEO portal: https://demo.theoplayer.com/test-your-stream-with-statistics.

**Step 3**

If you do not already have a THEO portal account, set one up by going to https://portal.theoplayer.com and then create an HTML5 SDK. Specify your media stream and format.

## Latency manager setup

**Step 1**

Download the [latency-manager js file (zipped)](https://cdn.theoplayer.com/LatencyManager.zip). Extract the zipped file and save it in the same location as your index.html file.

**Step 2**

Make the following changes to your index.html file

* Change the `<title>` tag to your preferred title
* Amend the HREF attribute for the stylesheet from: /path/to/ui.css to: `https://cdn.myth.theoplayer.com/<your key from the THEO portal account dashboard>/ui.css`
* Amend the SRC attribute for the THEOplayer library from: /path/to/THEOplayer.js to: `https://cdn.myth.theoplayer.com/<your key from the THEO portal account dashboard>/THEOplayer.js`
* Call the latencymanager.js file created above with the below line:

```html
<script type='text/javascript' src='latencymanager.js'></script> <!-- adds the Latency manager JS file -->
```

* Initialise the following variables by copying and pasting the below code just below the call to the latencymanager.js file. Pay attention to any comments in the below code snippet, as these are essential to setting up your page correctly:
```html
    <script>
      var element = document.querySelector('.theoplayer-container'); 
      var player = new THEOplayer.Player(element, { 
        libraryLocation : 'https://cdn.myth.theoplayer.com/<your key from the THEO portal>/'
      });

      player.source = {
        sources : [{
          src : '<the full path to your stream>',

          //if your stream is in m3u8 format, the type should be: application/x-mpegurl
          //if your stream is in mpd format, the type should be: application/dash+xml
          type : '<the format of your stream',

          liveOffset : 1.0
        }]
      };

      // using JSON syntax, create an array with the stated objects, and initialise the appConfig variable
      var appConfig = {
        "config" : [{
        "targetlatency" : 2000,
        "seekwindow"    : 1000,
        "latencywindow" : 100,
        "encoderlatency" : 0,
        "useencodertime" : false,
        "interval"      : 40,
        "fireupdate"    : false,
        "ratechange"    : 0.08,
        "sync"          : true,
        "disableonpause" : false,
        "timeserver": "https://time.akamai.com/?iso&ms"}]};

        // initialise the latency manager
        latencymanager = THEOplayer.initializeLatencyManager(player, appConfig);
        latencymanager.configure (appConfig.config[0]);
    </script>
```

## Remarks
NONE

## Resources
[Getting started with the Web SDK](https://docs.portal.theoplayer.com/getting-started/01-sdks/01-web/00-getting-started.md)