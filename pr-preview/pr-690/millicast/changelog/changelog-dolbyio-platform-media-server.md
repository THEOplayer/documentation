# Platform and Media Server Changes

Updates to Dolby OptiView's Real-time Streaming Platform and Media Server.

## 2026-05-28[​](#2026-05-28 "Direct link to 2026-05-28")

### Media Server[​](#media-server "Direct link to Media Server")

#### Features[​](#features "Direct link to Features")

* Improves the stability and consistency of the Adaptive Bitrate (ABR) layer selection for WebRTC and changes the default ABR strategy to "bandwidth" mode consistent with OptiView Player instead of the old legacy mode that is now deprecated and no longer available except through special request.
* Bandwidth strategy now starts on the highest quality layer instead of the lowest quality layer to remain consistent with the OptiView Player.

## 2025-09-09[​](#2025-09-09 "Direct link to 2025-09-09")

### Media Server[​](#media-server-1 "Direct link to Media Server")

#### Features[​](#features-1 "Direct link to Features")

Introducing Adaptive Bitrate (ABR) Strategies for WebRTC. This feature introduces the ability to choose on a viewer-by-viewer basis how aggressively to apply ABR switching when ABR streaming is used. It is inline with [OptiView Player's existing strategies](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/abr.md#abr-configuration).

For now, users must set this value when choosing playback to utilize the feature, in the future we will set `quality` to be the default.

The options are:

* `quality`: This strategy is more aggressive at up-switching and will try to maximize available bandwidth at any given moment. It tries to connect on the highest quality possible and stay there. Recommended for audiences with a network and where quality is most important.
* `bandwidth`: This strategy is in between `quality` and `performance` and isn't as aggressive as `quality`. It will more quickly switch down layers in cases of poor network and will attempt to switch back up more conservatively. It is recommended as a balance between `quality` and `performance`
* `performance`: This strategy will prioritize smooth playback over highest quality. It will start with the lower layer available and will switch up more slowly when network performance is consistent and stable.
* *null*: Omitting this value will preserve the legacy behavior of our ABR algorithm as it is today

As this is a new feature, we welcome customer feedback. For even more information, please see our [player documentation](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/web/player.md#controlling-abr-strategies).

## 2025-08-04[​](#2025-08-04 "Direct link to 2025-08-04")

### Media Server[​](#media-server-2 "Direct link to Media Server")

#### Features[​](#features-2 "Direct link to Features")

* With [OBS 31.1](https://github.com/obsproject/obs-studio/releases/tag/31.1.2), you can now use [Enhanced Broadcasting](/documentation/pr-preview/pr-690/millicast/software-encoders/obs/enhanced-broadcasting-multitrack-video.md) to do all of the ABR generation at the edge. See the linked page for more details on how to work with eRTMP and OBS. In a future release look for full ladder control from the server-side. For more information, please reach out to your account representative
* There is a new beta feature to correct audio and video timestamps that are delayed or suddenly change in an incoming stream. As the feature is in beta, please contact your Dolby OptiView account representative to have this enabled for your account. The same feature can improve recording audio-video sync in packet-loss.
* The [Cloud Transcoder](/documentation/pr-preview/pr-690/millicast/distribution/cloud-transcoder.md) now supports fraction frame rates (`59.94` and `29.97`). These frame rates need to be enabled on your account so please contact your account representative to get started

#### Fixes[​](#fixes "Direct link to Fixes")

* In the enhanced RTMP workflow, there were some cases where ABR layers were not always viewable in neighboring regions. This is now fixed and all layers will be available in all regions with eRTMP

## 2025-06-23[​](#2025-06-23 "Direct link to 2025-06-23")

### Media Server[​](#media-server-3 "Direct link to Media Server")

#### Features[​](#features-3 "Direct link to Features")

* Re-stream has had an update which will allow you to add, enable, and disable re-streams for a running stream so that you can restart an individual re-stream without having to restart your entire contribution stream. See more in our [re-stream](/documentation/pr-preview/pr-690/millicast/distribution/re-streaming.md) guide

#### Fixes[​](#fixes-1 "Direct link to Fixes")

* Minor improvements such as RTT added for SRT connections in Live Monitor

## 2025-05-03[​](#2025-05-03 "Direct link to 2025-05-03")

### Media Server[​](#media-server-4 "Direct link to Media Server")

#### Features[​](#features-4 "Direct link to Features")

* Added `sourceId` and `simulcastId` metadata to the payload of [Feed Webhooks](/documentation/pr-preview/pr-690/millicast/webhooks/feeds.md)

#### Fixes[​](#fixes-2 "Direct link to Fixes")

* Fixed packet loss metrics in the Live Monitor being incorrect when the first few packets were lost
* Improved A/V sync in recordings when there is packetloss on the ingest
* Fixed undercalculation of usage for WebRTC and RTMP ingests

## 2025-03-13[​](#2025-03-13 "Direct link to 2025-03-13")

### Media Server[​](#media-server-5 "Direct link to Media Server")

#### Features[​](#features-5 "Direct link to Features")

* Introducing SRT output with the re-stream feature. Now you will have the ability to have Millicast be the SRT Caller (push) and send SRT out just like you can already with RTMP.
* Introducing Auto-Configuration for OBS Broadcaster. Now you can choose Dolby Millicast as a streaming provider in OBS and enable encoding Adaptive Bitrate (ABR) from OBS to achieve smooth playback on any device without incurring channel fees or using the Real-time Cloud Transcoder. Read more in our [OBS Enhanced Multitrack Video Guide](/documentation/pr-preview/pr-690/millicast/software-encoders/obs/enhanced-broadcasting-multitrack-video.md).
* Introducing RTMP Enhanced V2 support! An encoder has always been able to send multiple video tracks over separate RTMP connections to deliver Adaptive Bitrate (ABR) to viewers, now this is possible with a single RTMP connection and multiple video tracks.
* Introducing IPV6 support for playback. For viewers on Internet Service Providers (ISPs) that only provide IPV6 addresses, we have introduced support for IPV6. This is currently opt-in, please contact your account manager if you would like to test this feature. This will be available more broadly in a future release.
* Added the ability to increase the minimum delay for RTMP publishing so that multiple video tracks can be manually timed for sync when an encoder delay exists between ABR layers. Refer to the `extraLatency` parameter in our [Publishing Parameters](/documentation/pr-preview/pr-690/millicast/broadcast/publishing-parameters.md) section.
* Introducing High Availability Management. This feature allows for effective switching between primary and redundant stream(s) through reassignment of priority for specified streams. Stream priority can now be set on the Publish Token. Read more in the [High Availability Management](/documentation/pr-preview/pr-690/millicast/broadcast/redundant-ingest/high-availability-management.md) guide.

## 2024-11-14[​](#2024-11-14 "Direct link to 2024-11-14")

### Media Server[​](#media-server-6 "Direct link to Media Server")

* Where incorrect (higher then expected) viewer counts were being reported a fix has been implemented to report the correct number of viewers
* For Metadata workflows with RTMP utilizing AMF OnFi messages for [inserting timestamps](/documentation/pr-preview/pr-690/millicast/playback/frame-metadata.md#metadata-source-identification), to improve playback to a bug in Google Chrome, timestamps will only be reported on keyframes. The issue with Chrome has been patched and will resolve as users update their versions of Chrome. For more information on this bug, please refer to our [knowledge base article](https://support.dolby.io/hc/en-au/articles/11057317291663-Playback-Issues-with-SEI-Messages-in-H-264-Streaming).

## 2024-05-28[​](#2024-05-28 "Direct link to 2024-05-28")

### Media Server[​](#media-server-7 "Direct link to Media Server")

#### Features[​](#features-6 "Direct link to Features")

* Introduced initial support for our "re-stream" capability. This is the ability to stream from Dolby to other platforms via RTMP. For more details, review our [documentation for Re-stream](/documentation/pr-preview/pr-690/millicast/distribution/re-streaming.md). If you want to start using this feature, please [contact our sales team](https://optiview.dolby.com/contact/) .
* Updates to our Cloud Transcoder to pass RTMP AMF messages to every simulcast layer of the adaptive bitrate ladder.

#### Fixes[​](#fixes-3 "Direct link to Fixes")

* Fix for an issue where in some cases with [Backup Publishing](/documentation/pr-preview/pr-690/millicast/broadcast/redundant-ingest.md) audio did not fail over.
* Improvements to error messages with our [Live Clipping](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/live-clipping.md) feature.
* Improvements in certain cases when streaming with AV1.
* Fixed an issue where the plus character (+) in an SRT URL was not handled as whitespace correctly.
* Fix for certain media streams where the top layer desynchronized from the lower renditions when using Cloud Transcoder with "Passthrough" mode.

## 2024-04-11[​](#2024-04-11 "Direct link to 2024-04-11")

### New Regional Clusters in Sao Paulo and Sydney[​](#new-regional-clusters-in-sao-paulo-and-sydney "Direct link to New Regional Clusters in Sao Paulo and Sydney")

Deployed new regional clusters that can be [specified by a stream or an account](/documentation/pr-preview/pr-690/millicast/api/cluster-get-clusters-info.md). This increases the global footprint of the service and reduces end-to-end latency in specific regions.

## 2024-03-14[​](#2024-03-14 "Direct link to 2024-03-14")

### Media Server[​](#media-server-8 "Direct link to Media Server")

#### Features[​](#features-7 "Direct link to Features")

* Introduced support for obtaining an individual viewer's bandwidth consumption while using syndication. The feature introduces a new `customViewerData` parameter for creating a self-signed token. Customers who have this feature enabled can pass per-viewer metadata via a self-signed subscriber token on a per-viewer basis and then get individual viewer records back as a report via the [Advanced Analytics](/documentation/pr-preview/pr-690/millicast/api/reporting/records-get-viewer-records.md) API. If you want to start using this feature, please contact sales.

* Introduced server updates to support extracting RTMP Action Message Format (AMF) messages and passing them through to the client. Please contact your sales engineer for a demonstration.

* Improved SRT ingests to take advantage of the **Low latency RTMP** flag on a publishing token. When this flag is enabled for an SRT ingest, a buffer responsible for synchronizing audio and video is reduced to reduce end-to-end delay with SRT. This feature improves SRT latency, but in some cases where audio packets are not delivered close together, this flag may result in out-of-sync audio and video. We recommend disabling this flag in that case.

#### Fixes[​](#fixes-4 "Direct link to Fixes")

Improved capture timestamps in certain ingest cases.

***

## 2024-01-22[​](#2024-01-22 "Direct link to 2024-01-22")

### Media Server[​](#media-server-9 "Direct link to Media Server")

#### Features[​](#features-8 "Direct link to Features")

* Introduced a geo-cascading feature to improve the streaming experience for viewers around the world. The feature uses a network of clusters that are strategically placed in various geographical locations. This way, viewers can connect to clusters located closest to their location and experience reduced latency and improved reliability. For more information, see the [Geo-cascading](/documentation/pr-preview/pr-690/millicast/distribution/multi-region-support/geo-cascading.md) guide.

* The platform supports publishing multiple redundant feeds into more than one region to improve the reliability of broadcasting. The platform now supports a **priority** publish parameter that lets you specify the priority of each feed. This way, in the case the primary feed disconnects, viewers will automatically receive the available feed with the highest priority. For more information, see the [Redundant Ingest](/documentation/pr-preview/pr-690/millicast/broadcast/redundant-ingest.md) document.

* Introduced the **videoTargetBitrate** publish parameter for defining the target bitrate of the streamed video content when using SRT or RTMP. The parameter helps the service determine what layer to send to viewers while using [Simulcast](/documentation/pr-preview/pr-690/millicast/distribution/using-webrtc-simulcast.md) to deliver a more consistent viewer experience. For more information, see the [publish parameters](/documentation/pr-preview/pr-690/millicast/broadcast.md#publish-parameters) section of the [Broadcast](/documentation/pr-preview/pr-690/millicast/broadcast.md) document.

***

## 2023-10-30[​](#2023-10-30 "Direct link to 2023-10-30")

### Media Server[​](#media-server-10 "Direct link to Media Server")

#### Features[​](#features-9 "Direct link to Features")

* The server now supports the H.265 codec for Secure Reliable Transport (SRT) streaming and recording. Using the codec is available only in native applications, as web browsers do not yet support it for WebRTC.

* Support for [Enhanced RTMP](https://github.com/veovera/enhanced-rtmp) to allow using Real-Time Messaging Protocol (RTMP) with the H.265 and AV1 codec. This feature is available in [OBS](https://obsproject.com/blog/obs-studio-29-release-notes) as well. HDR support is not yet supported.

#### Fixes[​](#fixes-5 "Direct link to Fixes")

Minor fixes and improvements for RTMP publishers.

## 2023-07-24[​](#2023-07-24 "Direct link to 2023-07-24")

### Media Server[​](#media-server-11 "Direct link to Media Server")

#### Features[​](#features-10 "Direct link to Features")

* Added a new **low latency** mode to RTMP publishing, which is enabled by default on all new publishing tokens. This feature reduces RTMP latency by 200-400ms.
* Introduced significant improvements to connection rates and setup times.

#### Fixes[​](#fixes-6 "Direct link to Fixes")

* Fixed an issue with the Videon Edgecaster which required a restart to stream with RTMP.
* Fixed an SRT A/V desync issue which was observed with several hardware encoders, such as Kiloview, LiveU, and PVI.
* Fixed an SRT recording issue where audio playback was impacted by significant audio drops with several hardware encoders such as Kiloview, LiveU, and PVI.
* Fixed a race condition that could lead to recording errors.

***

## 2023-03-29[​](#2023-03-29 "Direct link to 2023-03-29")

### Support for Syndicated Content[​](#support-for-syndicated-content "Direct link to Support for Syndicated Content")

The Dolby.io Real-time Streaming APIs now support the ability to track usage data across multiple streaming partners on a single stream by adding a `trackingId` parameter to an API-generated [Subscribe token](/documentation/pr-preview/pr-690/millicast/token-api.md) or [self-signed subscribe tokens](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md).

This "syndication" mechanism allows you to send the same stream to multiple cohorts of viewers whilst tying viewer data to a cohort via `trackingId`.

By querying your aggregated viewer data with the [Analytics API](/documentation/pr-preview/pr-690/millicast/analytics-api.md) you can determine how much bandwidth was consumed, how many viewers were watching for which provider, and a few other statistics.

For more information, see the [Syndication](/documentation/pr-preview/pr-690/millicast/distribution/syndication.md) article.

***

## 2022-12-04[​](#2022-12-04 "Direct link to 2022-12-04")

### Support for SRT Ingest[​](#support-for-srt-ingest "Direct link to Support for SRT Ingest")

Added support for ingesting SRT protocol. SRT has become the standard for replacing RTMP as a contribution protocol for broadcast workflows over IP.

For more information, see:

* The [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md) article
* The [OBS using SRT](/documentation/pr-preview/pr-690/millicast/software-encoders/obs.md) article

***

## 2022-10-31[​](#2022-10-31 "Direct link to 2022-10-31")

### WHEP support for playback[​](#whep-support-for-playback "Direct link to WHEP support for playback")

Introduced support for WebRTC-HTTP Egress Protocol (WHEP) in Millicast to offer standardization of WebRTC playback. This allows streaming services, Content Delivery Networks (CDNs), and WebRTC Transmission Networks (WTNs) to use multiple vendors to support their WebRTC-based services. This specification is based on [this](https://www.ietf.org/archive/id/draft-murillo-whep-00.html) draft and will be updated to upcoming versions as soon as they are available. The WHEP endpoint is available [here](/documentation/pr-preview/pr-690/millicast/api/director/whep-whep-subscribe.md).

### New Regional Cluster in Bangalore[​](#new-regional-cluster-in-bangalore "Direct link to New Regional Cluster in Bangalore")

Deployment of a new regional cluster that can be [specified by a stream or an account](/documentation/pr-preview/pr-690/millicast/api/cluster-get-clusters-info.md). This increases the global footprint of the service and reduces end-to-end latency in specific regions.

***

## 2022-09-01[​](#2022-09-01 "Direct link to 2022-09-01")

### Introduced VP9 Codec Support for 4:4:4 Chroma Subsampling[​](#introduced-vp9-codec-support-for-444-chroma-subsampling "Direct link to Introduced VP9 Codec Support for 4:4:4 Chroma Subsampling")

Introduced support for VP9 codec that provides better color fidelity with the support of more color formats for remote post-production workflows.

***

## 2022-06-30[​](#2022-06-30 "Direct link to 2022-06-30")

### Web Viewer Multi-view Support[​](#web-viewer-multi-view-support "Direct link to Web Viewer Multi-view Support")

Introduced the Web Viewer multi-view support that allows customers to display multiple streams in a single viewer and interactively switch between them. The multi-view web viewer can be configured in the [Dolby.io dashboard](https://streaming.dolby.io/) with a no-code hosted player, removing the need to deploy multiple player instances to view multiple streams.

For more information, see:

* The [Building a WebRTC Live Stream Multiviewer App](https://optiview.dolby.com/resources/blog/streaming/building-a-webrtc-live-stream-multiviewer-app/) blog post

### New Regional Clusters in Amsterdam and Singapore[​](#new-regional-clusters-in-amsterdam-and-singapore "Direct link to New Regional Clusters in Amsterdam and Singapore")

Deployed new regional clusters that can be [specified by a stream or an account](/documentation/pr-preview/pr-690/millicast/api/cluster-get-clusters-info.md). This increases the global footprint of the service and reduces end-to-end latency in specific regions.

***

## 2022-06-01[​](#2022-06-01 "Direct link to 2022-06-01")

### Support for RTMP MBR[​](#support-for-rtmp-mbr "Direct link to Support for RTMP MBR")

Introduced the RTMP MBR support that allows customers to live stream multiple bitrates from professional RTMP encoders and deliver WebRTC Simulcast. For more information see, the [Simulcast](/documentation/pr-preview/pr-690/millicast/distribution/using-webrtc-simulcast.md) document.
