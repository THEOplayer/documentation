"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["102"],{52660:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>a,assets:()=>r,toc:()=>s,contentTitle:()=>l});var a=JSON.parse('{"id":"how-to-guides/ui/how-to-make-audio-only-player","title":"How to make an audio-only player","description":"This article will tell you how to manipulate THEOplayer (Web) to make an audio-only interface, using only CSS and JavaScript. This applies also to mobile SDKs, where CSS and javascript can be injected (see Resources).","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/11-ui/11-how-to-make-audio-only-player.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/how-to-make-audio-only-player","permalink":"/documentation/pr-preview/pr-254/theoplayer/v6/how-to-guides/ui/how-to-make-audio-only-player","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/11-ui/11-how-to-make-audio-only-player.md","tags":[],"version":"v6","sidebarPosition":11,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to change how a video should be fit inside a container","permalink":"/documentation/pr-preview/pr-254/theoplayer/v6/how-to-guides/ui/how-to-change-how-a-video-should-fit-inside-a-container"},"next":{"title":"Customizing the UI: vertical volume slider","permalink":"/documentation/pr-preview/pr-254/theoplayer/v6/how-to-guides/ui/customising-vertical-volume-slider"}}'),A=t("85893"),i=t("50065");let o={},l="How to make an audio-only player",r={},s=[{value:"SDKs",id:"sdks",level:2},{value:"Making the audio player from the video player",id:"making-the-audio-player-from-the-video-player",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"1 - Add a new class to 2 HTML elements in the player",id:"1---add-a-new-class-to-2-html-elements-in-the-player",level:3},{value:"2 - Hide unnecessary buttons from the control bar",id:"2---hide-unnecessary-buttons-from-the-control-bar",level:3},{value:"3 - Hide content that might appear above the control bar",id:"3---hide-content-that-might-appear-above-the-control-bar",level:3},{value:"4- Decrease the player&#39;s height",id:"4--decrease-the-players-height",level:3},{value:"5 Ensure the control bar is always visible",id:"5-ensure-the-control-bar-is-always-visible",level:3},{value:"6 - Rescale the loading spinner",id:"6---rescale-the-loading-spinner",level:3},{value:"7 - Change appearance for when the stream is not yet loaded",id:"7---change-appearance-for-when-the-stream-is-not-yet-loaded",level:3},{value:"8 - (Optional) Add the audioOnly flag",id:"8---optional-add-the-audioonly-flag",level:3},{value:"Result",id:"result",level:3},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Sample application",id:"sample-application",level:2},{value:"Resources",id:"resources",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(n.header,{children:(0,A.jsx)(n.h1,{id:"how-to-make-an-audio-only-player",children:"How to make an audio-only player"})}),"\n",(0,A.jsxs)(n.p,{children:["This article will tell you how to manipulate THEOplayer (Web) to make an audio-only interface, using only CSS and JavaScript. This applies also to mobile SDKs, where CSS and javascript can be injected (see ",(0,A.jsx)(n.em,{children:"Resources"}),")."]}),"\n",(0,A.jsxs)(n.p,{children:["Going from this\n",(0,A.jsx)(n.img,{alt:"Audio Only",src:t(51279).Z+"",title:"Audio Only",width:"509",height:"289"})]}),"\n",(0,A.jsx)(n.p,{children:"to this"}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"Audio Only",src:t(86120).Z+"",title:"Audio Only",width:"511",height:"52"})}),"\n",(0,A.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,A.jsxs)(n.table,{children:[(0,A.jsx)(n.thead,{children:(0,A.jsxs)(n.tr,{children:[(0,A.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,A.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,A.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,A.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,A.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,A.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,A.jsx)(n.tbody,{children:(0,A.jsxs)(n.tr,{children:[(0,A.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,A.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified / Through CSS and JavaScript injection"}),(0,A.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified / Through CSS and JavaScript injection"}),(0,A.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,A.jsx)(n.td,{style:{textAlign:"center"},children:"Unverified / Through CSS and JavaScript injection"}),(0,A.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,A.jsx)(n.h2,{id:"making-the-audio-player-from-the-video-player",children:"Making the audio player from the video player"}),"\n",(0,A.jsx)(n.p,{children:"This section explains how to alter the default video player UI into the UI shown in the picture below, thus transforming a default THEOplayer instance in an audio player. This can, of course, be further customised to your liking to adapt to the rest of your implementation."}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"Audio Only",src:t(87642).Z+"",title:"Audio Only",width:"691",height:"47"})}),"\n",(0,A.jsx)(n.p,{children:"The alteration involves 8 steps:"}),"\n",(0,A.jsxs)(n.ol,{children:["\n",(0,A.jsx)(n.li,{children:"Add a new class to 2 HTML elements in the player (JavaScript)"}),"\n",(0,A.jsx)(n.li,{children:"Hide unnecessary buttons from the control bar (CSS)"}),"\n",(0,A.jsx)(n.li,{children:"Hide content that might appear above the control bar (CSS)"}),"\n",(0,A.jsx)(n.li,{children:"Decrease the player's height (CSS)"}),"\n",(0,A.jsx)(n.li,{children:"Ensure the control bar is always visible (CSS)"}),"\n",(0,A.jsx)(n.li,{children:"Rescale the loading spinner (CSS)"}),"\n",(0,A.jsx)(n.li,{children:"Change appearance for when the stream is not yet loaded (CSS)"}),"\n",(0,A.jsx)(n.li,{children:"(Optional) Add the audioOnly flag (JavaScript)"}),"\n"]}),"\n",(0,A.jsx)(n.p,{children:"In the following, you can find a description and a code example for each step."}),"\n",(0,A.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n",(0,A.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,A.jsx)(n.h3,{id:"1---add-a-new-class-to-2-html-elements-in-the-player",children:"1 - Add a new class to 2 HTML elements in the player"}),"\n",(0,A.jsx)(n.p,{children:"To comfortably provide the required CSS during the next steps, we add CSS classes to two HTML elements, respectively:"}),"\n",(0,A.jsxs)(n.ol,{children:["\n",(0,A.jsx)(n.li,{children:"'audioplayer' to the player element (select it using the 'vjs-fluid' class)"}),"\n",(0,A.jsx)(n.li,{children:"'audiocontrol' to the controls element (select it using the 'vjs-control-bar' class)"}),"\n"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-js",children:"function transformPlayer(forAudio) {\n  var player = document.querySelector('.vjs-fluid');\n  var controlbar = document.querySelector('.vjs-control-bar');\n  if (forAudio) {\n    player.classList.add('audioplayer');\n    controlbar.classList.add('audiocontrol');\n  } else {\n    player.classList.remove('audioplayer');\n    controlbar.classList.remove('audiocontrol');\n  }\n}\n"})}),"\n",(0,A.jsx)(n.h3,{id:"2---hide-unnecessary-buttons-from-the-control-bar",children:"2 - Hide unnecessary buttons from the control bar"}),"\n",(0,A.jsx)(n.p,{children:"There are a bunch of buttons in the control bar that might not be relevant for an audio-only stream. Hence, we hide the following buttons using CSS:"}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsx)(n.li,{children:"Subtitles button"}),"\n",(0,A.jsx)(n.li,{children:"Quality label"}),"\n",(0,A.jsx)(n.li,{children:"Audio menu"}),"\n",(0,A.jsx)(n.li,{children:"Settings menu"}),"\n",(0,A.jsx)(n.li,{children:"Fullscreen control"}),"\n",(0,A.jsx)(n.li,{children:"Cast button"}),"\n"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-css",children:".audiocontrol .vjs-icon-subtitles,\n.audiocontrol .theo-quality-label,\n.audiocontrol .vjs-icon-audio,\n.audiocontrol .vjs-icon-cog,\n.audiocontrol .vjs-fullscreen-control,\n.audiocontrol .theo-cast-button,\n.audioplayer video {\n  display: none !important;\n}\n"})}),"\n",(0,A.jsx)(n.h3,{id:"3---hide-content-that-might-appear-above-the-control-bar",children:"3 - Hide content that might appear above the control bar"}),"\n",(0,A.jsx)(n.p,{children:"Now we need to make sure no content appears above our controls. Again, we use CSS to hide elements:"}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsx)(n.li,{children:"Poster image"}),"\n",(0,A.jsx)(n.li,{children:"Video"}),"\n",(0,A.jsx)(n.li,{children:"Metadata (like song info)"}),"\n"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-css",children:".audiocontrol .theoplayer-poster,\n.audiocontrol .song-info,\n.audioplayer video {\n  display: none !important;\n}\n"})}),"\n",(0,A.jsx)(n.h3,{id:"4--decrease-the-players-height",children:"4- Decrease the player's height"}),"\n",(0,A.jsx)(n.p,{children:"Next up, decreasing the player height to 50px."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-css",children:".audioplayer {\n  padding: 0 !important;\n  height: 50px !important;\n}\n"})}),"\n",(0,A.jsx)(n.h3,{id:"5-ensure-the-control-bar-is-always-visible",children:"5 Ensure the control bar is always visible"}),"\n",(0,A.jsx)(n.p,{children:"By default, the control bar fades away to ensure better user experience for the video viewer. The following snippet ensures that the controls stay always visible."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-css",children:".audiocontrol.vjs-control-bar {\n  visibility: visible !important;\n  opacity: 1 !important;\n  display: flex !important;\n}\n"})}),"\n",(0,A.jsx)(n.h3,{id:"6---rescale-the-loading-spinner",children:"6 - Rescale the loading spinner"}),"\n",(0,A.jsx)(n.p,{children:"An optional step is to scale the loading icon that spins when the player stalls."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-css",children:".audioplayer .vjs-loading-spinner {\n  transform: scale(0.3) !important;\n}\n"})}),"\n",(0,A.jsx)(n.h3,{id:"7---change-appearance-for-when-the-stream-is-not-yet-loaded",children:"7 - Change appearance for when the stream is not yet loaded"}),"\n",(0,A.jsx)(n.p,{children:"We're almost there. We just need to remove the giant play-button that shows when the video hasn't started yet."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-css",children:":not(.vjs-has-started).audioplayer .vjs-big-play-button {\n  display: none !important;\n}\n"})}),"\n",(0,A.jsx)(n.p,{children:"Should we stop here, the audio player would show 0:00 / 0:00 as time information, since the stream is not yet loaded. This looks a bit clumsy, so we can hide it until the stream has started."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-css",children:":not(.vjs-has-started).audioplayer .vjs-current-time,\n:not(.vjs-has-started).audioplayer .vjs-time-divider,\n:not(.vjs-has-started).audioplayer .vjs-duration {\n  display: none !important;\n}\n\n.vjs-has-started .vjs-current-time,\n.vjs-has-started .vjs-time-divider,\n.vjs-has-started .vjs-duration {\n  display: flex !important;\n}\n"})}),"\n",(0,A.jsxs)(n.p,{children:["Note: if you preload the source (see ",(0,A.jsx)(n.em,{children:"Resources"}),"), hiding the time information before the player starts playing may not be needed, as the duration will be already available."]}),"\n",(0,A.jsx)(n.h3,{id:"8---optional-add-the-audioonly-flag",children:"8 - (Optional) Add the audioOnly flag"}),"\n",(0,A.jsx)(n.p,{children:"Finally, we recommend you to set the audioOnly flag to true in the player configuration. In that case, the player will use an audio element instead of a video element for media playback.\nThis is only supported for HLS streams for now. Otherwise, the player uses a video element instead.\nThis plays without any issue on most platforms, however we have noticed that Firefox doesn\u2019t handle video elements with height and width 0 well."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-js",children:"const player = new THEOplayer.Player(element, {\n  audioOnly: true,\n});\n"})}),"\n",(0,A.jsx)(n.h3,{id:"result",children:"Result"}),"\n",(0,A.jsx)(n.p,{children:"You should end up with a player that looks like this:"}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"Audio Only",src:t(93838).Z+"",title:"Audio Only",width:"686",height:"49"})}),"\n",(0,A.jsx)(n.p,{children:"You can further modify the audio player that you have at this point to better fit in your implementation."}),"\n",(0,A.jsx)(n.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,A.jsxs)(n.p,{children:["The Web SDK code should be included in your Android (TV) project. The article at ",(0,A.jsx)(n.a,{href:"/documentation/pr-preview/pr-254/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),"explains how you can add CSS and JavaScript files to your project."]}),"\n",(0,A.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,A.jsxs)(n.p,{children:["The Web SDK code should be included in your iOS project. The article at ",(0,A.jsx)(n.a,{href:"/documentation/pr-preview/pr-254/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})," explains how you can add CSS and JavaScript files to your project."]}),"\n",(0,A.jsx)(n.h2,{id:"sample-application",children:"Sample application"}),"\n",(0,A.jsx)(n.p,{children:"The demo below illustrates the transformation from video player to audio player."}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsxs)(n.li,{children:["Demo: ",(0,A.jsx)(n.a,{href:"http://cdn.theoplayer.com/demos/nus/audio-only.html",children:"http://cdn.theoplayer.com/demos/nus/audio-only.html"})]}),"\n"]}),"\n",(0,A.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsxs)(n.li,{children:[(0,A.jsx)(n.a,{href:"/documentation/pr-preview/pr-254/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),": How-to guide"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,A.jsx)(n,{...e,children:(0,A.jsx)(d,{...e})}):d(e)}},51279:function(e,n,t){t.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},86120:function(e,n,t){t.d(n,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf8AAAA0CAYAAACEqTF9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN2SURBVHhe7d0xSxx5HMdhCWIhiI2FBGLjO0hpZy0ptMlbSJvG0sLORoiCvQgWqQwWwglJFQvroIJgDsRCBEW0UNH8c785R1Z3PDDZXXPzf77woOvODCHNZzeOpiv9s66uLgAgA0X3xR8A8iH+AJAZ8QeAzIg/AGRG/AEgM+IPAJkRfwDIjPgDQGZ+Of4jIyMAwB+iqtWPEX8AqIGqVj9G/AGgBqpa/RjxB4AaqGr1Y345/gDA/5P4A0BmxB8AMiP+AJAZ8QeAzIg/AGRG/AEgM+IPAJkRfwDIjPgDQGayjP/w8HDx8fvf39OnT5/SwMBA0zEAUFdtif+rV6+e/HuGO2V2draIfnx+dnZW/AX8+PEjra6uNh0LAHUUa3n8JyYmiguvrKyk7u7uymOeQ4Q/tr+/XzyemppKl5eXxddiHz9+bDoHAOom1rb4x87Pz9Pbt28rj+ukMvyxMv6hp6cn/bW+fvtMSu/fv793HgDUTayt8S+3sbGR+vr6Ko9vt8bwx8r4Ly0tFfGPz/f29ornbm5uUn9//73zAaBOYh2Jf+zq6ipNTk5WntNKnz9/TicnJ3cerox/fM//6Ogo9fb2Fjf9Rfhjc3NzTdcEgLqIdSz+5XZ3d+/uuG+HiPt/rTH+senp6eJx+e5/Z2fn3vUAoE5iHY9/LN5lz8/PV57/u54a/2/fvhWP44a/WPxrQOP1AKBOYs8S/9iXL18qz/9dT41/+U5/cXGxeHx8fHzvegBQJ7GOx//09DS9efOm8txWeGr8P3z4UDyOFwGx+LZE4/UAoE5iHYt//DKd5eXl9OLFi8rzWmV7e7v4tkLp4Rrjf3FxkQYHB4u7/uOGxFj8FMDDawJAXcQ6Ev+Dg4P0+vXryuPbbW1t7fZP8e/K+K+vr6ehoaHi868bX2+fTXdfA4A6irU1/tfX12lmZqbyuE5qfAFQxr/U+HsAFhYW7j0HAHUTa1v84y76ly9fVh7zHMoXAGX8x8fH0+HhYfG12ObmZtM5AFA3sZbHP4L/7t27yueeW7wAeHjDXyxu9vuT/h8CAGiXWMvj/6cbGxsrPsaP9G1tbaXR0dGmYwCgrrKMf8k7fQBylHX8ASBH4g8AmRF/AMiM+ANAZsQfADIj/gCQGfEHgMyIPwBkRvwBIDN38TczM7N8Jv5mZmaZTfzNzMyyWko/AakVHpXdu7n/AAAAAElFTkSuQmCC"},87642:function(e,n,t){t.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},93838:function(e,n,t){t.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var a=t(67294);let A={},i=a.createContext(A);function o(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);