"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["75505"],{68458:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"streaming-dashboard/subscribe-tokens","title":"Subscribe Tokens","description":"Unlike publishing a broadcast, the subscriber (viewer), by default, does not need a token to view a stream. However, if you want to secure your feed from being viewed by non-authenticated users, Dolby.io Streaming provides the ability to use subscribe tokens.","source":"@site/millicast/streaming-dashboard/subscribe-tokens.md","sourceDirName":"streaming-dashboard","slug":"/subscribe-tokens","permalink":"/documentation/pr-preview/pr-256/millicast/subscribe-tokens","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/streaming-dashboard/subscribe-tokens.md","tags":[],"version":"current","frontMatter":{"title":"Subscribe Tokens","slug":"/subscribe-tokens"},"sidebar":"millicast","previous":{"title":"Multi-source Builder","permalink":"/documentation/pr-preview/pr-256/millicast/multi-source-builder"},"next":{"title":"Token API","permalink":"/documentation/pr-preview/pr-256/millicast/token-api"}}'),t=i("85893"),r=i("50065");let o={title:"Subscribe Tokens",slug:"/subscribe-tokens"},a=void 0,c={},l=[{value:"Creating a subscribe token",id:"creating-a-subscribe-token",level:2},{value:"Advanced settings",id:"advanced-settings",level:3},{value:"Managing and editing existing subscribe tokens",id:"managing-and-editing-existing-subscribe-tokens",level:2},{value:"Deleting subscribe tokens",id:"deleting-subscribe-tokens",level:2},{value:"Self-signing subscribe tokens",id:"self-signing-subscribe-tokens",level:2},{value:"Creating a self-signed token",id:"creating-a-self-signed-token",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Using the Token API",id:"using-the-token-api",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Unlike ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/broadcast",children:"publishing a broadcast"}),", the subscriber (viewer), by default, ",(0,t.jsx)(n.strong,{children:"does not need a token"})," to view a stream. However, if you want to secure your feed from being viewed by non-authenticated users, Dolby.io Streaming provides the ability to use subscribe tokens."]}),"\n",(0,t.jsx)(n.p,{children:"When enabled, streams that require a subscribe token will block access to users not in possession of a valid token coming from a valid domain. This makes subscribe tokens useful for protecting paywalled content or non-public content. Subscribe tokens also allow you to add time limits, specify IPs, and even set the token to only work from single or multiple specified domains."}),"\n",(0,t.jsx)(n.p,{children:"This guide outlines the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/subscribe-tokens#creating-a-subscribe-token",children:"How to Create a Subscribe Token"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/subscribe-tokens#managing-and-editing-existing-subscribe-tokens",children:"How to Manage or Edit Existing Subscribe Tokens"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/subscribe-tokens#deleting-subscribe-tokens",children:"How to Delete a Subscribe Token"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/subscribe-tokens#self-signing-subscribe-tokens",children:"How to Self-Signing Subscribe Tokens"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/subscribe-tokens#using-the-token-api",children:"Using the Token API"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-subscribe-token",children:"Creating a subscribe token"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uD83D\uDC4D Enable Secure Viewer"}),"\n",(0,t.jsxs)(n.p,{children:["Before we can create a Subscribe token, we must first have a stream that requires a Subscribe token. These streams are referred to as ",(0,t.jsx)(n.strong,{children:"Secure streams"}),' and need to be enabled within a Publish token by enabling "',(0,t.jsx)(n.strong,{children:"Secure viewer"}),'". To learn where to enable "Secure viewer", ',(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/managing-your-tokens",children:"check out this guide on creating a Publish token"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To get started, ",(0,t.jsx)(n.a,{href:"https://dashboard.dolby.io/",children:"login to your Dolby.io Real-time Streaming account"})," and select ",(0,t.jsx)(n.strong,{children:"Subscribe tokens"})," from the left menu. Here you can create and manage your subscribe tokens."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(63547).Z+"",width:"1600",height:"684"})}),"\n",(0,t.jsxs)(n.p,{children:["Begin by creating a token using the ",(0,t.jsx)(n.strong,{children:"(+) Create"})," button. This will open a popup window on your screen containing various options for your new token."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(39269).Z+"",width:"1113",height:"653"})}),"\n",(0,t.jsx)(n.p,{children:"Let's go over each option in a bit more detail:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(62959).Z+"",width:"1606",height:"738"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"Token Label"})," gives you a simple labeling system you can use to keep track of your tokens. You can use it to label what the tokens are for or identify testing tokens from your production ones."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Add Stream Names"})," list, select the ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/managing-your-tokens#2-token-streams",children:"Stream names"})," from your current ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/managing-your-tokens",children:"Publish tokens"}),' you want to give access to through the Subscribe token you are creating. For example, my new Subscribe token may give access to Stream names "',(0,t.jsx)(n.em,{children:"TestStreamMainFeed"}),'", "',(0,t.jsx)(n.em,{children:"TestStreamCam2"}),'", and "',(0,t.jsx)(n.em,{children:"TestStreamCam3"}),'" all within my Publish token "',(0,t.jsx)(n.em,{children:"LiveConcertPublishToken"}),'".',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['You can also create a** global Subscriber Token** by marking the "',(0,t.jsx)(n.em,{children:"Use ANY name"}),'" option.']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"Tracking ID"})," lets you create an alphanumeric tracking ID that can be used for syndication to associate streaming statistics, such as bandwidth consumption, to various viewers on a stream. For more information, ",(0,t.jsx)(n.a,{href:"/millicast/syndication#creating-a-subscribe-token-with-tracking-id",children:"see Syndication"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Temporary Token"})," allows you to make your token temporary by giving the token an expiration date."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"advanced-settings",children:"Advanced settings"}),"\n",(0,t.jsxs)(n.p,{children:['You can switch from the top "',(0,t.jsx)(n.em,{children:"Basic"}),'" tab to the "',(0,t.jsx)(n.em,{children:"Advanced"}),'" tab in the token creation interface for more advanced token settings such as:']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/token-security",children:"Allowed origins:"})," Only the domains in the list will be allowed in requests to the ",(0,t.jsx)(n.a,{href:"/millicast/api/director/director-subscribe",children:"Director API"})," with the token."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/token-security",children:"IP filter type:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IP Address"}),": May specify multiple IPv4 addresses or CIDR notated network blocks. If specified, the token will only be usable by those addresses."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bind IPs on usage"}),": If specified, will bind the token to the first ",(0,t.jsx)(n.strong,{children:"X"}),' IP addresses used with a token in requests to Director API, thus restricting the token to those IP addresses without them being known beforehand. Mutually exclusive with "IP Addresses" option. Not currently supported with RTMP.']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/multi-region-support",children:"Cluster region:"})," Specifies the cluster used for streaming. This setting is configured to use the default regional cluster set for the account. If Auto is selected, the regional cluster will be selected based on the publisher's location."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/geo-blocking",children:"Geo-Blocking:"})," Enables blocking by location at a country level for this specific token."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(58643).Z+"",width:"542",height:"1024"})}),"\n",(0,t.jsx)(n.p,{children:"After you have successfully created your token, it will be displayed in a scrollable list."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(28170).Z+"",width:"1596",height:"598"})}),"\n",(0,t.jsx)(n.h2,{id:"managing-and-editing-existing-subscribe-tokens",children:"Managing and editing existing subscribe tokens"}),"\n",(0,t.jsxs)(n.p,{children:["Each token item has a ",(0,t.jsx)(n.em,{children:"quick action menu"})," that provides you with options for enabling and deleting each token."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(61451).Z+"",width:"1600",height:"320"})}),"\n",(0,t.jsxs)(n.p,{children:["For more comprehensive management, open the ",(0,t.jsx)(n.em,{children:"manage view"})," by simply clicking the token name."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(64844).Z+"",width:"1172",height:"660"})}),"\n",(0,t.jsxs)(n.p,{children:["The manage view allows you to edit and view details attached to your token, including stream names, labels, status, renew token, geo-blocking, and deletion. You can learn about these settings in the ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/subscribe-tokens#creating-a-subscribe-token",children:"Creating a Subscribe Token"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:["Of note in the manage screen is the ",(0,t.jsx)(n.strong,{children:"string of the Subscribe token itself"}),". This token can be copied and used to authenticate a connection to view the stream. For example, if you want to use the in-browser viewer to watch a live broadcast, ",(0,t.jsx)(n.strong,{children:"append the Subscribe token on the end to use the unsecured URL"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"https://viewer.millicast.com?streamId=[Account ID]/[Stream Name]&token=[Subscribe Token]"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uD83D\uDEA7 Unsecure URL"}),"\n",(0,t.jsxs)(n.p,{children:["The above example exposes the subscribe token in the URL. To prevent URL or token sharing, serve each viewer a unique subscribe token with the ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/subscribe-tokens#advanced-settings",children:"BindsIPAddressOnUsage "})," parameter enabled to bind the token to the user."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Depending on the scale of your production, it may not be secure or feasible to create tokens via the dashboard. Instead, you can create tokens via the ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/token-api",children:"Token API"}),", or, for true scalability, ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/subscribe-tokens#self-signing-subscribe-tokens",children:"you can self-sign tokens"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"deleting-subscribe-tokens",children:"Deleting subscribe tokens"}),"\n",(0,t.jsxs)(n.p,{children:["Once you've finished using a Subscribe token, it is recommended that you retire the token by deleting it to prevent accidental vulnerabilities. Deleting the token can be done from the ",(0,t.jsx)(n.em,{children:"quick action menu"})," found at the top-level Subscribe Tokens page by clicking on the trash can icon."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(69027).Z+"",width:"1600",height:"320"})}),"\n",(0,t.jsx)(n.h2,{id:"self-signing-subscribe-tokens",children:"Self-signing subscribe tokens"}),"\n",(0,t.jsx)(n.p,{children:"The Dolby.io Real-Time Streaming APIs support the ability to self-sign Subscribe tokens without having to make an API call. Self-signing the token locally allows you to generate your Subscribe token more efficiently. The self-signed token is a user-generated JSON Web Token (JWT) that is generated from an existing Subscribe token."}),"\n",(0,t.jsxs)(n.p,{children:["The Subscribe token functions as a parent token, and any self-signed token generated from this ",(0,t.jsx)(n.strong,{children:"will inherit any restrictions or parameters"})," that are specified when the Subscribe token is created. The self-signed token can be passed to the Dolby.io Real-time Streaming service, the same as any regular Subscribe token, but is then validated against the Subscribe token that was originally used to sign it."]}),"\n",(0,t.jsx)(n.p,{children:"Self-signing your Subscribe token allows you to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Sign the Subscribe token locally in the programming language of your choice as long as it uses one of the following signing algorithms:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"HMACSHA256"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"HMACSHA384"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"HMACSHA512"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Reduce the number of API calls to the Dolby.io Server"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/millicast/syndication#how-to-track-syndication",children:"Track bandwidth usage with each of the self-signed tokens"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-self-signed-token",children:"Creating a self-signed token"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a Subscribe token using the ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/api/subscribe-token-v-1-create-token",children:"Create Token"})," API. The API returns the ",(0,t.jsx)(n.code,{children:"tokenId"})," and ",(0,t.jsx)(n.code,{children:"token"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a JWT with the following data:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tokenId"}),": The ID of the (primary) subscribe token"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"streamName"}),": A complete, non-wildcard ",(0,t.jsx)(n.code,{children:"streamName"})," that the subscriber will be allowed access to view"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"allowedOrigins"})," (optional): Origins that allow the stream to be viewed from"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"allowedIpAddresses"})," (optional): IP ranges that allow the stream to be viewed from"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trackingID"})," (optional): ID to syndicate content across multiple partners or providers. This ID can be used to group viewers of the same stream for ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/api/analytics-get-tracking-total-for-streams",children:"analytics"})," purposes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"expires_in"})," (optional): Number of seconds before the token expires. If the parent token expires before the self-signed token, the self-signed token will also expire."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"customViewerData"})," (optional): A unique identifier of a viewer that allows getting the viewer's bandwidth consumption while using ",(0,t.jsx)(n.a,{href:"/millicast/syndication",children:"syndication"}),". Using this parameter requires contacting sales."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Sign the JWT using the Subscribe token as the key and set an expiration for the JWT."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uD83D\uDCD8 Code Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Examples of self-singing a token can be found at this ",(0,t.jsx)(n.a,{href:"https://github.com/millicast/selfsign-jwt-reference",children:"GitHub repository"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The published stream and Subscribe token ",(0,t.jsx)(n.strong,{children:"must"}),' originate from the same cluster region. The "Auto" region may be selected for both if the broadcast region changes from stream to stream. For more information, see ',(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/multi-region-support",children:"Multi-region Support"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The only fields in the self-signed token that are added to the primary subscriber token are the ",(0,t.jsx)(n.em,{children:"allowedOrigins"})," and ",(0,t.jsx)(n.em,{children:"allowedIPAddresses"}),". These do not replace any ",(0,t.jsx)(n.em,{children:"allowedOrigins"})," or ",(0,t.jsx)(n.em,{children:"allowedIPAddresses"})," in the primary Subscriber token but are appended onto any existing restrictions. ",(0,t.jsx)(n.strong,{children:"Anything else packaged into the JWT is ignored."})]}),"\n",(0,t.jsxs)(n.li,{children:["If the primary Subscriber token contains a* TrackingID*, the self-signed token must use the same ",(0,t.jsx)(n.em,{children:"TrackingID"}),". However, if the primary Subscriber token does not specify a ",(0,t.jsx)(n.em,{children:"TrackingID"}),", any ",(0,t.jsx)(n.em,{children:"TrackingID"})," can be used in the self-signed token."]}),"\n",(0,t.jsx)(n.li,{children:"The Stream name can differ in the self-signed token when using a regex value. If the primary Subscriber token doesn't validate the Stream name (via regex match) in the self-signed token, then it is rejected."}),"\n",(0,t.jsxs)(n.li,{children:["Self-signed tokens are ",(0,t.jsx)(n.strong,{children:"not revocable"})," and must be cycled if exposed."]}),"\n",(0,t.jsx)(n.li,{children:"If the parent Subscribe token has specific streams in it, then the self-signed Subscribe token must match one of them."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-token-api",children:"Using the Token API"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uD83D\uDC4D Self-sign your Subscribe tokens!"}),"\n",(0,t.jsxs)(n.p,{children:["Using the Token API is great for producing a few tokens, but for true scalability and speed you should ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/subscribe-tokens#self-signing-subscribe-tokens",children:"self-sign your tokens"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This guide provides a high-level understanding of managing your tokens via the Dolby.io dashboard. Whilst the dashboard is a great choice for managing publish and ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/subscribe-tokens",children:"subscribe"})," tokens, ",(0,t.jsx)(n.strong,{children:"all aspects of token creation and management can be programmatically controlled via the Dolby.io Streaming Token REST APIs"}),". By utilizing the Token APIs to automate workflows, you can create scalable streaming solutions for your application or platform."]}),"\n",(0,t.jsx)(n.p,{children:"To learn more about using the REST APIs for token creation and management, check out:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/token-api",children:"The Platform Guide for Token APIs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-256/millicast/api/subscribe-token-v-1-read-token",children:"The REST API reference"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},39269:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/image-6aa5f0fd58aed0a2ae4c77e77e6d7301.png"},58643:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/subscribe-token-add-98f4e6c173ff3100fce1d5c4d3d35f67.png"},69027:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/subscribe-token-delete-540771f6d60cb2a801f5bad4384acf23.png"},64844:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/subscribe-token-detail-d63c9996800840a13df6f9459c4a8c98.png"},28170:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/subscribe-token-list-8ac343a39bfeac110fd3d2d73b6a6a48.png"},61451:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/subscribe-token-quick-action-fa64d1c42640f3fd1944fc566a80fe82.png"},63547:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/subscribe-tokens-empty-d18f97d9ae8346e1dc6e944adef0e9c7.png"},62959:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/subscribe-tokens-settings-6cac79698ac3cd5b27d698d6f31c3f68.png"},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var s=i(67294);let t={},r=s.createContext(t);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);