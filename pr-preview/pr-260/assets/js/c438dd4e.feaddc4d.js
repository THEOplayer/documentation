"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["60893"],{90956:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"external/flutter-theoplayer-sdk/doc/limitations","title":"Limitations and Known Issues","description":"This sections lists any limitations and known issues in the current package version.","source":"@site/theoplayer/external/flutter-theoplayer-sdk/doc/limitations.md","sourceDirName":"external/flutter-theoplayer-sdk/doc","slug":"/flutter/guides/limitations","permalink":"/documentation/pr-preview/pr-260/theoplayer/flutter/guides/limitations","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/-/doc/limitations.md","tags":[],"version":"current","frontMatter":{"slug":"/flutter/guides/limitations"},"sidebar":"flutter","previous":{"title":"Using a custom DRM integration","permalink":"/documentation/pr-preview/pr-260/theoplayer/flutter/guides/custom_drm"},"next":{"title":"Picture-in-Picture support","permalink":"/documentation/pr-preview/pr-260/theoplayer/flutter/guides/picture-in-picture"}}'),r=n("85893"),s=n("50065");let o={slug:"/flutter/guides/limitations"},l="Limitations and Known Issues",a={},d=[{value:"Platform support",id:"platform-support",level:2},{value:"Smart TV support",id:"smart-tv-support",level:3},{value:"Platform differences",id:"platform-differences",level:2},{value:"Version limitations",id:"version-limitations",level:2},{value:"UI",id:"ui",level:2},{value:"Missing features",id:"missing-features",level:2}];function u(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"limitations-and-known-issues",children:"Limitations and Known Issues"})}),"\n",(0,r.jsx)(t.p,{children:"This sections lists any limitations and known issues in the current package version."}),"\n",(0,r.jsx)(t.h2,{id:"platform-support",children:"Platform support"}),"\n",(0,r.jsx)(t.p,{children:"THEOplayer Flutter SDK is capable of running on"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"iOS 13 and above"}),"\n",(0,r.jsx)(t.li,{children:"Android 5 and above"}),"\n",(0,r.jsx)(t.li,{children:"Mainstream web browsers (Firefox 120+, Chrome 119+, Safari 17+, Microsoft Edge 119+)"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"However, it is not optimized for those devices."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"For the best experience, we suggest to target"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"iOS 14 and above"}),"\n",(0,r.jsx)(t.li,{children:"Android 10 and above"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In a later phase, we will optimize the SDKs for lower operating system versions as much as possible."}),"\n",(0,r.jsx)(t.h3,{id:"smart-tv-support",children:"Smart TV support"}),"\n",(0,r.jsxs)(t.p,{children:["THEOplayer Flutter SDK ",(0,r.jsx)(t.strong,{children:"officially doesn't support Smart TVs"}),".\nHowever, if your application is compiled for WEB, it should be able to run on modern Smart TVs (like Tizen 7+ and WebOS 23+) with smaller modifications on how the webapp loads the Flutter library."]}),"\n",(0,r.jsx)(t.p,{children:"Supporting Smart TVs is not a priority for the THEOplayer Flutter SDK (yet)."}),"\n",(0,r.jsx)(t.h2,{id:"platform-differences",children:"Platform differences"}),"\n",(0,r.jsxs)(t.p,{children:["The underlying native platform SDKs have different feature set.\nFirst check the Dart documentation if you see behaviour differences on certain platforms.\nWe try to keep the documentation in sync as much as possible.\nIf you see no difference mentioned in behaviour, please consult with the ",(0,r.jsx)(t.a,{href:"https://www.theoplayer.com/docs/theoplayer/",children:"native SDK documentations"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"version-limitations",children:"Version limitations"}),"\n",(0,r.jsx)(t.p,{children:"THEOplayer Flutter SDK only compatible with THEOplayer 6.x and above."}),"\n",(0,r.jsx)(t.h2,{id:"ui",children:"UI"}),"\n",(0,r.jsx)(t.p,{children:"Currently, THEOplayer Flutter SDK is completely chromeless, the UI needs to be implemented on top of the public APIs on the Flutter level."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"example"})," project within the SDK package contains a sample UI."]}),"\n",(0,r.jsx)(t.h2,{id:"missing-features",children:"Missing features"}),"\n",(0,r.jsx)(t.p,{children:"THEOplayer Flutter SDK is not in feature parity yet with the native SDKs, new features will be added continuously."}),"\n",(0,r.jsxs)(t.p,{children:["For the current feature list, please visit the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/theoplayer/getting-started/frameworks/flutter/getting-started",children:"README"})," page."]})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var i=n(67294);let r={},s=i.createContext(r);function o(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);