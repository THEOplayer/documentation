# Is it a problem if the viewer pauses a live stream for longer than the DVR window

In general, this is no problem as the player will continue playback, once exhausted the current buffer, from the nearest point available, in this case the end of the sliding window.

The viewer may perceive this as a peculiar behavior. They will see at first a small video portion still player that connects to what they were watching before pausing the video: this is what was contained in the current buffer. Then the player will appear to seek on its own, without the user requesting it, to a new position.

In case you wish to avoid this behavior and skip the current buffer, this is also possible with a simple snippet that on resume checks whether the current position is still within the DVR window, and if it is not, then it seeks directly to a new position (without playing the current buffer).

This is a JavaScript example for this, where the DVR window is 60 sec long and the new custom position to seek to is in the middle of it.

```js
player.addEventListener("play", () => {
  player.currentTime =
    player.seekable.end() - player.currentTime > 60
      ? player.seekable.end() - 30
      : player.currentTime;
});
```
