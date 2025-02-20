"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["1305"],{27054:function(e,o,n){n.r(o),n.d(o,{default:()=>h,frontMatter:()=>t,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"faq/page-and-source-domains","title":"Page and Source domains","description":"Page and Source domains prevent unauthorized users from embedding your SDK on their website. We highly recommend configuring both Page and Source domains carefully to protect your THEOplayer license.","source":"@site/theoplayer_versioned_docs/version-v7/faq/64-page-and-source-domains.md","sourceDirName":"faq","slug":"/faq/page-and-source-domains","permalink":"/documentation/pr-preview/pr-216/theoplayer/v7/faq/page-and-source-domains","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/64-page-and-source-domains.md","tags":[],"version":"v7","sidebarPosition":64,"frontMatter":{},"sidebar":"faq","previous":{"title":"The provided video source is incompatible with the license for this player","permalink":"/documentation/pr-preview/pr-216/theoplayer/v7/faq/the-provided-video-source-is-incompatible-with-the-license-for-this-player"},"next":{"title":"What does the error message \u201CSomething went wrong determining the initial period of the provided MPEG-DASH stream\u201D mean","permalink":"/documentation/pr-preview/pr-216/theoplayer/v7/faq/error-message-initial-period-provided-MPEG-DASH"}}'),a=n("85893"),r=n("50065");let t={},s="Page and Source domains",d={},l=[{value:"Page domains",id:"page-domains",level:2},{value:"Source domains",id:"source-domains",level:2},{value:"How to configure Page and Source domains",id:"how-to-configure-page-and-source-domains",level:2}];function c(e){let o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"page-and-source-domains",children:"Page and Source domains"})}),"\n",(0,a.jsx)(o.p,{children:"Page and Source domains prevent unauthorized users from embedding your SDK on their website. We highly recommend configuring both Page and Source domains carefully to protect your THEOplayer license."}),"\n",(0,a.jsx)(o.h2,{id:"page-domains",children:"Page domains"}),"\n",(0,a.jsx)(o.p,{children:"Page domains (available only on Web SDK, React Native SDK and Flutter SDK) specify on which domains the player can be loaded."}),"\n",(0,a.jsxs)(o.p,{children:["Imagine your website has the following domain: ",(0,a.jsx)(o.code,{children:"example.com"}),", you have configured your Page domains and the THEOplayer SDK is installed on your website. When a malicious user copies your SDK and installs it on their domain, ",(0,a.jsx)(o.code,{children:"other.com"}),", the player will throw an error that the license is invalid."]}),"\n",(0,a.jsxs)(o.p,{children:["Whitelisting ",(0,a.jsx)(o.code,{children:"example.com"})," will also whitelist all its subdomains such as ",(0,a.jsx)(o.code,{children:"a.example.com"})," or ",(0,a.jsx)(o.code,{children:"a.b.example.com"})," so you don't have to enter each of them one by one. Please note that whitelisting ",(0,a.jsx)(o.code,{children:"*.example.com"})," ",(0,a.jsx)("u",{children:"will not"})," whitelist the subdomains."]}),"\n",(0,a.jsxs)(o.p,{children:["Your page domains are included on your player ",(0,a.jsx)(o.a,{href:"https://www.theoplayer.com/docs/theoplayer/how-to-guides/license/introduction/",children:"license"}),". If you make any changes on your page domain configuration, you should update the license on your website."]}),"\n",(0,a.jsx)(o.h2,{id:"source-domains",children:"Source domains"}),"\n",(0,a.jsxs)(o.p,{children:["Source domains specify from which domains the player is allowed to play streams. When the Source domains are configured to ",(0,a.jsx)(o.code,{children:"example.com"})," the player will only play streams from this domain. If the player attempts to play a stream from ",(0,a.jsx)(o.code,{children:"other.com"}),", it will result in an error stating that the license is invalid."]}),"\n",(0,a.jsxs)(o.p,{children:["Similar to Page domains, whitelisting ",(0,a.jsx)(o.code,{children:"example.com"})," will also whitelist all its subdomains such as ",(0,a.jsx)(o.code,{children:"a.example.com"})," or ",(0,a.jsx)(o.code,{children:"a.b.example.com"})," so you don't have to enter each of them one by one. Please note that whitelisting ",(0,a.jsx)(o.code,{children:"*.example.com"})," ",(0,a.jsx)("u",{children:"will not"})," whitelist the subdomains."]}),"\n",(0,a.jsxs)(o.p,{children:["Your source domains are included on your player ",(0,a.jsx)(o.a,{href:"https://www.theoplayer.com/docs/theoplayer/how-to-guides/license/introduction/",children:"license"}),". If you make any changes on your source domain configuration, you should update the license on your application/website."]}),"\n",(0,a.jsx)(o.h2,{id:"how-to-configure-page-and-source-domains",children:"How to configure Page and Source domains"}),"\n",(0,a.jsxs)(o.p,{children:["Page and Source domains can be configured in the ",(0,a.jsx)(o.a,{href:"https://portal.theoplayer.com",children:"Developer Portal"})," when creating a license or a custom SDK. On an existing license/SDK, you can find the Page and Source domains under the \u201CConfigure\u201D section of the SDK overview page. The \u201CAllow all\u201D option can be selected when you are not certain on which domains the player will be loaded or from which domains the player will play streams. This option is separately configurable for both Page and Source domains."]})]})}function h(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,o,n){n.d(o,{Z:function(){return s},a:function(){return t}});var i=n(67294);let a={},r=i.createContext(a);function t(e){let o=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);