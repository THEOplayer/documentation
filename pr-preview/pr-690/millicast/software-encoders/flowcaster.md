# Drastic Technologies

Drastic Technologies' **FlowCaster** is a tool that enables cloud-based media workflows. FlowCaster makes it simple to use OptiView Real-time Streaming and the [WHIP (WebRTC HTTP Ingest Protocol)](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md) with no additional software or hardware requirements.

The WebRTC-HTTP ingest protocol (WHIP) uses an HTTP POST request to perform a single shot SDP offer/answer so an ICE/DTLS session can be established between the Flowcaster encoder/media producer (WHIP client) and the OptiView Real-time Streaming broadcasting ingestion endpoint (media server).

See the official [FlowCaster](https://www.drastic.tv/productsmenu-56/networkstreaminglist/flowcaster) site for documentation, installation instructions, and additional support.

## FlowCaster[​](#flowcaster "Direct link to FlowCaster")

### How-to use FlowCaster with WHIP[​](#how-to-use-flowcaster-with-whip "Direct link to How-to use FlowCaster with WHIP")

To start off, download the [latest version of FlowCaster](https://www.drastic.tv/productsmenu-56/networkstreaminglist/flowcaster). If you haven't done it yet, [create an OptiView Real-time account](https://streaming.dolby.io) in order to access the stream token information needed.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/a51bd5e-Flowcaster-Millicast-9e16fac222a113c92030a20709feb6cc.png)

Once inside the streaming dashboard,[create a token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md) in your OptiView Real-time Streaming Dashboard. You will need the stream name and token for the stream label.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/flowcaster-whip-token-53d6a9dadc33ab08fe99e6a94f315abc.png)

Open FlowCaster and click on the Config tab. Update the following settings as shown.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/FlowCaster_Whip-090edb3e0df223475c1246b79c239684.png)

Settings can be adjusted as needed. For this simple test, we will select the input as our desktop.<br /><!-- -->FlowCaster can be used with many different input devices such as NIC IP video, [AJA encoders](https://www.aja.com/family/streaming), [BlackMagic](https://www.blackmagicdesign.com/products/blackmagicwebpresenter), Blue Fish, Ultrascope, Matrox, Direct Show, and NDI.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/FlowCaster_Whip_2-e40aafe65d3f419d90e63670015f6f69.png)

Select Enable on FlowCaster and open the Millicast viewer link:

```text
https://viewer.millicast.com/?streamId=ACCOUNT_ID/STREAM_NAME

```

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/FlowCaster_Whip_3-56e7d424f54d0848af21bbbfd74fa5a8.png)

In this image, you can see the Flow tab on the left side of the screen with the local version of the stream and on the Millicast viewer stream on the right with the media statistics window open. The RTT (round trip time) is 22ms in this example.

FlowCaster is a perfect tool for video and audio professionals to use with their favorite NLEs and media editing tools, including:

[FlowCaster with Avid Media Composer](https://www.drastic.tv/support-59/supporttipstechnical/102-using-flowcaster-with-avid-mediacomposer)

[FlowCaster with Adobe (Premiere, After Effects)](https://www.drastic.tv/support-59/supporttipstechnical/100-using-flowcaster-with-adobe-premiere-after-effects)

FlowCaster's Mac Version

The newest version of the MacOS doesn't support H264/AV1C, therefore, implementing WHIP as the transmit type is not possible. However, it is possible to broadcast low-delay [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md) or [RTMP](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md) streams which are also supported by OptiView Real-time Streaming.

### Demonstration video[​](#demonstration-video "Direct link to Demonstration video")

Below is a video showing the complete workflow to connect Flowcaster to the OptiView Real-time Streaming service using WebRTC and WHIP:

[YouTube video player](https://www.youtube.com/embed/LHwiQPJo0QI)
