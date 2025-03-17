---
title: "Thumbnail Hooks"
slug: /thumbnail-webhooks
---
The **thumbnail** _type_ of [webhook](/millicast/webhooks/index.md) allows you to receive a static image that is captured every 30 seconds during an active stream. This thumbnail would allow somebody to preview what was on a stream at various intervals.

To enable thumbnail preview images you must:

1. Enable thumbnails on a publishing token.
2. Create a webhook using the REST API or Dashboard with thumbnail hooks enabled.
3. Deploy your own service that can receive the callback and store the image in cloud storage of your choosing.

> 👍 Setting up Webhooks
> 
> Review the [Webhooks](/millicast/webhooks/index.md) guide for additional details on creating and receiving webhooks.

# Thumbnail preview

During a broadcast with **thumbnail preview** enabled, while the stream has an active publisher a thumbnail image of an intra frame will be captured every 30 seconds.

- Thumbnails will only be sent for publish tokens that have enabled this feature
- The request body is the binary image, not the common JSON schema used by other webhooks
- Thumbnails are not retained, you'll need to manage storage, delivery, and deletion of thumbnails from your own infrastructure

## How-to enable thumbnail preview with the dashboard

The [Streaming Dashboard](/millicast/streaming-dashboard/index.md) token settings can be used to toggle the **Thumbnail previews** setting on.


![](/img/millicast/dashboard-publish-thumbnail-setting.png)



## How-to enable thumbnail preview with the REST API

> 👍 Using the REST APIs
> 
> Review the [REST API](/millicast/getting-started/basic-api-tutorial.md) platform guide for more details on generating an API secret for authentication. You will need an _API Secret_ from the dashboard in order to make requests.

The [/api/publish_token](ref:publishtokenv1_createtoken) endpoint when creating or updating a token using the `enableThumbnails` boolean value. Below is an example body for a request to enable thumbnails on a publishing token and stream named _thumbnails_.

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

# Receiving the webhook

The thumbnail webhook is a POST request that will be sent to the webhook URL with a body of a JPEG image and Content-Type of `image/jpeg`. You will need to host the image in you own infrastructure or CDN for your application.

The following HTTP headers are on the request to identify stream details:

- **X-Millicast-Timestamp**: timestamp of the generated thumbnail.
- **X-Millicast-Feed-Id**: Dolby.io Real-time Streaming feed id.
- **X-Millicast-Stream-Id**: Dolby.io Real-time Streaming stream id.
- **X-Millicast-Signature**: SHA1 signature using the hook configured secret (The same signature mechanism used by the other webhooks).

# Troubleshooting

There are a few limitations to be aware of:

- Currently only VP8, H264 and VP9 codecs are supported. Thumbnails for H265 and AV1 are not captured.
- Rescaling is not supported. The thumbnail will be the same resolution as the incoming stream.
- Thumbnails cannot be configured to send more or less frequently than every 30 seconds.
- Regular intra frames are required to generate the thumbnails.

# Learn more

We have some sample code to demonstrate receiving a thumbnail hook and saving it to disk: [Webhook Code Example (download and save)](https://github.com/millicast/samples-millicast-webhooks)
