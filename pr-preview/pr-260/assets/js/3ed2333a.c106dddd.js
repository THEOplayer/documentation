"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["72311"],{33246:function(e,t,i){i.r(t),i.d(t,{default:()=>j,frontMatter:()=>u,metadata:()=>s,assets:()=>x,toc:()=>p,contentTitle:()=>m});var s=JSON.parse('{"id":"distribution/using-webrtc-simulcast","title":"Simulcast","description":"Simulcast is a mechanism for distributing streaming content with variations that are optimized for viewers who are under different network conditions or device resolutions. By using a mechanism of WebRTC to distribute content, multiple sources will be available simultaneously that have been encoded with different bitrates and resolutions (HD, SD, LD).","source":"@site/millicast/distribution/using-webrtc-simulcast.mdx","sourceDirName":"distribution","slug":"/using-webrtc-simulcast","permalink":"/documentation/pr-preview/pr-260/millicast/using-webrtc-simulcast","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/distribution/using-webrtc-simulcast.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Simulcast","slug":"/using-webrtc-simulcast","sidebar_position":6},"sidebar":"millicast","previous":{"title":"Re-streaming","permalink":"/documentation/pr-preview/pr-260/millicast/re-streaming"},"next":{"title":"Stream Recordings","permalink":"/documentation/pr-preview/pr-260/millicast/recordings"}}'),n=i("85893"),r=i("50065");let l=i.p+"assets/images/Simulcast-242872eee2799927ce18b43803c611f4.png",a=i.p+"assets/images/Capture_decran_2023-07-24_a_1.43.22_PM-8de5333da2378749fda5e41661ec85c9.png",d=i.p+"assets/images/Screenshot_2023-11-02_at_10.25.48-81fda41db243e762dfb3ab8e5a20965d.png",o=i.p+"assets/images/Screenshot_2023-11-02_at_10.19.08-fb528a2d6f41dd6313f96d63a7891121.png",c=i.p+"assets/images/Screenshot_2023-11-02_at_10.19.25-2f55801bc96b1397eb3f33c7bdd4cc2d.png",h=i.p+"assets/images/Screenshot_2023-11-02_at_10.19.42-958e0a4e298a0ea975d1a6880ad80c75.png",u={title:"Simulcast",slug:"/using-webrtc-simulcast",sidebar_position:6},m=void 0,x={},p=[{value:"Configuring Simulcast",id:"configuring-simulcast",level:2},{value:"Requirements",id:"requirements",level:3},{value:"How-to enable Simulcast with the Dolby.io dashboard",id:"how-to-enable-simulcast-with-the-dolbyio-dashboard",level:3},{value:"How-to enable Simulcast from an encoder",id:"how-to-enable-simulcast-from-an-encoder",level:3},{value:"Publish URL",id:"publish-url",level:4},{value:"RTMP Multi-Bitrate Publishing Example",id:"rtmp-multi-bitrate-publishing-example",level:4},{value:"WebRTC via WHIP and Multi-Bitrate Publishing Example",id:"webrtc-via-whip-and-multi-bitrate-publishing-example",level:4},{value:"Recommended settings for Simulcast",id:"recommended-settings-for-simulcast",level:3},{value:"High quality layer",id:"high-quality-layer",level:4},{value:"Medium quality layer",id:"medium-quality-layer",level:4},{value:"Low quality layer",id:"low-quality-layer",level:4},{value:"View multi-bitrate streams with the hosted player",id:"view-multi-bitrate-streams-with-the-hosted-player",level:2},{value:"Simulcast demo video",id:"simulcast-demo-video",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"How-to check network conditions",id:"how-to-check-network-conditions",level:3},{value:"Learn more",id:"learn-more",level:2}];function b(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Simulcast is a mechanism for distributing streaming content with variations that are optimized for viewers who are under different network conditions or device resolutions. By using a mechanism of WebRTC to distribute content, multiple sources will be available simultaneously that have been encoded with different bitrates and resolutions (HD, SD, LD)."}),"\n","\n",(0,n.jsx)("div",{class:"center-container",children:(0,n.jsx)("img",{src:l,width:"500"})}),"\n",(0,n.jsxs)(t.p,{children:["The platform's ",(0,n.jsx)(t.em,{children:"Selective Forwarding Unit (SFU)"})," is responsible for distributing the media and adjusts the bit rate so that the streaming player will select the highest quality stream it can reliably playback for each viewer. This is known as ",(0,n.jsx)(t.strong,{children:"Adaptive Bitrate (ABR) streaming"}),". The decision is made based on factors like available bandwidth but also other considerations such as device size, video layout, and CPU utilization may be considered. With ",(0,n.jsx)(t.strong,{children:"Multi-bitrate (MBR)"})," streaming, the end-user can be given controls to choose which resolution they would like to receive instead of letting the SFU ",(0,n.jsx)(t.em,{children:"auto"})," select it."]}),"\n",(0,n.jsxs)(t.p,{children:["This bitrate adaptation is available for ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/using-rtmp-and-rtmps",children:"RTMP"}),", ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/using-srt",children:"SRT"}),", and ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/webrtc-whip",children:"WHIP"})," broadcast protocols."]}),"\n",(0,n.jsxs)(t.p,{children:["Simulcast provides flexibility that allows viewers to adjust their individual experience for specific circumstances. For ",(0,n.jsx)(t.em,{children:"multicast"})," use cases of distributing to multiple destinations, review the ",(0,n.jsx)(t.a,{href:"/millicast/syndication",children:"Syndication"})," guide."]}),"\n",(0,n.jsx)(t.admonition,{title:"Getting Started",type:"tip",children:(0,n.jsxs)(t.p,{children:["If you haven't already, begin by following the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/",children:"Getting Started"})," tutorial to create a Dolby.io application and start your first broadcast."]})}),"\n",(0,n.jsx)(t.h2,{id:"configuring-simulcast",children:"Configuring Simulcast"}),"\n",(0,n.jsx)(t.h3,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(t.p,{children:"Before broadcasting content using Simulcast, make sure you:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Enabled the Simulcast setting in the dashboard"}),"\n",(0,n.jsxs)(t.li,{children:["Use ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/multi-source-broadcasting",children:"multisource streams"})," either by using an encoder that is capable of transcoding multiple sources or by using multiple devices that each contribute to the broadcast"]}),"\n",(0,n.jsx)(t.li,{children:"Use either Chrome or Edge"}),"\n",(0,n.jsx)(t.li,{children:"Use the H.264 or VP8 video codec"}),"\n",(0,n.jsx)(t.li,{children:"Disabled b-frames for better results"}),"\n",(0,n.jsx)(t.li,{children:"Have adequate bandwidth at the broadcast source to send multiple contribution sources"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Bandwidth Usage",type:"caution",children:(0,n.jsx)(t.p,{children:"Simulcast is included with plans at no additional cost when enabled. However, since multiple streams will be published, there will be more bits sent to the platform which counts as a bandwidth increase. Conversely, viewers may receive a resolution and bitrate at a lower level which may decrease bandwidth consumption overall."})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-enable-simulcast-with-the-dolbyio-dashboard",children:"How-to enable Simulcast with the Dolby.io dashboard"}),"\n",(0,n.jsxs)(t.p,{children:["To activate Simulcast and stream using the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/how-to-broadcast-in-dashboard#broadcaster",children:"Streaming Dashboard Broadcaster"}),", open the ",(0,n.jsx)(t.em,{children:"Media Settings"})," by clicking on the gear icon. This allows you to toggle the option to be on. The bandwidth settings can also be adjusted to achieve the desired bitrate."]}),"\n",(0,n.jsxs)(t.p,{children:["Set the ",(0,n.jsx)(t.strong,{children:"Bandwidth"})," as ",(0,n.jsx)(t.em,{children:"Custom > 6000"}),", which will provide sufficient ",(0,n.jsx)(t.em,{children:"Kbps"})," for a high-quality Simulcast stream. Similarly, the ",(0,n.jsx)(t.strong,{children:"Width"}),", ",(0,n.jsx)(t.strong,{children:"Height"}),", and ",(0,n.jsx)(t.strong,{children:"FPS"})," should be adjusted to match your desired output."]}),"\n","\n",(0,n.jsx)("div",{class:"center-container",children:(0,n.jsx)("img",{src:a,width:"500"})}),"\n",(0,n.jsxs)(t.p,{children:["You are now ready to send your live stream and can select the ",(0,n.jsx)(t.em,{children:"start"})," button on the broadcaster. The browser will provide multi-bitrate contributions during broadcast when using the ",(0,n.jsx)(t.em,{children:"Streaming Dashboard"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/hosted-viewer",children:"Hosted Player"})," to check the results."]}),"\n",(0,n.jsx)(t.h3,{id:"how-to-enable-simulcast-from-an-encoder",children:"How-to enable Simulcast from an encoder"}),"\n",(0,n.jsxs)(t.p,{children:["You may choose to use a ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/hardware-encoders",children:"Hardware Encoder"})," that can support multi-bitrate encoding directly or ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/software-encoders",children:"Software Encoders"})," that use additional plugins and configuration to enable separate renditions. Regardless of whether you are using RTMP, SRT, or WHIP as your broadcast protocol, you will need to configure multiple contributions to the broadcast with various quality layer settings."]}),"\n",(0,n.jsx)(t.p,{children:"Specific integration examples:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/using-obs#multi-bitrate-simulcast-contribution",children:"How-to Setup Multi-Bitrate Simulcast with OBS"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/broadcasting-with-vmix#setup-multi-bitrate-rtmp-streaming-with-vmix",children:"How-to Setup Multi-Bitrate Simulcast with vMix"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/videon#how-to-use-multi-bitrate-on-videon-edgecaster",children:"How-to Setup Multi-Bitrate Simulcast with Videon"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As long as the WHIP, RTMP, or SRT client makes a Simulcast offer the media server will accept it."}),"\n",(0,n.jsx)(t.h4,{id:"publish-url",children:"Publish URL"}),"\n",(0,n.jsx)(t.p,{children:"The following parameters are significant to determine the server endpoint:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"simulcastId"}),": An identifier that assigns feeds produced by a single camera as Simulcast layers. All feeds that have the same ",(0,n.jsx)(t.strong,{children:"simulcastId"})," are published together as different quality layers. You can identify each layer using a different ",(0,n.jsx)(t.strong,{children:"sourceId"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"token"}),": The publish token used for the broadcast."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"sourceId"}),": A unique identifier for a specific feed. Two feeds can have the same ",(0,n.jsx)(t.strong,{children:"sourceId"})," only when they are the same and used as backup feeds in ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/redundant-ingest",children:"Redundant Ingest"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The following table presents an example of using ",(0,n.jsx)(t.strong,{children:"simulcastId"})," and ",(0,n.jsx)(t.strong,{children:"sourceId"})," for five different feeds. Video 1 and 2 is published using two Simulcast layers, video 3 is published without Simulcast."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Content"}),(0,n.jsx)(t.th,{children:"Feed"}),(0,n.jsx)(t.th,{children:"Simulcast"}),(0,n.jsx)(t.th,{children:"Resolution"}),(0,n.jsx)(t.th,{children:"SourceId"}),(0,n.jsx)(t.th,{children:"SimulcastId"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Video 1"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"Enabled"}),(0,n.jsx)(t.td,{children:"640x360"}),(0,n.jsx)(t.td,{children:"1low"}),(0,n.jsx)(t.td,{children:"sim_source_1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Video 1"}),(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"Enabled"}),(0,n.jsx)(t.td,{children:"1280x720"}),(0,n.jsx)(t.td,{children:"1high"}),(0,n.jsx)(t.td,{children:"sim_source_1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Video 2"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"Enabled"}),(0,n.jsx)(t.td,{children:"854x480"}),(0,n.jsx)(t.td,{children:"2low"}),(0,n.jsx)(t.td,{children:"sim_source_2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Video 2"}),(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"Enabled"}),(0,n.jsx)(t.td,{children:"1920x1080"}),(0,n.jsx)(t.td,{children:"2high"}),(0,n.jsx)(t.td,{children:"sim_source_2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Video 3"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"Disabled"}),(0,n.jsx)(t.td,{children:"640x360"}),(0,n.jsx)(t.td,{children:"non_sim_source_3"}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Some broadcast tools will use a single ",(0,n.jsx)(t.strong,{children:"URL"})," and others may require separate ",(0,n.jsx)(t.strong,{children:"publish path"})," and ",(0,n.jsx)(t.strong,{children:"stream name"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For WebRTC Simulcast append ",(0,n.jsx)(t.code,{children:"?simulcastId&sourceId=1"})," to the stream ",(0,n.jsx)(t.strong,{children:"URL"}),", with each quality layer having a different ",(0,n.jsx)(t.strong,{children:"sourceId"}),". ",(0,n.jsxs)(t.em,{children:["(note that the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/broadcast-parameters",children:"publishing parameters"})," are appended to the URL and not the token)."]})]}),"\n",(0,n.jsx)(t.h4,{id:"rtmp-multi-bitrate-publishing-example",children:"RTMP Multi-Bitrate Publishing Example"}),"\n",(0,n.jsx)(t.p,{children:"For example you can have a WebRTC broadcast with four qualities, 1080p, 720p, 480p, and 360p like so:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["1080p stream URL (attach audio if desired to this first one): ",(0,n.jsx)(t.code,{children:"rtmp://rtmp-auto.millicast.com:1935/v2/pub myStreamName?token=9797201bbb26f7f7...bae738464f36b1eb8a05473d03c04b&sourceId=0&simulcastId"})]}),"\n",(0,n.jsxs)(t.li,{children:["720p stream URL: ",(0,n.jsx)(t.code,{children:"rtmp://rtmp-auto.millicast.com:1935/v2/pub myStreamName?token=9797201bbb26f7f7...bae738464f36b1eb8a05473d03c04b&sourceId=1&simulcastId&videoOnly"})]}),"\n",(0,n.jsxs)(t.li,{children:["480p stream URL: ",(0,n.jsx)(t.code,{children:"rtmp://rtmp-auto.millicast.com:1935/v2/pub myStreamName?token=9797201bbb26f7f7...bae738464f36b1eb8a05473d03c04b&sourceId=2&simulcastId&videoOnly"})]}),"\n",(0,n.jsxs)(t.li,{children:["360p stream URL: ",(0,n.jsx)(t.code,{children:"rtmp://rtmp-auto.millicast.com:1935/v2/pub myStreamName?token=9797201bbb26f7f7...bae738464f36b1eb8a05473d03c04b&sourceId=3&simulcastId&videoOnly"})]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"webrtc-via-whip-and-multi-bitrate-publishing-example",children:"WebRTC via WHIP and Multi-Bitrate Publishing Example"}),"\n",(0,n.jsx)(t.p,{children:"For example you can have a WebRTC broadcast with four qualities, 1080p, 720p, 480p, and 360p:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["1080p stream URL: ",(0,n.jsx)(t.code,{children:"https://director.millicast.com/api/whip/myStreamName?simulcastId&sourceId=0"})," + publishing token"]}),"\n",(0,n.jsxs)(t.li,{children:["720p stream URL: ",(0,n.jsx)(t.code,{children:"https://director.millicast.com/api/whip/myStreamName?simulcastId&sourceId=1"})," + publishing token"]}),"\n",(0,n.jsxs)(t.li,{children:["480p stream URL: ",(0,n.jsx)(t.code,{children:"https://director.millicast.com/api/whip/myStreamName?simulcastId&sourceId=2"})," + publishing token"]}),"\n",(0,n.jsxs)(t.li,{children:["360p stream URL: ",(0,n.jsx)(t.code,{children:"https://director.millicast.com/api/whip/myStreamName?simulcastId&sourceId=3"})," + publishing token"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Multi-Source Builder",type:"tip",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/multi-source-builder",children:"Multi-source Builder"})," tool within the dashboard can assist with constructing these target endpoints. When using RTMP, SRT, and WHIP contributions you will use a separate publish url for each source. The ",(0,n.jsx)(t.em,{children:"Multi-source Builder"})," will help construct these URLs which you can export and download the configuration as a reference while setting up each device you will be broadcasting from."]})}),"\n",(0,n.jsx)(t.h3,{id:"recommended-settings-for-simulcast",children:"Recommended settings for Simulcast"}),"\n",(0,n.jsxs)(t.p,{children:["The specific settings available may vary depending on your available ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/hardware-encoders",children:"Hardware"})," or ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/software-encoders",children:"Software"})," encoders. A few settings that are common:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Encoder"}),": H.264 (AVC), x264, ffmpeg, or nvenc"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Encoding Mode"}),": variable bitrate"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"H.264 Profile"}),": High"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Keyframe Interval"}),": 0.5"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Quality"}),": Lowest (if optimizing for real-time performance and minimal latency)"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Individual source contributions can be customized however you like, but typically follow High, Medium (or Standard), and Low."}),"\n",(0,n.jsx)(t.h4,{id:"high-quality-layer",children:"High quality layer"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"}}),(0,n.jsx)(t.th,{style:{textAlign:"left"}})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Source ID"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1080p"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Resolution"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1920x1080"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Bitrate"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6000kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Keyframe"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"B-Frames"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"medium-quality-layer",children:"Medium quality layer"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"}}),(0,n.jsx)(t.th,{style:{textAlign:"left"}})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Source ID"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"720p"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Resolution"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1280x720"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Bitrate"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2000kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Keyframe"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"B-Frames"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"low-quality-layer",children:"Low quality layer"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"}}),(0,n.jsx)(t.th,{style:{textAlign:"left"}})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Source ID"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"360p"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Resolution"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"640x360"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Bitrate"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"500kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Keyframe"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"B-Frames"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"view-multi-bitrate-streams-with-the-hosted-player",children:"View multi-bitrate streams with the hosted player"}),"\n",(0,n.jsxs)(t.p,{children:["During ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/playback",children:"Playback"}),", stream quality defaults to ",(0,n.jsx)(t.em,{children:"Auto"})," and will be determined by a few factors:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The stream quality available from the broadcaster"}),"\n",(0,n.jsxs)(t.li,{children:["The stream quality requested by the receiver if switched from ",(0,n.jsx)(t.em,{children:"Auto"})]}),"\n",(0,n.jsx)(t.li,{children:"The stream quality is estimated based on the receiver's available bandwidth"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["When using the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/hosted-viewer",children:"Hosted Player"}),", viewers will be automatically served video quality with an adaptive bitrate appropriate for them. It may take a brief amount of time for the bandwidth estimation to determine the ideal quality setting. Setting the bandwidth to the highest quality setting of 6000kbps during broadcast can help reduce the amount of time this adaptation takes."]}),"\n",(0,n.jsxs)(t.p,{children:["The desired Video Quality can also be chosen manually. This is done within the viewer by clicking the ",(0,n.jsx)(t.em,{children:"gear"})," icon in the bottom right and selecting video quality, as shown below."]}),"\n","\n",(0,n.jsx)("div",{class:"center-container",children:(0,n.jsx)("img",{src:d,width:"500"})}),"\n",(0,n.jsxs)(t.p,{children:["On the viewer, you can also check the ",(0,n.jsx)(t.strong,{children:"bitrate throughput"})," by selecting a quality level and then selecting the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/media-stats",children:"Media Stats"})," within the ",(0,n.jsx)(t.em,{children:"gear"})," settings icon."]}),"\n","\n",(0,n.jsxs)("div",{class:"center-container",children:[(0,n.jsx)("img",{src:o,width:"500"}),(0,n.jsx)("img",{src:c,width:"500"}),(0,n.jsx)("img",{src:h,width:"500"})]}),"\n",(0,n.jsx)(t.admonition,{title:"Building Your Own Custom Player To Support Multi-bitrate Streams",type:"tip",children:(0,n.jsxs)(t.p,{children:["If you are using the Millicast ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/web",children:"Web SDK"})," to build your own playback experience and want to support Simulcast, see the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/source-and-layer-selection",children:"Multisource Playback"})," guide for details on handling events and layer selection."]})}),"\n",(0,n.jsx)(t.h2,{id:"simulcast-demo-video",children:"Simulcast demo video"}),"\n",(0,n.jsxs)(t.p,{children:["Here is a video showing the Simulcast playback using the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/hosted-viewer",children:"hosted player"})," built with the Javascript ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/web",children:"Web SDK"}),"."]}),"\n",(0,n.jsx)("div",{className:"youtube-container",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/kXkwNyA6X24?si=_tnQTf2Fympb0K9O",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,n.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(t.p,{children:"To diagnose simulcast issues, it can be helpful to review details about the broadcast source and playback client:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Operating system and web browser"}),"\n",(0,n.jsx)(t.li,{children:"Hardware encoders or software applications used"}),"\n",(0,n.jsx)(t.li,{children:"Publishing encoder settings (framerate, bitrate, resolution, etc.)"}),"\n",(0,n.jsx)(t.li,{children:"Bandwidth of both broadcast source and playback client"}),"\n",(0,n.jsx)(t.li,{children:"Video quality selection"}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/multi-region-support",children:"cluster regions"})," used for broadcasting and playback"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"how-to-check-network-conditions",children:"How-to check network conditions"}),"\n",(0,n.jsx)(t.p,{children:"There are some tools that can test the packet loss and bitrate giving details on the network conditions."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["View the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/media-stats",children:"Media Stats"})," from the hosted player."]}),"\n",(0,n.jsxs)(t.li,{children:["Visit ",(0,n.jsx)(t.a,{href:"https://rtctest.com",children:"https://rtctest.com"})," or ",(0,n.jsx)(t.a,{href:"https://packetlosstest.com/",children:"https://packetlosstest.com/"})," for WebRTC testing tools of a local network."]}),"\n",(0,n.jsxs)(t.li,{children:["Incorporate the ",(0,n.jsx)(t.a,{href:"https://github.com/DolbyIO/web-webrtc-stats",children:"dolbyio/web-webrtc-stats"})," project into your custom applications for additional WebRTC diagnostics."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"There are network limiter test tools that can help simulate conditions when trying to reproduce a problem."}),"\n",(0,n.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,n.jsxs)(t.p,{children:["Learn more by exploring the ",(0,n.jsx)(t.a,{href:"https://dolby.io/blog/tag/distribution/",children:"developer blog"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/dolbyio-samples/repositories?q=distribution",children:"code samples"}),"."]})]})}function j(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return l}});var s=i(67294);let n={},r=s.createContext(n);function l(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);