"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["34897"],{51048:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>a,assets:()=>r,toc:()=>h,contentTitle:()=>o});var a=JSON.parse('{"id":"guides/redundancy","title":"Redundancy","description":"With THEOlive we want to make sure your viewers can continue watching your stream, even if there is an ingest failure or if there are connectivity problems in a certain location. It is hence possible to set up a fallback stream. This means that if one stream is unavailable for a short amount of time, the player checks if the fallback stream is available and switches the player source automatically to this stream. In this case, the viewers only see a small interruption and can continue watching without having to act.","source":"@site/theolive/guides/redundancy.md","sourceDirName":"guides","slug":"/guides/redundancy","permalink":"/documentation/pr-preview/pr-266/theolive/guides/redundancy","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/guides/redundancy.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"theolive","previous":{"title":"Alias","permalink":"/documentation/pr-preview/pr-266/theolive/guides/multi-channel"},"next":{"title":"Stream Configuration","permalink":"/documentation/pr-preview/pr-266/theolive/guides/stream-configuration"}}'),i=t("85893"),l=t("50065");let s={sidebar_position:3},o="Redundancy",r={},h=[{value:"1. Create two channels and start them.",id:"1-create-two-channels-and-start-them",level:2},{value:"2. Set the <code>fallback</code> using the THEOlive API",id:"2-set-the-fallback-using-the-theolive-api",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"redundancy",children:"Redundancy"})}),"\n",(0,i.jsx)(n.p,{children:"With THEOlive we want to make sure your viewers can continue watching your stream, even if there is an ingest failure or if there are connectivity problems in a certain location. It is hence possible to set up a fallback stream. This means that if one stream is unavailable for a short amount of time, the player checks if the fallback stream is available and switches the player source automatically to this stream. In this case, the viewers only see a small interruption and can continue watching without having to act."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Setting a fallback is possible on channel and on channel alias level. Example"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Channel A has aliases A1 and A2"}),"\n",(0,i.jsx)(n.li,{children:"Channel B has aliases B1 and B2"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This means"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Channel A can fallback to Channel B, or to one of the aliases of B (B1, B2)"}),"\n",(0,i.jsx)(n.li,{children:"An alias of channel A (for example alias A1), can fall back to channel B, or one of its aliases (B1, B2)"}),"\n",(0,i.jsx)(n.li,{children:"Channel B can fall back to channel A, or aliases A1, A2"}),"\n",(0,i.jsx)(n.li,{children:"An alias of channel B can fall back to channel A, or aliases of it (A1, A2)"}),"\n",(0,i.jsx)(n.li,{children:"It's not possible for channel A to fall back to an alias of itself (A1, A2), or for an alias to fall back to its parent channel (A1 to A). The same applies for channel B and its aliases."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In what follows, we describe the approach to set a fallback for one channel."}),"\n",(0,i.jsx)(n.h2,{id:"1-create-two-channels-and-start-them",children:"1. Create two channels and start them."}),"\n",(0,i.jsxs)(n.p,{children:["You'll need to create two THEOlive channels via the ",(0,i.jsx)(n.a,{href:"https://developers.theo.live/reference/create-channel",children:"API"})," or ",(0,i.jsx)(n.a,{href:"https://console.theo.live/",children:"management console"}),". Let's say for example that we have the following channels with fictive IDs:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Channel ",(0,i.jsx)(n.code,{children:"<channel-in-us-west>"})," which is located in the ",(0,i.jsx)(n.code,{children:"us-west"})," region"]}),"\n",(0,i.jsxs)(n.li,{children:["Channel ",(0,i.jsx)(n.code,{children:"<channel-in-us-east>"})," which is located in the ",(0,i.jsx)(n.code,{children:"us-east"})," region"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Don't forget to start both channels. If the fallback stream isn't started, it will be impossible to switch to it when something goes wrong with the primary one!"}),"\n",(0,i.jsxs)(n.h2,{id:"2-set-the-fallback-using-the-theolive-api",children:["2. Set the ",(0,i.jsx)(n.code,{children:"fallback"})," using the THEOlive API"]}),"\n",(0,i.jsxs)(n.p,{children:["Assume the channel with ID ",(0,i.jsx)(n.code,{children:"<channel-in-us-west>"})," should have a fallback that links to the ",(0,i.jsx)(n.code,{children:"<channel-in-us-east>"})," channel. To make this work, we need to send a request to the ",(0,i.jsx)(n.code,{children:"PATCH https://api.theo.live/channels/<channel-in-us-west>"})," endpoint to update the settings of ",(0,i.jsx)(n.code,{children:"<channel-in-us-west>"}),". Passing the following JSON body with the request will set the ",(0,i.jsx)(n.code,{children:"<channel-in-us-east>"})," channel as the fallback channel."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "fallback": {\n    "src": "<channel-in-us-east>",\n    "enabled": true\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This will work as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Before starting anything, the player will check if the primary channel has been started (",(0,i.jsx)(n.code,{children:"<channel-in-us-west>"})," in our case)."]}),"\n",(0,i.jsx)(n.li,{children:"If the channel is playing, the player will start playing. If the channel has not been started yet, a message will be shown that the live stream isn't started yet."}),"\n",(0,i.jsx)(n.li,{children:"When the primary stream becomes unavailable after a while, the player will check if a fallback is defined and switch to it if possible."}),"\n",(0,i.jsx)(n.li,{children:"If this fallback becomes unavailable after a while, the player will try to switch back to the primary stream."}),"\n",(0,i.jsx)(n.li,{children:"This process will continue to work this way. If both streams are unavailable, the pre-live settings will be shown (an announcement message and optionally a poster image too)."}),"\n",(0,i.jsx)(n.li,{children:"When the primary channel is stopped, all players will stop playing (even if the fallback channel is still streaming)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information, please visit our ",(0,i.jsx)(n.a,{href:"https://developers.theo.live/reference/update-channel",children:"API Reference"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that the fallback can also easily be set in our management console on the Channel Details page. Scroll down to the ",(0,i.jsx)(n.strong,{children:"Playout Configurations"})," section and select the ",(0,i.jsx)(n.em,{children:"Fallback"})," tab."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Setting a fallback through the management console",src:t(24228).Z+"",width:"1981",height:"645"})})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},24228:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/8d77256-Screenshot_2023-06-28_131652-cceda34cf550ea3d5a44a05288d724c8.png"},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var a=t(67294);let i={},l=a.createContext(i);function s(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);