"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["6814"],{68312:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>i,metadata:()=>a,assets:()=>l,toc:()=>h,contentTitle:()=>s});var a=JSON.parse('{"id":"getting-started/sdks/web/how-to-work-around-browser-cache-with-new-license","title":"How to work around browser cache with new THEOplayer SDK libraries?","description":"In some cases you may experience problems related to cached versions of the THEOplayer library (e.g. if you are dealing with users who are getting expired license errors even though you already deployed new SDK libraries).","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/06-how-to-work-around-browser-cache-with-new-license.md","sourceDirName":"getting-started/01-sdks/01-web","slug":"/getting-started/sdks/web/how-to-work-around-browser-cache-with-new-license","permalink":"/documentation/pr-preview/pr-260/theoplayer/v7/getting-started/sdks/web/how-to-work-around-browser-cache-with-new-license","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/06-how-to-work-around-browser-cache-with-new-license.md","tags":[],"version":"v7","sidebarPosition":6,"frontMatter":{},"sidebar":"web","previous":{"title":"How to implement a seamless transition between videos?","permalink":"/documentation/pr-preview/pr-260/theoplayer/v7/getting-started/sdks/web/how-to-implement-seamless-transition"},"next":{"title":"How to customize quality selection and labels on the default UI (MP4)","permalink":"/documentation/pr-preview/pr-260/theoplayer/v7/getting-started/sdks/web/how-to-customize-quality-selection"}}'),o=r("85893"),n=r("50065");let i={},s="How to work around browser cache with new THEOplayer SDK libraries?",l={},h=[{value:"Cache",id:"cache",level:2},{value:"Ways to force the browser to update",id:"ways-to-force-the-browser-to-update",level:2},{value:"Change the file path",id:"change-the-file-path",level:3},{value:"Add a variable at the end of the file",id:"add-a-variable-at-the-end-of-the-file",level:3},{value:"Related articles",id:"related-articles",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"how-to-work-around-browser-cache-with-new-theoplayer-sdk-libraries",children:"How to work around browser cache with new THEOplayer SDK libraries?"})}),"\n",(0,o.jsx)(t.p,{children:"In some cases you may experience problems related to cached versions of the THEOplayer library (e.g. if you are dealing with users who are getting expired license errors even though you already deployed new SDK libraries)."}),"\n",(0,o.jsx)(t.p,{children:"Related questions may be:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Can I implement a cachebuster on the THEOplayer library load?"}),"\n",(0,o.jsx)(t.li,{children:"Can I force a file to be called always from the server to prevent it from being fetched from the cache?"}),"\n",(0,o.jsx)(t.li,{children:"How can I make sure that users always get the newest version of THEOplayer libraries I deployed?"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"cache",children:"Cache"}),"\n",(0,o.jsx)(t.p,{children:"To reduce the internet usage and increase the responsiveness of a webpage, browsers use caching."}),"\n",(0,o.jsxs)(t.p,{children:["In simple terms, it may take a while to download a file (e.g. ",(0,o.jsx)(t.code,{children:"THEOplayer.js"}),"). The browser will therefore keep files stored locally in its cache for a certain amount of time for later usage. After some time, the browser will remove the file and update it the next time you visit that page. By keeping it locally, the browser can use the local file instead of having to fetch a new one. This makes your page faster, but the downside is that the browser may not get the most up-to-date file."]}),"\n",(0,o.jsx)(t.p,{children:"If you really need users to use the latest library you serve or renew at the expiration date of your contract, you may still run into caching issues."}),"\n",(0,o.jsx)(t.p,{children:"Luckily there are some ways to ensure that the browser updates the file."}),"\n",(0,o.jsx)(t.h2,{id:"ways-to-force-the-browser-to-update",children:"Ways to force the browser to update"}),"\n",(0,o.jsx)(t.h3,{id:"change-the-file-path",children:"Change the file path"}),"\n",(0,o.jsx)(t.p,{children:"A good way to ensure that the file gets updated, is by changing the file path. If your file path is different, the browser will see all the files within that new directory as new files and download them again."}),"\n",(0,o.jsx)(t.p,{children:"You could, for example, keep track of the version of THEOplayer or the deploy date by using different directories:"}),"\n",(0,o.jsx)(t.p,{children:"For example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<yoursite.com\n  >/resource/file/path/5.5.0/THEOplayer.js\n  <yoursite.com\n    >/resource/file/path/5.5.1/THEOplayer.js <yoursite.com>/resource/file/path/31-01-2023/THEOplayer.js</yoursite.com></yoursite.com\n  ></yoursite.com\n>\n"})}),"\n",(0,o.jsx)(t.h3,{id:"add-a-variable-at-the-end-of-the-file",children:"Add a variable at the end of the file"}),"\n",(0,o.jsxs)(t.p,{children:["Another way to trick the browser into updating the file immediately, is by adding a variable at the end of the filename. This variable on its own, in the case of ",(0,o.jsx)(t.code,{children:"THEOplayer.js"}),", won't change anything to the file."]}),"\n",(0,o.jsx)(t.p,{children:"By adding something like the version or the date, you can be sure that the browser updates the file."}),"\n",(0,o.jsx)(t.p,{children:"For example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<yoursite.com>/resource/file/path/THEOplayer.js?d=10012023 <yoursite.com>/resource/file/path/THEOplayer.js?v=5.5.1</yoursite.com></yoursite.com>\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note"}),": For HLS playback, the player uses worker files. These workers must be present in the ",(0,o.jsx)(t.code,{children:"libraryLocation"})," set on the player configuration. You do not need to link to them in the webpage as they are dynamically called from the ",(0,o.jsx)(t.code,{children:"libraryLocation"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The downside of adding a variable at the end of the filename is that these worker files will not get this variable and therefore may still be cached, resulting in a ",(0,o.jsx)(t.code,{children:"THEOplayer.js"})," file from a newer version, while the workers are still on the old version from the cache. In this case you may see an error from the player like the following:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"THEOplayer workers could not be loaded. please check that the worker's version matches THEOplayer's version (5.5.1)"})}),"\n",(0,o.jsx)(t.p,{children:"You can make sure that the variable is a different one for each call, thus requesting the server version of the file each time (and ignoring the cached version)."}),"\n",(0,o.jsxs)(t.p,{children:["Here's an example on how to dynamically generate such a cachebuster variable in JavaScript (taken from ",(0,o.jsx)(t.a,{href:"https://www.virendrachandak.com/techtalk/cachebuster-code-in-javascript/",children:"this original article"}),"):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<script type=\"text/javascript\">\n  var cachebuster = Math.round(new Date().getTime() / 1000);\n  document.write('<scr' + 'ipt type=\"text/javascript\" src=\"external.js?cb=' + cachebuster + '\"></scr' + 'ipt>');\n<\/script>\n"})}),"\n",(0,o.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/theoplayer/v7/getting-started/sdks/how-to-update-a-sdk",children:"How to update an SDK"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/theoplayer/v7/how-to-guides/license/introduction",children:"License"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/theoplayer/v7/how-to-guides/mediatrack/how-to-reduce-data-usage-on-mobile-devices",children:"How to reduce data usage on mobile devices on mobile web"})}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return i}});var a=r(67294);let o={},n=a.createContext(o);function i(e){let t=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);