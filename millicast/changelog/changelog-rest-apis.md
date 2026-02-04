# REST APIs Changes

Updates to [REST APIs](/millicast/api/analytics-account-total), and [Webhooks](/millicast/webhooks/).

## 2026-02-06 | REST APIs

### Features

- Added live-to-VOD functionality and updated documentation to describe the wide array of recording capabilities and use-cases. See [Stream Recordings](/millicast/distribution/stream-recordings/) for more info

## 2026-01-23 | REST APIs

### Fixes

- Update [Advanced Analytics API](/millicast/api/reporting/advanced-analytics-api) with a data retention period of 1 year. This will take effect in 30 days.

## 2025-05-30 | REST APIs

### Fixes

- Update publish token deletion behaviour to trigger immediate termination of all associated live streams. Previously, live streams from deleted tokens may continue to run until disconnection of publishing client.

## 2025-04-10 | REST APIs

### Features

- Adding iFrameRate, bFrameRate and pFrameRate to the encoding details in the Monitoring Stream Details endpoint.

## 2025-03-19 | REST APIs

### Features

- Introducing SRT output with the re-stream feature. Now you will have the ability to have Millicast be the SRT Caller (push) and send SRT out just like you can already with RTMP.

### Fixes

- Fixed an issue where `lowLatencyRtmp` was defaulting to `false` instead of `true` on [Create Publish Token](/millicast/api/publish-token-v-1-create-token) . This API now matches the previously documented behaviour. This will take effect for new tokens created with the API. There are no changes to the tokens created in the dashboard.

## 2024-10-15 | REST APIs & Webhooks

You'll find this latest REST API update provides access to the new live clipping feature and ability to manage media assets such as recordings and clips.

You can find additional related changes in the [Dashboard and Applications Release Notes](/millicast/changelog/changelog-dolbyio-dashboard.md).

### :new: Live Clipping

With **live clipping** you can capture a partial clip from an active ongoing stream that is immediately available. This can power many solutions such as social network sharing, replay capabilities, as well as archival and auditing. Learn more from the [Stream Recordings](/millicast/distribution/stream-recordings/index.mdx) guide.

- Use the [Media Assets](/millicast/api/media-assets-list-media-assets) REST endpoint to find all of your recordings and clips. The [Create Media Asset](/millicast/api/media-assets-create-media-asset) allows you to send a clip request that can be configured to be stored in your own cloud storage configuration. Review the [Stream Recordings](/millicast/distribution/stream-recordings/index.mdx) guide to learn more about live clipping and how to manage media assets.
- For shorter clips processing will happen very quickly, but for longer clips there can be some processing time before the media file is available for retrieval. You can use the [Media Assets](/millicast/api/media-assets-create-media-asset) endpoint to poll for the status or register a callback with the [Media Webhook](/millicast/webhooks/media.md) for status changes on any recordings or clips.
- Be aware that these new endpoints have a `/api/v3` url path.

The Recording Hooks and Recordings REST endpoints will continue to work but are being deprecated so you should transition any applications and services.

### :new: Account Settings

For capabilities such as [Geo-blocking](/millicast/distribution/access-control/geo-blocking.mdx) and [Geo-cascading](/millicast/distribution/multi-region-support/geo-cascading.mdx) there are settings that can default new publish tokens to specific values.

- The new [Account Security](/millicast/api/account-update-account-security) and [Account Distribution](/millicast/api/account-update-account-distribution) REST endpoints replace the previous endpoints for managing these account-wide settings. You'll find **geo-blocking** as a _security_ setting and **geo-cascading** as a _distribution_ setting.
- The new [Media Assets Storage Profiles](/millicast/api/account-list-storage-profiles) and [Media Assets Expiration Rules](/millicast/api/account-get-expiration-rules) REST endpoints allow you to configure and validate cloud storage and retention rules respectively. This provides default settings to be used when creating new clips and working with media assets.
- Be aware that these new endpoints have a `/api/v3` url path.

The [Read Account Geo Restrictions](/millicast/api/geo-geo) and [Read Account Geo Cascade Settings](/millicast/api/account-get-geo-cascade) endpoints will continue to work but are being deprecated so you should transition any applications and services.

## 2024-09-30 | Webhooks

### :new: ViewerConnection Hooks

For long-running streams, it can be helpful to start and stop the stream only when there are viewers connected. Using the new [ViewerConnection](/millicast/webhooks/viewerconnection.md) webhook, you can write a service that listens for `viewerAttempt` and `noActiveViewers` events to start or stop a broadcast to better manage your bandwidth usage.

View the [Webhooks](/millicast/webhooks/index.mdx) guide to learn more about setting up webhooks.

## 2024-04-11 | REST APIs

### Features

- Introduced a new Live Clipping feature in Limited Availability (LA). Live Clipping provides the ability to record streams and extract a clip, such as a highlight, before the stream is finished. This allows you to share key moments or highlights during an ongoing event, providing mezzanine file for uploading to social media or a VOD platform. The following **Record Files** REST APIs are introduced to support capturing multiple simultaneous recordings while a broadcast event is in progress:
  - Create Clip
  - Get Clip Request
  - List Clip Requests
  - List Available Clip Sources

  For more information, see the [Live Clipping](/millicast/distribution/stream-recordings/live-clipping.mdx) document. During the LA phase, this feature is behind a feature flag. Please contact your Dolby account executive or the support team if you would like to try the feature.

- Introduced a new Cloud Transcoder feature in Limited Availability (LA). One of the benefits of Millicast is that the platform can ingest multi-bitrate contribution feeds and deliver them as adaptive bitrate playback. When encoding at the studio or broadcast center, this eliminates channel fees and has the fastest glass-to-glass latency. Sometimes multi-bitrate ingest is not possible and a single, high-quality ingest is sent instead. Cloud Transcoder provides the ability to ingest SRT or RTMP and generate a latency-optimized adaptive bitrate ladder generation. The Cloud Transcoder can accept H.264 or H.265 ingest (including B-frames) and creates WebRTC-optimized adaptive bitrate delivery with only a couple of frames of latency. A new [Create Transcoder](/millicast/api/transcoder-create-transcoder) REST API is introduced for transcoder management. During the LA phase, this feature is behind a feature flag. Please contact your Dolby account executive or the support team if you would like to try the feature. For more information, see the [Cloud Transcoder](/millicast/distribution/cloud-transcoder.mdx) guide.

---

## 2023-03-29 | REST APIs

### REST APIs

Introduced the following [Analytics REST APIs](/millicast/analytics/index.md) to query information based on the viewer's tracking ID:

- [Total bandwidth per TrackingID per stream](/millicast/api/analytics-get-tracking-total-for-streams)

- [Series bandwidth per TrackingID per stream](/millicast/api/analytics-get-tracking-series-for-streams)

- [Total bandwidth for streams specified by TrackingID](/millicast/api/analytics-get-total-bandwidth-for-tracking-id)

- [Series bandwidth for streams specified by TrackingID](/millicast/api/analytics-get-series-bandwidth-for-tracking-id)

### REST APIs

#### Features

Introduced the [stream_stopstream](/millicast/api/stream-stop-stream) and [stream_stopbyaccount](/millicast/api/stream-stop-by-account) REST APIs to stop an active stream, or stop all active streams associated with the account. This allows users to stop a stream that is published to moderate their content.
