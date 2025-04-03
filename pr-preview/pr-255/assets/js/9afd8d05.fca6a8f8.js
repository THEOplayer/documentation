"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["18607"],{53999:function(e,i,t){t.r(i),t.d(i,{default:()=>x,frontMatter:()=>u,metadata:()=>o,assets:()=>g,toc:()=>b,contentTitle:()=>m});var o=JSON.parse('{"id":"capture/action-cameras","title":"Action Cameras","description":"Sports and action cameras are designed to capture fast movements or provide a point-of-view perspective while in motion. Many of these types of cameras support WebRTC or RTMP output that can be used as a broadcast streaming source.","source":"@site/millicast/capture/action-cameras.mdx","sourceDirName":"capture","slug":"/action-cameras","permalink":"/documentation/pr-preview/pr-255/millicast/action-cameras","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/capture/action-cameras.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Action Cameras","slug":"/action-cameras","sidebar_position":5},"sidebar":"millicast","previous":{"title":"360 VR Cameras","permalink":"/documentation/pr-preview/pr-255/millicast/360-cameras"},"next":{"title":"Camera Drones","permalink":"/documentation/pr-preview/pr-255/millicast/live-streaming-from-drones-rtmp"}}'),r=t("85893"),n=t("50065");let a=t.p+"assets/images/go-pro-hero8-camera-quik-app-live-stream-98eb5f4aa3b3e2fde966f2d21636c83e.png",s=t.p+"assets/images/go-pro-quik-live-stream-rtmp-8102260764b14fc4c8ea375c2b0d5d86.jpg",l=t.p+"assets/images/gopro-stream-to-rtmp-1aa4ab29b8c41f4dee1b70dd2700946c.png",c=t.p+"assets/images/gopro-quik-go-live-7a376bf6239f84f8e7a4a78951311729.png",h=t.p+"assets/images/gopro-stream-health-1de8ea654dbac5798c90f76b12c37501.png",d=t.p+"assets/images/GoPro_Web_Cam-084b4e33d85f60bdeaec61291ca0c7ca.png",p=t.p+"assets/images/GoProOBS-fa893a74687345862f0299a9c8279e48.png",u={title:"Action Cameras",slug:"/action-cameras",sidebar_position:5},m=void 0,g={},b=[{value:"GoPro",id:"gopro",level:2},{value:"Using the GoPro Quik App",id:"using-the-gopro-quik-app",level:3},{value:"1. Select live stream while connected to camera",id:"1-select-live-stream-while-connected-to-camera",level:4},{value:"2. Select RTMP as platform",id:"2-select-rtmp-as-platform",level:4},{value:"3. Enter your Dolby.io RTMP publish path",id:"3-enter-your-dolbyio-rtmp-publish-path",level:4},{value:"4. Go live",id:"4-go-live",level:4},{value:"Using the GoPro webcam utility",id:"using-the-gopro-webcam-utility",level:3},{value:"Stream with the Dolby.io dashboard",id:"stream-with-the-dolbyio-dashboard",level:4},{value:"Stream using a GoPro from OBS",id:"stream-using-a-gopro-from-obs",level:4},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Learn more",id:"learn-more",level:2}];function f(e){let i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"Sports and action cameras are designed to capture fast movements or provide a point-of-view perspective while in motion. Many of these types of cameras support WebRTC or RTMP output that can be used as a broadcast streaming source."}),"\n",(0,r.jsx)(i.p,{children:"This guide has a few examples:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#using-the-gopro-quik-app",children:"Using the GoPro Quik App"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#using-the-gopro-webcam-utility",children:"Using the GoPro Webcam Utility"})}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["If you are using an action camera that is not listed, you should be able to use similar settings for configuring streaming with an ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/using-rtmp-and-rtmps",children:"RTMP"})," ingestion source."]}),"\n",(0,r.jsx)(i.h2,{id:"gopro",children:"GoPro"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"https://dolby.io/wp-content/uploads/2023/01/Dolby.io_Live-Stream-With-GoPro-Via-Dolby.io-Streaming@3x-100-2048x847.jpg",alt:"GoPro"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://gopro.com/",children:"GoPro"})," is a leader in action cameras. With the latest models of GoPro cameras, you can achieve sub-second latency by streaming with RTMP from your GoPro directly to Dolby.io for ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/distribution",children:"distribution"})," over WebRTC."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"GoPro HERO Black"}),"\n",(0,r.jsx)(i.li,{children:"GoPro MAX"}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{title:"Dolby.io Dashboard - Publish Token Details",type:"tip",children:(0,r.jsxs)(i.p,{children:["You will need to have your Dolby.io ",(0,r.jsx)(i.strong,{children:"publishing token"})," and ",(0,r.jsx)(i.strong,{children:"stream name"})," in order to complete this setup. See the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/getting-started/using-the-dashboard",children:"Getting Started"})," guide for instructions on creating a new app for the first time. You will also need the ",(0,r.jsx)(i.strong,{children:"RTMP publish path"})," from the ",(0,r.jsx)(i.em,{children:"Publishing"})," tab in the Dolby.io Dashboard. See the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/using-rtmp-and-rtmps",children:"RTMP"})," guide for more detail on where to find it."]})}),"\n",(0,r.jsx)(i.h3,{id:"using-the-gopro-quik-app",children:"Using the GoPro Quik App"}),"\n",(0,r.jsxs)(i.p,{children:["The GoPro ",(0,r.jsx)(i.a,{href:"https://gopro.com/en/us/shop/quik-app-video-photo-editor",children:"Quik App"})," allows remote connections to manage the camera and its settings since the GoPro HERO7 Black."]}),"\n",(0,r.jsx)(i.p,{children:"An overview of the steps to begin capturing from a GoPro include:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Select Live Stream While Connected to Camera"}),"\n",(0,r.jsx)(i.li,{children:"Select RTMP as Platform"}),"\n",(0,r.jsx)(i.li,{children:"Enter your Dolby.io RTMP Publish URL"}),"\n",(0,r.jsx)(i.li,{children:"Go Live"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.strong,{children:"Quick App"})," is a GoPro product, so the user interface and instructions may change in future releases from what is described below. Visit the official ",(0,r.jsx)(i.a,{href:"https://community.gopro.com/s/?language=en_US",children:"GoPro Support"})," for resources like product manuals, help articles, and video tutorials on using the app if you have any questions."]}),"\n",(0,r.jsx)(i.h4,{id:"1-select-live-stream-while-connected-to-camera",children:"1. Select live stream while connected to camera"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.em,{children:"Live Stream"})," button begins setup of a live stream for the camera."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:a,width:"400"})}),"\n",(0,r.jsx)(i.h4,{id:"2-select-rtmp-as-platform",children:"2. Select RTMP as platform"}),"\n",(0,r.jsxs)(i.p,{children:["Some of the popular public streaming options are listed. To set up your private stream using Dolby.io, select ",(0,r.jsx)(i.em,{children:"RTMP"})," from the options."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:s,width:"400"})}),"\n",(0,r.jsx)(i.h4,{id:"3-enter-your-dolbyio-rtmp-publish-path",children:"3. Enter your Dolby.io RTMP publish path"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.em,{children:"Publishing"})," tab of the ",(0,r.jsx)(i.em,{children:"Live broadcast - Publish tokens"})," section of the Dolby.io dashboard includes the details you need."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"RTMP publish path"})," + ",(0,r.jsx)(i.code,{children:"/"})," + ",(0,r.jsx)(i.code,{children:"RTMP publish stream name"})]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["You can note that the ",(0,r.jsx)(i.strong,{children:"RTMP publish stream name"})," is already a concatenation of the ",(0,r.jsx)(i.em,{children:"publishing token"})," and ",(0,r.jsx)(i.em,{children:"stream name"}),". Typically this will look something similar to:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"rtmp://rtmp-auto.millicast.com:1935/v2/pub/${streamName}?token=${publishToken}\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Connect to a local network and include this as the ",(0,r.jsx)(i.strong,{children:"RTMP URL"}),". Pick the resolution that best suits your needs."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:l,width:"400"})}),"\n",(0,r.jsxs)(i.p,{children:["Click the ",(0,r.jsx)(i.em,{children:"Set Up Live Stream"})," button."]}),"\n",(0,r.jsx)(i.h4,{id:"4-go-live",children:"4. Go live"}),"\n",(0,r.jsxs)(i.p,{children:["When ready to start capturing, click the ",(0,r.jsx)(i.code,{children:"Go Live"})," button."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:c,width:"400"})}),"\n",(0,r.jsxs)(i.p,{children:["The Quik app will show you a timecode for the duration of the stream as well as an indicator of ",(0,r.jsx)(i.em,{children:"Stream Health"})," from the local network performance as indicated by the bit rate."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:h,width:"400"})}),"\n",(0,r.jsxs)(i.p,{children:["To verify everything is working, you view the stream using any suitable ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/playback",children:"playback"})," method, such as the hosted web viewer described in the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/",children:"Getting Started"})," guide available directly from the Dolby.io Dashboard."]}),"\n",(0,r.jsx)(i.h3,{id:"using-the-gopro-webcam-utility",children:"Using the GoPro webcam utility"}),"\n",(0,r.jsxs)(i.p,{children:["The GoPro ",(0,r.jsx)(i.a,{href:"https://community.gopro.com/s/article/GoPro-Webcam?language=en_US",children:"Webcam"})," desktop utility for Mac or Windows allows you to configure a GoPro HERO8 Black or later camera to capture a stream much like you would any other ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/web-cameras",children:"web cameras"})," attached to a computer."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.strong,{children:"Webcam Utility"})," is a GoPro product, so the behavior and instructions may change in future releases from what is described below. Visit the official ",(0,r.jsx)(i.a,{href:"https://community.gopro.com/s/?language=en_US",children:"GoPro Support"})," for resources like Product Manuals, Help Articles, and Video Tutorials on using the app if you have any questions."]}),"\n",(0,r.jsx)(i.h4,{id:"stream-with-the-dolbyio-dashboard",children:"Stream with the Dolby.io dashboard"}),"\n",(0,r.jsxs)(i.p,{children:["With the GoPro Webcam utility, your GoPro camera will be present as an option from the media device selection. Follow the same instructions for broadcasting described in ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/getting-started/using-the-dashboard",children:"Part 1: Using the Streaming Dashboard"}),"."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:d,width:"600"})}),"\n",(0,r.jsx)(i.h4,{id:"stream-using-a-gopro-from-obs",children:"Stream using a GoPro from OBS"}),"\n",(0,r.jsxs)(i.p,{children:["Similar to using the Dolby.io Dashboard, you can select the GoPro Webcam from the list of available devices. See the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/using-obs",children:"OBS"})," guide for more detail on how to configure OBS to broadcast the captured stream."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:p,width:"600"})}),"\n",(0,r.jsx)(i.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(i.p,{children:["If you run into any trouble, see the official ",(0,r.jsx)(i.a,{href:"https://community.gopro.com/s/?language=en_US",children:"GoPro Support"})," for resources like Product Manuals, Help Articles, and Video Tutorials on using the app if you have any questions."]}),"\n",(0,r.jsx)(i.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,r.jsxs)(i.p,{children:["Once you have configured your camera for capture, visit the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/broadcast",children:"broadcast"}),", ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/distribution",children:"distribution"}),", and ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/playback",children:"playback"})," guides to complete your project."]}),"\n",(0,r.jsxs)(i.p,{children:["If you have a different type of action camera than the ones listed, reach out to our ",(0,r.jsx)(i.a,{href:"https://support.dolby.io/",children:"support team"})," to ask about compatibility."]})]})}function x(e={}){let{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return a}});var o=t(67294);let r={},n=o.createContext(r);function a(e){let i=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(n.Provider,{value:i},e.children)}}}]);