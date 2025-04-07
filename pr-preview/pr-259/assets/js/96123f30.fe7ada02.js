"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["99859"],{35982:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>s,toc:()=>l,contentTitle:()=>r});var i=JSON.parse('{"id":"how-to-guides/ui/customize-ui-during-playback","title":"Customize UI during ad playback","description":"This how-to guide describes how to customize the look and feel of the player when an advertisement is playing. We will be leveraging mainly some event listeners and CSS. In the section Resources, at the bottom of the page, you will also find links to the reference API and to a related how-to guide that explains when and how the texts displayed during ad playback (if any) may be changed.","source":"@site/theoplayer/how-to-guides/11-ui/09-customize-ui-during-playback.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/customize-ui-during-playback","permalink":"/documentation/pr-preview/pr-259/theoplayer/how-to-guides/ui/customize-ui-during-playback","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/11-ui/09-customize-ui-during-playback.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to change the default UI language to other","permalink":"/documentation/pr-preview/pr-259/theoplayer/how-to-guides/ui/how-to-change-default-UI-language-to-other"},"next":{"title":"How to change how a video should be fit inside a container","permalink":"/documentation/pr-preview/pr-259/theoplayer/how-to-guides/ui/how-to-change-how-a-video-should-fit-inside-a-container"}}'),a=t("85893"),d=t("50065");let o={},r="Customize UI during ad playback",s={},l=[{value:"SDKs",id:"sdks",level:2},{value:"How to customize the ad playback UI",id:"how-to-customize-the-ad-playback-ui",level:2},{value:"Detecting ad playback",id:"detecting-ad-playback",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Events",id:"events",level:3},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Android SDK",id:"android-sdk-1",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x-1",level:5},{value:"Displaying an advertisement label",id:"displaying-an-advertisement-label",level:3},{value:"Web SDK",id:"web-sdk-2",level:5},{value:"Android SDK",id:"android-sdk-2",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x-2",level:5},{value:"Adding a custom countdown",id:"adding-a-custom-countdown",level:3},{value:"Web SDK",id:"web-sdk-3",level:5},{value:"Android SDK",id:"android-sdk-3",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x-3",level:5}];function c(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"customize-ui-during-ad-playback",children:"Customize UI during ad playback"})}),"\n",(0,a.jsxs)(n.p,{children:["This how-to guide describes how to customize the look and feel of the player when an advertisement is playing. We will be leveraging mainly some event listeners and CSS. In the section ",(0,a.jsx)(n.em,{children:"Resources"}),", at the bottom of the page, you will also find links to the reference API and to a related how-to guide that explains when and how the texts displayed during ad playback (if any) may be changed."]}),"\n",(0,a.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Through CSS/JavaScript injection"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Through CSS/JavaScript injection"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"Through CSS/JavaScript injection"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-customize-the-ad-playback-ui",children:"How to customize the ad playback UI"}),"\n",(0,a.jsx)(n.p,{children:"You may want to alter the UI during ad playback, for example in order to hide some elements, to show some new elements or to change the aspect of existing ones. In the following, we will see some example related to this."}),"\n",(0,a.jsx)(n.h3,{id:"detecting-ad-playback",children:"Detecting ad playback"}),"\n",(0,a.jsx)(n.p,{children:"There are two general approaches to detect advertisement playback:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["A responsive approach using a ",(0,a.jsx)(n.strong,{children:"CSS rule"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["A programmatic approach using ",(0,a.jsx)(n.strong,{children:"events"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsxs)(n.p,{children:["Whenever you create a THEOplayer instance, you need to provide a DOM-element which will be the container of the player (for more information regarding this, see Resources). This container gains the ",(0,a.jsx)(n.code,{children:".theo-ad-playing"})," class whenever an advertisement is playing. Through CSS, you could use this class to enforce certain behavior. For example, you could hide the fullscreen button if an ad is playing."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:".theo-ad-playing .vjs-fullscreen-control {\n  display: none !important;\n}\n"})}),"\n",(0,a.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,a.jsxs)(n.p,{children:["The Web SDK code should be included in your Android (TV) project.\nThe article at ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})," explains how you can add CSS and JavaScript files to your project. The sample project at ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-259/theoplayer/how-to-guides/ui/how-to-insert-a-button",children:"How to insert a button"})," demonstrates this."]}),"\n",(0,a.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsxs)(n.p,{children:["The Web SDK code should be included in your iOS project. The article at ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})," explains how you can add CSS and JavaScript files to your project. The sample project at ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-259/theoplayer/how-to-guides/ui/how-to-insert-a-button",children:"How to insert a button"})," demonstrates this."]}),"\n",(0,a.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/Ads.html",children:"Ads API"})," exposes, among others, the following events:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"adbegin"}),": dispatched when an ad starts"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"adend"}),": dispatched when an ad ends"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"adbreakbegin"}),": dispatched when an ad break (or ad slot) starts"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"adbreakend"}),": dispatched when an ad break ends"]}),"\n"]}),"\n",(0,a.jsx)(n.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,a.jsx)(n.p,{children:"The snippet below demonstrates how you could detect the start of an adbreak through a JavaScript event listener."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"player.ads.addEventListener('adbreakbegin', console.log);\n"})}),"\n",(0,a.jsx)(n.p,{children:"These events can be used to trigger a certain behavior programmatically."}),"\n",(0,a.jsx)(n.h5,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,a.jsx)(n.p,{children:"// work in progress"}),"\n",(0,a.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x-1",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsx)(n.p,{children:"// work in progress"}),"\n",(0,a.jsx)(n.h3,{id:"displaying-an-advertisement-label",children:"Displaying an advertisement label"}),"\n",(0,a.jsx)(n.h5,{id:"web-sdk-2",children:"Web SDK"}),"\n",(0,a.jsx)(n.p,{children:"The snippet below demonstrates how to add a label to the control bar during ad playback using CSS and JavaScript."}),"\n",(0,a.jsx)(n.p,{children:"CSS"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:".theo-ad-playing .theo-advert-label {\n  display: block !important;\n}\n\n.theo-ad-playing .vjs-fullscreen-control {\n  display: none !important;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"JavaScript"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"var button = THEOplayer.videojs.getComponent('Button');\nvar myButton = THEOplayer.videojs.extend(button, {\n  constructor: function () {\n    button.apply(this, arguments);\n    this.el().innerHTML = 'Ad';\n  },\n  handleClick: function () {\n    elementContainer.classList.toggle('hidden');\n  },\n  buildCSSClass: function () {\n    return 'theo-advert-label';\n  },\n});\nTHEOplayer.videojs.registerComponent('AdvertLabelButton', myButton);\nplayer.ui.getChild('controlBar').addChild('AdvertLabelButton', {});\n"})}),"\n",(0,a.jsx)(n.h5,{id:"android-sdk-2",children:"Android SDK"}),"\n",(0,a.jsx)(n.p,{children:"// work in progress"}),"\n",(0,a.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x-2",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsx)(n.p,{children:"// work in progress"}),"\n",(0,a.jsx)(n.h3,{id:"adding-a-custom-countdown",children:"Adding a custom countdown"}),"\n",(0,a.jsx)(n.h5,{id:"web-sdk-3",children:"Web SDK"}),"\n",(0,a.jsx)(n.p,{children:"The snippet below demonstrates how to add a countdown timer using primarily JavaScript."}),"\n",(0,a.jsx)(n.p,{children:"CSS"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:".theo-ad-countdown {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 5em;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"JavaScript"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"function updateTime() {\n  var countdown = document.querySelector('.theo-ad-countdown');\n  if (countdown) {\n    countdown.innerHTML = Math.round(player.duration - player.currentTime);\n  }\n}\n\nplayer.ads.addEventListener('adbegin', function (e) {\n  var countdown = document.createElement('div');\n  countdown.className = 'theo-ad-countdown';\n  countdown.innerHTML = player.duration;\n  element.appendChild(countdown);\n\n  player.addEventListener('timeupdate', updateTime);\n});\n\nplayer.ads.addEventListener('adend', function (e) {\n  var countdown = document.querySelector('.theo-ad-countdown');\n  if (countdown) {\n    player.removeEventListener('timeupdate', updateTime);\n    element.removeChild(countdown);\n  }\n});\n"})}),"\n",(0,a.jsx)(n.h5,{id:"android-sdk-3",children:"Android SDK"}),"\n",(0,a.jsx)(n.p,{children:"// work in progress"}),"\n",(0,a.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x-3",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsx)(n.p,{children:"// work in progress"})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var i=t(67294);let a={},d=i.createContext(a);function o(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);