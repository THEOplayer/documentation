"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["42320"],{35391:function(e,t,n){n.d(t,{Z:function(){return r}});let r={player:"player_anNH"}},65149:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>p,contentTitle:()=>u});var r=JSON.parse('{"id":"external/web-ui/docs/react/examples/default-ui","title":"Default UI","description":"Code","source":"@site/open-video-ui/external/web-ui/docs/react/examples/default-ui.mdx","sourceDirName":"external/web-ui/docs/react/examples","slug":"/react/examples/default-ui","permalink":"/documentation/pr-preview/pr-217/open-video-ui/react/examples/default-ui","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-ui/blob/-/docs/react/examples/default-ui.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_custom_props":{"icon":"\u25B6\uFE0F"},"slug":"/react/examples/default-ui"},"sidebar":"react","previous":{"title":"Examples","permalink":"/documentation/pr-preview/pr-217/open-video-ui/react/examples"},"next":{"title":"Custom UI","permalink":"/documentation/pr-preview/pr-217/open-video-ui/react/examples/custom-ui"}}'),a=n("85893"),o=n("50065"),i=n("38944"),s=n("83187"),c=n("35391");let l={sidebar_position:1,sidebar_custom_props:{icon:"\u25B6\uFE0F"},slug:"/react/examples/default-ui"},u="Default UI",d={},p=[];function m(e){let t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"default-ui",children:"Default UI"})}),"\n","\n",(0,a.jsx)(i.Z,{className:c.Z.player,src:(0,s.default)("/open-video-ui/v1/examples/react/default-ui/demo.html")}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Code"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'import {DefaultUI} from \'@theoplayer/react-ui\'\n\nconst configuration = {\n    libraryLocation: "/path/to/theoplayer/",\n    license: "your_theoplayer_license"\n};\n\nconst source = {\n    sources: {src: \'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8\'},\n    metadata: {\n        title: "Big Buck Bunny"\n    }\n};\n\nconst App = () => {\n    return <DefaultUI configuration={configuration} source={source}/>;\n};\n'})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/react/default-ui/demo.html",children:"\uD83D\uDCDC View full source on GitHub"})})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},38944:function(e,t,n){n.d(t,{Z:()=>i});var r=n("85893"),a=n("67294");let o={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};function i(e){let{hideSource:t,hideDeviceType:n,...i}=e,s=(0,a.useRef)(null),[c,l]=(0,a.useState)("bigBuckBunny"),[u,d]=(0,a.useState)("");return(0,a.useEffect)(()=>{s.current?.contentWindow?.postMessage({type:"source",source:o[c]})},[s.current,c]),(0,a.useEffect)(()=>{s.current?.contentWindow?.postMessage({type:"deviceType",deviceType:u})},[s.current,u]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("iframe",{ref:s,...i}),(!t||!n)&&(0,r.jsxs)("p",{children:[!t&&(0,r.jsx)("div",{children:(0,r.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,r.jsx)("select",{value:c,onChange:e=>l(e.target.value),children:Object.entries(o).map(e=>{let[t,n]=e;return(0,r.jsx)("option",{value:t,children:n.metadata.title},t)})})]})}),!n&&(0,r.jsx)("div",{children:(0,r.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,r.jsxs)("select",{value:u,onChange:e=>d(e.target.value),children:[(0,r.jsx)("option",{value:""}),(0,r.jsx)("option",{value:"desktop",children:"Desktop"}),(0,r.jsx)("option",{value:"mobile",children:"Mobile"}),(0,r.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var r=n(67294);let a={},o=r.createContext(a);function i(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);