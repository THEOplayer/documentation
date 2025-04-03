"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["15698"],{50737:function(e,t,a){a.r(t),a.d(t,{default:()=>b,frontMatter:()=>f,metadata:()=>i,assets:()=>z,toc:()=>I,contentTitle:()=>h});var i=JSON.parse('{"id":"api/signaling/delete-monetized-stream-breaks","title":"DeleteMonetizedStreamBreaks","description":"Deletes an adbreak linked to the monetized stream","source":"@site/theoads/api/signaling/delete-monetized-stream-breaks.api.mdx","sourceDirName":"api/signaling","slug":"/api/signaling/delete-monetized-stream-breaks","permalink":"/documentation/pr-preview/pr-254/theoads/api/signaling/delete-monetized-stream-breaks","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-monetized-stream-breaks","title":"DeleteMonetizedStreamBreaks","description":"Deletes an adbreak linked to the monetized stream","sidebar_label":"DeleteMonetizedStreamBreaks","hide_title":true,"hide_table_of_contents":true,"api":"eJydVk1v2zgQ/SvEnFqAjrMB9qKbWmtbo2kSxA6wi8AIxuLYYiORKkkl6xX034uRLFuxtcBufDFNcj7ezHtD12BLchi0NXMFEcwop0DfraGg/yG1CI6w+OQInz1IcORLazx5iGq4urzkL0U+dbpkDxBBLIreVvjWGCSk1gQygW9jWeY6beNNf3g2qcGnGRXIq9JxNkF3AUrc5RbV+YFu98KuJIjAB6fNFhoJPqALMww0ekpGjZ9J2FhXYIAIFAaaBF0QG6iqq8vAwlTFmtwbC1ut8/a6t5VLx0PnuLNVC59MVUD0CIv5zZfrBCTMbh8+tYvrxdf4LnmKZ8f159ubZXKzhJU8yzjokPPGSaOuu0CNBPSewsP9fDSf9vDpmXajp4bCq3XPT6lV43DWmD4rZ8tx9w3T5GelHSlGqhUMOzMo6xGWXf+gNIAEVErzGeZ3g4ZvMPd0xDyPVUtITqVzcN7Rvs6oJuv27kqCqfIcuVmdw44w44TozVNHGIgRqFYXClaNHKffCeyeu/sU+1it8QjwU2xxqe/3WoOGP/JEZ51OvUAjULUQRa7NMykRrAgZjckw4NZzbgfSTDrWcEKe0srpsIPocSWhRIcFBXJ8/1Tiy4zE9xPvQisyQW80uQsGyfdKDBlIMFgwsuItU+cKhgULriI5GARnxa3HfO6R/09fKwkFhczyuOvaCrJzHMH0kOakA+an9VnmzbQNO60P8RtuMLmXvmCVy9kZlnr68hs0g/ouOK1uimGpv9EurjjwIctu8wjxz0l8N598S/7qq5oRKnIt37TZ2NZ0T57l1+QWlRdxqUECJ9M17Or3i6uLSzilEPexN7lPFksR380F5rl99WJnKyZSx3+BRokCDW7PaeWleM10mgl0JBSVud0VZIIXdiO83hrMtdkKro1OyV+IBNPszIlIreueFuU5LBphnd5q05+HDIPQfmBYefbbp/9h8SWef7wQf1gnFAXUOSnB5eEpra0R1rSieEGnbeXFkd8ttpCRdqLyuCUpypzQk3C0IdeLaUshtDh4jpES20orYqLnOiXWaFT3DXu4uZ5/Tm4WyYznE798mPLo54aV1ocCzeB2J+OBnDqOicOL+6Zl9fElfd8A6DgW6O8wLXPUhlNsuVrvBfAIZwIACdGYeLu5KiE6qnAlIbM+sJu6XqOnB5c3DW//rMjtZwv3oBvDPFm057U6DPl/xfvhfi/wj+I/DKBRpL3EDOvrBfOKf4GE9iEcGVA8dd6V4PsSONax4VdmL3SuUncepymVYWB59l/qzWibJdfJMoGm+QUcC2Xu","sidebar_class_name":"delete api-method","info_path":"theoads/api/signaling/theoads-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"signalingApi","previous":{"title":"GetMonetizedStreamBreaks","permalink":"/documentation/pr-preview/pr-254/theoads/api/signaling/get-monetized-stream-breaks"},"next":{"title":"CreateMonetizedStreamOverlay","permalink":"/documentation/pr-preview/pr-254/theoads/api/signaling/create-monetized-stream-overlay"}}'),n=a("85893"),r=a("50065"),d=a("72969"),s=a.n(d),o=a("11682"),l=a.n(o),u=a("99757"),p=a.n(u),m=a("6476"),c=a.n(m);a("9650"),a("97645");var k=a("46055");let f={id:"delete-monetized-stream-breaks",title:"DeleteMonetizedStreamBreaks",description:"Deletes an adbreak linked to the monetized stream",sidebar_label:"DeleteMonetizedStreamBreaks",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v2zgQ/SvEnFqAjrMB9qKbWmtbo2kSxA6wi8AIxuLYYiORKkkl6xX034uRLFuxtcBufDFNcj7ezHtD12BLchi0NXMFEcwop0DfraGg/yG1CI6w+OQInz1IcORLazx5iGq4urzkL0U+dbpkDxBBLIreVvjWGCSk1gQygW9jWeY6beNNf3g2qcGnGRXIq9JxNkF3AUrc5RbV+YFu98KuJIjAB6fNFhoJPqALMww0ekpGjZ9J2FhXYIAIFAaaBF0QG6iqq8vAwlTFmtwbC1ut8/a6t5VLx0PnuLNVC59MVUD0CIv5zZfrBCTMbh8+tYvrxdf4LnmKZ8f159ubZXKzhJU8yzjokPPGSaOuu0CNBPSewsP9fDSf9vDpmXajp4bCq3XPT6lV43DWmD4rZ8tx9w3T5GelHSlGqhUMOzMo6xGWXf+gNIAEVErzGeZ3g4ZvMPd0xDyPVUtITqVzcN7Rvs6oJuv27kqCqfIcuVmdw44w44TozVNHGIgRqFYXClaNHKffCeyeu/sU+1it8QjwU2xxqe/3WoOGP/JEZ51OvUAjULUQRa7NMykRrAgZjckw4NZzbgfSTDrWcEKe0srpsIPocSWhRIcFBXJ8/1Tiy4zE9xPvQisyQW80uQsGyfdKDBlIMFgwsuItU+cKhgULriI5GARnxa3HfO6R/09fKwkFhczyuOvaCrJzHMH0kOakA+an9VnmzbQNO60P8RtuMLmXvmCVy9kZlnr68hs0g/ouOK1uimGpv9EurjjwIctu8wjxz0l8N598S/7qq5oRKnIt37TZ2NZ0T57l1+QWlRdxqUECJ9M17Or3i6uLSzilEPexN7lPFksR380F5rl99WJnKyZSx3+BRokCDW7PaeWleM10mgl0JBSVud0VZIIXdiO83hrMtdkKro1OyV+IBNPszIlIreueFuU5LBphnd5q05+HDIPQfmBYefbbp/9h8SWef7wQf1gnFAXUOSnB5eEpra0R1rSieEGnbeXFkd8ttpCRdqLyuCUpypzQk3C0IdeLaUshtDh4jpES20orYqLnOiXWaFT3DXu4uZ5/Tm4WyYznE798mPLo54aV1ocCzeB2J+OBnDqOicOL+6Zl9fElfd8A6DgW6O8wLXPUhlNsuVrvBfAIZwIACdGYeLu5KiE6qnAlIbM+sJu6XqOnB5c3DW//rMjtZwv3oBvDPFm057U6DPl/xfvhfi/wj+I/DKBRpL3EDOvrBfOKf4GE9iEcGVA8dd6V4PsSONax4VdmL3SuUncepymVYWB59l/qzWibJdfJMoGm+QUcC2Xu",sidebar_class_name:"delete api-method",info_path:"theoads/api/signaling/theoads-api",custom_edit_url:null,hide_send_button:!0},h=void 0,z={},I=[];function g(e){let t={p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.default,{as:"h1",className:"openapi__heading",children:"DeleteMonetizedStreamBreaks"}),"\n",(0,n.jsx)(s(),{method:"delete",path:"/monetized-streams/{monetizedStreamId}/break/{adbreakId}",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Deletes an adbreak linked to the monetized stream"}),"\n",(0,n.jsx)(k.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(l(),{parameters:[{description:"The Monetized stream identifier.",in:"path",name:"monetizedStreamId",required:!0,schema:{type:"string"}},{in:"path",name:"adbreakId",required:!0,schema:{type:"string"}}]}),"\n",(0,n.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(c(),{id:void 0,label:void 0,responses:{200:{description:"A monetized stream",content:{"application/json":{schema:{properties:{payload:{properties:{id:{type:"string"},startDate:{type:"string"},endDate:{type:"string",format:"date-time"},duration:{type:"number",format:"double"},source:{type:"string"},layout:{enum:["SINGLE","DOUBLE","LSHAPE_AD","LSHAPE_CONTENT"],type:"string",title:"MonetizedStreamLayout"},assetURI:{type:"string"},asset_key:{type:"string"},network_code:{type:"string"},backdropURI:{type:"string"}},required:["id","startDate","duration"],type:"object",additionalProperties:!1,title:"IAdBreak"},type:{type:"string",enum:["ad-break"],nullable:!1},state:{type:"string",enum:["created","deleted"]},id:{type:"string"}},required:["payload","type","state","id"],type:"object",title:"IAdBreakApiResponse"}}}}}})]})}function b(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);