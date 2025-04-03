"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["66678"],{62264:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"external/iOS-Connector/Code/Uplynk/docs/ping","title":"Ping","description":"This article explains how to use the Uplynk Ping API.","source":"@site/theoplayer_versioned_docs/version-v8/external/iOS-Connector/Code/Uplynk/docs/ping.md","sourceDirName":"external/iOS-Connector/Code/Uplynk/docs","slug":"/connectors/ios/uplynk/ping","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/connectors/ios/uplynk/ping","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/iOS-Connector/blob/-/Code/Uplynk/docs/ping.md","tags":[],"version":"v8","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"slug":"/connectors/ios/uplynk/ping"},"sidebar":"ios","previous":{"title":"Uplynk Ads","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/connectors/ios/uplynk/ads"},"next":{"title":"Examples","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/connectors/ios/uplynk/examples"}}'),i=s("85893"),r=s("50065");let o={sidebar_position:3,slug:"/connectors/ios/uplynk/ping"},l="Ping",a={},d=[{value:"Configuring Ping",id:"configuring-ping",level:2},{value:"Ping requests",id:"ping-requests",level:2},{value:"Ping Response",id:"ping-response",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ping",children:"Ping"})}),"\n",(0,i.jsx)(n.p,{children:"This article explains how to use the Uplynk Ping API."}),"\n",(0,i.jsx)(n.p,{children:"The Ping API for Uplynk allows users of their CMS to receive updates about SSAI on running live-streams or provide better playback position beaconing for Video on demand. The Ping API is used together with the Preplay API because the latter provides a session to be used with the Ping API."}),"\n",(0,i.jsx)(n.p,{children:"This connector allows the user to specify a source for Preplay, and enable or disable certain features of the Ping API. The player will then perform these Ping calls internally, without the user having to write their own Ping client. The response of Ping calls will be exposed for external handling if necessary."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Feature Assumptions"}),'\nWe assume the SSAI information returned through the Ping API to be of a certain format, which we compile from examples and our own testing. The documentation does not define the structure of this payload very well and only states that it is "like the object returned in Preplay requests", though the formats are not a one-on-one match.']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Assumptions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"THEOplayer assumes the availability of the Ping API and Uplynk content servers to be 100%, since these identify and provide the necessary streams for playback with this feature."}),"\n",(0,i.jsxs)(n.li,{children:["THEOplayer assumes application developers have a notion of the Ping API, namely any extra parameters to be appended to the requests to Uplynk (e.g. for correct ad insertion). As documented in ",(0,i.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Develop/Preplayv2.htm",children:"https://api-docs.uplynk.com/#Develop/Preplayv2.htm"})]}),"\n",(0,i.jsx)(n.li,{children:"THEOplayer assumes application developers provide proper ID's of the Assets they want to play back, as well as the proper content protection level."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-ping",children:"Configuring Ping"}),"\n",(0,i.jsxs)(n.p,{children:["The connector allows specification of the desired features of the Ping API as listed ",(0,i.jsx)(n.a,{href:"https://api-docs.uplynk.com/#Develop/Preplayv2.htm#Features",children:"in the official Ping API documentation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the THEOplayer-Connector-Uplynk, these features can be activated through the ",(0,i.jsx)(n.code,{children:"uplynkPingConfiguration"})," property in the SSAI configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'let ssaiConfiguration = UplynkSSAIConfiguration(\n                                id: .asset(ids: [ your list of asset IDs]),\n                                assetType: .asset or .channel,\n                                prefix: "https://content.uplynk.com",\n                                preplayParameters: [ Dictionary of parameters ]\n                                contentProtected: true or false,\n                                uplynkPingConfiguration: UplynkPingConfiguration(adImpressions: true or false, // Defaults to false\n                                                                                 freeWheelVideoViews: true or false, // Defaults to false\n                                                                                 linearAdData: true or false)) // Defaults to false\n'})}),"\n",(0,i.jsxs)(n.p,{children:["By default, the ping API is disabled for all sessions. To enable it, the ",(0,i.jsx)(n.code,{children:"ad.cping=1"})," parameter must be added to your preplay request. In addition to enabling the API, you must also notify the server of the features you want to support for this viewing session. To specify which features you'd like to enable, you add the",(0,i.jsx)(n.code,{children:"ad.pingf={some value}"})," parameter to the playback token. The value of the parameter is detailed in the official Ping Documentation."]}),"\n",(0,i.jsxs)(n.p,{children:["Ping is enabled and ",(0,i.jsx)(n.code,{children:"ad.pingf"})," is set to a proper value when the ",(0,i.jsx)(n.code,{children:"uplynkPingConfiguration"})," has one or more of the ",(0,i.jsx)(n.code,{children:"adImpressions"}),", ",(0,i.jsx)(n.code,{children:"freeWheelVideoViews"})," or ",(0,i.jsx)(n.code,{children:"linearAdData"})," configuration set to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you attempt to call the API without passing in the ",(0,i.jsx)(n.code,{children:"ad.cping"})," parameter, you can throw off the server's ability to make ad event calls correctly."]}),"\n",(0,i.jsxs)(n.p,{children:["Sample Preplay URL with ",(0,i.jsx)(n.code,{children:"ad.cping"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"https://content.uplynk.com/preplay/cc829785506f46dda4c605abdf65392b.json?ad=adserver&ad.cping=1&ad.pingf=3"})}),"\n",(0,i.jsxs)(n.p,{children:["The default value for ",(0,i.jsx)(n.code,{children:"uplynkPingConfiguration"})," has ",(0,i.jsx)(n.code,{children:"adImpressions"}),", ",(0,i.jsx)(n.code,{children:"freeWheelVideoViews"})," and ",(0,i.jsx)(n.code,{children:"linearAdData"})," all set to false, ie, Ping API will not be used."]}),"\n",(0,i.jsx)(n.h2,{id:"ping-requests",children:"Ping requests"}),"\n",(0,i.jsx)(n.p,{children:"When the Ping API is enabled, THEOplayer will call the Ping URL located at:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{prefix}/session/ping/{sessionID}.json?v=3&pt={currentTime}&ev={event}&ft={freeWheelTime}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"{prefix}"}),": Is the prefix URL from the Preplay response."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"{sessionID}"}),": Is the session ID from the Preplay response."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"{currentTime}"}),": Mandatory parameter. This is the current player time in seconds."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"{event}"}),": Is the current Ping event. An event should only be passed when playback starts or when a viewer seeks to a new position.\nValid values are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"start"}),": Pass this event, along ",(0,i.jsx)(n.code,{children:"withpt=0"}),", when the player starts playback. This lets the server know where playback starts and allows the server to fire start events as needed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"seek"}),": Pass this event when a viewer seeks. This resets the timeline to prevent inadvertently firing events for skipped ads."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"{freeWheelTime}"}),": Indicates the playback position, in seconds, right before a viewer seeks to a different position in the timeline. This property is mandatory when the freeWheelVideoViews is used."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ping-response",children:"Ping Response"}),"\n",(0,i.jsxs)(n.p,{children:["When performed correctly, a Ping request will return a JSON response which is decoded into a ",(0,i.jsx)(n.code,{children:"PingResponse"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The ping response includes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"next_time: A new beacon will be scheduled when the player's currentTime passes this value. In case the value is -1, no further beacons will be scheduled."}),"\n",(0,i.jsxs)(n.li,{children:["ads: Will be interpreted in order to create AdBreak's and Ad's as well as expose Ad information through the THEOplayer instance's ",(0,i.jsx)(n.code,{children:"ads.scheduledAds"})," property.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ads.breaks.timeOffset will be used in order to determine the start time of the ad break (in seconds)."}),"\n",(0,i.jsxs)(n.li,{children:["ads.breaks.ads will be looped in order to extract the list of ad's in an UplynkAdBreak:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"apiFramework - Indicates the API Framework for the ad (e.g., VPAID)."}),"\n",(0,i.jsx)(n.li,{children:"companions - List of companion ads that go with the ad."}),"\n",(0,i.jsx)(n.li,{children:"mimeType - Indicates the ad's Internet media type (aka mime-type)"}),"\n",(0,i.jsx)(n.li,{children:"creative - If applicable, indicates the creative to display."}),"\n",(0,i.jsx)(n.li,{children:"events - Object containing all of the events for this ad. Each event type contains an array of URLs."}),"\n",(0,i.jsx)(n.li,{children:"width - If applicable, indicates the width of the creative."}),"\n",(0,i.jsx)(n.li,{children:"height - If applicable, indicates the height of the creative."}),"\n",(0,i.jsx)(n.li,{children:"duration - Indicates the duration, in seconds, of an ad's encoded video."}),"\n",(0,i.jsx)(n.li,{children:"extensions - Contains the custom set of VAST extensions returned by the ad server."}),"\n",(0,i.jsx)(n.li,{children:"fwParameters - If the ad response provided by FreeWheel contains creative parameters, they will be reported as name-value pairs within this object."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"ads.breaks.duration - Indicates the duration of the ad break."}),"\n",(0,i.jsx)(n.li,{children:"ads.breaks.position - Indicates the position of the ad break. Valid values are: preroll | midroll | postroll | pause | overlay."}),"\n",(0,i.jsx)(n.li,{children:"ads.breaks.events - Object containing all of the events for this ad break."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ping response can be retrieved from the ",(0,i.jsx)(n.code,{children:"onPingResponse(:)"})," delegate method by setting an ",(0,i.jsx)(n.code,{children:"eventListener"})," to the ",(0,i.jsx)(n.code,{children:"UplynkConnector"})," instance."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Delegate method"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Arguments"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"onPingResponse"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Fired when a Ping response is received."}),(0,i.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,i.jsx)(n.code,{children:"response"})," argument contains the ",(0,i.jsx)(n.code,{children:"PingResponse"})]})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v8/connectors/ios/uplynk/preplay",children:"Uplynk - Preplay"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v8/connectors/ios/uplynk/ads",children:"Uplynk - Ads"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var t=s(67294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);