"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["47823"],{10946:function(e,a,r){r.r(a),r.d(a,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>p,contentTitle:()=>l});var t=JSON.parse('{"id":"capture/production-cameras","title":"Professional Cameras","description":"Dolby.io Real-time Streaming supports broadcast-grade workflows that use professional cameras and encoders to deliver high-quality, real-time video and audio streams globally to massive audiences. Broadcast-grade cameras are typically recommended for sports streaming, live events, and experiences where quality and low latency are prioritized. This guide will outline how to prepare professional cameras for capture so you can broadcast with Dolby.io Real-time Streaming.","source":"@site/millicast/capture/production-cameras.mdx","sourceDirName":"capture","slug":"/production-cameras","permalink":"/documentation/pr-preview/pr-256/millicast/production-cameras","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/capture/production-cameras.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Professional Cameras","slug":"/production-cameras","sidebar_position":2},"sidebar":"millicast","previous":{"title":"Web Cameras","permalink":"/documentation/pr-preview/pr-256/millicast/web-cameras"},"next":{"title":"Screensharing","permalink":"/documentation/pr-preview/pr-256/millicast/screensharing"}}'),i=r("85893"),o=r("50065");let n=r.p+"assets/images/Salrayworks-setup-e9756e352c6dc27067b0240a77eedb83.jpg",s=r.p+"assets/images/Salrayworks-ready-to-stream-fed6b3494c185b7c278d9d85c0b9f435.jpg",c={title:"Professional Cameras",slug:"/production-cameras",sidebar_position:2},l=void 0,d={},p=[{value:"Preparing to broadcast with the SalrayWorks raySHOT camera",id:"preparing-to-broadcast-with-the-salrayworks-rayshot-camera",level:2}];function h(e){let a={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Dolby.io Real-time Streaming supports broadcast-grade workflows that use professional cameras and encoders to deliver high-quality, real-time video and audio streams globally to massive audiences. Broadcast-grade cameras are typically recommended for sports streaming, live events, and experiences where quality and low latency are prioritized. This guide will outline how to prepare professional cameras for capture so you can broadcast with Dolby.io Real-time Streaming."}),"\n",(0,i.jsx)(a.p,{children:"When capturing video and audio for broadcast, there are a number of decisions that need to be made, such as:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"What video resolution and framerate should I capture?"}),"\n",(0,i.jsx)(a.li,{children:"Should I use chroma subsampling or capture at 4:4:4?"}),"\n",(0,i.jsx)(a.li,{children:"What bitrate and sampling rates should I capture audio at?"}),"\n",(0,i.jsx)(a.li,{children:"Does my camera have a built-in encoder, or will I need to connect to one?"}),"\n",(0,i.jsxs)(a.li,{children:["Am I planning to broadcast with ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/using-rtmp-and-rtmps",children:"RTMP, RTMPs"}),", ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/using-srt",children:"SRT"}),", or ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/using-osprey-talon-whip-hardware-encoder",children:"WebRTC"}),"?"]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"These decisions may be impacted by the camera you are capturing with, the encoder you are planning to use to broadcast, and the Dolby.io CDN itself."}),"\n",(0,i.jsxs)(a.p,{children:["The Dolby.io CDN for WebRTC Real-time Streaming supports streaming up to 4k 60fps video with 4:4:4 color encoded into H.264, H.265, VP8, VP9, and AV1. Additionally, Dolby.io also fully supports transporting audio via the ",(0,i.jsx)(a.a,{href:"https://opus-codec.org/",children:"Opus codec"}),", allowing for bitrates from 6 kb/s to 510 kb/s and sampling rates from 8 kHz (narrowband) to 48 kHz (full-band). RTMP, RTMPs, and SRT streams can also be ingested and will be transmuxed into a WebRTC stream via the Dolby.io CDN, though their codec support may vary."]}),"\n",(0,i.jsx)(a.admonition,{title:"Codec support varies between RTMP, RTMPs, SRT, and WebRTC",type:"tip",children:(0,i.jsxs)(a.p,{children:["Since RTMP, RTMPs, and SRT streams are transmuxed into WebRTC via the Dolby.io CDN they each have different audio and video codec support. Learn more in the ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/broadcast",children:"broadcast section"})," of the streaming guides."]})}),"\n",(0,i.jsxs)(a.p,{children:["Once you have calibrated the camera for the appropriate video resolution and audio resolution for your use case, you will then need to connect the camera to an encoder or calibrate the built-in encoder. Dolby.io supports broadcasting ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/using-rtmp-and-rtmps",children:"RTMP and RTMPs streams"}),", ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/using-srt",children:"SRT streams"}),", and ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/using-osprey-talon-whip-hardware-encoder",children:"WebRTC streams"}),". To start streaming with Dolby.io Real-time Streaming, proceed to the ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/broadcast",children:"Broadcast"})," to learn about hardware and software encoder support."]}),"\n",(0,i.jsx)(a.h2,{id:"preparing-to-broadcast-with-the-salrayworks-rayshot-camera",children:"Preparing to broadcast with the SalrayWorks raySHOT camera"}),"\n",(0,i.jsxs)(a.p,{children:["One example of preparing a professional camera for broadcasting is setting up the ",(0,i.jsx)(a.a,{href:"http://salrayworks.com/eng/bbs/board.php?bo_table=pro_05&wr_id=4",children:"SalrayWorks raySHOT Ultra Latency camera"}),". The raySHOT Ultra Latency camera specializes in capturing video with a delay between 0-15ms allowing for exceptionally fast streaming when paired with Dolby.io Real-time Streaming. Using the decision list above, we can break down what our capture profile and broadcast workflow will look like for the camera:"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"What video resolution and framerate should I capture?"})," The camera is limited to 1080p and 60fps."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Should I use chroma subsampling or capture at 4:4:4?"})," The raySHOT supports 4:4:4 to allow for the lowest possible delay."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"What bitrate and sampling rates should I capture audio at?"})," The camera only captures video."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Does my camera have a built-in encoder, or will I need to connect to one?"})," The camera does not have a built-in encoder, so we'll use a ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/videon",children:"Videon EdgeCaster"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsxs)(a.strong,{children:["Am I planning to broadcast with ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/using-rtmp-and-rtmps",children:"RTMP, RTMPs"}),", ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/using-srt",children:"SRT"}),", or ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/using-osprey-talon-whip-hardware-encoder",children:"WebRTC"}),"?"]})," Videon supports RTMP output, so we'll use that."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"With our capture profile defined, we can look at our physical setup:"}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:n,width:"500"})}),"\n",(0,i.jsx)(a.p,{children:"We have the camera, the encoder, and a serial digital interface (SDI) cable to connect the camera to the encoder. We can now power the camera and the encoder, connect the encoder to the internet via an ethernet cable, and connect the camera to the encoder with the SDI cable."}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:s,width:"500"})}),"\n",(0,i.jsxs)(a.p,{children:["With everything connected, the SalrayWorks camera is now ready to capture broadcast-ready video and transport it to the encoder. At this stage, everything is set up and ready for capture. To learn about the next steps required for broadcasting, check out the ",(0,i.jsx)(a.a,{href:"/documentation/pr-preview/pr-256/millicast/videon",children:"Videon guide"})," in the broadcasting section of the documentation."]})]})}function u(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,a,r){r.d(a,{Z:function(){return s},a:function(){return n}});var t=r(67294);let i={},o=t.createContext(i);function n(e){let a=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);