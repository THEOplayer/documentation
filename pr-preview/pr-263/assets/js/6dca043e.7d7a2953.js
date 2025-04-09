"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["12620"],{5510:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"external/web-connectors/yospace/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer/external/web-connectors/yospace/README.md","sourceDirName":"external/web-connectors/yospace","slug":"/connectors/web/yospace/getting-started","permalink":"/documentation/pr-preview/pr-263/theoplayer/connectors/web/yospace/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-connectors/blob/-/yospace/README.md","tags":[],"version":"current","frontMatter":{"slug":"/connectors/web/yospace/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"web","previous":{"title":"Yospace","permalink":"/documentation/pr-preview/pr-263/theoplayer/connectors/web/yospace"},"next":{"title":"Changelog","permalink":"/documentation/pr-preview/pr-263/theoplayer/connectors/web/yospace/changelog"}}'),o=s("85893"),r=s("50065");let a={slug:"/connectors/web/yospace/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},c="yospace-connector-web",i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Install via npm",id:"install-via-npm",level:3},{value:"Install via yarn",id:"install-via-yarn",level:3},{value:"Usage",id:"usage",level:2}];function p(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"yospace-connector-web",children:"yospace-connector-web"})}),"\n",(0,o.jsx)(n.p,{children:"The Yospace connector provides a Yospace integration for THEOplayer."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["In order to use this connector, a ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/theoplayer",children:"THEOplayer"})," build with a valid license is required. You can use your existing THEOplayer HTML5 SDK license or request yours via ",(0,o.jsx)(n.a,{href:"https://portal.theoplayer.com/",children:"THEOportal"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For setting up a valid Yospace session, the Yospace Ad Management SDK is required. For more information on how to install the Ad Management SDK, please refer to the documentation of ",(0,o.jsx)(n.a,{href:"https://developer.yospace.com/",children:"Yospace"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Remark:"})," This version of the Yospace Connector is compatible with Yospace Ad Management SDK version 3.5.2 or higher. If you still want to use an older Ad Management SDK, please use the connector version 1.4.0."]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["Install using your favorite package manager for Node (such as ",(0,o.jsx)(n.code,{children:"npm"})," or ",(0,o.jsx)(n.code,{children:"yarn"}),"):"]}),"\n",(0,o.jsx)(n.h3,{id:"install-via-npm",children:"Install via npm"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install @theoplayer/yospace-connector-web\n"})}),"\n",(0,o.jsx)(n.h3,{id:"install-via-yarn",children:"Install via yarn"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @theoplayer/yospace-connector-web\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"First you need to add the Yospace connector to your app :"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Add as a regular script"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="path/to/yospace-connector.umd.js"><\/script>\n<script type="text/javascript">\n    const player = new THEOplayer.Player(element, configuration);\n    const yospaceConnector = new THEOplayerYospaceConnector.YospaceConnector(player);\n<\/script>\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Add as an ES2015 module"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<script type="module">\n    import { YospaceConnector } from "path/to/yospace-connector.esm.js";\n    const player = new THEOplayer.Player(element, configuration);\n    const yospaceConnector = new YospaceConnector(player);\n<\/script>\n'})}),"\n",(0,o.jsx)(n.p,{children:"To make use of the Yospace integration, you need to set up a session for your Yospace source :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const source = {\n    sources: [\n        {\n            src: \"YOUR_YOSPACE_SRC\",\n            ssai: {\n                integration: \"yospace\"\n                // If necessary, you can define your streamType.\n                // streamType: 'vod' | 'live' | 'livepause'\n            }\n        }\n    ]\n}\n\nawait yospaceConnector.setupYospaceSession(source);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you want to customize your session, you can also pass your customized ",(0,o.jsx)(n.code,{children:"SessionProperties"})," from the Yospace Ad Management SDK :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// create a new SessionProperties object using the Ad Management SDK.\nconst sessionProperties = new YospaceAdManagement.SessionProperties();\nconst source = {\n    sources: [\n        {\n            src: \"YOUR_YOSPACE_SRC\",\n            ssai: {\n                integration: \"yospace\"\n                // If necessary, you can define your streamType.\n                // streamType: 'vod' | 'live' | 'livepause'\n            }\n        }\n    ]\n}\n\nawait yospaceConnector.setupYospaceSession(source, sessionProperties);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once the setup of the Yospace session is done, you can continue to use the player and the connector will handle everything related to Yospace."})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return a}});var t=s(67294);let o={},r=t.createContext(o);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);