

# ABR Audio Assignment

You can create multiple audio bitrates in HLS, and then assign different bitrates to different video renditions. For example, on your 1080p high bitrate video you may have audio at 128kbps, whereas on your small 360p video you may only want audio at 64kbps. This allows you to minimize the combined video/audio bitrate for certain streams. 

### Example

In this example, we have 3 video bitrates and 2 audio bitrates. We are using the higher audio bitrate on the largest video and the lower audio bitrate on the smaller videos. We are using the `abr_map` object in the video encode settings to specify which `hls_audio_group` a particular video stream belongs to. So, for example, the two smallest videos in this example are assigned to the "low" `hls_audio_group`. In the audio encoding section, we are defining the "low" `hls_audio_group` to have a bitrate of 128kbps.

```json
{
    "encode_profile": {
        "container": {
            "kind": "hls/fmp4",
            "segment_duration_sec": 1
        },
        "video": [
            {
                "width": 1920,
                "height": 1080,
                "bitrate_kb": 5000,
                "codec": "h265",
                "abr_map": {
                    "hls_audio_group": "high"
                }
            },
            {
                "width": 1280,
                "height": 720,
                "bitrate_kb": 3000,
                "codec": "h265",
                "abr_map": {
                    "hls_audio_group": "low"
                }
            },
            {
                "width": 848,
                "height": 480,
                "bitrate_kb": 1000,
                "codec": "h265",
                "abr_map": {
                    "hls_audio_group": "low"
                }
            }
        ],
        "audio": [
            {
                "codec": "he_aac1",
                "bitrate_kb": 320,
                "abr_map": {
                    "hls_audio_group": "high",
                    "content": "English"
                }
            },
            {
                "codec": "aac",
                "bitrate_kb": 128,
                "abr_map": {
                    "hls_audio_group": "low",
                    "content": "English"
                }
            }
        ]
    }
}
```
