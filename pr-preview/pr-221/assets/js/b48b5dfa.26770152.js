"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["26923"],{23516:function(e,t,l){l.r(t),l.d(t,{default:()=>c,frontMatter:()=>r,metadata:()=>n,assets:()=>h,toc:()=>a,contentTitle:()=>d});var n=JSON.parse('{"id":"theolive-through-npm/player-api-details","title":"Player API details","description":"A basic player API is made available in the THEOlive NPM player:","source":"@site/theolive/theolive-through-npm/player-api-details.md","sourceDirName":"theolive-through-npm","slug":"/theolive-through-npm/player-api-details","permalink":"/documentation/pr-preview/pr-221/theolive/theolive-through-npm/player-api-details","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/theolive-through-npm/player-api-details.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"theolive","previous":{"title":"Include in React App","permalink":"/documentation/pr-preview/pr-221/theolive/theolive-through-npm/get-started-without-ui/react"},"next":{"title":"Bad network mode","permalink":"/documentation/pr-preview/pr-221/theolive/theolive-through-npm/extended-features/bad-network-mode"}}'),i=l("85893"),s=l("50065");let r={sidebar_position:5},d="Player API details",h={},a=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Events",id:"events",level:2},{value:"Presentation API",id:"presentation-api",level:3},{value:"LoadConfiguration",id:"loadconfiguration",level:3},{value:"AdsConfiguration",id:"adsconfiguration",level:3},{value:"AdDescription",id:"addescription",level:3},{value:"MediaTrackList events",id:"mediatracklist-events",level:3},{value:"MediaTrack",id:"mediatrack",level:3},{value:"Quality",id:"quality",level:3}];function x(e){let t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"player-api-details",children:"Player API details"})}),"\n",(0,i.jsx)(t.p,{children:"A basic player API is made available in the THEOlive NPM player:"}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"muted"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"boolean"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get or set whether the audio is muted."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"paused"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"boolean"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Returns whether the player is paused."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"volume"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"number"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get or set the current volume percentage as a floating point value between 0 and 1. (Not supported on iOS safari due to browser restrictions)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"presentation"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Presentation | undefined"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Returns the Presentation API. This value is undefined when using the version without UI."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"badNetworkMode"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"boolean"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get whether the player is in bad network mode. Setting this value to true enters bad network mode, setting it to false exits it."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"videoTracks"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"MediaTrackList"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get the video tracks of the stream. (This list will always contain either no video tracks or exactly one)"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"play(): void"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Start or resume playback."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"pause(): void"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Pause playback."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"destroy(): void"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Destroy the player. This stops playback and releases all resources associated with this player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["loadChannel(channelId: string, config?: LoadConfiguration): ",(0,i.jsx)(t.code,{children:"Promise<void>"})]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Load a channel. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(t.em,{children:"channelId"}),": The id of the channel to load. ",(0,i.jsx)("br",{})," ",(0,i.jsx)(t.em,{children:"config"}),": The configuration for loading the channel. (available from v3.1.0) This will always result in either a channelloaded or a channeloffline event."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["preloadChannels(channelIds: string[]): ",(0,i.jsx)(t.code,{children:"Promise<void>"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fetch the metadata of a list of THEOlive channels. This API method is used for smooth zapping so all channel metadata is loaded up front."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"addEventListener(type: string, listener: (event: Event) => void)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Add a event listener for the given event type."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"removeEventListener(type: string, listener: (event: Event) => void)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Remove a previously registered event listener."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Event name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"play"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when the player is no longer paused, when play() is called or autoplay is enabled."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"pause"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when the player is paused, when pause() is called."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"playing"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when the player is not paused and starts progressing playback, so initially when the player starts or when the player recovers from a stall."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"waiting"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when the player is not paused but stops progressing, when the buffer is empty."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"volumechange"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when either the volume or the muted property changes. (Not supported on iOS safari due to browser restrictions)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"channelloaded"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when the player has loaded a channel."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"channeloffline"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when the player tried to load a channel but it wasn't able to start playback. Common use cases are that the channel is still starting up or it isn't receiving any ingest. As the player automatically retries to load the channel, this event might be fired periodically."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"intenttofallback"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when the player notices its channel is not in a healthy state. When a fallback channel is configured, the player will automatically fallback to that channel. Expert users can listen to this event to have full control over how to fallback to an alternative."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"error"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when the player enters a state from which it cannot recover without a new loadChannel call."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"enterbadnetworkmode"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when the player enters bad network mode."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"exitbadnetworkmode"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when the player exits bad network mode."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"adbegin"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when an ad begins."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"adend"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when an ad ends."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"adbreakbegin"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when an ad break begins."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"adbreakend"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when an ad break ends."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"adskip"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when an ad is skipped."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"aderror"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when an ad errors."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"presentation-api",children:"Presentation API"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property / Method"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Return type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"currentMode"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"'fullscreen' | 'inline'"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Returns the current presentation mode."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"requestMode(mode)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"void"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Set the mode to 'fullscreen' or 'inline'."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"supportsMode(mode)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"boolean"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Returns whether the current platform supports the given mode."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"loadconfiguration",children:"LoadConfiguration"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Return type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"adsConfiguration (optional)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"AdsConfiguration"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The pre-roll ad configuration."})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"adsconfiguration",children:"AdsConfiguration"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Return type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ads"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"AdDescription[]"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The list of ads to play before the stream loads."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"blockContentIfAdError (optional)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"boolean"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Whether the player should be blocked when an ad-related error occurs. ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)(t.strong,{children:"Warning"}),": A blocked player is not usable anymore."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"addescription",children:"AdDescription"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Return type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"source"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The URL of the ad resource."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"type (optional)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"'vast' | 'vmap' | 'adrule'"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The type of ad resource."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"mediatracklist-events",children:"MediaTrackList events"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"addtrack"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when a new track is added to the track list."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"removetrack"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Fired when a track was removed from the track list."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"mediatrack",children:"MediaTrack"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"id"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"An id identifying the track"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"uid"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"number"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A uuid identifying the track"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"activeQuality"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Quality"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The currently playing quality"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"qualities"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Quality[]"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"All qualities in this track"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"quality",children:"Quality"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"id"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"An id identifying this quality"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"uuid"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"number"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A uuid identifying this quality"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"bandwidth"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"number"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The peak bandwidth needed to play this quality as defined in the HESP manifest"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"averageBandwidth"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"number | undefined"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The average bandwidth needed to play this quality as defined in the HESP manifest"})]})]})]})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return d},a:function(){return r}});var n=l(67294);let i={},s=n.createContext(i);function r(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);