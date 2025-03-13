"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["74100"],{28721:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"how-to-guides/drm/multikey-hls","title":"Multi-key HLS","description":"There are multiple DRM key systems on the market to choose from. The most popular ones are Google Widevine, Microsoft PlayReady and Apple FairPlay. Under the hood, all these systems encrypt the media samples using the AES-128 encryption algorithm. AES-128 is a standardized block-cipher that allows for multiple ways of choosing the blocks. Widevine and PlayReady both use CTR and FairPlay uses CBC. Therefore, it was possible to share segments between Widevine and PlayReady protected streams, but not with FairPlay protected stream.","source":"@site/theoplayer/how-to-guides/04-drm/16-multikey-hls.md","sourceDirName":"how-to-guides/04-drm","slug":"/how-to-guides/drm/multikey-hls","permalink":"/documentation/pr-preview/pr-234/theoplayer/how-to-guides/drm/multikey-hls","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/04-drm/16-multikey-hls.md","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{},"sidebar":"roku","previous":{"title":"PallyCon","permalink":"/documentation/pr-preview/pr-234/theoplayer/how-to-guides/drm/pallycon"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-234/theoplayer/how-to-guides/drm/buydrm-keyos/introduction"}}'),r=n("85893"),a=n("50065");let s={},o="Multi-key HLS",l={},d=[{value:"The HLS playlist",id:"the-hls-playlist",level:2},{value:"Configuring THEOplayer",id:"configuring-theoplayer",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"multi-key-hls",children:"Multi-key HLS"})}),"\n",(0,r.jsxs)(t.p,{children:["There are multiple DRM key systems on the market to choose from. The most popular ones are Google Widevine, Microsoft PlayReady and Apple FairPlay. Under the hood, all these systems encrypt the media samples using the AES-128 encryption algorithm. AES-128 is a standardized block-cipher that allows for multiple ways of choosing the blocks. Widevine and PlayReady both use ",(0,r.jsx)(t.code,{children:"CTR"})," and FairPlay uses ",(0,r.jsx)(t.code,{children:"CBC"}),". Therefore, it was possible to share segments between Widevine and PlayReady protected streams, but not with FairPlay protected stream.\nHowever, support has been added for Widevine and PlayReady with AES-128 in ",(0,r.jsx)(t.code,{children:"CBC"})," mode. Hence, it is now possible to create HLS streams compatible with all these key systems. Where you previously had to encode the stream twice, this is no longer needed. A multi-key HLS stream will play in all web platforms that support MSE and either Widevine, PlayReady or FairPlay."]}),"\n",(0,r.jsx)(t.h2,{id:"the-hls-playlist",children:"The HLS playlist"}),"\n",(0,r.jsx)(t.p,{children:"A multi-key HLS playlist could look like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",metastring:"{7-9}",children:'#EXTM3U\n#EXT-X-TARGETDURATION:6\n#EXT-X-VERSION:5\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-PLAYLIST-TYPE:VOD\n#EXT-X-INDEPENDENT-SEGMENTS\n#EXT-X-KEY:METHOD=SAMPLE-AES,KEYFORMAT="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",KEYFORMATVERSIONS="1",URI="WIDEVINE_INIT_DATA_URL"\n#EXT-X-KEY:METHOD=SAMPLE-AES,KEYFORMAT="com.microsoft.playready",KEYFORMATVERSIONS="1",URI="PLAYREADY_INIT_DATA_URL"\n#EXT-X-KEY:METHOD=SAMPLE-AES,KEYFORMAT="com.apple.streamingkeydelivery",KEYFORMATVERSIONS="1",URI="FAIRPLAY_INIT_DATA_URL"\n#EXT-X-MAP:URI="init.mp4"\n#EXTINF:6,\n1.mp4\n#EXTINF:6,\n2.mp4\n#EXTINF:6,\n3.mp4\n#EXTINF:6,\n4.mp4\n#EXTINF:6,\n5.mp4\n#EXT-X-ENDLIST\n'})}),"\n",(0,r.jsxs)(t.p,{children:["There is an ",(0,r.jsx)(t.code,{children:"#EXT-X-KEY"})," tag for all the key systems which all have method ",(0,r.jsx)(t.code,{children:"SAMPLE-AES"}),". The ",(0,r.jsx)(t.code,{children:"KEYFORMAT"})," specifies the key system:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"})," for Widevine"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"com.microsoft.playready"})," for PlayReady"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"com.apple.streamingkeydelivery"})," for FairPlay"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"URI"})," is either a data URI containing the initialization data, or a URI pointing to the initialization data. For\nmore information, please check out the specifications for ",(0,r.jsx)(t.a,{href:"https://www.academia.edu/36030972/Widevine_DRM_for_HLS",children:"Widevine"}),", ",(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/playready/packaging/mp4-based-formats-supported-by-playready-clients?tabs=case4",children:"PlayReady"})," and ",(0,r.jsx)(t.a,{href:"https://developer.apple.com/streaming/fps/",children:"FairPlay"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"configuring-theoplayer",children:"Configuring THEOplayer"}),"\n",(0,r.jsx)(t.p,{children:"A corresponding player configuration looks like:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"player.source = {\n  sources: [\n    {\n      src: 'https://yourdomain.com/playlist.m3u8',\n      type: 'application/x-mpegurl',\n      contentProtection: {\n        widevine: {\n          licenseAcquisitionURL: 'https://widevine-server.com/license',\n        },\n        playready: {\n          licenseAcquisitionURL: 'https://playready-server.com/license',\n        },\n        fairplay: {\n          certificateURL: 'https://fairplay-server.com/certificate',\n          licenseAcquisitionURL: 'https://fairplay-server.com/license',\n        },\n      },\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that this feature is available on the current HLS pipeline (default since THEOplayer 4.X). To use it in previous versions, the ",(0,r.jsx)(t.code,{children:"lowLatency"})," flag must be set to true."]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var i=n(67294);let r={},a=i.createContext(r);function s(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);