"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["62660"],{4081:function(e,r,t){t.r(r),t.d(r,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"faq/Why-is-my-Playready-stream-not-working-in-Chromium-Edge","title":"Why is my PlayReady stream not working in Chromium Edge?","description":"If you are having problems playing PlayReady streams in Chromium Edge, this may be due to a conflict between player and browser, regarding the DRM system to use. If this is the case, you may solve the issue indicating Playready as your first option with the preferredKeySystems property.","source":"@site/theoplayer_versioned_docs/version-v4/faq/66-Why-is-my-Playready-stream-not-working-in-Chromium-Edge.md","sourceDirName":"faq","slug":"/faq/Why-is-my-Playready-stream-not-working-in-Chromium-Edge","permalink":"/documentation/pr-preview/pr-254/theoplayer/v4/faq/Why-is-my-Playready-stream-not-working-in-Chromium-Edge","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/66-Why-is-my-Playready-stream-not-working-in-Chromium-Edge.md","tags":[],"version":"v4","sidebarPosition":66,"frontMatter":{},"sidebar":"faq","previous":{"title":"What does the error message \u201CSomething went wrong determining the initial period of the provided MPEG-DASH stream\u201D mean","permalink":"/documentation/pr-preview/pr-254/theoplayer/v4/faq/error-message-initial-period-provided-MPEG-DASH"},"next":{"title":"Which subtitle and CC formats are supported on native Safari","permalink":"/documentation/pr-preview/pr-254/theoplayer/v4/faq/which-subtitle-and-cc-formats-are-supported-on-native-safari"}}'),n=t("85893"),i=t("50065");let a={},o="Why is my PlayReady stream not working in Chromium Edge?",d={},l=[{value:"Long Answer",id:"long-answer",level:2},{value:"Related issues",id:"related-issues",level:3}];function h(e){let r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"why-is-my-playready-stream-not-working-in-chromium-edge",children:"Why is my PlayReady stream not working in Chromium Edge?"})}),"\n",(0,n.jsxs)(r.p,{children:["If you are having problems playing PlayReady streams in Chromium Edge, this may be due to a conflict between player and browser, regarding the DRM system to use. If this is the case, you may solve the issue indicating Playready as your first option with the ",(0,n.jsxs)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/DRMConfiguration.html#preferredkeysystems",children:[(0,n.jsx)(r.em,{children:"preferredKeySystems"})," property"]}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"long-answer",children:"Long Answer"}),"\n",(0,n.jsxs)(r.p,{children:["Chromium Edge supports both PlayReady and Widevine DRM systems and by default both flags are active (",(0,n.jsx)(r.a,{href:"edge://flags/",children:"edge://flags/"}),") - see ",(0,n.jsx)(r.em,{children:"Related issues"})," for exceptions."]}),"\n",(0,n.jsxs)(r.p,{children:["In 2.78, we fixed an issue that was preventing specific streams to play in Edge Chromium with PlayReady (in certain cases) and with Widevine (in other cases) when both flags were enabled on the browser. In recent versions of the player, we also added the property ",(0,n.jsx)(r.em,{children:"preferredKeySystems"})," (documentation linked above), which helps the player choose the preferred DRM system."]}),"\n",(0,n.jsxs)(r.p,{children:["We noticed that, due to their default settings, a conflict arises (regarding which DRM system is to be given priority) between the player and the browser. This may lead to playback failure for certain PlayReady streams. This is solved directly on the implementer\u2019s side by using the following values order for the ",(0,n.jsx)(r.em,{children:"preferredKeySystems"})," property."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"preferredKeySystems: ['playready', 'widevine', 'fairplay'];\n"})}),"\n",(0,n.jsx)(r.p,{children:"Please note that this will not hinder playback in case also/only Widevine is present, nor on other browsers."}),"\n",(0,n.jsx)(r.h3,{id:"related-issues",children:"Related issues"}),"\n",(0,n.jsx)(r.p,{children:"In the same use cases, playback may also fail on the user\u2019s side due to other causes, independent of the player, for example:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["the flag for the DRM system used in the current DRM configuration in the ",(0,n.jsx)(r.em,{children:"player.source"})," is disabled"]}),"\n",(0,n.jsxs)(r.li,{children:["the machine/platform/browser version does not provide full support for a certain DRM system. For example, you can check the following link for PlayReady: ",(0,n.jsx)(r.a,{href:"https://testweb.playready.microsoft.com/Tool/Hwdrm",children:"https://testweb.playready.microsoft.com/Tool/Hwdrm"})]}),"\n",(0,n.jsx)(r.li,{children:"other issues related to the stream, DRM system or server"}),"\n"]})]})}function m(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return o},a:function(){return a}});var s=t(67294);let n={},i=s.createContext(n);function a(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);