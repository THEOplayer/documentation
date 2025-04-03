"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["7018"],{36669:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"playback/viewer-events","title":"Broadcast Events","description":"Dolby.io Real-time Streaming supports broadcastEvents, sometimes called viewer events, which allow you to add functionality that triggers when various events occur during the stream. This functionality can be helpful for detecting active feeds, changes in simulcast layers, or even the viewer count of a stream.","source":"@site/millicast/playback/viewer-events.md","sourceDirName":"playback","slug":"/viewer-events","permalink":"/documentation/pr-preview/pr-254/millicast/viewer-events","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/playback/viewer-events.md","tags":[],"version":"current","frontMatter":{"title":"Broadcast Events","slug":"/viewer-events"},"sidebar":"millicast","previous":{"title":"Multi-source Playback","permalink":"/documentation/pr-preview/pr-254/millicast/source-and-layer-selection"},"next":{"title":"Platform Requirements","permalink":"/documentation/pr-preview/pr-254/millicast/network-requirements"}}'),s=t("85893"),r=t("50065");let a={title:"Broadcast Events",slug:"/viewer-events"},o=void 0,l={},c=[{value:"List of events",id:"list-of-events",level:2},{value:"Using events",id:"using-events",level:2},{value:"Learn more",id:"learn-more",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Dolby.io Real-time Streaming supports ",(0,s.jsx)(n.code,{children:"broadcastEvents"}),", sometimes called ",(0,s.jsx)(n.em,{children:"viewer events"}),", which allow you to add functionality that triggers when various events occur during the stream. This functionality can be helpful for detecting active feeds, changes in simulcast layers, or even the viewer count of a stream."]}),"\n",(0,s.jsx)(n.p,{children:"This guide outlines what events are available and how to use them for your app or platform."}),"\n",(0,s.jsx)(n.h2,{id:"list-of-events",children:"List of events"}),"\n",(0,s.jsx)(n.p,{children:"Currently, there are several events that can be listened to when connected to the Dolby.io Millicast Viewer:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"active"}),": Fires when a live stream is or has started broadcasting."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inactive"}),": Triggers when the stream has stopped broadcasting but is still connected to the publisher."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updated"}),": Indicates that a new track has been added to an existing feed, such as when audio is added or removed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"layers"}),": When streaming with ",(0,s.jsx)(n.a,{href:"/millicast/using-webrtc-simulcast",children:"Simulcast"}),", this event fires when there is an update of the state of the layers in the live stream."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vad"}),": Fires when the live stream is mixing and layering audio with ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-254/millicast/audio-multiplexing",children:"Audio Multiplexing"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"viewercount"}),": Triggers when the number of viewers changes in the stream published."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stopped"}),": Fires when the live stream has been disconnected from the publisher."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"migrate"}),": Fires when the server is having problems, is shutting down, or when viewers need to move for load balancing purposes."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"using-events",children:"Using events"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\uD83D\uDC4D Not familar with our SDKs?"}),"\n",(0,s.jsxs)(n.p,{children:["Learn more about the Dolby.io Millicast streaming SDKs by following the ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-254/millicast/getting-started/creating-real-time-streaming-web-app",children:"Getting Started"})," guide or by leanring about our ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-254/millicast/client-sdks",children:"Client SDKs"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['To use or "listen" for these events, you first must authenticate and connect to the Dolby.io CDN using one of our ',(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-254/millicast/client-sdks",children:"Client SDKs"}),". When calling the ",(0,s.jsx)(n.code,{children:"connect"})," function you can include a list of all events to listen for:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import { Director, View } from '@millicast/sdk';\n\n// Create callback to generate a new token\nconst tokenGenerator = () =>\n  Director.getSubscriber({\n    streamName: 'publish-stream-name',\n    streamAccountId: 'publish-account-id',\n    subscriberToken: 'subscriber-token', // Optional: This token is needed if you're subscribing to a secure stream.\n  });\n// Create a new instance\nconst millicastView = new View(streamName, tokenGenerator);\n\n// Start connection to publisher listening to as few or many events as you need\nawait millicastView.connect({\n  events: ['active', 'inactive', 'vad', 'layers'],\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent",children:"By default"}),", if no event list is included, the connect function will listen for ",(0,s.jsx)(n.code,{children:"active"}),",",(0,s.jsx)(n.code,{children:"inactive"}),", and ",(0,s.jsx)(n.code,{children:"stopped"})," events."]}),"\n",(0,s.jsx)(n.p,{children:"Once connected, the event listener becomes available, allowing your app to listen for events and trigger accordingly:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"millicastView.on('broadcastEvent', (event) => {\n  // Get event name and data\n  const { name, data } = event;\n\n  switch (name) {\n    case 'active':\n      // A source has been started on the stream\n      break;\n    case 'inactive':\n      // A source has been stopped on the stream\n      break;\n    case 'vad':\n      // A new source was multiplexed over the vad tracks\n      break;\n    case 'layers':\n      // Updated layer information for each simulcast/svc video track\n      break;\n  }\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,s.jsxs)(n.p,{children:["Learn more by exploring the ",(0,s.jsx)(n.a,{href:"https://dolby.io/blog/tag/broadcast/",children:"developer blog"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/dolbyio-samples/repositories?q=broadcast",children:"code samples"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(67294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);