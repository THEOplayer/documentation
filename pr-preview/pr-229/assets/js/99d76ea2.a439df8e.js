"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["63018"],{82977:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"how-to-guides/ads/introduction","title":"Introduction","description":"The articles in this section describe how to implement common use-cases related to advertisements. These use-cases can range from customizing the UX during advertisements, to detecting ad blockers.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/01-ads/00-introduction.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/introduction","permalink":"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/01-ads/00-introduction.md","tags":[],"version":"v6","sidebarPosition":0,"frontMatter":{},"sidebar":"roku","previous":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/"},"next":{"title":"Adblock detection","permalink":"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/block-detection"}}'),i=n("85893"),r=n("50065");let s={},d="Introduction",a={},l=[{value:"Table of Contents",id:"table-of-contents",level:3}];function c(e){let t={a:"a",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsx)(t.p,{children:"The articles in this section describe how to implement common use-cases related to advertisements. These use-cases can range from customizing the UX during advertisements, to detecting ad blockers."}),"\n",(0,i.jsxs)(t.p,{children:["We recommend starting with ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"How to set up VAST and VMAP ads"}),",\nas this article explains how to set up client-side advertisements."]}),"\n",(0,i.jsxs)(t.p,{children:["Consider reading our ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/knowledge-base/advertisement/user-guide",children:"Advertising User Guide"})," to learn more about advertising and THEOplayer's capabilities."]}),"\n",(0,i.jsx)(t.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Client-side advertisement systems","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"How to set up VAST and VMAP ads"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/google-ima",children:"Google IMA"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/spotx",children:"SpotX"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/freewheel",children:"FreeWheel"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Server-side advertisement systems","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/yospace",children:"Yospace"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/google-dai",children:"Google DAI"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ads",children:"Verizon Media"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/mediatailor",children:"MediaTailor"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Other","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/how-to-subscribe-to-ad-events",children:"How to subscribe to events"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/block-detection",children:"Adblock Detection"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/customizing-the-ad-overlay-text",children:"Customizing the ad overlay text"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/how-to-display-visual-cues",children:"How to display visual cues on the timeline to mark mid-rolls?"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-229/theoplayer/v6/how-to-guides/ads/prebidjs",children:"Prebid.js"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var o=n(67294);let i={},r=o.createContext(i);function s(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);