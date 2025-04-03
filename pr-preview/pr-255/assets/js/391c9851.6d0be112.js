"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["17901"],{59187:function(e,t,a){a.r(t),a.d(t,{default:()=>x,frontMatter:()=>y,metadata:()=>s,assets:()=>h,toc:()=>b,contentTitle:()=>f});var s=JSON.parse('{"id":"api/analytics-get-tracking-total-for-streams","title":"Total bandwidth per TrackingID per stream","description":"Get total bandwidth for each TrackingID associated with specified streamNames over a date range. Response keys are requested streamnames.","source":"@site/millicast/api/analytics-get-tracking-total-for-streams.api.mdx","sourceDirName":"api","slug":"/api/analytics-get-tracking-total-for-streams","permalink":"/documentation/pr-preview/pr-255/millicast/api/analytics-get-tracking-total-for-streams","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"analytics-get-tracking-total-for-streams","title":"Total bandwidth per TrackingID per stream","description":"Get total bandwidth for each TrackingID associated with specified streamNames over a date range. Response keys are requested streamnames.","sidebar_label":"Total bandwidth per TrackingID per stream","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"get api-method","info_path":"millicast/api/millicast-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"millicastApi","previous":{"title":"Streams Geo","permalink":"/documentation/pr-preview/pr-255/millicast/api/analytics-streams-geo"},"next":{"title":"Series bandwidth per TrackingID per stream","permalink":"/documentation/pr-preview/pr-255/millicast/api/analytics-get-tracking-series-for-streams"}}'),i=a("85893"),r=a("50065"),n=a("72969"),o=a.n(n),c=a("11682"),d=a.n(c),l=a("99757"),p=a.n(l),m=a("6476"),g=a.n(m);a("9650"),a("97645");var u=a("46055");let y={id:"analytics-get-tracking-total-for-streams",title:"Total bandwidth per TrackingID per stream",description:"Get total bandwidth for each TrackingID associated with specified streamNames over a date range. Response keys are requested streamnames.",sidebar_label:"Total bandwidth per TrackingID per stream",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"millicast/api/millicast-api",custom_edit_url:null,hide_send_button:!0},f=void 0,h={},b=[];function k(e){let t={p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Total bandwidth per TrackingID per stream"}),"\n",(0,i.jsx)(o(),{method:"get",path:"/api/analytics/tracking/streams/total",context:"endpoint"}),"\n",(0,i.jsx)(t.p,{children:"Get total bandwidth for each TrackingID associated with specified streamNames over a date range. Response keys are requested streamnames."}),"\n",(0,i.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(d(),{parameters:[{name:"streamNames",in:"query",style:"form",explode:!0,required:!0,description:"Each string must be <= 128 characters",schema:{type:"array",maxItems:10,items:{type:"string"}},"x-position":1},{name:"startDate",in:"query",required:!0,description:"The start date of the query. In the format of `YYYY-MM-DD`.",schema:{type:"string",format:"date"},"x-position":2},{name:"stopDate",in:"query",required:!0,description:"The end date of the query. In the format of `YYYY-MM-DD`.",schema:{type:"string",format:"date"},"x-position":3}]}),"\n",(0,i.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(g(),{id:void 0,label:void 0,responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"success",minLength:1},data:{type:"object",additionalProperties:{type:"array",items:{type:"object",additionalProperties:!1,properties:{standardStream:{description:"Traffic attributed to standard streaming broadcasts and playback.",nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{bytesOut:{type:"integer",format:"int64"},bytesIn:{type:"integer",format:"int64"}},title:"BaseBandwidthModel2"}]},restream:{description:"Traffic attributed to use of re-streaming across multiple platforms.",nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{bytesOut:{type:"integer",format:"int64"},bytesIn:{type:"integer",format:"int64"},duration:{type:"integer",format:"int64"}},title:"UsageWithDurationModel2"}]},geoCascade:{description:"Traffic attributed to use of geo-cascading across multiple regions.",nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{bytesOut:{type:"integer",format:"int64"},bytesIn:{type:"integer",format:"int64"}},title:"BaseBandwidthModel2"}]},trackingId:{type:"string",nullable:!0}},title:"StreamTrackingTotalAnalyticModel"}}}},title:"SuccessTrackingTotalForStreams"},examples:{simple:{summary:"simple",value:{status:"success",data:{lday0h9i:[{bytesOut:0xe4a79208,bytesIn:0x4e97692},{trackingId:"customTrackingId",bytesOut:0,bytesIn:0x1344fe30},{trackingId:"test-e2e",bytesOut:0,bytesIn:0x1b030cb1},{trackingId:"trackingId1",bytesOut:0,bytesIn:0xb8ad02f},{trackingId:"trackingId2",bytesOut:0,bytesIn:0x1883197}],teststream2:[]}}}}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"fail",minLength:1},data:{}},title:"FailResponse"}}}},default:{description:"Server Error",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","message"],properties:{status:{type:"string",default:"error",minLength:1},message:{type:"string",minLength:1},code:{type:"integer",format:"int32",nullable:!0},data:{nullable:!0}},title:"ErrorResponse"},examples:{general:{summary:"general",value:{status:"error",message:"simple error reason",code:500,data:{additional:"other data here (not actual key)"}}}}}}}}})]})}function x(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);