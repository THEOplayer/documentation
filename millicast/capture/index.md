---
title: "Capture"
slug: /capture
---
To broadcast content, you either need a physical camera capturing the content, a virtual camera from a game engine, or a source of content available via other content creation tools such as OBS or Adobe Premiere.

Many devices are able to capture a compatible media stream encoding that is ready for [broadcast](/millicast/broadcast/index.md);

<div style={{marginLeft: "20px"}}>

✓ **SDI & HDMI**, Serial Digital Interface (SDI) and High-Definition Multimedia Interface (HDMI) connections are common across many professional capture devices

✓ **NDI**, Network Device Interface, is a free protocol for Video over IP that is supported by video mixers, capture cards, and other devices

✓ **RTSP**, Real-time Streaming Protocol, is commonly supported in media streaming servers that capture and process video and audio feeds

In facilitating efficient and reliable transmission of multimedia content over networks, Dolby.io CDN ingests streams in WebRTC, RTMP and RTMPs, and SRT. 

</div>

Check with your specific hardware provider for direct support of WebRTC or one of these common device interfaces.

# Start building

<div class="dolbyio-cards-container" style={{width: "50%"}}>
  
  <a class="dolbyio-card dolbyio-card-1" href="/streaming-apis/docs/getting-started">
    <div class="dolbyio-card-image">
      <img width="40px" class="dolbyio-card-svg-icon" src="https://files.readme.io/dde6508-GettingStarted-default.svg"/>
    </div>
    <div class="dolbyio-card-header">Getting Started</div>
    <div class="dolbyio-card-description">
      Quick start for capturing video using the Dolby.io dashboard.
    </div>
  </a>
  
</div>




# Capture streaming content

To begin real-time streaming, you will need to capture a live video feed from a physical or virtual camera.

## Physical cameras

Any physical camera that supports standard interfaces like SDI, HDMI, NDI or RTSP can be used as a capture device. Below you'll find guides for some of the more common hardware devices being used to stream content. 

[Getting Started with Web Capture](/millicast/getting-started/introduction-to-streaming-apis.md)  
The **Millicast Web SDK** enables many popular web browsers to capture a video feed from a built-in camera or webcam that is connected to a computer system such as a Mac, Windows PC, or Linux desktop.

[How-to Stream from DJI Drones](/millicast/capture/live-streaming-from-drones-rtmp.md)  
**DJI** creates a number of devices such as the Phantom or Mavic that let you stream directly from the drone to Dolby.io with RTMP.

[How-to Stream from a GoPro](/millicast/capture/action-cameras.md)  
**GoPro** is a leading device used for capturing action footage. The latest cameras allow you to stream direct from the device to Dolby.io with RTMP.

## Virtual cameras

[How-to use NDI® Tools](/millicast/broadcast/using-ndi.md)  
**NDI® Tools** is a free suite of applications that makes it possible to connect to a remote IP camera device and capture video that can be sent for broadcasting.

[How-to Stream Your Screenshare](/millicast/capture/screensharing.md)  
Screen capture allows sharing the contents of a window, application, or entire computer display.

[How-to use OBS with WebRTC](/millicast/software-encoders/using-obs.md)  
**Open Broadcaster Software (OBS)** is free and open source software is popular for cross-platform streaming. You will need to download a custom version of OBS that has been extended to provide WebRTC support.

<div style={{display: "flex", justifycontent: "center", alignitems: "center"}}>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/jUP4vyzbu5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>



# Learn more

<div>
  <div class="small-text-only-btn-container">
    <a class="small-text-only-btn" href="https://github.com/orgs/dolbyio-samples/repositories?q=capture">
      <div class="model-card"><svg viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>Explore GitHub sample code</div>
    </a>    
    <a class="small-text-only-btn" href="https://dolby.io/blog/tag/capture/">
      <div class="model-card">Find related blog posts</div>
    </a>
  </div>
</div>








