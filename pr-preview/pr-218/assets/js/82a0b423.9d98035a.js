"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["49571"],{42384:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>r,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"how-to-guides/analytics/adobe-analytics","title":"Adobe Analytics","description":"Adobe Analytics for Streaming Media is a video analytics service,","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/07-adobe-analytics.md","sourceDirName":"how-to-guides/02-analytics","slug":"/how-to-guides/analytics/adobe-analytics","permalink":"/documentation/pr-preview/pr-218/theoplayer/v6/how-to-guides/analytics/adobe-analytics","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/07-adobe-analytics.md","tags":[],"version":"v6","sidebarPosition":7,"frontMatter":{},"sidebar":"roku","previous":{"title":"Custom Analytics Integration","permalink":"/documentation/pr-preview/pr-218/theoplayer/v6/how-to-guides/analytics/custom-analytics-integration"},"next":{"title":"MediaMelon SmartSight","permalink":"/documentation/pr-preview/pr-218/theoplayer/v6/how-to-guides/analytics/mediamelon-smartsight"}}'),a=n("85893"),s=n("50065");let o={},l="Adobe Analytics",r={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Connecting Adobe Analytics to THEOplayer",id:"connecting-adobe-analytics-to-theoplayer",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android SDK",id:"android-sdk",level:3},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:3},{value:"Other platforms",id:"other-platforms",level:3}];function c(e){let t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"adobe-analytics",children:"Adobe Analytics"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://docs.adobe.com/content/help/en/media-analytics/using/media-overview.html",children:"Adobe Analytics for Streaming Media"})," is a video analytics service,\nand is part of ",(0,a.jsx)(t.a,{href:"https://business.adobe.com/products/analytics/adobe-analytics.html",children:"Adobe Experience Cloud"}),'.\nThis product is formerly known as "Adobe Heartbeat", as this product uses "',(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/media-analytics/using/media-overview.html#heartbeat",children:"heartbeats"}),'" to collect video metrics.']}),"\n",(0,a.jsxs)(t.p,{children:["Adobe Analytics for Streaming Media, or older iterations of this product, can be implemented on top of THEOplayer.\nRefer to the article on ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-218/theoplayer/v6/how-to-guides/analytics/custom-analytics-integration",children:"building a custom analytics integrations"})," for more information on how to build an integration on top of THEOplayer."]}),"\n",(0,a.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,a.jsxs)(t.p,{children:["As a developer you'll have to ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-218/theoplayer/v6/how-to-guides/analytics/custom-analytics-integration",children:"build a custom analytics integration"})," to support Adobe Analytics through a THEOplayer SDK."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"connecting-adobe-analytics-to-theoplayer",children:"Connecting Adobe Analytics to THEOplayer"}),"\n",(0,a.jsx)(t.p,{children:"Adobe Analytics for Streaming Media can be integrated on top of THEOplayer."}),"\n",(0,a.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsxs)(t.p,{children:["To this end, you can use the ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/media-analytics/using/sdk-implement/setup/setup-javascript/set-up-js-3.html",children:"documentation of the Media Analytics SDK"}),", and you can ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/media-analytics/using/sdk-implement/download-sdks.html",children:"download the Media SDKs"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, you can use the ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/media-analytics/using/media-collection-api/mc-api-overview.html",children:"RESTful Media Collection API"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,a.jsxs)(t.p,{children:["You can use the ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/media-analytics/using/implementation/analytics-only/media-sdk/mobile-implementation.html?lang=en",children:"Adobe Experience Platform (AEP) Mobile SDKs"})," for iOS and Android to integrate Adobe Analytics, as the Media Analytics SDK for Android has been ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/media-analytics/using/getting-started/end-of-support/end-of-support-faqs.html?lang=en",children:"deprecated since 31 August 2021"}),"..\nThe Media API reference is available ",(0,a.jsx)(t.a,{href:"https://developer.adobe.com/client-sdks/solution/adobe-media-analytics/api-reference/",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, you can consider using the ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/media-analytics/using/implementation/analytics-only/streaming-media-apis/mc-api-overview.html",children:"RESTful Media Collection API"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsxs)(t.p,{children:["You can use the ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/media-analytics/using/implementation/analytics-only/media-sdk/mobile-implementation.html?lang=en",children:"Adobe Experience Platform (AEP) Mobile SDKs"})," for iOS and Android to integrate Adobe Analytics, as the Media Analytics SDK for iOS has been ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/media-analytics/using/getting-started/end-of-support/end-of-support-faqs.html?lang=en",children:"deprecated since 31 August 2021"}),".\nThe Media API reference is available ",(0,a.jsx)(t.a,{href:"https://developer.adobe.com/client-sdks/solution/adobe-media-analytics/api-reference/",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, you can consider using the RESTful Media Collection API described ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/media-analytics/using/implementation/analytics-only/streaming-media-apis/mc-api-overview.html",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"other-platforms",children:"Other platforms"}),"\n",(0,a.jsxs)(t.p,{children:["For more information about how to use Adobe Analytics on other platforms, please refer to ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/media-analytics/using/media-overview.html",children:"Adobe Analytics for Streaming Media overview"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var i=n(67294);let a={},s=i.createContext(a);function o(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);