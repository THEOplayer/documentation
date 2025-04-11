"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["82695"],{12703:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"guides/Ingesting/obs","title":"Using OBS with THEOlive","description":"This guide will shortly describe how to set up OBS Studio correctly so it can be used to stream content to THEOlive.","source":"@site/theolive/guides/Ingesting/obs.md","sourceDirName":"guides/Ingesting","slug":"/guides/Ingesting/obs","permalink":"/documentation/pr-preview/pr-266/theolive/guides/Ingesting/obs","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/guides/Ingesting/obs.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"OBS"},"sidebar":"theolive","previous":{"title":"HLS","permalink":"/documentation/pr-preview/pr-266/theolive/guides/hls"},"next":{"title":"Wirecast","permalink":"/documentation/pr-preview/pr-266/theolive/guides/Ingesting/wirecast"}}'),i=n("85893"),s=n("50065");let o={sidebar_position:2,sidebar_label:"OBS"},a="Using OBS with THEOlive",l={},c=[{value:"1. Add a source",id:"1-add-a-source",level:2},{value:"2. Define the settings",id:"2-define-the-settings",level:2},{value:"3. Start streaming",id:"3-start-streaming",level:2},{value:"4. Start your THEOlive channel",id:"4-start-your-theolive-channel",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"using-obs-with-theolive",children:"Using OBS with THEOlive"})}),"\n",(0,i.jsxs)(t.p,{children:["This guide will shortly describe how to set up ",(0,i.jsx)(t.a,{href:"https://obsproject.com",children:"OBS Studio"})," correctly so it can be used to stream content to THEOlive."]}),"\n",(0,i.jsx)(t.h2,{id:"1-add-a-source",children:"1. Add a source"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.em,{children:"Source"}),' section at the bottom of the application, hit the + sign. You can choose any source you want. As an example, we can select "Display Capture", which will record your screen.']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Selecting a source",src:n(63970).Z+"",width:"652",height:"457"})}),"\n",(0,i.jsx)(t.h2,{id:"2-define-the-settings",children:"2. Define the settings"}),"\n",(0,i.jsxs)(t.p,{children:["Select ",(0,i.jsx)(t.em,{children:"Settings"})," in the ",(0,i.jsx)(t.em,{children:"Controls"})," section at the right bottom of the application. Click on the ",(0,i.jsx)(t.em,{children:"Stream"})," tab and enter your credentials:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:['Select "Custom..." as the ',(0,i.jsx)(t.em,{children:"Service"})]}),"\n",(0,i.jsxs)(t.li,{children:["Pass the ",(0,i.jsx)(t.code,{children:"rtmpPushUrl"})," URL as ",(0,i.jsx)(t.em,{children:"Server"})]}),"\n",(0,i.jsxs)(t.li,{children:["Make sure to enter the ",(0,i.jsx)(t.code,{children:"streamKey"})," as ",(0,i.jsx)(t.em,{children:"Stream Key"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Defining stream settings",src:n(79890).Z+"",width:"1303",height:"807"})}),"\n",(0,i.jsxs)(t.p,{children:["As a next step, go to the ",(0,i.jsx)(t.em,{children:"Output"})," tab in the ",(0,i.jsx)(t.em,{children:"Settings"})," menu, and configure the following settings in order to achieve the lowest possible latency with THEOlive."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Output Mode: ",(0,i.jsx)(t.code,{children:"Advanced"})]}),"\n",(0,i.jsxs)(t.li,{children:['Bitrate: match the max bitrate of the profile used in your channel (e.g.: 4500Kbps for "sport"). ',(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/theolive/guides/stream-configuration",children:"More details"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["CPU Usage Preset (higher = less CPU): ",(0,i.jsx)(t.code,{children:"veryfast"})]}),"\n",(0,i.jsxs)(t.li,{children:["Profile: ",(0,i.jsx)(t.code,{children:"main"})]}),"\n",(0,i.jsxs)(t.li,{children:["Tune: ",(0,i.jsx)(t.code,{children:"zerolatency"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Defining output settings",src:n(32271).Z+"",width:"1227",height:"942"})}),"\n",(0,i.jsxs)(t.p,{children:["Go to the ",(0,i.jsx)(t.em,{children:"Video"})," tab and set the frame rate to the same value you are using in your channel. See ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/theolive/guides/stream-configuration",children:"Stream configuration"})," for more details."]}),"\n",(0,i.jsx)(t.admonition,{title:"\uD83D\uDEA7 Upload bandwidth",type:"info",children:(0,i.jsx)(t.p,{children:"Make sure that your encoder has a stable connection and enough upload bandwidth. This will ensure all data is correctly sent to the THEOlive channel."})}),"\n",(0,i.jsx)(t.h2,{id:"3-start-streaming",children:"3. Start streaming"}),"\n",(0,i.jsxs)(t.p,{children:["Close the window and click on ",(0,i.jsx)(t.em,{children:"Start Streaming"})," in the same ",(0,i.jsx)(t.em,{children:"Controls"})," section"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Start streaming your video content",src:n(10853).Z+"",width:"326",height:"209"})}),"\n",(0,i.jsx)(t.h2,{id:"4-start-your-theolive-channel",children:"4. Start your THEOlive channel"}),"\n",(0,i.jsxs)(t.p,{children:["This can be done either ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/reference/start-channel",children:"through the API"})," or via ",(0,i.jsx)(t.a,{href:"https://console.theo.live/",children:"the management console"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},32271:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/4f50555-settingsOBS-a466a85bc5548821d04505d2c598a410.PNG"},63970:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/5edb67a-OBS_snipping_1-02c8aa25f4ff0dadab23851d2541db11.PNG"},10853:function(e,t,n){n.d(t,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAADRCAYAAACwwxu/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA68SURBVHhe7d0/rxzVGcdxv5CUeROhDaEA04PjChe4ijsckGxp5YJgkIiNxNW1RIMEFZbwtiEoKMjGbhESgsYWDU1ew2Ses3Nmn/ntc2Zm7+5de2e+xUfe+Xdm7rXvl9m7aM6Fl/70UgUAWCOMACAIIwAIwggAgjACgCCMACAIIwAIwggAgjACgCCMACAIIwAIwggAgjACgCCMACAIIwAIwggAgjACgCCMACAIIwAIwggAgjACgCCMACAIIwAIwggAgjACgCCMACAIIwAIwggAgjACgCCMACAIIwAIwggA4sIrf3mlynSj3wYAc0EYAUAQRgAQhBEABGEEAEEYAUAQRgy4Up388Kx69rTxw0l1JdzvEG5WD54+rk7eirYB+0MYUfbWSfW4juGDG911J355a7vEjTBinJ9++qn67bffWr///nv12WefhftGCCMKVneKnSjuBWHE+fvqq6+qT+5+0vr888+rD29/GO4bIYyIpbvFB9XNaFvW3FHmt9nriDYB+/RBu+3xp1ea9ev9n319s933wdeP63XN+YbGTWHsvsXff8BxzN5///3O8uXLl6t3//5uZ10fwoiYxan394mryLVBSjHL0WoCmMJXL9+wQObI+rit912Fc71cHrd5bWPm8QFx+/bt6vWLr1cff/xx9fPPP1e//vpr9fTp0+rHH3+svvvPd+ExHmFELAWp544x2H7z6xy0KH5B3Da21caOm/bzQQXWFotFumv89t/fVr/88kv6nePDhw+rb/71TfX9f78Pj/EIIwoGfsf4vMPYbLvyqb0F77lOzNp7775XXf7r5c66D/7xQWc5QhhRlt4CS3TqcK0+lbZIuW2doPXFr29bXh477orFkTtHRAgjzkcK0/pDjs7/x9jZNhS79bLdAaZj3IcvndiNGbeJ9kr3DhPIrl27Vt35550Uw+yjjz4K9/UIIwAIwggAgjACgCCMACAIIwAIwggAYnCWwP/94Y8AMBvWPcIIAI51jzACgGPdI4wA4Fj3CCMAONa9M4Xx4sWLAHD0or5Z9wgjgNmK+mbdI4wAZivqm3WPMAKYrahv1j3CCGC2or5Z9wgj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"},79890:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/a688033-OBS_snipping_2-2254149a0f84b128d91cb5b6c56e14c1.PNG"},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(67294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);