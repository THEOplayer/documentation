---
sidebar_position: 0
---

# Ad Profiles

Before any ads can be processed by the OptiView Ad Engine, you must create one or more **ad profiles**. The purpose of an ad profile is to define the parameters of your encoding, such as resolution, bitrate, etc. This is also where you define the audio normalization you desire and any quality control checks that should be performed.

If you serve different bitrates in different regions, for example, you could create different ad profiles for each region. The goal is to match the ad to the content, so that you have the best possible experience.

### Simple Example

A profile is described by a JSON object. Let's look at a simple example that is defining an encoding ladder with 3 layers -- 2.5 Mbps, 1.2 Mbps, and 600 kbps. We are defining a framerate of 29.97 (more accurately represented as 30000/1001). If the source ad is not 29.97 fps, it will be converted to that framerate. Additionally, if the source ad is not 16x9, letter-boxing or pillar-boxing will be added to make sure that it fits the defined space.

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
        "channels": 2
      }
    ]
  }
}
```

### Submitting a Profile

You can submit your profile to the Ad Engine service through the API. You would POST to the following endpoint:

```
POST https://api.galaxy.dolbyrasp.com/ad-engine/profile?key=ad_profile_1
```

### Encoding Parameters

There are many encoding parameters that can be set for an output. We recommend that you use the **least** number of explicit parameters, and allow the Ad Engine to select the appropriate values. If you don't set a codec profile, the Ad Engine will set a profile that is appropriate for the dimensions and bitrate of your output. If you know the explicit settings you want, you can set a wide range of parameters, including:

- video properties - codec, bitrate, width, height, dar, etc.
- video codec parameters - profile, level, crf, bitrate_mode, etc.
- color properties - chroma_format, color_primaries, color_trc, color_matrix, etc.
- audio properties - codec, bitrate, etc.
- rate control properties - vbv_buffer_size_kb, vbv_init_occupancy_kb, etc.
- video filters - text overlay, image overlay, etc.
- audio filters - normalize

For a complete list of all properties, please refer to the **API Reference**.

### Listing, Editing, and Deleting Profiles

The API allows you to get a list of your profiles, edit a profile, and delete a profile. Please see the API Reference for details on how to perform these actions.
