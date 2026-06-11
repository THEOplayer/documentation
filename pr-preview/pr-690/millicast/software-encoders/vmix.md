# vMix

**vMix** is a desktop application that provides a software vision mixer and encoder for the Windows operating system. It allows users to switch inputs, mix audio, record output, and live stream cameras, video files, audio, and more.

You can originate a broadcast from vMix and forward that stream over [RTMP](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md), [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md), or as an [NDI](/documentation/pr-preview/pr-690/millicast/broadcast/ndi.md) source.

* [Configure RTMP](#how-to-use-vmix-with-rtmp)
* [Configure SRT](#how-to-use-vmix-with-srt)
* [Configure NDI](#how-to-use-vmix-with-ndi)

See the official [vmix.com](https://vmix.com) site for documentation, installation instructions, and additional support.

## How-to use vMix with RTMP[​](#how-to-use-vmix-with-rtmp "Direct link to How-to use vMix with RTMP")

In order to broadcast with RTMP, you will need to have your **RTMP publish path** and **RTMP publish stream name** available.

See the [RTMP Broadcast Guide](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md#how-to-find-your-rtmp-publish-url) for details on how to retrieve these values.

### Configure a custom RTMP server[​](#configure-a-custom-rtmp-server "Direct link to Configure a custom RTMP server")

Within vMix, select the *Streaming Settings* menu to enter your publishing destination.

* **URL:** use your *RTMP publish path*
* **Stream Name or Key:** use your *RTMP publish stream name*

Set the **Application** to *FFMPEG*.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/vMix_RTMP_settings-5a5d32009fa8186f88ed2abfa4f2bfa5.png)

Select the Quality settings. Make sure the **Profile** is set to *Baseline*. You may experience stutters when using another profile.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/vMix2-eff3d29df163d6bbe703ea611d11d89c.png)

You can configure the other Audio and Video settings based on your preferences and network capacity.<br /><!-- -->Save your publishing profile and you are ready to start publishing with vMix.

### Setup multi-bitrate RTMP streaming with vMix[​](#setup-multi-bitrate-rtmp-streaming-with-vmix "Direct link to Setup multi-bitrate RTMP streaming with vMix")

With vMix you have the ability to send a live stream simultaneously to up to three separate streaming destinations. This vMix feature combined with OptiView Real-time Streaming [Multisource Streams](/documentation/pr-preview/pr-690/millicast/broadcast/multi-source-broadcasting.md) enables Simulcast of multiple renditions of the stream. Viewers with bandwidth constraints would receive a stream optimized for that condition. Keep in mind, the broadcaster will be sending multiple streams so will need adequate bandwidth.

Enable Multisource for Your OptiView Publish Token

To utilize [multisource](/documentation/pr-preview/pr-690/millicast/broadcast/multi-source-broadcasting.md) it must be enabled for the publish token. You can do this from the OptiView Real-time Streaming Dashboard. For more information, review [Managing Tokens](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md).

#### Streaming destination 1: 1080p[​](#streaming-destination-1-1080p "Direct link to Streaming destination 1: 1080p")

The first destination **URL** and **Stream Name** would remain much as it was configured in the previous section with a few adjustments.

* **sourceId=1**: add this query parameter to the Stream Name to differentiate from the other sources
* **simulcastId**: add this query parameter to indicate it should be a Simulcast stream

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/vMixMBR1-b02e0713f3a766ab872b6707b6330f4c.png)

You might also adjust the **Quality Settings** to use 1080p for this source.

| Name        | 1080p                                               |
| ----------- | --------------------------------------------------- |
| RTMP Server | rtmp\://live-rtmp-pub.millicast.com:1935/v2/pub/    |
| RTMP Key    | {StreamName}?token={Token}\&sourceId=1\&simulcastId |
| Encoder     | FFMPEG                                              |
| Resolution  | 1920x1080                                           |
| Bitrate     | 6000kbps or as shown 4500kbps                       |
| Keyframe    | 2                                                   |

#### Streaming destination 2: 720p[​](#streaming-destination-2-720p "Direct link to Streaming destination 2: 720p")

Select a second target destination. Update the **sourceId** to reflect that this is the second source.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/vMixMBR2-78647755aae01b5692aed2f4e5f5f004.png)

Adjust the quality settings to be a lower framerate, bitrate, and resolution to conserve bandwidth.

| Name        | 720p                                                           |
| ----------- | -------------------------------------------------------------- |
| RTMP Server | rtmp\://live-rtmp-pub.millicast.com:1935/v2/pub/               |
| RTMP Key    | {StreamName}?token={Token}\&sourceId=2\&simulcastId\&videoOnly |
| Encoder     | FFMPEG                                                         |
| Resolution  | 1280x720                                                       |
| Bitrate     | 2000kbps or as shown 1500kbps                                  |
| Keyframe    | 2                                                              |

#### Streaming destination 3: 360p[​](#streaming-destination-3-360p "Direct link to Streaming destination 3: 360p")

As with the other example, update the **sourceId** and adjust the quality settings to provide a constrained bandwidth solution.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/vMixMBR3-811f17b8a1558937c5201f5a323f2c58.png)

