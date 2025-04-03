"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["94609"],{28015:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>p,contentTitle:()=>s});var i=JSON.parse('{"id":"knowledge-base/playback/video-clipping","title":"Video Clipping","description":"THEOplayer supports playing only a selected part of a video-on-demand stream, rather than playing it from start to finish. This can be used for example to watch a single game-changing event from a sports match, highlight an important part of a long video presentation, or skip straight to the best part of a song\'s video clip.","source":"@site/theoplayer_versioned_docs/version-v8/knowledge-base/03-playback/06-video-clipping.md","sourceDirName":"knowledge-base/03-playback","slug":"/knowledge-base/playback/video-clipping","permalink":"/documentation/pr-preview/pr-254/theoplayer/v8/knowledge-base/playback/video-clipping","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/knowledge-base/03-playback/06-video-clipping.md","tags":[],"version":"v8","sidebarPosition":6,"frontMatter":{},"sidebar":"roku","previous":{"title":"Basic guide to Web Audio API","permalink":"/documentation/pr-preview/pr-254/theoplayer/v8/knowledge-base/playback/basic-guide-web-audio-api"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-254/theoplayer/v8/knowledge-base/playback/subtitles-and-closed-captions/introduction"}}'),a=t("85893"),o=t("50065");let r={},s="Video Clipping",l={},p=[{value:"API",id:"api",level:2},{value:"Basic setup",id:"basic-setup",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"video-clipping",children:"Video Clipping"})}),"\n",(0,a.jsx)(n.p,{children:"THEOplayer supports playing only a selected part of a video-on-demand stream, rather than playing it from start to finish. This can be used for example to watch a single game-changing event from a sports match, highlight an important part of a long video presentation, or skip straight to the best part of a song's video clip."}),"\n",(0,a.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,a.jsxs)(n.p,{children:["The start and end of the clipping window can be controlled through the ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/Clip.html",children:"Clip API"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"startTime"})," and ",(0,a.jsx)(n.code,{children:"endTime"}),", expressed in seconds"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["These properties are optional, and you don't need to specify both ",(0,a.jsx)(n.code,{children:"startTime"})," and ",(0,a.jsx)(n.code,{children:"endTime"}),". For example, you can set just ",(0,a.jsx)(n.code,{children:"startTime = 30"})," to have the video start at 30 seconds and play the rest of the video normally."]}),"\n",(0,a.jsx)(n.h2,{id:"basic-setup",children:"Basic setup"}),"\n",(0,a.jsx)(n.p,{children:"The following example shows a video clipped to start at 30 seconds and end at 60 seconds."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var player = ...;\nplayer.source = {\n    sources : [{\n     src : '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8', // sets HLS source\n     type : 'application/x-mpegurl' // sets type to HLS\n    }],\n  poster: '//cdn.theoplayer.com/video/big_buck_bunny/poster.jpg'\n    };\n\nplayer.clip.startTime = 30;\nplayer.clip.endTime = 60;\n"})})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var i=t(67294);let a={},o=i.createContext(a);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);