"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["17626"],{58822:function(e,i,t){t.r(i),t.d(i,{default:()=>u,frontMatter:()=>n,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"streaming-dashboard/multi-source-builder","title":"Multi-source Builder","description":"The Multi-source tab of the Streaming Dashboard is a tool to help you build and configure multiple publishing sources to enable simulcast or power a multi-view experience. You can add multiple SRT, RTMP or WebRTC sources and use the user-interface to configure multi-bitrate publishing. The Multi-source tab also includes a URL to launch the hosted player with the multi-viewer configuration, customizable `` code to embed the hosted player into your webpage, and the ability to export your multi-source configuration as a file.","source":"@site/millicast/streaming-dashboard/multi-source-builder.md","sourceDirName":"streaming-dashboard","slug":"/multi-source-builder","permalink":"/documentation/pr-preview/pr-266/millicast/multi-source-builder","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/streaming-dashboard/multi-source-builder.md","tags":[],"version":"current","frontMatter":{"title":"Multi-source Builder","slug":"/multi-source-builder"},"sidebar":"millicast","previous":{"title":"Publish Tokens","permalink":"/documentation/pr-preview/pr-266/millicast/managing-your-tokens"},"next":{"title":"Subscribe Tokens","permalink":"/documentation/pr-preview/pr-266/millicast/subscribe-tokens"}}'),s=t("85893"),a=t("50065");let n={title:"Multi-source Builder",slug:"/multi-source-builder"},l=void 0,o={},d=[{value:"Adding a source",id:"adding-a-source",level:2},{value:"Source details",id:"source-details",level:2},{value:"Quality layers",id:"quality-layers",level:3},{value:"Multi-source player",id:"multi-source-player",level:2},{value:"Exporting a multi-source file",id:"exporting-a-multi-source-file",level:2}];function c(e){let i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:"Multi-source"})," tab of the Streaming Dashboard is a tool to help you build and configure multiple publishing sources to enable simulcast or power a multi-view experience. You can add multiple ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/using-srt",children:"SRT"}),", ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/using-rtmp-and-rtmps",children:"RTMP"})," or ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/webrtc-whip",children:"WebRTC"})," sources and use the user-interface to configure multi-bitrate publishing. The Multi-source tab also includes a URL to launch the hosted player with the multi-viewer configuration, customizable ",(0,s.jsx)(i.code,{children:"<iframe>"})," code to embed the hosted player into your webpage, and the ability to export your multi-source configuration as a file."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(76170).Z+"",width:"1694",height:"1080"})}),"\n",(0,s.jsx)(i.p,{children:"This guide covers the following:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"#adding-a-source",children:"Adding a Source"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"#multi-source-player",children:"Using the Multi-source Player"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"#exporting-a-multi-source-file",children:"Exporting a Multi-source File"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"adding-a-source",children:"Adding a source"}),"\n",(0,s.jsxs)(i.p,{children:["Click the ",(0,s.jsx)(i.code,{children:"Add a source"})," button to begin setting up multiple stream sources."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(99967).Z+"",width:"724",height:"340"})}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:"source name"})," should be a short and descriptive text label. This name will appear within the hosted player multi-view as audio and video sources that can be selected."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:"streaming protocol"})," helps identify the configuration needed for the broadcast. The multi-source builder supports ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/using-rtmp-and-rtmps",children:"RTMP"}),", ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/using-srt",children:"SRT"}),", and ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/webrtc-whip",children:"WHIP"})," broadcast protocols."]}),"\n",(0,s.jsxs)(i.p,{children:["By default, the first source you add will be labeled as the ",(0,s.jsx)(i.em,{children:"Main"})," source. Dolby.io Real-time Streaming limits the aggregate bitrate of all sources to 12 Mbps. The main source is prioritized and allowed to exceed the 12 Mbps limit, and the other sources share any remaining available bandwidth. See the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/multiview#limitations-of-multi-view",children:"Multi-view"})," guide for examples of bandwidth allocation."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(484).Z+"",width:"1690",height:"1078"})}),"\n",(0,s.jsx)(i.h2,{id:"source-details",children:"Source details"}),"\n",(0,s.jsx)(i.p,{children:"By selecting a source, the configuration details and available settings will be displayed. This varies depending on the capabilities of the protocol."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/using-rtmp-and-rtmps",children:"RTMP"}),": The ",(0,s.jsx)(i.em,{children:"RTMP/s publish paths"})," and ",(0,s.jsx)(i.em,{children:"RTMP publish stream name"})," can be used for publishing streams with RTMP-compatible software and hardware.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["RTMP multi-bitrate can be enabled from this section. When enabled, the dashboard will create three RTMP publish stream names for ",(0,s.jsx)(i.strong,{children:"low"})," bitrate, ",(0,s.jsx)(i.strong,{children:"medium"})," bitrate, and ",(0,s.jsx)(i.strong,{children:"high"})," bitrate."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/using-srt",children:"SRT"}),": The ",(0,s.jsx)(i.em,{children:"SRT publish path"}),", ",(0,s.jsx)(i.em,{children:"SRT stream ID"}),", and ",(0,s.jsx)(i.em,{children:"SRT publish URL"})," can be used for publishing with SRT-compatible software and hardware.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Passphrase encryption can be enabled from this section. When enabled, the dashboard will generate a passphrase for encrypting the SRT stream."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/webrtc-whip",children:"WHIP"}),": The ",(0,s.jsx)(i.em,{children:"WHIP endpoint"})," and ",(0,s.jsx)(i.em,{children:"Bearer token"})," can be used to publish a WebRTC stream with WebRTC-compatible software and hardware."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"quality-layers",children:"Quality layers"}),"\n",(0,s.jsxs)(i.p,{children:["For RTMP and SRT sources, you can specify one or more quality layers. Quality layers allows for quality selection when multi-bitrate (simulcast) is used for playback. ",(0,s.jsx)(i.strong,{children:"Multi-bitrate delivery"})," allows for adaptive quality RTMP and SRT streams. These streams are selected based on the viewer's available bandwidth and provide a more stable streaming experience. For more information see, ",(0,s.jsx)(i.a,{href:"/millicast/using-webrtc-simulcast",children:"Simulcast"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(59600).Z+"",width:"1682",height:"1223"})}),"\n",(0,s.jsxs)(i.p,{children:["To learn more about publishing and broadcasting with Dolby.io, check out the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/broadcast",children:"Broadcast"})," guide, which provides more in-depth resources and examples on how to use the Publish token once it is created."]}),"\n",(0,s.jsx)(i.h2,{id:"multi-source-player",children:"Multi-source player"}),"\n",(0,s.jsxs)(i.p,{children:["You can use the multi-source hosted player, which is a streaming video player, as a standalone web application or embed it into your website with an ",(0,s.jsx)(i.code,{children:"<iframe>"}),". The player is similar to the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/how-to-broadcast-in-dashboard",children:"Live Broadcast"})," application in the dashboard but is for the audience to use to view the published multi-source stream. For more information, see the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/hosted-viewer",children:"Hosted Player"})," guide."]}),"\n",(0,s.jsxs)(i.p,{children:["You can use the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/hosted-viewer",children:"Hosted Player"})," with multi-view enabled to verify your multi-source setup. This streaming video player can be used as a standalone web application or embedded into your website. By copying the ",(0,s.jsx)(i.strong,{children:"Multi-view player URL"})," or ",(0,s.jsx)(i.strong,{children:"Hosted embedded player"})," code it will already be properly configured for this type of multi-source playback."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(19520).Z+"",width:"452",height:"776"})}),"\n",(0,s.jsxs)(i.p,{children:["The embedded player is compatible whether using a CMS like Drupal or Wordpress or more complex custom JavaScript web applications built with frameworks like React, VueJS, or Angular. For more information, see ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/hosted-viewer#how-to-embed-the-hosted-player-in-a-web-site",children:"How to embed the hosted player in a website"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"exporting-a-multi-source-file",children:"Exporting a multi-source file"}),"\n",(0,s.jsx)(i.p,{children:"You can download your multi-source file, which includes the multi-source hosted player path URL, and publishing URLs for each source and associated quality layer. The exported file can be used to transfer the configuration to multiple devices. For example, an administrator can create the stream, and hand off the configuration file to an operator to set up the encoder."}),"\n",(0,s.jsxs)(i.p,{children:["To export the multi-source file, click the ",(0,s.jsx)(i.code,{children:"Export all"})," button and click the copy icon or ",(0,s.jsx)(i.code,{children:"Download"})," to save your multi-source configuration."]})]})}function u(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},99967:function(e,i,t){t.d(i,{Z:function(){return r}});let r=t.p+"assets/images/add-source-1b2256f62125269e44bac6847a5149fe.png"},76170:function(e,i,t){t.d(i,{Z:function(){return r}});let r=t.p+"assets/images/builder-b77ff2af3ddfc132de3e0747a18b3521.png"},19520:function(e,i,t){t.d(i,{Z:function(){return r}});let r=t.p+"assets/images/multi-source-player-54fd6877d0371521ee6dfe3007294038.png"},59600:function(e,i,t){t.d(i,{Z:function(){return r}});let r=t.p+"assets/images/rtmp-source-2c1b1bd3103ed297035a36fd4f60d37d.png"},484:function(e,i,t){t.d(i,{Z:function(){return r}});let r=t.p+"assets/images/test-sources-a3d9a1d3fb94dfa34ea2df146d82259d.png"},50065:function(e,i,t){t.d(i,{Z:function(){return l},a:function(){return n}});var r=t(67294);let s={},a=r.createContext(s);function n(e){let i=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);