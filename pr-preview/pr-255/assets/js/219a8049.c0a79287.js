"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["87725"],{91122:function(e,i,t){t.r(i),t.d(i,{default:()=>w,frontMatter:()=>v,metadata:()=>n,assets:()=>f,toc:()=>x,contentTitle:()=>j});var n=JSON.parse('{"id":"capture/live-streaming-from-drones-rtmp","title":"Camera Drones","description":"Using a drone, unmanned aerial vehicles (UAVs), or other flying cameras can be a way to provide a unique perspective on any real-time activities. Many of these remote-controlled devices can support network connectivity that enables either direct WebRTC or RTMP output that can be used as a broadcast streaming source.","source":"@site/millicast/capture/live-streaming-from-drones-rtmp.mdx","sourceDirName":"capture","slug":"/live-streaming-from-drones-rtmp","permalink":"/documentation/pr-preview/pr-255/millicast/live-streaming-from-drones-rtmp","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/capture/live-streaming-from-drones-rtmp.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Camera Drones","slug":"/live-streaming-from-drones-rtmp","sidebar_position":6},"sidebar":"millicast","previous":{"title":"Action Cameras","permalink":"/documentation/pr-preview/pr-255/millicast/action-cameras"},"next":{"title":"Broadcast","permalink":"/documentation/pr-preview/pr-255/millicast/broadcast"}}'),r=t("85893"),s=t("50065");let o=t.p+"assets/images/dolbyio-dji-drone-streaming-menu-e31c13eec553400d4b9bd69a22cb5cb2.jpg",a=t.p+"assets/images/dolbyio-dji-drone-transmission-menu-1c6fb4e7c5c5068f8b645d4ebd83287c.jpg",l=t.p+"assets/images/dolbyio-dji-drone-live-streaming-menu-7143903c4c0fc249da99818aba4a9783.jpg",d=t.p+"assets/images/Screenshot_20220113-112623-79576a5d9c295be448ba45bfb814f295.jpg",c=t.p+"assets/images/Screenshot_20220113-112908-f10e502bfd7c5cbd149fb08742994d60.jpg",h=t.p+"assets/images/Dji_Pro_Controller-c25f968cdd9f842351634a5078d15d18.png",p=t.p+"assets/images/DJI_Plus_Controller-b3fc16df14d46789cbd08caa2a7d93e0.png",u=t.p+"assets/images/Autel_Drones_Smart_Controller-13f91890e239c64af283a4647f2657ea.png",m=t.p+"assets/images/Autel_Live_Deck-7839d99c780efd64907d9dfaffc88032.png",g=t.p+"assets/images/hdmi-07f50a6e466a0110642c71fdabc6047f.png",v={title:"Camera Drones",slug:"/live-streaming-from-drones-rtmp",sidebar_position:6},j=void 0,f={},x=[{value:"DJI",id:"dji",level:2},{value:"Simple set up using the DJI Fly App",id:"simple-set-up-using-the-dji-fly-app",level:3},{value:"1. Download the DJI Fly App",id:"1-download-the-dji-fly-app",level:4},{value:"2. Start the drone, controller, and app",id:"2-start-the-drone-controller-and-app",level:4},{value:"3. Open the settings menu to configure RTMP",id:"3-open-the-settings-menu-to-configure-rtmp",level:4},{value:"4. Enter Livestream settings",id:"4-enter-livestream-settings",level:4},{value:"5. Tune settings",id:"5-tune-settings",level:4},{value:"Viewing",id:"viewing",level:4},{value:"Record drone footage",id:"record-drone-footage",level:3},{value:"Video: Real-time Streaming drone latency test",id:"video-real-time-streaming-drone-latency-test",level:4},{value:"Additional options to capture and publish your drone live stream",id:"additional-options-to-capture-and-publish-your-drone-live-stream",level:3},{value:"Controller or receiver with HDMI output",id:"controller-or-receiver-with-hdmi-output",level:4},{value:"Publishing options",id:"publishing-options",level:4},{value:"Learn more",id:"learn-more",level:4}];function b(e){let i={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"Using a drone, unmanned aerial vehicles (UAVs), or other flying cameras can be a way to provide a unique perspective on any real-time activities. Many of these remote-controlled devices can support network connectivity that enables either direct WebRTC or RTMP output that can be used as a broadcast streaming source."}),"\n",(0,r.jsx)(i.p,{children:"This guide includes some examples:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#dji",children:"Capture from a DJI Mavic Mini"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#record-drone-footage",children:"Record Drone Footage"})}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["If you are using a drone that is not listed, you should be able to use similar settings for configuring streaming with an ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/using-rtmp-and-rtmps",children:"RTMP"})," ingestion source."]}),"\n",(0,r.jsxs)(i.admonition,{title:"Reliable Networks",type:"warning",children:[(0,r.jsx)(i.p,{children:"A stable internet connection is always required to achieve real-time streaming. Some aerial devices support cellular connectivity or can be used within range of a mobile device or network access point."}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"Please observe any safety protocols and regulations for drone usage in your region."})})]}),"\n",(0,r.jsx)(i.h2,{id:"dji",children:"DJI"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://www.dji.com/",children:"DJI"})," is a leader in consumer and professional drones used for aerial videography. Several models support networking and RTMP streaming from the device that can be sent directly to Dolby.io for ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/distribution",children:"distribution"})," over WebRTC."]}),"\n",(0,r.jsx)(i.p,{children:"Some examples:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.dji.com/phantom",children:"DJI Phantom"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.dji.com/mavic-3",children:"DJI Mavic 3"})}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"simple-set-up-using-the-dji-fly-app",children:"Simple set up using the DJI Fly App"}),"\n",(0,r.jsx)(i.h4,{id:"1-download-the-dji-fly-app",children:"1. Download the DJI Fly App"}),"\n",(0,r.jsxs)(i.p,{children:["Download the ",(0,r.jsx)(i.a,{href:"https://www.dji.com/au/downloads",children:"DJI Fly App"})," compatible with your model. This is a DJI product, so the user interface and instructions may vary from what is shown below. Visit the official ",(0,r.jsx)(i.a,{href:"https://www.dji.com/au/support?site=brandsite&from=nav",children:"DJI Support"})," for resources like product manuals, user guides, and news for the latest instructions."]}),"\n",(0,r.jsx)(i.p,{children:"The DJI Fly App with livestream RTMP supports the following DJI drones:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Mavic Mini, DJI Air 3, DJI Mavic 3 Pro, DJI Mini2 SE, DJI Mini 3, DJI Mavic 3 Classic,DJI Avata, DJI Mini 3 Pro, DJI Mini Pro 4, DJI Mavic 3, DJI Air 2S, DJI FPV, DJI Mini SE, DJI Mini 2, Mavic Air 2."})}),"\n",(0,r.jsx)(i.p,{children:"Many of the DJI controllers already include the DJI Fly App."}),"\n",(0,r.jsx)(i.h4,{id:"2-start-the-drone-controller-and-app",children:"2. Start the drone, controller, and app"}),"\n",(0,r.jsx)(i.p,{children:"When you are ready to setup your device, start the drone and the controller. Connect to the drone from the DJI application."}),"\n",(0,r.jsx)(i.h4,{id:"3-open-the-settings-menu-to-configure-rtmp",children:"3. Open the settings menu to configure RTMP"}),"\n",(0,r.jsx)(i.p,{children:"Select the menu in the upper right corner to open the available settings."}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:o,width:"500"})}),"\n",(0,r.jsxs)(i.p,{children:["Select the ",(0,r.jsx)(i.strong,{children:"Transmission"})," tab and open ",(0,r.jsx)(i.strong,{children:"Live Streaming Platforms"}),"."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:a,width:"500"})}),"\n",(0,r.jsxs)(i.p,{children:["Choose the ",(0,r.jsx)(i.strong,{children:"RTMP"})," option."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:l,width:"500"})}),"\n",(0,r.jsx)(i.h4,{id:"4-enter-livestream-settings",children:"4. Enter Livestream settings"}),"\n",(0,r.jsx)(i.admonition,{title:"Dolby.io Dashboard - Publish Token Details",type:"tip",children:(0,r.jsxs)(i.p,{children:["You will need to have your Dolby.io ",(0,r.jsx)(i.strong,{children:"publishing token"})," and ",(0,r.jsx)(i.strong,{children:"stream name"})," in order to complete this setup. See the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/getting-started/using-the-dashboard",children:"Getting Started"})," guide for instructions on creating a new app for the first time. You will also need the ",(0,r.jsx)(i.strong,{children:"RTMP publish path"})," from the ",(0,r.jsx)(i.em,{children:"Publishing"})," tab in the Dolby.io Dashboard. See the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/using-rtmp-and-rtmps",children:"RTMP"})," guide for more detail on where to find it."]})}),"\n",(0,r.jsxs)(i.p,{children:["For the Livestream settings, you must provide a URL for the ",(0,r.jsx)(i.strong,{children:"RTMP Address"}),". This is constructed from a few of your publisher token settings gathered from the Dolby.io Dashboard."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"RTMP publish path"})," + ",(0,r.jsx)(i.code,{children:"/"})," + ",(0,r.jsx)(i.code,{children:"RTMP publish stream name"})]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["Note that the ",(0,r.jsx)(i.strong,{children:"RTMP publish stream name"})," is already a concatenation of the ",(0,r.jsx)(i.em,{children:"publishing token"})," and ",(0,r.jsx)(i.em,{children:"stream name"}),". Typically this will look something similar to:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"rtmp://rtmp-auto.millicast.com:1935/v2/pub/${streamName}?token=${publishToken}\n"})}),"\n",(0,r.jsx)(i.h4,{id:"5-tune-settings",children:"5. Tune settings"}),"\n",(0,r.jsxs)(i.p,{children:["Choose a ",(0,r.jsx)(i.em,{children:"Resolution"})," and ",(0,r.jsx)(i.em,{children:"Bitrate"})," that meets your needs, and then select the ",(0,r.jsx)(i.strong,{children:"Start"})," button to begin the live stream. These settings will typically persist so that you don't have to configure each flight."]}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:d,width:"500"})}),"\n",(0,r.jsx)(i.p,{children:"After a countdown, you will see your live stream icon as active on the top of the application."}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:c,width:"500"})}),"\n",(0,r.jsx)(i.h4,{id:"viewing",children:"Viewing"}),"\n",(0,r.jsxs)(i.p,{children:["You can now share your viewer link provided from your Dolby.io developer portal under the API tab.",(0,r.jsx)(i.br,{}),"\n","Example: ",(0,r.jsx)(i.a,{href:"https://viewer.millicast.com/?streamId=k9Mwad/multiview",children:"https://viewer.millicast.com/?streamId=k9Mwad/multiview"})]}),"\n",(0,r.jsx)(i.h3,{id:"record-drone-footage",children:"Record drone footage"}),"\n",(0,r.jsxs)(i.p,{children:["By configuring your publish token to ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/recordings",children:"record"})," footage you can maintain a copy of anything that is captured to your ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/recordings",children:"Dolby.io Recording Archive"}),". This feature can incur additional charges, see the ",(0,r.jsx)(i.a,{href:"https://dolby.io/pricing",children:"pricing"})," page for additional detail."]}),"\n",(0,r.jsx)(i.h4,{id:"video-real-time-streaming-drone-latency-test",children:"Video: Real-time Streaming drone latency test"}),"\n",(0,r.jsx)(i.p,{children:"This example demonstrates an archive recording captured from a DJI Mavic for a 1920x1080 latency test."}),"\n",(0,r.jsx)("div",{className:"youtube-container",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/44GWULy5Jlw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,r.jsx)(i.h3,{id:"additional-options-to-capture-and-publish-your-drone-live-stream",children:"Additional options to capture and publish your drone live stream"}),"\n",(0,r.jsx)(i.h4,{id:"controller-or-receiver-with-hdmi-output",children:"Controller or receiver with HDMI output"}),"\n",(0,r.jsx)(i.p,{children:"Several drone providers, including enterprise level drones, have hardware devices that include video outputs allowing you to stream using any hardware or software encoder."}),"\n",(0,r.jsx)(i.p,{children:"The devices shown have HDMI outputs that provide multiple options to broadcast your drone's live stream."}),"\n",(0,r.jsx)(i.p,{children:"This option allows near real time live-streaming with additional codec options, quality settings or simulcast options."}),"\n",(0,r.jsx)(i.p,{children:"Streams can also benefit from constrained network environments with these options."}),"\n","\n",(0,r.jsxs)("div",{class:"center-container",children:[(0,r.jsx)("img",{src:h,width:"200"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"DJI Smart Controller"})}),(0,r.jsx)("img",{src:p,width:"200"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"DJI Enterprise Plus Controller"})}),(0,r.jsx)("img",{src:u,width:"200"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"Autel Drones Smart Controller"})}),(0,r.jsx)("img",{src:m,width:"200"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"Autel Live Deck"})})]}),"\n",(0,r.jsx)(i.p,{children:"Connect to a PC or Mobile device a simple HDMI capture device can be used."}),"\n","\n",(0,r.jsx)("div",{class:"center-container",children:(0,r.jsx)("img",{src:g,width:"200"})}),"\n",(0,r.jsx)(i.h4,{id:"publishing-options",children:"Publishing options"}),"\n",(0,r.jsx)(i.p,{children:"Web based broadcaster"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Web Based publisher with additional codecs can take advantage of low-bandwidth environments while still publishing an HD stream to your audience at sub-second latency."}),"\n",(0,r.jsxs)(i.li,{children:["OBS WebRTC allows transmission of drone streams with advanced codecs.",(0,r.jsx)(i.br,{}),"\n","OBS WebRTC with VP9 or AV1 can take advantage of low-bandwidth environments while still publishing an HD stream to your audience at sub-second latency."]}),"\n",(0,r.jsx)(i.li,{children:"Mobile device with Web broadcaster."}),"\n",(0,r.jsx)(i.li,{children:"Hardware Encoder"}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"learn-more",children:"Learn more"}),"\n",(0,r.jsxs)(i.p,{children:["Once you have configured your camera for capture, visit the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/broadcast",children:"broadcast"}),", ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/distribution",children:"distribution"}),", and ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/playback",children:"playback"})," guides to complete your project."]}),"\n",(0,r.jsxs)(i.p,{children:["If you have a different type of drone than the ones listed, reach out to our ",(0,r.jsx)(i.a,{href:"https://support.dolby.io/",children:"support team"})," to ask about compatibility."]})]})}function w(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return a},a:function(){return o}});var n=t(67294);let r={},s=n.createContext(r);function o(e){let i=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);