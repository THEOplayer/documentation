# Why is my PlayReady stream not working in Chromium Edge?

If you are having problems playing PlayReady streams in Chromium Edge, this may be due to a conflict between player and browser, regarding the DRM system to use. If this is the case, you may solve the issue indicating Playready as your first option with the [_preferredKeySystems_ property](pathname:///theoplayer/v8/api-reference/web/interfaces/DRMConfiguration.html#preferredkeysystems).

## Long Answer

Chromium Edge supports both PlayReady and Widevine DRM systems and by default both flags are active ([edge://flags/](edge://flags/)) - see _Related issues_ for exceptions.

In 2.78, we fixed an issue that was preventing specific streams to play in Edge Chromium with PlayReady (in certain cases) and with Widevine (in other cases) when both flags were enabled on the browser. In recent versions of the player, we also added the property _preferredKeySystems_ (documentation linked above), which helps the player choose the preferred DRM system.

We noticed that, due to their default settings, a conflict arises (regarding which DRM system is to be given priority) between the player and the browser. This may lead to playback failure for certain PlayReady streams. This is solved directly on the implementer’s side by using the following values order for the _preferredKeySystems_ property.

```js
preferredKeySystems: ['playready', 'widevine', 'fairplay'];
```

Please note that this will not hinder playback in case also/only Widevine is present, nor on other browsers.

### Related issues

In the same use cases, playback may also fail on the user’s side due to other causes, independent of the player, for example:

- the flag for the DRM system used in the current DRM configuration in the _player.source_ is disabled
- the machine/platform/browser version does not provide full support for a certain DRM system. For example, you can check the following link for PlayReady: https://testweb.playready.microsoft.com/Tool/Hwdrm
- other issues related to the stream, DRM system or server
