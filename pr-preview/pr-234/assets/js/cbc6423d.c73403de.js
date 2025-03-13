"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["29788"],{83373:function(e,t,o){o.r(t),o.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"external/react-native-theoplayer/doc/custom-ios-framework","title":"React Native THEOplayer 1.x + custom 4.x THEOplayer portal build for iOS","description":"1.x versions of react-native-theoplayer work with 4.x versions of the iOS THEOplayer SDK (THEOplayerSDK-basic). If you need a specific feature like Google IMA, Goolge DAI or Chromecast, you need to use a custom THEOplayerSDK xcframework for iOS and change the dependency of the react-native-package on the THEOplayerSDK-basic pod into a dependency on that custom xcframework build.","source":"@site/theoplayer_versioned_docs/version-v4/external/react-native-theoplayer/doc/custom-ios-framework.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/custom-ios-framework","permalink":"/documentation/pr-preview/pr-234/theoplayer/v4/getting-started/frameworks/react-native/custom-ios-framework","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/custom-ios-framework.md","tags":[],"version":"v4","frontMatter":{"slug":"/getting-started/frameworks/react-native/custom-ios-framework"},"sidebar":"react-native","previous":{"title":"Casting with Chromecast and Airplay","permalink":"/documentation/pr-preview/pr-234/theoplayer/v4/getting-started/frameworks/react-native/cast"},"next":{"title":"Digital Rights Management (DRM)","permalink":"/documentation/pr-preview/pr-234/theoplayer/v4/getting-started/frameworks/react-native/drm"}}'),a=o("85893"),n=o("50065");let s={slug:"/getting-started/frameworks/react-native/custom-ios-framework"},i="React Native THEOplayer 1.x + custom 4.x THEOplayer portal build for iOS",l={},c=[{value:"Generate/download custom THEOplayerSDK.xcframework",id:"generatedownload-custom-theoplayersdkxcframework",level:2},{value:"Prepare custom builds",id:"prepare-custom-builds",level:3},{value:"Prepare TheoSDK/THEOplayerSDK-basic.podscpec",id:"prepare-theosdktheoplayersdk-basicpodscpec",level:3},{value:"Update your Podfile",id:"update-your-podfile",level:3},{value:"Mark your custom 4.x SDK Features",id:"mark-your-custom-4x-sdk-features",level:2},{value:"Finalize the project",id:"finalize-the-project",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"react-native-theoplayer-1x--custom-4x-theoplayer-portal-build-for-ios",children:"React Native THEOplayer 1.x + custom 4.x THEOplayer portal build for iOS"})}),"\n",(0,a.jsx)(t.p,{children:"1.x versions of react-native-theoplayer work with 4.x versions of the iOS THEOplayer SDK (THEOplayerSDK-basic). If you need a specific feature like Google IMA, Goolge DAI or Chromecast, you need to use a custom THEOplayerSDK xcframework for iOS and change the dependency of the react-native-package on the THEOplayerSDK-basic pod into a dependency on that custom xcframework build."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"This does not apply to 2.x versions of react-native-theoplayer"}),", because they rely on the 5.x series of the native iOS THEOplayer SDK (THEOplayerSDK-core). Making use of additional features is in that case done by adding specific feature flags to the react-native-theoplayer.json file, which results in loading additional integrations onto the SDK."]}),"\n",(0,a.jsxs)(t.p,{children:["The next sections discuss how to ",(0,a.jsx)(t.strong,{children:"add a custom 4.x xcframework to a react-native-theoplayer 1.x setup"}),":"]}),"\n",(0,a.jsx)(t.h2,{id:"generatedownload-custom-theoplayersdkxcframework",children:"Generate/download custom THEOplayerSDK.xcframework"}),"\n",(0,a.jsxs)(t.p,{children:["Create in your application's ios folder a new folder named TheoSDK, to store the custom xcframeworks (",(0,a.jsx)(t.strong,{children:"[YourApplicationFolder]/ios/TheoSdk"}),"). This should be at the same level as the Podfile of your application (",(0,a.jsx)(t.strong,{children:"[YourApplicationFolder]/ios/Podfile"}),")"]}),"\n",(0,a.jsx)(t.h3,{id:"prepare-custom-builds",children:"Prepare custom builds"}),"\n",(0,a.jsxs)(t.p,{children:["Generate the custom xcframeworks (with the required features) on ",(0,a.jsx)(t.a,{href:"http://portal.theoplayer.com",children:"portal.theoplayer.com"}),", and"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["copy the generated xcframework for iOS to ",(0,a.jsx)(t.strong,{children:"[YourApplicationFolder]/ios/TheoSdk/Frameworks/ios/THEOplayerSDK.xcframework"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["copy the generated xcframework for tvOS to ",(0,a.jsx)(t.strong,{children:"[YourApplicationFolder]/ios/TheoSdk/Frameworks/tvos/THEOplayerSDK.xcframework"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"prepare-theosdktheoplayersdk-basicpodscpec",children:"Prepare TheoSDK/THEOplayerSDK-basic.podscpec"}),"\n",(0,a.jsxs)(t.p,{children:["Add a new THEOplayerSDK-basic.podspec file to the new TheoSDK folder (",(0,a.jsx)(t.strong,{children:"[YourApplicationFolder]/ios/THEOplayerSDK-basic.podspec"}),") with the following example contents (below has Ads feature added in the custom build):"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'Pod::Spec.new do |s|\n\n  s.name         = "THEOplayerSDK-basic"\n  s.version      = "1.0"\n  s.summary      = "A custom build of THEOplayerSDK"\n  s.description  = "A custom build of THEOplayerSDK"\n  s.homepage     = "https://theoplayer.com"\n  s.license      = "MIT"\n  s.author       = { "THEO" => "theo@theoplayer.com" }\n  s.source       = { :git => "https://www.theoplayer.com/.git", :tag => "#{s.version}" }\n  s.platforms    = { :ios => "12.0", :tvos => "12.0" }\n\n  ### Set custom player SDK\n  s.ios.vendored_frameworks = \'Frameworks/ios/THEOplayerSDK.xcframework\n  s.tvos.vendored_frameworks = \'Frameworks/tvos/THEOplayerSDK.xcframework\n\n  ### Set Ads dependencies\n  s.ios.dependency "GoogleAds-IMA-iOS-SDK", "3.18.4"\n  s.tvos.dependency "GoogleAds-IMA-tvOS-SDK", "4.8.2"\nend\n'})}),"\n",(0,a.jsx)(t.p,{children:"Make sure the paths in the podspec point to your downloaded xcframeworks, which should be good when following the above steps."}),"\n",(0,a.jsx)(t.h3,{id:"update-your-podfile",children:"Update your Podfile"}),"\n",(0,a.jsxs)(t.p,{children:["In your application's Podfile, located at ",(0,a.jsx)(t.strong,{children:"[YourApplicationFolder]/ios/Podfile"}),", add the following line to redirect all dependencies for the THEOplayerSDK-basic within your project to the newly created podspec:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"pod 'THEOplayerSDK-basic', :path => './TheoSDK'\n"})}),"\n",(0,a.jsx)(t.h2,{id:"mark-your-custom-4x-sdk-features",children:"Mark your custom 4.x SDK Features"}),"\n",(0,a.jsx)(t.p,{children:"When using a custom 4.x SDK for THEOplayer, the react-native-theoplayer package needs to be notified of the features that were added to that custom build. You can specify the features that were added to the custom build in a file in your application folder:"}),"\n",(0,a.jsxs)(t.p,{children:["Create/modify the json file located at ",(0,a.jsx)(t.strong,{children:"[YourApplicationFolder]/react-native-theoplayer.json"})," (Should be same level as the node_modules folder)"]}),"\n",(0,a.jsx)(t.p,{children:"Edit the file to reflect your custom features (all uppercase, with dashes replaced by underscores):"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'{\n	"ios": {\n		"features": [\n			"WEB",\n			"GOOGLE_IMA",\n			"GOOGLE_DAI",\n			"CHROMECAST"\n		]\n	}\n}\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"WEB"})," Indicates a 4.x custom build is used"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"GOOGLE_IMA"})," enables the Google IMA functionality in the 4.x SDK"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"GOOGLE_DAI"})," enables the Google DAI functionality in the 4.x SDK"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"CHROMECAST"})," enables the chromecsting functionality in the 4.x SDK"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Make sure to add the ",(0,a.jsx)(t.strong,{children:"'WEB'"})," feature to indicate a custom ",(0,a.jsx)(t.strong,{children:"4.x"})," build is being used. Otherwise a more recent 5.x player will be loaded."]}),"\n",(0,a.jsx)(t.h2,{id:"finalize-the-project",children:"Finalize the project"}),"\n",(0,a.jsxs)(t.p,{children:["Run ",(0,a.jsx)(t.strong,{children:"pod install"})," to update the SDK dependencies in your application. This will regenerate the pod project for your application that now depends on the generated xcframeworks and supports the indicated features."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"> cd [YourProjectFolder]/ios\n> pod install\n"})})]})}function p(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,o){o.d(t,{Z:function(){return i},a:function(){return s}});var r=o(67294);let a={},n=r.createContext(a);function s(e){let t=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);