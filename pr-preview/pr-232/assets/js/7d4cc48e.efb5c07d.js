"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["76083"],{41088:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"getting-started/sdks/web/how-to-play-an-lcevc-source-with-theoplayer","title":"How to play an LCEVC source with THEOplayer","description":"This article will show you how to play an LCEVC encoded source in THEOplayer. If you are not familiar with THEOplayer,","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/09-how-to-play-an-lcevc-source-with-theoplayer.md","sourceDirName":"getting-started/01-sdks/01-web","slug":"/getting-started/sdks/web/how-to-play-an-lcevc-source-with-theoplayer","permalink":"/documentation/pr-preview/pr-232/theoplayer/v7/getting-started/sdks/web/how-to-play-an-lcevc-source-with-theoplayer","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/09-how-to-play-an-lcevc-source-with-theoplayer.md","tags":[],"version":"v7","sidebarPosition":9,"frontMatter":{},"sidebar":"web","previous":{"title":"How to get frame-accurate currentTime display in the UI Control bar","permalink":"/documentation/pr-preview/pr-232/theoplayer/v7/getting-started/sdks/web/how-to-get-frame-accurate-currentime-display"},"next":{"title":"How to use WebXR with THEOplayer","permalink":"/documentation/pr-preview/pr-232/theoplayer/v7/getting-started/sdks/web/how-to-use-vr-using-webxr"}}'),s=n("85893"),l=n("50065");let o={},a="How to play an LCEVC source with THEOplayer",i={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Pre-requirements",id:"pre-requirements",level:2},{value:"1. Your THEOplayer SDK needs to have the &#39;lcevc&#39; feature enabled.",id:"1-your-theoplayer-sdk-needs-to-have-the-lcevc-feature-enabled",level:4},{value:"2. You need to include V-Nova&#39;s Decoder Integration Layer (DIL) on the page.",id:"2-you-need-to-include-v-novas-decoder-integration-layer-dil-on-the-page",level:4},{value:"Setting the source",id:"setting-the-source",level:2},{value:"DASH example",id:"dash-example",level:5},{value:"HLS example",id:"hls-example",level:5},{value:"Remarks",id:"remarks",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",h5:"h5",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"how-to-play-an-lcevc-source-with-theoplayer",children:"How to play an LCEVC source with THEOplayer"})}),"\n",(0,s.jsxs)(t.p,{children:["This article will show you how to play an LCEVC encoded source in THEOplayer. If you are not familiar with THEOplayer,\nwe strongly recommend reading the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-232/theoplayer/v7/getting-started/sdks/web/getting-started",children:"getting started documentation for web"}),"\nfirst."]}),"\n",(0,s.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"pre-requirements",children:"Pre-requirements"}),"\n",(0,s.jsx)(t.h4,{id:"1-your-theoplayer-sdk-needs-to-have-the-lcevc-feature-enabled",children:"1. Your THEOplayer SDK needs to have the 'lcevc' feature enabled."}),"\n",(0,s.jsxs)(t.p,{children:["You can quickly check using ",(0,s.jsx)(t.code,{children:"THEOplayer.features"}),". The feature is only available from THEOplayer 4.0 onwards."]}),"\n",(0,s.jsxs)(t.h4,{id:"2-you-need-to-include-v-novas-decoder-integration-layer-dil-on-the-page",children:["2. You need to include V-Nova's ",(0,s.jsx)(t.a,{href:"https://docs.v-nova.com/v-nova/lcevc/sdk/dil",children:"Decoder Integration Layer (DIL)"})," on the page."]}),"\n",(0,s.jsx)(t.p,{children:"This example below uses the latest version of the DIL that is maintained by V-Nova:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/lcevc_dil.js@latest/dist/lcevc_dil.min.js"><\/script>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"setting-the-source",children:"Setting the source"}),"\n",(0,s.jsxs)(t.p,{children:["After your player is correctly configured you can set your LCEVC source, but you need to also include ",(0,s.jsx)(t.code,{children:"lcevc: true"})," on\nthe SourceDescription so that the player knows how to configure the correct playback pipeline:"]}),"\n",(0,s.jsx)(t.h5,{id:"dash-example",children:"DASH example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"player.source = {\n  sources: {\n    type: 'application/dash+xml',\n    src: 'path/to/your/source/master.mpd',\n    lcevc: true,\n  },\n};\n"})}),"\n",(0,s.jsx)(t.h5,{id:"hls-example",children:"HLS example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"player.source = {\n  sources: {\n    type: 'application/x-mpegurl',\n    src: 'path/to/your/source/master.m3u8',\n    lcevc: true,\n  },\n};\n"})}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(t.p,{children:"LCEVC enhanced playback only works on modern browsers that support Media Source Extensions (MSE). If the platform does\nnot support MSE (for example: Safari on iOS), the player will fall back to native playback without LCEVC enhancements."})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(67294);let s={},l=r.createContext(s);function o(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);