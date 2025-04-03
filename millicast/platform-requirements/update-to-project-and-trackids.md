---
title: 'Update to Project and TrackIds'
slug: /update-to-project-and-trackids
unlisted: true # Note: unlisted pages still show up in dev mode
---

This is part of our [Multi-view](/millicast/playback/multiview.md) feature and only impacts users who where using the multiview feature and their own player SDK implementation. If you are using the hosted video player, there is no update to apply.

In the [Broadcast Events](/millicast/playback/viewer-events.md), the `active` event now uses truely dynamic `trackId`. Below you can find the details of what these broadcast events look like. Using `trackId` dynamically has been [documented in the SDK](https://github.com/millicast/millicast-sdk/blob/460444aa9e7a37ad2c9c77046a97cdaf6448a76f/packages/millicast-sdk/src/View.js#L163) for years but we had some hard-coded examples in our multi-view sample code.

`trackId` is an optional (future-proofing) parameter when calling the `project()` command and is not required.

## Prior to the January release

Before the 2025-02-12, `trackId`, while [intended to be a dynamic value](https://github.com/millicast/millicast-sdk/blob/460444aa9e7a37ad2c9c77046a97cdaf6448a76f/packages/millicast-sdk/src/View.js#L163) was always returned as `"video"` or `"audio"` depending on the track type.

```json JSON
{
  "type": "event",
  "name": "active",
  "data": {
    "streamId": "k9Mwad/multiview",
    "sourceId": null,
    "tracks": [
      {
        "trackId": "video", // while trackId was intended to be dynamic, this was always set to "video"
        "media": "video"
      },
      {
        "trackId": "audio", // while trackId was intended to be dynamic, this was always set to "audio"
        "media": "audio"
      }
    ]
  }
}
```

## After the release

After the 2025-02-12 media server release, this value will be dynamic when returned int he [`active` Broadcast Event](/millicast/playback/viewer-events.md)

```json
{
  "type": "event",
  "name": "active", // this is the "active" broadcast event
  "data": {
    "streamId": "k9Mwad/multiview",
    "sourceId": null,
    "tracks": [
      {
        "trackId": "0", // this will be a dynamic value
        "media": "video"
      },
      {
        "trackId": "1", // this will be a dynamic value
        "media": "audio"
      }
    ]
  }
}
```

## Calling the `project()` command

Prior to the release, our code examples showed a hard-coded `trackId` like this:

```javascript JavaScript
await millicastView.project(sourceID, [
  {
    trackId: 'video', // this value is hard-coded in the code example
    mediaId: videoTransceiver.mid,
    media: 'video',
  },
  {
    trackId: 'audio', // this value is hard-coded in the code example
    mediaId: audioTransceiver.mid,
    media: 'audio',
  },
]);
```

After the release, you can omit `trackId` altogether or use the dynamic value from the `active` event:

```javascript
await millicastView.project(sourceID, [
  {
    // when calling project() trackId is optional and we are removing it from our examples.  By specifying a "media" value (eg, "video") the correct media track will be used
    mediaId: videoTransceiver.mid,
    media: 'video',
  },
  {
    // when calling project() trackId is optional and we are removing it from our examples.  By specifying a "media" value (eg, "audio") the correct media track will be used
    // in the future we will support multi-audio in which case you will need to project the correct trackId to select the correct audio track as recieved from the broadcast event
    mediaId: audioTransceiver.mid,
    media: 'audio',
  },
]);
```

## What happens if I don't make a change?

If you are using the hosted player, this is handled for you.

If you are calling the `project()` command int the SDK:

- If you provide an invalid `trackId` and also a `media` type, the media type will be used.
- If you choose an invalid `trackId` and do not provide a `media` type, the media will fail to render. An error will be visible in the websocket connection.
