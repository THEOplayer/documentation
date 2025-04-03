"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["5395"],{85840:function(e,t,a){a.r(t),a.d(t,{default:()=>f,frontMatter:()=>b,metadata:()=>n,assets:()=>m,toc:()=>g,contentTitle:()=>p});var n=JSON.parse('{"id":"getting-started/using-the-dashboard","title":"1. Use the Streaming Dashboard","description":"This part explains how to get started using just the Dolby.io Streaming Dashboard to both broadcast and playback a real-time stream without writing any code.","source":"@site/millicast/getting-started/using-the-dashboard.mdx","sourceDirName":"getting-started","slug":"/getting-started/using-the-dashboard","permalink":"/documentation/pr-preview/pr-254/millicast/getting-started/using-the-dashboard","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/getting-started/using-the-dashboard.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"1. Use the Streaming Dashboard","slug":"/getting-started/using-the-dashboard","sidebar_position":1},"sidebar":"millicast","previous":{"title":"Getting Started","permalink":"/documentation/pr-preview/pr-254/millicast/getting-started"},"next":{"title":"2. Create a Streaming Web App","permalink":"/documentation/pr-preview/pr-254/millicast/getting-started/creating-real-time-streaming-web-app"}}'),i=a("85893"),r=a("50065");let s=a.p+"assets/images/dashboard-tokens-empty-9a3a6c96eee4b449ffd5c1f179850305.png",o=a.p+"assets/images/dolbyio-streaming-add-new-token-popup-0d8803caf75b7e1100360a5fce2ff95b.png";var c=a("35431");let d=a.p+"assets/images/dolbyio-streaming-dashboard-broadcast-fba2b3a46246f8b7de23c39adf8fb5f7.png",l=a.p+"assets/images/dolbyio-share-broadcast-icon-dccf94ab85eca5a65a67583ca5eed699.png",h=a.p+"assets/images/dolbyio-share-broadcast-launch-c1646364035779457db38dbe2bc3c2f4.png",u=a.p+"assets/images/dolbyio-streaming-dashboard-playback-viewer-2b79f59ed6eca10211d41b64ecd3b76c.png",b={title:"1. Use the Streaming Dashboard",slug:"/getting-started/using-the-dashboard",sidebar_position:1},p=void 0,m={},g=[{value:"Capture and broadcast from the dashboard",id:"capture-and-broadcast-from-the-dashboard",level:2},{value:"a. Create a publish token",id:"a-create-a-publish-token",level:3},{value:"b. Start broadcast",id:"b-start-broadcast",level:3},{value:"Playback content with the streaming viewer",id:"playback-content-with-the-streaming-viewer",level:2},{value:"Continue learning",id:"continue-learning",level:2}];function w(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This part explains how to get started using just the Dolby.io Streaming Dashboard to both broadcast and playback a real-time stream without writing any code."}),"\n",(0,i.jsx)(t.p,{children:"This tutorial is split into two sections:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#capture-and-broadcast-from-the-dashboard",children:"Broadcast from the Dashboard"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#playback-content-with-the-streaming-viewer",children:"Playback with the Streaming Viewer"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"capture-and-broadcast-from-the-dashboard",children:"Capture and broadcast from the dashboard"}),"\n",(0,i.jsxs)(t.p,{children:["We will begin by ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/broadcast",children:"broadcasting"})," directly from the Dolby.io Streaming Dashboard, ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/capture",children:"capturing"})," audio and video with a web camera."]}),"\n",(0,i.jsx)(t.h3,{id:"a-create-a-publish-token",children:"a. Create a publish token"}),"\n",(0,i.jsxs)(t.p,{children:["When you log into your Dolby.io account you should select the ",(0,i.jsx)(t.strong,{children:"Streaming"})," tab. If you haven't used your account before, you'll see a screen similar to Figure 1a below."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:s,width:"500"})}),"\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.code,{children:"+ CREATE"})," button and you'll be prompted to configure a new token. The token is used to authenticate an application for publishing a live stream from your account."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:o,width:"300"})}),"\n",(0,i.jsxs)(t.p,{children:["Give this token a meaningful label such as ",(0,i.jsx)(t.em,{children:"gettingStarted"})," and click the ",(0,i.jsx)(t.code,{children:"CONFIRM"})," button. You can have more than one stream using the same token, so each can be labeled independently such as this one having the default ",(0,i.jsx)(t.em,{children:"myStreamName"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"b-start-broadcast",children:"b. Start broadcast"}),"\n",(0,i.jsxs)(t.p,{children:["Return to the ",(0,i.jsx)(t.em,{children:"Live broadcast"})," section and click the ",(0,i.jsx)(t.code,{children:"BROADCAST"})," button."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:c.Z,width:"600"})}),"\n",(0,i.jsxs)(t.p,{children:["From the dashboard broadcast application that opens, click the green ",(0,i.jsx)(t.code,{children:"Start"})," button to begin a broadcast. You will need to give permission to access your microphone and camera. Once the stream begins, you can see the ",(0,i.jsx)(t.em,{children:"LIVE"})," box in the upper right corner and a timecode for the duration of the stream above the ",(0,i.jsx)(t.code,{children:"Stop"})," button."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:d,width:"500"})}),"\n",(0,i.jsx)(t.admonition,{title:"Broadcast Guide",type:"info",children:(0,i.jsxs)(t.p,{children:["Visit the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/how-to-broadcast-in-dashboard",children:"How to Broadcast in Dashboard"})," guide to learn more details about the options available for configuring the publish token and working with this dashboard broadcast application."]})}),"\n",(0,i.jsx)(t.h2,{id:"playback-content-with-the-streaming-viewer",children:"Playback content with the streaming viewer"}),"\n",(0,i.jsxs)(t.p,{children:["In the previous section, you created a publishing token and started to broadcast. Next, we will open a hosted streaming viewer to ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/playback",children:"playback"})," the real-time stream."]}),"\n",(0,i.jsx)(t.p,{children:"In the lower right-hand corner of the dashboard broadcast application are some icons. Click on the sharing icon like the one circled in Figure 2a."}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:l,width:"200"})}),"\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.code,{children:"LAUNCH"})," button to open the hosted live viewer."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:h,width:"500"})}),"\n",(0,i.jsx)(t.p,{children:"It may seem like you are watching a local mirror of your video camera, but this feed is making a full round-trip to the servers and back to the browser again. Note the low delay between capture from the webcam and playback within the browser."}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:u,width:"500"})}),"\n",(0,i.jsx)(t.p,{children:"The viewer has some user controls to pause the stream, configure settings, and view the number of other stream viewers."}),"\n",(0,i.jsx)(t.h2,{id:"continue-learning",children:"Continue learning"}),"\n",(0,i.jsxs)(t.p,{children:["In this tutorial, we were able to start and view a real-time stream. To continue with your project, you may want to customize the experience. The next part will help with getting started to build ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/getting-started/creating-real-time-streaming-web-app",children:"a custom web application"}),"."]})]})}function f(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}},35431:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/dolbyio-streaming-broadcast-button-b5a488018b4037660855e8ee1d679e31.png"},50065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return s}});var n=a(67294);let i={},r=n.createContext(i);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);