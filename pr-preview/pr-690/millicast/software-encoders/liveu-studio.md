# LiveU

[LiveU Studio](https://www.liveu.tv/products/produce/liveu-studio) is a cloud production studio for live video that supports WebRTC streaming to the OptiView Real-time platform with [WHIP](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md). This guide outlines how to create and broadcast a high-quality low-latency stream globally with OptiView Real-time Streaming.

See the official [LiveU Studio](https://www.liveu.tv/support) site for documentation, installation instructions, and additional [support](https://knowledge-base.studio.liveu.tv/en/).

## How-to use LiveU with WHIP[​](#how-to-use-liveu-with-whip "Direct link to How-to use LiveU with WHIP")

To get started, [create a token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md) in your OptiView Real-time Streaming Dashboard. On the Publishing tab of the newly created token, copy the WHIP endpoint URL and your Publishing token as shown in the [WebRTC | WHIP guide](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md).

Open LiveU Studio and click on "PUBLISH" in the left-side menu. Click on "ADD OR EDIT PUBLISHING POINTS".

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/liveustudio_1-0ffda77a2dbf68aa0733771d4d9b8c8c.png)

Select "WHIP" from the menu and Click "+ ADD PUBLISHING POINT".

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/liveustudio_2-1b976fce719e0c9557ff6cd172a22015.png)

Paste the WHIP endpoint URL and your Publishing token copied from the OptiView Real-time Streaming Dashboard. Save the publishing point and select it.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/liveustudio_3-e08044002281e189c81c75000724359b.png)

Click "START TEST" from LiveU Studio.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/liveustudio_4-137d89b664c1f49a99070b69bd2af027.png)

Click "START PUBLISHING AND RECORD" to start publishing from LiveU Studio to OptiView Real-time Streaming.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/liveustudio_5-28b5fb257b4fde494409d46cda66a431.png)

LiveU Studio will publish to the OptiView Real-time Streaming service using WHIP. To view the stream, navigate back to your newly created token and switch to the "Playback" tab. From the "Playback" tab, copy the "Hosted Player path" URL and open it in your browser.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/liveustudio_6-9f2ef9b1207eeec3fce9b28788913e1a.png)

Your LiveU broadcast should now be playing in your browser.

Publishing Bitrates

LiveU Studio recommends publishing to the OptiView Real-time Streaming service with a max bitrate of 4 Mbps. A bitrate of 4 Mbps up to 6 Mbps may cause instabilities or artifacts. A bitrate above 6 Mbps may cause visible problems and/or your stream will not start.

## Learn more[​](#learn-more "Direct link to Learn more")

Learn more by exploring the [developer blog](https://optiview.dolby.com/resources/blog/tag/broadcast/) and [code samples](https://github.com/orgs/dolbyio-samples/repositories?q=broadcast).
