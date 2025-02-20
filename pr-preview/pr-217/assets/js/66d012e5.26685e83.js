"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["61796"],{27807:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>r});var a=JSON.parse('{"id":"external/android-connector/connectors/mediasession/README","title":"Getting started","description":"Set up your connector in just a few minutes!","source":"@site/theoplayer/external/android-connector/connectors/mediasession/README.md","sourceDirName":"external/android-connector/connectors/mediasession","slug":"/connectors/android/mediasession/getting-started","permalink":"/documentation/pr-preview/pr-217/theoplayer/connectors/android/mediasession/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/android-connector/blob/-/connectors/mediasession/README.md","tags":[],"version":"current","frontMatter":{"slug":"/connectors/android/mediasession/getting-started","title":"Getting started","description":"Set up your connector in just a few minutes!","sidebar_custom_props":{"icon":"\uD83D\uDE80 "}},"sidebar":"android","previous":{"title":"Media Session","permalink":"/documentation/pr-preview/pr-217/theoplayer/connectors/android/mediasession"},"next":{"title":"Yospace","permalink":"/documentation/pr-preview/pr-217/theoplayer/connectors/android/yospace"}}'),s=i("85893"),t=i("50065");let o={slug:"/connectors/android/mediasession/getting-started",title:"Getting started",description:"Set up your connector in just a few minutes!",sidebar_custom_props:{icon:"\uD83D\uDE80 "}},r="THEOplayer Media Session Connector",d={},c=[{value:"Android Media Session",id:"android-media-session",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Creating the media session connector",id:"creating-the-media-session-connector",level:3},{value:"Passing media metadata",id:"passing-media-metadata",level:3},{value:"Lifecyle callbacks",id:"lifecyle-callbacks",level:3},{value:"Connector interfaces",id:"connector-interfaces",level:3},{value:"Dispatching media commands",id:"dispatching-media-commands",level:3},{value:"Media player state",id:"media-player-state",level:3},{value:"Resources",id:"resources",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"theoplayer-media-session-connector",children:"THEOplayer Media Session Connector"})}),"\n",(0,s.jsxs)(n.p,{children:["The media session connector provides a universal way for Android to interact with THEOplayer.\nIntegrating with the connector allows an app to advertise media playback and to\nreceive playback commands from external sources, such as from a TV remote or through\nGoogle Assistant commands using voice commands such as ",(0,s.jsx)(n.em,{children:"'What is currently playing?'"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"android-media-session",children:"Android Media Session"}),"\n",(0,s.jsxs)(n.p,{children:["As described on the Android documentation pages ",(0,s.jsx)(n.a,{href:"https://developer.android.com/guide/topics/media-apps/working-with-a-media-session",children:"Using a Media Session"}),":"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'Media sessions provide a universal way of interacting with an audio or video player.\nBy informing Android that media is playing in an app,\nplayback controls can be delegated to the app.\nIntegrating with the media session allows an app to advertise media playback externally and to\nreceive playback commands from external sources. These sources can be physical buttons\n(such as the play button on a headset or TV remote control) or indirect commands\n(such as instructing "pause" to Google Assistant). The media session then delegates these commands to\nthe app that applies them to the media player for which it is transparent where the commands originated.'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(n.p,{children:["This section details how to integrate the connector in a video app, as demonstrated on Android's\n",(0,s.jsx)(n.a,{href:"https://developer.android.com/guide/topics/media-apps/video-app/building-a-video-app",children:"Building a video app"}),".\nThe app will advertise its player state and media metadata to the media session through the connector,\nand responds to requests from the media session."]}),"\n",(0,s.jsxs)(n.p,{children:["In this example the media session is active as long as the app's activity is active and running in the\nforeground. The full example code is available in our ",(0,s.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk",children:"Sample repository"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For a demonstration on how to build a more extensive app that does background audio playback,\nwe refer to the Android documentation on ",(0,s.jsx)(n.a,{href:"https://developer.android.com/guide/topics/media-apps/audio-app/building-an-audio-app",children:"Building an audio app"}),", as well as our ",(0,s.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk",children:"Sample repository"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"creating-the-media-session-connector",children:"Creating the media session connector"}),"\n",(0,s.jsxs)(n.p,{children:["After ",(0,s.jsx)(n.a,{href:"https://developer.android.com/guide/topics/media-apps/working-with-a-media-session#init-session",children:"Creating and initializing a media session"}),", pass the ",(0,s.jsx)(n.code,{children:"mediaSession"})," and THEOplayer instances to the connector."]}),"\n",(0,s.jsxs)(n.p,{children:["Optionally set the ",(0,s.jsx)(n.code,{children:"debug"})," flag to receive log statements from the connector."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"private lateinit var mediaSession: MediaSessionCompat\nprivate lateinit var mediaSessionConnector: MediaSessionConnector\n\npublic override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n\n    // Create and initialize the media session\n    mediaSession = MediaSessionCompat(this, TAG).apply {\n        // Do not let MediaButtons restart the player when the app is not visible\n        setMediaButtonReceiver(null)\n    }\n\n    // Create a MediaSessionConnector and attach the THEOplayer instance.\n    mediaSessionConnector = MediaSessionConnector(mediaSession)\n    mediaSessionConnector.debug = true\n    \n    // Pass the player instance\n    mediaSessionConnector.player = viewBinding.theoPlayerView.player\n    \n    // Set mediaSession to active\n    mediaSessionConnector.setActive(true)\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"passing-media-metadata",children:"Passing media metadata"}),"\n",(0,s.jsxs)(n.p,{children:["The connector advertises the currently playing asset to the media session.\nThe ",(0,s.jsx)(n.code,{children:"MetadataDescription"})," object that is passed to THEOplayer's source description provides\nadditional information on the asset, such as title, author and an icon."]}),"\n",(0,s.jsxs)(n.p,{children:["If your app uses a ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/kotlin/android/support/v4/media/session/MediaControllerCompat",children:"MediaController"})," to interact with the media session, the ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/kotlin/android/support/v4/media/session/MediaControllerCompat.Callback#onMetadataChanged(android.support.v4.media.MediaMetadataCompat)",children:"onMetadataChanged"}),"\ncallback can be used to display the metadata on screen."]}),"\n",(0,s.jsxs)(n.p,{children:["A full list of supported metadata properties is available in ",(0,s.jsx)(n.a,{href:"https://github.com/THEOplayer/android-connector/blob/-/connectors/mediasession/src/main/java/com/theoplayer/android/connector/mediasession/MediaMetadataProvider.kt",children:"MediaMetadataProvider"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'val metadataFields = hashMapOf<String, Any>(\n    "title" to "Elephants Dream",\n    "displaySubtitle" to "by the Orange Open Movie Project",\n    "mediaId" to "stream01",\n    "mediaUri" to "https://theoplayer.com",\n    "album" to "THEOplayer test streams",\n    "author" to "THEOplayer"\n)\nplayer.source = SourceDescription.Builder(\n    TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlistCorrectionENG.m3u8")\n        .type(SourceType.HLSX)\n        .build()\n    )\n    .metadata(MetadataDescription(metadataFields))\n    .build()\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(91193).Z+"",width:"752",height:"356"})}),"\n",(0,s.jsx)(n.h3,{id:"lifecyle-callbacks",children:"Lifecyle callbacks"}),"\n",(0,s.jsx)(n.p,{children:"The THEOplayer instance needs to know about the Activity's lifecycle methods.\nIn accordance, the connector will need to update its state as well."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"override fun onPause() {\n    viewBinding.theoPlayerView.onPause()\n    mediaSessionConnector.setActive(false)\n    super.onPause()\n}\n\noverride fun onResume() {\n    viewBinding.theoPlayerView.onResume()\n    mediaSessionConnector.setActive(true)\n    super.onResume()\n}\n\noverride fun onDestroy() {\n    mediaSessionConnector.destroy()\n    viewBinding.theoPlayerView.onDestroy()\n    super.onDestroy()\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"connector-interfaces",children:"Connector interfaces"}),"\n",(0,s.jsx)(n.p,{children:"Besides basic playback requests, the media session can also send requests related to\nqueued media items, setting ratings and custom actions. These are forwarded to optionally implemented\ninterfaces of the connector:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"QueueNavigator"})," allows handling queue navigation actions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"QueueEditor"})," allows handling queue editing actions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PlaybackPreparer"})," allows handling media prepare actions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"RatingCallback"})," allows handling rating actions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CustomActionProvider"})," allows handling custom actions."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We refer to our ",(0,s.jsx)(n.a,{href:"https://github.com/THEOplayer/samples-android-sdk",children:"Sample repository"}),"\nfor an example on how these could be implemented."]}),"\n",(0,s.jsx)(n.h3,{id:"dispatching-media-commands",children:"Dispatching media commands"}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.code,{children:"adb"})," (Android Debug Bridge), media commands can be triggered command-line as well:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ adb shell media dispatch KEY\n"})}),"\n",(0,s.jsxs)(n.p,{children:["with ",(0,s.jsx)(n.code,{children:"KEY"})," being any command\n",(0,s.jsx)(n.code,{children:"play, pause, play-pause, mute, headsethook, stop, next, previous, rewind, record, fast-forward."})]}),"\n",(0,s.jsx)(n.h3,{id:"media-player-state",children:"Media player state"}),"\n",(0,s.jsxs)(n.p,{children:["The player's current state can be queried using ",(0,s.jsx)(n.code,{children:"adb"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ adb shell dumpsys media_session\n\nMEDIA SESSION SERVICE (dumpsys media_session)\n\n5 sessions listeners.\nGlobal priority session is null\nUser Records:\nRecord for full_user=0\n  Volume key long-press listener: null\n  Volume key long-press listener package: \n  Media key listener: null\n  Media key listener package: \n  Callback: android.media.session.ICallback$Stub$Proxy@ff4b775\n  Last MediaButtonReceiver: null\n  Restored MediaButtonReceiver: null\n  Restored MediaButtonReceiverComponentType: 0\n  Media button session is com.theoplayer.android.mediasession.demo/PlayerActivity (userId=0)\n  Sessions Stack - have 2 sessions:\n    PlayerActivity com.theoplayer.android.mediasession.demo/PlayerActivity (userId=0)\n      ownerPid=7705, ownerUid=10060, userId=0\n      package=com.theoplayer.android.mediasession.demo\n      launchIntent=null\n      mediaButtonReceiver=null\n      active=true\n      flags=3\n      rating type=0\n      controllers: 15\n      state=PlaybackState {state=3, position=45840, buffered position=66664, speed=1.0, updated=333568, actions=4199295, custom actions=[], active item id=1, error=null}\n      audioAttrs=AudioAttributes: usage=USAGE_MEDIA content=CONTENT_TYPE_UNKNOWN flags=0x800 tags= bundle=null\n      volumeType=1, controlType=2, max=0, current=0\n      metadata: size=5, description=Elephants Dream, null, Elephants Dream\n      queueTitle=null, size=0\n"})}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.android.com/guide/topics/media-apps/working-with-a-media-session",children:"Using a media session"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.android.com/guide/topics/media-apps/audio-app/building-an-audio-app",children:"Building an audio app"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.android.com/guide/topics/media-apps/video-app/building-a-video-app",children:"Building a video app"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},91193:function(e,n,i){i.d(n,{Z:function(){return a}});let a=i.p+"assets/images/sample-c23a4a59c15abdd122d9b4cd6ecdd966.png"},50065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return o}});var a=i(67294);let s={},t=a.createContext(s);function o(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);