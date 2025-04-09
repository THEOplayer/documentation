"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["97667"],{91446:function(e,t,a){a.r(t),a.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"playback/frame-metadata","title":"Frame Metadata","description":"In addition to streaming audio and video there are many use cases that require additional metadata about what is happening in the stream. We refer to this as Frame Metadata which allows for embedding and extraction of custom application data that has frame-level accuracy.","source":"@site/millicast/playback/frame-metadata.md","sourceDirName":"playback","slug":"/frame-metadata","permalink":"/documentation/pr-preview/pr-260/millicast/frame-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/playback/frame-metadata.md","tags":[],"version":"current","frontMatter":{"title":"Frame Metadata","slug":"/frame-metadata"},"sidebar":"millicast","previous":{"title":"Stream Preview","permalink":"/documentation/pr-preview/pr-260/millicast/customize-your-player"},"next":{"title":"Hosted Player","permalink":"/documentation/pr-preview/pr-260/millicast/hosted-viewer"}}'),r=a("85893"),i=a("50065");let s={title:"Frame Metadata",slug:"/frame-metadata"},o=void 0,d={},l=[{value:"SEI Metadata",id:"sei-metadata",level:2},{value:"Message Delivery",id:"message-delivery",level:3},{value:"Metadata Source Identification",id:"metadata-source-identification",level:3},{value:"Web SDK",id:"web-sdk",level:2},{value:"How-to Publish Frame Metadata",id:"how-to-publish-frame-metadata",level:3},{value:"How-to View Frame Metadata",id:"how-to-view-frame-metadata",level:3},{value:"Codec Support",id:"codec-support",level:2},{value:"Supporting Non-SEI Metadata for Web",id:"supporting-non-sei-metadata-for-web",level:3},{value:"Publishing metadata",id:"publishing-metadata",level:4},{value:"Viewing metadata",id:"viewing-metadata",level:4},{value:"Supporting Non-SEI Metadata for Native Platforms",id:"supporting-non-sei-metadata-for-native-platforms",level:3},{value:"Enable frame transformer",id:"enable-frame-transformer",level:4},{value:"Listen for transformable frame callback",id:"listen-for-transformable-frame-callback",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Missing Metadata in Chrome",id:"missing-metadata-in-chrome",level:3},{value:"Learn more",id:"learn-more",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In addition to streaming audio and video there are many use cases that require additional metadata about what is happening in the stream. We refer to this as ",(0,r.jsx)(t.strong,{children:"Frame Metadata"})," which allows for embedding and extraction of custom application data that has frame-level accuracy."]}),"\n",(0,r.jsx)(t.p,{children:"This can be useful for transporting temporal data such as:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"timecodes"}),"\n",(0,r.jsx)(t.li,{children:"bounding boxes"}),"\n",(0,r.jsx)(t.li,{children:"visual and text overlays"}),"\n",(0,r.jsx)(t.li,{children:"interactive video applications"}),"\n",(0,r.jsx)(t.li,{children:"gps coordinates"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"These cue points are often used for time synchronizing application state with the action happening in the video player."}),"\n",(0,r.jsx)(t.h2,{id:"sei-metadata",children:"SEI Metadata"}),"\n",(0,r.jsxs)(t.p,{children:["Millicast has standardized metadata access in the **Supplemental Enhancement Information (SEI) **which is available for codecs like ",(0,r.jsx)(t.em,{children:"H.264 (AVC)"}),". It can be inserted directly by using our ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/client-sdks",children:"Client SDKs"})," as well as some broadcast encoders that embed **Action Message Format (AMF) messages."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:a(46318).Z+"",width:"681",height:"481"})}),"\n",(0,r.jsx)(t.h3,{id:"message-delivery",children:"Message Delivery"}),"\n",(0,r.jsx)(t.p,{children:"Metadata is encoded into the frame at broadcast and then extracted by the Client SDK at playback time."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["There is a ",(0,r.jsx)(t.strong,{children:"timecode"})," that will be supplied by the broadcaster and carried through the platform and available at playback."]}),"\n",(0,r.jsxs)(t.li,{children:["Application supplied metadata is incorporated as ",(0,r.jsx)(t.strong,{children:"unregistered"})," SEI messages. These are received as ",(0,r.jsx)(t.code,{children:"Byte"})," arrays if unable to be converted into JSON objects."]}),"\n",(0,r.jsx)(t.li,{children:"It is recommended to limit the amount of data that is packaged with the frame as this increases the size of each frame for distribution (impacting latency and bandwidth costs)."}),"\n",(0,r.jsxs)(t.li,{children:["There may be marginal overhead in encoding and decoding messages, so you must enable ",(0,r.jsx)(t.strong,{children:"metadata"})," when establishing a connection if you want to send or receive."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["With WebRTC and a UDP connection, latency is prioritized over reliable delivery so the metadata is not guaranteed to always be received and could be lost with any dropped frames making it less suitable for critical notifications. For durable messages or guaranteed delivery you can use third-party peer-to-peer messaging services and synchronize with the client using the ",(0,r.jsx)(t.strong,{children:"timecode"})," from SEI and avoid skipping metadata messages."]}),"\n",(0,r.jsx)(t.h3,{id:"metadata-source-identification",children:"Metadata Source Identification"}),"\n",(0,r.jsxs)(t.p,{children:["When receiving metadata there is a ",(0,r.jsx)(t.code,{children:"uuid"})," attribute that can be used to uniquely identify the source of the metadata in cases of multiple publishing sources. The table includes a few examples:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"UUID"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"9a21f3be-31f0-4b78-b0be-c7f7dbb97250"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SEI metadata inserted from AMF OnFi message feeds."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"d40e38ea-d419-4c62-94ed-20ac37b4e4fa"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SEI metadata inserted by the Web SDK."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"dc45e9bd-e6d9-48b7-962c-d820d923eeef"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SEI metadata inserted by libavc such as with ffmpeg."})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.strong,{children:"PIC_TIMING"})," SEI messages that are inserted by various encoders, there will not be a UUID assigned and included with the frame."]}),"\n",(0,r.jsx)(t.h2,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(t.p,{children:["When using the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/web",children:"Web SDK"})," to set and get frame metadata, you must include the ",(0,r.jsx)(t.code,{children:"metadata"})," option to the ",(0,r.jsx)(t.code,{children:"connect()"})," method on both ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/Publish.html#connect",children:"Publish"})," and ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#connect",children:"View"})," connections.."]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-publish-frame-metadata",children:"How-to Publish Frame Metadata"}),"\n",(0,r.jsxs)(t.p,{children:["To send metadata use the ",(0,r.jsx)(t.code,{children:"sendMetadata()"})," method which is expecting a string as the parameter."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const broadcastOptions = {\n  codec: 'h264',\n  metadata: true,\n};\n\nawait publisher.connect(broadcastOptions);\n\npublisher.sendMetadata('{\"score\": \"4-3\"}');\n"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-view-frame-metadata",children:"How-to View Frame Metadata"}),"\n",(0,r.jsx)(t.p,{children:"A separate metadata event is received for each frame when it is decoded so that the application can decide how to handle the metadata."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const playbackOptions = {\n  codec: 'h264',\n  metadata: true,\n};\n\nawait millicastView.connect(playbackOptions);\n\nmillicastView.on('metadata', (metadata) => {\n  console.log(`Timecode: ${metadata.timecode}`);\n  console.log(`Unregistered: ${metadata.unregistered}`);\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The metadata that was published with the Web SDK is found in the ",(0,r.jsx)(t.code,{children:"unregistered"})," attribute. It is common to serialize and deserialize more complex data packages like JSON but is a decision left to the application."]}),"\n",(0,r.jsx)(t.h2,{id:"codec-support",children:"Codec Support"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u2757\uFE0F Frame Metadata with SEI is only available for the H.264 (AVC) Codec"}),"\n",(0,r.jsx)(t.p,{children:"If you are using a codec for your broadcasts such as AV1 or VP8 you can use an alternative method of frame metadata described below."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"It is important to correctly encode and decode frames or you may experience negative impacts on stream performance."})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"With the method demonstrated here for non-SEI codec support:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The data is transported as raw bytes so it can be implemented as any arbitrary format (ie. string, XML, JSON, etc...)."}),"\n",(0,r.jsx)(t.li,{children:"The amount of data you can publish is not limited, but it increases the bandwidth and latency requirements so publishing small payloads is recommended."}),"\n",(0,r.jsx)(t.li,{children:"If you add extra bits to the encoded video stream, you must remove them on the viewer side for the video decoder to understand the stream and be able to display it on the screen."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"supporting-non-sei-metadata-for-web",children:"Supporting Non-SEI Metadata for Web"}),"\n",(0,r.jsxs)(t.p,{children:["Utilizing a ",(0,r.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/TransformStream",target:"_blank",children:"TransformStream"})," object, you can spin up a ",(0,r.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",children:"Web Worker"})," to leverage background threads from the web browser and process individual video frames."]}),"\n",(0,r.jsxs)(t.p,{children:["The following code uses two different routes to trigger the web worker, so it has cross-browser support. Edge and Chrome are using **createEncodedStreams() while Safari and Firefox use ",(0,r.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpScriptTransform",target:"_blank",children:"RTCRtpScriptTransform"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"publishing-metadata",children:"Publishing metadata"}),"\n",(0,r.jsxs)(t.p,{children:["Start by creating a new JavaScript file for the web worker called ",(0,r.jsx)(t.strong,{children:"workerSender.js"})," with the following code. This code of the ",(0,r.jsx)(t.strong,{children:"TransformStream"})," is responsible for inserting the metadata into each video frame."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const transformer = new TransformStream({\n  async transform(frame, controller) {\n    // Data should start with four bytes to signal the upcoming metadata at end of frame\n    const magic_value = [0xca, 0xfe, 0xba, 0xbe];\n\n    const data = [...magic_value, ...[...metadata].map((c) => c.charCodeAt(0)), 0, 0, 0, metadata.length];\n\n    // Create DataView from Array buffer\n    const frame_length = frame.data.byteLength;\n    const buffer = new ArrayBuffer(frame_length + data.length);\n    const view_buffer = new DataView(buffer);\n    const view_frame = new DataView(frame.data);\n\n    // Copy old frame buffer to new frame buffer and then append the metadata\n    // at the end of the buffer\n    for (let i = 0; i < frame_length; ++i) {\n      view_buffer.setUint8(i, view_frame.getUint8(i));\n    }\n\n    data.forEach((elt, idx) => view_buffer.setUint8(frame_length + idx, elt));\n\n    // Set the new frame buffer\n    frame.data = buffer;\n\n    // Send the frame\n    controller.enqueue(frame);\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The metadata is passed using the ",(0,r.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage",target:"_blank",children:"postMessage()"})," function. This is the code that will initialize the web worker and process the messages coming from the main thread to update the metadata. Insert this code in the same file as the ",(0,r.jsx)(t.strong,{children:"TransformStream"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// Initialization of the Web Worker by RTCRtpScriptTransform\naddEventListener('rtctransform', (event) => initialize(event.transformer));\n\n// Metadata to send can be any arbitrary data or a string\nvar metadata = '';\n\n// Event triggered when the main thread sends a message to the web worker\naddEventListener('message', (event) => {\n  const { action } = event.data;\n\n  switch (action) {\n    // Initialization of the Web Worker by Insertable Frames\n    case 'init':\n      initialize(event.data);\n      break;\n    // Update the metadata to add to the frames\n    case 'metadata':\n      metadata = event.data.metadata;\n      break;\n    default:\n      break;\n  }\n});\n\n// Insert the TransformStream into the video pipeline\nfunction initialize({ readable, writable }) {\n  readable.pipeThrough(transformer).pipeTo(writable);\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Create another JavaScript file called ",(0,r.jsx)(t.strong,{children:"scripts.js"})," that will be used to publish a stream to the Dolby.io Real-time Streaming and start the web worker to insert the metadata. First, in order to know what capabilities the web browser supports (insertable frames or WebRTC Script Transform), add the following logic to your file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// Insertable streams for `MediaStreamTrack` is supported.\nconst supportsInsertableStreams =\n  window.RTCRtpSender && !!RTCRtpSender.prototype.createEncodedStreams && window.RTCRtpReceiver && !!RTCRtpReceiver.prototype.createEncodedStreams;\n\n// WebRTC RTP Script Transform is supported\nconst supportsRTCRtpScriptTransform = 'RTCRtpScriptTransform' in window;\n"})}),"\n",(0,r.jsx)(t.p,{children:"Copy the following function to start publishing a stream, add a video element with the local camera feed and start the web worker to insert he metadata."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var workerSender;\n\nasync function startPublishing(publishToken, streamName, participantName) {\n  const tokenGenerator = () =>\n    millicast.Director.getPublisher({\n      token: publishToken,\n      streamName: streamName,\n    });\n\n  const millicastPublish = new millicast.Publish(streamName, tokenGenerator);\n\n  const mediaStream = await navigator.mediaDevices.getUserMedia({\n    audio: true,\n    video: true,\n  });\n\n  // Start publishing to RTS\n  await millicastPublish.connect({\n    mediaStream: mediaStream,\n    sourceId: participantName,\n    peerConfig: {\n      // Indicate you want to use Insertable Streams\n      encodedInsertableStreams: true,\n    },\n  });\n\n  // Create a video element\n  const videoElement = document.createElement('video');\n  document.body.appendChild(videoElement);\n  videoElement.muted = true;\n  videoElement.autoplay = true;\n  videoElement.controls = false;\n  videoElement.srcObject = mediaStream;\n  videoElement.play();\n\n  workerSender = new Worker('workerSender.js');\n\n  const senders = millicastPublish\n    .getRTCPeerConnection()\n    .getSenders()\n    .filter((elt) => elt.track.kind === 'video');\n  const sender = senders[0];\n\n  if (supportsRTCRtpScriptTransform) {\n    // Initialize the WebRTC RTP Script Transform\n    sender.transform = new RTCRtpScriptTransform(workerSender, {});\n  } else if (supportsInsertableStreams) {\n    const { readable, writable } = sender.createEncodedStreams();\n\n    // Initialize the web worker with the stream\n    workerSender.postMessage(\n      {\n        action: 'init',\n        readable,\n        writable,\n      },\n      [readable, writable]\n    );\n  }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now to inform the web worker about sending a new metadata with the frames, create the following function:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"function sendMetadata(message) {\n  if (workerSender) {\n    console.log(`Send metadata: ${message}`);\n    workerSender.postMessage({\n      action: 'metadata',\n      metadata: message,\n    });\n  }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"To start publishing a stream, call the function **startPublishing() and to update the metadata, call the function **sendMetadata():"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'await startPublishing(publishToken, streamName, participantName);\n\nsendMetadata(\'{"position": {"x": 100, "y": 200}}\');\n'})}),"\n",(0,r.jsx)(t.h4,{id:"viewing-metadata",children:"Viewing metadata"}),"\n",(0,r.jsxs)(t.p,{children:["In a similar way, create a JavaScript file called ",(0,r.jsx)(t.strong,{children:"workerReceiver.js"})," for the web worker that hosts the logic of the ",(0,r.jsx)(t.strong,{children:"TransformStream"})," that extract the metadata from the video frames."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var oldMetadata = '';\n\nconst transformer = new TransformStream({\n  async transform(frame, controller) {\n    // Convert data from ArrayBuffer to Uint8Array\n    const frame_data = new Uint8Array(frame.data);\n    const total_length = frame_data.length;\n\n    // Shift to left for endianess to retrieve the metadata size from the last\n    // 4 bytes of the buffer\n    let shift = 3;\n    const size = frame_data.slice(total_length - 4).reduce((acc, v) => acc + (v << shift--), 0);\n\n    // Use the byte signal identifying that the remaining data is frame metadata and\n    // confirm that the signal is in the frame.\n    const magic_bytes = frame_data.slice(total_length - size - 2 * 4, total_length - size - 4);\n\n    // Data should start with four bytes to signal the upcoming metadata at end of frame\n    const magic_value = [0xca, 0xfe, 0xba, 0xbe];\n\n    const has_magic_value = magic_value.every((v, index) => v === magic_bytes[index]);\n\n    // When there is metadata in the frame, get the metadata array and handle it\n    // as needed by your application.\n    if (has_magic_value) {\n      const data = frame_data.slice(total_length - size - 4, total_length - 4);\n      const newMetadata = String.fromCharCode(...data);\n      if (oldMetadata !== newMetadata) {\n        oldMetadata = newMetadata;\n        // Send a message to the main thread with the new metadata\n        self.postMessage(newMetadata);\n      }\n    }\n\n    // Send the frame as is which is supported by video players\n    controller.enqueue(frame);\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Insert the code to initialize the web worker in the same file as your ",(0,r.jsx)(t.strong,{children:"TransformStream"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// Initialization of the Web Worker by RTCRtpScriptTransform\naddEventListener('rtctransform', (event) => initialize(event.transformer));\n\n// Initialization of the Web Worker by Insertable Frames\naddEventListener('message', (event) => initialize(event.data));\n\n// Insert the TransformStream into the video pipeline\nfunction initialize({ readable, writable }) {\n  readable.pipeThrough(transformer).pipeTo(writable);\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now in the ",(0,r.jsx)(t.strong,{children:"scripts.js"})," file, add the following code to connect and listen to a stream. When a new video track is added, the code will trigger a new web worker to extract the metadata from the video frame."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"async function onTrack(event) {\n  if (event.track.kind === 'video') {\n    const worker = new Worker('workerReceiver.js');\n\n    if (supportsRTCRtpScriptTransform) {\n      // Initialize the WebRTC RTP Script Transform\n      event.receiver.transform = new RTCRtpScriptTransform(worker, {});\n    } else if (supportsInsertableStreams) {\n      const { readable, writable } = event.receiver.createEncodedStreams();\n\n      // Initialize the web worker with the stream\n      worker.postMessage(\n        {\n          readable,\n          writable,\n        },\n        [readable, writable]\n      );\n    }\n\n    // Listen to messages sent by the web worker\n    // Each message is a new metadata string\n    worker.addEventListener('message', (evt) => {\n      const mEvent = new CustomEvent('metadata', { detail: evt.data });\n      window.dispatchEvent(mEvent);\n    });\n\n    const videoElement = document.createElement('video');\n    document.body.appendChild(videoElement);\n    videoElement.srcObject = new MediaStream([event.track]);\n    videoElement.play();\n  }\n}\n\nasync function startListening(streamAccountId, streamName) {\n  const tokenGenerator = () =>\n    millicast.Director.getSubscriber({\n      streamName: streamName,\n      streamAccountId: streamAccountId,\n    });\n\n  const viewer = new millicast.View(streamName, tokenGenerator);\n  viewer.on('track', (event) => onTrack(event));\n\n  await viewer.connect({\n    peerConfig: {\n      encodedInsertableStreams: true,\n    },\n  });\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When a new metadata is received, this code will trigger the JavaScript event ",(0,r.jsx)(t.strong,{children:"metadata"})," in the window."]}),"\n",(0,r.jsx)(t.h3,{id:"supporting-non-sei-metadata-for-native-platforms",children:"Supporting Non-SEI Metadata for Native Platforms"}),"\n",(0,r.jsxs)(t.p,{children:["Using the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/client-sdks",children:"Native SDK"})," you can embed metadata with the frame. The way this metadata is embedded allows playback video players to be backward compatible even if they are unable to read and display the metadata."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\uD83D\uDCD8 Example Project"}),"\n",(0,r.jsxs)(t.p,{children:["You can find a more complete C implementation example in the ",(0,r.jsx)("a",{href:"https://github.com/millicast/metadata-publisher-demo",target:"_blank",children:"millicast/metadata-publisher-demo"})," project."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If you have specific requirements for the version of libwebrtc in use for your platform ",(0,r.jsx)(t.a,{href:"https://dolby.io/contact",children:"contact us"})," for additional implementation details."]}),"\n",(0,r.jsx)(t.h4,{id:"enable-frame-transformer",children:"Enable frame transformer"}),"\n",(0,r.jsx)(t.p,{children:"When the transformer is activated, it will enable inspection of frames for additional metadata appended."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"enable_frame_transformer(true);\n"})}),"\n",(0,r.jsx)(t.h4,{id:"listen-for-transformable-frame-callback",children:"Listen for transformable frame callback"}),"\n",(0,r.jsx)(t.p,{children:"When the frame is being transformed, a callback is fired allowing additional data to be stored. This example demonstrates storing an x,y position as metadata that might reflect the location of an object in the frame. Note that there is a 4-byte sequence that helps identify the remaining data encoded in the frame is metadata."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"// Set the length of the user data in the last 4 bytes as a signal to unpacking\n// the data during playback\nvoid encode(int32_t value, std::vector<uint8_t>& data)\n{\n    data.push_back((value >> 24) & 0xff);\n    data.push_back((value >> 16) & 0xff);\n    data.push_back((value >> 8) & 0xff);\n    data.push_back(value & 0xff);\n}\n\n// Add metadata at the end of the frame data\nvoid on_transformable_frame([[maybe_unused]] uint32_t ssrc, [[maybe_unused]] uint32_t timestamp, std::vector<uint8_t>& data) override\n{\n    constexpr uint8_t SPEED = 10;\n\n    if (pos_x == width || pos_x == 0)\n    {\n        dir_x *= -1;\n    }\n\n    if (pos_y == height || pos_y == 0)\n    {\n        dir_y *= -1;\n    }\n\n    pos_x += dir_x * SPEED;\n    pos_y += dir_y * SPEED;\n\n    pos_x = std::clamp(pos_x, 0, width);\n    pos_y = std::clamp(pos_y, 0, height);\n\n    encode(pos_x, data);\n    encode(pos_y, data);\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.h3,{id:"missing-metadata-in-chrome",children:"Missing Metadata in Chrome"}),"\n",(0,r.jsx)(t.p,{children:"Starting with Chrome version m128, the H.264 depacketizer introduced a bug leading to problems with SEI messages during packet loss. The typical symptoms are low frame rate on Chrome but not on Safari (Mac) or Firefox. The use of SEI messages combined with any level of packet loss may lead to significant playback issues. Customers trialing our DRM solution will also be affected."}),"\n",(0,r.jsxs)(t.p,{children:["See the ",(0,r.jsx)(t.a,{href:"https://support.dolby.io/hc/en-au/articles/11057317291663-Playback-Issues-with-SEI-Messages-in-H-264-Streaming",children:"Playback issues with SEI Messages in H.264"})," knowledge base article for more details on solutions and impacted versions."]}),"\n",(0,r.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,r.jsxs)(t.p,{children:["You can find some additional examples of exchanging data during a broadcast and other ",(0,r.jsx)(t.a,{href:"https://dolby.io/blog/tag/messaging/",children:"messaging"})," examples from the ",(0,r.jsx)(t.a,{href:"https://dolby.io/blog/category/streaming/",children:"developer blog"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},46318:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/metadata-feature-2cdf4737c944f2d82a921efb73c6a688.png"},50065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return s}});var n=a(67294);let r={},i=n.createContext(r);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);