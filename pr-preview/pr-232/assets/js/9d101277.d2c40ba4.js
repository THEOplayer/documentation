"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["25888"],{81462:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>r});var a=JSON.parse('{"id":"external/web-connectors/nielsen/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer_versioned_docs/version-v7/external/web-connectors/nielsen/README.md","sourceDirName":"external/web-connectors/nielsen","slug":"/connectors/web/nielsen/getting-started","permalink":"/documentation/pr-preview/pr-232/theoplayer/v7/connectors/web/nielsen/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-connectors/blob/-/nielsen/README.md","tags":[],"version":"v7","frontMatter":{"slug":"/connectors/web/nielsen/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"web","previous":{"title":"Nielsen","permalink":"/documentation/pr-preview/pr-232/theoplayer/v7/connectors/web/nielsen"},"next":{"title":"Changelog","permalink":"/documentation/pr-preview/pr-232/theoplayer/v7/connectors/web/nielsen/changelog"}}'),s=t("85893"),o=t("50065");let i={slug:"/connectors/web/nielsen/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},r="Nielsen Web Connector",l={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuring the connector",id:"configuring-the-connector",level:3},{value:"Passing metadata dynamically (DTVR)",id:"passing-metadata-dynamically-dtvr",level:3},{value:"Passing metadata when setting a source to the player (DCR)",id:"passing-metadata-when-setting-a-source-to-the-player-dcr",level:3}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"nielsen-web-connector",children:"Nielsen Web Connector"})}),"\n",(0,s.jsx)(n.p,{children:"A connector implementing Nielsen with THEOplayer."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install @theoplayer/nielsen-connector-web\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"configuring-the-connector",children:"Configuring the connector"}),"\n",(0,s.jsx)(n.p,{children:"Create the connector by providing the following mandatory parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"THEOplayer"})," instance"]}),"\n",(0,s.jsx)(n.li,{children:"the Nielsen App ID"}),"\n",(0,s.jsx)(n.li,{children:"the channelName for the asset"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"and optionally the following parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.code,{children:"NielsenOptions"})," object"]}),"\n",(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.code,{children:"NielsenConfiguration"})," object (if none is provided, the default configuration disables DCR, enables DTVR and sets the country to US)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { NielsenConnector } from '../../dist/THEOplayerNielsenConnector';\n\nconst appId = '<your app ID>';\nconst channelName = '<your channel name>';\n\n// Non-mandatory options\nconst options: NielsenOptions = {\n    containerId: 'THEOplayer',\n    optout: false\n};\n\n// Non-mandatory configuration (e.g. for DCR tracking with the Czech Republic SDK)\nconst configuration: NielsenConfiguration = {\n    country: NielsenCountry.CZ,\n    enableDTVR: false,\n    enableDCR: true\n};\nconst nielsenConnector = new NielsenConnector(player, appId, channelName, options);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NielsenOptions"})," can have the following fields:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"containerId"})}),(0,s.jsx)(n.td,{children:"HTML DOM element id of the player container."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:" nol_sdkDebug"})}),(0,s.jsx)(n.td,{children:"Enables Debug Mode which allows output to be viewed in console."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"optout"})}),(0,s.jsx)(n.td,{children:"Whether to opt-out of Nielsen Measurement."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"passing-metadata-dynamically-dtvr",children:"Passing metadata dynamically (DTVR)"}),"\n",(0,s.jsxs)(n.p,{children:["The connector allows updating the current asset's metadata at any time. Note that Nielsen's ",(0,s.jsx)(n.a,{href:"https://engineeringportal.nielsen.com/wiki/updateMetadata_(Browser)",children:"documentation"})," prohibits updating of the values for ",(0,s.jsx)(n.code,{children:"type"}),", ",(0,s.jsx)(n.code,{children:"vidtype"})," or ",(0,s.jsx)(n.code,{children:"assetid"})," parameters"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const metadata = {\n    ['channelName']: 'newChannelName',\n    ['customTag1']: 'customValue1',\n    ['customTag2']: 'customValue2'\n};\nnielsenConnector.updateMetadata(metadata);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"passing-metadata-when-setting-a-source-to-the-player-dcr",children:"Passing metadata when setting a source to the player (DCR)"}),"\n",(0,s.jsxs)(n.p,{children:["This can be achieved through the ",(0,s.jsx)(n.code,{children:"updateDCRContentMetadata"})," method, e.g.:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const metadata: NielsenDCRContentMetadataCZ = {\n    assetid: 'cz-500358-98731568435405',\n    program: 'Animated Test Content',\n    title: 'Big Buck Bunny',\n    length: '596',\n    airdate: '20230620 20:00:00',\n    isfullepisode: true,\n    crossId1: '915 954 39504',\n    c2: '651678089925925',\n    segB: '011',\n    adloadtype: AdLoadType.linear,\n    hasAds: HasAds.supports_ads\n};\n\nnielsenConnector.updateDCRContentMetadata(metadata);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that types are included in the package: ",(0,s.jsx)(n.code,{children:"NielsenDCRContentMetadataUS"}),", ",(0,s.jsx)(n.code,{children:"NielsenDCRContentMetadataCZ"}),". Please contact your THEO Technologies representative if you need support for another International DCR SDK."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var a=t(67294);let s={},o=a.createContext(s);function i(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);