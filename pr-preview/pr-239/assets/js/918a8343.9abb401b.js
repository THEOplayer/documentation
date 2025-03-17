"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["95346"],{6030:function(e,t,i){i.r(t),i.d(t,{default:()=>x,frontMatter:()=>h,metadata:()=>n,assets:()=>y,toc:()=>f,contentTitle:()=>k});var n=JSON.parse('{"id":"api/signaling/get-monetized-streams","title":"GetMonetizedStreams","description":"Retrieves all created and deployed monetized streams (signaling services) along with their configurations.","source":"@site/theoads/api/signaling/get-monetized-streams.api.mdx","sourceDirName":"api/signaling","slug":"/api/signaling/get-monetized-streams","permalink":"/documentation/pr-preview/pr-239/theoads/api/signaling/get-monetized-streams","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-monetized-streams","title":"GetMonetizedStreams","description":"Retrieves all created and deployed monetized streams (signaling services) along with their configurations.","sidebar_label":"GetMonetizedStreams","hide_title":true,"hide_table_of_contents":true,"api":"eJy9Vk1vIkcQ/SutOu1KY+xYyoUbsQmLTAAZvEpkWVF5upjpdU/3bHcNDkHz36OaGT4W8CFSFA4w0F1dr+q9V80WfEkB2Xg31tCHEfFv3hGbv0kvOBAWERIIFEvvIkXob+H25kY+NMU0mFIioQ8TE1n5lSp2wSruo1PvmBxLEJalNWmT7vpblMgtxDSnAuXJMBVNijIIKjZtQqPlnTclQR8iB+MyqBOIjEznKwmQqwroP0MaCJk0JKDJkjy91Em3++OofQVXbQXwkoCrrMVXS9BfoY1UJ1DixnrU52AdFheOrxNYU4imrfhCKZJp/FGdsrjsYO9gTsZfh5DA19m9ADwthg0LWjjhsjmkTsAHk5kPoFBWkOPZxzssbnzFx1gW4+loImjuZ0+/NA+TxZfBfPjn4P7wfDebLofT5b9AO2kT1QlgjMQPtLmIxxG/+/B25/XlxrfFzpHzi8vN2U+P44uLr5i+6eDLy+u1OON7ZQJpacOexX2DT9u5b96hCf71G6UMCaDWRnyBdn4kqEZvhw6NT1p0hsFI9tYZXYqDVv+rpIPSPHYDAfaGAgwBN1DLKzkZDo/EwdCaokJrVWdLhU4rTaX1G9Lnc0N9iiZzaI3LVKSwNinFzwqtd5l6N5wrzskElXq3MlnVTrDYk6Ixi9KJPeirxd7HkdIqGN5A//lF+hKwIKYQ2+8Fce5lCGbETdtEMXB9OhBiQ2tYt3FbqIKVbVia6/VPUB+lWchka8cCluaBNoPqBxG2P0LSDQ34/WowH189DP+ABMR8kBNqCg3Jxq18E9qRsvwynKGOalAaOBoucPtz77Z3A6cULHNSu5DH4WKpBvOxsOHfo9r4SrHveGloKdBhRuekJOo9N2muMFBHnYg7yuA/Z6unhpjmZ4eo1If2PtFR0qJTrVt265wjKxOPAqso5+7gf1qMBuPPPfWrD0oTo7GklbQnFI0KlHciDrXGYHwV1YHmprZWN1XEjBJVWsJIKtCKgoCRuIyYmzoYg+g0q4wmUZY1KYnm91MenqaT8d1wuhjeixHknsNUJqMQVvrIBbqj3SNitVelOtyuPzC1PVyX/7NvWk0y/cXXpUXjpKRG29vOCud3YxRT5T6yLG63rxjpKdi6lp+/VxQ6owkT7fX5LDdwp2rxzpvMdBikKZViuTXaqjXGyd+E+tieo+ES6vofT3EHmw==","sidebar_class_name":"get api-method","info_path":"theoads/api/signaling/theoads-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"signalingApi","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-239/theoads/api/signaling/theoads-api"},"next":{"title":"CreateMonetizedStream","permalink":"/documentation/pr-preview/pr-239/theoads/api/signaling/create-monetized-stream"}}'),a=i("85893"),s=i("50065"),r=i("72969"),o=i.n(r),d=i("11682"),l=i.n(d),p=i("99757"),m=i.n(p),g=i("6476"),u=i.n(g);i("9650"),i("97645");var c=i("46055");let h={id:"get-monetized-streams",title:"GetMonetizedStreams",description:"Retrieves all created and deployed monetized streams (signaling services) along with their configurations.",sidebar_label:"GetMonetizedStreams",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vk1vIkcQ/SutOu1KY+xYyoUbsQmLTAAZvEpkWVF5upjpdU/3bHcNDkHz36OaGT4W8CFSFA4w0F1dr+q9V80WfEkB2Xg31tCHEfFv3hGbv0kvOBAWERIIFEvvIkXob+H25kY+NMU0mFIioQ8TE1n5lSp2wSruo1PvmBxLEJalNWmT7vpblMgtxDSnAuXJMBVNijIIKjZtQqPlnTclQR8iB+MyqBOIjEznKwmQqwroP0MaCJk0JKDJkjy91Em3++OofQVXbQXwkoCrrMVXS9BfoY1UJ1DixnrU52AdFheOrxNYU4imrfhCKZJp/FGdsrjsYO9gTsZfh5DA19m9ADwthg0LWjjhsjmkTsAHk5kPoFBWkOPZxzssbnzFx1gW4+loImjuZ0+/NA+TxZfBfPjn4P7wfDebLofT5b9AO2kT1QlgjMQPtLmIxxG/+/B25/XlxrfFzpHzi8vN2U+P44uLr5i+6eDLy+u1OON7ZQJpacOexX2DT9u5b96hCf71G6UMCaDWRnyBdn4kqEZvhw6NT1p0hsFI9tYZXYqDVv+rpIPSPHYDAfaGAgwBN1DLKzkZDo/EwdCaokJrVWdLhU4rTaX1G9Lnc0N9iiZzaI3LVKSwNinFzwqtd5l6N5wrzskElXq3MlnVTrDYk6Ixi9KJPeirxd7HkdIqGN5A//lF+hKwIKYQ2+8Fce5lCGbETdtEMXB9OhBiQ2tYt3FbqIKVbVia6/VPUB+lWchka8cCluaBNoPqBxG2P0LSDQ34/WowH189DP+ABMR8kBNqCg3Jxq18E9qRsvwynKGOalAaOBoucPtz77Z3A6cULHNSu5DH4WKpBvOxsOHfo9r4SrHveGloKdBhRuekJOo9N2muMFBHnYg7yuA/Z6unhpjmZ4eo1If2PtFR0qJTrVt265wjKxOPAqso5+7gf1qMBuPPPfWrD0oTo7GklbQnFI0KlHciDrXGYHwV1YHmprZWN1XEjBJVWsJIKtCKgoCRuIyYmzoYg+g0q4wmUZY1KYnm91MenqaT8d1wuhjeixHknsNUJqMQVvrIBbqj3SNitVelOtyuPzC1PVyX/7NvWk0y/cXXpUXjpKRG29vOCud3YxRT5T6yLG63rxjpKdi6lp+/VxQ6owkT7fX5LDdwp2rxzpvMdBikKZViuTXaqjXGyd+E+tieo+ES6vofT3EHmw==",sidebar_class_name:"get api-method",info_path:"theoads/api/signaling/theoads-api",custom_edit_url:null,hide_send_button:!0},k=void 0,y={},f=[];function v(e){let t={p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.default,{as:"h1",className:"openapi__heading",children:"GetMonetizedStreams"}),"\n",(0,a.jsx)(o(),{method:"get",path:"/monetized-streams",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Retrieves all created and deployed monetized streams (signaling services) along with their configurations."}),"\n",(0,a.jsx)(c.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(l(),{parameters:[]}),"\n",(0,a.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"List of monetized streams",content:{"application/json":{schema:{items:{properties:{id:{type:"string"},state:{type:"string",enum:["created","deleted"]},type:{type:"string",enum:["monetized-stream"],nullable:!1},payload:{properties:{name:{type:"string"},version:{type:"string"},streamId:{type:"string"},streamType:{enum:["LIVE","VOD"],type:"string",title:"MonetizedStreamType"},origin:{type:"string"},segmentOrigin:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string",title:"MonetizedStreamLayout"},assetKey:{type:"string"},networkCode:{type:"string"},originPath:{type:"string"},assetURI:{type:"string"},backdropURI:{type:"string"}},required:["streamId","origin","segmentOrigin","layout"],type:"object",additionalProperties:!1,title:"IMonetizedStream"}},required:["id","state","type","payload"],type:"object",additionalProperties:!1,title:"IMonetizedStreamApiResponse"},type:"array"}}}}}})]})}function x(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}}}]);