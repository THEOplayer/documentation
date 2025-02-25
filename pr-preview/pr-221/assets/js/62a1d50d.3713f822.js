"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["61672"],{6673:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"how-to-guides/player/how-do-you-know-when-a-stream-or-ad-is-playing","title":"How do you know when a stream or an advertisement is playing?","description":"This short how-to guide explains how to determine programmatically when the player is playing and whether it is playing a stream or a client-side advertisement. This may be useful if you need to determine different behavior (or UI) relating to the 2 mentioned options.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/09-player/01-how-do-you-know-when-a-stream-or-ad-is-playing.md","sourceDirName":"how-to-guides/09-player","slug":"/how-to-guides/player/how-do-you-know-when-a-stream-or-ad-is-playing","permalink":"/documentation/pr-preview/pr-221/theoplayer/v6/how-to-guides/player/how-do-you-know-when-a-stream-or-ad-is-playing","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/09-player/01-how-do-you-know-when-a-stream-or-ad-is-playing.md","tags":[],"version":"v6","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-221/theoplayer/v6/how-to-guides/player/introduction"},"next":{"title":"How to measure time-to-first-frame?","permalink":"/documentation/pr-preview/pr-221/theoplayer/v6/how-to-guides/player/how-to-measure-time-to-first-frame"}}'),i=t("85893"),a=t("50065");let s={},o="How do you know when a stream or an advertisement is playing?",l={},d=[{value:"SDKs",id:"sdks",level:2},{value:"How to detect an ad playing",id:"how-to-detect-an-ad-playing",level:2},{value:"Code examples",id:"code-examples",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"how-do-you-know-when-a-stream-or-an-advertisement-is-playing",children:"How do you know when a stream or an advertisement is playing?"})}),"\n",(0,i.jsx)(n.p,{children:"This short how-to guide explains how to determine programmatically when the player is playing and whether it is playing a stream or a client-side advertisement. This may be useful if you need to determine different behavior (or UI) relating to the 2 mentioned options."}),"\n",(0,i.jsx)(n.p,{children:"The question above is related to the following questions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"How do you know when a video plays?"}),"\n",(0,i.jsxs)(n.li,{children:["How do I know whether the ",(0,i.jsx)(n.code,{children:"playing"})," event is triggered for an advertisement, or for the main content/stream?"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-detect-an-ad-playing",children:"How to detect an ad playing"}),"\n",(0,i.jsx)(n.p,{children:"There are certainly different ways to do so: it is enough to have a look at your player; or at the Network tab of your dev tools; or even directly at the manifest. Usually, the UI also has telltale signs. But there are many cases in which you may want to determine this programmatically, for example if you are to apply a different UI to your player depending on this factor."}),"\n",(0,i.jsx)(n.h3,{id:"code-examples",children:"Code examples"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"playing"})," event to know when content (or an ad) starts playing. Its event handler is the correct scope to check whether an advertisement is playing through the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/Ads.html#playing",children:(0,i.jsx)(n.code,{children:"player.ads.playing"})})," property."]}),"\n",(0,i.jsx)(n.p,{children:"Let's see some code examples for the various SDKs."}),"\n",(0,i.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function playingEventHandler(event) {\n  var adIsPlaying = player.ads.playing;\n  console.log('PLAYING', adIsPlaying ? 'Advertisement' : 'Content', event);\n}\nplayer.addEventListener('playing', playingEventHandler);\n"})}),"\n",(0,i.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'final EventListener<PlayingEvent> playingEventHandler = new EventListener<PlayingEvent>() {\n    @Override\n    public void handleEvent(PlayingEvent playingEvent) {\n\n        boolean adIsPlaying = tpv.getPlayer().getAds().isPlaying();\n        System.out.println("PLAYING " + (adIsPlaying ? "Advertisement" : "Content"));\n    }\n};\ntpv.getPlayer().addEventListener(PlayerEventTypes.PLAYING, playingEventHandler);\n'})}),"\n",(0,i.jsx)(n.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'self.eventListener = self.theoplayer.addEventListener(type: PlayerEventTypes.PLAYING) { [weak self] event in\n                                      self.theoplayer?.ads.requestPlaying() { (result, _) in\n                                      print("player.ads.playing = ", result!)\n                                      }\n                              }\n'})}),"\n",(0,i.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"This approach helps you detect when client-side ads are playing, but it will not work for server-side ads."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Please refer to ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-221/theoplayer/v6/how-to-guides/player/how-can-we-track-the-first-playing-event",children:"How can we track the first play(ing) event?"})," to read more about capturing the first ",(0,i.jsx)(n.code,{children:"playing"})," event."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/Ads.html#playing",children:"Reference API - Ads.playing property"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#playing",children:"Reference API - playing property"})}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var r=t(67294);let i={},a=r.createContext(i);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);