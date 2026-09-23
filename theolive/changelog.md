# Changelog

## [11.11.0] - 2026-09-23

- Added RFC 9218 priority hints to every HLS response (`priority: u=1` on playlists, `u=2` to `u=6`
  on media in ascending order of the rendition's bit rate), so Apple devices keep Low-Latency HLS
  playback over HTTP/3 instead of falling back to standard latency. HESP-3 objects streamed while
  in production are marked incremental (`i`), thumbnails are served at the lowest urgency (`u=7`)
  so they never delay media, and error responses at the highest (`u=1`) so a player learns of a
  missing object without waiting behind a segment
- Fixed the HLS (TS) multivariant playlist omitting the `CODECS` attribute; every variant now
  declares its H.264 profile and level and the AAC audio codec
- Every error response now says how long a CDN may keep it: a 404 for a playlist or segment, which
  the next segment or the next restart may bring into existence, lasts one second, so a CDN no
  longer keeps serving one it picked up while the channel was restarting. Segments that have left
  the DVR window are answered with `410 Gone`, and paths the engine never serves or requests that
  can never succeed stay 404 or 400, all cacheable for an hour; internal errors are not cacheable
- Media playlists are now cacheable for half a target duration (at least a second), and the
  responses to blocking playlist reloads (`_HLS_msn`) for three target durations; segments for an
  hour rather than a day. Playlists no longer forbid a cache from serving them stale
  (`must-revalidate`)

## [11.10.0] - 2026-09-18

- Added Low-Latency HLS and HESP-3 output to every channel, no configuration needed: `main.m3u8` keeps
  serving standard HLS, while `main.hesp.m3u8` serves the same renditions with partial segments and the
  HESP-3 tags. Every playlist accepts a `latency` query parameter (milliseconds) naming the end-to-end
  latency the player asks for and is sized for it: `HOLD-BACK` (now declared on every playlist) and
  `PART-HOLD-BACK` follow the buffer that latency leaves the player once the encoder's share is spent,
  the HESP-3 multivariant playlist publishes that buffer as `EXT-X-HESP-TARGET-BUFFER` (at least 0.5 s),
  and a buffer of more than four segment durations is served as standard HLS. Every media playlist of a
  channel carries the same `EXT-X-SERVER-CONTROL`, as the HLS specification requires
- HESP-3 media playlists signal how far the stream has progressed into the segment in production
  (`EXT-X-HESP-PROGRAM-DATE-TIME`), and every media playlist response carries the engine's clock at
  generation (`x-hesp-origin-now`), so a joining player lands at a predictable distance from live even
  when the playlist was served from a cache
- Added SCTE-35 ad break signaling to HLS, enabled by the new optional `hls.scte35` config key (off by
  default): `splice_insert` cues in an MPEG-TS ingest are exposed in every media playlist as
  `EXT-X-DATERANGE` tags carrying the `SCTE35-OUT` / `SCTE35-IN` payloads, and segments are cut at the
  splice points so an ad decision server can splice on segment boundaries. When off, the SCTE-35 PID of
  the ingest is left unparsed
- Added SCTE-35 `time_signal` cues from an MPEG-TS ingest to the `EXT-X-DATERANGE` tags of every
  HLS media playlist, alongside the `splice_insert` cues. Advertisement, placement opportunity and
  promo segmentation descriptors open a range with `SCTE35-OUT` and `PLANNED-DURATION` and close it
  with `SCTE35-IN`, `END-DATE` and `DURATION`, paired by their segmentation event id; other
  segmentation descriptors and time signals without any mark their time with `SCTE35-CMD`. A segment
  boundary is cut at every time signal that carries an avail, DTMF or segmentation descriptor
- `EXT-X-DATERANGE` `START-DATE` and `END-DATE` attributes are now written in the same form as
  `EXT-X-PROGRAM-DATE-TIME`: UTC with a `Z` suffix and millisecond precision, instead of `+00:00` with
  a varying number of fraction digits
- Kept HLS playlists and published media available for 10 seconds after graceful shutdown, with
  `EXT-X-ENDLIST` signaling the end of the stream
- Fixed engine crashes when an MPEG-TS ingest carries an SCTE-35 section that fails validation;
  such sections are now skipped with a warning without interrupting playback
- Fixed SCTE-35 cues padded with alignment stuffing before their checksum being rejected instead
  of forwarded to the HLS playlists
- Fixed HESP playback failing to start when the player requested an initialization segment slightly
  ahead of the live edge
- Fixed SRT ingest in listener mode (`?mode=listener`) binding a random port instead of the configured one,
  which left the channel restarting on "no live data" forever; `localport` in the ingest URL also no longer
  crashes the engine
- Fixed renditions whose aspect ratio differs from the source (such as a portrait 9:16 ladder fed by a
  16:9 ingest) being encoded with non-square pixels, which Chrome rendered squeezed while Safari
  rendered it correctly. Such renditions now keep square pixels and are letterboxed to fit, so they
  render identically in every browser

## [11.9.0] - 2026-09-03

- Sorted media playlists in HLS multivariant playlists by descending preference score
- Fixed brief gaps between contiguous DVB-TTML subtitles when cue durations differ from packet timing
- Fixed HLS multivariant playlists not declaring `CLOSED-CAPTIONS=NONE` on variants when no closed
  captions are configured, as the specification requires
- Removed the `EXT-X-INDEPENDENT-SEGMENTS` tag from HLS media playlists; it stays declared once in the
  multivariant playlist, matching Apple's validation guidance
- Improved the quality of GPU-encoded H.264 renditions at 720p and above, which were encoded with the
  H.264 Main profile while CPU-encoded renditions of the same rung used High. All renditions at 720p and
  above now use High at the same bitrate, worth around 1 VMAF point at a 1080p 6.5 Mbps rung and more at
  lower bitrates. Renditions below 720p stay on Main for decoder compatibility, and the `CODECS`
  attribute in HLS manifests changes accordingly for the affected renditions
- Fixed H.265 and H.264 ingests the GPU decoder cannot handle (such as 4:2:2 chroma subsampling)
  leaving the channel stuck in a reconnect loop; those streams now fall back to software decoding

## [11.8.1] - 2026-08-06

- Fixed RTMP ingest failing with "stream not found" against servers that only offer the stream as live

## [11.8.0] - 2026-07-29

- Added Dolby Atmos encoding
- Added Dolby Vision Profile 8.1 output
- Fixed language tags in HLS manifests not following the standard (e.g. `en` should be used instead of `eng`)
- Fixed HLS SDR variants missing the video range declaration that players require when HDR variants are also offered
- Changed an ingest that connects but sends no data to be treated the same as an ingest that does not connect: the
  channel stays in the waiting state instead of showing an error, and stops after the ingest timeout

## [11.7.2] - 2026-07-22

- Fixed MPEG-TS ingests failing when the initial PMT does not announce all tracks yet (e.g. audio only), which are
  completed by a later PMT update

## [11.7.1] - 2026-07-13

- Fixed the S3 DVR and VOD root manifests being written without video codecs in `CODECS` at stream start

## [11.7.0] - 2026-07-13

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
