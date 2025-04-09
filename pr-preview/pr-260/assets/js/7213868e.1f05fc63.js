"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["62684"],{46694:function(e,a,t){t.r(a),t.d(a,{default:()=>p,frontMatter:()=>s,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"faq/cdn-fallback-backup-stream-feature","title":"How to use the CDN fallback/backup stream feature","description":"THEOplayer offers a feature to detect more sources of content in manifest or playlist, so that the player can automatically switch to a fallback URL, in case any of the main content source is unavailable or not reachable. This feature works for both MPEG-DASH and HLS streams out of the box, and does not require any additional configuration to the player.","source":"@site/theoplayer/faq/57-cdn-fallback-backup-stream-feature.md","sourceDirName":"faq","slug":"/faq/cdn-fallback-backup-stream-feature","permalink":"/documentation/pr-preview/pr-260/theoplayer/faq/cdn-fallback-backup-stream-feature","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/57-cdn-fallback-backup-stream-feature.md","tags":[],"version":"current","sidebarPosition":57,"frontMatter":{},"sidebar":"faq","previous":{"title":"What is the support for Wowza","permalink":"/documentation/pr-preview/pr-260/theoplayer/faq/what-is-the-support-for-wowza"},"next":{"title":"How to apply accurate buffering strategy","permalink":"/documentation/pr-preview/pr-260/theoplayer/faq/how-to-apply-accurate-buffering-strategy"}}'),r=t("85893"),o=t("50065");let s={},i="How to use the CDN fallback/backup stream feature",l={},c=[{value:"For MPEG-DASH Streams",id:"for-mpeg-dash-streams",level:2},{value:"For HLS Streams",id:"for-hls-streams",level:2},{value:"Resources",id:"resources",level:2}];function u(e){let a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"how-to-use-the-cdn-fallbackbackup-stream-feature",children:"How to use the CDN fallback/backup stream feature"})}),"\n",(0,r.jsx)(a.p,{children:"THEOplayer offers a feature to detect more sources of content in manifest or playlist, so that the player can automatically switch to a fallback URL, in case any of the main content source is unavailable or not reachable. This feature works for both MPEG-DASH and HLS streams out of the box, and does not require any additional configuration to the player."}),"\n",(0,r.jsx)(a.h2,{id:"for-mpeg-dash-streams",children:"For MPEG-DASH Streams"}),"\n",(0,r.jsxs)(a.p,{children:["MPEG-DASH allows you to define multiple ",(0,r.jsx)(a.code,{children:"<BaseURL>"})," elements, which points towards the root source of the content. By default, the player starts playing using the first BaseURL but if it is no longer available or not reachable, player automatically tries to use second url available. The ",(0,r.jsx)(a.code,{children:"<BaseURL>"})," can be added at different layers, it is recommended to provide it on the ",(0,r.jsx)(a.code,{children:"<MPD>"})," or ",(0,r.jsx)(a.code,{children:"<Period>"})," level like an example below:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-xml",children:'<?xml version="1.0"?>\n<MPD type="static" ...>\n	<BaseURL>https://example.com/path/to/your/content/cdn1</BaseURL>\n	<BaseURL>https://example.com/path/to/your/content/cdn2</BaseURL>\n	<BaseURL>https://example.com/path/to/your/content/cdn3</BaseURL>\n	<Period>...</Period>\n</MPD>\n'})}),"\n",(0,r.jsx)(a.h2,{id:"for-hls-streams",children:"For HLS Streams"}),"\n",(0,r.jsx)(a.p,{children:"As per HLS Specification for Apple Devices, playback on stream failover for a rendition is supported, if a redundant variant stream with a different URI is available in the manifest. A variant stream is considered to be redundant, if it has the exact same EXT-X-STREAM-INF tag as the original one. In case the first occurrence of the variant stream is unavailable or not reachable, player by default would use the redundant variant stream for continuing playback. An example of the manifest is like below:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-STREAM-INF:BANDWIDTH=2689440,CODECS="avc1.100.31,mp4a.40.2",RESOLUTION=1120x700\n../../687317/6059a27e_1_2728/chunklist.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=2689440,CODECS="avc1.100.31,mp4a.40.2",RESOLUTION=1120x700\n../../687317-b/6059a27e_1_2728/chunklist.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=1808481,CODECS="avc1.77.40,mp4a.40.2",RESOLUTION=768x480\n../../687317/6059a27e_1_1728/chunklist.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=1808481,CODECS="avc1.77.40,mp4a.40.2",RESOLUTION=768x480\n../../687317-b/6059a27e_1_1728/chunklist.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=1225508,CODECS="avc1.77.32,mp4a.40.2",RESOLUTION=576x360\n../../687317/6059a27e_1_1152/chunklist.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=1225508,CODECS="avc1.77.32,mp4a.40.2",RESOLUTION=576x360\n../../687317-b/6059a27e_1_1152/chunklist.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=712202,CODECS="avc1.66.30,mp4a.40.2",RESOLUTION=460x288\n../../687317/6059a27e_1_640/chunklist.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=712202,CODECS="avc1.66.30,mp4a.40.2",RESOLUTION=460x288\n../../687317-b/6059a27e_1_640/chunklist.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=560232,CODECS="avc1.66.30,mp4a.40.2",RESOLUTION=288x180\n../../687317/6059a27e_1_448/chunklist.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=560232,CODECS="avc1.66.30,mp4a.40.2",RESOLUTION=288x180\n../../687317-b/6059a27e_1_448/chunklist.m3u8\n'})}),"\n",(0,r.jsx)(a.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/creating_a_master_playlist",children:"Apple Variant Stream Documentation"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://dashif.org/docs/DASH-IF-IOP-v4.3.pdf",children:"MPEG-DASH Base URL Documentation"})}),"\n"]})]})}function p(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,a,t){t.d(a,{Z:function(){return i},a:function(){return s}});var n=t(67294);let r={},o=n.createContext(r);function s(e){let a=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);