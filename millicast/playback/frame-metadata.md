---
title: Frame Metadata
slug: /playback/frame-metadata
sidebar_position: 7
---

In addition to streaming audio and video there are many use cases that require additional metadata about what is happening in the stream. We refer to this as **Frame Metadata** which allows for embedding and extraction of custom application data that has frame-level accuracy.

This can be useful for transporting temporal data such as:

- timecodes
- bounding boxes
- visual and text overlays
- interactive video applications
- gps coordinates

These cue points are often used for time synchronizing application state with the action happening in the video player.

## SEI Metadata

Millicast has standardized metadata access in the **Supplemental Enhancement Information (SEI)** which is available for codecs like _H.264 (AVC)_. It can be inserted directly by using our [Client SDKs](/millicast/playback/players-sdks/index.mdx) as well as some broadcast encoders that embed **Action Message Format (AMF)** messages.

import MetadataFeature from '../assets/img/metadata-feature.png';

<div class="center-container">
  <img src={MetadataFeature} width="600" />
</div>

### Message Delivery

Metadata is encoded into the frame at broadcast and then extracted by the Client SDK at playback time.

- There is a **timecode** that will be supplied by the broadcaster and carried through the platform and available at playback.
- Application supplied metadata is incorporated as **unregistered** SEI messages. These are received as `Byte` arrays if unable to be converted into JSON objects.
- It is recommended to limit the amount of data that is packaged with the frame as this increases the size of each frame for distribution (impacting latency and bandwidth costs).
- There may be marginal overhead in encoding and decoding messages, so you must enable **metadata** when establishing a connection if you want to send or receive.

With WebRTC and a UDP connection, latency is prioritized over reliable delivery so the metadata is not guaranteed to always be received and could be lost with any dropped frames making it less suitable for critical notifications. For durable messages or guaranteed delivery you can use third-party peer-to-peer messaging services and synchronize with the client using the **timecode** from SEI and avoid skipping metadata messages.

### Metadata Source Identification

When receiving metadata there is a `uuid` attribute that can be used to uniquely identify the source of the metadata in cases of multiple publishing sources. The table includes a few examples:

| UUID                                 | Description                                          |
| :----------------------------------- | :--------------------------------------------------- |
| 9a21f3be-31f0-4b78-b0be-c7f7dbb97250 | SEI metadata inserted from AMF OnFi message feeds.   |
| d40e38ea-d419-4c62-94ed-20ac37b4e4fa | SEI metadata inserted by the Web SDK.                |
| dc45e9bd-e6d9-48b7-962c-d820d923eeef | SEI metadata inserted by libavc such as with ffmpeg. |

For **PIC_TIMING** SEI messages that are inserted by various encoders, there will not be a UUID assigned and included with the frame.

## Web SDK

