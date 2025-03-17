---
title: "Multi-Source Broadcasting"
id: multi-source-broadcasting
---
**Multi-source Broadcasting** allows you to ingest and send additional capture sources, such as different camera angles, to the Dolby.io Real-time Streaming platform where they will be logically grouped into an optimized multi-view experience over a single WebRTC connection.

There are two main use cases where broadcasting multiple video and audio feeds to a stream is useful:

1. [Multi-view streams](/millicast/playback/multiview.md): Multi-view is a feature whereby viewers ingest and render multiple streams simultaneously inside a browser or mobile native applications. Once rendered these streams can be switched between, offering the viewer the ability to control how they view and listen to the content. Multi-view is supported by all of our [Client SDKs](/millicast/client-sdks/index.md)  for playback.
2. [Audio Multiplexing](/millicast/playback/audio-multiplexing.md): Audio Multiplexing is a feature that allows viewers to receive multiple overlapping audio streams in a conference-like experience, where each audio stream is emphasized or deemphasized based on activity.

Multi-source can ingest contribution streams from sources such as RTMP and SRT. This guide provides the components and best practices for an optimal multi-view experience.

## Multi-source Workflow

Multi-source broadcasting is accomplished by enabling a token for multi-source and then publishing multiple quality layers or contributing sources using the same **publishing token** and **stream name**, but each with a unique **source id** and **simulcast id**. If you do not provide a source id, a second feed will overwrite the previous stream, which is common when trying to setup a [Redundant Ingest ](/millicast/broadcast/redundant-ingest/index.md)  in case of an encoder failure.

> 👍 Enable Multi-source
> 
> To use Multi-source, a [publish Token](/millicast/streaming-dashboard/managing-your-tokens.md) must have [multi-source](/millicast/streaming-dashboard/managing-your-tokens.md)advanced-settings)  enabled in the token settings. This can be done with the REST API or by editing the token from the dashboard.
> 
> Additionally, [Geo-cascading](/millicast/distribution/multi-region-support/geo-cascading.md) is required when publishing to multiple regions for [Multi-view](/millicast/playback/multiview.md) or [Redundant Ingest](/millicast/broadcast/redundant-ingest/index.md).

When multi-source is enabled, you use the `sourceId` attribute when publishing a stream.

- If the `sourceId` is undefined, the stream is treated as the default or _main_ stream to ensure backward compatibility.
- When identical `sourceId` settings are given with the same id value, the broadcast will only include the most recently published stream, allowing broadcasters to swap a stream seamlessly. 
- When there are multiple unique `sourceId` attributes the stream plays the **Main** source.
  - You can [enable multi-view streams](/millicast/playback/multiview.md) on playback to view the available sources.
- This functionality is the same regardless of whether the stream is video only, audio only, or video and audio.
- When multi-bitrate publishing is configured, the sources are logically grouped using the `simulcastId`. 


![](https://cdn.TODO.io/docs/readme/cbee685-multi-source-overview.png)



### Multi-Bitrate Contribution and Simulcast

With WebRTC broadcast workflows you get Adaptive Bitrate through Simulcast. With RTMP or SRT sources however, a typical workflow involves multi-bitrate contribution by configuring multiple sources to each broadcast an independent stream. These sources contribute to the stream discrete **quality layers** that each may show the same content but with different bitrate settings while using the same stream and avoiding additional channel fees.

This allows for **Adaptive Bitrate** delivery of streams for a better user experience on a range of devices and network conditions. It also makes it possible to pass through from the studio or broadcast facility and deliver adaptive bitrate without any channel fees.

See the [Simulcast](/millicast/distribution/using-webrtc-simulcast.md) guide for additional details on setting up these workflows.

### Publishing sources

You can configure multiple publishing sources to enable simulcast or provide a multi-view experience of different content quickly using the [Multi-source Builder](/millicast/streaming-dashboard/multi-source-builder.md). You can also use the multi-source hosted player, which is a streaming video player, as a standalone web application or embed it into your website with an `<iframe>`. 

### Multiple Points of View

You can configure multiple discrete points of view as sources so that they can be independently selected during playback. We refer to this as **Multi-view**. As with multi-bitrate contribution, each source will be given a distinct label for each view.

See the [Multi-view](/millicast/playback/multiview.md) guide for an explanation of that workflow for configuring playback.

### Broadcast URLs

To configure a multi-source broadcast, you will need to construct a unique URL to configure each of your encoders. Depending on your broadcast protocol and encoder you'll need to understand the parameters to be used.

- [Multi-source RTMP](/millicast/broadcast/multi-source-broadcasting.md)multi-source-rtmp)
- [Multi-source SRT](/millicast/broadcast/multi-source-broadcasting.md)multi-source-srt)

See [Publish Parameters](/millicast/broadcast/index.md)publish-parameters) for descriptions of the supported broadcast parameters for each protocol.

> 👍 Use Multi-Source Builder
> 
> The Streaming Dashboard includes a multi-source builder tab to help with constructing multi-source URLs. With this tool, you can generate the proper URLs to use for your broadcast encoders. The methodology is described below for more complex workflows and automation.
> 
> Learn more about how to use the [Multi-source Builder](/millicast/streaming-dashboard/multi-source-builder.md).

