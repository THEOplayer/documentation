# Create Transcoder

Create a Cloud Transcoder to enable Adaptive Bitrate (ABR) Simulcast streams without requiring multiple broadcast contribution sources.

A Transcoder represents the configuration of your bitrate ladder from a pre-defined profile or by setting the maximum height and frameRate you'd like to target. See the 'List Transcoder Profiles' endpoint to find available Transcoder profiles. If you specify both a profile id and height/frameRate settings only the profile will be used.

You should update any broadcast encoders to use this new origin server as configured by the DNS of the Transcoder which can be found in the response data.

There are additional charges for a Transcoder so you should use the Stop Transcoder and Start Transcoder endpoints to enable cloud transcoding only when you need to broadcast.

## Request[​](#request "Direct link to request")

## Responses[​](#responses "Direct link to Responses")

* 200
* 400
* default

Success

Bad Request

Server Error
