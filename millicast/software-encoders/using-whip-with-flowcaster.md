---
title: "Drastic Technologies"
id: using-whip-with-flowcaster
---
Drastic Technologies' **FlowCaster** is a tool that enables cloud-based media workflows. FlowCaster makes it simple to use Dolby.io Real-time Streaming and the [WHIP (WebRTC HTTP Ingest Protocol)](/millicast/broadcast/webrtc-whip.md) with no additional software or hardware requirements.

The WebRTC-HTTP ingest protocol (WHIP) uses an HTTP POST request to perform a single shot SDP offer/answer so an ICE/DTLS session can be established between the Flowcaster encoder/media producer (WHIP client) and the Dolby.io Real-time Streaming broadcasting ingestion endpoint (media server).

> 👍 Getting Started
> 
> If you haven't already, begin by following the [Getting Started](/millicast/getting-started/index.md) tutorial to create a Dolby.io application and start your first broadcast. You'll need your _publish token_ and _stream name_ for the steps described below.

See the official [FlowCaster](https://www.drastic.tv/productsmenu-56/networkstreaminglist/flowcaster) site for documentation, installation instructions, and additional support.

# FlowCaster

## How-to use FlowCaster with WHIP

To start off, download the [latest version of FlowCaster](https://www.drastic.tv/productsmenu-56/networkstreaminglist/flowcaster). If you haven't done it yet, [create a Dolby.io account](https://dashboard.dolby.io/signup/) in order to access the stream token information needed. 


![](https://cdn.TODO.io/docs/readme/547b783-a51bd5e-Flowcaster-Millicast.png)



Once inside the streaming dashboard,[create a token](/millicast/streaming-dashboard/managing-your-tokens.md) in your Dolby.io dashboard. You will need the stream name and token for the stream label.


![](https://cdn.TODO.io/docs/readme/f71e8f6-flowcaster-whip-token.png)



Open FlowCaster and click on the Config tab. Update the following settings as shown. 


![](https://cdn.TODO.io/docs/readme/e582d74-FlowCaster_Whip.png)



Settings can be adjusted as needed. For this simple test, we will select the input as our desktop.  
FlowCaster can be used with many different input devices such as NIC IP video, [AJA encoders](https://www.aja.com/family/streaming), [BlackMagic](https://www.blackmagicdesign.com/products/blackmagicwebpresenter), Blue Fish, Ultrascope, Matrox,  Direct Show, and NDI. 


![](https://cdn.TODO.io/docs/readme/797cfcf-FlowCaster_Whip_2.png)



Select Enable on FlowCaster and open the Millicast viewer link:  
`<https://viewer.millicast.com/?streamId=TmJiwk/kwky3g6g>`


![](https://cdn.TODO.io/docs/readme/bf6ef7f-FlowCaster_Whip_3.png)



In this image, you can see the Flow tab on the left side of the screen with the local version of the stream and on the Millicast viewer stream on the right with the media statistics window open. The RTT (round trip time) is 22ms in this example.

FlowCaster is a perfect tool for video and audio professionals to use with their favorite NLEs and media editing tools, including:

[FlowCaster with Avid Media Composer](https://www.drastic.tv/support-59/supporttipstechnical/102-using-flowcaster-with-avid-mediacomposer) 

[FlowCaster with Adobe (Premiere, After Effects)](https://www.drastic.tv/support-59/supporttipstechnical/100-using-flowcaster-with-adobe-premiere-after-effects)

> 🚧 FlowCaster's Mac Version
> 
> The newest version of the MacOS doesn't support H264/AV1C, therefore, implementing WHIP as the transmit type is not possible. However, it is possible to broadcast low-delay [SRT](/millicast/broadcast/using-srt.md) or [RTMP](/millicast/broadcast/using-rtmp-and-rtmps.md) streams which are also supported by Dolby.io.

## Demonstration video

Below is a video showing the complete workflow to connect Flowcaster to the Dolby.io Real-time Streaming service using WebRTC and WHIP:

<div align="center">

<iframe width="560" height="315" src="https://www.youtube.com/embed/LHwiQPJo0QI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
