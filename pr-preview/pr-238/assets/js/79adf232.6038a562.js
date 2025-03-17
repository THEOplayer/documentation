"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["93879"],{14778:function(e,n,o){o.r(n),o.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>h,contentTitle:()=>s});var r=JSON.parse('{"id":"faq/self-hosting-theoplayer","title":"Self-hosting and versioning of THEOplayer","description":"Your licensed THEOplayer can also be hosted on your own servers or CDN.","source":"@site/theoplayer_versioned_docs/version-v4/faq/34-self-hosting-theoplayer.md","sourceDirName":"faq","slug":"/faq/self-hosting-theoplayer","permalink":"/documentation/pr-preview/pr-238/theoplayer/v4/faq/self-hosting-theoplayer","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/34-self-hosting-theoplayer.md","tags":[],"version":"v4","sidebarPosition":34,"frontMatter":{},"sidebar":"faq","previous":{"title":"How to use ProGuard with THEOplayer Android SDK","permalink":"/documentation/pr-preview/pr-238/theoplayer/v4/faq/how-to-use-proguard-with-android-sdk"},"next":{"title":"Does THEOplayer support EXT-X-DATERANGE","permalink":"/documentation/pr-preview/pr-238/theoplayer/v4/faq/does-theoplayer-support-ext-x-daterange"}}'),t=o("85893"),i=o("50065");let a={},s="Self-hosting and versioning of THEOplayer",l={},h=[{value:"Configuring self-hosting",id:"configuring-self-hosting",level:2},{value:"Common mistakes",id:"common-mistakes",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"self-hosting-and-versioning-of-theoplayer",children:"Self-hosting and versioning of THEOplayer"})}),"\n",(0,t.jsx)(n.p,{children:"Your licensed THEOplayer can also be hosted on your own servers or CDN.\nThis can be useful when you do not want to have a dependency on a third-party hosting infrastructure, for using THEOplayer on internal/local (and even offline) networks or for using THEOplayer inside mobile apps."}),"\n",(0,t.jsx)(n.p,{children:"There are two approaches to download the THEOplayer SDK for self-hosting purposes:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/theoplayer",children:"NPM"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Download the SDK through ",(0,t.jsx)(n.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsx)(n.p,{children:"When self-hosting THEOplayer, it is important you regularly update your self-hosted THEOplayer files in order to benefit from the latest improvements."})}),"\n",(0,t.jsxs)(n.p,{children:["In order to download the THEOplayer package and host it on your server, you will first have to determine which version of the player you want to use.\nRead up about version changes in the ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v4/changelog",children:"changelog"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-self-hosting",children:"Configuring self-hosting"}),"\n",(0,t.jsx)(n.p,{children:"Once you extracted the ZIP package to your server, you must configure THEOplayer and provide the information where the resources can be found.\nFor this, you should configure 1 parameter correctly:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"libraryLocation"}),": This parameter should point to the location of the library. It is the location where the ZIP package has been extracted and the resources are available on the server."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Of course, also keep in mind to correctly link to the correct JavaScript library and CSS file."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="/path/to/THEOplayer.js"><\/script>\n<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n'})}),"\n",(0,t.jsx)(n.h2,{id:"common-mistakes",children:"Common mistakes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Configuring the libraryLocation incorrectly. The referred location/folder should contain ",(0,t.jsx)(n.code,{children:"theoplayer.d.js"}),", ",(0,t.jsx)(n.code,{children:"theoplayer.e.js"}),", ",(0,t.jsx)(n.code,{children:"theoplayer.p.js"}),", ",(0,t.jsx)(n.code,{children:"THEOplayer.js"}),", and so on, and they need to all have the same version."]}),"\n",(0,t.jsxs)(n.li,{children:["Using the THEOplayer library on a web page which resides on a non-whitelisted domain (e.g. ",(0,t.jsx)(n.a,{href:"http://localhost/index.html",children:"http://localhost/index.html"}),"). Although you can host your library assets anywhere, you can only use the actual video player on white-listed domains."]}),"\n",(0,t.jsx)(n.li,{children:"Linking to an unreachable JavaScript or CSS library."}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return a}});var r=o(67294);let t={},i=r.createContext(t);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);