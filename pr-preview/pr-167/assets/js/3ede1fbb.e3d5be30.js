"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["8193"],{78920:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>s});var n=JSON.parse('{"id":"external/react-native-theoplayer/doc/abr","title":"Adaptive Bitrate (ABR)","description":"Overview","source":"@site/theoplayer_versioned_docs/version-v4/external/react-native-theoplayer/doc/abr.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/abr","permalink":"/documentation/pr-preview/pr-167/theoplayer/v4/getting-started/frameworks/react-native/abr","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/abr.md","tags":[],"version":"v4","frontMatter":{"slug":"/getting-started/frameworks/react-native/abr"},"sidebar":"react-native","previous":{"title":"Example Application","permalink":"/documentation/pr-preview/pr-167/theoplayer/v4/getting-started/frameworks/react-native/example-app"},"next":{"title":"Advertisements","permalink":"/documentation/pr-preview/pr-167/theoplayer/v4/getting-started/frameworks/react-native/ads"}}'),i=r("85893"),a=r("50065");let s={slug:"/getting-started/frameworks/react-native/abr"},d="Adaptive Bitrate (ABR)",o={},c=[{value:"Overview",id:"overview",level:2},{value:"ABR Configuration",id:"abr-configuration",level:2},{value:"Setting Target Video Quality",id:"setting-target-video-quality",level:2},{value:"Subscribing to track events",id:"subscribing-to-track-events",level:2},{value:"Setting a preferred video quality across period switches and discontinuities",id:"setting-a-preferred-video-quality-across-period-switches-and-discontinuities",level:3}];function l(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"adaptive-bitrate-abr",children:"Adaptive Bitrate (ABR)"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["The playback quality during play-out of a stream is determined by the ABR algorithm.\nOn starting play-out of a stream, the ABR ",(0,i.jsx)(t.em,{children:"strategy"})," determines which quality to prefer, while during play-out the\nnetwork's bandwidth is\nmonitored to select an optimal quality."]}),"\n",(0,i.jsxs)(t.p,{children:["More information on ABR can be found on our\n",(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/blog/abr-bandwidth-usage",children:"THEOplayer website"}),"\nand ",(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/theoplayer-demo-optimized-video-abr",children:"demo page"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"In this document we will outline how to affect the ABR algorithm, setting a preferred quality or set of qualities and\nsubscribe to related events."}),"\n",(0,i.jsx)(t.h2,{id:"abr-configuration",children:"ABR Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/abr/ABRConfiguration.ts",children:"ABR Configuration"})," determines which initial quality the player will download, depending\non the chosen strategy, as well as various parameters of the playback buffer."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:" const onPlayerReady = (player: THEOplayer) => {\n  player.abr.strategy = ABRStrategyType.quality;\n  player.abr.targetBuffer = 20;\n  player.abr.bufferLookbackWindow = 30;\n  player.abr.maxBufferLength = 30;\n}\n\n<THEOplayerView\n  config={playerConfig}\n  onPlayerReady={onPlayerReady}\n/>\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Supported Platforms"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"strategy"})}),(0,i.jsxs)(t.td,{children:["The adaptive bitrate strategy. Possible values are ",(0,i.jsx)(t.code,{children:"'performance'"}),", ",(0,i.jsx)(t.code,{children:"'quality'"}),", ",(0,i.jsx)(t.code,{children:"'bandwidth'"})," or a ",(0,i.jsx)(t.code,{children:"ABRStrategyConfiguration"})," object. Default is ",(0,i.jsx)(t.strong,{children:"bandwidth"})]}),(0,i.jsx)(t.td,{children:"Android & Web"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"targetBuffer"})}),(0,i.jsxs)(t.td,{children:["The amount that the player should buffer ahead of the current playback position, in seconds. Default is ",(0,i.jsx)(t.strong,{children:"20"}),"s."]}),(0,i.jsx)(t.td,{children:"Android & Web"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bufferLookbackWindow"})}),(0,i.jsxs)(t.td,{children:["The amount of data which the player should keep in its buffer before the current playback position, in seconds. Default is ",(0,i.jsx)(t.strong,{children:"30"}),"s."]}),(0,i.jsx)(t.td,{children:"Web"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"maxBufferLength"})}),(0,i.jsx)(t.td,{children:"The maximum length of the player's buffer, in seconds."}),(0,i.jsx)(t.td,{children:"Web"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["When specifying the strategy, apart from the values ",(0,i.jsx)(t.code,{children:"'performance'"}),", ",(0,i.jsx)(t.code,{children:"'quality'"}),", ",(0,i.jsx)(t.code,{children:"'bandwidth'"}),",\nan ",(0,i.jsx)(t.code,{children:"ABRStrategyConfiguration"}),"\nobject can be set with an estimate for the initial bitrate value (in bits per second):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"const strategyConfig: ABRStrategyConfiguration = {\n  type: ABRStrategyType.bandwidth,\n  metadata: {\n    'bitrate': 1200000\n  }\n}\nplayer.abr.strategy = strategyConfig;\n"})}),"\n",(0,i.jsx)(t.h2,{id:"setting-target-video-quality",children:"Setting Target Video Quality"}),"\n",(0,i.jsx)(t.p,{children:"By default, the ABR algorithm will choose, depending on the available bandwidth,\nfrom all the video qualities that are available in the manifest or playlist."}),"\n",(0,i.jsxs)(t.p,{children:["It is possible to set a specific quality, or subset of qualities, that should be retained as\na source set by passing the ",(0,i.jsx)(t.code,{children:"uid"})," to the ",(0,i.jsx)(t.code,{children:"targetVideoQuality"})," property on the ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/player/THEOplayer.ts",children:"THEOplayer API"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const selectedVideoQuality: number | number[] | undefined = [33, 34, 35]\nplayer.targetVideoQuality = selectedVideoQuality;\n"})}),"\n",(0,i.jsx)(t.h2,{id:"subscribing-to-track-events",children:"Subscribing to track events"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"onMediaTrackListEvent"})," and ",(0,i.jsx)(t.code,{children:"onMediaTrackEvent"})," callback properties on ",(0,i.jsx)(t.code,{children:"THEOplayerView"})," provide a way to perform actions\nwhen the track list is modified, or when a track's current quality changes:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Event name"}),(0,i.jsx)(t.th,{children:"Event"}),(0,i.jsx)(t.th,{children:"Supported Platforms"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"onMediaTrackListEvent"})}),(0,i.jsxs)(t.td,{children:["when a media track list event occurs, for ",(0,i.jsx)(t.code,{children:"trackType"})," with value ",(0,i.jsx)(t.code,{children:"Audio"})," or ",(0,i.jsx)(t.code,{children:"Video"}),", and event ",(0,i.jsx)(t.code,{children:"type"})," with values ",(0,i.jsx)(t.code,{children:"AddTrack"}),", ",(0,i.jsx)(t.code,{children:"RemoveTrack"})," or ",(0,i.jsx)(t.code,{children:"ChangeTrack"}),"."]}),(0,i.jsx)(t.td,{children:"Android & Web"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"onMediaTrackEvent"})}),(0,i.jsxs)(t.td,{children:["when a media track event occurs, for ",(0,i.jsx)(t.code,{children:"trackType"})," with value ",(0,i.jsx)(t.code,{children:"Audio"})," or ",(0,i.jsx)(t.code,{children:"Video"}),", and event ",(0,i.jsx)(t.code,{children:"type"}),", which currently is only ",(0,i.jsx)(t.code,{children:"ActiveQualityChanged"}),"."]}),(0,i.jsx)(t.td,{children:"Android & Web"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"setting-a-preferred-video-quality-across-period-switches-and-discontinuities",children:"Setting a preferred video quality across period switches and discontinuities"}),"\n",(0,i.jsxs)(t.p,{children:["Subscribing to the ",(0,i.jsx)(t.code,{children:"AddTrack"})," event on ",(0,i.jsx)(t.code,{children:"onMediaTrackListEvent"})," for video tracks makes it possible set a\nfixed preferred video quality, even when a stream's track list changes due to a DASH period switch or an\nHLS discontinuity (for example during an ad break)."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const onMediaTrackListEvent = (event: MediaTrackListEvent) => {\n  const {subType, trackType} = event;\n  if (trackType === MediaTrackType.VIDEO && subType === TrackListEventType.ADD_TRACK) {\n    const {qualities, activeQuality: currentActiveQuality} = event.track;\n\n    // Try to set a preferreed quality\n    const targetQuality = qualities.find(q => q.bandwidth === preferredBandwidth);\n    if (targetQuality) {\n      const {uid} = targetQuality;\n      this.player.targetVideoQuality = uid;\n    }\n  }\n};\n\nconst onPlayerReady = (player: THEOplayer) => {\n  this.player = player;\n  this.player.addEventListener(PlayerEventType.MEDIA_TRACK_LIST, onMediaTrackListEvent)\n}\n\n<THEOplayerView\n  config={playerConfig}\n  onPlayerReady={onPlayerReady}\n/>\n"})})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return s}});var n=r(67294);let i={},a=n.createContext(i);function s(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);