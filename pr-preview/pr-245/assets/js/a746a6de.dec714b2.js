"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["35941"],{61053:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"external/flutter-theoplayer-sdk/flutter_theoplayer_sdk/README","title":"Getting started","description":"Set up your first THEOplayer in just a few minutes!","source":"@site/theoplayer_versioned_docs/version-v7/external/flutter-theoplayer-sdk/flutter_theoplayer_sdk/README.md","sourceDirName":"external/flutter-theoplayer-sdk/flutter_theoplayer_sdk","slug":"/getting-started/frameworks/flutter/getting-started","permalink":"/documentation/pr-preview/pr-245/theoplayer/v7/getting-started/frameworks/flutter/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/-/flutter_theoplayer_sdk/README.md","tags":[],"version":"v7","frontMatter":{"slug":"/getting-started/frameworks/flutter/getting-started","title":"Getting started","description":"Set up your first THEOplayer in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"flutter","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-245/theoplayer/v7/flutter/"},"next":{"title":"Creating a minimal demo app","permalink":"/documentation/pr-preview/pr-245/theoplayer/v7/flutter/guides/creating-minimal-app"}}'),i=n("85893"),s=n("50065");let l={slug:"/getting-started/frameworks/flutter/getting-started",title:"Getting started",description:"Set up your first THEOplayer in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},o="THEOplayer Flutter SDK",a={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to use these guides",id:"how-to-use-these-guides",level:2},{value:"Features",id:"features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Contributing",id:"contributing",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/THEOplayer/flutter-theoplayer-sdk/main/doc/theoplayer_flutter_sdk_logo.png"}),"\n",(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"theoplayer-flutter-sdk",children:"THEOplayer Flutter SDK"})}),"\n",(0,i.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#overview",children:"Overview"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#prerequisites",children:"Prerequisites"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#how-to-use-these-guides",children:"How to use these guides"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#features",children:"Features"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#getting-started",children:"Getting Started"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#contributing",children:"Contributing"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"theoplayer"})," package provides a ",(0,i.jsx)(t.code,{children:"THEOplayer"})," component supporting video playback on the\nfollowing platforms:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Android, Android TV & FireTV"}),"\n",(0,i.jsx)(t.li,{children:"iOS"}),"\n",(0,i.jsx)(t.li,{children:"HTML5 (web, mobile web)"}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"OUT OF SCOPE"}),": Tizen and WebOS (smart TVs, set-top boxes and gaming consoles)."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This document covers the creation of a minimal app including a ",(0,i.jsx)(t.code,{children:"THEOplayer"})," component,\nand an overview of the accompanying example app."]}),"\n",(0,i.jsxs)(t.p,{children:["It also gives a description of the properties of the ",(0,i.jsx)(t.code,{children:"THEOplayer"})," component, and\na list of features and known limitations."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"For each platform, a dependency to the corresponding THEOplayer SDK is included through a dependency manager:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Gradle & Maven for Android"}),"\n",(0,i.jsx)(t.li,{children:"Cocoapods for iOS"}),"\n",(0,i.jsx)(t.li,{children:"npm for Web *"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["*",(0,i.jsxs)(t.em,{children:["the initial version of the SDK relies on a local copy of ",(0,i.jsx)(t.code,{children:"THEOplayer.chromeless.js"})," (and additional modules), so adding it manually is required!"]})]}),"\n",(0,i.jsxs)(t.p,{children:["In order to use one of these THEOplayer SDKs, it is necessary to obtain a valid THEOplayer license for that specific platform,\ni.e. HTML5, Android, and/or iOS. You can sign up for a THEOplayer SDK license through ",(0,i.jsx)(t.a,{href:"https://portal.theoplayer.com/",children:"our portal"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you have no previous experience in Flutter, we encourage you to first explore the\n",(0,i.jsx)(t.a,{href:"https://docs.flutter.dev/",children:"Flutter Documentation"}),",\nas it gives you a good start on one of the most popular app development frameworks."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-these-guides",children:"How to use these guides"}),"\n",(0,i.jsx)(t.p,{children:"These are guides on how to use the THEOplayer Flutter SDK in your Flutter project(s) and can be used\nlinearly or by searching the specific section. It is recommended that you have a basic understanding of how\nFlutter works to speed up the way of working with THEOplayer Flutter SDK."}),"\n",(0,i.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(t.p,{children:"Depending on the platform on which the application is deployed, a different set of features can be available."}),"\n",(0,i.jsx)(t.p,{children:"If a feature is missing, additional help is needed, or you need to extend the package,\nplease reach out to us for support."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Feature"}),(0,i.jsx)("th",{children:"Android, Android TV, Fire TV"}),(0,i.jsx)("th",{children:"Web"}),(0,i.jsx)("th",{children:"iOS, tvOS"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Streaming"})}),(0,i.jsx)("td",{colspan:"2",children:"MPEG-DASH (fmp4, CMAF), HLS (TS, CMAF), Progressive MP4, MP3"}),(0,i.jsx)("td",{children:"HLS (TS, CMAF), Progressive MP4, MP3"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Content Protection"})}),(0,i.jsx)("td",{children:"Widevine"}),(0,i.jsx)("td",{children:"Widevine, Fairplay"}),(0,i.jsx)("td",{children:"Fairplay"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"DRM Connectors"})}),(0,i.jsx)("td",{colspan:"3",children:"Through hooking into native implementation\u2026 check guides!"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Subtitles & Closed Captions"})}),(0,i.jsx)("td",{colspan:"3",children:"In-stream subtitles supported by the platform"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Metadata"})}),(0,i.jsx)("td",{colspan:"3",children:"Event stream, emsg, ID3, EXT-X-DATERANGE"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Advertising Integration"})}),(0,i.jsx)("td",{colspan:"3",children:"Coming soon\u2026"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Analytics Connectors"})}),(0,i.jsx)("td",{colspan:"3",children:"Coming soon\u2026"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Cast Integration"})}),(0,i.jsx)("td",{colspan:"3",children:"Coming soon\u2026"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(t.p,{children:["This section starts with creating a minimal demo app that integrates the ",(0,i.jsx)(t.code,{children:"theoplayer"})," package,\nfollowed by an overview of the available properties and functionality of the THEOplayer component.\nA minimal example application including a basic user interface and demo sources is included in ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/tree/main/flutter_theoplayer_sdk/example",children:"this repository"}),",\nand discussed in the next section. Finally, an overview of features, limitations and known issues is listed."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/creating-minimal-app.md",children:"Creating a minimal demo app"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/creating-minimal-app.md#getting-started-on-android",children:"Getting started on Android"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/creating-minimal-app.md#getting-started-on-ios",children:"Getting started on iOS"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/creating-minimal-app.md#getting-started-on-web",children:"Getting started on Web"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/theoplayer-component.md",children:"The THEOplayer component"})}),"\n",(0,i.jsxs)(t.li,{children:["Knowledge Base","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/custom_drm.md",children:"Using custom DRM connectors"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/limitations.md",children:"Limitations and known issues"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"contributing",children:"Contributing"}),"\n",(0,i.jsx)(t.p,{children:"All contributions are welcomed!"}),"\n",(0,i.jsxs)(t.p,{children:["Please read our ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/CONTRIBUTING.md",children:"Contribution guide"})," on how to get started!"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var r=n(67294);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);