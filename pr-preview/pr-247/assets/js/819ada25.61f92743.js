"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["31544"],{24383:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"external/react-native-theoplayer/doc/background","title":"Background Playback and Notifications","description":"Overview","source":"@site/theoplayer_versioned_docs/version-v7/external/react-native-theoplayer/doc/background.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/background","permalink":"/documentation/pr-preview/pr-247/theoplayer/v7/getting-started/frameworks/react-native/background","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/background.md","tags":[],"version":"v7","frontMatter":{"slug":"/getting-started/frameworks/react-native/background"},"sidebar":"react-native","previous":{"title":"Audio Control Management on Android","permalink":"/documentation/pr-preview/pr-247/theoplayer/v7/getting-started/frameworks/react-native/audio-control"},"next":{"title":"Casting with Chromecast and Airplay","permalink":"/documentation/pr-preview/pr-247/theoplayer/v7/getting-started/frameworks/react-native/cast"}}'),a=n("85893"),r=n("50065");let o={slug:"/getting-started/frameworks/react-native/background"},s="Background Playback and Notifications",c={},d=[{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Android",id:"android",level:3},{value:"Notifications, Metadata and Lockscreen Controls",id:"notifications-metadata-and-lockscreen-controls",level:2},{value:"Configuration",id:"configuration-1",level:3}];function l(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"background-playback-and-notifications",children:"Background Playback and Notifications"})}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:["One of the key features of ",(0,a.jsx)(t.code,{children:"react-native-theoplayer"})," is its support for background playback,\nnotifications, and lock-screen controls. This feature allows your users to continue listening\nto audio when the app is not in the foreground, and control playback using notifications and lock-screen controls."]}),"\n",(0,a.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"backgroundAudioConfiguration"})," player configuration affects the play-out behaviour when the app is moved to\nthe background: in case the ",(0,a.jsx)(t.code,{children:"enabled"})," property is set to ",(0,a.jsx)(t.code,{children:"true"}),", the current media asset will continue\nplaying when the app is moved to the background, otherwise play-out will pause."]}),"\n",(0,a.jsx)(t.p,{children:"The configuration can be modified at run-time, allowing the player to pause depending on the current media asset's\nproperties, or whether an ad is playing or not."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"player.backgroundAudioConfiguration = { enabled: true };\n"})}),"\n",(0,a.jsx)(t.h3,{id:"android",children:"Android"}),"\n",(0,a.jsxs)(t.p,{children:["On Android, a ",(0,a.jsx)(t.a,{href:"https://developer.android.com/guide/components/services",children:"service"})," is used to\ncontinue playback in the background while the user is not interacting with the app."]}),"\n",(0,a.jsxs)(t.p,{children:["It is possible to disable the service at build time by setting the build config field ",(0,a.jsx)(t.code,{children:"'THEOplayer_usePlaybackService = false'"}),".\nIn that case the background playback feature is always disabled, no notifications are displayed, and the\nplayer will always pause when the hosting app goes to the background."]}),"\n",(0,a.jsx)(t.h2,{id:"notifications-metadata-and-lockscreen-controls",children:"Notifications, Metadata and Lockscreen Controls"}),"\n",(0,a.jsx)(t.p,{children:"During play-out of a media asset, a notification is displayed that provides some metadata and\nenables basic control. The source description passed to the player should provide the necessary metadata\nproperties:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"{\n	sources: [{\n    	src: manifestUrl,\n        type: type,\n        contentProtection: {\n        	integration: '...',\n        	fairplay: {\n        		certificate: '...',\n				licenseAcquisitionURL: licenseUrl\n			}\n		}\n	}],\n	poster: 'https://static.clubs.nfl.com/image/private/t_landscape_tablet/seahawks/nvbiygyqt9ccucmys0hr.jpg',\n	metadata: {\n		title: 'My stream title',\n		subtitle: 'A subtitle or artist',\n		nowPlayingServiceIdentifier: 'serviceId',\n		nowPlayingContentIdentifier: 'contentId'\n	}\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"The following fields from the sourceDescription are used to display information in the lockscreen:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"lockscreen title"})," field: ",(0,a.jsx)(t.strong,{children:"source.metadata.title"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"lockscreen artist"})," field: ",(0,a.jsx)(t.strong,{children:"source.metadata.artist"}),", with a fallback to ",(0,a.jsx)(t.strong,{children:"source.metadata.subtitle"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"lockscreen image"}),": ",(0,a.jsx)(t.strong,{children:"source.metadata.displayIconUri"}),", with a fallback to ",(0,a.jsx)(t.strong,{children:"source.poster"}),"\nThe following fields can be setup to do additional configuration for the lockscreen behaviour on iOS:"]}),"\n",(0,a.jsxs)(t.li,{children:["Info property service identifier: ",(0,a.jsx)(t.strong,{children:"source.metadata.nowPlayingServiceIdentifier"})]}),"\n",(0,a.jsxs)(t.li,{children:["Info property content identifier: ",(0,a.jsx)(t.strong,{children:"source.metadata.nowPlayingContentIdentifier"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"As a result, the following setup will result in the same lockscreen info being displayed:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"	...\n	metadata: {\n		title: 'My stream title',\n		artist: 'A subtitle or artist',\n		nowPlayingServiceIdentifier: 'serviceId',\n		nowPlayingContentIdentifier: 'contentId',\n		displayIconUri: 'https://static.clubs.nfl.com/image/private/t_landscape_tablet/seahawks/nvbiygyqt9ccucmys0hr.jpg',\n	}\n"})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:(0,a.jsx)(t.img,{alt:"notification_android",src:n(81383).Z+"",width:"800",height:"403"})}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:(0,a.jsx)(t.img,{alt:"notification_ios",src:n(76019).Z+"",width:"797",height:"340"})}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:(0,a.jsx)(t.img,{alt:"notification_web",src:n(37547).Z+"",width:"791",height:"364"})})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Android"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"iOS"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Web"})]})})]}),"\n",(0,a.jsx)(t.h3,{id:"configuration-1",children:"Configuration"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"mediaControl"})," property of ",(0,a.jsx)(t.code,{children:"PlayerConfiguration"})," hosts properties that affect the notifications, media sessions and\ncontrols on each platform. Currently, it only contains a property ",(0,a.jsx)(t.code,{children:"mediaSessionEnabled"}),"\nthat toggles the Media Session API on web. If it is disabled, no media session properties or actions will be set."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},81383:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/notification_android-d782297b7b92dc30e196b0000efdd7a7.png"},76019:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/notification_ios-3ac8d1563482c7b4728aa098f9034dbc.png"},37547:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/notification_web-9e1124ac683eb295ff71adea39052c50.png"},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var i=n(67294);let a={},r=i.createContext(a);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);