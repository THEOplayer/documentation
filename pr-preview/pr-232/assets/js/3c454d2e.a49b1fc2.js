"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["61195"],{73026:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"how-to-guides/texttrack/how-to-implement-preview-thumbnails","title":"How to implement preview thumbnails in THEOplayer","description":"This article describes how to enable preview thumbnails. In THEOplayer this is done with the TextTrack API.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/10-texttrack/05-how-to-implement-preview-thumbnails.md","sourceDirName":"how-to-guides/10-texttrack","slug":"/how-to-guides/texttrack/how-to-implement-preview-thumbnails","permalink":"/documentation/pr-preview/pr-232/theoplayer/v7/how-to-guides/texttrack/how-to-implement-preview-thumbnails","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/10-texttrack/05-how-to-implement-preview-thumbnails.md","tags":[],"version":"v7","sidebarPosition":5,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to insert subtitles?","permalink":"/documentation/pr-preview/pr-232/theoplayer/v7/how-to-guides/texttrack/how-to-insert-subtitles"},"next":{"title":"How to track ID3 cues / tags?","permalink":"/documentation/pr-preview/pr-232/theoplayer/v7/how-to-guides/texttrack/how-to-track-id3-cues-tags"}}'),r=n("85893"),s=n("50065");let l={},a="How to implement preview thumbnails in THEOplayer",o={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-implement-preview-thumbnails-in-theoplayer",children:"How to implement preview thumbnails in THEOplayer"})}),"\n",(0,r.jsx)(t.p,{children:"This article describes how to enable preview thumbnails. In THEOplayer this is done with the TextTrack API."}),"\n",(0,r.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["A demo/example of the preview thumbnails on the THEOplayer Web SDK can be found at ",(0,r.jsx)(t.a,{href:"http://demo.theoplayer.com/preview-thumbnails",children:"http://demo.theoplayer.com/preview-thumbnails"})]}),"\n",(0,r.jsx)(t.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,r.jsx)(t.p,{children:"The thumbnails are loaded as a separate text track, by setting it as a sideloaded textTrack in the SourceDescription:"}),"\n",(0,r.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"player.source = {\n  sources: {\n    type: 'application/x-mpegurl',\n    src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',\n  },\n  textTracks: [\n    {\n      default: true,\n      src: 'https://cdn.theoplayer.com/dash/theoplayer/thumbnails/big_buck_bunny_thumbnails.vtt',\n      label: 'thumbnails',\n      kind: 'metadata',\n    },\n  ],\n};\n"})}),"\n",(0,r.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsx)(t.p,{children:"You can add/edit your SourceDescription as follows."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public static final SourceDescription BBB_WITH_THUMBNAILS =\n    new SourceDescription.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8")\n        .textTracks(new TextTrackDescription.Builder("https://cdn.theoplayer.com/dash/theoplayer/thumbnails/big_buck_bunny_thumbnails.vtt")\n            .isDefault(true)\n            .kind(TextTrackKind.METADATA)\n            .srclang("en")\n            .label("thumbnails")\n            .build()\n    ).build();\n'})}),"\n",(0,r.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsx)(t.p,{children:"You can edit or add the SourceDescription below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'player.source = SourceDescription(\n    source: TypedSource(\n        src: "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8",\n        type: "application/x-mpegurl"\n    ),\n    textTracks: [TextTrackDescription(\n        src: "https://cdn.theoplayer.com/dash/theoplayer/thumbnails/big_buck_bunny_thumbnails.vtt",\n        srclang: "en",\n        isDefault: true,\n        kind: TextTrackKind.metadata,\n        label: "thumbnails")\n    ]\n)\n'})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var i=n(67294);let r={},s=i.createContext(r);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);