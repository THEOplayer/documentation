"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["95444"],{31018:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>o,assets:()=>c,toc:()=>d,contentTitle:()=>r});var o=JSON.parse('{"id":"how-to-guides/cast/chromecast/connecting-from-custom-sender-applications","title":"Connecting from custom Sender applications","description":"General","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/03-cast/01-chromecast/01-connecting-from-custom-sender-applications.md","sourceDirName":"how-to-guides/03-cast/01-chromecast","slug":"/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications","permalink":"/documentation/pr-preview/pr-224/theoplayer/v6/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/03-cast/01-chromecast/01-connecting-from-custom-sender-applications.md","tags":[],"version":"v6","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-224/theoplayer/v6/how-to-guides/cast/chromecast/introduction"},"next":{"title":"Debugging","permalink":"/documentation/pr-preview/pr-224/theoplayer/v6/how-to-guides/cast/chromecast/debugging"}}'),i=t("85893"),s=t("50065");let a={},r="Connecting from custom Sender applications",c={},d=[{value:"General",id:"general",level:2},{value:"Web",id:"web",level:3},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"Related articles",id:"related-articles",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"connecting-from-custom-sender-applications",children:"Connecting from custom Sender applications"})}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(n.p,{children:"In general, the following flow should be followed:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Set up Google Cast context with correct receiver application ID."}),"\n",(0,i.jsx)(n.li,{children:"Connect to Chromecast device."}),"\n",(0,i.jsx)(n.li,{children:"Set up Google Cast MediaInfo object with correct contentID and contentType."}),"\n",(0,i.jsxs)(n.li,{children:["Send Google Cast LoadRequest with a serialized THEOplayer SourceDescription object as a key in the customData of the LoadRequest. So something like ",(0,i.jsx)(n.code,{children:"{sourceDescription: ${SourceDescription you want to cast}}"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Let's discuss this in more detail for custom ",(0,i.jsx)(n.a,{href:"#web",children:"Web"}),", ",(0,i.jsx)(n.a,{href:"#android",children:"Android"})," and ",(0,i.jsx)(n.a,{href:"#ios",children:"iOS"})," applications."]}),"\n",(0,i.jsx)(n.h3,{id:"web",children:"Web"}),"\n",(0,i.jsx)(n.p,{children:"The following webpage should suffice:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>Title</title>\n    <script src=\"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1\"><\/script>\n    <script>\n      window['__onGCastApiAvailable'] = function (isAvailable) {\n        if (isAvailable) {\n          cast.framework.CastContext.getInstance().setOptions({\n            receiverApplicationId: '$YOUR_APP_ID', // Adapt this\n            autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED, // And this if you want to\n          });\n        }\n      };\n    <\/script>\n    <script>\n      function startCasting(sourceDescription) {\n        var castSession = cast.framework.CastContext.getInstance().getCurrentSession();\n        var mediaInfo = new chrome.cast.media.MediaInfo(sourceDescription.sources[0].src, sourceDescription.sources[0].type);\n        var request = new chrome.cast.media.LoadRequest(mediaInfo);\n        request.customData = { sourceDescription: sourceDescription };\n        castSession.loadMedia(request).then(\n          function () {\n            console.log('Load succeed');\n          },\n          function (errorCode) {\n            console.log('Error code: ' + errorCode);\n          }\n        );\n        var player = new cast.framework.RemotePlayer();\n        var playerController = new cast.framework.RemotePlayerController(player);\n        return playerController;\n      }\n    <\/script>\n  </head>\n  <body></body>\n</html>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Load this in Google Chrome, connect to a Chromecast device, and then you can do:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"startCasting({\n  sources: [\n    {\n      src: 'https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)',\n      type: 'application/dash+xml',\n      contentProtection: {\n        widevine: {\n          licenseAcquisitionURL: 'https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac',\n        },\n      },\n    },\n  ],\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will start playback."}),"\n",(0,i.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,i.jsx)(n.p,{children:"First, set up your CastOptionsProvider:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.yourcomp.chromecastSender;\n\nimport android.content.Context;\n\nimport com.google.android.gms.cast.framework.CastOptions;\nimport com.google.android.gms.cast.framework.OptionsProvider;\nimport com.google.android.gms.cast.framework.SessionProvider;\n\nimport java.util.List;\n\npublic class THEOCastOptionsProvider implements OptionsProvider {\n\n    public static String DEFAULT_APP_ID = "1ADD53F3";\n\n    @Override\n    public CastOptions getCastOptions(Context context) {\n        return new CastOptions.Builder()\n                .setReceiverApplicationId(DEFAULT_APP_ID)\n                .build();\n    }\n\n    @Override\n    public List<SessionProvider> getAdditionalSessionProviders(Context context) {\n        return null;\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"And link to it in your AndroidManifest.xml file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.yourcomp.chromecastSenderApp">\n    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.WAKE_LOCK" />\n\n    <application\n    ...\n        <meta-data\n            android:name="com.google.android.gms.cast.framework.OPTIONS_PROVIDER_CLASS_NAME"\n            android:value="com.yourcomp.chromecastSender.CastOptionsProvider" />\n    </application>\n\n</manifest>\n'})}),"\n",(0,i.jsx)(n.p,{children:'Fill in the correct class name by replacing "com.yourcomp.chromecastSender.CastOptionsProvider"!\nYou can change the DEFAULT_APP_ID to direct to your own Chromecast app. Next you can actually do the casting like so:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.yourcomp.chromecastSender;\n\nimport android.app.Activity;\nimport android.support.v7.app.MediaRouteChooserDialog;\n\nimport com.google.android.gms.cast.MediaInfo;\nimport com.google.android.gms.cast.MediaLoadOptions;\nimport com.google.android.gms.cast.framework.CastContext;\nimport com.google.android.gms.cast.framework.CastSession;\nimport com.google.android.gms.cast.framework.SessionManagerListener;\n\nimport org.json.JSONException;\nimport org.json.JSONObject;\n\npublic class ChromecastSender {\n    public ChromecastSender() {\n    }\n\n    public void sendSourceToChromecast(Activity context) throws JSONException {\n        CastContext castContext = CastContext.getSharedInstance(context);\n        showCastChooserDialog(context, castContext);\n\n        JSONObject sourceDescriptionJson = new JSONObject("{"sourceDescription":{"sources":[{"src":"https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)","type":"application/dash+xml","contentProtection":{"widevine":{"licenseAcquisitionURL":"https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac"}}}]}}");\n        MediaLoadOptions mediaLoadOptions = new MediaLoadOptions.Builder().setCustomData(sourceDescriptionJson).build();\n        MediaInfo mediaInfo = new MediaInfo.Builder("https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)").setContentType("application/dash+xml")\n                .build();\n\n        castContext.getSessionManager().addSessionManagerListener(new SessionManagerListener<CastSession>() {\n            @Override\n            public void onSessionStarting(CastSession castSession) {\n\n            }\n\n            @Override\n            public void onSessionStarted(CastSession castSession, String s) {\n\n                castSession.getRemoteMediaClient().load(mediaInfo,mediaLoadOptions);\n            }\n\n            @Override\n            public void onSessionStartFailed(CastSession castSession, int i) {\n\n            }\n\n            @Override\n            public void onSessionEnding(CastSession castSession) {\n\n            }\n\n            @Override\n            public void onSessionEnded(CastSession castSession, int i) {\n\n            }\n\n            @Override\n            public void onSessionResuming(CastSession castSession, String s) {\n\n            }\n\n            @Override\n            public void onSessionResumed(CastSession castSession, boolean b) {\n\n            }\n\n            @Override\n            public void onSessionResumeFailed(CastSession castSession, int i) {\n\n            }\n\n            @Override\n            public void onSessionSuspended(CastSession castSession, int i) {\n\n            }\n        }, CastSession.class);\n\n\n    }\n\n    private void showCastChooserDialog(Activity context, CastContext castContext) {\n        MediaRouteChooserDialog mediaRouteChooserDialog = new MediaRouteChooserDialog(context);\n        mediaRouteChooserDialog.setRouteSelector(castContext.getMergedSelector());\n        mediaRouteChooserDialog.show();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Instantiate this class and then connect to a device.\nThis will start casting the source listed in the class to the Chromecast receiver."}),"\n",(0,i.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,i.jsx)(n.p,{children:"When launching your application, start your Google Cast context using the following snippet:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'let options = GCKCastOptions(receiverApplicationID: "1ADD53F3")\nGCKCastContext.setSharedInstanceWith(options)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Once this is done, it\u2019s necessary to start a session.\nThis is usually done by creating a cast button somewhere in your UI using GCKUICastButton, which when pressed opens up a dialog allowing you to select a device and start a session."}),"\n",(0,i.jsxs)(n.p,{children:["Once a session is started, you can start playing back content.\nThe THEOplayer Chromecast receiver is capable of playing back content easily using the default Google Cast APIs (with GCKMediaInformationBuilder and LoadRequest).\nHowever, to use the more advanced functionality, you will need to pass in custom data in the ",(0,i.jsx)(n.a,{href:"https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_media_load_options",children:(0,i.jsx)(n.code,{children:"GCKMediaLoadOptions"})})," object.\nThis custom data follows the structure of SourceDescription as used in the web version of THEOplayer, except we have to use NSDictionary notation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'let metadata = GCKMediaMetadata()\nmetadata.setString("Title", forKey: kGCKMetadataKeyTitle)\nmetadata.setString("Subtitle", forKey: kGCKMetadataKeySubtitle)\n\nlet contentURL = "https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)"\nlet contentID = "622b189f-ec39-43f2-93a2-201ac4e31ce1"\n\nlet informationBuilder = GCKMediaInformationBuilder(contentURL: contentURL)\ninformationBuilder.contentID = contentID\ninformationBuilder.streamType = .unknown\ninformationBuilder.contentType = "application/dash+xml"\ninformationBuilder.streamDuration = 0.0\ninformationBuilder.mediaTracks = nil\ninformationBuilder.metadata = metadata\nlet information = informationBuilder.build()\n\nlet sourceDescription = [\n    "sources": [\n        [\n            "src": "https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)",\n            "type": "application/dash+xml",\n            "contentProtection": [\n                "widevine": [\n                    "licenseAcquisitionURL": "https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac"\n                ]\n            ]\n        ]\n    ]\n]\n\nlet loadOptions = GCKMediaLoadOptions()\nloadOptions.autoplay = true\nloadOptions.playPosition = 0.0\nloadOptions.customData = ["sourceDescription": sourceDescription]\n\ncastSession!.remoteMediaClient?.loadMedia(mediaInfo, with: loadOptions)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note that you should also adapt the contentID and contentType in the arguments for the GCKMediaInformation initializer."}),"\n",(0,i.jsx)(n.p,{children:"You have to use the Chromecast API to implement additional logic such as pausing the Chromecast Receiver application, fetching the video's progress, ..."}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-224/theoplayer/v6/how-to-guides/player/how-can-we-track-the-first-playing-event",children:"How can we track the first play(ing) event?"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-224/theoplayer/v6/how-to-guides/mediatrack/how-to-start-with-specific-quality",children:"How to start with a specific quality?"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-224/theoplayer/v6/how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast",children:"Pass subtitle selection on to Chromecast"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-224/theoplayer/v6/faq/how-to-know-when-livestream-is-playing",children:"How to know whether a live stream is playing?"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-224/theoplayer/v6/getting-started/sdks/chromecast/getting-started",children:"Chromecast SDK Setup"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var o=t(67294);let i={},s=o.createContext(i);function a(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);