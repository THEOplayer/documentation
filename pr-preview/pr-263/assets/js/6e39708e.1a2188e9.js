"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["71433"],{344:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"connectors/roku/comscore/API-reference","title":"Comscore Connector API Reference","description":"The attributes, methods and events for the THEOComscoreConnector.","source":"@site/theoplayer/connectors/roku/comscore/02-API-reference.mdx","sourceDirName":"connectors/roku/comscore","slug":"/connectors/roku/comscore/API-reference","permalink":"/documentation/pr-preview/pr-263/theoplayer/connectors/roku/comscore/API-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/connectors/roku/comscore/02-API-reference.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"API reference","sidebar_custom_props":{"icon":"*\uFE0F\u20E3"}},"sidebar":"roku","previous":{"title":"Getting started","permalink":"/documentation/pr-preview/pr-263/theoplayer/connectors/roku/comscore/getting-started-comscore-connector"},"next":{"title":"API references","permalink":"/documentation/pr-preview/pr-263/theoplayer/api-reference/roku"}}'),o=n("85893"),s=n("50065");let c={sidebar_label:"API reference",sidebar_custom_props:{icon:"*\uFE0F\u20E3"}},a="Comscore Connector API Reference",i={},d=[{value:"Attributes",id:"attributes",level:2},{value:"Methods",id:"methods",level:2},{value:"Comscore Config",id:"comscore-config",level:3},{value:"Content Metadata",id:"content-metadata",level:3},{value:"THEOComscoreReadableMetadata",id:"theocomscorereadablemetadata",level:4},{value:"THEOComscoreTagMetadata",id:"theocomscoretagmetadata",level:4},{value:"Sending Ticks",id:"sending-ticks",level:3}];function l(e){let t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"comscore-connector-api-reference",children:"Comscore Connector API Reference"})}),"\n",(0,o.jsx)(t.p,{children:"The attributes, methods and events for the THEOComscoreConnector."}),"\n",(0,o.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Access Permission"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"id"}),(0,o.jsx)(t.td,{children:"string"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"read,write"}),(0,o.jsx)(t.td,{children:"The id of the node."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"MEDIA_TYPES"}),(0,o.jsx)(t.td,{children:"associativeArray"}),(0,o.jsx)(t.td,{children:"Comscore Media Types"}),(0,o.jsx)(t.td,{children:"read"}),(0,o.jsx)(t.td,{children:"Constant with the Comscore media type enums."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"AD_TYPES"}),(0,o.jsx)(t.td,{children:"associativeArray"}),(0,o.jsx)(t.td,{children:"Comscore Ad Types"}),(0,o.jsx)(t.td,{children:"read"}),(0,o.jsx)(t.td,{children:"Constant with the Comscore ad type enums."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Method"}),(0,o.jsx)(t.th,{children:"Params"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"configure"}),(0,o.jsx)(t.td,{children:"player: THEOplayer, configuration: THEOConnectorConfiguration, metadata: (optional) THEOComscoreReadableMetadata or THEOComscoreTagMetadata"}),(0,o.jsx)(t.td,{children:"Add a player to monitor, configure the Comscore SDK, and also pass in optional metadata for your content."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"destroy"}),(0,o.jsx)(t.td,{children:"none"}),(0,o.jsx)(t.td,{children:"Destroy the connector. It also ends the current session, if any."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"endSession"}),(0,o.jsx)(t.td,{children:"none"}),(0,o.jsx)(t.td,{children:"End the current Comscore session, but do not destroy the connector."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"update"}),(0,o.jsx)(t.td,{children:"metadata: THEOComscoreReadableMetadata or THEOComscoreTagMetadata"}),(0,o.jsx)(t.td,{children:"Updates the content metadata for the current session."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"sendTick"}),(0,o.jsx)(t.td,{children:"none"}),(0,o.jsxs)(t.td,{children:["Sends a tick to Comscore. This is only needed if you do not implement the ",(0,o.jsx)(t.code,{children:"tccTick"})," field in your main event loop."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"startSession"}),(0,o.jsx)(t.td,{children:"mediaType: string, metadata: (optional) THEOComscoreReadableMetadata or THEOComscoreTagMetadata"}),(0,o.jsxs)(t.td,{children:["Starts a Comscore streaming session with the specified media type, and optionally applies the content metadata. If not passing content metadata, you will need to add it separately with the ",(0,o.jsx)(t.code,{children:"update"})," method before calling ",(0,o.jsx)(t.code,{children:"startSession"})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"reportPlaybackEvent"}),(0,o.jsx)(t.td,{children:"eventType: string, eventDetail: AssociativeArray"}),(0,o.jsx)(t.td,{children:"Reports a playback event with the associated data to Comscore."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"reportPlaybackFailed"}),(0,o.jsx)(t.td,{children:"errorMessage: string"}),(0,o.jsx)(t.td,{children:"Reports a playback failure to Comscore."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"setAdInfo"}),(0,o.jsx)(t.td,{children:"adInfo: AssociativeArray"}),(0,o.jsx)(t.td,{children:"Sets the supplied ad info to Comscore. adInfo should be in the form of ComscoreContentInfo"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"setContentInfo"}),(0,o.jsx)(t.td,{children:"contentMetadata: AssociativeArray"}),(0,o.jsx)(t.td,{children:"Sets or updates the content metadata for the current session. Partials are supported and will be merged with the existing content metadata. See below for the schema of content metadata."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"startSession"}),(0,o.jsx)(t.td,{children:"contentMetadata: AssociativeArray"}),(0,o.jsx)(t.td,{children:"Starts a Comscore session with the supplied content metadata. See below for the schema of content metadata."})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"comscore-config",children:"Comscore Config"}),"\n",(0,o.jsx)(t.p,{children:"The configuration the Comscore connector is the THEOConnectorConfiguration interface."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-brightscript",children:'configuration = {\n	publisherId: "MY_PUBLISHER_ID",\n	publisherSecret: "MY_PUBLISHER_SECRET",\n	applicationName: "MY_APPLICATION_NAME"\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"applicationName"})," property is optional. If omitted, Comscore will automatically collect it from the manifest file."]}),"\n",(0,o.jsx)(t.p,{children:"To get your publisher ID and secret, log into your Comscore account. Go to the Direct dashboard, and switch to the Mobile App tab. Then click the Get Tag button, and a dialog should show with the ID and secret in it."}),"\n",(0,o.jsx)(t.h3,{id:"content-metadata",children:"Content Metadata"}),"\n",(0,o.jsxs)(t.p,{children:["Content metadata should be an AssociativeArray following Comscore's schema for streaming tags. However, the THEOComscoreConnector also will accept a more human readable format. These are in the THEOComscoreReadableMetadata and THEOComscoreTagMetadata interfaces. NOTE: if you omit a string value, replace it with ",(0,o.jsx)(t.code,{children:'"*null"'}),", which is the value requested by Comscore for empty fields."]}),"\n",(0,o.jsx)(t.h4,{id:"theocomscorereadablemetadata",children:"THEOComscoreReadableMetadata"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-brightscript",children:'comscoreMetadata = {\n	adLoadFlag: false,\n	assetId: "myAssetId",\n	c3: "Arbitrary C3 value",\n	c4: "*null",\n	c6: "*null",\n	clipLength: 600,\n	completeEpisodeFlag: true,\n	contentGenre: "Sports",\n	digitalAirDate: "2025-03-04",\n	episodeNumber: "59",\n	episodeSeasonNumber: "5",\n	episodeTitle: "The Game Last Night",\n	programTitle: "The Sports Show",\n	publisherBrandName: "Sports Publisher Network",\n	stationTitle: "KXYZ",\n	tvAirDate: "2025-03-04"\n}\n'})}),"\n",(0,o.jsx)(t.h4,{id:"theocomscoretagmetadata",children:"THEOComscoreTagMetadata"}),"\n",(0,o.jsxs)(t.p,{children:["NOTE: all values must be strings for this object, with Booleans being represented as ",(0,o.jsx)(t.code,{children:'"0"'})," and ",(0,o.jsx)(t.code,{children:'"1"'}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-brightscript",children:'comscoreMetadata = {\n	ns_st_ia: "0",\n	ns_st_ci: c3.cm.id,\n	c3: "Arbitrary C3 value",\n	c4: "*null",\n	c6: "*null",\n	ns_st_cl: "600",\n	ns_st_ce: "1",\n	ns_st_cg: "Sports",\n	ns_st_ddt: "2025-03-04",\n	ns_st_en: "59",\n	ns_st_sn: "5",\n	ns_st_ep: "The Game Last Night",\n	ns_st_pr: "The Sports Show",\n	ns_st_pu: "Sports Publisher Network",\n	ns_st_st: "KXYZ",\n	ns_st_tdt: "2025-03-04"\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"sending-ticks",children:"Sending Ticks"}),"\n",(0,o.jsxs)(t.p,{children:["Comscore wants a tick to be sent to it on every run of the main event loop. You can do this manually by calling the ",(0,o.jsx)(t.code,{children:"sendTick"})," method on the THEOComscoreConnector:\n",(0,o.jsx)(t.code,{children:'m.comscoreConnector.callFunc("sendTick")'})]}),"\n",(0,o.jsxs)(t.p,{children:["However, if you want to have the connector automatically send the tick for you, in your ",(0,o.jsx)(t.code,{children:"main.brs"})," file, add an integer field to the global node called ",(0,o.jsx)(t.code,{children:"tccTick"}),". Set it equal to 0 and then increment it on each run of your event loop. Note that the ",(0,o.jsx)(t.code,{children:"wait"})," line will make it run every 1000 milliseconds."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-brightscript",children:'m.global.addField("tccTick", "integer", false)\nm.global.tccTick = 0\n\nwhile true\n	m.global.tccTick = m.global.tccTick + 1\n	msg = wait(1000, m.port)\n	msgType = type(msg)\n	if msgType = "roSGScreenEvent"\n		if msg.isScreenClosed() then return\n	end if\nend while\n'})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return c}});var r=n(67294);let o={},s=r.createContext(o);function c(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);