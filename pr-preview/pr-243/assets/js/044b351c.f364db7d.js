"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["56594"],{3567:function(e,i,t){t.r(i),t.d(i,{default:()=>p,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>r});var n=JSON.parse('{"id":"faq/possible-to-have-multiple-player-instances-at-same-time","title":"Is it possible to have multiple player instances play at the same time","description":"Yes, this is possible, provided there are enough bandwidth and RAM for this to work (considering both server and client side). Although we don\u2019t explicitly advise against this, we see how this could not be an ideal solution for the viewers. Please also keep in mind that this incurs into some limitations.","source":"@site/theoplayer/faq/51-possible-to-have-multiple-player-instances-at-same-time.md","sourceDirName":"faq","slug":"/faq/possible-to-have-multiple-player-instances-at-same-time","permalink":"/documentation/pr-preview/pr-243/theoplayer/faq/possible-to-have-multiple-player-instances-at-same-time","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/51-possible-to-have-multiple-player-instances-at-same-time.md","tags":[],"version":"current","sidebarPosition":51,"frontMatter":{},"sidebar":"faq","previous":{"title":"Why is my video not playing automatically","permalink":"/documentation/pr-preview/pr-243/theoplayer/faq/why-is-video-not-playing-automatically"},"next":{"title":"Is it a problem if the viewer pauses a live stream for longer than the DVR window","permalink":"/documentation/pr-preview/pr-243/theoplayer/faq/is-it-a-problem-if-viewer-pauses-live-stream-longer-than-dvr-window"}}'),o=t("85893"),a=t("50065");let s={},r="Is it possible to have multiple player instances play at the same time",l={},c=[{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function d(e){let i={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"is-it-possible-to-have-multiple-player-instances-play-at-the-same-time",children:"Is it possible to have multiple player instances play at the same time"})}),"\n",(0,o.jsx)(i.p,{children:"Yes, this is possible, provided there are enough bandwidth and RAM for this to work (considering both server and client side). Although we don\u2019t explicitly advise against this, we see how this could not be an ideal solution for the viewers. Please also keep in mind that this incurs into some limitations."}),"\n",(0,o.jsx)(i.p,{children:"If your use case reckons on having multiple player instances play at the same time, this is indeed possible. In addition to the concerns expressed above, some precautions are to be considered. In fact, you may want to:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"find an alternative solution for mobile devices and in case of slow connection or low RAM, not to aggravate the user experience"}),"\n",(0,o.jsx)(i.li,{children:"set to 0 the volume of all players (or all except one), to avoid cacophony"}),"\n",(0,o.jsx)(i.li,{children:"consider strategies to activate and pause player instances when they are not used (e.g.: when they are out of the visible portion of the screen) to reduce RAM and bandwidth consumption"}),"\n",(0,o.jsx)(i.li,{children:"check whether your use case can be achieved with gif replacing some of the player instances, especially in the case of short loop videos (e.g.: used as icons or to give a brief preview of your content)."}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"One other thing to take into account are the possible platform/browser limitations."}),"\n",(0,o.jsx)(i.p,{children:"From iOS-Specific Considerations:"}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:"Currently, all devices running iOS are limited to playback of a single audio or video stream at any time. Playing more than one video\u2014side by side, partly overlapping, or completely overlaid\u2014is not currently supported on iOS devices. Playing multiple simultaneous audio streams is also not supported. You can change the audio or video source dynamically, however."}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsx)(i.p,{children:"It is also worth mentioning that iOS loads a maximum of 16 (non-simultaneous) videos on a single web page and then gives a black display for any additional one. The page documenting this has disappeared (fall 2019), though, so this may have changed (or be changed) in newer iOS versions."}),"\n",(0,o.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsx)(i.p,{children:"The following resources provide more information:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW1",children:"https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW1"})}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return r},a:function(){return s}});var n=t(67294);let o={},a=n.createContext(o);function s(e){let i=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);