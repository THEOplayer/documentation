"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["43308"],{48272:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>r});var t=JSON.parse('{"id":"how-to-guides/analytics/conviva/conviva-connector","title":"Conviva Connector for VideoAnalytics & AdsAnalytics","description":"This article describes on how to integrate Conviva for Video Analytics and Ads Analytics offered as a connector with THEOplayer SDK.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/02-analytics/05-conviva/02-conviva-connector.md","sourceDirName":"how-to-guides/02-analytics/05-conviva","slug":"/how-to-guides/analytics/conviva/conviva-connector","permalink":"/documentation/pr-preview/pr-251/theoplayer/v4/how-to-guides/analytics/conviva/conviva-connector","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/02-analytics/05-conviva/02-conviva-connector.md","tags":[],"version":"v4","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-251/theoplayer/v4/how-to-guides/analytics/conviva/introduction"},"next":{"title":"Custom Analytics Integration","permalink":"/documentation/pr-preview/pr-251/theoplayer/v4/how-to-guides/analytics/custom-analytics-integration"}}'),i=o("85893"),a=o("50065");let s={},r="Conviva Connector for VideoAnalytics & AdsAnalytics",c={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Web SDK",id:"web-sdk",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Step 1",id:"step-1",level:4},{value:"Step 2",id:"step-2",level:4},{value:"Notes",id:"notes",level:4},{value:"Usage with Yospace connector",id:"usage-with-yospace-connector",level:3},{value:"Android SDK",id:"android-sdk",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Installation",id:"installation-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Setting up the Conviva Connector",id:"setting-up-the-conviva-connector",level:4},{value:"Setting asset name",id:"setting-asset-name",level:4},{value:"Destroying / Cleaning up",id:"destroying--cleaning-up",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Swift Package Manager",id:"swift-package-manager",level:4},{value:"Cocoapods",id:"cocoapods",level:4},{value:"Usage",id:"usage-2",level:3},{value:"Related links:",id:"related-links",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"conviva-connector-for-videoanalytics--adsanalytics",children:"Conviva Connector for VideoAnalytics & AdsAnalytics"})}),"\n",(0,i.jsx)(n.p,{children:"This article describes on how to integrate Conviva for Video Analytics and Ads Analytics offered as a connector with THEOplayer SDK."}),"\n",(0,i.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Tizen"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"webOS"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["A THEOplayer build with a valid license is required. You can","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["either install the ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/theoplayer",children:"THEOplayer SDK through NPM"}),","]}),"\n",(0,i.jsxs)(n.li,{children:["or generate your custom THEOplayer SDK through the ",(0,i.jsx)(n.a,{href:"https://portal.theoplayer.com/login",children:"THEOportal"})," (this includes also a license)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Follow the ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-251/theoplayer/v4/getting-started/sdks/web/getting-started",children:"Getting started on Web"})," guide to include your player on a simple HTML page."]}),"\n",(0,i.jsx)(n.li,{children:"For setting up a valid Conviva session, you must have access to a Conviva developer account with access to a debug or production key."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Install using your favorite package manager for Node (such as npm or yarn):"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install via npm"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"npm install @theoplayer/conviva-connector-web"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install via yarn"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"yarn add @theoplayer/conviva-connector-web"})}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h4,{id:"step-1",children:"Step 1"}),"\n",(0,i.jsx)(n.p,{children:"Define the Conviva metadata and configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const convivaMetadata = {\n  ['Conviva.assetName']: 'ASSET_NAME_GOES_HERE',\n  ['Conviva.streamUrl']: 'CUSTOMER_STREAM_URL_GOES_HERE',\n  ['Conviva.streamType']: 'STREAM_TYPE_GOES_HERE', // VOD or LIVE\n  ['Conviva.applicationName']: 'APPLICATION_NAME_GOES_HERE',\n  ['Conviva.viewerId']: 'VIEWER_ID_GOES_HERE',\n};\n\nconst convivaConfig = {\n  debug: false,\n  gatewayUrl: 'CUSTOMER_GATEWAY_GOES_HERE',\n  customerKey: 'CUSTOMER_KEY_GOES_HERE', // Can be a test or production key.\n};\n"})}),"\n",(0,i.jsx)(n.h4,{id:"step-2",children:"Step 2"}),"\n",(0,i.jsx)(n.p,{children:"Using these configs you can create the Conviva connector with THEOplayer. Alternatives:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add as a regular script:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="path/to/conviva-connector.umd.js"><\/script>\n<script type="text/javascript">\n  const player = new THEOplayer.Player(element, configuration);\n  const convivaIntegration = new THEOplayerConvivaConnector.ConvivaConnector(player, convivaMetadata, convivaConfig);\n<\/script>\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add as an ES2015 module:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<script type=\"module\">\n  import { ConvivaConnector } from 'path/to/conviva-connector.esm.js';\n  const player = new THEOplayer.Player(element, configuration);\n  const convivaIntegration = new ConvivaConnector(player, convivaMetadata, convivaConfig);\n<\/script>\n"})}),"\n",(0,i.jsx)(n.p,{children:"The Conviva connector is now ready to start a session once THEOplayer starts playing a source."}),"\n",(0,i.jsx)(n.h4,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can download the latest Conviva library from ",(0,i.jsx)(n.a,{href:"https://community.conviva.com/site/global/home/p_home.gsp",children:"Conviva Developer Community"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"You can use any version of Conviva library supporting Video and Ads Analytics."}),"\n",(0,i.jsxs)(n.li,{children:["The THEOplayer instance (variable ",(0,i.jsx)(n.code,{children:"player"}),") needs to be initialized before Conviva connector."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"convivaConfig"})," contains the details of the Conviva configuration and ",(0,i.jsx)(n.code,{children:"convivaMetadata"})," is used to add manually metadata associated to that content."]}),"\n",(0,i.jsx)(n.li,{children:"The Conviva connector has full support for Video and Ad Analytics offered by Conviva. This connector can be maintained and managed by across teams as it is built using all public APIs of THEOplayer and Conviva. Any new updates or changes can be easily modified and customized as per customer requirements. (There is no dependency on the THEOplayer or Conviva library version)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"usage-with-yospace-connector",children:"Usage with Yospace connector"}),"\n",(0,i.jsxs)(n.p,{children:["If you have a Yospace SSAI stream and want to also report ad related events to Conviva, you can use this connector in combination with the Yospace connector: ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@theoplayer/yospace-connector-web",children:"@theoplayer/yospace-connector-web"})]}),"\n",(0,i.jsx)(n.p,{children:"After configuring the Yospace connector, you can link it to the Conviva connector:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"async function setupYospaceConnector(player) {\n  const source = {\n    sources: [\n      {\n        src: 'https://csm-e-sdk-validation.bln1.yospace.com/csm/extlive/yospace02,hlssample42.m3u8?yo.br=true&yo.av=4',\n        ssai: {\n          integration: 'yospace',\n        },\n      },\n    ],\n  };\n\n  // Create the connectors.\n  const yospace = new THEOplayerYospaceConnector.YospaceConnector(player);\n  const conviva = new THEOplayerConvivaConnector.ConvivaConnector(player, convivaMetadata, convivaConfig);\n\n  // Link ConvivaConnector with the YospaceConnector.\n  conviva.connect(yospace);\n\n  // Set the source.\n  await yospace.setupYospaceSession(source);\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The THEOplayer Android SDK Conviva Connector requires the application to import the THEOplayer Android SDK since the connector relies on its public APIs. For more details, check out our ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-251/theoplayer/getting-started/sdks/android/getting-started",children:"Getting started on Android"})," or ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-251/theoplayer/v4/getting-started/sdks/android/getting-started",children:"Getting started on Legacy Android SDK (4.12.x)"})," guide."]}),"\n",(0,i.jsx)(n.li,{children:"For setting up a valid Conviva session, you must have access to a Conviva developer account with access to a debug or production key."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["After setting up the THEOplayer Android SDK, in your module level ",(0,i.jsx)(n.code,{children:"build.gradle"})," file add the THEOplayer Android SDK Conviva Connector and the Conviva SDK:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"implementation 'com.theoplayer.android-connector:conviva:+'\nimplementation 'com.conviva.sdk:conviva-core-sdk:4.0.23'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,i.jsx)(n.h4,{id:"setting-up-the-conviva-connector",children:"Setting up the Conviva Connector"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'val theoplayerView: THEOplayerView\n\nprivate fun setupConviva() {\n    val customerKey = "your_conviva_customer_key"\n    val gatewayUrl = "your_conviva_debug_gateway_url"\n\n    val settings = HashMap<String, Any>()\n    settings[ConvivaSdkConstants.GATEWAY_URL] = gatewayUrl\n    settings[ConvivaSdkConstants.LOG_LEVEL] = SystemSettings.LogLevel.DEBUG\n\n    convivaConnector = ConvivaConnector(applicationContext, theoplayerView.player, customerKey, settings)\n    convivaConnector?.setViewerId("viewer ID")\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"setting-asset-name",children:"Setting asset name"}),"\n",(0,i.jsx)(n.p,{children:"Whenever a new source is set on the player, follow it by setting the new asset name. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'theoplayerView.player.source = sourceDescription\nconvivaConnector?.setAssetName("BigBuckBunny with Google IMA ads")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"destroying--cleaning-up",children:"Destroying / Cleaning up"}),"\n",(0,i.jsxs)(n.p,{children:["To release listeners and resources, call ",(0,i.jsx)(n.code,{children:"destroy"})," whenever the Conviva Connector is no longer needed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"convivaConnector?.destroy()\n"})}),"\n",(0,i.jsx)(n.p,{children:"After destroying a Conviva Connector instance, it can no longer be used. If needed, a new instance should be created."}),"\n",(0,i.jsx)(n.h2,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(n.h3,{id:"installation-2",children:"Installation"}),"\n",(0,i.jsx)(n.h4,{id:"swift-package-manager",children:"Swift Package Manager"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In Xcode, install the Conviva libraries by navigating to ",(0,i.jsx)(n.strong,{children:"File > Add Packages"})]}),"\n",(0,i.jsxs)(n.li,{children:["In the prompt that appears, select the iOS-Connector GitHub repository: ",(0,i.jsx)(n.code,{children:"https://github.com/THEOplayer/iOS-Connector"})]}),"\n",(0,i.jsx)(n.li,{children:"Select the version you want to use."}),"\n",(0,i.jsx)(n.li,{children:"Choose the Connector libraries you want to include in your app."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To support custom feature builds of THEOplayerSDK perform the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Clone the ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/iOS-Connector/tree/main/Code/Conviva",children:"THEOplayer Conviva connector repository"})," to your computer."]}),"\n",(0,i.jsxs)(n.li,{children:["Use a ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/editing-a-package-dependency-as-a-local-package",children:"local override"})," of the theoplayer-sdk-ios package by selecting the folder ",(0,i.jsx)(n.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios"})," in Finder and dragging it into the Project navigator of your Xcode project."]}),"\n",(0,i.jsxs)(n.li,{children:["Place your custom ",(0,i.jsx)(n.code,{children:"THEOplayerSDK.xcframework"})," at ",(0,i.jsx)(n.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios/THEOplayerSDK.xcframework"}),". (It is also possible to place your xcframework somewhere else. In that case make sure to update the ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/main/Helpers/TheoSPM/theoplayer-sdk-ios/Package.swift",children:"Package.swift"})," manifest inside your local override so that it points to your custom THEOplayer build)"]}),"\n",(0,i.jsxs)(n.li,{children:["If Xcode complains about a missing xcframework","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Choose ",(0,i.jsx)(n.code,{children:"File"})," > ",(0,i.jsx)(n.code,{children:"Packages"})," > ",(0,i.jsx)(n.code,{children:"Reset Package Caches"})," from the menu bar."]}),"\n",(0,i.jsxs)(n.li,{children:["If it is still not working, make sure to remove any ",(0,i.jsx)(n.code,{children:"THEOplayerSDK.xcframework"})," inclusions that you manually installed before installing this THEOplayer-Connector-Conviva package."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a Podfile if you don't already have one. From the root of your project directory, run the following command: ",(0,i.jsx)(n.code,{children:"pod init"})]}),"\n",(0,i.jsxs)(n.li,{children:["To your Podfile, add the Conviva connector pods that you want to use in your app: ",(0,i.jsx)(n.code,{children:"pod 'THEOplayer-Connector-Conviva'"})]}),"\n",(0,i.jsxs)(n.li,{children:["Install the pods using ",(0,i.jsx)(n.code,{children:"pod install"}),", then open your ",(0,i.jsx)(n.code,{children:".xcworkspace"})," file to see the project in Xcode."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To support custom feature builds of THEOplayerSDK perform the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Clone this repository to your computer."}),"\n",(0,i.jsxs)(n.li,{children:["Use a ",(0,i.jsx)(n.a,{href:"https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine",children:"local override"})," of the ",(0,i.jsx)(n.code,{children:"THEOplayerSDK-basic"})," pod by adding the following line to your projects Podfile: ",(0,i.jsx)(n.code,{children:"pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'"})," and make sure the path points to the ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/iOS-Connector/tree/main/Helpers/TheoPod",children:"TheoPod folder"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"usage-2",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["Import the ",(0,i.jsx)(n.code,{children:"THEOplayerConnectorConviva"})," module:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"import THEOplayerConnectorConviva\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"ConvivaConfiguration"})," that contains the info on how to connect to your Conviva endpoint:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'let configuration = ConvivaConfiguration(\n      customerKey: "put your customer key here",\n      gatewayURL: " put your  gateway URL here ",\n      logLevel: .LOGLEVEL_FUNC\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"ConvivaConnector"})," that uses this ",(0,i.jsx)(n.code,{children:"configuration"})," and your ",(0,i.jsx)(n.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"let connector = ConvivaConnector(\n      configuration: configuration,\n      player: yourTHEOplayer\n)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Report the viewer's ID:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'connector.report(viewerID: "John Doe")\n'})}),"\n",(0,i.jsx)(n.p,{children:"For each asset that you play, set its name using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'connector.report(assetName: "Star Wars - Episode II")\n'})}),"\n",(0,i.jsx)(n.p,{children:"Hold a reference to your connector. Once the connector is released from memory it will clean up itself and stop reporting to Conviva."}),"\n",(0,i.jsx)(n.h2,{id:"related-links",children:"Related links:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Demo page: ",(0,i.jsx)(n.a,{href:"https://cdn.theoplayer.com/conviva/conviva_test.html",children:"Conviva Analytics Test Page"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/sample-conviva-analytics-html5-sdk",children:"Web SDK connector on Github"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/android-connector/tree/master/connectors/analytics/conviva",children:"Android SDK connector on Github"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/iOS-Connector/tree/main/Code/Conviva",children:"iOS SDK connector on Github"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cdn.theoplayer.com/conviva/Conviva_Documentation_4.0.14/index.html",children:"Conviva SDK Documentation"})}),"\n",(0,i.jsxs)(n.li,{children:["More Information about ",(0,i.jsx)(n.a,{href:"https://www.conviva.com/experience-insights/",children:"Conviva Video Experience"})]}),"\n",(0,i.jsxs)(n.li,{children:["More Information about ",(0,i.jsx)(n.a,{href:"https://www.conviva.com/ad-insights/",children:"Conviva Ad Insights"})]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return s}});var t=o(67294);let i={},a=t.createContext(i);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);