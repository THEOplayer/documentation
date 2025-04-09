"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["63358"],{22100:function(e,t,i){i.r(t),i.d(t,{default:()=>g,frontMatter:()=>c,metadata:()=>r,assets:()=>h,toc:()=>p,contentTitle:()=>u});var r=JSON.parse('{"id":"distribution/re-streaming","title":"Re-streaming","description":"Re-streaming enables you to distribute your broadcasts to additional RTMP(S) and SRT output destinations while simultaneously providing real-time WebRTC playback. This can be useful for distribution to other B2B media partners or for extending reach to larger audiences on public consumer social media platforms.","source":"@site/millicast/distribution/re-streaming.mdx","sourceDirName":"distribution","slug":"/re-streaming","permalink":"/documentation/pr-preview/pr-260/millicast/re-streaming","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/distribution/re-streaming.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Re-streaming","slug":"/re-streaming","sidebar_position":5},"sidebar":"millicast","previous":{"title":"Geo-cascading","permalink":"/documentation/pr-preview/pr-260/millicast/geo-cascading"},"next":{"title":"Simulcast","permalink":"/documentation/pr-preview/pr-260/millicast/using-webrtc-simulcast"}}'),n=i("85893"),s=i("50065");let a=i.p+"assets/images/f4258c0c072e9b7b4c8b297df5a3cd2e3f0a616131f83af17ac88285-restream-ccc3a184ce4413d07436ed37b8afa508.png",o=i.p+"assets/images/dashboard-distribution-tab-restream-setup-2401923116b3069f92609c001613f277.png",d=i.p+"assets/images/dashboard-re-stream-monitoring-token-8d3aafee1c6ee0007f0febb5f39b6eb9.png",l=i.p+"assets/images/75365b6ae803eaa90dcd77f49d1f4ce22ba49be05da1b6a12651a2d1-eventlog-325989487c8fd57d34d451a1dc74f931.png",c={title:"Re-streaming",slug:"/re-streaming",sidebar_position:5},u=void 0,h={},p=[{value:"Overview",id:"overview",level:2},{value:"How-to Setup Re-stream",id:"how-to-setup-re-stream",level:2},{value:"Using the Dashboard",id:"using-the-dashboard",level:3},{value:"Using the REST API",id:"using-the-rest-api",level:3},{value:"Multi-source Re-streaming",id:"multi-source-re-streaming",level:2},{value:"Feature compatability",id:"feature-compatability",level:2},{value:"Cloud transcoder and Re-streaming",id:"cloud-transcoder-and-re-streaming",level:3},{value:"Redundant ingests and Re-streaming",id:"redundant-ingests-and-re-streaming",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Re-Stream is Playing Only Audio or Video",id:"re-stream-is-playing-only-audio-or-video",level:3},{value:"Re-stream is Not Working with Web Broadcasts",id:"re-stream-is-not-working-with-web-broadcasts",level:3}];function m(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Re-streaming"})," enables you to distribute your broadcasts to additional RTMP(S) and SRT output destinations while simultaneously providing real-time WebRTC playback. This can be useful for distribution to other B2B media partners or for extending reach to larger audiences on public consumer social media platforms."]}),"\n","\n",(0,n.jsx)("div",{class:"center-container",children:(0,n.jsx)("img",{src:a,width:"500"})}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["To distribute content to an RTMP(S) or SRT output source you will need to update the settings of your ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/managing-your-tokens",children:"Publish Tokens"}),". The publish token defines a ",(0,n.jsx)(t.code,{children:"restream"})," property with a list of targets that are identified by:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"url"})," - the media server that is able to accept RTMP(S) or SRT ingest including the rtmp://, rtmps:// and srt:// protocols and port number"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"key"})," - the url path and/or additional parameters that should be passed to the server to uniquely identify the incoming RTMP(S) or SRT stream"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"label"})," - a text value to help with identifying and distinguishing multiple re-stream target endpoints"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Support is available for:"}),"\n",(0,n.jsxs)("ul",{class:"checkBoxList",children:[(0,n.jsx)("li",{children:"H.264 and AAC codecs"}),(0,n.jsx)("li",{children:"SRT and RTMP(S) broadcast sources"}),(0,n.jsx)("li",{children:"Up to ten (10) RTMP(S) and SRT output destinations"})]}),"\n",(0,n.jsx)(t.p,{children:"The outgoing RTMP(S) or SRT stream will be identical to the incoming source stream in terms of bitrate, codec, etc."}),"\n",(0,n.jsx)(t.h2,{id:"how-to-setup-re-stream",children:"How-to Setup Re-stream"}),"\n",(0,n.jsx)(t.h3,{id:"using-the-dashboard",children:"Using the Dashboard"}),"\n",(0,n.jsxs)(t.p,{children:["When creating or updating a publish token you can enable and configure re-stream from the dashboard. These settings are found under the ",(0,n.jsx)(t.code,{children:"Distribution"})," tab."]}),"\n","\n",(0,n.jsx)("div",{class:"center-container",children:(0,n.jsx)("img",{src:o,width:"500"})}),"\n",(0,n.jsx)(t.p,{children:"If the feature is enabled for your account plan, you'll be able to add, remove, and update any target endpoints that you want to forward your stream."}),"\n",(0,n.jsx)(t.h3,{id:"using-the-rest-api",children:"Using the REST API"}),"\n",(0,n.jsxs)(t.p,{children:["When creating or updating ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/managing-your-tokens",children:"Publish Tokens"})," you will define a ",(0,n.jsx)(t.code,{children:"restream"})," property. This is an array that takes a list of dictionaries each defining the ",(0,n.jsx)(t.strong,{children:"url"}),", ",(0,n.jsx)(t.strong,{children:"key"}),", and ",(0,n.jsx)(t.strong,{children:"label"})," for any RTMP(S) or SRT destination targets."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    ...,\n    "restream": [{\n        "url": "rtmp://...",\n        "key": "***",\n        "label": "Popular Social Media Site"\n    }]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Only the first ten (10) destinations defined will be targets for re-streaming and any additional items or properties will be ignored."}),"\n",(0,n.jsxs)(t.p,{children:["Visit the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/api/publish-token-v-1-create-token",children:"/api/publish_token"})," specification for more details about using this API."]}),"\n",(0,n.jsx)(t.h2,{id:"multi-source-re-streaming",children:"Multi-source Re-streaming"}),"\n",(0,n.jsxs)(t.p,{children:["For scenarios such as ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/multi-source-broadcasting",children:"Multi-Source Broadcasting"})," there may be more than one incoming source stream. Since not all media platforms are capable of accepting multiple RTMP(S) or SRT ingest sources you may have unexpected results."]}),"\n",(0,n.jsxs)(t.p,{children:["To disable re-streaming on specific feeds add the ",(0,n.jsx)(t.strong,{children:"norestream"})," boolean ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/broadcast-parameters",children:"publishing parameter"})," to your configured publishing URLs. This is used to indicate which sources specifically should be used or not. For example, in a Multi-bitrate (MBR) configuration where there are multiple quality layers being ingested, you might re-stream only the highest quality layer and then add ",(0,n.jsx)(t.code,{children:"&norestream"})," to any additional contribution layers. Similarly, if you have an interactive ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/multiview",children:"multi-view"})," broadcast where multiple sources are sharing the same publishing token, you can configure the URLs to only re-stream your intended source."]}),"\n",(0,n.jsx)(t.h2,{id:"feature-compatability",children:"Feature compatability"}),"\n",(0,n.jsx)(t.h3,{id:"cloud-transcoder-and-re-streaming",children:"Cloud transcoder and Re-streaming"}),"\n",(0,n.jsxs)(t.p,{children:["For workflows using both the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/cloud-transcoder",children:"Cloud transcoder"})," and Re-streaming, the highest quality layer of the stream will be re-streamed out to the desired re-stream endpoints."]}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.strong,{children:"passthrough"})," is enabled, the top non-transcoded layer will be re-streamed. If ",(0,n.jsx)(t.strong,{children:"passthrough"})," is not enabled, the top transcoder layer will be re-streamed."]}),"\n",(0,n.jsx)(t.h3,{id:"redundant-ingests-and-re-streaming",children:"Redundant ingests and Re-streaming"}),"\n",(0,n.jsxs)(t.p,{children:["If you are publishing ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/redundant-ingest",children:"redundant ingest"})," feeds and Re-streaming, the first feed connected will be the one re-streamed out to the specified re-stream endpoints."]}),"\n",(0,n.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(t.p,{children:["You can check the status of re-streams by visiting the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/live-monitoring",children:"Live Monitoring"})," section of the dashboard. You should see a ",(0,n.jsx)(t.code,{children:"Re-stream"})," token as confirmation."]}),"\n","\n",(0,n.jsx)("div",{class:"center-container",children:(0,n.jsx)("img",{src:d,width:"500"})}),"\n",(0,n.jsx)(t.p,{children:"If re-stream is enabled for a stream, the events section of Live Monitoring will display when the re-streamed feed has started and ended."}),"\n","\n",(0,n.jsx)("div",{class:"center-container",children:(0,n.jsx)("img",{src:l,width:"500"})}),"\n",(0,n.jsx)(t.h3,{id:"re-stream-is-playing-only-audio-or-video",children:"Re-Stream is Playing Only Audio or Video"}),"\n",(0,n.jsx)(t.p,{children:"The re-stream feed is only showing audio or video. This may be because you are using an unsupported codec in the source broadcast. If you are using something other than H.264 or AAC you may experience dropped frames."}),"\n",(0,n.jsx)(t.h3,{id:"re-stream-is-not-working-with-web-broadcasts",children:"Re-stream is Not Working with Web Broadcasts"}),"\n",(0,n.jsxs)(t.p,{children:["If you are streaming using the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/how-to-broadcast-in-dashboard",children:"Live Broadcast"})," dashboard app or a custom built app using the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/web",children:"Web SDK"})," you are using WebRTC to broadcast. Re-streaming is only available for ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/using-srt",children:"SRT"})," and ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/using-rtmp-and-rtmps",children:"RTMP(S)"})," so you will need to use an encoder that supports one of those broadcast protocols in order for re-stream to be successful."]}),"\n",(0,n.jsx)(t.admonition,{title:"We're Here to Help",type:"tip",children:(0,n.jsx)(t.p,{children:"For any other issues not covered here, please reach out to your sales and solutions team who can review server logs that may help identify any configuration issues."})})]})}function g(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return a}});var r=i(67294);let n={},s=r.createContext(n);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);