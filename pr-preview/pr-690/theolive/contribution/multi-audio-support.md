# Multi-audio

The Dolby OptiView Live platform supports multi-audio ingest and delivery. This functionality is perfect for use cases such as live events where multiple languages or commentary may be required.

caution

This functionality is **only** supported through the SRT ingest protocol.

info

If multi-audio is not configured, the first audio track in the stream is used by default. Any other audio tracks that are not configured are discarded.

## Configuring multi-audio ingest and playback[​](#configuring-multi-audio-ingest-and-playback "Direct link to Configuring multi-audio ingest and playback")

To deliver multi audio SRT the following steps must be taken:

1. Within the dashboard configure your SRT listener endpoint.
2. Configure your expected incoming "Audio tracks" by specifying a language, label, and the expected PID.

![SRT Multi-audio example with PIDs](/documentation/pr-preview/pr-690/assets/images/srt-multi-audio-2-119776b5978eba41f7b1a2de642a828b.png)

3. Start the Channel and begin ingesting video and audio into the engine.
4. Check the preview in the dashboard to validate the audio tracks are being received correctly.

## API example[​](#api-example "Direct link to API example")

You can also configure multi-audio tracks via the API when [creating](/documentation/pr-preview/pr-690/theolive/api/create-channel-ingest.md) or [updating](/documentation/pr-preview/pr-690/theolive/api/update-ingest.md) an ingest. Include the `tracks.audio` array in your request body, where each track requires a `language` and the `pid` matching your SRT stream.

`POST https://api.theo.live/v2/channels/{channelId}/ingests`

```json
{
  "name": "my-ingest",
  "type": "srt-pull",
  "url": "srt://your-srt-source:1234",
  "region": "europe-west",
  "tracks": {
    "audio": [
      { "pid": 256, "language": "en", "label": "English" },
      { "pid": 257, "language": "es", "label": "Spanish" }
    ]
  }
}

```

## Feature Compatibility and Limitations[​](#feature-compatibility-and-limitations "Direct link to Feature Compatibility and Limitations")

* Audio must be encoded as AAC.
* Only stereo audio is supported.
* There is a limit of 12 audio tracks per channel.

#### Ingest[​](#ingest "Direct link to Ingest")

| RTMP Push | RTMP Pull | SRT Pull |
| --------- | --------- | -------- |
| No        | No        | Yes      |
