"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["32877"],{84051:function(e,t,a){a.r(t),a.d(t,{default:()=>h,frontMatter:()=>n,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"how-to-guides/mediatrack/how-to-reduce-data-usage-on-mobile-devices","title":"How to reduce data usage on mobile devices","description":"Customers that use THEOplayer in mobile web which leverage THEOplayer\'s preloading capabilities (preload = \\"auto\\"), or provide very high qualities, sometimes receive complaints about data usage.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/06-mediatrack/06-how-to-reduce-data-usage-on-mobile-devices.md","sourceDirName":"how-to-guides/06-mediatrack","slug":"/how-to-guides/mediatrack/how-to-reduce-data-usage-on-mobile-devices","permalink":"/documentation/pr-preview/pr-245/theoplayer/v7/how-to-guides/mediatrack/how-to-reduce-data-usage-on-mobile-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/06-mediatrack/06-how-to-reduce-data-usage-on-mobile-devices.md","tags":[],"version":"v7","sidebarPosition":6,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to start with a specific quality?","permalink":"/documentation/pr-preview/pr-245/theoplayer/v7/how-to-guides/mediatrack/how-to-start-with-specific-quality"},"next":{"title":"How to programmatically detect video track quality changes","permalink":"/documentation/pr-preview/pr-245/theoplayer/v7/how-to-guides/mediatrack/how-to-detect-video-track-quality-changes"}}'),o=a("85893"),r=a("50065");let n={},s="How to reduce data usage on mobile devices",l={},d=[{value:"Step-by-step guide",id:"step-by-step-guide",level:2},{value:"1. Set the ABR targetBuffer property to lower number of seconds",id:"1-set-the-abr-targetbuffer-property-to-lower-number-of-seconds",level:3},{value:"Web SDK",id:"web-sdk",level:4},{value:"Android SDK",id:"android-sdk",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:4},{value:"2. Manage preloading",id:"2-manage-preloading",level:3},{value:"Web SDK",id:"web-sdk-1",level:4},{value:"Android SDK",id:"android-sdk-1",level:4},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",level:4},{value:"3. Choose the renditions considered for ABR",id:"3-choose-the-renditions-considered-for-abr",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"how-to-reduce-data-usage-on-mobile-devices",children:"How to reduce data usage on mobile devices"})}),"\n",(0,o.jsxs)(t.p,{children:["Customers that use THEOplayer in mobile web which leverage THEOplayer's preloading capabilities (",(0,o.jsx)(t.code,{children:'preload = "auto"'}),"), or provide very high qualities, sometimes receive complaints about data usage."]}),"\n",(0,o.jsxs)(t.p,{children:["You can combat this by leveraging the ",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/ABRConfiguration.html",children:"ABR API"})," and the ",(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/MediaTrack.html",children:"MediaTrack API"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"step-by-step-guide",children:"Step-by-step guide"}),"\n",(0,o.jsx)(t.h3,{id:"1-set-the-abr-targetbuffer-property-to-lower-number-of-seconds",children:"1. Set the ABR targetBuffer property to lower number of seconds"}),"\n",(0,o.jsxs)(t.p,{children:["You can set the ",(0,o.jsx)(t.code,{children:"player.abr.targetBuffer"})," property, which allows you to configure the amount of seconds to buffer ahead of the current playback position. The standard buffer time is 20 seconds. Setting a lower number (e.g.: 6 seconds) allows you to download less information in front of the playhead position.\nThis value is also employed when preloading content."]}),"\n",(0,o.jsx)(t.h4,{id:"web-sdk",children:"Web SDK"}),"\n",(0,o.jsx)(t.p,{children:"The snippet below sets the targetBuffer to 6 seconds."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"player.abr.targetBuffer = 6;\n"})}),"\n",(0,o.jsx)(t.p,{children:"If necessary add a mobile check like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"if (THEOplayer.videojs.browser.IS_ANDROID || THEOplayer.videojs.browser.IS_IOS || ... ) {\n    player.abr.targetBuffer = 6;\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"This snippet leverages THEOplayer's Video.js component."}),"\n",(0,o.jsx)(t.h4,{id:"android-sdk",children:"Android SDK"}),"\n",(0,o.jsx)(t.p,{children:"The snippet below sets the targetBuffer to 6 seconds."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"theoplayer.getPlayer().getAbr().setTargetBuffer(6);\n"})}),"\n",(0,o.jsx)(t.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsx)(t.p,{children:"The iOS SDK does not allow you to change the targetBuffer. The iOS SDK's ABR API only allows you to change the ABRStrategyType."}),"\n",(0,o.jsx)(t.h3,{id:"2-manage-preloading",children:"2. Manage preloading"}),"\n",(0,o.jsx)(t.p,{children:"Preloading is a powerful feature when trying to reduce the Join Time. It is more effective in some situations than others and managing it correctly will help you reduce the data usage:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'preloading a live stream may entail appending in the buffer information that will never be played, if the user waits enough time before clicking "Play"'}),"\n",(0,o.jsx)(t.li,{children:"in those situations when a user is not yet likely to be playing a stream (e.g.: the player is not yet in view), preloading may also mean downloading information that the user will not consume."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"So, based on your use case, you might decide whether to enable preloading.\nThe following snippets showcase how to do so."}),"\n",(0,o.jsx)(t.h4,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"player.preload = 'auto'; // \"metadata\" is also a valid value\n"})}),"\n",(0,o.jsx)(t.h4,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"theoplayer.getPlayer().setPreload(PreloadType.AUTO);\n"})}),"\n",(0,o.jsx)(t.h4,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:"theoplayer.setPreload(.auto)\n"})}),"\n",(0,o.jsx)(t.h3,{id:"3-choose-the-renditions-considered-for-abr",children:"3. Choose the renditions considered for ABR"}),"\n",(0,o.jsxs)(t.p,{children:["On mobile devices, THEOplayer by default takes into account the player size for ABR: this lets it avoid selecting renditions too big to be appreciated on the current device, thus avoiding wasting data. As of THEOplayer 5.7, it is also possible to configure the SourceAbrConfiguration property ",(0,o.jsx)(t.code,{children:"restrictToPlayerSize"})," which also replicates this behaviour on laptop/desktop browsers."]}),"\n",(0,o.jsxs)(t.p,{children:["Leveraging the ",(0,o.jsx)(t.code,{children:"targetQuality"})," property of the MediaTrack API, you can refine the rendition choice further and indicate yourself to the player which qualities should be considered for ABR. For example, you could configure that THEOplayer should only do ABR on the lowest 3 qualities of a stream containing 5."]}),"\n",(0,o.jsx)(t.p,{children:"For further information about both strategies, please check the documentation linked below."}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(t.p,{children:"There are several actions that can be taken to drastically reduce data usage on mobile devices, both in the player and at other levels.\nAs far as the player is concerned, by leveraging its API as described you can filter different use cases and handle several aspects related to media download for each use case. This enables you to manage the precise behaviour in each case and optimize data usage."}),"\n",(0,o.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v7/how-to-guides/mediatrack/how-to-start-with-specific-quality",children:"How to start with a specific quality?"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v7/how-to-guides/mediatrack/how-to-select-video-track-quality",children:"How to programmatically select a video track quality"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v7/api-reference/web/interfaces/SourceAbrConfiguration.html#restrictToPlayerSize",children:"Web SDK API reference: restrictToPlayerSize"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-245/theoplayer/v7/how-to-guides/miscellaneous/preloading",children:"Preloading"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return n}});var i=a(67294);let o={},r=i.createContext(o);function n(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);