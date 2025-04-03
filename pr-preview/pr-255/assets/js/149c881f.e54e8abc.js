"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["50362"],{44882:function(e,i,t){t.r(i),t.d(i,{default:()=>g,frontMatter:()=>c,metadata:()=>n,assets:()=>p,toc:()=>u,contentTitle:()=>h});var n=JSON.parse('{"id":"distribution/access-control/token-security","title":"Allowed Origins","description":"Impose limits on who may use a token to broadcast or view a stream by defining rules based on the domain name or IP address in which the request originated. Allowed Origins enables defining specific domain names or sub-domain patterns that any request must originate from. Similarly, with IP Address Filters you can define rules that limit access by specifying the network IP address.","source":"@site/millicast/distribution/access-control/token-security.md","sourceDirName":"distribution/access-control","slug":"/token-security","permalink":"/documentation/pr-preview/pr-255/millicast/token-security","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/distribution/access-control/token-security.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Allowed Origins","slug":"/token-security","sidebar_position":1},"sidebar":"millicast","previous":{"title":"Access Control","permalink":"/documentation/pr-preview/pr-255/millicast/access-control"},"next":{"title":"Geo-blocking","permalink":"/documentation/pr-preview/pr-255/millicast/geo-blocking"}}'),s=t("85893"),r=t("50065");let o=t.p+"assets/images/dashboard-allowed-origins-e2776612d2d4756c61c71dbf2a47eb2c.png",a=t.p+"assets/images/dashboard-ip-filter-type-6c8d018de06e18f3b1bf18fc80f9c6b4.png",d=t.p+"assets/images/broadcast-error-dfced9e9cc671e4f9426f7aed87d9919.png",l=t.p+"assets/images/dashboard-origin-broadcast-error-068f7835c5eb6f78e4cdec47602ab0e5.png",c={title:"Allowed Origins",slug:"/token-security",sidebar_position:1},h=void 0,p={},u=[{value:"Allowed origins",id:"allowed-origins",level:2},{value:"How-to set allowed domains using the dashboard",id:"how-to-set-allowed-domains-using-the-dashboard",level:3},{value:"IP filters",id:"ip-filters",level:2},{value:"Allowed IP addresses",id:"allowed-ip-addresses",level:3},{value:"Bind IP on usage",id:"bind-ip-on-usage",level:3},{value:"How-to set IP filters using the dashboard",id:"how-to-set-ip-filters-using-the-dashboard",level:3},{value:"REST APIs",id:"rest-apis",level:2},{value:"How-to add allowed origins with the REST API",id:"how-to-add-allowed-origins-with-the-rest-api",level:3},{value:"How-to add IP filters with the REST API",id:"how-to-add-ip-filters-with-the-rest-api",level:3},{value:"How-to remove IP filters",id:"how-to-remove-ip-filters",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Error initializing the Publisher.Error: Unauthorized: IP Address not allowed",id:"error-initializing-the-publishererror-unauthorized-ip-address-not-allowed",level:3},{value:"Error initializing the Publisher.Error: Unauthorized: Origin not allowed",id:"error-initializing-the-publishererror-unauthorized-origin-not-allowed",level:3}];function m(e){let i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Impose limits on who may use a token to broadcast or view a stream by defining rules based on the domain name or IP address in which the request originated. ",(0,s.jsx)(i.strong,{children:"Allowed Origins"})," enables defining specific domain names or sub-domain patterns that any request must originate from. Similarly, with ",(0,s.jsx)(i.strong,{children:"IP Address Filters"})," you can define rules that limit access by specifying the network IP address."]}),"\n",(0,s.jsxs)(i.p,{children:["These approaches are sometimes referred to as ",(0,s.jsx)(i.em,{children:"whitelisting"}),", a security mechanism to prevent unauthorized access. Even when token credentials are provided, if the domain or IP address does not originate from an expected network location, permission is denied. These types of access restrictions allow only specific known hosts or applications to broadcast with a ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/managing-your-tokens",children:"publish"})," token or playback using a ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/subscribe-tokens",children:"subscribe"})," token."]}),"\n",(0,s.jsx)(i.h2,{id:"allowed-origins",children:"Allowed origins"}),"\n",(0,s.jsxs)(i.p,{children:["Setting up allowed origins as a means of ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/access-control",children:"access control"})," is done by specifying the domain where a request will originate. If you have deployed a website or application to a cloud provider you may not know the IP address of a server but any usage of a token can be restricted to the domain name for your application."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["A single domain: ",(0,s.jsx)(i.code,{children:"millicast.com"})]}),"\n",(0,s.jsxs)(i.li,{children:["Multiple domains comma delimited: ",(0,s.jsx)(i.code,{children:"millicast.com, streaming.dolby.io"})]}),"\n",(0,s.jsxs)(i.li,{children:["Wildcard domains: ",(0,s.jsx)(i.code,{children:"*.dolby.io"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This approach helps prevent unauthorized usage of tokens."}),"\n",(0,s.jsx)(i.h3,{id:"how-to-set-allowed-domains-using-the-dashboard",children:"How-to set allowed domains using the dashboard"}),"\n",(0,s.jsxs)(i.p,{children:["You can manage allowed origins by changing settings from the user interface of the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/about-dash",children:"Streaming Dashboard"}),"."]}),"\n",(0,s.jsx)(i.admonition,{title:"Getting Started",type:"tip",children:(0,s.jsxs)(i.p,{children:["If you haven't already, begin by following the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/",children:"Getting Started"})," tutorial to create a Dolby.io application and start your first broadcast. You will need to have a publishing token. See ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/managing-your-tokens",children:"Managing Your Tokens"})," for more details about tokens."]})}),"\n",(0,s.jsxs)(i.p,{children:["Open the Live Broadcast section of the Dolby.io Dashboard. Select the publishing token you want to secure. Within the ",(0,s.jsx)(i.strong,{children:"Security"})," section you can edit the ",(0,s.jsx)(i.em,{children:"Allowed origins"})," to specify a list of domain names."]}),"\n","\n",(0,s.jsx)("div",{class:"center-container",children:(0,s.jsx)("img",{src:o,width:"600"})}),"\n",(0,s.jsx)(i.admonition,{title:"Restricting Viewers",type:"caution",children:(0,s.jsxs)(i.p,{children:["By default, a ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/managing-your-tokens",children:"publish token"})," does not restrict ",(0,s.jsx)(i.em,{children:"viewers"})," of the broadcast. If you want to also restrict viewers by origination, you must also setup ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/access-control",children:"access control"})," with the ",(0,s.jsx)(i.em,{children:"secure viewer"})," to require a subscribe token authorization to view the stream. There is a similar form value in the ",(0,s.jsx)(i.strong,{children:"Subscribe tokens"})," section of the dashboard."]})}),"\n",(0,s.jsx)(i.h2,{id:"ip-filters",children:"IP filters"}),"\n",(0,s.jsxs)(i.p,{children:["Setting up an IP filter as a means of ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/access-control",children:"access control"})," may depend on whether or not you know the originating IP address ahead of time."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["If you have known ",(0,s.jsx)(i.em,{children:"static"})," IP addresses that do not change, you can identify specific ",(0,s.jsx)(i.em,{children:(0,s.jsx)(i.strong,{children:"allowed IP addresses"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["If the IP address is ",(0,s.jsx)(i.em,{children:"unknown"})," or ",(0,s.jsx)(i.em,{children:"dynamic"})," and might change between sessions, you can ",(0,s.jsx)(i.em,{children:(0,s.jsx)(i.strong,{children:"bind IP after usage"})})," so that the IP address of any initial requests are accepted and the IP address is bound to the token. Any additional usage from that IP address will continue to be accepted but subsequent IP addresses would be rejected."]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{title:"IP Filters with RTMP",type:"danger",children:(0,s.jsx)(i.p,{children:"This access control method is not supported when using RTMP."})}),"\n",(0,s.jsx)(i.h3,{id:"allowed-ip-addresses",children:"Allowed IP addresses"}),"\n",(0,s.jsxs)(i.p,{children:["This approach allows for explicitly defining multiple ",(0,s.jsx)(i.em,{children:"IPv4 addresses"})," or _Classless Inter-Domain Routing (CIDR) _notated network blocks when creating or updating a token. A token will only be accepted when the requesting IP address originates from one of the network addresses that match."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"For example"}),", to allow only a specific person or persons to broadcast you would specify the publisher's IP address in this property. If you wanted only a specific organization to be able to watch, you might specify the series of IP addresses in a subscribe token so that content can only be viewed within a specific network."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["a single IP address: ",(0,s.jsx)(i.code,{children:"170.123.145.2"})]}),"\n",(0,s.jsxs)(i.li,{children:["multiple IP addresses comma delimited: ",(0,s.jsx)(i.code,{children:"170.123.145.2, 170.123.145.3"})]}),"\n",(0,s.jsxs)(i.li,{children:["CIDR supernets: ",(0,s.jsx)(i.code,{children:"192.168.6.0/24"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Using IP address ranges and wildcards are not supported."})}),"\n",(0,s.jsx)(i.p,{children:"Once IP addresses are set, only requests from that address or network will be permitted to broadcast or view a stream. If the user's network changes, they will be rejected for future connections. The Allowed IP addresses can be updated."}),"\n",(0,s.jsx)(i.h3,{id:"bind-ip-on-usage",children:"Bind IP on usage"}),"\n",(0,s.jsxs)(i.p,{children:["The bind IP on usage approach allows for explicitly defining how ",(0,s.jsx)(i.em,{children:"many"})," IP addresses to accept rather than specific ones. As they are gathered and bound to the token, any subsequent requests beyond the count will then be rejected."]}),"\n",(0,s.jsxs)(i.p,{children:["You might think of this as appending any IP address requests to the ",(0,s.jsx)(i.em,{children:"Allowed IP Address"})," list only after they are dynamically determined."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"For example"}),", if you want to be able to share a stream with a specific end-user without allowing that person to re-share the same viewer link with others. The platform will bind to the first IP address encountered and then restrict any additional access using the same token."]}),"\n",(0,s.jsx)(i.h3,{id:"how-to-set-ip-filters-using-the-dashboard",children:"How-to set IP filters using the dashboard"}),"\n",(0,s.jsxs)(i.p,{children:["You can manage IP filters by changing settings from the user interface of the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/about-dash",children:"Streaming Dashboard"}),"."]}),"\n",(0,s.jsx)(i.admonition,{title:"Getting Started",type:"tip",children:(0,s.jsxs)(i.p,{children:["If you haven't already, begin by following the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/",children:"Getting Started"})," tutorial to create a Dolby.io application and start your first broadcast. You will need to have a publishing token. See ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/managing-your-tokens",children:"Managing Your Tokens"})," for more details about tokens."]})}),"\n",(0,s.jsxs)(i.p,{children:["Open the Live Broadcast section of the Dolby.io Dashboard. Select the publishing token you want to secure. Within the ",(0,s.jsx)(i.strong,{children:"Security"})," section you can change the ",(0,s.jsx)(i.em,{children:"IP filter type"})," from the dropdown."]}),"\n","\n",(0,s.jsx)("div",{class:"center-container",children:(0,s.jsx)("img",{src:a,width:"600"})}),"\n",(0,s.jsx)(i.p,{children:"You then can input the IP addresses or number of addresses to bind, into the form."}),"\n",(0,s.jsx)(i.admonition,{title:"Restricting Viewers",type:"caution",children:(0,s.jsxs)(i.p,{children:["By default, a ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/managing-your-tokens",children:"publish token"})," does not restrict ",(0,s.jsx)(i.em,{children:"viewers"})," of the broadcast. If you want to also restrict viewers by IP address, you must also setup ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/access-control",children:"access control"})," with the ",(0,s.jsx)(i.em,{children:"secure viewer"})," to require a subscribe token authorization to view the stream. There is a similar form value in the ",(0,s.jsx)(i.strong,{children:"Subscribe tokens"})," section of the dashboard."]})}),"\n",(0,s.jsx)(i.h2,{id:"rest-apis",children:"REST APIs"}),"\n",(0,s.jsx)(i.p,{children:"When working with allowed origins and IP filters you can automate workflows using available REST APIs."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/publish-token-v-1-create-token",children:"/api/publish_token"})," endpoint allows you to update the allowed origins or IP addresses for an existing publish token or to define a value when creating a new token"]}),"\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/subscribe-token-v-1-create-token",children:"/api/subscribe_token"})," endpoint allows you to update the allowed origins or IP addresses for an existing subscribe token or to define it while creating a new token"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{title:"Using the REST APIs",type:"tip",children:(0,s.jsxs)(i.p,{children:["Review the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/getting-started/using-rest-apis",children:"REST API"})," platform guide for more details on generating an API secret for authentication. You will need an ",(0,s.jsx)(i.em,{children:"API Secret"})," from the dashboard in order to make requests."]})}),"\n",(0,s.jsx)(i.h3,{id:"how-to-add-allowed-origins-with-the-rest-api",children:"How-to add allowed origins with the REST API"}),"\n",(0,s.jsxs)(i.p,{children:["For both the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/publish-token-v-1-create-token",children:"/api/publish_token"})," and the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/subscribe-token-v-1-create-token",children:"/api/subscribe_token"})," you can define the ",(0,s.jsx)(i.strong,{children:"allowedOrigins"})," parameter when you use a ",(0,s.jsx)(i.code,{children:"POST"})," request to create a new token. For existing tokens, you'll use the ",(0,s.jsx)(i.code,{children:"PUT"})," method to change the value using ",(0,s.jsx)(i.strong,{children:"updateAllowedOrigins"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"Here is an example of updating the Allowed Origins:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-curl",children:'curl -H "Authorization: Bearer [your_api_secret]" \\\n    -H "Content-Type: application/json" \\\n    https://api.millicast.com/api/subscribe_token/[token id] \\\n    -X PUT -d \'{"updateAllowedOrigins": ["millicast.com","*.millicast.com"]}\'\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Review the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/publish-token-v-1-update-token",children:"/api/publish_token"})," and ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/subscribe-token-v-1-update-token",children:"/api/subscribe_token"})," reference for additional examples."]}),"\n",(0,s.jsx)(i.h3,{id:"how-to-add-ip-filters-with-the-rest-api",children:"How-to add IP filters with the REST API"}),"\n",(0,s.jsxs)(i.p,{children:["For both the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/publish-token-v-1-create-token",children:"/api/publish_token"})," and the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/subscribe-token-v-1-create-token",children:"/api/subscribe_token"})," you can define the ",(0,s.jsx)(i.strong,{children:"allowedIpAddresses"})," or ",(0,s.jsx)(i.strong,{children:"bindIpsOnUsage"})," parameters when you use a ",(0,s.jsx)(i.code,{children:"POST"})," request to create a new token. For existing tokens, you'll use the ",(0,s.jsx)(i.code,{children:"PUT"})," method to change the value using ",(0,s.jsx)(i.strong,{children:"updateAllowedIpAddresses"})," or ",(0,s.jsx)(i.strong,{children:"updateBindIpsOnUsage"})," values respectively."]}),"\n",(0,s.jsx)(i.p,{children:"Here is an example of updating the Allowed IP Addresses:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-curl",children:'curl -H "Authorization: Bearer [your_api_secret]" \\\n    -H "Content-Type: application/json" \\\n    https://api.millicast.com/api/subscribe_token/[token id] \\\n    -X PUT -d \'{"updateAllowedIpAddresses": ["255.255.255.255"]}\'\n'})}),"\n",(0,s.jsx)(i.p,{children:"and to update the Bind IP on Usage:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-curl",children:'curl -H "Authorization: Bearer [your_api_secret]" \\\n    -H "Content-Type: application/json" \\\n    https://api.millicast.com/api/subscribe_token \\\n    -d \'{"bindIpsOnUsage": 1}\'\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Review the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/publish-token-v-1-update-token",children:"/api/publish_token"})," and ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/subscribe-token-v-1-update-token",children:"/api/subscribe_token"})," reference for additional examples."]}),"\n",(0,s.jsx)(i.h3,{id:"how-to-remove-ip-filters",children:"How-to remove IP filters"}),"\n",(0,s.jsx)(i.p,{children:"If you want to reset either a publish or subscribe token to no longer restrict access, you can use a bind value of zero and an empty array to clear out the settings and revert to the default."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-curl",children:'curl -H "Authorization: Bearer [your_api_secret]" \\\n    -H "Content-Type: application/json" \\\n    https://api.millicast.com/api/subscribe_token/100 \\\n    -X PUT -d \'{"bindIpsOnUsage": 0, "updateAllowedIpAddresses": []}\'\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Review the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/publish-token-v-1-update-token",children:"/api/publish_token"})," and ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/api/subscribe-token-v-1-update-token",children:"/api/subscribe_token"})," reference for additional examples."]}),"\n",(0,s.jsx)(i.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(i.h3,{id:"error-initializing-the-publishererror-unauthorized-ip-address-not-allowed",children:"Error initializing the Publisher.Error: Unauthorized: IP Address not allowed"}),"\n",(0,s.jsx)(i.p,{children:"If the IP address detected does not match the IP Filters enabled, the user might be presented an error like this in the broadcast application."}),"\n","\n",(0,s.jsx)("div",{class:"center-container",children:(0,s.jsx)("img",{src:d,width:"600"})}),"\n",(0,s.jsx)(i.p,{children:"Verify that the IP address you are broadcasting from is static and correctly input for the publishing token being used."}),"\n",(0,s.jsx)(i.h3,{id:"error-initializing-the-publishererror-unauthorized-origin-not-allowed",children:"Error initializing the Publisher.Error: Unauthorized: Origin not allowed"}),"\n",(0,s.jsx)(i.p,{children:"If the domain detected does not match the allowed origins, the user might be presented with an error like this in the broadcast application."}),"\n","\n",(0,s.jsx)("div",{class:"center-container",children:(0,s.jsx)("img",{src:l,width:"600"})}),"\n",(0,s.jsx)(i.p,{children:"Verify that the domain your application is running from is included."}),"\n",(0,s.jsx)(i.admonition,{title:"Allow the Streaming Dashboard",type:"tip",children:(0,s.jsxs)(i.p,{children:["Include ",(0,s.jsx)(i.em,{children:"streaming.dolby.io"})," in your list of domains if you want to be able to continue broadcasting using the ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-255/millicast/about-dash",children:"Dolby.io Streaming Dashboard"}),"."]})})]})}function g(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return a},a:function(){return o}});var n=t(67294);let s={},r=n.createContext(s);function o(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);