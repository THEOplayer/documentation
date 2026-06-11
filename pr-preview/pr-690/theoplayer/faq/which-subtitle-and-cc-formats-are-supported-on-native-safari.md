# Which subtitle and CC formats are supported on native Safari

The Safari browser on iOS uses the native Safari video player. Safari on the desktop also uses its native player when using FairPlay or when the `useNativePlayback` flag is enabled.

### WebVTT[​](#webvtt "Direct link to WebVTT")

For displaying webvtt subtitles, Safari on iOS requires the `SUBTITLES` attribute in the `EXT-X-STREAM-INF` tag of the m3u8 file. This `SUBTITLES` attribute is optional on browsers such as Chrome and Firefox and when Safari does not use its native video player.

### TTML[​](#ttml "Direct link to TTML")

TTML subtitles aren't supported through native Safari. However, THEOplayer should be able to handle TTML subtitles on desktop Safari as long as FairPlay is not being used and the `useNativePlayback` flag is not enabled.

### CEA608 and CEA708[​](#cea608-and-cea708 "Direct link to CEA608 and CEA708")

CEA608 and CEA708 subtitles are supported.

## Known Limitation[​](#known-limitation "Direct link to Known Limitation")

When multiple subtitles with mode `hidden` are configured, only one will fire its events such as `addcue` and `cuechange` when using Safari's native player.

## Resources[​](#resources "Direct link to Resources")

The following resources provide more information:

* [HLS Specification - #EXT-X-STREAM-INF](https://datatracker.ietf.org/doc/html/rfc8216#section-4.3.4.2)
* [THEOplayer introduction to subtitles and closed captions](/documentation/pr-preview/pr-690/theoplayer/knowledge-base/playback/subtitles-and-closed-captions/introduction.md)
* [THEOplayer introduction texttracks](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/texttrack/introduction.md)
