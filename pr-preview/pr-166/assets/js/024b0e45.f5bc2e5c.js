"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["26476"],{55670:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"how-to-guides/analytics/agama","title":"Agama","description":"Agama is an analytics solution maintained by Agama Technologies. THEOplayer offers a pre-integration for this service.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/02-analytics/04-agama.md","sourceDirName":"how-to-guides/02-analytics","slug":"/how-to-guides/analytics/agama","permalink":"/documentation/pr-preview/pr-166/theoplayer/v7/how-to-guides/analytics/agama","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/02-analytics/04-agama.md","tags":[],"version":"v7","sidebarPosition":4,"frontMatter":{},"sidebar":"roku","previous":{"title":"Youbora (NPAW Plugin)","permalink":"/documentation/pr-preview/pr-166/theoplayer/v7/how-to-guides/analytics/youbora"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-166/theoplayer/v7/how-to-guides/analytics/conviva/introduction"}}'),i=a("85893"),r=a("50065");let o={},s="Agama",l={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Documentation",id:"documentation",level:2},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk-1",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk-1",level:5},{value:"Related resources",id:"related-resources",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"agama",children:"Agama"})}),"\n",(0,i.jsxs)(n.p,{children:["Agama is an analytics solution maintained by ",(0,i.jsx)(n.a,{href:"https://www.agama.tv/",children:"Agama Technologies"}),". THEOplayer offers a pre-integration for this service."]}),"\n",(0,i.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(n.p,{children:"Agama requires you to load the Agama library and configure it through JavaScript. Agama needs to be configured through the PlayerConfiguration and through the SourceConfiguration. The following section describes how this can be done."}),"\n",(0,i.jsx)(n.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,i.jsxs)(n.p,{children:["Agama requires you to have the ",(0,i.jsx)(n.code,{children:"agama"})," feature enabled in your SDK build. Agama needs to be configured through the PlayerConfiguration and through the SourceConfiguration. The following section describes how this can be done.\nIf you do not have this feature enabled in your SDK, or are unsure, please contact your CSM or Service Desk for confirmation."]}),"\n",(0,i.jsx)(n.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,i.jsxs)(n.p,{children:["Agama requires you to have the ",(0,i.jsx)(n.code,{children:"agama"})," feature enabled in your SDK build. Agama needs to be configured through the PlayerConfiguration and through the SourceConfiguration. The following section describes how this can be done.\nIf you do not have this feature enabled in your SDK, or are unsure, please contact your CSM or Service Desk for confirmation."]}),"\n",(0,i.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsx)(n.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,i.jsxs)(n.p,{children:["The player configuration should include the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaPlayerConfiguration.html",children:"AgamaPlayerConfiguration"})," object."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var player = new THEOplayer.Player(element, {\n  libraryLocation: '/path/to/your-theoplayer-folder/',\n  analytics: [\n    {\n      integration: 'agama',\n      config: 'emp_service=http://127.0.0.1:8191/report;report_interval=60;id_report_interval=240;operator_id=fooSoo',\n    },\n  ],\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once a player is configured, an Agama EMP client instance is created."}),"\n",(0,i.jsxs)(n.p,{children:["The player's source configuration should include the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaSourceConfiguration.html",children:"AgamaSourceConfiguration"})," object."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"player.source = {\n    [...]\n    analytics : [{\n        integration : 'agama',\n        asset : 'Asset Name',\n        streamType : 'vod'\n    }]\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once the player's source is set, a dynamic streaming session is started, and Agama EMP is ready to monitor the usage and quality of the video."}),"\n",(0,i.jsx)(n.h5,{id:"android-tv-sdk-1",children:"Android (TV) SDK"}),"\n",(0,i.jsxs)(n.p,{children:["The player configuration should include the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaPlayerConfiguration.html",children:"AgamaPlayerConfiguration"})," object:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public THEOplayerConfig theoplayerConfig = new THEOplayerConfig.Builder()\n    ...\n    .analytics(\n        agamaPlayerConfiguration("//config")\n        .application("//applicationName")\n        .applicationVersion("//applicationVersion")\n        .userAccountID("//userAccountID")\n        .logLevel(//AgamaLogLevel)\n        .build()\n    )\n    .castStrategy(CastStrategy.AUTO)\n    .hlsDateRange(true);\n}\npublic THEOplayerView tpv = new THEOplayerView(this, theoplayerConfig)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Once the player is configured, an Agama EMP client is created.\nThe player source configuration should include the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaSourceConfiguration.html",children:"AgamaSourceConfiguration"})," object in the analytics tag while configuring the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/SourceDescription.html",children:"SourceDescription"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public SourceDescription sourceDescription =\n    sourceDescription(\n            ...\n    ).analytics(\n        agamaSourceConfiguration(asset: //agama asset name, streamType: //StreamType (.LIVE or .VOD))\n            .cdn("Agama CDN")\n            .contentDescription("//Your content description")\n            .contentTitle("//Your content title")\n            .contentType("//Your content type")\n            .serviceName(//AgamaServiceName.)\n    ).build())\ntpv.getPlayer().setSource(sourceDescription)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Once the player's source is set, a dynamic streaming session is started, and Agama EMP is ready to monitor the usage and quality of the video."}),"\n",(0,i.jsx)(n.p,{children:"Example Setup:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public THEOplayerConfig theoplayerConfig = THEOplayerConfig.Builder()\n                .chromeless(false)\n                .cssPaths("/data/data/com.theoplayer.demo/appDataCss.css",\n                        "style.css")\n                .jsPaths("script.js")\n                .googleIma(true)\n                .ads(ads)\n                .analytics(\n                    agamaPlayerConfiguration("agg_server_ip=test-1.agamatech.se;agg_server_port=8050;report_interval=60;id_report_interval=240;operator_id=fooSoo;")\n                    .application("THEO application demo")\n                    .applicationVersion("1.0.0")\n                    .userAcountID("THEO user demo")\n                    .logLevel(AgamaLogLevel.FATAL)\n                    .build()\n                )\n                .castStrategy(CastStrategy.AUTO)\n                .hlsDateRange(true);\n\nTHEOplayerView tpv = new THEOplayerView(this, theoplayerConfig);\n\npublic SourceDescription agamaSourceDescription =\n    sourceDescription(\n                typedSource("http://contentserver-1.kanto.indigo:8080/videos/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n                    .setExperimentalRenderingEnabled(experimental)\n                    .build()\n            ).analytics(\n                agamaSourceConfiguration("agama", StreamType.VOD)\n                    .cdn("THEO cdn demo")\n                    .contentDescription("THEO content description demo")\n                    .contentTitle("THEO title demo")\n                    .contentType("THEO content type demo")\n                    .serviceName(AgamaServiceName.SVOD)\n                    .build());\n\ntpv.getPlayer().setSource(agamaSourceDescription);\n'})}),"\n",(0,i.jsx)(n.h5,{id:"ios-tvos-sdk-1",children:"iOS (/tvOS) SDK"}),"\n",(0,i.jsxs)(n.p,{children:["The player configuration should include the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaPlayerConfiguration.html",children:"AgamaPlayerConfiguration"})," object:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"let agamaPlayerConfiguration = AgamaPlayerConfiguration(\n    config: //String,\n    logLevel: //THEOplayerSDK.AgamaLogging,\n    application: //String?, automatically detected from host if nil is provided,\n    applicationVersion: //String?, automatically detected from host if nil is provided,\n    userAccountID: //String?\n)\nvar theoplayer = THEOplayer(configuration: THEOplayerConfiguration(..., analytics: [agamaPlayerConfiguration]))\n...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the player is configured, an Agama EMP client is created.\nThe player source configuration should include the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaSourceConfiguration.html",children:"AgamaSourceConfiguration"})," object in the analytics tag:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"let agamaSourceConfiguration = AgamaSourceConfiguration(\n    asset: //String,\n    streamType: //StreamType, either live or vod,\n    serviceName: //AgamaServiceName, name of the service,\n    cdn: //String?,\n    contentTitle: //String?,\n    contentType: //String?,\n    contentDescription: //String?\n)\ntheoplayer.source = SourceDescription(..., analytics: [agamaSourceConfiguration], ...)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once the player's source is set, a dynamic streaming session is started, and Agama EMP is ready to monitor the usage and quality of the video."}),"\n",(0,i.jsx)(n.p,{children:"Example Setup:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'let agamaPlayerConfiguration = AgamaPlayerConfiguration(\n    config: "emp_service=http://127.0.0.1:8191/report;report_interval=60;id_report_interval=240;operator_id=fooSoo",\n    logLevel: .fatal,\n)\nvar theoplayer = THEOplayer(configuration: THEOplayerConfiguration(chromeless: false, analytics: [agamaPlayerConfiguration]))\n...\nlet agamaSourceConfiguration = AgamaSourceConfiguration(\n    asset: //String,\n    streamType: StreamType.live,\n    serviceName: AgamaServiceName.live\n)\ntheoplayer.source = SourceDescription(\n    sources: TypedSource(src: "elephantsdream", type: "application/xmpegurl"),\n    analytics: [agamaSourceConfiguration]\n)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"Related resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-166/theoplayer/v7/how-to-guides/analytics/custom-analytics-integration",children:"Custom Analytics Integration"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return o}});var t=a(67294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);