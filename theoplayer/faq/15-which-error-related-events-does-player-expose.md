# Which error related events does the player expose

THEOplayer exposes different types of errors. Refer to "[How to do error handling](../how-to-guides/07-miscellaneous/04-error/01-how-to-do-error-handling.md)"
for information on how to programmatically detect an `error` event through an event listener.

Note that only the `error` events in the "Player API" are fatal.
Error events dispatched in different APIs (e.g. Ads API) are considered non-fatal, because some level of playback might still be possible, or the video player might recover from it.

|          API           |                    Event                     |                                      Use                                       |                             Example/how to trigger                              |
| :--------------------: | :------------------------------------------: | :----------------------------------------------------------------------------: |:-------------------------------------------------------------------------------:|
|         Player         |                    error                     |                 Triggered for media issues, NOT network issues                 |                            A poorly encoded segment                             |
|                        | segmentnotfound (not on iOS + only for DASH) |                            A segment was not found                             |                           A 404 returned on a segment                           |
|        Ads API         |                   aderror                    |                    Something went wrong during ad handling                     |                            Empty ad tag / Adblocker                             |
| Network API (web only) |                   offline                    |                 Thrown to indicate that the stream is offline                  | DASH: take whole stream offline <br/><br/>HLS: take 1 segment offline is enough |
|     Chromecast API     |                    error                     |   Thrown to indicate that there was an error while casting / trying to cast    |                 Unplugged Chromecast power cable during casting                 |
|   Android Player API   |     NoSupportedRepresentationFoundEvent      | Indicates that none of the provided representations is supported by the player |                    Trying to play a 4k stream encoded in AV1                    |
