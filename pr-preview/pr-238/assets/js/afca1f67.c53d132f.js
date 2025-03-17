"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["91305"],{1449:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"how-to-guides/web/uplynk/interface","title":"Uplynk interface","description":"This article explains how developers can hook into the Uplynk interface. This interface allows developers to query the available assets and ads in an Uplynk stream, its properties, and subscribe to its events.","source":"@site/theoplayer/how-to-guides/web/uplynk/05-interface.md","sourceDirName":"how-to-guides/web/uplynk","slug":"/how-to-guides/web/uplynk/interface","permalink":"/documentation/pr-preview/pr-238/theoplayer/how-to-guides/web/uplynk/interface","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/web/uplynk/05-interface.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"web","previous":{"title":"Uplynk configuration","permalink":"/documentation/pr-preview/pr-238/theoplayer/how-to-guides/web/uplynk/configuration"},"next":{"title":"What are the Uplynk challenges","permalink":"/documentation/pr-preview/pr-238/theoplayer/faq/what-are-the-uplynk-challenges"}}'),a=t("85893"),i=t("50065");let s={},o="Uplynk interface",l={},d=[{value:"Using the Uplynk interface",id:"using-the-uplynk-interface",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"uplynk-interface",children:"Uplynk interface"})}),"\n",(0,a.jsx)(n.p,{children:"This article explains how developers can hook into the Uplynk interface. This interface allows developers to query the available assets and ads in an Uplynk stream, its properties, and subscribe to its events."}),"\n",(0,a.jsx)(n.h2,{id:"using-the-uplynk-interface",children:"Using the Uplynk interface"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Uplynk"})," interface is exposed through your THEOplayer instance (e.g.: ",(0,a.jsx)(n.code,{children:"player.uplynk"})," for the Web SDK). Through this interface,"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You can retrieve information (e.g. start and stop time) on the available assets (because THEOplayer extracts this information from its integration with the Asset Info and Preplay service offered by Uplynk).","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You can also subscribe ",(0,a.jsx)(n.code,{children:"addasset"})," and ",(0,a.jsx)(n.code,{children:"removeasset"})," events, which can be useful when you need to be informed when the assets become available."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"You can intercept Preplay, Asset Info and Ping responses (because THEOplayer integrates with these services offered by Uplynk)."}),"\n",(0,a.jsxs)(n.li,{children:["You can retrieve information on the available advertisements (because THEOplayer extracts this information from its integration with the Preplay and Ping service offered by Uplynk).","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You can also subscribe to ",(0,a.jsx)(n.code,{children:"addadbreak"}),", ",(0,a.jsx)(n.code,{children:"addad"}),", ",(0,a.jsx)(n.code,{children:"removeadbreak"}),", ... events, which can be useful if you want to know when which state is applicable (e.g. to overlay a custom advertisement countdown-timer)."]}),"\n",(0,a.jsx)(n.li,{children:"You can also adjust the ad skip offset of an ad break."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If you're looking for more information on how to query the available advertisements and how to subscribe to ad events, then refer to ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-238/theoplayer/how-to-guides/web/uplynk/ads",children:"Uplynk Ads"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The examples below provide a basic demonstration of how to use the ",(0,a.jsx)(n.code,{children:"Uplynk"})," interface. The GitHub projects linked at ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-238/theoplayer/how-to-guides/web/uplynk/introduction",children:"Uplynk - Introduction"})," provide more code samples."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const player = new THEOplayer.Player(element, {...});\n// uplynk events\n[\n    'preplayresponse',\n    'pingresponse',\n    'assetinforesponse'\n].forEach(function(e) {\n    player.uplynk.addEventListener(e, console.log);\n});\n// uplynk.assets events\n[\n    'addasset',\n    'removeasset'\n].forEach(function(e) {\n    player.uplynk.assets.addEventListener(e, console.log);\n});\n// uplynk.ads events\n[\n    'addadbreak',\n    'removeadbreak'\n].forEach(function(e) {\n    player.uplynk.ads.adBreaks.addEventListener(e, function (e1) {\n        if (e1.type === \"addadbreak\") {\n            // uplynk.ads.adBreak[i] events\n            [\n                'adbreakbegin',\n                'adbreakend',\n                'adbreakskip',\n                'updateadbreak'\n            ].forEach(function(e) {\n                e1.adBreak.addEventListener(e, console.log);\n                // uplynk.as.adBreak.ads[i] events\n                for (let i = 0; i < e1.adBreak.ads.length; i++) {\n                    [\n                        'adbegin',\n                        'adend',\n                        'adfirstquartile',\n                        'admidpoint',\n                        'adthirdquartile',\n                        'adcomplete'\n                    ].forEach(function(e) {\n                        e1.adBreak.ads[i].addEventListener(e, console.log);\n                    });\n                }\n            });\n        }\n    });\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Refer to the ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/Uplynk.html",children:"Uplynk API reference"})," for more information. Additionally, reviewing ",(0,a.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-html5-sdk/blob/master/reference-apps/verizon-media-app/src/player.js",children:"the player configuration in the demo app"})," helps to understand the ",(0,a.jsx)(n.code,{children:"Uplynk"})," interface."]}),"\n",(0,a.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-238/theoplayer/how-to-guides/web/uplynk/introduction",children:"Uplynk - Introduction"}),": this article links to sample Git projects which query (and subscribe to) the various properties and events offered by the ",(0,a.jsx)(n.code,{children:"Uplynk"})," interface."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-238/theoplayer/how-to-guides/web/uplynk/preplay",children:"Uplynk - Preplay"}),": this article explains how you can use the Uplynk interface to intercept Preplay responses."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-238/theoplayer/how-to-guides/web/uplynk/ads",children:"Uplynk - Ads"}),": this article offers more information on the ",(0,a.jsx)(n.code,{children:"ads"})," parts of the Uplynk interface."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-238/theoplayer/how-to-guides/web/uplynk/ping",children:"Uplynk - Ping"}),": this article explains how you can use the Uplynk interface to intercept Ping responses."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var r=t(67294);let a={},i=r.createContext(a);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);