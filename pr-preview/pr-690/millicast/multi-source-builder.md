# Multi-source Builder

The **Multi-source** tab of the Streaming Dashboard is a tool to help you build and configure multiple publishing sources to enable simulcast or power a multi-view experience. You can add multiple [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md), [RTMP](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md) or [WebRTC](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md) sources and use the user-interface to configure multi-bitrate publishing. The Multi-source tab also includes a URL to launch the hosted player with the multi-viewer configuration, customizable `<iframe>` code to embed the hosted player into your webpage, and the ability to export your multi-source configuration as a file.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/builder-b77ff2af3ddfc132de3e0747a18b3521.png)

This guide covers the following:

* [Adding a Source](#adding-a-source)
* [Using the Multi-source Player](#multi-source-player)
* [Exporting a Multi-source File](#exporting-a-multi-source-file)

## Adding a source[​](#adding-a-source "Direct link to Adding a source")

Click the `Add a source` button to begin setting up multiple stream sources.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/add-source-1b2256f62125269e44bac6847a5149fe.png)

The **source name** should be a short and descriptive text label. This name will appear within the hosted player multi-view as audio and video sources that can be selected.

The **streaming protocol** helps identify the configuration needed for the broadcast. The multi-source builder supports [RTMP](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md), [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md), and [WHIP](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md) broadcast protocols.

By default, the first source you add will be labeled as the *Main* source. OptiView Real-time Streaming limits the aggregate bitrate of all sources to 12 Mbps. The main source is prioritized and allowed to exceed the 12 Mbps limit, and the other sources share any remaining available bandwidth. See the [Multi-view](/documentation/pr-preview/pr-690/millicast/playback/multiview.md#limitations-of-multi-view) guide for examples of bandwidth allocation.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/test-sources-a3d9a1d3fb94dfa34ea2df146d82259d.png)

## Source details[​](#source-details "Direct link to Source details")

By selecting a source, the configuration details and available settings will be displayed. This varies depending on the capabilities of the protocol.

* [RTMP](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md): The *RTMP/s publish paths* and *RTMP publish stream name* can be used for publishing streams with RTMP-compatible software and hardware.
  <!-- -->
  * RTMP multi-bitrate can be enabled from this section. When enabled, the dashboard will create three RTMP publish stream names for **low** bitrate, **medium** bitrate, and **high** bitrate.
* [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md): The *SRT publish path*, *SRT stream ID*, and *SRT publish URL* can be used for publishing with SRT-compatible software and hardware.
  <!-- -->
  * Passphrase encryption can be enabled from this section. When enabled, the dashboard will generate a passphrase for encrypting the SRT stream.
* [WHIP](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md): The *WHIP endpoint* and *Bearer token* can be used to publish a WebRTC stream with WebRTC-compatible software and hardware.

### Quality layers[​](#quality-layers "Direct link to Quality layers")

For RTMP and SRT sources, you can specify one or more quality layers. Quality layers allows for quality selection when multi-bitrate (simulcast) is used for playback. **Multi-bitrate delivery** allows for adaptive quality RTMP and SRT streams. These streams are selected based on the viewer's available bandwidth and provide a more stable streaming experience. For more information see, [Simulcast](/documentation/pr-preview/pr-690/millicast/distribution/using-webrtc-simulcast.md).

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/rtmp-source-2c1b1bd3103ed297035a36fd4f60d37d.png)

To learn more about publishing and broadcasting with OptiView Real-time Streaming, check out the [Broadcast](/documentation/pr-preview/pr-690/millicast/broadcast.md) guide, which provides more in-depth resources and examples on how to use the Publish token once it is created.

## Multi-source player[​](#multi-source-player "Direct link to Multi-source player")

You can use the multi-source hosted player, which is a streaming video player, as a standalone web application or embed it into your website with an `<iframe>`. The player is similar to the [Live Broadcast](/documentation/pr-preview/pr-690/millicast/how-to-broadcast-in-dashboard.md) application in the dashboard but is for the audience to use to view the published multi-source stream. For more information, see the [Hosted Player](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md) guide.

You can use the [Hosted Player](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md) with multi-view enabled to verify your multi-source setup. This streaming video player can be used as a standalone web application or embedded into your website. By copying the **Multi-view player URL** or **Hosted embedded player** code it will already be properly configured for this type of multi-source playback.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/multi-source-player-54fd6877d0371521ee6dfe3007294038.png)

The embedded player is compatible whether using a CMS like Drupal or Wordpress or more complex custom JavaScript web applications built with frameworks like React, VueJS, or Angular. For more information, see [How to embed the hosted player in a website](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md#how-to-embed-the-hosted-player-in-a-web-site).

## Exporting a multi-source file[​](#exporting-a-multi-source-file "Direct link to Exporting a multi-source file")

You can download your multi-source file, which includes the multi-source hosted player path URL, and publishing URLs for each source and associated quality layer. The exported file can be used to transfer the configuration to multiple devices. For example, an administrator can create the stream, and hand off the configuration file to an operator to set up the encoder.

To export the multi-source file, click the `Export all` button and click the copy icon or `Download` to save your multi-source configuration.
