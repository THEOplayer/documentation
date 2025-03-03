"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["87813"],{97982:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>a,assets:()=>n,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"how-to-guides/mediatrack/how-to-select-video-track-quality","title":"How to programmatically select a video track quality","description":"This article describes how you can use the API to select a video track quality. If you select a specific quality, you overrule the ABR algorithm.","source":"@site/theoplayer/how-to-guides/06-mediatrack/03-how-to-select-video-track-quality.md","sourceDirName":"how-to-guides/06-mediatrack","slug":"/how-to-guides/mediatrack/how-to-select-video-track-quality","permalink":"/documentation/pr-preview/pr-226/theoplayer/how-to-guides/mediatrack/how-to-select-video-track-quality","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/06-mediatrack/03-how-to-select-video-track-quality.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to programmatically detect audio tracks","permalink":"/documentation/pr-preview/pr-226/theoplayer/how-to-guides/mediatrack/how-to-detect-audio-tracks"},"next":{"title":"How to programmatically detect video track qualities","permalink":"/documentation/pr-preview/pr-226/theoplayer/how-to-guides/mediatrack/how-to-detect-video-track-qualities"}}'),r=i("85893"),l=i("50065");let o={},s="How to programmatically select a video track quality",n={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-programmatically-select-a-video-track-quality",children:"How to programmatically select a video track quality"})}),"\n",(0,r.jsx)(t.p,{children:"This article describes how you can use the API to select a video track quality. If you select a specific quality, you overrule the ABR algorithm."}),"\n",(0,r.jsx)(t.p,{children:"The VideoTrack API, which is a sub-API of the MediaTrack API, can be used to implement this functionality.\nImplementing this functionality is a common use-case for developers who want to build their own UI to toggle a specific video quality."}),"\n",(0,r.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,r.jsx)(t.p,{children:"The code examples below show how to implement selecting video track qualities across SDKs."}),"\n",(0,r.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The Web SDK leverages the ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/MediaTrack.html",children:"MediaTrack API"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// enable a specific video track quality\nplayer.videoTracks[0].targetQuality = player.videoTracks[0].qualities[indexOfRequestedVideoTrackQuality];\n\n// do ABR on a set of qualities\nplayer.videoTracks[0].targetQuality = [\n  player.videoTracks[0].qualities[indexOfRequestedVideoTrackQuality1],\n  player.videoTracks[0].qualities[indexOfRequestedVideoTrackQuality2],\n];\n\n// set to default ABR algorithm\nplayer.videoTracks[0].targetQuality = null;\n"})}),"\n",(0,r.jsx)(t.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The Android SDK leverages the ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/player/track/mediatrack/MediaTrackList.html",children:"MediaTrack API"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// enable a specific video track quality\ntheoplayer.getPlayer().getVideoTracks().getItem(0).setTargetQuality(theoplayer.getPlayer().getVideoTracks().getItem(0).getQualities().getItem(indexOfRequestedVideoTrackQuality));\n\n// do ABR on a set of qualities\nArrayList<VideoQuality> selectedVideoQualities = new ArrayList<>();\nselectedVideoQualities.add(theoplayer.getPlayer().getVideoTracks().getItem(0).getQualities().getItem(0));\nselectedVideoQualities.add(theoplayer.getPlayer().getVideoTracks().getItem(0).getQualities().getItem(1));\ntheoplayer.getPlayer().getVideoTracks().getItem(0).setTargetQualities(selectedVideoQualities); // ABR algorithm only executed to qualities belonging to selectedVideoQualities\n\n// set to default ABR algorithm\ntheoplayer.getPlayer().getVideoTracks().getItem(0).setTargetQualities(Collections.emptyList());\n"})}),"\n",(0,r.jsx)(t.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,r.jsxs)(t.p,{children:["The iOS SDK leverages the ",(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Protocols/ABRConfiguration.html",children:"ABR API"}),". The underlying AVFoundation stack, which THEOplayer has to use, brings along the technical limitation that you cannot select a specific video quality. Instead, you can set a maximum resolution or bitrate."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"// set preferred peak bitrate\nself.theoplayer.abr.preferredPeakBitRate = 200000\n\n// self.theoplayer.abr.preferredPeakBitRate = nil // removes any bitrate limitation\n\n// preferredMaximumResolution supported starting from iOS 11 and above\n// self.theoplayer.abr.preferredMaximumResolution = CGSize(width: 1280, height: 720)\n// self.theoplayer.abr.preferredMaximumResolution = CGSize.zero // removes any resolution limitation\n"})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A related article on building a Chromeless UI is located at ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-226/theoplayer/how-to-guides/ui/how-to-build-chromeless-ui",children:"How to build a Chromeless UI"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-226/theoplayer/how-to-guides/mediatrack/how-to-detect-video-track-qualities",children:"How to programmatically detect video track qualities"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-226/theoplayer/how-to-guides/mediatrack/how-to-detect-audio-tracks",children:"How to programmatically detect audio tracks"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-226/theoplayer/how-to-guides/mediatrack/how-to-detect-video-track-quality-changes",children:"How to programmatically detect video track quality changes"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-226/theoplayer/how-to-guides/mediatrack/how-to-enable-disable-audio-tracks",children:"How to programmatically enable or disable audio tracks"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return o}});var a=i(67294);let r={},l=a.createContext(r);function o(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);