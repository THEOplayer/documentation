"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["67111"],{47883:function(e,r,a){a.r(r),a.d(r,{default:()=>p,frontMatter:()=>i,metadata:()=>t,assets:()=>s,toc:()=>c,contentTitle:()=>h});var t=JSON.parse('{"id":"how-to-guides/player/introduction","title":"Introduction","description":"The Player API is the top-level API. This API exposes:","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/09-player/00-introduction.md","sourceDirName":"how-to-guides/09-player","slug":"/how-to-guides/player/introduction","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/how-to-guides/player/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/09-player/00-introduction.md","tags":[],"version":"v4","sidebarPosition":0,"frontMatter":{},"sidebar":"roku","previous":{"title":"Android Network Request/Response Interceptor","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/how-to-guides/network/android-network-interceptor"},"next":{"title":"How do you know when a stream or an advertisement is playing?","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/how-to-guides/player/how-do-you-know-when-a-stream-or-ad-is-playing"}}'),n=a("85893"),d=a("50065");let i={},h="Introduction",s={},c=[{value:"Events",id:"events",level:2}];function l(e){let r={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,n.jsx)(r.p,{children:"The Player API is the top-level API. This API exposes:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"basic functions to manipulate video playback, such as start and pause;"}),"\n",(0,n.jsx)(r.li,{children:"properties to check states and values, such as the playhead position;"}),"\n",(0,n.jsx)(r.li,{children:"events to track changes."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"The list below overviews how-to articles related to the Player API."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v4/how-to-guides/player/how-do-you-know-when-a-stream-or-ad-is-playing",children:"How do you know when a stream or an advertisement is playing?"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v4/how-to-guides/player/how-to-measure-time-to-first-frame",children:"How to measure time-to-first-frame"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v4/how-to-guides/player/how-can-we-track-the-first-playing-event",children:"How can we track the first play(ing) event?"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v4/how-to-guides/player/how-to-track-player-states",children:"How to track player states"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"events",children:"Events"}),"\n",(0,n.jsxs)(r.p,{children:["As a developer, you can programmatically attach event listeners to different APIs.\nEvent listeners are often used to ",(0,n.jsx)(r.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v4/how-to-guides/ui/how-to-build-chromeless-ui",children:"implement a custom UI"})," or\nto ",(0,n.jsx)(r.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v4/how-to-guides/analytics/custom-analytics-integration",children:"implement a custom analytics integration"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"The THEOplayer API exposes many events across different interfaces, as can be seen in the graphic below.\nFurthermore, most events exist in all SDKs (Web, iOS-based, Android-based and Roku)."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"THEOplayer API Interfaces and Events",src:a(52878).Z+"",title:"THEOplayer API Interfaces and Events",width:"768",height:"713"})}),"\n",(0,n.jsx)(r.p,{children:"The table below gives an overview of a subset of the available events per interface in the THEOplayer Web SDK."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Interface"}),(0,n.jsx)(r.th,{children:"Event"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html",children:"Player"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#canplay",children:"canplay"})}),(0,n.jsx)(r.td,{children:"Fired when the player can resume playback of the media data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#canplaythrough",children:"canplaythrough"})}),(0,n.jsx)(r.td,{children:"Fired when the player can resume playback of the media data and buffering is unlikely."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#contentprotectionerror",children:"contentprotectionerror"})}),(0,n.jsx)(r.td,{children:"Fired when an error related to content protection occurs."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#contentprotectionsuccess",children:"contentprotectionsuccess"})}),(0,n.jsx)(r.td,{children:"Fired when the key is usable for decryption."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#currentsourcechange",children:"currentsourcechange"})}),(0,n.jsx)(r.td,{children:"Fired when the current source, which is chosen from ChromelessPlayer.source.sources, changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#destroy",children:"destroy"})}),(0,n.jsx)(r.td,{children:"Fired when the the player is destroyed."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#dimensionchange",children:"dimensionchange"})}),(0,n.jsx)(r.td,{children:"Fired when the dimensions of the HTML element changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#durationchange",children:"durationchange"})}),(0,n.jsx)(r.td,{children:"Fired when ChromelessPlayer.duration changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#emptied",children:"emptied"})}),(0,n.jsx)(r.td,{children:"Fired when the player's source is cleared."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#encrypted",children:"encrypted"})}),(0,n.jsx)(r.td,{children:"Fired when the player encounters key system initialization data in the media data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#ended",children:"ended"})}),(0,n.jsx)(r.td,{children:"Fired when playback has stopped because the end of the media resource was reached."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#error",children:"error"})}),(0,n.jsx)(r.td,{children:"Fired when an error occurs."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#loadeddata",children:"loadeddata"})}),(0,n.jsx)(r.td,{children:"Fired when the player can render the media data at the current playback position for the first time."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#loadedmetadata",children:"loadedmetadata"})}),(0,n.jsx)(r.td,{children:"Fired when the player determines the duration and dimensions of the media resource."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#loadstart",children:"loadstart"})}),(0,n.jsx)(r.td,{children:"Fired when the player starts loading the manifest."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#manifestupdate",children:"manifestupdate"})}),(0,n.jsx)(r.td,{children:"Fired when the manifest is updated."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#pause",children:"pause"})}),(0,n.jsx)(r.td,{children:"Fired when ChromelessPlayer.paused changes to true."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#play",children:"play"})}),(0,n.jsx)(r.td,{children:"Fired when ChromelessPlayer.paused changes to false."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#playing",children:"playing"})}),(0,n.jsx)(r.td,{children:"Fired when playback is ready to start after having been paused or delayed due to lack of media data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#progress",children:"progress"})}),(0,n.jsx)(r.td,{children:"Fired when the player loaded media data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#ratechange",children:"ratechange"})}),(0,n.jsx)(r.td,{children:"Fired when ChromelessPlayer.playbackRate changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#readystatechange",children:"readystatechange"})}),(0,n.jsx)(r.td,{children:"Fired when ChromelessPlayer.readyState changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#representationchange",children:"representationchange"})}),(0,n.jsx)(r.td,{children:"Fired when the current representation changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#resize",children:"resize"})}),(0,n.jsx)(r.td,{children:"Fired when either ChromelessPlayer.videoWidth or ChromelessPlayer.videoHeight changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#seeked",children:"seeked"})}),(0,n.jsx)(r.td,{children:"Fired when ChromelessPlayer.seeking changes to false after the current playback position was changed."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#seeking",children:"seeking"})}),(0,n.jsx)(r.td,{children:"Fired when ChromelessPlayer.seeking changes to true, and the player has started seeking to a new position."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#segmentnotfound",children:"segmentnotfound"})}),(0,n.jsx)(r.td,{children:"Fired when a segment can not be found."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#sourcechange",children:"sourcechange"})}),(0,n.jsx)(r.td,{children:"Fired when ChromelessPlayer.source changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#timeupdate",children:"timeupdate"})}),(0,n.jsx)(r.td,{children:"Fired when the current playback position changed as part of normal playback or in an especially interesting way, for example discontinuously."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#volumechange",children:"volumechange"})}),(0,n.jsx)(r.td,{children:"Fired when ChromelessPlayer.volume changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerEventMap.html#waiting",children:"waiting"})}),(0,n.jsx)(r.td,{children:"Fired when playback has stopped because the next frame is not available, but the player expects that frame to become available in due course."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/classes/ChromelessPlayer.html#currenttime",children:"currentTime"})}),(0,n.jsx)(r.td,{children:"The current playback position of the media, in seconds."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/classes/ChromelessPlayer.html#currentprogramdatetime",children:"currentProgramDateTime"})}),(0,n.jsx)(r.td,{children:"The current playback position of the media, as a timestamp."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/classes/ChromelessPlayer.html#muted",children:"muted"})}),(0,n.jsx)(r.td,{children:"Whether audio is muted."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Player"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/classes/ChromelessPlayer.html",children:"..."})}),(0,n.jsx)(r.td,{children:"..."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html",children:"Ads (Client-Side)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#adbegin",children:"adbegin"})}),(0,n.jsx)(r.td,{children:"Fired when an ad begins."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#adbreakbegin",children:"adbreakbegin"})}),(0,n.jsx)(r.td,{children:"Fired when an ad break begins."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#adbreakchange",children:"adbreakchange"})}),(0,n.jsx)(r.td,{children:"Fired when an ad break changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#adbreakend",children:"adbreakend"})}),(0,n.jsx)(r.td,{children:"Fired when an ad break ends."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#adbuffering",children:"adbuffering"})}),(0,n.jsx)(r.td,{children:"Fired when the ad has stalled playback to buffer."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#addad",children:"addad"})}),(0,n.jsx)(r.td,{children:"Fired when an ad is added."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#addadbreak",children:"addadbreak"})}),(0,n.jsx)(r.td,{children:"Fired when an ad break is added."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#adend",children:"adend"})}),(0,n.jsx)(r.td,{children:"Fired when an ad ends."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#aderror",children:"aderror"})}),(0,n.jsx)(r.td,{children:"Fired when an ad errors."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#adfirstquartile",children:"adfirstquartile"})}),(0,n.jsx)(r.td,{children:"Fired when an ad reaches the first quartile."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#adimpression",children:"adimpression"})}),(0,n.jsx)(r.td,{children:"Fired when an ad counts as an impression."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#adloaded",children:"adloaded"})}),(0,n.jsx)(r.td,{children:"Fired when an ad is loaded."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#admetadata",children:"admetadata"})}),(0,n.jsx)(r.td,{children:"Fired when an ads list is loaded."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#admidpoint",children:"admidpoint"})}),(0,n.jsx)(r.td,{children:"Fired when an ad reaches the mid point."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#adskip",children:"adskip"})}),(0,n.jsx)(r.td,{children:"Fired when an ad is skipped."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#adthirdquartile",children:"adthirdquartile"})}),(0,n.jsx)(r.td,{children:"Fired when an ad reaches the third quartile."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#removeadbreak",children:"removeadbreak"})}),(0,n.jsx)(r.td,{children:"Fired when an ad break is removed."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#updatead",children:"updatead"})}),(0,n.jsx)(r.td,{children:"Fired when an ad is updated."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ads (Client-Side)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdsEventMap.html#updateadbreak",children:"updateadbreak"})}),(0,n.jsx)(r.td,{children:"Fired when an AdBreak is updated."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VendorCastEventMap.html",children:"Vendor Cast"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VendorCastEventMap.html#statechange",children:"statechange"})}),(0,n.jsx)(r.td,{children:"Fired when the state changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/ChromecastEventMap.html",children:"Chromecast"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/ChromecastEventMap.html#error",children:"error"})}),(0,n.jsx)(r.td,{children:"Fired when an error occurs while casting or trying to cast."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackListEventMap.html",children:"Track List"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackListEventMap.html#addtrack",children:"addtrack"})}),(0,n.jsx)(r.td,{children:"Fired when a track is added."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Track List"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackListEventMap.html#change",children:"change"})}),(0,n.jsx)(r.td,{children:"Fired when a track is activated or deactivated."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Track List"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackListEventMap.html#removetrack",children:"removetrack"})}),(0,n.jsx)(r.td,{children:"Fired when a track is removed."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackEventMap.html",children:"Track"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackEventMap.html#change",children:"change"})}),(0,n.jsx)(r.td,{children:"Fired when a media track's enabled or a text track's changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Track"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TrackEventMap.html#update",children:"update"})}),(0,n.jsx)(r.td,{children:"Fired when the track updates."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/MediaTrackEventMap.html",children:"Media Track"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/MediaTrackEventMap.html#activequalitychanged",children:"activequalitychanged"})}),(0,n.jsx)(r.td,{children:"Fired when the media track's active quality changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Media Track"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/MediaTrackEventMap.html#qualityunavailable",children:"qualityunavailable"})}),(0,n.jsx)(r.td,{children:"Fired when a quality of the track becomes unavailable."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Media Track"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/MediaTrackEventMap.html#targetqualitychanged",children:"targetqualitychanged"})}),(0,n.jsx)(r.td,{children:"Fired when the media track's target quality changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackEventMap.html",children:"Text Track"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackEventMap.html#addcue",children:"addcue"})}),(0,n.jsx)(r.td,{children:"Fired when a cue is added to the track."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Text Track"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackEventMap.html#cuechange",children:"cuechange"})}),(0,n.jsx)(r.td,{children:"Fired when a cue of the track changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Text Track"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackEventMap.html#entercue",children:"entercue"})}),(0,n.jsx)(r.td,{children:"Fired when a cue of the track enters."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Text Track"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackEventMap.html#error",children:"error"})}),(0,n.jsx)(r.td,{children:"Fired when an error occurred while loading or parsing the track."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Text Track"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackEventMap.html#exitcue",children:"exitcue"})}),(0,n.jsx)(r.td,{children:"Fired when a cue of the track exits."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Text Track"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackEventMap.html#readystatechange",children:"readystatechange"})}),(0,n.jsx)(r.td,{children:"Fired when the text track's changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Text Track"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackEventMap.html#removecue",children:"removecue"})}),(0,n.jsx)(r.td,{children:"Fired when a cue of the track is removed."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Text Track"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackEventMap.html#typechange",children:"typechange"})}),(0,n.jsx)(r.td,{children:"Fired when the text track's changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackCueEventMap.html",children:"Text Track Cue"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackCueEventMap.html#enter",children:"enter"})}),(0,n.jsx)(r.td,{children:"Fired when the cue is entered."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Text Track Cue"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackCueEventMap.html#exit",children:"exit"})}),(0,n.jsx)(r.td,{children:"Fired when the cue is exited."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Text Track Cue"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackCueEventMap.html#update",children:"update"})}),(0,n.jsx)(r.td,{children:"Fired when the cue is updated."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PresentationEventMap.html",children:"Presentation"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PresentationEventMap.html#error",children:"error"})}),(0,n.jsx)(r.td,{children:"Fired when an error occurs."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Presentation"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PresentationEventMap.html#presentationmodechange",children:"presentationmodechange"})}),(0,n.jsx)(r.td,{children:"Fired when the presentation mode changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VREventMap.html",children:"VR"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VREventMap.html#directionchange",children:"directionchange"})}),(0,n.jsx)(r.td,{children:"Fired when the VR.direction changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"VR"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VREventMap.html#error",children:"error"})}),(0,n.jsx)(r.td,{children:"Fired when an error occurs."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"VR"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VREventMap.html#statechange",children:"statechange"})}),(0,n.jsx)(r.td,{children:"Fired when the VR.state changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"VR"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VREventMap.html#stereochange",children:"stereochange"})}),(0,n.jsx)(r.td,{children:"Fired when the VR.stereo changes."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaEventMap.html",children:"Verizon Media"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaEventMap.html#assetinforesponse",children:"assetinforesponse"})}),(0,n.jsx)(r.td,{children:"Fired when an asset info response is received."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaEventMap.html#pingerror",children:"pingerror"})}),(0,n.jsx)(r.td,{children:"Fired when an error or invalid response is received from the Ping API."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaEventMap.html#pingresponse",children:"pingresponse"})}),(0,n.jsx)(r.td,{children:"Fired when a Ping response is received."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaEventMap.html#preplayresponse",children:"preplayresponse"})}),(0,n.jsx)(r.td,{children:"Fired when a Preplay response is received."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMedia.html#ads",children:"ads"})}),(0,n.jsx)(r.td,{children:"The Verizon Media SSAI API."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMedia.html#assets",children:"assets"})}),(0,n.jsx)(r.td,{children:"List of Verizon Media assets."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdBreakListEventMap.html",children:"Verizon Media Ad Break List"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdBreakListEventMap.html#addadbreak",children:"addadbreak"})}),(0,n.jsx)(r.td,{children:"Fired when the ad break is added."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media Ad Break List"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdBreakListEventMap.html#removeadbreak",children:"removeadbreak"})}),(0,n.jsx)(r.td,{children:"Fired when the ad break is removed."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdBreakEventMap.html",children:"Verizon Media Ad Break"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdBreakEventMap.html#adbreakbegin",children:"adbreakbegin"})}),(0,n.jsx)(r.td,{children:"Fired when the ad break begins."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media Ad Break"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdBreakEventMap.html#adbreakend",children:"adbreakend"})}),(0,n.jsx)(r.td,{children:"Fired when the ad break ends."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media Ad Break"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdBreakEventMap.html#adbreakskip",children:"adbreakskip"})}),(0,n.jsx)(r.td,{children:"Fired when the ad break is skipped."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media Ad Break"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdBreakEventMap.html#updateadbreak",children:"updateadbreak"})}),(0,n.jsx)(r.td,{children:"Fired when the ad break is updated."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdEventMap.html",children:"Verizon Media Ad"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdEventMap.html#adbegin",children:"adbegin"})}),(0,n.jsx)(r.td,{children:"Fired when an ad begins."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media Ad"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdEventMap.html#adcomplete",children:"adcomplete"})}),(0,n.jsx)(r.td,{children:"Fired when the ad is completed."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media Ad"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdEventMap.html#adend",children:"adend"})}),(0,n.jsx)(r.td,{children:"Fired when the ad ends."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media Ad"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdEventMap.html#adfirstquartile",children:"adfirstquartile"})}),(0,n.jsx)(r.td,{children:"Fired when the ad reaches the first quartile."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media Ad"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdEventMap.html#admidpoint",children:"admidpoint"})}),(0,n.jsx)(r.td,{children:"Fired when the ad reaches the mid point."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Verizon Media Ad"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/VerizonMediaAdEventMap.html#adthirdquartile",children:"adthirdquartile"})}),(0,n.jsx)(r.td,{children:"Fired when the ad reaches the third quartile."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"Our APIs are continuously evolving, and so is our list of events.\nRefer to our API references of our SDKs to go through the latest sets of events:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/web/",children:"Web SDK"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/ios/",children:"iOS SDK"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"pathname:///theoplayer/v4/api-reference/android/",children:"Android SDK"})}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},52878:function(e,r,a){a.d(r,{Z:function(){return t}});let t=a.p+"assets/images/analytics-events-185d6ab52b556af08d8300b545ae5876.png"},50065:function(e,r,a){a.d(r,{Z:function(){return h},a:function(){return i}});var t=a(67294);let n={},d=t.createContext(n);function i(e){let r=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function h(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);