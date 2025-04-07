"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["48297"],{41661:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"how-to-guides/ads/how-to-display-visual-cues","title":"How to display visual cues on the timeline to mark mid-rolls?","description":"You may ask this question if you want to let the user know when and how many mid-rolls there are during the video.","source":"@site/theoplayer_versioned_docs/version-v7/how-to-guides/01-ads/05-how-to-display-visual-cues.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/how-to-display-visual-cues","permalink":"/documentation/pr-preview/pr-259/theoplayer/v7/how-to-guides/ads/how-to-display-visual-cues","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/how-to-guides/01-ads/05-how-to-display-visual-cues.md","tags":[],"version":"v7","sidebarPosition":5,"frontMatter":{},"sidebar":"roku","previous":{"title":"Yospace","permalink":"/documentation/pr-preview/pr-259/theoplayer/v7/how-to-guides/ads/yospace"},"next":{"title":"FreeWheel","permalink":"/documentation/pr-preview/pr-259/theoplayer/v7/how-to-guides/ads/freewheel"}}'),s=t("85893"),r=t("50065");let o={},a="How to display visual cues on the timeline to mark mid-rolls?",d={},l=[{value:"Prerequisites and limitations",id:"prerequisites-and-limitations",level:2},{value:"The code",id:"the-code",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"how-to-display-visual-cues-on-the-timeline-to-mark-mid-rolls",children:"How to display visual cues on the timeline to mark mid-rolls?"})}),"\n",(0,s.jsx)(n.p,{children:"You may ask this question if you want to let the user know when and how many mid-rolls there are during the video."}),"\n",(0,s.jsx)(n.p,{children:"Similar questions may be:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Can I show where my ad is during the video?"}),"\n",(0,s.jsx)(n.li,{children:"How can I let the user know when the ads will be during the video like in YouTube?"}),"\n",(0,s.jsx)(n.li,{children:"Can ad markers be added to the timeline?"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Showing visual cues indicating the moment in which the ads will start is certainly useful. ",(0,s.jsx)(n.strong,{children:"This is not (yet) a THEOplayer standard feature, but what follows is a first step in that direction"}),". Please keep in mind that this solution is still in development and has to date several limitations."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites-and-limitations",children:"Prerequisites and limitations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It only works for THEOplayer ad integration"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A timeOffset for each roll must be included in the AdDescription"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"timeOffset values must be one of the following:"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"a keyword (\u201Cstart\u201D and \u201Cend\u201D allowed);"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"a number (seconds from video beginning);"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"undefined (which indicates a pre-roll)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"it has only been tested on Chrome, Firefox and Edge for Win 10 and with the standard THEOplayer UI."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"the-code",children:"The code"}),"\n",(0,s.jsx)(n.p,{children:"Add this line to your CSS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".adCue {\n  width: 0.3em;\n  height: 100%;\n  background-color: white;\n  position: absolute;\n  top: 0;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Your AdDescription should look something like this"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'player.source.ads: [\n    {\n        "sources": "path/to/your-pre/midroll1.xml",\n            "timeOffset": value //valid values: ["start", "end", numbers]\n    },\n    {\n        "sources": "path/to/your-pre/midroll2.xml",\n            "timeOffset": value //valid values: ["start", "end", numbers]\n    },\n    {...}\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Include (or call) this JavaScript snippet on your page:"}),"\n",(0,s.jsx)(n.p,{children:"THEOdisplayCues.js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"var adsPresent = !!player.source.ads;\nvar contentDuration = 0;\nvar to = [];\nvar checker = true;\nvar playedAds = [];\n\nplayer.addEventListener('pause', () => {\n  checker = false;\n});\nplayer.addEventListener('playing', () => {\n  var adIsPlaying = player.ads.playing;\n  detectTimeOffset();\n  detectDuration(adIsPlaying);\n  if (!checker) {\n    checker = adIsPlaying;\n  }\n  if (checker) {\n    !adIsPlaying ? drawCues() : destroyCues();\n  }\n});\n\nplayer.addEventListener('sourcechange', function () {\n  playedAds.length = 0;\n});\n\nplayer.ads.addEventListener('adend', (adEvent) => {\n  playedAds.push(adEvent.ad.adBreak.timeOffset);\n});\n\nfunction drawCues() {\n  var progressBar = element.querySelector('.vjs-progress-control.vjs-control');\n\n  for (var i = 0; i < to.length; i++) {\n    var timeOffset = to[i];\n\n    if (playedAds.indexOf(timeOffset) === -1) {\n      var left = (to[i] * progressBar.offsetWidth) / contentDuration;\n      var div = document.createElement('div');\n      div.setAttribute('to', to[i]);\n      div.classList.add('adCue');\n      div.style.left = left + 'px';\n      progressBar.children[0].appendChild(div);\n    }\n  }\n}\n\nfunction destroyCues() {\n  var cues = element.querySelectorAll('.vjs-progress-control.vjs-control .adCue');\n  for (cue of cues) {\n    cue.parentNode.removeChild(cue);\n  }\n}\n\nfunction detectDuration(adIsPlaying) {\n  if (!adIsPlaying) {\n    contentDuration = player.duration;\n    //console.log(\"Duration \",contentDuration)\n  }\n  var t = 0;\n  for (var ad of player.source.ads) {\n    to[t] = to[t] == 'end' ? contentDuration : to[t];\n    t++;\n  }\n}\n\nfunction detectTimeOffset() {\n  if (adsPresent) {\n    var t = 0;\n    for (var ad of player.source.ads) {\n      to[t] = ad.timeOffset == undefined ? 0 : ad.timeOffset == 'start' ? 0 : ad.timeOffset;\n      t++;\n    }\n  }\n  //console.log(\"TimeOffsets \",to);\n}\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var i=t(67294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);