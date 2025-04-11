"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["7033"],{31328:function(e,i,n){n.r(i),n.d(i,{default:()=>d,frontMatter:()=>r,metadata:()=>l,assets:()=>o,toc:()=>c,contentTitle:()=>a});var l=JSON.parse('{"id":"how-to-guides/license/introduction","title":"Introduction","description":"This article explains how to configure the license at runtime.","source":"@site/theoplayer_versioned_docs/version-v8/how-to-guides/12-license/00-introduction.md","sourceDirName":"how-to-guides/12-license","slug":"/how-to-guides/license/introduction","permalink":"/documentation/pr-preview/pr-266/theoplayer/v8/how-to-guides/license/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/how-to-guides/12-license/00-introduction.md","tags":[],"version":"v8","sidebarPosition":0,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to disable click to pause","permalink":"/documentation/pr-preview/pr-266/theoplayer/v8/how-to-guides/ui/how-to-disable-click-to-pause"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-266/theoplayer/v8/how-to-guides/objective-C/introduction"}}'),s=n("85893"),t=n("50065");let r={},a="Introduction",o={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Web and Chromecast SDK",id:"web-and-chromecast-sdk",level:2},{value:"Passing the license through the PlayerConfiguration",id:"passing-the-license-through-the-playerconfiguration",level:4},{value:"iOS and tvOS SDK",id:"ios-and-tvos-sdk",level:2},{value:"Passing the license through the PlayerConfiguration",id:"passing-the-license-through-the-playerconfiguration-1",level:4},{value:"Passing the license through the Info.plist",id:"passing-the-license-through-the-infoplist",level:4},{value:"Android SDK",id:"android-sdk",level:2},{value:"Passing the license through the PlayerConfiguration",id:"passing-the-license-through-the-playerconfiguration-2",level:4},{value:"Passing the license through the manifest",id:"passing-the-license-through-the-manifest",level:4},{value:"FAQ",id:"faq",level:2},{value:"Why do I have to configure a license?",id:"why-do-i-have-to-configure-a-license",level:3},{value:"How do I avoid introducing any dependencies on THEOplayer servers?",id:"how-do-i-avoid-introducing-any-dependencies-on-theoplayer-servers",level:3},{value:"1. Loading a THEOplayer SDK from the THEOplayer CDN",id:"1-loading-a-theoplayer-sdk-from-the-theoplayer-cdn",level:5},{value:"2. Loading a THEOplayer license from the THEOplayer license system",id:"2-loading-a-theoplayer-license-from-the-theoplayer-license-system",level:5},{value:"Should I pass a license string or a license URL?",id:"should-i-pass-a-license-string-or-a-license-url",level:3},{value:"Should I update my application upon license renewal?",id:"should-i-update-my-application-upon-license-renewal",level:3},{value:"What happens if I don\u2019t timely update the license in my application?",id:"what-happens-if-i-dont-timely-update-the-license-in-my-application",level:3},{value:"Will I still be able to play offline content with my THEOplayer SDK if my license expires?",id:"will-i-still-be-able-to-play-offline-content-with-my-theoplayer-sdk-if-my-license-expires",level:3},{value:"What should I do to protect my license?",id:"what-should-i-do-to-protect-my-license",level:3}];function h(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,s.jsx)(i.p,{children:"This article explains how to configure the license at runtime."}),"\n",(0,s.jsx)(i.p,{children:"A THEOplayer license is required to use the THEOplayer library for the desired domains. The licensing schema was previously based on the built-in license from the SDK build. THEOplayer now allows to update the license without rebuilding or re-integrating the player SDK."}),"\n",(0,s.jsxs)(i.p,{children:["This guide builds upon the basic player setup, make sure you read our ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v8/getting-started/sdks/introduction",children:"getting-started guides"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Web SDK"}),(0,s.jsx)(i.th,{children:"Android SDK"}),(0,s.jsx)(i.th,{children:"iOS SDK"}),(0,s.jsx)(i.th,{children:"Android TV SDK"}),(0,s.jsx)(i.th,{children:"tvOS SDK"}),(0,s.jsx)(i.th,{children:"Chromecast SDK"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"Yes"})]})})]}),"\n",(0,s.jsx)(i.h2,{id:"web-and-chromecast-sdk",children:"Web and Chromecast SDK"}),"\n",(0,s.jsx)(i.p,{children:"THEOplayer is extended to allow configuring the license at runtime by just passing the license when a player is configured."}),"\n",(0,s.jsx)(i.h4,{id:"passing-the-license-through-the-playerconfiguration",children:"Passing the license through the PlayerConfiguration"}),"\n",(0,s.jsx)(i.p,{children:"This can be done in two ways:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Pass a license string for the player by setting it on the ",(0,s.jsx)(i.code,{children:"license"})," property:"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"var player = new THEOplayer.Player(element, {\n  // instantiates video player\n  libraryLocation: '/path/to/your-theoplayer-folder/',\n  license: 'your_license',\n});\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Pass a valid URL that can be used to fetch the license for the player by setting it on the ",(0,s.jsx)(i.code,{children:"licenseUrl"})," property:"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"var player = new THEOplayer.Player(element, {\n  // instantiates video player\n  libraryLocation: '/path/to/your-theoplayer-folder/',\n  licenseUrl: 'your_license_url',\n});\n"})}),"\n",(0,s.jsxs)(i.p,{children:["If the player is configured with either ",(0,s.jsx)(i.code,{children:"license"})," or ",(0,s.jsx)(i.code,{children:"licenseUrl"}),", the player will first validate the ",(0,s.jsx)(i.code,{children:"license"})," string. If license is either undefined or expired, the player will attempt to request the ",(0,s.jsx)(i.code,{children:"licenseUrl"})," instead, if no ",(0,s.jsx)(i.code,{children:"licenseUrl"})," is defined, then a default license Url will be used. If neither of these options is provided, the player will default to the built-in license in the SDK."]}),"\n",(0,s.jsx)(i.p,{children:"If no valid license can be found, the player will throw a license error."}),"\n",(0,s.jsx)(i.h2,{id:"ios-and-tvos-sdk",children:"iOS and tvOS SDK"}),"\n",(0,s.jsx)(i.p,{children:"When building an iOS application, a player license can be defined in one of the following ways:"}),"\n",(0,s.jsx)(i.h4,{id:"passing-the-license-through-the-playerconfiguration-1",children:"Passing the license through the PlayerConfiguration"}),"\n",(0,s.jsx)(i.p,{children:"Include the license parameter in the player configuration either by passing the license as a string or a license URL as shown below"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-swift",children:'// passing license as a string\nlet playerConfig = THEOplayerConfiguration(license: "your_license_here")\nvar theoplayer = THEOplayer(configuration: playerConfig)\n'})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-swift",children:'// passing license as a URL\nlet playerConfig = THEOplayerConfiguration(licenseUrl: "your_licenseUrl_here")\nvar theoplayer = THEOplayer(configuration: playerConfig)\n'})}),"\n",(0,s.jsx)(i.h4,{id:"passing-the-license-through-the-infoplist",children:"Passing the license through the Info.plist"}),"\n",(0,s.jsxs)(i.p,{children:["Define the same ",(0,s.jsx)(i.code,{children:"license"})," or a ",(0,s.jsx)(i.code,{children:"licenseUrl"})," as a new key in the ",(0,s.jsx)(i.code,{children:"Info.plist"})," file."]}),"\n",(0,s.jsxs)(i.p,{children:["Our iOS SDK allows configuring the license via Info.plist keys, which could be either ",(0,s.jsx)(i.code,{children:"THEOplayerLicense"})," or ",(0,s.jsx)(i.code,{children:"THEOplayerLicenseUrl"}),"."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"THEOplayerLicense"})," must be a license string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"THEOplayerLicenseUrl"})," must be a valid URL to a license server"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The license defined in the player configuration has higher precedence than the license provided in the ",(0,s.jsx)(i.code,{children:"Info.plist"}),". If neither of these are defined, then the built-in license will be used."]}),"\n",(0,s.jsx)(i.h2,{id:"android-sdk",children:"Android SDK"}),"\n",(0,s.jsx)(i.p,{children:"When building an Android application, a player license can be defined in one of the following ways:"}),"\n",(0,s.jsx)(i.h4,{id:"passing-the-license-through-the-playerconfiguration-2",children:"Passing the license through the PlayerConfiguration"}),"\n",(0,s.jsx)(i.p,{children:"Include the license parameter in the player configuration either by passing the license as a string or a license URL as described below"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:'// passing license as a string\npublic static THEOplayerConfig.Builder getTHEOplayerConfigBuilder() {\nreturn new THEOplayerConfig.Builder()\n    .license("your_license_here");\n}\n'})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:'// passing license as a URL\npublic static THEOplayerConfig.Builder getTHEOplayerConfigBuilder() {\nreturn new THEOplayerConfig.Builder()\n    .licenseUrl("your_licenseUrl_here");\n}\n'})}),"\n",(0,s.jsx)(i.h4,{id:"passing-the-license-through-the-manifest",children:"Passing the license through the manifest"}),"\n",(0,s.jsxs)(i.p,{children:["Define the same ",(0,s.jsx)(i.code,{children:"license"})," or a ",(0,s.jsx)(i.code,{children:"licenseUrl"})," as a new key in the app's manifest."]}),"\n",(0,s.jsxs)(i.p,{children:["Our Android SDK allows configuring the license via metadata keys, which could be either ",(0,s.jsx)(i.code,{children:"THEOPLAYER_LICENSE"})," or ",(0,s.jsx)(i.code,{children:"THEOPLAYER_LICENSE_URL"}),"."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"THEOPLAYER_LICENSE"})," must be a license string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"THEOPLAYER_LICENSE_URL"})," must be a valid URL to a license server"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The license defined in the player configuration has higher precedence than the license provided in the app's manifest. If neither of these are defined, then the built-in license will be used."}),"\n",(0,s.jsx)(i.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(i.h3,{id:"why-do-i-have-to-configure-a-license",children:"Why do I have to configure a license?"}),"\n",(0,s.jsx)(i.p,{children:"In order to provide THEOplayer insights if a stream can be played, it needs to have access to an active license. You can choose to either configure this license, or configure a URL where this license can be retrieved. If you are using an old SDK, it is also possible to have a license configured by default in the THEOplayer library itself. We recommend everyone to configure an active license or a license URL."}),"\n",(0,s.jsx)(i.h3,{id:"how-do-i-avoid-introducing-any-dependencies-on-theoplayer-servers",children:"How do I avoid introducing any dependencies on THEOplayer servers?"}),"\n",(0,s.jsx)(i.p,{children:"There are two important aspects which can introduce a dependency on THEOplayer servers:"}),"\n",(0,s.jsx)(i.h5,{id:"1-loading-a-theoplayer-sdk-from-the-theoplayer-cdn",children:"1. Loading a THEOplayer SDK from the THEOplayer CDN"}),"\n",(0,s.jsxs)(i.p,{children:["This issue is only relevant for the THEOplayer HTML5 / Tizen / webOS SDK. In order to avoid this dependency, we recommend to self-host your THEOplayer SDK. The easiest approach is to load the player through NPM, or download the player SDK as a zip-file from the developer portal. More information on how to self-host your player can be found ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v8/faq/self-hosting-theoplayer",children:"here"}),"."]}),"\n",(0,s.jsx)(i.h5,{id:"2-loading-a-theoplayer-license-from-the-theoplayer-license-system",children:"2. Loading a THEOplayer license from the THEOplayer license system"}),"\n",(0,s.jsx)(i.p,{children:"In order to avoid this dependency, it is important to always keep your license up to date, either by configuring an updated license or by configuring your own license URL. When your THEOplayer license expires, a new player instance will actively check against THEOplayer\u2019s license system if there is an updated license available. This system should however only serve as a fallback for applications which cannot be updated."}),"\n",(0,s.jsx)(i.h3,{id:"should-i-pass-a-license-string-or-a-license-url",children:"Should I pass a license string or a license URL?"}),"\n",(0,s.jsx)(i.p,{children:"We recommend our customers to use the license string whenever possible."}),"\n",(0,s.jsxs)(i.p,{children:["In special cases it is possible to use the license URL instead. Use-cases include contractual or legal (f.i privacy) requirements. For more information, please contact ",(0,s.jsx)(i.a,{href:"mailto:support@theoplayer.com",children:"support@theoplayer.com"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"If the player is configured both with a license string and license URL, it will first try to validate the license string. If the license string is either not configured or expired, the player will attempt to request the license URL instead. If no license URL is defined, then a default license URL will be used. If neither is defined, the player will default to the built-in license in the SDK. If no valid license can be found, the player will throw a license error."}),"\n",(0,s.jsx)(i.h3,{id:"should-i-update-my-application-upon-license-renewal",children:"Should I update my application upon license renewal?"}),"\n",(0,s.jsx)(i.p,{children:"Yes. After renewing your license, you should make sure to include the new THEOplayer license in your next app update."}),"\n",(0,s.jsx)(i.h3,{id:"what-happens-if-i-dont-timely-update-the-license-in-my-application",children:"What happens if I don\u2019t timely update the license in my application?"}),"\n",(0,s.jsxs)(i.p,{children:["The player will attempt to update the license up to 72 hours before expiration. For this, the player will request a new license either from the configured license URL or as a fallback (when there is no license URL configured) from ",(0,s.jsx)(i.code,{children:"validate.theoplayer.com"}),". Either way, if the request is successful, the player will store the license locally. We highly recommend you to self-host the license using the license URL in the player configuration."]}),"\n",(0,s.jsx)(i.p,{children:"For self-hosting, the license file with the latest license string for your application should be hosted. The full URL to this file should then be configured as the license URL in the player configuration."}),"\n",(0,s.jsx)(i.h3,{id:"will-i-still-be-able-to-play-offline-content-with-my-theoplayer-sdk-if-my-license-expires",children:"Will I still be able to play offline content with my THEOplayer SDK if my license expires?"}),"\n",(0,s.jsx)(i.p,{children:"When your license expires, THEOplayer will attempt to load an updated license. If an updated license is available, offline playback will still function. If no valid license is available, and no license server can be reached (due to the client being offline), the player will throw an error and stop playback. For this reason, it is important to always keep your license up to date."}),"\n",(0,s.jsx)(i.h3,{id:"what-should-i-do-to-protect-my-license",children:"What should I do to protect my license?"}),"\n",(0,s.jsxs)(i.p,{children:["The THEOplayer license you get from THEOportal is already an obfuscated string. If you want to protect your license, you need to make sure to configure your ",(0,s.jsx)(i.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v8/faq/page-and-source-domains",children:"page and source domains"})," to guarantee that your license string cannot be used anywhere other than the specified pages and/or with those source domains."]})]})}function d(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return r}});var l=n(67294);let s={},t=l.createContext(s);function r(e){let i=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(t.Provider,{value:i},e.children)}}}]);