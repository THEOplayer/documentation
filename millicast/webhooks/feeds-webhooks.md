---
title: "Feed Hooks"
slug: /feeds-webhooks
---
The **feeds** _type_ of [webhook](/millicast/webhooks/index.md) allows you to receive an activity feed for platform events such as when a stream has started or stopped publishing.

> 👍 Setting up Webhooks
> 
> Review the [Webhooks](/millicast/webhooks/index.md) guide for additional details on creating and receiving webhooks.

# Event

The `event` will be one of the following values:

- **started** is sent when a broadcast has been started.
- **ended** is sent when a broadcast has been terminated either by the publisher or due to timeout.

Each individual stream will send started and ended events.

# Data

The `data` payload will contain the following details:

- **feedId** is the unique identifier for the source feed.
- **accountId** is the account id associated with the publishing token used.
- **name** is the stream name for the broadcast.
- **streamId** is the combination of account and stream name to identify the playback url.
- **started** is the epoch time for when the stream was started.
- **active** is a boolean flag indicating if the feed is still currently active when the hook fired.

Optionally the webhook may include:

- **ended** is an epoch time for when the publishing feed was ended (only included when the stream has ended).

# Examples

## Feed Started

Event callback for when a publishing token begins broadcasting.

```json started feed webhook body
{
  "type": "feeds",
  "event": "started",
  "timestamp": 1638463486489,
  "data": {
    "feedId": "369e4a86-f937-4254-bd9f-99dc484d2bd6",
    "accountId": "ZG6NWV",
    "name": "sample_stream",
    "streamId": "ZG6NWV/sample_stream",
    "started": 1638463486359,
    "active": true
  }
}
```

## Feed Ended

Event callback for when a publishing token stops broadcasting.

```json ended feed webhook body
{
  "type": "feeds",
  "event": "ended",
  "timestamp": 1638463501075,
  "data": {
    "feedId": "369e4a86-f937-4254-bd9f-99dc484d2bd6",
    "accountId": "ZG6NWV",
    "name": "sample_stream",
    "streamId": "ZG6NWV/sample_stream",
    "active": false,
    "ended": 1638463500963
  }
}
```

Here is an example of the webhook body:

```json ended feed webhook body
{
  "type": "feeds",
  "event": "ended",
  "timestamp": 1638463501075,
  "data": {
    "feedId": "369e4a86-f937-4254-bd9f-99dc484d2bd6",
    "accountId": "ZG6NWV",
    "name": "sample_stream",
    "streamId": "ZG6NWV/sample_stream",
    "active": false,
    "ended": 1638463500963
  }
}
```
