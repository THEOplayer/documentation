---
sidebar_position: 1
sidebar_label: FFmpeg
description: Free open-source command-line tool for streaming media files.
---

# Using FFmpeg with Optiview Live

**FFmpeg** is a free open-source command-line tool for handling video, audio, and other multimedia. It is commonly used in production workflows to broadcast a media file using RTMP to Optiview Live.

:::tip
See the official [ffmpeg.org](https://ffmpeg.org/) documentation for installation instructions and additional support.
:::

## Streaming a file

```shell
ffmpeg -re -stream_loop -1 -i /path/to/file.mp4 \
  -c:v copy -c:a copy -f flv \
  -rtmp_playpath "your-stream-key" \
  -rtmp_live live "rtmps://rtmp.<region>.theo.live/live"
```

| Parameter        | Description                                              |
| :--------------- | :------------------------------------------------------- |
| \-re             | Read input at native frame rate (for file-based sources only) |
| \-stream_loop -1 | Loop the video indefinitely                              |
| \-c:v copy       | Copy the video codec from the input                      |
| \-c:a copy       | Copy the audio codec from the input                      |
| \-f flv          | Package flash video                                      |

:::warning -re flag
Do not use the `-re` flag when the input is an actual capture device or a live stream as it may cause packet loss and higher latency.
:::

:::info Upload bandwidth
Make sure that your encoder has a stable connection and enough upload bandwidth. This will ensure all data is correctly sent to the Optiview Live channel.
:::

## Low Latency Encoding Settings

The following settings are recommended to achieve the lowest possible latency when re-encoding when streaming to Optiview Live. These prioritize encoding speed and reduced buffering at the cost of some video quality.

| Parameter          | Description                                      |
| :----------------- | :----------------------------------------------- |
| \-vb 4500k         | Video Bitrate setting of 4.5 Mbps                |
| \-vprofile main    | H264 video profile                               |
| \-g 60             | Group of pictures (GOP) size                     |
| \-preset veryfast  | Faster encoding speed at the cost of compression efficiency |
| \-tune zerolatency | Disables internal buffering for low-latency streaming |
| \-bf 0             | Disable B-frames to reduce encoding delay        |

```shell
ffmpeg -f decklink -i "DeckLink Mini Recorder" \
  -vcodec libx264 -vb 4500k -vprofile main -g 60 \
  -preset veryfast -tune zerolatency -bf 0 \
  -c:a aac -ab 128k -f flv \
  -rtmp_playpath "your-stream-key" \
  -rtmp_live live "rtmps://rtmp.<region>.theo.live/live"
```
