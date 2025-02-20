"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["56669"],{67344:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"external/android-connector/connectors/analytics/nielsen/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer_versioned_docs/version-v7/external/android-connector/connectors/analytics/nielsen/README.md","sourceDirName":"external/android-connector/connectors/analytics/nielsen","slug":"/connectors/android/nielsen/getting-started","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/connectors/android/nielsen/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/android-connector/blob/-/connectors/analytics/nielsen/README.md","tags":[],"version":"v7","frontMatter":{"slug":"/connectors/android/nielsen/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"android","previous":{"title":"Nielsen","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/connectors/android/nielsen"},"next":{"title":"Media Session","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/connectors/android/mediasession"}}'),r=t("85893"),o=t("50065");let s={slug:"/connectors/android/nielsen/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},a="THEOplayer Android SDK Nielsen Connector",l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Setting up the Nielsen Connector",id:"setting-up-the-nielsen-connector",level:3},{value:"Updating metadata",id:"updating-metadata",level:3},{value:"Destroying / Cleaning up",id:"destroying--cleaning-up",level:3}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"theoplayer-android-sdk-nielsen-connector",children:"THEOplayer Android SDK Nielsen Connector"})}),"\n",(0,r.jsx)(n.p,{children:"The Nielsen connector provides a Nielsen integration for THEOplayer Android SDK."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["The THEOplayer Android SDK Nielsen Connector requires the application to import the THEOplayer Android SDK since the connector relies on its public APIs.\nFor more details, check out our ",(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/android/getting-started/",children:"Getting started on Android"})," guide."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["After setting up the THEOplayer Android SDK, in your ",(0,r.jsx)(n.strong,{children:"module"})," level ",(0,r.jsx)(n.code,{children:"build.gradle"})," file add the THEOplayer\nAndroid SDK Nielsen Connector and the Nielsen SDK dependencies:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"implementation 'com.theoplayer.android-connector:nielsen:+'\nimplementation 'com.nielsenappsdk.global:ad:9.1.0.0'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Also in the ",(0,r.jsx)(n.code,{children:"build.gradle"})," file, specify the Nielsen maven repository inside the repositories section:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"repositories {\n    maven { url 'https://maven.theoplayer.com/releases/' }\n    maven { url 'https://raw.githubusercontent.com/NielsenDigitalSDK/nielsenappsdk-android/master/'}\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-the-nielsen-connector",children:"Setting up the Nielsen Connector"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val theoplayerView: THEOplayerView\n\nprivate fun setupNielsen() {\n    val appId = "your_nielsen_app_id"\n    val debug = true\n    nielsenConnector = NielsenConnector(applicationContext, theoplayerView.player, appId, debug)\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"updating-metadata",children:"Updating metadata"}),"\n",(0,r.jsx)(n.p,{children:"Whenever a new source is set on the player, update the current metadata as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'theoplayerView.player.source = sourceDescription\nnielsenConnector?.updateMetadata(hashMapOf(\n    "assetid" to "C112233",\n    "program" to "programName"\n))\n'})}),"\n",(0,r.jsx)(n.h3,{id:"destroying--cleaning-up",children:"Destroying / Cleaning up"}),"\n",(0,r.jsx)(n.p,{children:"To release listeners and resources, call destroy whenever the Nielsen Connector is no longer needed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"nielsenConnector?.destroy()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"After destroying a Nielsen Connector instance, it can no longer be used. If needed, a new instance should be created."}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(67294);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);