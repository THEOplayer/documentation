"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["90387"],{65668:function(e,t,s){s.r(t),s.d(t,{default:()=>a,frontMatter:()=>r,metadata:()=>l,assets:()=>c,toc:()=>o,contentTitle:()=>d});var l=JSON.parse('{"id":"getting-started/stream-configuration","title":"Stream Configuration","description":"Settings related to the THEOlive stream output","source":"@site/theolive/getting-started/stream-configuration.mdx","sourceDirName":"getting-started","slug":"/getting-started/stream-configuration","permalink":"/documentation/pr-preview/pr-223/theolive/getting-started/stream-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/getting-started/stream-configuration.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"theolive","previous":{"title":"Platforms","permalink":"/documentation/pr-preview/pr-223/theolive/getting-started/platforms"},"next":{"title":"How Billing works for THEOLive","permalink":"/documentation/pr-preview/pr-223/theolive/getting-started/billing"}}'),n=s("85893"),i=s("50065");let r={sidebar_position:5},d="Stream Configuration",c={},o=[{value:"Setting the stream configuration via the <code>streamConfig</code> object",id:"setting-the-stream-configuration-via-the-streamconfig-object",level:2},{value:"Setting the stream configuration via the <code>ingestConfig</code> object (deprecated)",id:"setting-the-stream-configuration-via-the-ingestconfig-object-deprecated",level:2},{value:"Default preset values",id:"default-preset-values",level:3},{value:"Sport preset values",id:"sport-preset-values",level:3},{value:"Presentation preset values",id:"presentation-preset-values",level:3}];function h(e){let t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"stream-configuration",children:"Stream Configuration"})}),"\n",(0,n.jsx)(t.p,{children:"Settings related to the THEOlive stream output"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:'THEOlive offers pre-defined ABR profiles (or "presets") which allows you to adjust the stream settings according to your use case. Different pricing per minute transcoded and viewed applies to each profile.'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," this is a breaking change compared to the method where you had to passed a ",(0,n.jsx)(t.code,{children:"ingestConfig"})," object in the past. This old approach is still available for the time being. More information can be found later on in this ",(0,n.jsx)(t.a,{href:"#setting-the-stream-configuration-via-the-ingestconfig-object-deprecated",children:"document"}),". You can pass as well the ",(0,n.jsx)(t.code,{children:"streamConfig"})," as ",(0,n.jsx)(t.code,{children:"ingestConfig"})," object (the API won't throw an error), but ",(0,n.jsx)(t.code,{children:"streamConfig"})," will take precedence."]}),"\n",(0,n.jsxs)(t.h2,{id:"setting-the-stream-configuration-via-the-streamconfig-object",children:["Setting the stream configuration via the ",(0,n.jsx)(t.code,{children:"streamConfig"})," object"]}),"\n",(0,n.jsxs)(t.p,{children:["The goal is to pass a ",(0,n.jsx)(t.code,{children:"streamConfig"})," object during the ",(0,n.jsx)(t.a,{href:"https://developers.theo.live/reference/create-channel",children:"creation"})," of a channel, or when ",(0,n.jsx)(t.a,{href:"https://developers.theo.live/reference/update-channel",children:"updating"})," it. This object consists of:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"bitrate"}),": the max bitrate value that will be used in Mbps."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"resolution"}),": the max resolution that will be used. Possible values: ",(0,n.jsx)(t.code,{children:'"1080p"'}),", ",(0,n.jsx)(t.code,{children:'"720p"'}),", ",(0,n.jsx)(t.code,{children:'"576p"'}),", ",(0,n.jsx)(t.code,{children:'"480p"'}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"fps"}),": the max fps value that will be used. Can be ",(0,n.jsx)(t.code,{children:"25"}),", ",(0,n.jsx)(t.code,{children:"29.97"}),", ",(0,n.jsx)(t.code,{children:"30"}),", ",(0,n.jsx)(t.code,{children:"50"}),", ",(0,n.jsx)(t.code,{children:"59.94"}),", ",(0,n.jsx)(t.code,{children:"60"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"abr"}),": a boolean to determine if ABR should be enabled or not."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Remarks:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"streamConfig"}),"object is optional. When it's not passed, the following default values will be used:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"bitrate: 4.5"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:'resolution: "1080p"'})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"fps: 30"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["When defining the ",(0,n.jsx)(t.code,{children:"streamConfig"})," object, it's mandatory to pass ",(0,n.jsx)(t.em,{children:"all"})," properties (bitrate, resolution, fps). Otherwise, the API will return an error."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In the table below you can find a complete overview of all possible values that can be passed and the ABR ladder in which it will result. Please refer to our ",(0,n.jsx)(t.a,{href:"https://www.theoplayer.com/pricing/theolive",children:"pricing page"})," for the latest pricings per profile."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Bitrate"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Resolution"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"fps"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"ABR ladder"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"8 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1080p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"50, 59.94, 60"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 1080p @ 8 Mbps - 720p @ 4.5 Mbps - 576p @ 1.5 Mbps - 360p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"8 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1080p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 1080p @ 8 Mbps - 720p @ 4.5 Mbps - 576p @ 1.5 Mbps - 360p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1080p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"50, 59.94, 60"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 1080p @ 6 Mbps - 720p @ 3.5 Mbps - 576p @ 1.5 Mbps - 360p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1080p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 1080p @ 6 Mbps - 720p @ 3.5 Mbps - 576p @ 1.5 Mbps - 360p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"720p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"50, 59.94, 60"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 720p @ 6 Mbps - 576p @ 4 Mbps - 360p @ 2 Mbps - 240p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"720p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 720p @ 6 Mbps - 576p @ 4 Mbps - 360p @ 2 Mbps - 240p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4.5 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1080p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"50, 59.94, 60"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 1080p @ 4.5 Mbps - 720p @ 3 Mbps - 576p @ 1.5 Mbps - 360p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4.5 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1080p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 1080p @ 4.5 Mbps - 720p @ 3 Mbps - 576p @ 1.5 Mbps - 360p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4.5 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"720p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"50, 59.94, 60"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 720p @ 4.5 Mbps - 576p @ 2.5 Mbps - 360p @ 1.5 Mbps - 240p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4.5 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"720p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 720p @ 4.5 Mbps - 576p @ 2.5 Mbps - 360p @ 1.5 Mbps - 240p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2.5 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1080p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 1080p @ 2.5 Mbps - 720p @ 2.2 Mbps - 576p @ 1.5 Mbps - 360p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2.5 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"720p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 720p @ 2.5 Mbps - 576p @ 1.5 Mbps - 360p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2.5 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"576p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 576p @ 2.5 Mbps - 360p @ 1.5 Mbps - 240p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1.5 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"720p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 720p @ 1.5 Mbps - 576p @ 1 Mbps - 360p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1.5 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"576p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 576p @ 1.5 Mbps - 360p @ 1 Mbps - 240p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1.5 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"360p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 360p @ 1.5 Mbps - 240p @ 0.9 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"576p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 576p @ 1 Mbps - 360p @ 0.9 Mbps - 240p @ 0.8 Mbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1 Mbps"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"360p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"25, 29.97, 30"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"- 360p @ 1 Mbps - 240p @ 0.8 Mbps"})]})]})]}),"\n",(0,n.jsxs)(t.admonition,{title:"\uD83D\uDEA7 Encoder settings",type:"info",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Frame rate"}),(0,n.jsx)(t.br,{}),"\n","To obtain the best performance, set the same frame rate on both your encoder and in the channel configuration (the suggested values for this are 25, 29.97 or 30 fps). Frame rate differences between encoder and channel may lead to information loss and stalls."]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Bandwidth"}),(0,n.jsx)(t.br,{}),"\n","Make sure your encoder has a stable connection with enough upload bandwidth to correctly serve all frames. Dropped frames or connection interruptions may lead to increased latency, stalls and playback failures."]})]}),"\n",(0,n.jsxs)(t.h2,{id:"setting-the-stream-configuration-via-the-ingestconfig-object-deprecated",children:["Setting the stream configuration via the ",(0,n.jsx)(t.code,{children:"ingestConfig"})," object (deprecated)"]}),"\n",(0,n.jsxs)(t.p,{children:["Before the ",(0,n.jsx)(t.code,{children:"streamConfig"})," object was available in our API, you had to configure the settings using the ",(0,n.jsx)(t.code,{children:"ingestConfig"})," object. This approach is still available to provide backwards compatibility for existing integrations, but it's not recommended to use anymore: it will be deprecated in the near future."]}),"\n",(0,n.jsxs)(t.p,{children:["We highly recommend to update your integration to make use of the new ",(0,n.jsx)(t.code,{children:"streamConfig"})," object."]}),"\n",(0,n.jsxs)(t.p,{children:["For those still using the ",(0,n.jsx)(t.code,{children:"ingestConfig"})," object: this object accepts a few properties."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"preset"}),": can be ",(0,n.jsx)(t.code,{children:'"default"'}),", ",(0,n.jsx)(t.code,{children:'"sport"'}),"or ",(0,n.jsx)(t.code,{children:'"presentation"'}),". Defaults to ",(0,n.jsx)(t.code,{children:'"default"'})," when not passed. The connected ABR ladders can be found below"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"abr"}),": boolean."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"aspectRatio"}),": used for setting the max resolution, but poorly named in the past. Depending on the resolution you choose, your ABR ladder will exist out of four steps (in case of ",(0,n.jsx)(t.code,{children:'"1080p"'}),"), three steps (in case of ",(0,n.jsx)(t.code,{children:'"720p"'}),"), two steps (in case of ",(0,n.jsx)(t.code,{children:'"480p"'}),"), or one step (in case of ",(0,n.jsx)(t.code,{children:'"360p"'}),")."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"fps"}),": a number that can be 25, 29.97, 30, 50, 50.94, 60."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"default-preset-values",children:"Default preset values"}),"\n",(0,n.jsx)(t.p,{children:"The default configuration that will work for most use cases."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Quality"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Bit rate"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HD - 1080p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4000 kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HQ - 720p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2500 kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"MQ - 480p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1200 kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"LQ - 360p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"900 kbps"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"sport-preset-values",children:"Sport preset values"}),"\n",(0,n.jsx)(t.p,{children:"The ideal configuration for streams with fast-moving images and a lot of scene changes that have a high bit rate. An example can be a broadcasted football game."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Quality"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Bit rate"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HD - 1080p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4500 kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HQ - 720p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2700 kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"MQ - 480p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1400 kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"LQ - 360p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1000 kbps"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"presentation-preset-values",children:"Presentation preset values"}),"\n",(0,n.jsx)(t.p,{children:"The configuration that can be used when not a lot of scene changes are expected, think about a meeting with a few slides."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Quality"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Bit rate"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HD - 1080p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2200 kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"HQ - 720p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"900 kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"MQ - 480p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"800 kbps"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"LQ - 360p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"450 kbps"})]})]})]}),"\n",(0,n.jsx)(t.admonition,{title:"\uD83D\uDCD8 Ingest configuration",type:"info",children:(0,n.jsx)(t.p,{children:"When configuring your RTMP ingest, it is important to match the highest bitrate of your bitrate ladder. When using the recommended preset at 1080p for example, the RTMP ingest should be configured at 4000 kbps."})})]})}function a(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return r}});var l=s(67294);let n={},i=l.createContext(n);function r(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);