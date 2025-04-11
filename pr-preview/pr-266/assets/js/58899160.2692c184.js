"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["96935"],{95181:function(e,n,i){i.r(n),i.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"how-to-guides/web/uplynk/ping","title":"Ping","description":"This article explains how to use Uplynk\'s Ping API.","source":"@site/theoplayer_versioned_docs/version-v8/how-to-guides/web/uplynk/03-ping.md","sourceDirName":"how-to-guides/web/uplynk","slug":"/how-to-guides/web/uplynk/ping","permalink":"/documentation/pr-preview/pr-266/theoplayer/v8/how-to-guides/web/uplynk/ping","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/how-to-guides/web/uplynk/03-ping.md","tags":[],"version":"v8","sidebarPosition":3,"frontMatter":{},"sidebar":"web","previous":{"title":"Uplynk Ads","permalink":"/documentation/pr-preview/pr-266/theoplayer/v8/how-to-guides/web/uplynk/ads"},"next":{"title":"Uplynk configuration","permalink":"/documentation/pr-preview/pr-266/theoplayer/v8/how-to-guides/web/uplynk/configuration"}}'),t=i("85893"),r=i("50065");let l={},a="Ping",d={},o=[{value:"Configuring Ping",id:"configuring-ping",level:2},{value:"Ping requests",id:"ping-requests",level:2},{value:"Ping Response",id:"ping-response",level:2},{value:"Related articles",id:"related-articles",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ping",children:"Ping"})}),"\n",(0,t.jsx)(n.p,{children:"This article explains how to use Uplynk's Ping API."}),"\n",(0,t.jsx)(n.p,{children:"The Ping API by Uplynk allows users of their CMS to receive updates about SSAI on running live-streams or provide better playback position beaconing for Video on demand. The Ping API is used together with the Preplay API because the latter provides a session to be used with the Ping API."}),"\n",(0,t.jsx)(n.p,{children:"This pre-integration allows the integrator to specify a source for Preplay as integrated in other tickets (RDMP-287), and enable or disable certain features of the Ping API. The player will then perform these Ping calls internally, without the integrator having to write their own Ping client. The response of Ping calls will be exposed for external handling if necessary. The updates about SSAI received through the Ping API will be reflected in the player API, where information about SSAI through the Verizon Media Platform is already present."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Version 3 of the Ping API will be implemented."})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Playhead Position"}),"\nWhen Ping mentions time (and time mentioned below) relative compared to 0, the 0-point will be the start of playback. This might be a mismatch with the normal ",(0,t.jsx)(n.code,{children:"player.currentTime"}),". Instead, this will be comparable with the time passed since ",(0,t.jsx)(n.code,{children:"player.played.start(0)"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Feature Assumptions"}),'\nWe assume the SSAI information returned through the Ping API to be of a certain format, which we compile from examples and our own testing. The documentation does not define the structure of this payload very well and only states that it is "like the object returned in Preplay requests", though the formats are not a one-on-one match.']}),"\n",(0,t.jsx)(n.p,{children:"This feature currently excludes client-side ad tracking and VPAID support."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Assumptions"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"THEOplayer assumes the availability of the Ping API and Uplynk content servers to be 100%, since these identify and provide the necessary streams for playback with this feature."}),"\n",(0,t.jsxs)(n.li,{children:["THEOplayer assumes application developers have a notion of the Ping API, namely any extra parameters to be appended to the requests to Uplynk (e.g. for correct ad insertion). Uplynk documents this service in the ",(0,t.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Develop/Pingv3.htm",children:"API docs"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"THEOplayer assumes application developers provide proper ID's of the Assets they want to play back, as well as the proper content protection level."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-ping",children:"Configuring Ping"}),"\n",(0,t.jsxs)(n.p,{children:["The player allows specification of the desired features of the Ping API as listed ",(0,t.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Develop/Pingv3.htm#Features",children:"in the official Ping API documentation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the ping API is disabled for all sessions. To enable it, the ",(0,t.jsx)(n.code,{children:"ad.cping=1"})," parameter must be added to your preplay request. If you attempt to call the API without passing in the ",(0,t.jsx)(n.code,{children:"ad.cping"})," parameter, you can throw off the server's ability to make ad event calls correctly."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition to enabling the API, you must also notify the server of the features you want to support for this viewing session. To specify which features you'd like to enable, you add the ",(0,t.jsx)(n.code,{children:"ad.pingf={some value}"})," parameter to the playback token. The value of the parameter is detailed in the official Ping Documentation."]}),"\n",(0,t.jsxs)(n.p,{children:["Sample playback URL with ",(0,t.jsx)(n.code,{children:"cping"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"https://content.uplynk.com/preplay/cc829785506f46dda4c605abdf65392b.json?ad=adserver&ad.cping=1&ad.pingf=3"})}),"\n",(0,t.jsxs)(n.p,{children:["In the THEOplayer API, these features can simply be activated through the ",(0,t.jsx)(n.code,{children:"ping"})," property in the source configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"player.source = {\n    sources: [{\n        integration: 'uplynk',\n        ...,\n        ping: {\n            linearAdData: true,\n            adImpressions: false,\n            freeWheelVideoViews: false\n        },\n        ...\n    }]\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ping-requests",children:"Ping requests"}),"\n",(0,t.jsx)(n.p,{children:"When the Ping API is enabled, THEOplayer will call the Ping URL located at:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{prefix}/session/ping/{sessionID}.json?v=3&pt={currentTime}&ev={event}&ft={freeWheelTime}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{prefix}"}),": the prefix URL from the Preplay response."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{sessionID}"}),": the session ID from the Preplay response."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{currentTime}"}),": mandatory parameter. This is the current player time in seconds."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{event}"}),": the current Ping event. An event should only be passed when playback starts or when a viewer seeks to a new position.\nValid values are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"start"}),": Pass this event, along ",(0,t.jsx)(n.code,{children:"withpt=0"}),", when the player starts playback. This lets the server know where playback starts and allows the server to fire start events as needed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"seek"}),": Pass this event when a viewer seeks. This resets the timeline to prevent inadvertently firing events for skipped ads."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{freeWheelTime}"}),": indicates the playback position, in seconds, right before a viewer seeks to a different position in the timeline. This property is mandatory when the freeWheelVideoViews is used."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ping-response",children:"Ping Response"}),"\n",(0,t.jsx)(n.p,{children:"When performed correctly, a Ping request will return a JSON response. THEOplayer will interpret this response according to the following principles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"next_time"}),": a new beacon will be scheduled when the player's currentTime passes this value. In case the value is -1, no further beacons will be scheduled."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"currentBreakEnd"}),": will be used to update the end time of an ongoing ad-break in case the breakEnd was previously unknown. (Note Verizon Media by default requests 240s of ads in case the break length is unknown and will return all ads in the Ping response.)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ads"}),": will be interpreted in order to display markers in the timeline as well as expose ad information through the player.verizonMedia.ads property."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ads.breaks.timeOffset"})," will be used in order to determine the start time of the ad break (in seconds)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ads.breaks.ads"})," will be looped in order to extract the ad information to be exposed in the Uplynk Ad on the THEO API:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ad.duration"})," will serve as duration in the ad (in seconds)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ad.mimeType"})," will serve as mimeType in the ad"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ad.apiFramework"})," will serve as apiFramework in the ad"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ad.companions"})," will serve as companions in the ad"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ad.creative"})," will serve as creative in the ad"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ad.width"})," will serve as width in the ad"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ad.height"})," will serve as height in the ad"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ad.events"})," will serve as events in the ad"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ad.fw_parameters"})," will serve as freeWheelParameters in the ad"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ads.breaks.breakEnd"})," will be used in order to determine the end of the ad break. Note that this property is optional, and the duration of an ad break can be unknown and updated at a later point."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ads.breaks.duration"})," will be ignored by the player."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For all ads and breaks added, ",(0,t.jsx)(n.code,{children:"adbreakbegin"}),", ",(0,t.jsx)(n.code,{children:"adbreakend"}),", ",(0,t.jsx)(n.code,{children:"adbegin"})," and ",(0,t.jsx)(n.code,{children:"adend"})," events will be dispatched. Additionally, when ",(0,t.jsx)(n.code,{children:"breakEnd"})," gets updated, an ",(0,t.jsx)(n.code,{children:"updateadbreak"})," event will be dispatched."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"extensions: Will be ignored by THEOplayer."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"error: Errors will be reported back through the THEOplayer API."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The raw ping response can be retrieved by adding an event listener for the ",(0,t.jsx)(n.code,{children:"pingresponse"})," event on the ",(0,t.jsx)(n.code,{children:"player.uplynk"})," property."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Event"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Description"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Event object"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"pingresponse"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Fired when a Ping response is received."}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"event.response will contain the raw JSON response from the Ping server."})]})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"player.uplynk.addEventListener('pingresponse', function (event) {\n  console.log(event.response); // Will print the raw Ping response.\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v8/how-to-guides/web/uplynk/preplay",children:"Uplynk - Preplay"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v8/how-to-guides/web/uplynk/ads",children:"Uplynk - Ads"})}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var s=i(67294);let t={},r=s.createContext(t);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);