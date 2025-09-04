---
title: OptiView Hosted Player
slug: /web/hosted-player
---

# OptiView Hosted Player

Dolby hosts a special version of the OptiView video player for use with customers intended to be used for `<iframe>` embedding. This version of the player is configurable with query parameters to make it easy to setup and configure.

:::caution Hosted Player Under Construction
This version of the player is under development.
:::

:::caution Player Updates
This version of the player will automatically be updated when new releases are published.
:::

The player is hosted at:

```
https://sbp.optiview.dolby.com
```

## Configuration

The following parameters can be provided used to configure the hosted player. _Note: query parameters are case sensitive!_

### Required Parameters

- `license`: a OptiView player license obtained through the dashboard. If using the hosted version of the player you should limit sources for playback, you can utilize "Source Domain" restrictions in the player portal. This will prevent viewers from stealing your license and using it for their own streams. If using streams from Dolby, you must white list the following
  - _Whitelist Page Domains_
    - `sbp.optiview.dolby.com`
    - _Note: at this time it is not possible to whitelist the end-application domain for whitelisted page domains in the license. If you wish to secure your streams by page domain, please contact Dolby to get your own license and player implementation._
  - _Whitelist Source Domains_
    - `cdn.theo.live`
    - `cdn.anywhere.theo.live`
    - `cdn.tla-prd.theostream.live`
    - `discovery.theo.live`
    - `stream.anywhere.theo.live`
    - `stream.theo.live`
- `sourceType`: the type of source to configure the player to play back. Choose one of:
  - `realtime`: Real-time WebRTC playback with OptiView's real-time streaming solution (formerly Millicast)
  - `lowdelay`: Low-delay HESP playback with OptiVIew's live streaming solution (formerly THEOlive)
  - `live`: HLS playback with an .m3u8 manifest
- `source`: the source itself based on the `sourceType`. Here are some examples:
  - for `realtime`, the source looks like `accountId/streamname`. Example: `k9Mwad/multiview`.
  - for `lowdelay`, the source looks like `channelId`. Example: `ar5c53uzm3si4h4zgkzrju44h`.

### Optional Parameters

- `token`: an optional playback token for enabling stream protection. The type of token must be matched to the `sourceType`.
- `autoPlay`: _(default `false`)._ A boolean whether to enable playback to automatically start when the page loads.
- `muted`: _(default `true`)._ A boolean whether to start the stream playback muted or not. _Note that if `autoPlay` is set to `true`, playback will begin muted due to browser restrictions._
- `poster`: a publicly accessible poster frame image to show when the stream is offline
- `playerColor`: _(default `4D5963`)_ a hex color code value to set the play button and scrub bar. _Note that the value is an integer and should NOT contain the `#` at the beginning._

### Optional Parameters (realtime only configurations)

The following parameters are only valid with Dolby OptiView real-time streaming and will be ignored with other `sourceTypes`.

- `minDelay`: _(default: `50`)._ a small minimum playout delay set to improve performance in degraded network conditions. Specified in milliseconds. See [Documentation](/millicast/playback/players-sdks/web/player/#playout-delay).
- `maxDelay`: _(default: `120`)._ a small maximum playout delay set to improve performance in degraded network conditions. Specified in milliseconds.
- `maxHeight`: The maximum height resolution height (pixels) in the ABR range control to load in the given playback session. See [Documentation](/millicast/playback/players-sdks/web/player/#abr-range-control). Intended to be used mutually exclusively with `maxWidth`.
- `maxWidth`: The maximum width resolution (pixels) in the ABR range control to load in the given playback session. See [Documentation](/millicast/playback/players-sdks/web/player/#abr-range-control). Intended to be used mutually exclusively with `maxHeight`.

## Player Events

Basic [player events](pathname:///theoplayer/v9/api-reference/web/interfaces/AdBreakEvent.html) are sent with [window post messages](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to the parent page in case the embedding application wishes to utilize them. Events include:

- ended
- pause
- play
- playing
- resize
- volumechange

Here is an example of how to consume these messages, logging them to the console:

```javascript
<script>
  window.addEventListener("message", (event) => {
    // confirm origin for security
    if (event.origin !== "https://sbp.optiview.dolby.com") {
      return;
    }

    console.log("iframe event", event.data);
  });
</script>
```

### Configuration Examples

This is a basic example of a player that is configured in a basic way to play a real-time source:

```
https://sbp.optiview.dolby.com/?sourceType=realtime&source=k9Mwad/multiview&license=LICENSE_STRING
```

This is an example of a player that is configured to play a real-time stream with token protection and other customizations:

```
https://sbp.optiview.dolby.com/?sourceType=realtime&source=k9Mwad/multiview&autoPlay=false&muted=true&playerColor=58007a&license=LICENSE_STRING&token=TOKEN_STRING
```

This is an example to load an OptiView low-delay stream and start with automatic playback:

```
https://sbp.optiview.dolby.com/?sourceType=lowdelay&source=ar5c53uzm3si4h4zgkzrju44h&autoPlay=true&muted=true&license=LICENSE_STRING
```

This is an example to load an HLS stream and start with automatic playback:

```
https://sbp.optiview.dolby.com/?sourceType=live&source=https://stream.theo.live/europe-west/e2c4220c-3cf4-4499-ab3a-ea5e904d0406/ar5c53uzm3si4h4zgkzrju44h/stream/main.m3u8&autoPlay=true&muted=false&license=LICENSE_STRING
```

## A Complete Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Dolby Stream Embed</title>
    <style>
      html,
      body {
        height: 100%;
        width: 100%;
        margin: 0;
      }
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    </style>
  </head>
  <body>
    <iframe
      src="https://sbp.optiview.dolby.com/?sourceType=realtime&source=k9Mwad/multiview&autoPlay=false&muted=true&playerColor=58007a&license=LICENSE_STRING"
      allowfullscreen
      allow="autoplay; encrypted-media"
    ></iframe>
    <script>
      window.addEventListener('message', (event) => {
        // confirm origin for security
        if (event.origin !== 'https://sbp.optiview.dolby.com') {
          return;
        }

        console.log('iframe event', event.data);
      });
    </script>
  </body>
</html>
```
