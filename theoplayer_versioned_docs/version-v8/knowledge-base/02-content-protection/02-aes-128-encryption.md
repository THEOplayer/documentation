# AES-128 Encryption

The Apple [HTTP Live Streaming (HLS)](../../knowledge-base/04-streaming/01-http-live-streaming.md) specification uses AES-128 encryption to provide content protection. The Advanced Encryption Standard (AES) is a specification for the encryption of electronic data established by the U.S. National Institute of Standards and Technology. In case of HLS with AES-128, individual media segments get encrypted with a 16-octet key. Most modern streaming servers have simple configuration options for enabling AES-128 on HLS streams.

## Content Protection in THEOplayer

THEOplayer supports decryption and playback of HLS streams with AES-128 content protection out of the box, without extra configuration in the player. In order to play AES-128 content protected streams, the decryption key and an optional initialization vector have to be provided in the manifest. When configured correctly, THEOplayer allows playback of AES-128 content protected streams on all supported devices in real time. It allows for the usage of a single key, or a rotating key.

In order to make sure THEOplayer can decrypt the stream, make sure the following information is correct in the manifest:

- If a decryption key is specified, it is relevant for all following media segments. This allows you to specify a key for each segment or one for the whole manifest
- The decryption key can be hosted externally (by referencing the key URL) or embedded in the manifest file (by key value)

## Cross Origin Resource Sharing (CORS)

Make sure CORS is enabled both on the **media segments** that have to be downloaded, decrypted and played as well as the **decryption key** if referenced externally in the manifest file.

## Examples

### THEOplayer example

There’s a demo of THEOplayer playing an AES-128 Content Protected stream at [https://demo.theoplayer.com/drm-aes-protection-128-encryption](https://demo.theoplayer.com/drm-aes-protection-128-encryption).

### Video on Demand stream with multiple encryption keys

An example manifest of a 44-second long VOD stream protected with AES-128 content protection - each media segment has its own key.

```text
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-ALLOWCACHE:1
#EXT-X-KEY:METHOD=AES-128,URI="segment-00000.key"
#EXTINF:4.458667,
segment-00000.ts.enc
#EXT-X-KEY:METHOD=AES-128,URI="segment-00001.key"
#EXTINF:4.010000,
segment-00001.ts.enc
#EXT-X-KEY:METHOD=AES-128,URI="segment-00002.key"
#EXTINF:4.468667,
segment-00002.ts.enc
#EXT-X-KEY:METHOD=AES-128,URI="segment-00003.key"
#EXTINF:3.893000,
segment-00003.ts.enc
#EXT-X-KEY:METHOD=AES-128,URI="segment-00004.key"
#EXTINF:4.007333,
segment-00004.ts.enc
#EXT-X-KEY:METHOD=AES-128,URI="segment-00005.key"
#EXTINF:3.292667,
segment-00005.ts.enc
#EXT-X-KEY:METHOD=AES-128,URI="segment-00006.key"
#EXTINF:4.011667,
segment-00006.ts.enc
#EXT-X-KEY:METHOD=AES-128,URI="segment-00007.key"
#EXTINF:4.001000,
segment-00007.ts.enc
#EXT-X-KEY:METHOD=AES-128,URI="segment-00008.key"
#EXTINF:4.011667,
segment-00008.ts.enc
#EXT-X-KEY:METHOD=AES-128,URI="segment-00009.key"
#EXTINF:4.001000,
segment-00009.ts.enc
#EXT-X-KEY:METHOD=AES-128,URI="segment-00010.key"
#EXTINF:4.011667,
segment-00010.ts.enc
#EXT-X-TARGETDURATION:5
#EXT-X-ENDLIST
```
