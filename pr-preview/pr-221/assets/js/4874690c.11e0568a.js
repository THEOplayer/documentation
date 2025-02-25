"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["74952"],{70090:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>s});var o=JSON.parse('{"id":"external/flutter-theoplayer-sdk/doc/custom_drm","title":"Using a custom DRM integration","description":"The initial version of the THEOplayer Flutter SDK only support generic Widevine and Fairplay DRM playback.","source":"@site/theoplayer/external/flutter-theoplayer-sdk/doc/custom_drm.md","sourceDirName":"external/flutter-theoplayer-sdk/doc","slug":"/flutter/guides/custom_drm","permalink":"/documentation/pr-preview/pr-221/theoplayer/flutter/guides/custom_drm","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/-/doc/custom_drm.md","tags":[],"version":"current","frontMatter":{"slug":"/flutter/guides/custom_drm"},"sidebar":"flutter","previous":{"title":"Custom branches","permalink":"/documentation/pr-preview/pr-221/theoplayer/flutter/guides/custom-branches"},"next":{"title":"Limitations and Known Issues","permalink":"/documentation/pr-preview/pr-221/theoplayer/flutter/guides/limitations"}}'),i=n("85893"),r=n("50065");let a={slug:"/flutter/guides/custom_drm"},s="Using a custom DRM integration",c={},l=[{value:"Configuration in Flutter",id:"configuration-in-flutter",level:2},{value:"Registering a custom DRM connector on Android",id:"registering-a-custom-drm-connector-on-android",level:2},{value:"Registering a custom DRM connector on iOS",id:"registering-a-custom-drm-connector-on-ios",level:2},{value:"Registering a custom DRM connector on Web",id:"registering-a-custom-drm-connector-on-web",level:2}];function d(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"using-a-custom-drm-integration",children:"Using a custom DRM integration"})}),"\n",(0,i.jsx)(t.p,{children:"The initial version of the THEOplayer Flutter SDK only support generic Widevine and Fairplay DRM playback."}),"\n",(0,i.jsxs)(t.p,{children:["In a later release the Flutter SDK will also add functionality to utilize the well-known\n",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-drm-integration/tree/master",children:"THEOplayer Custom DRM Integration"})," on the Flutter/Dart level."]}),"\n",(0,i.jsxs)(t.p,{children:["The good news is that ",(0,i.jsxs)(t.strong,{children:["the underlying platforms already support this functionality, so if you need to play a custom DRM stream,\nyou can leverage this knowledge, and you can implement a ",(0,i.jsx)(t.em,{children:"(temporary)"})," hybrid solution"]}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"configuration-in-flutter",children:"Configuration in Flutter"}),"\n",(0,i.jsxs)(t.p,{children:["The current Flutter API is already taking into account the future custom extension of the DRM configurations.\nIt already contains a ",(0,i.jsx)(t.code,{children:"customIntegrationID"})," and an ",(0,i.jsx)(t.code,{children:"integrationParameters"})," property to pass custom data:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:'SourceDescription(sources: [\n    TypedSource(\n        src: "https://fps.ezdrm.com/demo/video/ezdrm.m3u8",\n        drm: DRMConfiguration(\n            customIntegrationId: "YourCustomDRMIntegrationID",\n            integrationParameters: {\n                "custom_key": "custom_value",\n            },\n            fairplay: FairPlayDRMConfiguration(\n                licenseAcquisitionURL: "https://yourlicenseurl.com",\n                certificateURL: "https://yourcertificateurl.com",\n                headers: null,\n            ),\n            widevine: WidevineDRMConfiguration(\n                licenseAcquisitionURL: "https://yourlicenseurl.com",\n            ),\n        )),\n    ])\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"By specifying these values the underlying platform knows it has to use a custom DRM logic.\nSomehow we just have to make sure that the custom DRM logic is available on the native side."}),"\n",(0,i.jsx)(t.h2,{id:"registering-a-custom-drm-connector-on-android",children:"Registering a custom DRM connector on Android"}),"\n",(0,i.jsxs)(t.p,{children:["You can rely on any existing native Java/Kotlin implementation you have already, or take one from our\n",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-drm-integration/tree/master",children:"samples repository"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["After you copied over the code into your Android application project (",(0,i.jsx)(t.code,{children:"projectRoot/android/app/src/main"}),"), you can hook it up when the application gets initialized."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, you can use the ",(0,i.jsx)(t.code,{children:"MainActivity"})," class as a starting point (if you don't have any other platform-specific code)."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'import com.theoplayer.android.api.THEOplayerGlobal\nimport com.theoplayer.android.api.contentprotection.KeySystemId\nimport io.flutter.embedding.android.FlutterActivity\n\nclass MainActivity: FlutterActivity() {\n    override fun onAttachedToWindow() {\n        super.onAttachedToWindow()\n\n        THEOplayerGlobal.getSharedInstance(context).registerContentProtectionIntegration(\n            "YourCustomDRMIntegrationID",\n            KeySystemId.WIDEVINE,\n            YourCustomWidevineContentProtectionIntegrationFactory()\n        )\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["By using the exact same ",(0,i.jsx)(t.code,{children:"customIntegrationId"})," on the native side, the underlying THEOplayer will know what to do when it sees a source with the same custom DRM ID."]}),"\n",(0,i.jsx)(t.h2,{id:"registering-a-custom-drm-connector-on-ios",children:"Registering a custom DRM connector on iOS"}),"\n",(0,i.jsxs)(t.p,{children:["You can rely on any existing native Swift/ObjC implementation you have already, or take one from our\n",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-drm-integration/tree/master",children:"samples repository"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["After you copied over the code into your Android application project (",(0,i.jsx)(t.code,{children:"projectRoot/ios/Runner"}),"), you can hook it up when the application gets initialized."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, you can use the ",(0,i.jsx)(t.code,{children:"AppDelegate"})," class as a starting point (if you don't have any other platform-specific code)."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:'import UIKit\nimport Flutter\nimport THEOplayerSDK\n\n@UIApplicationMain\n@objc class AppDelegate: FlutterAppDelegate {\n  override func application(\n    _ application: UIApplication,\n    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?\n  ) -> Bool {\n    GeneratedPluginRegistrant.register(with: self)\n    \n    THEOplayer.registerContentProtectionIntegration(integrationId: "YourCustomDRMIntegrationID" , keySystem: .FAIRPLAY, integrationFactory: YourCustomFairplayContentProtectionIntegrationFactory())\n      \n    return super.application(application, didFinishLaunchingWithOptions: launchOptions)\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["By using the exact same ",(0,i.jsx)(t.code,{children:"customIntegrationId"})," on the native side, the underlying THEOplayer will know what to do when it sees a source with the same custom DRM ID."]}),"\n",(0,i.jsx)(t.h2,{id:"registering-a-custom-drm-connector-on-web",children:"Registering a custom DRM connector on Web"}),"\n",(0,i.jsxs)(t.p,{children:["You can rely on any existing native Javascript/Typescript implementation you have already, or take one from our\n",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-drm-integration/tree/master",children:"samples repository"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["After you copied over the code into your Android application project (",(0,i.jsx)(t.code,{children:"projectRoot/web/"}),"), you can hook it up when the application gets initialized."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, you can use the ",(0,i.jsx)(t.code,{children:"index.html"})," class as a starting point (if you don't have any other platform-specific code)."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<head>\n  \x3c!-- ... --\x3e\n  <script src="THEOplayer.chromeless.js" type="application/javascript"><\/script>\n  \x3c!-- after THEOplayer is loaded, you can load your custom DRM code/file --\x3e\n  <script src="customdrm.js" type="application/javascript"><\/script>\n  \x3c!-- and connect it with THEOplayer --\x3e\n  <script type="application/javascript">\n    THEOplayer.registerContentProtectionIntegration(\n        \'YourCustomDRMIntegrationID\',\n        \'widevine\',\n        new ContentProtectionIntegrations.YourCustomContentProtectionIntegrationFactory()\n    );\n  <\/script>\n\n</head>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["By using the exact same ",(0,i.jsx)(t.code,{children:"customIntegrationId"})," on the native side, the underlying THEOplayer will know what to do when it sees a source with the same custom DRM ID."]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var o=n(67294);let i={},r=o.createContext(i);function a(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);