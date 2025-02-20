"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["15477"],{2717:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>r,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>o});var a=JSON.parse('{"id":"getting-started/sdks/android/android-sdk-customization","title":"Legacy Android SDK (4.12.x) customization","description":"If you want to use custom CSS or JavaScript files you can add the cssPaths and jsPaths properties to your layout.","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/01-android-sdk-customization.md","sourceDirName":"getting-started/01-sdks/02-android","slug":"/getting-started/sdks/android/android-sdk-customization","permalink":"/documentation/pr-preview/pr-216/theoplayer/v4/getting-started/sdks/android/android-sdk-customization","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/02-android/01-android-sdk-customization.md","tags":[],"version":"v4","sidebarPosition":1,"frontMatter":{},"sidebar":"android","previous":{"title":"Getting started on Legacy Android SDK (4.12.x)","permalink":"/documentation/pr-preview/pr-216/theoplayer/v4/getting-started/sdks/android/getting-started"},"next":{"title":"How to couple the native MediaRouteButton to THEOplayer","permalink":"/documentation/pr-preview/pr-216/theoplayer/v4/getting-started/sdks/android/how-to-couple-native-mediaroutebutton"}}'),s=n("85893"),i=n("50065");let r={},o="Legacy Android SDK (4.12.x) customization",l={},d=[{value:"Custom CSS and the Chromeless flag",id:"custom-css-and-the-chromeless-flag",level:2},{value:"1. Register a message listener in your Legacy Android app:",id:"1-register-a-message-listener-in-your-legacy-android-app",level:3},{value:"2. Send a message in your custom JavaScript file (script.js):",id:"2-send-a-message-in-your-custom-javascript-file-scriptjs",level:3},{value:"Custom FullScreen Activity",id:"custom-fullscreen-activity",level:2},{value:"Extend the FullScreenActivity class",id:"extend-the-fullscreenactivity-class",level:3},{value:"Set your custom FullScreenActivity class for a THEOplayerView",id:"set-your-custom-fullscreenactivity-class-for-a-theoplayerview",level:3}];function c(e){let t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"legacy-android-sdk-412x-customization",children:"Legacy Android SDK (4.12.x) customization"})}),"\n",(0,s.jsx)(t.p,{children:"If you want to use custom CSS or JavaScript files you can add the cssPaths and jsPaths properties to your layout."}),"\n",(0,s.jsx)(t.p,{children:"When a relative path is used, it will be relative to the assets folder."}),"\n",(0,s.jsx)(t.p,{children:"XML Configuration"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<com.theoplayer.android.api.THEOplayerView\n    android:id="@+id/theo_player_view"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    app:defaultCss="true"\n    app:cssPaths="path/to/style1.css"\n    app:jsPaths="path/to/script1.js" />\n'})}),"\n",(0,s.jsx)(t.p,{children:"Java Configuration:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n        .chromeless(false)\n        .defaultCss(true)\n        .cssPaths("path/to/style1.css","path/to/style2.css")\n        .jsPaths("path/to/script1.js","path/to/script2.js")\n        .build();\nTHEOplayerView tpv = new THEOplayerView(this, playerConfig);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"custom-css-and-the-chromeless-flag",children:"Custom CSS and the Chromeless flag"}),"\n",(0,s.jsx)(t.p,{children:"You can send messages from within a custom JavaScript file to the Legacy Android SDK (4.12.x)."}),"\n",(0,s.jsx)(t.h3,{id:"1-register-a-message-listener-in-your-legacy-android-app",children:"1. Register a message listener in your Legacy Android app:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n        .jsPaths("path/to/script.js")\n        .build();\nTHEOplayerView tpv = new THEOplayerView(this, playerConfig);\ntpv.addJavaScriptMessageListener("messagetype", new MessageListener() {\n    @Override public void handleMessage(String message) {\n        System.out.println("Received message from JavaScript: " + message);\n    }\n});\n'})}),"\n",(0,s.jsx)(t.h3,{id:"2-send-a-message-in-your-custom-javascript-file-scriptjs",children:"2. Send a message in your custom JavaScript file (script.js):"}),"\n",(0,s.jsx)(t.p,{children:"To send a message the theoplayerAndroid.sendMessage object should be used. The theoplayerAndroid object is provided in the global scope by the THEOplayer Legacy Android SDK (4.12.x)."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"/* this example sends a message every 10 seconds */\nsetInterval(function() {\n    theoplayerAndroid.sendMessage('messagetype', 'message');\n}, 10000)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"custom-fullscreen-activity",children:"Custom FullScreen Activity"}),"\n",(0,s.jsx)(t.p,{children:"If you want to customize the behavior and/or look of the full screen activity, you can do this by using a custom full screen activity class. The steps to take this are given below."}),"\n",(0,s.jsx)(t.h3,{id:"extend-the-fullscreenactivity-class",children:"Extend the FullScreenActivity class"}),"\n",(0,s.jsx)(t.p,{children:"To do this, you first need to make a class that extends FullScreenActivity, for example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"public class CustomFullScreenActivity extends FullScreenActivity {\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        View overLay = this.getLayoutInflater().inflate(R.layout.fullscreen_overlay, null);\n        this.addContentView(overLay, new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));\n    }\n\n    public void onPauseButtonClick(View view) {\n        getTHEOplayerView().getPlayer().pause();\n    }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Of which their layout xml could be like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"\n xmlns:tools="http://schemas.android.com/tools"\n android:layout_width="match_parent"\n android:layout_height="match_parent"\n android:orientation="vertical"\n tools:context=".mainactivity.CustomFullScreenActivity">\n    <Button\n     android:layout_width="wrap_content"\n     android:layout_height="wrap_content"\n     android:onClick="onPauseButtonClick"\n     android:text="pause" />\n</FrameLayout>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"set-your-custom-fullscreenactivity-class-for-a-theoplayerview",children:"Set your custom FullScreenActivity class for a THEOplayerView"}),"\n",(0,s.jsx)(t.p,{children:"This class could then be set for a certain THEOplayerView object (tpv) like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"tpv.getFullScreenManager().setFullscreenActivity(CustomFullScreenActivity.class);\n"})})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var a=n(67294);let s={},i=a.createContext(s);function r(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);