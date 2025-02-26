"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["21235"],{82001:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>a});var r=JSON.parse('{"id":"how-to-guides/android/cmcd/getting-started","title":"Getting started with CMCD on Android","description":"Usage","source":"@site/theoplayer/how-to-guides/android/cmcd/getting-started.mdx","sourceDirName":"how-to-guides/android/cmcd","slug":"/how-to-guides/android/cmcd/getting-started","permalink":"/documentation/pr-preview/pr-223/theoplayer/how-to-guides/android/cmcd/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/android/cmcd/getting-started.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"android","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-223/theoplayer/how-to-guides/objective-C/introduction"},"next":{"title":"Getting started with Media3 on Android","permalink":"/documentation/pr-preview/pr-223/theoplayer/how-to-guides/android/media3/getting-started"}}'),i=n("85893"),o=n("50065"),d=n("99434");let s={},a="Getting started with CMCD on Android",c={},u=[...d.d$,{value:"Usage",id:"usage",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-cmcd-on-android",children:"Getting started with CMCD on Android"})}),"\n","\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.p,{children:"To enable CMCD, developers can add a CMCDTransmissionMode inside a SourceDescription."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'TypedSource typedSource = new TypedSource.Builder("<HLS_STREAM_URL>")\n    .cmcdTransmissionMode(CMCDTransmissionMode.HTTP_HEADER)\n    .build();\nSourceDescription sourceDescription = new SourceDescription.Builder(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,i.jsx)(t.p,{children:"The preferred mode of transmission for HTTP requests is to use custom headers, but you can configure the transmission mode when creating the CMCD source. For example, to transmit via query arguments:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'TypedSource typedSource = new TypedSource.Builder("<HLS_STREAM_URL>")\n    .cmcdTransmissionMode(CMCDTransmissionMode.QUERY_ARGUMENT)\n    .build();\nSourceDescription sourceDescription = new SourceDescription.Builder(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(t.p,{children:"Note that CMCD is only supported with the Media3 integration."})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},99434:function(e,t,n){n.d(t,{ZP:function(){return s},d$:function(){return o}});var r=n(85893),i=n(50065);let o=[];function d(e){let t={a:"a",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(t.p,{children:["Media player clients can transmit useful information to Content Delivery Networks (CDNs) with each object request.\nThis implementation supports Common Media Client Data (CMCD) as defined in\n",(0,r.jsx)(t.a,{href:"https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf",children:"CTA-5004"}),", published in September 2020."]})}function s(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return d}});var r=n(67294);let i={},o=r.createContext(i);function d(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);