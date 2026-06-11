# How to programmatically detect audio tracks

This article describes how you can use the API to detect audio tracks.

The AudioTrack API, which is a sub-API of the MediaTrack API, can be used to implement this functionality. Implementing this functionality is a common use-case for developers who want to build their own UI to visualize the available audio languages.

## SDKs[​](#sdks "Direct link to SDKs")

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| ------- | ----------- | ------- | -------- | -------------- | -------------- | -------- |
| Yes     | Yes         | Yes     | Yes      | Yes            | Yes            | Yes      |

## Code examples[​](#code-examples "Direct link to Code examples")

The code examples below how to implement the detection of audio tracks across SDK.

##### Web SDK[​](#web-sdk "Direct link to Web SDK")

The Web SDK leverages the [MediaTrack API](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/MediaTrack.html).

```js
function handleAddTrackEvent(addTrackEvent) {
  var audioTrack = addTrackEvent.track;
}
player.audioTracks.addEventListener('addtrack', handleAddTrackEvent);

```

##### Android (TV) SDK[​](#android-tv-sdk "Direct link to Android (TV) SDK")

The Android SDK leverages the [MediaTrack API](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/player/track/mediatrack/MediaTrackList.html).

```java
EventListener<AddTrackEvent> handleAddTrackEvent= new EventListener<AddTrackEvent>() {
    @Override
    public void handleEvent(AddTrackEvent addTrackEvent) {
        MediaTrack audioTrack = addTrackEvent.getTrack();
    }
};
tpv.getPlayer().getAudioTracks().addEventListener(AudioTrackListEventTypes.ADDTRACK, handleAddTrackEvent);

```

##### iOS (/tvOS) SDK[​](#ios-tvos-sdk "Direct link to iOS (/tvOS) SDK")

The iOS SDK leverages the [MediaTrack API](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/ios/Protocols/MediaTrackList.html).

```swift
func handleAddTrackEvent(addTrackEvent : AddTrackEvent) {
    var audioTrack = addTrackEvent .track
}
self.theoplayer.audioTracks.addEventListener(type: AudioTrackListEventTypes.ADD_TRACK, listener: handleAddTrackEvent)

```

##### Roku SDK[​](#roku-sdk "Direct link to Roku SDK")

Snippet below allows you to detect added audio tracks. In this example, we have used the `addedaudiotrack` event to propagate information about audio tracks. Basically, all we have to do is to add an event listener.

```brightscript
function Init()
  ...
  m.THEOplayer.callFunc("addEventListener", "addedaudiotrack", "onAudioTracksChanged")
  ...
end function

function onAudioTracksChanged()
  audioTracks = m.player.audioTracks
  ? "Audio tracks changed."
  ? audioTracks
end function

```

## Remarks[​](#remarks "Direct link to Remarks")

* A related article on building a Chromeless UI is located at [How to build a Chromeless UI](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ui/how-to-build-chromeless-ui.md).

## Related articles[​](#related-articles "Direct link to Related articles")

* [How to programmatically detect video track qualities](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/mediatrack/how-to-detect-video-track-qualities.md)
* [How to programmatically detect video track quality changes](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/mediatrack/how-to-detect-video-track-quality-changes.md)
* [How to programmatically enable or disable audio tracks](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/mediatrack/how-to-enable-disable-audio-tracks.md)
* [How to programmatically select a video track quality](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/mediatrack/how-to-select-video-track-quality.md)
