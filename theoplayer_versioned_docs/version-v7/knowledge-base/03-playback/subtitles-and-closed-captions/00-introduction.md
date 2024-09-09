# Introduction

THEOplayer supports rendering of subtitles and closed captions in both live and VOD content via the WebVTT format. You can supply subtitles and closed captions to THEOplayer in WebVTT format either externally via the `<track>` element or embedded inside the HLS stream.

## Embedded WebVTTs in the HLS playlist

Apart from specifying the WebVTT file in the track element, THEOplayer has support for WebVTT captions and subtitles embedded in the HLS m3u8 manifest file.

## Examples

### Sideloading WebVTT

[This page](../../../how-to-guides/10-texttrack/04-how-to-insert-subtitles.md) explains how you can insert WebVTT files.

### HTTP Live Streaming Manifest with embedded WebVTT subtitles

The following is a root HLS manifest with English, French, Spanish and Japanese subtitles. THEOplayer will handle and parse the required subtitles and synchronize them with the stream.

```text
#EXTM3U
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="English",DEFAULT=YES,AUTOSELECT=YES,FORCED=NO,LANGUAGE="en",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/eng/prog_index.m3u8"
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="Français",DEFAULT=NO,AUTOSELECT=YES,FORCED=NO,LANGUAGE="fr",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/fra/prog_index.m3u8"
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="Español",DEFAULT=NO,AUTOSELECT=YES,FORCED=NO,LANGUAGE="es",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/spa/prog_index.m3u8"
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="日本語",DEFAULT=NO,AUTOSELECT=YES,FORCED=NO,LANGUAGE="ja",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/jpn/prog_index.m3u8"
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=1860000,RESOLUTION=960x540,CODECS="avc1.42c01f,mp4a.40.2",SUBTITLES="subs"
gear1/prog_index.m3u8
```

## Demo

A demo on closed captions and subtitles can be found at [https://demo.theoplayer.com/closed-captions-subtitles](https://demo.theoplayer.com/closed-captions-subtitles).
