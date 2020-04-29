# How to programmatically detect audio tracks

This article describes how you can use the API to detect audio tracks.

The AudioTrack API, which is a sub-API of the MediaTrack API, can be used to implement this functionality. 
Implementing this functionality is a common use-case for developers who want to build their own UI to visualize the available audio languages.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Yes  |      Yes      |      Yes       |


## Code examples

The code examples below how to implement the detection of audio tracks across SDK.

##### Web SDK

The Web SDK leverages the [MediaTrack API](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.mediatrack.md).

```js
function handleAddTrackEvent(addTrackEvent) {
    var audioTrack = addTrackEvent.track;
}
player.audioTracks.addEventListener('addtrack', handleAddTrackEvent);
```

##### Android (TV) SDK

The Android SDK leverages the [MediaTrack API](https://cdn.theoplayer.com/doc/android/2.55.1/com/theoplayer/android/api/player/track/mediatrack/MediaTrackList.html).

```java
EventListener<AddTrackEvent> handleAddTrackEvent= new EventListener<AddTrackEvent>() {
    @Override
    public void handleEvent(AddTrackEvent addTrackEvent) {
        MediaTrack audioTrack = addTrackEvent.getTrack();
    }
};
tpv.getPlayer().getAudioTracks().addEventListener(AudioTrackListEventTypes.ADDTRACK, handleAddTrackEvent);
```

##### iOS (/tvOS) SDK

The iOS SDK leverages the [MediaTrack API](https://cdn.theoplayer.com/doc/ios/2.55.1/Track%20List%20Events.html#/s:13THEOplayerSDK13AddTrackEventC).

```swift
func handleAddTrackEvent(addTrackEvent : AddTrackEvent) {
    var audioTrack = addTrackEvent .track
}
self.theoplayer.audioTracks.addEventListener(type: AudioTrackListEventTypes.ADD_TRACK, listener: handleAddTrackEvent)
```

## Remarks

- A related article on building a Chromeless UI is located at [How to build a Chromeless UI](../../how-to-guides/11-ui/06-how-to-build-chromeless-ui.md).

