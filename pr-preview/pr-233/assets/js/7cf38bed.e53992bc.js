"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["46306"],{77389:function(e,t,n){n.d(t,{Z:function(){return a}});let a={player:"player_Seag",portraitPlayer:"portraitPlayer_vn7H"}},67944:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>u,metadata:()=>a,assets:()=>d,toc:()=>p,contentTitle:()=>c});var a=JSON.parse('{"id":"external/web-ui/docs/examples/default-ui","title":"Default UI","description":"Code","source":"@site/open-video-ui/external/web-ui/docs/examples/default-ui.mdx","sourceDirName":"external/web-ui/docs/examples","slug":"/web/examples/default-ui","permalink":"/documentation/pr-preview/pr-233/open-video-ui/web/examples/default-ui","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-ui/blob/-/docs/examples/default-ui.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"sidebar_custom_props":{"icon":"\u25B6\uFE0F"},"slug":"/web/examples/default-ui"},"sidebar":"web","previous":{"title":"Examples","permalink":"/documentation/pr-preview/pr-233/open-video-ui/web/examples"},"next":{"title":"Advertisements","permalink":"/documentation/pr-preview/pr-233/open-video-ui/web/examples/ads"}}'),r=n("85893"),i=n("50065"),o=n("38944"),s=n("83187"),l=n("77389");let u={sidebar_position:10,sidebar_custom_props:{icon:"\u25B6\uFE0F"},slug:"/web/examples/default-ui"},c="Default UI",d={},p=[];function m(e){let t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"default-ui",children:"Default UI"})}),"\n","\n",(0,r.jsx)(o.Z,{className:l.Z.player,src:(0,s.default)("/open-video-ui/v1/examples/web/default-ui/demo.html")}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Code"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",metastring:"showLineNumbers",children:'<theoplayer-default-ui\n    configuration=\'{"libraryLocation":"/path/to/theoplayer/","license":"your_theoplayer_license"}\'\n    source=\'{"sources":{"src":"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},"textTracks":[{"default":true,"src":"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt","label":"thumbnails","kind":"metadata"}]}\'\n    fluid\n></theoplayer-default-ui>\n'})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/web/default-ui/demo.html",children:"\uD83D\uDCDC View full source on GitHub"})})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},38944:function(e,t,n){n.d(t,{Z:()=>o});var a=n("85893"),r=n("67294");let i={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};function o(e){let{hideSource:t,hideDeviceType:n,...o}=e,s=(0,r.useRef)(null),[l,u]=(0,r.useState)("bigBuckBunny"),[c,d]=(0,r.useState)("");return(0,r.useEffect)(()=>{s.current?.contentWindow?.postMessage({type:"source",source:i[l]})},[s.current,l]),(0,r.useEffect)(()=>{s.current?.contentWindow?.postMessage({type:"deviceType",deviceType:c})},[s.current,c]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("iframe",{ref:s,...o}),(!t||!n)&&(0,a.jsxs)("p",{children:[!t&&(0,a.jsx)("div",{children:(0,a.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,a.jsx)("select",{value:l,onChange:e=>u(e.target.value),children:Object.entries(i).map(e=>{let[t,n]=e;return(0,a.jsx)("option",{value:t,children:n.metadata.title},t)})})]})}),!n&&(0,a.jsx)("div",{children:(0,a.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,a.jsxs)("select",{value:c,onChange:e=>d(e.target.value),children:[(0,a.jsx)("option",{value:""}),(0,a.jsx)("option",{value:"desktop",children:"Desktop"}),(0,a.jsx)("option",{value:"mobile",children:"Mobile"}),(0,a.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var a=n(67294);let r={},i=a.createContext(r);function o(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);