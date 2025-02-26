"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["18916"],{48758:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"how-to-guides/miscellaneous/verizon-media/ping","title":"Ping","description":"This article explains how to use the Verizon Media\'s Ping API.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/02-verizon-media/03-ping.md","sourceDirName":"how-to-guides/07-miscellaneous/02-verizon-media","slug":"/how-to-guides/miscellaneous/verizon-media/ping","permalink":"/documentation/pr-preview/pr-224/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ping","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/07-miscellaneous/02-verizon-media/03-ping.md","tags":[],"version":"v6","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"Verizon Media Ads","permalink":"/documentation/pr-preview/pr-224/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ads"},"next":{"title":"Verizon Media Configuration","permalink":"/documentation/pr-preview/pr-224/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/configuration"}}'),s=i("85893"),r=i("50065");let l={},a="Ping",o={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Configuring Ping",id:"configuring-ping",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:5},{value:"Roku SDK",id:"roku-sdk",level:5},{value:"Ping requests",id:"ping-requests",level:2},{value:"Ping Response",id:"ping-response",level:2},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Android (TV) SDK",id:"android-tv-sdk",level:5},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk-1",level:5},{value:"Roku SDK",id:"roku-sdk-1",level:5},{value:"Related articles",id:"related-articles",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ping",children:"Ping"})}),"\n",(0,s.jsx)(n.p,{children:"This article explains how to use the Verizon Media's Ping API."}),"\n",(0,s.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.64.0)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.67.0)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.67.0)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (2.67.0)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"The Ping API of the Verizon Media Platform allows users of their CMS to receive updates about SSAI on running live-streams or provide better playback position beaconing for Video on demand. The Ping API is used together with the Preplay API because the latter provides a session to be used with the Ping API."}),"\n",(0,s.jsx)(n.p,{children:"This pre-integration allows the integrator to specify a source for Preplay as integrated in other tickets (RDMP-287), and enable or disable certain features of the Ping API. The player will then perform these Ping calls internally, without the integrator having to write their own Ping client. The response of Ping calls will be exposed for external handling if necessary. The updates about SSAI received through the Ping API will be reflected in the player API, where information about SSAI through the Verizon Media Platform is already present."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Version 3 of the Ping API will be implemented."})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Playhead Position"}),"\nWhen Ping mentions time (and time mentioned below) relative compared to 0, the 0-point will be the start of playback. This might be a mismatch with the normal ",(0,s.jsx)(n.code,{children:"player.currentTime"}),". Instead, this will be comparable with the time passed since ",(0,s.jsx)(n.code,{children:"player.played.start(0)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Feature Assumptions"}),'\nWe assume the SSAI information returned through the Ping API to be of a certain format, which we compile from examples and our own testing. The documentation does not define the structure of this payload very well and only states that it is "like the object returned in Preplay requests", though the formats are not a one-on-one match.']}),"\n",(0,s.jsx)(n.p,{children:"This feature currently excludes client-side ad tracking and VPAID support."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Assumptions"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"THEOplayer assumes the availability of the Ping API and Verizon content servers to be 100%, since these identify and provide the necessary streams for playback with this feature."}),"\n",(0,s.jsxs)(n.li,{children:["THEOplayer assumes application developers have a notion of the Ping API, namely any extra parameters to be appended to the requests to Verizon (e.g. for correct ad insertion). As documented in ",(0,s.jsx)(n.a,{href:"https://docs.vdms.com/video/Content/Develop/Preplayv2.htm",children:"https://docs.vdms.com/video/Content/Develop/Preplayv2.htm"})]}),"\n",(0,s.jsx)(n.li,{children:"THEOplayer assumes application developers provide proper ID's of the Assets they want to play back, as well as the proper content protection level."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-ping",children:"Configuring Ping"}),"\n",(0,s.jsxs)(n.p,{children:["The player allows specification of the desired features of the Ping API as listed ",(0,s.jsx)(n.a,{href:"https://docs.vdms.com/video/#Develop/Pingv3.htm#Features",children:"in the official Ping API documentation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the ping API is disabled for all sessions. To enable it, the ",(0,s.jsx)(n.code,{children:"ad.cping=1"})," parameter must be added to your preplay request. If you attempt to call the API without passing in the ",(0,s.jsx)(n.code,{children:"ad.cpingparameter"}),", you can throw off the server's ability to make ad event calls correctly."]}),"\n",(0,s.jsxs)(n.p,{children:["In addition to enabling the API, you must also notify the server of the features you want to support for this viewing session. To specify which features you'd like to enable, you add the",(0,s.jsx)(n.code,{children:"ad.pingf={some value} "}),"parameter to the playback token. The value of the parameter is detailed in the official Ping Documentation."]}),"\n",(0,s.jsxs)(n.p,{children:["Sample playback URL with ",(0,s.jsx)(n.code,{children:"cping"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"https://content.uplynk.com/preplay/cc829785506f46dda4c605abdf65392b.json?ad=adserver&ad.cping=1&ad.pingf=3"})}),"\n",(0,s.jsx)(n.p,{children:'In the THEOplayer API, these features can be activated through a newly devices "ping" object in the source configuration:'}),"\n",(0,s.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"player.source = {\n    sources: [{\n        integration: 'vdms',\n        ...\n        ping: {\n            linearAdData: true,\n            adImpressions: false,\n            freeWheelVideoViews: false\n        }\n        ...\n    }]\n}\n"})}),"\n",(0,s.jsx)(n.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'VerizonMediaPingConfiguration pingConfiguration = new VerizonMediaPingConfiguration.Builder()\n                .linearAdData(true) // Defaults to true if VerizonMediaAssetType is "CHANNEL" or "EVENT", otherwise false.\n                .adImpressions(true) // Defaults to false\n                .freeWheelVideoViews(true) // Defaults to false\n                .build();\n\nVerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder("assetID")\n                .ping(pingConfiguration)\n                .build();\n'})}),"\n",(0,s.jsx)(n.h5,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:'let pingConfiguration = VerizonMediaPingConfiguration(\n            linearAdData: true, // Defaults to true when VerizonMediaAssetType is "event" or "channel", otherwise false\n            adImpressions: true, // Defaults to false\n            freeWheelVideoViews: true) // Defaults to false\n\nlet verizonMediaSource = VerizonMediaSource(assetId: "assetID", ping: pingConfiguration)\n'})}),"\n",(0,s.jsx)(n.h5,{id:"roku-sdk",children:"Roku SDK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-brightscript",children:'m.player.source = {\n  "sources": [\n    {\n      ...\n      ping: {\n        linearAdData: true,\n        adImpressions: false,\n        freeWheelVideoViews: false\n      }\n      ...\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ping"})," object, as well as each separate property, are optional and any not specified will follow the defaults listed"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Live content"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"VOD content"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"linearAdData"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Enabled"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Disabled"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"adImpression"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Enabled"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Disabled"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"freeWheelVideoViews"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Enabled"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Disabled"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Another important note is that the official documentation does not permit certain options for certain content types (e.g.",(0,s.jsx)(n.code,{children:"adImpressions"}),"must not be used with Live content). The player will respect this documentation and will not enable a feature that is not allowed for the current content type, even if explicitly enabled in the",(0,s.jsx)(n.code,{children:"ping"}),"configuration."]}),"\n",(0,s.jsx)(n.p,{children:"If this configuration is not present, or none of the configuration options is activated, no use will be made of the Ping API."}),"\n",(0,s.jsx)(n.h2,{id:"ping-requests",children:"Ping requests"}),"\n",(0,s.jsx)(n.p,{children:"When the Ping API is enabled, THEOplayer will call the Ping URL located at:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{prefix}/session/ping/{sessionID}.json?v=3&pt={currentTime}&ev={event}&ft={freeWheelTime}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{prefix}"}),": Is the prefix URL from the Preplay response."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{sessionID}"}),": Is the session ID from the Preplay response."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{currentTime}"}),": Mandatory parameter. This is the current player time in seconds."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{event}"}),": Is the current Ping event. An event should only be passed when playback starts or when a viewer seeks to a new position.\nValid values are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"start"}),": Pass this event, along ",(0,s.jsx)(n.code,{children:"withpt=0"}),", when the player starts playback. This lets the server know where playback starts and allows the server to fire start events as needed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"seek"}),": Pass this event when a viewer seeks. This resets the timeline to prevent inadvertently firing events for skipped ads."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{freeWheelTime}"}),": Indicates the playback position, in seconds, right before a viewer seeks to a different position in the timeline. This property is mandatory when the freeWheelVideoViews is used."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ping-response",children:"Ping Response"}),"\n",(0,s.jsx)(n.p,{children:"When performed correctly, a Ping request will return a JSON response. THEOplayer will interpret this response according to the following principles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"next_time: A new beacon will be scheduled when the player's currentTime passes this value. In case the value is -1, no further beacons will be scheduled."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"currentBreakEnd: Will be used to update the end time of an ongoing ad-break in case the breakEnd was previously unknown. (Note Verizon Media by default requests 240s of ads in case the break length is unknown and will return all ads in the Ping response.)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ads: Will be interpreted in order to display markers in the timeline as well as expose ad information through the player.verizonMedia.ads property."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ads.breaks.timeOffset will be used in order to determine the start time of the ad break (in seconds)."}),"\n",(0,s.jsxs)(n.li,{children:["ads.breaks.ads will be looped in order to extract the ad information to be exposed in VerizonMediaAd in the THEO API:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ad.duration will serve as duration in VerizonMediaAd (in seconds)"}),"\n",(0,s.jsx)(n.li,{children:"ad.mimeType will serve as mimeType in VerizonMediaAd"}),"\n",(0,s.jsx)(n.li,{children:"ad.apiFramework will serve as apiFramework in VerizonMediaAd"}),"\n",(0,s.jsx)(n.li,{children:"ad.companions will serve as companions inVerizonMediaAd"}),"\n",(0,s.jsx)(n.li,{children:"ad.creative will serve as creative in VerizonMediaAd"}),"\n",(0,s.jsx)(n.li,{children:"ad.width will serve as width in VerizonMediaAd"}),"\n",(0,s.jsx)(n.li,{children:"ad.height will serve as height in VerizonMediaAd"}),"\n",(0,s.jsx)(n.li,{children:"ad.events will serve as events in VerizonMediaAd"}),"\n",(0,s.jsx)(n.li,{children:"ad.fw_parameters will serve as freeWheelParameters in VerizonMediaAd"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"ads.breaks.breakEnd will be used in order to determine the end of the ad break. Note that this property is optional, and the duration of an ad break can be unknown and updated at a later point."}),"\n",(0,s.jsx)(n.li,{children:"ads.breaks.duration will be ignored by the player."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For all ads and breaks added, adbreakbegin, adbreakend, adbegin, adend events will be dispatched. Additionally, when breakEnd gets updated, an updateadbreakevent will be dispatched."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"extensions: Will be ignored by THEOplayer."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"error: Errors will be reported back through the THEOplayer API."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'The raw ping response can be retrieved by adding an event listener for the "pingresponse" event on the player.verizonMedia property.'}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Event"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Description"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Event object"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"pingresponse"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Fired when a Ping response is received."}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"event.response will contain the raw JSON response from the Ping server."})]})})]}),"\n",(0,s.jsx)(n.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"player.verizonMedia.addEventListener('pingresponse', function (event) {\n  console.log(event.response); // Will print the raw Ping response.\n});\n"})}),"\n",(0,s.jsx)(n.h5,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'VerizonMediaPingConfiguration pingConfiguration = new VerizonMediaPingConfiguration.Builder()\n                .linearAdData(true) // Defaults to true if VerizonMediaAssetType is "CHANNEL" or "EVENT", otherwise false.\n                .adImpressions(true) // Defaults to false\n                .freeWheelVideoViews(true) // Defaults to false\n                .build();\n\nVerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder("assetID")\n                .ping(pingConfiguration)\n                .build();\n'})}),"\n",(0,s.jsx)(n.h5,{id:"ios-tvos-sdk-1",children:"iOS (/tvOS) SDK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:'let pingConfiguration = VerizonMediaPingConfiguration(\n            linearAdData: true, // Defaults to true when VerizonMediaAssetType is "event" or "channel", otherwise false\n            adImpressions: true, // Defaults to false\n            freeWheelVideoViews: true) // Defaults to false\n\nlet verizonMediaSource = VerizonMediaSource(assetId: "assetID", ping: pingConfiguration)\n'})}),"\n",(0,s.jsx)(n.h5,{id:"roku-sdk-1",children:"Roku SDK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8" ?>\n<component name="TestScene" extends="Scene">\n    <interface>\n        <function name="pingresponse"/>\n    </interface>\n\n    <script type = "text/brightscript" >\n\n        <![CDATA[\n\n        function Init()\n            m.player = m.top.findNode("TestPlayer")\n            m.player.configuration = {\n              "license": "" \' put the THEOplayer license between apostrophes\n            }\n            m.player.callFunc("addEventListener", m.player.Event.addadbreak, "pingresponse")\n\n            setSource()\n        end function\n\n        function setSource()\n	        ...\n        end function\n\n        function pingresponse(eventData)\n			? "raw Ping response : "; eventData["response"]\n        end function\n        ]]>\n\n    <\/script>\n\n    <children>\n        <THEOplayer id="TestPlayer"/>\n    </children>\n</component>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-224/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/preplay",children:"Verizon Media - Preplay"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/documentation/pr-preview/pr-224/theoplayer/v6/how-to-guides/miscellaneous/verizon-media/ads",children:"Verizon Media - Ads"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var t=i(67294);let s={},r=t.createContext(s);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);