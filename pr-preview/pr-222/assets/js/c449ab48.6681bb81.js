"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["28138"],{14337:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>l,assets:()=>t,toc:()=>a,contentTitle:()=>o});var l=JSON.parse('{"id":"external/android-ui/CHANGELOG","title":"Changelog","description":"Tags:","source":"@site/open-video-ui/external/android-ui/CHANGELOG.md","sourceDirName":"external/android-ui","slug":"/android/changelog","permalink":"/documentation/pr-preview/pr-222/open-video-ui/android/changelog","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/android-ui/blob/-/CHANGELOG.md","tags":[],"version":"current","frontMatter":{"slug":"/android/changelog","title":"Changelog","sidebar_custom_props":{"icon":"\uD83D\uDCF0"},"toc_min_heading_level":2,"toc_max_heading_level":2},"sidebar":"android","previous":{"title":"Setting up Chromecast","permalink":"/documentation/pr-preview/pr-222/open-video-ui/android/guides/chromecast"}}'),d=i("85893"),r=i("50065");let s={slug:"/android/changelog",title:"Changelog",sidebar_custom_props:{icon:"\uD83D\uDCF0"},toc_min_heading_level:2,toc_max_heading_level:2},o="Changelog",t={},a=[{value:"v1.9.4 (2024-12-18)",id:"v194-2024-12-18",level:2},{value:"v1.9.3 (2024-12-17)",id:"v193-2024-12-17",level:2},{value:"v1.9.2 (2024-10-15)",id:"v192-2024-10-15",level:2},{value:"v1.9.1 (2024-10-01)",id:"v191-2024-10-01",level:2},{value:"v1.9.0 (2024-09-10)",id:"v190-2024-09-10",level:2},{value:"v1.8.0 (2024-09-06)",id:"v180-2024-09-06",level:2},{value:"v1.7.4 (2024-09-02)",id:"v174-2024-09-02",level:2},{value:"v1.7.3 (2024-09-02)",id:"v173-2024-09-02",level:2},{value:"v1.7.2 (2024-08-28)",id:"v172-2024-08-28",level:2},{value:"v1.7.1 (2024-08-20)",id:"v171-2024-08-20",level:2},{value:"v1.7.0 (2024-08-12)",id:"v170-2024-08-12",level:2},{value:"v1.6.0 (2024-04-16)",id:"v160-2024-04-16",level:2},{value:"v1.5.0 (2024-02-21)",id:"v150-2024-02-21",level:2},{value:"v1.4.0 (2023-11-27)",id:"v140-2023-11-27",level:2},{value:"v1.3.4 (2023-10-17)",id:"v134-2023-10-17",level:2},{value:"v1.3.3 (2023-07-13)",id:"v133-2023-07-13",level:2},{value:"v1.3.2 (2023-07-13)",id:"v132-2023-07-13",level:2},{value:"v1.3.1 (2023-06-30)",id:"v131-2023-06-30",level:2},{value:"v1.3.0 (2023-06-29)",id:"v130-2023-06-29",level:2},{value:"v1.2.0 (2023-06-28)",id:"v120-2023-06-28",level:2},{value:"v1.1.0 (2023-06-27)",id:"v110-2023-06-27",level:2},{value:"v1.0.0 (2023-04-05)",id:"v100-2023-04-05",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"changelog",children:"Changelog"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Tags:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\uD83D\uDCA5 Breaking Change"}),"\n",(0,d.jsx)(n.li,{children:"\uD83D\uDE80 New Feature"}),"\n",(0,d.jsx)(n.li,{children:"\uD83D\uDC1B Bug Fix"}),"\n",(0,d.jsx)(n.li,{children:"\uD83D\uDC4E Deprecation"}),"\n",(0,d.jsx)(n.li,{children:"\uD83D\uDCDD Documentation"}),"\n",(0,d.jsx)(n.li,{children:"\uD83C\uDFE0 Internal"}),"\n",(0,d.jsx)(n.li,{children:"\uD83D\uDC85 Polish"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v194-2024-12-18",children:"v1.9.4 (2024-12-18)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Revert to ",(0,d.jsx)(n.code,{children:"compileSdk"})," 34. (",(0,d.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/pull/56/",children:"#56"}),")"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v193-2024-12-17",children:"v1.9.3 (2024-12-17)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDCA5 Updated to Jetpack Compose version 1.7.5 (",(0,d.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose/bom",children:"BOM"})," 2024.11.00)."]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Fix ",(0,d.jsx)(n.code,{children:"SeekBar"})," not working for livestreams with a large ",(0,d.jsx)(n.code,{children:"player.seekable.start(0)"}),",\nsuch as MPEG-DASH streams that use Unix timestamps for their MPD timeline. (",(0,d.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/pull/52",children:"#52"}),")"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v192-2024-10-15",children:"v1.9.2 (2024-10-15)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Fix ",(0,d.jsx)(n.code,{children:"Player.cast"})," not available before first source change."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v191-2024-10-01",children:"v1.9.1 (2024-10-01)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Fix ",(0,d.jsx)(n.code,{children:"DurationDisplay"})," to show the time of the live point when playing a live or DVR stream."]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Fix ",(0,d.jsx)(n.code,{children:"CurrentTimeDisplay"})," to show the time offset to the live point when playing a live or DVR stream with ",(0,d.jsx)(n.code,{children:"showRemaining = true"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC85 Changed ",(0,d.jsx)(n.code,{children:"DefaultUi"})," to hide the current time display when playing a live stream."]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC85 Changed ",(0,d.jsx)(n.code,{children:"DefaultUi"})," to show the time offset to the live point when playing a DVR stream."]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC85 Changed ",(0,d.jsx)(n.code,{children:"LanguageMenuButton"})," to automatically hide itself when there are no alternative audio or subtitle tracks to select."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v190-2024-09-10",children:"v1.9.0 (2024-09-10)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDCA5 Updated to Jetpack Compose version 1.7.0 (",(0,d.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose/bom",children:"BOM"})," 2024.09.00)."]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDCA5 Changed ",(0,d.jsx)(n.code,{children:"colors"})," parameter in ",(0,d.jsx)(n.code,{children:"IconButton"})," and ",(0,d.jsx)(n.code,{children:"LiveButton"})," to be an ",(0,d.jsx)(n.code,{children:"IconButtonColors"}),"."]}),"\n",(0,d.jsx)(n.li,{children:"\uD83D\uDE80 Added support for Android Lollipop (API 21), to align with the THEOplayer Android SDK."}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDE80 Added ",(0,d.jsx)(n.code,{children:"rememberPlayer(THEOplayerView)"})," to create a ",(0,d.jsx)(n.code,{children:"Player"})," wrapping an existing ",(0,d.jsx)(n.code,{children:"THEOplayerView"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v180-2024-09-06",children:"v1.8.0 (2024-09-06)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\uD83D\uDE80 Added support for THEOplayer 8.0."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v174-2024-09-02",children:"v1.7.4 (2024-09-02)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\uD83D\uDC1B Fixed a crash when playing a live stream on Chromecast."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v173-2024-09-02",children:"v1.7.3 (2024-09-02)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Fixed the Chromecast button never appearing. (",(0,d.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/pull/34",children:"#34"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Fixed the seek bar being disabled while casting. (",(0,d.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/issues/35",children:"#35"}),", ",(0,d.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/pull/36",children:"#36"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDCDD Added a ",(0,d.jsx)(n.a,{href:"/documentation/pr-preview/pr-222/open-video-ui/android/guides/chromecast",children:'"Setting up Chromecast" guide'}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v172-2024-08-28",children:"v1.7.2 (2024-08-28)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Fixed ad clickthrough not working. (",(0,d.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/pull/33",children:"#33"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Fixed UI not re-appearing after playing an ad. (",(0,d.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/pull/33",children:"#33"}),")"]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Fixed exiting fullscreen disabling ",(0,d.jsx)(n.a,{href:"https://developer.android.com/develop/ui/views/layout/edge-to-edge-manually",children:"edge-to-edge display"}),". (",(0,d.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/pull/32",children:"#32"}),")"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v171-2024-08-20",children:"v1.7.1 (2024-08-20)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Disable system gestures on the ",(0,d.jsx)(n.code,{children:"SeekBar"})," component. (",(0,d.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/pull/30",children:"#30"}),")"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v170-2024-08-12",children:"v1.7.0 (2024-08-12)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDCA5 Updated to Jetpack Compose version 1.6.8 (",(0,d.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose/bom",children:"BOM"})," 2024.06.00)."]}),"\n",(0,d.jsx)(n.li,{children:"\uD83D\uDE80 Added basic support for advertisements. (Requires THEOplayer SDK version 7.10.0 or higher.)"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v160-2024-04-16",children:"v1.6.0 (2024-04-16)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\uD83D\uDE80 Added support for THEOplayer Android SDK version 7."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v150-2024-02-21",children:"v1.5.0 (2024-02-21)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDCA5 Updated to Jetpack Compose version 1.6.1 (",(0,d.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose/bom",children:"BOM"})," 2024.02.00)."]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC1B Fixed dragging the ",(0,d.jsx)(n.code,{children:"SeekBar"})," when\nusing ",(0,d.jsx)(n.a,{href:"https://developer.android.com/jetpack/androidx/releases/compose-material3#1.2.0",children:"Compose Material 3 version 1.2.0"}),"\nor higher. (",(0,d.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/issues/24",children:"#24"}),")"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v140-2023-11-27",children:"v1.4.0 (2023-11-27)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDCA5 Updated to Jetpack Compose version 1.5.4 (",(0,d.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose/bom",children:"BOM"})," 2023.10.01)."]}),"\n",(0,d.jsx)(n.li,{children:'\uD83D\uDC85 Renamed project to "THEOplayer Open Video UI for Android".'}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v134-2023-10-17",children:"v1.3.4 (2023-10-17)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\uD83D\uDE80 Allow THEOplayer Android SDK 6."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v133-2023-07-13",children:"v1.3.3 (2023-07-13)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDC85 ",(0,d.jsx)(n.code,{children:"UIController"})," now sizes itself to match the video's aspect ratio, except if this were to\nconflict with a different size constraint (such as ",(0,d.jsx)(n.code,{children:"Modifier.fillMaxSize()"}),")."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v132-2023-07-13",children:"v1.3.2 (2023-07-13)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\uD83C\uDFE0 Publish to THEOplayer's own Maven repository."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v131-2023-06-30",children:"v1.3.1 (2023-06-30)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDE80 Added ",(0,d.jsx)(n.code,{children:"Player.source"}),", ",(0,d.jsx)(n.code,{children:".videoWidth"})," and ",(0,d.jsx)(n.code,{children:".videoHeight"})," properties."]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDE80 Added ",(0,d.jsx)(n.code,{children:"Player.play()"})," and ",(0,d.jsx)(n.code,{children:".pause()"})," shortcut methods."]}),"\n",(0,d.jsx)(n.li,{children:"\uD83D\uDC1B Fixed player not following device rotation while fullscreen."}),"\n",(0,d.jsx)(n.li,{children:"\uD83D\uDC85 When autoplaying a new video, the UI now starts out as hidden."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v130-2023-06-29",children:"v1.3.0 (2023-06-29)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDE80 Added ",(0,d.jsx)(n.code,{children:"THEOplayerTheme.playerAnimations"})," to control the animation settings of the various UI components."]}),"\n",(0,d.jsx)(n.li,{children:"\uD83D\uDC1B Fix consuming apps unable to install different version of the THEOplayer Android SDK."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v120-2023-06-28",children:"v1.2.0 (2023-06-28)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDCA5 Renamed ",(0,d.jsx)(n.code,{children:"PlayerState"})," to ",(0,d.jsx)(n.code,{children:"Player"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDE80 Added overloads to ",(0,d.jsx)(n.code,{children:"DefaultUI"})," and ",(0,d.jsx)(n.code,{children:"UIController"})," that accept a ",(0,d.jsx)(n.code,{children:"Player"}),".\nThis allows constructing a player instance in advance, and even moving it between custom UIs when recomposing."]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDE80 Added ",(0,d.jsx)(n.code,{children:"UIControllerScope.player"})," as an non-null alternative to ",(0,d.jsx)(n.code,{children:"Player.current"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v110-2023-06-27",children:"v1.1.0 (2023-06-27)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDCA5 Update to THEOplayer Android SDK 5.\nTo migrate, switch to ",(0,d.jsx)(n.code,{children:"com.theoplayer.theoplayer-sdk-android:core"})," in your Gradle dependencies.","\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-diff",children:'  dependencies {\n-   implementation "com.theoplayer.theoplayer-sdk-android:unified:+"\n+   implementation "com.theoplayer.theoplayer-sdk-android:core:5.+"\n    implementation "com.theoplayer.android-ui:android-ui:1.+"\n  }\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\uD83D\uDE80 Added a ",(0,d.jsx)(n.code,{children:"UIController"})," overload which accepts a ",(0,d.jsx)(n.code,{children:"THEOplayerView"})," directly."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"v100-2023-04-05",children:"v1.0.0 (2023-04-05)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\uD83D\uDE80 Initial release."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var l=i(67294);let d={},r=l.createContext(d);function s(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);