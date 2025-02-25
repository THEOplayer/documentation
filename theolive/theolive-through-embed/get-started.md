---
sidebar_position: 2
---

# Get Started

How to share your stream with your viewers

---

Have you created your channel and have you started streaming to it? Then it is time to share it with your viewers! In this guide, we will show you how to do this, how to overwrite colors, and how to enable auto-play. To have a full overview of what's possible in terms of customization of the player, please refer to our [Customize your THEOlive player](../playout-configuration/customize-theolive-player.md) guide.

## Showing a THEOlive channel on a HTML5 page

Including a THEOlive channel on your page is very simple: all you need is our embed script and the channel ID. Below is a code snippet of how to include the channel with Channel ID `<your-channel-id>` in your page. It will use all the settings as they are defined through the management console or API.

```html basic-embed
<!DOCTYPE html>
<html>
  <head>
    <title>Test page</title>
  </head>
  <body>
    <h1>Testing embed.js</h1>
    <div data-theo-live-id="<your-channel-id>" style="width: 600px; height: 400px"></div>
    <script type="text/javascript" src="https://cdn.theo.live/player/embed.js" async></script>
  </body>
</html>
```

Three things are important here:

- You have to load the embed script: `<script type="text/javascript" src="https://cdn.theo.live/embed.js" async></script>`right before the closing `</body>` tag.
- You have to create a `div` containing the `data-theo-live-id` attribute, which has your channel ID as a value.
- You have to pass a width and height to the styling attribute to define the dimensions of your player. You can also choose to pass self-defined CSS classes to let the player adapt to every possible screen size. A guide how to auto-size the player can be found [here](../theolive-through-embed/autosize.md).

The embed script will do all the magic to show a player playing your THEOlive stream on the page. It will also grab all the player settings that have been defined through the API and apply them to the player. For more information on how to customize your player, please refer to the [Customize your THEOlive player](../playout-configuration/customize-theolive-player.md) guide.
