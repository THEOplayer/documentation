"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["75857"],{92696:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"faq/which-source-is-the-one-being-played","title":"Which source is the one being played","description":"In THEOplayer, player.source.sources can be used to provide alternative sources for playback, for cross-platform support. What is the actual source being played, if more than one is provided that is supported on the current platform/browser?","source":"@site/theoplayer_versioned_docs/version-v6/faq/76-which-source-is-the-one-being-played.md","sourceDirName":"faq","slug":"/faq/which-source-is-the-one-being-played","permalink":"/documentation/pr-preview/pr-256/theoplayer/v6/faq/which-source-is-the-one-being-played","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/76-which-source-is-the-one-being-played.md","tags":[],"version":"v6","sidebarPosition":76,"frontMatter":{},"sidebar":"faq","previous":{"title":"Widevine CDM deprecation notice for old browser versions","permalink":"/documentation/pr-preview/pr-256/theoplayer/v6/faq/old-widevine-cdm-deprecation-notice"},"next":{"title":"What is the \\"WebAssembly.compileStreaming failed\\" warning and what does it mean?","permalink":"/documentation/pr-preview/pr-256/theoplayer/v6/faq/what-is-the-webAssembly-compileStreaming-failed-warning"}}'),o=r("85893"),i=r("50065");let a={},s="Which source is the one being played",l={},c=[];function p(e){let t={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"which-source-is-the-one-being-played",children:"Which source is the one being played"})}),"\n",(0,o.jsxs)(t.p,{children:["In THEOplayer, ",(0,o.jsx)(t.code,{children:"player.source.sources"})," can be used to provide alternative sources for playback, for cross-platform support. What is the actual source being played, if more than one is provided that is supported on the current platform/browser?"]}),"\n",(0,o.jsxs)(t.p,{children:["The player will select the first source (top to bottom) of a type that is supported on the current platform and try to play it. The player will ",(0,o.jsx)("u",{children:"not"})," automatically select a new source from the list if the current one is failing to play for any reason unrelated to platform support."]}),"\n",(0,o.jsxs)(t.p,{children:["You can also find out which the source is that the player selects with the ",(0,o.jsx)(t.code,{children:"currentsourcechange"})," event (",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/CurrentSourceChangeEvent.html",children:"documentation"}),")."]}),"\n",(0,o.jsx)(t.p,{children:"A few additional notes:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"It is of course possible to make the player attempt to play a different source if the one being played errors or never starts to play, but this is to be done in the implementation."}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"player.source.sources"})," is not intended as a playlist. Playlists can also be accomplished on the implementation side. Here is a simple ",(0,o.jsx)(t.a,{href:"https://www.theoplayer.com/theoplayer-demo-playlist-and-caching",children:"example"})," for the Web SDK."]}),"\n",(0,o.jsx)(t.li,{children:"This mechanism is based on what the platform declares to support. It does not ensure that all codecs/features included in the stream are supported correctly on the current platform."}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return a}});var n=r(67294);let o={},i=n.createContext(o);function a(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);