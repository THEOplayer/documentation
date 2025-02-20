"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["90479"],{61622:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>l});var r=JSON.parse('{"id":"getting-started/getting-started-android","title":"Getting started with THEOads on Android","description":"This guide will get you started to integrate THEOads in your THEOplayer Android SDK: configure the license, update dependencies and set the source description.","source":"@site/theoads/getting-started/00-getting-started-android.mdx","sourceDirName":"getting-started","slug":"/getting-started/getting-started-android","permalink":"/documentation/pr-preview/pr-217/theoads/getting-started/getting-started-android","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoads/getting-started/00-getting-started-android.mdx","tags":[],"version":"current","sidebarPosition":0.3,"frontMatter":{"sidebar_position":0.3,"sidebar_label":"Android","sidebar_custom_props":{"icon":"android"}},"sidebar":"theoads","previous":{"title":"Web","permalink":"/documentation/pr-preview/pr-217/theoads/getting-started/getting-started-web"},"next":{"title":"iOS","permalink":"/documentation/pr-preview/pr-217/theoads/getting-started/getting-started-ios"}}'),i=n("85893"),a=n("50065"),o=n("71509"),s=n("97645");let d={sidebar_position:.3,sidebar_label:"Android",sidebar_custom_props:{icon:"android"}},l="Getting started with THEOads on Android",c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2},{value:"Integrating with Open Video UI",id:"integrating-with-open-video-ui",level:2},{value:"More information",id:"more-information",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-theoads-on-android",children:"Getting started with THEOads on Android"})}),"\n",(0,i.jsx)(t.p,{children:"This guide will get you started to integrate THEOads in your THEOplayer Android SDK: configure the license, update dependencies and set the source description."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["You need to have a THEOplayer license which is compatible with THEOads.\nThis can be done through ",(0,i.jsx)(t.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You need a working ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-217/theoads/getting-started/getting-started-signaling-service",children:"THEOads signaling service"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Add the THEOplayer Android SDK to your project by following our ",(0,i.jsx)(t.a,{href:"/theoplayer/getting-started/sdks/android/getting-started",children:"Getting started"})," guide.\nMake sure to ",(0,i.jsx)(t.a,{href:"/theoplayer/getting-started/sdks/android/getting-started/#setting-up-the-license",children:"set up a THEOads-compatible license"}),"\nin your app."]}),"\n",(0,i.jsxs)(t.li,{children:["Add the THEOads integration as a dependency in your module-level ",(0,i.jsx)(t.code,{children:"build.gradle"})," file:","\n",(0,i.jsxs)(o.Z,{queryString:"lang",children:[(0,i.jsx)(s.default,{value:"groovy",label:"Groovy",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-groovy",children:'dependencies {\n    implementation "com.theoplayer.theoplayer-sdk-android:core:8.+"\n    // highlight-next-line\n    implementation "com.theoplayer.theoplayer-sdk-android:integration-ads-theoads:8.+"\n}\n'})})}),(0,i.jsx)(s.default,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'dependencies {\n    implementation("com.theoplayer.theoplayer-sdk-android:core:8.+")\n    // highlight-next-line\n    implementation("com.theoplayer.theoplayer-sdk-android:integration-theoads:8.+")\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"integration",children:"Integration"}),"\n",(0,i.jsxs)(t.p,{children:["To make use of the THEOads integration, create and add the ",(0,i.jsx)(t.code,{children:"TheoAdsIntegration"})," to your ",(0,i.jsx)(t.code,{children:"THEOplayerView"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"import com.theoplayer.android.api.THEOplayerView\nimport com.theoplayer.android.api.ads.theoads.TheoAdsIntegration\nimport com.theoplayer.android.api.ads.theoads.TheoAdsIntegrationFactory.createTheoAdsIntegration\n\nclass MyActivity : Activity() {\n    private lateinit var theoPlayerView: THEOplayerView\n    private lateinit var theoAdsIntegration: TheoAdsIntegration\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n\n        theoPlayerView = findViewById<THEOplayerView>(R.id.theoplayer)\n\n        theoAdsIntegration = createTheoAdsIntegration(theoPlayerView)\n        theoPlayerView.player.addIntegration(theoAdsIntegration)\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then, configure a source containing a ",(0,i.jsx)(t.code,{children:"TheoAdDescription"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'import com.theoplayer.android.api.ads.theoads.TheoAdDescription\nimport com.theoplayer.android.api.source.SourceDescription\nimport com.theoplayer.android.api.source.SourceType\nimport com.theoplayer.android.api.source.TypedSource\n\ntheoPlayerView.player.source = SourceDescription.Builder(\n    TypedSource.Builder("PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI")\n        .type(SourceType.HLS)\n        .hlsDateRange(true)\n        .build()\n).ads(\n    TheoAdDescription(\n        networkCode = "NETWORK-CODE",\n        customAssetKey = "CUSTOM-ASSET-KEY",\n        backdropDoubleBox = "PATH-TO-DOUBLE-BOX-BACKDROP-IMAGE", // Optional\n        backdropLShape = "PATH-TO-L-SHAPE-BACKDROP-IMAGE", // Optional\n    )\n).build()\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Notice that the ",(0,i.jsx)(t.code,{children:"src"})," is different as usual. For THEOads, a signaling server needs to be set up which acts as a proxy to parse the given manifest and insert the ad interstitials.\nMore information can be found ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-217/theoads/getting-started/getting-started-signaling-service",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"hlsDateRange"})," flag needs to be set to ",(0,i.jsx)(t.code,{children:"true"})," as the ad markers are done using ",(0,i.jsx)(t.code,{children:"EXT-X-DATERANGE"})," tags."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"ads"})," object needs to be a ",(0,i.jsx)(t.code,{children:"TheoAdDescription"}),". Furthermore, the ",(0,i.jsx)(t.code,{children:"networkCode"})," and ",(0,i.jsx)(t.code,{children:"customAssetKey"})," needs to be set according to your configured Google account."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"integrating-with-open-video-ui",children:"Integrating with Open Video UI"}),"\n",(0,i.jsxs)(t.p,{children:["When using the ",(0,i.jsx)(t.a,{href:"/open-video-ui/android/",children:"Open Video UI for Android"}),", you need to create and add\nthe ",(0,i.jsx)(t.code,{children:"TheoAdsIntegration"})," before creating your ",(0,i.jsx)(t.code,{children:"DefaultUI"})," or ",(0,i.jsx)(t.code,{children:"UIController"}),". You can then create a\nTHEOads-enabled source and set it as ",(0,i.jsx)(t.code,{children:"player.source"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'import androidx.activity.compose.setContent\nimport com.theoplayer.android.ui.rememberPlayer\n\nsetContent {\n    val player = rememberPlayer()\n    LaunchedEffect(player) {\n        player.theoplayerView?.let { theoPlayerView ->\n            val theoAdsIntegration = createTheoAdsIntegration(theoPlayerView)\n            theoPlayerView.player.addIntegration(theoAdsIntegration)\n        }\n\n        player.source = SourceDescription.Builder(\n            TypedSource.Builder("PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI")\n                .type(SourceType.HLS)\n                .hlsDateRange(true)\n                .build()\n        ).ads(\n            TheoAdDescription(\n                networkCode = "NETWORK-CODE",\n                customAssetKey = "CUSTOM-ASSET-KEY"\n            )\n        ).build()\n    }\n\n    DefaultUI(\n        player = player\n    )\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/theoads/package-summary.html",children:"API references"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/",children:"What is THEOads?"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/solutions/server-guided-ad-insertion-sgai/",children:"The Advantages of Server-Guided Ad Insertion"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/product/theoads/pricing/",children:"Flexible, Usage-Based Pricing"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/blog/server-guided-ad-insertion-sgai-revolutionizing-streaming-monetization/",children:"Is Server-Guided Ad-Insertion (SGAI) revolutionizing streaming monetization? (blog)"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},97645:function(e,t,n){n.r(t),n.d(t,{default:()=>a});var r=n("85893");n("67294");var i=n("67026");function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",a),hidden:n,children:t})}},71509:function(e,t,n){n.d(t,{Z:()=>h});var r=n("85893"),i=n("67294"),a=n("67026"),o=n("34718"),s=n("52371"),d=n("6735");function l(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:d}=e,l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{let t=e.currentTarget,n=d[l.indexOf(t)].value;n!==i&&(c(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{let n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:d.map(e=>{let{value:t,label:n,attributes:o}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>{l.push(e)},onKeyDown:h,onClick:u,...o,className:(0,a.Z)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":i===t}),children:n??t},t)})})}function c(e){let{lazy:t,children:n,selectedValue:o}=e,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=s.find(e=>e.props.value===o);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o}))})}function u(e){let t=(0,s.Y)(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(l,{...t,...e}),(0,r.jsx)(c,{...t,...e})]})}function h(e){let t=(0,d.default)();return(0,r.jsx)(u,{...e,children:(0,s.h)(e.children)},String(t))}},52371:function(e,t,n){n.d(t,{Y:function(){return u},h:function(){return l}});var r=n(67294),i=n(16550),a=n(8714),o=n(89207),s=n(69413),d=n(54510);function l(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function c(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}function u(e){let{defaultValue:t,queryString:n=!1,groupId:u}=e,h=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??l(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}});return!function(e){let t=(0,s.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[p,g]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:h})),[m,f]=function(e){let{queryString:t=!1,groupId:n}=e,a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)(e=>{if(!s)return;let t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})},[s,a])]}({queryString:n,groupId:u}),[y,x]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[i,a]=(0,d.Nk)(n);return[i,(0,r.useCallback)(e=>{n&&a.set(e)},[n,a])]}({groupId:u}),v=(()=>{let e=m??y;return c({value:e,tabValues:h})?e:null})();return(0,a.Z)(()=>{v&&g(v)},[v]),{selectedValue:p,selectValue:(0,r.useCallback)(e=>{if(!c({value:e,tabValues:h}))throw Error(`Can't select invalid tab value=${e}`);g(e),f(e),x(e)},[f,x,h]),tabValues:h}}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var r=n(67294);let i={},a=r.createContext(i);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);