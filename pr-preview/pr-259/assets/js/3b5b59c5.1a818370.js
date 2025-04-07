"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["53438"],{26693:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"getting-started/sdks/web/how-to-use-multiview","title":"How to use MultiView","description":"This article will go over how to work with THEOplayer\'s MultiViewPlayer. As the setup is very similar to using","source":"@site/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/01-web/12-how-to-use-multiview.md","sourceDirName":"getting-started/01-sdks/01-web","slug":"/getting-started/sdks/web/how-to-use-multiview","permalink":"/documentation/pr-preview/pr-259/theoplayer/v6/getting-started/sdks/web/how-to-use-multiview","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/01-web/12-how-to-use-multiview.md","tags":[],"version":"v6","sidebarPosition":12,"frontMatter":{},"sidebar":"web","previous":{"title":"How to use THEOplayer as a JavaScript module","permalink":"/documentation/pr-preview/pr-259/theoplayer/v6/getting-started/sdks/web/how-to-use-javascript-module"},"next":{"title":"Getting Started on webOS","permalink":"/documentation/pr-preview/pr-259/theoplayer/v6/getting-started/sdks/webos/getting-started"}}'),n=i("85893"),s=i("50065");let l={},a="How to use MultiView",o={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Your THEOplayer SDK needs to have the &#39;multiview&#39; feature enabled.",id:"1-your-theoplayer-sdk-needs-to-have-the-multiview-feature-enabled",level:4},{value:"2. You need to have a THEOplayer license which is compatible with MultiView",id:"2-you-need-to-have-a-theoplayer-license-which-is-compatible-with-multiview",level:4},{value:"Basic setup",id:"basic-setup",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-to-use-multiview",children:"How to use MultiView"})}),"\n",(0,n.jsxs)(t.p,{children:["This article will go over how to work with THEOplayer's MultiViewPlayer. As the setup is very similar to using\nnormal THEOplayer, we strongly recommend reading the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v6/getting-started/sdks/web/getting-started",children:"getting started documentation for web"})," first."]}),"\n",(0,n.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.h4,{id:"1-your-theoplayer-sdk-needs-to-have-the-multiview-feature-enabled",children:"1. Your THEOplayer SDK needs to have the 'multiview' feature enabled."}),"\n",(0,n.jsxs)(t.p,{children:["You can quickly check using ",(0,n.jsx)(t.code,{children:"THEOplayer.features"}),". The feature is only available from THEOplayer 4.3 and onwards.\nThis feature is included by default in the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/extended",children:"@theoplayer/extended"})," npm package."]}),"\n",(0,n.jsx)(t.h4,{id:"2-you-need-to-have-a-theoplayer-license-which-is-compatible-with-multiview",children:"2. You need to have a THEOplayer license which is compatible with MultiView"}),"\n",(0,n.jsxs)(t.p,{children:["This can be done through ",(0,n.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"basic-setup",children:"Basic setup"}),"\n",(0,n.jsx)(t.p,{children:"To make a MultiViewPlayer, one has to add the following code to their page:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<div class=\"theoplayer-container video-js theoplayer-skin vjs-16-9\"></div>\n<script src=\"/path/to/THEOplayer.js\"><\/script>\n<script>\n  var element = document.querySelector('.theoplayer-container'); // fetch THEOplayer container div\n\n  var player = new THEOplayer.MultiViewPlayer(element, {\n    // instantiates the MultiView player\n    libraryLocation: '/path/to/your-theoplayer-folder/', // references folder containing your THEOplayer library files (THEOplayer.js, ...)\n    license: 'your_license_string', // references your THEOplayer SDK license\n  });\n<\/script>\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now that the MultiViewPlayer is instantiated, you'll need to load each view separately:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"player.load('Label', {\n  sources: [\n    {\n      src: '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8', // sets HLS source\n      type: 'application/x-mpegurl', // sets type to HLS\n    },\n  ],\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The MultiViewPlayer has a slightly different API from the general THEOplayer, so for more information we refer to the ",(0,n.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/classes/MultiViewPlayer.html",children:"documentation"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return l}});var r=i(67294);let n={},s=r.createContext(n);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);