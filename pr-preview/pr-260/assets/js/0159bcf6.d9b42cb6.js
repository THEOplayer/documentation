"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["22212"],{73078:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>a,contentTitle:()=>d});var i=JSON.parse('{"id":"guides/Ingesting/videon","title":"Using Videon VersaStreamer / EdgeCaster with THEOlive","description":"This guide explains to you how to set up Videon VersaStreamer and Videon EdgeCaster correctly so they can be used to stream your content with THEOlive.","source":"@site/theolive/guides/Ingesting/videon.md","sourceDirName":"guides/Ingesting","slug":"/guides/Ingesting/videon","permalink":"/documentation/pr-preview/pr-260/theolive/guides/Ingesting/videon","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/guides/Ingesting/videon.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"Videon"},"sidebar":"theolive","previous":{"title":"vMix","permalink":"/documentation/pr-preview/pr-260/theolive/guides/Ingesting/vmix"},"next":{"title":"Geo-blocking","permalink":"/documentation/pr-preview/pr-260/theolive/guides/Security/geo-blocking"}}'),o=n("85893"),r=n("50065");let s={sidebar_position:5,sidebar_label:"Videon"},d="Using Videon VersaStreamer / EdgeCaster with THEOlive",l={},a=[{value:"1. Input settings",id:"1-input-settings",level:2},{value:"2. Set your Video Profile",id:"2-set-your-video-profile",level:2},{value:"Set your Audio profile",id:"set-your-audio-profile",level:2},{value:"4. Setting the Outputs",id:"4-setting-the-outputs",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"using-videon-versastreamer--edgecaster-with-theolive",children:"Using Videon VersaStreamer / EdgeCaster with THEOlive"})}),"\n",(0,o.jsx)(t.p,{children:"This guide explains to you how to set up Videon VersaStreamer and Videon EdgeCaster correctly so they can be used to stream your content with THEOlive."}),"\n",(0,o.jsx)(t.h2,{id:"1-input-settings",children:"1. Input settings"}),"\n",(0,o.jsx)(t.p,{children:"In your Videon VersaStreamer / EdgeCaster Streaming Dashboard configure the following settings:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'Under the "AV Input" section, please select "Input Settings".'}),"\n",(0,o.jsx)(t.li,{children:'Select your Video Input (SDI/HDMI) and Audio Input audio (Embedded Audio/3.5mm Audio). The "Video Input Resolution" will automatically be detected. In the example below this is 1080p25.'}),"\n",(0,o.jsx)(t.li,{children:'Click on the "Save" button.'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Defining the input settings",src:n(24167).Z+"",width:"964",height:"566"})}),"\n",(0,o.jsx)(t.admonition,{title:"\uD83D\uDEA7 Frame rate and bandwidth",type:"info",children:(0,o.jsxs)(t.p,{children:["Remember to set the frame rate to the same value as in your THEOlive channel ingest configuration and make sure that your encoder has a stable connection and enough upload bandwidth. See ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/theolive/guides/stream-configuration",children:"Stream configuration"})," for more details."]})}),"\n",(0,o.jsx)(t.h2,{id:"2-set-your-video-profile",children:"2. Set your Video Profile"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'Under the "Video Profiles" section, please select your profile, or create a new one. In the example below we have selected the profile "hesp.live". If you would create a new profile, you can change the name by clicking on the pencil.'}),"\n",(0,o.jsx)(t.li,{children:'Under Video Scaling, select the desired resolution. Note that THEOlive support resolutions up to 1080p. The resolution of your ingested stream can be found under "Encoded Video Resolution". In the example below we have selected pass through, which means we keep our "Encoded Video Resolution" of 1080p25.'}),"\n",(0,o.jsxs)(t.li,{children:['Match the "Video bitrate" value to the maximum value of the channel preset you are using. See ',(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/theolive/guides/stream-configuration",children:"Stream configuration"})," for more details."]}),"\n",(0,o.jsxs)(t.li,{children:["Further configure your encoding settings. Select ",(0,o.jsx)(t.code,{children:"Lowest"}),", ",(0,o.jsx)(t.code,{children:"Low"}),", ",(0,o.jsx)(t.code,{children:"Normal"})," or ",(0,o.jsx)(t.code,{children:"High"})," in the Quality/Latency drop-down menu, depending on your preference. Selecting ",(0,o.jsx)(t.code,{children:"Lowest"})," will give you lower quality but also the lowest latency and the other way around for ",(0,o.jsx)(t.code,{children:"High"})," which gives the ",(0,o.jsx)(t.code,{children:"Highest"})," quality but with slightly higher latency."]}),"\n",(0,o.jsx)(t.li,{children:'Click on the "Save" button.'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Setting up the video profile",src:n(19505).Z+"",width:"920",height:"799"})}),"\n",(0,o.jsx)(t.h2,{id:"set-your-audio-profile",children:"Set your Audio profile"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'Under the "Audio Profiles" section, please select your profile, or create a new one. In the example below we have selected the profile "hesp.live". If you would create a new profile, you can change the name by clicking on the pencil.'}),"\n",(0,o.jsx)(t.li,{children:"Select your audio encoding settings. In the example below \xb4MPEG-4 AAC-LC` has been selected with 128kbps audio bitrate."}),"\n",(0,o.jsx)(t.li,{children:'Click on the "Save" button.'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Setting the audio profile",src:n(4149).Z+"",width:"920",height:"445"})}),"\n",(0,o.jsx)(t.h2,{id:"4-setting-the-outputs",children:"4. Setting the Outputs"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'Under the Section "Outputs", select an RTMP output. \xb4RTMP 1\xb4 has been selected in the example below.'}),"\n",(0,o.jsx)(t.li,{children:'Select the "Video Source" and "Audio Source" previously defined under sections 2 and 3.'}),"\n",(0,o.jsxs)(t.li,{children:["Select ",(0,o.jsx)(t.code,{children:"Genetic RTMP"}),' under the "Streaming Providers" dropdown menu.']}),"\n",(0,o.jsxs)(t.li,{children:['Use your RTMP Push URL and stream key to complete the "Stream URL". The stream key should be copied after the RTMP Push URL. So if your RTMP Push URL is ',(0,o.jsx)(t.code,{children:"rtmps://rtmp.<my-channel-region>.hesp.live/live"})," and your stream key ",(0,o.jsx)(t.code,{children:"<my-stream-key>"}),', then you should complete after the "rtmps://" ',(0,o.jsx)(t.code,{children:"rtmps://rtmp.<my-channel-region>.hesp.live/live/<my-stream-key>"})]}),"\n",(0,o.jsx)(t.li,{children:'Click on the "Save" button.'}),"\n",(0,o.jsx)(t.li,{children:'You are now ready to start streaming! Switch on the "Output" by moving the orange button to "On".'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Setting the outputs",src:n(73286).Z+"",width:"913",height:"584"})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},73286:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/15eb115-4.Videon_Edgecaster_-_Output-19f421c1fc4f1dfd3dde1e872875c077.jpg"},24167:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/ad14aad-1.Videon_Edgecaster_-_Input_Settings-626035fdb4cd659910aaac7fbe22555c.jpg"},19505:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/c5767b3-2.Videon_Edgecaster_-_Video_Profile-9a29caa4d180e432209cb7431ccc4860.jpg"},4149:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/fad7ad2-3.Videon_Edgecaster_-_Audio_Profile-ba1c98312d3bfad4d009d8f954542acd.jpg"},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var i=n(67294);let o={},r=i.createContext(o);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);