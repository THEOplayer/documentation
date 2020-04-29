# How to dynamically change the visible captions?

When working with the captions / text-track options, you can dynamically change the currently selected language (or set a default language) using following methods.

This method assumes that you are using text-tracks that are loaded with the manifest. If you add the text-track separately, you can just use this API: [TextTrackDescription](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.texttrackdescription.md)

## Step-by-step guide

### 1. Create a new function inside the browser

##### Web SDK

```js
function setLanguage(player, language) {
        // Disable all text tracks that are currently active
    player.textTracks.filter(function(x) { if (x.label !== 'disabled') { return x }}).forEach(function(x){x.mode='disabled';});
            // Enable the text track for a specific language. Note: here i searched on the label, you can also do x.language for the ISO 3 letter language code
    player.textTracks.filter(function(x) { if (x.label == language) { return x }})[0].mode = 'showing'
}
```

##### iOS SDK

```swift
TO BE TESTED
private func setLanguage(player: THEOplayer, language: String) {
    let array = player.textTracks as! Array<TextTrack>
    //Disable all current active textTracks
    _ = array.filter { $0.label != "disabled" }.forEach { $0.mode == TextTrackMode.disabled }
    //Enable the text track for a specific language.
    var textTrackToActivate = array.filter { $0.label == language }[0]
    textTrackToActivate.mode = TextTrackMode.showing
}	
```

##### Android SDK

WIP

### 2. Call the function using the language label (or 3-letter-language code if you change x.label to x.language)

