# Known Chromecast Limitations in 2.61.1

## Replay while connected to Chromecast does not work 

Affected Platforms: iOS, Android

**Solution:**

1. Add a listener to the Chromecast API for the "statechange" event.
2. Add a listener to the player API for the "ended" event.
3. Use the first event listener to keep track of the Chromecast state.
4. If the second listener is triggered and the Chromecast state is "connected" reset the source.


## Leaving a Chromecast session while playing a DASH stream causes an unrecoverable error

When you leave an active Chromecast session while playing a dash stream THEOplayer will not be able to pick up playback on the iOS device.

Affected Platforms: iOS

**Solution:**

1. Add a listener to the Chromecast API for the "statechange" event.
2. Use the event listener to keep track of the Chromecast state.
3. If the Chromecast state was "connected" and is now something else, replace the current DASH source with an HLS alternative.