"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["11800"],{33901:function(e,t,a){a.r(t),a.d(t,{default:()=>z,frontMatter:()=>h,metadata:()=>i,assets:()=>x,toc:()=>b,contentTitle:()=>v});var i=JSON.parse('{"id":"api/transcoder-delete-transcoder","title":"Delete Transcoder","description":"Delete the configuration of a Transcoder and any instances for it for the given transcoderId. If the Transcoder is still running it will be shutdown immediately.","source":"@site/millicast/api/transcoder-delete-transcoder.api.mdx","sourceDirName":"api","slug":"/api/transcoder-delete-transcoder","permalink":"/documentation/pr-preview/pr-255/millicast/api/transcoder-delete-transcoder","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"transcoder-delete-transcoder","title":"Delete Transcoder","description":"Delete the configuration of a Transcoder and any instances for it for the given transcoderId. If the Transcoder is still running it will be shutdown immediately.","sidebar_label":"Delete Transcoder","hide_title":true,"hide_table_of_contents":true,"api":"eJzVVktv20YQ/ivT8aFJy0pO2l50cxwHMJC2QeycJMEYkUNx4+UuvTvrRCD434MhJZF+5NAeCuQkanee38x8sy0KbSMulngdyMXcFxxwnWHBMQ+mEeMdLvAtWxYGqRhy70qzTYH0CnwJBKMmkCuA3A6Mi0Iu5wilD2Ck/1H1rblnB3LUuCxmcFn2VxMzJkIUYy2E5JxxW7XwRf9vGGKVpPBfHJi65sKQsN3NMEPf8BDUZYGLSTY3Q/CT9DJsKFDNwkEzb9FRzbjAaVSYodHMG5IKMwx8l0zgAhcSEj+G57piSM7cJQZTsBNTGg7HlEezGmbMK64JFy3KrlGvUYJxW+wy/Ppb46MZbL7q1uo1Nt5Fjir++vRUfx56vkp5zjFihrl3wk5UhJrGmrzHYv45qlz71K3ffOZcMEMqit4n2Q9BMRSj/kqykad5LzEKSVJXBQlpjzQT+fZw/SQxBaukZEWPjuHWxr1nt5VKU92bHFU33lsmh12XoRixPKb6cY/Jm6OICv3xHDhvqICPfJc4yo8CUEnGfhedKRrvyNgDFHsMjlaeNAmHew5wEYIP/y8QNcdIW/5vWPA+3kdgHGw+o/tIUmduImac8LYf/9KHmmQ4+v01ZuiStbRRYHW8J/346GJSgB7NsQIZ8leqGzukt2XHgWyfaaprCjtcHA8zvCebeArDmOshOYxGrUF/AYFJq3NI6c/T0zHEsSpaK6k4gF5BxYHhhfMClEsiC7e8e9m3ytAukfMUjOx6Bjz7cHlzxXlgwcVyrdxTs1RembTo6bMnTQUW59SY+chpcd5OebNTiuv7baDWFDSsSqSJi7mqzmpjteeizHJfo7o6RHKlnTcAOI3nWEC1go+59+TkBD4pZit3ot9ned+HEHttKIOvoaBYbTyFYrZyv8B7vzUOxPfkHCUw1bpijkIq84/rby2XAjW7lEFuTX4L3sEVixi3jSr2N92bLelmHKxd7TMBoc3PEWLaaBz9pjz7cAlDRnHlXs1ghb/CeWASXqGqD90hDASOv4CupGKiBKYEx1xwsXKvZ3B+iGZYyc0ONklEF/KwcwLfM9nDoXignjyBoAl8b3yKdgd5737qZeVW7qfl+sVsNqcYWaJW7GaActa4LazwnXEPNPDlYan1xM0UOPS8bVzp++LtB+avQ91V+2kZ4dJJ8EXq0Vq5c69/rdXKNGljTaz0U3fqzqcAozXKc5+c6G7VrhvMvZqdzk51Khsfpaae2PZbfv+WefAeeBBLOzLkD/Hw2U+H8FeZN5aM07z7uWv3M7tEaoxKjlOLmVLa5L2zzrDyUccf23ZDkT8F23V6fJdY+Wu5VuIKZqDDZYuFifpdHFfAd1F88XG/HF7Cv3kqPZvY/pDcbiRSxAxveff4CdetuwwrJq2xBjyInOU5NzJRfrIEH9Df24v3F9cXuv2SQjk+UYZOzw4f6uDZ2Np2kLj2t+y6bgxV/2uMXfcNRRoD0w==","sidebar_class_name":"delete api-method","info_path":"millicast/api/millicast-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"millicastApi","previous":{"title":"Update Transcoder","permalink":"/documentation/pr-preview/pr-255/millicast/api/transcoder-update-transcoder"},"next":{"title":"Create Transcoder","permalink":"/documentation/pr-preview/pr-255/millicast/api/transcoder-create-transcoder"}}'),r=a("85893"),n=a("50065"),s=a("72969"),o=a.n(s),d=a("11682"),l=a.n(d),c=a("99757"),p=a.n(c),u=a("6476"),f=a.n(u);a("9650"),a("97645");var m=a("46055");let h={id:"transcoder-delete-transcoder",title:"Delete Transcoder",description:"Delete the configuration of a Transcoder and any instances for it for the given transcoderId. If the Transcoder is still running it will be shutdown immediately.",sidebar_label:"Delete Transcoder",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVktv20YQ/ivT8aFJy0pO2l50cxwHMJC2QeycJMEYkUNx4+UuvTvrRCD434MhJZF+5NAeCuQkanee38x8sy0KbSMulngdyMXcFxxwnWHBMQ+mEeMdLvAtWxYGqRhy70qzTYH0CnwJBKMmkCuA3A6Mi0Iu5wilD2Ck/1H1rblnB3LUuCxmcFn2VxMzJkIUYy2E5JxxW7XwRf9vGGKVpPBfHJi65sKQsN3NMEPf8BDUZYGLSTY3Q/CT9DJsKFDNwkEzb9FRzbjAaVSYodHMG5IKMwx8l0zgAhcSEj+G57piSM7cJQZTsBNTGg7HlEezGmbMK64JFy3KrlGvUYJxW+wy/Ppb46MZbL7q1uo1Nt5Fjir++vRUfx56vkp5zjFihrl3wk5UhJrGmrzHYv45qlz71K3ffOZcMEMqit4n2Q9BMRSj/kqykad5LzEKSVJXBQlpjzQT+fZw/SQxBaukZEWPjuHWxr1nt5VKU92bHFU33lsmh12XoRixPKb6cY/Jm6OICv3xHDhvqICPfJc4yo8CUEnGfhedKRrvyNgDFHsMjlaeNAmHew5wEYIP/y8QNcdIW/5vWPA+3kdgHGw+o/tIUmduImac8LYf/9KHmmQ4+v01ZuiStbRRYHW8J/346GJSgB7NsQIZ8leqGzukt2XHgWyfaaprCjtcHA8zvCebeArDmOshOYxGrUF/AYFJq3NI6c/T0zHEsSpaK6k4gF5BxYHhhfMClEsiC7e8e9m3ytAukfMUjOx6Bjz7cHlzxXlgwcVyrdxTs1RembTo6bMnTQUW59SY+chpcd5OebNTiuv7baDWFDSsSqSJi7mqzmpjteeizHJfo7o6RHKlnTcAOI3nWEC1go+59+TkBD4pZit3ot9ned+HEHttKIOvoaBYbTyFYrZyv8B7vzUOxPfkHCUw1bpijkIq84/rby2XAjW7lEFuTX4L3sEVixi3jSr2N92bLelmHKxd7TMBoc3PEWLaaBz9pjz7cAlDRnHlXs1ghb/CeWASXqGqD90hDASOv4CupGKiBKYEx1xwsXKvZ3B+iGZYyc0ONklEF/KwcwLfM9nDoXignjyBoAl8b3yKdgd5737qZeVW7qfl+sVsNqcYWaJW7GaActa4LazwnXEPNPDlYan1xM0UOPS8bVzp++LtB+avQ91V+2kZ4dJJ8EXq0Vq5c69/rdXKNGljTaz0U3fqzqcAozXKc5+c6G7VrhvMvZqdzk51Khsfpaae2PZbfv+WefAeeBBLOzLkD/Hw2U+H8FeZN5aM07z7uWv3M7tEaoxKjlOLmVLa5L2zzrDyUccf23ZDkT8F23V6fJdY+Wu5VuIKZqDDZYuFifpdHFfAd1F88XG/HF7Cv3kqPZvY/pDcbiRSxAxveff4CdetuwwrJq2xBjyInOU5NzJRfrIEH9Df24v3F9cXuv2SQjk+UYZOzw4f6uDZ2Np2kLj2t+y6bgxV/2uMXfcNRRoD0w==",sidebar_class_name:"delete api-method",info_path:"millicast/api/millicast-api",custom_edit_url:null,hide_send_button:!0},v=void 0,x={},b=[];function y(e){let t={p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Delete Transcoder"}),"\n",(0,r.jsx)(o(),{method:"delete",path:"/api/transcoders/{transcoderId}",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Delete the configuration of a Transcoder and any instances for it for the given transcoderId. If the Transcoder is still running it will be shutdown immediately."}),"\n",(0,r.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(l(),{parameters:[{name:"transcoderId",in:"path",required:!0,description:"The unique identifier for the transcoder.",schema:{type:"string"},"x-position":1}]}),"\n",(0,r.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(f(),{id:void 0,label:void 0,responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"success",minLength:1},data:{type:"boolean"}},title:"SuccessResponseBoolean"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"fail",minLength:1},data:{}},title:"FailResponse"}}}},default:{description:"Server Error",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","message"],properties:{status:{type:"string",default:"error",minLength:1},message:{type:"string",minLength:1},code:{type:"integer",format:"int32",nullable:!0},data:{nullable:!0}},title:"ErrorResponse"},examples:{general:{summary:"general",value:{status:"error",message:"simple error reason",code:500,data:{additional:"other data here (not actual key)"}}}}}}}}})]})}function z(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}}}]);