"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["80594"],{31455:function(e,t,i){i.r(t),i.d(t,{default:()=>b,frontMatter:()=>m,metadata:()=>a,assets:()=>h,toc:()=>v,contentTitle:()=>y});var a=JSON.parse('{"id":"api/account-create-storage-profile","title":"Create Storage Profile","description":"Create a storage profile identifying the configuration for a cloud storage provider that can receive media assets when they are finished processing. Only one storage profile will be set as a default for the entire account, otherwise you may specify a storage location using the `storageProfileId` on any individual media clip request.","source":"@site/millicast/api/account-create-storage-profile.api.mdx","sourceDirName":"api","slug":"/api/account-create-storage-profile","permalink":"/documentation/pr-preview/pr-266/millicast/api/account-create-storage-profile","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"account-create-storage-profile","title":"Create Storage Profile","description":"Create a storage profile identifying the configuration for a cloud storage provider that can receive media assets when they are finished processing. Only one storage profile will be set as a default for the entire account, otherwise you may specify a storage location using the `storageProfileId` on any individual media clip request.","sidebar_label":"Create Storage Profile","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"post api-method","info_path":"millicast/api/millicast-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"millicastApi","previous":{"title":"List Storage Profiles","permalink":"/documentation/pr-preview/pr-266/millicast/api/account-list-storage-profiles"},"next":{"title":"Delete Storage Profile","permalink":"/documentation/pr-preview/pr-266/millicast/api/account-delete-storage-profile"}}'),o=i("85893"),r=i("50065"),s=i("72969"),n=i.n(s),l=i("11682"),c=i.n(l),p=i("99757"),d=i.n(p),u=i("6476"),g=i.n(u);i("9650"),i("97645");var f=i("46055");let m={id:"account-create-storage-profile",title:"Create Storage Profile",description:"Create a storage profile identifying the configuration for a cloud storage provider that can receive media assets when they are finished processing. Only one storage profile will be set as a default for the entire account, otherwise you may specify a storage location using the `storageProfileId` on any individual media clip request.",sidebar_label:"Create Storage Profile",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"post api-method",info_path:"millicast/api/millicast-api",custom_edit_url:null,hide_send_button:!0},y=void 0,h={},v=[];function x(e){let t={code:"code",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Create Storage Profile"}),"\n",(0,o.jsx)(n(),{method:"post",path:"/api/v3/account/media/storage",context:"endpoint"}),"\n",(0,o.jsxs)(t.p,{children:["Create a storage profile identifying the configuration for a cloud storage provider that can receive media assets when they are finished processing. Only one storage profile will be set as a default for the entire account, otherwise you may specify a storage location using the ",(0,o.jsx)(t.code,{children:"storageProfileId"})," on any individual media clip request."]}),"\n",(0,o.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(c(),{parameters:void 0}),"\n",(0,o.jsx)(d(),{title:"Body",body:{"x-name":"model",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["type","options"],properties:{name:{type:"string",description:"Provide a label for your storage profile",maxLength:256,minLength:1,nullable:!0},default:{type:"boolean",description:"Set this as the default storage profile for your account. If set to true this will replace the previous default profile.",default:!1,nullable:!0},type:{description:"Storage provider type. One of the following:\n* awsS3 - Amazon S3\n* gcs - Google Cloud Storage",oneOf:[{type:"string",description:"","x-enumNames":["gcs","awsS3","dolbyStorage"],enum:["gcs","awsS3","dolbyStorage"],title:"MediaAssetStorageType"}]},options:{type:"object",additionalProperties:!1,required:["bucketName"],properties:{objectPrefix:{type:"string",description:"Optional. Prefix to object when stored in bucket i.e. `protocol`://`bucketName`/`objectPrefix`/`objectName.ext`. `objectName` is either defined by a system assigned GUID or the user-specified `clipName`.",maxLength:1e3,minLength:0,nullable:!0},bucketName:{type:"string",description:"Name of bucket to upload clips to. Please ensure Dolby.io's service account is granted access.",minLength:1},bucketRegion:{type:"string",description:"Region of the specified bucket. Required when using storageType awsS3 ",maxLength:32,minLength:1,nullable:!0}},title:"StorageOptionsModel"}},title:"CreateStorageProfileModel"}}},required:!0,"x-position":1}}),"\n",(0,o.jsx)(g(),{id:void 0,label:void 0,responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"success",minLength:1},data:{type:"object",additionalProperties:!1,properties:{id:{type:"string",nullable:!0},name:{type:"string",nullable:!0},default:{type:"boolean",nullable:!0},type:{type:"string",description:"","x-enumNames":["gcs","awsS3","dolbyStorage"],enum:["gcs","awsS3","dolbyStorage"],title:"MediaAssetStorageType"},options:{nullable:!0,oneOf:[{type:"object",additionalProperties:!1,required:["bucketName"],properties:{objectPrefix:{type:"string",description:"Optional. Prefix to object when stored in bucket i.e. `protocol`://`bucketName`/`objectPrefix`/`objectName.ext`. `objectName` is either defined by a system assigned GUID or the user-specified `clipName`.",maxLength:1e3,minLength:0,nullable:!0},bucketName:{type:"string",description:"Name of bucket to upload clips to. Please ensure Dolby.io's service account is granted access.",minLength:1},bucketRegion:{type:"string",description:"Region of the specified bucket. Required when using storageType awsS3 ",maxLength:32,minLength:1,nullable:!0}},title:"StorageOptionsModel"}]}},title:"StorageProfileResponseModel"}},title:"SuccessResponseOfStorageProfileResponseModel"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"fail",minLength:1},data:{}},title:"FailResponse"}}}},default:{description:"Server Error",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","message"],properties:{status:{type:"string",default:"error",minLength:1},message:{type:"string",minLength:1},code:{type:"integer",format:"int32",nullable:!0},data:{nullable:!0}},title:"ErrorResponse"},examples:{general:{summary:"general",value:{status:"error",message:"simple error reason",code:500,data:{additional:"other data here (not actual key)"}}}}}}}}})]})}function b(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}}}]);