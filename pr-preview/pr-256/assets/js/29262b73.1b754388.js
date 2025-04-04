"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["64627"],{68418:function(e,t,i){i.r(t),i.d(t,{default:()=>l,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>h,contentTitle:()=>a});var n=JSON.parse('{"id":"how-to-guides/cast/chromecast/debugging","title":"Debugging","description":"This how-to guide describes how to debug a Chromecast Receiver application using the THEOplayer Web SDK.","source":"@site/theoplayer/how-to-guides/03-cast/01-chromecast/02-debugging.md","sourceDirName":"how-to-guides/03-cast/01-chromecast","slug":"/how-to-guides/cast/chromecast/debugging","permalink":"/documentation/pr-preview/pr-256/theoplayer/how-to-guides/cast/chromecast/debugging","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/03-cast/01-chromecast/02-debugging.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"Connecting from custom Sender applications","permalink":"/documentation/pr-preview/pr-256/theoplayer/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications"},"next":{"title":"How to configure a different stream to Chromecast","permalink":"/documentation/pr-preview/pr-256/theoplayer/how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream"}}'),s=i("85893"),o=i("50065");let r={},a="Debugging",c={},h=[{value:"Step-by-step guide",id:"step-by-step-guide",level:2},{value:"Related articles",id:"related-articles",level:2}];function d(e){let t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"debugging",children:"Debugging"})}),"\n",(0,s.jsx)(t.p,{children:"This how-to guide describes how to debug a Chromecast Receiver application using the THEOplayer Web SDK."}),"\n",(0,s.jsx)(t.h2,{id:"step-by-step-guide",children:"Step-by-step guide"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Ensure that you are on the same network as your Chromecast device."}),"\n",(0,s.jsxs)(t.li,{children:["Publish a new device at ",(0,s.jsx)(t.a,{href:"https://cast.google.com/u/1/publish/#/devices",children:"https://cast.google.com/u/1/publish/#/devices"}),' by clicking "ADD NEW DEVICE".\n',(0,s.jsx)(t.img,{alt:"Chromecast debugging 1",src:i(52708).Z+"",title:"Chromecast debugging 1",width:"1396",height:"775"})]}),"\n",(0,s.jsxs)(t.li,{children:['Wait until the status is "Ready For Testing".\n',(0,s.jsx)(t.img,{alt:"Chromecast debugging 2",src:i(22276).Z+"",title:"Chromecast debugging 2",width:"1285",height:"364"})]}),"\n",(0,s.jsx)(t.li,{children:"Find out what the IP-address of your Chromecast device is. (Tip: Use the Google Home app to look this up.)"}),"\n",(0,s.jsx)(t.li,{children:"Go to chrome://inspect and add the IP-address (plus port 9222) of your Chromecast device."}),"\n",(0,s.jsx)(t.li,{children:"Start your Chromecast session."}),"\n",(0,s.jsx)(t.li,{children:"Go to chrome://inspect and wait until your Chromecast device appears in the list."}),"\n",(0,s.jsxs)(t.li,{children:['Press "inspect".\n',(0,s.jsx)(t.img,{alt:"Chromecast debugging 3",src:i(25401).Z+"",title:"Chromecast debugging 3",width:"1084",height:"648"})]}),"\n",(0,s.jsxs)(t.li,{children:["You should now have access to the Chrome Developer Tools of your Chromecast Receiver application. If you are familiar with debugging through Chrome's Developer Tools, you can look into issues, try out new CSS styles and monitor network traffic.\n",(0,s.jsx)(t.img,{alt:"Chromecast debugging 4",src:i(35570).Z+"",title:"Chromecast debugging 4",width:"1581",height:"841"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/theoplayer/how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast",children:"Pass subtitle selection on to Chromecast"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/theoplayer/getting-started/sdks/chromecast/getting-started",children:"Chromecast SDK Setup"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/theoplayer/how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream",children:"How to configure a different stream to Chromecast"})}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},52708:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/chromecast_debugging_1-0040e1d6eeca0a6b5501cef46a031989.png"},22276:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/chromecast_debugging_2-c399ddb9c096aab91c30293a8a9e9f50.png"},25401:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/chromecast_debugging_3-ef34a49f03eb6830f56bfdaf20a04fb5.png"},35570:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/chromecast_debugging_4-17c946d842f3a40de725316bce17a9f7.png"},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return r}});var n=i(67294);let s={},o=n.createContext(s);function r(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);