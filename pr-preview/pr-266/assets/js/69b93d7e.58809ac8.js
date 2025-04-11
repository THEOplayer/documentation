"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["48433"],{81569:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"platform-requirements/stun-and-turn-service","title":"STUN and TURN Service","description":"What is STUN and TURN?","source":"@site/millicast/platform-requirements/stun-and-turn-service.md","sourceDirName":"platform-requirements","slug":"/stun-and-turn-service","permalink":"/documentation/pr-preview/pr-266/millicast/stun-and-turn-service","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/platform-requirements/stun-and-turn-service.md","tags":[],"version":"current","frontMatter":{"title":"STUN and TURN Service","slug":"/stun-and-turn-service"},"sidebar":"millicast","previous":{"title":"Platform Requirements","permalink":"/documentation/pr-preview/pr-266/millicast/network-requirements"},"next":{"title":"Streaming Dashboard","permalink":"/documentation/pr-preview/pr-266/millicast/about-dash"}}'),s=n("85893"),i=n("50065");let d={title:"STUN and TURN Service",slug:"/stun-and-turn-service"},a=void 0,l={},o=[{value:"What is STUN and TURN?",id:"what-is-stun-and-turn",level:3},{value:"What do I need to do?",id:"what-do-i-need-to-do",level:3},{value:"IP Addresses for STUN/TURN",id:"ip-addresses-for-stunturn",level:3}];function c(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"what-is-stun-and-turn",children:"What is STUN and TURN?"}),"\n",(0,s.jsx)(t.p,{children:"STUN and TURN servers are a critical part of WebRTC communication to allow users to connect and view streams. They are IETF standard protocols for negotiating traversing Network Address Translation (NATs) when establishing communication sessions."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Session Traversal Utilities for NAT (STUN)"})," is used for servers and clients to discover their public IP address when they are located behind a NAT/Firewall. When this host wants to receive an incoming connection, it provides this public IP address as a possible location where it can receive a connection. Suppose the NAT/Firewall still won't allow the viewer and media server to connect directly. In that case, the two make a connection to the ",(0,s.jsx)(t.em,{children:"Traversal Using Relay around NAT (TURN)"})," service, which will relay media between the two parties."]}),"\n",(0,s.jsx)(t.h3,{id:"what-do-i-need-to-do",children:"What do I need to do?"}),"\n",(0,s.jsxs)(t.p,{children:["Customers don't need to do anything by default to utilize this service. When TURN is required to relay media, the service and the video player client will negotiate automatically. In some restrictive environments, customers may be required to add ",(0,s.jsx)(t.em,{children:"allow"})," rules so their web clients can reach the TURN servers. IP addresses for this are listed below."]}),"\n",(0,s.jsx)(t.h3,{id:"ip-addresses-for-stunturn",children:"IP Addresses for STUN/TURN"}),"\n",(0,s.jsxs)(t.p,{children:["Millicast has the following regional IP addresses for our STUN/TURN. ",(0,s.jsx)(t.em,{children:"IP addresses were last updated 2024-11-04."})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Dolby Region"}),(0,s.jsx)(t.th,{children:"API ID"}),(0,s.jsx)(t.th,{children:"IP Range Information"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bangalore, India"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"blr-1"})}),(0,s.jsx)(t.td,{children:"139.59.49.50, 139.59.49.86, 64.225.87.21, 64.225.87.66, 64.225.87.164, 174.138.120.21, 68.183.247.136, 139.59.49.159"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Ashburn, VA, USA"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"iad-1"})}),(0,s.jsx)(t.td,{children:"129.213.172.222, 141.148.39.122, 193.122.165.132, 129.80.107.22, 129.80.49.52, 141.148.63.222, 150.230.164.20, 150.136.130.194"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Frankfurt, Germany"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"fra-1"})}),(0,s.jsx)(t.td,{children:"141.144.229.61, 89.168.103.9, 144.24.168.81, 141.147.50.224, 144.24.169.241, 130.162.224.118, 129.159.200.0, 130.162.224.21"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"London, UK"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lon-1"})}),(0,s.jsx)(t.td,{children:"132.226.128.169, 84.8.154.194, 150.230.127.97, 79.72.91.241, 141.147.64.72, 141.147.113.177, 150.230.118.111, 141.147.96.45"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Phoenix, AZ, USA"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"phx-1"})}),(0,s.jsx)(t.td,{children:"129.153.95.186, 129.146.214.35, 129.153.84.129, 141.148.160.171, 129.153.216.166, 144.24.9.249, 152.70.155.112, 129.146.10.49"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"S\xe3o Paulo, Brazil"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"sao-1"})}),(0,s.jsx)(t.td,{children:"136.248.75.56, 168.138.254.134, 136.248.109.105, 167.234.230.239, 136.248.127.209, 144.22.189.247, 136.248.68.90, 150.230.78.100"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Singapore"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"sgp-1"})}),(0,s.jsx)(t.td,{children:"146.190.195.233, 146.190.200.127, 146.190.200.155, 144.126.241.168, 139.59.220.163, 157.230.192.175, 139.59.192.127, 139.59.192.132"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Sydney, Australia"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"syd-1"})}),(0,s.jsx)(t.td,{children:"192.9.182.131, 192.9.177.241, 192.9.181.7, 192.9.176.25, 159.13.38.8, 159.13.55.70, 158.178.143.49, 152.69.174.63"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Also, make sure to open up the following network ports detailed in our ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/millicast/network-requirements",children:"Platform Requirements"})," page."]}),"\n",(0,s.jsxs)(t.p,{children:["In rare cases, Millicast may occasionally use Twilio's service. See here for ",(0,s.jsx)(t.a,{href:"https://www.twilio.com/docs/stun-turn/regions",children:"Twilio's IP list"})," for a detailed IP range for STUN/TURN servers."]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return d}});var r=n(67294);let s={},i=r.createContext(s);function d(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);