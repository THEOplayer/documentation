# Chapter markers

This guide explains to you how to set up THEOplayer to display chapter markers as a way of navigating videos. For more information regarding chapter markers, see Resources at the bottom of this page.

## SDKs
| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |  Yes  |   Yes  | N/A  |      N/A    |      N/A    |

## How to use the Up Next API
The Up Next API is a UI feature and shows video chapters when hovering the timeline. 

### Prerequirements
This guide expects that you have a THEOplayer license. If you aren't using THEOplayer yet, you can start your free trial [here](https://portal.theoplayer.com). Be sure to have THEOplayer version 2.11 or higher.

### Adding a chapter markers track
In order to add chapter markers, you need to add a TextTrackDescription to your source that specifies a sideloaded text track of kind 'chapters'. THEOplayer supports loading of chapter markers in WebVTT, SRT and other text track formats. 

To see an example of chapter markers in WebVTT formats, check out the article [What are chapter markers?](../../../knowledge-base/03-playback/01-what-are-chapter-markers.md).

### Code samples
The following code samples show how you can load THEOplayer with a video and sideloaded chapters track:

##### Web SDK
This example shows how to use chapters on your video. In this example, the source contains one `TextTrack` object, including a WebVTT file with video chapters. 

```js
player.source = {
    ...
    textTracks : [{
        kind : 'chapters',
        src : 'https://cdn.theoplayer.com/video/sintel/chapters.vtt',
        srclang : 'en'
    }]
};
```

##### Android SDK
The following example shows how to use chapters on your video. In this example, the source contains one `TextTrack` object, including a WebVTT file with video chapters. 

```java
sourceDescription(
    typedSource("https://cdn.theoplayer.com/video/sintel/nosubs.m3u8")
        .build()
)
.textTracks(
    new TextTrackDescription(
        src: "https://cdn.theoplayer.com/video/sintel/chapters.vtt",
        isDefault: true,
        TextTrackKind.CHAPTERS,
        srclang: "en",
        label: "Chapters")
)
```

##### iOS SDK

A `TextTrackDescription` object has the following constructor:

```swift
TextTrackDescription(src: String,
                     srclang: String,
                     isDefault: Bool?,
                     kind: TextTrackKind?,
                     label: String?,
                     format: TextTrackFormat?)
```
The following example shows how to use chapters on your video. In this example, the source contains one `TextTrack` object, including a WebVTT file with video chapters. 

Example code:
```swift
var textTrackDescription = TextTrackDescription(src: "https://cdn.theoplayer.com/video/sintel/chapters.vtt",
                                                srclang: "en",
                                                kind: .chapters)
}

var sourceDescription = SourceDescription(source: TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", 
                                                              type: "application/x-mpegurl"), 
                                          textTracks: [textTrackDescription]) 
)
```

## Sample application
This demo illustrates the use of chapter markers in production: [https://demo.theoplayer.com/chapters](https://demo.theoplayer.com/chapters).