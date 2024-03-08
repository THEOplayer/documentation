# How to use THEOplayer as a JavaScript module

As of THEOplayer 6.0, THEOplayer can also be used as
a [JavaScript module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). Instead of loading the
library through a `<script>` tag in your HTML, you `import` it directly from your JavaScript code.

Using JavaScript modules has several advantages:

- It's easier to manage dependencies per file, rather than maintaining a long list of `<script>` tags and keeping them
  in the right order.
- If multiple JavaScript files `import` the same module, the module is only loaded once. (On the other hand,
  multiple `<script>` tags with the same `src` attribute will load and execute the script multiple times.)
- When you use a bundler for your web app, your bundler can more easily understand the dependencies between your files
  and generate a single output bundle of your entire app.

Additionally, since JavaScript modules are only supported in modern web browsers, THEOplayer can use more modern
JavaScript syntax in its JavaScript module (such as [async/await](https://caniuse.com/async-functions)). This results in
smaller files, which load and execute faster on your viewer's devices.

> **Note**
> If you need to support older browsers (such as older smart TVs), you should stick with a classic `<script>`
> tag. [See the getting started guide](./00-getting-started.mdx).

In this article, we will set up a simple web page using JavaScript modules with the THEOplayer SDK on Web.
The outcome of this article is the template below.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>THEOplayer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="/path/to/ui.css" />
  </head>
  <body>
    <div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>
    <script type="module">
      import * as THEOplayer from "/path/to/THEOplayer.esm.js";

      let element = document.querySelector(".theoplayer-container");
      let player = new THEOplayer.Player(element, {
        libraryLocation: "/path/to/your-theoplayer-folder/",
        license: "your_license_string"
      });

      player.source = {
        sources: [
          {
            src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",
            type: "application/x-mpegurl"
          }
        ]
      };
    </script>
  </body>
</html>
```

## Prerequisites

See [the prerequisites in our getting started guide](./00-getting-started.mdx#prerequisites).

## Basic setup

Now, we're ready to set up THEOplayer on your website. This guide explains how you implement THEOplayer in four steps:

1. We'll [start from a basic HTML file](#step-1-set-up-an-html-file), with no mention of THEOplayer.
2. In the [second step](#step-2-including-the-theoplayer-library), we'll explain what the THEOplayer library is and how you can include it.
   We'll do the same for the default THEOplayer UI.
3. In the [third step](#step-3-the-video), we'll describe how you play a video stream through THEOplayer.
4. In the [fourth step](#step-4-the-result), we'll give a final overview.

### Step 1: Set up an HTML file

When THEOplayer is used as a web video player, we will need a web page (i.e. HTML file) to embed THEOplayer and the code.

Note that a THEOplayer SDK license can only be used on whitelisted domains.
You configure these domains when you create a THEOplayer Web SDK at [https://portal.theoplayer.com](https://portal.theoplayer.com).

Let's start with the following HTML file:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>THEOplayer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <script type="module"></script>
  </body>
</html>
```

Pay attention to the `type="module"` attribute on the `<script>` tag. This informs the browser to execute it as a
module, rather than as a classic script. This allows the code inside it to use `import` and `export` statements.

Next, we’ll include the THEOplayer SDK.

### Step 2: Including the THEOplayer library

To access the THEOplayer API and default UI, you must first include the THEOplayer library files.
The JavaScript library exposes the THEOplayer API and the CSS library contains the default UI.

#### THEOplayer JavaScript library

The following line imports the THEOplayer JavaScript library, and gives you access to the THEOplayer API.

```html
<script type="module">
  import * as THEOplayer from "/path/to/THEOplayer.esm.js";
</script>
```

The path of the `import` statement is the URI of the THEOplayer library that you wish to use. This could be something
like: `/path/to/THEOplayer.esm.js`, where the URL is a link to your `THEOplayer.esm.js` file.

You must swap `/path/to/` with your CDN URL.
For example, if your SDK is hosted on `https://example.com/vendor/theoplayer/`, then you'd write the following import:

```js
import * as THEOplayer from "https://example.com/vendor/theoplayer/THEOplayer.esm.js";
```

#### THEOplayer CSS library

To use the default THEOplayer UI, you need to reference the THEOplayer CSS library:

```html
<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />
```

The `<link>` tag includes a CSS file on a web page.
Similar to the JavaScript library, you must swap `/path/to/` with your CDN URL.

Next, we’ll create a THEOplayer instance and configure a video stream.

### Step 3: The video

To play a video through the THEOplayer Web SDK, you must:

1. Create a video player container,
2. fetch this container through JavaScript,
3. create a THEOplayer instance associated with that container,
4. and configure a video stream for this instance.

The snippet below implements these 4 steps.

```html
<div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>
<script type="module">
  import * as THEOplayer from "/path/to/THEOplayer.esm.js";

  let element = document.querySelector(".theoplayer-container"); // fetch THEOplayer container div

  let player = new THEOplayer.Player(element, {
    // instantiates video player
    libraryLocation: "/path/to/your-theoplayer-folder/", // references folder containing your THEOplayer library files (theoplayer.p.js, THEOplayer.js, ...)
    license: "your_license_string" // references your THEOplayer SDK license
  });

  // HLS
  player.source = {
    sources: [
      {
        src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8", // sets HLS source
        type: "application/x-mpegurl" // sets type to HLS
      }
    ]
  };

  // DASH
  // player.source = {
  //     sources : [{
  //         src : '//amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest(format=mpd-time-csf)', // sets DASH source
  //         type : 'application/dash+xml' // sets type to MPEG-DASH
  //     }]
  // };
</script>
```

Let's break down the above snippet.

#### Create video player container

This `<div>` element creates a video player container.

```html
<div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>
```

- The `theoplayer-container` class is used to fetch the container through JavaScript, as demonstrated by the snippet below.
- The `video-js theoplayer-skin vjs-16-9` classes load the default THEOplayer UI. You may omit `vjs-16-9` if you don't want a 16:9 container.

```javascript
let element = document.querySelector(".theoplayer-container");
```

#### Create THEOplayer instance

The snippet below creates a THEOplayer instance for a container with a
specific [Player Configuration](pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerConfiguration.html).

```js
let player = new THEOplayer.Player(element, {
  // instantiates video player
  libraryLocation: "/path/to/your-theoplayer-folder/", // references folder containing your THEOplayer library files (theoplayer.p.js, THEOplayer.js, ...)
  license: "your_license_string" // references your THEOplayer SDK license
});
```

Similar to the JavaScript and CSS library, you must swap out `'/path/to/your-theoplayer-folder/'`
and `'your_license_string'`.

For example, if your SDK is hosted on `https://example.com/vendor/theoplayer/` and your license string is `ABCD1234`, then you would instead configure the snippet below:

```js
var player = new THEOplayer.Player(element, {
  libraryLocation: "https://example.com/vendor/theoplayer/",
  license: "ABCD1234"
});
```

You can read more about configuring the `license` at
the [License section](../../../how-to-guides/12-license/00-introduction.md).

#### Configure video stream

The snippet below configures a HLS video stream for the THEOplayer instance.

```js
player.source = {
  sources: [
    {
      src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8", // sets HLS source
      type: "application/x-mpegurl" // sets type to HLS
    }
  ]
};
```

To configure a DASH stream instead,
you must set `type` to `'application/dash+xml'` instead of `'application/x-mpegurl'`,
as demonstrated by commented out code in one of the earlier snippets.

In the next step we'll put everything together.

### Step 4: The result

We're done! Here's the complete code again, which you can put on your web server:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>THEOplayer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="/path/to/ui.css" />
  </head>
  <body>
    <div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>
    <script type="module">
      import * as THEOplayer from "/path/to/THEOplayer.esm.js";

      let element = document.querySelector(".theoplayer-container");
      let player = new THEOplayer.Player(element, {
        libraryLocation: "/path/to/your-theoplayer-folder/",
        license: "your_license_string"
      });

      player.source = {
        sources: [
          {
            src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",
            type: "application/x-mpegurl"
          }
        ]
      };
    </script>
  </body>
</html>
```

## Next steps

Ready to learn more?

- Go through our [how-to guides](../../../how-to-guides/index.mdx) to learn about [UI customization](../../../how-to-guides/11-ui/00-introduction.md), [advertising](../../../how-to-guides/01-ads/00-introduction.md), [DRM](../../../how-to-guides/04-drm/00-introduction.md), [casting](../../../how-to-guides/03-cast/01-chromecast/00-introduction.md), [analytics](../../../how-to-guides/02-analytics/00-introduction.md) and other topics.
- Check out our [API reference](pathname:///theoplayer/v6/api-reference/web/classes/ChromelessPlayer.html).
- Try out samples from our [GitHub](https://github.com/THEOplayer).
