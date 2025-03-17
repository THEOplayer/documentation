"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["81245"],{89187:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"faq/why-does-currentime-seem-to-be-off","title":"Why does the currentTime seem off in my livestream & what can I do about it","description":"THEOplayer has a currentTime property, which returns you the current playback position in the video (in seconds). For VOD this works as you would expect. If you have a video, let it play for 30 seconds and query the currentTime, the player will report 30 seconds. However, if you start watching a livestream and query the currentTime after 30 seconds, you won\'t get 30 seconds reported. Nor will you get the time that would have elapsed if you watched the segments in the most recent manifest file until the point where you queried the currentTime. This might seem odd, but there\'s a very good reason for this, which we\'ll explain in a bit, along with some workarounds if you do want to use one of the aforementioned definitions of currentTime in a live streaming context.","source":"@site/theoplayer/faq/21-why-does-currentime-seem-to-be-off.md","sourceDirName":"faq","slug":"/faq/why-does-currentime-seem-to-be-off","permalink":"/documentation/pr-preview/pr-239/theoplayer/faq/why-does-currentime-seem-to-be-off","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/21-why-does-currentime-seem-to-be-off.md","tags":[],"version":"current","sidebarPosition":21,"frontMatter":{},"sidebar":"faq","previous":{"title":"Why are not all response headers exposed","permalink":"/documentation/pr-preview/pr-239/theoplayer/faq/why-are-not-all-response-headers-exposed"},"next":{"title":"How to remove CORS restrictions from a reproduction stream","permalink":"/documentation/pr-preview/pr-239/theoplayer/faq/how-to-remove-cors-restrictions"}}'),i=n("85893"),o=n("50065");let s={},a="Why does the currentTime seem off in my livestream & what can I do about it",l={},c=[];function h(e){let t={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"why-does-the-currenttime-seem-off-in-my-livestream--what-can-i-do-about-it",children:"Why does the currentTime seem off in my livestream & what can I do about it"})}),"\n",(0,i.jsx)(t.p,{children:"THEOplayer has a currentTime property, which returns you the current playback position in the video (in seconds). For VOD this works as you would expect. If you have a video, let it play for 30 seconds and query the currentTime, the player will report 30 seconds. However, if you start watching a livestream and query the currentTime after 30 seconds, you won't get 30 seconds reported. Nor will you get the time that would have elapsed if you watched the segments in the most recent manifest file until the point where you queried the currentTime. This might seem odd, but there's a very good reason for this, which we'll explain in a bit, along with some workarounds if you do want to use one of the aforementioned definitions of currentTime in a live streaming context."}),"\n",(0,i.jsx)(t.p,{children:"To calculate the currentTime, THEOplayer follows the HTML5 specification. However, for livestreams, this is not specified. Hence, if you try to use currentTime for synchronization between players, you'd get different behavior among different players. It's even possible to see different behavior among different streaming protocols in conjunction with the same player."}),"\n",(0,i.jsx)(t.p,{children:"The internal implementation THEOplayer uses, is constructed to never have a negative currentTime. A few things are being checked to ensure this:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Check if it's a VOD. In this case the timeline starts at 0"}),"\n",(0,i.jsx)(t.li,{children:"In case it's a live stream, there are two options"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"It's a live-EVENT stream"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Manifest contains ",(0,i.jsx)(t.code,{children:"EXT-X-PLAYLIST-TYPE: EVENT"})]}),"\n",(0,i.jsx)(t.li,{children:"All renditions started at the same time, so the first segment would have timestamp 0"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"It's a livestream with a DVR window"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"For these some players choose to start the 0-offset at the start of the first segment"}),"\n",(0,i.jsx)(t.li,{children:"However, segments are not necessarily aligned across multiple renditions:"}),"\n",(0,i.jsx)(t.li,{children:"Switching renditions can cause new content to become available before the start timestamps of the first rendition"}),"\n",(0,i.jsx)(t.li,{children:"Such a segments would halve a negative start timestamp"}),"\n",(0,i.jsx)(t.li,{children:"To avoid negative timestamps, THEOplayer keeps an offset of 3 target durations from the start as its zero-reference"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["How can you deal with this if you want to synchronize players or get a zero-based timestamp? You have ",(0,i.jsx)(t.strong,{children:"3 options"}),":"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Use ",(0,i.jsx)(t.code,{children:"EXT-X-PROGRAM-DATE-TIME"}),", which gives you an absolute time reference."]}),"\n",(0,i.jsxs)(t.li,{children:["Make your stream an event stream by including ",(0,i.jsx)(t.code,{children:"EXT-X-PLAYLIST-TYPE: EVENT"})," in the manifest"]}),"\n",(0,i.jsx)(t.li,{children:"Use the player's seekable property (which is based on the manifest) and query seekable.start(0) to find the starting time of your stream\n3.1 Attach an event listener for the 'durationchange' event (triggered the first time a media playlist is loaded)\n3.2 Upon this event, store player.seekable.start(0) in a variable 'timeOffset' and remove the eventlistener\n3.3 Subtract the value of 'timeOffset' from the player's currentTime to get a zero-based timestamp"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Here's a code snippet for option 3 :"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"function AbsoluteTimeline(player) {\n  var timeOffset = 0;\n\n  function durationchangeHandler() {\n    timeOffset = player.seekable.start(0);\n    player.removeEventListener('durationchange', durationchangeHandler);\n  }\n  player.addEventListener('durationchange', durationchangeHandler);\n\n  return {\n    getOffset: function () {\n      return timeOffset;\n    },\n    getCurrentTime: function () {\n      return player.currentTime - timeOffset;\n    },\n    seek: function (timestamp) {\n      player.currentTime = timestamp + timeOffset;\n    },\n  };\n}\n\nvar timeline = AbsoluteTimeline(player);\n"})})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var r=n(67294);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);