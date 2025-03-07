"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["41922"],{53430:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>h,contentTitle:()=>s});var i=JSON.parse('{"id":"how-to-guides/android/media3/getting-started","title":"Getting started with Media3 on Android","description":"The THEOplayer Android Media3 pipeline is a new integration for the THEOplayer Android SDK that serves as a new and rebuilt base layer for playback of video and audio files.","source":"@site/theoplayer/how-to-guides/android/media3/getting-started.mdx","sourceDirName":"how-to-guides/android/media3","slug":"/how-to-guides/android/media3/getting-started","permalink":"/documentation/pr-preview/pr-232/theoplayer/how-to-guides/android/media3/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/android/media3/getting-started.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"android","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-232/theoplayer/how-to-guides/objective-C/introduction"},"next":{"title":"Getting started with Millicast on Android","permalink":"/documentation/pr-preview/pr-232/theoplayer/how-to-guides/android/millicast/getting-started"}}'),t=a("85893"),r=a("50065"),o=a("71509"),l=a("97645");let d={},s="Getting started with Media3 on Android",c={},h=[{value:"Usage",id:"usage",level:2},{value:"Add the Media3 integration dependency",id:"add-the-media3-integration-dependency",level:3},{value:"Add the Media3 integration to the player",id:"add-the-media3-integration-to-the-player",level:3},{value:"Caching and offline playback with Media3",id:"caching-and-offline-playback-with-media3",level:3},{value:"Known limitations",id:"known-limitations",level:2},{value:"FAQ",id:"faq",level:2},{value:"When should I use the Media3 integration?",id:"when-should-i-use-the-media3-integration",level:3},{value:"How does this integration affect the THEOplayer Android SDK?",id:"how-does-this-integration-affect-the-theoplayer-android-sdk",level:3},{value:"Does this integration use ExoPlayer?",id:"does-this-integration-use-exoplayer",level:3},{value:"Will this integration replace the current THEOplayer Android playback pipeline?",id:"will-this-integration-replace-the-current-theoplayer-android-playback-pipeline",level:3},{value:"More information",id:"more-information",level:2}];function u(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"getting-started-with-media3-on-android",children:"Getting started with Media3 on Android"})}),"\n",(0,t.jsxs)(n.p,{children:["The THEOplayer Android Media3 pipeline is a new integration for the THEOplayer Android SDK that serves as a new and rebuilt base layer for playback of video and audio files.\nIt is based on ",(0,t.jsx)(n.a,{href:"https://developer.android.com/media/media3",children:"Jetpack Media3"})," components, and it provides more stable playback covering a broader range of use cases, all while being lighter in size and more performant.\nNote that the integration is still under active development, see ",(0,t.jsx)(n.a,{href:"#known-limitations",children:"the Known limitations section"})," for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Follow ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/getting-started/sdks/android/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your Android app."]}),"\n",(0,t.jsxs)(n.li,{children:["Add the Media3 integration as a dependency in your module-level ",(0,t.jsx)(n.code,{children:"build.gradle"})," file."]}),"\n",(0,t.jsx)(n.li,{children:"Add the Media3 integration to the player."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"add-the-media3-integration-dependency",children:"Add the Media3 integration dependency"}),"\n",(0,t.jsxs)(n.p,{children:["Add the Media3 integration as a dependency in your module-level ",(0,t.jsx)(n.code,{children:"build.gradle"})," file:"]}),"\n",(0,t.jsxs)(o.Z,{queryString:"lang",children:[(0,t.jsx)(l.default,{value:"groovy",label:"Groovy",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:'dependencies {\n    implementation "com.theoplayer.theoplayer-sdk-android:core:8.+"\n    // highlight-next-line\n    implementation "com.theoplayer.theoplayer-sdk-android:integration-media3:8.+"\n}\n'})})}),(0,t.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'dependencies {\n    implementation("com.theoplayer.theoplayer-sdk-android:core:8.+")\n    // highlight-next-line\n    implementation("com.theoplayer.theoplayer-sdk-android:integration-media3:8.+")\n}\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"add-the-media3-integration-to-the-player",children:"Add the Media3 integration to the player"}),"\n",(0,t.jsxs)(n.p,{children:["To make use of the Media3 integration, create and add the ",(0,t.jsx)(n.code,{children:"Media3Integration"})," to your ",(0,t.jsx)(n.code,{children:"THEOplayerView"}),":"]}),"\n",(0,t.jsxs)(o.Z,{queryString:"lang",children:[(0,t.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val media3Integration = Media3IntegrationFactory.createMedia3Integration()\ntheoplayerView.player.addIntegration(media3Integration)\n"})})}),(0,t.jsx)(l.default,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Media3Integration media3Integration = Media3IntegrationFactory.createMedia3Integration();\ntheoplayerView.getPlayer().addIntegration(media3Integration);\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Once the Media3Integration is added to the player, all subsequent sources set on the player will use the Media3 pipeline."}),"\n",(0,t.jsxs)(o.Z,{queryString:"lang",children:[(0,t.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val typedSource = TypedSource\n    .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n    .type(SourceType.DASH)\n    .build()\n\nval sourceDescription = SourceDescription\n    .Builder(typedSource)\n    .build()\n\ntheoPlayerView.player.source = sourceDescription\n'})})}),(0,t.jsx)(l.default,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'TypedSource typedSource = new TypedSource\n    .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n    .type(SourceType.DASH)\n    .build();\n\nSourceDescription sourceDescription = new SourceDescription\n    .Builder(typedSource)\n    .build();\n\ntheoPlayerView.getPlayer().setSource(sourceDescription);\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the ",(0,t.jsx)(n.code,{children:"Media3Integration"})," will play all types of sources except Millicast.\nYou can opt in or opt out of this behavior by setting ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/TypedSource.Builder.html#playbackPipeline(com.theoplayer.android.api.source.PlaybackPipeline)",children:(0,t.jsx)(n.code,{children:"TypedSource.playbackPipeline"})}),"\nto either ",(0,t.jsx)(n.code,{children:"PlaybackPipeline.MEDIA3"})," (to ",(0,t.jsx)(n.em,{children:"always"})," use the Media3 integration)\nor ",(0,t.jsx)(n.code,{children:"PlaybackPipeline.LEGACY"})," (to ",(0,t.jsx)(n.em,{children:"never"})," use the Media3 integration)."]}),"\n",(0,t.jsxs)(o.Z,{queryString:"lang",children:[(0,t.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val typedSource = TypedSource\n    .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n    .type(SourceType.DASH)\n    // highlight-next-line\n    .playbackPipeline(PlaybackPipeline.MEDIA3)\n    .build()\n\nval sourceDescription = SourceDescription\n    .Builder(typedSource)\n    .build()\n\ntheoPlayerView.player.source = sourceDescription\n'})})}),(0,t.jsx)(l.default,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'TypedSource typedSource = new TypedSource\n    .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n    .type(SourceType.DASH)\n    // highlight-next-line\n    .playbackPipeline(PlaybackPipeline.MEDIA3)\n    .build();\n\nSourceDescription sourceDescription = new SourceDescription\n    .Builder(typedSource)\n    .build();\n\ntheoPlayerView.getPlayer().setSource(sourceDescription);\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"caching-and-offline-playback-with-media3",children:"Caching and offline playback with Media3"}),"\n",(0,t.jsx)(n.p,{children:"The Media3 integration supports playing all sources cached by the default pipeline.\nHowever, you can also choose to use the Media3 integration to cache sources,\nallowing it to more optimally read and write files from the cache."}),"\n",(0,t.jsxs)(n.p,{children:["To use Media3 for caching, create and add the ",(0,t.jsx)(n.code,{children:"Media3Integration"})," to the global ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/cache/Cache.html",children:(0,t.jsx)(n.code,{children:"Cache"})})," API:"]}),"\n",(0,t.jsxs)(o.Z,{queryString:"lang",children:[(0,t.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val cache = THEOplayerGlobal.getSharedInstance(context).cache\nval media3Integration = Media3IntegrationFactory.createMedia3Integration()\ncache.addIntegration(media3Integration)\n"})})}),(0,t.jsx)(l.default,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Cache cache = THEOplayerGlobal.getSharedInstance(context).getCache();\nMedia3Integration media3Integration = Media3IntegrationFactory.createMedia3Integration();\ncache.addIntegration(media3Integration);\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Media3Integration"})," object does not need to be the same instance that you use in ",(0,t.jsx)(n.code,{children:"player.addIntegration()"}),",\nit's okay to create a different one."]})}),"\n",(0,t.jsxs)(n.p,{children:["Then, set ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/cache/CachingParameters.Builder.html#storageType(com.theoplayer.android.api.cache.CacheStorageType)",children:(0,t.jsx)(n.code,{children:"CachingParameters.storageType"})})," to ",(0,t.jsx)(n.code,{children:"CacheStorageType.MEDIA3"})," when creating your caching task:"]}),"\n",(0,t.jsxs)(o.Z,{queryString:"lang",children:[(0,t.jsx)(l.default,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val cache = THEOplayerGlobal.getSharedInstance(context).cache\nval sourceDescription = SourceDescription.Builder(\n    TypedSource.Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n        .playbackPipeline(PlaybackPipeline.MEDIA3)\n        .build()\n    ).build()\nval cachingParameters = CachingParameters.Builder()\n    // highlight-next-line\n    .storageType(CacheStorageType.MEDIA3)\n    .build()\nval cachingTask = cache.createTask(sourceDescription, cachingParameters)\ncachingTask.start()\n'})})}),(0,t.jsx)(l.default,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Cache cache = THEOplayerGlobal.getSharedInstance(context).getCache();\nSourceDescription sourceDescription = SourceDescription.Builder(\n    TypedSource.Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n        .playbackPipeline(PlaybackPipeline.MEDIA3)\n        .build()\n    ).build();\nCachingParameters cachingParameters = CachingParameters.Builder()\n    // highlight-next-line\n    .storageType(CacheStorageType.MEDIA3)\n    .build();\nCachingTask cachingTask = cache.createTask(sourceDescription, cachingParameters);\ncachingTask.start();\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"known-limitations",children:"Known limitations"}),"\n",(0,t.jsx)(n.p,{children:"As this integration is still under development, there are currently some known limitations and features that are still under development and not yet supported:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The metrics API is not yet implemented and returns dummy values."}),"\n",(0,t.jsxs)(n.li,{children:["Millicast playback is not yet supported, and must always be handled by the ",(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-232/theoplayer/how-to-guides/android/millicast/getting-started",children:"Millicast integration"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Certain player and source configuration parameters are not yet handled."}),"\n",(0,t.jsx)(n.li,{children:"Certain player events may not yet be dispatched correctly."}),"\n",(0,t.jsx)(n.li,{children:"There are some known issues with video track and quality switching."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(n.h3,{id:"when-should-i-use-the-media3-integration",children:"When should I use the Media3 integration?"}),"\n",(0,t.jsx)(n.p,{children:"The Media3 integration is being built to improve stability and performance. If you're targeting performance restricted devices and/or aiming to broaden your device coverage, and you have encountered playback issues on particular device segments, we recommend trying out the Media3 integration."}),"\n",(0,t.jsx)(n.h3,{id:"how-does-this-integration-affect-the-theoplayer-android-sdk",children:"How does this integration affect the THEOplayer Android SDK?"}),"\n",(0,t.jsxs)(n.p,{children:["This integration replaces the media playback base layer of the THEOplayer Android SDK, offering improvements in performance and stability for playback over our current implementation. As only core media playback is affected, all player APIs remain identical and other features and integrations (such as ads, analytics or Chromecast) are not affected and will function the same. See ",(0,t.jsx)(n.a,{href:"#known-limitations",children:"the Known limitations section"})," for more info on what features might currently be affected."]}),"\n",(0,t.jsx)(n.h3,{id:"does-this-integration-use-exoplayer",children:"Does this integration use ExoPlayer?"}),"\n",(0,t.jsx)(n.p,{children:"While we make use of ExoPlayer components, this is not a plain ExoPlayer implementation. In addition to the integrations, features and support already offered by the THEOplayer Android SDK, we've reused what makes sense to implement our own playback pipeline that offers improvements, bugfixes and additional functionality over ExoPlayer."}),"\n",(0,t.jsx)(n.h3,{id:"will-this-integration-replace-the-current-theoplayer-android-playback-pipeline",children:"Will this integration replace the current THEOplayer Android playback pipeline?"}),"\n",(0,t.jsx)(n.p,{children:"We are developing this integration to offer significant improvements over our current playback implementation on Android. While currently this is still under development, the goal is for this pipeline to become the default playback pipeline for the THEOplayer Android SDK starting with version 9.0.0."}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More information"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/media3/package-summary.html",children:"API references"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},97645:function(e,n,a){a.r(n),a.d(n,{default:()=>r});var i=a("85893");a("67294");var t=a("67026");function r(e){let{children:n,hidden:a,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_Ymn6",r),hidden:a,children:n})}},71509:function(e,n,a){a.d(n,{Z:()=>u});var i=a("85893"),t=a("67294"),r=a("67026"),o=a("34718"),l=a("52371"),d=a("6735");function s(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:d}=e,s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),h=e=>{let n=e.currentTarget,a=d[s.indexOf(n)].value;a!==t&&(c(n),l(a))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let a=s.indexOf(e.currentTarget)+1;n=s[a]??s[0];break}case"ArrowLeft":{let a=s.indexOf(e.currentTarget)-1;n=s[a]??s[s.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:d.map(e=>{let{value:n,label:a,attributes:o}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{s.push(e)},onKeyDown:u,onClick:h,...o,className:(0,r.Z)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":t===n}),children:a??n},n)})})}function c(e){let{lazy:n,children:a,selectedValue:o}=e,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===o);return e?(0,t.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o}))})}function h(e){let n=(0,l.Y)(e);return(0,i.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList__CuJ"),children:[(0,i.jsx)(s,{...n,...e}),(0,i.jsx)(c,{...n,...e})]})}function u(e){let n=(0,d.default)();return(0,i.jsx)(h,{...e,children:(0,l.h)(e.children)},String(n))}},52371:function(e,n,a){a.d(n,{Y:function(){return h},h:function(){return s}});var i=a(67294),t=a(16550),r=a(8714),o=a(89207),l=a(69413),d=a(54510);function s(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function c(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}function h(e){let{defaultValue:n,queryString:a=!1,groupId:h}=e,u=function(e){let{values:n,children:a}=e;return(0,i.useMemo)(()=>{let e=n??s(a).map(e=>{let{props:{value:n,label:a,attributes:i,default:t}}=e;return{value:n,label:a,attributes:i,default:t}});return!function(e){let n=(0,l.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[p,g]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=a.find(e=>e.default)??a[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:u})),[m,y]=function(e){let{queryString:n=!1,groupId:a}=e,r=(0,t.k6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(l),(0,i.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})},[l,r])]}({queryString:a,groupId:h}),[f,b]=function(e){let{groupId:n}=e,a=n?`docusaurus.tab.${n}`:null,[t,r]=(0,d.Nk)(a);return[t,(0,i.useCallback)(e=>{a&&r.set(e)},[a,r])]}({groupId:h}),v=(()=>{let e=m??f;return c({value:e,tabValues:u})?e:null})();return(0,r.Z)(()=>{v&&g(v)},[v]),{selectedValue:p,selectValue:(0,i.useCallback)(e=>{if(!c({value:e,tabValues:u}))throw Error(`Can't select invalid tab value=${e}`);g(e),y(e),b(e)},[y,b,u]),tabValues:u}}},50065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return o}});var i=a(67294);let t={},r=i.createContext(t);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);