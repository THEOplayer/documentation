"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["41922"],{53430:function(e,a,n){n.r(a),n.d(a,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>u,contentTitle:()=>d});var i=JSON.parse('{"id":"how-to-guides/android/media3/getting-started","title":"Media3 pipeline for Android","description":"The THEOplayer Android Media3 pipeline is a new and rebuilt base layer for playback of video and audio files for the THEOplayer Android SDK.","source":"@site/theoplayer/how-to-guides/android/media3/getting-started.mdx","sourceDirName":"how-to-guides/android/media3","slug":"/how-to-guides/android/media3/getting-started","permalink":"/documentation/pr-preview/pr-247/theoplayer/how-to-guides/android/media3/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/android/media3/getting-started.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"android","previous":{"title":"Getting started with CMCD on Android","permalink":"/documentation/pr-preview/pr-247/theoplayer/how-to-guides/android/cmcd/getting-started"},"next":{"title":"Getting started with Millicast on Android","permalink":"/documentation/pr-preview/pr-247/theoplayer/how-to-guides/android/millicast/getting-started"}}'),r=n("85893"),t=n("50065"),l=n("71509"),o=n("97645");let s={},d="Media3 pipeline for Android",c={},u=[{value:"Usage",id:"usage",level:2},{value:"Playback using Media3",id:"playback-using-media3",level:3},{value:"Caching and offline playback with Media3",id:"caching-and-offline-playback-with-media3",level:3},{value:"Known limitations",id:"known-limitations",level:2},{value:"FAQ",id:"faq",level:2},{value:"How does Media3 affect the THEOplayer Android SDK?",id:"how-does-media3-affect-the-theoplayer-android-sdk",level:3},{value:"Does this use ExoPlayer?",id:"does-this-use-exoplayer",level:3}];function p(e){let a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"media3-pipeline-for-android",children:"Media3 pipeline for Android"})}),"\n",(0,r.jsxs)(a.p,{children:["The THEOplayer Android Media3 pipeline is a new and rebuilt base layer for playback of video and audio files for the THEOplayer Android SDK.\nIt is based on ",(0,r.jsx)(a.a,{href:"https://developer.android.com/media/media3",children:"Jetpack Media3"})," components, and it provides more stable playback covering a broader range of use cases, all while being lighter in size and more performant."]}),"\n",(0,r.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(a.p,{children:["The Media3 pipeline is part of the THEOplayer Android SDK.\nFollow ",(0,r.jsx)(a.a,{href:"/documentation/pr-preview/pr-247/theoplayer/getting-started/sdks/android/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your Android app."]}),"\n",(0,r.jsxs)(a.admonition,{type:"info",children:[(0,r.jsx)(a.p,{children:"In THEOplayer version 8.x, the Media3 pipeline was available as a separate integration package.\nStarting with version 9.0, this pipeline is now part of the THEOplayer Android SDK itself."}),(0,r.jsxs)(a.p,{children:["See ",(0,r.jsx)(a.a,{href:"/documentation/pr-preview/pr-247/theoplayer/getting-started/sdks/android/migrating-to-theoplayer-9",children:"our migration guide"}),"\nfor instructions on how to migrate from the Media3 integration package to the built-in version."]})]}),"\n",(0,r.jsx)(a.h3,{id:"playback-using-media3",children:"Playback using Media3"}),"\n",(0,r.jsx)(a.p,{children:"By default, THEOplayer will play all types of sources (except Millicast) using the Media3 playback pipeline."}),"\n",(0,r.jsxs)(a.p,{children:["You can opt in or opt out of this behavior by setting ",(0,r.jsx)(a.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/TypedSource.Builder.html#playbackPipeline(com.theoplayer.android.api.source.PlaybackPipeline)",children:(0,r.jsx)(a.code,{children:"TypedSource.playbackPipeline"})}),"\nto either ",(0,r.jsx)(a.code,{children:"PlaybackPipeline.MEDIA3"})," (to ",(0,r.jsx)(a.em,{children:"always"})," use Media3 playback)\nor ",(0,r.jsx)(a.code,{children:"PlaybackPipeline.LEGACY"})," (to ",(0,r.jsx)(a.em,{children:"never"})," use Media3 playback)."]}),"\n",(0,r.jsxs)(l.Z,{queryString:"lang",children:[(0,r.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-kotlin",children:'val typedSource = TypedSource\n    .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n    .type(SourceType.DASH)\n    // highlight-next-line\n    .playbackPipeline(PlaybackPipeline.MEDIA3)\n    .build()\n\nval sourceDescription = SourceDescription\n    .Builder(typedSource)\n    .build()\n\ntheoPlayerView.player.source = sourceDescription\n'})})}),(0,r.jsx)(o.default,{value:"java",label:"Java",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:'TypedSource typedSource = new TypedSource\n    .Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n    .type(SourceType.DASH)\n    // highlight-next-line\n    .playbackPipeline(PlaybackPipeline.MEDIA3)\n    .build();\n\nSourceDescription sourceDescription = new SourceDescription\n    .Builder(typedSource)\n    .build();\n\ntheoPlayerView.getPlayer().setSource(sourceDescription);\n'})})})]}),"\n",(0,r.jsx)(a.h3,{id:"caching-and-offline-playback-with-media3",children:"Caching and offline playback with Media3"}),"\n",(0,r.jsx)(a.p,{children:"By default, THEOplayer will cache sources using the Media3 storage backend.\nSources cached with this backend can only be played using the Media3 playback pipeline."}),"\n",(0,r.jsxs)(a.p,{children:["You can opt in or opt out of this behavior by setting ",(0,r.jsx)(a.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/cache/CachingParameters.Builder.html#storageType(com.theoplayer.android.api.cache.CacheStorageType)",children:(0,r.jsx)(a.code,{children:"CachingParameters.storageType"})}),"\nto either ",(0,r.jsx)(a.code,{children:"CacheStorageType.MEDIA3"})," (to ",(0,r.jsx)(a.em,{children:"always"})," use Media3 caching)\nor ",(0,r.jsx)(a.code,{children:"CacheStorageType.LEGACY"})," (to ",(0,r.jsx)(a.em,{children:"never"})," use Media3 caching) when creating your caching task."]}),"\n",(0,r.jsxs)(l.Z,{queryString:"lang",children:[(0,r.jsx)(o.default,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-kotlin",children:'val cache = THEOplayerGlobal.getSharedInstance(context).cache\nval sourceDescription = SourceDescription.Builder(\n    TypedSource.Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n        .playbackPipeline(PlaybackPipeline.MEDIA3)\n        .build()\n    ).build()\nval cachingParameters = CachingParameters.Builder()\n    // highlight-next-line\n    .storageType(CacheStorageType.MEDIA3)\n    .build()\nval cachingTask = cache.createTask(sourceDescription, cachingParameters)\ncachingTask.start()\n'})})}),(0,r.jsx)(o.default,{value:"java",label:"Java",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:'Cache cache = THEOplayerGlobal.getSharedInstance(context).getCache();\nSourceDescription sourceDescription = SourceDescription.Builder(\n    TypedSource.Builder("https://cdn.theoplayer.com/video/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")\n        .playbackPipeline(PlaybackPipeline.MEDIA3)\n        .build()\n    ).build();\nCachingParameters cachingParameters = CachingParameters.Builder()\n    // highlight-next-line\n    .storageType(CacheStorageType.MEDIA3)\n    .build();\nCachingTask cachingTask = cache.createTask(sourceDescription, cachingParameters);\ncachingTask.start();\n'})})})]}),"\n",(0,r.jsx)(a.h2,{id:"known-limitations",children:"Known limitations"}),"\n",(0,r.jsx)(a.p,{children:"Media3 playback is ready for production use and should work with most streams.\nHowever, there are currently some features and use cases that are not yet fully supported:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"The metrics API is not yet implemented and returns dummy values."}),"\n",(0,r.jsxs)(a.li,{children:["Sources cached with the Media3 backend (",(0,r.jsx)(a.code,{children:"CacheStorageType.MEDIA3"}),") cannot be played using the legacy playback pipeline (",(0,r.jsx)(a.code,{children:"PlaybackPipeline.LEGACY"}),")."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(a.h3,{id:"how-does-media3-affect-the-theoplayer-android-sdk",children:"How does Media3 affect the THEOplayer Android SDK?"}),"\n",(0,r.jsxs)(a.p,{children:["Media3 replaces the media playback layer of the THEOplayer Android SDK, offering improvements in performance and stability for playback over our current implementation. As only core media playback is affected, all player APIs remain identical and other features and integrations (such as ads, analytics or Chromecast) are not affected and will function the same. See ",(0,r.jsx)(a.a,{href:"#known-limitations",children:"the Known limitations section"})," for more info on what features might currently be affected."]}),"\n",(0,r.jsx)(a.h3,{id:"does-this-use-exoplayer",children:"Does this use ExoPlayer?"}),"\n",(0,r.jsx)(a.p,{children:"While we make use of ExoPlayer components, this is not a plain ExoPlayer implementation. In addition to the integrations, features and support already offered by the THEOplayer Android SDK, we've reused what makes sense to implement our own playback pipeline that offers improvements, bugfixes and additional functionality over ExoPlayer."})]})}function h(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},97645:function(e,a,n){n.r(a),n.d(a,{default:()=>t});var i=n("85893");n("67294");var r=n("67026");function t(e){let{children:a,hidden:n,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",t),hidden:n,children:a})}},71509:function(e,a,n){n.d(a,{Z:()=>p});var i=n("85893"),r=n("67294"),t=n("67026"),l=n("34718"),o=n("52371"),s=n("6735");function d(e){let{className:a,block:n,selectedValue:r,selectValue:o,tabValues:s}=e,d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{let a=e.currentTarget,n=s[d.indexOf(a)].value;n!==r&&(c(a),o(n))},p=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=d.indexOf(e.currentTarget)+1;a=d[n]??d[0];break}case"ArrowLeft":{let n=d.indexOf(e.currentTarget)-1;a=d[n]??d[d.length-1]}}a?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},a),children:s.map(e=>{let{value:a,label:n,attributes:l}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>{d.push(e)},onKeyDown:p,onClick:u,...l,className:(0,t.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":r===a}),children:n??a},a)})})}function c(e){let{lazy:a,children:n,selectedValue:l}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){let e=o.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:o.map((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==l}))})}function u(e){let a=(0,o.Y)(e);return(0,i.jsxs)("div",{className:(0,t.Z)("tabs-container","tabList__CuJ"),children:[(0,i.jsx)(d,{...a,...e}),(0,i.jsx)(c,{...a,...e})]})}function p(e){let a=(0,s.default)();return(0,i.jsx)(u,{...e,children:(0,o.h)(e.children)},String(a))}},52371:function(e,a,n){n.d(a,{Y:function(){return u},h:function(){return d}});var i=n(67294),r=n(16550),t=n(8714),l=n(89207),o=n(69413),s=n(54510);function d(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function c(e){let{value:a,tabValues:n}=e;return n.some(e=>e.value===a)}function u(e){let{defaultValue:a,queryString:n=!1,groupId:u}=e,p=function(e){let{values:a,children:n}=e;return(0,i.useMemo)(()=>{let e=a??d(n).map(e=>{let{props:{value:a,label:n,attributes:i,default:r}}=e;return{value:a,label:n,attributes:i,default:r}});return!function(e){let a=(0,o.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,n])}(e),[h,y]=(0,i.useState)(()=>(function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let i=n.find(e=>e.default)??n[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:a,tabValues:p})),[m,f]=function(e){let{queryString:a=!1,groupId:n}=e,t=(0,r.k6)(),o=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l._X)(o),(0,i.useCallback)(e=>{if(!o)return;let a=new URLSearchParams(t.location.search);a.set(o,e),t.replace({...t.location,search:a.toString()})},[o,t])]}({queryString:n,groupId:u}),[g,b]=function(e){let{groupId:a}=e,n=a?`docusaurus.tab.${a}`:null,[r,t]=(0,s.Nk)(n);return[r,(0,i.useCallback)(e=>{n&&t.set(e)},[n,t])]}({groupId:u}),v=(()=>{let e=m??g;return c({value:e,tabValues:p})?e:null})();return(0,t.Z)(()=>{v&&y(v)},[v]),{selectedValue:h,selectValue:(0,i.useCallback)(e=>{if(!c({value:e,tabValues:p}))throw Error(`Can't select invalid tab value=${e}`);y(e),f(e),b(e)},[f,b,p]),tabValues:p}}},50065:function(e,a,n){n.d(a,{Z:function(){return o},a:function(){return l}});var i=n(67294);let r={},t=i.createContext(r);function l(e){let a=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:a},e.children)}}}]);