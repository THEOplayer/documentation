"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["77633"],{38404:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"how-to-guides/web/theolive/getting-started","title":"Getting started with THEOlive on Web","description":"Usage","source":"@site/theoplayer/how-to-guides/web/theolive/00-getting-started.mdx","sourceDirName":"how-to-guides/web/theolive","slug":"/how-to-guides/web/theolive/getting-started","permalink":"/documentation/pr-preview/pr-191/theoplayer/how-to-guides/web/theolive/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/web/theolive/00-getting-started.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"web","previous":{"title":"Getting started with Millicast on Web","permalink":"/documentation/pr-preview/pr-191/theoplayer/how-to-guides/web/millicast/getting-started"},"next":{"title":"Chromecast","permalink":"/documentation/pr-preview/pr-191/theoplayer/how-to-guides/web/theolive/chromecast"}}'),i=t("85893"),o=t("50065");function a(e){let n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.p,{children:"THEOlive delivers broadcast quality live streaming at sub-second latency, enabling interactivity and fan engagement."})}function s(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}let l={},c="Getting started with THEOlive on Web",d={},h=[{value:"Usage",id:"usage",level:2},{value:"Register the service worker",id:"register-the-service-worker",level:3},{value:"Add a THEOlive source",id:"add-a-theolive-source",level:3},{value:"Add configuration",id:"add-configuration",level:3},{value:"More information",id:"more-information",level:2}];function u(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"getting-started-with-theolive-on-web",children:"Getting started with THEOlive on Web"})}),"\n","\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Follow ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-191/theoplayer/getting-started/sdks/web/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your web app or website."]}),"\n",(0,i.jsx)(n.li,{children:"Register the service worker if necessary."}),"\n",(0,i.jsx)(n.li,{children:"Add a THEOlive source to your player's source."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"register-the-service-worker",children:"Register the service worker"}),"\n",(0,i.jsx)(n.p,{children:"On Apple devices running an iOS version lower than 17.1, a service worker needs to be registered to support low\nlatency play-out of THEOlive streams."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function needsServiceWorkerForTHEOlive() {\n  const canPlayMSE = !!(window.MediaSource || window.WebKitMediaSource || window.ManagedMediaSource);\n  const videoElement = document.createElement('video');\n  const canPlayHLS = videoElement.canPlayType && videoElement.canPlayType('application/vnd.apple.mpegURL') !== '';\n  return canPlayHLS && !canPlayMSE;\n}\nif (needsServiceWorkerForTHEOlive()) {\n  await navigator.serviceWorker.register('theoplayer.sw.js');\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The service worker ",(0,i.jsx)(n.code,{children:"theoplayer.sw.js"})," is part of the THEOplayer SDK and needs to be on the same domain and path as the\npage initiating the player."]}),"\n",(0,i.jsx)(n.h3,{id:"add-a-theolive-source",children:"Add a THEOlive source"}),"\n",(0,i.jsxs)(n.p,{children:["After setting up your THEOplayer on your web page, set its source to a ",(0,i.jsx)(n.code,{children:"SourceDescription"})," containing a ",(0,i.jsx)(n.code,{children:"THEOliveSource"}),".\nTake into account that the source must be set after awaiting the registration of the service worker for streams to work\non iOS versions lower than 17.1.\nYou'll need a THEOlive channel ID:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const player = new THEOplayer.Player(element, configuration);\nplayer.source = {\n  sources: {\n    type: 'theolive',\n    src: 'your-channel-id',\n  },\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"add-configuration",children:"Add configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Optionally, you can provide additional configuration to the player, specific for THEOlive streams. To\nconfigure these settings, add a ",(0,i.jsx)(n.code,{children:"theolive"})," property to the player configuration. For an exhaustive list of these options,\nplease visit the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TheoLiveConfiguration.html",children:"documentation"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"var player = new THEOplayer.Player(element, {\n  license: 'your-license',\n  // This is needed for fallback to work properly\n  retryConfiguration: {\n    maxRetries: 6,\n  },\n  theoLive: {\n    externalSessionId: 'my-external-session-id',\n    fallbackEnabled: true,\n  },\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"more-information",children:"More information"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TheoLiveSource.html",children:"API references"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var r=t(67294);let i={},o=r.createContext(i);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);