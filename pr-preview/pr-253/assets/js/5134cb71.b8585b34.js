"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["93840"],{97569:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>s,metadata:()=>i,assets:()=>A,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"hardware-encoders/using-osprey-talon-whip-hardware-encoder","title":"Osprey","description":"Osprey Video is a world leader in broadcasting solutions and an early adopter of WHIP for their Osprey Talon 4K-SC Encoder. By supporting WHIP, Osprey is able to offer an encoder that can natively encode WebRTC streams at broadcast-level quality for a variety of applications, such as sports broadcasting, live event broadcasting, and auction streaming.","source":"@site/millicast/hardware-encoders/using-osprey-talon-whip-hardware-encoder.md","sourceDirName":"hardware-encoders","slug":"/using-osprey-talon-whip-hardware-encoder","permalink":"/documentation/pr-preview/pr-253/millicast/using-osprey-talon-whip-hardware-encoder","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/hardware-encoders/using-osprey-talon-whip-hardware-encoder.md","tags":[],"version":"current","frontMatter":{"title":"Osprey","slug":"/using-osprey-talon-whip-hardware-encoder"},"sidebar":"millicast","previous":{"title":"Magewell","permalink":"/documentation/pr-preview/pr-253/millicast/using-magewell-encoder"},"next":{"title":"Videon","permalink":"/documentation/pr-preview/pr-253/millicast/videon"}}'),r=t("85893"),o=t("50065");let s={title:"Osprey",slug:"/using-osprey-talon-whip-hardware-encoder"},a=void 0,A={},l=[{value:"Osprey Talon",id:"osprey-talon",level:2},{value:"How-to use Osprey Talon with WHIP",id:"how-to-use-osprey-talon-with-whip",level:3},{value:"How-to use Osprey Talon with SRT",id:"how-to-use-osprey-talon-with-srt",level:3},{value:"Turn on SRT encryption",id:"turn-on-srt-encryption",level:4},{value:"Learn more",id:"learn-more",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Osprey Video"})," is a world leader in broadcasting solutions and an early adopter of ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/millicast/webrtc-whip",children:"WHIP"})," for their Osprey Talon 4K-SC Encoder. By supporting WHIP, Osprey is able to offer an encoder that can natively encode WebRTC streams at broadcast-level quality for a variety of applications, such as ",(0,r.jsx)(n.a,{href:"https://dolby.io/solutions/sports-betting/",children:"sports broadcasting"}),", ",(0,r.jsx)(n.a,{href:"https://dolby.io/solutions/live-events/",children:"live event broadcasting"}),", and ",(0,r.jsx)(n.a,{href:"https://dolby.io/solutions/auctions/",children:"auction streaming"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can originate a broadcast from Osprey over a ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/millicast/webrtc-whip",children:"WHIP"})," or ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/millicast/using-srt",children:"SRT"})," source."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/millicast/using-osprey-talon-whip-hardware-encoder#how-to-use-osprey-talon-with-whip",children:"Configure WHIP"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/millicast/using-osprey-talon-whip-hardware-encoder#how-to-use-osprey-talon-with-srt",children:"Configure SRT"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\uD83D\uDC4D Getting Started"}),"\n",(0,r.jsxs)(n.p,{children:["If you haven't already, begin by following the ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/millicast/getting-started",children:"Getting Started"})," tutorial to start your first broadcast. You'll need your ",(0,r.jsx)(n.em,{children:"publish token"})," and ",(0,r.jsx)(n.em,{children:"stream name"})," for the steps described below."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See the official ",(0,r.jsx)(n.a,{href:"https://www.ospreyvideo.com/",children:"Osprey Video"})," site for documentation, installation instructions, and additional support."]}),"\n",(0,r.jsx)(n.h2,{id:"osprey-talon",children:"Osprey Talon"}),"\n",(0,r.jsx)(n.p,{children:"For cameras that don\u2019t have built-in encoders, you can connect the camera to an external encoder such as the Osprey Talon."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(21950).Z+"",width:"1584",height:"596"})}),"\n",(0,r.jsx)(n.p,{children:"You'll need to plug an ethernet connection and a power supply into your Talon encoder and power the device on."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(37838).Z+"",width:"1573",height:"520"})}),"\n",(0,r.jsxs)(n.p,{children:["Once powered on, the device will be discoverable on your local network. You can interface with the device by opening the IP address in your browser, or, if you are a Windows user, you can ",(0,r.jsx)(n.a,{href:"https://www.ospreyvideo.com/talon-software-and-firmware",children:"download the Osprey Boss Pro"}),", which provides a UI for finding the encoder."]}),"\n",(0,r.jsxs)(n.p,{children:["Once found in your browser, you'll be prompted to log into the device. Refer to the ",(0,r.jsx)(n.a,{href:"https://www.ospreyvideo.com/manuals",children:"Osprey Talon Encoder User Manual "}),"to learn about your device's username and password."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(28006).Z+"",width:"2362",height:"1434"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use-osprey-talon-with-whip",children:"How-to use Osprey Talon with WHIP"}),"\n",(0,r.jsxs)(n.p,{children:["To get started, you'll have to ",(0,r.jsx)(n.a,{href:"https://dashboard.dolby.io/signup",children:"login"})," to a Dolby.io account. Within the account, you'll need the ",(0,r.jsx)(n.em,{children:"Stream Name"})," and ",(0,r.jsx)(n.em,{children:"Publishing Token"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Inside the encoder UI, click on the ",(0,r.jsx)(n.em,{children:"Channels"})," tab. From the Channels tab, set the protocol to Dolby.io (WebRTC). Enter your Stream Name and Publishing Token in the corresponding fields."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(90516).Z+"",width:"1625",height:"800"})}),"\n",(0,r.jsx)(n.p,{children:"After inputting your credentials, switch to the Dashboard tab and click the green button to start the broadcast."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(96978).Z+"",width:"1567",height:"800"})}),"\n",(0,r.jsxs)(n.p,{children:["The stream is now live. To view the stream, navigate back to your newly created token on the Dolby.io Dashboard and switch to the ",(0,r.jsx)(n.em,{children:"Playback"})," tab. From the Playback tab, copy the ",(0,r.jsx)(n.em,{children:"Hosted Player Path"})," URL and open it in your browser."]}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use-osprey-talon-with-srt",children:"How-to use Osprey Talon with SRT"}),"\n",(0,r.jsxs)(n.p,{children:["To get started, you'll have to ",(0,r.jsx)(n.a,{href:"https://dashboard.dolby.io/signup",children:"login"})," to a Dolby.io account. Within the account, you'll need the ",(0,r.jsx)(n.em,{children:"SRT stream ID"})," and ",(0,r.jsx)(n.em,{children:"SRT publish path"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Inside the encoder UI, click on the ",(0,r.jsx)(n.em,{children:"Channels"})," tab. From the Channels tab, set the protocol to ",(0,r.jsx)(n.strong,{children:"TS over SRT"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For the ",(0,r.jsx)(n.code,{children:"SRT Dest Address"})," input the ",(0,r.jsx)(n.strong,{children:"SRT publish path"})," with the port kept separate in the ",(0,r.jsx)(n.code,{children:"SRT Port"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The value of the ",(0,r.jsx)(n.code,{children:"SRT Stream ID"})," must be URL encoded. To get that URL encoded value, look for the ",(0,r.jsx)(n.strong,{children:"SRT publish URL"})," and copy the string of characters after ",(0,r.jsx)(n.code,{children:"_?streamId=_"}),'. For example, "',(0,r.jsx)(n.em,{children:"lq11zkzu%3Ft%3DVgkvUAa5b3QvoLW5b3QvoLW5b3QvoLW-ak"}),'".']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(37).Z+"",width:"2534",height:"1076"})}),"\n",(0,r.jsx)(n.p,{children:"Once configured, you can press start and the encoder will begin streaming content."}),"\n",(0,r.jsx)(n.h4,{id:"turn-on-srt-encryption",children:"Turn on SRT encryption"}),"\n",(0,r.jsxs)(n.p,{children:["To enable SRT encryption for the SRT feed, in the Dolby.io dashboard for your stream token, enable ",(0,r.jsx)(n.strong,{children:"Passphrase encryption"})," and copy the ",(0,r.jsx)(n.strong,{children:"SRT passphrase"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(59395).Z+"",width:"1368",height:"452"})}),"\n",(0,r.jsx)(n.p,{children:"In the Osprey Talon dashboard, enable AES-128 Encryption and paste the passphrase."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(91051).Z+"",width:"706",height:"78"})}),"\n",(0,r.jsx)(n.p,{children:"Once configured, you can press start and the encoder will begin streaming content."}),"\n",(0,r.jsx)(n.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,r.jsxs)(n.p,{children:["Learn more by exploring the ",(0,r.jsx)(n.a,{href:"https://dolby.io/blog/tag/broadcast/",children:"developer blog"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/orgs/dolbyio-samples/repositories?q=broadcast",children:"code samples"}),"."]})]})}function c(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28006:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/2B9A2FCC-5901-4390-A7A2-4682899CBD78_1_201_a-1935978bbb19e50defa2df1578b8379d.jpeg"},37838:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/Image-6-2-c3c917e4a03c4fa8d68ff000daea356a.jpg"},96978:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/aa7dff6-osprey-broadcast-679ce749e78447fdece2d61d3739841f.png"},21950:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/b12e768-Osprey_Talon-3b1c019b1bb6d712988ba51924f9aef2.png"},91051:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},37:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/osprey-srt-bedf81842a5d6b6fe0698cd8fa5ed69d.png"},59395:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/srt-passphrase-117b8201dc14ce60ce3027004991db95.png"},90516:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/whip-osprey-talon-6b229304587f2bc0a80c0d04acdc0a20.png"},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(67294);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);