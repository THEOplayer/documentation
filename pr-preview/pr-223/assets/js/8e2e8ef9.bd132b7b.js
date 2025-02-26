"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["18565"],{65699:function(e,t,a){a.r(t),a.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>s,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"how-to-guides/texttrack/how-to-dynamically-change-the-visible-captions","title":"How to dynamically change the visible captions?","description":"When working with the captions / text-track options, you can dynamically change the currently selected language (or set a default language) using following methods.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/10-texttrack/01-how-to-dynamically-change-the-visible-captions.md","sourceDirName":"how-to-guides/10-texttrack","slug":"/how-to-guides/texttrack/how-to-dynamically-change-the-visible-captions","permalink":"/documentation/pr-preview/pr-223/theoplayer/v4/how-to-guides/texttrack/how-to-dynamically-change-the-visible-captions","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/10-texttrack/01-how-to-dynamically-change-the-visible-captions.md","tags":[],"version":"v4","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-223/theoplayer/v4/how-to-guides/texttrack/introduction"},"next":{"title":"How to programmatically detect text tracks","permalink":"/documentation/pr-preview/pr-223/theoplayer/v4/how-to-guides/texttrack/how-to-programmatically-detect-text-tracks"}}'),i=a("85893"),r=a("50065");let o={},l="How to dynamically change the visible captions?",s={},c=[{value:"Step-by-step guide",id:"step-by-step-guide",level:2},{value:"1. Create a new function inside the browser",id:"1-create-a-new-function-inside-the-browser",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Roku SDK",id:"roku-sdk",level:5},{value:"2. Call the function using the language label (or 3-letter-language code if you change x.label to x.language)",id:"2-call-the-function-using-the-language-label-or-3-letter-language-code-if-you-change-xlabel-to-xlanguage",level:3},{value:"Related articles",id:"related-articles",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"how-to-dynamically-change-the-visible-captions",children:"How to dynamically change the visible captions?"})}),"\n",(0,i.jsx)(t.p,{children:"When working with the captions / text-track options, you can dynamically change the currently selected language (or set a default language) using following methods."}),"\n",(0,i.jsxs)(t.p,{children:["This method assumes that you are using text-tracks that are loaded with the manifest. If you add the text-track separately, you can just use this API: ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/TextTrackDescription.html",children:"TextTrackDescription"})]}),"\n",(0,i.jsx)(t.h2,{id:"step-by-step-guide",children:"Step-by-step guide"}),"\n",(0,i.jsx)(t.h3,{id:"1-create-a-new-function-inside-the-browser",children:"1. Create a new function inside the browser"}),"\n",(0,i.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"function setLanguage(player, language) {\n  // Disable all text tracks that are currently active\n  player.textTracks\n    .filter(function (x) {\n      if (x.mode !== 'disabled') {\n        return x;\n      }\n    })\n    .forEach(function (x) {\n      x.mode = 'disabled';\n    });\n  // Enable the text track for a specific language. Note: Here we are searching the label. You can also do x.language for the ISO 3 letter language code.\n  player.textTracks.filter(function (x) {\n    if (x.label == language) {\n      return x;\n    }\n  })[0].mode = 'showing';\n}\n"})}),"\n",(0,i.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:'private func setLanguage(player: THEOplayer, language: String) {\n    let array = player.textTracks as! Array<TextTrack>\n    //Disable all current active textTracks\n    _ = array.filter { $0.mode != "disabled" }.forEach { $0.mode == TextTrackMode.disabled }\n    //Enable the text track for a specific language.\n    var textTrackToActivate = array.filter { $0.label == language }[0]\n    textTrackToActivate.mode = TextTrackMode.showing\n}\n'})}),"\n",(0,i.jsx)(t.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,i.jsx)(t.p,{children:'In the following example we are iterating through all available text tracks. Once we found a track with a desired language, we simply set the mode to "showing". After that, we have to simply assign testTracks object to a proper THEOplayer attribute. This is all you have to do to make a desired text track visible. Of course, we can modify a visible text track during the video playback.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-brightscript",children:'\nfunction setCaptionsLanguage(language as String)\n  textTracks = m.player.textTracks\n  for i = textTracks.count() - 1 to 0 step -1\n    if textTracks[i].kind = "captions" and textTracks[i].language = language then\n      if m.fullScreen then\n        textTracks[i].mode = "showing"\n      else\n        textTracks[i].mode = "hidden"\n      end if\n    else\n      textTracks[i].mode = "disabled"\n    end if\n  end for\n  \'assignment of new roAssociativeArray is required because roku deep-copied roAssociativeArray through fields (pass-by-value)\n  \'read more : <https://developer.roku.com/en-gb/docs/developer-program/performance-guide/optimization-techniques.md#OptimizationTechniques-DataFlow>\n  m.player.textTracks = textTracks\nend function\n'})}),"\n",(0,i.jsx)(t.h3,{id:"2-call-the-function-using-the-language-label-or-3-letter-language-code-if-you-change-xlabel-to-xlanguage",children:"2. Call the function using the language label (or 3-letter-language code if you change x.label to x.language)"}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-223/theoplayer/v4/how-to-guides/texttrack/how-to-dynamically-change-the-visible-captions",children:"How to dynamically change the visible captions?"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-223/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-223/theoplayer/v4/getting-started/sdks/web/getting-started",children:"Web SDK"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-223/theoplayer/v4/getting-started/sdks/android/getting-started",children:"Android Legacy (4.12.x) SDK"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-223/theoplayer/v4/getting-started/sdks/chromecast/getting-started",children:"Chromecast Receiver SDK"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return l},a:function(){return o}});var n=a(67294);let i={},r=n.createContext(i);function o(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);