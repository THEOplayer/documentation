---
title: "FFmpeg"
slug: /using-ffmpeg
---
**FFmpeg** is a free open-source software project with command-line tools for handling video, audio, and other multimedia. It is common practice to use Ffmpeg in production workflows when broadcasting from a media file on disk.

Broadcasts are started using the `ffmpeg` command-line to forward a source using either [RTMP](/millicast/broadcast/using-rtmp-and-rtmps.md) or [SRT](/millicast/broadcast/using-srt.md) broadcast contribution protocols which are then streamed as [WebRTC](/millicast/broadcast/webrtc-whip.md) for global real-time distribution. 

See the official [ffmpeg.org](https://ffmpeg.org/) documentation for installation instructions and additional support.

> 👍 Getting Started
> 
> If you haven't already, begin by following the [Getting Started](/millicast/getting-started/index.mdx) tutorial to create a Dolby.io application and start your first broadcast.

# General

## Common Settings

| Parameter         | Description                                      |
| :---------------- | :----------------------------------------------- |
| \-stream_loop -1  | Loop the video indefinitely                      |
| \-vb 3000k        | Video Bitrate setting of 3Kbps                   |
| \-acodec aac      | AAC audio codec                                  |
| \-ac 2            | Audio channels for stereo                        |
| \-ab 96000        | Audio Bitrate setting of 96Kbps                  |
| \-ar 48000        | Audio Sample Rate of 48Kbps                      |
| \-bf 0            | Disable bframes                                  |
| \-g 60            | Group of pictures (GOP) size                     |
| \-f flv           | Package flash video                              |
| \-preset veryfast | Video encoding speed to compression ratio preset |
# RTMP

In order to broadcast with RTMP, you will need to have your **RTMP publish path** and **RTMP publish stream name** available. See the [RTMP Broadcast Guide](/millicast/broadcast/using-rtmp-and-rtmps.md#how-to-find-your-rtmp-publish-url) for details on how to retrieve these values. 

The examples on the remainder of the page will reference these as environment variables: `$RTMP_PUBLISH_PATH` and `$RTMP_PUBLISH_STREAM_NAME`.  You can replace these or set them as appropriate for the shell environment and operating system you are using.

## How-to Publish an H.264 RTMP Video Stream

The Millicast platform supports AVC (H264) broadcast pass-through which is widely supported across platforms and browsers. Of note are two flags you should use:

- `-vcodec libx264` identifies the video codec
- `-vprofile baseline -level 3.0` is the H.264 profile and level for maximum decoding speed, frame size, and bit rate

```shell bash
ffmpeg -re -stream_loop -1 -i $VIDEO_FILE_PATH \
  -vcodec libx264 \
  -preset veryfast \
  -bf 0 -g 60 \
  -vb 3000k \
  -vprofile baseline \
  -level 3.0 \
  -acodec aac \
  -ab 96000 -ar 48000 -ac 2 \
  -strict experimental \
  -f flv \
  -rtmp_playpath $RTMP_PUBLISH_STREAM_NAME \
  -rtmp_live live $RTMP_PUBLISH_PATH
```

## How-to Publish an H.265 RTMP Video Stream

The Millicast platform supports HEVC (H265) broadcast pass-through, but playback of this codec is not widely supported across all web browsers and devices. To view an HEVC stream, you should use Safari 17.2+ or the [iOS](/millicast/client-sdks/ios/index.md) Client SDK which provide decoding support.

To stream HEVC via RTMP you can use the `libx265` codec and the `flv` packager:

```Text bash
YOUR_RTMP_PUBLISH_PATH_WITH_STREAM_NAME="rtmp://rtmp-auto.millicast.com:1935/v2/pub"+YOUR_RTMP_STREAM_NAME_AND_TOKEN

ffmpeg -re -stream_loop -1 -i demo.mp4 -c:v libx265 -x265-params bframes=0 \
-preset fast -crf 23 -b:v 1000k -maxrate 1000k -bufsize 2000k -c:a aac -b:a 96k \
-ar 44100 \
-f flv $YOUR_RTMP_PUBLISH_PATH_WITH_STREAM_NAME
```

## How-to Publish an AV1 RTMP Video Stream

The Millicast platform supports AV1 broadcast pass-through with an RTMP-enhanced stream, but playback of this codec has varying support across web browsers and devices. To view an AV1 stream [check your chosen platform/device's support](https://caniuse.com/av1). 

To stream AV1 via RTMP you can use `librav1e`, `SVT-av1` or `libaom-av1` and the `flv` packager:

```shell bash
ffmpeg -re -stream_loop -1 -i demo.mp4 \
  -b:a 1M -b:v 1M \
  -c:v librav1e  -f flv \
  -rtmp_playpath $RTMP_PUBLISH_STREAM_NAME \
  -rtmp_live live $RTMP_PUBLISH_PATH
```

AV1 encoding can be quite processor-intensive and usually requires GPU-enabled hardware acceleration. For testing, we recommend including a few additional settings that can boost encoding speed:

```shell bash
-speed 10  -qp 63 -g 120 -keyint_min 120 -tile-columns 4 -tile-rows 2
```
> 🚧 AV1 Encoder Required
> 
> FFmpeg doesn't include an AV1 encoder with standard installs. You must install one separately by following FFmpeg's official [AV1 installation guide](https://trac.ffmpeg.org/wiki/Encode/AV1).

## How-to Publish an RTSP Video Stream

Support for **Real-time Streaming Protocol (RTSP)** can be done with `ffmpeg` by changing the input source. All of the other parameters are consistent with streaming a media file from disk.

```shell bash
ffmpeg -re -i rtsp://98.116.xx.xx:5545/axis-media/media.amp \
  -vcodec libx264  \
  -preset veryfast \
  -bf 0 -g 60 \
  -vb 3000k \
  -vprofile baseline \
  -level 3.0 \
  -acodec aac \
  -ab 96000 -ar 48000 -ac 2 \
  -strict experimental \
  -f flv \
  -rtmp_playpath $RTMP_PUBLISH_STREAM_NAME \
  -rtmp_live live $RTMP_PUBLISH_PATH
```
## How-to Simulcast a Multi-Source MBR Video Stream

This example demonstrates sending the same video with multiple contribution layers. The `&sourceId` [publishing parameter](/millicast/broadcast/broadcast-parameters.md) is used to distinguish each source while using `&videoOnly` so the audio is only sent with the main feed. Also see the [Multi-Source Broadcasting](/millicast/broadcast/multi-source-broadcasting.md) for more about Multi-bitrate contribution.

```shell bash
ffmpeg -re -stream_loop -1 -i demo.mp4 \
  -c:v libx264 -preset medium -b:v:0 800k -maxrate:v:0 856k -bufsize:v:0 1200k -s:v:0 640x360 -profile:v:0 main -f flv "$RTMP_PUBLISH_PATH$RTMP_PUBLISH_STREAM_NAME&sourceId=1&simulcastId" \
  -c:v libx264 -preset medium -b:v:0 1200k -maxrate:v:0 1280k -bufsize:v:0 1600k -s:v:0 854x480 -profile:v:0 main -f flv "$RTMP_PUBLISH_PATH$RTMP_PUBLISH_STREAM_NAME&sourceId=2&simulcastId&videoOnly" \  
  -c:v libx264 -preset medium -b:v:0 2500k -maxrate:v:0 2600k -bufsize:v:0 3000k -s:v:0 1280x720 -profile:v:0 main -f flv "$RTMP_PUBLISH_PATH$RTMP_PUBLISH_STREAM_NAME&sourceId=3&simulcastId&videoOnly"
```
# SRT

In order to broadcast with SRT, you will need to have your **SRT publish path** and **SRT stream ID** available. See the [SRT Broadcast Guide](/millicast/broadcast/using-srt.md) for details on how to retrieve these values.

The examples on the remainder of the page will reference these as environment variables: `$SRT_PUBLISH_PATH` and `$SRT_STREAM_ID`.  You can replace these or set them as appropriate for the shell environment and operating system you are using.

## How-to Check if SRT is Supported in Your Installation

Some installations of `ffmpeg` may not have SRT available. This can be verified by running:

```shell bash
ffmpeg -buildconf | grep enable-libsrt
```

The output should show that `--enable-libsrt` is present.

## How-to Simulcast a Redundant Ingest SRT Video Stream

This example demonstrates [redundant ingest]/millicast/broadcast/redundant-ingest/index.md) where a second publishing source is used to recover from a failed broadcast source. The `&priority=100` [publishing parameter](/millicast/broadcast/broadcast-parameters.md) is used to indicate which is the primary and which is the backup feed. **The SRT URL must be URLencoded.**

```shell bash
ffmpeg -nostdin -fflags +genpts -re -stream_loop -1 -i demo.mp4 \
  -map 0 -vcodec libx264 -c:a copy -b:a 128k -preset veryfast -bf 0 -g 60 -vb 4500k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D100" \
  -map 0 -vf scale=720:-2,setsar=1:1 -vcodec libx264 -an -preset veryfast -bf 0 -g 60 -vb 3000k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D100%26videoOnly%26sourceId%3D1" \
  -map 0 -vf scale=480:-2,setsar=1:1 -vcodec libx264 -an -preset veryfast -bf 0 -g 60 -vb 1500k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D100%26videoOnly%26sourceId%3D2"  
```

For the backup source, we'd use `&priority=-100` and run it from a secondary piece of hardware or secondary network in case of failures. The rest of the command is identical otherwise.

```shell bash
ffmpeg -nostdin -fflags +genpts -re -stream_loop -1 -i demo.mp4 \
  -map 0 -vcodec libx264 -c:a copy -b:a 128k -preset veryfast -bf 0 -g 60 -vb 4500k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D-1" \
  -map 0 -vf scale=720:-2,setsar=1:1 -vcodec libx264 -an -preset veryfast -bf 0 -g 60 -vb 3000k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D-100%26videoOnly%26sourceId%3D1" \
  -map 0 -vf scale=480:-2,setsar=1:1 -vcodec libx264 -an -preset veryfast -bf 0 -g 60 -vb 1500k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D-100%26videoOnly%26sourceId%3D2"  
```
# Troubleshooting

These examples were verified with `ffmpeg` version 6.0 on MacOS.

```shell bash
> ffmpeg -version
ffmpeg version 6.0 Copyright (c) 2000-2023 the FFmpeg developers
built with Apple clang version 14.0.3 (clang-1403.0.22.14.1)
```

If you are using a different version or operating system please include these details when reporting any issues.

## Stuttering video

If you experience stutter in your streaming video, make sure you are using the options:

```shell
-vprofile baseline -bf 0
```

You can also modify the `-preset` to adjust the compression speed to quality ratio.

# Learn more

This guide covered broadcasting with `ffmpeg`. To test and view the stream you can use the dashboard or any of the other [playback](/millicast/playback/index.md) methods.

Continue exploring other [software encoders](../broadcast/software-encoders.md) and solutions you can use for [broadcasting](/millicast/broadcast/index.mdx) your real-time stream.
