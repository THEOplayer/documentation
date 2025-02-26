"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["70525"],{33846:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"external/iOS-Connector/Code/Sideloaded-TextTracks/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer_versioned_docs/version-v7/external/iOS-Connector/Code/Sideloaded-TextTracks/README.md","sourceDirName":"external/iOS-Connector/Code/Sideloaded-TextTracks","slug":"/connectors/ios/sideloaded-texttracks/getting-started","permalink":"/documentation/pr-preview/pr-223/theoplayer/v7/connectors/ios/sideloaded-texttracks/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/iOS-Connector/blob/-/Code/Sideloaded-TextTracks/README.md","tags":[],"version":"v7","frontMatter":{"slug":"/connectors/ios/sideloaded-texttracks/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"ios","previous":{"title":"Sideloaded Subtitles","permalink":"/documentation/pr-preview/pr-223/theoplayer/v7/connectors/ios/sideloaded-texttracks"},"next":{"title":"Changelog","permalink":"/documentation/pr-preview/pr-223/theoplayer/v7/connectors/ios/changelog"}}'),n=i("85893"),a=i("50065");let o={slug:"/connectors/ios/sideloaded-texttracks/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},r="THEOplayer \u2764\uFE0F Sideloaded Subtitles",l={},c=[{value:"Installation",id:"installation",level:2},{value:"Cocoapods",id:"cocoapods",level:3},{value:"Usage",id:"usage",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Setting a time offset",id:"setting-a-time-offset",level:2},{value:"More examples:",id:"more-examples",level:3},{value:"(Experimental) Shifting the presentation of the cues forward (later) by 5 seconds.",id:"experimental-shifting-the-presentation-of-the-cues-forward-later-by-5-seconds",level:4},{value:"(Experimental) Shifting the presentation of the cues backwards (earlier) by 5 seconds.",id:"experimental-shifting-the-presentation-of-the-cues-backwards-earlier-by-5-seconds",level:4},{value:"Warnings",id:"warnings",level:4},{value:"Automatic synchronization",id:"automatic-synchronization",level:2},{value:"Caching",id:"caching",level:2},{value:"Limitations",id:"limitations-1",level:3}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"theoplayer-\uFE0F-sideloaded-subtitles",children:"THEOplayer \u2764\uFE0F Sideloaded Subtitles"})}),"\n",(0,n.jsx)(t.p,{children:"THEOplayer-Connector-SideloadedSubtitle brings sideloaded subtitle support to THEOplayer's iOS SDK."}),"\n",(0,n.jsx)(t.p,{children:"By using an experimental API from THEOplayer, this library aims to achieve sideloaded TextTrack support across all Apple devices and all media playback scenarios."}),"\n",(0,n.jsx)(t.p,{children:"The presented technique is superior to any other similar options as it brings sideloading support to Airplay, Picture-in-Picture and DRM playback (and their combinations) and is out-of-the-box compatible with the TextTrackStyling API from THEOplayer."}),"\n",(0,n.jsx)(t.p,{children:"This connector is intended to be used for subtitle text tracks. For metadata text tracks, such as WebVTT thumbnails, starting from v7.10 the core THEOplayerSDK will handle the sideloading without the help of this connector."}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.h3,{id:"cocoapods",children:(0,n.jsx)(t.a,{href:"https://guides.cocoapods.org/using/getting-started.html#getting-started",children:"Cocoapods"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Create a Podfile if you don't already have one. From the root of your project directory, run the following command: ",(0,n.jsx)(t.code,{children:"pod init"})]}),"\n",(0,n.jsxs)(t.li,{children:["To your Podfile, add links to the registry of Cocoapods: ",(0,n.jsx)(t.code,{children:"source 'https://cdn.cocoapods.org/'"}),". If this fails, bypass their CDN by using ",(0,n.jsx)(t.code,{children:"source 'https://github.com/CocoaPods/Specs.git'"})]}),"\n",(0,n.jsxs)(t.li,{children:["To your Podfile, add the connector pods that you want to use in your app: ",(0,n.jsx)(t.code,{children:"pod 'THEOplayer-Connector-SideloadedSubtitle'"})]}),"\n",(0,n.jsxs)(t.li,{children:["Install the pods using ",(0,n.jsx)(t.code,{children:"pod install"}),", then open your ",(0,n.jsx)(t.code,{children:".xcworkspace"})," file to see the project in Xcode."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Import the ",(0,n.jsx)(t.code,{children:"THEOplayerConnectorSideloadedSubtitle"})," module."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"import THEOplayerConnectorSideloadedSubtitle\n"})}),"\n",(0,n.jsxs)(t.p,{children:["After importing the module, a new API will be available on the THEOplayer instance called ",(0,n.jsx)(t.code,{children:"setSourceWithSubtitles(source: SourceDescription?)"})]}),"\n",(0,n.jsxs)(t.p,{children:["If you use this method to set a source, THEOplayer will be able to present sideloaded subtitles (via the ",(0,n.jsx)(t.code,{children:"TextTrackDescription"})," already known from THEOplayer 4.x) configured with your ",(0,n.jsx)(t.code,{children:"SourceDescription"}),", e.g.:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'public static var sourceWithSideloadedTextTrack : SourceDescription {\n    let typedSource = TypedSource(src: "https://sourceURL.com/manifest.m3u8, type: "application/x-mpegurl")\n    let textTrack = TextTrackDescription(src: "https://sideloadedurl.com/subtitle.vtt", srclang: "language_code", isDefault: false, kind: .subtitles, label:"Label", format: .WebVTT)\n    return SourceDescription(source : typedSource, textTracks :[textTrack])\n}\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"theoplayer.setSourceWithSubtitles(source: sourceWithSideloadedTextTrack)\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE:"})," Replace every ",(0,n.jsx)(t.code,{children:"theopalyer.source = newSource"})," call with ",(0,n.jsx)(t.code,{children:"theoplayer.setSourceWithSubtitles(source: newSource)"})," in your application if you intend to use (at least once) subtitle sideloading. Even if you don't have sideloaded subtitles on some of your sources. ",(0,n.jsx)(t.strong,{children:"Combining both approaches could lead to unexpected behavior."})]}),"\n",(0,n.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["THEOplayer-Connector-SideloadedSubtitle relies on an experimental API from THEOplayer which is subject to change. ",(0,n.jsx)(t.strong,{children:"Always use matching THEOplayer and Connector versions."})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:["Supported formats are: iOS-compatible ",(0,n.jsx)(t.code,{children:"WebVTT"})," subtitles and SRT"]})," via this connector today."]}),"\n",(0,n.jsxs)(t.li,{children:["The presented ",(0,n.jsx)(t.strong,{children:"label within THEOplayer is auto-generated by the operating system"})," based on the language code and ",(0,n.jsx)(t.strong,{children:"the configured label will be disregarded"}),'. (e.g. "eng" --\x3e "English" (if the device language is English; "eng" --\x3e "Engels", if the device language is Dutch). If an invalid language code is specified, the system will use that one as label. (e.g. "MyCustomLanguageCode" --\x3e "MyCustomLanguageCode")']}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"isDefault: true"})," setting will be not taken into account on sideloaded TextTracks as it could lead to invalid source (if the stream already contains default subtitles). Enabling the desired sideloaded subtitle can be achieved via ",(0,n.jsx)(t.code,{children:"ADD_TRACK"})," listener."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'theoplayer.textTracks.addEventListener(type: TextTrackListEventTypes.ADD_TRACK) { ev in\n    var texttrack = ev.track as! TextTrack\n    if texttrack.language == "sideloaded_language_code" {\n        tt.mode = .showing\n    }\n}\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:"Loading thumbnail metadata through sideloaded WebVTT subtitles is not supported."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"setting-a-time-offset",children:"Setting a time offset"}),"\n",(0,n.jsxs)(t.p,{children:["It is possible to shift the presentation of the cues by using the extended ",(0,n.jsx)(t.code,{children:"SSTextTrackDescription"})," class instead of ",(0,n.jsx)(t.code,{children:"TextTrackDescription"}),". It will provide an additional property ",(0,n.jsx)(t.code,{children:"vttTimestamp"})," which allows to specify a ",(0,n.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/draft-pantos-http-live-streaming-22#section-3.5",children:"X-TIMESTAMP-MAP"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The X-TIMESTAMP-MAP is optional and can be omitted from the WebVTT file and in general, it is not required. It is ",(0,n.jsx)(t.strong,{children:"only necessary if you use a WEBVTT file inside an HLS subtitle rendition"})," and you try to achieve subtitle synchronization.\nAnd this is exactly the way how this connector operates."]}),"\n",(0,n.jsxs)(t.p,{children:["The APIs below provide a way of adding or modifying the timestamp in case it is required by ",(0,n.jsx)(t.strong,{children:"mapping the PTS"})," (e.g. from a video rendition) ",(0,n.jsx)(t.strong,{children:"to a local time within the WEBVTT"})," file."]}),"\n",(0,n.jsx)(t.p,{children:"When converting different formats to WebVTT, this module does not add the timestamp by default."}),"\n",(0,n.jsx)(t.p,{children:"The API usage remains mostly the same, with the exception of adding the timestamp:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'public static var sourceWithSideloadedTextTrack : SourceDescription {\n    let typedSource = TypedSource(src: "https://sourceURL.com/manifest.m3u8, type: "application/x-mpegurl")\n    let textTrack = SSTextTrackDescription(src: "https://sideloadedurl.com/subtitle.vtt", srclang: "language_code", isDefault: false, kind: .subtitles, label:"Label", format: .WebVTT)\n    textTrack.vttTimestamp = .init(pts: "900000", localTime: "00:00:00.000")\n    return SourceDescription(source : typedSource, textTracks :[textTrack])\n}\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"theoplayer.setSourceWithSubtitles(source: sourceWithSideloadedTextTrack)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If the source WebVTT file specified in the ",(0,n.jsx)(t.code,{children:"SSTextTrackDescription"})," already contains the X-TIMESTAMP-MAP timestamp, then it can be accessed by using the ",(0,n.jsx)(t.code,{children:"extractSourceTimestamp"})," method:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'let textTrack = SSTextTrackDescription(src: "https://sideloadedurl.com/subtitle.vtt", srclang: "language_code", isDefault: false, kind: .subtitles, label:"Label", format: .WebVTT)\ntextTrack.extractSourceTimestamp { timestamp, error in\n    print(timestamp.pts, timestamp.localTime)   // outputs the values from "https://sideloadedurl.com/subtitle.vtt"\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The ",(0,n.jsx)(t.code,{children:"extractSourceTimestamp"})," method does not set the ",(0,n.jsx)(t.code,{children:"vttTimestamp"})," property, but only reads the timestamp value from the source. You will need this if you want to modify the timestamp according to the initial values."]}),"\n",(0,n.jsx)(t.h3,{id:"more-examples",children:"More examples:"}),"\n",(0,n.jsx)(t.p,{children:"A sample WEBVTT file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"WEBVTT\n\n1\n00:00:11.000 --\x3e 00:00:12.000\n- Never drink liquid nitrogen.\n\n2\n00:00:13.000 --\x3e 00:15:00.000\n- It will perforate your stomach.\n- You could die.\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Using the sample file mentioned above, if your PTS is ",(0,n.jsx)(t.code,{children:"900000"})," in the video rendition, then mapping ",(0,n.jsx)(t.code,{children:"900000"})," to ",(0,n.jsx)(t.code,{children:"00:00:00.000"})," will show the first subtitle cue exactly when you would expect it, at 11 seconds in the movie."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'let textTrack = SSTextTrackDescription(src: "https://sideloadedurl.com/subtitle.vtt", srclang: "language_code", isDefault: false, kind: .subtitles, label:"Label", format: .WebVTT)\ntextTrack.vttTimestamp = .init(pts: "900000", localTime: "00:00:00.000")\n'})}),"\n",(0,n.jsx)(t.h4,{id:"experimental-shifting-the-presentation-of-the-cues-forward-later-by-5-seconds",children:"(Experimental) Shifting the presentation of the cues forward (later) by 5 seconds."}),"\n",(0,n.jsx)(t.p,{children:"You can achieve this by adding values to the first digit of the PTS timestamp with localTime set to 0:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'let textTrack = SSTextTrackDescription(src: "https://sideloadedurl.com/subtitle.vtt", srclang: "language_code", isDefault: false, kind: .subtitles, label:"Label", format: .WebVTT)\n// we assume here that the PTS in the video rendition is 900000, so 900000 + 500000 = 1400000\ntextTrack.vttTimestamp = .init(pts: "1400000", localTime: "00:00:00.000")\n'})}),"\n",(0,n.jsx)(t.p,{children:"The timestamp is relative to the localTime, so the following settings will cancel each other out:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'let textTrack = SSTextTrackDescription(src: "https://sideloadedurl.com/subtitle.vtt", srclang: "language_code", isDefault: false, kind: .subtitles, label:"Label", format: .WebVTT)\ntextTrack.vttTimestamp = .init(pts: "1400000", localTime: "00:00:05.000")\n'})}),"\n",(0,n.jsx)(t.h4,{id:"experimental-shifting-the-presentation-of-the-cues-backwards-earlier-by-5-seconds",children:"(Experimental) Shifting the presentation of the cues backwards (earlier) by 5 seconds."}),"\n",(0,n.jsx)(t.p,{children:"You can achieve this by subtracting values to the first digit of the PTS timestamp with localTime set to 0:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'let textTrack = SSTextTrackDescription(src: "https://sideloadedurl.com/subtitle.vtt", srclang: "language_code", isDefault: false, kind: .subtitles, label:"Label", format: .WebVTT)\n// we assume here that the PTS in the video rendition is 900000, so 900000 - 500000 = 400000\ntextTrack.vttTimestamp = .init(pts: "400000", localTime: "00:00:00.000")\n'})}),"\n",(0,n.jsx)(t.p,{children:"or set the localTime to 5 seconds while keeping the timestamp value the same:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'let textTrack = SSTextTrackDescription(src: "https://sideloadedurl.com/subtitle.vtt", srclang: "language_code", isDefault: false, kind: .subtitles, label:"Label", format: .WebVTT)\n// we assume here that the PTS in the video rendition is 900000\ntextTrack.vttTimestamp = .init(pts: "900000", localTime: "00:00:05.000")\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," Every 100000 of PTS timestamp results in roughly 1 second in time mapping. Use this carefully as it is not officially documented."]}),"\n",(0,n.jsx)(t.h4,{id:"warnings",children:"Warnings"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"You should always use HLS subtitle rendition-compliant WEBVTT files which are in sync with your streams and you should not be using the time-shifting functionality."}),"\n",(0,n.jsx)(t.li,{children:"Shifting cues backwards is only possible until the timestamp of the first cue (e.g. if your first cue has to be rendered at 10 sec, you should not shift the subtitle by 15 sec)."}),"\n",(0,n.jsx)(t.li,{children:"Shifting forward is possible, but considered as hack, and it is not a specification-compliant manifest entry. Use it at your own risk!"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"automatic-synchronization",children:"Automatic synchronization"}),"\n",(0,n.jsxs)(t.p,{children:["In case the presentation timestamp is not known, or it cannot be obtained, the ",(0,n.jsx)(t.code,{children:"automaticTimestampSyncEnabled"})," property can be enabled to estimate the value of the PTS and automatically set the X-TIMESTAMP-MAP in the WEBVTT file.\nThis property is defined on the class ",(0,n.jsx)(t.code,{children:"SSTextTrackDescription"}),".\nSince the value is calculated retrospectively, it will cause a re-toggle of the enabled text track. This might cause a brief flash when a cue is present while the syncing takes effect."]}),"\n",(0,n.jsx)(t.h2,{id:"caching",children:"Caching"}),"\n",(0,n.jsx)(t.p,{children:"The caching feature of this connector allows you to download a source alongside a sideloaded subtitle to store it locally on the device and play it offline. To make this happen, the connector provides an API extension."}),"\n",(0,n.jsx)(t.p,{children:"All that is needed is a source with a text track description:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'public static var sourceWithSideloadedTextTrack: SourceDescription {\n    let typedSource = TypedSource(src: "https://sourceURL.com/manifest.m3u8, type: "application/x-mpegurl")\n    let textTrack = TextTrackDescription(src: "https://sideloadedurl.com/subtitle.vtt", srclang: "language_code", isDefault: false, kind: .subtitles, label: "Label", format: .WebVTT)\n    return SourceDescription(source: typedSource, textTracks: [textTrack])\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"and to call the aforementioned API which creates a new caching task, and finally calling the start method:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"let parameters = CachingParameters(expirationDate: .distantFuture)\nlet task = THEOplayer.cache.createTaskWithSubtitles(source: sourceWithSideloadedTextTrack, parameters: parameters)\ntask?.start()\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more information on how to implement offline playback with caching, please refer ",(0,n.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Offline-Playback/Guides/howto-offline-stream-caching",children:"to our guide"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"limitations-1",children:"Limitations"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Caching sources with sideloaded subtitles can only be done one task at a time. This is due to some technical complexities in the underlying implementation. This limitation may be addressed in future releases."}),"\n",(0,n.jsx)(t.li,{children:"Caching is only available on iOS."}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return o}});var s=i(67294);let n={},a=s.createContext(n);function o(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);