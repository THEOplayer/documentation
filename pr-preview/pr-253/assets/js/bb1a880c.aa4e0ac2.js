"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["61217"],{34902:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>a,assets:()=>s,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"external/react-native-theoplayer/doc/creating-minimal-app","title":"Creating a minimal demo app","description":"In this section we start from an empty React Native template, include a dependency to react-native-theoplayer,","source":"@site/theoplayer_versioned_docs/version-v8/external/react-native-theoplayer/doc/creating-minimal-app.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/creating-minimal-app","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/getting-started/frameworks/react-native/creating-minimal-app","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/creating-minimal-app.md","tags":[],"version":"v8","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/getting-started/frameworks/react-native/creating-minimal-app"},"sidebar":"react-native","previous":{"title":"Getting started with React Native THEOplayer","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/getting-started/frameworks/react-native/getting-started"},"next":{"title":"The THEOplayerView Component","permalink":"/documentation/pr-preview/pr-253/theoplayer/v8/getting-started/frameworks/react-native/theoplayerview-component"}}'),i=t("85893"),r=t("50065");let o={sidebar_position:1,slug:"/getting-started/frameworks/react-native/creating-minimal-app"},l="Creating a minimal demo app",s={},d=[{value:"Setting up a new project",id:"setting-up-a-new-project",level:2},{value:"Getting started on Android",id:"getting-started-on-android",level:2},{value:"Getting started on iOS and tvOS",id:"getting-started-on-ios-and-tvos",level:2},{value:"Getting started on Web",id:"getting-started-on-web",level:2},{value:"libraryConfiguration",id:"libraryconfiguration",level:3},{value:"Building and running the app",id:"building-and-running-the-app",level:2},{value:"Adding a user interface",id:"adding-a-user-interface",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"creating-a-minimal-demo-app",children:"Creating a minimal demo app"})}),"\n",(0,i.jsxs)(n.p,{children:["In this section we start from an empty React Native template, include a dependency to ",(0,i.jsx)(n.code,{children:"react-native-theoplayer"}),",\nand deploy it on an Android or iOS device."]}),"\n",(0,i.jsxs)(n.p,{children:["A user interface is added using the ",(0,i.jsx)(n.code,{children:"@theoplayer/react-native-ui"})," package."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-a-new-project",children:"Setting up a new project"}),"\n",(0,i.jsxs)(n.p,{children:["In the following steps we will be using ",(0,i.jsx)(n.code,{children:"npm"})," as the Node.js package manager."]}),"\n",(0,i.jsx)(n.p,{children:"First initialize a new project with a React Native app template:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ npx react-native init rntheodemo --template=react-native-template-typescript\n$ cd rntheodemo\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively use a template that also provides support for tvOS, as it will create a dependency to\n",(0,i.jsx)(n.code,{children:"react-native-tvos"}),", a fork of the main React Native branch:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ npx react-native init rntheodemo --template=react-native-template-typescript-tv@6.5.8-0\n$ cd rntheodemo\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, include the dependency to ",(0,i.jsx)(n.code,{children:"react-native-theoplayer"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ npm i\n$ npm i react-native-theoplayer\n"})}),"\n",(0,i.jsx)(n.p,{children:"or optionally specifying a specific version of the package:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ npm i react-native-theoplayer@<version>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note: depending on your node version, an extra ",(0,i.jsx)(n.code,{children:"--legacy-peer-deps"})," option has to be added:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ npm i react-native-theoplayer --legacy-peer-deps\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, replace the ",(0,i.jsx)(n.code,{children:"App.tsx"})," with this minimal code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport {Platform, View} from 'react-native';\nimport {PlayerConfiguration, SourceDescription, PlayerEventType, THEOplayer, THEOplayerView} from 'react-native-theoplayer';\n\nconst playerConfig: PlayerConfiguration = {\n  license: undefined,     // insert THEOplayer React Native license here\n};\n\nconst source: SourceDescription = {\n  sources: [\n    {\n      src: \"https://cdn.theoplayer.com/video/elephants-dream/playlist-single-audio.m3u8\",\n      type: \"application/x-mpegurl\"\n    },\n  ],\n};\n\nconst onReady = (player: THEOplayer) => {\n  player.autoplay = true\n  player.source = source;\n  player.addEventListener(PlayerEventType.ERROR, console.log);\n}\n\nconst App = () => {\n  return (\n    <View style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>\n      <THEOplayerView config={playerConfig} onPlayerReady={onReady}/>\n    </View>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When configuring a stream that is hosted on another server than ",(0,i.jsx)(n.code,{children:"cdn.theoplayer.com"}),",\na license for the React Native SDK needs to be obtained through the 'Licenses' built in the ",(0,i.jsx)(n.a,{href:"https://portal.theoplayer.com/",children:"THEOplayer portal"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"license_portal",src:t(14047).Z+"",width:"1999",height:"160"})}),"\n",(0,i.jsx)(n.h2,{id:"getting-started-on-android",children:"Getting started on Android"}),"\n",(0,i.jsxs)(n.p,{children:["After completing the ",(0,i.jsx)(n.a,{href:"#setting-up-a-new-project",children:"initial project setup"}),", which is shared for all platforms,\nthe following Gradle buildConfig fields can be used in your ",(0,i.jsx)(n.code,{children:"gradle.properties"})," file to override or\nset various Android-specific react-native-theoplayer options:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:"# Version of the (Android) THEOplayer SDK, if not specified, the latest available version is set.\n#THEOplayer_sdk=5.0.3\n\n# Override Android sdk versions\n#THEOplayer_compileSdkVersion = 33\n#THEOplayer_minSdkVersion = 21\n#THEOplayer_targetSdkVersion = 33\n\n# Toggle player event logging using tag 'VideoPlayer' (default: false)\n#THEOplayer_logPlayerEvents = true\n\n# Toggle playerView event logging using tag 'ReactTHEOplayerView' (default: false)\n#THEOplayer_logViewEvents = true\n\n# Toggle media session event logging (default: false)\n#THEOplayer_logMediaSessionEvents = true\n\n# Enable THEOplayer Extensions (default: disabled)\n#THEOplayer_extensionGoogleIMA = true\n#THEOplayer_extensionGoogleDAI = true\n#THEOplayer_extensionCast = true\n#THEOplayer_extensionMediaSession = true\n\n# Optionally limit timeUpdate rate, which could improve performance.\n# Possible values: (default: UNLIMITED)\n# - com.theoplayer.TimeUpdateRate.UNLIMITED\n# - com.theoplayer.TimeUpdateRate.LIMITED_ONE_HZ\n# - com.theoplayer.TimeUpdateRate.LIMITED_TWO_HZ\n# - com.theoplayer.TimeUpdateRate.LIMITED_THREE_HZ\n#THEOplayer_timeUpdateRate = com.theoplayer.TimeUpdateRate.LIMITED_TWO_HZ\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For optimal performance, make sure to build your app in release mode, and  optionally limit the number of ",(0,i.jsx)(n.code,{children:"timeupdate"}),"\nevents send by the player as shown in the config above. A ",(0,i.jsx)(n.code,{children:"timeupdate"})," event typically triggers a number of\nReact Native component updates and could affect performance in negative way."]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started-on-ios-and-tvos",children:"Getting started on iOS and tvOS"}),"\n",(0,i.jsx)(n.p,{children:"To define which extra THEOplayer integrations need to be loaded for additional features (currently: IMA ads and/or chromecast) a config file needs to be added to you application folder:"}),"\n",(0,i.jsxs)(n.p,{children:["Create a json file ",(0,i.jsx)(n.strong,{children:"[YourApplicationFolder]/react-native-theoplayer.json"}),", or ",(0,i.jsx)(n.strong,{children:"[YourApplicationFolder]/theoplayer-config.json"}),", on the same level as the node_modules folder (both alternatives offer the same functionality)."]}),"\n",(0,i.jsx)(n.p,{children:"Edit the file to reflect the features required for your application. The following example adds Google IMA, Chromecast and Sideloaded textTracks to the setup. If one of these is out of your applications scope, you can leave it out to reduce the app's size. When using only basic functionality, leave the features array empty."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n	"ios": {\n		"features": [\n			"GOOGLE_IMA",\n			"CHROMECAST",\n			"THEO_ADS",\n			"SIDELOADED_TEXTTRACKS"\n		]\n	}\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GOOGLE_IMA"}),": adds an additional dependency to the THEOplayer-Integration-GoogleIMA cocoapod that delivers the IMA functionality"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CHROMECAST"}),": adds an additional dependency to the THEOplayer-Integration-GoogleCast cocoapod that delivers the chromecast functionality"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"THEO_ADS"}),": adds an additional dependency to the THEOplayer-Integration-TheoAds cocoapod that delivers Server Guided Ad Insertion (SGAI) functionality"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SIDELOADED_TEXTTRACKS"}),": adds an additional dependency to the THEOplayer-Connector-SideloadedSubtitle cocoapod that delivers the sideloaded texttracks functionality"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once the project has been setup correctly, set the source to a valid HLS stream, eg."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const source = {\n  sources: [\n    {\n      src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',\n      type: 'application/x-mpegurl',\n    },\n  ],\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Some RN templates miss a specific Swift version setting for tvOS. To fix this add a custom build setting to your tvOS app target:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SWIFT_VERSION 5.0\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run pod install in your app's ios folder"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pod install\n"})}),"\n",(0,i.jsx)(n.h2,{id:"getting-started-on-web",children:"Getting started on Web"}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to first complete the ",(0,i.jsx)(n.a,{href:"#setting-up-a-new-project",children:"initial project setup"}),", which is shared for all platforms.\nDeploying a web app requires a little more work. The example uses ",(0,i.jsx)(n.a,{href:"https://necolas.github.io/react-native-web/",children:"react-native-web"})," to\nsupport web-based platforms, which translates React Native components to React DOM components.\nIn addition, the project relies on webpack to create the bundle that is loaded in the hosting web page."]}),"\n",(0,i.jsxs)(n.p,{children:["We refer to the ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v8/getting-started/frameworks/react-native/example-app",children:"example application"})," and its ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/develop/example/web/",children:"code"})," for a full demonstration."]}),"\n",(0,i.jsx)(n.h3,{id:"libraryconfiguration",children:"libraryConfiguration"}),"\n",(0,i.jsxs)(n.p,{children:["When passing the ",(0,i.jsx)(n.code,{children:"PlayerConfiguration"})," object while creating the player, the\n",(0,i.jsx)(n.a,{href:"https://www.theoplayer.com/docs/theoplayer/v7/api-reference/web/interfaces/PlayerConfiguration.html#libraryLocation",children:(0,i.jsx)(n.code,{children:"libraryConfiguration"})})," parameter specifies\nwhere the THEOplayer web worker files are located. The worker files are dynamically loaded and\nnecessary to play-out MPEG-TS based HLS streams. By default it is set to the location where npm installed THEOplayer\n('./node_modules/theoplayer')."]}),"\n",(0,i.jsx)(n.h2,{id:"building-and-running-the-app",children:"Building and running the app"}),"\n",(0,i.jsx)(n.p,{children:"Finally, build and deploy the app. Make sure an emulator is available, or there is a physical\ndevice connected to deploy to."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ npm run android\n$ npm run ios\n$ npm run web\n"})}),"\n",(0,i.jsx)(n.h2,{id:"adding-a-user-interface",children:"Adding a user interface"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"react-native-theoplayer"})," package does not contain a user interface by default. There is however a separate package\nthat builds a UI on top of the ",(0,i.jsx)(n.code,{children:"THEOplayerView"})," component, ",(0,i.jsx)(n.code,{children:"@theoplayer/react-native-ui"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["We refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-ui",children:"documentation"})," of\n",(0,i.jsx)(n.code,{children:"@theoplayer/react-native-ui"})," on how to install and use it."]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},14047:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/license_portal-b7f8c3d779e5f1ad28c8e3f1f3f2d6ad.png"},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var a=t(67294);let i={},r=a.createContext(i);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);