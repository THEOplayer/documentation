"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["47357"],{13201:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>i,default:()=>c,assets:()=>a,toc:()=>d,frontMatter:()=>l});var n=JSON.parse('{"id":"getting-started/sdks/web/how-to-use-vr-using-webxr","title":"How to use WebXR with THEOplayer","description":"This article will show you how to play a VR source in THEOplayer using WebXR. If you are not familiar with","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/01-web/10-how-to-use-vr-using-webxr.md","sourceDirName":"getting-started/01-sdks/01-web","slug":"/getting-started/sdks/web/how-to-use-vr-using-webxr","permalink":"/documentation/pr-preview/pr-167/theoplayer/v4/getting-started/sdks/web/how-to-use-vr-using-webxr","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/01-web/10-how-to-use-vr-using-webxr.md","tags":[],"version":"v4","sidebarPosition":10,"frontMatter":{},"sidebar":"web","previous":{"title":"How to play an LCEVC source with THEOplayer","permalink":"/documentation/pr-preview/pr-167/theoplayer/v4/getting-started/sdks/web/how-to-play-an-lcevc-source-with-theoplayer"},"next":{"title":"How to use THEOplayer as a JavaScript module","permalink":"/documentation/pr-preview/pr-167/theoplayer/v4/getting-started/sdks/web/how-to-use-javascript-module"}}'),o=r("85893"),s=r("50065");let l={},i="How to use WebXR with THEOplayer",a={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Pre-requirements",id:"pre-requirements",level:2},{value:"1. You need THEOplayer version 5.0 or greater.",id:"1-you-need-theoplayer-version-50-or-greater",level:4},{value:"2. Your THEOplayer SDK needs to have the <code>vr-webxr</code> feature enabled.",id:"2-your-theoplayer-sdk-needs-to-have-the-vr-webxr-feature-enabled",level:4},{value:"3. You will need the WebXR polyfill for platforms that do not have native support.",id:"3-you-will-need-the-webxr-polyfill-for-platforms-that-do-not-have-native-support",level:4},{value:"Add useWebXR to your PlayerConfiguration",id:"add-usewebxr-to-your-playerconfiguration",level:2},{value:"Setting a VR source",id:"setting-a-vr-source",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"how-to-use-webxr-with-theoplayer",children:"How to use WebXR with THEOplayer"})}),"\n",(0,o.jsxs)(t.p,{children:["This article will show you how to play a VR source in THEOplayer using WebXR. If you are not familiar with\nTHEOplayer, we strongly recommend reading\nthe ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-167/theoplayer/v4/getting-started/sdks/web/getting-started",children:"getting started documentation for web"}),"\nfirst."]}),"\n",(0,o.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"pre-requirements",children:"Pre-requirements"}),"\n",(0,o.jsx)(t.h4,{id:"1-you-need-theoplayer-version-50-or-greater",children:"1. You need THEOplayer version 5.0 or greater."}),"\n",(0,o.jsx)(t.p,{children:"Older versions of THEOplayer will work with regular VR, but not with WebXR."}),"\n",(0,o.jsxs)(t.h4,{id:"2-your-theoplayer-sdk-needs-to-have-the-vr-webxr-feature-enabled",children:["2. Your THEOplayer SDK needs to have the ",(0,o.jsx)(t.code,{children:"vr-webxr"})," feature enabled."]}),"\n",(0,o.jsxs)(t.p,{children:["You can quickly check using ",(0,o.jsx)(t.code,{children:"THEOplayer.features"}),"."]}),"\n",(0,o.jsxs)(t.h4,{id:"3-you-will-need-the-webxr-polyfill-for-platforms-that-do-not-have-native-support",children:["3. You will need the ",(0,o.jsx)(t.a,{href:"https://github.com/immersive-web/webxr-polyfill",children:"WebXR polyfill"})," for platforms that do not have native support."]}),"\n",(0,o.jsx)(t.p,{children:"Notice: The official polyfill has a bug in its rendering. THEOplayer has proposed a fix, but it has not yet merged into\nthe main project. In the meanwhile you can use a patched build from our CDN. We highly recommend you to download this\npatch, since it will no longer be available when the main polyfill is fixed."}),"\n",(0,o.jsx)(t.p,{children:"Add the polyfill to your page:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<script src="//cdn.theoplayer.com/webxr/webxr-polyfill-patched.js"><\/script>\n'})}),"\n",(0,o.jsx)(t.p,{children:"And enable it:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const POLYFILL_CONFIG = {\n  allowCardboardOnDesktop: true,\n};\nnew WebXRPolyfill(POLYFILL_CONFIG);\n"})}),"\n",(0,o.jsx)(t.h2,{id:"add-usewebxr-to-your-playerconfiguration",children:"Add useWebXR to your PlayerConfiguration"}),"\n",(0,o.jsxs)(t.p,{children:["The default behavior for THEOplayer is to use regular VR, so make sure to add the following VR configuration to\nyour ",(0,o.jsx)(t.code,{children:"PlayerConfiguration"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const playerConfig: PlayerConfiguration = {\n  // ...\n  vr: {\n    useWebXR: true,\n  },\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"setting-a-vr-source",children:"Setting a VR source"}),"\n",(0,o.jsx)(t.p,{children:"You can set the following source to test:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"player.source = {\n  sources: {\n    src: '//demo.theoplayer.com/hubfs/videos/natgeo/playlist.m3u8',\n    crossOrigin: 'anonymous',\n  },\n  vr: {\n    panoramaMode: '360',\n    stereoMode: 'none',\n  },\n  poster: '//demo.theoplayer.com/hubfs/videos/natgeo/poster.jpg',\n};\n"})}),"\n",(0,o.jsx)(t.p,{children:"If everything went well, you should now be using WebXR!"})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return l}});var n=r(67294);let o={},s=n.createContext(o);function l(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);