"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["85511"],{14880:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>o,metadata:()=>a,assets:()=>c,toc:()=>l,contentTitle:()=>s});var a=JSON.parse('{"id":"how-to-guides/cast/chromecast/introduction","title":"Introduction","description":"In this section you will learn everything about how THEOplayer works with Chromecast.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/03-cast/01-chromecast/00-introduction.md","sourceDirName":"how-to-guides/03-cast/01-chromecast","slug":"/how-to-guides/cast/chromecast/introduction","permalink":"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/cast/chromecast/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/03-cast/01-chromecast/00-introduction.md","tags":[],"version":"v7","sidebarPosition":0,"frontMatter":{},"sidebar":"roku","previous":{"title":"Segment","permalink":"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/analytics/segment"},"next":{"title":"Connecting from custom Sender applications","permalink":"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications"}}'),i=n("85893"),r=n("50065");let o={},s="Introduction",c={},l=[{value:"API",id:"api",level:2},{value:"Web SDK",id:"web-sdk",level:4},{value:"Android SDK",id:"android-sdk",level:4},{value:"iOS SDK",id:"ios-sdk",level:4},{value:"Related articles",id:"related-articles",level:2},{value:"Sender Applications vs Receiver Applications",id:"sender-applications-vs-receiver-applications",level:2},{value:"Whitelisting Receiver Applications",id:"whitelisting-receiver-applications",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsx)(t.p,{children:"In this section you will learn everything about how THEOplayer works with Chromecast."}),"\n",(0,i.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(t.p,{children:"As a developer, you might need to use the THEOplayer Chromecast API to build a custom Chromecast UI and UX,\nor to dispatch an event to an analytics service, or for workflow purposes."}),"\n",(0,i.jsx)(t.p,{children:"The Chromecast interface is a sub-interface of the Cast interface on THEOplayer Web and on both mobile (Android & iOS) SDKs."}),"\n",(0,i.jsx)(t.p,{children:"The API reference is available through the following links:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Web SDK: ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/Chromecast.html",children:"Chromecast"}),", which inherits from ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/VendorCast.html",children:"VendorCast"})]}),"\n",(0,i.jsxs)(t.li,{children:["Android SDK: ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/android/com/theoplayer/android/api/cast/chromecast/Chromecast.html",children:"Chromecast"})]}),"\n",(0,i.jsxs)(t.li,{children:["iOS SDK: ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/ios/Protocols/Chromecast.html",children:"Chromecast"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Use the API as demonstrated below:"}),"\n",(0,i.jsx)(t.h4,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// const player = new THEOplayer.Player(...)\nconst chromecastState = player.cast.chromecast.state;\nconst isCasting = player.cast.chromecast.casting; // true or false\n// ...\n// if (want to start Chromecast)\nplayer.cast.chromecast.start();\n// ...\n// if (want to stop Chromecast)\nplayer.cast.chromecast.stop();\n// ...\nif (chromecastState != 'unavailable') {\n  // Chromecast is possible\n  player.cast.chromecast.addEventListener('statechange', function (event) {\n    switch (event.state) {\n      case 'connecting':\n        // show Chromecast trying-to-connect icon\n        break;\n      case 'available':\n        // show Chromecast available icon\n        break;\n      case 'connected':\n        // show Chromecast connected icon\n        break;\n      case 'unavailable':\n        // hide Chromecast icon\n        break;\n    }\n  });\n}\n"})}),"\n",(0,i.jsx)(t.h4,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"// Verify the Cast dependency is present in your build.gradle file.\n// Add Cast Integration to the player.\nCastIntegration castIntegration = CastIntegrationFactory.createCastIntegration(theoplayerView);\ntheoplayerView.getPlayer().addIntegration(castIntegration);\n\n// For actions you can use both the THEOplayerView and the CastIntegration object.\ntheoplayerView.getCast().getChromecast().start();\n// or\ncastIntegration.start();\n\n// For listening to events nothing changed.\ntheoplayerView.getCast().getChromecast().addEventListener(ChromecastEventTypes.STATECHANGE, event -> {\n    // See Android section.\n});\n"})}),"\n",(0,i.jsx)(t.h4,{id:"ios-sdk",children:"iOS SDK"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"private func setupTheoplayer() {\n    // player = THEOplayer(...)\n    let chromecastState = theoplayer.cast?.chromecast?.state\n    let isCasting = theoplayer.cast?.chromecast?.casting\n    // ...\n    // if (want to start Chromecast)\n        theoplayer.cast?.chromecast?.start()\n    // if (want to stop Chromecast)\n        theoplayer.cast?.chromecast?.stop()\n    // ...\n    theoplayer.cast?.chromecast?.addEventListener(type: ChromecastEventTypes.STATE_CHANGE, listener: onStateChange)\n}\n\nprivate func onStateChange(event: ChromecastStateChangeEvent) {\n    if (event.state == PlayerCastState.available) {\n        // show Chromecast available icon\n    } else if (event.state == PlayerCastState.connected) {\n        // show Chromecast connected icon\n    } else if (event.state == PlayerCastState.connecting) {\n        // show Chromecast connecting icon\n    } else if (event.state == PlayerCastState.unavailable) {\n       // show Chromecast unavailable icon\n    }\n    print(event.state)\n    print(self.player.cast?.chromecast?.casting)\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications",children:"Connecting from custom Sender applications"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/cast/chromecast/debugging",children:"Debugging"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream",children:"How to configure a different stream to Chromecast"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/cast/chromecast/sending-messages-from-to-sender-to-from-receiver",children:"Sending messages from/to Sender to/from Receiver"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast",children:"Pass subtitle selection on to Chromecast"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",children:"Enable Chromecast on the Sender"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"sender-applications-vs-receiver-applications",children:"Sender Applications vs Receiver Applications"}),"\n",(0,i.jsx)(t.p,{children:"When a viewer is streaming through a Chromecast device, they are actually casting content from a sender application (e.g. an Android application) to a receiver application. A sender application informs a physical Chromecast device which receiver application it should load through an application ID."}),"\n",(0,i.jsxs)(t.p,{children:["If you have implemented THEOplayer in your sender application, you can ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",children:"enable Chromecast"}),". Furthermore, you can also ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender#custom-receiver-app",children:"specify the application ID"})," in your sender application."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Casting approaches",src:n(95845).Z+"",title:"Casting approaches",width:"1056",height:"535"})}),"\n",(0,i.jsx)(t.p,{children:"By specifying the application ID, you implicitly connect it with a type of receiver application. The following three types of receiver applications are common:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Maintainer"}),(0,i.jsx)(t.th,{children:"Info"}),(0,i.jsx)(t.th,{children:"Benefits"}),(0,i.jsx)(t.th,{children:"Disadvantages"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default THEOplayer Receiver Application"}),(0,i.jsx)(t.td,{children:"THEOplayer"}),(0,i.jsxs)(t.td,{children:["This is the default receiver application THEOplayer SDKs will connect with. The app ID of this default THEOplayer receiver application is ",(0,i.jsx)(t.code,{children:"8E80B9CE"}),"."]}),(0,i.jsx)(t.td,{children:"You (i.e. the developer) do not need to do anything extra on the Chromecast receiver application side. You don't need to create a Chromecast receiver, you don't need to register it at, ... - it just works."}),(0,i.jsx)(t.td,{children:"You are limited w.r.t. customizing the UI and integrating custom logic."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Custom THEOplayer Receiver Application"}),(0,i.jsx)(t.td,{children:"Developer + THEOplayer"}),(0,i.jsxs)(t.td,{children:["This is a custom receiver application you can build, and where you integrate the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v7/getting-started/sdks/chromecast/getting-started",children:"THEOplayer Chromecast SDK"}),"."]}),(0,i.jsx)(t.td,{children:"You (i.e. the developer) can adjust the look and feel, and integrate custom logic."}),(0,i.jsx)(t.td,{children:"You need to create a Chromecast receiver, register it, maintain it, ..."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Customer Receiver Application"}),(0,i.jsx)(t.td,{children:"Developer"}),(0,i.jsx)(t.td,{children:"This is a custom receiver application you can build, but without using the THEOplayer Chromecast SDK."}),(0,i.jsx)(t.td,{children:"The THEOplayer Chromecast Receiver SDK is not a dependency."}),(0,i.jsx)(t.td,{children:"You are responsible for building and maintaining the receiver application, and its connection with the various sender applications."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"whitelisting-receiver-applications",children:"Whitelisting Receiver Applications"}),"\n",(0,i.jsxs)(t.p,{children:["Streaming services and products often require you to whitelist domain names to allow playback.\nWhen viewers are casting content to a Chromecast receiver application, your Chromecast device\nwill actually stream the content on a domain name. In other words: CORS and whitelisting/blacklisting policies do apply to Chromecast sessions.\nEnsure that you've whitelisted the domain name which hosts your Chromecast receiver application. (You can look up the domain name of your receiver application at ",(0,i.jsx)(t.a,{href:"https://cast.google.com/publish/#/overview",children:"https://cast.google.com/publish/#/overview"}),".)"]}),"\n",(0,i.jsxs)(t.p,{children:["If you're using the Default THEOplayer Receiver Application you may whitelist ",(0,i.jsx)(t.code,{children:"https://d3ojqkc95d8mrd.cloudfront.net/"}),"."]})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},95845:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/casting-approaches-45dc2983f20d11409d27d3248b57a6ef.png"},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var a=n(67294);let i={},r=a.createContext(i);function o(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);