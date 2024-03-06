# Deliver Low-Latency HLS live streams using Wowza Streaming Engine and THEOplayer

Wowza Streaming Engine™ media server software version 4.7.8 and later together with THEOplayer version 2.65 and later can deliver Low-Latency HLS (LL-HLS) live streams.

Low-Latency HLS streams conform to [Apple’s preliminary protocol extension to the HLS spec](https://developer.apple.com/documentation/http_live_streaming/protocol_extension_for_low-latency_hls_preliminary_specification?language=objc).

### Table of Contents

- [SDKs](#sdks)
- [How to set up THEOplayer with Wowza Streaming Engine For LL-HLS](#how-to-set-up-theoplayer-with-wowza-streaming-engine-for-ll-hls)
  - [Prerequisites](#prerequisites)
  - [Configure a live application to deliver LL-HLS streams](#configure-a-live-application-to-deliver-ll-hls-streams)
  - [Configure THEOplayer to play your LL-HLS stream](#configure-theoplayer-to-play-your-ll-hls-stream)
- [Conclusion](#conclusion)
- [Resources](#resources)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |   In Beta   | In Beta | In Beta  |    In Beta     |      N/A       |

## How to set up THEOplayer with Wowza Streaming Engine For LL-HLS

### Prerequisites

There are three prerequisites in order to continue with this guide:

1. In order to generate LL-HLS streams, you must first get a SSL certificate to secure your port and configure the port for HTTPS playback. LL-HLS playback does not work without an SSL secured port. For information on how to do this, refer to [How to Get an SSL Certificate from Wowza's Streamlock Service](https://www.wowza.com/docs/how-to-get-ssl-certificates-from-the-streamlock-service).

2. This guide expects that you have a THEOplayer license. If you are not using THEOplayer yet, you can start your free trial [here](https://portal.theoplayer.com/). In addition, you will need a specify the **LL-HLS** feature flag when generating your SDK. Be sure to have THEOplayer version 2.65 or higher.

3. This guide expects that you are a Wowza Streaming Engine client and that you are integrated with their streaming infrastructure. Information on Wowza Streaming Engine can be found [here](https://www.wowza.com/docs/wowza-streaming-engine-product-articles/). Be sure to have Wowza Streaming Engine media server software version 4.7.8 or higher.

**Please Note:** Wowza occasionally update their documentation, which can be accessed [here](https://www.wowza.com/docs/deliver-apple-low-latency-hls-live-streams-using-wowza-streaming-engine).

### Configure a live application to deliver LL-HLS streams

You can use the default **live** application that installs with Wowza Streaming Engine or create and use a new **Live** or **Live HTTP Origin** application. Use the **Live** application type for sending streams from Wowza Streaming Engine to clients or Wowza Streaming Engine edges. Use the **Live HTTP Origin** application type to connect to a CDN edge, such as the Fastly CDN, that can pull streams from the Wowza Streaming Engine origin application.

The following steps use the default **live** application to enable LL-HLS live streaming by editing the **Application.xml** and **VHost.xml** configuration files.

You can use the default live application that installs with Wowza Streaming Engine or create and use a new Live or Live HTTP Origin application. Use the Live application type for sending streams from Wowza Streaming Engine to clients or Wowza Streaming Engine edges. Use the Live HTTP Origin application type to connect to a CDN edge, such as the Fastly CDN, that can pull streams from the Wowza Streaming Engine origin application.

The following steps use the default **live** application to enable LL-HLS live streaming by editing the **Application.xml** and **VHost.xml** configuration files.

**Please Note:** If you're trying to use the CMAF packetizer to deliver LL-HLS and HLS or MPEG-DASH streams, you must use two separate live applications: one configured specifically for LL-HLS and another for CMAF-packetized HLS and MPEG-DASH.

#### Enable LL-HLS in Wowza Streaming Engine XML

The following steps enable transmuxing for CMAF packetization for LL-HLS delivery.

1. Navigate to **[install-dir]/conf/live** or **[install-dir]/conf/[custom live application]** and open the **Application.xml** file in a text editor.
2. Add **cmafstreamingpacketizer** to the **LiveStreamPacketizers** property. You can add it to the prepopulated comma-separated list, or it can be the only packetizer specified. The XML looks like this:

```xml
<Streams>
    ...
    <LiveStreamPacketizers>cmafstreamingpacketizer</LiveStreamPacketizers>
    ...
</Streams>
```

**Please Note:** If you enable **cupertinostreamingpacketizer** and **cmafstreamingpacketizer**, Wowza Streaming Engine generates both MPEG-TS segments (using **cupertinostreamingpacketizer**) and fMP4 segments (using **cmafstreamingpacketizer**).

3. Add the **cmafLLEnableLowLatency** property to the **LiveStreamPacketizer** container element and set it to true.

```xml
<LiveStreamPacketizer>
    <Properties>
        <Property>
            <Name>cmafLLEnableLowLatency</Name>
            <Value>true</Value>
            <Type>Boolean</Type>
        </Property>
    </Properties>
</LiveStreamPacketizer>
```

4. For the **HTTPStreamers** property, make sure HLS (**cupertinostreaming**) is specified. The XML looks like this:

```xml
<HTTPStreamers>cupertinostreaming</HTTPStreamers>
```

5. Go to **\[install-dir]/conf/** and open the **VHost.xml** file in a text editor.

6. Add the `AllowHttp2` property to the `<SSLConfig>` container element in the `<HostPort>` you configured for SSL/TLS and set it to true.

```xml
<SSLConfig>
    ...
    <AllowHttp2>true</AllowHttp2>
    ...
</SSLConfig>
```

7. Save your changes.

Your live application is now configured to deliver LL-HLS streams.

#### Configure optional low latency partial segment properties and media playlist property

Configuring the following properties is optional as Wowza Streaming Engine will use the property's default value for any of the properties that you do not configure. You can configure the optional LL-HLS properties by editing the **Application.xml** file for your LL-HLS live stream application. For information about configuring custom (optional) properties, see [Add custom properties](https://www.wowza.com/docs/add-a-custom-property#add-custom-properties).

##### Low latency CMAF property reference

You can configure any of these optional **LiveStreamPacketizer** properties for the LL-HLS segments and video and audio partial segments (chunks) in the **Application/LiveStreamPacketizer/Properties** container element.

**Please Note:** If partial segments are too small, servers can become overloaded with frequent media playlist requests and cause playback to be less reliable.

| Name                                                                                                                                                          | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **cmafLLChunkingScheme**                                                                                                                                      | String  | Specifies the chunking scheme for low latency CMAF-packetized streams. Valid values are **byFrame** or **byDuration**. The default is **byDuration**. If the value is **byDuration**, packetization is configured using the **cmafLLChunkDurationTargetAudio** and **cmafLLChunkDurationTargetVideo** properties. If the value is **byFrame**, packetization is configured using the **cmafLLChunkFrameCountTargetAudio** and **cmafLLChunkFrameCountTargetVideo** properties. |
| **cmafLLChunkDurationTargetAudio**                                                                                                                            | Integer | Specifies, in milliseconds, the target duration of each low latency CMAF **audio** chunk. The default is **1000** and is recommended. The duration cannot exceed the [cmafSegmentDurationTarget](https://www.wowza.com/docs/deliver-apple-low-latency-hls-live-streams-using-wowza-streaming-engine#cmafsegmentdurationtarget) value. This property is only available if **cmafLLChunkingScheme** is **byDuration**.                                                           |
| **cmafLLChunkDurationTargetVideo**                                                                                                                            | Integer | Specifies, in milliseconds, the target duration of each low latency CMAF **video** chunk. The default is **1000** and is recommended. The duration cannot exceed the [cmafSegmentDurationTarget](https://www.wowza.com/docs/deliver-apple-low-latency-hls-live-streams-using-wowza-streaming-engine#cmafsegmentdurationtarget) value. This property is only available if **cmafLLChunkingScheme** is **byDuration**.                                                           |
| **cmafLLChunkFrameCountTargetAudio**                                                                                                                          | Integer | Specifies the target number of audio frames to include in each low latency CMAF audio chunk. The default is **47** and is recommended. This property is only enabled if **cmafLLChunkingScheme** is **byFrame**.                                                                                                                                                                                                                                                               |
| **cmafLLChunkFrameCountTargetAudio**                                                                                                                          | Integer | Specifies the target number of audio frames to include in each low latency CMAF audio chunk. The default is **30** and is recommended. This property is only enabled if **cmafLLChunkingScheme** is **byFrame**.                                                                                                                                                                                                                                                               |
| **[cmafSegmentDurationTarget](https://www.wowza.com/docs/configure-cmaf-packetization-in-wowza-streaming-engine#cmaf-live-packetization-property-reference)** | Integer | Specifies, in milliseconds, the duration of the fMP4 segments in the stream. The default is **6000** (6 seconds) and is recommended. This property is configurable from the **CMAFStreamingPacketizer** properties section in Wowza Streaming Engine Manager.                                                                                                                                                                                                                  |

##### Advanced LL-HLS property reference

For advanced tuning, you can configure the following optional **HTTPStreamer** property in the **Application/HTTPStreamer/Properties** container element.

| Name                                    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cupertinoPartHoldBack (4.8.0 and later) | Double | Specifies, in floating-point seconds, the server-recommended minimum distance from the live edge at which clients should begin to play or seek in a LL-HLS stream (the PART-HOLD-BACK attribute in media playlists). If you do not configure this property, Wowza Streaming Engine uses the default value, which is recommended. The default value is calculated as three times the maximum value of PART-TARGET out of all of a stream's variant media playlists. **Please Note:** PART-TARGET is an attribute of the EXT-X-PART-INF tag in media playlists and is based on the target values set with the **cmafLLChunkDurationTargetVideo** and **cmafLLChunkDurationTargetAudio** properties or the **cmafLLChunkFrameCountTargetVideo** and **cmafLLChunkFrameCountTargetAudio** properties. Wowza Streaming Engine will adjust the PART-HOLD-BACK value to be equal to the maximum value of PART-TARGET (across all variant media playlists) if you set this property to less than a partial segment duration. |

##### Transcoding considerations for LL-HLS

To bypass encoding streams with Transcoder, source streams should meet the following encoding recommendations. Otherwise, transcoding is recommended. Although a small amount of latency is introduced with transcoding, if your source stream does not meet the encoding recommendations, transcoding will ultimately improve reliability of LL-HLS streaming.

###### Encoding recommendations

- CMAF-supported codecs (required)

| Video          | Audio                                                                                                                                                                           |
| -------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| - H.264, H.265 | - AAC, AAC-LC, HE-AAC (AAC+ or aacPlus), <br/>- HE-AACv2 (enhanced AAC+, aacPlus v2) - Dolby Digital 5.1 Surround Sound (AC-3) and Dolby Digital Plus (Enhanced AC-3 or E-AC-3) |

- GOP size: 1 or 2 seconds
- Closed GOPs
- H.264 and H.265 byte streams contain metadata about the GOP structure
- Constant frame rate video

A stream configured for transcoding and LL-HLS delivery cannot use **Passthrough** for the **Video Codec** of a stream rendition but not other renditions of the same stream. If you use **Passthrough** to pass a video source through to output without making any changes for any **Video Codec** in a stream's renditions, all of the video codecs must be set to **Passthrough**.

Stream name groups (NGRP) are not supported with LL-HLS. To group multiple stream renditions for LL-HLS, you need to create a SMIL file in accordance with CMAF HLS. See [Set up adaptive bitrate CMAF streaming](https://www.wowza.com/docs/create-adaptive-bitrate-cmaf-streams-using-wowza-streaming-engine#set-up-adaptive-bitrate-cmaf-streaming) for how to do this.

##### Scale LL-HLS with a CDN

Optionally, with your own CDN account, you can scale LL-HLS delivery by connecting a Wowza Streaming Engine **Live HTTP Origin** application to a CDN edge that can pull streams from the Wowza Streaming Engine origin application, such as the Fastly CDN.

To connect the **Live HTTP Origin** application to your CDN, provide the IP address or hostname of the Wowza Streaming Engine origin server in your CDN configuration. Also in your CDN configuration, enable connecting to the origin server over SSL/TLS using the port you configured for SSL/TLS in the Wowza Streaming Engine origin (default port 443).

##### Test stream playback

After your live application is configured to deliver an LL-HLS stream, complete the stream setup by connecting a source encoder or IP camera to Wowza Streaming Engine and publishing the live source stream to the server. When the camera or encoder is connected and the live stream is active, test LL-HLS playback using a supported test player.

To test LL-HLS live streams when only **cmafstreamingpacketizer** is enabled, specify the stream playback URL using one of the following formats:

**Single bitrate**
https://[address]/[application]/[application-instance]/[stream-name]/playlist.m3u8

If **cmafstreamingpacketizer** and **cupertinostreamingpacketizer** are enabled, specify the stream playback URL using one of the following formats:

**Single bitrate**
https://[address]/[application]/[application-instance]/[stream-name]/playlist_sfm4s.m3u8

Where:

**[address]** is the IP address or domain and port (default port 443)
**[application]** is the application name
**[application-instance]** is the name of the application instance (if omitted, defaults to **_definst_**)
**[stream-name]** is the stream name
So, for example, if only **cmafstreamingpacketizer** is enabled, the playlist URL for an adaptive bitrate LL-HLS stream that uses the address **example.com**, the default **live** application, and the default stream name **myStream** is:

https://example.com/live/smil:myStream.smil/playlist.m3u8

If **cmafstreamingpacketizer** and **cupertinostreamingpacketizer** are both enabled, the adaptive bitrate LL-HLS playlist URL for the same example is:

https://example.com/live/smil:myStream.smil/playlist_sfm4s.m3u8

and the playback URL for the Cupertino HLS stream is either:

https://example.com/live/smil:myStream.smil/playlist.m3u8

or

https://example.com/live/smil:myStream.smil/playlist_sfts.m3u8

where **\_sfts** indicates that the media playlist contains .ts segments.

### Configure THEOplayer to play your LL-HLS stream

##### Web SDK

1. Setup a basic HTML file and include the THEOplayer library. You can check: [How to get started with THEOplayer Web SDK](../../getting-started/01-sdks/01-web/00-getting-started.md).
2. Specify the LL-HLS stream generated above, as the `src` parameter in your source configuration
3. Set the flag `lowLatency` parameter to TRUE, in your source configuration

```html
<script>
  // LL-HLS
  player.source = {
    sources: [
      {
        src: "https://5d6e17f1ca731.streamlock.net/LowLatencyBBB/myStream/playlist.m3u8", // set the LL-HLS source
        type: "application/x-mpegurl", // set the type to HLS
        lowLatency: true
      }
    ]
  };
</script>
```

## Conclusion

THEOplayer is partnered with Wowza Streaming Engine to fully implement low-latency HLS (LL-HLS) streaming playback.

## Resources

- [Getting Started on Web](../../getting-started/01-sdks/01-web/00-getting-started.md)

- [Getting Started with Wowza Streaming Engine](https://www.wowza.com/docs/wowza-streaming-engine-product-articles/)
