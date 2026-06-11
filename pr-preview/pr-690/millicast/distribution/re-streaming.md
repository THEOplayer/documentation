# Re-streaming

**Re-streaming** enables you to distribute your broadcasts to additional RTMP(S) and SRT output destinations while simultaneously providing real-time WebRTC playback. This can be useful for distribution to other B2B media partners or for extending reach to larger audiences on public consumer social media platforms.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/f4258c0c072e9b7b4c8b297df5a3cd2e3f0a616131f83af17ac88285-restream-ccc3a184ce4413d07436ed37b8afa508.png)

## Overview[​](#overview "Direct link to Overview")

To distribute content to an RTMP(S) or SRT output source you will need to update the settings of your [Publish Tokens](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md). The publish token defines a `restream` property with a list of targets that are identified by:

* **url** - the media server that is able to accept RTMP(S) or SRT ingest including the rtmp\://, rtmps\:// and srt:// protocols and port number
* **key** - for RTMP(s), use the stream key provided by the 3rd party RTMP service. For SRT, this value is the `streamid`
* **label** - a text value to help with identifying and distinguishing multiple re-stream target endpoints
* **enabled** - a boolean as to whether or not this re-stream should be used or not

*Note: When changing a re-stream settings for a running stream, the configuration changes will be saved, but not applied. To apply the changes click the `sync` button in the dashboard or in the API endpoint to apply the changes immediately.*

| ![](/documentation/pr-preview/pr-690/assets/images/restream-3d4817dbbcecda60dc4aedb7bb091971.jpg) |
| ------------------------------------------------------------------------------------------------- |
| This is an image showing the parameters in the dashboard                                          |

Support is available for:

* WebRTC sources using H.264 and Opus codecs
* SRT and RTMP(S) sources using H.264 and AAC codecs
* Up to ten (10) RTMP(S) or SRT output destinations

The outgoing RTMP(S) or SRT stream will generally match the incoming source stream in terms of bitrate and video codec; however, for WebRTC sources, Opus audio is transcoded to AAC.

## How-to Setup Re-stream[​](#how-to-setup-re-stream "Direct link to How-to Setup Re-stream")

### Using the Dashboard[​](#using-the-dashboard "Direct link to Using the Dashboard")

When creating or updating a publish token you can enable and configure re-stream from the dashboard. These settings are found under the `Distribution` tab.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dashboard-distribution-tab-restream-setup-2401923116b3069f92609c001613f277.png)

If the feature is enabled for your account plan, you'll be able to add, remove, and update any target endpoints that you want to forward your stream.

### Using the REST API[​](#using-the-rest-api "Direct link to Using the REST API")

When creating or updating [Publish Tokens](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md) you will define a `restream` property. This is an array that takes a list of dictionaries each defining the **url**, **key**, and **label** for any RTMP(S) or SRT destination targets.

```json
{
    ...,
    "restream": [{
        "url": "rtmp://...",
        "key": "***",
        "label": "Popular Social Media Site",
        "enabled": true
    }]
}

```

Only the first ten (10) destinations defined will be targets for re-streaming and any additional items or properties will be ignored.

Visit the [/api/publish\_token](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-create-token.md) specification for more details about using this API.

## Multi-source Re-streaming[​](#multi-source-re-streaming "Direct link to Multi-source Re-streaming")

For scenarios such as [Multi-Source Broadcasting](/documentation/pr-preview/pr-690/millicast/broadcast/multi-source-broadcasting.md) there may be more than one incoming source stream. Since not all media platforms are capable of accepting multiple RTMP(S) or SRT ingest sources you may have unexpected results.

To disable re-streaming on specific feeds add the **norestream** boolean [publishing parameter](/documentation/pr-preview/pr-690/millicast/broadcast/publishing-parameters.md) to your configured publishing URLs. This is used to indicate which sources specifically should be used or not. For example, in a Multi-bitrate (MBR) configuration where there are multiple quality layers being ingested, you might re-stream only the highest quality layer and then add `&norestream` to any additional contribution layers. Similarly, if you have an interactive [multi-view](/documentation/pr-preview/pr-690/millicast/playback/multiview.md) broadcast where multiple sources are sharing the same publishing token, you can configure the URLs to only re-stream your intended source.

## Feature compatibility[​](#feature-compatibility "Direct link to Feature compatibility")

### Cloud transcoder and Re-streaming[​](#cloud-transcoder-and-re-streaming "Direct link to Cloud transcoder and Re-streaming")

For workflows using both the [Cloud transcoder](/documentation/pr-preview/pr-690/millicast/distribution/cloud-transcoder.md) and Re-streaming, the highest quality layer of the stream will be re-streamed out to the desired re-stream endpoints.

If **passthrough** is enabled, the top non-transcoded layer will be re-streamed. If **passthrough** is not enabled, the top transcoder layer will be re-streamed.

### Redundant ingests and Re-streaming[​](#redundant-ingests-and-re-streaming "Direct link to Redundant ingests and Re-streaming")

If you are publishing [redundant ingest](/documentation/pr-preview/pr-690/millicast/broadcast/redundant-ingest.md) feeds and Re-streaming, the first feed connected will be the one re-streamed out to the specified re-stream endpoints.

## Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

You can check the status of re-streams by visiting the [Live Monitoring](/documentation/pr-preview/pr-690/millicast/live-monitoring.md) section of the dashboard. You should see a `Re-stream` token as confirmation.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dashboard-re-stream-monitoring-token-8d3aafee1c6ee0007f0febb5f39b6eb9.png)

If re-stream is enabled for a stream, the events section of Live Monitoring will display when the re-streamed feed has started and ended.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/75365b6ae803eaa90dcd77f49d1f4ce22ba49be05da1b6a12651a2d1-eventlog-325989487c8fd57d34d451a1dc74f931.png)

### Re-Stream is Playing Only Audio or Video[​](#re-stream-is-playing-only-audio-or-video "Direct link to Re-Stream is Playing Only Audio or Video")

The re-stream feed is only showing audio or video. This may be because you are using an unsupported codec in the source broadcast.

### Re-Stream codec support[​](#re-stream-codec-support "Direct link to Re-Stream codec support")

*Note: Only the h264 codec is currently supported for re-streaming.*

We're Here to Help

For any other issues not covered here, please reach out to your sales and solutions team who can review server logs that may help identify any configuration issues.
