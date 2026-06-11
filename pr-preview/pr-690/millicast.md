# OptiView Real-time Streaming

OptiView Rebranding

Dolby OptiView Real-time Streaming is the new name for Dolby.io (Millicast) as part of the OptiView product suite. During the transition, you may still see references to Millicast or Dolby.io. These all refer to the same product. You still access the dashboard at <https://streaming.dolby.io>.

OptiView Real-time Streaming APIs were created to make it easier to stream your high-value content at scale with ultra-low latency.

Deliver 4k video and audio streams to massive audiences while maintaining under half a second of latency anywhere in the world. With the scale, speed, and quality of the service, the OptiView Real-time Streaming APIs support a range of use cases including live events, sports betting, virtual auctions, remote production, and more.

## Real-time Streaming[​](#real-time-streaming "Direct link to Real-time Streaming")

## [🎥Capture](/documentation/pr-preview/pr-690/millicast/capture.md)

[Capture audio and video from a wide range of devices.](/documentation/pr-preview/pr-690/millicast/capture.md)

<br />

## [📡Broadcast](/documentation/pr-preview/pr-690/millicast/broadcast.md)

[Encode content for broadcasting.](/documentation/pr-preview/pr-690/millicast/broadcast.md)

<br />

## [🚚Distribution](/documentation/pr-preview/pr-690/millicast/distribution.md)

[Distribute WebRTC at scale with our WebRTC CDN.](/documentation/pr-preview/pr-690/millicast/distribution.md)

<br />

## [▶️Playback](/documentation/pr-preview/pr-690/millicast/playback.md)

[Decode content for any device with our client SDKs.](/documentation/pr-preview/pr-690/millicast/playback.md)

<br />

## What is Real-time Streaming?[​](#what-is-real-time-streaming "Direct link to What is Real-time Streaming?")

*Low Latency Streaming* has been available for a number of years to deliver media content over HTTP within about 10 seconds. With *Real-time Streaming*, we can deliver content glass to glass from capture, encoding it for broadcast, distributing it over a content delivery network so that an end-user can playback that experience globally at scale on average ***under 1 second***!

This enables a wider range of use cases where precision matters for timely high-value streaming content.

[YouTube video player](https://www.youtube.com/embed/rxjlxHNMmdg)

## How it works[​](#how-it-works "Direct link to How it works")

Supporting many [use cases](https://optiview.dolby.com/solutions/), real-time streaming has components that support the required capabilities for [Capture](/documentation/pr-preview/pr-690/millicast/capture.md), [Broadcast](/documentation/pr-preview/pr-690/millicast/broadcast.md), [Distribution](/documentation/pr-preview/pr-690/millicast/distribution.md), and [Playback](/documentation/pr-preview/pr-690/millicast/playback.md).

![](/documentation/pr-preview/pr-690/assets/images/cf4a8a2a1d8d4b126bd99fd41dd5708b3feefc91c3a0dd364775d9af-dolby-millicast-real-time-streaming-workflow-b43d65c2b7fb909d97513f2a62c210f5.png)

## Capture streaming content[​](#capture-streaming-content "Direct link to Capture streaming content")

To [capture](/documentation/pr-preview/pr-690/millicast/broadcast.md) content you need either a physical camera capturing the content, a virtual camera from within a game engine, or a source of content available via another content creation tools such as OBS or Adobe Premiere.

Many devices are able to capture a compatible media stream encoding:

* **SDI & HDMI**, Serial Digital Interface (SDI) and High-Definition Multimedia Interface (HDMI) connections are common across many professional cameras and capture devices.

* **NDI**, Network Device Interface, is a commonly used protocol for Video over IP that is supported by video mixers, capture cards, and other devices.

* **RTSP**, Real-time Streaming Protocol, is commonly supported in media streaming servers that capture and process video and audio feeds.

Check with your specific hardware provider for direct support of WebRTC or one of these common device interfaces.

## [➡️Continue to the Capture Guide](/documentation/pr-preview/pr-690/millicast/capture.md)

## Broadcast encoded media[​](#broadcast-encoded-media "Direct link to Broadcast encoded media")

[Broadcasting](/documentation/pr-preview/pr-690/millicast/broadcast.md) content requires access to the public internet and encoding, which can be accomplished via the browser, software, hardware, and via the [OptiView Real-time client-side broadcaster SDKs](/documentation/pr-preview/pr-690/millicast/playback/players-sdks.md).

The OptiView Real-time CDN can ingest streams encoded in a few main formats:

* **WebRTC**, an internet transfer protocol that supports video codecs H.264, H.265, VP8, VP9, AV1, and the Opus audio codec. Broad support is made possible through implementations of **WebRTC HTTP Ingest Protocol (WHIP)**.

* **SRT**, a video transfer protocol that can be transmuxed to WebRTC via the OptiView Real-time CDN and supports H.264 video and AAC audio codecs.

* **RTMP and RTMPs**, internet transfer protocols that can be transmuxed to WebRTC via the OptiView Real-time CDN that supports only the H.264 video codec.

*SRT and RTMP will automatically have AAC audio converted to Opus via the CDN*

## [➡️Continue to the Broadcast Guide](/documentation/pr-preview/pr-690/millicast/broadcast.md)

## Distribution with WebRTC CDN[​](#distribution-with-webrtc-cdn "Direct link to Distribution with WebRTC CDN")

The OptiView Real-time CDN offers a range of server-side features that users can toggle and adjust via [the REST APIs](/documentation/pr-preview/pr-690/millicast/getting-started/using-rest-apis.md) or the Dashboard to ensure [distribution](/documentation/pr-preview/pr-690/millicast/distribution.md) of streams is secure, stable, and scalable.

* **Scalability** to distribute content to large audiences across multiple regions in real-time.

* **Stability** with features like simulcast that provide redundancy and adaptability to maintain a good user experience across different network and device conditions while maintaining a high uptime and Quality of Experience (QoE).

* **Security** through features that protect your content by securing streams with subscriber tokens, self-signed tokens, allowing only specific origins, geo-blocking, and IP filtering.

Distribution of streaming content requires scalability, stability, and security along with a collection of robust features including stream recordings, multi-source streams, multi-bitrate delivery, backup publishing, stream syndication, and streaming analytics.

## [➡️Continue to the Distribution Guide](/documentation/pr-preview/pr-690/millicast/distribution.md)

## Playback streaming media[​](#playback-streaming-media "Direct link to Playback streaming media")

The final component of the streaming workflow is taking the stream, after it has been passed through the OptiView Real-time CDN, and playing it back to the end viewer. Similar to the broadcasting side, decoding and [playback](/documentation/pr-preview/pr-690/millicast/playback.md) is supported via web and mobile browsers, software, hardware, and via client-side broadcast SDKs.

* Hosted streaming player with low-code drop-in support for many applications.

* Interactive playback for streams that support dynamic tracks, multiple layers, multiple views, and playback events.

* Support with **Client SDKs** for building custom playback viewers for Web, iOS, Android, React-Native, Flutter, Unity, Unreal, .NET, and desktop applications.

* Broad support is made possible through implementations of **WebRTC HTTP Egress Protocol (WHEP)**.

* Preview streams with poster images and thumbnails.

* **REST and GraphQL APIs** that provide analytics for tracking individual streams and user bandwidth tracking for who is viewing a stream.

## [➡️Continue to the Playback Guide](/documentation/pr-preview/pr-690/millicast/playback.md)
