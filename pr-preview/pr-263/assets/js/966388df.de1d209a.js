"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["43295"],{65688:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>h,contentTitle:()=>i});var s=JSON.parse('{"id":"getting-started/sdks/web/api-examples","title":"API examples","description":"This page contains an overview of examples, demonstrating the capabilities of the THEOplayer API and custom JavaScript. With these examples, we try to explain the fundamentals of how to use our API:","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/01-api-examples.md","sourceDirName":"getting-started/01-sdks/01-web","slug":"/getting-started/sdks/web/api-examples","permalink":"/documentation/pr-preview/pr-263/theoplayer/v7/getting-started/sdks/web/api-examples","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/01-api-examples.md","tags":[],"version":"v7","sidebarPosition":1,"frontMatter":{},"sidebar":"web","previous":{"title":"Getting started on Web","permalink":"/documentation/pr-preview/pr-263/theoplayer/v7/getting-started/sdks/web/getting-started"},"next":{"title":"How to implement Keyboard Hotkeys","permalink":"/documentation/pr-preview/pr-263/theoplayer/v7/getting-started/sdks/web/how-to-implement-hotkeys"}}'),o=n("85893"),r=n("50065");let a={},i="API examples",l={},h=[{value:"Properties and methods",id:"properties-and-methods",level:2},{value:"Events",id:"events",level:2},{value:"UI",id:"ui",level:2}];function c(e){let t={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"api-examples",children:"API examples"})}),"\n",(0,o.jsx)(t.p,{children:"This page contains an overview of examples, demonstrating the capabilities of the THEOplayer API and custom JavaScript. With these examples, we try to explain the fundamentals of how to use our API:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Accessing ",(0,o.jsx)(t.strong,{children:"player properties"})," and using ",(0,o.jsx)(t.strong,{children:"methods"})," (e.g. ",(0,o.jsx)(t.em,{children:"currentTime"}),", ",(0,o.jsx)(t.em,{children:"duration"}),", ...) ,"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Hooking to ",(0,o.jsx)(t.strong,{children:"events"}),","]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Inserting DOM-elements (buttons, text, ...) in the ",(0,o.jsx)(t.strong,{children:"UI"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The examples are sorted per subject, and a link can re-appear if it also relates to another subject.\nNew examples will be added from time to time, when new use cases arise, or when new developments happen."}),"\n",(0,o.jsxs)(t.p,{children:["If you are new to THEOplayer, please read our ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v7/getting-started/sdks/web/getting-started",children:"Getting Started on Web"})," or our ",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/",children:"API pages"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"properties-and-methods",children:"Properties and methods"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/creating-bookmarks-with-js-css-theoplayer",children:"http://demo.theoplayer.com/creating-bookmarks-with-js-css-theoplayer"})," \u2014 Demonstrates how to use basic player properties and the ",(0,o.jsx)(t.em,{children:"play()"})," method to create your own bookmarks, and load those settings into your active player."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/keeping-track-of-currenttime-timeupdate",children:"http://demo.theoplayer.com/keeping-track-of-currenttime-timeupdate"})," \u2014 Demonstrates a use case of the ",(0,o.jsx)(t.em,{children:"currentTime"}),", ",(0,o.jsx)(t.em,{children:"played"})," and ",(0,o.jsx)(t.em,{children:"buffered"})," properties."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/adblock-detection",children:"http://demo.theoplayer.com/adblock-detection"})," \u2014 Demonstrates how to use ad block detection."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/schedule-ad-example",children:"http://demo.theoplayer.com/schedule-ad-example"})," \u2014 Demonstrates how to schedule an advertisement."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/using-events-examples",children:"http://demo.theoplayer.com/using-events-examples"})," \u2014 Demonstrates how to listen to player events as ",(0,o.jsx)(t.em,{children:"playing"})," and ",(0,o.jsx)(t.em,{children:"pause"}),", and ad events as ",(0,o.jsx)(t.em,{children:"adbegin"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/keeping-track-of-currenttime-timeupdate",children:"http://demo.theoplayer.com/keeping-track-of-currenttime-timeupdate"})," \u2014 Demonstrates a use case of the ",(0,o.jsx)(t.em,{children:"timeupdate"})," and ",(0,o.jsx)(t.em,{children:"loadeddata"})," event."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/implementing-continuous-play-with-js-cookies-theoplayer",children:"http://demo.theoplayer.com/implementing-continuous-play-with-js-cookies-theoplayer"})," \u2014 Demonstrates how to save the playhead position and restore it, using cookies."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/adblock-detection",children:"http://demo.theoplayer.com/adblock-detection"})," \u2014 Demonstrates how to use ad block detection."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"ui",children:"UI"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/adding-buttons-text-overlay-to-theoplayer",children:"http://demo.theoplayer.com/adding-buttons-text-overlay-to-theoplayer"})," \u2014 Demonstrates how to insert a button in the control bar, overlay a container and overlay text."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/changing-default-player-ui-css",children:"http://demo.theoplayer.com/changing-default-player-ui-css"})," \u2014 Demonstrates how to change some elements (e.g. re-color progress bar, change control bar icon) of the default UI."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/chromeless-ui-js-html-css",children:"http://demo.theoplayer.com/chromeless-ui-js-html-css"})," \u2014 Demonstrates how to create a minimal chromeless UI."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/timejump-buttons",children:"http://demo.theoplayer.com/timejump-buttons"})," - Demonstrates how to insert buttons which can jump back/forth in time."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/language-localization",children:"http://demo.theoplayer.com/language-localization"})," - Demonstrates how to configure language localization."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/custom-center-controlbar",children:"http://demo.theoplayer.com/custom-center-controlbar"})," - Demonstrates how to create custom centered control bar"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/fullscreen-social-controlbar",children:"http://demo.theoplayer.com/fullscreen-social-controlbar"})," - Demonstrates how to create a custom social control bar which is only visible when the player is in fullscreen mode"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/playlist-and-caching",children:"http://demo.theoplayer.com/playlist-and-caching"})," - Demonstrates how to build a playlist which can preload upcoming content"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/player-background-image",children:"http://demo.theoplayer.com/player-background-image"})," - Demonstrates how to set a background image for the player"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/using-custom-error-messages",children:"http://demo.theoplayer.com/using-custom-error-messages"})," - Demonstrates how to display custom error messages"]}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var s=n(67294);let o={},r=s.createContext(o);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);