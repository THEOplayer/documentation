---
sidebar_position: 6
---

# Quality Control

One of the realities of ads is that there are many instances where the ad source can be problematic. These types of problems can include things like too long duration, too short duration, too small dimensions, too low of a bitrate, etc. A bad ad can look bad, sound bad, or simply stall your player, so it is important to verify the quality of the ad.

The OptiView Ad Engine includes the ability to do quality control on the source and output of the ad. The quality control parameters are set in the **ad profile**.

### QC Example

A QC object is added to the ad profile. In this case, we are checking that the source file is less than 2 minutes in duration and that the source height is 720p or larger.

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
        "bitrate_kb": 96,
        "channels": 2
      }
    ]
  },
  "qc": {
    "pre": {
      "conditions": {
        "pass": [
          {
            "condition": "source.container.duration <= 120",
            "message_fail": "FAIL: Source duration must be less than or equal to 2 minutes."
          },
          {
            "condition": "source.height >= 720",
            "message_fail": "FAIL: Source height must be greater than or equal to 720 pixels."
          }
        ]
      }
    }
  }
}
```

### Pre and Post QC

The Ad Engine inlcludes both source and output QC. The `pre` object defines the pre-conversion QC parameters, and the `post` object defines the post-conversion. The vast majority of QC will be `pre` encoding, in order to weed out bad input files.

### QC Conditions

The QC `conditions` is an object that defines `pass` and `fail` conditions. You can define a condition either as a `pass` condition that must be true, or a `fail` condition that will generate a failure. In our above example, we are using the `pass` condition -- meaning that each condition must evaluate to `true` in order for the file to pass QC. The QC decision can be defined by a `math.js` string, which allows for complex operations if needed.
