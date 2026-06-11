# Closed captions

The Dolby OptiView Live platform supports closed captions ingest and delivery. This functionality is essential for accessibility, allowing viewers to follow along with spoken content through on-screen text.

caution

This functionality is **only** supported through the SRT ingest protocol.

info

Closed captions are discarded unless explicitly configured.

## Configuring closed captions[​](#configuring-closed-captions "Direct link to Configuring closed captions")

To deliver closed captions the following steps must be taken:

1. Ensure your encoder is configured to include CEA-608/708 closed caption data in the video stream.
2. Within the dashboard, configure the closed captions track by selecting the channel, language, and label.

![Closed captions configuration](/documentation/pr-preview/pr-690/assets/images/srt-pull-ingest-02f29b0715884056d2df128bcc52688d.png)

3. Start your channel and begin ingesting video with embedded caption data.
4. Check the preview in the dashboard to validate the captions are being received correctly.

## API example[​](#api-example "Direct link to API example")

You can also configure closed captions via the API when [creating](/documentation/pr-preview/pr-690/theolive/api/create-channel-ingest.md) or [updating](/documentation/pr-preview/pr-690/theolive/api/update-ingest.md) an ingest. Include the `captions` array in your request body, where each track requires a `channel` number and a `language`.

`POST https://api.theo.live/v2/channels/{channelId}/ingests`

```json
{
  "name": "my-ingest",
  "type": "srt-pull",
  "url": "srt://your-srt-source:1234",
  "region": "europe-west",
  "captions": [{ "channel": 1, "language": "en", "label": "English" }]
}

```

## Feature Compatibility and Limitations[​](#feature-compatibility-and-limitations "Direct link to Feature Compatibility and Limitations")

* Only CEA-608/708 embedded captions are supported.
* Captions must be embedded in the video stream by the encoder.

#### Ingest[​](#ingest "Direct link to Ingest")

| RTMP Push | RTMP Pull | SRT Pull |
| --------- | --------- | -------- |
| No        | No        | Yes      |
