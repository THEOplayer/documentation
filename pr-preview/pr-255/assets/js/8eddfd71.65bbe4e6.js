"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["55029"],{8292:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>y,metadata:()=>a,assets:()=>b,toc:()=>f,contentTitle:()=>g});var a=JSON.parse('{"id":"api/transcoder-scheduler-get-schedules-for-transcoder","title":"Get Schedules By Transcoder","description":"Get all Schedules for a single transcoder.","source":"@site/millicast/api/transcoder-scheduler-get-schedules-for-transcoder.api.mdx","sourceDirName":"api","slug":"/api/transcoder-scheduler-get-schedules-for-transcoder","permalink":"/documentation/pr-preview/pr-255/millicast/api/transcoder-scheduler-get-schedules-for-transcoder","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"transcoder-scheduler-get-schedules-for-transcoder","title":"Get Schedules By Transcoder","description":"Get all Schedules for a single transcoder.","sidebar_label":"Get Schedules By Transcoder","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"get api-method","info_path":"millicast/api/millicast-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"millicastApi","previous":{"title":"List Transcoder Schedules","permalink":"/documentation/pr-preview/pr-255/millicast/api/transcoder-scheduler-list-all-schedules"},"next":{"title":"Read Clusters","permalink":"/documentation/pr-preview/pr-255/millicast/api/cluster-get-clusters-info"}}'),s=r("85893"),i=r("50065"),n=r("72969"),d=r.n(n),l=r("11682"),c=r.n(l),o=r("99757"),p=r.n(o),u=r("6476"),m=r.n(u);r("9650"),r("97645");var h=r("46055");let y={id:"transcoder-scheduler-get-schedules-for-transcoder",title:"Get Schedules By Transcoder",description:"Get all Schedules for a single transcoder.",sidebar_label:"Get Schedules By Transcoder",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"millicast/api/millicast-api",custom_edit_url:null,hide_send_button:!0},g=void 0,b={},f=[];function S(e){let t={p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Get Schedules By Transcoder"}),"\n",(0,s.jsx)(d(),{method:"get",path:"/api/transcoders/{transcoderId}/schedule/list",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"Get all Schedules for a single transcoder."}),"\n",(0,s.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(c(),{parameters:[{name:"transcoderId",in:"path",required:!0,schema:{type:"string"},"x-position":1},{name:"sortBy",in:"query",description:"Order in which to return the list of Transcoder schedules. The default is by CreatedDate.",schema:{default:"CreatedDate",nullable:!0,oneOf:[{type:"string",description:"","x-enumNames":["CreatedDate"],enum:["CreatedDate"],title:"ListTranscoderSchedulesSortBy"}]},"x-position":2},{name:"status",in:"query",style:"form",explode:!0,description:"Returns only Transcoder schedules that have a specified status.",schema:{type:"array",nullable:!0,items:{type:"string",description:"","x-enumNames":["Active","Inactive","Deleted"],enum:["Active","Inactive","Deleted"],title:"ScheduleStatus"}},"x-position":3},{name:"page",in:"query",required:!0,description:"The index to start when paginating results.",schema:{type:"integer",format:"int32",maximum:0x7fffffff,minimum:1},"x-position":4},{name:"itemsOnPage",in:"query",required:!0,description:"The number of results to include when paginating a large result set.",schema:{type:"integer",format:"int32",maximum:100,minimum:1},"x-position":5},{name:"isDescending",in:"query",description:"Change the direction of the default sort ordering.",schema:{type:"boolean",default:!1},"x-position":6}]}),"\n",(0,s.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,s.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"success",minLength:1},data:{type:"array",items:{type:"object",additionalProperties:!1,properties:{metadata:{nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{createdOn:{type:"string",format:"date-time"},lastModifiedOn:{type:"string",format:"date-time",nullable:!0}},title:"ScheduleMetadata"}]},status:{type:"string",description:"","x-enumNames":["Active","Inactive","Deleted"],enum:["Active","Inactive","Deleted"],title:"ScheduleStatus"},scheduleId:{type:"string",nullable:!0},start:{type:"string",format:"date-time",nullable:!0},stop:{type:"string",format:"date-time",nullable:!0},clientId:{type:"string",nullable:!0},name:{type:"string",nullable:!0},description:{type:"string",nullable:!0},recurring:{nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{frequency:{type:"object",additionalProperties:!1,properties:{interval:{type:"string",description:"","x-enumNames":["Daily","Weekly"],enum:["Daily","Weekly"],title:"RecurringInterval"},daysOfWeek:{type:"array",nullable:!0,items:{type:"string",description:"","x-enumNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],enum:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],title:"DayOfWeek"}}},title:"RecurringFrequency"},endDate:{type:"string",format:"date-time",nullable:!0}},title:"RecurringInfo"}]},transcoderIds:{type:"array",nullable:!0,items:{type:"string"}},executions:{type:"array",nullable:!0,items:{type:"object",additionalProperties:!1,properties:{executionTime:{type:"string",format:"date-time"},scheduleType:{type:"string",description:"","x-enumNames":["Start","Stop"],enum:["Start","Stop"],title:"TranscoderScheduleType"},executionStatus:{type:"string",description:"","x-enumNames":["Pending","Running","Completed","NoAction","UnexpectedError","Deleted","RemovedByScheduleUpdate"],enum:["Pending","Running","Completed","NoAction","UnexpectedError","Deleted","RemovedByScheduleUpdate"],title:"ScheduleExecutionStatus"},transcoderId:{type:"string",nullable:!0}},title:"TranscoderScheduleExecutionResponse"}}},title:"TranscoderScheduleInfoResponse"}}},title:"SuccessGetSchedulesForSpecificTranscoder"},examples:{simple:{summary:"simple",value:{status:"success",data:[{start:"2024-08-15T09:00:00Z",stop:"2024-08-17T09:00:00Z",clientId:"random_string",scheduleId:"b4d1f1ea-c8ae-49ca-815e-8460587207cb",status:"active",transcoderIds:["9dc8129e-499d-4989-bb32-a5ae459277c5"],name:"start-transcoder-once",description:"first schedular ive created",recurring:{enabled:!0,frequency:{interval:"weekly"}},metadata:{createdOn:"2024-08-14T09:23:12Z"},executions:[{executionTime:"2024-08-15T09:00:00Z",scheduleType:"Start",executionStatus:"Pending",transcoderId:"9dc8129e-499d-4989-bb32-a5ae459277c5"},{executionTime:"2024-08-17T09:00:00Z",scheduleType:"Stop",executionStatus:"Pending",transcoderId:"9dc8129e-499d-4989-bb32-a5ae459277c5"}]}]}}}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"fail",minLength:1},data:{}},title:"FailResponse"}}}},default:{description:"Server Error",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","message"],properties:{status:{type:"string",default:"error",minLength:1},message:{type:"string",minLength:1},code:{type:"integer",format:"int32",nullable:!0},data:{nullable:!0}},title:"ErrorResponse"},examples:{general:{summary:"general",value:{status:"error",message:"simple error reason",code:500,data:{additional:"other data here (not actual key)"}}}}}}}}})]})}function x(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(S,{...e})}):S(e)}}}]);