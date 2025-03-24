"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["38220"],{78350:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"getting-started/sdks/tvos/getting-started","title":"Getting started on tvOS","description":"The THEOplayer tvOS SDK can be used from within both a client-server app project (TVML) or a traditional app project.","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/05-tvos/00-getting-started.md","sourceDirName":"getting-started/01-sdks/05-tvos","slug":"/getting-started/sdks/tvos/getting-started","permalink":"/documentation/pr-preview/pr-244/theoplayer/v4/getting-started/sdks/tvos/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/05-tvos/00-getting-started.md","tags":[],"version":"v4","sidebarPosition":0,"frontMatter":{},"sidebar":"ios","previous":{"title":"How to implement custom local network access (LNA) interstitial dialog for Chromecast","permalink":"/documentation/pr-preview/pr-244/theoplayer/v4/getting-started/sdks/ios/custom-chromecast-lna-screen"},"next":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-244/theoplayer/v4/how-to-guides/"}}'),i=n("85893"),a=n("50065");let s={},l="Getting started on tvOS",o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started with a Client-Server App (TVML)",id:"getting-started-with-a-client-server-app-tvml",level:2},{value:"Getting started with a Traditional App",id:"getting-started-with-a-traditional-app",level:2},{value:"Setting a source",id:"setting-a-source",level:4},{value:"Add a player event listener",id:"add-a-player-event-listener",level:4},{value:"Remove a player event listener",id:"remove-a-player-event-listener",level:4}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-on-tvos",children:"Getting started on tvOS"})}),"\n",(0,i.jsx)(t.p,{children:"The THEOplayer tvOS SDK can be used from within both a client-server app project (TVML) or a traditional app project."}),"\n",(0,i.jsxs)(t.p,{children:["A sample traditional app project is located at ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-tvos-sdk/",children:"https://github.com/THEOplayer/samples-tvos-sdk/"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"Cocoapods",type:"info",children:(0,i.jsxs)(t.p,{children:["THEOplayer v2.83.0 and above can be managed through Cocoapods. Refer to ",(0,i.jsx)("a",{href:"https://github.com/THEOplayer/theoplayer-sdk-ios",target:"_blank",children:(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-ios",children:"https://github.com/THEOplayer/theoplayer-sdk-ios"})})," for more information."]})}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Download and install XCode."}),"\n",(0,i.jsxs)(t.li,{children:["Obtain a THEOplayer tvOS SDK through the THEOplayer Developer Portal at ",(0,i.jsx)(t.a,{href:"https://portal.theoplayer.com/login",children:"https://portal.theoplayer.com"}),".","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["And have the license string handy, as depicted in the screenshot below, because you'll need it when configuring your video player to swap out ",(0,i.jsx)(t.code,{children:"your_license_string"}),".\n",(0,i.jsx)(t.img,{src:"https://cdn.theoplayer.com/images/git/theoplayer-ios-sdk-license-string.png",alt:""})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"getting-started-with-a-client-server-app-tvml",children:"Getting started with a Client-Server App (TVML)"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In the target's General tab, in the Embedded Binaries click (+) and select the THEOplayerSDK.framework"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import THEOplayerSDK\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Declare a player variable, pass the TVApplicationController instance, and a license"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'var playerConfig = THEOplayerConfiguration(\n   license: "your_license_string"\n)\nvar theoplayer = THEOplayer(appController: appController, configuration: playerConfig)\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Position and size your player"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"theoplayer.frame = CGRect(x: 0, y: 0, width: 1280, height: 720)\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Add the player to your controller's view hierarchy"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"theoplayer.addAsSubview(of: controller.view)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"getting-started-with-a-traditional-app",children:"Getting started with a Traditional App"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In the target's General tab, in the Embedded Binaries click (+) and select the THEOplayerSDK.framework"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import THEOplayerSDK\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Prepare THEOplayer before instantiating it with your view controller, e.g. in the AppDelegate's application(_:didFinishLaunchingWithOptions:) method."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'THEOplayer.prepare(withFirstViewController: UIStoryboard(name: "Main", bundle: nil).instantiateInitialViewController())\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Declare a player variable with a frame and a license"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'var playerConfig = THEOplayerConfiguration(\n   license: "your_license_string"\n)\nvar theoplayer = THEOplayer(with: CGRect(x: 0, y: 0, width: 1280, height: 720), configuration: playerConfig)\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Add the player to your controller's view hierarchy"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"theoplayer.addAsSubview(of: controller.view)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"controlling-the-player",children:"Controlling the player"}),"\n",(0,i.jsx)(t.p,{children:"Once a player is created and set in your view, you can start interacting with the player instance using the THEOplayer API."}),"\n",(0,i.jsx)(t.h4,{id:"setting-a-source",children:"Setting a source"}),"\n",(0,i.jsx)(t.p,{children:"Create a SourceDescription object and set the player's source"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'let source = SourceDescription(sources: TypedSource(src: "https://www.examples.com/index.m3u8", type: "application/x-mpegurl"))\ntheoplayer.source = source\n'})}),"\n",(0,i.jsx)(t.h4,{id:"add-a-player-event-listener",children:"Add a player event listener"}),"\n",(0,i.jsx)(t.p,{children:"This example shows you how to listen to the player play event."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'var playListener = theoplayer.addEventListener(type: PlayerEventTypes.PLAY, listener: handlePlayEvent)\n\nfunc handlePlayEvent(event : PlayEvent) {\n    print("Received \\(event.type) event at \\(event.currentTime)")\n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"remove-a-player-event-listener",children:"Remove a player event listener"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"theoplayer.removeEventListener(type: PlayerEventTypes.PLAY, listener: playListener)\n"})})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var r=n(67294);let i={},a=r.createContext(i);function s(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);