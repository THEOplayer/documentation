"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["89520"],{70686:function(e,t,a){a.r(t),a.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>s});var n=JSON.parse('{"id":"knowledge-base/playback/program-date-time","title":"Program Date Time","description":"THEOplayer has support for associating media segments with an absolute date and time. This can be useful when you want to synchronize video playback with displaying other relevant information about the video stream.","source":"@site/theoplayer_versioned_docs/version-v7/knowledge-base/03-playback/04-program-date-time.md","sourceDirName":"knowledge-base/03-playback","slug":"/knowledge-base/playback/program-date-time","permalink":"/documentation/pr-preview/pr-233/theoplayer/v7/knowledge-base/playback/program-date-time","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/knowledge-base/03-playback/04-program-date-time.md","tags":[],"version":"v7","sidebarPosition":4,"frontMatter":{},"sidebar":"roku","previous":{"title":"Frame Accurate Seeking","permalink":"/documentation/pr-preview/pr-233/theoplayer/v7/knowledge-base/playback/frame-accurate-seeking"},"next":{"title":"Basic guide to Web Audio API","permalink":"/documentation/pr-preview/pr-233/theoplayer/v7/knowledge-base/playback/basic-guide-web-audio-api"}}'),r=a("85893"),i=a("50065");let o={},s="Program Date Time",d={},l=[{value:"API and usage",id:"api-and-usage",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"program-date-time",children:"Program Date Time"})}),"\n",(0,r.jsx)(t.p,{children:"THEOplayer has support for associating media segments with an absolute date and time. This can be useful when you want to synchronize video playback with displaying other relevant information about the video stream."}),"\n",(0,r.jsxs)(t.p,{children:["THEOplayer enables this feature by making use of the ",(0,r.jsx)(t.code,{children:"EXT-X-PROGRAM-DATE-TIME"})," information that gets embedded in the HLS manifest file."]}),"\n",(0,r.jsx)(t.h2,{id:"api-and-usage",children:"API and usage"}),"\n",(0,r.jsxs)(t.p,{children:["Once the ",(0,r.jsx)(t.code,{children:"EXT-X-PROGRAM-DATE-TIME"})," information is set in the HLS manifest, reading and setting the current program date time information on a THEOplayer instance is fairly straight forward. Start by ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-233/theoplayer/v7/getting-started/sdks/web/getting-started",children:"obtaining a reference to the THEOplayer instance"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"THEOplayer.players[identifier];\n"})}),"\n",(0,r.jsx)(t.p,{children:"On this THEOplayer instance, the following API attributes are available for controlling the current program data time:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Attribute"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"currentProgramDateTime"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Sets or returns the current program date time reference. This message is calculated from the PROGRAM-DATE-TIME tag. Setting the property will seek to the playback position to the new program date time. (Date object)"})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["The value of the currentProgramDateTime gets updated with each ",(0,r.jsx)(t.code,{children:"timeupdate"})," event thrown by the THEOplayer instance."]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return o}});var n=a(67294);let r={},i=n.createContext(r);function o(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);