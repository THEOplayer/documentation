"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["61392"],{45031:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"getting-started/sdks/ios/migrating-to-theoplayer-9","title":"Migrating to THEOplayer iOS/tvOS SDK 9.x","description":"This article will guide you through updating from THEOplayer iOS/tvOS SDK version 9 (from version 8),","source":"@site/theoplayer/getting-started/01-sdks/03-ios/03-migrating-to-theoplayer-9.md","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/migrating-to-theoplayer-9","permalink":"/documentation/pr-preview/pr-259/theoplayer/getting-started/sdks/ios/migrating-to-theoplayer-9","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/getting-started/01-sdks/03-ios/03-migrating-to-theoplayer-9.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"ios","previous":{"title":"Migration from THEOplayer iOS and tvOS SDK 4.x to THEOplayer iOS/tvOS SDK 5.0+","permalink":"/documentation/pr-preview/pr-259/theoplayer/getting-started/sdks/ios/migration-from-4.x"},"next":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-259/theoplayer/how-to-guides/"}}'),i=n("85893"),o=n("50065");let a={},s="Migrating to THEOplayer iOS/tvOS SDK 9.x",d={},c=[{value:"Update THEOplayer",id:"update-theoplayer",level:2},{value:"Objective-C support has been removed",id:"objective-c-support-has-been-removed",level:2},{value:"API changes to THEOplayerSDK",id:"api-changes-to-theoplayersdk",level:2}];function l(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"migrating-to-theoplayer-iostvos-sdk-9x",children:"Migrating to THEOplayer iOS/tvOS SDK 9.x"})}),"\n",(0,i.jsx)(t.p,{children:"This article will guide you through updating from THEOplayer iOS/tvOS SDK version 9 (from version 8),\nand the changes needed in your code."}),"\n",(0,i.jsx)(t.h2,{id:"update-theoplayer",children:"Update THEOplayer"}),"\n",(0,i.jsx)(t.p,{children:"Update THEOplayer iOS/tvOS SDK to version 9 in your Podfile:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:"target 'MyApp' do\n  pod 'THEOplayerSDK-core', '~> 9'\nend\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If you're using one of ",(0,i.jsx)(t.a,{href:"/theoplayer/connectors/ios/",children:"our connectors"}),",\nmake sure to update them to the latest version too to ensure proper support for THEOplayer version 9."]}),"\n",(0,i.jsx)(t.h2,{id:"objective-c-support-has-been-removed",children:"Objective-C support has been removed"}),"\n",(0,i.jsxs)(t.p,{children:["In version 9, the THEOplayer API is no longer available through Objective-C.\nIt was ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v8/getting-started/sdks/ios/migrating-to-theoplayer-8#objective-c-support-is-deprecated",children:"deprecated since version 8"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"When it was introduced, the goal of the Objective-C APIs was to provide bindings to bridge our native SDK to React Native.\nOver time, that became unneeded as React Native became capable to interact directly with Swift APIs."}),"\n",(0,i.jsx)(t.h2,{id:"api-changes-to-theoplayersdk",children:"API changes to THEOplayerSDK"}),"\n",(0,i.jsxs)(t.p,{children:["Removing ",(0,i.jsx)(t.code,{children:"IntegrationType"})," in favor of using ",(0,i.jsx)(t.code,{children:"IntegrationKind"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-diff",children:"let theoLiveIntegration = THEOliveIntegrationFactory.createIntegration()\n\n- if theoLiveIntegration.type == .THEOlive {\n+ if theoLiveIntegration.kind == .THEOlive {\n   // ...\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Removing ",(0,i.jsx)(t.code,{children:"MillicastSource"})," initializer in favor of another one whose arguments are more clearly named:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-diff",children:'  let source: MillicastSource = .init(\n-     streamName: "streamName",\n+     src: "streamName",\n-     accountID: "accountID",\n+     streamAccountId: "accountID",\n-     token: token,\n+     subscriberToken: token,\n      connectOptions: clientOptions\n  )\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Replacing the ",(0,i.jsx)(t.code,{children:"TypedSource"})," initialize which takes a ",(0,i.jsx)(t.code,{children:"URL"})," object as a src with one that takes a URL ",(0,i.jsx)(t.code,{children:"String"})," instead:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-diff",children:'- var builder = URLComponents()\n- builder.scheme = "scheme"\n- builder.host = "host"\n- builder.path = "/path"\n- let src: TypedSource = .init(src: builder.url!)\n+ let src: TypedSource = .init(src: "scheme://host/path")\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"TextTrackCue"}),"'s ",(0,i.jsx)(t.code,{children:"uid"})," is converted to an ",(0,i.jsx)(t.code,{children:"Int"})," from a ",(0,i.jsx)(t.code,{children:"Double"}),". Its ",(0,i.jsx)(t.code,{children:"startTime"})," and ",(0,i.jsx)(t.code,{children:"endTime"})," properties have become non-null ",(0,i.jsx)(t.code,{children:"Double"}),"s"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"dai"})," property is removed from the ",(0,i.jsx)(t.code,{children:"Ads"})," object by default, and will only be available as an extension to the object when adding the ",(0,i.jsx)(t.code,{children:"GoogleIMAIntegration"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var r=n(67294);let i={},o=r.createContext(i);function a(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);