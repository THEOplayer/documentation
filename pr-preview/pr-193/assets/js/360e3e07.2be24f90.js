"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["50074"],{46831:function(e,i,t){t.r(i),t.d(i,{default:()=>p,frontMatter:()=>r,metadata:()=>n,assets:()=>l,toc:()=>h,contentTitle:()=>s});var n=JSON.parse('{"id":"faq/how-to-make-pip-video-stay-visible-while-browsing","title":"What PiP options to use to make the video stay visible while browsing or on other applications","description":"When it comes to Picture-in-Picture (PiP), there are different options, each with its advantages and disadvantages. To have the floating video remain visible during browsing, you need an out-of-app PiP, but not all features are available (or the same) everywhere.","source":"@site/theoplayer_versioned_docs/version-v7/faq/78-how-to-make-pip-video-stay-visible-while-browsing.md","sourceDirName":"faq","slug":"/faq/how-to-make-pip-video-stay-visible-while-browsing","permalink":"/documentation/pr-preview/pr-193/theoplayer/v7/faq/how-to-make-pip-video-stay-visible-while-browsing","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/faq/78-how-to-make-pip-video-stay-visible-while-browsing.md","tags":[],"version":"v7","sidebarPosition":78,"frontMatter":{},"sidebar":"faq","previous":{"title":"What is the \\"WebAssembly.compileStreaming failed\\" warning and what does it mean?","permalink":"/documentation/pr-preview/pr-193/theoplayer/v7/faq/what-is-the-webAssembly-compileStreaming-failed-warning"},"next":{"title":"Why are the FairPlay license and certificate being requested again on iOS after ads?","permalink":"/documentation/pr-preview/pr-193/theoplayer/v7/faq/why-is-DRM-license-retrieved-again-after-ads-on-iOS"}}'),o=t("85893"),a=t("50065");let r={},s="What PiP options to use to make the video stay visible while browsing or on other applications",l={},h=[{value:"THEOplayer PiP",id:"theoplayer-pip",level:2},{value:"Native PiP",id:"native-pip",level:2},{value:"Firefox PiP",id:"firefox-pip",level:2}];function d(e){let i={a:"a",br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"what-pip-options-to-use-to-make-the-video-stay-visible-while-browsing-or-on-other-applications",children:"What PiP options to use to make the video stay visible while browsing or on other applications"})}),"\n",(0,o.jsxs)(i.p,{children:["When it comes to Picture-in-Picture (PiP), there are different options, each with its advantages and disadvantages. To have the floating video remain visible during browsing, you need an out-of-app PiP, but not all features are available (or the same) everywhere.",(0,o.jsx)(i.br,{}),"\n","The following gives a short general description of the most commonly used options."]}),"\n",(0,o.jsx)(i.h2,{id:"theoplayer-pip",children:"THEOplayer PiP"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/miscellaneous/picture-in-picture",children:"This guide"})," will help you get started with THEOplayer PiP in your implementation.",(0,o.jsx)(i.br,{}),"\n","Highlights:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)("u",{children:"Pros"}),": easily configured within the playerConfig; it will automatically trigger when the visible video portion is below the declared threshold; the pause/resume behaviour with a click on any part of the video is maintained; CSAI ads and subtitles are correctly rendered in the floating window"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)("u",{children:"Cons"}),": the floating player can't be resized at runtime and it sticks to its predefined position; it is in-app, meaning that it won't stay visible if you browse to other tabs or applications"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"native-pip",children:"Native PiP"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API",children:"documentation available here"})," describes the API and you can easily get it working with the described methods.",(0,o.jsx)(i.br,{}),"\n","Highlights:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)("u",{children:"Pros"}),": the user is in control of when the feature is active; this is out-of-app, meaning that the floating video element can be resized and moved, and it stays visible while browsing other tabs or apps."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)("u",{children:"Cons"}),": this requires a user action to be triggered; CSAI ads and subtitles may not be rendered in the floating video; resetting the source while in PiP may need additional logic for correct handling; it is not supported on all platforms (e.g.: Firefox and old versions of Safari, see ",(0,o.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API#browser_compatibility",children:"browser compatibility"}),"); different browsers may have a somewhat different UI in the floating video;"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"firefox-pip",children:"Firefox PiP"}),"\n",(0,o.jsxs)(i.p,{children:["Firefox has its own version of PiP, which includes by default a button on the video element. ",(0,o.jsx)(i.a,{href:"https://support.mozilla.org/en-US/kb/about-picture-picture-firefox",children:"More information"}),".",(0,o.jsx)(i.br,{}),"\n","Highlights:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"pros and cons are mainly the same as for the native PiP, although the UI is different"}),"\n",(0,o.jsx)(i.li,{children:"as this is a native Firefox feature, the button and context menu option to enable PiP cannot be hidden by the implementer. The users can, however, decide in their settings if the button will be visible for them."}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return r}});var n=t(67294);let o={},a=n.createContext(o);function r(e){let i=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);