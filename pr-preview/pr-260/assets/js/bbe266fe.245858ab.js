"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["74575"],{73615:function(e,t,n){n.r(t),n.d(t,{default:()=>x,frontMatter:()=>d,metadata:()=>s,assets:()=>h,toc:()=>u,contentTitle:()=>c});var s=JSON.parse('{"id":"distribution/cloud-transcoder","title":"Cloud Transcoder","description":"The Cloud Transcoders offered by the Dolby Millicast are responsible for ingesting (SRT or RTMP) and encoding contribution feeds into adaptive-bitrate (ABR) streaming renditions for WebRTC delivery. By adjusting the compression level, resolution, and quality of a video stream to match bandwidth availability it is possible to create an improved viewing experience. The adaptability ensures smoother playback but also conserves bandwidth, making the cloud transcoder an efficient and cost-effective solution optimized for ultra-low latency during the encoding process.","source":"@site/millicast/distribution/cloud-transcoder.mdx","sourceDirName":"distribution","slug":"/cloud-transcoder","permalink":"/documentation/pr-preview/pr-260/millicast/cloud-transcoder","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/distribution/cloud-transcoder.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Cloud Transcoder","slug":"/cloud-transcoder","sidebar_position":2},"sidebar":"millicast","previous":{"title":"Geo-blocking","permalink":"/documentation/pr-preview/pr-260/millicast/geo-blocking"},"next":{"title":"Multi-Region Support","permalink":"/documentation/pr-preview/pr-260/millicast/multi-region-support"}}'),r=n("85893"),i=n("50065");let a=n.p+"assets/images/6bcaeddadb12b382aeab0b113abd8c690633543a04a9d68c2ff7d80a-feature-cloud-transcoder-9299d426a6840ff715e16be710804274.png";function l(e){let t={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,r.jsx)(t.admonition,{title:"Limited Beta Feature",type:"warning",children:(0,r.jsxs)(t.p,{children:["This API is a limited beta preview. If you would like to use this capability on your projects, please ",(0,r.jsx)(t.a,{href:"https://support.dolby.io/hc/en-au",children:"submit a support ticket"})," or reach out to your ",(0,r.jsx)(t.a,{href:"https://dolby.io/contact/",children:"sales/solutions"})," contact."]})})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}let d={title:"Cloud Transcoder",slug:"/cloud-transcoder",sidebar_position:2},c=void 0,h={},u=[{value:"Transcoder statuses",id:"transcoder-statuses",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Starting and managing the cloud transcoder",id:"starting-and-managing-the-cloud-transcoder",level:2},{value:"Cloud Transcoding Ladder",id:"cloud-transcoding-ladder",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"DNS Propagation Delay - Host",id:"dns-propagation-delay---host",level:3},{value:"Feature Compatibility",id:"feature-compatibility",level:3}];function p(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Cloud Transcoders"})," offered by the Dolby Millicast are responsible for ingesting (SRT or RTMP) and encoding contribution feeds into ",(0,r.jsx)(t.strong,{children:"adaptive-bitrate (ABR)"})," streaming renditions for WebRTC delivery. By adjusting the compression level, resolution, and quality of a video stream to match bandwidth availability it is possible to create an improved viewing experience. The adaptability ensures smoother playback but also conserves bandwidth, making the cloud transcoder an efficient and cost-effective solution optimized for ultra-low latency during the encoding process."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:a,width:"500"})}),"\n",(0,r.jsx)(t.p,{children:"The transcoder allows ingesting B-frames and reducing the amount of data required for transmission. We support H.264 and H.265 codecs with seamless conversion to H.264."}),"\n","\n",(0,r.jsx)(o,{}),"\n",(0,r.jsx)(t.h2,{id:"transcoder-statuses",children:"Transcoder statuses"}),"\n",(0,r.jsx)(t.p,{children:"Each transcoder has a state that depends on the performed asynchronous operations, such as creating, starting, stopping, or deleting."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Transition"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Status"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Webhook"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"Start"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Queued"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["A transcoder is queued when it is waiting for available resources to be available. This state typically happens after you ",(0,r.jsx)(t.strong,{children:"Start"})," a transcoder or ",(0,r.jsx)(t.strong,{children:"Create"})," a transcoder with ",(0,r.jsx)(t.code,{children:"startNow=true"}),". If you ",(0,r.jsx)(t.strong,{children:"Create"})," a transcoder but do not start it right away it will begin in a ",(0,r.jsx)(t.em,{children:"Shutdown"})," status."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Provisioning"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["A transcoder is ",(0,r.jsx)(t.em,{children:"Provisioning"})," when the transcoder is starting up network configuration so that it can be used. During peak times of usage provisioning can take up to a minute."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Active"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["An ",(0,r.jsx)(t.em,{children:"Active"})," transcoder is ready to use for any streams and begins accruing minutes."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2713"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Error"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["If there is a problem when starting or stopping a transcoder it may be set to an ",(0,r.jsx)(t.em,{children:"Error"})," status."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"Stop"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ShuttingDown"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["When you are done using a transcoder, stopping it will first issue a ",(0,r.jsx)(t.em,{children:"ShuttingDown"})," transition while the service is cleaned up and connections terminated. You should ",(0,r.jsx)(t.strong,{children:"Stop"})," a transcoder when not in use to avoid unnecessary charges."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Shutdown"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["A transcoder in a ",(0,r.jsx)(t.em,{children:"Shutdown"})," state is not able to be used but is configured and ready to be started again when required."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2713"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"Delete"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Deleting"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["A transcoder that is marked for deletion will be set to ",(0,r.jsx)(t.em,{children:"Deleting"}),"."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Deleted"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["A transcoder that has been ",(0,r.jsx)(t.em,{children:"Deleted"})," will still have a historical record, but is no longer usable or able to be re-started. You'll need to configure and start a new transcoder."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2713"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["There are ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/transcoder-webhooks",children:"webhooks"})," available to monitor the status change of transcoder instances."]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(t.p,{children:"You can create a transcoder for each video stream and set specific video quality requirements using the following parameters:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Height"}),": The height of output video frames that defines video resolution, in pixels."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Frame rate"}),": The frame rate of a video stream, which has to match your input frame rate, in frames per second."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Passthrough"}),": A boolean indicating whether the top layer of a video stream should be passed through (true) or transcoded (false). To maintain compatibility with WebRTC standards, set this parameter to true only when each Group of Pictures (GOP) in the top layer has a duration of 2 seconds."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Cluster"}),": A region to which a transcoder should be deployed."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The Streaming platform automatically selects default video quality ladders based on the provided height and frame rate of the top layer of your output. Alternatively, if the default ladders do not suit you, you can set your preferences using the ",(0,r.jsx)(t.strong,{children:"profile"})," parameter that allows selecting a specific profile. If you decide to set specific profiles, do not set ",(0,r.jsx)(t.strong,{children:"height"}),", ",(0,r.jsx)(t.strong,{children:"frame rate"}),", or ",(0,r.jsx)(t.strong,{children:"passthrough"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"When using a transcoder with passthrough enabled, the maximum video resolution is 4k. When passthrough is disabled, the Streaming platform supports a maximum of 1080p resolution and 60 frames per second."}),"\n",(0,r.jsx)(t.h2,{id:"starting-and-managing-the-cloud-transcoder",children:"Starting and managing the cloud transcoder"}),"\n",(0,r.jsx)(t.p,{children:"The platform offers the Transcoder APIs for managing cloud transcoders. To create a dedicated transcoder, follow these steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Call the ",(0,r.jsx)(t.a,{href:"/millicast/api/webhooks-add-webhook",children:"Add Webhook"})," API with the ",(0,r.jsx)(t.strong,{children:"isTranscoderHooks"})," parameter set to true. This way, you will be notified about status changes of your transcoder."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Call the ",(0,r.jsx)(t.a,{href:"/millicast/api/transcoder-create-transcoder",children:"Create Transcoder"})," API providing values of all the required parameters. If you want to start your transcoder immediately after its creation, set the ",(0,r.jsx)(t.strong,{children:"startNow"})," parameter to true. Otherwise, call the ",(0,r.jsx)(t.a,{href:"/millicast/api/transcoder-start-transcoder",children:"Start Transcoder"})," API to start the created transcoder."]}),"\n",(0,r.jsx)(t.p,{children:"An example of the create request:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "startNow": true,\n  "passThrough": false,\n  "name": "my example cloud transcoder",\n  "dnsPrefix": "example",\n  "cluster": "iad-1",\n  "height": 1080,\n  "frameRate": 60,\n  "profile": null\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["A successful response contains the ",(0,r.jsx)(t.strong,{children:"Provisioning"})," status that changes to ",(0,r.jsx)(t.strong,{children:"Active"})," after about a minute:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="Provisioning"',children:'{\n  "status": "success",\n  "data": {\n    "transcoderId": "1c649c88-d1cb-4891-bca7-8e07d2604a39",\n    "accountId": 105881,\n    "name": "my example cloud transcoder",\n    "cluster": "iad-1",\n    "dnsName": "example-accountId.transcoder.millicast.com",\n    "profile": "1080p 60fps h264 no passthrough",\n    "passThrough": false,\n    "createdOn": "2024-02-19T12:31:35Z",\n    "instance": {\n      "instanceId": "08d4a61b-3ad5-475f-ace1-dc16bc848dd9",\n      "dnsName": "example-accountId.transcoder.millicast.com",\n      "createdOn": "2024-02-19T12:31:50Z",\n      "status": "Provisioning"\n    },\n    "status": "Provisioning",\n    "publishUrls": {\n      "rtmp": "rtmp://example-accountId.transcoder.millicast.com:1935/v2/pub",\n      "rtmps": "rtmps://example-accountId.transcoder.millicast.com:443/v2/pub",\n      "srt": "srt://example-accountId.transcoder.millicast.com:10000"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="Active"',children:'{\n  "status": "success",\n  "data": {\n    "transcoderId": "1c649c88-d1cb-4891-bca7-8e07d2604a39",\n    "accountId": 105881,\n    "name": "my example cloud transcoder",\n    "cluster": "iad-1",\n    "dnsName": "example-accountId.transcoder.millicast.com",\n    "profile": "1080p 60fps h264 no passthrough",\n    "passThrough": false,\n    "createdOn": "2024-02-19T12:31:35Z",\n    "instance": {\n      "instanceId": "08d4a61b-3ad5-475f-ace1-dc16bc848dd9",\n      "dnsName": "example-accountId.transcoder.millicast.com",\n      "createdOn": "2024-02-19T12:31:50Z",\n      "status": "Provisioning"\n    },\n    "status": "Active",\n    "publishUrls": {\n      "rtmp": "rtmp://example-accountId.transcoder.millicast.com:1935/v2/pub",\n      "rtmps": "rtmps://example-accountId.transcoder.millicast.com:443/v2/pub",\n      "srt": "srt://example-accountId.transcoder.millicast.com:10000"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Notice that the response body contains publish URLs required for publishing your stream."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Construct a complete publish URL endpoint by adding your stream ID and publish token at the end of the received publish URLs. In the case of RTMP and RTMPS, you can pass your token as a string. SRT requires encoding the token and providing it as Base64-encoded data. For more information, see the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/using-srt",children:"SRT"})," document."]}),"\n",(0,r.jsx)(t.p,{children:"Examples:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"rtmp://example-accountId.transcoder.millicast.com:1935/v2/pub**/streamName?token=publishToken**"}),"\n",(0,r.jsx)(t.li,{children:"rtmps://example-accountId.transcoder.millicast.com:443/v2/pub**/streamName?token=publishToken**"}),"\n",(0,r.jsx)(t.li,{children:"srt://example-accountId.transcoder.millicast.com:10000**?streamid=streamName?token=encodedPublishToken**"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Once the stream begins publishing to the cloud transcoder the full ladder will be available for playback. To quickly verify the transcoder is working we recommend trying out ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/hosted-viewer",children:"the hosted web player"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(25503).Z+"",width:"1205",height:"817"})}),"\n",(0,r.jsxs)(t.p,{children:["The platform also offers the ",(0,r.jsx)(t.a,{href:"/millicast/api/transcoder-update-transcoder",children:"Configure Transcoder"})," API for updating transcoder settings and the ",(0,r.jsx)(t.a,{href:"/millicast/api/transcoder-stop-transcoder",children:"Stop Transcoder"})," and ",(0,r.jsx)(t.a,{href:"/millicast/api/transcoder-delete-transcoder",children:"Delete Transcoder"})," API for stopping and deleting a specific transcoder. A list of all available Transcoder APIs is available in the ",(0,r.jsx)(t.a,{href:"/millicast/api/transcoder-list-transcoders",children:"REST API"})," documentation."]}),"\n",(0,r.jsx)(t.h4,{id:"cloud-transcoding-ladder",children:"Cloud Transcoding Ladder"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\uD83D\uDC4D Quality and Latency"}),"\n",(0,r.jsx)(t.p,{children:"The Dolby Millicast Cloud Transcoder is specially tuned for delivering the highest quality at the lowest latency for the h264 codec."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Height"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Bitrate (varies between framerates)"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"4k"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"passthrough only"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"1080"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"passthrough or 4500Kbps"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"720"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"passthrough or 2700Kbps"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"480"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"passthrough or 1600Kbps"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"360"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"passthrough or 750Kbps"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"240"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"400Kbps"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.h3,{id:"dns-propagation-delay---host",children:"DNS Propagation Delay - Host"}),"\n",(0,r.jsx)(t.p,{children:"When a transcoder is stopped and started again, DNS records can be cached by certain encoders. It may take time for the cache to be invalidated and the appropriate routing of a stream through a transcoder to go live."}),"\n",(0,r.jsxs)(t.p,{children:["Try to ",(0,r.jsx)(t.code,{children:"ping"})," both the hostname and IP address."]}),"\n",(0,r.jsx)(t.p,{children:"Some encoders have TTL settings that can exceed 60 minutes so a work-around is to use the IP address of the transcoder host in place of the DNS name."}),"\n",(0,r.jsx)(t.h3,{id:"feature-compatibility",children:"Feature Compatibility"}),"\n",(0,r.jsxs)(t.p,{children:["The Dolby.io Streaming platform allows using cloud transcoders with all other features, even with ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/multiview",children:"Multi-view"})," and ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/redundant-ingest",children:"Redundant Ingest"}),". However, publishing redundant feeds requires streaming feeds into two transcoders."]}),"\n",(0,r.jsx)(t.p,{children:"When using transcoding with recording, the platform records only the top layer."}),"\n",(0,r.jsxs)(t.p,{children:["When using transcoding with ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/re-streaming",children:"Re-streaming"}),", the top layer regardless of passthrough enabled or disabled, will be re-streamed out to the specified re-stream endpoints."]})]})}function x(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},25503:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/Screenshot_2024-06-05_at_4.01.58_PM-d0af9a93fa1c5d495439a3fe46729b70.png"},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var s=n(67294);let r={},i=s.createContext(r);function a(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);