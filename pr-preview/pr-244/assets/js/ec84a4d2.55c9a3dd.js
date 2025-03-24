"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["57538"],{33271:function(e,t,o){o.r(t),o.d(t,{default:()=>c,frontMatter:()=>i,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"faq/why-does-player-load-only-one-audio-track","title":"Why does the player load only one audio track (even though there are several in the manifest)","description":"You may be asking this question if you notice a discrepancy in the number of audio tracks present in the manifest and the audio tracks that you can select from the player UI.","source":"@site/theoplayer_versioned_docs/version-v7/faq/09-why-does-player-load-only-one-audio-track.md","sourceDirName":"faq","slug":"/faq/why-does-player-load-only-one-audio-track","permalink":"/documentation/pr-preview/pr-244/theoplayer/v7/faq/why-does-player-load-only-one-audio-track","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/09-why-does-player-load-only-one-audio-track.md","tags":[],"version":"v7","sidebarPosition":9,"frontMatter":{},"sidebar":"faq","previous":{"title":"Is YouTube supported","permalink":"/documentation/pr-preview/pr-244/theoplayer/v7/faq/is-youtube-supported"},"next":{"title":"Is it possible to see 360 degrees photo with THEOplayer","permalink":"/documentation/pr-preview/pr-244/theoplayer/v7/faq/is-it-possible-to-see-360-picture"}}'),n=o("85893"),r=o("50065");let i={},s="Why does the player load only one audio track (even though there are several in the manifest)",l={},d=[];function h(e){let t={h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"why-does-the-player-load-only-one-audio-track-even-though-there-are-several-in-the-manifest",children:"Why does the player load only one audio track (even though there are several in the manifest)"})}),"\n",(0,n.jsx)(t.p,{children:"You may be asking this question if you notice a discrepancy in the number of audio tracks present in the manifest and the audio tracks that you can select from the player UI."}),"\n",(0,n.jsx)(t.p,{children:"Similar questions may be:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"How to make all audio tracks in of my stream appear in THEOplayer"}),"\n",(0,n.jsx)(t.li,{children:"Why the player does not return the correct audio tracks?"}),"\n",(0,n.jsx)(t.li,{children:"Why does the player detect only one of the audio tracks of my manifest?"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"First of all, a reassuring word: if your manifest is well-formed and contains multiple audio tracks, you do not need to do anything to import them all, as the player does this by default."}),"\n",(0,n.jsxs)(t.p,{children:["However, if your audio tracks are missing, it usually means that something in the manifest is wrong. ",(0,n.jsx)(t.strong,{children:"If the manifest is indeed correct according to specs, this kind of behavior may occur if the video track includes also audio"})," (even in the presence of separated audio tracks). In this case, the player considers that audio track as primary and ignores all the others."]}),"\n",(0,n.jsx)(t.p,{children:"In other words, when you want to be able to switch between different audio tracks, take care that all of them are included in the manifest separately from the video and that the video track does not include any audio track. This will also result in a slightly faster download time."})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},50065:function(e,t,o){o.d(t,{Z:function(){return s},a:function(){return i}});var a=o(67294);let n={},r=a.createContext(n);function i(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);