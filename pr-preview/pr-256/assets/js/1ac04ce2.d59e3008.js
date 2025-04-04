"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["76301"],{39336:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"playback/source-and-layer-selection","title":"Multi-source Playback","description":"Dolby.io supports ingesting Multi-source Streams and rendering multiple audio and video streams for building Multi-view and Audio Multiplexing experiences.","source":"@site/millicast/playback/source-and-layer-selection.md","sourceDirName":"playback","slug":"/source-and-layer-selection","permalink":"/documentation/pr-preview/pr-256/millicast/source-and-layer-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/playback/source-and-layer-selection.md","tags":[],"version":"current","frontMatter":{"title":"Multi-source Playback","slug":"/source-and-layer-selection"},"sidebar":"millicast","previous":{"title":"Securing Stream Playback","permalink":"/documentation/pr-preview/pr-256/millicast/securing-stream-playback"},"next":{"title":"Broadcast Events","permalink":"/documentation/pr-preview/pr-256/millicast/viewer-events"}}'),a=i("85893"),r=i("50065");let s={title:"Multi-source Playback",slug:"/source-and-layer-selection"},o=void 0,l={},c=[{value:"Managing source selection",id:"managing-source-selection",level:2},{value:"Projecting feeds",id:"projecting-feeds",level:2},{value:"Media layer forwarding",id:"media-layer-forwarding",level:2},{value:"Managing layers",id:"managing-layers",level:3},{value:"Promoting feeds",id:"promoting-feeds",level:3},{value:"Dynamic viewer track",id:"dynamic-viewer-track",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Dolby.io supports ingesting ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/multi-source-broadcasting",children:"Multi-source Streams"})," and rendering multiple audio and video streams for building ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/multiview",children:"Multi-view"})," and ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/audio-multiplexing",children:"Audio Multiplexing"})," experiences."]}),"\n",(0,a.jsx)(t.p,{children:"To get started building multi-stream experiences it's important to understand how Dolby.io handles multi-source playback. This guide outlines:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#managing-source-selection",children:"How to manage source selection"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#projecting-feeds",children:"How to project feeds"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#media-layer-forwarding",children:"Media layer forwarding"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#dynamic-viewer-track",children:"How to dynamically manage viewer tracks"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"managing-source-selection",children:"Managing source selection"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"\uD83D\uDCD8 Multi-source broadcasting"}),"\n",(0,a.jsxs)(t.p,{children:["To manage multiple sources, you first must have a ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/multi-source-broadcasting",children:"Multi-source Stream"})," broadcasting."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'Dolby.io streaming supports scalable WebRTC streaming thanks to a "smart" cascading node system that manages the peer-to-peer connections. These nodes are key to understanding how to manage multiple sources for playback and can be divided into two types:'}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Publisher nodes"}),": These nodes manage ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/multi-source-broadcasting",children:"the ingest of multiple sources"})," during the broadcast. They can then forward these feeds to the CDN for the Viewer node to manage."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Viewer nodes"}),": Viewer nodes are created depending on the quantity and location of viewers, allowing Dolby.io to support large-scale global streams. When rendering streams in your app or platform, you can communicate with the viewer node to negotiate what feeds to project and simulcast layers to receive."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["When the publisher node has a feed ready to be passed to a viewer node, it triggers a ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/viewer-events",children:"broadcastEvent"}),". This event can be listened to by taking the ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html",children:"millicast.View"})," object and ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/viewer-events#using-events",children:"adding an event listener"})," to it:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const tokenGenerator = () =>\n  millicast.Director.getSubscriber({\n    streamName: streamName,\n    streamAccountId: streamAccountId,\n  });\n\nviewer = new millicast.View(streamName, tokenGenerator);\nviewer.on('broadcastEvent', async (event) => {\n  console.log('broadcastEvent', event);\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent",children:"broadcastEvent"})," is triggered whenever a feed is added to the multi-source broadcast. Hence, the platform can trigger several broadcast events as feeds are added or removed. As outlined in ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/multi-source-broadcasting",children:"Multi-source Streams"})," and ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/broadcast",children:"Broadcast"})," guides, each stream must be distinguished by a unique source ID. As a ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent",children:"broadcastEvent"})," are triggered, you can manage which broadcasts to render for the end users by their feed's source ID."]}),"\n",(0,a.jsxs)(t.p,{children:["Here is an example of an ",(0,a.jsx)(t.code,{children:"active"})," ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent",children:"broadcastEvent"})," event, note the ",(0,a.jsx)(t.code,{children:"sourceId"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "name": "active",\n  "data": {\n    "streamId": "accoundId/streamName",\n    "sourceId": "uniqueSourceID",\n    "tracks": [\n      {\n        "trackId": "audio0",\n        "media": "audio"\n      },\n      {\n        "trackId": "video0",\n        "media": "video"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["An active ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent",children:"broadcastEvent"})," includes the ",(0,a.jsx)(t.code,{children:"sourceId"})," of the stream, ",(0,a.jsx)(t.code,{children:"trackID"}),", and ",(0,a.jsx)(t.code,{children:"media"})," type, which are all used to establish a connection for playback. These values can be stored in an array or map."]}),"\n",(0,a.jsx)(t.h2,{id:"projecting-feeds",children:"Projecting feeds"}),"\n",(0,a.jsxs)(t.p,{children:["Once a feed has been published to the stream, you can project it using the viewer. The ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#project",children:"project"})," function allows you to map a feed onto the track, signalling to the CDN you are ready to receive data via a peer connection. Once a feed is mapped to a track, it can be rendered natively or in a browser."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="Projecting a source"',children:"viewer.project('uniqueSourceID', [\n  {\n    trackId: 'audio0',\n    mediaId: audioTransceiver.mid,\n    media: 'audio',\n  },\n  {\n    trackId: 'video0',\n    mediaId: videoTransceiver.mid,\n    media: 'video',\n  },\n]);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#project",children:"project"})," function allows you to project only audio, only video, or both, each for multiple published sources. These sources can be projected as they are published by triggering ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent",children:"broadcastEvent"})," or all at once when they all arrive."]}),"\n",(0,a.jsxs)(t.p,{children:["The viewer` also supports an ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#unproject",children:"unproject"})," function that lets you signal to the CDN that you want to stop receiving media from that source."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="Removing projection"',children:"viewer.unproject([videoTransceiver.mid]);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"media-layer-forwarding",children:"Media layer forwarding"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"\uD83D\uDC4D Simulcast or SVC layer forwarding"}),"\n",(0,a.jsx)(t.p,{children:"By default, the Dolby.io Real-time Streaming server chooses the best Simulcast or SVC layer to forward to the viewer based on the bandwidth estimation calculated by the server."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In addition to selecting the origin source for the media, it is also possible to choose a specific ",(0,a.jsx)(t.a,{href:"/millicast/using-webrtc-simulcast",children:"Simulcast"})," or SVC layer for each video track delivered by the Dolby.io Real-time Streaming server. You can do it either by specifying the ",(0,a.jsx)(t.code,{children:"layer"})," attribute on the ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#project",children:"project"})," command or using the ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#select",children:"select"})," command for the main video track:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="Projecting with layer selection using project"',children:"viewer.project('mysource', [\n  {\n    trackId: 'video0',\n    mediaId: videoTransceiver.mid,\n    layer: {\n      encodingId: 'l',\n      temporalLayerId: 1,\n    },\n  },\n]);\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="Projecting with layer selection using select"',children:"async function select(layer = {}) {\n  logger.debug('Viewer select layer values: ', layer);\n  await this.signaling.cmd('select', 'layer');\n  logger.info('Connected to streamName: ', this.streamName);\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The layer information available for each video source is provided periodically by the ",(0,a.jsx)(t.code,{children:"layers"})," event as shown above. If you want to switch back to the automatic layer selection, you just need to send a ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#project",children:"project"})," or ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#select",children:"select"})," command without layer details."]}),"\n",(0,a.jsxs)(t.p,{children:["To force layer selection, ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/web#broadcast-events",children:"listen to the incoming layers in the layer broadcast event"})," and then select the active layer using the following command:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"millicastView.select({ encodingId: '1' });\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Where ",(0,a.jsx)(t.code,{children:"millicastView"})," is the instance of the ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html",children:"View"})," class and ",(0,a.jsx)(t.code,{children:"encodingId"})," is the field of the layer that you wan to force."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"\uD83D\uDCD8 Track limits for viewer"}),"\n",(0,a.jsx)(t.p,{children:"Dolby.io Real-time Streaming does not limit the number of tracks that a viewer can receive; it limits the maximum bitrate per viewer to a maximum of 12 Mbps across all media tracks. You should configure the Simulcast or SVC bitrate of all the sources carefully within your applications so they can receive the desired amount of video tracks in the viewer session."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"managing-layers",children:"Managing layers"}),"\n",(0,a.jsxs)(t.p,{children:["To avoid problems with the maximum bitrate per viewer when using multi-view with Simulcast, you can limit the quality of sources by selecting the lowest quality layers. To do it, analyze the received ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent",children:"broadcastEvents"})," to select a layer with the lowest bitrate and project it, as in the following example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="Layer selection"',children:"let lowestLayer = event.data.medias[videoTransceiver.mid].layers.reduce((min, el) => {\n  return min.bitrate > el.bitrate ? el : min;\n});\n\n//Specify the source you want to modify and select the lowest layer\nviewer.project('sourceId2', [\n  {\n    media: 'video',\n    layer: { encodingId: lowestLayer.encodingId, spatialLayerId: lowestLayer.spatialLayerId, temporalLayerId: lowestLayer.temporalLayerId },\n  },\n]);\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'title="Example of the received event"',children:'{\n  "type": "event",\n  "name": "layers",\n  "data": {\n    "medias": {\n      "0": {\n        "active": [\n          ...\n        ],\n        "inactive": [],\n        "layers": [\n          ...\n        ]\n      },\n      "2": {\n        "active": [\n          ...\n        ],\n        "inactive": [],\n        "layers": [\n          {\n            "encodingId": "8",\n            "simulcastIdx": 2,\n            "spatialLayerId": 255,\n            "temporalLayerId": 255,\n            "bitrate": 1085112,\n            "totalBitrate": 1107688,\n            "targetBitrate": 733000,\n            "targetWidth": 960,\n            "targetHeight": 540\n          },\n          {\n            "encodingId": "7",\n            "simulcastIdx": 1,\n            "spatialLayerId": 255,\n            "temporalLayerId": 255,\n            "bitrate": 678864,\n            "totalBitrate": 696928,\n            "targetBitrate": 488000,\n            "targetWidth": 640,\n            "targetHeight": 360\n          },\n          {\n            "encodingId": "6",\n            "simulcastIdx": 0,\n            "spatialLayerId": 255,\n            "temporalLayerId": 255,\n            "bitrate": 226344,\n            "totalBitrate": 237608,\n            "targetBitrate": 195000,\n            "targetWidth": 416,\n            "targetHeight": 234\n          }\n        ]\n      }\n    }\n  }\n}\n\n'})}),"\n",(0,a.jsx)(t.h3,{id:"promoting-feeds",children:"Promoting feeds"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to remove all existing limitations from the promoted feed, such as restricted bitrate or resolution, set the ",(0,a.jsx)(t.code,{children:"promote"})," attribute to true, as in the following example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// promoting a source\nviewer.project('uniqueSourceID', [\n  {\n    trackId: 'video0',\n    mediaId: videoTransceiver.mid,\n    media: 'video',\n    promote: true,\n  },\n]);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"dynamic-viewer-track",children:"Dynamic viewer track"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#addRemoteTrack",children:"addRemoteTrack"})," method on ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#addRemoteTrack",children:"Javascript SDK"})," provides the ability to add new tracks on demand on the viewer side. This method will perform a local renegotiation and create the ",(0,a.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/PeerConnection.html#event:track",children:"track"})," event with the added track and transceiver."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="Dynamically adding a remote track on the viewer"',children:"// Add remote track and wait until the SDP O/A is performed and mid is assigned to the transceiver\nconst transceiver = await viewer.addRemoteTrack('video', [new MediaStream()]);\n// Get mid for new created remote track\nconst mediaId = transceiver.mid;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["After the renegotiation is done, you can use the newly created transceiver ",(0,a.jsx)(t.code,{children:"mid"})," attribute on the projection or layer selection methods to receive media from any source on the new track."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return s}});var n=i(67294);let a={},r=n.createContext(a);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);