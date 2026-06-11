# Validate Third Party Storage Setup

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

**Please refer to [Validate Third Party Storage Setup](/documentation/pr-preview/pr-690/millicast/api/account-validate-third-party-storage.md)**

Validates third party storage is configured with permissions for Dolby.io to upload media assets.

To track the validation result, keep note of the the `validationId` returned in the response body. If correctly configured, when calling [Read Media Asset](/documentation/pr-preview/pr-690/millicast/api/record-files-v-2-read-media-asset.md), the response should return a successful entry with `id` matching the `validationId`.

Run once to validate write permissions. If successful, optionally run a second time to confirm that overwriting is allowed.

Note that validation results are only available for 1 hour.

If you provide an empty body or no body your default storage profile will be validated.

## Request[​](#request "Direct link to request")

## Responses[​](#responses "Direct link to Responses")

* 200
* default

Success

Server Error
