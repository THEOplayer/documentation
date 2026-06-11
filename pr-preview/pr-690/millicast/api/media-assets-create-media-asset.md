# Create Media Asset

Create a live clip from an ongoing live stream. You must provide the stream name and start time, and once processing is complete the media asset of the type clip will be available for retrieval.

If a stop time is not specified, the time the request was received will be used. The clip duration must be a minimum of ten (10) seconds and cannot exceed eight (8) hours.

There are a few cases where more than one clip will be generated from a single request.

1. A stream went offline during the time range will generate separate clips for the period before and after the restart.
2. A stream that is configured for multi-source when a simulcastId is not given in the request to select a single layer.
3. A stream that is configured for multi-bitrate contribution or redundant fallback ingest and a sourceId is not given in the request to specify which to use. In that scenario, sources will be ranked based on the following criteria and the highest ranked source is selected for clipping:

* priority
* quality
* start time

By using an `Idempotency-Key` header in your requests, you can avoid generating more than one identical clip should the same request be received more than once. To avoid unnecessary charges, it is recommended you use a common identifier for live clip requests based on a common source stream and time range. For background on the usage of this header, please refer to the [IETF Draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/)

## Request[​](#request "Direct link to request")

## Responses[​](#responses "Direct link to Responses")

* 200
* 400
* default

Success

Bad Request

Server Error
