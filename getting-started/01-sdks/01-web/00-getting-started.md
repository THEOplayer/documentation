# Getting started with the Web SDK

If you are configuring THEOplayer for the first time, this page will be your first step. We will give you a quick overview about how to get started, some core set-ups and how to configure THEOplayer. THEOplayer 2.X is the second iteration of THEOplayer, which supports both HLS and MPEG-DASH.

This step-by-step guide will be a quick read and is supported by multiple examples for the configuration code that you will need to implement on your page.

If you aren't using THEOplayer yet, you can start your free trial [here](https://portal.theoplayer.com).

## Basic setup
In this user guide we will guide you through the process of setting up THEOplayer on your website. There’s only a few things you need to get started, most of which you will already have available if you are building a website.

- A webserver - This will host your webpages.
- A domain name - For example www.theoplayer.com.
- A THEOplayer license - This gives you access to the THEOplayer library and allows you to use it on the aforementioned domain.

One or more URI's to HLS stream manifests (.m3u8), or MPEG-DASH stream manifests (.mpd), of the video streams that you want to show on your website.

In this guide, we'll start from a basic HTML file, with no reference to THEOplayer.
In the second step, we'll explain what the THEOplayer library is, and how you can include it, together with the default THEOplayer UI.
In the third step, we'll describe how you add a THEOplayer powered video to a web page.
In the fourth and final step, we'll give a final overview.


## Step 1: Set up an HTML file
When THEOplayer is used as a web video player, we will need a webpage to put the video on.

Keep in mind that whilst .html-files can easily be opened from your local computer, this will not work with THEOplayer as THEOplayer licenses are locked to a specific domain.

From this point on, you should assume that if a piece of script is shown, it is hosted on a page in the domain of the THEOplayer license that is being used.

The .html-file that we’ll start with and that we’ll keep working on, looks like this:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>THEOplayer 2.X: Getting Started</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div class="theoplayer-container video-js theoplayer-skin"></div>
    </body>
</html>
```
So far so good. Next, we’ll include the THEOplayer JavaScript library.

## Step 2: Including the THEOplayer library

THEOplayer is a lean, mean, video machine. The easiest and simplest way to use it requires just a licensed THEOplayer library for the domain you want to use THEOplayer on.

All that you need to do, is include the following line of code on your website to reference the THEOplayer library:

```js
<script type='text/javascript'
    src='/path/to/THEOplayer.js'>
</script> 
```

Script tags are used to add code to a web page. In this case we used it to include the THEOplayer library. The two properties of the element are:

- `src` this is the URI of the THEOplayer library that you wish to use. This could be something like: `/path/to/THEOplayer.js`, where the url is a link to the THEOplayer.js file you received for your domain.

- `type` designates the contents of the included script to be JavaScript. While this is optional in many browsers these days, it is nonetheless advisable to put it in there anyway.

To add the THEOplayer UI, you need to reference the THEOplayer CSS file:

```html
<link rel="stylesheet" type="text/css" href='/path/to/ui.css'>
```

Link tags are used to add a CSS file to a web page.

Next we’ll create a video element and add it to our page.


## Step 3: The video
For THEOplayer to start playing video, it will need a manifest. In this basic guide we will display how you can set a HLS source, or a MPEG-DASH source.

Here’s the one that we will be using as an example:

```html
<script>
var element = document.querySelector('.theoplayer-container') // fetch THEOplayer container div

var player = new THEOplayer.Player(element, { // instantiates video player
  libraryLocation : '/path/to/your-theoplayer-folder/' // references folder containing your THEOplayer library files (theoplayer.p.js, THEOplayer.js, ...)
});

// DASH
// player.source = {
//     sources : [{
//         src : '//amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest(format=mpd-time-csf)', // sets DASH source
//         type : 'application/dash+xml' // sets type to MPEG-DASH
//     }]
// };

// HLS
player.source = {
  sources : [{
    src : '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8', // sets HLS source
    type : 'application/x-mpegurl' // sets type to HLS
  }]
};
</script>
```

**To use a DASH source** instead of a HLS source, you have to provide a DASH source to the `src` property, and set `type` to 'application/dash+xml'.

Instead of setting the UI to fluidly fit the container (or body) around it, you can also configure it with a width and height property:

```css
ui : {
  width: '800px',
  height: '500px'
}
```

Finally we will show you the completed html page as well as an example of what it should look like on your page if you followed these steps correctly.


## Step 4: The result
And here you have it. Save your .html, put it on a running web server and browse to it to see your video playing in THEOplayer.

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