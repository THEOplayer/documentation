"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["1236"],{53148:function(e,t,i){i.r(t),i.d(t,{default:()=>f,frontMatter:()=>h,metadata:()=>n,assets:()=>S,toc:()=>j,contentTitle:()=>v});var n=JSON.parse('{"id":"api/signaling/delete-monetized-stream","title":"DeleteMonetizedStream","description":"Deletes a single monetized stream (signaling service) based on its identifier.","source":"@site/theoads/api/signaling/delete-monetized-stream.api.mdx","sourceDirName":"api/signaling","slug":"/api/signaling/delete-monetized-stream","permalink":"/documentation/pr-preview/pr-234/theoads/api/signaling/delete-monetized-stream","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-monetized-stream","title":"DeleteMonetizedStream","description":"Deletes a single monetized stream (signaling service) based on its identifier.","sidebar_label":"DeleteMonetizedStream","hide_title":true,"hide_table_of_contents":true,"api":"eJy1Vttu4zYQ/RVinhKAcdIAffGbG6u7QryxETuLFougmIgTiRuK1JKUU9fQvxcj+RbZBlqg9YNNi5c5Z3jOjNbgKvIYtbOpgiGMyVCkL85S1H+RmkdPWIIET6FyNlCA4Rpub274R1HIvK54Lwxh+gYSMmcj2cizWFVGZ+3J198DL1lDyAoqkUeV57hRdwdqxd9xVREMIUSvbQ6NhBAx0vGMBLJ1CcNvkHnCSAokqBa3gudGblaf31Vu2V2Fjt6zBFsbgy+GYPiKJlAjocKVcaiOwVosTxzfSFiSD7ojeoIKR0rP8eTJxQb2FuYk/ZqAhK/TMQPsk4k6MlroXVV7SCPBeZ3rM1AoL8nG6fkVBleujodY5unDpwmjGU+ffmkHk/nn0Sz5YzTej++mD4vkYfEv0E66QI0EDIHiPa1O4rEU351/u3PqdOI7sjOMxcnp9uynx/Tk5Atmb8q76vR8w8r/UWtPitOwu8Vdgvvp3CVvnwT38p2yCBJQKc12QDM7EFSrt32G0r73+hg0R++csQmx1+p/FXRU6ceN4aHhj+yZvSsTQaAI2uaGxM5TosuRuAg6t2i0zUUgv9QZXYoXDKSEs0LHILQiG/WrJj9gIpgHZrcDcjXfeTNQVnsdVzD89sxcPZYUyfP6fhFaFCS+9KF8jMSah4q1IjdW3heE+f5+9ymPviZ5ULr6EnmWUFIsHJfPrgy1N8JihOt+rQnX66NoTasiv9xSqr3hrVjp6+VP0BxkYM4guiqElb6n1aj+oPnu4Z7Yb1ejWXp1n/y+5V0QKvKtprR9de3WjQYWn5MpqiBGlYaDWga3Pw9uBzfQVwBnervlMZkvxGiWCjTGvQexcrWITnTVWaBVokSL+bFKghTvhc4KgZ6Eosq4FXspCPcqjvQTBiLBrDiWWuZ8155U4LBoRWfO7XwsMAodDjbWrNod/Iv5p1F6ORC/Oi8URdSGlOD0+LJtX6zYWJBYoteuDmKvwJZbLEh7UQfMSYrKEAYSnl7JMxjel1OMLY+IPpISea0VsRSNzogttmsq8PQwSe+Sh3ky5trE3RQzLsR8YZULsUR7sLpz4YHgd+36w12t9235fzBup7xIf8bryqC2DLxV8HpjguOGG0DC8Nh0zxIKFyLvWK855JM3TcOPf9TkN/bnS+gaNZtfBx6rXUE7y/vicePnS/EPasRJUluPWTbYEk3N/0DCG3etEzWk4XeRjeEYbLdulGVUxYMTjt6TPhSUcTJJFgk0zd8lV1hu","sidebar_class_name":"delete api-method","info_path":"theoads/api/signaling/theoads-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"signalingApi","previous":{"title":"UpdateMonetizedStreamLayout","permalink":"/documentation/pr-preview/pr-234/theoads/api/signaling/update-monetized-stream-layout"},"next":{"title":"CreateMonetizedStreamBreak","permalink":"/documentation/pr-preview/pr-234/theoads/api/signaling/create-monetized-stream-break"}}'),a=i("85893"),s=i("50065"),r=i("72969"),d=i.n(r),o=i("11682"),l=i.n(o),p=i("99757"),g=i.n(p),m=i("6476"),u=i.n(m);i("9650"),i("97645");var c=i("46055");let h={id:"delete-monetized-stream",title:"DeleteMonetizedStream",description:"Deletes a single monetized stream (signaling service) based on its identifier.",sidebar_label:"DeleteMonetizedStream",hide_title:!0,hide_table_of_contents:!0,api:"eJy1Vttu4zYQ/RVinhKAcdIAffGbG6u7QryxETuLFougmIgTiRuK1JKUU9fQvxcj+RbZBlqg9YNNi5c5Z3jOjNbgKvIYtbOpgiGMyVCkL85S1H+RmkdPWIIET6FyNlCA4Rpub274R1HIvK54Lwxh+gYSMmcj2cizWFVGZ+3J198DL1lDyAoqkUeV57hRdwdqxd9xVREMIUSvbQ6NhBAx0vGMBLJ1CcNvkHnCSAokqBa3gudGblaf31Vu2V2Fjt6zBFsbgy+GYPiKJlAjocKVcaiOwVosTxzfSFiSD7ojeoIKR0rP8eTJxQb2FuYk/ZqAhK/TMQPsk4k6MlroXVV7SCPBeZ3rM1AoL8nG6fkVBleujodY5unDpwmjGU+ffmkHk/nn0Sz5YzTej++mD4vkYfEv0E66QI0EDIHiPa1O4rEU351/u3PqdOI7sjOMxcnp9uynx/Tk5Atmb8q76vR8w8r/UWtPitOwu8Vdgvvp3CVvnwT38p2yCBJQKc12QDM7EFSrt32G0r73+hg0R++csQmx1+p/FXRU6ceN4aHhj+yZvSsTQaAI2uaGxM5TosuRuAg6t2i0zUUgv9QZXYoXDKSEs0LHILQiG/WrJj9gIpgHZrcDcjXfeTNQVnsdVzD89sxcPZYUyfP6fhFaFCS+9KF8jMSah4q1IjdW3heE+f5+9ymPviZ5ULr6EnmWUFIsHJfPrgy1N8JihOt+rQnX66NoTasiv9xSqr3hrVjp6+VP0BxkYM4guiqElb6n1aj+oPnu4Z7Yb1ejWXp1n/y+5V0QKvKtprR9de3WjQYWn5MpqiBGlYaDWga3Pw9uBzfQVwBnervlMZkvxGiWCjTGvQexcrWITnTVWaBVokSL+bFKghTvhc4KgZ6Eosq4FXspCPcqjvQTBiLBrDiWWuZ8155U4LBoRWfO7XwsMAodDjbWrNod/Iv5p1F6ORC/Oi8URdSGlOD0+LJtX6zYWJBYoteuDmKvwJZbLEh7UQfMSYrKEAYSnl7JMxjel1OMLY+IPpISea0VsRSNzogttmsq8PQwSe+Sh3ky5trE3RQzLsR8YZULsUR7sLpz4YHgd+36w12t9235fzBup7xIf8bryqC2DLxV8HpjguOGG0DC8Nh0zxIKFyLvWK855JM3TcOPf9TkN/bnS+gaNZtfBx6rXUE7y/vicePnS/EPasRJUluPWTbYEk3N/0DCG3etEzWk4XeRjeEYbLdulGVUxYMTjt6TPhSUcTJJFgk0zd8lV1hu",sidebar_class_name:"delete api-method",info_path:"theoads/api/signaling/theoads-api",custom_edit_url:null,hide_send_button:!0},v=void 0,S={},j=[];function y(e){let t={p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.default,{as:"h1",className:"openapi__heading",children:"DeleteMonetizedStream"}),"\n",(0,a.jsx)(d(),{method:"delete",path:"/monetized-streams/{monetizedStreamId}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Deletes a single monetized stream (signaling service) based on its identifier."}),"\n",(0,a.jsx)(c.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(l(),{parameters:[{description:"The Monetized stream identifier.",in:"path",name:"monetizedStreamId",required:!0,schema:{type:"string"}}]}),"\n",(0,a.jsx)(g(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Ok",content:{"application/json":{schema:{properties:{id:{type:"string"},state:{type:"string",enum:["created","deleted"]},type:{type:"string",enum:["monetized-stream"],nullable:!1},payload:{properties:{name:{type:"string"},version:{type:"string"},streamId:{type:"string"},streamType:{enum:["LIVE","VOD"],type:"string",title:"MonetizedStreamType"},origin:{type:"string"},segmentOrigin:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string",title:"MonetizedStreamLayout"},assetKey:{type:"string"},networkCode:{type:"string"},originPath:{type:"string"},assetURI:{type:"string"},backdropURI:{type:"string"}},required:["streamId","origin","segmentOrigin","layout"],type:"object",additionalProperties:!1,title:"IMonetizedStream"}},required:["id","state","type","payload"],type:"object",additionalProperties:!1,title:"IMonetizedStreamApiResponse"}}}}}})]})}function f(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}}}]);