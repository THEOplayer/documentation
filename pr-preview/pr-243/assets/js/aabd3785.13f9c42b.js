"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["66609"],{15632:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>o,metadata:()=>i,assets:()=>r,toc:()=>u,contentTitle:()=>a});var i=JSON.parse('{"id":"getting-started/sdks/web/how-to-customize-quality-selection","title":"How to customize quality selection and labels on the default UI (MP4)","description":"Some of our customers prefer MP4 assets over HLS/MPEG-DASH ones. One major downside to this approach is that Adaptive Bitrate Streaming (ABR) is not possible with such streams, as they don\'t have a playlist with multiple qualities.","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/07-how-to-customize-quality-selection.md","sourceDirName":"getting-started/01-sdks/01-web","slug":"/getting-started/sdks/web/how-to-customize-quality-selection","permalink":"/documentation/pr-preview/pr-243/theoplayer/v7/getting-started/sdks/web/how-to-customize-quality-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/01-web/07-how-to-customize-quality-selection.md","tags":[],"version":"v7","sidebarPosition":7,"frontMatter":{},"sidebar":"web","previous":{"title":"How to work around browser cache with new THEOplayer SDK libraries?","permalink":"/documentation/pr-preview/pr-243/theoplayer/v7/getting-started/sdks/web/how-to-work-around-browser-cache-with-new-license"},"next":{"title":"How to get frame-accurate currentTime display in the UI Control bar","permalink":"/documentation/pr-preview/pr-243/theoplayer/v7/getting-started/sdks/web/how-to-get-frame-accurate-currentime-display"}}'),s=n("85893"),l=n("50065");let o={},a="How to customize quality selection and labels on the default UI (MP4)",r={},u=[{value:"SDKs",id:"sdks",level:2},{value:"Customizing the quality selector and labels",id:"customizing-the-quality-selector-and-labels",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS SDK",id:"ios-sdk",level:5}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"how-to-customize-quality-selection-and-labels-on-the-default-ui-mp4",children:"How to customize quality selection and labels on the default UI (MP4)"})}),"\n",(0,s.jsx)(t.p,{children:"Some of our customers prefer MP4 assets over HLS/MPEG-DASH ones. One major downside to this approach is that Adaptive Bitrate Streaming (ABR) is not possible with such streams, as they don't have a playlist with multiple qualities."}),"\n",(0,s.jsx)(t.p,{children:"To counter this, we've made it possible to pass on a list of MP4 qualities & switch between them manually, to improve the overall UX. What is nice about this piece of integration code, is that it can be tweaked and applied to customize other parts of the default UI as well!"}),"\n",(0,s.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"customizing-the-quality-selector-and-labels",children:"Customizing the quality selector and labels"}),"\n",(0,s.jsx)(t.p,{children:"This example explains how to customize quality selection & labels for MP4 assets."}),"\n",(0,s.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsxs)(t.p,{children:["First of all, we need to ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/v7/getting-started/sdks/web/getting-started",children:"set up the player"}),". Then, the different MP4 qualities of the same asset need to be stated, along with the corresponding resolutions:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// set your resolutions and sources\nvar resolutions = [\n  { name: '360p', src: 'https://example.com/demos/sample-videos/low.mp4' },\n  { name: '540p', src: 'https://example.com/demos/sample-videos/medium.mp4' },\n  { name: '720p', src: 'https://example.com/demos/sample-videos/high.mp4' },\n];\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now for the slightly trickier part: Removing current & adding custom menu"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"var currentTime, wasPaused;\nvar settingsMenu = player.ui.getChild('ControlBar').getChild('SettingsButton').menu;\n\n// Remove built-in quality sub menu\nsettingsMenu.removeMenuItem(settingsMenu.menuItems[0]);\n\n// Create custom quality sub menu\nvar qualityMenuItem = settingsMenu.addSubMenuItem({\n  index: 0,\n});\nvar qualityMenuTitle = document.createElement('span');\nqualityMenuTitle.className = 'theo-settings-control-menu-item-title';\nqualityMenuTitle.innerHTML = 'Quality';\nvar qualityMenuValue = document.createElement('span');\nqualityMenuValue.className = 'theo-settings-control-menu-item-value';\nqualityMenuItem.el().appendChild(qualityMenuTitle);\nqualityMenuItem.el().appendChild(qualityMenuValue);\nqualityMenuItem.subMenu.menuHeader.el().innerHTML = 'Quality';\nvar qualityItems = resolutions.map(function (resolution) {\n  var qualityItem = qualityMenuItem.subMenu.addMenuItem();\n  qualityItem.el().innerHTML = resolution.name;\n  qualityItem.on('click', function () {\n    selectQuality(resolution);\n  });\n  return qualityItem;\n});\n\n// Getting the player/UI in the correct state\nfunction selectQuality(resolution) {\n  qualityMenuValue.innerHTML = resolution.name;\n  currentTime = player.currentTime;\n  wasPaused = player.paused;\n  player.src = resolution.src;\n  player.currentTime = currentTime;\n  if (!wasPaused) {\n    player.play();\n  }\n  var qualityItem = qualityItems[resolutions.indexOf(resolution.name)];\n  qualityItems.forEach(function (item) {\n    item.selected(item === qualityItem);\n  });\n}\nselectQuality(resolutions[0]);\n"})}),"\n",(0,s.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,s.jsxs)(t.p,{children:["Android SDK does not have a built-in UI. It also does not support JavaScript injection. However, you can implement a similar custom quality selection menu using ",(0,s.jsx)(t.a,{href:"/open-video-ui/android/",children:"Open Video UI for Android"})," and following the same logic for Web SDK."]}),"\n",(0,s.jsx)(t.h5,{id:"ios-sdk",children:"iOS SDK"}),"\n",(0,s.jsx)(t.p,{children:"iOS SDK does not have a built-in UI. It also does not support JavaScript injection. However, you can implement a similar custom quality selection menu on your custom UI following the same logic for Web SDK."}),"\n",(0,s.jsx)(t.p,{children:"You can now select multiple qualities of the same MP4 asset!"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Customize quality selection",src:n(37073).Z+"",title:"Customize quality selection",width:"564",height:"424"})})]})}function c(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},37073:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/customize-quality-selection-e65dfce41a9308baad45748bb40589d8.png"},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var i=n(67294);let s={},l=i.createContext(s);function o(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);