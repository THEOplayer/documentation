"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["66755"],{14316:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"how-to-guides/ads/yospace","title":"Yospace","description":"Yospace is a Server-Side Ad Insertion solution. A demo for the Web SDK can be found here.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/01-ads/04-yospace.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/yospace","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/how-to-guides/ads/yospace","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/01-ads/04-yospace.md","tags":[],"version":"v4","sidebarPosition":4,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to set up VAST and VMAP ads?","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/how-to-guides/ads/how-to-set-up-vast-and-vmap"},"next":{"title":"How to display visual cues on the timeline to mark mid-rolls?","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/how-to-guides/ads/how-to-display-visual-cues"}}'),r=t("85893"),a=t("50065");let i={},o="Yospace",l={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Pre-requirements",id:"pre-requirements",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Starting Template",id:"starting-template",level:2},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Integrating Yospace",id:"integrating-yospace",level:2},{value:"Web SDK",id:"web-sdk-2",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk-1",level:5},{value:"Conclusion",id:"conclusion",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"yospace",children:"Yospace"})}),"\n",(0,r.jsxs)(n.p,{children:["Yospace is a Server-Side Ad Insertion solution. A demo for the Web SDK can be found ",(0,r.jsx)(n.a,{href:"https://demo.theoplayer.com/ssai",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"pre-requirements",children:"Pre-requirements"}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Your THEOplayer SDK needs to have the ",(0,r.jsx)(n.code,{children:"yospace"})," module enabled."]}),"\n",(0,r.jsx)(n.li,{children:"You need to include the Yospace's JavaScript SDK as this is a dependency."}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Your THEOplayer SDK needs to have the ",(0,r.jsx)(n.code,{children:"yospace"})," module enabled."]}),"\n",(0,r.jsxs)(n.li,{children:["You need to include the ",(0,r.jsx)(n.code,{children:"yoAdManagement.aar"})," and ",(0,r.jsx)(n.code,{children:"yoUtil.aar"})," libraries in your Android project."]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Your THEOplayer SDK needs to have the ",(0,r.jsx)(n.code,{children:"yospace"})," module enabled."]}),"\n",(0,r.jsx)(n.li,{children:"You need to include the Yospace framework."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"starting-template",children:"Starting Template"}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,r.jsxs)(n.p,{children:["The first thing you need is a valid THEOplayer set-up. If you have no experience with setting up our player, we have an excellent ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/v4/getting-started/sdks/web/getting-started",children:"getting started guide"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To get THEOplayer to work, you only need to do three things:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Reference the THEOplayer JavaScript library (and optionally the default CSS styles)."}),"\n",(0,r.jsx)(n.li,{children:"Add a container which can hold your video player with HTML."}),"\n",(0,r.jsxs)(n.li,{children:["Create your player through JavaScript using our ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/web/classes/Player.html",children:"API"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A basic HTML page with a working THEOplayer could like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title>THEOplayer Web SDK: Getting Started</title>\n        <metaname=\"viewport\"content=\"width=device-width, initial-scale=1.0\">\n        <link rel=\"stylesheet\" type=\"text/css\" href='/path/to/ui.css'>\x3c!-- ads THEOplayer CSS --\x3e\n    </head>\n    <body>\n\n        <div class=\"theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls\"></div>\n\n        <script type='text/javascript' src='/path/to/THEOplayer.js'><\/script>\x3c!-- ads THEOplayer library --\x3e\n        <script>\n\n            var element = document.querySelector('.theoplayer-container');\n            var player = new THEOplayer.Player(element, {\n                libraryLocation: '/path/to/library-folder/',\n                license: 'your_license_here',\n            });\n\n            player.source = {\n                sources : [{\n                    src : 'your.m3u8',\n                    type : 'application/x-mpegurl'\n                }]\n            };\n\n        <\/script>\n    </body>\n</html>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Pretty self-explanatory, isn't it?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="/path/to/THEOplayer.js"><\/script>\n'})}),"\n",(0,r.jsx)(n.p,{children:"The two snippets above are the references to the JS and CSS library."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>\n'})}),"\n",(0,r.jsx)(n.p,{children:"The snippet above is your HTML container."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"<script>\n\nvar element = document.querySelector('.theoplayer-container');\nvar player = new THEOplayer.Player(element, {\n    libraryLocation: '/path/to/library-folder/',\n    license: 'your_license_here',\n});\n\nplayer.source = {\n    sources : [{\n        src : 'your.m3u8',\n        type : 'application/x-mpegurl'\n    }]\n};\n\n<\/script>\n"})}),"\n",(0,r.jsx)(n.p,{children:"The snippet above initializes your player, including a HLS source."}),"\n",(0,r.jsx)(n.h2,{id:"integrating-yospace",children:"Integrating Yospace"}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk-2",children:"Web SDK"}),"\n",(0,r.jsxs)(n.p,{children:["Add a Yospace ",(0,r.jsx)(n.code,{children:"adConfiguration"})," to the sources."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var yoSpaceConfiguration = {\n  integration: 'yospace',\n};\nvar SourceDescription = {\n  sources: [\n    {\n      src: 'http://csm-e-ces1eurxaws101j8-iyypj6ugos2.cds1.yospace.com/csm/extlive/yospace02,sampledroid.m3u8;jsessionid=502C66F7C767AB994AFEAFADCFB822C2.csm-e-ces1eurxaws101j8-iyypj6ugos2.cds1.yospace.com?yo.br=false&yo.ac=true',\n      type: 'application/x-mpegurl',\n      ssai: yoSpaceConfiguration,\n    },\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also access the extended Yospace API."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"player.yospace.session; // the Yospace session object\nplayer.yospace.addEventListener('sessionavailable', console.log);\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also detect ad-related events."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"player.yospace.registerPlayer({\n  AdBreakStart: function () {\n    console.log('AdBreakStart', player.yospace.session);\n  },\n  AdvertStart: function () {\n    console.log('AdvertStart', player.yospace.session);\n  },\n  AdvertEnd: function () {\n    console.log('AdvertEnd', player.yospace.session);\n  },\n  AdBreakEnd: function () {\n    console.log('AdBreakEnd', player.yospace.session);\n  },\n  UpdateTimeline: function () {\n    console.log('UpdateTimeline', player.yospace.session);\n  },\n});\n"})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,r.jsxs)(n.p,{children:["Add a Yospace ",(0,r.jsx)(n.code,{children:"adConfiguration"})," to the sources."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'YoSpaceDescription yoSpaceDescription = new YoSpaceDescription.Builder()\n    .streamType(StreamType.LIVE)\n    // .logLevel(YoSpaceLogLevelConfiguration.Builder.yoSpaceLogLevelConfiguration().http(true).build())\n    .build();\nTypedSource typedSource = new TypedSource.Builder()\n    .src("http://csm-e.cds1.yospace.com/csm/extlive/yospace02,hlssample.m3u8?yo.br=true&yo.ac=true")\n    .ssai(yoSpaceDescription)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can also access the extended Yospace API."}),"\n",(0,r.jsxs)(n.p,{children:["\u26A0\uFE0F"," This gives you access to the Yospace Session object! Be careful with your modifications, it could affect how THEOplayer works!"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"theoplayer.getPlayer().getYospace().getActiveSession(); // the Yospace session object\ntheoplayer.getPlayer().getYospace().addEventListener(YospaceEventTypes.SESSIONCHANGED, new EventListener<SessionChangedEvent>() {\n    @Override\n    public void handleEvent(SessionChangedEvent event) {\n        //from this moment you can access the Yospace session object:\n        com.yospace.android.hls.analytic.Session currentSession =\n                                tpv.getPlayer().getYospace().getActiveSession();\n    }\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also detect ad-related events."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"theoplayer.getPlayer().getYospace().getActiveSession().addAnalyticListener(new AnalyticEventListener() {\n    @Override\n    public void onAdvertBreakEnd(AdBreak adBreak) {\n\n    }\n\n    @Override\n    public void onAdvertBreakStart(AdBreak adBreak) {\n\n    }\n\n    @Override\n    public void onAdvertEnd(Advert advert) {\n\n    }\n\n    @Override\n    public void onAdvertStart(Advert advert) {\n\n    }\n\n    @Override\n    public void onTimelineUpdateReceived(VmapPayload vmapPayload) {\n\n    }\n\n    @Override\n    public void onTrackingUrlCalled(Advert advert, String s, String s1) {\n\n    }\n\n    @Override\n    public void onVastReceived(VastPayload vastPayload) {\n\n    }\n});\n"})}),"\n",(0,r.jsx)(n.h5,{id:"ios-tvos-sdk-1",children:"iOS (/tvOS) SDK"}),"\n",(0,r.jsxs)(n.p,{children:["Add a Yospace ",(0,r.jsx)(n.code,{children:"adConfiguration"})," to the sources."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'let yoSpaceConfiguration = YospaceServerSideAdInsertionConfiguration(\n    streamType: .live\n    //, logLevel: YospaceLogLevelConfiguration(id3Tags: true, rawXml: true)\n)\nlet typedSource = TypedSource(\n    src: "http://csm-e.cds1.yospace.com/csm/extlive/yospace02,hlssample.m3u8?yo.br=true&yo.ac=true",\n    type: "application/x-mpegurl",\n    ssai: yoSpaceConfiguration\n)\nlet sourceDescription = SourceDescription(source: typedSource)\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can also access the extended Yospace API."}),"\n",(0,r.jsxs)(n.p,{children:["\u26A0\uFE0F"," This gives you access to the Yospace Session object! Be careful with your modifications, it could affect how THEOplayer works!"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'theoplayer.yospace?.addEventListener(type: YospaceEventTypes.YOSPACE_SESSION_CHANGED, listener: { (e) in\n    print("Yospace session received ", e)\n    theo\n    player.yospace?.activeSession?.subscribe(toAnalyticEvents: YourYospaceAnalyticsListener())\n})\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can also detect ad-related events. To use Yospace classes and object, you need to include the Yospace headers in your project ",(0,r.jsx)(n.a,{href:"https://developer.yospace.com/sdk-documentation/apple/userguide/latest/en/getting-started.html",children:"as described by Yospace"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'class YourYospaceAnalyticsListener : NSObject, YSAnalyticObserver {\n    func advertDidStart(_ advert: YSAdvert) -> [Any]? {\n        print("Yospace advertDidStart")\n        return nil\n    }\n\n    func advertDidEnd(_ advert: YSAdvert) {\n        print("Yospace advertDidEnd")\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer partnered with Yospace to fully pre-integrate their Server-Side Ad Insertion solution, allowing you to play their streams in a breeze."}),"\n",(0,r.jsx)(n.p,{children:"This partnership means that we are compatible with each other: THEOplayer has a long history with and is optimized to play Yospace streams. We regularly validate our integration and are the first to know about changes to the Yospace infrastructure."}),"\n",(0,r.jsx)(n.p,{children:"Extra resources:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/ServerSideAdInsertionConfiguration.html",children:"Server-Side Ad Insertion Pre-Integration API"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/v4/getting-started/sdks/web/getting-started",children:"THEOplayer Getting Started Guide"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://www.yospace.com/",children:"Yospace website"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Related articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/Yospace.html",children:"Yospace API"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(67294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);