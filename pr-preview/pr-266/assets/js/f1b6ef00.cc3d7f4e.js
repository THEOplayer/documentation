"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["65945"],{34613:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"external/android-connector/connectors/uplynk/docs/preplay","title":"Preplay","description":"This article explains how to leverage the Uplynk Preplay API through THEOplayer. This API allows developers to pre-integrate with Uplynk Preplay service.","source":"@site/theoplayer/external/android-connector/connectors/uplynk/docs/preplay.md","sourceDirName":"external/android-connector/connectors/uplynk/docs","slug":"/connectors/android/uplynk/preplay","permalink":"/documentation/pr-preview/pr-266/theoplayer/connectors/android/uplynk/preplay","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/android-connector/blob/-/connectors/uplynk/docs/preplay.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/connectors/android/uplynk/preplay"},"sidebar":"android","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-266/theoplayer/connectors/android/uplynk/introduction"},"next":{"title":"Uplynk Ads","permalink":"/documentation/pr-preview/pr-266/theoplayer/connectors/android/uplynk/ads"}}'),t=r("85893"),o=r("50065");let i={sidebar_position:1,slug:"/connectors/android/uplynk/preplay"},a="Preplay",l={},c=[{value:"Stream Configuration (without ads)",id:"stream-configuration-without-ads",level:2},{value:"Stream Configuration (with ads)",id:"stream-configuration-with-ads",level:2},{value:"Preplay Response",id:"preplay-response",level:2},{value:"Using Tokens",id:"using-tokens",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"preplay",children:"Preplay"})}),"\n",(0,t.jsx)(n.p,{children:"This article explains how to leverage the Uplynk Preplay API through THEOplayer. This API allows developers to pre-integrate with Uplynk Preplay service."}),"\n",(0,t.jsx)(n.p,{children:"Uplynk users can use an API (i.e. Preplay) to generate a streaming playlist given 1 or more assets or advertisements. The back-end of Uplynk stitches the content together and allows for server-side ad-insertion (SSAI) when applicable. This document describes how THEOplayer users should configure their source to leverage this Preplay service."}),"\n",(0,t.jsx)(n.p,{children:"Assumptions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"THEOplayer assumes the availability of the Preplay API and Uplynk content servers to be 100%, since these identify and provide the necessary streams for playback with this feature."}),"\n",(0,t.jsxs)(n.li,{children:["THEOplayer assumes that developers who are interested in this feature have a basic understanding of the Preplay API. Uplynk documents this service at ",(0,t.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Develop/Preplayv2.htm",children:"https://api-docs.uplynk.com/#Develop/Preplayv2.htm"})]}),"\n",(0,t.jsx)(n.li,{children:"THEOplayer assumes that developers provide correct asset identifiers, as well as the proper content protection level."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"stream-configuration-without-ads",children:"Stream Configuration (without ads)"}),"\n",(0,t.jsx)(n.p,{children:"The examples below demonstrate how to configure a stream through the Uplynk connector."}),"\n",(0,t.jsxs)(n.p,{children:["We start by creating an ",(0,t.jsx)(n.code,{children:"UplynkSsaiDescription"})," object that describes how to configure an Uplynk source."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'    val ssaiDescription = UplynkSsaiDescription\n        .Builder()\n        .prefix("https://content.uplynk.com")\n        .assetType(UplynkAssetType.ASSET)\n        .assetIds( your list of asset IDs )\n        .preplayParameters( your linkedMapOf preplay parameters)\n        .contentProtected(false)\n        .build()\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"assetIds"}),": This field identifies the asset. Developers can also specify an array of one or more asset IDs as strings, which will be stitched into a continuous stream. Assets can also be identified by ",(0,t.jsx)(n.code,{children:"externalIds"})," and a ",(0,t.jsx)(n.code,{children:"userId"})," in the builder. ",(0,t.jsx)(n.code,{children:"userId"})," ",(0,t.jsx)(n.strong,{children:"must"})," always be provided with ",(0,t.jsx)(n.code,{children:"externalIds"})," else ",(0,t.jsx)(n.code,{children:"IllegalArgumentException"})," will be thrown."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"preplayParameters"}),": The ",(0,t.jsx)(n.code,{children:"preplayParameters"})," object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"contentProtected"}),": Boolean value which will internally set any necessary content-protection information. No content-protection details have to be specified by the customer."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A Preplay request must include all parameters defined within the playback request, hence these parameters must be included in the THEOplayer source"}),". This request must also include a digital signature if the 'Require a token for playback' option is enabled in the back-end on the corresponding live channel. (See also : ",(0,t.jsx)(n.a,{href:"https://docs.uplynk.com/docs/sign-playback-url",children:"Signing a Playback URL Tutorial"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Uplynk specific documentation on the available playback URL query parameters can be found on the Uplynk documentation site under ",(0,t.jsx)(n.a,{href:"https://docs.uplynk.com/docs/customize-playback-via-parameters",children:"Customizing Playback via Parameters"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Some parameters can be excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would for this reason be excluded from the digital signature."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Now, you can create a typed source, and attach the ",(0,t.jsx)(n.code,{children:"UplynkSsaiDescription"})," object to the ",(0,t.jsx)(n.code,{children:"ssai"})," property of the source"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'    val typedSource = TypedSource.Builder("no source")\n        .ssai(ssai)\n        .build()\n    \n    val sourceDescription = SourceDescription.Builder(typedSource)\n    yourTHEOplayer.source = sourceDescription\n'})}),"\n",(0,t.jsx)(n.h2,{id:"stream-configuration-with-ads",children:"Stream Configuration (with ads)"}),"\n",(0,t.jsxs)(n.p,{children:["Ad specific parameters can be passed in the ",(0,t.jsx)(n.code,{children:"preplayParameters"})," argument of the ",(0,t.jsx)(n.code,{children:"UplynkSsaiDescription"}),". An example of that is:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'    val ssaiDescription = UplynkSsaiDescription\n        .Builder()\n        .prefix("https://content.uplynk.com")\n        .assetType(UplynkAssetType.ASSET)\n        .assetIds(...)\n        .preplayParameters(\n            linkedMapOf(\n                "ad" to "adtest",\n                "ad.lib" to "15_sec_spots"\n            )\n        )\n        .contentProtected(false)\n        .build()\n'})}),"\n",(0,t.jsx)(n.h2,{id:"preplay-response",children:"Preplay Response"}),"\n",(0,t.jsxs)(n.p,{children:["THEOplayer automatically interprets the response returned by the Preplay service. However, if a developer wants to perform their own logic with the Preplay API response, then they can register their implementation of the ",(0,t.jsx)(n.code,{children:"UplynkListener"})," interface through the ",(0,t.jsx)(n.code,{children:"UplynkConnector"})," ",(0,t.jsx)(n.code,{children:"addListener"}),". There, you can get access to the ",(0,t.jsx)(n.code,{children:"PreplayLiveResponse"})," or ",(0,t.jsx)(n.code,{children:"PreplayVodResponse"})," objects through:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'    uplynkConnector.addListener(object : UplynkListener {\n        .....\n    \n        override fun onPreplayLiveResponse(response: PreplayLiveResponse) {\n            Log.d("UplynkConnectorEvents", "PREPLAY_LIVE_RESPONSE $response")\n        }\n    \n        override fun onPreplayVodResponse(response: PreplayVodResponse) {\n            Log.d("UplynkConnectorEvents", "PREPLAY_VOD_RESPONSE $response")\n        }\n    }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"using-tokens",children:"Using Tokens"}),"\n",(0,t.jsx)(n.p,{children:"Uplynk users often leverage URL signatures (i.e. tokens) to further secure their content -- on top of AES-128 encryption or studio DRM."}),"\n",(0,t.jsxs)(n.p,{children:["A token is (typically) generated on back-end using an API key and a set of parameters.\n(The documentation at ",(0,t.jsx)(n.a,{href:"https://docs.uplynk.com/docs/sign-playback-url",children:"Signing a Playback URL Tutorial"})," describes this process.) This set of parameters should also be passed along to the ",(0,t.jsx)(n.code,{children:"playbackUrlParameters"})," in a ",(0,t.jsx)(n.code,{children:"UplynkSsaiDescription"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you do not configure the ",(0,t.jsx)(n.code,{children:"playbackUrlParameters"})," correctly in relation to your signature parameters, then the Preplay request made by THEOplayer will most likely return an invalid Preplay response, preventing THEOplayer from setting up your stream."]}),"\n",(0,t.jsx)(n.h1,{id:"related-articles",children:"Related articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/connectors/android/uplynk/ads",children:"Uplynk - Ads"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/connectors/android/uplynk/ping",children:"Uplynk - Ping"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var s=r(67294);let t={},o=s.createContext(t);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);