#### Multi-source RTMP

Steps to build a broadcast URL suitable for RTMP encoders:

1. Choose your broadcast cluster region. This should be the geographically closest location from which you will be broadcasting and cannot be "Auto". 
2. Gather the **RTMP publish path** and **RTMP publish stream name**. Depending on your choice of encoder, these may be configured as a single combined URL or as a separate URL and token. For more detailed instructions on locating these, see [How to find your RTMP publish URL](/millicast/broadcast/using-rtmp-and-rtmps.md)how-to-find-your-rtmp-publish-url)

| RTMP publish path                           | Separator | RTMP publish stream name  |
| :------------------------------------------ | :-------- | :------------------------ |
| rtmps://rtmp-phx-1.millicast.com:443/v2/pub | /         | myStreamName?token=abc123 |

3. Configure your _main_ source. Typically, this will be your highest-quality input in the case of MBR or or the source you want to be presented initially in multi-view. You will add the `sourceId` parameter and the `simulcastId` parameter. For the main source, the simulcastId will not have a value.

| RTMP publish stream name  | Separator | Source and Simulcast Parameters |
| :------------------------ | :-------- | :------------------------------ |
| myStreamName?token=abc123 | &         | sourceId=1&simulcastId          |

4. For each additional source, you'll use a unique `sourceId` and `simulcastId` to distinguish between the various encoders.

In the hosted player, the `simulcastId` is used to set the video source's on-screen label.

| Encoder | Source Id   | Simulcast Id (label) |
| :------ | :---------- | :------------------- |
| 1       | &sourceId=1 | &simulcastId         |
| 2       | &sourceId=2 | &simulcastId=source2 |
| 3       | &sourceId=3 | &simulcastId=source3 |

#### Multi-source SRT

Steps to build a broadcast URL suitable for SRT encoders:

1. Choose your broadcast cluster region. This should be the geographically closest location from which you will be broadcasting and cannot be "Auto".
2. Gather the **SRT publish path** and **SRT stream ID**. Depending on your choice of encoder, these may be configured as a single combined URL or as a separate URL and token. For more detailed instructions on locating these, see [Generate the SRT publish URL](/millicast/broadcast/using-srt.md)3-generate-the-srt-publish-url).

| SRT publish path                    | Separator | SRT stream ID |
| :---------------------------------- | :-------- | :------------ |
| srt://srt-phx-1.millicast.com:10000 | /         | caha?t=abc123 |

There is also a combined **SRT publish URL**. The SRT stream ID includes a compressed token and uses the `t` as the parameter.

3. Configure your _main_ source. Typically, this will be your highest-quality input in the case of MBR or or the source you want to be presented initially in multi-view. You will add the `sourceId` parameter and the `simulcastId` parameter. For the main source, the simulcastId will not have a value.

| SRT publish stream name | Separator | Source and Simulcast Parameters |
| :---------------------- | :-------- | :------------------------------ |
| myStreamName?t=abc123   | &         | sourceId=1&simulcastId          |

4. For each additional source, you'll use a unique `sourceId` and `simulcastId` to distinguish between the various encoders.

In the hosted player, the `simulcastId` is used to set the video source's on-screen label.

| Encoder | Source Id   | Simulcast Id (label) |
| :------ | :---------- | :------------------- |
| 1       | &sourceId=1 | &simulcastId         |
| 2       | &sourceId=2 | &simulcastId=source2 |
| 3       | &sourceId=3 | &simulcastId=source3 |

5. Finally, with SRT you will need to make sure all of the parameters together are URL escaped. This is distinct to SRT workflows. The full combined URL might look similar to:

```
srt://srt-phx-1.millicast.com:10000?streamid=myStreamName%253Ft%253D4xd-...vvRrYTeftQPvsCSE%2526sourceId%253D3%2526simulcastId%253DSRT
```

> 🚧 Multi-bitrate and Recordings
> 
> If you are sending multi-bitrate contributions, you can further optimize your parameters by only sending video and disabling any recordings for the additional layers.
> 
> `&videoOnly&record=false`

## Broadcasting

There are several ways to broadcast multi-source streams into the dashboard:

- [Publishing with the SDK](/millicast/broadcast/multi-source-broadcasting.md)publishing-with-the-sdk)
- [Publishing with the hosted broadcaster in the dashboard](/millicast/broadcast/multi-source-broadcasting.md)publishing-with-the-hosted-broadcaster-in-the-dashboard)

### Publishing with the SDK

The `sourceId` is set when connecting to the publisher as shown below:

```javascript Web SDK
// Create publisher 
const publisher = new Publish(streamName, () => { return publisherToken });

// Start publishing
await publisher.connect({
	mediaStream: mediaStream,
	sourceId: sourceId,// SourceId handles stream identification
	disableVideo,
	dtx: true,
});
```
```cplusplus
millicast::Publisher::Option options;

//Optionally, set a source ID of the publisher and enable discontinuous transmission to enable multi-source
options.multisource.source_id = "YourId";
options.dtx = true;

// Enable stereo
options.stereo = true;

// Set the selected options to the publisher
publisher->set_options(options);
```
```java
Publisher.Option publisherOption = new Publisher.Option();

// To publish several sources from the same application, create a publisher instance for each source
publisherOption.dtx = true;
```
```swift
let publisherOptions = MCClientOptions()

// To use multi-source, set a source ID of the publisher
publisherOptions.sourceId = "MySource"
```

For the native desktop client, the `sourceId` is set through a parameter for the publish function. For more information on setting the `sourceId`, see "Configure your publishing session" for [desktop](/millicast/client-sdks/desktop/index.md)4-configure-your-publishing-session), [Android](/millicast/client-sdks/android/index.md)5-configure-your-publishing-session), and [iOS](/millicast/client-sdks/ios/index.md)3-configure-your-publishing-session). 

> Note: The `sourceId` should be a unique value and by default is undefined. Identical `sourceId` values should only be used for specifying [redundant streams](/millicast/broadcast/redundant-ingest/index.md).

In order to improve the performance of the feature and to avoid incurring higher bandwidth costs, it is recommended to enable `dtx` (discontinuous transmission) when publishing, so audio data is only sent when a user’s voice is detected.

### Publishing with the Hosted Broadcaster in the Dashboard

Publishing with the hosted player is a simple way to test the feature quickly. You can open multiple browser tabs to send multiple sources. 

In the _Live broadcast_ section and click the `BROADCAST` button.


![](https://cdn.TODO.io/docs/readme/2d27467-dolbyio-streaming-broadcast-button.png)



The settings menu in the hosted player lets you modify media settings, which includes enabling multi-source. With the multi-source feature, you are available to publish different independent feeds (each one identified with a different source id) under the same stream. This enables multiple audio and video tracks from different sources to be available to viewers. The **Source ID** can be specified to identify individual streams.

From the dashboard broadcast application that opens, click the green `Start` button to begin a broadcast. You will need to give permission to access your microphone and camera. Once the stream begins, you can see the _LIVE_ box in the upper right corner and a timecode for the duration of the stream above the `Stop` button.

See the [How to Broadcast in Dashboard](/millicast/streaming-dashboard/how-to-broadcast-in-dashboard.md) guide to learn more details about the options available for configuring the publish token and working with this dashboard broadcast application.

## Playback

There are multiple ways to playback and consume a multi-view feed:

- Use the [Dolby-hosted player](/millicast/streaming-dashboard/how-to-broadcast-in-dashboard.md) (easiest for testing web)
- Use the Dolby-published iOS and Android [Interactive Player Apps](https://dolby.io/project-gallery/interactive-player-apps/)
- Build your own [multi-view app for Web](/millicast/getting-started/getting-started-creating-real-time-streaming-web-app.md)
- Build your own [multi-view app with the SDK](/millicast/client-sdks/index.md)

## Troubleshooting

### Broadcasting best practices

- There is a 12Mbps total connection limit on the playback side. If you are using high-bitrate source feeds, we recommend sending at least a high-quality and a low-quality version of each source so that in a multi-view playback, the large image can be high-bitrate and the small thumbnail tiles can be set to the low-bitrate. For more information, see [Limitations of Multi-view](/millicast/playback/multiview.md)limitations-of-multi-view). This is primarily for broadcasting with RTMP or SRT. If you are using WebRTC to publish and your publishing client supports Simulcast (such as our hosted broadcaster), this is handled automatically.
- If broadcasting with Multi-Bitrate RTMP or SRT and recording is enabled, each quality rendition that you send into the service will be recorded unless you append the `&record=false` flag to your publishing endpoint.
- If broadcasting with Multi-Bitrate RTMP or SRT, do not send duplicate audio to each layer. If you are unable to send video-only, you can add the `&videoOnly` parameter to have the service ignore the audio.

### Playback best practices

- There is a 12Mbps total connection limit on the playback side. If you are using high-bitrate source feeds, we recommend sending at least a high-quality and a low-quality version of each source so that in a multi-view playback, the large image can be high-bitrate and the small thumbnail tiles can be set to the low-bitrate. For more information, see [Limitations of Multi-view](/millicast/playback/multiview.md)limitations-of-multi-view). This is primarily for broadcasting with RTMP or SRT. If you are using WebRTC to publish and your publishing client supports Simulcast (such as our hosted broadcaster), this is handled automatically.
- In your player client, if you are playing multiple videos at the same time, set smaller tiles to consume the lowest stream quality/bitrate so that the "main" video can utilize bitrate switching.
- The `priority` parameter lets you set the priority of each feed. For redundant streams the primary feed should be assigned a consistent value for all input feeds, regardless of sourceId or simulcastId, and backups should mirror the primary's sourceID and simulcastId with a lower priority. In the case of any problem with the primary feed, viewers receive the available feed that has the highest priority. Not setting any priorities or setting the same priorities results in receiving the most recently published feed. For more information, see [Redundant Ingest](/millicast/broadcast/redundant-ingest/index.md).