When using the [Web SDK](/millicast/playback/players-sdks/web/sdk/index.mdx) to set and get frame metadata, you must include the `metadata` option to the `connect()` method on both [Publish](https://millicast.github.io/millicast-sdk/Publish.html#connect) and [View](https://millicast.github.io/millicast-sdk/View.html#connect) connections..

### How-to Publish Frame Metadata

To send metadata use the `sendMetadata()` method which is expecting a string as the parameter.

```javascript
const broadcastOptions = {
  codec: 'h264',
  metadata: true,
};

await publisher.connect(broadcastOptions);

publisher.sendMetadata('{"score": "4-3"}');
```

### How-to View Frame Metadata

A separate metadata event is received for each frame when it is decoded so that the application can decide how to handle the metadata.

```javascript
const playbackOptions = {
  codec: 'h264',
  metadata: true,
};

await millicastView.connect(playbackOptions);

millicastView.on('metadata', (metadata) => {
  console.log(`Timecode: ${metadata.timecode}`);
  console.log(`Unregistered: ${metadata.unregistered}`);
});
```

The metadata that was published with the Web SDK is found in the `unregistered` attribute. It is common to serialize and deserialize more complex data packages like JSON but is a decision left to the application.

## Codec Support

:::danger Frame Metadata with SEI is only available for the H.264 (AVC) Codec
If you are using a codec for your broadcasts such as AV1 or VP8 you can use an alternative method of frame metadata described below.

_It is important to correctly encode and decode frames or you may experience negative impacts on stream performance._
:::

With the method demonstrated here for non-SEI codec support:

- The data is transported as raw bytes so it can be implemented as any arbitrary format (ie. string, XML, JSON, etc...).
- The amount of data you can publish is not limited, but it increases the bandwidth and latency requirements so publishing small payloads is recommended.
- If you add extra bits to the encoded video stream, you must remove them on the viewer side for the video decoder to understand the stream and be able to display it on the screen.

### Supporting Non-SEI Metadata for Web

Utilizing a <a href="https://developer.mozilla.org/en-US/docs/Web/API/TransformStream" target="_blank">TransformStream</a> object, you can spin up a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers" target="_blank">Web Worker</a> to leverage background threads from the web browser and process individual video frames.

The following code uses two different routes to trigger the web worker, so it has cross-browser support. Edge and Chrome are using **createEncodedStreams()** while Safari and Firefox use <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpScriptTransform" target="_blank">RTCRtpScriptTransform</a>.

#### Publishing metadata

Start by creating a new JavaScript file for the web worker called **workerSender.js** with the following code. This code of the **TransformStream** is responsible for inserting the metadata into each video frame.

```javascript
const transformer = new TransformStream({
  async transform(frame, controller) {
    // Data should start with four bytes to signal the upcoming metadata at end of frame
    const magic_value = [0xca, 0xfe, 0xba, 0xbe];

    const data = [...magic_value, ...[...metadata].map((c) => c.charCodeAt(0)), 0, 0, 0, metadata.length];

    // Create DataView from Array buffer
    const frame_length = frame.data.byteLength;
    const buffer = new ArrayBuffer(frame_length + data.length);
    const view_buffer = new DataView(buffer);
    const view_frame = new DataView(frame.data);

    // Copy old frame buffer to new frame buffer and then append the metadata
    // at the end of the buffer
    for (let i = 0; i < frame_length; ++i) {
      view_buffer.setUint8(i, view_frame.getUint8(i));
    }

    data.forEach((elt, idx) => view_buffer.setUint8(frame_length + idx, elt));

    // Set the new frame buffer
    frame.data = buffer;

    // Send the frame
    controller.enqueue(frame);
  },
});
```

The metadata is passed using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage" target="_blank">postMessage()</a> function. This is the code that will initialize the web worker and process the messages coming from the main thread to update the metadata. Insert this code in the same file as the **TransformStream**.

```javascript
// Initialization of the Web Worker by RTCRtpScriptTransform
addEventListener('rtctransform', (event) => initialize(event.transformer));

// Metadata to send can be any arbitrary data or a string
var metadata = '';

// Event triggered when the main thread sends a message to the web worker
addEventListener('message', (event) => {
  const { action } = event.data;

  switch (action) {
    // Initialization of the Web Worker by Insertable Frames
    case 'init':
      initialize(event.data);
      break;
    // Update the metadata to add to the frames
    case 'metadata':
      metadata = event.data.metadata;
      break;
    default:
      break;
  }
});

// Insert the TransformStream into the video pipeline
function initialize({ readable, writable }) {
  readable.pipeThrough(transformer).pipeTo(writable);
}
```

Create another JavaScript file called **scripts.js** that will be used to publish a stream to the Dolby.io Real-time Streaming and start the web worker to insert the metadata. First, in order to know what capabilities the web browser supports (insertable frames or WebRTC Script Transform), add the following logic to your file.

```javascript
// Insertable streams for `MediaStreamTrack` is supported.
const supportsInsertableStreams =
  window.RTCRtpSender && !!RTCRtpSender.prototype.createEncodedStreams && window.RTCRtpReceiver && !!RTCRtpReceiver.prototype.createEncodedStreams;

// WebRTC RTP Script Transform is supported
const supportsRTCRtpScriptTransform = 'RTCRtpScriptTransform' in window;
```

Copy the following function to start publishing a stream, add a video element with the local camera feed and start the web worker to insert he metadata.

```javascript
var workerSender;

async function startPublishing(publishToken, streamName, participantName) {
  const tokenGenerator = () =>
    millicast.Director.getPublisher({
      token: publishToken,
      streamName: streamName,
    });

  const millicastPublish = new millicast.Publish(streamName, tokenGenerator);

  const mediaStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });

  // Start publishing to RTS
  await millicastPublish.connect({
    mediaStream: mediaStream,
    sourceId: participantName,
    peerConfig: {
      // Indicate you want to use Insertable Streams
      encodedInsertableStreams: true,
    },
  });

  // Create a video element
  const videoElement = document.createElement('video');
  document.body.appendChild(videoElement);
  videoElement.muted = true;
  videoElement.autoplay = true;
  videoElement.controls = false;
  videoElement.srcObject = mediaStream;
  videoElement.play();

  workerSender = new Worker('workerSender.js');

  const senders = millicastPublish
    .getRTCPeerConnection()
    .getSenders()
    .filter((elt) => elt.track.kind === 'video');
  const sender = senders[0];

  if (supportsRTCRtpScriptTransform) {
    // Initialize the WebRTC RTP Script Transform
    sender.transform = new RTCRtpScriptTransform(workerSender, {});
  } else if (supportsInsertableStreams) {
    const { readable, writable } = sender.createEncodedStreams();

    // Initialize the web worker with the stream
    workerSender.postMessage(
      {
        action: 'init',
        readable,
        writable,
      },
      [readable, writable]
    );
  }
}
```

Now to inform the web worker about sending a new metadata with the frames, create the following function:

```javascript
function sendMetadata(message) {
  if (workerSender) {
    console.log(`Send metadata: ${message}`);
    workerSender.postMessage({
      action: 'metadata',
      metadata: message,
    });
  }
}
```

To start publishing a stream, call the function **startPublishing() and to update the metadata, call the function **sendMetadata():

```javascript
await startPublishing(publishToken, streamName, participantName);

sendMetadata('{"position": {"x": 100, "y": 200}}');
```

#### Viewing metadata

In a similar way, create a JavaScript file called **workerReceiver.js** for the web worker that hosts the logic of the **TransformStream** that extract the metadata from the video frames.

```javascript
var oldMetadata = '';

const transformer = new TransformStream({
  async transform(frame, controller) {
    // Convert data from ArrayBuffer to Uint8Array
    const frame_data = new Uint8Array(frame.data);
    const total_length = frame_data.length;

    // Shift to left for endianess to retrieve the metadata size from the last
    // 4 bytes of the buffer
    let shift = 3;
    const size = frame_data.slice(total_length - 4).reduce((acc, v) => acc + (v << shift--), 0);

    // Use the byte signal identifying that the remaining data is frame metadata and
    // confirm that the signal is in the frame.
    const magic_bytes = frame_data.slice(total_length - size - 2 * 4, total_length - size - 4);

    // Data should start with four bytes to signal the upcoming metadata at end of frame
    const magic_value = [0xca, 0xfe, 0xba, 0xbe];

    const has_magic_value = magic_value.every((v, index) => v === magic_bytes[index]);

    // When there is metadata in the frame, get the metadata array and handle it
    // as needed by your application.
    if (has_magic_value) {
      const data = frame_data.slice(total_length - size - 4, total_length - 4);
      const newMetadata = String.fromCharCode(...data);
      if (oldMetadata !== newMetadata) {
        oldMetadata = newMetadata;
        // Send a message to the main thread with the new metadata
        self.postMessage(newMetadata);
      }
    }

    // Send the frame as is which is supported by video players
    controller.enqueue(frame);
  },
});
```

Insert the code to initialize the web worker in the same file as your **TransformStream**.

```javascript
// Initialization of the Web Worker by RTCRtpScriptTransform
addEventListener('rtctransform', (event) => initialize(event.transformer));

// Initialization of the Web Worker by Insertable Frames
addEventListener('message', (event) => initialize(event.data));

// Insert the TransformStream into the video pipeline
function initialize({ readable, writable }) {
  readable.pipeThrough(transformer).pipeTo(writable);
}
```

Now in the **scripts.js** file, add the following code to connect and listen to a stream. When a new video track is added, the code will trigger a new web worker to extract the metadata from the video frame.

```javascript
async function onTrack(event) {
  if (event.track.kind === 'video') {
    const worker = new Worker('workerReceiver.js');

    if (supportsRTCRtpScriptTransform) {
      // Initialize the WebRTC RTP Script Transform
      event.receiver.transform = new RTCRtpScriptTransform(worker, {});
    } else if (supportsInsertableStreams) {
      const { readable, writable } = event.receiver.createEncodedStreams();

      // Initialize the web worker with the stream
      worker.postMessage(
        {
          readable,
          writable,
        },
        [readable, writable]
      );
    }

    // Listen to messages sent by the web worker
    // Each message is a new metadata string
    worker.addEventListener('message', (evt) => {
      const mEvent = new CustomEvent('metadata', { detail: evt.data });
      window.dispatchEvent(mEvent);
    });

    const videoElement = document.createElement('video');
    document.body.appendChild(videoElement);
    videoElement.srcObject = new MediaStream([event.track]);
    videoElement.play();
  }
}

async function startListening(streamAccountId, streamName) {
  const tokenGenerator = () =>
    millicast.Director.getSubscriber({
      streamName: streamName,
      streamAccountId: streamAccountId,
    });

  const viewer = new millicast.View(streamName, tokenGenerator);
  viewer.on('track', (event) => onTrack(event));

  await viewer.connect({
    peerConfig: {
      encodedInsertableStreams: true,
    },
  });
}
```

When a new metadata is received, this code will trigger the JavaScript event **metadata** in the window.

### Supporting Non-SEI Metadata for Native Platforms

Using the [Native SDK](/millicast/playback/players-sdks/index.mdx) you can embed metadata with the frame. The way this metadata is embedded allows playback video players to be backward compatible even if they are unable to read and display the metadata.

:::info Example Project
You can find a more complete C implementation example in the <a href="https://github.com/millicast/metadata-publisher-demo" target="_blank">millicast/metadata-publisher-demo</a> project.
:::

If you have specific requirements for the version of libwebrtc in use for your platform [contact us](https://dolby.io/contact) for additional implementation details.

#### Enable frame transformer

When the transformer is activated, it will enable inspection of frames for additional metadata appended.

```c
enable_frame_transformer(true);
```

#### Listen for transformable frame callback

When the frame is being transformed, a callback is fired allowing additional data to be stored. This example demonstrates storing an x,y position as metadata that might reflect the location of an object in the frame. Note that there is a 4-byte sequence that helps identify the remaining data encoded in the frame is metadata.

```c
// Set the length of the user data in the last 4 bytes as a signal to unpacking
// the data during playback
void encode(int32_t value, std::vector<uint8_t>& data)
{
    data.push_back((value >> 24) & 0xff);
    data.push_back((value >> 16) & 0xff);
    data.push_back((value >> 8) & 0xff);
    data.push_back(value & 0xff);
}

// Add metadata at the end of the frame data
void on_transformable_frame([[maybe_unused]] uint32_t ssrc, [[maybe_unused]] uint32_t timestamp, std::vector<uint8_t>& data) override
{
    constexpr uint8_t SPEED = 10;

    if (pos_x == width || pos_x == 0)
    {
        dir_x *= -1;
    }

    if (pos_y == height || pos_y == 0)
    {
        dir_y *= -1;
    }

    pos_x += dir_x * SPEED;
    pos_y += dir_y * SPEED;

    pos_x = std::clamp(pos_x, 0, width);
    pos_y = std::clamp(pos_y, 0, height);

    encode(pos_x, data);
    encode(pos_y, data);
}
```

## Troubleshooting

### Missing Metadata in Chrome

Starting with Chrome version m128, the H.264 depacketizer introduced a bug leading to problems with SEI messages during packet loss. The typical symptoms are low frame rate on Chrome but not on Safari (Mac) or Firefox. The use of SEI messages combined with any level of packet loss may lead to significant playback issues. Customers trialing our DRM solution will also be affected.

See the [Playback issues with SEI Messages in H.264](https://support.dolby.io/hc/en-au/articles/11057317291663-Playback-Issues-with-SEI-Messages-in-H-264-Streaming) knowledge base article for more details on solutions and impacted versions.

## Learn more

You can find some additional examples of exchanging data during a broadcast and other [messaging](https://dolby.io/blog/tag/messaging/) examples from the [developer blog](https://dolby.io/blog/category/streaming/).
