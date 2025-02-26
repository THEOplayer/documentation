"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["87574"],{53952:function(e,t,o){o.r(t),o.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"how-to-guides/ui/how-to-change-how-a-video-should-fit-inside-a-container","title":"How to change how a video should be fit inside a container","description":"This question is asked by developers who want to alter how a video should be sized inside the video\'s frame.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/11-ui/10-how-to-change-how-a-video-should-fit-inside-a-container.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/how-to-change-how-a-video-should-fit-inside-a-container","permalink":"/documentation/pr-preview/pr-224/theoplayer/v4/how-to-guides/ui/how-to-change-how-a-video-should-fit-inside-a-container","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/11-ui/10-how-to-change-how-a-video-should-fit-inside-a-container.md","tags":[],"version":"v4","sidebarPosition":10,"frontMatter":{},"sidebar":"roku","previous":{"title":"Customize UI during ad playback","permalink":"/documentation/pr-preview/pr-224/theoplayer/v4/how-to-guides/ui/customize-ui-during-playback"},"next":{"title":"How to make an audio-only player","permalink":"/documentation/pr-preview/pr-224/theoplayer/v4/how-to-guides/ui/how-to-make-audio-only-player"}}'),i=o("85893"),s=o("50065");let r={},a="How to change how a video should be fit inside a container",d={},l=[{value:"SDKs",id:"sdks",level:2},{value:"Code example",id:"code-example",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"iOS (tvOS) SDK",id:"ios-tvos-sdk",level:3}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"how-to-change-how-a-video-should-be-fit-inside-a-container",children:"How to change how a video should be fit inside a container"})}),"\n",(0,i.jsx)(t.p,{children:"This question is asked by developers who want to alter how a video should be sized inside the video's frame.\nBy default, a video player respects the aspect ratio the video."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"For example, due to size of the container/frame, black pillars appear on the sides of the container.\nInstead, you want your video to cover these black pillars, even though this"}),"\n",(0,i.jsx)(t.li,{children:"Cuts out content outside the box."}),"\n",(0,i.jsx)(t.li,{children:"Or deforms the content, and causing misalignment with the aspect-ratio."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Unverified through CSS/JavaScript injection"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"code-example",children:"Code example"}),"\n",(0,i.jsx)(t.p,{children:"The snippets below help you understand how you could attempt to implement this use case."}),"\n",(0,i.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsxs)(t.p,{children:["The CSS ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",children:(0,i.jsx)(t.code,{children:"object-fit"})})," property serves this use-case."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:".theoplayer-skin video {\n  object-fit: contain; /* default */\n  /* object-fit: cover; // content outside of the container, hence some content might be missing from the container */\n  /* object-fit: fill; // all content inside of the container, but the content might be deformed to be fitted inside of it */\n}\n\n/*\n// if you are doing object-fit: cover, and you don't want to show the content outside of the container, then do:\n.theoplayer-skin {\n    overflow-y: hidden;\n}\n// additionally, the object-position CSS property can help position the content, e.g.\n.theoplayer-skin video {\n    object-position: top;\n}\n*/\n"})}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, if you cannot use CSS for some reason, you could try to achieve the same through JavaScript."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const videos = document.querySelectorAll('.theoplayer-skin video');\nfor (let i = 0; i < videos.length; i++) {\n  videos[i].style.objectFit = 'cover';\n}\n"})}),"\n",(0,i.jsx)(t.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,i.jsxs)(t.p,{children:["For SDK version ",(0,i.jsx)(t.strong,{children:"3.6.1"})," and above, you can use the API described at ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/Player.html#setAspectRatio(AspectRatio)",children:"Player#setAspectRatio(AspectRatio)"})," to set the ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/android/com/theoplayer/android/api/player/AspectRatio.html",children:"AspectRatio"})," values."]}),"\n",(0,i.jsx)(t.p,{children:"The snippet below demonstrates how you could use this API:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"theoPlayerView.getPlayer().setAspectRatio(AspectRatio.FIT);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If you are using one of ",(0,i.jsx)(t.code,{children:"minApi21"}),", ",(0,i.jsx)(t.code,{children:"androidTV"})," or ",(0,i.jsx)(t.code,{children:"fireTV"})," SDK with version below 3.6.1, the Web SDK code above should be included in your Android (TV) project ."]}),"\n",(0,i.jsxs)(t.p,{children:["The article at ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-224/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})," explains how you can add CSS and JavaScript files to your project.\nThe sample project at ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-224/theoplayer/v4/how-to-guides/ui/how-to-insert-a-button",children:"How to insert a button"})," demonstrates this."]}),"\n",(0,i.jsx)(t.h3,{id:"ios-tvos-sdk",children:"iOS (tvOS) SDK"}),"\n",(0,i.jsxs)(t.p,{children:["You can use the API described at ",(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Protocols/Fullscreen_Objc.html#/c:@M@THEOplayerSDK@objc(pl)THEOplayerFullscreen(im)setAspectRatioWithAspectRatio:",children:"THEOplayerFullscreen"})," to set the ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/avfoundation/avplayerlayer/1388915-videogravity",children:"video gravity"})," values."]}),"\n",(0,i.jsx)(t.p,{children:"The snippet below demonstrates how you could use this API:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"theoplayer.fullscreen.setAspectRatio(aspectRatio: AspectRatio.fill)\n"})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,o){o.d(t,{Z:function(){return a},a:function(){return r}});var n=o(67294);let i={},s=n.createContext(i);function r(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);