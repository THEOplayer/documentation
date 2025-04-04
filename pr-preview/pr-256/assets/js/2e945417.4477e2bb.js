"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["71910"],{37016:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>h,contentTitle:()=>s});var i=JSON.parse('{"id":"guides/authorization","title":"Authorization","description":"Making secure calls to our REST API requires authentication and authorization. THEOlive makes use of token-secret pairs to authorize requests.","source":"@site/theolive/guides/authorization.mdx","sourceDirName":"guides","slug":"/guides/authorization","permalink":"/documentation/pr-preview/pr-256/theolive/guides/authorization","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/guides/authorization.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"theolive","previous":{"title":"Manage your team","permalink":"/documentation/pr-preview/pr-256/theolive/guides/manage-team"},"next":{"title":"Alias","permalink":"/documentation/pr-preview/pr-256/theolive/guides/multi-channel"}}'),o=n("85893"),r=n("50065");let a={sidebar_position:1},s="Authorization",c={},h=[{value:"1. Getting a token-secret pair",id:"1-getting-a-token-secret-pair",level:2},{value:"2. Using the token-secret pair with Basic Authentication",id:"2-using-the-token-secret-pair-with-basic-authentication",level:2}];function u(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"authorization",children:"Authorization"})}),"\n",(0,o.jsx)(t.p,{children:"Making secure calls to our REST API requires authentication and authorization. THEOlive makes use of token-secret pairs to authorize requests."}),"\n",(0,o.jsx)(t.h2,{id:"1-getting-a-token-secret-pair",children:"1. Getting a token-secret pair"}),"\n",(0,o.jsxs)(t.p,{children:["To generate a token-secret pair, you should be registered for an account at on our ",(0,o.jsx)(t.a,{href:"https://console.theo.live/",children:"management console"}),'. Under the section "Tokens", click on the "Generate Token" button, and enter a name before clicking "Generate".']}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(70902).Z+"",width:"1908",height:"817"})}),"\n",(0,o.jsx)(t.p,{children:'This will give a pop-up which shows your token "key" and the corresponding secret.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(72193).Z+"",width:"1914",height:"913"})}),"\n",(0,o.jsx)(t.admonition,{title:"Please store the secret",type:"warning",children:(0,o.jsx)(t.p,{children:"Make sure to store the secret somewhere, as this will be shown to you only once, and THEOlive only stores a hash of the secret, so it cannot be recovered afterward."})}),"\n",(0,o.jsx)(t.p,{children:'Once you "Close" the pop-up window, the new token will be visible in your list of tokens.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(26951).Z+"",width:"1914",height:"915"})}),"\n",(0,o.jsx)(t.p,{children:"In case you forgot your secret, or the secret got exposed, you can easily regenerate a pair at all times."}),"\n",(0,o.jsx)(t.h2,{id:"2-using-the-token-secret-pair-with-basic-authentication",children:"2. Using the token-secret pair with Basic Authentication"}),"\n",(0,o.jsx)(t.p,{children:"THEOlive makes use of Basic Authentication when making requests to the API. In the 'Authorization' header, make sure to pass your token-secret pair (encoded with base64), prepended with the word 'Basic'."}),"\n",(0,o.jsxs)(t.p,{children:["For example, assume the token has value ",(0,o.jsx)(t.code,{children:"my-token"})," and the secret has value ",(0,o.jsx)(t.code,{children:"my-secret"}),": 1. Combine them like this: ",(0,o.jsx)(t.code,{children:"my-token:my-secret"}),". 2. Encode this value using base64: ",(0,o.jsx)(t.code,{children:"bXktdG9rZW46bXktc2VjcmV0"})," 3. Pass the full Authorization header (with ",(0,o.jsx)(t.code,{children:"Basic"})," included) in your REST calls: ",(0,o.jsx)(t.code,{children:"Authorization: Basic bXktdG9rZW46bXktc2VjcmV0"})]}),"\n",(0,o.jsx)(t.p,{children:"So to summarize, the final header would be:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Authorization: Basic bXktdG9rZW46bXktc2VjcmV0\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can now make authenticated requests to our THEOlive API."})]})}function l(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},26951:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/5361242-3.-THEOlive-console-token-list-c724d365a813752794596c659ca6a3b7.PNG"},72193:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/bb9b4a6-2.-THEOlive-console-generated-token-and-secret-162a8966ab2d79d35b2af87b63cef4ce.PNG"},70902:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/c0aca77-1.-THEOlive-console-generate-token-adbe2de4b5bc32272e38d30cf5f2f843.PNG"},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var i=n(67294);let o={},r=i.createContext(o);function a(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);