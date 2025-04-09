"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["5290"],{33407:function(e,n,o){o.r(n),o.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"external/android-connector/connectors/uplynk/docs/introduction","title":"Introduction","description":"THEOplayer and Uplynk are partners in the streaming industry. The Uplynk Platform offers services like encoding, transcoding, server-side ad-insertion, a CDN and more.","source":"@site/theoplayer/external/android-connector/connectors/uplynk/docs/introduction.md","sourceDirName":"external/android-connector/connectors/uplynk/docs","slug":"/connectors/android/uplynk/introduction","permalink":"/documentation/pr-preview/pr-260/theoplayer/connectors/android/uplynk/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/android-connector/blob/-/connectors/uplynk/docs/introduction.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"slug":"/connectors/android/uplynk/introduction"},"sidebar":"android","previous":{"title":"How-to guides","permalink":"/documentation/pr-preview/pr-260/theoplayer/connectors/android/uplynk/guides"},"next":{"title":"Preplay","permalink":"/documentation/pr-preview/pr-260/theoplayer/connectors/android/uplynk/preplay"}}'),t=o("85893"),i=o("50065");let a={sidebar_position:0,slug:"/connectors/android/uplynk/introduction"},s="Introduction",c={},d=[];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,t.jsxs)(n.p,{children:["THEOplayer and Uplynk are partners in the streaming industry. The ",(0,t.jsx)(n.a,{href:"https://www.uplynk.com/",children:"Uplynk Platform"})," offers services like encoding, transcoding, server-side ad-insertion, a CDN and more."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Uplynk was previously known as EdgeIO or Verizon Media. The iOS and Android connector will refer to the new name which is Uplynk."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Uplynk offers services which can enhance the API, UI and UX of video players and applications. The most popular services are called Preplay, Ping and Asset Info. THEOplayer integrates these services so that developers and viewers can benefit from them."}),"\n",(0,t.jsx)(n.p,{children:"For example,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Viewers can skip over ads;"}),"\n",(0,t.jsx)(n.li,{children:"Viewers can see when an ad is playing (and stopping);"}),"\n",(0,t.jsx)(n.li,{children:"Developers can define the behavior when viewers try to seek over an ad;"}),"\n",(0,t.jsx)(n.li,{children:"Developers can query metadata to render a playlist in their application."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A live demo of THEOplayer's integration of Uplynk on the Web is available ",(0,t.jsx)(n.a,{href:"https://cdn.theoplayer.com/demos/verizon-media/index.html",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Once the connector is added to your project, you can import it like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"import com.theoplayer.android.connector.uplynk.UplynkConnector\n"})}),"\n",(0,t.jsx)(n.p,{children:"To instantiate the connector, we first need to create a configuration for it, to describe how the connector should be behave when it comes to Ads:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val uplynkConfiguration = UplynkConfiguration(defaultSkipOffset: ..., onSeekOverAd: ...)\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"defaultSkipOffset"})," describes how many seconds the user has to wait before an ad is skippable. ",(0,t.jsx)(n.code,{children:"onSeekOverAd"})," controls how the connector behaves when seeking over ads. There are three values: ",(0,t.jsx)(n.code,{children:"PLAY_ALL"}),", ",(0,t.jsx)(n.code,{children:"PLAY_LAST"})," and ",(0,t.jsx)(n.code,{children:"PLAY_NONE"}),". The first option forces playback of all the unwatched ads before the seek point. ",(0,t.jsx)(n.code,{children:"PLAY_LAST"})," forces playback of the last ad before the seek point."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["We can now instantiate the ",(0,t.jsx)(n.code,{children:"UplynkConnector"})," provided that you have an available ",(0,t.jsx)(n.code,{children:"THEOplayer"})," instance:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val uplynkConnector = UplynkConnector(theoplayerView = yourTHEOplayer, uplynkConfiguration = uplynkConfiguration)\n"})}),"\n",(0,t.jsx)(n.p,{children:"For more information on the connector and available APIs, continue to read on the pages below."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-260/theoplayer/connectors/android/uplynk/preplay",children:"Preplay"}),": this article provides information on how to configure a Uplynk source."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-260/theoplayer/connectors/android/uplynk/ads",children:"Ads"}),": this article provides information on which APIs can be leveraged to track and enhance the ad-viewing experience."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/documentation/pr-preview/pr-260/theoplayer/connectors/android/uplynk/ping",children:"Ping"}),": this article provides information on how to leverage the Ping service and which THEOplayer APIs you should use."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return a}});var r=o(67294);let t={},i=r.createContext(t);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);