"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["2862"],{35510:function(e,o,t){t.r(o),t.d(o,{default:()=>d,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"faq/which-network-calls-does-THEOplayer-do","title":"Which network calls (or requests) does THEOplayer do","description":"The question above is related to the following questions:","source":"@site/theoplayer_versioned_docs/version-v4/faq/23-which-network-calls-does-THEOplayer-do.md","sourceDirName":"faq","slug":"/faq/which-network-calls-does-THEOplayer-do","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/faq/which-network-calls-does-THEOplayer-do","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/23-which-network-calls-does-THEOplayer-do.md","tags":[],"version":"v4","sidebarPosition":23,"frontMatter":{},"sidebar":"faq","previous":{"title":"How to remove CORS restrictions from a reproduction stream","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/faq/how-to-remove-cors-restrictions"},"next":{"title":"Why does the playback not work when using the Chrome iPhone/iPad simulator","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/faq/why-does-playback-not-work-using-chrome-iphone-simulator"}}'),n=t("85893"),s=t("50065");let i={},l="Which network calls (or requests) does THEOplayer do",a={},c=[];function h(e){let o={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"which-network-calls-or-requests-does-theoplayer-do",children:"Which network calls (or requests) does THEOplayer do"})}),"\n",(0,n.jsx)(o.p,{children:"The question above is related to the following questions:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"What is the call to license.theoplayer.com?"}),"\n",(0,n.jsx)(o.li,{children:"Why is THEOplayer sending a request to licensing.theoplayer.com?"}),"\n",(0,n.jsx)(o.li,{children:"What is the call to licenseapi.theoplayer.com, and why is it failing?"}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["THEOplayer can do three different network requests to ",(0,n.jsx)(o.code,{children:"*.theoplayer.com"})," which are not related to your stream."]}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"license.theoplayer.com"}),": this request logs an impression to THEOplayer's analytics server. THEOplayer uses impressions to know how many views you've received, because it's taken into account for billing purposes. The analytics server does not track personal information on your users."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"licensing.theoplayer.com/t?"}),": this request serves as a fallback request when the call to license.theoplayer.com fails."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"licenseapi.theoplayer.com/api/v1/check"}),": this request happens when your current license is invalid, for example on a domain (or IP-address) which hasn't been whitelisted. This request will not be successful because there's no service configured for this request. (This might change in the future.)"]}),"\n"]})]})}function d(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},50065:function(e,o,t){t.d(o,{Z:function(){return l},a:function(){return i}});var r=t(67294);let n={},s=r.createContext(n);function i(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);