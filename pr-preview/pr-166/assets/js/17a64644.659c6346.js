"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["47535"],{25871:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>p,assets:()=>c,toc:()=>u,frontMatter:()=>l});var r=JSON.parse('{"id":"getting-started/getting-started-react-native","title":"Getting started with THEOads on React Native","description":"This guide will get you started with THEOads in your THEOplayer React Native SDK: configure the license, update dependencies and set the source description.","source":"@site/theoads/getting-started/00-getting-started-react-native.mdx","sourceDirName":"getting-started","slug":"/getting-started/getting-started-react-native","permalink":"/documentation/pr-preview/pr-166/theoads/getting-started/getting-started-react-native","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoads/getting-started/00-getting-started-react-native.mdx","tags":[],"version":"current","sidebarPosition":0.5,"frontMatter":{"sidebar_position":0.5,"sidebar_label":"React Native","sidebar_custom_props":{"icon":"react"}},"sidebar":"theoads","previous":{"title":"iOS","permalink":"/documentation/pr-preview/pr-166/theoads/getting-started/getting-started-ios"},"next":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-166/theoads/how-to-guides/"}}'),a=n("85893"),i=n("50065"),s=n("20398"),o=n("5525");let l={sidebar_position:.5,sidebar_label:"React Native",sidebar_custom_props:{icon:"react"}},d="Getting started with THEOads on React Native",c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2},{value:"Player configuration",id:"player-configuration",level:3},{value:"More information",id:"more-information",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"getting-started-with-theoads-on-react-native",children:"Getting started with THEOads on React Native"})}),"\n",(0,a.jsx)(t.p,{children:"This guide will get you started with THEOads in your THEOplayer React Native SDK: configure the license, update dependencies and set the source description."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You need to have a THEOplayer license which is compatible with THEOads.\nThis can be done through ",(0,a.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You need a working ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-166/theoads/getting-started/getting-started-signaling-service",children:"THEOads signaling service"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Enable the THEOads integration based on the target platform:"}),"\n",(0,a.jsxs)(s.Z,{queryString:"platform",children:[(0,a.jsxs)(o.default,{value:"android",label:"Android & Android TV",children:[(0,a.jsx)(t.p,{children:"The Android SDK is modular-based, so to enable THEOads, simply include the extension by setting this flag in your gradle.properties:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-groovy",children:"# Enable THEOplayer Extensions (default: disabled)\nTHEOplayer_extensionTHEOads = true\n"})})]}),(0,a.jsx)(o.default,{value:"ios",label:"iOS & tvOS",children:(0,a.jsx)(t.p,{children:'To enable THEOads you can add the "THEOADS" feature flag to react-native-theoplayer.json (or theoplayer-config.json)'})}),(0,a.jsxs)(o.default,{value:"web",label:"Web",children:[(0,a.jsx)(t.p,{children:"Add a dependency to a THEOads-enabled THEOplayer package:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"$ npm i theoplayer@npm:@theoplayer/theoads\n"})}),(0,a.jsx)(t.p,{children:"In addition, since THEOads integrates with Google DAI Pod Serving, it is required to load the Google DAI script on your page:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<script src="https://imasdk.googleapis.com/js/sdkloader/ima3_dai.js"><\/script>\n'})})]})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"integration",children:"Integration"}),"\n",(0,a.jsxs)(t.p,{children:["This guide assumes you know how to set up React Native with THEOplayer.\nFor more information regarding this check out the ",(0,a.jsx)(t.a,{href:"/theoplayer/getting-started/frameworks/react-native/getting-started/",children:"THEOplayer getting started"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"player-configuration",children:"Player configuration"}),"\n",(0,a.jsx)(t.p,{children:"To make use of the THEOads integration, only a specific source needs to be set:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"player.source = {\n  sources: {\n    src: 'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI',\n    type: 'application/x-mpegurl',\n    hlsDateRange: true,\n  },\n  ads: [\n    {\n      integration: 'theoads',\n      networkCode: 'NETWORK-CODE',\n      customAssetKey: 'CUSTOM-ASSET-KEY',\n      backdropDoubleBox: 'PATH-TO-DOUBLE-BOX-BACKDROP-IMAGE', // Optional\n      backdropLShape: 'PATH-TO-L-SHAPE-BACKDROP-IMAGE', // Optional\n    },\n  ],\n};\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Notice that the ",(0,a.jsx)(t.code,{children:"src"})," is different as usual. For THEOads, a signaling server needs to be set up which acts as a proxy to parse the given manifest and insert the ad interstitials.\nMore information can be found ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-166/theoads/getting-started/getting-started-signaling-service",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"hlsDateRange"})," flag needs to be set to ",(0,a.jsx)(t.code,{children:"true"})," as the ad markers are done using ",(0,a.jsx)(t.code,{children:"EXT-X-DATERANGE"})," tags."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"ads"})," object needs to have its integration set to ",(0,a.jsx)(t.code,{children:"theoads"}),". Furthermore, the ",(0,a.jsx)(t.code,{children:"networkCode"})," and ",(0,a.jsx)(t.code,{children:"customAssetKey"})," needs to be set according to your configured Google account."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/",children:"What is THEOads?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/solutions/server-guided-ad-insertion-sgai/",children:"The Advantages of Server-Guided Ad Insertion"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/pricing/",children:"Flexible, Usage-Based Pricing"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/blog/server-guided-ad-insertion-sgai-revolutionizing-streaming-monetization/",children:"Is Server-Guided Ad-Insertion (SGAI) revolutionizing streaming monetization? (blog)"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5525:function(e,t,n){n.r(t),n.d(t,{default:()=>s});var r=n("85893");n("67294");var a=n("67026");let i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:n,children:t})}},20398:function(e,t,n){n.d(t,{Z:()=>g});var r=n("85893"),a=n("67294"),i=n("67026"),s=n("69599"),o=n("33057"),l=n("7227");let d="tabList__CuJ",c="tabItem_LNqP";function u(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:l}=e,d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),h=e=>{let t=e.currentTarget,n=l[d.indexOf(t)].value;n!==a&&(u(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{let n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:l.map(e=>{let{value:t,label:n,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...s,className:(0,i.Z)("tabs__item",c,s?.className,{"tabs__item--active":a===t}),children:n??t},t)})})}function h(e){let{lazy:t,children:n,selectedValue:s}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===s);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s}))})}function p(e){let t=(0,o.Y)(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",d),children:[(0,r.jsx)(u,{...t,...e}),(0,r.jsx)(h,{...t,...e})]})}function g(e){let t=(0,l.default)();return(0,r.jsx)(p,{...e,children:(0,o.h)(e.children)},String(t))}},33057:function(e,t,n){n.d(t,{Y:function(){return u},h:function(){return d}});var r=n(67294),a=n(16550),i=n(32e3),s=n(4520),o=n(38341),l=n(76009);function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function c(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}function u(e){let{defaultValue:t,queryString:n=!1,groupId:u}=e,h=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??d(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}});return!function(e){let t=(0,o.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[p,g]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:h})),[f,m]=function(e){let{queryString:t=!1,groupId:n}=e,i=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),l=(0,s._X)(o);return[l,(0,r.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})},[o,i])]}({queryString:n,groupId:u}),[v,x]=function(e){var t;let{groupId:n}=e;let a=(t=n)?`docusaurus.tab.${t}`:null,[i,s]=(0,l.Nk)(a);return[i,(0,r.useCallback)(e=>{if(!!a)s.set(e)},[a,s])]}({groupId:u}),b=(()=>{let e=f??v;return c({value:e,tabValues:h})?e:null})();return(0,i.Z)(()=>{b&&g(b)},[b]),{selectedValue:p,selectValue:(0,r.useCallback)(e=>{if(!c({value:e,tabValues:h}))throw Error(`Can't select invalid tab value=${e}`);g(e),m(e),x(e)},[m,x,h]),tabValues:h}}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var r=n(67294);let a={},i=r.createContext(a);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);