"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["64252"],{29954:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>s});var t=JSON.parse('{"id":"how-to-guides/drm/pallycon","title":"PallyCon","description":"This article describes how to configure PallyCon Multi-DRM with THEOplayer. This content is based on PallyCon\'s documentation.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/15-pallycon.md","sourceDirName":"how-to-guides/04-drm","slug":"/how-to-guides/drm/pallycon","permalink":"/documentation/pr-preview/pr-243/theoplayer/v6/how-to-guides/drm/pallycon","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/15-pallycon.md","tags":[],"version":"v6","sidebarPosition":15,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to play a Clear-Key-protected stream in THEOplayer?","permalink":"/documentation/pr-preview/pr-243/theoplayer/v6/how-to-guides/drm/how-to-play-clear-key-protected-stream"},"next":{"title":"Multi-key HLS","permalink":"/documentation/pr-preview/pr-243/theoplayer/v6/how-to-guides/drm/multikey-hls"}}'),i=r("85893"),o=r("50065");let l={},s="PallyCon",d={},a=[{value:"SDKs",id:"sdks",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Resources",id:"resources",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"pallycon",children:"PallyCon"})}),"\n",(0,i.jsxs)(n.p,{children:["This article describes how to configure ",(0,i.jsx)(n.a,{href:"https://pallycon.com/docs/en/multidrm/",children:"PallyCon Multi-DRM"})," with THEOplayer. This content is based on PallyCon's documentation."]}),"\n",(0,i.jsxs)(n.p,{children:["Head to our page on ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-243/theoplayer/v6/how-to-guides/drm/introduction",children:"DRM"})," for more general information."]}),"\n",(0,i.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,i.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'if (HLS) {\n    let certificateUrl = "<CERTIFICATE_URL>";\n\n    // a response interceptor for the certificate URL might be required.\n    player.network.addResponseInterceptor(function(response) {\n        if(response.url == certificateUrl) {\n            let rawResponse = response.body;\n            var responseText = String.fromCharCode.apply(null, new Uint8Array(rawResponse));\n            var raw = window.atob(responseText);\n            var rawLength = raw.length;\n            var certificate = new Uint8Array(new ArrayBuffer(rawLength));\n\n            for(var i = 0; i < rawLength; i++)\n                certificate[i] = raw.charCodeAt(i);\n            response.respondWith({body: certificate})\n        }\n    });\n\n    let drmConfiguration = {\n        "fairplay": {\n            "licenseAcquisitionURL": "<LICENSE_KEY_URL_FAIRPLAY>",\n            "certificateURL": certificateUrl,\n            "headers": {\n                "<CUSTOM_HEADER_NAME>" : "<CUSTOM_HEADER_VALUE>" // e.g. \'pallycon-customdata-v2\': \'eyJkYXRhIjoibWJLV1NjSUNIU25WMjZQWFB4cGlDQUJVbnZsOGxCOWRNZDhHZ3dhbjZqRDFwNFZoQk51VlhQY2RMaG9nNTNYbngyTjFaalwvQ3BxZ3RUS2k5Rzd3MUZ3PT0iLCJzaXRlX2lkIjoiREVNTyIsImRybV90eXBlIjoiUGxheVJlYWR5In0=\'\n            }\n        }\n    };\n    player.source = {\n        "sources": {\n            "src": "<HLS_STREAM_URL>",\n            "type": "application/x-mpegurl",\n            "contentProtection": drmConfiguration\n        }\n    }\n} else if (DASH) {\n    let drmConfiguration = {\n        "playready": {\n            "licenseAcquisitionURL": "<LICENSE_KEY_URL_PLAYREADY>",\n            "headers": {\n                "<CUSTOM_HEADER_NAME>" : "<CUSTOM_HEADER_VALUE>"\n            }\n        },\n        "widevine": {\n            "licenseAcquisitionURL": "<LICENSE_KEY_URL_WIDEVINE>",\n            "headers": {\n                "<CUSTOM_HEADER_NAME>" : "<CUSTOM_HEADER_VALUE>"\n            }\n        }\n    };\n    player.source = {\n        "sources": {\n            "src": "<DASH_STREAM_URL>",\n            "type": "application/dash+xml",\n            "contentProtection": drmConfiguration\n        }\n    }\n}"\n'})}),"\n",(0,i.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// Map<String, String> headers =  new HashMap<String, String>();\n// headers.put("<CUSTOM_HEADER_NAME>", "<CUSTOM_HEADER_VALUE>"); // e.g. "pallycon-customdata-v2", "eyJkYXRhIjoibWJLV1NjSUNIU25WMjZQWFB4cGlDQUJVbnZsOGxCOWRNZDhHZ3dhbjZqRDFwNFZoQk51VlhQY2RMaG9nNTNYbngyTjFaalwvQ3BxZ3RUS2k5Rzd3MUZ3PT0iLCJzaXRlX2lkIjoiREVNTyIsImRybV90eXBlIjoiUGxheVJlYWR5In0="\nDRMConfiguration drmConfiguration = new DRMConfiguration.Builder()\n    .widevine(\n        new KeySystemConfiguration(\n            "<LICENSE_KEY_URL_WIDEVINE>", headers, false, null\n        )\n    )\n    .build();\nTypedSource typedSource = new TypedSource.Builder()\n    .src("<DASH_STREAM_URL>")\n    .drm(drmConfiguration)\n    .build();\nSourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()\n    .sources(typedSource)\n    .build();\ntheoplayer.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,i.jsx)(n.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'let drmConfiguration = FairPlayDRMConfiguration(\n    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",\n    certificateURL: "<CERTIFICATE_URL>",\n    headers: [["<CUSTOM_HEADER_NAME>": "<CUSTOM_HEADER_VALUE>"]] // e.g. "pallycon-customdata-v2": "eyJkYXRhIjoibWJLV1NjSUNIU25WMjZQWFB4cGlDQUJVbnZsOGxCOWRNZDhHZ3dhbjZqRDFwNFZoQk51VlhQY2RMaG9nNTNYbngyTjFaalwvQ3BxZ3RUS2k5Rzd3MUZ3PT0iLCJzaXRlX2lkIjoiREVNTyIsImRybV90eXBlIjoiUGxheVJlYWR5In0="\n)\nlet typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)\nlet sourceDescription = SourceDescription(source: typedSource)\ntheoplayer.source = sourceDescription\n'})}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://pallycon.com/docs/en/multidrm/",children:"https://pallycon.com/docs/en/multidrm/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://pallycon.com/docs/en/multidrm/clients/html5-player/",children:"https://pallycon.com/docs/en/multidrm/clients/html5-player/"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-243/theoplayer/v6/how-to-guides/drm/xstream",children:"Xstream"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-243/theoplayer/v6/how-to-guides/drm/vualto-vudrm",children:"Vualto VuDRM"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-243/theoplayer/v6/how-to-guides/drm/vimond",children:"Vimond"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-243/theoplayer/v6/how-to-guides/drm/verizon-uplynk",children:"Verizon Uplynk"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-243/theoplayer/v6/how-to-guides/drm/verimatrix-multirights",children:"Verimatrix MultiRights"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-243/theoplayer/v6/how-to-guides/drm/nagra-conax-contego",children:"Nagra Conax Contego"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var t=r(67294);let i={},o=t.createContext(i);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);