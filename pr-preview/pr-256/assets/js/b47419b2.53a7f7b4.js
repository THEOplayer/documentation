"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["53485"],{23408:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>a,toc:()=>o,contentTitle:()=>d});var n=JSON.parse('{"id":"software-encoders/broadcasting-with-vmix","title":"vMix","description":"vMix is a desktop application that provides a software vision mixer and encoder for the Windows operating system. It allows users to switch inputs, mix audio, record output, and live stream cameras, video files, audio, and more.","source":"@site/millicast/software-encoders/broadcasting-with-vmix.md","sourceDirName":"software-encoders","slug":"/broadcasting-with-vmix","permalink":"/documentation/pr-preview/pr-256/millicast/broadcasting-with-vmix","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/software-encoders/broadcasting-with-vmix.md","tags":[],"version":"current","frontMatter":{"title":"vMix","slug":"/broadcasting-with-vmix"},"sidebar":"millicast","previous":{"title":"Zoom","permalink":"/documentation/pr-preview/pr-256/millicast/broadcasting-jitsi-or-zoom-meetings"},"next":{"title":"LiveU","permalink":"/documentation/pr-preview/pr-256/millicast/liveu-studio-using-whip"}}'),s=i("85893"),r=i("50065");let l={title:"vMix",slug:"/broadcasting-with-vmix"},d=void 0,a={},o=[{value:"How-to use vMix with RTMP",id:"how-to-use-vmix-with-rtmp",level:2},{value:"Configure a custom RTMP server",id:"configure-a-custom-rtmp-server",level:3},{value:"Setup multi-bitrate RTMP streaming with vMix",id:"setup-multi-bitrate-rtmp-streaming-with-vmix",level:3},{value:"Streaming destination 1: 1080p",id:"streaming-destination-1-1080p",level:4},{value:"Streaming destination 2: 720p",id:"streaming-destination-2-720p",level:4},{value:"Streaming destination 3: 360p",id:"streaming-destination-3-360p",level:4},{value:"Start and view streams",id:"start-and-view-streams",level:3},{value:"How-to use vMix with SRT",id:"how-to-use-vmix-with-srt",level:2},{value:"vMix settings",id:"vmix-settings",level:3},{value:"How-to use vMix with NDI",id:"how-to-use-vmix-with-ndi",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"vMix"})," is a desktop application that provides a software vision mixer and encoder for the Windows operating system. It allows users to switch inputs, mix audio, record output, and live stream cameras, video files, audio, and more."]}),"\n",(0,s.jsxs)(t.p,{children:["You can originate a broadcast from vMix and forward that stream over ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/using-rtmp-and-rtmps",children:"RTMP"}),", ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/using-srt",children:"SRT"}),", or as an ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/using-ndi",children:"NDI"})," source."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/broadcasting-with-vmix#how-to-use-vmix-with-rtmp",children:"Configure RTMP"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/broadcasting-with-vmix#how-to-use-vmix-with-srt",children:"Configure SRT"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/broadcasting-with-vmix#how-to-use-vmix-with-ndi",children:"Configure NDI"})}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\uD83D\uDC4D Getting Started"}),"\n",(0,s.jsxs)(t.p,{children:["If you haven't already, begin by following the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/getting-started",children:"Getting Started"})," tutorial to create a Dolby.io application and start your first broadcast."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["See the official ",(0,s.jsx)(t.a,{href:"https://vmix.com",children:"vmix.com"})," site for documentation, installation instructions, and additional support."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use-vmix-with-rtmp",children:"How-to use vMix with RTMP"}),"\n",(0,s.jsxs)(t.p,{children:["In order to broadcast with RTMP, you will need to have your ",(0,s.jsx)(t.strong,{children:"RTMP publish path"})," and ",(0,s.jsx)(t.strong,{children:"RTMP publish stream name"})," available."]}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/using-rtmp-and-rtmps#how-to-find-your-rtmp-publish-url",children:"RTMP Broadcast Guide"})," for details on how to retrieve these values."]}),"\n",(0,s.jsx)(t.h3,{id:"configure-a-custom-rtmp-server",children:"Configure a custom RTMP server"}),"\n",(0,s.jsxs)(t.p,{children:["Within vMix, select the ",(0,s.jsx)(t.em,{children:"Streaming Settings"})," menu to enter your publishing destination."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"URL:"})," use your ",(0,s.jsx)(t.em,{children:"RTMP publish path"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Stream Name or Key:"})," use your ",(0,s.jsx)(t.em,{children:"RTMP publish stream name"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Set the ",(0,s.jsx)(t.strong,{children:"Application"})," to ",(0,s.jsx)(t.em,{children:"FFMPEG"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(20521).Z+"",width:"700",height:"443"})}),"\n",(0,s.jsxs)(t.p,{children:["Select the Quality settings. Make sure the ",(0,s.jsx)(t.strong,{children:"Profile"})," is set to ",(0,s.jsx)(t.em,{children:"Baseline"}),". You may experience stutters when using another profile."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(26183).Z+"",width:"656",height:"525"})}),"\n",(0,s.jsxs)(t.p,{children:["You can configure the other Audio and Video settings based on your preferences and network capacity.",(0,s.jsx)(t.br,{}),"\n","Save your publishing profile and you are ready to start publishing with vMix."]}),"\n",(0,s.jsx)(t.h3,{id:"setup-multi-bitrate-rtmp-streaming-with-vmix",children:"Setup multi-bitrate RTMP streaming with vMix"}),"\n",(0,s.jsxs)(t.p,{children:["With vMix you have the ability to send a live stream simultaneously to up to three separate streaming destinations. This vMix feature combined with Dolby.io ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/multi-source-broadcasting",children:"Multisource Streams"})," enables Simulcast of multiple renditions of the stream. Viewers with bandwidth constraints would receive a stream optimized for that condition. Keep in mind, the broadcaster will be sending multiple streams so will need adequate bandwidth."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\uD83D\uDCD8 Enable Multisource for Your Dolby.io Publish Token"}),"\n",(0,s.jsxs)(t.p,{children:["To utilize ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/multi-source-broadcasting",children:"multisource"})," it must be enabled for the publish token. You can do this from the Dolby.io dashboard. For more information, review ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/managing-your-tokens",children:"Managing Tokens"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"streaming-destination-1-1080p",children:"Streaming destination 1: 1080p"}),"\n",(0,s.jsxs)(t.p,{children:["The first destination ",(0,s.jsx)(t.strong,{children:"URL"})," and ",(0,s.jsx)(t.strong,{children:"Stream Name"})," would remain much as it was configured in the previous section with a few adjustments."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"sourceId=1"}),": add this query parameter to the Stream Name to differentiate from the other sources"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"simulcastId"}),": add this query parameter to indicate it should be a Simulcast stream"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(52494).Z+"",width:"696",height:"440"})}),"\n",(0,s.jsxs)(t.p,{children:["You might also adjust the ",(0,s.jsx)(t.strong,{children:"Quality Settings"})," to use 1080p for this source."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"1080p"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"RTMP Server"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"rtmp://live-rtmp-pub.millicast.com:1935/v2/pub/"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"RTMP Key"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"{StreamName}?token={Token}&sourceId=1&simulcastId"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Encoder"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"FFMPEG"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resolution"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1920x1080"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Bitrate"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6000kbps or as shown 4500kbps"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Keyframe"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"streaming-destination-2-720p",children:"Streaming destination 2: 720p"}),"\n",(0,s.jsxs)(t.p,{children:["Select a second target destination. Update the ",(0,s.jsx)(t.strong,{children:"sourceId"})," to reflect that this is the second source."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(6961).Z+"",width:"689",height:"440"})}),"\n",(0,s.jsx)(t.p,{children:"Adjust the quality settings to be a lower framerate, bitrate, and resolution to conserve bandwidth."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"720p"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"RTMP Server"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"rtmp://live-rtmp-pub.millicast.com:1935/v2/pub/"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"RTMP Key"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"{StreamName}?token={Token}&sourceId=2&simulcastId&videoOnly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Encoder"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"FFMPEG"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resolution"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1280x720"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Bitrate"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2000kbps or as shown 1500kbps"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Keyframe"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"streaming-destination-3-360p",children:"Streaming destination 3: 360p"}),"\n",(0,s.jsxs)(t.p,{children:["As with the other example, update the ",(0,s.jsx)(t.strong,{children:"sourceId"})," and adjust the quality settings to provide a constrained bandwidth solution."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(30773).Z+"",width:"688",height:"442"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"360p"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"RTMP Server"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"rtmp://live-rtmp-pub.millicast.com:1935/v2/pub/"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"RTMP Key"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"{StreamName}?token={Token}&sourceId=3&simulcastId&videoOnly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Encoder"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"FFMPEG"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Resolution"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"640x360"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Bitrate"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"500kbps"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Keyframe"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"start-and-view-streams",children:"Start and view streams"}),"\n",(0,s.jsxs)(t.p,{children:["In vMix click start all streams. You can then watch this stream from a ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/playback",children:"playback"})," viewer. If you select the viewer settings, you can see that there are multiple Video Quality renditions available."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(85309).Z+"",width:"1301",height:"728"})}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use-vmix-with-srt",children:"How-to use vMix with SRT"}),"\n",(0,s.jsxs)(t.p,{children:["In order to broadcast with SRT, you will need to have your ",(0,s.jsx)(t.strong,{children:"SRT publish path"})," and ",(0,s.jsx)(t.strong,{children:"SRT stream ID"})," available."]}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/using-srt",children:"SRT Broadcast Guide"})," for details on how to retrieve these values."]}),"\n",(0,s.jsx)(t.h3,{id:"vmix-settings",children:"vMix settings"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.strong,{children:"Output / NDI / SRT"})," settings and configure an output by clicking the gear icon."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(94303).Z+"",width:"1296",height:"800"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Check the ",(0,s.jsx)(t.code,{children:"Enable SRT"})," setting."]}),"\n",(0,s.jsxs)(t.li,{children:["Input the ",(0,s.jsx)(t.strong,{children:"SRT path"})," in for ",(0,s.jsx)(t.code,{children:"Hostname"}),". The ",(0,s.jsx)(t.code,{children:"Port"})," can be removed and put in the additional field."]}),"\n",(0,s.jsxs)(t.li,{children:["Input the ",(0,s.jsx)(t.strong,{children:"SRT stream ID"})," in the ",(0,s.jsx)(t.code,{children:"Stream ID"})," field."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(88783).Z+"",width:"574",height:"800"})}),"\n",(0,s.jsxs)(t.p,{children:["It is recommended to set the ",(0,s.jsx)(t.code,{children:"Quality"})," as **H264 1mbps AAC 0kbps (5 secs)."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use-vmix-with-ndi",children:"How-to use vMix with NDI"}),"\n",(0,s.jsxs)(t.p,{children:["vMix can also be set as an ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/using-ndi",children:"NDI"})," source with ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/using-obs",children:"OBS"}),". This can give you the flexibility to use vMix as your switcher and OBS with WebRTC and playback in a ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/hosted-viewer",children:"Hosted Player"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"To configure this, choose the Outputs / NDI / SRT configuration."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(77469).Z+"",width:"922",height:"558"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\uD83D\uDEA7 Network Traffic"}),"\n",(0,s.jsx)(t.p,{children:"It is recommended to use a hard-wired connection between NDI sources or a dedicated network with Quality of Service (QoS) enabled. You may observer 40 Mbps or more of network traffic with this type of configuration. This network traffic congestion and limited bandwidth can create issues with playback audio and/or video quality."}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},26183:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/vMix2-eff3d29df163d6bbe703ea611d11d89c.png"},85309:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/vMixABR4-149c880cabbc92426d8da1fd6444a629.png"},52494:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/vMixMBR1-b02e0713f3a766ab872b6707b6330f4c.png"},6961:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/vMixMBR2-78647755aae01b5692aed2f4e5f5f004.png"},30773:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/vMixMBR3-811f17b8a1558937c5201f5a323f2c58.png"},77469:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/vMix_NDI-b782320daa68809cd4b77ba2d9f59d27.png"},20521:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/vMix_RTMP_settings-5a5d32009fa8186f88ed2abfa4f2bfa5.png"},88783:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/vmix-srt-settings-paths-62ecb9c1f0e456193fbe724edfb9c7bd.png"},94303:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/vmix-srt-settings-264cd21e95356e532ffba6feab4582ea.png"},50065:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return l}});var n=i(67294);let s={},r=n.createContext(s);function l(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);