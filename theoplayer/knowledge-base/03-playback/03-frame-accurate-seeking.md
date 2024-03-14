# Frame Accurate Seeking

This guide will explain how you can achieve frame-accurate seeking with THEOplayer. It will explain how to calculate the current frame of your player, how to seek to a specific frame and known limitations with this approach.

## Calculate current frame

The current frame of the player can be calculated given the current time of the player, the time at which the first frame is located and the framerate. A possible implementation could be:

```js
function getCurrentFrame(player) {
  var activeQuality = player.videoTracks[0].activeQuality;
  return Math.round(
    (player.currentTime - activeQuality.firstFrame) * activeQuality.frameRate -
      0.5
  );
}
```

NOTE: This implementation depends on the first frame and frameRate of the active video quality. This information is not available until start of playback. When an active quality is chosen, an `activequalitychanged` event will be dispatched. The active quality is then accessible but might not have initialized values for the framerate and firstframe properties. When these properties are updated, an `update` event will be dispatched on the active quality. Using these two events, you can determine from when frame accurate seeking is possible.

## Seek to specific frame

Given a certain frame number, it is possible to seek to this frame specifically. To obtain this behavior, the time that corresponds with the frame should be calculated. A possible implementation could be:

```js
function seekToFrame(player, targetFrame) {
  var activeQuality = player.videoTracks[0].activeQuality;
  var time =
    (targetFrame + 0.5) / activeQuality.frameRate + activeQuality.firstFrame;
  player.currentTime = time;
}
```

## Example

The previous sections can be combined to obtain a wide variety of use cases. Suppose you desire to seek to 100 frames after the current one, this can easily be obtained with the following snippet:

```js
seekToFrame(player, getCurrentFrame(player) + 100);
```

## Known limitations

The approach mentioned above is easy and straightforward, however it does have some limitations.

- The first frame will be 0 if you start playback in the middle of a stream. This can change later if you seek back to the start of the stream. Leading to small inaccuracies.
- If an HLS stream contains discontinuities, the frame rate might not be 100% accurate.
- Some MPEG-DASH streams manifests don't contain the frame rate. In this case frame accurate seeking is not possible.
- For MPEG-DASH streams, the first frame is always reported as 0. If the first frame does not start at 0, then this approach won't work.
