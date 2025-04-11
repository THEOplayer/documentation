"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["70103"],{21242:function(e,t,s){s.r(t),s.d(t,{default:()=>X,frontMatter:()=>y,metadata:()=>a,assets:()=>T,toc:()=>I,contentTitle:()=>f});var a=JSON.parse('{"id":"api/analytics-get-series-transcoder-minutes-for-account","title":"Get Transcoder Minutes Series","description":"List Transcoder uptime in minutes calculated between two date ranges for an account. The data will show a list of dates each with corresponding transcoder minutes for that specific day.","source":"@site/millicast/api/analytics-get-series-transcoder-minutes-for-account.api.mdx","sourceDirName":"api","slug":"/api/analytics-get-series-transcoder-minutes-for-account","permalink":"/documentation/pr-preview/pr-266/millicast/api/analytics-get-series-transcoder-minutes-for-account","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"analytics-get-series-transcoder-minutes-for-account","title":"Get Transcoder Minutes Series","description":"List Transcoder uptime in minutes calculated between two date ranges for an account. The data will show a list of dates each with corresponding transcoder minutes for that specific day.","sidebar_label":"Get Transcoder Minutes Series","hide_title":true,"hide_table_of_contents":true,"api":"eJztWNtuGzcQ/ZUp/dCkXcuy4/RBb26cBAbi1IidB9cykhF3JDHeJTfkrJ2FoH8vhnvR6pIWdYIABSoI0F44wzO3wxktFOMsqNGNOrGYVWx0ULeJSilobwo2zqqRemMCw5VHG7RLyUNZsMkJjIXc2JIpgMZMlxkypTAhfiCywA8OUmQCj3ZGAabOA1pArV1peQBXc5L3CA8myyDM3QMgZLKTm0bBAIR6Dg+G56Cd9xQKZ1NjZ8ArKC0A0c5zZAgFaTM1GlKsBjC2YwtvHdOowy8KJibL5NesIXdWExTkRbRRSFB4ujeuDPIwgeCgciXkWIF1DIFIbCLLvpFwIlsRD1SiXEEexYVnqRqt/PvhNfEleUNh5dLz2oxXzp/U/lGJKtBjTkxewrNQFnNSIxUYPZ8ik0qUkeB8LslXKlGePpfGU6pG7EvaDKF4O4rWMXHTaFyUHcCZjXdT53OM7v94fX19vX9+vn96+lEsCXpOOarRQnFV1Ci8sTOVqFpGjZSoVctEfdkvXDD1rofLpIfbFY+DTTb9kaCPlreCSpItUBDxo+FQftaRXZZaUwgqUdpZJsuyBIsiMzrG/OBTkHWLbRhu8om0BBjTNO6J2YWXXGEj+00xC9T3y43EnEvZSupFyrPorV+0r3cYmtIUy0wsDR3c3Ng3ZGc8j/GpVf5bcJv7e8K8SVzJ9V1ANqPa8EBdtA8YYlgNpRI5W2YZTjKqc2KZqFXB74K6rlySDDAEp02s6h5ZYFuC25t8zeBuN/QeJV8NUx6+0WErSLu9tWV/w3LvA/XXG8s0I99PaGP5t2O1FJcZFgVqxTEdAZ0So8nUcrl7Xc1N3ep3TSmsaW2yf1OooTEpKfqCeZE1CWLkMl6VeY6+EmPrZ4m6x6ykfhr3crVNzq0MUxeT6ry4VpupcTQ8Ot4fPtsfHl4Nh6P4/TOy57rLD4fNZ8O1z5vHQgGdqqPvp+rZd1E1jLqOvx+s59+oatl8EnW8iyp/xxTe0eeSAv9X6HIqBfI1ruwXwis0Wa9C5FWnZevIIH9PHl567/yPdUROIeCMHucLavBuOKPVuUN2Y6Vk0j/S1rOjXcTXEsDGi14AojdXEVgnnhlZ8pitM0/7cBf1dLa2xjU8BfEFeEKJTmvSc6mJFuIqKhIrnsc+khHm5AmeSLeImkvM4I6qp2pVMoF06Q1XsfJOLs4+XJL2xGp0cytFmhPPXRph102heFUdYGEOuuPsYFWwByESsbQ/Mdvq3rH0AmrOXITRgcgOcumANQYeaJcr2ajFcSl5V7uvj6YLn2jZOnT39vbgvXhsbPfk+kTHLIQQpWHqXQ4phvnEoU8HY/sLvHEzY4FdbOJqfpeOvFska/6oW7yMpgw52TIBnRl9B87CJTEbOwuy7C3em5mc+o22y8YSYJz8HCCUE8EhSOHk4gxqi8LYHg5grH6FF56QaaxEvM4NaSDA0gNI75r2hMBMwRKllI7t0QBetGhkV+2KCiYls7PQzA6e7gmz9iE7aXooBMBuqsgq0HH7/i4ytPx0c/tkMDjAEIiDROxD7cpBYWcwVq+MXZNQT9uGV0I0IfTk44Ft7NTF4DXlct7GXaS3wwhnlr1Ly+itsX3h5LaelYpykpkwl0uZdCpXelhpa8c6qSryoVZ3OBgOhlKThQucY6S1Zhx4TWsTZdM4wGWbvWu4Fiuu/H8Wfdws2hQv0xc+KDI0VsISaWHRcMqNwsLI6dL9D7DWXEVCkdjcJmrugvCTWiwmGOi9z5ZLeVyPdMI3qQnC1ml3Kn01nE/eNefVU/i2EXWngXdUbYzMDeUrJaPpo2E+diT9W5DdfLzCeCs33tQn383tMlFzwtjq3iwauROtqeCe1FYvsXaKvH55JTEuJeIdpTd8kbQXsQdsxh5b9XQvFvWKK3dHdrlULXiWexUbwb8AJbpIIA==","sidebar_class_name":"get api-method","info_path":"millicast/api/millicast-api","custom_edit_url":null,"hide_send_button":true},"sidebar":"millicastApi","previous":{"title":"Get Total Transcoder Minutes","permalink":"/documentation/pr-preview/pr-266/millicast/api/analytics-get-total-transcoder-minutes-for-account"},"next":{"title":"Usage","permalink":"/documentation/pr-preview/pr-266/millicast/api/analytics-media-asset-usage"}}'),i=s("85893"),r=s("50065"),n=s("72969"),o=s.n(n),c=s("11682"),d=s.n(c),l=s("99757"),p=s.n(l),u=s("6476"),m=s.n(u);s("9650"),s("97645");var h=s("46055");let y={id:"analytics-get-series-transcoder-minutes-for-account",title:"Get Transcoder Minutes Series",description:"List Transcoder uptime in minutes calculated between two date ranges for an account. The data will show a list of dates each with corresponding transcoder minutes for that specific day.",sidebar_label:"Get Transcoder Minutes Series",hide_title:!0,hide_table_of_contents:!0,api:"eJztWNtuGzcQ/ZUp/dCkXcuy4/RBb26cBAbi1IidB9cykhF3JDHeJTfkrJ2FoH8vhnvR6pIWdYIABSoI0F44wzO3wxktFOMsqNGNOrGYVWx0ULeJSilobwo2zqqRemMCw5VHG7RLyUNZsMkJjIXc2JIpgMZMlxkypTAhfiCywA8OUmQCj3ZGAabOA1pArV1peQBXc5L3CA8myyDM3QMgZLKTm0bBAIR6Dg+G56Cd9xQKZ1NjZ8ArKC0A0c5zZAgFaTM1GlKsBjC2YwtvHdOowy8KJibL5NesIXdWExTkRbRRSFB4ujeuDPIwgeCgciXkWIF1DIFIbCLLvpFwIlsRD1SiXEEexYVnqRqt/PvhNfEleUNh5dLz2oxXzp/U/lGJKtBjTkxewrNQFnNSIxUYPZ8ik0qUkeB8LslXKlGePpfGU6pG7EvaDKF4O4rWMXHTaFyUHcCZjXdT53OM7v94fX19vX9+vn96+lEsCXpOOarRQnFV1Ci8sTOVqFpGjZSoVctEfdkvXDD1rofLpIfbFY+DTTb9kaCPlreCSpItUBDxo+FQftaRXZZaUwgqUdpZJsuyBIsiMzrG/OBTkHWLbRhu8om0BBjTNO6J2YWXXGEj+00xC9T3y43EnEvZSupFyrPorV+0r3cYmtIUy0wsDR3c3Ng3ZGc8j/GpVf5bcJv7e8K8SVzJ9V1ANqPa8EBdtA8YYlgNpRI5W2YZTjKqc2KZqFXB74K6rlySDDAEp02s6h5ZYFuC25t8zeBuN/QeJV8NUx6+0WErSLu9tWV/w3LvA/XXG8s0I99PaGP5t2O1FJcZFgVqxTEdAZ0So8nUcrl7Xc1N3ep3TSmsaW2yf1OooTEpKfqCeZE1CWLkMl6VeY6+EmPrZ4m6x6ykfhr3crVNzq0MUxeT6ry4VpupcTQ8Ot4fPtsfHl4Nh6P4/TOy57rLD4fNZ8O1z5vHQgGdqqPvp+rZd1E1jLqOvx+s59+oatl8EnW8iyp/xxTe0eeSAv9X6HIqBfI1ruwXwis0Wa9C5FWnZevIIH9PHl567/yPdUROIeCMHucLavBuOKPVuUN2Y6Vk0j/S1rOjXcTXEsDGi14AojdXEVgnnhlZ8pitM0/7cBf1dLa2xjU8BfEFeEKJTmvSc6mJFuIqKhIrnsc+khHm5AmeSLeImkvM4I6qp2pVMoF06Q1XsfJOLs4+XJL2xGp0cytFmhPPXRph102heFUdYGEOuuPsYFWwByESsbQ/Mdvq3rH0AmrOXITRgcgOcumANQYeaJcr2ajFcSl5V7uvj6YLn2jZOnT39vbgvXhsbPfk+kTHLIQQpWHqXQ4phvnEoU8HY/sLvHEzY4FdbOJqfpeOvFska/6oW7yMpgw52TIBnRl9B87CJTEbOwuy7C3em5mc+o22y8YSYJz8HCCUE8EhSOHk4gxqi8LYHg5grH6FF56QaaxEvM4NaSDA0gNI75r2hMBMwRKllI7t0QBetGhkV+2KCiYls7PQzA6e7gmz9iE7aXooBMBuqsgq0HH7/i4ytPx0c/tkMDjAEIiDROxD7cpBYWcwVq+MXZNQT9uGV0I0IfTk44Ft7NTF4DXlct7GXaS3wwhnlr1Ly+itsX3h5LaelYpykpkwl0uZdCpXelhpa8c6qSryoVZ3OBgOhlKThQucY6S1Zhx4TWsTZdM4wGWbvWu4Fiuu/H8Wfdws2hQv0xc+KDI0VsISaWHRcMqNwsLI6dL9D7DWXEVCkdjcJmrugvCTWiwmGOi9z5ZLeVyPdMI3qQnC1ml3Kn01nE/eNefVU/i2EXWngXdUbYzMDeUrJaPpo2E+diT9W5DdfLzCeCs33tQn383tMlFzwtjq3iwauROtqeCe1FYvsXaKvH55JTEuJeIdpTd8kbQXsQdsxh5b9XQvFvWKK3dHdrlULXiWexUbwb8AJbpIIA==",sidebar_class_name:"get api-method",info_path:"millicast/api/millicast-api",custom_edit_url:null,hide_send_button:!0},f=void 0,T={},I=[];function g(e){let t={p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Get Transcoder Minutes Series"}),"\n",(0,i.jsx)(o(),{method:"get",path:"/api/analytics/transcoder/series",context:"endpoint"}),"\n",(0,i.jsx)(t.p,{children:"List Transcoder uptime in minutes calculated between two date ranges for an account. The data will show a list of dates each with corresponding transcoder minutes for that specific day."}),"\n",(0,i.jsx)(t.p,{children:"Note: Transcoding billing is calculated once per day for the previous day, so you may not see an entry for today yet."}),"\n",(0,i.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(d(),{parameters:[{name:"startDate",in:"query",required:!0,description:"The start date of the query. In the format of `YYYY-MM-DD`.",schema:{type:"string",format:"date"},"x-position":1},{name:"stopDate",in:"query",required:!0,description:"The end date of the query. In the format of `YYYY-MM-DD`.",schema:{type:"string",format:"date"},"x-position":2}]}),"\n",(0,i.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"success",minLength:1},data:{type:"object",additionalProperties:!1,properties:{streamAccountId:{type:"string",description:"The account that was queried.",nullable:!0},transcoder:{type:"object",description:"Date associated transcoder analytics.",nullable:!0,additionalProperties:{type:"array",items:{type:"object",additionalProperties:!1,properties:{transcoderId:{type:"string",nullable:!0},minutesUsed:{type:"integer",format:"int64"}},title:"TranscoderAnalyticsDetail"}}}},title:"TranscoderSeriesAnalyticsResponse"}},title:"SuccessTranscoderSeriesMinutes"},examples:{simple:{summary:"simple",value:{status:"success",data:{streamAccountId:"PbyMpY",transcoder:{"2024-03-01T00:00:00Z":[{transcoderId:1e8,minutesUsed:5e7}],"2024-03-02T00:00:00Z":[{transcoderId:1e8,minutesUsed:5e7}],"2024-03-03T00:00:00Z":[{transcoderId:1e8,minutesUsed:5e7}],"20240-03-04T00:00:00Z":[{transcoderId:1e8,minutesUsed:5e7}],"2024-03-05T00:00:00Z":[{transcoderId:1e8,minutesUsed:5e7}]}}}}}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","data"],properties:{status:{type:"string",default:"fail",minLength:1},data:{}},title:"FailResponse"}}}},default:{description:"Server Error",content:{"application/json":{schema:{type:"object",additionalProperties:!1,required:["status","message"],properties:{status:{type:"string",default:"error",minLength:1},message:{type:"string",minLength:1},code:{type:"integer",format:"int32",nullable:!0},data:{nullable:!0}},title:"ErrorResponse"},examples:{general:{summary:"general",value:{status:"error",message:"simple error reason",code:500,data:{additional:"other data here (not actual key)"}}}}}}}}})]})}function X(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}}}]);