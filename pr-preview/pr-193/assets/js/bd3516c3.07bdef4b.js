"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["86342"],{97072:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"how-to-guides/ads/block-detection","title":"Adblock detection","description":"The THEOplayer Ads API allows developers to detect adblockers, and react accordingly.","source":"@site/theoplayer/how-to-guides/01-ads/01-block-detection.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/block-detection","permalink":"/documentation/pr-preview/pr-193/theoplayer/how-to-guides/ads/block-detection","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/01-ads/01-block-detection.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-193/theoplayer/how-to-guides/ads/introduction"},"next":{"title":"Customizing the ad overlay text","permalink":"/documentation/pr-preview/pr-193/theoplayer/how-to-guides/ads/customizing-the-ad-overlay-text"}}'),o=n("85893"),a=n("50065");let s={},i="Adblock detection",d={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Usage",id:"usage",level:2},{value:"Stream configuration",id:"stream-configuration",level:3},{value:"Error event",id:"error-event",level:3},{value:"Resources",id:"resources",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"adblock-detection",children:"Adblock detection"})}),"\n",(0,o.jsxs)(t.p,{children:["The THEOplayer Ads API allows developers to detect adblockers, and react accordingly.\nMore specifically, you can either A) specify a stream configuration that disables playback when an ad blocker\nis detected, and show a default error message, or either B) detect an ",(0,o.jsx)(t.code,{children:"aderror"})," event and implement a custom handler."]}),"\n",(0,o.jsx)(t.p,{children:"The screenshot below illustrates the default error message."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ad block detection",src:n(69697).Z+"",title:"Adblock detection",width:"2880",height:"1800"})}),"\n",(0,o.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.p,{children:'Adblock detection is typically a challenge in browsers. Hence, SDKs other than the Web SDK are considered "N/A" (i.e. not applicable).\nTHEOplayer does not prevent playback by default when an ad blocker is detected.'}),"\n",(0,o.jsx)(t.p,{children:"As explained in the intro, you can either A) configure your stream configuration to prevent playback and show a default error message,\nor either B) implement an error event handler to implement a custom behavior."}),"\n",(0,o.jsx)(t.h3,{id:"stream-configuration",children:"Stream configuration"}),"\n",(0,o.jsxs)(t.p,{children:["When you set the ",(0,o.jsx)(t.code,{children:"blockContentIfAdError"})," to ",(0,o.jsx)(t.code,{children:"true"})," in your stream configuration (i.e. ",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/SourceConfiguration.html#blockContentIfAdError",children:"SourceConfiguration"}),"),\nthen playback will be stopped, and a default error message will be shown."]}),"\n",(0,o.jsxs)(t.p,{children:["The snippet below demonstrates how you could implement this ",(0,o.jsx)(t.code,{children:"blockContentIfAdError"})," property in a stream configuration."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"player.source = {\n  sources: {\n    src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n  },\n  ads: [\n    {\n      sources:\n        'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=',\n    },\n  ],\n  blockContentIfAdError: true,\n};\n"})}),"\n",(0,o.jsx)(t.p,{children:"Through localization, you could rename the default error message, as demonstrated below."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"var player = new THEOplayer.Player(document.querySelector('.video-js'), {\n  ui: {\n    language: 'en',\n    languages: {\n      en: {\n        'Starting ads was not possible. Turn off your AdBlocker and try again.': 'Disable your AdBlocker.',\n      },\n    },\n  },\n  libraryLocation: '<your-library-location>',\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When you go for this approach, it's important that you validate and correctly specify the current default error message.\nFor example, in THEOplayer 2.81.0, the default error message was ",(0,o.jsx)(t.code,{children:"Starting ads was not possible. Turn off your AdBlocker and try again."}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to customize beyond renaming the default error message,\nthen you could try to do custom DOM manipulation and custom CSS queries.\nHowever, it might be advised to leverage the ",(0,o.jsx)(t.code,{children:"aderror"})," event, as explained in the next section, if you truly want to customize the behavior."]}),"\n",(0,o.jsx)(t.h3,{id:"error-event",children:"Error event"}),"\n",(0,o.jsxs)(t.p,{children:["Alternatively, you can detect an ad blocker through the ",(0,o.jsx)(t.code,{children:"aderror"})," event.\nIf you detect this event, you could implement a custom behavior, such as stopping playback (e.g. through ",(0,o.jsx)(t.code,{children:"player.stop()"}),") and drawing an overlay."]}),"\n",(0,o.jsx)(t.p,{children:"The callback event may be differently formatted depending on your selected ad integration."}),"\n",(0,o.jsxs)(t.p,{children:["If you're using the ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-193/theoplayer/how-to-guides/ads/google-ima",children:"Google IMA"})," ad integration, your callback event will have a ",(0,o.jsx)(t.code,{children:"problemType"})," property that will equal ",(0,o.jsx)(t.code,{children:'"adblock"'}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'player.ads.addEventListener(\'aderror\', function (event) {\n  // if using the Google IMA SDK, then your event looks like this:\n  // {\n  //  "type": "aderror",\n  //  "date": "2021-03-09T18:18:03.093Z",\n  //  "ad": null,\n  //  "problemType": "adblock",\n  //  "message": "adblock",\n  //  "source": {\n  //    "src": "https://pubads.g.doubleclick.net/gampad/ads?..."\n  //  }\n  // }\n  // so, to detect an ad blocker, you can do\n  if (event.problemType == \'adblock\') {\n    // and do something else\n  }\n});\n'})}),"\n",(0,o.jsxs)(t.p,{children:["If you're using the default ad integration, your callback event will have a ",(0,o.jsx)(t.code,{children:"problemType"})," property that will equal ",(0,o.jsx)(t.code,{children:'"network"'}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'player.ads.addEventListener(\'aderror\', function (event) {\n  // if using the default ad integration, then your event looks like this:\n  // {\n  //   "type": "aderror",\n  //   "date": "2021-03-09T19:22:15.171Z",\n  //   "ad": null,\n  //   "problemType": "network",\n  //   "message": "The ad source could not be loaded.",\n  //   "errorCode": 100,\n  //   "source": {\n  //     "src": "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator="\n  //   }\n  // }\n  // so, to detect an ad blocker, you can do\n  if (event.problemType == \'network\') {\n    // and do something else\n  }\n});\n'})}),"\n",(0,o.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsx)(t.p,{children:"Below are some resources on adblock detection through the Ads API:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["API reference: ",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/Ads.html",children:"Ads API"})]}),"\n",(0,o.jsxs)(t.li,{children:["Online demo: ",(0,o.jsx)(t.a,{href:"https://demo.theoplayer.com/adblock-detection",children:"Adblock Detection Demo"})]}),"\n",(0,o.jsxs)(t.li,{children:["Advertisement guide: ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-193/theoplayer/knowledge-base/advertisement/user-guide",children:"Advertising User Guide"})," (mentions adblock detection)"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},69697:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/ad-blocker-detected-2021-8f2264848bf980c284f2e5744c2acd30.png"},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var r=n(67294);let o={},a=r.createContext(o);function s(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);