"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["78580"],{62236:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>r,assets:()=>h,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"how-to-guides/integrations/wowza-streaming-engine-with-secure-token-version-2","title":"Wowza streaming engine with secure token version 2","description":"This guide explains how to set up THEOplayer with Wowza Streaming Engine\u2122, using their SecureToken version 2 module, that provides playback protection via a security token that is exchanged between the server and clients. The SecureToken is a challenge/response system that helps to protect content against spoofing threats. Each connection is protected by a random key and a password (shared secret).","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/05-integrations/03-wowza-streaming-engine-with-secure-token-version-2.md","sourceDirName":"how-to-guides/05-integrations","slug":"/how-to-guides/integrations/wowza-streaming-engine-with-secure-token-version-2","permalink":"/documentation/pr-preview/pr-232/theoplayer/v4/how-to-guides/integrations/wowza-streaming-engine-with-secure-token-version-2","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/05-integrations/03-wowza-streaming-engine-with-secure-token-version-2.md","tags":[],"version":"v4","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"IRIS.TV","permalink":"/documentation/pr-preview/pr-232/theoplayer/v4/how-to-guides/integrations/iris-tv"},"next":{"title":"Deliver Low-Latency HLS live streams using Wowza Streaming Engine and THEOplayer","permalink":"/documentation/pr-preview/pr-232/theoplayer/v4/how-to-guides/integrations/deliver-low-latency-hls-live-streams-with-wowza-streaming-engine"}}'),s=t("85893"),i=t("50065");let a={},o="Wowza streaming engine with secure token version 2",h={},l=[{value:"SDKs",id:"sdks",level:2},{value:"How to set up THEOplayer with Wowza Streaming Engine",id:"how-to-set-up-theoplayer-with-wowza-streaming-engine",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Integrating THEOplayer with Wowza Streaming Engine",id:"integrating-theoplayer-with-wowza-streaming-engine",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Server-side hash generation code",id:"server-side-hash-generation-code",level:4},{value:"Client-side hash generation code",id:"client-side-hash-generation-code",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Resources",id:"resources",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"wowza-streaming-engine-with-secure-token-version-2",children:"Wowza streaming engine with secure token version 2"})}),"\n",(0,s.jsx)(n.p,{children:"This guide explains how to set up THEOplayer with Wowza Streaming Engine\u2122, using their SecureToken version 2 module, that provides playback protection via a security token that is exchanged between the server and clients. The SecureToken is a challenge/response system that helps to protect content against spoofing threats. Each connection is protected by a random key and a password (shared secret)."}),"\n",(0,s.jsxs)(n.p,{children:["An important aspect when generating the hash, is that the client web server should generate the hash when it generates the client webpage. The ",(0,s.jsx)(n.strong,{children:"client webpage should not"})," use JavaScript code to generate the hash, as the code is visible in the webpage source and would pose a potential security risk. As a result, our implementation is based on a node/express application to generate the hash."]}),"\n",(0,s.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection*"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection*"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection*"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"*CSS/JavaScript injection in the project is only possible with the legacy mobile SDKs (up to 4.12.X)."}),"\n",(0,s.jsx)(n.h2,{id:"how-to-set-up-theoplayer-with-wowza-streaming-engine",children:"How to set up THEOplayer with Wowza Streaming Engine"}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"There are three prerequisites in order to continue with this guide:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You have a THEOplayer license. If you are not using THEOplayer yet, you can start your free trial ",(0,s.jsx)(n.a,{href:"https://portal.theoplayer.com/",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You are a Wowza Streaming Engine client and are integrated with their streaming infrastructure. Information on Wowza Streaming Engine can be found ",(0,s.jsx)(n.a,{href:"https://www.wowza.com/docs/wowza-streaming-engine-product-articles/",children:"here"})," and information on how to protect your streams, using SecureToken, can be found ",(0,s.jsx)(n.a,{href:"https://www.wowza.com/docs/how-to-protect-streaming-using-securetoken-in-wowza-streaming-engine",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For the purposes of this example, we created a VOD application (this example would also work for live applications), in the Wowza Streaming Engine manager. We then configured our Wowza stream using the below settings in the Playback Security tab:"}),"\n",(0,s.jsxs)(n.p,{children:["i) SecureToken: ",(0,s.jsx)(n.strong,{children:"Protect all protocols using hash (SecureToken version 2)"})]}),"\n",(0,s.jsxs)(n.p,{children:["ii) Shared Secret: ",(0,s.jsx)(n.strong,{children:"53a0a16b7cde230b"})]}),"\n",(0,s.jsxs)(n.p,{children:["iii) Hash Algorithm: ",(0,s.jsx)(n.strong,{children:"SHA-256"})]}),"\n",(0,s.jsxs)(n.p,{children:["iv) Include client IP address in hash generation: ",(0,s.jsx)(n.strong,{children:"Ticked (yes)"})]}),"\n",(0,s.jsxs)(n.p,{children:["v) Hash Query Parameter Prefix: ",(0,s.jsx)(n.strong,{children:"wowzatoken"})]}),"\n",(0,s.jsxs)(n.p,{children:["vi) Client Restrictions: ",(0,s.jsx)(n.strong,{children:"No client restrictions"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The application was saved and restarted."}),"\n",(0,s.jsx)(n.h3,{id:"integrating-theoplayer-with-wowza-streaming-engine",children:"Integrating THEOplayer with Wowza Streaming Engine"}),"\n",(0,s.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/v4/getting-started/sdks/web/getting-started",children:"Getting Started on Web"})}),"\n",(0,s.jsx)(n.h4,{id:"server-side-hash-generation-code",children:"Server-side hash generation code"}),"\n",(0,s.jsx)(n.p,{children:"The below code makes reference to the above configuration settings specified in the Wowza Streaming Engine manager."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var express = require('express');\nvar app = express();\n\nvar crypto = require('crypto');\nvar address = require('address');\n\n// add CORS headers\napp.use('/generate-hash', function (req, res, next) {\n  res.header('Access-Control-Allow-Origin', '*');\n  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');\n  next();\n});\n\nconst path = require('path');\nconst port = 3000;\n\n/****************** START OF CONFIGURATION ******************/\n\n// your hash algorithm: 256, 384 OR 512\nconst hashAlgorithm = '256';\n\n// your shared Secret\nconst sharedSecret = '53a0a16b7cde230b';\n\n// the content path to the streaming asset and is the part of the URL that starts with the application name\n// (excluding the '/' that precedes the application name) and continues through to the end of the stream name or file name.\n// Be sure to exclude all HTTP request keywords after the stream name or file name (for example, /manifest.m3u8, /media.ts, /Manifest, /manifest.f4v, and so on)\nconst contentPath = 'vod/mp4:sample.mp4';\n\n// your token prefix custom parameter\nconst tokenPrefix = 'wowzatoken';\n\n// your random custom parameter (optional - leave as empty string if none)\nconst customParameter = 'myrandomcustomparameter';\n\n// include client IP address in hash generation (yes/no)?\nconst includeClientIPAddress = 'yes';\n\n//const now = new Date();\n//const startTime = Math.round(now.getTime() / 1000);\nconst startTime = '0';\n//const validity = 1000; // validity in seconds\n\n//const endTime = Math.round(now.getTime() / 1000) + validity;\nconst endTime = '0';\n\n/****************** END OF CONFIGURATION ******************/\n\nvar params = [];\n\n// create an array with the parameters\nif (includeClientIPAddress == 'yes') {\n  address(function (err, addrs) {\n    params.push(addrs.ip);\n  });\n}\n\nparams.push(\n  tokenPrefix + 'startTime=' + startTime,\n  tokenPrefix + 'endTime=' + endTime,\n  tokenPrefix + 'customParameter=' + customParameter,\n  sharedSecret\n);\n\n// params should be sorted alphabetically before constructing the hash string\nparams.sort();\n\n// construct the hash string\nvar hashString = contentPath + '?';\n\nfor (var i = 0; i < params.length; i++) {\n  if (i + 1 == params.length) {\n    hashString = hashString + params[i];\n  } else {\n    hashString = hashString + params[i] + '&';\n  }\n}\n\n// the hash generated at the client should be a URL-safe Base64-encoded string.\napp.get('/generate-hash', function (req, res, next) {\n  var hash = crypto\n    .createHash('sha' + hashAlgorithm)\n    .update(hashString, 'utf8')\n    .digest('base64');\n\n  // URL-safe Base64 encoding replaces the '+' character with the '-' character and the '/' character with the '_' character.\n  hash = hash.replace(/\\+/g, '-');\n  hash = hash.replace(/\\//g, '_');\n\n  console.log(hashString);\n\n  res.send(hash);\n});\n\n// Listen for requests\napp.get('/', function (req, res) {\n  res.sendFile(path.join(__dirname + '/index.html'));\n});\n\napp.listen(port);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Save this JavaScript file as wowzasecuretoken.js and then run it with ",(0,s.jsx)(n.code,{children:"node wowzasecuretoken.js"})]}),"\n",(0,s.jsx)(n.h4,{id:"client-side-hash-generation-code",children:"Client-side hash generation code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>THEOplayer Web SDK: Getting Started</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"path/to/theoplayer/ui.css\" />\n    \x3c!-- adds THEOplayer CSS --\x3e\n  </head>\n  <body>\n    <div class=\"theoplayer-container video-js theoplayer-skin\"></div>\n    <script type=\"text/javascript\" src=\"path/to/thoeplayer/THEOplayer.js\"><\/script>\n    \x3c!-- adds THEOplayer library --\x3e\n    <script>\n      // Initialize player function once the hash has been retrieved\n      var initPlayer = function (hash) {\n        console.log(hash);\n        // Replace http://192.168.1.34:1935/vod/mp4:sample.mp4/playlist.m3u8 with your stream manifest\n        var hlsUrl =\n          'http://192.168.1.34:1935/vod/mp4:sample.mp4/playlist.m3u8?' +\n          'wowzatokenstartTime=0&' +\n          'wowzatokenendTime=0&' +\n          'wowzatokencustomParameter=myrandomcustomparameter&' +\n          'wowzatokenhash=' +\n          hash;\n\n        console.log(hlsUrl);\n\n        var element = document.querySelector('.video-js');\n        var player = new THEOplayer.Player(element, {\n          libraryLocation: 'path/to/theoplayer',\n          license: 'your-license-here',\n        });\n\n        player.src = hlsUrl;\n      };\n\n      // Ajax request for the hash to the node/express app\n      var requestHash = function (url) {\n        var req = new XMLHttpRequest();\n        req.open('GET', url, true);\n        req.onreadystatechange = function () {\n          if (req.readyState === 4) {\n            var response = req.responseText;\n            if (req.status === 200) {\n              initPlayer(response);\n            } else {\n              console.log('Could not get hash');\n            }\n          }\n        };\n        req.onerror = function () {\n          console.log('Could not get hash');\n        };\n        req.send();\n      };\n\n      // Start the request to your node/express server. Be sure to replace http://127.0.0.1:3000 with your node IP address and port\n      var serverHashUrl = 'http://127.0.0.1:3000/generate-hash';\n      requestHash(serverHashUrl);\n    <\/script>\n  </body>\n</html>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Save this HTML file as ",(0,s.jsx)(n.code,{children:"index.html"})," and then view it in your browser window."]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"THEOplayer partnered with Wowza Streaming Engine to fully integrate their SecureToken version 2 module."}),"\n",(0,s.jsx)(n.p,{children:"In summary, to integrate Wowza Streaming Engine SecureToken version 2 module, in THEOplayer, you have to implement a client/server side solution using custom code."}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/v4/getting-started/sdks/web/getting-started",children:"Getting Started on Web"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.wowza.com/docs/wowza-streaming-engine-product-articles/",children:"Getting Started with Wowza Streaming Engine"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.wowza.com/docs/how-to-protect-streaming-using-securetoken-in-wowza-streaming-engine",children:"Protect your streams using SecureToken in Wowza Streaming Engine"})}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(67294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);