"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["37061"],{39443:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>s,metadata:()=>i,assets:()=>r,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"how-to-guides/ads/customizing-the-ad-overlay-text","title":"Customizing the ad overlay text","description":"This guide explains how to customize the overlay texts during an adbreak, if any. You may ask this question if you want to change the aspect or the content of the overlay displaying the countdown to content on top of the ads.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/01-ads/02-customizing-the-ad-overlay-text.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/customizing-the-ad-overlay-text","permalink":"/documentation/pr-preview/pr-223/theoplayer/v6/how-to-guides/ads/customizing-the-ad-overlay-text","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/01-ads/02-customizing-the-ad-overlay-text.md","tags":[],"version":"v6","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"Adblock detection","permalink":"/documentation/pr-preview/pr-223/theoplayer/v6/how-to-guides/ads/block-detection"},"next":{"title":"How to set up VAST and VMAP ads?","permalink":"/documentation/pr-preview/pr-223/theoplayer/v6/how-to-guides/ads/how-to-set-up-vast-and-vmap"}}'),o=n("85893"),a=n("50065");let s={},d="Customizing the ad overlay text",r={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Changing the text",id:"changing-the-text",level:2},{value:"Code examples",id:"code-examples",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Changing the aspect",id:"changing-the-aspect",level:2},{value:"Code examples",id:"code-examples-1",level:3},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x-1",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"customizing-the-ad-overlay-text",children:"Customizing the ad overlay text"})}),"\n",(0,o.jsx)(t.p,{children:"This guide explains how to customize the overlay texts during an adbreak, if any. You may ask this question if you want to change the aspect or the content of the overlay displaying the countdown to content on top of the ads."}),"\n",(0,o.jsxs)(t.p,{children:["This is done in two steps: the first is to customize the text, if you so desire. For this we will be leveraging the language localization mechanism. You can find further information on this regard at ",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/UIConfiguration.html#language",children:"UIConfiguration.language"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The second step is to change the aspect of such text. This can be done via CSS."}),"\n",(0,o.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"changing-the-text",children:"Changing the text"}),"\n",(0,o.jsx)(t.p,{children:'In this paragraph, we will explain how to modify the text. We will take the countdown to the content text as an example (another ad overlay text is the "Skip ad" text, if any). When considering a new text to replace the original one, it is important to take into consideration its length (which should be determined accordingly to the available space) and how it is composed.'}),"\n",(0,o.jsx)(t.p,{children:'The current example is composed of 3 parts: one text ("The content will play in"), a dynamic countdown and another text ("seconds"). For this reason, when changing the text, both text parts need addressing.'}),"\n",(0,o.jsx)(t.h3,{id:"code-examples",children:"Code examples"}),"\n",(0,o.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'ui: {\n        // your other UI configuration\n        language: \'en\',\n        languages: { \'en\':\n                    {\n                        "The content will play in": "Here your customised text",\n                           "seconds": "Here your customised text"\n                        // any other translation or text change\n                    }\n                }\n}\n'})}),"\n",(0,o.jsx)(t.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'//Example of THEOplayerConfig with language localization enabled\nTHEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n    .cssPaths("style.css")\n    .jsPaths("script.js")\n    .ui(new UIConfiguration.Builder().language("nl").build())\n    .build();\n'})}),"\n",(0,o.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:"//to be added\n"})}),"\n",(0,o.jsx)(t.h2,{id:"changing-the-aspect",children:"Changing the aspect"}),"\n",(0,o.jsx)(t.p,{children:"If you are interested in changing the aspect of the overlay or its content, you may do so applying the desired CSS properties to the concerned elements."}),"\n",(0,o.jsx)(t.h3,{id:"code-examples-1",children:"Code examples"}),"\n",(0,o.jsx)(t.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:"/* This modifies the countdown div */\n.theo-ad-remaining-container {\n  /* your styles here */\n}\n\n/* This modifies the skip ads div */\n.theoplayer-ad-skip {\n  /* your styles here */\n}\n\n/* this can also be further differentiated in 2 cases:*/\n\n/* the countdown */\n.theoplayer-ad-skip.theoplayer-ad-skip-countdown {\n  /* your styles here */\n}\n\n/* the button */\n.theoplayer-ad-skip.theoplayer-ad-skip-button {\n  /* your styles here */\n}\n"})}),"\n",(0,o.jsx)(t.h5,{id:"legacy-android-sdk-412x-1",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,o.jsxs)(t.p,{children:["The Web SDK code should be included in your Android (TV) project. The article at ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-223/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})," explains how you can add CSS and JavaScript files to your project."]}),"\n",(0,o.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsxs)(t.p,{children:["TheWeb SDKcode should be included in your iOS project. The article at ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-223/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})," explains how you can add CSS and JavaScript files to your project."]}),"\n",(0,o.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"This will have no effect when using the Google IMA integration: in this case, google IMA manages its own language localization. Also, no countdown to the content is currently displayed when using the Google-IMA integration, so this is to me remarked only for the text about skipping the ads, if any."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-223/theoplayer/v6/how-to-guides/ui/how-to-change-default-UI-language-to-other",children:"How to change the default UI language to other"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/UIConfiguration.html#language",children:"API Reference - UIConfiguration.language"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/language-localization",children:"http://demo.theoplayer.com/language-localization"})}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var i=n(67294);let o={},a=i.createContext(o);function s(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);