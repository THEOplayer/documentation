"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["63772"],{38100:function(e,t,o){o.r(t),o.d(t,{default:()=>c,frontMatter:()=>s,metadata:()=>n,assets:()=>h,toc:()=>l,contentTitle:()=>r});var n=JSON.parse('{"id":"faq/why-does-playback-not-work-using-chrome-iphone-simulator","title":"Why does the playback not work when using the Chrome iPhone/iPad simulator","description":"You might need an answer to this question if you are testing your page using the Chrome iPhone/iPad simulator and notice that, reloading the page, the video player stops working (even though the ads, if any, are displayed correctly) and some errors are displayed in the console.","source":"@site/theoplayer_versioned_docs/version-v8/faq/24-why-does-playback-not-work-using-chrome-iphone-simulator.md","sourceDirName":"faq","slug":"/faq/why-does-playback-not-work-using-chrome-iphone-simulator","permalink":"/documentation/pr-preview/pr-255/theoplayer/v8/faq/why-does-playback-not-work-using-chrome-iphone-simulator","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/faq/24-why-does-playback-not-work-using-chrome-iphone-simulator.md","tags":[],"version":"v8","sidebarPosition":24,"frontMatter":{},"sidebar":"faq","previous":{"title":"Which network calls (or requests) does THEOplayer do","permalink":"/documentation/pr-preview/pr-255/theoplayer/v8/faq/which-network-calls-does-THEOplayer-do"},"next":{"title":"What does the error message \'can only be initiated by a user gesture\' imply? Can I still force the desired action","permalink":"/documentation/pr-preview/pr-255/theoplayer/v8/faq/what-does-error-can-only-be-initiated-by-user-gesture-mean"}}'),a=o("85893"),i=o("50065");let s={},r="Why does the playback not work when using the Chrome iPhone/iPad simulator",h={},l=[];function d(e){let t={h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"why-does-the-playback-not-work-when-using-the-chrome-iphoneipad-simulator",children:"Why does the playback not work when using the Chrome iPhone/iPad simulator"})}),"\n",(0,a.jsx)(t.p,{children:"You might need an answer to this question if you are testing your page using the Chrome iPhone/iPad simulator and notice that, reloading the page, the video player stops working (even though the ads, if any, are displayed correctly) and some errors are displayed in the console."}),"\n",(0,a.jsx)(t.p,{children:"Similar questions are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"hy does the playback not work when using Mozilla in Responsive Design Mode?"}),"\n",(0,a.jsx)(t.li,{children:"Why does the playback not work when using the Edge emulator to test my page on other platforms?"}),"\n",(0,a.jsx)(t.li,{children:"Why does the playback not work when testing device-specific viewports with the browser dev tools?"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The simple answer is that this occurs because the video player gets confused between the user agent (set as iOS during the simulation) and the browser actually in use. This does not imply that there is any problem with the video player. In fact, when the tested page will be accessed by an actual iOS device, the video player will work fine, in absence of other (unrelated) issues."}),"\n",(0,a.jsx)(t.p,{children:"The same behavior is to be expected in similar tests, that is to say when a platform is emulated on another and they do not share the same playback logic of the native video element."}),"\n",(0,a.jsx)(t.p,{children:"Some more details:"}),"\n",(0,a.jsx)(t.p,{children:"If you use Chrome + iOS simulator, your user-agent will change to iOS/Safari. THEOplayer detects this new user-agent, and because it's iOS it'll think that the MSE API is not available, and that they need to use the playback logic of the native video element. However, you're still on Chrome, so this alternate native iOS playback logic is not available. These circumstances lead to playback failure. It works for ads because they typically do not use the HLS protocol, so we do not have to leverage MSE."}),"\n",(0,a.jsx)(t.p,{children:"It is not advisable to use (or rely on) the Chrome + iOS simulator mode to test anything else than the view mode. The native APIs which iOS offers are not available in this mode, so it's not really a useful testing mode."})]})}function c(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,o){o.d(t,{Z:function(){return r},a:function(){return s}});var n=o(67294);let a={},i=n.createContext(a);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);