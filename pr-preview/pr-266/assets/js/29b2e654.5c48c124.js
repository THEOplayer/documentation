"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["6196"],{92291:function(e,i,t){t.r(i),t.d(i,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"distribution/access-control/index","title":"Access Control","description":"Stream security is a priority for the Dolby.io platform. Along with stream protocol encryption, Dolby.io provides a number of different server-side features to help protect both broadcasting (Publishing) a stream and viewing (Subscribing) to a stream, all managed via their respective tokens.","source":"@site/millicast/distribution/access-control/index.md","sourceDirName":"distribution/access-control","slug":"/access-control","permalink":"/documentation/pr-preview/pr-266/millicast/access-control","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/distribution/access-control/index.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Access Control","slug":"/access-control","sidebar_position":1},"sidebar":"millicast","previous":{"title":"Distribution","permalink":"/documentation/pr-preview/pr-266/millicast/distribution"},"next":{"title":"Allowed Origins","permalink":"/documentation/pr-preview/pr-266/millicast/token-security"}}'),o=t("85893"),s=t("50065");let r={title:"Access Control",slug:"/access-control",sidebar_position:1},a=void 0,c={},l=[{value:"Publishing access control",id:"publishing-access-control",level:2},{value:"Subscribing access control",id:"subscribing-access-control",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["Stream security is a priority for the Dolby.io platform. Along with stream protocol encryption, Dolby.io provides a number of different server-side features to help protect both broadcasting (",(0,o.jsx)(i.em,{children:"Publishing"}),") a stream and viewing (",(0,o.jsx)(i.em,{children:"Subscribing"}),") to a stream, all managed via their respective tokens."]}),"\n",(0,o.jsx)(i.admonition,{title:"Looking for Dolby.io Account Access Management?",type:"tip",children:(0,o.jsxs)(i.p,{children:["To manage access for your team to share the same Dolby.io account, visit the ",(0,o.jsx)(i.a,{href:"https://support.dolby.io/hc/en-au/articles/4411755046159-FAQs-Account-Management",children:"Dolby.io support portal FAQ section"})," to learn more."]})}),"\n",(0,o.jsx)(i.h2,{id:"publishing-access-control",children:"Publishing access control"}),"\n",(0,o.jsxs)(i.p,{children:["A ",(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/managing-your-tokens",children:"Publish token"})," is ",(0,o.jsx)(i.strong,{children:"required"})," for ",(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/broadcast",children:"broadcasting"})," a stream. The Publish token protects your account from unauthorized broadcasters and fraudulent users by adding a layer of server-side authentication to the broadcast process. In addition to the token itself, you can add access controls to the Publish token to further limit and secure the broadcast."]}),"\n",(0,o.jsx)(i.p,{children:"During the Publish token creation process, you can further limit access in a few ways:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/managing-your-tokens#create-a-publish-token",children:"Temporary Token"}),": By making a token expire after a set period of time, you limit the window of opportunity for someone to misuse the resource. Tokens expiration is defined by the number of seconds until it expires, with one second being the shortest possible token duration."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/token-security#allowed-origins",children:"Allowed Origins"}),": If specified, only the domains in the list will be allowed to broadcast with the Publish token. Wildcard subdomains are also allowed, e.g.: ",(0,o.jsx)(i.code,{children:"*.demo.com"}),". When unspecified (",(0,o.jsx)(i.em,{children:"an empty list"}),"), there are no domain restrictions."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/token-security#ip-filters",children:"IP Filtering"}),": With IP Address Filters, you can impose restrictions that limit access to a real-time stream by specifying specific IP network addresses."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/geo-blocking",children:"Geo-Blocking"}),': Geo-blocking refers to restricting access to certain content based on the geographic location of the user. It can be filtered by "allowed" and "denied" countries. With geo-blocking, providers can adhere to specific licensing agreements and distribution rights, protect copyrighted material, or service another layer of privacy when working on classified content.']}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["These restrictions can be implemented in the ",(0,o.jsx)(i.a,{href:"https://dashboard.dolby.io/signin",children:"Dashboard"})," or ",(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/token-api",children:"via the token REST APIs"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"subscribing-access-control",children:"Subscribing access control"}),"\n",(0,o.jsxs)(i.p,{children:["A Subscribe token is ",(0,o.jsx)(i.strong,{children:"optional"})," for ",(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/playback",children:"playing back"})," a stream but can provide extra security for your content. ",(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/subscribe-tokens",children:"When enabled"}),", streams that require a Subscribe token will block access to users not in possession of a valid token coming from a valid domain. This makes Subscribe tokens useful for protecting paywalled content or non-public content. Subscribe tokens also allow you to add time limits, specify IPs, and even set the token to only work from single or multiple specified domains."]}),"\n",(0,o.jsx)(i.p,{children:"During the Subscribe token creation process, you can further limit access in a few ways:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/subscribe-tokens#creating-a-subscribe-token",children:"Temporary Token"}),": By making a token expire after a set period of time, you limit the window of opportunity for someone to misuse the resource. Tokens expiration is defined by the number of seconds until it expires, with one second being the shortest possible token duration."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/token-security#allowed-origins",children:"Allowed Origins"}),": If specified, only the domains in the list will be allowed in requests to Director API with the Subscribe token. Wildcard subdomains are also allowed, e.g.: ",(0,o.jsx)(i.code,{children:"*.demo.com"}),". When unspecified (",(0,o.jsx)(i.em,{children:"an empty list"}),"), there are no domain restrictions."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/token-security#ip-filters",children:"IP Filtering"}),": With IP Address Filters, you can impose restrictions that limit access to a stream by specifying specific IP network addresses."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/geo-blocking",children:"Geo-Blocking"}),': Geo-blocking refers to restricting access to certain content based on the geographic location of the user. It can be filtered by "allowed" and "denied" countries. With geo-blocking, providers can adhere to specific licensing agreements and distribution rights, protect copyrighted material, or service another layer of privacy when working on classified content.']}),"\n"]}),"\n",(0,o.jsx)(i.admonition,{title:"Tracking bandwidth consumption can help detect stream sharing",type:"tip",children:(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.strong,{children:"Tracking ID"})," lets you create an alphanumeric ID that can be used to track and associate streaming statistics, such as bandwidth consumption, to various viewers on a stream. This can be useful for detecting token sharing and disabling misused tokens. For more information, see ",(0,o.jsx)(i.a,{href:"/millicast/syndication#creating-a-subscribe-token-with-tracking-id",children:"Syndication"}),"."]})}),"\n",(0,o.jsxs)(i.p,{children:["These restrictions can be implemented in the ",(0,o.jsx)(i.a,{href:"https://dashboard.dolby.io/signin",children:"Dashboard"})," or via the ",(0,o.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/millicast/token-api",children:"token REST APIs"}),"."]})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return a},a:function(){return r}});var n=t(67294);let o={},s=n.createContext(o);function r(e){let i=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);