"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["41922"],{53430:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>d,metadata:()=>a,assets:()=>c,toc:()=>u,contentTitle:()=>s});var a=JSON.parse('{"id":"how-to-guides/android/media3/getting-started","title":"Getting started with Media3 on Android","description":"The THEOplayer Android Media3 pipeline is a new integration for the THEOplayer Android SDK that serves as a new and rebuilt base layer for playback of video and audio files.","source":"@site/theoplayer/how-to-guides/android/media3/getting-started.mdx","sourceDirName":"how-to-guides/android/media3","slug":"/how-to-guides/android/media3/getting-started","permalink":"/documentation/pr-preview/pr-223/theoplayer/how-to-guides/android/media3/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/android/media3/getting-started.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"android","previous":{"title":"Getting started with CMCD on Android","permalink":"/documentation/pr-preview/pr-223/theoplayer/how-to-guides/android/cmcd/getting-started"},"next":{"title":"Getting started with Millicast on Android","permalink":"/documentation/pr-preview/pr-223/theoplayer/how-to-guides/android/millicast/getting-started"}}'),i=n("85893"),r=n("50065"),l=n("71509"),o=n("97645");let d={},s="Getting started with Media3 on Android",c={},u=[{value:"Usage",id:"usage",level:2},{value:"Add the Media3 integration dependency",id:"add-the-media3-integration-dependency",level:3},{value:"Add the Media3 integration to the player",id:"add-the-media3-integration-to-the-player",level:3},{value:"Known limitations",id:"known-limitations",level:2},{value:"FAQ",id:"faq",level:2},{value:"When should I use the Media3 integration?",id:"when-should-i-use-the-media3-integration",level:3},{value:"How does this integration affect the THEOplayer Android SDK?",id:"how-does-this-integration-affect-the-theoplayer-android-sdk",level:3},{value:"Does this integration use ExoPlayer?",id:"does-this-integration-use-exoplayer",level:3},{value:"Will this integration replace the current THEOplayer Android playback pipeline?",id:"will-this-integration-replace-the-current-theoplayer-android-playback-pipeline",level:3},{value:"More information",id:"more-information",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-media3-on-android",children:"Getting started with Media3 on Android"})}),"\n",(0,i.jsxs)(t.p,{children:["The THEOplayer Android Media3 pipeline is a new integration for the THEOplayer Android SDK that serves as a new and rebuilt base layer for playback of video and audio files.\nIt is based on ",(0,i.jsx)(t.a,{href:"https://developer.android.com/media/media3",children:"Jetpack Media3"})," components, and it provides more stable playback covering a broader range of use cases, all while being lighter in size and more performant.\nNote that the integration is still under active development, see ",(0,i.jsx)(t.a,{href:"#known-limitations",children:"the Known limitations section"})," for more information."]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Follow ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-223/theoplayer/getting-started/sdks/android/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your Android app."]}),"\n",(0,i.jsxs)(t.li,{children:["Add the Media3 integration as a dependency in your module-level ",(0,i.jsx)(t.code,{children:"build.gradle"})," file."]}),"\n",(0,i.jsx)(t.li,{children:"Add the Media3 integration to the player."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"add-the-media3-integration-dependency",children:"Add the Media3 integration dependency"}),"\n",(0,i.jsxs)(t.p,{children:["Add the Media3 integration as a dependency in your module-level ",(0,i.jsx)(t.code,{children:"build.gradle"})," file:"]}),"\n",(0,i.jsxs)(l.Z,{queryString:"lang",children:[(0,i.jsx)(o.default,{value:"groovy",label:"Groovy",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-groovy",children:'dependencies {\n    implementation "com.theoplayer.theoplayer-sdk-android:core:8.+"\n    // highlight-next-line\n    implementation "com.theoplayer.theoplayer-sdk-android:integration-media3:8.+"\n}\n'})})}),(0,i.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'dependencies {\n    implementation("com.theoplayer.theoplayer-sdk-android:core:8.+")\n    // highlight-next-line\n    implementation("com.theoplayer.theoplayer-sdk-android:integration-media3:8.+")\n}\n'})})})]}),"\n",(0,i.jsx)(t.h3,{id:"add-the-media3-integration-to-the-player",children:"Add the Media3 integration to the player"}),"\n",(0,i.jsxs)(t.p,{children:["To make use of the Media3 integration, create and add the ",(0,i.jsx)(t.code,{children:"Media3PlayerIntegration"})," to your ",(0,i.jsx)(t.code,{children:"THEOplayerView"}),":"]}),"\n",(0,i.jsxs)(l.Z,{queryString:"lang",children:[(0,i.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"val media3PlayerIntegration = Media3PlayerIntegrationFactory.createMedia3PlayerIntegration()\ntheoplayerView.player.addIntegration(media3PlayerIntegration)\n"})})}),(0,i.jsx)(o.default,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"Media3PlayerIntegration media3PlayerIntegration = Media3PlayerIntegrationFactory.createMedia3PlayerIntegration()\ntheoplayerView.getPlayer().addIntegration(media3PlayerIntegration)\n"})})})]}),"\n",(0,i.jsx)(t.p,{children:"Once the Media3PlayerIntegration is added to the player, all subsequent sources set on the player will use the Media3 pipeline."}),"\n",(0,i.jsxs)(l.Z,{queryString:"lang",children:[(0,i.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'val typedSource = TypedSource\n    .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n    .type(SourceType.DASH)\n    .build()\n\nval sourceDescription = SourceDescription\n    .Builder(typedSource)\n    .build()\n\ntheoPlayerView.player.source = sourceDescription\n'})})}),(0,i.jsx)(o.default,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'TypedSource typedSource = new TypedSource\n    .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n    .type(SourceType.DASH)\n    .build();\n\nSourceDescription sourceDescription = new SourceDescription\n    .Builder(typedSource)\n    .build();\n\ntheoPlayerView.getPlayer().setSource(sourceDescription);\n'})})})]}),"\n",(0,i.jsxs)(t.p,{children:["By default, the ",(0,i.jsx)(t.code,{children:"Media3PlayerIntegration"})," will play all types of sources except Millicast.\nTo modify the default behaviour, you can pass a custom ",(0,i.jsx)(t.code,{children:"Media3PlayerIntegration.SourceSelectCallback"})," implementation\nwhen constructing the integration."]}),"\n",(0,i.jsxs)(l.Z,{queryString:"lang",children:[(0,i.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"val media3PlayerIntegration = createMedia3PlayerIntegration(Media3PlayerIntegration.SourceSelectCallback { selectedSource, source ->\n    // selectedSource -> represents the TypedSource the player picked to play.\n    // source -> represents the SourceDescription passed to the player.\n    // return true -> the Media3 integration pipeline will be used to play the selected source.\n    // return false -> the default pipeline will be used to play the selected source.\n})\ntheoplayerView.player.addIntegration(media3PlayerIntegration)\n"})})}),(0,i.jsx)(o.default,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"Media3PlayerIntegration media3PlayerIntegration = Media3PlayerIntegrationFactory.createMedia3PlayerIntegration((selectedSource, source) -> {\n    // selectedSource -> represents the TypedSource the player picked to play.\n    // source -> represents the SourceDescription passed to the player.\n    // return true; -> the Media3 integration pipeline will be used to play the selected source.\n    // return false; -> the default pipeline will be used to play the selected source.\n});\ntheoplayerView.getPlayer().addIntegration(media3PlayerIntegration);\n"})})})]}),"\n",(0,i.jsx)(t.h2,{id:"known-limitations",children:"Known limitations"}),"\n",(0,i.jsx)(t.p,{children:"As this integration is still under development, there are currently some known limitations and features that are still under development and not yet supported:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The ABR, network, metrics and caching (offline playback) APIs are not yet implemented and return dummy values."}),"\n",(0,i.jsx)(t.li,{children:"The latency API is currently only supported for HESP/THEOlive streams."}),"\n",(0,i.jsxs)(t.li,{children:["Millicast playback is not yet supported, and must always be handled by the ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-223/theoplayer/how-to-guides/android/millicast/getting-started",children:"Millicast integration"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Certain player and source configuration parameters are not yet handled."}),"\n",(0,i.jsx)(t.li,{children:"Certain player events may not yet be dispatched correctly."}),"\n",(0,i.jsx)(t.li,{children:"There are some known issues with video track and quality switching."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(t.h3,{id:"when-should-i-use-the-media3-integration",children:"When should I use the Media3 integration?"}),"\n",(0,i.jsx)(t.p,{children:"The Media3 integration is being built to improve stability and performance. If you're targeting performance restricted devices and/or aiming to broaden your device coverage, and you have encountered playback issues on particular device segments, we recommend trying out the Media3 integration."}),"\n",(0,i.jsx)(t.h3,{id:"how-does-this-integration-affect-the-theoplayer-android-sdk",children:"How does this integration affect the THEOplayer Android SDK?"}),"\n",(0,i.jsxs)(t.p,{children:["This integration replaces the media playback base layer of the THEOplayer Android SDK, offering improvements in performance and stability for playback over our current implementation. As only core media playback is affected, all player APIs remain identical and other features and integrations (such as ads, analytics or Chromecast) are not affected and will function the same. See ",(0,i.jsx)(t.a,{href:"#known-limitations",children:"the Known limitations section"})," for more info on what features might currently be affected."]}),"\n",(0,i.jsx)(t.h3,{id:"does-this-integration-use-exoplayer",children:"Does this integration use ExoPlayer?"}),"\n",(0,i.jsx)(t.p,{children:"While we make use of ExoPlayer components, this is not a plain ExoPlayer implementation. In addition to the integrations, features and support already offered by the THEOplayer Android SDK, we've reused what makes sense to implement our own playback pipeline that offers improvements, bugfixes and additional functionality over ExoPlayer."}),"\n",(0,i.jsx)(t.h3,{id:"will-this-integration-replace-the-current-theoplayer-android-playback-pipeline",children:"Will this integration replace the current THEOplayer Android playback pipeline?"}),"\n",(0,i.jsx)(t.p,{children:"We are developing this integration to offer significant improvements over our current playback implementation on Android. While currently this is still under development, the goal is for this pipeline to become the default playback pipeline for the THEOplayer Android SDK in the future."}),"\n",(0,i.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/media3/package-summary.html",children:"API references"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},97645:function(e,t,n){n.r(t),n.d(t,{default:()=>r});var a=n("85893");n("67294");var i=n("67026");function r(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",r),hidden:n,children:t})}},71509:function(e,t,n){n.d(t,{Z:()=>h});var a=n("85893"),i=n("67294"),r=n("67026"),l=n("34718"),o=n("52371"),d=n("6735");function s(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:d}=e,s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{let t=e.currentTarget,n=d[s.indexOf(t)].value;n!==i&&(c(t),o(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{let n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1]}}t?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:d.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>{s.push(e)},onKeyDown:h,onClick:u,...l,className:(0,r.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":i===t}),children:n??t},t)})})}function c(e){let{lazy:t,children:n,selectedValue:l}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===l);return e?(0,i.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function u(e){let t=(0,o.Y)(e);return(0,a.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(s,{...t,...e}),(0,a.jsx)(c,{...t,...e})]})}function h(e){let t=(0,d.default)();return(0,a.jsx)(u,{...e,children:(0,o.h)(e.children)},String(t))}},52371:function(e,t,n){n.d(t,{Y:function(){return u},h:function(){return s}});var a=n(67294),i=n(16550),r=n(8714),l=n(89207),o=n(69413),d=n(54510);function s(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function c(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}function u(e){let{defaultValue:t,queryString:n=!1,groupId:u}=e,h=function(e){let{values:t,children:n}=e;return(0,a.useMemo)(()=>{let e=t??s(n).map(e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}});return!function(e){let t=(0,o.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[p,y]=(0,a.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let a=n.find(e=>e.default)??n[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:t,tabValues:h})),[m,g]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})},[o,r])]}({queryString:n,groupId:u}),[f,v]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[i,r]=(0,d.Nk)(n);return[i,(0,a.useCallback)(e=>{n&&r.set(e)},[n,r])]}({groupId:u}),x=(()=>{let e=m??f;return c({value:e,tabValues:h})?e:null})();return(0,r.Z)(()=>{x&&y(x)},[x]),{selectedValue:p,selectValue:(0,a.useCallback)(e=>{if(!c({value:e,tabValues:h}))throw Error(`Can't select invalid tab value=${e}`);y(e),g(e),v(e)},[g,v,h]),tabValues:h}}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var a=n(67294);let i={},r=a.createContext(i);function l(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);