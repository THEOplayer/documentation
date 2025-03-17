---
title: "Broadcast"
slug: /broadcast
---
Broadcasting content requires access to the public internet and encoding, which can be accomplished in a browser, software, hardware, or with the Dolby.io Client-side broadcaster SDKs. 

The Dolby.io CDN can ingest streams encoded in a few main formats: 

<div style={{marginLeft: "20px"}}>

✓ [WebRTC](/millicast/broadcast/webrtc-whip.md), an internet transfer protocol that supports video codecs H.264, H.265, VP8, VP9, AV1, and the Opus audio codec. Broad support is made possible through implementations of **WebRTC HTTP Ingest Protocol (WHIP)**.

✓ [SRT](/millicast/broadcast/using-srt.md), a video transfer protocol that can be transmuxed to WebRTC via the Dolby.io CDN and supports H.264 video and AAC audio.

✓ [RTMP](/millicast/broadcast/using-rtmp-and-rtmps.md) **and RTMPS**, internet transfer protocols that can be transmuxed to WebRTC via the Dolby.io CDN that supports only the H.264 video codec. 

</div>

_SRT and RTMP will automatically have AAC audio converted to Opus via the CDN_

# Start building

<div class="small-image-and-text-btn-container">
    <a href="/streaming-apis/docs/getting-started" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/play-circle.svg)
      </div>
      <div class="small-image-and-text-btn-title">Dashboard</div>
    </div>
  </a> 
  <a href="https://docs.dolby.io/streaming-apis/docs/web" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/web.svg)
      </div>
      <div class="small-image-and-text-btn-title">Web SDK</div>
    </div>
  </a>
  
  <a href="https://docs.dolby.io/streaming-apis/docs/ios" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/apple.svg)
      </div>
      <div class="small-image-and-text-btn-title">iOS SDK</div>
    </div>
  </a>
  
  <a href="https://docs.dolby.io/streaming-apis/docs/android" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/android.svg)
      </div>
      <div class="small-image-and-text-btn-title">Android SDK</div>
    </div>
  </a>    
  
  <a href="https://docs.dolby.io/streaming-apis/docs/rn" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/react.svg)
      </div>
      <div class="small-image-and-text-btn-title">React Native</div>
    </div>
  </a>    
  
  <a href="https://docs.dolby.io/streaming-apis/docs/mac" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/apple.svg)
      </div>
      <div class="small-image-and-text-btn-title">Mac SDK</div>
    </div>
  </a>    
  
  <a href="https://docs.dolby.io/streaming-apis/docs/linux" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/electron.svg)
      </div>
      <div class="small-image-and-text-btn-title">Linux SDK</div>
    </div>
  </a>    
  
  <a href="https://docs.dolby.io/streaming-apis/docs/flutter" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/flutter.svg)
      </div>
      <div class="small-image-and-text-btn-title">Flutter SDK</div>
    </div>
  </a>    

    <a href="https://docs.dolby.io/streaming-apis/docs/windows" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/dotnet.svg)
      </div>
      <div class="small-image-and-text-btn-title">.NET SDK</div>
    </div>
  </a>
  
  <a href="https://docs.dolby.io/streaming-apis/docs/unity-getting-started" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/unity.svg)
      </div>
      <div class="small-image-and-text-btn-title">Unity plugin</div>
    </div>
  </a> 
  
  <a href="https://docs.dolby.io/streaming-apis/docs/player-plugin" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/unreal.svg)
      </div>
      <div class="small-image-and-text-btn-title">Unreal plugin</div>
    </div>
  </a> 
</div>


# Encoding

With different broadcast protocols across the industry comes the need for encoders to create seamless video transmission. By employing encoders, video content can be efficiently compressed, reduce in file size, and conserve bandwidth during streaming. It also ensures compatibility across various devices and platforms, enabling playback and accessibility for viewers. Codecs play a crucial role since it is what encoders utilize to build the compression. 

## Codecs

A few terms to remember are: 

<div style={{marginLeft: "20px"}}>

✓ **H.264 (AVC)**, Advanced Video Coding, is a widely used video codec that efficiently compresses video data while maintaining video quality. It is widely supported, making it a highly versatile codec for various applications, as the _de facto_ standard for many.

✓ **H.265 (HEVC)**, or High-Efficiency Video Coding, is an advanced video codec that offers even higher compression efficiency compared to H.264. It achieves a significant reduction in file size and bit rate while maintaining or improving video quality. This makes H.265 suitable for applications with limited bandwidth or storage capacity. 

✓ **VP9** is an advanced video codec designed to provide higher compression efficiency and improved video quality compared to its predecessor, VP8. VP9 offers significant bitrate savings, allowing higher-quality video streaming at lower bitrates.

✓ **AV1** is designed to deliver high-quality compression while achieving significant bitrate reduction utilizing compression techniques like improved motion prediction, advanced entropy coding, and intra-frame coding. Best suited for applications with limited bandwidth. 

