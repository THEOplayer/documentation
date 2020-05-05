# How to programmatically detect video track quality changes

This article describes how you can use the API to detect video track quality changes.

The VideoTrack API, which is a sub-API of the MediaTrack API, can be used to implement this functionality. 
Implementing this functionality is a common use-case for developers who want to build their own UI to visualize the available video track qualities.

### Table of Contents
- [SDKs](#sdks)
- [Code examples](#code-examples)
- [Remarks](#remarks)
- [Related articles](#related-articles)


## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   No   | No  |      Yes      |      Yes       |

## Code examples

The code examples below how to implement the detection of video track qualities across SDK.

##### Web SDK

The Web SDK leverages the [MediaTrack API](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.mediatrack.md).

```js
// detect video tracks being added to the player
player.videoTracks.addEventListener('addtrack', function(e0) {
    // detect quality changes of a track
    e0.track.addEventListener('activequalitychanged', function(e1) {
        console.log('activequalitychanged event detected!', e1);
    });
});
```

##### Android (TV) SDK

The Android SDK leverages the [MediaTrack API](https://cdn.theoplayer.com/doc/android/2.55.1/com/theoplayer/android/api/player/track/mediatrack/MediaTrackList.html).

```java
EventListener<AddTrackEvent> handleAddTrackEvent = new EventListener<AddTrackEvent>() {
    EventListener<ActiveQualityChangedEvent> handleActiveQualityChangedEvent = new EventListener<ActiveQualityChangedEvent>() {
        @Override
        public void handleEvent(ActiveQualityChangedEvent activeQualityChangedEvent) {
            System.out.println("activequalitychanged event detected! " + activeQualityChangedEvent.getQuality().toString());
        }
    };
    @Override
    public void handleEvent(AddTrackEvent addTrackEvent) {
        addTrackEvent.getTrack().addEventListener(VideoTrackEventTypes.ACTIVEQUALITYCHANGEDEVENT, handleActiveQualityChangedEvent);
    }
};
tpv.getPlayer().getVideoTracks().addEventListener(VideoTrackListEventTypes.ADDTRACK, handleAddTrackEvent);
```

##### iOS (/tvOS) SDK

Currently not available due to iOS limitations.

## Remarks

- A related article on building a Chromeless UI is located at [How to build a Chromeless UI](../../how-to-guides/11-ui/06-how-to-build-chromeless-ui.md).

## Related articles

- [How to programmatically detect audio tracks](02-how-to-detect-audio-tracks.md)
- [How to programmatically detect video track quality changes](07-how-to-detect-video-track-quality-changes.md)
- [How to programmatically enable or disable audio tracks](01-how-to-enable-disable-audio-tracks.md)
- [How to programmatically select a video track quality](03-how-to-select-video-track-quality.md)