"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["96141"],{97436:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>o,assets:()=>d,toc:()=>a,contentTitle:()=>i});var o=JSON.parse('{"id":"external/iOS-Connector/Code/Uplynk/docs/ads","title":"Uplynk Ads","description":"Uplynk offers support for server-side ad-insertion or in-short SSAI.","source":"@site/theoplayer/external/iOS-Connector/Code/Uplynk/docs/ads.md","sourceDirName":"external/iOS-Connector/Code/Uplynk/docs","slug":"/connectors/ios/uplynk/ads","permalink":"/documentation/pr-preview/pr-239/theoplayer/connectors/ios/uplynk/ads","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/iOS-Connector/blob/-/Code/Uplynk/docs/ads.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"slug":"/connectors/ios/uplynk/ads"},"sidebar":"ios","previous":{"title":"Preplay","permalink":"/documentation/pr-preview/pr-239/theoplayer/connectors/ios/uplynk/preplay"},"next":{"title":"Ping","permalink":"/documentation/pr-preview/pr-239/theoplayer/connectors/ios/uplynk/ping"}}'),t=s("85893"),r=s("50065");let l={sidebar_position:2,slug:"/connectors/ios/uplynk/ads"},i="Uplynk Ads",d={},a=[{value:"Global Configuration",id:"global-configuration",level:2},{value:"Uplynk Ads API",id:"uplynk-ads-api",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"uplynk-ads",children:"Uplynk Ads"})}),"\n",(0,t.jsx)(n.p,{children:"Uplynk offers support for server-side ad-insertion or in-short SSAI."}),"\n",(0,t.jsx)(n.p,{children:"This article explains how to use the THEOplayer's Ads APIs to interact with the Uplynk Ads service"}),"\n",(0,t.jsx)(n.h2,{id:"global-configuration",children:"Global Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The examples below demonstrate how to pass along global configuration for Uplynk Ads in the Connector."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"let uplynkConfiguration = UplynkConfiguration(defaultSkipOffset: ..., skippedAdStrategy: ...)\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"defaultSkipOffset"})," describes how many seconds the user has to wait before an ad is skippable. ",(0,t.jsx)(n.code,{children:"skippedAdStrategy"})," controls how the connector behaves when seeking over ads. There are three values: ",(0,t.jsx)(n.code,{children:"playAll"}),", ",(0,t.jsx)(n.code,{children:"playLast"})," and ",(0,t.jsx)(n.code,{children:"playNone"}),". The first option forces playback of all the unwatched ads before the seek point. ",(0,t.jsx)(n.code,{children:"playLast"})," forces playback of the last ad before the seek point."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"uplynk-ads-api",children:"Uplynk Ads API"}),"\n",(0,t.jsx)(n.p,{children:"Specifying a source which contains server-side ads configured through Uplynk will have the THEOplayer instance report such ads through its Ads API."}),"\n",(0,t.jsx)(n.p,{children:"Users can use the THEOplayer Ads events to interact with Uplynk Ads:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:' func addAdsEventListeners() {\n        listeners["ADD_AD_BREAK"] = player.ads.addEventListener(type: AdsEventTypes.ADD_AD_BREAK) { [weak self] in\n            os_log("---------------------------------------\x3e")\n            os_log("--\x3e Add Ad Break Event occured: \\($0)")\n            os_log("---------------------------------------\x3e")\n        }\n        \n        listeners["AD_BREAK_BEGIN"] = player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_BEGIN) { [weak self] in\n            os_log("---------------------------------------\x3e")\n            os_log("--\x3e Ad break begin Event occured: \\($0)")\n            os_log("---------------------------------------\x3e")\n        }\n        \n        listeners["AD_BREAK_END"] = player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_END) { [weak self] in\n            os_log("---------------------------------------\x3e")\n            os_log("--\x3e Ad break end Event occured: \\($0)")\n            os_log("---------------------------------------\x3e")\n        }\n        \n        listeners["ADD_AD"] = player.ads.addEventListener(type: AdsEventTypes.ADD_AD) {\n            os_log("---------------------------------------\x3e")\n            os_log("--\x3e Add Ad Event occured: \\($0)")\n            os_log("---------------------------------------\x3e")\n        }\n        \n        listeners["AD_BEGIN"] = player.ads.addEventListener(type: AdsEventTypes.AD_BEGIN) {\n            os_log("---------------------------------------\x3e")\n            os_log("--\x3e Ad Begin Event occured: \\($0)")\n            os_log("---------------------------------------\x3e")\n        }\n        \n        listeners["AD_FIRST_QUARTILE"] = player.ads.addEventListener(type: AdsEventTypes.AD_FIRST_QUARTILE) {\n            os_log("---------------------------------------\x3e")\n            os_log("--\x3e Ad First Quartile Event occured: \\($0)")\n            os_log("---------------------------------------\x3e")\n        }\n        \n        listeners["AD_MIDPOINT"] = player.ads.addEventListener(type: AdsEventTypes.AD_MIDPOINT) {\n            os_log("---------------------------------------\x3e")\n            os_log("--\x3e Ad Mid Point Event occured: \\($0)")\n            os_log("---------------------------------------\x3e")\n        }\n        \n        listeners["AD_THIRD_QUARTILE"] = player.ads.addEventListener(type: AdsEventTypes.AD_THIRD_QUARTILE) {\n            os_log("---------------------------------------\x3e")\n            os_log("--\x3e Ad Third Quartile Event occured: \\($0)")\n            os_log("---------------------------------------\x3e")\n        }\n        \n        listeners["AD_END"] = player.ads.addEventListener(type: AdsEventTypes.AD_END) {\n            os_log("---------------------------------------\x3e")\n            os_log("--\x3e Ad End Event occured: \\($0)")\n            os_log("---------------------------------------\x3e")\n        }\n        \n        listeners["AD_ERROR"] = player.ads.addEventListener(type: AdsEventTypes.AD_ERROR) {\n            os_log("---------------------------------------\x3e")\n            os_log("--\x3e Ad Error Event occured: \\($0.error ?? "")")\n            os_log("---------------------------------------\x3e")\n        }\n        \n        listeners["AD_SKIP"] = player.ads.addEventListener(type: AdsEventTypes.AD_SKIP) {\n            os_log("---------------------------------------\x3e")\n            os_log("--\x3e Ad Skip Event occured: \\($0)")\n            os_log("---------------------------------------\x3e")\n        }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Users can also skip Ads through the ",(0,t.jsx)(n.code,{children:"skip"})," API in THEOplayer:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"player.ads.skip()\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Calling the ",(0,t.jsx)(n.code,{children:"player.ads.skip()"})," function on a live stream will not have any effect."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-239/theoplayer/connectors/ios/uplynk/preplay",children:"Uplynk - Preplay"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-239/theoplayer/connectors/ios/uplynk/ping",children:"Uplynk - Ping"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var o=s(67294);let t={},r=o.createContext(t);function l(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);