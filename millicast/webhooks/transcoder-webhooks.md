---
title: "Transcoder Hooks"
id: transcoder-webhooks
---
The **transcoder** _type_ of [webhook](/millicast/webhooks/index.md) allows you to receive a state transition notification for platform events such as when a [transcoder](/millicast/distribution/cloud-transcoder.md) starts, stops, or is deleted.

> 👍 Setting up Webhooks
> 
> Review the [Webhooks](/millicast/webhooks/index.md) guide for additional details on creating and receiving webhooks.

# Event

The `event` will be one of the following values:

- **ACTIVE** is sent when the transcoder transitions to an _Active_ status.
- **STOPPED** is sent when the transcoder transitions to a _Shutdown_ status.
- **DELETED** is sent when the transcoder transitions to a _Deleted_ status.

Review the [Cloud Transcoder](/millicast/distribution/cloud-transcoder.md) streaming guide for descriptions of the various transcoder statuses.

# Data

The `data` payload will contain the following details:

- **transcoderId** is a unique identifier of the transcoder.
- **transcoderName** is the label given to the transcoder.
- **cluster** is the [cluster region](/millicast/distribution/multi-region-support/index.md) where the transcoder is running.
- **createdOn** is the timestamp for when the transcoder was created.
- **status** is the state of the transcoder when the hook fired. 

# Examples

## Transcoder Active

```json
{
    "type": "transcoder",
    "event": "ACTIVE",
    "timestamp": 1724889842678,
    "data": {
        "transcoderId": "0d09f40-2988-47aa-8ac7-dca04b971cf",
        "transcoderName": "test_webhooks",
        "cluster": "lon-1",
        "createdOn": "YYYY-MM-DDTHH:MM:SSZ",
        "status": "Active"
    }
}
```

## Transcoder Stopped

```json
{
    "type": "transcoder",
    "event": "STOPPED",
    "timestamp": 1724891135725,
    "data": {
        "transcoderId": "fddcbce-e3a3-4efe-8a42-060c31189a2",
        "transcoderName": "test_webhooks",
        "cluster": "lon-1",
        "createdOn": "YYYY-MM-DDTHH:MM:SSZ",
        "status": "Shutdown"
    }
}
```

## Transcoder Deleted

```json
{
    "type": "transcoder",
    "event": "DELETED",
    "timestamp": 1724890175017,
    "data": {
        "transcoderId": "009ff40-2988-47aa-8ac7-dc904b971cf",
        "transcoderName": "test_webhooks",
        "cluster": "lon-1",
        "createdOn": "YYYY-MM-DDTHH:MM:SSZ",
        "status": "Deleted"
    }
}
```
