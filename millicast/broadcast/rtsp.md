---
title: "RTSP"
id: rtsp
---
**Real-Time Streaming Protocol (RTSP), is a network control protocol used for controlling the delivery of multimedia data, such as video and audio files, over IP networks. Dolby.io supports RTSP to facilitate seamless integration with existing infrastructure and workflows that rely on this protocol for streaming IP camera feeds. 

# WebRTC support with RTSP

With Dolby.io's support for RTSP, developers can leverage the use of the widely used protocol for controlling the quality and monitoring streaming multimedia content. One of the key features of RTSP is its ability to handle both live streaming and stored media, allowing users to access pre-recorded content as well as real-time broadcast. It also supports various codecs and media formats, providing flexibility in the types of media that can be streamed. Dolby.io includes guides supporting RTSP for the following:

<div class="small-image-and-text-btn-container">
 	<a href="./using-obs" class="small-image-and-text-btn">
    <div class="obs-inner-container">
      <div align="center">
      <img class="logo-obs" src="https://upload.wikimedia.org/wikipedia/commons/1/14/Open_Broadcaster_Software_Logo.png"/>
      </div>
      <div class="small-image-and-text-btn-title"> OBS </div>
    </div>
  </a>
  
  <a href="./using-ffmpeg" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        <img class="gray-svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/FFmpeg_Logo_new.svg/2560px-FFmpeg_Logo_new.svg.png"/>
      </div>
      <div class="small-image-and-text-btn-title"> </div>
    </div>
  </a>

  <a href="./liveu-studio-using-whip" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
      <img class="gray-svg" src="https://cdn-liveutv.pressidium.com/wp-content/uploads/2021/06/LiveU_Logo_On_Whtite.png"/>
      </div>
      <div class="small-image-and-text-btn-title"> </div>
    </div>
  </a> 
  
  <a href="./using-whip-with-gstreamer" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
      <img class="gray-svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Gstreamer-logo.svg/2560px-Gstreamer-logo.svg.png"/>
      </div>
      <div class="small-image-and-text-btn-title"> </div>
    </div>
  </a>
  
  <a href="./using-ndi" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
      <img class="gray-svg" src="https://seeklogo.com/images/N/network-device-interface-logo-88C1BBB203-seeklogo.com.png"/>
      </div>
      <div class="small-image-and-text-btn-title"> </div>
    </div>
  </a>
  


  <!--
  <a href="./broadcasting-jitsi-or-zoom-meetings" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
      <img class="gray-svg" src="https://logos-world.net/wp-content/uploads/2021/03/Zoom-Logo.png"/>
      </div>
      <div class="small-image-and-text-btn-title"> </div>
    </div>
  </a>    
  -->
  
</div>



## How-to support RTSP inside OBS-WebRTC

Download and install [VLC](https://www.videolan.org/vlc/) media player and the latest version of [OBS-WebRTC](https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases). 

Inside OBS-WebRTC, create a scene, and on the "+" icon of Sources, add a new Media Source.


![](/img/millicast/Capture_decran_2023-07-13_a_2.57.43_PM.png)



Unselect_ Local File_ on Input shows. Enter on _Input_ the URL. Here is an example of an RTSP IP: `rtsp://admin:mypassword@YOUR_IP_ADDRESS/11`

Add your admin and password, followed by the IP address and the port or location of the video stream: `rtsp://[IP address of RTSP server]:[port]/live`

Afterward, start up the stream, and you should see live streaming the Hosted Player Path URL. For more information on how to stream from OBS to the Dolby.io CDNs, follow the dedicated [OBS guide](/millicast/software-encoders/using-obs.md).

## How-to support RTSP using NDI on Windows

If you haven't already, begin by following the [NDI Getting Started](/millicast/broadcast/using-ndi.md) tutorial to start your first broadcast with a NDI virtual picker. You'll need a familiarity with the Dolby.io Streaming Dashboard for the steps described below.

You can also use [NDI tools](https://ndi.video/tools/ndi-core-suite/) with a VLC plugin. The [VLC plugin](https://ndi.video/tools/vlc-plugin/) is available for Windows and allows you to set an RTSP IP camera as an NDI source. Once configured, you can use the Dolby.io Streaming Broadcaster and select the NDI source. This allows you to also publish using the AV1 codec. 

# Learn more

Learn more by exploring the [developer blog](https://dolby.io/blog/tag/broadcast/) and [code samples](https://github.com/orgs/dolbyio-samples/repositories?q=broadcast).