| Name        | 360p                                                           |
| ----------- | -------------------------------------------------------------- |
| RTMP Server | rtmp\://live-rtmp-pub.millicast.com:1935/v2/pub/               |
| RTMP Key    | {StreamName}?token={Token}\&sourceId=3\&simulcastId\&videoOnly |
| Encoder     | FFMPEG                                                         |
| Resolution  | 640x360                                                        |
| Bitrate     | 500kbps                                                        |
| Keyframe    | 2                                                              |

### Start and view streams[​](#start-and-view-streams "Direct link to Start and view streams")

In vMix click start all streams. You can then watch this stream from a [playback](/documentation/pr-preview/pr-690/millicast/playback.md) viewer. If you select the viewer settings, you can see that there are multiple Video Quality renditions available.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/vMixABR4-149c880cabbc92426d8da1fd6444a629.png)

## How-to use vMix with SRT[​](#how-to-use-vmix-with-srt "Direct link to How-to use vMix with SRT")

In order to broadcast with SRT, you will need to have your **SRT publish path** and **SRT stream ID** available.

See the [SRT Broadcast Guide](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md) for details on how to retrieve these values.

### vMix settings[​](#vmix-settings "Direct link to vMix settings")

1. Select the **Output / NDI / SRT** settings and configure an output by clicking the gear icon.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/vmix-srt-settings-264cd21e95356e532ffba6feab4582ea.png)

2. Check the `Enable SRT` setting.
3. Input the **SRT path** in for `Hostname`. The `Port` can be removed and put in the additional field.
4. Input the **SRT stream ID** in the `Stream ID` field.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/vmix-srt-settings-paths-62ecb9c1f0e456193fbe724edfb9c7bd.png)

It is recommended to set the `Quality` as **H264 1mbps AAC 0kbps (5 secs)**.

## How-to use vMix with NDI[​](#how-to-use-vmix-with-ndi "Direct link to How-to use vMix with NDI")

vMix can also be set as an [NDI](/documentation/pr-preview/pr-690/millicast/broadcast/ndi.md) source with [OBS](/documentation/pr-preview/pr-690/millicast/software-encoders/obs.md). This can give you the flexibility to use vMix as your switcher and OBS with WebRTC and playback in a [Hosted Player](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md).

To configure this, choose the Outputs / NDI / SRT configuration.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/vMix_NDI-b782320daa68809cd4b77ba2d9f59d27.png)

Network Traffic

It is recommended to use a hard-wired connection between NDI sources or a dedicated network with Quality of Service (QoS) enabled. You may observer 40 Mbps or more of network traffic with this type of configuration. This network traffic congestion and limited bandwidth can create issues with playback audio and/or video quality.
