"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["10597"],{32774:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>o,assets:()=>l,toc:()=>d,contentTitle:()=>c});var o=JSON.parse('{"id":"external/android-connector/connectors/uplynk/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer_versioned_docs/version-v7/external/android-connector/connectors/uplynk/README.md","sourceDirName":"external/android-connector/connectors/uplynk","slug":"/connectors/android/uplynk/getting-started","permalink":"/documentation/pr-preview/pr-245/theoplayer/v7/connectors/android/uplynk/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/android-connector/blob/-/connectors/uplynk/README.md","tags":[],"version":"v7","frontMatter":{"slug":"/connectors/android/uplynk/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}}}'),r=t("85893"),i=t("50065");let a={slug:"/connectors/android/uplynk/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},c="THEOplayer Uplynk Connector for Android",l={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function s(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"theoplayer-uplynk-connector-for-android",children:"THEOplayer Uplynk Connector for Android"})}),"\n",(0,r.jsx)(n.p,{children:"The Uplynk connector provides a Uplynk integration for THEOplayer."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add the THEOplayer Maven repository to your project-level ",(0,r.jsx)(n.code,{children:"settings.gradle"})," file:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url = uri("https://maven.theoplayer.com/releases/") }\n    }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Add THEOplayer and the Uplynk Connector as dependencies in your module-level ",(0,r.jsx)(n.code,{children:"build.gradle"})," file:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:'dependencies {\n    implementation "com.theoplayer.theoplayer-sdk-android:core:7.+"\n    implementation "com.theoplayer.android-connector:uplynk:7.+"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["First, follow ",(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/android/getting-started/",children:"the getting started guide for the THEOplayer Android SDK"}),"\nto set up a ",(0,r.jsx)(n.code,{children:"THEOplayerView"})," in your app."]}),"\n",(0,r.jsxs)(n.p,{children:["Then, create the ",(0,r.jsx)(n.code,{children:"UplynkConnector"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"import com.theoplayer.android.api.THEOplayerView\nimport com.theoplayer.android.connector.uplynk.UplynkConnector\n...\nval theoPlayerView = findViewById(R.id.theoplayer)\nval uplynkConnector = UplynkConnector(theoPlayerView)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, set the THEOplayer source to a ",(0,r.jsx)(n.code,{children:"SourceDescription"})," with a ",(0,r.jsx)(n.code,{children:"UplynkSsaiDescription"})," as its ",(0,r.jsx)(n.code,{children:"ssai"})," description:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'theoplayerView.player.source = SourceDescription\n    .Builder(\n        TypedSource.Builder("no source")\n            .ssai(\n                UplynkSsaiDescription\n                    .Builder()\n                    .prefix("https://content.uplynk.com")\n                    .assetIds(listOf(\n                        "41afc04d34ad4cbd855db52402ef210e",\n                        "c6b61470c27d44c4842346980ec2c7bd",\n                        "588f9d967643409580aa5dbe136697a1",\n                        "b1927a5d5bd9404c85fde75c307c63ad",\n                        "7e9932d922e2459bac1599938f12b272",\n                        "a4c40e2a8d5b46338b09d7f863049675",\n                        "bcf7d78c4ff94c969b2668a6edc64278",\n                    ))\n                    .preplayParameters(linkedMapOf(\n                        "ad" to "adtest",\n                        "ad.lib" to "15_sec_spots"\n                    ))\n                    .build())\n            .build()\n    )\n    .build()\n'})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var o=t(67294);let r={},i=o.createContext(r);function a(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);