"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["41857"],{90928:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"external/flutter-theoplayer-sdk/doc/theolive","title":"THEOlive support","description":"High-quality real-time video streaming at scale for providers of sports betting, iGaming and interactive entertainment","source":"@site/theoplayer_versioned_docs/version-v8/external/flutter-theoplayer-sdk/doc/theolive.md","sourceDirName":"external/flutter-theoplayer-sdk/doc","slug":"/flutter/guides/theolive","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/flutter/guides/theolive","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/flutter-theoplayer-sdk/blob/-/doc/theolive.md","tags":[],"version":"v8","frontMatter":{"slug":"/flutter/guides/theolive"},"sidebar":"flutter","previous":{"title":"Picture-in-Picture support","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/flutter/guides/picture-in-picture"},"next":{"title":"The THEOplayer component","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/flutter/guides/theoplayer-component"}}'),l=t("85893"),r=t("50065");let a={slug:"/flutter/guides/theolive"},s="THEOlive support",o={},d=[{value:"Limitations",id:"limitations",level:2},{value:"THEOlive playback",id:"theolive-playback",level:2},{value:"Setting a THEOlive source",id:"setting-a-theolive-source",level:3},{value:"Additional configuration options on <code>THEOPlayerConfig</code>",id:"additional-configuration-options-on-theoplayerconfig",level:4},{value:"Listening for THEOlive-specific events",id:"listening-for-theolive-specific-events",level:3},{value:"Migration from THEOlive Flutter SDK to THEOplayer Flutter SDK",id:"migration-from-theolive-flutter-sdk-to-theoplayer-flutter-sdk",level:2},{value:"setStateListener",id:"setstatelistener",level:3},{value:"loadChannel",id:"loadchannel",level:3},{value:"addEventListener",id:"addeventlistener",level:3},{value:"Playback-related actions",id:"playback-related-actions",level:3},{value:"Channel events",id:"channel-events",level:3},{value:"Anything missing?",id:"anything-missing",level:3}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"theolive-support",children:"THEOlive support"})}),"\n",(0,l.jsx)(n.p,{children:"High-quality real-time video streaming at scale for providers of sports betting, iGaming and interactive entertainment"}),"\n",(0,l.jsxs)(n.p,{children:["For more info, visit ",(0,l.jsx)(n.a,{href:"https://www.theoplayer.com/product/theolive",children:"THEOlive website"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Only Flutter Web is supported."}),"\n",(0,l.jsxs)(n.li,{children:["Android and iOS will follow later. (You can check out our dedicated ",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/flutter-theolive-sdk",children:"THEOlive Flutter SDK"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"theolive-playback",children:"THEOlive playback"}),"\n",(0,l.jsx)(n.p,{children:"THEOlive playback is becoming crucial part of THEOplayer's playback engine instead of being available as a separate SDK."}),"\n",(0,l.jsxs)(n.p,{children:["The WEB support is already added, Android and iOS support as part of the THEOplayer SDK will come later. (Right now you can use the ",(0,l.jsx)(n.a,{href:"https://github.com/THEOplayer/flutter-theolive-sdk",children:"dedicated THEOlive Flutter SDK"})," for Android and iOS support)"]}),"\n",(0,l.jsx)(n.h3,{id:"setting-a-theolive-source",children:"Setting a THEOlive source"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'player.source = SourceDescription(sources: [\n    TheoLiveSource(src: "2vqqekesftg9zuvxu9tdme6kl"),\n]);\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Instead of using a remote HTTPS url, you can just specify your ",(0,l.jsx)(n.code,{children:"channelID"})," from the ",(0,l.jsx)(n.a,{href:"https://console.theo.live/",children:"THEOlive Console"})," and you can start the playback."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"NOTE:"})," your THEOplayer license has to contain the ",(0,l.jsx)(n.code,{children:"HESP"})," feature to make it work. (HESP is the underlying technology of THEOlive)."]}),"\n",(0,l.jsx)(n.p,{children:"Once the playback starts, you can listen to playback-specify events on THEOplayer."}),"\n",(0,l.jsxs)(n.h4,{id:"additional-configuration-options-on-theoplayerconfig",children:["Additional configuration options on ",(0,l.jsx)(n.code,{children:"THEOPlayerConfig"})]}),"\n",(0,l.jsxs)(n.p,{children:["By setting a ",(0,l.jsx)(n.code,{children:"THEOliveConfiguration"})," object on ",(0,l.jsx)(n.code,{children:"THEOplayerConfig"})," you are able to specify extra configuration for THEOlive (e.g. a custom sessionId to follow the requests on the backend)"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'    player = THEOplayer(\n        theoPlayerConfig: THEOplayerConfig(\n          license: PLAYER_LICENSE,\n          theolive: TheoLiveConfiguration(externalSessionId: "mySessionID"),\n        ),\n        onCreate: () {\n          print("player is created, ready to use");\n    \n        });\n'})}),"\n",(0,l.jsx)(n.h3,{id:"listening-for-theolive-specific-events",children:"Listening for THEOlive-specific events"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'    player.theoLive?.addEventListener(THEOliveApiEventTypes.PUBLICATIONLOADSTART, (e) {\n        print("PUBLICATIONLOADSTART");\n    });\n    player.theoLive?.addEventListener(THEOliveApiEventTypes.PUBLICATIONOFFLINE, (e) {\n        print("PUBLICATIONOFFLINE");\n    });\n    player.theoLive?.addEventListener(THEOliveApiEventTypes.PUBLICATIONLOADED, (e) {\n        print("PUBLICATIONLOADED");\n    });\n    player.theoLive?.addEventListener(THEOliveApiEventTypes.INTENTTOFALLBACK, (e) {\n        print("INTENTTOFALLBACK");\n    });\n    player.theoLive?.addEventListener(THEOliveApiEventTypes.ENTERBADNETWORKMODE, (e) {\n        print("ENTERBADNETWORKMODE");\n    });\n    player.theoLive?.addEventListener(THEOliveApiEventTypes.EXITBADNETWORKMODE, (e) {\n        print("EXITBADNETWORKMODE");\n    });\n'})}),"\n",(0,l.jsx)(n.h2,{id:"migration-from-theolive-flutter-sdk-to-theoplayer-flutter-sdk",children:"Migration from THEOlive Flutter SDK to THEOplayer Flutter SDK"}),"\n",(0,l.jsx)(n.h3,{id:"setstatelistener",children:"setStateListener"}),"\n",(0,l.jsx)(n.p,{children:"From"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"theoLive.setStateListener(...)\n"})}),"\n",(0,l.jsx)(n.p,{children:"to"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"player.theoLive.setStateListener(...)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"loadchannel",children:"loadChannel"}),"\n",(0,l.jsx)(n.p,{children:"From"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'theoLive.loadChannel("2vqqekesftg9zuvxu9tdme6kl")\n'})}),"\n",(0,l.jsx)(n.p,{children:"to"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'player.source = SourceDescription(sources: [\n    TheoLiveSource(src: "2vqqekesftg9zuvxu9tdme6kl"),\n]);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"addeventlistener",children:"addEventListener"}),"\n",(0,l.jsx)(n.p,{children:"From"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"theoLive.addEventListener(this)\n"})}),"\n",(0,l.jsx)(n.p,{children:"to THEOlive-related events"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'    player.theoLive?.addEventListener(THEOliveApiEventTypes.PUBLICATIONLOADSTART, (e) {\n        print("PUBLICATIONLOADSTART event");\n    });\n    player.theoLive?.addEventListener(THEOliveApiEventTypes.PUBLICATIONOFFLINE, (e) {\n        print("PUBLICATIONOFFLINE event");\n    });\n    player.theoLive?.addEventListener(THEOliveApiEventTypes.PUBLICATIONLOADED, (e) {\n        print("PUBLICATIONLOADED event");\n    });\n    player.theoLive?.addEventListener(THEOliveApiEventTypes.INTENTTOFALLBACK, (e) {\n        print("INTENTTOFALLBACK event");\n    });\n    player.theoLive?.addEventListener(THEOliveApiEventTypes.ENTERBADNETWORKMODE, (e) {\n        print("ENTERBADNETWORKMODE event");\n    });\n    player.theoLive?.addEventListener(THEOliveApiEventTypes.EXITBADNETWORKMODE, (e) {\n        print("EXITBADNETWORKMODE event");\n    });\n'})}),"\n",(0,l.jsx)(n.p,{children:"and to playback-related events"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'    player.addEventListener(PlayerEventTypes.PLAY, (e) {\n        print("PLAY event");\n    });\n    player.addEventListener(PlayerEventTypes.PLAYING, (e) {\n        print("PLAYING event");\n    });\n    player.addEventListener(PlayerEventTypes.PAUSE, (e) {\n        print("PAUSE event");\n    }););\n'})}),"\n",(0,l.jsx)(n.h3,{id:"playback-related-actions",children:"Playback-related actions"}),"\n",(0,l.jsx)(n.p,{children:"From"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"theoLive.play()\n"})}),"\n",(0,l.jsx)(n.p,{children:"to"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"player.play()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"channel-events",children:"Channel events"}),"\n",(0,l.jsx)(n.p,{children:"The channel related events:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"ChannelLoadStart,\nChannelLoaded,\nChannelOffline\n"})}),"\n",(0,l.jsxs)(n.p,{children:["are renamed to ",(0,l.jsx)(n.code,{children:"Publication"})," events"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"PublicationLoadStart,\nPublicationLoaded,\nPublicationOffline\n"})}),"\n",(0,l.jsx)(n.h3,{id:"anything-missing",children:"Anything missing?"}),"\n",(0,l.jsx)(n.p,{children:"Please reach out to us!"})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var i=t(67294);let l={},r=i.createContext(l);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);