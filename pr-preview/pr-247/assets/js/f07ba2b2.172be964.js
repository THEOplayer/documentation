"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["50810"],{737:function(e,t,o){o.r(t),o.d(t,{default:()=>c,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"how-to-guides/ui/how-to-insert-a-button","title":"How to insert a button","description":"This article provides information on how developers can add custom buttons to THEOplayer\'s default UI.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/11-ui/07-how-to-insert-a-button.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/how-to-insert-a-button","permalink":"/documentation/pr-preview/pr-247/theoplayer/v7/how-to-guides/ui/how-to-insert-a-button","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/11-ui/07-how-to-insert-a-button.md","tags":[],"version":"v7","sidebarPosition":7,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to build a Chromeless UI","permalink":"/documentation/pr-preview/pr-247/theoplayer/v7/how-to-guides/ui/how-to-build-chromeless-ui"},"next":{"title":"How to change the default UI language to other","permalink":"/documentation/pr-preview/pr-247/theoplayer/v7/how-to-guides/ui/how-to-change-default-UI-language-to-other"}}'),s=o("85893"),i=o("50065");let r={},a="How to insert a button",d={},l=[{value:"Code example",id:"code-example",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android SDK",id:"android-sdk",level:3},{value:"iOS SDK",id:"ios-sdk",level:3},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:3},{value:"Legacy iOS SDK (4.12.x)",id:"legacy-ios-sdk-412x",level:3},{value:"Sample resources",id:"sample-resources",level:2},{value:"Other resources",id:"other-resources",level:2}];function u(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"how-to-insert-a-button",children:"How to insert a button"})}),"\n",(0,s.jsxs)(t.p,{children:["This article provides information on how developers can add custom buttons to THEOplayer's ",(0,s.jsx)(t.strong,{children:"default UI"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"THEOplayer's default UI is based on VideoJS. A WebView is used on the legacy Android and iOS SDKs (4.12.x). HTML, CSS and JavaScript is used to insert a button."}),"\n",(0,s.jsxs)(t.p,{children:["When using the legacy Android or iOS SDKs (4.12.x), THEOplayer exposes a system to include JavaScript and CSS files (as described at ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-247/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"}),"). This system allows developers to re-use their code-logic."]}),"\n",(0,s.jsx)(t.h2,{id:"code-example",children:"Code example"}),"\n",(0,s.jsx)(t.p,{children:"This code example adds 2 time-jump buttons to the control bar. A button to go back 10 seconds in time should be positioned to the left of the play-button, and a button to go forward 10 seconds in time should be positioned to the right of the play-button."}),"\n",(0,s.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,s.jsxs)(t.p,{children:["The buttons use the ",(0,s.jsx)(t.a,{href:"http://fontawesome.io/",children:"Font Awesome"})," icon set. This means that we first need to include the Font Awesome CSS stylesheet."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<link rel="stylesheet" type="text/css" href="http://cdn.theoplayer.com/demos/font-awesome/css/font-awesome.min.css" />\n'})}),"\n",(0,s.jsx)(t.p,{children:"The code below inserts two buttons in the control bar, lets viewers jump in time when it is clicked, and adds a tooltip to the button."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// setting up the rewind button by setting up a video-js component\nvar Button = THEOplayer.videojs.getComponent('Button');\nvar RewindButton = THEOplayer.videojs.extend(Button, {\n  constructor: function () {\n    Button.apply(this, arguments);\n    /* initialize your button */\n    // this.el() = created DOM-element\n\n    // add tooltip\n    var tooltipSpan = document.createElement('span');\n    tooltipSpan.className = 'theo-button-tooltip vjs-hidden';\n    tooltipSpan.innerText = 'Go back 10 seconds';\n    function toggleTooltip() {\n      tooltipSpan.classList.toggle('vjs-hidden');\n    }\n    this.el().addEventListener('mouseover', toggleTooltip);\n    this.el().addEventListener('mouseout', toggleTooltip);\n    this.el().appendChild(tooltipSpan);\n  },\n  handleClick: () => {\n    player.currentTime -= 10;\n  },\n  buildCSSClass: function () {\n    return 'fa fa-step-backward vjs-button'; // insert all class names here\n  },\n});\nTHEOplayer.videojs.registerComponent('RewindButton', RewindButton);\nplayer.ui.getChild('controlBar').addChild('RewindButton', {});\n\n// setting up the forward button by setting up a video-js component\nvar Button = THEOplayer.videojs.getComponent('Button');\nvar ForwardButton = THEOplayer.videojs.extend(Button, {\n  constructor: function () {\n    Button.apply(this, arguments);\n    /* initialize your button */\n    // this.el() = created DOM-element\n\n    // add tooltip\n    var tooltipSpan = document.createElement('span');\n    tooltipSpan.className = 'theo-button-tooltip vjs-hidden';\n    tooltipSpan.innerText = 'Go forward 10 seconds';\n    function toggleTooltip() {\n      tooltipSpan.classList.toggle('vjs-hidden');\n    }\n    this.el().addEventListener('mouseover', toggleTooltip);\n    this.el().addEventListener('mouseout', toggleTooltip);\n    this.el().appendChild(tooltipSpan);\n  },\n  handleClick: () => {\n    player.currentTime += 10;\n  },\n  buildCSSClass: function () {\n    return 'fa fa-step-forward vjs-button'; // insert all class names here\n  },\n});\nTHEOplayer.videojs.registerComponent('ForwardButton', ForwardButton);\nplayer.ui.getChild('controlBar').addChild('ForwardButton', {});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You could add ",(0,s.jsx)(t.code,{children:"vjs-control"})," to the return-string of ",(0,s.jsx)(t.code,{children:"buildCSSClass"})," to make the button more similar to the default buttons."]}),"\n",(0,s.jsx)(t.p,{children:"Finally, you can adjust the position of the custom buttons with the order attribute, and force the cursor to use a pointer."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:".fa-step-backward {\n  order: -101; /* to the left of the play/pause-button */\n  cursor: pointer;\n}\n.fa-step-forward {\n  order: -100; /* to the right of the play/pause-button */\n  cursor: pointer;\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"android-sdk",children:"Android SDK"}),"\n",(0,s.jsx)(t.p,{children:"Since JavaScript injection is not available on the native Android SDK, you can add a button in a native way to the platform and use THEOplayer APIs for its function."}),"\n",(0,s.jsx)(t.h3,{id:"ios-sdk",children:"iOS SDK"}),"\n",(0,s.jsx)(t.p,{children:"Since JavaScript injection is not available on the native iOS SDK, you can add a button in a native way to the platform and use THEOplayer APIs for its function."}),"\n",(0,s.jsx)(t.h3,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-247/theoplayer/v4/how-to-guides/ui/how-to-insert-a-button#android-sdk",children:"our version 4 documentation"})," for more information."]}),"\n",(0,s.jsx)(t.h3,{id:"legacy-ios-sdk-412x",children:"Legacy iOS SDK (4.12.x)"}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-247/theoplayer/v4/how-to-guides/ui/how-to-insert-a-button#ios-sdk",children:"our version 4 documentation"})," for more information."]}),"\n",(0,s.jsx)(t.h2,{id:"sample-resources",children:"Sample resources"}),"\n",(0,s.jsx)(t.p,{children:"The pages or projects below demonstrate implementations of similar use cases."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Web SDK - Demo Page: ",(0,s.jsx)(t.a,{href:"https://www.theoplayer.com/theoplayer-demo-adding-buttons-to-the-ui-with-custom-logic",children:"https://www.theoplayer.com/theoplayer-demo-adding-buttons-to-the-ui-with-custom-logic"})]}),"\n",(0,s.jsxs)(t.li,{children:["Web SDK - Sample App: ",(0,s.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-html5-sdk/tree/master/reference-apps/ui-adding-buttons",children:"https://github.com/THEOplayer/samples-html5-sdk/tree/master/reference-apps/ui-adding-buttons"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"other-resources",children:"Other resources"}),"\n",(0,s.jsx)(t.p,{children:"The samples below demonstrate how to implement a custom UI without injecting JavaScript into a WebView on mobile SDKs."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Android SDK - Custom UI Sample: ",(0,s.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-android-sdk/tree/master/Custom-UI",children:"https://github.com/THEOplayer/samples-android-sdk/tree/master/Custom-UI"})]}),"\n",(0,s.jsxs)(t.li,{children:["iOS SDK - Custom UI Sample: ",(0,s.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Custom-UI",children:"https://github.com/THEOplayer/samples-ios-sdk/tree/master/Custom-UI"})]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},50065:function(e,t,o){o.d(t,{Z:function(){return a},a:function(){return r}});var n=o(67294);let s={},i=n.createContext(s);function r(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);