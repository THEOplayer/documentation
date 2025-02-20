"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["38544"],{14727:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>i,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"getting-started/frameworks/react/getting-started","title":"Getting started with React","description":"There is a sample app using THEOplayer as a React component available on our Github.","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/02-frameworks/02-react/00-getting-started.md","sourceDirName":"getting-started/02-frameworks/02-react","slug":"/getting-started/frameworks/react/getting-started","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/getting-started/frameworks/react/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/02-frameworks/02-react/00-getting-started.md","tags":[],"version":"v7","sidebarPosition":0,"frontMatter":{},"sidebar":"web","previous":{"title":"Getting started with Angular","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/getting-started/frameworks/angular/getting-started"},"next":{"title":"Getting started with NuxtJS","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/getting-started/frameworks/nuxtjs/getting-started"}}'),a=r("85893"),s=r("50065");let i={},o="Getting started with React",l={},c=[{value:"Project setup",id:"project-setup",level:2},{value:"Creating and using a component",id:"creating-and-using-a-component",level:2},{value:"<code>src/THEOplayerWrapper.js</code>",id:"srctheoplayerwrapperjs",level:3},{value:"<code>src/App.js</code>",id:"srcappjs",level:3},{value:"Going to Production",id:"going-to-production",level:2},{value:"Getting a license",id:"getting-a-license",level:3},{value:"Updating the project",id:"updating-the-project",level:3}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"getting-started-with-react",children:"Getting started with React"})}),"\n",(0,a.jsxs)(t.p,{children:["There is a sample app using THEOplayer as a React component available ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-react-js",children:"on our Github"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"project-setup",children:"Project setup"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/THEOplayer/samples-react-js.git\n"})}),"\n",(0,a.jsx)(t.p,{children:"Creates a local clone of the project"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"npm install\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Installs the necessary dependencies. This project was bootstrapped with ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/create-react-app",children:"Create React App"}),". You can learn more in the ",(0,a.jsx)(t.a,{href:"https://facebook.github.io/create-react-app/docs/getting-started",children:"Create React App documentation"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"npm start\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Compiles and runs the app in the development mode.\nOpen ",(0,a.jsx)(t.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," to view it in the browser.\nThe page will reload if you make edits. You will also see any lint errors in the console."]}),"\n",(0,a.jsx)(t.h2,{id:"creating-and-using-a-component",children:"Creating and using a component"}),"\n",(0,a.jsx)(t.h3,{id:"srctheoplayerwrapperjs",children:(0,a.jsx)(t.code,{children:"src/THEOplayerWrapper.js"})}),"\n",(0,a.jsx)(t.p,{children:"is an example implementation of a React Component that wraps the THEOplayer.js module. You can extend this wrapper to support whatever THEOplayer API that you want to use."}),"\n",(0,a.jsx)(t.h3,{id:"srcappjs",children:(0,a.jsx)(t.code,{children:"src/App.js"})}),"\n",(0,a.jsxs)(t.p,{children:["uses the ",(0,a.jsx)(t.code,{children:"Player"})," component exported by ",(0,a.jsx)(t.code,{children:"THEOplayerWrapper.js"})," and specifies a source for the player to play."]}),"\n",(0,a.jsx)(t.h2,{id:"going-to-production",children:"Going to Production"}),"\n",(0,a.jsxs)(t.p,{children:["The THEOplayer library provided in this sample is currently targeted to the latest version and is set to run on ",(0,a.jsx)(t.strong,{children:"localhost only"})]}),"\n",(0,a.jsx)(t.h3,{id:"getting-a-license",children:"Getting a license"}),"\n",(0,a.jsxs)(t.p,{children:["To run THEOplayer in production you will need a valid THEOplayer HTML5 SDK set up to run on your domain. You can use your existing license or get one for free on ",(0,a.jsx)(t.a,{href:"http://portal.theoplayer.com",children:"THEOportal"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"updating-the-project",children:"Updating the project"}),"\n",(0,a.jsx)(t.p,{children:"You will need to update some files that reference the THEOplayer.js and THEOplayer.css files:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"src/THEOplayerWrapper.js"}),", -- Please replace the URL of the ",(0,a.jsx)(t.code,{children:"libraryLocation"})," to the URL or folder where your THEOplayer files (THEOplayer.js, THEOplayer.d.js, etc.) are residing."]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"src/App.js"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"public/index.html"})," -- Please replace the links to the THEOplayer assets with your own URLs."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return i}});var n=r(67294);let a={},s=n.createContext(a);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);