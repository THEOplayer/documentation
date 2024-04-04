# Why did my subtitles stop working

This question is occasionally asked by developers who've configured the latest release of THEOplayer.

### Before version 2.80

The most common reason on an older build why closed captions are no longer working is because the **`texttrackrendering` feature isn't enabled**. To verify whether this feature is enabled you can execute the query below.

```js
var subsEnabled = THEOplayer.features.indexOf("texttrackrendering") > -1;
```

### After version 2.80

Starting in THEOplayer version 2.80 the `texttrackrendering` feature is no longer an optional feature. It is instead part of the default build, and is always enabled.

### Other frequent reasons:

- A new stream is configured which does not list any subtitles in its manifest.
- The subtitle file can't be retrieved. (e.g. 404)
- There are CORS issues with the subtitle file.
- The subtitle file is encoded in a non-compatible format.
