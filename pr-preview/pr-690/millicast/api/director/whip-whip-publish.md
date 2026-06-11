# WHIP

WHIP endpoint for publishers. Request body is SDP Offer. Response body will contain SDP Answer. Location header contains remote WHIP endpoint url.

All errors are returned as plain text. If you send a request with the Accept header you must allow both mime types `application/sdp, text/plain`.

## Request[​](#request "Direct link to request")

## Responses[​](#responses "Direct link to Responses")

* 201
* 400
* 401
* 500

Success

Bad Request

Unauthorized

Server Error
