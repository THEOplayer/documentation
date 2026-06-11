# Update Transcoder

Make changes to the configuration of an existing Transcoder. Changes should take effect without requiring a server restart except for DNS prefix and cluster, which can only be updated when the transcoder is in a shutdown state.

Changing the profile will require either a profile id or the height, frameRate, and passThrough. If you specify both, only the profile will be used. See the 'List Transcoder Profiles' endpoint to find available Transcoder profiles.

## Request[​](#request "Direct link to request")

## Responses[​](#responses "Direct link to Responses")

* 200
* 400
* default

Success

Bad Request

Server Error
