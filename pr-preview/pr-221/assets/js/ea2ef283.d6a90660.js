"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["97439"],{9066:function(e,o,t){t.r(o),t.d(o,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"how-to-guides/ui/is-it-possible-to-hide-googla-ima","title":"Is it possible to hide/disable the Google IMA UI?","description":"You may ask this question if you are trying to determine what controls are visible to the user during ands and want therefore to use your own UI elements.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/11-ui/05-is-it-possible-to-hide-googla-ima.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/is-it-possible-to-hide-googla-ima","permalink":"/documentation/pr-preview/pr-221/theoplayer/v6/how-to-guides/ui/is-it-possible-to-hide-googla-ima","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/11-ui/05-is-it-possible-to-hide-googla-ima.md","tags":[],"version":"v6","sidebarPosition":5,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to make the control bar always visible?","permalink":"/documentation/pr-preview/pr-221/theoplayer/v6/how-to-guides/ui/how-to-make-control-keys-always-visible"},"next":{"title":"How to build a Chromeless UI","permalink":"/documentation/pr-preview/pr-221/theoplayer/v6/how-to-guides/ui/how-to-build-chromeless-ui"}}'),s=t("85893"),n=t("50065");let r={},l="Is it possible to hide/disable the Google IMA UI?",a={},d=[];function u(e){let o={a:"a",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"is-it-possible-to-hidedisable-the-google-ima-ui",children:"Is it possible to hide/disable the Google IMA UI?"})}),"\n",(0,s.jsx)(o.p,{children:"You may ask this question if you are trying to determine what controls are visible to the user during ands and want therefore to use your own UI elements."}),"\n",(0,s.jsxs)(o.p,{children:["Unfortunately Google IMA provides very limited control over the UI. The only thing that is possible to change/hide from THEOplayer is the countdown: to do so, you can configure as ",(0,s.jsx)(o.code,{children:"*showCountdown: false*"})," in the AdsConfiguration (",(0,s.jsx)(o.a,{href:"pathname:///theoplayer/v6/api-reference/web/classes/Player.html",children:"related documentation"}),")."]}),"\n",(0,s.jsx)(o.p,{children:"Using other methods, like CSS or JavaScript, to modify the Google IMA UI elements styles will also not work due to:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["the usual higher specificity of the ",(0,s.jsx)(o.em,{children:"iframe"})," CSS"]}),"\n",(0,s.jsx)(o.li,{children:"the security restrictions on XSS."}),"\n"]})]})}function h(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},50065:function(e,o,t){t.d(o,{Z:function(){return l},a:function(){return r}});var i=t(67294);let s={},n=i.createContext(s);function r(e){let o=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);