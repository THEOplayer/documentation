"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["30777"],{95344:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"how-to-guides/drm/buydrm-keyos/how-to-use-with-theoplayer","title":"How to use THEOplayer with KeyOS BuyDRM","description":"This guide explains how you set up THEOplayer in combination with the KeyOS BuyDRM, a partnered multi-DRM vendor. THEOplayer is pre-integrated with KeyOS and provides a user-friendly API to connect to their Widevine and PlayReady DRM solutions.","source":"@site/theoplayer/how-to-guides/04-drm/01-buydrm-keyos/01-how-to-use-with-theoplayer.md","sourceDirName":"how-to-guides/04-drm/01-buydrm-keyos","slug":"/how-to-guides/drm/buydrm-keyos/how-to-use-with-theoplayer","permalink":"/documentation/pr-preview/pr-243/theoplayer/how-to-guides/drm/buydrm-keyos/how-to-use-with-theoplayer","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/04-drm/01-buydrm-keyos/01-how-to-use-with-theoplayer.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-243/theoplayer/how-to-guides/drm/buydrm-keyos/introduction"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-243/theoplayer/how-to-guides/drm/castlabs-drmtoday/introduction"}}'),i=n("85893"),o=n("50065");let s={},a="How to use THEOplayer with KeyOS BuyDRM",l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integrating KeyOS BuyDRM",id:"integrating-keyos-buydrm",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Conclusion",id:"conclusion",level:2},{value:"Extra resources:",id:"extra-resources",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"how-to-use-theoplayer-with-keyos-buydrm",children:"How to use THEOplayer with KeyOS BuyDRM"})}),"\n",(0,i.jsxs)(t.p,{children:["This guide explains how you set up THEOplayer in combination with the ",(0,i.jsx)(t.a,{href:"https://www.buydrm.com/keyosplayer",children:"KeyOS BuyDRM"}),", a partnered ",(0,i.jsx)(t.strong,{children:"multi-DRM vendor"}),". THEOplayer is pre-integrated with KeyOS and provides a user-friendly API to connect to their ",(0,i.jsx)(t.strong,{children:"Widevine"})," and ",(0,i.jsx)(t.strong,{children:"PlayReady"})," DRM solutions."]}),"\n",(0,i.jsxs)(t.p,{children:["If you are already comfortable with the THEOplayer API, you can go straight over to ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/DRMConfiguration.html",children:"DRM Pre-Integration API"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"This guide expects you to:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Have a THEOplayer license. If you aren't using THEOplayer yet, you can start your free trial ",(0,i.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Be a client of KeyOS's BuyDRM, and that you are integrated with their streaming infrastructure. Information on BuyDRM can be found at ",(0,i.jsx)(t.a,{href:"https://buydrm.com/multikey-demo/",children:"https://buydrm.com/multikey-demo/"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If you can place a checkmark next to these two fields, you are good to go."}),"\n",(0,i.jsxs)(t.p,{children:["You will also need a valid THEOplayer set-up. If you have no experience with setting up our player, we have an excellent ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/sdks/web/getting-started",children:"getting started guide"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"integrating-keyos-buydrm",children:"Integrating KeyOS BuyDRM"}),"\n",(0,i.jsxs)(t.p,{children:["Starting from the basic template above, you only need to add your BuyDRM token (=",(0,i.jsx)(t.strong,{children:"customdata"}),") to your source configuration, and tell THEOplayer that you are using KeyOS."]}),"\n",(0,i.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"player.source = {\n  sources: {\n    src: 'your.mpd',\n    type: 'application/dash+xml',\n    drm: {\n      integration: 'keyos',\n      customdata: 'PEtleU9T...blhNTD4=',\n      playready: {\n        licenseAcquisitionURL: '<LICENSE_KEY_URL_PLAYREADY>',\n      },\n      widevine: {\n        licenseAcquisitionURL: '<LICENSE_KEY_URL_WIDEVINE>',\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(t.p,{children:"Your updated starting template would now look like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>THEOplayer Web SDK: Getting Started</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="stylesheet" type="text/css" href="/path/to/ui.css" />\n    \x3c!-- adds THEOplayer CSS --\x3e\n  </head>\n  <body>\n    <div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>\n\n    <script type="text/javascript" src="/path/to/THEOplayer.js"><\/script>\n    \x3c!-- adds THEOplayer library --\x3e\n\n    <script>\n      var element = document.querySelector(\'.theoplayer-container\');\n      var player = new THEOplayer.Player(element, {\n        license: \'your_license_string\',\n        //...\n      });\n\n      player.source = {\n        sources: [\n          {\n            src: \'your.mpd\',\n            type: \'application/dash+xml\',\n            drm: {\n              integration: \'keyos\',\n              customdata: \'PEtleU9T...blhNTD4=\',\n              playready: {\n                licenseAcquisitionURL: \'<LICENSE_KEY_URL_PLAYREADY>\',\n              },\n              widevine: {\n                licenseAcquisitionURL: \'<LICENSE_KEY_URL_WIDEVINE>\',\n              },\n            },\n          },\n        ],\n      };\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,i.jsx)(t.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,i.jsx)(t.p,{children:"A KeyOS DRM integration is added to the source configuration by adding the keyOsDrm() parameter to drm as such:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:'public static var buyDRMkeyOS: SourceDescription {\n    let licenseAcquisitionURL: String = "<LICENSE_KEY_URL_FAIRPLAY>"\n    let certificateURL: String = "<CERTIFICATE_URL_FAIRPLAY>"\n    let token: String = "<TOKEN_FAIRPLAY>"\n    let type: String = "application/x-mpegURL"\n    let src = "<HLS_STREAM_URL>"\n    let drm: KeyOSDRMConfiguration = KeyOSDRMConfiguration(licenseAcquisitionURL: licenseAcquisitionURL, certificateURL: certificateURL, customdata: token)\n    let typedSource: TypedSource = TypedSource(src: src, type: type, drm: drm)\n    let source: SourceDescription = SourceDescription(source: typedSource)\n    return source\n}\n\n// Configure the player\'s source to initilaise playback\n        THEOplayer.source = buyDRMkeyOS\n\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Where ",(0,i.jsx)(t.code,{children:"token"})," for customdata is the Authentication XML generated from their platform."]}),"\n",(0,i.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,i.jsx)(t.p,{children:"A KeyOS DRM integration is added to the source configuration by adding the keyOsDrm() parameter to DRM as such:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'SourceDescription dashWithDRM = sourceDescription()\n        .sources(\n            typedSource("//sourceUrl")\n                .drm(\n                        keyOsDrm()\n                            .customdata("//token")\n                            .playready("//playReadyKeyServer")\n                            .widevine("//widevineKeyServer")\n                            .build()\n                ).build()\n        ).build();\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Where:\n",(0,i.jsx)(t.code,{children:"token"})," for customdata is the Authentication XML generated from their platform."]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"THEOplayer partnered with KeyOS to fully pre-integrate their BuyDRM solution, saving you tons of time. This pre-integration brings along multiple advantages:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"It's very simple to set up KeyOS BuyDRM through THEOplayer."}),"\n",(0,i.jsx)(t.li,{children:"No surprises - you know that we are compatible with each other. We also regularly validate our integration, and are the first to know about changes to KeyOS."}),"\n",(0,i.jsx)(t.li,{children:"It offers extra maintainability. Even if the KeyOS infrastructure changes, we attempt to be backwards compatible."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"extra-resources",children:"Extra resources:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/DRMConfiguration.html",children:"DRM Pre-Integration API"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/getting-started/sdks/web/getting-started",children:"THEOplayer Getting Started Guide"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.buydrm.com/keyosplayer",children:"KeyOS BuyDRM"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var r=n(67294);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);