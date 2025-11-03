# Ad Conformance

Ads are often sourced from master media files such as high bitrate MP4 or MOV files. But, sometimes the master media files is referenced in a VAST (Video Ad Serving Template) file. Or, the ad is actually already in an HLS format, but you need to convert it to a different bitrate ladder. On the output side, you may want to create a single MP4 file, or a multi-bitrate HLS file. Or you may want to create an HLS, but have that HLS be referenced in a VAST file. All of these different types of conformance can be executed by the OptiView Ad Engine:

- Media → MP4
- Media → HLS
- Media → VAST
- VAST → HLS
- VAST → VAST

Which conversion you create depends on the items: (1) the ad profile and (2) the parameters of the HTTPS path. For example, if your `ad_profile_1` is creating an HLS, and you want the result returned to you in a VAST file, it would look like:

`https://api.galaxy.dolbyrasp.com/ad_engine/conform?profile=ad_profile_1&url=https://ad_server.com/ad123.mp4&output_format=vast`

### Media → MP4

The output format of your media is defined by the Ad Profile. If you set the profile to encode to an MP4, then you will get a single MP4 output rather than an HLS multi-layer output. Let's say that you have created the ad profile named `my_mp4_ad_profile` shown below:

```
{
    "encode_profile": {
        "container": {
            "kind": "mp4",
        },
        "video": [
            {
                "width": 1280,
                "height": 720,
                "bitrate_kb": 2500,
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
    }
}
```

You could conform your original ad into that MP4 format with the following:

`https://api.galaxy.dolbyrasp.com/ad_engine/conform?profile=my_mp4_ad_profile&url=https://my_location/my_source.mp4&output_format=media`

### Media → HLS

Sometimes instead of a master media file, you actually have an HLS file that is in the wrong format. The OptiView Ad Engine can take an HLS file and convert it to a different set of bitrates. The Engine will use the highest bitrate source in the original HLS, and use that as the master data to create the new HLS. There are limitations to this method. If you have a source HLS that only has a 540p video as its top rendition, you won't be able to make a 4K output that looks perfect.

You could conform your original ad into the HLS `ad_profile_1` format with the following:

`https://api.galaxy.dolbyrasp.com/ad_engine/conform?profile=ad_profile_1&url=https://my_location/my_ad.mp4&output_format=media`

### Media → VAST

If you want an HLS output that is referenced by a VAST file XML files, then you just need to specify that the `output_format=vast`.

`https://api.galaxy.dolbyrasp.com/ad_engine/conform?profile=ad_profile_1&url=https://my_location/my_ad.mp4&output_format=vast`

### VAST → HLS

If your input is a VAST file that points to a media file, the Ad Engine will automatically use the media that is referenced.

`https://api.galaxy.dolbyrasp.com/ad_egine/conform?profile=ad_profile_1&url=https://my_location/my_vast.xml&output_format=media`

### VAST → VAST

If your input is a VAST file that points to a media file, and you want your output to be a VAST file that points to an HLS, you would set the `output_format=vast`.

`https://api.galaxy.dolbyrasp.com/ad_engine/conform?profile=ad_profile_1&url=https://my_location/my_vast.xml&output_format=vast`
