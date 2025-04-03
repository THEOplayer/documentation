(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["46235"],{78486:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>m,frontMatter:()=>c,metadata:()=>i,assets:()=>p,toc:()=>f,contentTitle:()=>u});var i=JSON.parse('{"id":"api/director/director-api","title":"Director API","description":"","source":"@site/millicast/api/director/director-api.info.mdx","sourceDirName":"api/director","slug":"/api/director/director-api","permalink":"/documentation/pr-preview/pr-253/millicast/api/director/director-api","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"director-api","title":"Director API","description":"","sidebar_label":"Introduction","sidebar_position":0,"hide_title":true,"custom_edit_url":null},"sidebar":"millicastApi","previous":{"title":"Viewer Records","permalink":"/documentation/pr-preview/pr-253/millicast/api/reporting/records-get-viewer-records"},"next":{"title":"Publish","permalink":"/documentation/pr-preview/pr-253/millicast/api/director/director-publish"}}'),r=n("85893"),o=n("50065");n("87180");var a=n("46055"),l=n("62372"),s=n.n(l),d=n("97645");n("96491");let c={id:"director-api",title:"Director API",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},u=void 0,p={},f=[{value:"Usage",id:"usage",level:3},{value:"Acquire token from dashboard or api.",id:"acquire-token-from-dashboard-or-api",level:4}];function h(e){let t={h3:"h3",h4:"h4",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 1.0.0"}),"\n",(0,r.jsx)(a.default,{as:"h1",className:"openapi__heading",children:"Director API"}),"\n",(0,r.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,r.jsx)(a.default,{id:"authentication",as:"h2",className:"openapi-tabs__heading",children:"Authentication"}),(0,r.jsx)(s(),{className:"openapi-tabs__security-schemes",children:(0,r.jsxs)(d.default,{label:"HTTP: Bearer Auth",value:"Token",children:[(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),(0,r.jsx)(t.h4,{id:"acquire-token-from-dashboard-or-api",children:"Acquire token from dashboard or api."}),(0,r.jsx)(t.p,{children:"Token will be specific to publishing or subscribing."}),(0,r.jsx)("div",{children:(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"http"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"HTTP Authorization Scheme:"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"bearer"})})]})]})})})]})})]})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},93162:function(e,t,n){var i,r=n(25108);i=function(){"use strict";function t(e,t,n){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){s(i.response,t,n)},i.onerror=function(){r.error("could not download file")},i.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,n,r){var l=a.URL||a.webkitURL,s=document.createElement("a");n=n||e.name||"download",s.download=n,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?o(s):i(s.href)?t(e,n,r):o(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout(function(){l.revokeObjectURL(s.href)},4e4),setTimeout(function(){o(s)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e){var l;navigator.msSaveOrOpenBlob((void 0===(l=a)?l={autoBom:!1}:"object"!=typeof l&&(r.warn("Deprecated: Expected third argument to be a object"),l={autoBom:!l}),l.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),n)}else if(i(e))t(e,n,a);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout(function(){o(s)})}}:function(e,n,i,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,i);var o="application/octet-stream"===e.type,s=/constructor/i.test(a.HTMLElement)||a.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||o&&s||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=d?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var u=a.URL||a.webkitURL,p=u.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout(function(){u.revokeObjectURL(p)},4e4)}});a.saveAs=s.saveAs=s,e.exports=s},"function"==typeof define&&define.amd?define([],i):i()},96491:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let r=i(n(67294)),o=i(n(93162)),a=e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),o.default.saveAs(e,t||"openapi.txt")};t.default=function(e){let{url:t,proxy:n}=e;return r.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.default.createElement("ul",{className:"export-dropdown dropdown__menu"},r.default.createElement("li",null,r.default.createElement("a",{onClick:e=>{e.preventDefault(),a(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},87180:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{colorMode:t}=(0,o.useColorMode)(),{logo:n,darkLogo:i}=e,s=()=>"dark"===t?i?.altText??n?.altText:n?.altText,d=(0,a.default)(n?.url),c=(0,a.default)(i?.url);return n&&i?r.default.createElement(l.default,{alt:s(),sources:{light:d,dark:c},className:"openapi__logo"}):n||i?r.default.createElement(l.default,{alt:s(),sources:{light:d??c,dark:d??c},className:"openapi__logo"}):void 0};let r=i(n(67294)),o=n(34406),a=i(n(83187)),l=i(n(54198))}}]);