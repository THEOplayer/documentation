"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["27171"],{83090:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>o,assets:()=>s,toc:()=>l,contentTitle:()=>r});var o=JSON.parse('{"id":"how-to-guides/miscellaneous/webaudio","title":"Web Audio","description":"THEOplayer provides a Web Audio API, which allows you to do some quite nifty stuff with the player\'s audio output. If you are unfamiliar with the ideas behind Web Audio API, Mozilla has an excellent intro to the basic ideas you need to know about here. This guide will help you set up a demo just like the one we have in our Demo Zone.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/07-miscellaneous/05-webaudio.md","sourceDirName":"how-to-guides/07-miscellaneous","slug":"/how-to-guides/miscellaneous/webaudio","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/how-to-guides/miscellaneous/webaudio","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/07-miscellaneous/05-webaudio.md","tags":[],"version":"v7","sidebarPosition":5,"frontMatter":{},"sidebar":"roku","previous":{"title":"VR","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/how-to-guides/miscellaneous/vr"},"next":{"title":"Clipping","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/how-to-guides/miscellaneous/clipping"}}'),i=t("85893"),a=t("50065");let d={},r="Web Audio",s={},l=[{value:"SDKs",id:"sdks",level:2},{value:"How to use the Web Audio API",id:"how-to-use-the-web-audio-api",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Sample Applications",id:"sample-applications",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function u(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"web-audio",children:"Web Audio"})}),"\n",(0,i.jsxs)(n.p,{children:["THEOplayer provides a ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",children:"Web Audio API"}),", which allows you to do some quite nifty stuff with the player's audio output. If you are unfamiliar with the ideas behind Web Audio API, Mozilla has an excellent intro to the basic ideas you need to know about ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API",children:"here"}),". This guide will help you set up a demo just like the one we have in our ",(0,i.jsx)(n.a,{href:"https://demo.theoplayer.com/web-audio-api",children:"Demo Zone"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To use this API, be sure to have the ",(0,i.jsx)(n.code,{children:"webaudio"})," feature included in your THEOplayer SDK."]}),"\n",(0,i.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No*"})]})})]}),"\n",(0,i.jsx)(n.p,{children:"(*) can be investigated upon request"}),"\n",(0,i.jsx)(n.h2,{id:"how-to-use-the-web-audio-api",children:"How to use the Web Audio API"}),"\n",(0,i.jsxs)(n.p,{children:["The first thing you need is a valid THEOplayer set-up. If you have no experience with setting up our player, we have an excellent ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-217/theoplayer/v7/getting-started/sdks/web/getting-started",children:"getting started guide"}),". In the following sections, we will assume that you have just created a THEOplayer instance and bound it to the variable 'player'."]}),"\n",(0,i.jsx)(n.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,i.jsx)(n.p,{children:"This example explains how you do a basic implementation of the Web Audio API."}),"\n",(0,i.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"A very basic Web Audio graph"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// The very first step in working with Web Audio is to create an AudioContext. This can be achieved as follows:\nvar AudioContext = window.AudioContext || window.webkitAudioContext;\nvar audioCtx = new AudioContext();\n\n// Once you have an AudioContext, you can create an AudioNode which contains the player's audio output:\nvar sourceNode = player.audio.createAudioSourceNode(audioCtx);\n\n// If we stop now, the result is that the player's audio will be piped into the graph, but will not be connected to any outputs,\n// resulting in no sound output from your speakers/headphones.\n// The next step to get it working again would be:\nsourceNode.connect(audioCtx.destination);\n\n//Which will result in the audio being output again.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Playing with the audio gain"})}),"\n",(0,i.jsx)(n.p,{children:"Of course, this is not a very useful use of the Web Audio API, since essentially we are doing nothing with the audio. A first thing we could do is play with the gain, i.e. manipulate the player volume by using the Web Audio API."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var AudioContext = window.AudioContext || window.webkitAudioContext;\nvar audioCtx = new AudioContext();\nvar sourceNode = player.audio.createAudioSourceNode(audioCtx);\nvar gainNode = audioCtx.createGain();\nsourceNode.connect(gainNode);\ngainNode.connect(audioCtx.destination);\n"})}),"\n",(0,i.jsx)(n.p,{children:"This sets up a gain filter on top of the player audio output, which we can manipulate using the gainNode.gain.value property. An example would be that we could set up a callback which monitors mouse movement:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var updatePage = function (e) {\n  gainNode.gain.value = (screen.height - e.screenY) / screen.height;\n};\n\ndocument.onmousemove = updatePage;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The callback will be executed every time the mouse position is updated. The result will be that the gain will be adjusted to be equal to the ratio of the distance of the mouse pointer position from the bottom of the screen (in pixels) and the screen height. So the farther you move the mouse pointer down, the quieter the output of the video will become, and the opposite effect when you move the mouse pointer up."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Playing with stereo panning"})}),"\n",(0,i.jsx)(n.p,{children:"Similarly, we can play with the stereo panning of the player audio output. This can be achieved by playing with the pan.value property of the StereoPanner node."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var AudioContext = window.AudioContext || window.webkitAudioContext;\nvar audioCtx = new AudioContext();\nvar sourceNode = player.audio.createAudioSourceNode(audioCtx);\nvar pannerNode = audioCtx.createStereoPanner();\nsourceNode.connect(pannerNode);\npannerNode.connect(audioCtx.destination);\n\nvar updatePage = function (e) {\n  pannerNode.pan.value = (2 * e.screenX) / screen.width - 1;\n};\n\ndocument.onmousemove = updatePage;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The result is that moving the pointer left and right changes the stereo panning of the player audio, with balanced audio at the exact middle of the screen, pan all the way to the left when the pointer's on the left edge, and pan all the way right when the pointer's on the right edge."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Double audio trouble"})}),"\n",(0,i.jsx)(n.p,{children:"We can also do both things at the same time. The way Web Audio works allows us to pipe the output of one node as input for another node (in most cases). This way, we can combine the two tricks we were doing before into one trick: modifying the volume by moving the mouse pointer up and down, and modifying the panning by moving the mouse left and right. This is achieved by the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var AudioContext = window.AudioContext || window.webkitAudioContext;\nvar audioCtx = new AudioContext();\nvar sourceNode = player.audio.createAudioSourceNode(audioCtx);\nvar gainNode = audioCtx.createGain();\nvar pannerNode = audioCtx.createStereoPanner();\nsourceNode.connect(pannerNode);\npannerNode.connect(gainNode);\ngainNode.connect(audioCtx.destination);\n\nvar updatePage = function (e) {\n  gainNode.gain.value = (screen.height - e.screenY) / screen.height;\n  pannerNode.pan.value = (2 * e.screenX) / screen.width - 1;\n};\n\ndocument.onmousemove = updatePage;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Bringing it all together"})}),"\n",(0,i.jsx)(n.p,{children:"The next step we can take is to create a simple demo where we manipulate the audio of two players simultaneously. Assume that we have two players set up, bound to variables player1 and player2. Then we can set up exactly the same audio pipeline for both players, and reroute their audio to a single output."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var sourceNode1 = player1.audio.createAudioSourceNode(audioCtx);\nvar gainNode1 = audioCtx.createGain();\nvar pannerNode1 = audioCtx.createStereoPanner();\nsourceNode1.connect(pannerNode1);\npannerNode1.connect(gainNode1);\ngainNode1.connect(audioCtx.destination);\n\nvar sourceNode2 = player2.audio.createAudioSourceNode(audioCtx);\nvar gainNode2 = audioCtx.createGain();\nvar pannerNode2 = audioCtx.createStereoPanner();\nsourceNode2.connect(pannerNode2);\npannerNode2.connect(gainNode2);\ngainNode2.connect(audioCtx.destination);\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Inverting the behavior"})}),"\n",(0,i.jsx)(n.p,{children:"And at this point, we can do some more complex tricks. We can actually do the same thing as we did in the previous section, except that we can do the inverse for the second player's audio. That is, we can make moving the mouse pointer up decrease the volume for the second player, and we can invert the panning as well. This can be achieved with the following callback:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var updatePage = function (e) {\n  gainNode1.gain.value = (screen.height - e.screenY) / screen.height;\n  pannerNode1.pan.value = (2 * e.screenX) / screen.width - 1;\n  gainNode2.gain.value = e.screenY / screen.height;\n  pannerNode2.pan.value = 1 - (2 * e.screenX) / screen.width;\n};\n\ndocument.onmousemove = updatePage;\n"})}),"\n",(0,i.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(n.p,{children:"This API is currently not available on the Android (TV) SDK."}),"\n",(0,i.jsx)(n.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(n.p,{children:"This API is currently not available on the iOS (/tvOS) SDK."}),"\n",(0,i.jsx)(n.h2,{id:"sample-applications",children:"Sample Applications"}),"\n",(0,i.jsx)(n.p,{children:"The demo below illustrates the Web Audio API in production."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Demo: ",(0,i.jsx)(n.a,{href:"https://demo.theoplayer.com/web-audio-api",children:"https://demo.theoplayer.com/web-audio-api"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(n.p,{children:"The following remarks can help:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The web Audio API is currently unavailable on all SDKs except the Web SDK."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If your use case would require this feature to work on the Chromecast SDK, let us know and we\u2019ll look into customizing a receiver in order to enable Web Audio on it."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(n.p,{children:"The following resources provide more information:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-217/theoplayer/v7/knowledge-base/playback/basic-guide-web-audio-api",children:"Basic Guide to Web Audio API"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",children:"MDN - Web Audio API"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var o=t(67294);let i={},a=o.createContext(i);function d(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);