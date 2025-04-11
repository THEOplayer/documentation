"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["8902"],{96619:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"getting-started/sdks/android-tv/getting-started","title":"Getting started on Android TV Legacy (4.12.x)","description":"The latest THEOplayer Android SDK (5.0.0+) is compatible both with Android mobile and Android TV. We do not have a separate SDK for each platform.","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/04-android-tv/00-getting-started.md","sourceDirName":"getting-started/01-sdks/04-android-tv","slug":"/getting-started/sdks/android-tv/getting-started","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/getting-started/sdks/android-tv/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/04-android-tv/00-getting-started.md","tags":[],"version":"v4","sidebarPosition":0,"frontMatter":{},"sidebar":"android","previous":{"title":"How to do offline Playback with AES-128 Encrypted Streams on Android","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/getting-started/sdks/android/how-to-do-offline-playback-with-aes-128-encryption"},"next":{"title":"Getting started on Fire TV Legacy (4.12.x)","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/getting-started/sdks/fire-tv/getting-started"}}'),r=t("85893"),a=t("50065");let o={},s="Getting started on Android TV Legacy (4.12.x)",d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Importing the THEOplayer Android SDK",id:"importing-the-theoplayer-android-sdk",level:2},{value:"Using the THEOplayerView",id:"using-the-theoplayerview",level:2},{value:"Setting up the THEOplayerView using XML",id:"setting-up-the-theoplayerview-using-xml",level:3},{value:"Setting up the THEOplayerView using Java",id:"setting-up-the-theoplayerview-using-java",level:2},{value:"Using the player",id:"using-the-player",level:2},{value:"Setting a video source",id:"setting-a-video-source",level:3},{value:"Adding a player event listener",id:"adding-a-player-event-listener",level:3},{value:"Remove a player event listener",id:"remove-a-player-event-listener",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started-on-android-tv-legacy-412x",children:"Getting started on Android TV Legacy (4.12.x)"})}),"\n",(0,r.jsxs)(n.admonition,{title:"Android TV",type:"info",children:[(0,r.jsx)(n.p,{children:"The latest THEOplayer Android SDK (5.0.0+) is compatible both with Android mobile and Android TV. We do not have a separate SDK for each platform."}),(0,r.jsxs)(n.p,{children:["You can follow the guide: ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/getting-started/sdks/android/getting-started",children:"Getting started on Android"}),"."]})]}),"\n",(0,r.jsx)(n.p,{children:"This guide will help you to integrate the THEOplayer Android SDK into your project, and cover the following topics:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#importing-the-theoplayer-android-sdk",children:"Importing the THEOplayer SDK"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#using-the-theoplayerview",children:"Using the THEOplayerView"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#setting-a-video-source",children:"Setting a video source"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#adding-a-player-event-listener",children:"Adding a player event listener"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The THEOplayer Android SDK can be used for Android TV devices using Android 5.0+ (minSdkVersion 21)."}),"\n",(0,r.jsx)(n.admonition,{title:"Maven / Gradle / Jitpack",type:"info",children:(0,r.jsxs)(n.p,{children:["THEOplayer v2.83.0 and above can be managed through Jitpack. Refer to ",(0,r.jsx)("a",{href:"https://github.com/THEOplayer/theoplayer-sdk-android",target:"_blank",children:(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-android",children:"https://github.com/THEOplayer/theoplayer-sdk-android"})})," for more information."]})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Download and install ",(0,r.jsx)(n.a,{href:"https://developer.android.com/studio/index.html",children:"Android Studio"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Obtain a THEOplayer Android SDK through the THEOplayer Developer Portal at ",(0,r.jsx)(n.a,{href:"https://portal.theoplayer.com/login",children:"https://portal.theoplayer.com"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["And have the ",(0,r.jsx)(n.code,{children:"LICENSE"})," string handy, as depicted in the screenshot below, because you'll need it when configuring your video player.\n",(0,r.jsx)(n.img,{src:"https://cdn.theoplayer.com/images/git/theoplayer-android-sdk-license-string.png",alt:""})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"importing-the-theoplayer-android-sdk",children:"Importing the THEOplayer Android SDK"}),"\n",(0,r.jsx)(n.p,{children:"Manually importing the THEOplayer Android SDK Library can be done following these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.android.com/training/tv/start/start.html",children:"Prepare your application"})," to be compatible with Android TV."]}),"\n",(0,r.jsx)(n.li,{children:"In your Android Studio, go to File > New Module > Import .JAR / .AAR Package."}),"\n",(0,r.jsx)(n.li,{children:"Navigate to the location where the THEOplayer Android SDK aar file is stored and select it."}),"\n",(0,r.jsx)(n.li,{children:"Go to your project dependencies by going to File > Project Structure > dependencies tab."}),"\n",(0,r.jsx)(n.li,{children:"Add a new dependency by clicking the plus sign in the top-right corner and choose Module Dependency. Select the THEOplayer SDK aar file and click OK."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Additionally, you can import the sources jar to be able to immediately see the API java source files with their documentation in Android Studio. Follow the following after successfully importing the library steps for that:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"In the Projects Overview, set the view to the project view. You should now see \u201CExternal Libraries\u201D"}),"\n",(0,r.jsx)(n.li,{children:"Under \u201CExternal Libraries\u201D you should be able to find the theoplayer-android-tv SDK library, right click and select \u201CLibrary Properties\u201D."}),"\n",(0,r.jsx)(n.li,{children:"In the top left corner of the Library Properties window, click the first green plus sign."}),"\n",(0,r.jsx)(n.li,{children:"Find and select the theoplayer-android-tv SDK jar file and click ok."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using-the-theoplayerview",children:"Using the THEOplayerView"}),"\n",(0,r.jsx)(n.p,{children:"In order to use THEOplayer in an Android TV app, you will need the THEOplayerView as the central component. This class can be loaded in a Layout and this will create a new player object for you to interact with."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Important:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In order to play online streams or ads, the AndroidManifest.xml of your app needs to declare that it ",(0,r.jsx)(n.a,{href:"https://developer.android.com/training/basics/network-ops/connecting.html",children:"uses the internet permission"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"In order to react to the activity state, users need to call the onResume, onPause and onDestroy when the matching methods are called in the activity using the THEOplayerView."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class MainActivity extends Activity\n\n    // ...\n\n    @Override\n    protected void onPause() {\n        super.onPause();\n        tpv.onPause();\n    }\n\n    @Override\n    protected void onResume() {\n        super.onResume();\n        tpv.onResume();\n    }\n\n    @Override\n    protected void onDestroy() {\n        super.onDestroy();\n        tpv.onDestroy();\n    }\n\n    // ...\n\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-the-theoplayerview-using-xml",children:"Setting up the THEOplayerView using XML"}),"\n",(0,r.jsx)(n.p,{children:"When using XML to set your layout, you can add the following code to your XML file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<com.theoplayer.android.api.THEOplayerView\n    android:id="@+id/theoplayer_view"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent" />\n'})}),"\n",(0,r.jsx)(n.p,{children:"Once you have the THEOplayerView in your layout, you can get a reference to it by using the findViewById-method."}),"\n",(0,r.jsxs)(n.p,{children:["In addition to setting the ",(0,r.jsx)(n.code,{children:"INTERNET"})," permission in ",(0,r.jsx)(n.code,{children:"AndroidManifest.xml"}),",\nyou also need to configure your license string in this file, as demonstrated in the snippet below\nthrough the ",(0,r.jsx)(n.code,{children:"<meta-data ..."})," tag."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<application>\n    <meta-data\n        android:name="THEOPLAYER_LICENSE"\n        android:value="your_license_here" />\n</application>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Don't forget to swap ",(0,r.jsx)(n.code,{children:"your_license_here"})," with your license string, as mentioned in the ",(0,r.jsx)(n.a,{href:"#prerequisites",children:'"Prerequisites"'}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-the-theoplayerview-using-java",children:"Setting up the THEOplayerView using Java"}),"\n",(0,r.jsx)(n.p,{children:"Next to using XML to configure your view, you can also instantiate the view programmatically in Java. This can be done in the following way:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n    .chromeless(false)\n    .license("your_license_here")\n    .build();\nTHEOplayerView tpv = new THEOplayerView(activity, playerConfig);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Don't forget to swap ",(0,r.jsx)(n.code,{children:"your_license_here"})," with your license string, as mentioned in the ",(0,r.jsx)(n.a,{href:"#prerequisites",children:'"Prerequisites"'}),"."]}),"\n",(0,r.jsx)(n.p,{children:"This view can then be placed inside another view and positioned in your layout."}),"\n",(0,r.jsx)(n.h2,{id:"using-the-player",children:"Using the player"}),"\n",(0,r.jsx)(n.p,{children:"Once a player is created and set in your view, you can start interacting with the player instance using the THEOplayer API."}),"\n",(0,r.jsx)(n.h3,{id:"setting-a-video-source",children:"Setting a video source"}),"\n",(0,r.jsx)(n.p,{children:"Create a SourceDescription object and set the player's source:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SourceDescription sourceDescription = SourceDescription.Builder\n    .sourceDescription("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")\n    .ads(\n            THEOplayerAdDescription.Builder.adDescription("https://cdn.theoplayer.com/demos/preroll.xml")\n                    .timeOffset("10")\n                    .skipOffset("3")\n                    .build())\n    .poster("http://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg")\n    .build();\ntpv.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Notice how the ",(0,r.jsx)(n.code,{children:"getPlayer()"})," method returns a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/Player.html",children:(0,r.jsx)(n.code,{children:"Player"})}),".\nYou use the ",(0,r.jsx)(n.code,{children:"Player"})," interface to set a video stream, attach event listeners, configure autoplay, etc."]}),"\n",(0,r.jsx)(n.h3,{id:"adding-a-player-event-listener",children:"Adding a player event listener"}),"\n",(0,r.jsx)(n.p,{children:"This example shows you how to listen to the player play event."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"EventListener<PlayEvent> eventListener = new EventListener<PlayEvent>() {\n    @Override\n    public void handleEvent(PlayEvent event) {\n        System.out.println(event.getCurrentTime());\n    }\n};\ntpv.getPlayer().addEventListener(PlayerEventTypes.PLAY, eventListener);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"remove-a-player-event-listener",children:"Remove a player event listener"}),"\n",(0,r.jsx)(n.p,{children:"This example shows you how to remove an event listener of the play event."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"tpv.getPlayer().removeEventListener(PlayerEventTypes.PLAY, eventListener);\n"})})]})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(67294);let r={},a=i.createContext(r);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);