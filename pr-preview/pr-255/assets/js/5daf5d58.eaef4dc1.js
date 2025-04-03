"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["59971"],{51987:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>i,contentTitle:()=>a});var t=JSON.parse('{"id":"external/android-connector/connectors/uplynk/docs/ads","title":"Uplynk Ads","description":"Uplynk offers support for server-side ad-insertion or in-short SSAI.","source":"@site/theoplayer/external/android-connector/connectors/uplynk/docs/ads.md","sourceDirName":"external/android-connector/connectors/uplynk/docs","slug":"/connectors/android/uplynk/ads","permalink":"/documentation/pr-preview/pr-255/theoplayer/connectors/android/uplynk/ads","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/android-connector/blob/-/connectors/uplynk/docs/ads.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"slug":"/connectors/android/uplynk/ads"},"sidebar":"android","previous":{"title":"Preplay","permalink":"/documentation/pr-preview/pr-255/theoplayer/connectors/android/uplynk/preplay"},"next":{"title":"Ping","permalink":"/documentation/pr-preview/pr-255/theoplayer/connectors/android/uplynk/ping"}}'),o=r("85893"),s=r("50065");let d={sidebar_position:2,slug:"/connectors/android/uplynk/ads"},a="Uplynk Ads",l={},i=[{value:"Global Configuration",id:"global-configuration",level:2},{value:"Uplynk Ads API",id:"uplynk-ads-api",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"uplynk-ads",children:"Uplynk Ads"})}),"\n",(0,o.jsx)(n.p,{children:"Uplynk offers support for server-side ad-insertion or in-short SSAI."}),"\n",(0,o.jsx)(n.p,{children:"This article explains how to use the THEOplayer's Ads APIs to interact with the Uplynk Ads service"}),"\n",(0,o.jsx)(n.h2,{id:"global-configuration",children:"Global Configuration"}),"\n",(0,o.jsx)(n.p,{children:"The examples below demonstrate how to pass along global configuration for Uplynk Ads in the Connector."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val uplynkConfiguration = UplynkConfiguration(defaultSkipOffset: ..., onSeekOverAd: ...)\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"defaultSkipOffset"})," describes how many seconds the user has to wait before an ad is skippable. ",(0,o.jsx)(n.code,{children:"onSeekOverAd"})," controls how the connector behaves when seeking over ads. There are three values: ",(0,o.jsx)(n.code,{children:"PLAY_ALL"}),", ",(0,o.jsx)(n.code,{children:"PLAY_LAST"})," and ",(0,o.jsx)(n.code,{children:"PLAY_NONE"}),". The first option forces playback of all the unwatched ads before the seek point. ",(0,o.jsx)(n.code,{children:"PLAY_LAST"})," forces playback of the last ad before the seek point."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"uplynk-ads-api",children:"Uplynk Ads API"}),"\n",(0,o.jsx)(n.p,{children:"Specifying a source which contains server-side ads configured through Uplynk will have the THEOplayer instance report such ads through its Ads API."}),"\n",(0,o.jsx)(n.p,{children:"Users can use the THEOplayer Ads events to interact with Uplynk Ads:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'player.ads.addEventListener(AdsEventTypes.ADD_AD_BREAK) {\n    Log.d("UplynkConnectorEvents", "ADD_AD_BREAK ")\n}\n\nplayer.ads.addEventListener(AdsEventTypes.AD_BREAK_BEGIN) {\n    Log.d("UplynkConnectorEvents", "AD_BREAK_BEGIN ")\n}\n\nplayer.ads.addEventListener(AdsEventTypes.AD_BEGIN) {\n    Log.d("UplynkConnectorEvents", "AD_BEGIN ")\n}\n\nplayer.ads.addEventListener(AdsEventTypes.AD_FIRST_QUARTILE) {\n    Log.d("UplynkConnectorEvents", "AD_FIRST_QUARTILE ")\n}\n\nplayer.ads.addEventListener(AdsEventTypes.AD_MIDPOINT) {\n    Log.d("UplynkConnectorEvents", "AD_MIDPOINT ")\n}\n\nplayer.ads.addEventListener(AdsEventTypes.AD_THIRD_QUARTILE) {\n    Log.d("UplynkConnectorEvents", "AD_THIRD_QUARTILE ")\n}\n\nplayer.ads.addEventListener(AdsEventTypes.AD_END) {\n    Log.d("UplynkConnectorEvents", "AD_END ")\n}\n\nplayer.ads.addEventListener(AdsEventTypes.AD_BREAK_END) {\n    Log.d("UplynkConnectorEvents", "AD_BREAK_END ")\n}\n\nplayer.ads.addEventListener(AdsEventTypes.AD_ERROR) {\n    Log.d("UplynkConnectorEvents", "AD_ERROR " + it.error)\n}\n\nplayer.ads.addEventListener(AdsEventTypes.AD_SKIP) {\n    Log.d("UplynkConnectorEvents", "AD_SKIP ")\n}\n\nplayer.addEventListener(PlayerEventTypes.ERROR) {\n    Log.d("UplynkConnectorEvents", "ERROR " + it.errorObject)\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Users can also skip Ads through the ",(0,o.jsx)(n.code,{children:"skip"})," API in THEOplayer:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"player.ads.skip()\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Calling the ",(0,o.jsx)(n.code,{children:"player.ads.skip()"})," function on a live stream will not have any effect."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-255/theoplayer/connectors/android/uplynk/preplay",children:"Uplynk - Preplay"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-255/theoplayer/connectors/android/uplynk/ping",children:"Uplynk - Ping"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var t=r(67294);let o={},s=t.createContext(o);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);