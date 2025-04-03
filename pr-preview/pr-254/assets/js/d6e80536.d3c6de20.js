"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["22570"],{60520:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>s});var r=JSON.parse('{"id":"getting-started/sdks/roku/migrating-to-theoplayer-9","title":"Migrating to THEOplayer Roku SDK 9.x","description":"This article will guide you through updating from THEOplayer Roku SDK version 9 (from version 1.5.0),","source":"@site/theoplayer/getting-started/01-sdks/09-roku/01-migrating-to-theoplayer-9.md","sourceDirName":"getting-started/01-sdks/09-roku","slug":"/getting-started/sdks/roku/migrating-to-theoplayer-9","permalink":"/documentation/pr-preview/pr-254/theoplayer/getting-started/sdks/roku/migrating-to-theoplayer-9","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/getting-started/01-sdks/09-roku/01-migrating-to-theoplayer-9.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Getting Started on Roku","permalink":"/documentation/pr-preview/pr-254/theoplayer/getting-started/sdks/roku/getting-started"},"next":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-254/theoplayer/how-to-guides/"}}'),o=n("85893"),i=n("50065");let a={},s="Migrating to THEOplayer Roku SDK 9.x",d={},l=[{value:"Verizon Media is not included",id:"verizon-media-is-not-included",level:2},{value:"Update THEOplayer",id:"update-theoplayer",level:2},{value:"Update Connectors to the 9.0 version",id:"update-connectors-to-the-90-version",level:2},{value:"Replace or remove usages of deprecated APIs",id:"replace-or-remove-usages-of-deprecated-apis",level:2},{value:"Update metadata cue parsing and retention",id:"update-metadata-cue-parsing-and-retention",level:2},{value:"Stream resume behavior changes for live content",id:"stream-resume-behavior-changes-for-live-content",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"migrating-to-theoplayer-roku-sdk-9x",children:"Migrating to THEOplayer Roku SDK 9.x"})}),"\n",(0,o.jsx)(t.p,{children:"This article will guide you through updating from THEOplayer Roku SDK version 9 (from version 1.5.0),\nand the changes needed in your code."}),"\n",(0,o.jsx)(t.h2,{id:"verizon-media-is-not-included",children:"Verizon Media is not included"}),"\n",(0,o.jsx)(t.p,{children:"NOTE: If you're using the Verizon Media version of the SDK (including Uplynk SSAI), that functionality has been removed in the 9.0 version of the SDK. The functionality is planned to be re-added in a future release, but is unsupported for 9.0."}),"\n",(0,o.jsx)(t.h2,{id:"update-theoplayer",children:"Update THEOplayer"}),"\n",(0,o.jsxs)(t.p,{children:["Download the new pkg file from ",(0,o.jsx)(t.a,{href:"https://cdn.myth.theoplayer.com/roku/9.0.0/THEOplayerSDK.pkg",children:"https://cdn.myth.theoplayer.com/roku/9.0.0/THEOplayerSDK.pkg"}),". If you're including the pkg file when packaging your application, replace the previous pkg file with the 9.0 pkg file. Note that the file name is no longer ",(0,o.jsx)(t.code,{children:"THEOplayerSDK-default.pkg"}),". It is now ",(0,o.jsx)(t.code,{children:"THEOplayerSDK.pkg"}),". If you're loading the pkg from the remote URL at runtime, change the URL in your ComponentLibrary node to point to the new SDK."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<ComponentLibrary id="THEOsdk" uri="https://cdn.myth.theoplayer.com/roku/9.0.0/THEOplayerSDK.pkg" />\n'})}),"\n",(0,o.jsx)(t.h2,{id:"update-connectors-to-the-90-version",children:"Update Connectors to the 9.0 version"}),"\n",(0,o.jsx)(t.p,{children:"If you are using any of the connectors for Roku, update them to the 9.0 version as well."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<ComponentLibrary id="THEOConvivaConnector" uri="https://cdn.myth.theoplayer.com/roku/9.0.0/THEOConvivaConnector.pkg" />\n<ComponentLibrary id="THEOComscoreConnector" uri="https://cdn.myth.theoplayer.com/roku/9.0.0/THEOComscoreConnector.pkg" />\n'})}),"\n",(0,o.jsx)(t.h2,{id:"replace-or-remove-usages-of-deprecated-apis",children:"Replace or remove usages of deprecated APIs"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Removed ",(0,o.jsx)(t.code,{children:"THEOplayer.configuration"}),". Use ",(0,o.jsx)(t.code,{children:"THEOplayer.configure(configuration as object)"})," instead."]}),"\n",(0,o.jsxs)(t.li,{children:["Removed ",(0,o.jsx)(t.code,{children:"THEOplayer.listener"}),". Use ",(0,o.jsx)(t.code,{children:"THEOplayer.addEventListener"})," instead. Note that the method signature of ",(0,o.jsx)(t.code,{children:"THEOplayer.addEventlistener"})," and ",(0,o.jsx)(t.code,{children:"THEOplayer.removeEventListener"})," have now changed to be:\n",(0,o.jsx)(t.code,{children:"addEventListener(eventType as string, listenerOwner as roSGNode, listener as string)"}),"\n",(0,o.jsx)(t.code,{children:"removeEventListener(eventType as string, listenerOwner as roSGNode, listener as string)"})]}),"\n",(0,o.jsxs)(t.li,{children:["Removed the option to pass an associative array to ",(0,o.jsx)(t.code,{children:"setDestinationRectangle"}),". Instead pass each property individually:\n",(0,o.jsx)(t.code,{children:"setDestinationRectangle(w = 0 as integer, h = 0 as integer, x = 0 as integer, y = 0 as integer)"})]}),"\n",(0,o.jsxs)(t.li,{children:["Removed the Verizon Media integration (",(0,o.jsx)(t.code,{children:"player.verizonMedia"}),"). This functionality is planned to be re-added in a future release."]}),"\n",(0,o.jsxs)(t.li,{children:["Removed ",(0,o.jsx)(t.code,{children:"THEOplayer.skipAds"}),". This functionality is planned to be re-added in a future release."]}),"\n",(0,o.jsxs)(t.li,{children:["Removed ",(0,o.jsx)(t.code,{children:"THEOplayer.playerSuiteVersion"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Removed the ",(0,o.jsx)(t.code,{children:"content"})," property on cues in the metadata track in ",(0,o.jsx)(t.code,{children:"THEOplayer.textTracks"}),". Use ",(0,o.jsx)(t.code,{children:"rawContent"})," instead."]}),"\n",(0,o.jsxs)(t.li,{children:["Removed the ",(0,o.jsx)(t.code,{children:"cues"})," property on tracks in ",(0,o.jsx)(t.code,{children:"THEOplayer.textTracks"}),". Use ",(0,o.jsx)(t.code,{children:"activeCues"})," instead."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"update-metadata-cue-parsing-and-retention",children:"Update metadata cue parsing and retention"}),"\n",(0,o.jsxs)(t.p,{children:["The 9.0 release changes how metadata cues are being emitted from the THEOplayer. The ",(0,o.jsx)(t.code,{children:"content"})," property has been renamed ",(0,o.jsx)(t.code,{children:"rawContent"})," and now returns the raw metadata object that is emitted by the Roku video node. This allows for handling a wider variety of metadata schemas, but it does also move some of the parsing responsibility onto the client layer. Also the ",(0,o.jsx)(t.code,{children:"cues"})," property on metadata tracks has been removed in favor of only exposing the current ",(0,o.jsx)(t.code,{children:"activeCues"}),". The logic on how long to retain cues should currently be done in the client application. In future releases we plan to do more fine tuned parsing of different metadata structures, such as emsg, and also improve the logic on how long cues remain active."]}),"\n",(0,o.jsx)(t.h2,{id:"stream-resume-behavior-changes-for-live-content",children:"Stream resume behavior changes for live content"}),"\n",(0,o.jsxs)(t.p,{children:["When resuming a paused live stream, the behavior now depends on the ",(0,o.jsx)(t.code,{children:"setEnableTrickPlay"})," setting:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["With TrickPlay disabled (",(0,o.jsx)(t.code,{children:"setEnableTrickPlay = false"}),")\nstream automatically seeks to the live position upon resume."]}),"\n",(0,o.jsxs)(t.li,{children:["With TrickPlay enabled (",(0,o.jsx)(t.code,{children:"setEnableTrickPlay = true"}),")\nstream resumes from the pause position by default.\nException: If the pause duration is long enough to cause Roku's buffer overflow (",(0,o.jsx)(t.code,{children:"pauseBufferOverflow = true"}),"), the stream will seek to the live position."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Note: These changes only affect live streams. Video-on-Demand (VoD) stream behavior remains unchanged."})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var r=n(67294);let o={},i=r.createContext(o);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);