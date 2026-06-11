# RTSP

**Real-Time Streaming Protocol (RTSP)**, is a network control protocol used for controlling the delivery of multimedia data, such as video and audio files, over IP networks. OptiView Real-time Streaming supports RTSP to facilitate seamless integration with existing infrastructure and workflows that rely on this protocol for streaming IP camera feeds.

## WebRTC support with RTSP[​](#webrtc-support-with-rtsp "Direct link to WebRTC support with RTSP")

With OptiView Real-time Streaming's support for RTSP, developers can leverage the use of the widely used protocol for controlling the quality and monitoring streaming multimedia content. One of the key features of RTSP is its ability to handle both live streaming and stored media, allowing users to access pre-recorded content as well as real-time broadcast. It also supports various codecs and media formats, providing flexibility in the types of media that can be streamed. OptiView Real-time Streaming includes guides supporting RTSP for the following:

<!-- -->

[![OBS](https://upload.wikimedia.org/wikipedia/commons/d/d3/OBS_Studio_Logo.svg)](/documentation/pr-preview/pr-690/millicast/software-encoders/obs.md)

[![FFMPEG](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/FFmpeg_Logo_new.svg/2560px-FFmpeg_Logo_new.svg.png)](/documentation/pr-preview/pr-690/millicast/software-encoders/ffmpeg.md)

[![LiveU](https://cdn-liveutv.pressidium.com/wp-content/uploads/2021/06/LiveU_Logo_On_Whtite.png)](/documentation/pr-preview/pr-690/millicast/software-encoders/liveu-studio.md)

[![GStreamer](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Gstreamer-logo.svg/2560px-Gstreamer-logo.svg.png)](/documentation/pr-preview/pr-690/millicast/software-encoders/gstreamer.md)

[![NDI](https://seeklogo.com/images/N/network-device-interface-logo-88C1BBB203-seeklogo.com.png)](/documentation/pr-preview/pr-690/millicast/broadcast/ndi.md)

## How-to support RTSP inside OBS-WebRTC[​](#how-to-support-rtsp-inside-obs-webrtc "Direct link to How-to support RTSP inside OBS-WebRTC")

Download and install [VLC](https://www.videolan.org/vlc/) media player and the latest version of [OBS-WebRTC](https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases).

Inside OBS-WebRTC, create a scene, and on the "+" icon of Sources, add a new Media Source.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-13_a_2.57.43_PM-6f3be5aaf062849164931dec42d86b15.png)

Unselect\* Local File\* on Input shows. Enter on *Input* the URL. Here is an example of an RTSP IP: `rtsp://admin:mypassword@YOUR_IP_ADDRESS/11`

Add your admin and password, followed by the IP address and the port or location of the video stream: `rtsp://[IP address of RTSP server]:[port]/live`

Afterward, start up the stream, and you should see live streaming the Hosted Player Path URL. For more information on how to stream from OBS to the OptiView Real-time CDNs, follow the dedicated [OBS guide](/documentation/pr-preview/pr-690/millicast/software-encoders/obs.md).

## How-to support RTSP using NDI on Windows[​](#how-to-support-rtsp-using-ndi-on-windows "Direct link to How-to support RTSP using NDI on Windows")

If you haven't already, begin by following the [NDI Getting Started](/documentation/pr-preview/pr-690/millicast/broadcast/ndi.md) tutorial to start your first broadcast with a NDI virtual picker. You'll need a familiarity with the OptiView Real-time Streaming Dashboard for the steps described below.

You can also use [NDI tools](https://ndi.video/tools/ndi-core-suite/) with a VLC plugin. The [VLC plugin](https://ndi.video/tools/vlc-plugin/) is available for Windows and allows you to set an RTSP IP camera as an NDI source. Once configured, you can use the OptiView Real-time Streaming Broadcaster and select the NDI source. This allows you to also publish using the AV1 codec.

## Learn more[​](#learn-more "Direct link to Learn more")

Learn more by exploring the [developer blog](https://optiview.dolby.com/resources/blog/tag/broadcast/) and [code samples](https://github.com/orgs/dolbyio-samples/repositories?q=broadcast).
