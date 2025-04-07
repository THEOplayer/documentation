"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["20544"],{89244:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>p,toc:()=>u,contentTitle:()=>c});var s=JSON.parse('{"id":"broadcast/using-srt","title":"SRT","description":"Secure Reliable Transport (SRT) is an open-source protocol that uses an intelligent packet retransmit mechanism on top of a UDP data flow, along with AES-128 and\u202F256-bit\u202Fencryption. Dolby.io Real-time Streaming natively supports publishing from an SRT source.","source":"@site/millicast/broadcast/using-srt.mdx","sourceDirName":"broadcast","slug":"/using-srt","permalink":"/documentation/pr-preview/pr-259/millicast/using-srt","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/broadcast/using-srt.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"SRT","slug":"/using-srt","sidebar_position":4},"sidebar":"millicast","previous":{"title":"RTSP","permalink":"/documentation/pr-preview/pr-259/millicast/rtsp"},"next":{"title":"NDI","permalink":"/documentation/pr-preview/pr-259/millicast/using-ndi"}}'),i=n("85893"),r=n("50065");let a=n.p+"assets/images/srt-token-f176fb742b5566604564eef7523ad7ee.png",o=n.p+"assets/images/dolbyio-streaming-srt-settings-d2455ca0ee689ca4a7f6ce4351470c22.png",l=n.p+"assets/images/Screenshot_2023-10-03_at_09.17.23-66a347ee4a28e889373e4d3750a2bc92.png",h=n.p+"assets/images/srt-h265-enable-feature-flag-ea3f4549da0033300d341d605df0f192.png",d={title:"SRT",slug:"/using-srt",sidebar_position:4},c=void 0,p={},u=[{value:"How-to find the SRT publish settings with the dashboard",id:"how-to-find-the-srt-publish-settings-with-the-dashboard",level:2},{value:"1. Select a token from <em>Live broadcast</em>",id:"1-select-a-token-from-live-broadcast",level:3},{value:"2. Select the <em>Publishing</em> tab",id:"2-select-the-publishing-tab",level:3},{value:"3. Configure your encoder with the SRT settings",id:"3-configure-your-encoder-with-the-srt-settings",level:3},{value:"Basic Encoder Settings",id:"basic-encoder-settings",level:4},{value:"How-to get the SRT publish settings using the REST APIs",id:"how-to-get-the-srt-publish-settings-using-the-rest-apis",level:2},{value:"1. Generate the SRT publish path",id:"1-generate-the-srt-publish-path",level:3},{value:"2. Generate the SRT stream ID",id:"2-generate-the-srt-stream-id",level:3},{value:"3. Generate the SRT publish URL",id:"3-generate-the-srt-publish-url",level:3},{value:"SRT passphrase encryption",id:"srt-passphrase-encryption",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Learn more",id:"learn-more",level:2}];function g(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Secure Reliable Transport (SRT)"})," is an open-source protocol that uses an intelligent packet retransmit mechanism on top of a UDP data flow, along with AES-128 and\u202F256-bit\u202Fencryption. ",(0,i.jsx)(t.a,{href:"https://dolby.io/products/real-time-streaming/",children:"Dolby.io Real-time Streaming"})," natively supports publishing from an SRT source."]}),"\n",(0,i.jsxs)(t.p,{children:["This document will guide you on how to ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/broadcast",children:"broadcast"})," an SRT Stream to Dolby.io Real-time Streaming with SRT-capable software or hardware."]}),"\n",(0,i.jsx)(t.admonition,{title:"Getting Started",type:"tip",children:(0,i.jsxs)(t.p,{children:["If you haven't already, begin by following the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/",children:"Getting Started"})," tutorial to create a Dolby.io application and start your first broadcast. You will need to create a publish token to generate the necessary SRT details."]})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-find-the-srt-publish-settings-with-the-dashboard",children:"How-to find the SRT publish settings with the dashboard"}),"\n",(0,i.jsxs)(t.p,{children:["The Dolby.io ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/about-dash",children:"Streaming Dashboard"})," helps generate the parameters you can use for configuring your encoders."]}),"\n",(0,i.jsxs)(t.p,{children:["Some examples of encoders supporting SRT include the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/using-osprey-talon-whip-hardware-encoder",children:"Osprey"})," Talon, ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/broadcasting-teradek-vidiu",children:"Teradek"})," Wave, ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/videon",children:"Videon"})," EdgeCaster, ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/using-haivision-kb-encoder",children:"Haivision"})," KB Encoder, ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/using-whip-with-flowcaster",children:"Flowcaster"}),", Adobe Premiere Pro, Avid Media Composer, and ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/broadcasting-with-vmix",children:"vMix"}),"."]}),"\n",(0,i.jsxs)(t.h3,{id:"1-select-a-token-from-live-broadcast",children:["1. Select a token from ",(0,i.jsx)(t.em,{children:"Live broadcast"})]}),"\n",(0,i.jsx)(t.p,{children:"Select a publish token that you will use for your SRT broadcast."}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:a,width:"600"})}),"\n",(0,i.jsxs)(t.h3,{id:"2-select-the-publishing-tab",children:["2. Select the ",(0,i.jsx)(t.em,{children:"Publishing"})," tab"]}),"\n",(0,i.jsxs)(t.p,{children:["Click on the ",(0,i.jsx)(t.em,{children:"Publishing"})," tab for information on how to connect as a publisher to your Dolby.io account. There is a section specifically for all of the SRT publish settings."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:o,width:"600"})}),"\n",(0,i.jsx)(t.h3,{id:"3-configure-your-encoder-with-the-srt-settings",children:"3. Configure your encoder with the SRT settings"}),"\n",(0,i.jsx)(t.p,{children:"The settings you use will be dependent on the specific encoder being configured. Typically though, the source of the broadcast may be referred to as the caller of the Dolby.io service which will listen for the incoming stream."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For some encoders, a ",(0,i.jsx)(t.em,{children:"single"})," target URL parameter is all that is required. For this you use the combined ",(0,i.jsx)(t.strong,{children:"SRT publish URL"})," as the configured endpoint."]}),"\n",(0,i.jsxs)(t.li,{children:["For other encoders, it is a ",(0,i.jsx)(t.em,{children:"multi part"})," setting comprised of a Hostname (or URL) and a separate Stream ID entry. For this you use the ",(0,i.jsx)(t.strong,{children:"SRT publish path"})," and ",(0,i.jsx)(t.strong,{children:"SRT stream ID"})," separately. Some encoders will also distinguish the ",(0,i.jsx)(t.strong,{children:"port"})," separately from the publish path as a third configurable setting."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Compressed SRT Token",type:"tip",children:(0,i.jsxs)(t.p,{children:["You may note that these publish settings include your embedded ",(0,i.jsx)(t.em,{children:"Publishing token"})," that has been further compressed. You can find instructions for how this is done in the section below for using the REST APIs if you are trying to automate generation of the SRT stream ID."]})}),"\n",(0,i.jsx)(t.h4,{id:"basic-encoder-settings",children:"Basic Encoder Settings"}),"\n",(0,i.jsx)(t.p,{children:"The following are basic recommended settings for any encoder:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Codec"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"H.264"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"bframes"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"disabled"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Profile"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"baseline, main, high"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Keyframe Interval"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"2 seconds"})})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If you cannot disable bframes, we recommend setting the Profile to ",(0,i.jsx)(t.code,{children:"baseline"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-get-the-srt-publish-settings-using-the-rest-apis",children:"How-to get the SRT publish settings using the REST APIs"}),"\n",(0,i.jsx)(t.p,{children:"These instructions should help with generating the SRT settings similar to what you would find in the dashboard when using the REST API endpoints to programmatically generate publishing tokens."}),"\n",(0,i.jsxs)(t.p,{children:["You will need to know the ",(0,i.jsx)(t.strong,{children:"Stream name"})," as well as the ",(0,i.jsx)(t.strong,{children:"Publishing token"}),". You can retrieve these values by making a ",(0,i.jsx)(t.code,{children:"GET"})," request to the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/api/publish-token-v-1-read-token",children:"/api/publish_token/{tokenId}"})," endpoint. The SRT Encryption setting (",(0,i.jsx)(t.strong,{children:"displaySrtPassphrase"}),") and ",(0,i.jsx)(t.strong,{children:"srtPassphrase"})," can also be retrieved from the API as seen is this example response:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "status": "success",\n  "data": {\n    "id": 100,\n    "label": "simple_token",\n    "token": "abcdefghijklmnopqrstuvwxyz0123456789",\n    "addedOn": "2023-01-01T00:00:00Z",\n    "expiresOn": null,\n    "isActive": true,\n    "subscribeRequiresAuth": false,\n    "streams": [\n      {\n        "streamName": "stream1",\n        "isRegex": false\n      }\n    ],\n    "integrationId": "None",\n    "displaySrtPassphrase": true,\n    "srtPassphrase": "abcdefghijk"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"1-generate-the-srt-publish-path",children:"1. Generate the SRT publish path"}),"\n",(0,i.jsxs)(t.p,{children:["If you've used the ",(0,i.jsx)(t.strong,{children:"Auto"})," ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/multi-region-support",children:"region"})," as your default then the ",(0,i.jsx)(t.strong,{children:"SRT publish path"})," will be ",(0,i.jsx)(t.code,{children:"srt://srt-auto.millicast.com:10000"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For publish tokens configured for specific regions, the ",(0,i.jsx)(t.strong,{children:"srt://"})," endpoint will be unique for that region. These URLs can be fetched with a ",(0,i.jsx)(t.code,{children:"GET"})," request to the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/millicast/api/cluster-get-clusters-info",children:"/api/cluster"})," endpoint. The response will be similar to this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'[{\n    "id": "phx-1",\n    "name": "Phoenix",\n    "rtmp": "rtmp-phx-1.millicast.com",\n    "srt": "srt-phx-1.millicast.com"\n},...]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["You may need to prepend the protocol ",(0,i.jsx)(t.code,{children:"srt://"})," and append the port ",(0,i.jsx)(t.code,{children:":10000"})," to the end of the URL."]}),"\n",(0,i.jsx)(t.h3,{id:"2-generate-the-srt-stream-id",children:"2. Generate the SRT stream ID"}),"\n",(0,i.jsx)(t.p,{children:"The token used with SRT publishing is not the same as the publishing token used for WHIP and RTMP. It is base 64 compressed as binary. This also means substituting certain characters from the original hex values of the original publishing token."}),"\n",(0,i.jsx)(t.p,{children:"Generate the compressed SRT token from your publishing token."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// Base64 encoding and replace '/' with '_', replace '+' with '-', and remove extra '=' padding if necessary.\nfunction encode_token(token) {\n  return Buffer.from(token, 'hex').toString('base64').replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=/g, '');\n}\n\nconst srtToken = encode_token(`${publishToken}`);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["With the compressed ",(0,i.jsx)(t.code,{children:"srtToken"})," you can then construct the streamId with the token and encryption parameters."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"let streamId = `${streamName}?t=${srtToken}`;\n\n// Append the encryption and any other parameters\nif (isEncrypted) {\n  streamId += '&e';\n}\nif (priority) {\n  streamId += `&priority=${priority}`;\n}\nif (sourceId) {\n  streamId += `&sourceId=${sourceId}`;\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"If you only have the SRT token and it becomes necessary to retrieve the original publishing token, you can also do the inverse and decode it."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"function decode_token(srtToken) {\n  return Buffer.from(srtToken.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('hex');\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"3-generate-the-srt-publish-url",children:"3. Generate the SRT publish URL"}),"\n",(0,i.jsxs)(t.p,{children:["When constructing a single publish URL, it is necessary to URL encode the ",(0,i.jsx)(t.strong,{children:"SRT Stream ID"})," and any additional parameters so that the endpoint properly passes all the settings through to the listening server."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"let encodedStreamId = encodeURIComponent(streamId);\nlet publishURL = '${srtPublishPath}?streamid=${encodedStreamId}';\n"})}),"\n",(0,i.jsx)(t.h2,{id:"srt-passphrase-encryption",children:"SRT passphrase encryption"}),"\n",(0,i.jsxs)(t.p,{children:["With passphrase encryption you can further protect your stream from unauthorized access. You enable the encryption in the dashboard by toggling the ",(0,i.jsx)(t.strong,{children:"passphrase encryption"})," setting to on. This generates a passphrase that must be input when starting to broadcast."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:l,width:"600"})}),"\n",(0,i.jsxs)(t.p,{children:["When enabled, a ",(0,i.jsx)(t.code,{children:"&e"})," parameter is appended to the ",(0,i.jsx)(t.strong,{children:"SRT stream ID"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(t.p,{children:"There are some limitations when using SRT with Real-time Streaming:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The SDK supports the H.264 and H.265 video codecs and the AAC audio codec."}),"\n",(0,i.jsx)(t.li,{children:"Multiple programs or sub-streams are not supported."}),"\n",(0,i.jsx)(t.li,{children:'The H.265 video codec is supported on Safari, but will only function if the developer feature is enabled under "Develop > Feature Flags".'}),"\n"]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:h,width:"600"})}),"\n",(0,i.jsxs)(t.p,{children:["If you have needs like these, please ",(0,i.jsx)(t.a,{href:"https://dolby.io/contact",children:"contact us"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,i.jsxs)(t.p,{children:["Learn more by exploring the ",(0,i.jsx)(t.a,{href:"https://dolby.io/blog/tag/broadcast/",children:"developer blog"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/orgs/dolbyio-samples/repositories?q=broadcast",children:"code samples"}),"."]})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var s=n(67294);let i={},r=s.createContext(i);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);