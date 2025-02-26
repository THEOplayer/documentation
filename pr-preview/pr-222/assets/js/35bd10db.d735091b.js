"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["35711"],{88238:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>r,contentTitle:()=>d});var i=JSON.parse('{"id":"how-to-guides/analytics/adobe-analytics","title":"Adobe Analytics","description":"Adobe Streaming Media Collection Add-on is a video analytics service, and is part of Adobe Experience Cloud.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/02-analytics/07-adobe-analytics.md","sourceDirName":"how-to-guides/02-analytics","slug":"/how-to-guides/analytics/adobe-analytics","permalink":"/documentation/pr-preview/pr-222/theoplayer/v7/how-to-guides/analytics/adobe-analytics","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/02-analytics/07-adobe-analytics.md","tags":[],"version":"v7","sidebarPosition":7,"frontMatter":{},"sidebar":"roku","previous":{"title":"Custom Analytics Integration","permalink":"/documentation/pr-preview/pr-222/theoplayer/v7/how-to-guides/analytics/custom-analytics-integration"},"next":{"title":"MediaMelon SmartSight","permalink":"/documentation/pr-preview/pr-222/theoplayer/v7/how-to-guides/analytics/mediamelon-smartsight"}}'),a=n("85893"),o=n("50065");let s={},d="Adobe Analytics",l={},r=[{value:"SDKs",id:"sdks",level:2},{value:"Connecting Adobe Analytics to THEOplayer",id:"connecting-adobe-analytics-to-theoplayer",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android SDK",id:"android-sdk",level:3},{value:"iOS/tvOS SDK",id:"iostvos-sdk",level:3},{value:"Other platforms",id:"other-platforms",level:3}];function c(e){let t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"adobe-analytics",children:"Adobe Analytics"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/en/docs/media-analytics/using/media-overview",children:"Adobe Streaming Media Collection Add-on"})," is a video analytics service, and is part of ",(0,a.jsx)(t.a,{href:"https://business.adobe.com/products/analytics/adobe-analytics.html",children:"Adobe Experience Cloud"}),"."]}),"\n",(0,a.jsx)(t.p,{children:'This product was formerly known as "Adobe Heartbeat".'}),"\n",(0,a.jsx)(t.p,{children:"Adobe Streaming Media Collection Add-on or older iterations of this product can be implemented on top of THEOplayer."}),"\n",(0,a.jsxs)(t.p,{children:["Refer to the article on ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-222/theoplayer/v7/how-to-guides/analytics/custom-analytics-integration",children:"building a custom analytics integrations"})," for more information on how to build an integration on top of THEOplayer."]}),"\n",(0,a.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,a.jsxs)(t.p,{children:["As a developer you'll have to ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-222/theoplayer/v7/how-to-guides/analytics/custom-analytics-integration",children:"build a custom analytics integration"})," to support Adobe Analytics through a THEOplayer SDK."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"connecting-adobe-analytics-to-theoplayer",children:"Connecting Adobe Analytics to THEOplayer"}),"\n",(0,a.jsx)(t.p,{children:"Adobe Streaming Media Collection Add-on can be integrated on top of THEOplayer."}),"\n",(0,a.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsxs)(t.p,{children:["You can use the ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/media-sdk/web-implementation",children:"documentation of the Media Analytics SDK"}),", and you can ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/en/docs/media-analytics/using/getting-started/download-sdks",children:"download the Media SDKs"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, you can use the ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/streaming-media-apis/mc-api-overview",children:"RESTful Media Collection API"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,a.jsxs)(t.p,{children:["You can use the ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/media-sdk/mobile-implementation",children:"Adobe Experience Platform (AEP) Mobile SDKs"})," for iOS and Android to integrate Adobe Analytics, as the Media Analytics SDK for Android has been ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/en/docs/media-analytics/using/getting-started/end-of-support/end-of-support-faqs",children:"deprecated since 31 August 2021"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The Media API reference is available ",(0,a.jsx)(t.a,{href:"https://developer.adobe.com/client-sdks/solution/adobe-media-analytics/api-reference/",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, you can consider using the ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/streaming-media-apis/mc-api-overview",children:"RESTful Media Collection API"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"iostvos-sdk",children:"iOS/tvOS SDK"}),"\n",(0,a.jsxs)(t.p,{children:["You can use the ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/media-sdk/mobile-implementation",children:"Adobe Experience Platform (AEP) Mobile SDKs"})," for iOS and Android to integrate Adobe Analytics, as the Media Analytics SDK for iOS has been ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/en/docs/media-analytics/using/getting-started/end-of-support/end-of-support-faqs",children:"deprecated since 31 August 2021"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The Media API reference is available ",(0,a.jsx)(t.a,{href:"https://developer.adobe.com/client-sdks/solution/adobe-media-analytics/api-reference/",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, you can consider using the ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/analytics-only/streaming-media-apis/mc-api-overview",children:"RESTful Media Collection API"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"other-platforms",children:"Other platforms"}),"\n",(0,a.jsxs)(t.p,{children:["For more information about how to use Adobe Analytics on other platforms, please refer to ",(0,a.jsx)(t.a,{href:"https://experienceleague.adobe.com/en/docs/media-analytics/using/media-overview",children:"Adobe Streaming Media Collection Add-on overview"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var i=n(67294);let a={},o=i.createContext(a);function s(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);