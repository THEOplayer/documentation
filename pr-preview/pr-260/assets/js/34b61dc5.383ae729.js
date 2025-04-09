"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["63295"],{40434:function(e,o,t){t.r(o),t.d(o,{default:()=>g,frontMatter:()=>d,metadata:()=>n,assets:()=>u,toc:()=>p,contentTitle:()=>h});var n=JSON.parse('{"id":"distribution/access-control/geo-blocking","title":"Geo-blocking","description":"Geo-blocking refers to the action of restricting access to certain content based on the geographical location of the user. Filtering can be allowed or denied by countries as well as IP addresses. Geo-blocking enables content providers to adhere to specific licensing agreements and distribution rights, protect copyrighted material, or service another layer of privacy when working on private content.","source":"@site/millicast/distribution/access-control/geo-blocking.mdx","sourceDirName":"distribution/access-control","slug":"/geo-blocking","permalink":"/documentation/pr-preview/pr-260/millicast/geo-blocking","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/distribution/access-control/geo-blocking.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Geo-blocking","slug":"/geo-blocking","sidebar_position":2},"sidebar":"millicast","previous":{"title":"Allowed Origins","permalink":"/documentation/pr-preview/pr-260/millicast/token-security"},"next":{"title":"Cloud Transcoder","permalink":"/documentation/pr-preview/pr-260/millicast/cloud-transcoder"}}'),i=t("85893"),r=t("50065");let s=t.p+"assets/images/tokens-main-settings-menu-d4701c1b8804c23134cd2452af9f2181.png",a=t.p+"assets/images/geo-blocking-tab-b7115463af09fd3edccf9954d9d8ecc8.png",c=t.p+"assets/images/dashboard-publish-geoblocking-be107556edf455f3cbbef058d6c4a533.png",l=t.p+"assets/images/dashboard-create-token-geoblocking-24f1dc4e5f6b128818a97bcfc59b42d8.png",d={title:"Geo-blocking",slug:"/geo-blocking",sidebar_position:2},h=void 0,u={},p=[{value:"Geo-blocking in the dashboard",id:"geo-blocking-in-the-dashboard",level:2},{value:"How-to allow or block countries for all tokens",id:"how-to-allow-or-block-countries-for-all-tokens",level:3},{value:"How-to allow or block countries for a specific token",id:"how-to-allow-or-block-countries-for-a-specific-token",level:3},{value:"Learn more",id:"learn-more",level:2}];function b(e){let o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Geo-blocking"})," refers to the action of restricting access to certain content based on the geographical location of the user. Filtering can be allowed or denied by countries as well as IP addresses. Geo-blocking enables content providers to adhere to specific licensing agreements and distribution rights, protect copyrighted material, or service another layer of privacy when working on private content."]}),"\n",(0,i.jsx)("div",{className:"youtube-container",children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/n4iXAJuw-aM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,i.jsxs)(o.p,{children:["You can set geo-blocking in either your ",(0,i.jsx)(o.a,{href:"/documentation/pr-preview/pr-260/millicast/managing-your-tokens",children:"publish token"})," or ",(0,i.jsx)(o.a,{href:"/documentation/pr-preview/pr-260/millicast/subscribe-tokens",children:"subscribe token"}),". Geo-location in both tokens refers to the location from which viewers can watch a stream. If you restrict access to a stream in some countries using the publish token, people from those countries will not be able to watch the streamed content, even if the stream is unauthenticated and does not require the subscribe token. Geo-blocking does not impact broadcasting."]}),"\n",(0,i.jsx)(o.h2,{id:"geo-blocking-in-the-dashboard",children:"Geo-blocking in the dashboard"}),"\n",(0,i.jsx)(o.p,{children:"There are some settings you can use when configuring geo-blocking."}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Allow countries"})," lets you specify one or more countries by name that should be permitted to broadcast or view a stream."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Deny countries"})," lets you specify one or more countries that should be prohibited from broadcasting or viewing a stream."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["End viewers that will be blocked from content will see a message in the player stating ",(0,i.jsx)(o.em,{children:"Country not allowed"})," when trying to access the viewer. You can test this by blocking the country from which you are based to access the secure viewer link."]}),"\n",(0,i.jsx)(o.h3,{id:"how-to-allow-or-block-countries-for-all-tokens",children:"How-to allow or block countries for all tokens"}),"\n",(0,i.jsx)(o.p,{children:"You can define token defaults that are applied account wide as a global configuration. They can be overridden on a per-token basis"}),"\n",(0,i.jsxs)(o.p,{children:["Log into your account ",(0,i.jsx)(o.a,{href:"/documentation/pr-preview/pr-260/millicast/about-dash",children:"Streaming Dashboard"}),", click on ",(0,i.jsx)(o.em,{children:"Settings"})," in the left-side menu."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:s,width:"600"})}),"\n",(0,i.jsxs)(o.p,{children:["Navigate to the ",(0,i.jsx)(o.em,{children:"Token defaults"})," tab."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:a,width:"600"})}),"\n",(0,i.jsx)(o.p,{children:"Select from the countries you want to allow or deny from the alphabetical dropdown list."}),"\n",(0,i.jsx)(o.admonition,{title:"Applied to All Tokens",type:"danger",children:(0,i.jsx)(o.p,{children:"Enabling geo-blocking account wide will have all previous and future publish tokens enabled with this feature. To disable it simply erase the specified countries and the new conditions will be updated."})}),"\n",(0,i.jsx)(o.h3,{id:"how-to-allow-or-block-countries-for-a-specific-token",children:"How-to allow or block countries for a specific token"}),"\n",(0,i.jsx)(o.admonition,{title:"Getting Started",type:"tip",children:(0,i.jsxs)(o.p,{children:["If you haven't already, begin by following the ",(0,i.jsx)(o.a,{href:"/documentation/pr-preview/pr-260/millicast/",children:"Getting Started"})," tutorial to create a Dolby.io application and start your first broadcast. You will need to have a publishing token."]})}),"\n",(0,i.jsxs)(o.p,{children:["Open the Streaming section of the ",(0,i.jsx)(o.a,{href:"/documentation/pr-preview/pr-260/millicast/about-dash",children:"Dolby.io Dashboard"})," and select an existing token or ",(0,i.jsx)(o.code,{children:"+ Create"})," a new one."]}),"\n",(0,i.jsx)(o.p,{children:"Toggle the Geo-blocking setting to enable it for a token."}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:c,width:"600"})}),"\n",(0,i.jsxs)(o.p,{children:["For a new token, you can do this by selecting the ",(0,i.jsx)(o.strong,{children:"Advanced"})," tab during creation and toggling the Geo-blocking to be ",(0,i.jsx)(o.em,{children:"Enabled"}),"."]}),"\n","\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("img",{src:l,width:"300"})}),"\n",(0,i.jsx)(o.p,{children:"Select from the countries you want to allow or deny from the alphabetical dropdown list."}),"\n",(0,i.jsx)(o.admonition,{title:"Block by IP Address or Domain",type:"tip",children:(0,i.jsxs)(o.p,{children:["You can also deny access to content if you know the ",(0,i.jsx)(o.a,{href:"/documentation/pr-preview/pr-260/millicast/token-security",children:"domain name"})," or ",(0,i.jsx)(o.a,{href:"/documentation/pr-preview/pr-260/millicast/token-security",children:"ip address"})," that will be used to broadcast or view a stream."]})}),"\n",(0,i.jsx)(o.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,i.jsxs)(o.p,{children:["Learn more by exploring the ",(0,i.jsx)(o.a,{href:"https://dolby.io/blog/tag/distribution/",children:"developer blog"})," and ",(0,i.jsx)(o.a,{href:"https://github.com/orgs/dolbyio-samples/repositories?q=distribution",children:"code samples"}),"."]})]})}function g(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},50065:function(e,o,t){t.d(o,{Z:function(){return a},a:function(){return s}});var n=t(67294);let i={},r=n.createContext(i);function s(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);