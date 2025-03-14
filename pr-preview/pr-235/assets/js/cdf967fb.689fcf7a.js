"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["90633"],{90544:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"connectors/roku/comscore/getting-started-comscore-connector","title":"Getting started with the Comscore Connector for the Roku SDK","description":"Here\'s how to get started integrating the Comscore Connector with the THEOplayer Roku SDK.","source":"@site/theoplayer/connectors/roku/comscore/01-getting-started-comscore-connector.mdx","sourceDirName":"connectors/roku/comscore","slug":"/connectors/roku/comscore/getting-started-comscore-connector","permalink":"/documentation/pr-preview/pr-235/theoplayer/connectors/roku/comscore/getting-started-comscore-connector","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/connectors/roku/comscore/01-getting-started-comscore-connector.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Getting started","sidebar_custom_props":{"icon":"\uD83D\uDE80"}},"sidebar":"roku","previous":{"title":"Comscore","permalink":"/documentation/pr-preview/pr-235/theoplayer/connectors/roku/comscore"},"next":{"title":"API reference","permalink":"/documentation/pr-preview/pr-235/theoplayer/connectors/roku/comscore/API-reference"}}'),r=o("85893"),c=o("50065");let s={sidebar_label:"Getting started",sidebar_custom_props:{icon:"\uD83D\uDE80"}},i="Getting started with the Comscore Connector for the Roku SDK",a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started-with-the-comscore-connector-for-the-roku-sdk",children:"Getting started with the Comscore Connector for the Roku SDK"})}),"\n",(0,r.jsx)(n.p,{children:"Here's how to get started integrating the Comscore Connector with the THEOplayer Roku SDK."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"In order to set up the Comscore Connector in your Roku application, you'll need the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Your Comscore publisher ID and publisher secret (available in your Comscore Direct dashboard under Mobile Apps > Get Tag)."}),"\n",(0,r.jsxs)(n.li,{children:["An app with the THEOPlayer SDK for Roku already integrated, see our ",(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/roku/getting-started/",children:"Getting Started guide"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["First you must download the THEO Comscore Connector as a component library. Add a ComponentLibrary node to your MainScene.brs file, giving it an id of ",(0,r.jsx)(n.code,{children:"THEOComscoreConnector"})," and providing the URI for the THEOComscoreConnector.pkg:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<ComponentLibrary id="THEOComscoreConnector" uri="https://cdn.myth.theoplayer.com/roku/1.5.0/THEOComscoreConnector.pkg" />\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Then in the Brightscript file for your MainScene, listen for the loading of the ComponentLibrary to complete by observing the ",(0,r.jsx)(n.code,{children:"loadStatus"})," field."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'sub Init()\n    THEOComscoreNode = m.top.findNode("THEOComscoreConnector")\n    THEOComscoreNode.observeField("loadStatus", "onLibraryLoadStatusChanged")\nend sub\n\nsub onLibraryLoadStatusChanged(event as object)\n    THEOComscoreNode = event.getROSGNode()\n\n    if THEOComscoreNode = invalid\n        return\n    end if\n\n    if THEOComscoreNode.loadStatus = "ready"\n		\' Success\n    else if THEOComscoreNode.loadStatus = "failed"\n		? "Failed to load component library, please check URL. "; THEOComscoreNode.uri\n	end if\nend sub\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Add the THEOComscoreConnector component to the SceneGraph file where your THEOPlayer is defined"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<THEOsdk:THEOplayer id="THEOplayer" controls="true" />\n<THEOComscoreConnector:THEOComscoreConnector id="THEOComscoreConnector" />\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Then configure the connector by calling the configure method, passing the player instance and your Comscore customer key."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'m.player = m.top.findNode("THEOplayer")\nm.comscoreConnector = m.top.findNode("THEOComscoreConnector")\nm.comscoreConnector.callFunc("configure", m.player, { publisherId: "MY_PUBLISHER_ID", publisherSecret: "MY_PUBLISHER_SECRET", applicationName: "MY_APPLICATION_NAME"})\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Next, when you start playing the asset, call the ",(0,r.jsx)(n.code,{children:"startSession"})," method and pass it the content metadata for the asset you're playing:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'m.player.source = sourceDescription\ncontentMetadata = {\n	adLoadFlag: false,\n	assetId: "myAssetId",\n	c3: "Arbitrary C3 value",\n	c4: "*null",\n	c6: "*null",\n	clipLength: 600,\n	completeEpisodeFlag: true,\n	contentGenre: "Sports",\n	digitalAirDate: "2025-03-04",\n	episodeNumber: "59",\n	episodeSeasonNumber: "5",\n	episodeTitle: "The Game Last Night",\n	programTitle: "The Sports Show",\n	publisherBrandName: "Sports Publisher Network",\n	stationTitle: "KXYZ",\n	tvAirDate: "2025-03-04"\n}\nm.comscoreConnector.callFunc("startSession", contentMetadata)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/docs/theoplayer/connectors/roku/comscore/API-reference/",children:"API documentation"})," for more on how to structure the content metadata for Comscore."]}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsxs)(n.li,{children:["Comscore requests a call to their ",(0,r.jsx)(n.code,{children:"tick"})," method when the main event loop executes. If you update a global field called ",(0,r.jsx)(n.code,{children:"tccTick"}),", the THEOComscoreConnector will automatically observe that field and call ",(0,r.jsx)(n.code,{children:"tick"})," for you. Otherwise, you can manually call the ",(0,r.jsx)(n.code,{children:"sendTick"})," method on the THEOComscoreConnector."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'m.global.addField("tccTick", "integer", false)\nm.global.tccTick = 0\n\nwhile true\n    m.global.tccTick = m.global.tccTick + 1\n    msg = wait(1000, m.port)\n    msgType = type(msg)\n    if msgType = "roSGScreenEvent"\n        if msg.isScreenClosed() then return\n    end if\nend while\n'})}),"\n",(0,r.jsxs)(n.p,{children:["NOTE: the ",(0,r.jsx)(n.code,{children:"wait"})," method is running for 1000ms here, making the ",(0,r.jsx)(n.code,{children:"tccTick"})," field get updated every second. Setting it to 0ms will cause the ",(0,r.jsx)(n.code,{children:"tccTick"})," field to not get updated regularly."]}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsxs)(n.li,{children:["If the content metadata needs to change, you can update it by calling ",(0,r.jsx)(n.code,{children:"update"}),". This method accepts partial content metadata:\n",(0,r.jsx)(n.code,{children:'m.comscoreConnector.callFunc( "update", contentMetadata)'})]}),"\n",(0,r.jsxs)(n.li,{children:["When the video has stopped playing because it ended or the user exited, end the Comscore session\n",(0,r.jsx)(n.code,{children:'m.comscoreConnector.callFunc("endSession")'})]}),"\n",(0,r.jsx)(n.li,{children:"If you are exiting the player screen altogether, and destroying the player, make sure to destroy the connector at the same time, but before calling destroy on the SDK:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'m.comscoreConnector.callFunc("destroy")\nm.comscoreConnector = invalid\n\nm.player.callFunc("destroy")\nm.player = invalid\n'})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return s}});var t=o(67294);let r={},c=t.createContext(r);function s(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);