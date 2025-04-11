"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["34597"],{65233:function(e,t,i){i.r(t),i.d(t,{default:()=>p,frontMatter:()=>d,metadata:()=>n,assets:()=>c,toc:()=>h,contentTitle:()=>a});var n=JSON.parse('{"id":"broadcast/using-rtmp-and-rtmps","title":"RTMP | RTMPS","description":"Real-Time Messaging Protocol (RTMP) has been well supported by popular hardware and software applications for many years. In addition to WebRTC, Dolby.io Real-time Streaming allows you to broadcast and distribute content from an RTMP or secure RTMPS source.","source":"@site/millicast/broadcast/using-rtmp-and-rtmps.mdx","sourceDirName":"broadcast","slug":"/using-rtmp-and-rtmps","permalink":"/documentation/pr-preview/pr-266/millicast/using-rtmp-and-rtmps","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/broadcast/using-rtmp-and-rtmps.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"RTMP | RTMPS","slug":"/using-rtmp-and-rtmps","sidebar_position":2},"sidebar":"millicast","previous":{"title":"WebRTC | WHIP","permalink":"/documentation/pr-preview/pr-266/millicast/webrtc-whip"},"next":{"title":"RTSP","permalink":"/documentation/pr-preview/pr-266/millicast/rtsp"}}'),s=i("85893"),r=i("50065");let l=i.p+"assets/images/rtmp_publish_token-b3e67407dcdc7d95978d7c5c3a52fe57.png",o=i.p+"assets/images/rtmp_publish_url-5dada699b0bb4783d1c5622d2557f1a2.png",d={title:"RTMP | RTMPS",slug:"/using-rtmp-and-rtmps",sidebar_position:2},a=void 0,c={},h=[{value:"RTMP publishing",id:"rtmp-publishing",level:2},{value:"How to find your RTMP publish URL",id:"how-to-find-your-rtmp-publish-url",level:3},{value:"Suggested RTMP Encoder Settings",id:"suggested-rtmp-encoder-settings",level:3},{value:"OBS with RTMP",id:"obs-with-rtmp",level:4},{value:"vMIX with RTMP",id:"vmix-with-rtmp",level:4},{value:"Basic RTMP Settings",id:"basic-rtmp-settings",level:4},{value:"Learn more",id:"learn-more",level:2}];function x(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Real-Time Messaging Protocol (RTMP)"})," has been well supported by popular hardware and software applications for many years. In addition to WebRTC, Dolby.io Real-time Streaming allows you to broadcast and distribute content from an RTMP or secure RTMPS source."]}),"\n",(0,s.jsxs)(t.p,{children:["Dolby.io Real-time streaming also supports the ability to live stream multiple bitrates from professional RTMP encoders and deliver WebRTC Simulcast. For more information, see ",(0,s.jsx)(t.a,{href:"/millicast/using-webrtc-simulcast#how-to-enable-simulcast-from-an-encoder",children:"Simulcast"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"This document will outline how to set up and broadcast low-latency RTMP streams via the Dolby.io CDN."}),"\n",(0,s.jsx)(t.h2,{id:"rtmp-publishing",children:"RTMP publishing"}),"\n",(0,s.jsx)(t.admonition,{title:"Getting Started",type:"tip",children:(0,s.jsxs)(t.p,{children:["If you haven't already, begin by following the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/",children:"Getting Started"})," tutorial to create a Dolby.io application and start your first broadcast. You will need to create a publish token to generate the necessary RTMP details."]})}),"\n",(0,s.jsx)(t.p,{children:"Select the publish token that you want to use for your RTMP streaming application."}),"\n","\n",(0,s.jsx)("div",{class:"center-container",children:(0,s.jsx)("img",{src:l,width:"600"})}),"\n",(0,s.jsx)(t.h3,{id:"how-to-find-your-rtmp-publish-url",children:"How to find your RTMP publish URL"}),"\n",(0,s.jsxs)(t.p,{children:["Click on the ",(0,s.jsx)(t.em,{children:"Publishing"})," tab of the token screen where you will find details for the various protocols such as ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/webrtc-whip",children:"WHIP"}),", ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/using-srt",children:"SRT"}),", and RTMP."]}),"\n","\n",(0,s.jsx)("div",{class:"center-container",children:(0,s.jsx)("img",{src:o,width:"600"})}),"\n",(0,s.jsxs)(t.p,{children:["In order for you to publish with RTMP, you will need two items from this interface, the ",(0,s.jsx)(t.strong,{children:"RTMP publish path"})," and ",(0,s.jsx)(t.strong,{children:"RTMP publish stream name"}),". Note that the ",(0,s.jsx)(t.em,{children:"RTMP publish stream name"})," value from the dashboard is a concatenation of the ",(0,s.jsx)(t.em,{children:"stream name"})," and the ",(0,s.jsx)(t.em,{children:"publishing token"})," as a query string parameter."]}),"\n",(0,s.jsx)(t.p,{children:"Depending on the particular RTMP integration you may need to specify these details separately or as a full URL endpoint:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"RTMP Publish URL"})," = ",(0,s.jsx)(t.strong,{children:"RTMP publish path"})," + ",(0,s.jsx)(t.code,{children:"/"})," + ",(0,s.jsx)(t.strong,{children:"RTMP publish stream name"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This information will authenticate you as a publisher on Dolby.io Real-time Streaming and allow you to successfully broadcast a live feed using your account. Typically the URL will look something similar to:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"rtmp://rtmp-auto.millicast.com:1935/v2/pub/myStreamName?token=5c7a1529...bdc8&priority=1&sourceId=YourId\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For a secure RTMPS endpoint, you would substitute the ",(0,s.jsx)(t.strong,{children:"RTMPS publish path"}),", which uses a different protocol and port."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The the ",(0,s.jsx)(t.code,{children:"priority"})," and ",(0,s.jsx)(t.code,{children:"sourceId"})," are optional parameters that allow you to specify the priority and a unique ID for the published stream."]}),"\n",(0,s.jsx)(t.h3,{id:"suggested-rtmp-encoder-settings",children:"Suggested RTMP Encoder Settings"}),"\n",(0,s.jsx)(t.p,{children:"Each setup can be slightly different, so adjust the below settings to find what fits best for you."}),"\n",(0,s.jsx)(t.h4,{id:"obs-with-rtmp",children:"OBS with RTMP"}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/using-obs",children:"OBS Integration Guide"})," for more details."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Encoder"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"nvenc"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Rate Control"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"CBR"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Keyframe Interval"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"**2 (seconds)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Preset"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Max Quality"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Profile"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"high"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"x264 options"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"bframes=0"})})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," These are the recommended settings for the NVIDIA NVENC H.264 encoder. If you do not have the NVIDIA NVENC H.264 encoder available, we recommend setting the Rate Control to ",(0,s.jsx)(t.code,{children:"CBR"})," and the profile to ",(0,s.jsx)(t.code,{children:"baseline"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Setting ",(0,s.jsx)(t.strong,{children:"x264 options"})," to ",(0,s.jsx)(t.em,{children:"bframes=0"})," or ",(0,s.jsx)(t.strong,{children:"profile"})," to ",(0,s.jsx)(t.em,{children:"baseline"})," is required to avoid video artifacts on the viewer and recording side."]}),"\n",(0,s.jsx)(t.h4,{id:"vmix-with-rtmp",children:"vMIX with RTMP"}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/broadcasting-with-vmix",children:"vMix Integration Guide"})," for more details."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"}})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Application"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"FFMPEG"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Profile"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"baseline"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Level"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"3.1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Preset"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"ultrafast"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Keyframe Interval"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"2 seconds"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Threads"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"4"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Net Buffer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"**5 (seconds)"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"basic-rtmp-settings",children:"Basic RTMP Settings"}),"\n",(0,s.jsx)(t.p,{children:"The following are basic recommended settings for any encoder:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"}})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Codec"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"H.264"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bframes"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"disabled"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Profile"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"baseline, main, high"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Keyframe Interval"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"2 seconds"})})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," If you cannot disable bframes, we recommend setting the Profile to ",(0,s.jsx)(t.code,{children:"baseline"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you have any questions or suggestions, feel free to ",(0,s.jsx)(t.a,{href:"https://support.dolby.io/?_gl=1*1bfsqox*_ga*MTExNDIzMDc0OC4xNjgzNTY3ODk2*_ga_CTSBFC56JT*MTY4OTAwNDAwMS4yOS4xLjE2ODkwMTEwMjYuMC4wLjA.",children:"contact us"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,s.jsxs)(t.p,{children:["Find additional integration guides such as ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/using-haivision-kb-encoder",children:"Haivision"}),", ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/broadcasting-jitsi-or-zoom-meetings",children:"Zoom"}),", ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/broadcasting-teradek-vidiu",children:"Teradek"}),", ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/videon",children:"Videon"}),", and more. To find examples for how to use this explore RTMP related articles from the ",(0,s.jsx)(t.a,{href:"https://dolby.io/blog/tag/rtmp/",children:"developer blog"}),"."]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return l}});var n=i(67294);let s={},r=n.createContext(s);function l(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);