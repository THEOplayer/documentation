# How to programmatically enable or disable audio tracks

This article describes how you can use the MediaTrack API to enable or disable audio tracks.

The AudioTrack API, which is a sub-API of the [MediaTrack API](https://docs.theoplayer.com/api-reference/web/theoplayer.mediatrack.md), can be used to implement this functionality. 
Implementing this functionality is a common use-case for developers who want to build their own UI to toggle audio languages on and off.

### Table of Contents
- [SDKs](#sdks)
- [Using the AudioTrack API to enable different tracks](#using-the-audiotrack-api-to-enable-different-tracks)
  - [Code examples](#code-examples)
- [Remarks](#remarks)
- [Resources](#resources)


## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Yes  |      Yes      |      Yes       |


## Using the AudioTrack API to enable different tracks

As mentioned above, you can use the AudioTrack API to enable or disable an audio track. Once you've programmatically selected a track, you can use its `enabled` property (or method) and set it to `true` or `false`.

### Code examples

The code examples below show how to implement toggling audio tracks. It's advised to disable audio tracks which you don't want to play, in order to avoid issues with overlapping audio.

##### Web SDK
```js
// disable all audio tracks
player.audioTracks.forEach(function(track) {
    track.enabled = false;
});
// enable a specific audio track
player.audioTracks[indexOfRequestedAudioTrack].enabled = true;
```

##### Android (TV) SDK

```java
// disable all audio tracks
for (int i = 0; i < theoplayer.getPlayer().getAudioTracks().length(); i++) {
    theoplayer.getPlayer().getAudioTracks().getItem(i).setEnabled(false);
}
// enable a specific audio track
theoplayer.getPlayer().getAudioTracks().getItem(i).setEnabled(true);
```

##### iOS (/tvOS) SDK

```swift
// disable all audio tracks
for i in 0..<self.player.audioTracks.count {
    var audio = self.player.audioTracks.get(i)
    audio.enabled = true
}
// enable a specific audio track
var desiredAudio = self.player.audioTracks[indexOfRequestedAudioTrack]
desiredAudio.enabled = true
```
    

## Remarks

The following remarks can help:

- A related article on building a Chromeless UI is located at [How to build a Chromeless UI](../../how-to-guides/11-ui/06-how-to-build-chromeless-ui.md). This article can help understand why this type of usage of the API can be necessary.

## Resources

The following resources provide more information:

- [MediaTrack API Reference](https://docs.theoplayer.com/api-reference/web/theoplayer.mediatrack.md)
- [https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/enabled](https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/enabled): the `enabled` property from the AudioTrack interface as documented by MDN.