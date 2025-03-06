"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["74517"],{90602:function(e,t,o){o.r(t),o.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>u,contentTitle:()=>l});var i=JSON.parse('{"id":"how-to-guides/ui/is-it-possible-to-hide-googla-ima","title":"Is it possible to hide/disable the Google IMA UI?","description":"You may ask this question if you are trying to determine what controls are visible to the user during ands and want therefore to use your own UI elements.","source":"@site/theoplayer/how-to-guides/11-ui/05-is-it-possible-to-hide-googla-ima.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/is-it-possible-to-hide-googla-ima","permalink":"/documentation/pr-preview/pr-231/theoplayer/how-to-guides/ui/is-it-possible-to-hide-googla-ima","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/11-ui/05-is-it-possible-to-hide-googla-ima.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to make the control bar always visible?","permalink":"/documentation/pr-preview/pr-231/theoplayer/how-to-guides/ui/how-to-make-control-keys-always-visible"},"next":{"title":"How to build a Chromeless UI","permalink":"/documentation/pr-preview/pr-231/theoplayer/how-to-guides/ui/how-to-build-chromeless-ui"}}'),n=o("85893"),s=o("50065");let r={},l="Is it possible to hide/disable the Google IMA UI?",a={},u=[];function d(e){let t={a:"a",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"is-it-possible-to-hidedisable-the-google-ima-ui",children:"Is it possible to hide/disable the Google IMA UI?"})}),"\n",(0,n.jsx)(t.p,{children:"You may ask this question if you are trying to determine what controls are visible to the user during ands and want therefore to use your own UI elements."}),"\n",(0,n.jsxs)(t.p,{children:["Unfortunately Google IMA provides very limited control over the UI. The only thing that is possible to change/hide from THEOplayer is the countdown: to do so, you can configure as ",(0,n.jsx)(t.code,{children:"*showCountdown: false*"})," in the AdsConfiguration (",(0,n.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/classes/Player.html",children:"related documentation"}),")."]}),"\n",(0,n.jsx)(t.p,{children:"Using other methods, like CSS or JavaScript, to modify the Google IMA UI elements styles will also not work due to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["the usual higher specificity of the ",(0,n.jsx)(t.em,{children:"iframe"})," CSS"]}),"\n",(0,n.jsx)(t.li,{children:"the security restrictions on XSS."}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,o){o.d(t,{Z:function(){return l},a:function(){return r}});var i=o(67294);let n={},s=i.createContext(n);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);