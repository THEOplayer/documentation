"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["41623"],{86830:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>s,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"how-to-guides/analytics/moat","title":"Moat","description":"Moat is an analytics service maintained by Oracle. THEOplayer offers a pre-integration for this solution. A demo can be found at https://demo.theoplayer.com/moat-analytics-pre-integration.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/01-moat.md","sourceDirName":"how-to-guides/02-analytics","slug":"/how-to-guides/analytics/moat","permalink":"/documentation/pr-preview/pr-256/theoplayer/v6/how-to-guides/analytics/moat","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/01-moat.md","tags":[],"version":"v6","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-256/theoplayer/v6/how-to-guides/analytics/introduction"},"next":{"title":"Mux","permalink":"/documentation/pr-preview/pr-256/theoplayer/v6/how-to-guides/analytics/mux"}}'),a=t("85893"),r=t("50065");let o={},l="Moat",s={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Code example",id:"code-example",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Configuration",id:"configuration",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk-1",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk-1",level:5},{value:"Related links:",id:"related-links",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"moat",children:"Moat"})}),"\n",(0,a.jsxs)(n.p,{children:["Moat is an analytics service maintained by Oracle. THEOplayer offers a pre-integration for this solution. A demo can be found at ",(0,a.jsx)(n.a,{href:"https://demo.theoplayer.com/moat-analytics-pre-integration",children:"https://demo.theoplayer.com/moat-analytics-pre-integration"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"code-example",children:"Code example"}),"\n",(0,a.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,a.jsx)(n.p,{children:"The THEOplayer Android SDK supports Moat analytics (version 2.4.3+) out-of-the-box. Below you can find the steps to enable Moat tracking."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Include the Moat native Android SDK in the gradle file:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"repositories {\n    flatDir {\n    dirs 'libs'\n    }\n}\n\ndependencies {\n    compile (name: 'moat-mobile-app-kit', ext:'aar')\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"(Optional for Moat 2.4.2+) Ensure Google Play Ads dependencies are included.\nIf this is omitted, this functionality will be limited."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"dependencies {\n    compile 'com.google.android.gms:play-services-ads:+'\n    compile 'com.android.support:support-v4:+'\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Set your application for THEOplayer when the Application is created:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import android.app.Application;\nimport com.moat.analytics.mobile.moatnamespace.MoatAnalytics;\n\npublic class MyApplication extends Application {\n    @Overridepublic void onCreate() {\n    super.onCreate();\n    THEOplayerGlobal.getSharedInstance(this).setApplicationInstance(this);\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,a.jsx)(n.p,{children:"THEOplayer supports Moat Analytics integration from Moat SDK version 3.6.0+. This integration is only available upon request."}),"\n",(0,a.jsx)(n.p,{children:"Once you've received a build which has THEOplayer's Moat integration, you have to import the Moat framework:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"import DMSMoatMobileAppKit\n"})}),"\n",(0,a.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.p,{children:"The snippets below explain how you can pass on Moat settings to a THEOplayer configuration object."}),"\n",(0,a.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsx)(n.p,{children:"Configure the Moat partner code."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"new THEOplayer.Player(containerElement, {\n  libraryLocation: 'https://cdn.theoplayer.com/dash/theoplayer/',\n  analytics: [\n    {\n      integration: 'moat',\n      partnerCode: '<PARTNER_CODE>',\n    },\n  ],\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When you want to make use of Moat for tracking advertisements, you should make use of the ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/IMAAdDescription.html",children:(0,a.jsx)(n.code,{children:"IMAAdDescription"})}),"."]}),"\n",(0,a.jsx)(n.h5,{id:"android-tv-sdk-1",children:"Android (TV) SDK"}),"\n",(0,a.jsxs)(n.p,{children:["Configure the Moat ",(0,a.jsx)(n.strong,{children:"partner code"})," and ",(0,a.jsx)(n.strong,{children:"namespace"})," and enable Google IMA"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'new THEOplayerConfig.Builder()\n    .googleIma(true)\n    .analytics(new MoatOptions.Builder("NAMESPACE", "<PARTNER_CODE>").loggingEnabled(true).build())\n    .build();\n'})}),"\n",(0,a.jsxs)(n.p,{children:["When you want to make use of Moat for tracking advertisements, you should make use of the ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.html",children:"GoogleImaAdDescription"}),"."]}),"\n",(0,a.jsx)(n.h5,{id:"ios-tvos-sdk-1",children:"iOS (/tvOS) SDK"}),"\n",(0,a.jsx)(n.p,{children:"Enable Google IMA in your THEOplayer instance:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"let config = THEOplayerConfiguration(defaultCSS: true, googleIMA: true)\nlet theoplayer = THEOplayer(configuration: config)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Configure a Google IMA source with Moat Analytics enabled:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'public static var moatPreroll : SourceDescription {\n    let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl")\n    return SourceDescription(\n        source : typedSource,\n        ads: [\n            GoogleImaAdDescription(src: "<AD_TAG_URL>")],\n        analytics: [MoatOptions(partnerCode: "<PARTNER_CODE>", debugLoggingEnabled: true)]\n    )\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"related-links",children:"Related links:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Demo page: ",(0,a.jsx)(n.a,{href:"https://demo.theoplayer.com/moat-analytics-pre-integration",children:"https://demo.theoplayer.com/moat-analytics-pre-integration"})]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/Analytics.html",children:"Analytics API (Web SDK)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/source/analytics/package-summary.html",children:"Analytics API (Android SDK)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Analytics.html#/c:@M@THEOplayerSDK@objc(pl)THEOplayerAnalyticsDescription",children:"Analytics API (iOS SDK)"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(67294);let a={},r=i.createContext(a);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);