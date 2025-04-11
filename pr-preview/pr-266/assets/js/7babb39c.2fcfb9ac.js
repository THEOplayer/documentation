"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["42409"],{72619:function(e,t,i){i.r(t),i.d(t,{default:()=>b,frontMatter:()=>d,metadata:()=>s,assets:()=>h,toc:()=>p,contentTitle:()=>u});var s=JSON.parse('{"id":"broadcast/multi-source-broadcasting","title":"Multi-Source Broadcasting","description":"Multi-source Broadcasting allows you to ingest and send additional capture sources, such as different camera angles, to the Dolby.io Real-time Streaming platform where they will be logically grouped into an optimized multi-view experience over a single WebRTC connection.","source":"@site/millicast/broadcast/multi-source-broadcasting.mdx","sourceDirName":"broadcast","slug":"/multi-source-broadcasting","permalink":"/documentation/pr-preview/pr-266/millicast/multi-source-broadcasting","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/broadcast/multi-source-broadcasting.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Multi-Source Broadcasting","slug":"/multi-source-broadcasting","sidebar_position":9},"sidebar":"millicast","previous":{"title":"Hardware Encoders","permalink":"/documentation/pr-preview/pr-266/millicast/hardware-encoders"},"next":{"title":"Redundant Ingest","permalink":"/documentation/pr-preview/pr-266/millicast/redundant-ingest"}}'),r=i("85893"),n=i("50065");let l=i.p+"assets/images/multi-source-overview-a2291b5e8266ca26e7b1da5d5b2d33db.png";var a=i("71509"),o=i("97645"),c=i("35431");let d={title:"Multi-Source Broadcasting",slug:"/multi-source-broadcasting",sidebar_position:9},u=void 0,h={},p=[{value:"Multi-source Workflow",id:"multi-source-workflow",level:2},{value:"Multi-Bitrate Contribution and Simulcast",id:"multi-bitrate-contribution-and-simulcast",level:3},{value:"Publishing sources",id:"publishing-sources",level:3},{value:"Multiple Points of View",id:"multiple-points-of-view",level:3},{value:"Broadcast URLs",id:"broadcast-urls",level:3},{value:"Multi-source RTMP",id:"multi-source-rtmp",level:4},{value:"Multi-source SRT",id:"multi-source-srt",level:4},{value:"Broadcasting",id:"broadcasting",level:2},{value:"Publishing with the SDK",id:"publishing-with-the-sdk",level:3},{value:"Publishing with the Hosted Broadcaster in the Dashboard",id:"publishing-with-the-hosted-broadcaster-in-the-dashboard",level:3},{value:"Playback",id:"playback",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Broadcasting best practices",id:"broadcasting-best-practices",level:3},{value:"Playback best practices",id:"playback-best-practices",level:3}];function m(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Multi-source Broadcasting"})," allows you to ingest and send additional capture sources, such as different camera angles, to the Dolby.io Real-time Streaming platform where they will be logically grouped into an optimized multi-view experience over a single WebRTC connection."]}),"\n",(0,r.jsx)(t.p,{children:"There are two main use cases where broadcasting multiple video and audio feeds to a stream is useful:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multiview",children:"Multi-view streams"}),": Multi-view is a feature whereby viewers ingest and render multiple streams simultaneously inside a browser or mobile native applications. Once rendered these streams can be switched between, offering the viewer the ability to control how they view and listen to the content. Multi-view is supported by all of our ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/client-sdks",children:"Client SDKs"})," for playback."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/audio-multiplexing",children:"Audio Multiplexing"}),": Audio Multiplexing is a feature that allows viewers to receive multiple overlapping audio streams in a conference-like experience, where each audio stream is emphasized or deemphasized based on activity."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Multi-source can ingest contribution streams from sources such as RTMP and SRT. This guide provides the components and best practices for an optimal multi-view experience."}),"\n",(0,r.jsx)(t.h2,{id:"multi-source-workflow",children:"Multi-source Workflow"}),"\n",(0,r.jsxs)(t.p,{children:["Multi-source broadcasting is accomplished by enabling a token for multi-source and then publishing multiple quality layers or contributing sources using the same ",(0,r.jsx)(t.strong,{children:"publishing token"})," and ",(0,r.jsx)(t.strong,{children:"stream name"}),", but each with a unique ",(0,r.jsx)(t.strong,{children:"source id"})," and ",(0,r.jsx)(t.strong,{children:"simulcast id"}),". If you do not provide a source id, a second feed will overwrite the previous stream, which is common when trying to setup a ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/redundant-ingest",children:"Redundant Ingest "})," in case of an encoder failure."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Enable Multi-source",type:"tip",children:[(0,r.jsxs)(t.p,{children:["To use Multi-source, a ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/managing-your-tokens",children:"publish Token"})," must have ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/managing-your-tokens#advanced-settings",children:"multi-source"})," enabled in the token settings. This can be done with the REST API or by editing the token from the dashboard."]}),(0,r.jsxs)(t.p,{children:["Additionally, ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/geo-cascading",children:"Geo-cascading"})," is required when publishing to multiple regions for ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multiview",children:"Multi-view"})," or ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/redundant-ingest",children:"Redundant Ingest"}),"."]})]}),"\n",(0,r.jsxs)(t.p,{children:["When multi-source is enabled, you use the ",(0,r.jsx)(t.code,{children:"sourceId"})," attribute when publishing a stream."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If the ",(0,r.jsx)(t.code,{children:"sourceId"})," is undefined, the stream is treated as the default or ",(0,r.jsx)(t.em,{children:"main"})," stream to ensure backward compatibility."]}),"\n",(0,r.jsxs)(t.li,{children:["When identical ",(0,r.jsx)(t.code,{children:"sourceId"})," settings are given with the same id value, the broadcast will only include the most recently published stream, allowing broadcasters to swap a stream seamlessly."]}),"\n",(0,r.jsxs)(t.li,{children:["When there are multiple unique ",(0,r.jsx)(t.code,{children:"sourceId"})," attributes the stream plays the ",(0,r.jsx)(t.strong,{children:"Main"})," source.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["You can ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multiview",children:"enable multi-view streams"})," on playback to view the available sources."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"This functionality is the same regardless of whether the stream is video only, audio only, or video and audio."}),"\n",(0,r.jsxs)(t.li,{children:["When multi-bitrate publishing is configured, the sources are logically grouped using the ",(0,r.jsx)(t.code,{children:"simulcastId"}),"."]}),"\n"]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:l,width:"600"})}),"\n",(0,r.jsx)(t.h3,{id:"multi-bitrate-contribution-and-simulcast",children:"Multi-Bitrate Contribution and Simulcast"}),"\n",(0,r.jsxs)(t.p,{children:["With WebRTC broadcast workflows you get Adaptive Bitrate through Simulcast. With RTMP or SRT sources however, a typical workflow involves multi-bitrate contribution by configuring multiple sources to each broadcast an independent stream. These sources contribute to the stream discrete ",(0,r.jsx)(t.strong,{children:"quality layers"})," that each may show the same content but with different bitrate settings while using the same stream and avoiding additional channel fees."]}),"\n",(0,r.jsxs)(t.p,{children:["This allows for ",(0,r.jsx)(t.strong,{children:"Adaptive Bitrate"})," delivery of streams for a better user experience on a range of devices and network conditions. It also makes it possible to pass through from the studio or broadcast facility and deliver adaptive bitrate without any channel fees."]}),"\n",(0,r.jsxs)(t.p,{children:["See the ",(0,r.jsx)(t.a,{href:"/millicast/using-webrtc-simulcast",children:"Simulcast"})," guide for additional details on setting up these workflows."]}),"\n",(0,r.jsx)(t.h3,{id:"publishing-sources",children:"Publishing sources"}),"\n",(0,r.jsxs)(t.p,{children:["You can configure multiple publishing sources to enable simulcast or provide a multi-view experience of different content quickly using the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multi-source-builder",children:"Multi-source Builder"}),". You can also use the multi-source hosted player, which is a streaming video player, as a standalone web application or embed it into your website with an ",(0,r.jsx)(t.code,{children:"<iframe>"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"multiple-points-of-view",children:"Multiple Points of View"}),"\n",(0,r.jsxs)(t.p,{children:["You can configure multiple discrete points of view as sources so that they can be independently selected during playback. We refer to this as ",(0,r.jsx)(t.strong,{children:"Multi-view"}),". As with multi-bitrate contribution, each source will be given a distinct label for each view."]}),"\n",(0,r.jsxs)(t.p,{children:["See the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multiview",children:"Multi-view"})," guide for an explanation of that workflow for configuring playback."]}),"\n",(0,r.jsx)(t.h3,{id:"broadcast-urls",children:"Broadcast URLs"}),"\n",(0,r.jsx)(t.p,{children:"To configure a multi-source broadcast, you will need to construct a unique URL to configure each of your encoders. Depending on your broadcast protocol and encoder you'll need to understand the parameters to be used."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multi-source-broadcasting#multi-source-rtmp",children:"Multi-source RTMP"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multi-source-broadcasting#multi-source-srt",children:"Multi-source SRT"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/broadcast#publish-parameters",children:"Publish Parameters"})," for descriptions of the supported broadcast parameters for each protocol."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Use Multi-Source Builder",type:"tip",children:[(0,r.jsx)(t.p,{children:"The Streaming Dashboard includes a multi-source builder tab to help with constructing multi-source URLs. With this tool, you can generate the proper URLs to use for your broadcast encoders. The methodology is described below for more complex workflows and automation."}),(0,r.jsxs)(t.p,{children:["Learn more about how to use the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multi-source-builder",children:"Multi-source Builder"}),"."]})]}),"\n",(0,r.jsx)(t.h4,{id:"multi-source-rtmp",children:"Multi-source RTMP"}),"\n",(0,r.jsx)(t.p,{children:"Steps to build a broadcast URL suitable for RTMP encoders:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:'Choose your broadcast cluster region. This should be the geographically closest location from which you will be broadcasting and cannot be "Auto".'}),"\n",(0,r.jsxs)(t.li,{children:["Gather the ",(0,r.jsx)(t.strong,{children:"RTMP publish path"})," and ",(0,r.jsx)(t.strong,{children:"RTMP publish stream name"}),". Depending on your choice of encoder, these may be configured as a single combined URL or as a separate URL and token. For more detailed instructions on locating these, see ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/using-rtmp-and-rtmps#how-to-find-your-rtmp-publish-url",children:"How to find your RTMP publish URL"})]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"RTMP publish path"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Separator"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"RTMP publish stream name"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"rtmps://rtmp-phx-1.millicast.com:443/v2/pub"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"myStreamName?token=abc123"})]})})]}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:["Configure your ",(0,r.jsx)(t.em,{children:"main"})," source. Typically, this will be your highest-quality input in the case of MBR or or the source you want to be presented initially in multi-view. You will add the ",(0,r.jsx)(t.code,{children:"sourceId"})," parameter and the ",(0,r.jsx)(t.code,{children:"simulcastId"})," parameter. For the main source, the simulcastId will not have a value."]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"RTMP publish stream name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Separator"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Source and Simulcast Parameters"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"myStreamName?token=abc123"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"sourceId=1&simulcastId"})]})})]}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["For each additional source, you'll use a unique ",(0,r.jsx)(t.code,{children:"sourceId"})," and ",(0,r.jsx)(t.code,{children:"simulcastId"})," to distinguish between the various encoders."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In the hosted player, the ",(0,r.jsx)(t.code,{children:"simulcastId"})," is used to set the video source's on-screen label."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Encoder"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Source Id"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Simulcast Id (label)"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&sourceId=1"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&simulcastId"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&sourceId=2"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&simulcastId=source2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&sourceId=3"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&simulcastId=source3"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"multi-source-srt",children:"Multi-source SRT"}),"\n",(0,r.jsx)(t.p,{children:"Steps to build a broadcast URL suitable for SRT encoders:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:'Choose your broadcast cluster region. This should be the geographically closest location from which you will be broadcasting and cannot be "Auto".'}),"\n",(0,r.jsxs)(t.li,{children:["Gather the ",(0,r.jsx)(t.strong,{children:"SRT publish path"})," and ",(0,r.jsx)(t.strong,{children:"SRT stream ID"}),". Depending on your choice of encoder, these may be configured as a single combined URL or as a separate URL and token. For more detailed instructions on locating these, see ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/using-srt#3-generate-the-srt-publish-url",children:"Generate the SRT publish URL"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"SRT publish path"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Separator"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"SRT stream ID"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"srt://srt-phx-1.millicast.com:10000"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"/"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"caha?t=abc123"})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["There is also a combined ",(0,r.jsx)(t.strong,{children:"SRT publish URL"}),". The SRT stream ID includes a compressed token and uses the ",(0,r.jsx)(t.code,{children:"t"})," as the parameter."]}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:["Configure your ",(0,r.jsx)(t.em,{children:"main"})," source. Typically, this will be your highest-quality input in the case of MBR or or the source you want to be presented initially in multi-view. You will add the ",(0,r.jsx)(t.code,{children:"sourceId"})," parameter and the ",(0,r.jsx)(t.code,{children:"simulcastId"})," parameter. For the main source, the simulcastId will not have a value."]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"SRT publish stream name"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Separator"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Source and Simulcast Parameters"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"myStreamName?t=abc123"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"sourceId=1&simulcastId"})]})})]}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["For each additional source, you'll use a unique ",(0,r.jsx)(t.code,{children:"sourceId"})," and ",(0,r.jsx)(t.code,{children:"simulcastId"})," to distinguish between the various encoders."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In the hosted player, the ",(0,r.jsx)(t.code,{children:"simulcastId"})," is used to set the video source's on-screen label."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Encoder"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Source Id"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Simulcast Id (label)"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&sourceId=1"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&simulcastId"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&sourceId=2"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&simulcastId=source2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&sourceId=3"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"&simulcastId=source3"})]})]})]}),"\n",(0,r.jsxs)(t.ol,{start:"5",children:["\n",(0,r.jsx)(t.li,{children:"Finally, with SRT you will need to make sure all of the parameters together are URL escaped. This is distinct to SRT workflows. The full combined URL might look similar to:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"srt://srt-phx-1.millicast.com:10000?streamid=myStreamName%253Ft%253D4xd-...vvRrYTeftQPvsCSE%2526sourceId%253D3%2526simulcastId%253DSRT\n"})}),"\n",(0,r.jsxs)(t.admonition,{title:"Multi-bitrate and Recordings",type:"warning",children:[(0,r.jsx)(t.p,{children:"If you are sending multi-bitrate contributions, you can further optimize your parameters by only sending video and disabling any recordings for the additional layers."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"&videoOnly&record=false"})})]}),"\n",(0,r.jsx)(t.h2,{id:"broadcasting",children:"Broadcasting"}),"\n",(0,r.jsx)(t.p,{children:"There are several ways to broadcast multi-source streams into the dashboard:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multi-source-broadcasting#publishing-with-the-sdk",children:"Publishing with the SDK"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multi-source-broadcasting#publishing-with-the-hosted-broadcaster-in-the-dashboard",children:"Publishing with the hosted broadcaster in the dashboard"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"publishing-with-the-sdk",children:"Publishing with the SDK"}),"\n","\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"sourceId"})," is set when connecting to the publisher as shown below:"]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(o.default,{value:"js",label:"Web SDK",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Create publisher\nconst publisher = new Publish(streamName, () => {\n  return publisherToken;\n});\n\n// Start publishing\nawait publisher.connect({\n  mediaStream: mediaStream,\n  sourceId: sourceId, // SourceId handles stream identification\n  disableVideo,\n  dtx: true,\n});\n"})})}),(0,r.jsx)(o.default,{value:"cpp",label:"C++",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'millicast::Publisher::Option options;\n\n// Optionally, set a source ID of the publisher and enable discontinuous transmission\n// to enable multi-source\noptions.multisource.source_id = "YourId";\noptions.dtx = true;\n\n// Enable stereo\noptions.stereo = true;\n\n// Set the selected options to the publisher\npublisher->set_options(options);\n'})})}),(0,r.jsx)(o.default,{value:"java",label:"Android",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"Publisher.Option publisherOption = new Publisher.Option();\n\n// To publish several sources from the same application,\n// create a publisher instance for each source\npublisherOption.dtx = true;\n\n"})})}),(0,r.jsx)(o.default,{value:"swift",label:"iOS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'let publisherOptions = MCClientOptions()\n\n// To use multi-source, set a source ID of the publisher\npublisherOptions.sourceId = "MySource"\n\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:["For the native desktop client, the ",(0,r.jsx)(t.code,{children:"sourceId"})," is set through a parameter for the publish function. For more information on setting the ",(0,r.jsx)(t.code,{children:"sourceId"}),', see "Configure your publishing session" for ',(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/desktop-getting-started-with-publishing#4-configure-your-publishing-session",children:"desktop"}),", ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/android-getting-started-with-publishing#44-configure-publishing-options",children:"Android"}),", and ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/ios-getting-started-with-publishing#24-configure-publishing-options",children:"iOS"}),"."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: The ",(0,r.jsx)(t.code,{children:"sourceId"})," should be a unique value and by default is undefined. Identical ",(0,r.jsx)(t.code,{children:"sourceId"})," values should only be used for specifying ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/redundant-ingest",children:"redundant streams"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In order to improve the performance of the feature and to avoid incurring higher bandwidth costs, it is recommended to enable ",(0,r.jsx)(t.code,{children:"dtx"})," (discontinuous transmission) when publishing, so audio data is only sent when a user\u2019s voice is detected."]}),"\n",(0,r.jsx)(t.h3,{id:"publishing-with-the-hosted-broadcaster-in-the-dashboard",children:"Publishing with the Hosted Broadcaster in the Dashboard"}),"\n",(0,r.jsx)(t.p,{children:"Publishing with the hosted player is a simple way to test the feature quickly. You can open multiple browser tabs to send multiple sources."}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"Live broadcast"})," section and click the ",(0,r.jsx)(t.code,{children:"BROADCAST"})," button."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:c.Z,width:"600"})}),"\n",(0,r.jsxs)(t.p,{children:["The settings menu in the hosted player lets you modify media settings, which includes enabling multi-source. With the multi-source feature, you are available to publish different independent feeds (each one identified with a different source id) under the same stream. This enables multiple audio and video tracks from different sources to be available to viewers. The ",(0,r.jsx)(t.strong,{children:"Source ID"})," can be specified to identify individual streams."]}),"\n",(0,r.jsxs)(t.p,{children:["From the dashboard broadcast application that opens, click the green ",(0,r.jsx)(t.code,{children:"Start"})," button to begin a broadcast. You will need to give permission to access your microphone and camera. Once the stream begins, you can see the ",(0,r.jsx)(t.em,{children:"LIVE"})," box in the upper right corner and a timecode for the duration of the stream above the ",(0,r.jsx)(t.code,{children:"Stop"})," button."]}),"\n",(0,r.jsxs)(t.p,{children:["See the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/how-to-broadcast-in-dashboard",children:"How to Broadcast in Dashboard"})," guide to learn more details about the options available for configuring the publish token and working with this dashboard broadcast application."]}),"\n",(0,r.jsx)(t.h2,{id:"playback",children:"Playback"}),"\n",(0,r.jsx)(t.p,{children:"There are multiple ways to playback and consume a multi-view feed:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Use the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/how-to-broadcast-in-dashboard",children:"Dolby-hosted player"})," (easiest for testing web)"]}),"\n",(0,r.jsxs)(t.li,{children:["Use the Dolby-published iOS and Android ",(0,r.jsx)(t.a,{href:"https://dolby.io/project-gallery/interactive-player-apps/",children:"Interactive Player Apps"})]}),"\n",(0,r.jsxs)(t.li,{children:["Build your own ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/getting-started/creating-real-time-streaming-web-app",children:"multi-view app for Web"})]}),"\n",(0,r.jsxs)(t.li,{children:["Build your own ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/client-sdks",children:"multi-view app with the SDK"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.h3,{id:"broadcasting-best-practices",children:"Broadcasting best practices"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["There is a 12Mbps total connection limit on the playback side. If you are using high-bitrate source feeds, we recommend sending at least a high-quality and a low-quality version of each source so that in a multi-view playback, the large image can be high-bitrate and the small thumbnail tiles can be set to the low-bitrate. For more information, see ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multiview#limitations-of-multi-view",children:"Limitations of Multi-view"}),". This is primarily for broadcasting with RTMP or SRT. If you are using WebRTC to publish and your publishing client supports Simulcast (such as our hosted broadcaster), this is handled automatically."]}),"\n",(0,r.jsxs)(t.li,{children:["If broadcasting with Multi-Bitrate RTMP or SRT and recording is enabled, each quality rendition that you send into the service will be recorded unless you append the ",(0,r.jsx)(t.code,{children:"&record=false"})," flag to your publishing endpoint."]}),"\n",(0,r.jsxs)(t.li,{children:["If broadcasting with Multi-Bitrate RTMP or SRT, do not send duplicate audio to each layer. If you are unable to send video-only, you can add the ",(0,r.jsx)(t.code,{children:"&videoOnly"})," parameter to have the service ignore the audio."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"playback-best-practices",children:"Playback best practices"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["There is a 12Mbps total connection limit on the playback side. If you are using high-bitrate source feeds, we recommend sending at least a high-quality and a low-quality version of each source so that in a multi-view playback, the large image can be high-bitrate and the small thumbnail tiles can be set to the low-bitrate. For more information, see ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/multiview#limitations-of-multi-view",children:"Limitations of Multi-view"}),". This is primarily for broadcasting with RTMP or SRT. If you are using WebRTC to publish and your publishing client supports Simulcast (such as our hosted broadcaster), this is handled automatically."]}),"\n",(0,r.jsx)(t.li,{children:'In your player client, if you are playing multiple videos at the same time, set smaller tiles to consume the lowest stream quality/bitrate so that the "main" video can utilize bitrate switching.'}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"priority"})," parameter lets you set the priority of each feed. For redundant streams the primary feed should be assigned a consistent value for all input feeds, regardless of sourceId or simulcastId, and backups should mirror the primary's sourceID and simulcastId with a lower priority. In the case of any problem with the primary feed, viewers receive the available feed that has the highest priority. Not setting any priorities or setting the same priorities results in receiving the most recently published feed. For more information, see ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/redundant-ingest",children:"Redundant Ingest"}),"."]}),"\n"]})]})}function b(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},35431:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/dolbyio-streaming-broadcast-button-b5a488018b4037660855e8ee1d679e31.png"},97645:function(e,t,i){i.r(t),i.d(t,{default:()=>n});var s=i("85893");i("67294");var r=i("67026");function n(e){let{children:t,hidden:i,className:n}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",n),hidden:i,children:t})}},71509:function(e,t,i){i.d(t,{Z:()=>h});var s=i("85893"),r=i("67294"),n=i("67026"),l=i("34718"),a=i("52371"),o=i("6735");function c(e){let{className:t,block:i,selectedValue:r,selectValue:a,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{let t=e.currentTarget,i=o[c.indexOf(t)].value;i!==r&&(d(t),a(i))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let i=c.indexOf(e.currentTarget)+1;t=c[i]??c[0];break}case"ArrowLeft":{let i=c.indexOf(e.currentTarget)-1;t=c[i]??c[c.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":i},t),children:o.map(e=>{let{value:t,label:i,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:u,...l,className:(0,n.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":r===t}),children:i??t},t)})})}function d(e){let{lazy:t,children:i,selectedValue:l}=e,a=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function u(e){let t=(0,a.Y)(e);return(0,s.jsxs)("div",{className:(0,n.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(c,{...t,...e}),(0,s.jsx)(d,{...t,...e})]})}function h(e){let t=(0,o.default)();return(0,s.jsx)(u,{...e,children:(0,a.h)(e.children)},String(t))}},52371:function(e,t,i){i.d(t,{Y:function(){return u},h:function(){return c}});var s=i(67294),r=i(16550),n=i(8714),l=i(89207),a=i(69413),o=i(54510);function c(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function d(e){let{value:t,tabValues:i}=e;return i.some(e=>e.value===t)}function u(e){let{defaultValue:t,queryString:i=!1,groupId:u}=e,h=function(e){let{values:t,children:i}=e;return(0,s.useMemo)(()=>{let e=t??c(i).map(e=>{let{props:{value:t,label:i,attributes:s,default:r}}=e;return{value:t,label:i,attributes:s,default:r}});return!function(e){let t=(0,a.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,i])}(e),[p,m]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:i}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=i.find(e=>e.default)??i[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:h})),[b,x]=function(e){let{queryString:t=!1,groupId:i}=e,n=(0,r.k6)(),a=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l._X)(a),(0,s.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})},[a,n])]}({queryString:i,groupId:u}),[g,f]=function(e){let{groupId:t}=e,i=t?`docusaurus.tab.${t}`:null,[r,n]=(0,o.Nk)(i);return[r,(0,s.useCallback)(e=>{i&&n.set(e)},[i,n])]}({groupId:u}),j=(()=>{let e=b??g;return d({value:e,tabValues:h})?e:null})();return(0,n.Z)(()=>{j&&m(j)},[j]),{selectedValue:p,selectValue:(0,s.useCallback)(e=>{if(!d({value:e,tabValues:h}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),f(e)},[x,f,h]),tabValues:h}}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return l}});var s=i(67294);let r={},n=s.createContext(r);function l(e){let t=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);