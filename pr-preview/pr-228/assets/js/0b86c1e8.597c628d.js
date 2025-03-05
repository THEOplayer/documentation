"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["54778"],{79611:function(t,e,o){o.r(e),o.d(e,{default:()=>d,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>r});var n=JSON.parse('{"id":"getting-started/sdks/ios/how-to-couple-native-gckuicastbutton","title":"How to couple the native GCKUICastButton to THEOplayer","description":"This page shows how to wire up iOS\'s native GCKUICastButton to THEOplayer. Your native button will be provided with the following behavior:","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/04-how-to-couple-native-gckuicastbutton.md","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/how-to-couple-native-gckuicastbutton","permalink":"/documentation/pr-preview/pr-228/theoplayer/v4/getting-started/sdks/ios/how-to-couple-native-gckuicastbutton","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/04-how-to-couple-native-gckuicastbutton.md","tags":[],"version":"v4","sidebarPosition":4,"frontMatter":{},"sidebar":"ios","previous":{"title":"How to bypass copy() not working in Safari console","permalink":"/documentation/pr-preview/pr-228/theoplayer/v4/getting-started/sdks/ios/how-to-bypass-copy-not-working-safari-console"},"next":{"title":"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) Touch-events (gestures)","permalink":"/documentation/pr-preview/pr-228/theoplayer/v4/getting-started/sdks/ios/ios-sdk-touch-gestures"}}'),s=o("85893"),i=o("50065");let a={},r="How to couple the native GCKUICastButton to THEOplayer",l={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Step-by-step guide",id:"step-by-step-guide",level:2}];function u(t){let e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"how-to-couple-the-native-gckuicastbutton-to-theoplayer",children:"How to couple the native GCKUICastButton to THEOplayer"})}),"\n",(0,s.jsx)(e.p,{children:"This page shows how to wire up iOS's native GCKUICastButton to THEOplayer. Your native button will be provided with the following behavior:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Clicking the button while disconnected will start a Chromecast session. The currently set source will start playing."}),"\n",(0,s.jsx)(e.li,{children:"Clicking the button while casting will stop the current session. The player will be paused."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"objectives",children:"Objectives"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Create a GCKUICastButton"}),"\n",(0,s.jsx)(e.li,{children:"Override the behavior of this button"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"step-by-step-guide",children:"Step-by-step guide"}),"\n",(0,s.jsx)(e.p,{children:"You can modify the behavior of the GCKUICastButton by disabling triggering the default cast dialog and adding a new target for the button. Below, we provide an example implementation which uses the Cast API of a previously created THEOplayer."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-swift",children:"override func viewDidLoad() {\n    self.theoplayer = THEOplayer()\n    self.castButton = GCKUICastButton(frame: CGRect(x: CGFloat(0), y: CGFloat(0), width: CGFloat(24), height: CGFloat(24)))\n    self.castButton.triggersDefaultCastDialog = false\n    self.castButton.addTarget(self, action: #selector(handleCastButtonTap), for: UIControlEvents.touchUpInside)\n}\n\n@objc func handleCastButtonTap() {\n    guard let chromecast = self.theoplayer.cast?.chromecast else {\n        return\n    }\n    if chromecast.state == PlayerCastState.available {\n        chromecast.start()\n    } else if chromecast.state == PlayerCastState.connected || chromecast.state == PlayerCastState.connecting {\n        chromecast.stop()\n    }\n}\n"})})]})}function d(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},50065:function(t,e,o){o.d(e,{Z:function(){return r},a:function(){return a}});var n=o(67294);let s={},i=n.createContext(s);function a(t){let e=n.useContext(i);return n.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);