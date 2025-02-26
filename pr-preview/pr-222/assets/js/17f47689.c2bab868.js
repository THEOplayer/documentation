"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["7542"],{77389:function(e,t,r){r.d(t,{Z:function(){return o}});let o={player:"player_Seag",portraitPlayer:"portraitPlayer_vn7H"}},8977:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>o,assets:()=>p,toc:()=>d,contentTitle:()=>u});var o=JSON.parse('{"id":"external/web-ui/docs/examples/portrait","title":"Custom UI: Portrait theme","description":"Video by cottonbro studio.","source":"@site/open-video-ui/external/web-ui/docs/examples/portrait.mdx","sourceDirName":"external/web-ui/docs/examples","slug":"/web/examples/portrait","permalink":"/documentation/pr-preview/pr-222/open-video-ui/web/examples/portrait","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-ui/blob/-/docs/examples/portrait.mdx","tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"sidebar_position":21,"sidebar_custom_props":{"icon":"\uD83D\uDCF1"},"slug":"/web/examples/portrait"},"sidebar":"web","previous":{"title":"Custom UI","permalink":"/documentation/pr-preview/pr-222/open-video-ui/web/examples/custom-ui"},"next":{"title":"Custom UI: Nitflex theme","permalink":"/documentation/pr-preview/pr-222/open-video-ui/web/examples/nitflex"}}'),n=r("85893"),i=r("50065"),a=r("38944"),s=r("83187"),l=r("77389");let c={sidebar_position:21,sidebar_custom_props:{icon:"\uD83D\uDCF1"},slug:"/web/examples/portrait"},u="Custom UI: Portrait theme",p={},d=[];function m(e){let t={a:"a",h1:"h1",header:"header",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"custom-ui-portrait-theme",children:"Custom UI: Portrait theme"})}),"\n","\n",(0,n.jsx)(a.Z,{className:l.Z.portraitPlayer,hideDeviceType:!0,src:(0,s.default)("/open-video-ui/v1/examples/web/portrait/demo.html")}),"\n",(0,n.jsxs)(t.p,{children:["Video by ",(0,n.jsx)(t.a,{href:"https://www.pexels.com/video/the-art-of-skateboarding-2791956/",children:"cottonbro studio"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/web/portrait/demo.html",children:"\uD83D\uDCDC View full source on GitHub"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},38944:function(e,t,r){r.d(t,{Z:()=>a});var o=r("85893"),n=r("67294");let i={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};function a(e){let{hideSource:t,hideDeviceType:r,...a}=e,s=(0,n.useRef)(null),[l,c]=(0,n.useState)("bigBuckBunny"),[u,p]=(0,n.useState)("");return(0,n.useEffect)(()=>{s.current?.contentWindow?.postMessage({type:"source",source:i[l]})},[s.current,l]),(0,n.useEffect)(()=>{s.current?.contentWindow?.postMessage({type:"deviceType",deviceType:u})},[s.current,u]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{ref:s,...a}),(!t||!r)&&(0,o.jsxs)("p",{children:[!t&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,o.jsx)("select",{value:l,onChange:e=>c(e.target.value),children:Object.entries(i).map(e=>{let[t,r]=e;return(0,o.jsx)("option",{value:t,children:r.metadata.title},t)})})]})}),!r&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,o.jsxs)("select",{value:u,onChange:e=>p(e.target.value),children:[(0,o.jsx)("option",{value:""}),(0,o.jsx)("option",{value:"desktop",children:"Desktop"}),(0,o.jsx)("option",{value:"mobile",children:"Mobile"}),(0,o.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return a}});var o=r(67294);let n={},i=o.createContext(n);function a(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);