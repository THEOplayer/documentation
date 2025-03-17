---
title: "Multi-view"
slug: /multiview
---
Multi-view lets you ingest and render multiple Dolby.io real-time video and audio streams simultaneously inside a browser or mobile native applications. Once rendered, you can switch seamlessly between streams, allowing you to control how you view the content. By giving viewers content control, broadcasters can enable real-time experiences and engagement that leave viewers wanting more.

<iframe src="https://viewer.millicast.com/?streamId=k9Mwad/multiview&multisource=true&mute=true"></iframe>



To create a multi-view experience you must capture multiple video or audio feeds and then broadcast them as a [multi-source stream](/millicast/broadcast/multi-source-broadcasting.md). Once broadcasting a multi-source stream, you can view the stream using the Dolby.io Millicast viewer app, or by building your own multi-view application. Dolby.io also supports [Audio Multiplexing](/millicast/playback/audio-multiplexing.md) for mixed audio playback.

# Multi-view with the Dolby.io viewer

Once you have created a [Multisource stream](/millicast/broadcast/multi-source-broadcasting.md), you can open the stream viewer from the [Dolby.io dashboard](https://streaming.dolby.io/#/tokens) or by navigating to:

```
https://viewer.millicast.com?streamId=[YOUR_ACCOUNT_ID]/[YOUR_STREAM_NAME]
```

Once you join, the bottom right gear icon flashes a notification prompting you to enable multi-view. Enable it to begin viewing the streams.


![](/img/millicast/Select_multiview.JPG)



Alternatively, you can force the viewer to open to multi-view by including the `&multisource=true` flag on the URL:

```
https://viewer.millicast.com?streamId=[YOUR_ACCOUNT_ID]/[YOUR_STREAM_NAME]&multisource=true
```

# Creating a Multi-view web application

Dolby.io supports [Multisource Playback](/millicast/playback/source-and-layer-selection.md) via the [Client SDKs](/millicast/client-sdks/index.md), allowing you to build your own multi-view experience for your app or platform.

Before getting started building a multi-view application it is worth understanding;

1. How to broadcast [Multisource Streams](/millicast/broadcast/multi-source-broadcasting.md).
2. How to [Create a Basic Streaming Web App](/millicast/getting-started/getting-started-creating-real-time-streaming-web-app.md).
3. What [Broadcast Events](/millicast/playback/viewer-events.md) are and how to use them.
4. How the Dolby.io platform organizes and handles [Multisource Playback](/millicast/playback/source-and-layer-selection.md).

## Store and track incoming Multisource feeds

> 📘 Not building a Web App?
> 
> All Dolby.io [Client SDKs](/millicast/client-sdks/index.md) support building Multi-view applications. Although the below example is using JavaScript the principles are the same for each SDK.

The Dolby.io platform tracks broadcasts by their `account ID` and `stream name` and individual streams within broadcasts by their  `sourceID`, a unique identifier that can be used for selecting feeds to render from the [viewer node](/millicast/playback/source-and-layer-selection.md). Unlike a traditional broadcast where there is only one stream to playback, a multi-view application must account for multiple feeds arriving asynchronously. To accomplish this, the application should [listen for streams using a `broadcastEvent`](/millicast/playback/viewer-events.md#using-events), and store the stream `sourceID` as it becomes active.

```javascript
const activeSources = new Set();

await millicastView.on('broadcastEvent', (event) => {
    const { name, data } = event;

    if (name === 'active') {
        // Add the new source ID to the list of active sources
        activeSources.add(data.sourceID);
    }
});
```

## Add video elements and render feeds

Once we've captured the `sourceID` of an incoming stream, we need to signal to the Viewer node which _track_ the stream will play on. The Dolby.io Millicast SDKs include a function that allows you to [dynamically add a track to the Viewer node](/millicast/playback/source-and-layer-selection.md#dynamic-viewer-track) called `addRemoteTrack`.

[addRemoteTrack](https://millicast.github.io/millicast-sdk/View.html#addRemoteTrack) requires the media type of the incoming stream (_audio or video_) and a [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream), an interface that signals a stream of media content. `addRemoteTrack`  will then return a promise that will be resolved when the [`RTCRtpTransceiver`](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver) is assigned a `mid` value.

These newly created _Transceivers_ can be stored alongside the `sourceID`, ready for when it is time to render the feed in the app.

```javascript
const sourceIdTransceiversMap = new Map();

const addStreamToYourVideoTag = async (data) => {
    const mediaStream = new MediaStream();
    const videoTransceiver = await millicastView.addRemoteTrack('video', [mediaStream]);
    const audioTransceiver = await millicastView.addRemoteTrack('audio', [mediaStream]);

    const videoMediaId = tracksMapping.find(track => data.track.media==='video').mediaId;
    const audioMediaId = tracksMapping.find(track => data.track.media==='audio')?.mediaId;

    sourceIdTransceiversMap.set(data.sourceId, {
        videoMediaId,
        audioMediaId,
    });
    createVideoElement(mediaStream, data.sourceId);
};
```

To actually add the stream to the `<video>` tag we must create the `<video>` element and assign it the `mediaStream` created above. To disambiguate which `<video>` element holds which stream we can assign the element the `sourceID`.

```javascript
const createVideoElement = (mediaStream, sourceID) => {
    const videoElements = document.getElementById('videoElements');

    const video = document.createElement('video');
    video.id = sourceID;
    video.srcObject = mediaStream;
    video.autoplay = true;
    video.muted = true;

    videoElements.appendChild(video);
};
```

In the above code `videoDiv` is where we want the `<video>` tag to show up in the HTML. Hence, at the end of the function, we append the newly created `<video>` element to the `<div>`. 

**To recap, we've:**

1. Captured the `sourceID` of an incoming stream by listening for an `active` `broadcastEvent`.
2. Created a new `mediaStream` object and used it to `addRemoteTrack` to the Viewer node.
3. Mapped the newly created `mediaStream` called a `Transceiver` to the newly captured `sourceID`.
4. Created a `<video>` element and associate that element with the newly created media.
5. Added the `<video>` element and its `mediaStream` to the `<div>` where it will render.

At this stage, all the pieces are together, however, the stream won't yet render. This is because you have yet to tell the Dolby.io Viewer node which stream to project onto the `Transceiver`. This is done using the [`project` function](/millicast/source-and-layer-selection#project-feeds) which tells the node to begin _projecting_ the stream, identified by its `sourceID`, onto the `Transceiver`.

```javascript
await millicastView.project(sourceID, [
    {
        mediaId: videoTransceiver.mid,
        media: 'video',
    },
    {
        mediaId: audioTransceiver.mid,
        media: 'audio',
    },
]);
```

Once projected the stream will begin playing within the `<video>` tag. 

Put all together, a basic multi-view application would look something like this:

```javascript
// Authenticate a Connection to the Dolby.io CDN
const tokenGenerator=() =>
  millicast.Director.getSubscriber({
    streamName: 'YOUR STREAM NAME',
    streamAccountId: 'YOUR ACCOUNT ID'
  });

// Connect to the Viewer node
const millicastView = new millicast.View(undefined, tokenGenerator);

const activeSources = new Set();

millicastView.on('broadcastEvent', async (event) => {
  const { name, data } = event;

  if (name === 'active') {
    // Add the new source ID to the list of active sources
    activeSources.add(data.sourceId);
    await addStreamToYourVideoTag(data);
  }
});

// Create and add video streams with sourceId
const addStreamToYourVideoTag = async (data) => {
  const mediaStream = new MediaStream();
  const tracksMapping = [];

  // Look for the audio track
  const trackAudio = data.tracks.find(({ media }) => media === 'audio');
  if (trackAudio) {
    const audioTransceiver = await viewer.addRemoteTrack('audio', [mediaStream]);
    tracksMapping.push({
      media: 'audio',
      mediaId: audioTransceiver?.mid,
    });
  }

  // Look for the video track
  const trackVideo = data.tracks.find(({ media }) => media === 'video');
  if (trackVideo) {
    const videoTransceiver = await viewer.addRemoteTrack('video', [mediaStream]);
    tracksMapping.push({
      media: 'video',
      mediaId: videoTransceiver?.mid,
    });
  }

  createVideoElement(mediaStream, data.sourceId);

  await millicastView.project(sourceId, tracksMapping);
};

// Add video stream to video element
const createVideoElement = (mediaStream, sourceId) => {
  const video = document.createElement('video');
  video.id = sourceId;
  video.srcObject = mediaStream;

  document.getElementById('videoDiv').appendChild(video);
};
```

## Final result

Additional features can be added, such as the ability to remove feeds once they stop or a button to switch between feeds. To learn more, explore this [full guide on building a multi-view application from start to finish](https://dolby.io/blog/building-a-webrtc-live-stream-multiviewer-app/) or try it out yourself with this [working sample code](https://github.com/dolbyio-samples/stream-app-web-viewer/tree/Multiviewer).

<video autoplay="" width = "800px" controls="" loop="" muted="" src="https://dolby.io/wp-content/uploads/2022/11/multiview-vid.mp4" playsinline=""></video>


# Assigning lower-quality layers to small tiles

By allocating lower-quality layers to smaller video tiles, you can optimize bandwidth usage and ensure a smoother streaming experience. Small tiles may not require high-resolution details, so using lower-quality layers conserves resources and enables efficient distribution of the available bandwidth.

Start by creating a `transceiverToSourceIdMap` variable to associate the media IDs with corresponding source IDs. After establishing a successful stream connection, listen to the `layers` [broadcastEvent](https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent) that is triggered whenever the state of layers in the live stream is updated. Iterate through the media IDs in the created variable; when an ID is not equal to 0, project the lowest layer.

```javascript
const updateLayers = async (layers) => {
  // Iterate the current mapping of media ID sources
  for (var mid in transceiverToSourceIdMap) {
    // If not main source (mid is set to 0 by default)
    if (mid !== '0') {
      //Order the layers to get the lowest one and project it
      const lowerLayer = layers[mid].active.reduce((currentLower, currentValue) => {
        return currentValue.bitrate < currentLower.bitrate ? currentValue : currentLower
      });

      await viewer.project(transceiverToSourceIdMap[mid], [
        { 
          mediaId: mid, 
          layer: {encodingId: lowerLayer.id}, 
          media: 'video'
        }
      ]);
    }
  }
};
```

# Limitations of Multi-view

Dolby.io Real-time Streaming does not limit the number of tracks that a viewer can receive, however, it limits the aggregate bitrate of all tracks to 12 Mbps. The pinned source is prioritized and allowed to exceed the 12 Mbps limit, and the other tracks share any remaining available bandwidth. The source with a null `sourceId` is pinned by default. You can change the pinned source by using the `pinnedSourceId` attribute in the `View.connect` command. You should configure the Simulcast/SVC bitrate of each source so that a viewer can receive the desired amount of video tracks in the viewer session while remaining under the aggregate bitrate limit.

| Example                                           | Bandwidth Allocation                                                                        |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------ |
| A 4 Mbps pinned track and four simulcast tracks   | 4 Mbps is allocated to the pinned track and the other simulcast tracks receive 2 Mbps each. |
| A 4 Mbps pinned track and two 2 Mbps tracks       | The overall bitrate is is under the 12 Mbps limit.                                          |
| A 12 Mbps pinned  track and four simulcast tracks | 12 Mbps is allocated to the pinned track and other tracks receive no bandwidth              |
| A 10 Mbps pinned track and two 2 Mbps tracks      | 10 Mbps is allocated to the pinned track and there is only space for one additional track   |
