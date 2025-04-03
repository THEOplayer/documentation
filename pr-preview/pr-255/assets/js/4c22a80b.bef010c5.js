"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["65726"],{73689:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"how-to-guides/analytics/mediamelon-smartsight","title":"MediaMelon SmartSight","description":"MediaMelon SmartSight is an analytics service maintained by MediaMelon. THEOplayer offers a pre-integration for this solution.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/02-analytics/08-mediamelon-smartsight.md","sourceDirName":"how-to-guides/02-analytics","slug":"/how-to-guides/analytics/mediamelon-smartsight","permalink":"/documentation/pr-preview/pr-255/theoplayer/v4/how-to-guides/analytics/mediamelon-smartsight","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/02-analytics/08-mediamelon-smartsight.md","tags":[],"version":"v4","sidebarPosition":8,"frontMatter":{},"sidebar":"roku","previous":{"title":"Adobe Analytics","permalink":"/documentation/pr-preview/pr-255/theoplayer/v4/how-to-guides/analytics/adobe-analytics"},"next":{"title":"Wicket Labs","permalink":"/documentation/pr-preview/pr-255/theoplayer/v4/how-to-guides/analytics/wicket-labs"}}'),r=n("85893"),s=n("50065");let l={},a="MediaMelon SmartSight",o={},d=[{value:"SDKs",id:"sdks",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connecting MediaMelon to THEOplayer",id:"connecting-mediamelon-to-theoplayer",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Related links",id:"related-links",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"mediamelon-smartsight",children:"MediaMelon SmartSight"})}),"\n",(0,r.jsx)(t.p,{children:"MediaMelon SmartSight is an analytics service maintained by MediaMelon. THEOplayer offers a pre-integration for this solution."}),"\n",(0,r.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Through CSS/JavaScript injection*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Through CSS/JavaScript injection*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"?"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"?"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Unverified"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"*CSS/JavaScript injection in the project is only possible with the legacy mobile SDKs (up to 4.12.X)."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"A valid THEOplayer license."}),"\n",(0,r.jsxs)(t.li,{children:["A MediaMelon SDK ",(0,r.jsx)(t.code,{children:"mmsmartstreaming-theo-sdk.js"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["A MediaMelon Customer ID (",(0,r.jsx)(t.strong,{children:"Note:"})," If you do not know your Customer ID contact MediaMelon at ",(0,r.jsx)(t.a,{href:"mailto:support@mediamelon.com",children:"support@mediamelon.com"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"connecting-mediamelon-to-theoplayer",children:"Connecting MediaMelon to THEOplayer"}),"\n",(0,r.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 1: Add THEOplayer & MediaMelon SDK"}),"\nInclude the following scripts in the web page (before THEOplayer.js files are loaded):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<script type="text/javascript" src="https://PATH_TO_SMARTSIGHT_SDK/mmsmartstreaming-theo-sdk.js"><\/script>\n<script type="text/javascript" src="THEOplayer.js"><\/script>\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 2: Register and Initialize MediaMelon SDK"}),"\nNote: ",(0,r.jsx)(t.code,{children:"<customer_id>"})," is your MediaMelon-assigned Customer ID. If you do not know your Customer ID, contact MediaMelon at ",(0,r.jsx)(t.a,{href:"mailto:support@mediamelon.com",children:"support@mediamelon.com"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"After the player instance has been created, create a new plugin object, register, report player Info and then initialize the plugin as shown below:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"var player = new THEOplayer.Player(element, {\n    libraryLocation : 'path_to_your_library/',\n    license: 'your_license_here'\n});\n\nvar theoPlugin = new mmTheoJSAdapter();\nif(theoPlugin.getRegistrationStatus() === false){\n    theoPlugin.registerMMSmartStreaming(<player_name>, <customer_id>, <subscriber_id>, <domain_name>, <subscriber_type> , <subscriber_tag>);\n    theoPlugin.reportPlayerInfo(<player_brand>, <player_model>, <player_version>);\n    }\ntheoPlugin.initialize(player);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Below, you\u2019ll find an explanation of the parameters in the snippet above:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Variable"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"<player_name>"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String containing the player name (e.g. \u201CTHEOplayer\u201D)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"<customer_id>"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String containing your MediaMelon-assigned Customer ID."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"<subscriber_id>"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String containing your subscriber\u2019s ID. If you do not use subscriber IDs, enter \u201Cunknown\u201D."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"<domain_name>"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String containing the website address where the player is embedded."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"<subscriber_type>"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String containing the subscriber type (e.g. \u201CFree\u201D, \u201CPaid\u201D). If you do not use subscriber types, enter a null."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"<subscriber_tag>"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String containing an additional subscriber-specific information. This is sent in clear (not hashed) to SmartSight and it is advised to not send sensitive information in this field."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"<player_brand>"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String containing the player brand."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"<player_model>"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String containing the player model. For example - This could be a variant of player. Say name of third party player used by organization. Or any human readable name of the player."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"<player_version>"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String containing the player version."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Step 3: (Optional) Providing assetId, assetName, videoId, and custom tags"})}),"\n",(0,r.jsx)(t.p,{children:"You can also provide the assetId, assetName, videoId, and custom tags as shown below in HTML/JS while setting source information. Please use the mmVideoAssetInfo structure to provide this information."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"player.source = {\n  sources: [\n    {\n      src: '//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',\n      type: 'application/x-mpegurl',\n    },\n  ],\n  mmVideoAssetInfo: {\n    assetName: 'Elephants Dream',\n    assetId: 'ASSETID_STRING',\n    videoId: 'VIDEOID_STRING',\n    customTags: {\n      key1: 'VALUE_STRING1',\n      key2: 'VALUE_STRING2',\n      key3: 'VALUE_STRING3',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Note: There is an upper limit of 3 custom tags that can be sent to SmartSight. If you need to send more tags, please contact your MediaMelon sales representative."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Step 4: (Optional) Disable Manifest Fetch"})}),"\n",(0,r.jsx)(t.p,{children:"If your workflow restricts the manifest to be accessible from both player and SDK simultaneously, then, you can disable the fetch of manifest via the disableManifestsFetch API:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"var player = new THEOplayer.Player(element, {\n    libraryLocation : 'path_to_your_library/',\n    license: 'your_license_here'\n});\n\nvar theoPlugin = new mmTheoJSAdapter();\nif(theoPlugin.getRegistrationStatus() === false){\n    theoPlugin.registerMMSmartStreaming(<player_name>, <customer_id>, <subscriber_id>, <domain_name>, <subscriber_type> , <subscriber_tag>);\n    theoPlugin.reportPlayerInfo(<player_brand>, <player_model>, <player_version>);\n    theoPlugin.disableManifestsFetch(true);\n    }\ntheoPlugin.initialize(theoPlayer);\n"})}),"\n",(0,r.jsx)(t.p,{children:"If you now host a page with the logic described above implemented correctly, THEOplayer will start sending beacons to your MediaMelon dashboard, and you should be seeing data coming in to the MediaMelon dashboard in no time."}),"\n",(0,r.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsx)(t.p,{children:"Please reach out to us if you need more info on Android SDK."}),"\n",(0,r.jsx)(t.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,r.jsx)(t.p,{children:"Please reach out to us if you need more info on iOS/tvOS SDKs."}),"\n",(0,r.jsx)(t.h2,{id:"related-links",children:"Related links"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://smartsight.mediamelon.com/docs/theojsplayer/source/stepbystepguide.html",children:"https://smartsight.mediamelon.com/docs/theojsplayer/source/stepbystepguide.html"})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var i=n(67294);let r={},s=i.createContext(r);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);