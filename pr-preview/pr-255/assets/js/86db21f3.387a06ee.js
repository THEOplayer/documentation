"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["26631"],{89329:function(e,t,n){n.r(t),n.d(t,{default:()=>g,frontMatter:()=>c,metadata:()=>a,assets:()=>u,toc:()=>h,contentTitle:()=>d});var a=JSON.parse('{"id":"how-to-guides/ios/millicast/getting-started","title":"Getting started with Millicast for iOS","description":"Usage","source":"@site/theoplayer_versioned_docs/version-v8/how-to-guides/ios/millicast/getting-started.mdx","sourceDirName":"how-to-guides/ios/millicast","slug":"/how-to-guides/ios/millicast/getting-started","permalink":"/documentation/pr-preview/pr-255/theoplayer/v8/how-to-guides/ios/millicast/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/how-to-guides/ios/millicast/getting-started.mdx","tags":[],"version":"v8","frontMatter":{},"sidebar":"ios","previous":{"title":"Getting started with CMCD on iOS","permalink":"/documentation/pr-preview/pr-255/theoplayer/v8/how-to-guides/ios/cmcd/getting-started"},"next":{"title":"iOS & tvOS Connectors","permalink":"/documentation/pr-preview/pr-255/theoplayer/v8/connectors/ios/"}}'),r=n("85893"),i=n("50065"),l=n("93530"),o=n("71509"),s=n("97645");let c={},d="Getting started with Millicast for iOS",u={},h=[...l.d$,{value:"Usage",id:"usage",level:2},{value:"Add the <code>THEOplayer-Integration-Millicast</code> dependency",id:"add-the-theoplayer-integration-millicast-dependency",level:3},{value:"Add the Millicast integration to the player",id:"add-the-millicast-integration-to-the-player",level:3},{value:"Add a <code>MillicastSource</code>",id:"add-a-millicastsource",level:3},{value:"Add configuration",id:"add-configuration",level:3},{value:"Background playback",id:"background-playback",level:3},{value:"More information",id:"more-information",level:2}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started-with-millicast-for-ios",children:"Getting started with Millicast for iOS"})}),"\n","\n",(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Follow ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-255/theoplayer/v8/getting-started/sdks/ios/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your iOS app."]}),"\n",(0,r.jsxs)(t.li,{children:["Add the ",(0,r.jsx)(t.code,{children:"THEOplayer-Integration-Millicast"})," dependency to your project."]}),"\n",(0,r.jsxs)(t.li,{children:["Add the ",(0,r.jsx)(t.code,{children:"THEOplayerMillicastIntegration"})," to the player."]}),"\n",(0,r.jsxs)(t.li,{children:["Add a ",(0,r.jsx)(t.code,{children:"MillicastSource"})," to your player's source."]}),"\n"]}),"\n",(0,r.jsxs)(t.h3,{id:"add-the-theoplayer-integration-millicast-dependency",children:["Add the ",(0,r.jsx)(t.code,{children:"THEOplayer-Integration-Millicast"})," dependency"]}),"\n",(0,r.jsx)(t.p,{children:"Add the Millicast integration as a dependency in to your project:"}),"\n",(0,r.jsxs)(o.Z,{queryString:"lang",children:[(0,r.jsx)(s.default,{value:"spm",label:"Swift Package Manager",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'.package(url: "https://github.com/THEOplayer/theoplayer-sdk-apple.git", from: "8.10.0")\n.product(name: "THEOplayerMillicastIntegration", package: "theoplayer-sdk-apple")\n'})})}),(0,r.jsx)(s.default,{value:"cocoapods",label:"Cocoapods",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"pod 'THEOplayer-Integration-Millicast', '~> 8.10'\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"add-the-millicast-integration-to-the-player",children:"Add the Millicast integration to the player"}),"\n",(0,r.jsx)(t.p,{children:"First import the integration into your project:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"import THEOplayerMillicastIntegration\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Create and add the ",(0,r.jsx)(t.code,{children:"THEOplayerMillicastIntegration"})," to your ",(0,r.jsx)(t.code,{children:"THEOplayer"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"let millicastIntegration = MillicastIntegrationFactory.createIntegration()\ntheoplayer.addIntegration(millicastIntegration)\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"add-a-millicastsource",children:["Add a ",(0,r.jsx)(t.code,{children:"MillicastSource"})]}),"\n",(0,r.jsxs)(t.p,{children:["After setting up a ",(0,r.jsx)(t.code,{children:"THEOplayer"})," in your app, set its source to a ",(0,r.jsx)(t.code,{children:"SourceDescription"})," containing a ",(0,r.jsx)(t.code,{children:"MillicastSource"}),".\nYou'll need a Millicast account ID and stream name to identify your Millicast stream:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'let millicastSource = SourceDescription(source: MillicastSource(streamName: "multiview", accountID: "k9Mwad"))\ntheoplayer.source = millicastSource\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Make sure to replace the above ",(0,r.jsx)(t.code,{children:"streamName"})," and ",(0,r.jsx)(t.code,{children:"accountID"})," with your own. If your source is a secure stream, then you will\nalso need to add a subscriber token to the source as follows:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'MillicastSource(streamName: ..., accountID: ..., token: "Your token")\n'})}),"\n",(0,r.jsx)(t.h3,{id:"add-configuration",children:"Add configuration"}),"\n",(0,r.jsxs)(t.p,{children:["Optionally, you can provide additional configuration to the source, specific for working with Millicast streams.\nTo configure these settings, add a ",(0,r.jsx)(t.code,{children:"MCClientOptions"})," object as the ",(0,r.jsx)(t.code,{children:"connectOptions"})," parameter of the source object\nand specify the options."]}),"\n",(0,r.jsxs)(t.p,{children:["In the example below, the configuration is used to disable any audio from the Millicast stream.\nFor an exhaustive list of these options, visit the ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclientoptions",children:"documentation"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"let connectOptions: MCClientOptions = .init()\nconnectOptions.disableAudio = true\nMillicastSource(streamName: ..., accountID: ..., connectOptions: connectOptions)\n"})}),"\n",(0,r.jsx)(t.h3,{id:"background-playback",children:"Background playback"}),"\n",(0,r.jsxs)(t.p,{children:["In order to play Millicast sources in the background, ensure you've configured a ",(0,r.jsx)(t.code,{children:"backgroundPlaybackDelegate"})," on the player. A simple example for always allowing background playback is shown below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"class BackgroundDelegate: BackgroundPlaybackDelegate {\n    func shouldContinueAudioPlaybackInBackground() -> Bool {\n        return true\n    }\n}\ntheoplayer.backgroundPlaybackDelegate = BackgroundDelegate()\n"})}),"\n",(0,r.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Millicast/index.html",children:"API references"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.dolby.io/streaming-apis/docs/",children:"Millicast documentation"})}),"\n"]})]})}function g(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},93530:function(e,t,n){n.d(t,{ZP:function(){return o},d$:function(){return i}});var a=n(85893),r=n(50065);let i=[];function l(e){let t={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://dolby.io/products/real-time-streaming/",children:"Dolby Millicast"})," delivers broadcast quality live streaming\nat sub-second latency, enabling interactivity and fan engagement.\nUsing the THEOplayer Millicast integration, you can play your Millicast streams directly through THEOplayer."]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},97645:function(e,t,n){n.r(t),n.d(t,{default:()=>i});var a=n("85893");n("67294");var r=n("67026");function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",i),hidden:n,children:t})}},71509:function(e,t,n){n.d(t,{Z:()=>h});var a=n("85893"),r=n("67294"),i=n("67026"),l=n("34718"),o=n("52371"),s=n("6735");function c(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{let t=e.currentTarget,n=s[c.indexOf(t)].value;n!==r&&(d(t),o(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:s.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:u,...l,className:(0,i.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":r===t}),children:n??t},t)})})}function d(e){let{lazy:t,children:n,selectedValue:l}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function u(e){let t=(0,o.Y)(e);return(0,a.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(c,{...t,...e}),(0,a.jsx)(d,{...t,...e})]})}function h(e){let t=(0,s.default)();return(0,a.jsx)(u,{...e,children:(0,o.h)(e.children)},String(t))}},52371:function(e,t,n){n.d(t,{Y:function(){return u},h:function(){return c}});var a=n(67294),r=n(16550),i=n(8714),l=n(89207),o=n(69413),s=n(54510);function c(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function d(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}function u(e){let{defaultValue:t,queryString:n=!1,groupId:u}=e,h=function(e){let{values:t,children:n}=e;return(0,a.useMemo)(()=>{let e=t??c(n).map(e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}});return!function(e){let t=(0,o.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[p,g]=(0,a.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let a=n.find(e=>e.default)??n[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:t,tabValues:h})),[m,f]=function(e){let{queryString:t=!1,groupId:n}=e,i=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})},[o,i])]}({queryString:n,groupId:u}),[y,x]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,i]=(0,s.Nk)(n);return[r,(0,a.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:u}),j=(()=>{let e=m??y;return d({value:e,tabValues:h})?e:null})();return(0,i.Z)(()=>{j&&g(j)},[j]),{selectedValue:p,selectValue:(0,a.useCallback)(e=>{if(!d({value:e,tabValues:h}))throw Error(`Can't select invalid tab value=${e}`);g(e),f(e),x(e)},[f,x,h]),tabValues:h}}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var a=n(67294);let r={},i=a.createContext(r);function l(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);