"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["17239"],{19506:function(e,t,i){i.r(t),i.d(t,{default:()=>m,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>h,contentTitle:()=>o});var a=JSON.parse('{"id":"faq/error-message-initial-period-provided-MPEG-DASH","title":"What does the error message \u201CSomething went wrong determining the initial period of the provided MPEG-DASH stream\u201D mean","description":"This error, \\"Something went wrong determining the initial period of the provided MPEG-DASH stream\\", occurs whenever the player struggles to play a DASH stream due to problems determining the availability of the segments for that stream. The recommended solution for this is to make sure that the segments result available, based on the data provided in the manifest, at the time at which the manifest is requested.","source":"@site/theoplayer/faq/65-error-message-initial-period-provided-MPEG-DASH.md","sourceDirName":"faq","slug":"/faq/error-message-initial-period-provided-MPEG-DASH","permalink":"/documentation/pr-preview/pr-239/theoplayer/faq/error-message-initial-period-provided-MPEG-DASH","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/65-error-message-initial-period-provided-MPEG-DASH.md","tags":[],"version":"current","sidebarPosition":65,"frontMatter":{},"sidebar":"faq","previous":{"title":"Page and Source domains","permalink":"/documentation/pr-preview/pr-239/theoplayer/faq/page-and-source-domains"},"next":{"title":"Why is my PlayReady stream not working in Chromium Edge?","permalink":"/documentation/pr-preview/pr-239/theoplayer/faq/Why-is-my-Playready-stream-not-working-in-Chromium-Edge"}}'),n=i("85893"),r=i("50065");let s={},o="What does the error message \u201CSomething went wrong determining the initial period of the provided MPEG-DASH stream\u201D mean",l={},h=[{value:"Long Answer",id:"long-answer",level:2}];function d(e){let t={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"what-does-the-error-message-something-went-wrong-determining-the-initial-period-of-the-provided-mpeg-dash-stream-mean",children:"What does the error message \u201CSomething went wrong determining the initial period of the provided MPEG-DASH stream\u201D mean"})}),"\n",(0,n.jsx)(t.p,{children:'This error, "Something went wrong determining the initial period of the provided MPEG-DASH stream", occurs whenever the player struggles to play a DASH stream due to problems determining the availability of the segments for that stream. The recommended solution for this is to make sure that the segments result available, based on the data provided in the manifest, at the time at which the manifest is requested.'}),"\n",(0,n.jsx)(t.h2,{id:"long-answer",children:"Long Answer"}),"\n",(0,n.jsx)(t.p,{children:'A number of fixes and improvements we made available in several releases throughout 2020 brought THEOplayer to apply the DASH specification regarding segments availability more strictly than in previous versions. In other words, the player now requires, for successful playback, that the manifest indicates correctly the availability of segments. This is especially relevant for dynamic Media Presentations (MPD@type="dynamic").'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"How to check whether your segments are available at the right time"}),"\nFor the segments to be correctly played, they must be available at the time when the manifest is requested/served. In other words,"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"\u201Cstart of segment availability\u201D < \u201Cmanifest is requested/served\u201D < \u201Cend of segment availability\u201D"})}),"\n",(0,n.jsx)(t.p,{children:"How is the segment availability time calculated? The DASH specification indicates that:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"For services with MPD@type='dynamic', the Segment availability start time of a Media Segment is the sum of"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the value of the MPD@availabilityStartTime,"}),"\n",(0,n.jsx)(t.li,{children:"the PeriodStart time of the containing Period as defined in 5.3.2.1,"}),"\n",(0,n.jsx)(t.li,{children:"the MPD start time of the Media Segment, and"}),"\n",(0,n.jsx)(t.li,{children:"the MPD duration of the Media Segment."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"[\u2026]\nThe Segment availability end time of a Media Segment is the sum of the Segment availability start time, the MPD duration of the Media Segment and the value of the attribute @timeShiftBufferDepth for this Representation."}),"\n",(0,n.jsx)(t.p,{children:"If the @availabilityTimeOffset attribute is present for a Representation, then the adjusted segment availability start time is determined by subtracting the value of @availabilityTimeOffset from the Segment availability start time. This adjusted segment availability start time provides a time instant in wall-clock time at which a Segment becomes an available Segment. Note that if the @availabilityTimeComplete flag is set to true for such a Representation, then the entire Segment may not yet be available at the adjusted segment availability start time."}),"\n"]})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return s}});var a=i(67294);let n={},r=a.createContext(n);function s(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);