"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["94922"],{41933:function(e,o,t){t.r(o),t.d(o,{default:()=>l,frontMatter:()=>s,metadata:()=>r,assets:()=>h,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"faq/the-provided-video-source-is-incompatible-with-the-license-for-this-player","title":"The provided video source is incompatible with the license for this player","description":"The player throws this error when the source of the player is incompatible with the license. This occurs when the domain of the source is not in the list of source domains of the license. For example, when you have yourfirstcdn.com and yoursecondcdn.com as source domains, but you use a video stream (i.e. source) from https://yourthirdcdn.com/video.m3u8, then the player will throw the above error because yourthirdcdn.com is not included in the source domains (yourfirstcdn.com and yoursecondcdn.com).","source":"@site/theoplayer_versioned_docs/version-v4/faq/63-the-provided-video-source-is-incompatible-with-the-license-for-this-player.md","sourceDirName":"faq","slug":"/faq/the-provided-video-source-is-incompatible-with-the-license-for-this-player","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/faq/the-provided-video-source-is-incompatible-with-the-license-for-this-player","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/63-the-provided-video-source-is-incompatible-with-the-license-for-this-player.md","tags":[],"version":"v4","sidebarPosition":63,"frontMatter":{},"sidebar":"faq","previous":{"title":"How to prevent screen recording","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/faq/how-to-prevent-screen-recording"},"next":{"title":"Page and Source domains","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/faq/page-and-source-domains"}}'),i=t("85893"),n=t("50065");let s={},c="The provided video source is incompatible with the license for this player",h={},d=[];function a(e){let o={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"the-provided-video-source-is-incompatible-with-the-license-for-this-player",children:"The provided video source is incompatible with the license for this player"})}),"\n",(0,i.jsxs)(o.p,{children:["The player throws this error when the source of the player is incompatible with the license. This occurs when the domain of the source is not in the list of source domains of the license. For example, when you have ",(0,i.jsx)(o.strong,{children:"yourfirstcdn.com"})," and ",(0,i.jsx)(o.strong,{children:"yoursecondcdn.com"})," as source domains, but you use a video stream (i.e. source) from ",(0,i.jsx)(o.strong,{children:(0,i.jsx)(o.a,{href:"https://yourthirdcdn.com/video.m3u8",children:"https://yourthirdcdn.com/video.m3u8"})}),", then the player will throw the above error because ",(0,i.jsx)(o.strong,{children:"yourthirdcdn.com"})," is not included in the source domains (",(0,i.jsx)(o.strong,{children:"yourfirstcdn.com"})," and ",(0,i.jsx)(o.strong,{children:"yoursecondcdn.com"}),")."]}),"\n",(0,i.jsx)(o.p,{children:"To resolve this issue you can do the following:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Use another source which is compatible with your SDK."}),"\n",(0,i.jsxs)(o.li,{children:["Verify the source domains of your SDK on the ",(0,i.jsx)(o.a,{href:"https://portal.theoplayer.com",children:"Developer Portal"}),"."]}),"\n",(0,i.jsx)(o.li,{children:"Change the source domains of your SDK to whitelist all domains."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Additionally, you could see this error on an edge case where you are setting a ",(0,i.jsx)(o.code,{children:"source"})," object with an empty ",(0,i.jsx)(o.code,{children:"source"})," URL but with any other valid URL, such as a ",(0,i.jsx)(o.code,{children:"poster"}),". In this case, since the source object passes a valid URL, the license check would be triggered and the empty array would cause to return this error. To work around this, you could consider setting both the ",(0,i.jsx)(o.code,{children:"source"})," and any other URL contained at the same time or if possible, setting the other URLs outside the source object to avoid license check with an empty source."]})]})}function l(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,o,t){t.d(o,{Z:function(){return c},a:function(){return s}});var r=t(67294);let i={},n=r.createContext(i);function s(e){let o=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);