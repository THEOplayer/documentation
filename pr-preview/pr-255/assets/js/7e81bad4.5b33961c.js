"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["66421"],{75216:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>a});var r=JSON.parse('{"id":"external/web-connectors/gemius/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer_versioned_docs/version-v8/external/web-connectors/gemius/README.md","sourceDirName":"external/web-connectors/gemius","slug":"/connectors/web/gemius/getting-started","permalink":"/documentation/pr-preview/pr-255/theoplayer/v8/connectors/web/gemius/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-connectors/blob/-/gemius/README.md","tags":[],"version":"v8","frontMatter":{"slug":"/connectors/web/gemius/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}}}'),i=t("85893"),o=t("50065");let s={slug:"/connectors/web/gemius/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},a="gemius-connector-web",c={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Updating program parameters",id:"updating-program-parameters",level:2}];function p(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"gemius-connector-web",children:"gemius-connector-web"})}),"\n",(0,i.jsx)(n.p,{children:"The Gemius connector provides a Gemius integration for THEOplayer."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm install @theoplayer/gemius-connector-web\n"})}),"\n",(0,i.jsx)(n.p,{children:"Load the gplayer.js library from Gemius. There are two options to to this: either you do it synchronously:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\n<script type="text/javascript" src="https://PREFIX.hit.gemius.pl/gplayer.js"><\/script>\n'})}),"\n",(0,i.jsx)(n.p,{children:"... or asynchronously"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<script type=\"text/javascript\">\n\x3c!--//--\x3e<![CDATA[//>\x3c!--\nfunction gemius_pending(i) { window[i] = window[i] || function() {var x = window[i+'_pdata']\n= window[i+'_pdata'] || []; x[x.length]=arguments;};};\ngemius_pending('gemius_init');\nfunction gemius_player_pending(obj,fun) {obj[fun] = obj[fun] || function() {var x =\nwindow['gemius_player_data'] = window['gemius_player_data'] || [];\nx[x.length]=[this,fun,arguments];};};\ngemius_player_pending(window,\"GemiusPlayer\");\ngemius_player_pending(GemiusPlayer.prototype,\"newProgram\");\ngemius_player_pending(GemiusPlayer.prototype,\"newAd\");\ngemius_player_pending(GemiusPlayer.prototype,\"adEvent\");\ngemius_player_pending(GemiusPlayer.prototype,\"programEvent\");\ngemius_player_pending(GemiusPlayer.prototype,\"setVideoObject\");\n(function(d,t) {try {var gt=d.createElement(t),s=d.getElementsByTagName(t)[0],\nl='http'+((location.protocol=='https:')?'s':''); gt.setAttribute('async','async');\ngt.setAttribute('defer','defer'); gt.src=l+'://PREFIX.hit.gemius.pl/gplayer.js';\ns.parentNode.insertBefore(gt,s);} catch (e) {}})(document,'script');\n//--\x3e<!]]>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure you replace ",(0,i.jsx)(n.code,{children:"PREFIX"})," with the short string of letters specifying the\nGemius collecting server. It can be acquired as a part of the tracking code from gemiusPrism\ninterface ( in Settings / Scripts / Streaming Players) or from your local Gemius Tech Support\nDepartment."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"First you need to add the Gemius connector to your app :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add as a regular script"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\n<script type="text/javascript" src="path/to/gemius-connector.umd.js"><\/script>\n<script type="text/javascript">\n    const player = new THEOplayer.Player(element, configuration);\n\n    // Define your configuration for the connector:\n    const gemiusConfig = {\n        gemiusID: \'<your-publisher-id>\',\n        debug: true\n    };\n\n    // Define the initial program parameters:\n    const programParameters = {\n        "programID": "000001",\n        "programName": "Big Buck Bunny (DASH)",\n        "programDuration": 635,\n        "programType": "video",\n        "transmissionType": 1,\n        "programGenre": 4,\n        "series": "Test Content",\n        "programSeason": "season 1",\n        "programProducer": "Blender",\n        "customAttributes": {\n            "intCategory": "Comedy",\n            "intType": "vod",\n            "intStatus": "public"\n        }\n    };\n\n    // Create the GemiusConnector:\n    const gemiusConnector = new THEOplayerGemiusConnector.GemiusConnector(player, gemiusConfig, programParameters);\n<\/script>\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add as an ES2015 module"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script type="module">\n    import {GemiusConnector} from "path/to/gemius-connector.esm.js";\n\n    const player = new THEOplayer.Player(element, configuration);\n\n    // Define your configuration for the connector:\n    const gemiusConfig = {\n        gemiusID: \'<your-publisher-id>\',\n        debug: true\n    };\n\n    // Define the initial program parameters:\n    const programParameters = {\n        "programID": "000001",\n        "programName": "Big Buck Bunny (DASH)",\n        "programDuration": 635,\n        "programType": "video",\n        "transmissionType": 1,\n        "programGenre": 4,\n        "series": "Test Content",\n        "programSeason": "season 1",\n        "programProducer": "Blender",\n        "customAttributes": {\n            "intCategory": "Comedy",\n            "intType": "vod",\n            "intStatus": "public"\n        }\n    };\n\n    // Create the GemiusConnector:\n    const gemiusConnector = new GemiusConnector(player, gemiusConfig, programParameters);\n<\/script>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"updating-program-parameters",children:"Updating program parameters"}),"\n",(0,i.jsx)(n.p,{children:"If the program parameters changed during playback, you can update it with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const newProgramParameters = { ... };\n\ngemiusConnector.update(newProgramParameters);\n"})})]})}function l(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(67294);let i={},o=r.createContext(i);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);