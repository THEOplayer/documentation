"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["47056"],{32666:function(e,r,n){n.r(r),n.d(r,{default:()=>c,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"how-to-guides/miscellaneous/error/how-to-do-error-handling","title":"How to do error handling","description":"As a developer, you could be interested in error handling for any of the following reasons:","source":"@site/theoplayer_versioned_docs/version-v8/how-to-guides/07-miscellaneous/04-error/01-how-to-do-error-handling.md","sourceDirName":"how-to-guides/07-miscellaneous/04-error","slug":"/how-to-guides/miscellaneous/error/how-to-do-error-handling","permalink":"/documentation/pr-preview/pr-255/theoplayer/v8/how-to-guides/miscellaneous/error/how-to-do-error-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/how-to-guides/07-miscellaneous/04-error/01-how-to-do-error-handling.md","tags":[],"version":"v8","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-255/theoplayer/v8/how-to-guides/miscellaneous/error/introduction"},"next":{"title":"Error codes","permalink":"/documentation/pr-preview/pr-255/theoplayer/v8/how-to-guides/miscellaneous/error/error-codes"}}'),s=n("85893"),o=n("50065");let i={},l="How to do error handling",a={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Intercepting errors",id:"intercepting-errors",level:2},{value:"Event Listener",id:"event-listener",level:3},{value:"Web",id:"web",level:4},{value:"Android",id:"android",level:4},{value:"iOS",id:"ios",level:4},{value:"Getter",id:"getter",level:3},{value:"Types of errors",id:"types-of-errors",level:2},{value:"Remarks",id:"remarks",level:2}];function h(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"how-to-do-error-handling",children:"How to do error handling"})}),"\n",(0,s.jsx)(r.p,{children:"As a developer, you could be interested in error handling for any of the following reasons:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["You want to render human-friendly error messages inside the video player. Reading this error message,","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"the user can either remediate the issue by themselves (e.g. by refreshing the page, by checking again in some time, ...),"}),"\n",(0,s.jsx)(r.li,{children:"or contact a support service with this error code."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:"You want to send error-data to an analytics service. (And this service helps you to identify frequent issues.)"}),"\n",(0,s.jsx)(r.li,{children:"You want to self-remediate the issue. For example, if a stream is unavailable, they want to retry to load the stream, or load a different stream."}),"\n",(0,s.jsx)(r.li,{children:"..."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"THEOplayer exposes different types of errors, and they can be accessed and intercepted in different ways."}),"\n",(0,s.jsx)(r.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsx)(r.p,{children:"Error handling is available across platforms and SDKs."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"intercepting-errors",children:"Intercepting errors"}),"\n",(0,s.jsx)(r.p,{children:"Developers can programmatically interact with errors in two ways:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Through an event listener, and attaching an event handler to this listener"}),"\n",(0,s.jsx)(r.li,{children:"Through a getter, which holds data when an error has occurred."}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"event-listener",children:"Event Listener"}),"\n",(0,s.jsx)(r.p,{children:"Developers can subscribe to events and attach a callback function.\nThis callback function implements the error handling."}),"\n",(0,s.jsxs)(r.p,{children:['This section describes how to use event handlers for the "top-level", "generic", "player" ',(0,s.jsx)(r.code,{children:"error"})," event.\nThis is the ",(0,s.jsx)(r.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/PlayerEventMap.html#error",children:(0,s.jsx)(r.code,{children:"error"})})," event which is dispatched through the ",(0,s.jsx)(r.code,{children:"Player"})," interface.\nThis event is fatal and prevents playback.\n(There are also ",(0,s.jsx)(r.code,{children:"error"})," events, for example the ",(0,s.jsx)(r.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/ChromecastEventMap.html#error",children:(0,s.jsx)(r.code,{children:"error"})})," event which is dispatched through the ",(0,s.jsx)(r.code,{children:"Chromecast"})," interface.\nYou handle these ",(0,s.jsx)(r.code,{children:"error"})," events in the same fashion.)"]}),"\n",(0,s.jsx)(r.h4,{id:"web",children:"Web"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"player.addEventListener('error', function (errorEvent) {\n  console.log(errorEvent);\n});\n"})}),"\n",(0,s.jsx)(r.h4,{id:"android",children:"Android"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:"theoPlayerView.getPlayer().addEventListener(PlayerEventTypes.ERROR, new EventListener<ErrorEvent>() {\n    @Override\n    public void handleEvent(ErrorEvent errorEvent) {\n        System.out.println(errorEvent.getErrorObject());\n    }\n});\n"})}),"\n",(0,s.jsx)(r.h4,{id:"ios",children:"iOS"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-swift",children:"let listener = self.theoplayer?.addEventListener(type: PlayerEventTypes.ERROR, listener: { error in print(error.error)})\n"})}),"\n",(0,s.jsx)(r.h3,{id:"getter",children:"Getter"}),"\n",(0,s.jsxs)(r.p,{children:['Developers can query an occurred "generic player error" through the ',(0,s.jsx)(r.code,{children:"errorObject"})," property of its related interface.\nFor example, if the ",(0,s.jsx)(r.code,{children:"error"})," event of the top-level ",(0,s.jsx)(r.code,{children:"Player"})," interface would be dispatched for the Web SDK,\nthen you can access the ",(0,s.jsx)(r.code,{children:"errorObject"})," property of this interface."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"player.addEventListener('error', function (errorEvent) {\n  // console.log(errorEvent);\n  console.log(player.errorObject);\n});\n"})}),"\n",(0,s.jsx)(r.p,{children:"Note that other types of errors are not available through this approach."}),"\n",(0,s.jsx)(r.h2,{id:"types-of-errors",children:"Types of errors"}),"\n",(0,s.jsxs)(r.p,{children:['"',(0,s.jsx)(r.a,{href:"/documentation/pr-preview/pr-255/theoplayer/v8/faq/which-error-related-events-does-player-expose",children:"Which error related events does the player expose"}),'" lists which\ntypes of errors there are. Note that generally speaking only the "generic error event" is fatal.\nOther events, like the "Chromecast error event" and the "ad error event", are considered non-fatal because some type of playback can style continue.']}),"\n",(0,s.jsxs)(r.p,{children:['"',(0,s.jsx)(r.a,{href:"/documentation/pr-preview/pr-255/theoplayer/v8/how-to-guides/miscellaneous/error/error-codes",children:"Error codes"}),'" lists which error codes are available for the "generic error event".']}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["We encourage developers to use event listeners to handle errors.","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"The data in this event can be processed (e.g. stringified) and transferred (e.g. sent to an analytics service)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["You could render your own error messages inside the video player.","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["The article at ",(0,s.jsx)(r.a,{href:"http://demo.theoplayer.com/using-custom-error-messages",children:"http://demo.theoplayer.com/using-custom-error-messages"})," offers some help on this for the Web SDK."]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return i}});var t=n(67294);let s={},o=t.createContext(s);function i(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);