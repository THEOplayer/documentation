"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["31154"],{69946:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"getting-started/sdks/what-is-new-in-theoplayer-5","title":"THEOplayer 5.0 - Native Mobile iOS/tvOS and Android SDKs","description":"Version 5.0 is a major upgrade in our THEOplayer SDK line-up.","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/02-what-is-new-in-theoplayer-5.md","sourceDirName":"getting-started/01-sdks","slug":"/getting-started/sdks/what-is-new-in-theoplayer-5","permalink":"/documentation/pr-preview/pr-218/theoplayer/v7/getting-started/sdks/what-is-new-in-theoplayer-5","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/02-what-is-new-in-theoplayer-5.md","tags":[],"version":"v7","sidebarPosition":102,"frontMatter":{"displayed_sidebar":"android","sidebar_position":102},"sidebar":"android"}'),r=i("85893"),a=i("50065");let o={displayed_sidebar:"android",sidebar_position:102},s="THEOplayer 5.0 - Native Mobile iOS/tvOS and Android SDKs",l={},d=[{value:"Performance",id:"performance",level:2},{value:"Android SDK",id:"android-sdk",level:3},{value:"iOS/tvOS SDK",id:"iostvos-sdk",level:3},{value:"Usability",id:"usability",level:2},{value:"One SDK per platform",id:"one-sdk-per-platform",level:3},{value:"No breaking APIs",id:"no-breaking-apis",level:3},{value:"More developer control",id:"more-developer-control",level:3},{value:"Future compatibility",id:"future-compatibility",level:2},{value:"Modularization",id:"modularization",level:3},{value:"Core playback",id:"core-playback",level:3},{value:"Integration-based architecture",id:"integration-based-architecture",level:3},{value:"Connector approach",id:"connector-approach",level:3},{value:"Reliance on native APIs",id:"reliance-on-native-apis",level:3},{value:"Where to start?",id:"where-to-start",level:2},{value:"Getting started",id:"getting-started",level:3},{value:"Migration from 4.x?",id:"migration-from-4x",level:3},{value:"Only one thing to keep in mind",id:"only-one-thing-to-keep-in-mind",level:4},{value:"Contact us",id:"contact-us",level:3}];function c(e){let n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"theoplayer-50---native-mobile-iostvos-and-android-sdks",children:"THEOplayer 5.0 - Native Mobile iOS/tvOS and Android SDKs"})}),"\n",(0,r.jsx)(n.p,{children:"Version 5.0 is a major upgrade in our THEOplayer SDK line-up."}),"\n",(0,r.jsx)(n.p,{children:"The native mobile SDKs are re-architected and built from the ground up keeping performance, usability, and future compatibility in mind."}),"\n",(0,r.jsx)(n.p,{children:"What does this mean?"}),"\n",(0,r.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,r.jsx)(n.p,{children:"The legacy SDKs (4.x) did put focus on code reusability between SDKs (Web, Android, and iOS) which was really practical and helped us iterate on features faster and allowed us to bring a handful of interesting common features to the native platforms. Until a certain point where the shared code started to cause some performance hits.\nThis is still unnoticeable for 90% of the use cases nowadays but we wanted something better and our customers deserve something better."}),"\n",(0,r.jsx)(n.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsx)(n.p,{children:"The new Android SDK (5.0) is a complete rewrite of the old SDK from scratch. Using low-level, platform-native APIs the new SDK competes with the best players on the market.\nThanks to our in-house expertise we don\u2019t need any reliance on other 3rd party or open-source solutions, we have full control."}),"\n",(0,r.jsx)(n.p,{children:"Is there a stream-specific issue? We know exactly which byte to flip and where or suggest a more specification-compliant solution on your backend."}),"\n",(0,r.jsx)(n.h3,{id:"iostvos-sdk",children:"iOS/tvOS SDK"}),"\n",(0,r.jsx)(n.p,{children:"The iOS/tvOS SDKs also dropped the shared middle layer and are now relying on fully native APIs while keeping compatibility with the well-known universal THEOplayer APIs.\nThe iOS and tvOS codebase is as close as possible to each other which helps to introduce new features side by side on both platforms almost immediately. Using native platform-specific APIs gives us the control we need to deliver a top-quality playback experience on Apple devices."}),"\n",(0,r.jsx)(n.h2,{id:"usability",children:"Usability"}),"\n",(0,r.jsx)(n.h3,{id:"one-sdk-per-platform",children:"One SDK per platform"}),"\n",(0,r.jsx)(n.p,{children:"You don\u2019t have to worry about getting and deploying the right SDK for your application."}),"\n",(0,r.jsx)(n.p,{children:"The Android SDK is one single universal library for all of your devices. No more Android Mobile, FireTV or AndroidTV specify builds. The new Android SDK covers all platforms within a single package that is available through Maven."}),"\n",(0,r.jsx)(n.p,{children:"For Apple devices the provided XCFramework bundles all you need to build stunning playback experiences for iOS, iPadOS, and tvOS."}),"\n",(0,r.jsx)(n.h3,{id:"no-breaking-apis",children:"No breaking APIs"}),"\n",(0,r.jsx)(n.p,{children:"Migration can be hard. We kept it in mind."}),"\n",(0,r.jsx)(n.p,{children:"The new SDKs conform to the legacy (4.x) APIs to make migration easy and fun. The breaking API changes customers have to face in their applications are close to zero*."}),"\n",(0,r.jsx)("sup",{children:(0,r.jsx)("sup",{children:(0,r.jsx)(n.p,{children:"*depends on the use case:\nIf your application is already up to date with the latest 4.x APIs (and not depending on deprecated methods) and you use features like basic playback, IMA playback, Chromecast support, then you don\u2019t need to change anything (except registering the integrations)"})})}),"\n",(0,r.jsx)(n.h3,{id:"more-developer-control",children:"More developer control"}),"\n",(0,r.jsx)(n.p,{children:"Developers would like to know what is happening inside their applications. We would like to know it too and help them discover the changes they have to make."}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer SDK 5.0 enhances debuggability with more logs and developer friendly debug APIs to identify issues much easier. We make it our mission for the future to give developers as much control and as many debug tools as possible to find the root cause of their issues."}),"\n",(0,r.jsx)(n.h2,{id:"future-compatibility",children:"Future compatibility"}),"\n",(0,r.jsx)(n.h3,{id:"modularization",children:"Modularization"}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer SDK 5.0 is built with modularization in mind. This gives us flexibility internally and easy extensibility for our partners and customers."}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer 5.0 has 3 main components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Core playback"}),"\n",(0,r.jsx)(n.li,{children:"Integrations"}),"\n",(0,r.jsx)(n.li,{children:"Connectors"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(84223).Z+"",width:"1604",height:"858"})}),"\n",(0,r.jsx)(n.h3,{id:"core-playback",children:"Core playback"}),"\n",(0,r.jsx)(n.p,{children:"The core playback module is the base of our SDK. It contains everything that our customers need to have basic HLS and DASH playback."}),"\n",(0,r.jsx)(n.h3,{id:"integration-based-architecture",children:"Integration-based architecture"}),"\n",(0,r.jsx)(n.p,{children:"Every new feature can come into our player in two ways. As a new feature in the core playback module (which enhances the default playback experience), or as a new Integration module that can be optionally configured with the player."}),"\n",(0,r.jsx)(n.p,{children:"The integrations are closed-source components where we make sure it fits into the player and it works well with current APIs.\nSome of them are e.g. Google IMA integration, and Google Cast integration."}),"\n",(0,r.jsx)(n.h3,{id:"connector-approach",children:"Connector approach"}),"\n",(0,r.jsx)(n.p,{children:"The connectors are open-source THEO or community-made components that enrich the playback experience and rely only on the public player or integration APIs."}),"\n",(0,r.jsx)(n.p,{children:"This gives our partners and customers the ability to build powerful integrations around the player without having any internal dependencies on us."}),"\n",(0,r.jsx)(n.p,{children:"How powerful is this approach?"}),"\n",(0,r.jsx)(n.p,{children:"You can build generic or specific analytics and tracking modules.\nIt is possible to build open-source UI components for the player or for a specific integration.\nThis approach opens up the possibility of building cross-platforms SDKs."}),"\n",(0,r.jsxs)(n.p,{children:["Our THEOplayer ",(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/sdk/react-native",children:"React Native SDK"})," is basically a connector on our public APIs too!"]}),"\n",(0,r.jsx)(n.h3,{id:"reliance-on-native-apis",children:"Reliance on native APIs"}),"\n",(0,r.jsx)(n.p,{children:"Dropping the middle layer and relying only on native APIs gives us the possibility to deliver features much faster and be up-to-date with the latest platform improvements. We are not limited by the capabilities of the shared layer and we can bring new features alive as soon as they are available on the underlying platforms."}),"\n",(0,r.jsx)(n.h2,{id:"where-to-start",children:"Where to start?"}),"\n",(0,r.jsx)(n.h3,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsxs)(n.p,{children:["You can follow our getting started guides for ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-218/theoplayer/v7/getting-started/sdks/android/getting-started",children:"Android"})," and for ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-218/theoplayer/v7/getting-started/sdks/ios/getting-started",children:"iOS"})]}),"\n",(0,r.jsx)(n.h3,{id:"migration-from-4x",children:"Migration from 4.x?"}),"\n",(0,r.jsxs)(n.p,{children:["You can follow our migration guides for ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-218/theoplayer/v7/getting-started/sdks/android/migration-from-4.x",children:"Android"})," and for ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-218/theoplayer/v7/getting-started/sdks/ios/migration-from-4.x",children:"iOS"})]}),"\n",(0,r.jsx)(n.h4,{id:"only-one-thing-to-keep-in-mind",children:"Only one thing to keep in mind"}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer Android SDK 5.0 and THEOplayer iOS/tvOS SDK 5.0 are new SDKs built from the ground up. It means that from day 1 they will not have the same feature sets available as their legacy counterparts."}),"\n",(0,r.jsx)(n.p,{children:"We will do our best to bring feature parity with the legacy (4.x) SDKs as soon as possible.\nBased on our research the current state of 5.0 covers most of the customer use cases."}),"\n",(0,r.jsx)(n.h3,{id:"contact-us",children:"Contact us"}),"\n",(0,r.jsx)(n.p,{children:"Did you find a missing feature and something is not working as expected?"}),"\n",(0,r.jsx)(n.p,{children:"Don\u2019t hesitate to contact us!"})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},84223:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/theoplayer-5-architecture-00-4626309dd1e682a06021e1b9e1d5e28a.png"},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return o}});var t=i(67294);let r={},a=t.createContext(r);function o(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);