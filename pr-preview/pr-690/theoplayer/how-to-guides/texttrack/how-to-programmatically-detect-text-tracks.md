# How to programmatically detect text tracks

This article describes how you can use the API to detect text tracks, which can be subtitles, closed captions or metadata.

The TextTrack API can be used to implement this functionality. Implementing this functionality is a common use-case for developers who want to build their own UI to visualize the available text languages.

## SDKs[​](#sdks "Direct link to SDKs")

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| ------- | ----------- | ------- | -------- | -------------- | -------------- | -------- |
| Yes     | Yes         | Yes     | Yes      | Yes            | Yes            | Yes      |

## Code examples[​](#code-examples "Direct link to Code examples")

The code examples below showcase how to implement the detection of audio tracks across SDKs.

##### Web SDK[​](#web-sdk "Direct link to Web SDK")

The Web SDK leverages the [TextTrack API](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/TextTrack.html).

```js
function handleAddTrackEvent(addTrackEvent) {
  var textTrack = addTrackEvent.track;
}
player.textTracks.addEventListener('addtrack', handleAddTrackEvent);

```

##### Android (TV) SDK[​](#android-tv-sdk "Direct link to Android (TV) SDK")

The Android SDK leverages the [TextTrack API](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/android/com/theoplayer/android/api/player/track/texttrack/TextTrackList.html).

```java
EventListener<AddTrackEvent> handleAudioTrackAdd = new EventListener<AddTrackEvent>() {
    @Override
    public void handleEvent(AddTrackEvent addTrackEvent) {
        TextTrack textTrack = addTrackEvent.getTrack();
    }
};
tpv.getPlayer().getTextTracks().addEventListener(TextTrackListEventTypes.ADDTRACK, handleAudioTrackAdd);

```

##### iOS (/tvOS) SDK[​](#ios-tvos-sdk "Direct link to iOS (/tvOS) SDK")

The iOS SDK leverages the [MediaTrack API](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/ios/Protocols/MediaTrackList.html).

```swift
func handleAddTrackEvent(addTrackEvent : AddTrackEvent) {
    var textTrack = addTrackEvent.track
}
self.theoplayer.textTracks.addEventListener(type: TextTrackListEventTypes.ADD_TRACK, listener: handleAddTrackEvent)

```

##### Roku SDK[​](#roku-sdk "Direct link to Roku SDK")

To obtain an exact moment of recognizing text track we may use an “addedtexttrack” event. This will allow to programmatically detect all text tracks which are loaded with the stream.

```brightscript
function Init(){
  ...
  m.THEOplayer.callFunc("addEventListener", "addedtexttrack", "onEventTextTracksChanged")
  ...
end function

function onEventTextTracksChanged()
  textTracks= m.player.textTracks
  ? "Text tracks changed."
  ? textTracks
end function

```

## Remarks[​](#remarks "Direct link to Remarks")

* A related article on building a Chromeless UI is located at [How to build a Chromeless UI](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/ui/how-to-build-chromeless-ui.md).
