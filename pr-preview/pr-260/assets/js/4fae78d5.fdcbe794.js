"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["2770"],{73450:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"streaming-dashboard/live-monitoring","title":"Live Monitoring","description":"The Live monitoring section of the Streaming Dashboard is the place to view all of your active streams. This page displays all active ingest streams and streams that have been offline for the last hour. At a glance, you can check the number of connected viewers, stream duration, and status of your streams. Live monitoring allows you to access information about your streams to quickly diagnose and triage any issues.","source":"@site/millicast/streaming-dashboard/live-monitoring.md","sourceDirName":"streaming-dashboard","slug":"/live-monitoring","permalink":"/documentation/pr-preview/pr-260/millicast/live-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/streaming-dashboard/live-monitoring.md","tags":[],"version":"current","frontMatter":{"title":"Live Monitoring","slug":"/live-monitoring"},"sidebar":"millicast","previous":{"title":"Live Broadcast","permalink":"/documentation/pr-preview/pr-260/millicast/how-to-broadcast-in-dashboard"},"next":{"title":"Publish Tokens","permalink":"/documentation/pr-preview/pr-260/millicast/managing-your-tokens"}}'),n=i("85893"),r=i("50065");let a={title:"Live Monitoring",slug:"/live-monitoring"},o=void 0,d={},l=[{value:"Detailed View",id:"detailed-view",level:2},{value:"Ingest Statistics",id:"ingest-statistics",level:3},{value:"Redundant Ingest Statistics",id:"redundant-ingest-statistics",level:3},{value:"Ingest Telemetry",id:"ingest-telemetry",level:3},{value:"Events",id:"events",level:3},{value:"Offline Streams",id:"offline-streams",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Live monitoring"})," section of the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/about-dash",children:"Streaming Dashboard"})," is the place to view all of your active streams. This page displays all active ingest streams and streams that have been offline for the last hour. At a glance, you can check the number of connected viewers, stream duration, and status of your streams. Live monitoring allows you to access information about your streams to quickly diagnose and triage any issues."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The live monitoring page currently only displays ingress statistics, and does not provide information on egress or client-side statistics."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(69909).Z+"",width:"2048",height:"1052"})}),"\n",(0,n.jsx)(t.p,{children:"By default, the Live monitoring page displays all of your streams in a grid view with the following details for each stream."}),"\n",(0,n.jsxs)(t.p,{children:["1 ",(0,n.jsx)(t.strong,{children:"Duration"}),": The amount of time the stream has been live, displayed in days, hours, minutes, and seconds (DD:HH:MM",":SS",")."]}),"\n",(0,n.jsxs)(t.p,{children:["2 ",(0,n.jsx)(t.strong,{children:"Connected viewers"}),": The number of client side viewers that are connected to the stream."]}),"\n",(0,n.jsxs)(t.p,{children:["3 ",(0,n.jsx)(t.strong,{children:"Live status"}),": Indicates if the stream is currently live or offline."]}),"\n",(0,n.jsxs)(t.p,{children:["4 ",(0,n.jsx)(t.strong,{children:"Stream name"}),": The name of the ingest stream."]}),"\n",(0,n.jsxs)(t.p,{children:["5 ",(0,n.jsx)(t.strong,{children:"Publishing started"}),": The date and time the stream was created."]}),"\n",(0,n.jsxs)(t.p,{children:["6 ",(0,n.jsx)(t.strong,{children:"Cluster regions"}),": Indicates what ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/multi-region-support",children:"regions"})," the stream is ingesting to. This indicates which data center is used as the origin when broadcasting. Note: The ingest cluster region displays the most common ingest cluster region used for all feeds in the stream, and hovering over displays additional cluster regions associated with the stream."]}),"\n",(0,n.jsxs)(t.p,{children:["7 ",(0,n.jsx)(t.strong,{children:"Token"}),": The ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/managing-your-tokens",children:"publish token"})," associated with the stream."]}),"\n",(0,n.jsxs)(t.p,{children:["8 ",(0,n.jsx)(t.strong,{children:"Recording enabled status"}),": Indicates whether recording is enabled on the stream token settings. Note: This does not indicate if the recording is currently active."]}),"\n",(0,n.jsxs)(t.p,{children:["9 ",(0,n.jsx)(t.strong,{children:"Redundant status"}),": Indicates whether the stream has a redundant option associated with it for failover. For example, if the stream has multiple quality layer feeds, and the highest quality layer has ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/redundant-ingest",children:"redundant ingest"})," enabled, the stream will be tagged as redundant."]}),"\n",(0,n.jsxs)(t.p,{children:["10 ",(0,n.jsx)(t.strong,{children:"Secure viewer status"}),": Indicates whether the stream requires secure subscriber tokens to view. The secure viewer setting is enabled on the stream token settings. If the secure viewer setting is enabled, the hosted player will not play the stream."]}),"\n",(0,n.jsx)(t.p,{children:"You can also toggle to display all of your streams in list view."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(27090).Z+"",width:"866",height:"442"})}),"\n",(0,n.jsx)(t.h2,{id:"detailed-view",children:"Detailed View"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(51776).Z+"",width:"1101",height:"614"})}),"\n",(0,n.jsx)(t.h3,{id:"ingest-statistics",children:"Ingest Statistics"}),"\n",(0,n.jsx)(t.p,{children:"The details page for each stream provides the following ingest statistics:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ID"}),": Unique numerical identifier to identify feeds in Live Monitoring dashboard."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Source name"}),": The name of the source. If a source has been set as the main source by not specifying a ",(0,n.jsx)(t.code,{children:"sourceId"}),"(for WebRTC streams) or ",(0,n.jsx)(t.code,{children:"simulcastID"})," (for RTMP or SRT streams), the Main Source tag is displayed, this is the same tag used when ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/multi-source-builder",children:"configuring multiple publishing sources"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Resolution"}),": The video resolution."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Priority"}),": Indicates the ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/redundant-ingest#4-set-priorities",children:"priority"})," set for the feed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Type"}),": The broadcast protocol - RTMP, SRT, or WebRTC."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Video bitrate"}),": The ingest video bitrate measured in kbps."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Audio bitrate"}),": The ingest audio bitrate measured in kbps."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FPS"}),": Frames per second."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"RTT"}),": The round trip time measured in ms. A lower RTT value is preferred."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Packet loss"}),": The ratio of number of packets lost to the number of packets received over an average of five seconds. This value is measured as a percentage. Note: For streams using the type RTMP, packet loss will always be 0."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"B Frames"}),": Indicates the presence of b-frames in the feed. For best results, we recommend disabling b-frames in your feed. For more information, see ",(0,n.jsx)(t.a,{href:"/millicast/using-webrtc-simulcast#configuring-simulcast",children:"Configuring Simulcast"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Video codec"}),": The video codec detected."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Audio codec"}),": The audio codec detected."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Publishing started"}),": The day, month, year, and time the feed was created."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Cluster region"}),": Indicates what ",(0,n.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/multi-region-support",children:"regions"})," the stream is ingesting to."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Publish geo-location"}),": The location from which the feed is being published."]}),"\n",(0,n.jsx)(t.li,{children:"** IP address:** The IP address from which the feed is publishing from."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," Viewing the detailed view page for a stream uses up the bandwidth of one viewer."]}),"\n",(0,n.jsx)(t.h3,{id:"redundant-ingest-statistics",children:"Redundant Ingest Statistics"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(42355).Z+"",width:"1346",height:"333"})}),"\n",(0,n.jsx)(t.p,{children:"The details page for each stream also displays redundant ingest statistics if redundant ingests are detected."}),"\n",(0,n.jsx)(t.h3,{id:"ingest-telemetry",children:"Ingest Telemetry"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(67213).Z+"",width:"1680",height:"1286"})}),"\n",(0,n.jsxs)(t.p,{children:["The details page for each stream displays telemetry data for the ",(0,n.jsx)(t.strong,{children:"Video bitrate"}),", ",(0,n.jsx)(t.strong,{children:"Audio bitrate"}),", ",(0,n.jsx)(t.strong,{children:"FPS"}),", ",(0,n.jsx)(t.strong,{children:"RTT"}),", and ",(0,n.jsx)(t.strong,{children:"Packet loss"})," in the form of time series data graphs. The graphs provide all resolutions associated with the source selected from the drop-down menu. You can also select the time range to display from the drop-down menu. Hovering over a point on the data graphs displays the source name, resolution, timestamp, and time series data value."]}),"\n",(0,n.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(66085).Z+"",width:"968",height:"724"})}),"\n",(0,n.jsx)(t.p,{children:"The events section for each stream displays important events that have occurred in chronological order. The name of the source under the source name column and feed ID displayed in the message column help you determine which feed is the event references."}),"\n",(0,n.jsx)(t.p,{children:"You can view when a stream starts and ends, and when feeds connect and disconnect, when a primary feed has switched over to its redundant feed, and re-stream related events if using that feature."}),"\n",(0,n.jsx)(t.h2,{id:"offline-streams",children:"Offline Streams"}),"\n",(0,n.jsx)(t.p,{children:"The live monitoring page displays the following information for streams that have been offline within the last hour. However, only the resolution, type, video codec, audio codec, publishing started, and publish geo-location statistics are available for offline streams. The additional statistics displayed in the details page are not available once the stream goes offline."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," Once the stream is offline for more than one hour, the stream information is no longer available in the live monitoring page."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},66085:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/live-monitoring-detail-events-12f6593b7c0bf3751d35350521fac357.png"},42355:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/live-monitoring-detail-redudnant-ingest-af31f74e24a6606ae5e46260c3a3cbc5.png"},67213:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/live-monitoring-detail-telemetry-a0e4ddd048be46f7573061e9e603fe5d.png"},51776:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/live_monitor_assets_MVP_detailed_view_-_not_live-8068fef86412cec5fff33b43857ff183.jpg"},27090:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/live_monitor_assets_MVP_list_view-f1bce777c41a641405cefb8cafb61a79.jpg"},69909:function(e,t,i){i.d(t,{Z:function(){return s}});let s=i.p+"assets/images/live_monitor_assets_v2_Grid_view-644071a5202604fa1a35caa2b01b13f2.png"},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return a}});var s=i(67294);let n={},r=s.createContext(n);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);