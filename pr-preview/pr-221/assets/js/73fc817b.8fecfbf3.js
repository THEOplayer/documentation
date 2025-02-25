"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["66880"],{37054:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"guides/vmix","title":"Using vMix with THEOlive","description":"This guide explains to you how to set up vMix correctly so it can be used to stream your content with THEOlive.","source":"@site/theolive/guides/vmix.md","sourceDirName":"guides","slug":"/guides/vmix","permalink":"/documentation/pr-preview/pr-221/theolive/guides/vmix","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/guides/vmix.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"theolive","previous":{"title":"Using Wirecast with THEOlive","permalink":"/documentation/pr-preview/pr-221/theolive/guides/wirecast"},"next":{"title":"Using Videon VersaStreamer / EdgeCaster with THEOlive","permalink":"/documentation/pr-preview/pr-221/theolive/guides/videon"}}'),s=n("85893"),r=n("50065");let o={sidebar_position:4},a="Using vMix with THEOlive",l={},c=[{value:"1. Set up sources",id:"1-set-up-sources",level:2},{value:"2. Configure stream settings",id:"2-configure-stream-settings",level:2},{value:"3. Start streaming",id:"3-start-streaming",level:2},{value:"4. Start your THEOlive channel",id:"4-start-your-theolive-channel",level:2}];function d(e){let t={a:"a",admonition:"admonition",br:"br",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"using-vmix-with-theolive",children:"Using vMix with THEOlive"})}),"\n",(0,s.jsx)(t.p,{children:"This guide explains to you how to set up vMix correctly so it can be used to stream your content with THEOlive."}),"\n",(0,s.jsx)(t.h2,{id:"1-set-up-sources",children:"1. Set up sources"}),"\n",(0,s.jsxs)(t.p,{children:["Make sure all your sources are set up and in order. As an example, you could add simple colour bars as a source by left-clicking the ",(0,s.jsx)(t.em,{children:"up arrow"})," next to ",(0,s.jsx)(t.em,{children:"Add Input"}),", which you can find at the left bottom of the vMIX screen, and select ",(0,s.jsx)(t.em,{children:"Colour Bars"}),". Similarly, you could add other input e.g. your webcam by selecting ",(0,s.jsx)(t.em,{children:"Camera"})," or a stream by selecting ",(0,s.jsx)(t.em,{children:"Stream/SRT"}),". In order to see these options, you'll have to select ",(0,s.jsx)(t.em,{children:"More"})," in the ",(0,s.jsx)(t.em,{children:"Add Input"})," menu."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"vMix setup example",src:n(23917).Z+"",width:"523",height:"396"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The colour bars input are only an example. You can stream whatever input you like."]}),"\n",(0,s.jsx)(t.admonition,{title:"\uD83D\uDCD8 How to burn in a clock",type:"info",children:(0,s.jsxs)(t.p,{children:["If you want to burn in a clock you can follow the steps documented by vMix. You can create a ",(0,s.jsx)(t.em,{children:"Production clock"})," input and burn it into the colour bars input by configuring ",(0,s.jsx)(t.em,{children:"Multiview"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://www.vmix.com/help23/index.htm?ProductionClocks.html",children:"Production clock documentation"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://www.vmix.com/help23/index.htm?InputSettingsMultiView.html",children:"Multiview documentation"})]})}),"\n",(0,s.jsx)(t.h2,{id:"2-configure-stream-settings",children:"2. Configure stream settings"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Left-click the cogwheel next to ",(0,s.jsx)(t.em,{children:"Stream"})," at the bottom of the vMix screen."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"vMix settings",src:n(80897).Z+"",width:"984",height:"401"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Make sure you set up your settings first before clicking the ",(0,s.jsx)(t.em,{children:"Stream"})," button."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.em,{children:"Streaming Settings"})," select ",(0,s.jsx)(t.em,{children:"Custom RTMP Server"})," as your destination and enter ",(0,s.jsx)(t.em,{children:"your RTMP push URL and Streamkey"})," as follows:"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"vMix streaming settings",src:n(88525).Z+"",width:"695",height:"437"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," You can find your RTMP push URL and streamkey in the THEOlive management console."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Next, choose a set of stream values such as aspect ratio and bitrate from the ",(0,s.jsx)(t.em,{children:"Quality"})," list and click the cogwheel for advanced ",(0,s.jsx)(t.em,{children:"Streaming Quality"})," settings."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"vMix quality settings",src:n(41443).Z+"",width:"696",height:"439"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," If you have the hardware available: it's always a good idea to enable the ",(0,s.jsx)(t.em,{children:"Hardware Ecoder"})," setting."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.em,{children:"Streaming Quality"})," menu you can make some more advanced changes to your stream settings. Please use the settings that are highlighted in yellow in the following image to achieve optimal performance when streaming to THEOlive. You are free to change the ",(0,s.jsx)(t.em,{children:"Video Bit Rates"})," and ",(0,s.jsx)(t.em,{children:"Encode Size"})," settings depending on your use case."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"stream quality settings",src:n(31682).Z+"",width:"747",height:"609"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:*"})," You are free to experiment with your encoding settings but the values shown in this image reflect the encoding setting THEOlive uses on the server side."]}),"\n",(0,s.jsx)(t.admonition,{title:"\uD83D\uDEA7 Frame rate and bandwidth",type:"info",children:(0,s.jsxs)(t.p,{children:["Remember to set the frame rate to the same value as in your THEOlive channel ingest configuration and make sure that your encoder has a stable connection and enough upload bandwidth. See ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-221/theolive/getting-started/stream-configuration",children:"Stream configuration"})," for more details."]})}),"\n",(0,s.jsx)(t.h2,{id:"3-start-streaming",children:"3. Start streaming"}),"\n",(0,s.jsxs)(t.p,{children:["You can now save and exit out of all the ",(0,s.jsx)(t.em,{children:"Streaming Settings"})," menus and click the ",(0,s.jsx)(t.em,{children:"Stream"})," button to start streaming."]}),"\n",(0,s.jsx)(t.h2,{id:"4-start-your-theolive-channel",children:"4. Start your THEOlive channel"}),"\n",(0,s.jsxs)(t.p,{children:["This can be done either through the ",(0,s.jsx)(t.a,{href:"https://developers.theo.live/reference/start-channel",children:"API"})," or via the ",(0,s.jsx)(t.a,{href:"https://console.theo.live/",children:"management console"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},88525:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/38e11d9-vmix-streaming-setting-605f8b4589304e5778ab8ba91d3a0971.PNG"},80897:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/447bd06-vmix1-d2b79e3defef1169daa1d036ae6c1037.png"},41443:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/73abc63-vmix3-013025853d3210ddbcc3052e58e819f1.png"},23917:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/bcb0dde-vmix0-c7bdb87b569cea5336c33c1363b8652f.png"},31682:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/fae9921-streaming-quality-settings-0dd4e8f9c28be862878a8096914337a8.jpg"},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var i=n(67294);let s={},r=i.createContext(s);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);