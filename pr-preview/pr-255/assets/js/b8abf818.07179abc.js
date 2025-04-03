"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["50240"],{70893:function(e,t,a){a.r(t),a.d(t,{default:()=>k,frontMatter:()=>f,metadata:()=>i,assets:()=>y,toc:()=>T,contentTitle:()=>g});var i=JSON.parse('{"id":"api/analytics-get-series-bandwidth-for-tracking-id","title":"Series bandwidth for streams specified by TrackingID","description":"Get bandwidth information  used as a time series on specified TrackingIDs over a date range on a stream-by-stream basis. Response keys are requested TrackingIDs, followed by keys for ISO 8601 dates from requested","source":"@site/millicast/api/analytics-get-series-bandwidth-for-tracking-id.api.mdx","sourceDirName":"api","slug":"/api/analytics-get-series-bandwidth-for-tracking-id","permalink":"/documentation/pr-preview/pr-255/millicast/api/analytics-get-series-bandwidth-for-tracking-id","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"analytics-get-series-bandwidth-for-tracking-id","title":"Series bandwidth for streams specified by TrackingID","description":"Get bandwidth information  used as a time series on specified TrackingIDs over a date range on a stream-by-stream basis. Response keys are requested TrackingIDs, followed by keys for ISO 8601 dates from requested","sidebar_label":"Series bandwidth for streams specified by TrackingID","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"get api-method","info_path":"millicast/api/millicast-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"millicastApi","previous":{"title":"Total bandwidth for streams specified by TrackingID","permalink":"/documentation/pr-preview/pr-255/millicast/api/analytics-get-total-bandwidth-for-tracking-id"},"next":{"title":"Get Total Transcoder Minutes","permalink":"/documentation/pr-preview/pr-255/millicast/api/analytics-get-total-transcoder-minutes-for-account"}}'),s=a("85893"),r=a("50065"),n=a("72969"),o=a.n(n),d=a("11682"),c=a.n(d),p=a("99757"),l=a.n(p),m=a("6476"),b=a.n(m);a("9650"),a("97645");var u=a("46055");let f={id:"analytics-get-series-bandwidth-for-tracking-id",title:"Series bandwidth for streams specified by TrackingID",description:"Get bandwidth information  used as a time series on specified TrackingIDs over a date range on a stream-by-stream basis. Response keys are requested TrackingIDs, followed by keys for ISO 8601 dates from requested",sidebar_label:"Series bandwidth for streams specified by TrackingID",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"millicast/api/millicast-api",custom_edit_url:null,hide_send_button:!0},g=void 0,y={},T=[];function h(e){let t={p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Series bandwidth for streams specified by TrackingID"}),"\n",(0,s.jsx)(o(),{method:"get",path:"/api/analytics/tracking/series",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"Get bandwidth information  used as a time series on specified TrackingIDs over a date range on a stream-by-stream basis. Response keys are requested TrackingIDs, followed by keys for ISO 8601 dates from requested"}),"\n",(0,s.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(c(),{parameters:[{name:"resolution",in:"query",required:!0,schema:{type:"string",description:"","x-enumNames":["Hour","Day"],enum:["Hour","Day"],title:"StreamsAnalyticsResolution"},"x-position":1},{name:"trackingIds",in:"query",style:"form",explode:!0,required:!0,schema:{type:"array",maxItems:10,items:{type:"string"}},"x-position":2},{name:"startDate",in:"query",required:!0,description:"The start date of the query. In the format of `YYYY-MM-DD`.",schema:{type:"string",format:"date"},"x-position":3},{name:"stopDate",in:"query",required:!0,description:"The end date of the query. In the format of `YYYY-MM-DD`.",schema:{type:"string",format:"date"},"x-position":4}]}),"\n",(0,s.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,s.jsx)(b(),{id:void 0,label:void 0,responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"success",minLength:1},data:{type:"object",additionalProperties:{type:"object",additionalProperties:{type:"array",items:{type:"object",additionalProperties:!1,properties:{standardStream:{description:"Traffic attributed to standard streaming broadcasts and playback.",nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{bytesOut:{type:"integer",format:"int64"},bytesIn:{type:"integer",format:"int64"}},title:"BaseBandwidthModel2"}]},restream:{description:"Traffic attributed to use of re-streaming across multiple platforms.",nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{bytesOut:{type:"integer",format:"int64"},bytesIn:{type:"integer",format:"int64"},duration:{type:"integer",format:"int64"}},title:"UsageWithDurationModel2"}]},geoCascade:{description:"Traffic attributed to use of geo-cascading across multiple regions.",nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{bytesOut:{type:"integer",format:"int64"},bytesIn:{type:"integer",format:"int64"}},title:"BaseBandwidthModel2"}]},streamName:{type:"string",nullable:!0}},title:"TrackingIdTotalAnalyticModel"}}}}},title:"SuccessSeriesBandwidthPerStreamForTrackingIds"},examples:{simple:{summary:"simple",value:{status:"success",data:{trackingId1:{"2023-01-26T00:00:00Z":[{streamName:"lday0h9i",bytesOut:0x1b030cb1,bytesIn:0}],"2023-01-27T00:00:00Z":[],"2023-01-28T00:00:00Z":[],"2023-01-29T00:00:00Z":[],"2023-01-30T00:00:00Z":[],"2023-01-31T00:00:00Z":[],"2023-02-01T00:00:00Z":[],"2023-02-02T00:00:00Z":[],"2023-02-03T00:00:00Z":[],"2023-02-04T00:00:00Z":[],"2023-02-05T00:00:00Z":[],"2023-02-06T00:00:00Z":[],"2023-02-07T00:00:00Z":[]},trackingId2:{"2023-01-26T00:00:00Z":[{streamName:"lday0h9i",bytesOut:0xb8ad02f,bytesIn:0}],"2023-01-27T00:00:00Z":[],"2023-01-28T00:00:00Z":[],"2023-01-29T00:00:00Z":[],"2023-01-30T00:00:00Z":[],"2023-01-31T00:00:00Z":[],"2023-02-01T00:00:00Z":[],"2023-02-02T00:00:00Z":[],"2023-02-03T00:00:00Z":[],"2023-02-04T00:00:00Z":[],"2023-02-05T00:00:00Z":[],"2023-02-06T00:00:00Z":[],"2023-02-07T00:00:00Z":[]}}}}}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"fail",minLength:1},data:{}},title:"FailResponse"}}}},default:{description:"Server Error",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","message"],properties:{status:{type:"string",default:"error",minLength:1},message:{type:"string",minLength:1},code:{type:"integer",format:"int32",nullable:!0},data:{nullable:!0}},title:"ErrorResponse"},examples:{general:{summary:"general",value:{status:"error",message:"simple error reason",code:500,data:{additional:"other data here (not actual key)"}}}}}}}}})]})}function k(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);