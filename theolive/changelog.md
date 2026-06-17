# Changelog

## [11.5.0] - 2026-06-16

- Fixed duplicate per-frame closed-caption SEI when encoding below the source frame rate
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
