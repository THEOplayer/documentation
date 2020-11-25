# How to programmatically detect text tracks

This article describes how you can use the API to detect text tracks, which can be subtitles, closed captions or metadata.

The TextTrack API can be used to implement this functionality. 
Implementing this functionality is a common use-case for developers who want to build their own UI to visualize the available text languages.

### Table of Contents
- [SDKs](#sdks)
- [Code examples](#code-examples)
- [Remarks](#remarks)


## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |  Yes  |   Yes  | Yes  |      Yes    |      Yes    |

## Code examples

The code examples below how to implement the detection of audio tracks across SDK.

##### Web SDK

The Web SDK leverages the [TextTrack API](https://docs.theoplayer.com/api-reference/web/theoplayer.texttrack.md).

```js
function handleAddTrackEvent(addTrackEvent) {
    var textTrack = addTrackEvent.track;
}
player.textTracks.addEventListener('addtrack', handleAddTrackEvent);
```

##### Android (TV) SDK

The Android SDK leverages the [TextTrack API](https://cdn.theoplayer.com/doc/android/2.55.1/com/theoplayer/android/api/09-player/track/texttrack/TextTrackList.html).

```java
EventListener<AddTrackEvent> handleAudioTrackAdd = new EventListener<AddTrackEvent>() {
    @Override
    public void handleEvent(AddTrackEvent addTrackEvent) {
        TextTrack textTrack = addTrackEvent.getTrack();
    }
};
tpv.getPlayer().getTextTracks().addEventListener(TextTrackListEventTypes.ADDTRACK, handleAudioTrackAdd);
```

##### iOS (/tvOS) SDK

The iOS SDK leverages the [MediaTrack API](https://cdn.theoplayer.com/doc/ios/2.55.1/Track%20List%20Events.html#/s:13THEOplayerSDK13AddTrackEventC).

```swift
func handleAddTrackEvent(addTrackEvent : AddTrackEvent) {
    var textTrack = addTrackEvent.track
}
self.theoplayer.textTracks.addEventListener(type: TextTrackListEventTypes.ADD_TRACK, listener: handleAddTrackEvent)
```

## Remarks

- A related article on building a Chromeless UI is located at [How to build a Chromeless UI](../../how-to-guides/11-ui/06-how-to-build-chromeless-ui.md).