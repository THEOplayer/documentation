"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["66117"],{26057:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"how-to-guides/drm/microsoft-azure","title":"Microsoft Azure","description":"This article describes how to configure Microsoft Azure DRM with THEOplayer.","source":"@site/theoplayer/how-to-guides/04-drm/07-microsoft-azure.md","sourceDirName":"how-to-guides/04-drm","slug":"/how-to-guides/drm/microsoft-azure","permalink":"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/drm/microsoft-azure","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/04-drm/07-microsoft-azure.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"roku","previous":{"title":"Irdeto","permalink":"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/drm/irdeto"},"next":{"title":"Nagra Conax Contego","permalink":"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/drm/nagra-conax-contego"}}'),i=n("85893"),o=n("50065");let s={},l="Microsoft Azure",c={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Resources",id:"resources",level:2},{value:"Related articles",id:"related-articles",level:2}];function a(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"microsoft-azure",children:"Microsoft Azure"})}),"\n",(0,i.jsx)(r.p,{children:"This article describes how to configure Microsoft Azure DRM with THEOplayer."}),"\n",(0,i.jsxs)(r.p,{children:["Head to our page on ",(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/drm/introduction",children:"DRM"})," for more general information or head to ",(0,i.jsx)(r.a,{href:"https://github.com/Azure-Samples/media-services-3rdparty-player-samples/tree/master/docs/THEOplayer",children:"Azure Media Services 3rd Party Player Samples - THEOplayer"})," for an implementation reference sample."]}),"\n",(0,i.jsx)(r.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,i.jsx)(r.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"if (HLS) {\n  let drmConfiguration = {\n    integration: 'azure',\n    token: 'AZURE_TOKEN>',\n    fairplay: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_FAIRPLAY>',\n      certificateURL: 'CERTIFICATE_URL>',\n    },\n  };\n  player.source = {\n    sources: {\n      src: '<HLS_STREAM_URL>',\n      type: 'application/x-mpegurl',\n      contentProtection: drmConfiguration,\n    },\n  };\n} else if (DASH) {\n  let drmConfiguration = {\n    integration: 'azure',\n    token: '<AZURE_TOKEN>',\n    playready: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_PLAYREADY>',\n    },\n    widevine: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_WIDEVINE>',\n    },\n  };\n  player.source = {\n    sources: {\n      src: '<DASH_STREAM_URL>',\n      type: 'application/dash+xml',\n      contentProtection: drmConfiguration,\n    },\n  };\n}\n"})}),"\n",(0,i.jsx)(r.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'DRMConfiguration drmConfiguration = new AzureDRMConfiguration.Builder("<CERTIFICATE_URL", "<TOKEN>")\n    .widevine(\n        new KeySystemConfiguration("<LICENSE_KEY_URL_WIDEVINE>")\n    )\n    .build();\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,i.jsx)(r.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-swift",children:'// let headers = [["<KEY>": "<VALUE>"]]\nlet drmConfiguration = AzureDRMConfiguration(\n    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n    certificateURL: "<CERTIFICATE_URL>",\n    token: "<AZURE_TOKEN>"\n    // , headers: headers\n)\nlet typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)\nlet sourceDescription = SourceDescription(source: typedSource)\ntheoplayer.source = sourceDescription\n'})}),"\n",(0,i.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://azure.microsoft.com/nl-nl/services/media-services/content-protection/",children:"https://azure.microsoft.com/nl-nl/services/media-services/content-protection/"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://azure.microsoft.com/en-us/blog/azure-media-services-announces-new-collaboration-with-theoplayer/",children:"https://azure.microsoft.com/en-us/blog/azure-media-services-announces-new-collaboration-with-theoplayer/"})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/drm/comcast",children:"Comcast"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/drm/pallycon",children:"PallyCon"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/drm/buydrm-keyos/introduction",children:"BuyDRM KeyOS"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/drm/arris-titanium",children:"Arris Titanium"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/drm/uplynk",children:"Uplynk"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/drm/xstream",children:"Xstream"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/documentation/pr-preview/pr-263/theoplayer/how-to-guides/drm/vualto-vudrm",children:"Vualto VuDRM"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.com/Azure-Samples/media-services-3rdparty-player-samples/tree/master/docs/THEOplayer",children:"Azure Media Services - THEOplayer Implementation Sample"})}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return s}});var t=n(67294);let i={},o=t.createContext(i);function s(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);