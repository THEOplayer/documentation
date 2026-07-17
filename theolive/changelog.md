# Changelog

## [11.7.1] - 2026-07-13

- Fixed the S3 DVR and VOD root manifests being written without video codecs in `CODECS` at stream start

## [11.7.0] - 2026-07-13

- Added Apple ProRes video decoding support
- Added an HLS `SCORE` attribute so players prefer H.265 renditions over H.264 when they can decode them
- Added support for DVB-TTML on ingests to generate captions for distribution
- Added the ability to auto-generate captions and translations
- Fixed HLS variants referencing a `CLOSED-CAPTIONS` group when no captions are configured
- Fixed various HLS DVR issues with channels stopping and starting with ABR ladder changes in between
- Fixed an issue where the stream would be stuck on large DTS jumps in the ingest

## [11.5.2] - 2026-07-01

- Fixed ingest failing for high-bit-depth or 4:2:2 sources (e.g. H.264 High 4:2:2 10-bit)

## [11.5.1] - 2026-06-17

- Enabled the PlayReady key system by default

## [11.5.0] - 2026-06-16

- Added BT.709 SDR to HDR10 conversion following the Dolby + MovieLabs best practices
- Carried custom in-stream metadata as ID3
- Exposed the active codec in the CMSD header
- Added `CODECS` attribute to the HLS multivariant playlist
- Added support for H.265 HLS
- Added support for NVIDIA (NVENC) hardware encoding / decoding
- Fixed duplicate per-frame closed-caption SEI when encoding below the source frame rate
- Fixed SCTE-35 segmentation descriptor parsing failing when optional sub-segment fields are absent
- Fixed Nielsen ID3 `emsg` event duration
- Stopped the engine going into Error state when the ingest is not available yet

## [11.4.0] - 2026-06-08

- Added support for single ingest
- Fixed metric updates lagging behind and being dropped
- Fixed the bitrate metric being reported too high
- Fixed metrics stopping permanently after an interruption

## [11.3.0] - 2026-05-19 (unavailable)

- Added `targetBuffer` to HESP manifest
- Added `holdBack` to HLS media playlists
- Added support for packaging multiple frames per chunk in HESP
- Added support for SEI metadata to EMSG metadata conversion
- Added support for single ingest
- Added margin to bandwidth in HESP manifest

## [11.1.0] - 2026-04-20

- Added support for PlayReady
- Added support for DRM with both CENC and CBCS encryption

## [11.0.0] - 2026-04-07

- Fixed MPEG-TS HLS not returning 404 when sub playlists do not exist yet

## [10.13.0] - 2026-03-31

- Added image overlay support
- Fixed MPEG-TS HLS not returning 404 when sub playlists do not exist yet

## [10.12.1] - 2026-03-26

- Made protection optional in the HESP manifest instead of returning an empty one when no DRM is configured

## [10.12.0] - 2026-03-06

- Allowed enabling / disabling of individual protocols
- Optimized encode of HLS when HESP is disabled
- Improved quality of de-interlacing
- Improved quality of video scaler
- Disabled PlayReady

## [10.9.0] - 2026-01-30

- Initial changelog
