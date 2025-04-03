"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["94889"],{35827:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>o,metadata:()=>r,assets:()=>s,toc:()=>h,contentTitle:()=>l});var r=JSON.parse('{"id":"how-to-guides/web/theolive/migrating-from-theolive-player","title":"Migrating from deprecated THEOlive player to THEOplayer on Web","description":"The goal of this guide is to help you migrate from the deprecated theolive player","source":"@site/theoplayer_versioned_docs/version-v8/how-to-guides/web/theolive/01-migrating-from-theolive-player.mdx","sourceDirName":"how-to-guides/web/theolive","slug":"/how-to-guides/web/theolive/migrating-from-theolive-player","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/how-to-guides/web/theolive/migrating-from-theolive-player","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/how-to-guides/web/theolive/01-migrating-from-theolive-player.mdx","tags":[],"version":"v8","sidebarPosition":1,"frontMatter":{},"sidebar":"web","previous":{"title":"Getting started with THEOlive on Web","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/how-to-guides/web/theolive/getting-started"},"next":{"title":"Chromecast","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/how-to-guides/web/theolive/chromecast"}}'),i=t("85893"),a=t("50065");let o={},l="Migrating from deprecated THEOlive player to THEOplayer on Web",s={},h=[{value:"Dependencies",id:"dependencies",level:2},{value:"Setting up a player",id:"setting-up-a-player",level:2},{value:"Loading a channel",id:"loading-a-channel",level:2},{value:"Calling methods and listening to events",id:"calling-methods-and-listening-to-events",level:2},{value:"More information",id:"more-information",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"migrating-from-deprecated-theolive-player-to-theoplayer-on-web",children:"Migrating from deprecated THEOlive player to THEOplayer on Web"})}),"\n",(0,i.jsxs)(n.p,{children:["The goal of this guide is to help you migrate from the deprecated ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@theolive/player",children:"theolive player"}),"\nto the recommended ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/theoplayer",children:"THEOplayer"}),". If you haven't integrated with any player,\nplease follow the ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v8/how-to-guides/web/theolive/getting-started",children:"recommended"})," guide instead of this one."]}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"First remove the old player dependency:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm uninstall @theolive/player\n"})}),"\n",(0,i.jsx)(n.p,{children:"And replace with theoplayer using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm install theoplayer\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-a-player",children:"Setting up a player"}),"\n",(0,i.jsx)(n.p,{children:"Player creation is quite similar, instead of"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const player = new THEOLive.Player(element);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Create the player like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"var player = new THEOplayer.Player(element, {\n  license: 'your-license',\n  // This is needed for fallback to work properly\n  retryConfiguration: {\n    maxRetries: 6,\n  },\n  theoLive: {\n    // these are optional\n    externalSessionId: 'my-external-session-id',\n    fallbackEnabled: true,\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that you now need a license, either use the THEOplayer license you had before, or use the one provided in the\n",(0,i.jsx)(n.a,{href:"https://console.theo.live",children:"THEOlive console"})," when creating a channel."]}),"\n",(0,i.jsx)(n.h2,{id:"loading-a-channel",children:"Loading a channel"}),"\n",(0,i.jsx)(n.p,{children:"After setting up your THEOplayer on your web page, we will set the source to a channel. The old way was calling loadChannel\non the player."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"player.loadChannel('<your-channel-id>').catch(console.error);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["With THEOplayer you just set a ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TheoLiveSource.html",children:"SourceDescription"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"player.source = {\n  sources: {\n    type: 'theolive',\n    src: 'your-channel-id',\n  },\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"calling-methods-and-listening-to-events",children:"Calling methods and listening to events"}),"\n",(0,i.jsxs)(n.p,{children:["Most of the old functionality is right there on THEOplayer and can be found in the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/classes/ChromelessPlayer.html",children:"THEOplayer docs"}),". For THEOlive specific\nAPI, check out ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TheoLiveApi.html",children:"player.theolive"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"more-information",children:"More information"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TheoLiveSource.html",children:"API references"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(67294);let i={},a=r.createContext(i);function o(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);