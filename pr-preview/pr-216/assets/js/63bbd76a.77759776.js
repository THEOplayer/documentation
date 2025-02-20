"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["40112"],{21994:function(e,i,o){o.r(i),o.d(i,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>r,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"how-to-guides/ads/google-ima","title":"Google IMA","description":"THEOplayer offer supports for Google IMA as an ad integration system.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/01-ads/10-google-ima.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/google-ima","permalink":"/documentation/pr-preview/pr-216/theoplayer/v6/how-to-guides/ads/google-ima","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/01-ads/10-google-ima.md","tags":[],"version":"v6","sidebarPosition":10,"frontMatter":{},"sidebar":"roku","previous":{"title":"Prebid.js","permalink":"/documentation/pr-preview/pr-216/theoplayer/v6/how-to-guides/ads/prebidjs"},"next":{"title":"How to subscribe to ad events","permalink":"/documentation/pr-preview/pr-216/theoplayer/v6/how-to-guides/ads/how-to-subscribe-to-ad-events"}}'),t=o("85893"),d=o("50065");let s={},a="Google IMA",r={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Include the IMA SDK",id:"include-the-ima-sdk",level:4},{value:"Specify the integration",id:"specify-the-integration",level:4},{value:"Limitations",id:"limitations",level:4},{value:"Android SDK",id:"android-sdk",level:3},{value:"Android SDK",id:"android-sdk-1",level:4},{value:"Add the <code>integration-ads-ima</code> dependency",id:"add-the-integration-ads-ima-dependency",level:5},{value:"Use the <code>GoogleImaIntegrationFactory</code>",id:"use-the-googleimaintegrationfactory",level:5},{value:"Use a <code>GoogleImaAdDescription</code>",id:"use-a-googleimaaddescription",level:5},{value:"Other",id:"other",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:4},{value:"Include the IMA SDK",id:"include-the-ima-sdk-1",level:5},{value:"Set useNativeIma to true",id:"set-usenativeima-to-true",level:5},{value:"Use a GoogleImaAdDescription",id:"use-a-googleimaaddescription-1",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:3},{value:"Include the IMA SDK",id:"include-the-ima-sdk-2",level:4},{value:"Set useNativeIma to true",id:"set-usenativeima-to-true-1",level:4},{value:"Use a GoogleImaAdDescription",id:"use-a-googleimaaddescription-2",level:4},{value:"Remarks",id:"remarks",level:2}];function c(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"google-ima",children:"Google IMA"})}),"\n",(0,t.jsx)(i.p,{children:"THEOplayer offer supports for Google IMA as an ad integration system.\nUsers of Google Ad Manager (formerly known as DoubleClick for Publishers) should use this ad integration."}),"\n",(0,t.jsxs)(i.p,{children:["Scheduling and tracking ads through the Google IMA ad integration is similar to the default ad integration, so you're advised to read through ",(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-216/theoplayer/v6/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:'"How to set-up VAST and VMAP'}),"."]}),"\n",(0,t.jsx)(i.p,{children:"The main difference with the default THEO ad integration is that you need to indicate through the API that you want to use Google IMA as the ad integration, and that you need to include the Google IMA SDK."}),"\n",(0,t.jsx)(i.h2,{id:"sdks",children:"SDKs"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,t.jsx)(i.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,t.jsx)(i.p,{children:"To use Google IMA in the Web SDK,"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"You need to include the Google IMA SDK,"}),"\n",(0,t.jsxs)(i.li,{children:["You need to specify ",(0,t.jsx)(i.code,{children:'integration: "google-ima"'})," in your ",(0,t.jsx)(i.code,{children:"AdDescription"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"include-the-ima-sdk",children:"Include the IMA SDK"}),"\n",(0,t.jsx)(i.p,{children:"Google IMA has a dependency on the IMA SDK. Hence, this library needs to be included. The following snippet demonstrates how the IMA SDK can be included:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-html",children:'<script type="text/javascript" src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"><\/script>\n'})}),"\n",(0,t.jsx)(i.p,{children:"Alternatively, you can include the debug version of the IMA SDK for troubleshooting, which will provide extra logs from IMA on console:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-html",children:'<script type="text/javascript" src="https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js"><\/script>\n'})}),"\n",(0,t.jsx)(i.h4,{id:"specify-the-integration",children:"Specify the integration"}),"\n",(0,t.jsxs)(i.p,{children:["You need to set integration to ",(0,t.jsx)(i.code,{children:'"google-ima"'}),", as demonstrated by the snippet below which configures a pre-roll VAST ad."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"player.source = {\n  sources: [\n    {\n      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n    },\n  ],\n  ads: [\n    {\n      integration: 'google-ima',\n      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: 'start',\n    },\n  ],\n};\n"})}),"\n",(0,t.jsx)(i.h4,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["There's a known issue within the IMA HTML5 SDK where it does not work well with multiple VPAID ads in a VMAP. More specifically when the ",(0,t.jsx)(i.code,{children:"ImaSdkSetting"})," ",(0,t.jsx)(i.code,{children:"vpaidMode"})," is set to ",(0,t.jsx)(i.code,{children:"enabled"})," and the ",(0,t.jsx)(i.code,{children:"AdsRenderingSetting"})," ",(0,t.jsx)(i.code,{children:"enablePreloading"})," is set to ",(0,t.jsx)(i.code,{children:"true"}),", it will not manage to play all ads (these are the default configurations when using the Google IMA integration in THEOplayer). The production IMA SDK doesn't throw any error in this scenario, the ",(0,t.jsx)(i.a,{href:"https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js",children:"debug SDK"}),", however, prints ",(0,t.jsx)(i.code,{children:"Vpaid Error: VPAID ad called play on video element before start was called on VPAID manager"})," in the console in this case. This can be resolved by either using ",(0,t.jsx)(i.code,{children:"vpaidMode"})," ",(0,t.jsx)(i.code,{children:"insecure"})," or by disabling preloading. Both can be achieved by specifying your preference in the ",(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/AdsConfiguration.html",children:"AdsConfiguration"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,t.jsx)(i.p,{children:"The usage of Google IMA differs across the two Android-based SDKs."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["The Android SDK requires you to add ",(0,t.jsx)(i.code,{children:"GoogleImaIntegration"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["The Legacy Android SDK (4.12.x) requires you to configure the ",(0,t.jsx)(i.code,{children:"THEOplayerConfig"})," correctly."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,t.jsx)(i.p,{children:"Using Google IMA in the Android SDK consists of 3 steps:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Add the ",(0,t.jsx)(i.code,{children:"integration-ads-ima"})," dependency to your module's ",(0,t.jsx)(i.code,{children:"build.gradle"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Use the ",(0,t.jsx)(i.code,{children:"GoogleImaIntegrationFactory"})," to create and add a ",(0,t.jsx)(i.code,{children:"GoogleImaIntegration"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Use a ",(0,t.jsx)(i.code,{children:"GoogleImaAdDescription"})," to schedule ads."]}),"\n"]}),"\n",(0,t.jsxs)(i.h5,{id:"add-the-integration-ads-ima-dependency",children:["Add the ",(0,t.jsx)(i.code,{children:"integration-ads-ima"})," dependency"]}),"\n",(0,t.jsxs)(i.p,{children:["Add ",(0,t.jsx)(i.code,{children:"implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'"})," to your module ",(0,t.jsx)(i.code,{children:"build.gradle"})," file, as demonstrated below:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-groovy",children:"\ndependencies {\n    // ...\n    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'\n    implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'\n    // ...\n}\n"})}),"\n",(0,t.jsxs)(i.h5,{id:"use-the-googleimaintegrationfactory",children:["Use the ",(0,t.jsx)(i.code,{children:"GoogleImaIntegrationFactory"})]}),"\n",(0,t.jsxs)(i.p,{children:["Create a ",(0,t.jsx)(i.code,{children:"GoogleImaIntegration"})," through the ",(0,t.jsx)(i.code,{children:"GoogleImaIntegrationFactory"}),", and add it to your player instance, as demonstrated below:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"// THEOplayerView theoPlayerView = ...;\nGoogleImaIntegration imaIntegration = GoogleImaIntegrationFactory.createGoogleImaIntegration(theoPlayerView);\ntheoPlayerView.getPlayer().addIntegration(imaIntegration);\n"})}),"\n",(0,t.jsxs)(i.h5,{id:"use-a-googleimaaddescription",children:["Use a ",(0,t.jsx)(i.code,{children:"GoogleImaAdDescription"})]}),"\n",(0,t.jsxs)(i.p,{children:["Use a ",(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.html",children:(0,t.jsx)(i.code,{children:"GoogleImaAdDescription"})})," to schedule advertisements,\nas demonstrated below:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'TypedSource typedSource = new TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")\n    .build();\n\nGoogleImaAdDescription imaAdDescription = new GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")\n    .timeOffset("start")\n    .build();\n\nSourceDescription sourceDescription = new SourceDescription.Builder(typedSource)\n    .ads(imaAdDescription)\n    .build();\n\nplayerView.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,t.jsx)(i.h5,{id:"other",children:"Other"}),"\n",(0,t.jsxs)(i.p,{children:["The available ad events are different between the Android SDK and the Legacy Android SDK (4.12.x). More information is available at ",(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-216/theoplayer/v6/how-to-guides/ads/how-to-subscribe-to-ad-events#android-sdk",children:'"How to subscribe to ad events"'}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html",children:(0,t.jsx)(i.code,{children:"GoogleImaIntegration"})})," instance exposes a number of methods. For example, ",(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html#schedule(GoogleImaAdDescription)",children:(0,t.jsx)(i.code,{children:"schedule()"})})," can be used to schedule ads dynamically, and ",(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html#requestAds(AdsRequest,AdsRenderingSettings)",children:(0,t.jsx)(i.code,{children:"requestAds()"})}),"\ncan be used to request ads through the native Google IMA API."]}),"\n",(0,t.jsxs)(i.p,{children:["When you add your THEOplayer IMA dependency to your module ",(0,t.jsx)(i.code,{children:"build.gradle"})," file (i.e. ",(0,t.jsx)(i.code,{children:"implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'"}),"), we will automatically add ",(0,t.jsx)(i.code,{children:"com.google.ads.interactivemedia.v3:interactivemedia"})," with the version specified ",(0,t.jsx)(i.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-android/blob/master/app/build.gradle",children:"here"}),". You can overwrite this with a later version of the Google IMA SDK by adding this dependency to your module ",(0,t.jsx)(i.code,{children:"build.gradle"})," file, but at your own risk."]}),"\n",(0,t.jsx)(i.h4,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,t.jsx)(i.p,{children:"To use Google IMA in the Legacy Android SDK (4.12.x),"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"You need to include the Google IMA SDK,"}),"\n",(0,t.jsxs)(i.li,{children:["You need to set ",(0,t.jsx)(i.code,{children:"useNativeIma"})," to ",(0,t.jsx)(i.code,{children:"true"})," in your ",(0,t.jsx)(i.code,{children:"THEOplayerConfiguration"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["You need to use a ",(0,t.jsx)(i.code,{children:"GoogleImaAdDescription"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h5,{id:"include-the-ima-sdk-1",children:"Include the IMA SDK"}),"\n",(0,t.jsxs)(i.p,{children:["You must add the Google IMA Android SDK to your Android project, as explained ",(0,t.jsx)(i.a,{href:"https://github.com/googleads/googleads-ima-android/releases",children:"here"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["We would recommend adding the following gradle dependency to your gradle file, as demonstrated below, near the place where THEOplayer ",(0,t.jsx)(i.code,{children:".aar"})," file is included in the same file."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-groovy",children:"implementation 'com.google.ads.interactivemedia.v3:interactivemedia:3.25.1'\n"})}),"\n",(0,t.jsx)(i.h5,{id:"set-usenativeima-to-true",children:"Set useNativeIma to true"}),"\n",(0,t.jsxs)(i.p,{children:["Google IMA has to be enabled by setting the ",(0,t.jsx)(i.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/ads/AdsConfiguration.Builder.html",children:"useNativeIma"})," to ",(0,t.jsx)(i.code,{children:"true"}),", as demonstrated by the snippet below."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n    .ads(\n        new AdsConfiguration.Builder()\n            .googleImaConfiguration(new GoogleImaConfiguration.Builder().useNativeIma(true).build())\n            .build()\n    )\n    .build();\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Alternatively, if you specify your ",(0,t.jsx)(i.code,{children:"THEOplayerView"})," through XML, you must configure it there, as demonstrated below."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:'<com.theoplayer.android.api.THEOplayerView\n    android:id="@+id/theoPlayerView"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    app:adGoogleImaNative="true"\n    app:layout_behavior="@string/appbar_scrolling_view_behavior" />\n'})}),"\n",(0,t.jsx)(i.h5,{id:"use-a-googleimaaddescription-1",children:"Use a GoogleImaAdDescription"}),"\n",(0,t.jsxs)(i.p,{children:["You have to use a ",(0,t.jsx)(i.code,{children:"GoogleImaAdDescription"}),"instead of a ",(0,t.jsx)(i.code,{children:"THEOAdDescription"}),".\nThe snippet below demonstrates how you could schedule a pre-roll VAST ad."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'TypedSource typedSource = new TypedSource.Builder()\n    .src("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")\n    .build();\n\nGoogleImaAdDescription imaAdDescription = new GoogleImaAdDescription.Builder()\n    .source("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")\n    .timeOffset("start")\n    .build();\n\nSourceDescription sourceDescription = new SourceDescription.Builder()\n    .sources(typedSource)\n    .ads(imaAdDescription)\n    .build();\nplayerView.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,t.jsx)(i.h3,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,t.jsx)(i.p,{children:"To use Google IMA in the iOS SDK,"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"You need to include the Google IMA SDK,"}),"\n",(0,t.jsxs)(i.li,{children:["You need to set ",(0,t.jsx)(i.code,{children:"useNativeIma: true"})," in your ",(0,t.jsx)(i.code,{children:"THEOplayerConfiguration"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["You need to use a ",(0,t.jsx)(i.code,{children:"GoogleImaAdDescription"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["An example for the iOS SDK is available ",(0,t.jsx)(i.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Google-IMA",children:"here"}),". An example for the tvOS SDK is available ",(0,t.jsx)(i.a,{href:"https://github.com/THEOplayer/samples-tvos-sdk/tree/master/Google-IMA",children:"here"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Note that some ",(0,t.jsx)(i.a,{href:"#limitations",children:"limitations"})," may apply."]}),"\n",(0,t.jsx)(i.h4,{id:"include-the-ima-sdk-2",children:"Include the IMA SDK"}),"\n",(0,t.jsx)(i.p,{children:'Similar to how you add the THEOplayer "framework" (i.e. SDK) in your Xcode,\nyou must also add the Google IMA "framework" (i.e. SDK) in your Xcode.'}),"\n",(0,t.jsxs)(i.p,{children:["You can find the Google IMA iOS SDK at ",(0,t.jsx)(i.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/download",children:"here"}),", which you will need to ",(0,t.jsx)(i.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side#manually_downloading_and_installing_the_sdk",children:"manually download and install"}),". Alternatively, you can use Cocoapods as demonstrated ",(0,t.jsx)(i.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Google-IMA",children:"here"}),"."]}),"\n",(0,t.jsx)(i.h4,{id:"set-usenativeima-to-true-1",children:"Set useNativeIma to true"}),"\n",(0,t.jsxs)(i.p,{children:["Google IMA has to be enabled in the ",(0,t.jsx)(i.code,{children:"THEOplayerConfiguration"}),", as demonstrated by the snippet below."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-swift",children:"let playerConfig = THEOplayerConfiguration(chromeless: false, defaultCSS: false, ads: AdsConfiguration(showCountdown: true , preload: .MIDROLL_AND_POSTROLL, googleImaConfiguration: GoogleIMAConfiguration(useNativeIma: true)))\n"})}),"\n",(0,t.jsxs)(i.p,{children:["If you're using the tvOS SDK, then it's sufficient to create an empty ",(0,t.jsx)(i.code,{children:"AdsConfiguration"})," object to enable Google IMA, as demonstrated by the snippet below."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-swift",children:"let playerConfig = THEOplayerConfiguration(chromeless: false, ads: AdsConfiguration())\n"})}),"\n",(0,t.jsx)(i.h4,{id:"use-a-googleimaaddescription-2",children:"Use a GoogleImaAdDescription"}),"\n",(0,t.jsxs)(i.p,{children:["You have to use a ",(0,t.jsx)(i.code,{children:"GoogleImaAdDescription"})," instead of a ",(0,t.jsx)(i.code,{children:"THEOAdDescription"}),".\nThe snippet below demonstrates how you could schedule a pre-roll VAST ad."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-swift",children:'let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")\nlet stream = SourceDescription(source: typedSource, ads: [GoogleImaAdDescription(src: "https://cdn.theoplayer.com/demos/ads/vast/vast.xml", timeOffset: "start")])\nplayer.source = stream;\n'})}),"\n",(0,t.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The release notes for IMA SDK can be found on their respective pages: ",(0,t.jsx)(i.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/history",children:"IMA HTML5 SDK release history"}),", ",(0,t.jsx)(i.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/history",children:"IMA iOS SDK release history"})," and ",(0,t.jsx)(i.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/history",children:"IMA Android SDK release history"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"THEOplayer internally supports IMA SDK up until a certain version across different SDKs. We regularly update the internal code to stay up to date with the latest version of IMA SDK. Later versions of IMA SDK should work as expected, however there could be cases where a fix for a breaking change or a newly introduced API is required. Please reach out to us if you require support for a more recent IMA SDK since we intend to rectify this limitation."}),"\n",(0,t.jsxs)(i.li,{children:["The limitations documented on the support and compatibility pages of IMA SDK also apply to THEOplayer SDK when IMA integration is used. You can find the support matrix of IMA SDK on platform specific pages: ",(0,t.jsx)(i.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/compatibility",children:"HTML5"}),", ",(0,t.jsx)(i.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/compatibility",children:"Android"})," and ",(0,t.jsx)(i.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/compatibility",children:"iOS"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["You can try out the snippets mentioned here on our samples apps for ",(0,t.jsx)(i.a,{href:"https://github.com/THEOplayer/samples-html5-sdk",children:"Web SDK"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/THEOplayer/samples-ios-sdk",children:"iOS SDK"})," and ",(0,t.jsx)(i.a,{href:"https://github.com/THEOplayer/samples-android-sdk/",children:"Android SDK"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,d.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,i,o){o.d(i,{Z:function(){return a},a:function(){return s}});var n=o(67294);let t={},d=n.createContext(t);function s(e){let i=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);