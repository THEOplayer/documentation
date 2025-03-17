"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["14154"],{80181:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>n,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"how-to-guides/texttrack/how-to-programmatically-disable-text-tracks","title":"How to programmatically enable or disable text tracks","description":"This article describes how you can use the API to enable or disable subtitles, closed captions or metadata.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/10-texttrack/03-how-to-programmatically-disable-text-tracks.md","sourceDirName":"how-to-guides/10-texttrack","slug":"/how-to-guides/texttrack/how-to-programmatically-disable-text-tracks","permalink":"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/texttrack/how-to-programmatically-disable-text-tracks","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/10-texttrack/03-how-to-programmatically-disable-text-tracks.md","tags":[],"version":"v7","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to programmatically detect text tracks","permalink":"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/texttrack/how-to-programmatically-detect-text-tracks"},"next":{"title":"How to insert subtitles?","permalink":"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/texttrack/how-to-insert-subtitles"}}'),s=r("85893"),i=r("50065");let n={},o="How to programmatically enable or disable text tracks",l={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Roku SDK",id:"roku-sdk",level:5},{value:"Remarks",id:"remarks",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"how-to-programmatically-enable-or-disable-text-tracks",children:"How to programmatically enable or disable text tracks"})}),"\n",(0,s.jsx)(t.p,{children:"This article describes how you can use the API to enable or disable subtitles, closed captions or metadata."}),"\n",(0,s.jsx)(t.p,{children:"The TextTracks API can be used to implement this functionality.\nImplementing this functionality is a common use-case for developers who want to build their own UI to toggle subtitles."}),"\n",(0,s.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,s.jsx)(t.p,{children:"The code examples below how to implement toggling subtitles across SDK. It's advised to disable the text tracks you don't want to display, in order to avoid issues with overlapping text."}),"\n",(0,s.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// disable all text tracks\nplayer.textTracks.forEach(function (track) {\n  track.mode = 'disabled';\n});\n// enable a specific text track\nplayer.textTracks[indexOfRequestedTextTrack].mode = 'showing';\n"})}),"\n",(0,s.jsx)(t.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"// disable all text tracks\nfor (int i = 0; i < tpv.getPlayer().getTextTracks().length(); i++) {\n    theoplayer.getPlayer().getTextTracks().getItem(i).setMode(TextTrackMode.DISABLED);\n}\n// enable a specific text track\ntheoplayer.getPlayer().getTextTracks().getItem(indexOfRequestedTextTrack).setMode(TextTrackMode.SHOWING);\n"})}),"\n",(0,s.jsx)(t.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"// disable all text tracks\nfor i in 0..<self.player.textTracks.count {\n    var track = self.player.textTracks.get(i)\n    track.mode = TextTrackMode.disabled\n}\n// enable a specific text track\nvar track = self.player.textTracks.get(indexOfRequestedTextTrack)\ntrack.mode = TextTrackMode.showing\n"})}),"\n",(0,s.jsx)(t.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,s.jsx)(t.p,{children:'To disable all text tracks we have to iterate through all text tracks and set the field mode to "disabled" for each of the text tracks.'}),"\n",(0,s.jsx)(t.p,{children:"It should be emphasized that in BrightScript and SceneGraph we are obligated to assign a whole new associative array to the interface field in order to change the associative array exposed through interface. As the attempts to change fields of an associative array or elements of array will bring no effect."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-brightscript",children:"'disable all tracks\ntextTracks = m.player.textTracks\nfor i = textTracks.count() - 1 to 0 step -1\n  textTracks[i].mode = \"disabled\"\nend for\n'assigment of new roAssociativeArray is required because roku deep-copied roAssociativeArray through fields (pass-by-value)\n'read more : <https://developer.roku.com/en-gb/docs/developer-program/performance-guide/optimization-techniques.md#OptimizationTechniques-DataFlow>\nm.player.textTracks = textTracks\n\n'enable specific track\ntextTracks =  m.player.textTracks\ntextTracks[indexOfRequestedTextTrack].mode = \"disabled\"\n'assigment of new roAssociativeArray is required because roku deep-copied roAssociativeArray through fields (pass-by-value)\n'read more : <https://developer.roku.com/en-gb/docs/developer-program/performance-guide/optimization-techniques.md#OptimizationTechniques-DataFlow>\nm.player.textTracks = textTracks\n"})}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A related article on building a Chromeless UI is located at ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v7/how-to-guides/ui/how-to-build-chromeless-ui",children:"How to build a Chromeless UI"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return n}});var a=r(67294);let s={},i=a.createContext(s);function n(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);