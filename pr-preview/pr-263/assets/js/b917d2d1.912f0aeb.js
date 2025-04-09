"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["51480"],{68517:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>s,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"getting-started/sdks/android/migration-from-4.x","title":"Migration from THEOplayer Android/AndroidTV/FireTV SDK 4.x to THEOplayer Android SDK 5.0","description":"What are the differences between Android SDK and Legacy Android SDKs (4.12.x)?","source":"@site/theoplayer_versioned_docs/version-v8/getting-started/01-sdks/02-android/02-migration-from-4.x.md","sourceDirName":"getting-started/01-sdks/02-android","slug":"/getting-started/sdks/android/migration-from-4.x","permalink":"/documentation/pr-preview/pr-263/theoplayer/v8/getting-started/sdks/android/migration-from-4.x","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/getting-started/01-sdks/02-android/02-migration-from-4.x.md","tags":[],"version":"v8","sidebarPosition":2,"frontMatter":{},"sidebar":"android","previous":{"title":"Android Feature Integrations","permalink":"/documentation/pr-preview/pr-263/theoplayer/v8/getting-started/sdks/android/features"},"next":{"title":"Migrating to THEOplayer Android SDK 8.x","permalink":"/documentation/pr-preview/pr-263/theoplayer/v8/getting-started/sdks/android/migrating-to-theoplayer-8"}}'),r=t("85893"),d=t("50065");let a={},o="Migration from THEOplayer Android/AndroidTV/FireTV SDK 4.x to THEOplayer Android SDK 5.0",s={},l=[{value:"What are the differences between Android SDK and Legacy Android SDKs (4.12.x)?",id:"what-are-the-differences-between-android-sdk-and-legacy-android-sdks-412x",level:2},{value:"When to migrate?",id:"when-to-migrate",level:2},{value:"Android SDK 5.0 features:",id:"android-sdk-50-features",level:3},{value:"Android SDK 6.0 features:",id:"android-sdk-60-features",level:3},{value:"When not to migrate?",id:"when-not-to-migrate",level:2},{value:"Migration",id:"migration",level:2},{value:"1. The deprecated (and removed) APIs.",id:"1-the-deprecated-and-removed-apis",level:4},{value:"2. The new integration-based architecture.",id:"2-the-new-integration-based-architecture",level:4}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"migration-from-theoplayer-androidandroidtvfiretv-sdk-4x-to-theoplayer-android-sdk-50",children:"Migration from THEOplayer Android/AndroidTV/FireTV SDK 4.x to THEOplayer Android SDK 5.0"})}),"\n",(0,r.jsx)(n.h2,{id:"what-are-the-differences-between-android-sdk-and-legacy-android-sdks-412x",children:"What are the differences between Android SDK and Legacy Android SDKs (4.12.x)?"}),"\n",(0,r.jsx)(n.p,{children:"The Android SDK is significantly more performant than the Legacy Android SDKs (4.12.x), as it removes the dependency on the WebView to handle video-playback and supported features.\nRemoving the WebView dependency also allowed to move many of the APIs from being asynchronous to being synchronous, such as querying the current time."}),"\n",(0,r.jsx)(n.p,{children:"Another difference between the SDKs is that with Android SDK users will no longer need to maintain multiple flavors for different platforms or Android OS version.\nThis because the Android SDK works on Android mobile, Android TV and Fire TV devices with Android OS version 5.0+ (API level 21 and above)."}),"\n",(0,r.jsxs)(n.p,{children:["The Android SDK moves towards more modularized features, which means there is a base SDK that can handle basic playback and additional feature integrations are provided as separate modules that can be added as desired.\nThis approach gives more flexibility and results in a reduced application size, since non-required parts are not included in the build of the application. You can read more about this ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v8/getting-started/sdks/what-is-new-in-theoplayer-5",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The Android SDK leverages Java 8 and Kotlin languages to provide safer and more concise code."}),"\n",(0,r.jsxs)(n.p,{children:["The Android SDK is published to the ",(0,r.jsx)(n.a,{href:"https://maven.theoplayer.com/",children:"THEOplayer Maven repository"})," where developers can easily navigate our releases and find code snippets for implementing the player into their project."]}),"\n",(0,r.jsx)(n.h2,{id:"when-to-migrate",children:"When to migrate?"}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer Android SDK 5+ is a more performant version of our SDK, so we advise you to migrate as soon as possible."}),"\n",(0,r.jsx)(n.p,{children:"However, the 5.0 SDK is built from the ground up so from day 1 it will be not in feature parity with the legacy SDKs."}),"\n",(0,r.jsx)(n.p,{children:"What features are covered already in THEOplayer Android SDK 5.0?"}),"\n",(0,r.jsx)(n.h3,{id:"android-sdk-50-features",children:"Android SDK 5.0 features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Basic playback (HLS, DASH, MP4) with playback events"}),"\n",(0,r.jsx)(n.li,{children:"Widevine DRM playback"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-drm-integration",children:"Custom content protection integrations"})}),"\n",(0,r.jsx)(n.li,{children:"Google IMA integration"}),"\n",(0,r.jsx)(n.li,{children:"Google DAI integration"}),"\n",(0,r.jsx)(n.li,{children:"Google Cast (Chromecast) integration"}),"\n",(0,r.jsx)(n.li,{children:"MediaTailor integration"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v8/how-to-guides/miscellaneous/picture-in-picture#android--fire-tv-sdk",children:"Native picture-in-picture support"})}),"\n",(0,r.jsx)(n.li,{children:"Fullscreen playback"}),"\n",(0,r.jsx)(n.li,{children:"Background audio playback"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"android-sdk-60-features",children:"Android SDK 6.0 features:"}),"\n",(0,r.jsx)(n.p,{children:"Additionally, to the features of Android SDK 5.0 there are following features implemented in Android SDK 6.0:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Support for caching streams offline."}),"\n",(0,r.jsx)(n.li,{children:"DRM HESP streams playback."}),"\n",(0,r.jsx)(n.li,{children:"TextTrack styling support"}),"\n",(0,r.jsx)(n.li,{children:"Support for play-out of progressive media assets embedded as raw app resource."}),"\n",(0,r.jsx)(n.li,{children:"Metrics API"}),"\n",(0,r.jsx)(n.li,{children:"Background playback"}),"\n",(0,r.jsx)(n.li,{children:"API to retrieve the decoder name for a specified media."}),"\n",(0,r.jsx)(n.li,{children:"Added the ability to intercept network requests."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If the implemented features are covering your use-cases, feel free to upgrade.\nThe changes due to deprecations in your code will be minimal, THEOplayer Android SDK 5.0 tries to be backward compatible with the legacy 4.x APIs as much as possible."}),"\n",(0,r.jsx)(n.h2,{id:"when-not-to-migrate",children:"When not to migrate?"}),"\n",(0,r.jsx)(n.p,{children:"If your use-cases rely on missing features and you can not implement them on top of the player."}),"\n",(0,r.jsx)(n.p,{children:"Some features, like:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Analytics pre-integrations: Agama, Moat, Conviva, Youbora"}),"\n",(0,r.jsx)(n.li,{children:"Advertisement pre-integrations: THEOAds, Spotx"}),"\n",(0,r.jsx)(n.li,{children:"Server-side ad insertion: Yospace, Verizon Media"}),"\n",(0,r.jsx)(n.li,{children:"VR"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Or features which brought to life via the WebView's middle layer:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Related Content API"}),"\n",(0,r.jsx)(n.li,{children:"Javascript execution"}),"\n",(0,r.jsx)(n.li,{children:"CSS injection"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Or you rely on the default THEOplayer UI."}),"\n",(0,r.jsx)(n.p,{children:"The current THEOplayer Android SDK 5.0+ is chromeless, it means you need to implement your own native UI on top of the player."}),"\n",(0,r.jsx)(n.p,{children:"Soon we will also release a fully native, customizable UI module (connector). Stay tuned!"}),"\n",(0,r.jsx)(n.h2,{id:"migration",children:"Migration"}),"\n",(0,r.jsx)(n.p,{children:"There are 2 main things you need to consider during migration:"}),"\n",(0,r.jsx)(n.h4,{id:"1-the-deprecated-and-removed-apis",children:"1. The deprecated (and removed) APIs."}),"\n",(0,r.jsxs)(n.p,{children:["For these please consult with our ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v8/changelog",children:"changelog"})]}),"\n",(0,r.jsx)(n.h4,{id:"2-the-new-integration-based-architecture",children:"2. The new integration-based architecture."}),"\n",(0,r.jsxs)(n.p,{children:["You can read more about the new architecture ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-263/theoplayer/v8/getting-started/sdks/what-is-new-in-theoplayer-5",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The module names are also updated.\nTherefore, to migrate each modularized feature refer to the following table to make the necessary changes:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Feature"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Module Name before 5.0.0"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Module Name after 5.0.0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Basic Playback"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"unified:+"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"core:+"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Google IMA"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"unified-ads-ima:+"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"integration-ads-ima:+"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Chromecast"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"unified-cast:+"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"integration-cast:+"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"AWS MediaTailor"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"unified-ads-mediatailor:+"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"integration-ads-mediatailor:+"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Google DAI"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"unified-ads-dai:+"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"integration-ads-dai:+"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"After these steps you should be able to compile your project and benefit from THEOplayer Android SDK 5.0+."}),"\n",(0,r.jsxs)(n.p,{children:["The Google Cast and Google IMA/DAI integration APIs are mapped to ",(0,r.jsx)(n.code,{children:"theoplayer.ads"})," and ",(0,r.jsx)(n.code,{children:"theoplayer.cast.chromecast"})," APIs, but you can also access the same APIs (and new ones) on the integrations itself."]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(67294);let r={},d=i.createContext(r);function a(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);