# Getting started

## Usage[​](#usage "Direct link to Usage")

1. Follow [our Getting Started guide](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/web/getting-started.md) to set up THEOplayer in your web app or website.
2. Register the service worker if necessary.
3. Add an OptiView Live source to your player's source.

### Register the service worker[​](#register-the-service-worker "Direct link to Register the service worker")

On Apple devices running an iOS version lower than 17.1, a service worker needs to be registered to support low latency play-out of OptiView Live streams.

```javascript
function needsServiceWorkerForTHEOlive() {
  const canPlayMSE = !!(window.MediaSource || window.ManagedMediaSource);
  const videoElement = document.createElement('video');
  const canPlayHLS = videoElement.canPlayType && videoElement.canPlayType('application/vnd.apple.mpegURL') !== '';
  return canPlayHLS && !canPlayMSE;
}
if (needsServiceWorkerForTHEOlive()) {
  await navigator.serviceWorker.register('theoplayer.sw.js');
}

```

The service worker `theoplayer.sw.js` is part of the THEOplayer SDK and needs to be on the same domain and path as the page initiating the player.

### Add an OptiView Live source[​](#add-an-optiview-live-source "Direct link to Add an OptiView Live source")

After setting up your THEOplayer on your web page, set its source to a `SourceDescription` containing a `THEOliveSource`. Take into account that the source must be set after awaiting the registration of the service worker for streams to work on iOS versions lower than 17.1. You'll need an OptiView Live channel ID:

```javascript
const player = new THEOplayer.Player(element, configuration);
player.source = {
  sources: {
    type: 'theolive',
    src: 'your-channel-id',
  },
};

```

### Add configuration[​](#add-configuration "Direct link to Add configuration")

Optionally, you can provide additional configuration to the player, specific for OptiView Live streams. To configure these settings, add a `theolive` property to the player configuration. For an exhaustive list of these options, please visit the [documentation](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/TheoLiveConfiguration.html).

```javascript
var player = new THEOplayer.Player(element, {
  license: 'your-license',
  // This is needed for fallback to work properly
  retryConfiguration: {
    maxRetries: 6,
  },
  theoLive: {
    externalSessionId: 'my-external-session-id',
    fallbackEnabled: true,
  },
});

```

## More information[​](#more-information "Direct link to More information")

* [API references](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/TheoLiveSource.html)
