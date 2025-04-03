# How to detect active text track cues

This article describes how you can use the THEOplayer API to detect the active text track cues.

The TextTrack API provides this functionality. More specifically, as a developer, you'll subscribe to the `enter` and `exit` events in the TextTrack API, or to the `cuechange` event.

Implementing this functionality can be a use-case for developers who want to build their own UI, and insert and style their subtitles with maximum freedom.
Alternatively, you may require the access the active cues for analytics purposes, or to render it outside the video player.

Another common use-case is to detect the active text track cue of timed metadata. This article also discusses this use-case.

## SDKs

THEOplayer allows you to track text track changes on the following SDKs.

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | -------- |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      Yes       |          |

## Implementation for subtitles and closed captions

The TextTrack API is available across all of our 4 base SDKs. As described in the introduction, to detect which text track cues are active, you want to leverage the `enter` and `exit` events in the `TextTrack` API, or the `cuechange` event.

Note that this subsection focuses on detecting active cues for subtitles and closed captions.
Go to the subsection on ["implementation for timed metadata"](#implementation-for-timed-metadata) if you rather want to track timed metadata like ID3, emsg, EXT-X-DATERANGE and EventStream.

- [Web SDK](#web-sdk)
- [Android SDK](#android-sdk)
- [iOS SDK](#iostvos-sdk-and-legacy-iostvos-sdk-412x)
- [Roku SDK](#roku-sdk)

### Web SDK

The implementation of the Web SDK applies to all web-based platforms, including Tizen and webOS.

The Web SDK exposes the TextTrack API through [`player.textTracks`](pathname:///theoplayer/v8/api-reference/web/classes/ChromelessPlayer.html#texttracks). This `textTracks` property is a [`TextTrackList`](pathname:///theoplayer/v8/api-reference/web/interfaces/TextTracksList.html) that inherits from the [`TrackList`](pathname:///theoplayer/v8/api-reference/web/interfaces/TrackList.html). This `TrackList` dispatches the events from the [`TrackListEventMap`](pathname:///theoplayer/v8/api-reference/web/interfaces/TrackListEventMap.html). This `TrackListEventMap` contains the [`addtrack`](pathname:///theoplayer/v8/api-reference/web/interfaces/TrackListEventMap.html#change) event, as well as the `change` and `removetrack` event.

In the callback of your `addtrack` event, you want to track the [`addcue`](pathname:///theoplayer/v8/api-reference/web/interfaces/TextTrackEventMap.html#addcue) event through the [`TextTrack`](pathname:///theoplayer/v8/api-reference/web/interfaces/TextTrack.html) interface. Then, in the callback of your `addcue` event, you want to track the [`enter`](pathname:///theoplayer/v8/api-reference/web/interfaces/TextTrackCueEventMap.html#enter) and [`exit`](pathname:///theoplayer/v8/api-reference/web/interfaces/TextTrackCueEventMap.html#exit) events through the [`TextTrackCue`](pathname:///theoplayer/v8/api-reference/web/interfaces/TextTrackCue.html) interface. The `enter` event is dispatched when a cue becomes active and the `exit` event is dispatched when a cue becomes inactive. You can fetch the actual content in the callback of your `enter` event through its [`content`](https://docs.theoplayer.com/api-reference/web/theoplayer.texttrackcue.md#content) property.

Alternatively, in the callback of your `addtrack` event, you could track the [`cuechange`](pathname:///theoplayer/v8/api-reference/web/interfaces/TextTrackEventMap.html#cuechange) event through the `TextTrack` interface. Then, in the callback of your `cuechange` event, you want to iterate over the active cues. For each active cue, you could also query its `content` property.

The code below allows you to detect the active text track cues.

```js
player.textTracks.addEventListener('addtrack', function (e1) {
  const track = e1.track;
  track.addEventListener('addcue', function (e2) {
    const cue = e2.cue;
    cue.addEventListener('enter', function (e3) {
      console.log(e3, e3.cue.content);
    });
    cue.addEventListener('exit', console.log);
  });
  track.addEventListener('cuechange', function (e2) {
    const cues = e2.track.activeCues;
    for (let i = 0; i < cues.length; i++) {
      console.log('cuechange active cue', i, cues[i]);
    }
  });
});
// ...
// player.source = ...
```

You want to invoke these event handlers before you configure your stream, because your video player might have already dispatched the event before you were able to subscribe to it.

### Android SDK

The implementation of the Android SDK applies to all Android-based platforms, including Android TV and Fire TV.

The Android SDK exposes the TextTrack API through [`player.getTextTracks()`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/Player.html#getTextTracks). This `getTextTracks()` method returns a [`TextTrackList`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/track/texttrack/TextTrackList.html) that inherits from the [`TrackList`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/track/TrackList.html). This `TrackList` dispatches the events from the [`TextTrackListEventTypes`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/event/track/texttrack/list/TextTrackListEventTypes.html). The `TextTrackListEventTypes` contains the [`ADDTRACK`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/event/track/texttrack/list/TextTrackListEventTypes.html#ADDTRACK) event, as well as the `TRACKLISTCHANGE` and `REMOVETRACK` event.

In the callback of your `ADDTRACK` event, you want to track the [`ADDCUE`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/event/track/texttrack/TextTrackEventTypes.html#ADDCUE) event through the [`TextTrack`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/track/texttrack/TextTrack.html) interface. Then, in the callback of your `ADDCUE` event, you want to track the [`ENTER`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/event/track/texttrack/texttrackcue/TextTrackCueEventTypes.html#ENTER) and [`EXIT`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/event/track/texttrack/texttrackcue/TextTrackCueEventTypes.html#EXIT) events through the [`TextTrackCue`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/track/texttrack/cue/TextTrackCue.html) interface. The `ENTER` event is dispatched when a cue becomes active and the `EXIT` event is dispatched when a cue becomes inactive. You can fetch the actual content in the callback of your `ENTER` event through its [`getContent()`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/track/texttrack/cue/TextTrackCue.html#getContent--) method.

Alternatively, in the callback of your `ADDTRACK` event, you could track the [`CUECHANGE`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/event/track/texttrack/TextTrackEventTypes.html#CUECHANGE) event through the `TextTrack` interface. Then, in the callback of your `CUECHANGE` event, you want to iterate over the active cues. For each active cue, you could also query its `content` property.

The code below allows you to detect the active text track cues.

```java
player.getTextTracks().addEventListener(TextTrackListEventTypes.ADDTRACK, e1 -> {
    TextTrack track = e1.getTrack();
    track.addEventListener(TextTrackEventTypes.ADDCUE, e2 -> {
        TextTrackCue cue = e2.getCue();
        cue.addEventListener(TextTrackCueEventTypes.ENTER, e3 -> {
            System.out.println(e3 + " " + e3.getCue().getContent());
        });
        cue.addEventListener(TextTrackCueEventTypes.EXIT, e3 -> {
            System.out.println(e3);
        });
    });
    track.addEventListener(TextTrackEventTypes.CUECHANGE, e2 -> {
        TextTrackCueList cues = e2.getTextTrack().getActiveCues();
        for (int i = 0; i < cues.length(); i++) {
            System.out.println("cuechange active cue " + i + " " + cues.getItem(i));
        }
    });
});
// ...
// player.setSource(...)
```

You want to invoke these event handlers before you configure your stream, because your video player might have already dispatched the event before you were able to subscribe to it.

### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

The implementation of the iOS SDK applies to all iOS-based platforms, including iPadOS and tvOS.

The iOS SDK exposes the TrackTrack API through [`player.textTracks`](pathname:///theoplayer/v8/api-reference/ios/Classes/THEOplayer.html#/s:13THEOplayerSDK0A0C10textTracksAA13TextTrackList_pvp). This `textTracks` property is a [`TextTrackList`](pathname:///theoplayer/v8/api-reference/ios/Protocols/TextTrackList.html). This `TextTrackList` dispatches the events from the [`TextTrackListEventTypes`](pathname:///theoplayer/v8/api-reference/ios/Structs/TextTrackListEventTypes.html). The `TextTrackListEventTypes` contains the [`ADD_TRACK`](pathname:///theoplayer/v8/api-reference/ios/Structs/TextTrackListEventTypes.html#/s:13THEOplayerSDK23TextTrackListEventTypesV9ADD_TRACKAA0F4TypeCyAA03AdddF0CGvpZ) event, as well as the `CHANGE` and `REMOVE_TRACK` event.

In the callback of your `ADD_TRACK` event, you want to track the [`ADD_CUE`](pathname:///theoplayer/v8/api-reference/ios/Structs/TextTrackEventTypes.html#/s:13THEOplayerSDK19TextTrackEventTypesV7ADD_CUEAA0E4TypeCyAA06AddCueE0CGvpZ) event through the [`TextTrack`](pathname:///theoplayer/v8/api-reference/ios/Protocols/TextTrack.html) interface. Then, in the callback of your `ADD_CUE` event, you want to track the [`ENTER`](pathname:///theoplayer/v8/api-reference/ios/Structs/TextTrackCueEventTypes.html#/s:13THEOplayerSDK22TextTrackCueEventTypesV5ENTERAA0F4TypeCyAA0e5EnterF0CGvpZ) and [`EXIT`](pathname:///theoplayer/v8/api-reference/ios/Structs/TextTrackCueEventTypes.html#/s:13THEOplayerSDK22TextTrackCueEventTypesV4EXITAA0F4TypeCyAA0e4ExitF0CGvpZ) events through the [`TextTrackCue`](pathname:///theoplayer/v8/api-reference/ios/Protocols/TextTrackCue.html) interface. The `ENTER` event is dispatched when a cue becomes active and the `EXIT` event is dispatched when a cue becomes inactive.
You can fetch the actual content in the callback of your `ENTER` event through its [`content`](pathname:///theoplayer/v8/api-reference/ios/Protocols/TextTrackCue.html#/s:13THEOplayerSDK12TextTrackCueP7contentypSgvp) property.

Alternatively, in the callback of your `ADD_TRACK` event, you could track the [`CUE_CHANGE`](pathname:///theoplayer/v8/api-reference/ios/Structs/TextTrackEventTypes.html#/s:13THEOplayerSDK19TextTrackEventTypesV10CUE_CHANGEAA0E4TypeCyAA09CueChangeE0CGvpZ) event through the `TextTrack` interface. Then, in the callback of your `CUE_CHANGE` event, you want to iterate over the active cues. For each active cue, you could also query its `content` property.

The code below allows you to detect the active text track cues.

```swift
player.textTracks.addEventListener(type: TextTrackListEventTypes.ADD_TRACK) { (e1) in
    var track : TextTrack = e1.track as! TextTrack
    track.addEventListener(type: TextTrackEventTypes.ADD_CUE) { (e2) in
        let cue = e2.cue
        cue.addEventListener(type: TextTrackCueEventTypes.ENTER) { (e3) in
            print(e3, e3.cue.content)
        }
        cue.addEventListener(type: TextTrackCueEventTypes.EXIT) { (e3) in
            print(e3)
        }
    }
    track.addEventListener(type: TextTrackEventTypes.CUE_CHANGE) { (e2) in
        let textTrack : TextTrack = e2.track as! TextTrack
        let cues = textTrack.activeCues
        cues.forEach { (cue) in
            print("cuechange active cue", cue)
        }
    }
}
// ...
// player.source = ...
```

You want to invoke these event handlers before you configure your stream, because your video player might have already dispatched the event before you were able to subscribe to it.

### Roku SDK

_This subsection is in maintenance. Reach out to our team if you need help._

## Implementation for timed metadata

The implementation for timed metadata is identical to the one for subtitles and closed captions, except for three things.

1. You don't necessarily use the `enter` event.
   Some types of timed metadata, for example ID3 cues, only related to one specific moment, and those types only have an `exit` trigger.

2. You might need to set the `mode` of the relevant text track to `hidden`, as documented in ["How to programmatically enable or disable text tracks"](03-how-to-programmatically-disable-text-tracks.md).
   Some types of timed metadata, for example EXT-X-DATERANGE and EventStream, are `disabled` by default. You should add a condition to your `addtrack` callback to decide whether you want to set your track to `hidden`.

3. You should set `hlsDateRange` to `true` if you want to detect EXT-X-DATERANGE tags in an HLS stream in your PlayerConfiguration or stream configuration. Refer to the [Web](pathname:///theoplayer/v8/api-reference/web/interfaces/PlayerConfiguration.html#hlsDateRange), [Android](<pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/THEOplayerConfig.Builder.html#hlsDateRange(boolean)>) or [iOS](pathname:///theoplayer/v8/api-reference/ios/Classes/THEOplayerConfiguration.html) documentation for more info.

The article on ["how to track id3 cues / tags"](06-how-to-track-id3-cues-tags.md) might be useful to learn more about detecting ID3 tags specifically.
