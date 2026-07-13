# Changelog

## [11.7.0] - 2026-07-13

- Added support for ingesting Dolby AC-4 audio, including Dolby Atmos content
- Preferred Dolby Atmos over AAC HLS variants by giving them a higher `SCORE` and listing them first
- Fixed HLS variants referencing a `CLOSED-CAPTIONS` group when no captions are configured
- Fixed DVR playlists and init segments being cached too long, keeping players on stale content after updates such as
  an ABR ladder change
- Fixed S3 DVR restore exposing ABR layers with different playable windows after a restart with a changed ABR ladder
- Added TTML subtitle renditions to the HLS VOD/DVR output on S3
- Skipped the SDR-to-Vision LUT automatically for already-PQ (HDR10) ingest so native HDR10 sources produce Dolby Vision
  without double-converting
- Fixed Nvidia JPEG thumbnails (`nvjpegenc`) failing to register on CUDA 13 hosts
- Added an optional `disableHardwareAcceleration` video quality flag (default false) to force software encoding
- Added a `?live` query marker for `file://` ingest URLs that paces the file at real time and loops on end-of-stream
- Fixed an issue where the engine would be stuck on large DTS jumps in the ingest.
- Added MP4/MOV support to file ingest
- Added Apple ProRes video decoding to ingest (CPU/libav)
- Added an HLS `SCORE` attribute so players prefer H.265 renditions over H.264 when they can decode them
- Added Dolby Atmos encoding
- Added Dolby Vision Profile 8.1 output
- Added BT.709 SDR to HDR10 conversion using Dolby SDR-to-Vision 3D LUTs, selected via the `video.vision` config
- Added support for x86-64-v3 CPU baseline
- Added support for DVB-TTML in SRT conversion to TTML subtitles in HLS (IMSC1 `stpp`)

## [11.5.2] - 2026-07-01

- Fixed ingest failing to negotiate for high-bit-depth or 4:2:2 sources (e.g. H.264 High 4:2:2 10-bit) by converting decoded video to a supported pixel format

## [11.5.1] - 2026-06-17

- Enable PlayReady key system by default

## [11.5.0] - 2026-06-16

- Fixed duplicate per-frame closed-caption SEI when encoding below the source frame rate
- Added BT.709 SDR to HDR10 conversion following the Dolby + MovieLabs best practices
- Fixed SCTE-35 segmentation descriptor parsing failing when optional sub-segment fields are absent
- Carried custom in-stream metadata as ID3
- Fixed Nielsen ID3 `emsg` event duration
- Exposed the active codec in the CMSD header
- Added `CODECS` attribute to the HLS multivariant playlist
- Add support for h265 HLS
- Add support for Nvidia NVENC encoding / decoding
- Add support for Apple VTENC encoding / decoding
- Stopped engine going into Error state when ingest not available yet

## [11.4.0] - 2026-06-08

- Fixed Kafka publisher lagging behind and dropping metric messages
- Fixed bitrate metric being reported too high
- Added support for single ingest
- Fixed Kafka publisher stopping permanently after an interruption
- Log incoming AMQP messages
- Added timestamps to metrics

## [11.3.0] - 2026-05-19 (unavailable)

- Improved error logging
- Added `targetBuffer` to HESP manifest
- Added `holdBack` to HLS media playlists
- Added support for packaging multiple frames per chunk in HESP
- Added support for SEI metadata to EMSG metadata conversion
- Added margin to bandwidth in HESP manifest
- Added support for single ingest

## [11.1.0] - 2026-04-20

- Added recurring TLA status update
- Use Kafka for ingest metrics
- Added support for PlayReady
- Added support for DRM with both CENC and CBCS encryption.

## [11.0.0] - 2026-04-07

- Fixed MPEG-TS HLS not returning 404 when sub playlists do not exist yet
- Migrated engine config from env vars + JSON to file-based YAML config
- Skip ffprobe on pipeline retry when ingest was never successfully playing

## [10.13.0] - 2026-03-31

- Added image overlay support
- Fixed MPEG-TS HLS not returning 404 when sub playlists do not exist yet
- Upgraded to GStreamer 1.28.1
- Upgraded to Rust 1.94

## [10.12.1] - 2026-03-26

- Make protection optional in HESP manifest instead of returning an empty one when no DRM is configured

## [10.12.0] - 2026-03-06

- Optimized encode of HLS when HESP is disabled
- Allow enabling / disabling of individual protocols
- Improved quality of de-interlacing
- Improved quality of video scaler
- Upgraded to GStreamer 1.28
- Simplified stream config
- VMAF
- eRTMP built-in from GStreamer
- Improved logging
- Disable PlayReady
- Deprecate /streams

## [10.9.0] - 2026-01-30

- Initial changelog
