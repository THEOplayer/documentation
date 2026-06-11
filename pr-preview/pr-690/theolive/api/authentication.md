# Authentication

To make secure calls to the REST API, both authentication and authorization are required. OptiView Live uses token–secret pairs to authorize API requests and ensure secure access.

## Creating an API token[​](#creating-an-api-token "Direct link to Creating an API token")

1. Navigate to **API Tokens** in the dashboard.
2. Click **New** to create a new token.
3. Enter a name for the token.
4. Confirm to generate the token.

The key and secret will be displayed once the token is created.

Note down your key and secret

Make sure to store the key and secret securely — they cannot be viewed again after this step.

## Using the token-secret pair with Basic Authentication[​](#using-the-token-secret-pair-with-basic-authentication "Direct link to Using the token-secret pair with Basic Authentication")

OptiView Live uses Basic Authentication for API requests.

1. Combine your key and secret in the format `key:secret`. Example: `my-token:my-secret`

2. Base64 encode the combined value. Example: `bXktdG9rZW46bXktc2VjcmV0`

3. Include the encoded string in the Authorization header, prefixed with the word Basic. Example header: `Authorization: Basic bXktdG9rZW46bXktc2VjcmV0`

## Full example[​](#full-example "Direct link to Full example")

```bash
curl -X GET https://api.theo.live/v2/channels \
  -H "Authorization: Basic bXktdG9rZW46bXktc2VjcmV0"

```

You're now ready to make authenticated requests to the OptiView Live API.
