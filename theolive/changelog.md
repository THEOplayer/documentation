# Changelog

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
