"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["88756"],{76278:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>r,metadata:()=>o,assets:()=>l,toc:()=>h,contentTitle:()=>s});var o=JSON.parse('{"id":"faq/what-are-the-uplynk-challenges","title":"What are the Uplynk challenges","description":"The purpose of this article is to group common challenges application developers might encounter when using Uplynk (formerly known as Verizon Media, Edgecast or Edgio) as the back-end.","source":"@site/theoplayer/faq/72-what-are-the-uplynk-challenges.md","sourceDirName":"faq","slug":"/faq/what-are-the-uplynk-challenges","permalink":"/documentation/pr-preview/pr-233/theoplayer/faq/what-are-the-uplynk-challenges","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/72-what-are-the-uplynk-challenges.md","tags":[],"version":"current","sidebarPosition":72,"frontMatter":{},"sidebar":"faq","previous":{"title":"What are the limitations of AirPlay","permalink":"/documentation/pr-preview/pr-233/theoplayer/faq/what-are-the-limitations-of-AirPlay"},"next":{"title":"How to use the Media Session API","permalink":"/documentation/pr-preview/pr-233/theoplayer/faq/how-to-use-media-session-api"}}'),a=t("85893"),i=t("50065");let r={},s="What are the Uplynk challenges",l={},h=[{value:"Why does Chromecast or AirPlay not work?",id:"why-does-chromecast-or-airplay-not-work",level:2},{value:"Why aren&#39;t all video qualities showing up?",id:"why-arent-all-video-qualities-showing-up",level:2},{value:"What should I know before tokenizing my stream?",id:"what-should-i-know-before-tokenizing-my-stream",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"what-are-the-uplynk-challenges",children:"What are the Uplynk challenges"})}),"\n",(0,a.jsxs)(n.p,{children:["The purpose of this article is to group common challenges application developers might encounter when using ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/web/uplynk/introduction",children:"Uplynk"})," (formerly known as Verizon Media, Edgecast or Edgio) as the back-end."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#why-does-chromecast-or-airplay-not-work",children:"Why does Chromecast or AirPlay not work?"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#why-arent-all-video-qualities-showing-up",children:"Why aren't all video qualities showing up?"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#what-should-i-know-before-tokenizing-my-stream",children:"What should I know before tokenizing my stream?"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"why-does-chromecast-or-airplay-not-work",children:"Why does Chromecast or AirPlay not work?"}),"\n",(0,a.jsxs)(n.p,{children:["If you've ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",children:"correctly enabled Chromecast"})," or AirPlay,\nbut you are not getting any playback on your Chromecast or AirPlay device,\nthen a likely cause is your ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/web/uplynk/preplay#using-tokens",children:"tokenization"})," approach."]}),"\n",(0,a.jsx)(n.p,{children:"1/ When you tokenize a URL, you are also specifying an expiration date.\nIt is possible that your expiration date has passed when you initiate the casting session.\nYour stream will no longer be valid when this is the case, and result in unsuccessful casting."}),"\n",(0,a.jsx)(n.p,{children:"The solution? Use an expiration date that is valid for a longer time."}),"\n",(0,a.jsx)(n.p,{children:"2/ An Uplynk token will be attached to one IP address when it's invoked for the first time (i.e. request to the Preplay URL with the token as a query parameter).\nThis could cause problems when either your sender device (i.e. iOS app, Android app, browser) or receiver device (i.e. Chromecast device)\nuses an iPv6 address, because those addresses are unique. (Meaning: the token could be invalid for your IPv6 receiver device because it was already attached to your different IPv4 sender device.)"}),"\n",(0,a.jsx)(n.p,{children:"The solution?"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["You can disable IP address checking by adding ",(0,a.jsx)(n.code,{children:"pp2ip=0"})," to your token (and Preplay parameters)."]}),"\n",(0,a.jsxs)(n.li,{children:["You can implement a ",(0,a.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-google-cast-v3-receiver",children:"custom Chromecast receiver app"})," that generates its own unique token.\n(This however doesn't address the issue on AirPlay, and also gives rise to challenges related to building a custom Chromecast app.)"]}),"\n",(0,a.jsx)(n.li,{children:"You can disable tokenization (if it's not a requirement)."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"why-arent-all-video-qualities-showing-up",children:"Why aren't all video qualities showing up?"}),"\n",(0,a.jsxs)(n.p,{children:["If you notice that THEOplayer doesn't expose all your Uplynk MPEG-DASH video qualities,\nthen the likely culprit is not aggregating the different ",(0,a.jsx)(n.code,{children:"AdaptationSet"}),"s as part of Uplynk's multi-key approach."]}),"\n",(0,a.jsx)(n.p,{children:"The solution?"}),"\n",(0,a.jsxs)(n.p,{children:["Add ",(0,a.jsx)(n.code,{children:"singlevideolicense=1"})," to your Preplay parameters and/or token.\nDoing so will group all qualities to one ",(0,a.jsx)(n.code,{children:"AdaptationSet"})," with one key."]}),"\n",(0,a.jsx)(n.h2,{id:"what-should-i-know-before-tokenizing-my-stream",children:"What should I know before tokenizing my stream?"}),"\n",(0,a.jsxs)(n.p,{children:["Refer to ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/web/uplynk/preplay#using-tokens",children:"Preplay - tokenization"}),"."]})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var o=t(67294);let a={},i=o.createContext(a);function r(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);