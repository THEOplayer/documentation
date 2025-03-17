"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["74975"],{67687:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>s});var o=JSON.parse('{"id":"how-to-guides/analytics/youbora","title":"Youbora","description":"This article is a good place to start if you are looking for information on how to configure the THEOplayer Youbora pre-integration, which is part of the Analytics API.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/02-analytics/03-youbora.md","sourceDirName":"how-to-guides/02-analytics","slug":"/how-to-guides/analytics/youbora","permalink":"/documentation/pr-preview/pr-238/theoplayer/v4/how-to-guides/analytics/youbora","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/02-analytics/03-youbora.md","tags":[],"version":"v4","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"Mux","permalink":"/documentation/pr-preview/pr-238/theoplayer/v4/how-to-guides/analytics/mux"},"next":{"title":"Agama","permalink":"/documentation/pr-preview/pr-238/theoplayer/v4/how-to-guides/analytics/agama"}}'),r=t("85893"),i=t("50065");let a={},s="Youbora",l={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Code example",id:"code-example",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Related links",id:"related-links",level:2},{value:"Related articles",id:"related-articles",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"youbora",children:"Youbora"})}),"\n",(0,r.jsxs)(n.p,{children:["This article is a good place to start if you are looking for information on how to configure the THEOplayer Youbora pre-integration, which is part of the ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/web/types/YouboraAnalyticsIntegrationID.html",children:"Analytics API"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"code-example",children:"Code example"}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsx)(n.p,{children:"Make sure you load the Youbora plugin in the head of the page."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script src="https://smartplugin.youbora.com/v6/js/adapters/theoplayer2/6.8.10/sp.min.js"><\/script>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Include the following in your ",(0,r.jsx)(n.code,{children:"SourceDescription"})," object:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"var youbora = {\n  integration: 'youbora',\n  accountCode: 'YOUR_YOUBORA_ACCOUNT_CODE',\n  enableAnalytics: true,\n  username: 'THEO',\n  'content.title': 'THEO 1 (VOD)',\n  'content.duration': 653,\n  'content.isLive': false,\n};\n\nvar SourceDescription = { sources: [typedSource], analytics: [youbora] };\n"})}),"\n",(0,r.jsx)(n.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,r.jsx)(n.p,{children:"You need to first initialize the Youbora library on your application. You can do this in two different ways:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"While creating the player programmatically:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// create player config\nTHEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n .analytics(new YouboraOptions.Builder("YOUR_YOUBORA_ACCOUNT_CODE").build()) .build();\n// create player\nTHEOplayerView tpv = new THEOplayerView(this, playerConfig);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Or through the player's XML configuration:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'<com.theoplayer.android.api.THEOplayerView\n android:id="@+id/theo_player_view" app:youboraAccountCode="YOUR_YOUBORA_ACCOUNT_CODE" />```\n\nYou can then set a Youbora source like the following:\n\n```java\nYouboraOptions youbora = new YouboraOptions.Builder("YOUR_YOUBORA_ACCOUNT_CODE")\n .put("enableAnalytics", "true") .put("username", "THEO") .put("content.title", "VOD") .put("content.duration", "653") .put("content.isLive", "false") .build();\nSourceDescription elephantsDream = SourceDescription.Builder\n .sourceDescription(TypedSource.Builder.typedSource().src("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8").build()) .analytics(youbora) .build();\ntpv.getPlayer().setSource(elephantsDream);\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"Starting from Android SDK API 28, Google introduced some additional network security configurations. By default, http requests are blocked by the OS unless the application explicitly allows it."}),(0,r.jsxs)(n.p,{children:["In order to allow http requests (and allow Youbora data to be sent to the dashboard), you should follow the instructions in their guide: ",(0,r.jsx)(n.a,{href:"https://developer.android.com/training/articles/security-config",children:"Network security configuration"}),"."]}),(0,r.jsx)(n.p,{children:"Basically there are 2 different ways to solve this on your app:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Set the ",(0,r.jsx)(n.code,{children:'android:usesCleartextTraffic="true"'})," flag under your application tag."]}),"\n",(0,r.jsxs)(n.li,{children:["If you are using a network security config such as: ",(0,r.jsx)(n.code,{children:'android:networkSecurityConfig="@xml/network_security_config"'}),", include this flag on your configuration, for example:"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'<?xml version="1.0" encoding="utf-8"?>\n<network-security-config>\n <domain-config cleartextTrafficPermitted="true"> .... </domain-config> <base-config cleartextTrafficPermitted="false"/></network-security-config>\n'})})]}),"\n",(0,r.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsx)(n.p,{children:"You need to first initialize the Youbora library on your application. You can do this on your player's configuration object:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'let youboraOptions = YouboraOptions(accountCode: "YOUR_YOUBORA_ACCOUNT_CODE")\nyouboraOptions.put(key: "enableAnalytics", value: "true")\nlet playerConfiguration = THEOplayerConfiguration(chromeless: true, analytics: [youboraOptions])\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can then provide different Youbora option objects per source you set:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'let youbora = YouboraOptions(accountCode: "YOUR_YOUBORA_ACCOUNT_CODE")\nyoubora.put(key: "enableAnalytics", value: "true")\nyoubora.put(key: "username", value: "THEO")\nyoubora.put(key: "content.title", value: "THEO 1 (VOD)")\nyoubora.put(key: "content.duration", value: "653")\nyoubora.put(key: "content.isLive", value: "false")\nlet sourceDescription = SourceDescription(source : typedSource, analytics: [youbora])\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-links",children:"Related links"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/Analytics.html",children:"Analytics API"})}),"\n",(0,r.jsxs)(n.li,{children:["NPAW's own Youbora THEOplayer plugin: ",(0,r.jsx)(n.a,{href:"https://bitbucket.org/npaw/theoplayer2-adapter-js/src/master/",children:"Web"}),", ",(0,r.jsx)(n.a,{href:"https://bitbucket.org/npaw/theoplayer-adapter-ios/src/master/",children:"iOS"}),", ",(0,r.jsx)(n.a,{href:"https://bitbucket.org/npaw/theoplayer-adapter-android/src/master/",children:"Android"})]}),"\n",(0,r.jsxs)(n.li,{children:["Youbora documentation on NPAW's website: ",(0,r.jsx)(n.a,{href:"https://documentation.npaw.com/integration-docs/docs/theoplayer",children:"Web"}),", ",(0,r.jsx)(n.a,{href:"https://documentation.npaw.com/integration-docs/docs/theoplayer-ios",children:"iOS"}),", ",(0,r.jsx)(n.a,{href:"https://documentation.npaw.com/integration-docs/docs/theoplayer-android",children:"Android"})," (login required)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v4/how-to-guides/ui/customize-ui-during-playback",children:"Customize UI during ad playback"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v4/faq/why-does-fullscreen-not-behave-as-expected-on-ios",children:"Why does fullscreen not behave as expected on iOS browsers?"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-238/theoplayer/v4/how-to-guides/ads/how-to-set-up-vast-and-vmap",children:"How to set up VAST and VMAP ads"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var o=t(67294);let r={},i=o.createContext(r);function a(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);