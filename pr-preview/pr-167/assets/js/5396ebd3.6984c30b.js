"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["63862"],{73679:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>d,default:()=>h,assets:()=>s,toc:()=>l,frontMatter:()=>a});var n=JSON.parse('{"id":"getting-started/sdks/android/migrating-to-theoplayer-8","title":"Migrating to THEOplayer Android SDK 8.x","description":"This article will guide your through updating from THEOplayer Android SDK version 8 (from version 7),","source":"@site/theoplayer/getting-started/01-sdks/02-android/03-migrating-to-theoplayer-8.md","sourceDirName":"getting-started/01-sdks/02-android","slug":"/getting-started/sdks/android/migrating-to-theoplayer-8","permalink":"/documentation/pr-preview/pr-167/theoplayer/getting-started/sdks/android/migrating-to-theoplayer-8","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/getting-started/01-sdks/02-android/03-migrating-to-theoplayer-8.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"android","previous":{"title":"Migration from THEOplayer Android/AndroidTV/FireTV SDK 4.x to THEOplayer Android SDK 5.0","permalink":"/documentation/pr-preview/pr-167/theoplayer/getting-started/sdks/android/migration-from-4.x"},"next":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-167/theoplayer/how-to-guides/"}}'),o=t("85893"),i=t("50065");let a={},d="Migrating to THEOplayer Android SDK 8.x",s={},l=[{value:"Add the THEOplayer Maven repository",id:"add-the-theoplayer-maven-repository",level:2},{value:"Update THEOplayer",id:"update-theoplayer",level:2}];function p(e){let r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"migrating-to-theoplayer-android-sdk-8x",children:"Migrating to THEOplayer Android SDK 8.x"})}),"\n",(0,o.jsx)(r.p,{children:"This article will guide your through updating from THEOplayer Android SDK version 8 (from version 7),\nand the changes needed in your code."}),"\n",(0,o.jsx)(r.h2,{id:"add-the-theoplayer-maven-repository",children:"Add the THEOplayer Maven repository"}),"\n",(0,o.jsxs)(r.p,{children:["Until version 7, the THEOplayer Android SDK was published both to our ",(0,o.jsx)(r.a,{href:"https://maven.theoplayer.com/",children:"THEOplayer Maven repository"}),"\nand ",(0,o.jsx)(r.a,{href:"https://jitpack.io/#THEOplayer/theoplayer-sdk-android",children:"JitPack"}),".\nAs of version 8, we publish new versions only to the THEOplayer Maven repository."]}),"\n",(0,o.jsxs)(r.p,{children:["In your ",(0,o.jsx)(r.strong,{children:"top-level"})," (project) ",(0,o.jsx)(r.code,{children:"build.gradle"})," file, remove the JitPack repository\nand add the THEOplayer Maven repository:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-diff",children:"  allprojects {\n      repositories {\n          google()\n          mavenCentral()\n-         maven { url 'https://jitpack.io' }\n+         maven { url 'https://maven.theoplayer.com/releases' }\n      }\n  }\n"})}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:["If you're using other (non-THEOplayer) dependencies that are published to JitPack,\nyou should not remove the JitPack repository from your ",(0,o.jsx)(r.code,{children:"build.gradle"})," file.\nHowever, we recommend placing the THEOplayer Maven repository ",(0,o.jsx)(r.em,{children:"before"})," JitPack,\nso the THEOplayer Android SDK is always downloaded from our official repository."]})}),"\n",(0,o.jsx)(r.h2,{id:"update-theoplayer",children:"Update THEOplayer"}),"\n",(0,o.jsxs)(r.p,{children:["Update THEOplayer Android SDK to version 8 in your ",(0,o.jsx)(r.strong,{children:"module-level"})," ",(0,o.jsx)(r.code,{children:"build.gradle"})," file:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-groovy",children:"dependencies {\n    implementation 'com.theoplayer.theoplayer-sdk-android:core:8.+'\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["If you're using the ",(0,o.jsx)(r.a,{href:"/open-video-ui/android/",children:"Open Video UI for Android"})," or one of ",(0,o.jsx)(r.a,{href:"/theoplayer/connectors/android/",children:"our connectors"}),",\nmake sure to update them to the latest version too to ensure proper support for THEOplayer version 8."]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return a}});var n=t(67294);let o={},i=n.createContext(o);function a(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);