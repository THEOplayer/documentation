"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["71874"],{12069:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"hardware-encoders/using-magewell-encoder","title":"Magewell","description":"Magewell is a leading encoder manufacturer that supports connecting to the Dolby.io Real-time Streaming Service for broadcasting real-time streams. This guide outlines a number of different options for broadcasting streams from a Magewell device to the Dolby.io servers.","source":"@site/millicast/hardware-encoders/using-magewell-encoder.md","sourceDirName":"hardware-encoders","slug":"/using-magewell-encoder","permalink":"/documentation/pr-preview/pr-254/millicast/using-magewell-encoder","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/hardware-encoders/using-magewell-encoder.md","tags":[],"version":"current","frontMatter":{"title":"Magewell","slug":"/using-magewell-encoder"},"sidebar":"millicast","previous":{"title":"Haivision","permalink":"/documentation/pr-preview/pr-254/millicast/using-haivision-kb-encoder"},"next":{"title":"Osprey","permalink":"/documentation/pr-preview/pr-254/millicast/using-osprey-talon-whip-hardware-encoder"}}'),i=n("85893"),o=n("50065");let a={title:"Magewell",slug:"/using-magewell-encoder"},s=void 0,c={},d=[{value:"Using the Ultra Encode to broadcast RTMP",id:"using-the-ultra-encode-to-broadcast-rtmp",level:2},{value:"Using the Ultra Encode to broadcast SRT",id:"using-the-ultra-encode-to-broadcast-srt",level:2}];function l(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.magewell.com/",children:"Magewell"})," is a leading encoder manufacturer that supports connecting to the Dolby.io Real-time Streaming Service for broadcasting real-time streams. This guide outlines a number of different options for broadcasting streams from a Magewell device to the Dolby.io servers."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"\uD83D\uDC4D Getting Started"}),"\n",(0,i.jsxs)(t.p,{children:["If you haven't already, begin by following the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/getting-started",children:"Getting Started"})," tutorial to start your first broadcast. You'll need your ",(0,i.jsx)(t.em,{children:"publish token"})," and ",(0,i.jsx)(t.em,{children:"stream name"})," for the steps described below."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["See the official ",(0,i.jsx)(t.a,{href:"https://www.magewell.com/support-contacts",children:"Magewell site"})," for documentation, installation instructions, and additional support."]}),"\n",(0,i.jsx)(t.h2,{id:"using-the-ultra-encode-to-broadcast-rtmp",children:"Using the Ultra Encode to broadcast RTMP"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://www.magewell.com/ultra-encode",children:"Magewell Ultra Encode"})," supports broadcasting RTMP streams, which can be ingested by the Dolby.io Real-time Streaming service."]}),"\n",(0,i.jsxs)(t.p,{children:["To begin, first power on your Ultra Encode, connect it to the internet (Ethernet or WiFi), and connect your video capture device. Once connected, ",(0,i.jsx)(t.a,{href:"https://www.magewell.com/files/documents/User_Manual/ultra_encode_user_manual_en.pdf",children:"log in"})," to the Ultra Encode dashboard and navigate to the ",(0,i.jsx)(t.code,{children:"Streaming Server"})," tab on the left side panel. Inside of ",(0,i.jsx)(t.code,{children:"Streaming Server"})," click the ",(0,i.jsx)(t.code,{children:"+ Add Server"})," button and select ",(0,i.jsx)(t.code,{children:"RTMP"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(67581).Z+"",width:"3209",height:"1748"})}),"\n",(0,i.jsxs)(t.p,{children:["Next, navigate to your ",(0,i.jsx)(t.a,{href:"https://dashboard.dolby.io/signin",children:"Dolby.io Dashboard"})," and ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/using-rtmp-and-rtmps#how-to-find-your-rtmp-publish-url",children:"gather your RTMP token credentials"}),". Add the ",(0,i.jsx)(t.code,{children:"RTMP publish path"})," from your Dolby.io Dashboard to the ",(0,i.jsx)(t.code,{children:"URL"}),", and add your ",(0,i.jsx)(t.code,{children:"RTMP Publish Stream Name"}),", also from the Dolby.io dashboard, to the ",(0,i.jsx)(t.code,{children:"Stream key"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Finally, select which network you'd like the encoder to use to connect, and save the settings."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(60500).Z+"",width:"2557",height:"1707"})}),"\n",(0,i.jsxs)(t.p,{children:["Once saved, make sure the stream is activated by toggling the server switch on the ",(0,i.jsx)(t.code,{children:"Streaming Server"})," page."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(48327).Z+"",width:"2227",height:"297"})}),"\n",(0,i.jsx)(t.p,{children:"With the stream enabled, you can navigate back to the main Dashboard page of the encoder and see your stream connect."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(28766).Z+"",width:"3546",height:"1689"})}),"\n",(0,i.jsx)(t.h2,{id:"using-the-ultra-encode-to-broadcast-srt",children:"Using the Ultra Encode to broadcast SRT"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://www.magewell.com/ultra-encode",children:"Magewell Ultra Encode"})," supports broadcasting SRT streams, which can be ingested by the Dolby.io Real-time Streaming service."]}),"\n",(0,i.jsxs)(t.p,{children:["To begin, first power on your Ultra Encode, connect it to the internet (Ethernet or WiFi), and connect your video capture device. Once connected, ",(0,i.jsx)(t.a,{href:"https://www.magewell.com/files/documents/User_Manual/ultra_encode_user_manual_en.pdf",children:"log in"})," to the Ultra Encode dashboard and navigate to the ",(0,i.jsx)(t.code,{children:"Streaming Server"})," tab on the left side panel. Inside of ",(0,i.jsx)(t.code,{children:"Streaming Server"})," click the ",(0,i.jsx)(t.code,{children:"+ Add Server"})," button and select ",(0,i.jsx)(t.code,{children:"SRT Caller"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(22719).Z+"",width:"3709",height:"1751"})}),"\n",(0,i.jsxs)(t.p,{children:["Next, navigate to your ",(0,i.jsx)(t.a,{href:"https://dashboard.dolby.io/signin",children:"Dolby.io Dashboard"})," and ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/using-srt",children:"gather your SRT token credentials"}),". Add the ",(0,i.jsx)(t.code,{children:"SRT publish path"})," from your Dolby.io Dashboard to the ",(0,i.jsx)(t.code,{children:"Address"}),", set the ",(0,i.jsx)(t.code,{children:"Port"})," to ",(0,i.jsx)(t.code,{children:"10000"}),", and add your ",(0,i.jsx)(t.code,{children:"SRT Stream ID"}),", also from the Dolby.io dashboard, to the ",(0,i.jsx)(t.code,{children:"Stream ID"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(88690).Z+"",width:"2963",height:"1773"})}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, if you have ",(0,i.jsx)(t.code,{children:"Passphrase encryption"})," enabled on the Dolby.io Dashboard, you can enable it on the encoder side by setting ",(0,i.jsx)(t.code,{children:"Encryption"})," to ",(0,i.jsx)(t.code,{children:"AES-128"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Once saved, make sure the stream is activated by toggling the server switch on the ",(0,i.jsx)(t.code,{children:"Streaming Server"})," page."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(44571).Z+"",width:"2420",height:"692"})}),"\n",(0,i.jsx)(t.p,{children:"With the stream enabled, you can navigate back to the main Dashboard page of the encoder and see your stream connect."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(90854).Z+"",width:"2449",height:"1766"})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28766:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/connect-magewell-stream-6f042ec2e1e748dd69d16b08657f5f17.png"},48327:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/connect-magewell-fea18c6839cad94ce71acda788edb8a2.png"},90854:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/connected-30ca62018c2f978530e3e48a3774015d.png"},67581:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/rmtp-magewell-e5aaf33fc3cb7e83f23002fcf6d6e113.png"},60500:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/rtmp-dolby-magewell-8fd36728ca0bd1f2b87910027e3ea64d.png"},22719:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/srt-caller-c2cc2cd8eb6e389e4e35fa2ece192ac3.png"},88690:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/srt-setup-7e59e3062a00bde3968b5917b812dbde.png"},44571:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/srt-toggle-fb6cc10d75cf8f11107216107f2322df.png"},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var r=n(67294);let i={},o=r.createContext(i);function a(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);