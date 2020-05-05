# Why can't I select another video quality on iOS

**In short**: Apple technically restricts video players from doing this, and there is no workaround.

Any HTTP video player, like THEOplayer, needs to use native technologies to do video playback, decoding and decryption. On web browsers, video players typically leverage the MSE and EME API by default. If this API is not available, then video players have to rely on native playback to handle video playback, decoding, decryption and ABR selection.

On iOS browsers, THEOplayer has to use the native playback pipeline, instead of the [MSE](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API) and [EME](https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API) API. The native playback pipeline on iOS also exposes an API, but this API doesn't expose any information on the available qualities in a HLS stream, nor does it indicate which quality is currently active. In result, THEOplayer cannot offer functionality to developers and viewers to change qualities on iOS browsers.

## Resources
The following resources provide more information:
- https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API