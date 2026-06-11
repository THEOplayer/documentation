# Syndication

With OptiView Real-time Streaming you can syndicate content through multiple distribution partners or channels. This can be helpful to maximize the number of viewers or monetizing content through other platforms. In order to accomplish this, it is important to be able to track syndicated streams for analytics and billing.

## Syndication[​](#syndication "Direct link to Syndication")

Broadcast syndication defines a process for leasing the rights to distribute content through various third-parties. If you own the distribution rights to content you are broadcasting, you may want to sell the feed to other platforms to playback to their audience in order to maximize reach. It is important to do this securely while also metering who is consuming the content that you are distributing.

### Syndication workflow[​](#syndication-workflow "Direct link to Syndication workflow")

The following is an **example workflow** for setting up syndicated substreams:

1. [Create a Publish token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md) for your broadcast. Make sure this token has the **secured** setting enabled.
2. Before the broadcast begins, create a [Subscribe token with tracking](#creating-a-subscribe-token-with-tracking-id) for each 3rd party you are syndicating a stream. These Subscribe tokens function as "master" tokens for each platform you are syndicating content. The master Subscribe token can be used by the 3rd party to [self-sign other Subscribe tokens](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md#self-signing-subscribe-tokens) for their users if they need to secure their streams.
3. Begin [broadcasting](/documentation/pr-preview/pr-690/millicast/broadcast.md) your premium content via OptiView Real-time Streaming. The 3rd parties can use the provided Subscribe token to [access the stream](/documentation/pr-preview/pr-690/millicast/playback.md) for their viewers or to [sign more Subscribe tokens for their viewers](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md#self-signing-subscribe-tokens).
4. When the stream is running, the media server will [gather statistics](#viewing-statistics) for the viewer associated with the tracking ID information. Since OptiView Real-time Streaming charges based on bandwidth, this data can be used to bill the 3rd parties relative to their consumed data.

### RTMP syndication[​](#rtmp-syndication "Direct link to RTMP syndication")

In certain circumstances, you may also choose to distribute content with RTMP to share on public commercial streaming platforms. Follow the [Simulcast WebRTC and RTMP on OBS guide](/documentation/pr-preview/pr-690/millicast/software-encoders/obs.md#multi-bitrate-simulcast-contribution) to learn how you can use OBS to create a real-time WebRTC stream and an RTMP stream simultaneously. It is important to note that the WebRTC stream will be real-time (*<500ms*), while the RTMP stream may have more delay (*6s - 30s*).

## How-to track syndication[​](#how-to-track-syndication "Direct link to How-to track syndication")

The Streaming platform lets you track the following data while using syndication:

* Bandwidth consumption per a distribution channel. The **trackingId** parameter, which groups viewers of the same stream, allows you to get the aggregated bandwidth usage of all viewers. This is useful for billing or user engagement analytics.

* Bandwidth consumption of a specific viewer. By assigning a unique identifier to each viewer via the **customViewerData** parameter, you can access the bandwidth consumption of each viewer for analytics purposes. This form of tracking is not available for everyone and requires contacting sales.

To manage viewing access, there are two types of tokens you use to syndicate:

* [Subscribe tokens](/documentation/pr-preview/pr-690/millicast/token-api.md#creating-subscribe-tokens) can be used to restrict access for "who" may view a stream. You can assign a `trackingId` to each token for correlating usage.
* [Self-signed Subscribe tokens](/documentation/pr-preview/pr-690/millicast/token-api.md#self-sign-subscribe-tokens) are JSON Web Tokens (JWT) that can be generated using a single *subscribe token* as the parent. These tokens can also be used to restrict access for "who" may view a stream but are instead created, signed, and managed by the content owner or distributor.

### Creating a Subscribe token with tracking ID[​](#creating-a-subscribe-token-with-tracking-id "Direct link to Creating a Subscribe token with tracking ID")

You can create a subscribe token with a tracking ID using either the [Create Token](/documentation/pr-preview/pr-690/millicast/api/subscribe-token-v-1-create-token.md) API or the [OptiView Real-time Streaming Dashboard](https://streaming.dolby.io/).

To use the [Create Token](/documentation/pr-preview/pr-690/millicast/api/subscribe-token-v-1-create-token.md) API, add the following to your API request body:

Request body for Create Token

```json
{
  "label": "with-tracking-2",
  "streams": [
    {
      "streamName": "test-stream",
      "isRegex": false
    }
  ],
  "tracking": {
    "trackingId": "JohnDoe"
  },
  "originCluster": "ams-1"
}

```

Region Origination

The published stream and Subscribe token must originate from the same cluster region. The "Auto" region may be selected for both if the broadcast region changes from stream to stream. For more information, see [Multi-region Support](/documentation/pr-preview/pr-690/millicast/distribution/multi-region-support.md).

Alternatively, you can specify a tracking ID using the [OptiView Real-time Streaming Dashboard](https://streaming.dolby.io/) when [creating a Subscribe token](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md#creating-a-subscribe-token).

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/sub2-e3f39128c67f999abdab339803153b70.png)

### Tracking with self-signed Subscribe tokens[​](#tracking-with-self-signed-subscribe-tokens "Direct link to Tracking with self-signed Subscribe tokens")

Once you have created a Subscribe token with a tracking ID, you can self-sign the token by following [this procedure](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md#creating-a-self-signed-token). Be aware of the [limitations](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md#limitations).

### Viewing statistics[​](#viewing-statistics "Direct link to Viewing statistics")

With your API Secret found on the OptiView Real-time Streaming Dashboard, you can query information based on your viewer's tracking ID and other data using the following REST APIs:

* [Total bandwidth per TrackingID per stream](/documentation/pr-preview/pr-690/millicast/api/analytics-get-tracking-total-for-streams.md)
* [Series bandwidth per TrackingID per stream](/documentation/pr-preview/pr-690/millicast/api/analytics-get-tracking-series-for-streams.md)
* [Total bandwidth for streams specified by TrackingID](/documentation/pr-preview/pr-690/millicast/api/analytics-get-total-bandwidth-for-tracking-id.md)
* [Series bandwidth for streams specified by TrackingID](/documentation/pr-preview/pr-690/millicast/api/analytics-get-series-bandwidth-for-tracking-id.md)

To get the bandwidth consumption of a specific viewer, use the [Viewer Records](/documentation/pr-preview/pr-690/millicast/api/reporting/records-get-viewer-records.md) REST API.
