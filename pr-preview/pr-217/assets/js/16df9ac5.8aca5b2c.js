"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["95348"],{98981:function(e,t,a){a.r(t),a.d(t,{default:()=>l,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>h,contentTitle:()=>o});var n=JSON.parse('{"id":"getting-started/sei-messages","title":"In-stream metadata through SEI messages","description":"---","source":"@site/theolive/getting-started/sei-messages.mdx","sourceDirName":"getting-started","slug":"/getting-started/sei-messages","permalink":"/documentation/pr-preview/pr-217/theolive/getting-started/sei-messages","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/getting-started/sei-messages.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"theolive","previous":{"title":"THEOlive scheduler: schedule channel start & stop","permalink":"/documentation/pr-preview/pr-217/theolive/getting-started/scheduler"},"next":{"title":"Troubleshooting","permalink":"/documentation/pr-preview/pr-217/theolive/getting-started/troubleshooting"}}'),s=a("85893"),i=a("50065");let r={sidebar_position:11},o="In-stream metadata through SEI messages",d={},h=[];function c(e){let t={code:"code",h1:"h1",header:"header",hr:"hr",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"in-stream-metadata-through-sei-messages",children:"In-stream metadata through SEI messages"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"THEOlive allows you to embed metadata into your stream that is preserved throughout the THEOlive pipeline and can be accessed by the player."}),"\n",(0,s.jsx)(t.p,{children:"The first step is adding the metadata to your (h264) input stream in the form of picture timing SEI messages as defined in ITUT H264 Annex D 1.3. These messages allow you to add a timestamp to your frames and associate the timestamp with an event that happened on your backend."}),"\n",(0,s.jsxs)(t.p,{children:["Next step is reacting to these messages when the player receives them. When the player receives a frame with an attached picture timing SEI message, it will emit a ",(0,s.jsx)(t.code,{children:"FrameMetadatEvent"}),". The types look like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"typescript",children:"export interface FrameMetadataEvent extends Event<'framemetadata'> {\n  readonly metadata: FrameMetadata[];\n}\n\n/**\n * All possible types of frame metadata. Note this might be extended in the future so explicitely check the type field\n * to see the type of the metadata\n */\nexport type FrameMetadata = TimeCodeMetadata;\n\n/**\n * Metadata containing a timecode.\n */\nexport interface TimeCodeMetadata {\n  readonly type: 'timecode';\n  readonly timeCode: TimeCode;\n}\n\nexport interface TimeCode {\n  readonly hours: number;\n  readonly minutes: number;\n  readonly seconds: number;\n  readonly frames: number;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, the event contains metadata that for now can only be of type ",(0,s.jsx)(t.code,{children:"timecode"}),". As this may change in the future, it is best to filter out the metadata which are of type ",(0,s.jsx)(t.code,{children:"timecode"})," if you want to use this feature. These metadata contain the fields that correspond to picture timing fields defined in the SEI message."]}),"\n",(0,s.jsx)(t.p,{children:"So a full example could be as follows:"}),"\n",(0,s.jsxs)(t.p,{children:["You distribute sports matches and want to display an overlay on the player when the score changes. Every time a score change happens, you add a picture timing SEI message to the stream and store in your backend that this time corresponds with this score. (You could also just add the timing message to all frames if this is easier, but this requires more processing both server and player side). This information can then be retrieved by the application running on the device of a viewer. You then add the event listener and listen for the ",(0,s.jsx)(t.code,{children:"framemetadata"})," events and filter out the timecode metadata. In the listener you check whether the ",(0,s.jsx)(t.code,{children:"TimeCode"})," corresponds with a score change event you recorded earlier and if so, display an overlay over the player."]})]})}function l(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return r}});var n=a(67294);let s={},i=n.createContext(s);function r(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);