"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["60675"],{8660:function(e,t,a){a.r(t),a.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>i,assets:()=>r,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"faq/why-is-video-not-playing-automatically","title":"Why is my video not playing automatically","description":"There is a wide variety of possible causes that bring to a video not being automatically played. These may have to do with autoplay policies, iframes, Media Engagement Index and more. Please read the full answer in this article for more information. Also, please keep in mind that this is not an extensive list of causes for autoplay failure and that, as time goes by, browsers autoplay management and autoplay policies may change.","source":"@site/theoplayer_versioned_docs/version-v4/faq/50-why-is-video-not-playing-automatically.md","sourceDirName":"faq","slug":"/faq/why-is-video-not-playing-automatically","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/faq/why-is-video-not-playing-automatically","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/50-why-is-video-not-playing-automatically.md","tags":[],"version":"v4","sidebarPosition":50,"frontMatter":{},"sidebar":"faq","previous":{"title":"Is it possible to preload VOD content while the pre-roll is playing","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/faq/preload-vod-content-when-pre-roll-is-playing"},"next":{"title":"Is it possible to have multiple player instances play at the same time","permalink":"/documentation/pr-preview/pr-266/theoplayer/v4/faq/possible-to-have-multiple-player-instances-at-same-time"}}'),o=a("85893"),n=a("50065");let l={},s="Why is my video not playing automatically",r={},d=[{value:"Play",id:"play",level:3},{value:"Autoplay policies",id:"autoplay-policies",level:3},{value:"Chrome Media Engagement Index (MEI)",id:"chrome-media-engagement-index-mei",level:3},{value:"Iframes",id:"iframes",level:3},{value:"iOS 11 and following",id:"ios-11-and-following",level:3},{value:"Resources",id:"resources",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"why-is-my-video-not-playing-automatically",children:"Why is my video not playing automatically"})}),"\n",(0,o.jsx)(t.p,{children:"There is a wide variety of possible causes that bring to a video not being automatically played. These may have to do with autoplay policies, iframes, Media Engagement Index and more. Please read the full answer in this article for more information. Also, please keep in mind that this is not an extensive list of causes for autoplay failure and that, as time goes by, browsers autoplay management and autoplay policies may change."}),"\n",(0,o.jsxs)(t.p,{children:["If you want your video to play automatically once the player is available, you should set the ",(0,o.jsx)(t.code,{children:"autoplay"})," feature to ",(0,o.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"However, sometimes this does not lead directly to the desired result: different issues may be preventing the automatic reproduction of your video. In the following we will be listing some of the most common causes for this."}),"\n",(0,o.jsx)(t.h3,{id:"play",children:"Play"}),"\n",(0,o.jsxs)(t.p,{children:["Some issues depend on the fact that autoplay is not really implemented, but the method ",(0,o.jsx)(t.code,{children:"play()"})," is called on the player instead. Although in specific cases this may work, we do not advise to use this instead of the autoplay, as often this is more strictly blocked by autoplay policies and may produce, in certain cases, desync with the UI buttons (e.g.: the button suggests that the stream is playing although it\u2019s not) or other issues."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Solution"}),": for autoplay behavior, use the provided ",(0,o.jsx)(t.code,{children:"autoplay"})," feature."]}),"\n",(0,o.jsx)(t.h3,{id:"autoplay-policies",children:"Autoplay policies"}),"\n",(0,o.jsx)(t.p,{children:"Different browsers have different autoplay policies. For the specifics, please consult the policies themselves, as they may get updated. In general, though, when an autoplay policy is applied, it is possible to still autoplay a video if the player is muted."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Solution"}),": to enable this, please use the ",(0,o.jsx)(t.code,{children:"mutedAutoplay"})," property in your player configuration and set it to ",(0,o.jsx)(t.code,{children:"all"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"chrome-media-engagement-index-mei",children:"Chrome Media Engagement Index (MEI)"}),"\n",(0,o.jsx)(t.p,{children:"On the desktop-version of Chrome (unmuted) autoplay may also appear not to be working on your web page (while it does on your localhost). In this case the problem may be due to the Media Engagement Index. The MEI measures an individual's propensity to consume media on a site. The MEI score is highest on sites where media are played on a regular basis. When it is high enough, media playback is allowed to autoplay on desktop only."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Solution"}),": the following article explains two ways to avoid this problem."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v4/faq/how-does-mei-affect-autoplay-on-chrome",children:"How does Media Engagement Index (MEI) affect Autoplay on Chrome?"})}),"\n",(0,o.jsx)(t.h3,{id:"iframes",children:"Iframes"}),"\n",(0,o.jsx)(t.p,{children:"When playing a video through an iframe, your autoplaying issues may be due to the iframe itself. In this case the issue comes from the fact that the iframe does not allow autoplay. Although this shouldn\u2019t be a common problem when using a player, there have been cases in which this piece of advice was useful."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Solution"}),": include the attribute ",(0,o.jsx)(t.code,{children:'allow="autoplay"'})," in your iframe."]}),"\n",(0,o.jsx)(t.h3,{id:"ios-11-and-following",children:"iOS 11 and following"}),"\n",(0,o.jsx)(t.p,{children:"Apple made it that from iOS 11 and onwards autoplay is automatically muted from the start and added some settings that can remove autoplay from any site."}),"\n",(0,o.jsx)(t.p,{children:"So it is possible that on your device autoplay is not working on Safari while it is working elsewhere."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Solution"}),": check if the feature is disabled on the device. If it's explicitly disabled, the setting would be under Accessibility > Per App Settings > Add App > Safari > Safari > Auto-Playing Video Previews. Otherwise it would be enabled."]}),"\n",(0,o.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://developer.chrome.com/blog/autoplay/",children:"Autoplay policy in Chrome"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://support.apple.com/en-gb/guide/safari/ibrw29c6ecf8/mac",children:"Stop autoplay videos in Safari on Mac"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://support.mozilla.org/en-US/kb/block-autoplay",children:"Allow or block media autoplay in Firefox"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v4/faq/how-does-mei-affect-autoplay-on-chrome",children:"How does Media Engagement Index (MEI) affect Autoplay on Chrome?"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/PlayerConfiguration.html#mutedAutoplay",children:"API reference - mutedAutoplay"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-266/theoplayer/v4/faq/how-to-combat-autoplay-policies",children:"How to combat autoplay policies"})}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return l}});var i=a(67294);let o={},n=i.createContext(o);function l(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);