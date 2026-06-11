# WebRTC

A distribution can be configured with a WebRTC source to enable sub-second, real-time delivery alongside the standard HESP and HLS output protocols. When WebRTC is enabled, the platform connects the distribution to an [OptiView Real-time Streaming](/documentation/pr-preview/pr-690/millicast/getting-started.md) source, allowing viewers to receive the stream over WebRTC for the lowest possible latency.

Distribution-level security does not apply to WebRTC

When viewers play back via the WebRTC source, traffic is served directly by OptiView Real-time Streaming and bypasses the distribution. As a result, distribution-level [token-based security](/documentation/pr-preview/pr-690/theolive/distribution/security/token-based-security.md), [geo-blocking](/documentation/pr-preview/pr-690/theolive/distribution/security/geo-blocking.md), [IP blocking](/documentation/pr-preview/pr-690/theolive/distribution/security/ip-blocking.md), and [referrer blocking](/documentation/pr-preview/pr-690/theolive/distribution/security/referrer-blocking.md) are **not enforced** for WebRTC playback. To protect a WebRTC stream, configure security directly on the OptiView Real-time Streaming source (for example, [subscribe tokens](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md)).

## How it works[​](#how-it-works "Direct link to How it works")

WebRTC delivery is configured per distribution using the `webRtc` field. The field links the distribution to an OptiView Real-time Streaming source by specifying the source name, account ID, and API URL of the real-time stream.

When a viewer connects to a distribution that has WebRTC configured, the player selects between the WebRTC source and the regular HESP/HLS output based on priority. The `priority` field must be `0` or higher, where a lower value means higher precedence — the same direction as [engine priority](/documentation/pr-preview/pr-690/theolive/architecture.md#engine). When the WebRTC priority is lower than the engine's priority, the player prefers the WebRTC source, with HESP/HLS acting as a fallback.

### Configuration fields[​](#configuration-fields "Direct link to Configuration fields")

| Field           | Type     | Required | Description                                                                                |
| --------------- | -------- | -------- | ------------------------------------------------------------------------------------------ |
| `priority`      | `number` | Yes      | Priority of the WebRTC source. Must be `0` or higher; lower values mean higher precedence. |
| `src.name`      | `string` | Yes      | The OptiView Real-time Streaming stream name.                                              |
| `src.accountId` | `string` | Yes      | The OptiView Real-time Streaming account ID.                                               |
| `src.apiUrl`    | `string` | Yes      | The OptiView Real-time Streaming Director API URL (for example, the subscribe endpoint).   |

To remove the WebRTC configuration from a distribution, set the `webRtc` field to `null` when updating.

## When to use WebRTC[​](#when-to-use-webrtc "Direct link to When to use WebRTC")

* **Sub-second latency** — WebRTC delivers end-to-end latency under 500 ms, making it ideal for interactive use cases such as auctions, betting, or live Q\&A.
* **Hybrid delivery** — combine WebRTC for the lowest latency with HESP/HLS as a fallback for broad device compatibility. The player automatically selects the best available protocol.

## API example[​](#api-example "Direct link to API example")

You can configure WebRTC via the API using the `webRtc` field when [creating](/documentation/pr-preview/pr-690/theolive/api/create-channel-distribution.md) or [updating](/documentation/pr-preview/pr-690/theolive/api/update-distribution.md) a distribution.

### Add WebRTC to a distribution[​](#add-webrtc-to-a-distribution "Direct link to Add WebRTC to a distribution")

`POST https://api.theo.live/v2/channels/{channelId}/distributions`

```json
{
  "name": "my-distribution",
  "webRtc": {
    "priority": 0,
    "src": {
      "name": "my-realtime-stream",
      "accountId": "your-realtime-account-id",
      "apiUrl": "https://director.millicast.com/api/director/subscribe"
    }
  }
}

```

In this example, the WebRTC source is configured with `priority: 0`, the highest possible WebRTC priority. When the engine priority is higher than `0`, the player prefers the WebRTC source and falls back to the engine output (HESP/HLS) otherwise.

### Remove WebRTC from a distribution[​](#remove-webrtc-from-a-distribution "Direct link to Remove WebRTC from a distribution")

`PATCH https://api.theo.live/v2/distributions/{distributionId}`

```json
{
  "webRtc": null
}

```

## Notes[​](#notes "Direct link to Notes")

* WebRTC is configured per distribution, not per engine. Different distributions on the same channel can have different WebRTC configurations — or none at all.
* Distribution-level security and geo-blocking do **not** apply to WebRTC playback — they only affect HESP and HLS delivery. See the warning above for details.
* [Distribution overrides](/documentation/pr-preview/pr-690/theolive/distribution/distribution-override.md) work as expected with WebRTC.
