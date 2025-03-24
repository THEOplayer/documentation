"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["69123"],{75238:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"faq/which-subtitle-and-cc-formats-are-supported-on-native-safari","title":"Which subtitle and CC formats are supported on native Safari","description":"The Safari browser on iOS uses the native Safari video player.","source":"@site/theoplayer_versioned_docs/version-v4/faq/67-which-subtitle-and-cc-formats-are-supported-on-native-safari.md","sourceDirName":"faq","slug":"/faq/which-subtitle-and-cc-formats-are-supported-on-native-safari","permalink":"/documentation/pr-preview/pr-243/theoplayer/v4/faq/which-subtitle-and-cc-formats-are-supported-on-native-safari","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/67-which-subtitle-and-cc-formats-are-supported-on-native-safari.md","tags":[],"version":"v4","sidebarPosition":67,"frontMatter":{},"sidebar":"faq","previous":{"title":"Why is my PlayReady stream not working in Chromium Edge?","permalink":"/documentation/pr-preview/pr-243/theoplayer/v4/faq/Why-is-my-Playready-stream-not-working-in-Chromium-Edge"},"next":{"title":"How to navigate through the documentation and resources","permalink":"/documentation/pr-preview/pr-243/theoplayer/v4/faq/how-to-navigate-through-the-documentation-and-resources"}}'),a=n("85893"),r=n("50065");let o={},s="Which subtitle and CC formats are supported on native Safari",d={},l=[{value:"WebVTT",id:"webvtt",level:3},{value:"TTML",id:"ttml",level:3},{value:"CEA608 and CEA708",id:"cea608-and-cea708",level:3},{value:"Known Limitation",id:"known-limitation",level:2},{value:"Resources",id:"resources",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"which-subtitle-and-cc-formats-are-supported-on-native-safari",children:"Which subtitle and CC formats are supported on native Safari"})}),"\n",(0,a.jsxs)(t.p,{children:["The Safari browser on iOS uses the native Safari video player.\nSafari on the desktop also uses its native player when using FairPlay or when the ",(0,a.jsx)(t.code,{children:"useNativePlayback"})," flag is enabled."]}),"\n",(0,a.jsx)(t.h3,{id:"webvtt",children:"WebVTT"}),"\n",(0,a.jsxs)(t.p,{children:["For displaying webvtt subtitles, Safari on iOS requires the ",(0,a.jsx)(t.code,{children:"SUBTITLES"})," attribute in the ",(0,a.jsx)(t.code,{children:"EXT-X-STREAM-INF"})," tag of the m3u8 file.\nThis ",(0,a.jsx)(t.code,{children:"SUBTITLES"})," attribute is optional on browsers such as Chrome and Firefox and when Safari does not use its native video player."]}),"\n",(0,a.jsx)(t.h3,{id:"ttml",children:"TTML"}),"\n",(0,a.jsxs)(t.p,{children:["TTML subtitles aren't supported through native Safari. However, THEOplayer should be able to handle TTML subtitles on desktop Safari as long as FairPlay is not being used and the ",(0,a.jsx)(t.code,{children:"useNativePlayback"})," flag is not enabled."]}),"\n",(0,a.jsx)(t.h3,{id:"cea608-and-cea708",children:"CEA608 and CEA708"}),"\n",(0,a.jsx)(t.p,{children:"CEA608 and CEA708 subtitles are supported."}),"\n",(0,a.jsx)(t.h2,{id:"known-limitation",children:"Known Limitation"}),"\n",(0,a.jsxs)(t.p,{children:["When multiple subtitles with mode ",(0,a.jsx)(t.code,{children:"hidden"})," are configured, only one will fire its events such as ",(0,a.jsx)(t.code,{children:"addcue"})," and ",(0,a.jsx)(t.code,{children:"cuechange"})," when using Safari's native player."]}),"\n",(0,a.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8216#section-4.3.4.2",children:"HLS Specification - #EXT-X-STREAM-INF"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/v4/knowledge-base/playback/subtitles-and-closed-captions/introduction",children:"THEOplayer introduction to subtitles and closed captions"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/v4/how-to-guides/texttrack/introduction",children:"THEOplayer introduction texttracks"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var i=n(67294);let a={},r=i.createContext(a);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);