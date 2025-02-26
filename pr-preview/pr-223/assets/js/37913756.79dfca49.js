"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["16764"],{62495:function(e,t,n){n.d(t,{ZP:function(){return s},d$:function(){return o}});var i=n(85893),r=n(50065);let o=[];function a(e){let t={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://dolby.io/products/real-time-streaming/",children:"Dolby Millicast"})," delivers broadcast quality live streaming\nat sub-second latency, enabling interactivity and fan engagement.\nUsing the THEOplayer Millicast integration, you can play your Millicast streams directly through THEOplayer."]})}function s(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},71770:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"how-to-guides/web/millicast/getting-started","title":"Getting started with Millicast on Web","description":"Usage","source":"@site/theoplayer/how-to-guides/web/millicast/getting-started.mdx","sourceDirName":"how-to-guides/web/millicast","slug":"/how-to-guides/web/millicast/getting-started","permalink":"/documentation/pr-preview/pr-223/theoplayer/how-to-guides/web/millicast/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/web/millicast/getting-started.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"web","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-223/theoplayer/how-to-guides/objective-C/introduction"},"next":{"title":"Getting started with THEOlive on Web","permalink":"/documentation/pr-preview/pr-223/theoplayer/how-to-guides/web/theolive/getting-started"}}'),r=n("85893"),o=n("50065"),a=n("62495");let s={},l="Getting started with Millicast on Web",c={},d=[...a.d$,{value:"Usage",id:"usage",level:2},{value:"Add a Millicast source",id:"add-a-millicast-source",level:3},{value:"Add configuration",id:"add-configuration",level:3},{value:"More information",id:"more-information",level:2}];function u(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started-with-millicast-on-web",children:"Getting started with Millicast on Web"})}),"\n","\n",(0,r.jsx)(a.ZP,{}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Follow ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-223/theoplayer/getting-started/sdks/web/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your web app or website.\nThe Millicast integration is available in the main ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/theoplayer",children:"theoplayer"})," package on npm."]}),"\n",(0,r.jsx)(t.li,{children:"Add a Millicast source to your player's source."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"add-a-millicast-source",children:"Add a Millicast source"}),"\n",(0,r.jsxs)(t.p,{children:["After setting up your THEOplayer on your web page, set its source to a ",(0,r.jsx)(t.code,{children:"SourceDescription"})," containing a ",(0,r.jsx)(t.code,{children:"MillicastSource"}),".\nYou'll need a Millicast account ID and stream name to identify your Millicast stream:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const player = new THEOplayer.Player(element, configuration);\nplayer.source = {\n  sources: {\n    type: 'millicast',\n    src: 'multiview',\n    streamAccountId: 'k9Mwad',\n    subscriberToken: '<token>', // This is only required for subscribing to secure streams and should be omitted otherwise.\n  },\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"add-configuration",children:"Add configuration"}),"\n",(0,r.jsxs)(t.p,{children:["Optionally, you can provide additional configuration to the source, specific for working with Millicast streams. To\nconfigure these settings, add a ",(0,r.jsx)(t.code,{children:"connectOptions"})," property to the source object and specify the options."]}),"\n",(0,r.jsxs)(t.p,{children:["In the example below, the configuration is used to disable any audio from the Millicast stream.\nFor an exhaustive list of these options, visit the\n",(0,r.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#connect",children:"documentation"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"player.source = {\n  sources: {\n    type: 'millicast',\n    ...,\n    connectOptions: {\n      disableAudio: true,\n      ...\n    }\n  },\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/MillicastSource.html",children:"API references"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.dolby.io/streaming-apis/docs/",children:"Millicast documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var i=n(67294);let r={},o=i.createContext(r);function a(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);