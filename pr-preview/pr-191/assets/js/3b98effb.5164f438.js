"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["52357"],{96964:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>a});var o=JSON.parse('{"id":"knowledge-base/content-protection/aes-128-encryption","title":"AES-128 Encryption","description":"The Apple HTTP Live Streaming (HLS) specification uses AES-128 encryption to provide content protection. The Advanced Encryption Standard (AES) is a specification for the encryption of electronic data established by the U.S. National Institute of Standards and Technology. In case of HLS with AES-128, individual media segments get encrypted with a 16-octet key. Most modern streaming servers have simple configuration options for enabling AES-128 on HLS streams.","source":"@site/theoplayer/knowledge-base/02-content-protection/02-aes-128-encryption.md","sourceDirName":"knowledge-base/02-content-protection","slug":"/knowledge-base/content-protection/aes-128-encryption","permalink":"/documentation/pr-preview/pr-191/theoplayer/knowledge-base/content-protection/aes-128-encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/knowledge-base/02-content-protection/02-aes-128-encryption.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"Digital Rights Management (DRM) Systems","permalink":"/documentation/pr-preview/pr-191/theoplayer/knowledge-base/content-protection/drm-systems"},"next":{"title":"Playback","permalink":"/documentation/pr-preview/pr-191/theoplayer/knowledge-base/playback/introduction"}}'),i=t("85893"),r=t("50065");let s={},a="AES-128 Encryption",c={},l=[{value:"Content Protection in THEOplayer",id:"content-protection-in-theoplayer",level:2},{value:"Cross Origin Resource Sharing (CORS)",id:"cross-origin-resource-sharing-cors",level:2},{value:"Examples",id:"examples",level:2},{value:"THEOplayer example",id:"theoplayer-example",level:3},{value:"Video on Demand stream with multiple encryption keys",id:"video-on-demand-stream-with-multiple-encryption-keys",level:3}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"aes-128-encryption",children:"AES-128 Encryption"})}),"\n",(0,i.jsxs)(n.p,{children:["The Apple ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-191/theoplayer/knowledge-base/streaming/http-live-streaming",children:"HTTP Live Streaming (HLS)"})," specification uses AES-128 encryption to provide content protection. The Advanced Encryption Standard (AES) is a specification for the encryption of electronic data established by the U.S. National Institute of Standards and Technology. In case of HLS with AES-128, individual media segments get encrypted with a 16-octet key. Most modern streaming servers have simple configuration options for enabling AES-128 on HLS streams."]}),"\n",(0,i.jsx)(n.h2,{id:"content-protection-in-theoplayer",children:"Content Protection in THEOplayer"}),"\n",(0,i.jsx)(n.p,{children:"THEOplayer supports decryption and playback of HLS streams with AES-128 content protection out of the box, without extra configuration in the player. In order to play AES-128 content protected streams, the decryption key and an optional initialization vector have to be provided in the manifest. When configured correctly, THEOplayer allows playback of AES-128 content protected streams on all supported devices in real time. It allows for the usage of a single key, or a rotating key."}),"\n",(0,i.jsx)(n.p,{children:"In order to make sure THEOplayer can decrypt the stream, make sure the following information is correct in the manifest:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If a decryption key is specified, it is relevant for all following media segments. This allows you to specify a key for each segment or one for the whole manifest"}),"\n",(0,i.jsx)(n.li,{children:"The decryption key can be hosted externally (by referencing the key URL) or embedded in the manifest file (by key value)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cross-origin-resource-sharing-cors",children:"Cross Origin Resource Sharing (CORS)"}),"\n",(0,i.jsxs)(n.p,{children:["Make sure CORS is enabled both on the ",(0,i.jsx)(n.strong,{children:"media segments"})," that have to be downloaded, decrypted and played as well as the ",(0,i.jsx)(n.strong,{children:"decryption key"})," if referenced externally in the manifest file."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"theoplayer-example",children:"THEOplayer example"}),"\n",(0,i.jsxs)(n.p,{children:["There\u2019s a demo of THEOplayer playing an AES-128 Content Protected stream at ",(0,i.jsx)(n.a,{href:"https://demo.theoplayer.com/drm-aes-protection-128-encryption",children:"https://demo.theoplayer.com/drm-aes-protection-128-encryption"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"video-on-demand-stream-with-multiple-encryption-keys",children:"Video on Demand stream with multiple encryption keys"}),"\n",(0,i.jsx)(n.p,{children:"An example manifest of a 44-second long VOD stream protected with AES-128 content protection - each media segment has its own key."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOWCACHE:1\n#EXT-X-KEY:METHOD=AES-128,URI="segment-00000.key"\n#EXTINF:4.458667,\nsegment-00000.ts.enc\n#EXT-X-KEY:METHOD=AES-128,URI="segment-00001.key"\n#EXTINF:4.010000,\nsegment-00001.ts.enc\n#EXT-X-KEY:METHOD=AES-128,URI="segment-00002.key"\n#EXTINF:4.468667,\nsegment-00002.ts.enc\n#EXT-X-KEY:METHOD=AES-128,URI="segment-00003.key"\n#EXTINF:3.893000,\nsegment-00003.ts.enc\n#EXT-X-KEY:METHOD=AES-128,URI="segment-00004.key"\n#EXTINF:4.007333,\nsegment-00004.ts.enc\n#EXT-X-KEY:METHOD=AES-128,URI="segment-00005.key"\n#EXTINF:3.292667,\nsegment-00005.ts.enc\n#EXT-X-KEY:METHOD=AES-128,URI="segment-00006.key"\n#EXTINF:4.011667,\nsegment-00006.ts.enc\n#EXT-X-KEY:METHOD=AES-128,URI="segment-00007.key"\n#EXTINF:4.001000,\nsegment-00007.ts.enc\n#EXT-X-KEY:METHOD=AES-128,URI="segment-00008.key"\n#EXTINF:4.011667,\nsegment-00008.ts.enc\n#EXT-X-KEY:METHOD=AES-128,URI="segment-00009.key"\n#EXTINF:4.001000,\nsegment-00009.ts.enc\n#EXT-X-KEY:METHOD=AES-128,URI="segment-00010.key"\n#EXTINF:4.011667,\nsegment-00010.ts.enc\n#EXT-X-TARGETDURATION:5\n#EXT-X-ENDLIST\n'})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var o=t(67294);let i={},r=o.createContext(i);function s(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);