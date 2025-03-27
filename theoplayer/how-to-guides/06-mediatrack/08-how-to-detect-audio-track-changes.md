# How to programmatically detect audio track changes

This article describes how you can use the THEOplayer API to detect audio track quality changes.
An audio track "change" is triggered by enabling (or disabling) an audio track.

The AudioTrack API provides this functionality.
More specifically, as a developer, you'll subscribe to the `change` event in the AudioTrack API.

Implementing this functionality is a common use-case for developers who want to build their own UI, and annotate the audio track that is currently active.

## SDKs

THEOplayer allows you to track audio track changes on the following SDKs.

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | -------- |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      Yes       |          |

## Implementation

The AudioTrack API is available across all of our base SDKs. As described in the introduction, to detect text track changes, you want to detect the `change` event in the `AudioTrack` API.

- [Web SDK](#web-sdk)
- [Android SDK](#android-sdk)
- [iOS SDK](#iostvos-sdk-and-legacy-iostvos-sdk-412x)
- [Roku SDK](#roku-sdk)

### Web SDK

The implementation of the Web SDK applies to all web-based platforms, including Tizen and webOS.

The Web SDK exposes the AudioTrack API through [`player.audioTracks`](pathname:///theoplayer/v9/api-reference/web/classes/ChromelessPlayer.html#audiotracks).
This `audioTracks` property is a [`MediaTrackList`](pathname:///theoplayer/v9/api-reference/web/interfaces/MediaTrackList.html) that inherits from the [`TrackList`](pathname:///theoplayer/v9/api-reference/web/interfaces/TrackList.html).
This `TrackList` dispatches the events from the [`TrackListEventMap`](pathname:///theoplayer/v9/api-reference/web/interfaces/TrackListEventMap.html).
This `TrackListEventMap` contains the [`change`](pathname:///theoplayer/v9/api-reference/web/interfaces/TrackListEventMap.html#change) event, as well as the `addtrack` and `removetrack` event.

The code below allows you to detect text track changes.

```js
player.audioTracks.addEventListener('change', function (event) {
  const track = event.track;
  console.log(track, track.label, track.language, track.enabled);
});
```

The properties of a media `track` (e.g. `enabled`, `language`) are described in [the `MediaTrack` API reference](pathname:///theoplayer/v9/api-reference/web/interfaces/MediaTrack.html).

### Android SDK

The implementation of the Android SDK applies to all Android-based platforms, including Android TV and Fire TV.

The Android SDK exposes the AudioTrack API through [`player.getAudioTracks()`](pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/player/Player.html#getAudioTracks--).
This `getAudioTracks()` method returns a [`MediaTrackList`](pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/player/track/mediatrack/MediaTrackList.html) that inherits from the [`TrackList`](pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/player/track/TrackList.html).
This `TrackList` dispatches the events from the [`AudioTrackListEventTypes`](pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/event/track/mediatrack/audio/list/AudioTrackListEventTypes.html).
The `AudioTrackListEventTypes` contains the [`TRACKLISTCHANGE`](pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/event/track/mediatrack/audio/list/AudioTrackListEventTypes.html#TRACKLISTCHANGE) event, as well as the `ADDTRACK` and `REMOVETRACK` event.

The code below allows you to detect audio track changes.

```java
player.getAudioTracks().addEventListener(AudioTrackListEventTypes.TRACKLISTCHANGE, trackListChangeEvent -> {
    MediaTrack track = trackListChangeEvent.getTrack();
    System.out.println(track.getLabel() + ", " + track.getLanguage() + ", " + track.isEnabled());
});
```

The properties of a media `track` (e.g. `enabled`, `language`) are described in the [`MediaTrack`](pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/player/track/mediatrack/MediaTrack.html) and [`Track`](pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/player/track/Track.html) API references.

### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

The implementation of the iOS SDK applies to all iOS-based platforms, including iPadOS and tvOS.

The iOS SDK exposes the AudioTrack API through [`player.audioTracks`](pathname:///theoplayer/v9/api-reference/ios/Classes/THEOplayer.html#/s:13THEOplayerSDK0A0C11audioTracksAA14AudioTrackList_pvp).
This `audioTracks` property is a [`MediaTrackList`](pathname:///theoplayer/v9/api-reference/ios/Protocols/MediaTrackList.html).
This `MediaTrackList` dispatches the events from the [`AudioTrackListEventTypes`](pathname:///theoplayer/v9/api-reference/ios/Structs/AudioTrackListEventTypes.html).
The `AudioTrackListEventTypes` contains the [`CHANGE`](pathname:///theoplayer/v9/api-reference/ios/Structs/AudioTrackListEventTypes.html#/s:13THEOplayerSDK24AudioTrackListEventTypesV6CHANGEAA0F4TypeCyAA0d6ChangeF0CGvpZ) event, as well as the `ADD_TRACK` and `REMOVE_TRACK` event.

The code below allows you to detect audio track changes.

```swift
player?.audioTracks.addEventListener(type: AudioTrackListEventTypes.CHANGE, listener: { (event) in
    let track : AudioTrack = event.track as! AudioTrack
    print(track.label, track.language, track.enabled)
})
```

The properties of a media `track` (e.g. `enabled`, `language`) are described in the [`MediaTrack`](pathname:///theoplayer/v9/api-reference/ios/Protocols/MediaTrack.html) and [`Track`](pathname:///theoplayer/v9/api-reference/ios/Protocols/Track.html) API references.

### Roku SDK

_This subsection is in maintenance. Reach out to our team if you need help._

# Related articles

Are you reading this article because you're interested in audio tracks? Continue reading below.

- [How to programmatically detect audio tracks](02-how-to-detect-audio-tracks.md)
- [How to enable and disable audio tracks](01-how-to-enable-disable-audio-tracks.md)

Are you reading this article because you're implementing a custom UI? Then you'll find the following articles interesting:

- [How to build a Chromeless UI](../../how-to-guides/11-ui/06-how-to-build-chromeless-ui.mdx)
- [How to detect video track quality changes](../../how-to-guides/06-mediatrack/07-how-to-detect-video-track-quality-changes.md)
- [How to detect text track changes](../../how-to-guides/10-texttrack/07-how-to-detect-text-track-changes.md)
