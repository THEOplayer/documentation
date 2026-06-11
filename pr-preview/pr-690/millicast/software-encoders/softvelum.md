# Softvelum

**Softvelum** provides software solutions for streaming media on mobile devices such as iOS and Android. There is support for both [WHIP](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md) and [SRT](/documentation/pr-preview/pr-690/millicast/about-dash.md) workflows.

* [Configure WHIP](#how-to-use-larix-broadcaster-with-whip)
* [Configure SRT](#how-to-use-larix-broadcaster-with-srt)

See the official [Softvelum](https://softvelum.com/larix/) site for documentation, installation instructions, and additional support.

## Larix Broadcaster[​](#larix-broadcaster "Direct link to Larix Broadcaster")

Download the Larix Broadcaster from the App Store for your mobile device ([iOS](https://softvelum.com/larix/ios/), [Android](https://softvelum.com/larix/android/)). It supports H.264 video and Opus audio.

### How-to use Larix Broadcaster with WHIP[​](#how-to-use-larix-broadcaster-with-whip "Direct link to How-to use Larix Broadcaster with WHIP")

As described in the [WHIP](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md) guide you will need your **WHIP endpoint** and **Publishing token**.

1. Open the Larix Broadcaster **Settings**.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/larix-1-90c9c0ce6b68f4da43c278547e045caf.png)

2. Select **Connections** and click the `+` button to add a *New WebRTC connection*.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/larix-2-2f96418e689b9d66022ca2ff38fa4ec6.png)

3. Given the connection a name and set the `URL` to your **WHIP endpoint**. You will also set `Authentication` to **WHIP** and for the `Token` use your **Publishing token** from the [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md).

### How-to use Larix Broadcaster with SRT[​](#how-to-use-larix-broadcaster-with-srt "Direct link to How-to use Larix Broadcaster with SRT")

As described in the [SRT](/documentation/pr-preview/pr-690/millicast/about-dash.md) guide you will need your **SRT publish path** and **SRT stream ID**.

1. Open the Larix Broadcaster **Settings**. This is similar to the screenshot shown above under the WHIP setup instructinos.
2. Select **Connections** and click the `+` button to add a new connection.
3. Set the `URL` to the **SRT publish path**.
4. Set the `streamid` to your **SRT stream ID**.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/larix-3-d6e215b8f74771fa20d60dfc98e6b95c.png)

Exit the settings and you can start the stream by pressing the record / start button on the broadcaster.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/larix-4-2987eb555d439242202974ce8ec8fca6.png)