✓ **AAC**, Advanced Audio Coding, is an audio codec known for its high audio quality while maintaining a low bitrate, resulting in smaller file sizes and efficient transmission. It is widely supported across devices and platforms, making it a versatile choice for various audio applications.

</div>

## Encoders

A [hardware encoder](./hardware-encoders.md) can help transform [capture](/millicast/capture/index.md) devices used in professional broadcast setups into a real-time streaming solution. The typical hardware encoder will have drivers that support interfaces like SDI, HDMI, etc., while optimizing for fast encoding to standards like WHIP or RTMP for streaming broadcast workflows. There are also [software encoders](./software-encoders.md) that can help with encoding by using compute resources.

Here is a breakdown of some distinct encoders with their corresponding codec and protocol compatibility.

| Encoder                                                      | Protocols                                      | Codecs                                              |
| :----------------------------------------------------------- | :--------------------------------------------- | :-------------------------------------------------- |
| [Osprey](/millicast/hardware-encoders/using-osprey-talon-whip-hardware-encoder.md) Talon | RTMP, RTMPS, RTSP, HLS, RTP, SRT, WebRTC, WHIP | H.264 (AVC), H.265 (HEVC), AAC                      |
| [Teradek](/millicast/hardware-encoders/broadcasting-teradek-vidiu.md) Wave               | RTMP, RTMPS, RTSP, SRT, HLS, NDI               | H.264 (AVC), H.265 (HEVC), AAC                      |
| [Videon](/millicast/hardware-encoders/videon.md) EdgeCaster                              | RTMP, RTMPs, SRT, HLS                          | H.264 (AVC), H.265 (HEVC), VP9, AAC                 |
| [Haivision](/millicast/hardware-encoders/using-haivision-kb-encoder.md) KB Encoder       | RTMP, RTMPS, RTSP, HLS, SRT                    | H.264 (AVC), H.265 (HEVC), AAC                      |
| [FlowCaster](/millicast/software-encoders/using-whip-with-flowcaster.md)                 | RTMP, RTMPs, WHIP, NDI, HLS, SRT, WebRTC       | H.264 (AVC), H.265 (HEVC)                           |
| [FFmpeg](/millicast/software-encoders/using-ffmpeg.md)                                   | RTMP, RTMPs, RTSP, HLS                         | H.264 (AVC), H.265 (HEVC), VP9, AV1, AAC            |
| [GStreamer](/millicast/software-encoders/using-whip-with-gstreamer.md)                   | RTMP, RTMPs, RTSP, SRT, HLS, WHIP              | H.264 (AVC), H.265 (HEVC), VP9, AV1, AAC            |
| [OBS](/millicast/software-encoders/using-obs.md)                                          | WebRTC, RTMP, RTMPs, NDI, HLS, SRT, RTSP       | H.264 (AVC), H.265 (HEVC), VP9, AAC                 |
| [LiveU](/millicast/software-encoders/liveu-studio-using-whip.md)                         | RTMP, RTMPs, HLS, RTSP, NDI                    | H.264 (AVC), H.265 (HEVC), VP9, AAC                 |
| [vMix](/millicast/software-encoders/broadcasting-with-vmix.md)                           | RTMP, RTMPs, RTSP, NDI, SRT, WebRTC            | H.264 (AVC), H.265 (HEVC), ProRes, DNxHD/DNxHR, AAC |

# Broadcast protocols

The line between how a video feed is [captured](/millicast/capture/index.md) and how it is encoded can be a subtle distinction. In order to prepare for [distribution](/millicast/distribution/index.md), you need to ensure you have the right encoding to optimize delivery and meet your broadcast requirements.

## Encoding with WHIP

The **WebRTC-HTTP Ingestion Protocol ([WHIP](/millicast/broadcast/webrtc-whip.md))** is an IETF standard developed to leverage the capabilities of WebRTC to ingest content into a streaming platform over HTTP. WHIP addresses problems with Real-time Streaming by removing translation layers during encoding. 

WHIP acts like a signaler, handling the creation and deletion of endpoints needed during transport while maintaining the benefits of WebRTC, such as end-to-end encryption and ultra-low latency.

[How-to use GStreamer with WHIP](/millicast/software-encoders/using-whip-with-gstreamer.md)  
**GStreamer** is a popular pipeline-based media framework that links together multiple nodes into a media processing workflow. Using WHIP, you can encode an output node to broadcast streaming content through Dolby.io.

[How-to use FlowCaster with WHIP](/millicast/software-encoders/using-whip-with-flowcaster.md)  
**FlowCaster** software provides a secure connection to provide IP streaming for editors and remote collaboration.

