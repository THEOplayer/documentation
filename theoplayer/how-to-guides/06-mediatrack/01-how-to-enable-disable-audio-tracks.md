# How to programmatically enable or disable audio tracks

This article describes how you can use the MediaTrack API to enable or disable audio tracks.

The AudioTrack API, which is a sub-API of the [MediaTrack API](pathname:///theoplayer/v6/api-reference/web/interfaces/MediaTrack.html), can be used to implement this functionality.
Implementing this functionality is a common use-case for developers who want to build their own UI to toggle audio languages on and off.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | :------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      Yes       |   Yes    |

## Using the AudioTrack API to enable different tracks

As mentioned above, you can use the AudioTrack API to enable or disable an audio track. Once you've programmatically selected a track, you can use its `enabled` property (or method) and set it to `true` or `false`.

### Code examples

The code examples below show how to implement toggling audio tracks. It's advised to disable audio tracks which you don't want to play, in order to avoid issues with overlapping audio.

##### Web SDK

```js
// disable all audio tracks
player.audioTracks.forEach(function (track) {
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

##### Roku SDK

Enabling audio tracks:

To set a preferred audio track you can write a function like "setAudioLanguage". This function accepts "language" as a string parameter. It then searches for a specified language in the audio tracks and enables the track if it has a proper language.

```brightscript
function setAudioLanguage(language as String)
  audioTracks = m.player.audioTracks
  for i = audioTracks.count() - 1 to 0 step -1
    if audioTracks[i].language = language then
      audioTracks[i].enabled = true
    else
      audioTracks[i].enabled = false
    end if
  end for
  'required because roku deep-copied roAssociativeArray through fields (pass-by-value)
  'read more: https://developer.roku.com/en-gb/docs/developer-program/performance-guide/optimization-techniques.md#OptimizationTechniques-DataFlow
  m.player.audioTracks = audioTracks
end function
```

## Remarks

The following remarks can help:

- A related article on building a Chromeless UI is located at [How to build a Chromeless UI](../../how-to-guides/11-ui/06-how-to-build-chromeless-ui.md). This article can help understand why this type of usage of the API can be necessary.

## Resources

The following resources provide more information:

- [MediaTrack API Reference](pathname:///theoplayer/v6/api-reference/web/interfaces/MediaTrack.html)
- [https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/enabled](https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/enabled): the `enabled` property from the AudioTrack interface as documented by MDN.
