# Does THEOplayer support EXT-X-DATERANGE

Yes, the HLS tag `#EXT-X-DATERANGE` is supported in THEOplayer as of 2.61.0. To enable it, hlsDateRange needs to be added to either the player configuration or the source description and be set to true. The date range metadata will be made available through the TextTrack API.

`#EXT-X-DATERANGE` is a way of providing timed metadata in an HLS manifest. It is used to define date range metadata in a media playlist. A possible use case is defining timed metadata for interstitial regions such as advertisements, but can be used to define any timed metadata needed by your stream.

As indicated above, `#EXT-X-DATERANGE` is supported in THEOplayer as of 2.61.0. However, the feature is not enabled by default. To enable it, add hlsDateRange to the player configuration and set it to true. You can also choose (instead) to enable/disable the feature per source by adding the same option to a source in your source description.

The TextTrack API is used to retrieve the timed metadata. A MetadataTextTrack will provide cues which contain the timed metadata and will dispatch an event when started and ended.

## Remarks

- A manifest with EXT-X-DATERANGEs needs to have an EXT-X-PROGRAM-DATE-TIME to be able to calculate dates from playback times. This is also a specification requirement.
- If the tag name for a date range tag in the manifest is incorrect, the tag will be ignored
- If the name of any of the attributes is misspelled in a date range tag in the manifest, the attribute will not be parsed
- When using native browser playback features such as FairPlay content protection, the player might use more resources to parse date ranges from the manifest than in other scenarios.

## Resources
The following resources provide more information:
- [HLS Specification - #EXT-X-DATERANGE](https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis-04#section-4.4.2.7)
- [API reference - TextTrackType](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.texttracktype.md)