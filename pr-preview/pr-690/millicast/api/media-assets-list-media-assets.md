# List Media Assets

List media assets, excluding those that have been deleted. A media asset can be:

* A `"recording"` that is from the full duration of the stream
* A `"clip"` which is generated from [Create Media Asset](/documentation/pr-preview/pr-690/millicast/api/media-assets-create-media-asset.md)
* A `"timeline"` which is a series of segments that is buffered in a cache and available for clipping. A `"timeline"` is capped at a 12 hour duration or whenever the stream is re-started.
* Of type `storageValidation`, which is a record reflecting the outcome of triggering [Validate Third Party Storage Setup](/documentation/pr-preview/pr-690/millicast/api/account-validate-third-party-storage.md)

## Request[​](#request "Direct link to request")

## Responses[​](#responses "Direct link to Responses")

* 200
* 400
* default

Success

Bad Request

Server Error
