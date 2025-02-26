"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["11089"],{67064:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>p,contentTitle:()=>c});var r=JSON.parse('{"id":"examples/basic","title":"Basic player","description":"Code","source":"@site/theoplayer_versioned_docs/version-v4/examples/01-basic.mdx","sourceDirName":"examples","slug":"/examples/basic","permalink":"/documentation/pr-preview/pr-224/theoplayer/v4/examples/basic","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/examples/01-basic.mdx","tags":[],"version":"v4","sidebarPosition":1,"frontMatter":{"sidebar_custom_props":{"icon":"\u25B6\uFE0F"}},"sidebar":"web","previous":{"title":"Examples","permalink":"/documentation/pr-preview/pr-224/theoplayer/v4/examples/"},"next":{"title":"Changelog","permalink":"/documentation/pr-preview/pr-224/theoplayer/v4/changelog"}}'),o=t("85893"),a=t("50065"),s=t("83187");let i={sidebar_custom_props:{icon:"\u25B6\uFE0F"}},c="Basic player",l={},p=[];function d(e){let n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"basic-player",children:"Basic player"})}),"\n","\n",(0,o.jsx)("iframe",{className:"player_Pb8j",src:(0,s.default)("/theoplayer/v6/examples/basic/demo.html")}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Code"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:"showLineNumbers",children:"<div id=\"player\" class=\"video-js theoplayer-skin vjs-16-9\"></div>\n<script>\n  var player = new THEOplayer.Player(document.querySelector('#player'), {\n    libraryLocation: '/path/to/theoplayer',\n    license: 'your_theoplayer_license',\n  });\n  player.source = {\n    sources: [\n      {\n        src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n        type: 'application/x-mpegurl',\n      },\n    ],\n  };\n<\/script>\n"})})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var r=t(67294);let o={},a=r.createContext(o);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);