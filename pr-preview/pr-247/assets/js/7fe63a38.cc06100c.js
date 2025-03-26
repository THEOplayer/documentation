"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["52814"],{24591:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>s});var t=JSON.parse('{"id":"how-to-guides/miscellaneous/verizon-media/configuration","title":"Verizon Media Configuration","description":"This article explains what is possible with a Verizon Media Configuration when setting up a THEOplayer instance.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/02-verizon-media/04-configuration.md","sourceDirName":"how-to-guides/07-miscellaneous/02-verizon-media","slug":"/how-to-guides/miscellaneous/verizon-media/configuration","permalink":"/documentation/pr-preview/pr-247/theoplayer/v4/how-to-guides/miscellaneous/verizon-media/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/02-verizon-media/04-configuration.md","tags":[],"version":"v4","sidebarPosition":4,"frontMatter":{},"sidebar":"roku","previous":{"title":"Ping","permalink":"/documentation/pr-preview/pr-247/theoplayer/v4/how-to-guides/miscellaneous/verizon-media/ping"},"next":{"title":"Verizon Media Interface","permalink":"/documentation/pr-preview/pr-247/theoplayer/v4/how-to-guides/miscellaneous/verizon-media/interface"}}'),a=i("85893"),r=i("50065");let o={},s="Verizon Media Configuration",d={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Features",id:"features",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5}];function c(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"verizon-media-configuration",children:"Verizon Media Configuration"})}),"\n",(0,a.jsx)(n.p,{children:"This article explains what is possible with a Verizon Media Configuration when setting up a THEOplayer instance."}),"\n",(0,a.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.63.0)"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.66.0)"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.65.0)"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.66.0)"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,a.jsx)(n.p,{children:"Developers can set a Verizon Media Configuration when creating their video player instance. Through this Verizon Media Configuration, developers can set some UX and UI preferences related to the Verizon Media integration."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"defaultSkipOffset"}),": specifies when an ad break can be skipped. The default value is ",(0,a.jsx)(n.code,{children:"-1"}),", which means that the ad break cannot be skipped."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"onSeekOverAd"}),": specifies what should happen when viewers try to seek over an ad. By default, no ad are played when seeking over ads. As an alternative, you can A) only play the last ad break (before the requested playhead position) or B) play all ad breaks (before the requested playhead position)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ui"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"adBreakMarkers"}),": specifies that a (red) ad break marker should be rendered in the scrub bar. (Enabled by default.)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"assetMarkers"}),": specifies that a (black) asset marker should be rendered in the scrub bar. (Enabled by default.)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"adNotification"}),": specifies that a count-down timer must be rendered when an ad is playing. (Enabled by default.)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"contentNotification"}),": specifies that a count-down timer to the next asset must be rendered when the viewer is close to the transition of another asset of a multi-asset stream. (Enabled by default.)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can toggle this features at ",(0,a.jsx)(n.a,{href:"https://cdn.theoplayer.com/demos/verizon-media/index.html",children:"https://cdn.theoplayer.com/demos/verizon-media/index.html"}),". ",(0,a.jsxs)(n.em,{children:["(Note: technically, this demo doesn't use ",(0,a.jsx)(n.code,{children:"defaultSkipOffset"})," to configure the skip offset. Instead, this demo uses ",(0,a.jsx)(n.code,{children:"player.verizonMedia.ads.adBreaks[<element>].skipOffset"})," to adjust this dynamically at run-time.)"]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"VerizonMediaDemo",src:i(70195).Z+"",title:"Verizon Media Configuration",width:"1898",height:"903"})}),"\n",(0,a.jsx)(n.p,{children:"The examples below demonstrate how to use a Verizon Media Configuration per platform."}),"\n",(0,a.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const player = new THEOplayer.Player(element, {\n    libraryLocation: '...',\n    verizonMedia: { // optional\n        onSeekOverAd: 'play-all', // default to 'play-none'. Other values: 'play-all' and 'play-last'\n        ui: {\n            contentNotification: true, // optional; defaults to true\n            adNotification: true, // optional; defaults to true\n            assetMarkers: true, // optional; defaults to true\n            adBreakMarkers: true, // optional; defaults to true\n        },\n        defaultSkipOffset: 5 // ad break can be skipped after 5 seconds. (defaults to -1)\n    },\n    ...\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Refer to the ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaConfiguration.html",children:"VerizonMediaConfiguration API reference"})," for more information."]}),"\n",(0,a.jsx)(n.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"VerizonMediaUiConfiguration verizonMediaUiConfiguration = new VerizonMediaUiConfiguration.Builder()\n    .assetMarkers(true) // optional; defaults to true\n    .adBreakMarkers(true) // optional; defaults to true\n    .contentNotification(true) // optional; defaults to true\n    .adNotification(true) // optional; defaults to true\n    .build();\nVerizonMediaConfiguration verizonMediaConfiguration = new VerizonMediaConfiguration.Builder()\n    .defaultSkipOffset(5) // optional; defaults to -1 (=unskippable)\n    .skippedAdStrategy(SkippedAdStrategy.PLAY_ALL) // optional; defaults to PLAY_NONE\n    .ui(verizonMediaUiConfiguration)\n    .build();\nTHEOplayerConfig theoplayerConfig = new THEOplayerConfig.Builder()\n    .verizonMediaConfiguration(verizonMediaConfiguration)\n    .build();\nTHEOplayerView theoplayerView = new THEOplayerView(this, theoplayerConfig);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Refer to the documentation at ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/verizonmedia/VerizonMediaConfiguration.html",children:"VerizonMediaConfiguration"})," for more information."]}),"\n",(0,a.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"let theoplayerConfiguration = THEOplayerConfiguration(\n    verizonMedia: VerizonMediaConfiguration(\n        defaultSkipOffset: 15, // optional; defaults to -1 (=unskippable)\n        onSeekOverAd: SkippedAdStrategy.PLAY_LAST, // optional; default to PLAY_NONE\n        ui: VerizonMediaUiConfiguration(\n            contentNotification: true, // optional; default to true\n            adNotification: true, // optional; default to true\n            assetMarkers: true, // optional; default to true\n            adBreakMarkers: true // optional; default to true\n        )\n    )\n)\nlet theoplayer = THEOplayer(configuration: theoplayerConfiguration)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Refer to the documentation at ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Classes/VerizonMediaConfiguration.html",children:"VerizonMediaConfiguration"})," for more information."]}),"\n",(0,a.jsx)(n.h1,{id:"related-articles",children:"Related articles"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-247/theoplayer/v4/how-to-guides/miscellaneous/verizon-media/ads",children:"Verizon Media - Ads"}),": this article zooms in on ",(0,a.jsx)(n.code,{children:"defaultSkipOffset"})," and ``onSeekOverAd`."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-247/theoplayer/v4/how-to-guides/miscellaneous/verizon-media/introduction",children:"Verizon Media - Introduction"}),": this article links to sample Git projects which implement a ",(0,a.jsx)(n.code,{children:"VerizonMediaConfiguration"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},70195:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/VerizonMediaConfiguration-e6131ae47761b09919322b8c26ee3d15.png"},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return o}});var t=i(67294);let a={},r=t.createContext(a);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);