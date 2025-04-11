"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["9341"],{22802:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"webhooks/transcoder-webhooks","title":"Transcoder Hooks","description":"The transcoder type of webhook allows you to receive a state transition notification for platform events such as when a transcoder starts, stops, or is deleted.","source":"@site/millicast/webhooks/transcoder-webhooks.md","sourceDirName":"webhooks","slug":"/transcoder-webhooks","permalink":"/documentation/pr-preview/pr-266/millicast/transcoder-webhooks","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/webhooks/transcoder-webhooks.md","tags":[],"version":"current","frontMatter":{"title":"Transcoder Hooks","slug":"/transcoder-webhooks"},"sidebar":"millicast","previous":{"title":"Thumbnail Hooks","permalink":"/documentation/pr-preview/pr-266/millicast/thumbnail-webhooks"},"next":{"title":"ViewerConnection Hooks","permalink":"/documentation/pr-preview/pr-266/millicast/viewerconnection-hooks"}}'),r=t("85893"),o=t("50065");let i={title:"Transcoder Hooks",slug:"/transcoder-webhooks"},a=void 0,c={},d=[{value:"Event",id:"event",level:2},{value:"Data",id:"data",level:2},{value:"Examples",id:"examples",level:2},{value:"Transcoder Active",id:"transcoder-active",level:3},{value:"Transcoder Stopped",id:"transcoder-stopped",level:3},{value:"Transcoder Deleted",id:"transcoder-deleted",level:3}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"transcoder"})," ",(0,r.jsx)(n.em,{children:"type"})," of ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/millicast/webhooks",children:"webhook"})," allows you to receive a state transition notification for platform events such as when a ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/millicast/cloud-transcoder",children:"transcoder"})," starts, stops, or is deleted."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\uD83D\uDC4D Setting up Webhooks"}),"\n",(0,r.jsxs)(n.p,{children:["Review the ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/millicast/webhooks",children:"Webhooks"})," guide for additional details on creating and receiving webhooks."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"event",children:"Event"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"event"})," will be one of the following values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ACTIVE"})," is sent when the transcoder transitions to an ",(0,r.jsx)(n.em,{children:"Active"})," status."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"STOPPED"})," is sent when the transcoder transitions to a ",(0,r.jsx)(n.em,{children:"Shutdown"})," status."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DELETED"})," is sent when the transcoder transitions to a ",(0,r.jsx)(n.em,{children:"Deleted"})," status."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Review the ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/millicast/cloud-transcoder",children:"Cloud Transcoder"})," streaming guide for descriptions of the various transcoder statuses."]}),"\n",(0,r.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"data"})," payload will contain the following details:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"transcoderId"})," is a unique identifier of the transcoder."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"transcoderName"})," is the label given to the transcoder."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"cluster"})," is the ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/millicast/multi-region-support",children:"cluster region"})," where the transcoder is running."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"createdOn"})," is the timestamp for when the transcoder was created."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"status"})," is the state of the transcoder when the hook fired."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"transcoder-active",children:"Transcoder Active"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "type": "transcoder",\n  "event": "ACTIVE",\n  "timestamp": 1724889842678,\n  "data": {\n    "transcoderId": "0d09f40-2988-47aa-8ac7-dca04b971cf",\n    "transcoderName": "test_webhooks",\n    "cluster": "lon-1",\n    "createdOn": "YYYY-MM-DDTHH:MM:SSZ",\n    "status": "Active"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"transcoder-stopped",children:"Transcoder Stopped"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "type": "transcoder",\n  "event": "STOPPED",\n  "timestamp": 1724891135725,\n  "data": {\n    "transcoderId": "fddcbce-e3a3-4efe-8a42-060c31189a2",\n    "transcoderName": "test_webhooks",\n    "cluster": "lon-1",\n    "createdOn": "YYYY-MM-DDTHH:MM:SSZ",\n    "status": "Shutdown"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"transcoder-deleted",children:"Transcoder Deleted"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "type": "transcoder",\n  "event": "DELETED",\n  "timestamp": 1724890175017,\n  "data": {\n    "transcoderId": "009ff40-2988-47aa-8ac7-dc904b971cf",\n    "transcoderName": "test_webhooks",\n    "cluster": "lon-1",\n    "createdOn": "YYYY-MM-DDTHH:MM:SSZ",\n    "status": "Deleted"\n  }\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(67294);let r={},o=s.createContext(r);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);