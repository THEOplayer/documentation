"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["57036"],{89860:function(e,o,t){t.r(o),t.d(o,{default:()=>l,frontMatter:()=>i,metadata:()=>n,assets:()=>s,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"faq/how-to-use-proguard-with-android-sdk","title":"How to use ProGuard with THEOplayer Android SDK","description":"ProGuard is a popular tool to obfuscate and optimize Java code in Android projects. Depending on the settings, this tool can clash with the THEOplayer Android SDK.","source":"@site/theoplayer/faq/33-how-to-use-proguard-with-android-sdk.md","sourceDirName":"faq","slug":"/faq/how-to-use-proguard-with-android-sdk","permalink":"/documentation/pr-preview/pr-223/theoplayer/faq/how-to-use-proguard-with-android-sdk","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/33-how-to-use-proguard-with-android-sdk.md","tags":[],"version":"current","sidebarPosition":33,"frontMatter":{},"sidebar":"faq","previous":{"title":"MediaTek limitations","permalink":"/documentation/pr-preview/pr-223/theoplayer/faq/mediatek-limitations"},"next":{"title":"Self-hosting and versioning of THEOplayer","permalink":"/documentation/pr-preview/pr-223/theoplayer/faq/self-hosting-theoplayer"}}'),r=t("85893"),a=t("50065");let i={},d="How to use ProGuard with THEOplayer Android SDK",s={},c=[];function p(e){let o={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"how-to-use-proguard-with-theoplayer-android-sdk",children:"How to use ProGuard with THEOplayer Android SDK"})}),"\n",(0,r.jsx)(o.p,{children:"ProGuard is a popular tool to obfuscate and optimize Java code in Android projects. Depending on the settings, this tool can clash with the THEOplayer Android SDK."}),"\n",(0,r.jsx)(o.p,{children:"Below, you can find a list of rules tested against THEOplayer Android SDK on 28 Nov 2018."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"-keep class com.theoplayer.android.** {*;}\n-dontwarn com.theoplayer.android.**\n-keep public class com.google.android.gms.* { public *; }\n-dontwarn com.google.android.gms.**\n-keep class android.support.v7.app.MediaRouteActionProvider {*;}\n-dontwarn android.support.v7.app.MediaRouteActionProvider\n\n# In case of using yospace integration\n-keep class com.yospace.util.** {*;}\n-dontwarn com.yospace.util.**\n\n# For native Google IMA integration\n-keep class com.google.obf.** { *; }\n-keep interface com.google.obf.** { *; }\n-keep class com.google.ads.interactivemedia.** { *; }\n-keep interface com.google.ads.interactivemedia.** { *; }\n\n# And in case of using a CastOptionsProvider and/or custom MediaRouteActionProvider for chromecast, you have to keep those classes too.\n# eg:\n# -keep class com.yourcomp.yourchromecastpackage.** {*;}\n# -dontwarn com.yourcomp.yourchromecastpackage.**\n"})})]})}function l(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,o,t){t.d(o,{Z:function(){return d},a:function(){return i}});var n=t(67294);let r={},a=n.createContext(r);function i(e){let o=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);