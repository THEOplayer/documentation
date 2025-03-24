"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["30632"],{15537:function(e,t,o){o.r(t),o.d(t,{default:()=>c,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"getting-started/sdks/how-to-update-a-sdk","title":"How to update an SDK?","description":"This how-to guide describes how to update to a new version of the THEOplayer SDK.","source":"@site/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/01-how-to-update-a-sdk.md","sourceDirName":"getting-started/01-sdks","slug":"/getting-started/sdks/how-to-update-a-sdk","permalink":"/documentation/pr-preview/pr-244/theoplayer/v6/getting-started/sdks/how-to-update-a-sdk","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/01-how-to-update-a-sdk.md","tags":[],"version":"v6","sidebarPosition":101,"frontMatter":{"displayed_sidebar":"web","sidebar_position":101},"sidebar":"web"}'),n=o("85893"),i=o("50065");let r={displayed_sidebar:"web",sidebar_position:101},a="How to update an SDK?",l={},d=[{value:"Update Web SDK",id:"update-web-sdk",level:2},{value:"1. Cloud-hosted",id:"1-cloud-hosted",level:3},{value:"2. Self-hosted",id:"2-self-hosted",level:3},{value:"Other SDKs",id:"other-sdks",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-to-update-an-sdk",children:"How to update an SDK?"})}),"\n",(0,n.jsx)(t.p,{children:"This how-to guide describes how to update to a new version of the THEOplayer SDK."}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["Starting from version 2.79.0, you can make use of License as a Configuration with Web SDK. This allows you to reuse the same library when changing your license. It also allows you to make use of our NPM modules instead of using the THEOplayer zip-file. In order to use this functionality, there is a change needed in your THEOplayer integration. You can read more about this ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-244/theoplayer/v6/how-to-guides/license/introduction",children:"here"}),"."]}),(0,n.jsx)(t.p,{children:"We highly recommend using this new license system due to all the advantages it brings."})]}),"\n",(0,n.jsx)(t.h2,{id:"update-web-sdk",children:"Update Web SDK"}),"\n",(0,n.jsxs)(t.p,{children:["Typically, next to using ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/theoplayer",children:"NPM"}),", you grab a CDN URL or a downloadable ZIP file through ",(0,n.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),", which gives you access to URLs like those below:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["LIBRARY LOCATION: ",(0,n.jsx)(t.code,{children:"https://cdn.myth.theoplayer.com/<license-key>/"})]}),"\n",(0,n.jsxs)(t.li,{children:["CDN ZIP LINK: ",(0,n.jsx)(t.code,{children:"https://portal.theoplayer.com/download/<license-key>?h=1643658986"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:['Configuring THEOplayer through the "Library Location" implies a ',(0,n.jsx)(t.strong,{children:"cloud-hosted (CDN)"})," approach.\nDownloading (and configuring) the ZIP (or using NPM) implies a ",(0,n.jsx)(t.strong,{children:"self-hosted (ZIP file)"})," approach."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Update SDK",src:o(88159).Z+"",width:"2382",height:"1230"})}),"\n",(0,n.jsx)(t.h3,{id:"1-cloud-hosted",children:"1. Cloud-hosted"}),"\n",(0,n.jsxs)(t.p,{children:["Every SDK that you create through ",(0,n.jsx)(t.a,{href:"https://portal.theoplayer.com/",children:"https://portal.theoplayer.com/"})," is associated with a specific THEOplayer version.\nWhen you're doing cloud hosting, you're referring to THEOplayer's CDN to load the relevant JavaScript, for example ",(0,n.jsx)(t.code,{children:"https://cdn.myth.theoplayer.com/<license-key>/THEOplayer.js"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["To change the version of this specific SDK, you use the GUI at ",(0,n.jsx)(t.a,{href:"https://portal.theoplayer.com/",children:"https://portal.theoplayer.com/"}),' to change it to a different version,\nand hit the "Save & Publish" button after making your changes. Your video player will now automatically start using this new version, but do note that the CDN and browser cache might still be referring to your older version for a little while. If your browser is still not fetching the new JS libraries, try hard refreshing your browser tab first.']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Save &amp; Publish",src:o(2830).Z+"",width:"2382",height:"1230"})}),"\n",(0,n.jsx)(t.h3,{id:"2-self-hosted",children:"2. Self-hosted"}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, you could extract the included zip file and host the library yourself."}),"\n",(0,n.jsx)(t.p,{children:"In this case, the steps are similar to the above steps, but you'll also need to re-download your SDK to grab the new THEOplayer files."}),"\n",(0,n.jsx)(t.p,{children:"When you extract the ZIP file, you will see the following 'helper files':"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"theoplayer.d.js"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"theoplayer.e.js"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"theoplayer.p.js"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["It is ",(0,n.jsx)(t.strong,{children:"important"})," these files are placed in the ",(0,n.jsx)(t.strong,{children:"same directory as the core library (THEOplayer.js)"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"It is crucial to also update the libraryLocation as seen in the snippet above. Not doing will result in playback failure."})}),"\n",(0,n.jsxs)(t.p,{children:["If you're using ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/theoplayer",children:"THEOplayer through NPM"}),", then you should replace the version of THEOplayer in your ",(0,n.jsx)(t.code,{children:"package.json"})," file."]}),"\n",(0,n.jsx)(t.h2,{id:"other-sdks",children:"Other SDKs"}),"\n",(0,n.jsx)(t.p,{children:"Updating the iOS SDK, Android SDK and Roku SDK is similar with regards to self-hosting the SDK."}),"\n",(0,n.jsx)(t.p,{children:'The iOS SDK and Android SDK can also be managed through Cocoapods and Maven respectively. You cannot "cloud host" these SDKs.'})]})}function c(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2830:function(e,t,o){o.d(t,{Z:function(){return s}});let s=o.p+"assets/images/republish-7d7f211f07d91032ae93414a82528d26.png"},88159:function(e,t,o){o.d(t,{Z:function(){return s}});let s=o.p+"assets/images/update-sdk-5f00e7ff6ef3854952cf07f2562b3d08.png"},50065:function(e,t,o){o.d(t,{Z:function(){return a},a:function(){return r}});var s=o(67294);let n={},i=s.createContext(n);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);