# How to configure THEOplayer to play your low-latency HLS streams

This how-to-guide explains how to configure THEOplayer to play low-latency HLS (LL-HLS) streams. Low-Latency HLS streams conform to [Apple’s preliminary protocol extension to the HLS spec](https://developer.apple.com/documentation/http_live_streaming/protocol_extension_for_low-latency_hls_preliminary_specification?language=objc).

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     In Beta     |   In Beta   | In Beta  |      In Beta       |      N/A       |

## Prerequisites

1. Ensure the server which is serving your LL-HLS stream supports the HTTP/2 network protocol
2. Get a SSL certificate to secure your port and configure the port for HTTPS playback
3. Ensure your stream is LL-HLS optimized, where the following are strongly recommended:
	* 0.5s - 1s part
	* 6s segment
	* 2s GOP
	* preload hints and blocking playlist reload are enabled
	* ensure the clock between your client and server are correctly synchronized as EXT-X-PROGRAM-DATE-TIME (inserted into the stream by your server clock) should match your client device clock.

	**It is strongly recommended setting your server clock to synchronise with an NTP server, to prevent time drift.**

4. You would need a Web SDK of THEOplayer with the **LL-HLS** feature flag specified and a basic configuration to setup your environment. You can create an SDK by signing-in to the THEO Portal [Login Here](https://portal.theoplayer.com/login). Be sure to have THEOplayer version 2.65 or higher.
5. Setup a basic HTML file and include the THEOplayer library and Low latency HLS stream. You can also check: [How to get started with THEOplayer Web SDK](../../getting-started/01-sdks/01-web/00-getting-started.md)

## Enable Low-Latency

##### Web SDK
1. Specify your LL-HLS stream manifest as the ```src``` parameter in your source configuration (as shown in the below example)
2. Set the new flag ```lowLatency``` parameter to TRUE, in your source configuration (as shown in the below example)


```html
<script>
// LL-HLS
player.source = {
  sources : [{
    src : 'https://5d6e17f1ca731.streamlock.net/LowLatencyBBB/myStream/playlist.m3u8', // set the LL-HLS source
    type : 'application/x-mpegurl', // set the type to HLS
    lowLatency: true
  }]
};
</script>
```

## Resources
- [Getting started with the Web SDK](https://docs.portal.theoplayer.com/getting-started/01-sdks/01-web/00-getting-started.md)
- [Deliver Low-Latency HLS live streams using Wowza Streaming Engine and THEOplayer](../05-integrations/04-deliver-low-latency-hls-live-streams-with-wowza-streaming-engine.md)
