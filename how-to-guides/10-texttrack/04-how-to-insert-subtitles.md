# How to insert subtitles?

You may be asking this question if you need captions or subtitles on your video. The sourceDescription property *textTracks *can be used to add an array of side-loaded text tracks to the player. All valid tracks will be available for playback as long as the player’s source is not set again. In the following guide you will find several related topics and some code samples for different SDKs.

The *textTracks* property and objects can also be used for other purposes, e.g.: for including preview thumbnails and chapters. Please see linked documentation and article to find out more. 

### Table of Contents
- [SDKs](#sdks)
- [Related questions](#related-questions)
- [Prerequisites](#prerequisites)
- [Code examples](#code-examples)
- [Subtitle styling](#subtitle-styling)


## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |  Yes  |   Yes  |   |          |          |

## Related questions

- Can I activate captions in THEOplayer? How?
- Can I load subtitles in several languages, for the user to choose?
- Can I add styles to my subtitles

## Prerequisites

The feature *texttrackrendering* must be active on your license.

## Code examples

##### Web SDK

Each text track should be described as a [TextTrackDescription](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.texttrackdescription.md).

```js
player.source = {
    sources : [{
        src : '//path/to/your-manifest.m3u8', // sets source
        type : 'application/x-mpegurl' // sets type - find other values at https://support.theoplayer.com/hc/en-us/articles/214350425-SourceDescription-API#TypedSource
    }],
    textTracks : [{
        default: true, //optional
        kind : 'subtitles', //optional - find other values at https://support.theoplayer.com/hc/en-us/articles/214350425#TextTrackDescription
        label: 'English subs', //optional - this will appear in your UI
        src : 'path/to/your-subs-track1.vtt',
        srclang : 'en'
    }]
};
```

##### Android SDK

```java
public static final SourceDescription SOURCE_WITH_SUBS =
        sourceDescription("//path/to/your-manifest.m3u8")
            .textTracks(new TextTrackDescription(
                "path/to/your-subs-track1.vtt", //src
                true, //isDefault
                TextTrackKind.SUBTITLES,
                "en", //srclang
                "en" // label
                )
            ).build();
```

##### iOS SDK

```swift
var sampleSource: SourceDescription {
        let src = "https://your.m3u8"
        let stream = "application/x-mpegurl"
        let textTrack1 = TextTrackDescription(src: "https://your.webvtt", srclang: "English", isDefault: true, kind: .subtitles, label:"English", format: .WebVTT)
        let textTrack2 = TextTrackDescription(src: "https://your.webvtt", srclang: "Arabic", isDefault: false, kind: .subtitles, label:"Arabic", format: .WebVTT)
        
        return SourceDescription(
            source: TypedSource(
                src: src,
                type: stream
            ),
            textTracks: [textTrack1,textTrack2]   
        )    
    }

Then set the source to the player by:

self.theoplayer.source = sampleSource
```    

## Subtitle styling

To style your subtitles look into the player source property `textTrackStyle`. 