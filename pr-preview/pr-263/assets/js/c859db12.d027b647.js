"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["84761"],{77389:function(e,t,r){r.d(t,{Z:function(){return a}});let a={player:"player_Seag",portraitPlayer:"portraitPlayer_vn7H"}},42562:function(e,t,r){let a,n;r.r(t),r.d(t,{default:()=>v,frontMatter:()=>g,metadata:()=>s,assets:()=>y,toc:()=>x,contentTitle:()=>b});var s=JSON.parse('{"id":"external/web-ui/docs/examples/styling","title":"Styling the default UI","description":"Christmas theme","source":"@site/open-video-ui/external/web-ui/docs/examples/styling.mdx","sourceDirName":"external/web-ui/docs/examples","slug":"/web/examples/styling","permalink":"/documentation/pr-preview/pr-263/open-video-ui/web/examples/styling","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-ui/blob/-/docs/examples/styling.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"sidebar_position":12,"sidebar_custom_props":{"icon":"\uD83C\uDFA8"},"slug":"/web/examples/styling"},"sidebar":"web","previous":{"title":"Advertisements","permalink":"/documentation/pr-preview/pr-263/open-video-ui/web/examples/ads"},"next":{"title":"Custom UI","permalink":"/documentation/pr-preview/pr-263/open-video-ui/web/examples/custom-ui"}}'),i=r("85893"),l=r("50065"),o=r("67294"),c=r("38944");r("33262").default.canUseDOM&&(a=r(99092),n=r(15660),r(55275),a.windowLoaded=!0);let d=!1;function u(e){return(0,o.useEffect)(()=>{d||(a.registerTemplate("syntax-highlighted",a.templates.prism(n,[new a.plugins.Indent(!0,4)])),d=!0)},[]),(0,i.jsx)("code-input",{template:"syntax-highlighted",...e})}function p(e){let{defaultCustomStyle:t,...r}=e,[a,n]=(0,o.useState)(null),[s,l]=(0,o.useState)(t);return(0,o.useEffect)(()=>{a?.contentWindow?.postMessage({type:"style",style:s})},[a,s]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{ref:n,...r}),(0,i.jsx)(u,{lang:"CSS",onInput:e=>l(e.target.value),children:t})]})}var h=r("83187"),m=r("77389");let g={sidebar_position:12,sidebar_custom_props:{icon:"\uD83C\uDFA8"},slug:"/web/examples/styling"},b="Styling the default UI",y={},x=[{value:"Christmas theme",id:"christmas-theme",level:2}];function f(e){let t={h1:"h1",h2:"h2",header:"header",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"styling-the-default-ui",children:"Styling the default UI"})}),"\n","\n",(0,i.jsx)(t.h2,{id:"christmas-theme",children:"Christmas theme"}),"\n",(0,i.jsx)(p,{className:m.Z.player,src:(0,h.default)("/open-video-ui/v1/examples/web/styling/demo.html"),defaultCustomStyle:`
/* A festive theme for the holidays. Try editing me! */
theoplayer-default-ui {
  font-family: 'Comic Sans MS', sans-serif;
  width: 100%;
  --theoplayer-icon-color: red;
  --theoplayer-text-color: white;
  --theoplayer-range-bar-color: red;
  --theoplayer-range-thumb-background: linear-gradient(to bottom right, red 0% 25%, white 25% 40%, red 40% 60%, white 60% 75%, red 75% 100%);
  --theoplayer-range-thumb-box-shadow: 1px 1px 5px red;
  --theoplayer-range-thumb-height: 19px;
  --theoplayer-range-thumb-width: 19px;
  --theoplayer-range-track-height: 6px;
  --theoplayer-time-range-track-pointer-background: rgb(255 0 0 / 25%);
  --theoplayer-control-background-gradient-stops: transparent 0%, rgb(0 100 0) 100%;
  --theoplayer-menu-backdrop-background: rgb(0 100 0 / 75%);
  --theoplayer-mobile-control-backdrop-background: rgb(0 100 0 / 75%);
}
`.trim()})]})}function v(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},38944:function(e,t,r){r.d(t,{Z:()=>i});var a=r("85893"),n=r("67294");let s={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};function i(e){let{hideSource:t,hideDeviceType:r,...i}=e,l=(0,n.useRef)(null),[o,c]=(0,n.useState)("bigBuckBunny"),[d,u]=(0,n.useState)("");return(0,n.useEffect)(()=>{l.current?.contentWindow?.postMessage({type:"source",source:s[o]})},[l.current,o]),(0,n.useEffect)(()=>{l.current?.contentWindow?.postMessage({type:"deviceType",deviceType:d})},[l.current,d]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("iframe",{ref:l,...i}),(!t||!r)&&(0,a.jsxs)("p",{children:[!t&&(0,a.jsx)("div",{children:(0,a.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,a.jsx)("select",{value:o,onChange:e=>c(e.target.value),children:Object.entries(s).map(e=>{let[t,r]=e;return(0,a.jsx)("option",{value:t,children:r.metadata.title},t)})})]})}),!r&&(0,a.jsx)("div",{children:(0,a.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,a.jsxs)("select",{value:d,onChange:e=>u(e.target.value),children:[(0,a.jsx)("option",{value:""}),(0,a.jsx)("option",{value:"desktop",children:"Desktop"}),(0,a.jsx)("option",{value:"mobile",children:"Mobile"}),(0,a.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}}}]);