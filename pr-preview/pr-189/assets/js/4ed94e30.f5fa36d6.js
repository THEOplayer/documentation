"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["72241"],{48752:function(e,t,i){i.r(t),i.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>o,assets:()=>l,toc:()=>d,contentTitle:()=>r});var o=JSON.parse('{"id":"how-to-guides/create-backdrop-layout","title":"Create backdrop images","description":"A backdrop is an image that is shown along with the player during an ad.","source":"@site/theoads/how-to-guides/create-backdrop-layout.md","sourceDirName":"how-to-guides","slug":"/how-to-guides/create-backdrop-layout","permalink":"/documentation/pr-preview/pr-189/theoads/how-to-guides/create-backdrop-layout","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoads/how-to-guides/create-backdrop-layout.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"theoads","previous":{"title":"Workflow integration","permalink":"/documentation/pr-preview/pr-189/theoads/how-to-guides/workflow-integration"},"next":{"title":"API references","permalink":"/documentation/pr-preview/pr-189/theoads/api"}}'),n=i("85893"),a=i("50065");let s={sidebar_position:7},r="Create backdrop images",l={},d=[{value:"Backdrop Layout Options",id:"backdrop-layout-options",level:2},{value:"1. Double Box Layout",id:"1-double-box-layout",level:3},{value:"Example Template",id:"example-template",level:4},{value:"2. L-Shape Layout",id:"2-l-shape-layout",level:3},{value:"Example Template",id:"example-template-1",level:4},{value:"Considerations and Limitations",id:"considerations-and-limitations",level:2}];function c(e){let t={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"create-backdrop-images",children:"Create backdrop images"})}),"\n",(0,n.jsx)(t.p,{children:"A backdrop is an image that is shown along with the player during an ad.\nThis image is intended to provide some additional information about an advertisement."}),"\n",(0,n.jsx)(t.h2,{id:"backdrop-layout-options",children:"Backdrop Layout Options"}),"\n",(0,n.jsx)(t.p,{children:"There are two primary backdrop layout options, each serving a specific purpose in presenting ads effectively:"}),"\n",(0,n.jsx)(t.h3,{id:"1-double-box-layout",children:"1. Double Box Layout"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Double Box"})," layout places the video content and advertisement side by side, allowing viewers to see both elements simultaneously."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Screen Ratio:"})," 16:9 for optimal viewing on widescreen displays."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Border:"})," A fixed 20px border is applied around the video elements, ensuring a clean, defined separation between the content and the ad."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"example-template",children:"Example Template"}),"\n",(0,n.jsx)(t.p,{children:"Below is a template for the Double Box layout tailored for 1080p resolution:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Doublebox Template.png",src:i(53862).Z+"",width:"720",height:"450"})}),"\n",(0,n.jsx)(t.h3,{id:"2-l-shape-layout",children:"2. L-Shape Layout"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"L-Shape"})," layout positions the video player in the top-left corner of the screen, scaling it down to create space for the backdrop image.\nThis configuration allows viewers to see the ad and the backdrop image simultaneously."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Screen Ratio:"})," 16:9, ensuring compatibility with most screens."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Positioning:"})," The player is moved to the top-left corner, with the backdrop image filling the remaining space."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"example-template-1",children:"Example Template"}),"\n",(0,n.jsx)(t.p,{children:"Below is a template for the L-Shape layout:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"L-Shape Template.png",src:i(57371).Z+"",width:"2459",height:"1536"})}),"\n",(0,n.jsx)(t.h2,{id:"considerations-and-limitations",children:"Considerations and Limitations"}),"\n",(0,n.jsx)(t.p,{children:"While both layouts serve distinct purposes, certain limitations should be considered:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Device Compatibility:"})," Some smart TVs may not support the Double Box layout due to the lack of capability to show multiple video streams at the same time. For these devices, the L-Shape layout is a better option, as it displays only one active video stream along with the backdrop image."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Resolution Adaptability:"})," Templates are made for 1080p resolution, but scaling considerations should be taken into account for lower or higher resolutions to maintain the quality and layout proportions."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"File Size and Load Times:"})," To ensure smooth playback and quick loading times, backdrop images should be optimized, especially for mobile and lower-capability devices."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},53862:function(e,t,i){i.d(t,{Z:function(){return o}});let o=i.p+"assets/images/theoads-backdrop-doublebox-template-44839450ee24eb82ced2f055b9f6dead.png"},57371:function(e,t,i){i.d(t,{Z:function(){return o}});let o=i.p+"assets/images/theoads-backdrop-lshape-template-44bfb24bfbcc9c2cd39c8354a4ce61dd.png"},50065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return s}});var o=i(67294);let n={},a=o.createContext(n);function s(e){let t=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);