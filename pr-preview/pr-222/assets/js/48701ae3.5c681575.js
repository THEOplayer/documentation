"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["30168"],{72002:function(e,t,n){n.r(t),n.d(t,{default:()=>x,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"how-to-guides/ads/spotx","title":"SpotX","description":"SpotX is a global video ad serving platform providing digital media owners with a solution that allows them to monetize their content with video advertising across desktop, mobile and connected devices.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/01-ads/07-spotx.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/spotx","permalink":"/documentation/pr-preview/pr-222/theoplayer/v4/how-to-guides/ads/spotx","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/01-ads/07-spotx.md","tags":[],"version":"v4","sidebarPosition":7,"frontMatter":{},"sidebar":"roku","previous":{"title":"FreeWheel","permalink":"/documentation/pr-preview/pr-222/theoplayer/v4/how-to-guides/ads/freewheel"},"next":{"title":"Google Dynamic Ad Insertion (DAI)","permalink":"/documentation/pr-preview/pr-222/theoplayer/v4/how-to-guides/ads/google-dai"}}'),s=n("85893"),i=n("50065");let l={},d="SpotX",c={},a=[{value:"SDKs",id:"sdks",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integrating SpotX",id:"integrating-spotx",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:3},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:3}];function o(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"spotx",children:"SpotX"})}),"\n",(0,s.jsx)(t.p,{children:"SpotX is a global video ad serving platform providing digital media owners with a solution that allows them to monetize their content with video advertising across desktop, mobile and connected devices."}),"\n",(0,s.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Unverified"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"TBD"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"TBD"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["Your THEOplayer SDK must have the ",(0,s.jsx)(t.code,{children:"SpotX"})," module enabled.\nYou can enable this module when building your THEOplayer SDK through the ",(0,s.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"THEOplayer Development Portal"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"integrating-spotx",children:"Integrating SpotX"}),"\n",(0,s.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsx)(t.p,{children:"Add the SpotX ad integration when configuring the player"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"player.source = {\n    sources: ...,\n    ads: [{\n        integration: 'spotx',\n        ...\n    }]\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["the ",(0,s.jsx)(t.code,{children:"{{SpotXAdDescription}}"})," object provides the following properties:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"integration"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["Use the value 'spotx' to use the SpotX ad integration. The SpotX integration uses Google IMA. To use Google IMA, it is required to load the SDK first. You can find the getting started of Google IMA sdk at: ",(0,s.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/quickstart",children:"https://developers.google.com/interactive-media-ads/docs/sdks/html5/quickstart"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"id"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"number or string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Your SpotX id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cacheBuster"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"boolean"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Add the cb parameter with a random number to the SpotX tag."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maximumAdDuration"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"number or string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"custom"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX custom data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX app data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"device"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX device data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"user"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX user data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"sources"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX ad tag (to directly set the SpotX source link)"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"player.source = {\n    sources: ...,\n    ads: [{\n        integration: 'spotx',\n        id: 123456,\n        cacheBuster: true,\n        app: {\n            bundle: 'com.exampleapps.example',\n            name: 'My CTV App'\n        },\n        device: {\n            ifa: '38400000-8cf0-11bd-b23e-10b96e40000d',\n            ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',\n            geo: {\n                lat: -24.378528,\n                lon: -128.325119\n            },\n            dnt: 1,\n            lmt: 1,\n        },\n        custom: {\n            category: ['category1', 'category2'],\n            somekey: 'somevalue'\n        },\n        user: {\n            yob: 1984,\n            gender: 'm'\n        }\n    }\n]};\n"})}),"\n",(0,s.jsx)(t.h3,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,s.jsxs)(t.p,{children:["Add a ",(0,s.jsx)(t.code,{children:"SpotXAdDescription "}),"to the player before initializing:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"let spotxAdDescription = SpotXAdDescription(id)\nvar source = SourceDescription(..., ads: [spotxAdDescription])\n"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"SpotXAdDescription"})," has the following properties:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"id"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"number or string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Your SpotX id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cacheBuster"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"boolean"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Add the cb parameter with a random number to the SpotX tag."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maximumAdDuration"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"number or string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Add the VMaxd parameter with a duration to the SpotX tag"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ipAddress"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Add an IP Address to the SpotX configuration"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"custom"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX custom data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"app"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX app data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"device"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX device data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"user"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotXData"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX user data"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"sources"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"SpotX ad tag (to directly set the SpotX source link)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"queryParameters"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"[String: SpotXQueryParameter]"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Add custom query parameters to the SpotX tag"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Code Sample:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:'var player = THEOplayer()\nvar spotx: SpotXAdDescription {\n    let app = SpotXData(stringParameters: ["bundle": "com.exampleapps.example", "name": "My CTV App"])\n    let device = SpotXData(stringParameters: ["ifa": "38400000-8cf0-11bd-b23e-10b96e40000d"],  intParameters: ["dnt": 1, "lmt": 1], geoParameter: Geo(lat: -24.378528, lon: -128.325119))\n    let user = SpotXData(stringParameters: ["gender": "m"], intParameters: ["yob": 1984])\n    let custom = SpotXData(stringParameters: ["my-custom-label": "my-custom-value"])\n    return  SpotXAdDescription(id: "85394", cacheBuster: true, app: app, device: device, user: user, custom: custom)\n}\n\nvar source = SourceDescription {\n    let typedSource = TypedSource(src: sourceUrl, type: streamType)\n    return SourceDescription(source: typedSource, ads: [spotx])\n}\n\nplayer.source = source\n'})}),"\n",(0,s.jsx)(t.h3,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,s.jsxs)(t.p,{children:["Add a ",(0,s.jsx)(t.code,{children:"SpotXAdDescription"})," to the player before initializing:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"THEOplayerConfig = new THEOplayerConfig.Builder()\n    .ui(uiConfig)\n    .build();\nTHEOplayerView tpv = new THEOplayerView(this, playerConfig);\n"})}),"\n",(0,s.jsx)(t.p,{children:"OR"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"tpv = findViewById(R.id.theoplayer_view);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"SpotXAdDescription.Builder"})," has the following properties:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Optional"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"spotxAdDescription"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"number or string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Your SpotX id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cacheBuster"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"boolean"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Add the cb parameter with a random number to the SpotX tag."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maximumAdDuration"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"number or string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Add the VMaxd parameter with a duration to the SpotX tag"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ipAddress"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Add an IP Address to the SpotX configuration"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"queryParameters"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"[String: SpotXQueryParameter]"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Add custom query parameters to the SpotX tag. Used to list data like: custom data, device, user, app"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Code Sample:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'SourceDescription source = sourceDescription("http://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")\n    .ads(spotxAdDescription("85394")\n    .cacheBuster(false)\n    .maximumAdDuration(5)\n    .queryParameters(\n        spotxDataQueryParameters()\n            //.param("key1", "value1")\n            .param("device", spotxData().param("ua", "TEST").param("ifa", "IFA").build())\n            .param("myCustomObject", spotxData().param("myCustomString", "abcd").build())\n            .param("app", spotxData().param("appName", "TestApp").param("appVersion", "1.0").build())\n            .param("nested",\n                spotxDataQueryParameters()\n                    .param("nestedObjectKey", "nestedObjectValue")\n                    .param("nestedInNested", spotxDataQueryParameters().param("nestedInNestedObjectKey", "nestedInNestedObjectValue").build())\n                    .build())\n            .build())\n        .build())\n    .build();\ntpv.getPlayer().setSource(source);\n'})})]})}function x(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var r=n(67294);let s={},i=r.createContext(s);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);