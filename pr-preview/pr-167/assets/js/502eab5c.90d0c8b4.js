"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["82430"],{93715:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>s,default:()=>c,assets:()=>d,toc:()=>h,frontMatter:()=>r});var n=JSON.parse('{"id":"faq/mediatek-limitations","title":"MediaTek limitations","description":"This page overviews a list of known issues caused by the MediaTek chipset.","source":"@site/theoplayer/faq/31-mediatek-limitations.md","sourceDirName":"faq","slug":"/faq/mediatek-limitations","permalink":"/documentation/pr-preview/pr-167/theoplayer/faq/mediatek-limitations","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/31-mediatek-limitations.md","tags":[],"version":"current","sidebarPosition":31,"frontMatter":{},"sidebar":"faq","previous":{"title":"How to remove unwanted CC track in iOS or Safari","permalink":"/documentation/pr-preview/pr-167/theoplayer/faq/how-to-remove-unwanted-cc-track-ios-safari"},"next":{"title":"How to use ProGuard with THEOplayer Android SDK","permalink":"/documentation/pr-preview/pr-167/theoplayer/faq/how-to-use-proguard-with-android-sdk"}}'),o=i("85893"),a=i("50065");let r={},s="MediaTek limitations",d={},h=[{value:"1. Switching to fullscreen halts playback for approximately 10 seconds",id:"1-switching-to-fullscreen-halts-playback-for-approximately-10-seconds",level:2},{value:"Why does THEOplayerView use a separate activity for fullscreen?",id:"why-does-theoplayerview-use-a-separate-activity-for-fullscreen",level:3},{value:"Solution: Fullscreen without detaching the SurfaceView from the window",id:"solution-fullscreen-without-detaching-the-surfaceview-from-the-window",level:3}];function l(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"mediatek-limitations",children:"MediaTek limitations"})}),"\n",(0,o.jsx)(t.p,{children:"This page overviews a list of known issues caused by the MediaTek chipset."}),"\n",(0,o.jsx)(t.h2,{id:"1-switching-to-fullscreen-halts-playback-for-approximately-10-seconds",children:"1. Switching to fullscreen halts playback for approximately 10 seconds"}),"\n",(0,o.jsxs)(t.p,{children:["The MediaTek decoder seems lackluster at handling a transition to fullscreen when ",(0,o.jsx)(t.strong,{children:"experimental rendering"})," is enabled because THEOplayer uses a separate Android Activity for fullscreen. Using the default rendering pipeline does not trigger this issue. A workaround is doing fullscreen without detaching the SurfaceView from the window."]}),"\n",(0,o.jsx)(t.h3,{id:"why-does-theoplayerview-use-a-separate-activity-for-fullscreen",children:"Why does THEOplayerView use a separate activity for fullscreen?"}),"\n",(0,o.jsx)(t.p,{children:"THEOplayerView uses a separate Activity for fullscreen so that the fullscreen view is completely isolated from the Activity the THEOplayerView is in.\nThe Activity has its own orientation, window settings, and back button behavior.\nBy using a separate Activity, we can leave those settings and the view hierarchy intact in the Activity in which the THEOplayerView is embedded."}),"\n",(0,o.jsx)(t.p,{children:"A downside of this in case of experimental rendering is that we need to move the SurfaceView that holds the Surface on which video is rendered.\nThis, however, means that the Surface is destroyed and a new one is created.\nOn newer devices, this is normally no problem because the decoder is decoupled from the Surface.\nWhen the Surface is destroyed, a new one can be attached to the same decoder.\nOn devices with an API lower than 23 (and some other devices which bug) however, the decoder can not change the Surface on which it draws without re-initialization.\nThis means that on older and some buggy devices, switching to fullscreen will make the video hang until the next keyframe is reached in the stream."}),"\n",(0,o.jsx)(t.h3,{id:"solution-fullscreen-without-detaching-the-surfaceview-from-the-window",children:"Solution: Fullscreen without detaching the SurfaceView from the window"}),"\n",(0,o.jsx)(t.p,{children:"If an implementer does not want the Surface to be destroyed when going fullscreen, the implementer needs to implement this themself to fit within the Activity."}),"\n",(0,o.jsx)(t.p,{children:"A few things are needed for this:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["FullscreenCoupling needs to be disabled (with ",(0,o.jsx)(t.code,{children:"getTPV().getSettings().setFullScreenOrientationCoupled(false)"}),")."]}),"\n",(0,o.jsxs)(t.li,{children:["If the UI is enabled, the fullscreen button needs to be hidden or overwritten. This needs to be done with ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-167/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"custom CSS and/or custom JavaScript"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Orientation needs to be handled in the Activity.\n3.1 To change the orientation of the Activity, ",(0,o.jsx)(t.a,{href:"https://developer.android.com/reference/android/app/Activity.html#setRequestedOrientation(int)",children:(0,o.jsx)(t.code,{children:"setRequestedOrientation"})})," has to be called on the Activity or the Activity needs to be allowed to rotate. Allowing the activity to rotate means that the android",":screenOrientation"," property in the ",(0,o.jsx)(t.a,{href:"https://developer.android.com/guide/topics/manifest/manifest-intro",children:"manifest"})," needs to be set to multiple values or not set.\n3.2 To make sure that the Activity is not recreated on an orientationchange,android",":configChanges",' field in the manifest need to include "orientation|screenSize".\n3.3 To detect the change, the onConfigurationChanged method needs to be overridden in the Activity. In the implementation the orientation can be checked and fullscreen can be initiated or stopped depending on it.']}),"\n",(0,o.jsx)(t.li,{children:'To make the THEOplayerView fill the whole Activity without moving the view, the THEOplayerView and all of its parents view\'s width and height layout parameters need to be set to "match_parent" and they all need to be the first child-view (with a non-zero surface area).'}),"\n",(0,o.jsxs)(t.li,{children:["To hide the navigation buttons and status bar, the Activity should change the window and visibility flags. this can be done with:\n5.1 getWindow().getDecorView().",(0,o.jsx)(t.a,{href:"https://developer.android.com/reference/android/view/View#setSystemUiVisibility(int)",children:"setSystemUiVisibility"}),"(SYSTEM_UI_FLAG_LOW_PROFILE|SYSTEM_UI_FLAG_FULLSCREEN|SYSTEM_UI_FLAG_LAYOUT_STABLE| SYSTEM_UI_FLAG_IMMERSIVE_STICKY|SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION|SYSTEM_UI_FLAG_HIDE_NAVIGATION);\n5.2 getWindow().",(0,o.jsx)(t.a,{href:"https://developer.android.com/reference/android/view/Window.html#setFlags(int,%20int)",children:"setFlags"}),"(FLAG_FULLSCREEN, FLAG_FULLSCREEN);"]}),"\n",(0,o.jsx)(t.li,{children:"To let the player exit fullscreen on a back button press instead of stopping the Activity, the onBackPressed method of the Activity should be overridden with the desired behavior."}),"\n",(0,o.jsx)(t.li,{children:"When going back from fullscreen, the original settings for the window and back button behavior need to be set back to desired values."}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return r}});var n=i(67294);let o={},a=n.createContext(o);function r(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);