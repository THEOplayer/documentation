"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["1265"],{15235:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast","title":"Pass subtitle selection on to Chromecast","description":"Currently, it is intended behavior that when you start casting the player to a Chromecast device the subtitle selection setting isn\'t carried over. A new player is generated with the SourceConfiguration of the sender, but not any adjustments.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/03-cast/01-chromecast/05-pass-subtitle-section-on-to-chromecast.md","sourceDirName":"how-to-guides/03-cast/01-chromecast","slug":"/how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast","permalink":"/documentation/pr-preview/pr-239/theoplayer/v7/how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/03-cast/01-chromecast/05-pass-subtitle-section-on-to-chromecast.md","tags":[],"version":"v7","sidebarPosition":5,"frontMatter":{},"sidebar":"roku","previous":{"title":"Sending messages from/to Sender to/from Receiver","permalink":"/documentation/pr-preview/pr-239/theoplayer/v7/how-to-guides/cast/chromecast/sending-messages-from-to-sender-to-from-receiver"},"next":{"title":"Enable Chromecast on the Sender","permalink":"/documentation/pr-preview/pr-239/theoplayer/v7/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender"}}'),s=n("85893"),a=n("50065");let i={},c="Pass subtitle selection on to Chromecast",o={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Solution",id:"solution",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5}];function l(e){let t={code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"pass-subtitle-selection-on-to-chromecast",children:"Pass subtitle selection on to Chromecast"})}),"\n",(0,s.jsxs)(t.p,{children:["Currently, it is intended behavior that when you start casting the player to a Chromecast device the subtitle selection setting isn't carried over. A new player is generated with the ",(0,s.jsx)(t.code,{children:"SourceConfiguration"})," of the sender, but not any adjustments."]}),"\n",(0,s.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(t.p,{children:"You can work around the default behavior by adding the following eventListeners to the player."}),"\n",(0,s.jsxs)(t.p,{children:["The code adds an event on textTracks ",(0,s.jsx)(t.code,{children:"change"}),". Whenever the subtitles change, this event is called and stores the current active textTrack in ",(0,s.jsx)(t.code,{children:"currentTextTrack"})," by iterating over the textTracks array and checking whether ",(0,s.jsx)(t.code,{children:".mode"})," is ",(0,s.jsx)(t.code,{children:"showing"}),". Once a Chromecast session is created, the code will check if the ID of the textTracks in the new player corresponds with the ID of the stored currentTextTrack. If so, it will activate that textTrack."]}),"\n",(0,s.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,s.jsx)(t.p,{children:"Here is how you pass the current active subtitle track to the Chromecast session:"}),"\n",(0,s.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"var currentTextTrack;\n\nplayer.textTracks.addEventListener('change', function () {\n  for (var t in player.textTracks) {\n    if (player.textTracks[t].mode === 'showing') {\n      currentTextTrack = player.textTracks[t];\n    }\n  }\n});\n\nplayer.cast.chromecast.addEventListener('statechange', (event) => {\n  if (event.state === 'connected') {\n    player.addEventListener('playing', function () {\n      for (var tt in player.textTracks) {\n        if (player.textTracks[tt].id === currentTextTrack.id) {\n          player.textTracks[tt].mode = 'showing';\n        }\n      }\n    });\n  }\n});\n"})}),"\n",(0,s.jsx)(t.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"final TextTrack currentTextTrack;\n\ntpv.getPlayer().getTextTracks().addEventListener(TextTrackListEventTypes.TRACKLISTCHANGE, new EventListener<TrackListChangeEvent>() {\n    @Override\n    public void handleEvent(TrackListChangeEvent trackListChangeEvent) {\n        for (TextTrack t : tpv.getPlayer().getTextTracks()) {\n            if (t.getMode() == TextTrackMode.SHOWING) {\n                currentTextTrack = t;\n            }\n        }\n    }\n});\n\ntpv.getCast().getChromecast().addEventListener(ChromecastEventTypes.STATECHANGE, new EventListener<CastStateChangeEvent>() {\n    @Override\n    public void handleEvent(CastStateChangeEvent castStateChangeEvent) {\n        if (tpv.getCast().getChromecast().getState() == PlayerCastState.CONNECTED) {\n            tpv.getPlayer().addEventListener(PlayerEventTypes.PLAYING, new EventListener<PlayingEvent>() {\n                @Override\n                public void handleEvent(PlayingEvent playingEvent) {\n                    for (TextTrack t : tpv.getPlayer().getTextTracks()) {\n                        if (t.getId() == currentTextTrack.getId()) {\n                            t.setMode(TextTrackMode.SHOWING);\n                        }\n                    }\n                }\n            });\n        }\n    }\n});\n"})}),"\n",(0,s.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"var currentTextTrack: TextTrack?\n\n    self.theoplayer.textTracks.addEventListener(type: TextTrackListEventTypes.CHANGE) { (result) in\n        for i in 0..<self.theoplayer.textTracks.count {\n        if self.theoplayer.textTracks[i].mode == .showing {\n            currentTextTrack = self.theoplayer.textTracks[i]\n        }\n        }\n    }\n\n    self.theoplayer.cast?.chromecast?.addEventListener(type: ChromecastEventTypes.STATE_CHANGE, listener: { (result) in\n    if result.state == .connected {\n            self.theoplayer.addEventListener(type: PlayerEventTypes.PLAYING) { (result) in\n                for i in 0..<self.theoplayer.textTracks.count {\n                    var tt = self.theoplayer.textTracks[i]\n                        if tt.id == currentTextTrack?.id {\n                        tt.mode = .showing\n                        }\n                    }\n                }\n            }\n\n        })\n}\n"})})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var r=n(67294);let s={},a=r.createContext(s);function i(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);