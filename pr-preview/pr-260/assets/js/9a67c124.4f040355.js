"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["53445"],{66036:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"software-encoders/using-whip-with-flowcaster","title":"Drastic Technologies","description":"Drastic Technologies\' FlowCaster is a tool that enables cloud-based media workflows. FlowCaster makes it simple to use Dolby.io Real-time Streaming and the WHIP (WebRTC HTTP Ingest Protocol) with no additional software or hardware requirements.","source":"@site/millicast/software-encoders/using-whip-with-flowcaster.md","sourceDirName":"software-encoders","slug":"/using-whip-with-flowcaster","permalink":"/documentation/pr-preview/pr-260/millicast/using-whip-with-flowcaster","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/software-encoders/using-whip-with-flowcaster.md","tags":[],"version":"current","frontMatter":{"title":"Drastic Technologies","slug":"/using-whip-with-flowcaster"},"sidebar":"millicast","previous":{"title":"OBS","permalink":"/documentation/pr-preview/pr-260/millicast/using-obs"},"next":{"title":"Gstreamer","permalink":"/documentation/pr-preview/pr-260/millicast/using-whip-with-gstreamer"}}'),n=i("85893"),o=i("50065");let r={title:"Drastic Technologies",slug:"/using-whip-with-flowcaster"},a="FlowCaster",l={},c=[{value:"How-to use FlowCaster with WHIP",id:"how-to-use-flowcaster-with-whip",level:2},{value:"Demonstration video",id:"demonstration-video",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Drastic Technologies' ",(0,n.jsx)(t.strong,{children:"FlowCaster"})," is a tool that enables cloud-based media workflows. FlowCaster makes it simple to use Dolby.io Real-time Streaming and the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/webrtc-whip",children:"WHIP (WebRTC HTTP Ingest Protocol)"})," with no additional software or hardware requirements."]}),"\n",(0,n.jsx)(t.p,{children:"The WebRTC-HTTP ingest protocol (WHIP) uses an HTTP POST request to perform a single shot SDP offer/answer so an ICE/DTLS session can be established between the Flowcaster encoder/media producer (WHIP client) and the Dolby.io Real-time Streaming broadcasting ingestion endpoint (media server)."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\uD83D\uDC4D Getting Started"}),"\n",(0,n.jsxs)(t.p,{children:["If you haven't already, begin by following the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/getting-started",children:"Getting Started"})," tutorial to create a Dolby.io application and start your first broadcast. You'll need your ",(0,n.jsx)(t.em,{children:"publish token"})," and ",(0,n.jsx)(t.em,{children:"stream name"})," for the steps described below."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["See the official ",(0,n.jsx)(t.a,{href:"https://www.drastic.tv/productsmenu-56/networkstreaminglist/flowcaster",children:"FlowCaster"})," site for documentation, installation instructions, and additional support."]}),"\n",(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"flowcaster",children:"FlowCaster"})}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-flowcaster-with-whip",children:"How-to use FlowCaster with WHIP"}),"\n",(0,n.jsxs)(t.p,{children:["To start off, download the ",(0,n.jsx)(t.a,{href:"https://www.drastic.tv/productsmenu-56/networkstreaminglist/flowcaster",children:"latest version of FlowCaster"}),". If you haven't done it yet, ",(0,n.jsx)(t.a,{href:"https://dashboard.dolby.io/signup/",children:"create a Dolby.io account"})," in order to access the stream token information needed."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(60602).Z+"",width:"1920",height:"1080"})}),"\n",(0,n.jsxs)(t.p,{children:["Once inside the streaming dashboard,",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/managing-your-tokens",children:"create a token"})," in your Dolby.io dashboard. You will need the stream name and token for the stream label."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(76663).Z+"",width:"3024",height:"1604"})}),"\n",(0,n.jsx)(t.p,{children:"Open FlowCaster and click on the Config tab. Update the following settings as shown."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(37498).Z+"",width:"622",height:"612"})}),"\n",(0,n.jsxs)(t.p,{children:["Settings can be adjusted as needed. For this simple test, we will select the input as our desktop.",(0,n.jsx)(t.br,{}),"\n","FlowCaster can be used with many different input devices such as NIC IP video, ",(0,n.jsx)(t.a,{href:"https://www.aja.com/family/streaming",children:"AJA encoders"}),", ",(0,n.jsx)(t.a,{href:"https://www.blackmagicdesign.com/products/blackmagicwebpresenter",children:"BlackMagic"}),", Blue Fish, Ultrascope, Matrox, Direct Show, and NDI."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(5622).Z+"",width:"613",height:"633"})}),"\n",(0,n.jsxs)(t.p,{children:["Select Enable on FlowCaster and open the Millicast viewer link:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"<https://viewer.millicast.com/?streamId=TmJiwk/kwky3g6g>"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(99887).Z+"",width:"1273",height:"633"})}),"\n",(0,n.jsx)(t.p,{children:"In this image, you can see the Flow tab on the left side of the screen with the local version of the stream and on the Millicast viewer stream on the right with the media statistics window open. The RTT (round trip time) is 22ms in this example."}),"\n",(0,n.jsx)(t.p,{children:"FlowCaster is a perfect tool for video and audio professionals to use with their favorite NLEs and media editing tools, including:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.drastic.tv/support-59/supporttipstechnical/102-using-flowcaster-with-avid-mediacomposer",children:"FlowCaster with Avid Media Composer"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.drastic.tv/support-59/supporttipstechnical/100-using-flowcaster-with-adobe-premiere-after-effects",children:"FlowCaster with Adobe (Premiere, After Effects)"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\uD83D\uDEA7 FlowCaster's Mac Version"}),"\n",(0,n.jsxs)(t.p,{children:["The newest version of the MacOS doesn't support H264/AV1C, therefore, implementing WHIP as the transmit type is not possible. However, it is possible to broadcast low-delay ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/using-srt",children:"SRT"})," or ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/using-rtmp-and-rtmps",children:"RTMP"})," streams which are also supported by Dolby.io."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"demonstration-video",children:"Demonstration video"}),"\n",(0,n.jsx)(t.p,{children:"Below is a video showing the complete workflow to connect Flowcaster to the Dolby.io Real-time Streaming service using WebRTC and WHIP:"}),"\n",(0,n.jsx)("div",{className:"youtube-container",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LHwiQPJo0QI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},37498:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/FlowCaster_Whip-090edb3e0df223475c1246b79c239684.png"},5622:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/FlowCaster_Whip_2-e40aafe65d3f419d90e63670015f6f69.png"},99887:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/FlowCaster_Whip_3-56e7d424f54d0848af21bbbfd74fa5a8.png"},60602:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/a51bd5e-Flowcaster-Millicast-9e16fac222a113c92030a20709feb6cc.png"},76663:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/flowcaster-whip-token-53d6a9dadc33ab08fe99e6a94f315abc.png"},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return r}});var s=i(67294);let n={},o=s.createContext(n);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);