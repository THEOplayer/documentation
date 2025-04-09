"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["21555"],{28541:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>f,metadata:()=>i,assets:()=>y,toc:()=>b,contentTitle:()=>g});var i=JSON.parse('{"id":"api/transcoder-update-transcoder","title":"Update Transcoder","description":"Make changes to the configuration of an existing Transcoder. Changes should take effect without requiring a server restart except for DNS prefix and cluster, which can only be updated when the transcoder is in a shutdown state.","source":"@site/millicast/api/transcoder-update-transcoder.api.mdx","sourceDirName":"api","slug":"/api/transcoder-update-transcoder","permalink":"/documentation/pr-preview/pr-260/millicast/api/transcoder-update-transcoder","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"transcoder-update-transcoder","title":"Update Transcoder","description":"Make changes to the configuration of an existing Transcoder. Changes should take effect without requiring a server restart except for DNS prefix and cluster, which can only be updated when the transcoder is in a shutdown state.","sidebar_label":"Update Transcoder","hide_title":true,"hide_table_of_contents":true,"api":"eJztWm1zG7cR/iso/CF2e6RoWk4TflPsZoYzjqPq5UMraWzwbslDjAPOeCHF0XAmfyN/L7+kswDuDkdSMSU7bdqpP1jHA7C7WOw++4K7o5YtDJ1c0QvNpMlVAZreZLQAk2teW64kndAf2AcgecnkAgyxitgSSK7knC+cZjiHqDlhksAtN5bLBemIDcmruM6UyomCWKQF8znklqy4LZWzRMNHxzUuZMSAXoImGoxl2hK4zaG2ZK40ef32nNQa5vyWMFmQXDhjQWdkVfK8JDmTREmxJjMgri6YhYKsSpBeWNvKQ7ghXCKf0tlCrSQxllkYXstrGURFMXBNrdWcCyArLkSUEAhwW4ImrB3lBVHazy+BL0qbkblmFZwxC5kXs2bGXJRauUU5JNM5WStHTA05n6/JTNkyC1LvcMRtGCiG5BzAj371hhubaJachunmKwKyqBWXFs9mzmVB2JJxwWYC0vmRvBnSjKoawslNCzpJzv7dpVddYgwZrRnuyIJGO7mjklVAJ7RT6bSgGeVoJzWzJc1oVFZBJ1Y7yKjJS6gYndxRu65xrbF42HST0dtBrQwPZjbe3IS1YOx3qljjgttBZFepAgTNaK6kBWlxjNW14LnfxdFPBinc7bJSs58gtzSjrCg8HyZONe7ecjB0MmfCQEbr5FWzw21pt50iaIoU3NSCrQku8mbaKQYVLZ3wBxF0scloIc2pN+KDOSR2P4+2lthz7WaCmxI97dJAgSaQK2msdrn1c3G5Fy74yVwJoVbGD82VrphF533fivV+8J7luXLSTov3w2QzFReobmOHuar2bi165MEbi/OJLZlNt9TYfwG1UGu/p738gscl7Li0sPA2u5efBqOEa/CKy9pZYqwGVkWP5FAgOCx5ASr685C8hRUpYM6csDseakBAjkjjpABjOjJ75W2R4XCR/RKi8XFL5C8pWFz96YM7j8DVwz+rIrsYF7QGUytZeCDdgZ8h+YdyHq01WM1hCYQJQczaWKjQzgcFzLmEImFhyGxNciZEg82//vzLfWj468+/tHi4f7MdICcbniklgMn7zmFVggd+73yqJoKtQyxBamihgSBJ/X+frjcZtdziT7qDtJuMwi2rahFQyHB89E+uqphe47GEdxldMuGgw6o48M6muJ0gDWWzvBjAfIHw3LoprcvbwXPaOdL4eNSz0q9HW+oKe9jgNrZBPkXy534cjcCEvYxHI/yzZUwuz8GY3w3UOwmvKAZ5h6wKZhkmOH3Ej8N77d87GL5qxa24fANyYcuwU0/y8yJOL5h+0gtPiJP8o0PPAGnRrbWPDKwXezbZgYHshAg2A4F+XIKoMaJhEue4KckM7ApAksoJy2uRRh7jWRyM+RdlB/gaFgjCmN8QFkKR0nzBpd8Gx3TRNq5ulNM5NKBHQwR9e+DGMPZpyJUuPGWtXKCr+lE0Jp1DMrW9+Fgza0HLySPCYx9V+3K96qXOTUxXziYBaa5V5V+nqfRFyQ2pmM9x2V6sVJoUoPkSikAhd8aqKo18mJMmUcWARZWEpFDCj3Of432GKUdJPseO01y4V2Y8wKjRQjBkJrSC8aSzPkXkdfcLbSaKGZN1p2tl9vI4OC9Bn6jYLa9cFdMNZOMMtGqIJ9Uen6f/kDwCWVimF2AhnrshNWhiIFeyCHb6oIA4lQXiMxaCPm3bDoiNU3PjTW229hHStM6G/tfUfZ1Zof4QXblceJk8uRSQmdZsvXd3YeqWr4REqNaqcHnQJqKa5rOgRXJRggHio6ghTEN0Jgu68v4UUKDBoB8a3yYzbr3bCFYgF2aIsVAPfCEZBWk9Vy1BY2qTSLVlzRnlFirzmcHjQeYWzSzYFzdBaJQk1AJh9YvxvsRpxQtbHsjGz30Ul3ltHmTW0agHNehBMOpHscXzyQ+MYjg12Pk2p01Go4U8bA+NWT1Gci6tZqeguSoOZDodfO9hBefoJROPYJvksZ15xxT8DRKhm3ROHDmLOSHd3KDKNWCX5scDgPiEWF5hR6iqvbCxscNNz+WZIZFmbwuYZg9wvc+wZfGFWTaNpHt47j0xY5nM92QGUxko+BI1tK4qZbBBloPs1cgNDQ9l6QCmB9olGVsz03fujKtrpQNsm5yJNn7NtGKFh7iQgJjd4uULJQgPy3Vxd7tZQhT6op/u8kfTax2gUdY9HHyzJZ/Wh/EJs8n0FAOdxjK8CeslHqqPn1hCtqEvHMvvmel2hhNz3qfm2RdOe7+0W7cC/wf8u8f74Y7elZW7xhHGOsvbw3VvTn7PdihW4CBdhQbjG/qnWi254UqG6Se55UuU8m9aK4wL53E7NKOvQWB+GF+i4bxOBsL6vztwfkogtE2l+d2sCL9v8EBc9QcSp4lI06jj83BEm5s0XDWD/Xj1uNP8Ix7i734sN/vSg9ehU95pPOKpKS+1uEevBTe5BguxKUAuz94ELQPLyyRo1VpZlStBnp5d/HCaEfz/PCPnZxfPvlhlq221B/ix1WWrek/zCE1G2z3v08SoU0BqbMmMMw/q3WAyFBtozVin6bDmcQ3FxsqTflfb4OpF7l5P8TfakLvtxjasdSQG/KcP4t64QnvNlKTD0DBsRrcEId37vmntDD+oA9qVp1d3WyvRDsbHbTlBy/HXxzQpCl68HG1l7OPj7WSYjkfj48FoPBh9czE6nrx8OTn+Znh8/O0/aT91xHSHVlLVg4/aoC132Ql9Pn4xPH45/Pqvw2++faTGD5SotZcIHZvdVzt+HjzJ/5kcHR0o0uT5ty9eHi3HR7Wb0dbpwt8HUDk+ftER8f6J/z9EjNFoNKKb+C+jx/t629+xgpyFq8z/lv72nHFxb3M7hZ3vGRcJHm02CZWdHn+4zW+iyb9RERUYwxbwOF1AlHdLGQ3NPWu3ZqLh7K3GP13PN2h7f8XttdmdQB/lFyCx7dSH+eblPpxv99psrkFHP0A0MDydZksvR6NOxO5U8Kz8BRkOkRI0kKdSWcJy65ggH2D9LHEZA7nT3K49gJ6cTt+dA0Z5Orm6wW8AKrAlQiOtnYc1/KpgQo9YzY+S64ejuzQebdCbvbEFWHYaZSqtDeBQ8y18Qz6NGOdodkF7qTDt6SGVnRDy5MkTcokKu5ZP8PkkD1+IGL86dAELZsqZYroYXss/kzcKbzhiRRaqPCzR2kk458dQ9AuYW1KBdBnJBc8/YDPgPHbqcdpbtuQLbBhFaudxJ8Sy2VeGGDdDOXwb4eR0SsKOzLV8PiTX9C/klYf2a4rLg2lYvFCQsPJfChTJIsLnRAIUUFzL8ZC8aqQJV731msyctditCIWthiUw0by0ijCfRITbiiVXzoh1U8QlXPDrmz9d3TwdDo+wW2wNnti7oMphLRfkmn6P37UkK+gzGr8s8d1qYNo3nTKKYHLWfUXyt+Ab6V1p6+/JBWn7sktX2ldNiO+nBqMkKenm7l6XYtCeK29O0X+7dvLJ6XTXsMhUWt+4xhfX8pXCn+HuO8ZRfMQkeK2cTprTsULHhBf9IJB7PhwNR753oYytmEwUEe+2ex/7bN2PtID9/2/A/ue+AYvoZuHWHtWCcYlW4nHzLmLuFWU1x5kd6tIMzTqpA24yit0snHx3N2MGLrXYbPD1RwcYfK5uMOpoHmLZ1R0tuMHnoo3f99rc07MY2Z+R++RtrofkugtuWEd/gPX2R2o+zy6BoaGjHGHKq8BtcIGEOhI76ckma1ac5GiOvzk3DWKnlxdYAcQP2iofRalmK8xh2SpIq/zmQ26M7+6oYHLhQjgOJBHamOtdwETQy5qHpL7t6+PuLsy4UB9AbjadevC3rzc3/wK5gsPx","sidebar_class_name":"put api-method","info_path":"millicast/api/millicast-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"millicastApi","previous":{"title":"Get Transcoder","permalink":"/documentation/pr-preview/pr-260/millicast/api/transcoder-get-transcoder"},"next":{"title":"Delete Transcoder","permalink":"/documentation/pr-preview/pr-260/millicast/api/transcoder-delete-transcoder"}}'),s=r("85893"),n=r("50065"),a=r("72969"),o=r.n(a),d=r("11682"),c=r.n(d),l=r("99757"),p=r.n(l),h=r("6476"),u=r.n(h);r("9650"),r("97645");var m=r("46055");let f={id:"transcoder-update-transcoder",title:"Update Transcoder",description:"Make changes to the configuration of an existing Transcoder. Changes should take effect without requiring a server restart except for DNS prefix and cluster, which can only be updated when the transcoder is in a shutdown state.",sidebar_label:"Update Transcoder",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"put api-method",info_path:"millicast/api/millicast-api",custom_edit_url:null,hide_send_button:!0},g=void 0,y={},b=[];function w(e){let t={p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Update Transcoder"}),"\n",(0,s.jsx)(o(),{method:"put",path:"/api/transcoders/{transcoderId}",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"Make changes to the configuration of an existing Transcoder. Changes should take effect without requiring a server restart except for DNS prefix and cluster, which can only be updated when the transcoder is in a shutdown state."}),"\n",(0,s.jsx)(t.p,{children:"Changing the profile will require either a profile id or the height, frameRate, and passThrough. If you specify both, only the profile will be used. See the 'List Transcoder Profiles' endpoint to find available Transcoder profiles."}),"\n",(0,s.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(c(),{parameters:[{name:"transcoderId",in:"path",required:!0,schema:{type:"string"},"x-position":2}]}),"\n",(0,s.jsx)(p(),{title:"Body",body:{"x-name":"model",content:{"application/json":{schema:{type:"object",additionalProperties:!1,properties:{name:{type:"string",description:"Update display name for transcoder.",nullable:!0},dnsPrefix:{type:"string",description:"Update DNS prefix for the transcoder publisher. Used to construct the DNS name which follows the format of `dnsPrefix`-`accountId`.transcoder.millicast.com.",nullable:!0},cluster:{type:"string",description:"Update cluster that transcoder will be deployed to.",nullable:!0},height:{type:"integer",description:"Update resolution of input stream specified in video height. New default profile will be selected unless specified.",nullable:!0},frameRate:{type:"integer",description:"Update frame rate of input stream. New default profile will be selected unless specified.",nullable:!0},profile:{type:"string",description:"Specify a profile id to select the corresponding transcoder profile. You can retrieve all system pre-defined profile ids by calling the \u2019List Transcoder Profiles\u2019 endpoint.",nullable:!0},passThrough:{type:"boolean",description:"Update whether the top layer is passed through or transcoded.",nullable:!0}},title:"UpdateTranscoder"},examples:{simple:{summary:"simple",value:{name:"simple_transcoder",dnsPrefix:"abcd-efgh",cluster:"phx-1",height:240,frameRate:60,passThrough:!0}}}}},required:!0,"x-position":1}}),"\n",(0,s.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"success",minLength:1},data:{type:"object",additionalProperties:!1,properties:{transcoderId:{type:"string",description:"A unique identifier for a transcoder."},name:{type:"string",description:"A label to help distinguish between multiple transcoders."},cluster:{type:"string",description:"The cluster region used as the origin for ingesting the source stream."},dnsName:{type:"string",description:"A DNS record for routing to the transcode server. It follows the pattern: `dnsPrefix`-`accountId`.transcoder.millicast.com."},profile:{description:"Configuration for the output stream from the Transcoder. This may be a pre-defined profile or derived from custom resolution and frame rate settings.",oneOf:[{type:"object",additionalProperties:!1,properties:{profileId:{type:"string",description:"A unique identifier for the profile configuration."},name:{type:"string",description:"Name of the profile."},description:{type:"string",description:"Description to identify the purpose of the profile."},height:{type:"integer",description:"The maximum height to use for the frame resolution."},frameRate:{type:"integer",description:"The targeted frames per second."},passThrough:{type:"boolean",description:"Indicates that the top layer is used as is and bypasses transcoding without additional processing."},layers:{type:"array",description:"The layers the Transcoder will produce for distribution. These values are pre-determined following the Millicast bitrate ladder as step-down layers from the overall Transcoder configuration.",items:{type:"object",additionalProperties:!1,properties:{height:{type:"integer",description:"The height for this layer.",format:"int32",nullable:!0},width:{type:"integer",description:"The width for this layer.",format:"int32",nullable:!0},fps:{type:"integer",description:"The target frames-per-second for this layer.",format:"int32",nullable:!0},codec:{type:"string",description:"The codec used for this layer."},bitrate:{type:"integer",description:"The target bitrate for this layer.",format:"int32",nullable:!0},intraPeriod:{type:"integer",description:"The I-Frame interval for this layer.",format:"int32",nullable:!0}},title:"TranscoderProfileLayer"}}},title:"ProfileResponse"}]},createdOn:{type:"string",description:"A timestamp for when this Transcoder was created.",format:"date-time"},endedOn:{type:"string",description:"A timestamp for when this Transcoder was shutdown.",format:"date-time",nullable:!0},instance:{description:"Information on the most recent transcoder instance. The transcoder may run multiple instances to support the scale of the broadcast streams.",nullable:!0,oneOf:[{type:"object",additionalProperties:!1,properties:{transcoderId:{type:"string",description:"The unique identifier of the Transcoder."},id:{type:"string",description:"The unique identifier for this instance of the Transcoder."},publicIp:{type:"string",description:"The public IP address for the host that is processing the stream."},dnsName:{type:"string",description:"A DNS record for routing to the transcoder instance server(s). It follows the pattern: `dnsPrefix`-`accountId`.transcoder.millicast.com."},createdOn:{type:"string",description:"A timestamp for when this Transcoder instance was created.",format:"date-time"},endedOn:{type:"string",description:"A timestamp for when this Transcoder instance was shutdown.",format:"date-time",nullable:!0},status:{description:"The status for this Transcoder instance.",oneOf:[{type:"string",description:"","x-enumNames":["Provisioning","Active","Error","Shutdown","Deleted","ShuttingDown","Deleting","Queued","ActiveError","ShutdownError","DeletingError"],enum:["Provisioning","Active","Error","Shutdown","Deleted","ShuttingDown","Deleting","Queued","ActiveError","ShutdownError","DeletingError"],title:"InstanceStatus"}]}},title:"InstanceResponse"}]},status:{description:"The status for this Transcoder.",oneOf:[{type:"string",description:"","x-enumNames":["Provisioning","Active","Error","Shutdown","Deleted","ShuttingDown","Deleting","Queued"],enum:["Provisioning","Active","Error","Shutdown","Deleted","ShuttingDown","Deleting","Queued"],title:"TranscoderDisplayStatus"}]},publishUrls:{description:"The discrete ingest URLs for each broadcast protocol (RTMP, RTMPS, SRT).",oneOf:[{type:"object",additionalProperties:!1,properties:{rtmp:{type:"string"},rtmps:{type:"string"},srt:{type:"string"}},title:"PublishUrlsResponse"}]}},title:"RecordResponse"}},title:"SuccessResponseTranscoderRecord"},examples:{simple:{summary:"simple",value:{status:"success",data:{transcoderId:"abcd-efgh",name:"simple_transcoder",cluster:"phx-1",dnsName:"abcd-efgh-ijkl.transcoder.millicast.com",profile:{profileId:"simple_profile",name:"simple profile",description:"simple profile",height:240,frameRate:60,passThrough:!0,layers:[{height:240,fps:24,codec:"h264",bitrate:350,intraPeriod:24}]},createdOn:"2024-02-08T04:55:48.449Z",instance:{id:"mnop-qrst",publicIp:"123.45.67.89",dnsName:"abcd-efgh-ijkl.transcoder.millicast.com",createdOn:"2024-02-08T04:55:48.449Z",status:"Active"},status:"Active",publishUrls:{rtmp:"rtmp://abcd-efgh-ijkl.transcoder.millicast.com:1935/v2/pub",rtmps:"rtmps://abcd-efgh-ijkl.transcoder.millicast.com:443/v2/pub",srt:"srt://abcd-efgh-ijkl.transcoder.millicast.com:10000"}}}}}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"fail",minLength:1},data:{}},title:"FailResponse"}}}},default:{description:"Server Error",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","message"],properties:{status:{type:"string",default:"error",minLength:1},message:{type:"string",minLength:1},code:{type:"integer",format:"int32",nullable:!0},data:{nullable:!0}},title:"ErrorResponse"},examples:{general:{summary:"general",value:{status:"error",message:"simple error reason",code:500,data:{additional:"other data here (not actual key)"}}}}}}}}})]})}function x(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}}}]);