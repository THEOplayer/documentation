---
sidebar_position: 9
---

# Media Info

The **Media Info** endpoint provides a fast, normalized view of the technical characteristics of a media asset stored in the cloud. The Media Info API inspects a media file and returns a structured JSON response describing the container, duration, bitrate, and all detected tracks (video, audio, timecode, and others).

## Use Cases

The Media Info API is commonly used to:

- Inspect unfamiliar or third-party assets
- Validate source media before encoding or preview
- Drive conditional logic in automated workflows
- Confirm track counts, codecs, and durations
- Extract timecode and technical metadata for QC

It is often used as a **first step** before invoking preview, encoding, or ad-processing APIs.

## Media Info Endpoint

The Media Info endpoint is accessed using a simple HTTP GET request. You provide an accessible media URL as a query parameter.

```
https://api.galaxy.dolbyrasp.com/media-info?url=https://my_bucket/my_folder/my_file.mov
```

The response is returned as normalized JSON, making it easy to consume programmatically or inspect manually.

If the `url` is an encrypted link, make sure to use encodeURIComponent() to modify the `url` so that it can be correctly handled by the GET call.

## Media Info Response

The Media Info response is divided into two main sections:

- **file** — container-level metadata about the asset
- **tracks** — an array describing each detected track

The `file` object summarizes the overall media asset:

```json
{
  "file": {
    "id": "file0",
    "name": "my_file.mov",
    "path": "https://my_bucket.s3.us-east-1.amazonaws.com/",
    "format": "QuickTime / MOV",
    "last_modified": "Mon, 05 Aug 2024 19:58:46 GMT",
    "size_bytes": 948427028,
    "bitrate_kb": 66849.5,
    "duration_sec": "113.500000",
    "video_tracks": 1,
    "audio_tracks": 1,
    "timecode_tracks": 1
  }
}
```

### Key Fields

- **name** – File name extracted from the URL
- **format** – Container format
- **size_bytes** – File size in bytes
- **bitrate_kb** – Average bitrate of the asset
- **duration_sec** – Duration of the file in seconds
- **video_tracks / audio_tracks / timecode_tracks** – Track counts by type

The `tracks` array provides detailed information about each individual track detected in the file.

```json
{
  "tracks": [
    {
      "kind": "video",
      "codec": "prores",
      "duration": 113.5,
      "bitrate_kb": 65312.4,
      "width": 1920,
      "height": 1080,
      "frame_rate": "24/1",
      "range": "sdr"
    },
    {
      "kind": "audio",
      "codec": "pcm_s16le",
      "duration": 113.5,
      "bitrate_kb": 1536,
      "sample_rate": 48000,
      "channels": 2,
      "channel_layout": "stereo",
      "channel_placement": "FL FR"
    },
    {
      "kind": "timecode",
      "duration": 113.5,
      "start_timecode": "01:00:00:00"
    }
  ]
}
```
