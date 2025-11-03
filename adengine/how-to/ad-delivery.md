

# Ad Delivery

You have multiple ways that your ad can be delivered as part of the ad conformance process. The OptiView Ad Engine directly act as the origin, or you can have the Ad Engine place the finished files into your own origin (e.g. in your cloud or on your CDN). 


### Delivery Options

The delivery options are:

- `jit`
- `files`

The default method is `jit` (just-in-time). In this case, the Ad Engine acts as a proxy between your ad source and your player. The ad is created just-in-time by the Ad Engine as it is requested by the player. To use this method, you wrap your source HTTP in a call to the Ad Engine like this:

`https://api.galaxy.dolbyrasp.com/ad_engine/conform?profile=ad_profile_1&url=https://my_location/my_ad.mp4&output_format=media`


If you want the files directly, you can tell the Ad Engine to put the files in a specific location with the `files` option. If you specify the`files` option, you also have to provide a `delivery_root_url` and a `delivery_credentials_key`. 

`https://api.galaxy.dolbyrasp.com/ad-engine/conform?url=https://my_location/my_ad.mp4&profile=ad_profile_1&output_format=media&delivery=files&delivery_root_url=s3://my_bucket/my_folder/my_ad_id/&delivery_credentials_key=my_creds`

The credentials key is only referenced by a name and not by the actual credentials, which need to be stored securely in the service via an API call.


### Output Formats

The output formats include the following:

 - `media`
 - `vast`
 - `media_vurl_info`

The `media` option gives you either MP4 or HLS depending on your ad profile. The `vast` option gives you a VAST output. The `media_vurl_info` gives you summary metadata on what was created. An example of `media_vurl_info` is below. This example gives you the url of the conformed ad, as well as other info such as the maximum bitrate and codec type. 

```
{
    "vurl": "https://api.galaxy.dolbyrasp.com/asset/d6f17663-c5be-56f4-a8b3-c3ea6919fc4c/ad_profile_1.m3u8",
    "meta": {
        "id": "dolby_rasp_ruid_d6f17663-c5be-56f4-a8b3-c3ea6919fc4c",
        "media": {
            "delivery": "streaming",
            "type": "application/vnd.apple.mpegurl",
            "width": 1920,
            "height": 1080,
            "codec": "h265",
            "bitrate": 5000
        }
    }
}
```




