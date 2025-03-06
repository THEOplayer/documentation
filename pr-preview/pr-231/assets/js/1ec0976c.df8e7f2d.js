"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["5257"],{22424:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"getting-started/sdks/ios/getting-started","title":"Getting started guide for THEOplayer iOS/tvOS SDK 5.0","description":"In this guide we explain how to get up and running with THEOplayer 5.0. The guide will cover the steps on how to setup the core THEOplayer SDK alongside a few additional integrations to extend beyond the basic features.","source":"@site/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/03-ios/00-getting-started.md","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/getting-started","permalink":"/documentation/pr-preview/pr-231/theoplayer/v6/getting-started/sdks/ios/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/03-ios/00-getting-started.md","tags":[],"version":"v6","sidebarPosition":0,"frontMatter":{},"sidebar":"ios","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-231/theoplayer/v6/ios/"},"next":{"title":"Getting started guide for THEOplayer iOS/tvOS SDK 5.0","permalink":"/documentation/pr-preview/pr-231/theoplayer/v6/getting-started/sdks/ios/getting-started"}}'),a=n("85893"),r=n("50065");let s={},o="Getting started guide for THEOplayer iOS/tvOS SDK 5.0",l={},d=[{value:"What&#39;s new in THEOplayer 5.0?",id:"whats-new-in-theoplayer-50",level:2},{value:"Setup",id:"setup",level:2},{value:"THEOplayer license",id:"theoplayer-license",level:3},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:2},{value:"Adding the THEOplayer license",id:"adding-the-theoplayer-license",level:3},{value:"Importing the framework",id:"importing-the-framework",level:3},{value:"Setting up the player",id:"setting-up-the-player",level:3},{value:"Displaying the player",id:"displaying-the-player",level:3},{value:"Adding a source for playback",id:"adding-a-source-for-playback",level:3},{value:"Basic playback controls",id:"basic-playback-controls",level:3},{value:"1. To start playback:",id:"1-to-start-playback",level:4},{value:"2. To pause or stop playback, simply call (in respective order):",id:"2-to-pause-or-stop-playback-simply-call-in-respective-order",level:4},{value:"3. To seek forward or backward in time:",id:"3-to-seek-forward-or-backward-in-time",level:4},{value:"4. To get the current playback time and seek forward:",id:"4-to-get-the-current-playback-time-and-seek-forward",level:4},{value:"Attaching player event listeners",id:"attaching-player-event-listeners",level:3},{value:"Extending THEOplayer with Google IMA Ads",id:"extending-theoplayer-with-google-ima-ads",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Google DAI",id:"google-dai",level:3},{value:"Extending THEOplayer with GoogleCast",id:"extending-theoplayer-with-googlecast",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Usage",id:"usage-2",level:3},{value:"Useful links",id:"useful-links",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"getting-started-guide-for-theoplayer-iostvos-sdk-50",children:"Getting started guide for THEOplayer iOS/tvOS SDK 5.0"})}),"\n",(0,a.jsx)(t.p,{children:"In this guide we explain how to get up and running with THEOplayer 5.0. The guide will cover the steps on how to setup the core THEOplayer SDK alongside a few additional integrations to extend beyond the basic features."}),"\n",(0,a.jsx)(t.h2,{id:"whats-new-in-theoplayer-50",children:"What's new in THEOplayer 5.0?"}),"\n",(0,a.jsx)(t.p,{children:"There are quite a few nice changes that are significant improvements over the previous versions."}),"\n",(0,a.jsx)(t.p,{children:"For starters, the iOS and tvOS SDKs are now unified in a single framework. Full API interoperability can be expected with features implemented to be compatible for both platforms."}),"\n",(0,a.jsx)(t.p,{children:"Another welcome change is that the THEOplayer iOS/tvOS SDK 5.0 moves towards more modularized features, which means there is a base SDK that can handle basic playback and additional feature integrations are provided as separate modules that can be added as desired.\nThis approach gives more flexibility and results in a reduced application size, since non-required parts are not included in the build of the application."}),"\n",(0,a.jsx)(t.p,{children:"And last but not least, the biggest change that THEOplayer 5.0 brings is the removal of the SDK's dependency on the WebView to handle video-playback and supported features. This will have a very positive impact on the performance of the SDK as it will remove a layer of complexity of bridging between native and web environments. Removing the WebView dependency will also allow us to move many of the APIs from being asynchronous to being synchronous, such as querying the current playback time, requesting active ad breaks, etc..."}),"\n",(0,a.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(t.h3,{id:"theoplayer-license",children:"THEOplayer license"}),"\n",(0,a.jsxs)(t.p,{children:["THEOplayer requires a valid THEOplayer license in order to use the SDK. Later in the guide we explain how to pass the license to the SDK.\nRequest your license via ",(0,a.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"})," where you can create a THEOplayer iOS/tvOS SDK.\nNote: It's possible to add multiple platforms in a single license ie. iOS & tvOS.\nAfter creating an iOS SDK, you can copy its license string to your clipboard as demonstrated in the screenshot below."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://cdn.theoplayer.com/images/git/theoplayer-ios-sdk-license-string.png",alt:""})}),"\n",(0,a.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.p,{children:"THEOplayer 5.0 is released exclusively on package managers (Cocoapods, and Swift Package Manager later to come) which allow developers to easily fetch and implement the latest player into their app."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsxs)(t.em,{children:["It's considered good practice to run ",(0,a.jsx)(t.code,{children:"pod repo update"})," before adding new pods to your Podfile.",(0,a.jsx)(t.br,{}),"\n","This will help find newly added pods by updating the list of references to the public spec repos.",(0,a.jsx)(t.br,{}),"\n","If you just installed Cocoapods or are already up-to-date, then this step can be skipped."]})})}),"\n",(0,a.jsxs)(t.p,{children:["Add ",(0,a.jsx)(t.code,{children:"pod 'THEOplayerSDK-core', '~> 5'"})," similar to the following to your Podfile:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ruby",children:"target 'MyApp' do\n  pod 'THEOplayerSDK-core', '~> 5'\nend\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that you can omit ",(0,a.jsx)(t.code,{children:"~> 5"})," to get the latest published version of the THEOplayerSDK."]}),"\n",(0,a.jsx)(t.p,{children:"Then, using the terminal navigate to the directory where your Podfile is located and run:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pod install\n"})}),"\n",(0,a.jsx)(t.p,{children:"If it's the first time that your project integrates with Cocoapods, then after this point you should stop using the xcodeproj file and use the xcworkspace file instead generated by Cococapods."}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["The following code snippets will demonstrate a basic playback scenario. The demo adopts the ",(0,a.jsx)(t.code,{children:"UIKit"})," framework, and assumes the usage of ",(0,a.jsx)(t.code,{children:"UIViewController"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"adding-the-theoplayer-license",children:"Adding the THEOplayer license"}),"\n",(0,a.jsxs)(t.p,{children:["After obtaining your THEOplayer license string, navigate to your Xcode project's plist file and add a new key/value entry.\nThe key should be ",(0,a.jsx)(t.code,{children:"THEOplayerLicense"})," and the value should be your license string."]}),"\n",(0,a.jsx)(t.h3,{id:"importing-the-framework",children:"Importing the framework"}),"\n",(0,a.jsx)(t.p,{children:"The package manager should take care of embedding the framework into your project. All that is left to do is to add the import statement in your source files where you would like to use the player:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"import THEOplayerSDK\n"})}),"\n",(0,a.jsx)(t.h3,{id:"setting-up-the-player",children:"Setting up the player"}),"\n",(0,a.jsx)(t.p,{children:"THEOplayer provides a configuration object to configure the player settings. In the following snippet we configure the player license to be passed to the player."}),"\n",(0,a.jsxs)(t.p,{children:["Note: If the license is provided through the ",(0,a.jsx)(t.code,{children:"plist"})," file (as mentioned above), then passing again in the player configuration is not required."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'var theoplayer: THEOplayer!\n...\n...\noverride func viewDidLoad() {\n...\n	let playerConfig = THEOplayerConfiguration(license: "your_license_here")\n	self.theoplayer = THEOplayer(configuration: playerConfig)\n...\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Note: It is recommended to have a strong reference to the player as demonstrated in the above code snippet."}),"\n",(0,a.jsx)(t.h3,{id:"displaying-the-player",children:"Displaying the player"}),"\n",(0,a.jsx)(t.p,{children:"THEOplayer provides conventional APIs similar to the UIKit view setup. The following snippet demonstrates how to present an inline player view:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"let playerFrame = CGRect(x: 0, y: 0, width: 320, height: 180)\ntheoplayer.frame = playerFrame\ntheoplayer.center = view.center\ntheoplayer.addAsSubview(of: self.view)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["For more information on how to present the player in various modes, please check out the player documentation for the ",(0,a.jsx)(t.code,{children:"PresentationMode"})," API. The link to the API reference can be found at the end of this guide."]}),"\n",(0,a.jsx)(t.h3,{id:"adding-a-source-for-playback",children:"Adding a source for playback"}),"\n",(0,a.jsx)(t.p,{children:"Sources are passed to the player via an object called SourceDescription. The following snippet uses a source URL that serves an HLS manifest file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'let source = "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"\nlet mimeType = "application/x-mpegurl"\ntheoplayer.source = SourceDescription(source: TypedSource(src: source, type: mimeType))\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Note: Sources that are not whitelisted in the THEOplayer license will fail to play. If no player license is configured, then by default only sources from the ",(0,a.jsx)(t.code,{children:"theoplayer"})," domain will play. This is the reason why for example the demo will playout the source in the snippet above, but will fail for different domain sources in case of missing the player license."]}),"\n",(0,a.jsx)(t.h3,{id:"basic-playback-controls",children:"Basic playback controls"}),"\n",(0,a.jsx)(t.h4,{id:"1-to-start-playback",children:"1. To start playback:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"theoplayer.play()\n"})}),"\n",(0,a.jsx)(t.h4,{id:"2-to-pause-or-stop-playback-simply-call-in-respective-order",children:"2. To pause or stop playback, simply call (in respective order):"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"theoplayer.pause()\ntheoplayer.stop()\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The difference between the ",(0,a.jsx)(t.code,{children:"pause"})," and ",(0,a.jsx)(t.code,{children:"stop"})," methods is that ",(0,a.jsx)(t.code,{children:"pause"})," will allow the player to continue if ",(0,a.jsx)(t.code,{children:"play"})," is called, whereas ",(0,a.jsx)(t.code,{children:"stop"})," will end playback. When stopped, a new source is expected to be set."]}),"\n",(0,a.jsx)(t.h4,{id:"3-to-seek-forward-or-backward-in-time",children:"3. To seek forward or backward in time:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"let time: Double = 30.0\ntheoplayer.setCurrentTime(time)\n"})}),"\n",(0,a.jsx)(t.h4,{id:"4-to-get-the-current-playback-time-and-seek-forward",children:"4. To get the current playback time and seek forward:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"theoplayer.requestCurrentTime { (time, error) in\n    if let timeInSeconds: Double = time {\n        // Jump 10 seconds forward\n        theoplayer.setCurrentTime(time + 10)\n    }\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"attaching-player-event-listeners",children:"Attaching player event listeners"}),"\n",(0,a.jsx)(t.p,{children:"It's very useful, especially for state management, during the player's lifecycle to listen to certain events that are dispatched from the THEOplayer SDK."}),"\n",(0,a.jsx)(t.p,{children:"For example, to listen to the time update event and update the application of the UI to reflect the change:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"var eventListener: EventListener?\n...\n...\neventListener = theoplayer.addEventListener(type: PlayerEventTypes.TIME_UPDATE, listener: onTimeUpdate)\n...\n...\nfunc onTimeUpdate(event: TimeUpdateEvent) {\n    playerInterfaceView.currentTime = Float(event.currentTime)\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"To remove an event listener:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"theoplayer.removeEventListener(type: PlayerEventTypes.TIME_UPDATE, listener: eventListener!)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["For more player event types, please check out the player documentation for the ",(0,a.jsx)(t.code,{children:"PlayerEventTypes"})," API. The link to the API reference can be found at the end of this guide."]}),"\n",(0,a.jsx)(t.h2,{id:"extending-theoplayer-with-google-ima-ads",children:"Extending THEOplayer with Google IMA Ads"}),"\n",(0,a.jsx)(t.p,{children:"Playing advertisements has never been simpler and as convenient. The THEOplayer Google IMA integration framework is a lightweight module that can optionally be added to your project to provide ad playback."}),"\n",(0,a.jsx)(t.h3,{id:"installation-1",children:"Installation"}),"\n",(0,a.jsx)(t.p,{children:"Simply add the following to your project's Podfile:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"pod 'THEOplayer-Integration-GoogleIMA', '~> 5'\n"})}),"\n",(0,a.jsx)(t.p,{children:"And import it to your source files with:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"import THEOplayerGoogleIMAIntegration\n"})}),"\n",(0,a.jsx)(t.h3,{id:"usage-1",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["After initialising your ",(0,a.jsx)(t.code,{children:"THEOplayer"})," instance, it's time to initialise the integration and pass it to the ",(0,a.jsx)(t.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"let imaIntegration = GoogleIMAIntegrationFactory.createIntegration(on: self.theoplayer)\ntheoplayer.addIntegration(imaIntegration)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["All that is left to do is to define an ",(0,a.jsx)(t.code,{children:"AdDescription"})," object to specify the advertisement to play:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'let adSrc = "https://cdn.theoplayer.com/demos/ads/vast/dfp-preroll-skip-5s.xml"\nlet adDescription = GoogleImaAdDescription(src: adSrc)\n// or\nlet adDescriptionWithOffset = GoogleImaAdDescription(src: adSrc, timeOffset: "10")\n'})}),"\n",(0,a.jsx)(t.p,{children:"The time offset helps VAST ads to play at a specific timestamp. VMAP ads can define that behavior inside their manifest file thus they don't require a timeOffset parameter."}),"\n",(0,a.jsx)(t.p,{children:"Finally, we pass the ad description to the player either by setting it in the source:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'let source = "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"\nlet mimeType = "application/x-mpegurl"\nlet sourceDescription = SourceDescription(source: TypedSource(src: source, type: mimeType), ads: [adDescription])\n'})}),"\n",(0,a.jsx)(t.p,{children:"Or by calling the ad schedule API:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"theoplayer.ads.schedule(adDescription: adDescription)\n"})}),"\n",(0,a.jsx)(t.p,{children:"And that's all. A VAST ad without a timeOffset argument in the description will play as a preroll before the main content."}),"\n",(0,a.jsx)(t.h3,{id:"limitations",children:"Limitations"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Prerolls must be loaded after the player view is fully rendered and ready. This means attempting to load the ad in the ",(0,a.jsx)(t.code,{children:"viewDidLoad"})," lifecycle will result in a failed request."]}),"\n",(0,a.jsxs)(t.li,{children:["There is a known bug by Apple that throws runtime warnings concerning the main thread. If you run into this warning while using the IMA SDK, please check ",(0,a.jsx)(t.a,{href:"https://developer.apple.com/forums/thread/714467?answerId=734799022#734799022",children:"this thread for more information."})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"google-dai",children:"Google DAI"}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, the integration also supports server side ad insertion. To play a dynamically loaded advertisements, initialise the integration and pass it to the ",(0,a.jsx)(t.code,{children:"THEOplayer"})," instance the same way as above:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"let imaIntegration = GoogleIMAIntegrationFactory.createIntegration(on: self.theoplayer)\ntheoplayer.addIntegration(imaIntegration)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The only requirement is to pass a typed source to the player of type ",(0,a.jsx)(t.code,{children:"GoogleDAITypedSource"}),", with an ",(0,a.jsx)(t.code,{children:"ssai"})," configuration of ",(0,a.jsx)(t.code,{children:"GoogleDAIVodConfiguration"})," for VOD, or ",(0,a.jsx)(t.code,{children:"GoogleDAILiveConfiguration"})," for live playback."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'let daiConfig = GoogleDAIVodConfiguration(videoID: "tears-of-steel", contentSourceID: "2528370", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: ["npa": "1"])\nlet typedSource = GoogleDAITypedSource(ssai: daiConfig)\n'})}),"\n",(0,a.jsx)(t.p,{children:"or"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'let daiConfig = GoogleDAILiveConfiguration(assetKey: "sN_IYUG8STe1ZzhIIE_ksA", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: ["npa": "1"])\nlet typedSource = GoogleDAITypedSource(ssai: daiConfig)\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Additional DAI related APIs can be accessed via ",(0,a.jsx)(t.code,{children:"theoplayer.ads.dai"})," or ",(0,a.jsx)(t.code,{children:"imaIntegration.dai"}),".\nAd events can be monitored via ",(0,a.jsx)(t.code,{children:"theoplayer.ads.addEventListener"}),". For a list of event types, check the ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Structs/AdsEventTypes.html",children:"AdsEventTypes"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"extending-theoplayer-with-googlecast",children:"Extending THEOplayer with GoogleCast"}),"\n",(0,a.jsx)(t.p,{children:"Similar to the IMA integration, THEOplayer 5.0 provides the THEOplayer GoogleCast integration framework which is a standalone module that can optionally be added to your project to provide casting capabilities (aka assuming the sender application role) to chromecast devices."}),"\n",(0,a.jsx)(t.h3,{id:"installation-2",children:"Installation"}),"\n",(0,a.jsx)(t.p,{children:"Simply add the following to your project's Podfile:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"pod 'THEOplayer-Integration-GoogleCast', '~> 5'\n"})}),"\n",(0,a.jsx)(t.p,{children:"And import it to your source files with:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"import THEOplayerGoogleCastIntegration\n"})}),"\n",(0,a.jsx)(t.h3,{id:"usage-2",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["First thing to do is to set the context in your ",(0,a.jsx)(t.code,{children:"AppDelegate"})," file's ",(0,a.jsx)(t.code,{children:"didFinishLaunchingWithOptions"})," method:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"CastIntegrationHelper.setGCKCastContextSharedInstanceWithDefaultCastOptions()\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Second, you will need to provide some privacy permissions and network discovery allowances. For more information on this, please check the ",(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/docs/ios_sender/permissions_and_discovery",children:"following documentation about permissions and discovery."})]}),"\n",(0,a.jsxs)(t.p,{children:["After initialising your ",(0,a.jsx)(t.code,{children:"THEOplayer"})," instance, it's time to initialise the integration and pass it to the ",(0,a.jsx)(t.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"let castConfiguration: CastConfiguration = CastConfiguration(strategy: .auto)\nlet castIntegration: THEOplayerSDK.Integration = GoogleCastIntegrationFactory.createIntegration(on: self.theoplayer, with: castConfiguration)\ntheoplayer.addIntegration(castIntegration)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["For more extensive example on how to implement GoogleCast with THEOplayer, please check ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Native-GoogleCast",children:"this sample app"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/ios/index.html",children:"THEOplayer iOS SDK API reference"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Native-Basic",children:"THEOplayer iOS sample app with basic native playback"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Native-IMA",children:"THEOplayer iOS sample app with native Google IMA integration"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Native-GoogleCast",children:"THEOplayer iOS sample app with native Google Cast playback"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var i=n(67294);let a={},r=i.createContext(a);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);