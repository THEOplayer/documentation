---
sidebar_position: 4
---

# ABR Audio Assignment

You can create multiple audio bitrates in HLS, and then assign different bitrates to different video renditions. For example, on your 1080p high bitrate video you may have audio at 128kbps, whereas on your small 360p video you may only want audio at 64kbps. This allows you to minimize the combined video/audio bitrate for certain streams.

### Example

In this example, we have 3 video bitrates and 2 audio bitrates. We are using the higher audio bitrate on the largest videos and the lower audio bitrate on the smallest video. We are using the `abr_map` object in the video encode settings to specify which `hls_audio_group` a particular video stream belongs to. So, for example, the two larger videos in this example are assigned to the "high" `hls_audio_group`. In the audio encoding section, we are defining the "high" group to have a bitrate of 128kbps and the "low" group to have a bitrate of just 64kbps.

```json
{
  "encode_profile": {
    "container": {
      "kind": "hls/fmp4",
      "segment_duration_sec": 2
    },
    "video": [
      {
        "width": 1920,
        "height": 1080,
        "bitrate_kb": 5000,
        "codec": "h264",
        "abr_map": {
          "hls_audio_group": "high"
        }
      },
      {
        "width": 1280,
        "height": 720,
        "bitrate_kb": 3000,
        "codec": "h264",
        "abr_map": {
          "hls_audio_group": "high"
        }
      },
      {
        "width": 640,
        "height": 360,
        "bitrate_kb": 600,
        "codec": "h264",
        "abr_map": {
          "hls_audio_group": "low"
        }
      }
    ],
    "audio": [
      {
        "codec": "aac",
        "bitrate_kb": 128,
        "abr_map": {
          "hls_audio_group": "high",
          "content": "English"
        }
      },
      {
        "codec": "aac",
        "bitrate_kb": 64,
        "abr_map": {
          "hls_audio_group": "low",
          "content": "English"
        }
      }
    ]
  }
}
```

We can also use the `abr_map` to specify the language to be reported in the HLS output manifest. In this case, we have set it to "English".
