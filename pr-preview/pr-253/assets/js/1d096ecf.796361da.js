"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["65617"],{98872:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"external/iOS-Connector/Code/Conviva/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer_versioned_docs/version-v7/external/iOS-Connector/Code/Conviva/README.md","sourceDirName":"external/iOS-Connector/Code/Conviva","slug":"/connectors/ios/conviva/getting-started","permalink":"/documentation/pr-preview/pr-253/theoplayer/v7/connectors/ios/conviva/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/iOS-Connector/blob/-/Code/Conviva/README.md","tags":[],"version":"v7","frontMatter":{"slug":"/connectors/ios/conviva/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"ios","previous":{"title":"Conviva","permalink":"/documentation/pr-preview/pr-253/theoplayer/v7/connectors/ios/conviva"},"next":{"title":"Examples","permalink":"/documentation/pr-preview/pr-253/theoplayer/v7/connectors/ios/conviva/examples"}}'),r=o("85893"),i=o("50065");let s={slug:"/connectors/ios/conviva/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},a="THEOPlayer \uD83E\uDD1D Conviva",c={},l=[{value:"Installation",id:"installation",level:2},{value:"Swift Package Manager",id:"swift-package-manager",level:3},{value:"Cocoapods",id:"cocoapods",level:3},{value:"Usage",id:"usage",level:2},{value:"Lifecycle",id:"lifecycle",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"theoplayer--conviva",children:"THEOPlayer \uD83E\uDD1D Conviva"})}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer-Connector-Conviva for iOS provides an integration between the THEOplayerSDK and ConvivaSDK. It connects to the Conviva backend and reports events fired from THEOplayer instances."}),"\n",(0,r.jsxs)(n.p,{children:["For example xcode projects with this connector see ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v7/connectors/ios/conviva/examples",children:"Conviva-Examples"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Verizon Media"})}),"\n",(0,r.jsxs)(n.p,{children:["For custom THEOplayerSDK builds with the VerizonMedia feature, use the ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v7/connectors/ios/conviva-verizonmedia/getting-started",children:"Conviva-VerizonMedia"})," connector."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.h3,{id:"swift-package-manager",children:(0,r.jsx)(n.a,{href:"https://swift.org/package-manager/",children:"Swift Package Manager"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In Xcode, install the Conviva libraries by navigating to ",(0,r.jsx)(n.strong,{children:"File > Add Packages"})]}),"\n",(0,r.jsxs)(n.li,{children:["In the prompt that appears, select the iOS-Connector GitHub repository: ",(0,r.jsx)(n.code,{children:"https://github.com/THEOplayer/iOS-Connector"})]}),"\n",(0,r.jsx)(n.li,{children:"Select the version you want to use."}),"\n",(0,r.jsx)(n.li,{children:"Choose the Connector libraries you want to include in your app."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To support custom feature builds of THEOplayerSDK perform the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Clone this repository to your computer."}),"\n",(0,r.jsxs)(n.li,{children:["Use a ",(0,r.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/editing-a-package-dependency-as-a-local-package",children:"local override"})," of the ",(0,r.jsx)(n.code,{children:"theoplayer-sdk-ios"})," package by selecting the folder ",(0,r.jsx)(n.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios"})," in Finder and dragging it into the Project navigator of your Xcode project."]}),"\n",(0,r.jsxs)(n.li,{children:["Place your custom THEOplayerSDK.xcframework at ",(0,r.jsx)(n.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios/THEOplayerSDK.xcframework"}),". (It is also possible to place your xcframework somewhere else. In that case make sure to update the ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoSPM/theoplayer-sdk-ios/Package.swift",children:"Package.swift"})," manifest inside the your local override so that it points to your custom THEOplayer build)"]}),"\n",(0,r.jsxs)(n.li,{children:["If Xcode complains about a missing xcframework","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Choose ",(0,r.jsx)(n.code,{children:"File"})," > ",(0,r.jsx)(n.code,{children:"Packages"})," > ",(0,r.jsx)(n.code,{children:"Reset Package Caches"})," from the menu bar."]}),"\n",(0,r.jsxs)(n.li,{children:["If it is still not working, make sure to remove any ",(0,r.jsx)(n.code,{children:"THEOplayerSDK.xcframework"})," inclusions that you manually installed before installing this THEOplayer-Connector-Conviva package."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"cocoapods",children:(0,r.jsx)(n.a,{href:"https://guides.cocoapods.org/using/getting-started.html#getting-started",children:"Cocoapods"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a Podfile if you don't already have one. From the root of your project directory, run the following command: ",(0,r.jsx)(n.code,{children:"pod init"})]}),"\n",(0,r.jsxs)(n.li,{children:["To your Podfile, add the Conviva connector pods that you want to use in your app: ",(0,r.jsx)(n.code,{children:"pod 'THEOplayer-Connector-Conviva'"})]}),"\n",(0,r.jsxs)(n.li,{children:["Install the pods using ",(0,r.jsx)(n.code,{children:"pod install"})," , then open your ",(0,r.jsx)(n.code,{children:".xcworkspace"})," file to see the project in Xcode."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To support custom feature builds of THEOplayerSDK perform the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Clone this repository to your computer."}),"\n",(0,r.jsxs)(n.li,{children:["Use a ",(0,r.jsx)(n.a,{href:"https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine",children:"local override"})," of the ",(0,r.jsx)(n.code,{children:"THEOplayerSDK-basic"})," pod by adding the following line to your projects Podfile: ",(0,r.jsx)(n.code,{children:"pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'"})," and make sure the path points to the ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoPod",children:"TheoPod folder"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Import the ",(0,r.jsx)(n.code,{children:"THEOplayerConnectorConviva"})," module"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"import THEOplayerConnectorConviva\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"ConvivaConfiguration"})," that contains the info on how to connect to your conviva endpoint:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'let configuration = ConvivaConfiguration(\n    customerKey: "put your customer key here",\n    gatewayURL: " put your  gateway URL here ",\n    logLevel: .LOGLEVEL_FUNC\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"ConvivaConnector"})," that uses this ",(0,r.jsx)(n.code,{children:"configuration"})," and your ",(0,r.jsx)(n.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"let connector = ConvivaConnector(\n    configuration: configuration,\n    player: yourTHEOplayer\n)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For each asset you play, the ",(0,r.jsx)(n.strong,{children:"asset name"})," needs to be reported to Conviva which you can do by providing the asset name as a ",(0,r.jsx)(n.code,{children:"title"})," field inside your ",(0,r.jsx)(n.code,{children:"SourceDescription's metadata"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'let mySource = SourceDescription(source: source, metadata: MetadataDescription(metadataKeys: ["title": "your_asset_name"]))\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, the ",(0,r.jsx)(n.strong,{children:"asset name"})," can be provided as contentInfo (",(0,r.jsx)(n.code,{children:"CIS_SSDK_METADATA_ASSET_NAME"}),") using the setContentInfo method, along with other metadata. For example to report the ",(0,r.jsx)(n.strong,{children:"viewer's ID"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'let contentInfo = [ \n   CIS_SSDK_METADATA_VIEWER_ID: "your_viewer_id"\n]\nconnector.setContentInfo(contentInfo)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important note"}),": setting a new source on the player will reset previously set contentInfo. Make sure to use the ",(0,r.jsx)(n.code,{children:"setContentInfo"})," method after receiving the SOURCE_CHANGE event."]}),"\n",(0,r.jsx)(n.h2,{id:"lifecycle",children:"Lifecycle"}),"\n",(0,r.jsx)(n.p,{children:"Hold a reference to your connector. Once the connector is released from memory it will clean up itself and stop reporting to Conviva."})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return s}});var t=o(67294);let r={},i=t.createContext(r);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);