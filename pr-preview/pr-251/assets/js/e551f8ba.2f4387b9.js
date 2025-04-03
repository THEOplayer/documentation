"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["86179"],{41787:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>r,metadata:()=>o,assets:()=>s,toc:()=>u,contentTitle:()=>d});var o=JSON.parse('{"id":"knowledge-base/playback/basic-guide-web-audio-api","title":"Basic guide to Web Audio API","description":"THEOplayer provides a Web Audio API, which allows you to do some quite nifty stuff with the player\'s audio output. If you are unfamiliar with the ideas behind Web Audio API, Mozilla has an excellent intro to the basic ideas you need to know about here. This guide will help you set up a demo just like the one we have in our Demo Zone.","source":"@site/theoplayer_versioned_docs/version-v6/knowledge-base/03-playback/05-basic-guide-web-audio-api.md","sourceDirName":"knowledge-base/03-playback","slug":"/knowledge-base/playback/basic-guide-web-audio-api","permalink":"/documentation/pr-preview/pr-251/theoplayer/v6/knowledge-base/playback/basic-guide-web-audio-api","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/knowledge-base/03-playback/05-basic-guide-web-audio-api.md","tags":[],"version":"v6","sidebarPosition":5,"frontMatter":{},"sidebar":"roku","previous":{"title":"Program Date Time","permalink":"/documentation/pr-preview/pr-251/theoplayer/v6/knowledge-base/playback/program-date-time"},"next":{"title":"Video Clipping","permalink":"/documentation/pr-preview/pr-251/theoplayer/v6/knowledge-base/playback/video-clipping"}}'),a=t("85893"),i=t("50065");let r={},d="Basic guide to Web Audio API",s={},u=[{value:"Getting started with THEOplayer",id:"getting-started-with-theoplayer",level:2},{value:"A very basic Web Audio graph",id:"a-very-basic-web-audio-graph",level:2},{value:"Playing with the audio gain",id:"playing-with-the-audio-gain",level:2},{value:"Double audio trouble",id:"double-audio-trouble",level:2},{value:"Bringing it all together",id:"bringing-it-all-together",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"basic-guide-to-web-audio-api",children:"Basic guide to Web Audio API"})}),"\n",(0,a.jsxs)(n.p,{children:["THEOplayer provides a ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",children:"Web Audio API"}),", which allows you to do some quite nifty stuff with the player's audio output. If you are unfamiliar with the ideas behind Web Audio API, Mozilla has an excellent intro to the basic ideas you need to know about ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API",children:"here"}),". This guide will help you set up a demo just like the one we have in our ",(0,a.jsx)(n.a,{href:"https://demo.theoplayer.com/web-audio-api",children:"Demo Zone"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"This guide expects that you have a THEOplayer license. Be sure to have THEOplayer version 2.19.4 or higher."}),"\n",(0,a.jsx)(n.h2,{id:"getting-started-with-theoplayer",children:"Getting started with THEOplayer"}),"\n",(0,a.jsxs)(n.p,{children:["The first thing you need is a valid THEOplayer set-up. If you have no experience with setting up our player, we have an excellent ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-251/theoplayer/v6/getting-started/sdks/web/getting-started",children:"getting started guide"}),". In the following sections, we will assume that you have just created a THEOplayer instance and bound it to the variable 'player'."]}),"\n",(0,a.jsx)(n.h2,{id:"a-very-basic-web-audio-graph",children:"A very basic Web Audio graph"}),"\n",(0,a.jsx)(n.p,{children:"The very first step in working with Web Audio is to create an AudioContext. This can be achieved as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var AudioContext = window.AudioContext || window.webkitAudioContext;\nvar audioCtx = new AudioContext();\n"})}),"\n",(0,a.jsx)(n.p,{children:"Once you have an AudioContext, you can create an AudioNode which contains the player's audio output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var sourceNode = player.audio.createAudioSourceNode(audioCtx);\n"})}),"\n",(0,a.jsx)(n.p,{children:"If we stop now, the result is that the player's audio will be piped into the graph, but will not be connected to any outputs, resulting in no sound output from your speakers/headphones. The next step to get it working again would be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"sourceNode.connect(audioCtx.destination);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Which will result in the audio being output again."}),"\n",(0,a.jsx)(n.h2,{id:"playing-with-the-audio-gain",children:"Playing with the audio gain"}),"\n",(0,a.jsx)(n.p,{children:"Of course, this is not a very useful use of the Web Audio API, since essentially we are doing nothing with the audio. A first thing we could do is play with the gain, i.e. manipulate the player volume by using the Web Audio API."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var AudioContext = window.AudioContext || window.webkitAudioContext;\nvar audioCtx = new AudioContext();\nvar sourceNode = player.audio.createAudioSourceNode(audioCtx);\nvar gainNode = audioCtx.createGain();\nsourceNode.connect(gainNode);\ngainNode.connect(audioCtx.destination);\n"})}),"\n",(0,a.jsx)(n.p,{children:"This sets up a gain filter on top of the player audio output, which we can manipulate using the gainNode.gain.value property. An example would be that we could set up a callback which monitors mouse movement:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var updatePage = function (e) {\n  gainNode.gain.value = (screen.height - e.screenY) / screen.height;\n};\n\ndocument.onmousemove = updatePage;\n"})}),"\n",(0,a.jsx)(n.p,{children:"The callback will be executed every time the mouse position is updated. The result will be that the gain will be adjusted to be equal to the ratio of the distance of the mouse pointer position from the bottom of the screen (in pixels) and the screen height. So the farther you move the mouse pointer down, the quieter the output of the video will become, and the opposite effect when you move the mouse pointer up."}),"\n",(0,a.jsx)(n.p,{children:"Playing with stereo panning"}),"\n",(0,a.jsx)(n.p,{children:"Similarly, we can play with the stereo panning of the player audio output. This can be achieved by playing with the pan.value property of the StereoPanner node."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var AudioContext = window.AudioContext || window.webkitAudioContext;\nvar audioCtx = new AudioContext();\nvar sourceNode = player.audio.createAudioSourceNode(audioCtx);\nvar pannerNode = audioCtx.createStereoPanner();\nsourceNode.connect(pannerNode);\npannerNode.connect(audioCtx.destination);\n\nvar updatePage = function (e) {\n  pannerNode.pan.value = (2 * e.screenX) / screen.width - 1;\n};\n\ndocument.onmousemove = updatePage;\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result is that moving the pointer left and right changes the stereo panning of the player audio, with balanced audio at the exact middle of the screen, pan all the way to the left when the pointer's on the left edge, and pan all the way right when the pointer's on the right edge."}),"\n",(0,a.jsx)(n.h2,{id:"double-audio-trouble",children:"Double audio trouble"}),"\n",(0,a.jsx)(n.p,{children:"We can also do both things at the same time. The way Web Audio works allows us to pipe the output of one node as input for another node (in most cases). This way, we can combine the two tricks we were doing before into one trick: modifying the volume by moving the mouse pointer up and down, and modifying the panning by moving the mouse left and right. This is achieved by the following code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var AudioContext = window.AudioContext || window.webkitAudioContext;\nvar audioCtx = new AudioContext();\nvar sourceNode = player.audio.createAudioSourceNode(audioCtx);\nvar gainNode = audioCtx.createGain();\nvar pannerNode = audioCtx.createStereoPanner();\nsourceNode.connect(pannerNode);\npannerNode.connect(gainNode);\ngainNode.connect(audioCtx.destination);\n\nvar updatePage = function (e) {\n  gainNode.gain.value = (screen.height - e.screenY) / screen.height;\n  pannerNode.pan.value = (2 * e.screenX) / screen.width - 1;\n};\n\ndocument.onmousemove = updatePage;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"bringing-it-all-together",children:"Bringing it all together"}),"\n",(0,a.jsx)(n.p,{children:"The next step we can take is to create a simple demo where we manipulate the audio of two players simultaneously. Assume that we have two players set up, bound to variables player1 and player2. Then we can set up exactly the same audio pipeline for both players, and reroute their audio to a single output."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var sourceNode1 = player1.audio.createAudioSourceNode(audioCtx);\nvar gainNode1 = audioCtx.createGain();\nvar pannerNode1 = audioCtx.createStereoPanner();\nsourceNode1.connect(pannerNode1);\npannerNode1.connect(gainNode1);\ngainNode1.connect(audioCtx.destination);\n\nvar sourceNode2 = player2.audio.createAudioSourceNode(audioCtx);\nvar gainNode2 = audioCtx.createGain();\nvar pannerNode2 = audioCtx.createStereoPanner();\nsourceNode2.connect(pannerNode2);\npannerNode2.connect(gainNode2);\ngainNode2.connect(audioCtx.destination);\n"})}),"\n",(0,a.jsx)(n.p,{children:"And at this point, we can do some more complex tricks. We can actually do the same thing as we did in the previous section, except that we can do the inverse for the second player's audio. That is, we can make moving the mouse pointer up decrease the volume for the second player, and we can invert the panning as well. This can be achieved with the following callback:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var updatePage = function (e) {\n  gainNode1.gain.value = (screen.height - e.screenY) / screen.height;\n  pannerNode1.pan.value = (2 * e.screenX) / screen.width - 1;\n  gainNode2.gain.value = e.screenY / screen.height;\n  pannerNode2.pan.value = 1 - (2 * e.screenX) / screen.width;\n};\n\ndocument.onmousemove = updatePage;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Try it out!"})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var o=t(67294);let a={},i=o.createContext(a);function r(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);