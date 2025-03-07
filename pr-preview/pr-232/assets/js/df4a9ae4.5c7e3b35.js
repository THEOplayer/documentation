"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["74404"],{6593:function(e,a,t){t.r(a),t.d(a,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"how-to-guides/mediatrack/how-to-enable-disable-audio-tracks","title":"How to programmatically enable or disable audio tracks","description":"This article describes how you can use the MediaTrack API to enable or disable audio tracks.","source":"@site/theoplayer/how-to-guides/06-mediatrack/01-how-to-enable-disable-audio-tracks.md","sourceDirName":"how-to-guides/06-mediatrack","slug":"/how-to-guides/mediatrack/how-to-enable-disable-audio-tracks","permalink":"/documentation/pr-preview/pr-232/theoplayer/how-to-guides/mediatrack/how-to-enable-disable-audio-tracks","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/06-mediatrack/01-how-to-enable-disable-audio-tracks.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-232/theoplayer/how-to-guides/mediatrack/introduction"},"next":{"title":"How to programmatically detect audio tracks","permalink":"/documentation/pr-preview/pr-232/theoplayer/how-to-guides/mediatrack/how-to-detect-audio-tracks"}}'),r=t("85893"),n=t("50065");let o={},s="How to programmatically enable or disable audio tracks",d={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Using the AudioTrack API to enable different tracks",id:"using-the-audiotrack-api-to-enable-different-tracks",level:2},{value:"Code examples",id:"code-examples",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Roku SDK",id:"roku-sdk",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function c(e){let a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"how-to-programmatically-enable-or-disable-audio-tracks",children:"How to programmatically enable or disable audio tracks"})}),"\n",(0,r.jsx)(a.p,{children:"This article describes how you can use the MediaTrack API to enable or disable audio tracks."}),"\n",(0,r.jsxs)(a.p,{children:["The AudioTrack API, which is a sub-API of the ",(0,r.jsx)(a.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/MediaTrack.html",children:"MediaTrack API"}),", can be used to implement this functionality.\nImplementing this functionality is a common use-case for developers who want to build their own UI to toggle audio languages on and off."]}),"\n",(0,r.jsx)(a.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(a.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(a.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(a.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(a.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(a.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,r.jsx)(a.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(a.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(a.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(a.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(a.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(a.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(a.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(a.h2,{id:"using-the-audiotrack-api-to-enable-different-tracks",children:"Using the AudioTrack API to enable different tracks"}),"\n",(0,r.jsxs)(a.p,{children:["As mentioned above, you can use the AudioTrack API to enable or disable an audio track. Once you've programmatically selected a track, you can use its ",(0,r.jsx)(a.code,{children:"enabled"})," property (or method) and set it to ",(0,r.jsx)(a.code,{children:"true"})," or ",(0,r.jsx)(a.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"code-examples",children:"Code examples"}),"\n",(0,r.jsx)(a.p,{children:"The code examples below show how to implement toggling audio tracks. It's advised to disable audio tracks which you don't want to play, in order to avoid issues with overlapping audio."}),"\n",(0,r.jsx)(a.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"// disable all audio tracks\nplayer.audioTracks.forEach(function (track) {\n  track.enabled = false;\n});\n// enable a specific audio track\nplayer.audioTracks[indexOfRequestedAudioTrack].enabled = true;\n"})}),"\n",(0,r.jsx)(a.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"// disable all audio tracks\nfor (int i = 0; i < theoplayer.getPlayer().getAudioTracks().length(); i++) {\n    theoplayer.getPlayer().getAudioTracks().getItem(i).setEnabled(false);\n}\n// enable a specific audio track\ntheoplayer.getPlayer().getAudioTracks().getItem(i).setEnabled(true);\n"})}),"\n",(0,r.jsx)(a.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-swift",children:"// disable all audio tracks\nfor i in 0..<self.player.audioTracks.count {\n    var audio = self.player.audioTracks.get(i)\n    audio.enabled = true\n}\n// enable a specific audio track\nvar desiredAudio = self.player.audioTracks[indexOfRequestedAudioTrack]\ndesiredAudio.enabled = true\n"})}),"\n",(0,r.jsx)(a.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,r.jsx)(a.p,{children:"Enabling audio tracks:"}),"\n",(0,r.jsx)(a.p,{children:'To set a preferred audio track you can write a function like "setAudioLanguage". This function accepts "language" as a string parameter. It then searches for a specified language in the audio tracks and enables the track if it has a proper language.'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-brightscript",children:"function setAudioLanguage(language as String)\n  audioTracks = m.player.audioTracks\n  for i = audioTracks.count() - 1 to 0 step -1\n    if audioTracks[i].language = language then\n      audioTracks[i].enabled = true\n    else\n      audioTracks[i].enabled = false\n    end if\n  end for\n  'required because roku deep-copied roAssociativeArray through fields (pass-by-value)\n  'read more: https://developer.roku.com/en-gb/docs/developer-program/performance-guide/optimization-techniques.md#OptimizationTechniques-DataFlow\n  m.player.audioTracks = audioTracks\nend function\n"})}),"\n",(0,r.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(a.p,{children:"The following remarks can help:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["A related article on building a Chromeless UI is located at ",(0,r.jsx)(a.a,{href:"/documentation/pr-preview/pr-232/theoplayer/how-to-guides/ui/how-to-build-chromeless-ui",children:"How to build a Chromeless UI"}),". This article can help understand why this type of usage of the API can be necessary."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)(a.p,{children:"The following resources provide more information:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/MediaTrack.html",children:"MediaTrack API Reference"})}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/enabled",children:"https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/enabled"}),": the ",(0,r.jsx)(a.code,{children:"enabled"})," property from the AudioTrack interface as documented by MDN."]}),"\n"]})]})}function u(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,a,t){t.d(a,{Z:function(){return s},a:function(){return o}});var i=t(67294);let r={},n=i.createContext(r);function o(e){let a=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:a},e.children)}}}]);