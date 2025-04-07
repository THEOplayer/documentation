"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["86987"],{39073:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"getting-started/sdks/ios/getting-started","title":"Getting started on iOS/tvOS","description":"Introduction","source":"@site/theoplayer_versioned_docs/version-v8/getting-started/01-sdks/03-ios/00-getting-started.mdx","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/getting-started","permalink":"/documentation/pr-preview/pr-259/theoplayer/v8/getting-started/sdks/ios/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/getting-started/01-sdks/03-ios/00-getting-started.mdx","tags":[],"version":"v8","sidebarPosition":0,"frontMatter":{},"sidebar":"ios","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-259/theoplayer/v8/ios/"},"next":{"title":"Getting started on iOS/tvOS","permalink":"/documentation/pr-preview/pr-259/theoplayer/v8/getting-started/sdks/ios/getting-started"}}'),r=n("85893"),a=n("50065");let s={},l="Getting started on iOS/tvOS",o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"THEOplayer license",id:"theoplayer-license",level:3},{value:"Installation",id:"installation",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"Swift Package Manager",id:"swift-package-manager",level:4},{value:"Usage",id:"usage",level:2},{value:"Adding the THEOplayer license",id:"adding-the-theoplayer-license",level:3},{value:"Importing the framework",id:"importing-the-framework",level:3},{value:"Setting up the player",id:"setting-up-the-player",level:3},{value:"Displaying the player",id:"displaying-the-player",level:3},{value:"Adding a source for playback",id:"adding-a-source-for-playback",level:3},{value:"Basic playback controls",id:"basic-playback-controls",level:3},{value:"Starting playback",id:"starting-playback",level:4},{value:"Pausing or stopping playback",id:"pausing-or-stopping-playback",level:4},{value:"Seeking forward or backward in time",id:"seeking-forward-or-backward-in-time",level:4},{value:"Seeking forward relatively to current time",id:"seeking-forward-relatively-to-current-time",level:4},{value:"Attaching player event listeners",id:"attaching-player-event-listeners",level:3},{value:"Useful links",id:"useful-links",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started-on-iostvos",children:"Getting started on iOS/tvOS"})}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"This guide covers the steps to obtain and setup the core THEOplayer SDK targeting a native iOS/tvOS application. It also provides information and usage of the commonly used APIs."}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(t.h3,{id:"theoplayer-license",children:"THEOplayer license"}),"\n",(0,r.jsxs)(t.p,{children:["THEOplayer requires a valid THEOplayer license to be configured in order to access the SDK APIs (with the exception of some whitelisted sources hosted by our CDN). Request your license via ",(0,r.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"After creating your license, you can copy its license string to your clipboard as demonstrated in the screenshot below."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://cdn.theoplayer.com/images/git/theoplayer-ios-sdk-license-string.png",alt:""})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"It's possible to add multiple platforms in a single license ie. iOS & tvOS."})}),"\n",(0,r.jsxs)(t.p,{children:["Later in the guide we explain how to configure the license (",(0,r.jsx)(t.a,{href:"#adding-the-theoplayer-license",children:"in this section"}),")."]}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"The THEOplayer SDK is published on the following package managers:"}),"\n",(0,r.jsx)(t.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["It's considered good practice to run ",(0,r.jsx)(t.code,{children:"pod repo update"})," before adding new pods to your Podfile.\nThis will help find newly added pods by updating the list of references to the public spec repos.\nIf you just installed Cocoapods or are already up-to-date, then this step can be skipped."]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:"Add the following entry to your Podfile:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"target 'MyApp' do\n  pod 'THEOplayerSDK-core', '~> 8' # at the time of writing, v8 is the latest major version.\nend\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"You can skip specifying the version to get the latest published version of THEOplayerSDK."})}),"\n",(0,r.jsx)(t.p,{children:"Then, using the terminal navigate to the directory where your Podfile is located and run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pod install\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If it's the first time that your project integrates with Cocoapods, then after this step you should stop using the ",(0,r.jsx)(t.code,{children:"xcodeproj"})," file and instead start using the ",(0,r.jsx)(t.code,{children:"xcworkspace"})," file generated by Cococapods."]}),"\n",(0,r.jsx)(t.h4,{id:"swift-package-manager",children:"Swift Package Manager"}),"\n",(0,r.jsxs)(t.p,{children:["Navigate to your Xcode project, and select the ",(0,r.jsx)(t.code,{children:"Package Dependencies"})," tab, then click on the ",(0,r.jsx)(t.code,{children:"+"})," button to add a new dependency. Then in the search bar, add the following URL ",(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-apple",children:"https://github.com/THEOplayer/theoplayer-sdk-apple"}),". Choose the version and click on ",(0,r.jsx)(t.code,{children:"Add Package"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The following image illustrates what it should look like:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(55393).Z+"",width:"3008",height:"1692"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["If Xcode fails to fetch the THEOplayer package, navigate in Terminal to the root directory of your project and run ",(0,r.jsx)(t.code,{children:"xcodebuild -resolvePackageDependencies"}),". This will re-attempt to fetch the packages specified in the project. Restart your Xcode and the package dependencies should be in place."]})}),"\n",(0,r.jsx)(t.p,{children:"And make sure the THEOplayerSDK framework is added to the target application:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(18528).Z+"",width:"3006",height:"1688"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["The following code snippets will demonstrate a basic playback scenario. The demo adopts the ",(0,r.jsx)(t.code,{children:"UIKit"})," framework, and assumes the usage of ",(0,r.jsx)(t.code,{children:"UIViewController"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"adding-the-theoplayer-license",children:"Adding the THEOplayer license"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"#theoplayer-license",children:"After obtaining your THEOplayer license string"}),", navigate to your Xcode project's plist file and add a new key/value entry. The key should be ",(0,r.jsx)(t.code,{children:"THEOplayerLicense"})," and the value should be your license string."]}),"\n",(0,r.jsx)(t.p,{children:"The following image illustrates what it should look like:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(24682).Z+"",width:"3006",height:"1694"})}),"\n",(0,r.jsx)(t.h3,{id:"importing-the-framework",children:"Importing the framework"}),"\n",(0,r.jsx)(t.p,{children:"Add the import statement in your source files where you would like to use THEOplayer:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"import THEOplayerSDK\n"})}),"\n",(0,r.jsx)(t.h3,{id:"setting-up-the-player",children:"Setting up the player"}),"\n",(0,r.jsx)(t.p,{children:"THEOplayer provides a configuration object to configure the player settings. In the following snippet we configure the player license to be passed to the player."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If the license is provided through the ",(0,r.jsx)(t.code,{children:"plist"})," file (as mentioned above), then passing again in the player configuration is not required."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'var theoplayer: THEOplayer?\n...\n...\noverride func viewDidLoad() {\n...\n	let configBuilder = THEOplayerConfigurationBuilder()\n    configBuilder.license = "your_license_here"\n    let theoplayer = THEOplayer(configuration: configBuilder.build())\n    self.theoplayer = theoplayer\n...\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"It is important to keep a strong reference to the player as demonstrated in the above code snippet, otherwise the player will not be retained by ARC."})}),"\n",(0,r.jsx)(t.h3,{id:"displaying-the-player",children:"Displaying the player"}),"\n",(0,r.jsx)(t.p,{children:"THEOplayer provides conventional APIs similar to UIKit framework's view related APIs. The following snippet demonstrates how to present an inline player view:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"let playerFrame = CGRect(x: 0, y: 0, width: 320, height: 180)\ntheoplayer.frame = playerFrame\ntheoplayer.center = view.center\ntheoplayer.addAsSubview(of: self.view)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For more information on how to present the player in various modes, please check out the player documentation for the ",(0,r.jsx)(t.code,{children:"PresentationMode"})," API. The link to the API reference can be found at the end of this guide."]}),"\n",(0,r.jsx)(t.h3,{id:"adding-a-source-for-playback",children:"Adding a source for playback"}),"\n",(0,r.jsx)(t.p,{children:"Sources are passed to the player via an object called SourceDescription. The following snippet uses a source URL that serves an HLS manifest file:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'let source = "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"\nlet mimeType = "application/x-mpegurl"\ntheoplayer.source = SourceDescription(source: TypedSource(src: source, type: mimeType))\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Sources that are not whitelisted in the THEOplayer license will fail to play. If no player license is configured, then by default only sources from the ",(0,r.jsx)(t.code,{children:"theoplayer"})," domain will play. This can be the reason of failure when updating the source in the snippet above."]})}),"\n",(0,r.jsx)(t.h3,{id:"basic-playback-controls",children:"Basic playback controls"}),"\n",(0,r.jsx)(t.h4,{id:"starting-playback",children:"Starting playback"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"theoplayer.play()\n"})}),"\n",(0,r.jsx)(t.h4,{id:"pausing-or-stopping-playback",children:"Pausing or stopping playback"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"theoplayer.pause()\n// or\ntheoplayer.stop()\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The difference between the ",(0,r.jsx)(t.code,{children:"pause"})," and ",(0,r.jsx)(t.code,{children:"stop"})," methods is that ",(0,r.jsx)(t.code,{children:"pause"})," will allow the player to continue if ",(0,r.jsx)(t.code,{children:"play"})," is called, whereas ",(0,r.jsx)(t.code,{children:"stop"})," will end playback. When stopped, a new source is expected to be set."]}),"\n",(0,r.jsx)(t.h4,{id:"seeking-forward-or-backward-in-time",children:"Seeking forward or backward in time"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"let time: Double = 30.0\ntheoplayer.currentTime = time\n"})}),"\n",(0,r.jsx)(t.h4,{id:"seeking-forward-relatively-to-current-time",children:"Seeking forward relatively to current time"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"let currentTime = theoplayer.currentTime\n// Jump 10 seconds forward\ntheoplayer.currentTime = currentTime + 10\n"})}),"\n",(0,r.jsx)(t.h3,{id:"attaching-player-event-listeners",children:"Attaching player event listeners"}),"\n",(0,r.jsx)(t.p,{children:"It's very useful during the player's lifecycle, especially for state management and UI updates, to listen to certain events that are dispatched from the THEOplayer SDK."}),"\n",(0,r.jsx)(t.p,{children:"For example, to listen to the time update event and update the UI of the application to reflect the change:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"var eventListener: EventListener?\n...\n...\neventListener = theoplayer.addEventListener(type: PlayerEventTypes.TIME_UPDATE) { [weak self] event in self?.onTimeUpdate(event: event) }\n...\n...\nfunc onTimeUpdate(event: TimeUpdateEvent) {\n    playerInterfaceView.currentTime = Float(event.currentTime)\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"To remove an event listener:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"theoplayer.removeEventListener(type: PlayerEventTypes.TIME_UPDATE, listener: eventListener!)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For more player event types, please check out the player documentation for the ",(0,r.jsx)(t.code,{children:"PlayerEventTypes"})," API. The link to the API reference can be found at the end of this guide."]}),"\n",(0,r.jsx)(t.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/ios/index.html",children:"THEOplayer iOS SDK API reference"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Basic-Playback",children:"THEOplayer iOS sample app with basic playback"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Google-IMA",children:"THEOplayer iOS sample app with Google IMA integration"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Google-Cast",children:"THEOplayer iOS sample app with Google Cast playback"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},55393:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/ios-getting-started-1-892e63410e915e1e73824a33fa3038de.png"},24682:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/ios-getting-started-2-773df42c859c8472dbeda2b02ef975c1.png"},18528:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/ios-getting-started-3-af7cd19fa611660e32ef5dc2b71957b1.png"},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var i=n(67294);let r={},a=i.createContext(r);function s(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);