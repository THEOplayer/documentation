---
title: 'Publishing Parameters'
slug: /broadcast-parameters
sidebar_position: 6
---

Broadcast URL Parameters allow you to customize the behavior of an individual source feed by modifying the URL used of specific sources when establishing a connection.

## Broadcast Protocols

There are some variations depending on which protocol is being used to broadcast.

- [WebRTC](/millicast/broadcast/webrtc-whip.mdx): The query parameter string is appended at the end of a WHIP URL `https` endpoint.
- [RTMP](/millicast/broadcast/using-rtmp-and-rtmps.mdx): The query parameter string is appended to the end of a RTMP URL `rtmp` or `rtmps` endpoint. Depending on the encoder, this may be appended as a single URL or a two-part server and path.
- [SRT](/millicast/broadcast/using-srt.mdx): The query parameter string requires special handling to encode it within the SRT stream id.

## How-to Add Publishing Parameters to the URL

Parameters allow modifying broadcasting preferences to customize the streaming experience. This is particularly helpful when using [Multi-Source](/millicast/broadcast/multi-source-broadcasting.mdx)
that share a common publishing token configuration but may be using a feature that requires modification to only specific input streams.

To use these parameters, add them to the end of the protocol URI as a [query string](https://www.rfc-editor.org/rfc/rfc3986#section-3.4) component.

- All broadcast parameters are added after the `?token={token}`
- Parameters are delimited using an ampersand (`&`)

For example, to distinguish different sources you can add a **sourceId** and **priority** parameter to the URL. The result might look like:

> `?token={token}&sourceId=1&priority=1`

Any parameters that are boolean type can be used without a value. For example, the **audioOnly** and **noRecord** parameters:

> `?token={token}&audioOnly&noRecord`

## Available Parameters

The Dolby.io Streaming APIs platform provides the following parameters:

| Parameter name      | Type    | Description                                                                                                                                                                                                                                                                                                                                                                 |
| :------------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| audioOnly           | Boolean | Indicates whether the platform should broadcast only audio.                                                                                                                                                                                                                                                                                                                 |
| intraOnlyForwarding | Boolean | Indicates whether the platform should forward only intra frames while transmitting video.                                                                                                                                                                                                                                                                                   |
| noAudio             | Boolean | Instructs the server to ignore any audio tracks from this source. This is often used with [Multi-Bitrate](/millicast/broadcast/multi-source-broadcasting.mdx) (MBR) contribution streams to only stream the audio of the main feed.                                                                                                                                         |
| noRecord            | Boolean | When given will not record the given ingest source feed. This overrides the publishing token to avoid recording multiple sources that might only be streaming as a backup or for MBR.                                                                                                                                                                                       |
| noRestream          | Boolean | When broadcasting multiple streams you can choose which sources to [re-stream](/millicast/distribution/re-streaming.mdx) and exclude any others from being forwarding to additional media platforms.                                                                                                                                                                        |
| priority            | Number  | A priority for [redundant streams](/millicast/broadcast/redundant-ingest/index.mdx) indicates the order in which backup streams should be broadcasted in the case of any problems with the primary stream.                                                                                                                                                                  |
| record              | Boolean | Indicates whether the platform should record a stream.                                                                                                                                                                                                                                                                                                                      |
| seiKeyFrameOnly     | Boolean | When using SEI or AMF `onFi` or `onTextData`, only send metadata on keyframes to clients even if the stream contains metadata more frequently. This is a workaround for a Chrome bug where SEI data on delta frames could lead to packetloss. It was fixed in [Chrome M131](https://issues.chromium.org/issues/375352614)). The default is `false`.                         |
| simulcastId         | String  | An identifier that assigns feeds produced by a single camera as Simulcast layers. All feeds that have the same **simulcastId** are published together as different quality layers. You can identify each layer using a different **sourceId**.                                                                                                                              |
| sourceId            | String  | A unique identifier for a specific feed. Two feeds can have the same **sourceId** only when they are the same and used as backup feeds in [Redundant Ingest](/millicast/broadcast/redundant-ingest/index.mdx) .                                                                                                                                                             |
| streamName          | String  | A name for the stream of your broadcast. This must match the streamName(s) allowed by your publishing token.                                                                                                                                                                                                                                                                |
| t                   | String  | A publish token in the base64url format that is supported only when using SRT or RTMP. We recommend using this parameter to reduce the length of the query parameter string for encoders with low limits. It is not possible to use the **t** and **token** parameters at the same time.                                                                                    |
| token               | String  | A publish token in the hexadecimal format that is supported only when using SRT or RTMP. It is not possible to use the **t** and **token** parameters at the same time.                                                                                                                                                                                                     |
| videoOnly           | Boolean | Indicates whether the platform should broadcast only video even if the contribution stream contains an audio track. This is required when you are doing Multi-Bitrate Publishing on layers that do not contain an audio stream or contain a silent audio stream.                                                                                                            |
| videoTargetBitrate  | Number  | The target bitrate of the streamed video content, in kbps. The parameter helps the service determine what layer to send to viewers while [using multi-bitrate RTMP or SRT to deliver simulcast](/millicast/using-webrtc-simulcast#how-to-enable-simulcast-from-an-encoder), or multiple-quality viewer experience. This parameter is supported only when using SRT or RTMP. |
| extraLatency        | Number  | When specified adds extra latency to an ingest from [0 - 3000] in milliseconds.                                                                                                                                                                                                                                                                                             |
