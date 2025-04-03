"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["49294"],{78738:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>d});var r=JSON.parse('{"id":"getting-started/getting-started-ios","title":"Getting started with THEOads on iOS","description":"This guide will get you started to integrate THEOads in your THEOplayer iOS SDK: configure the license, update dependencies and set the source description.","source":"@site/theoads/getting-started/00-getting-started-ios.mdx","sourceDirName":"getting-started","slug":"/getting-started/getting-started-ios","permalink":"/documentation/pr-preview/pr-251/theoads/getting-started/getting-started-ios","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoads/getting-started/00-getting-started-ios.mdx","tags":[],"version":"current","sidebarPosition":0.3,"frontMatter":{"sidebar_position":0.3,"sidebar_label":"iOS","sidebar_custom_props":{"icon":"apple"}},"sidebar":"theoads","previous":{"title":"Android","permalink":"/documentation/pr-preview/pr-251/theoads/getting-started/getting-started-android"},"next":{"title":"React Native","permalink":"/documentation/pr-preview/pr-251/theoads/getting-started/getting-started-react-native"}}'),i=n("85893"),s=n("50065"),a=n("71509"),o=n("97645");let l={sidebar_position:.3,sidebar_label:"iOS",sidebar_custom_props:{icon:"apple"}},d="Getting started with THEOads on iOS",c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2},{value:"More information",id:"more-information",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-theoads-on-ios",children:"Getting started with THEOads on iOS"})}),"\n",(0,i.jsx)(t.p,{children:"This guide will get you started to integrate THEOads in your THEOplayer iOS SDK: configure the license, update dependencies and set the source description."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["You need to have a THEOplayer license which is compatible with THEOads.\nThis can be done through ",(0,i.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["You need a working ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-251/theoads/getting-started/getting-started-signaling-service",children:"THEOads signaling service"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add the THEOplayer iOS SDK to your project by following our ",(0,i.jsx)(t.a,{href:"/theoplayer/getting-started/sdks/ios/getting-started",children:"Getting started"})," guide.\nMake sure to ",(0,i.jsx)(t.a,{href:"/theoplayer/getting-started/sdks/ios/getting-started/#theoplayer-license",children:"set up a THEOads-compatible license"}),"\nin your app."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Add the THEOads integration as a dependency to your project:"}),"\n",(0,i.jsxs)(a.Z,{queryString:"lang",children:[(0,i.jsxs)(o.default,{value:"cocoapods",label:"CocoaPods",children:[(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Add the ",(0,i.jsx)(t.code,{children:"THEOplayer-Integration-THEOads"})," pod to your Podfile:"]}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"pod 'THEOplayer-Integration-THEOads', '~> 8.10.0'\n"})}),(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Install the new pod:"}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"pod install\n"})})]}),(0,i.jsxs)(o.default,{value:"swiftpm",label:"SwiftPM",children:[(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open your Xcode project and navigate to File > Add Package Dependencies..."}),"\n"]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of Xcode file menu",src:n(48772).Z+"",width:"357",height:"694"})}),(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Add ",(0,i.jsx)(t.code,{children:"theoplayer-sdk-apple"})," package by entering the following url:"]}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"https://github.com/THEOplayer/theoplayer-sdk-apple\n"})}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of SwiftPM menu",src:n(23643).Z+"",width:"2032",height:"1167"})}),(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.code,{children:"THEOplayerTHEOadsIntegration"})," from the package products list and add it to your target."]}),"\n"]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of SwiftPM  product selection",src:n(4486).Z+"",width:"2032",height:"1167"})})]})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Add Google IMA SDK as a dependency to your project:"}),"\n",(0,i.jsxs)(a.Z,{queryString:"lang",children:[(0,i.jsx)(o.default,{value:"cocoapods",label:"CocoaPods",children:(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"THEOplayer-Integration-THEOads"})," pod has a dependency on ",(0,i.jsx)(t.code,{children:"GoogleAds-IMA-iOS-SDK"})," which should be installed automatically."]}),"\n"]})}),(0,i.jsxs)(o.default,{value:"swiftpm",label:"SwiftPM",children:[(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open your Xcode project and navigate to File > Add Package Dependencies..."}),"\n"]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of Xcode file menu",src:n(48772).Z+"",width:"357",height:"694"})}),(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Add ",(0,i.jsx)(t.code,{children:"swift-package-manager-google-interactive-media-ads-ios"})," package by entering the following url:"]}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"https://github.com/googleads/swift-package-manager-google-interactive-media-ads-ios\n"})}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of SwiftPM menu",src:n(85791).Z+"",width:"2032",height:"1167"})}),(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.code,{children:"GoogleInteractiveMediaAds"})," from the package products list and add it to your target."]}),"\n"]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of SwiftPM  product selection",src:n(25190).Z+"",width:"2032",height:"1167"})})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"integration",children:"Integration"}),"\n",(0,i.jsxs)(t.p,{children:["To make use of the THEOads integration, create and add the ",(0,i.jsx)(t.code,{children:"THEOadsIntegration"})," to your ",(0,i.jsx)(t.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"import UIKit\nimport THEOplayerSDK\nimport THEOplayerTHEOadsIntegration\n\nclass ViewController: UIViewController {\n    var theoplayer: THEOplayer!\n    var theoads: THEOadsIntegration!\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        self.theoplayer = THEOplayer(configuration: THEOplayerConfigurationBuilder().build())\n        self.theoplayer.frame = view.bounds\n        self.theoplayer.addAsSubview(of: view)\n        self.theoads = THEOadsIntegrationFactory.createIntegration(on: self.theoplayer)\n        self.theoplayer.addIntegration(self.theoads)\n    }\n\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then, configure a source containing a ",(0,i.jsx)(t.code,{children:"THEOAdDescription"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:'import UIKit\nimport THEOplayerSDK\nimport THEOplayerTHEOadsIntegration\n\nclass ViewController: UIViewController {\n    var theoplayer: THEOplayer!\n    var theoads: THEOadsIntegration!\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        self.theoplayer = THEOplayer(configuration: THEOplayerConfigurationBuilder().build())\n        self.theoplayer.frame = view.bounds\n        self.theoplayer.addAsSubview(of: view)\n        self.theoads = THEOadsIntegrationFactory.createIntegration(on: self.theoplayer)\n        self.theoplayer.addIntegration(self.theoads)\n\n        let source = "PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI"\n        let typedSource = TypedSource(\n            src: source,\n            type: "application/x-mpegurl",\n            hlsDateRange: true\n        )\n        let theoad = THEOAdDescription(\n            networkCode: "NETWORK-CODE",\n            customAssetKey: "CUSTOM-ASSET-KEY"\n        )\n        let sourceDescription = SourceDescription(source: typedSource, ads: [theoad])\n        self.theoplayer.source = sourceDescription\n        self.theoplayer.play()\n    }\n\n}\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Notice that the ",(0,i.jsx)(t.code,{children:"src"})," is different as usual. For THEOads, a signaling server needs to be set up which acts as a proxy to parse the given manifest and insert the ad interstitials.\nMore information can be found ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-251/theoads/getting-started/getting-started-signaling-service",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"hlsDateRange"})," flag needs to be set to ",(0,i.jsx)(t.code,{children:"true"})," as the ad markers are done using ",(0,i.jsx)(t.code,{children:"EXT-X-DATERANGE"})," tags."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"ads"})," array needs to contain a ",(0,i.jsx)(t.code,{children:"THEOAdDescription"}),". Furthermore, the ",(0,i.jsx)(t.code,{children:"networkCode"})," and ",(0,i.jsx)(t.code,{children:"customAssetKey"})," needs to be set according to your configured Google account."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/",children:"What is THEOads?"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/solutions/server-guided-ad-insertion-sgai/",children:"The Advantages of Server-Guided Ad Insertion"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/pricing/",children:"Flexible, Usage-Based Pricing"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/blog/server-guided-ad-insertion-sgai-revolutionizing-streaming-monetization/",children:"Is Server-Guided Ad-Insertion (SGAI) revolutionizing streaming monetization? (blog)"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},85791:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/theoads-ios-swiftpm-menu-google-21b537bc3bafd83d9d644d078ce46b17.png"},23643:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/theoads-ios-swiftpm-menu-c207b6501f931613f819a1772ab95e56.png"},25190:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/theoads-ios-swiftpm-product-selection-google-2fac68582649398baf8e7bdd86c51893.png"},4486:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/theoads-ios-swiftpm-product-selection-e36076bec4468c2ff11c0fc2c8a629c8.png"},48772:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/theoads-ios-xcode-file-menu-e8f297910dd358c7a8ef64f4d7130c5b.png"},97645:function(e,t,n){n.r(t),n.d(t,{default:()=>s});var r=n("85893");n("67294");var i=n("67026");function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",s),hidden:n,children:t})}},71509:function(e,t,n){n.d(t,{Z:()=>h});var r=n("85893"),i=n("67294"),s=n("67026"),a=n("34718"),o=n("52371"),l=n("6735");function d(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:l}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{let t=e.currentTarget,n=l[d.indexOf(t)].value;n!==i&&(c(t),o(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{let n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map(e=>{let{value:t,label:n,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>{d.push(e)},onKeyDown:h,onClick:u,...a,className:(0,s.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":i===t}),children:n??t},t)})})}function c(e){let{lazy:t,children:n,selectedValue:a}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===a);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function u(e){let t=(0,o.Y)(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(d,{...t,...e}),(0,r.jsx)(c,{...t,...e})]})}function h(e){let t=(0,l.default)();return(0,r.jsx)(u,{...e,children:(0,o.h)(e.children)},String(t))}},52371:function(e,t,n){n.d(t,{Y:function(){return u},h:function(){return d}});var r=n(67294),i=n(16550),s=n(8714),a=n(89207),o=n(69413),l=n(54510);function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function c(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}function u(e){let{defaultValue:t,queryString:n=!1,groupId:u}=e,h=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??d(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}});return!function(e){let t=(0,o.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[p,g]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:h})),[f,m]=function(e){let{queryString:t=!1,groupId:n}=e,s=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(o),(0,r.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})},[o,s])]}({queryString:n,groupId:u}),[x,j]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[i,s]=(0,l.Nk)(n);return[i,(0,r.useCallback)(e=>{n&&s.set(e)},[n,s])]}({groupId:u}),y=(()=>{let e=f??x;return c({value:e,tabValues:h})?e:null})();return(0,s.Z)(()=>{y&&g(y)},[y]),{selectedValue:p,selectValue:(0,r.useCallback)(e=>{if(!c({value:e,tabValues:h}))throw Error(`Can't select invalid tab value=${e}`);g(e),m(e),j(e)},[m,j,h]),tabValues:h}}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(67294);let i={},s=r.createContext(i);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);