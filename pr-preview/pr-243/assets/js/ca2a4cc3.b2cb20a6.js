"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["60507"],{92397:function(e,t,i){i.r(t),i.d(t,{default:()=>S,frontMatter:()=>c,metadata:()=>a,assets:()=>z,toc:()=>v,contentTitle:()=>b});var a=JSON.parse('{"id":"api/signaling/get-monetized-stream-breaks","title":"GetMonetizedStreamBreaks","description":"Retrieves all adbreaks linked to the monetized stream","source":"@site/theoads/api/signaling/get-monetized-stream-breaks.api.mdx","sourceDirName":"api/signaling","slug":"/api/signaling/get-monetized-stream-breaks","permalink":"/documentation/pr-preview/pr-243/theoads/api/signaling/get-monetized-stream-breaks","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-monetized-stream-breaks","title":"GetMonetizedStreamBreaks","description":"Retrieves all adbreaks linked to the monetized stream","sidebar_label":"GetMonetizedStreamBreaks","hide_title":true,"hide_table_of_contents":true,"api":"eJydVk1v2zgQ/SvEnFpAjrMB9uKb2nhTo2kSxA6wiyAIxuLYYkORKjlK1mvovxcjWbZia4GivpgSOR9v5s2jtuBLCsjGu5mGCVwRf/OO2PxHes6BsPgUCF8iJBAolt5FijDZwsX5ufxpilkwpZjDBFJVdLYqNsaQQOYdk2M5jWVpTdYEG3+PYrKFmOVUoKzKIKmwaQOUuLEetSwNUxFPT5hmkzclwQQiB+PWUCcQGQNfItPgLjk9vJfAyocCGSagkWnEpiAx0FVbnZ6Fq4olhXcWvlra5nj0VciGQ1vc+KqpA7mqgMkjzGc3V9dTSODy9uFTs7ief0nvps/p5WH9+fZmMb1ZwFNykjEbtvLiqGPXbaA6AYyR+OF+NphPs/n8QpvBXUf85sPLc+b1MJwlZi86+HLYfS18+VGZQFqQGg39zvTKeoDll98pY0gAtTayh/au1/AV2kgHzLNUN8yUVHYOMATcHJ5PO9zVHfVo2dg+JeAqa1Ga1wZoCTRMkM48C4RMgkiTJVk91ckwHY/K0JF6l2IXqzEeKMQx1piW5n43hVDLLzmawHviYOiVokJrFeoGZlTWuBfSir3inIaGlHEdJcE9k0YtlSSrSFkVDG9g8viUQIkBC2IKcv5YABY5qW9H3pXR5NisDIUzQSrnSuQcEnBYCLziPX1nGvpV41BR0pOJ4wo/JVAQ517Ua01Stsb7BMZ7v6M2kzjenoSqxy0TBGZ47VBVwYoDLM349Q+oe0WYSx6t/mBpvtImrSTYPq325QHb36P0bjb6Ov2ng54TagoNM4xb+cZ01+bFl+kt6qjS0kACkkxb1Ys/zy7OzuG411LszuR+Ol+o9G4mbfdvUW18Jd1umarQaVWgw/Vp72Oi3nKT5QoDKU2l9ZuCHEflVyqatUNr3FpJbUxG8UxNMctPnKjMh/Z20FHColM+mLVx3T7nyMrEnmEVxW+X/of5VTr7eKb+8kFpYjSWtJLyiL4a75R3DXNfMRhfRXUgYYONczJBVRHXlKjSEkZSgVYUOsavibnBIQpEWq0ro0nYaE1GMkyTbdewh5vr2efpzXx6KUoilxdmItrSsNJHLtD1Tl8R9wjfkkrtb8x3/doebsLfH9OWZEz/8ri0aJzk2JB1u2P9I5ywHhKYDI3YXgJzH1kst9slRnoItq7l9Y+Kwm7ope6tSMrImyhrvZfk/4X54X43xR/VLyjDILhurJzM1CvaSp4ggebaGlCOWqR4N2OSbHsuzTIquefh5EvknYxcTRdQ1z8BJcUj0Q==","sidebar_class_name":"get api-method","info_path":"theoads/api/signaling/theoads-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"signalingApi","previous":{"title":"CreateMonetizedStreamBreak","permalink":"/documentation/pr-preview/pr-243/theoads/api/signaling/create-monetized-stream-break"},"next":{"title":"DeleteMonetizedStreamBreaks","permalink":"/documentation/pr-preview/pr-243/theoads/api/signaling/delete-monetized-stream-breaks"}}'),n=i("85893"),r=i("50065"),s=i("72969"),o=i.n(s),d=i("11682"),p=i.n(d),l=i("99757"),m=i.n(l),k=i("6476"),g=i.n(k);i("9650"),i("97645");var u=i("46055");let c={id:"get-monetized-stream-breaks",title:"GetMonetizedStreamBreaks",description:"Retrieves all adbreaks linked to the monetized stream",sidebar_label:"GetMonetizedStreamBreaks",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v2zgQ/SvEnFpAjrMB9uKb2nhTo2kSxA6wiyAIxuLYYkORKjlK1mvovxcjWbZia4GivpgSOR9v5s2jtuBLCsjGu5mGCVwRf/OO2PxHes6BsPgUCF8iJBAolt5FijDZwsX5ufxpilkwpZjDBFJVdLYqNsaQQOYdk2M5jWVpTdYEG3+PYrKFmOVUoKzKIKmwaQOUuLEetSwNUxFPT5hmkzclwQQiB+PWUCcQGQNfItPgLjk9vJfAyocCGSagkWnEpiAx0FVbnZ6Fq4olhXcWvlra5nj0VciGQ1vc+KqpA7mqgMkjzGc3V9dTSODy9uFTs7ief0nvps/p5WH9+fZmMb1ZwFNykjEbtvLiqGPXbaA6AYyR+OF+NphPs/n8QpvBXUf85sPLc+b1MJwlZi86+HLYfS18+VGZQFqQGg39zvTKeoDll98pY0gAtTayh/au1/AV2kgHzLNUN8yUVHYOMATcHJ5PO9zVHfVo2dg+JeAqa1Ga1wZoCTRMkM48C4RMgkiTJVk91ckwHY/K0JF6l2IXqzEeKMQx1piW5n43hVDLLzmawHviYOiVokJrFeoGZlTWuBfSir3inIaGlHEdJcE9k0YtlSSrSFkVDG9g8viUQIkBC2IKcv5YABY5qW9H3pXR5NisDIUzQSrnSuQcEnBYCLziPX1nGvpV41BR0pOJ4wo/JVAQ517Ua01Stsb7BMZ7v6M2kzjenoSqxy0TBGZ47VBVwYoDLM349Q+oe0WYSx6t/mBpvtImrSTYPq325QHb36P0bjb6Ov2ng54TagoNM4xb+cZ01+bFl+kt6qjS0kACkkxb1Ys/zy7OzuG411LszuR+Ol+o9G4mbfdvUW18Jd1umarQaVWgw/Vp72Oi3nKT5QoDKU2l9ZuCHEflVyqatUNr3FpJbUxG8UxNMctPnKjMh/Z20FHColM+mLVx3T7nyMrEnmEVxW+X/of5VTr7eKb+8kFpYjSWtJLyiL4a75R3DXNfMRhfRXUgYYONczJBVRHXlKjSEkZSgVYUOsavibnBIQpEWq0ro0nYaE1GMkyTbdewh5vr2efpzXx6KUoilxdmItrSsNJHLtD1Tl8R9wjfkkrtb8x3/doebsLfH9OWZEz/8ri0aJzk2JB1u2P9I5ywHhKYDI3YXgJzH1kst9slRnoItq7l9Y+Kwm7ope6tSMrImyhrvZfk/4X54X43xR/VLyjDILhurJzM1CvaSp4ggebaGlCOWqR4N2OSbHsuzTIquefh5EvknYxcTRdQ1z8BJcUj0Q==",sidebar_class_name:"get api-method",info_path:"theoads/api/signaling/theoads-api",custom_edit_url:null,hide_send_button:!0},b=void 0,z={},v=[];function h(e){let t={p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"GetMonetizedStreamBreaks"}),"\n",(0,n.jsx)(o(),{method:"get",path:"/monetized-streams/{monetizedStreamId}/break",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Retrieves all adbreaks linked to the monetized stream"}),"\n",(0,n.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(p(),{parameters:[{description:"The Monetized stream identifier.",in:"path",name:"monetizedStreamId",required:!0,schema:{type:"string"}}]}),"\n",(0,n.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(g(),{id:void 0,label:void 0,responses:{200:{description:"A monetized stream",content:{"application/json":{schema:{properties:{payload:{items:{properties:{id:{type:"string"},startDate:{type:"string"},endDate:{type:"string",format:"date-time"},duration:{type:"number",format:"double"},source:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string",title:"MonetizedStreamLayout"},assetURI:{type:"string"},asset_key:{type:"string"},network_code:{type:"string"},backdropURI:{type:"string"}},required:["id","startDate","duration"],type:"object",additionalProperties:!1,title:"IAdBreak"},type:"array"},type:{type:"string",enum:["ad-break"],nullable:!1},state:{type:"string",enum:["created","deleted"]},id:{type:"string"}},required:["payload","type","state","id"],type:"object",title:"IAdBreaksApiResponse"}}}}}})]})}function S(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);