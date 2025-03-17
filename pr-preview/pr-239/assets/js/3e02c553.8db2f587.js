"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["4426"],{12163:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"how-to-guides/miscellaneous/error/error-codes","title":"Error codes","description":"THEOplayer has different types of error events.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/04-error/02-error-codes.md","sourceDirName":"how-to-guides/07-miscellaneous/04-error","slug":"/how-to-guides/miscellaneous/error/error-codes","permalink":"/documentation/pr-preview/pr-239/theoplayer/v4/how-to-guides/miscellaneous/error/error-codes","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/07-miscellaneous/04-error/02-error-codes.md","tags":[],"version":"v4","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to do error handling","permalink":"/documentation/pr-preview/pr-239/theoplayer/v4/how-to-guides/miscellaneous/error/how-to-do-error-handling"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-239/theoplayer/v4/how-to-guides/network/introduction"}}'),t=n("85893"),i=n("50065");let s={},l="Error codes",d={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Categories",id:"categories",level:2},{value:"Codes",id:"codes",level:2}];function a(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"error-codes",children:"Error codes"})}),"\n",(0,t.jsxs)(r.p,{children:['THEOplayer has different types of error events.\nOne of those error events is the "generic player error event".\nThis error event indicates a fatal error, and can be intercepted through the ',(0,t.jsx)(r.code,{children:"Player"})," interface."]}),"\n",(0,t.jsx)(r.p,{children:'This error event exposes an "error code" to explain the occurred error.\nAn error code may be more interesting to track than a verbose error messages\nFor example, if you are logging errors through an analytics service,\nit could be useful to filter them by their error code.'}),"\n",(0,t.jsx)(r.p,{children:'An error code is a number (e.g. 2001), and it belongs to a category.\nThe format of an error code is "[category][sub-code]".\nFor example, error "2001" belong to category 2, and has sub-code 001.'}),"\n",(0,t.jsxs)(r.p,{children:['Refer to "',(0,t.jsx)(r.a,{href:"/documentation/pr-preview/pr-239/theoplayer/v4/how-to-guides/miscellaneous/error/how-to-do-error-handling",children:"How to do error handling"}),'" to learn how to detect the "generic player error event".']}),"\n",(0,t.jsx)(r.h2,{id:"sdks",children:"SDKs"}),"\n",(0,t.jsx)(r.p,{children:'The "generic player error event" is available across platforms and SDKs.'}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,t.jsx)(r.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,t.jsx)(r.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,t.jsx)(r.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,t.jsx)(r.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,t.jsx)(r.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"categories",children:"Categories"}),"\n",(0,t.jsx)(r.p,{children:"Each error code belongs to an error category. At the time of writing, there are 11 categories."}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Configuration error: the integrator misconfigured the player."}),"\n",(0,t.jsx)(r.li,{children:"License error: the player license is no longer valid, incorrect or not provided."}),"\n",(0,t.jsx)(r.li,{children:"Source invalid: the source is not valid, or cannot be played on the current platform."}),"\n",(0,t.jsx)(r.li,{children:"Manifest load error: the manifest cannot be loaded or parsed."}),"\n",(0,t.jsx)(r.li,{children:"Media not supported: the media cannot be played on the current platform."}),"\n",(0,t.jsx)(r.li,{children:"Network error: the network timed out, or is not available."}),"\n",(0,t.jsx)(r.li,{children:"Content protection error: anything DRM related. Key system is not supported, invalid license, license expired, key missing, output restricted..."}),"\n",(0,t.jsx)(r.li,{children:"Subtitle load error: the subtitles cannot be loaded or parsed..."}),"\n",(0,t.jsx)(r.li,{children:"VR not supported: VR is not available on the current platform, VR presentation cannot be switched"}),"\n",(0,t.jsx)(r.li,{children:"Ad blocker detected: an ad has been blocked (or the third party CSAI library was not loaded)"}),"\n",(0,t.jsx)(r.li,{children:"Fullscreen error: switching to fullscreen is not possible (note: this may be the case when fullscreen was not triggered by user interaction)"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["You can programmatically request the list of available error categories through the THEOplayer API.\nFor example, on the Web SDK, you can access this list through ",(0,t.jsx)(r.code,{children:"THEOplayer.ErrorCategory"}),",\nas illustrated by the screenshot below."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"ErrorCategory",src:n(7611).Z+"",title:"ErrorCategory",width:"2632",height:"1314"})}),"\n",(0,t.jsxs)(r.p,{children:["You can also programmatically request the category of an error code through the THEOplayer API.\nFor example, on the Web SDK, you can access this through ",(0,t.jsx)(r.code,{children:"THEOplayer.ErrorCategory.fromCode(<errorCode>)"}),".\n(Meaning: ",(0,t.jsx)(r.code,{children:"THEOplayer.ErrorCategory.fromCode(11000)"})," would return ",(0,t.jsx)(r.code,{children:"11"}),".)"]}),"\n",(0,t.jsx)(r.p,{children:"Relevant API references:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Web SDK","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/enums/ErrorCategory.html",children:(0,t.jsx)(r.code,{children:"ErrorCategory"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/functions/ErrorCategory-1.fromCode.html",children:(0,t.jsx)(r.code,{children:"ErrorCategory.fromCode()"})})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Android SDK","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/error/ErrorCategory.html",children:(0,t.jsx)(r.code,{children:"ErrorCategory"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/error/ErrorCategory.html#fromCode(ErrorCode)",children:(0,t.jsx)(r.code,{children:"ErrorCategory.fromCode()"})})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["iOS SDK","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Enums/ErrorCategory.html",children:(0,t.jsx)(r.code,{children:"ErrorCategory"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"codes",children:"Codes"}),"\n",(0,t.jsxs)(r.p,{children:["An error code is prefixed with its category. For example, code ",(0,t.jsx)(r.code,{children:"11001"})," belongs to category ",(0,t.jsx)(r.code,{children:"11"}),", and has sub-code 001.\nIf the error is a generic sub-code for its category, then the sub-code will be ",(0,t.jsx)(r.code,{children:"000"}),".\nIn other words, error ",(0,t.jsx)(r.code,{children:"11000"}),' would be the "catch-all" for category ',(0,t.jsx)(r.code,{children:"11"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["You can programmatically request the list of all available error codes through the THEOplayer API.\nFor example, on the Web SDK, you can access this through ",(0,t.jsx)(r.code,{children:"THEOplayer.ErrorCode"}),",\nas illustrated by the screenshot below."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"ErrorCode",src:n(92278).Z+"",title:"ErrorCode",width:"2630",height:"1296"})}),"\n",(0,t.jsx)(r.p,{children:"Relevant API references:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Web SDK","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/enums/ErrorCode.html",children:(0,t.jsx)(r.code,{children:"ErrorCode"})})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Android SDK","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/error/ErrorCode.html",children:(0,t.jsx)(r.code,{children:"ErrorCode"})})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["iOS SDK","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"THEOErrorCode"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},7611:function(e,r,n){n.d(r,{Z:function(){return o}});let o=n.p+"assets/images/error-code-ErrorCategory-6f53a43777395769d34029b30d5ecade.png"},92278:function(e,r,n){n.d(r,{Z:function(){return o}});let o=n.p+"assets/images/error-code-ErrorCode-198ffee2db62e071b0f3be03b5e2d95d.png"},50065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return s}});var o=n(67294);let t={},i=o.createContext(t);function s(e){let r=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);