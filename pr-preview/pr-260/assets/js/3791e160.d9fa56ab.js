"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["3426"],{14514:function(e,t,i){i.r(t),i.d(t,{default:()=>v,frontMatter:()=>h,metadata:()=>s,assets:()=>j,toc:()=>x,contentTitle:()=>N});var s=JSON.parse('{"id":"api/record-files-delete-all-record-files","title":"Delete All Files","description":"**Please refer to [Delete All Media Assets](#operation/MediaAssets_DeleteMediaAssets2)**","source":"@site/millicast/api/record-files-delete-all-record-files.api.mdx","sourceDirName":"api","slug":"/api/record-files-delete-all-record-files","permalink":"/documentation/pr-preview/pr-260/millicast/api/record-files-delete-all-record-files","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"record-files-delete-all-record-files","title":"Delete All Files","description":"**Please refer to [Delete All Media Assets](#operation/MediaAssets_DeleteMediaAssets2)**","sidebar_label":"Delete All Files","hide_title":true,"hide_table_of_contents":true,"api":"eJzNVUtv20YQ/ivT9aG2S0iyi154U90GMJA0RpScRMEYLUfUxstdZnfoRhD434NZiiJt99RD0ZOoeX7z+vaoGKuo8rX6RNqH8p2xFNUmUyVFHUzDxjuVq+vrB0sYCQLtKAB7WP9BlphgaS18oNIgLGMkjpvLC99QQHGcJ0Uvf+ztJ5Lbq+vrwkHhek0EtBZCQkEl7AQI7IKvIbIPWNFMZeoc+r5U+RTyKfzS2mkdmQoUG+8iRZUf1e1iIT8vS1u1WlMUW+0dk2MxwaaxRvdFfI1id1RR76lG+eJDQypXfvuVNKtMYVkaMUX7EAQhG8m3QxtJEHxrTaBSehwZuZVUJTJKl5uJ/XFQjxkiB+MqsacdtpZFdIZbG/eeXMV7ld90p5Cj69Z7S+hU12WKDVsaS/106snvZxMxOqd40yAKzxTgzxB8+G+7VFOMWNG/axSd8L5q0xDzH3xfWWpfTs2MY6pIIu58qJF70a+3KlOutRa30mIOLU1m8UoxGUXq5jAI1WWKvmPd2L68ihwFtKnStq4xHFR+FmbqGW1L0zaMtQ7FqWgkGiQFBEKZzlDSb4vFCHGcisyK9xRAVLCnQHDpPANqbtHCEx2u0qoM69IE0sgyMikuU5F0GwwfVL4+quXD/eOKdCBW+XrTbQQb771cbeOjrEOD0mg1x8bM+6t/TDc/L9Mlz9FKrTEtX0wx2yAY98xNzOfiN6uNlQWMPNO+VpJlALGSNey7OYVynqZEUa9Z7uLiAr5IAwt3Id9LnZYSYvLuyajEuN96DOWscNfw3lfGCR3yniByIKyNq0YjsfnoktbSjqEm12agrdFP4B2siNm4KorZX/hsKmQaoq1OlQDj9ucIsd0KDkEKy4d76CuKhbuZQaF+gbtAyFQoce9XhQkQHP0NDmsqJ05gduCISioLdzuDuwGNZNW+OcC2ZfYOfEiiQM+EdhCyB0wsAghNoGfj22gPoFP6aZbCFe6n9eZyNptj4nuZ2GPfylnjKijUO+NeeKgrmXianDAYYaCQCMy4nU/DO13Ph2Hu4v12jHDvOPiyTd0q3J2Xv9bKZJp2a03cy+fOBzj4NsAYDbX2rWN5aWTr+nA3s8VsIScqi1tjYjlpqcrV5A0cHpwXUI4jW/5vntDTATB953lj0TgpLZ3W8XSTa4WNSW/neJWpMskhRG6tUPJe7jhfq+Nxi5G+BNt1Iv7WkvDVeiNEFUxPf+tNl6k9YUkhnfITCaUttaaGR0Z7+6C8II6Hj6vPkr4VkOND169JNnxI+JMK3WES/HjsLT77J3Jdp7ITCpb/qtt0XfcDjqMj0w==","sidebar_class_name":"post api-method","info_path":"millicast/api/millicast-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"millicastApi","previous":{"title":"Delete Files","permalink":"/documentation/pr-preview/pr-260/millicast/api/record-files-delete-record-files"},"next":{"title":"List Files","permalink":"/documentation/pr-preview/pr-260/millicast/api/record-files-list-record-files"}}'),a=i("85893"),l=i("50065"),r=i("72969"),n=i.n(r),d=i("11682"),o=i.n(d),p=i("99757"),c=i.n(p),u=i("6476"),f=i.n(u);i("9650"),i("97645");var m=i("46055");let h={id:"record-files-delete-all-record-files",title:"Delete All Files",description:"**Please refer to [Delete All Media Assets](#operation/MediaAssets_DeleteMediaAssets2)**",sidebar_label:"Delete All Files",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVUtv20YQ/ivT9aG2S0iyi154U90GMJA0RpScRMEYLUfUxstdZnfoRhD434NZiiJt99RD0ZOoeX7z+vaoGKuo8rX6RNqH8p2xFNUmUyVFHUzDxjuVq+vrB0sYCQLtKAB7WP9BlphgaS18oNIgLGMkjpvLC99QQHGcJ0Uvf+ztJ5Lbq+vrwkHhek0EtBZCQkEl7AQI7IKvIbIPWNFMZeoc+r5U+RTyKfzS2mkdmQoUG+8iRZUf1e1iIT8vS1u1WlMUW+0dk2MxwaaxRvdFfI1id1RR76lG+eJDQypXfvuVNKtMYVkaMUX7EAQhG8m3QxtJEHxrTaBSehwZuZVUJTJKl5uJ/XFQjxkiB+MqsacdtpZFdIZbG/eeXMV7ld90p5Cj69Z7S+hU12WKDVsaS/106snvZxMxOqd40yAKzxTgzxB8+G+7VFOMWNG/axSd8L5q0xDzH3xfWWpfTs2MY6pIIu58qJF70a+3KlOutRa30mIOLU1m8UoxGUXq5jAI1WWKvmPd2L68ihwFtKnStq4xHFR+FmbqGW1L0zaMtQ7FqWgkGiQFBEKZzlDSb4vFCHGcisyK9xRAVLCnQHDpPANqbtHCEx2u0qoM69IE0sgyMikuU5F0GwwfVL4+quXD/eOKdCBW+XrTbQQb771cbeOjrEOD0mg1x8bM+6t/TDc/L9Mlz9FKrTEtX0wx2yAY98xNzOfiN6uNlQWMPNO+VpJlALGSNey7OYVynqZEUa9Z7uLiAr5IAwt3Id9LnZYSYvLuyajEuN96DOWscNfw3lfGCR3yniByIKyNq0YjsfnoktbSjqEm12agrdFP4B2siNm4KorZX/hsKmQaoq1OlQDj9ucIsd0KDkEKy4d76CuKhbuZQaF+gbtAyFQoce9XhQkQHP0NDmsqJ05gduCISioLdzuDuwGNZNW+OcC2ZfYOfEiiQM+EdhCyB0wsAghNoGfj22gPoFP6aZbCFe6n9eZyNptj4nuZ2GPfylnjKijUO+NeeKgrmXianDAYYaCQCMy4nU/DO13Ph2Hu4v12jHDvOPiyTd0q3J2Xv9bKZJp2a03cy+fOBzj4NsAYDbX2rWN5aWTr+nA3s8VsIScqi1tjYjlpqcrV5A0cHpwXUI4jW/5vntDTATB953lj0TgpLZ3W8XSTa4WNSW/neJWpMskhRG6tUPJe7jhfq+Nxi5G+BNt1Iv7WkvDVeiNEFUxPf+tNl6k9YUkhnfITCaUttaaGR0Z7+6C8II6Hj6vPkr4VkOND169JNnxI+JMK3WES/HjsLT77J3Jdp7ITCpb/qtt0XfcDjqMj0w==",sidebar_class_name:"post api-method",info_path:"millicast/api/millicast-api",custom_edit_url:null,hide_send_button:!0},N=void 0,j={},x=[];function D(e){let t={a:"a",admonition:"admonition",p:"p",strong:"strong",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Delete All Files"}),"\n",(0,a.jsx)(n(),{method:"post",path:"/api/record_files/delete/all",context:"endpoint"}),"\n",(0,a.jsx)(t.admonition,{title:"deprecated",type:"caution",children:(0,a.jsx)(t.p,{children:"This endpoint has been deprecated and may be replaced or removed in future versions of the API."})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["Please refer to ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/api/media-assets-delete-media-assets-2",children:"Delete All Media Assets"})]})}),"\n",(0,a.jsx)(t.p,{children:"Deletes all recorded files from storage."}),"\n",(0,a.jsx)(o(),{parameters:void 0}),"\n",(0,a.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(f(),{id:void 0,label:void 0,responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"success",minLength:1},data:{type:"boolean"}},title:"SuccessResponseBoolean"}}}},default:{description:"Server Error",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","message"],properties:{status:{type:"string",default:"error",minLength:1},message:{type:"string",minLength:1},code:{type:"integer",format:"int32",nullable:!0},data:{nullable:!0}},title:"ErrorResponse"},examples:{general:{summary:"general",value:{status:"error",message:"simple error reason",code:500,data:{additional:"other data here (not actual key)"}}}}}}}}})]})}function v(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(D,{...e})}):D(e)}}}]);