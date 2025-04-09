"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["81482"],{82085:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>r,assets:()=>s,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"external/web-connectors/adscript/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer/external/web-connectors/adscript/README.md","sourceDirName":"external/web-connectors/adscript","slug":"/connectors/web/adscript/getting-started","permalink":"/documentation/pr-preview/pr-260/theoplayer/connectors/web/adscript/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-connectors/blob/-/adscript/README.md","tags":[],"version":"current","frontMatter":{"slug":"/connectors/web/adscript/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}}}'),a=t("85893"),i=t("50065");let c={slug:"/connectors/web/adscript/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},o="adscript-connector-web",s={},d=[{value:"Installation",id:"installation",level:2},{value:"npm",id:"npm",level:3},{value:"yarn",id:"yarn",level:3},{value:"Usage",id:"usage",level:2},{value:"Updating metadata",id:"updating-metadata",level:2},{value:"Updating userInfo",id:"updating-userinfo",level:2}];function l(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"adscript-connector-web",children:"adscript-connector-web"})}),"\n",(0,a.jsx)(n.p,{children:"The AdScript connector provides an AdScript integration for THEOplayer."}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["Install using your favorite package manager for Node (such as ",(0,a.jsx)(n.code,{children:"npm"})," or ",(0,a.jsx)(n.code,{children:"yarn"}),"):"]}),"\n",(0,a.jsx)(n.h3,{id:"npm",children:"npm"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @theoplayer/adscript-connector-web\n"})}),"\n",(0,a.jsx)(n.h3,{id:"yarn",children:"yarn"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @theoplayer/adscript-connector-web\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"First you need to add the AdScript connector to your app :"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Add as a regular script"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'\n<script type="text/javascript" src="path/to/adscript-connector.umd.js"><\/script>\n<script type="text/javascript">\n    const player = new THEOplayer.Player(element, configuration);\n\n    // Define your configuration for the connector:\n    const adScriptConfig = {\n        implementationId: \'your-implementation-id\', // Replace this!\n        metadata: {\n            "assetid": "v0000001",\n            "type": "content",\n            "program": "Big Buck Bunny",\n            "title": "Sample Video - Extended",\n            "length": "635",\n            "crossId": "000 111 22222",\n            "livestream": "0",\n            "channelId": "",\n            "attribute": "1"\n        },\n        debug: false\n    }\n\n    // Create the AdScriptConnector:\n    const adScriptConnector = new THEOplayerAdScriptConnector.AdScriptConnector(player, adScriptConfig);\n<\/script>\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Add as an ES2015 module"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'\n<script type="module">\n    import {AdScriptConnector} from "@theoplayer/adscript-connector-web";\n\n    const player = new THEOplayer.Player(element, configuration);\n\n    // Define your configuration for the connector:\n    const adScriptConfig = {\n        implementationId: \'your-implementation-id\', // Replace this!\n        metadata: {\n            "assetid": "v0000001",\n            "type": "content",\n            "program": "Big Buck Bunny",\n            "title": "Sample Video - Extended",\n            "length": "635",\n            "crossId": "000 111 22222",\n            "livestream": "0",\n            "channelId": "",\n            "attribute": "1"\n        },\n        debug: false\n    }\n\n    // Create the AdScriptConnector:\n    const adScriptConnector = new AdScriptConnector(player, adScriptConfig);\n<\/script>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"updating-metadata",children:"Updating metadata"}),"\n",(0,a.jsx)(n.p,{children:"If the metadata has changed during playback, you can update it with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"adScriptConnector.updateMetadata(newMetadata);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"updating-userinfo",children:"Updating userInfo"}),"\n",(0,a.jsx)(n.p,{children:"If the user info has changed during playback, you can update it with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"adScriptConnector.updateUser(i12n);\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var r=t(67294);let a={},i=r.createContext(a);function c(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);