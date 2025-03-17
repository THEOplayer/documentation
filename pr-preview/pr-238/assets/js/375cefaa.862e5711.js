"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["49521"],{99085:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"connectors/roku/conviva/API-reference","title":"Conviva Connector API reference","description":"The attributes, methods and events for the THEOConvivaConnector.","source":"@site/theoplayer/connectors/roku/conviva/02-API-reference.mdx","sourceDirName":"connectors/roku/conviva","slug":"/connectors/roku/conviva/API-reference","permalink":"/documentation/pr-preview/pr-238/theoplayer/connectors/roku/conviva/API-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/connectors/roku/conviva/02-API-reference.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"API reference","sidebar_custom_props":{"icon":"*\uFE0F\u20E3"}},"sidebar":"roku","previous":{"title":"Getting started","permalink":"/documentation/pr-preview/pr-238/theoplayer/connectors/roku/conviva/getting-started-conviva-connector"},"next":{"title":"Comscore","permalink":"/documentation/pr-preview/pr-238/theoplayer/connectors/roku/comscore"}}'),o=n("85893"),s=n("50065");let i={sidebar_label:"API reference",sidebar_custom_props:{icon:"*\uFE0F\u20E3"}},a="Conviva Connector API reference",c={},d=[{value:"Attributes",id:"attributes",level:2},{value:"Methods",id:"methods",level:2},{value:"CDN Monitoring Config",id:"cdn-monitoring-config",level:3},{value:"Content Metadata",id:"content-metadata",level:3}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"conviva-connector-api-reference",children:"Conviva Connector API reference"})}),"\n",(0,o.jsx)(t.p,{children:"The attributes, methods and events for the THEOConvivaConnector."}),"\n",(0,o.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Access Permission"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"id"}),(0,o.jsx)(t.td,{children:"string"}),(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"read, write"}),(0,o.jsx)(t.td,{children:"The ID of this node"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Method"}),(0,o.jsx)(t.th,{children:"Params"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"configure"}),(0,o.jsx)(t.td,{children:"player: THEOplayer, customerKey: string, gatewayUrl: string (Optional), debug: boolean (Optional)"}),(0,o.jsxs)(t.td,{children:["Configure the Conviva SDK for use. The ",(0,o.jsx)(t.code,{children:"gatewayUrl"})," param is the URL for the Touchstone service for use in validating your Conviva integration. Omit this for production builds."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"destroy"}),(0,o.jsx)(t.td,{children:"none"}),(0,o.jsx)(t.td,{children:"Destroy the connector. It also ends the current session, if any."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"endSession"}),(0,o.jsx)(t.td,{children:"none"}),(0,o.jsx)(t.td,{children:"End the current Conviva session, but do not destroy the connector."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"getContentInfo"}),(0,o.jsx)(t.td,{children:"none"}),(0,o.jsx)(t.td,{children:"Returns the content metadata for the current session."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"monitorCdnChanges"}),(0,o.jsx)(t.td,{children:"mappings: CDNMonitoringConfig, defaultCdn: string (optional)"}),(0,o.jsx)(t.td,{children:"Updates the CDN monitoring settings. If passed a CDN monitoring config (see below), it will begin monitoring the downloaded segments for changes in CDN. This will update the defaultReportingResource for the current session if a CDN change is detected If passed invalid as the first parameter, it will stop the monitoring and use any string passed as the second param as the defaultReportingResource."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"reportPlaybackEvent"}),(0,o.jsx)(t.td,{children:"eventType: string, eventDetail: AssociativeArray"}),(0,o.jsx)(t.td,{children:"Reports a playback event with the associated data to Conviva."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"reportPlaybackFailed"}),(0,o.jsx)(t.td,{children:"errorMessage: string"}),(0,o.jsx)(t.td,{children:"Reports a playback failure to Conviva."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"setAdInfo"}),(0,o.jsx)(t.td,{children:"adInfo: AssociativeArray"}),(0,o.jsx)(t.td,{children:"Sets the supplied ad info to Conviva. adInfo should be in the form of ConvivaContentInfo"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"setContentInfo"}),(0,o.jsx)(t.td,{children:"contentMetadata: AssociativeArray"}),(0,o.jsx)(t.td,{children:"Sets or updates the content metadata for the current session. Partials are supported and will be merged with the existing content metadata. See below for the schema of content metadata."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"startSession"}),(0,o.jsx)(t.td,{children:"contentMetadata: AssociativeArray"}),(0,o.jsx)(t.td,{children:"Starts a Conviva session with the supplied content metadata. See below for the schema of content metadata."})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"cdn-monitoring-config",children:"CDN Monitoring Config"}),"\n",(0,o.jsx)(t.p,{children:"The configuration for CDN monitoring should be an AssociativeArray with keys that are the name of the CDN and values that are arrays of strings to search for in segment URLs."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-brightscript",children:'cdnMappings = {\n	akamai: ["akamaized.net"],\n	theo: ["dev.theoads.live", "cdn.theoplayer.com"]\n	level3: ["llnw.com"]\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Passing a config as the only param will start CDN change monitoring with the provided configuration, or update the config if it is already started.\n",(0,o.jsx)(t.code,{children:'m.theoConvivaConnector.callFunc("monitorCDNChanges", cdnMappings)'}),"\nHowever, if you want to stop CDN change monitoring, pass ",(0,o.jsx)(t.code,{children:"invalid"})," as the first parameter, and the string you want to use for the defaultReportingResource as the second parameter.\n",(0,o.jsx)(t.code,{children:'m.theoConvivaConnector.callFunc("monitorCDNChanges", invalid, "theo")'})]}),"\n",(0,o.jsx)(t.h3,{id:"content-metadata",children:"Content Metadata"}),"\n",(0,o.jsxs)(t.p,{children:["Content metadata should be an AssociativeArray following ",(0,o.jsx)(t.a,{href:"https://pulse.conviva.com/learning-center/content/sensor_developer_center/sensor_integration/roku/roku_stream_sensor.htm#PredefinedVideoandContentMetadata",children:"Conviva's schema"}),".\nHowever, the THEOConviaConnector does provide a shortcut for c3 data. You may specify the c3 data by its full name:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-brightscript",children:'contentMetadata = {\n	customMetadata: {\n		myCustomTag: "Value",\n		"c3.cm.contentType": "DVR",\n		"c3.cm.name": "CMS"\n	}\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"However, we also support using an object notation:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-brightscript",children:'contentMetadata = {\n	customMetadata: {\n		myCustomTag: "Value",\n		c3: {\n			cm: {\n				contentType: "DVR",\n				name: "CMS"\n			}\n		}\n	}\n}\n'})})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var r=n(67294);let o={},s=r.createContext(o);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);