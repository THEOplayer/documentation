"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["94111"],{75539:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"how-to-guides/player/how-to-measure-time-to-first-frame","title":"How to measure time-to-first-frame?","description":"The question above is related to the following questions:","source":"@site/theoplayer_versioned_docs/version-v8/how-to-guides/09-player/02-how-to-measure-time-to-first-frame.md","sourceDirName":"how-to-guides/09-player","slug":"/how-to-guides/player/how-to-measure-time-to-first-frame","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/how-to-guides/player/how-to-measure-time-to-first-frame","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/how-to-guides/09-player/02-how-to-measure-time-to-first-frame.md","tags":[],"version":"v8","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"How do you know when a stream or an advertisement is playing?","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/how-to-guides/player/how-do-you-know-when-a-stream-or-ad-is-playing"},"next":{"title":"How can we track the first play(ing) event?","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/how-to-guides/player/how-can-we-track-the-first-playing-event"}}'),a=t("85893"),i=t("50065");let l={},s="How to measure time-to-first-frame?",o={},d=[{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Roku SDK",id:"roku-sdk",level:5}];function p(e){let n={a:"a",code:"code",h1:"h1",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"how-to-measure-time-to-first-frame",children:"How to measure time-to-first-frame?"})}),"\n",(0,a.jsx)(n.p,{children:"The question above is related to the following questions:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"How do I measure my start-up time?"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To measure the time-to-first-frame, you need to measure the time difference between the ",(0,a.jsx)(n.code,{children:"play"})," event and the ",(0,a.jsx)(n.code,{children:"playing"})," event."]}),"\n",(0,a.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var playEventRegisteredAt;\nfunction playingEventHandler(event) {\n  player.removeEventListener('playing', playingEventHandler);\n  var timeToFirstFrame = Date.now() - playEventRegisteredAt;\n  console.log('Time-to-first-frame:', timeToFirstFrame);\n}\nfunction playEventHandler(event) {\n  player.removeEventListener('play', playEventHandler);\n  playEventRegisteredAt = Date.now();\n}\nplayer.addEventListener('playing', playingEventHandler);\nplayer.addEventListener('play', playEventHandler);\n"})}),"\n",(0,a.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'long playEventRegisteredAt = 0; // global variable\n...\nEventListener<PlayingEvent> playingEventHandler = new EventListener<PlayingEvent>() {\n    @Override\n    public void handleEvent(PlayingEvent playingEvent) {\n        tpv.getPlayer().removeEventListener(PlayerEventTypes.PLAYING, this);\n        long timeToFirstFrame = System.currentTimeMillis() - playEventRegisteredAt;\n        System.out.println("Time-to-first-frame: " + timeToFirstFrame);\n    }\n};\nEventListener<PlayEvent> playEventHandler = new EventListener<PlayEvent>() {\n    @Override\n    public void handleEvent(PlayEvent playgEvent) {\n        tpv.getPlayer().removeEventListener(PlayerEventTypes.PLAY, this);\n        playEventRegisteredAt = System.currentTimeMillis();\n    }\n};\ntpv.getPlayer().addEventListener(PlayerEventTypes.PLAYING, playingEventHandler);\ntpv.getPlayer().addEventListener(PlayerEventTypes.PLAY, playEventHandler);\n'})}),"\n",(0,a.jsx)(n.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'var playEventRegisteredAt: Date!\n...\nplayingeventlistener = theoplayer.addEventListener(type:\nPlayerEventTypes.PLAYING, listener: playingEventHandler)\n\nplayeventlistener = theoplayer.addEventListener(type:\nPlayerEventTypes.PLAY, listener: playEventHandler)\n\nfunc playingEventHandler (event : PlayingEvent) {\n        theoplayer.removeEventListener(type: PlayerEventTypes.PLAY,  listener: playingeventlistener);\n\n        let components = NSCalendar.current.dateComponents([.second], from: playEventRegisteredAt, to: Date())\n\n        let timeToFirstFrame = components.second\n\n        print("Time-to-first-frame:", timeToFirstFrame!,"second(s)");\n}\n\nfunc playEventHandler(event :PlayEvent) {\n        theoplayer.removeEventListener(type: PlayerEventTypes.PLAY,  listener: playeventlistener)\n        playEventRegisteredAt = Date()\n}\n'})}),"\n",(0,a.jsx)(n.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,a.jsxs)(n.p,{children:["To measure the time to the first frame, we will use ",(0,a.jsx)(n.a,{href:"https://developer.roku.com/en-gb/docs/references/brightscript/interfaces/iftimespan.md",children:"roTimespan"}),'. Starting measurement will take place just before setting the source of the player and finishing measurement will occur in "playing" event callback.']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<component name="TestScene" extends="Scene">\n    <interface>\n        <function name="callbackOnEventPlayerPlay"/>\n        <function name="callbackOnEventPlayerPlaying"/>\n    </interface>\n\n    <script type = "text/brightscript" >\n\n        <![CDATA[\n\n        function Init()\n            m.player = m.top.findNode("TestPlayer")\n            m.player.configuration = {\n              "license": "" \' put the THEOplayer license between apostrophes\n            }\n            m.player.listener = m.top\n            m.player.callFunc("addEventListener", m.player.Event.play, "callbackOnEventPlayerPlay")\n            m.player.callFunc("addEventListener", m.player.Event.playing, "callbackOnEventPlayerPlaying")\n            m._ts = CreateObject("roTimespan")\n\n            setSource()\n            m.player.setFocus(true)\n            m.player.callFunc("play")\n        end function\n\n        function setSource()\n            sourceDescription = {\n                "sources": [\n                    {\n                        "src": "http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",\n                        "type": "application/x-mpegURL"\n                    }\n                ]\n            }\n            m.player.source = sourceDescription\n            m.player.source.Live = false\n            m.player.source.LiveBoundsPauseBehavior = "pause"\n        end function\n\n        function callbackOnEventPlayerPlay(eventData)\n            ? "Event <play>: "; eventData\n            m._ts.Mark()\n        end function\n\n        function callbackOnEventPlayerPlaying(eventData)\n            ? "Event <playing>: "; eventData\n            ? "Time-to-first-frame: "; m._ts.TotalMilliseconds()\n        end function\n\n        ]]>\n\n    <\/script>\n\n    <children>\n	    <THEOsdk:THEOplayer id="TestPlayer"/>\n    </children>\n</component>\n'})})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var r=t(67294);let a={},i=r.createContext(a);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);