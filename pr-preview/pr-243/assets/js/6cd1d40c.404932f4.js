"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["5457"],{73440:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>o,assets:()=>s,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"connectors/roku/conviva/getting-started-conviva-connector","title":"Getting started with the Conviva Connector for the Roku SDK","description":"Here\'s how to get started integrating the Conviva Connector with the THEOplayer Roku SDK.","source":"@site/theoplayer/connectors/roku/conviva/01-getting-started-conviva-connector.mdx","sourceDirName":"connectors/roku/conviva","slug":"/connectors/roku/conviva/getting-started-conviva-connector","permalink":"/documentation/pr-preview/pr-243/theoplayer/connectors/roku/conviva/getting-started-conviva-connector","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/connectors/roku/conviva/01-getting-started-conviva-connector.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Getting started","sidebar_custom_props":{"icon":"\uD83D\uDE80"}},"sidebar":"roku","previous":{"title":"Conviva","permalink":"/documentation/pr-preview/pr-243/theoplayer/connectors/roku/conviva"},"next":{"title":"API reference","permalink":"/documentation/pr-preview/pr-243/theoplayer/connectors/roku/conviva/API-reference"}}'),r=t("85893"),i=t("50065");let a={sidebar_label:"Getting started",sidebar_custom_props:{icon:"\uD83D\uDE80"}},c="Getting started with the Conviva Connector for the Roku SDK",s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started-with-the-conviva-connector-for-the-roku-sdk",children:"Getting started with the Conviva Connector for the Roku SDK"})}),"\n",(0,r.jsx)(n.p,{children:"Here's how to get started integrating the Conviva Connector with the THEOplayer Roku SDK."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"In order to set up the Conviva Connector in your Roku application, you'll need the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Your Conviva customer key (available in your Conviva Pulse dashboard)"}),"\n",(0,r.jsxs)(n.li,{children:["An app with the THEOPlayer SDK for Roku already integrated, see our ",(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/roku/getting-started/",children:"Getting Started guide"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Optionally for debug and testing, your Conviva Touchstone gateway URL, which should be in the format of ",(0,r.jsx)(n.code,{children:'"https://MY_TOUCHSTONE_DOMAIN.ts-testonly.conviva.com/"'})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["First you must download the THEO Conviva Connector as a component library. Add a ComponentLibrary node to your MainScene.brs file, giving it an id of ",(0,r.jsx)(n.code,{children:"THEOConvivaConnector"})," and providing the URI for the THEOConvivaConnector.pkg:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<ComponentLibrary id="THEOConvivaConnector" uri="https://cdn.myth.theoplayer.com/roku/1.5.0/THEOConvivaConnector.pkg" />\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Then in the Brightscript file for your MainScene, listen for the loading of the ComponentLibrary to complete by observing the ",(0,r.jsx)(n.code,{children:"loadStatus"})," field."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'sub Init()\n    THEOConvivaNode = m.top.findNode("THEOConvivaConnector")\n    THEOConvivaNode.observeField("loadStatus", "onLibraryLoadStatusChanged")\nend sub\n\nsub onLibraryLoadStatusChanged(event as object)\n    THEOConvivaNode = event.getROSGNode()\n\n    if THEOConvivaNode = invalid\n        return\n    end if\n\n    if THEOConvivaNode.loadStatus = "ready"\n		\' Success\n    else if THEOConvivaNode.loadStatus = "failed"\n		? "Failed to load component library, please check URL. "; THEOConvivaNode.uri\n	end if\nend sub\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Add the THEOConvivaConnector component to the SceneGraph file where your THEOPlayer is defined"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<THEOsdk:THEOplayer id="THEOplayer" controls="true" />\n<THEOConvivaConnector:THEOConvivaConnector id="THEOConvivaConnector" />\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Then in the Brightscript file, configure the connector by calling the configure method, passing the player instance and your Conviva customer key."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'m.player = m.top.findNode("THEOPlayer")\nm.convivaConnector = m.top.findNode("THEOConvivaConnector")\nm.convivaConnector.callFunc("configure", m.player, "MY_CUSTOMER_KEY")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["NOTE: that if you want to debug first and use Conviva's Touchstone service to validate your integration, you can include the gateway URL and a debug parameter in the configure call:\n",(0,r.jsx)(n.code,{children:'m.convivaConnector.callFunc("configure", m.player, "MY_CUSTOMER_KEY", "MY_TOUCHSTONE_GATEWAY_URL", true)'})]}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Next, when you start playing the asset, call the ",(0,r.jsx)(n.code,{children:"startSession"})," method and pass it the content metadata for the asset you're playing:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'m.player.source = sourceDescription\ncontentMetadata = {\n    defaultReportingResource: "MyCDN",\n    playerName: "My Player",\n    assetName: "My Asset Name",\n    encodedFramerate: 24\n}\nm.convivaConnector.callFunc("startSession", contentMetadata)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/docs/theoplayer/connectors/roku/conviva/API-reference/",children:"API documentation"})," for more on how to structure the content metadata for Conviva."]}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsxs)(n.li,{children:["If you desire to monitor for CDN changes, you can optionally add a configuration for that after starting the session.\n",(0,r.jsx)(n.code,{children:'m.convivaConnector.callFunc("monitorCdnChanges", { mycdn: ["my-cdn.net"], theo: ["cdn.theoplayer.com"] })'})]}),"\n",(0,r.jsxs)(n.li,{children:["If the content metadata needs to change, you can update it by calling ",(0,r.jsx)(n.code,{children:"setContentInfo"}),". This method accepts partial content metadata:\n",(0,r.jsx)(n.code,{children:'m.convivaConnector.callFunc( "setContentInfo", {assetName: "New Program"})'})]}),"\n",(0,r.jsxs)(n.li,{children:["When the video has stopped playing because it ended or the user exited, end the Conviva session\n",(0,r.jsx)(n.code,{children:'m.convivaConnector.callFunc("endSession")'})]}),"\n",(0,r.jsx)(n.li,{children:"If you are exiting the player screen altogether, and destroying the player, make sure to destroy the connector at the same time, but before calling destroy on the SDK:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'m.convivaConnector.callFunc("destroy")\nm.convivaConnector = invalid\n\nm.player.callFunc("destroy")\nm.player = invalid\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var o=t(67294);let r={},i=o.createContext(r);function a(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);