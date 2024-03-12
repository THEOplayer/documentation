# What are the limitations of AirPlay

When casting through [AirPlay](https://www.theoplayer.com/theoplayer-demo-airplay) your viewer is relying on the native Apple video player.
This setup gives rise to a number of limitations, as a third-party video player (i.e. THEOplayer) cannot circumvent the limitations of this native Apple video player.

Some of these limitations include, but are not limited to, the following:

- AirPlay does not support client-side ad-insertion.
  Instead, you could consider using server-side ad-insertion, or disabling client-side ad-insertion when allowing AirPlay.
- AirPlay does not support VR/360 videos. Instead, you should disable AirPlay for VR/360 videos.
- AirPlay does not support MPEG-DASH. Instead, you should use HLS if you want to allow AirPlay.
- AirPlay does not support UI customization.
  Instead, you could implement a [tvOS application](../getting-started/01-sdks/05-tvos/00-getting-started.md) to offer a custom playback experience on an Apple TV.
- AirPlay does not support some closed captions and subtitle formats, including CEA-608 and [sideloaded (WebVTT) subtitles](../how-to-guides/10-texttrack/04-how-to-insert-subtitles.md).
  Instead, you must use subtitles that are supported natively.
- AirPlay does not support manual quality switches. Instead, viewers can only rely on automatic quality selection.
- AirPlay may not have proper support for LL-HLS. The delay might be greater than you expect, and stuttering may occur.
- AirPlay does not support authentication cookies. AirPlay streams run on a device other than the device initiating the session.
  This means authentication cookies will not be available to retrieve playlists, encryption keys, ...
  There is also no way to intercept these requests from the initiating device (other than DRM license requests).

:::info Does native Safari support it?

When you want to know whether the native AirPlay video player supports a certain feature, you can compare the experience with the native Safari video player.

For example, if you want to know whether MPEG-DASH is supported, you can enter your MPEG-DASH URL in the address bar of Safari, hit enter, and observe the results. The same results are most likely true for the native AirPlay video player.

:::
