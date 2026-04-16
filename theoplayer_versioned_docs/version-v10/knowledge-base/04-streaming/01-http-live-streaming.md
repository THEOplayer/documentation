# HTTP Live Streaming

HTTP Live Streaming (also known as HLS) is a protocol implemented by Apple for streaming of audio and/or video content over HTTP. HLS has become over the last years a de facto standard for streaming content online. The main reasons for this are:

- Adaptive streaming: HLS is able to dynamically adjust playback quality to match the device and network conditions such as the available speed of wired or wireless networks. This method of adaptive streaming allows the protocol to deliver better viewer experiences.
- Support for live, video-on-demand (VOD) and time-shifted (DVR) streaming.
- HTTP transactions: Because HLS only makes use of standard HTTP requests it is capable of traversing any firewall or proxy server that let through standard HTTP traffic. This also allows content to be delivered via widely available CDNs.

The HLS protocol also specifies a standard encryption mechanism with AES-128 for content protection, offers support for subtitles and closed captions, advertisements, ...

## THEOplayer and HLS: HTML5 vs. Flash

HTTP Live Streaming is currently the only protocol capable of streaming to Apples iPhone and iPad devices. However, besides Safari on Mac, most other browsers do not directly support playback of the HLS protocol. Other solutions for playback of HLS require primarily the installation of external browser plug-ins such as Flash, Silverlight or QuickTime.

With THEOplayer it is possible to stream live, VOD or DVR content with HLS directly to HTML5 platforms without the need to have any plug-ins or apps installed. THEOplayer offers support for HLS on almost all modern devices and browsers. This includes desktop devices running Windows, Linux and OS X, but also mobile devices running Android or Windows Phone.

## Supported platforms and browsers

THEOplayer offers support for HTTP Live Streaming on the following HTML5 platforms and browsers without the need to have any apps or plug-ins such as Flash, Silverlight or QuickTime installed:

|       Platform        |        Browser         |
| :-------------------: | :--------------------: |
|      **Windows**      | Internet Explorer (\*) |
|                       |          Edge          |
|                       |         Chrome         |
|                       |        Firefox         |
|                       |         Opera          |
|                       |        Vivaldi         |
|       **OS X**        |         Safari         |
|                       |         Chrome         |
|                       |     Firefox (\*\*)     |
|                       |         Opera          |
|                       |        Vivaldi         |
|       **Linux**       |         Chrome         |
|                       |    Firefox (\*\*\*)    |
|                       |         Opera          |
|      **Android**      |   Chrome for Android   |
|                       |  Firefox for Android   |
|                       |         Opera          |
|        **iOS**        |         Safari         |
|                       |     Chrome for iOS     |
|                       |       Opera Mini       |
|                       |      Opera Coast       |
| **Windows Phone 8.1** |   Internet Explorer    |

(\*) = Version 10+

(\*\*) = As of Firefox 35+

(\*\*\*) = Requires gstreamer H.264 plug-in to be installed
