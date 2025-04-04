"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["38242"],{55426:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"getting-started/sdks/ios/migrating-to-theoplayer-8","title":"Migrating to THEOplayer iOS/tvOS SDK 8.x","description":"This article will guide your through updating from THEOplayer iOS/tvOS SDK version 8 (from version 7),","source":"@site/theoplayer_versioned_docs/version-v8/getting-started/01-sdks/03-ios/03-migrating-to-theoplayer-8.md","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/migrating-to-theoplayer-8","permalink":"/documentation/pr-preview/pr-256/theoplayer/v8/getting-started/sdks/ios/migrating-to-theoplayer-8","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/getting-started/01-sdks/03-ios/03-migrating-to-theoplayer-8.md","tags":[],"version":"v8","sidebarPosition":3,"frontMatter":{},"sidebar":"ios","previous":{"title":"Migration from THEOplayer iOS and tvOS SDK 4.x to THEOplayer iOS/tvOS SDK 5.0+","permalink":"/documentation/pr-preview/pr-256/theoplayer/v8/getting-started/sdks/ios/migration-from-4.x"},"next":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-256/theoplayer/v8/how-to-guides/"}}'),r=n("85893"),o=n("50065");let a={},s="Migrating to THEOplayer iOS/tvOS SDK 8.x",l={},d=[{value:"Update THEOplayer",id:"update-theoplayer",level:2},{value:"Update deployment target to 13.0 or higher",id:"update-deployment-target-to-130-or-higher",level:2},{value:"Objective-C support is deprecated",id:"objective-c-support-is-deprecated",level:2},{value:"API changes to THEOplayerSDK",id:"api-changes-to-theoplayersdk",level:2}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"migrating-to-theoplayer-iostvos-sdk-8x",children:"Migrating to THEOplayer iOS/tvOS SDK 8.x"})}),"\n",(0,r.jsx)(t.p,{children:"This article will guide your through updating from THEOplayer iOS/tvOS SDK version 8 (from version 7),\nand the changes needed in your code."}),"\n",(0,r.jsx)(t.h2,{id:"update-theoplayer",children:"Update THEOplayer"}),"\n",(0,r.jsx)(t.p,{children:"Update THEOplayer iOS/tvOS SDK to version 8 in your Podfile:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ruby",children:"target 'MyApp' do\n  pod 'THEOplayerSDK-core', '~> 8'\nend\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you're using one of ",(0,r.jsx)(t.a,{href:"/theoplayer/connectors/ios/",children:"our connectors"}),",\nmake sure to update them to the latest version too to ensure proper support for THEOplayer version 8."]}),"\n",(0,r.jsx)(t.h2,{id:"update-deployment-target-to-130-or-higher",children:"Update deployment target to 13.0 or higher"}),"\n",(0,r.jsxs)(t.p,{children:["In version 8, the minimum supported version of our iOS/tvOS SDK is raised from 12.0 to 13.0.\nThis decision was based on metrics provided by ",(0,r.jsx)(t.a,{href:"https://developer.apple.com/support/app-store/",children:"Apple's iOS usage measures by devices that transacted on the App\nStore"}),", which shows low number of usage of iOS 12."]}),"\n",(0,r.jsx)(t.p,{children:'In your Xcode project settings, make sure the "Deployment target" is set to 13.0 or higher.'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Screenshot of Xcode project settings",src:n(85065).Z+"",width:"1186",height:"807"})}),"\n",(0,r.jsx)(t.h2,{id:"objective-c-support-is-deprecated",children:"Objective-C support is deprecated"}),"\n",(0,r.jsx)(t.p,{children:"Starting with version 8, support for Objective-C is deprecated for all THEOplayer APIs.\nExisting APIs will still continue to work until the next major release, but additional support for new APIs will discontinue."}),"\n",(0,r.jsx)(t.p,{children:"When it was introduced, the goal of the Objective-C APIs was to provide bindings to bridge our native SDK to React Native.\nOver time, that became unneeded as React Native became capable to interact directly with Swift APIs."}),"\n",(0,r.jsx)(t.p,{children:"Please contact us for support in case your codebase relies on the Objective-C APIs."}),"\n",(0,r.jsx)(t.h2,{id:"api-changes-to-theoplayersdk",children:"API changes to THEOplayerSDK"}),"\n",(0,r.jsxs)(t.p,{children:["Two methods on the ",(0,r.jsx)(t.code,{children:"THEOplayer"})," API have been replaced with setter properties: ",(0,r.jsx)(t.code,{children:"setPreload"})," and ",(0,r.jsx)(t.code,{children:"setPlaybackRate"}),".\nThe following code snippets elaborate more on the changes."]}),"\n",(0,r.jsx)(t.p,{children:"Before 8.0:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"import THEOplayerSDK\n\nlet theoplayer: THEOplayer = .init()\ntheoplayer.setPreload(.auto)\ntheoplayer.source = ...\ntheoplayer.setPlaybackRate(2)\n"})}),"\n",(0,r.jsx)(t.p,{children:"After 8.0:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"import THEOplayerSDK\n\nlet theoplayer: THEOplayer = .init()\ntheoplayer.preload = .auto\ntheoplayer.source = ...\ntheoplayer.playbackRate = 2\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In the configuration side of the APIs, the initializer of ",(0,r.jsx)(t.code,{children:"THEOplayerConfiguration"})," has been replaced with a builder approach with ",(0,r.jsx)(t.code,{children:"THEOplayerConfigurationBuilder"}),". The same change is made also to ",(0,r.jsx)(t.code,{children:"PiPConfiguration"})," with ",(0,r.jsx)(t.code,{children:"PiPConfigurationBuilder"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Before 8.0:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"import THEOplayerSDK\n\nlet pipConfig: PiPConfiguration = .init(canStartPictureInPictureAutomaticallyFromInline: true)\nlet playerConfig: THEOplayerConfiguration = .init(pip: pipConfig)\nlet theoplayer: THEOplayer = .init(configuration: playerConfig)\n"})}),"\n",(0,r.jsx)(t.p,{children:"After 8.0:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"import THEOplayerSDK\n\nlet pipConfigBuilder: PiPConfigurationBuilder = .init()\npipConfigBuilder.canStartPictureInPictureAutomaticallyFromInline = true\n\nlet playerConfigBuilder: THEOplayerConfigurationBuilder = .init()\nplayerConfigBuilder.pip = pipConfigBuilder.build()\n\nlet theoplayer: THEOplayer = .init(configuration: playerConfigBuilder.build())\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Last but not least, ",(0,r.jsx)(t.code,{children:"AdsConfiguration"})," is removed, and so are ",(0,r.jsx)(t.code,{children:"GoogleDAIAdsConfiguration/GoogleDAIAdsConfigurationBuilder"})," and ",(0,r.jsx)(t.code,{children:"GoogleIMAAdsConfiguration/GoogleIMAConfigurationBuilder"}),".\nThe following code snippet will demonstrate how to configure the IMA configuration:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'import THEOplayerSDK\nimport THEOplayerGoogleIMAIntegration\nimport GoogleInteractiveMediaAds\n\nlet theoplayer: THEOplayer = .init()\n\nlet imaSettings: IMASettings = .init()\nimaSettings.enableBackgroundPlayback = true\nimaSettings.language = "es"\n\nlet imaIntegration: GoogleImaIntegration = GoogleIMAIntegrationFactory.createIntegration(on: theoplayer, with: imaSettings)\n\nlet renderingSettings: IMAAdsRenderingSettings = .init()\nrenderingSettings.uiElements = []\nimaIntegration.renderingSettings = renderingSettings\n\ntheoplayer.addIntegration(imaIntegration)\n'})})]})}function c(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85065:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/xcode-deployment-target-25c3050c19e8c7180e197d8d66e51d89.png"},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var i=n(67294);let r={},o=i.createContext(r);function a(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);