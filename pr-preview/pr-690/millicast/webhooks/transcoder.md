# Transcoder Hooks

The **transcoder** *type* of [webhook](/documentation/pr-preview/pr-690/millicast/webhooks.md) allows you to receive a state transition notification for platform events such as when a [transcoder](/documentation/pr-preview/pr-690/millicast/distribution/cloud-transcoder.md) starts, stops, or is deleted.

Setting up Webhooks

Review the [Webhooks](/documentation/pr-preview/pr-690/millicast/webhooks.md) guide for additional details on creating and receiving webhooks.

## Event[​](#event "Direct link to Event")

The `event` will be one of the following values:

* **ACTIVE** is sent when the transcoder transitions to an *Active* status.
* **STOPPED** is sent when the transcoder transitions to a *Shutdown* status.
* **DELETED** is sent when the transcoder transitions to a *Deleted* status.

Review the [Cloud Transcoder](/documentation/pr-preview/pr-690/millicast/distribution/cloud-transcoder.md) streaming guide for descriptions of the various transcoder statuses.

## Data[​](#data "Direct link to Data")

The `data` payload will contain the following details:

* **transcoderId** is a unique identifier of the transcoder.
* **transcoderName** is the label given to the transcoder.
* **cluster** is the [cluster region](/documentation/pr-preview/pr-690/millicast/distribution/multi-region-support.md) where the transcoder is running.
* **createdOn** is the timestamp for when the transcoder was created.
* **status** is the state of the transcoder when the hook fired.

## Examples[​](#examples "Direct link to Examples")

### Transcoder Active[​](#transcoder-active "Direct link to Transcoder Active")

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

### Transcoder Stopped[​](#transcoder-stopped "Direct link to Transcoder Stopped")

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

### Transcoder Deleted[​](#transcoder-deleted "Direct link to Transcoder Deleted")

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
