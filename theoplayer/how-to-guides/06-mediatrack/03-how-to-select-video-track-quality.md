# How to programmatically select a video track quality

This article describes how you can use the API to select a video track quality. If you select a specific quality, you overrule the ABR algorithm.

The VideoTrack API, which is a sub-API of the MediaTrack API, can be used to implement this functionality.
Implementing this functionality is a common use-case for developers who want to build their own UI to toggle a specific video quality.

### Table of Contents

- [SDKs](#sdks)
- [Code examples](#code-examples)
- [Remarks](#remarks)
- [Related articles](#related-articles)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      Yes       |

## Code examples

The code examples below show how to implement selecting video track qualities across SDKs.

##### Web SDK

The Web SDK leverages the [MediaTrack API](pathname:///theoplayer/v6/api-reference/web/interfaces/MediaTrack.html).

```js
// enable a specific video track quality
player.videoTracks[0].targetQuality =
  player.videoTracks[0].qualities[indexOfRequestedVideoTrackQuality];

// do ABR on a set of qualities
player.videoTracks[0].targetQuality = [
  player.videoTracks[0].qualities[indexOfRequestedVideoTrackQuality1],
  player.videoTracks[0].qualities[indexOfRequestedVideoTrackQuality2]
];

// set to default ABR algorithm
player.videoTracks[0].targetQuality = null;
```

##### Android (TV) SDK

The Android SDK leverages the [MediaTrack API](pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/player/track/mediatrack/MediaTrackList.html).

```java
// enable a specific video track quality
theoplayer.getPlayer().getVideoTracks().getItem(0).setTargetQuality(theoplayer.getPlayer().getVideoTracks().getItem(0).getQualities().getItem(indexOfRequestedVideoTrackQuality));

// do ABR on a set of qualities
ArrayList<VideoQuality> selectedVideoQualities = new ArrayList<>();
selectedVideoQualities.add(theoplayer.getPlayer().getVideoTracks().getItem(0).getQualities().getItem(0));
selectedVideoQualities.add(theoplayer.getPlayer().getVideoTracks().getItem(0).getQualities().getItem(1));
theoplayer.getPlayer().getVideoTracks().getItem(0).setTargetQualities(selectedVideoQualities); // ABR algorithm only executed to qualities belonging to selectedVideoQualities

// set to default ABR algorithm
theoplayer.getPlayer().getVideoTracks().getItem(0).setTargetQualities(Collections.emptyList());
```

##### iOS (/tvOS) SDK

The iOS SDK leverages the [ABR API](pathname:///theoplayer/v6/api-reference/ios/Protocols/ABRConfiguration.html). The underlying AVFoundation stack, which THEOplayer has to use, brings along the technical limitation that you cannot select a specific video quality. Instead, you can set a maximum resolution or bitrate.

```swift
// set preferred peak bitrate
self.theoplayer.abr.preferredPeakBitRate = 200000

// self.theoplayer.abr.preferredPeakBitRate = nil // removes any bitrate limitation

// preferredMaximumResolution supported starting from iOS 11 and above
// self.theoplayer.abr.preferredMaximumResolution = CGSize(width: 1280, height: 720)
// self.theoplayer.abr.preferredMaximumResolution = CGSize.zero // removes any resolution limitation
```

## Remarks

- A related article on building a Chromeless UI is located at [How to build a Chromeless UI](../../how-to-guides/11-ui/06-how-to-build-chromeless-ui.md).

## Related articles

- [How to programmatically detect video track qualities](04-how-to-detect-video-track-qualities.md)
- [How to programmatically detect audio tracks](02-how-to-detect-audio-tracks.md)
- [How to programmatically detect video track quality changes](07-how-to-detect-video-track-quality-changes.md)
- [How to programmatically enable or disable audio tracks](01-how-to-enable-disable-audio-tracks.md)
