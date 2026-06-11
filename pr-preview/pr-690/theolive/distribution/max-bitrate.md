# Max bitrate

A distribution can be configured with a maximum bitrate. When set, the platform filters the output of the connected engines so that only qualities with a bitrate at or below the configured limit are delivered to viewers.

This is useful when you want to control bandwidth usage per distribution without changing the ABR ladder on the engine itself. For example, you may have a high-quality engine producing multiple rungs up to 8 Mbps, but a specific distribution intended for mobile viewers where you want to cap delivery at 3 Mbps.

## API example[​](#api-example "Direct link to API example")

You can also set the max bitrate via the API using the `maxBitrate` field (in bps) when [creating](/documentation/pr-preview/pr-690/theolive/api/create-channel-distribution.md) or [updating](/documentation/pr-preview/pr-690/theolive/api/update-distribution.md) a distribution.

`POST https://api.theo.live/v2/channels/{channelId}/distributions`

```json
{
  "name": "my-distribution",
  "maxBitrate": 3000000
}

```
