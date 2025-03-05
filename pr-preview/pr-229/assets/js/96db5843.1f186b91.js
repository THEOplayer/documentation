"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["2014"],{80343:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>p,contentTitle:()=>i});var t=JSON.parse('{"id":"external/web-ui/docs/getting-started","title":"Getting started","description":"Start building your UI in just a few minutes!","source":"@site/open-video-ui/external/web-ui/docs/getting-started.mdx","sourceDirName":"external/web-ui/docs","slug":"/web/getting-started","permalink":"/documentation/pr-preview/pr-229/open-video-ui/web/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-ui/blob/-/docs/getting-started.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"Start building your UI in just a few minutes!","sidebar_position":1,"sidebar_custom_props":{"icon":"\uD83D\uDE80"},"slug":"/web/getting-started"},"sidebar":"web","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-229/open-video-ui/web/"},"next":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-229/open-video-ui/web/guides"}}'),o=s("85893"),r=s("50065");let l={description:"Start building your UI in just a few minutes!",sidebar_position:1,sidebar_custom_props:{icon:"\uD83D\uDE80"},slug:"/web/getting-started"},i="Getting started",a={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Default UI",id:"default-ui",level:3},{value:"Custom UI",id:"custom-ui",level:3},{value:"Legacy browser support",id:"legacy-browser-support",level:3}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"getting-started",children:"Getting started"})}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["This project requires the THEOplayer Web SDK to be installed.","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm install theoplayer\n"})}),"\n","You can also install a different variant of the THEOplayer npm package if you don't need all features, as long as it's aliased as ",(0,o.jsx)(n.code,{children:"theoplayer"}),".","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm install theoplayer@npm:@theoplayer/basic-hls\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Install the Open Video UI for Web.","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npm install @theoplayer/web-ui\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Add ",(0,o.jsx)(n.code,{children:"@theoplayer/web-ui"})," to your app:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Option 1: in your HTML.","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<script src="/path/to/node_modules/theoplayer/THEOplayer.chromeless.js"><\/script>\n<script src="/path/to/node_modules/@theoplayer/web-ui/dist/THEOplayerUI.js"><\/script>\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Option 2: in your JavaScript.","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { DefaultUI } from '@theoplayer/web-ui';\n"})}),"\n","Open Video UI will import THEOplayer from ",(0,o.jsx)(n.code,{children:"theoplayer/chromeless"}),".\nIf you're using a bundler such as Webpack or Rollup, this dependency should automatically get bundled with your web app.\nAlternatively, you can use an ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap",children:"import map"})," to let the browser resolve it:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<script type="importmap">\n    {\n        "imports": {\n            "theoplayer/chromeless": "/path/to/node_modules/theoplayer/THEOplayer.chromeless.esm.js"\n        }\n    }\n<\/script>\n\x3c!-- Import maps polyfill for browsers without import maps support (e.g. Safari 16.3) --\x3e\n<script async src="https://ga.jspm.io/npm:es-module-shims@1.8.0/dist/es-module-shims.js" crossorigin="anonymous"><\/script>\n<script type="module" src="/path/to/my_app.js"><\/script>\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h3,{id:"default-ui",children:"Default UI"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"<theoplayer-default-ui>"})," provides a fully-featured video player experience with minimal setup, and allows for small customizations such as changing colors or fonts."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Option 1: in your HTML.","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<theoplayer-default-ui\n    configuration=\'{"libraryLocation":"/path/to/node_modules/theoplayer/","license":"your_theoplayer_license_goes_here"}\'\n    source=\'{"sources":{"src":"https://example.com/stream.m3u8"}}\'\n></theoplayer-default-ui>\n<script>\n    // Optionally, access the underlying THEOplayer player instance\n    const ui = document.querySelector(\'theoplayer-default-ui\');\n    ui.player.addEventListener(\'playing\', () => console.log(\'THEOplayer is now playing\'));\n<\/script>\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Option 2: in your JavaScript.","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { DefaultUI } from '@theoplayer/web-ui';\nconst ui = new DefaultUI({\n    libraryLocation: '/path/to/node_modules/theoplayer/',\n    license: 'your_theoplayer_license_goes_here'\n});\n// Set a source for the player to play\nui.source = {\n    sources: {\n        src: 'https://example.com/stream.m3u8'\n    }\n};\n// Optionally, access the underlying THEOplayer player instance\nui.player.addEventListener('playing', () => console.log('THEOplayer is now playing'));\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-229/open-video-ui/web/examples/default-ui",children:"this page"})," for a complete example."]}),"\n",(0,o.jsx)(n.h3,{id:"custom-ui",children:"Custom UI"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to fully customize your video player layout, you can use a ",(0,o.jsx)(n.code,{children:"<theoplayer-ui>"})," instead."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<theoplayer-ui\n    configuration=\'{"libraryLocation":"/path/to/node_modules/theoplayer/","license":"your_theoplayer_license_goes_here"}\'\n    source=\'{"sources":{"src":"https://example.com/stream.m3u8"}}\'\n>\n    \x3c!-- Choose your own layout using the provided components (or your own!) --\x3e\n    <theoplayer-control-bar>\n        <theoplayer-time-range></theoplayer-time-range>\n    </theoplayer-control-bar>\n    <theoplayer-control-bar>\n        <theoplayer-play-button></theoplayer-play-button>\n        <theoplayer-mute-button></theoplayer-mute-button>\n        <theoplayer-volume-range></theoplayer-volume-range>\n    </theoplayer-control-bar>\n</theoplayer-ui>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-229/open-video-ui/web/examples/custom-ui",children:"this page"})," for a complete example."]}),"\n",(0,o.jsx)(n.h3,{id:"legacy-browser-support",children:"Legacy browser support"}),"\n",(0,o.jsxs)(n.p,{children:["By default, Open Video UI for Web targets modern browsers that support modern JavaScript syntax (such as ",(0,o.jsx)(n.a,{href:"https://caniuse.com/async-functions",children:"async/await"}),") and native ",(0,o.jsx)(n.a,{href:"https://caniuse.com/custom-elementsv1",children:"Custom Elements"}),". This keeps the download size small, so your viewers can spend less time waiting for your page to load and start watching their video faster."]}),"\n",(0,o.jsxs)(n.p,{children:["On older browsers (such as Internet Explorer 11 and older smart TVs), you need to load a different version of the Open Video UI that uses older JavaScript syntax. You also need to load additional polyfills for missing features such as Promises or Custom Elements. We recommend ",(0,o.jsx)(n.a,{href:"https://cdnjs.cloudflare.com/polyfill/",children:"the Cloudflare mirror of Polyfill.io"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/webcomponents/polyfills",children:"Web Components Polyfills"})," for these."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Option 1: in your HTML. This uses ",(0,o.jsx)(n.a,{href:"https://css-tricks.com/differential-serving/",children:"differential serving"})," so modern browsers will load the modern build (with ",(0,o.jsx)(n.code,{children:'type="module"'}),"), while legacy browsers will load the legacy build (with ",(0,o.jsx)(n.code,{children:"nomodule"}),")."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'\x3c!-- Modern browsers --\x3e\n<script type="importmap">\n    {\n        "imports": {\n            "theoplayer/chromeless": "/path/to/node_modules/theoplayer/THEOplayer.chromeless.esm.js"\n        }\n    }\n<\/script>\n\x3c!-- Import maps polyfill for browsers without import maps support (e.g. Safari 16.3) --\x3e\n<script async src="https://ga.jspm.io/npm:es-module-shims@1.8.0/dist/es-module-shims.js" crossorigin="anonymous"><\/script>\n<script type="module" src="/path/to/node_modules/@theoplayer/web-ui/dist/THEOplayerUI.mjs"><\/script>\n\x3c!-- Legacy browsers --\x3e\n<script nomodule src="https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=es2015"><\/script>\n<script nomodule src="https://unpkg.com/@webcomponents/webcomponentsjs@2.8.0/custom-elements-es5-adapter.js"><\/script>\n<script nomodule src="https://unpkg.com/@webcomponents/webcomponentsjs@2.8.0/webcomponents-bundle.js"><\/script>\n<script nomodule src="/path/to/node_modules/theoplayer/THEOplayer.chromeless.js"><\/script>\n<script nomodule src="/path/to/node_modules/@theoplayer/web-ui/dist/THEOplayerUI.es5.js"><\/script>\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Option 2: in your JavaScript. This will load the legacy build on both modern and legacy browsers, which is suboptimal. Instead, we recommend configuring your bundler to produce a modern and legacy build of your entire web app, and to import the appropriate version of Open Video UI for each build flavor."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';\nimport '@webcomponents/webcomponentsjs/webcomponents-bundle.js';\nimport { DefaultUI } from '@theoplayer/web-ui/es5'; // note the \"/es5\" suffix\n"})}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var t=s(67294);let o={},r=t.createContext(o);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);