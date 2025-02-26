"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["28148"],{67553:function(e,i,t){t.r(i),t.d(i,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>s,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"how-to-guides/android/millicast/getting-started","title":"Getting started with Millicast on Android","description":"Usage","source":"@site/theoplayer/how-to-guides/android/millicast/getting-started.mdx","sourceDirName":"how-to-guides/android/millicast","slug":"/how-to-guides/android/millicast/getting-started","permalink":"/documentation/pr-preview/pr-224/theoplayer/how-to-guides/android/millicast/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/android/millicast/getting-started.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"android","previous":{"title":"Getting started with Media3 on Android","permalink":"/documentation/pr-preview/pr-224/theoplayer/how-to-guides/android/media3/getting-started"},"next":{"title":"Android Connectors","permalink":"/documentation/pr-preview/pr-224/theoplayer/connectors/android/"}}'),a=t("85893"),o=t("50065"),r=t("62495");let l={},d="Getting started with Millicast on Android",s={},c=[...r.d$,{value:"Usage",id:"usage",level:2},{value:"Add the <code>integration-millicast</code> dependency",id:"add-the-integration-millicast-dependency",level:3},{value:"Add the Millicast integration to the player",id:"add-the-millicast-integration-to-the-player",level:3},{value:"Add a <code>MillicastSource</code>",id:"add-a-millicastsource",level:3},{value:"Add configuration",id:"add-configuration",level:3},{value:"Background playback",id:"background-playback",level:3},{value:"More information",id:"more-information",level:2}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"getting-started-with-millicast-on-android",children:"Getting started with Millicast on Android"})}),"\n","\n",(0,a.jsx)(r.ZP,{}),"\n",(0,a.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["Follow ",(0,a.jsx)(i.a,{href:"/documentation/pr-preview/pr-224/theoplayer/getting-started/sdks/android/getting-started",children:"our Getting Started guide"}),"\nto set up THEOplayer in your Android app."]}),"\n",(0,a.jsxs)(i.li,{children:["Add the ",(0,a.jsx)(i.code,{children:"integration-millicast"})," dependency to your module's ",(0,a.jsx)(i.code,{children:"build.gradle"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Add the ",(0,a.jsx)(i.code,{children:"MillicastIntegration"})," to the player."]}),"\n",(0,a.jsxs)(i.li,{children:["Add a ",(0,a.jsx)(i.code,{children:"MillicastSource"})," to your player's source."]}),"\n"]}),"\n",(0,a.jsxs)(i.h3,{id:"add-the-integration-millicast-dependency",children:["Add the ",(0,a.jsx)(i.code,{children:"integration-millicast"})," dependency"]}),"\n",(0,a.jsxs)(i.p,{children:["Add the Millicast integration along with the ",(0,a.jsx)(i.a,{href:"https://docs.dolby.io/streaming-apis/docs/android",children:"Millicast SDK"}),"\nto your module ",(0,a.jsx)(i.code,{children:"build.gradle"})," file, as demonstrated below:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-groovy",children:"dependencies {\n    // ...\n    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'\n    implementation 'com.theoplayer.theoplayer-sdk-android:integration-millicast:+'\n    implementation \"com.millicast:millicast-sdk-android:2.0.0\"\n    // ...\n}\n"})}),"\n",(0,a.jsx)(i.h3,{id:"add-the-millicast-integration-to-the-player",children:"Add the Millicast integration to the player"}),"\n",(0,a.jsxs)(i.p,{children:["Create and add the ",(0,a.jsx)(i.code,{children:"MillicastIntegration"})," to your ",(0,a.jsx)(i.code,{children:"THEOplayerView"}),":"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-kotlin",children:"val millicastIntegration = MillicastIntegrationFactory.createMillicastIntegration()\ntheoplayerView.player.addIntegration(millicastIntegration)\n"})}),"\n",(0,a.jsxs)(i.h3,{id:"add-a-millicastsource",children:["Add a ",(0,a.jsx)(i.code,{children:"MillicastSource"})]}),"\n",(0,a.jsxs)(i.p,{children:["After setting up a ",(0,a.jsx)(i.code,{children:"THEOplayerView"})," in your app's activity, set its source to a ",(0,a.jsx)(i.code,{children:"SourceDescription"})," containing a ",(0,a.jsx)(i.code,{children:"MillicastSource"}),".\nYou'll need a Millicast account ID and stream name to identify your Millicast stream:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-kotlin",children:'import com.theoplayer.android.api.millicast.MillicastSource\n\ntheoplayerView.player.source = SourceDescription.Builder(\n    MillicastSource(\n        src = "multiview",\n        streamAccountId = "k9Mwad",\n        apiUrl = "https://director.millicast.com/api/director/subscribe",\n        subscriberToken = "<token>" // This is only required for subscribing to secure streams and should be omitted otherwise.\n    )\n).build()\n'})}),"\n",(0,a.jsx)(i.h3,{id:"add-configuration",children:"Add configuration"}),"\n",(0,a.jsxs)(i.p,{children:["Optionally, you can provide additional configuration to the source, specific for working with Millicast streams.\nTo configure these settings, add an ",(0,a.jsx)(i.code,{children:"Option"})," object as the ",(0,a.jsx)(i.code,{children:"connectOptions"})," parameter of the source object\nand specify the options."]}),"\n",(0,a.jsxs)(i.p,{children:["In the example below, the configuration is used to disable any audio from the Millicast stream.\nFor an exhaustive list of these options, visit the ",(0,a.jsx)(i.a,{href:"https://millicast.github.io/doc/latest/android/android/com.millicast.subscribers/-option/index.html",children:"documentation"}),"."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-kotlin",children:"import com.millicast.subscribers.Option\nimport com.theoplayer.android.api.millicast.MillicastSource\n\ntheoplayerView.player.source = SourceDescription.Builder(\n    MillicastSource(\n        // ...\n        connectOptions = Option(\n            disableAudio = true\n        )\n    )\n).build()\n"})}),"\n",(0,a.jsx)(i.h3,{id:"background-playback",children:"Background playback"}),"\n",(0,a.jsx)(i.admonition,{title:"Known issue on Android Millicast background playback",type:"info",children:(0,a.jsx)(i.p,{children:"Currently there is a known issue where after an indeterminate amount of time background playback of Millicast sources can stop playing unexpectedly. This issue is being investigated and will be fixed in an upcoming release."})}),"\n",(0,a.jsxs)(i.p,{children:["In order to play Millicast sources in the background, ensure you've configured allowing background playback using the ",(0,a.jsx)(i.a,{href:"https://www.theoplayer.com/docs/theoplayer/v8/api-reference/android/com/theoplayer/android/api/THEOplayerSettings.html#setAllowBackgroundPlayback(boolean)",children:"setAllowBackgroundPlayback"})," API on the player."]}),"\n",(0,a.jsx)(i.h2,{id:"more-information",children:"More information"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/millicast/package-summary.html",children:"API references"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://docs.dolby.io/streaming-apis/docs/",children:"Millicast documentation"})}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},62495:function(e,i,t){t.d(i,{ZP:function(){return l},d$:function(){return o}});var n=t(85893),a=t(50065);let o=[];function r(e){let i={a:"a",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://dolby.io/products/real-time-streaming/",children:"Dolby Millicast"})," delivers broadcast quality live streaming\nat sub-second latency, enabling interactivity and fan engagement.\nUsing the THEOplayer Millicast integration, you can play your Millicast streams directly through THEOplayer."]})}function l(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return l},a:function(){return r}});var n=t(67294);let a={},o=n.createContext(a);function r(e){let i=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);