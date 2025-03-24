"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["45446"],{56528:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>o,contentTitle:()=>c});var n=JSON.parse('{"id":"external/react-native-theoplayer/doc/getting-started","title":"Getting started with React Native THEOplayer","description":"The react-native-theoplayer package provides a THEOplayerView component supporting video playback on the","source":"@site/theoplayer/external/react-native-theoplayer/doc/getting-started.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/getting-started","permalink":"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/getting-started.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"slug":"/getting-started/frameworks/react-native/getting-started"},"sidebar":"react-native","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-243/theoplayer/react-native/"},"next":{"title":"Getting started with React Native THEOplayer","permalink":"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/getting-started"}}'),a=r("85893"),i=r("50065");let s={sidebar_position:0,slug:"/getting-started/frameworks/react-native/getting-started"},c="Getting started with React Native THEOplayer",l={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to use these guides",id:"how-to-use-these-guides",level:2},{value:"Features",id:"features",level:2},{value:"Available connectors",id:"available-connectors",level:2},{value:"Creating your first app",id:"creating-your-first-app",level:2},{value:"Knowledge Base",id:"knowledge-base",level:2},{value:"API Reference",id:"api-reference",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"getting-started-with-react-native-theoplayer",children:"Getting started with React Native THEOplayer"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"react-native-theoplayer"})," package provides a ",(0,a.jsx)(t.code,{children:"THEOplayerView"})," component supporting video playback on the\nfollowing platforms:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Android, Android TV & FireTV"}),"\n",(0,a.jsx)(t.li,{children:"iOS & tvOS (Apple TV)"}),"\n",(0,a.jsx)(t.li,{children:"HTML5, Tizen & webOS (web, mobile web, smart TVs, set-top boxes and gaming consoles)."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["This document covers the creation of a minimal app including a ",(0,a.jsx)(t.code,{children:"THEOplayerView"})," component,\nand an overview of the accompanying example app with a user interface provided\nby the ",(0,a.jsx)(t.code,{children:"@theoplayer/react-native-ui"})," package."]}),"\n",(0,a.jsxs)(t.p,{children:["It also gives a description of the properties of the ",(0,a.jsx)(t.code,{children:"THEOplayerView"})," component, and\na list of features and known limitations."]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.p,{children:"For each platform, a dependency to the corresponding THEOplayer SDK is included through a dependency manager:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Gradle & Maven for Android"}),"\n",(0,a.jsx)(t.li,{children:"Cocoapods for iOS"}),"\n",(0,a.jsx)(t.li,{children:"npm for Web"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In order to use one of these THEOplayer SDKs, it is necessary to obtain a valid THEOplayer license for that specific\nplatform, i.e. HTML5, Android, and/or iOS. You can sign up for a THEOplayer SDK license\nthrough ",(0,a.jsx)(t.a,{href:"https://portal.theoplayer.com/",children:"our portal"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If you have no previous experience in React Native, we encourage you to first explore the\n",(0,a.jsx)(t.a,{href:"https://reactnative.dev/docs/getting-started",children:"React Native Documentation"}),",\nas it gives you a good start on one of the most popular app development frameworks."]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-use-these-guides",children:"How to use these guides"}),"\n",(0,a.jsx)(t.p,{children:"These are guides on how to use the THEOplayer React Native SDK in your React Native project(s) and can be used\nlinearly or by searching the specific section. It is recommended that you have a basic understanding of how\nReact Native works to speed up the way of working with THEOplayer React Native SDK."}),"\n",(0,a.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,a.jsx)(t.p,{children:"Depending on the platform on which the application is deployed, a different set of features is available."}),"\n",(0,a.jsx)(t.p,{children:"If a feature missing, additional help is needed, or you need to extend the package,\nplease reach out to us for support."}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Feature"}),(0,a.jsx)("th",{children:"Android, Android TV, Fire TV"}),(0,a.jsx)("th",{children:"Web"}),(0,a.jsx)("th",{children:"iOS, tvOS"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Streaming"})}),(0,a.jsx)("td",{colspan:"2",children:"MPEG-DASH (fmp4, CMAF), HLS (TS, CMAF), Progressive MP4, MP3"}),(0,a.jsx)("td",{children:"HLS (TS, CMAF), Progressive MP4, MP3"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Content Protection"})}),(0,a.jsx)("td",{children:"Widevine"}),(0,a.jsx)("td",{children:"Widevine, PlayReady, Fairplay"}),(0,a.jsx)("td",{children:"Fairplay"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"DRM Connectors"})}),(0,a.jsx)("td",{colspan:"3",children:"BuyDRM, EZDRM, Anvato, Titanium, Axinom, Irdeto, VuDRM, Comcast, Verimatrix, Azure, \u2026"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Analytics Connectors"})}),(0,a.jsx)("td",{colspan:"3",children:"Adobe, Agama, Comscore, Conviva, Mux, Nielsen, Youbora"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Subtitles & Closed Captions"})}),(0,a.jsx)("td",{colspan:"3",children:"CEA-608/708, SRT, TTML, WebVTT"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Metadata"})}),(0,a.jsx)("td",{colspan:"3",children:"Event stream, emsg, ID3, EXT-X-DATERANGE, EXT-X-PROGRAM-DATE-TIME"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Advertising Integration"})}),(0,a.jsx)("td",{colspan:"3",children:"Google IMA, Google DAI"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Cast Integration"})}),(0,a.jsx)("td",{children:"Chromecast"}),(0,a.jsx)("td",{colspan:"2",children:"Chromecast, Airplay"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Presentation Mode"})}),(0,a.jsx)("td",{colspan:"3",children:"Inline, Picture-in-Picture, Fullscreen"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Audio Control Management"})}),(0,a.jsx)("td",{children:"Audio focus & Audio-Becoming-Noisy mgmt"}),(0,a.jsx)("td",{colspan:"2",children:"(Audio control management by platform)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Advanced APIs"})}),(0,a.jsxs)("td",{colspan:"2",children:["Background playback,",(0,a.jsx)("br",{}),"Media Session,",(0,a.jsx)("br",{}),"Media Cache (offline playback)"]}),(0,a.jsxs)("td",{children:["Background playback,",(0,a.jsx)("br",{}),"NowPlaying,",(0,a.jsx)("br",{}),"Media Cache (iOS only)"]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:[(0,a.jsx)("strong",{children:"User Interface"}),(0,a.jsx)("br",{}),(0,a.jsx)("code",{children:"@theoplayer/react-native-ui"})]}),(0,a.jsx)("td",{colspan:"3",children:"Basic playback, media & text track selection, progress bar, live & vod, preview thumbnails, customisable & extensible"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"available-connectors",children:"Available connectors"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"react-native-theoplayer"})," package can be combined with any number of connectors to provide extra\nfunctionality. Currently, the following connectors are available:"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Package name"}),(0,a.jsx)(t.th,{children:"Purpose"}),(0,a.jsx)(t.th,{children:"Registry"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-analytics",children:(0,a.jsx)(t.code,{children:"@theoplayer/react-native-analytics-adobe"})})}),(0,a.jsx)(t.td,{children:"Adobe analytics connector"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/react-native-analytics-adobe",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@theoplayer/react-native-analytics-adobe",alt:"npm"})})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-analytics",children:(0,a.jsx)(t.code,{children:"@theoplayer/react-native-analytics-agama"})})}),(0,a.jsx)(t.td,{children:"Agama analytics connector"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/react-native-analytics-agama",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@theoplayer/react-native-analytics-agama",alt:"npm"})})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-analytics",children:(0,a.jsx)(t.code,{children:"@theoplayer/react-native-analytics-comscore"})})}),(0,a.jsx)(t.td,{children:"Comscore analytics connector"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/react-native-analytics-comscore",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@theoplayer/react-native-analytics-comscore",alt:"npm"})})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-analytics",children:(0,a.jsx)(t.code,{children:"@theoplayer/react-native-analytics-conviva"})})}),(0,a.jsx)(t.td,{children:"Conviva analytics connector"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/react-native-analytics-conviva",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@theoplayer/react-native-analytics-conviva",alt:"npm"})})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-analytics",children:(0,a.jsx)(t.code,{children:"@theoplayer/react-native-analytics-mux"})})}),(0,a.jsx)(t.td,{children:"Mux analytics connector"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/react-native-analytics-mux",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@theoplayer/react-native-analytics-mux",alt:"npm"})})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-analytics",children:(0,a.jsx)(t.code,{children:"@theoplayer/react-native-analytics-nielsen"})})}),(0,a.jsx)(t.td,{children:"Nielsen analytics connector"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/react-native-analytics-nielsen",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@theoplayer/react-native-analytics-nielsen",alt:"npm"})})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-analytics",children:(0,a.jsx)(t.code,{children:"@theoplayer/react-native-analytics-youbora"})})}),(0,a.jsx)(t.td,{children:"Youbora analytics connector"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/react-native-analytics-youbora",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@theoplayer/react-native-analytics-youbora",alt:"npm"})})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-drm",children:(0,a.jsx)(t.code,{children:"@theoplayer/react-native-drm"})})}),(0,a.jsx)(t.td,{children:"Content protection (DRM) connectors"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/react-native-drm",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@theoplayer/react-native-drm",alt:"npm"})})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-ui",children:(0,a.jsx)(t.code,{children:"@theoplayer/react-native-ui"})})}),(0,a.jsx)(t.td,{children:"React Native user interface"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/react-native-ui",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@theoplayer/react-native-ui",alt:"npm"})})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-connector-template",children:(0,a.jsx)(t.code,{children:"@theoplayer/react-native-connector-template"})})}),(0,a.jsxs)(t.td,{children:["A template for",(0,a.jsx)("br",{}),(0,a.jsx)(t.code,{children:"react-native-theoplayer"})," connectors."]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/react-native-connector-template",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@theoplayer/react-native-connector-template",alt:"npm"})})})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"creating-your-first-app",children:"Creating your first app"}),"\n",(0,a.jsxs)(t.p,{children:["This section starts with creating a minimal demo app that integrates the ",(0,a.jsx)(t.code,{children:"react-native-theoplayer"})," package,\nfollowed by an overview of the available properties and functionality of the THEOplayerView component.\nAn example application including a basic user interface and demo sources is included in the\n",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/tree/develop/example",children:"git repository"}),",\nand discussed in the next section."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/creating-minimal-app",children:"Creating a minimal demo app"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/creating-minimal-app#getting-started-on-android",children:"Getting started on Android"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/creating-minimal-app#getting-started-on-ios-and-tvos",children:"Getting started on iOS"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/creating-minimal-app#getting-started-on-web",children:"Getting started on Web"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/theoplayerview-component",children:"The THEOplayerView component"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/example-app",children:"The example application"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"knowledge-base",children:"Knowledge Base"}),"\n",(0,a.jsx)(t.p,{children:"This section gives an overview of features, limitations and known issues:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/abr",children:"Adaptive Bitrate (ABR)"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/ads",children:"Advertisements"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/audio-control",children:"Audio Control Management"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/background",children:"Background playback and notifications"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/cast",children:"Casting with Chromecast and Airplay"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/drm",children:"Digital Rights Management (DRM)"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/fullscreen",children:"Fullscreen presentation"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/media-caching",children:"Media Caching"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/pip",children:"Picture-in-Picture (PiP)"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/texttracks",children:"Subtitles, Closed Captions and Metadata tracks"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/frameworks/react-native/limitations",children:"Limitations and known issues"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://theoplayer.github.io/react-native-theoplayer/api/",children:"API Reference"})," for detailed documentation\nabout all available components and functions."]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return s}});var n=r(67294);let a={},i=n.createContext(a);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);