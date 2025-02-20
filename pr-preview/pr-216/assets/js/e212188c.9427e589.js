"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["90532"],{41879:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>u});var r=JSON.parse('{"id":"android/getting-started","title":"Getting started","description":"Start building your UI in just a few minutes!","source":"@site/open-video-ui/android/getting-started.mdx","sourceDirName":"android","slug":"/android/getting-started","permalink":"/documentation/pr-preview/pr-216/open-video-ui/android/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/open-video-ui/android/getting-started.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"Start building your UI in just a few minutes!","sidebar_position":1,"sidebar_custom_props":{"icon":"\uD83D\uDE80"}},"sidebar":"android","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-216/open-video-ui/android/"},"next":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-216/open-video-ui/android/guides"}}'),o=t("85893"),i=t("50065"),a=t("71509"),l=t("97645");let s={description:"Start building your UI in just a few minutes!",sidebar_position:1,sidebar_custom_props:{icon:"\uD83D\uDE80"}},u="Getting started",d={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Default UI",id:"default-ui",level:3},{value:"Custom UI",id:"custom-ui",level:3}];function p(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"getting-started",children:"Getting started"})}),"\n","\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a new Jetpack Compose app or set up Compose in your existing Android app by following ",(0,o.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose/setup",children:"the Compose quick start guide"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Add the native THEOplayer Android SDK to your project by following ",(0,o.jsx)(n.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-android#installation",children:"these installation instructions"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Add the THEOplayer Maven repository to your project-level ",(0,o.jsx)(n.code,{children:"settings.gradle"})," file:","\n",(0,o.jsxs)(a.Z,{queryString:"lang",children:[(0,o.jsx)(l.default,{value:"groovy",label:"Groovy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url "https://maven.theoplayer.com/releases" }\n    }\n}\n'})})}),(0,o.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'dependencyResolutionManagement {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url = uri("https://maven.theoplayer.com/releases") }\n    }\n}\n'})})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Add Open Video UI as a dependency in your module-level ",(0,o.jsx)(n.code,{children:"build.gradle"})," file:","\n",(0,o.jsxs)(a.Z,{queryString:"lang",children:[(0,o.jsx)(l.default,{value:"groovy",label:"Groovy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",children:'dependencies {\n    implementation "com.theoplayer.theoplayer-sdk-android:core:5.+"\n    implementation "com.theoplayer.android-ui:android-ui:1.+"\n}\n'})})}),(0,o.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'dependencies {\n    implementation("com.theoplayer.theoplayer-sdk-android:core:5.+")\n    implementation("com.theoplayer.android-ui:android-ui:1.+")\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h3,{id:"default-ui",children:"Default UI"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"DefaultUI"})," provides a fully-featured video player experience with minimal setup."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'import android.os.Bundle\nimport androidx.activity.ComponentActivity\nimport androidx.activity.compose.setContent\nimport com.theoplayer.android.api.THEOplayerConfig\nimport com.theoplayer.android.api.source.SourceDescription\nimport com.theoplayer.android.ui.DefaultUI\nimport com.theoplayer.android.ui.theme.THEOplayerTheme\n\nclass MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n\n        setContent {\n            THEOplayerTheme(useDarkTheme = true) {\n                DefaultUI(\n                    config = THEOplayerConfig.Builder().build(),\n                    source = SourceDescription.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8")\n                        .build(),\n                    title = "Big Buck Bunny"\n                )\n            }\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://github.com/THEOplayer/android-ui/blob/main/app/src/main/java/com/theoplayer/android/ui/demo/MainActivity.kt",children:"the demo app"})," for a complete and working example."]}),"\n",(0,o.jsx)(n.h3,{id:"custom-ui",children:"Custom UI"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to fully customize your video player layout, you can use a ",(0,o.jsx)(n.code,{children:"UIController"})," instead."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'setContent {\n    UIController(\n        config = THEOplayerConfig.Builder().build(),\n        source = SourceDescription.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8")\n            .build(),\n        // Choose your own layout using the provided components (or your own!)\n        bottomChrome = {\n            SeekBar()\n            Row {\n                PlayButton()\n                MuteButton()\n                Spacer(modifier = Modifier.weight(1f))\n                FullscreenButton()\n            }\n        }\n    )\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},97645:function(e,n,t){t.r(n),t.d(n,{default:()=>i});var r=t("85893");t("67294");var o=t("67026");function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)("tabItem_Ymn6",i),hidden:t,children:n})}},71509:function(e,n,t){t.d(n,{Z:()=>p});var r=t("85893"),o=t("67294"),i=t("67026"),a=t("34718"),l=t("52371"),s=t("6735");function u(e){let{className:n,block:t,selectedValue:o,selectValue:l,tabValues:s}=e,u=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=e=>{let n=e.currentTarget,t=s[u.indexOf(n)].value;t!==o&&(d(n),l(t))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:s.map(e=>{let{value:n,label:t,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{u.push(e)},onKeyDown:p,onClick:c,...a,className:(0,i.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":o===n}),children:t??n},n)})})}function d(e){let{lazy:n,children:t,selectedValue:a}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===a);return e?(0,o.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function c(e){let n=(0,l.Y)(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(u,{...n,...e}),(0,r.jsx)(d,{...n,...e})]})}function p(e){let n=(0,s.default)();return(0,r.jsx)(c,{...e,children:(0,l.h)(e.children)},String(n))}},52371:function(e,n,t){t.d(n,{Y:function(){return c},h:function(){return u}});var r=t(67294),o=t(16550),i=t(8714),a=t(89207),l=t(69413),s=t(54510);function u(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function d(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}function c(e){let{defaultValue:n,queryString:t=!1,groupId:c}=e,p=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}});return!function(e){let n=(0,l.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[h,m]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:p})),[f,v]=function(e){let{queryString:n=!1,groupId:t}=e,i=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(l),(0,r.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})},[l,i])]}({queryString:t,groupId:c}),[g,y]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[o,i]=(0,s.Nk)(t);return[o,(0,r.useCallback)(e=>{t&&i.set(e)},[t,i])]}({groupId:c}),b=(()=>{let e=f??g;return d({value:e,tabValues:p})?e:null})();return(0,i.Z)(()=>{b&&m(b)},[b]),{selectedValue:h,selectValue:(0,r.useCallback)(e=>{if(!d({value:e,tabValues:p}))throw Error(`Can't select invalid tab value=${e}`);m(e),v(e),y(e)},[v,y,p]),tabValues:p}}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var r=t(67294);let o={},i=r.createContext(o);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);