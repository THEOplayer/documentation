"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["52447"],{18668:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>r,assets:()=>s,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"getting-started/sdks/android/how-to-enable-native-rendering","title":"How to enable experimental native rendering on Android","description":"This how-to guide describes how to implement experimental native rendering using the THEOplayer Legacy Android SDK (4.12.x).","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/04-how-to-enable-native-rendering.md","sourceDirName":"getting-started/01-sdks/02-android","slug":"/getting-started/sdks/android/how-to-enable-native-rendering","permalink":"/documentation/pr-preview/pr-234/theoplayer/v4/getting-started/sdks/android/how-to-enable-native-rendering","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/04-how-to-enable-native-rendering.md","tags":[],"version":"v4","sidebarPosition":4,"frontMatter":{},"sidebar":"android","previous":{"title":"How to couple the native MediaRouteButton to THEOplayer","permalink":"/documentation/pr-preview/pr-234/theoplayer/v4/getting-started/sdks/android/how-to-couple-native-mediaroutebutton"},"next":{"title":"How to do offline Playback with AES-128 Encrypted Streams on Android","permalink":"/documentation/pr-preview/pr-234/theoplayer/v4/getting-started/sdks/android/how-to-do-offline-playback-with-aes-128-encryption"}}'),i=t("85893"),o=t("50065");let a={},d="How to enable experimental native rendering on Android",s={},l=[{value:"Code example",id:"code-example",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"how-to-enable-experimental-native-rendering-on-android",children:"How to enable experimental native rendering on Android"})}),"\n",(0,i.jsx)(n.p,{children:"This how-to guide describes how to implement experimental native rendering using the THEOplayer Legacy Android SDK (4.12.x)."}),"\n",(0,i.jsx)(n.h2,{id:"code-example",children:"Code example"}),"\n",(0,i.jsx)(n.p,{children:"The snippet below configures a source description with THEOplayer which will be rendered natively:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"private void playSourceWithNativeRendering(String src) {\n    tpv.getPlayer().setSource(sourceDescription(\n        typedSource(src)\n            .setNativeRenderingEnabled(true)\n            .build()\n    ).build())\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is an experimental feature and it can only be used with DASH streams. You can find more information about the feature on our API docs ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/source/TypedSource.Builder.html#setNativeRenderingEnabled(boolean)",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This API does not exist on the native Android SDK."})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var r=t(67294);let i={},o=r.createContext(i);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);