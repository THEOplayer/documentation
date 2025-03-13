"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["30317"],{97915:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"getting-started/sdks/tizen/getting-started","title":"Getting started on Tizen","description":"This how-to guide describes how to set up a Tizen application using the THEOplayer SDK on Tizen.","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/08-tizen/00-getting-started.md","sourceDirName":"getting-started/01-sdks/08-tizen","slug":"/getting-started/sdks/tizen/getting-started","permalink":"/documentation/pr-preview/pr-234/theoplayer/v7/getting-started/sdks/tizen/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/08-tizen/00-getting-started.md","tags":[],"version":"v7","sidebarPosition":0,"frontMatter":{},"sidebar":"web","previous":{"title":"Getting Started on webOS","permalink":"/documentation/pr-preview/pr-234/theoplayer/v7/getting-started/sdks/webos/getting-started"},"next":{"title":"Getting started on Tizen","permalink":"/documentation/pr-preview/pr-234/theoplayer/v7/getting-started/sdks/tizen/getting-started"}}'),r=t("85893"),s=t("50065");let l={},d="Getting started on Tizen",a={},o=[{value:"Set-up",id:"set-up",level:2},{value:"Getting started with the THEOplayer Tizen reference app",id:"getting-started-with-the-theoplayer-tizen-reference-app",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Reference app structure structure",id:"reference-app-structure-structure",level:3}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started-on-tizen",children:"Getting started on Tizen"})}),"\n",(0,r.jsx)(n.p,{children:"This how-to guide describes how to set up a Tizen application using the THEOplayer SDK on Tizen."}),"\n",(0,r.jsxs)(n.p,{children:["You may also find the ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-234/theoplayer/v7/getting-started/sdks/web/getting-started",children:"Getting Started on Web"})," to be useful."]}),"\n",(0,r.jsx)(n.h2,{id:"set-up",children:"Set-up"}),"\n",(0,r.jsx)(n.p,{children:"For brevity, set-up is split up over multiple pages:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-234/theoplayer/v7/getting-started/sdks/tizen/installing-tizen-studio",children:"Setting up Tizen Studio"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-234/theoplayer/v7/getting-started/sdks/tizen/generating-a-certificate",children:"Generating a certificate"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-234/theoplayer/v7/getting-started/sdks/tizen/setting-up-physical",children:"Setting up and deploying on a physical device (recommended)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-234/theoplayer/v7/getting-started/sdks/tizen/setting-up-emulator",children:"Setting up and deploying on an emulator (less recommended)"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"getting-started-with-the-theoplayer-tizen-reference-app",children:"Getting started with the THEOplayer Tizen reference app"}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Generate a Tizen SDK build via the ",(0,r.jsx)(n.a,{href:"https://portal.theoplayer.com/",children:"THEOplayer portal"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Download the ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-tizen",children:"reference app project"})]}),"\n",(0,r.jsx)(n.li,{children:"Read the README to get started. There is one at the root level and one in the two examples."}),"\n",(0,r.jsx)(n.li,{children:"Import the project in Tizen Studio"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Go to File -> Open Projects from File System"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(6212).Z+"",width:"345",height:"114"})}),"\n",(0,r.jsx)(n.p,{children:"Select the directory. Then press Finish."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(53197).Z+"",width:"858",height:"640"})}),"\n",(0,r.jsx)(n.h3,{id:"reference-app-structure-structure",children:"Reference app structure structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"example-with-ui/"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Contains a Tizen project with a UI. Follow the readme for more instructions."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"css/"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CSS styles as used in the app."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"js/"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["JavaScript files as used in the app. The compiled result of ",(0,r.jsx)(n.code,{children:"src/"})," is put in here."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"src/"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The source code of the UI application. Change or replace as desired."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"libs/"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(Insert your THEOplayer Tizen SDK here)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"index.html"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Entry point of application."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"config.xml"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Permissions of the app."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"package.json"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Contains the commands required to build the UI."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"minimum-example/"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Contains a very minimal Tizen project example. No UI included."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"libs/"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(Insert your THEOplayer Tizen SDK here)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"index.html"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Entry point of application."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"config.xml"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Permissions of the app."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},6212:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/import-1-8aaecab1b94a589fec742e47cd9bd394.jpg"},53197:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/import-2-abd40c64a1537775af117e7460865ac6.jpg"},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var i=t(67294);let r={},s=i.createContext(r);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);