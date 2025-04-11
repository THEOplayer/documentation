"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["7401"],{43412:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"how-to-guides/drm/verizon-uplynk","title":"Verizon Uplynk","description":"Important: Verizon Media Platform customers should configure DRM through the THEOplayer Verizon Media integration.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/04-drm/12-verizon-uplynk.md","sourceDirName":"how-to-guides/04-drm","slug":"/how-to-guides/drm/verizon-uplynk","permalink":"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/drm/verizon-uplynk","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/04-drm/12-verizon-uplynk.md","tags":[],"version":"v7","sidebarPosition":12,"frontMatter":{},"sidebar":"roku","previous":{"title":"Vualto VuDRM","permalink":"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/drm/vualto-vudrm"},"next":{"title":"Xstream","permalink":"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/drm/xstream"}}'),i=r("85893"),o=r("50065");let s={},d="Verizon Uplynk",l={},a=[{value:"SDKs",id:"sdks",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Resources",id:"resources",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"verizon-uplynk",children:"Verizon Uplynk"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important:"})," Verizon Media Platform customers should configure DRM through the ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/preplay",children:"THEOplayer Verizon Media integration"}),".\nMore specifically, to configure DRM, developers should use the ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/miscellaneous/verizon-media/preplay",children:(0,i.jsx)(n.code,{children:"contentProtected"})})," flag.\n(The Verizon Media integration provides a pre-integration with Verizon Media's Preplay, Ping and Asset Info services,\nexposes additional APIs, and enhances your UI and UX.)"]}),"\n",(0,i.jsxs)(n.p,{children:["This article describes how to configure Verizon Uplynk DRM with THEOplayer ",(0,i.jsx)(n.strong,{children:"if"})," you are not interested in using the aforementioned Verizon Media integration."]}),"\n",(0,i.jsxs)(n.p,{children:["Head to our page on ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,i.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,i.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"if (HLS) {\n  let drmConfiguration = {\n    integration: 'uplynk',\n    fairplay: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_FAIRPLAY>',\n      certificateURL: 'CERTIFICATE_URL>',\n    },\n  };\n  player.source = {\n    sources: {\n      src: '<HLS_STREAM_URL>',\n      type: 'application/x-mpegurl',\n      contentProtection: drmConfiguration,\n    },\n  };\n} else if (DASH) {\n  let drmConfiguration = {\n    integration: 'uplynk',\n    playready: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_PLAYREADY>',\n    },\n    widevine: {\n      licenseAcquisitionURL: '<LICENSE_KEY_URL_WIDEVINE>',\n    },\n  };\n  player.source = {\n    sources: {\n      src: '<DASH_STREAM_URL>',\n      type: 'application/dash+xml',\n      contentProtection: drmConfiguration,\n    },\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'DRMConfiguration drmConfiguration = new DRMConfiguration.Builder()\n    .widevine(\n        new KeySystemConfiguration(\n            "<LICENSE_KEY_URL_WIDEVINE>"\n        )\n    )\n    .build();\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,i.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'// let headers = [["<KEY>": "<VALUE>"]]\nlet drmConfiguration = UplynkDRMConfiguration(\n    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n    certificateURL: "<CERTIFICATE_URL>",\n    // , headers\n)\nlet typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)\nlet sourceDescription = SourceDescription(source: typedSource)\ntheoplayer.source = sourceDescription\n'})}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.verizondigitalmedia.com/platform/uplynk-video-streaming/",children:"https://www.verizondigitalmedia.com/platform/uplynk-video-streaming/"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/drm/axinom",children:"Axinom"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/drm/castlabs-drmtoday/introduction",children:"castLabs DRMToday"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/drm/ezdrm",children:"EZDRM"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/drm/intertrust-expressplay",children:"Intertrust ExpressPlay"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/drm/irdeto",children:"Irdeto"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/drm/microsoft-azure",children:"Microsoft Azure"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v7/how-to-guides/drm/nagra-conax-contego",children:"Nagra Conax Contego"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return s}});var t=r(67294);let i={},o=t.createContext(i);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);