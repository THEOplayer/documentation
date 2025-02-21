"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["55641"],{51917:function(e,n,r){r.r(n),r.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>t,assets:()=>p,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"how-to-guides/network/android-network-interceptor","title":"Android Network Request/Response Interceptor","description":"THEOplayer Android SDK makes a number of network requests and receives responses while playing video. These requests and responses can be intercepted to make a new or modified request or respond with a new response.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/08-network/02-android-network-interceptor.md","sourceDirName":"how-to-guides/08-network","slug":"/how-to-guides/network/android-network-interceptor","permalink":"/documentation/pr-preview/pr-218/theoplayer/v6/how-to-guides/network/android-network-interceptor","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/08-network/02-android-network-interceptor.md","tags":[],"version":"v6","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"Network Request/Response Interceptors","permalink":"/documentation/pr-preview/pr-218/theoplayer/v6/how-to-guides/network/request-response-interceptors"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-218/theoplayer/v6/how-to-guides/player/introduction"}}'),s=r("85893"),o=r("50065");let i={},d="Android Network Request/Response Interceptor",p={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up THEOplayer in your app",id:"set-up-theoplayer-in-your-app",level:2},{value:"Adding and removing an interceptor",id:"adding-and-removing-an-interceptor",level:2},{value:"Intercepting a request",id:"intercepting-a-request",level:2},{value:"Intercepting a response",id:"intercepting-a-response",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"android-network-requestresponse-interceptor",children:"Android Network Request/Response Interceptor"})}),"\n",(0,s.jsx)(n.p,{children:"THEOplayer Android SDK makes a number of network requests and receives responses while playing video. These requests and responses can be intercepted to make a new or modified request or respond with a new response."}),"\n",(0,s.jsx)(n.p,{children:"The Network API thus allows easy access to handle the network efficiently."}),"\n",(0,s.jsx)(n.p,{children:"This guide explains how you set up THEOplayer Android SDK to add and remove request/response interceptors."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["This guide expects that you have a THEOplayer license. If you aren't using THEOplayer yet, you can start by registering at THEOportal ",(0,s.jsx)(n.a,{href:"https://portal.theoplayer.com",children:"here"})," to get access to THEOplayer."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You need to be using at least THEOplayer Android SDK version 5.11.0."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"set-up-theoplayer-in-your-app",children:"Set up THEOplayer in your app"}),"\n",(0,s.jsxs)(n.p,{children:["To set up THEOplayer Android SDK in your app follow the steps in our ",(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-218/theoplayer/v6/getting-started/sdks/android/getting-started",children:"Getting started on Android"})," guide."]}),"\n",(0,s.jsx)(n.h2,{id:"adding-and-removing-an-interceptor",children:"Adding and removing an interceptor"}),"\n",(0,s.jsxs)(n.p,{children:["The THEOplayer Android SDK provides the ",(0,s.jsx)(n.code,{children:"HTTPInterceptor"})," interface which contains 2 methods (",(0,s.jsx)(n.code,{children:"onRequest"}),", ",(0,s.jsx)(n.code,{children:"onResponse"}),")\nwhere each can be optionally implemented based on the use-case."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"suspend fun onRequest(request: InterceptableHTTPRequest)"}),": Intercepts an HTTP request before opening the connection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"suspend fun onResponse(response: InterceptableHTTPResponse)"}),": Intercepts an HTTP response before consuming the response body."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To start intercepting HTTP requests, add the interceptor to our Network API:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"theoPlayerView.player.network.addHTTPInterceptor(httpInterceptor)\n"})}),"\n",(0,s.jsx)(n.p,{children:"To stop intercepting HTTP requests, remove the interceptor from our Network API:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"theoPlayerView.player.network.removeHTTPInterceptor(httpInterceptor)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"intercepting-a-request",children:"Intercepting a request"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"suspend fun onRequest(request: InterceptableHTTPRequest)"})," provides a ",(0,s.jsx)(n.code,{children:"request"})," parameter that can be used to read/write properties or to interrupt the request providing a direct response."]}),"\n",(0,s.jsx)(n.p,{children:"In the below snippet, we show some common use-cases."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'override suspend fun onRequest(request: InterceptableHTTPRequest) {\n    // Read request properties\n    Log.d("Interceptor", "onRequest - url: ${request.url}")\n\n    // Add/override request headers\n    request.headers["newKey"] = "newValue"\n\n    // Replace properties\n    request.method = "GET|POST|.."\n    request.url = URL("new_url")\n    request.headers = HashMap()\n\n    // Replace POST/PUT request body\n    request.body = "new post body".toByteArray()\n\n    // Perform another async computation\n    delay(1000) // simulating an async call\n\n    // Interrupt the request and respond with a CompleteHTTPResponse\n    request.respondWith(\n        CompleteHTTPResponse(\n            request,\n            request.url,\n            request.headers,\n            200,\n            "OK",\n            "new post body".toByteArray()\n        )\n    )\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"intercepting-a-response",children:"Intercepting a response"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"suspend fun onResponse(response: InterceptableHTTPResponse)"})," provides a ",(0,s.jsx)(n.code,{children:"response"})," parameter that can be used to read and write properties from the received response."]}),"\n",(0,s.jsx)(n.p,{children:"In the below snippet we show some common use-cases."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'override suspend fun onResponse(response: InterceptableHTTPResponse) {\n    // Read response properties\n    Log.d("Interceptor", "onResponse - headers: ${response.headers}")\n\n    // Add/override response headers\n    response.headers["newKey"] = "newValue"\n\n    // Replace properties\n    response.url = URL("new_url")\n    response.headers = HashMap()\n    response.status = 200\n    response.statusText = "OK"\n\n    // Get the chunks of the response body as they are read from the HTTP connection\n    response.onChunk { chunk: ByteArray ->\n        Log.d("Interceptor", "onResponse - onChunk: ${chunk.size}")\n        delay(100)\n        chunk\n    }\n\n    // Read the complete response body\n    response.onBody { body: ByteArray ->\n        Log.d("Interceptor", "onResponse - onBody: ${body.size}")\n\n        // Read response body\n        val string = body.decodeToString()\n        val json = JSONObject(string)\n\n        // Perform another async computation\n        delay(1000) // simulating an async call\n\n        // Replace response body\n        "new response body".toByteArray()\n    }\n}\n'})})]})}function l(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(67294);let s={},o=t.createContext(s);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);