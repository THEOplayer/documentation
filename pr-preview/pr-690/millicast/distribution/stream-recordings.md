# Stream Recordings

With ***Media Assets*** you can keep a copy of a real-time stream where media can be used for a variety of use cases such as video on demand (VOD) playback, archiving and auditing, event highlights and instant replay, etc. To support this variety of purposes there are options for the type of media assets that you will create from a stream. Here are the different types of media assets on the platform:

* **[Stream Recordings](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings.md):** Media captured by enabling *recording* on a token, the entire stream from first to last frame is stored in the cloud as a single-layer "mezzanine" recording, usually stored in an MP4 container
* **[Live-to-VOD clips](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/live-clipping.md):** These assets are "clipped" out of a live streaming workflow as a servable HLS manifest that can be used for distribution and replays of the stream. These are referred to as "live clips" or "live clipping"
* **[Media Uploads](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/how-to-upload-media-assets.md):** Files that are pre-transcoded before upload for distribution and are served over Dolby's CDN

You can work with recordings and clips either from the [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md) or using the [Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) REST API.

## How It Works[​](#how-it-works "Direct link to How It Works")

The collection of recordings and clips is referred to more broadly as **Media Assets** that have been created from your account. There are a few concepts to understand to make best use of the feature.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/8b5cccab48739f346b2bcd4b9fc3a48f827fb09924f0cb921f1f1825-media-assets-overview-6415a8e5b870d6466af51de79dfdc3c1.png)

When a [Publish Token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md) is enabled with recording or clipping, the system will generate a timeline for each incoming source. For simple streams, this may be a single broadcast source but for more complex workflows with [multi-bitrate contribution](/documentation/pr-preview/pr-690/millicast/broadcast/multi-source-broadcasting.md) and [multi-view](/documentation/pr-preview/pr-690/millicast/playback/multiview.md) applications that have multiple sources there may be more than one timeline. The **timeline** is a series of buffered segments that are kept in a cache so that they can be stored as a recording or a clip later. When a stream goes offline, one timeline ends and if it reconnects a new one begins.

There are costs associated with storage, so you can configure **expiration rules** for how long you want to maintain availability of a media stream and **storage profiles** so that you can have the service transfer files to your own preferred storage provider (AWS S3, GCS, etc.)

<!-- -->

Additional Charges - Storage

