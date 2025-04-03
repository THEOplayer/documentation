"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["86144"],{42147:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"hardware-encoders/using-elgato-stream-deck-with-obs-studio-webrtc-version","title":"Elgato","description":"Elgato is a world-leading provider of audiovisual technology for content creators in streaming platforms. Focused on revolutionizing creative workflows, Elgato has a growing ecosystem with cross-compatibility and seamless user experience.","source":"@site/millicast/hardware-encoders/using-elgato-stream-deck-with-obs-studio-webrtc-version.md","sourceDirName":"hardware-encoders","slug":"/using-elgato-stream-deck-with-obs-studio-webrtc-version","permalink":"/documentation/pr-preview/pr-254/millicast/using-elgato-stream-deck-with-obs-studio-webrtc-version","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/hardware-encoders/using-elgato-stream-deck-with-obs-studio-webrtc-version.md","tags":[],"version":"current","frontMatter":{"title":"Elgato","slug":"/using-elgato-stream-deck-with-obs-studio-webrtc-version"},"sidebar":"millicast","previous":{"title":"Teradek","permalink":"/documentation/pr-preview/pr-254/millicast/broadcasting-teradek-vidiu"},"next":{"title":"Haivision","permalink":"/documentation/pr-preview/pr-254/millicast/using-haivision-kb-encoder"}}'),o=n("85893"),s=n("50065");let r={title:"Elgato",slug:"/using-elgato-stream-deck-with-obs-studio-webrtc-version"},a=void 0,l={},c=[{value:"Stream deck",id:"stream-deck",level:2},{value:"Installing Elgato plug-in on macOS",id:"installing-elgato-plug-in-on-macos",level:3},{value:"Installing Elgato plug-in on Windows",id:"installing-elgato-plug-in-on-windows",level:3},{value:"How-to use StreamDeck inside OBS-WebRTC",id:"how-to-use-streamdeck-inside-obs-webrtc",level:3},{value:"Learn more",id:"learn-more",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Elgato"})," is a world-leading provider of audiovisual technology for content creators in streaming platforms. Focused on revolutionizing creative workflows, Elgato has a growing ecosystem with cross-compatibility and seamless user experience."]}),"\n",(0,o.jsx)(t.p,{children:"Within their myriad of products exists Stream Deck, a physical LCD panel with 15 shortcut keys that can be used to trigger any designated action from drop-in overlays to camera switching, adjusting audio, and more."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"\uD83D\uDC4D Getting Started"}),"\n",(0,o.jsxs)(t.p,{children:["If you haven't already, begin by following the ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/getting-started",children:"Getting Started"})," tutorial to start your first broadcast. You'll need your ",(0,o.jsx)(t.em,{children:"publish token"})," and ",(0,o.jsx)(t.em,{children:"stream name"})," for the steps described below."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["See the official ",(0,o.jsx)(t.a,{href:"https://www.elgato.com/us/en",children:"Elgato"})," site for documentation, installation instructions, and additional support."]}),"\n",(0,o.jsx)(t.h2,{id:"stream-deck",children:"Stream deck"}),"\n",(0,o.jsx)(t.h3,{id:"installing-elgato-plug-in-on-macos",children:"Installing Elgato plug-in on macOS"}),"\n",(0,o.jsxs)(t.p,{children:["To configure, install ",(0,o.jsx)(t.a,{href:"https://www.elgato.com/us/en/s/downloads",children:"Elgato software"})," on your computer and make sure you have the latest version of the regular ",(0,o.jsx)(t.a,{href:"https://obsproject.com/download",children:"OBS Studio"})," and the ",(0,o.jsx)(t.a,{href:"https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases",children:"OBS-WebRTC"})," installed. We are going to need the regular OBS Studio version to download the Elgato plugin."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Note: If you have an existing version of OBS-WebRTC, delete it first before installing the newest version."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["After installing OBS Studio, open a Finder window and visit the ",(0,o.jsx)(t.em,{children:"Go"})," menu at the top. Inside, press on ",(0,o.jsx)(t.em,{children:"Go To Folder..."})]}),"\n",(0,o.jsx)(t.p,{children:"Put the following folder path:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"/Library/Application Support"})}),"\n",(0,o.jsx)(t.p,{children:'Within this directory, you should see a folder named "obs-studio". Make a duplicate of that folder and rename it "obs-webrtc". If there is an existing folder called this, replace the previous version. Now, launch OBS-WebRTC.'}),"\n",(0,o.jsx)(t.p,{children:"At the top, on the Top menu bar, you should see the Elgato plugin."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(39413).Z+"",width:"2674",height:"1556"})}),"\n",(0,o.jsxs)(t.p,{children:["For any troubleshooting, verify if you have the most up-to-date version of the ",(0,o.jsx)(t.a,{href:"https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases",children:"forked OBS-WebRTC"})," and the ",(0,o.jsx)(t.a,{href:"https://www.elgato.com/us/en/s/downloads",children:"Elgato Stream Deck"})," software. Remove any previous versions of OBS-WebRTC and the ",(0,o.jsx)(t.em,{children:"obs-webrtc"})," folder from ",(0,o.jsx)(t.code,{children:"/Library/Application"})," Support is also necessary, as it might conflict with the current version's installation of the plugin."]}),"\n",(0,o.jsx)(t.h3,{id:"installing-elgato-plug-in-on-windows",children:"Installing Elgato plug-in on Windows"}),"\n",(0,o.jsxs)(t.p,{children:["For Windows, there is a couple of extra steps. Download the latest version of ",(0,o.jsx)(t.a,{href:"https://www.elgato.com/us/en/s/downloads",children:"Stream Deck"})," and unzip the files. Right-click the installation file and open the archive. Rename the following files so they end with .dll and .pdb:"]}),"\n",(0,o.jsx)(t.p,{children:"*Note: Remove the long random string at the end of the name."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"StreamDeckPlugin.dll"}),"\n",(0,o.jsx)(t.li,{children:"StreamDeckPlugin.pdb"}),"\n",(0,o.jsx)(t.li,{children:"StreamDeckPluginQt6.dll"}),"\n",(0,o.jsx)(t.li,{children:"StreamDeckPluginQt6.pdb"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Then, copy the above files to your OBS Plugin Folder (C:\\Program Files\\obs-studio\\obs-plugins\\64bit). Now, launch OBS-WebRTC and, similarly, go to the Tools tab on the menu bar, and you will see the Elgato plugin available."}),"\n",(0,o.jsx)(t.h3,{id:"how-to-use-streamdeck-inside-obs-webrtc",children:"How-to use StreamDeck inside OBS-WebRTC"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(71119).Z+"",width:"1280",height:"720"})}),"\n",(0,o.jsxs)(t.p,{children:["The following steps will be the same for either development environment. With OBS open, create two scenes with a different video source each. Here, Scene 1 will be desktop screen sharing, and Scene 2 will be a ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/using-ndi",children:"NDI source"}),". If you aren't familiar with NDI, ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/using-ndi",children:"visit our guide"})," dedicated to this topic."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(4037).Z+"",width:"2152",height:"1508"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(34081).Z+"",width:"2152",height:"1508"})}),"\n",(0,o.jsxs)(t.p,{children:["At this time, open the ",(0,o.jsx)(t.a,{href:"https://www.elgato.com/en/stream-deck",children:"Elgato Stream Deck"})," and make sure you have the StreamDeck connected to the computer. This is where we are going to define or modify what each key mean. In the software, there are unlimited actions that can be assigned for a specific operation. For the guide, the focus will be on OBS Studio."]}),"\n",(0,o.jsx)(t.p,{children:"On the available action within OBS Studio is the capacity to assign a key to a specific scene. Therefore, drag and drop the Scene action to an empty key above. There, assign it a title, and if properly connected to OBS, your scenes from OBS will show up; e.g. Scene 1 is assigned to Scene 1 - Desktop screensharing."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(34219).Z+"",width:"1672",height:"1526"})}),"\n",(0,o.jsx)(t.p,{children:"Afterward, assign another empty key to the other OBS scene in a similar fashion. Fill out the rest of the keys with any important actions you would like to physically control on the interface."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(34328).Z+"",width:"1674",height:"1534"})}),"\n",(0,o.jsx)(t.p,{children:"Tap between the different keys on the physical Stream Deck to see the actions that occur inside OBS."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(83663).Z+"",width:"2882",height:"1534"})}),"\n",(0,o.jsx)(t.p,{children:"Concurrently, the actions can be seen through Dolby.io Streaming dashboard*. Visit the stream token, and under the Publishing tab, copy in a new tab the Hosted Player Path URL**."}),"\n",(0,o.jsxs)(t.p,{children:["*Note: OBS needs to have the stream token configured for this step to be possible. Visit the ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/using-obs",children:"dedicated OBS guide"})," on how to set up a WebRTC stream."]}),"\n",(0,o.jsx)(t.p,{children:"**Note: Verify in the OBS controls that the streaming has started."}),"\n",(0,o.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,o.jsxs)(t.p,{children:["Learn more by exploring the ",(0,o.jsx)(t.a,{href:"https://dolby.io/blog/tag/broadcast/",children:"developer blog"})," and ",(0,o.jsx)(t.a,{href:"https://github.com/orgs/dolbyio-samples/repositories?q=broadcast",children:"code samples"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},34081:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Capture_decran_2023-07-12_a_4.47.19_PM-b04a42f931cd48390197e715b8b000e0.png"},4037:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Capture_decran_2023-07-12_a_4.47.23_PM-f7d858c6b4a64c337003e0a14353dfd5.png"},34328:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Capture_decran_2023-07-12_a_4.51.45_PM-fb213585e03ba169326ce0ce48ba9e75.png"},83663:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Capture_decran_2023-07-12_a_4.52.05_PM-e7c3620b47e22679a4589a5fa73a4dab.png"},39413:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Capture_decran_2023-07-12_a_4.56.47_PM-a9137c30d86279a40310abe0952b35b5.png"},34219:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Capture_decran_2023-07-12_a_4.58.07_PM-4324e7233d58fc246c94ee888b2e2c9e.png"},71119:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/elgato-streamdeck-obs-studio-04bce62633bb51c47bc08f81e339c5c6.jpg"},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var i=n(67294);let o={},s=i.createContext(o);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);