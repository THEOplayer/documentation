# How to programmatically enable or disable text tracks

This article describes how you can use the API to enable or disable subtitles, closed captions or metadata.

The TextTracks API can be used to implement this functionality.
Implementing this functionality is a common use-case for developers who want to build their own UI to toggle subtitles.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | :------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      Yes       |   Yes    |

## Code examples

The code examples below how to implement toggling subtitles across SDK. It's advised to disable the text tracks you don't want to display, in order to avoid issues with overlapping text.

##### Web SDK

```js
// disable all text tracks
player.textTracks.forEach(function (track) {
  track.mode = 'disabled';
});
// enable a specific text track
player.textTracks[indexOfRequestedTextTrack].mode = 'showing';
```

##### Android (TV) SDK

```java
// disable all text tracks
for (int i = 0; i < tpv.getPlayer().getTextTracks().length(); i++) {
    theoplayer.getPlayer().getTextTracks().getItem(i).setMode(TextTrackMode.DISABLED);
}
// enable a specific text track
theoplayer.getPlayer().getTextTracks().getItem(indexOfRequestedTextTrack).setMode(TextTrackMode.SHOWING);
```

##### iOS (/tvOS) SDK

```swift
// disable all text tracks
for i in 0..<self.player.textTracks.count {
    var track = self.player.textTracks.get(i)
    track.mode = TextTrackMode.disabled
}
// enable a specific text track
var track = self.player.textTracks.get(indexOfRequestedTextTrack)
track.mode = TextTrackMode.showing
```

##### Roku SDK

To disable all text tracks we have to iterate through all text tracks and set the field mode to "disabled" for each of the text tracks.

It should be emphasized that in BrightScript and SceneGraph we are obligated to assign a whole new associative array to the interface field in order to change the associative array exposed through interface. As the attempts to change fields of an associative array or elements of array will bring no effect.

```brightscript
'disable all tracks
textTracks = m.player.textTracks
for i = textTracks.count() - 1 to 0 step -1
  textTracks[i].mode = "disabled"
end for
'assigment of new roAssociativeArray is required because roku deep-copied roAssociativeArray through fields (pass-by-value)
'read more : <https://developer.roku.com/en-gb/docs/developer-program/performance-guide/optimization-techniques.md#OptimizationTechniques-DataFlow>
m.player.textTracks = textTracks

'disable specific track
textTracks =  m.player.textTracks
textTracks[indexOfRequestedTextTrack].mode = "disabled"
'assigment of new roAssociativeArray is required because roku deep-copied roAssociativeArray through fields (pass-by-value)
'read more : <https://developer.roku.com/en-gb/docs/developer-program/performance-guide/optimization-techniques.md#OptimizationTechniques-DataFlow>
m.player.textTracks = textTracks
```

## Remarks

- A related article on building a Chromeless UI is located at [How to build a Chromeless UI](../../how-to-guides/11-ui/06-how-to-build-chromeless-ui.mdx).
