"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["98452"],{17008:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"guides/postman","title":"Using Postman with THEOlive","description":"Postman is a great tool to play around and test your API tools. In this guide, we will explain to you how to install it, and how to use it to make some calls towards the THEOlive API.","source":"@site/theolive/guides/postman.md","sourceDirName":"guides","slug":"/guides/postman","permalink":"/documentation/pr-preview/pr-221/theolive/guides/postman","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/guides/postman.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"theolive","previous":{"title":"THEOlive playback","permalink":"/documentation/pr-preview/pr-221/theolive/theo-live-playback"},"next":{"title":"Using Postman with THEOlive","permalink":"/documentation/pr-preview/pr-221/theolive/guides/postman"}}'),i=n("85893"),s=n("50065");let r={sidebar_position:1},a="Using Postman with THEOlive",l={},c=[{value:"1. Sign up for a Postman Account and download",id:"1-sign-up-for-a-postman-account-and-download",level:2},{value:"2. Configure your first request",id:"2-configure-your-first-request",level:2},{value:"3. Send the request",id:"3-send-the-request",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"using-postman-with-theolive",children:"Using Postman with THEOlive"})}),"\n",(0,i.jsx)(t.p,{children:"Postman is a great tool to play around and test your API tools. In this guide, we will explain to you how to install it, and how to use it to make some calls towards the THEOlive API."}),"\n",(0,i.jsx)(t.h2,{id:"1-sign-up-for-a-postman-account-and-download",children:"1. Sign up for a Postman Account and download"}),"\n",(0,i.jsxs)(t.p,{children:["You can log in or sign up for a Postman account by clicking on ",(0,i.jsx)(t.a,{href:"https://www.postman.com/product/api-client/",children:"this link"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Once you are signed in, you can download the ",(0,i.jsx)(t.a,{href:"https://www.postman.com/downloads/",children:"Postman client"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"2-configure-your-first-request",children:"2. Configure your first request"}),"\n",(0,i.jsx)(t.p,{children:'Under the section "Start with something new", click on \u201CCreate New\u201D and subsequently click "Create a Request" under the "Get Started" section.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Landing page of the Postman client when launching it for the first time",src:n(27226).Z+"",width:"1913",height:"891"})}),"\n",(0,i.jsx)(t.p,{children:"Perform the following basic steps to set up your request:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"a. Select the right method"})," (",(0,i.jsx)(t.code,{children:"DELETE"}),", ",(0,i.jsx)(t.code,{children:"GET"}),", ",(0,i.jsx)(t.code,{children:"PATCH"}),", ",(0,i.jsx)(t.code,{children:"POST"}),") based on the ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/reference/create-channel",children:"API reference documentation"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"b. Pass the URL."})," For ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/reference/create-channel",children:"Create channel"}),", for example, this is ",(0,i.jsx)(t.code,{children:"https://api.theo.live/channels"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"c. Set the right Authorization"})," (see screenshot below)"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Select the Authorization tab"}),"\n",(0,i.jsx)(t.li,{children:"Select \u201CBasic Auth\u201D as type"}),"\n",(0,i.jsxs)(t.li,{children:["Pass your credentials, i.e. username and password. These correspond to respectively the token (=user name) and secret (=password) as generated in the management console. More information on authorization can be found in the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-221/theolive/getting-started/authorization",children:"Authorization"})," guide."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Setting the authorization right",src:n(92437).Z+"",width:"1347",height:"418"})}),"\n",(0,i.jsxs)(t.p,{children:["In case of a ",(0,i.jsx)(t.code,{children:"POST"})," method, pass the right body as per the ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/reference/create-channel",children:"API reference documentation"}),". Also, see the example below for 'Create Channel' where the channel 'test-channel' is created."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:"Body Create Channel",children:'{\n  "ingestLocation": "europe-west",\n  "metadata": {\n    "name": "test-channel"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Make sure to select the \u201Craw\u201D radio button, and select \u201CJSON\u201D in the dropdown (which is located after \u201CGraphQL\u201D radio button and standardly is set to \u201CText\u201D.)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Defining the right body to create a channel",src:n(34347).Z+"",width:"1376",height:"532"})}),"\n",(0,i.jsx)(t.h2,{id:"3-send-the-request",children:"3. Send the request"}),"\n",(0,i.jsxs)(t.p,{children:['Hit \u201CSend\u201D to trigger the request. Results will be shown in the "Response" section at the bottom of the page. For the Create Channel example, it will return an ',(0,i.jsx)(t.code,{children:"id"})," that you can use to start, stop or delete the channel later on. Also, a ",(0,i.jsx)(t.code,{children:"stream_key"})," and ",(0,i.jsx)(t.code,{children:"rtmp_push_url"})," will be returned to stream your content."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},27226:function(e,t,n){n.d(t,{Z:function(){return o}});let o=n.p+"assets/images/74289df-Postman_-_Landing_Page-912cedb62cc2790b3d285471ac4902f2.JPG"},34347:function(e,t,n){n.d(t,{Z:function(){return o}});let o=n.p+"assets/images/d72c440-3.-create-channel-349d22d56a4ced084fb122d84c238b64.PNG"},92437:function(e,t,n){n.d(t,{Z:function(){return o}});let o=n.p+"assets/images/f033f01-2.-auth-ce0ebb1c235d487b304257a754c7e2d5.png"},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var o=n(67294);let i={},s=o.createContext(i);function r(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);