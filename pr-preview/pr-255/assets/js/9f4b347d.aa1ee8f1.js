"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["93683"],{62156:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"external/react-native-theoplayer/doc/cmcd","title":"Getting started with CMCD on React Native","description":"Media player clients can transmit useful information to Content Delivery Networks (CDNs) with each object request.","source":"@site/theoplayer/external/react-native-theoplayer/doc/cmcd.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/cmcd","permalink":"/documentation/pr-preview/pr-255/theoplayer/getting-started/frameworks/react-native/cmcd","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/cmcd.md","tags":[],"version":"current","frontMatter":{"slug":"/getting-started/frameworks/react-native/cmcd"},"sidebar":"react-native","previous":{"title":"Casting with Chromecast and Airplay","permalink":"/documentation/pr-preview/pr-255/theoplayer/getting-started/frameworks/react-native/cast"},"next":{"title":"Digital Rights Management (DRM)","permalink":"/documentation/pr-preview/pr-255/theoplayer/getting-started/frameworks/react-native/drm"}}'),i=n("85893"),a=n("50065");let s={slug:"/getting-started/frameworks/react-native/cmcd"},o="Getting started with CMCD on React Native",c={},d=[{value:"Usage",id:"usage",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-cmcd-on-react-native",children:"Getting started with CMCD on React Native"})}),"\n",(0,i.jsxs)(t.p,{children:["Media player clients can transmit useful information to Content Delivery Networks (CDNs) with each object request.\nThis implementation supports Common Media Client Data (CMCD) as defined in\n",(0,i.jsx)(t.a,{href:"https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf",children:"CTA-5004"}),", published in September 2020."]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:["To enable CMCD, developers can set the ",(0,i.jsx)(t.code,{children:"cmcd"})," parameter inside a SourceDescription."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const source = {\n  sources: [ /* ... */ ],\n  /* ... */\n  cmcd: {\n    transmissionMode: CmcdTransmissionMode.SDK_DEFAULT\n    /* ... */\n  }\n} as SourceDescription;\nplayer.source = source;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["By specifying the ",(0,i.jsx)(t.code,{children:"transmissionMode"})," as ",(0,i.jsx)(t.code,{children:"SDK_DEFAULT"}),", we let each SDK decide which transmission mode to use:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Web: HTTP query argument"}),"\n",(0,i.jsx)(t.li,{children:"iOS: custom HTTP request header (only option)"}),"\n",(0,i.jsx)(t.li,{children:"Android: HTTP query argument"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"On Web and Android, you can force a specific transmission mode by providing a different value, e.g."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const source = {\n  sources: [ /* ... */ ],\n  /* ... */\n  cmcd: {\n    transmissionMode: CmcdTransmissionMode.HTTP_HEADER\n    /* ... */\n  }\n} as SourceDescription;\nplayer.source = source;\n"})}),"\n",(0,i.jsx)(t.p,{children:"On Web, there are additional configuration options. For more details, visit the API references."}),"\n",(0,i.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Note that CMCD is only supported on iOS 18.0+."}),"\n",(0,i.jsxs)(t.li,{children:["Note that CMCD is only supported with the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-255/theoplayer/getting-started/frameworks/react-native/media3",children:"Media3 integration"})," on Android."]}),"\n",(0,i.jsx)(t.li,{children:"Note that using a custom HTTP header from a web browser user-agent will trigger a preflight OPTIONS request before\neach unique media object request. This will lead to an increased request rate against the server. As a result, for\nCMCD transmissions from web browser user-agents that require CORS-preflighting per URL, the preferred mode of use is\nquery arguments."}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var r=n(67294);let i={},a=r.createContext(i);function s(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);