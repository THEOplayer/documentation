---
title: "RTMP | RTMPS"
slug: /using-rtmp-and-rtmps
---
**Real-Time Messaging Protocol (RTMP)** has been well supported by popular hardware and software applications for many years. In addition to WebRTC, Dolby.io Real-time Streaming allows you to broadcast and distribute content from an RTMP or secure RTMPS source.

Dolby.io Real-time streaming also supports the ability to live stream multiple bitrates from professional RTMP encoders and deliver WebRTC Simulcast. For more information, see [Simulcast](/millicast/distribution/using-webrtc-simulcast.md)how-to-enable-simulcast-from-an-encoder).

This document will outline how to set up and broadcast low-latency RTMP streams via the Dolby.io CDN.

# RTMP publishing

> 👍 Getting Started
> 
> If you haven't already, begin by following the [Getting Started](/millicast/getting-started/introduction-to-streaming-apis.md) tutorial to create a Dolby.io application and start your first broadcast. You will need to create a publish token to generate the necessary RTMP details.

Select the publish token that you want to use for your RTMP streaming application.


![](/img/millicast/rtmp_publish_token.png)



## How to find your RTMP publish URL

Click on the _Publishing_ tab of the token screen where you will find details for the various protocols such as [WHIP](/millicast/broadcast/webrtc-whip.md), [SRT](/millicast/broadcast/using-srt.md), and RTMP.


![](/img/millicast/rtmp_publish_url.png)



In order for you to publish with RTMP, you will need two items from this interface, the **RTMP publish path** and **RTMP publish stream name**. Note that the _RTMP publish stream name_ value from the dashboard is a concatenation of the _stream name_ and the _publishing token_ as a query string parameter.

Depending on the particular RTMP integration you may need to specify these details separately or as a full URL endpoint:

<div style={{marginLeft: "20px"}}>

**RTMP Publish URL** = **RTMP publish path** + `/` + **RTMP publish stream name**

</div>

This information will authenticate you as a publisher on Dolby.io Real-time Streaming and allow you to successfully broadcast a live feed using your account.  Typically the URL will look something similar to:

```
rtmp://rtmp-auto.millicast.com:1935/v2/pub/myStreamName?token=5c7a1529...bdc8&priority=1&sourceId=YourId
```

For a secure RTMPS endpoint, you would substitute the **RTMPS publish path**, which uses a different protocol and port.

**Note:** The the `priority` and `sourceId` are optional parameters that allow you to specify the priority and a unique ID for the published stream.

## Suggested RTMP Encoder Settings

Each setup can be slightly different, so adjust the below settings to find what fits best for you.

### OBS with RTMP

See the [OBS Integration Guide](/millicast/software-encoders/using-obs.md) for more details.

|                   |                 |
| :---------------- | :-------------- |
| Encoder           | **nvenc**       |
| Rate Control      | **CBR**         |
| Keyframe Interval | **2 (seconds) |
| Preset            | **Max Quality** |
| Profile           | **high**        |
| x264 options      | **bframes=0**   |

**Note:** These are the recommended settings for the NVIDIA NVENC H.264 encoder. If you do not have the NVIDIA NVENC H.264 encoder available, we recommend setting the Rate Control to `CBR` and the profile to `baseline`. 

Setting **x264 options** to _bframes=0_ or **profile** to _baseline_ is required to avoid video artifacts on the viewer and recording side.

### vMIX with RTMP

See the [vMix Integration Guide](/millicast/software-encoders/broadcasting-with-vmix.md) for more details.

|                   |                 |
| :---------------- | :-------------- |
| Application       | **FFMPEG**      |
| Profile           | **baseline**    |
| Level             | **3.1**         |
| Preset            | **ultrafast**   |
| Keyframe Interval | **2 seconds**   |
| Threads           | **4**           |
| Net Buffer        | **5 (seconds) |

### Basic RTMP Settings

The following are basic recommended settings for any encoder:

|                   |                          |
| :---------------- | :----------------------- |
| Codec             | **H.264**                |
| bframes           | **disabled**             |
| Profile           | **baseline, main, high** |
| Keyframe Interval | **2 seconds**            |

**Note:** If you cannot disable bframes, we recommend setting the Profile to `baseline`.

If you have any questions or suggestions, feel free to [contact us](https://support.dolby.io/?_gl=1*1bfsqox*_ga*MTExNDIzMDc0OC4xNjgzNTY3ODk2*_ga_CTSBFC56JT*MTY4OTAwNDAwMS4yOS4xLjE2ODkwMTEwMjYuMC4wLjA.).

# Learn more

Find additional integration guides such as [Haivision](/millicast/hardware-encoders/using-haivision-kb-encoder.md), [Zoom](/millicast/software-encoders/broadcasting-jitsi-or-zoom-meetings.md), [Teradek](/millicast/hardware-encoders/broadcasting-teradek-vidiu.md), [Videon](/millicast/hardware-encoders/videon.md), and more. To find examples for how to use this explore RTMP related articles from the [developer blog](https://dolby.io/blog/tag/rtmp/).



