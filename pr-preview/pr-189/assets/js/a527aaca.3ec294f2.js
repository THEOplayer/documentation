"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["58631"],{93277:function(e,i,t){t.r(i),t.d(i,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"external/flutter-theoplayer-sdk/doc/picture-in-picture","title":"Picture-in-Picture support","description":"THEOplayer Flutter SDK supports native Picture-in-Picture on iOS, Android and Web platforms.","source":"@site/theoplayer/external/flutter-theoplayer-sdk/doc/picture-in-picture.md","sourceDirName":"external/flutter-theoplayer-sdk/doc","slug":"/flutter/guides/picture-in-picture","permalink":"/documentation/pr-preview/pr-189/theoplayer/flutter/guides/picture-in-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/-/doc/picture-in-picture.md","tags":[],"version":"current","frontMatter":{"slug":"/flutter/guides/picture-in-picture"},"sidebar":"flutter","previous":{"title":"Limitations and Known Issues","permalink":"/documentation/pr-preview/pr-189/theoplayer/flutter/guides/limitations"},"next":{"title":"THEOlive support","permalink":"/documentation/pr-preview/pr-189/theoplayer/flutter/guides/theolive"}}'),r=t("85893"),o=t("50065");let l={slug:"/flutter/guides/picture-in-picture"},s="Picture-in-Picture support",d={},c=[{value:"Android and iOS",id:"android-and-ios",level:2},{value:"Necessary configurations on app-level",id:"necessary-configurations-on-app-level",level:3},{value:"Android",id:"android",level:4},{value:"iOS",id:"ios",level:4},{value:"Limitations",id:"limitations",level:3},{value:"Web",id:"web",level:2},{value:"Limitations",id:"limitations-1",level:3}];function a(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"picture-in-picture-support",children:"Picture-in-Picture support"})}),"\n",(0,r.jsx)(i.p,{children:"THEOplayer Flutter SDK supports native Picture-in-Picture on iOS, Android and Web platforms.\nHowever, there are some differences and limitations."}),"\n",(0,r.jsx)(i.h2,{id:"android-and-ios",children:"Android and iOS"}),"\n",(0,r.jsxs)(i.p,{children:["Entering Picture-in-Picture (PiP) is possible through the ",(0,r.jsx)(i.code,{children:"THEOplayer.setAllowAutomaticPictureInPicture(bool)"})," API."]}),"\n",(0,r.jsx)(i.p,{children:"This will not put the player into Picture-in-Picture mode immediately, but enables the player to enter PiP when the application moves to the background."}),"\n",(0,r.jsx)(i.h3,{id:"necessary-configurations-on-app-level",children:"Necessary configurations on app-level"}),"\n",(0,r.jsx)(i.h4,{id:"android",children:"Android"}),"\n",(0,r.jsxs)(i.p,{children:["Enable ",(0,r.jsx)(i.a,{href:"https://developer.android.com/develop/ui/views/picture-in-picture#declaring",children:"Picture-in-Picture support"})," for your main Activity in the ",(0,r.jsx)(i.code,{children:"AndroidManifest.xml"})," file."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-xml",children:'<activity android:name=".MainActivity"\n    android:supportsPictureInPicture="true"\n    android:configChanges=\n        "screenSize|smallestScreenSize|screenLayout|orientation|..."\n    ...\n'})}),"\n",(0,r.jsx)(i.h4,{id:"ios",children:"iOS"}),"\n",(0,r.jsxs)(i.p,{children:["Enable ",(0,r.jsx)(i.code,{children:"Background Audio mode"})," for your application target in ",(0,r.jsx)(i.a,{href:"https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MediaPlaybackGuide/Contents/Resources/en.lproj/ConfiguringAudioSettings/ConfiguringAudioSettings.html#//apple_ref/doc/uid/TP40016757-CH9-SW4",children:"XCode"}),"."]}),"\n",(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/THEOplayer/flutter-theoplayer-sdk/main/doc/xcode_background_modes.png"}),"\n",(0,r.jsx)(i.h3,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Picture-in-Picture is only supported from Android O (Oreo, API level 26)."}),"\n",(0,r.jsx)(i.li,{children:"Picture-in-Picture is only supported from iOS 14."}),"\n",(0,r.jsxs)(i.li,{children:["In multi-player scenarios there can be only one player that has ",(0,r.jsx)(i.code,{children:"allowAutomaticPictureInPicture"})," set to ",(0,r.jsx)(i.code,{children:"true"}),". Failing to do so might lead to unpredictable behaviour."]}),"\n",(0,r.jsx)(i.li,{children:"On iOS paused player can not enter PiP mode."}),"\n",(0,r.jsxs)(i.li,{children:["Calling ",(0,r.jsx)(i.code,{children:"THEOplayer.setPresentationMode(PresentationMode.PIP)"})," API to explicitly enter PiP mode doesn't work on iOS and Android.","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["This limitation is due to the differences on how native iOS and Android handles the PiP mode.","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"iOS moves the player into PiP, while keeping the ViewController on the screen."}),"\n",(0,r.jsx)(i.li,{children:"Android moves the whole Activity into PiP."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"Aligning these will be investigated in the next iterations of the THEOplayer Flutter SDK."}),"\n",(0,r.jsxs)(i.li,{children:["You can try use the ",(0,r.jsx)(i.a,{href:"https://pub.dev/packages/go_home",children:(0,r.jsx)(i.code,{children:"go_home"})}),' package to simulate "Home button press" on Android and iOS to trigger application backgrounding (which will start the automatic PiP mode).',"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"NOTE"}),': there could be issues in the App Stores with the way this plugin simulates the "Home button press", use it on your own risk.']}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"web",children:"Web"}),"\n",(0,r.jsxs)(i.p,{children:["Entering Picture-in-Picture (PiP) is possible through the ",(0,r.jsx)(i.code,{children:"THEOplayer.setPresentationMode(PresentationMode.PIP)"})," API."]}),"\n",(0,r.jsx)(i.h3,{id:"limitations-1",children:"Limitations"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Picture-in-Picture is not supported in Firefox."}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"THEOplayer.setAllowAutomaticPictureInPicture(bool)"})," API is not supported."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return l}});var n=t(67294);let r={},o=n.createContext(r);function l(e){let i=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);