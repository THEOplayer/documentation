"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["88170"],{22725:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"faq/why-does-fullscreen-not-behave-as-expected-on-ios","title":"Why does fullscreen not behave as expected on iOS","description":"One of the most frequently encountered issues on iOS devices is unexpected behavior concerning fullscreen playback.","source":"@site/theoplayer/faq/04-why-does-fullscreen-not-behave-as-expected-on-ios.md","sourceDirName":"faq","slug":"/faq/why-does-fullscreen-not-behave-as-expected-on-ios","permalink":"/documentation/pr-preview/pr-260/theoplayer/faq/why-does-fullscreen-not-behave-as-expected-on-ios","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/04-why-does-fullscreen-not-behave-as-expected-on-ios.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"faq","previous":{"title":"How to combat autoplay policies","permalink":"/documentation/pr-preview/pr-260/theoplayer/faq/how-to-combat-autoplay-policies"},"next":{"title":"Why does the Network API not work on iOS devices","permalink":"/documentation/pr-preview/pr-260/theoplayer/faq/why-does-network-api-not-work-on-ios-devices"}}'),r=t("85893"),s=t("50065");let i={},a="Why does fullscreen not behave as expected on iOS",l={},c=[];function d(e){let n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"why-does-fullscreen-not-behave-as-expected-on-ios",children:"Why does fullscreen not behave as expected on iOS"})}),"\n",(0,r.jsx)(n.p,{children:"One of the most frequently encountered issues on iOS devices is unexpected behavior concerning fullscreen playback."}),"\n",(0,r.jsxs)(n.p,{children:["This is in fact an iOS limitation, since iOS + Safari does not allow showing non-video elements in fullscreen, as mentioned on this ",(0,r.jsx)(n.a,{href:"https://caniuse.com/#feat=fullscreen",children:"support matrix"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["THEOplayer's workaround involves playback in full-window, which sets THEOplayer's container to a ",(0,r.jsx)(n.code,{children:"width"})," and ",(0,r.jsx)(n.code,{children:"height"})," of 100%. Other elements can be placed on top of this view by giving it the CSS property ",(0,r.jsx)(n.code,{children:"position: absolute;"})," (Combined with a top/bottom/right/left value) If this is not desired, reduce the ",(0,r.jsx)(n.code,{children:"z-index"})," of these other elements."]}),"\n",(0,r.jsx)(n.p,{children:"Note that this solution keeps the THEOplayer UI intact, but doesn't get rid of the address bar as desired in some cases."}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, developers can use the ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/PlayerConfiguration.html#allowNativeFullscreen",children:"allowNativeFullscreen"})," property mentioned here, which pushes the video element to fullscreen as seen below."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<script>\n    var element = document.querySelector('.theoplayer-container');\n    var player = new THEOplayer.Player(element, {\n        libraryLocation : '/your_library_location/',\n        license: \"your_license\",\n        allowNativeFullscreen: true,\n        ui : {\n            width : '500px',\n            heigth : '100px'\n        }\n    });\n\n    player.source = {\n        sources : [{\n            src : '//cdn.example.com/index.m3u8',\n            type : 'application/x-mpegurl'\n        }]\n    };\n<\/script>\n"})}),"\n",(0,r.jsx)(n.p,{children:"The downside of this approach is that the iOS native look & feel will replace the custom UI, although the address bar will be gone."}),"\n",(0,r.jsx)(n.p,{children:"When you go full-window in an iframe, you won't see the container of the video grow because the iframe can't get any larger."})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var o=t(67294);let r={},s=o.createContext(r);function i(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);