"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["18096"],{42893:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"guides/Security/token-based-security","title":"Token based security","description":"THEOlive offers the option to enable JWT token security on channel alias level. This can be interesting if you only want valid users to access your stream.","source":"@site/theolive/guides/Security/token-based-security.mdx","sourceDirName":"guides/Security","slug":"/guides/Security/token-based-security","permalink":"/documentation/pr-preview/pr-260/theolive/guides/Security/token-based-security","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/guides/Security/token-based-security.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"theolive","previous":{"title":"Geo-blocking","permalink":"/documentation/pr-preview/pr-260/theolive/guides/Security/geo-blocking"},"next":{"title":"Troubleshooting","permalink":"/documentation/pr-preview/pr-260/theolive/troubleshooting"}}'),i=n("85893"),o=n("50065");let s={},a="Token based security",l={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Enable or disable token security for an alias",id:"enable-or-disable-token-security-for-an-alias",level:2},{value:"Configuring THEOplayer to pass the necessary headers",id:"configuring-theoplayer-to-pass-the-necessary-headers",level:2},{value:"1. Create a network interceptor",id:"1-create-a-network-interceptor",level:3},{value:"2. Set the request interceptor",id:"2-set-the-request-interceptor",level:3}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"token-based-security",children:"Token based security"})}),"\n",(0,i.jsx)(t.p,{children:"THEOlive offers the option to enable JWT token security on channel alias level. This can be interesting if you only want valid users to access your stream."}),"\n",(0,i.jsx)(t.p,{children:"In this document, we will"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"explain how it works"}),"\n",(0,i.jsx)(t.li,{children:"how to enable/disable it via the console and API"}),"\n",(0,i.jsx)(t.li,{children:"how to configure your THEOplayer to pass the mandatory headers"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,i.jsxs)(t.p,{children:["When enabling token security on a channel alias, we expect you to share the shared (private) key in case of HS256/HS512 or the public key in case of RS256/RS512 encryption. This will be used on CDN level to determine if a request (with a Bearer token passed in the ",(0,i.jsx)(t.code,{children:"Authorization"})," header) is valid or not. It's up to you to configure this header correctly through our ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/theoplayer",children:"npm player"}),". Later in this document we will explain how."]}),"\n",(0,i.jsx)(t.p,{children:"In the bearer token that gets sent to us, we expect the following properties to be available:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"exp"}),": date in epoch format until which the JWT token is valid"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"nbf"}),': optional date in epoch format. Stands for "not before" and acts as a "start date" of the JWT to be valid.']}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"When not passing a bearer token for a secured channel, the request will be rejected."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"token based security",src:n(26259).Z+"",width:"720",height:"306"})}),"\n",(0,i.jsx)(t.h2,{id:"enable-or-disable-token-security-for-an-alias",children:"Enable or disable token security for an alias"}),"\n",(0,i.jsxs)(t.p,{children:["Please refer to the ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/reference/enable-token-security-for-alias",children:"Enable token security for alias"})," and ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/reference/disable-token-security-for-alias",children:"Disable token security for alias"})," API endpoints to manage the token security settings for an alias."]}),"\n",(0,i.jsxs)(t.p,{children:["When enabling for the first time, you have to pass the ",(0,i.jsx)(t.code,{children:"key"})," property in the body. If you disable token security later on, and make it active again, you can omit this property if it should stay the same."]}),"\n",(0,i.jsxs)(t.p,{children:["If you're using the ",(0,i.jsx)(t.a,{href:"https://console.theo.live",children:"THEOlive management console"}),", you can navigate to the player details page and select the alias you want to enable/disable token security for. When enabling, please pass the correct shared or public key to use. ",(0,i.jsx)(t.strong,{children:"Don't forget to confirm your changes by hitting the save button!"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Managing token security in the console",src:n(85667).Z+"",width:"1323",height:"770"})}),"\n",(0,i.jsx)(t.h2,{id:"configuring-theoplayer-to-pass-the-necessary-headers",children:"Configuring THEOplayer to pass the necessary headers"}),"\n",(0,i.jsx)(t.h3,{id:"1-create-a-network-interceptor",children:"1. Create a network interceptor"}),"\n",(0,i.jsxs)(t.p,{children:["First thing to do is to create a header provider function. In this function you add the ",(0,i.jsx)(t.code,{children:"Authorization"})," header which contains a bearer token generated by you. This token should at least contain a ",(0,i.jsx)(t.code,{children:"exp"})," property, and an optional ",(0,i.jsx)(t.code,{children:"nbf"})," property. You can add as many other properties to it as you want, but THEOlive doesn't do anything with them."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:"Creating header provider",children:"const interceptor = (request) => {\n  const headers = {\n    ...request.headers,\n    Authorization: 'Bearer <token-generated-by-you>',\n  };\n  request.redirect({\n    headers,\n  });\n};\n"})}),"\n",(0,i.jsx)(t.h3,{id:"2-set-the-request-interceptor",children:"2. Set the request interceptor"}),"\n",(0,i.jsx)(t.p,{children:"The above defined interceptors can be added to the player as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"player.network.addRequestInterceptor(interceptor);\n"})}),"\n",(0,i.jsx)(t.p,{children:"The player will now include the header in every request that gets made to the CDN to grab content."}),"\n",(0,i.jsx)(t.p,{children:"Similarly, interceptors can be removed, as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"player.network.removeRequestInterceptor(interceptor);\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"An unauthorized error will occur if no token or an invalid token is passed, preventing users from being able to watch the stream."})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},85667:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/51376b6-token-d85cdc1dbfb111642fa9b7f764b921e6.png"},26259:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/dcdfc37-token_security-198f04847aec73ad4f237ac1e8c7c650.png"},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var r=n(67294);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);