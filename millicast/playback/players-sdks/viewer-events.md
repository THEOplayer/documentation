---
title: 'Broadcast Events'
slug: /playback/players-sdks/viewer-events
sidebar_position: 100
---

Dolby.io Real-time Streaming supports `broadcastEvents`, sometimes called _viewer events_, which allow you to add functionality that triggers when various events occur during the stream. This functionality can be helpful for detecting active feeds, changes in simulcast layers, or even the viewer count of a stream.

This guide outlines what events are available and how to use them for your app or platform.

## List of events

Currently, there are several events that can be listened to when connected to the Dolby.io Millicast Viewer:

- `active`: Fires when a live stream is or has started broadcasting.
- `inactive`: Triggers when the stream has stopped broadcasting but is still connected to the publisher.
- `updated`: Indicates that a new track has been added to an existing feed, such as when audio is added or removed.
- `layers`: When streaming with [Simulcast](/millicast/distribution/using-webrtc-simulcast), this event fires when there is an update of the state of the layers in the live stream.
- `vad`: Fires when the live stream is mixing and layering audio with [Audio Multiplexing](/millicast/playback/audio-multiplexing.md).
- `viewercount`: Triggers when the number of viewers changes in the stream published.
- `stopped`: Fires when the live stream has been disconnected from the publisher.
- `migrate`: Fires when the server is having problems, is shutting down, or when viewers need to move for load balancing purposes.

## Using events

:::tip Not familar with our SDKs?
Learn more about the Dolby.io Millicast streaming SDKs by following the [Getting Started](/millicast/getting-started/creating-real-time-streaming-web-app.mdx) guide or by learning about our [Client SDKs](/millicast/playback/players-sdks/index.mdx).
:::

To use or "listen" for these events, you first must authenticate and connect to the Dolby.io CDN using one of our [Client SDKs](/millicast/playback/players-sdks/index.mdx). When calling the `connect` function you can include a list of all events to listen for:

```javascript
import { Director, View } from '@millicast/sdk';

// Create callback to generate a new token
const tokenGenerator = () =>
  Director.getSubscriber({
    streamName: 'publish-stream-name',
    streamAccountId: 'publish-account-id',
    subscriberToken: 'subscriber-token', // Optional: This token is needed if you're subscribing to a secure stream.
  });
// Create a new instance
const millicastView = new View(undefined, tokenGenerator);

// Start connection to publisher listening to as few or many events as you need
await millicastView.connect({
  events: ['active', 'inactive', 'vad', 'layers'],
});
```

[By default](https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent), if no event list is included, the connect function will listen for `active`, `inactive`, and `stopped` events.

Once connected, the event listener becomes available, allowing your app to listen for events and trigger accordingly:

```javascript
millicastView.on('broadcastEvent', (event) => {
  // Get event name and data
  const { name, data } = event;

  switch (name) {
    case 'active':
      // A source has been started on the stream
      break;
    case 'inactive':
      // A source has been stopped on the stream
      break;
    case 'vad':
      // A new source was multiplexed over the vad tracks
      break;
    case 'layers':
      // Updated layer information for each simulcast/svc video track
      break;
  }
});
```
