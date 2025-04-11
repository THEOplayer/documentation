"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["15126"],{46978:function(e,t,i){i.r(t),i.d(t,{default:()=>L,frontMatter:()=>f,metadata:()=>a,assets:()=>y,toc:()=>S,contentTitle:()=>q});var a=JSON.parse('{"id":"api/stream-reprioritize-stream","title":"Reprioritize an active stream","description":"Update stream priority specified in token and restart stream to re-assign priority.","source":"@site/millicast/api/stream-reprioritize-stream.api.mdx","sourceDirName":"api","slug":"/api/stream-reprioritize-stream","permalink":"/documentation/pr-preview/pr-266/millicast/api/stream-reprioritize-stream","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"stream-reprioritize-stream","title":"Reprioritize an active stream","description":"Update stream priority specified in token and restart stream to re-assign priority.","sidebar_label":"Reprioritize an active stream","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"post api-method","info_path":"millicast/api/millicast-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"millicastApi","previous":{"title":"Stop all active streams","permalink":"/documentation/pr-preview/pr-266/millicast/api/stream-stop-by-account"},"next":{"title":"Read Token","permalink":"/documentation/pr-preview/pr-266/millicast/api/subscribe-token-v-1-read-token"}}'),r=i("85893"),s=i("50065"),n=i("72969"),o=i.n(n),p=i("11682"),d=i.n(p),c=i("99757"),u=i.n(c),l=i("6476"),m=i.n(l);i("9650"),i("97645");var h=i("46055");let f={id:"stream-reprioritize-stream",title:"Reprioritize an active stream",description:"Update stream priority specified in token and restart stream to re-assign priority.",sidebar_label:"Reprioritize an active stream",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"post api-method",info_path:"millicast/api/millicast-api",custom_edit_url:null,hide_send_button:!0},q=void 0,y={},S=[];function g(e){let t={a:"a",code:"code",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Reprioritize an active stream"}),"\n",(0,r.jsx)(o(),{method:"post",path:"/api/stream/reprioritize",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Update stream priority specified in token and restart stream to re-assign priority."}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/api/publish-token-v-1-list-tokens-by-name",children:"List Tokens By Name"})," and filter by ",(0,r.jsx)(t.code,{children:"StreamName"})," to identify the tokenId associated with the target stream."]}),"\n",(0,r.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(d(),{parameters:void 0}),"\n",(0,r.jsx)(u(),{title:"Body",body:{"x-name":"request",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["tokenId","updatePriority"],properties:{tokenId:{type:"integer",description:"Optional. Specify the token associated with stream that requires an updated priority. \nPlease ensure that the token is assign a single streamId by calling [Read Token](#operation/PublishTokenV1_ReadToken), otherwise unexpected streams will be assigned the new priority on reconnection."},updatePriority:{type:"integer",format:"int32"}},title:"ReprioritizeStreamRequest"}}},required:!0,"x-position":1}}),"\n",(0,r.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"success",minLength:1},data:{type:"object",additionalProperties:!1,properties:{stoppingLevel:{nullable:!0,oneOf:[{type:"string",description:"","x-enumNames":["Account","Stream","Feed","Server","Token","None"],enum:["Account","Stream","Feed","Server","Token","None"],title:"StreamStoppingLevel"}]}},title:"ReprioritizeStreamResponse"}},title:"SuccessResponseOfReprioritizeStreamResponse"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"fail",minLength:1},data:{}},title:"FailResponse"}}}},default:{description:"Server Error",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","message"],properties:{status:{type:"string",default:"error",minLength:1},message:{type:"string",minLength:1},code:{type:"integer",format:"int32",nullable:!0},data:{nullable:!0}},title:"ErrorResponse"},examples:{general:{summary:"general",value:{status:"error",message:"simple error reason",code:500,data:{additional:"other data here (not actual key)"}}}}}}}}})]})}function L(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}}}]);