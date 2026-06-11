# Teradek

**Teradek** is a designer and manufacturer of professional high-end video equipment and solutions for creating and sharing content. Teradek offers a range of support for different broadcast standards and protocols, including support for [RTMP, RTMPS](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md), [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md), and [NDI](/documentation/pr-preview/pr-690/millicast/broadcast/ndi.md), all of which can be distributed via the OptiView Real-time CDN.

Getting Started

If you haven't already, begin by following the [Getting Started](/documentation/pr-preview/pr-690/millicast/getting-started.md) tutorial to start your first broadcast. You'll need your *RTMP publish path* and *RTMP publish stream name* for the steps described below.

See the official [Teradek](https://teradek.com/) site for documentation, installation instructions, and additional support.

## Teradek[​](#teradek "Direct link to Teradek")

### How-to setup the VidiU for RTMP streaming[​](#how-to-setup-the-vidiu-for-rtmp-streaming "Direct link to How-to setup the VidiU for RTMP streaming")

To get started, you'll have to [login](https://streaming.dolby.io) to an OptiView Real-time account. Within the account, you'll need to create a token and copy RTMP publishing paths. You'll also have to download the [Vidiu or Teradek app](https://teradek.com/pages/vidiu-x) for your mobile device.

From your VidiU app on your mobile device, select `Device > Settings > Broadcast > Platform`. After Platform, select `RTMP(S)` at the bottom of the menu.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/teradek-vidiu1-bd77d33c8bcc75d2ebfc295eca9f1e04.png)

Select "Setup new Destination".

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/teradek-vidiu2-052e7a4c8dd75cb173f40b40003ab92e.png)

Enter your OptiView Real-time Streaming RTMP or RTMPS path, and your RTMP publish stream name:

* For example, RTMP would look similar to:
  <br />
  `rtmp://rtmp-auto.millicast.com:1935/v2/pub`
* For example, RTMPS would look similar to:
  <br />
  `rtmps://rtmp-auto.millicast.com:443/v2/pub`
* For example, StreamName would look similar to:
  <br />
  `myStreamName?token=3bc330607a15a0ecebebd8c9ee2a559fd143c937174bd276e213a96425bb107e`

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/teradek-vidiu3-f5050f252f208f685db514f94f460219.png)

With the credentials added, you're ready to start your broadcast. The stream can be started from the app or via the "broadcast" button on the physical Vidiu encoder.

To view the stream, navigate back to your newly created token and switch to the "Playback" tab. From the "Playback" tab, copy the "Hosted Player path" URL and open it in your browser as shown in [this video](https://www.youtube.com/watch?v=GRLIT_Xii3M).

### How-to setup the Teradek Wave for RTMP streaming[​](#how-to-setup-the-teradek-wave-for-rtmp-streaming "Direct link to How-to setup the Teradek Wave for RTMP streaming")

To get started, you'll have to [login](https://streaming.dolby.io) to an OptiView Real-time account. Within the account, you'll need to create a token and copy RTMP publishing paths. You'll also have to have your Teradek Wave in hand, ready to use.

* From your Teradek Wave, start by selecting `Create event > Device > Configure your event`and setting your Channel Name.
* Set the Server URL for RTMP as your RTMP publish path. For example:
  <br />
  `rtmp://rtmp-auto.millicast.com:1935/v2/pub`
  <br />
  *OR*
* Set the Server URL for RTMPS as your RTMPS publish path. For example:
  <br />
  `rtmps://rtmp-auto.millicast.com:443/v2/pub`
* Set the StreamName as your RTMP publish stream name. For example:
  <br />
  `myStreamName?token=3bc330607a15a0ecebebd8c9ee2a559fd143c937174bd276e213a96425bb107e`

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/teradek_wave-fc5936c350351d30a6bf05d71e9b904a.jpg)

You can also adjust the additional settings on the Teredak Wave, such as:

* Recording Settings
* Video Settings
* Audio Settings

To view the stream, navigate back to your newly created token and switch to the *Playback* tab. From the Playback tab, copy the *Hosted Player Path* URL and open it in your browser.

Teredak products that use [RTMP, RTMPS](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md), [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md), and [NDI](/documentation/pr-preview/pr-690/millicast/broadcast/ndi.md) can all be used with OptiView Real-time Streaming for low-latency streams with global delivery.