This feature will incur additional charges for cloud storage. If you would like to use this capability on your projects, please be aware of the pricing impact or reach out to your [sales/solutions](https://optiview.dolby.com/contact/) contact with any questions.

### Enable Recording and/or Clipping[​](#enable-recording-andor-clipping "Direct link to Enable Recording and/or Clipping")

You must configure a [Publish Token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md) prior to beginning a broadcast to enable the capture of media.

| Media Type                                     | Enable                                                                                                                                                                                                                                                                                              | Create                                                                                                                                                     |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Recording                                      | The [Publish Token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md) has a `record` property to enable recordings.                                                                                                                                                               | Will begin after being enabled from a [Client SDK](/documentation/pr-preview/pr-690/millicast/playback/players-sdks.md) with an active publish connection. |
| Clip                                           | The [Publish Token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md) has a `clip` property to enable live clipping.                                                                                                                                                              |                                                                                                                                                            |
|                                                |                                                                                                                                                                                                                                                                                                     |                                                                                                                                                            |
| ⚠️ This feature is not available on all plans. | Processed on demand by calling the [/api/v3/media/assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) ([Create Clip](/documentation/pr-preview/pr-690/millicast/api/record-files-create-record-clip.md) REST endpoint with **start** and **stop** timestamps. |                                                                                                                                                            |

For more detailed instructions, review one of the following tutorials:

## [📄️How-to Create Live Clips](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/live-clipping.md)

[Learn how-to setup and create live clips.](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/live-clipping.md)

## [📄️How-to Start Recordings](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/start-recording.md)

[Learn how-to setup and create recordings.](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/start-recording.md)

### Finding Your Media[​](#finding-your-media "Direct link to Finding Your Media")

You can find both recordings and clips in the [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md) or by calling the [Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) REST endpoint.

| Media Type | Availability                                                                                                                                                                                                                                                                                                                                                         | Storage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Recording  | Recordings will be processed and made available shortly after the completion of a broadcast.                                                                                                                                                                                                                                                                         | Recordings are stored within your Dolby account. You can retrieve them from the [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md) or by downloading them using the [/api/v3/media/assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) ([List Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) ) REST endpoint.                                                                                                                                                                                                                                                                                                   |
| Clip       | Call the [/api/v3/media/assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) ([List Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) REST endpoint to check the status of a clip or subscribe to [Media Webhooks](/documentation/pr-preview/pr-690/millicast/webhooks/media.md). | Clips are stored as configured by a storage profile. This can be set to send media directly to third-party cloud storage providers such as AWS S3 or GCS. You can specify where to store media when you call the [/api/v3/media/assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) ([Create Clip](/documentation/pr-preview/pr-690/millicast/api/record-files-create-record-clip.md) REST endpoint or as configured for your account from the [/api/v3/account/media/storage](/documentation/pr-preview/pr-690/millicast/api/account-create-storage-profile.md) ([Get Storage Profile](/documentation/pr-preview/pr-690/millicast/api/account-get-storage-profile.md) account configuration. |

For more detailed instructions, review one of the following tutorials:

## [📄️How-to Get Media Assets](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/how-to-get-media-assets.md)

[Learn how to filter and find recordings and clips.](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/how-to-get-media-assets.md)

## [📄️How-to Setup Clip Storage](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/how-to-setup-media-storage.md)

[Learn how to configure third-party cloud storage for clipping.](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/how-to-setup-media-storage.md)

### Media Properties[​](#media-properties "Direct link to Media Properties")

Media assets will have matching resolution and bitrate of the broadcasted stream. Any degradation of the broadcast stream due to bad network conditions will persist, however any client playback issues that result from adaptive bitrate playback will not impact the recordings or clips.

The video and audio codecs used during the broadcast will be reflected in the archived media assets.

| Video codec   | Media container |
| ------------- | --------------- |
| H.264         | MP4             |
| VP8, VP9, AV1 | WebM            |

We recommend that encoding settings use an **I-Frame** period of `1s` when using the service to increase precision when aligning keyframes with media segments.

## Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

To diagnose recording issues, such as missing recordings, review the details of the publishing settings, such as:

* Protocol: RTMP, SRT, WebRTC, or WHIP
* Encoder: Hardware and software type with version details
* Settings: Bitrate, FPS, Resolution, or Simulcast setting
* Network: Details about the network used. For example, a cellular connection may create issues with fluctuations in the network.

### Multi-source[​](#multi-source "Direct link to Multi-source")

When using [multi-source](/documentation/pr-preview/pr-690/millicast/broadcast/multi-source-broadcasting.md) broadcasting, multiple independent broadcast timelines will be created.

For `clip` assets you can identify the specific source from which to clip, or if not specified multiple clips will be created.

For `recording` assets, you will get a discrete media file for each source.

You will need to use a separate media tool if you want to automate any transizing, transrating, or stitching operations.

### Media Duration[​](#media-duration "Direct link to Media Duration")

There are some limits to how large any individual media asset will be.

| Media Type | Minimum Duration | Maximum Duration |
| ---------- | ---------------- | ---------------- |
| Recording  | 10 seconds       | 24 hours         |
| Clip       | 10 seconds       | 8 hours          |

For long-running streams that exceed 24 hours, multiple media assets will be created.

### Media Expiration[​](#media-expiration "Direct link to Media Expiration")

Consideration should be made on how long you may want to store media before it expires and is no longer available for retrieval.

| Media Type | Default | Minimum | Maximum                  |
| ---------- | ------- | ------- | ------------------------ |
| Recording  | none    | 1 day   | account in good standing |
| Clip       | none    | 1 day   | account in good standing |
| Timelines  | 30 days | 1 day   | account in good standing |

### Missing Audio for 5.1[​](#missing-audio-for-51 "Direct link to Missing Audio for 5.1")

When publishing streams using 5.1 audio format, the audio is present on the viewer live stream, but not preserved in the recording. Multi-channel audio is currently not preserved in the recording archive. The audio is only present in the recording archive if using stereo and mono formats. Multi-source stream audio is also affected if the URL is set to `&videoOnly`.

### Dashboard Recording Error[​](#dashboard-recording-error "Direct link to Dashboard Recording Error")

If the dashboard displays recording errors, contact the [Dolby support](http://support.dolby.io) team and specify as many of your publishing settings as possible.

## Learn More[​](#learn-more "Direct link to Learn More")

Learn more by exploring the [specification](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md), [developer blog](https://optiview.dolby.com/resources/blog/tag/distribution/) and [code samples](https://github.com/orgs/dolbyio-samples/repositories?q=distribution).
