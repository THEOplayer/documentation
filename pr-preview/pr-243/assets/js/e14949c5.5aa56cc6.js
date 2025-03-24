"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["98990"],{19365:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>i,assets:()=>r,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"guides/multi-channel","title":"Multi-channel: aliases for channels","description":"This guide describes the multi-channel approach of THEOlive: ingest only once, and create multiple channel aliases to configure unique playouts. Next to a different configuration for each alias, THEOlive offers the possibility to apply some security settings (like Geoblocking and token based security) on each alias.","source":"@site/theolive/guides/multi-channel.md","sourceDirName":"guides","slug":"/guides/multi-channel","permalink":"/documentation/pr-preview/pr-243/theolive/guides/multi-channel","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/guides/multi-channel.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Alias"},"sidebar":"theolive","previous":{"title":"Authorization","permalink":"/documentation/pr-preview/pr-243/theolive/guides/authorization"},"next":{"title":"Redundancy","permalink":"/documentation/pr-preview/pr-243/theolive/guides/redundancy"}}'),t=a("85893"),l=a("50065");let s={sidebar_position:2,sidebar_label:"Alias"},o="Multi-channel: aliases for channels",r={},c=[{value:"Multi-channel: player aliases",id:"multi-channel-player-aliases",level:2},{value:"Managing your alias",id:"managing-your-alias",level:3},{value:"Analytics per channel alias",id:"analytics-per-channel-alias",level:3}];function h(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"multi-channel-aliases-for-channels",children:"Multi-channel: aliases for channels"})}),"\n",(0,t.jsx)(n.p,{children:"This guide describes the multi-channel approach of THEOlive: ingest only once, and create multiple channel aliases to configure unique playouts. Next to a different configuration for each alias, THEOlive offers the possibility to apply some security settings (like Geoblocking and token based security) on each alias."}),"\n",(0,t.jsxs)(n.p,{children:["All of this is possible via the ",(0,t.jsx)(n.a,{href:"https://console.theo.live",children:"THEOlive management console"}),", as well via the ",(0,t.jsx)(n.a,{href:"https://developers.theo.live/reference/create-channel-alias",children:"THEOlive API"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"multi-channel-player-aliases",children:"Multi-channel: player aliases"}),"\n",(0,t.jsx)(n.p,{children:"Do you want to make your live stream available to multiple customers concurrently? And do you require for each customer a different player look & feel, restrictions on countries the content is made available, and usage stats to be tracked separately? You can easily do this with the THEOlive multi-channel capability."}),"\n",(0,t.jsxs)(n.p,{children:['When accessing your "',(0,t.jsx)(n.em,{children:"Channel Details"}),'" page, you can create aliases for your channel under the section "',(0,t.jsx)(n.em,{children:"Playout configurations"}),'". For each alias that you create it\u2019s possible to subsequently change the playout configuration: colors, poster image, announcement message, logo etc.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create a new channel alias under the &quot;Playout configurations&quot; tab",src:a(22240).Z+"",width:"1053",height:"866"})}),"\n",(0,t.jsxs)(n.p,{children:["The big advantage here is that you only have to configure your ingest once, and can then share your content on multiple web pages as each alias has a different channel ID. Including an alias is very simple: you just have to copy the ID and paste it as the value of the ",(0,t.jsx)(n.code,{children:"data-theo-live-id"}),' attribute. Click on the "',(0,t.jsx)(n.em,{children:"Include channel on your page"}),'" tab to see the full explanation on how the include a specific playout configuration (alias) on your page.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Find the unique channel ID of your alias in the &quot;Include channel on your page&quot; tab",src:a(76807).Z+"",width:"1348",height:"539"})}),"\n",(0,t.jsx)(n.h3,{id:"managing-your-alias",children:"Managing your alias"}),"\n",(0,t.jsxs)(n.p,{children:["At any time, you can ",(0,t.jsx)(n.a,{href:"https://developers.theo.live/reference/update-channel-alias",children:"update"}),", ",(0,t.jsx)(n.a,{href:"https://developers.theo.live/reference/enable-channel-alias",children:"enable"}),", ",(0,t.jsx)(n.a,{href:"https://developers.theo.live/reference/disable-channel-alias",children:"disable"})," or ",(0,t.jsx)(n.a,{href:"https://developers.theo.live/reference/delete-channel-alias",children:"delete"})," a channel alias. The default alias can't be deleted, you'll have to delete your whole channel in case you want to do so."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Icon buttons to disable, enable or delete an alias",src:a(62674).Z+"",width:"1316",height:"253"})}),"\n",(0,t.jsx)(n.h3,{id:"analytics-per-channel-alias",children:"Analytics per channel alias"}),"\n",(0,t.jsx)(n.p,{children:"It's possible to visualize data per channel alias. In the console you can see your viewing insights (concurrent viewers, latency, locations of your viewers, browsers and operating systems used) and channel usage (viewing minutes) per alias by clicking on one of the links in the analytics section of the Channel Details page."}),"\n",(0,t.jsxs)(n.p,{children:["THEOlive also offers an API endpoint where you can query the minutes viewed on an hourly basis per channel alias. You can read more about it ",(0,t.jsx)(n.a,{href:"https://developers.theo.live/reference/get-channel-alias-analytics",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Link to viewing insights and channel usage page where analytics are stored per channel alias",src:a(80429).Z+"",width:"1017",height:"607"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},80429:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/3c77b57-channel-alias-analytics-962b0981cee275ae33e50f864348c0a7.png"},76807:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/6a57e61-channel-alias-include-72284e889533f80b40ecefc13f8520e6.png"},62674:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/8751d4a-alias-settings-5c48ed3e8abe7981927466e1f00d87ad.PNG"},22240:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/9ce6eb8-Create_channel_alias-46faf83cd89a30155edbef09ff6fa498.jpg"},50065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return s}});var i=a(67294);let t={},l=i.createContext(t);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);