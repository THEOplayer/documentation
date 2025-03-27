---
title: "Media Hooks"
slug: /media-hooks
---
The **media** _type_ of [webhook](/millicast/webhooks/index.md) allows you to receive a series of notifications for when a recording or live clip changes status. This can be helpful for when you want to automate the download or notifications for when media becomes available.

> 👍 Setting up Webhooks
> 
> Review the [Webhooks](/millicast/webhooks/index.md) guide for additional details on creating and receiving webhooks.

# Event

The `event` will be one of the following values:

- **completed** is sent when the media asset processing is complete and available.
- **processing** is sent when a media asset has been requested and begins processing to generate the appropriate media file.
- **errored** may occur if there is a problem processing a request such as if a media asset is being generated from an expired timeline and can no longer be retrieved.
- **deleted** will be sent whenever a media asset is marked for removal.

# Data

The `data` payload will contain the following details:

- **mediaAssetId** is the unique identifier that can be used with the [Media Assets]](/millicast/api/media-assets-list-media-assets.api.mdx) endpoint to retrieve additional details such as where to find the media file itself.
- **type** identifies whether it is a _clip_ or _recording_ that is changing state.
- **tokenId** is the unique identifier for the token used during a broadcast from which the media is created.
- **streamName** is the unique label for the stream.
- **streamId** is the unique identifier for the stream such `accountId/streamName`.
- **startTime** identifies the epoch timestamp for when the media is requested.
- **expiration** identifies the epoch timestamp for when the media will be marked for removal automatically.
- **metadata** may optionally include additional details about the media file info.

# Examples

## Media Clip was Requested

```json
{
    "type": "media",
    "event": "processing",
    "timestamp": 1725259930753,
    "data": {
        "mediaAssetId": "c6631104197a4091943775697948adbe",
        "tokenId": 1187282,
        "streamName": "test-record-clip",
        "streamId": "dkxfvY/test-record-clip",
        "startTime": 1725259930643,
        "type": "clip",
        "metadata": { },
        "expiration": 1733900336143
    }
}
```

## Media Clip is Available

```json
{
    "type": "media",
    "event": "completed",
    "timestamp": 1725260343575,
    "data": {
        "mediaAssetId": "e0ca421e3ee748629d073b6991d4d93d",
        "tokenId": 1187282,
        "streamName": "test-record-clip",
        "streamId": "dkxfvY/test-record-clip",
        "startTime": 1725259874671,
        "metadata": { },
        "type": "clip",
        "expiration": 1733900336143
    }
}
```

## Error When Recording

```json
{
    "type": "media",
    "event": "errored",
    "timestamp": 1725261092922,
    "data": {
        "mediaAssetId": "f26120d4443b474b8b1d6e1ecfcbd369",
        "tokenId": 1090418,
        "streamName": "qa_test_stream_for_live_clipping",
        "streamId": "dkxfvY/qa_test_stream_for_live_clipping",
        "startTime": 1725245888000,
        "type": "recording",
        "expiration": 1733896321029
    }
}
```
