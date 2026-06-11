# How to programmatically detect video track qualities

This article describes how you can use the API to detect video track qualities.

The VideoTrack API, which is a sub-API of the MediaTrack API, can be used to implement this functionality. Implementing this functionality is a common use-case for developers who want to build their own UI to visualize the available video track qualities.

## SDKs[​](#sdks "Direct link to SDKs")

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| ------- | ----------- | ------- | -------- | -------------- | -------------- |
| Yes     | Yes         | Yes     | Yes      | Yes            | Yes            |

## Code examples[​](#code-examples "Direct link to Code examples")

The code examples below how to implement the detection of video track qualities across SDK.

##### Web SDK[​](#web-sdk "Direct link to Web SDK")

The Web SDK leverages the [MediaTrack API](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/MediaTrack.html).

```js
function handleAddTrackEvent(addTrackEvent) {
  var videoTrackQualities = addTrackEvent.track.qualities;
}
player.videoTracks.addEventListener('addtrack', handleAddTrackEvent);

```

##### Android (TV) SDK[​](#android-tv-sdk "Direct link to Android (TV) SDK")

The Android SDK leverages the [MediaTrack API](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/player/track/mediatrack/MediaTrackList.html).

```java
EventListener<AddTrackEvent> handleAddTrackEvent = new EventListener<AddTrackEvent>() {
    @Override
    public void handleEvent(AddTrackEvent addTrackEvent) {
        QualityList videoTrackQualities = addTrackEvent.getTrack().getQualities();
    }
};
tpv.getPlayer().getVideoTracks().addEventListener(VideoTrackListEventTypes.ADDTRACK, handleAddTrackEvent);

```

##### iOS (/tvOS) SDK[​](#ios-tvos-sdk "Direct link to iOS (/tvOS) SDK")

```swift
player.videoTracks.addEventListener(type: VideoTrackListEventTypes.ADD_TRACK, listener: { addTrackEvent in
    guard let videoTrack = addTrackEvent.track as? VideoTrack else { return }
    for i in 0..<videoTrack.qualities.count {
        let quality = videoTrack.qualities[i]
        var msg = "Quality added: bandwidth = \(quality.bandwidth)"
        if let videoQuality = quality as? VideoQuality {
            msg.append(", width = \(videoQuality.width), height = \(videoQuality.height)")
        }
        print(msg)
    }
})

```

## Remarks[​](#remarks "Direct link to Remarks")

* A related article on building a Chromeless UI is located at [How to build a Chromeless UI](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ui/how-to-build-chromeless-ui.md).

## Related articles[​](#related-articles "Direct link to Related articles")

* [How to programmatically detect audio tracks](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/mediatrack/how-to-detect-audio-tracks.md)
* [How to programmatically detect video track quality changes](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/mediatrack/how-to-detect-video-track-quality-changes.md)
* [How to programmatically enable or disable audio tracks](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/mediatrack/how-to-enable-disable-audio-tracks.md)
* [How to programmatically select a video track quality](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/mediatrack/how-to-select-video-track-quality.md)
