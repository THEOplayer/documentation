"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["54804"],{29783:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"how-to-guides/drm/ezdrm","title":"EZDRM","description":"This article describes how to configure EZDRM with THEOplayer. Head to our page on DRM for more general information.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/04-ezdrm.md","sourceDirName":"how-to-guides/04-drm","slug":"/how-to-guides/drm/ezdrm","permalink":"/documentation/pr-preview/pr-232/theoplayer/v6/how-to-guides/drm/ezdrm","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/04-ezdrm.md","tags":[],"version":"v6","sidebarPosition":4,"frontMatter":{},"sidebar":"roku","previous":{"title":"Comcast","permalink":"/documentation/pr-preview/pr-232/theoplayer/v6/how-to-guides/drm/comcast"},"next":{"title":"Intertrust ExpressPlay","permalink":"/documentation/pr-preview/pr-232/theoplayer/v6/how-to-guides/drm/intertrust-expressplay"}}'),i=r("85893"),o=r("50065");let s={},d="EZDRM",l={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Connectors",id:"connectors",level:3},{value:"Resources",id:"resources",level:2},{value:"Related articles",id:"related-articles",level:2}];function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ezdrm",children:"EZDRM"})}),"\n",(0,i.jsxs)(n.p,{children:["This article describes how to configure ",(0,i.jsx)(n.a,{href:"https://www.ezdrm.com/",children:"EZDRM"})," with THEOplayer. Head to our page on ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/v6/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,i.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,i.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"if (HLS) {\n  let drmConfiguration = {\n    integration: 'ezdrm',\n    fairplay: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_FAIRPLAY>',\n      certificateURL: 'CERTIFICATE_URL>',\n    },\n  };\n  player.source = {\n    sources: {\n      src: '<HLS_STREAM_URL>',\n      type: 'application/x-mpegurl',\n      contentProtection: drmConfiguration,\n    },\n  };\n} else if (DASH) {\n  let drmConfiguration = {\n    integration: 'ezdrm',\n    playready: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_PLAYREADY>',\n    },\n    widevine: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_WIDEVINE>',\n    },\n  };\n  player.source = {\n    sources: {\n      src: '<DASH_STREAM_URL>',\n      type: 'application/dash+xml',\n      contentProtection: drmConfiguration,\n    },\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'DRMConfiguration drmConfiguration = new DRMConfiguration.Builder()\n    .widevine(\n        new KeySystemConfiguration(\n            "<LICENSE_KEY_URL_WIDEVINE>"\n        )\n    )\n    .build();\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,i.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'let drmConfiguration = EzdrmDRMConfiguration(\n    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n    certificateURL: "<CERTIFICATE_URL>",\n)\nlet typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)\nlet sourceDescription = SourceDescription(source: typedSource)\ntheoplayer.source = sourceDescription\n'})}),"\n",(0,i.jsx)(n.h3,{id:"connectors",children:"Connectors"}),"\n",(0,i.jsxs)(n.p,{children:["We are developing open-source DRM connectors that can more easily be maintained and to allow for a modular approach. You can find them in ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"this Github repo"}),", alongside with guides on how to integrate and use them.\nWhen integrating DRM for the first time or updating your integration, the connectors are to be preferred over the pre-integrations."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Web"}),"\nThe EZDRM connector can be found in ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-drm-integration/tree/master/web/src/integration/ezdrm",children:"this folder"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Android SDK"}),"\nConnectors are also the way forward for the current mobile SDKs. There currently is no ready-made connector for this DRM provider: you can choose to develop one based on the examples in the repository, or get in contact with us about making one."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"iOS SDK"}),"\nThe EZDRM connector can be found in ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-drm-integration/blob/master/ios/ContentProtectionIntegration/integration/EzdrmDRMIntegration.swift",children:"here"})]}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.ezdrm.com/html/documentation.asp",children:"https://www.ezdrm.com/html/documentation.asp"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"THEOplayer Github Samples DRM Integration repository"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/v6/how-to-guides/drm/xstream",children:"Xstream"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/v6/how-to-guides/drm/vualto-vudrm",children:"Vualto VuDRM"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/v6/how-to-guides/drm/vimond",children:"Vimond"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/v6/how-to-guides/drm/verizon-uplynk",children:"Verizon Uplynk"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/v6/how-to-guides/drm/verimatrix-multirights",children:"Verimatrix MultiRights"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/v6/how-to-guides/drm/pallycon",children:"PallyCon"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/v6/how-to-guides/drm/nagra-conax-contego",children:"Nagra Conax Contego"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return s}});var t=r(67294);let i={},o=t.createContext(i);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);