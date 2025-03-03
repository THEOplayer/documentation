"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["92853"],{68124:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"how-to-guides/miscellaneous/preloading","title":"Preloading","description":"This article contains a description of the possible preloading settings and will show you how to use them on your player. This is possible on Web, Android and iOS SDKs. The aim of preloading is to improve user experience by loading parts of the video before the Play button is hit when the user is likely to play the video.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/07-miscellaneous/09-preloading.md","sourceDirName":"how-to-guides/07-miscellaneous","slug":"/how-to-guides/miscellaneous/preloading","permalink":"/documentation/pr-preview/pr-226/theoplayer/v7/how-to-guides/miscellaneous/preloading","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/07-miscellaneous/09-preloading.md","tags":[],"version":"v7","sidebarPosition":9,"frontMatter":{},"sidebar":"roku","previous":{"title":"Using hlsDateRange property","permalink":"/documentation/pr-preview/pr-226/theoplayer/v7/how-to-guides/miscellaneous/using-hlsdatarange-property"},"next":{"title":"Saving the progress of a caching task in iOS","permalink":"/documentation/pr-preview/pr-226/theoplayer/v7/how-to-guides/miscellaneous/saving-cachingtask-progress-ios"}}'),l=n("85893"),s=n("50065");let r={},o="Preloading",a={},d=[{value:"SDKs",id:"sdks",level:2},{value:"How to use preloading",id:"how-to-use-preloading",level:2},{value:"Preloading settings",id:"preloading-settings",level:3},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Sample Applications",id:"sample-applications",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"preloading",children:"Preloading"})}),"\n",(0,l.jsx)(t.p,{children:"This article contains a description of the possible preloading settings and will show you how to use them on your player. This is possible on Web, Android and iOS SDKs. The aim of preloading is to improve user experience by loading parts of the video before the Play button is hit when the user is likely to play the video."}),"\n",(0,l.jsx)(t.p,{children:"At the bottom, you will be able to find interesting Resources on this topic."}),"\n",(0,l.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"how-to-use-preloading",children:"How to use preloading"}),"\n",(0,l.jsx)(t.p,{children:"Choosing to preload your video content will reduce the start-up time of your videos. It will also make some data regarding the current source (video duration, timeline thumbnails, etc.) available before the user initiates playback. On the other hand, when the video is less likely to be played, or when it is less beneficial (live video; autoplay) you can configure the player to not preload it and save bandwidth. Here is how."}),"\n",(0,l.jsx)(t.h3,{id:"preloading-settings",children:"Preloading settings"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"none"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Do not preload anything. After setting the source, the player will not load the manifest nor any media files until the play method is invoked on the player."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"metadata"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Preload the metadata of the video. After setting the source, the player will automatically load the manifest file and will wait for loading media files until the play method is invoked on the player. For static videos (e.g. MP4 files), this translates to preloading data from the start of the video in order to acquire e.g. the video's width and height and the initial video frames."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"auto"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Preload enough data to allow for smooth initial playback. After setting the source, the player will load both the manifest files and enough media files until a sufficient playback buffer has been obtained."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,l.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,l.jsx)(t.p,{children:"In this example, we are preloading metadata only."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"player.preload = 'metadata';\n"})}),"\n",(0,l.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,l.jsx)(t.p,{children:"To activate preload, you need to import the player preloadType:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:"import com.theoplayer.android.api.player.PreloadType;\n"})}),"\n",(0,l.jsx)(t.p,{children:"You can then choose the option you prefer:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:"   tpv = new THEOplayerView(this);\n   ...\n   tpv.getPlayer().setPreload(PreloadType.METADATA, callbackHandler);\n"})}),"\n",(0,l.jsxs)(t.p,{children:["Here, ",(0,l.jsx)(t.code,{children:"callbackHandler"})," is a method to establish which actions are to be taken when preloading has been successfully completed."]}),"\n",(0,l.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,l.jsx)(t.p,{children:"To use preloading"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-swift",children:"self.theoplayer?.setPreload(.metadata)\n"})}),"\n",(0,l.jsx)(t.h2,{id:"sample-applications",children:"Sample Applications"}),"\n",(0,l.jsx)(t.p,{children:"The demo below illustrates the Preload API in production."}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Demo: ",(0,l.jsx)(t.a,{href:"https://demo.theoplayer.com/preloading-vod",children:"https://demo.theoplayer.com/preloading-vod"})]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"THEOplayer will always prefer downloading data for the currently playing video over downloading data for a preloading video. Only when the currently playing video has enough data to play to the end of the video, will the player start preloading other videos."}),"\n",(0,l.jsxs)(t.li,{children:["When preloading the first segment(s) (preload ",(0,l.jsx)(t.code,{children:"auto"}),"), the first frame of the video will be shown under the Big Play Button, if there is no poster."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/documentation/pr-preview/pr-226/theoplayer/v7/faq/what-are-the-benefits-of-preloading",children:"What are the benefits of preloading?"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/types/PreloadType.html",children:"API reference"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://www.w3.org/TR/html5/embedded-content-0.html#attr-media-preload",children:"HTML5 specification"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/Cache.html",children:"API reference: Cache API"})}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var i=n(67294);let l={},s=i.createContext(l);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);