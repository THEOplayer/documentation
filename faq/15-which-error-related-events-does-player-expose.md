# Which error related events does the player expose?

| API | Event | Use | Example/how to trigger |
| :-: | :---: | :-: | :--------------------: |
| Player | error | Triggered for media issues, NOT network issues | A poorly encoded segment |
| | contentprotectionerror | Something went wrong during DRM setup | A wrong license key (but valid, so 200, not 404) |
| | segmentnotfound (not on iOS + only for DASH) | A segment was not found | A 404 returned on a segment |
| Ads API | aderror | Something went wrong during ad handling | Empty ad tag / Adblocker |
| Network API (web only) | offline | Thrown to indicate that the stream is offline | DASH: take whole stream offline <br><br>HLS: take 1 segment offline is enough |
| Chromecast API | error | Thrown to indicate that there was an error while casting / trying to cast | Unplugged Chromecast power cable during casting |
| Android Player API | NoSupportedRepresentationFoundEvent | Indicates that none of the provided representations is supported by the player | Trying to play a 4k stream encoded in AV1 |