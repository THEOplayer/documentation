"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["78721"],{98867:function(e,i,t){t.d(i,{ZP:function(){return o},d$:function(){return r}});var n=t(85893),a=t(50065);let r=[];function s(e){let i={a:"a",admonition:"admonition",code:"code",p:"p",...(0,a.a)(),...e.components};return(0,n.jsx)(i.admonition,{title:"Getting Started with REST APIs",type:"tip",children:(0,n.jsxs)(i.p,{children:["Review the REST API ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/getting-started/using-rest-apis",children:"Getting Started"})," tutorial for details on retrieving your API Key for authenticating your API calls. The examples included here use the ",(0,n.jsx)(i.code,{children:"cURL"})," command-line utility. Alternatively, there are ",(0,n.jsx)(i.a,{href:"https://www.postman.com/dolbyio/dolby-io-streaming-apis/",children:"Postman Collections"})," and a ",(0,n.jsx)(i.a,{href:"https://github.com/DolbyIO/dolbyio-rest-apis-client-node",children:"REST Client for Node"})," that may be helpful for your project."]})})}function o(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},75799:function(e,i,t){t.r(i),t.d(i,{default:()=>m,frontMatter:()=>c,metadata:()=>n,assets:()=>p,toc:()=>h,contentTitle:()=>d});var n=JSON.parse('{"id":"distribution/stream-recordings/live-clipping","title":"How-to Start Live Clipping","description":"Live Clipping allows you to capture one or more simultaneous media files (ie. clips) while a broadcast event is in progress. This is in contrast to a recording which is a media file that captures the full duration of a single source only after the completion of a broadcast. The duration of a clip can be customized to capture highlights or shorter segments while still live for use cases that want instant replay, social sharing, or audit reviews.","source":"@site/millicast/distribution/stream-recordings/live-clipping.mdx","sourceDirName":"distribution/stream-recordings","slug":"/live-clipping","permalink":"/documentation/pr-preview/pr-255/millicast/live-clipping","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/distribution/stream-recordings/live-clipping.mdx","tags":[],"version":"current","frontMatter":{"title":"How-to Start Live Clipping","slug":"/live-clipping"},"sidebar":"millicast","previous":{"title":"How-to Setup Storage Profiles","permalink":"/documentation/pr-preview/pr-255/millicast/how-to-setup-media-storage"},"next":{"title":"How-to Start Recording","permalink":"/documentation/pr-preview/pr-255/millicast/starting-recording"}}'),a=t("85893"),r=t("50065");function s(e){let i={a:"a",admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,a.jsx)(i.admonition,{title:"Premium API",type:"warning",children:(0,a.jsxs)(i.p,{children:["This feature is a premium option that must be enabled on your plan. If you would like to use this endpoint, please ",(0,a.jsx)(i.a,{href:"https://support.dolby.io/hc/en-au",children:"submit a support ticket"})," or reach out to your ",(0,a.jsx)(i.a,{href:"https://dolby.io/contact/",children:"sales/solutions"})," contact."]})})}function o(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}var l=t("98867");let c={title:"How-to Start Live Clipping",slug:"/live-clipping"},d=void 0,p={},h=[{value:"Creating Clips by API",id:"creating-clips-by-api",level:2},...l.d$,{value:"Application Architecture",id:"application-architecture",level:3},{value:"How-to Create a Clip",id:"how-to-create-a-clip",level:3},{value:"How-to Avoid Duplicate Clips",id:"how-to-avoid-duplicate-clips",level:3},{value:"How-to Use Your Own Cloud Storage",id:"how-to-use-your-own-cloud-storage",level:3},{value:"How-to Set an Expiration Time for Clips",id:"how-to-set-an-expiration-time-for-clips",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"No timelines found matching clipping requirements",id:"no-timelines-found-matching-clipping-requirements",level:3},{value:"Name may not contain characters",id:"name-may-not-contain-characters",level:3},{value:"Clip duration doesn&#39;t match request",id:"clip-duration-doesnt-match-request",level:3}];function u(e){let i={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Live Clipping"})," allows you to capture one or more simultaneous media files (ie. ",(0,a.jsx)(i.strong,{children:"clips"}),") while a broadcast event is in progress. This is in contrast to a recording which is a media file that captures the full duration of a single source only after the completion of a broadcast. The duration of a clip can be customized to capture highlights or shorter segments while still live for use cases that want instant replay, social sharing, or audit reviews."]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:t(85695).Z+"",width:"681",height:"481"})}),"\n",(0,a.jsx)(i.p,{children:"This opens up new possibilities for engaging audiences with dynamic and interactive viewing experiences."}),"\n","\n",(0,a.jsx)(o,{}),"\n",(0,a.jsx)(i.h2,{id:"creating-clips-by-api",children:"Creating Clips by API"}),"\n",(0,a.jsx)(i.p,{children:"Many broadcasts have streams that regularly exceed 12 or 24 hours. Maintaining a recording for the entire duration may not always make sense. By using the clipping feature, you can capture a customizable duration or series of shorter clips as part of your application and workflow."}),"\n","\n",(0,a.jsx)(l.ZP,{}),"\n",(0,a.jsx)(i.h3,{id:"application-architecture",children:"Application Architecture"}),"\n",(0,a.jsxs)(i.p,{children:["When setting up your applications and workflows, you'll want to create a service that can manage your live clipping requests. Your service should call the ",(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/media-assets-list-media-assets",children:"/media/assets"})," API to create clips based on the needs of your playback and broadcast workflow."]}),"\n",(0,a.jsx)(i.p,{children:"This is a typical pattern for application integration."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:t(61088).Z+"",width:"611",height:"523"})}),"\n",(0,a.jsx)(i.h3,{id:"how-to-create-a-clip",children:"How-to Create a Clip"}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/media-assets-create-media-asset",children:"Create Media Asset"})," endpoint can be used to create a clip by specifying at minimum a ",(0,a.jsx)(i.strong,{children:"startTime"})," and ",(0,a.jsx)(i.strong,{children:"streamName"}),"."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-curl",children:'curl --request POST \\\n  --url https://api.millicast.com/api/v3/media/assets \\\n  --header \'Authorization: Bearer abc123\' \\\n  --data \'\n{\n  "name": "broadcast-2024-10-01-clip-0133333",\n  "streamName": "my-first-broadcast",\n  "startTime": "2024-10-01T01:33:33Z",\n  "stopTime": "2024-10-01T01:34:33Z"\n}\n\'\n'})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.strong,{children:"stopTime"}),' is optional and if not specified will use the last segment from the timeline (ie. "now"). The precise start and stop times of the resulting clip may vary slightly depending on encoding settings. We recommend that encoding settings use an ',(0,a.jsx)(i.strong,{children:"I-Frame"})," period of ",(0,a.jsx)(i.code,{children:"1s"})," when using the service to increase precision when aligning keyframes with media segments."]}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:"\uD83D\uDC4D Enable Live Clipping"}),"\n",(0,a.jsxs)(i.p,{children:["Before beginning a broadcast, you must enable the ",(0,a.jsx)(i.code,{children:"clip"})," setting on the ",(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/managing-your-tokens",children:"Publish Token"})," being used for the stream. You will not be able to clip media until your broadcast with this setting has started."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"how-to-avoid-duplicate-clips",children:"How-to Avoid Duplicate Clips"}),"\n",(0,a.jsx)(i.p,{children:"For applications where there may be race conditions that result in multiple calls to create a clip with the same parameters will result in more than one clip being generated."}),"\n",(0,a.jsxs)(i.p,{children:["To avoid this scenario, use of the ",(0,a.jsx)(i.code,{children:"Idempotency-Key"})," header can help identify requests that may share the same stream id and timestamp so that repeated calls with the same key will be ignored."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-curl",children:'curl --request POST \\\n  --url https://api.millicast.com/api/v3/media/assets \\\n  --header \'Authorization: Bearer abc123\' \\\n  --header \'Idempotency-Key: my-popular-broadcast-2024-10-01-01-33-33\' \\\n  --data \'\n{\n  "name": "broadcast-2024-10-01-clip-0133333",\n  "streamName": "my-popular-broadcast",\n  "startTime": "2024-10-01T01:33:33Z",\n  "stopTime": "2024-10-01T01:34:33Z"\n}\n\'\n\n\n'})}),"\n",(0,a.jsx)(i.h3,{id:"how-to-use-your-own-cloud-storage",children:"How-to Use Your Own Cloud Storage"}),"\n",(0,a.jsxs)(i.p,{children:["By default, clips will be kept in Dolby's storage. Alternatively, you can use your own cloud storage such as AWS S3 or Google Cloud Storage. Review the ",(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/how-to-setup-media-storage",children:"How-to Setup Media Storage"})," tutorial for details on creating storage profiles."]}),"\n",(0,a.jsxs)(i.p,{children:["With a ",(0,a.jsx)(i.strong,{children:"storage profile"}),", you can specify where you want a clip to be sent when it is finished processing."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-curl",children:'curl --request POST \\\n  --url https://api.millicast.com/api/v3/media/assets \\\n  --header \'Authorization: Bearer abc123\' \\\n  --data \'\n{\n  "name": "broadcast-2024-10-01-clip-0133333",\n  "streamName": "my-first-broadcast",\n  "startTime": "2024-10-01T01:33:33Z",\n  "stopTime": "2024-10-01T01:34:33Z",\n  "storage": {\n    "profileId": "750fb4a949c38fd4dd54aaa4fc885a"\n  }\n}\n\'\n'})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.em,{children:"default"})," profile as configured in your ",(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/account-list-storage-profiles",children:"Account Storage Profiles"})," will be used by default. Any storage settings on an individual request will supersede the account settings such as using an alternative ",(0,a.jsx)(i.code,{children:"profileId"})," or including an alternative ",(0,a.jsx)(i.strong,{children:"type"}),", ",(0,a.jsx)(i.strong,{children:"objectPrefix"}),", and ",(0,a.jsx)(i.strong,{children:"bucketName"})," directly with the request."]}),"\n",(0,a.jsx)(i.h3,{id:"how-to-set-an-expiration-time-for-clips",children:"How-to Set an Expiration Time for Clips"}),"\n",(0,a.jsx)(i.p,{children:"When clips are left in Dolby's cloud storage there will be additional fees for each GB/hour utilized. When requesting a clip, you can explicitly set when you want the clip to be removed. For example, this request specifies an expiration for 48 hours after the clip was created to have it marked for deletion. This can help avoid charges for unnecessary storage, but keep in mind this will delete the media completely so there will not be a way to recover it."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-curl",children:'curl --request POST \\\n  --url https://api.millicast.com/api/v3/media/assets \\\n  --header \'Authorization: Bearer abc123\' \\\n  --data \'\n{\n  "name": "broadcast-2024-10-01-clip-0133333",\n  "streamName": "my-first-broadcast",\n  "startTime": "2024-10-01T01:33:33Z",\n  "stopTime": "2024-10-01T01:34:33Z",\n  "expiration": 2024-10-03T01:34:33Z"\n}\n\'\n'})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"expiration"})," on a ",(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/media-assets-create-media-asset",children:"Create Media Asset"})," request will supersede any ",(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/account-get-expiration-rules",children:"Expiration Rule"})," configured as the account default."]}),"\n",(0,a.jsx)(i.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsx)(i.p,{children:"Some issues you may encounter when setting up a live clipping workflow."}),"\n",(0,a.jsx)(i.h3,{id:"no-timelines-found-matching-clipping-requirements",children:"No timelines found matching clipping requirements"}),"\n",(0,a.jsx)(i.p,{children:"The timeline is stored only temporarily and will expire according to any expiration rules that may be applied on new media."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-json",children:'{\n  "status": "fail",\n  "data": {\n    "message": "No timelines found matching clipping requirements. Ensure clipping is enabled on token and Timeline(s) with specified conditions exist."\n  }\n}\n'})}),"\n",(0,a.jsxs)(i.p,{children:["If you see this message, make sure the ",(0,a.jsx)(i.strong,{children:"startTime"})," and ",(0,a.jsx)(i.strong,{children:"stopTime"})," are within bounds of the available timelines. Use ",(0,a.jsx)(i.code,{children:"?type=timeline"})," to find available timeline media assets as described in: ",(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/how-to-get-media-assets",children:"How-to Get Media Assets"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"name-may-not-contain-characters",children:"Name may not contain characters"}),"\n",(0,a.jsxs)(i.p,{children:["The name of clips should not contain the ",(0,a.jsx)(i.code,{children:":"})," character because many cloud storage providers do not allow certain characters within object naming conventions."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-json",children:'{\n  "status": "fail",\n  "data": {\n    "errors": {\n      "Name": ["Name may not contain character(s) (:)"]\n    },\n    "message": "Validation errors"\n  }\n}\n'})}),"\n",(0,a.jsx)(i.h3,{id:"clip-duration-doesnt-match-request",children:"Clip duration doesn't match request"}),"\n",(0,a.jsxs)(i.p,{children:["The start and end times of the clip may vary from the requested times based upon the ",(0,a.jsx)(i.strong,{children:"I-Frame"})," frequency. We recommend using an iframe period of 1s."]})]})}function m(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},61088:function(e,i,t){t.d(i,{Z:function(){return n}});let n=t.p+"assets/images/602a7d00dfd276b5f220021220a55eaebea6cb8f4692c6fd606a63e8-live-clipping-app-architecture-cc847c0e1487759d29ddefa426dbc7e3.png"},85695:function(e,i,t){t.d(i,{Z:function(){return n}});let n=t.p+"assets/images/ac2eb6e3116ef7cdbf78a87b76207ab466689eec4f920c5cf77a38a3-live-clipping-overview-0088f31e6b0f2609b1a6642a5d521491.png"},50065:function(e,i,t){t.d(i,{Z:function(){return o},a:function(){return s}});var n=t(67294);let a={},r=n.createContext(a);function s(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);