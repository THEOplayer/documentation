"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["6394"],{37172:function(e,t,i){i.r(t),i.d(t,{default:()=>j,frontMatter:()=>g,metadata:()=>a,assets:()=>b,toc:()=>y,contentTitle:()=>f});var a=JSON.parse('{"id":"api/media-assets-create-media-asset","title":"Create Media Asset","description":"Create a live clip from an ongoing live stream. You must provide the stream name and start time, and once processing is complete the media asset of the type clip will be available for retrieval.","source":"@site/millicast/api/media-assets-create-media-asset.api.mdx","sourceDirName":"api","slug":"/api/media-assets-create-media-asset","permalink":"/documentation/pr-preview/pr-256/millicast/api/media-assets-create-media-asset","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"media-assets-create-media-asset","title":"Create Media Asset","description":"Create a live clip from an ongoing live stream. You must provide the stream name and start time, and once processing is complete the media asset of the type clip will be available for retrieval.","sidebar_label":"Create Media Asset","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"post api-method","info_path":"millicast/api/millicast-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"millicastApi","previous":{"title":"Update Account Geo Restrictions","permalink":"/documentation/pr-preview/pr-256/millicast/api/geo-update-geo"},"next":{"title":"List Media Assets","permalink":"/documentation/pr-preview/pr-256/millicast/api/media-assets-list-media-assets"}}'),s=i("85893"),r=i("50065"),o=i("72969"),n=i.n(o),l=i("11682"),d=i.n(l),p=i("99757"),c=i.n(p),m=i("6476"),u=i.n(m);i("9650"),i("97645");var h=i("46055");let g={id:"media-assets-create-media-asset",title:"Create Media Asset",description:"Create a live clip from an ongoing live stream. You must provide the stream name and start time, and once processing is complete the media asset of the type clip will be available for retrieval.",sidebar_label:"Create Media Asset",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"post api-method",info_path:"millicast/api/millicast-api",custom_edit_url:null,hide_send_button:!0},f=void 0,b={},y=[];function v(e){let t={a:"a",code:"code",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Create Media Asset"}),"\n",(0,s.jsx)(n(),{method:"post",path:"/api/v3/media/assets",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"Create a live clip from an ongoing live stream. You must provide the stream name and start time, and once processing is complete the media asset of the type clip will be available for retrieval."}),"\n",(0,s.jsx)(t.p,{children:"If a stop time is not specified, the time the request was received will be used. The clip duration must be a minimum of ten (10) seconds and cannot exceed eight (8) hours."}),"\n",(0,s.jsx)(t.p,{children:"There are a few cases where more than one clip will be generated from a single request."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"A stream went offline during the time range will generate separate clips for the period before and after the restart."}),"\n",(0,s.jsx)(t.li,{children:"A stream that is configured for multi-source when a simulcastId is not given in the request to select a single layer."}),"\n",(0,s.jsx)(t.li,{children:"A stream that is configured for multi-bitrate contribution or redundant fallback ingest and a sourceId is not given in the request to specify which to use. In that scenario, sources will be ranked based on the following criteria and the highest ranked source is selected for clipping:"}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"priority"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"quality"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"start time"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["By using an ",(0,s.jsx)(t.code,{children:"Idempotency-Key"})," header in your requests, you can avoid generating more than one identical clip should the same request be received more than once. To avoid unnecessary charges, it is recommended you use a common identifier for live clip requests based on a common source stream and time range. For background on the usage of this header, please refer to the ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/",children:"IETF Draft"})]}),"\n",(0,s.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(d(),{parameters:void 0}),"\n",(0,s.jsx)(c(),{title:"Body",body:{"x-name":"model",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["streamName","startTime"],properties:{streamName:{type:"string",description:"Name of stream to create live clip.",minLength:1},tokenId:{type:"integer",description:"Publish token of stream.",nullable:!0},sourceId:{type:"string",description:"Optional. ",nullable:!0},simulcastId:{type:"string",description:"Optional. <br /> <br /> If this field is omitted, a media asset will be created per available simulcastId <br /> <br /> Otherwise, set the field to `null` to select a source published without a specified simulcastId. <br /> <br />Provide an empty string to select a source published using RTMP/SRT paths where the simulcastId parameter was specified without a defined value as shown in [Multi-source RTMP](https://docs.dolby.io/streaming-apis/docs/multi-source-broadcasting#multi-source-rtmp), i.e. `?simulcastId&...`.<br /> <br />This field can also be set to any standard string.",nullable:!0},priority:{type:"integer",description:"Optional. Priority level of stream(s) to clip. By default the stream with highest priority for a given sourceId will be chosen to clip.",format:"int32",nullable:!0},startTime:{type:"string",description:"Start time of live recording clip. Must be provided to disambiguate between discontinuous streams. Media assets returned will start on or after specified time, depending on the availability of the content requested. Time must be set in the past. <br /><br />ISO 8601 format should be used (eg 2020-01-01T00:00:00Z), all times are expected to be UTC.",format:"date",minLength:1},stopTime:{type:"string",description:"Optional. Stop time of live recording clip. If not provided, defaults to the current time. Time must be set in the past. <br /><br />ISO 8601 format should be used (eg 2020-01-01T00:00:00Z), all times are expected to be UTC.",format:"date",nullable:!0},name:{type:"string",description:'Optional. Provide a label for the live recording clip. If not specified, this value will be assigned. <br /> <br />`name` must meet the naming requirements recommended by [Google Cloud Storage](https://cloud.google.com/storage/docs/objects#naming) and [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines). <br /> <br />If a media asset is uploaded to third party storage, the `name` will be used as the name of the uploaded object. To avoid failed uploads the name should be either unique to avoid conflict with existing objects in the upload location or if overwriting existing objects is desired, appropriate permissions must be granted: [DELETE permissions must be granted to us](https://docs.dolby.io/streaming-apis/docs/live-clipping#granting-dolbyio-access-to-your-gcp-storage). <br /> <br />`name` may not contain carriage return or line feed characters, or any of the characters #, [, ], *, ?, :, ", \u201C, \u201D, <, >, |, /, {, }, ^, %, `, ~.',maxLength:256,minLength:1,nullable:!0},storage:{description:"Optional. Provide storage configurations for clip. If unspecified your default storage profile will be used, or our storage buckets if the former does not exist. <br /> <br />If specifying user-defined storage, please refer to setup instructions to grant us upload access to buckets and ensure that configurations have been tested using [Test Storage Configuration](#tag/RecordFileTasks/operation/Account_ValidateStorageProfile). ",nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{profileId:{type:"string",description:"Optional. Provide the id of a storage profile. Mutually exclusive with Type.",nullable:!0},type:{description:"Optional. Use to indicate the storage provider type for a one-off storage configuration. Mutually exclusive with ProfileId. Storage provider type. One of the following:\n* awsS3 - Amazon S3\n* gcs - Google Cloud Storage\n* dolbyStorage - Dolby.io's storage buckets. Call Read Media Asset to retrieve the clip file.",nullable:!0,oneOf:[{type:"string",description:"","x-enumNames":["gcs","awsS3","dolbyStorage"],enum:["gcs","awsS3","dolbyStorage"],title:"MediaAssetStorageType"}]},options:{description:"May be used in the following ways: <br />1. Optional. Override parameters of a storage profile specified via ProfileId <br />2. Required. Set parameters for a one-off storage configuration when Type is provided <br /> 3. Optional. Override parameters of the default storage profile if neither ProfileId or Type are provided",nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{objectPrefix:{type:"string",description:"Optional. Prefix to object when stored in bucket i.e. `protocol`://`bucketName`/`objectPrefix`/`objectName.ext`. Ignored when using Dolby.io's storage buckets. `objectName` is either defined by a system assigned GUID or the user-specified `clipName`.",maxLength:1e3,minLength:0,nullable:!0},bucketName:{type:"string",description:"Name of bucket to upload clips to. Please ensure Dolby.io's service account is granted access.",nullable:!0},bucketRegion:{type:"string",description:"Region of the specified bucket if using storage provider awsS3",maxLength:32,minLength:1,nullable:!0}},title:"UpdateStorageOptionsModel"}]}},title:"MediaAssetStorageModel"}]},expiration:{type:"string",description:"Optional. Provide expiry time for live recording clip. <br /><br />If not specified, file will be retained until removed via [Delete Files](#operation/RecordFilesV2_DeleteRecordFileItems). <br /><br />Has no effect when files are uploaded to user-specified storage locations. ",format:"date",nullable:!0}},title:"CreateMediaAssetModel"}}},required:!0,"x-position":1}}),"\n",(0,s.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"success",minLength:1},data:{type:"array",items:{type:"object",additionalProperties:!1,properties:{id:{type:"string",nullable:!0},type:{type:"string",description:"","x-enumNames":["Recording","Clip","StorageValidation","Timeline"],enum:["recording","clip","storageValidation","timeline"],title:"MediaAssetType"},feed:{nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{tokenId:{type:"integer",nullable:!0},streamName:{type:"string"},sourceId:{type:"string",nullable:!0},simulcastId:{type:"string",nullable:!0},priority:{type:"integer",format:"int32",nullable:!0}},title:"MediaAssetFeedSelectionModel"}]},startTime:{type:"string",format:"date"},stopTime:{type:"string",format:"date",nullable:!0},name:{type:"string",nullable:!0},storage:{nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{type:{description:"Storage provider type",oneOf:[{type:"string",description:"","x-enumNames":["gcs","awsS3","dolbyStorage"],enum:["gcs","awsS3","dolbyStorage"],title:"MediaAssetStorageType"}]},path:{type:"string",description:"Path to clip storage location. Available only for external storage configurations. ",nullable:!0}},title:"MediaAssetStorageResponseModel"}]},status:{type:"string",description:"","x-enumNames":["Processing","Complete","Error","Deleting","Deleted"],enum:["processing","complete","error","deleting","deleted"],title:"MediaAssetStatus"},error:{type:"string",nullable:!0},created:{type:"string",format:"date",nullable:!0},expiration:{type:"string",format:"date",nullable:!0},removed:{type:"string",format:"date",nullable:!0},metadata:{nullable:!0,oneOf:[{type:"object",additionalProperties:!1,required:["tracks","thumbnails"],properties:{format:{type:"string"},sizes:{type:"object",nullable:!0,additionalProperties:{type:"integer",format:"int64"}},duration:{type:"integer"},tracks:{type:"array",items:{type:"object",additionalProperties:!1,properties:{type:{type:"string"},codec:{type:"string"},bitrate:{type:"integer"},width:{type:"integer",format:"int32",nullable:!0},height:{type:"integer",format:"int32",nullable:!0},framerate:{type:"integer",format:"int32",nullable:!0},channels:{type:"integer",format:"int32",nullable:!0},samplerate:{type:"integer",format:"int64",nullable:!0}},title:"RecordMediaTrack"}},thumbnails:{type:"array",items:{type:"string"}}},title:"RecordMetadata"}]}},title:"MediaAssetResponseModel"}}},title:"SuccessResponseOfListOfMediaAssetResponseModel"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"fail",minLength:1},data:{}},title:"FailResponse"}}}},default:{description:"Server Error",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","message"],properties:{status:{type:"string",default:"error",minLength:1},message:{type:"string",minLength:1},code:{type:"integer",format:"int32",nullable:!0},data:{nullable:!0}},title:"ErrorResponse"},examples:{general:{summary:"general",value:{status:"error",message:"simple error reason",code:500,data:{additional:"other data here (not actual key)"}}}}}}}}})]})}function j(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}}}]);