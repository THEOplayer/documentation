"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["15979"],{77389:function(e,t,n){n.d(t,{Z:function(){return o}});let o={player:"player_Seag",portraitPlayer:"portraitPlayer_vn7H"}},89532:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>u,metadata:()=>o,assets:()=>p,toc:()=>d,contentTitle:()=>c});var o=JSON.parse('{"id":"external/web-ui/docs/examples/custom-ui","title":"Custom UI","description":"Code","source":"@site/open-video-ui/external/web-ui/docs/examples/custom-ui.mdx","sourceDirName":"external/web-ui/docs/examples","slug":"/web/examples/custom-ui","permalink":"/documentation/pr-preview/pr-245/open-video-ui/web/examples/custom-ui","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-ui/blob/-/docs/examples/custom-ui.mdx","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"sidebar_custom_props":{"icon":"\u25B6\uFE0F"},"slug":"/web/examples/custom-ui"},"sidebar":"web","previous":{"title":"Styling the default UI","permalink":"/documentation/pr-preview/pr-245/open-video-ui/web/examples/styling"},"next":{"title":"Custom UI: Portrait theme","permalink":"/documentation/pr-preview/pr-245/open-video-ui/web/examples/portrait"}}'),a=n("85893"),r=n("50065"),l=n("38944"),i=n("83187"),s=n("77389");let u={sidebar_position:20,sidebar_custom_props:{icon:"\u25B6\uFE0F"},slug:"/web/examples/custom-ui"},c="Custom UI",p={},d=[];function m(e){let t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"custom-ui",children:"Custom UI"})}),"\n","\n",(0,a.jsx)(l.Z,{className:s.Z.player,src:(0,i.default)("/open-video-ui/v1/examples/web/custom-ui/demo.html")}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Code"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",metastring:"showLineNumbers",children:'<theoplayer-ui\n    configuration=\'{"libraryLocation":"/path/to/theoplayer/","license":"your_theoplayer_license"}\'\n    source=\'{"sources":{"src":"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},"textTracks":[{"default":true,"src":"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt","label":"thumbnails","kind":"metadata"}]}\'\n    fluid\n>\n    <theoplayer-control-bar slot="top-chrome" class="top-chrome">\n        <span class="title">Big Buck Bunny</span>\n        <span class="spacer"></span>\n        <theoplayer-language-menu-button menu="language-menu" mobile-only></theoplayer-language-menu-button>\n        <theoplayer-settings-menu-button menu="settings-menu" mobile-only></theoplayer-settings-menu-button>\n        <theoplayer-airplay-button mobile-only></theoplayer-airplay-button>\n        <theoplayer-chromecast-button mobile-only></theoplayer-chromecast-button>\n    </theoplayer-control-bar>\n    <theoplayer-loading-indicator slot="centered-loading" no-auto-hide></theoplayer-loading-indicator>\n    <div slot="centered-chrome" class="centered-chrome">\n        <theoplayer-play-button></theoplayer-play-button>\n    </div>\n    <div class="bottom-chrome">\n        <theoplayer-control-bar>\n            <theoplayer-time-range></theoplayer-time-range>\n        </theoplayer-control-bar>\n        <theoplayer-control-bar>\n            <theoplayer-play-button mobile-hidden></theoplayer-play-button>\n            <theoplayer-mute-button></theoplayer-mute-button>\n            <theoplayer-volume-range mobile-hidden></theoplayer-volume-range>\n            <theoplayer-time-display show-duration></theoplayer-time-display>\n            <span class="spacer"></span>\n            <theoplayer-language-menu-button menu="language-menu" mobile-hidden></theoplayer-language-menu-button>\n            <theoplayer-settings-menu-button menu="settings-menu" mobile-hidden></theoplayer-settings-menu-button>\n            <theoplayer-airplay-button mobile-hidden></theoplayer-airplay-button>\n            <theoplayer-chromecast-button mobile-hidden></theoplayer-chromecast-button>\n            <theoplayer-fullscreen-button></theoplayer-fullscreen-button>\n        </theoplayer-control-bar>\n    </div>\n    <theoplayer-language-menu id="language-menu" slot="menu" hidden></theoplayer-language-menu>\n    <theoplayer-settings-menu id="settings-menu" slot="menu" hidden></theoplayer-settings-menu>\n    <theoplayer-error-display slot="error"></theoplayer-error-display>\n</theoplayer-ui>\n'})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/web/custom-ui/demo.html",children:"\uD83D\uDCDC View full source on GitHub"})})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},38944:function(e,t,n){n.d(t,{Z:()=>l});var o=n("85893"),a=n("67294");let r={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};function l(e){let{hideSource:t,hideDeviceType:n,...l}=e,i=(0,a.useRef)(null),[s,u]=(0,a.useState)("bigBuckBunny"),[c,p]=(0,a.useState)("");return(0,a.useEffect)(()=>{i.current?.contentWindow?.postMessage({type:"source",source:r[s]})},[i.current,s]),(0,a.useEffect)(()=>{i.current?.contentWindow?.postMessage({type:"deviceType",deviceType:c})},[i.current,c]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{ref:i,...l}),(!t||!n)&&(0,o.jsxs)("p",{children:[!t&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,o.jsx)("select",{value:s,onChange:e=>u(e.target.value),children:Object.entries(r).map(e=>{let[t,n]=e;return(0,o.jsx)("option",{value:t,children:n.metadata.title},t)})})]})}),!n&&(0,o.jsx)("div",{children:(0,o.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,o.jsxs)("select",{value:c,onChange:e=>p(e.target.value),children:[(0,o.jsx)("option",{value:""}),(0,o.jsx)("option",{value:"desktop",children:"Desktop"}),(0,o.jsx)("option",{value:"mobile",children:"Mobile"}),(0,o.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return l}});var o=n(67294);let a={},r=o.createContext(a);function l(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);