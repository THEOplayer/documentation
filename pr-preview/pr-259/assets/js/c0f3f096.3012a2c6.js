"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["73434"],{34499:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"how-to-guides/ui/how-to-align-timeline-in-the-middle","title":"How to align the timeline in the middle","description":"This question is asked when developers want to change the appearance of the current time digits and duration digits in the seekbar. For example, instead of having it aligned on the left of the control bar, they might want to have it in the middle.","source":"@site/theoplayer/how-to-guides/11-ui/02-how-to-align-timeline-in-the-middle.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/how-to-align-timeline-in-the-middle","permalink":"/documentation/pr-preview/pr-259/theoplayer/how-to-guides/ui/how-to-align-timeline-in-the-middle","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/11-ui/02-how-to-align-timeline-in-the-middle.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"Is it possible to remove an element from the UI?","permalink":"/documentation/pr-preview/pr-259/theoplayer/how-to-guides/ui/is-it-possible-to-remove-an-element"},"next":{"title":"How to change the Big Play Button?","permalink":"/documentation/pr-preview/pr-259/theoplayer/how-to-guides/ui/how-to-change-big-play-button"}}'),o=n("85893"),r=n("50065");let s={},l="How to align the timeline in the middle",d={},a=[{value:"SDKs",id:"sdks",level:2},{value:"Approach #1",id:"approach-1",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"how-to-align-the-timeline-in-the-middle",children:"How to align the timeline in the middle"})}),"\n",(0,o.jsx)(t.p,{children:"This question is asked when developers want to change the appearance of the current time digits and duration digits in the seekbar. For example, instead of having it aligned on the left of the control bar, they might want to have it in the middle."}),"\n",(0,o.jsx)(t.p,{children:"Please note that this article isn't final."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Align timeline middle",src:n(13552).Z+"",title:"Align timeline middle",width:"579",height:"327"})}),"\n",(0,o.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Roku SDK"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Through CSS/JavaScript injection"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"Through CSS/JavaScript injection"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"approach-1",children:"Approach #1"}),"\n",(0,o.jsx)(t.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,o.jsx)(t.p,{children:"One approach is to create a new overlay. The code snippet below implements this strategy."}),"\n",(0,o.jsx)(t.p,{children:"CSS"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".custom-timeline {\n  display: none;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  line-height: 36px;\n  pointer-events: none;\n}\n\n.vjs-has-started .custom-timeline.show {\n  display: block;\n}\n\n.vjs-time-control {\n  display: none !important;\n}\n\n.theo-mobile .custom-timeline {\n  display: none;\n}\n\n.vjs-fullscreen .custom-timeline {\n  margin-bottom: 8px;\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"HTML and JS"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<div class="video-container video-js theoplayer-skin">\n  <div class="custom-timeline"><span class="current-time">00:00:00</span> / <span class="duration"></span></div>\n</div>\n<script>\n  var player = new THEOplayer.Player(element, playerConfig);\n  ...\n  function secondsToHms(d) {\n      d = Number(d);\n      var h = Math.floor(d / 3600);\n      var m = Math.floor(d % 3600 / 60);\n      var s = Math.floor(d % 3600 % 60);\n\n      var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "00:";\n      var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "00:";\n      var sDisplay = s;\n      return hDisplay + mDisplay + sDisplay;\n  }\n\n  player.addEventListener(\'timeupdate\', function(e) {\n      document.querySelector(\'.custom-timeline .current-time\').innerText = secondsToHms(Math.floor(e.currentTime));\n  })\n\n  player.addEventListener(\'durationchange\', function(e) {\n      document.querySelector(\'.custom-timeline .duration\').innerText = secondsToHms(Math.floor(e.duration));\n      document.querySelector(\'.custom-timeline\').classList.add(\'show\');\n  })\n  ...\n<\/script>\n'})}),"\n",(0,o.jsx)(t.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,o.jsx)(t.p,{children:"To achieve the same result on Android SDK, the same CSS need to be passed to your app."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Step 1"})}),"\n",(0,o.jsxs)(t.p,{children:["To learn how to inject CSS into your Android project, follow the guide ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"Android SDK Customization - Custom CSS and JavaScript files"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Step 2"})}),"\n",(0,o.jsx)(t.p,{children:"In the CSS and JavaScript files you created, add the code reported above in the Web SDK section."}),"\n",(0,o.jsx)(t.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsx)(t.p,{children:"To achieve the same result on iOS SDK, the same CSS need to be passed to your app."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Step 1"})}),"\n",(0,o.jsxs)(t.p,{children:["To learn how to inject CSS into your iOS project, follow the guide ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-259/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"iOS SDK Customization - Custom CSS and JavaScript files"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Step 2"})}),"\n",(0,o.jsx)(t.p,{children:"In the CSS and JavaScript files you created, add the code reported above in the Web SDK section."})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},13552:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/align-timeline-middle-66bdd5275fa323e16204484e31301562.png"},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var i=n(67294);let o={},r=i.createContext(o);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);