"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["51631"],{44511:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>s,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"how-to-guides/ads/google-dai","title":"Google Dynamic Ad Insertion (DAI)","description":"Google DAI is a Server-Side Ad-Insertion solution offered by Google where THEOplayer is pre-integrated and offers playback for HLS and DASH Streams. A demo can be found at\xa0https://demo.theoplayer.com/google-dai.","source":"@site/theoplayer_versioned_docs/version-v8/how-to-guides/01-ads/08-google-dai.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/google-dai","permalink":"/documentation/pr-preview/pr-263/theoplayer/v8/how-to-guides/ads/google-dai","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/how-to-guides/01-ads/08-google-dai.md","tags":[],"version":"v8","sidebarPosition":8,"frontMatter":{},"sidebar":"roku","previous":{"title":"SpotX","permalink":"/documentation/pr-preview/pr-263/theoplayer/v8/how-to-guides/ads/spotx"},"next":{"title":"Prebid.js","permalink":"/documentation/pr-preview/pr-263/theoplayer/v8/how-to-guides/ads/prebidjs"}}'),o=i("85893"),r=i("50065");let a={},l="Google Dynamic Ad Insertion (DAI)",s={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Web SDK",id:"web-sdk",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Starting Template",id:"starting-template",level:3},{value:"Integrating Google DAI",id:"integrating-google-dai",level:3},{value:"Android SDK",id:"android-sdk",level:2},{value:"Importing Google DAI feature module",id:"importing-google-dai-feature-module",level:3},{value:"Creating an instance of Google DAI Integration",id:"creating-an-instance-of-google-dai-integration",level:3},{value:"Using a Google DAI Source",id:"using-a-google-dai-source",level:3},{value:"Notes",id:"notes",level:3},{value:"iOS SDK",id:"ios-sdk",level:2},{value:"Usage",id:"usage",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"google-dynamic-ad-insertion-dai",children:"Google Dynamic Ad Insertion (DAI)"})}),"\n",(0,o.jsxs)(n.p,{children:["Google DAI is a Server-Side Ad-Insertion solution offered by Google where THEOplayer is pre-integrated and offers playback for HLS and DASH Streams. A demo can be found at\xa0",(0,o.jsx)(n.a,{href:"https://demo.theoplayer.com/google-dai",children:"https://demo.theoplayer.com/google-dai"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"web-sdk",children:"Web SDK"}),"\n",(0,o.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Your THEOplayer SDK needs to have the ",(0,o.jsx)(n.code,{children:"google-dai"})," module enabled."]}),"\n",(0,o.jsx)(n.li,{children:"You need to include the Google DAI JavaScript SDK as this is a dependency."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"starting-template",children:"Starting Template"}),"\n",(0,o.jsxs)(n.p,{children:["The first thing you need is a valid THEOplayer setup. If you have no experience with setting up our player, we have an excellent ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v8/getting-started/sdks/web/getting-started",children:"getting started guide"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To get THEOplayer to work, you only need to do three things:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Reference the THEOplayer JavaScript library (and optionally the default CSS styles)."}),"\n",(0,o.jsx)(n.li,{children:"Add a container which can hold your video player with HTML."}),"\n",(0,o.jsxs)(n.li,{children:["Create your player through JavaScript using our ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/classes/Player.html",children:"API"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"A basic HTML page with a working THEOplayer could like the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>THEOplayer Web SDK: Getting Started</title>\n        <metaname="viewport"content="width=device-width, initial-scale=1.0">\n        <link rel="stylesheet" type="text/css" href=\'/path/to/ui.css\'>\x3c!-- ads THEOplayer CSS --\x3e\n    </head>\n    <body>\n\n        <div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>\n\n        <script type=\'text/javascript\' src=\'/path/to/THEOplayer.js\'><\/script>\x3c!-- ads THEOplayer library --\x3e\n        <script>\n\n            var element = document.querySelector(\'.theoplayer-container\');\n            var player = new THEOplayer.Player(element);\n\n            player.source = {\n                sources : [{\n                    src : \'your.m3u8\',\n                    type : \'application/x-mpegurl\'\n                }]\n            };\n\n        <\/script>\n    </body>\n</html>\n'})}),"\n",(0,o.jsx)(n.p,{children:"Pretty self-explanatory, isn't it?"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="/path/to/THEOplayer.js"><\/script>\n'})}),"\n",(0,o.jsx)(n.p,{children:"The two snippets above are the references to the JS and CSS library."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>\n'})}),"\n",(0,o.jsx)(n.p,{children:"The snippet above is your HTML container."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"<script>\n\nvar element = document.querySelector('.theoplayer-container');\nvar player = new THEOplayer.Player(element);\n\nplayer.source = {\n    sources : [{\n        src : 'your.mpd',\n        type : 'application/dash+xml'\n    }]\n};\n\n<\/script>\n"})}),"\n",(0,o.jsx)(n.p,{children:"The snippet above initializes your player, including a HLS source."}),"\n",(0,o.jsx)(n.h3,{id:"integrating-google-dai",children:"Integrating Google DAI"}),"\n",(0,o.jsx)(n.p,{children:"Add a Google DAI JavaScript library."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'<script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3_dai.js"><\/script>\n'})}),"\n",(0,o.jsx)(n.p,{children:"Add a Google DAI ad configuration to the sources."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const TYPES = {\n  hls: 'application/vnd.apple.mpegurl',\n  dash: 'application/dash+xml',\n};\n\n// example and reference tester at https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/vastinspector\nconst SOURCES = {\n  dash: {\n    vod: {\n      integration: 'google-dai',\n      availabilityType: 'vod',\n      apiKey: null,\n      contentSourceID: '<contentSourceID>',\n      videoID: '<videoID>',\n    },\n    live: {\n      integration: 'google-dai',\n      availabilityType: 'live',\n      apiKey: null,\n      assetKey: '<assetKey>',\n    },\n  },\n  hls: {\n    vod: {\n      integration: 'google-dai',\n      availabilityType: 'vod',\n      apiKey: null,\n      contentSourceID: '<contentSourceID>',\n      videoID: '<videoID>',\n    },\n    live: {\n      integration: 'google-dai',\n      availabilityType: 'live',\n      apiKey: null,\n      assetKey: '<assetKey>',\n    },\n  },\n};\n// Configure THEOplayer Source\nconst MANIFEST_TYPE = 'hls'; // 'hls' / 'dash'\nconst AVAILABILITY_TYPE = 'vod'; // 'vod' or 'live'\n\nplayer.source = {\n  sources: {\n    type: TYPES[MANIFEST_TYPE],\n    ssai: SOURCES[MANIFEST_TYPE][AVAILABILITY_TYPE],\n  },\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"android-sdk",children:"Android SDK"}),"\n",(0,o.jsx)(n.p,{children:"Using Google DAI in the Android SDK consists of 3 steps:"}),"\n",(0,o.jsx)(n.h3,{id:"importing-google-dai-feature-module",children:"Importing Google DAI feature module"}),"\n",(0,o.jsxs)(n.p,{children:["Add ",(0,o.jsx)(n.code,{children:"implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-dai:+'"})," to your module ",(0,o.jsx)(n.code,{children:"build.gradle"})," file, as demonstrated below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n    // ...\n    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'\n    implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-dai:+'\n    // ...\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"creating-an-instance-of-google-dai-integration",children:"Creating an instance of Google DAI Integration"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["If you're using ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v8/getting-started/sdks/android/features#adding-integrations-automatically",children:"automatic integrations"}),", you can skip this step."]})}),"\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"GoogleDaiIntegration"})," through the ",(0,o.jsx)(n.code,{children:"GoogleDaiIntegrationFactory"}),", and add it to your player instance, as demonstrated below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val theoplayerView = THEOplayerView(context)\nval daiIntegration = GoogleDaiIntegrationFactory.createGoogleDaiIntegration(theoplayerView)\ntheoplayerView.player.addIntegration(daiIntegration)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"using-a-google-dai-source",children:"Using a Google DAI Source"}),"\n",(0,o.jsxs)(n.p,{children:["Use a ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiVodConfiguration.html",children:"GoogleDaiVodConfiguration"}),"\nor ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiLiveConfiguration.html",children:"GoogleDaiLiveConfiguration"}),"\nto create a ",(0,o.jsx)(n.code,{children:"GoogleDaiTypedSource"})," to request stream, as demonstrated below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'theoplayerView.player.source = SourceDescription.Builder(\n    GoogleDaiTypedSource.Builder(\n        GoogleDaiVodConfiguration.Builder("api_key", "content_source_id", "video_id")\n            .build()\n    )\n    .type(SourceType.DASH)\n    .build()\n).build()\n'})}),"\n",(0,o.jsx)(n.p,{children:"or:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'theoplayerView.player.source = SourceDescription.Builder(\n    GoogleDaiTypedSource.Builder(\n        GoogleDaiLiveConfiguration.Builder("api_key", "asset_key")\n            .build()\n    )\n    .type(SourceType.DASH)\n    .build()\n).build()\n'})}),"\n",(0,o.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,o.jsxs)(n.p,{children:["The Google DAI integration exposes events through the Ads API. More information is available at ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v8/how-to-guides/ads/how-to-subscribe-to-ad-events#android-sdk",children:'"How to subscribe to ad events"'}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The integration exposes a number of additional methods.\nThese are available directly on the ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html",children:(0,o.jsx)(n.code,{children:"GoogleDaiIntegration"})})," object,\nor indirectly through ",(0,o.jsx)(n.code,{children:"player.ads.dai"})," (only for Kotlin).\nFor example:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#requestStream(StreamRequest,AdsRenderingSettings)",children:"requestStream(StreamRequest, AdsRenderingSettings)"})," can be used to request stream through the native Google DAI API."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#contentTimeForStreamTime(double)",children:"contentTimeForStreamTime(double)"}),"\n/ ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#streamTimeForContentTime(double)",children:"streamTimeForContentTime(double)"})," can be used to convert content time to stream time and vice versa."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"ios-sdk",children:"iOS SDK"}),"\n",(0,o.jsxs)(n.p,{children:["To use Google DAI with the THEOplayer iOS SDK, the ",(0,o.jsx)(n.strong,{children:"THEOplayer GoogleIMA Integration"})," should be integrated. For instructions on installation, importing and adding the integration, ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v8/how-to-guides/ads/google-ima#ios-sdk",children:"please refer to this guide"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["Define a ",(0,o.jsx)(n.code,{children:"GoogleDAITypedSource"})," and a ",(0,o.jsx)(n.code,{children:"GoogleDAIVodConfiguration"})," to pass to theoplayer's source:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'let daiConfig = GoogleDAIVodConfiguration(videoID: "tears-of-steel", contentSourceID: "2548831", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: nil)\nlet typedSource = GoogleDAITypedSource(ssai: daiConfig)\ntheoplayer.source = SourceDescription(source: typedSource)\n'})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'let daiConfig = GoogleDAILiveConfiguration(assetKey: "c-rArva4ShKVIAkNfy6HUQ", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: nil)\nlet typedSource = GoogleDAITypedSource(ssai: daiConfig)\ntheoplayer.source = SourceDescription(source: typedSource)\n'})}),"\n",(0,o.jsx)(n.p,{children:"And THEOplayer will take care of the rest."}),"\n",(0,o.jsxs)(n.p,{children:["Additional DAI APIs can be found on the ",(0,o.jsx)(n.code,{children:"imaIntegration.dai"})," endpoint."]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"THEOplayer SDK and Google DAI are fully pre-integrate to deliver Server-Side Ad Insertion solution, allowing customers to play streams in a breeze."}),"\n",(0,o.jsx)(n.p,{children:"Extra resources:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/GoogleDAIConfiguration.html",children:"Google DAI Pre-Integration API"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v8/getting-started/sdks/web/getting-started",children:"THEOplayer Getting Started Guide"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads",children:"Google DAI website"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Related articles"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai",children:"Google DAI HTML Reference"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/dai",children:"Google DAI Android Reference"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/dai",children:"Google DAI iOS Reference"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return a}});var t=i(67294);let o={},r=t.createContext(o);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);