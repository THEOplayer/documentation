"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["32056"],{11724:function(e,o,n){n.r(o),n.d(o,{default:()=>h,frontMatter:()=>t,metadata:()=>a,assets:()=>d,toc:()=>l,contentTitle:()=>s});var a=JSON.parse('{"id":"faq/page-and-source-domains","title":"Page and Source domains","description":"Page and Source domains prevent unauthorized users from embedding your SDK on their website.","source":"@site/theoplayer_versioned_docs/version-v4/faq/64-page-and-source-domains.md","sourceDirName":"faq","slug":"/faq/page-and-source-domains","permalink":"/documentation/pr-preview/pr-232/theoplayer/v4/faq/page-and-source-domains","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/64-page-and-source-domains.md","tags":[],"version":"v4","sidebarPosition":64,"frontMatter":{},"sidebar":"faq","previous":{"title":"The provided video source is incompatible with the license for this player","permalink":"/documentation/pr-preview/pr-232/theoplayer/v4/faq/the-provided-video-source-is-incompatible-with-the-license-for-this-player"},"next":{"title":"What does the error message \u201CSomething went wrong determining the initial period of the provided MPEG-DASH stream\u201D mean","permalink":"/documentation/pr-preview/pr-232/theoplayer/v4/faq/error-message-initial-period-provided-MPEG-DASH"}}'),i=n("85893"),r=n("50065");let t={},s="Page and Source domains",d={},l=[{value:"Page domains (web only)",id:"page-domains-web-only",level:2},{value:"Source domains",id:"source-domains",level:2},{value:"How to configure Page and Source domains",id:"how-to-configure-page-and-source-domains",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){let o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"page-and-source-domains",children:"Page and Source domains"})}),"\n",(0,i.jsx)(o.p,{children:"Page and Source domains prevent unauthorized users from embedding your SDK on their website."}),"\n",(0,i.jsx)(o.h2,{id:"page-domains-web-only",children:"Page domains (web only)"}),"\n",(0,i.jsxs)(o.p,{children:["Page domains specify on which domains the player can be loaded. Imagine your website has the following domain: ",(0,i.jsx)(o.code,{children:"example.com"}),", you have configured your Page domains and the THEOplayer SDK is installed on your website. When a malicious user copies your SDK and installs it on their domain: ",(0,i.jsx)(o.code,{children:"other.com"}),", the player will throw an error that the license is invalid."]}),"\n",(0,i.jsx)(o.h2,{id:"source-domains",children:"Source domains"}),"\n",(0,i.jsxs)(o.p,{children:["Source domains specify from which domains the player is allowed to play streams. When the Source domains are configured to ",(0,i.jsx)(o.code,{children:"example.com"})," the player will only play streams from this domain. If the player plays a stream from ",(0,i.jsx)(o.code,{children:"other.com"}),", it will throw an error that the license is invalid."]}),"\n",(0,i.jsx)(o.h2,{id:"how-to-configure-page-and-source-domains",children:"How to configure Page and Source domains"}),"\n",(0,i.jsxs)(o.p,{children:["Page and Source domains can be configured in the ",(0,i.jsx)(o.a,{href:"https://portal.theoplayer.com",children:"Developer Portal"})," when creating an SDK under the \u201CConfigure the SDK\u201D section. When the SDK already exists you can find the Page and Source domains under the \u201CConfigure\u201D section of the SDK overview page. The \u201CAllow all\u201D option can be selected when you are not certain on which domains the player will be loaded or from which domains the player will play streams. This option is separately configurable for both Page and Source domains."]}),"\n",(0,i.jsx)(o.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"This feature is supported as of version 2.78.0."}),"\n",(0,i.jsx)(o.li,{children:"Page domains are only available for our HTML5 SDK."}),"\n"]})]})}function h(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,o,n){n.d(o,{Z:function(){return s},a:function(){return t}});var a=n(67294);let i={},r=a.createContext(i);function t(e){let o=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(r.Provider,{value:o},e.children)}}}]);