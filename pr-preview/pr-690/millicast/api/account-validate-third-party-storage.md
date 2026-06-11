# Validate Third Party Storage Setup

Validates third party storage is configured with permissions for Dolby.io to upload media assets.

To track the validation result, keep note of the the `id` returned in the response body. If correctly configured, when calling [Read Media Asset](/documentation/pr-preview/pr-690/millicast/api/media-assets-read-media-asset.md), the response should return a successful entry with `id` matching the `id`.

Run once to validate write permissions. If successful, optionally run a second time to confirm that overwriting is allowed.

Note that validation results are only available for 1 hour.

## Request[​](#request "Direct link to request")

## Responses[​](#responses "Direct link to Responses")

* 200
* default

Success

Server Error
