(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["33294"],{54185:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>m,frontMatter:()=>d,metadata:()=>i,assets:()=>p,toc:()=>h,contentTitle:()=>u});var i=JSON.parse('{"id":"api/millicast-api","title":"Millicast API","description":"# Introduction","source":"@site/millicast/api/millicast-api.info.mdx","sourceDirName":"api","slug":"/api/millicast-api","permalink":"/documentation/pr-preview/pr-254/millicast/api/millicast-api","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"millicast-api","title":"Millicast API","description":"# Introduction","sidebar_label":"Introduction","sidebar_position":0,"hide_title":true,"custom_edit_url":null},"sidebar":"millicastApi","next":{"title":"Account Total","permalink":"/documentation/pr-preview/pr-254/millicast/api/analytics-account-total"}}'),a=n("85893"),o=n("50065");n("87180");var r=n("46055"),l=n("62372"),s=n.n(l),c=n("97645");n("96491");let d={id:"millicast-api",title:"Millicast API",description:"# Introduction",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},u="Introduction",p={},h=[{value:"Usage",id:"usage",level:3},{value:"Acquire secret from dashboard.",id:"acquire-secret-from-dashboard",level:4}];function f(e){let t={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 1.0.0"}),"\n",(0,a.jsx)(r.default,{as:"h1",className:"openapi__heading",children:"Millicast API"}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,a.jsx)(t.p,{children:"Controlling publishing for your Millicast account."}),"\n",(0,a.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,a.jsx)(r.default,{id:"authentication",as:"h2",className:"openapi-tabs__heading",children:"Authentication"}),(0,a.jsx)(s(),{className:"openapi-tabs__security-schemes",children:(0,a.jsxs)(c.default,{label:"HTTP: Bearer Auth",value:"API_Secret",children:[(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),(0,a.jsx)(t.h4,{id:"acquire-secret-from-dashboard",children:"Acquire secret from dashboard."}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Login to the streaming dashboard"}),"\n",(0,a.jsx)(t.li,{children:"On the left menu, click on Settings"}),"\n",(0,a.jsx)(t.li,{children:"Navigate to the Security tab's sub section API Secrets"}),"\n"]}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:'"+ Create" to generate a new named API Secret if needed'}),"\n",(0,a.jsx)(t.li,{children:"Click on the copy button or the reveal button to access a previously created API Secret"}),"\n"]}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(6302).Z+"",title:"Find API Secret",width:"608",height:"536"})}),(0,a.jsx)("div",{children:(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"http"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"HTTP Authorization Scheme:"})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"bearer"})})]})]})})})]})})]})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},93162:function(e,t,n){var i,a=n(25108);i=function(){"use strict";function t(e,t,n){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){s(i.response,t,n)},i.onerror=function(){a.error("could not download file")},i.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,n,a){var l=r.URL||r.webkitURL,s=document.createElement("a");n=n||e.name||"download",s.download=n,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?o(s):i(s.href)?t(e,n,a):o(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout(function(){l.revokeObjectURL(s.href)},4e4),setTimeout(function(){o(s)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e){var l;navigator.msSaveOrOpenBlob((void 0===(l=r)?l={autoBom:!1}:"object"!=typeof l&&(a.warn("Deprecated: Expected third argument to be a object"),l={autoBom:!l}),l.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),n)}else if(i(e))t(e,n,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout(function(){o(s)})}}:function(e,n,i,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,i);var o="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&s||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var u=r.URL||r.webkitURL,p=u.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout(function(){u.revokeObjectURL(p)},4e4)}});r.saveAs=s.saveAs=s,e.exports=s},"function"==typeof define&&define.amd?define([],i):i()},6302:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/api_secret-9660f67624d8c9bc8f2e0a898c0d7637.png"},96491:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=i(n(67294)),o=i(n(93162)),r=e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),o.default.saveAs(e,t||"openapi.txt")};t.default=function(e){let{url:t,proxy:n}=e;return a.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},a.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),a.default.createElement("ul",{className:"export-dropdown dropdown__menu"},a.default.createElement("li",null,a.default.createElement("a",{onClick:e=>{e.preventDefault(),r(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},87180:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{colorMode:t}=(0,o.useColorMode)(),{logo:n,darkLogo:i}=e,s=()=>"dark"===t?i?.altText??n?.altText:n?.altText,c=(0,r.default)(n?.url),d=(0,r.default)(i?.url);return n&&i?a.default.createElement(l.default,{alt:s(),sources:{light:c,dark:d},className:"openapi__logo"}):n||i?a.default.createElement(l.default,{alt:s(),sources:{light:c??d,dark:c??d},className:"openapi__logo"}):void 0};let a=i(n(67294)),o=n(34406),r=i(n(83187)),l=i(n(54198))}}]);