---
title: ViewerConnection Hooks
---

The **viewerConnection** _type_ of [webhook](/millicast/webhooks/index.mdx) allows you to receive a series of notifications for when a viewer attempts to connect to a stream or alert when there are no longer viewers watching the stream. This can be helpful for when you want to automate starting and stopping your encoder when a viewer connects.

:::tip Setting up Webhooks
Review the [Webhooks](/millicast/webhooks/index.mdx) guide for additional details on creating and receiving webhooks.
:::

## Event

The `event` will be one of the following values:

- **viewerAttempt** is sent when a viewer attempts to connect to a stream that is offline and not actively streaming. It can signal your backend to start broadcasting. This event will fire every 10 seconds that at least one viewer has attempted to connect to a stream. If additional viewers attempt to connect in between that interval, no additional events will occur allowing time for the broadcast to begin. There will only be one event total every ten (10) seconds until the stream starts or viewers stop attempting to connect.
- **firstViewerConnection** is sent once your stream goes live and the first viewer successfully connects to the stream.
- **noActiveViewers** is sent once there are zero active viewers connected to the stream. After the last viewer leaves the stream a 60 second timer elapses and then this hook is sent. The 60 second timer is in place to allow for viewers to leave and come back within a short period of time to help avoid unnecessary starts and stops with the encoder.

## Data

The `data` payload will contain the following details:

- **name** is the label for the stream that the viewer attempted to connect.
- **accountId** is the unique identifier for your streaming account.
- **streamId** is the unique identifier for the stream such `accountId/streamName`.

## Examples

### Viewer attempted to connect to an inactive stream

```json
{
  "type": "viewerConnection",
  "event": "viewerAttempt",
  "timestamp": 1727442713604,
  "data": {
    "name": "myAwesomeStream",
    "accountId": "ABC123",
    "streamId": "ABC123/myAwesomeStream"
  }
}
```

### Once the stream started and the first viewer successfully connected

```json
{
  "type": "viewerConnection",
  "event": "firstViewerConnection",
  "timestamp": 1727442762361,
  "data": {
    "name": "myAwesomeStream",
    "accountId": "ABC123",
    "streamId": "ABC123/myAwesomeStream"
  }
}
```

### The last viewer on the stream disconnected and 60 seconds elapsed

```json
{
  "type": "viewerConnection",
  "event": "noActiveViewers",
  "timestamp": 1727442841663,
  "data": {
    "name": "myAwesomeStream",
    "accountId": "ABC123",
    "streamId": "ABC123/myAwesomeStream"
  }
}
```
