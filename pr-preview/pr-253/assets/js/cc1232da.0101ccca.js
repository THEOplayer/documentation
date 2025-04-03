"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["97465"],{61374:function(e,s,t){t.r(s),t.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>l,toc:()=>a,contentTitle:()=>r});var n=JSON.parse('{"id":"how-to-guides/ads/how-to-set-up-vast-and-vmap","title":"How to set up VAST and VMAP ads?","description":"This article explains how to schedule client-side VAST and VMAP advertisements through THEOplayer.","source":"@site/theoplayer/how-to-guides/01-ads/03-how-to-set-up-vast-and-vmap.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/how-to-set-up-vast-and-vmap","permalink":"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/ads/how-to-set-up-vast-and-vmap","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/01-ads/03-how-to-set-up-vast-and-vmap.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"Customizing the ad overlay text","permalink":"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/ads/customizing-the-ad-overlay-text"},"next":{"title":"Yospace","permalink":"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/ads/yospace"}}'),i=t("85893"),o=t("50065");let d={},r="How to set up VAST and VMAP ads?",l={},a=[{value:"SDKs",id:"sdks",level:2},{value:"VAST",id:"vast",level:2},{value:"Scheduling a single pre-roll",id:"scheduling-a-single-pre-roll",level:3},{value:"Web SDK",id:"web-sdk",level:4},{value:"Android SDK",id:"android-sdk",level:4},{value:"iOS/tvOS SDK",id:"iostvos-sdk",level:4},{value:"Scheduling two pre-rolls, two mid-rolls and one post-roll",id:"scheduling-two-pre-rolls-two-mid-rolls-and-one-post-roll",level:3},{value:"Web SDK",id:"web-sdk-1",level:4},{value:"Android SDK",id:"android-sdk-1",level:4},{value:"iOS/tvOS SDK",id:"iostvos-sdk-1",level:4},{value:"Scheduling a skippable mid-roll",id:"scheduling-a-skippable-mid-roll",level:3},{value:"Web SDK",id:"web-sdk-2",level:4},{value:"VMAP",id:"vmap",level:2},{value:"Web SDK",id:"web-sdk-3",level:4},{value:"Android SDK",id:"android-sdk-2",level:4},{value:"iOS/tvOS SDK",id:"iostvos-sdk-2",level:4},{value:"Dynamic scheduling",id:"dynamic-scheduling",level:2},{value:"Web SDK",id:"web-sdk-4",level:4},{value:"Android SDK",id:"android-sdk-3",level:4},{value:"iOS/tvOS SDK",id:"iostvos-sdk-3",level:4},{value:"Resources",id:"resources",level:2}];function c(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"how-to-set-up-vast-and-vmap-ads",children:"How to set up VAST and VMAP ads?"})}),"\n",(0,i.jsx)(s.p,{children:"This article explains how to schedule client-side VAST and VMAP advertisements through THEOplayer."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"A VAST advertisement is a single ad break, and you can position it as a pre-roll, mid-roll or post-roll."}),"\n",(0,i.jsx)(s.li,{children:"A VMAP advertisement is a playlist of ad breaks, and can contain any combination of pre-rolls, mid-rolls and/or post-rolls."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:'Through the THEOplayer API, app developers can define which "ad integration" they want to use.'}),"\n",(0,i.jsx)(s.p,{children:"THEOplayer currently supports 4 types of client-side ad integrations:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"CSAI"}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/ads/google-ima",children:"Google IMA"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/ads/spotx",children:"SpotX"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/ads/freewheel",children:"FreeWheel"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This article explains scheduling VAST and VMAP ads.\nScheduling VAST and VMAP ads through all ad integrations is very similar, so consider this article as a reference guide."}),"\n",(0,i.jsx)(s.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(s.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(s.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(s.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(s.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(s.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,i.jsx)(s.th,{children:"Roku SDK"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(s.td,{children:"No"})]})})]}),"\n",(0,i.jsx)(s.h2,{id:"vast",children:"VAST"}),"\n",(0,i.jsx)(s.p,{children:"Setting up a client-side VAST advertisement means scheduling a VAST ad tag."}),"\n",(0,i.jsxs)(s.p,{children:["As an app developer, you associate a VAST ad tag (URL) (e.g. ",(0,i.jsx)(s.code,{children:"https://cdn.theoplayer.com/demos/ads/vast/vast.xml"}),") with a time offset."]}),"\n",(0,i.jsxs)(s.p,{children:["Additionally, when using the default, ",(0,i.jsx)(s.code,{children:"csai"})," ad integration, you can also specify after how many seconds a VAST ad may be skipped. If you are using Google IMA, the skip offset should be set inside the ad tag instead."]}),"\n",(0,i.jsx)(s.p,{children:"You may also schedule multiple ad tags."}),"\n",(0,i.jsx)(s.p,{children:"Let's consider the following common use-cases:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#scheduling-a-single-pre-roll",children:"Scheduling a single pre-roll"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#scheduling-two-pre-rolls-two-mid-rolls-and-one-post-roll",children:"Scheduling two pre-rolls, two mid-rolls and one post-roll"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#scheduling-a-skippable-mid-roll",children:"Scheduling a skippable mid-roll"})}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"scheduling-a-single-pre-roll",children:"Scheduling a single pre-roll"}),"\n",(0,i.jsx)(s.p,{children:"The following snippets demonstrate how to schedule a single pre-roll."}),"\n",(0,i.jsx)(s.h4,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsxs)(s.p,{children:["You configure an ",(0,i.jsx)(s.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/AdDescription.html",children:"AdDescription"})," in the ",(0,i.jsx)(s.code,{children:"ads"})," property of your ",(0,i.jsx)(s.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/SourceConfiguration.html",children:"SourceConfiguration"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["In this ",(0,i.jsx)(s.code,{children:"AdDescription"}),","]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["You set the value of ",(0,i.jsx)(s.code,{children:"sources"})," to your ad tag URL."]}),"\n",(0,i.jsxs)(s.li,{children:["You set the value of ",(0,i.jsx)(s.code,{children:"timeOffset"})," to ",(0,i.jsx)(s.code,{children:'"start"'})," (or ",(0,i.jsx)(s.code,{children:"00:00:00"})," or ",(0,i.jsx)(s.code,{children:"0%"}),") to indicate that it's a pre-roll."]}),"\n",(0,i.jsxs)(s.li,{children:["You set its ",(0,i.jsx)(s.code,{children:"type"})," to ",(0,i.jsx)(s.code,{children:'"vast"'}),". When this isn't provided, the player will still try to figure out its ",(0,i.jsx)(s.code,{children:"type"})," after making the ad request."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"player.source = {\n  sources: [\n    {\n      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n    },\n  ],\n  ads: [\n    {\n      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: 'start',\n      type: 'vast',\n      integration: 'csai', // When no integration is provided, the player defaults to `csai`.\n    },\n  ],\n};\n"})}),"\n",(0,i.jsxs)(s.p,{children:["If you wanted to schedule a post-roll instead of a pre-roll, you set the value of ",(0,i.jsx)(s.code,{children:"timeOffset"})," to ",(0,i.jsx)(s.code,{children:'"end"'}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["If you want to schedule a mid-roll instead of a pre-roll, you set the value of ",(0,i.jsx)(s.code,{children:"timeOffset"})," to the ",(0,i.jsx)(s.code,{children:"HH:MM:SS"})," format."]}),"\n",(0,i.jsxs)(s.p,{children:["For example, to schedule an advertisement at the 15s mark, you set the value of ",(0,i.jsx)(s.code,{children:"timeOffset"})," to ",(0,i.jsx)(s.code,{children:'"00:00:15"'}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["If you wanted to use Google IMA as an example, you would replace ",(0,i.jsx)(s.code,{children:'integration: "csai"'})," with ",(0,i.jsx)(s.code,{children:'integration: "google-ima"'}),". Before doing so, make sure you have ",(0,i.jsx)(s.a,{href:"https://www.theoplayer.com/docs/theoplayer/how-to-guides/ads/google-ima/",children:"set up Google IMA"})," correctly."]}),"\n",(0,i.jsx)(s.h4,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsxs)(s.p,{children:["We will be using Google IMA here so ",(0,i.jsx)(s.a,{href:"https://www.theoplayer.com/docs/theoplayer/how-to-guides/ads/google-ima/",children:"make sure to set it up"})," before starting."]}),"\n",(0,i.jsxs)(s.p,{children:["You configure a ",(0,i.jsx)(s.a,{href:"pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.Builder.html",children:"GoogleImaAdDescription"})," in the ",(0,i.jsx)(s.code,{children:"ads"})," property of your ",(0,i.jsx)(s.a,{href:"pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/source/SourceDescription.Builder.html#ads-com.theoplayer.android.api.source.addescription.AdDescription...-",children:(0,i.jsx)(s.code,{children:"SourceDescription"})}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["In this ",(0,i.jsx)(s.code,{children:"GoogleImaAdDescription"}),","]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"You set an ad tag URL."}),"\n",(0,i.jsxs)(s.li,{children:["You set the value of ",(0,i.jsx)(s.a,{href:"pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.Builder.html#timeOffset-java.lang.String-",children:(0,i.jsx)(s.code,{children:"timeOffset"})})," to ",(0,i.jsx)(s.code,{children:'"start"'})," (or ",(0,i.jsx)(s.code,{children:"00:00:00"})," or ",(0,i.jsx)(s.code,{children:"0%"}),") to indicate that it's a pre-roll."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-kotlin",children:'theoPlayer.source = SourceDescription.Builder(\n    TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8").build())\n    .ads(\n        GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/dfp-linear-inline-no-skip.xml")\n            .timeOffset("start")\n            .build())\n    .build()\n'})}),"\n",(0,i.jsxs)(s.p,{children:["If you wanted to schedule a post-roll instead of a pre-roll, you set the value of ",(0,i.jsx)(s.code,{children:"timeOffset"})," to ",(0,i.jsx)(s.code,{children:'"end"'}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["If you want to schedule a mid-roll instead of a pre-roll, you set the value of ",(0,i.jsx)(s.code,{children:"timeOffset"})," to the ",(0,i.jsx)(s.code,{children:"HH:MM:SS"})," format."]}),"\n",(0,i.jsxs)(s.p,{children:["For example, to schedule an advertisement at the 15s mark, you set the value of ",(0,i.jsx)(s.code,{children:"timeOffset"})," to ",(0,i.jsx)(s.code,{children:'"00:00:15"'}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"iostvos-sdk",children:"iOS/tvOS SDK"}),"\n",(0,i.jsxs)(s.p,{children:["We will be using Google IMA here so ",(0,i.jsx)(s.a,{href:"https://www.theoplayer.com/docs/theoplayer/how-to-guides/ads/google-ima/",children:"make sure to set it up"})," before starting."]}),"\n",(0,i.jsxs)(s.p,{children:["You configure a ",(0,i.jsx)(s.a,{href:"pathname:///theoplayer/v9/api-reference/ios/Classes/GoogleImaAdDescription.html",children:"GoogleImaAdDescription"})," in the ",(0,i.jsx)(s.code,{children:"ads"})," property of your ",(0,i.jsx)(s.a,{href:"pathname:///theoplayer/v9/api-reference/ios/Classes/SourceDescription.html#/s:13THEOplayerSDK17SourceDescriptionC3adsSayAA02AdD0_pGSgvp",children:(0,i.jsx)(s.code,{children:"SourceDescription"})}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["In this ",(0,i.jsx)(s.code,{children:"GoogleImaAdDescription"}),","]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"You set an ad tag URL."}),"\n",(0,i.jsxs)(s.li,{children:["You set the value of ",(0,i.jsx)(s.a,{href:"pathname:///theoplayer/v9/api-reference/ios/Classes/THEOAdDescription.html#/c:@M@THEOplayerSDK@objc(cs)THEOAdDescription(py)timeOffset",children:(0,i.jsx)(s.code,{children:"timeOffset"})})," to ",(0,i.jsx)(s.code,{children:'"start"'})," (or ",(0,i.jsx)(s.code,{children:"00:00:00"})," or ",(0,i.jsx)(s.code,{children:"0%"}),") to indicate that it's a pre-roll."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-swift",children:'private var source: SourceDescription {\n    // Declare a TypedSource object with a stream URL and its type\n    let typedSource = TypedSource(\n        src: videoUrl,\n        type: mimeType\n    )\n\n    // The AdDescription object that defines the IMA ad to be played.\n    let offset = "start",\n    let adDescription: GoogleImaAdDescription = GoogleImaAdDescription(src: adTagUrl, timeOffset: offset)\n\n    // Returns a computed SourceDescription object\n    return SourceDescription(\n        source: typedSource,\n        ads: [adDescription],\n        poster: posterUrl\n    )\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["If you wanted to schedule a post-roll instead of a pre-roll, you set the value of ",(0,i.jsx)(s.code,{children:"timeOffset"})," to ",(0,i.jsx)(s.code,{children:'"end"'}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["If you want to schedule a mid-roll instead of a pre-roll, you set the value of ",(0,i.jsx)(s.code,{children:"timeOffset"})," to the ",(0,i.jsx)(s.code,{children:"HH:MM:SS"})," format."]}),"\n",(0,i.jsxs)(s.p,{children:["For example, to schedule an advertisement at the 15s mark, you set the value of ",(0,i.jsx)(s.code,{children:"timeOffset"})," to ",(0,i.jsx)(s.code,{children:'"00:00:15"'}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"scheduling-two-pre-rolls-two-mid-rolls-and-one-post-roll",children:"Scheduling two pre-rolls, two mid-rolls and one post-roll"}),"\n",(0,i.jsx)(s.p,{children:"Scheduling multiple VAST ads is only slightly different from scheduling a single VAST ad. Instead of passing along one ad description to your array, you pass along multiple ad descriptions to the array."}),"\n",(0,i.jsx)(s.p,{children:"The following snippets demonstrate how you would configure two pre-rolls, two mid-rolls and one post-roll through the usage of VAST ads."}),"\n",(0,i.jsx)(s.h4,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"player.source = {\n  sources: [\n    {\n      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n    },\n  ],\n  ads: [\n    {\n      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: 'start',\n    },\n    {\n      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: 'start',\n    },\n    {\n      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: '00:00:15',\n    },\n    {\n      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: '00:00:30',\n    },\n    {\n      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      timeOffset: 'end',\n    },\n  ],\n};\n"})}),"\n",(0,i.jsx)(s.h4,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-kotlin",children:'val typedSource = TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")\nval sourceDescription = SourceDescription.Builder(typedSource.build())\n\nsourceDescription.ads(\n    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .timeOffset("start")\n        .build(),\n    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .timeOffset("start")\n        .build(),\n    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .timeOffset("00:00:15")\n        .build(),\n    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .timeOffset("00:00:15")\n        .build(),\n    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .timeOffset("end")\n        .build()\n)\n\ntheoPlayer.source = sourceDescription.build()\n'})}),"\n",(0,i.jsx)(s.h4,{id:"iostvos-sdk-1",children:"iOS/tvOS SDK"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-swift",children:'let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")\n\nlet vastAdTag = "https://cdn.theoplayer.com/demos/ads/vast/vast.xml"\nlet ad1 = GoogleImaAdDescription(src : vastAdTag, timeOffset: "start")\nlet ad2 = GoogleImaAdDescription(src : vastAdTag, timeOffset: "start")\nlet ad3 = GoogleImaAdDescription(src : vastAdTag, timeOffset: "00:00:15")\nlet ad4 = GoogleImaAdDescription(src : vastAdTag, timeOffset: "00:00:15")\nlet ad5 = GoogleImaAdDescription(src : vastAdTag, timeOffset: "end")\nlet source = SourceDescription(source : typedSource, ads: [ad1, ad2, ad3, ad4, ad5])\n\ntheoplayer.source = source\n'})}),"\n",(0,i.jsx)(s.h3,{id:"scheduling-a-skippable-mid-roll",children:"Scheduling a skippable mid-roll"}),"\n",(0,i.jsxs)(s.p,{children:["When using the ",(0,i.jsx)(s.code,{children:"csai"})," ad integration, you can define when an VAST ad can be skipped through the ",(0,i.jsx)(s.code,{children:"skipOffset"})," property."]}),"\n",(0,i.jsxs)(s.p,{children:["However, it is recommended to leverage the ",(0,i.jsx)(s.code,{children:"skipOffset"})," property in your VAST (or VMAP) file instead, and adhere to the ",(0,i.jsx)(s.a,{href:"https://iabtechlab.com/standards/vast/",children:"VAST standard"}),",\nbecause this offers the widest support across ad integrations and platforms."]}),"\n",(0,i.jsx)(s.p,{children:"The following snippets demonstrate how to allow viewers to skip a mid-roll after 5 seconds."}),"\n",(0,i.jsxs)(s.p,{children:["Note that the ",(0,i.jsx)(s.code,{children:"skipOffset"})," property is not supported when using other ad integrations, such as Google IMA, SpotX and FreeWheel because we are dependent on third-party APIs."]}),"\n",(0,i.jsx)(s.h4,{id:"web-sdk-2",children:"Web SDK"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"player.source = {\n  sources: [\n    {\n      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n    },\n  ],\n  ads: [\n    {\n      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',\n      type: 'vast',\n      timeOffset: '00:00:15',\n      skipOffset: '5',\n    },\n  ],\n};\n"})}),"\n",(0,i.jsx)(s.h2,{id:"vmap",children:"VMAP"}),"\n",(0,i.jsxs)(s.p,{children:["Scheduling a VMAP advertisement is similar to scheduling a VAST advertisement. However, you don't define the ",(0,i.jsx)(s.code,{children:"timeOffset"}),", because the VMAP playlist defines the offsets of each ad break it contains. The time offset helps VAST ads to play at a specific timestamp. VMAP ads can define that behavior inside their manifest file, thus they should not have a timeOffset parameter. This property may not be configured for ad types other than ",(0,i.jsx)(s.code,{children:"VAST"}),". Setting a ",(0,i.jsx)(s.code,{children:"timeOffset"})," on a ",(0,i.jsx)(s.code,{children:"VMAP"})," ad will cause your ads not to be scheduled correctly, unless you explicitly configured an ",(0,i.jsx)(s.code,{children:"AdSource.type"}),", in which case ",(0,i.jsx)(s.code,{children:"timeOffset"})," will be ignored. This is because the player must decide up front when to load the ad source: ",(0,i.jsx)(s.code,{children:"VMAP"})," ads must be loaded immediately in order to schedule them correctly, while loading a ",(0,i.jsx)(s.code,{children:"VAST"})," ad can be deferred until right before the ",(0,i.jsx)(s.code,{children:"timeOffset"})," at which to play them. Therefore, if a ",(0,i.jsx)(s.code,{children:"timeOffset"})," is configured without an explicit ",(0,i.jsx)(s.code,{children:"AdSource.Type"}),", the player will assume that it's a ",(0,i.jsx)(s.code,{children:"VAST"})," ad."]}),"\n",(0,i.jsx)(s.p,{children:"The snippets below demonstrate how to configure a VMAP advertisement."}),"\n",(0,i.jsx)(s.h4,{id:"web-sdk-3",children:"Web SDK"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"// Declare a VMAP ad source. No timeOffset here, because the VMAP itself arranges this.\nplayer.source = {\n  sources: [\n    {\n      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n    },\n  ],\n  ads: [\n    {\n      sources: 'https://cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml',\n      type: 'vmap',\n      integration: 'csai', // When no integration is provided, the player defaults to `csai`.\n    },\n  ],\n};\n"})}),"\n",(0,i.jsx)(s.h4,{id:"android-sdk-2",children:"Android SDK"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-kotlin",children:'val typedSource = TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")\nval sourceDescription = SourceDescription.Builder(typedSource.build())\n\nsourceDescription.ads(\n    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml")\n        .build()\n)\n\ntheoPlayer.source = sourceDescription.build()\n'})}),"\n",(0,i.jsx)(s.h4,{id:"iostvos-sdk-2",children:"iOS/tvOS SDK"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-swift",children:'let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")\n\nlet vmapSource = "https://cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml"\nlet ad = GoogleImaAdDescription(src : vmapSource)\n\nlet source = SourceDescription(source : typedSource, ads: [ad])\ntheoplayer.source = source\n'})}),"\n",(0,i.jsx)(s.h2,{id:"dynamic-scheduling",children:"Dynamic scheduling"}),"\n",(0,i.jsxs)(s.p,{children:["If you've read our ",(0,i.jsx)(s.a,{href:"/documentation/pr-preview/pr-253/theoplayer/knowledge-base/advertisement/user-guide#dynamic-ad-scheduling",children:"Advertising User Guide"}),", you might have picked up that you can also dynamically schedule VAST advertisements in THEOplayer.\nAll previous samples in this article use static, pre-defined scheduling; you schedule the ads whenever you schedule the stream. With dynamic scheduling, you schedule ads at runtime."]}),"\n",(0,i.jsxs)(s.p,{children:["You use the ",(0,i.jsx)(s.code,{children:"Ads"})," interface to schedule an ",(0,i.jsx)(s.code,{children:"AdDescription"})," at runtime. More specifically, you invoke the ",(0,i.jsx)(s.code,{children:"ads.schedule(<yourAdDescription>)"})," function when your video is already playing."]}),"\n",(0,i.jsxs)(s.p,{children:["Note that specifying the ",(0,i.jsx)(s.code,{children:"timeOffset"})," is optional, and that this value is an absolute value. For example, let's consider that your current playhead position is at the 20 seconds mark,\nand that you want a and you schedule an ad at the 30 seconds mark. To achieve this, you would set ",(0,i.jsx)(s.code,{children:'timeOffset: "00:00:30"'}),",\nand not to ",(0,i.jsx)(s.code,{children:'timeOffset: "00:00:10"'}),", because this would be 10 seconds in the past, and the ad would instantly start playing."]}),"\n",(0,i.jsxs)(s.p,{children:["The following samples illustrate the ",(0,i.jsx)(s.code,{children:"schedule"})," function across different SDKs. Invoking the following example functions when the video is already playing will instantly schedule the VAST ad to be played:"]}),"\n",(0,i.jsx)(s.h4,{id:"web-sdk-4",children:"Web SDK"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"player.ads.schedule({\n  sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',\n});\n"})}),"\n",(0,i.jsx)(s.h4,{id:"android-sdk-3",children:"Android SDK"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-kotlin",children:'theoPlayer.ads.schedule(\n    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")\n        .build()\n)\n'})}),"\n",(0,i.jsx)(s.h4,{id:"iostvos-sdk-3",children:"iOS/tvOS SDK"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-swift",children:'theoplayer.ads.schedule(adDescription: GoogleImaAdDescription(src: "https://cdn.theoplayer.com/demos/ads/vast/vast.xml"))\n'})}),"\n",(0,i.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/THEOplayer/samples-html5-sdk",children:"Samples for Web SDK"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/THEOplayer/samples-android-sdk",children:"Samples for Android SDK"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/THEOplayer/samples-ios-sdk",children:"Samples for iOS SDK"})}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,s,t){t.d(s,{Z:function(){return r},a:function(){return d}});var n=t(67294);let i={},o=n.createContext(i);function d(e){let s=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);