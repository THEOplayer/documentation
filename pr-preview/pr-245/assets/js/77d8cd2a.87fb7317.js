"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["76749"],{77389:function(e,t,n){n.d(t,{Z:function(){return s}});let s={player:"player_Seag",portraitPlayer:"portraitPlayer_vn7H"}},93981:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>u,toc:()=>p,contentTitle:()=>d});var s=JSON.parse('{"id":"external/web-ui/docs/examples/ads","title":"Advertisements","description":"The default UI has full support for advertisements.","source":"@site/open-video-ui/external/web-ui/docs/examples/ads.mdx","sourceDirName":"external/web-ui/docs/examples","slug":"/web/examples/ads","permalink":"/documentation/pr-preview/pr-245/open-video-ui/web/examples/ads","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-ui/blob/-/docs/examples/ads.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"sidebar_custom_props":{"icon":"\uD83D\uDCB0"},"slug":"/web/examples/ads"},"sidebar":"web","previous":{"title":"Default UI","permalink":"/documentation/pr-preview/pr-245/open-video-ui/web/examples/default-ui"},"next":{"title":"Styling the default UI","permalink":"/documentation/pr-preview/pr-245/open-video-ui/web/examples/styling"}}'),a=n("85893"),r=n("50065"),o=n("38944"),i=n("83187"),l=n("77389");let c={sidebar_position:11,sidebar_custom_props:{icon:"\uD83D\uDCB0"},slug:"/web/examples/ads"},d="Advertisements",u={},p=[];function m(e){let t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"advertisements",children:"Advertisements"})}),"\n",(0,a.jsx)(t.p,{children:"The default UI has full support for advertisements."}),"\n",(0,a.jsx)(t.p,{children:"During playback, it shows yellow ad markers on the seek bar to indicate the times when the content will be interrupted by an ad."}),"\n",(0,a.jsx)(t.p,{children:"While playing an ad, the UI shows ad-specific controls such as a skip button and a countdown. These controls are also mobile-aware, for example a\ndedicated clickthrough button replaces the regular clickthrough behavior on desktop."}),"\n","\n",(0,a.jsx)(o.Z,{className:l.Z.player,src:(0,i.default)("/open-video-ui/v1/examples/web/ads/demo.html")}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Code"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:"var ui = document.querySelector('theoplayer-default-ui');\nui.source = {\n    sources: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',\n    ads: [\n        {\n            sources: {\n                src: 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpremidpostpod&ciu_szs=300x250&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&cmsid=496&vid=short_onecue&correlator=',\n                type: 'vmap'\n            }\n        }\n    ]\n};\n"})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/web/ads/demo.html",children:"\uD83D\uDCDC View full source on GitHub"})})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},38944:function(e,t,n){n.d(t,{Z:()=>o});var s=n("85893"),a=n("67294");let r={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};function o(e){let{hideSource:t,hideDeviceType:n,...o}=e,i=(0,a.useRef)(null),[l,c]=(0,a.useState)("bigBuckBunny"),[d,u]=(0,a.useState)("");return(0,a.useEffect)(()=>{i.current?.contentWindow?.postMessage({type:"source",source:r[l]})},[i.current,l]),(0,a.useEffect)(()=>{i.current?.contentWindow?.postMessage({type:"deviceType",deviceType:d})},[i.current,d]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("iframe",{ref:i,...o}),(!t||!n)&&(0,s.jsxs)("p",{children:[!t&&(0,s.jsx)("div",{children:(0,s.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,s.jsx)("select",{value:l,onChange:e=>c(e.target.value),children:Object.entries(r).map(e=>{let[t,n]=e;return(0,s.jsx)("option",{value:t,children:n.metadata.title},t)})})]})}),!n&&(0,s.jsx)("div",{children:(0,s.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,s.jsxs)("select",{value:d,onChange:e=>u(e.target.value),children:[(0,s.jsx)("option",{value:""}),(0,s.jsx)("option",{value:"desktop",children:"Desktop"}),(0,s.jsx)("option",{value:"mobile",children:"Mobile"}),(0,s.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return o}});var s=n(67294);let a={},r=s.createContext(a);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);