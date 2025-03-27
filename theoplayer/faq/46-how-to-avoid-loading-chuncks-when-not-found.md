# How can we avoid that the player keeps looking for chunks/segments if they are not found

You can use the Network API events to detect whether the stream is offline and implement the behavior you prefer. This is working for HLS and is being implemented (2020) for DASH as well.

When a playlist is loaded that returns 404, the player fails and returns error. However, when the playlist is present but the segments are not available (404), the player will keep looking for segments, if left on its own, in an attempt to play back the video as soon as it’s available.

In this case, however, you can decide to implement a behavior managing this situation by using the Network API, and more precisely the offline event. After some attempts, this event is thrown to indicate that the stream is offline.

The opposite event, online, is also present in the API, and it is Thrown to indicate that the stream has come back online and the player can continue playback. As this usually occurs after an 'offline' event is thrown, the two events may be used in combination to provide more elaborate behaviors.

## Remarks

- On some platforms (e.g.: iPads) when the segments are unavailable, an `error` event is thrown, differently than for the majority of platforms. This inconsistency is due to the lack of MSE (and EME) support on such platforms, which triggers the more generic error event.

## Resources

The following resources provide more information:

- [Network API events](pathname:///theoplayer/v9/api-reference/web/interfaces/NetworkEventMap.html)
- [Network: How to use the Network API](../how-to-guides/08-network/00-introduction.md)
