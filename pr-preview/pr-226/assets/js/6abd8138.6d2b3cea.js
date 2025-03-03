"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["84735"],{89264:function(e,t,i){i.r(t),i.d(t,{default:()=>T,frontMatter:()=>u,metadata:()=>n,assets:()=>z,toc:()=>j,contentTitle:()=>h});var n=JSON.parse('{"id":"api/signaling/create-monetized-stream","title":"CreateMonetizedStream","description":"Creates and deploys a new monetized stream in the environment, resulting in a deployment of a signaling service.","source":"@site/theoads/api/signaling/create-monetized-stream.api.mdx","sourceDirName":"api/signaling","slug":"/api/signaling/create-monetized-stream","permalink":"/documentation/pr-preview/pr-226/theoads/api/signaling/create-monetized-stream","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"create-monetized-stream","title":"CreateMonetizedStream","description":"Creates and deploys a new monetized stream in the environment, resulting in a deployment of a signaling service.","sidebar_label":"CreateMonetizedStream","hide_title":true,"hide_table_of_contents":true,"api":"eJztVlFv2zYQ/ivEPa2AkrQB9uI3N3FbI1lsxE6xIQiGi3iR2FCkSlJ2XUP/fThRthRbGbZh2F7qB5vmHcm7j993xy3YkhwGZc1UwgguHGGgX6yhoL6TXARHWEACjnxpjScPoy2cv33HP5J86lTJa/crJSSQWhPIBHbBstQqbbY/++LZbws+zalAHpWODw8q7qokf4dNSTACH5wyGdQJ+ICBji0JkKkKGN1Duj9YkiYePdRJ6/36qmKX4omPOT4kYCqt8VETjJ5Qe6oTKHGjLcrjYA0WA9vXCazIeRUTHUiFT5q+licbl23YuzCvp58nkMDn2SUHeJhMUIGjhYP7ajapE7BOZeqVUCgryITZ6x4aN7YK/VgW05uP1xzN5ezufTO4Xnwazye/jy+78cXsZjm5Wf6NaK/jQXUC6D2FK9oMxmMorK17vrByGPiY7BxDPmhu9r67nQ4aHzF9ls6Ww/aa6f+1Uo4kw7C/xT3Ah3DuwetAsI9fKA2QAEqpWA6o5z1CNXzrEJoeCvAwBsWnR2W0R3Rc/bcOHZfqtlU91PxJBhXvBRopJJXabrxAYWgt9uISESyhjAg5CTIr5axhqBLhyFc6KJOxFdsd2CTsk0DhVWZQs9mTW6mUTjlVzDznvw/1ZLFXr6e0cipsYHT/wGg4LCiQ8/E/o0c+vLdyc1y7ljkdx5xa86SyKhZH6OMfXEX/uMz9qBw/Ksd/WDkORfsXqB61XlDILT8JSutDU14YHzg7bJy+ScKtotK2UDnNbliqs9U7qHvCXLAiogiwVFe0GVcvII+TkLQSgV9PxvPpydXkN0iAqQY5oSTXwMoqu+0kPfmGRamp01fHnb2suqlOTYdzUUQ77exU0PN6Sf7OsON8R/WOkp3XCyZ2030CdrMd77q5F3Tr0VCZJ9sg2dJg+WkyQ+nFuFQvIDj/+fT89O0gKXZLbieLpRjPpwK1tmsvNrYSwYr4ympqfYEGs2MW+USsc5XmAh31qrnncn5UzP2pmGCaD1HRxbem9HwsGhHR2dlDjkEo31tYed53F/5Pi4/j6ZtT8cE6ISmg0iQFw+OKht3Cxla0Qqds5UXXJ5rcQk7KicpjRokoNaEn4eiJHAfD6zIKTc/yAV0gKbJKyaY1aZUSt8qOgnc319OLyc1icslXxO0CUy6LzF8WVYGm5x27qdjrVwwLeNv1nf+lAUeBBPoWzkqNynBqjeS3bYU4flp7rmY5V5HRPWy3j+jpzum65umvFbm2Y/ONxNf3PT/gW7FzSXluVHQR8z5ZxufOCnUVq8ZB762T3YpxmlIZ/tT3oVfo5rPFkjXWPhGKqFKHa27+uIYRsFabe2iKWDO3BY0mqzBj37gnf/4A4fmc3Q==","sidebar_class_name":"post api-method","info_path":"theoads/api/signaling/theoads-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"signalingApi","previous":{"title":"GetMonetizedStreams","permalink":"/documentation/pr-preview/pr-226/theoads/api/signaling/get-monetized-streams"},"next":{"title":"GetMonetizedStream","permalink":"/documentation/pr-preview/pr-226/theoads/api/signaling/get-monetized-stream"}}'),a=i("85893"),s=i("50065"),r=i("72969"),o=i.n(r),d=i("11682"),p=i.n(d),m=i("99757"),l=i.n(m),g=i("6476"),c=i.n(g);i("9650"),i("97645");var y=i("46055");let u={id:"create-monetized-stream",title:"CreateMonetizedStream",description:"Creates and deploys a new monetized stream in the environment, resulting in a deployment of a signaling service.",sidebar_label:"CreateMonetizedStream",hide_title:!0,hide_table_of_contents:!0,api:"eJztVlFv2zYQ/ivEPa2AkrQB9uI3N3FbI1lsxE6xIQiGi3iR2FCkSlJ2XUP/fThRthRbGbZh2F7qB5vmHcm7j993xy3YkhwGZc1UwgguHGGgX6yhoL6TXARHWEACjnxpjScPoy2cv33HP5J86lTJa/crJSSQWhPIBHbBstQqbbY/++LZbws+zalAHpWODw8q7qokf4dNSTACH5wyGdQJ+ICBji0JkKkKGN1Duj9YkiYePdRJ6/36qmKX4omPOT4kYCqt8VETjJ5Qe6oTKHGjLcrjYA0WA9vXCazIeRUTHUiFT5q+licbl23YuzCvp58nkMDn2SUHeJhMUIGjhYP7ajapE7BOZeqVUCgryITZ6x4aN7YK/VgW05uP1xzN5ezufTO4Xnwazye/jy+78cXsZjm5Wf6NaK/jQXUC6D2FK9oMxmMorK17vrByGPiY7BxDPmhu9r67nQ4aHzF9ls6Ww/aa6f+1Uo4kw7C/xT3Ah3DuwetAsI9fKA2QAEqpWA6o5z1CNXzrEJoeCvAwBsWnR2W0R3Rc/bcOHZfqtlU91PxJBhXvBRopJJXabrxAYWgt9uISESyhjAg5CTIr5axhqBLhyFc6KJOxFdsd2CTsk0DhVWZQs9mTW6mUTjlVzDznvw/1ZLFXr6e0cipsYHT/wGg4LCiQ8/E/o0c+vLdyc1y7ljkdx5xa86SyKhZH6OMfXEX/uMz9qBw/Ksd/WDkORfsXqB61XlDILT8JSutDU14YHzg7bJy+ScKtotK2UDnNbliqs9U7qHvCXLAiogiwVFe0GVcvII+TkLQSgV9PxvPpydXkN0iAqQY5oSTXwMoqu+0kPfmGRamp01fHnb2suqlOTYdzUUQ77exU0PN6Sf7OsON8R/WOkp3XCyZ2030CdrMd77q5F3Tr0VCZJ9sg2dJg+WkyQ+nFuFQvIDj/+fT89O0gKXZLbieLpRjPpwK1tmsvNrYSwYr4ympqfYEGs2MW+USsc5XmAh31qrnncn5UzP2pmGCaD1HRxbem9HwsGhHR2dlDjkEo31tYed53F/5Pi4/j6ZtT8cE6ISmg0iQFw+OKht3Cxla0Qqds5UXXJ5rcQk7KicpjRokoNaEn4eiJHAfD6zIKTc/yAV0gKbJKyaY1aZUSt8qOgnc319OLyc1icslXxO0CUy6LzF8WVYGm5x27qdjrVwwLeNv1nf+lAUeBBPoWzkqNynBqjeS3bYU4flp7rmY5V5HRPWy3j+jpzum65umvFbm2Y/ONxNf3PT/gW7FzSXluVHQR8z5ZxufOCnUVq8ZB762T3YpxmlIZ/tT3oVfo5rPFkjXWPhGKqFKHa27+uIYRsFabe2iKWDO3BY0mqzBj37gnf/4A4fmc3Q==",sidebar_class_name:"post api-method",info_path:"theoads/api/signaling/theoads-api",custom_edit_url:null,hide_send_button:!0},h=void 0,z={},j=[];function f(e){let t={p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"CreateMonetizedStream"}),"\n",(0,a.jsx)(o(),{method:"post",path:"/monetized-streams",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Creates and deploys a new monetized stream in the environment, resulting in a deployment of a signaling service."}),"\n",(0,a.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(p(),{parameters:[]}),"\n",(0,a.jsx)(l(),{title:"Body",body:{description:"The monetized stream configuration",required:!0,content:{"application/json":{schema:{properties:{name:{type:"string"},version:{type:"string"},streamId:{type:"string"},streamType:{enum:["LIVE","VOD"],type:"string",title:"MonetizedStreamType"},origin:{type:"string"},segmentOrigin:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string",title:"MonetizedStreamLayout"},assetKey:{type:"string"},networkCode:{type:"string"},originPath:{type:"string"},assetURI:{type:"string"},backdropURI:{type:"string"}},required:["streamId","origin","segmentOrigin","layout"],type:"object",additionalProperties:!1,title:"IMonetizedStream",description:"The monetized stream configuration"}}}}}),"\n",(0,a.jsx)(c(),{id:void 0,label:void 0,responses:{201:{description:"Created",content:{"application/json":{schema:{properties:{id:{type:"string"},state:{type:"string",enum:["created","deleted"]},type:{type:"string",enum:["monetized-stream"],nullable:!1},payload:{properties:{name:{type:"string"},version:{type:"string"},streamId:{type:"string"},streamType:{enum:["LIVE","VOD"],type:"string",title:"MonetizedStreamType"},origin:{type:"string"},segmentOrigin:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string",title:"MonetizedStreamLayout"},assetKey:{type:"string"},networkCode:{type:"string"},originPath:{type:"string"},assetURI:{type:"string"},backdropURI:{type:"string"}},required:["streamId","origin","segmentOrigin","layout"],type:"object",additionalProperties:!1,title:"IMonetizedStream"}},required:["id","state","type","payload"],type:"object",additionalProperties:!1,title:"IMonetizedStreamApiResponse"}}}}}})]})}function T(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}}}]);