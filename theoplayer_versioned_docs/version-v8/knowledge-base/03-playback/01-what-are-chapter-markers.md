# What are chapter markers?

Dividing a video into separate parts helps your audience navigate through your content. While hovering the seek bar, THEOplayer's chapter markers and titles will help your users identify different parts of your content more easily. It also allows them to revisit their favorite parts of your videos.

Chapter markers are cue points that allow you to divide your video content into segments called chapters. Chapters are used to convey metadata (e.g.: a title for each video segment) and to help the viewer seek to the desired portion of the video. Segmenting a long video is, therefore, a way to provide additional navigation to your content, improving the user experience.

Chapter markers are rendered on the timeline to visualize different segments of a video. Browsing chapters is possible by scanning through the chapter titles that are rendered on the UI while the user hovers the seek bar.

THEOplayer supports loading of chapter markers in WebVTT, SRT and other text track formats.

For the following example, we will focus on chapter markers in WebVTT format. WebVTT is a plain text format, part of the HTML5 standard, that's also used for providing subtitles and closed captions. These WebVTT files are quite straightforward and contain the chapter titles for specific time ranges in the video.

A sample WebVTT file could look like the following:

```text
WEBVTT

1
00:00:00.000 --> 00:01:42.000
Opening credits

2
00:01:42.000 --> 00:04:44.000
A dangerous quest

3
00:04:44.000 --> 00:05:50.000
The attack
```

## Resources

The following resources provide more information:

- [How-to guide](../../knowledge-base/03-playback/subtitles-and-closed-captions/01-chapter-markers.md)
- [Demo page](https://demo.theoplayer.com/chapters)
