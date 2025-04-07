"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["2211"],{22213:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>o,assets:()=>h,toc:()=>l,contentTitle:()=>s});var o=JSON.parse('{"id":"faq/how-to-use-theoplayer-ios-sdk-on-m1","title":"How to use THEOplayer iOS SDK on an M1 mac","description":"The iPhone simulators on M1 MacBooks use the arm64 architecture, therefore any binaries linked during compilation time that do not support the architecture will result in compilation error. Many third party frameworks lack the support for this particular architecture, and this causes unfortunate limitations for development.","source":"@site/theoplayer_versioned_docs/version-v7/faq/74-how-to-use-theoplayer-ios-sdk-on-m1.md","sourceDirName":"faq","slug":"/faq/how-to-use-theoplayer-ios-sdk-on-m1","permalink":"/documentation/pr-preview/pr-259/theoplayer/v7/faq/how-to-use-theoplayer-ios-sdk-on-m1","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/74-how-to-use-theoplayer-ios-sdk-on-m1.md","tags":[],"version":"v7","sidebarPosition":74,"frontMatter":{},"sidebar":"faq","previous":{"title":"How to use the Media Session API","permalink":"/documentation/pr-preview/pr-259/theoplayer/v7/faq/how-to-use-media-session-api"},"next":{"title":"Widevine CDM deprecation notice for old browser versions","permalink":"/documentation/pr-preview/pr-259/theoplayer/v7/faq/old-widevine-cdm-deprecation-notice"}}'),a=r("85893"),n=r("50065");let i={},s="How to use THEOplayer iOS SDK on an M1 mac",h={},l=[{value:"What are the features that lack arm64 simulator support?",id:"what-are-the-features-that-lack-arm64-simulator-support",level:4},{value:"What is the alternative solution?",id:"what-is-the-alternative-solution",level:4},{value:"What about the future?",id:"what-about-the-future",level:4}];function c(e){let t={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"how-to-use-theoplayer-ios-sdk-on-an-m1-mac",children:"How to use THEOplayer iOS SDK on an M1 mac"})}),"\n",(0,a.jsx)(t.p,{children:"The iPhone simulators on M1 MacBooks use the arm64 architecture, therefore any binaries linked during compilation time that do not support the architecture will result in compilation error. Many third party frameworks lack the support for this particular architecture, and this causes unfortunate limitations for development."}),"\n",(0,a.jsxs)(t.p,{children:["Previous to writing this article (specifically with THEOplayer ",(0,a.jsx)(t.strong,{children:"versions 3.0.0 and below"}),"), THEOplayer depended on few of these frameworks that lack the arm64 architecture, which in turn resulted in deciding to omit it. As of ",(0,a.jsx)(t.strong,{children:"version 3.1.0"})," and in part of our effort to optimize our modularization, the THEOplayer framework will be delivered with the arm64 architecture support as long as no feature is included that adds a dependency to an unsupported third party framework."]}),"\n",(0,a.jsx)(t.admonition,{type:"important",children:(0,a.jsxs)(t.p,{children:["To include the new architecture, import the ",(0,a.jsx)(t.strong,{children:".xcframework"})," package into your project instead of the ",(0,a.jsx)(t.strong,{children:".framework"})," package. The ",(0,a.jsx)(t.strong,{children:".framework"})," is a fat framework and cannot include two arm64 architectures for device and simulator."]})}),"\n",(0,a.jsx)(t.h4,{id:"what-are-the-features-that-lack-arm64-simulator-support",children:"What are the features that lack arm64 simulator support?"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Google IMA / Google DAI"}),"\nThe Google IMA & DAI features rely on the ",(0,a.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/download",children:"GoogleInteractiveMediaAds"})," framework which lacks the architecture in its fat framework binary. You can follow developer requests and updates from the IMA team in this ",(0,a.jsx)(t.a,{href:"https://groups.google.com/g/ima-sdk/c/y-5OHtAQ5rk?pli=1",children:"Google Groups conversation"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Google Cast / Chromecast"}),"\nThe Chromecast feature relies on the ",(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/docs/ios_sender#manual_setup",children:"GoogleCast"})," framework which lacks the architecture in its fat framework binary."]}),"\n",(0,a.jsxs)(t.p,{children:["Other features that do not support the architecture are: ",(0,a.jsx)(t.strong,{children:"Agama, Moat & Yospace."})]}),"\n",(0,a.jsx)(t.h4,{id:"what-is-the-alternative-solution",children:"What is the alternative solution?"}),"\n",(0,a.jsxs)(t.p,{children:["In case you require one of the features in the section above to be included in your THEOplayer iOS SDK, then the suggested temporary solution is to use Apple's ",(0,a.jsx)(t.a,{href:"https://support.apple.com/en-us/HT211861",children:"Rosetta"})," to be able to run the framework on an iPhone simulator on an M1 mac. Rosetta will launch the simulator in ",(0,a.jsx)(t.strong,{children:"x86_64"})," architecture instead of ",(0,a.jsx)(t.strong,{children:"arm64"})," and the framework will successfully be linked during compilation."]}),"\n",(0,a.jsx)(t.h4,{id:"what-about-the-future",children:"What about the future?"}),"\n",(0,a.jsxs)(t.p,{children:["Whenever a third party dependency adds support to the architecture, we will address the situation and update our SDK framework. To stay up to date with changes related to our iOS SDK, check out our ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v7/changelog",children:"changelog"})," where we post new updates and features with every new release."]})]})}function u(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return i}});var o=r(67294);let a={},n=o.createContext(a);function i(e){let t=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);