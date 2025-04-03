"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["6545"],{60975:function(e,t,i){i.r(t),i.d(t,{default:()=>v,frontMatter:()=>y,metadata:()=>a,assets:()=>f,toc:()=>h,contentTitle:()=>b});var a=JSON.parse('{"id":"api/monitoring-list-recent-streams","title":"List Streams","description":"List all streams created within last hour with specific sorting and pagination. If the transcoderId is provided, all streams associated with the current or last active instance will be returned, regardless of the stream creation time. If response array is empty, you have reached the end of the list ordering.","source":"@site/millicast/api/monitoring-list-recent-streams.api.mdx","sourceDirName":"api","slug":"/api/monitoring-list-recent-streams","permalink":"/documentation/pr-preview/pr-254/millicast/api/monitoring-list-recent-streams","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"monitoring-list-recent-streams","title":"List Streams","description":"List all streams created within last hour with specific sorting and pagination. If the transcoderId is provided, all streams associated with the current or last active instance will be returned, regardless of the stream creation time. If response array is empty, you have reached the end of the list ordering.","sidebar_label":"List Streams","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"get api-method","info_path":"millicast/api/millicast-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"millicastApi","previous":{"title":"Update Token","permalink":"/documentation/pr-preview/pr-254/millicast/api/subscribe-token-v-2-update-token"},"next":{"title":"Stream Details","permalink":"/documentation/pr-preview/pr-254/millicast/api/monitoring-get-stream"}}'),r=i("85893"),s=i("50065"),n=i("72969"),o=i.n(n),l=i("11682"),p=i.n(l),m=i("99757"),d=i.n(m),c=i("6476"),u=i.n(c);i("9650"),i("97645");var g=i("46055");let y={id:"monitoring-list-recent-streams",title:"List Streams",description:"List all streams created within last hour with specific sorting and pagination. If the transcoderId is provided, all streams associated with the current or last active instance will be returned, regardless of the stream creation time. If response array is empty, you have reached the end of the list ordering.",sidebar_label:"List Streams",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"millicast/api/millicast-api",custom_edit_url:null,hide_send_button:!0},b=void 0,f={},h=[];function x(e){let t={p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"List Streams"}),"\n",(0,r.jsx)(o(),{method:"get",path:"/api/monitoring/streams",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"List all streams created within last hour with specific sorting and pagination. If the transcoderId is provided, all streams associated with the current or last active instance will be returned, regardless of the stream creation time. If response array is empty, you have reached the end of the list ordering."}),"\n",(0,r.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(p(),{parameters:[{name:"page",in:"query",schema:{type:"integer",format:"int32",default:1,maximum:0x7fffffff,minimum:1},"x-position":1},{name:"itemsOnPage",in:"query",schema:{type:"integer",format:"int32",default:10,maximum:100,minimum:1},"x-position":2},{name:"sortBy",in:"query",schema:{default:"Live",oneOf:[{type:"string",description:"","x-enumNames":["StreamId","Cluster","StartTime","Duration","Live","ViewerCount","Restream"],enum:["StreamId","Cluster","StartTime","Duration","Live","ViewerCount","Restream"],title:"ListSortBy"}]},"x-position":3},{name:"isDescending",in:"query",schema:{type:"boolean",default:!0},"x-position":4},{name:"isActive",in:"query",schema:{type:"boolean",nullable:!0},"x-position":5},{name:"cluster","x-originalName":"clusters",in:"query",style:"form",explode:!0,schema:{type:"array",nullable:!0,items:{type:"string"}},"x-position":6},{name:"isSecure",in:"query",schema:{type:"boolean",nullable:!0},"x-position":7},{name:"isMultisource",in:"query",schema:{type:"boolean",nullable:!0},"x-position":8},{name:"hasRedundant",in:"query",schema:{type:"boolean",nullable:!0},"x-position":9},{name:"searchSubstring",in:"query",schema:{type:"string",nullable:!0},"x-position":10},{name:"isRecordingAllowed",in:"query",schema:{type:"boolean",nullable:!0},"x-position":11},{name:"isRestreaming",in:"query",schema:{type:"boolean",nullable:!0},"x-position":12},{name:"transcoderId",in:"query",schema:{type:"string",nullable:!0},"x-position":13}]}),"\n",(0,r.jsx)(d(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"success",minLength:1},data:{type:"object",additionalProperties:!1,properties:{pagination:{nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{totalItems:{type:"integer",format:"int32"},totalPages:{type:"integer",format:"int32"},itemsOnPage:{type:"integer",format:"int32"}},title:"PaginationData"}]},data:{type:"array",nullable:!0,items:{type:"object",additionalProperties:!1,properties:{streamId:{type:"string"},streamName:{type:"string"},clusterId:{type:"string"},clusters:{type:"array",items:{type:"string"}},secureStream:{type:"boolean"},isRecordingAllowed:{type:"boolean"},multisource:{type:"boolean"},live:{type:"boolean"},startTime:{type:"string",format:"date-time"},endTime:{type:"string",format:"date-time",nullable:!0},viewerCount:{type:"integer",format:"int64"},hasRedundant:{type:"boolean"},restreaming:{type:"boolean"},feeds:{type:"array",items:{type:"object",additionalProperties:!1,properties:{streamId:{type:"string"},feedId:{type:"string"},clusterId:{type:"string"},sourceId:{type:"string"},simulcastId:{type:"string"},serverId:{type:"string"},active:{type:"boolean"},startTime:{type:"string",format:"date-time"},endTime:{type:"string",format:"date-time",nullable:!0},isRecordingAllowed:{type:"boolean"},packetLoss:{type:"number",format:"double"},isRedundant:{type:"boolean",nullable:!0},priority:{type:"integer",format:"int32",nullable:!0},type:{type:"string"},tokenId:{type:"integer",format:"int32"},client:{type:"object",additionalProperties:!1,properties:{country:{type:"string"},city:{type:"string"},continent:{type:"string"},coordinates:{type:"array",items:{type:"number",format:"decimal"}},sub:{type:"array",items:{type:"string"}},ip:{type:"string"}},title:"GeoClient"},restreams:{type:"array",items:{type:"object",additionalProperties:!1,properties:{label:{type:"string"},index:{type:"integer",format:"int32"},url:{type:"string"},active:{type:"boolean"},events:{type:"array",items:{type:"object",additionalProperties:!1,properties:{started:{type:"string",format:"date-time"},ended:{type:"string",format:"date-time",nullable:!0},error:{type:"string"}},title:"RestreamEvent"}}},title:"RestreamDetails"}},trackDetails:{type:"array",items:{type:"object",additionalProperties:!1,properties:{trackId:{type:"string"},encodingDetails:{type:"array",items:{type:"object",additionalProperties:!1,properties:{encodingId:{type:"string"},encodingStats:{type:"array",items:{type:"object",additionalProperties:!1,properties:{timestamp:{type:"string",format:"date-time"},resolution:{nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{height:{type:"number",format:"double"},width:{type:"number",format:"double"}},title:"Resolution"}]},bitRate:{type:"object",additionalProperties:!1,properties:{audioBitrate:{type:"number",format:"double"},videoBitrate:{type:"number",format:"double"}},title:"Bitrate"},videoCodec:{type:"string"},audioCodec:{type:"string"},frames:{type:"integer",format:"int32"},rtt:{type:"number",format:"double",nullable:!0},bufferTime:{type:"number",format:"double",nullable:!0},bFrames:{type:"number",format:"double",nullable:!0}},title:"EncodingStats"}}},title:"EncodingDetails"}}},title:"TrackDetails"}}},title:"FeedDetails"}}},title:"StreamDetails"}}},title:"PaginatedResponseOfStreamDetails"}},title:"SuccessListStreams"},examples:{list:{summary:"list",value:{status:"success",data:{pagination:{totalItems:2,totalPages:1,itemsOnPage:2},data:[{streamId:"Abcde0/restream_feed_1",streamName:"restream_feed_1",clusterId:"phx-1",clusters:["phx-1"],secureStream:!1,isRecordingAllowed:!1,multisource:!0,live:!0,startTime:"2024-06-25T00:42:02.466Z",viewerCount:0,hasRedundant:!1,restreaming:!1,feeds:[{streamId:"Abcde0/restream_feed_1",feedId:"9d614662-153f-4904-9a86-859e198d8755",clusterId:"phx-1",serverId:"phx-1-dev",active:!0,startTime:"2024-06-25T00:42:02.466Z",isRecordingAllowed:!1,packetLoss:0,isRedundant:!1,tokenId:1143052,client:{country:"SG",city:"Singapore",continent:"AS",coordinates:[1.5078,103.9918,20],ip:"100.200.100.200"},trackDetails:[]}]},{streamId:"Abcde0/main_stream",streamName:"main_stream",clusterId:"sgp-1",clusters:["sgp-1"],secureStream:!1,isRecordingAllowed:!1,multisource:!0,live:!0,startTime:"2024-06-25T00:42:01.222Z",viewerCount:0,hasRedundant:!1,restreaming:!0,feeds:[{streamId:"Abcde0/main_stream",feedId:"9b8dcce4-cbd9-45fe-a58c-8775f1c6d0d2",clusterId:"sgp-1",serverId:"sgp-1-dev",active:!0,startTime:"2024-06-25T00:42:01.222Z",isRecordingAllowed:!1,packetLoss:0,isRedundant:!1,tokenId:1129104,client:{country:"AU",city:"Melbourne",continent:"OC",coordinates:[-39.8889,154.9221,50],sub:["VIC"],ip:"127.100.100.100"},restreams:[{label:"Webcam 1",url:"rtmp://test.dolby.io/v2/pub",active:!0,started:"2024-06-25T00:42:01.218Z"}],trackDetails:[]}]}]}}}}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"fail",minLength:1},data:{}},title:"FailResponse"},examples:{validation:{summary:"validation",value:{status:"fail",data:{errors:{page:"page must be greater than 0",itemsOnPage:"ItemsOnPage must be greater than 0 and less 20"}}}}}}}},default:{description:"Server Error",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","message"],properties:{status:{type:"string",default:"error",minLength:1},message:{type:"string",minLength:1},code:{type:"integer",format:"int32",nullable:!0},data:{nullable:!0}},title:"ErrorResponse"},examples:{general:{summary:"general",value:{status:"error",message:"simple error reason",code:500,data:{additional:"other data here (not actual key)"}}}}}}}}})]})}function v(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);