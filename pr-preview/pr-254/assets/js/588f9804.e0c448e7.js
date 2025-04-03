"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["84162"],{27865:function(e,t,o){o.r(t),o.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"faq/why-cant-we-select-other-video-quality-on-ios-tvos","title":"Why can\'t I select another video quality on iOS/tvOS?","description":"In short: Apple technically restricts video players from doing this, and there is no workaround.","source":"@site/theoplayer/faq/07-why-cant-we-select-other-video-quality-on-ios-tvos.md","sourceDirName":"faq","slug":"/faq/why-cant-we-select-other-video-quality-on-ios-tvos","permalink":"/documentation/pr-preview/pr-254/theoplayer/faq/why-cant-we-select-other-video-quality-on-ios-tvos","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/07-why-cant-we-select-other-video-quality-on-ios-tvos.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"faq","previous":{"title":"Why does Chromecast not work on iOS Chrome?","permalink":"/documentation/pr-preview/pr-254/theoplayer/faq/why-does-chromecast-not-work-on-ios-chrome"},"next":{"title":"Is YouTube supported","permalink":"/documentation/pr-preview/pr-254/theoplayer/faq/is-youtube-supported"}}'),n=o("85893"),a=o("50065");let r={},s="Why can't I select another video quality on iOS/tvOS?",l={},c=[{value:"The case for iOS Safari, macOS Safari, iOS SDK and tvOS SDK",id:"the-case-for-ios-safari-macos-safari-ios-sdk-and-tvos-sdk",level:4},{value:"Resources",id:"resources",level:2}];function d(e){let t={a:"a",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"why-cant-i-select-another-video-quality-on-iostvos",children:"Why can't I select another video quality on iOS/tvOS?"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"In short"}),": Apple technically restricts video players from doing this, and there is no workaround."]}),"\n",(0,n.jsx)(t.h4,{id:"the-case-for-ios-safari-macos-safari-ios-sdk-and-tvos-sdk",children:"The case for iOS Safari, macOS Safari, iOS SDK and tvOS SDK"}),"\n",(0,n.jsx)(t.p,{children:"Any HTML5 video player, like THEOplayer, needs to use native technologies to do video playback, decoding and decryption. On web browsers, video players typically leverage the MSE and EME API by default. If this API is not available, then video players have to rely on native playback to handle video playback, decoding, decryption and ABR selection."}),"\n",(0,n.jsxs)(t.p,{children:["On iOS browsers, THEOplayer has to use the native playback pipeline, instead of the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API",children:"MSE"})," and ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API",children:"EME"})," API. The native playback pipeline on iOS also exposes an API, but this API doesn't expose any information on the available qualities in a HLS stream, nor does it indicate which quality is currently active."]}),"\n",(0,n.jsx)(t.p,{children:"When a FairPlay DRM protected stream is used, we are limited by the same scenario on macOS Safari since for DRM playback we rely on the native pipeline."}),"\n",(0,n.jsxs)(t.p,{children:["The underlying AVFoundation stack on iOS/tvOS SDKs, which THEOplayer has to use, brings along the technical limitation that you cannot select a specific video quality. Instead, you can set a maximum resolution or bitrate as explained ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/theoplayer/how-to-guides/mediatrack/how-to-select-video-track-quality#ios-tvos-sdk",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"In result, THEOplayer cannot offer functionality to developers and viewers to change qualities on these scenarios."}),"\n",(0,n.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API",children:"https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/theoplayer/how-to-guides/mediatrack/how-to-select-video-track-quality#ios-tvos-sdk",children:"How to programmatically select a video track quality"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,o){o.d(t,{Z:function(){return s},a:function(){return r}});var i=o(67294);let n={},a=i.createContext(n);function r(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);