[How-to use LiveU Studio with WHIP](/millicast/software-encoders/liveu-studio-using-whip.md)  
**LiveU Studio** is a cloud-based SaaS solution for live video production. By supporting WHIP, media streams ingested from LiveU Studio and can be broadcast by Dolby.io.

[How-to Setup an Osprey Talon for WHIP](/millicast/hardware-encoders/using-osprey-talon-whip-hardware-encoder.md)  
The **Osprey Talon** provides exceptional quality with 4k resolution and a plug-and-play interface. There are some recommended settings to enable broadcasting to the Dolby.io platform by using this encoder in the pipeline.

To learn how to create a stream from OBS using WebRTC, see the following video:

<div style={{display: "flex", justifycontent: "center", alignitems: "center"}}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/jUP4vyzbu5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>



## Encoding with SRT

The **Secure Reliable Transport ([SRT](/millicast/broadcast/using-srt.md))** is an open-source protocol that uses an intelligent packet retransmission mechanism on otp of a UDP data flow along with AES-128 and 256-bit encryption. Dolby is part of the _SRT Alliance_, an organization to promote the technology for optimizing streaming performance. 

[How-to setup a Dolby.io SRT Stream](/millicast/broadcast/using-srt.md)  
The Dolby.io dashboard is used to configure the publish path and stream id for an incoming SRT media stream. 

[How-to use OBS with SRT](/millicast/software-encoders/using-obs.md)   
**Open Broadcaster Software (OBS)** is free and open source software is popular for cross-platform streaming. You will need to download a recent version of OBS that has been extended to provide SRT support.

To learn how to create a stream from OBS using SRT, see the following video:

<div style={{display: "flex", justifycontent: "center"}}>
  <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/DVk-tNZnsRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>


## RTMP Ingest

**Real-time Messaging Protocol ([RTMP](/millicast/broadcast/using-rtmp-and-rtmps.md))** is well-established in many hardware and software applications. With many years of use, RTMP is a good option for compatibility while sacrificing some latency in order to handle transmuxing the incoming stream to WebRTC.  

[How-to setup a Dolby.io RTMP Stream](/millicast/broadcast/using-rtmp-and-rtmps.md)  
The Dolby.io dashboard is used to configure the publish path and stream id for an incoming RTMP or RTMPs media stream.

[How-to use FFmpeg with RTMP](/millicast/software-encoders/using-ffmpeg.md)  
**FFmpeg** is a free and open-source software project that is commonly used in legacy media workflows. It is a command-line tool that is capable of outputing streaming content via RTMP, RTMPS, and RTSP.

[How-to use vMix with RTMP](/millicast/software-encoders/broadcasting-with-vmix.md)  
**vMix** is a software vision mixer available for Windows. It is useful for certain live video production workflows and supports RTMP output that can be broadcast by Dolby.io.

[How-to Setup a Haivision KB encoder for RTMP](/millicast/hardware-encoders/using-haivision-kb-encoder.md)  
The **Haivision KB** series of media encoders deliver high-quality video streaming with 4k resolution and a plug-and-play interface with a small rack-mountable form factor. There are some recommended encoding sessions to optimize this encoder in the broadcast pipeline.

[How-to Setup a Teradek VidiU Go for RTMP](/millicast/hardware-encoders/broadcasting-teradek-vidiu.md)  
The **Teradek VidiU Go** is a hardware encoder is capable of broadcast quality video that can be sent over RTMP for compatibility with Dolby.io broadcast workflows.

## Publish parameters

[Broadcast URL Parameters](/millicast/broadcast/broadcast-parameters.md)  
Publish parameters allow modifying broadcasting preferences to customize streaming experience in more complex workflows with multiple sources.

# Begin broadcasting

Web and mobile browsers are widely available and have wide encoding support, whether broadcasting from Chrome, Safari, Firefox, or Edge. To start broadcasting, see the [Getting Started with Broadcasting](/millicast/getting-started/index.md) guide.

You can also start broadcasting directly from the Dolby.io dashboard. For more information, see the following video:

<div style={{display: "flex", justifycontent: "center", alignitems: "center"}}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/I6tasX-C2_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>



# Learn more

You can find examples of using [Avid Media Composer](https://dolby.io/blog/collaborative-post-production-with-avid-media-composer/), [Larix Broadcaster](https://dolby.io/blog/broadcasting-mobile-native-webrtc-streams-with-the-larix-broadcaster/), and more on the [developer blog](https://dolby.io/blog/tag/broadcast/).

<div>
  <div class="small-text-only-btn-container">

    <a class="small-text-only-btn" href="https://github.com/orgs/dolbyio-samples/repositories?q=broadcast">
      <div class="model-card"><svg viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>Explore GitHub sample code</div>
    </a>    
      
    <a class="small-text-only-btn" href="https://dolby.io/blog/tag/broadcast/">
      <div class="model-card">Find related blog posts</div>
    </a>
      
  </div>
</div>

