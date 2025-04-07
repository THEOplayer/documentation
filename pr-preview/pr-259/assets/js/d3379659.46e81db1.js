"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["29333"],{46403:function(e,o,n){n.r(o),n.d(o,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"external/iOS-Connector/Code/Uplynk/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer_versioned_docs/version-v8/external/iOS-Connector/Code/Uplynk/README.md","sourceDirName":"external/iOS-Connector/Code/Uplynk","slug":"/connectors/ios/uplynk/getting-started","permalink":"/documentation/pr-preview/pr-259/theoplayer/v8/connectors/ios/uplynk/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/iOS-Connector/blob/-/Code/Uplynk/README.md","tags":[],"version":"v8","frontMatter":{"slug":"/connectors/ios/uplynk/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"ios","previous":{"title":"Uplynk","permalink":"/documentation/pr-preview/pr-259/theoplayer/v8/connectors/ios/uplynk"},"next":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-259/theoplayer/v8/connectors/ios/uplynk/guides"}}'),r=n("85893"),i=n("50065");let s={slug:"/connectors/ios/uplynk/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},l="THEOplayer \uD83E\uDD1D Uplynk",a={},c=[{value:"Installation",id:"installation",level:2},{value:"Swift Package Manager",id:"swift-package-manager",level:3},{value:"Cocoapods",id:"cocoapods",level:3},{value:"Related articles",id:"related-articles",level:2}];function d(e){let o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"theoplayer--uplynk",children:"THEOplayer \uD83E\uDD1D Uplynk"})}),"\n",(0,r.jsxs)(o.p,{children:["THEOplayer-Connector-Uplynk for iOS provides an integration between the THEOplayerSDK and the Uplynk CMS. It allows the ",(0,r.jsx)(o.code,{children:"THEOplayerSDK"})," to playback uplynk sources."]}),"\n",(0,r.jsxs)(o.p,{children:["For example xcode projects with this connector see ",(0,r.jsx)(o.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v8/connectors/ios/uplynk/examples",children:"Uplynk-Examples"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(o.h3,{id:"swift-package-manager",children:(0,r.jsx)(o.a,{href:"https://swift.org/package-manager/",children:"Swift Package Manager"})}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["In Xcode, install the THEOplayer iOS-Connector package by navigating to ",(0,r.jsx)(o.strong,{children:"File > Add Packages"})]}),"\n",(0,r.jsxs)(o.li,{children:["In the prompt that appears, select the iOS-Connector GitHub repository: ",(0,r.jsx)(o.code,{children:"https://github.com/THEOplayer/iOS-Connector"})]}),"\n",(0,r.jsx)(o.li,{children:"Select the version you want to use."}),"\n"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"the Uplynk connector is available for versions >= 8.11 only."}),"\n"]}),"\n",(0,r.jsxs)(o.ol,{start:"4",children:["\n",(0,r.jsx)(o.li,{children:"Choose the Connector libraries you want to include in your app."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"To support custom feature builds of THEOplayerSDK perform the following steps:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Clone this repository to your computer."}),"\n",(0,r.jsxs)(o.li,{children:["Use a ",(0,r.jsx)(o.a,{href:"https://developer.apple.com/documentation/xcode/editing-a-package-dependency-as-a-local-package",children:"local override"})," of the ",(0,r.jsx)(o.code,{children:"theoplayer-sdk-ios"})," package by selecting the folder ",(0,r.jsx)(o.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios"})," in Finder and dragging it into the Project navigator of your Xcode project."]}),"\n",(0,r.jsxs)(o.li,{children:["Place your custom THEOplayerSDK.xcframework at ",(0,r.jsx)(o.code,{children:"../../Helpers/TheoSPM/theoplayer-sdk-ios/THEOplayerSDK.xcframework"}),". (It is also possible to place your xcframework somewhere else. In that case make sure to update the ",(0,r.jsx)(o.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoSPM/theoplayer-sdk-ios/Package.swift",children:"Package.swift"})," manifest inside the your local override so that it points to your custom THEOplayer build)"]}),"\n",(0,r.jsxs)(o.li,{children:["If Xcode complains about a missing xcframework","\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["Choose ",(0,r.jsx)(o.code,{children:"File"})," > ",(0,r.jsx)(o.code,{children:"Packages"})," > ",(0,r.jsx)(o.code,{children:"Reset Package Caches"})," from the menu bar."]}),"\n",(0,r.jsxs)(o.li,{children:["If it is still not working, make sure to remove any ",(0,r.jsx)(o.code,{children:"THEOplayerSDK.xcframework"})," inclusions that you manually installed before installing this THEOplayer-Connector-Uplynk package."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"cocoapods",children:(0,r.jsx)(o.a,{href:"https://guides.cocoapods.org/using/getting-started.html#getting-started",children:"Cocoapods"})}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["Create a Podfile if you don't already have one. From the root of your project directory, run the following command: ",(0,r.jsx)(o.code,{children:"pod init"})]}),"\n",(0,r.jsxs)(o.li,{children:["To your Podfile, add the Uplynk connector pods that you want to use in your app: ",(0,r.jsx)(o.code,{children:"pod 'THEOplayer-Connector-Uplynk'"})]}),"\n",(0,r.jsxs)(o.li,{children:["Install the pods using ",(0,r.jsx)(o.code,{children:"pod install"})," , then open your ",(0,r.jsx)(o.code,{children:".xcworkspace"})," file to see the project in Xcode."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"To support custom feature builds of THEOplayerSDK perform the following steps:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Clone this repository to your computer."}),"\n",(0,r.jsxs)(o.li,{children:["Use a ",(0,r.jsx)(o.a,{href:"https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine",children:"local override"})," of the ",(0,r.jsx)(o.code,{children:"THEOplayerSDK-basic"})," pod by adding the following line to your projects Podfile: ",(0,r.jsx)(o.code,{children:"pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'"})," and make sure the path points to the ",(0,r.jsx)(o.a,{href:"https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoPod",children:"TheoPod folder"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsx)(o.p,{children:"Learn more about Uplynk and how to use the connector in the following list of articles:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v8/connectors/ios/uplynk/introduction",children:"Introduction"}),": this article provides information on what Uplynk provides as a service."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v8/connectors/ios/uplynk/preplay",children:"Preplay"}),": this article provides information on how to configure a Uplynk source."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v8/connectors/ios/uplynk/ads",children:"Ads"}),": this article provides information on which APIs can be leveraged to track and enhance the ad-viewing experience."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v8/connectors/ios/uplynk/ping",children:"Ping"}),": this article provides information on how to leverage the Ping service and which THEOplayer APIs you should use."]}),"\n"]})]})}function p(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,o,n){n.d(o,{Z:function(){return l},a:function(){return s}});var t=n(67294);let r={},i=t.createContext(r);function s(e){let o=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);