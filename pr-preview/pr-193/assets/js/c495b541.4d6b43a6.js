"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["15236"],{90419:function(e,i,o){o.r(i),o.d(i,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"how-to-guides/ui/introduction","title":"Introduction","description":"THEOplayer has a default user interface (UI). The default UI is optimized for browsers, mobile devices and tablets.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/11-ui/00-introduction.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/introduction","permalink":"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/11-ui/00-introduction.md","tags":[],"version":"v7","sidebarPosition":0,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to detect active text track cues","permalink":"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/texttrack/how-to-detect-active-text-track-cues"},"next":{"title":"Is it possible to remove an element from the UI?","permalink":"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/is-it-possible-to-remove-an-element"}}'),n=o("85893"),r=o("50065");let s={},a="Introduction",l={},d=[{value:"Customize the UI",id:"customize-the-ui",level:2},{value:"Default UI versus Chromeless UI",id:"default-ui-versus-chromeless-ui",level:3},{value:"Modify default UI",id:"modify-default-ui",level:3},{value:"iOS and Android SDK",id:"ios-and-android-sdk",level:4},{value:"Related articles",id:"related-articles",level:4},{value:"Implement Chromeless UI",id:"implement-chromeless-ui",level:3},{value:"iOS and Android SDK",id:"ios-and-android-sdk-1",level:4}];function h(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,n.jsx)(i.p,{children:"THEOplayer has a default user interface (UI). The default UI is optimized for browsers, mobile devices and tablets.\nAs a developer, you may A) use this UI as is, B) customize it, or C) create a brand-new Chromeless UI, as depicted in the screenshot below."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"THEOplayer UI overview",src:o(37032).Z+"",title:"THEOplayer UI overview",width:"672",height:"381"})}),"\n",(0,n.jsx)(i.p,{children:"The default UI is responsive, so it looks different depending on your device, as visualized in the screenshot below."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"THEOplayer default UI",src:o(89433).Z+"",title:"THEOplayer default UI",width:"908",height:"487"})}),"\n",(0,n.jsx)(i.p,{children:"The default UI has all the basic controls you'd expect from a video player, ranging from a scrub bar to a fullscreen button."}),"\n",(0,n.jsxs)(i.p,{children:["Building a Chromeless UI means building a new UI from scratch using the THEOplayer API and custom application code.\nIn other words: you are responsible for inserting your own controls (e.g. a play button),\nand connecting it with the THEOplayer API (e.g. ",(0,n.jsx)(i.code,{children:"player.play()"}),")."]}),"\n",(0,n.jsxs)(i.p,{children:["Note that some features are dependent on our default UI, because they are built on top of our default UI.\nFor example, the ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/miscellaneous/up-next",children:"Up Next"})," feature (and API) wouldn't work when you build a Chromeless UI."]}),"\n",(0,n.jsx)(i.h2,{id:"customize-the-ui",children:"Customize the UI"}),"\n",(0,n.jsx)(i.p,{children:"The next sections tackle the following topics:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#default-ui-versus-chromeless-ui",children:"Default UI versus Chromeless UI"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#modify-default-ui",children:"Modify default UI"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#implement-chromeless-ui",children:"Implement Chromeless UI"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"default-ui-versus-chromeless-ui",children:"Default UI versus Chromeless UI"}),"\n",(0,n.jsx)(i.p,{children:"It's possible that the envisioned design of your video player looks different from THEOplayer's default UI.\nWhen that happens, your team has to decide whether to A) customize THEOplayer's default UI, or B) implement a Chromeless UI."}),"\n",(0,n.jsx)(i.p,{children:"The default UI has all the basic functionality you expect from a video player, but it might be missing some more exotic UI (or UX) features.\nChanging the colors of the default UI is relatively straightforward, as is hiding a default control item (e.g. the fullscreen button),\nas is inserting a new button in the default control bar.\nHowever, truly transforming the default UI, such as repositioning elements, using all new icons, and more complex operations,\ncan be quite challenging."}),"\n",(0,n.jsx)(i.p,{children:"Implementing a Chromeless UI gives you total control of your UI and UX.\nHowever, this requires an understanding of video and the THEOplayer API, and you might feel like you're reinventing the wheel."}),"\n",(0,n.jsx)(i.p,{children:"So what to pick: modify the default UI or implement a Chromeless UI?"}),"\n",(0,n.jsx)(i.p,{children:'If the envisioned design looks "quite different" from the default UI, we encourage people to implement a Chromeless UI.\nAlternatively, if that isn\'t an option, we advise people to compromise, and to adapt their envisioned design to look "quite similar" to the default UI.'}),"\n",(0,n.jsxs)(i.p,{children:["Our default UI is not optimized for big screen devices like Samsung Tizen, LG webOS and Android TV.\nIf you're targeting those (and similar devices), you should consider implementing a Chromeless UI,\nas demonstrated on our ",(0,n.jsx)(i.a,{href:"https://github.com/THEOplayer/samples-tizen",children:"Tizen"})," and ",(0,n.jsx)(i.a,{href:"https://github.com/THEOplayer/samples-webos",children:"webOS"}),"\nGithub repositories."]}),"\n",(0,n.jsx)(i.p,{children:"Our default UI for Apple TV (i.e. tvOS SDK) is similar to the default Apple TV video player.\nYou should consider a Chromeless UI for this platform should you want to divert from this design."}),"\n",(0,n.jsx)(i.h3,{id:"modify-default-ui",children:"Modify default UI"}),"\n",(0,n.jsx)(i.p,{children:"You can modify the default UI through JavaScript and CSS."}),"\n",(0,n.jsxs)(i.p,{children:["Changing the colors is quite easy. There's a GUI when building your Web SDK at ",(0,n.jsx)(i.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"\nto generate code (depicted in the screenshot below), or you can use a similar tool at ",(0,n.jsx)(i.a,{href:"https://demo.theoplayer.com/ui-skinning",children:"https://demo.theoplayer.com/ui-skinning"}),".\nMore information on changing the colors is available at our article on ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/ui-skinning",children:"UI skinning"}),"."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"UI editor on portal",src:o(99739).Z+"",title:"UI editor on portal",width:"1786",height:"1400"})}),"\n",(0,n.jsxs)(i.p,{children:["The default UI is a fork of Video.js 5, so you may also use the Video.js 5 API to modify the UI, as demonstrated in some of our articles.\nThis may - for example - simplify the process of ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/how-to-insert-a-button",children:"adding a new button"})," to the default control bar."]}),"\n",(0,n.jsxs)(i.p,{children:["Removing a button is a matter of identifying the appropriate CSS selector, and configuring ",(0,n.jsx)(i.code,{children:"display: none!important"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Overlaying text and images is a matter of overlaying a custom ",(0,n.jsx)(i.code,{children:"<div>"})," (or native element) on top of the THEOplayer container."]}),"\n",(0,n.jsx)(i.h4,{id:"ios-and-android-sdk",children:"iOS and Android SDK"}),"\n",(0,n.jsxs)(i.p,{children:["As of THEOplayer version 5, the iOS and Android SDKs no longer ship a default UI.\nWe recommend switching to our ",(0,n.jsx)(i.a,{href:"/open-video-ui/android/",children:"Open Video UI"})," (for Android)\nor our ",(0,n.jsx)(i.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-ui",children:"React Native UI"})," (for Android and iOS)."]}),"\n",(0,n.jsxs)(i.p,{children:["For THEOplayer version 4 and lower, the default UI is the same UI as our Web SDK.\nSee ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v4/how-to-guides/ui/introduction#ios-and-android-sdk",children:"our version 4 documentation"})," for more information."]}),"\n",(0,n.jsx)(i.h4,{id:"related-articles",children:"Related articles"}),"\n",(0,n.jsx)(i.p,{children:"Below are some articles related to modifying our default UI:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/is-it-possible-to-remove-an-element",children:"Is it possible to remove an element from the UI?"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/how-to-align-timeline-in-the-middle",children:"How to align the timeline in the middle"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/how-to-change-big-play-button",children:"How to change the Big Play Button?"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/how-to-make-control-keys-always-visible",children:"How to make the control bar always visible?"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/is-it-possible-to-hide-googla-ima",children:"Is it possible to hide/disable the Google IMA UI"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/how-to-insert-a-button",children:"How to insert a button"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/how-to-change-default-UI-language-to-other",children:"How to change the default UI language to other"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/customize-ui-during-playback",children:"Customize UI during ad playback"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/how-to-change-how-a-video-should-fit-inside-a-container",children:"How to change how a video should be fit inside of a container"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/how-to-make-audio-only-player",children:"How to make an audio-only player"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/customising-vertical-volume-slider",children:"Customizing the UI: vertical volume slider"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/ui-skinning",children:"UI Skinning"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"implement-chromeless-ui",children:"Implement Chromeless UI"}),"\n",(0,n.jsx)(i.p,{children:"Building a Chromeless UI may be daunting at first, but it's rewarding.\nA Chromeless UI gives you full control over your UI and UX,\nbut you must understand the flow of a video, its API and its events."}),"\n",(0,n.jsxs)(i.p,{children:["Refer to our article on ",(0,n.jsx)(i.a,{href:"/documentation/pr-preview/pr-193/theoplayer/v7/how-to-guides/ui/how-to-build-chromeless-ui",children:"How to build a Chromeless UI"})," for more information."]}),"\n",(0,n.jsx)(i.h4,{id:"ios-and-android-sdk-1",children:"iOS and Android SDK"}),"\n",(0,n.jsx)(i.p,{children:"You can implement a Chromeless UI on iOS and Android completely on top of THEOplayer through the native technologies and programming languages.\nThe THEOplayer API exposes all the events and properties that you need to implement a custom design."})]})}function u(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},89433:function(e,i,o){o.d(i,{Z:function(){return t}});let t=o.p+"assets/images/ui-introduction-default-ui-60eb17b239311a93c4099657dcaf8651.png"},37032:function(e,i,o){o.d(i,{Z:function(){return t}});let t=o.p+"assets/images/ui-introduction-overview-03ba6a2cf9c5dafe7480f59155541b41.png"},99739:function(e,i,o){o.d(i,{Z:function(){return t}});let t=o.p+"assets/images/ui-introduction-portal-4705aec7c4a71c082932485a32599949.png"},50065:function(e,i,o){o.d(i,{Z:function(){return a},a:function(){return s}});var t=o(67294);let n={},r=t.createContext(n);function s(e){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);