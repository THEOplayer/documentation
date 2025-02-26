"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["64739"],{45436:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>p,contentTitle:()=>o});var n=JSON.parse('{"id":"faq/is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window","title":"Is it a problem if the viewer pauses a live stream for longer than the DVR window","description":"In general, this is no problem as the player will continue playback, once exhausted the current buffer, from the nearest point available, in this case the end of the sliding window.","source":"@site/theoplayer_versioned_docs/version-v4/faq/52-is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window.md","sourceDirName":"faq","slug":"/faq/is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window","permalink":"/documentation/pr-preview/pr-222/theoplayer/v4/faq/is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/52-is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window.md","tags":[],"version":"v4","sidebarPosition":52,"frontMatter":{},"sidebar":"faq","previous":{"title":"Is it possible to have multiple player instances play at the same time","permalink":"/documentation/pr-preview/pr-222/theoplayer/v4/faq/possible-to-have-multiple-player-instances-at-same-time"},"next":{"title":"THEOplayer Features & Modules","permalink":"/documentation/pr-preview/pr-222/theoplayer/v4/faq/theoplayer-features-modules"}}'),r=i("85893"),a=i("50065");let s={},o="Is it a problem if the viewer pauses a live stream for longer than the DVR window",l={},p=[];function h(e){let t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"is-it-a-problem-if-the-viewer-pauses-a-live-stream-for-longer-than-the-dvr-window",children:"Is it a problem if the viewer pauses a live stream for longer than the DVR window"})}),"\n",(0,r.jsx)(t.p,{children:"In general, this is no problem as the player will continue playback, once exhausted the current buffer, from the nearest point available, in this case the end of the sliding window."}),"\n",(0,r.jsx)(t.p,{children:"The viewer may perceive this as a peculiar behavior. They will see at first a small video portion still player that connects to what they were watching before pausing the video: this is what was contained in the current buffer. Then the player will appear to seek on its own, without the user requesting it, to a new position."}),"\n",(0,r.jsx)(t.p,{children:"In case you wish to avoid this behavior and skip the current buffer, this is also possible with a simple snippet that on resume checks whether the current position is still within the DVR window, and if it is not, then it seeks directly to a new position (without playing the current buffer)."}),"\n",(0,r.jsx)(t.p,{children:"This is a JavaScript example for this, where the DVR window is 60 sec long and the new custom position to seek to is in the middle of it."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"player.addEventListener('play', () => {\n  player.currentTime = player.seekable.end() - player.currentTime > 60 ? player.seekable.end() - 30 : player.currentTime;\n});\n"})})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return s}});var n=i(67294);let r={},a=n.createContext(r);function s(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);