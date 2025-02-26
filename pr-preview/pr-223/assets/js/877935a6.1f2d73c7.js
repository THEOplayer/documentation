"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["30834"],{83444:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"faq/what-does-error-can-only-be-initiated-by-user-gesture-mean","title":"What does the error message \'can only be initiated by a user gesture\' imply? Can I still force the desired action","description":"You may get this error if you are trying to have the player execute an action without it being initiated by the user. A typical example is going fullscreen or automatically starting playback (often on mobile).","source":"@site/theoplayer_versioned_docs/version-v6/faq/25-what-does-error-can-only-be-initiated-by-user-gesture-mean.md","sourceDirName":"faq","slug":"/faq/what-does-error-can-only-be-initiated-by-user-gesture-mean","permalink":"/documentation/pr-preview/pr-223/theoplayer/v6/faq/what-does-error-can-only-be-initiated-by-user-gesture-mean","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/faq/25-what-does-error-can-only-be-initiated-by-user-gesture-mean.md","tags":[],"version":"v6","sidebarPosition":25,"frontMatter":{},"sidebar":"faq","previous":{"title":"Why does the playback not work when using the Chrome iPhone/iPad simulator","permalink":"/documentation/pr-preview/pr-223/theoplayer/v6/faq/why-does-playback-not-work-using-chrome-iphone-simulator"},"next":{"title":"How to remove unwanted CC track in iOS or Safari","permalink":"/documentation/pr-preview/pr-223/theoplayer/v6/faq/how-to-remove-unwanted-cc-track-ios-safari"}}'),a=r("85893"),o=r("50065");let i={},s="What does the error message 'can only be initiated by a user gesture' imply? Can I still force the desired action",l={},c=[];function d(e){let t={h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"what-does-the-error-message-can-only-be-initiated-by-a-user-gesture-imply-can-i-still-force-the-desired-action",children:"What does the error message 'can only be initiated by a user gesture' imply? Can I still force the desired action"})}),"\n",(0,a.jsx)(t.p,{children:"You may get this error if you are trying to have the player execute an action without it being initiated by the user. A typical example is going fullscreen or automatically starting playback (often on mobile)."}),"\n",(0,a.jsx)(t.p,{children:"Related questions are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Why can\u2019t I set the player to fullscreen mode on screenrotation? (Related error message: \u201CFailed to execute 'requestFullScreen' on 'Element': API can only be initiated by a user gesture.\u201D)"}),"\n",(0,a.jsx)(t.li,{children:"Why is an error generated if I want to automatically start playback when certain conditions are met (Related error message: DOMException: play() can only be initiated by a user gesture)"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The short answer is no, you cannot (and should not) force an action that gets this kind of error message: this is a block implemented by the browser to protect the user."}),"\n",(0,a.jsx)(t.p,{children:"The details:"}),"\n",(0,a.jsx)(t.p,{children:"In some cases, the browser deems that a certain behavior cannot be initiated automatically and needs instead to be started by the user (or user action). This happens because these behaviors may be perceived as bad or harmful by a user, if automated. In other words, this limitation is implemented by the browser to protect the user from (for example) invasive pop ups, advertisement, etc., as well as from more serious threats to a good and safe web surfing."}),"\n",(0,a.jsx)(t.p,{children:"To our knowledge, there is no way to force the browser to ignore this error, and you probably shouldn't want to do so, for the above-mentioned reasons. Therefore, if you incur in this situation you may want to find an alternative way to achieve the desired result (or take the hint from the browser and reconsider whether what you want to achieve is appropriate for your use case and good for the user)."}),"\n",(0,a.jsx)(t.p,{children:"Update 7/12/2018"}),"\n",(0,a.jsx)(t.p,{children:"This behavior is common on devices and on Safari."}),"\n",(0,a.jsx)(t.p,{children:"Chrome 71, released a few days ago, also introduces the need for user interaction to go fullscreen."})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return i}});var n=r(67294);let a={},o=n.createContext(a);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);