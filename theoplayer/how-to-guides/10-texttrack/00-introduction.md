# Introduction

The articles in this section describe how to implement common use-cases related to text tracks, subtitles, closed captions and metadata. These use-cases can range from programmatically detecting new metadata, to side-loading subtitles.

The `textTrackRendering` feature flag, included by default makes THEOplayer capable of supporting

- subtitle and closed caption formats like WebVTT, CEA-608, DVB Subs and TTML;
- metadata formats like ID3, emsg, EventStream and `EXT-X-DATERANGE`.

The `textTrackRendering` feature exposes the TextTracks API. This API allows developers to programmatically switch between text tracks, detect events related to text tracks (e.g. new active cue) and more.

## Related articles

- [How to dynamically change the visible captions](../../how-to-guides/10-texttrack/01-how-to-dynamically-change-the-visible-captions.md)
- [How to programmatically detect text tracks](../../how-to-guides/10-texttrack/02-how-to-programmatically-detect-text-tracks.md)
- [How to programmatically detect text track changes](07-how-to-detect-text-track-changes.md)
- [How to programmatically enable or disable text tracks](../../how-to-guides/10-texttrack/03-how-to-programmatically-disable-text-tracks.md)
- [How to detect active text track cues](08-how-to-detect-active-text-track-cues.md)
- [How to insert subtitles](../../how-to-guides/10-texttrack/04-how-to-insert-subtitles.md)
- [How to implement preview thumbnails in THEOplayer](../../how-to-guides/10-texttrack/05-how-to-implement-preview-thumbnails.md)
- [How to track ID3 cues/tags](../../how-to-guides/10-texttrack/06-how-to-track-id3-cues-tags.md)
