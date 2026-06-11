# Feeds Hooks

The **feeds** *type* of [webhook](/documentation/pr-preview/pr-690/millicast/webhooks.md) allows you to receive an activity feed for platform events such as when a stream has started or stopped publishing.

Setting up Webhooks

Review the [Webhooks](/documentation/pr-preview/pr-690/millicast/webhooks.md) guide for additional details on creating and receiving webhooks.

## Event[​](#event "Direct link to Event")

The `event` will be one of the following values:

* **started** is sent when a broadcast has been started.
* **ended** is sent when a broadcast has been terminated either by the publisher or due to timeout.

Each individual stream will send started and ended events.

## Data[​](#data "Direct link to Data")

The `data` payload will contain the following details:

* **feedId** is the unique identifier for the source feed.
* **accountId** is the account id associated with the publishing token used.
* **name** is the stream name for the broadcast.
* **streamId** is the combination of account and stream name to identify the playback url.
* **started** is the epoch time for when the stream was started.
* **active** is a boolean flag indicating if the feed is still currently active when the hook fired.

Optionally the webhook may include:

* **ended** is an epoch time for when the publishing feed was ended (only included when the stream has ended).
* **priority** is a numeric value identifying the priority of an ingest when using [redundant streams](/documentation/pr-preview/pr-690/millicast/broadcast/redundant-ingest.md).
* **sourceId** is a string identifying the source of an ingest when using [multi-source broadcasting](/documentation/pr-preview/pr-690/millicast/broadcast/multi-source-broadcasting.md).
* **simulcastId** is a string identifying the simulcast source of an ingest when using [multi-bitrate broadcast contribution](/documentation/pr-preview/pr-690/millicast/broadcast/multi-source-broadcasting.md#multi-bitrate-contribution-and-simulcast).

## Examples[​](#examples "Direct link to Examples")

### Feed Started[​](#feed-started "Direct link to Feed Started")

Event callback for when a publishing token begins broadcasting.

started feed webhook body

```json
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

### Feed Ended[​](#feed-ended "Direct link to Feed Ended")

Event callback for when a publishing token stops broadcasting.

ended feed webhook body

```json
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

ended feed webhook body

```json
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
