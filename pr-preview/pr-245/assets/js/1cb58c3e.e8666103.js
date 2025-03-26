"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["33240"],{17882:function(e,n,a){a.r(n),a.d(n,{default:()=>c,frontMatter:()=>s,metadata:()=>i,assets:()=>t,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"how-to-guides/web/uplynk/ads","title":"Uplynk Ads","description":"Uplynk offers support for server-side ad-insertion (SSAI).","source":"@site/theoplayer/how-to-guides/web/uplynk/02-ads.md","sourceDirName":"how-to-guides/web/uplynk","slug":"/how-to-guides/web/uplynk/ads","permalink":"/documentation/pr-preview/pr-245/theoplayer/how-to-guides/web/uplynk/ads","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/web/uplynk/02-ads.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"web","previous":{"title":"Preplay","permalink":"/documentation/pr-preview/pr-245/theoplayer/how-to-guides/web/uplynk/preplay"},"next":{"title":"Ping","permalink":"/documentation/pr-preview/pr-245/theoplayer/how-to-guides/web/uplynk/ping"}}'),r=a("85893"),l=a("50065");let s={},d="Uplynk Ads",t={},o=[{value:"Global Configuration",id:"global-configuration",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Uplynk Ads API",id:"uplynk-ads-api",level:2},{value:"Related articles",id:"related-articles",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"uplynk-ads",children:"Uplynk Ads"})}),"\n",(0,r.jsxs)(n.p,{children:["Uplynk offers support for ",(0,r.jsx)(n.a,{href:"https://docs.uplynk.com/docs/ads",children:"server-side ad-insertion"})," (SSAI)."]}),"\n",(0,r.jsx)(n.p,{children:"This article explains how to use the Uplynk Ads API exposed by THEOplayer to hook into these SSAI advertisements.\nAdditionally, this API allows developers to manipulate the ad-related UX and UI."}),"\n",(0,r.jsx)(n.h2,{id:"global-configuration",children:"Global Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The examples below demonstrate how to pass along global configuration for the Uplynk ads. These settings can be overwritten."}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"var player = new THEOplayer.Player(element, {\n  uplynk: {\n    defaultSkipOffset: 2, // Ad breaks added by SSAI are by default skippable after two seconds. Optional and defaults to unskippable.\n    onSeekOverAd: 'play-last', // When seeking over ad breaks, this configuration decides how to snapback and play any missed ad breaks.\n    // Possible values are currently 'play-none', 'play-last' and 'play-all' where 'play-none' is the default.\n  },\n  // ... Other configuration goes here\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"uplynk-ads-api",children:"Uplynk Ads API"}),"\n",(0,r.jsx)(n.admonition,{title:"Deprecation",type:"info",children:(0,r.jsxs)(n.p,{children:["Starting THEOplayer v8.12.0, it is possible to use the regular ",(0,r.jsx)(n.code,{children:"player.ads"})," API for subscribing to Uplynk ad breaks, as described on ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/how-to-guides/ads/how-to-subscribe-to-ad-events",children:"How to subscribe to ad events"}),".\nThe implementation below can be expected to be removed in the future."]})}),"\n",(0,r.jsxs)(n.p,{children:["Specifying a source which contains server-side ads configured through the Uplynk pre-integration will have the player\nexpose an Ads API specific to Uplynk, i.e. on the ",(0,r.jsx)(n.code,{children:"player.uplynk.ads"})," API:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"player.uplynk.ads.adBreaks"}),": Specifies all ad breaks that are currently in the stream by using SSAI through Preplay."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"player.uplynk.ads.currentAdBreak"}),": If applicable, returns the ad break that is currently being played."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"player.uplynk.ads.currentAds"}),": If applicable, returns a list of the current ads being played."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"player.uplynk.ads.skip()"}),": If there is an ad break playing, and it is skippable, skip the ad break to the next content (or next seek point in case of snapback)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Calling the ",(0,r.jsx)(n.code,{children:"player.uplynk.ads.skip()"})," function on a live stream will not have any effect."]}),"\n",(0,r.jsx)(n.p,{children:"In addition, event listeners are available to listen to new ad breaks:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For adbreaks, the following events are defined:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"adbreakbegin"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"adbreakend"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"adbreakskip"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"addadbreak"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"removeadbreak"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For ads, the following events are defined:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"adbegin"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"adchange"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"adend"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"adfirstquartile"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"admidpoint"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"adthirdquartile"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"adcomplete"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Sample source snippet\n\nplayer.uplynk.ads.adBreaks.addEventListener('addadbreak', (event) => {\n  // do something with event.adBreak as it is an ad break added through SSAI, an example:\n  const adBreak = event.adBreak;\n  if (adBreak.duration <= 15) {\n    adBreak.skipOffset = -1; // Do not allow skipping of short ad breaks\n  } else if (adBreak.duration > 60) {\n    adBreak.skipOffset = 10; // Allow skipping of long ad breaks after ten seconds\n  } else {\n    adBreak.skipOffset = 0; // For all other ad breaks, allow immediate skipping\n  }\n  // subscribe to additional events\n  event.adBreak.addEventListener('adbreakbegin', console.log);\n  event.adBreak.addEventListener('adbreakend', console.log);\n  for (var i = 0; i < event.adBreak.ads.length; i++) {\n    event.adBreak.ads[i].addEventListener('adbegin', console.log);\n    event.adBreak.ads[i].addEventListener('adend', console.log);\n  }\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/how-to-guides/web/uplynk/preplay",children:"Uplynk - Preplay"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/how-to-guides/web/uplynk/ping",children:"Uplynk - Ping"})}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return s}});var i=a(67294);let r={},l=i.createContext(r);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);