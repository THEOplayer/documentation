"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["19092"],{16685:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"getting-started/sdks/web/how-to-use-javascript-module","title":"How to use THEOplayer as a JavaScript module","description":"As of THEOplayer 6.0, THEOplayer can also be used as","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/11-how-to-use-javascript-module.md","sourceDirName":"getting-started/01-sdks/01-web","slug":"/getting-started/sdks/web/how-to-use-javascript-module","permalink":"/documentation/pr-preview/pr-189/theoplayer/v7/getting-started/sdks/web/how-to-use-javascript-module","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/11-how-to-use-javascript-module.md","tags":[],"version":"v7","sidebarPosition":11,"frontMatter":{},"sidebar":"web","previous":{"title":"How to use WebXR with THEOplayer","permalink":"/documentation/pr-preview/pr-189/theoplayer/v7/getting-started/sdks/web/how-to-use-vr-using-webxr"},"next":{"title":"How to use MultiView","permalink":"/documentation/pr-preview/pr-189/theoplayer/v7/getting-started/sdks/web/how-to-use-multiview"}}'),i=n("85893"),s=n("50065");let a={},l="How to use THEOplayer as a JavaScript module",o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic setup",id:"basic-setup",level:2},{value:"Step 1: Set up an HTML file",id:"step-1-set-up-an-html-file",level:3},{value:"Step 2: Including the THEOplayer library",id:"step-2-including-the-theoplayer-library",level:3},{value:"THEOplayer JavaScript library",id:"theoplayer-javascript-library",level:4},{value:"THEOplayer CSS library",id:"theoplayer-css-library",level:4},{value:"Step 3: The video",id:"step-3-the-video",level:3},{value:"Create video player container",id:"create-video-player-container",level:4},{value:"Create THEOplayer instance",id:"create-theoplayer-instance",level:4},{value:"Configure video stream",id:"configure-video-stream",level:4},{value:"Step 4: The result",id:"step-4-the-result",level:3},{value:"Next steps",id:"next-steps",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"how-to-use-theoplayer-as-a-javascript-module",children:"How to use THEOplayer as a JavaScript module"})}),"\n",(0,i.jsxs)(t.p,{children:["As of THEOplayer 6.0, THEOplayer can also be used as\na ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"JavaScript module"}),". Instead of loading the\nlibrary through a ",(0,i.jsx)(t.code,{children:"<script>"})," tag in your HTML, you ",(0,i.jsx)(t.code,{children:"import"})," it directly from your JavaScript code."]}),"\n",(0,i.jsx)(t.p,{children:"Using JavaScript modules has several advantages:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["It's easier to manage dependencies per file, rather than maintaining a long list of ",(0,i.jsx)(t.code,{children:"<script>"})," tags and keeping them\nin the right order."]}),"\n",(0,i.jsxs)(t.li,{children:["If multiple JavaScript files ",(0,i.jsx)(t.code,{children:"import"})," the same module, the module is only loaded once. (On the other hand,\nmultiple ",(0,i.jsx)(t.code,{children:"<script>"})," tags with the same ",(0,i.jsx)(t.code,{children:"src"})," attribute will load and execute the script multiple times.)"]}),"\n",(0,i.jsx)(t.li,{children:"When you use a bundler for your web app, your bundler can more easily understand the dependencies between your files\nand generate a single output bundle of your entire app."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, since JavaScript modules are only supported in modern web browsers, THEOplayer can use more modern\nJavaScript syntax in its JavaScript module (such as ",(0,i.jsx)(t.a,{href:"https://caniuse.com/async-functions",children:"async/await"}),"). This results in\nsmaller files, which load and execute faster on your viewer's devices."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),"\nIf you need to support older browsers (such as older smart TVs), you should stick with a classic ",(0,i.jsx)(t.code,{children:"<script>"}),"\ntag. ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-189/theoplayer/v7/getting-started/sdks/web/getting-started",children:"See the getting started guide"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In this article, we will set up a simple web page using JavaScript modules with the THEOplayer SDK on Web.\nThe outcome of this article is the template below."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n  </head>\n  <body>\n    <div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>\n    <script type="module">\n      import * as THEOplayer from \'/path/to/THEOplayer.esm.js\';\n\n      let element = document.querySelector(\'.theoplayer-container\');\n      let player = new THEOplayer.Player(element, {\n        libraryLocation: \'/path/to/your-theoplayer-folder/\',\n        license: \'your_license_string\',\n      });\n\n      player.source = {\n        sources: [\n          {\n            src: \'//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8\',\n            type: \'application/x-mpegurl\',\n          },\n        ],\n      };\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-189/theoplayer/v7/getting-started/sdks/web/getting-started#prerequisites",children:"the prerequisites in our getting started guide"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"basic-setup",children:"Basic setup"}),"\n",(0,i.jsx)(t.p,{children:"Now, we're ready to set up THEOplayer on your website. This guide explains how you implement THEOplayer in four steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["We'll ",(0,i.jsx)(t.a,{href:"#step-1-set-up-an-html-file",children:"start from a basic HTML file"}),", with no mention of THEOplayer."]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.a,{href:"#step-2-including-the-theoplayer-library",children:"second step"}),", we'll explain what the THEOplayer library is and how you can include it.\nWe'll do the same for the default THEOplayer UI."]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.a,{href:"#step-3-the-video",children:"third step"}),", we'll describe how you play a video stream through THEOplayer."]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.a,{href:"#step-4-the-result",children:"fourth step"}),", we'll give a final overview."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-1-set-up-an-html-file",children:"Step 1: Set up an HTML file"}),"\n",(0,i.jsx)(t.p,{children:"When THEOplayer is used as a web video player, we will need a web page (i.e. HTML file) to embed THEOplayer and the code."}),"\n",(0,i.jsxs)(t.p,{children:["Note that a THEOplayer SDK license can only be used on whitelisted domains.\nYou configure these domains when you create a THEOplayer Web SDK at ",(0,i.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Let's start with the following HTML file:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  </head>\n  <body>\n    <script type="module"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Pay attention to the ",(0,i.jsx)(t.code,{children:'type="module"'})," attribute on the ",(0,i.jsx)(t.code,{children:"<script>"})," tag. This informs the browser to execute it as a\nmodule, rather than as a classic script. This allows the code inside it to use ",(0,i.jsx)(t.code,{children:"import"})," and ",(0,i.jsx)(t.code,{children:"export"})," statements."]}),"\n",(0,i.jsx)(t.p,{children:"Next, we\u2019ll include the THEOplayer SDK."}),"\n",(0,i.jsx)(t.h3,{id:"step-2-including-the-theoplayer-library",children:"Step 2: Including the THEOplayer library"}),"\n",(0,i.jsx)(t.p,{children:"To access the THEOplayer API and default UI, you must first include the THEOplayer library files.\nThe JavaScript library exposes the THEOplayer API and the CSS library contains the default UI."}),"\n",(0,i.jsx)(t.h4,{id:"theoplayer-javascript-library",children:"THEOplayer JavaScript library"}),"\n",(0,i.jsx)(t.p,{children:"The following line imports the THEOplayer JavaScript library, and gives you access to the THEOplayer API."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<script type=\"module\">\n  import * as THEOplayer from '/path/to/THEOplayer.esm.js';\n<\/script>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The path of the ",(0,i.jsx)(t.code,{children:"import"})," statement is the URI of the THEOplayer library that you wish to use. This could be something\nlike: ",(0,i.jsx)(t.code,{children:"/path/to/THEOplayer.esm.js"}),", where the URL is a link to your ",(0,i.jsx)(t.code,{children:"THEOplayer.esm.js"})," file."]}),"\n",(0,i.jsxs)(t.p,{children:["You must swap ",(0,i.jsx)(t.code,{children:"/path/to/"})," with your CDN URL.\nFor example, if your SDK is hosted on ",(0,i.jsx)(t.code,{children:"https://example.com/vendor/theoplayer/"}),", then you'd write the following import:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import * as THEOplayer from 'https://example.com/vendor/theoplayer/THEOplayer.esm.js';\n"})}),"\n",(0,i.jsx)(t.h4,{id:"theoplayer-css-library",children:"THEOplayer CSS library"}),"\n",(0,i.jsx)(t.p,{children:"To use the default THEOplayer UI, you need to reference the THEOplayer CSS library:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"<link>"})," tag includes a CSS file on a web page.\nSimilar to the JavaScript library, you must swap ",(0,i.jsx)(t.code,{children:"/path/to/"})," with your CDN URL."]}),"\n",(0,i.jsx)(t.p,{children:"Next, we\u2019ll create a THEOplayer instance and configure a video stream."}),"\n",(0,i.jsx)(t.h3,{id:"step-3-the-video",children:"Step 3: The video"}),"\n",(0,i.jsx)(t.p,{children:"To play a video through the THEOplayer Web SDK, you must:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create a video player container,"}),"\n",(0,i.jsx)(t.li,{children:"fetch this container through JavaScript,"}),"\n",(0,i.jsx)(t.li,{children:"create a THEOplayer instance associated with that container,"}),"\n",(0,i.jsx)(t.li,{children:"and configure a video stream for this instance."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The snippet below implements these 4 steps."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<div class=\"theoplayer-container video-js theoplayer-skin vjs-16-9\"></div>\n<script type=\"module\">\n  import * as THEOplayer from '/path/to/THEOplayer.esm.js';\n\n  let element = document.querySelector('.theoplayer-container'); // fetch THEOplayer container div\n\n  let player = new THEOplayer.Player(element, {\n    // instantiates video player\n    libraryLocation: '/path/to/your-theoplayer-folder/', // references folder containing your THEOplayer library files (theoplayer.p.js, THEOplayer.js, ...)\n    license: 'your_license_string', // references your THEOplayer SDK license\n  });\n\n  // HLS\n  player.source = {\n    sources: [\n      {\n        src: '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8', // sets HLS source\n        type: 'application/x-mpegurl', // sets type to HLS\n      },\n    ],\n  };\n\n  // DASH\n  // player.source = {\n  //     sources : [{\n  //         src : '//amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest(format=mpd-time-csf)', // sets DASH source\n  //         type : 'application/dash+xml' // sets type to MPEG-DASH\n  //     }]\n  // };\n<\/script>\n"})}),"\n",(0,i.jsx)(t.p,{children:"Let's break down the above snippet."}),"\n",(0,i.jsx)(t.h4,{id:"create-video-player-container",children:"Create video player container"}),"\n",(0,i.jsxs)(t.p,{children:["This ",(0,i.jsx)(t.code,{children:"<div>"})," element creates a video player container."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"theoplayer-container"})," class is used to fetch the container through JavaScript, as demonstrated by the snippet below."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"video-js theoplayer-skin vjs-16-9"})," classes load the default THEOplayer UI. You may omit ",(0,i.jsx)(t.code,{children:"vjs-16-9"})," if you don't want a 16:9 container."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"let element = document.querySelector('.theoplayer-container');\n"})}),"\n",(0,i.jsx)(t.h4,{id:"create-theoplayer-instance",children:"Create THEOplayer instance"}),"\n",(0,i.jsxs)(t.p,{children:["The snippet below creates a THEOplayer instance for a container with a\nspecific ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/PlayerConfiguration.html",children:"Player Configuration"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"let player = new THEOplayer.Player(element, {\n  // instantiates video player\n  libraryLocation: '/path/to/your-theoplayer-folder/', // references folder containing your THEOplayer library files (theoplayer.p.js, THEOplayer.js, ...)\n  license: 'your_license_string', // references your THEOplayer SDK license\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Similar to the JavaScript and CSS library, you must swap out ",(0,i.jsx)(t.code,{children:"'/path/to/your-theoplayer-folder/'"}),"\nand ",(0,i.jsx)(t.code,{children:"'your_license_string'"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, if your SDK is hosted on ",(0,i.jsx)(t.code,{children:"https://example.com/vendor/theoplayer/"})," and your license string is ",(0,i.jsx)(t.code,{children:"ABCD1234"}),", then you would instead configure the snippet below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"var player = new THEOplayer.Player(element, {\n  libraryLocation: 'https://example.com/vendor/theoplayer/',\n  license: 'ABCD1234',\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can read more about configuring the ",(0,i.jsx)(t.code,{children:"license"})," at\nthe ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-189/theoplayer/v7/how-to-guides/license/introduction",children:"License section"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"configure-video-stream",children:"Configure video stream"}),"\n",(0,i.jsx)(t.p,{children:"The snippet below configures a HLS video stream for the THEOplayer instance."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"player.source = {\n  sources: [\n    {\n      src: '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8', // sets HLS source\n      type: 'application/x-mpegurl', // sets type to HLS\n    },\n  ],\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To configure a DASH stream instead,\nyou must set ",(0,i.jsx)(t.code,{children:"type"})," to ",(0,i.jsx)(t.code,{children:"'application/dash+xml'"})," instead of ",(0,i.jsx)(t.code,{children:"'application/x-mpegurl'"}),",\nas demonstrated by commented out code in one of the earlier snippets."]}),"\n",(0,i.jsx)(t.p,{children:"In the next step we'll put everything together."}),"\n",(0,i.jsx)(t.h3,{id:"step-4-the-result",children:"Step 4: The result"}),"\n",(0,i.jsx)(t.p,{children:"We're done! Here's the complete code again, which you can put on your web server:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n  </head>\n  <body>\n    <div class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>\n    <script type="module">\n      import * as THEOplayer from \'/path/to/THEOplayer.esm.js\';\n\n      let element = document.querySelector(\'.theoplayer-container\');\n      let player = new THEOplayer.Player(element, {\n        libraryLocation: \'/path/to/your-theoplayer-folder/\',\n        license: \'your_license_string\',\n      });\n\n      player.source = {\n        sources: [\n          {\n            src: \'//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8\',\n            type: \'application/x-mpegurl\',\n          },\n        ],\n      };\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsx)(t.p,{children:"Ready to learn more?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Go through our ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-189/theoplayer/v7/how-to-guides/",children:"how-to guides"})," to learn about ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-189/theoplayer/v7/how-to-guides/ui/introduction",children:"UI customization"}),", ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-189/theoplayer/v7/how-to-guides/ads/introduction",children:"advertising"}),", ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-189/theoplayer/v7/how-to-guides/drm/introduction",children:"DRM"}),", ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-189/theoplayer/v7/how-to-guides/cast/chromecast/introduction",children:"casting"}),", ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-189/theoplayer/v7/how-to-guides/analytics/introduction",children:"analytics"})," and other topics."]}),"\n",(0,i.jsxs)(t.li,{children:["Check out our ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/classes/ChromelessPlayer.html",children:"API reference"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Try out samples from our ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer",children:"GitHub"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var r=n(67294);let i={},s=r.createContext(i);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);