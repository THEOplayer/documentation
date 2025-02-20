"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["71842"],{6377:function(e,n,o){o.r(n),o.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>i});var t=JSON.parse('{"id":"external/android-connector/connectors/yospace/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer_versioned_docs/version-v7/external/android-connector/connectors/yospace/README.md","sourceDirName":"external/android-connector/connectors/yospace","slug":"/connectors/android/yospace/getting-started","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/connectors/android/yospace/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/android-connector/blob/-/connectors/yospace/README.md","tags":[],"version":"v7","frontMatter":{"slug":"/connectors/android/yospace/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"android","previous":{"title":"Yospace","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/connectors/android/yospace"},"next":{"title":"Changelog","permalink":"/documentation/pr-preview/pr-217/theoplayer/v7/changelog"}}'),r=o("85893"),a=o("50065");let s={slug:"/connectors/android/yospace/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},i="THEOplayer Yospace Connector for Android",c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"theoplayer-yospace-connector-for-android",children:"THEOplayer Yospace Connector for Android"})}),"\n",(0,r.jsx)(n.p,{children:"The Yospace connector provides a Yospace integration for THEOplayer."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add the THEOplayer Maven repository to your project-level ",(0,r.jsx)(n.code,{children:"settings.gradle"})," file:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url = uri("https://maven.theoplayer.com/releases/") }\n    }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Add the Yospace Maven repository to that same ",(0,r.jsx)(n.code,{children:"settings.gradle"})," file.\nPlease refer to the ",(0,r.jsx)(n.a,{href:"https://developer.yospace.com/sdk-documentation/android/userguide/latest/en/index-en.html",children:"Yospace Ad Management SDK documentation"})," (section 7.2. Downloads > Ad Management SDK) for instructions."]}),"\n",(0,r.jsxs)(n.li,{children:["Add THEOplayer, the Yospace Ad Management SDK and the Yospace Connector as dependencies in your module-level ",(0,r.jsx)(n.code,{children:"build.gradle"})," file:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:'dependencies {\n    implementation "com.theoplayer.theoplayer-sdk-android:core:7.+"\n    implementation "com.yospace:admanagement-sdk:3.+"\n    implementation "com.theoplayer.android-connector:yospace:7.+"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["First, follow ",(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/android/getting-started/",children:"the getting started guide for the THEOplayer Android SDK"}),"\nto set up a ",(0,r.jsx)(n.code,{children:"THEOplayerView"})," in your app."]}),"\n",(0,r.jsxs)(n.p,{children:["Then, create the ",(0,r.jsx)(n.code,{children:"YospaceConnector"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"import com.theoplayer.android.api.THEOplayerView\nimport com.theoplayer.android.connector.yospace.YospaceConnector\n\nval theoPlayerView = findViewById(R.id.theoplayer)\nval yospaceConnector = YospaceConnector(theoPlayerView)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, set the THEOplayer source to a ",(0,r.jsx)(n.code,{children:"SourceDescription"})," with a ",(0,r.jsx)(n.code,{children:"YospaceSsaiDescription"})," as its ",(0,r.jsx)(n.code,{children:"ssai"})," description:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'theoplayerView.player.source = SourceDescription.Builder(\n   TypedSource.Builder("https://example.com/stream.m3u8")\n      .ssai(\n         YospaceSsaiDescription(streamType = YospaceStreamType.LIVE)\n      )\n      .build()\n).build()\n'})})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return s}});var t=o(67294);let r={},a=t.createContext(r);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);