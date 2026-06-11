# Metadata insertion

Metadata insertion lets you deliver out-of-band custom timed data to viewers through the OptiView Live pipeline. The metadata is carried alongside the live stream so it arrives at the player synchronized with the video. Use it for cuepoints, score updates, statistics, or any other event-driven information you want to deliver to viewers in real time.

info

Metadata insertion must be explicitly enabled on your account by a Dolby administrator. Contact your account manager to get started.

## How it works[​](#how-it-works "Direct link to How it works")

After metadata insertion is enabled on your channel, there are three ways to get timed data into the stream:

* **Push via the API** — at any time, POST a binary payload to a UUID of your choosing. The platform attaches it to the live stream as soon as it is received. There are no restrictions on the UUID to use.
* **Forward user-data-unregistered SEI from the source** — these SEI messages carry a UUID followed by an arbitrary payload, letting you ship any application-defined data with your video. List the UUIDs you want passed on the channel; only messages with a listed UUID are forwarded.
* **Forward picture timing SEI from the source** — these SEI messages (defined in ITU-T H.264 Annex D 1.3) attach a timestamp to individual frames, letting you align playback events with timecodes recorded on your backend. They are forwarded automatically; no channel-level configuration is needed.

All routes deliver the payloads to the player as cues on a metadata text track.

## Configuration[​](#configuration "Direct link to Configuration")

Enable metadata insertion on your channel by setting `instreamMetadata.enabled` to `true` when [creating](/documentation/pr-preview/pr-690/theolive/api/create-channel.md) or [updating](/documentation/pr-preview/pr-690/theolive/api/update-channel.md) your channel. To forward user-data-unregistered SEI metadata from your input stream, also list the UUIDs to extract under `instreamMetadata.uuids`.

`POST https://api.theo.live/v2/channels`

```json
{
  "name": "my-channel",
  "instreamMetadata": {
    "enabled": true,
    "uuids": ["11111111-1111-1111-1111-111111111111", "22222222-2222-2222-2222-222222222222"]
  }
}

```

The `uuids` list only applies to user-data-unregistered SEI forwarding — the API push endpoint accepts any UUID, and picture timing SEI is always forwarded.

## Pushing metadata via the API[​](#pushing-metadata-via-the-api "Direct link to Pushing metadata via the API")

Once your channel is running, send a binary payload to the metadata insertion endpoint, addressed with the channel ID and any UUID. The body is opaque to the platform — you decide its format (for example UTF-8 encoded JSON, protobuf, or your own binary layout) and your application is responsible for parsing it on the player side.

`POST https://api.theo.live/v2/channels/{channelId}/instream-metadata/{uuid}`

```bash
curl -X POST \
  "https://api.theo.live/v2/channels/ch_abc123/instream-metadata/11111111-1111-1111-1111-111111111111" \
  -H "Authorization: Basic $AUTH" \
  -H "Content-Type: application/octet-stream" \
  --data-binary '{"event":"goal","team":"home","score":"1-0"}'

```

A `200` response indicates the metadata was accepted and queued for delivery on the stream.

Syncrhonization is best effort but is generally in the next few frames after the message is received.

See the API reference for [Send instream metadata](/documentation/pr-preview/pr-690/theolive/api/send-channel-instream-metadata.md) for the full request specification.

## Consuming on the player[​](#consuming-on-the-player "Direct link to Consuming on the player")

All metadata payloads — whether pushed via the API or forwarded from SEI — surface on the player as cues on a text track. See the [metadata guide for OptiView Player on web](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/web/theolive/metadata.md) for how to listen for and parse them in your application.

## High Availability[​](#high-availability "Direct link to High Availability")

Metadata insertion is applied at the channel level. Any engine within the channel will recieve the same metadata messages so in an active-active setup, both engines will get the metadata. At this time it is not possible to disable metadata on an individual engine within a channel.
