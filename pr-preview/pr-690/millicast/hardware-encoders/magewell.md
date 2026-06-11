# Magewell

[Magewell](https://www.magewell.com/) is a leading encoder manufacturer that supports connecting to the OptiView Real-time Streaming Service for broadcasting real-time streams. This guide outlines a number of different options for broadcasting streams from a Magewell device to the OptiView Real-time servers.

Getting Started

If you haven't already, begin by following the [Getting Started](/documentation/pr-preview/pr-690/millicast/getting-started.md) tutorial to start your first broadcast. You'll need your *RTMP publish path* and *RTMP publish stream name* for the steps described below.

See the official [Magewell site](https://www.magewell.com/support-contacts) for documentation, installation instructions, and additional support.

## Using the Ultra Encode to broadcast RTMP[​](#using-the-ultra-encode-to-broadcast-rtmp "Direct link to Using the Ultra Encode to broadcast RTMP")

The [Magewell Ultra Encode](https://www.magewell.com/ultra-encode) supports broadcasting RTMP streams, which can be ingested by the OptiView Real-time Streaming service.

To begin, first power on your Ultra Encode, connect it to the internet (Ethernet or WiFi), and connect your video capture device. Once connected, [log in](https://www.magewell.com/files/documents/User_Manual/ultra_encode_user_manual_en.pdf) to the Ultra Encode dashboard and navigate to the `Streaming Server` tab on the left side panel. Inside of `Streaming Server` click the `+ Add Server` button and select `RTMP`.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/rmtp-magewell-e5aaf33fc3cb7e83f23002fcf6d6e113.png)

Next, navigate to your [OptiView Real-time Streaming Dashboard](https://streaming.dolby.io/signin) and [gather your RTMP token credentials](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md#how-to-find-your-rtmp-publish-url). Add the `RTMP publish path` from your OptiView Real-time Streaming Dashboard to the `URL`, and add your `RTMP Publish Stream Name`, also from the OptiView Real-time Streaming Dashboard, to the `Stream key`.

Finally, select which network you'd like the encoder to use to connect, and save the settings.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/rtmp-dolby-magewell-8fd36728ca0bd1f2b87910027e3ea64d.png)

Once saved, make sure the stream is activated by toggling the server switch on the `Streaming Server` page.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/connect-magewell-fea18c6839cad94ce71acda788edb8a2.png)

With the stream enabled, you can navigate back to the main Dashboard page of the encoder and see your stream connect.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/connect-magewell-stream-6f042ec2e1e748dd69d16b08657f5f17.png)

## Using the Ultra Encode to broadcast SRT[​](#using-the-ultra-encode-to-broadcast-srt "Direct link to Using the Ultra Encode to broadcast SRT")

The [Magewell Ultra Encode](https://www.magewell.com/ultra-encode) supports broadcasting SRT streams, which can be ingested by the OptiView Real-time Streaming service.

To begin, first power on your Ultra Encode, connect it to the internet (Ethernet or WiFi), and connect your video capture device. Once connected, [log in](https://www.magewell.com/files/documents/User_Manual/ultra_encode_user_manual_en.pdf) to the Ultra Encode dashboard and navigate to the `Streaming Server` tab on the left side panel. Inside of `Streaming Server` click the `+ Add Server` button and select `SRT Caller`.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/srt-caller-c2cc2cd8eb6e389e4e35fa2ece192ac3.png)

Next, navigate to your [OptiView Real-time Streaming Dashboard](https://streaming.dolby.io/signin) and [gather your SRT token credentials](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md). Add the `SRT publish path` from your OptiView Real-time Streaming Dashboard to the `Address`, set the `Port` to `10000`, and add your `SRT Stream ID`, also from the OptiView Real-time Streaming Dashboard, to the `Stream ID`.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/srt-setup-7e59e3062a00bde3968b5917b812dbde.png)

Additionally, if you have `Passphrase encryption` enabled on the OptiView Real-time Streaming Dashboard, you can enable it on the encoder side by setting `Encryption` to `AES-128`.

Once saved, make sure the stream is activated by toggling the server switch on the `Streaming Server` page.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/srt-toggle-fb6cc10d75cf8f11107216107f2322df.png)

With the stream enabled, you can navigate back to the main Dashboard page of the encoder and see your stream connect.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/magewell-connected-30ca62018c2f978530e3e48a3774015d.png)
