"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["51786"],{55165:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>a,assets:()=>h,toc:()=>p,contentTitle:()=>d});var a=JSON.parse('{"id":"getting-started/creating-real-time-streaming-web-app","title":"2. Create a Streaming Web App","description":"In Part 1 we reviewed how-to log into your Dolby.io Streaming Dashboard, create a publish token, start a broadcast, and playback that broadcast in the hosted web viewer or in an iframe, all without writing any code. We\'ll continue getting started by substituting the broadcast and playback components with a custom-built web application.","source":"@site/millicast/getting-started/creating-real-time-streaming-web-app.mdx","sourceDirName":"getting-started","slug":"/getting-started/creating-real-time-streaming-web-app","permalink":"/documentation/pr-preview/pr-256/millicast/getting-started/creating-real-time-streaming-web-app","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/getting-started/creating-real-time-streaming-web-app.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"2. Create a Streaming Web App","slug":"/getting-started/creating-real-time-streaming-web-app","sidebar_position":2},"sidebar":"millicast","previous":{"title":"1. Use the Streaming Dashboard","permalink":"/documentation/pr-preview/pr-256/millicast/getting-started/using-the-dashboard"},"next":{"title":"3. Automate using REST APIs","permalink":"/documentation/pr-preview/pr-256/millicast/getting-started/using-rest-apis"}}'),i=n("85893"),r=n("50065");let s=n.p+"assets/images/dolbyio-web-embedded-viewer-live-23b73818a230c6c80282fb3dff886b0a.png",o=n.p+"assets/images/dolbyio-web-playback-5fb85b3814b408ceea5ced5c9a53bd06.png",c=n.p+"assets/images/dolbyio-web-broadcast-6fc9e0d5d673f9cc321db35f4d65c74d.png",l={title:"2. Create a Streaming Web App",slug:"/getting-started/creating-real-time-streaming-web-app",sidebar_position:2},d=void 0,h={},p=[{value:"Embed the streaming viewer in an iFrame",id:"embed-the-streaming-viewer-in-an-iframe",level:2},{value:"Playback from a custom web application",id:"playback-from-a-custom-web-application",level:2},{value:"a. Clone the Getting Started repository",id:"a-clone-the-getting-started-repository",level:3},{value:"View the app locally",id:"view-the-app-locally",level:4},{value:"b. Include the Web SDK",id:"b-include-the-web-sdk",level:3},{value:"c. Configure account ID and stream name",id:"c-configure-account-id-and-stream-name",level:3},{value:"d. Attach a view",id:"d-attach-a-view",level:3},{value:"e. Connect to the stream",id:"e-connect-to-the-stream",level:3},{value:"Broadcast from a custom web application",id:"broadcast-from-a-custom-web-application",level:2},{value:"a. Clone the Getting Started repository",id:"a-clone-the-getting-started-repository-1",level:3},{value:"b. Configure publishing token and stream name",id:"b-configure-publishing-token-and-stream-name",level:3},{value:"c. Attach media stream to broadcast",id:"c-attach-media-stream-to-broadcast",level:3},{value:"d. Stop the broadcast",id:"d-stop-the-broadcast",level:3},{value:"Continue learning",id:"continue-learning",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"400 (Bad Request)",id:"400-bad-request",level:3}];function m(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/getting-started/using-the-dashboard",children:"Part 1"})," we reviewed how-to log into your Dolby.io Streaming Dashboard, create a publish token, start a broadcast, and playback that broadcast in the hosted web viewer or in an iframe, all without writing any code. We'll continue getting started by substituting the broadcast and playback components with a custom-built web application."]}),"\n",(0,i.jsx)(t.p,{children:"This tutorial is split into three sections:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#embed-the-streaming-viewer-in-an-iframe",children:"Embed the Hosted Streaming Viewer in an iFrame"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#playback-from-a-custom-web-application",children:"Playback from a Custom Web Application"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#broadcast-from-a-custom-web-application",children:"Broadcast from a Custom Web Application"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"embed-the-streaming-viewer-in-an-iframe",children:"Embed the streaming viewer in an iFrame"}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/getting-started/using-the-dashboard",children:"Part 1 - Using the Streaming Dashboard"}),", you may have noticed the ",(0,i.jsx)(t.strong,{children:"Hosted Viewer iFrame"}),". You can copy and paste the ",(0,i.jsx)(t.code,{children:"<iframe>"})," directly into your own web application and replace the ",(0,i.jsx)(t.em,{children:"streamId"})," and ",(0,i.jsx)(t.em,{children:"streamName"})," with your own."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<iframe src="https://viewer.millicast.com?streamId=accountId/streamName" allowfullscreen width="640" height="480"> </iframe>\n'})}),"\n",(0,i.jsx)(t.p,{children:"This is the simplest way to get up and running quickly with your own web application. This works well for long-running streams or one-time live events."}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:s,width:"500"})}),"\n",(0,i.jsxs)(t.p,{children:["If you click the ",(0,i.jsx)(t.code,{children:"Customize"})," button in the Playback Dashboard you'll see there are lots of options you can use to include or exclude playback behaviors. The ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/how-to-broadcast-in-dashboard",children:"How to Broadcast in Dashboard"})," page goes through these options in more detail."]}),"\n",(0,i.jsx)(t.h2,{id:"playback-from-a-custom-web-application",children:"Playback from a custom web application"}),"\n",(0,i.jsxs)(t.p,{children:["In the previous part, we were able to begin to ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/broadcast",children:"broadcast"})," a stream and ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/playback",children:"playback"})," that stream in a hosted web viewer application. For more complex projects, you may need more control over the end-user experience. To demonstrate this, we'll build a custom web application to playback and view the stream using the same publish token created from the dashboard."]}),"\n",(0,i.jsx)(t.h3,{id:"a-clone-the-getting-started-repository",children:"a. Clone the Getting Started repository"}),"\n",(0,i.jsxs)(t.p,{children:["Clone the repository: ",(0,i.jsx)(t.a,{href:"https://github.com/dolbyio-samples/stream-sdk-web-getting-started",children:"dolbyio-samples/stream-sdk-web-getting-started"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/dolbyio-samples/stream-sdk-web-getting-started.git\ncd stream-sdk-web-getting-started/playback-app\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This starter project includes a folder for the ",(0,i.jsx)(t.strong,{children:"playback-app"}),". The folder includes the scaffolding of a not-yet-functional single-page web application. This application is using ",(0,i.jsx)(t.a,{href:"https://getbootstrap.com/",children:"Bootstrap"})," to add basic layout and functional behaviors. Bootstrap is not a requirement, you can use other libraries that may fit your particular application needs and preferences. What's important is that we've added buttons, which we can assign behavior to as we continue."]}),"\n",(0,i.jsx)(t.h4,{id:"view-the-app-locally",children:"View the app locally"}),"\n",(0,i.jsx)(t.p,{children:"There are many ways you can view static HTML in a web browser."}),"\n",(0,i.jsxs)(t.p,{children:["a) You can open the file directly from your operating system with a ",(0,i.jsx)(t.strong,{children:"file://"})," path in your browser."]}),"\n",(0,i.jsxs)(t.p,{children:["b) You can use a development web server like those available in ",(0,i.jsx)(t.a,{href:"https://docs.python.org/3/library/http.server.html",children:"python3"})," or ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/live-server",children:"node"})," if you have them installed to view the app in your browser."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="python"',children:"python3 -m http.server\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Text",metastring:'title="node"',children:"npx live-server\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Text",metastring:'title="local file"',children:"open index.html\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You'll be editing a single ",(0,i.jsx)(t.strong,{children:"index.html"})," file to add streaming capabilities so you may need to refresh the application as you make changes in each step that follows."]}),"\n",(0,i.jsx)(t.h3,{id:"b-include-the-web-sdk",children:"b. Include the Web SDK"}),"\n",(0,i.jsxs)(t.p,{children:["To dynamically generate a viewer you should use the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/web",children:"Web SDK"})," in your application. You can do this by adding a ",(0,i.jsx)(t.code,{children:"<script>"})," element in the ",(0,i.jsx)(t.code,{children:"<head>"})," section to include the SDK from a hosted location such as a ",(0,i.jsx)(t.a,{href:"https://www.jsdelivr.com/package/npm/@millicast/sdk",children:"CDN"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",metastring:'title="playback-app/index.html"',children:'\x3c!-- Step 2.1b: Include Millicast Web SDK --\x3e\n<script src="https://cdn.jsdelivr.net/npm/@millicast/sdk/dist/millicast.umd.min.js"><\/script>\n'})}),"\n",(0,i.jsxs)(t.admonition,{title:"Using the Millicast SDK",type:"danger",children:[(0,i.jsxs)(t.p,{children:["Review the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/web",children:"Web SDK"})," documentation for additional installation methods such as with ",(0,i.jsx)(t.code,{children:"npm"}),". The Streaming API used to be known as Millicast so the SDK uses that name when importing the library."]}),(0,i.jsx)(t.p,{children:"When importing the SDK from jsdelivr you will automatically be updated to the latest version. This is fine for development, but it is strongly recommended to pin to a specific version release in order to increase stability when you move to production."})]}),"\n",(0,i.jsx)(t.h3,{id:"c-configure-account-id-and-stream-name",children:"c. Configure account ID and stream name"}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/getting-started/using-the-dashboard",children:"Part 1"})," we created a stream with a unique name such as ",(0,i.jsx)(t.em,{children:"myStreamName"}),". You'll need to add that to the code along with the ",(0,i.jsx)(t.strong,{children:"Account ID"})," that is associated with the publishing token. You can find both of these values from the Dolby.io Dashboard."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// Step 2.1c: Set your account id and stream name while Getting Started\nconst yourStreamAccountId = 'ENTER ACCOUNT ID';\nconst yourStreamName = 'ENTER YOUR STREAM NAME';\n\n// Callback to generate a subscriber token with credentials\nconst tokenGenerator = () =>\n  millicast.Director.getSubscriber({\n    streamName: yourStreamName,\n    streamAccountId: yourStreamAccountId,\n  });\n"})}),"\n",(0,i.jsx)(t.h3,{id:"d-attach-a-view",children:"d. Attach a view"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"View"})," class is used to manage the WebRTC connection with the server that is distributing the real-time stream. The ",(0,i.jsx)(t.code,{children:"streaming-video-placeholder"})," is the ",(0,i.jsx)(t.strong,{children:"id"})," of a ",(0,i.jsx)(t.code,{children:"<video>"})," element within the application."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// Step 2.1d: Attach a millicast view to the placeholder node\nconst videoNode = document.getElementById('streaming-video-placeholder');\nconst millicastView = new millicast.View(undefined, tokenGenerator);\nmillicastView.on('track', (event) => {\n  console.log('Stream has started.');\n  videoNode.srcObject = event.streams[0];\n  videoNode.hidden = false;\n  videoNode.autoplay = true;\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"e-connect-to-the-stream",children:"e. Connect to the stream"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"connect"})," method can take a few different options which you can learn more about in the ",(0,i.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/View.html#connect",children:"reference documentation"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// Step 2.1e: Start connection to a publishing stream\ntry {\n  await millicastView.connect();\n} catch (e) {\n  if (!millicastView.isActive()) {\n    console.log('Stream is not live, the broadcast will begin soon.');\n  }\n\n  console.log('Connection failed:', e);\n  millicastView.reconnect();\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If you start broadcasting using the Dolby.io Dashboard as you did in ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/getting-started/using-the-dashboard",children:"Part 1"}),", you will then have a simple web app with video playback to continue customizing."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:o,width:"500"})}),"\n",(0,i.jsx)(t.h2,{id:"broadcast-from-a-custom-web-application",children:"Broadcast from a custom web application"}),"\n",(0,i.jsxs)(t.p,{children:["For this section, you can use the hosted playback viewer or the ",(0,i.jsx)(t.em,{children:"playback-app"})," you just built in the last section. This section will help you build a separate app that would be used to ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/capture",children:"Capture"})," and broadcast streaming content."]}),"\n",(0,i.jsx)(t.h3,{id:"a-clone-the-getting-started-repository-1",children:"a. Clone the Getting Started repository"}),"\n",(0,i.jsxs)(t.p,{children:["Clone the repository ",(0,i.jsx)(t.a,{href:"https://github.com/dolbyio-samples/stream-sdk-web-getting-started",children:"dolbyio-samples/stream-sdk-web-getting-started"})," as described in the first section but this time we'll be working the with ",(0,i.jsx)(t.strong,{children:"broadcast-app"})," folder. You can view the app locally using the same tools described in the previous section."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/dolbyio-samples/stream-sdk-web-getting-started.git\ncd stream-sdk-web-getting-started/broadcast-app\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/web",children:"Web SDK"})," is pulled in with a ",(0,i.jsx)(t.code,{children:"<script>"})," element from a CDN in the same way as is done for the playback-app."]}),"\n",(0,i.jsx)(t.h3,{id:"b-configure-publishing-token-and-stream-name",children:"b. Configure publishing token and stream name"}),"\n",(0,i.jsxs)(t.p,{children:["You'll need to retrieve the ",(0,i.jsx)(t.strong,{children:"Publishing Token"})," from the Dolby.io dashboard that corresponds with the ",(0,i.jsx)(t.em,{children:"streamName"})," used in the ",(0,i.jsx)(t.em,{children:"playback-app"})," section."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// Step 2.2b: Set your account id and stream name while Getting Started\nconst yourPublishingToken = 'ENTER PUBLISHING TOKEN';\nconst yourStreamAccountId = 'ENTER ACCOUNT ID';\nconst yourStreamName = 'ENTER YOUR STREAM NAME';\n\nconst tokenGenerator = () =>\n  millicast.Director.getPublisher({\n    token: yourPublishingToken,\n    streamName: yourStreamName,\n  });\n\n// Callback to generate a publisher token with credentials\nconst publisher = new millicast.Publish(undefined, tokenGenerator);\n"})}),"\n",(0,i.jsx)(t.h3,{id:"c-attach-media-stream-to-broadcast",children:"c. Attach media stream to broadcast"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"getUserMedia()"})," function is used to capture an incoming media stream from the user's camera and microphone. To verify that this is working, we provide a mirror of the audio and video in a video element. This is happening locally within the web browser."]}),"\n",(0,i.jsxs)(t.p,{children:["To begin broadcasting, we must ",(0,i.jsx)(t.code,{children:"connect()"})," the publisher to the ",(0,i.jsx)(t.em,{children:"mediaStream"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// Step 2.2c: Attach a millicast view to the placeholder node\nconst startStreaming = async () => {\n  // Request access to the video camera and microphone\n  const mediaStream = await navigator.mediaDevices.getUserMedia({\n    audio: true,\n    video: true,\n  });\n\n  // Provide mirror in a video element of the capture\n  const videoNode = document.getElementById('streaming-video-placeholder');\n  videoNode.srcObject = mediaStream;\n  videoNode.hidden = false;\n  videoNode.autoplay = true;\n\n  // Broadcast captured audio and video\n  const broadcastOptions = {\n    mediaStream: mediaStream,\n  };\n\n  try {\n    await publisher.connect(broadcastOptions);\n    console.log('Broadcast has begun.');\n\n    // Example to playback with the hosted viewer\n    const viewerUrl = `https://viewer.millicast.com?streamId=${yourStreamAccountId}/${yourStreamName}`;\n    document.getElementById('viewer-url').innerHTML = `<a href=\"${viewerUrl}\" target=\"_new\">${viewerUrl}</a>`;\n  } catch (e) {\n    console.error('Failed to begin broadcast', e);\n  }\n};\n\n// Handle button click to begin\ndocument.getElementById('btn-start').onclick = async () => {\n  await startStreaming();\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"viewerUrl"})," provides a convenient link to the hosted playback viewer so that you can verify the broadcast is working."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:c,width:"500"})}),"\n",(0,i.jsx)(t.h3,{id:"d-stop-the-broadcast",children:"d. Stop the broadcast"}),"\n",(0,i.jsxs)(t.p,{children:["For a good end-user experience, you will want to ",(0,i.jsx)(t.code,{children:"stop()"})," publishing when the broadcast is complete."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// Step 2.2d: Stop the broadcast\ndocument.getElementById('btn-stop').onclick = () => {\n  publisher.stop();\n  location.reload();\n};\n"})}),"\n",(0,i.jsx)(t.h2,{id:"continue-learning",children:"Continue learning"}),"\n",(0,i.jsx)(t.p,{children:"These starter apps were kept simple for the purpose of getting started. You can re-use these samples in your preferred JavaScript framework such as React, VueJS, Angular, etc. as you customize the user experience of joining a stream, handling when a stream hasn't started, maintaining button state, etc."}),"\n",(0,i.jsxs)(t.p,{children:["Continue by exploring the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/web",children:"Streaming Web SDK"})," documentation for a guide on other functions as you continue building your own project."]}),"\n",(0,i.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(t.h3,{id:"400-bad-request",children:"400 (Bad Request)"}),"\n",(0,i.jsxs)(t.p,{children:["When you try to connect to a stream that has not yet begun to broadcast, you may see a ",(0,i.jsx)(t.code,{children:"400 (Bad Request)"})," error. This is expected, so you will want to create a user experience that does not attempt to ",(0,i.jsx)(t.strong,{children:"connect()"})," prematurely, by first checking if a broadcast has begun."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",children:"POST https://director.millicast.com/api/director/subscribe 400 (Bad Request)\n"})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var a=n(67294);let i={},r=a.createContext(i);function s(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);