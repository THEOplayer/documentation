"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["1929"],{85265:function(e,n,r){r.r(n),r.d(n,{default:()=>d,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"external/iOS-Connector/Code/Uplynk/docs/preplay","title":"Preplay","description":"This article explains how to leverage the Uplynk Preplay API through THEOplayer. This API allows developers to pre-integrate with Uplynk Preplay service.","source":"@site/theoplayer/external/iOS-Connector/Code/Uplynk/docs/preplay.md","sourceDirName":"external/iOS-Connector/Code/Uplynk/docs","slug":"/connectors/ios/uplynk/preplay","permalink":"/documentation/pr-preview/pr-243/theoplayer/connectors/ios/uplynk/preplay","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/iOS-Connector/blob/-/Code/Uplynk/docs/preplay.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/connectors/ios/uplynk/preplay"},"sidebar":"ios","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-243/theoplayer/connectors/ios/uplynk/introduction"},"next":{"title":"Uplynk Ads","permalink":"/documentation/pr-preview/pr-243/theoplayer/connectors/ios/uplynk/ads"}}'),t=r("85893"),a=r("50065");let i={sidebar_position:1,slug:"/connectors/ios/uplynk/preplay"},o="Preplay",l={},c=[{value:"Stream Configuration (without ads)",id:"stream-configuration-without-ads",level:2},{value:"Stream Configuration (with ads)",id:"stream-configuration-with-ads",level:2},{value:"Preplay Response",id:"preplay-response",level:2},{value:"Using Tokens",id:"using-tokens",level:2}];function p(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"preplay",children:"Preplay"})}),"\n",(0,t.jsx)(n.p,{children:"This article explains how to leverage the Uplynk Preplay API through THEOplayer. This API allows developers to pre-integrate with Uplynk Preplay service."}),"\n",(0,t.jsx)(n.p,{children:"Uplynk users can use an API (i.e. Preplay) to generate a streaming playlist given 1 or more assets or advertisements. The back-end of Uplynk stitches the content together and allows for server-side ad-insertion (SSAI) when applicable. This document describes how THEOplayer users should configure their source to leverage this Preplay service."}),"\n",(0,t.jsx)(n.p,{children:"Assumptions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"THEOplayer assumes the availability of the Preplay API and Uplynk content servers to be 100%, since these identify and provide the necessary streams for playback with this feature."}),"\n",(0,t.jsxs)(n.li,{children:["THEOplayer assumes that developers who are interested in this feature have a basic understanding of the Preplay API. Uplynk documents this service at ",(0,t.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Develop/Preplayv2.htm",children:"https://api-docs.uplynk.com/#Develop/Preplayv2.htm"})]}),"\n",(0,t.jsx)(n.li,{children:"THEOplayer assumes that developers provide correct asset identifiers, as well as the proper content protection level."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"stream-configuration-without-ads",children:"Stream Configuration (without ads)"}),"\n",(0,t.jsx)(n.p,{children:"The examples below demonstrate how to configure a stream through the Uplynk connector."}),"\n",(0,t.jsxs)(n.p,{children:["We start by creating an ",(0,t.jsx)(n.code,{children:"UplynkSSAIConfiguration"})," object that describes how to configure an Uplynk source."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'    let ssaiConfiguration = UplynkSSAIConfiguration(\n                                id: .asset(ids: [ your list of asset IDs]),\n                                assetType: .asset or .channel,\n                                prefix: "https://content.uplynk.com", \n                                preplayParameters: [ Dictionary of parameters ]\n                                contentProtected: true or false)\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"id"}),": The ID field identifies the asset. Instead of a single string, developers can also specify an array of asset IDs as strings, which will be stitched into a continuous stream. Assets can also be identified by ",(0,t.jsx)(n.code,{children:"externalIds"})," and a ",(0,t.jsx)(n.code,{children:"userId"}),". In that case, you can instantiate a ",(0,t.jsx)(n.code,{children:".external(ids: [list of channel IDs], userID: your user ID)"})," instead."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"preplayParameters"}),": The ",(0,t.jsx)(n.code,{children:"preplayParameters"})," object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"contentProtected"}),": Boolean value which will internally set any necessary content-protection information. No content-protection details have to be specified by the customer."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A Preplay request must include all parameters defined within the playback request, hence these parameters must be included in the THEOplayer source"}),". This request must also include a digital signature if the 'Require a token for playback' option is enabled in the back-end on the corresponding live channel. (See also : ",(0,t.jsx)(n.a,{href:"https://docs.uplynk.com/docs/sign-playback-url",children:"Signing a Playback URL Tutorial"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Uplynk specific documentation on the available playback URL query parameters can be found on the Uplynk documentation site under ",(0,t.jsx)(n.a,{href:"https://docs.uplynk.com/docs/customize-playback-via-parameters",children:"Customizing Playback via Parameters"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Some parameters can be excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would for this reason be excluded from the digital signature."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Now, you can create a typed source, and attach the ",(0,t.jsx)(n.code,{children:"UplynkSSAIConfiguration"})," object to the ",(0,t.jsx)(n.code,{children:"ssai"})," property of the source"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'// Swift examples\nlet myTypedSource = TypedSource(src: "",\n                                type: "application/x-mpegurl",\n                                ssai: ssaiConfiguration)\n\nlet sourceDescription = SourceDescription(source: typedSource)\nyourTHEOplayer.source = sourceDescription\n'})}),"\n",(0,t.jsx)(n.h2,{id:"stream-configuration-with-ads",children:"Stream Configuration (with ads)"}),"\n",(0,t.jsxs)(n.p,{children:["Ad specific parameters can be passed in the ",(0,t.jsx)(n.code,{children:"preplayParameters"})," argument of the ",(0,t.jsx)(n.code,{children:"UplynkSSAIConfiguration"}),". An example of that is:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'    let ssaiConfiguration = UplynkSSAIConfiguration(\n                                id: ...\n                                assetType: ...,\n                                prefix: ..., \n                                preplayParameters: [\n                                    // Parameters here should specify the necessary ad parameters for the Preplay API\n                                    "ad.param1": "param_val1",\n                                    "ad.param2": "param_val2" \n                                ],\n                                contentProtected: ...)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"preplay-response",children:"Preplay Response"}),"\n",(0,t.jsxs)(n.p,{children:["THEOplayer automatically interprets the response returned by the Preplay service. However, if a developer wants to perform their own logic with the Preplay API response, then they can register their implementation of the ",(0,t.jsx)(n.code,{children:"UplynkEventListener"})," protocol through the ",(0,t.jsx)(n.code,{children:"UplynkConnector"})," constructor. There, you can get access to the ",(0,t.jsx)(n.code,{children:"PrePlayLiveResponse"})," or ",(0,t.jsx)(n.code,{children:"PrePlayVODResponse"})," objects through:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"    func onPreplayLiveResponse(_ response: PrePlayLiveResponse) { ... }\n    func onPreplayVODResponse(_ response: PrePlayVODResponse) { ... }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-tokens",children:"Using Tokens"}),"\n",(0,t.jsx)(n.p,{children:"Uplynk users often leverage URL signatures (i.e. tokens) to further secure their content -- on top of AES-128 encryption or studio DRM."}),"\n",(0,t.jsxs)(n.p,{children:["A token is (typically) generated on back-end using an API key and a set of parameters.\n(The documentation at ",(0,t.jsx)(n.a,{href:"https://docs.uplynk.com/docs/sign-playback-url",children:"Signing a Playback URL Tutorial"})," describes this process.) This set of parameters should also be passed along to the ",(0,t.jsx)(n.code,{children:"playbackURLParameters"})," in a ",(0,t.jsx)(n.code,{children:"UplynkSSAIConfiguration"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you do not configure the ",(0,t.jsx)(n.code,{children:"playbackURLParameters"})," correctly in relation to your signature parameters, then the Preplay request made by THEOplayer will most likely return an invalid Preplay response, preventing THEOplayer from setting up your stream."]}),"\n",(0,t.jsx)(n.h1,{id:"related-articles",children:"Related articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-243/theoplayer/connectors/ios/uplynk/ads",children:"Uplynk - Ads"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-243/theoplayer/connectors/ios/uplynk/ping",children:"Uplynk - Ping"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var s=r(67294);let t={},a=s.createContext(t);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);