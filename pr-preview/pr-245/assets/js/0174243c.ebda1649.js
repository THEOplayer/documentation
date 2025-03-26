"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["20509"],{40933:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"how-to-guides/drm/introduction","title":"Introduction","description":"THEOplayer supports FairPlay, PlayReady and Widevine by default. To connect to such a DRM system, developers can use a ContentProtectionDescription (or DRMConfiguration, depending on the SDK).","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/00-introduction.md","sourceDirName":"how-to-guides/04-drm","slug":"/how-to-guides/drm/introduction","permalink":"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/00-introduction.md","tags":[],"version":"v6","sidebarPosition":0,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/cast/airplay/introduction"},"next":{"title":"Arris Titanium","permalink":"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/arris-titanium"}}'),o=r("85893"),t=r("50065");let s={},a="Introduction",d={},c=[{value:"Pre-integrations",id:"pre-integrations",level:2},{value:"Custom configuration",id:"custom-configuration",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Roku SDK",id:"roku-sdk",level:5},{value:"Custom Integration",id:"custom-integration",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,o.jsxs)(n.p,{children:["THEOplayer supports FairPlay, PlayReady and Widevine by default. To connect to such a DRM system, developers can use a ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/SourceDescription.html",children:"ContentProtectionDescription"})," (or DRMConfiguration, depending on the SDK).\nHowever, more often than not, developers are working with a multi-DRM vendor. These vendors take care of their DRM needs. The last challenge for developers is to integrate the provided DRM solution in a video player.\nTHEOplayer is partnered with many multi-DRM vendors to lighten this burden. In our partnerships, we validate the compatibly and often provide integrations."]}),"\n",(0,o.jsx)(n.h2,{id:"pre-integrations",children:"Pre-integrations"}),"\n",(0,o.jsx)(n.p,{children:"THEOplayer is pre-integrated with a number of commercial multi-DRM vendors."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/arris-titanium",children:"Arris Titanium"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/axinom",children:"Axinom"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/buydrm-keyos/introduction",children:"BuyDRM KeyOS"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/castlabs-drmtoday/introduction",children:"castLabs DRMToday"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/comcast",children:"Comcast"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/ezdrm",children:"EZDRM"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/intertrust-expressplay",children:"Intertrust ExpressPlay"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/irdeto",children:"Irdeto"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/microsoft-azure",children:"Microsoft Azure"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/nagra-conax-contego",children:"Nagra Conax Contego"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/verimatrix-multirights",children:"Verimatrix MultiRights"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/vimond",children:"Vimond"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/vualto-vudrm",children:"Vualto VuDRM"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/verizon-uplynk",children:"Verizon Uplynk"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/xstream",children:"Xstream"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/how-to-play-clear-key-protected-stream",children:"How to play a Clear Key protected stream in THEOplayer?"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v6/how-to-guides/drm/how-to-do-offline-drm/introduction",children:"How to do offline DRM"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"custom-configuration",children:"Custom configuration"}),"\n",(0,o.jsx)(n.p,{children:"Developers can use the generic DRM-functionalities in case in-house DRM-solutions are used, or services from DRM-vendors are used which haven't been pre-integrated by THEOplayer."}),"\n",(0,o.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,o.jsxs)(n.p,{children:["To configure DRM on the Web SDK, developers can put a ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/SourceDescription.html#sources",children:"ContentProtectionDescription"})," inside of a ",(0,o.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/SourceDescription.html",children:"SourceDescription"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'if (HLS) {\n  let drmConfiguration = {\n    fairplay: {\n      licenseAcquisitionURL: \'<LICENSE_KEY_URL_FAIRPLAY>\',\n      certificateURL: \'CERTIFICATE_URL>\',\n      // "certificate": "<CERTIFICATE_AS_STRING_OR_UInt8Array>",\n      // "headers": {"<KEY>": "<VALUE>"},\n      // "useCredentials": <true||false>\n    },\n  };\n  player.source = {\n    sources: {\n      src: \'<HLS_STREAM_URL>\',\n      type: \'application/x-mpegurl\',\n      contentProtection: drmConfiguration,\n    },\n  };\n} else if (MPEG - DASH) {\n  let drmConfiguration = {\n    playready: {\n      licenseAcquisitionURL: \'<LICENSE_KEY_URL_PLAYREADY>\',\n      // "headers": {"<KEY>": "<VALUE>"},\n      // "useCredentials": <true||false>\n    },\n    widevine: {\n      licenseAcquisitionURL: \'<LICENSE_KEY_URL_WIDEVINE>\',\n      // "headers": {"<KEY>": "<VALUE>"},\n      // "useCredentials": <true||false>\n    },\n  };\n  player.source = {\n    sources: {\n      src: \'<DASH_STREAM_URL>\',\n      type: \'application/dash+xml\',\n      contentProtection: drmConfiguration,\n    },\n  };\n}\n'})}),"\n",(0,o.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,o.jsx)(n.p,{children:"To configure DRM on the Android SDK, developers can put a DRMConfiguration inside a SourceDescription."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'// Map<String, String> headers =  new HashMap<String, String>();\n// headers.put("<KEY>", "<VALUE>");\nDRMConfiguration drmConfiguration = new DRMConfiguration.Builder()\n    .widevine(\n        new KeySystemConfiguration.Builder(\n            "<LICENSE_KEY_URL_WIDEVINE>"\n            )// , headers, <USE_CREDENTIALS>, <QUERY_PARAMETERS>\n            .build()\n        )\n        .build();\nTypedSource typedSource = new TypedSource.Builder("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = new SourceDescription.Builder(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,o.jsx)(n.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsx)(n.p,{children:"To configure DRM on the iOS SDK, developers can put a FairPlayDRMConfiguration inside a SourceDescription."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'// let headers = [["<KEY>": "<VALUE>"]]\nlet drmConfiguration = FairPlayDRMConfiguration(\n    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n    certificateURL: "<CERTIFICATE_URL>"\n        // , headers: headers, licenseType: <LICENSE_TYPE>\n)\nlet typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)\nlet sourceDescription = SourceDescription(source: typedSource)\ntheoplayer.source = sourceDescription\n'})}),"\n",(0,o.jsx)(n.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,o.jsxs)(n.p,{children:["In order to play DRM protected resources, you will need to pass extra DRM parameters. To see what kind of DRM protection is supported by Roku devices, please visit ",(0,o.jsx)(n.a,{href:"https://developer.roku.com/en-gb/docs/specs/media/content-protection.md",children:"this page"}),"."]}),"\n",(0,o.jsx)(n.p,{children:'In the following example, there is a function called "setSource", which sets the source of a THEOplayer instance ("m.player.source").'}),"\n",(0,o.jsx)(n.p,{children:'It is worth mentioning that "m" works like the "this" keyword from other languages. An "m" keyword points to the current component local namespace. Therefore, in case you want to access a variable across different functions inside the same component, use "m" to do so.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-brightscript",children:'function setSource(streamFormat)\n  if streamFormat = "hls" then\n    drmParams = {\n      "integration": "Widevine",\n      "licenseUrl": "<LICENSE_KEY_URL_WIDEVINE>"\n    }\n    m.player.source = {\n      "poster": "pooster.png",\n      "sources": [\n        {\n          "contentProtection": drmParams,\n          "src": "<HLS_STREAM_URL>",\n          "type": "application/x-mpegURL"\n        }\n      ]\n	}\n  end if\n  if streamFormat = "dash" then\n    drmParams = {\n      "integration": "Widevine",\n      "licenseUrl": "<LICENSE_KEY_URL_WIDEVINE>"\n    }\n    m.player.source = {\n        "poster": "pooster.png",\n        "sources": [\n          {\n            "contentProtection": drmParams,\n            "src": "<DASH_STREAM_URL>",\n            "type": "application/dash+xml"\n          }\n        ]\n    }\n  end if\nend function\n'})}),"\n",(0,o.jsx)(n.h2,{id:"custom-integration",children:"Custom Integration"}),"\n",(0,o.jsxs)(n.p,{children:["Developers can make their own custom DRM integration instead of using the pre-integrations offered by THEOplayer.\nThis can be done by making use of the ",(0,o.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"DRM integration API repository"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"A complete guide on how to create a new integration, and some example integrations can be found in the provided repository."})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var i=r(67294);let o={},t=i.createContext(o);function s(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);