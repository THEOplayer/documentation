"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["92885"],{73287:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"playback/securing-stream-playback","title":"Securing Stream Playback","description":"Securing the playback of your Broadcast is one of the most important features provided by the Dolby.io platform. Although securing your stream is optional, it is highly recommended for broadcasts that are non-public or paywalled.","source":"@site/millicast/playback/securing-stream-playback.md","sourceDirName":"playback","slug":"/securing-stream-playback","permalink":"/documentation/pr-preview/pr-260/millicast/securing-stream-playback","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/playback/securing-stream-playback.md","tags":[],"version":"current","frontMatter":{"title":"Securing Stream Playback","slug":"/securing-stream-playback"},"sidebar":"millicast","previous":{"title":"Multi-view","permalink":"/documentation/pr-preview/pr-260/millicast/multiview"},"next":{"title":"Multi-source Playback","permalink":"/documentation/pr-preview/pr-260/millicast/source-and-layer-selection"}}'),r=n("85893"),s=n("50065");let a={title:"Securing Stream Playback",slug:"/securing-stream-playback"},o=void 0,c={},l=[{value:"Creating a subscribe token to playback a secure stream",id:"creating-a-subscribe-token-to-playback-a-secure-stream",level:2},{value:"Viewing a secured stream",id:"viewing-a-secured-stream",level:2},{value:"Viewing a secured stream with the hosted viewer",id:"viewing-a-secured-stream-with-the-hosted-viewer",level:3},{value:"Viewing a secured stream with the embedded viewer",id:"viewing-a-secured-stream-with-the-embedded-viewer",level:4},{value:"Preventing stream sharing with subscribe tokens",id:"preventing-stream-sharing-with-subscribe-tokens",level:3},{value:"Viewing secure streams with your own viewer app",id:"viewing-secure-streams-with-your-own-viewer-app",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"400 (Bad Request)",id:"400-bad-request",level:3},{value:"401 (Unauthorized)",id:"401-unauthorized",level:3},{value:"CORS related errors",id:"cors-related-errors",level:3}];function d(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/managing-your-tokens#create-a-publish-token",children:"Securing the playback of your Broadcast"})," is one of the most important features provided by the Dolby.io platform. Although securing your stream is ",(0,r.jsx)(t.em,{children:"optional"}),", it is ",(0,r.jsx)(t.strong,{children:"highly recommended"})," for broadcasts that are non-public or paywalled."]}),"\n",(0,r.jsxs)(t.p,{children:["To view a secured stream you first need to create a Subscribe token. With your Subscribe token in hand, you can then use it to authenticate a connection and view the broadcast. This guide outlines ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/securing-stream-playback#creating-a-subscribe-token-to-playback-a-secure-stream",children:"how to create a token"})," and ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/securing-stream-playback#viewing-a-secured-stream",children:"how to view a secure stream"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-a-subscribe-token-to-playback-a-secure-stream",children:"Creating a subscribe token to playback a secure stream"}),"\n",(0,r.jsxs)(t.p,{children:["To secure broadcast playback, you need to enable the ",(0,r.jsx)(t.strong,{children:"Secure Viewer"})," setting when creating a Publishing token. For more information on enabling Secure Viewer, explore the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/managing-your-tokens#create-a-publish-token",children:"Creating a Publishing Token guide"}),"."]}),"\n",(0,r.jsx)(t.p,{children:'Subscribe tokens are used to authenticate access to a "Secure stream". When enabled, streams that require a Subscribe token will block access to users not in possession of a valid token coming from a valid domain. Subscribe tokens also allow you to add time limits, specify IPs, and even set the token to only work from single or multiple specified domains. Even though restricting access to streamed content in selected geo-locations is possible using the publish token, the subscribe token lets you add additional geo-blocking rules.'}),"\n",(0,r.jsxs)(t.p,{children:["To create a Subscribe token, follow the",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/subscribe-tokens",children:" Creating a Subscribe Token guide"}),", which outlines how to create a token in the Dolby.io dashboard, or the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/token-api",children:"Token API"})," guide which outlines how to create tokens programmatically. Once created, your token will be a string of alphanumeric characters looking something like the following:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"fff04a5a1c02b2b8d48a9133e8461985aa482066cc3e9ed487baaac89588e26f"})}),"\n",(0,r.jsxs)(t.p,{children:["With your token in hand, proceed to ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/securing-stream-playback#viewing-a-secured-stream",children:"Viewing a Secured Stream"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"viewing-a-secured-stream",children:"Viewing a secured stream"}),"\n",(0,r.jsxs)(t.p,{children:["There are ",(0,r.jsx)(t.strong,{children:"two"})," main ways you can use the Subscribe token:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["To view a stream via the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/hosted-viewer",children:"Dolby.io Hosted Viewer"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"To view a stream via your own streaming app."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"viewing-a-secured-stream-with-the-hosted-viewer",children:"Viewing a secured stream with the hosted viewer"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/hosted-viewer",children:"Playing back with the Hosted Viewer"})," is a common way to test the Dolby.io platform. If you haven't already tested out the Hosted Viewer it is recommended you explore the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/hosted-viewer",children:"Hosted Viewer Playback guide"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["When an ",(0,r.jsx)(t.strong,{children:"unsecured"})," stream is live, you'll be able to view the broadcast at:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"https://viewer.millicast.com/?streamId=[YOUR ACCOUNT ID]/[YOUR STREAM NAME]"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(39269).Z+"",width:"1113",height:"653"})}),"\n",(0,r.jsxs)(t.p,{children:["When a stream is ",(0,r.jsx)(t.strong,{children:"secured"}),", you'll only be able to view the broadcast with a valid Subscribe token. This can be done in browser with the Hosted Viewer by appending a ",(0,r.jsx)(t.code,{children:"token"})," flag to the URL:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"https://viewer.millicast.com?streamId=[Account ID]/[Stream Name]&token=[Subscribe Token]"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(39269).Z+"",width:"1113",height:"653"})}),"\n",(0,r.jsxs)(t.p,{children:["If you attempt to join the stream without a valid Subscribe token, you'll receive a ",(0,r.jsx)(t.code,{children:"401 Unauthorized"})," error:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(39269).Z+"",width:"1113",height:"653"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\uD83D\uDEA7 Subscribe token exposed in the URL"}),"\n",(0,r.jsxs)(t.p,{children:["For both the Embedded Viewer and the Hosted Viewer the Subscribe token is exposed in the URL. Unless your are using ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/token-security#ip-filters",children:"IP filtering"}),", users can share the URL and by extention the stream itself. To prevent this, each user should be served a Subscribe token unique to them. To learn about how to acomplish this continue to ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/securing-stream-playback#preventing-stream-sharing-with-subscribe-tokens",children:"Preventing Stream Sharing with Subscribe Tokens"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"viewing-a-secured-stream-with-the-embedded-viewer",children:"Viewing a secured stream with the embedded viewer"}),"\n",(0,r.jsxs)(t.p,{children:["You can also embed the Dolby.io Hosted Viewer into your webpage as an ",(0,r.jsx)(t.code,{children:"<iframe></iframe>"}),". To secure the embedded viewer, include the Subscribe token in the iframe:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<iframe\n  src="https://viewer.millicast.com?streamId=[Account ID]/[Stream Name]&token=[Subscribe Token]"\n  allowfullscreen\n  width="640"\n  height="480"\n></iframe>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"preventing-stream-sharing-with-subscribe-tokens",children:"Preventing stream sharing with subscribe tokens"}),"\n",(0,r.jsxs)(t.p,{children:["Whilst using the Hosted Viewer is a great option, you may have noticed the Subscribe token is exposed in the URL. For a truly secure playback experience, viewers should be served a Subscribe token that is unique to them and can't be shared. This is accomplished with the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/token-security#bind-ip-on-usage",children:"Binds IP on Usage"})," feature, which binds the Subscribe token to the IP address of the first person who joins the stream with that specific Subscribe token."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"For example:"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Angelik may be served the stream URL",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"https://viewer.millicast.com?streamId=DevAcc/WorldCup2023&token=fff04a5a1c02b2b8d48a9133e84619889588e26f"}),(0,r.jsx)(t.br,{}),"\n","which she uses to join the stream."]}),"\n",(0,r.jsxs)(t.p,{children:["Because this token has ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/token-security#bind-ip-on-usage",children:"Binds IP on Usage"})," enabled and set to bind to the first IP address, her IP address is saved by the Dolby.io CDN. If Angelik were to then share the URL to Jayson, he would be unable to join the stream since his IP address doesn't match Angelik's."]}),"\n",(0,r.jsx)(t.p,{children:"If Angelik were to leave the stream and return an hour later, she would still be able to join the stream because her IP address is associated with the token."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To learn more about other access control features you can enable for your Subscribe token, check out the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/access-control#subscribing-access-control",children:"Access Control guide"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"viewing-secure-streams-with-your-own-viewer-app",children:"Viewing secure streams with your own viewer app"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\uD83D\uDC4D Building with the Dolby.io SDKs for the first time?"}),"\n",(0,r.jsxs)(t.p,{children:["Check out the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/",children:"Getting Started"})," tutorial for a quick and easy introduction to using the Dolby.io SDKs and platform."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To view a secure stream in your own viewer app, you'll need to create a Subscribe token. Depending on the size of your platform, you may want to create these tokens programmatically using a token server and the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/token-api",children:"Token APIs"}),". This part of the guide gives an example of how to programmatically create a Subscribe token, and how to use it to authenticate a connection to a viewer."]}),"\n",(0,r.jsxs)(t.p,{children:["To get started we first need to define a function, ",(0,r.jsx)(t.code,{children:"getToken"})," to create our Subscribe token. The ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/api/subscribe-token-v-1-create-token",children:"Create Token"})," API provides a UI to help with defining our API call. Each Subscribe token that our ",(0,r.jsx)(t.code,{children:"getToken"})," function creates will be associated with a single stream denoted by the ",(0,r.jsx)(t.code,{children:"streamName"}),", expire after one hour (3600 seconds), and bind to the IP of the first person who connects to the stream with that token. In other words, this token will only grant access to a specific stream, for one hour, and for one user."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"async function getToken(streamName, apiSecretKey) {\n  const options = {\n    method: 'POST',\n    headers: {\n      accept: 'application/json, text/plain, */*',\n      'content-type': 'application/json;charset=utf-8',\n      authorization: 'Bearer ' + apiSecretKey,\n    },\n    body: JSON.stringify({\n      label: streamName,\n      streams: [{ isRegex: false, streamName: streamName }],\n      expires: 3600,\n      bindIpsOnUsage: 1,\n    }),\n  };\n\n  const response = await fetch('https://api.millicast.com/api/subscribe_token', options);\n  const subscribeToken = await response.json();\n  return subscribeToken;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Creating Subscribe tokens ",(0,r.jsx)(t.strong,{children:"should take place on a secure server, not in the client-side application"}),'. You should create a "Token Server", which serves a Subscribe token to the client-side application, which uses it to connect.']}),"\n",(0,r.jsxs)(t.p,{children:["In this case, for demonstration purposes, ",(0,r.jsx)(t.code,{children:"getToken"})," function will return a Subscribe token, which can then be used for authenticating a connection to Dolby.io along with the ",(0,r.jsx)(t.code,{children:"streamName"})," and the ",(0,r.jsx)(t.code,{children:"accID"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const response = await getToken(streamName, apiSecretKey);\nconst subscribe_token = response['data']['token'];\nconsole.log('Your Subscribe Token: ' + subscribe_token);\n\nconst tokenGenerator = () =>\n  window.millicast.Director.getSubscriber({\n    streamName: streamName,\n    streamAccountId: accID,\n    subscriberToken: subscribe_token,\n  });\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Using code from the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/getting-started/creating-real-time-streaming-web-app",children:"2. Create a Streaming Web App"})," tutorial, we can put everything together to create a very basic web app that uses a Subscribe token to view a secure stream."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u2757\uFE0F API Secret"}),"\n",(0,r.jsxs)(t.p,{children:["The below example ",(0,r.jsx)(t.strong,{children:"is for demonstration purposes only"})," and should not be used in production. You ",(0,r.jsx)(t.strong,{children:"should never expose your API secret publicly"}),", and should instead set up a token sever to create and manage tokens rather than the client side example below."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />\n\n    <title>Dolby.io Getting Started with Streaming Web SDK</title>\n    <link rel="shortcut icon" href="https://go.dolby.io/hubfs/Dolby_April2021/images/favicon-32x32.png" />\n\n    \x3c!-- Step 2.1b: Include Millicast Web SDK --\x3e\n    <script src="https://cdn.jsdelivr.net/npm/@millicast/sdk/dist/millicast.umd.min.js"><\/script>\n\n    \x3c!-- Bootstrap Bundle --\x3e\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"\n      crossorigin="anonymous"\n    />\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />\n  </head>\n  <body>\n    <div class="container bg-dark text-white gx-4 px-4 py-4 mt-3 rounded">\n      <img src="https://go.dolby.io/hubfs/raw_assets/public/Dolby_April2021/images/dolby-io-logo.svg" />\n      <h1>Getting Started with Streaming Web SDK</h1>\n    </div>\n\n    <div class="container px-4 mt-4">\n      ,\n      <label for="fname">Enter Livestream Account ID:</label>\n      <input type="text" id="accID" class="input_box" size="21" />, ,\n      <label for="fname">Enter the Livestream Name:</label>\n      <input type="text" id="streamName" class="input_box" size="22" />, ,\n      <label for="fname">Enter Your API Secret Key:</label>\n      <input type="text" id="apiSecretKey" class="input_box" size="24" />,\n      <i>Your API Secret should never be shared publicly, this is just to showcase how to create a subscribe token!</i>, ,\n      <button id="startBtn" onclick="connectStream()">Start Stream</button>, ,\n      <div class="row justify-content-around mt-3">\n        <div class="col-8 shadow p-3 mb-5 bg-body rounded text-center">\n          <h1>Playback</h1>\n          <video width="640" height="360" id="streaming-video-placeholder" class="vidBox" controls>\n            This browser does not support video playback.\n          </video>\n        </div>\n      </div>\n    </div>\n\n    \x3c!-- Bootstrap Bundle --\x3e\n    <script\n      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"\n      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"\n      crossorigin="anonymous"\n    ><\/script>\n\n    \x3c!-- Dolby.io Starter Application --\x3e\n    <script type="text/javascript">\n      async function connectStream() {\n        // Get your text box inputs\n        const accID = document.getElementById(\'accID\').value;\n        const streamName = document.getElementById(\'streamName\').value;\n        const apiSecretKey = document.getElementById(\'apiSecretKey\').value;\n\n        // Get Subscribe Token\n        async function getToken(accID, streamName, apiSecretKey) {\n          const options = {\n            method: \'POST\',\n            headers: {\n              accept: \'application/json, text/plain, */*\',\n              \'content-type\': \'application/json;charset=utf-8\',\n              authorization: \'Bearer \' + apiSecretKey,\n            },\n            body: JSON.stringify({\n              label: streamName,\n              streams: [{ isRegex: false, streamName: streamName }],\n              expires: 3600,\n              bindIpsOnUsage: 1,\n            }),\n          };\n          const response = await fetch(\'https://api.millicast.com/api/subscribe_token\', options);\n          const subscribe_token = await response.json();\n          return subscribe_token;\n        }\n        const response = await getToken(streamName, apiSecretKey);\n        const subscribe_token = response[\'data\'][\'token\'];\n        console.log(\'Your Subscribe Token: \' + subscribe_token);\n\n        const tokenGenerator = () =>\n          window.millicast.Director.getSubscriber({\n            streamName: streamName,\n            streamAccountId: accID,\n            subscriberToken: subscribe_token,\n          });\n\n        // Step 2.1d: Attach a millicast view to the placeholder node\n        const videoNode = document.getElementById(\'streaming-video-placeholder\');\n        const millicastView = new millicast.View(streamName, tokenGenerator);\n        millicastView.on(\'track\', (event) => {\n          console.log(\'Stream has started.\');\n          videoNode.srcObject = event.streams[0];\n          videoNode.hidden = false;\n          videoNode.autoplay = true;\n        });\n\n        // Step 2.1e: Start connection to a publishing stream\n        try {\n          const options = {};\n          await millicastView.connect(options);\n        } catch (e) {\n          if (!millicastView.isActive()) {\n            console.log(\'Stream is not live, the broadcast will begin soon.\');\n          }\n\n          console.log(\'Connection failed: \', e);\n          millicastView.reconnect();\n        }\n      }\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["When you run the web app, you'll see three text boxes to input an ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/managing-your-tokens",children:"account ID"}),", ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/managing-your-tokens",children:"Livestream Name"}),", and ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/about-dash#settings",children:"API Secret key"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(35536).Z+"",width:"1703",height:"536"})}),"\n",(0,r.jsx)(t.p,{children:"Start a secure broadcast, then add the values into the text box. The app will create a Subscribe token and use it to connect to the stream."}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.h3,{id:"400-bad-request",children:"400 (Bad Request)"}),"\n",(0,r.jsx)(t.p,{children:"When you try to connect to a stream that has not yet begun to broadcast, you may see a 400 (Bad Request) error. This is expected, so you will want to create a user experience that does not attempt to connect() prematurely, by first checking if a broadcast has begun."}),"\n",(0,r.jsx)(t.h3,{id:"401-unauthorized",children:"401 (Unauthorized)"}),"\n",(0,r.jsxs)(t.p,{children:["This error occurs if the Subscribe token, Account ID, or Stream Name is incorrect when attempting to join a stream. Check that you are correctly creating a ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/subscribe-tokens",children:"Subscribe token"}),", and using the correct ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/managing-your-tokens",children:"Stream Name"})," and ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/managing-your-tokens",children:"Account ID"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"cors-related-errors",children:"CORS related errors"}),"\n",(0,r.jsxs)(t.p,{children:["When testing locally, you may encounter a Cross-Origin Resource Sharing or CORS error. This error is related to browser security and resource sharing and typically occurs because you requested resources without the appropriate headers. To proceed it is ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"recommended that you learn more about CORS"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},35536:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/083b1aa-image-e3934e61edbb38d02ac1c635c8ff0ea1.png"},39269:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/image-6aa5f0fd58aed0a2ae4c77e77e6d7301.png"},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var i=n(67294);let r={},s=i.createContext(r);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);