# Update Account Geo Cascade Settings

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

**Please refer to [Update Account Distribution Settings](/documentation/pr-preview/pr-690/millicast/api/account-update-account-distribution.md)**

Update account wide geo cascade settings to enable/disable the feature or update the account default cluster list. '\["all"]' could be used in place of cluster list to cascade stream to all existing and any future clusters available to the account. Empty cluster list is not allowed when enabling geo cascade feature. Cluster list is translated to '\["all"]' clusters if not specified or set to null. Cluster list is ignored when geo cascade is disabled.

## Request[​](#request "Direct link to request")

## Responses[​](#responses "Direct link to Responses")

* 200
* 400
* default

Success

Bad Request

Server Error
