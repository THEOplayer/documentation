"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["18752"],{67146:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"playback/client-analytics-and-monitoring","title":"Client Analytics","description":"With Client Analytics, we are referring to any metrics or KPIs that help provide a better understanding of the end-user Quality of Experience (QoE). This becomes critical when there are playback issues to troubleshoot or for establishing alerts when monitoring rules meet a particular threshold.","source":"@site/millicast/playback/client-analytics-and-monitoring.md","sourceDirName":"playback","slug":"/client-analytics-and-monitoring","permalink":"/documentation/pr-preview/pr-260/millicast/client-analytics-and-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/playback/client-analytics-and-monitoring.md","tags":[],"version":"current","frontMatter":{"title":"Client Analytics","slug":"/client-analytics-and-monitoring"},"sidebar":"millicast","previous":{"title":"Audio Multiplexing","permalink":"/documentation/pr-preview/pr-260/millicast/audio-multiplexing"},"next":{"title":"Stream Preview","permalink":"/documentation/pr-preview/pr-260/millicast/customize-your-player"}}'),s=i("85893"),l=i("50065");let r={title:"Client Analytics",slug:"/client-analytics-and-monitoring"},o=void 0,a={},c=[{value:"Troubleshooting Client Playback Issues",id:"troubleshooting-client-playback-issues",level:2},{value:"Diagnostics Report",id:"diagnostics-report",level:3},{value:"How-to Diagnose with the Web SDK",id:"how-to-diagnose-with-the-web-sdk",level:3},{value:"Ongoing Monitoring of Client Analytics",id:"ongoing-monitoring-of-client-analytics",level:2},{value:"Analytics Collectors",id:"analytics-collectors",level:3},{value:"How-to Configure Stats Collection Frequency",id:"how-to-configure-stats-collection-frequency",level:3},{value:"Data Dictionary",id:"data-dictionary",level:2},{value:"Software Identification",id:"software-identification",level:3},{value:"Client Environment",id:"client-environment",level:3},{value:"Client Connection",id:"client-connection",level:3},{value:"Content Characteristics",id:"content-characteristics",level:3},{value:"Playback Performance",id:"playback-performance",level:3}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["With ",(0,s.jsx)(t.strong,{children:"Client Analytics"}),", we are referring to any metrics or KPIs that help provide a better understanding of the end-user ",(0,s.jsx)(t.strong,{children:"Quality of Experience (QoE)"}),". This becomes critical when there are playback issues to troubleshoot or for establishing alerts when monitoring rules meet a particular threshold."]}),"\n",(0,s.jsx)(t.h2,{id:"troubleshooting-client-playback-issues",children:"Troubleshooting Client Playback Issues"}),"\n",(0,s.jsx)(t.p,{children:"When troubleshooting playback issues it can be helpful to first verify that the problem is not originating from the broadcast source."}),"\n",(0,s.jsx)(t.p,{children:"Questions to consider:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Do all client apps experience the same issue?"}),"\n",(0,s.jsx)(t.li,{children:"Is the problem observed regardless of browser or platform being used?"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If the answer is yes to either of those questions, that may indicate a broadcast problem. You can use the ",(0,s.jsx)(t.a,{href:"https://viewer.millicast.com/?streamId=k9Mwad/multiview&multisource=true",children:"Millicast Interactive Multiviewer"})," demo as a test reference for confirming the client is able to view playback."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\uD83D\uDC4D Broadcast Monitoring"}),"\n",(0,s.jsxs)(t.p,{children:["For broadcast issues, the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/live-monitoring",children:"Live Monitoring"})," tool is available from your account ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/about-dash",children:"Streaming Dashboard"})," or by using the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/api/monitoring-list-recent-streams",children:"Broadcast Monitoring"})," REST API to get more insight into what may cause problems with a stream."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"diagnostics-report",children:"Diagnostics Report"}),"\n",(0,s.jsx)(t.p,{children:"When a broadcast is healthy, there can still be scenarios where an individual playback client may experience poor player performance due to regional network disruptions, app misconfigurations, client platform versions, codec compatibility, etc."}),"\n",(0,s.jsxs)(t.p,{children:["To help facilitate investigating out why a client is experiencing a degraded experience, there is a utility function available from the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/client-sdks",children:"Client SDKs"})," called ",(0,s.jsx)(t.code,{children:"diagnose()"}),". This method gathers up pertinent details such as:"]}),"\n",(0,s.jsxs)("ul",{class:"checkBoxList",children:[(0,s.jsx)("li",{children:"The version of the SDK being used."}),(0,s.jsx)("li",{children:"User agent of the browser and/or platform."}),(0,s.jsx)("li",{children:"Connection status, playback cluster, and stream account details."}),(0,s.jsx)("li",{children:"WebRTC stats such as round-trip time, bitrate, packet rate, mime type, resolution, jitter, etc.."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(48627).Z+"",width:"681",height:"482"})}),"\n",(0,s.jsx)(t.p,{children:"It is common to need this type of context from your application when an end user reports a problem. This level of insight can be valuable when shared with our support team to quickly find a resolution when troubleshooting."}),"\n",(0,s.jsx)(t.h3,{id:"how-to-diagnose-with-the-web-sdk",children:"How-to Diagnose with the Web SDK"}),"\n",(0,s.jsxs)(t.p,{children:["To generate a diagnostic report, call the ",(0,s.jsx)(t.a,{href:"https://millicast.github.io/millicast-sdk/module-Logger.html#~diagnose",children:"diagnose()"})," method."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"let report = Logger.diagnose(config);\n"})}),"\n",(0,s.jsx)(t.p,{children:"The result is a JSON object that includes a snapshot of what was happening on the client as observed in SDK logs and statistics. When building your application, a button or menu item to report an issue that sends this data is a common pattern."}),"\n",(0,s.jsxs)(t.p,{children:["There are some options that can be used with the ",(0,s.jsx)(t.code,{children:"config"})," to further customize the resulting report."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["By default the stats for the prior minute collected every 1s will be included in the report. By modifying ",(0,s.jsx)(t.strong,{children:"statsCount"})," this can be customized."]}),"\n",(0,s.jsxs)(t.li,{children:["A large number of logging events will be buffered and included, but this number can be extended or shortened by using the ",(0,s.jsx)(t.strong,{children:"minLogLevel"})," and ",(0,s.jsx)(t.strong,{children:"historySize"})," to indicate which logs to include and how many of them. The default is ",(0,s.jsx)(t.code,{children:"TRACE"})," but can be changed to ",(0,s.jsx)(t.em,{children:"INFO"})," or ",(0,s.jsx)(t.em,{children:"DEBUG"})," to increase or decrease the amount of detail respectively."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"let config = {\n  statsCount: 120,\n  historySize: 200,\n  minLogLevel: 'DEBUG',\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"See the Data Dictionary below for examples of some of the data returned."}),"\n",(0,s.jsx)(t.h2,{id:"ongoing-monitoring-of-client-analytics",children:"Ongoing Monitoring of Client Analytics"}),"\n",(0,s.jsxs)(t.p,{children:["It is common practice to proactively monitor all clients for indicators of streaming issues. The ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/client-sdks",children:"Client SDKs"})," provide access to a ",(0,s.jsx)(t.code,{children:"stats"})," event that emits a snapshot of WebRTC indicators at a frequent interval. This data can be used in combination with an ",(0,s.jsx)(t.strong,{children:"Application Performance Monitoring (APM)"})," solution or Observability tool to alert and integrate with other third-party analytics services for a complete picture of the end-viewer experience."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(99082).Z+"",width:"681",height:"482"})}),"\n",(0,s.jsx)(t.h3,{id:"analytics-collectors",children:"Analytics Collectors"}),"\n",(0,s.jsxs)(t.p,{children:["There are third-party ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/client-analytics",children:"Client Analytics"})," integrations available that can serve as a collector or monitoring tool for storing analytics."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/datazoom",children:"Datazoom"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/datadog",children:"Datadog"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The same pattern can be used with other tools such as Grafana, Splunk, New Relic, etc."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\uD83D\uDC4D Viewer Reporting Analytics API"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/api/reporting/advanced-analytics-api",children:"Viewer Reporting"})," REST API is a premium ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/analytics-api",children:"Analytics APIs"})," option made available to enterprise customers. It offers key insights from our server logs to help identify viewers, location, and other metrics. If you would like to use this endpoint, please ",(0,s.jsx)(t.a,{href:"https://support.dolby.io/hc/en-au",children:"submit a support ticket"})," or reach out to your ",(0,s.jsx)(t.a,{href:"https://dolby.io/contact/",children:"sales/solutions"})," contact."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"how-to-configure-stats-collection-frequency",children:"How-to Configure Stats Collection Frequency"}),"\n",(0,s.jsxs)(t.p,{children:["The default behavior is to emit a ",(0,s.jsx)(t.code,{children:"stats"})," event every one second (1s). To manage bandwidth and data storage costs, this value can be tuned to meet any observability needs at higher or less frequent intervals."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"// Reduce stats collection frequency to be every 5s instead of the default 1s\nconst option = {\n  peerConfig: {\n    statsIntervalMs: 5000,\n  },\n};\n\nawait millicastViewer.connect(options);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"data-dictionary",children:"Data Dictionary"}),"\n",(0,s.jsx)(t.p,{children:"The data measures and metrics gathered for diagnostics are described below."}),"\n",(0,s.jsx)(t.h3,{id:"software-identification",children:"Software Identification"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Measure"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Definition"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Troubleshooting"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"version"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The version of the Client SDK that generated the analytics."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This can be helpful for debugging if you are using or testing new versions of the SDK to find signs of problems with a specific version."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"client"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"An identifier for the Client SDK that was used."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This can help to distinguish analytics collected between Web, Android, iOS, React-Native, etc. which may be in a mobile browser or a native application."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"client-environment",children:"Client Environment"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Measure"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Definition"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Troubleshooting"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"userAgent"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The user agent captured from the device and/or browser. This can identify the operating system, application versions, etc. The string is the raw unparsed value."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Codec support on platforms, devices, and browsers often come into play with playback performance. Being able to identify the user agent can be particularly helpful for diagnosing patterns."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"timestamp"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Identifies the precise date and time of the client when diagnostic measures were collected as a UTC value."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This can be helpful for correlating with other system-wide or content network events."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"client-connection",children:"Client Connection"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Measure"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Definition"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Troubleshooting"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"accountId"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The unique identifier that is assigned to each Millicast account. It is a required parameter when publishing or subscribing to a stream."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The combination of Account ID and Stream Name can be used to identify the unique playback experience."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"streamName"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The label that is configured with publishing tokens to name a unique stream."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The combination of Account ID and Stream Name can be used to identify the unique playback experience."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"feedId"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The unique session identifier for a publishing connection to broadcast into the Millicast platform."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This id can be helpful for correlating server logs and details."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"subscriberId"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The unique session identifier for a subscribing connection to playback from the Millicast platform."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This id can be helpful for correlating server logs and details."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"connection"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The state of the connection according to the client SDK."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This can be helpful context when the client and server do not have an active connection to share analytics."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"content-characteristics",children:"Content Characteristics"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Measure"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Definition"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Troubleshooting"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"mid"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The Media Stream Identifier is an identification tag negotiated and present in both local and remote descriptions for the stream with multiple tracks."}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"mimeType"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The MIME Type identifies the audio and video codecs used to encode the incoming media stream."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"This can be helpful when certain platforms do not support the necessary codecs because of licensing or browser compatibility, device constraints such as set-top boxes, etc."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"frameWidth"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The width of the video frame."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Changes in resolution can be an indicator of an unstable connection."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"frameHeight"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The height of the video frame."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Changes in resolution can be an indicator of an unstable connection."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"playback-performance",children:"Playback Performance"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Measure"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Definition"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Troubleshooting"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"bitrate"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The current bitrate in bytes per second."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"If the bitrate received does not match the encoded bitrate being published there may be an indication of adaptive bitrate step-down or other factors triggering layer switching to occur."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"currentRoundTripTime"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The current round trip time is the latest measure based on STUN connectivity check and response time measurements. The ",(0,s.jsx)(t.strong,{children:"totalRoundTripTime"})," is the sum."]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The **round trip time (RTT) is a good measure of latency experienced across clients as a measure of the time between distribution and playback. The average RTT can be computed by dividing the ",(0,s.jsx)(t.em,{children:"totalRoundTripTime"})," by number of ",(0,s.jsx)(t.em,{children:"responsesReceived"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"responsesReceived"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The total number of connectivity check responses that have been received."}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"availableIncomingBitrate"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Calculated by congestion control from all RTP streams using the candidate pair. This is similar to the TIAS as defined in RFC3890 over a 1s window."}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"framesReceived"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The total number of complete frames received for the stream."}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The ",(0,s.jsx)(t.strong,{children:"framesDecoded"})," includes only those correctly decoded, ",(0,s.jsx)(t.strong,{children:"framesDropped"})," counts total number of frames lost prior to decode or that missed the display deadline. ",(0,s.jsx)(t.strong,{children:"keyFramesDecoded"})," is the total number of key frames in VP8 (RFC6386) or IDR-frames in H.264 (RFC6184) that are successfully decoded."]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"These values are used to calculate **frames per second (FPS) which can be compared against the fps that was encoded from the source."}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"framesPerSecond"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The number of frames decoded per second."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Fluctuations in fps over time or variance between encoded and decoded fps may indicate an inefficiency in the decoding and transport."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"jitter"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Deviation in packet reception times is called jitter and measured in milliseconds. The purpose of a jitter buffer is to recombine packets into frames for smooth playout."}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The ",(0,s.jsx)(t.strong,{children:"jitterBufferDelay"})," is the sum of time in seconds each frame takes from first packet received by the buffer to the time it is emitted and exits the buffer. The ",(0,s.jsx)(t.strong,{children:"jitterBufferEmittedCount"})," is the total number of frames."]}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"packetRate"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The throughput between client and server can be measured by the client as an estimated bandwidth from CDN to player for packets received per second."}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The ",(0,s.jsx)(t.strong,{children:"totalBytesReceived"})," and ",(0,s.jsx)(t.strong,{children:"totalPacketsReceived"})," is the sum of bytes and RTP packets respectively. ",(0,s.jsx)(t.strong,{children:"PacketsLost"})," is the total number of RTP packets sent by the server but not received by the client which can be used to calculate ",(0,s.jsx)(t.strong,{children:"packetsLossRatio"})," and ",(0,s.jsx)(t.strong,{children:"packetsLossDelta"})," which is packets lost since the last measurement."]}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},99082:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/feature-client-analytics-5f6c0690eb0259297c89987e484b3b83.png"},48627:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/feature-diagnostics-1f8f385e625cce87ab51b0ad3162492c.png"},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return r}});var n=i(67294);let s={},l=n.createContext(s);function r(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);