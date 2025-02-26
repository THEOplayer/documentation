"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["33058"],{69471:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"how-to-guides/integrations/deliver-low-latency-hls-live-streams-with-wowza-streaming-engine","title":"Deliver Low-Latency HLS live streams using Wowza Streaming Engine and THEOplayer","description":"Wowza Streaming Engine\u2122 media server software version 4.7.8 and later together with THEOplayer version 2.65 and later can deliver Low-Latency HLS (LL-HLS) live streams.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/05-integrations/04-deliver-low-latency-hls-live-streams-with-wowza-streaming-engine.md","sourceDirName":"how-to-guides/05-integrations","slug":"/how-to-guides/integrations/deliver-low-latency-hls-live-streams-with-wowza-streaming-engine","permalink":"/documentation/pr-preview/pr-222/theoplayer/v6/how-to-guides/integrations/deliver-low-latency-hls-live-streams-with-wowza-streaming-engine","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/05-integrations/04-deliver-low-latency-hls-live-streams-with-wowza-streaming-engine.md","tags":[],"version":"v6","sidebarPosition":4,"frontMatter":{},"sidebar":"roku","previous":{"title":"Wowza streaming engine with secure token version 2","permalink":"/documentation/pr-preview/pr-222/theoplayer/v6/how-to-guides/integrations/wowza-streaming-engine-with-secure-token-version-2"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-222/theoplayer/v6/how-to-guides/mediatrack/introduction"}}'),r=t("85893"),s=t("50065");let a={},o="Deliver Low-Latency HLS live streams using Wowza Streaming Engine and THEOplayer",l={},c=[{value:"SDKs",id:"sdks",level:2},{value:"How to set up THEOplayer with Wowza Streaming Engine For LL-HLS",id:"how-to-set-up-theoplayer-with-wowza-streaming-engine-for-ll-hls",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configure a live application to deliver LL-HLS streams",id:"configure-a-live-application-to-deliver-ll-hls-streams",level:3},{value:"Enable LL-HLS in Wowza Streaming Engine XML",id:"enable-ll-hls-in-wowza-streaming-engine-xml",level:4},{value:"Configure optional low latency partial segment properties and media playlist property",id:"configure-optional-low-latency-partial-segment-properties-and-media-playlist-property",level:4},{value:"Low latency CMAF property reference",id:"low-latency-cmaf-property-reference",level:5},{value:"Advanced LL-HLS property reference",id:"advanced-ll-hls-property-reference",level:5},{value:"Transcoding considerations for LL-HLS",id:"transcoding-considerations-for-ll-hls",level:5},{value:"Encoding recommendations",id:"encoding-recommendations",level:6},{value:"Scale LL-HLS with a CDN",id:"scale-ll-hls-with-a-cdn",level:5},{value:"Test stream playback",id:"test-stream-playback",level:5},{value:"Configure THEOplayer to play your LL-HLS stream",id:"configure-theoplayer-to-play-your-ll-hls-stream",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Conclusion",id:"conclusion",level:2},{value:"Resources",id:"resources",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"deliver-low-latency-hls-live-streams-using-wowza-streaming-engine-and-theoplayer",children:"Deliver Low-Latency HLS live streams using Wowza Streaming Engine and THEOplayer"})}),"\n",(0,r.jsx)(n.p,{children:"Wowza Streaming Engine\u2122 media server software version 4.7.8 and later together with THEOplayer version 2.65 and later can deliver Low-Latency HLS (LL-HLS) live streams."}),"\n",(0,r.jsxs)(n.p,{children:["Low-Latency HLS streams conform to ",(0,r.jsx)(n.a,{href:"https://developer.apple.com/documentation/http_live_streaming/protocol_extension_for_low-latency_hls_preliminary_specification?language=objc",children:"Apple\u2019s preliminary protocol extension to the HLS spec"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"In Beta"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"In Beta"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"In Beta"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"In Beta"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"how-to-set-up-theoplayer-with-wowza-streaming-engine-for-ll-hls",children:"How to set up THEOplayer with Wowza Streaming Engine For LL-HLS"}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"There are three prerequisites in order to continue with this guide:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In order to generate LL-HLS streams, you must first get a SSL certificate to secure your port and configure the port for HTTPS playback. LL-HLS playback does not work without an SSL secured port. For information on how to do this, refer to ",(0,r.jsx)(n.a,{href:"https://www.wowza.com/docs/how-to-get-ssl-certificates-from-the-streamlock-service",children:"How to Get an SSL Certificate from Wowza's Streamlock Service"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This guide expects that you have a THEOplayer license. If you are not using THEOplayer yet, you can start your free trial ",(0,r.jsx)(n.a,{href:"https://portal.theoplayer.com/",children:"here"}),". In addition, you will need a specify the ",(0,r.jsx)(n.strong,{children:"LL-HLS"})," feature flag when generating your SDK. Be sure to have THEOplayer version 2.65 or higher."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This guide expects that you are a Wowza Streaming Engine client and that you are integrated with their streaming infrastructure. Information on Wowza Streaming Engine can be found ",(0,r.jsx)(n.a,{href:"https://www.wowza.com/docs/wowza-streaming-engine-product-articles/",children:"here"}),". Be sure to have Wowza Streaming Engine media server software version 4.7.8 or higher."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Please Note:"})," Wowza occasionally update their documentation, which can be accessed ",(0,r.jsx)(n.a,{href:"https://www.wowza.com/docs/deliver-apple-low-latency-hls-live-streams-using-wowza-streaming-engine",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"configure-a-live-application-to-deliver-ll-hls-streams",children:"Configure a live application to deliver LL-HLS streams"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the default ",(0,r.jsx)(n.strong,{children:"live"})," application that installs with Wowza Streaming Engine or create and use a new ",(0,r.jsx)(n.strong,{children:"Live"})," or ",(0,r.jsx)(n.strong,{children:"Live HTTP Origin"})," application. Use the ",(0,r.jsx)(n.strong,{children:"Live"})," application type for sending streams from Wowza Streaming Engine to clients or Wowza Streaming Engine edges. Use the ",(0,r.jsx)(n.strong,{children:"Live HTTP Origin"})," application type to connect to a CDN edge, such as the Fastly CDN, that can pull streams from the Wowza Streaming Engine origin application."]}),"\n",(0,r.jsxs)(n.p,{children:["The following steps use the default ",(0,r.jsx)(n.strong,{children:"live"})," application to enable LL-HLS live streaming by editing the ",(0,r.jsx)(n.strong,{children:"Application.xml"})," and ",(0,r.jsx)(n.strong,{children:"VHost.xml"})," configuration files."]}),"\n",(0,r.jsx)(n.p,{children:"You can use the default live application that installs with Wowza Streaming Engine or create and use a new Live or Live HTTP Origin application. Use the Live application type for sending streams from Wowza Streaming Engine to clients or Wowza Streaming Engine edges. Use the Live HTTP Origin application type to connect to a CDN edge, such as the Fastly CDN, that can pull streams from the Wowza Streaming Engine origin application."}),"\n",(0,r.jsxs)(n.p,{children:["The following steps use the default ",(0,r.jsx)(n.strong,{children:"live"})," application to enable LL-HLS live streaming by editing the ",(0,r.jsx)(n.strong,{children:"Application.xml"})," and ",(0,r.jsx)(n.strong,{children:"VHost.xml"})," configuration files."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Please Note:"})," If you're trying to use the CMAF packetizer to deliver LL-HLS and HLS or MPEG-DASH streams, you must use two separate live applications: one configured specifically for LL-HLS and another for CMAF-packetized HLS and MPEG-DASH."]}),"\n",(0,r.jsx)(n.h4,{id:"enable-ll-hls-in-wowza-streaming-engine-xml",children:"Enable LL-HLS in Wowza Streaming Engine XML"}),"\n",(0,r.jsx)(n.p,{children:"The following steps enable transmuxing for CMAF packetization for LL-HLS delivery."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Navigate to ",(0,r.jsx)(n.strong,{children:"[install-dir]/conf/live"})," or ",(0,r.jsx)(n.strong,{children:"[install-dir]/conf/[custom live application]"})," and open the ",(0,r.jsx)(n.strong,{children:"Application.xml"})," file in a text editor."]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.strong,{children:"cmafstreamingpacketizer"})," to the ",(0,r.jsx)(n.strong,{children:"LiveStreamPacketizers"})," property. You can add it to the prepopulated comma-separated list, or it can be the only packetizer specified. The XML looks like this:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<Streams>\n    ...\n    <LiveStreamPacketizers>cmafstreamingpacketizer</LiveStreamPacketizers>\n    ...\n</Streams>\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Please Note:"})," If you enable ",(0,r.jsx)(n.strong,{children:"cupertinostreamingpacketizer"})," and ",(0,r.jsx)(n.strong,{children:"cmafstreamingpacketizer"}),", Wowza Streaming Engine generates both MPEG-TS segments (using ",(0,r.jsx)(n.strong,{children:"cupertinostreamingpacketizer"}),") and fMP4 segments (using ",(0,r.jsx)(n.strong,{children:"cmafstreamingpacketizer"}),")."]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Add the ",(0,r.jsx)(n.strong,{children:"cmafLLEnableLowLatency"})," property to the ",(0,r.jsx)(n.strong,{children:"LiveStreamPacketizer"})," container element and set it to true."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<LiveStreamPacketizer>\n    <Properties>\n        <Property>\n            <Name>cmafLLEnableLowLatency</Name>\n            <Value>true</Value>\n            <Type>Boolean</Type>\n        </Property>\n    </Properties>\n</LiveStreamPacketizer>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["For the ",(0,r.jsx)(n.strong,{children:"HTTPStreamers"})," property, make sure HLS (",(0,r.jsx)(n.strong,{children:"cupertinostreaming"}),") is specified. The XML looks like this:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<HTTPStreamers>cupertinostreaming</HTTPStreamers>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.strong,{children:"[install-dir]/conf/"})," and open the ",(0,r.jsx)(n.strong,{children:"VHost.xml"})," file in a text editor."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add the ",(0,r.jsx)(n.code,{children:"AllowHttp2"})," property to the ",(0,r.jsx)(n.code,{children:"<SSLConfig>"})," container element in the ",(0,r.jsx)(n.code,{children:"<HostPort>"})," you configured for SSL/TLS and set it to true."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<SSLConfig>\n    ...\n    <AllowHttp2>true</AllowHttp2>\n    ...\n</SSLConfig>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"Save your changes."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Your live application is now configured to deliver LL-HLS streams."}),"\n",(0,r.jsx)(n.h4,{id:"configure-optional-low-latency-partial-segment-properties-and-media-playlist-property",children:"Configure optional low latency partial segment properties and media playlist property"}),"\n",(0,r.jsxs)(n.p,{children:["Configuring the following properties is optional as Wowza Streaming Engine will use the property's default value for any of the properties that you do not configure. You can configure the optional LL-HLS properties by editing the ",(0,r.jsx)(n.strong,{children:"Application.xml"})," file for your LL-HLS live stream application. For information about configuring custom (optional) properties, see ",(0,r.jsx)(n.a,{href:"https://www.wowza.com/docs/add-a-custom-property#add-custom-properties",children:"Add custom properties"}),"."]}),"\n",(0,r.jsx)(n.h5,{id:"low-latency-cmaf-property-reference",children:"Low latency CMAF property reference"}),"\n",(0,r.jsxs)(n.p,{children:["You can configure any of these optional ",(0,r.jsx)(n.strong,{children:"LiveStreamPacketizer"})," properties for the LL-HLS segments and video and audio partial segments (chunks) in the ",(0,r.jsx)(n.strong,{children:"Application/LiveStreamPacketizer/Properties"})," container element."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Please Note:"})," If partial segments are too small, servers can become overloaded with frequent media playlist requests and cause playback to be less reliable."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"cmafLLChunkingScheme"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["Specifies the chunking scheme for low latency CMAF-packetized streams. Valid values are ",(0,r.jsx)(n.strong,{children:"byFrame"})," or ",(0,r.jsx)(n.strong,{children:"byDuration"}),". The default is ",(0,r.jsx)(n.strong,{children:"byDuration"}),". If the value is ",(0,r.jsx)(n.strong,{children:"byDuration"}),", packetization is configured using the ",(0,r.jsx)(n.strong,{children:"cmafLLChunkDurationTargetAudio"})," and ",(0,r.jsx)(n.strong,{children:"cmafLLChunkDurationTargetVideo"})," properties. If the value is ",(0,r.jsx)(n.strong,{children:"byFrame"}),", packetization is configured using the ",(0,r.jsx)(n.strong,{children:"cmafLLChunkFrameCountTargetAudio"})," and ",(0,r.jsx)(n.strong,{children:"cmafLLChunkFrameCountTargetVideo"})," properties."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"cmafLLChunkDurationTargetAudio"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Specifies, in milliseconds, the target duration of each low latency CMAF ",(0,r.jsx)(n.strong,{children:"audio"})," chunk. The default is ",(0,r.jsx)(n.strong,{children:"1000"})," and is recommended. The duration cannot exceed the ",(0,r.jsx)(n.a,{href:"https://www.wowza.com/docs/deliver-apple-low-latency-hls-live-streams-using-wowza-streaming-engine#cmafsegmentdurationtarget",children:"cmafSegmentDurationTarget"})," value. This property is only available if ",(0,r.jsx)(n.strong,{children:"cmafLLChunkingScheme"})," is ",(0,r.jsx)(n.strong,{children:"byDuration"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"cmafLLChunkDurationTargetVideo"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Specifies, in milliseconds, the target duration of each low latency CMAF ",(0,r.jsx)(n.strong,{children:"video"})," chunk. The default is ",(0,r.jsx)(n.strong,{children:"1000"})," and is recommended. The duration cannot exceed the ",(0,r.jsx)(n.a,{href:"https://www.wowza.com/docs/deliver-apple-low-latency-hls-live-streams-using-wowza-streaming-engine#cmafsegmentdurationtarget",children:"cmafSegmentDurationTarget"})," value. This property is only available if ",(0,r.jsx)(n.strong,{children:"cmafLLChunkingScheme"})," is ",(0,r.jsx)(n.strong,{children:"byDuration"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"cmafLLChunkFrameCountTargetAudio"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Specifies the target number of audio frames to include in each low latency CMAF audio chunk. The default is ",(0,r.jsx)(n.strong,{children:"47"})," and is recommended. This property is only enabled if ",(0,r.jsx)(n.strong,{children:"cmafLLChunkingScheme"})," is ",(0,r.jsx)(n.strong,{children:"byFrame"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"cmafLLChunkFrameCountTargetAudio"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Specifies the target number of audio frames to include in each low latency CMAF audio chunk. The default is ",(0,r.jsx)(n.strong,{children:"30"})," and is recommended. This property is only enabled if ",(0,r.jsx)(n.strong,{children:"cmafLLChunkingScheme"})," is ",(0,r.jsx)(n.strong,{children:"byFrame"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://www.wowza.com/docs/configure-cmaf-packetization-in-wowza-streaming-engine#cmaf-live-packetization-property-reference",children:"cmafSegmentDurationTarget"})})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Specifies, in milliseconds, the duration of the fMP4 segments in the stream. The default is ",(0,r.jsx)(n.strong,{children:"6000"})," (6 seconds) and is recommended. This property is configurable from the ",(0,r.jsx)(n.strong,{children:"CMAFStreamingPacketizer"})," properties section in Wowza Streaming Engine Manager."]})]})]})]}),"\n",(0,r.jsx)(n.h5,{id:"advanced-ll-hls-property-reference",children:"Advanced LL-HLS property reference"}),"\n",(0,r.jsxs)(n.p,{children:["For advanced tuning, you can configure the following optional ",(0,r.jsx)(n.strong,{children:"HTTPStreamer"})," property in the ",(0,r.jsx)(n.strong,{children:"Application/HTTPStreamer/Properties"})," container element."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cupertinoPartHoldBack (4.8.0 and later)"}),(0,r.jsx)(n.td,{children:"Double"}),(0,r.jsxs)(n.td,{children:["Specifies, in floating-point seconds, the server-recommended minimum distance from the live edge at which clients should begin to play or seek in a LL-HLS stream (the PART-HOLD-BACK attribute in media playlists). If you do not configure this property, Wowza Streaming Engine uses the default value, which is recommended. The default value is calculated as three times the maximum value of PART-TARGET out of all of a stream's variant media playlists. ",(0,r.jsx)(n.strong,{children:"Please Note:"})," PART-TARGET is an attribute of the EXT-X-PART-INF tag in media playlists and is based on the target values set with the ",(0,r.jsx)(n.strong,{children:"cmafLLChunkDurationTargetVideo"})," and ",(0,r.jsx)(n.strong,{children:"cmafLLChunkDurationTargetAudio"})," properties or the ",(0,r.jsx)(n.strong,{children:"cmafLLChunkFrameCountTargetVideo"})," and ",(0,r.jsx)(n.strong,{children:"cmafLLChunkFrameCountTargetAudio"})," properties. Wowza Streaming Engine will adjust the PART-HOLD-BACK value to be equal to the maximum value of PART-TARGET (across all variant media playlists) if you set this property to less than a partial segment duration."]})]})})]}),"\n",(0,r.jsx)(n.h5,{id:"transcoding-considerations-for-ll-hls",children:"Transcoding considerations for LL-HLS"}),"\n",(0,r.jsx)(n.p,{children:"To bypass encoding streams with Transcoder, source streams should meet the following encoding recommendations. Otherwise, transcoding is recommended. Although a small amount of latency is introduced with transcoding, if your source stream does not meet the encoding recommendations, transcoding will ultimately improve reliability of LL-HLS streaming."}),"\n",(0,r.jsx)(n.h6,{id:"encoding-recommendations",children:"Encoding recommendations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CMAF-supported codecs (required)"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Video"}),(0,r.jsx)(n.th,{children:"Audio"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"- H.264, H.265"}),(0,r.jsxs)(n.td,{children:["- AAC, AAC-LC, HE-AAC (AAC+ or aacPlus), ",(0,r.jsx)("br",{}),"- HE-AACv2 (enhanced AAC+, aacPlus v2) - Dolby Digital 5.1 Surround Sound (AC-3) and Dolby Digital Plus (Enhanced AC-3 or E-AC-3)"]})]})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GOP size: 1 or 2 seconds"}),"\n",(0,r.jsx)(n.li,{children:"Closed GOPs"}),"\n",(0,r.jsx)(n.li,{children:"H.264 and H.265 byte streams contain metadata about the GOP structure"}),"\n",(0,r.jsx)(n.li,{children:"Constant frame rate video"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A stream configured for transcoding and LL-HLS delivery cannot use ",(0,r.jsx)(n.strong,{children:"Passthrough"})," for the ",(0,r.jsx)(n.strong,{children:"Video Codec"})," of a stream rendition but not other renditions of the same stream. If you use ",(0,r.jsx)(n.strong,{children:"Passthrough"})," to pass a video source through to output without making any changes for any ",(0,r.jsx)(n.strong,{children:"Video Codec"})," in a stream's renditions, all of the video codecs must be set to ",(0,r.jsx)(n.strong,{children:"Passthrough"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Stream name groups (NGRP) are not supported with LL-HLS. To group multiple stream renditions for LL-HLS, you need to create a SMIL file in accordance with CMAF HLS. See ",(0,r.jsx)(n.a,{href:"https://www.wowza.com/docs/create-adaptive-bitrate-cmaf-streams-using-wowza-streaming-engine#set-up-adaptive-bitrate-cmaf-streaming",children:"Set up adaptive bitrate CMAF streaming"})," for how to do this."]}),"\n",(0,r.jsx)(n.h5,{id:"scale-ll-hls-with-a-cdn",children:"Scale LL-HLS with a CDN"}),"\n",(0,r.jsxs)(n.p,{children:["Optionally, with your own CDN account, you can scale LL-HLS delivery by connecting a Wowza Streaming Engine ",(0,r.jsx)(n.strong,{children:"Live HTTP Origin"})," application to a CDN edge that can pull streams from the Wowza Streaming Engine origin application, such as the Fastly CDN."]}),"\n",(0,r.jsxs)(n.p,{children:["To connect the ",(0,r.jsx)(n.strong,{children:"Live HTTP Origin"})," application to your CDN, provide the IP address or hostname of the Wowza Streaming Engine origin server in your CDN configuration. Also in your CDN configuration, enable connecting to the origin server over SSL/TLS using the port you configured for SSL/TLS in the Wowza Streaming Engine origin (default port 443)."]}),"\n",(0,r.jsx)(n.h5,{id:"test-stream-playback",children:"Test stream playback"}),"\n",(0,r.jsx)(n.p,{children:"After your live application is configured to deliver an LL-HLS stream, complete the stream setup by connecting a source encoder or IP camera to Wowza Streaming Engine and publishing the live source stream to the server. When the camera or encoder is connected and the live stream is active, test LL-HLS playback using a supported test player."}),"\n",(0,r.jsxs)(n.p,{children:["To test LL-HLS live streams when only ",(0,r.jsx)(n.strong,{children:"cmafstreamingpacketizer"})," is enabled, specify the stream playback URL using one of the following formats:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Single bitrate"}),"\nhttps://[address]/[application]/[application-instance]/[stream-name]/playlist.m3u8"]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.strong,{children:"cmafstreamingpacketizer"})," and ",(0,r.jsx)(n.strong,{children:"cupertinostreamingpacketizer"})," are enabled, specify the stream playback URL using one of the following formats:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Single bitrate"}),"\nhttps://[address]/[application]/[application-instance]/[stream-name]/playlist_sfm4s.m3u8"]}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"[address]"})," is the IP address or domain and port (default port 443)\n",(0,r.jsx)(n.strong,{children:"[application]"})," is the application name\n",(0,r.jsx)(n.strong,{children:"[application-instance]"})," is the name of the application instance (if omitted, defaults to ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"definst"})}),")\n",(0,r.jsx)(n.strong,{children:"[stream-name]"})," is the stream name\nSo, for example, if only ",(0,r.jsx)(n.strong,{children:"cmafstreamingpacketizer"})," is enabled, the playlist URL for an adaptive bitrate LL-HLS stream that uses the address ",(0,r.jsx)(n.strong,{children:"example.com"}),", the default ",(0,r.jsx)(n.strong,{children:"live"})," application, and the default stream name ",(0,r.jsx)(n.strong,{children:"myStream"})," is:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://example.com/live/smil:myStream.smil/playlist.m3u8",children:"https://example.com/live/smil:myStream.smil/playlist.m3u8"})}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.strong,{children:"cmafstreamingpacketizer"})," and ",(0,r.jsx)(n.strong,{children:"cupertinostreamingpacketizer"})," are both enabled, the adaptive bitrate LL-HLS playlist URL for the same example is:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://example.com/live/smil:myStream.smil/playlist_sfm4s.m3u8",children:"https://example.com/live/smil:myStream.smil/playlist_sfm4s.m3u8"})}),"\n",(0,r.jsx)(n.p,{children:"and the playback URL for the Cupertino HLS stream is either:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://example.com/live/smil:myStream.smil/playlist.m3u8",children:"https://example.com/live/smil:myStream.smil/playlist.m3u8"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://example.com/live/smil:myStream.smil/playlist_sfts.m3u8",children:"https://example.com/live/smil:myStream.smil/playlist_sfts.m3u8"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.strong,{children:"_sfts"})," indicates that the media playlist contains .ts segments."]}),"\n",(0,r.jsx)(n.h3,{id:"configure-theoplayer-to-play-your-ll-hls-stream",children:"Configure THEOplayer to play your LL-HLS stream"}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Setup a basic HTML file and include the THEOplayer library. You can check: ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-222/theoplayer/v6/getting-started/sdks/web/getting-started",children:"How to get started with THEOplayer Web SDK"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Specify the LL-HLS stream generated above, as the ",(0,r.jsx)(n.code,{children:"src"})," parameter in your source configuration"]}),"\n",(0,r.jsxs)(n.li,{children:["Set the flag ",(0,r.jsx)(n.code,{children:"lowLatency"})," parameter to TRUE, in your source configuration"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<script>\n  // LL-HLS\n  player.source = {\n    sources: [\n      {\n        src: 'https://5d6e17f1ca731.streamlock.net/LowLatencyBBB/myStream/playlist.m3u8', // set the LL-HLS source\n        type: 'application/x-mpegurl', // set the type to HLS\n        lowLatency: true,\n      },\n    ],\n  };\n<\/script>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer is partnered with Wowza Streaming Engine to fully implement low-latency HLS (LL-HLS) streaming playback."}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-222/theoplayer/v6/getting-started/sdks/web/getting-started",children:"Getting Started on Web"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.wowza.com/docs/wowza-streaming-engine-product-articles/",children:"Getting Started with Wowza Streaming Engine"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);