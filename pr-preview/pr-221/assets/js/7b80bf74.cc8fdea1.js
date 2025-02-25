"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["84872"],{91627:function(e,n,t){t.r(n),t.d(n,{default:()=>v,frontMatter:()=>s,metadata:()=>a,assets:()=>r,toc:()=>l,contentTitle:()=>i});var a=JSON.parse('{"id":"external/web-connectors/conviva/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer/external/web-connectors/conviva/README.md","sourceDirName":"external/web-connectors/conviva","slug":"/connectors/web/conviva/getting-started","permalink":"/documentation/pr-preview/pr-221/theoplayer/connectors/web/conviva/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-connectors/blob/-/conviva/README.md","tags":[],"version":"current","frontMatter":{"slug":"/connectors/web/conviva/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"web","previous":{"title":"Conviva","permalink":"/documentation/pr-preview/pr-221/theoplayer/connectors/web/conviva"},"next":{"title":"Changelog","permalink":"/documentation/pr-preview/pr-221/theoplayer/connectors/web/conviva/changelog"}}'),o=t("85893"),c=t("50065");let s={slug:"/connectors/web/conviva/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},i="conviva-connector-web",r={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Install via npm",id:"install-via-npm",level:3},{value:"Install via yarn",id:"install-via-yarn",level:3},{value:"Usage",id:"usage",level:2},{value:"Usage with Yospace connector",id:"usage-with-yospace-connector",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"conviva-connector-web",children:"conviva-connector-web"})}),"\n",(0,o.jsx)(n.p,{children:"The Conviva connector provides a Conviva integration for THEOplayer."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["In order to use this connector, a ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/theoplayer",children:"THEOplayer"})," build with a valid license is required. You can use your existing THEOplayer HTML5 SDK license or request yours via ",(0,o.jsx)(n.a,{href:"https://portal.theoplayer.com/",children:"THEOportal"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For setting up a valid Conviva session, you must have access to a ",(0,o.jsx)(n.a,{href:"https://pulse.conviva.com/",children:"Conviva developer account"})," with access to a debug or production key."]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["Install using your favorite package manager for Node (such as ",(0,o.jsx)(n.code,{children:"npm"})," or ",(0,o.jsx)(n.code,{children:"yarn"}),"):"]}),"\n",(0,o.jsx)(n.h3,{id:"install-via-npm",children:"Install via npm"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install @theoplayer/conviva-connector-web\n"})}),"\n",(0,o.jsx)(n.h3,{id:"install-via-yarn",children:"Install via yarn"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @theoplayer/conviva-connector-web\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"First you need to define the Conviva metadata and configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"    const convivaMetadata = {\n        ['Conviva.assetName']: 'ASSET_NAME_GOES_HERE',\n        ['Conviva.streamUrl']: 'CUSTOMER_STREAM_URL_GOES_HERE',\n        ['Conviva.streamType']: 'STREAM_TYPE_GOES_HERE', // VOD or LIVE\n        ['Conviva.applicationName']: 'APPLICATION_NAME_GOES_HERE',\n        ['Conviva.viewerId']: 'VIEWER_ID_GOES_HERE'\n    };\n\n    const convivaConfig = {\n        debug: false,\n        gatewayUrl: 'CUSTOMER_GATEWAY_GOES_HERE',\n        customerKey: 'CUSTOMER_KEY_GOES_HERE' // Can be a test or production key.\n    };\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Optionally, you can include device metadata in the ConvivaConfiguration object. Note that ",(0,o.jsx)(n.code,{children:"SCREEN_RESOLUTION_WIDTH"}),", ",(0,o.jsx)(n.code,{children:"SCREEN_RESOLUTION_HEIGHT"})," and ",(0,o.jsx)(n.code,{children:"SCREEN_RESOLUTION_SCALE_FACTOR"})," are the only fields that Conviva will auto-collect on most web-based platforms."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'const exampleDeviceMetadata: ConvivaDeviceMetadata = {\n    [Constants.DeviceMetadata.BRAND]: "Samsung",\n    [Constants.DeviceMetadata.MANUFACTURER]: "Samsung",\n    [Constants.DeviceMetadata.MODEL]: "QE43Q64BAUXXN",\n    [Constants.DeviceMetadata.TYPE]:  Constants.DeviceType.SMARTTV,\n    [Constants.DeviceMetadata.VERSION]: "6.5.0",\n    [Constants.DeviceMetadata.OS_NAME]: "Tizen",\n    [Constants.DeviceMetadata.OS_VERSION]: "6.5.0",\n    [Constants.DeviceMetadata.CATEGORY]: Constants.DeviceCategory.SAMSUNG_TV,\n    [Constants.DeviceMetadata.SCREEN_RESOLUTION_WIDTH]: 3840,\n    [Constants.DeviceMetadata.SCREEN_RESOLUTION_HEIGHT]: 2160,\n    [Constants.DeviceMetadata.SCREEN_RESOLUTION_SCALE_FACTOR]: 1\n}\n\nconvivaMetadata.deviceMetadata = exampleDeviceMetadata\n'})}),"\n",(0,o.jsx)(n.p,{children:"Using these configs you can create the Conviva connector with THEOplayer."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Add as a regular script:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="path/to/conviva-connector.umd.js"><\/script>\n<script type="text/javascript">\n    const player = new THEOplayer.Player(element, configuration);\n    const convivaIntegration = new THEOplayerConvivaConnector.ConvivaConnector(\n            player,\n            convivaMetadata,\n            convivaConfig\n    );\n<\/script>\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Add as an ES2015 module:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<script type="module">\n    import { ConvivaConnector } from "path/to/conviva-connector.esm.js";\n    const player = new THEOplayer.Player(element, configuration);\n    const convivaIntegration = new ConvivaConnector(player, convivaMetadata, convivaConfig);\n<\/script>\n'})}),"\n",(0,o.jsx)(n.p,{children:"The Conviva connector is now ready to start a session once THEOplayer starts playing a source."}),"\n",(0,o.jsxs)(n.p,{children:["Note that the ",(0,o.jsx)(n.code,{children:"convivaMetadata"})," provided to the ",(0,o.jsx)(n.code,{children:"ConvivaConnector"})," constructor is primarily used to pass application specific information to Conviva.\nSource specific metadata can be provided through the connector's ",(0,o.jsx)(n.code,{children:"setContentInfo"})," method.\nThis data does not carry over to the following sources and needs to be set after the ",(0,o.jsx)(n.code,{children:"sourcechange"})," event has been received."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"player.source = exampleSource;\n\nconst onSourceChange = () => {\n    convivaIntegration.setContentInfo(exampleSourceMetadata);\n}\nplayer.addEventListener('sourcechange', onSourceChange);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage-with-yospace-connector",children:"Usage with Yospace connector"}),"\n",(0,o.jsxs)(n.p,{children:["If you have a Yospace SSAI stream and want to also report ad related events to Conviva, you can use this connector in combination with the Yospace connector: ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@theoplayer/yospace-connector-web",children:"@theoplayer/yospace-connector-web"})]}),"\n",(0,o.jsx)(n.p,{children:"After configuring the Yospace connector, can link it to the Conviva connector:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'async function setupYospaceConnector(player) {\n        const source = {\n            sources: [\n                {\n                    src: "https://csm-e-sdk-validation.bln1.yospace.com/csm/extlive/yospace02,hlssample42.m3u8?yo.br=true&yo.av=4",\n                    ssai: {\n                        integration: "yospace"\n                    }\n                }\n            ]\n        };\n        \n        // Create the connectors.\n        const yospace = new THEOplayerYospaceConnector.YospaceConnector(player);\n        const conviva = new THEOplayerConvivaConnector.ConvivaConnector(player, convivaMetadata, convivaConfig);\n    \n        // Link ConvivaConnector with the YospaceConnector.\n        conviva.connect(yospace);\n        \n        // Set the source.\n        await yospace.setupYospaceSession(source);\n    }\n'})})]})}function v(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var a=t(67294);let o={},c=a.createContext(o);function s(e){let n=a.useContext(c);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);