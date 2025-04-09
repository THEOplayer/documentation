"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["4864"],{40870:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>a,assets:()=>o,toc:()=>l,contentTitle:()=>d});var a=JSON.parse('{"id":"how-to-guides/miscellaneous/using-hlsdatarange-property","title":"Using hlsDateRange property","description":"This article explains how to enable the DateRange feature, so that a text track and cues are created.","source":"@site/theoplayer/how-to-guides/07-miscellaneous/08-using-hlsdatarange-property.md","sourceDirName":"how-to-guides/07-miscellaneous","slug":"/how-to-guides/miscellaneous/using-hlsdatarange-property","permalink":"/documentation/pr-preview/pr-260/theoplayer/how-to-guides/miscellaneous/using-hlsdatarange-property","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/07-miscellaneous/08-using-hlsdatarange-property.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"roku","previous":{"title":"Picture-in-Picture","permalink":"/documentation/pr-preview/pr-260/theoplayer/how-to-guides/miscellaneous/picture-in-picture"},"next":{"title":"Preloading","permalink":"/documentation/pr-preview/pr-260/theoplayer/how-to-guides/miscellaneous/preloading"}}'),r=t("85893"),i=t("50065");let s={},d="Using hlsDateRange property",o={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Android SDk",id:"android-sdk",level:5},{value:"Using and interacting with date-range variables",id:"using-and-interacting-with-date-range-variables",level:2},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) and Android",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-and-android",level:5},{value:"Resources",id:"resources",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"using-hlsdaterange-property",children:"Using hlsDateRange property"})}),"\n",(0,r.jsx)(n.p,{children:"This article explains how to enable the DateRange feature, so that a text track and cues are created."}),"\n",(0,r.jsx)(n.p,{children:"The EXT-X-DATERANGE tag associates a Date Range (i.e., a range of time defined by a starting and ending date) with a set of attribute/value pairs"}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"#EXT-X-DATERANGE"})," is a way of providing timed metadata in an HLS manifest. It is used to define date range metadata in a media playlist. A possible use case is defining timed metadata for interstitial regions such as advertisements, but can be used to define any timed metadata needed by your stream."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"#EXT-X-DATERANGE"})," is supported in THEOplayer as of 2.61.0. However, the feature is not enabled by default. To enable it, add ",(0,r.jsx)(n.em,{children:"hlsDateRange"})," to the player configuration and set it to true. You can also choose (instead) to enable/disable the feature per source by adding the same option to a source in your source description."]}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"//in playerConfiguration\nvar element = document.querySelector('.theoplayer-container');\n\nvar player = new THEOplayer.Player(element, {\n  libraryLocation: libraryLocation,\n  license: 'your-license-here',\n  hlsDateRange: true,\n});\n\n//in the source description\nplayer.source = {\n  hlsDateRange: true,\n  sources: {\n    src: 'Example-Stream.m3u8',\n    type: 'application/x-mpegurl',\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'//in playerConfiguration\nfunc setupTheoPlayer() {\n    var frame: CGRect = UIScreen.main.bounds\n    frame.size.height = 350\n    let stylePath1 = Bundle.main.path(forResource:"style1", ofType: "css")!\n    let scriptPath = Bundle.main.path(forResource:"script1", ofType: "js")!\n    //Add here at the end of playerConfig\n    let playerConfig = THEOplayerConfiguration(defaultCSS: true, cssPaths:[stylePath1, stylePath2], jsPaths: [scriptPath], googleIMA: true, hlsDateRange: true)\n    self.theoplayer = THEOplayer(configuration: playerConfig)\n    self.theoplayer.frame = frame\n    self.theoplayer.addAsSubview(of: playerView)\n}\n\n//in the source description\nSourceDescription(\n    source: TypedSource(\n    src: src,\n    type: stream,\n    hlsDateRange: true\n)\n'})}),"\n",(0,r.jsx)(n.h5,{id:"android-sdk",children:"Android SDk"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'//in playerConfiguration\nTHEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n        .ui(new UIConfiguration.Builder().language("nl").build())\n        .hlsDateRange(true)\n        .build();\nTHEOplayerView tpv = new THEOplayerView(this, playerConfig);\n'})}),"\n",(0,r.jsx)(n.p,{children:"The TextTrack API is used to retrieve the timed metadata. A MetadataTextTrack will provide cues which contain the timed metadata and will dispatch an event when started and ended."}),"\n",(0,r.jsx)(n.h2,{id:"using-and-interacting-with-date-range-variables",children:"Using and interacting with date-range variables"}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function handleTimedMetadata(player, onTimeMetadataEnter, onTimeMetadataExit) {\n  console.log('function handleTimedMetadata is starting! yeeee');\n  const onTrackAdded = (event) => {\n    const track = event.track;\n    console.log('track', track.kind, track.cues);\n    if (track.kind !== 'metadata') {\n      return;\n    }\n    track.mode = 'hidden'; // By default, tracks are disabled and do not expose cues\n    track.addEventListener('addcue', onCueAdded);\n    track.addEventListener('removecue', onCueRemoved);\n  };\n  const onTrackRemoved = (event) => {\n    const track = event.track;\n    if (track.kind !== 'metadata') {\n      return;\n    }\n    track.removeEventListener('addcue', onCueAdded);\n    track.removeEventListener('removecue', onCueRemoved);\n  };\n  const onCueAdded = (event) => {\n    const cue = event.cue;\n    console.log('cueadded', cue);\n    cue.addEventListener('enter', onTimeMetadataEnter);\n    cue.addEventListener('exit', onTimeMetadataExit);\n  };\n  const onCueRemoved = (event) => {\n    const cue = event.cue;\n    cue.removeEventListener('enter', onTimeMetadataEnter);\n    cue.removeEventListener('exit', onTimeMetadataExit);\n  };\n  player.textTracks.addEventListener('addtrack', onTrackAdded);\n  player.textTracks.addEventListener('removetrack', onTrackRemoved);\n}\nhandleTimedMetadata(\n  player,\n  (event) => console.log('Do something with timed metadata starting', event),\n  (event) => console.log('Do something with metadata ending', event)\n);\n"})}),"\n",(0,r.jsx)(n.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-and-android",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) and Android"}),"\n",(0,r.jsx)(n.p,{children:"To be added"}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.p,{children:["HLS spec. : ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis-04#section-4.4.2.7",children:"https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis-04#section-4.4.2.7"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var a=t(67294);let r={},i=a.createContext(r);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);