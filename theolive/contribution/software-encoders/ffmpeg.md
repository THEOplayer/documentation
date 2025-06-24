---
sidebar_position: 6
sidebar_label: FFmpeg
---

# Using FFmpeg with THEOlive

**FFmpeg** is a free open-source software project with command-line tools for handling video, audio, and other multimedia. It is common practice to use Ffmpeg in production workflows when broadcasting from a media file on disk.

Broadcasts are started using the `ffmpeg` command-line to forward a source using RTMP broadcast contribution protocol to stream content to THEOlive.

See the official [ffmpeg.org](https://ffmpeg.org/) documentation for installation instructions and additional support.

## Common Settings

| Parameter          | Description                                      |
| :----------------- | :----------------------------------------------- |
| \-stream_loop -1   | Loop the video indefinitely                      |
| \-vb 4500k         | Video Bitrate setting of 4.5 Mbps                |
| \-c:a copy         | Copy the audio codec from the input              |
| \-bf 0             | Disable bframes                                  |
| \-g 60             | Group of pictures (GOP) size                     |
| \-f flv            | Package flash video                              |
| \-preset veryfast  | Video encoding speed to compression ratio preset |
| \-tune zerolatency | Good for fast encoding and low-latency streaming |
| \-vprofile main    | H264 video profile                               |

:::warning -re flag
Do not use the `-re` flag when the input is an actual capture device or a live stream as it may cause packet loss and higher latency.
:::

## Start the stream

Run the following command with the proper settings in order to start publishing to your channel.

```shell
MEDIA_FILE="/path/to/file.mp4"
RTMP_PUBLISH_URL="rtmps://rtmp.<region>.theo.live/live"
RTMP_STREAM_KEY="Your stream key"

ffmpeg -re -stream_loop -1 -i $VIDEO_FILE_PATH \
  -vcodec libx264 \
  -preset veryfast \
  -bf 0 \
  -g 60 \
  -vb 4500k \
  -vprofile main \
  -tune zerolatency \
  -level 3.0 \
  -c:a copy \
  -f flv \
  -rtmp_playpath $RTMP_STREAM_KEY \
  -rtmp_live live $RTMP_PUBLISH_URL
```

:::info Upload bandwidth
Make sure that your encoder has a stable connection and enough upload bandwidth. This will ensure all data is correctly sent to the THEOlive channel.
:::
