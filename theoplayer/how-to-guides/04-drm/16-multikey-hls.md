# Multi-key HLS

There are multiple DRM key systems on the market to choose from. The most popular ones are Google Widevine, Microsoft PlayReady and Apple FairPlay. Under the hood, all these systems encrypt the media samples using the AES-128 encryption algorithm. AES-128 is a standardized block-cipher that allows for multiple ways of choosing the blocks. Widevine and PlayReady both use `CTR` and FairPlay uses `CBC`. Therefore, it was possible to share segments between Widevine and PlayReady protected streams, but not with FairPlay protected stream. 
However, support has been added for Widevine and PlayReady with AES-128 in `CBC` mode. Hence, it is now possible to create HLS streams compatible with all these key systems. Where you previously had to encode the stream twice, this is no longer needed. A multi-key HLS stream will play in all web platforms that support MSE and either Widevine, PlayReady or FairPlay.

## The HLS playlist

A multi-key HLS playlist could look like this:

<pre><code>#EXTM3U
#EXT-X-TARGETDURATION:6
#EXT-X-VERSION:5
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-INDEPENDENT-SEGMENTS
<b>#EXT-X-KEY:METHOD=SAMPLE-AES,KEYFORMAT="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",KEYFORMATVERSIONS="1",URI="WIDEVINE_INIT_DATA_URL"</b>
<b>#EXT-X-KEY:METHOD=SAMPLE-AES,KEYFORMAT="com.microsoft.playready",KEYFORMATVERSIONS="1",URI="PLAYREADY_INIT_DATA_URL"</b>
<b>#EXT-X-KEY:METHOD=SAMPLE-AES,KEYFORMAT="com.apple.streamingkeydelivery",KEYFORMATVERSIONS="1",URI="FAIRPLAY_INIT_DATA_URL"</b>
#EXT-X-MAP:URI="init.mp4"
#EXTINF:6,
1.mp4
#EXTINF:6,
2.mp4
#EXTINF:6,
3.mp4
#EXTINF:6,
4.mp4
#EXTINF:6,
5.mp4
#EXT-X-ENDLIST
</code></pre>

There is an `#EXT-X-KEY` tag for all the key systems which all have method `SAMPLE-AES`. The `KEYFORMAT` specifies the key system:

- `urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed` for Widevine
- `com.microsoft.playready` for PlayReady
- `com.apple.streamingkeydelivery` for FairPlay

The `URI` is either a data URI containing the initialization data, or a URI pointing to the initialization data. For
more information, please check out the specifications for [Widevine](https://www.academia.edu/36030972/Widevine_DRM_for_HLS), [PlayReady](https://docs.microsoft.com/en-us/playready/packaging/mp4-based-formats-supported-by-playready-clients?tabs=case4) and [FairPlay](https://developer.apple.com/streaming/fps/).

## Configuring THEOplayer

A corresponding player configuration looks like:

```javascript
player.source = {
  sources: [
    {
      src: "https://yourdomain.com/playlist.m3u8",
      type: "application/x-mpegurl",
      contentProtection: {
        widevine: {
          licenseAcquisitionURL: "https://widevine-server.com/license"
        },
        playready: {
          licenseAcquisitionURL: "https://playready-server.com/license"
        },
        fairplay: {
          certificateURL: "https://fairplay-server.com/certificate",
          licenseAcquisitionURL: "https://fairplay-server.com/license"
        }
      }
    }
  ]
};
```

Note that this feature is available on the current HLS pipeline (default since THEOplayer 4.X). To use it in previous versions, the `lowLatency` flag must be set to true. 
