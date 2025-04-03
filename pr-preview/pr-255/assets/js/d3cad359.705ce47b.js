"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["36427"],{22897:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"how-to-guides/cast/chromecast/introduction","title":"Introduction","description":"In this section you will learn everything about how THEOplayer works with Chromecast.","source":"@site/theoplayer/how-to-guides/03-cast/01-chromecast/00-introduction.md","sourceDirName":"how-to-guides/03-cast/01-chromecast","slug":"/how-to-guides/cast/chromecast/introduction","permalink":"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/cast/chromecast/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/03-cast/01-chromecast/00-introduction.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"roku","previous":{"title":"Segment","permalink":"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/analytics/segment"},"next":{"title":"Connecting from custom Sender applications","permalink":"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications"}}'),a=n("85893"),o=n("50065");let r={},s="Introduction",c={},l=[{value:"API",id:"api",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android SDK",id:"android-sdk",level:3},{value:"iOS SDK",id:"ios-sdk",level:3},{value:"Installation",id:"installation",level:4},{value:"Cocoapods",id:"cocoapods",level:5},{value:"Swift Package Manager",id:"swift-package-manager",level:5},{value:"Import",id:"import",level:4},{value:"Usage",id:"usage",level:4},{value:"Related articles",id:"related-articles",level:2},{value:"Sender Applications vs Receiver Applications",id:"sender-applications-vs-receiver-applications",level:2},{value:"Whitelisting Receiver Applications",id:"whitelisting-receiver-applications",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,a.jsx)(t.p,{children:"In this section you will learn everything about how THEOplayer works with Chromecast."}),"\n",(0,a.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,a.jsx)(t.p,{children:"As a developer, you might need to use the THEOplayer Chromecast API to build a custom Chromecast UI and UX,\nor to dispatch an event to an analytics service, or for workflow purposes."}),"\n",(0,a.jsx)(t.p,{children:"The Chromecast interface is a sub-interface of the Cast interface on THEOplayer Web and on both mobile (Android & iOS) SDKs."}),"\n",(0,a.jsx)(t.p,{children:"The API reference is available through the following links:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Web SDK: ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/Chromecast.html",children:"Chromecast"}),", which inherits from ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/VendorCast.html",children:"VendorCast"})]}),"\n",(0,a.jsxs)(t.li,{children:["Android SDK: ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/cast/chromecast/Chromecast.html",children:"Chromecast"})]}),"\n",(0,a.jsxs)(t.li,{children:["iOS SDK: ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v9/api-reference/ios/Protocols/Chromecast.html",children:"Chromecast"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Use the API as demonstrated below:"}),"\n",(0,a.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// const player = new THEOplayer.Player(...)\nconst chromecastState = player.cast.chromecast.state;\nconst isCasting = player.cast.chromecast.casting; // true or false\n// ...\n// if (want to start Chromecast)\nplayer.cast.chromecast.start();\n// ...\n// if (want to stop Chromecast)\nplayer.cast.chromecast.stop();\n// ...\nif (chromecastState != 'unavailable') {\n  // Chromecast is possible\n  player.cast.chromecast.addEventListener('statechange', function (event) {\n    switch (event.state) {\n      case 'connecting':\n        // show Chromecast trying-to-connect icon\n        break;\n      case 'available':\n        // show Chromecast available icon\n        break;\n      case 'connected':\n        // show Chromecast connected icon\n        break;\n      case 'unavailable':\n        // hide Chromecast icon\n        break;\n    }\n  });\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"// Verify the Cast dependency is present in your build.gradle file.\n// Add Cast Integration to the player.\nCastIntegration castIntegration = CastIntegrationFactory.createCastIntegration(theoplayerView);\ntheoplayerView.getPlayer().addIntegration(castIntegration);\n\n// For actions you can use both the THEOplayerView and the CastIntegration object.\ntheoplayerView.getCast().getChromecast().start();\n// or\ncastIntegration.start();\n\n// For listening to events nothing changed.\ntheoplayerView.getCast().getChromecast().addEventListener(ChromecastEventTypes.STATECHANGE, event -> {\n    // See Android section.\n});\n"})}),"\n",(0,a.jsx)(t.h3,{id:"ios-sdk",children:"iOS SDK"}),"\n",(0,a.jsxs)(t.p,{children:["To use Google Cast, also known as Chromecast, with the THEOplayer iOS SDK, the ",(0,a.jsx)(t.strong,{children:"THEOplayer GoogleCast Integration"})," should be integrated. The integration is a lightweight module written in Swift, to enable casting playback from an iOS device to a receiver application."]}),"\n",(0,a.jsx)(t.h4,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.p,{children:"The THEOplayer GoogleCast integration is published on the following package managers:"}),"\n",(0,a.jsx)(t.h5,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,a.jsx)(t.p,{children:"Simply add the following to your project's Podfile:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ruby",children:"pod 'THEOplayer-Integration-GoogleCast'\n"})}),"\n",(0,a.jsx)(t.p,{children:"The above entry automatically manages the fetching of the GoogleCast SDK dependency."}),"\n",(0,a.jsx)(t.p,{children:"In case where the integrator would want to manage fetching a specific version of the GoogleCast SDK, then replace the Podfile entry with:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ruby",children:"pod 'THEOplayer-Integration-GoogleIMA/Base'\npod 'google-cast-sdk-dynamic-xcframework', '4.8.3' # specify the desired version\n"})}),"\n",(0,a.jsx)(t.h5,{id:"swift-package-manager",children:"Swift Package Manager"}),"\n",(0,a.jsxs)(t.p,{children:["Please check the ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-apple/README.md#installation",children:"installation instruction found here"})]}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"This will not get the GoogleCast SDK, but only the THEOplayer GoogleCast integration. You need to manage fetching the GoogleCast SDK dependency."})}),"\n",(0,a.jsx)(t.h4,{id:"import",children:"Import"}),"\n",(0,a.jsx)(t.p,{children:"Import the framework in the source files where it will be used:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"import THEOplayerGoogleCastIntegration\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You will also need the THEOplayer core SDK since the THEOplayer GoogleCast integration extends its functionality.\n",(0,a.jsx)("br",{}),"To import the THEOplayer core SDK framework add:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"import THEOplayerSDK\n"})}),"\n",(0,a.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["First set the context in your ",(0,a.jsx)(t.code,{children:"AppDelegate"})," file's ",(0,a.jsx)(t.code,{children:"didFinishLaunchingWithOptions"})," method:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"THEOplayerGoogleCastIntegration.CastIntegrationHelper.setGCKCastContextSharedInstanceWithDefaultCastOptions()\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The above method will set the options for ",(0,a.jsx)(t.code,{children:"GCKCastContext"})," with a CAF receiver application. If a custom context must be set, instead of calling the ",(0,a.jsx)(t.code,{children:"setGCKCastContextSharedInstanceWithDefaultCastOptions"})," method, the implementation should specify an ",(0,a.jsx)(t.code,{children:"GCKDiscoveryCriteria"})," in the context with an ",(0,a.jsx)(t.code,{children:"applicationID"})," parameter. You can find the default THEOplayer CAF V3 default application ID at ",(0,a.jsx)(t.code,{children:"CastIntegrationHelper.defaultV3ReceiverApplicationID"}),"."]})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"The THEOplayer Google Cast integration only supports CAF receivers."})}),"\n",(0,a.jsxs)(t.p,{children:["Second, you will need to provide some privacy permissions and network discovery allowances. For more information on this, please check the ",(0,a.jsx)(t.a,{href:"https://developers.google.com/cast/docs/ios_sender/permissions_and_discovery",children:"following documentation about permissions and discovery."})]}),"\n",(0,a.jsxs)(t.p,{children:["After initializing your ",(0,a.jsx)(t.code,{children:"THEOplayer"})," instance, initialize the integration and pass it to the ",(0,a.jsx)(t.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'let configBuilder = THEOplayerConfigurationBuilder()\nconfigBuilder.license = "your_theoplayer_license"\nlet theoplayer = THEOplayer(configuration: configBuilder.build()\n\nlet castConfiguration: CastConfiguration = CastConfiguration(strategy: .auto)\nlet castIntegration: THEOplayerSDK.Integration = GoogleCastIntegrationFactory.createIntegration(on: theoplayer, with: castConfiguration)\ntheoplayer.addIntegration(castIntegration)\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Additional APIs can be found on the ",(0,a.jsx)(t.code,{children:"castIntegration"})," or ",(0,a.jsx)(t.code,{children:"theoplayer.cast.chromecast"})," endpoints."]})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)("br",{}),"For more extensive example on how to implement GoogleCast with THEOplayer, please check ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Native-GoogleCast",children:"this sample app"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications",children:"Connecting from custom Sender applications"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/cast/chromecast/debugging",children:"Debugging"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream",children:"How to configure a different stream to Chromecast"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/cast/chromecast/sending-messages-from-to-sender-to-from-receiver",children:"Sending messages from/to Sender to/from Receiver"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast",children:"Pass subtitle selection on to Chromecast"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",children:"Enable Chromecast on the Sender"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"sender-applications-vs-receiver-applications",children:"Sender Applications vs Receiver Applications"}),"\n",(0,a.jsx)(t.p,{children:"When a viewer is streaming through a Chromecast device, they are actually casting content from a sender application (e.g. an Android application) to a receiver application. A sender application informs a physical Chromecast device which receiver application it should load through an application ID."}),"\n",(0,a.jsxs)(t.p,{children:["If you have implemented THEOplayer in your sender application, you can ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender",children:"enable Chromecast"}),". Furthermore, you can also ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender#custom-receiver-app",children:"specify the application ID"})," in your sender application."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Casting approaches",src:n(95845).Z+"",title:"Casting approaches",width:"1056",height:"535"})}),"\n",(0,a.jsx)(t.p,{children:"By specifying the application ID, you implicitly connect it with a type of receiver application. The following three types of receiver applications are common:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Maintainer"}),(0,a.jsx)(t.th,{children:"Info"}),(0,a.jsx)(t.th,{children:"Benefits"}),(0,a.jsx)(t.th,{children:"Disadvantages"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Default THEOplayer Receiver Application"}),(0,a.jsx)(t.td,{children:"THEOplayer"}),(0,a.jsxs)(t.td,{children:["This is the default receiver application THEOplayer SDKs will connect with. The app ID of this default THEOplayer receiver application is ",(0,a.jsx)(t.code,{children:"8E80B9CE"}),"."]}),(0,a.jsx)(t.td,{children:"You (i.e. the developer) do not need to do anything extra on the Chromecast receiver application side. You don't need to create a Chromecast receiver, you don't need to register it at, ... - it just works."}),(0,a.jsx)(t.td,{children:"You are limited w.r.t. customizing the UI and integrating custom logic."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Custom THEOplayer Receiver Application"}),(0,a.jsx)(t.td,{children:"Developer + THEOplayer"}),(0,a.jsxs)(t.td,{children:["This is a custom receiver application you can build, and where you integrate the ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-255/theoplayer/getting-started/sdks/chromecast/getting-started",children:"THEOplayer Chromecast SDK"}),"."]}),(0,a.jsx)(t.td,{children:"You (i.e. the developer) can adjust the look and feel, and integrate custom logic."}),(0,a.jsx)(t.td,{children:"You need to create a Chromecast receiver, register it, maintain it, ..."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Customer Receiver Application"}),(0,a.jsx)(t.td,{children:"Developer"}),(0,a.jsx)(t.td,{children:"This is a custom receiver application you can build, but without using the THEOplayer Chromecast SDK."}),(0,a.jsx)(t.td,{children:"The THEOplayer Chromecast Receiver SDK is not a dependency."}),(0,a.jsx)(t.td,{children:"You are responsible for building and maintaining the receiver application, and its connection with the various sender applications."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"whitelisting-receiver-applications",children:"Whitelisting Receiver Applications"}),"\n",(0,a.jsxs)(t.p,{children:["Streaming services and products often require you to whitelist domain names to allow playback.\nWhen viewers are casting content to a Chromecast receiver application, your Chromecast device\nwill actually stream the content on a domain name. In other words: CORS and whitelisting/blacklisting policies do apply to Chromecast sessions.\nEnsure that you've whitelisted the domain name which hosts your Chromecast receiver application. (You can look up the domain name of your receiver application at ",(0,a.jsx)(t.a,{href:"https://cast.google.com/publish/#/overview",children:"https://cast.google.com/publish/#/overview"}),".)"]}),"\n",(0,a.jsxs)(t.p,{children:["If you're using the Default THEOplayer Receiver Application you may whitelist ",(0,a.jsx)(t.code,{children:"https://d3ojqkc95d8mrd.cloudfront.net/"}),"."]})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},95845:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/casting-approaches-45dc2983f20d11409d27d3248b57a6ef.png"},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var i=n(67294);let a={},o=i.createContext(a);function r(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);