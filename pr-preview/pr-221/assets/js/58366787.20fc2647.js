"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["43579"],{15681:function(e,i,t){t.r(i),t.d(i,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>s,contentTitle:()=>l});var n=JSON.parse('{"id":"theolive-through-embed/embed-web-player-in-ios","title":"Embed web player in native iOS app","description":"How to embed the THEOlive web player into a WKWebView in a native iOS app.","source":"@site/theolive/theolive-through-embed/embed-web-player-in-ios.md","sourceDirName":"theolive-through-embed","slug":"/theolive-through-embed/embed-web-player-in-ios","permalink":"/documentation/pr-preview/pr-221/theolive/theolive-through-embed/embed-web-player-in-ios","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/theolive-through-embed/embed-web-player-in-ios.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"theolive","previous":{"title":"How to auto-size my player","permalink":"/documentation/pr-preview/pr-221/theolive/theolive-through-embed/autosize"},"next":{"title":"Overview","permalink":"/documentation/pr-preview/pr-221/theolive/theolive-through-npm/"}}'),o=t("85893"),a=t("50065");let r={sidebar_position:4},l="Embed web player in native iOS app",d={},s=[{value:"Create your webpage",id:"create-your-webpage",level:2},{value:"Configure your WKWebView",id:"configure-your-wkwebview",level:2},{value:"Add the WKWebView to your app",id:"add-the-wkwebview-to-your-app",level:2}];function p(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"embed-web-player-in-native-ios-app",children:"Embed web player in native iOS app"})}),"\n",(0,o.jsx)(i.p,{children:"How to embed the THEOlive web player into a WKWebView in a native iOS app."}),"\n",(0,o.jsx)(i.hr,{}),"\n",(0,o.jsx)(i.admonition,{title:"\uD83D\uDCD8 Prefer our iOS SDK",type:"note",children:(0,o.jsx)(i.p,{children:"Next to our web SDK, we also offer an iOS SDK which is more optimized for native playback. Therefore, we recommend that SDK over using a WebView and loading the web SDK."})}),"\n",(0,o.jsx)(i.h2,{id:"create-your-webpage",children:"Create your webpage"}),"\n",(0,o.jsx)(i.p,{children:"Make an HTML page in which you add your THEOlive player. This example uses the embed player, but you can also use the npm player if you need more control."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-html",metastring:"your-custom-embed-page.com",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Testing embed.js</title>\n  </head>\n  <body>\n    <div data-theo-live-id="<your-channel-id>" style="width: 600px; height: 400px"></div>\n    <script type="text/javascript" src="https://cdn.theo.live/player/embed.js" async><\/script>\n  </body>\n</html>\n'})}),"\n",(0,o.jsx)(i.p,{children:"Host this page on a location that is accessible from your native iOS application."}),"\n",(0,o.jsx)(i.h2,{id:"configure-your-wkwebview",children:"Configure your WKWebView"}),"\n",(0,o.jsx)(i.p,{children:"To enable autoplay make sure to enable inline playback. To do this:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["create a ",(0,o.jsx)(i.a,{href:"https://developer.apple.com/documentation/webkit/wkwebviewconfiguration",children:"WKWebViewConfiguration"})]}),"\n",(0,o.jsxs)(i.li,{children:["set its ",(0,o.jsx)(i.a,{href:"https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/1614793-allowsinlinemediaplayback",children:"allowsInlineMediaPlayback"})," to true"]}),"\n",(0,o.jsx)(i.li,{children:"pass that configuration to your webview when initialising it"}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-swift",children:"let webConfiguration = WKWebViewConfiguration()\nwebConfiguration.allowsInlineMediaPlayback = true\nlet webView = WKWebView(frame: .zero, configuration: configuration)\n"})}),"\n",(0,o.jsx)(i.h2,{id:"add-the-wkwebview-to-your-app",children:"Add the WKWebView to your app"}),"\n",(0,o.jsx)(i.p,{children:"Now load the webpage you made in the first step and embed the WKWebView somewhere in your app."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-swift",children:'let yourWebPageURL = URL(string: "https://your-custom-embed-page.com")!\nlet urlRequest = URLRequest(url: yourWebPageURL)\nwebView.load(urlRequest)\nyourView.addSubview(webView)\n'})})]})}function h(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return l},a:function(){return r}});var n=t(67294);let o={},a=n.createContext(o);function r(e){let i=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);