# How to programmatically detect text track changes

This article describes how you can use the THEOplayer API to detect text track quality changes. A text track "change" is triggered by enabling (or disabling) a subtitle or closed captions track.

The TextTrack API provides this functionality.
More specifically, as a developer, you'll subscribe to the `change` event in the TextTrack API.

Implementing this functionality is a common use-case for developers who want to build their own UI, and annotate the subtitle (or closed captions) track that is currently active.

## SDKs

THEOplayer allows you to track text track changes on the following SDKs.

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | -------- |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      Yes       |          |

## Implementation

The TextTrack API is available across all of our base SDKs. As described in the introduction, to detect text track changes, you want to detect the `change` event in the `TextTrack` API.

- [Web SDK](#web-sdk)
- [Android SDK](#android-sdk)
- [iOS SDK](#iostvos-sdk-and-legacy-iostvos-sdk-412x)
- [Roku SDK](#roku-sdk)

### Web SDK

The implementation of the Web SDK applies to all web-based platforms, including Tizen and webOS.

The Web SDK exposes the TextTrack API through [`player.textTracks`](pathname:///theoplayer/v4/api-reference/web/classes/ChromelessPlayer.html#texttracks).
This `textTracks` property is a [`TextTrackList`](pathname:///theoplayer/v4/api-reference/web/interfaces/TextTracksList.html) that inherits from the [`TrackList`](pathname:///theoplayer/v4/api-reference/web/interfaces/TrackList.html).
This `TrackList` dispatches the events from the [`TrackListEventMap`](pathname:///theoplayer/v4/api-reference/web/interfaces/TrackListEventMap.html).
This `TrackListEventMap` contains the [`change`](pathname:///theoplayer/v4/api-reference/web/interfaces/TrackListEventMap.html#change) event, as well as the `addtrack` and `removetrack` event.

The code below allows you to detect text track changes.

```js
player.textTracks.addEventListener("change", function (event) {
  const track = event.track;
  const isEnabled = track.mode == "showing";
  console.log(track, track.label, track.kind, track.type, isEnabled);
});
```

The properties of a text `track` (e.g. `mode`, `kind`) are described in [the `TextTrack` API reference](pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrack.html).

### Android SDK

The implementation of the Android SDK applies to all Android-based platforms, including Android TV and Fire TV.

The Android SDK exposes the TextTrack API through [`player.getTextTracks()`](pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/Player.html#getTextTracks).
This `getTextTracks()` method returns a [`TextTrackList`](pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/texttrack/TextTrackList.html) that inherits from the [`TrackList`](pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/TrackList.html).
This `TrackList` dispatches the events from the [`TextTrackListEventTypes`](pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/event/track/texttrack/list/TextTrackListEventTypes.html).
The `TextTrackListEventTypes` contains the [`TRACKLISTCHANGE`](pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/event/track/texttrack/list/TextTrackListEventTypes.html#TRACKLISTCHANGE) event, as well as the `ADDTRACK` and `REMOVETRACK` event.

The code below allows you to detect text track changes.

```java
player.getTextTracks().addEventListener(TextTrackListEventTypes.TRACKLISTCHANGE, trackListChangeEvent -> {
    TextTrack track = trackListChangeEvent.getTrack();
    boolean isEnabled = (track.getMode().getMode().equals("showing"));
    System.out.println(track.getLabel() + ", " + track.getKind() + ", " + track.getType().getType() + ", " + isEnabled);
});
```

The properties of a text `track` (e.g. `mode`, `kind`) are described in the [`TextTrack`](pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/texttrack/TextTrack.html) and [`Track`](pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/Track.html) API references.

### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

The implementation of the iOS SDK applies to all iOS-based platforms, including iPadOS and tvOS.

The iOS SDK exposes the TrackTrack API through [`player.textTracks`](pathname:///theoplayer/v4/api-reference/ios/Classes/THEOplayer.html#/s:13THEOplayerSDK0A0C10textTracksAA13TextTrackList_pvp).
This `textTracks` property is a [`TextTrackList`](pathname:///theoplayer/v4/api-reference/ios/Protocols/TextTrackList.html).
This `TextTrackList` dispatches the events from the [`TextTrackListEventTypes`](pathname:///theoplayer/v4/api-reference/ios/Structs/TextTrackListEventTypes.html).
The `TextTrackListEventTypes` contains the [`CHANGE`](pathname:///theoplayer/v4/api-reference/ios/Structs/TextTrackListEventTypes.html#/s:13THEOplayerSDK23TextTrackListEventTypesV6CHANGEAA0F4TypeCyAA0d6ChangeF0CGvpZ) event, as well as the `ADD_TRACK` and `REMOVE_TRACK` event.

The code below allows you to detect text track changes.

```swift
player?.textTracks.addEventListener(type: TextTrackListEventTypes.CHANGE, listener: { (event) in
    let track : TextTrack = event.track as! TextTrack
    let isEnabled = (track.mode.rawValue == "showing")
    print(track.label, track.kind, track.type, isEnabled)
})
```

The properties of a text `track` (e.g. `mode`, `kind`) are described in the [`TextTrack`](pathname:///theoplayer/v4/api-reference/ios/Protocols/TextTrack.html) and [`Track`](pathname:///theoplayer/v4/api-reference/ios/Protocols/Track.html) API references.

### Roku SDK

_This subsection is in maintenance. Reach out to our team if you need help._

# Related articles

Are you reading this article because you're interested in subtitles and closed captions? Continue reading below.

- [How to programmatically detect text tracks](02-how-to-programmatically-detect-text-tracks.md)
- [How to dynamically change the visible captions](01-how-to-dynamically-change-the-visible-captions.md)
- [How to programmatically disable text tracks](03-how-to-programmatically-disable-text-tracks.md)
- [How to insert subtitles](04-how-to-insert-subtitles.md)

Refer to "[How to track id3 cues](06-how-to-track-id3-cues-tags.md)" if you're interested in timed metadata (id3, emsg, EventStream, EXT-X-DATERANGE, ...).

Are you reading this article because you're implementing a custom UI? Then you'll find the following articles interesting:

- [How to build a Chromeless UI](../../how-to-guides/11-ui/06-how-to-build-chromeless-ui.mdx)
- [How to detect video track quality changes](../../how-to-guides/06-mediatrack/07-how-to-detect-video-track-quality-changes.md)
- [How to detect audio track changes](../../how-to-guides/06-mediatrack/08-how-to-detect-audio-track-changes.md)
