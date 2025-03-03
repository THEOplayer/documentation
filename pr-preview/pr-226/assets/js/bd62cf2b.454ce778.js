"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["91395"],{56463:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"external/flutter-theoplayer-sdk/doc/custom-branches","title":"Custom branches","description":"THEOplayer Flutter SDK is built on top of the existing THEOplayer iOS, Android, and Web SDKs. However, not all native SDK features are available in Flutter from the start.","source":"@site/theoplayer/external/flutter-theoplayer-sdk/doc/custom-branches.md","sourceDirName":"external/flutter-theoplayer-sdk/doc","slug":"/flutter/guides/custom-branches","permalink":"/documentation/pr-preview/pr-226/theoplayer/flutter/guides/custom-branches","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/-/doc/custom-branches.md","tags":[],"version":"current","frontMatter":{"slug":"/flutter/guides/custom-branches"},"sidebar":"flutter","previous":{"title":"Creating a minimal demo app","permalink":"/documentation/pr-preview/pr-226/theoplayer/flutter/guides/creating-minimal-app"},"next":{"title":"Using a custom DRM integration","permalink":"/documentation/pr-preview/pr-226/theoplayer/flutter/guides/custom_drm"}}'),o=r("85893"),s=r("50065");let a={slug:"/flutter/guides/custom-branches"},i="Custom branches",l={},c=[{value:"Available custom branches",id:"available-custom-branches",level:2},{value:"How to make and use your own custom fork?",id:"how-to-make-and-use-your-own-custom-fork",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"custom-branches",children:"Custom branches"})}),"\n",(0,o.jsx)(t.p,{children:"THEOplayer Flutter SDK is built on top of the existing THEOplayer iOS, Android, and Web SDKs. However, not all native SDK features are available in Flutter from the start."}),"\n",(0,o.jsx)(t.p,{children:"These features will be gradually introduced to the Flutter SDK based on thoughtful prioritization."}),"\n",(0,o.jsx)(t.p,{children:"We understand that sometimes you may need these features before they are fully implemented on the Flutter side and require a working solution as soon as possible."}),"\n",(0,o.jsxs)(t.p,{children:["To address this need, we introduced custom branches prefixed with ",(0,o.jsx)(t.code,{children:"poc/"}),", showcasing sample implementations of existing native features in a custom Flutter SDK fork. These versions are stable enough to start experimenting with and making necessary modifications if needed."]}),"\n",(0,o.jsx)(t.p,{children:"(Please note that these branches may not always be up-to-date with the latest releases.)"}),"\n",(0,o.jsx)(t.p,{children:"These versions also serve as a starting point for custom integration needs. By examining the source code and reviewing changes commit by commit, you can gain a basic understanding of how to expose additional native THEOplayer APIs to Flutter, especially if you are already familiar with the underlying SDKs."}),"\n",(0,o.jsx)(t.h2,{id:"available-custom-branches",children:"Available custom branches"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Branch"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:(0,o.jsx)("a",{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/tree/poc/in-sdk-chromecast-support-7.x",children:"poc/in-sdk-chromecast-support-7.x"})})}),(0,o.jsx)("td",{children:"Exposing Chromecast capabilities on Android, iOS and Web"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:(0,o.jsx)("a",{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/tree/poc/in-sdk-google-ima-support-7.x",children:"poc/in-sdk-google-ima-support-7.x"})})}),(0,o.jsx)("td",{children:"Exposing Google IMA capabilities on Android and iOS"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-make-and-use-your-own-custom-fork",children:"How to make and use your own custom fork?"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Create a fork of the THEOplayer Flutter SDK repo on ",(0,o.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/",children:"GitHub"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Configure your project to use your forked custom ",(0,o.jsx)(t.a,{href:"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/main/doc/creating-minimal-app.md#option-2-adding-theoplayer-flutter-sdk-as-submodule",children:"THEOplayer SDK as a submodule"})," in your project."]}),"\n",(0,o.jsx)(t.li,{children:"Import THEOplayer and start using it in your application."}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return a}});var n=r(67294);let o={},s=n.createContext(o);function a(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);