"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["34253"],{56267:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"how-to-guides/web/uplynk/configuration","title":"Uplynk configuration","description":"This article explains what is possible with an Uplynk configuration when setting up a THEOplayer instance.","source":"@site/theoplayer_versioned_docs/version-v8/how-to-guides/web/uplynk/04-configuration.md","sourceDirName":"how-to-guides/web/uplynk","slug":"/how-to-guides/web/uplynk/configuration","permalink":"/documentation/pr-preview/pr-263/theoplayer/v8/how-to-guides/web/uplynk/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/how-to-guides/web/uplynk/04-configuration.md","tags":[],"version":"v8","sidebarPosition":4,"frontMatter":{},"sidebar":"web","previous":{"title":"Ping","permalink":"/documentation/pr-preview/pr-263/theoplayer/v8/how-to-guides/web/uplynk/ping"},"next":{"title":"Uplynk interface","permalink":"/documentation/pr-preview/pr-263/theoplayer/v8/how-to-guides/web/uplynk/interface"}}'),a=t("85893"),r=t("50065");let o={},s="Uplynk configuration",l={},d=[{value:"Features",id:"features",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"uplynk-configuration",children:"Uplynk configuration"})}),"\n",(0,a.jsx)(n.p,{children:"This article explains what is possible with an Uplynk configuration when setting up a THEOplayer instance."}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,a.jsx)(n.p,{children:"Developers can set an Uplynk configuration when creating their video player instance. Through this configuration, developers can set some UX and UI preferences related to the Uplynk integration."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"defaultSkipOffset"}),": specifies when an ad break can be skipped. The default value is ",(0,a.jsx)(n.code,{children:"-1"}),", which means that the ad break cannot be skipped."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"onSeekOverAd"}),": specifies what should happen when viewers try to seek over an ad. By default, no ad are played when seeking over ads. As an alternative, you can","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"only play the last ad break (before the requested playhead position), or"}),"\n",(0,a.jsx)(n.li,{children:"play all ad breaks (before the requested playhead position)."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ui"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"adBreakMarkers"}),": specifies that a (red) ad break marker should be rendered in the scrub bar. (Enabled by default.)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"assetMarkers"}),": specifies that a (black) asset marker should be rendered in the scrub bar. (Enabled by default.)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"adNotification"}),": specifies that a count-down timer must be rendered when an ad is playing. (Enabled by default.)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"contentNotification"}),": specifies that a count-down timer to the next asset must be rendered when the viewer is close to the transition of another asset of a multi-asset stream. (Enabled by default.)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can toggle this features on ",(0,a.jsx)(n.a,{href:"https://cdn.theoplayer.com/demos/verizon-media/index.html",children:"our demo page"}),". ",(0,a.jsxs)(n.em,{children:["(Note: technically, this demo doesn't use ",(0,a.jsx)(n.code,{children:"defaultSkipOffset"})," to configure the skip offset. Instead, this demo uses ",(0,a.jsx)(n.code,{children:"player.uplynk.ads.adBreaks[<element>].skipOffset"})," to adjust this dynamically at run-time.)"]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"UplynkDemo",src:t(70195).Z+"",title:"Uplynk Configuration",width:"1898",height:"903"})}),"\n",(0,a.jsx)(n.p,{children:"The examples below demonstrate how to use an Uplynk configuration per platform."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const player = new THEOplayer.Player(element, {\n    libraryLocation: '...',\n    uplynk: { // optional\n        onSeekOverAd: 'play-all', // default to 'play-none'. Other values: 'play-all' and 'play-last'\n        ui: {\n            contentNotification: true, // optional; defaults to true\n            adNotification: true, // optional; defaults to true\n            assetMarkers: true, // optional; defaults to true\n            adBreakMarkers: true, // optional; defaults to true\n        },\n        defaultSkipOffset: 5 // ad break can be skipped after 5 seconds. (defaults to -1)\n    },\n    ...\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Refer to the ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/UplynkConfiguration.html",children:"UplynkConfiguration API reference"})," for more information."]}),"\n",(0,a.jsx)(n.h1,{id:"related-articles",children:"Related articles"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v8/how-to-guides/web/uplynk/ads",children:"Uplynk - Ads"}),": this article zooms in on ",(0,a.jsx)(n.code,{children:"defaultSkipOffset"})," and ``onSeekOverAd`."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v8/how-to-guides/web/uplynk/introduction",children:"Uplynk - Introduction"}),": this article links to sample Git projects which implement an ",(0,a.jsx)(n.code,{children:"UplynkConfiguration"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},70195:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/VerizonMediaConfiguration-e6131ae47761b09919322b8c26ee3d15.png"},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(67294);let a={},r=i.createContext(a);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);