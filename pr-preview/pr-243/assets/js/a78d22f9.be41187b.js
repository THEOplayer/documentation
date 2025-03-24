"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["39816"],{46266:function(e,n,r){r.r(n),r.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream","title":"How to configure a different stream to Chromecast","description":"Some streaming setups require you to cast a different stream to a Chromecast Receiver device than the one playing on a Chromecast Receiver device.","source":"@site/theoplayer/how-to-guides/03-cast/01-chromecast/03-how-to-configure-to-a-different-stream.md","sourceDirName":"how-to-guides/03-cast/01-chromecast","slug":"/how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream","permalink":"/documentation/pr-preview/pr-243/theoplayer/how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/03-cast/01-chromecast/03-how-to-configure-to-a-different-stream.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"Debugging","permalink":"/documentation/pr-preview/pr-243/theoplayer/how-to-guides/cast/chromecast/debugging"},"next":{"title":"Sending messages from/to Sender to/from Receiver","permalink":"/documentation/pr-preview/pr-243/theoplayer/how-to-guides/cast/chromecast/sending-messages-from-to-sender-to-from-receiver"}}'),o=r("85893"),c=r("50065");let s={},i="How to configure a different stream to Chromecast",a={},l=[{value:"ChromecastConnection API",id:"chromecastconnection-api",level:2},{value:"SDKs",id:"sdks",level:3},{value:"Web SDK",id:"web-sdk",level:4},{value:"Android SDK",id:"android-sdk",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:4},{value:"Chromecast source API",id:"chromecast-source-api",level:2},{value:"SDKs",id:"sdks-1",level:3},{value:"Web SDK",id:"web-sdk-1",level:4},{value:"Android SDK",id:"android-sdk-1",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",level:4}];function h(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"how-to-configure-a-different-stream-to-chromecast",children:"How to configure a different stream to Chromecast"})}),"\n",(0,o.jsx)(n.p,{children:"Some streaming setups require you to cast a different stream to a Chromecast Receiver device than the one playing on a Chromecast Receiver device.\nFor example, if your playing HLS + FairPlay DRM on your iOS application, you need to cast a different source with DASH + Widevine DRM to your Chromecast application,\nbecause Chromecast applications aren't able to support FairPlay."}),"\n",(0,o.jsx)(n.p,{children:"There are two approaches to achieve this use case:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#chromecastconnection-api",children:"ChromecastConnection API"})," (available as of THEOplayer 2.90.0)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#chromecast-source-api",children:"Chromecast source API"})," (deprecated as of THEOplayer 2.90.0)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You should no longer use the second approach as of THEOplayer 2.90.0 because this API is no longer maintained (even though it ",(0,o.jsx)(n.em,{children:"may"})," be available)."]}),"\n",(0,o.jsx)(n.h2,{id:"chromecastconnection-api",children:"ChromecastConnection API"}),"\n",(0,o.jsxs)(n.p,{children:["The ChromecastConnection API allows you to implement callbacks related to Chromecast playback.\nTo achieve the described use case you can use the ",(0,o.jsx)(n.code,{children:"onStart"})," (i.e. the start of a Chromecast session) to set a new stream,\nand ",(0,o.jsx)(n.code,{children:"onStop"})," (i.e. the end of a Chromecast session) to (re)set your previous stream."]}),"\n",(0,o.jsxs)(n.p,{children:["You may also be interested in ",(0,o.jsx)(n.code,{children:"onJoin"})," (i.e. joining an existing Chromecast session with a new device) or\n",(0,o.jsx)(n.code,{children:"onLeave"})," (i.e. leaving an existing Chromecast session on a device)."]}),"\n",(0,o.jsx)(n.h3,{id:"sdks",children:"SDKs"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"web-sdk",children:"Web SDK"}),"\n",(0,o.jsxs)(n.p,{children:["The snippet below has two ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/SourceDescription.html",children:"sources"}),":"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"senderSource"})," is intended for playback on your sender device (i.e. your browser)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"chromecastSource"})," is intended for playback on your Chromecast application"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/ChromecastConnectionCallback.html",children:(0,o.jsx)(n.code,{children:"ChromecastConnectionCallback"})})," interface is used to:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"chromecastSource"})," when Chromecast playback starts through the ",(0,o.jsx)(n.code,{children:"onStart"})," callback."]}),"\n",(0,o.jsxs)(n.li,{children:["Revert to the ",(0,o.jsx)(n.code,{children:"senderSource"})," when Chromecast playback stops through the ",(0,o.jsx)(n.code,{children:"onStop"})," callback."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"var senderSource = {\n  sources: {\n    src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',\n    type: 'application/x-mpegurl',\n  },\n};\nvar chromecastSource = {\n  sources: {\n    src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n    type: 'application/x-mpegurl',\n  },\n};\nplayer.source = senderSource;\nplayer.cast.chromecast.connectionCallback = {\n  onStart: function (source) {\n    return chromecastSource;\n  },\n  onStop: function (source) {\n    return senderSource;\n  },\n  onJoin: function (source) {\n    return source;\n  },\n  onLeave: function (source) {\n    return source;\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onJoin"})," and ",(0,o.jsx)(n.code,{children:"onLeave"})," implementations in the above snippet adhere to the default behavior."]}),"\n",(0,o.jsx)(n.h4,{id:"android-sdk",children:"Android SDK"}),"\n",(0,o.jsxs)(n.p,{children:["The snippet below has two ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/SourceDescription.Builder.html",children:"sources"}),":"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"senderSource"})," is intended for playback on your sender device (i.e. your Android app)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"chromecastSource"})," is intended for playback on your Chromecast application"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/cast/chromecast/Chromecast.html#setConnectionCallback-com.theoplayer.android.api.cast.chromecast.ChromecastConnectionCallback-",children:(0,o.jsx)(n.code,{children:"setConnectionCallback"})})," method is used to\nthrough the ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/THEOplayerView.html",children:"`THEOplayerView'"})," object:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"chromecastSource"})," when Chromecast playback starts through the ",(0,o.jsx)(n.code,{children:"onStart"})," callback."]}),"\n",(0,o.jsxs)(n.li,{children:["Revert to the ",(0,o.jsx)(n.code,{children:"senderSource"})," when Chromecast playback stops through the ",(0,o.jsx)(n.code,{children:"onStop"})," callback."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'SourceDescription senderSource = new SourceDescription.Builder(new TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8").type(SourceType.HLS).build())\n        .build();\nSourceDescription chromecastSource = new SourceDescription.Builder(new TypedSource.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8").type(SourceType.HLS).build())\n        .build();\ntheoPlayerView.getPlayer().setSource(senderSource);\ntheoPlayerView.getCast().getChromecast().setConnectionCallback(new ChromecastConnectionCallback() {\n    @Nullable\n    @Override\n    public SourceDescription onStart(@Nullable SourceDescription sourceDescription) {\n        return chromecastSource;\n    }\n\n    @Nullable\n    @Override\n    public SourceDescription onStop(@Nullable SourceDescription sourceDescription) {\n        return senderSource;\n    }\n\n    @Nullable\n    @Override\n    public SourceDescription onJoin(@Nullable SourceDescription sourceDescription) {\n        return sourceDescription;\n    }\n\n    @Nullable\n    @Override\n    public SourceDescription onLeave(@Nullable SourceDescription sourceDescription) {\n        return sourceDescription;\n    }\n});\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onJoin"})," and ",(0,o.jsx)(n.code,{children:"onLeave"})," implementations in the above snippet adhere to the default behavior."]}),"\n",(0,o.jsx)(n.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsxs)(n.p,{children:["To achieve this use case on the iOS SDK, you have to leverage the ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Protocols/Chromecast_Objc.html#/c:@M@THEOplayerSDK@objc(pl)THEOplayerChromecast(im)setConnectionDelegate:",children:(0,o.jsx)(n.code,{children:"ChromecastConnectionDelegate"})}),"\nof your ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Classes/THEOplayer.html",children:(0,o.jsx)(n.code,{children:"THEOplayer"})})," object."]}),"\n",(0,o.jsxs)(n.p,{children:["The snippet below is an example of how your ",(0,o.jsx)(n.code,{children:"ChromecastConnectionDelegate"})," could look like.\nThis particular snippet has two ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Classes/SourceDescription.html",children:"sources"}),":"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"senderSource"})," is intended for playback on your sender device (i.e. your iOS app)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"chromecastSource"})," is intended for playback on your Chromecast application"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/ChromecastConnectionCallback.html",children:(0,o.jsx)(n.code,{children:"ChromecastConnectionCallback"})})," interface is used to:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"chromecastSource"})," when Chromecast playback starts through the ",(0,o.jsx)(n.code,{children:"onStart"})," callback."]}),"\n",(0,o.jsxs)(n.li,{children:["Revert to the ",(0,o.jsx)(n.code,{children:"senderSource"})," when Chromecast playback stops through the ",(0,o.jsx)(n.code,{children:"onStop"})," callback."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'import UIKit\nimport THEOplayerSDK\n\nclass ChromecastController: ChromecastConnectionDelegate {\n\n    weak var theoplayer : THEOplayer?\n\n    private var senderSource: SourceDescription {\n        let typedSource = TypedSource(\n            src: "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8",\n            type: "application/x-mpegurl"\n        )\n        return SourceDescription(source: typedSource)\n    }\n\n    private var chromecastSource: SourceDescription {\n        let typedSource = TypedSource(\n            src: "https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)",\n            type: "application/dash+xml",\n            drm: WidevineDRMConfiguration(licenseAcquisitionURL: "https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac")\n        )\n        return SourceDescription(source: typedSource)\n    }\n\n    init(theo : THEOplayer) {\n        self.theoplayer = theo\n        self.theoplayer?.cast?.chromecast?.setConnectionDelegate(self)\n    }\n\n    func onStart(sourceDescription: SourceDescription?) -> SourceDescription? {\n        return chromecastSource\n    }\n\n    func onStop(sourceDescription: SourceDescription?) -> SourceDescription? {\n        return senderSource\n    }\n\n    func onJoin(sourceDescription: SourceDescription?) -> SourceDescription? {\n        return sourceDescription\n    }\n\n    func onLeave(sourceDescription: SourceDescription?) -> SourceDescription? {\n        return sourceDescription\n    }\n\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onJoin"})," and ",(0,o.jsx)(n.code,{children:"onLeave"})," implementations in the above snippet adhere to the default behavior."]}),"\n",(0,o.jsxs)(n.p,{children:["Once you've implemented your ",(0,o.jsx)(n.code,{children:"ChromecastConnectionDelegate"}),", you have to initialize an instance of this near the code of your where\nyou're setting your ",(0,o.jsx)(n.code,{children:"player.source"})," (e.g. ",(0,o.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/blob/master/Google-Cast/Google_Cast/PlayerViewController.swift",children:"https://github.com/THEOplayer/samples-ios-sdk/blob/master/Google-Cast/Google_Cast/PlayerViewController.swift"}),").\nThe snippet below demonstrates this concept:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'...\nclass PlayerViewController: UIViewController {\n\n    ...\n    var chromecastController : ChromecastController!\n    var senderSource: SourceDescription {\n        let typedSource = TypedSource(\n            src: "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8",\n            type: "application/x-mpegurl"\n        )\n        return SourceDescription(source: typedSource)\n    }\n    ...\n\n    override func viewDidLoad() {\n\n        ...\n        player.source = senderSource\n        chromecastController = ChromecastController(theo: theoplayer)\n        ...\n\n    }\n\n    ...\n\n}\n...\n'})}),"\n",(0,o.jsx)(n.h2,{id:"chromecast-source-api",children:"Chromecast source API"}),"\n",(0,o.jsxs)(n.p,{children:["The Chromecast source API is a straightforward technique to configure a different ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/SourceDescription.html",children:(0,o.jsx)(n.code,{children:"source"})})," to be loaded for Chromecast playback."]}),"\n",(0,o.jsxs)(n.p,{children:["This API is unmaintained (and deprecated) as of THEOplayer 2.90.0, and developers should use the ",(0,o.jsx)(n.a,{href:"#chromecastconnection-api",children:"ChromecastConnection API"})," instead."]}),"\n",(0,o.jsx)(n.h3,{id:"sdks-1",children:"SDKs"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/Chromecast.html",children:"Chromecast API"})," allows you to configure a different source (i.e. ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/SourceDescription.html",children:(0,o.jsx)(n.code,{children:"SourceDescription"})}),") to be Chromecasted.\nThe snippet below demonstrates this API."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const source = {\n  sources: [\n    {\n      src: '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8',\n      type: 'application/x-mpegurl',\n    },\n  ],\n};\nplayer.cast.chromecast.source = source;\n"})}),"\n",(0,o.jsx)(n.h4,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://cdn.theoplayer.com/doc/android/2.55.1/com/theoplayer/android/api/cast/chromecast/Chromecast.html#setSource-com.theoplayer.android.api.source.SourceDescription-",children:"Chromecast API"})," allows you to configure a different SourceDescription to be Chromecasted\nthrough the ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/cast/Cast.html",children:(0,o.jsx)(n.code,{children:"Cast"})})," of your ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/THEOplayerView.html",children:"`THEOplayerView'"})," object."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'SourceDescription source = new SourceDescription.Builder("//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8").build();\ntheoPlayerView.getCast().getChromecast().setSource(source);\n'})}),"\n",(0,o.jsx)(n.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://cdn.theoplayer.com/doc/ios/2.55.1/Protocols/Chromecast.html#/s:13THEOplayerSDK10ChromecastP6sourceAA17SourceDescriptionCSgvp",children:"Chromecast API"})," allows you to configure a different SourceDescription to be Chromecasted\nthrough the ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Protocols/Cast.html",children:(0,o.jsx)(n.code,{children:"Cast"})})," instance of your ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Classes/THEOplayer.html",children:(0,o.jsx)(n.code,{children:"THEOplayer"})})," object."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'var theoplayerChromecast = theoplayer.cast?.chromecast\ntheoplayerChromecast?.source = SourceDescription(\n    source: TypedSource(\n        src: "https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)",\n        type: "application/dash+xml",\n        drm: WidevineDRMConfiguration(licenseAcquisitionURL: "https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac")\n    )\n)\n'})})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return s}});var t=r(67294);let o={},c=t.createContext(o);function s(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);