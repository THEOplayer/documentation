

# Up-Converting Ads to Dolby Vision and Atmos

The vast majority of ads are produced in SDR (Standard Dynamic Range) video and stereo audio. Many premium VOD and live assets are delivered, however, in Dolby Vision and Atmos. Dolby Vision is the leading HDR (High Dynamic Range) format and Dolby Atmos is the leading object-oriented audio format. You can optimize the viewing experience for your customers by up-converting the ad video and audio. Converting the ad video to Dolby Vision gives the ad more color depth and makes it look stunning. And most importantly, viewers are not switching back and forth between HDR primary content and SDR ads. 

On the audio front, if you have primary content in Dolby Atmos and ads in stereo, there can be switching problems in some devices as they change audio modes. By converting the ad content on-the-fly to Dolby Atmos, you can ensure smooth playback without audio format switching.  

As an example, the following ad profile takes SDR/stereo ads and creates a Dolby Vision/Atmos output. 

```json
{ 
  "encode_profile": { 
    "container": { 
      "kind": "hls", 
      "segment_duration_sec": 2 
    }, 
    "video": [ 
      { 
        "width": 1280, 
        "height": 720, 
        "bitrate_kb": 2500, 
        "frame_rate": "30000/1001", 
        "codec": "h265", 
        "range": "dolby_vision_5", 
        "sdr_enhancement": { 
          "mode": "lut_med"
        } 
      }, 
      { 
        "width": 854, 
        "height": 480, 
        "bitrate_kb": 1200, 
        "frame_rate": "30000/1001", 
        "codec": "h265", 
        "range": "dolby_vision_5", 
        "sdr_enhancement": { 
          "mode": "lut_med" 
        } 
      }, 
      { 
        "width": 640, 
        "height": 360, 
        "bitrate_kb": 600, 
        "frame_rate": "30000/1001", 
        "codec": "h265", 
        "range": "dolby_vision_5", 
        "sdr_enhancement": { 
          "mode": "lut_med" 
        } 
      } 
    ], 
    "audio": [ 
      { 
        "codec": "ddp_joc", 
        "bitrate_kb": 384, 
        "channels": 6 
      } 
    ] 
  } 
} 
```
Ad profiles can include both enhanced and regular outputs. The available SDR enhancement to HDR output includes:

- Dolby Vision - Profile 5 
- Dolby Vision - Profile 8.1 (HDR10 base layer with Dolby Vision enhancement)
- HDR10

The strength of the SDR enhancement can be set with the `mode` parameter. 

The Dolby Atmos encoding uses the Dolby Digital Plus JOC (Joint Object Coding) codec.

Please see the API Reference for the complete list of available encoding parameters.