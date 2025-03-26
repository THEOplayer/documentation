"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["82077"],{53289:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"getting-started/sdks/ios/getting-started","title":"Getting started on iOS","description":"This page is a step-by-step guide on how to get THEOplayer iOS SDK running on iOS/iPadOS apps. It will cover:","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/00-getting-started.md","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/getting-started","permalink":"/documentation/pr-preview/pr-247/theoplayer/v4/getting-started/sdks/ios/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/00-getting-started.md","tags":[],"version":"v4","sidebarPosition":0,"frontMatter":{},"sidebar":"ios","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-247/theoplayer/v4/ios/"},"next":{"title":"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) Customization","permalink":"/documentation/pr-preview/pr-247/theoplayer/v4/getting-started/sdks/ios/ios-sdk-customization"}}'),r=t("85893"),s=t("50065");let a={},l="Getting started on iOS",o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a new iOS project",id:"creating-a-new-ios-project",level:2},{value:"Configure THEOplayer SDK framework",id:"configure-theoplayer-sdk-framework",level:2},{value:"Develop the app using the THEOplayer SDK",id:"develop-the-app-using-the-theoplayer-sdk",level:2},{value:"Steps for adding and removing event listeners.",id:"steps-for-adding-and-removing-event-listeners",level:2},{value:"Full code overview:",id:"full-code-overview",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started-on-ios",children:"Getting started on iOS"})}),"\n",(0,r.jsx)(n.p,{children:"This page is a step-by-step guide on how to get THEOplayer iOS SDK running on iOS/iPadOS apps. It will cover:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#creating-a-new-ios-project",children:"Creating a new iOS project"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#configure-theoplayer-sdk-framework",children:"Configuring the THEOplayer SDK"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#develop-the-app-using-the-theoplayer-sdk",children:"Using the THEOplayer iOS API"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#steps-for-adding-and-removing-event-listeners",children:"Using event listeners"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This example uses Xcode version 12.0.1 (12A7300) and macOS Catalina version 10.15.7."}),"\n",(0,r.jsx)(n.admonition,{title:"Cocoapods",type:"info",children:(0,r.jsxs)(n.p,{children:["THEOplayer v2.83.0 and above can be managed through Cocoapods. Refer to ",(0,r.jsx)("a",{href:"https://github.com/THEOplayer/theoplayer-sdk-ios",target:"_blank",children:(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-ios",children:"https://github.com/THEOplayer/theoplayer-sdk-ios"})})," for more information."]})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Download and install Xcode."}),"\n",(0,r.jsxs)(n.li,{children:["Obtain a THEOplayer iOS SDK through the THEOplayer Developer Portal at ",(0,r.jsx)(n.a,{href:"https://portal.theoplayer.com/login",children:"https://portal.theoplayer.com"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"And have the license string handy, as depicted in the screenshot below, because you'll need it when configuring your video player."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://cdn.theoplayer.com/images/git/theoplayer-ios-sdk-license-string.png",alt:""})}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-new-ios-project",children:"Creating a new iOS project"}),"\n",(0,r.jsx)(n.p,{children:"Steps for creating a new project:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create new project (cmd + shift + n)."}),"\n",(0,r.jsx)(n.li,{children:"Select new App and click 'next'."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(18553).Z+"",width:"733",height:"530"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Enter project details, set interface to 'storyboard' and click 'next'."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(16299).Z+"",width:"733",height:"531"})}),"\n",(0,r.jsx)(n.p,{children:"After selecting the directory location, you should see something similar to the screenshot below."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(79653).Z+"",width:"1142",height:"901"})}),"\n",(0,r.jsx)(n.h2,{id:"configure-theoplayer-sdk-framework",children:"Configure THEOplayer SDK framework"}),"\n",(0,r.jsxs)(n.p,{children:["You can manually load and configure the THEOplayer SDK if you're not using ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-ios/",children:"Cocoapods"}),".\nFirst, download your THEOplayer iOS SDK from ",(0,r.jsx)(n.a,{href:"https://portal.theoplayer.com/login",children:"https://portal.theoplayer.com"}),"."]}),"\n",(0,r.jsx)(n.p,{children:'Open "Finder" and drag your THEOplayerSDK.framework into to the project directory.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(54002).Z+"",width:"870",height:"470"})}),"\n",(0,r.jsx)(n.p,{children:"This screen pops up. Make sure these settings are selected, and click finish."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(27142).Z+"",width:"727",height:"433"})}),"\n",(0,r.jsx)(n.p,{children:'Go to the project configuration (1), select the General tab (2), and make sure the THEOplayerSDK.framework is embedded and signed in.\n(3) Add it with the "+" if necessary.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(65379).Z+"",width:"1142",height:"901"})}),"\n",(0,r.jsx)(n.p,{children:"Validate that the framework will correctly be added during builds:"}),"\n",(0,r.jsx)(n.p,{children:"Go to the Build Phases tab in the project configuration. Then, go to the Embed Frameworks section and check that the THEOplayerSDK.framework is present."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(78592).Z+"",width:"868",height:"640"})}),"\n",(0,r.jsx)(n.h2,{id:"develop-the-app-using-the-theoplayer-sdk",children:"Develop the app using the THEOplayer SDK"}),"\n",(0,r.jsx)(n.p,{children:"Steps for a minimal app using THEOplayer:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open the ViewController."}),"\n",(0,r.jsx)(n.p,{children:"The file should look like this:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(13777).Z+"",width:"1402",height:"901"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Import THEOplayerSDK."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"    import THEOplayerSDK\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Make the setupTheoPlayer() function:"}),"\n",(0,r.jsx)(n.p,{children:"This function sets all the initial dimensions for the player and adds it to the view when called."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:' func setupTheoPlayer() {\n     var frame: CGRect = UIScreen.main.bounds\n     frame.origin.y = 0\n     frame.size.height = frame.size.width * 9 / 16\n     var playerConfig = THEOplayerConfiguration(pip: nil, license: "your_license_here")\n     self.theoplayer = THEOplayer(configuration: playerConfig)\n     self.theoplayer = THEOplayer()\n     self.theoplayer.frame  = frame\n     self.theoplayer.addAsSubview(of: self.view)\n }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Do not forget to swap ",(0,r.jsx)(n.code,{children:"your_license_here"})," with the license string mentioned in the ",(0,r.jsx)(n.a,{href:"#prerequisites",children:'"Prerequisites"'}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Define the sampleSource:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'var sampleSource: SourceDescription {\n     return SourceDescription(\n         source: TypedSource(\n         src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",\n         type: "application/x-mpegurl"\n         )\n     )\n }\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set up a player during ",(0,r.jsx)(n.code,{children:"viewDidLoad()"}),", it is important to keep a reference to this instance"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:" override func viewDidLoad() {\n     super.viewDidLoad()\n     setupTheoPlayer()\n     self.theoplayer.source = sampleSource\n     /* Do any additional setup after loading the view.*/\n }\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The result is the following snippet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'import UIKit\nimport THEOplayerSDK\n\nclass ViewController: UIViewController {\n    var theoplayer: THEOplayer!\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        setupTheoPlayer()\n        self.theoplayer.source = sampleSource\n    }\n\n    func setupTheoPlayer() {\n        var frame: CGRect = UIScreen.main.bounds\n        frame.origin.y = 0\n        frame.size.height = frame.size.width * 9 / 16\n\n        var playerConfig = THEOplayerConfiguration(pip: nil, license: "your_license_here")\n        self.theoplayer = THEOplayer(configuration: playerConfig)\n        self.theoplayer.frame =  frame\n        self.theoplayer.addAsSubview(of: self.view)\n    }\n\n    var sampleSource: SourceDescription {\n        return SourceDescription(\n            source: TypedSource(\n                src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",\n                type: "application/x-mpegurl"\n            )\n        )\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"steps-for-adding-and-removing-event-listeners",children:"Steps for adding and removing event listeners."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"var listeners: [String: EventListener] = [:]"})," to ViewController"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"  var theoplayer: THEOplayer!\n  var listeners: [String: EventListener] = [:]\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Write the functions to create and delete the EventListeners on play and pause events."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'class ViewController: UIViewController {\n\n    ...\n\n    func attachEventListeners() {\n        self.listeners["play"] = self.theoplayer.addEventListener(type: PlayerEventTypes.PLAY, listener: onPlay)\n        self.listeners["pause"] = self.theoplayer.addEventListener(type: PlayerEventTypes.PAUSE, listener: onPause)\n    }\n\n    func removeEventListeners() {\n        self.theoplayer.removeEventListener(type: PlayerEventTypes.PLAY, listener: listeners["play"]!)\n        self.theoplayer.removeEventListener(type: PlayerEventTypes.PAUSE, listener: listeners["pause"]!)\n    }\n\n    func onPlay(event: PlayEvent) {\n        print("Play event occured")\n    }\n\n    func onPause(event: PauseEvent) {\n        print("Pause event occured")\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"attachEventListeners()"})," to the setupTheoPlayer() function to create the EventListeners when the THEOplayer is initialized."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'func setupTheoPlayer() {\n       var frame: CGRect = UIScreen.main.bounds\n       frame.origin.y = 0\n       frame.size.height = frame.size.width * 9 / 16\n\n       var playerConfig = THEOplayerConfiguration(pip: nil, license: "your_license_here")\n       self.theoplayer = THEOplayer(configuration: playerConfig)\n       self.theoplayer.frame =  frame\n       self.theoplayer.addAsSubview(of: self.view)\n\n       attachEventListeners()\n   }\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["Modify the ",(0,r.jsx)(n.code,{children:"viewWillDisappear()"})," method to also delete the EventListeners we previously made when the current view is inactive."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"override func viewWillDisappear(_ animated: Bool) {\n    super.viewWillDisappear()\n    removeEventListeners()\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"full-code-overview",children:"Full code overview:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'import UIKit\nimport THEOplayerSDK\n\nclass ViewController: UIViewController {\n    var theoplayer: THEOplayer!\n    var listeners: [String: EventListener] = [:]\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        setupTheoPlayer()\n        self.theoplayer.source = sampleSource\n    }\n\n    func setupTheoPlayer() {\n        var frame: CGRect = UIScreen.main.bounds\n        frame.origin.y = 0\n        frame.size.height = frame.size.width * 9 / 16\n\n        var playerConfig = THEOplayerConfiguration(pip: nil, license: "your_license_here")\n        self.theoplayer = THEOplayer(configuration: playerConfig)\n        self.theoplayer.frame =  frame\n        self.theoplayer.addAsSubview(of: self.view)\n\n        attachEventListeners()\n    }\n\n    var sampleSource: SourceDescription {\n        return SourceDescription(\n            source: TypedSource(\n            src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",\n            type: "application/x-mpegurl"\n            )\n        )\n    }\n    override func viewWillDisappear(_ animated: Bool) {\n        super.viewWillDisappear()\n        removeEventListeners()\n    }\n\n    func attachEventListeners() {\n        self.listeners["play"] = self.theoplayer.addEventListener(type: PlayerEventTypes.PLAY, listener: onPlay)\n        self.listeners["pause"] = self.theoplayer.addEventListener(type: PlayerEventTypes.PAUSE, listener: onPause)\n    }\n\n    func removeEventListeners() {\n        self.theoplayer.removeEventListener(type: PlayerEventTypes.PLAY, listener: listeners["play"]!)\n        self.theoplayer.removeEventListener(type: PlayerEventTypes.PAUSE, listener: listeners["pause"]!)\n    }\n\n    func onPlay(event: PlayEvent) {\n        print("Play event occured")\n    }\n\n    func onPause(event: PauseEvent) {\n        print("Pause event occured")\n    }\n}\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Finally, validate that the tutorial has been completed successfully:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Run the application. You can boot a simulator, or use your own physical device."}),"\n",(0,r.jsx)(n.li,{children:"Click the big play button."}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},18553:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/getting-started-with-ios-sdk-01-e5edb0dc7c7ac5edc37f7b6dfc8d5be3.png"},16299:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/getting-started-with-ios-sdk-02-e7a5e5db29035cf4ffcfefa21bb83998.png"},79653:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/getting-started-with-ios-sdk-03-51c311dc93f75ee45f466a5810172433.png"},54002:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/getting-started-with-ios-sdk-04-5d524deea90b02a10eb1222f40016001.png"},27142:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/getting-started-with-ios-sdk-05-b3564f2fed9e0ba78cd776eab2dad7f5.png"},65379:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/getting-started-with-ios-sdk-06-e94713bfc217a924816475a8baac3c28.png"},78592:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/getting-started-with-ios-sdk-07-90f5878e4c2897d8ee5ed1ca722d4715.png"},13777:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/getting-started-with-ios-sdk-08-6f29a8a47826033ca533dd044e52ccb2.png"},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);