"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["51067"],{90053:function(e,n,r){r.r(n),r.d(n,{default:()=>d,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"how-to-guides/web/uplynk/preplay","title":"Preplay","description":"This article explains how to leverage the Uplynk Preplay API through THEOplayer. This API allows developers to pre-integrate with Uplynk\'s Preplay service.","source":"@site/theoplayer/how-to-guides/web/uplynk/01-preplay.md","sourceDirName":"how-to-guides/web/uplynk","slug":"/how-to-guides/web/uplynk/preplay","permalink":"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/web/uplynk/preplay","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/web/uplynk/01-preplay.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"web","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/web/uplynk/introduction"},"next":{"title":"Uplynk Ads","permalink":"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/web/uplynk/ads"}}'),a=r("85893"),s=r("50065");let i={},o="Preplay",l={},c=[{value:"Stream Configuration (without ads)",id:"stream-configuration-without-ads",level:2},{value:"Stream Configuration (with ads)",id:"stream-configuration-with-ads",level:2},{value:"Preplay Response",id:"preplay-response",level:2},{value:"Using Tokens",id:"using-tokens",level:2}];function p(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"preplay",children:"Preplay"})}),"\n",(0,a.jsx)(n.p,{children:"This article explains how to leverage the Uplynk Preplay API through THEOplayer. This API allows developers to pre-integrate with Uplynk's Preplay service."}),"\n",(0,a.jsxs)(n.p,{children:["Uplynk users can use an API (i.e. ",(0,a.jsx)(n.code,{children:"Preplay"}),") to generate a streaming playlist given one or more assets or advertisements. The Uplynk back-end stitches the content together and allows for server-side ad-insertion (SSAI) when applicable. This document describes how THEOplayer users should configure their source to leverage this Preplay service."]}),"\n",(0,a.jsx)(n.p,{children:"Assumptions:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"THEOplayer assumes the availability of the Preplay API and Uplynk content servers to be 100%, since these identify and provide the necessary streams for playback with this feature."}),"\n",(0,a.jsxs)(n.li,{children:["THEOplayer assumes that developers who are interested in this feature have a basic understanding of the Preplay API. Uplynk documents this service in the ",(0,a.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Develop/Preplayv2.htm",children:"API docs"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"THEOplayer assumes that developers provide correct asset identifiers, as well as the proper content protection level."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"stream-configuration-without-ads",children:"Stream Configuration (without ads)"}),"\n",(0,a.jsx)(n.p,{children:"The examples below demonstrate how to configure a stream through the Uplynk pre-integration."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"player.source = {\n  sources: [\n    {\n      integration: 'uplynk',\n      id: '<your_uplynk_asset_id>',\n      preplayParameters: {}, // Optional, defaults to an empty object. These will be added as query parameters to the Preplay API call.\n      assetType: 'asset', // Optional, defaults to 'asset'. Can also be 'channel' or 'event', following the Uplynk semantics, where 'asset' is On-demand content.\n      contentProtected: false, // Optional, defaults to false.\n    },\n  ],\n};\n\n// Source example for an external id (with optional properties omitted)\nplayer.source = {\n  sources: [\n    {\n      integration: 'uplynk',\n      id: {\n        userId: '<your_uplynk_user_id>',\n        externalId: '<your_uplynk_external_id>',\n      },\n    },\n  ],\n};\n\n// Source example for a regular asset id with e.g. 'delay' parameter and 'sig' token parameter (with optional properties omitted)\nplayer.source = {\n  sources: [\n    {\n      integration: 'uplynk',\n      id: '<your_uplynk_asset_id>',\n      preplayParameters: {\n        delay: '7200',\n        rays: 'dcba',\n        sig: '2ff94739b021912712adafeccd6fa291f11eef0648c3b18b30224b84e0590b4f',\n      },\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The snippet above gives a quick overview of the structure of an Uplynk-specific source, also known as an ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/UplynkSource.html",children:"UplynkSource"}),". More information on certain properties:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"id"}),": The ID field identifies the asset. Instead of a single string, developers can also specify an array of asset IDs as strings, which will be stitched into a continuous stream. The same goes for the ",(0,a.jsx)(n.code,{children:"externalId"})," property in case an external ID is used in the source."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"preplayParameters"}),": The ",(0,a.jsx)(n.code,{children:"preplayParameters"})," object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"contentProtected"}),": Boolean value which will internally set any necessary content-protection information. No content-protection details have to be specified by the customer."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"A Preplay request must include all parameters defined within the playback request, hence these parameters must be included in the THEOplayer source"}),". This request must also include a digital signature if the 'Require a token for playback' option is enabled in the back-end on the corresponding live channel. (See also : ",(0,a.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Tutorials/Signed-Playback-URL-Tutorial.htm",children:"Signing a Playback URL Tutorial"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Uplynk specific documentation on the available playback URL query parameters can be found on the Uplynk documentation site under ",(0,a.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Setup/Customizing-Playback.htm",children:"Customizing Playback via Parameters"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Some parameters can be excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would for this reason be excluded from the digital signature."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"stream-configuration-with-ads",children:"Stream Configuration (with ads)"}),"\n",(0,a.jsxs)(n.p,{children:["The examples below demonstrate how to configure a stream with server-side ads through an ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/UplynkSource.html",children:"UplynkSource"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"player.source = {\n    sources: [{\n        integration: 'uplynk',\n        id: [\n            '<your_uplynk_content_first_part>',\n            '<your_uplynk_ad_break_1>',\n            '<your_uplynk_content_middle_part>',\n            '<your_uplynk_ad_break_2>',\n            '<your_uplynk_content_last_part>'\n        ],\n        preplayParameters: {\n            // Parameters here should specify the necessary ad parameters for the Preplay API\n            ad.param1: 'param_val1',\n            ad.param2: 'param_val2'\n        },\n    }]\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"More information on certain properties:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"preplayParameters"}),": The ",(0,a.jsx)(n.code,{children:"preplayParameters"})," object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:["A Preplay request must include all parameters defined within the ",(0,a.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Setup/Playback-URLs.htm#LiveChannelPURLs",children:"playback request"}),", hence these parameters must be included in the THEOplayer source"]}),". This request must also include a digital signature if the 'Require a token for playback' option is enabled in the back-end on the corresponding live channel. (See also : ",(0,a.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Tutorials/Signed-Playback-URL-Tutorial.htm",children:"Signing a Playback URL Tutorial"}),")","\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note the confusion that the provided link only mentions signing the ",(0,a.jsx)(n.strong,{children:"playback URL"}),", even though we are describing using\ntokens for the call to the Preplay API. However, this process is also valid for signing the ",(0,a.jsx)(n.code,{children:"preplayParameters"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Uplynk specific documentation on the available playback URL query parameters can be found on the Uplynk documentation site under ",(0,a.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Setup/Customizing-Playback.htm",children:"Customizing Playback via Parameters"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Some parameters can be excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would for this reason be excluded from the digital signature."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"preplay-response",children:"Preplay Response"}),"\n",(0,a.jsxs)(n.p,{children:["THEOplayer automatically interprets the response returned by the Preplay service. However, if a developer wants to perform their own logic with the Preplay API response, then they can intercept the ",(0,a.jsx)(n.code,{children:"preplayresponse"})," event."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const listener = (event) => {\n  console.log('Do something with the raw response of the Preplay API call', event.response);\n};\n\nplayer.uplynk.addEventListener('preplayresponse', listener);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"using-tokens",children:"Using Tokens"}),"\n",(0,a.jsxs)(n.p,{children:["Uplynk users often leverage URL signatures (i.e. tokens) to further secure their content -- on top of AES-128 encryption or studio DRM.\nA token is (typically) generated on back-end using an API key and a set of parameters, as described on\n",(0,a.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Tutorials/Signed-Playback-URL-Tutorial.htm",children:"Signing a Playback URL Tutorial"}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note the confusion that the provided link only mentions signing the ",(0,a.jsx)(n.strong,{children:"playback URL"}),", even though we are describing using\ntokens for the call to the Preplay API. However, this process is also valid for signing the ",(0,a.jsx)(n.code,{children:"preplayParameters"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This set of parameters should also be passed along to the ",(0,a.jsx)(n.code,{children:"preplayParameters"})," in an ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/UplynkSource.html",children:"UplynkSource"}),".\nIf you do not configure the ",(0,a.jsx)(n.code,{children:"preplayParameters"})," correctly in relation to your signature parameters, then the Preplay request made by THEOplayer will most likely return an invalid Preplay response, preventing THEOplayer from setting up your stream."]}),"\n",(0,a.jsxs)(n.p,{children:["Let's consider a set-up where an Uplynk customer uses both URL signatures and multi-DRM.\n",(0,a.jsxs)(n.a,{href:"https://api-docs.uplynk.com/#Develop/Preplayv2.htm?Highlight=rmt",children:["When you do DRM, you must specify the ",(0,a.jsx)(n.code,{children:"rmt"})," and ",(0,a.jsx)(n.code,{children:"manifest"})," parameter"]}),",\n",(0,a.jsx)(n.strong,{children:"or"})," you can set ",(0,a.jsx)(n.code,{children:"allowrmt"})," to ",(0,a.jsx)(n.code,{children:"1"})," instead. We recommend using the latter, as demonstrated in our Node.js reference project at ",(0,a.jsx)(n.a,{href:"https://github.com/THEOplayer/theoplayer-verizon-media-node-js",children:"GitHub"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["So, let's say you want to generate a signature on your back-end that is compatible with HLS + FairPlay, MPEG-DASH + Widevine and MPEG-DASH + PlayReady,\nthen it could look like the snippet below using ",(0,a.jsx)(n.code,{children:"allowrmt"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"let params = {\n  v: '2',\n  tc: '1',\n  exp: 36000,\n  rn: 12345,\n  ct: 'a',\n  cid: '<your_uplynk_asset_id>',\n  allowrmt: 1,\n};\nlet query = Object.keys(params)\n  .map((key) => key + '=' + params[key])\n  .join('&');\nlet sig = CryptoJS.HmacSHA256(query, '<your_api_secret>').toString();\nparams['sig'] = sig;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now you want to communicate this entire ",(0,a.jsx)(n.code,{children:"params"})," object to your client-side, and set it as the value for ",(0,a.jsx)(n.code,{children:"preplayParameters"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"player.source = {\n  sources: {\n    integration: 'uplynk',\n    id: '<your_uplynk_asset_id>',\n    preplayParameters: params,\n    assetType: 'asset',\n    contentProtected: true,\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When there's a mismatch between signature parameters and Preplay parameters, the Preplay response usually returns ",(0,a.jsx)(n.code,{children:"Invalid token signature"})," and playback is not possible."]}),"\n",(0,a.jsxs)(n.p,{children:["Having difficulties figuring out tokens, DRM and THEOplayer? Check out the Node.js reference project at ",(0,a.jsx)(n.a,{href:"https://github.com/THEOplayer/theoplayer-verizon-media-node-js",children:"GitHub"}),"."]}),"\n",(0,a.jsx)(n.h1,{id:"related-articles",children:"Related articles"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/web/uplynk/ads",children:"Uplynk - Ads"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-255/theoplayer/how-to-guides/web/uplynk/ping",children:"Uplynk - Ping"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var t=r(67294);let a={},s=t.createContext(a);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);