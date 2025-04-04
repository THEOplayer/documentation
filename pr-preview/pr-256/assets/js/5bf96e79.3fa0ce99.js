"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["76264"],{64143:function(e,t,a){a.r(t),a.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"faq/does-theoplayer-support-ext-x-daterange","title":"Does THEOplayer support EXT-X-DATERANGE","description":"Yes, the HLS tag #EXT-X-DATERANGE is supported in THEOplayer as of 2.61.0. To enable it, hlsDateRange needs to be added to either the player configuration or the source description and be set to true. The date range metadata will be made available through the TextTrack API.","source":"@site/theoplayer_versioned_docs/version-v4/faq/35-does-theoplayer-support-ext-x-daterange.md","sourceDirName":"faq","slug":"/faq/does-theoplayer-support-ext-x-daterange","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/faq/does-theoplayer-support-ext-x-daterange","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/35-does-theoplayer-support-ext-x-daterange.md","tags":[],"version":"v4","sidebarPosition":35,"frontMatter":{},"sidebar":"faq","previous":{"title":"Self-hosting and versioning of THEOplayer","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/faq/self-hosting-theoplayer"},"next":{"title":"Can clipping be used on a playlist","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/faq/can-clipping-be-used-in-a-playlist"}}'),r=a("85893"),i=a("50065");let s={},o="Does THEOplayer support EXT-X-DATERANGE",d={},l=[{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"does-theoplayer-support-ext-x-daterange",children:"Does THEOplayer support EXT-X-DATERANGE"})}),"\n",(0,r.jsxs)(t.p,{children:["Yes, the HLS tag ",(0,r.jsx)(t.code,{children:"#EXT-X-DATERANGE"})," is supported in THEOplayer as of 2.61.0. To enable it, hlsDateRange needs to be added to either the player configuration or the source description and be set to true. The date range metadata will be made available through the TextTrack API."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"#EXT-X-DATERANGE"})," is a way of providing timed metadata in an HLS manifest. It is used to define date range metadata in a media playlist. A possible use case is defining timed metadata for interstitial regions such as advertisements, but can be used to define any timed metadata needed by your stream."]}),"\n",(0,r.jsxs)(t.p,{children:["As indicated above, ",(0,r.jsx)(t.code,{children:"#EXT-X-DATERANGE"})," is supported in THEOplayer as of 2.61.0. However, the feature is not enabled by default. To enable it, add hlsDateRange to the player configuration and set it to true. You can also choose (instead) to enable/disable the feature per source by adding the same option to a source in your source description."]}),"\n",(0,r.jsx)(t.p,{children:"The TextTrack API is used to retrieve the timed metadata. A MetadataTextTrack will provide cues which contain the timed metadata and will dispatch an event when started and ended."}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"A manifest with EXT-X-DATERANGEs needs to have an EXT-X-PROGRAM-DATE-TIME to be able to calculate dates from playback times. This is also a specification requirement."}),"\n",(0,r.jsx)(t.li,{children:"If the tag name for a date range tag in the manifest is incorrect, the tag will be ignored"}),"\n",(0,r.jsx)(t.li,{children:"If the name of any attribute is misspelled in a date range tag in the manifest, the attribute will not be parsed"}),"\n",(0,r.jsx)(t.li,{children:"When using native browser playback features such as FairPlay content protection, the player might use more resources to parse date ranges from the manifest than in other scenarios."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis-04#section-4.4.2.7",children:"HLS Specification - #EXT-X-DATERANGE"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/types/TextTrackType.html",children:"API reference - TextTrackType"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return s}});var n=a(67294);let r={},i=n.createContext(r);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);