# Timed Metadata

_Timed metadata_ describes a subset of a stream through data (bytes, text, image, ...), a start time and/or a stop time.
For example, if you're watching a 60 seconds video, and if I would declare that an advertisement is playing in this video between 00:30 and 00:45, then I am declaring timed metadata because I'm referring to a subset of this video.

Timed metadata shouldn't be confused with _general metadata_. General metadata describes data related to your entire video content, like the title of the video, its total duration and its PG-rating.
In this article we use timed metadata and metadata interchangeably, and consider general metadata out-of-scope.

![Metadata Flow](../../../../theoplayer/assets/img/metadata-flow.png 'Metadata Flow')

This article provides information on the different types of timed metadata and how you can leverage it in an application.
The story is told in the reverse order: first we'll consider some use-cases (e.g. highlights), next we'll talk about the role of a video player versus the application, and finally we'll list the types of metadata (e.g. ID3) you can insert.

## Using Metadata

When using timed metadata, you are trying to achieve a [use-case](#use-cases) through a [technical implementation](#technical-implementation).
In an ideal world, your video player provides an [out-of-the-box solution](#out-of-the-box-solutions) for your use-case,
and you don't need to write and maintain a lot of code.

### Use-Cases

Timed metadata enables all kinds of use-cases in the field across various domains.

**Markers**

A popular use-case is to associate some data (text, image, ...) with a specific moment in time to mark a highlight.

![Metadata Markers](../../../../theoplayer/assets/img/metadata-goals.png 'Metadata Markers')

For example, in the screenshot above, we're leveraging metadata to highlight where a goal has been scored.
If you click on the goal icon, you'll be taken to this moment in time in the video.
You could of course expand this feature, and hovering the goal icon would toggle a tooltip which tells you who scored and what the new score is.

**Advertising**

Timed metadata can help you define the start and end of an advertisement. This information can be used to enhance the UI and UX.
For example, at https://cdn.theoplayer.com/demos/verizon-media/index.html, the application leverages metadata to render markers in the scrub bar and to count down to the end of the ad break,
and on top of that, if you try to seek over an ad break, the cursor snaps back to the ad break.

![Metadata Advertising](../../../../theoplayer/assets/img/metadata-advertising.png 'Metadata Advertising')

You can also leverage timed metadata "behind the scenes". For example, the timed metadata might contain info on the creative ID of the advertisement,
and the URLs of its event trackers. An application could then use this information to communicate with an ad server or analytics server.

**Actions**

Timed metadata could also be used to initiate events and actions.
For example, perhaps you want to overlay some text or image when you are at position 00:40.
Or perhaps you want to disable seeking through the scrub bar for a defined period of time.

![Metadata Actions](../../../../theoplayer/assets/img/metadata-actions.png 'Metadata Actions')

The screenshot showcases a demo where a relevant hyperlink is being overlayed on top of the video within a specific time period.
This hyperlink (and its start and stop time) was indicated through timed metadata.

**Other**

You can get very creative with timed metadata.

- You can use it to schedule client-side advertisements.
- You can use it to make certain areas of your video frame clickable at certain times, and clicking it will bring you to a webshop.
- ...

If you have a use-case where a certain behavior can be associated with a certain moment in time, you can probably tackle it through timed metadata.

### Technical Implementation

To programmatically extract your metadata and implement your use-case, you will always need to write custom application logic to some degree.

- You still need to write the custom code which calls the video player API.
- You might use a combination of external metadata and specification-compliant metadata, which requires you to write custom logic to tie things together.
- You probably want to tweak the UI and UX, so you'd also write some custom application code for that.

On top of this, you might need to leverage a video player API to extract your metadata,
if you pass along your metadata in such a way it adheres to a certain streaming specification. More about this in the following sections.

### Out-of-the-box Solutions

To implement the use-cases listed above, applications developers have to write and maintain application code.

Sometimes, pre-integrations offered by the video player can take away some responsibilities of the application developer.
For example, THEOplayer has a pre-integration with Verizon Media which allows developers to easily configure whether viewers can see ad break markers,
whether viewers can skip over ad breaks, and much more.

At other times, there might be a recommended workflow and pre-integrated feature to achieve your use-case.
For example, you can use [Chapter Markers](../../knowledge-base/03-playback/subtitles-and-closed-captions/01-chapter-markers.md) to highlight different chapters in a video.

THEOplayer also acts as the main contributor to [Enriched Media Streaming Solutions](https://www.theoplayer.com/emss) (EMSS).
EMSS describes a standardized way to insert metadata and how a video player should handle and visualize this metadata.
It might be interesting for you to [reach out to THEOplayer](https://servicedesk.theoplayer.com/) and ask if your use-case is supported by EMSS out-of-the-box.

## Extracting Metadata

Depending on how you insert the metadata, you have to use your video player API to extract the metadata, and/or write custom application logic.

- You use a **video player API** if you've inserted metadata which adheres to a streaming-related specification supported by the selected video player.
  For example, if you're using ID3 tags to pass along your metadata, you will use the designated video player API, if your video player supports the extraction of ID3 metadata.
- You write **custom application logic** if you're storing your metadata externally (e.g. on a CMS) or if you're using a metadata format which is not supported by your video player.
  It might be possible that you're using a video player which is pre-integrated with an external database, so you could perhaps still leverage your video player. (e.g. THEOplayer and Verizon Media.)

When you use THEOplayer as your video player API, you can use the `TextTracks API` to extract certain types of timed metadata like ID3, emsg, EXT-X-DATERANGE and EventStream,
and APIs like `player.currentProgramDateTime` to determine the absolute date and time should you want to compare that with an external CMS.

## Inserting Metadata

Before we can unlock our use-cases, we need to create and insert our timed metadata. How you'll do this depends on your back-end set-up.
(e.g. [Azure Media Services](https://docs.microsoft.com/en-us/azure/media-services/media-services-specifications-live-timed-metadata#2-timed-metadata-ingest) versus [Verizon Media Platform](https://docs.vdms.com/video/index.html#Develop/Live-Slicer-API.htm#timedmeta).)

Let's talk about the different types of timed metadata.

- [Segment Metadata](#segment-metadata)
- [Manifest Metadata](#manifest-metadata)
- [External Metadata](#external-metadata)
- [Timeline Metadata](#timeline-metadata)

It depends on your use-case and back-end which type you should pick, and which [considerations](#considerations) you should make.
Perhaps your back-end doesn't allow you to insert any stream metadata (i.e. segment and manifest metadata), or perhaps you cannot use an external CMS.

### Segment Metadata

Segment metadata is contained within a segment. The industry also refers to segment metadata as in-band media timed events. There are two popular types of segment metadata:

1. ID3 is mostly contained .ts segments. This type of segment (`.ts`) is commonly used in HLS. ID3 can also occur in MPEG-DASH through a carriage over emsg.
2. emsg is mostly contained in CMAF media segments (e.g. `.mp4`).
   This type of segment is commonly used in MPEG-DASH, and in HLS when your HLS stream is using fragmented MP4 segments instead of .ts segments.

### Manifest Metadata

Manifest metadata is contained in the manifest of your streaming protocol. The industry also refers to manifest metadata as out-band media timed events. There are two popular types of manifest metadata:

1. EXT-X-DATERANGE is contained in the HLS (e.g. `.m3u8`) manifest.
2. EventStream is contained in the MPEG-DASH (e.g. `.mpd`) manifest.

### External Metadata

You can also store metadata externally, for example in a remote database or in a file.

**Database**

You can store metadata in an external database, for example by using a content management system (CMS).
In this CMS, you will probably associate an IDs with asset, and associate certain types of data with these IDs.

Furthermore, your database should offer an API to your application, in order for your application developer to successfully query your database through an asset ID.

**File**

You can store metadata in files.
For example, you could leverage [Chapter Markers](../../knowledge-base/03-playback/subtitles-and-closed-captions/01-chapter-markers.md) and thus use `.vtt` files.
That being said, you would still need to know which asset should load which `.vtt` file, thus creating the need for an underlying CMS.

### Timeline Metadata

Your video player might be able to determine _timeline metadata_ through your segments or manifests.
Knowing your playhead position, video duration and/or absolute date may be necessary for you to implement your use-case.

For example, your HLS manifest might contain the `#PROGRAM-DATE-TIME` tag which defines the absolute date and time.
This property allows your video player to calculate and expose the absolute date and time, which you can then leverage
in your use-case.

Check with your back-end (vendor) whether if they expose the manifest metadata required for video players to calculate the absolute date and time.
For HLS, this goes through the `#PROGRAM-DATE-TIME` tag. For MPEG-DASH, this goes through the `availabilityTimeOffset` attribute, and additionally through the `suggestedPresentationDelay` attribute.

### Considerations

We've listed some remarks below which could influence your decision in selecting a specific type of metadata.

- Manifest metadata can be useful because your video player will know about the metadata without requiring your video player
  to download individual segments. This is useful in use-cases where you want to mark highlights.
- Generating manifest metadata might increase the time it takes to load your manifest, either because the file size increases,
  or because of additional computations.
- Segment metadata must be downloaded by the video player before it can be extracted. What if the segment is skipped?
- Manifests and segments are not ideal suitors to carry large chunks of data. Perhaps you should put images elsewhere if you can load them on-demand?
- Not all back-end systems support all types of manifests metadata or segment metadata. You might not be able to implement your use-case on specific platforms.
  For example, what if your back-end does support EXT-X-DATERANGE through HLS, but not EventStream through MPEG-DASH?
  What if you initially didn't need to use MPEG-DASH, but suddenly (e.g. through new DRM requirements) have to us MPEG-DASH?
- Not all back-end systems (e.g. CMS) provide APIs which can be queried by an application.

## THEOplayer and Timed Metadata

THEOplayer is able to extract all applicable types of timed metadata across all supported platforms:

- EventStream through the `TextTracks` API.
- EXT-X-DATERANGE through the `TextTracks` API.
- ID3 through the `TextTracks` API.
- emsg through the `TextTracks` API.
- Timeline metadata through the `player.currentTime` and `player.currentProgramDateTime` API.

THEOplayer offers a number of pre-integrations to facilitate the implementation of relevant SSAI use-cases.
Reach out to THEOplayer if your vendor is missing from the list below, because the list is incomplete.

- [Google DAI](../../how-to-guides/01-ads/08-google-dai.md)
- [Yospace](../../how-to-guides/01-ads/04-yospace.md)
- [Verizon Media](../../how-to-guides/web/uplynk/00-introduction.mdx)

THEOplayer offers features which might implement your desired use-case out-of-the-box:

- [Chapter Markers](https://demo.theoplayer.com/chapters)
- [Preview Thumbnails](https://demo.theoplayer.com/preview-thumbnails)

## Resources

- THEOplayer
  - [How to track ID3 cues/tags?](../../how-to-guides/10-texttrack/06-how-to-track-id3-cues-tags.md)
  - [TextTrack Types](pathname:///theoplayer/v9/api-reference/web/types/TextTrackType.html)
  - [ID3 Audio Player Demo](https://demo.theoplayer.com/audio-id3-metadata)
- External
  - [Requirements for Media Timed Events by the Media and Entertainment Interest Group](https://www.w3.org/TR/media-timed-events/)
  - [EXT-X-DATERANGE in the HLS specification](https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis-07#section-4.4.5.1)
  - [Apple on ID3 in HLS](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTTP_Live_Streaming_Metadata_Spec/Introduction/Introduction.html)
  - [MPEG-DASH Guidelines](https://dashif.org/guidelines/)
