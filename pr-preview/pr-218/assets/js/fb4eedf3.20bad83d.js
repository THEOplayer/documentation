"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["90600"],{43502:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>s,metadata:()=>d,assets:()=>l,toc:()=>c,contentTitle:()=>i});var d=JSON.parse('{"id":"how-to-guides/player/how-to-track-player-states","title":"How to track player states","description":"A video player has states. As a developer, you should understand these states,","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/09-player/04-how-to-track-player-states.md","sourceDirName":"how-to-guides/09-player","slug":"/how-to-guides/player/how-to-track-player-states","permalink":"/documentation/pr-preview/pr-218/theoplayer/v6/how-to-guides/player/how-to-track-player-states","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/09-player/04-how-to-track-player-states.md","tags":[],"version":"v6","sidebarPosition":4,"frontMatter":{},"sidebar":"roku","previous":{"title":"How can we track the first play(ing) event?","permalink":"/documentation/pr-preview/pr-218/theoplayer/v6/how-to-guides/player/how-can-we-track-the-first-playing-event"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-218/theoplayer/v6/how-to-guides/texttrack/introduction"}}'),r=n("85893"),a=n("50065");let s={},i="How to track player states",l={},c=[{value:"Implementation",id:"implementation",level:3},{value:"Web SDK",id:"web-sdk",level:4},{value:"Android SDK",id:"android-sdk",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:4},{value:"Roku SDK",id:"roku-sdk",level:4}];function h(e){let t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-track-player-states",children:"How to track player states"})}),"\n",(0,r.jsx)(t.p,{children:'A video player has states. As a developer, you should understand these states,\nas each state grants you access to different data, and might imply a re-render of your UI.\nFor example, if your video player is in the "Paused" state, you want to show a play-button instead of a pause-button.'}),"\n",(0,r.jsx)(t.p,{children:"The objective of this guide is to define some video player states, and how to track the transition between states."}),"\n",(0,r.jsx)(t.p,{children:"Although there's no official list of video player states,\nwe'll define 11 states for learning purposes. These 11 states are visualized in the state diagram below."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Video Player States",src:n(14089).Z+"",title:"Video Player States",width:"878",height:"884"})}),"\n",(0,r.jsx)(t.p,{children:"The table below provides the definitions of these 11 states."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"State"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"A: Empty"}),(0,r.jsx)(t.td,{children:"A state where the player is created, but has no information or data retained on the source which is to be played. The player is idle and not undertaking any interaction with the system."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"B: Initialized"}),(0,r.jsx)(t.td,{children:"A state where the player knows the source which is to be played, but no media data is loaded. The player is idle and not undertaking any interaction with the system."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"C: Playing - HAVE_NOTHING"}),(0,r.jsx)(t.td,{children:"A state where the player wants to start playing a source, but has no media data available. The player is actively loading media data in order to initiate playback."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"D: Paused - HAVE_NOTHING"}),(0,r.jsx)(t.td,{children:"A state where the player wants to fill its buffer without playing, but has no media data available. The player is actively loading media data in order to fill its buffer."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"E: Playing - HAVE_METADATA"}),(0,r.jsx)(t.td,{children:"A state where the player wants to start playing a source, but only metadata is available and the entire buffer is still empty. The player knows which tracks and qualities are available. The player is actively loading media data in order to initiate playback."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"F: Paused - HAVE_METADATA"}),(0,r.jsx)(t.td,{children:"A state where the player wants to fill its buffer without playing, but only metadata is available and the entire buffer is still empty. The player knows which tracks and qualities are available. The player is actively loading media data in order to fill its buffer."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"G: Playing - HAVE_CURRENT_DATA"}),(0,r.jsx)(t.td,{children:"A state where the player wants to start playing a source and has media data in its buffer for the current timestamp, but this data is insufficient to start playback and guarantee a smooth viewer experience. The player is actively loading media data in order to initiate playback."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"H: Paused - HAVE_CURRENT_DATA"}),(0,r.jsx)(t.td,{children:"A state where the player wants to fill its buffer without playing and has media data in the buffer for the current timestamp, but this data is insufficient to start playback and guarantee a smooth viewer experience. The player is actively loading media data in order to fill its buffer."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"I: Playing"}),(0,r.jsx)(t.td,{children:"A state where the player is actively rendering out media data. The current timestamp is progressing at the speed of the current playback rate and media buffer data is being consumed and loaded in parallel. timeupdate events will be dispatched regularly during playback and progress events will be dispatched as additional data is loaded."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"J: Paused"}),(0,r.jsx)(t.td,{children:"A state where the player has sufficient media data in its buffer in order to guarantee a smooth viewer experience when playback is started, but it is in a paused state. The player is not consuming any media data, but might be loading additional media data to grow its buffer in the background."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"K: Error"}),(0,r.jsx)(t.td,{children:"A state where the player has observed a fatal, non recoverable error. The player cannot continue playback and needs to be initialized again in order to restart playback. A player can get into this state from any state other than the Empty-state."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"The table below explains what triggers each of the 26 transitions between states, and what video player events are related."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Transition"}),(0,r.jsx)(t.th,{children:"Triggers"}),(0,r.jsx)(t.th,{children:"Events"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"new THEOplayer.Player"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.source = X"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"sourcechange"}),", ",(0,r.jsx)(t.code,{children:"currentsourcechange"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.play()"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"play"}),", ",(0,r.jsx)(t.code,{children:"loadstart"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.load()"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"loadstart"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.pause()"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pause"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"6"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.play()"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"play"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"7"}),(0,r.jsx)(t.td,{children:"The stream manifest being loaded"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"readystatechange"}),", ",(0,r.jsx)(t.code,{children:"loadedmetadata"}),", ",(0,r.jsx)(t.code,{children:"durationchange"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"8"}),(0,r.jsx)(t.td,{children:"The stream manifest being loaded"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"readystatechange"}),", ",(0,r.jsx)(t.code,{children:"loadedmetadata"}),", ",(0,r.jsx)(t.code,{children:"durationchange"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"9"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.pause()"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pause"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.play()"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"play"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"11"}),(0,r.jsx)(t.td,{children:"Stream media data is loaded"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"readystatechange"}),", ",(0,r.jsx)(t.code,{children:"loadeddata"}),", ",(0,r.jsx)(t.code,{children:"progress"}),", ",(0,r.jsx)(t.code,{children:"canplay"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"12"}),(0,r.jsx)(t.td,{children:"Stream media data is loaded"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"readystatechange"}),", ",(0,r.jsx)(t.code,{children:"loadeddata"}),", ",(0,r.jsx)(t.code,{children:"progress"}),", ",(0,r.jsx)(t.code,{children:"canplay"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"13"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.pause()"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pause"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"14"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.play()"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"play"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"15"}),(0,r.jsx)(t.td,{children:"Sufficient media data is loaded to start playback fluently."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"progress"}),", ",(0,r.jsx)(t.code,{children:"canplaythrough"}),", ",(0,r.jsx)(t.code,{children:"readystatechange"}),", ",(0,r.jsx)(t.code,{children:"playing"}),(0,r.jsx)("br",{}),(0,r.jsxs)(t.em,{children:["A ",(0,r.jsx)(t.code,{children:"seeked"})," event can be dispatched if the entrance of this state was caused by a seek."]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"16"}),(0,r.jsx)(t.td,{children:"Sufficient media data is loaded to start playback fluently."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"canplaythrough"}),", ",(0,r.jsx)(t.code,{children:"readystatechange"}),(0,r.jsx)("br",{}),(0,r.jsxs)(t.em,{children:["A ",(0,r.jsx)(t.code,{children:"seeked"})," event can be dispatched if the entrance of this state was caused by a seek."]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"17"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.pause()"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pause"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"18"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.play()"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"play"}),", ",(0,r.jsx)(t.code,{children:"playing"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"19"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"player.currentTime = X"})," and there is some media data at the target time, but not enough to play fluently."]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"seeking"}),", ",(0,r.jsx)(t.code,{children:"readystatechange"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"20"}),(0,r.jsx)(t.td,{children:"The player buffer is not being filled enough, causing a stall."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"waiting"}),", ",(0,r.jsx)(t.code,{children:"readystatechange"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"21"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"player.currentTime = X"})," and there is no media data at the target time."]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"seeking"}),", ",(0,r.jsx)(t.code,{children:"readystatechange"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"22"}),(0,r.jsx)(t.td,{children:"Playback has ended."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"ended"}),", ",(0,r.jsx)(t.code,{children:"readystatechange"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"23"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"player.currentTime = X"})," and there is some media data at the target time, but not enough to play fluently."]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"seeking"}),", ",(0,r.jsx)(t.code,{children:"readystatechange"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"24"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"player.currentTime = X"})," and there is no media data at the target time."]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"seeking"}),", ",(0,r.jsx)(t.code,{children:"readystatechange"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"25"}),(0,r.jsx)(t.td,{children:"An error occurred."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"error"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"26"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"player.source = null"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"emptied"})})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.p,{children:"The following code samples demonstrate how you track some of the 18 events related to the state transitions across different SDKs."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"sourcechange"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"currentsourcechange"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"play"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"loadstart"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"pause"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"readystatechange"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"loadedmetadata"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"durationchange"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"loadeddata"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"progress"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"canplay"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"canplaythrough"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"playing"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"waiting"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"seeking"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"ended"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"error"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"emptied"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["All 18 events are dispatched by the ",(0,r.jsx)(t.code,{children:"Player"})," interface."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Web SDK: ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/classes/ChromelessPlayer.html",children:"interface"})," and ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html",children:"events"})]}),"\n",(0,r.jsxs)(t.li,{children:["Android SDK: ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/player/Player.html",children:"interface"})," and ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/event/player/PlayerEventTypes.html",children:"events"})]}),"\n",(0,r.jsxs)(t.li,{children:["iOS SDK: ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Classes/THEOplayer.html",children:"interface"})," and ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Structs/PlayerEventTypes.html",children:"events"})]}),"\n",(0,r.jsx)(t.li,{children:"Roku SDK"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The snippet below demonstrates how you can track some of the related events through the THEOplayer Web SDK.\nAll other events can be tracked similarly. You can find the event names in ",(0,r.jsxs)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html",children:["the ",(0,r.jsx)(t.code,{children:"PlayerEventMap"})," API reference"]}),".\nThis approach is valid for all web-based platforms, including Tizen and webOS."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"player.addEventListener('sourcechange', (event) => {\n  console.log(event);\n});\n// ...\nplayer.addEventListener('ended', (event) => {\n  console.log(event);\n});\n"})}),"\n",(0,r.jsx)(t.h4,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The snippet below demonstrates how you can track some of the related events through the THEOplayer Android SDK.\nAll other events can be tracked similarly. You can find the event names in ",(0,r.jsxs)(t.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/event/player/PlayerEventTypes.html",children:["the ",(0,r.jsx)(t.code,{children:"PlayerEventTypes"})," API reference"]}),".\nThis approach is valid for all Android-based platforms, including Android TV and Fire TV."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"player.addEventListener(PlayerEventTypes.SOURCECHANGE, event -> {\n    System.out.println(event);\n});\n// ...\nplayer.addEventListener(PlayerEventTypes.ENDED, event -> {\n    System.out.println(event);\n});\n"})}),"\n",(0,r.jsx)(t.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsxs)(t.p,{children:["The snippet below demonstrates how you can track some of the related events through the THEOplayer iOS SDK.\nAll other events can be tracked similarly. You can find the event names in ",(0,r.jsxs)(t.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Structs/PlayerEventTypes.html",children:["the ",(0,r.jsx)(t.code,{children:"PlayerEventTypes"})," API reference"]}),".\nThis approach is valid for all iOS-based platforms, including iPadOS and tvOS."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"player?.addEventListener(type: PlayerEventTypes.SOURCE_CHANGE, listener: { (event) in\n    print(event)\n})\n// ...\nplayer?.addEventListener(type: PlayerEventTypes.ENDED, listener: { (event) in\n    print(event)\n})\n\n"})}),"\n",(0,r.jsx)(t.h4,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"This subsection is in maintenance. Reach out to our team if you require help."})})]})}function o(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},14089:function(e,t,n){n.d(t,{Z:function(){return d}});let d=n.p+"assets/images/player-video-player-states-4f4f37f92d4b03a2c750ce7fe03d0a5a.png"},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var d=n(67294);let r={},a=d.createContext(r);function s(e){let t=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(a.Provider,{value:t},e.children)}}}]);