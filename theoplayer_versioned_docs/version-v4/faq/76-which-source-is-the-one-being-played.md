# Which source is the one being played

In THEOplayer, `player.source.sources` can be used to provide alternative sources for playback, for cross-platform support. What is the actual source being played, if more than one is provided that is supported on the current platform/browser?

The player will select the first source (top to bottom) of a type that is supported on the current platform and try to play it. The player will <u>not</u> automatically select a new source from the list if the current one is failing to play for any reason unrelated to platform support.

You can also find out which the source is that the player selects with the `currentsourcechange` event ([documentation](pathname:///theoplayer/v4/api-reference/web/interfaces/CurrentSourceChangeEvent.html)).

A few additional notes:

- It is of course possible to make the player attempt to play a different source if the one being played errors or never starts to play, but this is to be done in the implementation.
- `player.source.sources` is not intended as a playlist. Playlists can also be accomplished on the implementation side. Here is a simple [example](https://www.theoplayer.com/theoplayer-demo-playlist-and-caching) for the Web SDK.
- This mechanism is based on what the platform declares to support. It does not ensure that all codecs/features included in the stream are supported correctly on the current platform.
