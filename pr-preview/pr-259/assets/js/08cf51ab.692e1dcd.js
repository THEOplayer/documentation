"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["43092"],{83721:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>s});var t=JSON.parse('{"id":"external/react-native-theoplayer/doc/audio-control","title":"Audio Control Management on Android","description":"Overview","source":"@site/theoplayer_versioned_docs/version-v6/external/react-native-theoplayer/doc/audio-control.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/audio-control","permalink":"/documentation/pr-preview/pr-259/theoplayer/v6/getting-started/frameworks/react-native/audio-control","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/audio-control.md","tags":[],"version":"v6","frontMatter":{"slug":"/getting-started/frameworks/react-native/audio-control"},"sidebar":"react-native","previous":{"title":"Advertisements","permalink":"/documentation/pr-preview/pr-259/theoplayer/v6/getting-started/frameworks/react-native/ads"},"next":{"title":"Background Playback and Notifications","permalink":"/documentation/pr-preview/pr-259/theoplayer/v6/getting-started/frameworks/react-native/background"}}'),i=o("85893"),r=o("50065");let a={slug:"/getting-started/frameworks/react-native/audio-control"},s="Audio Control Management on Android",d={},c=[{value:"Overview",id:"overview",level:2},{value:"Audio Focus",id:"audio-focus",level:2},{value:"Audio &quot;ducking&quot;",id:"audio-ducking",level:3},{value:"Audio Becoming Noisy",id:"audio-becoming-noisy",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"audio-control-management-on-android",children:"Audio Control Management on Android"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Android allows multiple apps to play audio concurrently, but this can lead to a disruptive user experience due to\nmixed audio streams. To enhance user experience, Android offers an API for apps to control ",(0,i.jsx)(n.strong,{children:"audio focus"}),", ensuring only\none app possesses audio focus, thus delivering a more favorable user experience."]}),"\n",(0,i.jsxs)(n.p,{children:["This section details how ",(0,i.jsx)(n.code,{children:"react-native-theoplayer"})," addresses changes in audio focus, which is available as of\nversion 2.12.0."]}),"\n",(0,i.jsx)(n.p,{children:"References:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.android.com/reference/android/media/AudioFocusRequest",children:"Android for Developers: Audio focus"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.android.com/guide/topics/media/platform/output#becoming-noisy",children:'Android for Developers: "Don\'t be Noisy"'})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"audio-focus",children:"Audio Focus"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"react-native-theoplayer"})," package is equipped with inherent audio focus management. It initiates an audio focus\nrequest upon the start of playback and responds to the loss of audio focus by pausing playback."]}),"\n",(0,i.jsxs)(n.p,{children:["If the loss was ",(0,i.jsx)(n.em,{children:"transient"}),", i.e. lasting only for a short while such as during an incoming phone call,\nthe player will regain audio focus afterward and play-out while resume."]}),"\n",(0,i.jsx)(n.h3,{id:"audio-ducking",children:'Audio "ducking"'}),"\n",(0,i.jsxs)(n.p,{children:["When another app seeks audio focus, it can optionally indicate that the current audio focus holder can\nlower its playback volume to continue playing (",(0,i.jsx)(n.code,{children:"AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK"}),'). The new focus holder does\nnot require other apps to be silent. This behavior is known as "ducking."']}),"\n",(0,i.jsx)(n.p,{children:"In summary:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Event"}),(0,i.jsx)(n.th,{children:"Action"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"AUDIOFOCUS_LOSS"}),", ",(0,i.jsx)(n.code,{children:"AUDIOFOCUS_LOSS_TRANSIENT"})]}),(0,i.jsx)(n.td,{children:"Pause play-out"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK"})}),(0,i.jsx)(n.td,{children:"Lower volume"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"AUDIOFOCUS_GAIN"})}),(0,i.jsx)(n.td,{children:"Resume play-out or restore volume"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"audio-becoming-noisy",children:"Audio Becoming Noisy"}),"\n",(0,i.jsx)(n.p,{children:"When headphones are unplugged or a Bluetooth device is disconnected, the audio stream automatically reroutes to the\ndevice's built-in speaker. This can lead to an abrupt increase in volume, which is an undesired outcome."}),"\n",(0,i.jsxs)(n.p,{children:['The "Audio Becoming Noisy" situation is also managed by pausing playback for the ',(0,i.jsx)(n.code,{children:"react-native-theoplayer"})," package."]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return a}});var t=o(67294);let i={},r=t.createContext(i);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);