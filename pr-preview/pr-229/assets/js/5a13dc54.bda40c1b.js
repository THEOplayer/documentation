"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["67868"],{42021:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>s});var a=JSON.parse('{"id":"external/android-ui/docs/guides/chromecast","title":"Setting up Chromecast","description":"The Open Video UI for Android has integrated support for Chromecast.","source":"@site/open-video-ui/external/android-ui/docs/guides/chromecast.md","sourceDirName":"external/android-ui/docs/guides","slug":"/android/guides/chromecast","permalink":"/documentation/pr-preview/pr-229/open-video-ui/android/guides/chromecast","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/android-ui/blob/-/docs/guides/chromecast.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"slug":"/android/guides/chromecast"},"sidebar":"android","previous":{"title":"Making a custom UI","permalink":"/documentation/pr-preview/pr-229/open-video-ui/android/guides/custom-ui"},"next":{"title":"Changelog","permalink":"/documentation/pr-preview/pr-229/open-video-ui/android/changelog"}}'),i=n("85893"),o=n("50065");let r={sidebar_position:2,slug:"/android/guides/chromecast"},s="Setting up Chromecast",d={},c=[{value:"Install the THEOplayer Cast integration",id:"install-the-theoplayer-cast-integration",level:2},{value:"Initialize the <code>CastContext</code> during activity creation",id:"initialize-the-castcontext-during-activity-creation",level:2},{value:"Use an <code>AppCompat</code> theme",id:"use-an-appcompat-theme",level:2}];function l(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"setting-up-chromecast",children:"Setting up Chromecast"})}),"\n",(0,i.jsx)(t.p,{children:"The Open Video UI for Android has integrated support for Chromecast."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["When using the ",(0,i.jsx)(t.code,{children:"DefaultUI"}),", the Chromecast button is automatically added in the top right corner\nof the player."]}),"\n",(0,i.jsxs)(t.li,{children:["When creating a custom UI using a ",(0,i.jsx)(t.code,{children:"UIController"}),", you can add a ",(0,i.jsx)(t.code,{children:"ChromecastButton"})," component\nanywhere you like.\nYou should also add a ",(0,i.jsx)(t.code,{children:"ChromecastDisplay"}),' to show a "Playing on Chromecast" message while casting.']}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"However, you need to perform some additional setup to get it fully working."}),"\n",(0,i.jsx)(t.h2,{id:"install-the-theoplayer-cast-integration",children:"Install the THEOplayer Cast integration"}),"\n",(0,i.jsx)(t.p,{children:"The Chromecast support requires the THEOplayer Cast integration to be included in your app.\nWe'll also need to interact with the Cast Application Framework directly, so we'll include that too:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-groovy",metastring:'title="build.gradle"',children:'dependencies {\n    implementation "com.theoplayer.theoplayer-sdk-android:core:7.+"\n    // highlight-next-line\n    implementation "com.theoplayer.theoplayer-sdk-android:integration-cast:7.+"\n    // highlight-next-line\n    implementation "com.google.android.gms:play-services-cast-framework:21.5.0"\n    implementation "com.theoplayer.android-ui:android-ui:1.+"\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Create the player manually using ",(0,i.jsx)(t.code,{children:"rememberPlayer()"}),", and then create and add the cast integration:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",metastring:'title="MainActivity.kt"',children:"import com.theoplayer.android.api.cast.CastConfiguration\nimport com.theoplayer.android.api.cast.CastIntegrationFactory\nimport com.theoplayer.android.api.cast.CastStrategy\n\nsetContent {\n    val player = rememberPlayer()\n    LaunchedEffect(player) {\n        player.theoplayerView?.let { theoplayerView ->\n            // Add Chromecast integration\n            val castConfiguration = CastConfiguration.Builder().apply {\n                castStrategy(CastStrategy.AUTO)\n            }.build()\n            theoplayerView.player.addIntegration(\n                CastIntegrationFactory.createCastIntegration(theoplayerView, castConfiguration)\n            )\n        }\n    }\n\n    DefaultUI(\n        player = player\n    )\n}\n"})}),"\n",(0,i.jsxs)(t.h2,{id:"initialize-the-castcontext-during-activity-creation",children:["Initialize the ",(0,i.jsx)(t.code,{children:"CastContext"})," during activity creation"]}),"\n",(0,i.jsxs)(t.p,{children:["The Cast Application Framework handles automatic discovery of Chromecast receivers.\nHowever, this only works correctly if the ",(0,i.jsx)(t.code,{children:"CastContext"})," is initialized immediately when\nyour app's activity is constructed."]}),"\n",(0,i.jsxs)(t.p,{children:["Therefore, make sure to call ",(0,i.jsx)(t.code,{children:"CastContext.getSharedInstance(this)"})," inside ",(0,i.jsx)(t.code,{children:"Activity.onCreate()"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",metastring:'title="MainActivity.kt"',children:"import com.google.android.gms.cast.framework.CastContext\n\nclass MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n\n        // Initialize Chromecast immediately, for automatic receiver discovery to work correctly.\n        CastContext.getSharedInstance(this)\n\n        setContent {\n            // ...\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.h2,{id:"use-an-appcompat-theme",children:["Use an ",(0,i.jsx)(t.code,{children:"AppCompat"})," theme"]}),"\n",(0,i.jsxs)(t.p,{children:["The Cast Application Framework creates dialogs such as\n",(0,i.jsx)(t.a,{href:"https://developer.android.com/reference/androidx/mediarouter/app/MediaRouteChooserDialog",children:"MediaRouteChooserDialog"}),"\nand ",(0,i.jsx)(t.a,{href:"https://developer.android.com/reference/androidx/mediarouter/app/MediaRouteControllerDialog",children:"MediaRouteControllerDialog"}),"\nto start and control a cast session. However, because these dialogs inherit\nfrom ",(0,i.jsx)(t.a,{href:"https://developer.android.com/reference/androidx/appcompat/app/AppCompatDialog",children:"AppCompatDialog"}),",\nyou need to use theme based on ",(0,i.jsx)(t.code,{children:"Theme.AppCompat"})," in your app:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",metastring:'title="src/main/res/values/themes.xml"',children:'<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    \x3c!-- don\'t do this:\n    <style name="Theme.MyAppTheme" parent="android:Theme.Material.Light.NoActionBar">\n         instead, do this:\n    --\x3e\n    <style name="Theme.MyAppTheme" parent="Theme.AppCompat.Light.NoActionBar">\n        \x3c!-- your app\'s theme colors go here --\x3e\n    </style>\n</resources>\n'})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var a=n(67294);let i={},o=a.createContext(i);function r(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);