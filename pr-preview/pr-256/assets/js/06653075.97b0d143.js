"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["34908"],{70483:function(e,t,r){r.r(t),r.d(t,{default:()=>l,frontMatter:()=>i,metadata:()=>n,assets:()=>s,toc:()=>d,contentTitle:()=>o});var n=JSON.parse('{"id":"how-to-guides/texttrack/how-to-detect-active-text-track-cues","title":"How to detect active text track cues","description":"This article describes how you can use the THEOplayer API to detect the active text track cues.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/10-texttrack/08-how-to-detect-active-text-track-cues.md","sourceDirName":"how-to-guides/10-texttrack","slug":"/how-to-guides/texttrack/how-to-detect-active-text-track-cues","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/how-to-guides/texttrack/how-to-detect-active-text-track-cues","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/10-texttrack/08-how-to-detect-active-text-track-cues.md","tags":[],"version":"v4","sidebarPosition":8,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to programmatically detect text track changes","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/how-to-guides/texttrack/how-to-detect-text-track-changes"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/how-to-guides/ui/introduction"}}'),a=r("85893"),c=r("50065");let i={},o="How to detect active text track cues",s={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Implementation for subtitles and closed captions",id:"implementation-for-subtitles-and-closed-captions",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android SDK",id:"android-sdk",level:3},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:3},{value:"Roku SDK",id:"roku-sdk",level:3},{value:"Implementation for timed metadata",id:"implementation-for-timed-metadata",level:2}];function h(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"how-to-detect-active-text-track-cues",children:"How to detect active text track cues"})}),"\n",(0,a.jsx)(t.p,{children:"This article describes how you can use the THEOplayer API to detect the active text track cues."}),"\n",(0,a.jsxs)(t.p,{children:["The TextTrack API provides this functionality. More specifically, as a developer, you'll subscribe to the ",(0,a.jsx)(t.code,{children:"enter"})," and ",(0,a.jsx)(t.code,{children:"exit"})," events in the TextTrack API, or to the ",(0,a.jsx)(t.code,{children:"cuechange"})," event."]}),"\n",(0,a.jsx)(t.p,{children:"Implementing this functionality can be a use-case for developers who want to build their own UI, and insert and style their subtitles with maximum freedom.\nAlternatively, you may require the access the active cues for analytics purposes, or to render it outside the video player."}),"\n",(0,a.jsx)(t.p,{children:"Another common use-case is to detect the active text track cue of timed metadata. This article also discusses this use-case."}),"\n",(0,a.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,a.jsx)(t.p,{children:"THEOplayer allows you to track text track changes on the following SDKs."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,a.jsx)(t.th,{children:"Roku SDK"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(t.td,{})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"implementation-for-subtitles-and-closed-captions",children:"Implementation for subtitles and closed captions"}),"\n",(0,a.jsxs)(t.p,{children:["The TextTrack API is available across all of our 4 base SDKs. As described in the introduction, to detect which text track cues are active, you want to leverage the ",(0,a.jsx)(t.code,{children:"enter"})," and ",(0,a.jsx)(t.code,{children:"exit"})," events in the ",(0,a.jsx)(t.code,{children:"TextTrack"})," API, or the ",(0,a.jsx)(t.code,{children:"cuechange"})," event."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that this subsection focuses on detecting active cues for subtitles and closed captions.\nGo to the subsection on ",(0,a.jsx)(t.a,{href:"#implementation-for-timed-metadata",children:'"implementation for timed metadata"'})," if you rather want to track timed metadata like ID3, emsg, EXT-X-DATERANGE and EventStream."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#web-sdk",children:"Web SDK"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#android-sdk",children:"Android SDK"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS SDK"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#roku-sdk",children:"Roku SDK"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsx)(t.p,{children:"The implementation of the Web SDK applies to all web-based platforms, including Tizen and webOS."}),"\n",(0,a.jsxs)(t.p,{children:["The Web SDK exposes the TextTrack API through ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/classes/ChromelessPlayer.html#texttracks",children:(0,a.jsx)(t.code,{children:"player.textTracks"})}),". This ",(0,a.jsx)(t.code,{children:"textTracks"})," property is a ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTracksList.html",children:(0,a.jsx)(t.code,{children:"TextTrackList"})})," that inherits from the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackList.html",children:(0,a.jsx)(t.code,{children:"TrackList"})}),". This ",(0,a.jsx)(t.code,{children:"TrackList"})," dispatches the events from the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackListEventMap.html",children:(0,a.jsx)(t.code,{children:"TrackListEventMap"})}),". This ",(0,a.jsx)(t.code,{children:"TrackListEventMap"})," contains the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackListEventMap.html#change",children:(0,a.jsx)(t.code,{children:"addtrack"})})," event, as well as the ",(0,a.jsx)(t.code,{children:"change"})," and ",(0,a.jsx)(t.code,{children:"removetrack"})," event."]}),"\n",(0,a.jsxs)(t.p,{children:["In the callback of your ",(0,a.jsx)(t.code,{children:"addtrack"})," event, you want to track the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackEventMap.html#addcue",children:(0,a.jsx)(t.code,{children:"addcue"})})," event through the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrack.html",children:(0,a.jsx)(t.code,{children:"TextTrack"})})," interface. Then, in the callback of your ",(0,a.jsx)(t.code,{children:"addcue"})," event, you want to track the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackCueEventMap.html#enter",children:(0,a.jsx)(t.code,{children:"enter"})})," and ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackCueEventMap.html#exit",children:(0,a.jsx)(t.code,{children:"exit"})})," events through the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackCue.html",children:(0,a.jsx)(t.code,{children:"TextTrackCue"})})," interface. The ",(0,a.jsx)(t.code,{children:"enter"})," event is dispatched when a cue becomes active and the ",(0,a.jsx)(t.code,{children:"exit"})," event is dispatched when a cue becomes inactive. You can fetch the actual content in the callback of your ",(0,a.jsx)(t.code,{children:"enter"})," event through its ",(0,a.jsx)(t.a,{href:"https://docs.theoplayer.com/api-reference/web/theoplayer.texttrackcue.md#content",children:(0,a.jsx)(t.code,{children:"content"})})," property."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, in the callback of your ",(0,a.jsx)(t.code,{children:"addtrack"})," event, you could track the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackEventMap.html#cuechange",children:(0,a.jsx)(t.code,{children:"cuechange"})})," event through the ",(0,a.jsx)(t.code,{children:"TextTrack"})," interface. Then, in the callback of your ",(0,a.jsx)(t.code,{children:"cuechange"})," event, you want to iterate over the active cues. For each active cue, you could also query its ",(0,a.jsx)(t.code,{children:"content"})," property."]}),"\n",(0,a.jsx)(t.p,{children:"The code below allows you to detect the active text track cues."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"player.textTracks.addEventListener('addtrack', function (e1) {\n  const track = e1.track;\n  track.addEventListener('addcue', function (e2) {\n    const cue = e2.cue;\n    cue.addEventListener('enter', function (e3) {\n      console.log(e3, e3.cue.content);\n    });\n    cue.addEventListener('exit', console.log);\n  });\n  track.addEventListener('cuechange', function (e2) {\n    const cues = e2.track.activeCues;\n    for (let i = 0; i < cues.length; i++) {\n      console.log('cuechange active cue', i, cues[i]);\n    }\n  });\n});\n// ...\n// player.source = ...\n"})}),"\n",(0,a.jsx)(t.p,{children:"You want to invoke these event handlers before you configure your stream, because your video player might have already dispatched the event before you were able to subscribe to it."}),"\n",(0,a.jsx)(t.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,a.jsx)(t.p,{children:"The implementation of the Android SDK applies to all Android-based platforms, including Android TV and Fire TV."}),"\n",(0,a.jsxs)(t.p,{children:["The Android SDK exposes the TextTrack API through ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/Player.html#getTextTracks",children:(0,a.jsx)(t.code,{children:"player.getTextTracks()"})}),". This ",(0,a.jsx)(t.code,{children:"getTextTracks()"})," method returns a ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/texttrack/TextTrackList.html",children:(0,a.jsx)(t.code,{children:"TextTrackList"})})," that inherits from the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/TrackList.html",children:(0,a.jsx)(t.code,{children:"TrackList"})}),". This ",(0,a.jsx)(t.code,{children:"TrackList"})," dispatches the events from the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/event/track/texttrack/list/TextTrackListEventTypes.html",children:(0,a.jsx)(t.code,{children:"TextTrackListEventTypes"})}),". The ",(0,a.jsx)(t.code,{children:"TextTrackListEventTypes"})," contains the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/event/track/texttrack/list/TextTrackListEventTypes.html#ADDTRACK",children:(0,a.jsx)(t.code,{children:"ADDTRACK"})})," event, as well as the ",(0,a.jsx)(t.code,{children:"TRACKLISTCHANGE"})," and ",(0,a.jsx)(t.code,{children:"REMOVETRACK"})," event."]}),"\n",(0,a.jsxs)(t.p,{children:["In the callback of your ",(0,a.jsx)(t.code,{children:"ADDTRACK"})," event, you want to track the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/event/track/texttrack/TextTrackEventTypes.html#ADDCUE",children:(0,a.jsx)(t.code,{children:"ADDCUE"})})," event through the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/texttrack/TextTrack.html",children:(0,a.jsx)(t.code,{children:"TextTrack"})})," interface. Then, in the callback of your ",(0,a.jsx)(t.code,{children:"ADDCUE"})," event, you want to track the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/event/track/texttrack/texttrackcue/TextTrackCueEventTypes.html#ENTER",children:(0,a.jsx)(t.code,{children:"ENTER"})})," and ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/event/track/texttrack/texttrackcue/TextTrackCueEventTypes.html#EXIT",children:(0,a.jsx)(t.code,{children:"EXIT"})})," events through the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/texttrack/cue/TextTrackCue.html",children:(0,a.jsx)(t.code,{children:"TextTrackCue"})})," interface. The ",(0,a.jsx)(t.code,{children:"ENTER"})," event is dispatched when a cue becomes active and the ",(0,a.jsx)(t.code,{children:"EXIT"})," event is dispatched when a cue becomes inactive. You can fetch the actual content in the callback of your ",(0,a.jsx)(t.code,{children:"ENTER"})," event through its ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/track/texttrack/cue/TextTrackCue.html#getContent--",children:(0,a.jsx)(t.code,{children:"getContent()"})})," method."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, in the callback of your ",(0,a.jsx)(t.code,{children:"ADDTRACK"})," event, you could track the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/event/track/texttrack/TextTrackEventTypes.html#CUECHANGE",children:(0,a.jsx)(t.code,{children:"CUECHANGE"})})," event through the ",(0,a.jsx)(t.code,{children:"TextTrack"})," interface. Then, in the callback of your ",(0,a.jsx)(t.code,{children:"CUECHANGE"})," event, you want to iterate over the active cues. For each active cue, you could also query its ",(0,a.jsx)(t.code,{children:"content"})," property."]}),"\n",(0,a.jsx)(t.p,{children:"The code below allows you to detect the active text track cues."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'player.getTextTracks().addEventListener(TextTrackListEventTypes.ADDTRACK, e1 -> {\n    TextTrack track = e1.getTrack();\n    track.addEventListener(TextTrackEventTypes.ADDCUE, e2 -> {\n        TextTrackCue cue = e2.getCue();\n        cue.addEventListener(TextTrackCueEventTypes.ENTER, e3 -> {\n            System.out.println(e3 + " " + e3.getCue().getContent());\n        });\n        cue.addEventListener(TextTrackCueEventTypes.EXIT, e3 -> {\n            System.out.println(e3);\n        });\n    });\n    track.addEventListener(TextTrackEventTypes.CUECHANGE, e2 -> {\n        TextTrackCueList cues = e2.getTextTrack().getActiveCues();\n        for (int i = 0; i < cues.length(); i++) {\n            System.out.println("cuechange active cue " + i + " " + cues.getItem(i));\n        }\n    });\n});\n// ...\n// player.setSource(...)\n'})}),"\n",(0,a.jsx)(t.p,{children:"You want to invoke these event handlers before you configure your stream, because your video player might have already dispatched the event before you were able to subscribe to it."}),"\n",(0,a.jsx)(t.h3,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsx)(t.p,{children:"The implementation of the iOS SDK applies to all iOS-based platforms, including iPadOS and tvOS."}),"\n",(0,a.jsxs)(t.p,{children:["The iOS SDK exposes the TrackTrack API through ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Classes/THEOplayer.html#/s:13THEOplayerSDK0A0C10textTracksAA13TextTrackList_pvp",children:(0,a.jsx)(t.code,{children:"player.textTracks"})}),". This ",(0,a.jsx)(t.code,{children:"textTracks"})," property is a ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/TextTrackList.html",children:(0,a.jsx)(t.code,{children:"TextTrackList"})}),". This ",(0,a.jsx)(t.code,{children:"TextTrackList"})," dispatches the events from the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Structs/TextTrackListEventTypes.html",children:(0,a.jsx)(t.code,{children:"TextTrackListEventTypes"})}),". The ",(0,a.jsx)(t.code,{children:"TextTrackListEventTypes"})," contains the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Structs/TextTrackListEventTypes.html#/s:13THEOplayerSDK23TextTrackListEventTypesV9ADD_TRACKAA0F4TypeCyAA03AdddF0CGvpZ",children:(0,a.jsx)(t.code,{children:"ADD_TRACK"})})," event, as well as the ",(0,a.jsx)(t.code,{children:"CHANGE"})," and ",(0,a.jsx)(t.code,{children:"REMOVE_TRACK"})," event."]}),"\n",(0,a.jsxs)(t.p,{children:["In the callback of your ",(0,a.jsx)(t.code,{children:"ADD_TRACK"})," event, you want to track the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Structs/TextTrackEventTypes.html#/s:13THEOplayerSDK19TextTrackEventTypesV7ADD_CUEAA0E4TypeCyAA06AddCueE0CGvpZ",children:(0,a.jsx)(t.code,{children:"ADD_CUE"})})," event through the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/TextTrack.html",children:(0,a.jsx)(t.code,{children:"TextTrack"})})," interface. Then, in the callback of your ",(0,a.jsx)(t.code,{children:"ADD_CUE"})," event, you want to track the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Structs/TextTrackCueEventTypes.html#/s:13THEOplayerSDK22TextTrackCueEventTypesV5ENTERAA0F4TypeCyAA0e5EnterF0CGvpZ",children:(0,a.jsx)(t.code,{children:"ENTER"})})," and ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Structs/TextTrackCueEventTypes.html#/s:13THEOplayerSDK22TextTrackCueEventTypesV4EXITAA0F4TypeCyAA0e4ExitF0CGvpZ",children:(0,a.jsx)(t.code,{children:"EXIT"})})," events through the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/TextTrackCue.html",children:(0,a.jsx)(t.code,{children:"TextTrackCue"})})," interface. The ",(0,a.jsx)(t.code,{children:"ENTER"})," event is dispatched when a cue becomes active and the ",(0,a.jsx)(t.code,{children:"EXIT"})," event is dispatched when a cue becomes inactive.\nYou can fetch the actual content in the callback of your ",(0,a.jsx)(t.code,{children:"ENTER"})," event through its ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/TextTrackCue.html#/s:13THEOplayerSDK12TextTrackCueP7contentypSgvp",children:(0,a.jsx)(t.code,{children:"content"})})," property."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, in the callback of your ",(0,a.jsx)(t.code,{children:"ADD_TRACK"})," event, you could track the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Structs/TextTrackEventTypes.html#/s:13THEOplayerSDK19TextTrackEventTypesV10CUE_CHANGEAA0E4TypeCyAA09CueChangeE0CGvpZ",children:(0,a.jsx)(t.code,{children:"CUE_CHANGE"})})," event through the ",(0,a.jsx)(t.code,{children:"TextTrack"})," interface. Then, in the callback of your ",(0,a.jsx)(t.code,{children:"CUE_CHANGE"})," event, you want to iterate over the active cues. For each active cue, you could also query its ",(0,a.jsx)(t.code,{children:"content"})," property."]}),"\n",(0,a.jsx)(t.p,{children:"The code below allows you to detect the active text track cues."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'player.textTracks.addEventListener(type: TextTrackListEventTypes.ADD_TRACK) { (e1) in\n    var track : TextTrack = e1.track as! TextTrack\n    track.addEventListener(type: TextTrackEventTypes.ADD_CUE) { (e2) in\n        let cue = e2.cue\n        cue.addEventListener(type: TextTrackCueEventTypes.ENTER) { (e3) in\n            print(e3, e3.cue.content)\n        }\n        cue.addEventListener(type: TextTrackCueEventTypes.EXIT) { (e3) in\n            print(e3)\n        }\n    }\n    track.addEventListener(type: TextTrackEventTypes.CUE_CHANGE) { (e2) in\n        let textTrack : TextTrack = e2.track as! TextTrack\n        let cues = textTrack.activeCues\n        cues.forEach { (cue) in\n            print("cuechange active cue", cue)\n        }\n    }\n}\n// ...\n// player.source = ...\n'})}),"\n",(0,a.jsx)(t.p,{children:"You want to invoke these event handlers before you configure your stream, because your video player might have already dispatched the event before you were able to subscribe to it."}),"\n",(0,a.jsx)(t.h3,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"This subsection is in maintenance. Reach out to our team if you need help."})}),"\n",(0,a.jsx)(t.h2,{id:"implementation-for-timed-metadata",children:"Implementation for timed metadata"}),"\n",(0,a.jsx)(t.p,{children:"The implementation for timed metadata is identical to the one for subtitles and closed captions, except for three things."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You don't necessarily use the ",(0,a.jsx)(t.code,{children:"enter"})," event.\nSome types of timed metadata, for example ID3 cues, only related to one specific moment, and those types only have an ",(0,a.jsx)(t.code,{children:"exit"})," trigger."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You might need to set the ",(0,a.jsx)(t.code,{children:"mode"})," of the relevant text track to ",(0,a.jsx)(t.code,{children:"hidden"}),", as documented in ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/theoplayer/v4/how-to-guides/texttrack/how-to-programmatically-disable-text-tracks",children:'"How to programmatically enable or disable text tracks"'}),".\nSome types of timed metadata, for example EXT-X-DATERANGE and EventStream, are ",(0,a.jsx)(t.code,{children:"disabled"})," by default. You should add a condition to your ",(0,a.jsx)(t.code,{children:"addtrack"})," callback to decide whether you want to set your track to ",(0,a.jsx)(t.code,{children:"hidden"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You should set ",(0,a.jsx)(t.code,{children:"hlsDateRange"})," to ",(0,a.jsx)(t.code,{children:"true"})," if you want to detect EXT-X-DATERANGE tags in an HLS stream in your PlayerConfiguration or stream configuration. Refer to the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerConfiguration.html#hlsDateRange",children:"Web"}),", ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/THEOplayerConfig.Builder.html#hlsDateRange(boolean)",children:"Android"})," or ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Classes/THEOplayerConfiguration.html",children:"iOS"})," documentation for more info."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The article on ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/theoplayer/v4/how-to-guides/texttrack/how-to-track-id3-cues-tags",children:'"how to track id3 cues / tags"'})," might be useful to learn more about detecting ID3 tags specifically."]})]})}function l(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return i}});var n=r(67294);let a={},c=n.createContext(a);function i(e){let t=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);