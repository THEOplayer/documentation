"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["30562"],{12501:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>r});var t=JSON.parse('{"id":"how-to-guides/ads/how-to-set-up-vast-and-vmap","title":"How to set up VAST and VMAP ads?","description":"This article explains how to schedule client-side VAST and VMAP advertisements through THEOplayer.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/01-ads/03-how-to-set-up-vast-and-vmap.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/how-to-set-up-vast-and-vmap","permalink":"/documentation/pr-preview/pr-245/theoplayer/v4/how-to-guides/ads/how-to-set-up-vast-and-vmap","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/01-ads/03-how-to-set-up-vast-and-vmap.md","tags":[],"version":"v4","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"Customizing the ad overlay text","permalink":"/documentation/pr-preview/pr-245/theoplayer/v4/how-to-guides/ads/customizing-the-ad-overlay-text"},"next":{"title":"Yospace","permalink":"/documentation/pr-preview/pr-245/theoplayer/v4/how-to-guides/ads/yospace"}}'),d=n("85893"),o=n("50065");let i={},r="How to set up VAST and VMAP ads?",a={},l=[{value:"SDKs",id:"sdks",level:2},{value:"VAST",id:"vast",level:2},{value:"Scheduling a single pre-roll",id:"scheduling-a-single-pre-roll",level:3},{value:"Web SDK",id:"web-sdk",level:4},{value:"Android SDK",id:"android-sdk",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:4},{value:"Scheduling two pre-rolls, two mid-rolls and one post-roll",id:"scheduling-two-pre-rolls-two-mid-rolls-and-one-post-roll",level:3},{value:"Web SDK",id:"web-sdk-1",level:4},{value:"Android SDK",id:"android-sdk-1",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",level:4},{value:"Scheduling a skippable mid-roll",id:"scheduling-a-skippable-mid-roll",level:3},{value:"Web SDK",id:"web-sdk-2",level:4},{value:"Android SDK",id:"android-sdk-2",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-2",level:4},{value:"VMAP",id:"vmap",level:2},{value:"Web SDK",id:"web-sdk-3",level:3},{value:"Android SDK",id:"android-sdk-3",level:3},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-3",level:3},{value:"Dynamic scheduling",id:"dynamic-scheduling",level:2},{value:"Web SDK",id:"web-sdk-4",level:3},{value:"Android SDK",id:"android-sdk-4",level:3},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-4",level:3}];function c(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.header,{children:(0,d.jsx)(s.h1,{id:"how-to-set-up-vast-and-vmap-ads",children:"How to set up VAST and VMAP ads?"})}),"\n",(0,d.jsx)(s.p,{children:"This article explains how to schedule client-side VAST and VMAP advertisements through THEOplayer."}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"a VAST advertisement is a single ad break, and you can position it as a pre-roll, mid-roll or post-roll."}),"\n",(0,d.jsx)(s.li,{children:"a VMAP advertisement is a playlist of ad breaks, and can contain any combination of pre-rolls, mid-rolls and/or post-rolls."}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:'Through the THEOplayer API, app developers can define which "ad integration" they want to use.\nTHEOplayer currently supports 4 types of client-side ad integrations:'}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsx)(s.li,{children:"Default"}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v4/how-to-guides/ads/google-ima",children:"Google IMA"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v4/how-to-guides/ads/spotx",children:"SpotX"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v4/how-to-guides/ads/freewheel",children:"FreeWheel"})}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:['This article explains scheduling VAST and VMAP ads through the "default" ad integration.\nScheduling VAST and VMAP ads through other ad integrations is very similar,\nso consider this article as a reference guide.\nFor example, if you use Google Ad Manager (i.e. DoubleClick), then this article allows you to better understand\nhow to schedule VAST and VMAP ads, but you want to use the ',(0,d.jsx)(s.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v4/how-to-guides/ads/google-ima",children:"Google IMA"})," integration (and API)\nto actually implement it in your app."]}),"\n",(0,d.jsx)(s.h2,{id:"sdks",children:"SDKs"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,d.jsx)(s.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,d.jsx)(s.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,d.jsx)(s.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,d.jsx)(s.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,d.jsx)(s.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,d.jsx)(s.th,{children:"Roku SDK"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,d.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,d.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,d.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,d.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,d.jsx)(s.td,{style:{textAlign:"center"},children:"No"}),(0,d.jsx)(s.td,{children:"No"})]})})]}),"\n",(0,d.jsx)(s.h2,{id:"vast",children:"VAST"}),"\n",(0,d.jsxs)(s.p,{children:["Setting up a client-side VAST advertisement means scheduling a VAST ad tag.\nAs an app developer, you associate a VAST ad tag (URL) (e.g. ",(0,d.jsx)(s.code,{children:"//cdn.theoplayer.com/demos/ads/vast/vast.xml"}),") with a time offset.\nAdditionally, when using the default ad integration, you can also specify after how many seconds a VAST ad may be skipped.\nYou may also schedule multiple ad tags."]}),"\n",(0,d.jsx)(s.p,{children:"Let's consider the following common use-cases:"}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#scheduling-a-single-pre-roll",children:"Scheduling a single pre-roll"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#scheduling-two-pre-rolls-two-mid-rolls-and-one-post-roll",children:"Scheduling two pre-rolls, two mid-rolls and one post-roll"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"#scheduling-a-skippable-mid-roll",children:"Scheduling a skippable mid-roll"})}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"scheduling-a-single-pre-roll",children:"Scheduling a single pre-roll"}),"\n",(0,d.jsx)(s.p,{children:"The following snippets demonstrate how to schedule a single pre-roll."}),"\n",(0,d.jsx)(s.h4,{id:"web-sdk",children:"Web SDK"}),"\n",(0,d.jsxs)(s.p,{children:["You configure one ",(0,d.jsx)(s.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/AdDescription.html",children:(0,d.jsx)(s.code,{children:"AdDescription"})})," in the ",(0,d.jsx)(s.code,{children:"ads"})," property of your ",(0,d.jsx)(s.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/SourceConfiguration.html",children:(0,d.jsx)(s.code,{children:"SourceConfiguration"})}),".\nIn this ",(0,d.jsx)(s.code,{children:"AdDescription"}),","]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["you set the value of ",(0,d.jsx)(s.code,{children:"sources"})," to your ad tag URL."]}),"\n",(0,d.jsxs)(s.li,{children:["you set the value of ",(0,d.jsx)(s.code,{children:"timeOffset"})," to ",(0,d.jsx)(s.code,{children:'"start"'})," (or ",(0,d.jsx)(s.code,{children:"00:00:00"})," or ",(0,d.jsx)(s.code,{children:"0%"}),") to indicate that it's a pre-roll."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",children:"player.source = {\n  sources: [\n    {\n      src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n    },\n  ],\n  ads: [\n    {\n      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: 'start',\n    },\n  ],\n};\n"})}),"\n",(0,d.jsxs)(s.p,{children:["If you wanted to schedule a post-roll instead of a pre-roll, you set the value of ",(0,d.jsx)(s.code,{children:"timeOffset"})," to ",(0,d.jsx)(s.code,{children:'"end"'}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["If you want to schedule a mid-roll instead of a pre-roll, you set the value of ",(0,d.jsx)(s.code,{children:"timeOffset"})," to the ",(0,d.jsx)(s.code,{children:"HH:MM:SS"})," format.\nFor example, to schedule an advertisement at the 15s mark, you set the value of ",(0,d.jsx)(s.code,{children:"timeOffset"})," to ",(0,d.jsx)(s.code,{children:'"00:00:15"'}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"android-sdk",children:"Android SDK"}),"\n",(0,d.jsxs)(s.p,{children:["You configure one ",(0,d.jsx)(s.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.Builder.html",children:(0,d.jsx)(s.code,{children:"AdDescription"})})," in the ",(0,d.jsx)(s.code,{children:"ads"})," property of your ",(0,d.jsx)(s.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/source/SourceDescription.Builder.html#ads-com.theoplayer.android.api.source.addescription.AdDescription...-",children:(0,d.jsx)(s.code,{children:"SourceDescription"})}),".\nIn this ",(0,d.jsx)(s.code,{children:"AdDescription"}),","]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["you set the value of ",(0,d.jsx)(s.code,{children:"sources"})," to your ad tag URL."]}),"\n",(0,d.jsxs)(s.li,{children:["you set the value of ",(0,d.jsx)(s.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.Builder.html#timeOffset-java.lang.String-",children:(0,d.jsx)(s.code,{children:"timeOffset"})})," to ",(0,d.jsx)(s.code,{children:'"start"'})," (or ",(0,d.jsx)(s.code,{children:"00:00:00"})," or ",(0,d.jsx)(s.code,{children:"0%"}),") to indicate that it's a pre-roll."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-java",children:'TypedSource typedSource = new TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")\n    .build();\n\nString vastAdTag = "//cdn.theoplayer.com/demos/ads/vast/vast.xml";\nString offset = "start";\nAdDescription ad = new GoogleImaAdDescription.Builder(vastAdTag).timeOffset(offset).build();\n\nSourceDescription sourceDescription = new SourceDescription.Builder(typedSource)\n    .ads(ad)\n    .build();\ntheoplayerView.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,d.jsxs)(s.p,{children:["If you wanted to schedule a post-roll instead of a pre-roll, you set the value of ",(0,d.jsx)(s.code,{children:"timeOffset"})," to ",(0,d.jsx)(s.code,{children:'"end"'}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["If you want to schedule a mid-roll instead of a pre-roll, you set the value of ",(0,d.jsx)(s.code,{children:"timeOffset"})," to the ",(0,d.jsx)(s.code,{children:"HH:MM:SS"})," format.\nFor example, to schedule an advertisement at the 15s mark, you set the value of ",(0,d.jsx)(s.code,{children:"timeOffset"})," to ",(0,d.jsx)(s.code,{children:'"00:00:15"'}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,d.jsxs)(s.p,{children:["You configure one ",(0,d.jsx)(s.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Classes/THEOAdDescription.html",children:(0,d.jsx)(s.code,{children:"THEOAdDescription"})})," in the ",(0,d.jsx)(s.code,{children:"ads"})," property of your ",(0,d.jsx)(s.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Classes/SourceDescription.html#/s:13THEOplayerSDK17SourceDescriptionC3adsSayAA02AdD0_pGSgvp",children:(0,d.jsx)(s.code,{children:"SourceDescription"})}),".\nIn this ",(0,d.jsx)(s.code,{children:"AdDescription"}),","]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["you set the value of ",(0,d.jsx)(s.code,{children:"sources"})," to your ad tag URL."]}),"\n",(0,d.jsxs)(s.li,{children:["you set the value of ",(0,d.jsx)(s.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Classes/THEOAdDescription.html#/c:@M@THEOplayerSDK@objc(cs)THEOAdDescription(py)timeOffset",children:(0,d.jsx)(s.code,{children:"timeOffset"})})," to ",(0,d.jsx)(s.code,{children:'"start"'})," (or ",(0,d.jsx)(s.code,{children:"00:00:00"})," or ",(0,d.jsx)(s.code,{children:"0%"}),") to indicate that it's a pre-roll."]}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-swift",children:'let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")\n\nlet vastAdTag = "//cdn.theoplayer.com/demos/ads/vast/vast.xml"\nlet offset = "start"\nlet ad = THEOAdDescription(src : vastAdTag, timeOffset: offset)\n\nlet source = SourceDescription(source : typedSource, ads: [ad])\ntheoplayer.source = source\n'})}),"\n",(0,d.jsxs)(s.p,{children:["If you wanted to schedule a post-roll instead of a pre-roll, you set the value of ",(0,d.jsx)(s.code,{children:"timeOffset"})," to ",(0,d.jsx)(s.code,{children:'"end"'}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["If you want to schedule a mid-roll instead of a pre-roll, you set the value of ",(0,d.jsx)(s.code,{children:"timeOffset"})," to the ",(0,d.jsx)(s.code,{children:"HH:MM:SS"})," format.\nFor example, to schedule an advertisement at the 15s mark, you set the value of ",(0,d.jsx)(s.code,{children:"timeOffset"})," to ",(0,d.jsx)(s.code,{children:'"00:00:15"'}),"."]}),"\n",(0,d.jsx)(s.h3,{id:"scheduling-two-pre-rolls-two-mid-rolls-and-one-post-roll",children:"Scheduling two pre-rolls, two mid-rolls and one post-roll"}),"\n",(0,d.jsx)(s.p,{children:"Scheduling multiple VAST ads is only slightly different from scheduling a single VASt ad.\nInstead of passing along one ad description to your array, you pass along multiple ad descriptions to the array."}),"\n",(0,d.jsx)(s.p,{children:"The following snippets demonstrate how you'd configure two pre-rolls, two mid-rolls and one post-roll through the usage of VAST ads."}),"\n",(0,d.jsx)(s.h4,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",children:"player.source = {\n  sources: [\n    {\n      src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n    },\n  ],\n  ads: [\n    {\n      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: 'start',\n    },\n    {\n      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: 'start',\n    },\n    {\n      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: '00:00:15',\n    },\n    {\n      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: '00:00:30',\n    },\n    {\n      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: 'end',\n    },\n  ],\n};\n"})}),"\n",(0,d.jsx)(s.h4,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-java",children:'TypedSource.Builder typedSource = new TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8");\nSourceDescription.Builder sourceDescription = new SourceDescription.Builder(typedSource.build());\n\nsourceDescription.ads(\n    new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .timeOffset("start")\n        .build(),\n    new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .timeOffset("start")\n        .build(),\n    new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .timeOffset("00:00:15")\n        .build(),\n    new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .timeOffset("00:00:15")\n        .build(),\n    new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .timeOffset("end")\n        .build()\n);\n\ntheoplayerView.getPlayer().setSource(sourceDescription.build());\n'})}),"\n",(0,d.jsx)(s.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-swift",children:'let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")\n\nlet vastAdTag = "//cdn.theoplayer.com/demos/ads/vast/vast.xml"\nlet ad1 = THEOAdDescription(src : vastAdTag, timeOffset: "start")\nlet ad2 = THEOAdDescription(src : vastAdTag, timeOffset: "start")\nlet ad3 = THEOAdDescription(src : vastAdTag, timeOffset: "00:00:15")\nlet ad4 = THEOAdDescription(src : vastAdTag, timeOffset: "00:00:15")\nlet ad5 = THEOAdDescription(src : vastAdTag, timeOffset: "stop")\nlet source = SourceDescription(source : typedSource, ads: [ad1, ad2, ad3, ad4, ad5])\n\ntheoplayer.source = source\n'})}),"\n",(0,d.jsx)(s.h3,{id:"scheduling-a-skippable-mid-roll",children:"Scheduling a skippable mid-roll"}),"\n",(0,d.jsxs)(s.p,{children:['When using the "default" ad integration, you can define when an VAST ad can be skipped through the ',(0,d.jsx)(s.code,{children:"skipOffset"})," property."]}),"\n",(0,d.jsxs)(s.p,{children:["However, it is recommended to leverage the ",(0,d.jsx)(s.code,{children:"skipOffset"})," property in your VAST (or VMAP) file instead, and adhere to the ",(0,d.jsx)(s.a,{href:"https://iabtechlab.com/standards/vast/",children:"VAST standard"}),",\nbecause this offers the widest support across ad integrations and platforms."]}),"\n",(0,d.jsxs)(s.p,{children:["The following snippets demonstrate how to allow viewers to skip a mid-roll after 5 seconds.\nNote that the ",(0,d.jsx)(s.code,{children:"skipOffset"})," property is not supported when using other ad integrations, such as Google IMA, SpotX and FreeWheel (because we're dependent on third-party APIs)."]}),"\n",(0,d.jsx)(s.h4,{id:"web-sdk-2",children:"Web SDK"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"player.source = {\n  sources: [\n    {\n      src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n    },\n  ],\n  ads: [\n    {\n      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: '00:00:15',\n      skipOffset: '5',\n    },\n  ],\n};\n"})}),"\n",(0,d.jsx)(s.h4,{id:"android-sdk-2",children:"Android SDK"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-java",children:'TypedSource.Builder typedSource = new TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8");\nSourceDescription.Builder sourceDescription = new SourceDescription.Builder(typedSource.build());\n\nsourceDescription.ads(\n    GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .timeOffset("00:00:15")\n        .skipOffset("5")\n        .build()\n);\n\ntheoplayerView.getPlayer().setSource(sourceDescription.build());\n'})}),"\n",(0,d.jsx)(s.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-2",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-swift",children:'let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")\n\nlet ad = THEOAdDescription(src : "//cdn.theoplayer.com/demos/ads/vast/vast.xml", timeOffset: "00:00:15", skipOffset: "5")\nlet source = SourceDescription(source : typedSource, ads: [ad])\n\ntheoplayer.source = source\n'})}),"\n",(0,d.jsx)(s.h2,{id:"vmap",children:"VMAP"}),"\n",(0,d.jsxs)(s.p,{children:["Scheduling a VMAP advertisement is similar to scheduling a VAST advertisement.\nHowever, you don't define the ",(0,d.jsx)(s.code,{children:"timeOffset"}),", because the VMAP playlist defines the offsets of each ad break it contains."]}),"\n",(0,d.jsx)(s.p,{children:"The snippets below demonstrate how to configure a VMAP advertisement."}),"\n",(0,d.jsx)(s.h3,{id:"web-sdk-3",children:"Web SDK"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",children:"// Declare a VMAP ad source. No timeOffset here, because the VMAP itself arranges this.\nlet vmapSource = '//cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml';\nlet ad = [{ sources: vmapSource }];\n\nlet source = {\n  sources: [typedSource],\n  ads: ad,\n};\nplayer.source = source;\n"})}),"\n",(0,d.jsx)(s.h3,{id:"android-sdk-3",children:"Android SDK"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-java",children:'TypedSource typedSource = TypedSource.Builder(getString(R.string.defaultSourceUrl))\n    .build();\n\nString vmapSource = "//cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml";\nAdDescription ad = GoogleImaAdDescription.Builder(vmapSource).build();\n\nSourceDescription sourceDescription = SourceDescription.Builder(typedSource)\n    .ads(ad)\n    .build();\ntpv.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,d.jsx)(s.h3,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-3",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-swift",children:'let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")\n\nlet vmapSource = "//cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml"\nlet ad = THEOAdDescription(src : vmapSource)\n\nlet source = SourceDescription(source : typedSource, ads: [ad])\ntheoplayer.source = source\n'})}),"\n",(0,d.jsx)(s.h2,{id:"dynamic-scheduling",children:"Dynamic scheduling"}),"\n",(0,d.jsxs)(s.p,{children:["If you've read our ",(0,d.jsx)(s.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v4/knowledge-base/advertisement/user-guide#dynamic-ad-scheduling",children:"Advertising User Guide"}),",\nyou might have picked up that you can also dynamically schedule VAST advertisements in THEOplayer.\nAll previous samples in this article use static, pre-defined scheduling -- you schedule the ads whenever you schedule the stream.\nWith dynamic scheduling, you schedule ads at runtime."]}),"\n",(0,d.jsxs)(s.p,{children:["You use the ",(0,d.jsx)(s.code,{children:"Ads"})," interface to schedule an ",(0,d.jsx)(s.code,{children:"Ad Description"})," at runtime.\nMore specifically, you invoke the ",(0,d.jsx)(s.code,{children:"ads.schedule(<yourAdDescription>)"})," function when your video is already playing."]}),"\n",(0,d.jsxs)(s.p,{children:["Note that specifying the ",(0,d.jsx)(s.code,{children:"timeOffset"})," is optional, and that this value is an absolute value.\nFor example, let's consider that your current playhead position is at the 20 seconds mark,\nand that you want a and you schedule an ad at the 30 seconds mark. To achieve this, you would set ",(0,d.jsx)(s.code,{children:'timeOffset: "00:00:30"'}),",\nand not to ",(0,d.jsx)(s.code,{children:'timeOffset: "00:00:10"'}),", because this would be 10 seconds in the past, and the ad would instantly start playing."]}),"\n",(0,d.jsxs)(s.p,{children:["The following samples illustrate the ",(0,d.jsx)(s.code,{children:"schedule"})," function across different SDKs."]}),"\n",(0,d.jsx)(s.h3,{id:"web-sdk-4",children:"Web SDK"}),"\n",(0,d.jsx)(s.p,{children:"Invoking the following function when the video is already playing will instantly schedule the VAST ad to be played."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"player.ads.schedule({\n  sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',\n});\n"})}),"\n",(0,d.jsx)(s.h3,{id:"android-sdk-4",children:"Android SDK"}),"\n",(0,d.jsx)(s.p,{children:"Invoking the following function when the video is already playing will instantly schedule the VAST ad to be played."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-java",children:'theoplayerView.getPlayer().getAds().schedule(new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml").build());\n'})}),"\n",(0,d.jsx)(s.h3,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-4",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,d.jsx)(s.p,{children:"Invoking the following function when the video is already playing will instantly schedule the VAST ad to be played."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-swift",children:'player.ads.schedule(adDescription: THEOAdDescription(src: "//cdn.theoplayer.com/demos/ads/vast/vast.xml"))\n'})})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return i}});var t=n(67294);let d={},o=t.createContext(d);function i(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);