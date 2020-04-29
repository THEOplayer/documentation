# Program Date Time

THEOplayer has support for associating media segments with an absolute date and time. This can be useful when you want to synchronise video playback with displaying other relevant information about the video stream.

THEOplayer enables this feature by making use of the `EXT-X-PROGRAM-DATE-TIME` information that gets embedded in the HLS manifest file.

## API and usage

Once the `EXT-X-PROGRAM-DATE-TIME` information is set in the HLS manifest, reading and setting the current program date time information on a THEOplayer instance is fairly straight forward. Start by [obtaining a reference to the THEOplayer instance](../../getting-started/01-sdks/01-web/00-getting-started.md):

```js
THEOplayer.players[identifier];
```

On this THEOplayer instance, the following API attributes are available for controlling the current program data time:

| Attribute | Description |
| :-------: | :---------: |
| `currentProgramDateTime` | Sets or returns the current program date time reference. This message is calculated from the PROGRAM-DATE-TIME tag. Setting the property will seek to the playback position to the new program date time. (Date object) |

The value of the currentProgramDateTime gets updated with each `timeupdate` event thrown by the THEOplayer instance.
