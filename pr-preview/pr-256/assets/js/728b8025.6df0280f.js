"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["40240"],{63764:function(e,t,r){r.r(t),r.d(t,{default:()=>c,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"getting-started/sdks/web/migrating-to-theoplayer-9","title":"Migrating to THEOplayer Web SDK 9.x","description":"This article will guide you through updating from THEOplayer Web SDK version 9 (from version 8),","source":"@site/theoplayer/getting-started/01-sdks/01-web/13-migrating-to-theoplayer-9.md","sourceDirName":"getting-started/01-sdks/01-web","slug":"/getting-started/sdks/web/migrating-to-theoplayer-9","permalink":"/documentation/pr-preview/pr-256/theoplayer/getting-started/sdks/web/migrating-to-theoplayer-9","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/getting-started/01-sdks/01-web/13-migrating-to-theoplayer-9.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{},"sidebar":"web","previous":{"title":"How to use MultiView","permalink":"/documentation/pr-preview/pr-256/theoplayer/getting-started/sdks/web/how-to-use-multiview"},"next":{"title":"Getting Started on webOS","permalink":"/documentation/pr-preview/pr-256/theoplayer/getting-started/sdks/webos/getting-started"}}'),o=r("85893"),i=r("50065");let a={},s="Migrating to THEOplayer Web SDK 9.x",l={},d=[{value:"Update THEOplayer",id:"update-theoplayer",level:2},{value:"VR now uses WebXR API",id:"vr-now-uses-webxr-api",level:2},{value:"Replace usages of deprecated APIs",id:"replace-usages-of-deprecated-apis",level:2}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"migrating-to-theoplayer-web-sdk-9x",children:"Migrating to THEOplayer Web SDK 9.x"})}),"\n",(0,o.jsx)(t.p,{children:"This article will guide you through updating from THEOplayer Web SDK version 9 (from version 8),\nand the changes needed in your code."}),"\n",(0,o.jsx)(t.h2,{id:"update-theoplayer",children:"Update THEOplayer"}),"\n",(0,o.jsx)(t.p,{children:"Run the following command to install THEOplayer Web SDK version 9:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install theoplayer@9\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you're using the ",(0,o.jsx)(t.a,{href:"/open-video-ui/web/",children:"Open Video UI for Web"})," or one\nof ",(0,o.jsx)(t.a,{href:"/theoplayer/connectors/web/",children:"our connectors"}),",\nmake sure to update them to the latest version too to ensure proper support for THEOplayer version 9."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm update @theoplayer/web-ui\nnpm update @theoplayer/conviva-connector-web\n"})}),"\n",(0,o.jsx)(t.h2,{id:"vr-now-uses-webxr-api",children:"VR now uses WebXR API"}),"\n",(0,o.jsxs)(t.p,{children:["Virtual reality playback now always uses the ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API",children:"WebXR API"}),",\ninstead of the (deprecated) ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API",children:"WebVR API"}),".\nThe ",(0,o.jsx)(t.code,{children:"PlayerConfiguration.vr.useWebXR"})," configuration flag is now deprecated and ignored."]}),"\n",(0,o.jsxs)(t.p,{children:["For platforms that do not natively support WebXR, you may want to add\nthe ",(0,o.jsx)(t.a,{href:"https://github.com/immersive-web/webxr-polyfill",children:"WebXR polyfill"})," to your web page.\nSee ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/theoplayer/how-to-guides/miscellaneous/vr#configuration",children:"our VR guide"})," for instructions."]}),"\n",(0,o.jsx)(t.h2,{id:"replace-usages-of-deprecated-apis",children:"Replace usages of deprecated APIs"}),"\n",(0,o.jsx)(t.p,{children:"Some properties and methods that were previously deprecated have been removed from the API.\nUpdate your code to use the new APIs instead."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Removed ",(0,o.jsx)(t.code,{children:"THEOplayer.playerSuiteVersion"}),". Use ",(0,o.jsx)(t.code,{children:"THEOplayer.version"})," instead."]}),"\n",(0,o.jsxs)(t.li,{children:["Removed the Verizon Media integration (",(0,o.jsx)(t.code,{children:"player.verizonMedia"}),"). Use the Uplynk integration (",(0,o.jsx)(t.code,{children:"player.uplynk"}),") instead."]}),"\n",(0,o.jsxs)(t.li,{children:["Removed ",(0,o.jsx)(t.code,{children:"MillicastSource.streamName"}),". Use ",(0,o.jsx)(t.code,{children:"MillicastSource.src"})," instead."]}),"\n",(0,o.jsxs)(t.li,{children:["Removed ",(0,o.jsx)(t.code,{children:"player.ads.theoads.replaceAdTagParameters"}),". Use ",(0,o.jsx)(t.code,{children:"player.theoads.replaceAdTagParameters"})," instead."]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return a}});var n=r(67294);let o={},i=n.createContext(o);function a(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);