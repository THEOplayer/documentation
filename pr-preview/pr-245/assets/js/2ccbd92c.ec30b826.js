"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["17795"],{67663:function(t,e,a){a.r(e),a.d(e,{default:()=>f,frontMatter:()=>g,metadata:()=>i,assets:()=>k,toc:()=>x,contentTitle:()=>c});var i=JSON.parse('{"id":"api/signaling/status","title":"Status","description":"Get the status of the API.","source":"@site/theoads/api/signaling/status.api.mdx","sourceDirName":"api/signaling","slug":"/api/signaling/status","permalink":"/documentation/pr-preview/pr-245/theoads/api/signaling/status","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"status","title":"Status","description":"Get the status of the API.","sidebar_label":"Status","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVN9v0zAQ/lesewLJa8ckXvJWQRnV0JhokUBTH67JNfFwbM8+d5Qq/zu6pO1KhwR5SWLfz+/77nbgA0Vk492sggLmjJwTaIiUgneJEhQ7uLq8lFdFqYwmiDEUsGhIpd5c+bXihtTkbjYCDaV3TI7FA0OwpuzDjx+SuO0glQ21KF8hSnI2Q5IhlnzxNhAUkDgaV0OngWL08eWNBpetxZUlKDhm6jTkwKalE1OX2xVF0LD2sUWGAiqfxaPTIKaJsQ3/ab+hmMzQxFmJnQD2mE2kCor7QyuHwo9lnaZ8DrfUh3B+9UAlgwasKiOgob07wWiNNpHEYOkYZnuyOnn0GTvXxD0nf2WIsU5S5z7AUkOiMkfDWyjulxoCRmyJKabhvyVuvMijJqkuIDdQwPjYZqK4GYx3kKOVOwxmvHkD3UnsuRA/cI3B3NB2kiXOEczhUFhFoRC+XUzuZhc30++gwUhPDWFFsUfbuLXvXfdYLD5OP2OV1CSYE2QLuHo7uhpdwjk6ot2Dy5fpfCHAKLTWPyW19VmxV2UkZFLoKtWiw5pU6x2x+UWVShwJ26TVU2PKRmEkVVGwftuS4x7sZGqH1rhaCTampDRSUyybF0FU6eMwa1WStOiUj6Y27nDPDbIy6cQxJ4l7KP/V/Hoyez1SH3xUFTEaS5USeES+xjvlXU/9BqPxOalnbvveuCETVU5Yk1bBEiZSkdYUpRjxq4m574MxMlWqzqYiEZE1JbnUz9qesK+3n2bvprfz6XuZFlkDWMoaEMKCT9yiO7E+rpo/qNk9r49/aHgQDdNPHgeLxknOXny7vUCPc7jU0PjEcrLbrTDR12i7To4fM8W95gWfYZXcLzt90Joo+gdtoYBJWVIQ9W/Q5kGuZ7utO52U6+kCuu43Xq7Xsg==","sidebar_class_name":"get api-method","info_path":"theoads/api/signaling/theoads-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"signalingApi","previous":{"title":"DeleteMonetizedStreamOverlay","permalink":"/documentation/pr-preview/pr-245/theoads/api/signaling/delete-monetized-stream-overlay"}}'),s=a("85893"),n=a("50065"),o=a("72969"),u=a.n(o),l=a("11682"),r=a.n(l),p=a("99757"),d=a.n(p),h=a("6476"),U=a.n(h);a("9650"),a("97645");var m=a("46055");let g={id:"status",title:"Status",description:"Get the status of the API.",sidebar_label:"Status",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVN9v0zAQ/lesewLJa8ckXvJWQRnV0JhokUBTH67JNfFwbM8+d5Qq/zu6pO1KhwR5SWLfz+/77nbgA0Vk492sggLmjJwTaIiUgneJEhQ7uLq8lFdFqYwmiDEUsGhIpd5c+bXihtTkbjYCDaV3TI7FA0OwpuzDjx+SuO0glQ21KF8hSnI2Q5IhlnzxNhAUkDgaV0OngWL08eWNBpetxZUlKDhm6jTkwKalE1OX2xVF0LD2sUWGAiqfxaPTIKaJsQ3/ab+hmMzQxFmJnQD2mE2kCor7QyuHwo9lnaZ8DrfUh3B+9UAlgwasKiOgob07wWiNNpHEYOkYZnuyOnn0GTvXxD0nf2WIsU5S5z7AUkOiMkfDWyjulxoCRmyJKabhvyVuvMijJqkuIDdQwPjYZqK4GYx3kKOVOwxmvHkD3UnsuRA/cI3B3NB2kiXOEczhUFhFoRC+XUzuZhc30++gwUhPDWFFsUfbuLXvXfdYLD5OP2OV1CSYE2QLuHo7uhpdwjk6ot2Dy5fpfCHAKLTWPyW19VmxV2UkZFLoKtWiw5pU6x2x+UWVShwJ26TVU2PKRmEkVVGwftuS4x7sZGqH1rhaCTampDRSUyybF0FU6eMwa1WStOiUj6Y27nDPDbIy6cQxJ4l7KP/V/Hoyez1SH3xUFTEaS5USeES+xjvlXU/9BqPxOalnbvveuCETVU5Yk1bBEiZSkdYUpRjxq4m574MxMlWqzqYiEZE1JbnUz9qesK+3n2bvprfz6XuZFlkDWMoaEMKCT9yiO7E+rpo/qNk9r49/aHgQDdNPHgeLxknOXny7vUCPc7jU0PjEcrLbrTDR12i7To4fM8W95gWfYZXcLzt90Joo+gdtoYBJWVIQ9W/Q5kGuZ7utO52U6+kCuu43Xq7Xsg==",sidebar_class_name:"get api-method",info_path:"theoads/api/signaling/theoads-api",custom_edit_url:null,hide_send_button:!0},c=void 0,k={},x=[];function b(t){let e={p:"p",...(0,n.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Status"}),"\n",(0,s.jsx)(u(),{method:"get",path:"/status",context:"endpoint"}),"\n",(0,s.jsx)(e.p,{children:"Get the status of the API."}),"\n",(0,s.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(r(),{parameters:[]}),"\n",(0,s.jsx)(d(),{title:"Body",body:void 0}),"\n",(0,s.jsx)(U(),{id:void 0,label:void 0,responses:{200:{description:"The status of the API.",content:{"application/json":{schema:{properties:{status:{type:"string"},error:{type:"string",nullable:!0},uptime:{type:"number",format:"double"},timestamp:{type:"number",format:"double"},version:{type:"string"}},required:["status","error","uptime","timestamp","version"],type:"object",additionalProperties:!1,title:"IStatus"}}}}}})]})}function f(t={}){let{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(b,{...t})}):b(t)}}}]);