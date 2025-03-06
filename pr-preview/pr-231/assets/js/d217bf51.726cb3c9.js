"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["23185"],{48737:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>l,toc:()=>a,contentTitle:()=>o});var n=JSON.parse('{"id":"how-to-guides/ads/prebidjs","title":"Prebid.js","description":"This article explains how you can connect THEOplayer with Prebid.js. Prebid.js is an open-source header bidding solution. On the client-side, you can request bids from multiple ad networks, take a winning bid and select its associated advertisement. You want to configure and play this selected advertisement in THEOplayer.","source":"@site/theoplayer/how-to-guides/01-ads/09-prebidjs.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/prebidjs","permalink":"/documentation/pr-preview/pr-231/theoplayer/how-to-guides/ads/prebidjs","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/01-ads/09-prebidjs.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"roku","previous":{"title":"Google Dynamic Ad Insertion (DAI)","permalink":"/documentation/pr-preview/pr-231/theoplayer/how-to-guides/ads/google-dai"},"next":{"title":"Google IMA","permalink":"/documentation/pr-preview/pr-231/theoplayer/how-to-guides/ads/google-ima"}}'),s=i("85893"),r=i("50065");let d={},o="Prebid.js",l={},a=[{value:"SDKs",id:"sdks",level:2},{value:"Connecting Prebid.js and THEOplayer",id:"connecting-prebidjs-and-theoplayer",level:2},{value:"Code Examples",id:"code-examples",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS/tvOS SDK",id:"iostvos-sdk",level:5},{value:"Resources",id:"resources",level:2}];function c(e){let t={a:"a",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"prebidjs",children:"Prebid.js"})}),"\n",(0,s.jsx)(t.p,{children:"This article explains how you can connect THEOplayer with Prebid.js. Prebid.js is an open-source header bidding solution. On the client-side, you can request bids from multiple ad networks, take a winning bid and select its associated advertisement. You want to configure and play this selected advertisement in THEOplayer."}),"\n",(0,s.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,s.jsx)(t.p,{children:"N/A was selected because Prebid.js is a separate library."}),"\n",(0,s.jsx)(t.p,{children:"You can connect Prebid.js with THEOplayer on any platform that supports both Prebid.js and THEOplayer."}),"\n",(0,s.jsx)(t.h2,{id:"connecting-prebidjs-and-theoplayer",children:"Connecting Prebid.js and THEOplayer"}),"\n",(0,s.jsx)(t.p,{children:"Prebid.js allows you to request bids. This request will respond with bids through a callback function. In this callback function, you have to select a winning bid, extract the ad tag URL. You can configure this URL as THEOplayer's ad source."}),"\n",(0,s.jsx)(t.h3,{id:"code-examples",children:"Code Examples"}),"\n",(0,s.jsxs)(t.p,{children:["The code example below is based on the documentation offered by Prebid.org ",(0,s.jsx)(t.a,{href:"https://docs.prebid.org/dev-docs/examples/instream-banner-mix.html",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsxs)(t.p,{children:["The sample application at ",(0,s.jsx)(t.a,{href:"https://cdn.theoplayer.com/demos/prebidjs.html",children:"https://cdn.theoplayer.com/demos/prebidjs.html"})," is an example of implementing Prebid.js on top of the THEOplayer Web SDK."]}),"\n",(0,s.jsxs)(t.p,{children:["The example above schedules advertisements as pre-rolls (or mid-rolls or post-rolls). You can also dynamically schedule advertisements with the Ads API, as explained in ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-231/theoplayer/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"How to set up VAST and VMAP ads"}),"."]}),"\n",(0,s.jsx)(t.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"https://docs.prebid.org/prebid-mobile/pbm-api/android/code-integration-android.html",children:"https://docs.prebid.org/prebid-mobile/pbm-api/android/code-integration-android.html"})," to integrate on Android SDK. The same THEOplayer API to configure advertisements is available on the Android SDK."]}),"\n",(0,s.jsx)(t.h5,{id:"iostvos-sdk",children:"iOS/tvOS SDK"}),"\n",(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"https://docs.prebid.org/prebid-mobile/pbm-api/ios/code-integration-ios.html",children:"https://docs.prebid.org/prebid-mobile/pbm-api/ios/code-integration-ios.html"})," to integrate on iOS/tvOS SDK. The same THEOplayer API to configure advertisements is available on the iOS SDK."]}),"\n",(0,s.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://prebid.org/product-suite/prebidjs/",children:"What is Prebid?"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.prebid.org/",children:"Prebid.js documentation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/prebid/Prebid.js",children:"Prebid.js on GitHub"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return d}});var n=i(67294);let s={},r=n.createContext(s);function d(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);