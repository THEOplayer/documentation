"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["19850"],{35391:function(e,t,n){n.d(t,{Z:function(){return a}});let a={player:"player_anNH"}},64566:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>a,assets:()=>p,toc:()=>d,contentTitle:()=>u});var a=JSON.parse('{"id":"external/web-ui/docs/react/examples/custom-ui","title":"Custom UI","description":"Code","source":"@site/open-video-ui/external/web-ui/docs/react/examples/custom-ui.mdx","sourceDirName":"external/web-ui/docs/react/examples","slug":"/react/examples/custom-ui","permalink":"/documentation/pr-preview/pr-255/open-video-ui/react/examples/custom-ui","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/web-ui/blob/-/docs/react/examples/custom-ui.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_custom_props":{"icon":"\u25B6\uFE0F"},"slug":"/react/examples/custom-ui"},"sidebar":"react","previous":{"title":"Default UI","permalink":"/documentation/pr-preview/pr-255/open-video-ui/react/examples/default-ui"},"next":{"title":"Changelog","permalink":"/documentation/pr-preview/pr-255/open-video-ui/react/changelog"}}'),r=n("85893"),o=n("50065"),c=n("38944"),s=n("83187"),i=n("35391");let l={sidebar_position:2,sidebar_custom_props:{icon:"\u25B6\uFE0F"},slug:"/react/examples/custom-ui"},u="Custom UI",p={},d=[];function m(e){let t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"custom-ui",children:"Custom UI"})}),"\n","\n",(0,r.jsx)(c.Z,{className:i.Z.player,src:(0,s.default)("/open-video-ui/v1/examples/react/custom-ui/demo.html"),hideDeviceType:!0}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Code"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'import * as THEOplayerReactUI from \'@theoplayer/react-ui\';\n\nconst configuration = {\n    libraryLocation: \'/path/to/theoplayer/\',\n    license: \'your_theoplayer_license\'\n};\n\nconst source = {\n    sources: { src: \'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8\' },\n    metadata: {\n        title: "Big Buck Bunny"\n    }\n};\n\nconst Spacer = () => {\n    return <span style={{ flexGrow: 1 }} />;\n};\n\nconst App = () => {\n    return (\n        <THEOplayerReactUI.UIContainer\n            configuration={configuration}\n            source={source}\n            topChrome={\n                <THEOplayerReactUI.ControlBar>\n                    <span className="my-title">{title}</span>\n                </THEOplayerReactUI.ControlBar>\n            }\n            centeredChrome={<THEOplayerReactUI.PlayButton />}\n            centeredLoading={<THEOplayerReactUI.LoadingIndicator />}\n            bottomChrome={\n                <>\n                    <THEOplayerReactUI.ControlBar>\n                        <THEOplayerReactUI.TimeRange />\n                    </THEOplayerReactUI.ControlBar>\n                    <THEOplayerReactUI.ControlBar>\n                        <THEOplayerReactUI.PlayButton />\n                        <THEOplayerReactUI.MuteButton />\n                        <THEOplayerReactUI.VolumeRange />\n                        <THEOplayerReactUI.TimeDisplay />\n                        <Spacer />\n                        <THEOplayerReactUI.LanguageMenuButton menu="language-menu" />\n                        <THEOplayerReactUI.SettingsMenuButton menu="settings-menu" />\n                        <THEOplayerReactUI.FullscreenButton />\n                    </THEOplayerReactUI.ControlBar>\n                </>\n            }\n            menu={\n                <>\n                    <THEOplayerReactUI.LanguageMenu id="language-menu" />\n                    <THEOplayerReactUI.SettingsMenu id="settings-menu" />\n                </>\n            }\n            error={<THEOplayerReactUI.ErrorDisplay />}\n        />\n    );\n};\n'})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v1/examples/react/custom-ui/demo.html",children:"\uD83D\uDCDC View full source on GitHub"})})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},38944:function(e,t,n){n.d(t,{Z:()=>c});var a=n("85893"),r=n("67294");let o={bigBuckBunny:{sources:{src:"https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"},metadata:{title:"Big Buck Bunny"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/big_buck_bunny/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},elephantsDream:{sources:{src:"https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"},metadata:{title:"Elephant's Dream"},textTracks:[{default:!0,src:"https://cdn.theoplayer.com/video/elephants-dream/thumbnails.vtt",label:"thumbnails",kind:"metadata"}]},starWarsTrailer:{sources:{src:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"},metadata:{title:"Star Wars Episode VII Trailer"},poster:"https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg"}};function c(e){let{hideSource:t,hideDeviceType:n,...c}=e,s=(0,r.useRef)(null),[i,l]=(0,r.useState)("bigBuckBunny"),[u,p]=(0,r.useState)("");return(0,r.useEffect)(()=>{s.current?.contentWindow?.postMessage({type:"source",source:o[i]})},[s.current,i]),(0,r.useEffect)(()=>{s.current?.contentWindow?.postMessage({type:"deviceType",deviceType:u})},[s.current,u]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("iframe",{ref:s,...c}),(!t||!n)&&(0,a.jsxs)("p",{children:[!t&&(0,a.jsx)("div",{children:(0,a.jsxs)("label",{style:{userSelect:"none"},children:["Source:"," ",(0,a.jsx)("select",{value:i,onChange:e=>l(e.target.value),children:Object.entries(o).map(e=>{let[t,n]=e;return(0,a.jsx)("option",{value:t,children:n.metadata.title},t)})})]})}),!n&&(0,a.jsx)("div",{children:(0,a.jsxs)("label",{style:{userSelect:"none"},children:["Override device type:"," ",(0,a.jsxs)("select",{value:u,onChange:e=>p(e.target.value),children:[(0,a.jsx)("option",{value:""}),(0,a.jsx)("option",{value:"desktop",children:"Desktop"}),(0,a.jsx)("option",{value:"mobile",children:"Mobile"}),(0,a.jsx)("option",{value:"tv",children:"TV"})]})]})})]})]})}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return c}});var a=n(67294);let r={},o=a.createContext(r);function c(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);