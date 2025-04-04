"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["88563"],{56833:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>r});var n=JSON.parse('{"id":"how-to-guides/ads/google-ima","title":"Google IMA","description":"THEOplayer offer supports for Google IMA as an ad integration system.","source":"@site/theoplayer/how-to-guides/01-ads/10-google-ima.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/google-ima","permalink":"/documentation/pr-preview/pr-256/theoplayer/how-to-guides/ads/google-ima","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/01-ads/10-google-ima.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{},"sidebar":"roku","previous":{"title":"Prebid.js","permalink":"/documentation/pr-preview/pr-256/theoplayer/how-to-guides/ads/prebidjs"},"next":{"title":"How to subscribe to ad events","permalink":"/documentation/pr-preview/pr-256/theoplayer/how-to-guides/ads/how-to-subscribe-to-ad-events"}}'),o=i("85893"),a=i("50065");let s={},r="Google IMA",d={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Web SDK",id:"web-sdk",level:2},{value:"Include the IMA SDK",id:"include-the-ima-sdk",level:3},{value:"Specify the integration",id:"specify-the-integration",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Android SDK",id:"android-sdk",level:2},{value:"Add the <code>integration-ads-ima</code> dependency",id:"add-the-integration-ads-ima-dependency",level:3},{value:"Use the <code>GoogleImaIntegrationFactory</code>",id:"use-the-googleimaintegrationfactory",level:3},{value:"Use a <code>GoogleImaAdDescription</code>",id:"use-a-googleimaaddescription",level:3},{value:"Next steps",id:"next-steps",level:3},{value:"Updating the Google IMA SDK",id:"updating-the-google-ima-sdk",level:3},{value:"iOS SDK",id:"ios-sdk",level:2},{value:"Installation",id:"installation",level:3},{value:"Cocoapods",id:"cocoapods",level:4},{value:"Swift Package Manager",id:"swift-package-manager",level:4},{value:"Import",id:"import",level:3},{value:"Usage",id:"usage",level:3},{value:"Limitations",id:"limitations-1",level:3},{value:"Remarks",id:"remarks",level:2}];function c(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"google-ima",children:"Google IMA"})}),"\n",(0,o.jsx)(t.p,{children:"THEOplayer offer supports for Google IMA as an ad integration system.\nUsers of Google Ad Manager (formerly known as DoubleClick for Publishers) should use this ad integration."}),"\n",(0,o.jsxs)(t.p,{children:["Scheduling and tracking ads through the Google IMA ad integration is similar to the default ad integration, so you're advised to read through ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/theoplayer/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:'"How to set-up VAST and VMAP'}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The main difference with the default THEO ad integration is that you need to indicate through the API that you want to use Google IMA as the ad integration, and that you need to include the Google IMA SDK."}),"\n",(0,o.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"web-sdk",children:"Web SDK"}),"\n",(0,o.jsx)(t.p,{children:"To use Google IMA in the Web SDK,"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"You need to include the Google IMA SDK,"}),"\n",(0,o.jsxs)(t.li,{children:["You need to specify ",(0,o.jsx)(t.code,{children:'integration: "google-ima"'})," in your ",(0,o.jsx)(t.code,{children:"AdDescription"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"include-the-ima-sdk",children:"Include the IMA SDK"}),"\n",(0,o.jsx)(t.p,{children:"Google IMA has a dependency on the IMA SDK. Hence, this library needs to be included. The following snippet demonstrates how the IMA SDK can be included:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<script type="text/javascript" src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"><\/script>\n'})}),"\n",(0,o.jsx)(t.p,{children:"Alternatively, you can include the debug version of the IMA SDK for troubleshooting, which will provide extra logs from IMA on console:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<script type="text/javascript" src="https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js"><\/script>\n'})}),"\n",(0,o.jsx)(t.h3,{id:"specify-the-integration",children:"Specify the integration"}),"\n",(0,o.jsxs)(t.p,{children:["You need to set integration to ",(0,o.jsx)(t.code,{children:'"google-ima"'}),", as demonstrated by the snippet below which configures a pre-roll VAST ad."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"player.source = {\n  sources: [\n    {\n      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n    },\n  ],\n  ads: [\n    {\n      integration: 'google-ima',\n      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: 'start',\n    },\n  ],\n};\n"})}),"\n",(0,o.jsx)(t.h3,{id:"limitations",children:"Limitations"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["There's a known issue within the IMA HTML5 SDK where it does not work well with multiple VPAID ads in a VMAP. More specifically when the ",(0,o.jsx)(t.code,{children:"ImaSdkSetting"})," ",(0,o.jsx)(t.code,{children:"vpaidMode"})," is set to ",(0,o.jsx)(t.code,{children:"enabled"})," and the ",(0,o.jsx)(t.code,{children:"AdsRenderingSetting"})," ",(0,o.jsx)(t.code,{children:"enablePreloading"})," is set to ",(0,o.jsx)(t.code,{children:"true"}),", it will not manage to play all ads (these are the default configurations when using the Google IMA integration in THEOplayer). The production IMA SDK doesn't throw any error in this scenario, the ",(0,o.jsx)(t.a,{href:"https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js",children:"debug SDK"}),", however, prints ",(0,o.jsx)(t.code,{children:"Vpaid Error: VPAID ad called play on video element before start was called on VPAID manager"})," in the console in this case. This can be resolved by either using ",(0,o.jsx)(t.code,{children:"vpaidMode"})," ",(0,o.jsx)(t.code,{children:"insecure"})," or by disabling preloading. Both can be achieved by specifying your preference in the ",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/AdsConfiguration.html",children:"AdsConfiguration"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"android-sdk",children:"Android SDK"}),"\n",(0,o.jsx)(t.p,{children:"Using Google IMA in the Android SDK consists of 3 steps:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Add the ",(0,o.jsx)(t.code,{children:"integration-ads-ima"})," dependency to your module's ",(0,o.jsx)(t.code,{children:"build.gradle"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Use the ",(0,o.jsx)(t.code,{children:"GoogleImaIntegrationFactory"})," to create and add a ",(0,o.jsx)(t.code,{children:"GoogleImaIntegration"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Use a ",(0,o.jsx)(t.code,{children:"GoogleImaAdDescription"})," to schedule ads."]}),"\n"]}),"\n",(0,o.jsxs)(t.h3,{id:"add-the-integration-ads-ima-dependency",children:["Add the ",(0,o.jsx)(t.code,{children:"integration-ads-ima"})," dependency"]}),"\n",(0,o.jsxs)(t.p,{children:["Add ",(0,o.jsx)(t.code,{children:"implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'"})," to your module ",(0,o.jsx)(t.code,{children:"build.gradle"})," file, as demonstrated below:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-groovy",children:"\ndependencies {\n    // ...\n    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'\n    implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'\n    // ...\n}\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"use-the-googleimaintegrationfactory",children:["Use the ",(0,o.jsx)(t.code,{children:"GoogleImaIntegrationFactory"})]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you're using ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/theoplayer/getting-started/sdks/android/features#adding-integrations-automatically",children:"automatic integrations"}),", you can skip this step."]})}),"\n",(0,o.jsxs)(t.p,{children:["Create a ",(0,o.jsx)(t.code,{children:"GoogleImaIntegration"})," through the ",(0,o.jsx)(t.code,{children:"GoogleImaIntegrationFactory"}),", and add it to your player instance, as demonstrated below:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:"import com.theoplayer.android.api.ads.ima.GoogleImaIntegrationFactory\n\nval theoplayerView = THEOplayerView(context)\nval imaIntegration = GoogleImaIntegrationFactory.createGoogleImaIntegration(theoplayerView)\ntheoplayerView.player.addIntegration(imaIntegration)\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"use-a-googleimaaddescription",children:["Use a ",(0,o.jsx)(t.code,{children:"GoogleImaAdDescription"})]}),"\n",(0,o.jsxs)(t.p,{children:["Use a ",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.html",children:(0,o.jsx)(t.code,{children:"GoogleImaAdDescription"})})," to schedule advertisements,\nas demonstrated below:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'val typedSource = TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")\n    .build()\n\nval imaAdDescription = GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")\n    .timeOffset("start")\n    .build()\n\nval sourceDescription = SourceDescription.Builder(typedSource)\n    .ads(imaAdDescription)\n    .build()\n\ntheoplayerView.player.source = sourceDescription\n'})}),"\n",(0,o.jsx)(t.h3,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsxs)(t.p,{children:["The Google IMA integration exposes events through the Ads API. More information is available at ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/theoplayer/how-to-guides/ads/how-to-subscribe-to-ad-events#android-sdk",children:'"How to subscribe to ad events"'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The integration exposes a number of additional methods.\nThese are available directly on the ",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html",children:(0,o.jsx)(t.code,{children:"GoogleImaIntegration"})})," object, or indirectly through ",(0,o.jsx)(t.code,{children:"player.ads.ima"})," (only for Kotlin).\nFor example, ",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html#schedule(GoogleImaAdDescription)",children:(0,o.jsx)(t.code,{children:"schedule()"})})," can be used to schedule ads dynamically,\nand ",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html#requestAds(AdsRequest,AdsRenderingSettings)",children:(0,o.jsx)(t.code,{children:"requestAds()"})})," can be used to request ads through the native Google IMA API."]}),"\n",(0,o.jsx)(t.h3,{id:"updating-the-google-ima-sdk",children:"Updating the Google IMA SDK"}),"\n",(0,o.jsxs)(t.p,{children:["The IMA integration depends on Google's ",(0,o.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/",children:"IMA SDK for Android"})," from ",(0,o.jsx)(t.a,{href:"https://mvnrepository.com/artifact/com.google.ads.interactivemedia.v3/interactivemedia",children:"Maven"}),".\nBy adding the THEOplayer IMA integration to your Gradle dependencies, the Google IMA SDK is also automatically added to your app."]}),"\n",(0,o.jsxs)(t.p,{children:["Our integration is tested with a specific version of the Google IMA SDK, and by default Gradle will automatically add the same version to your app.\nHowever, you can overwrite this ",(0,o.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/history",children:"with a later version"})," (at your own risk)\nby manually adding a dependency on ",(0,o.jsx)(t.code,{children:"com.google.ads.interactivemedia.v3:interactivemedia"})," to your ",(0,o.jsx)(t.code,{children:"build.gradle"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"ios-sdk",children:"iOS SDK"}),"\n",(0,o.jsxs)(t.p,{children:["To use Google IMA with the THEOplayer iOS SDK, the ",(0,o.jsx)(t.strong,{children:"THEOplayer GoogleIMA Integration"})," should be integrated. The integration is a lightweight module written in Swift, for serving advertisements from the Google IMA SDK."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"The THEOplayer GoogleIMA integration supports both iOS and tvOS platforms."})}),"\n",(0,o.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.p,{children:"The THEOplayer GoogleIMA integration is published on the following package managers:"}),"\n",(0,o.jsx)(t.h4,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,o.jsx)(t.p,{children:"Simply add the following to your project's Podfile:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ruby",children:"pod 'THEOplayer-Integration-GoogleIMA'\n"})}),"\n",(0,o.jsx)(t.p,{children:"The above entry automatically manages the fetching of the IMA SDK dependency."}),"\n",(0,o.jsx)(t.p,{children:"In case where the integrator would want to manage fetching a specific version of the IMA SDK, then replace the Podfile entry with:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ruby",children:"pod 'THEOplayer-Integration-GoogleIMA/Base'\npod 'GoogleAds-IMA-iOS-SDK', '3.24.0' # specify the desired version\n# or\npod 'GoogleAds-IMA-tvOS-SDK', '4.14.1' # specify the desired version\n"})}),"\n",(0,o.jsx)(t.h4,{id:"swift-package-manager",children:"Swift Package Manager"}),"\n",(0,o.jsxs)(t.p,{children:["Please check the ",(0,o.jsx)(t.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-apple/README.md#installation",children:"installation instruction found here"})]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["This will not get the IMA SDK, but only the THEOplayer IMA integration. The IMA SDKs can be found at ",(0,o.jsx)(t.a,{href:"https://github.com/googleads/swift-package-manager-google-interactive-media-ads-ios",children:"https://github.com/googleads/swift-package-manager-google-interactive-media-ads-ios"})," and ",(0,o.jsx)(t.a,{href:"https://github.com/googleads/swift-package-manager-google-interactive-media-ads-tvos",children:"https://github.com/googleads/swift-package-manager-google-interactive-media-ads-tvos"}),". You should add these to your Xcode project's ",(0,o.jsx)(t.code,{children:"Package Dependencies"})," for SPM to fetch."]})}),"\n",(0,o.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,o.jsx)(t.p,{children:"Import the framework in the source files where it will be used:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:"import THEOplayerGoogleIMAIntegration\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You will also need the THEOplayer core SDK since the THEOplayer GoogleIMA integration extends its functionality.\n",(0,o.jsx)("br",{}),"To import the THEOplayer core SDK framework add:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:"import THEOplayerSDK\n"})}),"\n",(0,o.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["Initialize the integration and pass it to the ",(0,o.jsx)(t.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:'let configBuilder = THEOplayerConfigurationBuilder()\nconfigBuilder.license = "your_theoplayer_license"\nlet theoplayer = THEOplayer(configuration: configBuilder.build()\nlet imaIntegration = GoogleIMAIntegrationFactory.createIntegration(on: theoplayer)\ntheoplayer.addIntegration(imaIntegration)\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Optionally, the ",(0,o.jsx)(t.code,{children:"createIntegration"})," accepts a configuration argument of type IMASetting:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:'import GoogleInteractiveMediaAds // required to access definitions such as `IMASettings`\n..\n..\n..\nlet settings = IMASettings()\nsettings.language = "en"\nlet imaIntegration = GoogleIMAIntegrationFactory.createIntegration(on: theoplayer, with: settings)\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Define a ",(0,o.jsx)(t.code,{children:"GoogleImaAdDescription"})," in your source object to specify the advertisement:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:'let adSrc = "https://cdn.theoplayer.com/demos/ads/vast/dfp-preroll-skip-5s.xml"\nlet adDescription = GoogleImaAdDescription(src: adSrc)\n// or\nlet adDescriptionWithOffset = GoogleImaAdDescription(src: adSrc, timeOffset: "10")\n'})}),"\n",(0,o.jsx)(t.p,{children:"The time offset helps VAST ads to play at a specific timestamp. VMAP ads can define that behavior inside their manifest file, thus they should not have a timeOffset parameter."}),"\n",(0,o.jsx)(t.p,{children:"Finally, we pass the ad description to the player either by setting it in the source:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:'let source = "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"\nlet mimeType = "application/x-mpegurl"\nlet typedSource = TypedSource(src: source, type: mimeType)\nlet sourceDescription = SourceDescription(source: typedSource, ads: [adDescription])\ntheoplayer.source = sourceDescription\n'})}),"\n",(0,o.jsx)(t.p,{children:"Or by calling the ad schedule API:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:"theoplayer.ads.schedule(adDescription: adDescription)\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"A VAST ad without a timeOffset argument in the description will be scheduled to play at the player's currentTime. If the source is not loaded yet, it will be scheduled as a preroll."})}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"limitations-1",children:"Limitations"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Prerolls must be loaded after the player view is fully rendered and ready. This means attempting to load the ad in the ",(0,o.jsx)(t.code,{children:"viewDidLoad"})," lifecycle will result in a failed request."]}),"\n",(0,o.jsxs)(t.li,{children:["There is a known bug by Apple that throws runtime warnings concerning the main thread. If you run into this warning while using the IMA SDK, please check ",(0,o.jsx)(t.a,{href:"https://developer.apple.com/forums/thread/714467?answerId=734799022#734799022",children:"this thread for more information."})]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The release notes for IMA SDK can be found on their respective pages: ",(0,o.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/history",children:"IMA HTML5 SDK release history"}),", ",(0,o.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/history",children:"IMA iOS SDK release history"})," and ",(0,o.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/history",children:"IMA Android SDK release history"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"THEOplayer internally supports IMA SDK up until a certain version across different SDKs. We regularly update the internal code to stay up to date with the latest version of IMA SDK. Later versions of IMA SDK should work as expected, however there could be cases where a fix for a breaking change or a newly introduced API is required. Please reach out to us if you require support for a more recent IMA SDK since we intend to rectify this limitation."}),"\n",(0,o.jsxs)(t.li,{children:["The limitations documented on the support and compatibility pages of IMA SDK also apply to THEOplayer SDK when IMA integration is used. You can find the support matrix of IMA SDK on platform specific pages: ",(0,o.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/compatibility",children:"HTML5"}),", ",(0,o.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/compatibility",children:"Android"})," and ",(0,o.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/compatibility",children:"iOS"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["You can try out the snippets mentioned here on our samples apps for ",(0,o.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-html5-sdk",children:"Web SDK"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk",children:"iOS SDK"})," and ",(0,o.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-android-sdk/",children:"Android SDK"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return s}});var n=i(67294);let o={},a=n.createContext(o);function s(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);