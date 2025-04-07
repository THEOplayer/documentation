"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["34716"],{60117:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"external/react-native-theoplayer/doc/pip","title":"Picture-in-Picture (PiP)","description":"Overview","source":"@site/theoplayer_versioned_docs/version-v4/external/react-native-theoplayer/doc/pip.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/pip","permalink":"/documentation/pr-preview/pr-259/theoplayer/v4/getting-started/frameworks/react-native/pip","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/pip.md","tags":[],"version":"v4","frontMatter":{"slug":"/getting-started/frameworks/react-native/pip"},"sidebar":"react-native","previous":{"title":"Migrating to react-native-theoplayer v2.x","permalink":"/documentation/pr-preview/pr-259/theoplayer/v4/getting-started/frameworks/react-native/migrating-v2"},"next":{"title":"Subtitles, Closed Captions and Metadata tracks","permalink":"/documentation/pr-preview/pr-259/theoplayer/v4/getting-started/frameworks/react-native/texttracks"}}'),r=t("85893"),a=t("50065");let o={slug:"/getting-started/frameworks/react-native/pip"},s="Picture-in-Picture (PiP)",d={},c=[{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Transitioning to PiP automatically",id:"transitioning-to-pip-automatically",level:3},{value:"Using presentationMode",id:"using-presentationmode",level:3},{value:"Listening for presentationMode changes",id:"listening-for-presentationmode-changes",level:3},{value:"Android",id:"android",level:2},{value:"Enabling PiP support",id:"enabling-pip-support",level:3},{value:"PiP controls",id:"pip-controls",level:3},{value:"User interface",id:"user-interface",level:3},{value:"iOS",id:"ios",level:2},{value:"Web",id:"web",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"picture-in-picture-pip",children:"Picture-in-Picture (PiP)"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The Picture-in-Picture feature allows you to watch a stream in a floating window that is always\non top of other apps or windows."}),"\n",(0,r.jsx)(n.p,{children:"Transitioning the player to a PiP window can be done in two ways:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Explicitly, using the player API"}),"\n",(0,r.jsx)(n.li,{children:"Automatically, when transitioning to background in mobile apps."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This page describes how to configure PiP with react-native-theoplayer."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"transitioning-to-pip-automatically",children:"Transitioning to PiP automatically"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"pipConfiguration"})," property that is set on the player instance\nallows native mobile apps on iOS and Android to automatically transition into PiP presentation mode when\nthe app goes to the background. The property can be changed at run-time, allowing to change the\nbehaviour depending on the active media asset."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"player.pipConfiguration = { startsAutomatically: true }\n"})}),"\n",(0,r.jsx)(n.h3,{id:"using-presentationmode",children:"Using presentationMode"}),"\n",(0,r.jsxs)(n.p,{children:["The picture-in-picture presentation mode can also be triggered explicitly using the\n",(0,r.jsx)(n.code,{children:"THEOplayer"})," API:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Change presentation mode (inline, fullscreen or pip).\nplayer.presentationMode = PresentationMode.pip;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"listening-for-presentationmode-changes",children:"Listening for presentationMode changes"}),"\n",(0,r.jsxs)(n.p,{children:["Each time the player transitions from one presentationMode to another, either automatically\nor manually through the API, the player dispatches a ",(0,r.jsx)(n.code,{children:"presentationmodechange"})," event that can be\nused to update the user-interface."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"player.addEventListener(\n  PlayerEventType.PRESENTATIONMODE_CHANGE,\n  (event: PresentationModeChangeEvent) => {\n    const newPresentationMode = event.presentationMode;\n  }\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Additional configuration is necessary depending on the platform the app runs on."}),"\n",(0,r.jsx)(n.h2,{id:"android",children:"Android"}),"\n",(0,r.jsx)(n.p,{children:"Picture-in-picture support for Android was added in Android 8.0 (API level 26)."}),"\n",(0,r.jsxs)(n.p,{children:["A react-native app on Android is typically a single-activity application. Launching picture-in-picture\nmode means the whole activity transitions to an ",(0,r.jsx)(n.em,{children:"out-of-app"})," PiP window."]}),"\n",(0,r.jsx)(n.h3,{id:"enabling-pip-support",children:"Enabling PiP support"}),"\n",(0,r.jsxs)(n.p,{children:["To enable PiP support, make sure to set ",(0,r.jsx)(n.code,{children:"android:supportsPictureInPicture=true"})," in the\napp's manifest, and specify that the activity handles layout configuration changes\nso that it does not relaunch when layout changes occur during PiP mode transitions."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<activity\n  android:name=".MainActivity"\n  android:configChanges="screenSize|smallestScreenSize|screenLayout|orientation"\n  android:supportsPictureInPicture="true">\n</activity>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Also, add these methods to the ",(0,r.jsx)(n.code,{children:"MainActivity"})," to let react-native know\nwhen the app makes PiP, background and foreground transitions:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'public override fun onUserLeaveHint() {\n    // Notify the app is backgrounded in case the user taps home or back, and\n    // the app needs to transition to PiP automatically.\n    this.sendBroadcast(Intent("onUserLeaveHint"))\n    super.onUserLeaveHint()\n}\n\noverride fun onPictureInPictureModeChanged(\n    isInPictureInPictureMode: Boolean,\n    newConfig: Configuration\n) {\n    // Notify that the app is changing its picture-in-picture mode.\n    super.onPictureInPictureModeChanged(isInPictureInPictureMode, newConfig)\n    val intent = Intent("onPictureInPictureModeChanged")\n    intent.putExtra("isInPictureInPictureMode", isInPictureInPictureMode)\n    this.sendBroadcast(intent)\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"pip-controls",children:"PiP controls"}),"\n",(0,r.jsx)(n.p,{children:"The PiP window will show the default controls to configure, maximize and close the PiP window.\nIn addition, the active media session enables a play/pause toggle button and (disabled) play-list\nnavigator buttons."}),"\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.img,{alt:"pip1",src:t(39795).Z+"",width:"720",height:"1280"})}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:(0,r.jsx)(n.img,{alt:"pip2",src:t(30283).Z+"",width:"720",height:"1280"})}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:(0,r.jsx)(n.img,{alt:"pip3",src:t(48607).Z+"",width:"720",height:"1280"})})]})})}),"\n",(0,r.jsx)(n.h3,{id:"user-interface",children:"User interface"}),"\n",(0,r.jsxs)(n.p,{children:["As mentioned before, when choosing ",(0,r.jsx)(n.code,{children:"picture-in-picture"}),"\npresentation mode on Android the whole activity moves to the PiP window, including the\nreact-native UI that potentially lies on top. For this reason it is necessary to disable the UI\non Android in PiP mode, as opposed to iOS and web where the video view is separated from the rest"]}),"\n",(0,r.jsxs)(n.p,{children:["More information on Android PiP support can be found on the ",(0,r.jsx)(n.a,{href:"https://developer.android.com/develop/ui/views/picture-in-picture",children:"Android developer pages"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ios",children:"iOS"}),"\n",(0,r.jsx)(n.p,{children:"No extra configuration is necessary to support picture-in-picture on iOS."}),"\n",(0,r.jsx)(n.p,{children:"In contrast to Android, only the video view will move to the floating PiP window.\nThe react-native UI can remain visible and provide playback control."}),"\n",(0,r.jsx)(n.h2,{id:"web",children:"Web"}),"\n",(0,r.jsx)(n.p,{children:"On web the behavior is similar to iOS, where PiP can be started manually from\nthe UI. It will open up a floating PiP window displaying the video element."})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},39795:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pip_android_1-c2cde1b49f69cfe79a441bbaf8cb47ee.png"},30283:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pip_android_2-a34aebe9117fe159534751493076b242.png"},48607:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pip_android_3-715cef9dba8c741424f9b0f8247bc56d.png"},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(67294);let r={},a=i.createContext(r);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);