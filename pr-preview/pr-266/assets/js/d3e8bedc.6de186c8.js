"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["43054"],{9235:function(M,i,e){e.r(i),e.d(i,{default:()=>z,frontMatter:()=>n,metadata:()=>t,assets:()=>r,toc:()=>s,contentTitle:()=>D});var t=JSON.parse('{"id":"capture/screensharing","title":"Screensharing","description":"Screensharing or screen capturing is an important feature for virtual events, webinars, and many other types of broadcasts that involve sharing information. This guide will outline three options for managing screen capture in a way that is compatible with Dolby.io:","source":"@site/millicast/capture/screensharing.mdx","sourceDirName":"capture","slug":"/screensharing","permalink":"/documentation/pr-preview/pr-266/millicast/screensharing","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/capture/screensharing.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Screensharing","slug":"/screensharing","sidebar_position":3},"sidebar":"millicast","previous":{"title":"Professional Cameras","permalink":"/documentation/pr-preview/pr-266/millicast/production-cameras"},"next":{"title":"360 VR Cameras","permalink":"/documentation/pr-preview/pr-266/millicast/360-cameras"}}'),j=e("85893"),I=e("50065"),c=e("77672");let N=e.p+"assets/images/7030fd4-image-2bcd82df83b52c2082480d86885bbc03.png",u=e.p+"assets/images/dispalycaptureobs-fea3c08853e06c3984abe9832849b2bc.png",a=e.p+"assets/images/d2386da-image-0686efbc75a69632c2d14f48005792e1.png";var g=e("59372");let n={title:"Screensharing",slug:"/screensharing",sidebar_position:3},D=void 0,r={},s=[{value:"Screensharing with the Dolby.io dashboard broadcaster",id:"screensharing-with-the-dolbyio-dashboard-broadcaster",level:2},{value:"Screensharing with OBS",id:"screensharing-with-obs",level:2},{value:"Screensharing with JavaScript",id:"screensharing-with-javascript",level:2},{value:"Additional Client SDKs",id:"additional-client-sdks",level:2}];function L(M){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,I.a)(),...M.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.p,{children:"Screensharing or screen capturing is an important feature for virtual events, webinars, and many other types of broadcasts that involve sharing information. This guide will outline three options for managing screen capture in a way that is compatible with Dolby.io:"}),"\n",(0,j.jsxs)(i.ol,{children:["\n",(0,j.jsx)(i.li,{children:(0,j.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/screensharing#screensharing-with-the-dolbyio-dashboard-broadcaster",children:"Screensharing with the Dolby.io Dashboard Broadcaster"})}),"\n",(0,j.jsx)(i.li,{children:(0,j.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/screensharing#screensharing-with-obs",children:"Screensharing with OBS"})}),"\n",(0,j.jsx)(i.li,{children:(0,j.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/screensharing#screensharing-with-javascript",children:"Screensharing with JavaScript"})}),"\n"]}),"\n",(0,j.jsx)(i.admonition,{title:"Sharing Screen and Video",type:"caution",children:(0,j.jsxs)(i.p,{children:["If you want to enable both screensharing and share your webcam at the same time, you must enable ",(0,j.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/multi-source-broadcasting",children:"multisource"})," on the publishing token to broadcast multiple sources to the same stream."]})}),"\n",(0,j.jsx)(i.h2,{id:"screensharing-with-the-dolbyio-dashboard-broadcaster",children:"Screensharing with the Dolby.io dashboard broadcaster"}),"\n",(0,j.jsx)(i.p,{children:"Once you have created a Dolby.io account, you can begin using the Dolby.io dashboard to create and manage tokens, manage your Dolby.io account, and broadcast and view active streams."}),"\n",(0,j.jsx)(i.p,{children:"Inside the dashboard, click the Broadcast button located adjacent to the token."}),"\n","\n",(0,j.jsx)("div",{class:"center-container",children:(0,j.jsx)("img",{src:c.Z,width:"500"})}),"\n",(0,j.jsx)(i.p,{children:'Inside the dashboard broadcaster, click on the camera icon in the bottom left corner. To share your screen, select the "Share Screen" option and start sharing.'}),"\n","\n",(0,j.jsx)("div",{class:"center-container",children:(0,j.jsx)("img",{src:N,width:"500"})}),"\n",(0,j.jsxs)(i.p,{children:["With your screen shared to the dashboard broadcaster, you are now set up to capture content from your desktop. You can click start to begin broadcasting or proceed to ",(0,j.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/broadcast",children:"Broadcast"})," to learn about broadcast settings."]}),"\n",(0,j.jsx)(i.h2,{id:"screensharing-with-obs",children:"Screensharing with OBS"}),"\n",(0,j.jsxs)(i.p,{children:[(0,j.jsx)(i.a,{href:"https://obsproject.com/",children:"Open Broadcast Software"}),", or OBS, is a popular screencasting and streaming app available as free open-source software. To connect a web camera to OBS you first need to ",(0,j.jsx)(i.a,{href:"https://obsproject.com/",children:"download"})," the software appropriate to your operating system. Once downloaded and installed, open the app."]}),"\n",(0,j.jsx)(i.p,{children:"Inside the app, click the plus icon within the Sources tab and add a Display Capture."}),"\n","\n",(0,j.jsx)("div",{class:"center-container",children:(0,j.jsx)("img",{src:u,width:"500"})}),"\n",(0,j.jsx)(i.p,{children:"Select the screen you want to share and whether you want OBS to capture the cursor or not."}),"\n","\n",(0,j.jsx)("div",{class:"center-container",children:(0,j.jsx)("img",{src:a,width:"500"})}),"\n",(0,j.jsxs)(i.p,{children:['With your screen selected click "OK". You\'ve now set up your screen for capture via OBS. To start streaming from OBS continue to the ',(0,j.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/using-obs",children:"broadcasting with OBS guide"}),"."]}),"\n",(0,j.jsx)(i.h2,{id:"screensharing-with-javascript",children:"Screensharing with JavaScript"}),"\n",(0,j.jsxs)(i.p,{children:["Screen capturing with JavaScript is straightforward thanks to screen capture support with the ",(0,j.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia",children:(0,j.jsx)(i.code,{children:"getDisplayMedia"})})," method provided by the ",(0,j.jsx)(i.code,{children:"MediaDevices"})," interface. The ",(0,j.jsx)(i.code,{children:"getDisplayMedia"})," method is supported on both Windows and Mac devices for all major browsers, however, it isn\u2019t currently available for mobile devices. For a full list of support for ",(0,j.jsx)(i.code,{children:"getDisplayMedia"})," ",(0,j.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices#browser_compatibility",children:"see this table here"}),"."]}),"\n",(0,j.jsxs)(i.p,{children:["To get started using ",(0,j.jsx)(i.code,{children:"getDisplayMedia"})," we first need to define our display media options:"]}),"\n",(0,j.jsx)(i.pre,{children:(0,j.jsx)(i.code,{className:"language-javascript",children:"const displayMediaOptions = {\n  video: {\n    displaySurface: 'window',\n  },\n  audio: false,\n};\n"})}),"\n",(0,j.jsxs)(i.p,{children:["In this case, display audio is not being captured, just the display window as a video feed. There are a number of different settings to adjust with the ",(0,j.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia",children:"full list available here"}),"."]}),"\n",(0,j.jsxs)(i.p,{children:["With our options defined, we can use the ",(0,j.jsx)(i.code,{children:"getDisplayMedia"})," method to capture our screen:"]}),"\n",(0,j.jsx)(i.pre,{children:(0,j.jsx)(i.code,{className:"language-javascript",children:"const screenCapture = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);\n"})}),"\n",(0,j.jsxs)(i.p,{children:["With that, the screen is now being captured. When this function is called, users will receive a permissions prompt from the browser which they will have to approve for the device to begin capturing content. This screen capture can then be passed as a ",(0,j.jsx)(i.code,{children:"mediaStream"})," into the Dolby.io Millicast JavaScript SDK. To learn more about how you can begin broadcasting a screen capture, explore the Client SDK guides or check out this detailed blog for ",(0,j.jsx)(i.a,{href:"https://dolby.io/blog/how-to-screen-capture-for-streaming-in-javascript/",children:"screenshare streaming in JavaScript"}),"."]}),"\n",(0,j.jsx)(i.h2,{id:"additional-client-sdks",children:"Additional Client SDKs"}),"\n",(0,j.jsx)(i.p,{children:"You can find similar capabilities as JavaScript from one of the other Client SDKs listed below:"}),"\n","\n",(0,j.jsxs)(g.w,{children:[(0,j.jsx)(g.q,{children:(0,j.jsxs)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/web",children:[(0,j.jsx)(i.img,{src:e(50237).Z+"",width:"24",height:"24"})," Web SDK"]})}),(0,j.jsx)(g.q,{children:(0,j.jsxs)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/ios",children:[(0,j.jsx)(i.img,{src:e(66828).Z+"",width:"20",height:"20"})," iOS SDK"]})}),(0,j.jsx)(g.q,{children:(0,j.jsxs)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/android",children:[(0,j.jsx)(i.img,{src:e(80612).Z+"",width:"675",height:"675"})," Android SDK"]})}),(0,j.jsx)(g.q,{children:(0,j.jsxs)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/rn",children:[(0,j.jsx)(i.img,{src:e(54300).Z+"",width:"23",height:"20"})," React Native"]})}),(0,j.jsx)(g.q,{children:(0,j.jsxs)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/desktop",children:[(0,j.jsx)(i.img,{src:e(66828).Z+"",width:"20",height:"20"})," Mac SDK"]})}),(0,j.jsx)(g.q,{children:(0,j.jsxs)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/desktop",children:[(0,j.jsx)(i.img,{src:e(55549).Z+"",width:"512",height:"512"})," Linux SDK"]})}),(0,j.jsx)(g.q,{children:(0,j.jsxs)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/flutter",children:[(0,j.jsx)(i.img,{src:e(56107).Z+"",width:"300",height:"371"})," Flutter SDK"]})}),(0,j.jsx)(g.q,{children:(0,j.jsxs)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/desktop",children:[(0,j.jsx)(i.img,{src:e(29234).Z+"",width:"456",height:"456"})," .NET SDK"]})})]})]})}function z(M={}){let{wrapper:i}={...(0,I.a)(),...M.components};return i?(0,j.jsx)(i,{...M,children:(0,j.jsx)(L,{...M})}):L(M)}},77672:function(M,i,e){e.d(i,{Z:function(){return t}});let t=e.p+"assets/images/broadcast_dash_button-51c8222fb8cda80b26129865aec6e1f6.png"},80612:function(M,i,e){e.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NzUiIGhlaWdodD0iNjc1IiB2aWV3Qm94PSIwIDAgNjc1IDY3NSI+PHBhdGggZmlsbD0iIzM0QTg1MyIgZD0iTTY3Mi4zOCA1MTQuMjNjLS4yMi0xLjM3OC0uNDMtMi43NC0uNjYtNC4xMDJhMzM1LjExMiAzMzUuMTEyIDAgMCAwLTUuMTMtMjUuMDQxIDMzNy4xOCAzMzcuMTggMCAwIDAtMjguNTEtNzUuNjMgMzQxLjIwNyAzNDEuMjA3IDAgMCAwLTI0LjU2LTQwLjA3MiAzMzguNiAzMzguNiAwIDAgMC0zNy4xLTQzLjY5NyAzMzQuMTc2IDMzNC4xNzYgMCAwIDAtMTcuNjYtMTYuMzYxIDMzOS42MiAzMzkuNjIgMCAwIDAtNDIuMDYtMzAuOThjLjEzLS4yMTQuMjQtLjQ0My4zNy0uNjU3IDYuNzktMTEuNzMyIDEzLjYtMjMuNDQ5IDIwLjM5LTM1LjE4MWwxOS45Mi0zNC4zNjFhMTA0MjcuNCAxMDQyNy40IDAgMCAwIDE0LjMtMjQuNjggMzEuMjggMzEuMjggMCAwIDAgMi42OS02LjAzOCAzMC45NiAzMC45NiAwIDAgMCAuNDUtMTcuNDQ0IDMxLjc0MyAzMS43NDMgMCAwIDAtMy4zNS03Ljk1OWMtMi41NC00LjI2Ni02LjE3LTcuOTc0LTEwLjczLTEwLjY4MmEzMS4xNSAzMS4xNSAwIDAgMC0xMy4xNi00LjIzMyAzMS40NTUgMzEuNDU1IDAgMCAwLTUuODMuMDVjLTEuNi4xNjMtMy4xOS40NTktNC43Ny44NjlhMzAuODY1IDMwLjg2NSAwIDAgMC0xNC45IDkuMDQxIDMxLjEwNiAzMS4xMDYgMCAwIDAtMy45MSA1LjMzM2MtNC43NyA4LjIyMS05LjU0IDE2LjQ1OS0xNC4zIDI0LjY4bC0xOS45MiAzNC4zNjFjLTYuNzkgMTEuNzMzLTEzLjYgMjMuNDQ5LTIwLjM5IDM1LjE4Mi0uNzQgMS4yNzktMS40OSAyLjU1OS0yLjIzIDMuODU2LTEuMDMtLjQxMS0yLjA1LS44MjEtMy4wOC0xLjIxNS0zNy40NC0xNC4yNzYtNzguMDYtMjIuMDg3LTEyMC41Mi0yMi4wODctMS4xNiAwLTIuMzEgMC0zLjQ4LjAxNy0zNy43NS4zNzctNzQuMDIgNi45NDEtMTA3Ljg2IDE4LjcyM2EzMTQuMDMyIDMxNC4wMzIgMCAwIDAtMTEuNjIgNC4zMTZjLS42OS0xLjE5OC0xLjQtMi4zOTYtMi4wOC0zLjU5NC02Ljc5LTExLjczMy0xMy42LTIzLjQ0OS0yMC4zOS0zNS4xODJsLTE5LjkyLTM0LjM2Yy00Ljc4LTguMjIyLTkuNTUtMTYuNDYtMTQuMy0yNC42OGEzMS42NDMgMzEuNjQzIDAgMCAwLTMuOTEtNS4zMzMgMzAuODY1IDMwLjg2NSAwIDAgMC0xNC45LTkuMDQyYy0xLjU4LS40MS0zLjE3LS43MDUtNC43OC0uODdhMzEuMzQgMzEuMzQgMCAwIDAtNS44Mi0uMDQ5IDMwLjc4NCAzMC43ODQgMCAwIDAtMTMuMTcgNC4yMzQgMzAuODA5IDMwLjgwOSAwIDAgMC0xMC43MiAxMC42ODIgMzAuMzczIDMwLjM3MyAwIDAgMC0xLjk1IDMuODczIDI5LjU4OSAyOS41ODkgMCAwIDAtMS40IDQuMDg2IDMxLjA0OCAzMS4wNDggMCAwIDAgLjQ0IDE3LjQ0MyAzMS45MDUgMzEuOTA1IDAgMCAwIDIuNjkgNi4wMzljNC43OCA4LjIyIDkuNTUgMTYuNDU4IDE0LjMgMjQuNjggNi42NSAxMS40NTMgMTMuMjkgMjIuOTA3IDE5LjkzIDM0LjM2IDYuNzkgMTEuNzMzIDEzLjU5IDIzLjQ0OSAyMC4zOCAzNS4xODIuMDUuMDk4LjEyLjE5Ny4xNy4yOTVhMzM5LjY2NyAzMzkuNjY3IDAgMCAwLTM5LjAzIDI4LjI3MyAzMzcuNzQxIDMzNy43NDEgMCAwIDAtMjEuMjcgMTkuNDQ1IDM0MS4wMDcgMzQxLjAwNyAwIDAgMC0zNy4xIDQzLjY5OCAzMzUuODYzIDMzNS44NjMgMCAwIDAtMjQuNTYgNDAuMDcyIDMzNy4xOCAzMzcuMTggMCAwIDAtMjguNTEgNzUuNjMgMzQzLjc2NyAzNDMuNzY3IDAgMCAwLTUuMTMgMjUuMDQxYy0uMjMgMS4zNjItLjQ0IDIuNzQtLjY1IDQuMTAyYTMyOC40MiAzMjguNDIgMCAwIDAtMS45NCAxNC44MThoNjczLjExYy0uNTQtNC45NzItMS4xOC05LjkxMi0xLjkzLTE0LjgxOGwuMDUtLjAzM1oiLz48cGF0aCBmaWxsPSIjMjAyMTI0IiBkPSJNNTEyLjc5IDQzNS45ODdjMTMuNDctOC45NjYgMTUuNDMtMjkuNzEgNC4zNy00Ni4zMzEtMTEuMDUtMTYuNjIyLTMwLjkzLTIyLjgyNy00NC4zOS0xMy44NjEtMTMuNDcgOC45NjctMTUuNDMgMjkuNzEtNC4zNyA0Ni4zMzEgMTEuMDUgMTYuNjIyIDMwLjkzIDIyLjgyOCA0NC4zOSAxMy44NjFaTTIwNy42IDQyMi4xODRjMTEuMDYtMTYuNjIyIDkuMS0zNy4zNjUtNC4zNy00Ni4zMzEtMTMuNDctOC45NjctMzMuMzQtMi43NjEtNDQuNCAxMy44Ni0xMS4wNSAxNi42MjItOS4wOSAzNy4zNjUgNC4zNyA0Ni4zMzEgMTMuNDcgOC45NjcgMzMuMzUgMi43NjEgNDQuNC0xMy44NloiLz48L3N2Zz4K"},66828:function(M,i,e){e.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBkPSJNMTcuODUgMTQuMjI3Yy0uMTA2LjMwNy0uMjE3LjYtLjMzNS44ODFhMTAuMzM4IDEwLjMzOCAwIDAgMS0xLjAyMiAxLjgzNmMtLjUzNi43NjYtLjk3NiAxLjI5Ni0xLjMxNSAxLjU5LS41MjUuNDgzLTEuMDg4LjczMS0xLjY5MS43NDQtLjQzMyAwLS45NTQtLjEyMy0xLjU2Mi0uMzcyLS42MDktLjI0OS0xLjE2OS0uMzcyLTEuNjgxLS4zNzItLjUzNyAwLTEuMTEzLjEyMy0xLjcyOS4zNzItLjYxNy4yNDktMS4xMTQuMzgtMS40OTQuMzkyLS41NzguMDI1LTEuMTU0LS4yMjktMS43MjktLjc2NC0uMzY3LS4zMi0uODI2LS44NjktMS4zNzYtMS42NDYtLjU5LS44My0xLjA3NS0xLjc5My0xLjQ1NS0yLjg5MS0uNDA3LTEuMTg1LS42MTEtMi4zMzMtLjYxMS0zLjQ0NCAwLTEuMjczLjI3NS0yLjM3MS44MjYtMy4yOTFhNC44NDYgNC44NDYgMCAwIDEgMS43My0xLjc1IDQuNjU0IDQuNjU0IDAgMCAxIDIuMzM5LS42NmMuNDU5IDAgMS4wNjEuMTQyIDEuODA5LjQyMS43NDYuMjggMS4yMjUuNDIyIDEuNDM1LjQyMi4xNTcgMCAuNjg5LS4xNjYgMS41OTEtLjQ5Ny44NTMtLjMwNyAxLjU3My0uNDM0IDIuMTYzLS4zODQgMS41OTguMTI5IDIuNzk4Ljc1OSAzLjU5NyAxLjg5NC0xLjQyOS44NjYtMi4xMzYgMi4wNzktMi4xMjIgMy42MzUuMDEzIDEuMjEyLjQ1MiAyLjIyMSAxLjMxNiAzLjAyMi4zOTIuMzcxLjgzLjY1OCAxLjMxNi44NjJ6TTEzLjgzLjMwNWMuMDEzLjEyNy4wMTkuMjU0LjAxOS4zOCAwIC45NS0uMzQ3IDEuODM3LTEuMDM4IDIuNjU4LS44MzUuOTc2LTEuODQ1IDEuNTQtMi45NCAxLjQ1MWEyLjk1IDIuOTUgMCAwIDEtLjAyMi0uMzZjMC0uOTEyLjM5Ny0xLjg4OCAxLjEwMi0yLjY4Ni4zNTItLjQwNC44LS43NCAxLjM0Mi0xLjAwOC41NDItLjI2NCAxLjA1NS0uNDEgMS41MzctLjQzNXoiLz48L3N2Zz4K"},29234:function(M,i,e){e.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDU2IiBoZWlnaHQ9IjQ1NiIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0NTYiIGhlaWdodD0iNDU2IiBmaWxsPSIjNTEyQkQ0Ii8+CjxwYXRoIGQ9Ik04MS4yNzM4IDI5MS4zMzNDNzguMDQ5NiAyOTEuMzMzIDc1LjMwOSAyOTAuMjU5IDczLjA1MiAyODguMTFDNzAuNzk1IDI4NS45MDYgNjkuNjY2NSAyODMuMjg5IDY5LjY2NjUgMjgwLjI1OUM2OS42NjY1IDI3Ny4xNzMgNzAuNzk1IDI3NC41MjkgNzMuMDUyIDI3Mi4zMjVDNzUuMzA5IDI3MC4xMjEgNzguMDQ5NiAyNjkuMDE5IDgxLjI3MzggMjY5LjAxOUM4NC41NTE4IDI2OS4wMTkgODcuMzE5MyAyNzAuMTIxIDg5LjU3NjMgMjcyLjMyNUM5MS44ODcgMjc0LjUyOSA5My4wNDI0IDI3Ny4xNzMgOTMuMDQyNCAyODAuMjU5QzkzLjA0MjQgMjgzLjI4OSA5MS44ODcgMjg1LjkwNiA4OS41NzYzIDI4OC4xMUM4Ny4zMTkzIDI5MC4yNTkgODQuNTUxOCAyOTEuMzMzIDgxLjI3MzggMjkxLjMzM1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMTAuMTY3IDI4OS41MTVIMTg5LjIwOUwxMzMuOTk0IDIwMi40MDZDMTMyLjU5NyAyMDAuMjAyIDEzMS40NDEgMTk3LjkxNSAxMzAuNTI4IDE5NS41NDZIMTMwLjA0NEMxMzAuNDc0IDE5OC4wODEgMTMwLjY4OSAyMDMuNTA4IDEzMC42ODkgMjExLjgyN1YyODkuNTE1SDExMi4xNDlWMTcxSDEzNC40NzdMMTg3LjgzOSAyNTYuMDQzQzE5MC4wOTYgMjU5LjU3IDE5MS41NDcgMjYxLjk5NCAxOTIuMTkyIDI2My4zMTZIMTkyLjUxNEMxOTEuOTc3IDI2MC4xNzYgMTkxLjcwOCAyNTQuODU5IDE5MS43MDggMjQ3LjM2NVYxNzFIMjEwLjE2N1YyODkuNTE1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMwMC40NDkgMjg5LjUxNUgyMzUuNTYxVjE3MUgyOTcuODdWMTg3LjY5NUgyNTQuNzQ2VjIyMS4yNDlIMjk0LjQ4NVYyMzcuODYxSDI1NC43NDZWMjcyLjkwM0gzMDAuNDQ5VjI4OS41MTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzkyLjY2NyAxODcuNjk1SDM1OS40NTdWMjg5LjUxNUgzNDAuMjcyVjE4Ny42OTVIMzA3LjE0M1YxNzFIMzkyLjY2N1YxODcuNjk1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},55549:function(M,i,e){e.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNODYuNzYgMjU1YTkuODkgOS44OSAwIDAgMCA0Ljg3LTEuMjkgOS44MiA5LjgyIDAgMCAwIDMuNjUtMTMuNDNjLTE2LjQ2LTI4LjU2LTE3LjgxLTUyLjEyLTcuNDUtNzAgMTQuMjYtMjQuNTcgNTMuNjEtMzMuNjUgMTA1LjI3LTI0LjI5YTkuODYgOS44NiAwIDAgMCAxMS40NS03LjkgOS44NCA5Ljg0IDAgMCAwLTcuOTMtMTEuNDRjLTI5LjE5LTUuMjgtNTYtNS4xOC03Ny4zOS4zLTIyLjMgNS43MS0zOSAxNy4yOC00OC40NSAzMy40OC0xNCAyNC4xOS0xMi43IDU0LjczIDcuNDIgODkuNjJhOS44NSA5Ljg1IDAgMCAwIDguNTYgNC45NVpNMzYxLjYxIDE0My43M2MzMi4yNC40MiA1Mi42MSA5LjMxIDYyLjc5IDI2Ljg2IDE0LjIxIDI0LjQ4IDIuNTIgNjIuODEtMzEuMjcgMTAyLjUyYTkuODIgOS44MiAwIDAgMCA3LjUxIDE2LjE4IDkuODggOS44OCAwIDAgMCA3LjUyLTMuNDZjMTkuMTItMjIuNDcgMzIuMzUtNDUuNTQgMzguMjUtNjYuNzEgNi4xNC0yMiA0LjQzLTQyLjIxLTUtNTguMzgtMTMuOC0yMy43OC00MC4xMy0zNi4xNS03OS41OS0zNi42N2gtLjE0YTkuODMgOS44MyAwIDAgMC0uMTIgMTkuNjZaTTMyNi40NyA0MTQuODlhOS44OCA5Ljg4IDAgMCAwLTEzLjUgMy4zNWMtMTYuNDEgMjcuMTUtMzYuNTcgNDIuMS01Ni43NyA0Mi4xLTI4LjQ5IDAtNTYtMjkuMzEtNzMuNzMtNzguNDJhOS44NyA5Ljg3IDAgMCAwLTEyLjU5LTUuOTIgOS44MyA5LjgzIDAgMCAwLTYgMTIuNThjMTAgMjcuNzcgMjMuNDcgNTAuNzUgMzkgNjYuNDYgMTYuMTEgMTYuMzQgMzQuNTUgMjUgNTMuMzIgMjUgMjcuMzggMCA1My41NC0xOC4zMyA3My42NS01MS42MWE5LjgxIDkuODEgMCAwIDAtMy4zOC0xMy41Wk00MzEuNyAzMzguNTRhMzIuMTQgMzIuMTQgMCAwIDAtMjkuOSA0NC4zM2MtNDEuOCAxOS41LTExOS44IDQuNzktMTkxLjg3LTM2LjYyLTMyLjkxLTE4LjktNjIuMTYtNDEuODYtODQuNi02Ni4zOWE5LjkgOS45IDAgMCAwLTEzLjkxLS42NSA5LjggOS44IDAgMCAwLS42NSAxMy45YzIzLjc5IDI2IDU0LjY4IDUwLjI4IDg5LjMzIDcwLjE4IDQwLjI4IDIzLjEzIDgyLjI3IDM4LjYzIDEyMS40MyA0NC44MWEyMjUuNTQgMjI1LjU0IDAgMCAwIDM1IDIuOTFjMjMuMTIgMCA0My00LjMgNTguNTEtMTIuNzlhMzIuMiAzMi4yIDAgMSAwIDE2LjctNTkuNjhabTAgNDQuNjZhMTIuNiAxMi42IDAgMCAxLTcuODItMi43MiAxMCAxMCAwIDAgMC0yLjItMi4yMSAxMi42MSAxMi42MSAwIDEgMSAxMCA0LjkzWiIvPjxwYXRoIGQ9Ik04Mi4wOSAzMzguNTljLjU3LTIxLjI2IDEyLjQxLTQ3IDMzLjY4LTczLjE2IDIzLjE5LTI4LjQ1IDU2LjY5LTU2IDk0LjM0LTc3LjY1IDMzLjI1LTE5LjEgNjUuMi0zMS45IDk4LjA3LTM4LjkxYTkuODMgOS44MyAwIDEgMC00LjEyLTE5LjIyYy0zNC44NSA3LjQzLTY4Ljc4IDIxLTEwMy43OSA0MS4wOUMxMTYuMDkgMjE5LjA5IDU5LjkgMjg5Ljg4IDYyLjQ2IDM0My45YTMyLjMyIDMyLjMyIDAgMSAwIDE5LjYzLTUuMzFaTTgwLjMgMzgzLjJhMTIuNSAxMi41IDAgMSAxIDEyLjU5LTEyLjUgMTIuNTYgMTIuNTYgMCAwIDEtMTIuNTkgMTIuNVoiLz48cGF0aCBkPSJNMjU2LjIgOTYuMzJhMzIuMjMgMzIuMjMgMCAwIDAgMjYuNTMtMTMuODFjMTcuODkgMTEuNjkgMzQgMzUgNDUuODEgNjYuMTIgMTMgMzQuMzkgMTkuODQgNzUuMzggMTkuODQgMTE4LjU0IDAgMzcuMTgtNS4xOSA3Mi4zNS0xNSAxMDMuNmE5LjcyIDkuNzIgMCAwIDAgLjY2IDcuNDkgOS44MiA5LjgyIDAgMCAwIDUuOCA0Ljg0IDkuODkgOS44OSAwIDAgMCAxMi4zNC02LjQ0YzEwLjQyLTMzLjE0IDE1LjkzLTcwLjM0IDE1LjkzLTEwOS40OSAwLTQ3LjE3LTcuNzctOTEuNzctMjIuNDctMTI5LTE0LjQxLTM2LjQ4LTM0LjEzLTYyLjQtNTcuMTQtNzUuMTZhMzIuMyAzMi4zIDAgMSAwLTMyLjMgMzMuMzFabTAtNDQuNjZhMTIuNSAxMi41IDAgMSAxLTEyLjU5IDEyLjUgMTIuNTYgMTIuNTYgMCAwIDEgMTIuNTktMTIuNVpNMjUxIDI0My4zNmEyNC4zNSAyNC4zNSAwIDAgMCA1LjE2IDQ4LjE2IDI0LjY4IDI0LjY4IDAgMCAwIDUuMTYtLjU1QTI0LjM2IDI0LjM2IDAgMSAwIDI1MSAyNDMuMzZaIi8+PC9zdmc+Cg=="},56107:function(M,i,e){e.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzcxLjQzIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudCIgY3g9IjU2NDkuNzciIGN5PSI0MzE5LjQxIiByPSIxODE3LjcyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC4yNSAwIDAgLjI1IC0xNDA0IC0xMDU0LjUzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjYyNTQuMSIgeDI9IjY0MjQuMzQiIHkxPSI1NTc2LjU2IiB5Mj0iNTQwNi4zMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguMjUgMCAwIC4yNSAtMTQwNCAtMTA1NC41MykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxYTIzN2UiIHN0b3Atb3BhY2l0eT0iLjQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxYTIzN2UiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Im0zMDAgMTcxLjQzLTEwMCAxMDAgMTAwIDEwMEgxODUuNzJsLTQyLjg2LTQyLjg2LTU3LjE1LTU3LjE1IDEwMC0xMDBaTTE4NS43MiAwIDAgMTg1LjcybDU3LjE1IDU3LjE1TDMwMCAwWiIvPjwvY2xpcFBhdGg+PHN0eWxlPi5jbHMtMntjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpfS5jbHMtNHtmaWxsOiM1NGM1Zjh9PC9zdHlsZT48L2RlZnM+PGcgY2xhc3M9ImNscy0yIj48cGF0aCBkPSJNMzAwIDE3MS40M0gxODUuNzJMODUuNzMgMjcxLjQ0bDU3LjEyIDU3LjEzTDMwMCAxNzEuNDN6IiBjbGFzcz0iY2xzLTQiLz48L2c+PGcgY2xhc3M9ImNscy0yIj48cGF0aCBkPSJNNTcuMTUgMjQyLjg3IDAgMTg1LjcyIDE4NS43MiAwSDMwMEw1Ny4xNSAyNDIuODd6IiBjbGFzcz0iY2xzLTQiLz48L2c+PHBhdGggZmlsbD0iIzAxNTc5YiIgZD0ibTE0Mi44NSAzMjguNTcgNDIuODcgNDIuODdIMzAwbC05OS45OS0xMDAtNTcuMTYgNTcuMTN6IiBjbGFzcz0iY2xzLTIiLz48cGF0aCBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiIGQ9Im0xNDIuODUgMzI4LjU3IDg0Ljc2LTI5LjMzLTI3LjYtMjcuOC01Ny4xNiA1Ny4xM3oiIGNsYXNzPSJjbHMtMiIvPjxwYXRoIGZpbGw9IiMyOWI2ZjYiIGQ9Im04NS43MTYgMjcxLjQ0IDU3LjE0MS01Ny4xNDJMMjAwIDI3MS40NGwtNTcuMTQyIDU3LjE0MXoiIGNsYXNzPSJjbHMtMiIvPjxwYXRoIGZpbGw9InVybCgjcmFkaWFsLWdyYWRpZW50KSIgZD0ibTMwMCAxNzEuNDMtMTAwIDEwMCAxMDAgMTAwSDE4NS43MmwtNDIuODYtNDIuODYtNTcuMTUtNTcuMTUgMTAwLTEwMFpNMTg1LjcyIDAgMCAxODUuNzJsNTcuMTUgNTcuMTVMMzAwIDBaIi8+PC9zdmc+Cg=="},54300:function(M,i,e){e.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzIgMjMgMjAuNDYzIj48Y2lyY2xlIHI9IjIuMDUiIGZpbGw9IiM2MWRhZmIiLz48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM2MWRhZmIiPjxlbGxpcHNlIHJ4PSIxMSIgcnk9IjQuMiIvPjxlbGxpcHNlIHJ4PSIxMSIgcnk9IjQuMiIgdHJhbnNmb3JtPSJyb3RhdGUoNjApIi8+PGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+PC9nPjwvc3ZnPgo="},50237:function(M,i,e){e.d(i,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBmaWxsPSIjODNDQkZGIiBkPSJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnptNi45MyA2aC0yLjk1YTE1LjY1IDE1LjY1IDAgMCAwLTEuMzgtMy41NkE4LjAzIDguMDMgMCAwIDEgMTguOTIgOHpNMTIgNC4wNGMuODMgMS4yIDEuNDggMi41MyAxLjkxIDMuOTZoLTMuODJjLjQzLTEuNDMgMS4wOC0yLjc2IDEuOTEtMy45NnpNNC4yNiAxNEM0LjEgMTMuMzYgNCAxMi42OSA0IDEycy4xLTEuMzYuMjYtMmgzLjM4Yy0uMDguNjYtLjE0IDEuMzItLjE0IDJzLjA2IDEuMzQuMTQgMkg0LjI2em0uODIgMmgyLjk1Yy4zMiAxLjI1Ljc4IDIuNDUgMS4zOCAzLjU2QTcuOTg3IDcuOTg3IDAgMCAxIDUuMDggMTZ6bTIuOTUtOEg1LjA4YTcuOTg3IDcuOTg3IDAgMCAxIDQuMzMtMy41NkExNS42NSAxNS42NSAwIDAgMCA4LjAzIDh6TTEyIDE5Ljk2Yy0uODMtMS4yLTEuNDgtMi41My0xLjkxLTMuOTZoMy44MmMtLjQzIDEuNDMtMS4wOCAyLjc2LTEuOTEgMy45NnpNMTQuMzQgMTRIOS42NmMtLjA5LS42Ni0uMTYtMS4zMi0uMTYtMnMuMDctMS4zNS4xNi0yaDQuNjhjLjA5LjY1LjE2IDEuMzIuMTYgMnMtLjA3IDEuMzQtLjE2IDJ6bS4yNSA1LjU2Yy42LTEuMTEgMS4wNi0yLjMxIDEuMzgtMy41NmgyLjk1YTguMDMgOC4wMyAwIDAgMS00LjMzIDMuNTZ6TTE2LjM2IDE0Yy4wOC0uNjYuMTQtMS4zMi4xNC0ycy0uMDYtMS4zNC0uMTQtMmgzLjM4Yy4xNi42NC4yNiAxLjMxLjI2IDJzLS4xIDEuMzYtLjI2IDJoLTMuMzh6Ii8+PC9zdmc+Cg=="},59372:function(M,i,e){e.d(i,{w:()=>c,q:()=>I});var t=e("85893");e("67294");var j=e("67026");function I(M){let{className:i,large:e,children:I,...c}=M;return(0,t.jsx)("div",{className:(0,j.Z)("iconGridButton_fiby",{large_D8mm:e},i),...c,children:I})}function c(M){let{className:i,...e}=M;return(0,t.jsx)("div",{className:(0,j.Z)("iconGrid_Z3h7",i),...e})}},50065:function(M,i,e){e.d(i,{Z:function(){return N},a:function(){return c}});var t=e(67294);let j={},I=t.createContext(j);function c(M){let i=t.useContext(I);return t.useMemo(function(){return"function"==typeof M?M(i):{...i,...M}},[i,M])}function N(M){let i;return i=M.disableParentContext?"function"==typeof M.components?M.components(j):M.components||j:c(M.components),t.createElement(I.Provider,{value:i},M.children)}}}]);