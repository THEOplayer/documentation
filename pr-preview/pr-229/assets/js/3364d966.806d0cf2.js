"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["39126"],{8498:function(e,n,i){i.r(n),i.d(n,{default:()=>c,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>p,contentTitle:()=>r});var t=JSON.parse('{"id":"faq/what-is-an-impression","title":"What is an impression","description":"This article explains what an impression is and how THEOplayer calculates impressions.","source":"@site/theoplayer_versioned_docs/version-v6/faq/12-what-is-an-impression.md","sourceDirName":"faq","slug":"/faq/what-is-an-impression","permalink":"/documentation/pr-preview/pr-229/theoplayer/v6/faq/what-is-an-impression","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/12-what-is-an-impression.md","tags":[],"version":"v6","sidebarPosition":12,"frontMatter":{},"sidebar":"faq","previous":{"title":"Why the Visibility API does not work through an iframe on Safari and IE11","permalink":"/documentation/pr-preview/pr-229/theoplayer/v6/faq/why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11"},"next":{"title":"How to know whether a live stream is playing","permalink":"/documentation/pr-preview/pr-229/theoplayer/v6/faq/how-to-know-when-livestream-is-playing"}}'),o=i("85893"),s=i("50065");let a={},r="What is an impression",l={},p=[];function h(e){let n={h1:"h1",header:"header",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"what-is-an-impression",children:"What is an impression"})}),"\n",(0,o.jsx)(n.p,{children:"This article explains what an impression is and how THEOplayer calculates impressions."}),"\n",(0,o.jsx)(n.p,{children:"THEOplayer will count an impression when the video or audio source is being played for the first time by our SDK. This can be triggered by a user clicking the Play button, or by playing the video automatically (autoplay). When you pause, play or seek within the same video or audio source, it still will be counted as only one impression. If a user refreshes the page or reloads the application, a second impression will be counted. If the content contains ads, these will not be counted towards the impression count. Except when the content only contains ads, then these will be counted towards the impression count."}),"\n",(0,o.jsx)(n.p,{children:"As an example, if you start a video, pause the video and then resume again it is only considered one impression. If on the other hand you start a video and then refresh your browser, or reload your application, it would be considered 2 impressions."})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return a}});var t=i(67294);let o={},s=t.createContext(o);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);