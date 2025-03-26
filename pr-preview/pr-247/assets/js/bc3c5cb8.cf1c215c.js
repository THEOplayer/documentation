"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["88138"],{70532:function(e,n,o){o.r(n),o.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"external/iOS-Connector/Code/Yospace/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer/external/iOS-Connector/Code/Yospace/README.md","sourceDirName":"external/iOS-Connector/Code/Yospace","slug":"/connectors/ios/yospace/getting-started","permalink":"/documentation/pr-preview/pr-247/theoplayer/connectors/ios/yospace/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/iOS-Connector/blob/-/Code/Yospace/README.md","tags":[],"version":"current","frontMatter":{"slug":"/connectors/ios/yospace/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"ios","previous":{"title":"Yospace","permalink":"/documentation/pr-preview/pr-247/theoplayer/connectors/ios/yospace"},"next":{"title":"Sideloaded Subtitles","permalink":"/documentation/pr-preview/pr-247/theoplayer/connectors/ios/sideloaded-texttracks"}}'),r=o("85893"),s=o("50065");let a={slug:"/connectors/ios/yospace/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},i="THEOPlayer \uD83E\uDD1D Yospace",c={},l=[{value:"Installation",id:"installation",level:2},{value:"Swift Package Manager",id:"swift-package-manager",level:3},{value:"Cocoapods",id:"cocoapods",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Usage",id:"usage",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"theoplayer--yospace",children:"THEOPlayer \uD83E\uDD1D Yospace"})}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer-Connector-Yospace provides an integration between the THEOplayerSDK and Yospace to allow playback of server-side ad inserted streams."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.h3,{id:"swift-package-manager",children:(0,r.jsx)(n.a,{href:"https://swift.org/package-manager/",children:"Swift Package Manager"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In Xcode, install the Yospace connector by navigating to ",(0,r.jsx)(n.strong,{children:"File > Add Packages"})]}),"\n",(0,r.jsxs)(n.li,{children:["In the prompt that appears, select the iOS-Connector GitHub repository: ",(0,r.jsx)(n.code,{children:"https://github.com/THEOplayer/iOS-Connector"})]}),"\n",(0,r.jsx)(n.li,{children:"Select the version you want to use."}),"\n",(0,r.jsx)(n.li,{children:"Choose the Connector libraries you want to include in your app."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To support custom feature builds of THEOplayerSDK perform the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Clone this repository to your computer."}),"\n",(0,r.jsxs)(n.li,{children:["Use a ",(0,r.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/editing-a-package-dependency-as-a-local-package",children:"local override"})," of the ",(0,r.jsx)(n.code,{children:"theoplayer-sdk-ios"})," package by selecting the folder ",(0,r.jsx)(n.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios"})," in Finder and dragging it into the Project navigator of your Xcode project."]}),"\n",(0,r.jsxs)(n.li,{children:["Place your custom THEOplayerSDK.xcframework at ",(0,r.jsx)(n.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios/THEOplayerSDK.xcframework"}),". (It is also possible to place your xcframework somewhere else. In that case make sure to update the ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoSPM/theoplayer-sdk-ios/Package.swift",children:"Package.swift"})," manifest inside the your local override so that it points to your custom THEOplayer build)"]}),"\n",(0,r.jsxs)(n.li,{children:["If Xcode complains about a missing xcframework","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Choose ",(0,r.jsx)(n.code,{children:"File"})," > ",(0,r.jsx)(n.code,{children:"Packages"})," > ",(0,r.jsx)(n.code,{children:"Reset Package Caches"})," from the menu bar."]}),"\n",(0,r.jsxs)(n.li,{children:["If it is still not working, make sure to remove any ",(0,r.jsx)(n.code,{children:"THEOplayerSDK.xcframework"})," inclusions that you manually installed before installing this connector package."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"cocoapods",children:(0,r.jsx)(n.a,{href:"https://guides.cocoapods.org/using/getting-started.html#getting-started",children:"Cocoapods"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a Podfile if you don't already have one. From the root of your project directory, run the following command: ",(0,r.jsx)(n.code,{children:"pod init"})]}),"\n",(0,r.jsxs)(n.li,{children:["To your Podfile, add the Yospace connector pod that you want to use in your app: ",(0,r.jsx)(n.code,{children:"pod 'THEOplayer-Connector-Yospace'"})]}),"\n",(0,r.jsx)(n.li,{children:"Add the following post-install hook in your Podfile:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"post_install do |installer|\n    custom_framework_path = \"#{installer.sandbox.root}/YOAdManagement-Release/YOAdManagement.xcframework\"\n\n    installer.pods_project.targets.each do |target|\n      if target.name == 'THEOplayer-Connector-Yospace'\n        framework_build_phase = target.frameworks_build_phase\n        file_ref = installer.pods_project.new_file(custom_framework_path)\n\n        framework_build_phase.add_file_reference(file_ref)\n      end\n    end\nend\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Check the Dependencies section below to get information on how to obtain the ",(0,r.jsx)(n.code,{children:"YOAdManagement.xcframework"})," as a pod.\n4. Install the pods using ",(0,r.jsx)(n.code,{children:"pod install"})," , then open your ",(0,r.jsx)(n.code,{children:".xcworkspace"})," file to see the project in Xcode."]}),"\n",(0,r.jsx)(n.p,{children:"To support custom feature builds of THEOplayerSDK perform the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Clone this repository to your computer."}),"\n",(0,r.jsxs)(n.li,{children:["Use a ",(0,r.jsx)(n.a,{href:"https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine",children:"local override"})," of the ",(0,r.jsx)(n.code,{children:"THEOplayerSDK-basic"})," pod by adding the following line to your projects Podfile: ",(0,r.jsx)(n.code,{children:"pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'"})," and make sure the path points to the ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoPod",children:"TheoPod folder"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsx)(n.p,{children:"The THEOPlayer Yospace connector has two dependency frameworks: THEOplayerSDK and YOAdManagement."}),"\n",(0,r.jsx)(n.p,{children:"THEOplayerSDK is added as a dependency on both Cocoapods and SPM and will be fetched by each dependency manager.\nYOAdManagement is published as a private pod hosted on Artifactory by jfrog. In order to get the framework you will need to:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Setup a Yospace developer account at ",(0,r.jsx)(n.a,{href:"https://www.yospace.com/developer",children:"https://www.yospace.com/developer"})]}),"\n",(0,r.jsxs)(n.li,{children:["Login to the Yospace Apple docs ",(0,r.jsx)(n.a,{href:"https://developer.yospace.com/sdk-documentation/apple/userguide/latest/en/index-en.html",children:"https://developer.yospace.com/sdk-documentation/apple/userguide/latest/en/index-en.html"})]}),"\n",(0,r.jsxs)(n.li,{children:["Follow the instructions to setup the artifactory, authenticate, and fetch the framework at ",(0,r.jsx)(n.a,{href:"https://developer.yospace.com/sdk-documentation/apple/userguide/latest/en/prerequisites.html",children:"https://developer.yospace.com/sdk-documentation/apple/userguide/latest/en/prerequisites.html"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Import the ",(0,r.jsx)(n.code,{children:"THEOplayerConnectorYospace"})," module"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"import THEOplayerConnectorYospace\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"SourceDescription"})," that defines the Yospace stream:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'let streamType: YospaceStreamType = .live\nlet typedSource: TypedSource = .init(\n    src: "yospace_live_stream_url",\n    type: "application/x-mpegurl",\n    ssai: YospaceServerSideAdInsertionConfiguration(streamType: streamType)\n)\nlet source: SourceDescription = SourceDescription(source: typedSource)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"YospaceConnector"})," that uses a ",(0,r.jsx)(n.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"let theoplayer: THEOplayer = .init()\nlet connector: YospaceConnector = .init(player: theoplayer)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Hold a reference to your connector instance by storing it as a property. Keeping it inline will get it auto-released from memory. Once the connector is released from memory it will reset and unload autonomously."]}),"\n",(0,r.jsx)(n.p,{children:"Set the source and play. There are 2 ways to set a Yospace source:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Through the API provided by the YospaceConnector:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"connector.setupYospaceSession(sourceDescription: source)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The connector will then fire a ",(0,r.jsx)(n.code,{children:"SESSION_AVAILABLE"})," event once the setup is successful. The client can track this event to start playback:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"_ = connector.addEventListener(type: YospaceEventTypes.SESSION_AVAILABLE, listener: { event in\n    theoplayer.play()\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"setupYospaceSession"})," API, the connector will throw an error in case the ",(0,r.jsx)(n.code,{children:"TypedSource"})," is not of type ",(0,r.jsx)(n.code,{children:"YospaceServerSideAdInsertionConfiguration"}),"."]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Through the player:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"theoplayer.source = source\ntheoplayer.play()\n"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return a}});var t=o(67294);let r={},s=t.createContext(r);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);