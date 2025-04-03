"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["83103"],{35154:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"guides/Ingesting/wirecast","title":"Using Wirecast with THEOlive","description":"This guide explains to you how to set up Wirecast correctly so it can be used to stream your content with THEOlive.","source":"@site/theolive/guides/Ingesting/wirecast.md","sourceDirName":"guides/Ingesting","slug":"/guides/Ingesting/wirecast","permalink":"/documentation/pr-preview/pr-253/theolive/guides/Ingesting/wirecast","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/guides/Ingesting/wirecast.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Wirecast"},"sidebar":"theolive","previous":{"title":"OBS","permalink":"/documentation/pr-preview/pr-253/theolive/guides/Ingesting/obs"},"next":{"title":"vMix","permalink":"/documentation/pr-preview/pr-253/theolive/guides/Ingesting/vmix"}}'),s=n("85893"),r=n("50065");let a={sidebar_position:3,sidebar_label:"Wirecast"},l="Using Wirecast with THEOlive",o={},c=[{value:"1. Configure Output Settings",id:"1-configure-output-settings",level:2},{value:"2. Add a New Layer",id:"2-add-a-new-layer",level:2},{value:"3. Start Streaming",id:"3-start-streaming",level:2},{value:"4. Start your THEOlive channel",id:"4-start-your-theolive-channel",level:2}];function d(e){let t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"using-wirecast-with-theolive",children:"Using Wirecast with THEOlive"})}),"\n",(0,s.jsx)(t.p,{children:"This guide explains to you how to set up Wirecast correctly so it can be used to stream your content with THEOlive."}),"\n",(0,s.jsx)(t.h2,{id:"1-configure-output-settings",children:"1. Configure Output Settings"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Select "Output" from the toolbar'}),"\n",(0,s.jsx)(t.li,{children:'Subsequently select "Output Settings..."'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Selecting Output Settings",src:n(15859).Z+"",width:"1920",height:"993"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Select "RTMP Server" as the output destination and choose "OK".'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Selecting RTMP server as Destination",src:n(14312).Z+"",width:"1305",height:"708"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Go to the THEOlive management console, and copy the RTMP Push URL and Stream key of your channel."}),"\n",(0,s.jsx)(t.li,{children:'Paste the RTMP Push URL into "Address".'}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"\u2757\uFE0F Not all versions/editions of Wirecast support RTMPS",type:"warning",children:(0,s.jsx)(t.p,{children:'Definitely check whether your Wirecast version/edition supports RTMPS. Older versions typically do not support RTMPS, whereas for example the most recent version Professional version does support RTMPS. In case your version/edition does not accept RTMPS, then definitely change "RTMPS" to "RTMP" in your RTMP push URL. As an example rtmps://rtmp.europe-west.hesp.live/live will have to be changed to rtmp://rtmp.europe-west.hesp.live/live for RTMP-based streaming.'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Paste the Streamkey into "Stream:"'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Setting the Address and Stream",src:n(95197).Z+"",width:"1302",height:"706"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Select your "Encoding" settings (max 1080p)'}),"\n",(0,s.jsx)(t.li,{children:'Subsequently review your detailed encoding settings by clicking the settings button next to encoding, and selecting "view details"'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Showing the detailed encoding settings",src:n(24450).Z+"",width:"1033",height:"554"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Define the appropriate encoder latency, taking into account your computer performance. "1 - (Ultra Fast encoding)" will give the lowest latency as it requires the least CPU time.'}),"\n",(0,s.jsx)(t.li,{children:'Also select the encoding "Profile". For example, "Main" will give lower latencies than "High" but on the other hand "High" will provide for better quality than "Main".'}),"\n",(0,s.jsxs)(t.li,{children:['Lastly, set "Frames per second" to the same value used in the THEOlive channel ingest config and set "Average bit rate" to match the max bitrate of the channel preset. See ',(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-253/theolive/guides/stream-configuration",children:"Stream configuration"})," for more details."]}),"\n",(0,s.jsx)(t.li,{children:'Click "OK" and move to step 2 to add your live stream.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Wirecast encoding quality",src:n(50764).Z+"",width:"532",height:"537"})}),"\n",(0,s.jsx)(t.admonition,{title:"\uD83D\uDEA7 Upload bandwidth",type:"info",children:(0,s.jsx)(t.p,{children:"Make sure that your encoder has a stable connection and enough upload bandwidth. This will ensure all data is correctly sent to the THEOlive channel."})}),"\n",(0,s.jsx)(t.h2,{id:"2-add-a-new-layer",children:"2. Add a New Layer"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Click the \u2018+\u2019 button on the top layer to add your live stream."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Adding a new layer",src:n(72465).Z+"",width:"1915",height:"993"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Subsequently add your layer. In order to capture your webcam, for example, click on \u2018Video Capture\u2019 from the left. Next, select the video capture device you wish to add."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Selecting an option that should function as the layer",src:n(67122).Z+"",width:"1919",height:"996"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"You'll then need to activate the layer by clicking on the white arrow."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Activating the layer",src:n(29792).Z+"",width:"1918",height:"992"})}),"\n",(0,s.jsx)(t.h2,{id:"3-start-streaming",children:"3. Start Streaming"}),"\n",(0,s.jsx)(t.p,{children:'Click the "Stream" button. Wirecast will make a connection to the THEOlive RTMP server.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Start streaming",src:n(89263).Z+"",width:"1920",height:"1080"})}),"\n",(0,s.jsx)(t.h2,{id:"4-start-your-theolive-channel",children:"4. Start your THEOlive channel"}),"\n",(0,s.jsxs)(t.p,{children:["This can be done either through the ",(0,s.jsx)(t.a,{href:"https://developers.theo.live/reference/start-channel",children:"API"})," or via the ",(0,s.jsx)(t.a,{href:"https://console.theo.live/",children:"management console"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},15859:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/17980ac-Wirecast_-_Output_Settings-a857dbdf51629075df18e9f98b7b6b46.jpg"},89263:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/2416285-Wirecast_-_Start_Streaming-7bc6d4be3dfd907b869e10cb089cd2a4.jpg"},24450:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/42264c9-Wirecast_-_Detailed_Encoder_Settings-ccd8b39cf9b3954c12891ca740455e0d.JPG"},50764:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/48bc7d6-Wirecast_-_Encoding_Quality-b59ba11010718aa49e3b0913a47ddb1b.png"},67122:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/7b3faa5-Wirecast_-_Select_Source-23e27bd7120048b8a91b758a33eef7c8.jpg"},14312:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/94e8600-Wirecast_-_Output_Destination-7f5c94bc83bf6f29aece88d569d02a97.JPG"},95197:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/b212f75-Wirecast_-_RTMPurl__Streamkey-fe4cc4e47c0f429116c74706b4157bdb.jpg"},29792:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/b4945ca-Wirecast_-_Activate_Layer-87021696b182f400ab009e61168f2d46.jpg"},72465:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/fea4c5a-Wirecast_-_New_Layer-51f4c040d439cc07c17827e06bf1df68.JPG"},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var i=n(67294);let s={},r=i.createContext(s);function a(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);