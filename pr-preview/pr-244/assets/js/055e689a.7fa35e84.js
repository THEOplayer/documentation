"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["26717"],{66643:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"api-reference/roku","title":"Roku API Reference","description":"API references for the THEOplayer Roku SDK","source":"@site/theoplayer_versioned_docs/version-v6/api-reference/roku.md","sourceDirName":"api-reference","slug":"/api-reference/roku","permalink":"/documentation/pr-preview/pr-244/theoplayer/v6/api-reference/roku","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/api-reference/roku.md","tags":[],"version":"v6","frontMatter":{"title":"Roku API Reference","description":"API references for the THEOplayer Roku SDK","sidebar_label":"Roku","sidebar_custom_props":{"icon":"\uD83D\uDCFA"}},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-244/theoplayer/v6/how-to-guides/objective-C/introduction"},"next":{"title":"Knowledge base","permalink":"/documentation/pr-preview/pr-244/theoplayer/v6/knowledge-base/"}}'),r=s("85893"),t=s("50065");let d={title:"Roku API Reference",description:"API references for the THEOplayer Roku SDK",sidebar_label:"Roku",sidebar_custom_props:{icon:"\uD83D\uDCFA"}},a="Player API",c={},l=[{value:"Attributes",id:"attributes",level:2},{value:"Source Description",id:"source-description",level:3},{value:"Typed Source",id:"typed-source",level:3},{value:"Content Protection",id:"content-protection",level:3},{value:"DRM Parameters",id:"drm-parameters",level:3},{value:"Verizon Media specific Attributes",id:"verizon-media-specific-attributes",level:2},{value:"Methods",id:"methods",level:2},{value:"Verizon Media specific Methods",id:"verizon-media-specific-methods",level:2},{value:"Events",id:"events",level:2},{value:"Verizon Media specific Events",id:"verizon-media-specific-events",level:2},{value:"ads events:",id:"ads-events",level:3},{value:"ad breaks events:",id:"ad-breaks-events",level:3},{value:"assets events:",id:"assets-events",level:3},{value:"ping events:",id:"ping-events",level:3},{value:"preplay events:",id:"preplay-events",level:3}];function h(e){let n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"player-api",children:"Player API"})}),"\n",(0,r.jsx)(n.p,{children:"The attributes, methods and events."}),"\n",(0,r.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Access Permission"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"audioTracks"}),(0,r.jsx)(n.td,{children:"array of associative arrays"}),(0,r.jsx)(n.td,{children:"[]"}),(0,r.jsx)(n.td,{children:"read"}),(0,r.jsx)(n.td,{children:"Provides information about audio tracks detected automatically in video. Each Associative array has the following fields: id - track identifier, label - track name, language - track language, enabled - true if track is current track"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"controls"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"read,write"}),(0,r.jsxs)(n.td,{children:["Allows to enable or disable player controls ( ",(0,r.jsx)(n.code,{children:"true"})," to show controls, ",(0,r.jsx)(n.code,{children:"false"})," to hide controls)."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"currentTime"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"read,write"}),(0,r.jsx)(n.td,{children:"Current timestamp of video."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"duration"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"read"}),(0,r.jsx)(n.td,{children:"Duration of video."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ended"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"read"}),(0,r.jsx)(n.td,{children:"Whether playback of the media is ended."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"loop"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"read,write"}),(0,r.jsx)(n.td,{children:"Whether playback of the media is looped."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paused"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"read"}),(0,r.jsx)(n.td,{children:"Whether the player is paused."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"poster"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"read,write"}),(0,r.jsx)(n.td,{children:"The poster of the current source."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"seeking"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"read"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"true"})," when player is seeking, ",(0,r.jsx)(n.code,{children:"false"})," when player is not seeking now."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:"Source Description"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"read,write"}),(0,r.jsx)(n.td,{children:"Describes source of current video."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"src"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"read"}),(0,r.jsx)(n.td,{children:"The current URL of the media resource."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"textTracks"}),(0,r.jsx)(n.td,{children:"array of associative arrays"}),(0,r.jsx)(n.td,{children:"[]"}),(0,r.jsx)(n.td,{children:"read"}),(0,r.jsx)(n.td,{children:"Provides information about Closed Captions tracks detected automatically in video. Each Associative array has the following fields: id - track identifier, label - track description, language - track language,mode - determines track state, available values: disabled, showing, hidden"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"source-description",children:"Source Description"}),"\n",(0,r.jsxs)(n.p,{children:["The following key/value pairs are supported on the ",(0,r.jsx)(n.code,{children:"source"})," attribute of the ",(0,r.jsx)(n.code,{children:"THEOsdk:THEOplayer"})," :"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sources"}),(0,r.jsx)(n.td,{children:"roArray"}),(0,r.jsx)(n.td,{children:"An array of Typed Sources. When specifying multiple source descriptions, the sources attribute will be interpreted as a playlist where the first typed source will play first and subsequent sources will play when its preceding typed source has ended."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"drmHttpAgentHeaders"}),(0,r.jsx)(n.td,{children:"roAssociativeArray"}),(0,r.jsx)(n.td,{children:"A key-value dictionary that contains additional HTTP headers that will be sent for DRM key/license requests. The keys represent the HTTP header names and the values represent their corresponding values."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"typed-source",children:"Typed Source"}),"\n",(0,r.jsxs)(n.p,{children:["The following key/value pairs are supported on the ",(0,r.jsx)(n.code,{children:"sources"})," attribute of a Source Description:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:(0,r.jsx)(n.strong,{children:"Name"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"src"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The URL of the media resource."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"type"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["The content type (MIME type) of the media resource. Possible values are ",(0,r.jsx)(n.code,{children:"application/dash+xml"})," and ",(0,r.jsx)(n.code,{children:"application/x-mpegURL"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"contentProtection"}),(0,r.jsx)(n.td,{children:"Content Protection"}),(0,r.jsx)(n.td,{children:"Parameters for DRM playback"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"SDBifUrl"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'"Base Index Frames" URL for SD trick mode.'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"HDBifUrl"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'"Base Index Frames" URL for HD trick mode.'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"FHDBifUrl"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'"Base Index Frames" URL for FHD trick mode.'})]})]})]}),"\n",(0,r.jsx)(n.p,{children:'"Base Index Frames" or BIF, is an archive file format that contains a set of still images, also known as "trick play thumbnails", supporting enhanced fast-forward and rewind modes during video playback.'}),"\n",(0,r.jsx)(n.h3,{id:"content-protection",children:"Content Protection"}),"\n",(0,r.jsxs)(n.p,{children:["The following key/value pairs are supported on the ",(0,r.jsx)(n.code,{children:"contentProtection"})," attribute of a Typed Source:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"integration"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"Optional attribute."})," The key system the player should use. Possible values are ",(0,r.jsx)(n.code,{children:"playready"})," , ",(0,r.jsx)(n.code,{children:"widevine"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"licenseUrl"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The licence acquisition URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"certificate"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The actual certificate string for Widevine purposes, which must be obtained out-of-band (OOB) by the channel. Leave this unset unless Widevine is used for DRM."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"drmParams"}),(0,r.jsx)(n.td,{children:"DRM Parameters"}),(0,r.jsxs)(n.td,{children:["An alternative way to set parameters for DRM playback. ",(0,r.jsxs)(n.em,{children:["This attribute is only used when the ",(0,r.jsx)(n.code,{children:"integration"})," attribute is not set."]})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example DRM source with VuDRM specific headers"})}),"\n",(0,r.jsxs)(n.p,{children:["To play videos protected using VUDRM, you need to supply a token. Replace the token ",(0,r.jsx)(n.code,{children:"vualto-demo|2018-06-19T09:18:24Z|YSnJPmEceo"})," in the code below with your own token as well as the associated values of the keys ",(0,r.jsx)(n.code,{children:"src"})," and ",(0,r.jsx)(n.code,{children:"licenseUrl"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'vuDrmSource = {\n  sources: [\n    {\n      src: "https://d1chyo78gdexn4.cloudfront.net/vualto-demo/big-buck-bunny/big-buck-bunny.ism/manifest.mpd"\n      type: "application/dash+xml"\n      contentProtection: {\n        integration: "widevine"\n        licenseUrl: "https://widevine-proxy.drm.technology/proxy"\n      }\n    }\n  ]\n  drmHttpAgentHeaders: {\n    "x-vudrm-token": "vualto-demo|2018-06-19T09:18:24Z|YSnJPmEceo"\n    "Content-Type": "application/json"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"drm-parameters",children:"DRM Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["The following key/value pairs are supported on the ",(0,r.jsx)(n.code,{children:"drmParams"})," attribute of a Content Protection:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"KeySystem"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'"playready" or "widevine". This value is case-insensitive. The default is an empty string.'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"licenseRenewURL"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"A URL location for sending license renewal requests. If not specified, the Roku OS will send renewal requests to the URL specified in the licenseServerURL. This only works with Widevine."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"licenseServerURL"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"A URL location of a license server. This URL may include CGI parameters."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"serializationURL"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"A server address used for device provisioning"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"serviceCert"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The actual certificate string for Widevine purposes, which must be obtained out-of-band (OOB) by the channel. Leave this unset unless Widevine is used for DRM."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lic_acq_window"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["The maximum amount of time (in milliseconds) that a channel waits before rotating its Widevine DRM keys. The channel can generate a random wait time between 0 and the value specified in the ",(0,r.jsx)(n.strong,{children:"lic_acq_window"})," field, and use the random wait time to instruct when the Video node should make its next Widevine license request. ",(0,r.jsx)(n.em,{children:"Available since Roku OS 10.5"})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"verizon-media-specific-attributes",children:"Verizon Media specific Attributes"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"name"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ads"}),(0,r.jsx)(n.td,{children:"verizonMediaAds"}),(0,r.jsx)(n.td,{children:"Verizon media ads API, contains ads and ad breaks information"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"assets"}),(0,r.jsx)(n.td,{children:"array of verizonMediaAsset"}),(0,r.jsx)(n.td,{children:"Verizon media assets API, contains assets information"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"addEventListener"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destroy"}),(0,r.jsx)(n.td,{children:"Destroy the player."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pause"}),(0,r.jsx)(n.td,{children:"Pause playback."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"play"}),(0,r.jsx)(n.td,{children:"Start playback."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"removeEventListener"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"setCopyGuardManagementSystem(cgms as Integer)"}),(0,r.jsxs)(n.td,{children:["Sets Copy Guard Management System. Acceptable Values: ",(0,r.jsx)(n.code,{children:"0"})," - No Copy Restriction,",(0,r.jsx)(n.code,{children:"1"})," - Copy No More,",(0,r.jsx)(n.code,{children:"2"})," - Copy Once Allowed,",(0,r.jsx)(n.code,{children:"3"})," - No Copying Permitted."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"setDestinationRectangle(rect {w,h,x,y} as roAssociativeArray)"}),(0,r.jsx)(n.td,{children:"Sets width, height, x, y of player."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"setDestinationRectangle(w as Integer, h as Integer, x as Integer, y as Integer)"}),(0,r.jsx)(n.td,{children:"Sets width, height, x, y of player."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"setMaxVideoResolution(width as Integer, height as Integer)"}),(0,r.jsx)(n.td,{children:"Sets maximum video resolution."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"verizon-media-specific-methods",children:"Verizon Media specific Methods"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"skipAd"}),(0,r.jsx)(n.td,{children:"Skips Ad break if it is possible. This method is assigned directly to Player, due to roku specific architecture"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,r.jsx)(n.p,{children:"The event consists of:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"date (timestamp) of occurrence"}),"\n",(0,r.jsx)(n.li,{children:"type (string) of the event"}),"\n",(0,r.jsx)(n.li,{children:"extra data"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"There are several player events being emitted."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"addedaudiotrack"}),": Fired when audio track has been added"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"addedtexttrack"}),": Fired when text track has been added"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"bitratechange"}),": Fired when the bitrate changes, the extra data emitted is the bitrate"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"canplay"}),": Fired when the player can resume playback of the media data, the extra data emitted is the currentTime"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"canplaythrough"}),": Fired when the player can resume playback of the media data and buffering is unlikely, the extra data emitted is the currentTime"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"destroy"}),": Fired when the player is destroyed, there is no extra data emitted along"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"durationchange"}),": Fired when the duration changes, the extra data emitted is the duration"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"emptied"}),": Fired when the player's source is cleared, there is no extra data emitted along"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ended"}),": Fired when playback has stopped because the end of the media resource was reached, the extra data emitted is the currentTime"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"error"}),": Fired when an error occurs, the extra data emitted is an associative array e.g.:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'{\n    "error": "<string:error>",\n    "errorObject": {\n        "code": <integer:code>,\n        "message": <string:message>\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"loadeddata"}),": Fired when the player can render the media data at the current playback position for the first time, the extra data emitted is the currentTime"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"loadedmetadata"}),": Fired when the player determines the duration and dimensions of the media resource, the extra data emitted is the currentTime"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pause"}),': Fired when the "paused" changes to true, the extra data emitted is the currentTime']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"play"}),': Fired when the "paused" changes to false, the extra data emitted is the currentTime']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"playing"}),": Fired when playback is ready to start after having been paused or delayed due to lack of media data, the extra data emitted is the currentTime"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"seeked"}),': Fired when the "seeking" changes to false after the current playback position was changed, the extra data emitted is the currentTime']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"seeking"}),': Fired when "seeking" changes to true, and the player has started seeking to a new position, the extra data emitted is the currentTime']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sourcechange"}),": Fired when the player's source changes, the extra data emitted is an associative array e.g.:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'{\n    "source": {\n        "sources": [\n            {\n                "liveOffset": 4,\n                "nativeUiRendering": false,\n                "contentProtection": {\n                    "drmParams": {\n                        KeySystem: "widevine"\n                        licenseServerURL: "https://example.com/license"\n                    }\n                },\n                "src": https://example.com/stream.mpd,\n                "type": "dash"\n            }\n        ]\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"timeupdate"}),": Fired when the current playback position changed as part of normal playback or in an especially interesting way, for example discontinuously, the extra data emitted is the currentTime"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"verizon-media-specific-events",children:"Verizon Media specific Events"}),"\n",(0,r.jsx)(n.p,{children:"all events contain following data:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"date"})," (timestamp) of occurrence"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"})," (string) of the event"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ads-events",children:"ads events:"}),"\n",(0,r.jsxs)(n.p,{children:["all ads events contain additional field ",(0,r.jsx)(n.code,{children:"ad"})," of type VerizonMediaAd e.g.:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'{\n    apiFramework: invalid\n    companions: [...]\n    creative: "b1dcbf39be7941338d91e0a68664875a"\n    duration: 15.0694\n    endTime: 431.729\n    events: {...}\n    extensions: [...]\n    freeWheelParameters: {...}\n    height: 0\n    mimeType: "uplynk/m3u8"\n    startTime: 416.66\n    width: 0\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"adbegin "}),": fired when an ad begins"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"adcomplete"}),": fired when ad is completed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"adend"}),": fired when ad ends"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"removead"}),": fired when ad is removed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"adfirstquartile"}),": fired when the ad reaches the first quartile"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"admidpoint"}),": fired when the ad reaches the midpoint"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"adthirdquartile"}),": fired when the ad reaches the third quartile"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ad-breaks-events",children:"ad breaks events:"}),"\n",(0,r.jsxs)(n.p,{children:["all ads events contain additional field ",(0,r.jsx)(n.code,{children:"adBreak"})," of type VerizonMediaAdBreak e.g.:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'{\n    ads: [\n	    {\n		    apiFramework: invalid\n		    companions: [...]\n		    creative: "b813270206374fd0bc6ebafc6d60c551"\n		    duration: 15.0462\n		    endTime: 431.706\n		    events: {...}\n		    extensions: [...]\n		    freeWheelParameters: {...}\n		    height: 0\n		    mimeType: "uplynk/m3u8"\n		    startTime: 416.66\n		    width: 0\n		}\n	]\n    duration: 30.0692\n    endTime: 446.729\n    skipOffset: -1\n    startTime: 416.66\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"adbreakbegin"}),": fired when ad break begins"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"adbreakend"}),": fired when ad break ends"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"updateadbreak"}),": fired when the ad break is updated"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"adbreakskip"}),": fired when ad break is skipped"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"addadbreak"}),": fired when ad break is added"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"removeadbreak"}),": fired when ad break is removed"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"assets-events",children:"assets events:"}),"\n",(0,r.jsxs)(n.p,{children:["all assets events contain additional field ",(0,r.jsx)(n.code,{children:"asset"})," of type VerizonMediaAsset e.g.:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'{\n    assetId: "41afc04d34ad4cbd855db52402ef210e"\n    audioOnly: 0\n    boundaryDetails: invalid\n    defaultPosterUrl: "https://x-default-stgec.uplynk.com/ausw/slices/41a/fb3a4cb9965b46678fa101477ffad8fb/41afc04d34ad4cbd855db52402ef210e/00000014.jpg"\n    description: "Yahoo News - Unfiltered: GWAR Halloween - 3/1/19"\n    duration: 415.659\n    endTime: 415.659\n    error: false\n    externalId: ""\n    hasAdultLanguage: false\n    hasDrugSituations: false\n    hasSexualSituations: false\n    hasViolence: false\n    isAd: false\n    maxSlice: 101\n    metadata: invalid\n    movieRating: -1\n    ownerId: "fb3a4cb9965b46678fa101477ffad8fb"\n    posterUrl: "https://x-default-stgec.uplynk.com/ausw/slices/41a/fb3a4cb9965b46678fa101477ffad8fb/41afc04d34ad4cbd855db52402ef210e/00000014.jpg"\n    rates: [\n	    209\n	    399\n	    729\n	    1620\n	    2535\n	]\n    sliceDuration: 4.096\n    startTime: 0\n    thumbnailResolutions: [\n	    {\n		    bh: 128\n		    bw: 128\n		    height: 72\n		    prefix: ""\n		    width: 128\n		}\n	]\n    thumbPrefix: "https://x-default-stgec.uplynk.com/ausw/slices/41a/fb3a4cb9965b46678fa101477ffad8fb/41afc04d34ad4cbd855db52402ef210e/"\n    tvRating: -1\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"addasset"}),": fired when asset has been added"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"assetinforesponse"}),": fired when an asset info response is received. This event does not contain ",(0,r.jsx)(n.code,{children:"asset"})," field but ",(0,r.jsx)(n.code,{children:"response"})," VerizonMediaAssetInfoResponse."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"removeasset"}),": fired when asset has been removed"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ping-events",children:"ping events:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pingerror"}),": fired when a Ping error has been received. Contains additional ",(0,r.jsx)(n.code,{children:"error"})," (string) field."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pingresponse"}),": fired when a Ping response is received. Contains additional ",(0,r.jsx)(n.code,{children:"response"})," of type VerizonMediaPingResponse field e.g.:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'{\n    ad_data: <Component: roAssociativeArray>\n    aspect_ratio: 1.77778\n    asset: "bcf7d78c4ff94c969b2668a6edc64278"\n    audio_only: 0\n    boundary_details: invalid\n    default_poster_url: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/00000014.jpg"\n    desc: "Build Series NYC - Allen Leech - 10/31/18"\n    duration: 1178.03\n    error: 0\n    external_id: ""\n    is_ad: 0\n    max_slice: 287\n    meta: <Component: roAssociativeArray>\n    movie_rating: -1\n    owner: "fb3a4cb9965b46678fa101477ffad8fb"\n    poster_url: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/00000014.jpg"\n    rates: <Component: roArray>\n    rating_flags: 0\n    slice_dur: 4.096\n    storage_partitions: <Component: roArray>\n    thumb_prefix: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/"\n    thumbs: <Component: roArray>\n    tv_rating: -1\n}\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"preplay-events",children:"preplay events:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"preplayresponse"}),": fired when a Ping response is received. Contains additional ",(0,r.jsx)(n.code,{children:"response"})," of type VerizonMediaPreplayResponse field e.g.:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-brightscript",children:'{\n    ad_data: {...}\n    aspect_ratio: 1.77778\n    asset: "bcf7d78c4ff94c969b2668a6edc64278"\n    audio_only: 0\n    boundary_details: invalid\n    default_poster_url: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/00000014.jpg"\n    desc: "Build Series NYC - Allen Leech - 10/31/18"\n    duration: 1178.03\n    error: 0\n    external_id: ""\n    is_ad: 0\n    max_slice: 287\n    meta: {...}\n    movie_rating: -1\n    owner: "fb3a4cb9965b46678fa101477ffad8fb"\n    poster_url: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/00000014.jpg"\n    rates: [...]\n    rating_flags: 0\n    slice_dur: 4.096\n    storage_partitions: [...]\n    thumb_prefix: "https://x-default-stgec.uplynk.com/ausw/slices/bcf/fb3a4cb9965b46678fa101477ffad8fb/bcf7d78c4ff94c969b2668a6edc64278/"\n    thumbs: [...]\n    tv_rating: -1\n}\n\n'})})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var i=s(67294);let r={},t=i.createContext(r);function d(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);