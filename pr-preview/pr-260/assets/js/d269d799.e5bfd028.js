"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["56244"],{49154:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>h,contentTitle:()=>r});var t=JSON.parse('{"id":"webhooks/thumbnail-webhooks","title":"Thumbnail Hooks","description":"The thumbnail type of webhook allows you to receive a static image that is captured every 30 seconds during an active stream. This thumbnail would allow somebody to preview what was on a stream at various intervals.","source":"@site/millicast/webhooks/thumbnail-webhooks.md","sourceDirName":"webhooks","slug":"/thumbnail-webhooks","permalink":"/documentation/pr-preview/pr-260/millicast/thumbnail-webhooks","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/webhooks/thumbnail-webhooks.md","tags":[],"version":"current","frontMatter":{"title":"Thumbnail Hooks","slug":"/thumbnail-webhooks"},"sidebar":"millicast","previous":{"title":"Media Hooks","permalink":"/documentation/pr-preview/pr-260/millicast/media-hooks"},"next":{"title":"Transcoder Hooks","permalink":"/documentation/pr-preview/pr-260/millicast/transcoder-webhooks"}}'),o=i("85893"),a=i("50065");let s={title:"Thumbnail Hooks",slug:"/thumbnail-webhooks"},r=void 0,l={},h=[{value:"Thumbnail preview",id:"thumbnail-preview",level:2},{value:"How-to enable thumbnail preview with the dashboard",id:"how-to-enable-thumbnail-preview-with-the-dashboard",level:3},{value:"How-to enable thumbnail preview with the REST API",id:"how-to-enable-thumbnail-preview-with-the-rest-api",level:3},{value:"Receiving the webhook",id:"receiving-the-webhook",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Learn more",id:"learn-more",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"thumbnail"})," ",(0,o.jsx)(n.em,{children:"type"})," of ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-260/millicast/webhooks",children:"webhook"})," allows you to receive a static image that is captured every 30 seconds during an active stream. This thumbnail would allow somebody to preview what was on a stream at various intervals."]}),"\n",(0,o.jsx)(n.p,{children:"To enable thumbnail preview images you must:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Enable thumbnails on a publishing token."}),"\n",(0,o.jsx)(n.li,{children:"Create a webhook using the REST API or Dashboard with thumbnail hooks enabled."}),"\n",(0,o.jsx)(n.li,{children:"Deploy your own service that can receive the callback and store the image in cloud storage of your choosing."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\uD83D\uDC4D Setting up Webhooks"}),"\n",(0,o.jsxs)(n.p,{children:["Review the ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-260/millicast/webhooks",children:"Webhooks"})," guide for additional details on creating and receiving webhooks."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"thumbnail-preview",children:"Thumbnail preview"}),"\n",(0,o.jsxs)(n.p,{children:["During a broadcast with ",(0,o.jsx)(n.strong,{children:"thumbnail preview"})," enabled, while the stream has an active publisher a thumbnail image of an intra frame will be captured every 30 seconds."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Thumbnails will only be sent for publish tokens that have enabled this feature"}),"\n",(0,o.jsx)(n.li,{children:"The request body is the binary image, not the common JSON schema used by other webhooks"}),"\n",(0,o.jsx)(n.li,{children:"Thumbnails are not retained, you'll need to manage storage, delivery, and deletion of thumbnails from your own infrastructure"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"how-to-enable-thumbnail-preview-with-the-dashboard",children:"How-to enable thumbnail preview with the dashboard"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-260/millicast/about-dash",children:"Streaming Dashboard"})," token settings can be used to toggle the ",(0,o.jsx)(n.strong,{children:"Thumbnail previews"})," setting on."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(56770).Z+"",width:"1596",height:"1392"})}),"\n",(0,o.jsx)(n.h3,{id:"how-to-enable-thumbnail-preview-with-the-rest-api",children:"How-to enable thumbnail preview with the REST API"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\uD83D\uDC4D Using the REST APIs"}),"\n",(0,o.jsxs)(n.p,{children:["Review the ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-260/millicast/getting-started/using-rest-apis",children:"REST API"})," platform guide for more details on generating an API secret for authentication. You will need an ",(0,o.jsx)(n.em,{children:"API Secret"})," from the dashboard in order to make requests."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-260/millicast/api/publish-token-v-1-create-token",children:"/api/publish_token"})," endpoint when creating or updating a token using the ",(0,o.jsx)(n.code,{children:"enableThumbnails"})," boolean value. Below is an example body for a request to enable thumbnails on a publishing token and stream named ",(0,o.jsx)(n.em,{children:"thumbnails"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "streams": [\n    {\n      "isRegex": false,\n      "streamName": "thumbnails"\n    }\n  ],\n  "subscribeRequiresAuth": false,\n  "record": false,\n  "multisource": false,\n  "label": "thumbnails",\n  "enableThumbnails": true\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"receiving-the-webhook",children:"Receiving the webhook"}),"\n",(0,o.jsxs)(n.p,{children:["The thumbnail webhook is a POST request that will be sent to the webhook URL with a body of a JPEG image and Content-Type of ",(0,o.jsx)(n.code,{children:"image/jpeg"}),". You will need to host the image in you own infrastructure or CDN for your application."]}),"\n",(0,o.jsx)(n.p,{children:"The following HTTP headers are on the request to identify stream details:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"X-Millicast-Timestamp"}),": timestamp of the generated thumbnail."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"X-Millicast-Feed-Id"}),": Dolby.io Real-time Streaming feed id."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"X-Millicast-Stream-Id"}),": Dolby.io Real-time Streaming stream id."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"X-Millicast-Signature"}),": SHA1 signature using the hook configured secret (The same signature mechanism used by the other webhooks)."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.p,{children:"There are a few limitations to be aware of:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Currently only VP8, H264 and VP9 codecs are supported. Thumbnails for H265 and AV1 are not captured."}),"\n",(0,o.jsx)(n.li,{children:"Rescaling is not supported. The thumbnail will be the same resolution as the incoming stream."}),"\n",(0,o.jsx)(n.li,{children:"Thumbnails cannot be configured to send more or less frequently than every 30 seconds."}),"\n",(0,o.jsx)(n.li,{children:"Regular intra frames are required to generate the thumbnails."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,o.jsxs)(n.p,{children:["We have some sample code to demonstrate receiving a thumbnail hook and saving it to disk: ",(0,o.jsx)(n.a,{href:"https://github.com/millicast/samples-millicast-webhooks",children:"Webhook Code Example (download and save)"})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},56770:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/dashboard-publish-thumbnail-setting-ff238b8ee4ebb5bd3d18ee2f6da1281a.png"},50065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return s}});var t=i(67294);let o={},a=t.createContext(o);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);