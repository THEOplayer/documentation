"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["17061"],{20242:function(e,i,t){t.r(i),t.d(i,{default:()=>f,frontMatter:()=>s,metadata:()=>n,assets:()=>h,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"faq/why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11","title":"Why the Visibility API does not work through an iframe on Safari and IE11","description":"This question may be asked when you observe a different behavior of the Visibility API on different browsers.","source":"@site/theoplayer_versioned_docs/version-v6/faq/11-why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11.md","sourceDirName":"faq","slug":"/faq/why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11","permalink":"/documentation/pr-preview/pr-191/theoplayer/v6/faq/why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/11-why-visibilty-api-doesnt-work-in-iframe-on-safari-and-ie11.md","tags":[],"version":"v6","sidebarPosition":11,"frontMatter":{},"sidebar":"faq","previous":{"title":"Is it possible to see 360 degrees photo with THEOplayer","permalink":"/documentation/pr-preview/pr-191/theoplayer/v6/faq/is-it-possible-to-see-360-picture"},"next":{"title":"What is an impression","permalink":"/documentation/pr-preview/pr-191/theoplayer/v6/faq/what-is-an-impression"}}'),r=t("85893"),o=t("50065");let s={},a="Why the Visibility API does not work through an iframe on Safari and IE11",h={},l=[];function d(e){let i={a:"a",h1:"h1",header:"header",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"why-the-visibility-api-does-not-work-through-an-iframe-on-safari-and-ie11",children:"Why the Visibility API does not work through an iframe on Safari and IE11"})}),"\n",(0,r.jsx)(i.p,{children:"This question may be asked when you observe a different behavior of the Visibility API on different browsers."}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/Visibility.html",children:"Visibility API"})," provides developers a way to observe how much of the player is visible."]}),"\n",(0,r.jsxs)(i.p,{children:["When the player is embedded in an iframe, this API does not work on Safari and IE11. This depends on the fact that the player uses the ",(0,r.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Browser_compatibility",children:"Intersection Observer API"})," if it's available in the browser. Unfortunately, IE and Safari do not have support for this, so the player necessarily falls back to scroll events for these environments."]}),"\n",(0,r.jsx)(i.p,{children:"This is the reason why on those browsers the Visibility API works correctly when the player is on the page but it is not functional through an iframe."}),"\n",(0,r.jsxs)(i.p,{children:["February 2019: A piece of good news: the Intersection Observer API is now in beta in Safari: ",(0,r.jsx)(i.a,{href:"https://webkit.org/blog/8582/intersectionobserver-in-webkit/",children:"https://webkit.org/blog/8582/intersectionobserver-in-webkit/"})]})]})}function f(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return a},a:function(){return s}});var n=t(67294);let r={},o=n.createContext(r);function s(e){let i=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);