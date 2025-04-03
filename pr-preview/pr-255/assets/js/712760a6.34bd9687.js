"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["32026"],{56070:function(e,i,t){t.r(i),t.d(i,{default:()=>u,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>c});var n=JSON.parse('{"id":"distribution/syndication","title":"Syndication","description":"With Dolby.io Real-time Streaming you can syndicate content through multiple distribution partners or channels. This can be helpful to maximize the number of viewers or monetizing content through other platforms. In order to accomplish this, it is important to be able to track syndicated streams for analytics and billing.","source":"@site/millicast/distribution/syndication.mdx","sourceDirName":"distribution","slug":"/syndication","permalink":"/documentation/pr-preview/pr-255/millicast/syndication","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/distribution/syndication.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Syndication","slug":"/syndication","sidebar_position":8},"sidebar":"millicast","previous":{"title":"How-to Start Recording","permalink":"/documentation/pr-preview/pr-255/millicast/starting-recording"},"next":{"title":"Playback","permalink":"/documentation/pr-preview/pr-255/millicast/playback"}}'),r=t("85893"),s=t("50065");let a=t.p+"assets/images/sub2-e3f39128c67f999abdab339803153b70.png",o={title:"Syndication",slug:"/syndication",sidebar_position:8},c=void 0,l={},d=[{value:"Syndication",id:"syndication",level:2},{value:"Syndication workflow",id:"syndication-workflow",level:3},{value:"RTMP syndication",id:"rtmp-syndication",level:3},{value:"How-to track syndication",id:"how-to-track-syndication",level:2},{value:"Creating a Subscribe token with tracking ID",id:"creating-a-subscribe-token-with-tracking-id",level:3},{value:"Tracking with self-signed Subscribe tokens",id:"tracking-with-self-signed-subscribe-tokens",level:3},{value:"Viewing statistics",id:"viewing-statistics",level:3}];function h(e){let i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"With Dolby.io Real-time Streaming you can syndicate content through multiple distribution partners or channels. This can be helpful to maximize the number of viewers or monetizing content through other platforms. In order to accomplish this, it is important to be able to track syndicated streams for analytics and billing."}),"\n",(0,r.jsx)(i.h2,{id:"syndication",children:"Syndication"}),"\n",(0,r.jsx)(i.p,{children:"Broadcast syndication defines a process for leasing the rights to distribute content through various third-parties. If you own the distribution rights to content you are broadcasting, you may want to sell the feed to other platforms to playback to their audience in order to maximize reach. It is important to do this securely while also metering who is consuming the content that you are distributing."}),"\n",(0,r.jsx)(i.h3,{id:"syndication-workflow",children:"Syndication workflow"}),"\n",(0,r.jsxs)(i.p,{children:["The following is an ",(0,r.jsx)(i.strong,{children:"example workflow"})," for setting up syndicated substreams:"]}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/managing-your-tokens",children:"Create a Publish token"})," for your broadcast. Make sure this token has the ",(0,r.jsx)(i.strong,{children:"secured"})," setting enabled."]}),"\n",(0,r.jsxs)(i.li,{children:["Before the broadcast begins, create a ",(0,r.jsx)(i.a,{href:"/millicast/syndication#creating-a-subscribe-token-with-tracking-id",children:"Subscribe token with tracking"}),' for each 3rd party you are syndicating a stream. These Subscribe tokens function as "master" tokens for each platform you are syndicating content. The master Subscribe token can be used by the 3rd party to ',(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/subscribe-tokens#self-signing-subscribe-tokens",children:"self-sign other Subscribe tokens"})," for their users if they need to secure their streams."]}),"\n",(0,r.jsxs)(i.li,{children:["Begin ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/broadcast",children:"broadcasting"})," your premium content via Dolby.io. The 3rd parties can use the provided Subscribe token to ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/playback",children:"access the stream"})," for their viewers or to ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/subscribe-tokens#self-signing-subscribe-tokens",children:"sign more Subscribe tokens for their viewers"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["When the stream is running, the media server will ",(0,r.jsx)(i.a,{href:"/millicast/syndication#viewing-statistics",children:"gather statistics"})," for the viewer associated with the tracking ID information. Since Dolby.io charges based on bandwidth, this data can be used to bill the 3rd parties relative to their consumed data."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"rtmp-syndication",children:"RTMP syndication"}),"\n",(0,r.jsxs)(i.p,{children:["In certain circumstances, you may also choose to distribute content with RTMP to share on public commercial streaming platforms. Follow the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/using-obs#multi-bitrate-simulcast-contribution",children:"Simulcast WebRTC and RTMP on OBS guide"})," to learn how you can use OBS to create a real-time WebRTC stream and an RTMP stream simultaneously. It is important to note that the WebRTC stream will be real-time (",(0,r.jsx)(i.em,{children:"<500ms"}),"), while the RTMP stream may have more delay (",(0,r.jsx)(i.em,{children:"6s - 30s"}),")."]}),"\n",(0,r.jsx)(i.h2,{id:"how-to-track-syndication",children:"How-to track syndication"}),"\n",(0,r.jsx)(i.p,{children:"The Streaming platform lets you track the following data while using syndication:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Bandwidth consumption per a distribution channel. The ",(0,r.jsx)(i.strong,{children:"trackingId"})," parameter, which groups viewers of the same stream, allows you to get the aggregated bandwidth usage of all viewers. This is useful for billing or user engagement analytics."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Bandwidth consumption of a specific viewer. By assigning a unique identifier to each viewer via the ",(0,r.jsx)(i.strong,{children:"customViewerData"})," parameter, you can access the bandwidth consumption of each viewer for analytics purposes. This form of tracking is not available for everyone and requires contacting sales."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"To manage viewing access, there are two types of tokens you use to syndicate:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/token-api#creating-subscribe-tokens",children:"Subscribe tokens"}),' can be used to restrict access for "who" may view a stream. You can assign a ',(0,r.jsx)(i.code,{children:"trackingId"})," to each token for correlating usage."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/token-api#self-sign-subscribe-tokens",children:"Self-signed Subscribe tokens"})," are JSON Web Tokens (JWT) that can be generated using a single ",(0,r.jsx)(i.em,{children:"subscribe token"}),' as the parent. These tokens can also be used to restrict access for "who" may view a stream but are instead created, signed, and managed by the content owner or distributor.']}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"creating-a-subscribe-token-with-tracking-id",children:"Creating a Subscribe token with tracking ID"}),"\n",(0,r.jsxs)(i.p,{children:["You can create a subscribe token with a tracking ID using either the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/subscribe-token-v-1-create-token",children:"Create Token"})," API or the ",(0,r.jsx)(i.a,{href:"https://dashboard.dolby.io/",children:"Dolby.io dashboard"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["To use the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/subscribe-token-v-1-create-token",children:"Create Token"})," API, add the following to your API request body:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-json",metastring:'title="Request body for Create Token"',children:'{\n  "label": "with-tracking-2",\n  "streams": [\n    {\n      "streamName": "test-stream",\n      "isRegex": false\n    }\n  ],\n  "tracking": {\n    "trackingId": "JohnDoe"\n  },\n  "originCluster": "ams-1"\n}\n'})}),"\n",(0,r.jsx)(i.admonition,{title:"Region Origination",type:"caution",children:(0,r.jsxs)(i.p,{children:['The published stream and Subscribe token must originate from the same cluster region. The "Auto" region may be selected for both if the broadcast region changes from stream to stream. For more information, see ',(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/multi-region-support",children:"Multi-region Support"}),"."]})}),"\n",(0,r.jsxs)(i.p,{children:["Alternatively, you can specify a tracking ID using the ",(0,r.jsx)(i.a,{href:"https://dashboard.dolby.io/",children:"Dolby.io dashboard"})," when ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/subscribe-tokens#creating-a-subscribe-token",children:"creating a Subscribe token"}),"."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:a,width:"500"})}),"\n",(0,r.jsx)(i.h3,{id:"tracking-with-self-signed-subscribe-tokens",children:"Tracking with self-signed Subscribe tokens"}),"\n",(0,r.jsxs)(i.p,{children:["Once you have created a Subscribe token with a tracking ID, you can self-sign the token by following ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/subscribe-tokens#creating-a-self-signed-token",children:"this procedure"}),". Be aware of the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/subscribe-tokens#limitations",children:"limitations"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"viewing-statistics",children:"Viewing statistics"}),"\n",(0,r.jsx)(i.p,{children:"With your API Secret found on the Dolby.io dashboard, you can query information based on your viewer's tracking ID and other data using the following REST APIs:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/analytics-get-tracking-total-for-streams",children:"Total bandwidth per TrackingID per stream"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/analytics-get-tracking-series-for-streams",children:"Series bandwidth per TrackingID per stream"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/analytics-get-total-bandwidth-for-tracking-id",children:"Total bandwidth for streams specified by TrackingID"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/analytics-get-series-bandwidth-for-tracking-id",children:"Series bandwidth for streams specified by TrackingID"})}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["To get the bandwidth consumption of a specific viewer, use the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/reporting/records-get-viewer-records",children:"Viewer Records"})," REST API."]})]})}function u(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return o},a:function(){return a}});var n=t(67294);let r={},s=n.createContext(r);function a(e){let i=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);