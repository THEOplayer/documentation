"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["77042"],{37675:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"faq/why-did-subtitles-stop-working","title":"Why did my subtitles stop working","description":"This question is occasionally asked by developers who\'ve configured the latest release of THEOplayer.","source":"@site/theoplayer/faq/16-why-did-subtitles-stop-working.md","sourceDirName":"faq","slug":"/faq/why-did-subtitles-stop-working","permalink":"/documentation/pr-preview/pr-166/theoplayer/faq/why-did-subtitles-stop-working","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/16-why-did-subtitles-stop-working.md","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{},"sidebar":"faq","previous":{"title":"Which error related events does the player expose","permalink":"/documentation/pr-preview/pr-166/theoplayer/faq/which-error-related-events-does-player-expose"},"next":{"title":"How does Media Engagement Index (MEI) affect Autoplay on Chrome","permalink":"/documentation/pr-preview/pr-166/theoplayer/faq/how-does-mei-affect-autoplay-on-chrome"}}'),i=n("85893"),s=n("50065");let o={},a="Why did my subtitles stop working",l={},d=[{value:"Before version 2.80",id:"before-version-280",level:3},{value:"After version 2.80",id:"after-version-280",level:3},{value:"Other frequent reasons:",id:"other-frequent-reasons",level:3}];function c(e){let t={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"why-did-my-subtitles-stop-working",children:"Why did my subtitles stop working"})}),"\n",(0,i.jsx)(t.p,{children:"This question is occasionally asked by developers who've configured the latest release of THEOplayer."}),"\n",(0,i.jsx)(t.h3,{id:"before-version-280",children:"Before version 2.80"}),"\n",(0,i.jsxs)(t.p,{children:["The most common reason on an older build why closed captions are no longer working is because the ",(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.code,{children:"texttrackrendering"})," feature isn't enabled"]}),". To verify whether this feature is enabled you can execute the query below."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"var subsEnabled = THEOplayer.features.indexOf('texttrackrendering') > -1;\n"})}),"\n",(0,i.jsx)(t.h3,{id:"after-version-280",children:"After version 2.80"}),"\n",(0,i.jsxs)(t.p,{children:["Starting in THEOplayer version 2.80 the ",(0,i.jsx)(t.code,{children:"texttrackrendering"})," feature is no longer an optional feature. It is instead part of the default build, and is always enabled."]}),"\n",(0,i.jsx)(t.h3,{id:"other-frequent-reasons",children:"Other frequent reasons:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A new stream is configured which does not list any subtitles in its manifest."}),"\n",(0,i.jsx)(t.li,{children:"The subtitle file can't be retrieved. (e.g. 404)"}),"\n",(0,i.jsx)(t.li,{children:"There are CORS issues with the subtitle file."}),"\n",(0,i.jsx)(t.li,{children:"The subtitle file is encoded in a non-compatible format."}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(67294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);