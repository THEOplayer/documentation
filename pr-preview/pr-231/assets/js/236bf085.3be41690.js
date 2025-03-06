"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["17078"],{32455:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"getting-started/sdks/fire-tv/getting-started","title":"Getting started on Fire TV Legacy (4.12.x)","description":"The latest THEOplayer Android SDK (5.0.0+) is compatible both with Android mobile and Fire TV. We do not have a separate SDK for each platform.","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/10-fire-tv/00-getting-started.md","sourceDirName":"getting-started/01-sdks/10-fire-tv","slug":"/getting-started/sdks/fire-tv/getting-started","permalink":"/documentation/pr-preview/pr-231/theoplayer/v4/getting-started/sdks/fire-tv/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/10-fire-tv/00-getting-started.md","tags":[],"version":"v4","sidebarPosition":0,"frontMatter":{},"sidebar":"android","previous":{"title":"Getting started on Android TV Legacy (4.12.x)","permalink":"/documentation/pr-preview/pr-231/theoplayer/v4/getting-started/sdks/android-tv/getting-started"},"next":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-231/theoplayer/v4/how-to-guides/"}}'),r=t("85893"),o=t("50065");let s={},a="Getting started on Fire TV Legacy (4.12.x)",l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"THEOplayer license",id:"theoplayer-license",level:3},{value:"Importing the library",id:"importing-the-library",level:2},{value:"Using the THEOplayerView",id:"using-the-theoplayerview",level:2},{value:"Setting up the THEOplayerView using XML",id:"setting-up-the-theoplayerview-using-xml",level:3},{value:"Setting up the THEOplayerView using Java",id:"setting-up-the-theoplayerview-using-java",level:2},{value:"Using the player",id:"using-the-player",level:2},{value:"Setting a source",id:"setting-a-source",level:3},{value:"Add a player event listener",id:"add-a-player-event-listener",level:3},{value:"Add listeners for remote controls to your Activity (e.g. PlayerActivity.java)",id:"add-listeners-for-remote-controls-to-your-activity-eg-playeractivityjava",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started-on-fire-tv-legacy-412x",children:"Getting started on Fire TV Legacy (4.12.x)"})}),"\n",(0,r.jsxs)(n.admonition,{title:"Fire TV",type:"info",children:[(0,r.jsx)(n.p,{children:"The latest THEOplayer Android SDK (5.0.0+) is compatible both with Android mobile and Fire TV. We do not have a separate SDK for each platform."}),(0,r.jsxs)(n.p,{children:["You can follow the guide: ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-231/theoplayer/getting-started/sdks/android/getting-started",children:"Getting started on Android"}),"."]})]}),"\n",(0,r.jsx)(n.p,{children:"This guide will help you to integrate the THEOplayer Android SDK into your Fire TV project."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To start this guide you need the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["An Amazon account linked to a Fire TV device (see how to set up your Fire TV ",(0,r.jsx)(n.a,{href:"https://www.amazon.com/gp/help/customer/display.html?nodeId=G7HTKNXBW4GPXSH6",children:"here"}),")."]}),"\n",(0,r.jsx)(n.li,{children:"A Fire TV device with development mode activated."}),"\n",(0,r.jsx)(n.li,{children:"A television/screen which supports an HDMI input."}),"\n",(0,r.jsx)(n.li,{children:"Development workstation with an IDE and a web browser ( Firefox, Chrome, Safari etc. )."}),"\n",(0,r.jsx)(n.li,{children:"Make sure that the Fire TV device and workstation are on the same local network (you should be able to ping the Fire TV device from your workstation)."}),"\n",(0,r.jsx)(n.li,{children:"An internet connection."}),"\n",(0,r.jsxs)(n.li,{children:["An Amazon development environment to connect to your Amazon Fire TV device ",(0,r.jsx)(n.a,{href:"https://developer.amazon.com/docs/fire-tv/setting-up-your-development-environment.html",children:"How to setup an Amazon development environment"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"system-requirements",children:"System requirements"}),"\n",(0,r.jsxs)(n.p,{children:["The THEOplayer Android SDK can be used for Fire TV devices using Android 5.0+ (minSdkVersion 21). Build your Android SDK through our ",(0,r.jsx)(n.a,{href:"https://portal.theoplayer.com",children:"portal"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Enable the ",(0,r.jsx)(n.code,{children:"ExoPlayer"})," but exclude the ",(0,r.jsx)(n.code,{children:"Chromecast"})," feature flags."]}),"\n",(0,r.jsxs)(n.p,{children:["Clone the THEOplayer Android TV SDK - Starter project: ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/android-tv-sdk-starter-project",children:"https://github.com/THEOplayer/android-tv-sdk-starter-project"})," or build your own, following ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-231/theoplayer/v4/getting-started/sdks/android-tv/getting-started",children:"these guidelines"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Make sure ",(0,r.jsx)(n.code,{children:"minSdkVersion"})," is set to 21 in ",(0,r.jsx)(n.code,{children:"app/build.gradle"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"There is no need to add any Amazon ExoPlayer dependencies, as these are built into the Fire TV SDK."}),"\n",(0,r.jsx)(n.h3,{id:"theoplayer-license",children:"THEOplayer license"}),"\n",(0,r.jsx)(n.p,{children:"Your SDK will include a THEOplayer license which you must specify as part of your setup. Your player license can be defined in one of the following ways:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Passing the license through the PlayerConfiguration"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// passing your license as a string\npublic static THEOplayerConfig.Builder getTHEOplayerConfigBuilder() {\nreturn new THEOplayerConfig.Builder()\n    .license("your_license_here");\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// passing your license as a URL\npublic static THEOplayerConfig.Builder getTHEOplayerConfigBuilder() {\nreturn new THEOplayerConfig.Builder()\n    .licenseUrl("your_licenseUrl_here");\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Passing the license through the manifest"})}),"\n",(0,r.jsxs)(n.p,{children:["Define your ",(0,r.jsx)(n.code,{children:"license"})," or a ",(0,r.jsx)(n.code,{children:"licenseUrl"})," as a new key in the app's manifest."]}),"\n",(0,r.jsxs)(n.p,{children:["Our Fire TV SDK allows configuring the license via metadata keys, which could be either ",(0,r.jsx)(n.code,{children:"THEOPLAYER_LICENSE"})," or ",(0,r.jsx)(n.code,{children:"THEOPLAYER_LICENSE_URL"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"THEOPLAYER_LICENSE"})," must be an obfuscated license string.\n",(0,r.jsx)(n.code,{children:"THEOPLAYER_LICENSE_URL"})," must be a valid URL to a license server."]}),"\n",(0,r.jsxs)(n.p,{children:["You can define your license string, in the ",(0,r.jsx)(n.code,{children:"AndroidManifest.xml"}),", which should look similar to the below snippet of code (replace ",(0,r.jsx)(n.code,{children:"THEOPLAYER_LICENSE"})," with ",(0,r.jsx)(n.code,{children:"THEOPLAYER_LICENSE_URL"})," if specifying the URL):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'<application>\n    <meta-data\n        android:name="THEOPLAYER_LICENSE"\n        android:value="your_license_here" />\n</application>\n'})}),"\n",(0,r.jsx)(n.p,{children:"The license defined in the player configuration has higher precedence than the license provided in the app's manifest. If neither of these are defined, then the built-in license will be used."}),"\n",(0,r.jsx)(n.h2,{id:"importing-the-library",children:"Importing the library"}),"\n",(0,r.jsx)(n.p,{children:"Importing the THEOplayer Android SDK Library can be done following these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Prepare your application to be compatible with Fire TV."}),"\n",(0,r.jsx)(n.li,{children:"In your Android Studio, go to File > New Module > Import .JAR / .AAR Package."}),"\n",(0,r.jsx)(n.li,{children:"Navigate to the location where the THEOplayer Android SDK aar file is stored and select it."}),"\n",(0,r.jsx)(n.li,{children:"Go to your project dependencies by going to File > Project Structure > dependencies tab."}),"\n",(0,r.jsx)(n.li,{children:"Add a new dependency by clicking the plus sign in the top-right corner and choose Module Dependency. Select the THEOplayer SDK aar file and click OK."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Additionally, you can import the sources jar to be able to immediately see the API java source files with their documentation in Android Studio. Follow the following after successfully importing the library steps for that:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"In the Projects Overview, set the view to the project view. You should now see \u201CExternal Libraries\u201D"}),"\n",(0,r.jsx)(n.li,{children:"Under \u201CExternal Libraries\u201D you should be able to find the theoplayer-android-tv SDK library, right click and select \u201CLibrary Properties\u201D."}),"\n",(0,r.jsx)(n.li,{children:"In the top left corner of the Library Properties window, click the first green plus sign."}),"\n",(0,r.jsx)(n.li,{children:"Find and select the theoplayer-android-tv SDK jar file and click ok."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using-the-theoplayerview",children:"Using the THEOplayerView"}),"\n",(0,r.jsx)(n.p,{children:"In order to use THEOplayer in a Fire TV app, you will need the THEOplayerView as the central component. This class can be loaded in a Layout and this will create a new player object for you to interact with."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Important:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In order to play online streams or ads, the ",(0,r.jsx)(n.code,{children:"AndroidManifest.xml"})," of your app needs to declare that it ",(0,r.jsx)(n.a,{href:"https://developer.android.com/training/basics/network-ops/connecting.html",children:"uses the internet permission"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"In order to react to the activity state, users need to call the onResume, onPause and onDestroy when the matching methods are called in the activity using the THEOplayerView."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["N.B. If you cloned the ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/android-tv-sdk-starter-project",children:"THEOplayer Android TV SDK - Starter project"})," on GitHub, you can exclude this step."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class MainActivity extends Activity {\n    // ...\n    @Override\n    protected void onPause() {\n        super.onPause();\n        tpv.onPause();\n    }\n    @Override\n    protected void onResume() {\n        super.onResume();\n        tpv.onResume();\n    }\n    @Override\n    protected void onDestroy() {\n        super.onDestroy();\n        tpv.onDestroy();\n    }\n    // ...\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-the-theoplayerview-using-xml",children:"Setting up the THEOplayerView using XML"}),"\n",(0,r.jsx)(n.p,{children:"When using XML to set your layout, you can add the following code to your XML file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'<com.theoplayer.android.api.THEOplayerView\n    android:id="@+id/theoplayer_view"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent" />\n'})}),"\n",(0,r.jsx)(n.p,{children:"Once you have the THEOplayerView in your layout, you can get a reference to it by using the findViewById-method."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["N.B. If you cloned the ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/android-tv-sdk-starter-project",children:"THEOplayer Android TV SDK - Starter project"})," on GitHub, you can exclude this step."]})}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-the-theoplayerview-using-java",children:"Setting up the THEOplayerView using Java"}),"\n",(0,r.jsx)(n.p,{children:"Next to using XML to configure your view, you can also instantiate the view programmatically in Java. This can be done in the following way:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"THEOplayerView view = new THEOplayerView(activity);\n"})}),"\n",(0,r.jsx)(n.p,{children:"This view can then be placed inside another view and positioned in your layout."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["N.B. If you cloned the ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/android-tv-sdk-starter-project",children:"THEOplayer Android TV SDK - Starter project"})," on GitHub, you can exclude this step."]})}),"\n",(0,r.jsx)(n.h2,{id:"using-the-player",children:"Using the player"}),"\n",(0,r.jsx)(n.p,{children:"Once a player is created and set in your view, you can start interacting with the player instance using the THEOplayer API."}),"\n",(0,r.jsx)(n.h3,{id:"setting-a-source",children:"Setting a source"}),"\n",(0,r.jsx)(n.p,{children:"Create a SourceDescription object and set the player's source."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["N.B. If you cloned the ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/android-tv-sdk-starter-project",children:"THEOplayer Android TV SDK - Starter project"})," on GitHub, you can exclude this step."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SourceDescription sourceDescription = SourceDescription.Builder.sourceDescription("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")\n        .ads(\n                THEOplayerAdDescription.Builder.adDescription("https://cdn.theoplayer.com/demos/preroll.xml")\n                        .timeOffset("10")\n                        .skipOffset("3")\n                        .build())\n        .poster("http://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg")\n        .build();\ntpv.getPlayer().setSource(sourceDescription);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"add-a-player-event-listener",children:"Add a player event listener"}),"\n",(0,r.jsx)(n.p,{children:"This example shows you how to listen to the player play event."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["N.B. If you cloned the ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/android-tv-sdk-starter-project",children:"THEOplayer Android TV SDK - Starter project"})," on GitHub, you can exclude this step."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"EventListener<PlayEvent> eventListener = new EventListener<PlayEvent>() {\n    @Override\n    public void handleEvent(PlayEvent event) {\n        System.out.println(event.getCurrentTime());\n    }\n};\ntpv.getPlayer().addEventListener(PlayerEventTypes.PLAY, eventListener);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"add-listeners-for-remote-controls-to-your-activity-eg-playeractivityjava",children:"Add listeners for remote controls to your Activity (e.g. PlayerActivity.java)"}),"\n",(0,r.jsx)(n.p,{children:"This example shows you how to add listeners for your remote control."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["N.B. If you cloned the ",(0,r.jsx)(n.a,{href:"https://github.com/THEOplayer/android-tv-sdk-starter-project",children:"THEOplayer Android TV SDK - Starter project"})," on GitHub, you can exclude this step."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Override\npublic boolean onKeyDown(int keyCode, KeyEvent event){\n boolean handled = false;\n System.out.println("KEY --" + keyCode + " -- " + event.getKeyCode());\n switch (keyCode){\n   case KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE:\n     if (theoPlayer.isPaused()) {\n       theoPlayer.play();\n     } else {\n       theoPlayer.pause();\n     }\n   case KeyEvent.KEYCODE_BUTTON_A:\n     // ... handle selections\n     handled = true;\n     break;\n   case KeyEvent.KEYCODE_DPAD_LEFT:\n     // ... handle left action\n     handled = true;\n     break;\n   case KeyEvent.KEYCODE_DPAD_RIGHT:\n     // ... handle right action\n     handled = true;\n     break;\n }\n return handled || super.onKeyDown(keyCode, event);\n}\n```pass the license in the manifest\n'})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(67294);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);