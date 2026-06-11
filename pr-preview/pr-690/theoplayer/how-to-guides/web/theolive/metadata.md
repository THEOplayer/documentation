# Metadata

Metadata that travels through your OptiView Live stream — whether [pushed via the API or embedded as SEI](/documentation/pr-preview/pr-690/theolive/channel/metadata-insertion.md) — surfaces on the player as cues on a text track. The general approach is the same in every case:

1. Listen for `addtrack` on `player.textTracks` so you find out when a new metadata track shows up.
2. Inspect the track to make sure it carries the metadata you care about.
3. Subscribe to a cue event on that track and read the payload from `cue.content`.

The properties you match on, the cue event you subscribe to, and the shape of `cue.content` all depend on which kind of metadata is being delivered.

## User-data-unregistered SEI and API push[​](#user-data-unregistered-sei-and-api-push "Direct link to User-data-unregistered SEI and API push")

UDU SEI and API-pushed payloads surface on a text track with `type === 'emsg'` and an `inBandMetadataTrackDispatchType` of `urn:uuid:<your-uuid>`. Pick the cue event that matches when you want to react: `addcue` fires as soon as a payload becomes available on the track, before playback reaches it — useful when you want to prefetch data or update application state ahead of time. `entercue` fires when playback enters the cue — useful when you want to act in sync with the video, for example to render an overlay at the moment the cue was inserted.

Suppose your UUID is `11111111-1111-1111-1111-111111111111`:

```javascript
player.textTracks.addEventListener('addtrack', (event) => {
  const track = event.track;
  if (track.type === 'emsg' && track.inBandMetadataTrackDispatchType === 'urn:uuid:11111111-1111-1111-1111-111111111111') {
    track.addEventListener('addcue', (e) => {
      console.log('cue', e.cue.content);
    });
  }
});

```

Here the cue `content` carries the binary payload exactly as it was sent — your application is responsible for parsing it (for example UTF-8 JSON, protobuf, or your own format).

## Picture timing SEI[​](#picture-timing-sei "Direct link to Picture timing SEI")

Picture timing SEI cues surface on a text track with `id === 'timecode'`. Each cue is anchored to a frame, so `entercue` is usually the most useful event: it fires when playback reaches the cue, letting you react in sync with the video.

```javascript
player.textTracks.addEventListener('addtrack', (event) => {
  const track = event.track;
  if (track.id === 'timecode') {
    track.mode = 'showing'; // Setting the mode to showing will enable the entercue events
    track.addEventListener('entercue', this.onTimeCode);
  }
});

```

The cue `content` is a structured `TimeCode` object:

```typescript
export interface TimeCode {
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly frames: number;
}

```

A handler can then turn that timecode into whatever action your app needs:

```javascript
const onTimeCode = (event) => {
  const timeCode = event.cue.content;
  // Insert other code here
};

```

A full example could be as follows: you distribute sports matches and want to display an overlay on the player when the score changes. Every time a score change happens, you add a picture timing SEI message to the stream and store in your backend that this time corresponds with this score. (You could also just add the timing message to all frames if this is easier, but this requires more processing both server and player side.) This information can then be retrieved by the application running on the device of a viewer. You then add the event listener and listen for the `entercue` events. In the listener you check whether the `TimeCode` corresponds with a score change event you recorded earlier and if so, display an overlay over the player.
