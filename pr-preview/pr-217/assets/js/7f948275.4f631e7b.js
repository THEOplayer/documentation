"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["22133"],{35197:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"external/web-connectors/cmcd/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer_versioned_docs/version-v7/external/web-connectors/cmcd/README.md","sourceDirName":"external/web-connectors/cmcd","slug":"/connectors/web/cmcd/getting-started","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/connectors/web/cmcd/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-connectors/blob/-/cmcd/README.md","tags":[],"version":"v7","frontMatter":{"slug":"/connectors/web/cmcd/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"web","previous":{"title":"CMCD","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/connectors/web/cmcd"},"next":{"title":"Changelog","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/connectors/web/cmcd/changelog"}}'),c=t("85893"),s=t("50065");let o={slug:"/connectors/web/cmcd/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},a="cmcd-connector-web",i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Install via npm",id:"install-via-npm",level:3},{value:"Install via yarn",id:"install-via-yarn",level:3},{value:"Usage",id:"usage",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"cmcd-connector-web",children:"cmcd-connector-web"})}),"\n",(0,c.jsx)(n.p,{children:"A connector between a THEOplayer instance and a Common Media Client Data (CMCD) server for the THEOplayer\nHTML5/Tizen/webOS SDK. This implementation supports CMCD data as defined in CTA-5004, published in September 2020."}),"\n",(0,c.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,c.jsxs)(n.p,{children:["In order to use this connector, a ",(0,c.jsx)(n.a,{href:"https://www.npmjs.com/package/theoplayer",children:"THEOplayer"})," build with a valid license is required. You can use your existing THEOplayer HTML5 SDK license or request yours via ",(0,c.jsx)(n.a,{href:"https://portal.theoplayer.com/",children:"THEOportal"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,c.jsxs)(n.p,{children:["Install using your favorite package manager for Node (such as ",(0,c.jsx)(n.code,{children:"npm"})," or ",(0,c.jsx)(n.code,{children:"yarn"}),"):"]}),"\n",(0,c.jsx)(n.h3,{id:"install-via-npm",children:"Install via npm"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm install @theoplayer/cmcd-connector-web\n"})}),"\n",(0,c.jsx)(n.h3,{id:"install-via-yarn",children:"Install via yarn"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"yarn add @theoplayer/cmcd-connector-web\n"})}),"\n",(0,c.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,c.jsx)(n.p,{children:"First you need to add the CMCD connector to your app :"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Add as a regular script"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="path/to/cmcd-connector.umd.js"><\/script>\n<script type="text/javascript">\n  const player = new THEOplayer.Player(element, playerConfiguration);\n  const connector = THEOplayerCMCDConnector.createCMCDConnector(player);\n<\/script>\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Add as an ES2015 module"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<script type="module">\n    import { createCMCDConnector } from "path/to/cmcd-connector.esm.js";\n    const player = new THEOplayer.Player(element, playerConfiguration);  \n    const connector = createCMCDConnector(player);\n<\/script>\n'})}),"\n",(0,c.jsx)(n.p,{children:"By default, the data is sent via query arguments, but you can configure the transmission mode before creating the CMCD connector. For example, to transmit via HTTP headers:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"regular script"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="path/to/cmcd-connector.umd.js"><\/script>\n<script>\n  const player = new THEOplayer.Player(element, playerConfiguration);\n  const configuration = {\n    transmissionMode: THEOplayerCMCDConnector.TransmissionMode.HTTP_HEADER\n  }\n  const connector = THEOplayerCMCDConnector.createCMCDConnector(player, configuration);\n<\/script>\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"ES2015 module"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<script type="module">\n    import { createCMCDConnector, TransmissionMode } from "path/to/cmcd-connector.esm.js";\n    const player = new THEOplayer.Player(element, playerConfiguration);\n    const configuration = {\n      transmissionMode: TransmissionMode.HTTP_HEADER\n    }\n    const connector = createCMCDConnector(player, configuration);\n<\/script>\n'})}),"\n",(0,c.jsxs)(n.p,{children:["The connector will be automatically destroyed upon destruction of the provided player. When changing the player source and a content ID is\nbeing passed in, this is to be reset through ",(0,c.jsx)(n.code,{children:"reconfigure()"})," as it will not be cleared automatically."]}),"\n",(0,c.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,c.jsx)(n.p,{children:"Note that when native playback is being used, either through THEOplayer's configuration, or due to absence of MSE/EME\nAPIs, the JSON Object transmission mode should be used."}),"\n",(0,c.jsx)(n.p,{children:"Currently, all standardized reserved keys are reported, except:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Object duration (",(0,c.jsx)(n.code,{children:"d"}),")"]}),"\n",(0,c.jsxs)(n.li,{children:["Next object request (",(0,c.jsx)(n.code,{children:"nor"}),")"]}),"\n",(0,c.jsxs)(n.li,{children:["Next range request (",(0,c.jsx)(n.code,{children:"nrr"}),")"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(67294);let c={},s=r.createContext(c);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);