"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["74278"],{824:function(e,t,a){a.r(t),a.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"external/react-native-theoplayer/doc/cast","title":"Casting with Chromecast and Airplay","description":"Overview","source":"@site/theoplayer_versioned_docs/version-v4/external/react-native-theoplayer/doc/cast.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/cast","permalink":"/documentation/pr-preview/pr-193/theoplayer/v4/getting-started/frameworks/react-native/cast","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/cast.md","tags":[],"version":"v4","frontMatter":{"slug":"/getting-started/frameworks/react-native/cast"},"sidebar":"react-native","previous":{"title":"Background Playback and Notifications","permalink":"/documentation/pr-preview/pr-193/theoplayer/v4/getting-started/frameworks/react-native/background"},"next":{"title":"React Native THEOplayer 1.x + custom 4.x THEOplayer portal build for iOS","permalink":"/documentation/pr-preview/pr-193/theoplayer/v4/getting-started/frameworks/react-native/custom-ios-framework"}}'),s=a("85893"),i=a("50065");let r={slug:"/getting-started/frameworks/react-native/cast"},o="Casting with Chromecast and Airplay",c={},l=[{value:"Overview",id:"overview",level:2},{value:"Chromecast",id:"chromecast",level:2},{value:"Setup",id:"setup",level:3},{value:"Add feature flag to config",id:"add-feature-flag-to-config",level:4},{value:"iOS Configuration",id:"ios-configuration",level:4},{value:"Combining with react-native-google-cast",id:"combining-with-react-native-google-cast",level:4},{value:"THEOplayerView configuration",id:"theoplayerview-configuration",level:3},{value:"Cast strategy",id:"cast-strategy",level:3},{value:"Providing metadata",id:"providing-metadata",level:3},{value:"Airplay",id:"airplay",level:2},{value:"Cast API",id:"cast-api",level:2},{value:"Subscribing to Cast Events",id:"subscribing-to-cast-events",level:2}];function d(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"casting-with-chromecast-and-airplay",children:"Casting with Chromecast and Airplay"})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["The basics of both Chromecast and Airplay are well-described in\nTHEOplayer's ",(0,s.jsx)(t.a,{href:"https://www.theoplayer.com/docs/theoplayer/how-to-guides/cast/chromecast/introduction/",children:"Knowledge Base"}),".\nThe ",(0,s.jsx)(t.code,{children:"react-native-theoplayer"})," package has support for both."]}),"\n",(0,s.jsx)(t.p,{children:"This page first outlines the setup\nneeded for Chromecast and Airplay, and then describes the player's cast API and events subscription, which is common for both."}),"\n",(0,s.jsx)(t.h2,{id:"chromecast",children:"Chromecast"}),"\n",(0,s.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(t.p,{children:"To enable Chromecast, react-native-theoplayer provides a cast module on the player (player.cast) that allows you to start/stop/join/leave chromecast sessions. The THEOplayer SDK will take care of the interactions with the cast receiver (communicating source updates, seeking, play/pause, ...) and route all cast events through its API."}),"\n",(0,s.jsxs)(t.p,{children:["We can also recommend the ",(0,s.jsx)(t.a,{href:"https://github.com/react-native-google-cast/react-native-google-cast",children:(0,s.jsx)(t.code,{children:"react-native-google-cast"})}),"\npackage, which comes with native support for both iOS and Android. It is fully-featured and provides the possibility to\nmanage devices and cast sessions, send new source descriptions and listen for cast events. It also includes a ",(0,s.jsx)(t.code,{children:"<CastButton>"})," component that can be added to the app's UI, as demonstrated in\nthe ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v4/getting-started/frameworks/react-native/example-app",children:"example app"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"<CastButton\n  style={styles.castButton}\n  tintColor={chromecastConnected ? '#ffc50f' : 'white'}\n/>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This button represents a native media route button that shows the connection state and opens a device dialog when tapped. Using ",(0,s.jsx)(t.code,{children:"react-native-google-cast"}),"'s functionality does require some extra steps, such as communicating source updates, managing player status on both sender and receiver and handling the cast events. Our react-native-theoplayer integration already takes care of these tasks. The ",(0,s.jsx)(t.a,{href:"https://react-native-google-cast.github.io/docs/getting-started/installation",children:"installation instructions"}),"\nfor ",(0,s.jsx)(t.code,{children:"react-native-google-cast"})," cover the steps to enable support for Chromecast in your app through that component."]}),"\n",(0,s.jsx)(t.p,{children:"For the rest of this document we assume that THEOplayer handles this logic. Enabling the player with Chromecast support requires a different approach on each platform."}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Android"}),(0,s.jsx)(t.p,{children:"The Android SDK is modular-based, so enabling Chromecast is limited to:"}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Including the cast extension in gradle by setting this flag in your ",(0,s.jsx)(t.code,{children:"gradle.properties"}),":"]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Enable THEOplayer Extensions (default: disabled)\nTHEOplayer_extensionCast = true\n"})}),(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Adding a native ",(0,s.jsx)(t.code,{children:"CastOptionsProvider"})," class and referring to it from the app's Android manifest:"]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<meta-data\n  android:name="com.google.android.gms.cast.framework.OPTIONS_PROVIDER_CLASS_NAME"\n  android:value="com.reactnativetheoplayer.cast.CastOptionsProvider" />\n'})}),(0,s.jsx)(t.p,{children:"Check the example app for details on this setup."}),(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Initializing the ",(0,s.jsx)(t.code,{children:"CastContext"})," in your app's MainActivity:"]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"@Override\npublic void onCreate(Bundle savedInstanceState) {\n    CastContext castContext = CastContext.getSharedInstance(this);\n}\n"})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"iOS"}),(0,s.jsx)(t.h4,{id:"add-feature-flag-to-config",children:"Add feature flag to config"}),(0,s.jsxs)(t.p,{children:['To enable Chromecast on react-native-theoplayer 2.x versions and higher, you can add the "CHROMECAST" ',(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v4/getting-started/frameworks/react-native/creating-minimal-app#getting-started-on-ios-and-tvos",children:"feature flag"})," to react-native-theoplayer.json (or theoplayer-config.json)"]}),(0,s.jsx)(t.h4,{id:"ios-configuration",children:"iOS Configuration"}),(0,s.jsx)(t.p,{children:"Specify NSBonjourServices in your Info.plist to allow local network discovery to succeed on iOS 14. You will need to add\nboth _googlecast._tcp and _[your-app-id]._googlecast._tcp as services for device discovery to work properly."}),(0,s.jsx)(t.p,{children:'Update your applications info.plist with the following example NSBonjourServices definition, replacing "ABCD1234" with\nyour appID.'}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"\n<key>NSBonjourServices</key>\n<array>\n<string>_googlecast._tcp</string>\n<string>_ABCD1234._googlecast._tcp</string>\n</array>\n"})}),(0,s.jsx)(t.p,{children:"We also recommend that you customize the message shown in the Local Network prompt by adding an app-specific permission\nstring in your app's Info.plist file for the NSLocalNetworkUsageDescription such as to describe Cast discovery and other\ndiscovery services."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"\n<key>NSLocalNetworkUsageDescription</key>\n<string>${PRODUCT_NAME} uses the local network to discover Cast-enabled devices on your WiFi\nnetwork.\n</string>\n"})}),(0,s.jsx)(t.h4,{id:"combining-with-react-native-google-cast",children:"Combining with react-native-google-cast"}),(0,s.jsxs)(t.p,{children:["When using react-native-google-cast to render the CastButton, their documentation suggest to setup the CastContext as\nsoon as possible. We noticed that waiting to prepare this context to a later point in time (i.e. till the AppId is\nbridged from RN) fails to display that CastButton. To prevent this follow\nthe ",(0,s.jsx)(t.a,{href:"https://react-native-google-cast.github.io/docs/getting-started/setup#ios",children:"instructions"})," (or check our example\napplication) to setup the GCKCastContext in the AppDelegate."]}),(0,s.jsx)(t.p,{children:"The following options on the GCKCastOptions can be set as desired:"}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"options.startDiscoveryAfterFirstTapOnCastButton = false;  (set up how/when the castbutton is shown)"}),"\n",(0,s.jsx)(t.li,{children:"options.suspendSessionsWhenBackgrounded = false;			 (set up the connection response be when backgrounding the app)"}),"\n"]}),(0,s.jsxs)(t.p,{children:["In addition, react-native-google-cast currently does not include a full featured (guest mode combined with Apple M1 support) setup of the Google Cast SDK. Our THEOplayerCastIntegration however does, but combining both results in a clash of dependencies (both delivering a GoogleCast.xcframework). To overcome this double dependency we suggest to use a ",(0,s.jsx)(t.a,{href:"https://github.com/Danesz/react-native-google-cast/tree/feature/guestmode_apple_silicon",children:"fork of react-native-google-cast"})," that depends on the same GoogleCast.xcframework. To achieve this:"]}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Add the following to your applications podFile:"}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"pod 'react-native-google-cast', :git => 'https://github.com/Danesz/react-native-google-cast.git', branch: 'feature/guestmode_apple_silicon'\n"})}),(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Prevent the autolinking of the original by updating your react-native.config.js with:"}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:"'react-native-google-cast': {\n	platforms: {\n		ios: null,\n	},\n},\n"})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Web"}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"react-native-google-cast"})," package has no support for Web yet. If the THEOplayer Web SDK's default UI is used\nhowever, the cast button will be included here and there is no need to install ",(0,s.jsx)(t.code,{children:"react-native-google-cast"}),"."]}),(0,s.jsx)(t.p,{children:"The web page hosting the player just needs to load the Google cast sender module:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'\n<script src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"><\/script>\n'})})]}),"\n",(0,s.jsx)(t.h3,{id:"theoplayerview-configuration",children:"THEOplayerView configuration"}),"\n",(0,s.jsxs)(t.p,{children:["In the configuration of a ",(0,s.jsx)(t.code,{children:"THEOplayerView"})," component you can set the\nreceiver's appID. This only makes sense on a Web platform, as for mobile platforms this value\nis already set natively through ",(0,s.jsx)(t.code,{children:"CastOptionsProvider"})," on Android and ",(0,s.jsx)(t.code,{children:"AppDelegate"})," on iOS:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const playerConfig: PlayerConfiguration = {\n  cast: {\n    chromecast: {\n      appID: '<receiverAppID>'\n    },\n    strategy: 'auto'\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v4/getting-started/frameworks/react-native/example-app",children:"example app"})," sets appID to ",(0,s.jsx)(t.code,{children:"'CC1AD845'"}),", which refers to Google's default V3 receiver.\nThis receiver implementation will know how to play the manifest/playlist URL sent by THEOplayer, but it does not\nhave knowledge on how to handle any additional information from the source description provided through the\n",(0,s.jsx)(t.code,{children:"MediaInfo.customData"})," ",(0,s.jsx)(t.a,{href:"https://developers.google.com/android/reference/com/google/android/gms/cast/MediaInfo.Builder#public-mediainfo.builder-setcustomdata-jsonobject-customdata",children:"field"}),".\nAs a consequence, to enable playback of for example DRM-protected streams or ads, a custom receiver needs to\nbe created that also handles these parts of the source description."]}),"\n",(0,s.jsxs)(t.p,{children:["We refer to our ",(0,s.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-google-cast-v3-receiver/",children:"sample-google-cast-v3-receiver"}),"\nrepository for an example on how to interpret a THEOplayer source description and handle a custom DRM flow."]}),"\n",(0,s.jsx)(t.h3,{id:"cast-strategy",children:"Cast strategy"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"strategy"})," property indicates the ",(0,s.jsx)(t.em,{children:"join strategy"})," that will be used when starting/joining sessions:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"auto"}),": The player will automatically join a cast session if one exists when play is called."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"manual"})," (",(0,s.jsx)(t.strong,{children:"default"}),"): The player needs to start or join the session manually using its cast API. See next section\nfor details."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"disabled"}),": The player is not affected by cast sessions and is not castable."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In case the join strategy ",(0,s.jsx)(t.code,{children:"manual"})," is chosen and a cast session is started by ",(0,s.jsx)(t.code,{children:"react-native-google-cast"}),", it is\nnecessary\nto explicitly let the player either join or take over the current session.\nThis can be done by listening to the cast state and using the player's cast API to either start or join:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'import CastContext, {CastState} from "react-native-google-cast";\n\nuseEffect(() => {\n  const subscription = CastContext.onCastStateChanged((castState) => {\n    if (castState === CastState.CONNECTED) {\n      // Let the player either start or join the session.\n      player.cast.chromecast?.start();\n    }\n  })\n  return () => subscription.remove()\n}, [])\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v4/getting-started/frameworks/react-native/example-app",children:"example app"})," uses strategy ",(0,s.jsx)(t.code,{children:"auto"})," so the player will automatically\nsend its source description when a session is created."]}),"\n",(0,s.jsx)(t.h3,{id:"providing-metadata",children:"Providing metadata"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"metadata"})," object, as part of the source configuration, is used to send additional information\nto the receiver. Common fields include ",(0,s.jsx)(t.code,{children:"poster"}),", ",(0,s.jsx)(t.code,{children:"title"}),", ",(0,s.jsx)(t.code,{children:"subtitle"}),", ",(0,s.jsx)(t.code,{children:"album"})," and ",(0,s.jsx)(t.code,{children:"artist"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "sources": [\n    {\n      "src": "https://cdn.theoplayer.com/video/dash/bbb_30fps/bbb_with_multiple_tiled_thumbnails.mpd",\n      "type": "application/dash+xml"\n    }\n  ],\n  "poster": "https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg",\n  "metadata": {\n    "title": "Big Buck Bunny",\n    "subtitle": "a Peach Open Movie Project",\n    "album": "React-Native THEOplayer demos",\n    "artist": "THEOplayer"\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:(0,s.jsx)(t.img,{alt:"Chromecast",src:a(24630).Z+"",width:"1280",height:"720"})})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"Casting a stream with metadata."})})})]}),"\n",(0,s.jsx)(t.h2,{id:"airplay",children:"Airplay"}),"\n",(0,s.jsx)(t.p,{children:"For iOS and Web Safari, also Airplay is supported. Similar to chromecast, you can listen to or check the airplay cast\nstate and use the player's Airplay API to either start or join an Airplay session. When implementing a simple airplay\nbutton you can toggle Airplay using:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"player.cast.airplay?.state().then((airplayCastState) => {\n  const inConnection = airplayCastState === 'connected' || airplayCastState === 'connecting'\n  if (inConnection) {\n    player.cast.airplay?.stop()\n  } else {\n    player.cast.airplay?.start()\n  }\n})\n"})}),"\n",(0,s.jsx)(t.h2,{id:"cast-api",children:"Cast API"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"THEOplayerView"})," provides the ",(0,s.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/player/THEOplayer.ts",children:"THEOplayer API"})," using the ",(0,s.jsx)(t.code,{children:"onPlayerReady"})," callback,\nwhere you can access the ",(0,s.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/event/CastEvent.ts",children:"CastAPI"})," to control or start cast sessions, either Chromecast or Airplay."]}),"\n",(0,s.jsx)(t.h2,{id:"subscribing-to-cast-events",children:"Subscribing to Cast Events"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"THEOplayerView"})," provides the ",(0,s.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/player/THEOplayer.ts",children:"THEOplayer API"})," using the ",(0,s.jsx)(t.code,{children:"onPlayerReady"})," callback,\nwhere you can subscribe to cast events:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"const onCastEvent = (event: CastEvent) => {\n    console.log(event);\n}\n\nconst onReady = (player: THEOplayer) => {\n    player.addEventListener(PlayerEventType.CAST_EVENT, onCastEvent);\n}\n\n<THEOplayerView onPlayerReady={onReady}/>\n"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},24630:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/chromecast-7c3da07d98fad160f3f582a8b7459607.png"},50065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return r}});var n=a(67294);let s={},i=n.createContext(s);function r(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);