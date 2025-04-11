"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["931"],{83632:function(e,t,a){a.r(t),a.d(t,{default:()=>c,frontMatter:()=>o,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>r});var n=JSON.parse('{"id":"knowledge-base/metadata/introduction","title":"Timed Metadata","description":"Timed metadata describes a subset of a stream through data (bytes, text, image, ...), a start time and/or a stop time.","source":"@site/theoplayer_versioned_docs/version-v6/knowledge-base/06-metadata/00-introduction.md","sourceDirName":"knowledge-base/06-metadata","slug":"/knowledge-base/metadata/introduction","permalink":"/documentation/pr-preview/pr-266/theoplayer/v6/knowledge-base/metadata/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/knowledge-base/06-metadata/00-introduction.md","tags":[],"version":"v6","sidebarPosition":0,"frontMatter":{},"sidebar":"roku","previous":{"title":"Cross Origin Resource Sharing (CORS)","permalink":"/documentation/pr-preview/pr-266/theoplayer/v6/knowledge-base/cors/introduction"}}'),i=a("85893"),s=a("50065");let o={},r="Timed Metadata",d={},l=[{value:"Using Metadata",id:"using-metadata",level:2},{value:"Use-Cases",id:"use-cases",level:3},{value:"Technical Implementation",id:"technical-implementation",level:3},{value:"Out-of-the-box Solutions",id:"out-of-the-box-solutions",level:3},{value:"Extracting Metadata",id:"extracting-metadata",level:2},{value:"Inserting Metadata",id:"inserting-metadata",level:2},{value:"Segment Metadata",id:"segment-metadata",level:3},{value:"Manifest Metadata",id:"manifest-metadata",level:3},{value:"External Metadata",id:"external-metadata",level:3},{value:"Timeline Metadata",id:"timeline-metadata",level:3},{value:"Considerations",id:"considerations",level:3},{value:"THEOplayer and Timed Metadata",id:"theoplayer-and-timed-metadata",level:2},{value:"Resources",id:"resources",level:2}];function h(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"timed-metadata",children:"Timed Metadata"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Timed metadata"})," describes a subset of a stream through data (bytes, text, image, ...), a start time and/or a stop time.\nFor example, if you're watching a 60 seconds video, and if I would declare that an advertisement is playing in this video between 00:30 and 00:45, then I am declaring timed metadata because I'm referring to a subset of this video."]}),"\n",(0,i.jsxs)(t.p,{children:["Timed metadata shouldn't be confused with ",(0,i.jsx)(t.em,{children:"general metadata"}),". General metadata describes data related to your entire video content, like the title of the video, its total duration and its PG-rating.\nIn this article we use timed metadata and metadata interchangeably, and consider general metadata out-of-scope."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Metadata Flow",src:a(47017).Z+"",title:"Metadata Flow",width:"960",height:"720"})}),"\n",(0,i.jsx)(t.p,{children:"This article provides information on the different types of timed metadata and how you can leverage it in an application.\nThe story is told in the reverse order: first we'll consider some use-cases (e.g. highlights), next we'll talk about the role of a video player versus the application, and finally we'll list the types of metadata (e.g. ID3) you can insert."}),"\n",(0,i.jsx)(t.h2,{id:"using-metadata",children:"Using Metadata"}),"\n",(0,i.jsxs)(t.p,{children:["When using timed metadata, you are trying to achieve a ",(0,i.jsx)(t.a,{href:"#use-cases",children:"use-case"})," through a ",(0,i.jsx)(t.a,{href:"#technical-implementation",children:"technical implementation"}),".\nIn an ideal world, your video player provides an ",(0,i.jsx)(t.a,{href:"#out-of-the-box-solutions",children:"out-of-the-box solution"})," for your use-case,\nand you don't need to write and maintain a lot of code."]}),"\n",(0,i.jsx)(t.h3,{id:"use-cases",children:"Use-Cases"}),"\n",(0,i.jsx)(t.p,{children:"Timed metadata enables all kinds of use-cases in the field across various domains."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Markers"})}),"\n",(0,i.jsx)(t.p,{children:"A popular use-case is to associate some data (text, image, ...) with a specific moment in time to mark a highlight."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Metadata Markers",src:a(29280).Z+"",title:"Metadata Markers",width:"2149",height:"1203"})}),"\n",(0,i.jsx)(t.p,{children:"For example, in the screenshot above, we're leveraging metadata to highlight where a goal has been scored.\nIf you click on the goal icon, you'll be taken to this moment in time in the video.\nYou could of course expand this feature, and hovering the goal icon would toggle a tooltip which tells you who scored and what the new score is."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Advertising"})}),"\n",(0,i.jsxs)(t.p,{children:["Timed metadata can help you define the start and end of an advertisement. This information can be used to enhance the UI and UX.\nFor example, at ",(0,i.jsx)(t.a,{href:"https://cdn.theoplayer.com/demos/verizon-media/index.html",children:"https://cdn.theoplayer.com/demos/verizon-media/index.html"}),", the application leverages metadata to render markers in the scrub bar and to count down to the end of the ad break,\nand on top of that, if you try to seek over an ad break, the cursor snaps back to the ad break."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Metadata Advertising",src:a(84769).Z+"",title:"Metadata Advertising",width:"2824",height:"1364"})}),"\n",(0,i.jsx)(t.p,{children:'You can also leverage timed metadata "behind the scenes". For example, the timed metadata might contain info on the creative ID of the advertisement,\nand the URLs of its event trackers. An application could then use this information to communicate with an ad server or analytics server.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Actions"})}),"\n",(0,i.jsx)(t.p,{children:"Timed metadata could also be used to initiate events and actions.\nFor example, perhaps you want to overlay some text or image when you are at position 00:40.\nOr perhaps you want to disable seeking through the scrub bar for a defined period of time."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Metadata Actions",src:a(28208).Z+"",title:"Metadata Actions",width:"1898",height:"1066"})}),"\n",(0,i.jsx)(t.p,{children:"The screenshot showcases a demo where a relevant hyperlink is being overlayed on top of the video within a specific time period.\nThis hyperlink (and its start and stop time) was indicated through timed metadata."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Other"})}),"\n",(0,i.jsx)(t.p,{children:"You can get very creative with timed metadata."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You can use it to schedule client-side advertisements."}),"\n",(0,i.jsx)(t.li,{children:"You can use it to make certain areas of your video frame clickable at certain times, and clicking it will bring you to a webshop."}),"\n",(0,i.jsx)(t.li,{children:"..."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If you have a use-case where a certain behavior can be associated with a certain moment in time, you can probably tackle it through timed metadata."}),"\n",(0,i.jsx)(t.h3,{id:"technical-implementation",children:"Technical Implementation"}),"\n",(0,i.jsx)(t.p,{children:"To programmatically extract your metadata and implement your use-case, you will always need to write custom application logic to some degree."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You still need to write the custom code which calls the video player API."}),"\n",(0,i.jsx)(t.li,{children:"You might use a combination of external metadata and specification-compliant metadata, which requires you to write custom logic to tie things together."}),"\n",(0,i.jsx)(t.li,{children:"You probably want to tweak the UI and UX, so you'd also write some custom application code for that."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"On top of this, you might need to leverage a video player API to extract your metadata,\nif you pass along your metadata in such a way it adheres to a certain streaming specification. More about this in the following sections."}),"\n",(0,i.jsx)(t.h3,{id:"out-of-the-box-solutions",children:"Out-of-the-box Solutions"}),"\n",(0,i.jsx)(t.p,{children:"To implement the use-cases listed above, applications developers have to write and maintain application code."}),"\n",(0,i.jsx)(t.p,{children:"Sometimes, pre-integrations offered by the video player can take away some responsibilities of the application developer.\nFor example, THEOplayer has a pre-integration with Verizon Media which allows developers to easily configure whether viewers can see ad break markers,\nwhether viewers can skip over ad breaks, and much more."}),"\n",(0,i.jsxs)(t.p,{children:["At other times, there might be a recommended workflow and pre-integrated feature to achieve your use-case.\nFor example, you can use ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v6/knowledge-base/playback/subtitles-and-closed-captions/chapter-markers",children:"Chapter Markers"})," to highlight different chapters in a video."]}),"\n",(0,i.jsxs)(t.p,{children:["THEOplayer also acts as the main contributor to ",(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/emss",children:"Enriched Media Streaming Solutions"})," (EMSS).\nEMSS describes a standardized way to insert metadata and how a video player should handle and visualize this metadata.\nIt might be interesting for you to ",(0,i.jsx)(t.a,{href:"https://servicedesk.theoplayer.com/",children:"reach out to THEOplayer"})," and ask if your use-case is supported by EMSS out-of-the-box."]}),"\n",(0,i.jsx)(t.h2,{id:"extracting-metadata",children:"Extracting Metadata"}),"\n",(0,i.jsx)(t.p,{children:"Depending on how you insert the metadata, you have to use your video player API to extract the metadata, and/or write custom application logic."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You use a ",(0,i.jsx)(t.strong,{children:"video player API"})," if you've inserted metadata which adheres to a streaming-related specification supported by the selected video player.\nFor example, if you're using ID3 tags to pass along your metadata, you will use the designated video player API, if your video player supports the extraction of ID3 metadata."]}),"\n",(0,i.jsxs)(t.li,{children:["You write ",(0,i.jsx)(t.strong,{children:"custom application logic"})," if you're storing your metadata externally (e.g. on a CMS) or if you're using a metadata format which is not supported by your video player.\nIt might be possible that you're using a video player which is pre-integrated with an external database, so you could perhaps still leverage your video player. (e.g. THEOplayer and Verizon Media.)"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["When you use THEOplayer as your video player API, you can use the ",(0,i.jsx)(t.code,{children:"TextTracks API"})," to extract certain types of timed metadata like ID3, emsg, EXT-X-DATERANGE and EventStream,\nand APIs like ",(0,i.jsx)(t.code,{children:"player.currentProgramDateTime"})," to determine the absolute date and time should you want to compare that with an external CMS."]}),"\n",(0,i.jsx)(t.h2,{id:"inserting-metadata",children:"Inserting Metadata"}),"\n",(0,i.jsxs)(t.p,{children:["Before we can unlock our use-cases, we need to create and insert our timed metadata. How you'll do this depends on your back-end set-up.\n(e.g. ",(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/media-services/media-services-specifications-live-timed-metadata#2-timed-metadata-ingest",children:"Azure Media Services"})," versus ",(0,i.jsx)(t.a,{href:"https://docs.vdms.com/video/index.html#Develop/Live-Slicer-API.htm#timedmeta",children:"Verizon Media Platform"}),".)"]}),"\n",(0,i.jsx)(t.p,{children:"Let's talk about the different types of timed metadata."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#segment-metadata",children:"Segment Metadata"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#manifest-metadata",children:"Manifest Metadata"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#external-metadata",children:"External Metadata"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#timeline-metadata",children:"Timeline Metadata"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["It depends on your use-case and back-end which type you should pick, and which ",(0,i.jsx)(t.a,{href:"#considerations",children:"considerations"})," you should make.\nPerhaps your back-end doesn't allow you to insert any stream metadata (i.e. segment and manifest metadata), or perhaps you cannot use an external CMS."]}),"\n",(0,i.jsx)(t.h3,{id:"segment-metadata",children:"Segment Metadata"}),"\n",(0,i.jsx)(t.p,{children:"Segment metadata is contained within a segment. The industry also refers to segment metadata as in-band media timed events. There are two popular types of segment metadata:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["ID3 is mostly contained .ts segments. This type of segment (",(0,i.jsx)(t.code,{children:".ts"}),") is commonly used in HLS. ID3 can also occur in MPEG-DASH through a carriage over emsg."]}),"\n",(0,i.jsxs)(t.li,{children:["emsg is mostly contained in CMAF media segments (e.g. ",(0,i.jsx)(t.code,{children:".mp4"}),").\nThis type of segment is commonly used in MPEG-DASH, and in HLS when your HLS stream is using fragmented MP4 segments instead of .ts segments."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"manifest-metadata",children:"Manifest Metadata"}),"\n",(0,i.jsx)(t.p,{children:"Manifest metadata is contained in the manifest of your streaming protocol. The industry also refers to manifest metadata as out-band media timed events. There are two popular types of manifest metadata:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["EXT-X-DATERANGE is contained in the HLS (e.g. ",(0,i.jsx)(t.code,{children:".m3u8"}),") manifest."]}),"\n",(0,i.jsxs)(t.li,{children:["EventStream is contained in the MPEG-DASH (e.g. ",(0,i.jsx)(t.code,{children:".mpd"}),") manifest."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"external-metadata",children:"External Metadata"}),"\n",(0,i.jsx)(t.p,{children:"You can also store metadata externally, for example in a remote database or in a file."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Database"})}),"\n",(0,i.jsx)(t.p,{children:"You can store metadata in an external database, for example by using a content management system (CMS).\nIn this CMS, you will probably associate an IDs with asset, and associate certain types of data with these IDs."}),"\n",(0,i.jsx)(t.p,{children:"Furthermore, your database should offer an API to your application, in order for your application developer to successfully query your database through an asset ID."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"File"})}),"\n",(0,i.jsxs)(t.p,{children:["You can store metadata in files.\nFor example, you could leverage ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v6/knowledge-base/playback/subtitles-and-closed-captions/chapter-markers",children:"Chapter Markers"})," and thus use ",(0,i.jsx)(t.code,{children:".vtt"})," files.\nThat being said, you would still need to know which asset should load which ",(0,i.jsx)(t.code,{children:".vtt"})," file, thus creating the need for an underlying CMS."]}),"\n",(0,i.jsx)(t.h3,{id:"timeline-metadata",children:"Timeline Metadata"}),"\n",(0,i.jsxs)(t.p,{children:["Your video player might be able to determine ",(0,i.jsx)(t.em,{children:"timeline metadata"})," through your segments or manifests.\nKnowing your playhead position, video duration and/or absolute date may be necessary for you to implement your use-case."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, your HLS manifest might contain the ",(0,i.jsx)(t.code,{children:"#PROGRAM-DATE-TIME"})," tag which defines the absolute date and time.\nThis property allows your video player to calculate and expose the absolute date and time, which you can then leverage\nin your use-case."]}),"\n",(0,i.jsxs)(t.p,{children:["Check with your back-end (vendor) whether if they expose the manifest metadata required for video players to calculate the absolute date and time.\nFor HLS, this goes through the ",(0,i.jsx)(t.code,{children:"#PROGRAM-DATE-TIME"})," tag. For MPEG-DASH, this goes through the ",(0,i.jsx)(t.code,{children:"availabilityTimeOffset"})," attribute, and additionally through the ",(0,i.jsx)(t.code,{children:"suggestedPresentationDelay"})," attribute."]}),"\n",(0,i.jsx)(t.h3,{id:"considerations",children:"Considerations"}),"\n",(0,i.jsx)(t.p,{children:"We've listed some remarks below which could influence your decision in selecting a specific type of metadata."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Manifest metadata can be useful because your video player will know about the metadata without requiring your video player\nto download individual segments. This is useful in use-cases where you want to mark highlights."}),"\n",(0,i.jsx)(t.li,{children:"Generating manifest metadata might increase the time it takes to load your manifest, either because the file size increases,\nor because of additional computations."}),"\n",(0,i.jsx)(t.li,{children:"Segment metadata must be downloaded by the video player before it can be extracted. What if the segment is skipped?"}),"\n",(0,i.jsx)(t.li,{children:"Manifests and segments are not ideal suitors to carry large chunks of data. Perhaps you should put images elsewhere if you can load them on-demand?"}),"\n",(0,i.jsx)(t.li,{children:"Not all back-end systems support all types of manifests metadata or segment metadata. You might not be able to implement your use-case on specific platforms.\nFor example, what if your back-end does support EXT-X-DATERANGE through HLS, but not EventStream through MPEG-DASH?\nWhat if you initially didn't need to use MPEG-DASH, but suddenly (e.g. through new DRM requirements) have to us MPEG-DASH?"}),"\n",(0,i.jsx)(t.li,{children:"Not all back-end systems (e.g. CMS) provide APIs which can be queried by an application."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"theoplayer-and-timed-metadata",children:"THEOplayer and Timed Metadata"}),"\n",(0,i.jsx)(t.p,{children:"THEOplayer is able to extract all applicable types of timed metadata across all supported platforms:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["EventStream through the ",(0,i.jsx)(t.code,{children:"TextTracks"})," API."]}),"\n",(0,i.jsxs)(t.li,{children:["EXT-X-DATERANGE through the ",(0,i.jsx)(t.code,{children:"TextTracks"})," API."]}),"\n",(0,i.jsxs)(t.li,{children:["ID3 through the ",(0,i.jsx)(t.code,{children:"TextTracks"})," API."]}),"\n",(0,i.jsxs)(t.li,{children:["emsg through the ",(0,i.jsx)(t.code,{children:"TextTracks"})," API."]}),"\n",(0,i.jsxs)(t.li,{children:["Timeline metadata through the ",(0,i.jsx)(t.code,{children:"player.currentTime"})," and ",(0,i.jsx)(t.code,{children:"player.currentProgramDateTime"})," API."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"THEOplayer offers a number of pre-integrations to facilitate the implementation of relevant SSAI use-cases.\nReach out to THEOplayer if your vendor is missing from the list below, because the list is incomplete."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v6/how-to-guides/ads/google-dai",children:"Google DAI"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v6/how-to-guides/ads/yospace",children:"Yospace"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/introduction",children:"Verizon Media"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"THEOplayer offers features which might implement your desired use-case out-of-the-box:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://demo.theoplayer.com/chapters",children:"Chapter Markers"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://demo.theoplayer.com/preview-thumbnails",children:"Preview Thumbnails"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["THEOplayer","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v6/how-to-guides/texttrack/how-to-track-id3-cues-tags",children:"How to track ID3 cues/tags?"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/types/TextTrackType.html",children:"TextTrack Types"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://demo.theoplayer.com/audio-id3-metadata",children:"ID3 Audio Player Demo"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["External","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.w3.org/TR/media-timed-events/",children:"Requirements for Media Timed Events by the Media and Entertainment Interest Group"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis-07#section-4.4.5.1",children:"EXT-X-DATERANGE in the HLS specification"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTTP_Live_Streaming_Metadata_Spec/Introduction/Introduction.html",children:"Apple on ID3 in HLS"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://dashif.org/guidelines/",children:"MPEG-DASH Guidelines"})}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28208:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/metadata-actions-01db1cadbab3af30116042c4a68cd07e.png"},84769:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/metadata-advertising-15104844ee4b00b1cb4b5c40d44602b7.png"},47017:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/metadata-flow-e0209c23fa4699e2528b581ecd591be1.png"},29280:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/metadata-goals-de17fe35188d311939191999ab0e74ca.png"},50065:function(e,t,a){a.d(t,{Z:function(){return r},a:function(){return o}});var n=a(67294);let i={},s=n.createContext(i);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);