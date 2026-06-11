# Update Account Distribution Settings

Update account wide distribution settings to enable/disable the feature or update the account default cluster list. Whenever publish tokens are created, these will be the default settings used for features that impact how streams are distributed. '\["all"]' could be used in place of cluster list to cascade stream to all existing and any future clusters available to the account. Empty cluster list is not allowed when enabling account wide distribution settings. Cluster list is translated to '\["all"]' clusters if not specified or set to null. Cluster list is ignored when geo cascade is disabled.

## Request[​](#request "Direct link to request")

## Responses[​](#responses "Direct link to Responses")

* 200
* 400
* default

Success

Bad Request

Server Error
