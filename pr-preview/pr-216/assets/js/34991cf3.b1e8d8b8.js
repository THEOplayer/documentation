"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["83217"],{20896:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"how-to-guides/network/request-response-interceptors","title":"Network Request/Response Interceptors","description":"THEOplayer makes a number of network requests and receives responses while playing content video, these requests and responses can be intercepted to make a new or modified request or respond with a new response. The network object thus allows easy access to handle the network efficiently.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/08-network/01-request-response-interceptors.md","sourceDirName":"how-to-guides/08-network","slug":"/how-to-guides/network/request-response-interceptors","permalink":"/documentation/pr-preview/pr-216/theoplayer/v7/how-to-guides/network/request-response-interceptors","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/08-network/01-request-response-interceptors.md","tags":[],"version":"v7","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-216/theoplayer/v7/how-to-guides/network/introduction"},"next":{"title":"Android Network Request/Response Interceptor","permalink":"/documentation/pr-preview/pr-216/theoplayer/v7/how-to-guides/network/android-network-interceptor"}}'),s=t("85893"),o=t("50065");let i={},a="Network Request/Response Interceptors",l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Starting Template",id:"starting-template",level:2},{value:"Adding and removing Request Interceptors",id:"adding-and-removing-request-interceptors",level:2},{value:"Adding and removing Response Interceptors",id:"adding-and-removing-response-interceptors",level:2},{value:"Adding a waitUntil in Request and Response Interceptors",id:"adding-a-waituntil-in-request-and-response-interceptors",level:2},{value:"Done callback",id:"done-callback",level:4},{value:"Function returns a promise",id:"function-returns-a-promise",level:4},{value:"PromiseLike",id:"promiselike",level:4},{value:"HTTP Errors",id:"http-errors",level:2},{value:"Adding and Removing Event Listeners",id:"adding-and-removing-event-listeners",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"network-requestresponse-interceptors",children:"Network Request/Response Interceptors"})}),"\n",(0,s.jsx)(n.p,{children:"THEOplayer makes a number of network requests and receives responses while playing content video, these requests and responses can be intercepted to make a new or modified request or respond with a new response. The network object thus allows easy access to handle the network efficiently."}),"\n",(0,s.jsxs)(n.p,{children:["This guide explains how you set up THEOplayer to add and remove request/response interceptors. This document guides you through setting up a demo just like the one that's showcased in our ",(0,s.jsx)(n.a,{href:"https://www.theoplayer.com/demo-zone",children:"Demo Zone"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["This guide expects that you have a THEOplayer license. If you aren't using THEOplayer yet, you can start by registering at THEOportal ",(0,s.jsx)(n.a,{href:"https://portal.theoplayer.com",children:"here"})," to get access to THEOplayer. Be sure to have THEOplayer version 2.21.0 or higher."]}),"\n",(0,s.jsx)(n.h2,{id:"starting-template",children:"Starting Template"}),"\n",(0,s.jsxs)(n.p,{children:["The first thing you need is a valid THEOplayer set-up. If you have no experience with setting up our player, we have an excellent ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-216/theoplayer/v7/getting-started/sdks/web/getting-started",children:"getting started guide"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To get THEOplayer to work, you only need to do three things:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Reference the THEOplayer JavaScript library (and optionally the default CSS styles)."}),"\n",(0,s.jsx)(n.li,{children:"Add a container which can hold your video player with HTML."}),"\n",(0,s.jsxs)(n.li,{children:["Create your player through JavaScript using our ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/classes/Player.html",children:"API"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A basic HTML page with a working THEOplayer could look like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer Web SDK: Getting Started</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n  </head>\n  <body>\n    <div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>\n    <script type="text/javascript" src="/path/to/THEOplayer.js"><\/script>\n    \x3c!-- ads THEOplayer library --\x3e\n    <script>\n      var element = document.querySelector(".theoplayer-container")\n      var player = new THEOplayer.Player(element, {\n        libraryLocation: \'/path/to/libraryLocation/\',\n        license: \'your_license_here\'\n      },\n\n      player.source = {\n        sources: [\n          {\n            src: "https://cdn.theoplayer.com/video/sintel/nosubs.m3u8",\n            type: "application/x-mpegurl",\n          },\n        ],\n      }\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,s.jsx)(n.p,{children:"The two snippets below are the references to the JS and CSS library."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="/path/to/THEOplayer.js"><\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"The following snippet is your HTML container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>\n'})}),"\n",(0,s.jsx)(n.p,{children:"This snippet initializes your player, including an HLS source."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<script>\n  var element = document.querySelector('.theoplayer-container');\n  var player = new THEOplayer.Player(element);\n  player.source = {\n    sources: [\n      {\n        src: 'https://cdn.theoplayer.com/video/sintel/nosubs.m3u8',\n        type: 'application/x-mpegurl',\n      },\n    ],\n  };\n<\/script>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"adding-and-removing-request-interceptors",children:"Adding and removing Request Interceptors"}),"\n",(0,s.jsxs)(n.p,{children:["Starting from the basic template above, you need to add a ",(0,s.jsx)(n.code,{children:"RequestInterceptor"})," on the network object's addRequestInterceptor method. By adding a request interceptor, the original request made by HTTP can be modified so that specific properties of the original request can be altered to contain the necessary information, before it is sent to the server. The interceptors are added in a stack and the last interceptor to be added is the first one to intercept the original request."]}),"\n",(0,s.jsxs)(n.p,{children:["A request interceptor can modify the request with the ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/InterceptableRequest.html#redirect",children:(0,s.jsx)(n.code,{children:"redirect"})})," or ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/InterceptableRequest.html#respondWith",children:(0,s.jsx)(n.code,{children:"respondWith"})})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var interceptor = function (request) {\n  if (request.type === 'manifest') {\n    request.redirect({\n      url: 'https://cdn.theoplayer.com/video/elephants-dream/448/chunklist_w370587926_b688000_vo_slen_t64TWFpbg==.m3u8',\n      method: 'GET',\n      headers: {\n        'Content-Type': 'application/x-mpegurl',\n      },\n    });\n  }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The code sample above intercepts manifest requests made by the player and redirects them to the provided request URL."}),"\n",(0,s.jsxs)(n.p,{children:["If the properties of the given ",(0,s.jsx)(n.code,{children:"RequestInit"})," object are missing, the API uses the properties values from the original request."]}),"\n",(0,s.jsx)(n.p,{children:"A response to the request can be added in an interceptor as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var interceptor = function (request) {\n  if (request.type === 'manifest') {\n    request.respondWith({\n      body: '#EXTM3U\\n#EXTINF:6,\\nhttps://cdn.theoplayer.com/video/elephants-dream/448/media_w370587926_b688000_vo_slen_t64TWFpbg==_0.ts\\n#EXT-X-ENDLIST',\n      status: 200,\n      statusText: 'OK',\n    });\n  }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The code sample above intercepts manifest requests made by the player and responds with a manifest containing a single segment."}),"\n",(0,s.jsx)(n.p,{children:"The above defined interceptors can be added to the player as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"player.network.addRequestInterceptor(interceptor);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Interceptors can be removed similarly, as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"player.network.removeRequestInterceptor(interceptor);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"adding-and-removing-response-interceptors",children:"Adding and removing Response Interceptors"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"ResponseInterceptor"})," responds with the given response for the original request."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"ResponseInterceptor"})," can be added on the network object's addResponseInterceptor method. By adding a response interceptor, the original response can be modified so that specific properties of the original response can be altered to contain the necessary information, before the server responds. The interceptors are added in a stack and the last interceptor to be added is the first one to intercept the original response."]}),"\n",(0,s.jsxs)(n.p,{children:["A ResponseInterceptor can modify the response with the ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/InterceptableResponse.html#respondWith",children:(0,s.jsx)(n.code,{children:"respondWith"})})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var interceptor = function (response) {\n  response.respondWith({\n    body: '#EXTM3U\\n#EXTINF:6,\\nhttps://cdn.theoplayer.com/video/elephants-dream/448/media_w370587926_b688000_vo_slen_t64TWFpbg==_0.ts\\n#EXT-X-ENDLIST',\n    status: 200,\n    statusText: 'OK',\n  });\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The code sample above intercepts manifest responses received by the player and responds with a manifest containing a single segment. The ",(0,s.jsx)(n.code,{children:"respondWith"})," method accepts a ",(0,s.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/ResponseInit.html",children:(0,s.jsx)(n.code,{children:"ResponseInit"})})," object as its argument."]}),"\n",(0,s.jsx)(n.p,{children:"The above defined interceptor can be added to the player as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"player.network.addResponseInterceptor(interceptor);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Interceptors can be removed similarly, as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"player.network.removeResponseInterceptor(interceptor);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"adding-a-waituntil-in-request-and-response-interceptors",children:"Adding a waitUntil in Request and Response Interceptors"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"waitUntil"})," method can be used to execute synchronous and asynchronous processes before the ",(0,s.jsx)(n.code,{children:"request"})," or the ",(0,s.jsx)(n.code,{children:"response"})," can be closed. A waitUntil method can throw an error if, for a single Interceptor, a request or a response was already closed."]}),"\n",(0,s.jsx)(n.p,{children:"The waitUntil method can receive one of the following as its argument :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A Done callback"}),"\n",(0,s.jsx)(n.li,{children:"A function which returns a promise"}),"\n",(0,s.jsx)(n.li,{children:"A PromiseLike"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"done-callback",children:"Done callback"}),"\n",(0,s.jsx)(n.p,{children:"When using a done callback, the waitUntil method needs to wait until the method finishes executing before the request or the response can be closed by calling the done callback. Failing to call this callback may result in the request or the response never being delivered."}),"\n",(0,s.jsxs)(n.p,{children:["The waitUntil method can be defined with a ",(0,s.jsx)(n.code,{children:"done"})," callback as follows"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var interceptor = function (request) {\n  request.waitUntil(function (done) {\n    setTimeout(function () {\n      request.redirect({\n        url: 'https://cdn.theoplayer.com/video/elephants-dream/448/chunklist_w370587926_b688000_vo_slen_t64TWFpbg==.m3u8',\n        method: 'GET',\n        headers: modifyRequestHeaders(request.headers),\n      });\n      done();\n    }, 100);\n  });\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The code sample above waits for 100 milliseconds before it redirects to another URL and then the done call is executed which means that the request can now be closed."}),"\n",(0,s.jsx)(n.h4,{id:"function-returns-a-promise",children:"Function returns a promise"}),"\n",(0,s.jsx)(n.p,{children:"When the waitUntil method receives a function that returns a promise, the promise needs to resolve before the request or the response can be closed."}),"\n",(0,s.jsx)(n.p,{children:"The waitUntil method that receives a function that returns a promise can be defined as follows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var interceptor = function (request) {\n  request.waitUntil(function () {\n    return delay(100).then(function () {\n      request.redirect({\n        url: 'https://cdn.theoplayer.com/video/elephants-dream/448/chunklist_w370587926_b688000_vo_slen_t64TWFpbg==.m3u8',\n        method: 'GET',\n        headers: modifyRequestHeaders(request.headers),\n      });\n    });\n  });\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The code sample above waits for 100 milliseconds before it redirects to another URL after which the request can be closed."}),"\n",(0,s.jsx)(n.h4,{id:"promiselike",children:"PromiseLike"}),"\n",(0,s.jsxs)(n.p,{children:["When using a ",(0,s.jsx)(n.code,{children:"PromiseLike"}),", the waitUntil method needs to wait until the provided promise argument resolves before the request or the response can be closed."]}),"\n",(0,s.jsxs)(n.p,{children:["The waitUntil method can be defined with a ",(0,s.jsx)(n.code,{children:"PromiseLike"})," as follows"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var interceptor = function (request) {\n  var promise = delay(100).then(function () {\n    request.redirect({\n      url: 'https://cdn.theoplayer.com/video/elephants-dream/448/chunklist_w370587926_b688000_vo_slen_t64TWFpbg==.m3u8',\n      method: 'GET',\n      headers: modifyRequestHeaders(request.headers),\n    });\n  });\n  request.waitUntil(promise);\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The code sample above waits until the modifyRequestHeaders promise is resolved and then the redirect method is executed which means that the request can now be closed."}),"\n",(0,s.jsx)(n.h2,{id:"http-errors",children:"HTTP Errors"}),"\n",(0,s.jsx)(n.p,{children:"If the status code is set to a code between 200-299, the player responds with a successful response, in any other cases the player will respond with an HTTP error."}),"\n",(0,s.jsx)(n.p,{children:"If the player originally responded with an HTTP error, the interceptor can change the response to a successful response and vice versa."}),"\n",(0,s.jsx)(n.h2,{id:"adding-and-removing-event-listeners",children:"Adding and Removing Event Listeners"}),"\n",(0,s.jsx)(n.p,{children:"The 'online' and 'offline' events can be added to the network as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"player.network.addEventListener('online', handleOnlineEvent);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Events can be removed similarly, as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"player.network.removeEventListener('online', handleOnlineEvent);\n"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(67294);let s={},o=r.createContext(s);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);