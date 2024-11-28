# Why does the currentTime seem off in my livestream & what can I do about it

THEOplayer has a currentTime property, which returns you the current playback position in the video (in seconds). For VOD this works as you would expect. If you have a video, let it play for 30 seconds and query the currentTime, the player will report 30 seconds. However, if you start watching a livestream and query the currentTime after 30 seconds, you won't get 30 seconds reported. Nor will you get the time that would have elapsed if you watched the segments in the most recent manifest file until the point where you queried the currentTime. This might seem odd, but there's a very good reason for this, which we'll explain in a bit, along with some workarounds if you do want to use one of the aforementioned definitions of currentTime in a live streaming context.

To calculate the currentTime, THEOplayer follows the HTML5 specification. However, for livestreams, this is not specified. Hence, if you try to use currentTime for synchronization between players, you'd get different behavior among different players. It's even possible to see different behavior among different streaming protocols in conjunction with the same player.

The internal implementation THEOplayer uses, is constructed to never have a negative currentTime. A few things are being checked to ensure this:

- Check if it's a VOD. In this case the timeline starts at 0
- In case it's a live stream, there are two options

**It's a live-EVENT stream**

- Manifest contains `EXT-X-PLAYLIST-TYPE: EVENT`
- All renditions started at the same time, so the first segment would have timestamp 0

**It's a livestream with a DVR window**

- For these some players choose to start the 0-offset at the start of the first segment
- However, segments are not necessarily aligned across multiple renditions:
- Switching renditions can cause new content to become available before the start timestamps of the first rendition
- Such a segments would halve a negative start timestamp
- To avoid negative timestamps, THEOplayer keeps an offset of 3 target durations from the start as its zero-reference

How can you deal with this if you want to synchronize players or get a zero-based timestamp? You have **3 options**:

1. Use `EXT-X-PROGRAM-DATE-TIME`, which gives you an absolute time reference.
2. Make your stream an event stream by including `EXT-X-PLAYLIST-TYPE: EVENT` in the manifest
3. Use the player's seekable property (which is based on the manifest) and query seekable.start(0) to find the starting time of your stream
   3.1 Attach an event listener for the 'durationchange' event (triggered the first time a media playlist is loaded)
   3.2 Upon this event, store player.seekable.start(0) in a variable 'timeOffset' and remove the eventlistener
   3.3 Subtract the value of 'timeOffset' from the player's currentTime to get a zero-based timestamp

Here's a code snippet for option 3 :

```js
function AbsoluteTimeline(player) {
  var timeOffset = 0;

  function durationchangeHandler() {
    timeOffset = player.seekable.start(0);
    player.removeEventListener('durationchange', durationchangeHandler);
  }
  player.addEventListener('durationchange', durationchangeHandler);

  return {
    getOffset: function () {
      return timeOffset;
    },
    getCurrentTime: function () {
      return player.currentTime - timeOffset;
    },
    seek: function (timestamp) {
      player.currentTime = timestamp + timeOffset;
    },
  };
}

var timeline = AbsoluteTimeline(player);
```
