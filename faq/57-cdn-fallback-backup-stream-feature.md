# How to use the CDN fallback/backup stream feature

THEOplayer offers a feature to detect more sources of content in manifest or playlist, so that the player can automatically switch to a fallback URL, in case any of the main content source is unavailable or not reachable. This feature works for both MPEG-DASH and HLS streams out of the box, and does not require any additional configuration to the player. 

## For MPEG-DASH Streams 
MPEG-DASH allows you to define multiple `<BaseURL>` elements, which points towards the root source of the content. By default, the player starts playing using the first BaseURL but if it is no longer available or not reachable, player automatically tries to use second url available. The `<BaseURL>` can be added at different layers, it is recommended to provide it on the `<MPD>` or `<Period>` level like an example below:

```xml
<?xml version="1.0"?>
<MPD type="static" ...>
	<BaseURL>https://example.com/path/to/your/content/cdn1</BaseURL>
	<BaseURL>https://example.com/path/to/your/content/cdn2</BaseURL>
	<BaseURL>https://example.com/path/to/your/content/cdn3</BaseURL>
	<Period>...</Period>
</MPD>
```

## For HLS Streams
As per HLS Specification for Apple Devices, playback on stream failover for an rendition is supported, if an redundant variant stream with a different URI is available in the manifest. A variant stream is considered to be redundant, if it has the exact same EXT-X-STREAM-INF tag as the original one. In case the first occurrence of the variant stream is unavailable or not reachable, player by default would use the redundant variant stream for continuing playback. An example of the manifest is like below:

```javascript
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:BANDWIDTH=2689440,CODECS="avc1.100.31,mp4a.40.2",RESOLUTION=1120x700
../../687317/6059a27e_1_2728/chunklist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=2689440,CODECS="avc1.100.31,mp4a.40.2",RESOLUTION=1120x700
../../687317-b/6059a27e_1_2728/chunklist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1808481,CODECS="avc1.77.40,mp4a.40.2",RESOLUTION=768x480
../../687317/6059a27e_1_1728/chunklist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1808481,CODECS="avc1.77.40,mp4a.40.2",RESOLUTION=768x480
../../687317-b/6059a27e_1_1728/chunklist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1225508,CODECS="avc1.77.32,mp4a.40.2",RESOLUTION=576x360
../../687317/6059a27e_1_1152/chunklist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1225508,CODECS="avc1.77.32,mp4a.40.2",RESOLUTION=576x360
../../687317-b/6059a27e_1_1152/chunklist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=712202,CODECS="avc1.66.30,mp4a.40.2",RESOLUTION=460x288
../../687317/6059a27e_1_640/chunklist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=712202,CODECS="avc1.66.30,mp4a.40.2",RESOLUTION=460x288
../../687317-b/6059a27e_1_640/chunklist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=560232,CODECS="avc1.66.30,mp4a.40.2",RESOLUTION=288x180
../../687317/6059a27e_1_448/chunklist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=560232,CODECS="avc1.66.30,mp4a.40.2",RESOLUTION=288x180
../../687317-b/6059a27e_1_448/chunklist.m3u8
```
## Resources
* [Apple Variant Stream Documentation](https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/creating_a_master_playlist)
* [MPEG-DASH Base URL Documentation](https://dashif.org/docs/DASH-IF-IOP-v4.3.pdf)