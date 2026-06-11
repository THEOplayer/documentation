# Nielsen audience tracking

[Nielsen](https://www.nielsen.com/) is an industry-standard audience measurement system that tracks viewership data across media platforms. By embedding Nielsen markers in your audio stream, you can measure and report on your live audience in real time, providing actionable insights into viewer engagement and reach.

info

Nielsen must be explicitly enabled on your account by a Dolby administrator. Contact your account manager to get started.

This guide explains how to enable Nielsen audience tracking on your streams in a few simple steps.

1. Ensure that your ingest stream contains the Nielsen markers in your audio. This is crucial for our transcoder to pick them up and process them.

2. The next step is enabling the feature when creating your channel like this: ![Enable Nielsen](/documentation/pr-preview/pr-690/assets/images/nielsen-8abbd148337e3581f383694a08b1e758.png)

   That is all the backend configuration work that is required. This will make sure your markers are converted to the correct ID3 messages that a player can then read and report back to Nielsen.

3. The final step is enabling Nielsen on your player. For THEOplayer on web for example, you can find the steps in our [guide to integrating Nielsen on Web](/documentation/pr-preview/pr-690/theoplayer/connectors/web/nielsen.md).

## API example[​](#api-example "Direct link to API example")

You can also enable Nielsen via the API by setting `nielsen.enabled` to `true` when [creating](/documentation/pr-preview/pr-690/theolive/api/create-channel.md) or [updating](/documentation/pr-preview/pr-690/theolive/api/update-channel.md) your channel.

`POST https://api.theo.live/v2/channels`

```json
{
  "name": "my-channel",
  "nielsen": {
    "enabled": true
  }
}

```
