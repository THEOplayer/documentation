# Frame metadata with Millicast on Web

In addition to streaming audio and video, Millicast also supports inserting additional metadata about what is happening in the stream. This is known as *Frame Metadata*, which allows for embedding and extracting custom application data with frame-level accuracy. For example, this can be used to transport timecodes, bounding boxes, and overlays.

## Enable metadata on your Millicast source[​](#enable-metadata-on-your-millicast-source "Direct link to Enable metadata on your Millicast source")

First, follow [our Getting Started with Millicast on Web guide](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/web/player.md) to set up Millicast with THEOplayer in your web app or website.

Then, enable the `metadata` option in your [Millicast source's `connectOptions`](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/web/player.md#additional-player-configuration) in order to receive frame metadata:

```javascript
player.source = {
  sources: {
    type: 'millicast',
    /* ... */
    connectOptions: {
      metadata: true,
    },
  },
};

```

## Listen for metadata text track events[​](#listen-for-metadata-text-track-events "Direct link to Listen for metadata text track events")

THEOplayer exposes Millicast metadata as cues on a metadata text track. First, listen for the `addtrack` event to receive the Millicast metadata track. Then, listen for the `entercue` event to be notified whenever new metadata is added to the track.

```javascript
player.textTracks.addEventListener('addtrack', function (addTrackEvent) {
  const track = addTrackEvent.track;
  if (track.kind === 'metadata' && track.type === 'millicast') {
    track.addEventListener('entercue', function (event) {
      const cue = event.cue;
      console.log(`Received frame metadata at timecode ${cue.timecode} with data:`, cue.unregistered);
    });
  }
});

```

See [our guide on how to detect active text track cues](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/texttrack/how-to-detect-active-text-track-cues.md) for more information.

## More information[​](#more-information "Direct link to More information")

* [API references](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/MillicastMetadataCue.html)
