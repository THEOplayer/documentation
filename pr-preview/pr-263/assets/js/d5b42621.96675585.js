"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["34653"],{86393:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"getting-started/sdks/chromecast/getting-started","title":"Getting started on Chromecast","description":"This how-to guide describes how to set up a Chromecast Receiver application using the THEOplayer SDK.","source":"@site/theoplayer/getting-started/01-sdks/06-chromecast/00-getting-started.md","sourceDirName":"getting-started/01-sdks/06-chromecast","slug":"/getting-started/sdks/chromecast/getting-started","permalink":"/documentation/pr-preview/pr-263/theoplayer/getting-started/sdks/chromecast/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/getting-started/01-sdks/06-chromecast/00-getting-started.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"chromecast","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-263/theoplayer/chromecast/"},"next":{"title":"Getting started on Chromecast","permalink":"/documentation/pr-preview/pr-263/theoplayer/getting-started/sdks/chromecast/getting-started"}}'),i=r("85893"),a=r("50065");let s={},o="Getting started on Chromecast",c={},l=[{value:"Prerequisite:",id:"prerequisite",level:2},{value:"Set up a web project",id:"set-up-a-web-project",level:2},{value:"Integrate the Google Cast Receiver SDK",id:"integrate-the-google-cast-receiver-sdk",level:2},{value:"Integrate the THEOplayer Chromecast Receiver SDK",id:"integrate-the-theoplayer-chromecast-receiver-sdk",level:2},{value:"Set up THEOplayer instance",id:"set-up-theoplayer-instance",level:2},{value:"Optional: alter default UI",id:"optional-alter-default-ui",level:2},{value:"Publish the application",id:"publish-the-application",level:2},{value:"Deploy the application",id:"deploy-the-application",level:2},{value:"Test it",id:"test-it",level:2},{value:"Related articles",id:"related-articles",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-on-chromecast",children:"Getting started on Chromecast"})}),"\n",(0,i.jsx)(t.p,{children:"This how-to guide describes how to set up a Chromecast Receiver application using the THEOplayer SDK."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["This guide is intended for developing a Chromecast Receiver application with Google Cast SDK v2. Since Google Cast SDK v2 is deprecated by Google, we highly recommend developing your Chromecast SDK with CAF instead of v2. You can find the THEOplayer Cast Receiver Reference app ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-google-cast-v3-receiver",children:"here"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"prerequisite",children:"Prerequisite:"}),"\n",(0,i.jsx)(t.p,{children:"You need to build a THEOplayer Chromecast Receiver SDK from THEOportal."}),"\n",(0,i.jsx)(t.h2,{id:"set-up-a-web-project",children:"Set up a web project"}),"\n",(0,i.jsxs)(t.p,{children:["A Chromecast Receiver application is a web project. Create a sample project, add a ",(0,i.jsx)(t.code,{children:"_receiver_"})," folder, and create an index.html file in this folder with the following skeleton code."]}),"\n",(0,i.jsx)(t.h2,{id:"integrate-the-google-cast-receiver-sdk",children:"Integrate the Google Cast Receiver SDK"}),"\n",(0,i.jsx)(t.p,{children:"By including the Google Cast Receiver SDK, you have access to the Receiver API. The THEOplayer Receiver SDK leverages this API."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer Chromecast Receiver Sample Application</title>\n    <script src="//www.gstatic.com/cast/sdk/libs/receiver/2.0.0/cast_receiver.js"><\/script>\n  </head>\n  <body></body>\n</html>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"integrate-the-theoplayer-chromecast-receiver-sdk",children:"Integrate the THEOplayer Chromecast Receiver SDK"}),"\n",(0,i.jsxs)(t.p,{children:["By including the THEOplayer Chromecast Receiver SDK, you have access to the THEOplayer Receiver SDK. This SDK consists of a JavaScript library (consisting of four files) and a CSS file. Create a ",(0,i.jsx)(t.em,{children:"release"})," folder, and put the 5 files belonging to the THEOplayer Chromecast Receiver SDK in this folder."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer Chromecast Receiver Sample Application</title>\n    <script src="//www.gstatic.com/cast/sdk/libs/receiver/2.0.0/cast_receiver.js"><\/script>\n    <script src="../release/THEOplayer-cast-receiver.js"><\/script>\n    <link rel="stylesheet" type="text/css" href="../release/ui.css" />\n  </head>\n  <body></body>\n</html>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"set-up-theoplayer-instance",children:"Set up THEOplayer instance"}),"\n",(0,i.jsxs)(t.p,{children:["Setting up a THEOplayer instance in a Chromecast Receiver application is similar to our Web SDK. More information on setting up the THEOplayer Web SDK can be found at ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-263/theoplayer/getting-started/sdks/web/getting-started",children:"Getting Started on Web"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"You need to add a DOM-element which will contain the user interface of THEOplayer, and you need to initialize the THEOplayer instance through JavaScript code."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer Chromecast Receiver Sample Application</title>\n    <script src="//www.gstatic.com/cast/sdk/libs/receiver/2.0.0/cast_receiver.js"><\/script>\n    <script src="../release/THEOplayer-cast-receiver.js"><\/script>\n    <link rel="stylesheet" type="text/css" href="path/to/theoplayer/ui.css" />\n  </head>\n  <body>\n    <div id="my-player"></div>\n    <script>\n      var player = new THEOplayer.Player(document.getElementById(\'my-player\'), {\n        libraryLocation: \'path/to/theoplayer/\',\n        license: \'your-license-here\',\n      });\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"optional-alter-default-ui",children:"Optional: alter default UI"}),"\n",(0,i.jsx)(t.p,{children:"The CSS snippet added to the code-block below have the following effect:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:".THEO-cast-receiver-player .THEO-cast-receiver-logo"}),": Change the default splash image when your receiver app is loading. This default splash image will show a THEOplayer-branded image, but you might want to replace it with a different image."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:".THEO-cast-receiver-player .THEO-cast-receiver-watermark"}),": Change the default watermark logo which is shown when pausing (or buffering). This default watermark logo will show a THEOplayer-branded image, but you might want to replace it with a different image."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In each of the examples, be sure to set the image source correctly, by replacing the '...'."}),"\n",(0,i.jsxs)(t.p,{children:["Note that you can also use the easy UI skinning colors to modify the UI as described in ",(0,i.jsx)(t.a,{href:"http://demo.theoplayer.com/ui-skinning",children:"http://demo.theoplayer.com/ui-skinning"}),". You can reuse the CSS you use in the THEOplayer Web SDK in your Chromecast receiver as well!"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer Chromecast Receiver Sample Application</title>\n    <script src="//www.gstatic.com/cast/sdk/libs/receiver/2.0.0/cast_receiver.js"><\/script>\n    <script src="../release/THEOplayer-cast-receiver.js"><\/script>\n    <link rel="stylesheet" type="text/css" href="../release/ui.css" />\n    <style>\n      .THEO-cast-receiver-player .THEO-cast-receiver-logo {\n        position: static;\n        margin: 0 auto;\n        width: 100%;\n        height: 100%;\n        background:\n          url(\'...\') no-repeat,\n          no-repeat center;\n        background-size: cover;\n      }\n\n      .THEO-cast-receiver-player .THEO-cast-receiver-watermark {\n        width: 124px;\n        height: 65px;\n        background-image: url(\'...\');\n      }\n    </style>\n  </head>\n  <body>\n    <div id="my-player"></div>\n    <script>\n      var player = new THEOplayer.Player(document.getElementById(\'my-player\'), {\n        libraryLocation: \'../release/\',\n      });\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"publish-the-application",children:"Publish the application"}),"\n",(0,i.jsxs)(t.p,{children:["Before you can deploy your application, you should upload your web project to an HTTPS location. (e.g. ",(0,i.jsx)(t.a,{href:"https://cdn.your-website.com/cast/chromecast/sample-project/",children:"https://cdn.your-website.com/cast/chromecast/sample-project/)"}),") Ensure that your folder structure respects the aforementioned structure."]}),"\n",(0,i.jsx)(t.h2,{id:"deploy-the-application",children:"Deploy the application"}),"\n",(0,i.jsxs)(t.p,{children:["This has to be done through the ",(0,i.jsx)(t.a,{href:"https://developers.google.com/cast/docs/registration",children:"Google Cast SDK Developer Console"})]}),"\n",(0,i.jsxs)(t.p,{children:["Your Chromecast Receiver sample application is now in a state where it can be deployed as a real application. If you have a Google Cast SDK Developer Console, you can log in to ",(0,i.jsx)(t.a,{href:"https://cast.google.com/u/1/publish/#/overview",children:"https://cast.google.com/u/1/publish/#/overview"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:r(48768).Z+"",width:"695",height:"400"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:r(48997).Z+"",width:"679",height:"400"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:r(66414).Z+"",width:"387",height:"400"})}),"\n",(0,i.jsx)(t.p,{children:"You have to go through the following steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Click "ADD NEW APPLICATION".'}),"\n",(0,i.jsx)(t.li,{children:'Select "Customer Receiver".'}),"\n",(0,i.jsx)(t.li,{children:"Enter information and refer to the HTTPS location of your web project."}),"\n",(0,i.jsx)(t.li,{children:"Press start and wait."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"test-it",children:"Test it"}),"\n",(0,i.jsxs)(t.p,{children:["Once your application is published, you can start casting from your THEOplayer Web SDK, iOS SDK or Android SDK. You need to set the correct ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/CastConfiguration.html",children:"appID"}),", enable Chromecast and press the Chromecast icon. Additionally, you can start casting through the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/GlobalCast.html",children:"Cast API"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast",children:"Pass subtitle selection on to Chromecast"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream",children:"How to configure a different stream to Chromecast"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-263/theoplayer/faq/chromecast-on-weblayer-does-not-longer-work",children:"Chromecast on my webplayer does not work any longer despite no change in my implementation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications",children:"Connecting from custom Sender applications"})}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},48997:function(e,t,r){r.d(t,{Z:function(){return n}});let n=r.p+"assets/images/image2018-5-25_15-31-19-7317abb73b4c3cb9e2e6ebdd98181107.png"},66414:function(e,t,r){r.d(t,{Z:function(){return n}});let n=r.p+"assets/images/image2018-5-25_15-31-26-cb0e373616c71ae98bf52259fe449ad6.png"},48768:function(e,t,r){r.d(t,{Z:function(){return n}});let n=r.p+"assets/images/image2018-5-25_15-31-6-f47e2f0c62571237adcdd11a2395b28d.png"},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return s}});var n=r(67294);let i={},a=n.createContext(i);function s(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);