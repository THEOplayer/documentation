"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["31182"],{74487:function(e,i,a){a.r(i),a.d(i,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"changelog/changelog-dolbyio-dashboard","title":"Dashboard Changes","description":"Updates to the Dolby.io Dashboard and Applications.","source":"@site/millicast/changelog/changelog-dolbyio-dashboard.md","sourceDirName":"changelog","slug":"/changelog/changelog-dolbyio-dashboard","permalink":"/documentation/pr-preview/pr-255/millicast/changelog/changelog-dolbyio-dashboard","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/changelog/changelog-dolbyio-dashboard.md","tags":[],"version":"current","frontMatter":{},"sidebar":"millicastReleaseNotes","previous":{"title":"REST API Changes","permalink":"/documentation/pr-preview/pr-255/millicast/changelog/changelog-rest-apis"},"next":{"title":"Native SDK","permalink":"/documentation/pr-preview/pr-255/millicast/changelog/changelog-native-sdk"}}'),t=a("85893"),r=a("50065");let s={},o="Dashboard Changes",d={},l=[{value:"2024-12-12 | Dashboard &amp; Hosted Player",id:"2024-12-12--dashboard--hosted-player",level:2},{value:"Dashboard",id:"dashboard",level:3},{value:"Hosted Player",id:"hosted-player",level:3},{value:"2024-11-07 | Dashboard",id:"2024-11-07--dashboard",level:2},{value:"\uD83C\uDD95 RTMPS Re-Streaming",id:"new-rtmps-re-streaming",level:3},{value:"Monitor Re-Stream Events",id:"monitor-re-stream-events",level:4},{value:"Track Re-Stream Usage on Billing Page",id:"track-re-stream-usage-on-billing-page",level:4},{value:"2024-10-15 | Dashboard",id:"2024-10-15--dashboard",level:2},{value:"\uD83C\uDD95 Live Clipping",id:"new-live-clipping",level:3},{value:"Media",id:"media",level:4},{value:"Token Setting",id:"token-setting",level:4},{value:"2024-09-26 | Dashboard",id:"2024-09-26--dashboard",level:2},{value:"Account Profile Dashboard",id:"account-profile-dashboard",level:3},{value:"2024-08-19 | Dashboard",id:"2024-08-19--dashboard",level:2},{value:"\uD83C\uDD95 Distribution Tab with Re-stream Configuration",id:"new-distribution-tab-with-re-stream-configuration",level:3},{value:"2024-07-25 | Millicast Player (1.5.1)",id:"2024-07-25--millicast-player-151",level:2},{value:"\uD83C\uDD95 View Metadata",id:"new-view-metadata",level:3},{value:"\uD83C\uDD95 Force Playout Delay",id:"new-force-playout-delay",level:3},{value:"2024-02-15",id:"2024-02-15",level:2},{value:"Dolby.io Dashboard",id:"dolbyio-dashboard",level:3},{value:"Live Monitoring",id:"live-monitoring",level:4},{value:"2023-10-27",id:"2023-10-27",level:2},{value:"Dolby.io Dashboard",id:"dolbyio-dashboard-1",level:3},{value:"Multi-source Builder",id:"multi-source-builder",level:4}];function c(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"dashboard-changes",children:"Dashboard Changes"})}),"\n",(0,t.jsx)(i.p,{children:"Updates to the Dolby.io Dashboard and Applications."}),"\n",(0,t.jsx)(i.h2,{id:"2024-12-12--dashboard--hosted-player",children:"2024-12-12 | Dashboard & Hosted Player"}),"\n",(0,t.jsx)(i.h3,{id:"dashboard",children:"Dashboard"}),"\n",(0,t.jsx)(i.p,{children:"On the dashboard, users can now set the account-wide expiration rules rules for their recorded media. This means that media can be auto-deleted without the need for additional API calls. This includes:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/recordings",children:"Recordings"}),": The full-length stream recordings that are created when recording is enabled on a token"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/live-clipping",children:"Clips"}),": Clips generated from the ",(0,t.jsx)(i.a,{href:"/millicast/api/media-assets-create-media-asset/",children:"Media Asset API"})," when utilizing Dolby cloud storage"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/live-clipping",children:"Timelines"}),': Timelines are the "media cache" that clips are generated from and are required to create a clip. They are always stored on Dolby cloud storage. By default timelines will expire after 1 day. Users can change this value if they wish to be able to clip further back in time.']}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["These settings are available in the streaming dashboard under ",(0,t.jsx)(i.code,{children:"Settings > Media"})]}),"\n",(0,t.jsx)(i.p,{children:"![](../assets/img/c96955004739aee7d08248a850a79c53d8774551728b5c8eadcd488f406b4e39-Screenshot_2024-12-12_at_9.59.17_AM.png"}),"\n",(0,t.jsx)(i.h3,{id:"hosted-player",children:"Hosted Player"}),"\n",(0,t.jsxs)(i.p,{children:["In the hosted player, we have hidden the view-timer by default. This is now able to be toggled on by adding a query parameter to the url (",(0,t.jsx)(i.code,{children:"&showTimer=true"}),") so that URLs would look like this to enable the timer: ",(0,t.jsx)(i.code,{children:"https://viewer.millicast.com/?streamId=k9Mwad/multiview&showTimer=true"}),". As a reminder, the timer is how long the viewer has been watching the stream and not how long the stream has been running."]}),"\n",(0,t.jsx)(i.p,{children:"An image of what the timer looks like can be seen in the red circle below:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:a(1887).Z+"",width:"1446",height:"840"})}),"\n",(0,t.jsx)(i.h2,{id:"2024-11-07--dashboard",children:"2024-11-07 | Dashboard"}),"\n",(0,t.jsx)(i.p,{children:"With this latest dashboard release, we\u2019ve introduced support for RTMPS endpoints in re-stream and enhanced visibility with re-stream events in the Live Monitor event log. Additionally, re-stream usage now appears in your billing overview for easier tracking."}),"\n",(0,t.jsxs)(i.h3,{id:"new-rtmps-re-streaming",children:["\uD83C\uDD95"," RTMPS Re-Streaming"]}),"\n",(0,t.jsx)(i.p,{children:"You can now configure RTMPS endpoints in the re-stream section of the distribution tab. This added security layer allows for secure re-streaming, broadening compatibility and enhancing stream stability across a wider variety of platforms."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:a(18098).Z+"",width:"692",height:"468"})}),"\n",(0,t.jsx)(i.h4,{id:"monitor-re-stream-events",children:"Monitor Re-Stream Events"}),"\n",(0,t.jsxs)(i.p,{children:["A new event type is now available in the ",(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/live-monitoring",children:"Live Monitoring"})," event log, enabling you to view re-stream related events and errors in real-time as they occur."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:a(80642).Z+"",width:"1408",height:"314"})}),"\n",(0,t.jsx)(i.h4,{id:"track-re-stream-usage-on-billing-page",children:"Track Re-Stream Usage on Billing Page"}),"\n",(0,t.jsx)(i.p,{children:"Re-stream usage data now appears directly on your billing page, giving you a clear view of number of re-stream minutes consumed."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:a(62346).Z+"",width:"1840",height:"1144"})}),"\n",(0,t.jsx)(i.h2,{id:"2024-10-15--dashboard",children:"2024-10-15 | Dashboard"}),"\n",(0,t.jsx)(i.p,{children:"You'll find this latest dashboard release provides access to the new live clipping feature and ability to manage media assets such as recordings and clips."}),"\n",(0,t.jsxs)(i.p,{children:["You can find additional related changes in the ",(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/changelog/changelog-rest-apis",children:"REST APIs and GraphQL Release Notes"}),"."]}),"\n",(0,t.jsxs)(i.h3,{id:"new-live-clipping",children:["\uD83C\uDD95"," Live Clipping"]}),"\n",(0,t.jsxs)(i.p,{children:["With ",(0,t.jsx)(i.strong,{children:"live clipping"})," you can capture a partial clip from an active ongoing stream that is immediately available. This can power many solutions such as social network sharing, replay capabilities, as well as archival and auditing. Learn more from the ",(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/recordings",children:"Stream Recordings"})," guide."]}),"\n",(0,t.jsx)(i.h4,{id:"media",children:"Media"}),"\n",(0,t.jsxs)(i.p,{children:["The recordings menu has been replaced with a new ",(0,t.jsx)(i.strong,{children:"Media"})," section. This is where you can find any media being stored for your account. This view allows you to filter by type and all media is grouped by the token used to generate the media."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:a(17635).Z+"",width:"2492",height:"1980"})}),"\n",(0,t.jsx)(i.h4,{id:"token-setting",children:"Token Setting"}),"\n",(0,t.jsxs)(i.p,{children:["Live clipping is a setting that must be enabled on a token in order to create clips. It is an optional on any ",(0,t.jsx)(i.a,{href:"/millicast/managing-your-tokens",children:"Publish Tokens"})," and has cost implications for storage and usage. This is a premium feature so please work with your account team to have it enabled for your account."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:a(79045).Z+"",width:"2496",height:"2016"})}),"\n",(0,t.jsx)(i.h2,{id:"2024-09-26--dashboard",children:"2024-09-26 | Dashboard"}),"\n",(0,t.jsx)(i.p,{children:"You'll find usability improvements included in our latest Dolby.io dashboard release. It is now easier to manage your account profile, organization, team and security settings."}),"\n",(0,t.jsx)(i.h3,{id:"account-profile-dashboard",children:"Account Profile Dashboard"}),"\n",(0,t.jsx)(i.p,{children:"Select the Profile item from the account dropdown and you'll find additional settings you can use to manage your Dolby.io account."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:a(52293).Z+"",width:"2670",height:"304"})}),"\n",(0,t.jsx)(i.p,{children:"From here you'll find additional menu items:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Account Profile:"})," This is where you can update your name, title, and contact details."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Organization:"})," Access your organization id and change the name to match your business."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Team:"})," Add additional users to your account to share access with your team."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Security:"})," Update your password, turn on two-factor, and manage active sessions."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:a(99046).Z+"",width:"612",height:"572"})}),"\n",(0,t.jsx)(i.h2,{id:"2024-08-19--dashboard",children:"2024-08-19 | Dashboard"}),"\n",(0,t.jsxs)(i.h3,{id:"new-distribution-tab-with-re-stream-configuration",children:["\uD83C\uDD95"," Distribution Tab with Re-stream Configuration"]}),"\n",(0,t.jsxs)(i.p,{children:["With this dashboard update you can now find a new ",(0,t.jsx)(i.strong,{children:"Distribution"})," tab within the publish token with settings that allow you to modify how the CDN distributes the stream to end viewers."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/re-streaming",children:"Re-streaming"}),": fan-out a stream to up to ten (10) endpoints that accept incoming RTMP connections for syndicated broadcasting and distribution."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/geo-cascading",children:"Geo-cascading"}),": configuration of edge servers that handle the last-mile distribution of a stream for playback can be found."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:a(99461).Z+"",width:"1876",height:"533"})}),"\n",(0,t.jsxs)(i.h2,{id:"2024-07-25--millicast-player-151",children:["2024-07-25 | Millicast Player (",(0,t.jsx)(i.a,{href:"https://www.npmjs.com/package/@millicast/vue-viewer-plugin?activeTab=readme",children:"1.5.1"}),")"]}),"\n",(0,t.jsxs)(i.h3,{id:"new-view-metadata",children:["\uD83C\uDD95"," View Metadata"]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/hosted-viewer",children:"Hosted Player"})," now supports propagation of ",(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/frame-metadata",children:"metadata"})," events to the application such as timecodes from SEI / AMF / PIC_TIMING. There is a query parameter ",(0,t.jsx)(i.code,{children:"&metadata=true"})," that will enable the processing of received metadata and displays it to a rendered canvas. Any unregistered metadata is sent to the browser console."]}),"\n",(0,t.jsxs)(i.h3,{id:"new-force-playout-delay",children:["\uD83C\uDD95"," Force Playout Delay"]}),"\n",(0,t.jsxs)(i.p,{children:["You can adjust the playback buffer to make trade-offs between quality and latency. You need to specify both query string parameters ",(0,t.jsx)(i.code,{children:"forcePlayoutDelayMin"})," and ",(0,t.jsx)(i.code,{children:"forcePlayoutDelayMax"})," to enable this behavior"]}),"\n",(0,t.jsx)(i.h2,{id:"2024-02-15",children:"2024-02-15"}),"\n",(0,t.jsx)(i.h3,{id:"dolbyio-dashboard",children:"Dolby.io Dashboard"}),"\n",(0,t.jsx)(i.h4,{id:"live-monitoring",children:"Live Monitoring"}),"\n",(0,t.jsxs)(i.p,{children:["Introduced the ",(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/live-monitoring",children:"Live Monitoring dashboard"}),", which allows customers to view information about stream ingests to quickly diagnose and triage any issues."]}),"\n",(0,t.jsx)(i.h2,{id:"2023-10-27",children:"2023-10-27"}),"\n",(0,t.jsx)(i.h3,{id:"dolbyio-dashboard-1",children:"Dolby.io Dashboard"}),"\n",(0,t.jsx)(i.h4,{id:"multi-source-builder",children:"Multi-source Builder"}),"\n",(0,t.jsxs)(i.p,{children:["Introduced the ",(0,t.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/multi-source-builder",children:"Multi-source Builder"})," that allows you to build and configure multiple publishing sources from the Streaming Dashboard. You can add multiple SRT, RTMP or WebRTC sources and use the user-interface to configure multi-bitrate publishing. The Multi-source tab also includes a URL to launch the hosted player with the multi-viewer configuration, customizable ",(0,t.jsx)(i.code,{children:"iframe"})," code to embed the hosted player into your webpage, and the ability to export your multi-source configuration as a file."]})]})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},17635:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/16cb0b1a5e46ce8fb168ca3085daf45d4a4aa7d99637da5ef58eb6393ba78180-live-clipping-media-menu-b68e2e5864b0b6e0be9580b25a46d255.png"},80642:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/252e36192f8369547fff49a7af109c0eeaf9f6d7fde269741cb1f807674258d9-dashboard-live-monitor-restream-events-d7632ac87b79e5a4377a45534bbefd31.png"},62346:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/3a112387ceffd202a53c31da649ab72eb443985f6833a72d9913f343d174cf58-dashboard-restream-billing-usage-431a7132cbcefd0c3f187f80dad81f4a.png"},99046:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/4a343b769af401e2b7b115b2f7620e3aed8ed851eec56deef46e5425ed3e8989-dashboard-account-profile-and-settings-3700649580b1ed5e8a5a9c15265d0eed.png"},99461:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/6d57cb6-dashboard-distribution-tab-restream-setup-2401923116b3069f92609c001613f277.png"},52293:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/a7f4a821c575e88396154983a48160272a950376adf1354ad75bc9ff98f8fd68-dashboard-account-dropdown-profile-e70671915c64850320accf6888855c95.png"},1887:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/e8a06e7d19e0fb95a528f26bf51a91ee94be340bb5dad90f1834e49c3780b211-Screenshot_2024-12-12_at_10.03.31_AM-b89ebc4fe9354c1be2fdd04216cd330c.png"},79045:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/ee7359252643a2c08e31378d67dc8b360c6a857f43eb9f8ee23214ceb62788fa-live-clipping-token-details-edc65f36948f85f1ae8e8809d2c075dc.png"},18098:function(e,i,a){a.d(i,{Z:function(){return n}});let n=a.p+"assets/images/f3506a57cdbb6ea94f379a631b08946eff022b5e3beac88bf280cf4de4709671-dashboard-restream-rtmps-url-3a1ad0d72db499167a5f72f0e4126875.png"},50065:function(e,i,a){a.d(i,{Z:function(){return o},a:function(){return s}});var n=a(67294);let t={},r=n.createContext(t);function s(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);