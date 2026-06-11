# Thumbnail Hooks

The **thumbnail** *type* of [webhook](/documentation/pr-preview/pr-690/millicast/webhooks.md) allows you to receive a static image that is captured every 30 seconds during an active stream. This thumbnail would allow somebody to preview what was on a stream at various intervals.

To enable thumbnail preview images you must:

1. Enable thumbnails on a publishing token.
2. Create a webhook using the REST API or Dashboard with thumbnail hooks enabled.
3. Deploy your own service that can receive the callback and store the image in cloud storage of your choosing.

Setting up Webhooks

Review the [Webhooks](/documentation/pr-preview/pr-690/millicast/webhooks.md) guide for additional details on creating and receiving webhooks.

## Thumbnail preview[​](#thumbnail-preview "Direct link to Thumbnail preview")

During a broadcast with **thumbnail preview** enabled, while the stream has an active publisher a thumbnail image of an intra frame will be captured every 30 seconds.

* Thumbnails will only be sent for publish tokens that have enabled this feature
* The request body is the binary image, not the common JSON schema used by other webhooks
* Thumbnails are not retained, you'll need to manage storage, delivery, and deletion of thumbnails from your own infrastructure

### How-to enable thumbnail preview with the dashboard[​](#how-to-enable-thumbnail-preview-with-the-dashboard "Direct link to How-to enable thumbnail preview with the dashboard")

The [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md) token settings can be used to toggle the **Thumbnail previews** setting on.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dashboard-publish-thumbnail-setting-ff238b8ee4ebb5bd3d18ee2f6da1281a.png)

### How-to enable thumbnail preview with the REST API[​](#how-to-enable-thumbnail-preview-with-the-rest-api "Direct link to How-to enable thumbnail preview with the REST API")

Using the REST APIs

Review the [REST API](/documentation/pr-preview/pr-690/millicast/getting-started/using-rest-apis.md) platform guide for more details on generating an API secret for authentication. You will need an *API Secret* from the dashboard in order to make requests.

The [/api/publish\_token](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-create-token.md) endpoint when creating or updating a token using the `enableThumbnails` boolean value. Below is an example body for a request to enable thumbnails on a publishing token and stream named *thumbnails*.

```json
{
  "streams": [
    {
      "isRegex": false,
      "streamName": "thumbnails"
    }
  ],
  "subscribeRequiresAuth": false,
  "record": false,
  "multisource": false,
  "label": "thumbnails",
  "enableThumbnails": true
}

```

## Receiving the webhook[​](#receiving-the-webhook "Direct link to Receiving the webhook")

The thumbnail webhook is a POST request that will be sent to the webhook URL with a body of a JPEG image and Content-Type of `image/jpeg`. You will need to host the image in you own infrastructure or CDN for your application.

The following HTTP headers are on the request to identify stream details:

* **X-Millicast-Timestamp**: timestamp of the generated thumbnail.
* **X-Millicast-Feed-Id**: OptiView Real-time Streaming feed id.
* **X-Millicast-Stream-Id**: OptiView Real-time Streaming stream id.
* **X-Millicast-Token-Id**: OptiView Real-time Streaming publish token id.
* **X-Millicast-Signature**: SHA1 signature using the hook configured secret (The same signature mechanism used by the other webhooks).

## Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

There are a few limitations to be aware of:

* Currently only VP8, H264 and VP9 codecs are supported. Thumbnails for H265 and AV1 are not captured.
* Rescaling is not supported. The thumbnail will be the same resolution as the incoming stream.
* Thumbnails cannot be configured to send more or less frequently than every 30 seconds.
* Regular intra frames are required to generate the thumbnails.

## On demand thumbnails[​](#on-demand-thumbnails "Direct link to On demand thumbnails")

If the thumbnails generated every 30 seconds are not interesting or timed appropriately, you may instead create 'on-demand' thumbnails. Call the /api/thumbnails endpoint to immediately generate a thumbnail for a streamName and/or tokenId and send it to any configured webhooks.

```text
curl --request POST \
     --url https://api.millicast.com/api/thumbnails \
     --header 'accept: application/json' \
     --header 'authorization: Bearer {YOUR_API_SECRET}' \
     --header 'content-type: application/json' \
     --data '
{
  "streamName": "myStreamName",
  "tokenId": 12345
}
'

```

Note that the thumbnail setting on the publish token only controls the regularly scheduled thumbnails every 30 seconds and is not required for on demand thumbnails. On demand thumbnails and scheduled thumbnails may be used in parallel.

On demand thumbnails are rate limited to 6 per minute per streamName/tokenId combination.

## Learn more[​](#learn-more "Direct link to Learn more")

We have some sample code to demonstrate receiving a thumbnail hook and saving it to disk: [Webhook Code Example (download and save)](https://github.com/millicast/samples-millicast-webhooks)
