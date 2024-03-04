# What does the error message 'Something went wrong with Native playback' mean

This error, "Something went wrong with Native playback", occurs whenever the player struggles on the native rendering pipeline of the browser in use. The error code itself can be different, and it reflects the HTML5 MediaError interface.

"Something went wrong with Native playback" is a possible error message which can be exposed by THEOplayer. Although it sounds generic, it is related to native rendering, as explained above.

**Native Rendering**

Native rendering is used when THEOplayer leverages the native media playback pipeline. Usually, THEOplayer leverages this when this pipeline is the only possible pipeline, for example when you can't use MSE.

Examples:

- When doing playback on iOS Safari, THEOplayer will do native playback, because native rendering is the only option on iOS Safari.
- When a plain MP4 asset is configured, instead of an HLS or MPEG-DASH stream, THEOplayer will do native rendering.

Native rendering can log an error due to multiple causes, but they relate to MediaError code. There are several MediaError codes, but for this case the ones relevant are:

- `MEDIA_ERR_DECODE: 3` – This is shown when a media resource was deemed as usable, but when trying to decode the media resource in question it appears to have some problems in it (can be segments missing,...).
- `MEDIA_ERR_SRC_NOT_SUPPORTED: 4` – The source added to the player is not suitable for this playback. A good example would be trying to play a DRM protected DASH stream on Safari (Safari only supports HLS-FairPlay)

The THEOplayer API can be used to access the MediaError code: `player.error.code`

This line will return the MediaError together with the specific code. This makes it easier to find out what the error exactly means, and allows developers to plan for further actions.

Related articles

- https://developer.mozilla.org/en-US/docs/Web/API/MediaError
