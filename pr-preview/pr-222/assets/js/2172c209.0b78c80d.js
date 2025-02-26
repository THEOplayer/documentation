"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["44354"],{98908:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"faq/what-does-error-unknown-cdm-mean","title":"What does the error message \'Unknown CDM error\' mean","description":"If you got to see this page, you probably know that CDM stands for Content Decryption Module, which is a component in the DRM pipeline, a part of the content protection process.","source":"@site/theoplayer_versioned_docs/version-v6/faq/18-what-does-error-unknown-cdm-mean.md","sourceDirName":"faq","slug":"/faq/what-does-error-unknown-cdm-mean","permalink":"/documentation/pr-preview/pr-222/theoplayer/v6/faq/what-does-error-unknown-cdm-mean","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/18-what-does-error-unknown-cdm-mean.md","tags":[],"version":"v6","sidebarPosition":18,"frontMatter":{},"sidebar":"faq","previous":{"title":"How does Media Engagement Index (MEI) affect Autoplay on Chrome","permalink":"/documentation/pr-preview/pr-222/theoplayer/v6/faq/how-does-mei-affect-autoplay-on-chrome"},"next":{"title":"What does the error message \'Something went wrong with Native playback\' mean","permalink":"/documentation/pr-preview/pr-222/theoplayer/v6/faq/what-does-error-something-went-wrong-during-playback-mean"}}'),o=t("85893"),a=t("50065");let i={},s="What does the error message 'Unknown CDM error' mean",c={},d=[];function h(e){let n={a:"a",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"what-does-the-error-message-unknown-cdm-error-mean",children:"What does the error message 'Unknown CDM error' mean"})}),"\n",(0,o.jsx)(n.p,{children:"If you got to see this page, you probably know that CDM stands for Content Decryption Module, which is a component in the DRM pipeline, a part of the content protection process."}),"\n",(0,o.jsx)(n.p,{children:"There are 2 scenarios where this error can be triggered:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If a user is watching a DRM-protected stream, and then tries to Airplay ",(0,o.jsx)(n.strong,{children:"their whole screen"}),' (In the device status bar as opposed to Airplaying by clicking the icon in THEOplayer when watching in Safari). Because it cannot be guaranteed that the content is not being hijacked in this scenario, the player throws the "Unknown CDM error". This scenario is Mac/Safari specific.']}),"\n",(0,o.jsxs)(n.li,{children:["A second scenario where you would see this error is when, on iOS, you record your screen with built-in or third-party software while playing DRM-protected content. This scenario is iOS specific.\nSafari uses media error code 5, according to VideoJS documentation (",(0,o.jsx)(n.a,{href:"https://docs.videojs.com/mediaerror",children:"https://docs.videojs.com/mediaerror"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Using this knowledge, developers could handle this error by capturing the 2 cases under one, more generic message towards the user e.g. 'This content is protected and can't be viewed this way.'"})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var r=t(67294);let o={},a=r.createContext(o);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);