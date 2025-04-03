"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["4386"],{13186:function(e,t,i){i.r(t),i.d(t,{default:()=>y,frontMatter:()=>z,metadata:()=>n,assets:()=>S,toc:()=>v,contentTitle:()=>u});var n=JSON.parse('{"id":"api/signaling/get-monetized-stream","title":"GetMonetizedStream","description":"Retrieves a single monetized stream (signaling service) based on its identifier, along with its configuration details.","source":"@site/theoads/api/signaling/get-monetized-stream.api.mdx","sourceDirName":"api/signaling","slug":"/api/signaling/get-monetized-stream","permalink":"/documentation/pr-preview/pr-253/theoads/api/signaling/get-monetized-stream","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-monetized-stream","title":"GetMonetizedStream","description":"Retrieves a single monetized stream (signaling service) based on its identifier, along with its configuration details.","sidebar_label":"GetMonetizedStream","hide_title":true,"hide_table_of_contents":true,"api":"eJzFVk1v4zYQ/SvEnBKA+WiAXnxzE2/WSDYJYmfRYhEsJuJY4kYiteTIqWvovxcjyZYjO0ALFKgPNi1yOG+G7z1qDb6kgGy9mxoYwTXxF++I7V9kZhwIC9AQKJbeRYowWsPF+bn8GIpJsKUEwgjGqthEqbgJS7xjciyrsSxzmzRpzn5ECVlDTDIqUEZlEBBs2wTWyDevSoIRRA7WpVBriIxM+zMayFUFjL5BEgiZDGgwlJOMnmvdrf44aov7pMP9rMFVeY4vOcFogXmkWkOJq9yj2QfrsDiwfa1hSSHattADpUim6Ud1yuS8g72BeTv9OgENX++vBOCwGLYsaGFwdM0mtQYfbGo/gEJpQY7vP16R48pXvItlNr27vhU0V/dPvzWD29nn8cPk+/iqH1/e380nd/N/gfa2TVRrwBiJb2h1EI8jfvPh9dKbw41vi31Azg5ON3s/PU4PTr5g8mqCLw/P16KEn5UNZKQN21PcNnjYzm3z+ib4lx+UMGhAY6zIAfOHHUI1fOs7NB1qcYjBSvZWGV2Knqv/VdJxaR87A4BaPnog/kfiYGlJUaGK1qU57bmBOoo2dZhbl6pIYWkTOlYvGMko75TlqKwhx3ZhKWiFuXeperOcNVOJdwubVq1LKUOMNo+nUjCmUbqwBXwy22o4UlIFyysYfXuWngQsiCnI+qF5zTNSX4aAezySSbQBpXBKd5LvjWPW86A/Gg4V6R2LG1LpWUNBnHnx3JS4OTZhLJwNDSmerfdS1Q3VwnJTTxVyCcXSni1/gXqn/JkgaK0KS3tDq3H1Thjtw76q30/GD9OTm8kfm6IzQkOhIZ51C9+EdkSZf57co4lqXFrYMTy4+PX04vQchjSRNm9CHiezuRo/TBXmuX+LauUrxV61Fq7QGVWgw3SfSFGrt8wmmcJAylCZ+5UILiq/UHsUi6dqgkm2z8bEh/ZOM1HSolOtgjfznCErG3cCKyH2Fv7R7Ho8PT5Vn3zo+EhGSXtC0ZLUO8UZqSUG66uoevo1tXFGNqgqYkpalTlhJBVoQUHASFxKzE0djIHJqLSyhoSHuU1IdLi9eeDp7nZ6ObmbTa7EwOTKxUTcWg6s9JELdDurr4l3qL694N8d1Lq/uP9Habf0ZPqTz8ocrZPqGpqvO6XsX90RNIz2ZfmsIfORJWK9FmBPIa9refyzotAZhJxUe+WLPdgoY7O1xg/7c/TYKf5Y/QMXOVjURohOVLjEvJJ/oOFV7r8DLlPLW02nSgHbrhsnCZW8s8PeG9c7y7mezKGu/wbA43iY","sidebar_class_name":"get api-method","info_path":"theoads/api/signaling/theoads-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"signalingApi","previous":{"title":"CreateMonetizedStream","permalink":"/documentation/pr-preview/pr-253/theoads/api/signaling/create-monetized-stream"},"next":{"title":"UpdateMonetizedStream","permalink":"/documentation/pr-preview/pr-253/theoads/api/signaling/update-monetized-stream"}}'),a=i("85893"),s=i("50065"),r=i("72969"),o=i.n(r),d=i("11682"),m=i.n(d),g=i("99757"),l=i.n(g),p=i("6476"),c=i.n(p);i("9650"),i("97645");var h=i("46055");let z={id:"get-monetized-stream",title:"GetMonetizedStream",description:"Retrieves a single monetized stream (signaling service) based on its identifier, along with its configuration details.",sidebar_label:"GetMonetizedStream",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVk1v4zYQ/SvEnBKA+WiAXnxzE2/WSDYJYmfRYhEsJuJY4kYiteTIqWvovxcjyZYjO0ALFKgPNi1yOG+G7z1qDb6kgGy9mxoYwTXxF++I7V9kZhwIC9AQKJbeRYowWsPF+bn8GIpJsKUEwgjGqthEqbgJS7xjciyrsSxzmzRpzn5ECVlDTDIqUEZlEBBs2wTWyDevSoIRRA7WpVBriIxM+zMayFUFjL5BEgiZDGgwlJOMnmvdrf44aov7pMP9rMFVeY4vOcFogXmkWkOJq9yj2QfrsDiwfa1hSSHattADpUim6Ud1yuS8g72BeTv9OgENX++vBOCwGLYsaGFwdM0mtQYfbGo/gEJpQY7vP16R48pXvItlNr27vhU0V/dPvzWD29nn8cPk+/iqH1/e380nd/N/gfa2TVRrwBiJb2h1EI8jfvPh9dKbw41vi31Azg5ON3s/PU4PTr5g8mqCLw/P16KEn5UNZKQN21PcNnjYzm3z+ib4lx+UMGhAY6zIAfOHHUI1fOs7NB1qcYjBSvZWGV2Knqv/VdJxaR87A4BaPnog/kfiYGlJUaGK1qU57bmBOoo2dZhbl6pIYWkTOlYvGMko75TlqKwhx3ZhKWiFuXeperOcNVOJdwubVq1LKUOMNo+nUjCmUbqwBXwy22o4UlIFyysYfXuWngQsiCnI+qF5zTNSX4aAezySSbQBpXBKd5LvjWPW86A/Gg4V6R2LG1LpWUNBnHnx3JS4OTZhLJwNDSmerfdS1Q3VwnJTTxVyCcXSni1/gXqn/JkgaK0KS3tDq3H1Thjtw76q30/GD9OTm8kfm6IzQkOhIZ51C9+EdkSZf57co4lqXFrYMTy4+PX04vQchjSRNm9CHiezuRo/TBXmuX+LauUrxV61Fq7QGVWgw3SfSFGrt8wmmcJAylCZ+5UILiq/UHsUi6dqgkm2z8bEh/ZOM1HSolOtgjfznCErG3cCKyH2Fv7R7Ho8PT5Vn3zo+EhGSXtC0ZLUO8UZqSUG66uoevo1tXFGNqgqYkpalTlhJBVoQUHASFxKzE0djIHJqLSyhoSHuU1IdLi9eeDp7nZ6ObmbTa7EwOTKxUTcWg6s9JELdDurr4l3qL694N8d1Lq/uP9Habf0ZPqTz8ocrZPqGpqvO6XsX90RNIz2ZfmsIfORJWK9FmBPIa9refyzotAZhJxUe+WLPdgoY7O1xg/7c/TYKf5Y/QMXOVjURohOVLjEvJJ/oOFV7r8DLlPLW02nSgHbrhsnCZW8s8PeG9c7y7mezKGu/wbA43iY",sidebar_class_name:"get api-method",info_path:"theoads/api/signaling/theoads-api",custom_edit_url:null,hide_send_button:!0},u=void 0,S={},v=[];function f(e){let t={p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"GetMonetizedStream"}),"\n",(0,a.jsx)(o(),{method:"get",path:"/monetized-streams/{monetizedStreamId}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Retrieves a single monetized stream (signaling service) based on its identifier, along with its configuration details."}),"\n",(0,a.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(m(),{parameters:[{description:"The Monetized stream identifier.",in:"path",name:"monetizedStreamId",required:!0,schema:{type:"string"}}]}),"\n",(0,a.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(c(),{id:void 0,label:void 0,responses:{200:{description:"A monetized stream",content:{"application/json":{schema:{properties:{id:{type:"string"},state:{type:"string",enum:["created","deleted"]},type:{type:"string",enum:["monetized-stream"],nullable:!1},payload:{properties:{name:{type:"string"},version:{type:"string"},streamId:{type:"string"},streamType:{enum:["LIVE","VOD"],type:"string",title:"MonetizedStreamType"},origin:{type:"string"},segmentOrigin:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string",title:"MonetizedStreamLayout"},assetKey:{type:"string"},networkCode:{type:"string"},originPath:{type:"string"},assetURI:{type:"string"},backdropURI:{type:"string"}},required:["streamId","origin","segmentOrigin","layout"],type:"object",additionalProperties:!1,title:"IMonetizedStream"}},required:["id","state","type","payload"],type:"object",additionalProperties:!1,title:"IMonetizedStreamApiResponse"}}}}}})]})}function y(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}}}]);