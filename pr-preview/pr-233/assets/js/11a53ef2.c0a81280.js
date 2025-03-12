"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["15414"],{43792:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"how-to-guides/drm/arris-titanium","title":"Arris Titanium","description":"This article describes how to configure Arris Titanium DRM with THEOplayer.","source":"@site/theoplayer/how-to-guides/04-drm/01-arris-titanium.md","sourceDirName":"how-to-guides/04-drm","slug":"/how-to-guides/drm/arris-titanium","permalink":"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/arris-titanium","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/04-drm/01-arris-titanium.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/introduction"},"next":{"title":"Axinom","permalink":"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/axinom"}}'),i=t("85893"),o=t("50065");let s={},a="Arris Titanium",d={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Connectors",id:"connectors",level:2},{value:"Resources",id:"resources",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"arris-titanium",children:"Arris Titanium"})}),"\n",(0,i.jsxs)(n.p,{children:["This article describes how to configure Arris Titanium DRM with THEOplayer.\nHead to our page on ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,i.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,i.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"if (HLS) {\n  let drmConfiguration = {\n    integration: 'titanium',\n    accountName: '<ACCOUNT_NAME>',\n    customerName: '<CUSTOMER_NAME>',\n    friendlyName: '<FRIENDLY_NAME>',\n    portalId: '<PORTAL_ID>',\n    authToken: '<AXINOM_TOKEN>',\n    fairplay: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_FAIRPLAY>',\n      certificateURL: 'CERTIFICATE_URL>',\n    },\n  };\n  player.source = {\n    sources: {\n      src: '<HLS_STREAM_URL>',\n      type: 'application/x-mpegurl',\n      contentProtection: drmConfiguration,\n    },\n  };\n} else if (DASH) {\n  let drmConfiguration = {\n    integration: 'titanium',\n    accountName: '<ACCOUNT_NAME>',\n    customerName: '<CUSTOMER_NAME>',\n    friendlyName: '<FRIENDLY_NAME>',\n    portalId: '<PORTAL_ID>',\n    authToken: '<AXINOM_TOKEN>',\n    playready: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_PLAYREADY>',\n    },\n    widevine: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_WIDEVINE>',\n    },\n  };\n  player.source = {\n    sources: {\n      src: '<DASH_STREAM_URL>',\n      type: 'application/dash+xml',\n      contentProtection: drmConfiguration,\n    },\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'DRMConfiguration drmConfiguration = TitaniumDRMConfiguration.Builder\n    .titaniumDrm("<ACCOUNT_NAME>", ">CUSTOMER_NAME>", "<PORTAL_ID>")\n    // .friendlyName("<FRIENDLY_NAME>")\n    // .authToken("<AUTH_TOKEN>")\n    .widevine(\n        new KeySystemConfiguration(\n            "<LICENSE_KEY_URL_WIDEVINE>"\n        )\n    )\n    .build();\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,i.jsx)(n.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/introduction",children:"DRM"})," (custom configuration)."]}),"\n",(0,i.jsx)(n.h2,{id:"connectors",children:"Connectors"}),"\n",(0,i.jsxs)(n.p,{children:["We are developing open-source DRM connectors that can more easily be maintained and to allow for a modular approach. You can find them in ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"this Github repo"}),", alongside with guides on how to integrate and use them.\nWhen integrating DRM for the first time or updating your integration, the connectors are to be preferred over the pre-integrations."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Web and Android SDKs"}),"\nThere currently is no ready-made connector for this DRM provider: you can choose to develop one based on the examples in the repository, or get in contact with us about making one."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"iOS SDKs"}),"\nThe Arris Titanium DRM connector can be found ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-drm-integration/blob/master/ios/ContentProtectionIntegration/integration/ArrisTitaniumDrmIntegration.swift",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.arris.com/products/titanium-cas/",children:"https://www.arris.com/products/titanium-cas/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"THEOplayer Github Samples DRM Integration repository"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/axinom",children:"Axinom"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/castlabs-drmtoday/introduction",children:"castLabs DRMToday"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/ezdrm",children:"EZDRM"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/intertrust-expressplay",children:"Intertrust ExpressPlay"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/irdeto",children:"Irdeto"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/microsoft-azure",children:"Microsoft Azure"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-233/theoplayer/how-to-guides/drm/nagra-conax-contego",children:"Nagra Conax Contego"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(67294);let i={},o=r.createContext(i);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);