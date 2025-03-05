"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["82383"],{99144:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"external/flutter-theoplayer-sdk/flutter_theoplayer_sdk/CHANGELOG","title":"Changelog","description":"7.3.1","source":"@site/theoplayer_versioned_docs/version-v7/external/flutter-theoplayer-sdk/flutter_theoplayer_sdk/CHANGELOG.md","sourceDirName":"external/flutter-theoplayer-sdk/flutter_theoplayer_sdk","slug":"/flutter/changelog","permalink":"/documentation/pr-preview/pr-228/theoplayer/v7/flutter/changelog","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/-/flutter_theoplayer_sdk/CHANGELOG.md","tags":[],"version":"v7","frontMatter":{"slug":"/flutter/changelog","title":"Changelog","sidebar_custom_props":{"icon":"\uD83D\uDCF0"},"toc_min_heading_level":2,"toc_max_heading_level":2},"sidebar":"flutter","previous":{"title":"The THEOplayer component","permalink":"/documentation/pr-preview/pr-228/theoplayer/v7/flutter/guides/theoplayer-component"},"next":{"title":"Knowledge base","permalink":"/documentation/pr-preview/pr-228/theoplayer/v7/knowledge-base/"}}'),l=i("85893"),t=i("50065");let s={slug:"/flutter/changelog",title:"Changelog",sidebar_custom_props:{icon:"\uD83D\uDCF0"},toc_min_heading_level:2,toc_max_heading_level:2},o=void 0,d={},a=[{value:"7.3.1",id:"731",level:2},{value:"7.3.0",id:"730",level:2},{value:"7.0.0",id:"700",level:2},{value:"Versioning changes",id:"versioning-changes",level:3},{value:"1.0.3",id:"103",level:2},{value:"1.0.2",id:"102",level:2},{value:"1.0.1",id:"101",level:2},{value:"1.0.0",id:"100",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"731",children:"7.3.1"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Fixed an issue where playback failed with license error when using Texture-based (SURFACE_TEXTURE, SURFACE_PRODUCER) rendering."}),"\n",(0,l.jsx)(n.li,{children:"Fixed an issue where player lifecycle callbacks were triggered multiple times when using Texture-based (SURFACE_TEXTURE, SURFACE_PRODUCER) rendering."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"730",children:"7.3.0"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Updated THEOplayer to 7.3.0."}),"\n",(0,l.jsxs)(n.li,{children:["Added ",(0,l.jsx)(n.code,{children:"AndroidConfig.viewComposition"})," to support Texture-based rendering."]}),"\n",(0,l.jsxs)(n.li,{children:["Added ",(0,l.jsx)(n.code,{children:"AndroidViewComposition.SURFACE_TEXTURE"})," to use SurfaceTexture on native Android (instead of PlatformViews)."]}),"\n",(0,l.jsxs)(n.li,{children:["Added ",(0,l.jsx)(n.code,{children:"AndroidViewComposition.SURFACE_PRODUCER"})," to use SurfaceProducer on native Android (instead of PlatformViews).","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Only works from ",(0,l.jsx)(n.a,{href:"https://docs.flutter.dev/release/breaking-changes/android-surface-plugins#timeline",children:"Flutter 3.22.0"})]}),"\n",(0,l.jsxs)(n.li,{children:["Supports ",(0,l.jsx)(n.a,{href:"https://docs.flutter.dev/release/breaking-changes/android-surface-plugins#summary",children:"Texture-based rendering with Impeller"})," rendering engine"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Added Support for continuing playback when transitioning the app into background with ",(0,l.jsx)(n.code,{children:"THEOplayer.setAllowBackgroundPlayback(boolean)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Added Fullscreen support with ",(0,l.jsx)(n.code,{children:"THEOplayer.setPresentationMode(PresentationMode)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Deprecated ",(0,l.jsx)(n.code,{children:"AndroidConfig.useHybridComposition"})," in favor of ",(0,l.jsx)(n.code,{children:"AndroidConfig.viewComposition"})," (use ",(0,l.jsx)(n.code,{children:"AndroidViewComposition.HYBRID_COMPOSITION"})," for the previous behaviour)."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"700",children:"7.0.0"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Updated THEOplayer to 7.0.0."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"versioning-changes",children:"Versioning changes"}),"\n",(0,l.jsx)(n.p,{children:"We are updating the version numbering for THEOplayer Flutter SDK to more closely match the underlying native THEOplayer SDKs."}),"\n",(0,l.jsx)(n.p,{children:"Here are the notable changes:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.strong,{children:"major"})," version will be matching the underlying native SDK major version."]}),"\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.strong,{children:"minor"})," version will reflect new features added in THEOplayer Flutter SDK."]}),"\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.strong,{children:"patch"})," version will be increased when there is a need for a hotfix on top of the minor version bump."]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Note: Breaking changes in THEOplayer Flutter SDK will only occur while increasing the ",(0,l.jsx)(n.strong,{children:"major"})," version."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"103",children:"1.0.3"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Updated THEOplayer to 6.10.1."}),"\n",(0,l.jsx)(n.li,{children:"Added and coupled application lifecycle listener."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"102",children:"1.0.2"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Service release, no new features."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"101",children:"1.0.1"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Updated minimum Dart version to 3.3.0."}),"\n",(0,l.jsx)(n.li,{children:"Updated minimum Flutter version to 3.19.0."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"100",children:"1.0.0"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Initial release."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var r=i(67294);let l={},t=r.createContext(l);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);