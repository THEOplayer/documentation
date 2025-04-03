"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["69605"],{31202:function(e,t,l){l.r(t),l.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>u,contentTitle:()=>s});var r=JSON.parse('{"id":"how-to-guides/mediatrack/introduction","title":"Introduction","description":"This section provides some examples to help with the most common use cases:","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/06-mediatrack/00-introduction.mdx","sourceDirName":"how-to-guides/06-mediatrack","slug":"/how-to-guides/mediatrack/introduction","permalink":"/documentation/pr-preview/pr-255/theoplayer/v4/how-to-guides/mediatrack/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/06-mediatrack/00-introduction.mdx","tags":[],"version":"v4","sidebarPosition":0,"frontMatter":{},"sidebar":"roku","previous":{"title":"Deliver Low-Latency HLS live streams using Wowza Streaming Engine and THEOplayer","permalink":"/documentation/pr-preview/pr-255/theoplayer/v4/how-to-guides/integrations/deliver-low-latency-hls-live-streams-with-wowza-streaming-engine"},"next":{"title":"How to programmatically enable or disable audio tracks","permalink":"/documentation/pr-preview/pr-255/theoplayer/v4/how-to-guides/mediatrack/how-to-enable-disable-audio-tracks"}}'),n=l("85893"),a=l("50065"),c=l("87764");let i={},s="Introduction",o={},u=[];function A(e){let t={h1:"h1",header:"header",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,n.jsx)(t.p,{children:"This section provides some examples to help with the most common use cases:"}),"\n","\n",(0,n.jsx)(c.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(A,{...e})}):A(e)}},11107:function(e,t,l){l.d(t,{c:function(){return o}});var r=l(67294),n=l(87262),a=l(25108);let c=["zero","one","two","few","many","other"];function i(e){return c.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.default)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return a.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,l)=>(function(e,t,l){let r=e.split("|");if(1===r.length)return r[0];r.length>l.pluralForms.length&&a.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let n=l.select(t);return r[Math.min(l.pluralForms.indexOf(n),r.length-1)]})(l,t,e)}}},16545:function(e,t,l){l.d(t,{Z:()=>eN});var r,n,a,c,i,s,o,u,A,m,d,h,p,g,f,w,v,E,b,x,y,j,B,C,M,O,I,P,N,Z,L,D,z,F,H,Q,k,S,T=l("85893"),U=l("67294"),Y=l("54198"),V=l("83187");function K(){return(K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let G=e=>{let{title:t,titleId:l,...n}=e;return U.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30","aria-labelledby":l},n),t?U.createElement("title",{id:l},t):null,r||(r=U.createElement("g",{fill:"none",fillRule:"evenodd"},U.createElement("path",{fill:"#FFF",d:"M0 15c0 8.284 6.716 15 15 15 8.285 0 15-6.716 15-15S23.285 0 15 0 0 6.716 0 15"}),U.createElement("path",{fill:"#005AF0",fillRule:"nonzero",d:"M13.85 24.098h-1.14l1.128-6.823-3.49.005h-.05a.57.57 0 0 1-.568-.569c0-.135.125-.363.125-.363l6.272-10.46 1.16.005-1.156 6.834 3.508-.004h.056c.314 0 .569.254.569.568 0 .128-.05.24-.121.335zM15 0C6.716 0 0 6.716 0 15s6.716 15 15 15c8.285 0 15-6.716 15-15S23.285 0 15 0"}))))};function R(){return(R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let W=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg","aria-label":"Adobe",viewBox:"0 0 512 512","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,n||(n=U.createElement("rect",{width:512,height:512,fill:"#ed2224",rx:"15%"})),a||(a=U.createElement("path",{fill:"#fff",d:"M296 120h114v272zm-80 0H102v272zm39 99-48 118h52l23 55h46z"})))};function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let X=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:675,height:675,viewBox:"0 0 675 675","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,c||(c=U.createElement("path",{fill:"#34A853",d:"M672.38 514.23c-.22-1.378-.43-2.74-.66-4.102a335 335 0 0 0-5.13-25.041 337.2 337.2 0 0 0-28.51-75.63 341 341 0 0 0-24.56-40.072 338.6 338.6 0 0 0-37.1-43.697 334 334 0 0 0-17.66-16.361 339.6 339.6 0 0 0-42.06-30.98c.13-.214.24-.443.37-.657 6.79-11.732 13.6-23.449 20.39-35.181l19.92-34.361a10427 10427 0 0 0 14.3-24.68 31.3 31.3 0 0 0 2.69-6.038 30.96 30.96 0 0 0 .45-17.444 31.7 31.7 0 0 0-3.35-7.959c-2.54-4.266-6.17-7.974-10.73-10.682a31.15 31.15 0 0 0-13.16-4.233 31.5 31.5 0 0 0-5.83.05c-1.6.163-3.19.459-4.77.869a30.87 30.87 0 0 0-14.9 9.041 31 31 0 0 0-3.91 5.333c-4.77 8.221-9.54 16.459-14.3 24.68l-19.92 34.361c-6.79 11.733-13.6 23.449-20.39 35.182-.74 1.279-1.49 2.559-2.23 3.856-1.03-.411-2.05-.821-3.08-1.215-37.44-14.276-78.06-22.087-120.52-22.087-1.16 0-2.31 0-3.48.017-37.75.377-74.02 6.941-107.86 18.723a314 314 0 0 0-11.62 4.316c-.69-1.198-1.4-2.396-2.08-3.594-6.79-11.733-13.6-23.449-20.39-35.182l-19.92-34.36c-4.78-8.222-9.55-16.46-14.3-24.68a31.6 31.6 0 0 0-3.91-5.333 30.87 30.87 0 0 0-14.9-9.042c-1.58-.41-3.17-.705-4.78-.87a31.3 31.3 0 0 0-5.82-.049 30.8 30.8 0 0 0-13.17 4.234 30.8 30.8 0 0 0-10.72 10.682 30 30 0 0 0-1.95 3.873 29.6 29.6 0 0 0-1.4 4.086 31.05 31.05 0 0 0 .44 17.443 32 32 0 0 0 2.69 6.039c4.78 8.22 9.55 16.458 14.3 24.68 6.65 11.453 13.29 22.907 19.93 34.36 6.79 11.733 13.59 23.449 20.38 35.182.05.098.12.197.17.295a340 340 0 0 0-39.03 28.273 338 338 0 0 0-21.27 19.445 341 341 0 0 0-37.1 43.698 336 336 0 0 0-24.56 40.072 337.2 337.2 0 0 0-28.51 75.63 344 344 0 0 0-5.13 25.041c-.23 1.362-.44 2.74-.65 4.102a328 328 0 0 0-1.94 14.818h673.11c-.54-4.972-1.18-9.912-1.93-14.818z"})),i||(i=U.createElement("path",{fill:"#202124",d:"M512.79 435.987c13.47-8.966 15.43-29.71 4.37-46.331-11.05-16.622-30.93-22.827-44.39-13.861-13.47 8.967-15.43 29.71-4.37 46.331 11.05 16.622 30.93 22.828 44.39 13.861M207.6 422.184c11.06-16.622 9.1-37.365-4.37-46.331s-33.34-2.761-44.4 13.86c-11.05 16.622-9.09 37.365 4.37 46.331 13.47 8.967 33.35 2.761 44.4-13.86"})))};function J(){return(J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let _=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 242 256","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,U.createElement("g",{clipPath:"url(#a)"},U.createElement("mask",{id:"b",width:242,height:256,x:0,y:0,maskUnits:"userSpaceOnUse",style:{maskType:"luminance"}},s||(s=U.createElement("path",{fill:"#fff",d:"M0 0h242v256H0z"}))),o||(o=U.createElement("g",{mask:"url(#b)"},U.createElement("path",{fill:"url(#c)",d:"m241 43-9 136L149 0zm-58 176-62 36-63-36 12-31h101zM121 68l32 80H88zM9 179 0 43 92 0z"}),U.createElement("path",{fill:"url(#d)",d:"m241 43-9 136L149 0zm-58 176-62 36-63-36 12-31h101zM121 68l32 80H88zM9 179 0 43 92 0z"})))),u||(u=U.createElement("defs",null,U.createElement("linearGradient",{id:"c",x1:53.2,x2:245,y1:231.9,y2:140.7,gradientUnits:"userSpaceOnUse"},U.createElement("stop",{stopColor:"#E40035"}),U.createElement("stop",{offset:.2,stopColor:"#F60A48"}),U.createElement("stop",{offset:.4,stopColor:"#F20755"}),U.createElement("stop",{offset:.5,stopColor:"#DC087D"}),U.createElement("stop",{offset:.7,stopColor:"#9717E7"}),U.createElement("stop",{offset:1,stopColor:"#6C00F5"})),U.createElement("linearGradient",{id:"d",x1:44.5,x2:170,y1:30.7,y2:174,gradientUnits:"userSpaceOnUse"},U.createElement("stop",{stopColor:"#FF31D9"}),U.createElement("stop",{offset:1,stopColor:"#FF5BE1",stopOpacity:0})),U.createElement("clipPath",{id:"a"},U.createElement("path",{fill:"#fff",d:"M0 0h242v256H0z"})))))};function $(){return($=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let ee=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:20,height:20,viewBox:"0 0 20 20","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,A||(A=U.createElement("path",{d:"M17.85 14.227q-.159.46-.335.881a10.3 10.3 0 0 1-1.022 1.836q-.805 1.149-1.315 1.59-.787.725-1.691.744-.65 0-1.562-.372-.913-.373-1.681-.372-.805 0-1.729.372-.925.374-1.494.392-.867.038-1.729-.764-.55-.48-1.376-1.646-.885-1.244-1.455-2.891-.61-1.778-.611-3.444 0-1.91.826-3.291a4.85 4.85 0 0 1 1.73-1.75 4.65 4.65 0 0 1 2.339-.66q.688.001 1.809.421 1.12.421 1.435.422.237 0 1.591-.497 1.279-.46 2.163-.384 2.398.192 3.597 1.894-2.143 1.3-2.122 3.635.02 1.82 1.316 3.022.587.556 1.316.862M13.83.305q.02.19.019.38 0 1.426-1.038 2.658c-.835.976-1.845 1.54-2.94 1.451a3 3 0 0 1-.022-.36c0-.912.397-1.888 1.102-2.686q.529-.606 1.342-1.008.813-.397 1.537-.435"})))};function et(){return(et=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let el=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",et({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 34.5 28.17","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,m||(m=U.createElement("path",{fill:"#54c8e8",d:"M27.03 8.18v9.8l-19.59 2v5.49l27 2.7V7.44Z"})),d||(d=U.createElement("path",{fill:"#ffa400",d:"M0 0v20.67l7.44-.74v-9.82l19.59-1.93V2.67Z"})),h||(h=U.createElement("path",{fill:"#e43d30",d:"M27.03 8.18 7.44 10.11v9.82l19.59-2Z"})))};function er(){return(er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let en=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",er({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,p||(p=U.createElement("path",{fill:"#5bb8ea",d:"M21 3H3c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-5c-.55 0-1 .45-1 1s.45 1 1 1h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M2.14 14.09c-.6-.1-1.14.39-1.14 1 0 .49.36.9.85.98 2.08.36 3.72 2 4.08 4.08.08.49.49.85.98.85.61 0 1.09-.54 1-1.14a7 7 0 0 0-5.77-5.77M1 18v3h3c0-1.66-1.34-3-3-3m1.1-7.95c-.59-.05-1.1.41-1.1 1 0 .51.38.94.88.99 4.27.41 7.67 3.81 8.08 8.08.05.5.48.87.99.87.6 0 1.06-.52 1-1.11-.53-5.19-4.66-9.31-9.85-9.83"})))};function ea(){return(ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let ec=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",ea({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 300 371.43","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,g||(g=U.createElement("defs",null,U.createElement("radialGradient",{id:"radial-gradient",cx:5649.77,cy:4319.41,r:1817.72,gradientTransform:"matrix(.25 0 0 .25 -1404 -1054.53)",gradientUnits:"userSpaceOnUse"},U.createElement("stop",{offset:0,stopColor:"#fff",stopOpacity:.1}),U.createElement("stop",{offset:1,stopColor:"#fff",stopOpacity:0})),U.createElement("linearGradient",{id:"linear-gradient",x1:6254.1,x2:6424.34,y1:5576.56,y2:5406.31,gradientTransform:"matrix(.25 0 0 .25 -1404 -1054.53)",gradientUnits:"userSpaceOnUse"},U.createElement("stop",{offset:0,stopColor:"#1a237e",stopOpacity:.4}),U.createElement("stop",{offset:1,stopColor:"#1a237e",stopOpacity:0})),U.createElement("clipPath",{id:"clip-path"},U.createElement("path",{fill:"none",d:"m300 171.43-100 100 100 100H185.72l-42.86-42.86-57.15-57.15 100-100ZM185.72 0 0 185.72l57.15 57.15L300 0Z"})),U.createElement("style",null,".cls-2{clip-path:url(#clip-path)}.cls-4{fill:#54c5f8}"))),f||(f=U.createElement("g",{className:"cls-2"},U.createElement("path",{d:"M300 171.43H185.72L85.73 271.44l57.12 57.13z",className:"cls-4"}))),w||(w=U.createElement("g",{className:"cls-2"},U.createElement("path",{d:"M57.15 242.87 0 185.72 185.72 0H300z",className:"cls-4"}))),v||(v=U.createElement("path",{fill:"#01579b",d:"m142.85 328.57 42.87 42.87H300l-99.99-100z",className:"cls-2"})),E||(E=U.createElement("path",{fill:"url(#linear-gradient)",d:"m142.85 328.57 84.76-29.33-27.6-27.8z",className:"cls-2"})),b||(b=U.createElement("path",{fill:"#29b6f6",d:"m85.716 271.44 57.141-57.142L200 271.44l-57.142 57.141z",className:"cls-2"})),x||(x=U.createElement("path",{fill:"url(#radial-gradient)",d:"m300 171.43-100 100 100 100H185.72l-42.86-42.86-57.15-57.15 100-100ZM185.72 0 0 185.72l57.15 57.15L300 0Z"})))};function ei(){return(ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let es=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",ei({xmlns:"http://www.w3.org/2000/svg",width:800,height:800,viewBox:"0 0 20 20","aria-labelledby":l},r),void 0===t?U.createElement("title",{id:l},"windows [#174]"):t?U.createElement("title",{id:l},t):null,y||(y=U.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M9.146 10.434c.005 2 .01 5.395.016 8.035 3.614.489 7.228.992 10.836 1.531 0-3.151.004-6.289 0-9.287-3.617 0-7.233-.279-10.852-.279M0 10.435v6.787c2.726.367 5.452.72 8.172 1.12.005-2.625-.002-5.251-.002-7.877-2.723.005-5.446-.039-8.17-.03m0-7.592v6.768c2.726.007 5.452-.034 8.177-.031-.002-2.62-.002-5.236-.005-7.856-2.727.34-5.455.702-8.172 1.12m20 6.628c-3.612.014-7.224.069-10.838.08q-.003-3.993 0-7.983A792 792 0 0 1 19.998 0q.001 4.736.002 9.472"})))};function eo(){return(eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let eu=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",eo({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 275 173.7","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,j||(j=U.createElement("path",{fill:"#6e37fa",d:"M194.4 39.5v61.6c0 2 1.7 3.7 3.7 3.7.6 0 1.3-.2 1.8-.5l53.4-30.8c1.8-1 2.4-3.3 1.4-5-.3-.6-.8-1-1.4-1.4l-53.4-30.8c-1.8-1-4-.4-5 1.4-.4.6-.5 1.2-.5 1.8"})),B||(B=U.createElement("path",{fill:"#f40953",d:"M74.9 132.4V70.8c0-2-1.6-3.7-3.7-3.7-.7 0-1.3.2-1.9.5L16 98.4c-1.8 1-2.4 3.3-1.3 5.1.3.6.8 1 1.3 1.3l53.4 30.8c1.8 1 4 .4 5-1.4.3-.5.5-1.2.5-1.8"})),C||(C=U.createElement("path",{fill:"#ff9408",d:"M104.3 91.4V153c0 2 1.7 3.7 3.7 3.7.6 0 1.3-.2 1.8-.5l53.3-30.8c1.8-1 2.4-3.3 1.3-5-.3-.6-.8-1-1.3-1.3l-53.3-30.8c-1.8-1-4-.4-5 1.4-.3.5-.5 1.1-.5 1.7"})),M||(M=U.createElement("path",{fill:"#32bbb9",d:"M165.2 80.6V19c0-2-1.7-3.7-3.7-3.7-.6 0-1.3.2-1.8.5l-53.4 30.8c-1.8 1-2.4 3.3-1.3 5 .3.6.8 1 1.3 1.3l53.4 30.8c1.8 1 4 .4 5-1.3.4-.5.5-1.1.5-1.8"})))};function eA(){return(eA=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let em=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",eA({xmlns:"http://www.w3.org/2000/svg",width:256,height:168,preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 168","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,O||(O=U.createElement("path",{fill:"#00DC82",d:"M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.96 16.96 0 0 0 6.302-6.115 16.3 16.3 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.97 16.97 0 0 0-6.301-6.113 17.6 17.6 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.96 16.96 0 0 0-6.3 6.113l-16.342 27.473-31.95-53.724a17 17 0 0 0-6.304-6.112A17.64 17.64 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a17 17 0 0 0-6.303 6.112L2.31 141.975a16.3 16.3 0 0 0-2.31 8.35c0 2.932.793 5.813 2.304 8.352a16.96 16.96 0 0 0 6.302 6.115 17.6 17.6 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983 15.618-26.215 46.874 78.742h-62.492zm-67.64-26.24-41.688-.01L96.782 35.796l31.181 52.492-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416Z"})))};function ed(){return(ed=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let eh=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",ed({xmlns:"http://www.w3.org/2000/svg",viewBox:"-11.5 -10.232 23 20.463","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,I||(I=U.createElement("circle",{r:2.05,fill:"#61dafb"})),P||(P=U.createElement("g",{fill:"none",stroke:"#61dafb"},U.createElement("ellipse",{rx:11,ry:4.2}),U.createElement("ellipse",{rx:11,ry:4.2,transform:"rotate(60)"}),U.createElement("ellipse",{rx:11,ry:4.2,transform:"rotate(120)"}))))};function ep(){return(ep=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let eg=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",ep({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:1e3,height:311.166,viewBox:"0 0 1000 311.166","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,N||(N=U.createElement("g",{fill:"#6c3c97"},U.createElement("path",{d:"M157.838 102.487c0-28.38-22.833-51.235-50.751-51.235H81.919v102.016h25.168c27.918 0 50.75-22.87 50.75-50.781m114.487 203.381h-92.387l-73.35-101.796H81.92v101.577H.5V.501h116.64c67.242 0 122.127 45.725 122.127 101.986 0 34.312-21.041 64.96-53.064 83.71l86.122 119.664"}),U.createElement("path",{d:"M364.144 120.8c-21.502 0-39.792 29.226-39.792 65.405s18.29 65.443 39.792 65.443c22.001 0 40.261-29.264 40.261-65.443s-18.26-65.406-40.26-65.406m125.324 65.406c0 69.117-56.208 124.463-125.325 124.463-69.094 0-124.886-55.346-124.886-124.463 0-69.064 55.792-124.44 124.886-124.44 69.117 0 125.325 55.376 125.325 124.44m191.07-119.376-93.793 93.778V66.51h-81.398v239.13h81.398v-96.997l97.92 96.998h102.46l-124.43-124.447L765.76 78.166v141.906c0 47.115 28.342 90.596 99.688 90.596 33.874 0 64.96-19.212 80.068-36.595l36.602 31.569h17.384V66.829h-81.414v154.618c-9.167 16-21.94 26.06-41.681 26.06-20.028 0-29.219-11.874-29.219-49.852V66.83H680.54z"}))))};function ef(){return(ef=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let ew=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",ef({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 521.333 521.333","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,Z||(Z=U.createElement("path",{fill:"#fb1ea7",d:"m393.449 221.449-2.782-2.782V81.747l2.484-2.249c2.798-2.532 77.81-36.831 80.551-36.831.97 0 2.485.72 3.365 1.6l1.6 1.6v140.386l-2.334 2.015c-2.683 2.316-71.36 33.769-76.614 35.088l-3.488.875z"})),L||(L=U.createElement("path",{fill:"#214362",d:"M89.362 314.009c-23.818-14.235-44.068-26.926-45-28.2l-1.695-2.319V102.491l1.364-2.548c.75-1.402 2.568-3.193 4.04-3.98l2.675-1.433 25.991 13.382 17.155 8.832 43.146 22.213 1.48 3.25L140 145.46v190.128l-2.438 2.206c-3.509 3.175-1.125 4.351-48.2-23.784z"})),D||(D=U.createElement("path",{fill:"#fb1ea7",d:"M142.337 476.333 140.261 474l-.464-58.266-.464-58.266 1.334-1.197c.733-.659 23.533-10.91 50.666-22.782 27.134-11.872 52.634-23.221 56.667-25.221l7.333-3.636 2.544-5.192 2.543-5.192.643-79.216.644-79.215 2.823-1.85c1.552-1.017 22.618-10.601 46.813-21.298l43.99-19.449 4 .39 4 .39.34 144.303.339 144.303-5.332 2.72c-5.494 2.803-187.5 83.646-202.307 89.86-9.795 4.111-11.29 4.233-14.036 1.147"})))};function ev(){return(ev=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let eE=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",ev({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 261.76 226.69","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,z||(z=U.createElement("path",{fill:"#41b883",d:"m161.096.001-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z"})),F||(F=U.createElement("path",{fill:"#34495e",d:"m161.096.001-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z"})))};function eb(){return(eb=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let ex=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",eb({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,H||(H=U.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),Q||(Q=U.createElement("path",{fill:"#83CBFF",d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A8 8 0 0 1 5.08 16m2.95-8H5.08a8 8 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"})))};function ey(){return(ey=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let ej=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",ey({xmlns:"http://www.w3.org/2000/svg",width:800,height:800,viewBox:"0 0 20 20","aria-labelledby":l},r),void 0===t?U.createElement("title",{id:l},"windows [#174]"):t?U.createElement("title",{id:l},t):null,k||(k=U.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M9.146 10.434c.005 2 .01 5.395.016 8.035 3.614.489 7.228.992 10.836 1.531 0-3.151.004-6.289 0-9.287-3.617 0-7.233-.279-10.852-.279M0 10.435v6.787c2.726.367 5.452.72 8.172 1.12.005-2.625-.002-5.251-.002-7.877-2.723.005-5.446-.039-8.17-.03m0-7.592v6.768c2.726.007 5.452-.034 8.177-.031-.002-2.62-.002-5.236-.005-7.856-2.727.34-5.455.702-8.172 1.12m20 6.628c-3.612.014-7.224.069-10.838.08q-.003-3.993 0-7.983A792 792 0 0 1 19.998 0q.001 4.736.002 9.472"})))};function eB(){return(eB=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(null,arguments)}let eC=e=>{let{title:t,titleId:l,...r}=e;return U.createElement("svg",eB({xmlns:"http://www.w3.org/2000/svg",width:252,height:252,viewBox:"0 0 252 252","aria-labelledby":l},r),t?U.createElement("title",{id:l},t):null,S||(S=U.createElement("path",{fill:"#21759b",d:"M225.405 71.65c8.843 16.133 13.875 34.65 13.875 54.346 0 41.793-22.65 78.28-56.328 97.917l34.6-100.04c6.462-16.161 8.614-29.084 8.614-40.574 0-4.171-.274-8.042-.76-11.65m-83.795 1.234c6.82-.36 12.965-1.076 12.965-1.076 6.104-.723 5.384-9.694-.723-9.336 0 0-18.35 1.44-30.194 1.44-11.131 0-29.835-1.44-29.835-1.44-6.11-.358-6.825 8.973-.719 9.336 0 0 5.779.717 11.883 1.076l17.648 48.358-24.795 74.35-41.25-122.708a232 232 0 0 0 12.964-1.076c6.1-.723 5.38-9.694-.724-9.336 0 0-18.346 1.44-30.192 1.44-2.126 0-4.63-.054-7.29-.138 20.255-30.752 55.071-51.06 94.65-51.06 29.49 0 56.343 11.276 76.497 29.743-.488-.03-.964-.09-1.467-.09-11.128 0-19.024 9.693-19.024 20.105 0 9.336 5.387 17.234 11.128 26.569 4.308 7.545 9.34 17.237 9.34 31.242 0 9.694-3.73 20.947-8.62 36.622l-11.303 37.753zM126 239.287a113.3 113.3 0 0 1-32.004-4.616l33.993-98.766 34.819 95.398c.23.56.51 1.076.81 1.56A113 113 0 0 1 126 239.287M12.718 125.994a112.8 112.8 0 0 1 9.809-46.1l54.04 148.055c-37.795-18.36-63.85-57.113-63.85-101.953M126 0C56.524 0 .002 56.52.002 125.996c0 69.477 56.522 126.005 126 126.005C195.473 252 252 195.473 252 125.996 252 56.52 195.474 0 126 0"})))};var eM=l("67026");let eO={icon:"icon_qj0s"};function eI(e){let{className:t,icon:l}=e;return t?(0,T.jsx)("span",{className:t,children:l}):l}function eP(e){let{sources:t,...l}=e,{withBaseUrl:r}=(0,V.useBaseUrlUtils)();return(0,T.jsx)(Y.default,{sources:{light:r(t.light),dark:r(t.dark)},...l})}function eN(e){let{icon:t,defaultIcon:l,className:r}=e;if(!t)return(0,T.jsx)(eI,{icon:l,className:(0,eM.Z)(eO.icon,r)});switch(t){case"adobe":return(0,T.jsx)(W,{className:(0,eM.Z)(eO.icon,r)});case"amp":return(0,T.jsx)(G,{className:(0,eM.Z)(eO.icon,r)});case"android":return(0,T.jsx)(X,{className:(0,eM.Z)(eO.icon,r)});case"angular":return(0,T.jsx)(_,{className:(0,eM.Z)(eO.icon,r)});case"apple":return(0,T.jsx)(ee,{className:(0,eM.Z)(eO.icon,r)});case"chromecast":return(0,T.jsx)(en,{className:(0,eM.Z)(eO.icon,r)});case"comscore":return(0,T.jsx)(el,{className:(0,eM.Z)(eO.icon,r)});case"conviva":return(0,T.jsx)(eP,{sources:{light:"/img/conviva.svg",dark:"/img/conviva_dark.svg"},className:(0,eM.Z)(eO.icon,r)});case"flutter":return(0,T.jsx)(ec,{className:(0,eM.Z)(eO.icon,r)});case"github":return(0,T.jsx)(eP,{sources:{light:"/img/github.svg",dark:"/img/github_dark.svg"},className:(0,eM.Z)(eO.icon,r)});case"linux":return(0,T.jsx)(es,{className:(0,eM.Z)(eO.icon,r)});case"nielsen":return(0,T.jsx)(eu,{className:(0,eM.Z)(eO.icon,r)});case"nuxtjs":return(0,T.jsx)(em,{className:(0,eM.Z)(eO.icon,r)});case"react":return(0,T.jsx)(eh,{className:(0,eM.Z)(eO.icon,r)});case"roku":return(0,T.jsx)(eg,{className:(0,eM.Z)(eO.icon,r)});case"uplynk":return(0,T.jsx)(ew,{className:(0,eM.Z)(eO.icon,r)});case"vuejs":return(0,T.jsx)(eE,{className:(0,eM.Z)(eO.icon,r)});case"web":return(0,T.jsx)(ex,{className:(0,eM.Z)(eO.icon,r)});case"windows":return(0,T.jsx)(ej,{className:(0,eM.Z)(eO.icon,r)});case"wordpress":return(0,T.jsx)(eC,{className:(0,eM.Z)(eO.icon,r)});case"yospace":return(0,T.jsx)("img",{src:"data:image/png;base64,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",className:(0,eM.Z)(eO.icon,r)});default:return(0,T.jsx)(eI,{icon:t,className:(0,eM.Z)(eO.icon,r)})}}},45110:function(e,t,l){l.d(t,{Z:()=>w});var r=l("85893");l("67294");var n=l("67026"),a=l("53367"),c=l("86563"),i=l("11107"),s=l("19999"),o=l("7670"),u=l("46055"),A=l("16545");let m={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",cardIcon:"cardIcon_whke"};function d(e){let{href:t,children:l}=e;return(0,r.jsx)(a.default,{href:t,className:(0,n.Z)("card padding--lg",m.cardContainer),children:l})}function h(e){let{href:t,icon:l,title:a,description:c}=e;return(0,r.jsxs)(d,{href:t,children:[(0,r.jsxs)(u.default,{as:"h2",className:(0,n.Z)("text--truncate",m.cardTitle),title:a,children:[l," ",a]}),c&&(0,r.jsx)("p",{className:(0,n.Z)(m.cardDescription),children:c})]})}function p(e){let{item:t,defaultIcon:l}=e;return(0,r.jsx)(A.Z,{className:m.cardIcon,icon:t.customProps?.icon,defaultIcon:l})}function g(e){let{item:t}=e,l=(0,r.jsx)(p,{item:t,defaultIcon:"\uD83D\uDDC3\uFE0F"}),n=(0,c.LM)(t),a=function(){let{selectMessage:e}=(0,i.c)();return t=>e(t,(0,o.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(h,{href:n,icon:l,title:t.label,description:t.description??a(t.items.length)}):null}function f(e){let{item:t}=e,l=(0,r.jsx)(p,{item:t,defaultIcon:(0,s.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17"}),n=(0,c.xz)(t.docId??void 0);return(0,r.jsx)(h,{href:t.href,icon:l,title:t.label,description:t.description??n?.description})}function w(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(f,{item:t});case"category":return(0,r.jsx)(g,{item:t});case"html":return null;default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}},87764:function(e,t,l){l.d(t,{Z:function(){return u}});var r=l(85893);l(67294);var n=l(67026),a=l(37097),c=l(86563),i=l(45110);function s(e){let t=(0,a.k)(),l=(0,c.jA)().items.filter(e=>!("link"===e.type&&e.docId===t.metadata.id));return(0,r.jsx)(u,{...e,items:l})}function o(e){return"link"===e.type||"category"===e.type}function u(e){let{items:t,className:l}=e;if(!t)return(0,r.jsx)(s,{...e});let a=(0,c.MN)(t).filter(o);return(0,r.jsx)("section",{className:(0,n.Z)("row",l),children:a.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(i.Z,{item:e})},t))})}},50065:function(e,t,l){l.d(t,{Z:function(){return i},a:function(){return c}});var r=l(67294);let n={},a=r.createContext(n);function c(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);