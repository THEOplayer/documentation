"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["22935"],{18891:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>s,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"external/react-native-theoplayer/doc/media3","title":"Android Media3 Pipeline","description":"Overview","source":"@site/theoplayer/external/react-native-theoplayer/doc/media3.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/media3","permalink":"/documentation/pr-preview/pr-254/theoplayer/getting-started/frameworks/react-native/media3","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/media3.md","tags":[],"version":"current","frontMatter":{"slug":"/getting-started/frameworks/react-native/media3"},"sidebar":"react-native","previous":{"title":"Media Cache","permalink":"/documentation/pr-preview/pr-254/theoplayer/getting-started/frameworks/react-native/media-caching"},"next":{"title":"Picture-in-Picture (PiP)","permalink":"/documentation/pr-preview/pr-254/theoplayer/getting-started/frameworks/react-native/pip"}}'),i=n("85893"),a=n("50065");let o={slug:"/getting-started/frameworks/react-native/media3"},d="Android Media3 Pipeline",s={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:3}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"android-media3-pipeline",children:"Android Media3 Pipeline"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["The THEOplayer Android Media3 pipeline is an integration for the THEOplayer Android SDK that serves as a ",(0,i.jsx)(t.strong,{children:"new\nand rebuilt base layer for playback of video and audio files"}),".\nIt is based on ",(0,i.jsx)(t.a,{href:"https://developer.android.com/media/media3",children:"Jetpack Media3"})," components,\nand it provides more stable playback covering a broader range of use cases, all while being lighter in size and\nmore performant."]}),"\n",(0,i.jsxs)(t.p,{children:["For more information, refer to the ",(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/docs/theoplayer/how-to-guides/android/media3/getting-started/",children:"Getting started with media3 on Android"}),"\nsection in our Android SDK documentation."]}),"\n",(0,i.jsxs)(t.p,{children:["The media3 pipeline is available as of ",(0,i.jsx)(t.code,{children:"react-native-theoplayer"})," v8.9.0."]}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:["Except for ",(0,i.jsx)(t.strong,{children:"THEOads sources"}),", where media3 is ",(0,i.jsx)(t.strong,{children:"enabled by default"}),', the "legacy" pipeline remains\nthe default for now.']}),"\n",(0,i.jsxs)(t.p,{children:["To enable the new media3 extension, set the ",(0,i.jsx)(t.code,{children:"THEOplayer_extensionMedia3"})," in the app's gradle configuration,\nsuch as the ",(0,i.jsx)(t.code,{children:"gradle.properties"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"THEOplayer_extensionMedia3=true\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, pass the ",(0,i.jsx)(t.code,{children:"useMedia3"})," flag in the ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/-/src/api/config/PlayerConfiguration.ts",children:"player configuration"})," as shown below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const playerConfig: PlayerConfiguration = {\n  // ...\n  useMedia3: true\n};\n"})})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var r=n(67294);let i={},a=r.createContext(i);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);