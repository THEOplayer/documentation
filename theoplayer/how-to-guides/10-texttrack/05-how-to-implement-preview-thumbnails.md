# How to implement preview thumbnails in THEOplayer

This article describes how to enable preview thumbnails. In THEOplayer this is done with the TextTrack API.

### Table of Contents

- [SDKs](#sdks)
- [Code examples](#code-examples)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |         |          |                |                |

A demo/example of the preview thumbnails on the THEOplayer Web SDK can be found at [http://demo.theoplayer.com/preview-thumbnails](http://demo.theoplayer.com/preview-thumbnails)

## Code examples

The thumbnails are loaded as a separate text track, by setting it as a sideloaded textTrack in the SourceDescription:

##### Web SDK

```js
player.source = {
  sources: {
    type: 'application/x-mpegurl',
    src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8'
  },
  textTracks: [{
    default: true,
    src: 'https://cdn.theoplayer.com/dash/theoplayer/thumbnails/big_buck_bunny_thumbnails.vtt',
    label: 'thumbnails',
    kind: 'metadata'
  }]
}
```

##### Android SDK

You can add/edit your SourceDescription as follows.

```java
public static final SourceDescription BBB_WITH_THUMBNAILS =
    new SourceDescription.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8")
        .textTracks(new TextTrackDescription.Builder("https://cdn.theoplayer.com/dash/theoplayer/thumbnails/big_buck_bunny_thumbnails.vtt")
            .isDefault(true)
            .kind(TextTrackKind.METADATA)
            .srclang("en")
            .label("thumbnails")
            .build()
    ).build();
```

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

You can edit or add the SourceDescription below.

```swift
player.source = SourceDescription(
    source: TypedSource(
        src: "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8",
        type: "application/x-mpegurl"
    ),
    textTracks: [TextTrackDescription(
        src: "https://cdn.theoplayer.com/dash/theoplayer/thumbnails/big_buck_bunny_thumbnails.vtt",
        srclang: "en",
        isDefault: true,
        kind: TextTrackKind.metadata,
        label: "thumbnails")
    ]
)
```
