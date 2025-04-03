"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["71884"],{41286:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>o,assets:()=>c,toc:()=>r,contentTitle:()=>l});var o=JSON.parse('{"id":"guides/Security/geo-blocking","title":"Geo-blocking","description":"Geo-blocking allows you to block content in certain countries (\\"blacklisting\\"), or only allow a set of countries to have access to it (\\"whitelisting\\"). You can easily enable/disable it through the management console or via the API. We\'ll discuss both approaches in this guide.","source":"@site/theolive/guides/Security/geo-blocking.md","sourceDirName":"guides/Security","slug":"/guides/Security/geo-blocking","permalink":"/documentation/pr-preview/pr-253/theolive/guides/Security/geo-blocking","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/guides/Security/geo-blocking.md","tags":[],"version":"current","frontMatter":{},"sidebar":"theolive","previous":{"title":"Videon","permalink":"/documentation/pr-preview/pr-253/theolive/guides/Ingesting/videon"},"next":{"title":"Token based security","permalink":"/documentation/pr-preview/pr-253/theolive/guides/Security/token-based-security"}}'),t=i("85893"),a=i("50065");let s={},l="Geo-blocking",c={},r=[{value:"How it works",id:"how-it-works",level:2},{value:"Example: combination of channel and alias geo-blocking",id:"example-combination-of-channel-and-alias-geo-blocking",level:2},{value:"Managing geo-blocking in the console",id:"managing-geo-blocking-in-the-console",level:2}];function h(e){let n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"geo-blocking",children:"Geo-blocking"})}),"\n",(0,t.jsx)(n.p,{children:'Geo-blocking allows you to block content in certain countries ("blacklisting"), or only allow a set of countries to have access to it ("whitelisting"). You can easily enable/disable it through the management console or via the API. We\'ll discuss both approaches in this guide.'}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsxs)(n.p,{children:["You can enable geo-blocking on the main channel by ",(0,t.jsx)(n.a,{href:"https://developers.theo.live/reference/update-channel",children:"updating"})," the ",(0,t.jsx)(n.code,{children:"publicationConfig"})," object of a channel. There are two",(0,t.jsx)(n.code,{children:" mode"}),"s available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"whitelist"'}),": used by default when no ",(0,t.jsx)(n.code,{children:"mode"})," is passed. This will only make the content (your stream) available in the countries that have been passed in the ",(0,t.jsx)(n.code,{children:"countries"})," property. Other countries won't have access to your stream."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"blacklist"'}),": will bock the content in the countries that have been passed, and allow it in all other countries."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For example: if you want to enable geo-blocking and restrict the viewers to only Belgium and Germany, you have to pass the following request. ",(0,t.jsxs)(n.strong,{children:["Note that countries should be passed in ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",children:"ISO 3166-1 alpha-2 codes"}),"."]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"Enable geo-blocking on a channel",children:'{\n  "publicationConfig": {\n    "geoBlocking": {\n      "enabled": true,\n      "countries": ["BE", "DE"],\n      "mode": "whitelist"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"When you want to disable geo-blocking, you can pass the same request as above, but with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'"enabled": false'})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"countries"})," can be omitted as it will be ignored"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The same can be done for channel alias. You just have to use ",(0,t.jsx)(n.a,{href:"https://developers.theo.live/reference/update-channel-alias",children:"the right endpoint"})," for it."]}),"\n",(0,t.jsx)(n.p,{children:"Other example: we want to make our stream available anywhere, but not in Belgium:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"Use blacklist geo-block",children:'{\n  "publicationConfig": {\n    "geoBlocking": {\n      "enabled": true,\n      "countries": ["BE"],\n      "mode": "blacklist"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"example-combination-of-channel-and-alias-geo-blocking",children:"Example: combination of channel and alias geo-blocking"}),"\n",(0,t.jsx)(n.p,{children:"Suppose you provide a stream that you'll distribute to end customers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"One customer has the rights to share the stream with Belgian viewers"}),"\n",(0,t.jsx)(n.li,{children:"The other one can show the stream in the UK and USA"}),"\n",(0,t.jsx)(n.li,{children:"A third one only in France"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In such a case, you can create 3 aliases, one for each customer, so you can easily",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theolive/guides/multi-channel",children:" track customer specific analytics"})," as well later on."]}),"\n",(0,t.jsxs)(n.p,{children:["As the main channel id ",(0,t.jsx)(n.code,{children:"channel-id"})," won't be used, we can geo-block it completely: someone using this channel ID won't be able to see it anywhere in the world."]}),"\n",(0,t.jsxs)(n.p,{children:["For our first customer, we share the channel ID ",(0,t.jsx)(n.code,{children:"alias-1"}),", we can enable geo-blocking and restrict the access to Belgium.",(0,t.jsx)(n.br,{}),"\n","Our second customer gets channel ID ",(0,t.jsx)(n.code,{children:"alias-2"}),", we do the same, but restrict to the US and UK.",(0,t.jsx)(n.br,{}),"\n","Lastly, our third customer will receive ",(0,t.jsx)(n.code,{children:"alias-3"})," from us. This stream will be geo-blocked everywhere, but not in France."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Example of geo-blocking setup with channel and aliases",src:i(32255).Z+"",width:"1414",height:"759"})}),"\n",(0,t.jsx)(n.h2,{id:"managing-geo-blocking-in-the-console",children:"Managing geo-blocking in the console"}),"\n",(0,t.jsxs)(n.p,{children:["You can change your geo-blocking settings per channel and channel alias. Just navigate to a channel details page and scroll down to the different playout configurations. Clicking on the security tab will give you a few options.",(0,t.jsx)(n.br,{}),"\n","Enabling and disabling geo-blocking can easily be done by the switch. When enabled, a mode can be selected and countries can be added to the list.",(0,t.jsx)(n.br,{}),"\n",'Don\'t forget to hit "Save" to confirm your changes!']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Geo-blocking settings in the console",src:i(6536).Z+"",width:"1339",height:"874"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},32255:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/48b69bf-Geoblocking-84c6d55a2e618fe948637bb7c1e56730.png"},6536:function(e,n,i){i.d(n,{Z:function(){return o}});let o=i.p+"assets/images/a24f145-geoblock-87dabff0336fb8d568786b7fc93ea7ae.PNG"},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var o=i(67294);let t={},a=o.createContext(t);function s(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);