"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["36942"],{10666:function(e,i,t){t.r(i),t.d(i,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"broadcast/redundant-ingest/high-availability-management","title":"High Availability Management","description":"Note: To make use of this feature, please be familiar with the concept of Redundant Ingest","source":"@site/millicast/broadcast/redundant-ingest/high-availability-management.md","sourceDirName":"broadcast/redundant-ingest","slug":"/high-availability-management","permalink":"/documentation/pr-preview/pr-266/millicast/high-availability-management","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/broadcast/redundant-ingest/high-availability-management.md","tags":[],"version":"current","frontMatter":{"title":"High Availability Management","slug":"/high-availability-management"},"sidebar":"millicast","previous":{"title":"Redundant Ingest","permalink":"/documentation/pr-preview/pr-266/millicast/redundant-ingest"},"next":{"title":"Ingest Raw Frames","permalink":"/documentation/pr-preview/pr-266/millicast/using-native-sdk-ingest-raw-frames"}}'),r=t("85893"),a=t("50065");let s={title:"High Availability Management",slug:"/high-availability-management"},o=void 0,d={},l=[{value:"Assigning Priority to Streams",id:"assigning-priority-to-streams",level:2},{value:"Identifying Primary and Redundant Stream Priority",id:"identifying-primary-and-redundant-stream-priority",level:2},{value:"Reprioritize Stream via TokenId",id:"reprioritize-stream-via-tokenid",level:2}];function c(e){let i={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:(0,r.jsxs)(i.em,{children:["Note: To make use of this feature, please be familiar with the concept of ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/redundant-ingest",children:"Redundant Ingest"})]})}),"\n",(0,r.jsx)(i.p,{children:"This feature allows for effective switching between primary and redundant stream(s) through reassignment of priority for specified streams. This could be useful under the following scenarios:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Managing Encoder Issues","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"If the primary encoder starts to misbehave, for example by either remaining connected to the service and sending bad video or continually disconnecting and reconnecting, stream switching by assigning the primary stream a lower priority would help promote a redundant stream as the new primary stream."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Maintenance Window","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"During scheduled maintenance, viewers can be transitioned away from unhealthy/offline infrastructure until maintenance is complete. Switching to a secondary setup can be achieved by lowering the priority of streams that need maintenance and/or increasing the priority of backup streams."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Service Outage","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"In the event that the service becomes unhealthy in a specific region, there is the option to initiate automatic failover to backup streams in healthy regions. This can be achieved by reducing the priority of the streams within the unhealthy region."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"assigning-priority-to-streams",children:"Assigning Priority to Streams"}),"\n",(0,r.jsxs)(i.p,{children:["To enable the High Availability Management feature and allow for dynamic stream switching, stream priority ",(0,r.jsx)(i.em,{children:"must"})," be assigned via the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/managing-your-tokens",children:"Publish Token"}),". A guide on this topic can be found in our ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/redundant-ingest",children:"Redundant Ingest Guide"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Any streams broadcasted using the priority parameter under ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/broadcast-parameters",children:"Publishing Parameters"})," will ",(0,r.jsx)(i.em,{children:"not"})," be responsive to dynamic priority allocation. The priority value specified via ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/broadcast-parameters",children:"Publishing Parameters"})," overrides the respective setting on the token."]}),"\n",(0,r.jsx)(i.h2,{id:"identifying-primary-and-redundant-stream-priority",children:"Identifying Primary and Redundant Stream Priority"}),"\n",(0,r.jsxs)(i.p,{children:["If you don't know which token (",(0,r.jsx)(i.code,{children:"tokenId"}),") is being used to publish your primary you can get it from the Monitoring section of the dashboard or use the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/api/publish-token-v-1-list-tokens-by-name",children:"List Token By Name"})," API and filter by ",(0,r.jsx)(i.code,{children:"StreamName"})," to get the tokens used for primary and redundant streams that share the same streamName. The response of this endpoint assists with the identification of:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["the token associated with the primary stream i.e. the token in the list with the highest ",(0,r.jsx)(i.code,{children:"priority"})," value"]}),"\n",(0,r.jsx)(i.li,{children:"the tokens associated with a specific cluster/region"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["After identifying the ",(0,r.jsx)(i.code,{children:"tokenId"})," to deprioritize or increase the priority for, you can reprioritize the stream."]}),"\n",(0,r.jsx)(i.h2,{id:"reprioritize-stream-via-tokenid",children:"Reprioritize Stream via TokenId"}),"\n",(0,r.jsxs)(i.p,{children:["Using the ",(0,r.jsx)(i.code,{children:"tokenId"})," of the target active stream, call ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/api/stream-reprioritize-stream",children:"Reprioritize Stream"}),' to assign it a new priority value and reset the primary/redundant stream arrangement. Remember that the highest value "wins" and is the stream that is broadcast to viewers. Reducing the priority of a primary stream below that of a redundant stream essentially renders it redundant and the viewer will show a new primary stream.']}),"\n",(0,r.jsxs)(i.p,{children:["Priority changes should always be made using ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/api/stream-reprioritize-stream",children:"Reprioritize Stream"})," for immediate effect rather than changing it on a token. Any changes made through ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/api/publish-token-v-1-update-token",children:"Update Token"})," will only take effect after the stream is manually restarted. This is because ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/api/stream-reprioritize-stream",children:"Reprioritize Stream"})," is effectively a shortcut API that updates the token ",(0,r.jsx)(i.code,{children:"priority"})," then triggers a disconnection of the associated streams. Therefore, to use ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/api/stream-reprioritize-stream",children:"Reprioritize Stream"}),", encoders and publishing clients must be configured to automatically restart on disconnection."]})]})}function h(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return o},a:function(){return s}});var n=t(67294);let r={},a=n.createContext(r);function s(e){let i=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);