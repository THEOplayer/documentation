---
sidebar_position: 3
---

# Audio Normalization

An area of importance for ad processing is to have the ads match the source content in terms of audio volume. It will drive away viewers if your ads have wildly different volume than your primary content. Whether by accident or intent, ads are often set to very high volume. You can use the OptiView Ad Engine to normalize these ads so that all your ads are (1) consistent and (2) match your primary content.

### Example

In this example, we are using the EBU R128 audio normalization standad set to -23 LUFS (Loudness Units Relative to Full Scale). The Ad Engine analyzes the content first, and then modifies the audio to match the desired audio level.

```json
{
  "encode_profile": {
    "container": {
      "kind": "hls/fmp4",
      "segment_duration_sec": 2
    },
    "video": [
      {
        "width": 1280,
        "height": 720,
        "bitrate_kb": 2500,
        "frame_rate": "30000/1001",
        "codec": "h264"
      },
      {
        "width": 854,
        "height": 480,
        "bitrate_kb": 1200,
        "frame_rate": "30000/1001",
        "codec": "h264"
      },
      {
        "width": 640,
        "height": 360,
        "bitrate_kb": 600,
        "frame_rate": "30000/1001",
        "codec": "h264"
      }
    ],
    "audio": [
      {
        "codec": "aac",
        "bitrate_kb": 128,
        "channels": 2,
        "filters": [
          {
            "kind": "normalize",
            "payload": {
              "kind": "ebur128",
              "payload": {
                "integrated_lufs": -23
              }
            }
          }
        ]
      }
    ]
  }
}
```
