"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["70503"],{41578:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>m,contentTitle:()=>o});var a=JSON.parse('{"id":"getting-started/frameworks/amp/getting-started","title":"Getting started with AMP","description":"A brief guide on how to build a THEOplayer in an AMP environment.","source":"@site/theoplayer/getting-started/02-frameworks/06-amp/00-getting-started.md","sourceDirName":"getting-started/02-frameworks/06-amp","slug":"/getting-started/frameworks/amp/getting-started","permalink":"/documentation/pr-preview/pr-232/theoplayer/getting-started/frameworks/amp/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/getting-started/02-frameworks/06-amp/00-getting-started.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"web","previous":{"title":"Getting started with VueJS","permalink":"/documentation/pr-preview/pr-232/theoplayer/getting-started/frameworks/vuejs/getting-started"},"next":{"title":"Getting started with WordPress","permalink":"/documentation/pr-preview/pr-232/theoplayer/getting-started/frameworks/wordpress/getting-started"}}'),i=n("85893"),r=n("50065");let s={},o="Getting started with AMP",l={},m=[{value:"AMP",id:"amp",level:2},{value:"Step-by-step guide:",id:"step-by-step-guide",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Related content",id:"related-content",level:2}];function p(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-amp",children:"Getting started with AMP"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"A brief guide on how to build a THEOplayer in an AMP environment."})}),"\n",(0,i.jsx)(t.p,{children:"Note that this information is for a basic player in a testing environment. Additional information may be needed for specific cases."}),"\n",(0,i.jsx)(t.h2,{id:"amp",children:"AMP"}),"\n",(0,i.jsxs)(t.p,{children:["Accelerated Mobile Pages (AMP) is an open-source HTML framework. More information about AMP is available at ",(0,i.jsx)(t.a,{href:"https://amp.dev/",children:"https://amp.dev/"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"step-by-step-guide",children:"Step-by-step guide:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Have a ",(0,i.jsx)(t.a,{href:"https://validator.ampproject.org/",children:"valid AMP page"}),". ",(0,i.jsx)(t.em,{children:"(Let's call this page A.)"})]}),"\n",(0,i.jsxs)(t.li,{children:["Prepare an embeddable page which can be served through an ",(0,i.jsx)(t.a,{href:"https://amp.dev/documentation/components/amp-iframe/?format=websites",children:(0,i.jsx)(t.code,{children:"<amp-iframe>"})}),". ",(0,i.jsx)(t.em,{children:"(Let's call this page B.)"})," Read more about THEOplayer and iframes ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-232/theoplayer/getting-started/sdks/web/how-can-we-embed-iframe",children:"here"}),". It's your responsibility to decide the most optimal approach for your use-case. You can use ",(0,i.jsx)(t.a,{href:"https://cdn.theoplayer.com/demos/iframe/iframe.html",children:"https://cdn.theoplayer.com/demos/iframe/iframe.html"})," as a starting point to prepare your page."]}),"\n",(0,i.jsxs)(t.li,{children:["Upload page B to a different (sub) domain than page A in order to adhere to the ",(0,i.jsx)(t.a,{href:"https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md",children:"iframe origin policy"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Embed page B into page A by using an ",(0,i.jsx)(t.code,{children:"<amp-iframe>"}),". It's your responsibility to decide the most optimal approach for your use-case. You can use the snippet below as an example."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n<html \u26A1>\n  <head>\n    <meta charset="utf-8" />\n    <title>amp-iframe</title>\n    <script async src="https://cdn.ampproject.org/v0.js"><\/script>\n    \x3c!--  Import the amp-iframe component in the header. --\x3e\n    <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"><\/script>\n    \x3c!-- You can use the `amp-bind` extension to dynamically change an iframe src. --\x3e\n    <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"><\/script>\n    <link rel="canonical" href="<% canonical %>" />\n    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />\n    <style amp-boilerplate>\n      body {\n        -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;\n        -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;\n        -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;\n        animation: -amp-start 8s steps(1, end) 0s 1 normal both;\n      }\n      @-webkit-keyframes -amp-start {\n        from {\n          visibility: hidden;\n        }\n        to {\n          visibility: visible;\n        }\n      }\n      @-moz-keyframes -amp-start {\n        from {\n          visibility: hidden;\n        }\n        to {\n          visibility: visible;\n        }\n      }\n      @-ms-keyframes -amp-start {\n        from {\n          visibility: hidden;\n        }\n        to {\n          visibility: visible;\n        }\n      }\n      @-o-keyframes -amp-start {\n        from {\n          visibility: hidden;\n        }\n        to {\n          visibility: visible;\n        }\n      }\n      @keyframes -amp-start {\n        from {\n          visibility: hidden;\n        }\n        to {\n          visibility: visible;\n        }\n      }\n    </style>\n    <noscript\n      ><style amp-boilerplate>\n        body {\n          -webkit-animation: none;\n          -moz-animation: none;\n          -ms-animation: none;\n          animation: none;\n        }\n      </style></noscript\n    >\n    <style amp-custom>\n      #sample-resizable-iframe div[overflow] {\n        text-align: center;\n        background: #f9f7f7;\n        line-height: 36px;\n      }\n    </style>\n  </head>\n  <body>\n    <amp-iframe\n      width="500"\n      height="281"\n      title="THEOplayer demo"\n      layout="responsive"\n      sandbox="allow-scripts allow-same-origin allow-popups"\n      allowfullscreen\n      frameborder="0"\n      src="https://cdn.theoplayer.com/demos/iframe/iframe.html"\n    >\n      <amp-img layout="fill" src="https://cdn.theoplayer.com/demos/iframe/pixel.png" placeholder></amp-img>\n    </amp-iframe>\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["Once again: upload page A to a different (sub) domain than page B in order to adhere to the ",(0,i.jsx)(t.a,{href:"https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md",children:"iframe origin policy"}),". For example, you can put page B on ",(0,i.jsx)(t.a,{href:"https://iframe.website.com/player.html",children:"https://iframe.website.com/player.html"})," and page A on ",(0,i.jsx)(t.a,{href:"https://www.website.com/a-random-video.html",children:"https://www.website.com/a-random-video.html"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["An example application of this step-by-step guide is available ",(0,i.jsx)(t.a,{href:"https://f.hubspotusercontent20.net/hubfs/2163521/Demo_zone/amp-iframe-example.html",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"alternatives",children:"Alternatives"}),"\n",(0,i.jsxs)(t.p,{children:["Some video players offer a ",(0,i.jsx)(t.strong,{children:"custom AMP tag"}),". For example, YouTube offers this through ",(0,i.jsx)(t.a,{href:"https://amp.dev/documentation/components/amp-youtube/?format=websites",children:(0,i.jsx)(t.code,{children:"<amp-youtube>"})}),".\nUnder the hood, these video players also leverage an ",(0,i.jsx)(t.code,{children:"<iframe>"}),". Although custom AMP tags are primarily syntax sugar, it is arguably a more developer-friendly implementation than ",(0,i.jsx)(t.code,{children:"<amp-iframe>"}),". The advantage of using ",(0,i.jsx)(t.code,{children:"<amp-iframe>"})," is flexibility: you are in full control of the page you're embedding."]}),"\n",(0,i.jsxs)(t.p,{children:["Feel free to ",(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/contact",children:"contact us"})," if you would like to contribute to ",(0,i.jsx)(t.code,{children:"<amp-theoplayer>"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"related-content",children:"Related content"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://amp.dev/",children:"https://amp.dev/"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://amp.dev/documentation/components/amp-iframe/?format=websites",children:"https://amp.dev/documentation/components/amp-iframe/?format=websites"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md",children:"https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md"})}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var a=n(67294);let i={},r=a.createContext(i);function s(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);