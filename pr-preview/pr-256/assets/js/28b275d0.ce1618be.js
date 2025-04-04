"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["42107"],{62453:function(e,o,t){t.r(o),t.d(o,{default:()=>d,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"getting-started/sdks/ios/how-to-bypass-copy-not-working-safari-console","title":"How to bypass copy() not working in Safari console","description":"When trying to use the copy() method in the Safari console, you\'ll notice that this does not work.","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/03-how-to-bypass-copy-not-working-safari-console.md","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/how-to-bypass-copy-not-working-safari-console","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/getting-started/sdks/ios/how-to-bypass-copy-not-working-safari-console","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/03-how-to-bypass-copy-not-working-safari-console.md","tags":[],"version":"v4","sidebarPosition":3,"frontMatter":{},"sidebar":"ios","previous":{"title":"My app does not want to build for the app store","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/getting-started/sdks/ios/app-doesnt-want-to-build-app-store"},"next":{"title":"How to couple the native GCKUICastButton to THEOplayer","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/getting-started/sdks/ios/how-to-couple-native-gckuicastbutton"}}'),s=t("85893"),i=t("50065");let r={},a="How to bypass copy() not working in Safari console",c={},l=[];function p(e){let o={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"how-to-bypass-copy-not-working-in-safari-console",children:"How to bypass copy() not working in Safari console"})}),"\n",(0,s.jsx)(o.p,{children:"When trying to use the copy() method in the Safari console, you'll notice that this does not work."}),"\n",(0,s.jsx)(o.p,{children:"This functionality is often used to copy the source of a player and to paste it somewhere else. You could work around this limitation by following the steps below."}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"In the Safari console containing a THEOplayer, enter JSON.stringify(player.source)"}),"\n",(0,s.jsx)(o.li,{children:"The console will convert the object into a string and return it."}),"\n",(0,s.jsx)(o.li,{children:"Copy the string to the clipboard manually"}),"\n",(0,s.jsxs)(o.li,{children:["Say we want to set the source of a second player to the source we just copied. Now, in (another) console, enter ",(0,s.jsx)(o.code,{children:"player.source = JSON.parse(stringyoujustcopied)"})]}),"\n",(0,s.jsx)(o.li,{children:"The second player will now have the same source as the first player"}),"\n"]})]})}function d(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},50065:function(e,o,t){t.d(o,{Z:function(){return a},a:function(){return r}});var n=t(67294);let s={},i=n.createContext(s);function r(e){let o=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);