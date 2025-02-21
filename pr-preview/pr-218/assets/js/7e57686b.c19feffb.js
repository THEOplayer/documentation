"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["7677"],{42698:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>o,assets:()=>s,toc:()=>a,contentTitle:()=>c});var o=JSON.parse('{"id":"how-to-guides/miscellaneous/context-menu/how-to-disable-right-click","title":"How can we disable the right click?","description":"There are 2 ways of disabling the right click menu on the player.","source":"@site/theoplayer/how-to-guides/07-miscellaneous/01-context-menu/01-how-to-disable-right-click.md","sourceDirName":"how-to-guides/07-miscellaneous/01-context-menu","slug":"/how-to-guides/miscellaneous/context-menu/how-to-disable-right-click","permalink":"/documentation/pr-preview/pr-218/theoplayer/how-to-guides/miscellaneous/context-menu/how-to-disable-right-click","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/07-miscellaneous/01-context-menu/01-how-to-disable-right-click.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-218/theoplayer/how-to-guides/miscellaneous/context-menu/introduction"},"next":{"title":"How to change the context menu","permalink":"/documentation/pr-preview/pr-218/theoplayer/how-to-guides/miscellaneous/context-menu/how-to-change-context-menu"}}'),i=n("85893"),l=n("50065");let r={},c="How can we disable the right click?",s={},a=[];function u(e){let t={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"how-can-we-disable-the-right-click",children:"How can we disable the right click?"})}),"\n",(0,i.jsx)(t.p,{children:"There are 2 ways of disabling the right click menu on the player."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Disable the context menu feature while you are building your SDK"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["By default, the ",(0,i.jsx)("code",{children:"contextmenu"})," is included between the basic features of Web SDK. If you build your SDK with this feature disabled, your player will not have the context menu."]}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Add a CSS rule on your page"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If you do not want to re-build your player, you can simply add the following CSS rule after calling your THEOplayer ",(0,i.jsx)("code",{children:"ui.css"}),". You can add this rule in either:\na) in a style element (see below) or\nb) in an external style."]}),"\n",(0,i.jsx)(t.p,{children:"See example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n\n<style>\n  .theo-context-menu {\n    display: none;\n  }\n</style>\n'})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var o=n(67294);let i={},l=o.createContext(i);function r(e){let t=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);