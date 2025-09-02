# How to dynamically change the visible captions?

When working with the captions / text-track options, you can dynamically change the currently selected language (or set a default language) using following methods.

This method assumes that you are using text-tracks that are loaded with the manifest. If you add the text-track separately, you can just use this API: [TextTrackDescription](pathname:///theoplayer/v9/api-reference/web/interfaces/TextTrackDescription.html)

## Step-by-step guide

### 1. Create a new function inside the browser

##### Web SDK

```js
function setLanguage(player, language) {
  // Disable all text tracks that are currently active
  player.textTracks
    .filter(function (x) {
      if (x.mode !== 'disabled') {
        return x;
      }
    })
    .forEach(function (x) {
      x.mode = 'disabled';
    });
  // Enable the text track for a specific language. Note: Here we are searching the label. You can also do x.language for the ISO 3 letter language code.
  player.textTracks.filter(function (x) {
    if (x.label == language) {
      return x;
    }
  })[0].mode = 'showing';
}
```

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

```swift
private func setLanguage(player: THEOplayer, language: String) {
    let list: TextTrackList = player.textTracks
    for i in 0..<list.count {
        var textTrack: TextTrack = list[i]
        if textTrack.label == language {
            textTrack.mode = .showing
        }
    }
}
```

##### Roku SDK

In the following example we are iterating through all available text tracks. Once we found a track with a desired language, we simply set the mode to "showing". After that, we have to simply assign textTracks object to a proper THEOplayer attribute. This is all you have to do to make a desired text track visible. Of course, we can modify a visible text track during the video playback.

```brightscript

function setCaptionsLanguage(language as String)
  textTracks = m.player.textTracks
  for i = textTracks.count() - 1 to 0 step -1
    if textTracks[i].kind = "captions" and textTracks[i].language = language then
      if m.fullScreen then
        textTracks[i].mode = "showing"
      else
        textTracks[i].mode = "hidden"
      end if
    else
      textTracks[i].mode = "disabled"
    end if
  end for
  'assignment of new roAssociativeArray is required because roku deep-copied roAssociativeArray through fields (pass-by-value)
  'read more : <https://developer.roku.com/en-gb/docs/developer-program/performance-guide/optimization-techniques.md#OptimizationTechniques-DataFlow>
  m.player.textTracks = textTracks
end function
```

### 2. Call the function using the language label (or 3-letter-language code if you change x.label to x.language)

## Related articles

- [How to dynamically change the visible captions?](01-how-to-dynamically-change-the-visible-captions.md)
- [How to add CSS or JavaScript files to an Android/iOS project](../../../version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)
- [Web SDK](../../getting-started/01-sdks/01-web/00-getting-started.mdx)
- [Android Legacy (4.12.x) SDK](../../../version-v4/getting-started/01-sdks/02-android/00-getting-started.md)
- [Chromecast Receiver SDK](../../getting-started/01-sdks/06-chromecast/00-getting-started.md)
