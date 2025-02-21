"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["19468"],{13832:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"how-to-guides/miscellaneous/up-next","title":"Up Next","description":"This article describes how to implement common use cases related to the Up Next feature - for example how to use the API.","source":"@site/theoplayer/how-to-guides/07-miscellaneous/03-up-next.md","sourceDirName":"how-to-guides/07-miscellaneous","slug":"/how-to-guides/miscellaneous/up-next","permalink":"/documentation/pr-preview/pr-218/theoplayer/how-to-guides/miscellaneous/up-next","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/07-miscellaneous/03-up-next.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"Social Sharing","permalink":"/documentation/pr-preview/pr-218/theoplayer/how-to-guides/miscellaneous/social-sharing"},"next":{"title":"VR","permalink":"/documentation/pr-preview/pr-218/theoplayer/how-to-guides/miscellaneous/vr"}}'),i=n("85893"),l=n("50065");let o={},r="Up Next",a={},d=[{value:"SDKs",id:"sdks",level:2},{value:"How to use the Up Next API",id:"how-to-use-the-up-next-api",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:4},{value:"Android SDK",id:"android-sdk",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:4},{value:"Sample Application",id:"sample-application",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"up-next",children:"Up Next"})}),"\n",(0,i.jsx)(t.p,{children:"This article describes how to implement common use cases related to the Up Next feature - for example how to use the API."}),"\n",(0,i.jsx)(t.p,{children:"The Up Next feature adds a component to the UI which enables the viewers to navigate to the upcoming asset, but also automatically loads this asset. This can be useful if you want to increase the engagement and consumption of your users."}),"\n",(0,i.jsx)(t.p,{children:"The Up Next feature exposes the Up Next API. This API allows developers to configure the upcoming asset and its loading settings."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Up Next",src:n(69972).Z+"",title:"Up Next",width:"967",height:"804"})}),"\n",(0,i.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-the-up-next-api",children:"How to use the Up Next API"}),"\n",(0,i.jsx)(t.p,{children:"The Up Next API is a UI feature and automatically loads upcoming content. Since it loads new web pages (and not just changes the video source), it is not relevant for other environments than web."}),"\n",(0,i.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,i.jsx)(t.p,{children:"This example explains how you do a basic implementation of the Up Next API."}),"\n",(0,i.jsx)(t.h4,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(t.p,{children:"The Up Next API is currently only available on the Web SDK."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Reference API: ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/classes/Player.html#upnext",children:"Up Next API"})]}),"\n",(0,i.jsxs)(t.li,{children:["Online demo: ",(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/theoplayer-demo-up-next",children:"Up Next Demo"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The snippet below demonstrates how you could configure the Up Next API."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"player.upnext.source = {\n  image: '//cdn.theoplayer.com/video/vr/poster.jpg',\n  title: '360/VR in THEOplayer',\n  duration: '2:14',\n  link: '//demo.theoplayer.com/vr-and-360',\n};\nplayer.upnext.bar.offset = 106;\n"})}),"\n",(0,i.jsx)(t.h4,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(t.p,{children:"This API is currently not available on the Android (TV) SDK."}),"\n",(0,i.jsx)(t.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(t.p,{children:"This API is currently not available on the iOS (/tvOS) SDK."}),"\n",(0,i.jsx)(t.h2,{id:"sample-application",children:"Sample Application"}),"\n",(0,i.jsx)(t.p,{children:"The demo below illustrates the Up Next API in production."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Demo: ",(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/theoplayer-demo-up-next",children:"https://www.theoplayer.com/theoplayer-demo-up-next"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(t.p,{children:["The Up Next API is currently unavailable on all SDKs except the Web SDK, because the underlying THEOplayer CSS and JavaScript modules aren't activated. This means that you also can't enable it using the guide located at ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-218/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/classes/Player.html#upnext",children:"Up Next API"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},69972:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/up-next-b95f9436365130312d8f0070857eceaa.png"},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return o}});var s=n(67294);let i={},l=s.createContext(i);function o(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);