"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["82191"],{48149:function(e,i,n){n.r(i),n.d(i,{default:()=>g,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>s});var t=JSON.parse('{"id":"how-to-guides/workflow-integration","title":"Workflow integration","description":"For implementing THEOads, the Signaling Service must be integrated within your existing video workflow. This service acts as an intermediary between the media origin and the CDN, enabling ad insertion and metadata enrichment.","source":"@site/theoads/how-to-guides/workflow-integration.md","sourceDirName":"how-to-guides","slug":"/how-to-guides/workflow-integration","permalink":"/documentation/pr-preview/pr-247/theoads/how-to-guides/workflow-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoads/how-to-guides/workflow-integration.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"theoads","previous":{"title":"Scheduling overlays","permalink":"/documentation/pr-preview/pr-247/theoads/how-to-guides/scheduling-overlays"},"next":{"title":"Create backdrop images","permalink":"/documentation/pr-preview/pr-247/theoads/how-to-guides/create-backdrop-layout"}}'),r=n("85893"),o=n("50065");let a={sidebar_position:6},s="Workflow integration",d={},l=[{value:"Existing Video Workflow",id:"existing-video-workflow",level:2},{value:"Integrating the Signaling Service",id:"integrating-the-signaling-service",level:2},{value:"Configuring the Signaling Service",id:"configuring-the-signaling-service",level:2},{value:"More information",id:"more-information",level:2}];function h(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"workflow-integration",children:"Workflow integration"})}),"\n",(0,r.jsx)(i.p,{children:"For implementing THEOads, the Signaling Service must be integrated within your existing video workflow. This service acts as an intermediary between the media origin and the CDN, enabling ad insertion and metadata enrichment."}),"\n",(0,r.jsx)(i.h2,{id:"existing-video-workflow",children:"Existing Video Workflow"}),"\n",(0,r.jsx)(i.p,{children:"In a typical video delivery workflow, the CDN fetches the manifest directly from the media origin, and all subsequent requests for video segments are also routed from the CDN to the origin."}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.img,{alt:"Video workflow before",src:n(52523).Z+"",width:"3188",height:"942"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"integrating-the-signaling-service",children:"Integrating the Signaling Service"}),"\n",(0,r.jsx)(i.p,{children:"By introducing the Signaling Service, the manifest requests from the CDN are intercepted before reaching the origin. The Signaling Service augments the manifest with ad break signals and any necessary metadata. Notably, video segment requests bypass the Signaling Service and continue to be fetched directly from the CDN to the origin, ensuring minimal impact on content delivery performance."}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.img,{alt:"Video workflow after",src:n(45174).Z+"",width:"3188",height:"942"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"configuring-the-signaling-service",children:"Configuring the Signaling Service"}),"\n",(0,r.jsx)(i.p,{children:"To integrate the Signaling Service with your workflow, the properties origin and segmentOrigin are crucial when setting up a new monetized stream:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"origin"}),": This property specifies where the original manifest should be fetched from. It points to the media origin that provides the main content."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"segmentOrigin"}),": This property ensures that the segment URLs within the augmented manifest are absolute. It defines the path from which the segments should be requested, typically directly from the origin or CDN.\nBy configuring these properties, the Signaling Service seamlessly inserts ad breaks without affecting the video segment delivery flow."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/theoads/getting-started/getting-started-signaling-service/",children:"Getting Started"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/theoads/api/signaling/theoads-api/",children:"API reference"})}),"\n"]})]})}function g(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},45174:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/workflow-theoads-after-295a6900fcd1607212656ea2ce0be0d0.png"},52523:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/workflow-theoads-before-a5c6cc9dd5c6f153095ac57136601e70.png"},50065:function(e,i,n){n.d(i,{Z:function(){return s},a:function(){return a}});var t=n(67294);let r={},o=t.createContext(r);function a(e){let i=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);